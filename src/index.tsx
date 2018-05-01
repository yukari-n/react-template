import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App comp="グー" result="あいこ" />,
  document.getElementById('root') as HTMLElement
);
