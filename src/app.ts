import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

//ROUTES
import indexRoutes from "./routes/index.routes";

export class App {
    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.cors();
        this.settings();
        this.middelewares();
        this.routes();
    }


    cors() {
        this.app.use(cors());
    }

    settings() {
        this.app.set("port", this.port || process.env.PORT || 3000);
    }

    middelewares() {
        this.app.use(morgan("dev"));

        //solo permitir json
        this.app.use(express.json());
    }

    routes() {
        this.app.use("/", indexRoutes);
    }

    async listen() {
        await this.app.listen(this.app.get("port"));
    }
}