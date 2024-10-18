import express from "express";
import { validationProductMidd } from "../middlewares/index.js";
import {
    createProducst,
    deleteByIdProducst,
    getAllProducsts,
    getByIdProducst,
    updateByIdProducst,
} from "../controllers/index.js";
export const productsRouter = express.Router();

//GET ALL
productsRouter.get("/", getAllProducsts);

//GET BY ID
productsRouter.get("/:id", getByIdProducst);

//CREATE
productsRouter.post("/", validationProductMidd, createProducst);

//UPDATE BY ID
productsRouter.put("/:id", updateByIdProducst);

//DELETE BY ID
productsRouter.delete("/:id", deleteByIdProducst);

// export const productsRouter =
