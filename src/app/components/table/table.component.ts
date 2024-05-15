import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { finalize } from 'rxjs';
import { IResponseApi, IVideos } from 'src/app/interfaces/interfaces';
import { VideosService } from 'src/app/services/videos.service';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  list!: IVideos[];
  dataSource: any;
  isLoading: boolean = true;
  pageIndex: number = 0;
  length!: number;
  totalItems!: number;
  pageSize: number = 5;

  displayedColumns: string[] = ['name', 'numberVideos'];


  constructor(private videosService: VideosService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.getApiVideos();
  }

  getApiVideos() {
    debugger;
    this.videosService.getVideoPages(this.pageIndex + 1, this.pageSize).subscribe({
      next: (data) => {
        this.list = data.data
        this.dataSource = new MatTableDataSource(this.list);
        this.totalItems = data.items
      },
      error: (err) => console.log(err)
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getApiVideos();
  }
}
