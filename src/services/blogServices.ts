import { IBlog } from "../Interfaces/IBlog";
import { Blog } from "../models/blogModel";
import mongoose from "mongoose";


export class BlogServices {
    constructor() { }

    async createBlog(data: IBlog) {
        try {
            const newBlog = new Blog(data)
            await newBlog.save()

            return {
                success: true,
                message: 'Blog created Success fully',
                data: newBlog
            }
        } catch (error) {
            console.log("Error from BlogService.createBlog", error);
            return {
                message: "something went wrong",
            };
        }
    }

    async updateBlog(id: string, updations: Partial<IBlog>) {
        try {
            const updatedBlog = await Blog.findByIdAndUpdate(id, { $set: updations })
            if (!updatedBlog) {
                return {
                    message: 'Bad Request'
                }
            }
            return {
                success: true,
                message: 'Updated Success fully',
                data: updatedBlog
            }
        } catch (error) {
            console.log("Error from BlogService.updateBlog", error);
            return {
                message: "something went wrong",
            };
        }
    }

    async deleteBlog(id: string) {
        try {
            await Blog.findByIdAndDelete(id)
            return {
                success: true,
                message: 'Deleted Succefully'
            }
        } catch (error) {
            console.log("Error from BlogService.DeleteBlog", error);
            return {
                message: "something went wrong",
            };
        }
    }

    async getBlog(id: string) {
        try {
            const blog = await Blog.findById(id)

            return {
                success: true,
                message: 'Blog fetched Seccussfully',
                data: blog
            }
        } catch (error) {
            console.log("Error from BlogService.getBlog", error);
            return {
                message: "something went wrong",
            };
        }
    }
    async getAllBlogs(id: string = '') {
        try {

            const blogs = await Blog.find()


            return {
                success: true,
                message: 'Blog fetched Seccussfully',
                data: blogs
            }
        } catch (error) {
            console.log("Error from BlogService.getAllBlog", error);
            return {
                message: "something went wrong",
            };
        }
    }

    async getOwnBlogs(id: string) {
        try {

            const blogs = await Blog.find({ postedBy: new mongoose.Types.ObjectId(id) })


            return {
                success: true,
                message: 'Blog fetched Seccussfully',
                data: blogs
            }
        } catch (error) {
            console.log("Error from BlogService.getAllBlog", error);
            return {
                message: "something went wrong",
            };
        }
    }

}