import React, { useRef, createRef } from 'react'
import { Section, Title, SubTitle, Button } from '@brightleaf/elements'
import { Highlighter } from 'ui/components/highlighter'

const usePnP = () => {
  console.log(document.pictureInPictureEnabled)
  if ('pictureInPictureEnabled' in document) return true
  return false
}

export default () => {
  const hasPip = usePnP()
  const vidRef = createRef()
  return (
    <Section>
      <Title>Web APIs</Title>
      <SubTitle>Picture-In-Picture API</SubTitle>
      <video controls src="bbb_1080p.mp4" ref={vidRef}></video>
      <br />
      {hasPip && (
        <Button
          onClick={e => {
            e.preventDefault()
            if (hasPip) {
              vidRef.current.requestPictureInPicture()
            }
          }}
        >
          Pip
        </Button>
      )}
      {hasPip && (
        <Button
          isWarning
          onClick={async e => {
            const video = document.createElement('video')
            video.muted = true
            video.srcObject = await navigator.mediaDevices.getUserMedia({
              video: true,
            })
            video.play()
            video.addEventListener('loadedmetadata', () => {
              video.requestPictureInPicture().catch(console.error)
            })
          }}
        >
          Stream Webcam in P-in-P
        </Button>
      )}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Highlighter className="javascript" languages={['javascript']}>
        {`



























      `}
      </Highlighter>
    </Section>
  )
}
