import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const createCategoryController = async (req, res) => {
  try {
    const { name, slug, description } = req.fields;

    switch (true) {
      case !name:
        return res.status(500).send({ error: "name is Required" });
      case !slug:
        return res.status(500).send({ error: "slug is Required" });
      case !description:
        return res.status(500).send({ error: "description is Required" });
    }

    const category = new categoryModel({
      ...req.fields,
      slug: slugify(name),
    });

    await category.save();
    res.status(201).send({
      success: true,
      message: "category Created Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in crearing category",
    });
  }
};
