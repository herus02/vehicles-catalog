import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-vehicle-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-pagination.component.html',
  styleUrls: ['./vehicle-pagination.component.scss']
})
export class VehiclePaginationComponent {
  @Input() set currentPage(value: number) {
    this._currentPage.set(value);
  }
  @Input() set totalItems(value: number) {
    this._totalItems.set(value);
  }
  @Input() set itemsPerPage(value: number) {
    this._itemsPerPage.set(value);
  }
  @Output() pageChange = new EventEmitter<number>();

  private _currentPage = signal<number>(1);
  private _totalItems = signal<number>(0);
  private _itemsPerPage = signal<number>(10);

  protected readonly Math = Math;

  get totalPages(): number {
    return Math.ceil(this._totalItems() / this._itemsPerPage());
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }

  getCurrentPage(): number {
    return this._currentPage();
  }

  getTotalItems(): number {
    return this._totalItems();
  }

  getItemsPerPage(): number {
    return this._itemsPerPage();
  }
}