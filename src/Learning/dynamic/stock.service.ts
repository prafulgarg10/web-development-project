import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class StockService {
    public message:string="Stock val is $30";
    
    constructor() { 
        
    }

    getStockInfo():string{
        return this.message;
    }
    
}