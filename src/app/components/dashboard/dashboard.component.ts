import { Component, OnInit } from '@angular/core';
import { Pc } from 'src/app/models/pc';
import { PcService } from 'src/app/services/pc.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pcs: Pc[];
  isLoading: boolean;


  constructor(private pcService: PcService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.pcService.getAll().subscribe(data => {
      this.pcs = data;
      this.isLoading = false;
    });

  }
  
  deletePc(pc: Pc) {
    this.isLoading = true;
    this.pcService.supprime(pc).subscribe(data => {
      this.pcService.getAll().subscribe(allPcs => {
        this.pcs = allPcs;
        this.isLoading = false;
      });
    });
  }

  result(pc: Pc){
    return pc.prixVente - pc.prixAchat;
  }

}
