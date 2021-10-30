import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BusinessType } from 'src/app/models/businessPlan';
import { AppTranslationService } from 'src/app/services/app-translation.service';

@Component({
  selector: 'app-business-type',
  templateUrl: './business-type.component.html',
  styleUrls: ['./business-type.component.scss']
})
export class BusinessTypeComponent implements OnInit {

  constructor(private translationService: AppTranslationService) { }
  businessType:BusinessType = new BusinessType();
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
      { prop: 'businessTypeName', name: gT('APs.BusinessTypes.list.businessTypeName'), width: 320 },
   
      { name: '', width: 250, cellTemplate: this.actionsTemplatebankType, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];
  }

  addnewBusinessType() {

  }

  updateBusinessType() {

  }

  
  Clear() {

  }

  view(row) {

  }

  delete(row) {

  }

}
