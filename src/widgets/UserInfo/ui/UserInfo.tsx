import classes from './UserInfo.module.scss'
import {Txt} from "../../../shared/ui/display/Txt/Txt.tsx";
import {useStores} from "../../../shared/store/StoreProvider.tsx";
import {observer} from "mobx-react-lite";
export const UserInfo = observer(() => {
    const { userStore } = useStores()
    return (
        <div className={classes.container}>
            <Txt size={'title'}>Hi, {userStore.data?.user?.firstName}</Txt>
            <div className={classes.totalDate}>
                <Txt size={'md'}>
                    <Txt size={'md'} color={'blue'}>Total:</Txt>
                    {` ${userStore.userData?.total_earned || '0'} $ETG`}
                </Txt>
                <Txt size={'md'}>
                    <Txt size={'md'} color={'blue'}>End:</Txt>
                    {` November`}
                </Txt>
            </div>
        </div>
    );
})