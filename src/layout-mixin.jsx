/* eslint max-statements:0 */

import React from "react/addons";

export default () => {
  return {
    layoutChildren(children, options, className) {
      const colMap = {1: 12, 2: 6, 3: 4, 4: 3, 6: 2, 12: 1};

      const breakpoints = this.props.breakpoints || [
        {name: 'x-small', format: (n,t) => `col-xs-${n}`},
        {name: 'small', format: (n,t) => `col-sm-${n}`},
        {name: 'medium', format: (n,t) => `col-md-${n}`},
        {name: 'large', format: (n,t) => `col-lg-${n}`}
      ];

      let breakpointMap = {};
      for(var b in breakpoints) {
        breakpointMap[breakpoints[b].name] = breakpoints[b].format;
      }

      let cMap = {};
      cMap[breakpoints[0].name] = [12];
      for(var b in breakpoints) {
        let bucket = breakpoints[b];
        if (options[bucket.name] && colMap[options[bucket.name]]) {
          cMap[bucket.name] = [colMap[options[bucket.name]]];
        }

        if (options[bucket.name + '-sizes']) {
          cMap[bucket.name] = options[bucket.name + '-sizes'];
        }
      }

      let wrappedChildren = React.Children.map(children, (child, index) => {
        let classes = className ? [className] : [];
        for (let k in cMap) {
          var width = cMap[k][index % cMap[k].length];
          var formatter = breakpointMap[k];
          classes.push(formatter(width, 12));
        }
        return (<div className={classes.join(" ")}>{child}</div>);
      });

      return (
        <div className={options.rowClass || 'row'} style={options.style}>
          {wrappedChildren}
        </div>
      );
    }
  };
};
