import mongoose from "mongoose";
import fs from "fs";
import Product from "../models/Product.js";
import config from "../config/config.js";

const products = JSON.parse(
  fs.readFileSync("./src/data/products.json", "utf-8")
);

const merchantId = new mongoose.Types.ObjectId(
  "6a89dd8a9ef66c70f3b87424"
);

const uniqueProducts = [
  ...new Map(products.map((product) => [product.id, product])).values(),
];

const productsToInsert = uniqueProducts.map(({ id, ...product }) => ({
  ...product,
  name: product.name.trim().slice(0, 50),
  createdBy: merchantId,
}));

await mongoose.connect(config.mongodbUrl);

await Product.deleteMany({});

await Product.insertMany(productsToInsert);

console.log(`Imported ${productsToInsert.length} products.`);

await mongoose.disconnect();