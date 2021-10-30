import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BootstrapTabDirective } from 'src/app/directives/bootstrap-tab.directive';
import { AccountService } from 'src/app/services/account.service';
import { fadeInOut } from '../../services/animations';
@Component({
  selector: 'app-masterdatapage',
  templateUrl: './masterdatapage.component.html',
  styleUrls: ['./masterdatapage.component.scss'],
  animations: [fadeInOut]
})
export class MasterdatapageComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private route: ActivatedRoute, private accountService: AccountService) { }

  IsCountryActivated =false;
  iscitiesActivated = true;
  district2Activated = false;
  state2Activated = false;
  bank2Activated = false;
  bank2typeActivated =false;
  bank2BranchActivated = false;
  bankaccountTypeActivated =false;
  employerTypeActivated = false;
  employementTypeTabActivated = false
  employementStatusActivated = false;

  personTypeActivated = false;
  trainingTypeActivated =false;

  valnerabilityActivated = false;

  valnerabilityLevelActivated = false;

  monitorPeriodActivated = false;

  businessPlanActivated = false;

  businessTypeActivated = false;

  

  readonly countryTab = 'country2';
  readonly citiesTab = 'cities';
  readonly district2Tab = 'district2';
  readonly state2Tab = "state2";
  readonly bank2Tab = "bank2";
  readonly bank2typeTab = "bank2type";
  readonly bank2BranchTab = "bank2Branch";
  readonly bankaccountTypeTab = "bankaccountType";
  readonly employerTypeTab = "employerType";
  readonly employementTypeTab = "employementType";
  readonly employementStatusTab = "employementStatus";
  readonly personTypeTab = "personType";

  readonly trainingTypeTab = "trainingType";

  readonly valnerabilityTab = "valnerability";

  readonly valnerabilityLevelTab = "valnerabilityLevel";

  readonly monitorPeriodTab = "monitorPeriod";

  readonly businessPlanTab = "businessPlan";

readonly businessTypeTab = "businessType";
  

  fragmentSubscription: any;

  @ViewChild('tab', { static: true })
  tab: BootstrapTabDirective;


  ngOnInit() {
     this.fragmentSubscription = this.route.fragment.subscribe(anchor => this.showContent(anchor));
  }


  ngOnDestroy() {
    this.fragmentSubscription.unsubscribe();
  }

  showContent(anchor: string) {
    console.log("came to show content")
    if (anchor) {
      anchor = anchor.toLowerCase();
    }
    console.log("achor",anchor);

    this.tab.show(`#${anchor}Tab`);
    console.log("achorshow",`#${anchor}Tab`);
  }


  isFragmentEquals(fragment1: string, fragment2: string) {

    if (fragment1 == null) {
      fragment1 = '';
    }

    if (fragment2 == null) {
      fragment2 = '';
    }

    return fragment1.toLowerCase() === fragment2.toLowerCase();
  }


  onShowTab(event) {
    console.log("tab evemt",event)
    const activeTab = event.target.hash.split('#', 2).pop();

    console.log("tab active",activeTab)


    this.iscitiesActivated = activeTab === this.citiesTab;

    this.IsCountryActivated = activeTab === this.countryTab;

    this.district2Activated = activeTab === this.district2Tab;

    this.state2Activated = activeTab == this.state2Tab;
 
    this.bank2Activated = activeTab === this.bank2Tab;

    this.bank2typeActivated = activeTab === this.bank2typeTab;

    this.bank2BranchActivated = activeTab === this.bank2BranchTab;


    this.bankaccountTypeActivated = activeTab ===this.bankaccountTypeTab;

    this.employerTypeActivated = activeTab === this.employerTypeTab;

    this.employementTypeTabActivated = activeTab === this.employementTypeTab;

    this.employementStatusActivated = activeTab === this.employementStatusTab;

    this.personTypeActivated = activeTab === this.personTypeTab;

    this.trainingTypeActivated =activeTab ===this.trainingTypeTab;

    this.valnerabilityActivated = activeTab === this.valnerabilityTab;

    this.valnerabilityLevelActivated = activeTab === this.valnerabilityLevelTab;


    this.monitorPeriodActivated = activeTab === this.monitorPeriodTab;

    this.businessPlanActivated = activeTab == this.businessPlanTab;

    this.businessTypeActivated = activeTab == this.businessTypeTab;

    console.log("Isactivatedcountry",this.IsCountryActivated)

    this.router.navigate([], { fragment: activeTab });
  }


}
