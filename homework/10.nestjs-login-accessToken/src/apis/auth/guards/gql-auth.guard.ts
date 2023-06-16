import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

export class gqlAuthAccessToken extends AuthGuard('loginAccess') {
  getRequest(context: ExecutionContext) {
    const gqlContext = GqlExecutionContext.create(context);
    const result = gqlContext.getContext().req;
    return result;
  }
}
