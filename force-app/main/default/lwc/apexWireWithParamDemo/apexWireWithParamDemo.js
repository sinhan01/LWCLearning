import { LightningElement,wire } from 'lwc';
import filterAccountByType from '@salesforce/apex/AccountController.filterAccountByType'
export default class ApexWireWithParamDemo extends LightningElement {

    selectedType=''
    @wire(filterAccountByType, {
        type:'$selectedType'
    })
    filteredAccounts

    get typeOptions(){
        return[
            {label:"Customer - Direct", value: "Customer - Direct"},
            {label:"Customer - Channel", value: "Customer - Channel"}
        ]
    }

    typeHandler(event){
        this.selectedType = event.target.value
    }
}