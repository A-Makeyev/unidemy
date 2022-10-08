import mongoose from 'mongoose'

const { Schema } = mongoose
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 16
    },
    avatar: {
        type: String,
        default: '/avatar.png',
    },
    role: {
        type: [String],
        default: ['Subscriber'],
        enum: ['Subscriber', 'Instructor', 'Admin']
    },
    stripe_account_id: '',
    stripe_seller: {},
    stripe_session: {}
}, { timestamps: true })

export default mongoose.model('User', userSchema)
