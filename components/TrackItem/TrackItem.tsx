import { Card, Grid, IconButton } from '@mui/material'
import React from 'react'
import { ITrack } from '../../types/track'
import styles from './TrackItem.module.scss'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Image from 'next/image';

interface TrackProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackProps> = ({track, active = false}) => {
  return (
    <Card className={styles.track}>
        <IconButton  className={styles.track__playPauseIcon}>
            {active ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
        </IconButton>
        {/* <Image width={80} height={80} src={track.picture} alt={track.name} /> */}
        <img width={80} height={80} src={track.picture} alt={track.name} />
        <Grid container direction="column" className={styles.track__descriptionBlock}>
            <div>{track.name}</div>
            <div className={styles.track__artistName}>{track.artist}</div>
        </Grid>
        {active && <div>01:00 / 03:00</div>}
        <IconButton className={styles.track__deleteIcon}>
            <HighlightOffIcon />
        </IconButton>
    </Card>
  )
}

export default TrackItem