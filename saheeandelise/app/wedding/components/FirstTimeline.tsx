"use client";

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Image from 'next/image';




const theme = createTheme({
  palette: {
    primary: {
      main: '#638a45', // Replace #yourPrimaryColor with your chosen color
      // You can also define light, dark, contrastText if needed
    },
  },
  typography: {
    fontFamily: '"Bookinsanity", Arial, sans-serif',
    // You can also customize font size, weight, etc.
  },
});

export default function FirstTimeline() {
  return (

    <ThemeProvider theme={theme}>
      <Timeline position="alternate-reverse">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              2016
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="bg-lime-100 rounded-lg p-3 border-weddingGreen border-2">
              <p className="text-center">First picture together</p>
              <div className="flex justify-center items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/images/our-story/first-together.png"
                    alt="Elise and Sahee at a CAB dance"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              2017
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="bg-lime-100 rounded-lg p-3 border-weddingGreen border-2">
              <p className="text-center">First summer apart</p>
              <div className="flex justify-center items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/images/our-story/first-summer-apart.jpg"
                    alt="Elise and Sahee on Facetime"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              2019
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="bg-lime-100 rounded-lg p-3 border-weddingGreen border-2">
              <p className="text-center">First solo trip</p>
              <div className="flex justify-center items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/images/our-story/first-solo-trip.jpg"
                    alt="Elise and Sahee at House on the Rock"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              2021
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="bg-lime-100 rounded-lg p-3 border-weddingGreen border-2">
              <p className="text-center">First graduation together</p>
              <div className="flex justify-center items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/images/our-story/graduation.jpg"
                    alt="Sahee and Elise graduation"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="bg-lime-100 rounded-lg p-3 border-weddingGreen border-2">
              <p className="text-center">First apartment</p>
              <div className="flex justify-center items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/images/our-story/first-apartment.jpg"
                    alt="Sahee sitting in front of our first apartment"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              2022
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="bg-lime-100 rounded-lg p-3 border-weddingGreen border-2">
              <p className="text-center">First international trip</p>
              <div className="flex justify-center items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/images/our-story/first-international.jpg"
                    alt="Sahee and Elise in Italy"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </ThemeProvider>
  );
}