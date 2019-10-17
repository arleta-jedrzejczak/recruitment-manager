import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CompanyInterface } from '../../company.interface';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent {

  @Input() companies: CompanyInterface[];

  @Output() onDeleteCompanyEvent: EventEmitter<string> = new EventEmitter<string>();

  onDeleteCompany(id: string): void {
    this.onDeleteCompanyEvent.emit(id);
  }
}
