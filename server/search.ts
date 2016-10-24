const entities = require('../../public/datasets/entities.json');

class Search {
    constructor() {}
    static nameMatches(entity, term) {
        var name = entity.name.toLowerCase(),
            parsedTerm = term.toLowerCase();

        return name.indexOf(parsedTerm) !== -1 && name[0] === parsedTerm[0];
    }
    static term(term: string) {
        var parsedTerm = term ? term.replace(/ /g,'').toLowerCase() : null;

        if (parsedTerm) {
            var response = entities.filter((entity) => {
                return Search.nameMatches(entity, parsedTerm);
            });
            return response;
        }
        return entities;
    }
}
export { Search }
