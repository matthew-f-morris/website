import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import LoginPage from './Login';
import nonce from '../images/nonce.png';

export default () => (
  <Switch>
    <Route path="/home" exact component={Home} />
    <Route path="/login" exact component={LoginPage} />
    <Route component={() => <img src={nonce} />} />
  </Switch>
)