const router = require('express').Router();
const userRoutes = require('./userRoutes');
const createRoutes = require('./createRoutes');

router.use('/users', userRoutes);
router.use('/creates', createRoutes);

module.exports = router;
