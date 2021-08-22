import { LightningElement,wire } from 'lwc';
import { getObjectInfo,getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import OPPTY_OBJECT from '@salesforce/schema/Opportunity'
export default class WireGetObjectInfoDemo extends LightningElement {
    defaultRecordTypeId
    ACCOUNTOBJECT = ACCOUNT_OBJECT
    objectNames = [ACCOUNT_OBJECT,CONTACT_OBJECT,OPPTY_OBJECT]
    objectResult

    @wire(getObjectInfo,{objectApiName:'$ACCOUNTOBJECT'})
    objectInfoHandler({data, error}){
        if(data){
            //console.log(data)
            this.defaultRecordTypeId = data.defaultRecordTypeId
        }
        if(error){
            //console.error(error)
        }
    }

    @wire(getObjectInfos,{objectApiNames:'$objectNames'})
    getObjects({data,error}){
        if(data){
            console.log(data.results)
            this.objectResult = data.results
        }
        if(error){
            console.error(error)
        }
    }
}