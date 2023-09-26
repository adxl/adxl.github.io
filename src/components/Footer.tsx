import React from 'react'

const Footer: React.FC = () => {
  const age = Number(new Date().getFullYear()) - 1999

  const getTodayDate = (): string => {
    const date = new Date()
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    // TODO: add time maybe ?
    return `${day}.${month}.${year}`
  }

  const getAgeProgress = (): number => {
    const todayDate = Number(new Date())
    const birthDate = Number(new Date('1999-04-03'))

    const diffDays = Math.ceil((todayDate - birthDate) / (1000 * 60 * 60 * 24)) - (age * 365)

    return ((diffDays * 100) / 365)
  }
  return (
    <div id="footer" className="container d-flex justify-content-between">
      <span className='pip-target'>
        {getTodayDate()}
      </span>
      <div className="d-flex align-items-center">
        <span className="pip-target me-2">Niveau {age}</span>
        <div id="age-bar">
          <div style={{ width: `${getAgeProgress()}%` }} />
        </div>
      </div>
    </div>
  )
}

export default Footer
