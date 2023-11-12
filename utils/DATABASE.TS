import mongoose from "mongoose"

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {

        await mongoose.connect(
            // 1.27
            process.env.MONGODB_URI!,
            {
                dbName: 'share_prompt',

            }
        ).then(res => {
            console.log('database connected')
            isConnected = true;
        }).catch(err => {
            console.log('database error')
        })

    } catch (error) {
        console.log(error);
    }
}