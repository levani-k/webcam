import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
`

export const WebcamWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`

export const StyledCaptureButton = styled.button`
  padding: 8px;
  font-size: 16px;
`

export const StyledImg = styled.img`
  width: ${(width) => width };
  height: auto;
`