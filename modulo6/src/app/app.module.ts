import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroToServicesComponent } from './intro-to-services/intro-to-services.component';
import { GetDemoComponent } from './gets/get-demo/get-demo.component';
import { GetListDemoComponent } from './get-list-demo/get-list-demo.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { HttpPostDemoComponent } from './http-post-demo/http-post-demo.component';
import { HttpPatchDemoComponent } from './http-patch-demo/http-patch-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroToServicesComponent,
    GetDemoComponent,
    GetListDemoComponent,
    HttpPostDemoComponent,
    HttpPatchDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
