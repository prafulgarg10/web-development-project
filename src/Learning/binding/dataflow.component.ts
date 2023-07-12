import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';



export interface IPriceQuote{
    stockSymbol: string;
    lastPrice: number;
}

export interface ILogger{
    log(msg:string):void;
}

@Component({
    selector: 'app-dataflow',
    template: `
    <div class="bg-warning">
    <h2 class="bg-info">Parent Comp</h2>
    <app-price-quoter (lastPriceEvent)="priceQuoteHandler($event)"></app-price-quoter>
    <app-notifier [info]="stockInfo"></app-notifier>
    </div>
    
    `
})

//parent
export class DataFlowComponent implements OnInit {
    stockSymbol:string='';
    price:number=0;
    stockInfo:IPriceQuote={
        stockSymbol:this.stockSymbol,
        lastPrice:this.price
    }
    constructor() { }

    ngOnInit() { }

    priceQuoteHandler(e:IPriceQuote){
        this.stockSymbol=e.stockSymbol;
        this.price=e.lastPrice;
        this.stockInfo={
            stockSymbol:this.stockSymbol,
            lastPrice:this.price
        }
    }
}


//child
@Component({
    selector: 'app-price-quoter',
    template: `
    <div class="bg-secondary">
    <h2 class="text-dark">Child Price Quoter</h2>
    <h3>{{company}} - {{price|currency:'USD'}}</h3>
    </div>
    
    `
})

export class PriceQuoterComponent implements OnInit, ILogger {
    @Output() lastPriceEvent = new EventEmitter<IPriceQuote>();
    company:string="Bank of America";
    price:number=0;
    
    constructor() {
        window.setInterval(()=>{
            let priceQuote:IPriceQuote={
                stockSymbol:this.company,
                lastPrice:100*Math.random()
            }
            this.price=priceQuote.lastPrice;
            this.lastPriceEvent.emit(priceQuote);
        },1000);
     }
    
    log(msg: string): void {
        console.log("PriceQuoterComponent: " + msg);
    }

    ngOnInit() { }

    
}


//helper component


@Component({
    selector: 'app-notifier',
    template: `
    <div class="bg-success">
    <h2 class="text-dark">Notifier Component</h2>
    <h3>Stock details: {{info.stockSymbol}} - {{info.lastPrice | currency:'USD'}}</h3>
    </div>
    
    `
})

export class NotifierComponent implements OnInit {
    @Input() info:IPriceQuote = {stockSymbol:'',lastPrice:0}

    
    constructor() { }

    ngOnInit() { }
}