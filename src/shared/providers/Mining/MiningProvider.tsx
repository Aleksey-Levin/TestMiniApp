import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {useStores} from "../../store/StoreProvider.tsx";

export const MiningProvider = observer(() => {

    const { userStore } = useStores()
    const [timer, setTimer] = useState<number>()
    useEffect(() => {
        if (!userStore.data) return

        userStore.mine()

        if (timer) clearInterval(timer)

        const timerTemp = setInterval(() => {
            userStore.mine()
        }, 5000)
        setTimer(timerTemp)

        return () => {
            clearInterval(timer)
        }
    }, [userStore.data, setTimer]);

    return null;
})