export default async (req, res) => {
  try {
    const { default: serverHandler } = await import('../dist/server/index.js')
    
    const url = new URL(req.url, `http://${req.headers.host || 'localhost:3000'}`)
    
    const request = new Request(url, {
      method: req.method,
      headers: new Headers(req.headers),
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req.body,
    })
    
    const response = await serverHandler.fetch(request, {}, {})
    
    res.statusCode = response.status
    
    response.headers.forEach((value, key) => {
      res.setHeader(key, value)
    })
    
    const body = await response.text()
    res.end(body)
  } catch (error) {
    console.error('Server error:', error)
    res.statusCode = 500
    res.setHeader('content-type', 'text/plain')
    res.end('Internal Server Error')
  }
}
