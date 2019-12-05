import React, { useReducer, useEffect } from 'react'
import { Section, Title, SubTitle, Icon } from '@brightleaf/elements'
import { Highlighter } from 'ui/components/highlighter'

const reducer = (state, action) => {
  switch (action.type) {
    case 'info':
      return { battery: action.payload.data }
    case 'visible':
      return { visible: true, hidden: false }
    default:
      return state
  }
}

const useBattery = () => {
  if (!navigator.getBattery) return { battery: false, getInfo: () => {} }

  const [state, dispatch] = useReducer(reducer, {
    battery: {},
  })

  const getInfo = () => {
    navigator.getBattery().then(function(battery) {
      console.log('the battery', battery)

      battery.addEventListener('chargingchange', function() {
        console.info('chargingchange')
        dispatch({ type: 'info', payload: { data: battery } })
      })

      battery.addEventListener('levelchange', function() {
        console.info('levelchange')
        dispatch({ type: 'info', payload: { data: battery } })
      })

      battery.addEventListener('chargingtimechange', function() {
        console.info('chargingtimechange')
        dispatch({ type: 'info', payload: { data: battery } })
      })

      battery.addEventListener('dischargingtimechange', function() {
        console.info('dischargingtimechange')
        dispatch({ type: 'info', payload: { data: battery } })
      })
      dispatch({ type: 'info', payload: { data: battery } })
    })
  }

  // dispatch({ type: 'success', payload: { data: {} } })
  return { ...state, getInfo }
}

export default () => {
  const { getInfo, ...state } = useBattery()
  console.log('')
  useEffect(() => {
    getInfo()
  }, [])

  console.log('bt', state)

  return (
    <Section>
      <Title>Web APIs</Title>
      <SubTitle>Battery API</SubTitle>
      <Icon
        fas
        icon="battery-full"
        className="is-primary"
        hasTextPrimary={state.battery && state.battery.charging}
        hasTextDanger={!state.battery}
      />
      <Highlighter className="javascript" languages={['javascript']}>
        {`
navigator.getBattery().then(function(battery) {
  function updateAllBatteryInfo(){
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener('chargingchange', function(){
    updateChargeInfo();
  });
  function updateChargeInfo(){
    console.log("Battery charging? "
                + (battery.charging ? "Yes" : "No"));
  }

  battery.addEventListener('levelchange', function(){
    updateLevelInfo();
  });
  function updateLevelInfo(){
    console.log("Battery level: "
                + battery.level * 100 + "%");
  }

  battery.addEventListener('chargingtimechange', function(){
    updateChargingInfo();
  });
  function updateChargingInfo(){
    console.log("Battery charging time: "
                 + battery.chargingTime + " seconds");
  }

  battery.addEventListener('dischargingtimechange', function(){
    updateDischargingInfo();
  });
  function updateDischargingInfo(){
    console.log("Battery discharging time: "
                 + battery.dischargingTime + " seconds");
  }

});
      `}
      </Highlighter>
    </Section>
  )
}
