import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const port = 5000;

// middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(cookieParser());
app.use(cors("*"));

// routes
app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
