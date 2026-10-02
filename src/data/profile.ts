import type { Profile } from '../types/portfolio'
import { personal } from './personal'

// Hero photo-card availability badge.
// "working" -> green pulsing dot + "Currently working on a project"
// "open"    -> violet pulsing dot + "Open to work, let's talk"
export const AVAILABILITY_STATUS = 'open' as const

export const profile: Profile = { ...personal, availability: AVAILABILITY_STATUS }