const router = require('express').Router();
const userRoutes = require('./userRoutes');
const createRoutes = require('./createRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/creates', createRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
