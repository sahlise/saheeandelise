'use client'
import React, { useEffect, useState } from 'react';
import { redirect, useSearchParams, useRouter } from 'next/navigation';
import { SubmitHandler, useForm, useFieldArray, Controller } from 'react-hook-form';
import { RsvpForm } from '../../models/RsvpForm';
import TablePreferences from '../../components/TableSelect';
import Link from 'next/link';
import { IoMdAddCircleOutline } from "react-icons/io";
import Image from 'next/image';
import Footer from '../../components/Footer';
import 'add-to-calendar-button';
import { convertUtcToChicago } from '../../utils/dateUtils';

const baseUrl = 'https://vvtlljqgg3.execute-api.us-east-2.amazonaws.com/prod/rsvp';
//const baseUrl = '/api/rsvp'

export default function Page() {

  const searchParams = useSearchParams()
  const groupId = searchParams.get('groupid')
  console.log(groupId);
  if (!groupId) {

    redirect('/wedding/rsvp')
  }

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [hasSubmitError, setSubmitError] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const [lastModified, setLastModified] = useState("");


  const { register, handleSubmit, watch, reset, setValue, getValues, control, formState: { errors } } = useForm<RsvpForm>(
    {
      defaultValues: {
        additionalGuests: [],
      },
    }
  );

  const { fields, append, remove } = useFieldArray({
    control,
    name: "additionalGuests", // The key in the form values that holds the array
  });

  //use this only for debugging
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));



  useEffect(() => {
    if (!groupId) {
      return
    }

    const fetchData = async () => {
      setIsLoading(true)
      setHasError(false)
      try {
        const response = await fetch(baseUrl + '?groupId=' + groupId);

        if (response.status != 200) {
          throw new Error('Api error');
        }

        let jsonData = await response.json();
        reset(jsonData);
        
        if (jsonData.lastModified) {
          const date = new Date(jsonData.lastModified);
          if (date.toUTCString() == new Date('2024-01-01T00:00:00Z').toUTCString()) {
            setLastModified('');
          } else {
            setLastModified(`Last modified: ${convertUtcToChicago(jsonData.lastModified)}`);
          }
        }


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
  const hasAdditionalGuestsValue = watch("hasAdditionalGuests")

  const onSubmit: SubmitHandler<RsvpForm> = async (data: RsvpForm) => {
    setIsSubmitLoading(true)
    setHasError(false)
    setSubmitError(false)

    if (!data.hasAdditionalGuests || data.hasAdditionalGuests === 'false') {
      //no additional guestss, let's reset the array
      data.additionalGuests = [];
      reset(data);
    }

    data.groupId = groupId;
    data.confirmEmail = "";


    try {

      const settings = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      };

      const response = await fetch(baseUrl, settings);

      //TODO take this out obvi
      //await sleep(3000);

      console.log(data)

      if (response.status != 200) {
        console.log(response);
        throw new Error('Api error');
      }

      //reponse is 200, let's throw up a success message
      setIsSubmitSuccess(true);
      //router.push('wedding/rsvp/success')

    } catch (error) {
      console.error('More details', error);
      setSubmitError(true);
    } finally {
      setIsSubmitLoading(false);
      window.scrollTo(0, 0);
    }
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
          <div className="mt-2">
          <add-to-calendar-button
            styleLight="--btn-background: #570034; --btn-text: #fff; --font: 'Bookinsanity', Arial, sans-serif;"
            styleDark="--btn-background: #570034; --btn-text: #fff; --font: 'Bookinsanity', Arial, sans-serif;"
            name="Sahee and Elise Wedding"
            description="Sahee and Elise are getting married!"
            startDate="2024-06-08"
            endDate="2024-06-08"
            startTime="15:30"
            endTime="23:30"
            timeZone="America/Chicago"
            location="The Swan Barn Door"
            options="['Apple','Google','iCal','Microsoft365','Outlook.com','Yahoo']"
            trigger="click"
            label="Add to Calendar"
            inline
            listStyle="modal"
          /></div>
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
        {/* <div className="grid grid-cols-3 md:grid-cols-3 mt-4 md:w-1/2">
          <div className="flex justify-end items-end">
            <div className="w-1/2 md:w-1/4">
              <Image
                src="../../../images/flower-decoration.png"
                alt="Image of decorative flower"
                width={300}
                height={200}
              />
            </div>
          </div>
          <div className="text-5xl text-weddingMaroon">RSVP</div>
        </div> */}


        <div className="grid grid-cols-3 md:grid-cols-3 mt-4 md:w-1/2">
          <div className="flex justify-end items-center">
            <div className="">
              <Image
                src="../../../images/flower-decoration-long-left.png"
                alt="Image of decorative flower"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="text-4xl md:text-5xl text-weddingMaroon text-center">RSVP</div>
          <div className="flex justify-start items-center">
            <div className="">
              <Image
                src="../../../images/flower-decoration-long.png"
                alt="Image of decorative flower"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>


        {/* <div className="flex items-center md:mb-4">
          <div className=" relative h-[2em] md:h-[6em] flex items-center">
            <Image
              src="../../../images/flower-decoration-long-left.png"
              alt="Description of Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="text-4xl md:text-5xl text-weddingMaroon px-3">RSVP</div>
          <div className=" relative h-[2em] md:h-[6em] flex items-center">
            <Image
              src="../../../images/flower-decoration-long.png"
              alt="Description of Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div> */}



        <form className="m-4 flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full md:w-3/4 ">
            <div className="text-gray-400">{lastModified}</div>
          </div>
          {/* Person data */}
          {peopleValues?.map((person, index) => (
            <div key={person.index} className="w-full md:w-3/4 mb-4 border border-gray-300 rounded-lg p-4">
              <div className="">
                <div className="mb-2 text-lg text-weddingMaroon">{"Will " + person.name + " be attending?"}</div>
                <ul className="grid w-full gap-6 md:grid-cols-2 mb-2">
                  <li>
                    <input id={"attending-yes-" + person.index} className="hidden peer" {...register(`people.${index}.willAttend`)} type="radio" value="true" />
                    <label htmlFor={"attending-yes-" + person.index} className="inline-flex items-center justify-between w-full p-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-weddingMaroon peer-checked:text-weddingMaroon hover:text-gray-600 hover:bg-gray-100">
                      <div className="block">
                        <div className="w-full font-semibold">Yes</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input id={"attending-no-" + person.index} className="hidden peer" {...register(`people.${index}.willAttend`)} type="radio" value="false" />
                    <label htmlFor={"attending-no-" + person.index} className="inline-flex items-center justify-between w-full p-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-weddingMaroon peer-checked:text-weddingMaroon hover:text-gray-600 hover:bg-gray-100">
                      <div className="block">
                        <div className="w-full font-semibold">No</div>
                      </div>
                    </label>
                  </li>
                </ul>

                {peopleValues && peopleValues[index].willAttend === 'true' && (
                  <div className="mt-4">
                    <div className="mb-2 text-lg text-weddingMaroon">{"What kind of meal for " + person.name + "?"}</div>
                    <ul className="grid w-full gap-6 md:grid-cols-3">
                      <li>
                        <input id={"meal-adult-" + person.index} className="hidden peer" {...register(`people.${index}.mealPreference`, { required: true })} type="radio" value="adult" />
                        <label htmlFor={"meal-adult-" + person.index} className="h-full inline-flex justify-between w-full p-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-weddingMaroon peer-checked:text-weddingMaroon hover:text-gray-600 hover:bg-gray-100">
                          <div className="block">
                            <div className="w-full font-semibold">Adult</div>
                            <div className="w-full">Buffet-styled</div>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input id={"meal-child-" + person.index} className="hidden peer" {...register(`people.${index}.mealPreference`, { required: true })} type="radio" value="child" />
                        <label htmlFor={"meal-child-" + person.index} className="inline-flex items-center justify-between w-full p-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-weddingMaroon peer-checked:text-weddingMaroon hover:text-gray-600 hover:bg-gray-100">
                          <div className="block">
                            <div className="w-full font-semibold">Child</div>
                            <div className="w-full">Includes chicken nuggets, mac and cheese, and applesauce</div>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input id={"meal-none-" + person.index} className="hidden peer" {...register(`people.${index}.mealPreference`, { required: true })} type="radio" value="none" />
                        <label htmlFor={"meal-none-" + person.index} className="inline-flex justify-between w-full h-full p-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-weddingMaroon peer-checked:text-weddingMaroon hover:text-gray-600 hover:bg-gray-100">
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

          {/* Has Additional Guests */}
          <div className="border border-gray-300 rounded-lg p-4 w-full md:w-3/4 my-4">
            <div className="text-weddingMaroon text-2xl md:text-xl font-semibold">Additional Guests</div>
            <div className="">
              <div className="mb-2 text-lg text-weddingMaroon">{"Would you like to bring additional guests such as children or other relatives?"}</div>
              <ul className="grid w-full gap-6 md:grid-cols-2 mb-2">
                <li>
                  <input id="additional-guests-yes" className="hidden peer" {...register(`hasAdditionalGuests`)} type="radio" value="true" />
                  <label htmlFor="additional-guests-yes" className="inline-flex items-center justify-between w-full p-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-weddingMaroon peer-checked:text-weddingMaroon hover:text-gray-600 hover:bg-gray-100">
                    <div className="block">
                      <div className="w-full font-semibold">Yes</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input id="additional-guests-no" className="hidden peer" {...register(`hasAdditionalGuests`)} type="radio" value="false" />
                  <label htmlFor="additional-guests-no" className="inline-flex items-center justify-between w-full p-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-weddingMaroon peer-checked:text-weddingMaroon hover:text-gray-600 hover:bg-gray-100">
                    <div className="block">
                      <div className="w-full font-semibold">No</div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>


          </div>

          {/* Additional Guests */}

          {hasAdditionalGuestsValue && hasAdditionalGuestsValue === 'true' && (
            <div className="w-full flex flex-col justify-center items-center">
              {fields.map((field, index) => (
                <div key={field.id} className="w-full md:w-3/4 my-4 border border-gray-300 rounded-lg p-4">
                  <Controller
                    control={control}
                    name={`additionalGuests.${index}.name`}
                    rules={{ required: "Name is required." }}
                    render={({ field, fieldState }) => (
                      <div className="w-full">
                        <label className="py-2 text-lg text-weddingMaroon" htmlFor={'name-' + index}>
                          Name
                        </label>
                        <input id={'name-' + index} {...field} maxLength={32} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text" placeholder="e.g. Aurora Rose" />
                        {fieldState.error && (
                          <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p> // Displaying the error message
                        )}
                      </div>
                    )}
                  />
                  <Controller
                    control={control}
                    name={`additionalGuests.${index}.mealPreference`}
                    rules={{ required: "Meal choice is required." }}
                    render={({ field, fieldState }) => (
                      <div>
                        <div className="mt-4">
                          <div className="mb-2 text-lg text-weddingMaroon">{"What kind of meal for this guest?"}</div>
                          <ul className="grid w-full gap-6 md:grid-cols-3">
                            <li>
                              <input id={"additional-meal-adult-" + index} className="hidden peer" {...field} type="radio" value="adult" checked={field.value === 'adult'} />
                              <label htmlFor={"additional-meal-adult-" + index} className="h-full inline-flex justify-between w-full p-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-weddingMaroon peer-checked:text-weddingMaroon hover:text-gray-600 hover:bg-gray-100">
                                <div className="block">
                                  <div className="w-full font-semibold">Adult</div>
                                  <div className="w-full">Buffet-styled</div>
                                </div>
                              </label>
                            </li>
                            <li>
                              <input id={"additional-meal-child-" + index} className="hidden peer" {...field} type="radio" value="child" checked={field.value === 'child'} />
                              <label htmlFor={"additional-meal-child-" + index} className="inline-flex items-center justify-between w-full p-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-weddingMaroon peer-checked:text-weddingMaroon hover:text-gray-600 hover:bg-gray-100">
                                <div className="block">
                                  <div className="w-full font-semibold">Child</div>
                                  <div className="w-full">Includes chicken nuggets, mac and cheese, and applesauce</div>
                                </div>
                              </label>
                            </li>
                            <li>
                              <input id={"additional-meal-none-" + index} className="hidden peer" {...field} type="radio" value="none" checked={field.value === 'none'} />
                              <label htmlFor={"additional-meal-none-" + index} className="inline-flex justify-between w-full h-full p-2 text-gray-500 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-weddingMaroon peer-checked:text-weddingMaroon hover:text-gray-600 hover:bg-gray-100">
                                <div className="block">
                                  <div className="w-full font-semibold">No meal</div>
                                  <div className="w-full">Ex: This guest is a baby</div>
                                </div>
                              </label>
                            </li>
                          </ul>

                          {fieldState.error && (
                            <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p> // Displaying the error message
                          )}

                        </div>
                      </div>

                    )}
                  />

                  <button className="bg-weddingMaroon hover:opacity-75
                              rounded text-white
                              focus:outline-none focus:shadow-outline
                              border-solid border-2 border-weddingMaroon mt-3 p-1" type="button" onClick={() => remove(index)}>Remove Guest</button>
                </div>
              ))}

              <button className="w-1/3 p-1 flex justify-center items-center rounded border-solid border-2 border-weddingMaroon hover:bg-weddingMaroonHover" type="button" onClick={() => append({ name: '', index: '', mealPreference: '', willAttend: 'true' })}>
                <IoMdAddCircleOutline className="pr-1" />
                Add Guest
              </button>

            </div>
          )}







          {/* Table preferences */}
          <div className="border border-gray-300 rounded-lg p-4 w-full md:w-3/4 my-4">
            <div className="text-weddingMaroon text-2xl md:text-xl font-semibold">Table Preference</div>
            <div className="">We would like to give guests the opportunity to choose who they sit by. We will do our best to align table preferences but it is not guarenteed.</div>
            <div className="my-2">
              <TablePreferences updatePreferences={updateTablePreferences} currentGroupId={groupId} selectedGroupIds={getValues("tablePreference")} />
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
                maxLength={255}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="e.g. email@email.com"
                {...register("email", { maxLength: 255, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })}
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
                maxLength={255}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="e.g. Wheelchair access needed"
                {...register("specialAccommodations", { maxLength: 255 })}
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
                maxLength={255}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="e.g. Lovely Day by Bill Withers"
                {...register("songRequest", { maxLength: 255 })}
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
                maxLength={1024}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="e.g. Yahoo!"
                {...register("noteToCouple", { maxLength: 1024 })}
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

        <div className="w-full"><Footer /></div>
      </div>

    </div>
  )
};