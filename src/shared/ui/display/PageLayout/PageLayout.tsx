import clsx from "clsx"
import { observer } from "mobx-react-lite"
import { FC, PropsWithChildren } from "react"

import BackgroundImage from '../../../../assets/Background.png'
import classes from './PageLayout.module.scss'

interface PageLayoutProps extends PropsWithChildren {
  className?: string
}

export const PageLayout: FC<PageLayoutProps> = observer(({ className, children }) => {
  return (
    <div
      className={clsx(classes.page, className)}
      style={{
        background: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={classes.container}>
        {children}
      </div>
    </div>
  )
})