import React from 'react'

import { type SECTION } from '../../constants/sections'

type Props = {
  setSection: React.Dispatch<React.SetStateAction<SECTION>>
}

const Experiences: React.FC<Props> = () => {
  return (
    <div >
      <div className='my-5'>
        <h1 className="text-uppercase">expériences professionnelles</h1>
        <p className='mb-0'>Durant ces 3 années, j&apos;ai pu faire de l&apos;alternance où j&apos;ai été principalement en autonomie.</p>
      </div>
      <div>
        <ul className='timeline-list text-start'>
          <li>
            <p className="d-flex align-items-center">
              <span className="circle" />
              <span>2023</span>
            </p>
            <p className='fw-bold'> Développeur Web - MAAT </p>
            <ul>
              <li className='pip-target' > Gestion de processus de développement (développement, CI/CD, Monitoring, etc.) </li>
              <li className='pip-target'> Développement d&apos;un questionnaire interactif et un algorithme d&apos;estimations de devis </li>
              <li>
                <span className='pip-target'>Création d&apos;API Rest et réalisation d&apos;un dashboard administratif complet</span>
                <span className='ps-4'>(gestion, sécurité, métriques/KPI, etc.)</span>
              </li>
              <li className='pip-target'> Mise en place d&apos;un système d&apos;affiliation </li>
            </ul>
          </li>
          <br />
          <li>
            <p className="d-flex align-items-center">
              <span className="circle" />
              <span>2020 - 2022</span>
            </p>
            <p className='fw-bold'> Développeur Web - RekYou </p>
            <ul>
              <li className='pip-target'>Implémentation d’un panel admin de backoffice</li>
              <li className='pip-target'>Création d&apos;un prototype de messagerie instantanée</li>
              <li className='pip-target'>Ajouts de fonctionnalités sur divers parties de la Marketplace</li>
              <li className='pip-target'>Développement d’un algorithme d’optimisation</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Experiences
