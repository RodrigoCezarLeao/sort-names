import { Injectable } from '@angular/core';
import { generateUUID } from '../helpers';
import { People } from '../interfaces/people';


const baseURL = "https://my-json-server.typicode.com/RodrigoCezarLeao/sortedNamesBacked"

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  getAllPeople(){
    return fetch(`${baseURL}/db`, {
      method: "GET", 
      headers: {"Content-Type": "application/json"}
    }).then(resp => resp.json())
  }

  addPerson(name: string){
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

  delete(people: People[]){
    const promises = [];
    for(let person of people)
    {
      promises.push(fetch(`${baseURL}/People` + person.id, {method: "DELETE"}).then(resp => resp.json()));
    }

    return Promise.all(promises);
  }

  update(person: People){
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
