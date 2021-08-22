import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
export default class WireGetRecordDemo extends LightningElement {
    
    @api recordId
    name
    owner
    annualRevenue
    accountFields = [NAME_FIELD,OWNER_NAME_FIELD,ANNUAL_REVENUE_FIELD]
    @wire(getRecord, {recordId:'$recordId',fields:'$accountFields'})
    //@wire(getRecord, {recordId:'$recordId', layoutTypes:['Full'], modes:['View']})
    getFieldValues({data,error}){
        if(data){
            console.log(data)
            // Below code without getFielValue
        //     this.name = data.fields.Name.displayValue?data.fields.Name.displayValue:data.fields.Name.value
        //     this.owner = data.fields.Owner.displayValue
        //     this.annualRevenue = data.fields.AnnualRevenue.displayValue?data.fields.AnnualRevenue.displayValue:data.fields.AnnualRevenue.value

            //Below code with getFieldValue / getFieldDisplayValue
            this.name = getFieldValue(data, NAME_FIELD)
            this.owner = getFieldValue(data, OWNER_NAME_FIELD)
            this.annualRevenue = getFieldDisplayValue(data, ANNUAL_REVENUE_FIELD)
         }
    }
}