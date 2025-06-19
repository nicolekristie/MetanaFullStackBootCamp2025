import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'






//register the service worker>defer rendering
//create wrapper function > p
async function deferRender() {
  //use this to prevent from running the service working in prod.
  // if (process.env.NODE_ENV != 'development') {
  //   return
  // }

const { worker } = await import('./mocks/browser.js')
//worker.start() returns a Promis that resolves
// once the Service Worker is up and ready to intercept requests.
return await worker.start()
}










deferRender().then(() => {

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});