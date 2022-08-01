import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';


const Page=()=>{
  return (
    <Box sx={{ flexGrow: 1, margin:7}}>
      <Grid container columnSpacing={{ xs: 1, sm: 15, md: 15, lg: 15 }}>
      {/* <Carousel itemsToShow={1}> */}
          <Grid item xs={6}>
            <Box
              component="img"
              sx={{
                height: 450,
                width: "auto",
                borderRadius: '10%'
              }}
              alt="Maldives"
              src="https://i.pinimg.com/originals/31/db/78/31db78f5f569338e5387850142a7200e.jpg"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" color="#C499BA" sx={{marginLeft:1.5}} gutterBottom> 
              Maldives
            </Typography>
            <Typography variant="body2" color="#748DA6" sx={{marginLeft:1.5}}>          
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Grid>
        {/* </Carousel> */}
      </Grid>
    </Box>
  );
}
export default Page;