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

export default function AlternateReverseTimeline() {
  return (
    
    <ThemeProvider theme={theme}>
    <Timeline position="alternate-reverse">
      <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color="primary">
                <GiDiamondRing />
            </TimelineDot>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <p className="text-lg md:text-xl">Ceremony</p>
            <p className="md:text-lg">3:30pm</p>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color="primary">
                <FaCocktail />
            </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <p className="text-lg md:text-xl">Cocktail Hour</p>
            <p className="md:text-lg">4:00pm</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color="primary">
                <PiForkKnifeFill />
            </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <p className="text-lg md:text-xl">Reception</p>
            <p className="md:text-lg">5:30pm</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color="primary">
                <IoMusicalNotes />
            </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <p className="text-lg md:text-xl">First Dance</p>
            <p className="md:text-lg">8:00pm</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color="primary">
                <IoMdPizza />
            </TimelineDot>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <p className="text-lg md:text-xl">Late Night Snack</p>
            <p className="md:text-lg">10:00pm</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color="primary">
                <IoMusicalNoteSharp />
            </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <p className="text-lg md:text-xl">Last Dance</p>
            <p className="md:text-lg">11:30pm</p>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
    </ThemeProvider>
  );
}