import React from 'react'
import { Section, Title, SubTitle, Container } from '@brightleaf/elements'
import { Highlighter } from 'ui/components/highlighter'




export default () => {
  return (
    <Section>
      <Title>Web APIs</Title>
      <SubTitle>Proximity API</SubTitle>
      <Highlighter className="javascript" languages={['javascript']}>
        {`
window.addEventListener('userproximity', function(event) {
  if (event.near) {
    // let's power off the screen
    navigator.mozPower.screenEnabled = false;
  } else {
    // Otherwise, let's power on the screen
    navigator.mozPower.screenEnabled = true;
  }
});

      `}
      </Highlighter>
      <Container>
        <p>
          When the device proximity sensor detects a change between the device and
          an object, it notifies the browser of that change.
          When the browser gets such a notification, it fires a DeviceProximityEvent for any change,
          and a UserProximityEvent event in the case of a more rough change.
        </p>
        <br />
        <p>This event can be captured at the window object level by using the addEventListener method
          (using the deviceproximity or userproximity event name) or by attaching an event handler
          to the window.ondeviceproximity or window.onuserproximity properties.
        </p>  <br />
        <p>Once captured, the event object gives access to different kinds of information:</p>
        <ul>
          <li>
            The DeviceProximityEvent event provides an exact match for the distance between the device and the object through its value property. It also provides the closest and farthest distance the device is able to detect something through its min and max properties.
          </li><li>  The UserProximityEvent event provides a rough approximation of the distance, expressed through a boolean. The UserProximityEvent.near property is true if the object is close or false if the object is far.
        </li>
        </ul>

      </Container>
    </Section>
  )
}
