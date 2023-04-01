const express = require('express')
const router =new express.Router()
const Post = require('../models/Post')
const User = require('../models/User')

router.get('/posts/create', async (req, res) => {
    try {
      const user = await User.findByPk(2); // Replace with actual user ID
      console.log(user)
      const post = await Post.create({
        title: 'Trial 2',
        content: 'Lorem ipsum dolor sit amet',
        UserId: user.id
      });
      res.send(post.toJSON());
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  });


module.exports = router;