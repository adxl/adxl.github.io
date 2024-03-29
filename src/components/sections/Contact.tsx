import React from 'react'
import { type SECTION } from '../../constants/sections'
import { alertEmail, alertResumeDownload } from '../../api/discord'

type Props = {
  setSection: React.Dispatch<React.SetStateAction<SECTION>>
}

const emailAddress = 'adelsenhadjii@gmail.com'

const Contact: React.FC<Props> = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1 className='my-5 text-uppercase'>Contact</h1>

      <button className='pip-btn mb-3' >
        <i className="fa-solid fa-arrow-up-right-from-square me-2" />
        <a onClick={alertEmail} target='_blank' href={`mailto:${emailAddress}`} rel="noreferrer">{emailAddress}</a>
      </button>

      <button className='pip-btn' >
        <i className="fa-solid fa-file-pdf me-2" />
        <a onClick={alertResumeDownload} href="/cv.pdf" download="CV - Adel Senhadji - Web Developer" target="_blank" rel="noreferrer" >
          Télécharger mon CV
        </a>
      </button>

      <hr className='w-25 my-5 mx-auto' />

      <div className='d-flex justify-content-center align-items-center' >
        <a className='pip-btn pip-logo' target='_blank' href='https://www.linkedin.com/in/asenhadji/' rel="noreferrer" >
          <i className="fa-brands fa-linkedin" />
        </a>
        <a className='pip-btn pip-logo' target='_blank' href='https://www.github.com/adxl' rel="noreferrer" >
          <i className="fa-brands fa-square-github" />
        </a>
        <a className='pip-btn pip-logo' target='_blank' href='https://stackoverflow.com/users/9104087/adxl' rel="noreferrer" >
          <i className="fa-brands fa-stack-overflow" />
        </a>
      </div>
    </div>
  )
}

export default Contact
