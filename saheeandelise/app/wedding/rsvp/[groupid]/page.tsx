'use client'
import React, { useEffect, useState } from 'react';
import { redirect, useSearchParams, useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RsvpForm } from '../../models/RsvpForm';
import TablePreferences from '../../components/TableSelect';
import Link from 'next/link';

export default function Page({
  params
}: {
  params: { groupid: string }
}) {
  //const searchParams = useSearchParams()
  //const groupId = searchParams.get('groupid')
  const groupId = params.groupid;


  if (!groupId) {
    redirect('/wedding/rsvp')
  }

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [hasSubmitError, setSubmitError] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);


  const { register, handleSubmit, watch, reset, setValue, formState: { errors } } = useForm<RsvpForm>();

  //use this only for debugging
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setHasError(false)
      try {
        const response = await fetch('/api/rsvp');
        //https://vvtlljqgg3.execute-api.us-east-2.amazonaws.com/prod/rsvp?groupId=default_group_id

        if (response.status != 200) {
          throw new Error('Api error');
        }

        let jsonData = await response.json();

        reset(jsonData);


      } catch (error) {
        console.error('Error fetching mock data:', error);
        setHasError(true);
      } finally {
        window.scrollTo(0, 0);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const updateTablePreferences = (tabelPreferences: string[]) => {
    setValue('tablePreference', tabelPreferences, { shouldValidate: true });
  }

  const peopleValues = watch("people");

  const onSubmit: SubmitHandler<RsvpForm> = async (data: RsvpForm) => {
    setIsSubmitLoading(true)

    data.groupId = groupId;
    if (!data.confirmEmail) {
      data.confirmEmail = "";
    }
    console.log(data)
    setHasError(false)
    try {

      const settings = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      };

      const response = await fetch('/api/rsvp', settings);
      //https://vvtlljqgg3.execute-api.us-east-2.amazonaws.com/prod/rsvp

      //TODO take this out obvi
      await sleep(3000);

      if (response.status != 200) {
        throw new Error('Api error');
      }

      //reponse is 200, let's throw up a success message
      setIsSubmitSuccess(true);
      //router.push('wedding/rsvp/success')

    } catch (error) {
      console.error('Error fetching mock data:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitLoading(false);
      window.scrollTo(0, 0);
    }

    //TODO send data to api
  }


  return (
    <div className="bg-white">

      {/* Error message */}
      <div className={`${hasError || hasSubmitError ? 'visible' : 'hidden'}`}>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-3" role="alert">
          <div className="block sm:inline">An error has occurred. Please try again, or if the error persists,
            <Link className="hover:underline font-bold pl-1" href="/wedding/contact-us">Contact us</Link>
          </div>

        </div>
      </div>

      {/* Success message */}
      <div className={`${isSubmitSuccess ? 'visible' : 'hidden'}`}>
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative m-3" role="alert">
          <span className="block sm:inline">Thank you for submitting the RVSP, it has been recieved! Feel free to come back to your form to edit if needed before May 8th.</span>
        </div>
      </div>

      {/* Loading Icon */}
      <div className={`w-full flex flex-col justify-center items-center ${isLoading ? 'visible mt-20' : 'hidden'}`} role="status">
        <svg aria-hidden="true" className="inline w-20 h-20 text-gray-200 animate-spin fill-weddingMaroon" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>



      <div className={`flex flex-col justify-center items-center ${isLoading || hasError ? 'hidden' : 'visible'}`}>
        <div className="text-5xl text-weddingMaroon mt-6">RSVP</div>
        <form className="m-4 flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
          {peopleValues?.map((person, index) => (
            <div key={person.id} className="w-full md:w-3/4 my-4 border border-gray-300 rounded-lg p-4">
              <div className="">
                <div className="mb-2 text-lg text-weddingMaroon">{"Will " + person.firstName + " " + person.lastName + " be attending?"}</div>
                <ul className="grid w-full gap-6 md:grid-cols-2 mb-2">
                  <li>
                    <input id={"attending-yes-" + person.id} className="hidden peer" {...register(`people.${index}.willAttend`)} type="radio" value="true" defaultChecked={person.willAttend === 'true'} />
                    <label htmlFor={"attending-yes-" + person.id} className="inline-flex items-center justify-between w-full p-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-weddingMaroon peer-checked:text-weddingMaroon hover:text-gray-600 hover:bg-gray-100">
                      <div className="block">
                        <div className="w-full font-semibold">Yes</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input id={"attending-no-" + person.id} className="hidden peer" {...register(`people.${index}.willAttend`)} type="radio" value="false" defaultChecked={person.willAttend === 'false'} />
                    <label htmlFor={"attending-no-" + person.id} className="inline-flex items-center justify-between w-full p-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-weddingMaroon peer-checked:text-weddingMaroon hover:text-gray-600 hover:bg-gray-100">
                      <div className="block">
                        <div className="w-full font-semibold">No</div>
                      </div>
                    </label>
                  </li>
                </ul>

                {peopleValues && peopleValues[index].willAttend === 'true' && (
                  <div className="mt-4">
                    <div className="mb-2 text-lg text-weddingMaroon">{"What kind of meal for " + person.firstName + " " + person.lastName + "?"}</div>
                    <ul className="grid w-full gap-6 md:grid-cols-3">
                      <li>
                        <input id={"meal-adult-" + person.id} className="hidden peer" {...register(`people.${index}.mealPreference`, { required: true })} type="radio" value="adult" defaultChecked={person.mealPreference === 'adult'} />
                        <label htmlFor={"meal-adult-" + person.id} className="h-full inline-flex justify-between w-full p-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-weddingMaroon peer-checked:text-weddingMaroon hover:text-gray-600 hover:bg-gray-100">
                          <div className="block">
                            <div className="w-full font-semibold">Adult</div>
                            <div className="w-full">Buffet-styled</div>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input id={"meal-child-" + person.id} className="hidden peer" {...register(`people.${index}.mealPreference`, { required: true })} type="radio" value="child" defaultChecked={person.mealPreference === 'child'} />
                        <label htmlFor={"meal-child-" + person.id} className="inline-flex items-center justify-between w-full p-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-weddingMaroon peer-checked:text-weddingMaroon hover:text-gray-600 hover:bg-gray-100">
                          <div className="block">
                            <div className="w-full font-semibold">Child</div>
                            <div className="w-full">Includes chicken nuggets, mac and cheese, and applesauce</div>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input id={"meal-none-" + person.id} className="hidden peer" {...register(`people.${index}.mealPreference`, { required: true })} type="radio" value="none" defaultChecked={person.mealPreference === 'none'} />
                        <label htmlFor={"meal-none-" + person.id} className="inline-flex justify-between w-full h-full p-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-weddingMaroon peer-checked:text-weddingMaroon hover:text-gray-600 hover:bg-gray-100">
                          <div className="block">
                            <div className="w-full font-semibold">No meal</div>
                            <div className="w-full">Ex: This guest is a baby</div>
                          </div>
                        </label>
                      </li>
                    </ul>

                  </div>
                )}

              </div>
            </div>
          ))}

          {/* Table preferences */}
          <div className="border border-gray-300 rounded-lg p-4 w-full md:w-3/4 my-4">
            <div className="text-weddingMaroon text-2xl md:text-xl font-semibold">Table Preference</div>
            <div className="">We would like to give guests the opportunity to choose who they sit by. We will do our best to align table preferences but it is not guarenteed.</div>
            <div className="my-2">
              <TablePreferences updatePreferences={updateTablePreferences} currentGroupId={groupId} />
            </div>

          </div>

          {/* Optionals */}
          <div className="border border-gray-300 rounded-lg p-4 w-full md:w-3/4">
            <div className="text-weddingMaroon text-2xl md:text-xl font-semibold">Optional</div>

            {/* Email */}
            <div className="mt-4">
              <label className="py-2 text-lg text-weddingMaroon" htmlFor='email'>
                Email
              </label>
              <input
                id='email'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="e.g. email@email.com"
                {...register("email", { maxLength: 100, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })}
              />
              {errors.email?.type == 'maxLength' && <div className="text-red-600">Too long!</div>}
              {errors.email?.type == 'pattern' && <div className="text-red-600">Invalid format</div>}
            </div>

            {/* Special Accommodations */}
            <div className="mt-4">
              <label className="text-lg text-weddingMaroon" htmlFor='speicalAccommodations'>
                Special accommodations
              </label>
              <input
                id='speicalAccommodations'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="e.g. Wheelchair access needed"
                {...register("specialAccommodations", { maxLength: 100 })}
              />
              {errors.email?.type == 'maxLength' && <div className="text-red-600">Charater limit exceeded (100)</div>}
            </div>

            {/* Song Request */}
            <div className="my-4">
              <label className="text-lg text-weddingMaroon" htmlFor='songRequest'>
                Song request
              </label>
              <input
                id='songRequest'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="e.g. Lovely Day by Bill Withers"
                {...register("songRequest", { maxLength: 100 })}
              />
              {errors.email?.type == 'maxLength' && <div className="text-red-600">Too long!</div>}
            </div>

            {/* Note to the couple */}
            <div className="my-2">
              <label className="text-lg text-weddingMaroon" htmlFor='noteToCouple'>
                Note to the couple
              </label>
              <textarea
                id='noteToCouple'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="e.g. Yahoo!"
                {...register("noteToCouple", { maxLength: 256 })}
              />
              {errors.email?.type == 'maxLength' && <div className="text-red-600">Too long!</div>}
            </div>
          </div>


          <input className="fixed bottom-2000 left-2000 w-[1px] h-[1px]"
            id='emailConfirm'
            aria-hidden="true"
            type="text"
          />

          {/* Submit button */}
          <div className="w-3/4 md:w-1/2 my-4 flex justify-center items-center">
            <button
              className={`
                    w-full md:w-3/4 py-2 px-4
                    bg-weddingTan hover:opacity-75
                    rounded font-bold
                    focus:outline-none focus:shadow-outline
                    border-solid border-2 border-weddingTan
                    ${isSubmitLoading ? 'hidden' : 'visible'}`}
              type="submit">
              SEND
            </button>

            {/* Loading Icon */}
            {/* className={`flex flex-col justify-center items-center ${isLoading || hasError ? 'hidden' : 'visible'}`} */}
            <div className={`w-full flex flex-col justify-center items-center ${isSubmitLoading ? 'visible' : 'hidden'}`} role="status">
              <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin fill-weddingMaroon" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
};
