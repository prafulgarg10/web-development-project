import { NgModule } from '@angular/core';
import { DataFlowComponent, NotifierComponent, PriceQuoterComponent } from './dataflow.component';
import { CommonModule } from '@angular/common';



@NgModule({
    imports: [CommonModule],
    exports: [DataFlowComponent], //contain parent component only
    declarations: [DataFlowComponent, NotifierComponent, PriceQuoterComponent],
    providers: [],
})
export class BindingModule { }
