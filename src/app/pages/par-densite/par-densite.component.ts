import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommuneService} from '../../services/commune.service';
import {Commune} from '../../models/commune';

@Component({
  selector: 'app-par-densite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './par-densite.component.html',
  styleUrls: ['./par-densite.component.css']
})
export class ParDensiteComponent implements OnInit {
  communes: Commune[] = [];

  constructor(private communeService: CommuneService) {
  }

  ngOnInit(): void {
    this.communeService.getCommunes().subscribe(data => {
      this.communes = Object.values(data)
        .flat()
        .sort((a, b) => parseFloat(b.DensitePopulation) - parseFloat(a.DensitePopulation));
    });
  }
}
