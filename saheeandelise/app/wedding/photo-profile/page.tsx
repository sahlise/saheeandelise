"use client";
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ProfileForm } from '../models/ProfileForm';
import Footer from '../components/Footer';

export default function App() {

  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ProfileForm>();
  const onSubmit: SubmitHandler<ProfileForm> = async (data: ProfileForm) => {
    console.log(data)
  }
  console.log(errors);

  return (
    <div className="h-full">
      <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-3/4 md:w-1/2">
            <div className="my-4">
              <label className="py-2 text-lg text-weddingMaroon" htmlFor='firstName'>
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="John" id="firstName" maxLength={255}
                {...register("firstName", { maxLength: 100, pattern: /^[A-Za-z]+(?:[ -]?[A-Za-z]+)*$/i })}
              />
              {errors.firstName?.type == 'maxLength' && <div className="text-red-600">Too long!</div>}
              {errors.firstName?.type == 'pattern' && <div className="text-red-600">Invalid Character</div>}
            </div>

            <div className="my-4">
              <label className="py-2 text-lg text-weddingMaroon" htmlFor='lastName'>
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Henry" id="lastName" maxLength={255}
                {...register("firstName", { maxLength: 100, pattern: /^[A-Za-z]+(?:[ -]?[A-Za-z]+)*$/i })}
              />
              {errors.firstName?.type == 'maxLength' && <div className="text-red-600">Too long!</div>}
              {errors.firstName?.type == 'pattern' && <div className="text-red-600">Invalid Character</div>}
            </div>


          </div>

          {/* Submit button */}
          <div className="w-3/4 md:w-1/2 my-4 flex flex-col justify-center items-center">
            <button
              className={`
                    w-full md:w-3/4 py-2 px-4
                    bg-weddingTan hover:opacity-75
                    rounded font-bold
                    focus:outline-none focus:shadow-outline
                    border-solid border-2 border-weddingTan
                    ${isSubmitLoading ? 'hidden' : 'visible'}`}
              type="submit">
              Continue
            </button>

            <div className="py-2">
              By clicking Continue, you agree to our
              <a className="underline pl-1 text-weddingMaroon" href="/wedding/photo-privacy-policy">privacy policy.</a>
            </div>


            {/* Loading Icon */}
            <div className={`w-full flex flex-col justify-center items-center ${isSubmitLoading ? 'visible' : 'hidden'}`} role="status">
              <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin fill-weddingMaroon" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </div>

  );
}