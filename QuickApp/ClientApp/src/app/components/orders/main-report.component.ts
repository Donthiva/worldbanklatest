import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BootstrapTabDirective } from 'src/app/directives/bootstrap-tab.directive';
import { AccountService } from 'src/app/services/account.service';
import { fadeInOut } from 'src/app/services/animations';

@Component({
  selector: 'app-main-report',
  templateUrl: './main-report.component.html',
  styleUrls: ['./main-report.component.scss'],
  animations: [fadeInOut]
})
export class MainReportComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private accountService: AccountService) { }
  IsSubRep1Activated =false;
  IsSubRep2Activated = false;
  IsSubRep3Activated = false;
  IsSubRep4Activated = false;

  readonly subRep1Tab = 'subRep1';
  readonly subRep2Tab = 'subRep2';
  readonly subRep3Tab = 'subRep3';
  readonly subRep4Tab = 'subRep4';
  
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



    this.IsSubRep1Activated = activeTab === this.subRep1Tab;

    this.IsSubRep2Activated = activeTab === this.subRep2Tab;

    this.IsSubRep3Activated = activeTab === this.subRep3Tab;

    this.IsSubRep4Activated = activeTab === this.subRep4Tab;

    this.router.navigate([], { fragment: activeTab });
  }

}
