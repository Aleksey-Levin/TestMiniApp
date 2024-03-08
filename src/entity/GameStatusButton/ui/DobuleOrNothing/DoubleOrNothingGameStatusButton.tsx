import { observer } from "mobx-react-lite"
import { FC, useMemo } from "react"

import BlueDouble from '/assets/Blue DoN.png'
import Double from "/assets/Double or nothing.png"
import RedDouble from '/assets/Red DoN.png'

import { Button } from "../../../../shared/ui/control/Button"

interface DoubleOrNothingGameStatusButtonProps {
  isDisabled?: boolean
  onClick?: () => void
  isSubmit?: boolean
  color?: 'red' | 'blue'
}

export const DoubleOrNothingGameStatusButton:FC<DoubleOrNothingGameStatusButtonProps> = observer(({
  isDisabled,
  onClick,
  isSubmit,
  color,
}) => {

  const backgroundImg = useMemo(() => {
    if (!color) return Double
    if (color === 'red') return RedDouble
    if (color === 'blue') return BlueDouble
  }, [color])

  return (
    <Button
      as={'button'}
      backgroundImage={backgroundImg}
      size={'lg'}
      isDisabled={isDisabled}
      type={isSubmit ? 'submit' : undefined}
      onClick={onClick}
    />
  )
})