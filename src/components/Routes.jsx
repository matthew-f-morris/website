import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import LoginPage from './Login';

export default () => (
  <Switch>
    <Route path="/home" exact component={Home} />
    <Route path="/login" exact component={LoginPage} />
  </Switch>
)