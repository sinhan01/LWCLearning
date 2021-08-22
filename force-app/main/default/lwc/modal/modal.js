import { LightningElement } from 'lwc';

export default class Modal extends LightningElement {


    closeModal(){
       const customEvent = new CustomEvent('close')
       this.dispatchEvent(customEvent)
    }

    handleFooterSlotChange(){
        const el = this.template.querySelector('.slds-modal__footer')
        if(el){
            el.classList.remove('slds-hide')
        }
    }
}