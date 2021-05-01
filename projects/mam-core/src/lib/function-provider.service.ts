import { ClientFunction } from './client-function';
import { InjectionToken } from '@angular/core';

export const FPSToken = new InjectionToken<FunctionProviderService>('FunctionProviderService');

export interface FunctionProviderService {
  getFunction(identifier: string): ClientFunction;
}
