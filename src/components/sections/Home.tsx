import React, { useEffect, useState } from 'react'
import { EDUCATION, type SECTION } from '../../constants/sections'

type Props = {
  setSection: React.Dispatch<React.SetStateAction<SECTION>>
}

const Home: React.FC<Props> = ({ setSection }) => {
  const [_banner, setBanner] = useState<string>('')

  useEffect(() => {
    fetch('/home-banner.txt')
      .then(async (response) => await response.text())
      .then((data) => { setBanner(data) })
      .catch(() => { })
  })

  return (
    <div className='py-5'>
      <pre className='ascii-banner'>
        {_banner}
      </pre>

      <hr className='pb-3 w-25 mx-auto' />

      <div className='d-flex flex-column align-items-center justify-content-center'>
        <div className='d-flex flex-column mb-3'>
          <div className='mb-4' >
            <span>Hey</span>
            <i className="fa-solid fa-hand-peace ps-1 fs-5" />
            <span>, je suis Adel,</span>
          </div>
          <span> Je suis développeur web full stack / ops, et comme vous l&apos;avez sans doute remarqué, j&apos;aime faire des choses qui sortent de l&apos;ordinaire. </span>
        </div>

        <button onClick={() => { setSection(EDUCATION) }} className='d-flex align-items-center justify-content-center pip-btn my-3'>
          <span className='pip-target'>Découvrir</span>
          <i className="fa-solid fa-angle-right ps-2" />
        </button>
      </div>
    </div>
  )
}

export default Home
