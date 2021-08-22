import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {

    userName = ["John","Nikhil", "Jane", "Adam"]
    
    fetchDetailHandler(){
        const elem = this.template.querySelector('h1');
        console.log(elem.innerText);
        
        const userElements = this.template.querySelectorAll('.name');
        Array.from(userElements).forEach(item=>{
            console.log(item.innerText);
        })
    }

}