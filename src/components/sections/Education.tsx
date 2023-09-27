import React from 'react'
import { type SECTION } from '../../constants/sections'

type Props = {
  setSection: React.Dispatch<React.SetStateAction<SECTION>>
}

const Education: React.FC<Props> = () => {
  return (
    <div className='align-items-center container d-flex flex-column justify-content-start'>
      <div className='my-5'>
        <h1 className="text-uppercase">parcours scolaire</h1>
        <p className='mb-0'>En 2020, après avoir fait une licence en systèmes informatiques,</p>
        <p>je rejoins l&apos;ESGI pour un bachelor et un mastère en spécialisation dans le web.</p>
      </div>
      <div>
        <ul className="timeline-list text-start">
          <li>
            <p className="d-flex align-items-center">
              <span className="circle" />
              <span>2021-2023</span>
            </p>
            <p className='fw-bold'> Mastère </p>
            <p> Ingénierie du Web &bull; École Supérieure de Génie Informatique &bull; (Paris, FRANCE) </p>
            <br />
          </li><li>
            <p className="d-flex align-items-center">
              <span className="circle" />
              <span>2020-2021</span>
            </p>
            <p className='fw-bold'> Bachelor </p>
            <p> Ingénierie du Web &bull; École Supérieure de Génie Informatique &bull; (Paris, FRANCE)</p>
            <br />
          </li>
          <li>
            <p className="d-flex align-items-center">
              <span className="circle" />
              <span>2016-2019</span>
            </p>
            <p className='fw-bold'> Licence </p>
            <p> Systèmes Informatiques &bull; Université d&apos;Oran 1 &bull; (Oran, ALGÉRIE) </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Education
