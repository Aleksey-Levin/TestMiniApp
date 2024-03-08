export const formatFloat = (str: string, fixedCountProps?: number, round = 'nearest') => {

  let digits = str.replace(/\s/g, '').split('')
  digits.unshift('0') // для успешного округления вверх до конца

  const dotIndex = digits.indexOf('.')
  if (dotIndex === -1) {
    return str
  }

  if (fixedCountProps === undefined || fixedCountProps === null) {
    return str
  }

  const lastDigitIndex = dotIndex + fixedCountProps

  let digitIndex = lastDigitIndex
  const startDigitStr = digits[digitIndex + 1]
  let shouldRoundUp = false
  if (round === 'nearest') {
    const startDigit = parseInt(startDigitStr)
    shouldRoundUp = !Number.isNaN(startDigit) && startDigit >= 5
  }
  if (round === 'up') {
    // после последней цифры должна быть хоть одна ненулевая
    const nonZeroIndex = digits.slice(digitIndex + 1).findIndex((digitStr) => {
      const digit = Number(digitStr)

      return !Number.isNaN(digit) && digit > 0
    })
    shouldRoundUp = nonZeroIndex >= 0
  }
  if (startDigitStr && shouldRoundUp) {
    let iteration = 0

    do {
      const digitStr = digits[digitIndex]
      if (digitStr && digitStr != '.') {
        const newDigit = parseInt(digitStr) + 1
        if (!Number.isNaN(newDigit)) {
          if (newDigit > 9) {
            digits[digitIndex] = '0'
          } else {
            digits[digitIndex] = `${newDigit}`
            break
          }
        }
      }
      digitIndex -= 1
      iteration++
    } while (iteration < 10000) // для безопасности. Вряд ли есть числа с больше чем 10000 знаками
  }

  digits = digits.slice(0, lastDigitIndex + 1)

  while (digits[0] === '0' && digits[1] !== '.') {
    digits.shift()
  }
  while (digits[digits.length - 1] === '0') {
    digits.pop()
  }
  if (digits[digits.length - 1] === '.') {
    digits.pop()
  }

  return digits.join('')
}

export function toDecimalsBN(num: number | string, decimals: number | string | undefined) {
  return BigInt((parseFloat(num.toString()) * Math.pow(10, parseInt((decimals ?? '9').toString()))))
}

export function fromDecimals(num: number | string, decimals: number | string | undefined, toFixed?: number) {
  return formatFloat((parseInt(num.toString()) / (Math.pow(10, parseInt((decimals ?? '9').toString())))).toString(), toFixed)
}