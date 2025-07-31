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
  selectedRange: string = '-10';
  ranges: string[] = ['-10', '10-100', '+100'];

  constructor(private communeService: CommuneService) {
  }

  ngOnInit(): void {
    this.communeService.getCommunes().subscribe(data => {
      this.communes = Object.values(data)
        .flat()
        .sort((a, b) =>
          parseFloat(b.DensitePopulation.replace(',', '.')) -
          parseFloat(a.DensitePopulation.replace(',', '.'))
        );
    });
  }

  selectRange(range: string): void {
    this.selectedRange = range;
  }

  get filteredCommunes(): Commune[] {
    return this.communes.filter(c => {
      const densite = parseFloat(c.DensitePopulation.replace(',', '.'));
      if (this.selectedRange === '-10') return densite < 10;
      if (this.selectedRange === '10-100') return densite >= 10 && densite <= 100;
      if (this.selectedRange === '+100') return densite > 100;
      return false;
    });
  }

  getCountForRange(range: string): number {
    return this.communes.filter(c => {
      const d = parseFloat(c.DensitePopulation.replace(',', '.'));
      if (range === '-10') return d < 10;
      if (range === '10-100') return d >= 10 && d <= 100;
      if (range === '+100') return d > 100;
      return false;
    }).length;
  }

}
