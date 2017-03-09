package com.pan.project.pdf;

import java.io.ByteArrayOutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.view.AbstractView;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.Element;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.Rectangle;
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

		List<PdfCleanUpLocation> cleanUpLocations = new ArrayList<PdfCleanUpLocation>();
		cleanUpLocations.add(new PdfCleanUpLocation(1, new Rectangle(340f, 800f, 480f, 825f), BaseColor.GREEN));
		PdfCleanUpProcessor cleaner = new PdfCleanUpProcessor(cleanUpLocations, pdfStamper);
		cleaner.cleanUp();

		Register reg = (Register) model.get("userForm");

		ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new Phrase(reg.getLastnameupp()), 195, 610, 0);

		ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new Phrase(reg.getFirstnameupp()), 195, 595, 0);

		ColumnText.showTextAligned(canvas, Element.ALIGN_LEFT, new Phrase(reg.getMiddlenameupp()), 195, 580, 0);

		pdfStamper.close();

		reader.close();

		writeToResponse(response, out);
	}

	@Override
	protected boolean generatesDownloadContent() {
		return true;
	}
}
