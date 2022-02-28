import { Button, Grid, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { ITrack } from '../../types/track'
import { ROUTE_TRACKS } from '../../constants/routes';

function TrackPage() {

    const track: ITrack = {_id: '1', name: 'string1', artist: 'string1', text: 'string1', listens: 1, picture: 'http://localhost:5000/image/b8f01bcb-a696-4205-8ac9-c35725357e4b.jpg', audio: 'http://localhost:5000/audio/87e1ab63-8985-4918-ab0b-6ba3ed59cabc.mp3', comments: []}
    const router = useRouter();

  return (
    <MainLayout>
        <Button variant='outlined' onClick={()=>router.push(ROUTE_TRACKS)}>Back To The List</Button>
        <Grid container style={{margin: '20px 0'}}>
            <img src={track.picture} alt={track.name} width="200" height="200" />
            <div style={{margin: '30px'}}>
                <h1>Track - {track.name}</h1>
                <h2>Artist - {track.artist}</h2>
                <h3>Listens - {track.listens}</h3>
            </div>
        </Grid>
        <h3>Lyrics</h3>
        <p>{track.text}</p>
        <h3>Comments</h3>
        <Grid container>
            <TextField 
                label="Name"
                fullWidth
            />
            <TextField 
                label="Message"
                fullWidth
                multiline
                rows="4"
            />
            <Button variant='outlined'>
                Send
            </Button>
        </Grid>
        <div>
            {track.comments.map((comment)=>
                <div key={comment._id}>
                    <div>{comment.username}</div>
                    <div>{comment.text}</div>
                </div>
            )}
        </div>
    </MainLayout>
  )
}

export default TrackPage