import { Component } from '@angular/core';
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
  shuffledNames: string[] = [];
  shuffledDate: string = "";
  booleanToggle: boolean = true;
  showModal: boolean = false;

  
  constructor(private participantService: ParticipantService) {
    this.getParticipants();
  }

  anyoneSelected(){
    return this.participants.filter(x => x.checked).length < 3;
  }

  justOneSelected() {
    return this.participants.filter(x => x.checked).length === 1;
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

  async deletePeople(){
    const peopleToBeDeleted = this.participants.find(x => x.checked);
    const confirm = window.confirm(`Deseja excluir '${peopleToBeDeleted?.name}'`);

    if (confirm && peopleToBeDeleted?.id){
      await this.participantService.delete(peopleToBeDeleted?.id);
      await this.getParticipants();
    }
    
  }

  async getParticipants(){
    const people = await this.participantService.getSmallGroupParticipants();
    console.log("🚀 ~ file: list-names.component.ts:60 ~ ListNamesComponent ~ getParticipants ~ people:", people)
    this.participants = people.sort((a: Participant, b: Participant) => a.name >= b.name ? 1 : -1);
    this.checkedPeople = this.participants.filter(x => x.checked);
  }

  checkPerson(person: Participant, checked?: boolean){
    person.checked = checked === undefined ? !person.checked : checked;
    this.participantService.update(person);
    this.checkedPeople = this.participants.filter(x => x.checked);
  }

  shuffleNames(){
    const presentPeople = this.participants.filter(x => x.checked);
    this.shuffledNames = presentPeople.map(x => x.name).sort(() => Math.random() - 0.5);
    this.shuffledDate = `${ (new Date().getDate()).toString().padStart(2, "0")}/${(new Date().getMonth() + 1).toString().padStart(2, "0")}/${new Date().getFullYear()}`;
  }

  isModalOpened() {
    return this.showModal === true;
  }


  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.getParticipants();
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
