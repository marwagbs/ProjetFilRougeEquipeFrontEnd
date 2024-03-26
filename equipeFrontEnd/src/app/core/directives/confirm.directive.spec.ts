import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDirective } from './confirm.directive';

describe('ConfirmDirective', () => {
  it('should create an instance', () => {
    const directive = new ConfirmDirective(null as unknown as NgbModal);
    expect(directive).toBeTruthy();
  });
});
