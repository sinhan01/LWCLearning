import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader';
import fontawesome from '@salesforce/resourceUrl/fontawesome'
export default class MemoryGameLWC extends LightningElement {

    isLibLoaded = false
    openedCards=[]
    matchedCards=[]
    moves = 0
    totalTime = '00.00'
    cards=[
        {id:1, ListClass:'card', type:'diamond', icon:'fa fa-diamond'},
        {id:2, ListClass:'card', type:'plane', icon:'fa fa-paper-plane-o'},
        {id:3, ListClass:'card', type:'anchor', icon:'fa fa-anchor'},
        {id:4, ListClass:'card', type:'bolt', icon:'fa fa-bolt'},
        {id:5, ListClass:'card', type:'cube', icon:'fa fa-cube'},
        {id:6, ListClass:'card', type:'leaf', icon:'fa fa-leaf'},
        {id:7, ListClass:'card', type:'leaf', icon:'fa fa-leaf'},
        {id:8, ListClass:'card', type:'bicycle', icon:'fa fa-bicycle'},
        {id:9, ListClass:'card', type:'bolt', icon:'fa fa-bolt'},
        {id:10, ListClass:'card', type:'bomb', icon:'fa fa-bomb'},
        {id:11, ListClass:'card', type:'diamond', icon:'fa fa-diamond'},
        {id:12, ListClass:'card', type:'anchor', icon:'fa fa-anchor'},
        {id:13, ListClass:'card', type:'bicycle', icon:'fa fa-bicycle'},
        {id:14, ListClass:'card', type:'bomb', icon:'fa fa-bomb'},
        {id:15, ListClass:'card', type:'cube', icon:'fa fa-cube'},
        {id:16, ListClass:'card', type:'plane', icon:'fa fa-paper-plane-o'}                        
    ]

    displayCard(event){
        let currCard = event.target;
        currCard.classList.add("open", "show", "disabled")
        this.openedCards = this.openedCards.concat(event.target)
        //console.log('openedCards : ',this.openedCards);
        const len = this.openedCards.length
        if(len===2){
            this.moves = this.moves + 1
            // if(this.moves === 1){
            //     this.timer()
            // }
            if(this.openedCards[0].type === this.openedCards[1].type){
                this.matchedCards = this.matchedCards.concat(this.openedCards[0],this.openedCards[1])
                //console.log('matchedCards : ',this.matchedCards);
                this.matched()
            }else{
                this.unmatched()
            }
        }
    }

    matched(){
        this.openedCards[0].classList.add("match", "disabled")
        this.openedCards[1].classList.add("match", "disabled")
        this.openedCards[0].classList.remove("show", "open")
        this.openedCards[1].classList.remove("show", "open")
        this.openedCards=[]
    }

    unmatched(){
        this.openedCards[0].classList.add('unmatched')
        this.openedCards[1].classList.add('unmatched')
        this.action('DISABLE')
        setTimeout(()=>{
            this.openedCards[0].classList.remove("show", "open", "unmatched")
            this.openedCards[1].classList.remove("show", "open", "unmatched")
            this.action('ENABLE')
            this.openedCards=[]
        },1100)
    }

    action(action){
        let cards = this.template.querySelectorAll('.card')
        Array.from(cards).forEach(item=>{
            if(action==='ENABLE'){
                let isMatch = item.classList.contains('match')
                if(!isMatch){
                    item.classList.remove('disabled')
                }
            }
            if(action==='DISABLE'){
                item.classList.add('disabled')
            }
        })
    }

    // timer(){
    //     let startTIme = new Date()
    //     setInterval(() => {
            
    //     }, 1000);
    // }

    shuffle(){
        this.openedCards=[]
        this.matchedCards=[]
        this.moves = 0
        this.totalTime = '00.00'
        let el = this.template.querySelectorAll('.card')
        Array.from(el).forEach(item=>{
            item.classList.remove('show','open','match','disabled')
        })

        let array = [...this.cards]
        console.log('newCard = '+array)
        let counter = array.length
        console.log('counter = '+counter)
        while(counter>0){
            let index = math.floor(math.random()*counter)
            console.log('index = '+ index)
            counter--

            let temp = array[counter]
            console.log('temp = '+ temp)
            array[counter] = array[index]
            console.log('newCard[counter] = '+array[counter])
            array[index] = temp
            console.log('newCard[index] = '+array[index])

        }
        this.cards = [...array]
    }
    renderedCallback(){
        if(this.isLibLoaded){
            return
        }
        else{
            loadStyle(this, fontawesome+'/fontawesome/css/font-awesome.min.css').then(()=>{
                console.log("font awesome loaded successfully")
            }).catch(error=>{
                //console.log("error loading font awesome")
                console.error(error)
            })
            this.isLibLoaded = true;
        }
    }
}