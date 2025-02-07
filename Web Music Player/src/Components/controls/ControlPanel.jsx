import React from 'react'
import Button from './Button'
import './control-panel.css'

const ControlPanel = ({ play, isPlaying, duration, currentTime }) => {
  
  function secondsToHms(seconds) {
     
    if (!seconds) return '00m 00s'
    // if no seconds in song return song play point 00:00  mane no song play possible
    let duration = seconds
    // total durtion = seconds(total length of song in seconds)
    let hours = duration / 3600
    // calculate hours from duration using formula 
    duration = duration % 3600
    // update duration to remaining song length or time after calculating hours

    let min = parseInt(duration / 60)
    // calculate minute
    duration = duration % 60
    // Update duration to the remaining seconds after calculating minutes

    let sec = parseInt(duration)
    // calculate seconds 
    if (sec < 10) {
      sec = `0${sec}`// add a leading zero to secs after calculating mins
    }
    if (min < 10) {
      min = `0${min}`// add a leading zero to min if less than 10
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`//// If there are hours, format the string as 'hh:mm:ss'
    } else if (min == 0) {
      return `00m ${sec}s`// If there are minutes, format the string as 'mm:ss'
    } else {
      return `${min}m ${sec}s`
    }
  }

  return (
    <div className='control-panel'>
      <div className='timer'>{secondsToHms(currentTime)}</div>
      <Button play={play} isPlaying={isPlaying} />
      <div className='timer'>{secondsToHms(duration)}</div>
    </div>
  )
}
export default ControlPanel;
