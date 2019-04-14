import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionDemoComponent } from './interpolacion-demo/interpolacion-demo.component';
import { EventBindingDemoComponent } from './event-binding-demo/event-binding-demo.component';
import { PropertyBindingDemoComponent } from './property-binding-demo/property-binding-demo.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { NgClassDemoComponent } from './ng-class-demo/ng-class-demo.component';
import { NgStyleDemoComponent } from './ng-style-demo/ng-style-demo.component';
import { NgModelDemoComponent } from './ng-model-demo/ng-model-demo.component';
import { NgIfDemoComponent } from './ng-if-demo/ng-if-demo.component';
import { NgForDemoComponent } from './ng-for-demo/ng-for-demo.component';
import { NgSwitchDemoComponent } from './ng-switch-demo/ng-switch-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionDemoComponent,
    EventBindingDemoComponent,
    PropertyBindingDemoComponent,
    EjemploComponent,
    NgClassDemoComponent,
    NgStyleDemoComponent,
    NgModelDemoComponent,
    NgIfDemoComponent,
    NgForDemoComponent,
    NgSwitchDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
