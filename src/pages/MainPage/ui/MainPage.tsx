import { observer } from "mobx-react-lite"

import { PageLayout } from "../../../shared/ui/display/PageLayout/PageLayout.tsx"
import classes from './MainPage.module.scss'
import {UserInfo} from "../../../widgets/UserInfo/ui/UserInfo.tsx";
import {UserMoneyInfo} from "../../../widgets/UserMoneyInfo/ui/UserMoneyInfo.tsx";

export const MainPage = observer(() => {
  return (
    <PageLayout className={classes.page}>
      <UserInfo />
        <UserMoneyInfo/>
    </PageLayout>
  )
})