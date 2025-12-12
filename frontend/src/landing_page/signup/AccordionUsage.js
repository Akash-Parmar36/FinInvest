import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




export default function AccordionUsage(
    {
        Title,
        Details
    }
) {
    return (
        <Accordion className='py-2 px-0 mt-3'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span" style={{color:"#424242" , fontSize:"18px"}} className='fw-bolder'>{Title}</Typography>
          </AccordionSummary>
          <AccordionDetails className='text-muted'>
               {Details} 
          </AccordionDetails>
        </Accordion>
    );
}
 