import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToLwc extends NavigationMixin(LightningElement) {


    navigateToLWC(){
        var defination={
            componentDef:'c:navigateLwcTarget',
            attributes:{
                recordId:'a983489023eojkdljd',
                someValue: 'some random data'
            }
        }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(defination))
            }
        })
    }
}