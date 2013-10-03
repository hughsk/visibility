# visibility [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

A little [browserify](http://browserify.org)-able shim/wrapper for the
[Page Visibility API](http://www.html5rocks.com/en/tutorials/pagevisibility/intro/).

## Usage ##

[![visibility](https://nodei.co/npm/visibility.png?mini=true)](https://nodei.co/npm/visibility)

### `watcher = require('visibility')()` ###

Creates a new `EventEmitter` that fires specific events when the pages's
visibility status has changed.

### `watcher.hidden()` ###

Returns `true` if the browser window is not currently visible. If the browser does not support the Page Visibility API, this method will always return
`false`.

### `watcher.visible()` ###

Returns `true` if the browser window is currently visible. If the browser does not support the Page Visibility API, this method will always return `true`.

### `watcher.on('change', handler(visible))` ###

Called whenever the page's visibility is toggled, passing `visible` as a
boolean.

### `watcher.on('show', handler)` ###

Called only when the page becomes visible again.

### `watcher.on('hide', handler)` ###

Called only when the page is hidden.

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/visibility/blob/master/LICENSE.md) for details.
