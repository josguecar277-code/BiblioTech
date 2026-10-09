import { check } from "express-validator";


const name = check("name", "El nombre es obligatorio")
.trim()
.not().isEmpty()
.isString()
.length({min: 3, max : 50}).withMessage("El nombre debe tener entre 3 y 50 caracteres")
.custom ((value) => {
    if (value.toLowerCase().includes("store")) {
        throw new Error("El nombre no puede contener la palabra 'store'");
    }
  return true;
});

const  address = check("addres", "La direccion es obligatorioa")
.trim()
.not().isEmpty()
.isString()
.length({min: 3, max : 12}).withMessage("La direccion debe tener entre 3 y 12 caracteres")
.custom ((value) => {
    if (value.toLowerCase().includes("addres")) {
        throw new Error("La direccion no puede contener la palabra 'addres '");
    }
  return true;
});

const  owner = check("owner", "El Dueño es obligatorio")
.trim()
.not().isEmpty()
.isString()
.length({min: 3, max : 60}).withMessage("El nombre del dueño debe tener entre 3 y 60 caracteres")
.custom ((value) => {
    if (value.toLowerCase().includes("owner")) {
        throw new Error("El nombre del dueño no puede contener la palabra 'owner'");
    }
  return true;
});

const storeId = check("id","El id no es valido")
    .not().isEmpty()
    .isMongoOd().withMessage("El id debe ser un id de mongo valido")


export {
    name,
    address,
    owner
}