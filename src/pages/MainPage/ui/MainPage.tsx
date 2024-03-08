import { observer } from "mobx-react-lite"

import { PageLayout } from "../../../shared/ui/display/PageLayout/PageLayout.tsx"
import classes from './MainPage.module.scss'
import {UserInfo} from "../../../widgets/UserInfo/ui/UserInfo.tsx";
import {UserMoneyInfo} from "../../../widgets/UserMoneyInfo/ui/UserMoneyInfo.tsx";
import {useMainButton, useMiniApp} from "@tma.js/sdk-react";
import {useEffect} from "react";

export const MainPage = observer(() => {
    const miniApp = useMiniApp();
    useEffect(() => {
        console.log(miniApp)
        miniApp.ready();
    }, [miniApp]);
  return (
    <PageLayout className={classes.page}>
      <UserInfo />
        <UserMoneyInfo/>
    </PageLayout>
  )
})