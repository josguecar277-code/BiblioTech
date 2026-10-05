import { Schema, model } from "mongoose";

const storeSchema = new Schema ({
    name: { type: String, required: true},
    address: {type: String, required: true},
    owner: {type: String, required: true },
},{
    timestamps: true,
    versionKey: false
});

export default model ("Store", storeSchema)