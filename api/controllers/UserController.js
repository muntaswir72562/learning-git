module.exports = {
  create: async function (req, res) {
    try {
      const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        address: req.body.address
      }).fetch();
      return res.status(201).json(user);
    } catch (err) {
      return res.serverError(err);
    }
  },

  read: async function (req, res) {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (err) {
      return res.serverError(err);
    }
  },

  update: async function (req, res) {
    try {
      const user = await User.updateOne({id: req.params.id}).set({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        address: req.body.address
      });
      if (user) {
        return res.json(user);
      }
      return res.notFound();
    } catch (err) {
      return res.serverError(err);
    }
  },

  delete: async function (req, res) {
    try {
      const user = await User.destroyOne({id: req.params.id});
      if (user) {
        return res.status(204).send();
      }
      return res.notFound();
    } catch (err) {
      return res.serverError(err);
    }
  }
};