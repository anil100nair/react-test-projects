import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './index.css';
import Game from './components/game/game.component';

const Dashboard = () => (
  <div>
    <h1>
      Dashboard
    </h1>
  </div>
);

// ========================================

ReactDOM.render(
  <Router>
    <div>
      <aside>
        <Link to={`/`}>Dashboard</Link>
        <Link to={`/tic-tac-toe`}>Tic-Tac-Toe</Link>
      </aside>

      <main>
        <Route exact path="/" component={Dashboard} />
        <Route path="/tic-tac-toe" component={Game} />
      </main>
    </div>
  </Router>,
  document.getElementById('root')
);
