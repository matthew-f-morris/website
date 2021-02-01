import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import LoginPage from './login/Login';
import nonce from '../images/nonce.png';

export default () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/login" component={LoginPage} />
    <Route component={() => <img src={nonce} />} />
  </Switch>
)