var EventEmitter = require('events').EventEmitter
var inherits = require('inherits')

var shimvis = true
var change = null
var hidden = null

module.exports = Visibility

if (typeof document.hidden !== 'undefined') {
  hidden = 'hidden'
  change = 'visibilitychange'
} else
if (typeof document.mozHidden !== 'undefined') {
  hidden = 'mozHidden'
  change = 'mozvisibilitychange'
} else
if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden'
  change = 'webkitvisibilitychange'
} else
if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden'
  change = 'webkitvisibilitychange'
}

inherits(Visibility, EventEmitter)
function Visibility() {
  if (!(this instanceof Visibility)) return new Visibility
  var self = this

  EventEmitter.call(this)
  this.supported = !!hidden

  if (this.supported) {
    document.addEventListener(change, function() {
      var visible = !document[hidden]
      self.emit('change', visible)
      self.emit(visible ? 'show' : 'hide')
    }, false)
  } else {
    document.addEventListener('focusout', function() {
      self.emit('change', false)
      self.emit('hide')
      shimvis = false
    }, false)
    document.addEventListener('focusin', function() {
      self.emit('change', true)
      self.emit('show')
      shimvis = true
    }, false)
  }

  window.addEventListener('unload', function() {
    self.emit('exit')
  }, false)
}

Visibility.prototype.hidden = function() {
  return this.supported ? !!document[hidden] : !shimvis
}
Visibility.prototype.visible = function() {
  return this.supported ? !document[hidden] : shimvis
}
