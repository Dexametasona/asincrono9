import { CompAsinc9Module } from './comp-asinc9/comp-asinc9.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompAsinc9Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
