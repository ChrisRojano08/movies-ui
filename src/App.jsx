import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import HomeComponent from './HomeComponent/component/HomeComponent.jsx';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeComponent} />
      </Switch>
    </Router>
  )
}

export default App
