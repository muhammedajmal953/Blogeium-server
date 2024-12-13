import { Router } from "express";
import { UserServices } from "../services/userServices";
import { BlogServices } from "../services/blogServices";
import { UserController } from "../controller/userConstroller";
import { BlogController } from "../controller/blogConstroller";
import { userAuth } from "../middlewares/userAuth";

const userRouter = Router()

const userService = new UserServices()
const blogServices = new BlogServices()

const userController = new UserController(userService)
const blogController = new BlogController(blogServices)

userRouter.route('/user')
    .post(userController.createUser.bind(userController))
    .get(userAuth, userController.getUser.bind(userController))

userRouter.post('/login', userController.loginUser.bind(userController))


userRouter.route('/blog')
    .post(userAuth, blogController.createBlog.bind(blogController))
    .get(userAuth, blogController.getBlog.bind(blogController))
    .put(userAuth, blogController.updateBlog.bind(blogController))
    .delete(userAuth, blogController.deleteBlog.bind(blogController))

userRouter.get('/get-own-blogs', userAuth, blogController.getBlogByPostedBy.bind(blogController))

userRouter.get('/get-all-blogs', userAuth, blogController.getAllBlogs.bind(blogController))

export default userRouter

