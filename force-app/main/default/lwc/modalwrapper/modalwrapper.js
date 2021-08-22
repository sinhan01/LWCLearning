import { LightningElement } from 'lwc';

export default class Modalwrapper extends LightningElement {

    isOpen=false
    openHandler(){
        console.log('clicked')
        this.isOpen = true
    }
    closeHandler(){
        console.log('clicked')
        this.isOpen = false
    }
}