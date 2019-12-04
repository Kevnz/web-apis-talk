import React from 'react'
import { Section, Title, SubTitle } from '@brightleaf/elements'
import { Highlighter } from 'ui/components/highlighter'

const useIntersectionObserver = (options, target, fn = () => {}) => {
  const observer = new IntersectionObserver(fn, options)
  // let target = document.querySelector('#listItem');
  observer.observe(target)
}
const opts = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0,
}
export default () => {
  useIntersectionObserver(opts, event => {})
  return (
    <Section>
      <Title>Web APIs</Title>
      <SubTitle>Ambient Light Events</SubTitle>
      <Highlighter className="javascript" languages={['javascript']}>
        {`
let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}
let callback = (entries, observer) => {
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};

let observer = new IntersectionObserver(callback, options);
let target = document.querySelector('#listItem');
observer.observe(target);
      `}
      </Highlighter>
    </Section>
  )
}
