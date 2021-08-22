import { LightningElement } from 'lwc';
import findAccount from '@salesforce/apex/AccountController.findAccount'
export default class ApexImperativeWithParameterDemo extends LightningElement {

    searchKey=''
    accounts
    timer
    searchHandler(event){
        window.clearTimeout(this.timer)
        this.searchKey = event.target.value
        this.timer = setTimeout(()=>{
            this.callApex()
        },1000)
    }

    callApex(){
        findAccount({
            searchKey: this.searchKey
        }).then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.error(error)
        })
    }

}