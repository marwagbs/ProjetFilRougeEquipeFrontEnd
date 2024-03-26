import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-yes-no',
  standalone: true,
  imports: [],
  templateUrl: './yes-no.component.html',
  styleUrl: './yes-no.component.scss'
})
export class YesNoComponent {

  @Input()
  public header?: string;

  @Input()
  public body?: string;

  @Output()
  public yesClicked = new EventEmitter<void>();

  @Output()
  public noClicked = new EventEmitter<void>();

  constructor(private activeModal: NgbActiveModal) { }

  public closeModal(): void {
    this.activeModal.close();
  }
}
