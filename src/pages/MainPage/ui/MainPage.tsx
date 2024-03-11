import { observer } from "mobx-react-lite"

import { PageLayout } from "../../../shared/ui/display/PageLayout/PageLayout.tsx"
import classes from './MainPage.module.scss'
import {UserInfo} from "../../../widgets/UserInfo/ui/UserInfo.tsx";
import {UserMoneyInfo} from "../../../widgets/UserMoneyInfo/ui/UserMoneyInfo.tsx";
import {useStores} from "../../../shared/store/StoreProvider.tsx";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";

export const MainPage = observer(() => {
    const { userStore } = useStores()
    const { i18n } = useTranslation()

    useEffect(() => {
        const language = userStore.userData?.language || 'en'
        if (language) {
            i18n.changeLanguage(language).catch((e) => {
                console.log(e)
            })
        }
    }, [userStore.userData?.language])
  return (
    <PageLayout className={classes.page}>
      <UserInfo />
        <UserMoneyInfo/>
    </PageLayout>
  )
})