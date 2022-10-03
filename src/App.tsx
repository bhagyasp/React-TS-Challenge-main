import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Organisms/Header'
import Home from './components/pages/Home'
import './global.css'
import Details from './components/pages/Details'
// import {MoviesCrudContextProvider} from "./context/MoviesCrudProvider";
/**
 * The starting page for your App
 */

class App extends Component {
  render () {
    return (
      <>
        <BrowserRouter>
          <Header />
          <main>
            <section>
              {/* <MoviesCrudContextProvider> */}
                <Routes>
                  <Route path={'/'} element={<Home />} />
                </Routes>
                <Routes>
                  <Route path={'/details/:id'} element={<Details />} />
                </Routes>
                {/* </MoviesCrudContextProvider> */}
            </section>
          </main>
        </BrowserRouter>
      </>
    )
  }
}

export default App
