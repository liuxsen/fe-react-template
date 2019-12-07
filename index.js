import ReactDOM, {Component} from 'react-dom';
import React from 'react';

class App extends Component {
  render () {
    return <div>app</div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}