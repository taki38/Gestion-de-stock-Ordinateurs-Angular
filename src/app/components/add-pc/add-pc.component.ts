import { Component, OnInit } from '@angular/core';
import { Pc } from 'src/app/models/pc';
import { PcService } from 'src/app/services/pc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pc',
  templateUrl: './add-pc.component.html',
  styleUrls: ['./add-pc.component.css']
})
export class AddPcComponent implements OnInit {
  pcForm: Pc;
  marqueDisponible: string[];
  typeDisponible: string[];
  categoryDisponible: string[];

  constructor(private pcService: PcService, private router: Router) { }

  ngOnInit(): void {
    this.marqueDisponible = this.pcService.marqueDisponible;
    this.typeDisponible = this.pcService.typeDisponible;
    this.categoryDisponible = this.pcService.categoryDisponible;
    this.pcForm = new Pc() ;
  }


  addPc() {
    this.pcService.add(this.pcForm).subscribe(data => {
      this.router.navigate(['/dashboard']);
    });

  }



}
