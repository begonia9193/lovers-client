import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '@/pages/home/Index.jsx'

const App = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
    </Switch>
  )
}

export default App
