"use client";
import { Event } from '@mui/icons-material';
import React, { useState, FormEvent } from 'react'
import { useForm } from "react-hook-form";
import FindNameForm from '../components/RsvpFindNameForm';
import { get as levenshteinDistance } from 'fast-levenshtein';
import { guests } from '../data/guestList';
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

  function performSearchForLastAndFirst(name: string): any {
    if(!name) {
      //empty string, don't return anything
      return [];
    }
    const searchResults =  guests.filter(group => {
      return group.people.some(person => (person.name.toLowerCase()).includes(name.toLowerCase())) || group.groupName.toLowerCase().includes(name.toLowerCase())
    });

    return searchResults
  }

  function formatNames(people: Person[]): string {
    return people.length > 1 ? people.map(person => person.name).join(', ') : '';
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
                    <Link href={`/wedding/rsvp/${group.groupId}`}>
                      <h2 className="text-lg md:text-4xl pt-2 md:pt-4 almendra-regular-italic">{group.groupName}</h2>
                      <h2 className="text-md md:text-2xlalmendra-regular-italic">{formatNames(group.people)}</h2>
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