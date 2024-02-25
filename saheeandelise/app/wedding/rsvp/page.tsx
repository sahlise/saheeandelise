"use client";
import { Event } from '@mui/icons-material';
import React, { useState, FormEvent } from 'react'
import { useForm } from "react-hook-form";
import FindNameForm from '../components/RsvpFindNameForm';
import { get as levenshteinDistance } from 'fast-levenshtein';
import { guests } from '../guestList';
import { Group } from '../models/Group';
import { Person } from '../models/Person';

export default function Page(this: any) {
  
  const [searchResults, setSearchResults] = useState<Group[]>([]);

  const searchForRsvp = (name: String) => {
    console.log("Search for name " + name + " now");

    const calculatedSearchResults = guests.map(group => {
      const score = Math.min(...group.people.map(person => 
        levenshteinDistance(name.toLowerCase(), person.firstName.toLowerCase() + ' ' + person.lastName.toLowerCase())
      ));
      return { ...group, score }; // Append the score to each group
    }).sort((a, b) => a.score - b.score)  // Sort groups by score in ascending order
    .slice(0, 5); // Get first 5 elements



    setSearchResults(calculatedSearchResults); // Update the state with the calculated results
    console.log(calculatedSearchResults)
  };

function formatGroupNames(people: Person[]): string {
  const names = people.map(person => `${person.firstName} ${person.lastName}`);

  if (names.length > 1) {
    // Join all but the last name with a comma, and the last two names with "and"
    const lastTwoNames = names.slice(-2).join(' and ');
    const commaSeparated = names.slice(0, -2).join(', ');
    const formattedNames = [commaSeparated, lastTwoNames].filter(n => n).join(', ');
    return `${formattedNames}'s Party`;
  } else if (names.length === 1) {
    // Only one name, so just return it followed by "'s Party"
    return `${names[0]}'s Party`;
  } else {
    // No names, return an empty string or a placeholder text
    return "No one's Party";
  }
}

  return (
    <div className="h-full">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-5xl m-5">RSVP</div>
        <div>Enter the name</div>
        <FindNameForm findName={searchForRsvp} />
      </div>
      <div>
      {searchResults.map(group => (
      <div key={group.groupId} className="mt-4">
        <h2 className="text-lg font-bold">{formatGroupNames(group.people)}</h2>
      </div>
    ))}
      </div>
    </div>
  )
}