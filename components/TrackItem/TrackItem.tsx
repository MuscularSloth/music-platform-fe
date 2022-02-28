import { Card, Grid, IconButton } from '@mui/material'
import React from 'react'
import { ITrack } from '../../types/track'
import styles from './TrackItem.module.scss'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ROUTE_TRACKS } from '../../constants/routes';

interface TrackProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackProps> = ({track, active = false}) => {

    const router = useRouter();

  return (
    <Card className={styles.track} onClick={()=>router.push(ROUTE_TRACKS+'/'+track._id)}>
        <IconButton  className={styles.track__playPauseIcon} onClick={(e)=>e.stopPropagation()}>
            {active ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
        </IconButton>
        {/* <Image width={80} height={80} src={track.picture} alt={track.name} /> */}
        <img width={80} height={80} src={track.picture} alt={track.name} />
        <Grid container direction="column" className={styles.track__descriptionBlock}>
            <div>{track.name}</div>
            <div className={styles.track__artistName}>{track.artist}</div>
        </Grid>
        {active && <div>01:00 / 03:00</div>}
        <IconButton className={styles.track__deleteIcon} onClick={(e)=>e.stopPropagation()}>
            <HighlightOffIcon />
        </IconButton>
    </Card>
  )
}

export default TrackItem