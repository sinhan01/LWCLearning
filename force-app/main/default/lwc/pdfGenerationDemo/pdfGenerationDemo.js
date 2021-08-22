import { LightningElement,api } from 'lwc';
import generatePDF from '@salesforce/apex/pdfController.generatePDF'
export default class PdfGenerationDemo extends LightningElement {

    @api recordId
    imageUrl='http://books.google.com/books/content?id=MTByDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
    invoiceData={
        invoiceNo:'123',
        invoiceCreated:'August 18, 2021',
        invoiceDue:'December 31, 2021',
        companyName:'Nikhil, INC',
        address1:'250 Broadway',
        address2:'NYC, NY 10007'
    }
    clientData={
        client:'Acme Corp',
        username:'John Doe',
        email:'john@example.com'
    }
    services=[
        {name:'Consultant fee',amount:1000.00},
        {name:'Website Design',amount:300.00},
        {name:'Hosting (3 months)',amount:75.00}
    ]

    get totalAmount(){
        return this.services.reduce((total, service)=>{
            return total=total+service.amount
        },0)    
    }

    pdfHandler(){
        let content = this.template.querySelector('.container')
        console.log(content.outerHTML)
        generatePDF({recordId:this.recordId, htmlData:content.outerHTML}).then(result=>{
            console.log("attachment id", result)
            window.open(`https://velocity-inspiration-6528-dev-ed--c.documentforce.com/servlet/servlet.FileDownload?file=${result.Id}`)
        }).catch(error=>{
            console.error(error)
        })
    }
}