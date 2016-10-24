import { Router, Request, Response, NextFunction } from "express";
import { Search } from "../search";

const entitiesRouter: Router = Router();

entitiesRouter.get("/", function (request: Request, response: Response, next: NextFunction) {
    var query = request.query,
        from = Number(query.from) || 0,
        term = query.term,
        pageSize = 15,
        results = Search.term(term),
        resultsTruncated = results.slice(from).slice(0, pageSize);

    response.json({
        meta: {
            from: from,
            left: (results.length - (from + pageSize) > -1 ? results.length - (from + pageSize) : 0),
            pageSize: pageSize
        },
        results: resultsTruncated
    });
});

export { entitiesRouter }
