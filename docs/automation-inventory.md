# Automation Inventory

> Exported: 2026-02-24T02:15:14.967Z

## Summary

| Type | Count |
|------|-------|
| Flows (active) | 47 |
| Validation Rules (active) | 34 |
| Workflow Rules | 0 |
| Apex Triggers (active) | 44 |
| Apex Classes | 1624 |
| Approval Processes (active) | 0 |

---

## Account

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_Account | 1 | 53 |
| McAccountTrigger | 1 | 61 |

---

## Attendance

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| Tardy_Notes_Required | You must provide notes as to why the Student was Tardy. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Absent_Notes_Required | You must provide notes as to why the Student was Absent. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Only_One_Check_at_a_Time | Please select only one checkbox at a time (Present, Absent or Tardy) | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## BatchApexErrorEvent

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| McMaintenanceEventTrigger | 1 | 61 |

---

## Campaign

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| VOL_Campaign_CreateStatuses | 1 | 62 |
| TDTM_Campaign | 1 | 53 |

---

## CampaignMember

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_CampaignMember | 1 | 53 |

---

## Contact

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| Contact_Preferred_Email | Please select a Preferred Email | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Contact_Preferred_Phone | Please select a Preferred Phone | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_Contact | 1 | 53 |
| VOL_Contact_MaintainHours | 1 | 62 |
| McContactTrigger | 1 | 61 |

---

## docebo_v3__CourseEnrollment__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| CourseEnrollmentTrigger | 1 | 42 |

---

## docebo_v3__LearningPlanCourse__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| LearningPlanCourseTrigger | 1 | 47 |

---

## docebo_v3__LearningPlanEnrollment__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| LearningPlanEnrollmentTrigger | 1 | 42 |

---

## DoceboUser

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| CannotReferenceMultipleObjects | Docebo Users cannot have multiple related entities, they must be associated with either a User, a Contact or a custom object. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## Enrollment

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| Notes_Required | You must provide an explanation. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## fflib_AppBinding

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| BindObj_Or_BindObjAlt | Only specify the "Binding Object" field or the "Binding Object Alternate" field; not both. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Require_Interface_Type_For_Services | An Interface Type is required for Service class Bindings | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## GW_Volunteers__Job_Recurrence_Schedule__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| VOL_JRS_MaintainShifts | 1 | 62 |

---

## GW_Volunteers__Volunteer_Hours__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| VOL_VolunteerHours_AddToCampaign | 1 | 62 |
| VOL_VolunteerHours_ShiftRollups | 1 | 62 |

---

## GW_Volunteers__Volunteer_Job__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| VOL_Job_Before | 1 | 62 |

---

## GW_Volunteers__Volunteer_Recurrence_Schedule__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| VOL_VRS_MaintainHours | 1 | 62 |

---

## Job_Recurrence_Schedule

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| JRS_Days_Of_Week_Required | You must select at least one value for Days of Week. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| JRS_Weekly_Occurrence_Required | You must select at least one value for Weekly Occurrence. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## Lead

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_Lead | 1 | 53 |
| McLeadTrigger | 1 | 61 |

---

## Level

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| Target_Required | Target is a required field on Level.  Please specify the Target object for this Level. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## mone__Mailchimp_List__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| McAudienceTrigger | 1 | 61 |

---

## mone__Mailchimp_Member__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| McMemberTrigger | 1 | 61 |

---

## npe01__OppPayment__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_Payment | 1 | 53 |

---

## npe03__Recurring_Donation__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_RecurringDonation | 1 | 53 |

---

## npe4__Relationship__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_Relationship | 1 | 53 |

---

## npe5__Affiliation__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_Affiliation | 1 | 53 |

---

## npo02__Household__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_HouseholdObject | 1 | 53 |

---

## npsp__Account_Soft_Credit__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_AccountSoftCredit | 1 | 53 |

---

## npsp__Address__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_Address | 1 | 53 |

---

## npsp__Allocation__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_Allocation | 1 | 53 |

---

## npsp__DataImport__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_DataImport | 1 | 53 |

---

## npsp__DataImportBatch__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_DataImportBatch | 1 | 53 |

---

## npsp__Engagement_Plan__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_EngagementPlan | 1 | 53 |

---

## npsp__Engagement_Plan_Task__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_EngagementPlanTask | 1 | 53 |

---

## npsp__Form_Template__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_FormTemplate | 1 | 53 |

---

## npsp__General_Accounting_Unit__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_GeneralAccountingUnit | 1 | 53 |

---

## npsp__Grant_Deadline__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_GrantDeadline | 1 | 53 |

---

## npsp__Level__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_Level | 1 | 53 |

---

## npsp__Partial_Soft_Credit__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_PartialSoftCredit | 1 | 53 |

---

## Opportunity

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_Opportunity | 1 | 53 |

---

## OpportunityContactRole

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_OpportunityContactRole | 1 | 53 |

---

## pmdm__ServiceDelivery__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| ServiceDeliveryTrigger | 1 | 50 |

---

## pmdm__ServiceParticipant__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| ServiceParticipantTrigger | 1 | 54 |

---

## Program

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| START_DATE_BEFORE_END_DATE | Start Date must be before End Date | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## ProgramCohort

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| END_DATE_PROGRAM_DATES | End Date must be within the Program Start and End Dates | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| START_DATE_BEFORE_END_DATE | Start Date must be before End Date | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| START_DATE_PROGRAM_DATES | Start Date must be within the range of the related Program Start and End Dates. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## ProgramEngagement

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| ACCOUNT_MATCHES_CONTACT_ACCOUNT | Select an Account that matches the related Contact. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| APPLICATION_DATE_BEFORE_END_DATE | End Date must be after the Application Date | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| APPLICATION_DATE_BEFORE_START_DATE | Start Date must be after the Application Date | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| END_DATE_WITHIN_PROGRAM_DATES | Select an end date that's on or after the program start date and on or before the program end date. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| PROGRAM_MATCHES_COHORT_PROGRAM | Select a Program Cohort that matches the Program. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| START_DATE_BEFORE_END_DATE | Start Date must be before End Date | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| START_DATE_WITHIN_PROGRAM_DATES | Select a start date that's on or after the program start date and on or before the program end date. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Stage_Dismissed_Reason_Dismissed_require | If Stage = Dismissed, then Reason Dismissed is Required | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Stage_Withdrawn_Reason_Withdrawn_require | If Stage = Withdrawn, Reason Withdrawn Required | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## Relationship

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| Related_Contact_Do_Not_Change | Rather than change the contacts in an existing relationship, delete this relationship and create a new on between the new contacts | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## ServiceDelivery

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| ACCOUNT_MATCHES_CONTACT_ACCOUNT | Select an Account that matches the related Contact. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| PROGRAM_MATCH | Select a Program Engagement that matches the Program of the related Service. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## Session

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| CourseMustBeCompatibleWithSessions | Session course must be of type 'webinar' or 'classroom' | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## Task

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_Task | 1 | 53 |

---

## User

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TDTM_User | 1 | 53 |

---

## Volunteer_Hours

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| HoursRequiredOnCompletion | You must specify the Hours Worked when setting Status to Completed. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| StatusMustBeSet | You must specify a Status value. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## Volunteer_Job

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| ValidateExternalSignupUrl | The External Signup Url value must begin with http, https, or mailto. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## Volunteer_Recurrence_Schedule

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| VRS_Days_of_Week_Required | You must select at least one value for Days of Week. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| VRS_Weekly_Occurrence_Required | You must select at least one value for Weekly Occurence. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## Apex Classes (All)

| Class | Category | Lines | API Version |
|-------|----------|-------|-------------|
| AccountAdapter | business-logic | 1 | 53 |
| ACCT_AccountMerge_TDTM | business-logic | 1 | 53 |
| ACCT_AccountMerge_TEST | test | 1 | 53 |
| ACCT_Accounts_TDTM | business-logic | 1 | 53 |
| ACCT_CascadeDeleteLookups_TDTM | business-logic | 1 | 53 |
| ACCT_CascadeDeleteLookups_TEST | test | 1 | 53 |
| ACCT_HHAccounts_TEST | test | 1 | 53 |
| ACCT_IndividualAccounts_TDTM | business-logic | 1 | 53 |
| ACCT_IndividualAccounts_TEST | test | 1 | 53 |
| ACCT_ViewOverride_CTRL | controller | 1 | 53 |
| ACCT_ViewOverride_TEST | test | 1 | 53 |
| AddButtonToPageLayoutController | controller | 1 | 59 |
| AddButtonToPageLayoutController_Test | test | 1 | 59 |
| AdditionalObjectJSON | business-logic | 1 | 53 |
| AdditionalObjectJSON_TEST | test | 1 | 53 |
| ADDR_Account_TDTM | business-logic | 1 | 53 |
| ADDR_Addresses_TDTM | business-logic | 1 | 53 |
| ADDR_Addresses_TEST | test | 1 | 53 |
| ADDR_Addresses_TEST2 | business-logic | 1 | 53 |
| ADDR_Cicero_TEST | test | 1 | 53 |
| ADDR_Cicero_Validator | business-logic | 1 | 53 |
| ADDR_Contact_TDTM | business-logic | 1 | 53 |
| ADDR_Contacts_TEST | test | 1 | 53 |
| ADDR_CopyAddrHHObjBTN_CTRL | controller | 1 | 53 |
| ADDR_CopyAddrHHObjBTN_TEST | test | 1 | 53 |
| ADDR_GoogleGeoAPI_Validator | business-logic | 1 | 53 |
| ADDR_GoogleGeoAPI_Validator_TEST | test | 1 | 53 |
| ADDR_IValidator | business-logic | 1 | 53 |
| ADDR_MockGoogleGeoAPIResponse_TEST | test | 1 | 53 |
| ADDR_MockHttpRespGenerator_TEST | test | 1 | 53 |
| ADDR_Seasonal_SCHED | business-logic | 1 | 53 |
| ADDR_SmartyStreets_Gateway | business-logic | 1 | 53 |
| ADDR_SmartyStreets_Validator | business-logic | 1 | 53 |
| ADDR_Validation_Gateway_TEST | test | 1 | 53 |
| ADDR_Validator | business-logic | 1 | 53 |
| ADDR_Validator_Batch | business-logic | 1 | 53 |
| ADDR_Validator_Batch_TEST | test | 1 | 53 |
| ADDR_Validator_REST | business-logic | 16 | 53 |
| ADDR_Validator_TDTM | business-logic | 1 | 53 |
| ADDR_Validator_TEST | test | 1 | 53 |
| ADDR_Validator_UTIL | utility | 1 | 53 |
| Addresses | business-logic | 1 | 53 |
| AddressService | business-logic | 1 | 53 |
| AddressServiceTests_TEST | test | 1 | 53 |
| AddTemplatesController | controller | 1 | 59 |
| AddTemplatesController_Test | test | 1 | 59 |
| ADV_Adapter | business-logic | 28 | 53 |
| ADV_Adapter_TEST | test | 1 | 53 |
| ADV_PackageInfo_SVC | business-logic | 1 | 53 |
| AdvancedMappingEnablementService | business-logic | 1 | 53 |
| AdvancedMappingEnablementService_TEST | test | 1 | 53 |
| AdvancedMappingEnablementServiceMock | business-logic | 1 | 53 |
| AFFL_Affiliations_TDTM | business-logic | 1 | 53 |
| AFFL_Affiliations_TEST | test | 1 | 53 |
| AggregateResultProxy | business-logic | 1 | 53 |
| AggregateResultProxy_TEST | test | 1 | 53 |
| ALLO_Allocations_TDTM | business-logic | 1 | 53 |
| ALLO_Allocations_TEST | test | 1 | 53 |
| ALLO_AllocationsDMLService | business-logic | 1 | 53 |
| ALLO_AllocationsDMLService_TEST | test | 1 | 53 |
| ALLO_AllocationsRecalculateService | business-logic | 1 | 53 |
| ALLO_AllocationsRecalculateService_TEST | test | 1 | 53 |
| ALLO_AllocationsRetrievalService | business-logic | 1 | 53 |
| ALLO_AllocationsRetrievalService_TEST | test | 1 | 53 |
| ALLO_AllocationsReviewService | business-logic | 1 | 53 |
| ALLO_AllocationsReviewService_TEST | test | 1 | 53 |
| ALLO_AllocationsService | business-logic | 1 | 53 |
| ALLO_AllocationsService_TEST | test | 1 | 53 |
| ALLO_AllocationsSettings | business-logic | 1 | 53 |
| ALLO_AllocationsSettings_TEST | test | 1 | 53 |
| ALLO_AllocationsUtil | utility | 1 | 53 |
| ALLO_AllocationsUtil_TEST | test | 1 | 53 |
| ALLO_AllocationsWrapper | business-logic | 1 | 53 |
| ALLO_MakeDefaultAllocations_BATCH | business-logic | 1 | 53 |
| ALLO_ManageAllocations_CTRL | controller | 1 | 53 |
| ALLO_ManageAllocations_TEST | test | 1 | 53 |
| ALLO_Multicurrency_TDTM | business-logic | 1 | 53 |
| ALLO_Multicurrency_TEST | test | 1 | 53 |
| ALLO_PaymentSync_SVC | business-logic | 1 | 53 |
| ALLO_PaymentSync_TDTM | business-logic | 1 | 53 |
| ALLO_PaymentSync_TEST | test | 1 | 53 |
| ALLO_Rollup_SCHED | business-logic | 1 | 53 |
| ALLO_Rollup_TEST | test | 1 | 53 |
| ALLO_UnitTestHelper_TEST | test | 1 | 53 |
| AllocationParent | business-logic | 1 | 53 |
| AllocationParent_TEST | test | 1 | 53 |
| AllocationSelector | business-logic | 1 | 55 |
| AllocationSelector_TEST | test | 1 | 55 |
| AN_AutoNumber_TDTM | business-logic | 1 | 53 |
| AN_AutoNumberService | business-logic | 1 | 53 |
| AN_AutoNumberService_TEST | test | 1 | 53 |
| ApiResponse | business-logic | 1 | 42 |
| ApiService | business-logic | 1 | 42 |
| ApiServiceMock | business-logic | 1 | 42 |
| ApiServiceTest | test | 1 | 39 |
| Application | business-logic | 1 | 53 |
| Application | business-logic | 1 | 47 |
| Application_TEST | test | 1 | 47 |
| AsyncApexJobId | business-logic | 1 | 53 |
| AsyncApexJobSelector | business-logic | 1 | 53 |
| AttendanceController | controller | 1 | 50 |
| AttendanceController_TEST | test | 1 | 50 |
| BasicStub | business-logic | 1 | 48 |
| BATCH_HouseholdNaming | business-logic | 22 | 53 |
| BATCH_HouseholdNaming_TEST | test | 1 | 53 |
| BATCH_OppRollup | business-logic | 22 | 53 |
| BATCH_OppRollup_TEST | test | 1 | 53 |
| BDE_BatchDataEntry | business-logic | 1 | 53 |
| BDE_BatchDataEntry_TEST | test | 1 | 53 |
| BDE_BatchEntry_CTRL | controller | 1 | 53 |
| BDE_BatchEntry_TEST | test | 1 | 53 |
| BDI_AdditionalObjectService | business-logic | 1 | 53 |
| BDI_AdditionalObjectService_TEST | test | 1 | 53 |
| BDI_BatchNumberSettingsController | controller | 1 | 53 |
| BDI_BatchNumberSettingsController_TEST | test | 1 | 53 |
| BDI_BatchOverride_CTRL | controller | 1 | 53 |
| BDI_BatchOverride_TEST | test | 1 | 53 |
| BDI_ContactService | business-logic | 1 | 53 |
| BDI_ContactService_TEST | test | 1 | 54 |
| BDI_CustObjMappingGAUAllocation | business-logic | 1 | 53 |
| BDI_DataImport_API | business-logic | 50 | 53 |
| BDI_DataImport_BATCH | business-logic | 1 | 53 |
| BDI_DataImport_CTRL | controller | 1 | 53 |
| BDI_DataImport_TEST | test | 1 | 53 |
| BDI_DataImport_TEST2 | business-logic | 1 | 53 |
| BDI_DataImportAPI_TEST | test | 1 | 53 |
| BDI_DataImportBatch_SCHED | business-logic | 1 | 53 |
| BDI_DataImportBatch_SEL | business-logic | 1 | 53 |
| BDI_DataImportBatch_TDTM | business-logic | 1 | 53 |
| BDI_DataImportBatch_TEST | test | 1 | 53 |
| BDI_DataImportBatchStatus_TDTM | business-logic | 1 | 53 |
| BDI_DataImportCTRL_TEST | test | 1 | 53 |
| BDI_DataImportDeleteBTN_CTRL | controller | 1 | 53 |
| BDI_DataImportDeleteBTN_TEST | test | 1 | 53 |
| BDI_DataImportFLSService | business-logic | 1 | 53 |
| BDI_DataImportFLSService_TEST | test | 1 | 53 |
| BDI_DataImportService | business-logic | 30 | 53 |
| BDI_DataImportService_TEST | test | 1 | 53 |
| BDI_Donations | business-logic | 1 | 53 |
| BDI_Donations_TEST | test | 1 | 53 |
| BDI_Donations_TEST2 | business-logic | 1 | 53 |
| BDI_Donations_TEST3 | business-logic | 1 | 54 |
| BDI_DryRun_TEST | test | 1 | 53 |
| BDI_DynamicSource | business-logic | 1 | 53 |
| BDI_DynamicSourceGroup | business-logic | 1 | 53 |
| BDI_FieldMapping | business-logic | 1 | 53 |
| BDI_FieldMappingSet | business-logic | 1 | 53 |
| BDI_GAUAllocationsUtil | utility | 1 | 53 |
| BDI_GAUAllocationsUtil_TEST | test | 1 | 53 |
| BDI_IMatchDonations | business-logic | 11 | 53 |
| BDI_IPostProcess | business-logic | 11 | 53 |
| BDI_ManageAdvancedMappingCtrl | controller | 1 | 53 |
| BDI_ManageAdvancedMappingCtrl_TEST | test | 1 | 53 |
| BDI_MappingService | business-logic | 1 | 53 |
| BDI_MappingServiceAdvanced | business-logic | 1 | 53 |
| BDI_MappingServiceAdvanced_TEST | test | 1 | 53 |
| BDI_MappingServiceHelpText | business-logic | 1 | 53 |
| BDI_MappingServiceHelpText_TEST | test | 1 | 53 |
| BDI_MatchDonations | business-logic | 1 | 53 |
| BDI_MatchDonations_TEST | test | 1 | 53 |
| BDI_MigrationMappingHelper | utility | 1 | 53 |
| BDI_MigrationMappingHelper_TEST | test | 1 | 53 |
| BDI_MigrationMappingUtility | business-logic | 1 | 53 |
| BDI_MigrationMappingUtility_TEST | test | 1 | 53 |
| BDI_ObjectMapping | business-logic | 1 | 53 |
| BDI_ObjectMappingLogic | business-logic | 1 | 53 |
| BDI_ObjectWrapper | business-logic | 1 | 53 |
| BDI_PerfLogger | business-logic | 1 | 53 |
| BDI_PerfLogger_TEST | test | 1 | 53 |
| BDI_PostProcess_TEST | test | 1 | 53 |
| BDI_ProcessSelectedDIs_CTRL | controller | 1 | 52 |
| BDI_ProcessSelectedDIs_TEST | test | 1 | 54 |
| BDI_RecurringDonations | business-logic | 1 | 53 |
| BDI_RecurringDonations_TEST | test | 1 | 53 |
| BDI_SettingsUI_CTRL | controller | 1 | 53 |
| BDI_SettingsUI_TEST | test | 1 | 53 |
| BDI_TargetFields | business-logic | 1 | 53 |
| BGE_BatchGiftEntry_UTIL | utility | 1 | 53 |
| BGE_BatchGiftEntry_UTIL_TEST | test | 1 | 53 |
| BGE_BatchGiftEntryTab_CTRL | controller | 1 | 53 |
| BGE_BatchGiftEntryTab_CTRL_TEST | test | 1 | 53 |
| BGE_ConfigurationWizard_CTRL | controller | 1 | 53 |
| BGE_ConfigurationWizard_CTRL_TEST | test | 1 | 53 |
| BGE_DataImportBatchEntry_CTRL | controller | 1 | 53 |
| BGE_DataImportBatchEntry_CTRL_TEST | test | 1 | 53 |
| BGE_FormTemplate_TDTM | business-logic | 1 | 53 |
| BrowseImageController | controller | 1 | 58 |
| Callable_API | business-logic | 16 | 53 |
| Callable_API_TEST | test | 1 | 53 |
| CallableApiApexDelegationService | business-logic | 1 | 53 |
| CallableApiApexDelegationService_TEST | test | 1 | 53 |
| CallableApiParameters | business-logic | 1 | 53 |
| CallableApiParameters_TEST | test | 1 | 53 |
| CallableDispatchService_ERR | business-logic | 1 | 53 |
| CallableDispatchService_ERR_TEST | test | 1 | 53 |
| CAM_CascadeDeleteLookups_TDTM | business-logic | 1 | 53 |
| CAM_CascadeDeleteLookups_TEST | test | 1 | 53 |
| CAO_Constants | business-logic | 1 | 53 |
| CAO_Constants_API | business-logic | 37 | 53 |
| CAO_Constants_API_TEST | test | 1 | 53 |
| CDL_CascadeDeleteLookups | business-logic | 1 | 53 |
| CDL_CascadeDeleteLookups_TDTM | business-logic | 1 | 53 |
| CDL_CascadeDeleteLookups_TEST | test | 1 | 53 |
| CLMDocumentUrl | business-logic | 30 | 55 |
| CLMDocumentUrlTest | test | 1 | 55 |
| CMT_FilterRule | business-logic | 1 | 53 |
| CMT_FilterRule_SEL | business-logic | 1 | 53 |
| CMT_FilterRule_TEST | test | 1 | 53 |
| CMT_FilterRuleEvaluation_SVC | business-logic | 1 | 53 |
| CMT_FilterRuleEvaluation_TEST | test | 1 | 53 |
| CMT_FilterRuleUI_SVC | business-logic | 1 | 53 |
| CMT_MetadataAPI | business-logic | 1 | 53 |
| CMT_MetadataAPI_TEST | test | 1 | 53 |
| CMT_UnitTestData_TEST | test | 1 | 53 |
| CommunitySSOCtl | business-logic | 19 | 48 |
| CommunitySSOCtlTest | test | 1 | 48 |
| ComponentControllerBase | business-logic | 1 | 62 |
| CON_AddToCampaign | business-logic | 1 | 53 |
| CON_CascadeDeleteLookups_TDTM | business-logic | 1 | 53 |
| CON_CascadeDeleteLookups_TEST | test | 1 | 53 |
| CON_ChangeAccount_TEST | test | 1 | 53 |
| CON_ContactMerge_CTRL | controller | 1 | 53 |
| CON_ContactMerge_TDTM | business-logic | 1 | 53 |
| CON_ContactMerge_TEST | test | 1 | 53 |
| CON_ContactMerge_TEST2 | business-logic | 1 | 53 |
| CON_ContactMergeTDTM_TEST | test | 1 | 53 |
| CON_ContactMergeTDTM_TEST2 | business-logic | 1 | 53 |
| CON_DeleteContactOverride_CTRL | controller | 1 | 53 |
| CON_DeleteContactOverride_TEST | test | 1 | 53 |
| CON_DeleteContactOverridePermissions | business-logic | 1 | 53 |
| CON_DeleteContactOverrideSelector | business-logic | 1 | 53 |
| CON_DoNotContact_TDTM | business-logic | 1 | 53 |
| CON_DoNotContact_TEST | test | 1 | 53 |
| Configuration | business-logic | 1 | 47 |
| Configuration_TEST | test | 1 | 47 |
| Constants | business-logic | 41 | 53 |
| ContactAdapter | business-logic | 1 | 53 |
| ContactAddress | business-logic | 1 | 53 |
| ContactAndOrgSettings | business-logic | 1 | 53 |
| ContactInsertTests_TEST | test | 1 | 53 |
| ContactMergeSelector | business-logic | 1 | 53 |
| ContactMergeService | business-logic | 1 | 53 |
| ContactRollupsSchedulable | business-logic | 1 | 50 |
| ContactRollupsSchedulable_TEST | test | 1 | 50 |
| Contacts | business-logic | 1 | 53 |
| ContactSelector | business-logic | 1 | 53 |
| ContactService | business-logic | 1 | 53 |
| CONV_Account_Conversion_BATCH | business-logic | 19 | 53 |
| CONV_Account_Conversion_BATCH_TEST | test | 1 | 53 |
| CONV_Account_Conversion_CTRL | controller | 1 | 53 |
| CONV_Account_Conversion_CTRL_TEST | test | 1 | 53 |
| CourseEffectiveRemoveBatch | business-logic | 1 | 39 |
| CourseEffectiveRemoveBatchTest | test | 1 | 39 |
| CourseEnrollmentRepository | business-logic | 1 | 42 |
| CourseEnrollmentRepositoryTest | test | 1 | 42 |
| CourseEnrollmentService | business-logic | 1 | 42 |
| CourseEnrollmentServiceTest | test | 1 | 42 |
| CourseEnrollmentTriggerBatch | business-logic | 1 | 48 |
| CourseEnrollmentTriggerBatchTest | test | 1 | 48 |
| CourseEnrollmentTriggerHandler | business-logic | 1 | 45 |
| CourseEnrollmentTriggerHandlerTest | test | 1 | 45 |
| CourseRestComponent | business-logic | 1 | 42 |
| CourseRestComponentTest | test | 1 | 44 |
| CoursesEffectiveRestResource | controller | 18 | 39 |
| CoursesEnrolmentsRestComponent | business-logic | 1 | 42 |
| CoursesEnrolmentsRestComponentTest | test | 1 | 42 |
| CoursesEnrolmentsRestResource | controller | 18 | 42 |
| CoursesEnrolmentsRestResourceTest | test | 1 | 42 |
| CoursesRestResource | controller | 18 | 39 |
| CoursesRestResourceTest | test | 1 | 42 |
| CoursesUnenrollmentsRestComponent | business-logic | 1 | 47 |
| CoursesUnenrollmentsRestComponentTest | test | 1 | 48 |
| CoursesUnenrollmentsRestResource | controller | 18 | 47 |
| CoursesUnenrollmentsRestResourceTest | test | 1 | 47 |
| CreateEmailDocumentTemplateFromLwc | business-logic | 1 | 58 |
| CreateEmailDocumentTemplateFromLwcTest | test | 1 | 58 |
| CRLP_Account_AccSoftCredit_BATCH | business-logic | 1 | 53 |
| CRLP_Account_BATCH | business-logic | 1 | 53 |
| CRLP_Account_SoftCredit_BATCH | business-logic | 1 | 53 |
| CRLP_AccountSkew_AccSoftCredit_BATCH | business-logic | 1 | 53 |
| CRLP_AccountSkew_BATCH | business-logic | 1 | 53 |
| CRLP_AccountSkew_SoftCredit_BATCH | business-logic | 1 | 53 |
| CRLP_ApiExecuteRollups | business-logic | 1 | 53 |
| CRLP_ApiExecuteRollups_TEST | test | 1 | 53 |
| CRLP_ApiService | business-logic | 1 | 53 |
| CRLP_ApiService_TEST | test | 1 | 53 |
| CRLP_Batch_Base | business-logic | 1 | 53 |
| CRLP_Batch_Base_NonSkew | business-logic | 1 | 53 |
| CRLP_Batch_Base_Skew | business-logic | 1 | 53 |
| CRLP_Batch_Base_TEST | test | 1 | 53 |
| CRLP_ConfigBuilder_SVC | business-logic | 1 | 53 |
| CRLP_ConfigBuilder_TEST | test | 1 | 53 |
| CRLP_Contact_BATCH | business-logic | 1 | 53 |
| CRLP_Contact_SoftCredit_BATCH | business-logic | 1 | 53 |
| CRLP_ContactSkew_BATCH | business-logic | 1 | 53 |
| CRLP_ContactSkew_SoftCredit_BATCH | business-logic | 1 | 53 |
| CRLP_Debug_UTIL | utility | 1 | 53 |
| CRLP_DefaultConfigBuilder | business-logic | 1 | 53 |
| CRLP_DefaultConfigBuilder_SVC | business-logic | 1 | 53 |
| CRLP_DefaultConfigBuilder_TEST | test | 1 | 53 |
| CRLP_EnablementService | business-logic | 1 | 53 |
| CRLP_EnablementService_TEST | test | 1 | 53 |
| CRLP_FiscalYears | business-logic | 1 | 53 |
| CRLP_FiscalYears_TEST | test | 1 | 53 |
| CRLP_GAU_BATCH | business-logic | 1 | 53 |
| CRLP_GAU_BATCH_TEST | test | 1 | 53 |
| CRLP_Operation | business-logic | 1 | 53 |
| CRLP_Operation_SVC | business-logic | 1 | 53 |
| CRLP_Operation_TEST | test | 1 | 53 |
| CRLP_Query_SEL | business-logic | 1 | 53 |
| CRLP_Query_SEL_TEST | test | 1 | 53 |
| CRLP_RD_BATCH | business-logic | 1 | 53 |
| CRLP_RDSkew_BATCH | business-logic | 1 | 53 |
| CRLP_RecalculateBTN_CTRL | controller | 1 | 53 |
| CRLP_RecalculateBTN_TEST | test | 1 | 53 |
| CRLP_ResetRollupFieldsQueueable | business-logic | 1 | 53 |
| CRLP_ResetRollupFieldsQueueable_TEST | test | 1 | 53 |
| CRLP_Rollup | business-logic | 1 | 53 |
| CRLP_Rollup_SEL | business-logic | 1 | 53 |
| CRLP_Rollup_SEL_TEST | test | 1 | 53 |
| CRLP_Rollup_SVC | business-logic | 1 | 53 |
| CRLP_Rollup_SVC_TEST | test | 1 | 53 |
| CRLP_Rollup_TDTM | business-logic | 1 | 53 |
| CRLP_RollupAccount_SVC | business-logic | 1 | 53 |
| CRLP_RollupAccount_TEST | test | 1 | 53 |
| CRLP_RollupAccSoftCredit_SVC | business-logic | 1 | 53 |
| CRLP_RollupAccSoftCredit_TEST | test | 1 | 53 |
| CRLP_RollupBatch_SVC | business-logic | 1 | 53 |
| CRLP_RollupBatch_TEST | test | 1 | 53 |
| CRLP_RollupCMT | business-logic | 1 | 53 |
| CRLP_RollupCMT_TEST | test | 1 | 53 |
| CRLP_RollupContact_SVC | business-logic | 1 | 53 |
| CRLP_RollupContact_TEST | test | 1 | 53 |
| CRLP_RollupGAU_SVC | business-logic | 1 | 53 |
| CRLP_RollupGAU_TEST | test | 1 | 53 |
| CRLP_RollupProcessingOptions | business-logic | 1 | 53 |
| CRLP_RollupProcessor | business-logic | 1 | 53 |
| CRLP_RollupProcessor_SVC | business-logic | 1 | 53 |
| CRLP_RollupProcessor_TEST | test | 1 | 53 |
| CRLP_RollupQueryBuilder | business-logic | 1 | 53 |
| CRLP_RollupQueryBuilder_TEST | test | 1 | 53 |
| CRLP_RollupQueueable | business-logic | 1 | 53 |
| CRLP_RollupRD_SVC | business-logic | 1 | 53 |
| CRLP_RollupRecurringDonation_TEST | test | 1 | 53 |
| CRLP_RollupScheduler_TEST | test | 1 | 53 |
| CRLP_RollupSetup_CTRL | controller | 1 | 53 |
| CRLP_RollupSoftCredit_SVC | business-logic | 1 | 53 |
| CRLP_RollupSoftCredit_TEST | test | 1 | 53 |
| CRLP_RollupUI_SVC | business-logic | 1 | 53 |
| CRLP_RollupUI_TEST | test | 1 | 53 |
| CRLP_SkewDispatcher_BATCH | business-logic | 1 | 53 |
| CRLP_VRollupHandler | business-logic | 1 | 53 |
| CtrlPackageSetup | business-logic | 20 | 42 |
| CustomLookupController | controller | 1 | 59 |
| CustomLookupController_Test | test | 1 | 59 |
| CustomMetadataSelector | business-logic | 1 | 51 |
| CustomMultiselectLookupController | controller | 1 | 59 |
| CustomMultiselectLookupController_Test | test | 1 | 59 |
| CustomNotificationTypeSelector | business-logic | 1 | 53 |
| DailyIterable | business-logic | 1 | 49 |
| DailyIterable_TEST | test | 1 | 49 |
| DatabaseDml | business-logic | 1 | 62 |
| DatabaseDml_TEST | test | 1 | 62 |
| DeceasedBatch | business-logic | 1 | 53 |
| DeceasedBatch_TEST | test | 1 | 53 |
| deliverablesController | controller | 54 | 46 |
| deliverablesControllerTest | test | 38 | 46 |
| DMEPermissionsChecker | business-logic | 16 | 60 |
| DoceboUserService | business-logic | 1 | 42 |
| DocSignSignerStructure | business-logic | 23 | 48 |
| DocSignUrlHelper | utility | 53 | 48 |
| DocSignUrlHelperTest | test | 1 | 48 |
| DocSignVoidCtl | business-logic | 37 | 47 |
| DocSignVoidCtlTest | test | 1 | 47 |
| DocumentSolutionNewRecord | business-logic | 1 | 59 |
| Donation | business-logic | 1 | 53 |
| Donation_TEST | test | 1 | 53 |
| DonationDTO | business-logic | 1 | 53 |
| DonationHistoryController | controller | 1 | 53 |
| DonationHistoryController_TEST | test | 1 | 53 |
| DonationHistorySelector | business-logic | 1 | 53 |
| DonationHistoryService | business-logic | 1 | 53 |
| Donations | business-logic | 1 | 53 |
| Donations_TEST | test | 1 | 53 |
| DonationsDTO | business-logic | 1 | 53 |
| DonationSelector | business-logic | 1 | 53 |
| DonationSelector_TEST | test | 1 | 53 |
| DonationService | business-logic | 1 | 53 |
| DonationService_TEST | test | 1 | 53 |
| DonationsView | business-logic | 1 | 53 |
| DonationView | business-logic | 1 | 53 |
| ElevateAdNotificationContent | business-logic | 1 | 53 |
| ElevateAuthorizedGift_TEST | test | 1 | 53 |
| ElevateBatch | business-logic | 1 | 53 |
| ElevateBatchCapturer | business-logic | 1 | 53 |
| ElevateBatchCapturer_TEST | test | 1 | 53 |
| ElevateBatchItem | business-logic | 1 | 53 |
| ElevateBatchItemCreateResponse | business-logic | 1 | 53 |
| ElevateBatchItemType | business-logic | 1 | 53 |
| ElevateBatchResponse | business-logic | 1 | 53 |
| ElevateBatchService | business-logic | 1 | 53 |
| ElevateBatchServiceInvalidRequest | business-logic | 1 | 53 |
| ElevateBatchServiceValidRequest | business-logic | 1 | 53 |
| ElevateCreateBatchItemRequest | business-logic | 1 | 53 |
| ElevateCreateBatchItemRequestDTO | business-logic | 1 | 53 |
| ElevatePaymentMethod | business-logic | 1 | 53 |
| ElevateTransactionStatus | business-logic | 1 | 53 |
| EmailTemplateEditorHandler | business-logic | 1 | 58 |
| emailTemplateEditorHandlerTest | test | 1 | 58 |
| EP_EngagementPlans_TDTM | business-logic | 1 | 53 |
| EP_EngagementPlans_TEST | test | 1 | 53 |
| EP_EngagementPlans_UTIL | utility | 1 | 53 |
| EP_EngagementPlanTaskValidation_TDTM | business-logic | 1 | 53 |
| EP_EngagementPlanTaskValidation_TEST | test | 1 | 53 |
| EP_ManageEPTemplate_CTRL | controller | 1 | 53 |
| EP_ManageEPTemplate_CTRL_TEST | test | 1 | 53 |
| EP_Task_UTIL | utility | 1 | 53 |
| EP_TaskDependency_TDTM | business-logic | 1 | 53 |
| EP_TaskDependency_TEST | test | 1 | 53 |
| EP_TaskRollup_TDTM | business-logic | 1 | 53 |
| EP_TaskRollup_TEST | test | 1 | 53 |
| ERR_AddError_TEST | test | 1 | 53 |
| ERR_AsyncErrors | business-logic | 1 | 53 |
| ERR_AsyncErrors_SCHED | business-logic | 1 | 53 |
| ERR_AsyncErrors_TEST | test | 1 | 53 |
| ERR_ExceptionData | business-logic | 1 | 53 |
| ERR_ExceptionData_TEST | test | 1 | 53 |
| ERR_ExceptionHandler | business-logic | 1 | 53 |
| ERR_ExceptionHandler_TEST | test | 1 | 53 |
| ERR_Handler | business-logic | 1 | 53 |
| ERR_Handler_API | business-logic | 17 | 53 |
| ERR_Handler_CTRL_TEST | test | 1 | 53 |
| ERR_Handler_TEST | test | 1 | 53 |
| ERR_Log_CTRL | controller | 1 | 53 |
| ERR_Log_TEST | test | 1 | 53 |
| ERR_LogService | business-logic | 1 | 53 |
| ERR_LogService_TEST | test | 1 | 53 |
| ERR_Notifier | business-logic | 1 | 53 |
| ERR_Notifier_TEST | test | 1 | 53 |
| ERR_ParentAccountUpdater_TEST | test | 1 | 53 |
| ERR_ParentAccountUpdater2_TEST | test | 1 | 53 |
| ERR_RecordError | business-logic | 1 | 53 |
| ERR_RecordError_TEST | test | 1 | 53 |
| ErrorRecord | business-logic | 1 | 53 |
| FeatureManagement | business-logic | 1 | 48 |
| FeatureManagement_TEST | test | 1 | 48 |
| FeatureParameters | business-logic | 1 | 48 |
| FeatureParameters_TEST | test | 1 | 48 |
| fflib_Answer | business-logic | 1 | 53 |
| fflib_AnswerTest | test | 1 | 53 |
| fflib_AnyOrder | business-logic | 1 | 53 |
| fflib_AnyOrderTest | test | 1 | 53 |
| fflib_ApexMocks | business-logic | 1 | 53 |
| fflib_ApexMocksConfig | business-logic | 1 | 53 |
| fflib_ApexMocksTest | test | 1 | 53 |
| fflib_ApexMocksUtils | utility | 1 | 53 |
| fflib_ApexMocksUtilsTest | test | 1 | 53 |
| fflib_AppBinding | business-logic | 1 | 53 |
| fflib_AppBindingMetaDataModule | business-logic | 1 | 53 |
| fflib_AppBindingModule | business-logic | 1 | 53 |
| fflib_AppBindingResolver | business-logic | 1 | 53 |
| fflib_AppBindings | business-logic | 1 | 53 |
| fflib_AppBindingsSelector | business-logic | 1 | 53 |
| fflib_AppBindingType | business-logic | 1 | 53 |
| fflib_Application | business-logic | 1 | 53 |
| fflib_ApplicationTest | test | 1 | 53 |
| fflib_ArgumentCaptor | business-logic | 1 | 53 |
| fflib_ArgumentCaptorTest | test | 1 | 53 |
| fflib_ArrayUtils | utility | 1 | 53 |
| fflib_ArrayUtilsTest | test | 1 | 53 |
| fflib_ClassicUnitOfWorkFactory | business-logic | 1 | 53 |
| fflib_Comparator | business-logic | 1 | 53 |
| fflib_ComparatorTest | test | 1 | 53 |
| fflib_Criteria | business-logic | 1 | 53 |
| fflib_CriteriaTest | test | 1 | 53 |
| fflib_Dates | business-logic | 1 | 53 |
| fflib_DateTimes | business-logic | 1 | 53 |
| fflib_Decimals | business-logic | 1 | 53 |
| fflib_Doubles | business-logic | 1 | 53 |
| fflib_DynamicAppFactory | business-logic | 1 | 53 |
| fflib_DynamicDomainFactory | business-logic | 1 | 53 |
| fflib_DynamicDomainFactoryTest | test | 1 | 53 |
| fflib_DynamicSelectorFactory | business-logic | 1 | 53 |
| fflib_DynamicSelectorFactoryTest | test | 1 | 53 |
| fflib_DynamicServiceFactory | business-logic | 1 | 53 |
| fflib_DynamicServiceFactoryTest | test | 1 | 53 |
| fflib_IAppBinding | business-logic | 1 | 53 |
| fflib_IAppBindingModule | business-logic | 1 | 53 |
| fflib_IAppBindingResolver | business-logic | 1 | 53 |
| fflib_IAppBindingRouter | business-logic | 1 | 53 |
| fflib_IAppBindings | business-logic | 1 | 53 |
| fflib_IDGenerator | business-logic | 1 | 53 |
| fflib_IDGeneratorTest | test | 1 | 53 |
| fflib_IDomain | business-logic | 1 | 53 |
| fflib_IDomainConstructor | business-logic | 1 | 53 |
| fflib_IDomainFactory | business-logic | 1 | 53 |
| fflib_Ids | business-logic | 1 | 53 |
| fflib_IMatcher | business-logic | 1 | 53 |
| fflib_Inheritor | business-logic | 1 | 53 |
| fflib_InheritorTest | test | 1 | 53 |
| fflib_InOrder | business-logic | 1 | 53 |
| fflib_InOrderTest | test | 1 | 53 |
| fflib_Integers | business-logic | 1 | 53 |
| fflib_InvocationOnMock | business-logic | 1 | 53 |
| fflib_IObjects | business-logic | 1 | 53 |
| fflib_ISelectorFactory | business-logic | 1 | 53 |
| fflib_IServiceFactory | business-logic | 1 | 53 |
| fflib_ISObjectDomain | business-logic | 1 | 53 |
| fflib_ISObjects | business-logic | 1 | 53 |
| fflib_ISObjectSelector | business-logic | 1 | 53 |
| fflib_ISObjectTriggerHandler | business-logic | 1 | 53 |
| fflib_ISObjectUnitOfWork | business-logic | 1 | 53 |
| fflib_IUnitOfWorkFactory | business-logic | 1 | 53 |
| fflib_Longs | business-logic | 1 | 53 |
| fflib_Match | business-logic | 1 | 53 |
| fflib_MatcherDefinitions | business-logic | 1 | 53 |
| fflib_MatcherDefinitionsTest | test | 1 | 53 |
| fflib_MatchersReturnValue | business-logic | 1 | 53 |
| fflib_MatchTest | test | 1 | 53 |
| fflib_MethodArgValues | business-logic | 1 | 53 |
| fflib_MethodArgValuesTest | test | 1 | 53 |
| fflib_MethodCountRecorder | business-logic | 1 | 53 |
| fflib_MethodReturnValue | business-logic | 1 | 53 |
| fflib_MethodReturnValueRecorder | business-logic | 1 | 53 |
| fflib_MethodVerifier | business-logic | 1 | 53 |
| fflib_Mocks | business-logic | 1 | 53 |
| fflib_MockSObjectUtil | utility | 1 | 53 |
| fflib_MyList | business-logic | 1 | 53 |
| fflib_Objects | business-logic | 1 | 53 |
| fflib_Objects2 | business-logic | 1 | 53 |
| fflib_ObjectsTest | test | 1 | 53 |
| fflib_Operator | business-logic | 1 | 53 |
| fflib_OperatorUtils | utility | 1 | 53 |
| fflib_OperatorUtilsTest | test | 1 | 53 |
| fflib_PrimitiveDomainsTest | test | 1 | 53 |
| fflib_QualifiedMethod | business-logic | 1 | 53 |
| fflib_QualifiedMethodAndArgValues | business-logic | 1 | 53 |
| fflib_QualifiedMethodAndArgValuesTest | test | 1 | 53 |
| fflib_QualifiedMethodTest | test | 1 | 53 |
| fflib_QueryFactory | business-logic | 1 | 53 |
| fflib_QueryFactoryTest | test | 1 | 53 |
| fflib_RecordTypeId | business-logic | 1 | 53 |
| fflib_SecurityUtils | utility | 1 | 53 |
| fflib_SecurityUtilsTest | test | 1 | 53 |
| fflib_SharingMode | business-logic | 1 | 53 |
| fflib_SObjectDescribe | business-logic | 1 | 53 |
| fflib_SObjectDescribeTest | test | 1 | 53 |
| fflib_SObjectDomain | business-logic | 1 | 53 |
| fflib_SObjectDomainTest | test | 1 | 53 |
| fflib_SObjectMocks | business-logic | 1 | 53 |
| fflib_SObjects | business-logic | 1 | 53 |
| fflib_SObjects2 | business-logic | 1 | 53 |
| fflib_SObjects2Test | test | 1 | 53 |
| fflib_SObjectSelector | business-logic | 1 | 53 |
| fflib_SObjectSelectorTest | test | 1 | 53 |
| fflib_SObjectsTest | test | 1 | 53 |
| fflib_SObjectTriggerHandler | business-logic | 1 | 53 |
| fflib_SObjectUnitOfWork | business-logic | 1 | 53 |
| fflib_SObjectUnitOfWorkTest | test | 1 | 53 |
| fflib_StringBuilder | business-logic | 1 | 53 |
| fflib_StringBuilderTest | test | 1 | 53 |
| fflib_Strings | business-logic | 1 | 53 |
| fflib_StringUtils | utility | 1 | 53 |
| fflib_System | business-logic | 1 | 53 |
| fflib_SystemTest | test | 1 | 53 |
| fflib_VerificationMode | business-logic | 1 | 53 |
| FieldBucketSelector | business-logic | 1 | 53 |
| FieldBucketSelector_TEST | test | 1 | 53 |
| FieldMappings | business-logic | 1 | 52 |
| FieldMappingSelector | business-logic | 1 | 52 |
| FieldSetController | controller | 1 | 48 |
| FieldSetController_TEST | test | 1 | 48 |
| FieldSetService | business-logic | 1 | 53 |
| FieldSetService_TEST | test | 1 | 53 |
| Finder | business-logic | 1 | 48 |
| Finder_TEST | test | 1 | 48 |
| FlowPicklistConfig | business-logic | 1 | 43 |
| FlowPicklistConfigController | controller | 1 | 43 |
| FlowPicklistController | controller | 1 | 43 |
| FlowPicklistHelper | utility | 1 | 43 |
| FlowPicklistOption | business-logic | 1 | 43 |
| FlowPicklistTest | test | 1 | 43 |
| FormTitanUtils | utility | 51 | 42 |
| FormTitanUtilsTest | test | 1 | 36 |
| FT_Encryption_Util | utility | 30 | 48 |
| FT_Encryption_Util_Test | test | 1 | 48 |
| FTDocGen | business-logic | 35 | 46 |
| FTDocGenTest | test | 1 | 41 |
| GatheringDataController | controller | 1 | 59 |
| GatheringDataController_Test | test | 1 | 59 |
| GAU_TDTM | business-logic | 1 | 53 |
| GAU_TDTM_TEST | test | 1 | 53 |
| GE_GiftEntryController | controller | 1 | 53 |
| GE_GiftEntryController_TEST | test | 1 | 53 |
| GE_LookupController | controller | 1 | 53 |
| GE_LookupController_TEST | test | 1 | 53 |
| GE_PaymentServices | business-logic | 1 | 53 |
| GE_PaymentServices_TEST | test | 1 | 53 |
| GE_PaymentServicesMock | business-logic | 1 | 53 |
| GE_SettingsService | business-logic | 1 | 52 |
| GE_Template | business-logic | 1 | 53 |
| GE_Template_TEST | test | 1 | 53 |
| GenerateDocsCtl | business-logic | 10 | 41 |
| GenerateWebService | business-logic | 1 | 59 |
| GenerateWebService_Test | test | 1 | 59 |
| GenerateWebServiceForAdvancedEditor | business-logic | 1 | 59 |
| Gift | business-logic | 1 | 53 |
| Gift_Test | test | 1 | 53 |
| GiftBatch | business-logic | 1 | 53 |
| GiftBatch_TEST | test | 1 | 53 |
| GiftBatchAggregateGroupName | business-logic | 1 | 53 |
| GiftBatchDTO | business-logic | 1 | 53 |
| GiftBatches | business-logic | 1 | 53 |
| GiftBatches_TEST | test | 1 | 53 |
| GiftBatchForQueueable | business-logic | 1 | 53 |
| GiftBatchForQueueable_TEST | test | 1 | 53 |
| GiftBatchGroupedTotals | business-logic | 1 | 53 |
| GiftBatchGroupedTotals_TEST | test | 1 | 53 |
| GiftBatchId | business-logic | 1 | 53 |
| GiftBatchSelector | business-logic | 1 | 53 |
| GiftBatchService | business-logic | 1 | 53 |
| GiftBatchService_TEST | test | 1 | 53 |
| GiftBatchStatusGroup | business-logic | 1 | 53 |
| GiftBatchStatusGroup_TEST | test | 1 | 53 |
| GiftBatchTotals | business-logic | 1 | 53 |
| GiftBatchView | business-logic | 1 | 53 |
| GiftBatchView_TEST | test | 1 | 53 |
| GiftDTO | business-logic | 1 | 53 |
| GiftDTO_TEST | test | 1 | 53 |
| GiftEntryEnablement_TEST | test | 1 | 53 |
| GiftEntryEnablementService | business-logic | 1 | 53 |
| GiftEntryProcessorQueue | business-logic | 1 | 53 |
| GiftEntryProcessorQueue_TEST | test | 1 | 53 |
| GiftEntryProcessorQueueFinalizer | business-logic | 1 | 53 |
| GiftEntryProcessorQueueFinalizer_TEST | test | 1 | 53 |
| GiftId | business-logic | 1 | 53 |
| Gifts | business-logic | 1 | 53 |
| Gifts_TEST | test | 1 | 53 |
| GiftSelector | business-logic | 1 | 53 |
| GiftSelector_TEST | test | 1 | 53 |
| GiftService | business-logic | 1 | 53 |
| GiftsSelectorForProcessing | business-logic | 1 | 53 |
| GiftsSelectorForProcessing_TEST | test | 1 | 53 |
| GiftTemplate | business-logic | 1 | 53 |
| GiftView | business-logic | 1 | 53 |
| GiftView_TEST | test | 1 | 53 |
| GS_ApplicationStatusController | controller | 1 | 53 |
| GS_ApplicationStatusController_TEST | test | 1 | 53 |
| GS_ChecklistSetup | business-logic | 1 | 53 |
| GS_ChecklistSetup_TEST | test | 1 | 53 |
| GS_NonprofitTrialOrgService | business-logic | 1 | 53 |
| HH_AutoCompleteDataProvider_LCTRL | controller | 1 | 53 |
| HH_CampaignDedupe_BATCH | business-logic | 1 | 53 |
| HH_CampaignDedupeBTN_CTRL | controller | 1 | 53 |
| HH_CampaignDedupeBTN_TEST | test | 1 | 53 |
| HH_Container_LCTRL | controller | 1 | 53 |
| HH_Container_TEST | test | 1 | 53 |
| HH_HHObject_TDTM | business-logic | 1 | 53 |
| HH_HouseholdNaming_BATCH | business-logic | 1 | 53 |
| HH_HouseholdNamingSettingValidator | business-logic | 1 | 53 |
| HH_HouseholdNamingSettingValidator_TEST | test | 1 | 53 |
| HH_Households | business-logic | 1 | 53 |
| HH_Households_TDTM | business-logic | 1 | 53 |
| HH_Households_TEST | test | 1 | 53 |
| HH_INaming | business-logic | 15 | 53 |
| HH_ManageHH_CTRL | controller | 1 | 53 |
| HH_ManageHH_TEST | test | 1 | 53 |
| HH_ManageHousehold_EXT | business-logic | 33 | 53 |
| HH_NameSpec | business-logic | 1 | 53 |
| HH_NameSpec_TEST | test | 1 | 53 |
| HH_OppContactRoles_TDTM | business-logic | 1 | 53 |
| HH_OppContactRoles_TEST | test | 1 | 53 |
| HouseholdDeceasedFlag_TEST | test | 1 | 53 |
| HouseholdId | business-logic | 1 | 53 |
| HouseholdMembers | business-logic | 1 | 53 |
| HouseholdName | business-logic | 1 | 53 |
| HouseholdNaming | business-logic | 32 | 53 |
| HouseholdNaming_TEST | test | 1 | 53 |
| HouseholdNaming_TEST | test | 1 | 53 |
| HouseholdNamingExclusions_TEST | test | 1 | 53 |
| HouseholdNamingExclusionsCheckboxes | business-logic | 1 | 53 |
| HouseholdNamingExclusionsString | business-logic | 1 | 53 |
| HouseholdNamingService | business-logic | 1 | 53 |
| HouseholdNamingService_TEST | test | 1 | 53 |
| HouseholdNamingUserControlledFields | business-logic | 1 | 53 |
| HouseholdNamingUserControlledFields_TEST | test | 1 | 63 |
| Households | business-logic | 19 | 53 |
| Households | business-logic | 1 | 53 |
| Households_TEST | test | 1 | 53 |
| HouseholdSelector | business-logic | 1 | 53 |
| HouseholdService | business-logic | 1 | 53 |
| HouseholdService_TEST | test | 1 | 53 |
| HouseholdSettings | business-logic | 1 | 53 |
| HouseholdTests_TEST | test | 1 | 53 |
| IAddress | business-logic | 1 | 53 |
| IAudience | business-logic | 1 | 53 |
| IGiftBatch | business-logic | 1 | 53 |
| IHouseholdMembers | business-logic | 1 | 53 |
| IIndividualBucketAccountSelector | business-logic | 1 | 53 |
| IInstallationNotification | business-logic | 1 | 53 |
| INamingExclusions | business-logic | 1 | 53 |
| INamingExclusionsString | business-logic | 1 | 53 |
| InboundGiftBatchDTO | business-logic | 1 | 53 |
| InboundGiftDTO | business-logic | 1 | 53 |
| InboundGiftDTO_TEST | test | 1 | 53 |
| IndividualAccounts | business-logic | 19 | 53 |
| IndividualBucketAccount | business-logic | 1 | 53 |
| IndividualBucketAccountSelector | business-logic | 1 | 53 |
| IndividualBucketAccountTests_TEST | test | 1 | 53 |
| InputFieldView | business-logic | 1 | 53 |
| InstallationNotifications | business-logic | 1 | 53 |
| InstallationNotifications_TEST | test | 1 | 53 |
| InstallationNotificationsSelector | business-logic | 1 | 53 |
| InstallScript | business-logic | 1 | 62 |
| InstallScript | business-logic | 1 | 48 |
| InstallScript_TEST | test | 1 | 62 |
| InstallScript_TEST | test | 1 | 48 |
| InvalidLearningPlansCoursesDataException | business-logic | 1 | 44 |
| InvalidLearningPlansCoursesException | business-logic | 1 | 44 |
| InvalidLearningPlansEnrolmentsException | business-logic | 1 | 42 |
| InvalidLPUnenrollmentsException | business-logic | 1 | 47 |
| InvalidSessionAttendanceDataException | business-logic | 1 | 42 |
| Jwt | business-logic | 1 | 42 |
| JwtTest | test | 1 | 42 |
| LayoutHelperRest | controller | 18 | 47 |
| LayoutHelperRestTest | test | 1 | 47 |
| LD_LeadConvertOverride_CTRL | controller | 1 | 53 |
| LD_LeadConvertOverride_TEST | test | 1 | 53 |
| LearningPlanCourseTriggerHandler | business-logic | 1 | 47 |
| LearningPlanCourseTriggerHandlerTest | test | 1 | 47 |
| LearningPlanEffectiveRestResource | controller | 18 | 47 |
| LearningPlanEnrollmentRepository | business-logic | 1 | 42 |
| LearningPlanEnrollmentRepositoryTest | test | 1 | 42 |
| LearningPlanEnrollmentService | business-logic | 1 | 42 |
| LearningPlanEnrollmentServiceTest | test | 1 | 42 |
| LearningPlanEnrollmentTriggerBatch | business-logic | 1 | 58 |
| LearningPlanEnrollmentTriggerHandler | business-logic | 1 | 45 |
| LearningPlanEnrollmentTriggerHandlerTest | test | 1 | 45 |
| LearningPlanEnrolmentsRestComponentTest | test | 1 | 42 |
| LearningPlanEnrolmentsRestResourceTest | test | 1 | 42 |
| LearningPlanRestComponent | business-logic | 1 | 42 |
| LearningPlanRestComponentTest | test | 1 | 39 |
| LearningPlanRestResource | controller | 18 | 42 |
| LearningPlanRestResourceTest | test | 1 | 39 |
| LearningPlansCourseRestComponentTest | test | 1 | 44 |
| LearningPlansCoursesRestComponent | business-logic | 1 | 44 |
| LearningPlansCoursesRestEndpoint | controller | 18 | 44 |
| LearningPlansCoursesRestResource | business-logic | 1 | 44 |
| LearningPlansCoursesRestResourceTest | test | 1 | 44 |
| LearningPlansCoursesService | business-logic | 1 | 44 |
| LearningPlansEnrolmentsRestComponent | business-logic | 1 | 42 |
| LearningPlansEnrolmentsRestEndpoint | controller | 18 | 42 |
| LearningPlansEnrolmentsRestResource | business-logic | 1 | 42 |
| LearningPlansUnenrollmentsRestComponent | business-logic | 1 | 47 |
| LearningPlansUnenrollmentsRestEndpoint | controller | 18 | 47 |
| LearningPlansUnenrollmentsRestResource | business-logic | 1 | 47 |
| learnUponAPICalloutService | business-logic | 1 | 50 |
| learnUponApiSetupHelper | utility | 1 | 47 |
| learnUponApiSetupHelperTest | test | 1 | 47 |
| learnUponAPIWebService | business-logic | 22 | 47 |
| learnUponCalloutMockClass | business-logic | 1 | 47 |
| learnUponCanvasAppLifecycleClass | business-logic | 19 | 46 |
| learnUponCanvasAppLifecycleClassTest | test | 1 | 46 |
| learnUponCreateNewEnrollmentHelper | utility | 40 | 47 |
| learnUponCreateNewGroupHelper | utility | 36 | 47 |
| learnUponCreateNewLPEnrollmentHelper | utility | 42 | 47 |
| learnUponCreateNewPortalInviteHelper | utility | 44 | 47 |
| learnUponCreateNewUserHelper | utility | 62 | 47 |
| learnUponExtensionHelper | utility | 22 | 43 |
| learnUponExtensionHelperTest | test | 1 | 43 |
| learnUponInvocableMethodTest | test | 1 | 47 |
| learnUponNewGroupAssignmentHelper | utility | 36 | 47 |
| learnUponTrainingWidget | business-logic | 1 | 49 |
| LegacyHouseholdMembers | business-logic | 1 | 53 |
| LegacyHouseholdMembers_TEST | test | 1 | 53 |
| LegacyHouseholds | business-logic | 1 | 53 |
| LegacyHouseholdSelector | business-logic | 1 | 53 |
| LoadedModule | business-logic | 1 | 47 |
| LoadedModule_TEST | test | 1 | 47 |
| LPlanUnenrollmentsRestResourceTest | test | 1 | 47 |
| LPUnenrollmentsRestComponentTest | test | 1 | 48 |
| LVL_Level_TDTM | business-logic | 1 | 53 |
| LVL_LevelAssign_BATCH | business-logic | 1 | 53 |
| LVL_LevelAssign_SCHED | business-logic | 1 | 53 |
| LVL_LevelAssignBATCH_TEST | test | 1 | 53 |
| LVL_LevelEdit_CTRL | controller | 1 | 53 |
| LVL_LevelEdit_TEST | test | 1 | 53 |
| ManageHousehold_EXT | business-logic | 33 | 53 |
| ManageHousehold_EXT_TEST | test | 1 | 53 |
| Mc_fflib_ISObjectDomain | business-logic | 1 | 61 |
| Mc_fflib_ISObjectSelector | business-logic | 1 | 61 |
| Mc_fflib_QueryFactory | business-logic | 1 | 61 |
| Mc_fflib_QueryFactoryTest | test | 1 | 61 |
| Mc_fflib_SecurityUtils | utility | 1 | 61 |
| Mc_fflib_SecurityUtilsTest | test | 1 | 61 |
| Mc_fflib_SObjectDescribe | business-logic | 1 | 61 |
| Mc_fflib_SObjectDescribeTest | test | 1 | 61 |
| Mc_fflib_SObjectDomain | business-logic | 1 | 61 |
| Mc_fflib_SObjectDomainTest | test | 1 | 61 |
| Mc_fflib_SObjectSelector | business-logic | 1 | 61 |
| Mc_fflib_SObjectSelectorTest | test | 1 | 61 |
| Mc_fflib_StringBuilder | business-logic | 1 | 61 |
| McAccountSelector | business-logic | 1 | 61 |
| McAdministrationController | controller | 1 | 61 |
| McAdministrationControllerTest | test | 1 | 61 |
| McAPI | business-logic | 16 | 61 |
| McAPITest | test | 1 | 61 |
| McBillingContoller | business-logic | 1 | 61 |
| McBillingContollerTest | test | 1 | 61 |
| McCampaignBatch | business-logic | 1 | 61 |
| McCampaignBatchIterable | business-logic | 1 | 61 |
| McCampaignBatchIterator | business-logic | 1 | 61 |
| McCampaignBatchTest | test | 1 | 61 |
| McCampaignDetailController | controller | 1 | 61 |
| McCampaignDetailControllerTest | test | 1 | 61 |
| McCampaignLinkController | controller | 1 | 58 |
| McCampaignLinkControllerTest | test | 1 | 58 |
| McCampaignListController | controller | 1 | 61 |
| McCampaignSelector | business-logic | 1 | 61 |
| McClient | business-logic | 1 | 61 |
| McConfigBatch | business-logic | 1 | 61 |
| McConfigBatchIterable | business-logic | 1 | 61 |
| McConfigBatchIterator | business-logic | 1 | 61 |
| McConfigBatchTest | test | 1 | 61 |
| McConnectController | controller | 1 | 61 |
| McConnectControllerTest | test | 1 | 61 |
| McDatabaseOperation | business-logic | 1 | 61 |
| McDatabaseOperationTest | test | 1 | 61 |
| McDataWizardController | controller | 1 | 61 |
| McDataWizardControllerTest | test | 1 | 61 |
| McDataWizardPreviewController | controller | 1 | 62 |
| McDataWizardPreviewControllerTest | test | 1 | 62 |
| McDMLQueue | business-logic | 1 | 61 |
| McDMLQueueTest | test | 1 | 61 |
| McEmailActivityBatch | business-logic | 1 | 61 |
| McEmailActivityBatchIterable | business-logic | 1 | 61 |
| McEmailActivityBatchIterator | business-logic | 1 | 61 |
| McEmailActivityBatchTest | test | 1 | 61 |
| McEmailActivitySelector | business-logic | 1 | 61 |
| McEmailOptOutBatch | business-logic | 1 | 61 |
| McEmailOptOutBatchTest | test | 1 | 61 |
| McEncoder | business-logic | 1 | 61 |
| McEncoderTest | test | 1 | 61 |
| McESAPI | business-logic | 1 | 61 |
| McException | business-logic | 1 | 61 |
| McExceptionTest | test | 1 | 61 |
| McFeature | business-logic | 1 | 61 |
| McFeatureTest | test | 1 | 61 |
| McFilterException | business-logic | 1 | 63 |
| McGroupBatch | business-logic | 1 | 61 |
| McGroupBatchTest | test | 1 | 61 |
| McGroupCategorySelector | business-logic | 1 | 61 |
| McGroupController | controller | 1 | 61 |
| McGroupControllerTest | test | 1 | 61 |
| McGroupSelector | business-logic | 1 | 61 |
| McHelpController | controller | 1 | 61 |
| McHelpControllerTest | test | 1 | 61 |
| McImportScheduler | business-logic | 1 | 61 |
| McImportSchedulerTest | test | 1 | 61 |
| McImportSelector | business-logic | 1 | 61 |
| McInstall | business-logic | 1 | 61 |
| McInstallTest | test | 1 | 61 |
| McInvocableMembers | business-logic | 46 | 61 |
| McInvocableMembersTest | test | 1 | 61 |
| McInvocableTags | business-logic | 44 | 61 |
| McInvocableTagsTest | test | 1 | 61 |
| McLeadTriggerHandler | business-logic | 1 | 61 |
| McLeadTriggerTest | test | 1 | 61 |
| McLicence | business-logic | 1 | 61 |
| McLicenceSchedule | business-logic | 16 | 61 |
| McLicenceTest | test | 1 | 61 |
| McListController | controller | 1 | 61 |
| McListHistoryBatch | business-logic | 1 | 61 |
| McListHistoryBatchTest | test | 1 | 61 |
| McListHistorySelector | business-logic | 1 | 61 |
| McListHomeController | controller | 1 | 61 |
| McListHomeControllerTest | test | 1 | 61 |
| McListMembersController | controller | 1 | 61 |
| McListMembersControllerTest | test | 1 | 61 |
| McListSelector | business-logic | 1 | 61 |
| McListTabController | controller | 1 | 61 |
| McLookupController | controller | 1 | 61 |
| McLookupControllerTest | test | 1 | 61 |
| McMaintenanceController | controller | 1 | 61 |
| McMaintenanceControllerTest | test | 1 | 61 |
| McMaintenanceEventTriggerTest | test | 1 | 61 |
| McMaintenanceSelector | business-logic | 1 | 61 |
| McMaintenanceUtil | utility | 1 | 61 |
| McMaintenanceUtilTest | test | 1 | 61 |
| McMappingsController | controller | 1 | 61 |
| McMappingsControllerTest | test | 1 | 61 |
| McMemberActivityController | controller | 1 | 61 |
| McMemberActivityControllerTest | test | 1 | 61 |
| McMemberActivityGroup | business-logic | 1 | 61 |
| McMemberActivityModel | business-logic | 1 | 61 |
| McMemberAuditController | controller | 1 | 61 |
| McMemberAuditControllerTest | test | 1 | 61 |
| McMemberBatch | business-logic | 1 | 61 |
| McMemberBatchIterable | business-logic | 1 | 61 |
| McMemberBatchIterator | business-logic | 1 | 61 |
| McMemberBatchTest | test | 1 | 61 |
| McMemberController | controller | 1 | 61 |
| McMemberControllerTest | test | 1 | 61 |
| McMemberCountBatch | business-logic | 1 | 61 |
| McMemberCountBatchTest | test | 1 | 61 |
| McMemberDetailController | controller | 1 | 61 |
| McMemberDetailControllerTest | test | 1 | 61 |
| McMemberSelector | business-logic | 1 | 61 |
| McMemberTriggerHandler | business-logic | 1 | 61 |
| McMemberTriggerHandlerTest | test | 1 | 61 |
| McMessageBannerController | controller | 1 | 61 |
| McMetadataService | business-logic | 1 | 61 |
| McMetadataServiceTest | test | 1 | 61 |
| McModel | business-logic | 1 | 61 |
| McModelExt | business-logic | 1 | 61 |
| McNotificationQueueable | business-logic | 1 | 61 |
| McNotificationQueueableTest | test | 1 | 61 |
| McPageLayout | business-logic | 1 | 61 |
| McPreviewController | controller | 1 | 61 |
| McPreviewControllerTest | test | 1 | 61 |
| McPrimarySyncSchedule | business-logic | 1 | 61 |
| McProcess | business-logic | 1 | 61 |
| McProcessAsyncRecords | business-logic | 1 | 61 |
| McProcessAsyncRecordsBatch | business-logic | 1 | 61 |
| McProcessAsyncRecordsTest | test | 1 | 61 |
| McProcessBatch | business-logic | 1 | 61 |
| McProgressController | controller | 1 | 61 |
| McProgressControllerTest | test | 1 | 61 |
| McReportController | controller | 1 | 61 |
| McReportControllerTest | test | 1 | 61 |
| McRuleBatch | business-logic | 1 | 61 |
| McRuleBatchTest | test | 1 | 61 |
| McRuleFilterController | controller | 1 | 58 |
| McRuleFilterControllerTest | test | 1 | 59 |
| McSandboxPostCopy | business-logic | 16 | 61 |
| McSandboxPostCopyTest | test | 1 | 61 |
| McSecuritySettingsController | controller | 1 | 61 |
| McSecuritySettingsControllerTest | test | 1 | 61 |
| McSFDCClient | business-logic | 1 | 61 |
| McSFDCClientMock | business-logic | 1 | 61 |
| McSFDCClientTest | test | 1 | 61 |
| McSFDCEncoder | business-logic | 1 | 61 |
| McSFDCEncoderTest | test | 1 | 61 |
| McSyncSettingsController | controller | 1 | 61 |
| McSyncSettingsControllerTest | test | 1 | 61 |
| McSystemUtil | utility | 1 | 61 |
| McSystemUtilTest | test | 1 | 61 |
| McTagController | controller | 1 | 61 |
| McTestDataFactory | business-logic | 1 | 61 |
| McTimezoneController | controller | 1 | 61 |
| McTimezoneControllerTest | test | 1 | 61 |
| McTrailheadUtil | utility | 1 | 61 |
| McTrailheadUtilTest | test | 1 | 61 |
| McTriggerAsyncHandler | business-logic | 1 | 61 |
| McUserSelector | business-logic | 1 | 61 |
| McUserSelectorTest | test | 1 | 61 |
| McWizardReportBatch | business-logic | 1 | 61 |
| McWizardReportBatchTest | test | 1 | 61 |
| McWizardSoqlBatch | business-logic | 1 | 61 |
| McWizardSoqlBatchTest | test | 1 | 61 |
| MetadataService | business-logic | 1 | 38 |
| MetadataService | business-logic | 1 | 58 |
| MetadataServiceTest | test | 1 | 38 |
| MetadataServiceTest | test | 1 | 58 |
| MockAudienceImpl | business-logic | 1 | 53 |
| Module | business-logic | 1 | 47 |
| Module_TEST | test | 1 | 47 |
| ModuleLoader | business-logic | 1 | 47 |
| ModuleLoader_TEST | test | 1 | 47 |
| ModuleSelector | business-logic | 1 | 47 |
| ModuleSelector_TEST | test | 1 | 47 |
| Money | business-logic | 1 | 53 |
| MonthlyIterable | business-logic | 1 | 49 |
| MonthlyIterable_TEST | test | 1 | 49 |
| MTCH_FindGifts_CTRL | controller | 1 | 53 |
| MTCH_FindGifts_TEST | test | 1 | 53 |
| MTCH_Opportunity_TDTM | business-logic | 1 | 53 |
| MTCH_Opportunity_TEST | test | 1 | 53 |
| NamingExclusions | business-logic | 1 | 53 |
| NotificationActionsStructure | business-logic | 21 | 49 |
| NPSP_Address | business-logic | 1 | 53 |
| NPSP_Contact | business-logic | 1 | 53 |
| NPSP_Contact_TEST | test | 1 | 53 |
| NPSP_Household | business-logic | 1 | 53 |
| NPSP_HouseholdAccount | business-logic | 1 | 53 |
| NPSPPkgVersionCheck | business-logic | 13 | 53 |
| NPSPPkgVersionCheck | business-logic | 13 | 53 |
| ObjectType | business-logic | 1 | 43 |
| OPP_AccountSoftCredit_TDTM | business-logic | 1 | 53 |
| OPP_AutomatedSoftCreditsService | business-logic | 1 | 53 |
| OPP_AutomatedSoftCreditsService_TEST | test | 1 | 53 |
| OPP_CampaignMember_TDTM | business-logic | 1 | 53 |
| OPP_CampaignMember_TEST | test | 1 | 53 |
| OPP_CascadeDeleteLookups_TDTM | business-logic | 1 | 53 |
| OPP_CascadeDeleteLookups_TEST | test | 1 | 53 |
| OPP_CurrencySync_TEST | test | 1 | 53 |
| OPP_INaming | business-logic | 1 | 53 |
| OPP_MatchingDonationsBTN_CTRL | controller | 1 | 53 |
| OPP_MatchingDonationsBTN_TEST | test | 1 | 53 |
| OPP_OpportunityContactRoles_TDTM | business-logic | 1 | 53 |
| OPP_OpportunityContactRoles_TEST | test | 1 | 53 |
| OPP_OpportunityNaming | business-logic | 1 | 53 |
| OPP_OpportunityNaming_BATCH | business-logic | 1 | 53 |
| OPP_OpportunityNaming_BATCH_TEST | test | 1 | 53 |
| OPP_OpportunityNaming_TEST | test | 1 | 53 |
| OPP_OpportunityNamingBTN_CTRL | controller | 1 | 53 |
| OPP_PrimaryContact_BATCH | business-logic | 1 | 53 |
| OPP_PrimaryContact_TEST | test | 1 | 53 |
| OPP_PrimaryContactRoleMerge | business-logic | 1 | 53 |
| OPP_PrimaryContactRoleMerge_BATCH | business-logic | 1 | 53 |
| OPP_PrimaryContactRoleMerge_TEST | test | 1 | 53 |
| OPP_SendAcknowledgmentBTN_CTRL | controller | 1 | 53 |
| OPP_SendAcknowledgmentBTN_TEST | test | 1 | 53 |
| OPP_StageMappingCMT | business-logic | 1 | 53 |
| OPP_StageMappingCMT_TEST | test | 1 | 53 |
| OPP_StageMappingUtil | utility | 1 | 53 |
| OPP_StageMappingUtil_TEST | test | 1 | 53 |
| OpportunityRollups | business-logic | 13 | 53 |
| OpportunitySelector | business-logic | 1 | 55 |
| OpportunitySelector_TEST | test | 1 | 55 |
| OrganizationAccountTests_TEST | test | 1 | 53 |
| OrganizationSelector | business-logic | 1 | 53 |
| OrgConfig | business-logic | 1 | 53 |
| PageControllerBase | business-logic | 15 | 62 |
| PaymentSelector | business-logic | 1 | 54 |
| PaymentSelector_TEST | test | 1 | 54 |
| PaymentServicesConfigurationSelector | business-logic | 1 | 53 |
| PermissionValidator | business-logic | 1 | 49 |
| PermissionValidator_TEST | test | 1 | 50 |
| PicklistField | business-logic | 1 | 43 |
| PicklistOptionView | business-logic | 1 | 53 |
| PMT_CascadeDeleteLookups_TDTM | business-logic | 1 | 53 |
| PMT_CascadeDeleteLookups_TEST | test | 1 | 53 |
| PMT_Payment_TDTM | business-logic | 1 | 53 |
| PMT_Payment_TEST | test | 1 | 53 |
| PMT_PaymentCreator | business-logic | 1 | 53 |
| PMT_PaymentCreator_BATCH | business-logic | 1 | 53 |
| PMT_PaymentCreator_TEST | test | 1 | 53 |
| PMT_PaymentWizard_CTRL | controller | 1 | 53 |
| PMT_PaymentWizard_TEST | test | 1 | 53 |
| PMT_RefundController | controller | 1 | 54 |
| PMT_RefundController_TEST | test | 1 | 54 |
| PMT_RefundService | business-logic | 1 | 54 |
| PMT_RefundService_TEST | test | 1 | 54 |
| PMT_ValidationService | business-logic | 1 | 54 |
| PMT_ValidationService_TEST | test | 1 | 54 |
| PotentialDuplicates | business-logic | 1 | 59 |
| PotentialDuplicates_TEST | test | 1 | 59 |
| ProgramController | controller | 1 | 53 |
| ProgramController_TEST | test | 1 | 53 |
| ProgramEngagementRollupsSchedulable | business-logic | 1 | 50 |
| ProgramEngagementRollupsSchedulable_TEST | test | 1 | 50 |
| ProgramEngagementSelector | business-logic | 1 | 47 |
| ProgramEngagementSelector_TEST | test | 1 | 47 |
| ProgramEngagementService | business-logic | 1 | 53 |
| ProgramEngagementService_TEST | test | 1 | 53 |
| ProgramSelector | business-logic | 1 | 52 |
| ProgramSelector_TEST | test | 1 | 52 |
| ProgramService | business-logic | 1 | 47 |
| ProgramService_TEST | test | 1 | 47 |
| PS_CommitmentRequest | business-logic | 1 | 53 |
| PS_CommitmentRequest_TEST | test | 1 | 53 |
| PS_GatewayManagement | business-logic | 1 | 53 |
| PS_GatewayManagement_TEST | test | 1 | 53 |
| PS_GatewayService | business-logic | 1 | 53 |
| PS_GatewayService_TEST | test | 1 | 53 |
| PS_IntegrationService | business-logic | 16 | 53 |
| PS_IntegrationService_TEST | test | 1 | 53 |
| PS_IntegrationServiceConfig | business-logic | 1 | 53 |
| PS_IntegrationServiceConfig_TEST | test | 1 | 53 |
| PS_ProductMetadata | business-logic | 1 | 53 |
| PS_ProductMetadata_TEST | test | 1 | 53 |
| PS_Request | business-logic | 1 | 53 |
| PS_Request_TEST | test | 1 | 53 |
| PSC_ManageSoftCredits_CTRL | controller | 1 | 53 |
| PSC_ManageSoftCredits_TEST | test | 1 | 53 |
| PSC_Opportunity_TDTM | business-logic | 1 | 53 |
| PSC_PartialSoftCredit_TDTM | business-logic | 1 | 53 |
| PSC_PartialSoftCredit_TEST | test | 1 | 53 |
| PushNotification | business-logic | 25 | 49 |
| PushNotificationAdvanced | business-logic | 24 | 49 |
| PushNotificationAdvancedTest | test | 1 | 49 |
| PushNotificationStructure | business-logic | 42 | 49 |
| PushNotificationTest | test | 1 | 49 |
| QueryBuilder | business-logic | 1 | 62 |
| QueryBuilder | business-logic | 1 | 48 |
| QueryBuilder_TEST | test | 1 | 62 |
| QueryBuilder_TEST | test | 1 | 48 |
| QueryBuilderController | controller | 1 | 59 |
| QueryBuilderController_Test | test | 1 | 59 |
| QueryBuilderWrapperClass | business-logic | 1 | 59 |
| RD_AddDonationsBTN_CTRL | controller | 1 | 53 |
| RD_AddDonationsBTN_TEST | test | 1 | 53 |
| RD_BulkTests_TEST | test | 1 | 53 |
| RD_CascadeDeleteLookups_TDTM | business-logic | 1 | 53 |
| RD_CascadeDeleteLookups_TEST | test | 1 | 53 |
| RD_Constants | business-logic | 1 | 53 |
| RD_InstallScript_BATCH | business-logic | 1 | 53 |
| RD_RecurringDonations | business-logic | 1 | 53 |
| RD_RecurringDonations_BATCH | business-logic | 1 | 53 |
| RD_RecurringDonations_Opp_TDTM | business-logic | 1 | 53 |
| RD_RecurringDonations_TDTM | business-logic | 1 | 53 |
| RD_RecurringDonations_TEST | test | 1 | 53 |
| RD_RecurringDonations_TEST2 | business-logic | 1 | 53 |
| RD2_ApiService | business-logic | 1 | 53 |
| RD2_ApiService_Extended_TEST | test | 1 | 64 |
| RD2_ApiService_TEST | test | 1 | 53 |
| RD2_AppView | business-logic | 1 | 53 |
| RD2_CancelCommitmentService | business-logic | 1 | 53 |
| RD2_CancelCommitmentService_TEST | test | 1 | 53 |
| RD2_ChangeLog | business-logic | 1 | 53 |
| RD2_ChangeLog_TEST | test | 1 | 53 |
| RD2_ChangeLogController | controller | 1 | 53 |
| RD2_ChangeLogSelector | business-logic | 1 | 53 |
| RD2_ChangeLogService | business-logic | 1 | 53 |
| RD2_ChangeLogService_TEST | test | 1 | 53 |
| RD2_ChangeLogView | business-logic | 1 | 53 |
| RD2_ChangeView | business-logic | 1 | 53 |
| RD2_Commitment | business-logic | 1 | 53 |
| RD2_CommitmentService | business-logic | 1 | 55 |
| RD2_Constants | business-logic | 1 | 53 |
| RD2_CustomFieldMapper | business-logic | 1 | 53 |
| RD2_CustomFieldMapper_TEST | test | 1 | 53 |
| RD2_DatabaseService | business-logic | 1 | 53 |
| RD2_DataMigration_BATCH | business-logic | 1 | 53 |
| RD2_DataMigration_TEST | test | 1 | 53 |
| RD2_DataMigrationBase_BATCH | business-logic | 1 | 53 |
| RD2_DataMigrationDryRun_BATCH | business-logic | 1 | 53 |
| RD2_DataMigrationEnablement | business-logic | 1 | 53 |
| RD2_DataMigrationEnablement_TEST | test | 1 | 53 |
| RD2_DataMigrationMapper | business-logic | 1 | 53 |
| RD2_DataRegulationService | business-logic | 1 | 53 |
| RD2_Donor | business-logic | 1 | 53 |
| RD2_Donor_TEST | test | 1 | 53 |
| RD2_ElevateInformation_CTRL | controller | 1 | 53 |
| RD2_ElevateInformation_TEST | test | 1 | 53 |
| RD2_ElevateIntegrationService | business-logic | 1 | 53 |
| RD2_ElevateIntegrationService_TEST | test | 1 | 53 |
| RD2_EnablementDelegate_CTRL | controller | 1 | 53 |
| RD2_EnablementDelegate_TEST | test | 1 | 53 |
| RD2_EnablementService | business-logic | 1 | 53 |
| RD2_EnablementService_TEST | test | 1 | 53 |
| RD2_EntryFormController | controller | 1 | 53 |
| RD2_EntryFormController_TEST | test | 1 | 53 |
| RD2_ERecurringDonationsSelector | business-logic | 1 | 54 |
| RD2_ERecurringDonationsSelector_TEST | test | 1 | 54 |
| RD2_ETableController | controller | 1 | 54 |
| RD2_ETableController_TEST | test | 1 | 54 |
| RD2_FieldChangeView | business-logic | 1 | 53 |
| RD2_NamingService | business-logic | 1 | 53 |
| RD2_NamingService_TEST | test | 1 | 53 |
| RD2_OpportunityEvaluation_BATCH | business-logic | 1 | 53 |
| RD2_OpportunityEvaluation_TEST | test | 1 | 53 |
| RD2_OpportunityEvaluationService | business-logic | 1 | 53 |
| RD2_OpportunityEvaluationService_TEST | test | 1 | 53 |
| RD2_OpportunityMatcher | business-logic | 1 | 53 |
| RD2_OpportunityMatcher_TEST | test | 1 | 53 |
| RD2_OpportunityService | business-logic | 1 | 53 |
| RD2_OpportunityService_TEST | test | 1 | 53 |
| RD2_PauseForm_CTRL | controller | 1 | 53 |
| RD2_PauseForm_TEST | test | 1 | 53 |
| RD2_QueryService | business-logic | 1 | 53 |
| RD2_QueueableService | business-logic | 1 | 53 |
| RD2_RecordView | business-logic | 1 | 53 |
| RD2_RecurringDonation | business-logic | 1 | 53 |
| RD2_RecurringDonations_TDTM | business-logic | 1 | 53 |
| RD2_RecurringDonations_TEST | test | 1 | 53 |
| RD2_RecurringDonationsOpp_TDTM | business-logic | 1 | 53 |
| RD2_RecurringDonationsOpp_TEST | test | 1 | 53 |
| RD2_SaveRequest | business-logic | 1 | 53 |
| RD2_SaveRequestHelper | utility | 1 | 53 |
| RD2_ScheduleService | business-logic | 1 | 53 |
| RD2_ScheduleService_TEST | test | 1 | 53 |
| RD2_Settings | business-logic | 1 | 53 |
| RD2_Settings_TEST | test | 1 | 53 |
| RD2_StatusAutomationService | business-logic | 1 | 53 |
| RD2_StatusAutomationService_TEST | test | 1 | 53 |
| RD2_StatusAutomationSettings_CTRL | controller | 1 | 53 |
| RD2_StatusAutomationSettings_TEST | test | 1 | 53 |
| RD2_StatusAutomationView | business-logic | 1 | 53 |
| RD2_StatusMapper | business-logic | 1 | 53 |
| RD2_StatusMapper_TEST | test | 1 | 53 |
| RD2_StatusMappingSettings_CTRL | controller | 1 | 53 |
| RD2_StatusMappingSettings_TEST | test | 1 | 53 |
| RD2_SustainerEvaluationService | business-logic | 1 | 53 |
| RD2_SustainerEvaluationService_TEST | test | 1 | 53 |
| RD2_UpdateCommitmentBulkService | business-logic | 1 | 53 |
| RD2_UpdateCommitmentBulkService_TEST | test | 1 | 53 |
| RD2_ValidationService | business-logic | 1 | 53 |
| RD2_ValidationService_TEST | test | 1 | 53 |
| RD2_VisualizeScheduleController | controller | 1 | 53 |
| RD2_VisualizeScheduleController_TEST | test | 1 | 53 |
| RD2_YearValueProcessor | business-logic | 1 | 53 |
| RecentServiceSessionController | controller | 1 | 50 |
| RecentServiceSessionController_TEST | test | 1 | 50 |
| RecordCurrencyCode | business-logic | 1 | 53 |
| RecordTypes | business-logic | 42 | 53 |
| RecordTypes_TEST | test | 1 | 53 |
| RecurrenceRule | business-logic | 1 | 49 |
| RecurrenceRule_TEST | test | 1 | 49 |
| RecurrenceService | business-logic | 1 | 49 |
| RecurrenceService_TEST | test | 1 | 49 |
| RecurringDonations | business-logic | 13 | 53 |
| RecurringDonations_BATCH | business-logic | 22 | 53 |
| RecurringDonations_SCHED | business-logic | 16 | 53 |
| RecurringDonations_TEST | test | 1 | 53 |
| RecurringDonationsPkgVersionCheck | business-logic | 13 | 53 |
| REL_Relationships_Cm_TDTM | business-logic | 1 | 53 |
| REL_Relationships_Con_TDTM | business-logic | 1 | 53 |
| REL_Relationships_TDTM | business-logic | 1 | 53 |
| REL_Relationships_TEST | test | 1 | 53 |
| REL_RelationshipsViewer_CTRL | controller | 25 | 53 |
| REL_Utils | utility | 1 | 53 |
| Relationships_INST | business-logic | 17 | 53 |
| Relationships_INST_TEST | test | 1 | 53 |
| RelationshipSelector | business-logic | 1 | 53 |
| RelationshipsService | business-logic | 1 | 53 |
| RelationshipsTreeGrid_TEST | test | 1 | 53 |
| RelationshipsTreeGridController | controller | 1 | 53 |
| RenderEmailTemplateRest | controller | 18 | 41 |
| RenderStoredEmailTemplateRest | controller | 28 | 48 |
| ResetCustomSettingsController | controller | 1 | 50 |
| ResetCustomSettingsControllerTest | test | 1 | 50 |
| RestClassesMock | business-logic | 1 | 41 |
| RestComponentInterface | business-logic | 1 | 39 |
| RestResourceAbstract | business-logic | 1 | 42 |
| RLLP_OppAccRollup_BATCH | business-logic | 1 | 53 |
| RLLP_OppContactRollup_BATCH | business-logic | 1 | 53 |
| RLLP_OppHouseholdRollup_BATCH | business-logic | 1 | 53 |
| RLLP_OppPartialSoftCreditRollup | business-logic | 1 | 53 |
| RLLP_OppPartialSoftCreditRollup_TEST | test | 1 | 53 |
| RLLP_OppRollup | business-logic | 1 | 53 |
| RLLP_OppRollup_TDTM | business-logic | 1 | 53 |
| RLLP_OppRollup_TEST | test | 1 | 53 |
| RLLP_OppRollup_TEST2 | business-logic | 1 | 53 |
| RLLP_OppRollup_UTIL | utility | 1 | 53 |
| RLLP_OppRollupBATCH_TEST | test | 1 | 53 |
| RLLP_OppSoftCreditRollup_BATCH | business-logic | 1 | 53 |
| RollupRecord | business-logic | 1 | 51 |
| RollupRecord_TEST | test | 1 | 51 |
| RP_Constants | business-logic | 1 | 53 |
| RP_GettingStartedController | controller | 1 | 53 |
| RP_GettingStartedTest | test | 1 | 53 |
| RP_GitHubController | controller | 1 | 53 |
| RP_GitHubTest | test | 1 | 53 |
| RP_HTTPClient | business-logic | 1 | 53 |
| RP_YoutubeController | controller | 1 | 53 |
| RP_YoutubeTest | test | 1 | 53 |
| SaveErrorView | business-logic | 1 | 53 |
| SaveResultView | business-logic | 1 | 53 |
| SCHED_OppRollup | business-logic | 16 | 53 |
| SCHED_OppRollup_TEST | test | 1 | 53 |
| SelectParticipantModel | business-logic | 1 | 49 |
| SendEmailRest | controller | 18 | 41 |
| ServiceDelivery | business-logic | 1 | 51 |
| ServiceDeliveryController | controller | 1 | 47 |
| ServiceDeliveryController_TEST | test | 1 | 47 |
| ServiceDeliveryDomain | business-logic | 1 | 50 |
| ServiceDeliveryDomain_TEST | test | 1 | 50 |
| ServiceDeliveryRollupsBatch | business-logic | 1 | 51 |
| ServiceDeliveryRollupsService | business-logic | 1 | 51 |
| ServiceDeliveryRollupsService_TEST | test | 1 | 51 |
| ServiceDeliverySelector | business-logic | 1 | 51 |
| ServiceDeliverySelector_TEST | test | 1 | 50 |
| ServiceDeliveryService | business-logic | 1 | 53 |
| ServiceDeliveryService_TEST | test | 1 | 50 |
| ServiceDeliveryTriggerHandler | business-logic | 1 | 51 |
| ServiceDeliveryTriggerHandler_TEST | test | 1 | 51 |
| ServiceParticipantRollupsService | business-logic | 1 | 54 |
| ServiceParticipantRollupsService_TEST | test | 1 | 54 |
| ServiceParticipantTriggerHandler | business-logic | 1 | 54 |
| ServiceParticipantTriggerHandler_TEST | test | 1 | 54 |
| ServiceRollupsSchedulable | business-logic | 1 | 50 |
| ServiceRollupsSchedulable_TEST | test | 1 | 50 |
| ServiceScheduleCreatorController | controller | 1 | 49 |
| ServiceScheduleCreatorController_TEST | test | 1 | 49 |
| ServiceScheduleDomain | business-logic | 1 | 49 |
| ServiceScheduleDomain_TEST | test | 1 | 49 |
| ServiceScheduleModel | business-logic | 1 | 49 |
| ServiceScheduleRollupsSchedulable | business-logic | 1 | 54 |
| ServiceScheduleRollupsSchedulable_TEST | test | 1 | 54 |
| ServiceScheduleSelector | business-logic | 1 | 54 |
| ServiceScheduleSelector_TEST | test | 1 | 54 |
| ServiceScheduleService | business-logic | 1 | 53 |
| ServiceScheduleService_TEST | test | 1 | 49 |
| ServiceSelector | business-logic | 1 | 47 |
| ServiceSelector_TEST | test | 1 | 47 |
| ServiceService | business-logic | 1 | 47 |
| ServiceService_TEST | test | 1 | 47 |
| ServiceSessionDomain | business-logic | 1 | 54 |
| ServiceSessionDomain_TEST | test | 1 | 54 |
| ServiceSessionSelector | business-logic | 1 | 50 |
| ServiceSessionSelector_TEST | test | 1 | 50 |
| ServiceSessionService | business-logic | 1 | 50 |
| ServiceSessionService_TEST | test | 1 | 50 |
| ServiceSessionStatusPicklist | business-logic | 1 | 53 |
| ServiceSessionStatusPicklist_TEST | test | 1 | 53 |
| SessionRestComponentTest | test | 1 | 39 |
| SessionRestResourceTest | test | 1 | 39 |
| SessionRollupsSchedulable | business-logic | 1 | 50 |
| SessionRollupsSchedulable_TEST | test | 1 | 50 |
| SessionsEnrolmentsRestComponent | business-logic | 1 | 42 |
| SessionsEnrolmentsRestComponentTest | test | 1 | 42 |
| SessionsEnrolmentsRestEndpoint | controller | 18 | 42 |
| SessionsEnrolmentsRestResource | business-logic | 1 | 42 |
| SessionsEnrolmentsRestResourceTest | test | 1 | 42 |
| SessionsRestComponent | business-logic | 1 | 39 |
| SessionsRestResource | controller | 18 | 39 |
| SessionsService | business-logic | 1 | 42 |
| SessionsUnenrollmentsRestComponent | business-logic | 1 | 47 |
| SessionsUnenrollmentsRestEndpoint | controller | 18 | 47 |
| SessionsUnenrollmentsRestResource | business-logic | 1 | 47 |
| SessionsUnenrollmentsRestResourceTest | test | 1 | 47 |
| setupDetail_Ctrl | controller | 1 | 59 |
| SetupDetail_Ctrl_Test | test | 1 | 59 |
| SfdoInstrumentationEnum | business-logic | 1 | 53 |
| SfdoInstrumentationMock_TEST | test | 1 | 53 |
| SfdoInstrumentationService | business-logic | 1 | 53 |
| SfdoInstrumentationService_TEST | test | 1 | 53 |
| showTemplateHandlerMockClass | business-logic | 13 | 58 |
| showTemplatesHandler | business-logic | 1 | 58 |
| showTemplatesHandlerTest | test | 1 | 58 |
| SoftCredit | business-logic | 1 | 53 |
| SoftCredit_TEST | test | 1 | 53 |
| SoftCredits | business-logic | 1 | 53 |
| SoftCredits_TEST | test | 1 | 53 |
| SoftCreditsDTO | business-logic | 1 | 53 |
| SoftCreditsView | business-logic | 1 | 53 |
| SoftCreditsView_TEST | test | 1 | 53 |
| SoqlListView | business-logic | 1 | 62 |
| STG_DataBoundMultiSelect_CTRL | controller | 1 | 53 |
| STG_InstallScript | business-logic | 16 | 53 |
| STG_InstallScript_TEST | test | 1 | 53 |
| STG_InstallScript_TEST2 | business-logic | 1 | 53 |
| STG_Panel | business-logic | 1 | 53 |
| STG_PanelADDRVerification_CTRL | controller | 1 | 53 |
| STG_PanelAffiliations_CTRL | controller | 1 | 53 |
| STG_PanelAlloBatch_CTRL | controller | 1 | 53 |
| STG_PanelAllocations_CTRL | controller | 1 | 53 |
| STG_PanelBDE_CTRL | controller | 1 | 53 |
| STG_PanelContactRoles_CTRL | controller | 1 | 53 |
| STG_PanelContacts_CTRL | controller | 1 | 53 |
| STG_PanelCreatePayments_CTRL | controller | 1 | 53 |
| STG_PanelCreatePayments_CTRL_TEST | test | 1 | 53 |
| STG_PanelCustomizableRollup_CTRL | controller | 1 | 53 |
| STG_PanelDataImportAdvancedMapping_CTRL | controller | 1 | 53 |
| STG_PanelERR_CTRL | controller | 1 | 53 |
| STG_PanelErrorLog_CTRL | controller | 1 | 53 |
| STG_PanelHealthCheck_CTRL | controller | 1 | 53 |
| STG_PanelHealthCheck_TEST | test | 1 | 53 |
| STG_PanelHouseholds_CTRL | controller | 1 | 53 |
| STG_PanelHouseholds_TEST | test | 1 | 53 |
| STG_PanelLeads_CTRL | controller | 1 | 53 |
| STG_PanelLvlAssignBatch_CTRL | controller | 1 | 53 |
| STG_PanelLvlAssignBatch_CTRL_TEST | test | 1 | 53 |
| STG_PanelMakeDefaultAllocations_CTRL | controller | 1 | 53 |
| STG_PanelMakeDefaultAllocations_TEST | test | 1 | 53 |
| STG_PanelMembership_CTRL | controller | 1 | 53 |
| STG_PanelOppBatch_CTRL | controller | 1 | 53 |
| STG_PanelOppCampaignMembers_CTRL | controller | 1 | 53 |
| STG_PanelOppNaming_CTRL | controller | 1 | 53 |
| STG_PanelOppNamingBatch_CTRL | controller | 1 | 53 |
| STG_PanelOppNamingBatch_CTRL_TEST | test | 1 | 53 |
| STG_PanelOppRollups_CTRL | controller | 1 | 53 |
| STG_PanelOpps_CTRL | controller | 1 | 53 |
| STG_PanelOpps_TEST | test | 1 | 53 |
| STG_PanelPaymentMapping_CTRL | controller | 1 | 53 |
| STG_PanelPaymentMapping_CTRL_TEST | test | 1 | 53 |
| STG_PanelPrimaryContactRoleMerge_CTRL | controller | 1 | 53 |
| STG_PanelRD_CTRL | controller | 1 | 53 |
| STG_PanelRDBatch_CTRL | controller | 1 | 53 |
| STG_PanelRDBatch_CTRL_TEST | test | 1 | 53 |
| STG_PanelRDCustomFieldMapping_CTRL | controller | 1 | 53 |
| STG_PanelRDCustomInstallment_CTRL | controller | 1 | 53 |
| STG_PanelRDHealthCheck | business-logic | 1 | 53 |
| STG_PanelRDHealthCheck_TEST | test | 1 | 53 |
| STG_PanelRel_CTRL | controller | 1 | 53 |
| STG_PanelRel_CTRL_TEST | test | 1 | 53 |
| STG_PanelRelAuto_CTRL | controller | 1 | 53 |
| STG_PanelRelAuto_CTRL_TEST | test | 1 | 53 |
| STG_PanelRelReciprocal_CTRL | controller | 1 | 53 |
| STG_PanelRelReciprocal_CTRL_TEST | test | 1 | 53 |
| STG_PanelRenameHouseholds_CTRL | controller | 1 | 53 |
| STG_PanelRenameHouseholds_CTRL_TEST | test | 1 | 53 |
| STG_PanelSchedule_CTRL | controller | 1 | 53 |
| STG_PanelTDTM_CTRL | controller | 1 | 53 |
| STG_PanelUpdatePrimaryContact_CTRL | controller | 1 | 53 |
| STG_PanelUpdatePrimaryContact_CTRL_TEST | test | 1 | 53 |
| STG_PanelUserRollup_CTRL | controller | 1 | 53 |
| STG_SettingsManager_CTRL | controller | 1 | 53 |
| STG_SettingsManager_TEST | test | 1 | 53 |
| STG_SettingsService | business-logic | 1 | 53 |
| STG_UninstallScript | business-logic | 16 | 53 |
| STG_UninstallScript_TEST | test | 1 | 53 |
| Stub | business-logic | 1 | 47 |
| StubBuilder | business-logic | 1 | 51 |
| SystemAccess | business-logic | 1 | 51 |
| SystemAccess_TEST | test | 1 | 51 |
| TDTM_Config_API | business-logic | 26 | 53 |
| TDTM_Config_API_Test | test | 1 | 53 |
| TDTM_DefaultConfig | business-logic | 1 | 53 |
| TDTM_DMLgt200_TEST | test | 1 | 53 |
| TDTM_iTableDataGateway | business-logic | 1 | 53 |
| TDTM_ObjectDataGateway | business-logic | 1 | 53 |
| TDTM_ObjectDataGateway_TEST | test | 1 | 53 |
| TDTM_ProcessControl | business-logic | 1 | 53 |
| TDTM_Runnable | business-logic | 25 | 53 |
| TDTM_Runnable_TEST | test | 1 | 53 |
| TDTM_RunnableMutable | business-logic | 14 | 53 |
| TDTM_RunnableMutable_TEST | test | 1 | 53 |
| TDTM_RunnableMutableMock_TEST | test | 1 | 53 |
| TDTM_TriggerActionHelper | utility | 1 | 53 |
| TDTM_TriggerHandler | business-logic | 1 | 53 |
| TDTM_TriggerScaffolds_TEST | test | 1 | 53 |
| Telemetry | business-logic | 1 | 62 |
| Telemetry_TEST | test | 1 | 62 |
| TelemetryQueueable | business-logic | 1 | 48 |
| TelemetryQueueable_TEST | test | 1 | 48 |
| TelemetryService | business-logic | 1 | 62 |
| TelemetryService | business-logic | 1 | 48 |
| TelemetryService_TEST | test | 1 | 62 |
| TelemetryService_TEST | test | 1 | 48 |
| TempleteFieldMappingController | controller | 1 | 58 |
| TempleteFieldMappingControllerTest | test | 1 | 58 |
| TEST_ContactBuilder | test | 1 | 53 |
| TEST_OpportunityBuilder | test | 1 | 53 |
| TEST_RecurringDonationBuilder | test | 1 | 53 |
| TEST_SObjectGateway | test | 1 | 53 |
| TestDataFactory | business-logic | 1 | 47 |
| TestDataFactory | business-logic | 1 | 39 |
| Tests | business-logic | 1 | 53 |
| TestStub | business-logic | 1 | 51 |
| TestUtil | utility | 1 | 48 |
| TitanFlow | business-logic | 35 | 54 |
| TitanFlowParameters | business-logic | 17 | 54 |
| TitanFlowTest | test | 1 | 54 |
| TitanFormsLiteUrl | business-logic | 1 | 54 |
| TitanFormsLiteUrlTest | test | 1 | 54 |
| TitanSendToSlack | business-logic | 33 | 52 |
| TitanSendToSlackTest | test | 1 | 52 |
| TitanSignBulkInstantUrl | business-logic | 44 | 50 |
| TitanSignBulkInstantUrlTest | test | 1 | 50 |
| TitanSignCleanPrePopulate | business-logic | 30 | 57 |
| TitanSignInstantUrl | business-logic | 36 | 50 |
| TitanSignInstantUrlTest | test | 1 | 50 |
| TitanSignPrePopulate | business-logic | 30 | 57 |
| TitanSignPrePopulateTest | test | 1 | 57 |
| TitanSignWizardCollaboratorStructure | business-logic | 23 | 54 |
| TitanSignWizardURL | business-logic | 44 | 52 |
| TitanSignWizardURLTest | test | 1 | 52 |
| TitanSignWizardUserStructure | business-logic | 21 | 52 |
| UnitOfWork | business-logic | 1 | 53 |
| UnitOfWork_TEST | test | 1 | 53 |
| UpdateDocSolButtonUrlCtrl | controller | 1 | 59 |
| USER_InActiveUser_TDTM | business-logic | 1 | 53 |
| USER_InActiveUser_TDTM_TEST | test | 1 | 53 |
| USER_MixedDML_TEST | test | 1 | 53 |
| USER_UserService | business-logic | 1 | 53 |
| USER_UserService_TEST | test | 1 | 53 |
| UserIds | business-logic | 1 | 53 |
| UserSelector | business-logic | 1 | 53 |
| USNonElevateCustomers | business-logic | 1 | 53 |
| USNonElevateCustomers_TEST | test | 1 | 53 |
| Util | utility | 1 | 48 |
| UTIL_AbstractChunkingLDV_BATCH | business-logic | 1 | 53 |
| UTIL_AbstractChunkingLDV_BATCH_TEST | test | 1 | 53 |
| UTIL_AbstractChunkingLDV_MOCK | business-logic | 1 | 53 |
| UTIL_AbstractRollup_BATCH | business-logic | 1 | 53 |
| UTIL_AdditionalObjectData_TEST | test | 1 | 53 |
| UTIL_Address | business-logic | 1 | 53 |
| UTIL_Address_TEST | test | 1 | 53 |
| UTIL_AuraEnabledCommon | business-logic | 1 | 53 |
| UTIL_AuraEnabledCommon_TEST | test | 1 | 53 |
| UTIL_BatchJobProgress_CTRL | controller | 1 | 53 |
| UTIL_BatchJobProgress_TEST | test | 1 | 53 |
| UTIL_BatchJobService | business-logic | 1 | 53 |
| UTIL_BatchJobService_TEST | test | 1 | 53 |
| UTIL_Currency | business-logic | 1 | 53 |
| UTIL_Currency_TEST | test | 1 | 53 |
| UTIL_CurrencyCache | business-logic | 1 | 53 |
| UTIL_CurrencyCache_TEST | test | 1 | 53 |
| UTIL_CurrencyConversion | business-logic | 1 | 53 |
| UTIL_CurrencyConversion_TEST | test | 1 | 53 |
| UTIL_CustomLabel_TEST | test | 1 | 53 |
| UTIL_CustomLabel_TEST | test | 1 | 53 |
| UTIL_CustomLabel_TEST | test | 1 | 53 |
| UTIL_CustomLabel_TEST | test | 1 | 53 |
| UTIL_CustomLabel_TEST | test | 1 | 53 |
| UTIL_CustomSettings_API | business-logic | 46 | 53 |
| UTIL_CustomSettingsFacade | business-logic | 1 | 53 |
| UTIL_Debug | business-logic | 1 | 53 |
| UTIL_Describe | business-logic | 1 | 53 |
| UTIL_Describe | business-logic | 1 | 62 |
| UTIL_Describe_TEST | test | 1 | 53 |
| UTIL_Describe_TEST | test | 1 | 62 |
| UTIL_DMLService | business-logic | 1 | 53 |
| UTIL_DMLService_TEST | test | 1 | 53 |
| UTIL_DuplicateMgmt | business-logic | 1 | 54 |
| UTIL_DuplicateMgmt_TEST | test | 1 | 54 |
| UTIL_FeatureEnablement | business-logic | 1 | 53 |
| UTIL_FeatureEnablement_TEST | test | 1 | 53 |
| UTIL_FeatureManagement | business-logic | 1 | 53 |
| UTIL_FeatureManagement_TEST | test | 1 | 53 |
| UTIL_Finder | business-logic | 1 | 53 |
| UTIL_Finder_TEST | test | 1 | 53 |
| UTIL_FiscalYearInfo | business-logic | 1 | 53 |
| UTIL_FiscalYearInfo_TEST | test | 1 | 53 |
| UTIL_HtmlOutput_CTRL | controller | 1 | 53 |
| UTIL_HtmlOutput_CTRL | controller | 1 | 62 |
| UTIL_HtmlOutput_TEST | test | 1 | 53 |
| UTIL_HtmlOutput_TEST | test | 1 | 62 |
| UTIL_Http | business-logic | 1 | 53 |
| UTIL_Http_TEST | test | 1 | 53 |
| UTIL_IntegrationConfig | business-logic | 1 | 53 |
| UTIL_IntegrationConfig_TEST | test | 1 | 53 |
| UTIL_IntegrationGateway | business-logic | 1 | 53 |
| UTIL_IntegrationGateway_TEST | test | 1 | 53 |
| UTIL_IScheduled | business-logic | 11 | 53 |
| UTIL_iSoqlListViewConsumer | business-logic | 1 | 53 |
| UTIL_JavaScriptSanitizer | business-logic | 1 | 62 |
| UTIL_JavaScriptSanitizer_TEST | test | 1 | 62 |
| UTIL_JobProgress_CTRL | controller | 1 | 53 |
| UTIL_JobProgress_CTRL | controller | 1 | 62 |
| UTIL_JobProgress_CTRL_TEST | test | 1 | 53 |
| UTIL_Jwt | business-logic | 1 | 53 |
| UTIL_Jwt_TEST | test | 1 | 53 |
| UTIL_LightningComponentSupport | business-logic | 1 | 53 |
| UTIL_ListCustomSettingsFacade | business-logic | 1 | 53 |
| UTIL_MasterSchedulable | business-logic | 1 | 53 |
| UTIL_MasterSchedulableHelper | utility | 1 | 53 |
| UTIL_Namespace | business-logic | 1 | 53 |
| UTIL_Namespace_TEST | test | 1 | 53 |
| UTIL_OrderBy | business-logic | 1 | 53 |
| UTIL_OrderBy_TEST | test | 1 | 53 |
| UTIL_OrgTelemetry_BATCH | business-logic | 1 | 53 |
| UTIL_OrgTelemetry_Batch_TEST | test | 1 | 53 |
| UTIL_OrgTelemetry_SObject_BATCH | business-logic | 1 | 53 |
| UTIL_OrgTelemetry_SObject_BATCH_TEST | test | 1 | 53 |
| UTIL_OrgTelemetry_SVC | business-logic | 1 | 53 |
| UTIL_OrgTelemetry_SVC_TEST | test | 1 | 53 |
| UTIL_OrgTelemetry_TEST | test | 1 | 53 |
| UTIL_PageMessages_CTRL | controller | 1 | 53 |
| UTIL_PageMessages_CTRL | controller | 1 | 62 |
| UTIL_PerfLogger | business-logic | 1 | 53 |
| UTIL_PerfLogger_TEST | test | 1 | 53 |
| UTIL_Permissions | business-logic | 1 | 53 |
| UTIL_Permissions_TEST | test | 1 | 53 |
| UTIL_PlatformCache | business-logic | 1 | 53 |
| UTIL_Profile | business-logic | 1 | 53 |
| UTIL_Profile_TEST | test | 1 | 53 |
| UTIL_Query | business-logic | 1 | 53 |
| UTIL_Query_TEST | test | 1 | 53 |
| UTIL_RecordTypes | business-logic | 1 | 53 |
| UTIL_RecordTypes_API | business-logic | 22 | 53 |
| UTIL_RecordTypes_TEST | test | 1 | 53 |
| UTIL_RecordTypeSettingsUpdate | business-logic | 16 | 53 |
| UTIL_RecordTypeSettingsUpdate_TEST | test | 1 | 53 |
| UTIL_SalesforceID | business-logic | 1 | 53 |
| UTIL_SalesforceID_TEST | test | 1 | 53 |
| UTIL_SObject | business-logic | 1 | 53 |
| UTIL_SObject_TEST | test | 1 | 53 |
| UTIL_SoqlListView_CTRL | controller | 1 | 53 |
| UTIL_String | business-logic | 1 | 53 |
| UTIL_String_TEST | test | 1 | 53 |
| UTIL_Typeahead | business-logic | 1 | 53 |
| UTIL_Typeahead_TEST | test | 1 | 53 |
| UTIL_UnitTest | test | 1 | 62 |
| UTIL_UnitTestData_TEST | test | 1 | 53 |
| UTIL_Version_API | business-logic | 16 | 53 |
| UTIL_Where | business-logic | 1 | 53 |
| UTIL_Where_TEST | test | 1 | 53 |
| Utils | utility | 1 | 42 |
| UtilsTest | test | 1 | 42 |
| VOL_Access | business-logic | 1 | 62 |
| VOL_Access_TEST | test | 1 | 62 |
| VOL_BATCH_Recurrence | business-logic | 25 | 62 |
| VOL_BATCH_Recurrence_TEST | test | 1 | 62 |
| VOL_CTRL_BatchProgress | business-logic | 1 | 62 |
| VOL_CTRL_BatchProgress_TEST | test | 1 | 62 |
| VOL_CTRL_JobCalendar | business-logic | 94 | 62 |
| VOL_CTRL_JobCalendar_TEST | test | 1 | 62 |
| VOL_CTRL_NewAndEditVRS | business-logic | 1 | 62 |
| VOL_CTRL_NewAndEditVRS_TEST | test | 1 | 62 |
| VOL_CTRL_OpenReport | business-logic | 1 | 62 |
| VOL_CTRL_OpenReport_TEST | test | 1 | 62 |
| VOL_CTRL_PersonalSiteContactInfo | business-logic | 94 | 62 |
| VOL_CTRL_PersonalSiteContactInfo_TEST | test | 1 | 62 |
| VOL_CTRL_PersonalSiteContactLookup | business-logic | 32 | 62 |
| VOL_CTRL_PersonalSiteContactLookup_TEST | test | 1 | 62 |
| VOL_CTRL_PersonalSiteJobCalendar | business-logic | 17 | 62 |
| VOL_CTRL_PersonalSiteJobListing | business-logic | 17 | 62 |
| VOL_CTRL_PersonalSiteReportHours | business-logic | 17 | 62 |
| VOL_CTRL_PersonalSiteTemplate | business-logic | 21 | 62 |
| VOL_CTRL_PersonalSiteTemplate_TEST | test | 1 | 62 |
| VOL_CTRL_SendBulkEmail | business-logic | 1 | 62 |
| VOL_CTRL_SendBulkEmail_TEST | test | 1 | 62 |
| VOL_CTRL_VolunteersBulkEnterHours | business-logic | 1 | 62 |
| VOL_CTRL_VolunteersBulkEnterHours_TEST | test | 1 | 62 |
| VOL_CTRL_VolunteersCampaignWizard | business-logic | 1 | 62 |
| VOL_CTRL_VolunteersCampaignWizard_TEST | test | 1 | 62 |
| VOL_CTRL_VolunteersFind | business-logic | 1 | 62 |
| VOL_CTRL_VolunteersFind_TEST | test | 1 | 62 |
| VOL_CTRL_VolunteersJobListing | business-logic | 1 | 62 |
| VOL_CTRL_VolunteersJobListing_TEST | test | 1 | 62 |
| VOL_CTRL_VolunteersJobListingFS | business-logic | 1 | 62 |
| VOL_CTRL_VolunteersJobListingFS_TEST | test | 1 | 62 |
| VOL_CTRL_VolunteersReportHours | business-logic | 1 | 62 |
| VOL_CTRL_VolunteersReportHours_TEST | test | 1 | 62 |
| VOL_CTRL_VolunteersSignup | business-logic | 1 | 62 |
| VOL_CTRL_VolunteersSignup_TEST | test | 1 | 62 |
| VOL_CTRL_VolunteersSignupFS | business-logic | 1 | 62 |
| VOL_CTRL_VolunteersSignupFS_TEST | test | 1 | 62 |
| VOL_JRS | business-logic | 1 | 62 |
| VOL_JRS_TEST | test | 1 | 62 |
| VOL_SharedCode | business-logic | 1 | 62 |
| VOL_SharedCode_TEST | test | 1 | 62 |
| VOL_StateCountryPicklists | business-logic | 1 | 62 |
| VOL_StateCountryPicklists_TEST | test | 1 | 62 |
| VOL_TEST_Campaign_Trigger | test | 1 | 62 |
| VOL_TEST_VolunteerHours_Trigger | test | 1 | 62 |
| VOL_VRS | business-logic | 1 | 62 |
| VOL_VRS_TEST | test | 1 | 62 |
| WeeklyIterable | business-logic | 1 | 49 |
| WeeklyIterable_TEST | test | 1 | 49 |
