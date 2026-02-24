# Automation Inventory

> Exported: 2026-02-23T18:56:34.687Z

## Summary

| Type | Count |
|------|-------|
| Flows (active) | 32 |
| Validation Rules (active) | 47 |
| Workflow Rules | 0 |
| Apex Triggers (active) | 35 |
| Apex Classes | 1015 |
| Approval Processes (active) | 0 |

---

## A3_LaborItems

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| Installation_Type | If you choose a 'Dealer Item', then you must select an  'Installation Type'. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Prevent_Updates_when_Sold_Document | 🔒 Edit Blocked: You cannot modify this Labor & Product Item because the Sales Document status is set to “SOLD”.
🔧 To make changes, go to the Sales Document and update the status to “OPEN”. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Quantity_Cannot_Be_Zero | Quantity cannot be zero. Please enter a quantity greater than zero. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Size_Category | If you choose a 'Dealer Item', then you must select a 'Size Category'. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## Account

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| BE_Trigger001 | 1 | 53 |

---

## APXT_CongaSign__Transaction__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| apxt_transactionBefore | 1 | 62 |

---

## APXTConga4__Conga_Email_Staging__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| CleanUpRecords2 | 1 | 65 |

---

## APXTConga4__Conga_Email_Template__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| CongaEmailTemplateTrigger | 1 | 65 |

---

## APXTConga4__Conga_Merge_Query__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| CongaMergeQueryTrigger | 1 | 65 |

---

## APXTConga4__Conga_Template__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| CongaTemplateTrigger | 1 | 65 |

---

## bpmpro3__A3_LaborItems__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| bpmProA3LaborItemsTrigger | 1 | 60 |

---

## bpmpro3__Add_On_CPI__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| BpmProAddOnCPIAfterDeleteTrigger | 1 | 63 |
| BpmProAddOnCPIBeforeTrigger | 1 | 65 |
| BpmProAddOnCPIAfterTrigger | 1 | 65 |

---

## bpmpro3__CPI_AddOn_Product_Catalog__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| CPIAddOnProductCatalogTrigger | 1 | 65 |

---

## bpmpro3__CPI_Configure_Pricing_Items__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| BpmProCPI_DeleteTrigger | 1 | 63 |
| BpmProCPITrigger | 1 | 62 |

---

## bpmpro3__CPI_Preset_Product_Add_On__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| BpmProCPIPresetProductAddOnTrigger | 1 | 62 |

---

## bpmpro3__Invoice_Payment__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| bpmProInvoicePaymentTrigger | 1 | 63 |

---

## bpmpro3__LaborItem_AddOn_Junction__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| bpmProUpdateAddOnProductList | 1 | 60 |

---

## bpmpro3__Project__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| bpmProProjectTrigger | 1 | 64 |

---

## bpmpro3__Project_Stage_Assignment__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| bpmProProjectStageAssignmentTrigger | 1 | 64 |
| bpmProPSAFieldSync | 1 | 64 |

---

## bpmpro3__Project_Stage_Assignment_Team_Member__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| bpmProProjectStageAssignmentTeamMemberTrigger | 1 | 59 |

---

## bpmpro3__Project_Stage_Team_Member__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| bpmProProjectStageTeamMemberTrigger | 1 | 64 |

---

## bpmpro3__Prospect__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| ProspectTrigger | 1 | 63 |

---

## bpmpro3__Sales_Commission_Payout__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| SalesCommissionPayoutTrigger | 1 | 63 |

---

## bpmpro3__Sales_Document__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| bpmProSalesDocTrigger | 1 | 63 |

---

## bpmpro3__SalesDoc_Credit_Memo__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| BpmProCreditMemoTrigger | 1 | 64 |

---

## bpmpro3__SalesDoc_Invoice__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| bpmProSalesDocInvoiceTrigger | 1 | 62 |

---

## bpmpro3__SpecialtyItem__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| bpmProSpecialtyItemTrigger | 1 | 63 |

---

## Building_Permit_c

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| For_Permit_Applied_Date | You must enter the Permit Applied Date when a Permit Issue Date is provided. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| For_Permit_Expiration_Date | You must enter the Permit Expiration Date when a Permit Issue Date is provided. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| For_Permit_Number | You must enter the Permit Number when a Permit Issue Date is provided | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Permit_Applied_Date_when_Permit_Number | You must enter the Permit Applied Date when providing a Permit Number. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Permit_Expiration_Date_when_Permit_Numbe | You must enter the Permit Expiration Date when providing a Permit Number. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Permit_Issue_Date_when_Permit_Number | You must enter the Permit Issue Date when providing a Permit Number. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## Campaign

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| BE_Trigger701 | 1 | 53 |

---

## Case

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| BE_Trigger500 | 1 | 53 |

---

## Contact

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| BE_Trigger003 | 1 | 53 |

---

## Event

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| Account_Business_Role_Required_Field | Account Business Internal Role is a required field. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Account_Name_Required_Field | Account Name is a required field. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Account_Record_Type_Required_Field | Account Record Type is a required field. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Contact_Name_Required_Field | Contact Last Name is a required field. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| WhatId_Make_Empty | Related To should be made empty when creating new Account. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| WhoId_Make_Empty | Contact/Lead should be made empty when creating new Contact. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Contact_Email_Address_Required_Field | Email Address is a required field. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Contact_First_Name_Required_Field | Contact First Name is a required field. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| TriggerOnEvent | 160 | 63 |

---

## inov8__PMT_Project__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| BE_Triggera0z | 1 | 50 |

---

## inov8__PMT_Resource_Allocation__c

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| PMT_ResourceAllocationTrigger | 1 | 48 |

---

## Lead

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| BE_Trigger00Q | 1 | 53 |

---

## Material

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| Checkedout_Material_Quantity_Empty | If checking materials out of the inventory, you must enter QUANTITY. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Checkedout_Material_Type_Empty | If checking materials out of the inventory, you must enter TYPE OF MATERIAL. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Purchase_Material_Quantity_Empty | When entering an Inventory Purchase, you must enter QUANTITY. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Purchase_Material_Type_Empty | When entering inventory purchase, you must enter the TYPE OF MATERIAL. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## Opportunity

### Apex Triggers

| Trigger | Lines | API Version |
|---------|-------|-------------|
| BE_Trigger006 | 1 | 53 |

---

## PMT_Phase

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| Kickoff_before_deadline | Phase End Date must be after Phase Start date. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## PMT_Project

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| InitialStartDate_should_be_less | Initial End date must be after Initial Start date. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Path_to_Green_should_be_blank | Path to Green field should be used only for Late, At Risk or On Hold projects. Please use Health Comment for On Track projects | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| SOX_Comment_Blank_SOX_Impact_unchecked | SOX Comment should be blank if SOX Impact is not checked | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| SOX_comment_not_null_when_SOX_checked | SOX Comment should not be blank if SOX Impact is checked | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## PMT_Resource_Allocation

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| Hours_Cant_be_negative | Actual hours worked cannot be negative numbers | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Self_update_hours | Hours can only be self updated | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## PMT_Resource_Availability

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| Availability_cannot_be_more_than_100 | Availability must be in between 0 and 100 | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Fiscal_Year_format_as_FYXX | Fiscal Year must be in the format of FYXX | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## PMT_Setting

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| Default_Availability_btwn_1_to_100 | The default availability should be between 0 to 100 | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| RP_Years_in_advance_greater_than_0 | Resource planning years in advance should be greater than 0 | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Start_Month_between_1_and_12 | Start month for fiscal year setting should be in between 1 and 12 | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## PMT_Task

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| Task_On_hold_Reason_not_null_if_On_Hold | On Hold Reason should not be Blank if Status is 'On Hold'. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Task_start_date_less_than_end_date | End Date must be after Start Date. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## Recipient

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| Prevent_Reparent | You cannot Reparent this record. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## Sales_Document

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| Payment_Terms_Must_Equal_100 | The sum of the percentages must equal 100%. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Prevent_Sold_Status_For_Proposal_Types | You cannot mark the Sales Document as 'Sold' when the Document Type is 'Proposal' or 'Service Proposal'. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Upon_Agreement | Upon agreement cannot be greater than 100%. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Upon_Completion | Upon completion cannot be greater than 100%. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Upon_Delivery | Upon delivery cannot be greater than 100%. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## SpecialtyItem

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| Is_Vendor_Name_Blank | Please specify the Vendor. It is required when Product Lump Sum Cost is specified. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Is_Vendor_Quote_Number_Blank | Please enter the Vendor Quote Number. It is required when Product Lump Sum Cost is specified. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| Item_Cost_Not_Zero | Please enter a COST for this line item or mark it as 'Excluded' to save. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |
| No_Updates_if_Sales_Doc_Is_Sold | 🔒 Locked Item: You cannot modify a Specialty Item because the Sales Document is marked as “SOLD”.
🔓 To make changes, go to the Sales Document and change the status back to “OPEN”. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## Work_Assignment

### Validation Rules

| Rule | Error Message | Formula | Migration Target |
|------|--------------|---------|-----------------|
| Check_Coordinator_for_Scheduling | You must assign a coordinator when the schedule status is 'Awaiting Scheduling'. | `(see raw metadata XML for formula)` | Zod schema + Postgres CHECK constraint |

---

## Apex Classes (All)

| Class | Category | Lines | API Version |
|-------|----------|-------|-------------|
| Account | business-logic | 1 | 60 |
| AccountAPI | business-logic | 1 | 60 |
| AccountAPITest | test | 1 | 60 |
| AccountFieldMetadataFactory | business-logic | 1 | 65 |
| AccountFieldMetadataFactoryTEST | test | 1 | 65 |
| AccountProducts | business-logic | 1 | 60 |
| AccountProductsTest | test | 1 | 60 |
| AccountService | business-logic | 1 | 60 |
| AccountServiceTest | test | 1 | 60 |
| AccountSettings | business-logic | 1 | 60 |
| AccountSettingsTest | test | 1 | 60 |
| ActivityLoggingBehaviorController | controller | 1 | 65 |
| ActivityLoggingBehaviorControllerTEST | test | 1 | 65 |
| AddPermissionsJob | business-logic | 1 | 60 |
| AddPermissionsJobTest | test | 1 | 60 |
| AddUsersJob | business-logic | 1 | 60 |
| AddUsersJobTest | test | 1 | 60 |
| ADMAPI | business-logic | 1 | 60 |
| ADMAPIMock | business-logic | 1 | 60 |
| ADMAPITest | test | 1 | 60 |
| ADMService | business-logic | 1 | 60 |
| ADMServiceTest | test | 1 | 60 |
| Agreement | business-logic | 1 | 60 |
| AgreementApprovalWorkItem | business-logic | 1 | 60 |
| AgreementHistoryItem | business-logic | 1 | 60 |
| AgreementsController | controller | 1 | 60 |
| AgreementsControllerTest | test | 1 | 60 |
| AgreementStatus | business-logic | 1 | 60 |
| AgreementStatusTest | test | 1 | 60 |
| AgreementTest | test | 1 | 60 |
| ApexMultiPartFormUploadUtility | business-logic | 1 | 65 |
| ApexMultiPartFormUploadUtilityTEST | test | 1 | 65 |
| APIError | business-logic | 17 | 60 |
| APIErrorCode | business-logic | 29 | 60 |
| APIErrorTest | test | 1 | 60 |
| APIException | business-logic | 13 | 60 |
| APIExceptionTest | test | 1 | 60 |
| Application | business-logic | 1 | 60 |
| ApplicationAPIMock | business-logic | 1 | 60 |
| ApplicationTest | test | 1 | 60 |
| ApproveTab | business-logic | 1 | 60 |
| apxt_bulkTransactionService | business-logic | 1 | 62 |
| apxt_cancelTransaction | business-logic | 1 | 62 |
| apxt_cancelTransactionsInvocable | business-logic | 1 | 62 |
| apxt_constants | business-logic | 1 | 62 |
| apxt_contentInfo | business-logic | 1 | 62 |
| apxt_coreTransactionService | business-logic | 1 | 62 |
| apxt_genericCntlrExt | business-logic | 1 | 62 |
| apxt_permUtils | utility | 1 | 62 |
| apxt_postInstall | business-logic | 1 | 62 |
| apxt_resendTransaction | business-logic | 1 | 62 |
| apxt_restTypes | business-logic | 1 | 62 |
| apxt_sendForSignature | business-logic | 1 | 62 |
| apxt_serviceRedirect | business-logic | 1 | 62 |
| apxt_settingsService | business-logic | 1 | 62 |
| apxt_setup | business-logic | 1 | 62 |
| apxt_transactionLinkContentDoc | business-logic | 1 | 62 |
| apxt_transactionLinkSrcObject | business-logic | 1 | 62 |
| apxt_transactionService | business-logic | 1 | 62 |
| apxt_transactionServiceCallable | business-logic | 1 | 62 |
| apxt_triggerAction | business-logic | 1 | 62 |
| apxt_tst_bulkTransactionService | business-logic | 1 | 62 |
| apxt_tst_cancelTransaction | business-logic | 1 | 62 |
| apxt_tst_cancelTransactionsInvocable | business-logic | 1 | 62 |
| apxt_tst_contentInfo | business-logic | 1 | 62 |
| apxt_tst_coreTransactionService | business-logic | 1 | 62 |
| apxt_tst_generateData | business-logic | 1 | 62 |
| apxt_tst_genericCntlrExt | business-logic | 1 | 62 |
| apxt_tst_mock_TransactionDataLoader | business-logic | 1 | 62 |
| apxt_tst_permUtils | utility | 1 | 62 |
| apxt_tst_postInstall | business-logic | 1 | 62 |
| apxt_tst_resendTransaction | business-logic | 1 | 62 |
| apxt_tst_restTypes | business-logic | 1 | 62 |
| apxt_tst_sendForSignature | business-logic | 1 | 62 |
| apxt_tst_serviceRedirect | business-logic | 1 | 62 |
| apxt_tst_settingsService | business-logic | 1 | 62 |
| apxt_tst_setup | business-logic | 1 | 62 |
| apxt_tst_transactionLinkContentDoc | business-logic | 1 | 62 |
| apxt_tst_transactionLinkSrcObject | business-logic | 1 | 62 |
| apxt_tst_transactionService | business-logic | 1 | 62 |
| apxt_tst_transactionServiceCallable | business-logic | 1 | 62 |
| apxt_tst_triggerAction | business-logic | 1 | 62 |
| apxt_tst_utilities | business-logic | 1 | 62 |
| apxt_tst_validateTransactionService | business-logic | 1 | 62 |
| apxt_utilities | business-logic | 1 | 62 |
| apxt_validateTransactionService | business-logic | 1 | 62 |
| Asserts | business-logic | 1 | 60 |
| AttachmentBehaviorSettingsController | controller | 1 | 65 |
| AttachmentBehaviorSettingsControllerTEST | test | 1 | 65 |
| attachmentController | controller | 1 | 65 |
| attachmentControllerTEST | test | 1 | 65 |
| AttachmentService | business-logic | 1 | 65 |
| AttachmentServiceTEST | test | 1 | 65 |
| AuthController | controller | 1 | 60 |
| AuthControllerTest | test | 1 | 60 |
| AuthorizationMessageBuilder | business-logic | 1 | 65 |
| AuthorizationUtility | business-logic | 1 | 65 |
| AuthorizationUtilityTEST | test | 1 | 65 |
| AuthService | business-logic | 1 | 60 |
| AuthServiceTest | test | 1 | 60 |
| BackgroundModeBehaviorController | controller | 1 | 65 |
| BackgroundModeBehaviorControllerTEST | test | 1 | 65 |
| BaseController | controller | 1 | 62 |
| BaseControllerTest | test | 1 | 62 |
| BaseStepController | controller | 1 | 65 |
| BaseStepControllerTEST | test | 1 | 65 |
| BE_AutomationController | controller | 1 | 53 |
| BE_AutomationControllerTest | test | 1 | 54 |
| BE_Automationdetailshandler | business-logic | 1 | 53 |
| BE_AutomationdetailshandlerTest | test | 1 | 54 |
| BE_AutomationListViewhandler | business-logic | 1 | 53 |
| BE_ConnectorController | controller | 1 | 53 |
| BE_ConnectorControllerTest | test | 1 | 54 |
| BE_MetadataDeploy | business-logic | 1 | 54 |
| BE_MetadataDeployTest | test | 1 | 54 |
| BE_MetadataRemoveDependency | business-logic | 1 | 54 |
| BE_MetaDataService | business-logic | 1 | 54 |
| BE_MetadataServiceTest | test | 1 | 54 |
| BE_PostInstallClass | business-logic | 1 | 54 |
| BE_ProcessAutomationRecords | business-logic | 1 | 54 |
| BE_ProcessAutomationRecordsTest | test | 1 | 54 |
| BE_ProcessFailedRecords | business-logic | 1 | 54 |
| BE_QueueableCheckin | business-logic | 1 | 57 |
| BE_QueueableJob | business-logic | 1 | 54 |
| BE_QueueableJobTest | test | 1 | 54 |
| BE_Triggera0z_Test | test | 12 | 50 |
| BE_TriggerTest | test | 1 | 53 |
| BE_TriggerUtil | utility | 1 | 53 |
| BE_TriggerUtilTest | test | 1 | 54 |
| BE_UninstallClass | business-logic | 1 | 54 |
| BE_UtilityTestClass | business-logic | 1 | 54 |
| BE_WebserviceMockTest | test | 1 | 54 |
| BehaviorControllerHelper | utility | 1 | 65 |
| bpmPro_A3_C_Aggregation | business-logic | 1 | 62 |
| bpmPro_A3LaborItemsHelper | utility | 1 | 62 |
| bpmPro_A3LaborItemsHelper_Test | test | 1 | 62 |
| bpmPro_AggregateA3Records | business-logic | 1 | 62 |
| bpmPro_AggregateCRecords | business-logic | 1 | 62 |
| bpmPro_CPIAggregation | business-logic | 1 | 62 |
| bpmPro_WindowDoorCounter | business-logic | 1 | 62 |
| bpmProA3EditItemsController | controller | 1 | 62 |
| bpmProA3EditItemsControllerTest | test | 1 | 60 |
| bpmProA3LaborItemCloner | business-logic | 1 | 60 |
| bpmProA3LaborItemClonerTest | test | 1 | 60 |
| bpmProA3LaborItemsCloneConfirmation | business-logic | 1 | 60 |
| bpmProA3LaborItemsCloneConfirmationTest | test | 1 | 60 |
| bpmProA3LaborItemsTriggerTest | test | 1 | 60 |
| BpmProAddOnCPIHandler | business-logic | 1 | 62 |
| BpmProAddOnCPIHandlerTest | test | 1 | 62 |
| bpmProBuildingMaterialsExtension | business-logic | 1 | 60 |
| bpmProBuildingMaterialsExtensionTest | test | 1 | 60 |
| bpmProCommissionConsoleController | controller | 1 | 62 |
| bpmProCommissionConsoleControllerTest | test | 1 | 62 |
| bpmProCommissionPayoutManagerController | controller | 1 | 65 |
| bpmProCommissionPayoutManagerCtrlTest | test | 1 | 65 |
| bpmProCommissionService | business-logic | 1 | 62 |
| bpmProCommissionServiceTest | test | 1 | 62 |
| bpmProCompanySettingsExtension | business-logic | 1 | 60 |
| bpmProCompanySettingsExtensionTest | test | 1 | 60 |
| bpmProContactCSVParser | business-logic | 1 | 61 |
| bpmProContactCSVParserTest | test | 1 | 62 |
| bpmProConvertToLeadHandler | business-logic | 1 | 62 |
| bpmProConvertToLeadHandlerTest | test | 1 | 62 |
| bpmProCopySalesDocMarkupsToLineItems | business-logic | 1 | 62 |
| bpmProCopySalesDocMarkupsToLineItemsTest | test | 1 | 62 |
| bpmProCPIAggregationTest | test | 1 | 62 |
| BpmProCPIConfigurePricingItemsHandler | business-logic | 1 | 62 |
| BpmProCPIHandler | business-logic | 1 | 62 |
| BpmProCPIHandlerTest | test | 1 | 62 |
| BpmProCPIMigrationBatch | business-logic | 1 | 62 |
| BpmProCPIMigrationBatchTest | test | 1 | 62 |
| BpmProCPIPresetProductAddOnHandler | business-logic | 1 | 62 |
| BpmProCPIPresetProductAddOnHandlerTest | test | 1 | 62 |
| bpmProCreditMemoHandler | business-logic | 1 | 64 |
| bpmProCreditMemoHandlerTest | test | 1 | 64 |
| bpmProCSVFileUploadController | controller | 1 | 59 |
| bpmProCSVFileUploadControllerTest | test | 1 | 59 |
| bpmProDealerItemController | controller | 1 | 63 |
| bpmProDealerItemControllerTest | test | 1 | 64 |
| bpmProDealerItemLookupController | controller | 1 | 64 |
| bpmProDealSheetFlowService | business-logic | 1 | 62 |
| bpmProDealSheetFlowServiceTest | test | 1 | 62 |
| bpmProDealSheetHandler | business-logic | 1 | 62 |
| bpmProDealSheetHandlerTest | test | 1 | 62 |
| bpmProDealSheetPayoutService | business-logic | 1 | 62 |
| bpmProEmailContactSearch | business-logic | 1 | 64 |
| bpmProEmailContactSearchTest | test | 1 | 64 |
| bpmProExternalNotificationController | controller | 1 | 65 |
| bpmProExternalNotificationControllerTest | test | 1 | 65 |
| bpmProFlowExecutionTracker | business-logic | 1 | 62 |
| bpmProGetInstanceURL | business-logic | 1 | 61 |
| bpmProGetInstanceURLTest | test | 1 | 61 |
| bpmProHttpMockFactory | business-logic | 1 | 62 |
| bpmProIntermediaryController | controller | 1 | 60 |
| bpmProIntermediaryControllerTest | test | 1 | 60 |
| bpmProInvoicePaymentTriggerHandler | business-logic | 1 | 62 |
| bpmProInvoicePaymentTriggerHandlerTest | test | 1 | 62 |
| bpmProJsonParser | business-logic | 1 | 60 |
| bpmProJsonParserTest | test | 1 | 60 |
| bpmProLookupController | controller | 1 | 62 |
| bpmProLookupControllerTest | test | 1 | 62 |
| bpmProLostPSAUtility | business-logic | 1 | 62 |
| bpmProLostPSAUtilityTest | test | 1 | 64 |
| bpmProOrgInfoExtension | business-logic | 1 | 59 |
| bpmProPayoutRequest | business-logic | 1 | 62 |
| bpmProPayoutSummaryController | controller | 1 | 62 |
| bpmProPayoutSummaryControllerTest | test | 1 | 62 |
| bpmProPayoutUpdateRequest | business-logic | 1 | 62 |
| bpmProPDFPreviewController | controller | 1 | 65 |
| BpmProPresetProductsListController | controller | 1 | 62 |
| BpmProPresetProductsListControllerTest | test | 1 | 62 |
| bpmProProjectConvertToLost | business-logic | 1 | 64 |
| bpmProProjectConvertToLostTest | test | 1 | 64 |
| bpmProProjectFieldMigrationBatch | business-logic | 1 | 62 |
| bpmProProjectFieldMigrationBatchTest | test | 1 | 62 |
| bpmProProjectFieldUpdater | business-logic | 1 | 64 |
| bpmProProjectFieldUpdaterTest | test | 1 | 65 |
| bpmProProjectFinalizer | business-logic | 1 | 62 |
| bpmProProjectFinalizerTest | test | 1 | 62 |
| bpmProProjectInvoiceExtension | business-logic | 1 | 62 |
| bpmProProjectInvoiceExtensionTest | test | 1 | 62 |
| bpmProProjectInvoicePaymentConsole | business-logic | 1 | 62 |
| bpmProProjectInvoicePaymentConsoleTest | test | 1 | 62 |
| bpmProProjectRollupCalculator | business-logic | 1 | 62 |
| bpmProProjectsBoardController | controller | 1 | 64 |
| bpmProProjectsBoardControllerTest | test | 1 | 62 |
| bpmProProjectsController | controller | 1 | 60 |
| bpmProProjectsControllerTest | test | 1 | 60 |
| bpmProProjectStageFlowInvoker | business-logic | 1 | 62 |
| bpmProProjectStageSelector | business-logic | 1 | 62 |
| bpmProProjectStageSelectorTest | test | 1 | 62 |
| bpmProProjectStageTeamMemberController | controller | 1 | 59 |
| bpmProProjectStageUpdater | business-logic | 1 | 62 |
| bpmProProjectStageUpdaterTest | test | 1 | 62 |
| bpmProProjectStageViewer | business-logic | 1 | 62 |
| bpmProProjectStageViewerTest | test | 1 | 62 |
| bpmProProjectTreeController | controller | 1 | 62 |
| bpmProProjectTreeControllerTest | test | 1 | 62 |
| bpmProProjectTriggerHandler | business-logic | 1 | 64 |
| bpmProProjectTriggerHandlerTest | test | 1 | 64 |
| bpmProProspectHandler | business-logic | 1 | 62 |
| bpmProProspectHandlerTest | test | 1 | 62 |
| bpmProPSAAutoAdvanceHelper | utility | 1 | 62 |
| bpmProPSABackfillUtility | business-logic | 1 | 64 |
| bpmProPSABackfillUtilityTest | test | 1 | 64 |
| bpmProPSADateBackfillBatch | business-logic | 1 | 62 |
| bpmProPSADateBackfillBatchTest | test | 1 | 62 |
| bpmProPSADateBackfillUtility | business-logic | 1 | 64 |
| bpmProPSADateBackfillUtilityTest | test | 1 | 64 |
| bpmProPSADuplicateCleanup | business-logic | 1 | 64 |
| bpmProPSADuplicateCleanupTest | test | 1 | 64 |
| bpmProPSANotificationHandler | business-logic | 1 | 64 |
| bpmProPSANotificationHandlerTest | test | 1 | 64 |
| bpmProPSAStatusInProgressBatch | business-logic | 1 | 65 |
| bpmProPSAStatusInProgressBatchTest | test | 1 | 65 |
| bpmProPSAStatusManager | business-logic | 1 | 64 |
| bpmProPSAStatusManagerTest | test | 1 | 64 |
| bpmProPSAStatusMigrationUtility | business-logic | 1 | 62 |
| bpmProPSAStatusMigrationUtilityTest | test | 1 | 62 |
| bpmProPSAStepOrderManager | business-logic | 1 | 64 |
| bpmProPSAStepOrderManagerTest | test | 1 | 64 |
| bpmProPSAStepOrderSync | business-logic | 1 | 64 |
| bpmProPSAStepOrderSyncTest | test | 1 | 65 |
| bpmProPSATeamMemberTriggerHandler | business-logic | 1 | 59 |
| bpmProPSAValidator | business-logic | 1 | 62 |
| bpmProPSAValidatorBatch | business-logic | 1 | 62 |
| bpmProPSAValidatorBatchTest | test | 1 | 62 |
| bpmProPSAValidatorTest | test | 1 | 64 |
| bpmProPSTMAssignedTeamHandler | business-logic | 1 | 64 |
| bpmProPSTMAssignedTeamHandlerTest | test | 1 | 64 |
| bpmProQuickBooksAPI | business-logic | 1 | 62 |
| bpmProQuickBooksIntegration | business-logic | 1 | 62 |
| bpmProQuickBooksPaymentResponse | business-logic | 1 | 62 |
| bpmProQuickBooksTest | test | 1 | 62 |
| bpmProQuickBooksWrapper | business-logic | 1 | 62 |
| bpmProRecordTrailController | controller | 1 | 62 |
| bpmProRecordTrailControllerTest | test | 1 | 62 |
| bpmProRecycleBinViewerController | controller | 1 | 62 |
| bpmProRecycleBinViewerControllerTest | test | 1 | 62 |
| bpmProRefreshSalesDocuments | business-logic | 1 | 62 |
| bpmProRefreshSalesDocumentsTest | test | 1 | 62 |
| bpmProSalesCommCalculations | business-logic | 1 | 62 |
| bpmProSalesCommissionLookup | business-logic | 1 | 62 |
| bpmProSalesCommissionLookupTest | test | 1 | 62 |
| bpmProSalesDocAccountingController | controller | 1 | 64 |
| bpmProSalesDocAccountingControllerTest | test | 1 | 64 |
| bpmProSalesDocCalculator | business-logic | 1 | 62 |
| bpmProSalesDocCalculatorTest | test | 1 | 62 |
| bpmProSalesDocCallFlowPDF | business-logic | 1 | 60 |
| bpmProSalesDocCallFlowPDFTest | test | 1 | 62 |
| bpmProSalesDocClausesExtension | business-logic | 1 | 59 |
| bpmProSalesDocControllerExtension | business-logic | 1 | 62 |
| bpmProSalesDocControllerTest | test | 1 | 60 |
| bpmProSalesDocImageHelper | utility | 1 | 61 |
| bpmProSalesDocImageHelperTest | test | 1 | 62 |
| bpmProSalesDocInvoiceTriggerHandler | business-logic | 1 | 62 |
| bpmproSalesDocNavigatorController | controller | 1 | 65 |
| bpmproSalesDocNavigatorControllerTest | test | 1 | 65 |
| bpmProSalesDocTouchBatch | business-logic | 1 | 65 |
| bpmProSalesDocTouchBatchTest | test | 1 | 65 |
| bpmProSalesDocTriggerHandler | business-logic | 1 | 63 |
| bpmProSalesDocTriggerTest | test | 1 | 63 |
| bpmProSalesDocumentInvoiceController | controller | 1 | 62 |
| bpmProSalesDocumentInvoiceControllerTest | test | 1 | 62 |
| bpmProSalesDocumentPDFService | business-logic | 1 | 60 |
| bpmProSalesDocumentPDFServiceTest | test | 1 | 62 |
| bpmProSalesDocumentPSASync | business-logic | 1 | 64 |
| bpmProSalesPayoutWrapper | business-logic | 1 | 62 |
| bpmProSalesTaxReportController | controller | 1 | 64 |
| bpmProSalesTaxReportControllerTest | test | 1 | 64 |
| bpmProSendEmailQueueable | business-logic | 1 | 64 |
| bpmProSendSalesDocController | controller | 1 | 65 |
| bpmProSendSalesDocControllerTest | test | 1 | 64 |
| bpmProSendSalesDocFormatCurrency | business-logic | 1 | 64 |
| bpmProSendSalesDocFormatCurrencyTest | test | 1 | 64 |
| bpmProSendSalesDocPDF | business-logic | 1 | 63 |
| bpmProSendSalesDocPDFTest | test | 1 | 63 |
| bpmProSequenceManager | business-logic | 1 | 60 |
| bpmProSequenceManagerHandler | business-logic | 1 | 60 |
| bpmProSequenceManagerTest | test | 1 | 60 |
| bpmProSpecialtyItemHelper | utility | 1 | 62 |
| bpmProSpecialtyItemHelperTest | test | 1 | 62 |
| bpmProSpecialtyItemTriggerTest | test | 1 | 60 |
| bpmProStageNotificationEmailQueueable | business-logic | 1 | 64 |
| bpmProStageOrderManager | business-logic | 1 | 62 |
| bpmProTestDataBuilder | business-logic | 1 | 62 |
| bpmProTestDataHelper | utility | 1 | 62 |
| bpmProTestOrgInfoExtension | business-logic | 1 | 59 |
| bpmProTestSalesDocClausesExtension | business-logic | 1 | 59 |
| bpmProTreeNode | business-logic | 1 | 62 |
| bpmProUpdateAddOnProductListTest | test | 1 | 60 |
| bpmProWindowDoorCounterTest | test | 1 | 62 |
| BulkList | business-logic | 1 | 60 |
| BulkSendAPI | business-logic | 1 | 60 |
| BulkSendAPITest | test | 1 | 60 |
| BulkSendService | business-logic | 1 | 60 |
| BulkSendServiceTest | test | 1 | 60 |
| BulkUserJob | business-logic | 1 | 60 |
| BulkUserService | business-logic | 1 | 60 |
| BulkUserServiceTest | test | 1 | 60 |
| ButtonTab | business-logic | 1 | 60 |
| CaseFieldMetadataFactory | business-logic | 1 | 65 |
| CaseFieldMetadataFactoryTEST | test | 1 | 65 |
| CheckboxTab | business-logic | 1 | 60 |
| CleanUpRecords2TestClass | business-logic | 1 | 65 |
| ClearFolderConfiguration | business-logic | 1 | 60 |
| ClearFolderConfigurationTest | test | 1 | 60 |
| CLMAction | business-logic | 1 | 60 |
| CLMApexUtility | business-logic | 1 | 60 |
| CLMApexUtilityTest | test | 1 | 60 |
| CLMAPI | business-logic | 1 | 60 |
| CLMAPIMock | business-logic | 1 | 60 |
| CLMAPITest | test | 1 | 60 |
| ClmAPIV2 | business-logic | 1 | 60 |
| ClmAPIV2Test | test | 1 | 60 |
| CLMChecklist | business-logic | 1 | 60 |
| CLMChecklistTest | test | 1 | 60 |
| CLMCommunityDocLauncherController | controller | 1 | 60 |
| CLMCommunityDocLauncherControllerTest | test | 1 | 60 |
| CLMConversionStatus | business-logic | 1 | 60 |
| CLMEOSViewController | controller | 1 | 60 |
| CLMEOSViewControllerTest | test | 1 | 60 |
| CLMFolderController | controller | 1 | 60 |
| CLMFolderControllerTest | test | 1 | 60 |
| CLMFolderMappingStatus | business-logic | 1 | 60 |
| CLMIntegrationAPI | business-logic | 1 | 60 |
| CLMMapObjectController | controller | 1 | 60 |
| CLMMapObjectControllerTest | test | 1 | 60 |
| CLMObligationController | controller | 1 | 60 |
| CLMObligationControllerTest | test | 1 | 60 |
| ClmProduct | business-logic | 1 | 60 |
| CLMService | business-logic | 1 | 60 |
| CLMServiceTest | test | 1 | 60 |
| CLMTask | business-logic | 1 | 60 |
| CLMTaskController | controller | 1 | 60 |
| CLMTaskControllerTest | test | 1 | 60 |
| CLMUpsellPermissionController | controller | 1 | 60 |
| CLMUpsellPermissionControllerTest | test | 1 | 60 |
| CLMWorkflowRequest | business-logic | 1 | 58 |
| CLMWorkflowRequestTest | test | 1 | 58 |
| CodeExampleTest | test | 1 | 60 |
| CollaborationAPI | business-logic | 1 | 60 |
| CollaborationAPIMock | business-logic | 1 | 60 |
| CollaborationAPITest | test | 1 | 60 |
| Collection | business-logic | 1 | 60 |
| CollectionEditingController | controller | 1 | 65 |
| CollectionEditingControllerTEST | test | 1 | 65 |
| CollectionSelectionController | controller | 1 | 65 |
| CollectionSelectionControllerTEST | test | 1 | 65 |
| CollectionTest | test | 1 | 60 |
| ComboboxOption | business-logic | 1 | 65 |
| CommentThreadTab | business-logic | 1 | 60 |
| CompanyTab | business-logic | 1 | 60 |
| ComposerActivity | business-logic | 1 | 65 |
| ComposerButtonCreator | business-logic | 1 | 65 |
| ComposerButtonCreatorLightning | business-logic | 1 | 65 |
| ComposerButtonCreatorLightningTEST | test | 1 | 65 |
| ComposerButtonCreatorTEST | test | 1 | 65 |
| ComposerMergeModel | business-logic | 1 | 65 |
| ComposerMergeRequest | business-logic | 1 | 65 |
| ComposerMergeRequestTEST | test | 1 | 65 |
| ComposerPageController | controller | 1 | 65 |
| ComposerPageControllerTest | test | 1 | 65 |
| ComposerQMLCreatorTESTClass | business-logic | 1 | 65 |
| ComposerSaveCopy | business-logic | 1 | 65 |
| ComposerSettingsMdtProvider | business-logic | 1 | 65 |
| ComposerSettingsMdtProviderTEST | test | 1 | 65 |
| ComposerSettingsOverrider | business-logic | 1 | 65 |
| ComposerSettingsOverriderTEST | test | 1 | 65 |
| ComposerSetupController | controller | 1 | 65 |
| ComposerSetupControllerTEST | test | 1 | 65 |
| ComposerSolutionBadObjects | business-logic | 1 | 65 |
| ComposerSolutionButtonAdder | business-logic | 1 | 65 |
| ComposerSolutionButtonAdderTEST | test | 1 | 65 |
| ComposerSolutionCETAdder | business-logic | 1 | 65 |
| ComposerSolutionEditExtension | business-logic | 1 | 65 |
| ComposerSolutionExtension | business-logic | 1 | 65 |
| ComposerSolutionExtensionLightning | business-logic | 1 | 65 |
| ComposerSolutionExtensionLightningTEST | test | 1 | 65 |
| ComposerSolutionGetCongaOLogo | business-logic | 1 | 65 |
| ComposerSolutionLandingPage | business-logic | 1 | 65 |
| ComposerSolutionMergefieldHelper | utility | 1 | 65 |
| ComposerSolutionNewSolutionRecord | business-logic | 1 | 65 |
| ComposerSolutionParameterAdder | business-logic | 1 | 65 |
| ComposerSolutionQueryAdder | business-logic | 1 | 65 |
| ComposerSolutionReportAdder | business-logic | 1 | 65 |
| ComposerSolutionSampleRecordPicker | business-logic | 1 | 65 |
| ComposerSolutionTemplateAdder | business-logic | 1 | 65 |
| ComposerSolutionTESTbadobjects | business-logic | 1 | 65 |
| ComposerSolutionTESTButtonCreator | business-logic | 1 | 65 |
| ComposerSolutionTESTcetadder | business-logic | 1 | 65 |
| ComposerSolutionTESTgetcongaologo | business-logic | 1 | 65 |
| ComposerSolutionTESTmergefieldhelper | utility | 1 | 65 |
| ComposerSolutionTESTnewsolutionrecord | business-logic | 1 | 65 |
| ComposerSolutionTESTparameteradder | business-logic | 1 | 65 |
| ComposerSolutionTESTqueryadder | business-logic | 1 | 65 |
| ComposerSolutionTESTreportadder | business-logic | 1 | 65 |
| ComposerSolutionTESTsamplerecordpicker | business-logic | 1 | 65 |
| ComposerSolutionTESTsmlandingpage | business-logic | 1 | 65 |
| ComposerSolutionTESTsoleditextension | business-logic | 1 | 65 |
| ComposerSolutionTESTsolutionextension | business-logic | 1 | 65 |
| ComposerSolutionTESTtemplateadder | business-logic | 1 | 65 |
| ComposerSolutionTESTweblinkurl | business-logic | 1 | 65 |
| ComposerWeblinkURL | business-logic | 1 | 65 |
| CongaController | controller | 1 | 65 |
| CongaControllerTEST | test | 1 | 65 |
| CongaEmailTemplateModel | business-logic | 1 | 65 |
| CongaEmailTemplateModelTEST | test | 1 | 65 |
| CongaEmailTemplateProvider | business-logic | 1 | 65 |
| CongaEmailTemplateProviderTEST | test | 1 | 65 |
| CongaEmailTemplateTriggerHandler | business-logic | 1 | 65 |
| CongaEmailTemplateTriggerTEST | test | 1 | 65 |
| CongaHandledException | business-logic | 1 | 65 |
| CongaKeyGenerator | business-logic | 1 | 65 |
| CongaKeyPrefixes | business-logic | 1 | 65 |
| CongaQuery | business-logic | 1 | 65 |
| CongaQueryTriggerHandler | business-logic | 1 | 65 |
| CongaQueryTriggerTEST | test | 1 | 65 |
| CongaQueuableNotification | business-logic | 1 | 65 |
| CongaSolutionModel | business-logic | 1 | 65 |
| CongaSolutionModelTEST | test | 1 | 65 |
| congaSolutionWrapper | business-logic | 1 | 65 |
| CongaTemplateCollector | business-logic | 1 | 65 |
| CongaTemplateCollectorTEST | test | 1 | 65 |
| CongaTemplateModel | business-logic | 1 | 65 |
| CongaTemplateProvider | business-logic | 1 | 65 |
| CongaTemplateProviderTEST | test | 1 | 65 |
| CongaTemplateTriggerHandler | business-logic | 1 | 65 |
| CongaTemplateTriggerTEST | test | 1 | 65 |
| ConnectAPI | business-logic | 1 | 60 |
| ConnectAPITest | test | 1 | 60 |
| ConnectConfigurationPostInstall | business-logic | 1 | 60 |
| ConnectConfigurationPostInstallTest | test | 1 | 60 |
| ConnectService | business-logic | 1 | 60 |
| ConnectServiceTest | test | 1 | 60 |
| ContactFieldMetadataFactory | business-logic | 1 | 65 |
| ContactFieldMetadataFactoryTEST | test | 1 | 65 |
| Controller | controller | 1 | 60 |
| ControllerTest | test | 1 | 60 |
| CPIAddOnProductCatalogTriggerHandler | business-logic | 1 | 65 |
| CreateCMQMLRecord | business-logic | 1 | 65 |
| CreateEnvelopeConfigurationButtonsJob | business-logic | 1 | 60 |
| CreateEnvelopeConfigurationButtonsTest | test | 1 | 60 |
| CreateStepController | controller | 1 | 65 |
| CreateStepControllerTEST | test | 1 | 65 |
| Credentials | business-logic | 1 | 60 |
| CredentialsTest | test | 1 | 60 |
| CustomEnvelopeCreationController | controller | 1 | 60 |
| CustomEnvelopeCreationControllerTest | test | 1 | 60 |
| CustomField | business-logic | 1 | 60 |
| CustomTab | business-logic | 1 | 60 |
| DataManagementController | controller | 1 | 65 |
| DataManagementControllerTEST | test | 1 | 65 |
| DataModel | business-logic | 1 | 60 |
| DataModelTest | test | 1 | 60 |
| DataSourceLookupController | controller | 1 | 60 |
| DataSourceLookupControllerTest | test | 1 | 60 |
| DataStepController | controller | 1 | 65 |
| DataStepControllerTEST | test | 1 | 65 |
| DateSignedTab | business-logic | 1 | 60 |
| DateTab | business-logic | 1 | 60 |
| DeclineTab | business-logic | 1 | 60 |
| DecReturnFromDocuSignController | controller | 1 | 60 |
| DecReturnFromDocuSignControllerTest | test | 1 | 60 |
| DefaultDocumentResolver | business-logic | 1 | 60 |
| DefaultDocumentResolverTest | test | 1 | 60 |
| DefaultEntityResolver | business-logic | 1 | 60 |
| DefaultEntityResolverTest | test | 1 | 60 |
| DefaultRecipientResolver | business-logic | 1 | 60 |
| DefaultRecipientResolverTest | test | 1 | 60 |
| DeleteSettingsJob | business-logic | 1 | 60 |
| DeleteSettingsJobTest | test | 1 | 60 |
| Device | business-logic | 1 | 60 |
| DeviceTest | test | 1 | 60 |
| DFSConnectAPI | business-logic | 1 | 60 |
| DFSConnectAPITest | test | 1 | 60 |
| DFSDocuSignRecordsCountJob | business-logic | 1 | 60 |
| DFSDocuSignRecordsCountJobTest | test | 1 | 60 |
| DFSMigrationEnvelopeConfigurationJob | business-logic | 1 | 60 |
| DFSMigrationEnvelopeConfigurationJobTest | test | 1 | 60 |
| DFSMigrationEnvelopeJob | business-logic | 1 | 60 |
| DFSMigrationEnvelopeJobTest | test | 1 | 60 |
| DFSMigrationJob | business-logic | 1 | 60 |
| DFSMigrationService | business-logic | 1 | 60 |
| DFSMigrationServiceTest | test | 1 | 60 |
| DFSMigrationUpdateExternalIdJob | business-logic | 1 | 60 |
| DFSMigrationUpdateExternalIdJobTest | test | 1 | 60 |
| Document | business-logic | 1 | 60 |
| DocumentPreviewController | controller | 1 | 60 |
| DocumentResolver | business-logic | 1 | 60 |
| DocumentService | business-logic | 1 | 60 |
| DocumentServiceTest | test | 1 | 60 |
| DocumentTest | test | 1 | 60 |
| DocuSign | business-logic | 1 | 60 |
| DocuSignAPI | business-logic | 1 | 60 |
| DocuSignAPIMock | business-logic | 1 | 60 |
| DocuSignAuthProvider | business-logic | 1 | 60 |
| DocuSignBehaviorController | controller | 1 | 65 |
| DocuSignBehaviorControllerTEST | test | 1 | 65 |
| DocuSignBehaviorWrapper | business-logic | 1 | 65 |
| DocuSignException | business-logic | 1 | 60 |
| DocuSignRecipientWrapper | business-logic | 1 | 65 |
| DocuSignTest | test | 1 | 60 |
| DrawTab | business-logic | 1 | 60 |
| DynamicObjectSelector | business-logic | 1 | 65 |
| DynamicObjectSelectorTEST | test | 1 | 65 |
| DynamicTemplateModel | business-logic | 1 | 65 |
| DynamicTemplateSelector | business-logic | 1 | 65 |
| DynamicTemplateSelectorTEST | test | 1 | 65 |
| ElectronicSignatureProvider | business-logic | 1 | 60 |
| EmailAddressTab | business-logic | 1 | 60 |
| EmailBehaviorController | controller | 1 | 65 |
| EmailBehaviorControllerTEST | test | 1 | 65 |
| EmailBehaviorWrapper | business-logic | 1 | 65 |
| EmailPreviewController | controller | 1 | 65 |
| EmailPreviewControllerTEST | test | 1 | 65 |
| EmailTab | business-logic | 1 | 60 |
| EmailTemplateModel | business-logic | 1 | 65 |
| EmailTemplateModelTEST | test | 1 | 65 |
| Entity | business-logic | 1 | 60 |
| EntityResolver | business-logic | 1 | 60 |
| EntityTest | test | 1 | 60 |
| Envelope | business-logic | 1 | 60 |
| EnvelopeActionSummaryController | controller | 1 | 60 |
| EnvelopeActionSummaryControllerTest | test | 1 | 60 |
| EnvelopeAPI | business-logic | 1 | 60 |
| EnvelopeAPITest | test | 1 | 60 |
| EnvelopeConfiguration | business-logic | 1 | 60 |
| EnvelopeConfigurationBulkRequest | business-logic | 1 | 60 |
| EnvelopeConfigurationBulkRequestTest | test | 1 | 60 |
| EnvelopeConfigurationBulkSend | business-logic | 1 | 60 |
| EnvelopeConfigurationController | controller | 1 | 60 |
| EnvelopeConfigurationControllerTest | test | 1 | 60 |
| EnvelopeConfigurationService | business-logic | 1 | 60 |
| EnvelopeConfigurationServiceTest | test | 1 | 60 |
| EnvelopeConfigurationUpdater | business-logic | 1 | 60 |
| EnvelopeConfigurationUpdaterTest | test | 1 | 60 |
| EnvelopeIdTab | business-logic | 1 | 60 |
| EnvelopeParser | business-logic | 1 | 60 |
| EnvelopeParserTest | test | 1 | 60 |
| EnvelopeService | business-logic | 1 | 60 |
| EnvelopeServiceTest | test | 1 | 60 |
| ESAPI | business-logic | 1 | 65 |
| ESignatureAPI | business-logic | 1 | 60 |
| ESignatureAPIMock | business-logic | 1 | 60 |
| ESignatureAPITest | test | 1 | 60 |
| ESignatureBehaviorController | controller | 1 | 65 |
| ESignatureBehaviorControllerTEST | test | 1 | 65 |
| ESignatureCongaSignBehaviorController | controller | 1 | 65 |
| ESignatureCongaSignControllerTEST | test | 1 | 65 |
| ESignatureCongaSignRecipientWrapper | business-logic | 1 | 65 |
| ESignatureProduct | business-logic | 1 | 60 |
| EUAdvancedAccessCodeProvider | business-logic | 1 | 60 |
| EUAdvancedSmsProvider | business-logic | 1 | 60 |
| EventService | business-logic | 1 | 60 |
| EventServiceTest | test | 1 | 60 |
| ExpressSignatureProvider | business-logic | 1 | 60 |
| FeatureManagement | business-logic | 1 | 62 |
| FeatureManagementTest | test | 1 | 62 |
| FeatureManagementUtility | business-logic | 1 | 65 |
| FeatureManagementUtilityTEST | test | 1 | 65 |
| FieldMetadata | business-logic | 1 | 65 |
| FieldMetadataFactory | business-logic | 1 | 65 |
| FieldMetadataFactoryTEST | test | 1 | 65 |
| FieldMetadataTEST | test | 1 | 65 |
| FileController | controller | 1 | 60 |
| FileControllerTest | test | 1 | 60 |
| FileService | business-logic | 1 | 60 |
| FileServiceTest | test | 1 | 60 |
| FinishStepController | controller | 1 | 65 |
| FinishStepControllerTEST | test | 1 | 65 |
| FirstNameTab | business-logic | 1 | 60 |
| FlattenedSolutionTemplate | business-logic | 1 | 65 |
| Folder | business-logic | 1 | 60 |
| FolderAPI | business-logic | 1 | 60 |
| FolderAPITest | test | 1 | 60 |
| FormulaEvaluator | business-logic | 1 | 65 |
| FormulaEvaluatorTest | test | 1 | 65 |
| FormulaResolver | business-logic | 1 | 65 |
| FormulaResolverTEST | test | 1 | 65 |
| FormulaTab | business-logic | 1 | 60 |
| FullNameTab | business-logic | 1 | 60 |
| Gen | business-logic | 1 | 60 |
| GenAPI | business-logic | 1 | 60 |
| GenAPITest | test | 1 | 60 |
| GenAPIv1 | business-logic | 1 | 60 |
| GenAPIv1Test | test | 1 | 60 |
| GenBilling | business-logic | 1 | 50 |
| GenBillingAPI | business-logic | 1 | 60 |
| GenBillingAPITest | test | 1 | 60 |
| GenBillingService | business-logic | 1 | 60 |
| GenBillingServiceTest | test | 1 | 60 |
| GenController | controller | 1 | 60 |
| GenControllerTest | test | 1 | 60 |
| GeneratedFileBehaviorController | controller | 1 | 65 |
| GeneratedFileBehaviorControllerTEST | test | 1 | 65 |
| GeneratedFileBehaviorWrapper | business-logic | 1 | 65 |
| GenInvoiceQueueable | business-logic | 1 | 60 |
| GenInvoiceQueueableTest | test | 1 | 60 |
| GenInvoiceTriggerHandler | business-logic | 1 | 60 |
| GenInvoiceTriggerHandlerTest | test | 1 | 60 |
| GenProduct | business-logic | 1 | 60 |
| GenService | business-logic | 1 | 60 |
| GenServiceTest | test | 1 | 60 |
| GenTemplateESignUpdater | business-logic | 1 | 60 |
| GenTemplateESignUpdaterTest | test | 1 | 60 |
| GenV1 | business-logic | 1 | 60 |
| getCM8URLFromURLService | business-logic | 1 | 65 |
| HexUtil | utility | 1 | 54 |
| HistoryAPI | business-logic | 1 | 60 |
| HistoryAPITest | test | 1 | 60 |
| HttpCalloutClass | business-logic | 1 | 65 |
| HttpCalloutClassTest | test | 1 | 65 |
| IcpBrasilProvider | business-logic | 1 | 60 |
| IDNowProvider | business-logic | 1 | 60 |
| InitialHereTab | business-logic | 1 | 60 |
| InvocableDocumentGenerationJob | business-logic | 1 | 60 |
| InvocableDocumentGenerationRequest | business-logic | 1 | 60 |
| InvocableDocumentGenerationRequestTest | test | 1 | 60 |
| InvocableGenAndSendJob | business-logic | 1 | 60 |
| ITAgileProvider | business-logic | 1 | 60 |
| ITrigger | business-logic | 1 | 65 |
| JobMock | business-logic | 1 | 60 |
| JobTest | test | 1 | 60 |
| KazmonLoggerController | controller | 1 | 60 |
| KazmonLoggerControllerTest | test | 1 | 60 |
| KeyValue | business-logic | 1 | 65 |
| LastNameTab | business-logic | 1 | 60 |
| Layout | business-logic | 1 | 60 |
| LightningConnectedAppSettingMdtProvider | business-logic | 1 | 65 |
| lightningTableWrapper | business-logic | 1 | 65 |
| LimitedAccessToken | business-logic | 1 | 60 |
| LinkConfigurationBehaviorController | controller | 1 | 65 |
| LinkConfigurationBehaviorControllerTEST | test | 1 | 65 |
| ListTab | business-logic | 1 | 60 |
| Locale | business-logic | 1 | 60 |
| LocaleOption | business-logic | 1 | 60 |
| Localization | business-logic | 1 | 60 |
| LocalizationTest | test | 1 | 60 |
| LocalTemplateUploader | business-logic | 1 | 65 |
| LoggerService | business-logic | 1 | 60 |
| LoggerServiceTest | test | 1 | 60 |
| LoginInformation | business-logic | 1 | 60 |
| LookupController | controller | 1 | 60 |
| LookupControllerTest | test | 1 | 60 |
| MergeController | controller | 1 | 65 |
| MergeControllerGetAccessTokenMock | business-logic | 1 | 65 |
| MergeControllerGetOrgIdMock | business-logic | 1 | 65 |
| MergeControllerNewGetAccessTokenMock | business-logic | 1 | 65 |
| MergeControllerRequestMergeMock | business-logic | 1 | 65 |
| MergeControllerTEST | test | 1 | 65 |
| MergeField | business-logic | 1 | 60 |
| MergeFieldsResult | business-logic | 1 | 47 |
| MergeObject | business-logic | 1 | 60 |
| MergeOptions | business-logic | 1 | 65 |
| MergeRequestWrapper | business-logic | 1 | 65 |
| MergeService | business-logic | 1 | 60 |
| MergeServiceTest | test | 1 | 60 |
| MetadataAPI | business-logic | 1 | 60 |
| MetadataAPIMock | business-logic | 1 | 60 |
| MetadataAPITest | test | 1 | 60 |
| MetadataController | controller | 1 | 60 |
| MetadataController | controller | 1 | 65 |
| MetadataControllerTest | test | 1 | 60 |
| MetadataControllerTEST | test | 1 | 65 |
| MetadataCreateJob | business-logic | 1 | 65 |
| MetadataCreateJobTest | test | 1 | 65 |
| MetadataDataController | controller | 1 | 65 |
| MetadataDeployController | controller | 1 | 65 |
| MetadataRetrieveController | controller | 1 | 65 |
| MetadataRetrieveControllerTEST | test | 1 | 65 |
| MetadataService | business-logic | 1 | 60 |
| MetadataService | business-logic | 1 | 65 |
| MetadataServiceExamples | business-logic | 1 | 65 |
| MetadataServicePatcher | business-logic | 1 | 65 |
| MetadataServicePatcherTEST | test | 1 | 65 |
| MetadataServiceTest | test | 1 | 60 |
| MetadataServiceTest | test | 1 | 65 |
| MetaDataUtils | utility | 1 | 65 |
| MobileConfiguration | business-logic | 1 | 60 |
| MobileConfigurationTest | test | 1 | 60 |
| MockHttpResponseGenerator | business-logic | 1 | 65 |
| MockRequest | business-logic | 1 | 60 |
| MockResource | business-logic | 1 | 60 |
| MockResponse | business-logic | 1 | 60 |
| MultipartDocumentUpload | business-logic | 1 | 60 |
| MultipartDocumentUploadTest | test | 1 | 60 |
| NavigatorController | controller | 1 | 60 |
| NavigatorControllerTest | test | 1 | 62 |
| Negotiate | business-logic | 1 | 47 |
| NegotiateAPI | business-logic | 1 | 60 |
| NegotiateAPITest | test | 1 | 60 |
| NegotiateProduct | business-logic | 1 | 60 |
| NegotiateService | business-logic | 1 | 60 |
| NegotiateServiceTest | test | 1 | 60 |
| NotarizeTab | business-logic | 1 | 60 |
| NoteTab | business-logic | 1 | 60 |
| NotificationBehaviorController | controller | 1 | 65 |
| NotificationBehaviorControllerTEST | test | 1 | 65 |
| Notifications | business-logic | 1 | 60 |
| NSUtil | utility | 1 | 65 |
| NSUtilTEST | test | 1 | 65 |
| NumberTab | business-logic | 1 | 60 |
| OAuthMock | business-logic | 1 | 60 |
| OAuthScope | business-logic | 1 | 60 |
| OAuthTokenMock | business-logic | 1 | 60 |
| ObjectMetadata | business-logic | 1 | 65 |
| ObjectMetadataTEST | test | 1 | 65 |
| Obligation | business-logic | 1 | 60 |
| OnlineEditor | business-logic | 1 | 47 |
| OnlineEditorController | controller | 1 | 60 |
| OnlineEditorControllerTest | test | 1 | 60 |
| OnlineEditorMergeObject | business-logic | 1 | 60 |
| OpportunityFieldMetadataFactory | business-logic | 1 | 65 |
| OpportunityFieldMetadataFactoryTEST | test | 1 | 65 |
| OrganizationService | business-logic | 1 | 60 |
| OrganizationServiceTest | test | 1 | 60 |
| OrgInformation | business-logic | 1 | 65 |
| OrgService | business-logic | 1 | 47 |
| OrgServiceTest | test | 1 | 47 |
| OutputActionTextGenerator | business-logic | 1 | 65 |
| OutputOptionBuilder | business-logic | 1 | 65 |
| OutputOptionBuilderTEST | test | 1 | 65 |
| ParameterEntryBehaviorControllerTEST | test | 1 | 65 |
| ParameterEntryBehaviorSettingsController | controller | 1 | 65 |
| PaymentTab | business-logic | 1 | 60 |
| Permissions | business-logic | 1 | 60 |
| PermissionsTest | test | 1 | 60 |
| PiAPI | business-logic | 1 | 60 |
| PiAPIMock | business-logic | 1 | 60 |
| PiAPITest | test | 1 | 60 |
| PivProvider | business-logic | 1 | 60 |
| PlatformAuthorizationService | business-logic | 1 | 60 |
| PlatformAuthorizationServiceTest | test | 1 | 60 |
| PMT_ClonePhaseTaskCtrl | controller | 1 | 56 |
| PMT_ClonePhaseTaskCtrlTest | test | 1 | 56 |
| PMT_CreateResourceAvailability | business-logic | 1 | 56 |
| PMT_CreateResourceAvailability2 | business-logic | 1 | 58 |
| PMT_GanttCtrl | controller | 1 | 56 |
| PMT_GanttCtrlTest | test | 1 | 56 |
| PMT_InstallHandler | business-logic | 1 | 56 |
| PMT_ProjectSummaryCtrl | controller | 1 | 56 |
| PMT_ResourceAllocationTriggerHelper | utility | 1 | 56 |
| PMT_ResourceAllocationTriggerTest | test | 1 | 56 |
| PMT_ResourceAvailabilityScheduler | business-logic | 1 | 56 |
| PMT_ResourceAvailabilitySchedulerTest | test | 1 | 56 |
| PMT_ResourceManagementCtrl | controller | 1 | 56 |
| PMT_TaskandPhaseManagementCtrl | controller | 1 | 56 |
| PMT_TaskandPhaseManagementCtrlTest | test | 1 | 56 |
| PMT_Testcoverage | business-logic | 1 | 56 |
| PMT_Utility | business-logic | 1 | 56 |
| PolyLineOverlayTab | business-logic | 1 | 60 |
| PopoverCardModel | business-logic | 1 | 65 |
| PopoverCardService | business-logic | 1 | 65 |
| PopoverCardServiceTEST | test | 1 | 65 |
| PostInstall | business-logic | 1 | 60 |
| PostInstall | business-logic | 1 | 65 |
| PostInstall2 | business-logic | 1 | 60 |
| PostInstall2Test | test | 1 | 60 |
| PostInstall3 | business-logic | 1 | 60 |
| PostInstall3Test | test | 1 | 60 |
| PostInstallResults | business-logic | 1 | 60 |
| PostInstallScript | business-logic | 1 | 60 |
| PostInstallTest | test | 1 | 60 |
| PostInstallTEST | test | 1 | 65 |
| PrimaryContactController | controller | 1 | 65 |
| PrimaryContactControllerTEST | test | 1 | 65 |
| ProcessGenAndSendJobs | business-logic | 1 | 60 |
| ProcessGenAndSendJobsTest | test | 1 | 60 |
| Product | business-logic | 1 | 60 |
| ProductAPI | business-logic | 1 | 60 |
| ProductAPIMock | business-logic | 1 | 60 |
| ProductAPITest | test | 1 | 60 |
| ProductTest | test | 1 | 60 |
| ProjectFieldMigration | business-logic | 1 | 64 |
| ProjectFieldMigrationOneByOne | business-logic | 1 | 62 |
| ProvisioningAPI | business-logic | 1 | 60 |
| ProvisioningAPITest | test | 1 | 60 |
| Puff | business-logic | 1 | 54 |
| Query | business-logic | 1 | 60 |
| QueryParser | business-logic | 1 | 65 |
| QueryParserTEST | test | 1 | 65 |
| QueryString | business-logic | 1 | 60 |
| QueryStringTest | test | 1 | 60 |
| QueryTest | test | 1 | 60 |
| QuickStartController | controller | 1 | 65 |
| QuickStartControllerTEST | test | 1 | 65 |
| QuickStartExtractController | controller | 1 | 65 |
| QuickStartExtractControllerTEST | test | 1 | 65 |
| QuickStartPackagesStepController | controller | 1 | 65 |
| QuickStartPackagesStepControllerTEST | test | 1 | 65 |
| QuoteFieldMetadataFactory | business-logic | 1 | 65 |
| QVarDetails | business-logic | 1 | 65 |
| QVarFormatter | business-logic | 1 | 65 |
| QVarFormatterTEST | test | 1 | 65 |
| QVarParser | business-logic | 1 | 65 |
| QVarParserTEST | test | 1 | 65 |
| RadioGroupTab | business-logic | 1 | 60 |
| ReadOnlyTab | business-logic | 1 | 60 |
| ReadWriteTab | business-logic | 1 | 60 |
| Recipient | business-logic | 1 | 60 |
| RecipientResolver | business-logic | 1 | 60 |
| RecipientService | business-logic | 1 | 60 |
| RecipientServiceTest | test | 1 | 60 |
| RedirectPageController | controller | 1 | 65 |
| RegExps | business-logic | 1 | 65 |
| RemovePermissionsJob | business-logic | 1 | 60 |
| RemovePermissionsJobTest | test | 1 | 60 |
| RemoveUsersJob | business-logic | 1 | 60 |
| RemoveUsersJobTest | test | 1 | 60 |
| RestAPI | business-logic | 1 | 60 |
| RestAPITest | test | 1 | 60 |
| ReturnController | controller | 1 | 60 |
| ReturnControllerTest | test | 1 | 60 |
| RoleAPI | business-logic | 1 | 60 |
| RoleAPIMock | business-logic | 1 | 60 |
| RoleAPITest | test | 1 | 60 |
| Salesforce | business-logic | 1 | 60 |
| SalesforceAPIMock | business-logic | 1 | 60 |
| SalesforceMergeField | business-logic | 1 | 65 |
| SalesforceMergeService | business-logic | 1 | 65 |
| SalesforceMergeServiceTEST | test | 1 | 65 |
| SalesforceTest | test | 1 | 60 |
| SaveACopyBehaviorController | controller | 1 | 65 |
| SaveACopyBehaviorControllerTEST | test | 1 | 65 |
| SBQQQuoteFieldMetadataFactory | business-logic | 1 | 65 |
| SBQQQuoteFieldMetadataFactoryTEST | test | 1 | 65 |
| ScheduleGenAndSendJob | business-logic | 1 | 60 |
| ScheduleGenAndSendJobTest | test | 1 | 60 |
| SchedulerAndBatchUtils | utility | 1 | 60 |
| ScmAPI | business-logic | 1 | 60 |
| ScmAPIMock | business-logic | 1 | 60 |
| ScmAPITest | test | 1 | 60 |
| ScmService | business-logic | 1 | 60 |
| ScmTokenAPI | business-logic | 1 | 60 |
| ScmTokenAPITest | test | 1 | 60 |
| SecureUtils | utility | 1 | 60 |
| SecureUtilsTest | test | 1 | 60 |
| SelectOptionSorter | business-logic | 1 | 65 |
| Sender | business-logic | 1 | 60 |
| SendingController | controller | 1 | 60 |
| SendingControllerTest | test | 1 | 60 |
| ServiceTicketPrintViewController | controller | 1 | 64 |
| SettingsController | controller | 1 | 60 |
| SettingsControllerTest | test | 1 | 60 |
| SetupController | controller | 1 | 60 |
| SetupControllerTest | test | 1 | 60 |
| SetupMigrationToolController | controller | 1 | 60 |
| SetupMigrationToolControllerTest | test | 1 | 60 |
| SFDCAccessControlException | business-logic | 1 | 65 |
| SFDCAccessControlExceptionTEST | test | 1 | 65 |
| SFDCAccessController | controller | 1 | 65 |
| SFDCAccessControllerTEST | test | 1 | 65 |
| SFDCAccessControlResults | business-logic | 1 | 65 |
| SFDCPlugins | business-logic | 1 | 65 |
| SignatureApplianceProvider | business-logic | 1 | 60 |
| SignatureProvider | business-logic | 1 | 60 |
| SignatureTab | business-logic | 1 | 60 |
| SignerAttachmentTab | business-logic | 1 | 60 |
| SignHereTab | business-logic | 1 | 60 |
| SigningGroup | business-logic | 1 | 60 |
| SigningService | business-logic | 1 | 60 |
| SigningServiceTest | test | 1 | 60 |
| SmartSectionTab | business-logic | 1 | 60 |
| sObjectRecordController | controller | 1 | 65 |
| sObjectRecordControllerTEST | test | 1 | 65 |
| SolutionCollectionDesigner | business-logic | 1 | 65 |
| SolutionCollectionDesignerTEST | test | 1 | 65 |
| SolutionController | controller | 1 | 65 |
| SolutionControllerTEST | test | 1 | 65 |
| SolutionPackExtractController | controller | 1 | 65 |
| SolutionPackLandingPageController | controller | 1 | 65 |
| SolutionPackTEST | test | 1 | 65 |
| SpringCMMigrationController | controller | 1 | 60 |
| SpringOAuthAPIMock | business-logic | 1 | 48 |
| SsnTab | business-logic | 1 | 60 |
| staticVar | business-logic | 3 | 63 |
| StatusController | controller | 1 | 60 |
| StatusControllerTest | test | 1 | 60 |
| StatusService | business-logic | 1 | 60 |
| StatusServiceTest | test | 1 | 60 |
| StorageAPI | business-logic | 1 | 60 |
| StorageAPIMock | business-logic | 1 | 60 |
| strike_lookupController | controller | 1 | 60 |
| strike_lookupControllerTest | test | 1 | 60 |
| strike_responseData | business-logic | 1 | 60 |
| strike_utilities | business-logic | 1 | 60 |
| StringUtils | utility | 1 | 60 |
| StringUtilsTest | test | 1 | 60 |
| SystemSenderUserNamePostInstall | business-logic | 1 | 60 |
| SystemSenderUserNamePostInstallTest | test | 1 | 60 |
| Tab | business-logic | 1 | 60 |
| TabGroup | business-logic | 1 | 60 |
| TabTest | test | 1 | 60 |
| Template | business-logic | 1 | 60 |
| TemplateAPI | business-logic | 1 | 60 |
| TemplateAPITest | test | 1 | 60 |
| TemplateBuilderController | controller | 1 | 65 |
| TemplateBuilderControllerTEST | test | 1 | 65 |
| TemplateFileSalesforceIO | business-logic | 1 | 65 |
| TemplateFileSalesforceIOTEST | test | 1 | 65 |
| TemplateListSplitter | business-logic | 1 | 65 |
| TemplateManagementController | controller | 1 | 65 |
| TemplateManagementControllerTEST | test | 1 | 65 |
| TemplateNewCongaEmailModalController | controller | 1 | 65 |
| TemplateNewCongaEmailModalControllerTEST | test | 1 | 65 |
| TemplateService | business-logic | 1 | 60 |
| TemplateServiceTest | test | 1 | 60 |
| testAccessController | controller | 1 | 65 |
| TESTgetCM8URLFromURLService | business-logic | 1 | 65 |
| TestPasser | business-logic | 1 | 65 |
| TestPasserTEST | test | 1 | 65 |
| TestUtilities | business-logic | 1 | 65 |
| TestUtils | utility | 1 | 60 |
| TextTab | business-logic | 1 | 60 |
| TitleTab | business-logic | 1 | 60 |
| TokenCache | business-logic | 1 | 60 |
| TokenService | business-logic | 1 | 60 |
| TokenServiceTest | test | 1 | 60 |
| ToolingAPIService | business-logic | 1 | 60 |
| ToolingAPIServiceMock | business-logic | 1 | 60 |
| ToolingAPIServiceTest | test | 1 | 60 |
| TransactionDataLoader | business-logic | 1 | 62 |
| TransactionDataLoaderImpl | business-logic | 1 | 62 |
| TreeItem | business-logic | 1 | 65 |
| TreeItemTEST | test | 1 | 65 |
| TriggerException | business-logic | 1 | 65 |
| TriggerFactory | business-logic | 1 | 65 |
| TriggerOnEventTest | test | 54 | 63 |
| TriggerUtil_REST | business-logic | 1 | 53 |
| TriggerWorkflowRequest | business-logic | 1 | 60 |
| TriggerWorkflowRequestTest | test | 1 | 60 |
| TroubleShootingController | controller | 1 | 60 |
| TroubleShootingControllerTest | test | 1 | 60 |
| UITheme | business-logic | 1 | 60 |
| UIThemeTest | test | 1 | 60 |
| UnauthorizedException | business-logic | 17 | 60 |
| UnauthorizedExceptionTest | test | 1 | 60 |
| UpdatePermissionsJob | business-logic | 1 | 60 |
| UpdatePermissionsJobTest | test | 1 | 60 |
| UpdateRolesJob | business-logic | 1 | 60 |
| UpdateRolesJobTest | test | 1 | 60 |
| URLEnvelopeService | business-logic | 1 | 60 |
| URLEnvelopeServiceTest | test | 1 | 60 |
| UrlUtils | utility | 1 | 60 |
| UrlUtilsTest | test | 1 | 60 |
| UserAPI | business-logic | 1 | 60 |
| UserAPITest | test | 1 | 60 |
| UserEventsController | controller | 1 | 60 |
| UserEventsControllerTest | test | 1 | 60 |
| UserInformation | business-logic | 1 | 65 |
| UserInformationTEST | test | 1 | 65 |
| UserLookupUtility | business-logic | 1 | 65 |
| UserMeta | business-logic | 1 | 62 |
| UserMock | business-logic | 1 | 60 |
| UserService | business-logic | 1 | 60 |
| UserServiceTest | test | 1 | 60 |
| UtilityClass | business-logic | 1 | 53 |
| UUID | business-logic | 1 | 60 |
| UUIDTest | test | 1 | 60 |
| ValidationException | business-logic | 13 | 60 |
| ValidationExceptionTest | test | 1 | 60 |
| ValidationResult | business-logic | 1 | 60 |
| ValidationResultTest | test | 1 | 60 |
| ViewTab | business-logic | 1 | 60 |
| WordTemplateUpdater | business-logic | 1 | 60 |
| WordTemplateUpdaterTest | test | 1 | 60 |
| WorkflowAPI | business-logic | 1 | 60 |
| WorkflowAPITest | test | 1 | 60 |
| WorkflowBatchJob | business-logic | 1 | 60 |
| XMLSerializer | business-logic | 1 | 60 |
| XMLSerializerTest | test | 1 | 60 |
| Zippex | business-logic | 1 | 54 |
| ZippexTests | business-logic | 1 | 54 |
| ZipTab | business-logic | 1 | 60 |
