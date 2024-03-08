import {Txt} from "../../../shared/ui/display/Txt/Txt.tsx";
import clsx from "clsx";
import {Button} from "../../../shared/ui/control/Button";
import classes from './UserMoneyInfo.module.scss'

export const UserMoneyInfo = () => {
    return (
        <div className={classes.container}>
            <div className={clsx(classes.block, classes._light)}>
                <div className={classes._container}>
                    <Txt size={'sm'} color={'blue'}>Your balance</Txt>
                    <Txt size={'md'}> 343434343.453 $ETG </Txt>
                </div>
                <div className={classes._container}>
                    <Txt size={'sm'} color={'blue'}>Mining speed</Txt>
                    <Txt size={'md'}>300k/min</Txt>
                </div>
            </div>
            <div className={clsx(classes.block, classes._light)}>
                <div className={classes._container}>
                    <Txt size={'sm'} color={'blue'}>Ref reward</Txt>
                    <Txt size={'md'}> 343434343.453 $ETG </Txt>
                </div>
                <div className={classes._container}>
                    <Txt size={'sm'} color={'blue'}>Ref Mining speed</Txt>
                    <Txt size={'md'}>300k/min</Txt>
                </div>
            </div>
            <div className={clsx(classes.block)}>
                    <Txt size={'sm'} color={'blue'}>Your referal link</Txt>
                    <Txt size={'md'} className={classes.refText}>https://crutayaLinka.com/pfsdfdsfsdf</Txt>
                    <Button as={'button'} size={'md'}><Txt size={'md'}>COPY</Txt></Button>
            </div>
        </div>
    );
};