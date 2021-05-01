import { ClientFunction } from 'mam-core';
import { Observable, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

export class ApertureFunction extends ClientFunction {

  label = 'Aperture';

  checkAvailability(): Observable<boolean> {
    return timer(1000).pipe(
      mapTo(true)
    );
  }

  execute(): Observable<void> {
    return super.execute();
  }
}
