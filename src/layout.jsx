import React from "react/addons";
import layoutMixin from "./layout-mixin";

/**
A layout manager that makes it easy to build responsive layouts with different
numbers of columns at different breakpoints.

For example this layout is one column in `x-small` media size, and three columns
in `medium` and above.

```jsx
<Layout x-small={1} medium={3}>
  <div>A</div><div>B</div><div>C</div>
</Layout>
```

And this layout is one column in `x-small` media size, and three columns
in `medium` where the columns are 2, 8 and 2 wide (using the 12 grid layout
sizing).

```jsx
<Layout x-small={1} medium-sizes={[2,8,2]}>
  <div>A</div><div>B</div><div>C</div>
</Layout>
```
@import {Layout}
@component Layout
*/
const BaseClass = React.createClass({
  mixins: [layoutMixin()],
  propTypes: {
    children: React.PropTypes.node,
    className: React.PropTypes.string
  },
  displayName: "Layout",
  render() {
    return this.layoutChildren(this.props.children, this.props,
      this.props.className);
  }
});

BaseClass.layoutMixin = layoutMixin;

export default BaseClass;

