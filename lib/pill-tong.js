// import secure proxy server module
const PillTong = require('./pill-tong/index.js');

/**
 * create the PillTong secure proxy server
 * 
 * @param {Object} options configuration options passed to proxy server
 * @param {String} options.create create a new pill-tong service
 * @param {String} options.conf configuration file path
 * @param {Boolean} options.noHello disable hello message
 * 
 * @return {Object} proxy object for 'web' request
 */
function createSecureProxyServer(options) {
  return new PillTong(options);
}

// constructor alias
PillTong.createSecureProxyServer = createSecureProxyServer;
PillTong.createProxyServer = createSecureProxyServer;
PillTong.createServer = createSecureProxyServer;
PillTong.createProxy = createSecureProxyServer;
PillTong.create = createSecureProxyServer;

// export the proxy server
module.exports = PillTong;
