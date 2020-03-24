import { Component, OnInit } from '@angular/core';
import { Pc } from 'src/app/models/pc';
import { PcService } from 'src/app/services/pc.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pc',
  templateUrl: './edit-pc.component.html',
  styleUrls: ['./edit-pc.component.css']
})
export class EditPcComponent implements OnInit {
  pcForm: Pc;
  marqueDisponible: string[];
  typeDisponible: string[];
  categoryDisponible: string[];
  isLoading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private pcService: PcService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.marqueDisponible = this.pcService.marqueDisponible;
    this.typeDisponible = this.pcService.typeDisponible;
    this.categoryDisponible = this.pcService.categoryDisponible;
    this.pcService.getPcById(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.pcForm = data;
        this.isLoading = false;
      });

  }

  editPc() {
    this.pcService.editPc(this.pcForm).subscribe((data)=> {
      this.router.navigate(['/dashboard']);
    });
  }


}
