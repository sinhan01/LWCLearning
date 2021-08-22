import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToVfpage extends NavigationMixin(LightningElement) {

    navigateToVfpage(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/apex/navigateVfPage'
            }
        }).then(generatedURL=>{
            console.log(generatedURL)
            window.open(generatedURL)
        })
    }
}