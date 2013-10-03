var notice = document.getElementById('notice')
var since = document.getElementById('since')
var visibility = require('./')
var lastvisit = Date.now()

visibility()
  .on('show', function() {
    since.innerHTML = Math.round((Date.now() - lastvisit) * 10) / 10000
    notice.style.display = 'block'
  })
  .on('hide', function() {
    lastvisit = Date.now()
  })
