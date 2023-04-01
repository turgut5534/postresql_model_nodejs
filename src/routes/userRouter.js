const express = require('express')
const router =new express.Router()
const User = require('../models/User')
const Post = require('../models/Post')

router.get('/', async(req,res) => {
    
    const users = await User.findAll()
    res.send(users)
})

router.get('/users/posts/:id', async(req,res) => {
    
    const user = await User.findByPk(req.params.id, {
        include: Post
    })
    // const posts = await user.getPosts()
    // res.send(posts)

    res.render('index', {
        user: user
    })
})

router.get('/users/create', async(req,res) => {
    
    const newUser = await User.create({
        firstName: 'Turgut',
        lastName: 'Salgın'
    });
    
    res.send(newUser)
})

module.exports = router;