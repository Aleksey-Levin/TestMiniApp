import { observer } from "mobx-react-lite"

import { fromDecimals } from "../../../../shared/lib/numbers/formatNumbers.ts"
import { useStores } from "../../../../shared/store/StoreProvider.tsx"
import { Txt } from "../../../../shared/ui/display/Txt/Txt.tsx"
import classes from './WalletMenuBalance.module.scss'

export const WalletMenuBalance = observer(() => {
  const { userStore } = useStores()
  
  return (
    <Txt size={'md'} className={classes.button}> {`Your balance: ${fromDecimals(userStore.balance.toString(), 9, 2) } TON`} </Txt>
  )
})