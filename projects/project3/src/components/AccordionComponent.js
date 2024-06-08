import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionComponent() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          What are the key features that distinguish BMW M cars from standard BMW models?
        </AccordionSummary>
        <AccordionDetails>
          BMW M cars are renowned for their exceptional performance characteristics that set them apart from standard BMW models. These vehicles are meticulously engineered to deliver an exhilarating driving experience, combining powerful engines, precision-tuned suspension systems, aerodynamic enhancements, and sport-tuned drivetrains. Whether it's the spine-tingling acceleration, razor-sharp handling, or the unmistakable roar of the exhaust, every aspect of BMW M cars is optimized to provide unmatched performance on both the road and the track.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          How do BMW M cars compare to other high-performance vehicles on the market?
        </AccordionSummary>
        <AccordionDetails>
          When it comes to high-performance vehicles, BMW M cars stand out as true icons of automotive engineering. Compared to other competitors in the segment, BMW M cars offer a compelling blend of performance, technology, and craftsmanship. From their potent engines and dynamic handling to their luxurious interiors and cutting-edge features, BMW M cars consistently outshine the competition, delivering a driving experience that is second to none.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Are BMW M cars suitable for everyday driving or are they primarily designed for track use?
        </AccordionSummary>
        <AccordionDetails>
          While BMW M cars are renowned for their track prowess, they are equally adept at handling the demands of everyday driving. Unlike some high-performance vehicles that sacrifice comfort and practicality for sheer speed, BMW M cars strike a perfect balance between performance and usability. With advanced suspension systems, refined interiors, and a host of driver-assistance technologies, BMW M cars are well-suited for daily commuting, long-distance cruising, and spirited weekend drives alike.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          What customization options are available for BMW M cars?
        </AccordionSummary>
        <AccordionDetails>
          One of the hallmarks of BMW M cars is the level of customization they offer to buyers. From selecting exterior paint colors and interior trim packages to opting for performance upgrades and bespoke features, BMW M cars can be tailored to reflect individual tastes and preferences. Whether you prefer a sleek and understated look or a bold and aggressive appearance, BMW offers a wide range of customization options to make your M car truly unique.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          How does BMW M GmbH ensure the quality and reliability of M cars?
        </AccordionSummary>
        <AccordionDetails>
          BMW M GmbH, the division responsible for developing M cars, maintains the highest standards of quality and reliability throughout the production process. Each BMW M car undergoes rigorous testing and validation procedures to ensure its durability, performance, and safety. From endurance trials on the Nürburgring Nordschleife to comprehensive quality checks in state-of-the-art facilities, BMW M cars are subjected to stringent quality assurance measures to meet the exacting standards of M enthusiasts around the world.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
