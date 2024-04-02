"use client";

import React from 'react';
import Footer from '../../components/Footer';
import { IoIosArrowBack } from 'react-icons/io';
import { useRouter } from 'next/navigation';

export default function Page() {

  const lastUpdated = "03/21/2024"
  const router = useRouter();

  return (
    <div className="h-full ">
      <div>
        <div className="flex items-center mt-4 ml-4 md:text-lg text-weddingMaroon hover:underline hover:cursor-pointer"
          onClick={() => { router.push('/wedding/photo/profile') }}>
          <IoIosArrowBack /> Back to Profile
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="m-4 md:w-3/4 text-justify">
          <div className="">Last updated: {lastUpdated}</div>
          <ol className="list-decimal m-5">
            <li className="my-2">
              <div className="font-bold">
                Introduction
              </div>
              <div>
                This privacy policy describes how we collect, use, and share personal information when you upload photos to our wedding website&apos;s photo sharing service. By using this service, you agree to the collection and use of information in accordance with this policy.
              </div>
            </li>
            <li className="my-2">
              <div className="font-bold">
                Information Collection and Use
              </div>
              <div>
                a. Photo Uploads: When you upload photos using the pre-signed URL provided, the images and their associated metadata (such as camera information, date, location, etc.) will be stored in our Amazon S3 bucket. No metadata will be stripped from the uploaded images.
              </div>
              <div>
                b. Access to Photos: The photos and their metadata will be available to anyone who has access to our wedding website. By uploading photos, you acknowledge that other guests with access to the website will be able to view the images and their associated metadata.
              </div>
            </li>
            <li className="my-2">
              <div className="font-bold">
                Data Retention
              </div>
              <div>
                The photos and metadata will be retained in our Amazon S3 bucket for as long as the wedding website is active. We reserve the right to remove or delete photos at our discretion.
              </div>
            </li>
            <li className="my-2">
              <div className="font-bold">
                Third-Party Services
              </div>
              <div>
                Our photo sharing service utilizes Amazon S3 for storage. Amazon&apos;s privacy policy applies to their handling of the data stored in their service. We are not responsible for the privacy practices of Amazon or any other third-party services.
              </div>
            </li>
            <li className="my-2">
              <div className="font-bold">
                Security
              </div>
              <div>
                We take reasonable measures to protect the photos and metadata stored in our Amazon S3 bucket. However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </div>
            </li>
            <li className="my-2">
              <div className="font-bold">
                Photo Removal
              </div>
              <div>
                Please note that our photo sharing service does not include a feature for users to request the removal of a photo. By uploading photos to our service, you acknowledge that the images and their associated metadata will be available to anyone with access to the wedding website for as long as the website is active. If you have concerns about a particular photo, please contact us directly at saheethao@yahoo.com.
              </div>
            </li>
            <li className="my-2">
              <div className="font-bold">
                Local Storage of Personal Information
              </div>
              <div>
                a. Use of Local Storage: In addition to the collection and use of information outlined above, our website utilizes local storage technology to enhance your experience. Specifically, when you enter your first and last name in the form provided, we store this information in your browser&apos;s local storage. This practice is designed to streamline your interaction with our photo sharing service, allowing us to use your name as metadata for the photos you upload. This metadata assists in organizing and displaying the photos more effectively on our wedding website.
              </div>
              <div>
                b. Purpose and Access: The information stored in local storage is strictly used for enhancing your user experience by personalizing the photo upload process and is not shared with third-party services, except as described in the &quot;Third-Party Services&quot; section of this policy. The stored data is accessible only through the use of our website and is not transmitted to us or any third parties.
              </div>
              <div>
                c. Consent for Local Storage: By using our photo sharing service and agreeing to this privacy policy, you consent to the storage of your first and last name in your device&apos;s local storage. We commit to using this information solely for the purposes stated herein and in accordance with the terms of this privacy policy.
              </div>
              <div>
                d. Managing Local Storage: You have control over your local storage and can manage it through your browser settings. If you wish to remove your personal information from local storage at any time, you can clear your browser&apos;s local storage for our website. Please note that doing so may affect the functionality of the photo sharing service on your device.
              </div>
              <div>
                e. Security of Information in Local Storage: We understand the importance of safeguarding your personal information and take reasonable steps to ensure the security of data stored in local storage. However, as with any data stored on your device, the security of local storage cannot be guaranteed against unauthorized access or loss.
              </div>
              <div>
                f. Changes to Local Storage Practices: Should we make any changes to how we use local storage or the type of information stored, we will update this privacy policy to reflect these changes. We encourage you to review this section periodically.
              </div>

            </li>
            <li className="my-2">
              <div className="font-bold">
                Changes to This Privacy Policy
              </div>
              <div>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date at the top of the policy.
              </div>
            </li>
            <li className="my-2">
              <div className="font-bold">
                Contact Us
              </div>
              <div>
                If you have any questions about this privacy policy or wish to discuss concerns about a particular photo, please contact us at saheethao@yahoo.com.
              </div>
            </li>
          </ol>

          <div>
            By uploading photos to our wedding website&apos;s photo sharing service, you acknowledge that you have read and understand this privacy policy and agree to be bound by its terms.
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
};
