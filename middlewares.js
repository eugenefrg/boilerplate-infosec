const helmet = require('helmet')
const maxHstsAge = 90 * 24 * 60 * 60 // 90 days in seconds
module.exports = [
  helmet({
    frameguard: {         // configure
      action: 'deny'
    },
    contentSecurityPolicy: {    // enable and configure
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ['style.com'],
      }
    },
    dnsPrefetchControl: false     // disable
  })
]