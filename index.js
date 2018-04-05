const opn = require("opn");

/**
 * Opens the browser the first time if there's no compilation errors.
 * @param {Object} options Options object.
 * @param {String} [options.url] Url to open in browser.
 * @constructor
 */
function BrowserSyncPlugin(options) {
    this.url = options.url;
}

BrowserSyncPlugin.prototype.apply = function (compiler) {
    compiler.plugin("done", function (stats) {
        if (!stats.hasErrors()) {
            opn(this.url, {wait: false});
        }
        return;
    }.bind(this));
}

module.exports = BrowserSyncPlugin;