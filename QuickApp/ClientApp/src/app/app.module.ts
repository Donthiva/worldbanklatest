// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { OAuthModule } from 'angular-oauth2-oidc';
import { ToastaModule } from 'ngx-toasta';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppErrorHandler } from './app-error.handler';
import { AppTitleService } from './services/app-title.service';
import { AppTranslationService, TranslateLanguageLoader } from './services/app-translation.service';
import { ConfigurationService } from './services/configuration.service';
import { AlertService } from './services/alert.service';
import { ThemeManager } from './services/theme-manager';
import { LocalStoreManager } from './services/local-store-manager.service';
import { OidcHelperService } from './services/oidc-helper.service';
import { NotificationService } from './services/notification.service';
import { NotificationEndpoint } from './services/notification-endpoint.service';
import { AccountService } from './services/account.service';
import { AccountEndpoint } from './services/account-endpoint.service';

import { EqualValidator } from './directives/equal-validator.directive';
import { LastElementDirective } from './directives/last-element.directive';
import { AutofocusDirective } from './directives/autofocus.directive';
import { BootstrapTabDirective } from './directives/bootstrap-tab.directive';
import { BootstrapToggleDirective } from './directives/bootstrap-toggle.directive';
import { GroupByPipe } from './pipes/group-by.pipe';

import { AppComponent } from './components/app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';


import { SettingsComponent } from './components/settings/settings.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { BannerDemoComponent } from './components/controls/banner-demo.component';
import { TodoDemoComponent } from './components/controls/todo-demo.component';
import { StatisticsDemoComponent } from './components/controls/statistics-demo.component';
import { NotificationsViewerComponent } from './components/controls/notifications-viewer.component';
import { SearchBoxComponent } from './components/controls/search-box.component';
import { UserInfoComponent } from './components/controls/user-info.component';
import { UserPreferencesComponent } from './components/controls/user-preferences.component';
import { UsersManagementComponent } from './components/controls/users-management.component';
import { RolesManagementComponent } from './components/controls/roles-management.component';
import { RoleEditorComponent } from './components/controls/role-editor.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ApListComponent } from './components/ap/ap-list/ap-list.component';
import { ApEditorComponent } from './components/ap/ap-editor/ap-editor.component';
import { ApViewComponent } from './components/ap/ap-view/ap-view.component';
import { APComponent } from './components/ap/ap.component';
import { ThreeWheelMonitorComponent } from './components/ap/ap-editor/ThreeWheelDriver/three-wheel-monitor/three-wheel-monitor.component';
import { ThreeWheelInfoComponent } from './components/ap/ap-editor/ThreeWheelDriver/three-wheel-info/three-wheel-info.component';
import { PersonalInfoComponent } from './components/ap/ap-editor/Common/PersonalInfo/personal-info.component';
import { BusinessMonitorComponent } from './components/ap/ap-editor/BusinessPerson/BusinessMonitor/business-monitor.component';
import { BusinessPersonInfoComponent } from './components/ap/ap-editor/BusinessPerson/BusinessPersonInfo/business-person-info.component';
import { EmployeeMonitorComponent } from './components/ap/ap-editor/Employee/employee-monitor/employee-monitor.component';
import { EmployeeinfoComponent } from './components/ap/ap-editor/Employee/employeeinfo/employeeinfo.component';
import { PhaseOutMonitorComponent } from './components/ap/ap-editor/PhaseOut/phase-out-monitor/phase-out-monitor.component';
import { PhaseOutInfoComponent } from './components/ap/ap-editor/PhaseOut/phase-out-info/phase-out-info.component';
import { CitiesComponent } from './components/master-data/cities/cities.component';
import { MasterdatapageComponent } from './components/master-data/masterdatapage.component';
import { CountryComponent } from './components/master-data/country/country.component';
import { DistrictComponent } from './components/master-data/district/district.component';
import { StatesComponent } from './components/master-data/states/states.component';
import { BankAccountTypeComponent } from './components/master-data/bank-account-type/bank-account-type.component';
import { BankBranchComponent } from './components/master-data/bank-branch/bank-branch.component';
import { BankTypeComponent } from './components/master-data/bank-type/bank-type.component';
import { BankComponent } from './components/master-data/bank/bank.component';
import { GenderComponent } from './components/master-data/gender/gender.component';
import { PersonTypeComponent } from './components/master-data/person-type/person-type.component';
import { EmployerTypeComponent } from './components/master-data/employer-type/employer-type.component';
import { EmployementTypeComponent } from './components/master-data/employement-type/employement-type.component';
import { EmployementStatusComponent } from './components/master-data/employement-status/employement-status.component';
import { TrainigTypeComponent } from './components/master-data/trainig-type/trainig-type.component';
import { ValnerabilityTypeComponent } from './components/master-data/valnerability-type/valnerability-type.component';
import { ValnerabilityLevelComponent } from './components/master-data/valnerability-level/valnerability-level.component';

import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReportViewerModule } from 'ngx-ssrs-reportviewer';
import { BankEndpoint } from './services/masterdataservice/bankService';
import { AddAppComponent } from './components/ap/ap-add/add-app/add-app.component';
import { PersonEndpoint } from './services/masterdataservice/personService';
import { AddressService } from './services/ap-services.ts/addressService';
import { BusinessService } from './services/ap-services.ts/businessService';

// import { AgmCoreModule } from '@agm/core';
import { MonitorEndpoint } from './services/monitor/monitorService';
import { AddressEndpoint } from './services/masterdataservice/addressService';
import { PersonEndpoint2 } from './services/masterdataservice/personService2';
import { EmploymentEndpoint } from './services/masterdataservice/employmentService';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TrainingDataComponent } from './components/ap/ap-editor/Training/training-data.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DatePipe } from '@angular/common';
import { PeriodComponentComponent } from './components/master-data/periods/period-component.component';
import { BusinessPlanComponent } from './components/master-data/businessPlan/business-plan.component';
import { BusinessTypeComponent } from './components/master-data/business-type/business-type.component';
import { MultipleTrainingComponent } from './components/ap/trainings/multiple-training.component';
import { OrdersComponent } from './components/orders/SubReport1/orders.component';
import { MainReportComponent } from './components/orders/main-report.component';
import { SubReport2Component } from './components/orders/sub-report2/sub-report2.component';
import { SubReport3Component } from './components/orders/sub-report3/sub-report3.component';
import { SubReport4Component } from './components/orders/sub-report4/sub-report4.component';
import { SubRepo5Component } from './components/orders/sub-repo5/sub-repo5.component';
import { GraphEndpoint } from './services/masterdataservice/graphService';






@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateLanguageLoader
      }
    }),
    NgxDatatableModule,
    OAuthModule.forRoot(),
    ToastaModule.forRoot(),
    NgSelectModule,
    TabsModule.forRoot(),
    NgbModule,
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ChartsModule,
    NgSelectModule,
    ReportViewerModule,
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBHBJREpyX0jR76gTA36V-3FFS-V_X_ahc'
    // }),
    NgxSpinnerModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CustomersComponent,
    APComponent,
    OrdersComponent,
    SettingsComponent,
    UsersManagementComponent, UserInfoComponent, UserPreferencesComponent,
    RolesManagementComponent, RoleEditorComponent,
    AboutComponent,
    NotFoundComponent,
    NotificationsViewerComponent,
    SearchBoxComponent,
    StatisticsDemoComponent, TodoDemoComponent, BannerDemoComponent,
    EqualValidator,
    LastElementDirective,
    AutofocusDirective,
    BootstrapTabDirective,
    BootstrapToggleDirective,
    GroupByPipe,
    ApListComponent,
    ApEditorComponent,
    ApViewComponent,
    PersonalInfoComponent,
    BusinessMonitorComponent,
    BusinessPersonInfoComponent,
    ThreeWheelMonitorComponent,
    ThreeWheelInfoComponent,
    EmployeeMonitorComponent,
    EmployeeinfoComponent,
    PhaseOutMonitorComponent,
    PhaseOutInfoComponent,
    CitiesComponent,
    MasterdatapageComponent,
    CountryComponent,
    DistrictComponent,
    StatesComponent,
    BankAccountTypeComponent,
    BankBranchComponent,
    BankTypeComponent,
    BankComponent,
    GenderComponent,
    PersonTypeComponent,
    EmployerTypeComponent,
    EmployementTypeComponent,
    EmployementStatusComponent,
    TrainigTypeComponent,
    ValnerabilityTypeComponent,
    ValnerabilityLevelComponent,
    AddAppComponent,
    TrainingDataComponent,
    PeriodComponentComponent,
    BusinessPlanComponent,
    BusinessTypeComponent,
    MultipleTrainingComponent,MainReportComponent, SubReport2Component, SubReport3Component, SubReport4Component, SubRepo5Component

  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    AlertService,
    ThemeManager,
    ConfigurationService,
    AppTitleService,
    AppTranslationService,
    NotificationService,
    NotificationEndpoint,
    AccountService,
    AccountEndpoint,
    LocalStoreManager,
    OidcHelperService,
    BankEndpoint,
    PersonEndpoint,
    GraphEndpoint,
    AddressService,
    BusinessService,
    MonitorEndpoint,
    AddressEndpoint,
    PersonEndpoint2,
    EmploymentEndpoint,
    DatePipe
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
