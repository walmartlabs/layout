/* eslint max-statements:0 */

import React from "react/addons";

export default () => {
  return {
    layoutChildren(children, options, className) {
      const colMap = {1: 12, 2: 6, 3: 4, 4: 3, 6: 2, 12: 1};

      const responsiveBuckets = this.props.buckets || [
        {name:'x-small', prefix:'col-xs-'},
        {name:'small', prefix:'col-sm-'},
        {name:'medium', prefix:'col-md-'},
        {name:'large', prefix:'col-lg-'}
      ];

      let cMap = {};
      cMap[responsiveBuckets[0].prefix] = [12];
      for(var b in responsiveBuckets) {
        let bucket = responsiveBuckets[b];
        if (options[bucket.name] && colMap[options[bucket.name]]) {
          cMap[bucket.prefix] = [colMap[options[bucket.name]]];
        }

        if (options[bucket.name + '-sizes']) {
          cMap[bucket.prefix] = options[bucket.name + '-sizes'];
        }
      }

      let wrappedChildren = React.Children.map(children, (child, index) => {
        let classes = className ? [className] : [];
        for (let k in cMap) {
          classes.push(k + cMap[k][index % cMap[k].length]);
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
