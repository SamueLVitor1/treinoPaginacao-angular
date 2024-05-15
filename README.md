<table
  mat-table
  [dataSource]="dataSource"
  class="table-teste mat-elevation-z8"
  *ngIf="list; else listEmpty"
>
  <!--- Note that these columns can be defined in any order.
        The actual rendered columns are set as a property on the row definition" -->

  <!-- Position Column -->
  <ng-container matColumnDef="id">
    <th mat-header-cell *matHeaderCellDef>No.</th>
    <td mat-cell *matCellDef="let element">{{ element.id }}</td>
  </ng-container>

  <!-- Name Column -->
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef>Name</th>
    <td mat-cell *matCellDef="let element">{{ element.name }}</td>
  </ng-container>

  <!-- Weight Column -->
  <ng-container matColumnDef="numberVideos">
    <th mat-header-cell *matHeaderCellDef>Number Videos</th>
    <td mat-cell *matCellDef="let element" class="numberVideos-class">
      {{ element.numberVideos }} videos

      <button class="more-icon">
        <img src="../../../assets/more-icon.svg" alt="" />
      </button>
    </td>

  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
</table>

<!-- <mat-paginator
  #paginator
  class="paginator demo-paginator"
  (page)="handlePageEvent($event)"
  [length]="length"
  [pageSize]="pageSize"
  [disabled]="disabled"
  [showFirstLastButtons]="showFirstLastButtons"
  [pageSizeOptions]="showPageSizeOptions ? pageSizeOptions : []"
  [hidePageSize]="hidePageSize"
  [pageIndex]="pageIndex"
  aria-label="Select page"
>
</mat-paginator> -->