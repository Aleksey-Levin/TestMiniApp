import number1 from '/assets/numbers/1.png'
import number2 from '/assets/numbers/2.png'
import number3 from '/assets/numbers/3.png'
import number4 from '/assets/numbers/4.png'
import number5 from '/assets/numbers/5.png'
import number6 from '/assets/numbers/6.png'
import number7 from '/assets/numbers/7.png'
import number8 from '/assets/numbers/8.png'
import number9 from '/assets/numbers/9.png'
import number0 from '/assets/numbers/zero.png'

export const numberToImg = (value: string) => {
  return value.split('').map((item) => {
    switch (item){
      case '0':
        return number0
      case '1':
        return number1
      case '2':
        return number2
      case '3':
        return number3
      case '4':
        return number4
      case '5':
        return number5
      case '6':
        return number6
      case '7':
        return number7
      case '8':
        return number8
      case '9':
        return number9
    }
    
    return
  })
}