package com.pan.project.pdf;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.view.AbstractView;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.Rectangle;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.ColumnText;
import com.itextpdf.text.pdf.PdfContentByte;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.PdfStamper;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.pdfcleanup.PdfCleanUpLocation;
import com.itextpdf.text.pdf.pdfcleanup.PdfCleanUpProcessor;
import com.pan.project.model.Register;

public abstract class AbstractITextPdfView extends AbstractView {

	public AbstractITextPdfView() {
		setContentType("application/pdf");

	}

	protected void buildPdfMetadata(Map<String, Object> model, Document document, HttpServletRequest request) {
	}

	protected abstract void buildPdfDocument(Map<String, Object> model, Document document, PdfWriter writer,
			HttpServletRequest request, HttpServletResponse response) throws Exception;

	@Override
	protected void renderMergedOutputModel(Map<String, Object> model, HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		ByteArrayOutputStream out = createTemporaryOutputStream();
		Document document = new Document(PageSize.A4);
		PdfWriter writer = PdfWriter.getInstance(document, out);
		writer.setViewerPreferences(PdfWriter.ALLOW_PRINTING | PdfWriter.PageLayoutSinglePage);
		buildPdfMetadata(model, document, request);

		PdfReader reader = new PdfReader("pantemplate.pdf");
		PdfStamper pdfStamper = new PdfStamper(reader, out);
		PdfContentByte canvas = pdfStamper.getOverContent(1);

		cleanup(pdfStamper, new Rectangle(340f, 800f, 480f, 825f));

		BaseFont baseFont = BaseFont.createFont("ufonts.com_arial-unicode-ms.ttf", BaseFont.IDENTITY_H,
				BaseFont.EMBEDDED);
		Font font = new Font(baseFont, 18f, Font.NORMAL);
		char checked = '\u2611';
		char unchecked = '\u2610';

		Register reg = (Register) model.get("userForm");

		Paragraph checkedPara = new Paragraph(String.valueOf(checked), font);

		Paragraph uncheckedPara = new Paragraph(String.valueOf(unchecked), font);

		cleanup(pdfStamper, new Rectangle(175f, 608f, 200f, 618f));
		ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new Phrase(reg.getLastnameupp()), 195, 610, 0);

		cleanup(pdfStamper, new Rectangle(175f, 593f, 200f, 603f));
		ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new Phrase(reg.getFirstnameupp()), 195, 595, 0);

		// cleanup(pdfStamper, new Rectangle(175f, 578f, 200f, 588f));
		ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new Phrase(reg.getMiddlenameupp()), 195, 580, 0);

		// MALE = Mr.
		// FEMAIL = Smt

		if (reg.getGender().equalsIgnoreCase("male")) {
			cleanup(pdfStamper, new Rectangle(210f, 633f, 230f, 622f));
			ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, checkedPara, 225, 620, 0);
		} else {
			cleanup(pdfStamper, new Rectangle(210f, 633f, 230f, 620f));
			ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, uncheckedPara, 225, 620, 0);
		}

		if (reg.getGender().equalsIgnoreCase("female")) {
			cleanup(pdfStamper, new Rectangle(275f, 633f, 290f, 622f));
			ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, checkedPara, 275, 620, 0);
		} else {
			cleanup(pdfStamper, new Rectangle(275f, 633f, 290f, 622f));
			ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, uncheckedPara, 275, 620, 0);
		}

		cleanup(pdfStamper, new Rectangle(30f, 548f, 150f, 558f));
		ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new Phrase(reg.getPrint_firstname()), 165, 550, 0);

		// DOB
		cleanup(pdfStamper, new Rectangle(35f, 410f, 89f, 420f));

		// GENDER For indivuals
		if (reg.getGender().equalsIgnoreCase("male")) {
			cleanup(pdfStamper, new Rectangle(245f, 450f, 260f, 465f));
			ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, checkedPara, 245, 450, 0);
		} else {
			cleanup(pdfStamper, new Rectangle(245f, 450f, 260f, 465f));
			ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, uncheckedPara, 245, 450, 0);
		}

		if (reg.getGender().equalsIgnoreCase("female")) {
			cleanup(pdfStamper, new Rectangle(330f, 450f, 345f, 463f));
			ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, checkedPara, 330, 450, 0);
		} else {
			cleanup(pdfStamper, new Rectangle(330f, 450f, 345f, 463f));
			ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, uncheckedPara, 330, 450, 0);
		}

		// FATHER INFORMATION
		cleanup(pdfStamper, new Rectangle(170f, 368f, 200f, 378f));
		ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new Phrase(reg.getFather_lname()), 165, 550 - 180, 0);

		cleanup(pdfStamper, new Rectangle(170f, 352f, 200f, 362f));
		ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new Phrase(reg.getFather_fname()), 165, 550 - 195, 0);

		cleanup(pdfStamper, new Rectangle(170f, 338f, 200f, 348f));
		ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new Phrase(reg.getFather_mname()), 165, 550 - 210, 0);

		// 5.ADRESS INFORMATION
		cleanup(pdfStamper, new Rectangle(170f, 201f, 230f, 211f));
		ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new Phrase(reg.getFlatroomnoresidence()), 170, 203, 0);

		cleanup(pdfStamper, new Rectangle(170f, 196f, 230f, 186f));
		ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new Phrase(reg.getPremiseresidence()), 170, 189, 0);

		cleanup(pdfStamper, new Rectangle(170f, 180f, 230f, 170f));
		ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new Phrase(reg.getRoadstreetresidence()), 170, 173, 0);

		cleanup(pdfStamper, new Rectangle(170f, 155f, 230f, 165f));
		ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new Phrase(reg.getArealocalityresidence()), 170, 158, 0);

		// District
		cleanup(pdfStamper, new Rectangle(170f, 140f, 230f, 150f));
		ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new Phrase(reg.getDistrict()), 170, 130, 0);

		// State
		cleanup(pdfStamper, new Rectangle(30f, 110f, 300f, 123f));
		ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new Phrase(reg.getSearchstate()), 60, 115, 0);

		ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new Phrase(reg.getPincoderesidence()), 160, 115, 0);

		// ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new
		// Phrase(reg.getResidence_country()), 180, 115, 0);

		// Office Residence

		cleanup(pdfStamper, new Rectangle(170f, 83f, 230f, 94f));
		// ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new
		// Phrase(reg.getFlatroomnoresidence()), 170, 205, 0);

		cleanup(pdfStamper, new Rectangle(170f, 68f, 230f, 79f));
		// ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new
		// Phrase(reg.getPremiseresidence()), 170, 190, 0);

		cleanup(pdfStamper, new Rectangle(170f, 53f, 230f, 64f));
		// ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new
		// Phrase(reg.getRoadstreetresidence()), 170, 175, 0);

		cleanup(pdfStamper, new Rectangle(170f, 38f, 230f, 49f));
		// ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new
		// Phrase(reg.getArealocalityresidence()), 170, 160, 0);

		cleanup(pdfStamper, new Rectangle(170f, 18f, 230f, 29f));
		// ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new
		// Phrase(reg.getSearchstate()), 170, 145, 0);

		// GOTO PAGE2

		ColumnText.showTextAligned(pdfStamper.getOverContent(2), Element.ALIGN_LEFT, new Phrase(reg.getEmail()), 195,
				675, 0);

		ColumnText.showTextAligned(pdfStamper.getOverContent(2), Element.ALIGN_LEFT, new Phrase(reg.getLandLine()), 130,
				695, 0);

		ColumnText.showTextAligned(pdfStamper.getOverContent(2), Element.ALIGN_LEFT, new Phrase(reg.getMobile()), 300,
				695, 0);

		pdfStamper.close();

		reader.close();

		writeToResponse(response, out);
	}

	private void cleanup(PdfStamper pdfStamper, Rectangle rectangle) throws IOException, DocumentException {
		List<PdfCleanUpLocation> cleanUpLocations = new ArrayList<PdfCleanUpLocation>();
		cleanUpLocations.add(new PdfCleanUpLocation(1, rectangle, BaseColor.WHITE));
		PdfCleanUpProcessor cleaner = new PdfCleanUpProcessor(cleanUpLocations, pdfStamper);
		cleaner.cleanUp();

	}

	@Override
	protected boolean generatesDownloadContent() {
		return true;
	}
}
