import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SMALL_GROUP_MAIN_ID } from 'src/app/constants/general';
import { GUEST } from 'src/app/constants/participant';
import { Participant } from 'src/app/interfaces/participant';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-edit-participant',
  templateUrl: './edit-participant.component.html',
  styleUrls: ['./edit-participant.component.css']
})
export class EditParticipantComponent implements OnInit {
  @Input() prop: any = null;
  @Output() close_modal: EventEmitter<any> = new EventEmitter();

  @Output() propEvent: EventEmitter<any> = new EventEmitter();

  updatedParticipant: Participant = {id: "", name: "", type: GUEST, small_group_id: SMALL_GROUP_MAIN_ID, active: true, checked: true};
  messageCode: number = 0;

  constructor(private participantService: ParticipantService){}

  ngOnInit() {
    const undef = "undefined";
    const nul = "null";
    const name = this.prop?.name;
    const id = this.prop?.id;
    const type = this.prop?.type;    
    const active = this.prop?.active;    
    
    if (name && this.validValue(name) && id && this.validValue(id) && type && this.validValue(type) && active) {
      const mail = this.validValue(this.prop?.mail) ? this.prop.mail : "";
      const phone = this.validValue(this.prop?.phone) ? this.prop.phone : "";
      const alias = this.validValue(this.prop?.alias) ? this.prop.alias : "";
      
      this.updatedParticipant = {
        name: name,
        id: id,
        type: type,
        small_group_id: SMALL_GROUP_MAIN_ID,
        active: active,
        mail: mail,
        phone: phone,
        alias: alias,
        checked: true
      }
    }else {
      alert(`Erro ao editar participante '${name}'.`);
      this.close_modal.emit();
    }
  }

  validValue(str: string) {
    return str && str !== "null" && str !== "undefined";
  }

  async updateParticipant() {
    if (await this.participantService.update(this.updatedParticipant))
    {
      this.messageCode = 1;
      await this.propEvent.emit();
      setTimeout(() => {
        this.close_modal.emit();      
      }, 3000);
    }
  }

  async deleteParticipant() {
    if(confirm(`Deseja deletar o participante '${this.updatedParticipant.name}'?`))
    {
      await this.participantService.delete(this.updatedParticipant.id);
      this.messageCode = 3;
      await this.propEvent.emit();
      setTimeout(() => {
        this.close_modal.emit();      
      }, 3000);
    }
  }
}

