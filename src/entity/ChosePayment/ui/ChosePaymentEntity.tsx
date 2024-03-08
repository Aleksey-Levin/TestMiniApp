import { observer } from "mobx-react-lite"
import { FC } from "react"

import ChoseBackground from '/assets/Chose.png'
import VariantBackground from '/assets/VariantChose.png'

import { Button } from "../../../shared/ui/control/Button"
import classes from './ChosePaymentEntity.module.scss'

interface ChosePaymentEntityProps {
  onClick?: () => void
  choosenImg?: string
  isVariant?: boolean
}

export const ChosePaymentEntity: FC<ChosePaymentEntityProps> = observer(({ onClick, isVariant, choosenImg }) => {

  return (
    <Button
      backgroundImage={isVariant ? VariantBackground : ChoseBackground}
      as={'button'}
      size={'sm'}
      className={classes.content}
      type={'reset'}
      onClick={onClick}
    >
      <img src={choosenImg} className={classes.absoluteContent} />
    </Button>
  )
})