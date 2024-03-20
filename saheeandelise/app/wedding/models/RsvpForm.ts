import { Person } from "./Person";

interface RsvpPerson extends Person {
    index: string;
    mealPreference: string;
    willAttend: string;
}

export interface RsvpForm {
    groupId: string;
    email: string;
    confirmEmail: string; //honeypot
    noteToCouple: string;
    groupName: string;
    people: RsvpPerson[];   
    songRequest: string;
    specialAccommodations: string;
    tablePreference: string[]; //list of groupIds
    hasAdditionalGuests: string;
    additionalGuests: RsvpPerson[];
};