import { observer } from "mobx-react-lite"
import { FC, PropsWithChildren } from "react"

interface HideProps extends PropsWithChildren{
  hide?: boolean
}

export const Hide: FC<HideProps> = observer(({ hide, children }) => {
  if (hide) return null
  
  return children
})