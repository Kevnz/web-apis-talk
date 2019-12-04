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

const useFullScreen = (url, data) => {}

export default () => {
  useFullScreen('/log', { action: 'demo' })
  return (
    <Section>
      <Title>Web APIs</Title>
      <SubTitle>Full Screen API</SubTitle>
      <Highlighter className="javascript" languages={['javascript']}>
        {`


      `}
      </Highlighter>
    </Section>
  )
}
