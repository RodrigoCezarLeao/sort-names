import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ListNamesComponent } from './component/list-names/list-names.component';
import { BaseModalComponent } from './component/base-modal/base-modal.component';
import { PatchNotesComponent } from './component/modal/patch-notes/patch-notes.component';
import { AddParticipantComponent } from './component/modal/add-participant/add-participant.component';
import { EditParticipantComponent } from './component/modal/edit-participant/edit-participant.component';
import { FormsModule } from '@angular/forms';
import { InfoParticipantComponent } from './component/modal/info-participant/info-participant.component';
import { LoginComponent } from './component/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListNamesComponent,
    BaseModalComponent,
    PatchNotesComponent,
    AddParticipantComponent,
    EditParticipantComponent,
    InfoParticipantComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
