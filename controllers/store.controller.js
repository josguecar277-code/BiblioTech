import Store from "../models/store.models.js";

export const listStores = async (req, res , next) => {
    try{
    
        const store = await Store.find()

        res.status(200).json({
        ok: true,
        store
        })
         
 
    }catch (error) {    
        next(error)
    }
}

export const createStores = async (req,res, next) => {
    try {

        const nuevo = await Store.create(req.body);          
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

   export const getStoresById =async (req, res,next) => {
    try {
        const store = await Store.findById (req.params.id) 
            if (!store) {
                res.status(404).json({
                    ok:false,
                    msg: "Store no encontrado"
                })
            return
            
        }
        res.status(200).json ({
            ok:true,
            store
        })
    }catch (error) {
        next (error)
    }
   }  




   export const updateStoreById = async (req, res , next) =>{
    try {
        const store = await Store.findByIdAndUpdate (req.params.id, req.body, { new: true});

        if (!store) {
                res.status(404).json ({
                    ok:false,   
                    msg: "Store no encontrado"
                });
            return
    }

    res.status(200).json ({
        ok:true,
        store
    })
   }catch (error){
    next (error);
   }
}


export const deleteStores = async (req, res, next) => {
    try {
        const store = await Store.findByIdAndDelete (req.params.id)
         if (!store) {
                res.status(404).json ({
                    ok:false,
                    msg: "Store no encontrado"
                });
            return
    }

    res.status(200).json ({
        ok:true,
        msg: "Store eliminado correctamente",
        Store
    })
   }catch (error){
    next (error);
   }
}
    



// export const updateStock = async (req,res, next) => {
//     try {
//         const product = await Producto.findById (req.params.id);

//         if (!product) {
//                 res.status(404).json ({
//                     ok:false,
//                     msg: "Producto no encontrado"
//                 });
//             return
//     }
//     product.stock = req.body.stock;
//     await product.save ();


//     res.status(200).json ({
//         ok:true,
//         product
//     });
//    }catch (error){
//     next (error);
//    }
// }