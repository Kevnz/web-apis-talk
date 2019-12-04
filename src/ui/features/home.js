import React from 'react'
import { Section, Title, SubTitle } from '@brightleaf/elements'
import { Link } from '@reach/router'
export default () => (
  <Section>
    <Title>Web APIs</Title>
    <SubTitle>I did not know the browser did that</SubTitle>
    <Link to="/ambient-light" className="button is-info">
      Start
    </Link>
  </Section>
)
