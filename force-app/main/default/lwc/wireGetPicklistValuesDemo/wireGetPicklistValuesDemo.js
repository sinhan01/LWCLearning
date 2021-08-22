import { LightningElement,wire } from 'lwc';
import { getPicklistValues,getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
export default class WireGetPicklistValuesDemo extends LightningElement {

    INDUSTRY_FIELD = INDUSTRY_FIELD
    TYPE_FIELD = TYPE_FIELD
    ACCOUNT_OBJECT = ACCOUNT_OBJECT
    
    industryPickListValues
    selectedIndustry=''
    industryOptions
    selectedType=''
    TypeOptions
    
    @wire(getObjectInfo, {objectApiName:'$ACCOUNT_OBJECT'})
    getrecordTypeId

  
    @wire(getPicklistValues,{recordTypeId:'$getrecordTypeId.data.defaultRecordTypeId',fieldApiName:'$INDUSTRY_FIELD'})
    getIndustryPicklist({data, error}){
        if(data){
            console.log(data)
            this.industryOptions = [...this.generatePicklist(data)]

        }
    }

    generatePicklist(data){
        return data.values.map(item=>({label:item.label, value:item.value}))
    }
    
    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }

    @wire(getPicklistValues,{recordTypeId:'$getrecordTypeId.data.defaultRecordTypeId',fieldApiName:'$TYPE_FIELD'})
    getTypePicklist({data, error}){
        if(data){
            console.log(data)
            this.TypeOptions = [...this.generatePicklist(data)]

        }
    }
    handleTypeChange(event) {
        this.selectedType = event.detail.value;
    }
}