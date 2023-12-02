import app  from "./app/app"
import { mongoUrl, port } from "./config";
import { connectMongoDB } from "./db/dbConnect";



(async () => {
    try {
      await connectMongoDB(mongoUrl);
      app.listen(port, () => {
        console.log(`server is running at ${port}`)
      })
    } catch (error) {
      console.error('Failed to connect to the database:', error);
    }
  })();
