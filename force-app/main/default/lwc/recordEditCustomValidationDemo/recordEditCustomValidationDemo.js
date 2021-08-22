import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class RecordEditCustomValidationDemo extends LightningElement {
    objectName = ACCOUNT_OBJECT
    inputValue = ''
    handleChange(event){
        this.inputValue = event.target.value
    }

    handleSubmit(event){
        event.preventDefault()
        const inputCmp = this.template.querySelector('lightning-input')
        const value = inputCmp.value

        if(!value.includes('Australia')){
            inputCmp.setCustomValidity("This account name must include Australia")
        }else{
            inputCmp.setCustomValidity("")
            const fields = event.detail.fields
            fields.Name = this.inputValue

            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputCmp.reportValidity()
    }

    success(event){
        const toastEvent = new ShowToastEvent({
            title:'Account Created',
            message:'Record ID: '+event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastEvent)
    }
}