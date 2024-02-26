import { Person } from "./Person";

interface RsvpPerson extends Person {
    id: string;
    mealPreference: string;
    willAttend: string;
}

export interface RsvpForm {
    groupId: string;
    dietaryRestrictions: string;
    email: string;
    confirmEmail: string; //honeypot
    noteToCouple: string;
    people: RsvpPerson[];
    songRequest: string;
    specialAccommodations: string;
    tablePreference: string[]; //list of groupIds
};