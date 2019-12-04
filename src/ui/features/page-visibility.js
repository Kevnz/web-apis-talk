import React, { useReducer, useEffect } from 'react'
import { Section, Title, SubTitle } from '@brightleaf/elements'
import { useTitle, useFavicon } from '@brightleaf/react-hooks'
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

const usePageVisibility = workflow => {
  const [state, dispatch] = useReducer(reducer, {
    visible: true,
    hidden: false,
  })

  const change = e => {
    dispatch({ type: document.visibilityState })
  }
  document.addEventListener('visibilitychange', change)
  return { ...state }
}

export default () => {
  useTitle('usePageVisibility example from @brightleaf/react-hooks')

  const { visible, hidden } = usePageVisibility()

  const [favicon, setFavicon] = useFavicon('favicon-32x32.png')

  useEffect(() => {
    if (hidden) {
      setFavicon('favicon-32x32-dim.png')
    } else if (visible) {
      setFavicon('favicon-32x32.png')
    }
  }, [visible, hidden, setFavicon])

  return (
    <Section>
      <Title>Web APIs</Title>
      <SubTitle>Page Visibility API</SubTitle>
      <Highlighter className="javascript" languages={['javascript']}>
        {`
//startSimulation and pauseSimulation defined elsewhere
function handleVisibilityChange() {
  if (document.hidden) {
    pauseSimulation();
  } else  {
    startSimulation();
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);
      `}
      </Highlighter>
    </Section>
  )
}
