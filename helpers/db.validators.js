import  Store from "../models/store.models.js";

// Validacion que necesita la BD: se engancha con .custom(existeStorePorId)

export const existeStorePorId = async (id) => {
    const store = await Store.findById (id)
    if (!store) {
        throw new Error ('No existe una tienda con el id ${id}')
    }
}