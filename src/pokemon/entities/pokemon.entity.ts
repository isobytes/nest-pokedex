import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document {

    // id: string // Mongo lo da

    @Prop({
        unique: true,
        index: true,
    })
    name: String;

    @Prop({
        unique: true,
        index: true,
    })
    no: number;


}


export const PokemonSchema = SchemaFactory.createForClass(Pokemon);