import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ListNamesComponent } from './component/list-names/list-names.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListNamesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
