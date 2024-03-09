import { DateTime, Duration, DurationObjectUnits } from 'luxon'

export const formatDuration = (duration: Duration): string => {
  return duration.shiftTo('days', 'hours', 'minutes').toHuman({ unitDisplay: 'short', listStyle: 'short', maximumSignificantDigits: 2  })
}

export const formatDurationToDaysMinutesHours = (duration: Duration): DurationObjectUnits => {
  const daysHoursMinutes = duration.shiftTo('days', 'hours', 'minutes').toObject()

  if (daysHoursMinutes.minutes) {
    daysHoursMinutes.minutes = Math.ceil(daysHoursMinutes.minutes)
  }

  return daysHoursMinutes
}  

export const formatTimeDifference = (targetDate: DateTime | number): Duration => {
  return DateTime.fromMillis(+targetDate).diffNow()
}

export const getFullRemainingDays = (dueDate: DateTime | number): number => {
  return  DateTime.fromMillis(+dueDate).diffNow().as('days')
}

export function formatDate(date: DateTime | number): string {
  return DateTime.fromMillis(+date).toLocaleString(DateTime.DATE_MED)
}

export function formatFullDate(date: DateTime | number): string {
  return DateTime.fromMillis(+date).toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS, { locale: 'en-gb' })
}
