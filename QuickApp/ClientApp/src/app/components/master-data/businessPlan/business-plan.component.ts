import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BusinessPlan } from 'src/app/models/businessPlan';
import { AppTranslationService } from 'src/app/services/app-translation.service';

@Component({
  selector: 'app-business-plan',
  templateUrl: './business-plan.component.html',
  styleUrls: ['./business-plan.component.scss']
})
export class BusinessPlanComponent implements OnInit {

  constructor(private translationService: AppTranslationService) { }
  businessPlan: BusinessPlan = new BusinessPlan();
  columns: any[] = [];
  rows: any[] = [];
  update: boolean = false;
  loadingIndicator;

  @ViewChild('indexTemplatebankType', { static: true })
  indexTemplatebankType: TemplateRef<any>;

  @ViewChild('actionsTemplatebankType', { static: true })
  actionsTemplatebankType: TemplateRef<any>;


  ngOnInit(): void {
    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
      { prop: 'id', name: '#', width: 50, cellTemplate: this.indexTemplatebankType, canAutoResize: false },
      { prop: 'business_Plan_Description', name: gT('APs.BusinessPlan.list.business_Plan_Description'), width: 320 },
   
      { name: '', width: 250, cellTemplate: this.actionsTemplatebankType, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];
  }

  addnewBusinessPlan() {

  }

  updateBusinessPlan() {

  }

  Clear() {

  }

  view(row) {

  }

  delete(row) {

  }

}
