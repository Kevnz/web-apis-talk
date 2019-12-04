import React, { useReducer } from 'react'
import { Section, Title, SubTitle } from '@brightleaf/elements'
import { Highlighter } from 'ui/components/highlighter'

export default () => {
  return (
    <Section>
      <Title>Web APIs</Title>
      <SubTitle>Web Workers API</SubTitle>
      <Highlighter className="javascript" languages={['javascript']}>
        {`


      `}
      </Highlighter>
    </Section>
  )
}
