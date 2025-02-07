import { useState, useRef, useEffect } from 'react'
import './slider.css'
import './thumb.css'

const Slider = ({ percentage = 0, onChange }) =>{
  // percentage and onchange are props defaulted to 0
  // onchange is called when the slider value is changed
  
  const [position, setPosition] = useState(0)
  const [marginLeft, setMarginLeft] = useState(0)
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  // useState hooks position to indicate current slider position in percentage
  // margin left is css property for thumbs left margin
  // progress bar is css style property for progress bar width
  
  const rangeRef = useRef()
  const thumbRef = useRef()
  // use ref hook to get references to range the input element 
  // use ref hook to get thumb element 

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width
    // Get the width of the range element and store it in rangeWidth variable
    const thumbWidth = thumbRef.current.getBoundingClientRect().width
    // get the width of the thumb element and store it in a thumbwidth variablwe 
    const centerThumb = (thumbWidth / 100) * percentage * -1
    // calculate the center position for the thumb based on the percentage
    const centerProgressBar =
      thumbWidth + (rangeWidth / 100) * percentage - (thumbWidth / 100) * percentage
    setPosition(percentage)
    // set the position state variable to the provided percentage
    setMarginLeft(centerThumb)
    // set the marginleft state variable to the calculated centerthumb value
    setProgressBarWidth(centerProgressBar)
    // set the progressbarwidth state variable to the calculated center progress bar value 
  }, [percentage])

  return (
    <div className='slider-container'>
      <div
        className='progress-bar-cover'
        style={{
          width: `${progressBarWidth}px`
          // its width is set dynamically using the progressBarWidth variable
        }}
      ></div>
      <div
        className='thumb'
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`// usestates for dynamic styling
        }}
      ></div>
      <input
        type='range'
        value={position}//value set to position state variable
        ref={rangeRef}// ref is used to reference this element in the code 
        step='0.01'
        className='range'
        onChange={onChange}//used to handle change in slider value
      />
    </div>
  )
}

export default Slider
