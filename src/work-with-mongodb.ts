// Write a script that:
// 1. Connects to MongoDB.
// 2. Creates the 'users' collection.
// 3. Adds new users.
// 4. Finds users with duplicate emails.

// Use Mongoose library
import mongoose from 'mongoose';
type DuplicatedUsers = {
    email: string
}

async function manageUsers(): Promise<DuplicatedUsers[]> {
    try {
        await mongoose.connect('mongodb://localhost:27017/test');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
    return []
}

module.exports = { manageUsers }
