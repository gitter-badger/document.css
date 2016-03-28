basic.css
=========
Basic styling for simple web pages

[![License][license-img]][license-url] [![Version][version-img]][version-url] [![Open Issues][issues-img]][issues-url] [![Dependency Status][gemnasium-img]][gemnasium-url]

## installation

**NPM + Gulp (or your build tool of choice)** *(Recommended)*

1. Move into your project directory (or wherever you want to install `basic.css`)
2. Run `npm install --save git://github.com/iron16/basic.css.git`
3. Add a task to your project's gulpfile that copies `basic.css` to your project's css folder
  * `gulp.task('copy-basic-css', function() { return gulp.src('./node_modules/basic.css/basic.css').pipe(gulp.dest('./styles/')) })`
4. Run the task
  * `gulp copy-basic-css`
5. There will now be a copy of `basic.css` located in the `styles` folder

**NPM**

1. Move into your project directory (or wherever you want to install basic.css)
2. Run `npm install --save git://github.com/iron16/basic.css.git`
3. Add `<link rel="stylesheet" type="text/css" href="node_modules/basic.css/basic.css" />` to the `<head>` of your web page

**Bower**

1. Move into your project directory (or wherever you want to install basic.css)
2. Run `bower install iron16/basic.css`
3. Add `<link rel="stylesheet" type="text/css" href="bower_components/basic.css/basic.css" />` to the `<head>` of your web page

**Manually**

1. Go to this URL
  * `https://raw.githubusercontent.com/iron16/basic.css/master/basic.css`
2. Press `CTRL+S` on your keyboard or right click anywhere on the page and click on `Save As`
3. Choose where on your hard drive want to basic.css to be saved, then click **Okay** (or **Save**, whatever it is on your computer)
4. Add `<link rel="stylesheet" type="text/css" href="basic.css" />` to the `<head>` of your web page
  * Be sure to change `href="basic.css"` to point to where `basic.css` is (e.g. `./styles/basic.css`)

## Usage
Once installed, everything works without any configuration needed.

**Incomplete - Coming Soon**

[license-url]: https://github.com/iron16/basic.css/blob/master/LICENSE
[license-img]: http://img.shields.io/badge/License-MIT-blue.svg

[version-url]: https://github.com/iron16/basic.css/releases
[version-img]: http://img.shields.io/badge/Version-1.0.0-blue.svg

[issues-url]: https://github.com/iron16/basic.css/issues
[issues-img]: http://img.shields.io/github/issues/iron16/basic.css.svg

[gemnasium-url]: https://gemnasium.com/iron16/basic.css
[gemnasium-img]: http://img.shields.io/gemnasium/iron16/basic.css.svg
