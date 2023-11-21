
import express from "express";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";
import "dotenv/config";
import Hello from "./hello.js";


const app = express()
app.use(cors());
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
Hello(app)
Lab5(app)
app.use(cors());
app.listen(process.env.PORT || 4000);

