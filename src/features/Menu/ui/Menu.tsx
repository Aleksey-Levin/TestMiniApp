import { observer } from "mobx-react-lite"

import { HomeButton } from "../../../entity/Menu/ui/Home/HomeButton.tsx"
import { LeagueButton } from "../../../entity/Menu/ui/League/LeagueButton.tsx"
import { MenuButton } from "../../../entity/Menu/ui/MenuButton/MenuButton.tsx"
import { RecentButton } from "../../../entity/Menu/ui/Recent/RecentButton.tsx"
import { StatsButton } from "../../../entity/Menu/ui/Stats/StatsButton.tsx"
import { Dropdown } from "../../../shared/ui/control/Form/DropDown/DropDown.tsx"
import classes from './Menu.module.scss'

export const Menu = observer(() => {

  return (
    <div className={classes.content}>
      <Dropdown
        label={(
          <MenuButton />
        )}
        items={[<HomeButton key={1} />,
          <LeagueButton key={2} />,
          <StatsButton key={3} />,
          <RecentButton key={4} />]}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'bottom',
        }}
        transformOrigin={{
          horizontal: 10,
          vertical: 'top',
        }}
      />
    </div>

  )
})