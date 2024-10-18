import path from "path";
import { readProductsDB, writeProductsDB } from "./db.js";
const dataPath = path.join(process.cwd(), "database", "products.json");
export const createData = async (products) => {
    const read = (await readProductsDB(dataPath)) || [];
    read.push(products);
    writeProductsDB(dataPath, read);
    return products;
};
export const readData = async (products) => {
    const read = (await readProductsDB(dataPath)) || [];
    return read;
};
export const deleteProduct = async (id) => {
    const debts = await readProductsDB(dataPath);
    const result = debts.filter((item) => item.id !== id);
    writeProductsDB(dataPath, result);
    return result;
};
