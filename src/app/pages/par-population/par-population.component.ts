import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommuneService} from '../../services/commune.service';
import {Commune} from '../../models/commune';

@Component({
  selector: 'app-par-population',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './par-population.component.html',
  styleUrls: ['./par-population.component.css']
})
export class ParPopulationComponent implements OnInit {
  communes: Commune[] = [];

  groupedByPopulation: { [key: string]: Commune[] } = {
    '-10k': [],
    '10k–40k': [],
    '+40k': []
  };

  groups = ['-10k', '10k–40k', '+40k'];
  selectedGroup: string = '-10k';

  constructor(private communeService: CommuneService) {
  }

  ngOnInit(): void {
    this.communeService.getCommunes().subscribe(data => {
      this.communes = Object.values(data).flat();
      this.groupCommunes();
    });
  }

  groupCommunes(): void {
    for (const c of this.communes) {
      const pop = c.Population;

      if (pop < 10000) {
        this.groupedByPopulation['-10k'].push(c);
      } else if (pop <= 40000) {
        this.groupedByPopulation['10k–40k'].push(c);
      } else {
        this.groupedByPopulation['+40k'].push(c);
      }
    }
  }

  selectGroup(group: string): void {
    this.selectedGroup = group;
  }

  getCommunesForSelectedGroup(): Commune[] {
    return this.groupedByPopulation[this.selectedGroup] || [];
  }
}
