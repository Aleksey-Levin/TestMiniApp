import { observer } from "mobx-react-lite"

import { MainPage } from "./pages/MainPage/ui/MainPage.tsx"
import { TonConnectUiProvider } from "./shared/providers/Ton/TonConnectUIProvider/TonConnectUIProvider.tsx"
import { UserProvider } from "./shared/providers/User/UserProvider.tsx"
import { StoreProvider } from "./shared/store/StoreProvider.tsx"
import {SDKInitProvider} from "./shared/config/miniApp/config.tsx";
import {MiningProvider} from "./shared/providers/Mining/MiningProvider.tsx";

const App = observer(function App() {
  return (
      <SDKInitProvider>
          <TonConnectUiProvider>
              <StoreProvider>
                  <UserProvider>
                      <MainPage />
                      <MiningProvider/>
                  </UserProvider>
              </StoreProvider>
          </TonConnectUiProvider>
      </SDKInitProvider>
  )
})

export default App
