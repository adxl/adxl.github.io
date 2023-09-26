import React from 'react'

import Home from './sections/Home'
import Education from './sections/Education'
import Experiences from './sections/Experiences'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

import { HOME, EDUCATION, EXPERIENCES, SKILLS, CONTACT } from '../constants/sections'
import type { SECTION } from '../constants/sections'

type Props = {
  section: SECTION
  setSection: React.Dispatch<React.SetStateAction<SECTION>>
}

const sections: Record<SECTION, React.FC<Props>> = {
  [HOME]: Home,
  [EDUCATION]: Education,
  [EXPERIENCES]: Experiences,
  [SKILLS]: Skills,
  [CONTACT]: Contact

}

const Section: React.FC<Props> = ({ section, setSection }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 pb-4">
      <div className="w-100 pip-main h-100 d-flex justify-content-center">
        {React.createElement(sections[section], { section, setSection })}
      </div>
    </div>
  )
}

export default Section
