import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheaderComponent } from './cheader/cheader.component';
import { CfooterComponent } from './cfooter/cfooter.component';

import {  provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CheaderComponent,
    CfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
