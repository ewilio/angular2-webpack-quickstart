import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './_shared/not-found.component';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HomeModule,
    AboutModule
  ],
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }