const ProductModel = require('../Models/productModel')

class ProductController {
    async store(req, res) {
        const createdProduct = await ProductModel.create(req.body)
        return res.status(200).json(createdProduct)
    }   

    async index(req, res) {
        const products = await ProductModel.find()
        return res.status(200).json({products})
    }

    async show(req, res) {
        try {
            const { id } = req.params 

        const product = await ProductModel.findById(id)

        if(!product) {
            return res.status(404).json({message: "Product does not exist"})
        }
        return res.status(200).json(product)
        } catch (error) {
            return res.status(404).json({message: "Internal server error"})
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params

            await ProductModel.findByIdAndUpdate(id, req.body)
            return res.status(200).json({message: "Sucess to update Product"}) 
        } catch (error) {
           return res.status(500).json({message: "Failed to update Product"}) 
        }
        

    }

    async destroy(req, res) {
        const { id } = req.params
        const productDeleted = await ProductModel.findByIdAndDelete(id)
        if (!productDeleted) {
            return res.status(404).json({message: "Produto não encontrado"})
        }
        return res.status(200).json({message: "Produto deletado com sucesso"})
    }
}

module.exports = new ProductController