
import express from "express"
import { dbConnection } from "./database/config.js";

// import { v4 as uuidv4 } from 'uuid';
import 'dotenv/config';


import productRouter from "./routes/products.router.js"
import storeRouter from "./routes/store.router.js"

class Server {
    app
    port
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.middlewares()
        this.routes()
        this.conectionDB()
    }

    middlewares() {
        this.app.use(express.json())
        console.log(process.loadEnvFile.PORT)
    }


    routes() {

        // this.app.get("", (req, res) => {
        //     res.send("Hola Mundo")
        // })
        
        this.app.use("/api/products", productRouter)
         this.app.use("/api/store", storeRouter)
    }

         
    async conectionDB (){
        await dbConnection ()
    }
    
    
   
    listen() {
        this.app.listen(this.port, () => {
            console.log("Listen port " + this.port)
        })
    }
}

new Server().listen()
