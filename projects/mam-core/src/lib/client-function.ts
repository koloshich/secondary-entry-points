import { Observable, of } from 'rxjs';

export class ClientFunction {

  label: string;

  checkAvailability(): Observable<boolean> {
    return of(true);
  }

  execute(): Observable<void> {
    return of(void 0);
  }
}
