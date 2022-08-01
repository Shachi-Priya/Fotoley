import React from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

const Others=()=>{

    // const breakPoints = [
    //     { width: 1, itemsToShow: 5 },
    //     { width: 550, itemsToShow: 5 },
    //     { width: 768, itemsToShow: 5 },
    //     { width: 1200, itemsToShow: 5 },
    //     { width: 1500, itemsToShow: 5 },
    //   ];

  return (
        <Box sx={{ flexGrow: 1, margin:7 }}>
            <Box sx={{display:"flex",flexGrow: 1, justifyContent: 'center'}}>
                <Grid container sx={{justifyContent: 'center'}}>
                    <ArrowLeftIcon sx={{ fontSize: 75, marginTop:1.5 }}/>
                    <Grid item sx={{marginRight:1}}>
                        <Box
                            component="img"
                            sx={{
                            height: 100,
                            width: "auto",
                            borderRadius: '10%'
                            }}
                            alt="Miami"
                            src="http://thetravelshots.com/wp-content/uploads/2020/12/miami.jpg"
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
                            src="https://i.pinimg.com/originals/31/db/78/31db78f5f569338e5387850142a7200e.jpg"
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
                            src="https://www.ekeralatourism.net/wp-content/uploads/2019/01/things-to-do-kochi.jpg"
                        />
                    </Grid>  
                    <ArrowRightIcon sx={{ fontSize: 75, marginTop:1.5 }}/>
                </Grid>         
                <Grid container sx={{justifyContent: 'center'}}>
                    <Grid item>
                        <PlayCircleIcon sx={{ fontSize: 80, marginTop:1, color:"#C499BA" }} />
                        {/* <PauseCircleIcon sx={{ fontSize: 80, marginTop:1, color:"#C499BA" }} /> */}
                    </Grid>
                </Grid>
            </Box>
        </Box>
  )
}
export default Others;