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
import { PadreComponent } from './padre-a-hijo/padre/padre.component';
import { HijoComponent } from './padre-a-hijo/hijo/hijo.component';

import { PadreComponent as PadreComponent2 } from './hijo-a-padre/padre/padre.component';
import { HijoComponent as HijoComponent2 } from './hijo-a-padre/hijo/hijo.component';
import { PadreHComponent } from './hermanos/padre-h/padre-h.component';
import { Hijo1HComponent } from './hermanos/hijo1-h/hijo1-h.component';
import { Hijo2HComponent } from './hermanos/hijo2-h/hijo2-h.component';
import { PadreSComponent } from './commConServicios/padre-s/padre-s.component';
import { HijoASComponent } from './commConServicios/hijo-a-s/hijo-a-s.component';
import { HijoBSComponent } from './commConServicios/hijo-b-s/hijo-b-s.component';
import { NietoBSComponent } from './commConServicios/nieto-b-s/nieto-b-s.component';
import { NietoASComponent } from './commConServicios/nieto-a-s/nieto-a-s.component';
import { VarRefPlantillaDemoComponent } from './var-ref-plantilla-demo/var-ref-plantilla-demo.component';

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
    NgSwitchDemoComponent,
    PadreComponent,
    HijoComponent,
    PadreComponent2,
    HijoComponent2,
    PadreHComponent,
    Hijo1HComponent,
    Hijo2HComponent,
    PadreSComponent,
    HijoASComponent,
    HijoBSComponent,
    NietoBSComponent,
    NietoASComponent,
    VarRefPlantillaDemoComponent
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
