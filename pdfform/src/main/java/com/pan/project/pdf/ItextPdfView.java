package com.pan.project.pdf;

import java.io.FileOutputStream;
import java.io.StringReader;
import java.text.DateFormat;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.itextpdf.text.Document;
import com.itextpdf.text.Element;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.Barcode128;
import com.itextpdf.text.pdf.ColumnText;
import com.itextpdf.text.pdf.PdfContentByte;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.PdfStamper;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.tool.xml.XMLWorkerHelper;
import com.pan.project.model.Register;

public class ItextPdfView extends AbstractITextPdfView {

	private static final DateFormat DATE_FORMAT = DateFormat.getDateInstance(DateFormat.SHORT);

	@Override
	protected void buildPdfDocument(Map<String, Object> model, Document document, PdfWriter writer,
			HttpServletRequest request, HttpServletResponse response) throws Exception {

		
		Barcode128 code128 = new Barcode128();
		code128.setGenerateChecksum(true);
		code128.setCode("1234554321");

		document.add(code128.createImageWithBarcode(writer.getDirectContent(), null, null));

		Register userForm = (Register) model.get("userForm");

		String str = "<html><body> <i>Hello World </i> </body></html>";

		PdfPTable table = new PdfPTable(4);
		table.setWidths(new int[] { 10, 60, 30, 60 });
		XMLWorkerHelper.getInstance().parseXHtml(writer, document, new StringReader(str));

		table.addCell("ID");
		table.addCell("Name");
		table.addCell("Date" + DATE_FORMAT);
		table.addCell("Dummy");

		table.addCell("Personal In");

		document.add(table);
		

	}

}