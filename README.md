# Serum
> IMD taskrunner.

This task is designed for gulp 3.

## Installation

First, install Serum as a development dependecy:

```shell
npm install --save-dev innovative-media/Serum
```

Then, add it to your `gulpfile.js`:

```javascript
var gulp = require('gulp'),
    serum = require('serum');
```

## Usage

### Innovative Core Installation

Serum automates the installation process of Innovative Core.

```shell
gulp core-install
```

### Serum methods

##### doScss
doScss([src], [paths], 'dest')

Compiles SCSS from source array globs, including imports from the import paths array, and outputs to a destination.

##### doJS
doJS([src], 'name', 'dest')

Concatenates, minifies, renames, sourcemaps javascript from source array globs and outputs to a destination.

##### doImages
doImages([src], 'dest'[, {options}])

Minifies images from the source array globs according to (elective) options and outputs to a destination.

See [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) for available options.

##### doPixrem
doPixrem([src], 'dest'[, {options}])

Creates a rem-to-px fallback stylesheet for legacy browsers. Options may be passed for renaming. See [gulp-rename](https://github.com/hparra/gulp-rename) for options.

## Changelog

#####0.0.1
- initial release