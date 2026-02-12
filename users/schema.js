import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
        type: String,
        enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
        default: "USER"
    },
    watchlist: [
        {
            media_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
            // Add other fields related to the media item if needed
        }
    ]
},
    { collection: "users" });
export default userSchema