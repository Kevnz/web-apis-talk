import React from 'react'
import { Location, Link } from '@reach/router'
import { Router } from 'ui/core/router'
import {
  NavBar,
  NavBarBrand,
  Section,
  NavigationView,
  Menu,
  MenuLabel,
  MenuList,
  MenuListItem,
  Icon,
} from '@brightleaf/elements'
import { Loading } from 'ui/components/loading'
import { AuthProvider } from 'ui/core/context/auth'
import { AppProvider } from 'ui/core/context/app'
import './app.scss'

const Home = React.lazy(() => import('ui/features/home'))
const Ambient = React.lazy(() => import('ui/features/ambient-light-events'))
const BeaconPage = React.lazy(() => import('ui/features/beacon'))
const BatteryPage = React.lazy(() => import('ui/features/battery'))
const BluetoothPage = React.lazy(() => import('ui/features/bluetooth'))
const FullScreenPage = React.lazy(() => import('ui/features/fullscreen'))
const PictureInPicturePage = React.lazy(() =>
  import('ui/features/picture-in-picture')
)
const UpLink = props => {
  return (
    <Location>
      {({ location }) => {
        return (
          <Link
            {...props}
            getProps={prop => {
              const { isCurrent } = prop
              return {
                className: isCurrent
                  ? props.className + ' is-active'
                  : props.className,
              }
            }}
          />
        )
      }}
    </Location>
  )
}
export default () => {
  return (
    <AuthProvider>
      <AppProvider>
        <NavigationView isStatic>
          <Menu>
            <MenuLabel>General</MenuLabel>
            <MenuList className="menu-list">
              <MenuListItem>
                <UpLink to="/">
                  <Icon fas icon="home" /> Home
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/ambient-light">
                  <Icon fas icon="lightbulb" /> Ambient Light
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/battery">
                  <Icon fas icon="battery-half" /> Battery
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/beacon">
                  <Icon fas icon="fire" /> Beacon
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/bluetooth">
                  <Icon fab icon="bluetooth" /> Bluetooth
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/fullscreen">
                  <Icon fas icon="compress" /> Full Screen
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/gamepad">
                  <Icon fas icon="gamepad" /> Gamepad
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/intersection">
                  <Icon far icon="object-ungroup" /> Intersection
                </UpLink>
              </MenuListItem>

              <MenuListItem>
                <UpLink to="/network-info">
                  <Icon fas icon="wifi" /> Network Info
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/page-visibility">
                  <Icon far icon="eye" /> Page Visibility
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/p-in-p">
                  <Icon fas icon="photo-video" /> Picture in Picture
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/?">
                  <Icon fas icon="map-marked-alt" /> Proximity
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/?">
                  <Icon far icon="paper-plane" /> Push
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/?">
                  <Icon fas icon="arrows-alt" /> Resize Observer
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/service-workers">
                  <Icon fas icon="cogs" /> Service Workers
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/?">
                  <Icon fas icon="exclamation-triangle" /> Vibration
                </UpLink>
              </MenuListItem>

              <MenuListItem>
                <UpLink to="/animations">
                  <Icon fas icon="bacon" /> Web Animations
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/audio">
                  <Icon fas icon="music" /> Web Audio
                </UpLink>
              </MenuListItem>
              <MenuListItem>
                <UpLink to="/animations">
                  <Icon fas icon="cog" className="fa-spin" /> Web Workers
                </UpLink>
              </MenuListItem>
            </MenuList>
            <br />
            <MenuLabel>
              <Icon fas icon="book" /> Documentation
            </MenuLabel>
            <MenuList className="menu-list">
              <MenuListItem>
                <a href="https://brightleaf.dev/elements">
                  <Icon fas icon="lightbulb" /> Brightleaf Elements
                </a>
              </MenuListItem>
              <MenuListItem>
                <a href="https://brightleaf.dev/hooks">
                  <Icon fas icon="sun" /> React Hooks
                </a>
              </MenuListItem>
              <MenuListItem>
                <a href="https://kevinisom.info/react-form-elements">
                  <Icon fas icon="cubes" /> Form Elements
                </a>
              </MenuListItem>
              <MenuListItem>
                <a href="https://kevinisom.info/creature-features">
                  <Icon fas icon="pastafarianism" /> Creature Features
                </a>
              </MenuListItem>
              <MenuListItem>
                <a href="https://kevinisom.info/back-off">
                  <Icon fas icon="redo" /> Back-Off
                </a>
              </MenuListItem>
              <MenuListItem>
                <a href="https://kevinisom.info/async-tools">
                  <Icon fas icon="tools" /> Async Tools
                </a>
              </MenuListItem>
              <MenuListItem>
                <a href="https://github.com/kevnz/">
                  <Icon fab icon="github" /> GitHub
                </a>
              </MenuListItem>
            </MenuList>
          </Menu>
        </NavigationView>
        <NavBar isFixedTop className="is-radiusless">
          <NavBarBrand
            src="/favicon-32x32.png"
            href="/"
            target="navTarget"
            width="32"
            height="32"
          />
        </NavBar>
        <Section>
          <React.Suspense fallback={<Loading />}>
            <Router>
              <Home path="/" />
              <Ambient path="/ambient-light" />
              <BatteryPage path="/battery" />
              <BeaconPage path="/beacon" />
              <BluetoothPage path="/bluetooth" />
              <FullScreenPage path="/fullscreen" />
              <PictureInPicturePage path="/p-in-p" />
            </Router>
          </React.Suspense>
        </Section>
      </AppProvider>
    </AuthProvider>
  )
}
