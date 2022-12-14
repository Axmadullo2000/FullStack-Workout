import mongoose from "mongoose";

export const connectToDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true
		})
		console.log(`MongoDB connected to the port ${conn.connection.host}`.cyan.underline)
	} catch (error) {
		console.log(`Error: ${error.message}`.red.underline.bold)
		process.exit(1)
	}
}
