import React from 'react'
import { Section, Title, SubTitle } from '@brightleaf/elements'
import { Highlighter } from 'ui/components/highlighter'

const useWebAPI = (
  api = 'ondevicelight',
  eventName = 'devicelight',
  fn = () => {}
) => {
  if (api in window) {
    console.log('it does have ondevicelight')
    window.addEventListener(eventName, fn)
  } else {
    console.log('devicelight event not supported')
  }
}
export default () => {
  useWebAPI('ondevicelight', 'devicelight', event => {
    var body = document.querySelector('body')
    console.log('it does have ondevicelight', event)
    if (event.value < 50) {
      console.log('darklight')
      body.classList.add('darklight')
      body.classList.remove('brightlight')
    } else {
      console.log('brightlight')
      body.classList.add('brightlight')
      body.classList.remove('darklight')
    }
  })
  return (
    <Section>
      <Title>Web APIs</Title>
      <SubTitle>Ambient Light Events</SubTitle>
      <Highlighter className="javascript" languages={['javascript']}>
        {`
if ('ondevicelight' in window) {
  window.addEventListener('devicelight', function(event) {
    var body = document.querySelector('body')
    if (event.value < 50) {
      body.classList.add('darklight');
      body.classList.remove('brightlight')
    } else {
      body.classList.add('brightlight')
      body.classList.remove('darklight')
    }
  })
} else {
  console.warn('devicelight event not supported')
}
      `}
      </Highlighter>
    </Section>
  )
}
