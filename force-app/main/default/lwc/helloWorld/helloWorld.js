import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
    // name
    // age = 30;
    // fullname = 'salesforce india';
    // showData = false;
    // details={
    //     name: 'dummy',
    //     place: 'USA'
    // }
    // userList=["A","B","C"];

    fullName = 'Zero To Hero';

    //Methods
    changeNameHandler(event){
        this.fullName = event.target.value;
    }

    address={
        city:'Harrison',
        zipcode:7029,
        country:'USA'
    }
    cityChangeHandler(event){
        //this.address.city = event.target.value;    
        this.address = {...this.address, "city":event.target.value};
    }
}