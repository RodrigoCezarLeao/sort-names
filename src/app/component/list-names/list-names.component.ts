import { Component, EventEmitter } from '@angular/core';
import { SMALL_GROUP_MAIN_ID } from 'src/app/constants/general';
import { GUEST, LEADER, MEMBER } from 'src/app/constants/participant';
import { PARTICIPANT } from 'src/app/data/data';
import { shuffle } from 'src/app/helpers';
import { Participant } from 'src/app/interfaces/participant';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-list-names',
  templateUrl: './list-names.component.html',
  styleUrls: ['./list-names.component.css']
})
export class ListNamesComponent {
  participants: Participant[] = [];
  checkedPeople: Participant[] = [];
  shuffledNames: Participant[] = [];
  editionParticipant: Participant | undefined = undefined;
  shuffledDate: string = "";
  booleanToggle: boolean = true;
  showEditParticipantModal: boolean = false;
  showInfoParticipantModal: boolean = false;
  addGuestButtonDisabledFlag: boolean = true;
  
  constructor(private participantService: ParticipantService) {
    this.getParticipants();
  }

  isGuestInputValid(input: HTMLInputElement) {    
    if (input.value && this.addGuestButtonDisabledFlag)
    this.addGuestButtonDisabledFlag = false;
    
    if (!input.value && !this.addGuestButtonDisabledFlag)
    this.addGuestButtonDisabledFlag = true;
  }
  
  cleanAddGuestInput(input: HTMLInputElement){
    input.value = "";
    input.focus();
  }

  async addGuest(input: HTMLInputElement) {
    if (input.value) {
      const newParticipant: Participant = {
        id: "",
        name: input.value,
        alias: input.value.split(" ")?.[0],
        type: GUEST,
        small_group_id: SMALL_GROUP_MAIN_ID,
        active: true,
        checked: false
      }

      try {
        var newId = await this.participantService.addGuest(newParticipant);
        if (newId)
          this.participants.push( { ...newParticipant, id: newId} );
        else
          throw new Error("erro ao adicionar novo visitante no banco de dados!");
          
        // alert(`'${newParticipant.name}' adicionado como visitante com sucesso!`);
      }catch(error) {
        alert(`Erro ao adicionar '${newParticipant.name}'. \n ${error}`);        
      }

      this.cleanAddGuestInput(input);
    }
  }

  async promoteGuest() {
    const guestToBecomeMember = this.participants.find(x => x.checked && x.type === GUEST);
    if (guestToBecomeMember)
    {
      try {
        var flag = await this.participantService.promoteGuest(guestToBecomeMember.id);
        if (flag)
          guestToBecomeMember.type = MEMBER;
        else
          throw new Error("erro ao salvar promoção à membro no banco de dados!");
        
        // alert(`Visitante '${guestToBecomeMember.name}' promovido a membro com sucesso!`);
      }catch(error){
        alert(`Erro ao promover o visitante '${guestToBecomeMember.name}'. \n ${error}`);
      }
    }
  }


  anyoneSelected(){
    return this.participants.filter(x => x.checked).length < 3;
  }

  justOneSelected() {
    return this.participants.filter(x => x.checked).length === 1;
  }

  justOneGuestSelected() {
    return this.participants.filter(x => x.checked && x.type === GUEST).length === 1;
  }

  selectAll(){
    this.participants.forEach(x => {      
      this.checkPerson(x, this.booleanToggle);
    });
    this.booleanToggle = !this.booleanToggle;
  }

  cleanShuffle() {
    this.shuffledNames = [];
    this.booleanToggle = false;
    this.selectAll();
  }

  openEditParticipantModal() {
    this.editionParticipant = this.participants.find(x => x.checked);
    this.showEditParticipantModal = true;
  }

  openInfoParticipantsModal() {
    this.showInfoParticipantModal = true;
  }

  async getParticipants(){
    const people = await this.participantService.getSmallGroupParticipants();
    this.participants = people.sort((a: Participant, b: Participant) => a.name >= b.name ? 1 : -1);
    this.checkedPeople = this.participants.filter(x => x.checked);
  }

  checkPerson(person: Participant, checked?: boolean){
    person.checked = checked === undefined ? !person.checked : checked;    
    this.checkedPeople = this.participants.filter(x => x.checked);
  }

  shuffleNames(){
    const presentPeople = this.participants.filter(x => x.checked);
    this.shuffledNames = presentPeople.sort(() => Math.random() - 0.5);
    this.shuffledDate = `${ (new Date().getDate()).toString().padStart(2, "0")}/${(new Date().getMonth() + 1).toString().padStart(2, "0")}/${new Date().getFullYear()}`;
  }

  getTotalMembers() {
    return this.participants.filter(x => x.type === MEMBER || x.type === LEADER).length;
  }

  getTotalGuests() {
    return this.participants.filter(x => x.type === GUEST).length;
  }

  getCheckedMembers() {
    return this.participants.filter(x => (x.type === MEMBER || x.type === LEADER) && x.checked).length;
  }

  getCheckedGuests() {
    return this.participants.filter(x => x.type === GUEST && x.checked).length;
  }

  isGuest(participant: Participant) {
    return participant.type === GUEST;
  }

  isMember(participant: Participant) {
    return participant.type === MEMBER || participant.type === LEADER;
  }
}
