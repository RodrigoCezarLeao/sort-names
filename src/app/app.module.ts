import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ListNamesComponent } from './component/list-names/list-names.component';
import { BaseModalComponent } from './component/base-modal/base-modal.component';
import { PatchNotesComponent } from './component/modal/patch-notes/patch-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListNamesComponent,
    BaseModalComponent,
    PatchNotesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
