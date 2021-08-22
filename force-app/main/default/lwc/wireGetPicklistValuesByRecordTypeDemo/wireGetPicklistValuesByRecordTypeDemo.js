import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class WireGetPicklistValuesByRecordTypeDemo extends LightningElement {
    ACCOUNT_OBJECT=ACCOUNT_OBJECT
    ratingOption
    industryOptions
    selectedRating=''
    selectedIndustry=''
    @wire(getObjectInfo, {objectApiName:'$ACCOUNT_OBJECT'})
    getRecordType

    @wire(getPicklistValuesByRecordType, {objectApiName:'$ACCOUNT_OBJECT', recordTypeId:'$getRecordType.data.defaultRecordTypeId'})
    getAllPicklist({data, error}){
       if(data){
           console.log(data)
           this.ratingOption = [...this.picklistGenerator(data.picklistFieldValues.Rating)]
           this.industryOptions = [...this.picklistGenerator(data.picklistFieldValues.Industry)]
       }
       if(error){
          // console.error(error)
       }
    }

    picklistGenerator(data){
        return data.values.map(item=>({"label":item.label, "value":item.value}))
    }

    handleChange(event){
        console.log(event.target.name + '==>' + event.target.value)
        if(event.target.name==='Industry'){
            this.selectedIndustry = event.target.value
        }
        if(event.target.name==='Rating'){
            this.selectedRating = event.target.value
        }        
    }
}