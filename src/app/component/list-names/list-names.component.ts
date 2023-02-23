import { Component } from '@angular/core';
import { shuffle } from 'src/app/helpers';
import { Participant } from 'src/app/interfaces/participant';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-list-names',
  templateUrl: './list-names.component.html',
  styleUrls: ['./list-names.component.css']
})
export class ListNamesComponent {
  people: Participant[] = [];  
  checkedPeople: Participant[] = [];
  shuffledNames: string[] = [];
  shuffledDate: string = "";
  booleanToggle: boolean = true;
  showModal: boolean = false;

  
  constructor(private participantService: ParticipantService) {
    this.getNames();
  }

  anyoneSelected(){
    return this.people.filter(x => x.checked).length === 0;
  }

  justOneSelected() {
    return this.people.filter(x => x.checked).length === 1;
  }

  selectAll(){
    this.people.forEach(x => {      
      this.checkPerson(x, this.booleanToggle);
    });
    this.booleanToggle = !this.booleanToggle;
  }

  cleanShuffle() {
    this.shuffledNames = [];
    this.booleanToggle = false;
    this.selectAll();
  }

  deletePeople(){
    const peopleToBeDeleted = this.people.filter(x => x.checked);
    const confirm = window.confirm(`Deseja excluir '${peopleToBeDeleted?.[0].name}'`);

    if (confirm){
      this.participantService.delete(peopleToBeDeleted);
      this.getNames();
    }
    
  }

  getNames(){
    const people = this.participantService.getAllParticipant();    
    this.people = people.sort((a: Participant, b: Participant) => a.name >= b.name ? 1 : -1)
    this.checkedPeople = this.people.filter(x => x.checked);
    
    
  }

  checkPerson(person: Participant, checked?: boolean){
    person.checked = checked === undefined ? !person.checked : checked;
    this.participantService.update(person);
    this.checkedPeople = this.people.filter(x => x.checked);
  }

  shuffleNames(){
    const presentPeople = this.people.filter(x => x.checked);
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
  }
}
