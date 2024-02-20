"use client";

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { GiDiamondRing } from "react-icons/gi";
import { FaCocktail } from "react-icons/fa";
import { IoMdPizza } from "react-icons/io";
import { PiForkKnifeFill } from "react-icons/pi";
import { IoMusicalNotes } from "react-icons/io5";
import { IoMusicalNoteSharp } from "react-icons/io5";




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
                2017
            </TimelineDot>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <div className="bg-lime-100 rounded-lg p-3 border-weddingGreen border-2">
              <p className="text-center">First summer apart</p>
              <img src="/images/our-story/first-summer-apart.jpg"></img>
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
            <img src="/images/our-story/first-solo-trip.jpg"></img>
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
            <p className="text-center">Graduated from UWL</p>
            <img src="/images/our-story/graduation.jpg"></img>
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
            <img src="/images/our-story/first-apartment.jpg"></img>
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
            <img src="/images/our-story/first-international.jpg"></img>
          </div>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
    </ThemeProvider>
  );
}