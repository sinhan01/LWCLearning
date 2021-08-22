import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c'
import { subscribe, unsubscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {

    receivedMessage
    subscription
    @wire(MessageContext)
        context

    connectedCallback(){
        this.subscribeMessage();
    }
    subscribeMessage(){
        this.subscription = subscribe(this.context, SAMPLEMC, (message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
    }

    handleMessage(message){
        this.receivedMessage = message.lmsdata.value? message.lmsdata.value : 'No Message Published'
    }

    unsubscribeHandler(){
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}