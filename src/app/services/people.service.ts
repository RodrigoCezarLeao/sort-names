import { Injectable } from '@angular/core';
import { PEOPLE } from '../data/data';
import { generateUUID } from '../helpers';
import { People } from '../interfaces/people';

const baseURL = "http://localhost:4200"

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  getAllPeople() {
    return PEOPLE;
  }

  addPerson(name: string)
  {
    PEOPLE.push({
      name: name,
      checked: false,
      id: generateUUID()
    })
  }

  delete(people: People[]){
    const index = PEOPLE.indexOf(people?.[0]);
    PEOPLE.splice(index, 1);
  }

  update(person: People){
    const index = PEOPLE.indexOf(person);
    PEOPLE[index] = person;
  }

  getAllPeopleLiveServer(){
    return fetch(`${baseURL}/db`, {
      method: "GET", 
      headers: {"Content-Type": "application/json"}
    }).then(resp => resp.json())
  }

  addPersonLiveServer(name: string){
    return fetch(`${baseURL}/People`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"        
      },
      body: JSON.stringify({
        name: name,
        checked: false,
        id: generateUUID()
      })
    }).then(resp => resp.json())    
  }

  deleteLiveServer(people: People[]){
    const promises = [];
    for(let person of people)
    {
      promises.push(fetch(`${baseURL}/People` + person.id, {method: "DELETE"}).then(resp => resp.json()));
    }

    return Promise.all(promises);
  }

  updateLiveServer(person: People){
    return fetch(`${baseURL}/People` + person.id, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json"        
      },
      body: JSON.stringify({
        name: person.name,
        checked: person.checked,
        id: person.id
      })
    }).then(resp => resp.json())    
  }
}
