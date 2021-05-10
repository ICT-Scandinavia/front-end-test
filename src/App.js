import React from 'react'
import { getImageSrc } from './helpers'
import * as styles from './app.css'

const App = () => {
  return (
    <div className={styles.page}>
      <h1>ICT FE Test</h1>
      <br />
      <img src={getImageSrc('ict')} />
      <br />
      <p>Replace this with your code.. :)</p>
    </div>
  )
}

export default App