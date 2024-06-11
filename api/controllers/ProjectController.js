module.exports = {
  create: async function (req, res) {
    try {
      const project = await Project.create({
        title: req.body.title,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate
      }).fetch();
      return res.status(201).json(project);
    } catch (err) {
      return res.serverError(err);
    }
  },

  read: async function (req, res) {
    try {
      const projects = await Project.find();
      return res.json(projects);
    } catch (err) {
      return res.serverError(err);
    }
  },

  update: async function (req, res) {
    try {
      const project = await Project.updateOne({id: req.params.id}).set({
        title: req.body.title,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate
      });
      if (project) {
        return res.json(project);
      }
      return res.notFound();
    } catch (err) {
      return res.serverError(err);
    }
  },

  delete: async function (req, res) {
    try {
      const project = await Project.destroyOne({id: req.params.id});
      if (project) {
        return res.status(204).send();
      }
      return res.notFound();
    } catch (err) {
      return res.serverError(err);
    }
  }
};