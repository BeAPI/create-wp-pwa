import NextHead from 'next/head'
import { string } from 'prop-types'
import { config } from '../config'

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <title>{props.title || config.meta.defaultTitle}</title>
    <meta name="description" content={props.description || config.meta.defaultDescription} />
    {/* Favicons */}
    <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/icon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/icon-16x16.png" />
    <link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#f1e25b" />
    <link rel="manifest" href="/static/manifest.json" />
    {/* OpenGraph meta tags */}
    <meta property="og:locale" content={props.locale || config.meta.defaultLocale} />
    <meta property="og:url" content={props.url || config.meta.defaultUrl} />
    <meta property="og:title" content={props.title || config.meta.defaultTitle} />
    <meta property="og:site_name" content={props.sitename || config.meta.defaultSitename} />
    <meta property="og:description" content={props.description || config.meta.defaultDescription} />
    <meta property="og:image" content={props.ogImage || config.meta.defaultImage} />
    {/* Twitter meta tags */}
    <meta name="twitter:site" content={props.url || config.meta.defaultUrl} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || config.meta.defaultImage} />
    <link
      rel='stylesheet'
      href='/_next/static/style.css'
    />
  </NextHead>
)

Head.propTypes = {
  title: string,
  sitename: string,
  description: string,
  url: string,
  ogImage: string,
  locale: string
}

export default Head
