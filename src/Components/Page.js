import React,{useState} from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import miami from "../Images/miami.jpeg";
import maldives from "../Images/maldives.jpeg";
import ooty from "../Images/ooty.jpeg";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Page=()=>{

  const images = [
    {
        img: miami,
        title: "Miami",
        description: "Miami is one of those places where I will never get tired of visiting. Whether you want to spend your time in the sun, trying out new cuisine, or taking in the Art Deco Architecture, there is something for everyone in Miami. I have been returning every year and I always find something new to do that I have to share. Here is my Miami Travel Guide with tips on this fun city. Miami is one of those places where I will never get tired of visiting. Whether you want to spend your time in the sun, trying out new cuisine, or taking in the Art Deco Architecture, there is something for everyone in Miami. I have been returning every year and I always find something new to do that I have to share. Here is my Miami Travel Guide with tips on this fun city. Miami is one of those places where I will never get tired of visiting. Whether you want to spend your time in the sun, trying out new cuisine, or taking in the Art Deco Architecture, there is something for everyone in Miami. I have been returning every year and I always find something new to do that I have to share. Miami is one of those places where I will never get tired of visiting. Whether you want to spend your time in the sun, trying out new cuisine, or taking in the Art Deco Architecture, there is something for everyone in Miami."
    },
    {
        img: maldives,
        title: "Maldives",
        description: "The Maldives is a fascinating country to travel to independently, not least because it’s only been possible to do so for the past decade. Now, guesthouses are springing up on local islands on a weekly basis, offering budget travellers an affordable way to explore the country. And, in many ways, travelling on a budget in the Maldives is far superior to staying in one of the luxury resorts. When it comes to the latter, each resort is built on its own island, isolating you from the rest of the country so you never get a chance to experience local life. Staying on the local islands has given me an insight into life in the Maldives that very few people have experienced so far. The Maldives is a fascinating country to travel to independently, not least because it’s only been possible to do so for the past decade. Now, guesthouses are springing up on local islands on a weekly basis, offering budget travellers an affordable way to explore the country. And, in many ways, travelling on a budget in the Maldives is far superior to staying in one of the luxury resorts. When it comes to the latter, each resort is built on its own island, isolating you from the rest of the country so you never get a chance to experience local life."
    },
    {
        img: ooty,
        title: "Ooty",
        description: "Ooty is rightly called the “Queen of Hill Stations”. Having been there 4 times already, we are still surprised to discover a new side of Ooty with every trip we do here. After our most recent trip to Ooty this time, we decided to pen down for our readers a perfect 5 days Ooty trip itinerary. This 5 days Ooty trip itinerary will include not only the usual touristy places to see in Ooty. But many others beyond them, which we have actually discovered on multiple trips that we have made to Ooty so far. Obviously this 5 days Ooty trip itinerary is not the one that we have followed. But, if we were to combine all our 4 Ooty trips together and come up with one plan, this would be the itinerary for us. Having said that, let me delve right into the itinerary. Ooty is rightly called the “Queen of Hill Stations”. Having been there 4 times already, we are still surprised to discover a new side of Ooty with every trip we do here. After our most recent trip to Ooty this time, we decided to pen down for our readers a perfect 5 days Ooty trip itinerary. This 5 days Ooty trip itinerary will include not only the usual touristy places to see in Ooty. But many others beyond them, which we have actually discovered on multiple trips that we have made to Ooty so far."
    }
  ];

  const [active, setActive]=useState(images[0]);

  const prev=()=>{
    if(active===images[0])
      setActive(images[2]);
    else if(active===images[1])
      setActive(images[0]);
    else if(active===images[2])
      setActive(images[1]);
  }

  const next=()=>{
    if(active===images[2])
      setActive(images[0]);
    else if(active===images[1])
      setActive(images[2]);
    else if(active===images[0])
      setActive(images[1]);
  }

  console.log(active.title);

  return (
  <>
    <Box sx={{ flexGrow: 1, margin:7}}>
      <Grid container columnSpacing={{ md: 15, lg: 15 }}>
          <Grid item xs={12} md={6} lg={6}>
              <Box
                component="img"
                sx={{
                  height: 450,
                  width: 680,
                  borderRadius: '10%',
                }}
                src={active.img}
              />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="h5" color="#C499BA" sx={{marginLeft:1.5}} gutterBottom> 
              {active.title}
            </Typography>
            <Typography variant="body2" color="#748DA6" sx={{marginLeft:1.5}}>          
              {active.description}
            </Typography>
          </Grid>
      </Grid>
    </Box>
    <Box sx={{ flexGrow: 1, margin:7 }}>
      <Box sx={{display:"flex",flexGrow: 1, justifyContent: 'center'}}>
          <Grid container sx={{justifyContent: 'center', marginLeft:-5}}>
              <Tooltip title="previous slide">
                <IconButton onClick={prev}><ArrowLeftIcon sx={{ fontSize: 75, marginTop:1.5 }} /></IconButton>
              </Tooltip>
              <Grid item sx={{marginRight:1}}>
                  <Box
                      component="img"
                      sx={{
                      height: 100,
                      width: "auto",
                      borderRadius: '10%'
                      }}
                      alt="Miami"
                      src={images[0].img}
                      onClick={()=>setActive(images[0])}
                      style={(active!==images[0])?{filter: "grayscale(100%)"}:null}
                  />
              </Grid>  
              <Grid item sx={{marginRight:1}}>
                  <Box
                      component="img"
                      sx={{
                      height: 100,
                      width: "auto",
                      borderRadius: '10%'
                      }}
                      alt="Miami"
                      src={images[1].img}
                      onClick={()=>setActive(images[1])}
                      style={(active!==images[1])?{filter: "grayscale(100%)"}:null}
                  />
              </Grid>  
              <Grid item >
                  <Box
                      component="img"
                      sx={{
                      height: 100,
                      width: "auto",
                      borderRadius: '10%'
                      }}
                      alt="Miami"
                      src={images[2].img}
                      onClick={()=>setActive(images[2])}
                      style={(active!==images[2])?{filter: "grayscale(100%)"}:null}
                  />
              </Grid>  
              <Tooltip title="next slide">
              <IconButton onClick={next}><ArrowRightIcon sx={{ fontSize: 75, marginTop:1.5 }}/></IconButton >
              </Tooltip>
          </Grid>         
          <Grid container sx={{justifyContent: 'center'}}>
              <Grid item>
                  <PlayCircleIcon sx={{ fontSize: 80, marginTop:1, color:"#C499BA" }} />
                  {/* <PauseCircleIcon sx={{ fontSize: 80, marginTop:1, color:"#C499BA" }} /> */}
              </Grid>
          </Grid>
      </Box>
    </Box>
  </>
  );
}
export default Page;