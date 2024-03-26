import { Component, OnInit } from '@angular/core';
import { AccueilClientService } from '../../services/accueil-client.service';
import { TableRes } from '../../entities/TableRes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil-client',
  standalone: true,
  imports: [RouterModule, CommonModule], 
  templateUrl: './accueil-client.component.html',
  styleUrls: ['./accueil-client.component.scss',
  ]
})
export class AccueilClientComponent implements OnInit {

  tables: TableRes[] = [];

  constructor(private accueilClientService: AccueilClientService) { }

  ngOnInit(): void {
    this.getAllTables();
  }

  getAllTables(): void {
    this.accueilClientService.getAllTables().subscribe({
      next: (tables: TableRes[]) => {
        this.tables = tables;
      },
      error: (error) => {
        console.error('Error fetching tables:', error);
      }
    });
  }
}
