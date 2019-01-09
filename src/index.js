import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './index.css';
import Game from './components/ticTacToe/game/game.component';

// ========================================

ReactDOM.render(
  <Router>
    <div>
      <div className="text-center">
        <h1>React Projects</h1>
        <aside>
          <Link className="projects" to={`/`}>Dashboard</Link>
          <Link className="projects" to={`/tic-tac-toe`}>Tic-Tac-Toe</Link>
        </aside>
      </div>

      <main>
        <Route path="/tic-tac-toe" component={Game} />
      </main>
    </div>
  </Router>,
  document.getElementById('root')
);
