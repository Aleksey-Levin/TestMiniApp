import classes from './UserInfo.module.scss'
import {Txt} from "../../../shared/ui/display/Txt/Txt.tsx";
export const UserInfo = () => {
    return (
        <div className={classes.container}>
            <Txt size={'title'}>Hi, Aleksey</Txt>
            <div className={classes.totalDate}>
                <Txt size={'md'}>
                    <Txt size={'md'} color={'blue'}>Total:</Txt>
                    {` 1000000 $ETG`}
                </Txt>
                <Txt size={'md'}>
                    <Txt size={'md'} color={'blue'}>End:</Txt>
                    {` November`}
                </Txt>
            </div>
        </div>
    );
};