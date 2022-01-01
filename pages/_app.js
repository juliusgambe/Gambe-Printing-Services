import NavBar from '../components/views/navbar/navbar'
import '../styles/globals.css'
import Head from 'next/head.js'
import { createContext, useContext } from 'react'
import NavBarHiddenContext from '../components/views/navbar/NavBarContext';
import { useState } from 'react/cjs/react.development';
function MyApp({ Component, pageProps }) {

  /*
    Pass a state into a context provider so that a global variable can be declared and changed down the component tree
  */

  // States for context
  const [isNavBarHidden, setIsNavBarHidden] = useState(false) //used to hide navbar

  return (<>
    <Head>
      <script src="https://kit.fontawesome.com/71f1e9966e.js" crossOrigin="anonymous"></script>
    </Head>
    <NavBarHiddenContext.Provider value={{ isNavBarHidden, setIsNavBarHidden }}>
      {
        value => console.log(value)
      }
      <NavBar />
      <Component {...pageProps} />
    </NavBarHiddenContext.Provider>

  </>)
}

export default MyApp