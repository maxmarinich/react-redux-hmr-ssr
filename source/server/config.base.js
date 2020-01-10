let port = process.env.PROXY_SERVER_PORT || 3001

if (process.env.NODE_ENV === 'production') {
  port = process.env.PORT || 4000
}

export { port }
