"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gqlAuthGuard = void 0;
const graphql_1 = require("@nestjs/graphql");
const passport_1 = require("@nestjs/passport");
const gqlAuthGuard = (name) => {
    return class GqlAuthGuard extends (0, passport_1.AuthGuard)(name) {
        getRequest(context) {
            const gqlContext = graphql_1.GqlExecutionContext.create(context);
            return gqlContext.getContext().req;
        }
    };
};
exports.gqlAuthGuard = gqlAuthGuard;
//# sourceMappingURL=gql-auth.guard.js.map