import { Injectable } from '@angular/core';
import { baseGraphCMSFetch } from '../base_request';
import { SMALL_GROUP_MAIN_ID } from '../constants/general';
import { PARTICIPANT } from '../data/data';
import { generateUUID } from '../helpers';
import { Participant } from '../interfaces/participant';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  async getSmallGroupParticipants (id: string = SMALL_GROUP_MAIN_ID) {
      const cmsQuery = { 
          query : `
              query MyQuery {
                  participants(where: {smallGroup: {id : "${id}"} }, last: 50) {
                      id
                      name
                      alias
                      type
                      active
                      mail
                      phone                
                  }
              }
      `};

      return (await baseGraphCMSFetch(cmsQuery))?.data?.participants;      
  }

  async publishParticipant(id: string) {    
    const cmsQuery = {
        query: `
            mutation {
                publishParticipant(to:PUBLISHED, where:{id: "${id}"}) {
                    id
                }
            }
        `
    };

    return await baseGraphCMSFetch(cmsQuery);
}

  async add(name: string, role: Users, alias: string, mail: string, phone: string) {
    if (name && role) {
      const newParticipant = {
        // id: generateUUID(),
        name: name,
        type: role,
        small_group_id: SMALL_GROUP_MAIN_ID,
        alias: !alias ? name.split(" ")?.[0] : alias,
        mail: mail,
        phone: phone,
        active: true,
        checked: false,
      };

      try {
        const cmsQuery = { 
            query : `
                mutation {
                    createParticipant(data: {
                      name: "${newParticipant.name}",
                      type: ${newParticipant.type},
                      smallGroup: {connect: {id: "${newParticipant.small_group_id}"} },
                      alias: "${newParticipant.alias}",
                      mail: "${newParticipant.mail}",
                      phone: "${newParticipant.phone}",
                      active: ${newParticipant.active}
                    }) { id }
                }
        `};

        var res = await baseGraphCMSFetch(cmsQuery);        
        const newParticipant2 = {...newParticipant, id: res?.data?.createParticipant?.id};
        await this.publishParticipant(newParticipant2?.id);                
      }catch(error) {
        const errorMessage = `error inserting ${name} (${role}) - ${error}`;
        alert(errorMessage);
        console.log(errorMessage);
      }
    }
  }

  async delete(id: string) {
    const cmsQuery = {
        query: `
            mutation {
                deleteParticipant(where:{id: "${id}"}) {
                    id
                }
            }
        `
    };

    await baseGraphCMSFetch(cmsQuery);
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
