module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/bookkeeping-website/'
    : '/',
  lintOnSave: false
}
