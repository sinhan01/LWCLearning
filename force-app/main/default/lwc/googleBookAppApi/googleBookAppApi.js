import { LightningElement } from 'lwc';
const GOOGLE_URL = 'https://www.googleapis.com/books/v1/volumes?q='
export default class GoogleBookAppApi extends LightningElement {

    query='ship'
    books
    timer
    connectedCallback(){
        this.callBookApi()
    }

    callBookApi(){
        
        fetch(GOOGLE_URL+this.query)
          .then(response => response.json())
          .then(result => {
            console.log('Success:', result);
            this.books = result.items
          })
          .catch(error => {
            console.error('Error:', error);
          });
    }

    searchBook(event){
        this.query=event.target.value
        window.clearTimeout(this.timer)
        this.timer = setTimeout(()=>{
            this.callBookApi()
        },1000)        
    }
}