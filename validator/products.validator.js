import { existeStorePorId } from "../helpers/db.validators"




const stockRequerido = check ("stock")
.exists().withMessage("El stock es obligatorio")
.bail() //bail es para que si no existe
.isInt({ min:0}).withMessage(" un numero entero mayor o igual a 0")

//la tienda debe tener formato de id y ademas existir en la BD
const store = check ("store"
    .isMongoId().withMessage("La tienda debe ser un id de mongo valido")
    .bail()
    .custom(existeStorePorId)

    export {
        productId,
        name,
        price,
        stock,
        stockRequerido,
        store
        
    }
)