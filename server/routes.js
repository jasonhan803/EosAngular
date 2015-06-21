module.exports = routes;

function routes(app){
  app.get('/api/modules', function modules(req, res) {
    res.send(require('./modules.json'));
  })
}
