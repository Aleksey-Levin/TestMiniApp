
export interface IFilterData {
  value: string
  pattern?: RegExp
  isUpperCase?: boolean
  isOnlyNumbers?: boolean
  isOnlyNumbersDot?: boolean
  notGreat?: string
  toFixed?: number
  isNotNegative?: boolean
  isOnlyEnglish?: boolean
  notGreatSymbol?: number
  isNatural?: boolean
}

function replaceCommasAndKeepFirstDot(input: string): string {
  const withDots = input.replace(/,/g, '.')

  const firstDotIndex = withDots.indexOf('.')

  if (firstDotIndex === -1) {
    return withDots
  }

  const beforeFirstDot = withDots.substring(0, firstDotIndex + 1)
  const afterFirstDot = withDots.substring(firstDotIndex + 1)

  const afterFirstDotWithoutDots = afterFirstDot.replace(/\./g, '')

  return beforeFirstDot + afterFirstDotWithoutDots
}

export const filterData = ({ value,
  pattern,
  isUpperCase,
  isOnlyNumbers,
  notGreat,
  toFixed,
  isNotNegative,
  isOnlyEnglish,
  notGreatSymbol,
  isNatural,
}: IFilterData) => {
  let result = value
  if (isUpperCase) result = result.toUpperCase()


  if (isOnlyNumbers) {
    const patternNumber = /^-?(\d+([.,]\d*)?|[.,]\d*|[.,]?)$/
    result = result.split('').filter((item) => {
      return patternNumber?.test(item) || item === ' '
    }).join('')
    result = replaceCommasAndKeepFirstDot(result)

    if (isNatural) {
      result = Math.ceil(parseFloat(result)).toString()
    }

    if (toFixed !== undefined && result.split('.').length > 1) {
      const splitResult = result.split('.')
      result = [splitResult[0], splitResult[1].slice(0, toFixed)].join('.')
    }

    if(isNotNegative) result = result.replace('-', '')

    if (notGreat !== undefined) {
      if (parseFloat(value) > parseFloat(notGreat)) result = notGreat
    }
  }

  if (isOnlyEnglish) {
    const patternEnglish = /[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/
    result = result.split('').filter((item) => {
      return patternEnglish?.test(item) || item === ' '
    }).join('')
  }

  if (pattern) {
    result = result.split('').filter((item) => {
      return pattern?.test(item)
    }).join('')
  }

  if (notGreatSymbol) {
    result = result.slice(0, notGreatSymbol)
  }

  return result
}
