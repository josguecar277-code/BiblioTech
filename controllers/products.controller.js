import Producto from "../models/products.models.js";

export const listProducts = async (req, res , next) => {
    try{
    
        const products = await Producto.find({
            price: 10,
            name: "Producto 1"
        })
        res.status(200).json({
        ok: true,
        products
        })
         
 
    }catch (error) {
        next(error)

    }
}

export const createProduct = async (req,res, next) => {
    try {

        const nuevo = await Producto.create(req.body);          
            console.log(nuevo)

            res.status(201).json ({
                ok:true,
                nuevo
             })
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

   export const getProductById =async (req, res,next) => {
    try {
        const product = await Producto.findById (req.params.id) 
            if (! product) {
                res.status(404).json({
                    ok:false,
                    msg: "producto no encontrado"
                })
            return
            
        }
        res.status(200).json ({
            ok:true,
            product
        })
    }catch (error) {
        next (error)
    }
   }  




   export const updateById = async (req, res , next) =>{
    try {
        const product = await Producto.findByIdAndUpdate (req.params.id, req.body, { new: true});

        if (!product) {
                res.status(404).json ({
                    ok:false,
                    msg: "Producto no encontrado"
                });
            return
    }

    res.status(200).json ({
        ok:true,
        product
    })
   }catch (error){
    next (error);
   }
}


export const deleteProduct = async (req, res, next) => {
    try {
        const product = await Producto.deleteOne (req.params.id)
         if (!product) {
                res.status(404).json ({
                    ok:false,
                    msg: "Producto no encontrado"
                });
            return
    }

    res.status(200).json ({
        ok:true,
        msg: "Producto eliminado correctamente"
    })
   }catch (error){
    next (error);
   }
}
    



export const updateStockProduct = async (req,res, next) => {
    try {
        const product = await Producto.findById (req.params.id);

        if (!product) {
                res.status(404).json ({
                    ok:false,
                    msg: "Producto no encontrado"
                });
            return
    }
    product.stock = req.body.stock;
    await product.save ();


    res.status(200).json ({
        ok:true,
        product
    })
   }catch (error){
    next (error);
   }
}