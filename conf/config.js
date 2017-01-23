{

  "host": "0.0.0.0",
  "port": 80,

  "keyLength": 10,

  "maxLength": 400000,

  "staticMaxAge": 8640000,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "error",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "random"
  },

  "rateLimits": {
    "categories": {
      "normal": {
        "totalRequests": 5000,
        "every": 6
      }
    }
  },

  "storage": {
    "type": "file",
    "path": "./data"
  },

  "documents": {
    "about": "./about.md"
  }

}
