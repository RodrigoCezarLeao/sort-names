import { Users } from "./users";

export interface Participant {
    id: string;
    name: string;
    alias?: string;
    type: Users;
    small_group_id: string;
    active: boolean;
    checked: boolean;
    mail?: string;
    phone?: string;    
}