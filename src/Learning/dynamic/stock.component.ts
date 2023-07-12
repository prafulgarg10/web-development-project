import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';

@Component({
    template: `
    <div class="container bg-warning">
     <h3>Stock Component</h3>
     <br/>
     <h3 class="text-danger">The message is: {{invoke()}}</h3>
    </div>
    `
})

export class StockComponent implements OnInit {
    constructor(private ss: StockService) { }

    ngOnInit() { }

    invoke(){
        return this.ss.getStockInfo();
    }
}