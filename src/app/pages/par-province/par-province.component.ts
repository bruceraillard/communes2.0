import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommuneService} from '../../services/commune.service';
import {Commune} from '../../models/commune';

@Component({
  selector: 'app-par-province',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './par-province.component.html',
  styleUrls: ['./par-province.component.css']
})
export class ParProvinceComponent implements OnInit {
  communesByProvince: { [key: string]: Commune[] } = {};
  selectedProvince: string = '';

  constructor(private communeService: CommuneService) {
  }

  ngOnInit(): void {
    this.communeService.getCommunes().subscribe(data => {
      this.communesByProvince = data;
      const provinces = Object.keys(data);
      if (provinces.length > 0) {
        this.selectedProvince = provinces[0];
      }
    });
  }

  selectProvince(province: string) {
    this.selectedProvince = province;
  }

  getProvinces(): string[] {
    return Object.keys(this.communesByProvince);
  }

  getCommunesForSelected(): Commune[] {
    return this.communesByProvince[this.selectedProvince] || [];
  }
}
