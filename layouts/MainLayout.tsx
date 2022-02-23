import { Container } from '@mui/material';
import React from 'react'
import SideNavigation from '../components/SideNavigation/SideNavigation';

const MainLayout: React.FC = ({children}) => {
  return (
    <>
        <SideNavigation />
        <Container style={{margin: '90px 0 30px 80px'}}>
            {children}
        </Container>
    </>
  )
}

export default MainLayout;
