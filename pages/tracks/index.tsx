import { Button, Card, Grid } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { ROUTE_CREATE_TRACK } from '../../constants/routes'
import { ITrack } from '../../types/track'
import TrackList from '../../components/TrackList/TrackList'

export default function Index() {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: '1', name: 'string1', artist: 'string1', text: 'string1', listens: 1, picture: 'http://localhost:5000/image/b8f01bcb-a696-4205-8ac9-c35725357e4b.jpg', audio: 'http://localhost:5000/audio/87e1ab63-8985-4918-ab0b-6ba3ed59cabc.mp3', comments: []},
        {_id: '2', name: 'string2', artist: 'string2', text: 'string2', listens: 2, picture: 'http://localhost:5000/image/b8f01bcb-a696-4205-8ac9-c35725357e4b.jpg', audio: 'http://localhost:5000/audio/87e1ab63-8985-4918-ab0b-6ba3ed59cabc.mp3', comments: []},
        {_id: '3', name: 'string3', artist: 'string3', text: 'string3', listens: 3, picture: 'http://localhost:5000/image/b8f01bcb-a696-4205-8ac9-c35725357e4b.jpg', audio: 'http://localhost:5000/audio/87e1ab63-8985-4918-ab0b-6ba3ed59cabc.mp3', comments: []},
    ]

  return (
    <MainLayout>
        <Grid container justifyContent='center'>
            <Card style={{width: '100%'}}>
                <Box p={3}>
                    <Grid container justifyContent='space-between'>
                        <h1>Tracks List</h1>
                        <Button onClick={()=>router.push( ROUTE_CREATE_TRACK)}>Upload New Track</Button>
                    </Grid>
                </Box>
                <TrackList tracks={tracks}/>
            </Card>
        </Grid>
    </MainLayout>
  )
}
