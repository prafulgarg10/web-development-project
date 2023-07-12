import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { StockComponent } from './stock.component';

@Component({
    selector: 'app-dynamic',
    template: `
    <div>
    <h2 class="text-primary">Dynamic Component</h2>
    <button (click)="load()">Show stock info</button>
    </div>
    
    `
})

//view container ref contains services
export class DynamicComponent implements OnInit {
    constructor(private vcr: ViewContainerRef) { }

    ngOnInit() { }

    load(){
        const ref = this.vcr.createComponent(StockComponent); //dynamic injection
        ref.changeDetectorRef.detectChanges()

    }
    //stock component will act as a child component whereever it is called in parent. 

}