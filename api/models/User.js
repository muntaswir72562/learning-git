/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
  attributes: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    dateOfBirth: {
      type: 'string',
      required: true
    },
    address: {
      type: 'string',
      required: true
    }
  }
};