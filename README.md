Layout
======

Layout is a responsive helper component that we use in our responsive designs at [Walmart Labs](http://walmartlabs.com).

This screenshot shows a simple multi-column layout using the Bootstrap grid.

![Simple multi-column layout](./images/simple.png)

In this case it's 3 columns wide in `x-small` and 4 columns wide in `small`.

In this next example we show specifying the widths of the individual columns (in 12 column layout values) for both `x-small` and `small`.

![Layout with column sizes](./images/with-sizes.png)

## Running the example

To install and run do:

```
npm install
npm run showcase
```

## Usage

Default column options are based on a 12 column layout.

### Simple Multi-Columns

Using the following `props` allows you to pass in a number of columns (max 12) (`integer`) to display the columns at a consistent width.

Each prop type correlates to a breakpoint:

- `x-small` - `integer` Displays at <= 768px
- `small` - `integer` Displays between 768px and 992px
- `medium` - `integer` Displays between 992px and 1200px
- `large` - `integer` Displays above 1200px

Options:

Number of columns: `1, 2, 3, 4, 6, 12`

### custom column widths at specific breakpoints

Using the following `props` allows you to pass in an array of column **ratios**. This is different than the above option.

- `x-small-sizes` - Displays each child column at defined widths at <= 768px
- `small-sizes` - Displays each child column at defined widths between 768px and 992px
- `medium-sizes` - Displays each child column at defined widths between 992px and 1200px
- `large-sizes` - Displays each child column at defined widths above 1200px

Options:

Array of width of columns: `1, 2, 3, 4, 6, 12`
