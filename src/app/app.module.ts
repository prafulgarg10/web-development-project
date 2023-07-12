import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; //rxjs

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from 'src/Learning/binding/binding.component';
import { DIModule } from 'src/Learning/di/di.module';
import { BindingModule } from 'src/Learning/binding/binding.module';
import { SignalComponent } from './signal.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent, LifecycleComponent } from 'src/Learning/lifecycle/lifecycle.component';
import { DynamicComponent } from 'src/Learning/dynamic/dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    SignalComponent,
    LifecycleComponent,
    ChildComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DIModule,
    BindingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  // constructor(private appRef: ApplicationRef){
  //   const originalTick = appRef.tick;//cds
  //   appRef.tick = function(){
  //     const winPerf = window.performance
  //     const start = winPerf.now();
  //     const retValue = originalTick.apply(this);
  //     const end = winPerf.now();
  //     const runTime = end-start;
  //     window.console.log("Runtime",runTime);
  //     return retValue;
  //   }
  // }
 
}
 
