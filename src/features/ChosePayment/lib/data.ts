import tetherIcon from '/assets/TetherIcon.png'
import tonIcon from '/assets/ton_symbol.png'

export interface Payment {
  value: 'ton' | 'usd',
  img: string,
}

export const payments: Payment[] = [{
  value: 'ton',
  img: tonIcon,
}, {
  value: 'usd',
  img: tetherIcon,
}]