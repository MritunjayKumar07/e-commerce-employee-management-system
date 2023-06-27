import mongoose from 'mongoose';

const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log(`Database connected successfully...`);
    } catch (error) {
        console.log(`Error while connecting on database...${error}`);
    }
}

export default Connection;