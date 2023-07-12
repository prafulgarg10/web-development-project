import { Injectable } from '@angular/core';
import { Product } from './product';

interface ILogger{
    logMessage(msg:string):void
}

// @Injectable({providedIn:'root'}) //Globally available->available untill the application is running
@Injectable()
export class ProductService implements ILogger{
    constructor() { }
    
    logMessage(msg:string){
        console.log("Product Logs: " + msg);
    }

    getProductInfo():Product{
        this.logMessage("getProductInfo() called");
        return new Product(1, "Charger",1000);
    }
    
}