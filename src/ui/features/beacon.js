import React, { useReducer } from 'react'
import { Section, Title, SubTitle } from '@brightleaf/elements'
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

const useBeacon = (url, data) => {
  window.addEventListener('unload', logData, false)

  function logData() {
    navigator.sendBeacon(url, data)
  }
}

export default () => {
  useBeacon('/log', { action: 'demo' })
  return (
    <Section>
      <Title>Web APIs</Title>
      <SubTitle>Beacon API</SubTitle>
      <Highlighter className="javascript" languages={['javascript']}>
        {`
window.addEventListener("unload", logData, false);

function logData() {
  navigator.sendBeacon("/log", analyticsData);
}
      `}
      </Highlighter>
    </Section>
  )
}
