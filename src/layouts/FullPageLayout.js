import React, { Fragment } from 'react'
import ScrollButton from './components/backtotop'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

export default function FullPageLayout({children}) {
  return (
    <Fragment>
    <Header />
      {children}
      <Sidebar/>
      <ScrollButton />
      <Footer />
    </Fragment>
  )
}
