import BlueCircle from "/assets/Blue.png"
import BlueRectangle from "/assets/BlueButtonChose.png"
import RedCircle from "/assets/Red.png"
import RedRectangle from "/assets/RedButtonChose.png"

export const styleParams: Record<string, Record<string, { img: string, size: 'lg' | 'sm' }>> = {
  blue: {
    circle: {
      img: BlueCircle,
      size: 'lg',
    },
    rectangle: {
      img: BlueRectangle,
      size: 'sm',
    },
  },
  red: {
    circle: {
      img: RedCircle,
      size: 'lg',
    },
    rectangle: {
      img: RedRectangle,
      size: 'sm',
    },
  },
}