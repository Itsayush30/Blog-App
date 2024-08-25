import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

userSchema.pre("save", function (next) {
    const user = this;
    if (user.isModified("password") || user.isNew) {
        const SALT = bcrypt.genSaltSync(9);
        const encryptedPassword = bcrypt.hashSync(user.password, SALT);
        user.password = encryptedPassword;
    }
    next();
});

const User = mongoose.model("User", userSchema); //creating model
export default User;
