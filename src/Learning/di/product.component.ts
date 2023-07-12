import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
    selector: 'app-di',
    templateUrl: './product.component.html',
    //providers: [ProductService] //component level
})

export class ProductComponent implements OnInit {
    product: any;
    
    constructor(private ps: ProductService) { }

    ngOnInit() { 
        this.product = this.ps.getProductInfo();
    }
}