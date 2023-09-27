const URL = 'https://discordapp.com/api/webhooks/1156577092255883306/Ekafu0SHRJzkX7AigRwkKM_0NEw8dCVVbV9YC2Oj4855826qP1ojjtK2DuGJ7ct1A-B1'

const alertSentinelle = (content: string): void => {
  const body = new Blob([JSON.stringify({ content })], {
    type: 'application/json'
  })
  navigator.sendBeacon(URL, body)
}

export const alertVisit = (): void => {
  alertSentinelle('Individu repéré !')
}

export const alertEmail = (): void => {
  alertSentinelle('Lettre en vue !')
}

export const alertResumeDownload = (): void => {
  alertSentinelle('Document consulté !')
}
