'use client';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import priceIncludeData from '@/src/priceIcludeData.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { poiret } from '@/src/fonts/font';
import { SlArrowDown } from "react-icons/sl";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={1} square {...props} />
))(({ theme }) => ({
  fontFamily: 'var(--poiretOne-font)',
  border: `1px solid #3e4d5865`,
  borderRadius: 0,
  marginBottom: theme.spacing(1),
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  textTransform: 'uppercase',
 
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
 
  fontFamily: 'var(--poiretOne-font)',
}));

export default function AccordionTransition() {
  const [expanded, setExpanded] = useState<string | false>('');

  const priceIncludeId = Array.from(new Set(priceIncludeData.priceInclude.map((item) => item.id)));

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='w-1/2'>
      {priceIncludeId.map((id) => {
        const filteredId = priceIncludeData.priceInclude.filter((item) => item.id === id);
        return (
          <div key={id}>
            {filteredId.map((item) => (
              <Accordion
              defaultExpanded
                key={item.id}
                expanded={expanded === `panel${id}`}
                onChange={handleChange(`panel${id}`)}
              >
                <AccordionSummary
                  expandIcon={
                    <SlArrowDown
                      style={{
                        padding:'5px',
                        borderRadius: '50%',
                        width: '2em',
                        height: '2em',
                        backgroundColor: 'rgba(62, 77, 88, 0.1)',
                      }}
                    />
                  }
                  aria-controls={`panel${id}-content`}
                  id={`panel${id}-header`}
                >
                  <Typography sx={{ fontFamily: 'var(--montserrat-font)', fontWeight: 300 }}>
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: 'rgba(62, 77, 88, 0.1)' }}>
                  <Typography
                    sx={{
                      fontFamily: 'var(--montserrat-font)',
                      fontWeight: 300,
                      marginLeft: '15px',
                    }}
                  >
                    {item.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        );
      })}
    </div>
  );
}
