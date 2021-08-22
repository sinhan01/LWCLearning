import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class WireCreateRecordDemo extends LightningElement {

    fromFields={}
    changeHandler(event){
        const {name, value} = event.target
        this.fromFields[name] = value
    }

    createContact(){
        const recordInput = {apiName: CONTACT_OBJECT.objectApiName,fields:this.fromFields}
        createRecord(recordInput).then(result=>{
            this.showToast('Success!!', `contact created succcessfully with id ${result.id}`)
            this.template.querySelector('form.createForm').reset()
            this.fromFields={}
        }).catch(error=>{
            this.showToast('Error Creating Record', error.body.message, 'error')
        })
    }

    showToast(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant: variant || 'success'
        }))
    }
}