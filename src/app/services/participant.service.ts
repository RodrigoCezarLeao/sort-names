import { Injectable } from '@angular/core';
import { baseGraphCMSFetch } from '../base_request';
import { PARTICIPANT } from '../data/data';
import { generateUUID } from '../helpers';
import { Participant } from '../interfaces/participant';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  async getSmallGroupParticipants (id: string) {
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

  async addGuest(participant: Participant) {
    if (participant.name && participant.type) {
      try {
        const cmsQuery = { 
            query : `
                mutation {
                    createParticipant(data: {
                      name: "${participant.name}",
                      type: ${participant.type},
                      smallGroup: {connect: {id: "${participant.small_group_id}"} },
                      alias: "${participant.alias}",
                      mail: "${participant.mail}",
                      phone: "${participant.phone}",
                      active: ${participant.active}
                    }) { id }
                }
        `};

        var res = await baseGraphCMSFetch(cmsQuery);
        const newParticipant2 = {...participant, id: res?.data?.createParticipant?.id};
        await this.publishParticipant(newParticipant2?.id);
        return newParticipant2.id;
      }catch(error) {
        const errorMessage = `Erro ao adicionar o participante '${participant.name}' como '${participant.type}'!\n${error}`;
        alert(errorMessage);
        console.error(errorMessage);
        return null;
      }
      
    }
  }

  async promoteGuest(id: string){
    if (id) {      
      try {
        const cmsQuery = { 
          query : `
            mutation {
              updateParticipant(data: {type: member}, 
                where: {id: "${id}"})
              {id}
            }              
        `};

        var res = await baseGraphCMSFetch(cmsQuery);        
        await this.publishParticipant(id);
        return true;
      }catch(error) {
        const errorMessage = `Erro ao promover o visitante de id '${id}'!\n${error}`;
        alert(errorMessage);
        console.error(errorMessage);
        return false;
      }
    }

    return false;
  }

  async delete(id: string) {
    try{
      if (id) {
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
        return true;
      }

      throw new Error("Id não preenchido.");
    }catch (error) {
      const errorMessage = `Erro ao excluir o participante de id '${id}'!\n${error}`;
      alert(errorMessage);
      console.error(errorMessage);
      return false;
    }
    
  }

  async update(participant: Participant) {
    try {
      if (participant.id && participant.name && participant.type) {
        const cmsQuery = { 
          query : `
              mutation {
                  updateParticipant(data: {
                    name: "${participant.name}",
                    type: ${participant.type},                
                    alias: "${participant.alias}",
                    mail: "${participant.mail}",
                    phone: "${participant.phone}",
                    active: ${participant.active}
                  }, where: {id: "${participant.id}"}) { id }
              }
        `};

        await baseGraphCMSFetch(cmsQuery);
        await this.publishParticipant(participant.id);
        return true;
      }

      throw new Error("Id, nome ou tipo não preenchidos.");
    }catch(error) {
      const errorMessage = `Erro ao atualizar o participante '${participant.name}'!\n${error}`;
      alert(errorMessage);
      console.error(errorMessage);
      return false;
    }    
  }

}
