# browser-sync-plugin

Automaticaly open browser when webpack finish compiling.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

```
npm install --save @fishingbooker/browser-sync-plugin
```

```
const BrowserSyncPlugin = require("@fishingbooker/browser-sync-plugin");

const url = "www.google.com"; //Enter your developement url
const browserSyncPlugin = new BrowserSyncPlugin({url});
...
plugins: [browserSyncPlugin]
```


Whenever webpack finish compiling the browser will open given url.
## Built With

* [Webpack 4.5.0](https://webpack.js.org/configuration/) - Webpack, build tool

## Authors

* **Valentin Hisari** - *Initial work* - [ninosaurus](https://github.com/ninosaurus)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details