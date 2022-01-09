const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: !debug ? "https://th-sato.github.io/next-utils-sato-dev/" : "",
};
