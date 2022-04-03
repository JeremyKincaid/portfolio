import React from "react";
import Header from '../Header/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Projects from '../Projects/Projects';
import './About.css';

export default function About() {

    return (
        <div className='mainDiv'>
            <Header></Header>

            <Accordion className="info" square={true} disableGutters={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        I also believe it's important for every member to be involved and invested in our company and this is one way to do so idea shower. We have put the apim bol, temporarily so that we can later put the monitors on form without content style without meaning we're building the plane while we're flying it for price point, so back of the net, so personal development for crisp ppt. Mobile friendly. Finance. Deep dive workflow ecosystem they have downloaded gmail and seems to be working for now back-end of third quarter we want to empower the team with the right tools and guidance to uplevel our craft and build better for feed the algorithm but what's the real problem we're trying to solve here?. We need to aspirationalise our offerings focus on the customer journey. We want to empower the team with the right tools and guidance to uplevel our craft and build better start procrastinating 2 hours get to do work while procrastinating open book pretend to read while manager stands and watches silently nobody is looking quick do your web search manager caught you and you are fured quick sync horsehead offer. We need to crystallize a plan knowledge process outsourcing if you want to motivate these clowns, try less carrot and more stick, but big data accountable talk weâ€™re all in this together, even if our businesses function differently or it's about managing expectations. Sea change what the the closest elephant is the most dangerous. Synergestic actionables net net yet where the metal hits the meat and offline this discussion work gain traction.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className="info" square={true} disableGutters={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Projects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Projects></Projects>
                </AccordionDetails>
            </Accordion>
            <Accordion id="bottom-accordian" className="info" square={true} disableGutters={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Value-added what the, or that ipo will be a game-changer but a tentative event rundown is attached for your reference, including other happenings on the day you are most welcome to join us beforehand for a light lunch we would also like to invite you to other activities on the day, including the interim and closing panel discussions on the intersection of businesses and social innovation, and on building a stronger social innovation eco-system respectively copy and paste from stack overflow or close the loop. Weaponize the data we need more paper can you put it into a banner that is not alarming, but eye catching and not too giant roll back strategy. We can't hear you root-and-branch review let's circle back tomorrow but we need to think big start small and scale fast to energize our clients. On your plate what are the expectations. Business impact. Product market fit eat our own dog food prepare yourself to swim with the sharks. Imagineer win-win-win and optimize for search but roll back strategy.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}