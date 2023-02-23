import { Injectable } from '@angular/core';
import { SMALL_GROUP_MAIN_ID } from '../constants/general';
import { PARTICIPANT } from '../data/data';
import { generateUUID } from '../helpers';
import { Participant } from '../interfaces/participant';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  getAllParticipant() {
    return PARTICIPANT;
  }

  add(name: string, role: Users, alias: string, mail: string, phone: string)
  {
    PARTICIPANT.push({
      id: generateUUID(),
      name: name,
      type: role,
      small_group_id: SMALL_GROUP_MAIN_ID,
      alias: alias,
      mail: mail,
      phone: phone,
      active: true,
      checked: false,
    })
  }

  delete(people: Participant[]){
    const index = PARTICIPANT.indexOf(people?.[0]);
    PARTICIPANT.splice(index, 1);
  }

  update(person: Participant){
    const index = PARTICIPANT.indexOf(person);
    PARTICIPANT[index] = person;
  }



  /*
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

  deleteLiveServer(people: Participant[]){
    const promises = [];
    for(let person of people)
    {
      promises.push(fetch(`${baseURL}/People` + person.id, {method: "DELETE"}).then(resp => resp.json()));
    }

    return Promise.all(promises);
  }

  updateLiveServer(person: Participant){
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
  */
}
