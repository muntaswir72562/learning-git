module.exports.routes = {
  "/": { view: 'pages/homepage' },
  'POST /user': 'UserController.create',
  'GET /user': 'UserController.read',
  'PUT /user/:id': 'UserController.update',
  'DELETE /user/:id': 'UserController.delete',
  'POST /client': 'ClientController.create',
  'GET /client': 'ClientController.read',
  'PUT /client/:id': 'ClientController.update',
  'DELETE /client/:id': 'ClientController.delete',
  'POST /project': 'ProjectController.create',
  'GET /project': 'ProjectController.read',
  'PUT /project/:id': 'ProjectController.update',
  'DELETE /project/:id': 'ProjectController.delete'
};