import React from 'react/addons';

import Playground from 'component-playground';
import assign from 'object-assign';

export default React.createClass({
  getDefaultProps() {
    return {
      title: 'Home',
      route: 'home'
    }
  },
  render() {
    return (
      <div className="component-documentation">
        <h1>Layout Showcase</h1>

        <p>A simple multi-column example.</p>

        <Playground
          codeText={require("raw!./examples/home/simple.example")}
          scope={assign({React}, require('../scope.jsx'))}
          noRender={true}/><br/>

        <p>A sample using column sizes.</p>

        <Playground
          codeText={require("raw!./examples/home/sizes.example")}
          scope={assign({React}, require('../scope.jsx'))}
          noRender={true}/>
      </div>
    )
  }
});
