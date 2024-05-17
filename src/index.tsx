//react
import React from 'react'
import ReactDOM from 'react-dom/client'
//router
import { HashRouter } from 'react-router-dom'
//style
import { ThemeProvider } from 'styled-components'
import 'normalize.css'
import './assets/css/index.less'
import theme from './assets/theme'
//redux
import { Provider } from 'react-redux'
import store from './store'
//app
import App from '@/App'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
)
