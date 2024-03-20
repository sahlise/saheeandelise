import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import Link from "next/link";

export default function Accoridon() {

//dress code
//can I bring my children
//Is there parking available
  return (
    <Accordion selectionMode="multiple">
      <AccordionItem key="1" aria-label="Who is getting married?" title="Who is getting married?">
        Sahee Thao and Elise Baumgartner are getting married after being together for about 7 years! For more stories about our time together, visit
        <Link className="underline pl-1 text-weddingGreen" href="/wedding/our-story">our story page</Link>. 
      </AccordionItem>
      <AccordionItem key="2" aria-label="When do I need to RSVP by?" title="When do I need to RSVP by?">
        Guests should RSVP by <b>May 8th</b>. Still need to RSVP or want to make changes? 
        <Link className="underline pl-1 text-weddingGreen" href="/wedding/rsvp">Click here</Link>!
      </AccordionItem>
      <AccordionItem key="3" aria-label="When does the ceremony start? What does the schedule of the day look like?" title="When does the ceremony start? What does the schedule of the day look like?">
        The ceremony is planned to start at 3:30pm on June 8th. For more details on the schedule, visit 
        <Link className="underline pl-1 text-weddingGreen" href="/wedding/schedule">our schedule page</Link>.
      </AccordionItem>
      <AccordionItem key="4" aria-label="Where is the wedding? Are there accomodations for out-of-town guests?" title="Where is the wedding? Are there accomodations for out-of-town guests?">
        The wedding is going to take place at the Swan Barn Door in the Wisconsin Dells. For more information about the venue location and hotel information for out-of-town guests, visit
        <Link className="underline pl-1 text-weddingGreen" href="/wedding/venue">our venue page</Link>. 
      </AccordionItem>
      <AccordionItem key="5" aria-label="Is the wedding outdoors? What happens if it rains?" title="Is the wedding outdoors? What happens if it rains?">
        The ceremony is planned to take place outside, and the reception will be inside the barn at the Swan Barn Door. Lucky for us the barn can also be used as a ceremony space if weather does not permit.
      </AccordionItem>
      <AccordionItem key="6" aria-label="What is the dress code?" title="What is the dress code?">
        There will be no strict dress code for the wedding, but we suggest guests to wear at least business casual. We highly encourage guests to include fantasy or renaissance faire wear or accessories to go with our theme &quot;Enchanted Forest&quot;. Your presence is what truly matters to us, so come as you are, with a hint of magic or a dash of sophistication.
      </AccordionItem>
      <AccordionItem key="7" aria-label="Is there free parking available at the venue?" title="Is there free parking available at the venue?">
        Yes! There should be plenty of space at the venue for guests to park.
      </AccordionItem>
      <AccordionItem key="8" aria-label="Is it okay if I bring my children to the ceremony and/or reception?" title="Is it okay if I bring my children to the ceremony and/or reception?">
        Yes! We are excited to see everyone! Make sure all party members are included in the RSVP.
      </AccordionItem>
      <AccordionItem key="9" aria-label="Is it okay if I bring my pet to the ceremony and/or reception?" title="Is it okay if I bring my pet to the ceremony and/or reception?">
        Unfortunately the Swan Barn Door does not allow pets, so pets will have to be left at home.
      </AccordionItem>
      <AccordionItem key="10" aria-label="What is the difference between a Child's Meal and the Buffet on the RSVP?" title="What is the difference between a Child's Meal and the Buffet on the RSVP?">
        At our wedding, we are delighted to offer a buffet as the standard dining option for our guests. This buffet will feature a variety of dishes to cater to diverse tastes and dietary needs, allowing everyone to choose what they prefer from a selection.
        In addition to the buffet, we recognize that some guests might have different preferences or dietary requirements. Therefore, we are offering a separate &quot;Childs&quot; meal option. This meal will be different from the buffet offerings. If you believe one of your party members would prefer this option, please let us know in the RSVP, and on the wedding day the staff will be happy to prepare and provide the child meal per requested.
        This arrangement ensures that all our guests, regardless of age, can enjoy their meal and celebrate with us comfortably. Please feel free to reach out in advance if you have any questions or specific dietary considerations we should be aware of.
      </AccordionItem>
      <AccordionItem key="11" aria-label="Who should I contact if I have more questions or want to report a bug on the website?" title="Who should I contact if I have more questions or want to report a bug on the website?">
        Feel free to reach out to us using 
        <Link className="underline pl-1 text-weddingGreen" href="/wedding/contact-us">our contact page</Link> for additional questions or concerns!
      </AccordionItem>
    </Accordion>
  );
}
