import React, { useReducer } from 'react'
import { Section, Title, SubTitle, Button } from '@brightleaf/elements'
import { Highlighter } from 'ui/components/highlighter'

const reducer = (state, action) => {
  switch (action.type) {
    case 'hidden':
      return { visible: false, hidden: true }
    case 'visible':
      return { visible: true, hidden: false }
    default:
      return state
  }
}

const useFullScreen = () => {
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }
  return toggleFullScreen
}

export default () => {
  console.info('full')
  const toggle = useFullScreen()
  return (
    <Section>
      <Title>Web APIs</Title>
      <SubTitle>Full Screen API</SubTitle>
      <br />
      <video controls src="bbb_1080p.mp4"></video>
      <Button
        isPrimary
        onClick={e => {
          e.preventDefault()
          toggle()
        }}
      >
        Toggle
      </Button>
      <Highlighter className="javascript" languages={['javascript']}>
        {`

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
      `}
      </Highlighter>
    </Section>
  )
}
