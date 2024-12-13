import { Request, Response } from "express";
import { BlogServices } from "../services/blogServices";

export class BlogController {
  constructor(private _arcticleService: BlogServices) { }

  async createBlog(req: Request, res: Response): Promise<any> {
    try {
      const formData = req.body;
      console.log(req.body);

      if (!formData) {
        return res.status(400).json({ message: "Bad request" });
      }

      formData.postedBy = req.userId

      const result = await this._arcticleService.createBlog(formData);

      if (!result.success) {
        return res.status(401).json({ message: "Bad Gateway" });
      }

      return res.status(200).json(result);
    } catch (error) {
      console.log("Error from BlogController.createBlog", error);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }

  async updateBlog(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.query;
      const formData = req.body;

      console.log('userId from the edit content', req.userId);

      if (!id || !formData) {
        return res.status(400).json({ message: "Bad Request" });
      }

      const result = await this._arcticleService.updateBlog(
        id as string,
        formData
      );

      if (!result.success) {
        return res.status(401).json({ message: "Bad Gateway" });
      }

      return res.status(200).json(result);
    } catch (error) {
      console.log("Error from BlogController.updateBlog", error);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }

  async getBlog(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.query;


      if (!id) {
        return res.status(400).json({ message: "Invalid or missing 'id' parameter" });
      }
      const result = await this._arcticleService.getBlog(id as string)

      if (!result.success) {
        return res.status(404).json({ message: "Blog not found" });
      }

      return res.status(200).json(result);

    } catch (error) {
      console.log("Error from BlogController.getBlog", error);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }

  async getAllBlogs(req: Request, res: Response): Promise<any> {
    try {
      const result = await this._arcticleService.getAllBlogs()

      if (!result.success) {
        return res.status(404).json({ message: "Blogs not found" });
      }

      return res.status(200).json(result);

    } catch (error) {
      console.log("Error from BlogController.getAllBlogs", error);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }

  async deleteBlog(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ message: "Invalid or missing 'id' parameter" });
      }
      const result = await this._arcticleService.deleteBlog(id as string)

      if (!result?.success) {
        return res.status(404).json({ message: "Blog not found" });
      }

      return res.status(200).json(result);

    } catch (error) {
      console.log("Error from BlogController.getBlog", error);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }

  async getBlogByPostedBy(req: Request, res: Response): Promise<any> {
    try {
      const result = await this._arcticleService.getOwnBlogs(req.userId)

      if (!result.success) {
        return res.status(404).json({ message: "Blogs not found" });
      }

      return res.status(200).json(result);

    } catch (error) {
      console.log("Error from BlogController.getAllBlogs", error);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
}
