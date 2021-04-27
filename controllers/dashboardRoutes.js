const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Create } = require('../../models');


router.get('/', withAuth, async (req, res) => {
    try {
      
      const createData = await Create.findAll({
        where: [
          {
            user_id: req.session.user_id
          },
        ],
      });
  
      // Serialize data so the template can read it
      const creates = createData.map((create) => create.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        creates, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
