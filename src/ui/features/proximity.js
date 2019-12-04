import React, { useReducer } from 'react'
import { Section, Title, SubTitle } from '@brightleaf/elements'
import { Highlighter } from 'ui/components/highlighter'

const reducer = (state, action) => {
  switch (action.type) {
    case '?':
      return { visible: false, hidden: true }
    case '??':
      return { visible: true, hidden: false }
    default:
      return state
  }
}

const useProximity = (url, data) => {}

export default () => {
  useProximity('/log', { action: 'demo' })
  return (
    <Section>
      <Title>Web APIs</Title>
      <SubTitle>Proximity API</SubTitle>
      <Highlighter className="javascript" languages={['javascript']}>
        {`


      `}
      </Highlighter>
    </Section>
  )
}
