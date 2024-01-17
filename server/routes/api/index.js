const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const photoRoutes = require('./photo-routes');

router.use('/todo', todoRoutes);
router.use('/user', userRoutes);

module.exports = router;
