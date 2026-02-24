# Migration Summary

> Generated: 2026-02-23T18:56:34.687Z

## Org Overview

| Metric | Count |
|--------|-------|
| Custom Objects | 111 |
| Standard Objects (in use) | 27 |
| Total Fields | 4949 |
| Total Relationships | 4883 |
| Active Flows | 32 |
| Active Validation Rules | 47 |
| Workflow Rules | 0 |
| Apex Triggers | 35 |
| Apex Classes | 1015 |
| Approval Processes | 0 |

## Object Priority Matrix

Objects ranked by migration complexity (fields + relationships + automation):

| Object | Fields | Relationships | Automation | Priority |
|--------|--------|--------------|------------|----------|
| User | 183 | 1047 | 0 | **High** |
| bpmpro3__Sales_Document__c | 476 | 41 | 1 | **High** |
| Account | 117 | 143 | 1 | **High** |
| bpmpro3__A3_LaborItems__c | 304 | 30 | 1 | **High** |
| Contact | 75 | 90 | 1 | **High** |
| bpmpro3__Project__c | 130 | 47 | 1 | **High** |
| bpmpro3__SpecialtyItem__c | 166 | 27 | 1 | **High** |
| Opportunity | 69 | 56 | 1 | **High** |
| Event | 76 | 26 | 9 | **High** |
| Lead | 56 | 56 | 1 | **High** |
| inov8__PMT_Project__c | 74 | 40 | 1 | **High** |
| Quote | 84 | 34 | 0 | **High** |
| bpmpro3__Dealer_Item__c | 80 | 32 | 0 | **High** |
| Case | 38 | 45 | 1 | **High** |
| bpmpro3__Orders__c | 60 | 33 | 0 | **High** |
| inov8__PMT_Resource_Availability__c | 69 | 28 | 0 | **High** |
| bpmpro3__Company_Settings__c | 69 | 27 | 0 | **High** |
| dfsle__EnvelopeConfiguration__c | 46 | 38 | 0 | **High** |
| Task | 67 | 27 | 0 | **High** |
| bpmpro3__CPI_Configure_Pricing_Items__c | 54 | 28 | 2 | **High** |
| Contract | 48 | 36 | 0 | **High** |
| Asset | 40 | 39 | 0 | **High** |
| bpmpro3__PP_Preset_Product__c | 60 | 28 | 0 | **High** |
| bpmpro3__SalesDoc_Invoice__c | 52 | 29 | 1 | **High** |
| bpmpro3__Work_Assignment__c | 49 | 33 | 0 | **High** |
| Order | 45 | 35 | 0 | **High** |
| APXT_CongaSign__Transaction__c | 36 | 36 | 1 | **High** |
| bpmpro3__Service_Ticket__c | 43 | 35 | 0 | **High** |
| bpmpro3__ProductItem__c | 48 | 32 | 0 | **High** |
| bpmpro3__Project_Invoice__c | 46 | 32 | 0 | **High** |
| bpmpro3__Project_Stage_Assignment__c | 35 | 31 | 2 | **High** |
| dfsle__GenTemplate__c | 43 | 32 | 0 | **High** |
| inov8__PMT_Resource_Allocation__c | 48 | 27 | 1 | **High** |
| bpmpro3__Prospect__c | 33 | 34 | 1 | **High** |
| dfsle__EnvelopeStatus__c | 30 | 38 | 0 | **High** |
| inov8__PMT_Task__c | 41 | 32 | 0 | **High** |
| bpmpro3__Building_Permit_c__c | 34 | 35 | 0 | **High** |
| Campaign | 33 | 33 | 1 | **High** |
| bpmpro3__Contact_CSV_Import__c | 41 | 31 | 0 | **High** |
| APXTConga4__Conga_Solution__c | 27 | 34 | 0 | **High** |
| bpmpro3__Add_On_CPI__c | 24 | 28 | 3 | **High** |
| bpmpro3__Deal_Sheet__c | 22 | 36 | 0 | **High** |
| bpmpro3__CPI_AddOn_Product_Catalog__c | 22 | 33 | 1 | **High** |
| bpmpro3__Property__c | 24 | 34 | 0 | **High** |
| bpmpro3__Labor_Charge__c | 27 | 32 | 0 | **High** |
| bpmpro3__Labor_Ticket__c | 21 | 35 | 0 | **High** |
| ContentVersion | 47 | 22 | 0 | **High** |
| dfsle__RecipientStatus__c | 23 | 34 | 0 | **High** |
| dfsle__Envelope__c | 30 | 30 | 0 | **High** |
| inov8__PMT_Phase__c | 36 | 27 | 0 | **High** |
| APXTConga4__Conga_Email_Template__c | 20 | 32 | 1 | **High** |
| bpmpro3__Timesheet__c | 21 | 34 | 0 | **High** |
| bpmpro3__Material__c | 26 | 31 | 0 | **High** |
| bpmpro3__Project_Stage_Assignment_Team_Member__c | 17 | 33 | 1 | **High** |
| bpmpro3__Sales_Commission_Payout__c | 25 | 29 | 1 | **High** |
| bpmpro3__A2_Labor_Only_Item__c | 35 | 26 | 0 | **High** |
| bpmpro3__Project_Stage__c | 31 | 28 | 0 | **High** |
| dfsle__EnvelopeConfigurationRecipient__c | 35 | 26 | 0 | **High** |
| bpmpro3__Project_Stage_Team_Member__c | 16 | 32 | 1 | **High** |
| dfsle__Recipient__c | 33 | 26 | 0 | **High** |
| bpmpro3__SalesDoc_Credit_Memo__c | 23 | 28 | 1 | **High** |
| APXTConga4__Composer_QuickMerge__c | 19 | 32 | 0 | **High** |
| bpmpro3__Building_Material__c | 21 | 31 | 0 | **High** |
| APXTConga4__Conga_Email_Staging__c | 15 | 31 | 1 | **High** |
| bpmpro3__PaymentBPM__c | 20 | 31 | 0 | **High** |
| dfsle__Log__c | 20 | 31 | 0 | **High** |
| Product2 | 20 | 31 | 0 | **High** |
| bpmpro3__CPI_Preset_Product_Add_On__c | 20 | 28 | 1 | **High** |
| APXTConga4__Conga_Template__c | 21 | 27 | 1 | **Medium** |
| bpmpro3__Project_Contact_Role__c | 22 | 29 | 0 | **Medium** |
| dfsle__BulkStatus__c | 18 | 31 | 0 | **Medium** |
| bpmpro3__AddOn_Product__c | 21 | 29 | 0 | **Medium** |
| bpmpro3__Inspections__c | 23 | 28 | 0 | **Medium** |
| bpmpro3__LaborItem_AddOn_Junction__c | 18 | 28 | 1 | **Medium** |
| ContentDocument | 25 | 27 | 0 | **Medium** |
| dfsle__CustomRecipient__c | 27 | 26 | 0 | **Medium** |
| BirdeyeCheckin__Automation__c | 22 | 28 | 0 | **Medium** |
| inov8__PMT_Error_Log__c | 16 | 31 | 0 | **Medium** |
| bpmpro3__Invoice_Payment__c | 18 | 27 | 1 | **Medium** |
| dfsle__CustomParameterMap__c | 15 | 31 | 0 | **Medium** |
| dfsle__Document__c | 21 | 28 | 0 | **Medium** |
| bpmpro3__Warehouse_Log__c | 21 | 27 | 0 | **Medium** |
| dfsle__AgreementConfiguration__c | 13 | 31 | 0 | **Medium** |
| dfsle__BulkList__c | 13 | 31 | 0 | **Medium** |
| APXTConga4__Conga_Merge_Query__c | 15 | 27 | 1 | **Medium** |
| bpmpro3__Time_Entry__c | 20 | 27 | 0 | **Medium** |
| APXT_CongaSign__Recipient__c | 21 | 26 | 0 | **Medium** |
| APXTConga4__Document_History__c | 17 | 28 | 0 | **Medium** |
| bpmpro3__SalesDoc_Clauses__c | 20 | 26 | 0 | **Medium** |
| APXTConga4__Conga_Solution_Query__c | 16 | 27 | 0 | **Medium** |
| APXTConga4__Conga_Solution_Template__c | 16 | 27 | 0 | **Medium** |
| dfsle__Jobs__c | 18 | 26 | 0 | **Medium** |
| APXT_CongaSign__Document__c | 15 | 27 | 0 | **Medium** |
| APXTConga4__Conga_Solution_Report__c | 17 | 26 | 0 | **Medium** |
| bpmpro3__Permit_Fee__c | 17 | 26 | 0 | **Medium** |
| bpmpro3__Sales_Commission__c | 17 | 26 | 0 | **Medium** |
| dfsle__EnvelopeConfigurationDocument__c | 17 | 26 | 0 | **Medium** |
| APXTConga4__Conga_Solution_Email_Template__c | 14 | 27 | 0 | **Medium** |
| BirdeyeCheckin__Connector__c | 14 | 27 | 0 | **Medium** |
| bpmpro3__Back_Charge__c | 16 | 26 | 0 | **Medium** |
| bpmpro3__Sales_Commission_Table__c | 16 | 26 | 0 | **Medium** |
| inov8__PMT_Program__c | 14 | 27 | 0 | **Medium** |
| bpmpro3__Reimbursement__c | 15 | 26 | 0 | **Medium** |
| APXTConga4__Conga_Collection__c | 12 | 27 | 0 | **Medium** |
| APXTConga4__Conga_Collection_Solution__c | 12 | 27 | 0 | **Medium** |
| APXTConga4__Document_History_Detail__c | 14 | 26 | 0 | **Medium** |
| APXTConga4__VersionedData__c | 13 | 26 | 0 | **Medium** |
| BirdeyeCheckin__Automation_Failed_Record__c | 11 | 27 | 0 | **Medium** |
| Solution | 19 | 23 | 0 | **Medium** |
| APXTConga4__Conga_Solution_Parameter__c | 12 | 26 | 0 | **Medium** |
| dfsle__EnvelopeLocalization__c | 12 | 26 | 0 | **Medium** |
| APXTConga4__EventData__c | 11 | 26 | 0 | **Medium** |
| APXTConga4__Composer_Host_Override__c | 10 | 26 | 0 | **Medium** |
| dfsle__EOS_Type__c | 16 | 23 | 0 | **Medium** |
| BirdeyeCheckin__Checkin_Config__c | 15 | 23 | 0 | **Medium** |
| CampaignMember | 36 | 12 | 0 | **Medium** |
| APXTConga4__Conga_Composer_Settings__c | 13 | 23 | 0 | **Medium** |
| APXTConga4__Conga_Solutions_Settings__c | 11 | 23 | 0 | **Medium** |
| In_App_Checklist_Settings__c | 11 | 23 | 0 | **Medium** |
| APXT_CongaSign__CongaSign_Settings__c | 10 | 23 | 0 | **Medium** |
| OrderItem | 20 | 18 | 0 | **Medium** |
| QuoteLineItem | 23 | 11 | 0 | **Medium** |
| Group | 14 | 14 | 0 | **Medium** |
| OpportunityLineItem | 21 | 10 | 0 | **Medium** |
| PricebookEntry | 15 | 12 | 0 | **Medium** |
| Pricebook2 | 14 | 12 | 0 | **Medium** |
| UserRole | 16 | 9 | 0 | **Medium** |
| Attachment | 15 | 5 | 0 | **Low** |
| Opportunity__hd | 20 | 2 | 0 | **Low** |
| bpmpro3__Org_Info__mdt | 22 | 0 | 0 | **Low** |
| Note | 12 | 5 | 0 | **Low** |
| APXTConga4__Connected_App_Setting__mdt | 13 | 1 | 0 | **Low** |
| inov8__PMT_Setting__mdt | 13 | 0 | 0 | **Low** |
| APXTConga4__Composer_Setting__mdt | 10 | 1 | 0 | **Low** |
| APXTConga4__Conga_Solution_Export_Environment__mdt | 9 | 1 | 0 | **Low** |
| APXTConga4__Conga_Solution_Export_Setting__mdt | 9 | 1 | 0 | **Low** |
| BirdeyeCheckin__API_Config__mdt | 10 | 0 | 0 | **Low** |
| dfsle__AuthProvider__mdt | 8 | 0 | 0 | **Low** |

## Picklist / Enum Inventory

These become Postgres enum types or lookup tables:

| Object | Field | Values |
|--------|-------|--------|
| Account | Salutation | Mr., Ms., Mrs., Dr., Prof. (+1 more) |
| Account | Type | Analyst, Competitor, Customer, Integrator, Investor (+5 more) |
| Account | BillingGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Account | ShippingGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Account | Industry | Agriculture, Apparel, Banking, Biotechnology, Chemicals (+27 more) |
| Account | Ownership | Public, Private, Subsidiary, Other |
| Account | Rating | Hot, Warm, Cold |
| Account | PersonMailingGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Account | PersonOtherGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Account | PersonLeadSource | Advertisement, Customer Event, Employee Referral, External Referral, Google AdWords (+6 more) |
| Account | PersonPronouns | He/Him, She/Her, They/Them, He/They, She/They (+1 more) |
| Account | PersonGenderIdentity | Male, Female, Nonbinary, Not Listed |
| Account | AccountSource | Advertisement, Customer Event, Employee Referral, External Referral, Google AdWords (+6 more) |
| Account | bpmpro3__Business_Internal_Role__c | Client, Homeowner Association, Labor Subcontractor, Municipality, Other (+3 more) |
| Account | bpmpro3__Category__pc | A/C Contractor, A/C Supplier, Accountant, Alarm Contractor, Alarm Technician (+68 more) |
| Account | bpmpro3__Internal_Company_Role__pc | Accounting, Administration, Engineering, IT Support, Legal and Compliance (+9 more) |
| Account | Preferred_Contact_Method__pc | Call, Text, Email |
| APXT_CongaSign__Document__c | APXT_CongaSign__Type__c | Original, Final, Signer_Attachment |
| APXT_CongaSign__Recipient__c | APXT_CongaSign__Status__c | PENDING, SENT, VIEWED, COMPLETE, DECLINED (+2 more) |
| APXT_CongaSign__Transaction__c | APXT_CongaSign__FinalDocumentsSyncStatus__c | NONE, PENDING, SUCCESS, PARTIAL, FAIL |
| APXT_CongaSign__Transaction__c | APXT_CongaSign__Status__c | DRAFT, SENT, COMPLETE, DECLINED, PENDING_EXPIRATION (+2 more) |
| APXT_CongaSign__Transaction__c | APXT_CongaSign__WritebackStatus__c | NONE, PENDING, SUCCESS, PARTIAL, FAIL |
| APXTConga4__Composer_Setting__mdt | Language | en_US, de, es, fr, it (+13 more) |
| APXTConga4__Conga_Solution_Export_Environment__mdt | Language | en_US, de, es, fr, it (+13 more) |
| APXTConga4__Conga_Solution_Export_Setting__mdt | Language | en_US, de, es, fr, it (+13 more) |
| APXTConga4__Conga_Template__c | APXTConga4__Template_Type__c | Document, Label, Envelope |
| APXTConga4__Connected_App_Setting__mdt | Language | en_US, de, es, fr, it (+13 more) |
| APXTConga4__Document_History_Detail__c | APXTConga4__Document_Status__c | Generated, Viewed, Expired |
| Asset | Status | Purchased, Shipped, Installed, Registered, Obsolete |
| Asset | GeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| BirdeyeCheckin__API_Config__mdt | Language | en_US, de, es, fr, it (+13 more) |
| BirdeyeCheckin__Automation__c | BirdeyeCheckin__Filter_Action_Type__c | All AND, All OR, Custom Logic, No Criteria |
| BirdeyeCheckin__Automation__c | BirdeyeCheckin__Status__c | Running, Paused, Draft |
| bpmpro3__A3_LaborItems__c | bpmpro3__A3_Finish_Color_Picklist__c | Black, Bronze, Clear Anodized, Custom Color, Dark Gray (+3 more) |
| bpmpro3__A3_LaborItems__c | bpmpro3__A3_Glass_Color_Picklist__c | Azurlite, BlueGreen, Bronze, Clear, Gray (+4 more) |
| bpmpro3__A3_LaborItems__c | bpmpro3__A3_InstallationType_Picklist__c | New Construction, Retrofit |
| bpmpro3__A3_LaborItems__c | bpmpro3__A3_SizeCategory__c | Standard, Oversized XL, Oversized 2XL, Oversized 3XL |
| bpmpro3__AddOn_Product__c | bpmpro3__AOP_Item_Type__c | Deadbolt, Handleset, Lever, Pull Handle |
| bpmpro3__AddOn_Product__c | bpmpro3__AOP_Measurement_Unit__c | Hourly, Linear Feet, Monthly, Piece, Pounds (+2 more) |
| bpmpro3__Building_Material__c | bpmpro3__BM_Coverage_Unit_Measure__c | Square Feet, Linear Feet, Unit |
| bpmpro3__Building_Material__c | bpmpro3__BM_Material_Type__c | Wood Buck, Screw, Flashing, Caulking, Other |
| bpmpro3__Building_Material__c | bpmpro3__BM_Package_Unit_Measure__c | Board, Each, Gallon, Linear Feet, Liter (+3 more) |
| bpmpro3__Building_Permit_c__c | bpmpro3__BP_HOA_Approval__c | NO, YES |
| bpmpro3__Company_Settings__c | bpmpro3__SOS_Sales_Commission_Basis__c | [1] Cost-Based Commission, [2] Revenue-Based Commission, [3] Profit-Based Commission |
| bpmpro3__Company_Settings__c | bpmpro3__SOS_State__c | AK, AL, AR, AZ, CA (+45 more) |
| bpmpro3__Company_Settings__c | bpmpro3__SOS_Filtered_by_Stage_Grouping__c | Pending, Lowest In Progress, Passed |
| bpmpro3__Company_Settings__c | bpmpro3__SOS_DefaultPermitFeesTreatment__c | Excluded, Included |
| bpmpro3__Company_Settings__c | bpmpro3__SOS_Default_SalesDoc_Type__c | Change Order, Contract, Proposal, Proposal Summary, Service Contract (+1 more) |
| bpmpro3__Company_Settings__c | bpmpro3__SOS_Default_Board_View__c | Projects by Stage, Projects by Status, Traffic Light |
| bpmpro3__CPI_AddOn_Product_Catalog__c | bpmpro3__CPIAOPC_Category__c | Delivery and Logistics, Frame and Exterior Finishes, Glass and Glazing, Grids and Dividers, Hardware and Locks (+9 more) |
| bpmpro3__CPI_AddOn_Product_Catalog__c | bpmpro3__CPIAOPC_Unit_Type__c | Piece, Square Foot, Linear Foot, United Inches, Width (+1 more) |
| bpmpro3__Dealer_Item__c | bpmpro3__DI_ItemType_Picklist__c | Curtain Wall, Door, Handleset, Labor, Material (+6 more) |
| bpmpro3__Dealer_Item__c | bpmpro3__DI_MeasuringUnit__c | Hourly, Linear Feet, Monthly, Piece, Pounds (+2 more) |
| bpmpro3__Inspections__c | bpmpro3__IN_Inspection_Result__c | Scheduled, Rolled Over Next Day, Partially Approved, Approved, Finalized (+3 more) |
| bpmpro3__Inspections__c | bpmpro3__IN_Inspection_Type__c | Anchor + Buck Inspection, Anchor Inspection, Buck Inspection, Final Fire Inspection, Final Inspection (+2 more) |
| bpmpro3__Labor_Charge__c | bpmpro3__LC_ChargeBacktoProject__c | No, Yes |
| bpmpro3__Labor_Ticket__c | bpmpro3__LT_PaymentStatus__c | Unpaid, Paid, Disputed |
| bpmpro3__Material__c | bpmpro3__Checked_In_By__c | Carlos A. Paesano, Carlos Cordovis, Maximo Cardenas, Ricardo Ubieta |
| bpmpro3__Material__c | bpmpro3__Checked_Out_by__c | Carlos A. Paesano, Carlos Cordovis, Maximo Cardenas, Ricardo Ubieta |
| bpmpro3__Material__c | bpmpro3__Material_Checkedout__c | Buck - 1 x 4, Buck - 1 x 6, Buck - 1 x 8, Buck - 2 x 4, Buck - 2 x 6 (+73 more) |
| bpmpro3__Material__c | bpmpro3__Material_Purchase__c | Buck - 1 x 4, Buck - 1 x 6, Buck - 1 x 8, Buck - 2 x 4, Buck - 2 x 6 (+73 more) |
| bpmpro3__Material__c | bpmpro3__Transaction_Type__c | Material Used, Inventory Purchase, - Inventory Adjustment - |
| bpmpro3__Orders__c | bpmpro3__PO_Order_Status__c | In Manufacturing, Shipped, Arrived Incomplete, Arrived Complete, Arrived with Backorder Items (+3 more) |
| bpmpro3__Orders__c | bpmpro3__PO_Row_Number__c | ROW-01 Closest to the Door, ROW-02, ROW-03, ROW-04, ROW-05 (+5 more) |
| bpmpro3__Orders__c | bpmpro3__PO_PED_Number__c | PED-01, PED-02, PED-03, PED-04, PED-05 (+27 more) |
| bpmpro3__Org_Info__mdt | Language | en_US, de, es, fr, it (+13 more) |
| bpmpro3__PaymentBPM__c | bpmpro3__Payment_Method__c | Accounting Adjustment, ACH, Cash, Check, Credit Card (+5 more) |
| bpmpro3__PaymentBPM__c | bpmpro3__Payment_Type__c | Accounting Credit, Balance Payment, Change Order Payment, Deposit Payment, Full Payment (+4 more) |
| bpmpro3__Permit_Fee__c | bpmpro3__PF_Billable__c | Yes, No |
| bpmpro3__Permit_Fee__c | bpmpro3__PF_PermitFeeType__c | Issued Fee, Revision Fee, Miscellaneous |
| bpmpro3__PP_Preset_Product__c | bpmpro3__PP_Brand__c | CGI, Custom Window Systems, Florida Window and Doors, Pella, PGT (+3 more) |
| bpmpro3__PP_Preset_Product__c | bpmpro3__PP_Multiplier__c | 1, 1.2, 1.3 |
| bpmpro3__PP_Preset_Product__c | bpmpro3__PP_Product_Series__c | Double Hung 7700, Double Hung 8800, Double Slider 8800, End Vent Slider 8800, Fixed Window 5400 (+15 more) |
| bpmpro3__PP_Preset_Product__c | bpmpro3__PP_Type__c | Double Hung Window, Fiberglass Door, Fiberglass Sidelite, Fixed Window, Remove/Install (+5 more) |
| bpmpro3__PP_Preset_Product__c | bpmpro3__Item_Type__c | Curtain Wall, Door, Handleset, Labor, Material (+6 more) |
| bpmpro3__PP_Preset_Product__c | bpmpro3__PP_Category__c | Window, Door, Mullion, Other |
| bpmpro3__Project__c | bpmpro3__Country__c | Anguilla, Antigua, Aruba, Bahamas, Barbados (+26 more) |
| bpmpro3__Project__c | bpmpro3__Customer_Reading__c | Difficult to contact, Down to two, Evasive, Hard to read, Indecisive (+6 more) |
| bpmpro3__Project__c | bpmpro3__Lead_Source__c | Company Truck, Crew at Jobsite, Digital Advertisement, Events and Networking, Online Marketplaces and Services (+11 more) |
| bpmpro3__Project__c | bpmpro3__Payment_Method__c | Cash, Conventional + Ygrene, Conventional Terms, FortiFi, GreenSky (+3 more) |
| bpmpro3__Project__c | bpmpro3__Project_Type__c | Export, Installation Only, Other, Product + Installation, Product Only |
| bpmpro3__Project__c | bpmpro3__Relationship__c | New Client, Repeat Business |
| bpmpro3__Project__c | bpmpro3__Second_Measures_By__c | Client |
| bpmpro3__Project__c | bpmpro3__Stage__c | Lost, Prospecting, Quoted, Sold, Completed |
| bpmpro3__Project__c | bpmpro3__Status__c | Attention Needed, Awaiting External Process, On Hold, On Track, Lost |
| bpmpro3__Project__c | bpmpro3__Type__c | New Construction Commercial, New Construction Residential, Retrofit Commercial, Retrofit Residential, Service New Construction (+1 more) |
| bpmpro3__Project__c | bpmpro3__Walkthrough_By__c | Installer, Other (read notes), Sales Person, Unassisted |
| bpmpro3__Project__c | bpmpro3__Lost_Reason__c | Attitude, Availability, Client Chose GC Vendor, Condo Unit, Contractor Lost Bid (+21 more) |
| bpmpro3__Project__c | bpmpro3__PJ_Lost_Reason_LWC__c | Attitude, Availability, Canceled, Client Chose GC Vendor, Condo Unit (+22 more) |
| bpmpro3__Project_Contact_Role__c | bpmpro3__PCR_Project_Role_Type__c | Alarm Contractor, Architect, Board Member, Building Contractor, Building Inspection (+32 more) |
| bpmpro3__Project_Invoice__c | bpmpro3__PI_Invoice_Status__c | Draft, Issued, Payment Requested, Paid, Overdue |
| bpmpro3__Project_Invoice__c | bpmpro3__PI_Payment_Status__c | Pending, Completed, Failed |
| bpmpro3__Project_Stage__c | bpmpro3__PS_Sales_Stage__c | Lost, Prospecting, Being Quoted, Quoted, Booked (+3 more) |
| bpmpro3__Project_Stage__c | bpmpro3__PS_Default_Priority__c | Low, Normal, High |
| bpmpro3__Project_Stage_Assignment__c | bpmpro3__PSA_Status__c | Pending, In Progress, Passed |
| bpmpro3__Project_Stage_Assignment_Team_Member__c | bpmpro3__PSATM_Role__c | Primary, Secondary, Backup |
| bpmpro3__Project_Stage_Team_Member__c | bpmpro3__PSTM_Role__c | Primary, Secondary, Backup |
| bpmpro3__Property__c | bpmpro3__PTY_Building_Type__c | Apartment Complex, Assisted Living Facility, Commercial Building, Condominium, Duplex (+26 more) |
| bpmpro3__Property__c | bpmpro3__PTY_State__c | AK, AL, AR, AZ, CA (+45 more) |
| bpmpro3__Property__c | bpmpro3__PTY_Status__c | New, In Research, Qualified, Promoted, Inactive |
| bpmpro3__Prospect__c | bpmpro3__PRT_Lead_Source__c | Purchased List, Referral, Webform, Trade Show |
| bpmpro3__Prospect__c | bpmpro3__PRT_Status__c | New, Contacted, Nurturing, Qualified, Converted (+4 more) |
| bpmpro3__Sales_Commission__c | bpmpro3__Commission_Type__c | Draw, Final |
| bpmpro3__Sales_Commission_Payout__c | bpmpro3__SCP_PayoutStatus__c | Draft, To Be Paid, Paid |
| bpmpro3__Sales_Commission_Table__c | bpmpro3__SCT_Service_Type__c | Export, Installation Only, Other, Product + Installation, Product Only |
| bpmpro3__Sales_Document__c | bpmpro3__Document_Type_Picklist__c | Change Order, Contract, Proposal, Proposal Summary, Service Contract (+1 more) |
| bpmpro3__Sales_Document__c | bpmpro3__Permit_Fees__c | Excluded, Included |
| bpmpro3__Sales_Document__c | bpmpro3__SalesTaxTreatment__c | Annual Resale Certificate - Tax Exempt, Export Sale - Tax Exempt, Non-Taxable, Retail Sale Tax 7%, Taxable |
| bpmpro3__Sales_Document__c | bpmpro3__Sales_Commission_Basis__c | [1] Cost-Based Commission, [2] Revenue-Based Commission, [3] Profit-Based Commission |
| bpmpro3__Sales_Document__c | bpmpro3__Sales_Document_Status__c | Unquoted, Being Quoted, Booked, Sold, Superseded (+2 more) |
| bpmpro3__SalesDoc_Clauses__c | bpmpro3__SDC_Clause_Type__c | Change Order, Contract, Proposal, Service Contract |
| bpmpro3__SalesDoc_Credit_Memo__c | bpmpro3__SDCM_Credit_Memo_Type__c | Discount, Refund |
| bpmpro3__Service_Ticket__c | bpmpro3__SVC_Priority__c | Low, Normal, High, Emergency |
| bpmpro3__Service_Ticket__c | bpmpro3__SVC_Service_Type__c | Warranty, Repair, Maintenance, Inspection, Emergency |
| bpmpro3__Service_Ticket__c | bpmpro3__SVC_Source__c | Phone, Email, Web Form, Portal, Mobile App (+2 more) |
| bpmpro3__Service_Ticket__c | bpmpro3__SVC_Status__c | New, Scheduled, In Progress, Completed, Closed (+1 more) |
| bpmpro3__Time_Entry__c | bpmpro3__TE_Activity_Type__c | Admin, Installation, Miscellaneous Labor, Office, Other (+3 more) |
| bpmpro3__Timesheet__c | bpmpro3__TS_Timesheet_Status__c | Draft, Submitted, Approved, Returned for Edits |
| bpmpro3__Warehouse_Log__c | bpmpro3__WL_Activity_Status__c | Complete, Partial |
| bpmpro3__Warehouse_Log__c | bpmpro3__WL_Activity_Type__c | Check-In, Check-Out |
| bpmpro3__Work_Assignment__c | bpmpro3__WA_Schedule_Status__c | Awaiting Scheduling, Canceled, Confirmed, Tentative |
| bpmpro3__Work_Assignment__c | bpmpro3__WA_Work_Type__c | Admin - Customer Communication, Admin - Sales Update, Admin - Schedule Inspection, Admin - Vendor Coordination, Compliance - Legal Documentation (+23 more) |
| bpmpro3__Work_Assignment__c | bpmpro3__WO_Assignment_Completion_Status__c | In Progress, Partially Completed, Completed with Issues, Completed Successfully, Failed |
| Campaign | Type | Event, Demo Signup / Trial, Email, Referral Program, Search (+4 more) |
| Campaign | Status | In Progress, Completed, Aborted, Planned |
| CampaignMember | Status | Responded, Sent |
| CampaignMember | Salutation | Mr., Ms., Mrs., Dr., Prof. (+1 more) |
| CampaignMember | LeadSource | Advertisement, Customer Event, Employee Referral, External Referral, Google AdWords (+6 more) |
| Case | Type | Problem, Feature Request, Question |
| Case | Status | On Hold, Escalated, Closed, New |
| Case | Reason | User didn't attend training, Complex functionality, Existing problem, Instructions not clear, New problem |
| Case | Origin | Email, Phone, Web |
| Case | Priority | High, Medium, Low |
| Contact | Salutation | Mr., Ms., Mrs., Dr., Prof. (+1 more) |
| Contact | OtherGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Contact | MailingGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Contact | LeadSource | Advertisement, Customer Event, Employee Referral, External Referral, Google AdWords (+6 more) |
| Contact | Pronouns | He/Him, She/Her, They/Them, He/They, She/They (+1 more) |
| Contact | GenderIdentity | Male, Female, Nonbinary, Not Listed |
| Contact | bpmpro3__Category__c | A/C Contractor, A/C Supplier, Accountant, Alarm Contractor, Alarm Technician (+68 more) |
| Contact | bpmpro3__Internal_Company_Role__c | Accounting, Administration, Engineering, IT Support, Legal and Compliance (+9 more) |
| Contact | Preferred_Contact_Method__c | Call, Text, Email |
| ContentDocument | PublishStatus | U, P, R |
| ContentDocument | SharingOption | A, R |
| ContentDocument | SharingPrivacy | N, P |
| ContentVersion | SharingOption | A, R |
| ContentVersion | SharingPrivacy | N, P |
| ContentVersion | PublishStatus | U, P, R |
| ContentVersion | Origin | C, H |
| ContentVersion | ContentLocation | S, E, L, SfDrive, SCS |
| ContentVersion | dfsle__GeneratedFileFormat__c | Word, PDF |
| ContentVersion | dfsle__GeneratedFileSuffix__c | name, date, name_date |
| Contract | OwnerExpirationNotice | 15, 30, 45, 60, 90 (+1 more) |
| Contract | BillingGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Contract | ShippingGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Contract | Status | In Approval Process, Activated, Draft |
| Contract | StatusCode | Draft, InApproval, Activated, Terminated, Expired (+8 more) |
| dfsle__AuthProvider__mdt | Language | en_US, de, es, fr, it (+13 more) |
| dfsle__CustomRecipient__c | dfsle__Type__c | Signer, InPersonSigner, CarbonCopy, CertifiedDelivery, Agent (+2 more) |
| dfsle__Document__c | dfsle__Type__c | File, Template, Document, Other |
| dfsle__EnvelopeConfiguration__c | dfsle__Action__c | Prepare, Tag, Send |
| dfsle__EnvelopeConfiguration__c | dfsle__SendingExperience__c | edit, quickSend, tag, send |
| dfsle__EnvelopeConfiguration__c | dfsle__TemplateType__c | Embedded, General |
| dfsle__EnvelopeConfigurationDocument__c | dfsle__Type__c | TemplateDocument, SourceFiles, Template |
| dfsle__EnvelopeConfigurationRecipient__c | dfsle__Type__c | Signer, InPersonSigner, CarbonCopy, CertifiedDelivery, Agent (+4 more) |
| dfsle__GenTemplate__c | dfsle__DocumentTargetLocation__c | salesforce, clm |
| dfsle__GenTemplate__c | dfsle__TemplateType__c | Online Editor, Microsoft Word |
| dfsle__Jobs__c | dfsle__Job_Status__c | Open, In Progress, Completed - Successful, Failed |
| dfsle__Log__c | dfsle__Severity__c | DEBUG, INFO, WARN, ERROR |
| dfsle__Recipient__c | dfsle__Type__c | Signer, InPersonSigner, CarbonCopy, CertifiedDelivery, Agent (+4 more) |
| Event | Type | On-site Visit, Email, Meeting, Other, Call |
| Event | ShowAs | Busy, OutOfOffice, Free |
| Event | GroupEventType | 0, 1, 2, 3 |
| Event | RecurrenceTimeZoneSidKey | Pacific/Kiritimati, Pacific/Chatham, Antarctica/McMurdo, Pacific/Apia, Pacific/Auckland (+419 more) |
| Event | RecurrenceType | RecursDaily, RecursEveryWeekday, RecursMonthly, RecursMonthlyNth, RecursWeekly (+2 more) |
| Event | RecurrenceInstance | First, Second, Third, Fourth, Last |
| Event | RecurrenceMonthOfYear | January, February, March, April, May (+7 more) |
| Event | EventSubtype | Event |
| Event | Recurrence2PatternVersion | 1, 2 |
| Event | New_Account_Business_Internal_Role__c | Client, Homeowner Association, Labor Subcontractor, Municipality, Other (+3 more) |
| Event | New_Account_Record_Type__c | Home Owner, Builder |
| Event | Location_Custom__StateCode__s | AC, AG, AG, AL, AL (+331 more) |
| Event | Location_Custom__CountryCode__s | AF, AX, AL, DZ, AD (+234 more) |
| Event | Location_Custom__GeocodeAccuracy__s | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Event | Preferred_Contact_Method__c | Call, Text, Email |
| Event | Lead_Source__c | Company Truck, Crew at Jobsite, Digital Advertisement, Events and Networking, Online Marketplaces and Services (+11 more) |
| Event | Service_Type__c | Export, Installation Only, Other, Product + Installation, Product Only |
| Event | Relationship__c | New Client, Repeat Business |
| Event | Construction_Type__c | New Construction Commercial, New Construction Residential, Retrofit Commercial, Retrofit Residential, Service New Construction (+1 more) |
| Group | Type | AllCustomerPortal, ChannelProgramGroup, CollaborationGroup, DataAnalytics, Manager (+12 more) |
| inov8__PMT_Phase__c | inov8__Phase_Health__c | Not Started, On Track, At Risk, Late, On Hold (+2 more) |
| inov8__PMT_Program__c | inov8__Program_Health__c | Not Started, On Track, At Risk, Late, On Hold (+2 more) |
| inov8__PMT_Project__c | inov8__Level_of_Effort__c | Small, Medium, Large |
| inov8__PMT_Project__c | inov8__Portfolio__c | F&S, P2P, Q2O, R2R, New Entity |
| inov8__PMT_Project__c | inov8__Processes_Impacted__c | Accruals, Cash, Commissions, Comp & Ben, Fixed Assets (+5 more) |
| inov8__PMT_Project__c | inov8__Project_Category__c | IT, Non IT, SteerCo |
| inov8__PMT_Project__c | inov8__Project_Health__c | Not Started, On Track, At Risk, Late, On Hold (+2 more) |
| inov8__PMT_Project__c | inov8__Project_Initiator__c | Tax, IT, Legal, F&S, Sales |
| inov8__PMT_Project__c | inov8__Project_Status__c | New, In Review, Product Ordered, Permit, Product Arrival (+5 more) |
| inov8__PMT_Project__c | inov8__Roadmap_Status__c | Committed, Deferred, Incremental, Funded, Non funded (+2 more) |
| inov8__PMT_Project__c | inov8__SystemsImpacted__c | Other |
| inov8__PMT_Resource_Allocation__c | inov8__Role__c | Sponsor, Project Owner, PMO, SME, IT (+6 more) |
| inov8__PMT_Setting__mdt | Language | en_US, de, es, fr, it (+13 more) |
| inov8__PMT_Task__c | inov8__Sign_off_status__c | Submitted, Approved, Rejected |
| inov8__PMT_Task__c | inov8__Status__c | Not Started, In Progress, On Hold, Completed, Closed, not Completed |
| Lead | Salutation | Mr., Ms., Mrs., Dr., Prof. (+1 more) |
| Lead | GeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Lead | LeadSource | Advertisement, Customer Event, Employee Referral, External Referral, Google AdWords (+6 more) |
| Lead | Status | Unqualified, New, Working, Nurturing, Appointment Confirmed (+1 more) |
| Lead | Industry | Agriculture, Apparel, Banking, Biotechnology, Chemicals (+27 more) |
| Lead | Rating | Hot, Warm, Cold |
| Lead | Gender__c | Test1, Test2, Test3, Male, Female |
| Opportunity | StageName | Qualification, Needs Analysis, Proposal, Negotiation, Closed Won (+1 more) |
| Opportunity | Type | Existing Business, New Business |
| Opportunity | LeadSource | Advertisement, Customer Event, Employee Referral, External Referral, Google AdWords (+6 more) |
| Opportunity | ForecastCategory | Omitted, Pipeline, BestCase, MostLikely, Forecast (+1 more) |
| Opportunity | ForecastCategoryName | Omitted, Pipeline, Best Case, Commit, Closed |
| Opportunity | Loss_Reason__c | Lost to Competitor, No Budget / Lost Funding, No Decision / Non-Responsive, Price, Other |
| Opportunity__hd | StageName__hpr | Qualification, Needs Analysis, Proposal, Negotiation, Closed Won (+1 more) |
| Opportunity__hd | StageName__hst | Qualification, Needs Analysis, Proposal, Negotiation, Closed Won (+1 more) |
| Opportunity__hd | ForecastCategoryName__hpr | Omitted, Pipeline, Best Case, Commit, Closed |
| Opportunity__hd | ForecastCategoryName__hst | Omitted, Pipeline, Best Case, Commit, Closed |
| Order | Status | Draft, Activated |
| Order | BillingGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Order | ShippingGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Order | StatusCode | Draft, Activated, Canceled, Expired, Superseded |
| Product2 | Family | None, DOUBLE HUNG WINDOWS, SLIDER & FIXED WINDOWS, WINDOW FEATURES & EXTRAS, SLIDING PATIO DOORS (+8 more) |
| Product2 | QuantityUnitOfMeasure | Each |
| Quote | Status | Draft, Needs Review, In Review, Approved, Rejected (+3 more) |
| Quote | BillingGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Quote | ShippingGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Quote | QuoteToGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Quote | AdditionalGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Solution | Status | Draft, Reviewed, Duplicate |
| Task | Status | Open, Completed |
| Task | Priority | High, Normal |
| Task | Type | Call, Meeting, Other |
| Task | CallType | Internal, Inbound, Outbound |
| Task | RecurrenceTimeZoneSidKey | Pacific/Kiritimati, Pacific/Chatham, Antarctica/McMurdo, Pacific/Apia, Pacific/Auckland (+419 more) |
| Task | RecurrenceType | RecursDaily, RecursEveryWeekday, RecursMonthly, RecursMonthlyNth, RecursWeekly (+2 more) |
| Task | RecurrenceInstance | First, Second, Third, Fourth, Last |
| Task | RecurrenceMonthOfYear | January, February, March, April, May (+7 more) |
| Task | RecurrenceRegeneratedType | RecurrenceRegenerateAfterDueDate, RecurrenceRegenerateAfterToday, RecurrenceRegenerated |
| Task | TaskSubtype | Task, Email, ListEmail, Cadence, Call (+1 more) |
| Task | New_Account_Business_Internal_Role__c | Client, Homeowner Association, Labor Subcontractor, Municipality, Other (+3 more) |
| Task | New_Account_Record_Type__c | Home Owner, Builder |
| Task | Location_Custom__StateCode__s | AC, AG, AG, AL, AL (+331 more) |
| Task | Location_Custom__CountryCode__s | AF, AX, AL, DZ, AD (+234 more) |
| Task | Location_Custom__GeocodeAccuracy__s | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Task | Preferred_Contact_Method__c | Call, Text, Email |
| Task | Lead_Source__c | Company Truck, Crew at Jobsite, Digital Advertisement, Events and Networking, Online Marketplaces and Services (+11 more) |
| Task | Service_Type__c | Export, Installation Only, Other, Product + Installation, Product Only |
| Task | Relationship__c | New Client, Repeat Business |
| Task | Construction_Type__c | New Construction Commercial, New Construction Residential, Retrofit Commercial, Retrofit Residential, Service New Construction (+1 more) |
| User | GeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| User | TimeZoneSidKey | Pacific/Kiritimati, Pacific/Chatham, Antarctica/McMurdo, Pacific/Apia, Pacific/Auckland (+419 more) |
| User | LocaleSidKey | af_ZA, sq_AL, am_ET, ar_DZ, ar_BH (+230 more) |
| User | EmailEncodingKey | UTF-8, ISO-8859-1, Shift_JIS, ISO-2022-JP, EUC-JP (+5 more) |
| User | UserType | Standard, PowerPartner, PowerCustomerSuccess, CustomerSuccess, Guest (+3 more) |
| User | StartDay | 0, 1, 2, 3, 4 (+19 more) |
| User | EndDay | 0, 1, 2, 3, 4 (+19 more) |
| User | LanguageLocaleKey | en_US, de, es, fr, it (+13 more) |
| User | DigestFrequency | D, W, N |
| User | DefaultGroupNotificationFrequency | P, D, W, N |
| User | dfsle__Status__c | Inactive, Pending, Active |
| UserRole | OpportunityAccessForAccountOwner | None, Read, Edit |
| UserRole | CaseAccessForAccountOwner | None, Read, Edit |
| UserRole | ContactAccessForAccountOwner | None, Read, Edit |
| UserRole | PortalType | None, CustomerPortal, Partner |

## Migration Checklist

- [ ] Create 111 Supabase tables for custom objects
- [ ] Create 269 enum types / lookup tables from picklists
- [ ] Create 592 foreign key relationships
- [ ] Rebuild 32 Flows as DB triggers / Edge Functions / components
- [ ] Convert 47 validation rules to Zod schemas + CHECK constraints
- [ ] Port 35 Apex triggers to application logic
- [ ] Review 539 Apex business logic classes for porting
- [ ] Design RLS policies based on Salesforce profiles/permission sets
- [ ] Plan data migration (records, attachments, files)
- [ ] Map record types to application logic
