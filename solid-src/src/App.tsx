import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { net } from '@neutralinojs/lib'

function App() {
  const [count, setCount] = createSignal(0)

  const callback = async () => {
    setCount((count) => count + 1);

    try {
      const data = await net.isOnline();
      console.log('NET API - isOnline:', data);

      const resolved = await net.resolveHost('neutralino.js.org');
      console.log('NET API - resolveHost:', resolved);

    } catch (error) {
      console.error('Error with NET API:', error);
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={callback}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  )
}

export default App
