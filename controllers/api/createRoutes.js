const router = require('express').Router();
const { Create } = require('../../models');
const withAuth = require('../../utils/auth');


//get post
router.get('/creates/:id', async (req, res) => {
  try {
    const createData = await Create.findByPk(req.params.id, {
      where: [
        {
          model: User,
          attributes: ["name"]
        },
      ],
    });

    const create = createData.get({ plain: true });

    res.render('create', {
      //grabs all the properties that are in create
      ...create,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//create post 
router.post('/', withAuth, async (req, res) => {
  try {
    const newCreate = await Create.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCreate);
  } catch (err) {
    res.status(400).json(err);
  }
});

//update post 
router.put('/creates/:id', withAuth, async (req, res) => {
  try {
    const updateCreate = await Create.create({
      where: {
        id: req.params.id,
      }
    });

    res.status(200).json(updateCreate);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete post 
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const CreateData = await Create.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!CreateData) {
      res.status(404).json({ message: 'No blog post found with this id!' });
      return;
    }

    res.status(200).json(CreateData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
