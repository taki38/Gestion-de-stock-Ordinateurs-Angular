import { Component, OnInit } from '@angular/core';
import { Pc } from 'src/app/models/pc';
import { PcService } from 'src/app/services/pc.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pc-details',
  templateUrl: './pc-details.component.html',
  styleUrls: ['./pc-details.component.css']
})
export class PcDetailsComponent implements OnInit {
  pc: Pc;
  isLoading: boolean;


  constructor(private pcService: PcService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.pcService.getPcById(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.pc = data;
        this.isLoading = false;
      });
  }

  

}
