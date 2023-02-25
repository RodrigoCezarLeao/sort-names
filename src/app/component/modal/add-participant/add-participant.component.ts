import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent {
  @Output("close_modal") close_modal: EventEmitter<any> = new EventEmitter();
  
  name_input: string = "";

  message_code: number = 0;

  constructor(private participantService: ParticipantService){}
  
  async addParticipant(name_input: HTMLInputElement, category_input: HTMLSelectElement, alias_input: HTMLInputElement, mail_input: HTMLInputElement, phone_input: HTMLInputElement, message: HTMLElement) {
    console.log("add");
  }
}
