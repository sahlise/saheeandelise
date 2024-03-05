import { Person } from "./Person";

export type Group = {
    groupId: string;
    people: Person[];
    groupName: string;
    groupAltNames: string[];
  };