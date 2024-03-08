import { observer } from "mobx-react-lite"
import { FC, useState } from "react"

import { ChosePaymentEntity } from "../../../entity/ChosePayment/ui/ChosePaymentEntity.tsx"
import { Dropdown } from "../../../shared/ui/control/Form/DropDown/DropDown.tsx"
import { Payment, payments } from "../lib/data.ts"
import classes from './ChosePaymentFeature.module.scss'

interface ChosePaymentFeatureProps {
  onPaymentChange?: (payment: 'ton' | 'usd') => void
}

export const ChosePaymentFeature: FC<ChosePaymentFeatureProps> = observer(({ onPaymentChange }) => {
  const [payment, setPayment] = useState<Payment>(payments[0])
  
  return (
    <div className={classes.content}>
      <Dropdown
        label={(
          <ChosePaymentEntity
            choosenImg={payment.img}
          />
        )}
        items={
          payments.filter((item) => item.value !== payment.value).map((item) => {
            return (
              <ChosePaymentEntity
                key={item.value}
                isVariant
                choosenImg={item.img}
                onClick={() => {
                  setPayment(item)
                  onPaymentChange?.(item.value)
                }}
              />
            )
          })}
      />
    </div>
  )
})