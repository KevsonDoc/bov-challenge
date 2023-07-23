import JwtStrategy from '../adapters/jwtStrategy.adapter';

class AuthenticationGuardianUseCase {
  authenticationStrategy;

  constructor(authenticationStrategy) {
    this.authenticationStrategy = authenticationStrategy;
  }

  execute(token) {
    return this.authenticationStrategy.verify(token);
  }
}

const jwtAdapter = new JwtStrategy();
const authenticationGuardianUseCase = new AuthenticationGuardianUseCase(jwtAdapter);
export default authenticationGuardianUseCase;
