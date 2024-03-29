import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-confirm-pop-up',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './confirm-pop-up.component.html',
  styleUrls: ['./confirm-pop-up.component.scss']
})
export class ConfirmPopUpComponent {
  @Input() public header?: string;
  @Input() public body?: string;
  @Input() public nbrPersonnes: number = 1;
  @Input() public nombrePlacesMax: number =1;
  @Output() public confirmClicked = new EventEmitter<{ confirmed: boolean, nbrPersonnes: number }>();

  constructor(private activeModal: NgbActiveModal) { }

  public closeModal(): void {
    this.activeModal.close();
  }

  confirm(): void {
    this.confirmClicked.emit({ confirmed: true, nbrPersonnes: this.nbrPersonnes });
    this.closeModal();
  }
 
  increaseNumber(): void {
    if (this.nbrPersonnes < this.nombrePlacesMax) {
      this.nbrPersonnes++;
    }
  }
  
  decreaseNumber(): void {
    if (this.nbrPersonnes > 1) {
      this.nbrPersonnes--;
    }
  }

  
}
