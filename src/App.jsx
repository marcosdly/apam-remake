import { LocationProvider, Route, Router } from 'preact-iso';
import Home from './pages/Home';

import './style/normalize.scss';
import './style/fonts.scss';
import './style/color.scss';
import '@flaticon/flaticon-uicons/css/brands/all.css';
import '@flaticon/flaticon-uicons/css/regular/rounded.css';
import '@flaticon/flaticon-uicons/css/solid/rounded.css';
import './style/icons.scss';

export function App() {
  return (
    <LocationProvider>
      <Router>
        <Route default component={Home} />
        <Route path="/" component={Home} />
      </Router>
    </LocationProvider>
  );
}
