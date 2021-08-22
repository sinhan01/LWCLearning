import { LightningElement,wire } from 'lwc';
import { getNavItems } from 'lightning/uiAppsApi';
export default class WireGetNavItemsDemo extends LightningElement {
    result
    @wire(getNavItems,{pageSize:30,navItemNames:['standard-Account']})
    navItemHandler({data,error}){
        if(data){
            console.log(data)
            this.result = data.navItems[0]
        }
    }
}