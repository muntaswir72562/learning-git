module.exports.routes = {
  '/': { view: 'pages/homepage' },
  'POST /user': 'UserController.create',
  'GET /user': 'UserController.read',
  'PUT /user/:id': 'UserController.update',
  'DELETE /user/:id': 'UserController.delete'
};