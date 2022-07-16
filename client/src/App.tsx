import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Cart } from './pages/Cart'
import { MainPage } from './pages/MainPage'
import { History } from './pages/History'
import { Coupons } from './pages/Coupons'
import { Navigation } from './components/Navigation'
import { Container } from './components/Container'
import { AppRoute } from './common/app/app-route.enum'
import { SignOut } from './pages/SignOut'

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <Routes>
          <Route path={AppRoute.SHOP} element={<MainPage />} />
          <Route path={AppRoute.CART} element={<Cart />} />
          <Route path={AppRoute.HISTORY} element={<History />} />
          <Route path={AppRoute.COUPONS} element={<Coupons />} />
          <Route path={AppRoute.SIGN_OUT} element={<SignOut />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
