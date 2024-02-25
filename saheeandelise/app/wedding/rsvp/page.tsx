"use client";
import { Event } from '@mui/icons-material';
import React, { useState, FormEvent } from 'react'
import { useForm } from "react-hook-form";
import FindNameForm from '../components/RsvpFindNameForm';
import { get as levenshteinDistance } from 'fast-levenshtein';
import { guests } from '../guestList';
import { Group } from '../models/Group';
import { Person } from '../models/Person';
import Link from 'next/link';
import Image from 'next/image';
import "./style.css"


export default function Page(this: any) {

  const [searchResults, setSearchResults] = useState<Group[]>([]);

  const searchForRsvp = (name: string) => {
    console.log("Search for name " + name + " now");

    //setSearchResults(performLevenshtienDistance(name)); // Update the state with the calculated results
    setSearchResults(performSearchForLastAndFirst(name));
  };

  function performLevenshtienDistance(name: string): any {
    const calculatedSearchResults = guests.map(group => {
      const score = Math.min(...group.people.map(person =>
        levenshteinDistance(name.toLowerCase(), person.firstName.toLowerCase() + ' ' + person.lastName.toLowerCase())
      ));
      return { ...group, score }; // Append the score to each group
    }).sort((a, b) => a.score - b.score)  // Sort groups by score in ascending order
      .slice(0, 4); // Get first 5 elements
      return calculatedSearchResults
  }

  function performSearchForLastAndFirst(name: string): any {
    const searchResults =  guests.filter(group => {
      return group.people.some(person => (person.firstName + ' ' + person.lastName).includes(name))
    });

    return searchResults
  }

  function formatGroupNames(people: Person[]): string {
    const names = people.map(person => `${person.firstName} ${person.lastName}`);

    if (names.length > 2) {
      //Only do the first name, the rest of them will be small underneith
      return `Party of ${names[0]},`;
    }
    if (names.length === 2) {
      // Join all but the last name with a comma, and the last two names with "and"
      const lastTwoNames = names.slice(-2).join(' and ');
      const commaSeparated = names.slice(0, -2).join(', ');
      const formattedNames = [commaSeparated, lastTwoNames].filter(n => n).join(', ');
      return `Party of ${formattedNames}`;
    } else if (names.length === 1) {
      // Only one name, so just return it followed by "'s Party"
      return `Party of ${names[0]}`;
    } else {
      // No names, return an empty string or a placeholder text
      return "No one's Party";
    }
  }

  function formatExtraNames(people: Person[]): string {
    const names = people.map(person => `${person.firstName}`);
    if(names.length > 2) {
      //concat the names of the rest of the people
      const lastTwoNames = names.slice(-2).join(' and ');
      const commaSeparated = names.slice(1, -2).join(', ');
      const formattedNames = [commaSeparated, lastTwoNames].filter(n => n).join(', ');
      return `${formattedNames}`;
    }
    return "";
  }

  return (
    <div className="bg-white">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-5xl m-5">RSVP</div>
        <div className="text-xl">Search for your name.</div>
        <FindNameForm findName={searchForRsvp} />

        <div className="mt-5">
          <div className="">

            <div className="relative w-full flex flex-col justify-center items-center ">
              <div className="flex justify-center items-center md:w-full">
                <div className="flex justify-center items-center">
                  <div className="md:w-3/4">
                    <Image src="../../images/scroll.png"
                      alt="Image of Sahee shaped like an S, Elise shaped like an E"
                      width={1000}
                      height={1000}
                      priority={true}
                    />
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col  md:w-1/2">
                {searchResults.map(group => (
                  <div key={group.groupId}
                    className="md:mt-4">
                    <Link href={`/wedding/rsvp/response?groupid=${group.groupId}`}>
                      <h2 className="text-lg md:text-4xl pt-2 md:pt-4 almendra-regular-italic">{formatGroupNames(group.people)}</h2>
                      <h2 className="text-md md:text-2xlalmendra-regular-italic">{formatExtraNames(group.people)}</h2>
                      <h2 className="font-bold md:text-lg pb-2 md:pb-4 font-italized almendra-regular-italic underline">RSVP</h2>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}