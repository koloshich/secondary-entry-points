import { ClientFunction } from './client-function';

export interface FunctionProviderModule {
  getFunction(identifier: string): ClientFunction;
}
