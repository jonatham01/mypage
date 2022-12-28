const PROXY_CONFIG = [
      {
        context: [
            "/teams"
        ],
        "target": "http://localhost:2025",
          "secure": true,
          "logLevel": "debug",
          "changeOrigin": true
    },
    {
        context: [
            "/players"
        ],
        "target": "http://localhost:2025",
          "secure": true,
          "logLevel": "debug",
          "changeOrigin": true
   }
      
]

module.exports = PROXY_CONFIG;