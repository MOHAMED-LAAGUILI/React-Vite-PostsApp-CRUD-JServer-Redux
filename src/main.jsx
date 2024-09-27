import { Store } from './app/Store.jsx'
import { createRoot } from 'react-dom/client'
import App from './Components/App.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App/>
  </Provider>
)
