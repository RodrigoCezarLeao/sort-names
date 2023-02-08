import { Component } from '@angular/core';
import { shuffle } from 'src/app/helpers';
import { People } from 'src/app/interfaces/people';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-list-names',
  templateUrl: './list-names.component.html',
  styleUrls: ['./list-names.component.css']
})
export class ListNamesComponent {
  people: People[] = [];  
  checkedPeople: People[] = [];
  shuffledNames: string[] = [];
  shuffledDate: string = "";
  booleanToggle: boolean = true;

  
  constructor(private peopleService: PeopleService) {
    this.getNames();
  }

  anyoneSelected(){
    return this.people.filter(x => x.checked).length === 0;
  }

  justOneSelected() {
    return this.people.filter(x => x.checked).length === 1;
  }

  addPerson(elem: any){
    this.peopleService.addPerson(elem.value);
    this.getNames();
  }

  selectAll(){
    this.people.forEach(x => {      
      this.checkPerson(x, this.booleanToggle);
    });
    this.booleanToggle = !this.booleanToggle;
  }

  cleanShuffle() {
    this.shuffledNames = [];
  }

  deletePeople(){
    const peopleToBeDeleted = this.people.filter(x => x.checked);
    const confirm = window.confirm(`Deseja excluir '${peopleToBeDeleted?.[0].name}'`);

    if (confirm){
      this.peopleService.delete(peopleToBeDeleted);
      this.getNames();
    }
    
  }

  getNames(){
    const people = this.peopleService.getAllPeople();
    this.people = people.sort((a: People, b: People) => a.name >= b.name ? 1 : -1)
    this.checkedPeople = this.people.filter(x => x.checked);
    
    
  }

  checkPerson(person: People, checked?: boolean){
    person.checked = checked === undefined ? !person.checked : checked;
    this.peopleService.update(person);
    this.checkedPeople = this.people.filter(x => x.checked);
  }

  shuffleNames(){
    const presentPeople = this.people.filter(x => x.checked);
    this.shuffledNames = presentPeople.map(x => x.name).sort(() => Math.random() - 0.5);
    this.shuffledDate = `${ (new Date().getDate()).toString().padStart(2, "0")}/${(new Date().getMonth() + 1).toString().padStart(2, "0")}/${new Date().getFullYear()}`;
  }
}
