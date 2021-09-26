module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  "pwa": {
    "themeColor": "#3F51B5",
    "name": "DM College Science",
    "msTileColor": "#3F51B5",
    "appleMobileWebAppCapable": "yes",
    "appleMobileWebAppStatusBarStyle": "black",
    "workboxPluginMode": "InjectManifest",
    "workboxOptions": {
      "swSrc": "src/service-worker.js",
      "swDest": "service-worker.js"
    }
  }
}
