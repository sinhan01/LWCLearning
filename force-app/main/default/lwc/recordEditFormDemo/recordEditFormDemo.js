import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Contact.Name'
import TITLE_FIELD from '@salesforce/schema/Contact.Title'
import PHONE_FIELD from '@salesforce/schema/Contact.Phone'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId'
export default class RecordEditFormDemo extends LightningElement {

    objectName = CONTACT_OBJECT
    //fieldList = [NAME_FIELD,TITLE_FIELD,PHONE_FIELD,EMAIL_FIELD,ACCOUNT_FIELD]
    fieldList = {
        accountField : ACCOUNT_FIELD,
        nameField : NAME_FIELD,
        titleField : TITLE_FIELD,
        phoneField : PHONE_FIELD,
        emailField : EMAIL_FIELD
    }

    handleReset(){
        var inputField = this.template.querySelectorAll('lightning-input-field')
        if(inputField){
            Array.from(inputField).forEach(field=>{
                field.reset()
            })
        }
    }
}