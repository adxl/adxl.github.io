import React from 'react'

import skills from '../../data/skills'
import { type SECTION } from '../../constants/sections'

type Props = {
  setSection: React.Dispatch<React.SetStateAction<SECTION>>
}

const Skills: React.FC<Props> = () => (
  <div>
    <div>
      <h1 className="mt-5 mb-3">COMPÉTENCES</h1>
      <div className="justify-content-around">
        {skills.map((category) => (
          <div key={category.name} className="pip-list-horizontal">
            <p className="pip-target fw-bold">{category.name}</p>
            <ul>
              {category.items.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h1 className="mt-5">CONFIG ACTUELLE</h1>
      <p> Arch Linux + i3wm &bull; Neovim + tmux </p>
    </div>
  </div>
)

export default Skills
