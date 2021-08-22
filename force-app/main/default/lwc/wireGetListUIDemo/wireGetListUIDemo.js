import { LightningElement,wire } from 'lwc';
import {getListUi} from 'lightning/uiListApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class WireGetListUIDemo extends LightningElement {
    //CONTACT_OBJECT = CONTACT_OBJECT
    error;
    displayColumns;
    @wire(getListUi,{objectApiName:ACCOUNT_OBJECT.objectApiName, ListViewApiName:'AllAccounts'})
    listInfo({error,data}){
        if(data){
            console.log(data)
            this.displayColumns = data.displayColumns;
            this.error = undefined;
        }
        if(error){
            console.error(error)
            this.error = error;
            this.displayColumns = undefined;
        }
    }
}