import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import ID from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'

export default class WireDemoUserDetail extends LightningElement {
    userId = ID
    userDetails
    fields = [NAME_FIELD,EMAIL_FIELD]
    //@wire(getRecord,{recordId:'0050R000008rJRpQAM', fields:['User.Name', 'User.Email']})
    @wire(getRecord,{recordId:'0050R000008rJRpQAM', fields:'$fields'})
    userDetailHandler({data,error}){
        if(data){
            this.userDetails = data.fields
        }
        if(error){
            console.error(error)
        }
    }

    @wire(getRecord,{recordId:'$userId', fields:'$fields'})
    userDetailProperty
}