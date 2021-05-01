import { ClientFunction, FunctionProviderService } from 'mam-core';
import { ApertureFunction } from './aperture-function';

export class ApertureFunctions implements FunctionProviderService {
  getFunction(identifier: string): ClientFunction {
    return new ApertureFunction();
  }
}
