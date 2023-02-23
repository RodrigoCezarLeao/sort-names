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
  
  addParticipant(name_input: HTMLInputElement, category_input: HTMLSelectElement, alias_input: HTMLInputElement, mail_input: HTMLInputElement, phone_input: HTMLInputElement, message: HTMLElement) {
    const name = name_input.value;
    const category = <Users> category_input.selectedOptions?.[0].value;
    const alias = alias_input.value;
    const mail = mail_input.value;
    const phone = phone_input.value;

    
    if (name && category)
    {
      this.participantService.add(name, category, alias, mail, phone)
      this.message_code = 1;
      setTimeout(() => {
        this.message_code = 0;
        this.close_modal.emit();
      }, 3000);
      message.scrollIntoView(true);
      
    }
  }
}
