// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BootstrapTabDirective } from 'src/app/directives/bootstrap-tab.directive';
import { AccountService } from 'src/app/services/account.service';
import { fadeInOut } from '../../services/animations';

@Component({
  selector: 'app-ap',
  templateUrl: './ap.component.html',
  styleUrls: ['./ap.component.scss'],
  animations: [fadeInOut]
})
export class APComponent {



  isProfileActivated = true;
  isPreferencesActivated = false;
  isUsersActivated = false;
  isRolesActivated = false;

  readonly profileTab = 'profile';
  readonly preferencesTab = 'preferences';
  readonly usersTab = 'users';
  readonly rolesTab = 'roles';
  fragmentSubscription: any;

  @ViewChild('tab', { static: true })
  tab: BootstrapTabDirective;

  
  constructor(private router: Router, private route: ActivatedRoute, private accountService: AccountService) {
  }

  
  ngOnInit() {
    this.fragmentSubscription = this.route.fragment.subscribe(anchor => this.showContent(anchor));
  }


  ngOnDestroy() {
    this.fragmentSubscription.unsubscribe();
  }

  showContent(anchor: string) {
    if (anchor) {
      anchor = anchor.toLowerCase();
    }


    this.tab.show(`#${this.profileTab}Tab`);
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
    const activeTab = event.target.hash.split('#', 2).pop();

    this.isProfileActivated = activeTab === this.profileTab;
    this.isPreferencesActivated = activeTab === this.preferencesTab;
    this.isUsersActivated = activeTab === this.usersTab;
    this.isRolesActivated = activeTab === this.rolesTab;

    this.router.navigate([], { fragment: activeTab });
  }


}


