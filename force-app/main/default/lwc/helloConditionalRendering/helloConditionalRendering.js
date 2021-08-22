import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {

    isVisible = false;
    name;
    handleClick(event){
        this.isVisible = true;
    }

    changeHandler(event){
        this.name = event.target.value;
    }

    get helloMethod(){
        return this.name === 'hello';
    }
}