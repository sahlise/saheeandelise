"use client";

import React, { useState } from 'react';
import Footer from '../components/Footer';

export default function Page() {

  const lastUpdated = "03/19/2024"

  return (
    <div className="h-full ">
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
