import * as express from "express";
import { join } from "path";
import { json, urlencoded } from "body-parser";

import { entitiesRouter } from "./routes/entities";

const app: express.Application = express();

// Configuration
app.disable("x-powered-by");
app.use(json());
app.use(urlencoded({ extended: true }));

// Static assets
app.use(express.static(join(__dirname, '../../public')));
app.use('/dist', express.static(join(__dirname, '../../dist')));
app.use('/templates', express.static(join(__dirname, '../../client/templates')));

// API routes
app.use("/api/entities", entitiesRouter);

if (app.get("env") === "development") {
    app.use(express.static(join(__dirname, '../../node_modules')));
    app.use(express.static(join(__dirname, '../../tools')));

    app.use(function(err, req: express.Request, res: express.Response, next: express.NextFunction) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
    let err = new Error("Not Found");
    next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app }
