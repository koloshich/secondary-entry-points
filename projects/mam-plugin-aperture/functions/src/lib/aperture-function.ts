import { ClientFunction } from 'mam-core';
import { Observable, of, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

export class ApertureFunction extends ClientFunction {

  label = 'Aperture';

  checkAvailability(): Observable<boolean> {
    return timer(1000).pipe(
      mapTo(true)
    );
  }

  execute(): Observable<void> {
    alert('Aperture function is executed');
    return of(void 0);
  }
}
