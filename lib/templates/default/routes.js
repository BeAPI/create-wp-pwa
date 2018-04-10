const routes = module.exports = require('next-routes')()

routes
  .add('page', '/:slug/')
  .add('category', '/category/:slug/')
  .add('post', '/:category/:slug')