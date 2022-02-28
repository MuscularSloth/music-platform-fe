import { Box, Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import styles from './StepWrapper.module.scss'

interface StepWrapperProps{
  activeStep: number;
}

const steps = ['Track Info', 'Track Image', 'Track']

const StepWrapper: React.FC<StepWrapperProps> = ({activeStep, children}) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {
          steps.map((step, idx)=>
            <Step key={idx} completed={activeStep > idx}>
              <StepLabel>{step}</StepLabel>
            </Step>
          )
        }
      </Stepper>
      <Grid container className={styles.stepWrapper__stepBody}>
        <Card className={styles.stepWrapper__stepCard}>
          <Box> {children} </Box>
        </Card>
      </Grid>
    </Container>
  )
}

export default StepWrapper