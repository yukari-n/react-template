import * as React from 'react';
import './App.css';

interface AppValues {
  comp: string;
  result: string;
//   gcp: string;
}

interface AppStates {
  gcp: string;
  pushed: number;
}

// const te = ['グー', 'チョキ', 'パー'];
// const listItems = te.map((gcp: string) =>
//   <li key={gcp.toString()}><button onClick={() => this.onClick()}>{gcp}</button></li>
// );

class App extends React.Component<AppValues, AppStates> {
  constructor(props: AppValues) {
    super(props);
    this.state = {
      pushed: 0,
      gcp: ''
    };
  }

  onClickG() {
    this.setState({
      pushed: this.state.pushed + 1,
      gcp: 'グー'
    });
  }
  onClickC() {
    this.setState({
      pushed: this.state.pushed + 1,
      gcp: 'チョキ'
    });
  }
  onClickP() {
    this.setState({
      pushed: this.state.pushed + 1,
      gcp: 'パー'
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <p className="Player-title">YOU</p>
          <ul>
            <li><button onClick={() => this.onClickG()}>グー</button></li>
            <li><button onClick={() => this.onClickC()}>チョキ</button></li>
            <li><button onClick={() => this.onClickP()}>パー</button></li>
          </ul>
        </div>
        <div className="Result">
          <p>{this.state.pushed}回目の結果</p>
          <p>
            プレイヤーの手：{this.state.gcp}<br />
            コンピューターの手：{this.props.comp}
          </p>
          <p>{this.props.result}</p>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
