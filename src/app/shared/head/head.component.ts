import { Component, OnInit  } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { StatusSourceService } from '../../service/status-source';
import { StatusSource } from '../../interface/source';
import { TableServices } from '../../service/table.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss',
})
export class HeadComponent implements OnInit {
  statisSource!: StatusSource;
  items!: MenuItem[];

  constructor(private statusSource: StatusSourceService, 
    private tableService: TableServices) {}

  ngOnInit() {
    this.statusSource.statusSource$.subscribe(dados => {
      this.statisSource = dados;
    });
    this.items = [
      {
          label: 'Full',
          icon: 'pi pi-table',
          href:['/']
      },
      {
          label: 'Cluster Pasture',
          icon: 'pi pi-table',
          href:['/pasture']
      },
      {
        label: 'Cluster Medicine',
        icon: 'pi pi-table',
        href:['/medicine']
    },
  ];

  }

  public applyFilter(query: string): void {
    console.log("CLiquei no botão")
    this.tableService.applyFilter(query);
  }
}
