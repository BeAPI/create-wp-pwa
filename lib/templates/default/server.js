require('newrelic')
const express = require('express')
const compression = require('compression')
const next = require('next')
const { join } = require('path')
const { parse } = require('url')

// Exit proccess if there is not API URL mention as env var
if (!process.env.API_URL) {
  throw 'Missing API_URL env. variable'
  process.exit(1)
}

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server.use(compression())

    server.get('/page/:slug', (req, res) => {
      const actualPage = '/page'
      const queryParams = { slug: req.params.slug }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/category/:slug', (req, res) => {
      const actualPage = '/category'
      const queryParams = { slug: req.params.slug }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/post/:slug', (req, res) => {
      const actualPage = '/post'
      const queryParams = { slug: req.params.slug }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })