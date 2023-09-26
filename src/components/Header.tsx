import React from 'react'
import { type SECTION } from '../constants/sections'

import { HOME, EDUCATION, EXPERIENCES, SKILLS, CONTACT } from '../constants/sections'

type Props = {
  section: SECTION
  setSection: React.Dispatch<React.SetStateAction<SECTION>>
}

const Header: React.FC<Props> = ({ section, setSection }) => {
  const selectTab = (tab: SECTION): void => {
    setSection(tab)
  }

  const selectionModifer = (sectionButton: SECTION): string => 'pip-menu-item '.concat(sectionButton === section ? '--selected' : '')

  return (
    <div >
      <nav className="d-flex justify-content-around mt-3">
        <button className={selectionModifer(HOME)} onClick={() => { selectTab(HOME) }}>Accueil</button>
        <button className={selectionModifer(EDUCATION)} onClick={() => { selectTab(EDUCATION) }}>Formation</button>
        <button className={selectionModifer(EXPERIENCES)} onClick={() => { selectTab(EXPERIENCES) }}>Expériences</button>
        <button className={selectionModifer(SKILLS)} onClick={() => { selectTab(SKILLS) }}>Compétences</button>
        <button className={selectionModifer(CONTACT)} onClick={() => { selectTab(CONTACT) }}>Contact</button>
      </nav>
    </div>
  )
}

export default Header
