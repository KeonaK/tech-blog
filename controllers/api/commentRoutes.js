const router = require('express').Router();
const { Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    
    const commentData = await Comment.findAll();

    
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    
    res.render('comment', { 
      comments, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.redirect('/')
    } catch (err) {
      res.status(400).json(err);
    }
  });


  module.exports = router;