import { Component, OnInit, signal, effect, computed } from '@angular/core';

@Component({
    selector: 'app-signal',
    template:`
    <div>
    <h2>Signal in Angular 16</h2>
    <h4>Enter email: <input type="text" [(ngModel)]="mail"/></h4> 
    <h4>{{mail}}</h4>
    <div>Details: {{fullName()}}</div>
    <button (click)="setName('Kanika')">Change Name</button>
    </div>
    `
})

export class SignalComponent implements OnInit {
    mail:string='';
    firstName:any=signal('Praful'); //signal in angular 16, to mutate the state
    lastName:any=signal('Garg');
    fullName:any = computed(()=>{
        return `${this.firstName()} ${this.lastName()}`
    })
    
    //ngModel for 2 way binding-> use only for boolean value as it re-render the comp again and again
    constructor() { 
        effect(()=>{
            console.log("Under effect: ", this.fullName());
        })
    }

    setName(newName:string){
        this.firstName.set(newName);
    }

    ngOnInit() { }
}