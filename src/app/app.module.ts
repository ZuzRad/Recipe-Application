import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';

// Import routing module
//import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    //AppRoutingModule, // Routing module import
    BrowserAnimationsModule, // Required for Angular Material
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
