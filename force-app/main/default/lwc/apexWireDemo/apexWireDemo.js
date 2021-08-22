import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
export default class ApexWireDemo extends LightningElement {


    accountlist
    accountHandlerList
    @wire(getAccountList)
    getAccount({data,error}){
        if(data){
            this.accountlist = data
        }
    }

    @wire(getAccountList)
    accounthandler({data,error}){
        if(data){
            this.accountHandlerList = data.map(item=>{
                let newType = item.Type==='Customer - Channel'?'Channel':
                item.Type==='Customer - Direct'?'Direct':'--------'
                return {...item, newType}
            })
        }
    }

}