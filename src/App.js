import React, { useState, useRef } from 'react'
import Webcam from 'react-webcam'
import { isMobile } from 'react-device-detect'
import { resetOrientation } from './utils'
import {
  Wrapper,
  WebcamWrapper,
  StyledCaptureButton,
  StyledImg,
} from './AppStyles'


const App = () => {
  const width = isMobile ? 150 : 400
  console.log('isMobile: ', isMobile)
  const webcamRef = useRef(null)
  const videoConstraints = { width, height: width, facingMode: 'environment' }
  const [error, setCameraError] = useState(null)
  const [ imgSrc, setImgSrc ] = useState('')
  const handleCapturePic = async () => {
    const imageSrc = webcamRef.current.getScreenshot()
    const orientation = window.isMobile ? 1 : 2
    const image = await resetOrientation(imageSrc, orientation)
    setImgSrc(image)
  }
  return (
    <Wrapper>
      <WebcamWrapper>
      <Webcam
        ref={webcamRef}
        audio={false}
        mirrored={isMobile ? false : true}
        screenshotFormat='image/jpeg'
        videoConstraints={videoConstraints}
        onUserMediaError={(err) => setCameraError(err)}
        screenshotQuality={0.5}
        minScreenshotHeight={1200}
        minScreenshotWidth={1200}
      />
      <StyledImg src={imgSrc} width={width}/>
      </WebcamWrapper>
      <StyledCaptureButton onClick={handleCapturePic}>Capture</StyledCaptureButton>
    </Wrapper>
  );
}
export default App;