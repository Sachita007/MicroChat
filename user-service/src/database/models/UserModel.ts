import mongoose, { Schema, Document } from "mongoose";
import validator from "validator";


export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}


const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: (value: string) => validator.isEmail(value),
            message: 'Please provide a valid email',
        },
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 8,
    },

}, {
    timestamps: true,
})

const User = mongoose.model<IUser>('User', UserSchema);
export default User;