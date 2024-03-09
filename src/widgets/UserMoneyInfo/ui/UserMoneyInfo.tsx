import {Txt} from "../../../shared/ui/display/Txt/Txt.tsx";
import clsx from "clsx";
import {Button} from "../../../shared/ui/control/Button";
import classes from './UserMoneyInfo.module.scss'
import {useStores} from "../../../shared/store/StoreProvider.tsx";
import {copyToClipboard} from "../../../shared/lib/clipboard/clipboard.ts";
import {formatFloat} from "../../../shared/lib/numbers/formatNumbers.ts";
import {observer} from "mobx-react-lite";

export const UserMoneyInfo = observer(() => {

    const { userStore } = useStores()


    return (
        <div className={classes.container}>
            <div className={clsx(classes.block, classes._light)}>
                <div className={classes._container}>
                    <Txt size={'sm'} color={'blue'}>Your balance</Txt>
                    <Txt size={'md'}> {`${formatFloat(userStore.userData?.user_balance || '0', 4)} $EXT`} </Txt>
                </div>
                <div className={classes._container}>
                    <Txt size={'sm'} color={'blue'}>Mining speed</Txt>
                    <Txt size={'md'}>{`${formatFloat(userStore.userData?.earning || '0', 9)}/sec`}</Txt>
                </div>
            </div>
            <div className={clsx(classes.block, classes._light)}>
                <div className={classes._container}>
                    <Txt size={'sm'} color={'blue'}>Ref reward</Txt>
                    <Txt size={'md'}> {`${formatFloat(userStore.userData?.total_ref_earned || '0', 4)} $EXT`} </Txt>
                </div>
                <div className={classes._container}>
                    <Txt size={'sm'} color={'blue'}>Ref Mining speed</Txt>
                    <Txt size={'md'}>{`${formatFloat(userStore.userData?.ref_earning || '0', 4)}/sec`}</Txt>
                </div>
            </div>
            <div className={clsx(classes.block)}>
                    <Txt size={'sm'} color={'blue'}>Your referal link</Txt>
                    <Txt size={'md'} className={classes.refText}>{userStore.userData?.ref_link ?? ' '}</Txt>
                    <Button as={'button'} size={'md'}><Txt size={'md'} onClick={() => {
                        copyToClipboard(userStore.userData?.ref_link)
                    }}>COPY</Txt></Button>
            </div>
        </div>
    );
})