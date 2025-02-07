import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Components/Header/Header.jsx';
import Linkpages from '../linkPages/Linkpages.jsx';
const Layout = () => {
  const location = useLocation();
  const hideHeader= ['/userMain', '/userMain/podcast'];
  return (
    <>
      {!hideHeader.includes(location.pathname) && <Header /> }
      <Linkpages />
    </>
  )
}

export default Layout