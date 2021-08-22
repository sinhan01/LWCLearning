import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/CsvController.getAccounts'
import {exportCSVFile} from 'c/utilsCSV'
export default class CsvDemo extends LightningElement {

    accountData=[]
    accountHeaders={
        'Id':'Record Id',
        'Name':'Name',
        'AnnualRevenue': 'Annual Revenue',
        'Phone':'Phone',
        'Industry':'Industry'
    }
    @wire(getAccounts)
    accountHandler({data,error}){
        if(data){
            console.log(data)
            this.accountData = data
        }
        if(error){
            console.error(error)
        }
    }

    csvGenerator(){
        //header, totalData, fileTitle
        exportCSVFile(this.accountHeaders, this.accountData, 'account_records')
    }
}