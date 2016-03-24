import React, {Component} from 'react';
import Foo from './Foo/Foo';

export default class App extends Component {
  render() {
    return (
      <div className="page-container">
        {this.props.children}
        <Foo />
      </div>

    );
  }
}
