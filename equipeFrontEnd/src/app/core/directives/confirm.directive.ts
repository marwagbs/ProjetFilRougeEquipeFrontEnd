import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { YesNoComponent } from '../components/yes-no/yes-no.component';

@Directive({
  selector: '[coreConfirm]',
  standalone: true
})
export class ConfirmDirective {

  @Input()
  public header?: string;

  @Input()
  public body?: string;

  @Output()
  public confirmClicked = new EventEmitter<void>();

  constructor(private ngbModal: NgbModal) { }

  @HostListener('click')
  private clicked(): void {
    const modalRef: NgbModalRef = this.ngbModal.open(YesNoComponent, {
      centered: true,
      animation: true
    });

    const yesNoComponent: YesNoComponent = modalRef.componentInstance;

    yesNoComponent.header = this.header;
    yesNoComponent.body = this.body;
    yesNoComponent.yesClicked.subscribe(() => {
      this.confirmClicked.emit();
      modalRef.close();
    });
    yesNoComponent.noClicked.subscribe(() => modalRef.close());
  }
}
