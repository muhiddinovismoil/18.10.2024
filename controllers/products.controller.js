import { createData, deleteProduct, readData } from "../service/index.js";
export const createProducst = async (req, res, next) => {
    try {
        const body = req.body;
        const create = await createData(body);
        res.status(200).send(create);
    } catch (error) {
        next(error);
    }
};

export const getAllProducsts = async (req, res, next) => {
    try {
        const body = req.body;
        const read = await readData(body);
        res.status(200).send(read);
    } catch (error) {
        next(error);
    }
};

export const getByIdProducst = async (req, res, next) => {
    try {
        const body = req.body;
        const id = +req.params.id;
        const read = await readData(body);
        const idElement = read.find((item) => item.id === +id);
        if (!idElement) {
            return res.status(404).send("Product not found");
        }
        res.status(200).send(idElement);
    } catch (error) {
        next(error);
    }
};

export const updateByIdProducst = async (req, res, next) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const read = readData(body);
        const check = false;
        for (let i = 0; i < read.length; i++) {
            if (read[i].id === +id) {
                read[i] = req.body;
                read[i].id = +id;
                check = true;
                break;
            }
        }
        if (check) {
            res.status(200).send(
                "Your Products information successfully updated"
            );
        } else {
            return res.status(400).send("Updating products failed");
        }
    } catch (error) {
        next(error);
    }
};

export const deleteByIdProducst = async (req, res, next) => {
    try {
        const id = +req.params.id;
        const data = await deleteProduct(id);
        res.send(data);
    } catch (error) {
        next(error);
    }
};
