import { Component, OnInit, Input, ChangeDetectorRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
    selector: 'app-lifecycle',
    template: `
    <div class="bg-warning">
    <h2>Parent comp</h2>
    <h3 class="container">
    <input type="text" [(ngModel)]="searchString"/>
    </h3>
    <app-child [search]="searchString"></app-child>
    </div>
    
    `
})

export class LifecycleComponent implements OnInit {
    
    searchString: string="Printer";


    
    constructor() { }

    ngOnInit() { }
}


@Component({
    selector: 'app-child',
    template: `
    <h2 class="text-danger">
    Search Text: {{search}}
    </h2>
    <h3>Count: {{count}}</h3>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush //when event is fired or new node is added/removed SD, detectChanges
    //then only re-render happens
})

export class ChildComponent implements OnInit, OnChanges {
    @Input() search: string='';
    count:number=0;
    constructor(private cd: ChangeDetectorRef) { 
        console.log("here", this.search)
        cd.detach(); //it will stop rendering this component but inside code will work.
    }

    subscriber: Subscription|undefined;

    ngOnInit() { 
        this.subscriber = interval(1000).subscribe(
            console.log
        );
        // setTimeout(()=>{
        //     this.cd.reattach(); //this will reattach the component
        // },1000)
        setInterval(()=>{
            ++this.count;
            console.log("Count: ", this.count);
        },500)
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        
    }
    // ngOnChanges(changes: SimpleChanges):void{
    //     //fires everytime  when state change
    //     //validation for state
    //     for(let key in changes){
    //         console.log(`${changes[key].currentValue}`)
    //     }
    // }

    //optional to implement
    ngDoCheck():void{
        //fired everytime when state changes
        //cds logic
        console.log("Do Check", this.search);
        if(this.search.length===10){
            this.cd.detectChanges(); //only at this condition this component will be displayed.
        }
    }

    ngAfterViewChecked(){
        //fired everytime, dom manipulation
        console.log("Inside nAVC")
    }

    ngOnDestroy():void{
        //destroy the component
        this.subscriber?.unsubscribe();
    }
}