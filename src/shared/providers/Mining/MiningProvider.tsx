import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useStores} from "../../store/StoreProvider.tsx";

export const MiningProvider = observer(() => {

    const { userStore } = useStores()

    useEffect(() => {
        if (!userStore.data) return

        userStore.mine()

        setInterval(() => {
            userStore.mine()
        }, 5000)
    }, [userStore.data]);

    return null;
})