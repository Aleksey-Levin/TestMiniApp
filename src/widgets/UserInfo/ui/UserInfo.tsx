import classes from './UserInfo.module.scss'
import {Txt} from "../../../shared/ui/display/Txt/Txt.tsx";
import {useStores} from "../../../shared/store/StoreProvider.tsx";
import {observer} from "mobx-react-lite";
import {formatFloat} from "../../../shared/lib/numbers/formatNumbers.ts";
import {formatFullDate} from "../../../shared/lib/date/date.ts";
import {DateTime} from "luxon";
export const UserInfo = observer(() => {
    const { userStore } = useStores()
    return (
        <div className={classes.container}>
            <Txt size={'title'}>Hi, {userStore.data?.user?.firstName}</Txt>
            <div className={classes.totalDate}>
                <Txt size={'md'}>
                    <Txt size={'md'} color={'blue'}>Total:</Txt>
                    {` ${formatFloat(userStore.userData?.total_earned || '0', 4)} $EXT`}
                </Txt>
                <Txt size={'md'}>
                    <Txt size={'md'} color={'blue'}>End:</Txt>
                    {` ${formatFullDate(DateTime.fromMillis(parseInt(userStore.userData?.round_ending ?? '0')))}`}
                </Txt>
            </div>
        </div>
    );
})