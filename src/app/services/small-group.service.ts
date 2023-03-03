import { Injectable } from '@angular/core';
import { baseGraphCMSFetch } from '../base_request';

@Injectable({
  providedIn: 'root'
})
export class SmallGroupService {
  async checkSmallGroupLogin (usernameLogin: string) {
    const cmsQuery = { 
        query : `
            query MyQuery {
                smallGroup(where: {usernameLogin : "${usernameLogin}"}) {
                    id
                    name
                }
            }
    `};

    return (await baseGraphCMSFetch(cmsQuery))?.data?.smallGroup;
}
}
