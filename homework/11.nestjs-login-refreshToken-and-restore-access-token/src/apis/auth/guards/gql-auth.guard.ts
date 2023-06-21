import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

// export class gqlAuthAccessToken extends AuthGuard('loginAccess') {
//   getRequest(context: ExecutionContext) {
//     const gqlContext = GqlExecutionContext.create(context);
//     const result = gqlContext.getContext().req;
//     return result;
//   }
// }
// 아래 코드에 공통적으로 authGuard를 사용할 수 있도록 리팩토링 진행

export const gqlAuthGuard = (name) => {
  return class GqlAuthGaurd extends AuthGuard(name) {
    getRequest(context: ExecutionContext) {
      const gqlAuthGuard = GqlExecutionContext.create(context);
      const result = gqlAuthGuard.getContext().req;
      return result;
    }
  };
};
