import React from 'react'
import MainLayout from '../layouts/MainLayout'

export default function Index() {
  return (
    <>
        <MainLayout>
            <div className='center'>
                <h1>Music Platform FE</h1>
                <h3>Pet project</h3>
            </div>
        </MainLayout>
        

        <style jsx> 
        {`
            .center{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-top: 50px;
            }    
        `}
        </style>
    </>
  )
}
