import { LocationProvider, Route, Router } from 'preact-iso';
import Home from './pages/Home';

import './style/normalize.scss';
import './style/fonts.scss';
import './style/color.scss';

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
