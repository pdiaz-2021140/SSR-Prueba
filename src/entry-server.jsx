import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <h1>ssss</h1>
      <App />
    </React.StrictMode>
  )
  return { html }
}
