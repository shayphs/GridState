import { Component, OnInit } from '@angular/core';
import { ServerService } from "./server.service";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  cubes: any = [];
  statuses: any = {
    KWS_KERIDOS: '#3ecaef',
    KWS_KERIDOS_YG: '#f87e16',
    UNKNOWN: '#f8c105',
    ERROR: '#6c747d',
  };

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    let updatesCount = 0;
    const myInterval = setInterval(() => {
      this.getData();
      updatesCount++;
      console.log(updatesCount);
      if (updatesCount >= 500) {
        clearInterval(myInterval);
      }
    }, 500);
  }

  getData() {
    this.serverService.getAction().subscribe(
      (res) => {
        this.cubes = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
