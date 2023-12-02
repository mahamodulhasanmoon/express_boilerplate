import app from './app/app';
import { mongoUrl, port } from './config';
import { connectMongoDB } from './db/dbConnect';

(async () => {
  try {
    if (mongoUrl) {
      await connectMongoDB(mongoUrl);
      app.listen(port, () => {
        console.log(`server is running at ${port}`);
      });
    } else {
      console.error('MongoDB URL is not defined.');
    }
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
})();
