egs (egs grid system)
=====================
A lightweight responsive grid system under 2kb

## installation
1.  Put egs.min.css anywhere in your project directory (i.e. /css/egs.min.css)
2.  Add the following to your html document's head

`<link rel="stylesheet" type="text/css" href="css/egs.min.css" />`

## Usage
egs uses a 12 column grid. The width of each column is determined by the width of the browser window. At 1200px wide each column is 80px wide. At 960px wide each column is 60px wide. The format for any of the 12 columns is `col-` followed by the number of columns (e.g. `col-4` or `col-10`).

There are also percentage based columns. They are `col-33`, `col-66`, `col-25`, `col-50` and `col-75`.

On screens less than 960px columns 1 through 3 behave like `col-25`, Columns 4 to 6 like `col-50`, Columns 7 to 9 like `col-75` and Columns 10 to 12 are full width. If you want for a column to be full width on mobile instead of it's default, the add the class `mobile-full`. To hide on mobile you can use `mobile-hide`.

You must wrap any columns in a wrapper element with the `egs` class.

## Example

    <div class="egs">
        <div class="col-6"></div>
        <div class="col-6"></div>
    </div>
    <div class="egs">
    	<div class="col-33"></div>
    	<div class="col-33"></div>
    	<div class="col-33"></div>
    </div>