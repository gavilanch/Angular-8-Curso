import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionDemoComponent } from './interpolacion-demo/interpolacion-demo.component';
import { EventBindingDemoComponent } from './event-binding-demo/event-binding-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionDemoComponent,
    EventBindingDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
