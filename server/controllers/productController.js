const Product = require('../models/product');
const Tag = require('../models/tags');

const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const createTag = async (req, res) => {
    try {
        const tag = new Tag(req.body);
        const savedTag = await tag.save();
        res.status(201).json(savedTag);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/*
    example of tag query: /products?tags=tag1,tag2
*/
const getProducts = async (req, res) => {
    try {
        const { tags } = req.query;
        const tagIds = tags ? tags.split(',') : [];
        if (tagIds.length === 0) {
            const products = await Product.find();
            return res.status(200).json(products);
        }
        const foundProducts = await Product.find({ tags: { $in: tagIds } }).lean();
        res.status(200).json(foundProducts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    };
};

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.productId,
            req.body,
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createProduct,
    createTag,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};