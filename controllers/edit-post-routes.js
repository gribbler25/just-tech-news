const router = require("express").Router();
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");
const { Post, User, Comment } = require("../models");

router.get("/", withAuth, (req, res) => {



module.exports=router.