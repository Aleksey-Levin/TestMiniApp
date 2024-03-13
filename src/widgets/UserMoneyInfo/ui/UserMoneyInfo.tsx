import {Txt} from "../../../shared/ui/display/Txt/Txt.tsx";
import clsx from "clsx";
import {Button} from "../../../shared/ui/control/Button";
import classes from './UserMoneyInfo.module.scss'
import {useStores} from "../../../shared/store/StoreProvider.tsx";
import {copyToClipboard} from "../../../shared/lib/clipboard/clipboard.ts";
import {formatFloat} from "../../../shared/lib/numbers/formatNumbers.ts";
import {observer} from "mobx-react-lite";
import {useTranslation} from "react-i18next";

export const UserMoneyInfo = observer(() => {

    const { userStore } = useStores()
    const { t } = useTranslation()


    return (
        <div className={classes.container}>
            <div className={clsx(classes.block, classes._light)}>
                <div className={classes._container}>
                    <Txt size={'sm'} color={'blue'}>{t('Your_balance')}</Txt>
                    <Txt size={'md'}> {`${formatFloat(userStore.userData?.user_balance || '0', 4)} EXT`} </Txt>
                </div>
                <div className={classes._container}>
                    <Txt size={'sm'} color={'blue'}>{t('Mining_speed')}</Txt>
                    <Txt size={'md'}>{`${userStore.userData?.earning || '0'}/sec`}</Txt>
                </div>
            </div>
            <div className={clsx(classes.block, classes._light)}>
                <div className={classes._container}>
                    <Txt size={'sm'} color={'blue'}>{t('Ref_reward')}</Txt>
                    <Txt size={'md'}> {`${formatFloat(userStore.userData?.total_ref_earned || '0', 4)} EXT`} </Txt>
                </div>
                <div className={classes._container}>
                    <Txt size={'sm'} color={'blue'}>{t('Ref_Mining_speed')}</Txt>
                    <Txt size={'md'}>{`${userStore.userData?.ref_earning || '0'}/sec`}</Txt>
                </div>
            </div>
            <div className={clsx(classes.block)}>
                    <Txt size={'sm'} color={'blue'}>{t('Your_referal_link')}</Txt>
                    <Txt size={'md'} className={classes.refText}>{userStore.userData?.ref_link ?? ' '}</Txt>
                    <Button as={'button'} size={'md'}><Txt size={'md'} onClick={() => {
                        copyToClipboard(userStore.userData?.ref_link)
                    }}>{t('Copy')}</Txt></Button>
            </div>
        </div>
    );
})