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

async function onButtonClick() {
  const filters = []

  let filterService = document.querySelector('#service').value
  if (filterService.startsWith('0x')) {
    filterService = parseInt(filterService)
  }
  if (filterService) {
    filters.push({ services: [filterService] })
  }

  const filterName = document.querySelector('#name').value
  if (filterName) {
    filters.push({ name: filterName })
  }

  const filterNamePrefix = document.querySelector('#namePrefix').value
  if (filterNamePrefix) {
    filters.push({ namePrefix: filterNamePrefix })
  }

  const options = {}
  if (document.querySelector('#allDevices').checked) {
    options.acceptAllDevices = true
  } else {
    options.filters = filters
  }

  try {
    log('Requesting Bluetooth Device...')
    log('with ' + JSON.stringify(options))
    const device = await navigator.bluetooth.requestDevice(options)

    log('> Name:             ' + device.name)
    log('> Id:               ' + device.id)
    log('> Connected:        ' + device.gatt.connected)
  } catch (error) {
    log('Argh! ' + error)
  }
}
const useBluetooth = (url, data) => {}

export default () => {
  useBluetooth('/log', { action: 'demo' })
  return (
    <Section>
      <Title>Web APIs</Title>
      <SubTitle>Bluetooth API</SubTitle>
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
