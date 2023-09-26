export const HOME = Symbol('For the home section')
export const EDUCATION = Symbol('For the education section')
export const EXPERIENCES = Symbol('For the experiences section')
export const SKILLS = Symbol('For the skills section')
export const CONTACT = Symbol('For the contact section')

export type SECTION =
  typeof HOME |
  typeof EDUCATION |
  typeof EXPERIENCES |
  typeof SKILLS |
  typeof CONTACT
