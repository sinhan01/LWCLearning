public with sharing class pdfController {
    @AuraEnabled
    public static Attachment generatePDF(Id recordId, String htmlData){
        Pagereference page = Page.renderAsPDF;
        page.getParameters().put('pdfText', htmlData);

        Contact con = New Contact(Id=recordId);
        Attachment objAttachment = new Attachment();
        objAttachment.Name='invoice.pdf';
        objAttachment.ParentId = con.id;
        objAttachment.Body = page.getContentaspdf();
        objAttachment.IsPrivate = false;

        insert objAttachment;
        return objAttachment;
    }
}
