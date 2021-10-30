import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MonitorPeriods } from 'src/app/models/periodModel';
import { AppTranslationService } from 'src/app/services/app-translation.service';

@Component({
  selector: 'app-period-component',
  templateUrl: './period-component.component.html',
  styleUrls: ['./period-component.component.scss']
})
export class PeriodComponentComponent implements OnInit {

  monitorPeriodsModel: MonitorPeriods = new MonitorPeriods();
  columns: any[] = [];
  rows: any[] = [];
  update:boolean = false;
  loadingIndicator;

  @ViewChild('indexTemplatebankType', { static: true })
  indexTemplatebankType: TemplateRef<any>;

  @ViewChild('actionsTemplatebankType', { static: true })
  actionsTemplatebankType: TemplateRef<any>;


  constructor(private translationService: AppTranslationService) { }

  ngOnInit(): void {
    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
      { prop: 'id', name: '#', width: 50, cellTemplate: this.indexTemplatebankType, canAutoResize: false },
      { prop: 'peroildName', name: gT('APs.MonitorPeriod.list.peroildName'), width: 320 },
      { prop: 'startDate', name: gT('APs.MonitorPeriod.list.startDate'), width: 320 },
      { name: '', width: 250, cellTemplate: this.actionsTemplatebankType, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];

  }

  addNewPeriod() {


  }

  updatePeriod() {

  }

  Clear() {

  }

  view(row){

  }

  delete(row){}

}
