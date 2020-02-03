const express = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const {
  validationRule,
  validationRegisterRule,
  validate
} = require('../../middleware/checkValidator');
const auth = require('../../middleware/auth');

const router = express.Router();

//POST api/auth
router.post('/login', validationRule(), validate, async (req, res) => {
  const { email, password } = req.body;
  console.log('req.body', req.body);

  try {
    //user deja inscrit
    let user = await User.findOne({ email });
    console.log('user', user);
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }
    const payload = {
      user: {
        id: user.id
      }
    };
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 40000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    // si il ya un erreur
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// @route   POST api/user
// @desc    Register route
// @access  Public
router.post(
  '/register',
  validationRegisterRule(),
  validate,
  async (req, res) => {
    const { name, email, password } = req.body;
    try {
      // check if the user exists
      let user = await User.findOne({ email });
      if (user)
        return res
          .status(400)
          .json({ errors: [{ msg: 'user already exists' }] });

      user = new User({
        name,
        email,
        password
      });
      //   encrypting the password

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      // toke access after registration
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

// Get api/auth
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
