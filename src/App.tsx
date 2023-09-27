import React, { useState, useRef, useEffect } from 'react'

import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'

import { HOME, type SECTION } from './constants/sections'

const App: React.FC = () => {
  const [_section, setSection] = useState<SECTION>(HOME)
  const [_windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  const screenRef = useRef<HTMLDivElement>(null)

  const handlePerspectiveEffect = (e: React.MouseEvent<HTMLDivElement>): void => {
    const screen = screenRef.current

    if (screen == null) {
      return
    }

    const offsetX = 0.5 - e.pageX / window.innerWidth
    const offsetY = 0.5 - e.pageY / window.innerHeight

    const offsetPoster: number = Number(screen.dataset.offset) ?? 0

    const translate3dValue = `translate3d(${offsetX * offsetPoster}px, ${offsetY * offsetPoster}px, 0)`
    const rotateXValue = `rotateX(${-offsetY * offsetPoster}deg)`
    const rotateYValue = `rotateY(${offsetX * offsetPoster}deg)`

    screen.style.transform = `${translate3dValue} ${rotateXValue} ${rotateYValue}`
  }

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (_windowWidth < 1200) {
    return <div id='main' className='d-flex align-items-center'>
      <div ref={screenRef} onMouseMove={handlePerspectiveEffect} data-offset={20} className="container h-100 w-100 d-flex flex-column justify-content-between p-0 position-relative">
        <div />
        <div>
          <h1>Désolé</h1>
          <p>Ce site n&apos;est pas encore disponible pour ce type d&apos;écrans. Mais...</p>
          <p>Avec un peu de chance, ça pourrait marcher en réduisant le niveau de zoom.</p>
        </div>
        <div >
          <i className="fa-solid fa-bug me-2" />
          <small>Une erreur dans la matrice</small>
        </div>
      </div>
    </div>
  }

  return (
    <div id='main'>
      <div ref={screenRef} onMouseMove={handlePerspectiveEffect} data-offset={20} className="container w-100 d-flex flex-column h-100 p-0 position-relative">
        <Header section={_section} setSection={setSection} />
        <Section section={_section} setSection={setSection} />
        <Footer />
      </div>
    </div>
  )
}

export default App
