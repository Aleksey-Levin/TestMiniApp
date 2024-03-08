import { observer } from "mobx-react-lite"

import { MainPage } from "./pages/MainPage/ui/MainPage.tsx"
import { TonConnectUiProvider } from "./shared/providers/Ton/TonConnectUIProvider/TonConnectUIProvider.tsx"
import { UserProvider } from "./shared/providers/User/UserProvider.tsx"
import { StoreProvider } from "./shared/store/StoreProvider.tsx"
import {SDKInitProvider} from "./shared/config/miniApp/config.tsx";

const App = observer(function App() {
  return (
      <SDKInitProvider>
          <TonConnectUiProvider>
              <StoreProvider>
                  <UserProvider>
                      <MainPage />
                  </UserProvider>
              </StoreProvider>
          </TonConnectUiProvider>
      </SDKInitProvider>
  )
})

export default App
