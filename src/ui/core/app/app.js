import React from 'react'
import { Router } from 'ui/core/router'
import { NavBar, NavBarBrand, Section } from '@brightleaf/elements'
import { Loading } from 'ui/components/loading'
import { AuthProvider } from 'ui/core/context/auth'
import { AppProvider } from 'ui/core/context/app'
import './app.scss'

const Home = React.lazy(() => import('ui/features/home'))
const Ambient = React.lazy(() => import('ui/features/ambient-light-events'))

export default () => {
  return (
    <AuthProvider>
      <AppProvider>
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
            </Router>
          </React.Suspense>
        </Section>
      </AppProvider>
    </AuthProvider>
  )
}
