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

const usePush = (url, data) => {}

export default () => {
  usePush('/log', { action: 'demo' })
  return (
    <Section>
      <Title>Web APIs</Title>
      <SubTitle>Push API</SubTitle>
      <Highlighter className="javascript" languages={['javascript']}>
        {`


      `}
      </Highlighter>
    </Section>
  )
}
