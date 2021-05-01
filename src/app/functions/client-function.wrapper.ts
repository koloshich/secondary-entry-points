import { ClientFunction, FunctionProviderModule } from 'mam-core';
import { Observable } from 'rxjs';
import { Injector, NgModuleFactory } from '@angular/core';
import { fromPromise } from 'rxjs/internal-compatibility';
import { switchMap } from 'rxjs/operators';

const FUNCTIONS = {
  Aperture: () => import('mam-plugin-aperture/functions').then(m => m.ApertureFunctionsModule),
};

export class ClientFunctionWrapper extends ClientFunction {

  private loadedFunction: ClientFunction;

  // tslint:disable-next-line:variable-name
  private _label: string;

  get label(): string {
    return this.loadedFunction ? this.loadedFunction.label : this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  constructor(private identifier: string, private injector: Injector) {
    super();
  }

  private loadModule(): Promise<FunctionProviderModule> {
    const importFn = FUNCTIONS[this.identifier];
    if (importFn) {
      return importFn().then((moduleFactory: NgModuleFactory<any>) => {
        return moduleFactory.create(this.injector);
      });
    }
    return Promise.reject('Not found module');
  }

  private getFunction(): Promise<ClientFunction> {
    if (!this.loadedFunction) {
      return this.loadModule()
        .then(module => module.getFunction(this.identifier))
        .then(func => this.loadedFunction = func);
    }
    return Promise.resolve(this.loadedFunction);
  }

  checkAvailability(): Observable<boolean> {
    return fromPromise(this.getFunction()).pipe(
      switchMap(func => func.checkAvailability())
    );
  }

  execute(): Observable<void> {
    return fromPromise(this.getFunction()).pipe(
      switchMap(func => func.execute())
    );
  }
}
