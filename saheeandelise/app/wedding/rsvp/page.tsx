"use client";
import { IoMdArrowRoundDown } from "react-icons/io";
import { IoMdArrowRoundUp } from "react-icons/io";
import React, { useState, FormEvent } from 'react'
import FindNameForm from '../components/RsvpFindNameForm';
import { guests } from '../data/guestList';
import { Group } from '../models/Group';
import { Person } from '../models/Person';
import Link from 'next/link';
import Image from 'next/image';
import "./style.css"


export default function Page(this: any) {

  const [searchResults, setSearchResults] = useState<Group[]>([]);
  const [subSearchResults, setSubSearchResults] = useState<Group[]>([]);
  const [curSearchIndex, setCurSearchIndex] = useState(0)
  const [hasNoResults, setNoResults] = useState(false)
  const scrollAmount = 3;

  const searchForRsvp = (name: string) => {
    console.log("Search for name " + name + " now");
    setNoResults(false);
    const results = performSearchForLastAndFirst(name)
    setSearchResults(results);
    if(results.length < 1) {
      setNoResults(true);
      setSubSearchResults(results)
    } else {
      setSubSearchResults(results.slice(0, 0 + scrollAmount))
      setCurSearchIndex(0)
    }
  };

  const getNextResults = () => {
    let next = curSearchIndex + scrollAmount;
    if (next >= searchResults.length) {
      next = curSearchIndex;
    }
    setSubSearchResults(searchResults.slice(next, next + scrollAmount));
    setCurSearchIndex(next);
  }

  const getPrevResults = () => {
    let prev = curSearchIndex - scrollAmount;
    if (prev < 0) {
      prev = 0;
    }
    setSubSearchResults(searchResults.slice(prev, prev + scrollAmount));
    setCurSearchIndex(prev);
  }

  

  function performSearchForLastAndFirst(name: string): any {
    if(!name) {
      return [];
    }
    const searchResults =  guests.filter(group => {
      return group.people.some(person => (person.name.toLowerCase()).includes(name.toLowerCase())) 
      || group.groupName.toLowerCase().includes(name.toLowerCase())
      || group.groupAltNames.some(altName => altName.toLowerCase().includes(name.toLowerCase())
      || name.toLowerCase().includes(altName.toLowerCase()))
      
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

            <div className="relative w-full flex flex-col items-center ">
              <div className="flex justify-center items-center md:w-full">
                <div className="flex justify-center items-center">
                  <div className="md:w-3/4">
                    <Image src="../../images/scroll.png"
                      alt="Image of a scroll"
                      width={1000}
                      height={1000}
                      priority={true}
                    />
                  </div>
                </div>
              </div>

              {/* <div className="absolute top-20 left-0 right-0 bottom-0 overflow-y-auto w-1/2" style={{ maxHeight: '400px' }}> */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-20 md:translate-y-20">
              <div className={`${curSearchIndex == 0 ? 'invisible' : 'visible'} flex justify-center items-center p-1`}>
              <div className="flex justify-center items-center h-6 w-6 md:h-12 md:w-12" onClick={() => getPrevResults()}>
                <IoMdArrowRoundUp className="h-full w-full"/>
              </div>
              </div>
              <div className="">
                {subSearchResults.map(group => (
                  <div key={group.groupId}
                    className="md:mt-4">
                    <Link href={`/wedding/rsvp/form?groupid=${group.groupId}`}>
                      <h2 className="text-lg md:text-4xl pt-2 md:pt-4 almendra-regular-italic">{group.groupName}</h2>
                      <h2 className="text-md md:text-2xl almendra-regular-italic">{formatNames(group.people)}</h2>
                      <h2 className="font-bold md:text-lg pb-2 md:pb-4 font-italized almendra-regular-italic underline">RSVP</h2>
                    </Link>
                  </div>
                ))}
                {/* </div> */}

                <div className={`${curSearchIndex + scrollAmount >= searchResults.length ? 'invisible' : 'visible'} flex justify-center items-center p-1`}>
                <div className="flex justify-center items-center h-6 w-6 md:h-12 md:w-12" onClick={() => getNextResults()}>
                  <IoMdArrowRoundDown className="h-full w-full"/>
                </div>
                </div>


                <div className={`${hasNoResults ? 'visible' : 'hidden'} mt-2 text-lg md:text-4xl pt-2 md:pt-4 almendra-regular-italic`}>
                  No search results found
                </div>
              </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}