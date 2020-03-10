const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/user/:id')
  .get(controller.getUser)
  .put(controller.updateUser)
  .delete(controller.delUser);

router
  .route('/user')
  .get(controller.getAll)
  .post(controller.newUser);

router
  .route('/signin')
  .post(controller.signInUser);

module.exports = router;