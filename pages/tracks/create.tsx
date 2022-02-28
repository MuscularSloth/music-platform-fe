import { Button, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import FileUpload from '../../components/FileUpload/FileUpload'
import StepWrapper from '../../components/StepWrapper/StepWrapper'
import MainLayout from '../../layouts/MainLayout'

const Create = () => {

  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () =>{
    activeStep < 2 && setActiveStep(currentStep => currentStep + 1);
  }

  const prevStep = () =>{
    activeStep > 0 && setActiveStep(currentStep => currentStep - 1);
  }

  return (
    <MainLayout>
        <Box>
          <StepWrapper activeStep={activeStep}>
          <Grid container style={{padding: 20}}>
              {activeStep === 0 && 
                <>
                  <div>
                    <h1>Track Info</h1>
                  </div>
                  <TextField 
                    label="Track Name"
                    style={{marginTop: 10}}
                    fullWidth
                  />
                  <TextField 
                    label="Track Artist"
                    style={{marginTop: 10}}
                    fullWidth
                  />
                  <TextField 
                    label="Text"
                    multiline
                    rows={3}
                    style={{marginTop: 10}}
                    fullWidth
                  />
                </> 
              }
              {activeStep === 1 && 
                <>
                  <div>
                    <h1>Track Image</h1>
                  </div>
                  <FileUpload file={''} setFile={()=>{}} />
                </>
              }
              {activeStep === 2 && 
                <h1>Track</h1>
              }
              </Grid>
          </StepWrapper>
        </Box>
        <Grid>
          <Button disabled={activeStep <= 0} onClick={prevStep}>Back</Button>
          <Button disabled={activeStep >= 2} onClick={nextStep}>Next</Button>
        </Grid>
    </MainLayout>
  )
}

export default Create;
