# Data Dictionary

> Exported: 2026-02-23T18:55:42.560Z
> Org: austin@stackked.tech (00DHp000001s6IAMAY)
> Objects: 138 | Fields: 4949 | Relationships: 4883

---

## Table of Contents

- [Account (Account)](#account)
- [Conga Sign Settings (APXT_CongaSign__CongaSign_Settings__c)](#apxtcongasigncongasignsettingsc)
- [Conga Sign Document (APXT_CongaSign__Document__c)](#apxtcongasigndocumentc)
- [Conga Sign Recipient (APXT_CongaSign__Recipient__c)](#apxtcongasignrecipientc)
- [Conga Sign Transaction (APXT_CongaSign__Transaction__c)](#apxtcongasigntransactionc)
- [Composer Host Override (APXTConga4__Composer_Host_Override__c)](#apxtconga4composerhostoverridec)
- [Conga Global Merge (APXTConga4__Composer_QuickMerge__c)](#apxtconga4composerquickmergec)
- [Composer Setting (APXTConga4__Composer_Setting__mdt)](#apxtconga4composersettingmdt)
- [Conga Collection (APXTConga4__Conga_Collection__c)](#apxtconga4congacollectionc)
- [Conga Collection Solution (APXTConga4__Conga_Collection_Solution__c)](#apxtconga4congacollectionsolutionc)
- [Conga Composer Settings (APXTConga4__Conga_Composer_Settings__c)](#apxtconga4congacomposersettingsc)
- [Conga Email Staging (APXTConga4__Conga_Email_Staging__c)](#apxtconga4congaemailstagingc)
- [Conga Email Template (APXTConga4__Conga_Email_Template__c)](#apxtconga4congaemailtemplatec)
- [Conga Query (APXTConga4__Conga_Merge_Query__c)](#apxtconga4congamergequeryc)
- [Conga Solution (APXTConga4__Conga_Solution__c)](#apxtconga4congasolutionc)
- [Conga Solution Email Template (APXTConga4__Conga_Solution_Email_Template__c)](#apxtconga4congasolutionemailtemplatec)
- [Conga Solution Export Environment (APXTConga4__Conga_Solution_Export_Environment__mdt)](#apxtconga4congasolutionexportenvironmentmdt)
- [Conga Solution Export Setting (APXTConga4__Conga_Solution_Export_Setting__mdt)](#apxtconga4congasolutionexportsettingmdt)
- [Conga Solution Parameter (APXTConga4__Conga_Solution_Parameter__c)](#apxtconga4congasolutionparameterc)
- [Conga Solution Query (APXTConga4__Conga_Solution_Query__c)](#apxtconga4congasolutionqueryc)
- [Conga Solution Report (APXTConga4__Conga_Solution_Report__c)](#apxtconga4congasolutionreportc)
- [Conga Solution Template (APXTConga4__Conga_Solution_Template__c)](#apxtconga4congasolutiontemplatec)
- [Conga Solutions Settings (APXTConga4__Conga_Solutions_Settings__c)](#apxtconga4congasolutionssettingsc)
- [Conga Template (APXTConga4__Conga_Template__c)](#apxtconga4congatemplatec)
- [Connected App Setting (APXTConga4__Connected_App_Setting__mdt)](#apxtconga4connectedappsettingmdt)
- [Document History (APXTConga4__Document_History__c)](#apxtconga4documenthistoryc)
- [Document History Detail (APXTConga4__Document_History_Detail__c)](#apxtconga4documenthistorydetailc)
- [EventData (APXTConga4__EventData__c)](#apxtconga4eventdatac)
- [VersionedData (APXTConga4__VersionedData__c)](#apxtconga4versioneddatac)
- [Asset (Asset)](#asset)
- [Attachment (Attachment)](#attachment)
- [API Config (BirdeyeCheckin__API_Config__mdt)](#birdeyecheckinapiconfigmdt)
- [Automation (BirdeyeCheckin__Automation__c)](#birdeyecheckinautomationc)
- [Automation Failed Record (BirdeyeCheckin__Automation_Failed_Record__c)](#birdeyecheckinautomationfailedrecordc)
- [Checkin Config (BirdeyeCheckin__Checkin_Config__c)](#birdeyecheckincheckinconfigc)
- [Connector (BirdeyeCheckin__Connector__c)](#birdeyecheckinconnectorc)
- [Labor-Only Item (bpmpro3__A2_Labor_Only_Item__c)](#bpmpro3a2laboronlyitemc)
- [Product & Labor Item (bpmpro3__A3_LaborItems__c)](#bpmpro3a3laboritemsc)
- [Add-On CPI (bpmpro3__Add_On_CPI__c)](#bpmpro3addoncpic)
- [Add-On Product (bpmpro3__AddOn_Product__c)](#bpmpro3addonproductc)
- [Back Charge (bpmpro3__Back_Charge__c)](#bpmpro3backchargec)
- [Building Material (bpmpro3__Building_Material__c)](#bpmpro3buildingmaterialc)
- [Building Permit and HOA (bpmpro3__Building_Permit_c__c)](#bpmpro3buildingpermitcc)
- [Company Settings (bpmpro3__Company_Settings__c)](#bpmpro3companysettingsc)
- [Contact CSV Import (bpmpro3__Contact_CSV_Import__c)](#bpmpro3contactcsvimportc)
- [CPI Add-On Product Catalog (bpmpro3__CPI_AddOn_Product_Catalog__c)](#bpmpro3cpiaddonproductcatalogc)
- [Configure Pricing Items (bpmpro3__CPI_Configure_Pricing_Items__c)](#bpmpro3cpiconfigurepricingitemsc)
- [CPI Preset Product Add-On (bpmpro3__CPI_Preset_Product_Add_On__c)](#bpmpro3cpipresetproductaddonc)
- [Deal Sheet (bpmpro3__Deal_Sheet__c)](#bpmpro3dealsheetc)
- [Dealer Item (bpmpro3__Dealer_Item__c)](#bpmpro3dealeritemc)
- [Inspection (bpmpro3__Inspections__c)](#bpmpro3inspectionsc)
- [Invoice Payment (bpmpro3__Invoice_Payment__c)](#bpmpro3invoicepaymentc)
- [Labor Charge (bpmpro3__Labor_Charge__c)](#bpmpro3laborchargec)
- [Labor Ticket (bpmpro3__Labor_Ticket__c)](#bpmpro3laborticketc)
- [Add-On Product and Service (bpmpro3__LaborItem_AddOn_Junction__c)](#bpmpro3laboritemaddonjunctionc)
- [Materials (bpmpro3__Material__c)](#bpmpro3materialc)
- [Product Order (bpmpro3__Orders__c)](#bpmpro3ordersc)
- [Org Info (bpmpro3__Org_Info__mdt)](#bpmpro3orginfomdt)
- [Client Payment (bpmpro3__PaymentBPM__c)](#bpmpro3paymentbpmc)
- [Permit Fee (bpmpro3__Permit_Fee__c)](#bpmpro3permitfeec)
- [Preset Product (bpmpro3__PP_Preset_Product__c)](#bpmpro3pppresetproductc)
- [Product-Only Item (bpmpro3__ProductItem__c)](#bpmpro3productitemc)
- [Project (bpmpro3__Project__c)](#bpmpro3projectc)
- [Project Contact Role (bpmpro3__Project_Contact_Role__c)](#bpmpro3projectcontactrolec)
- [Project Invoice (bpmpro3__Project_Invoice__c)](#bpmpro3projectinvoicec)
- [Project Stage (bpmpro3__Project_Stage__c)](#bpmpro3projectstagec)
- [Project Stage Assignment (bpmpro3__Project_Stage_Assignment__c)](#bpmpro3projectstageassignmentc)
- [Project Stage Assignment Team Member (bpmpro3__Project_Stage_Assignment_Team_Member__c)](#bpmpro3projectstageassignmentteammemberc)
- [Project Stage Team Member (bpmpro3__Project_Stage_Team_Member__c)](#bpmpro3projectstageteammemberc)
- [Property (bpmpro3__Property__c)](#bpmpro3propertyc)
- [Prospect (bpmpro3__Prospect__c)](#bpmpro3prospectc)
- [Reimbursement (bpmpro3__Reimbursement__c)](#bpmpro3reimbursementc)
- [Sales Commission (bpmpro3__Sales_Commission__c)](#bpmpro3salescommissionc)
- [Sales Commission Payout (bpmpro3__Sales_Commission_Payout__c)](#bpmpro3salescommissionpayoutc)
- [Sales Commission Table (bpmpro3__Sales_Commission_Table__c)](#bpmpro3salescommissiontablec)
- [Sales Document (bpmpro3__Sales_Document__c)](#bpmpro3salesdocumentc)
- [SalesDoc Clause (bpmpro3__SalesDoc_Clauses__c)](#bpmpro3salesdocclausesc)
- [SalesDoc Credit Memo (bpmpro3__SalesDoc_Credit_Memo__c)](#bpmpro3salesdoccreditmemoc)
- [Sales Document Invoice (bpmpro3__SalesDoc_Invoice__c)](#bpmpro3salesdocinvoicec)
- [Service Ticket (bpmpro3__Service_Ticket__c)](#bpmpro3serviceticketc)
- [Specialty Item (bpmpro3__SpecialtyItem__c)](#bpmpro3specialtyitemc)
- [Time Entry (bpmpro3__Time_Entry__c)](#bpmpro3timeentryc)
- [Timesheet (bpmpro3__Timesheet__c)](#bpmpro3timesheetc)
- [Warehouse Log (bpmpro3__Warehouse_Log__c)](#bpmpro3warehouselogc)
- [Work Assignment (bpmpro3__Work_Assignment__c)](#bpmpro3workassignmentc)
- [Campaign (Campaign)](#campaign)
- [Campaign Member (CampaignMember)](#campaignmember)
- [Case (Case)](#case)
- [Contact (Contact)](#contact)
- [Content Document (ContentDocument)](#contentdocument)
- [Content Version (ContentVersion)](#contentversion)
- [Contract (Contract)](#contract)
- [Agreement Configuration (dfsle__AgreementConfiguration__c)](#dfsleagreementconfigurationc)
- [DocuSign Auth Provider Metadata (dfsle__AuthProvider__mdt)](#dfsleauthprovidermdt)
- [Docusign Bulk Send List (dfsle__BulkList__c)](#dfslebulklistc)
- [Docusign Bulk Send Status (dfsle__BulkStatus__c)](#dfslebulkstatusc)
- [DocuSign Custom Parameter Map (dfsle__CustomParameterMap__c)](#dfslecustomparametermapc)
- [DocuSign Custom Recipient (dfsle__CustomRecipient__c)](#dfslecustomrecipientc)
- [Docusign Envelope Document (dfsle__Document__c)](#dfsledocumentc)
- [Docusign Envelope (dfsle__Envelope__c)](#dfsleenvelopec)
- [Docusign Envelope Template (dfsle__EnvelopeConfiguration__c)](#dfsleenvelopeconfigurationc)
- [Docusign Envelope Configuration Document (dfsle__EnvelopeConfigurationDocument__c)](#dfsleenvelopeconfigurationdocumentc)
- [Docusign Envelope Configuration Recipient (dfsle__EnvelopeConfigurationRecipient__c)](#dfsleenvelopeconfigurationrecipientc)
- [Docusign Localization (dfsle__EnvelopeLocalization__c)](#dfsleenvelopelocalizationc)
- [Docusign Status (dfsle__EnvelopeStatus__c)](#dfsleenvelopestatusc)
- [EOS Type (dfsle__EOS_Type__c)](#dfsleeostypec)
- [Docusign Gen Template (dfsle__GenTemplate__c)](#dfslegentemplatec)
- [Docusign Job (dfsle__Jobs__c)](#dfslejobsc)
- [Docusign Log (dfsle__Log__c)](#dfslelogc)
- [Docusign Envelope Recipient (dfsle__Recipient__c)](#dfslerecipientc)
- [Docusign Recipient Status (dfsle__RecipientStatus__c)](#dfslerecipientstatusc)
- [Event (Event)](#event)
- [Group (Group)](#group)
- [In App Checklist Settings (In_App_Checklist_Settings__c)](#inappchecklistsettingsc)
- [PMT Error Log (inov8__PMT_Error_Log__c)](#inov8pmterrorlogc)
- [PMT Phase (inov8__PMT_Phase__c)](#inov8pmtphasec)
- [PMT Program (inov8__PMT_Program__c)](#inov8pmtprogramc)
- [PMT Project (inov8__PMT_Project__c)](#inov8pmtprojectc)
- [PMT Resource Allocation (inov8__PMT_Resource_Allocation__c)](#inov8pmtresourceallocationc)
- [PMT Resource Availability (inov8__PMT_Resource_Availability__c)](#inov8pmtresourceavailabilityc)
- [PMT Setting (inov8__PMT_Setting__mdt)](#inov8pmtsettingmdt)
- [PMT Task (inov8__PMT_Task__c)](#inov8pmttaskc)
- [Lead (Lead)](#lead)
- [Note (Note)](#note)
- [Opportunity (Opportunity)](#opportunity)
- [Opportunity (Historical) (Opportunity__hd)](#opportunityhd)
- [Opportunity Product (OpportunityLineItem)](#opportunitylineitem)
- [Order (Order)](#order)
- [Order Product (OrderItem)](#orderitem)
- [Price Book (Pricebook2)](#pricebook2)
- [Price Book Entry (PricebookEntry)](#pricebookentry)
- [Product (Product2)](#product2)
- [Quote (Quote)](#quote)
- [Quote Line Item (QuoteLineItem)](#quotelineitem)
- [Solution (Solution)](#solution)
- [Task (Task)](#task)
- [User (User)](#user)
- [Role (UserRole)](#userrole)

---

## Account (`Account`) {#account}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 001 |
| Fields | 117 |
| Relationships | 143 |
| Record Types | 4 |

### Record Types

| Name | Developer Name | Active | Default |
|------|----------------|--------|---------|
| Builder | Builder | Yes | Yes |
| Home Owner | Home_Owner | No | No |
| Home Owner | Home_Owner | Yes | No |
| Person Account | PersonAccount | Yes | No |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Account ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `MasterRecordId` | Master Record ID | reference | `uuid` |  |  | -> Account (Lookup) |
| `Name` | Account Name | string | `varchar(255)` |  |  |  |
| `LastName` | Last Name | string | `varchar(80)` |  |  |  |
| `FirstName` | First Name | string | `varchar(40)` |  |  |  |
| `Salutation` | Salutation | picklist | `text` |  |  |  |
| `MiddleName` | Middle Name | string | `varchar(40)` |  |  |  |
| `Suffix` | Suffix | string | `varchar(40)` |  |  |  |
| `Type` | Account Type | picklist | `text` |  |  |  |
| `RecordTypeId` | Record Type ID | reference | `uuid` |  |  | -> RecordType (Lookup) |
| `ParentId` | Parent Account ID | reference | `uuid` |  |  | -> Account (Lookup) |
| `BillingStreet` | Billing Street | textarea | `text` |  |  |  |
| `BillingCity` | Billing City | string | `varchar(40)` |  |  |  |
| `BillingState` | Billing State/Province | string | `varchar(80)` |  |  |  |
| `BillingPostalCode` | Billing Zip/Postal Code | string | `varchar(20)` |  |  |  |
| `BillingCountry` | Billing Country | string | `varchar(80)` |  |  |  |
| `BillingLatitude` | Billing Latitude | double | `numeric(18,15)` |  |  |  |
| `BillingLongitude` | Billing Longitude | double | `numeric(18,15)` |  |  |  |
| `BillingGeocodeAccuracy` | Billing Geocode Accuracy | picklist | `text` |  |  |  |
| `BillingAddress` | Billing Address | address | `jsonb` |  |  |  |
| `ShippingStreet` | Shipping Street | textarea | `text` |  |  |  |
| `ShippingCity` | Shipping City | string | `varchar(40)` |  |  |  |
| `ShippingState` | Shipping State/Province | string | `varchar(80)` |  |  |  |
| `ShippingPostalCode` | Shipping Zip/Postal Code | string | `varchar(20)` |  |  |  |
| `ShippingCountry` | Shipping Country | string | `varchar(80)` |  |  |  |
| `ShippingLatitude` | Shipping Latitude | double | `numeric(18,15)` |  |  |  |
| `ShippingLongitude` | Shipping Longitude | double | `numeric(18,15)` |  |  |  |
| `ShippingGeocodeAccuracy` | Shipping Geocode Accuracy | picklist | `text` |  |  |  |
| `ShippingAddress` | Shipping Address | address | `jsonb` |  |  |  |
| `Phone` | Account Phone | phone | `text` |  |  |  |
| `Fax` | Account Fax | phone | `text` |  |  |  |
| `AccountNumber` | Account Number | string | `varchar(40)` |  |  |  |
| `Website` | Website | url | `text` |  |  |  |
| `PhotoUrl` | Photo URL | url | `text` |  |  |  |
| `Sic` | SIC Code | string | `varchar(20)` |  |  |  |
| `Industry` | Industry | picklist | `text` |  |  |  |
| `AnnualRevenue` | Annual Revenue | currency | `numeric(18,2)` |  |  |  |
| `NumberOfEmployees` | Employees | int | `int4` |  |  |  |
| `Ownership` | Ownership | picklist | `text` |  |  |  |
| `TickerSymbol` | Ticker Symbol | string | `varchar(20)` |  |  |  |
| `Description` | Account Description | textarea | `text` |  |  |  |
| `Rating` | Account Rating | picklist | `text` |  |  |  |
| `Site` | Account Site | string | `varchar(80)` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> User (Lookup) |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `PersonContactId` | Contact ID | reference | `uuid` |  |  | -> Contact (Lookup) |
| `IsPersonAccount` | Is Person Account | boolean | `boolean` |  |  |  |
| `PersonMailingStreet` | Mailing Street | textarea | `text` |  |  |  |
| `PersonMailingCity` | Mailing City | string | `varchar(40)` |  |  |  |
| `PersonMailingState` | Mailing State/Province | string | `varchar(80)` |  |  |  |
| `PersonMailingPostalCode` | Mailing Zip/Postal Code | string | `varchar(20)` |  |  |  |
| `PersonMailingCountry` | Mailing Country | string | `varchar(80)` |  |  |  |
| `PersonMailingLatitude` | Mailing Latitude | double | `numeric(18,15)` |  |  |  |
| `PersonMailingLongitude` | Mailing Longitude | double | `numeric(18,15)` |  |  |  |
| `PersonMailingGeocodeAccuracy` | Mailing Geocode Accuracy | picklist | `text` |  |  |  |
| `PersonMailingAddress` | Mailing Address | address | `jsonb` |  |  |  |
| `PersonOtherStreet` | Other Street | textarea | `text` |  |  |  |
| `PersonOtherCity` | Other City | string | `varchar(40)` |  |  |  |
| `PersonOtherState` | Other State/Province | string | `varchar(80)` |  |  |  |
| `PersonOtherPostalCode` | Other Zip/Postal Code | string | `varchar(20)` |  |  |  |
| `PersonOtherCountry` | Other Country | string | `varchar(80)` |  |  |  |
| `PersonOtherLatitude` | Other Latitude | double | `numeric(18,15)` |  |  |  |
| `PersonOtherLongitude` | Other Longitude | double | `numeric(18,15)` |  |  |  |
| `PersonOtherGeocodeAccuracy` | Other Geocode Accuracy | picklist | `text` |  |  |  |
| `PersonOtherAddress` | Other Address | address | `jsonb` |  |  |  |
| `PersonMobilePhone` | Mobile | phone | `text` |  |  |  |
| `PersonHomePhone` | Home Phone | phone | `text` |  |  |  |
| `PersonOtherPhone` | Other Phone | phone | `text` |  |  |  |
| `PersonAssistantPhone` | Asst. Phone | phone | `text` |  |  |  |
| `PersonEmail` | Email | email | `text` |  |  |  |
| `PersonTitle` | Title | string | `varchar(80)` |  |  |  |
| `PersonDepartment` | Department | string | `varchar(80)` |  |  |  |
| `PersonAssistantName` | Assistant | string | `varchar(40)` |  |  |  |
| `PersonLeadSource` | Lead Source | picklist | `text` |  |  |  |
| `PersonBirthdate` | Birthdate | date | `date` |  |  |  |
| `PersonHasOptedOutOfEmail` | Email Opt Out | boolean | `boolean` |  |  |  |
| `PersonHasOptedOutOfFax` | Fax Opt Out | boolean | `boolean` |  |  |  |
| `PersonDoNotCall` | Do Not Call | boolean | `boolean` |  |  |  |
| `PersonLastCURequestDate` | Last Stay-in-Touch Request Date | datetime | `timestamptz` |  |  |  |
| `PersonLastCUUpdateDate` | Last Stay-in-Touch Save Date | datetime | `timestamptz` |  |  |  |
| `PersonEmailBouncedReason` | Email Bounced Reason | string | `varchar(255)` |  |  |  |
| `PersonEmailBouncedDate` | Email Bounced Date | datetime | `timestamptz` |  |  |  |
| `PersonPronouns` | Pronouns | picklist | `text` |  |  |  |
| `PersonGenderIdentity` | Gender Identity | picklist | `text` |  |  |  |
| `Jigsaw` | Data.com Key | string | `varchar(20)` |  |  |  |
| `JigsawCompanyId` | Jigsaw Company ID | string | `varchar(20)` |  |  |  |
| `AccountSource` | Account Source | picklist | `text` |  |  |  |
| `SicDesc` | SIC Description | string | `varchar(80)` |  |  |  |
| `IsPriorityRecord` | Important | boolean | `boolean` |  |  |  |
| `County__c` | County | string | `varchar(255)` |  |  |  |
| `bpmpro3__Business_Internal_Role__c` | Business Internal Role | picklist | `text` |  |  |  |
| `bpmpro3__Billing_Email_Address__c` | Billing Email Address | email | `text` |  |  |  |
| `bpmpro3__Stripe_Account_Id__c` | Stripe Account Id | string | `varchar(90)` |  |  |  |
| `bpmpro3__Supports_CSV_Import__c` | Supports CSV Import | boolean | `boolean` |  |  |  |
| `bpmpro3__Toll_Free_Number__c` | Toll-Free Number | phone | `text` |  |  |  |
| `AP_Customer_ID__c` | AP_Customer_ID | string | `varchar(100)` |  |  |  |
| `AP_Customer_Notes__c` | AP Customer Notes | textarea | `text` |  |  |  |
| `AP_Signup_Date__c` | AP Signup Date | date | `date` |  |  |  |
| `AP_Customer_Type__c` | AP Customer Type | string | `varchar(100)` |  |  |  |
| `bpmpro3__QB_Customer_ID__c` | QB Customer ID | string | `varchar(16)` |  |  |  |
| `bpmpro3__Category__pc` | Category | picklist | `text` |  |  |  |
| `bpmpro3__Internal_Company_Role__pc` | Internal Company Role | picklist | `text` |  |  |  |
| `bpmpro3__Company_Role_Active__pc` | Company Role Active | boolean | `boolean` |  |  |  |
| `bpmpro3__Same_As_Billing_Email__pc` | Same As Billing Email | boolean | `boolean` |  |  |  |
| `bpmpro3__Same_as_Billing_Phone__pc` | Same as Billing Phone | boolean | `boolean` |  |  |  |
| `bpmpro3__Secondary_Email__pc` | Secondary Email | email | `text` |  |  |  |
| `bpmpro3__Account_Business_Internal_Role__pc` | Account Business Internal Role | string | `text` |  |  |  |
| `bpmpro3__Primary_Contact__pc` | Primary Contact | boolean | `boolean` |  |  |  |
| `Preferred_Contact_Method__pc` | Preferred Contact Method | picklist | `text` |  |  |  |

### Picklist Values

**Salutation** (`Salutation`):
- Mr. = `Mr.`
- Ms. = `Ms.`
- Mrs. = `Mrs.`
- Dr. = `Dr.`
- Prof. = `Prof.`
- Mx. = `Mx.`

**Account Type** (`Type`):
- Analyst = `Analyst`
- Competitor = `Competitor`
- Customer = `Customer`
- Integrator = `Integrator`
- Investor = `Investor`
- Partner = `Partner`
- Press = `Press`
- Prospect = `Prospect`
- Reseller = `Reseller`
- Other = `Other`

**Billing Geocode Accuracy** (`BillingGeocodeAccuracy`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

**Shipping Geocode Accuracy** (`ShippingGeocodeAccuracy`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

**Industry** (`Industry`):
- Agriculture = `Agriculture`
- Apparel = `Apparel`
- Banking = `Banking`
- Biotechnology = `Biotechnology`
- Chemicals = `Chemicals`
- Communications = `Communications`
- Construction = `Construction`
- Consulting = `Consulting`
- Education = `Education`
- Electronics = `Electronics`
- Energy = `Energy`
- Engineering = `Engineering`
- Entertainment = `Entertainment`
- Environmental = `Environmental`
- Finance = `Finance`
- Food & Beverage = `Food & Beverage`
- Government = `Government`
- Healthcare = `Healthcare`
- Hospitality = `Hospitality`
- Insurance = `Insurance`
- Machinery = `Machinery`
- Manufacturing = `Manufacturing`
- Media = `Media`
- Not For Profit = `Not For Profit`
- Other = `Other`
- Recreation = `Recreation`
- Retail = `Retail`
- Shipping = `Shipping`
- Technology = `Technology`
- Telecommunications = `Telecommunications`
- Transportation = `Transportation`
- Utilities = `Utilities`

**Ownership** (`Ownership`):
- Public = `Public`
- Private = `Private`
- Subsidiary = `Subsidiary`
- Other = `Other`

**Account Rating** (`Rating`):
- Hot = `Hot`
- Warm = `Warm`
- Cold = `Cold`

**Mailing Geocode Accuracy** (`PersonMailingGeocodeAccuracy`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

**Other Geocode Accuracy** (`PersonOtherGeocodeAccuracy`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

**Lead Source** (`PersonLeadSource`):
- Advertisement = `Advertisement`
- Customer Event = `Customer Event`
- Employee Referral = `Employee Referral`
- External Referral = `External Referral`
- Google AdWords = `Google AdWords`
- Other = `Other`
- Partner = `Partner`
- Purchased List = `Purchased List`
- Trade Show = `Trade Show`
- Webinar = `Webinar`
- Website = `Website`

**Pronouns** (`PersonPronouns`):
- He/Him = `He/Him`
- She/Her = `She/Her`
- They/Them = `They/Them`
- He/They = `He/They`
- She/They = `She/They`
- Not Listed = `Not Listed`

**Gender Identity** (`PersonGenderIdentity`):
- Male = `Male`
- Female = `Female`
- Nonbinary = `Nonbinary`
- Not Listed = `Not Listed`

**Account Source** (`AccountSource`):
- Advertisement = `Advertisement`
- Customer Event = `Customer Event`
- Employee Referral = `Employee Referral`
- External Referral = `External Referral`
- Google AdWords = `Google AdWords`
- Other = `Other`
- Partner = `Partner`
- Purchased List = `Purchased List`
- Trade Show = `Trade Show`
- Webinar = `Webinar`
- Website = `Website`

**Business Internal Role** (`bpmpro3__Business_Internal_Role__c`):
- Client = `Client`
- Homeowner Association = `Homeowner Association`
- Labor Subcontractor = `Labor Subcontractor`
- Municipality = `Municipality`
- Other = `Other`
- Owning Entity = `Owning Entity`
- Product Vendor = `Product Vendor`
- Professional Services = `Professional Services`

**Category** (`bpmpro3__Category__pc`):
- A/C Contractor = `A/C Contractor`
- A/C Supplier = `A/C Supplier`
- Accountant = `Accountant`
- Alarm Contractor = `Alarm Contractor`
- Alarm Technician = `Alarm Technician`
- Anodizing = `Anodizing`
- Architect = `Architect`
- Attorney = `Attorney`
- Banks = `Banks`
- Bath Furnishings = `Bath Furnishings`
- Blinds = `Blinds`
- Carpenter = `Carpenter`
- Cladding Installer = `Cladding Installer`
- Cleaning = `Cleaning`
- Closets = `Closets`
- Coatings = `Coatings`
- Concrete = `Concrete`
- Containers = `Containers`
- Contractor = `Contractor`
- Crating and Packaging = `Crating and Packaging`
- Delivery Company = `Delivery Company`
- Demolition = `Demolition`
- Developer = `Developer`
- Drywall Contractor = `Drywall Contractor`
- Electrical Contractor = `Electrical Contractor`
- Electrical Supplier = `Electrical Supplier`
- Employee = `Employee`
- Engineer = `Engineer`
- Equipment = `Equipment`
- Fences = `Fences`
- Financing = `Financing`
- Flooring Contractor = `Flooring Contractor`
- Freight Forward Agent = `Freight Forward Agent`
- Garbage = `Garbage`
- General Contractor = `General Contractor`
- Graphic Designer = `Graphic Designer`
- Hauling and Excavating = `Hauling and Excavating`
- Inspector = `Inspector`
- Insurance Broker = `Insurance Broker`
- Interior Designer = `Interior Designer`
- Ironwork Contractor = `Ironwork Contractor`
- Kitchen Contractor = `Kitchen Contractor`
- Landscaping Contractor = `Landscaping Contractor`
- Land Surveyors = `Land Surveyors`
- Locksmith = `Locksmith`
- Metalwork Shop = `Metalwork Shop`
- Municipality Employee = `Municipality Employee`
- Other = `Other`
- Painting Contractor = `Painting Contractor`
- Permit Expediter = `Permit Expediter`
- Plastering Contractor = `Plastering Contractor`
- Plumbing Contractor = `Plumbing Contractor`
- Plumbing Supplier = `Plumbing Supplier`
- Pool Contractor = `Pool Contractor`
- Project Estimator = `Project Estimator`
- Project Manager = `Project Manager`
- Property Manager = `Property Manager`
- Property Owner = `Property Owner`
- Real Estate Agent = `Real Estate Agent`
- Real Estate Appraiser = `Real Estate Appraiser`
- Retractable Screen Contractor = `Retractable Screen Contractor`
- Roofing Contractor = `Roofing Contractor`
- Scaffolding Contractor = `Scaffolding Contractor`
- Shell Contractor = `Shell Contractor`
- Signs Contractor = `Signs Contractor`
- Stucco Contractors = `Stucco Contractors`
- Surveyors = `Surveyors`
- Tile and Stones Supplier = `Tile and Stones Supplier`
- Transportation Company = `Transportation Company`
- Window Contractor = `Window Contractor`
- Window Installer = `Window Installer`
- Window Manufacturer = `Window Manufacturer`
- Window Treatment Contractor = `Window Treatment Contractor`

**Internal Company Role** (`bpmpro3__Internal_Company_Role__pc`):
- Accounting = `Accounting`
- Administration = `Administration`
- Engineering = `Engineering`
- IT Support = `IT Support`
- Legal and Compliance = `Legal and Compliance`
- Management = `Management`
- Marketing = `Marketing`
- Operations = `Operations`
- Permitting = `Permitting`
- Sales and Estimating = `Sales and Estimating`
- Project Management = `Project Management`
- Customer Service = `Customer Service`
- Human Resources (HR) = `Human Resources (HR)`
- Other = `Other`

**Preferred Contact Method** (`Preferred_Contact_Method__pc`):
- Call = `Call`
- Text = `Text`
- Email = `Email`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| APXT_CongaSign__Transaction__c | Parent_001__c | APXT_CongaSign_Transactions__r | No |
| APXT_CongaSign__Transaction__c | Parent_003__c | APXT_CongaSign_Transactions__pr | No |
| AcceptedEventRelation | AccountId | N/A | No |
| AcceptedEventRelation | RelationId | PersonAcceptedEventRelations | No |
| Account | ParentId | ChildAccounts | No |
| AccountContactRelation | AccountId | AccountContactRelations | Yes |
| AccountContactRelation | ContactId | PersonAccountContactRelations | Yes |
| AccountContactRole | AccountId | AccountContactRoles | Yes |
| AccountContactRole | ContactId | PersonAccountContactRoles | Yes |
| AccountPartner | AccountFromId | AccountPartnersFrom | Yes |
| AccountPartner | AccountToId | AccountPartnersTo | Yes |
| ActionPlan | TargetId | ActionPlans | No |
| Asset | AccountId | Assets | Yes |
| Asset | AssetProvidedById | ProvidedAssets | No |
| Asset | AssetServicedById | ServicedAssets | No |
| Asset | ContactId | PersonAssets | Yes |
| AssociatedLocation | ParentRecordId | AssociatedLocations | Yes |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CampaignMember | ContactId | PersonCampaignMembers | Yes |
| CampaignMember | LeadOrContactId | N/A | No |
| Case | AccountId | Cases | No |
| Case | ContactId | PersonCases | No |
| CaseContactRole | ContactId | PersonCaseContactRoles | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| Contact | AccountId | Contacts | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContactRequest | WhoId | PersonContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Contract | AccountId | Contracts | Yes |
| Contract | CustomerSignedId | PersonContractsSigned | No |
| ContractContactRole | ContactId | PersonContractContactRoles | Yes |
| DeclinedEventRelation | AccountId | N/A | No |
| DeclinedEventRelation | RelationId | PersonDeclinedEventRelations | No |
| EmailBounceEvent | BouncedObjectId | N/A | No |
| EmailStatus | WhoId | PersonEmailStatuses | Yes |
| Event | AccountId | N/A | No |
| Event | WhatId | Events | Yes |
| Event | WhoId | PersonEvents | Yes |
| EventRelation | AccountId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| EventWhoRelation | AccountId | N/A | No |
| EventWhoRelation | RelationId | PersonEventWhoRelations | No |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Lead | ConvertedAccountId | N/A | No |
| Lead | ConvertedContactId | N/A | No |
| ListEmail | RelatedToId | PersonListEmails | No |
| ListEmailIndividualRecipient | RecipientId | PersonListEmailIndividualRecipients | Yes |
| ListEmailSentResult | RecipientId | PersonListEmailRecipients | No |
| MatchingInformation | SFDCIdId | N/A | Yes |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | AccountId | OpenActivities | Yes |
| OpenActivity | PrimaryAccountId | N/A | No |
| OpenActivity | PrimaryWhoId | N/A | No |
| OpenActivity | WhoId | PersonOpenActivities | Yes |
| Opportunity | AccountId | Opportunities | Yes |
| Opportunity | ContactId | PersonOpportunities | No |
| OpportunityContactRole | ContactId | PersonOpportunityContactRoles | Yes |
| OpportunityPartner | AccountToId | OpportunityPartnersTo | Yes |
| Order | AccountId | Orders | Yes |
| Order | CustomerAuthorizedById | N/A | No |
| OutgoingEmail | RelatedToId | N/A | No |
| OutgoingEmail | WhoId | N/A | No |
| OutgoingEmailRelation | RelationId | PersonOutgoingEmailRelations | No |
| Partner | AccountFromId | PartnersFrom | Yes |
| Partner | AccountToId | PartnersTo | Yes |
| Quote | AccountId | N/A | No |
| Quote | ContactId | PersonQuotes | No |
| Quote | QuoteAccountId | Quotes | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| ScorecardAssociation | TargetEntityId | ScorecardAssociations | Yes |
| SocialPersona | ParentId | Personas | Yes |
| SocialPost | WhoId | Posts | No |
| Task | AccountId | N/A | No |
| Task | WhatId | Tasks | Yes |
| Task | WhoId | PersonTasks | Yes |
| TaskRelation | AccountId | N/A | No |
| TaskRelation | RelationId | TaskRelations | Yes |
| TaskWhoRelation | AccountId | N/A | No |
| TaskWhoRelation | RelationId | PersonTaskWhoRelations | No |
| User | AccountId | Users | No |
| User | ContactId | PersonUsers | No |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| UserEmailPreferredPerson | PersonRecordId | PersonPersonRecord | Yes |
| UserPrioritizedRecord | TargetId | N/A | Yes |
| UserRole | PortalAccountId | N/A | No |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VideoCallParticipant | RelatedPersonId | PersonRelatedPersons | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| WorkOrder | AccountId | WorkOrders | No |
| WorkOrder | ContactId | PersonWorkOrders | No |
| bpmpro3__A3_LaborItems__c | bpmpro3__A3_Vendor__c | bpmpro3__A3_Vendor_Rel__r | No |
| bpmpro3__AddOn_Product__c | bpmpro3__AOP_Vendor__c | bpmpro3__AOP_Vendor_Rel__r | No |
| bpmpro3__Building_Permit_c__c | bpmpro3__BP_HOA__c | bpmpro3__BP_HOA_Rel__r | No |
| bpmpro3__Building_Permit_c__c | bpmpro3__BP_Municipality__c | bpmpro3__BP_Municipality_Rel__r | No |
| bpmpro3__Company_Settings__c | bpmpro3__SOS_Owning_Entity__c | bpmpro3__Company_Settings__r | No |
| bpmpro3__Deal_Sheet__c | bpmpro3__DS_SalesRep__c | bpmpro3__Sales_Commission_Calcs__pr | No |
| bpmpro3__Inspections__c | bpmpro3__IN_Person_Present__c | bpmpro3__PersonPresent_Inspections__pr | No |
| bpmpro3__Inspections__c | bpmpro3__IN_Scheduled_By__c | bpmpro3__ScheduledBy_Inspections__pr | No |
| bpmpro3__Labor_Ticket__c | bpmpro3__LT_Subcontractor_Company__c | bpmpro3__LT_Subcontractor_Rel__r | No |
| bpmpro3__Orders__c | bpmpro3__PO_Vendor__c | bpmpro3__PO_Vendor_Rel__r | No |
| bpmpro3__ProductItem__c | bpmpro3__A1_Vendor__c | bpmpro3__A1_Vendor_Rel__r | No |
| bpmpro3__Project_Contact_Role__c | bpmpro3__PCR_Contact__c | bpmpro3__Project_Contact_Roles__pr | No |
| bpmpro3__Project__c | bpmpro3__PJ_Account__c | bpmpro3__PJ_Account_Rel__r | Yes |
| bpmpro3__Project__c | bpmpro3__PJ_Project_Manager__c | bpmpro3__Project_Manager_Rel__pr | No |
| bpmpro3__Project__c | bpmpro3__PJ_Sales_Person__c | bpmpro3__PJ_Sales_Person_Rel__pr | No |
| bpmpro3__Project__c | bpmpro3__Referring_Party__c | bpmpro3__Projects2__pr | No |
| bpmpro3__Property__c | bpmpro3__PTY_Promoted_Client_Account__c | bpmpro3__PromotedProperties__r | No |
| bpmpro3__Property__c | bpmpro3__PTY_PropertyMgmtCompany__c | bpmpro3__Properties__r | No |
| bpmpro3__Property__c | bpmpro3__PTY_Property_Manager__c | bpmpro3__Properties__pr | No |
| bpmpro3__Prospect__c | bpmpro3__PRT_Converted_Account__c | bpmpro3__Prospects__r | No |
| bpmpro3__Prospect__c | bpmpro3__PRT_Converted_Contact__c | bpmpro3__Prospects__pr | No |
| bpmpro3__Sales_Commission_Payout__c | bpmpro3__SCP_Sales_Rep__c | bpmpro3__Sales_Commission_Payouts__pr | No |
| bpmpro3__Sales_Document__c | bpmpro3__SD_Municipality__c | bpmpro3__SD_Municipality_Rel__r | No |
| bpmpro3__Service_Ticket__c | bpmpro3__SVC_Account__c | bpmpro3__Service_Tickets__r | No |
| bpmpro3__Service_Ticket__c | bpmpro3__SVC_Primary_Contact__c | bpmpro3__Service_Tickets__pr | No |
| bpmpro3__SpecialtyItem__c | bpmpro3__C_Vendor__c | bpmpro3__C_Vendor_Rel__r | No |
| bpmpro3__Timesheet__c | bpmpro3__TS_Employee_Name__c | bpmpro3__Timesheets__pr | No |
| bpmpro3__Timesheet__c | bpmpro3__TS_Supervisor__c | bpmpro3__Timesheets1__pr | No |
| bpmpro3__Warehouse_Log__c | bpmpro3__WL_Handled_By__c | bpmpro3__WL_Handled_By_Rel__pr | No |
| bpmpro3__Work_Assignment__c | bpmpro3__WA_Assignment_Coordinator__c | bpmpro3__WA_Coordinator_Rel__pr | No |
| bpmpro3__Work_Assignment__c | bpmpro3__WA_Resource_Name__c | bpmpro3__WA_Resource_Name_Rel__pr | No |
| dfsle__EnvelopeStatus__c | dfsle__Account__c | dfsle__DocuSign_Status__r | No |
| dfsle__EnvelopeStatus__c | dfsle__Contact__c | dfsle__DocuSign_Status__pr | No |
| dfsle__RecipientStatus__c | dfsle__Account__c | dfsle__DocuSign_Recipient_Status__r | No |
| dfsle__RecipientStatus__c | dfsle__Contact__c | dfsle__DocuSign_Recipient_Status__pr | No |
| inov8__PMT_Project__c | Account__c | PMT_Projects__r | No |

---

## Conga Sign Settings (`APXT_CongaSign__CongaSign_Settings__c`) {#apxtcongasigncongasignsettingsc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0r |
| Fields | 10 |
| Relationships | 23 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Name | string | `varchar(38)` |  |  |  |
| `SetupOwnerId` | Location | reference | `uuid` |  |  | -> Organization, Profile, User (Lookup) |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXT_CongaSign__Value__c` | Value | string | `varchar(255)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Conga Sign Document (`APXT_CongaSign__Document__c`) {#apxtcongasigndocumentc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0s |
| Fields | 15 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Document Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXT_CongaSign__ContentDocumentId__c` | Content Document Id | string | `varchar(18)` |  |  |  |
| `APXT_CongaSign__ContentVersionId__c` | Content Version Id | string | `varchar(18)` |  |  |  |
| `APXT_CongaSign__DocumentOrder__c` | Document Order | double | `float8` |  |  |  |
| `APXT_CongaSign__ExternalId__c` | ExternalId | string | `varchar(255)` |  | Yes |  |
| `APXT_CongaSign__Transaction__c` | Conga Sign Transaction | reference | `uuid` |  |  | -> APXT_CongaSign__Transaction__c (Lookup) |
| `APXT_CongaSign__Type__c` | Type | picklist | `text` |  |  |  |

### Picklist Values

**Type** (`APXT_CongaSign__Type__c`):
- Original = `Original`
- Final = `Final`
- Signer Attachment = `Signer_Attachment`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Conga Sign Recipient (`APXT_CongaSign__Recipient__c`) {#apxtcongasignrecipientc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0t |
| Fields | 21 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Recipient Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `APXT_CongaSign__Transaction__c` | Conga Sign Transaction | reference | `uuid` | Yes |  | -> APXT_CongaSign__Transaction__c (MasterDetail) |
| `APXT_CongaSign__Company__c` | Company | string | `varchar(255)` |  |  |  |
| `APXT_CongaSign__DeclineReason__c` | Decline Reason | textarea | `text` |  |  |  |
| `APXT_CongaSign__Email__c` | Email | email | `text` |  |  |  |
| `APXT_CongaSign__Initials__c` | Initials | string | `varchar(255)` |  |  |  |
| `APXT_CongaSign__RecipientName__c` | Name | string | `varchar(255)` |  |  |  |
| `APXT_CongaSign__SignedOn__c` | Signed On | datetime | `timestamptz` |  |  |  |
| `APXT_CongaSign__SignerIndex__c` | Signer Index | double | `float8` |  |  |  |
| `APXT_CongaSign__Status__c` | Status | picklist | `text` |  |  |  |
| `APXT_CongaSign__Title__c` | Title | string | `varchar(255)` |  |  |  |
| `APXT_CongaSign__UUID__c` | UUID | string | `varchar(255)` |  | Yes |  |

### Picklist Values

**Status** (`APXT_CongaSign__Status__c`):
- PENDING = `PENDING`
- SENT = `SENT`
- VIEWED = `VIEWED`
- COMPLETE = `COMPLETE`
- DECLINED = `DECLINED`
- CANCELLED = `CANCELLED`
- EXPIRED = `EXPIRED`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Conga Sign Transaction (`APXT_CongaSign__Transaction__c`) {#apxtcongasigntransactionc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0v |
| Fields | 36 |
| Relationships | 36 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Transaction Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `APXT_CongaSign__BusinessUnit__c` | Business Unit | string | `varchar(255)` |  |  |  |
| `APXT_CongaSign__CompletedOn__c` | Completed On | datetime | `timestamptz` |  |  |  |
| `APXT_CongaSign__ContentDocumentId__c` | Content Document Id | string | `varchar(18)` |  |  |  |
| `APXT_CongaSign__ExternalObjectId__c` | External Object Id | string | `varchar(18)` |  |  |  |
| `APXT_CongaSign__FinalDocumentId__c` | Final Document Id | string | `varchar(255)` |  |  |  |
| `APXT_CongaSign__FinalDocumentsSyncStatus__c` | Final Document Sync Status | picklist | `text` |  |  |  |
| `APXT_CongaSign__OriginalDocumentId__c` | Original Document Id | string | `varchar(18)` |  |  |  |
| `APXT_CongaSign__RequestedOn__c` | Created On | datetime | `timestamptz` |  |  |  |
| `APXT_CongaSign__SendOnBehalfOfEmail__c` | Send On Behalf Of Email | email | `text` |  |  |  |
| `APXT_CongaSign__SendOnBehalfOfName__c` | Send On Behalf Of Name | string | `varchar(255)` |  |  |  |
| `APXT_CongaSign__SenderEmail__c` | Sender Email | email | `text` |  |  |  |
| `APXT_CongaSign__SenderName__c` | Sender Name | string | `varchar(255)` |  |  |  |
| `APXT_CongaSign__Status__c` | Status | picklist | `text` |  |  |  |
| `APXT_CongaSign__TransactionId__c` | Transaction Id | string | `varchar(255)` |  |  |  |
| `APXT_CongaSign__UUID__c` | UUID | string | `varchar(255)` |  | Yes |  |
| `APXT_CongaSign__WritebackStatus__c` | Write Back Status | picklist | `text` |  |  |  |
| `APXT_CongaSign__Duration__c` | Duration Days | double | `float8` |  |  |  |
| `Parent_003__c` | Contact | reference | `uuid` |  |  | -> Contact (Lookup) |
| `Parent_006__c` | Opportunity | reference | `uuid` |  |  | -> Opportunity (Lookup) |
| `Parent_0WO__c` | WorkOrder | reference | `uuid` |  |  | -> WorkOrder (Lookup) |
| `Parent_801__c` | Order | reference | `uuid` |  |  | -> Order (Lookup) |
| `Parent_00Q__c` | Lead | reference | `uuid` |  |  | -> Lead (Lookup) |
| `Parent_001__c` | Account | reference | `uuid` |  |  | -> Account (Lookup) |
| `Parent_0Q0__c` | Quote | reference | `uuid` |  |  | -> Quote (Lookup) |
| `Parent_a1Z__c` | bpmpro3_Sales_Document | reference | `uuid` |  |  | -> bpmpro3__Sales_Document__c (Lookup) |

### Picklist Values

**Final Document Sync Status** (`APXT_CongaSign__FinalDocumentsSyncStatus__c`):
- NONE = `NONE`
- PENDING = `PENDING`
- SUCCESS = `SUCCESS`
- PARTIAL = `PARTIAL`
- FAIL = `FAIL`

**Status** (`APXT_CongaSign__Status__c`):
- DRAFT = `DRAFT`
- SENT = `SENT`
- COMPLETE = `COMPLETE`
- DECLINED = `DECLINED`
- PENDING_EXPIRATION = `PENDING_EXPIRATION`
- CANCELLED = `CANCELLED`
- EXPIRED = `EXPIRED`

**Write Back Status** (`APXT_CongaSign__WritebackStatus__c`):
- NONE = `NONE`
- PENDING = `PENDING`
- SUCCESS = `SUCCESS`
- PARTIAL = `PARTIAL`
- FAIL = `FAIL`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| APXT_CongaSign__Document__c | APXT_CongaSign__Transaction__c | APXT_CongaSign__Conga_Sign_Documents__r | No |
| APXT_CongaSign__Recipient__c | APXT_CongaSign__Transaction__c | APXT_CongaSign__Recipients__r | Yes |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Composer Host Override (`APXTConga4__Composer_Host_Override__c`) {#apxtconga4composerhostoverridec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0W |
| Fields | 10 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | ComposerHostOverride Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Hostname__c` | Hostname | string | `varchar(255)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Conga Global Merge (`APXTConga4__Composer_QuickMerge__c`) {#apxtconga4composerquickmergec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0X |
| Fields | 19 |
| Relationships | 32 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Conga Global Merge Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Conga_Solution__c` | Conga Solution | reference | `uuid` |  |  | -> APXTConga4__Conga_Solution__c (Lookup) |
| `APXTConga4__Description__c` | Description | textarea | `text` |  |  |  |
| `APXTConga4__Weblink_ID__c` | Button ID | string | `varchar(18)` |  |  |  |
| `APXTConga4__Weblink_Name__c` | Button Name | textarea | `text` |  |  |  |
| `APXTConga4__Launch_CM8__c` | Launch | string | `text` |  |  |  |
| `APXTConga4__Weblink_ID_Formula__c` | Button ID | string | `text` |  |  |  |
| `APXTConga4__Weblink_Name_Formula__c` | Button Name | string | `text` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Composer Setting (`APXTConga4__Composer_Setting__mdt`) {#apxtconga4composersettingmdt}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | m05 |
| Fields | 10 |
| Relationships | 1 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Custom Metadata Record ID | id | `uuid` |  |  |  |
| `DeveloperName` | Custom Metadata Record Name | string | `varchar(40)` |  |  |  |
| `MasterLabel` | Label | string | `varchar(40)` | Yes |  |  |
| `Language` | Master Language | picklist | `text` | Yes |  |  |
| `NamespacePrefix` | Namespace Prefix | string | `varchar(15)` |  |  |  |
| `Label` | Label | string | `varchar(40)` |  |  |  |
| `QualifiedApiName` | Qualified API Name | string | `varchar(70)` |  |  |  |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Connected_App_Setting__c` | Connected App Setting | reference | `uuid` | Yes |  | -> APXTConga4__Connected_App_Setting__mdt (Lookup) |
| `APXTConga4__Enable_Key_Generation__c` | Enable Key Generation | boolean | `boolean` |  |  |  |

### Picklist Values

**Master Language** (`Language`):
- English = `en_US`
- German = `de`
- Spanish = `es`
- French = `fr`
- Italian = `it`
- Japanese = `ja`
- Swedish = `sv`
- Korean = `ko`
- Chinese (Traditional) = `zh_TW`
- Chinese (Simplified) = `zh_CN`
- Portuguese (Brazil) = `pt_BR`
- Dutch = `nl_NL`
- Danish = `da`
- Thai = `th`
- Finnish = `fi`
- Russian = `ru`
- Spanish (Mexico) = `es_MX`
- Norwegian = `no`

---

## Conga Collection (`APXTConga4__Conga_Collection__c`) {#apxtconga4congacollectionc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0Z |
| Fields | 12 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Conga Collection Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Description__c` | Description | textarea | `text` |  |  |  |
| `APXTConga4__Is_SF1_Enabled__c` | Is_SF1_Enabled | boolean | `boolean` |  |  |  |
| `APXTConga4__SF1_Binding_sObject_Type__c` | SF1_Binding_sObject_Type | string | `varchar(70)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| APXTConga4__Conga_Collection_Solution__c | APXTConga4__Conga_Collection__c | APXTConga4__Conga_Collection_Solutions__r | Yes |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Conga Collection Solution (`APXTConga4__Conga_Collection_Solution__c`) {#apxtconga4congacollectionsolutionc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0Y |
| Fields | 12 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Conga Collection Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Conga_Collection__c` | Conga Collection | reference | `uuid` | Yes |  | -> APXTConga4__Conga_Collection__c (MasterDetail) |
| `APXTConga4__Conga_Solution__c` | Conga Solution | reference | `uuid` |  |  | -> APXTConga4__Conga_Solution__c (Lookup) |
| `APXTConga4__Description__c` | Description | textarea | `text` |  |  |  |
| `APXTConga4__Sort_Order__c` | Sort Order | double | `float8` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Conga Composer Settings (`APXTConga4__Conga_Composer_Settings__c`) {#apxtconga4congacomposersettingsc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0a |
| Fields | 13 |
| Relationships | 23 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Name | string | `varchar(38)` |  |  |  |
| `SetupOwnerId` | Location | reference | `uuid` |  |  | -> Organization, Profile, User (Lookup) |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Comments__c` | Comments | textarea | `text` |  |  |  |
| `APXTConga4__Disable_C7_Triggers__c` | Disable C7 Triggers | boolean | `boolean` |  |  |  |
| `APXTConga4__Production_Org_Id__c` | Production Org Id | string | `varchar(18)` |  |  |  |
| `APXTConga4__Server_Override__c` | Server Endpoint URL | string | `varchar(255)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Conga Email Staging (`APXTConga4__Conga_Email_Staging__c`) {#apxtconga4congaemailstagingc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0b |
| Fields | 15 |
| Relationships | 31 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Conga Email Staging Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `APXTConga4__HTMLBody__c` | HTML Body | textarea | `text` |  |  |  |
| `APXTConga4__Subject__c` | Subject | textarea | `text` |  |  |  |
| `APXTConga4__TextBody__c` | Text Body | textarea | `text` |  |  |  |
| `APXTConga4__WhatId__c` | WhatId | string | `varchar(18)` |  |  |  |
| `APXTConga4__WhoId__c` | WhoId | string | `varchar(18)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Conga Email Template (`APXTConga4__Conga_Email_Template__c`) {#apxtconga4congaemailtemplatec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0c |
| Fields | 20 |
| Relationships | 32 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Email Template Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Description__c` | Description | textarea | `text` |  |  |  |
| `APXTConga4__HTMLBody__c` | HTML Body | textarea | `text` |  |  |  |
| `APXTConga4__Is_Body_Attachment__c` | Use attachment for template body | boolean | `boolean` |  |  |  |
| `APXTConga4__Key__c` | Key | string | `varchar(15)` |  | Yes |  |
| `APXTConga4__Name__c` | Name | string | `varchar(80)` |  |  |  |
| `APXTConga4__Subject__c` | Subject | string | `varchar(255)` |  |  |  |
| `APXTConga4__Template_Group__c` | Template Group | string | `varchar(80)` |  |  |  |
| `APXTConga4__TextBody__c` | Text Body | textarea | `text` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| APXTConga4__Conga_Solution_Email_Template__c | APXTConga4__Conga_Email_Template__c | APXTConga4__Conga_Solution_Email_Templates__r | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Conga Query (`APXTConga4__Conga_Merge_Query__c`) {#apxtconga4congamergequeryc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0d |
| Fields | 15 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Conga Query Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Description__c` | Description | textarea | `text` |  |  |  |
| `APXTConga4__Key__c` | Key | string | `varchar(15)` |  | Yes |  |
| `APXTConga4__Name__c` | Name | string | `varchar(100)` |  |  |  |
| `APXTConga4__Query__c` | SOQL Select Statement | textarea | `text` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| APXTConga4__Conga_Solution_Query__c | APXTConga4__Conga_Query__c | APXTConga4__Conga_Solution_Queries__r | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Conga Solution (`APXTConga4__Conga_Solution__c`) {#apxtconga4congasolutionc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0j |
| Fields | 27 |
| Relationships | 34 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Conga Solution Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Button_Link_API_Name__c` | Button/Link API Name | textarea | `text` |  |  |  |
| `APXTConga4__Button_body_field__c` | Button Body (URL) | textarea | `text` |  |  |  |
| `APXTConga4__Composer_Parameters__c` | Composer Parameters | textarea | `text` |  |  |  |
| `APXTConga4__Custom_Object_Id__c` | Custom Object Id | string | `varchar(18)` |  |  |  |
| `APXTConga4__Formula_Field_API_Name__c` | Formula Field API Name | textarea | `text` |  |  |  |
| `APXTConga4__Formula_body_field__c` | Formula Field Body | textarea | `text` |  |  |  |
| `APXTConga4__Is_Quick_Start__c` | Is Quick Start | string | `varchar(80)` |  |  |  |
| `APXTConga4__Master_Object_Type_Validator__c` | Master Object Type Validator | textarea | `text` |  |  |  |
| `APXTConga4__Master_Object_Type__c` | Master Object Type | textarea | `text` |  |  |  |
| `APXTConga4__Sample_Record_Id__c` | Sample Record Id | string | `varchar(18)` |  |  |  |
| `APXTConga4__Sample_Record_Name__c` | Sample Record Name | string | `varchar(80)` |  |  |  |
| `APXTConga4__Solution_Description__c` | Solution Description | textarea | `text` |  |  |  |
| `APXTConga4__Solution_Weblink_Syntax__c` | Solution Weblink Syntax | textarea | `text` |  |  |  |
| `APXTConga4__Weblink_Id__c` | Weblink Id | string | `varchar(18)` |  |  |  |
| `APXTConga4__CongaEmailTemplateCount__c` | Conga Email Template Count | double | `float8` |  |  |  |
| `APXTConga4__Launch_C8_Formula_Button__c` | Launch | string | `text` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| APXTConga4__Composer_QuickMerge__c | APXTConga4__Conga_Solution__c | APXTConga4__Composer_QuickMerge_Records__r | No |
| APXTConga4__Conga_Collection_Solution__c | APXTConga4__Conga_Solution__c | APXTConga4__Conga_Collection_Solutions__r | No |
| APXTConga4__Conga_Solution_Email_Template__c | APXTConga4__Conga_Solution__c | APXTConga4__Conga_Solution_Email_Templates__r | Yes |
| APXTConga4__Conga_Solution_Parameter__c | APXTConga4__Conga_Solution__c | APXTConga4__Conga_Solution_Parameters__r | Yes |
| APXTConga4__Conga_Solution_Query__c | APXTConga4__Conga_Solution__c | APXTConga4__Conga_Solution_Queries__r | Yes |
| APXTConga4__Conga_Solution_Report__c | APXTConga4__Conga_Solution__c | APXTConga4__Conga_Solution_Reports__r | Yes |
| APXTConga4__Conga_Solution_Template__c | APXTConga4__Conga_Solution__c | APXTConga4__Conga_Solution_Templates__r | Yes |
| APXTConga4__Document_History__c | APXTConga4__Conga_Solution__c | APXTConga4__Document_Histories__r | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Conga Solution Email Template (`APXTConga4__Conga_Solution_Email_Template__c`) {#apxtconga4congasolutionemailtemplatec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0e |
| Fields | 14 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Conga Solution Email Template Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Conga_Solution__c` | Conga Solution | reference | `uuid` | Yes |  | -> APXTConga4__Conga_Solution__c (MasterDetail) |
| `APXTConga4__Comments__c` | Description | textarea | `text` |  |  |  |
| `APXTConga4__Conga_Email_Template__c` | Conga Email Template | reference | `uuid` |  |  | -> APXTConga4__Conga_Email_Template__c (Lookup) |
| `APXTConga4__IsDefault__c` | IsDefault | boolean | `boolean` |  |  |  |
| `APXTConga4__Conga_Email_Template_Group__c` | Conga Email Template Group | string | `text` |  |  |  |
| `APXTConga4__Conga_Email_Template_Name__c` | Conga Email Template Name | string | `text` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Conga Solution Export Environment (`APXTConga4__Conga_Solution_Export_Environment__mdt`) {#apxtconga4congasolutionexportenvironmentmdt}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | m06 |
| Fields | 9 |
| Relationships | 1 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Custom Metadata Record ID | id | `uuid` |  |  |  |
| `DeveloperName` | Custom Metadata Record Name | string | `varchar(40)` |  |  |  |
| `MasterLabel` | Label | string | `varchar(40)` | Yes |  |  |
| `Language` | Master Language | picklist | `text` | Yes |  |  |
| `NamespacePrefix` | Namespace Prefix | string | `varchar(15)` |  |  |  |
| `Label` | Label | string | `varchar(40)` |  |  |  |
| `QualifiedApiName` | Qualified API Name | string | `varchar(70)` |  |  |  |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Export_Endpoint__c` | Export Endpoint | string | `varchar(255)` |  |  |  |

### Picklist Values

**Master Language** (`Language`):
- English = `en_US`
- German = `de`
- Spanish = `es`
- French = `fr`
- Italian = `it`
- Japanese = `ja`
- Swedish = `sv`
- Korean = `ko`
- Chinese (Traditional) = `zh_TW`
- Chinese (Simplified) = `zh_CN`
- Portuguese (Brazil) = `pt_BR`
- Dutch = `nl_NL`
- Danish = `da`
- Thai = `th`
- Finnish = `fi`
- Russian = `ru`
- Spanish (Mexico) = `es_MX`
- Norwegian = `no`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| APXTConga4__Conga_Solution_Export_Setting__mdt | APXTConga4__Conga_Solution_Export_Environment__c | APXTConga4__Conga_Solution_Export_Settings__r | No |

---

## Conga Solution Export Setting (`APXTConga4__Conga_Solution_Export_Setting__mdt`) {#apxtconga4congasolutionexportsettingmdt}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | m07 |
| Fields | 9 |
| Relationships | 1 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Custom Metadata Record ID | id | `uuid` |  |  |  |
| `DeveloperName` | Custom Metadata Record Name | string | `varchar(40)` |  |  |  |
| `MasterLabel` | Label | string | `varchar(40)` | Yes |  |  |
| `Language` | Master Language | picklist | `text` | Yes |  |  |
| `NamespacePrefix` | Namespace Prefix | string | `varchar(15)` |  |  |  |
| `Label` | Label | string | `varchar(40)` |  |  |  |
| `QualifiedApiName` | Qualified API Name | string | `varchar(70)` |  |  |  |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Conga_Solution_Export_Environment__c` | Conga Solution Export Environment | reference | `uuid` |  |  | -> APXTConga4__Conga_Solution_Export_Environment__mdt (Lookup) |

### Picklist Values

**Master Language** (`Language`):
- English = `en_US`
- German = `de`
- Spanish = `es`
- French = `fr`
- Italian = `it`
- Japanese = `ja`
- Swedish = `sv`
- Korean = `ko`
- Chinese (Traditional) = `zh_TW`
- Chinese (Simplified) = `zh_CN`
- Portuguese (Brazil) = `pt_BR`
- Dutch = `nl_NL`
- Danish = `da`
- Thai = `th`
- Finnish = `fi`
- Russian = `ru`
- Spanish (Mexico) = `es_MX`
- Norwegian = `no`

---

## Conga Solution Parameter (`APXTConga4__Conga_Solution_Parameter__c`) {#apxtconga4congasolutionparameterc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0f |
| Fields | 12 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Conga Solution Parameter Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Conga_Solution__c` | Conga Solution | reference | `uuid` | Yes |  | -> APXTConga4__Conga_Solution__c (MasterDetail) |
| `APXTConga4__Comments__c` | Description | textarea | `text` |  |  |  |
| `APXTConga4__Name__c` | Name | textarea | `text` |  |  |  |
| `APXTConga4__Value__c` | Value | textarea | `text` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Conga Solution Query (`APXTConga4__Conga_Solution_Query__c`) {#apxtconga4congasolutionqueryc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0g |
| Fields | 16 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Conga Solution Query Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Conga_Solution__c` | Conga Solution | reference | `uuid` | Yes |  | -> APXTConga4__Conga_Solution__c (MasterDetail) |
| `APXTConga4__Alias__c` | Alias | string | `varchar(20)` |  |  |  |
| `APXTConga4__Comments__c` | Description | textarea | `text` |  |  |  |
| `APXTConga4__Conga_Query__c` | Conga Query | reference | `uuid` |  |  | -> APXTConga4__Conga_Merge_Query__c (Lookup) |
| `APXTConga4__pv0__c` | pv0 | textarea | `text` |  |  |  |
| `APXTConga4__pv1__c` | pv1 | textarea | `text` |  |  |  |
| `APXTConga4__pv2__c` | pv2 | textarea | `text` |  |  |  |
| `APXTConga4__Conga_Query_Name__c` | Conga Query Name | string | `text` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Conga Solution Report (`APXTConga4__Conga_Solution_Report__c`) {#apxtconga4congasolutionreportc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0h |
| Fields | 17 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Conga Solution Report Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Conga_Solution__c` | Conga Solution | reference | `uuid` | Yes |  | -> APXTConga4__Conga_Solution__c (MasterDetail) |
| `APXTConga4__Alias__c` | Alias | string | `varchar(20)` |  |  |  |
| `APXTConga4__Comments__c` | Description | textarea | `text` |  |  |  |
| `APXTConga4__Report_Id__c` | Report Id | string | `varchar(18)` |  |  |  |
| `APXTConga4__Report_Name__c` | Report Name | textarea | `text` |  |  |  |
| `APXTConga4__pv0__c` | pv0 | textarea | `text` |  |  |  |
| `APXTConga4__pv1__c` | pv1 | textarea | `text` |  |  |  |
| `APXTConga4__pv2__c` | pv2 | textarea | `text` |  |  |  |
| `APXTConga4__Report_Id_Link__c` | Report Id | string | `text` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Conga Solution Template (`APXTConga4__Conga_Solution_Template__c`) {#apxtconga4congasolutiontemplatec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0i |
| Fields | 16 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Conga Solution Template Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Conga_Solution__c` | Conga Solution | reference | `uuid` | Yes |  | -> APXTConga4__Conga_Solution__c (MasterDetail) |
| `APXTConga4__Comments__c` | Description | textarea | `text` |  |  |  |
| `APXTConga4__Conga_Template__c` | Conga Template | reference | `uuid` |  |  | -> APXTConga4__Conga_Template__c (Lookup) |
| `APXTConga4__Output_File_Name__c` | Output File Name (OFN) | textarea | `text` |  |  |  |
| `APXTConga4__Sort_Order__c` | Sort Order | double | `numeric(5,2)` |  |  |  |
| `APXTConga4__Template_Extension__c` | Template Extension | string | `varchar(10)` |  |  |  |
| `APXTConga4__Template_Group__c` | Template Group | string | `text` |  |  |  |
| `APXTConga4__Template_Name__c` | Template Name | string | `text` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Conga Solutions Settings (`APXTConga4__Conga_Solutions_Settings__c`) {#apxtconga4congasolutionssettingsc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0k |
| Fields | 11 |
| Relationships | 23 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Name | string | `varchar(38)` |  |  |  |
| `SetupOwnerId` | Location | reference | `uuid` |  |  | -> Organization, Profile, User (Lookup) |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Enable_Button_To_Solution__c` | Enable Button To Solution Converter | boolean | `boolean` |  |  |  |
| `APXTConga4__Server_Override__c` | Server Endpoint URL | string | `varchar(255)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Conga Template (`APXTConga4__Conga_Template__c`) {#apxtconga4congatemplatec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0l |
| Fields | 21 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Template Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Description__c` | Description | textarea | `text` |  |  |  |
| `APXTConga4__Key__c` | Key | string | `varchar(15)` |  | Yes |  |
| `APXTConga4__Label_Template_Use_Detail_Data__c` | Label Template: Use Detail Data | boolean | `boolean` |  |  |  |
| `APXTConga4__Master_Field_to_Set_1__c` | Master Field to Set 1 | string | `varchar(255)` |  |  |  |
| `APXTConga4__Master_Field_to_Set_2__c` | Master Field to Set 2 | string | `varchar(255)` |  |  |  |
| `APXTConga4__Master_Field_to_Set_3__c` | Master Field to Set 3 | string | `varchar(255)` |  |  |  |
| `APXTConga4__Name__c` | Name | string | `varchar(80)` |  |  |  |
| `APXTConga4__Template_Extension__c` | Template Extension | string | `varchar(10)` |  |  |  |
| `APXTConga4__Template_Group__c` | Template Group | string | `varchar(80)` |  |  |  |
| `APXTConga4__Template_Type__c` | Template Type | picklist | `text` |  |  |  |

### Picklist Values

**Template Type** (`APXTConga4__Template_Type__c`):
- Document = `Document`
- Label = `Label`
- Envelope = `Envelope`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| APXTConga4__Conga_Solution_Template__c | APXTConga4__Conga_Template__c | APXTConga4__Conga_Solution_Templates__r | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Connected App Setting (`APXTConga4__Connected_App_Setting__mdt`) {#apxtconga4connectedappsettingmdt}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | m08 |
| Fields | 13 |
| Relationships | 1 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Custom Metadata Record ID | id | `uuid` |  |  |  |
| `DeveloperName` | Custom Metadata Record Name | string | `varchar(40)` |  |  |  |
| `MasterLabel` | Label | string | `varchar(40)` | Yes |  |  |
| `Language` | Master Language | picklist | `text` | Yes |  |  |
| `NamespacePrefix` | Namespace Prefix | string | `varchar(15)` |  |  |  |
| `Label` | Label | string | `varchar(40)` |  |  |  |
| `QualifiedApiName` | Qualified API Name | string | `varchar(70)` |  |  |  |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Connected_App_Name_SF1__c` | Connected App Name SF1 | string | `varchar(50)` |  |  |  |
| `APXTConga4__Connected_App_Name__c` | Connected App Name | string | `varchar(50)` | Yes |  |  |
| `APXTConga4__Hostname__c` | Hostname | string | `varchar(255)` | Yes |  |  |
| `APXTConga4__Connected_App_Name_Platform__c` | Connected App Name (Platform) | string | `varchar(50)` |  |  |  |
| `APXTConga4__Hostname_Platform__c` | Hostname (Platform) | string | `varchar(255)` |  |  |  |

### Picklist Values

**Master Language** (`Language`):
- English = `en_US`
- German = `de`
- Spanish = `es`
- French = `fr`
- Italian = `it`
- Japanese = `ja`
- Swedish = `sv`
- Korean = `ko`
- Chinese (Traditional) = `zh_TW`
- Chinese (Simplified) = `zh_CN`
- Portuguese (Brazil) = `pt_BR`
- Dutch = `nl_NL`
- Danish = `da`
- Thai = `th`
- Finnish = `fi`
- Russian = `ru`
- Spanish (Mexico) = `es_MX`
- Norwegian = `no`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| APXTConga4__Composer_Setting__mdt | APXTConga4__Connected_App_Setting__c | APXTConga4__Composer_Settings__r | No |

---

## Document History (`APXTConga4__Document_History__c`) {#apxtconga4documenthistoryc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0n |
| Fields | 17 |
| Relationships | 28 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Document History Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Conga_Solution__c` | Conga Solution | reference | `uuid` |  |  | -> APXTConga4__Conga_Solution__c (Lookup) |
| `APXTConga4__Link_Text__c` | Link Text | string | `varchar(80)` | Yes |  |  |
| `APXTConga4__Master_Object_ID__c` | Master Object ID | string | `varchar(18)` | Yes |  |  |
| `APXTConga4__URL__c` | URL | url | `text` | Yes |  |  |
| `APXTConga4__Last_Viewed__c` | Last Viewed | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Number_of_Views__c` | Number of Views | double | `float8` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| APXTConga4__Document_History_Detail__c | APXTConga4__Document_History__c | APXTConga4__Document_History_Details__r | Yes |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Document History Detail (`APXTConga4__Document_History_Detail__c`) {#apxtconga4documenthistorydetailc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0m |
| Fields | 14 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Document History Detail Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Document_History__c` | Document History | reference | `uuid` | Yes |  | -> APXTConga4__Document_History__c (MasterDetail) |
| `APXTConga4__Document_Status__c` | Document Status | picklist | `text` |  |  |  |
| `APXTConga4__Email_Address__c` | Email Address | email | `text` |  |  |  |
| `APXTConga4__Last_Viewed__c` | Last Viewed | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Number_of_Views__c` | Number of Views | double | `float8` | Yes |  |  |
| `APXTConga4__SMS_Number__c` | SMS Number | phone | `text` |  |  |  |

### Picklist Values

**Document Status** (`APXTConga4__Document_Status__c`):
- Generated = `Generated`
- Viewed = `Viewed`
- Expired = `Expired`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## EventData (`APXTConga4__EventData__c`) {#apxtconga4eventdatac}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0o |
| Fields | 11 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | EventId | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Kind__c` | Event kind | string | `varchar(255)` | Yes |  |  |
| `APXTConga4__Raw__c` | Raw Event JSON | textarea | `text` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## VersionedData (`APXTConga4__VersionedData__c`) {#apxtconga4versioneddatac}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0q |
| Fields | 13 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Key | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `APXTConga4__Key__c` | Flag Key | string | `varchar(255)` | Yes |  |  |
| `APXTConga4__Kind__c` | Feature kind | string | `varchar(255)` | Yes |  |  |
| `APXTConga4__Raw__c` | Raw Flag Object | textarea | `text` |  |  |  |
| `APXTConga4__Version__c` | Flag Version | double | `float8` | Yes |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Asset (`Asset`) {#asset}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 02i |
| Fields | 40 |
| Relationships | 39 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Asset ID | id | `uuid` |  |  |  |
| `ContactId` | Contact ID | reference | `uuid` |  |  | -> Contact (Lookup) |
| `AccountId` | Account ID | reference | `uuid` |  |  | -> Account (Lookup) |
| `ParentId` | Parent Asset ID | reference | `uuid` |  |  | -> Asset (Lookup) |
| `RootAssetId` | Root Asset ID | reference | `uuid` |  |  | -> Asset (Lookup) |
| `Product2Id` | Product ID | reference | `uuid` |  |  | -> Product2 (Lookup) |
| `ProductCode` | Product Code | string | `varchar(255)` |  |  |  |
| `IsCompetitorProduct` | Competitor Asset | boolean | `boolean` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Asset Name | string | `varchar(255)` | Yes |  |  |
| `SerialNumber` | Serial Number | string | `varchar(80)` |  |  |  |
| `InstallDate` | Install Date | date | `date` |  |  |  |
| `PurchaseDate` | Purchase Date | date | `date` |  |  |  |
| `UsageEndDate` | Usage End Date | date | `date` |  |  |  |
| `Status` | Status | picklist | `text` |  |  |  |
| `Price` | Price | currency | `numeric(18,2)` |  |  |  |
| `Quantity` | Quantity | double | `numeric(12,2)` |  |  |  |
| `Description` | Description | textarea | `text` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> User (Lookup) |
| `AssetProvidedById` | Asset Provided By ID | reference | `uuid` |  |  | -> Account (Lookup) |
| `AssetServicedById` | Asset Serviced By ID | reference | `uuid` |  |  | -> Account (Lookup) |
| `IsInternal` | Internal Asset | boolean | `boolean` |  |  |  |
| `AssetLevel` | Asset Level | int | `int4` |  |  |  |
| `StockKeepingUnit` | Product SKU | string | `varchar(180)` |  |  |  |
| `Street` | Street | textarea | `text` |  |  |  |
| `City` | City | string | `varchar(40)` |  |  |  |
| `State` | State | string | `varchar(80)` |  |  |  |
| `PostalCode` | Postal Code | string | `varchar(20)` |  |  |  |
| `Country` | Country | string | `varchar(80)` |  |  |  |
| `Latitude` | Latitude | double | `numeric(18,15)` |  |  |  |
| `Longitude` | Longitude | double | `numeric(18,15)` |  |  |  |
| `GeocodeAccuracy` | Geocode Accuracy | picklist | `text` |  |  |  |
| `Address` | Address | address | `jsonb` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |

### Picklist Values

**Status** (`Status`):
- Purchased = `Purchased`
- Shipped = `Shipped`
- Installed = `Installed`
- Registered = `Registered`
- Obsolete = `Obsolete`

**Geocode Accuracy** (`GeocodeAccuracy`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| Asset | ParentId | ChildAssets | No |
| Asset | RootAssetId | N/A | No |
| AssetRelationship | AssetId | PrimaryAssets | Yes |
| AssetRelationship | RelatedAssetId | RelatedAssets | No |
| AssetTokenEvent | AssetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| WorkOrder | AssetId | WorkOrders | No |
| WorkOrderLineItem | AssetId | WorkOrderLineItems | No |

---

## Attachment (`Attachment`) {#attachment}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 00P |
| Fields | 15 |
| Relationships | 5 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Attachment ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `ParentId` | Parent ID | reference | `uuid` | Yes |  | -> APXTConga4__Composer_Host_Override__c, APXTConga4__Composer_QuickMerge__c, APXTConga4__Conga_Collection_Solution__c, APXTConga4__Conga_Collection__c, APXTConga4__Conga_Email_Staging__c, APXTConga4__Conga_Email_Template__c, APXTConga4__Conga_Merge_Query__c, APXTConga4__Conga_Solution_Email_Template__c, APXTConga4__Conga_Solution_Parameter__c, APXTConga4__Conga_Solution_Query__c, APXTConga4__Conga_Solution_Report__c, APXTConga4__Conga_Solution_Template__c, APXTConga4__Conga_Solution__c, APXTConga4__Conga_Template__c, APXTConga4__Document_History_Detail__c, APXTConga4__Document_History__c, APXTConga4__EventData__c, APXTConga4__VersionedData__c, APXT_CongaSign__Document__c, APXT_CongaSign__Recipient__c, APXT_CongaSign__Transaction__c, Account, Asset, BirdeyeCheckin__Automation_Failed_Record__c, BirdeyeCheckin__Automation__c, BirdeyeCheckin__Connector__c, Campaign, Case, Contact, Contract, EmailMessage, EmailTemplate, Event, Image, Lead, Location, Opportunity, Order, Product2, Quote, SocialPost, Solution, Task, WorkOrder, WorkOrderLineItem, bpmpro3__A2_Labor_Only_Item__c, bpmpro3__A3_LaborItems__c, bpmpro3__AddOn_Product__c, bpmpro3__Add_On_CPI__c, bpmpro3__Back_Charge__c, bpmpro3__Building_Material__c, bpmpro3__Building_Permit_c__c, bpmpro3__CPI_AddOn_Product_Catalog__c, bpmpro3__CPI_Configure_Pricing_Items__c, bpmpro3__CPI_Preset_Product_Add_On__c, bpmpro3__Company_Settings__c, bpmpro3__Contact_CSV_Import__c, bpmpro3__Deal_Sheet__c, bpmpro3__Dealer_Item__c, bpmpro3__Inspections__c, bpmpro3__Invoice_Payment__c, bpmpro3__LaborItem_AddOn_Junction__c, bpmpro3__Labor_Charge__c, bpmpro3__Labor_Ticket__c, bpmpro3__Material__c, bpmpro3__Orders__c, bpmpro3__PP_Preset_Product__c, bpmpro3__PaymentBPM__c, bpmpro3__Permit_Fee__c, bpmpro3__ProductItem__c, bpmpro3__Project_Contact_Role__c, bpmpro3__Project_Invoice__c, bpmpro3__Project_Stage_Assignment_Team_Member__c, bpmpro3__Project_Stage_Assignment__c, bpmpro3__Project_Stage_Team_Member__c, bpmpro3__Project_Stage__c, bpmpro3__Project__c, bpmpro3__Property__c, bpmpro3__Prospect__c, bpmpro3__Reimbursement__c, bpmpro3__SalesDoc_Clauses__c, bpmpro3__SalesDoc_Credit_Memo__c, bpmpro3__SalesDoc_Invoice__c, bpmpro3__Sales_Commission_Payout__c, bpmpro3__Sales_Commission_Table__c, bpmpro3__Sales_Commission__c, bpmpro3__Sales_Document__c, bpmpro3__Service_Ticket__c, bpmpro3__SpecialtyItem__c, bpmpro3__Time_Entry__c, bpmpro3__Timesheet__c, bpmpro3__Warehouse_Log__c, bpmpro3__Work_Assignment__c, dfsle__AgreementConfiguration__c, dfsle__BulkList__c, dfsle__BulkStatus__c, dfsle__CustomParameterMap__c, dfsle__CustomRecipient__c, dfsle__Document__c, dfsle__EnvelopeConfigurationDocument__c, dfsle__EnvelopeConfigurationRecipient__c, dfsle__EnvelopeConfiguration__c, dfsle__EnvelopeLocalization__c, dfsle__EnvelopeStatus__c, dfsle__Envelope__c, dfsle__GenTemplate__c, dfsle__Jobs__c, dfsle__Log__c, dfsle__RecipientStatus__c, dfsle__Recipient__c, inov8__PMT_Error_Log__c, inov8__PMT_Phase__c, inov8__PMT_Program__c, inov8__PMT_Project__c, inov8__PMT_Resource_Allocation__c, inov8__PMT_Resource_Availability__c, inov8__PMT_Task__c (Lookup) |
| `Name` | File Name | string | `varchar(255)` | Yes |  |  |
| `IsPrivate` | Private | boolean | `boolean` |  |  |  |
| `ContentType` | Content Type | string | `varchar(120)` |  |  |  |
| `BodyLength` | Body Length | int | `int4` |  |  |  |
| `Body` | Body | base64 | `bytea` | Yes |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Calendar, User (Lookup) |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `Description` | Description | textarea | `text` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |

---

## API Config (`BirdeyeCheckin__API_Config__mdt`) {#birdeyecheckinapiconfigmdt}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | m0B |
| Fields | 10 |
| Relationships | 0 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Custom Metadata Record ID | id | `uuid` |  |  |  |
| `DeveloperName` | Custom Metadata Record Name | string | `varchar(40)` |  |  |  |
| `MasterLabel` | Label | string | `varchar(40)` | Yes |  |  |
| `Language` | Master Language | picklist | `text` | Yes |  |  |
| `NamespacePrefix` | Namespace Prefix | string | `varchar(15)` |  |  |  |
| `Label` | Label | string | `varchar(40)` |  |  |  |
| `QualifiedApiName` | Qualified API Name | string | `varchar(70)` |  |  |  |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `BirdeyeCheckin__API_DevURL__c` | API DevURL | string | `varchar(255)` |  |  |  |
| `BirdeyeCheckin__API_URL__c` | API URL | url | `text` |  |  |  |

### Picklist Values

**Master Language** (`Language`):
- English = `en_US`
- German = `de`
- Spanish = `es`
- French = `fr`
- Italian = `it`
- Japanese = `ja`
- Swedish = `sv`
- Korean = `ko`
- Chinese (Traditional) = `zh_TW`
- Chinese (Simplified) = `zh_CN`
- Portuguese (Brazil) = `pt_BR`
- Dutch = `nl_NL`
- Danish = `da`
- Thai = `th`
- Finnish = `fi`
- Russian = `ru`
- Spanish (Mexico) = `es_MX`
- Norwegian = `no`

---

## Automation (`BirdeyeCheckin__Automation__c`) {#birdeyecheckinautomationc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a14 |
| Fields | 22 |
| Relationships | 28 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Automation Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `BirdeyeCheckin__Connector__c` | Connector | reference | `uuid` |  |  | -> BirdeyeCheckin__Connector__c (Lookup) |
| `BirdeyeCheckin__Custom_Filter_Condition__c` | Custom Filter Condition | string | `varchar(255)` |  |  |  |
| `BirdeyeCheckin__Custom_Mapping__c` | Custom Mapping | textarea | `text` |  |  |  |
| `BirdeyeCheckin__Default_Mapping__c` | Default Mapping | textarea | `text` |  |  |  |
| `BirdeyeCheckin__Employee_Mapping__c` | Employee Mapping | textarea | `text` |  |  |  |
| `BirdeyeCheckin__Filter_Action_Type__c` | Filter Action Type | picklist | `text` |  |  |  |
| `BirdeyeCheckin__Filter_Criteria__c` | Filter Criteria | textarea | `text` |  |  |  |
| `BirdeyeCheckin__Last_Executed__c` | Last Executed | datetime | `timestamptz` |  |  |  |
| `BirdeyeCheckin__Object_API_Name__c` | Object API Name | string | `varchar(255)` |  |  |  |
| `BirdeyeCheckin__Object_Name__c` | Object Name | string | `varchar(255)` |  |  |  |
| `BirdeyeCheckin__Query__c` | Query | textarea | `text` |  |  |  |
| `BirdeyeCheckin__Records_Processed__c` | Records Processed | double | `float8` |  |  |  |
| `BirdeyeCheckin__Status__c` | Status | picklist | `text` |  |  |  |

### Picklist Values

**Filter Action Type** (`BirdeyeCheckin__Filter_Action_Type__c`):
- All AND = `All AND`
- All OR = `All OR`
- Custom Logic = `Custom Logic`
- No Criteria = `No Criteria`

**Status** (`BirdeyeCheckin__Status__c`):
- Running = `Running`
- Paused = `Paused`
- Draft = `Draft`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| BirdeyeCheckin__Automation_Failed_Record__c | BirdeyeCheckin__Automation__c | BirdeyeCheckin__Automation_Failed_Record__r | No |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Automation Failed Record (`BirdeyeCheckin__Automation_Failed_Record__c`) {#birdeyecheckinautomationfailedrecordc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a13 |
| Fields | 11 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Automation Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `BirdeyeCheckin__Automation__c` | Automation | reference | `uuid` |  |  | -> BirdeyeCheckin__Automation__c (Lookup) |
| `BirdeyeCheckin__Record_Id__c` | Record Id | string | `varchar(255)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Checkin Config (`BirdeyeCheckin__Checkin_Config__c`) {#birdeyecheckincheckinconfigc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a15 |
| Fields | 15 |
| Relationships | 23 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Name | string | `varchar(38)` |  |  |  |
| `SetupOwnerId` | Location | reference | `uuid` |  |  | -> Organization, Profile, User (Lookup) |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `BirdeyeCheckin__AvoidRecursive__c` | AvoidRecursive | boolean | `boolean` |  |  |  |
| `BirdeyeCheckin__InsertRun__c` | InsertRun | boolean | `boolean` |  |  |  |
| `BirdeyeCheckin__Object_API__c` | Object API | string | `varchar(255)` |  |  |  |
| `BirdeyeCheckin__Object_Label__c` | Object Label | string | `varchar(255)` |  |  |  |
| `BirdeyeCheckin__Show_Uninstall_Dependency__c` | Show Uninstall Dependency | boolean | `boolean` |  |  |  |
| `BirdeyeCheckin__UpdateRun__c` | UpdateRun | boolean | `boolean` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Connector (`BirdeyeCheckin__Connector__c`) {#birdeyecheckinconnectorc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a16 |
| Fields | 14 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Connector Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `BirdeyeCheckin__API_Key__c` | API Key | string | `varchar(255)` |  |  |  |
| `BirdeyeCheckin__BE_Field__c` | BE Field | textarea | `text` |  |  |  |
| `BirdeyeCheckin__Business_Id__c` | Business Id | string | `varchar(255)` |  |  |  |
| `BirdeyeCheckin__Business_Type__c` | Business Type | string | `varchar(255)` |  |  |  |
| `BirdeyeCheckin__IsValid__c` | IsValid | boolean | `boolean` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| BirdeyeCheckin__Automation__c | BirdeyeCheckin__Connector__c | BirdeyeCheckin__Automations__r | No |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Labor-Only Item (`bpmpro3__A2_Labor_Only_Item__c`) {#bpmpro3a2laboronlyitemc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a17 |
| Fields | 35 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Item Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__SalesDoc_A2__c` | Sales Document | reference | `uuid` | Yes |  | -> bpmpro3__Sales_Document__c (MasterDetail) |
| `bpmpro3__A2_Description__c` | Description | textarea | `text` |  |  |  |
| `bpmpro3__A2_Excluded_Checkbox__c` | Excluded | boolean | `boolean` |  |  |  |
| `bpmpro3__A2_Internal_Notes__c` | Internal Notes | textarea | `text` |  |  |  |
| `bpmpro3__A2_Optional_Checkbox__c` | Optional | boolean | `boolean` |  |  |  |
| `bpmpro3__A2_Quantity__c` | Quantity | double | `float8` | Yes |  |  |
| `bpmpro3__A2_Unit_Labor_Cost__c` | Unit Labor Cost | currency | `numeric(18,2)` | Yes |  |  |
| `bpmpro3__A2_Charge_Sales_Commission__c` | Charge Sales Commission Deprecated | boolean | `boolean` |  |  |  |
| `bpmpro3__A2_Ext_Estimated_Profit__c` | Ext Estimated Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A2_Ext_Labor_Cost__c` | Ext Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A2_Ext_Labor_Markup_Amount__c` | Ext Labor Markup ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A2_Ext_Labor_Price__c` | Ext Labor Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A2_Ext_Labor_Sales_Commission_Amount__c` | Ext Labor Sales Commission ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A2_Labor_Markup_Percent__c` | Labor Markup (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A2_Labor_Sales_Comm_Percentage__c` | Labor Sales Commission (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A2_Project__c` | Project | string | `text` |  |  |  |
| `bpmpro3__A2_Sales_Comm__c` | Sales Commission Basis Explained | string | `text` |  |  |  |
| `bpmpro3__A2_Sales_Commission_Basis__c` | Sales Commission Basis | string | `text` |  |  |  |
| `bpmpro3__A2_Sales_Document_Grand_Total__c` | Sales Document Grand Total | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A2_Sales_Document_Name__c` | Sales Document Name | string | `text` |  |  |  |
| `bpmpro3__A2_Sales_Document_Status__c` | Sales Document Status | string | `text` |  |  |  |
| `bpmpro3__A2_Unit_Estimated_Profit__c` | Unit Estimated Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A2_Unit_Labor_Markup_Amount__c` | Unit Labor Markup ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A2_Unit_Labor_Price__c` | Unit Labor Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A2_Unit_Labor_Sales_Comm_Amount__c` | Unit Labor Sales Commission ($) | currency | `numeric(18,2)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Product & Labor Item (`bpmpro3__A3_LaborItems__c`) {#bpmpro3a3laboritemsc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a18 |
| Fields | 304 |
| Relationships | 30 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Mark | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__SalesDoc_A3__c` | Sales Document | reference | `uuid` | Yes |  | -> bpmpro3__Sales_Document__c (MasterDetail) |
| `bpmpro3__A3_Finish_Color_Picklist__c` | Finish Color | picklist | `text` |  |  |  |
| `bpmpro3__A3_Glass_Color_Picklist__c` | Glass Color | picklist | `text` |  |  |  |
| `bpmpro3__A3_InstallationType_Picklist__c` | Installation Type | picklist | `text` |  |  |  |
| `bpmpro3__A3_SizeCategory__c` | Size Category | picklist | `text` |  |  |  |
| `bpmpro3__A3_AddOnProductItem_Rel__c` | AddOn Product Lookup Deprecated | reference | `uuid` |  |  | -> bpmpro3__AddOn_Product__c (Lookup) |
| `bpmpro3__A3_AddOnProductQty__c` | AddOn Quantity Deprecated | double | `float8` |  |  |  |
| `bpmpro3__A3_AddOnProductUnitCost__c` | AddOn Product Unit Cost - Deprecated | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOn_CostControlVariable__c` | A3 AddOn Cost Control Variable | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOn_Product_Service_List__c` | AddOn Products & Services List | textarea | `text` |  |  |  |
| `bpmpro3__A3_AddOn_Rollup_Labor_Cost__c` | AddOn Rollup Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOn_Rollup_Product_Cost__c` | AddOn Rollup Product Cost Apex | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Addon_Count__c` | Addon Count | double | `float8` |  |  |  |
| `bpmpro3__A3_Bypass_Calculations__c` | Bypass Calculations | boolean | `boolean` |  |  |  |
| `bpmpro3__A3_Caulking_MatCost_Flow__c` | Caulking Material Cost - Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Configuration__c` | Configuration | string | `varchar(200)` |  |  |  |
| `bpmpro3__A3_CostControlVariable__c` | A3_CostControlVariable | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Custom_Installation_Charge__c` | Custom Installation Charge [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_DI_CostControlVariable__c` | A3_DI_CostControlVariable | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_DealerItem_Rel__c` | Dealer Item | reference | `uuid` |  |  | -> bpmpro3__Dealer_Item__c (Lookup) |
| `bpmpro3__A3_Drywall_Checkbox__c` | Drywall | boolean | `boolean` |  |  |  |
| `bpmpro3__A3_Exclude_Labor_Checkbox__c` | Exclude Labor | boolean | `boolean` |  |  |  |
| `bpmpro3__A3_Exclude_Materials_Checkbox__c` | Exclude Materials | boolean | `boolean` |  |  |  |
| `bpmpro3__A3_Excluded_Checkbox__c` | Excluded | boolean | `boolean` |  |  |  |
| `bpmpro3__A3_FBC__c` | FBC | string | `varchar(100)` |  |  |  |
| `bpmpro3__A3_Flashing_Checkbox__c` | Flashing | boolean | `boolean` |  |  |  |
| `bpmpro3__A3_Flow_AddOnInstallUnitCost__c` | AddOn Product Install Cost - Flow [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Flow_AddOnProductUnitCost__c` | AddOn Product DC - Flow Deprecated | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Flow_DrywallLaborCost__c` | Drywall Labor Cost - Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Flow_FlashingLaborCost__c` | Flashing Labor Cost - Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Flow_FlashingMaterialCost__c` | Flashing Material Cost - Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Flow_LadderEquipmentCost__c` | Ladder Equipment Cost - Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Flow_LadderLaborCost__c` | Ladder Labor Cost - Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Flow_OversizedUnitCharge__c` | Oversized Unit Charge - Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Flow_ProductInstallCost__c` | Product Install Cost - Read Only | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Flow_ScaffoldingEquipmentCost__c` | Scaffolding Equipment Cost - Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Flow_ScaffoldingLaborCost__c` | Scaffolding Labor - Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Flow_StuccoLaborCost__c` | Stucco Labor Cost - Read Only | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Flow_TotalLineItemCost__c` | Total Line Item Cost Flow (D) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Flow_WoodBuckLaborCost__c` | Wood Buck Labor Cost - Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Flow_WoodBuckMatCost__c` | Wood Buck Mat Cost Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Frame_Finish_Color__c` | Frame Finish Color | string | `varchar(100)` |  |  |  |
| `bpmpro3__A3_Glass_MakeUp__c` | Glass Make-Up | string | `varchar(200)` |  |  |  |
| `bpmpro3__A3_Height__c` | Height | double | `numeric(9,4)` |  |  |  |
| `bpmpro3__A3_InternalNotes__c` | Internal Notes | textarea | `text` |  |  |  |
| `bpmpro3__A3_LaborUpchargeAmount__c` | Labor Upcharge [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_LaborUpcharge_PCT__c` | Labor Upcharge (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A3_Ladder_Checkbox__c` | Ladder | boolean | `boolean` |  |  |  |
| `bpmpro3__A3_Length__c` | Length | double | `numeric(14,2)` |  |  |  |
| `bpmpro3__A3_LineItemQty__c` | Qty | double | `float8` |  |  |  |
| `bpmpro3__A3_NOA__c` | NOA | string | `varchar(90)` |  |  |  |
| `bpmpro3__A3_Negative_Design_Pressure__c` | Negative Design Pressure | double | `numeric(12,2)` |  |  |  |
| `bpmpro3__A3_Optional_Checkbox__c` | Optional | boolean | `boolean` |  |  |  |
| `bpmpro3__A3_Positive_Design_Pressure__c` | Positive Design Pressure | double | `numeric(12,2)` |  |  |  |
| `bpmpro3__A3_ProductDealerUnitCost__c` | Main Product Cost [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_ProductInstallUpchargePCT__c` | Product Install Upcharge (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A3_Product_Screws_MatCost_Flow__c` | Product Screws Material Cost Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Product_Screws_Req_Flow__c` | Product Screws Required Flow | double | `float8` |  |  |  |
| `bpmpro3__A3_Product_Series__c` | Product Series | string | `varchar(80)` |  |  |  |
| `bpmpro3__A3_Quantity__c` | Quantity - Deprecated | double | `float8` |  |  |  |
| `bpmpro3__A3_RecordPrior_CostControlVariable__c` | A3_RecordPrior_CostControlVariable | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Record_Prior_TotalLineItemCost__c` | A3_Record_Prior_TotalLineItemCost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Remarks__c` | Remarks | textarea | `text` |  |  |  |
| `bpmpro3__A3_SHGC__c` | SHGC | double | `numeric(12,2)` |  |  |  |
| `bpmpro3__A3_Scaffolding_Checkbox__c` | Scaffolding | boolean | `boolean` |  |  |  |
| `bpmpro3__A3_Skip_Aggregation_Flow__c` | Skip Aggregation Flow | boolean | `boolean` |  |  |  |
| `bpmpro3__A3_Stucco_Checkbox__c` | Stucco | boolean | `boolean` |  |  |  |
| `bpmpro3__A3_Total_Line_Item_Price_Flow__c` | Total Line Item Price Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Total_ProdMatEquip_Cost__c` | Total ProdMatEquip Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Total_ProdMatEquip_Price__c` | A3 Total ProdMatEquip Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_U_Factor__c` | U-Factor | double | `numeric(12,2)` |  |  |  |
| `bpmpro3__A3_VendorQuoteNumber__c` | Vendor Quote # | string | `varchar(80)` |  |  |  |
| `bpmpro3__A3_Vendor_Item_Id__c` | Vendor Item Id | string | `varchar(90)` |  |  |  |
| `bpmpro3__A3_Vendor__c` | Vendor | reference | `uuid` |  |  | -> Account (Lookup) |
| `bpmpro3__A3_WB_MatCostExt_Flow__c` | Wood Buck Mat Cost Flow [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_WB_Screws_MatCost_Flow__c` | Wood Buck Screws Mat Cost Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_WB_Screws_Req_Flow__c` | Wood Buck Screws Required Flow | double | `float8` |  |  |  |
| `bpmpro3__A3_Width__c` | Width | double | `numeric(9,4)` |  |  |  |
| `bpmpro3__A3_WoodBucks_Checkbox__c` | Wood Bucks | boolean | `boolean` |  |  |  |
| `bpmpro3__Caulking_Units_Rec_Flow__c` | Caulking Units Required Flow | double | `numeric(14,2)` |  |  |  |
| `bpmpro3__DI_LastTimeModified__c` | Dealer Item Last Time Modified | datetime | `timestamptz` |  |  |  |
| `bpmpro3__Position__c` | Position | double | `float8` |  |  |  |
| `bpmpro3__A3_AddOnInstallUnitCost__c` | AddOn Product Install Cost [Unit} | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Cost_FS_Ext__c` | AddOn Product Cost FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Cost_FS_Unit__c` | AddOn Product Cost FS [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Cost_Unit__c` | AddOn Product Cost SO [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Labor_Estimated_Profit__c` | AddOn Product Labor Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Labor_Price_Ext__c` | AddOn Product Labor Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Labor_SalesComm__c` | AddOn Product Labor Sales Commission | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Price_Ext__c` | AddOn Product Price SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Price_FS_Ext__c` | AddOn Product Price FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Price_FS_Unit__c` | AddOn Product Price FS [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Profit_FS_Ext__c` | AddOn Product Profit FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Profit_SO_Ext__c` | AddOn Product Profit SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Retail_CountyTax_Ext__c` | AddOn Product Retail County Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Retail_CountyTax_Unit__c` | AddOn Product Retail County Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Retail_Price_Ext__c` | AddOn Product Retail Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Retail_SalesTax_Ext__c` | AddOn Product Retail SalesTax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Retail_SalesTax_Unit__c` | AddOn Product Retail SalesTax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Retail_StateTax_Ext__c` | AddOn Product Retail State Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Retail_StateTax_Unit__c` | AddOn Product Retail State Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Retail_Unit_Price__c` | AddOn Product Retail Price [per Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_SalesComm_FS__c` | AddOn Product Sales Commission FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_SalesComm_SO__c` | AddOn Product Sales Commission SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Unit_Price__c` | AddOn Product Price SO [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_WS_CountyTax_Unit__c` | AddOn Product WH County Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Wholesale_CountyTax_Ext__c` | AddOn Product WS County Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Wholesale_SalesTax_Ext__c` | AddOn Product Wholesale SalesTax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Wholesale_SalesTax_Unit__c` | AddOn Product Wholesale SalesTax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Wholesale_StateTax_Ext__c` | AddOn Product Wholesale State Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Wholesale_StateTax_Unit__c` | AddOn Product Wholesale StateTax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Caulking_MatCost_Ext__c` | Caulking Mat Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Caulking_MatCost_Linear_Footage__c` | Caulking Mat Cost Per Linear Footage | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Caulking_MatCost__c` | Caulking Material Cost [ Ext ] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Caulking_Material_Name__c` | Caulking Material Name | string | `text` |  |  |  |
| `bpmpro3__A3_Caulking_Units_Req_Ext__c` | Caulking Units Required [Ext] | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Caulking_Units_Req__c` | Caulking Units Required | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Caulking_Units_in_Package__c` | Caulking # of Units in Package | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Charge_Sales_Commission__c` | Charge Sales Commission Deprecated | boolean | `boolean` |  |  |  |
| `bpmpro3__A3_CombinedProduct_Profit_SO_Ext__c` | Combined Product Profit SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Combined_Product_Price_FS_Ext__c` | Combined Product Price FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Dealer_Item_Measuring_Unit__c` | Dealer Item Measuring Unit | string | `text` |  |  |  |
| `bpmpro3__A3_Dealer_Item_Name__c` | Dealer Item Name | string | `text` |  |  |  |
| `bpmpro3__A3_EquipmentRentalSalesCommAmount__c` | Equipment Rental Sales Commission ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Flashing_Buckets_Req__c` | Flashing Buckets Required [Ext] | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__A3_Flashing_Coverage_Area_Ext__c` | Flashing Coverage Area [Ext] | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__A3_Flashing_Coverage_Area__c` | Flashing Coverage Area | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__A3_Flashing_Coverage_Rate__c` | Flashing Coverage Rate | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__A3_Flashing_LaborCost__c` | Flashing Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Flashing_MatCost__c` | Flashing Material Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Flashing_Material_Name__c` | Flashing Material Name | string | `text` |  |  |  |
| `bpmpro3__A3_Flashing_Units_Package__c` | Flashing # of Units in Package | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__A3_Grand_Total__c` | Grand Total | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Installation_Type_Text__c` | Installation Type Text | string | `text` |  |  |  |
| `bpmpro3__A3_ItemType__c` | Item Type | string | `text` |  |  |  |
| `bpmpro3__A3_LaborEstimatedProfits__c` | Combined Labor Profit [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_LaborMarkupPCT__c` | ProLabor Markup (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A3_LaborSalesCommAmount__c` | Labor Sales Commission ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_LaborSalesCommPercent__c` | ProLabor Sales Comm (%) Deprecated * | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A3_Labor_Sales_Comm_Percent__c` | ProLabor Sales Commission (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A3_Linear_Footage_Extended__c` | Linear Footage [Ext] | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Linear_Footage__c` | Linear Footage | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Cost_FS_Unit__c` | Main Product Cost FS [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_FS_Ext__c` | Main Product Cost FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Labor_Estimated_Profit__c` | Main Product Labor Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Labor_Price_Ext__c` | Main Product Labor Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Labor_SalesComm__c` | Main Product Labor Sales Commission | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Price_Ext__c` | Main Product Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Price_FS_Ext__c` | Main Product Price FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Price_FS_Unit__c` | Main Product Price FS [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Price_SO_Ext__c` | Main Product Price SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Price_SO_Unit__c` | Main Product Price SO [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Price_Unit__c` | Main Product Price [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Profit_FS_Ext__c` | Main Product Profit FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Profit_SO_Ext__c` | Main Product Profit SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Retail_CountyTax_Ext__c` | Main Product Retail County Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Retail_CountyTax_Unit__c` | Main Product Retail County Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Retail_SalesTax_Ext__c` | Main Product Retail Sales Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Retail_SalesTax_Unit__c` | Main Product Retail Sales Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Retail_StateTax_Ext__c` | Main Product Retail State Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Retail_StateTax_Unit__c` | Main Product Retail State Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_SalesComm_FS__c` | Main Product Sales Commission FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_SalesComm_SO__c` | Main Product Sales Commission SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Wholesale_CountyTax_Ext__c` | Main Product Wholesale County Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Wholesale_CountyTax_Unit__c` | Main Product Wholesale County Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Wholesale_SalesTax_Ext__c` | Main Product Wholesale Sales Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Wholesale_SalesTax_Unit__c` | Main Product Wholesale Sales Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Wholesale_StateTax_Ext__c` | Main Product Wholesale State Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Wholesale_StateTax_Unit__c` | Main Product Wholesale State Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Main_Product_Retail_Price_Ext__c` | Main Product Retail Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Main_Product_Retail_Price_Unit__c` | Main Product Retail Price [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Manage_Item__c` | Manage Item | string | `text` |  |  |  |
| `bpmpro3__A3_MatEquipmentEstimatedProfits__c` | MatEquipment Profit [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MatEquipmentSalesCommAmount__c` | MatEquipment Sales Commission ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MaterialSalesCommAmount__c` | Material Sales Commission ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Oversize_Unit_Charge__c` | Oversized Charge [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Price_Anchoring_Multiplier__c` | Price Anchoring Multiplier | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__A3_ProLaborMultiplier__c` | ProLabor Multiplier | double | `numeric(18,6)` |  |  |  |
| `bpmpro3__A3_ProdMat_Multiplier__c` | ProdMat Multiplier | double | `numeric(18,6)` |  |  |  |
| `bpmpro3__A3_ProductEstimatedProfits__c` | Combined Product Profit FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_ProductInstallUpchargeAmount__c` | Product Install Upcharge [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_ProductMarkupPCT__c` | ProdMat Markup (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A3_ProductSalesCommAmount__c` | Product Sales Commission ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_ProductSalesCommPercent__c` | ProdMat Sales Commission (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A3_ProductUnitInstallCostAdjusted__c` | Product Install Cost Adj [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Product_Dimensions__c` | Product Dimensions | string | `text` |  |  |  |
| `bpmpro3__A3_Product_Retail_Price_Ext__c` | Product Retail Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Product_Screws_MatCost_Extended__c` | Product Screws Mat Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Product_Screws_MatCost_Per_Unit__c` | Product Screws Mat Cost [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Product_Screws_MatCost__c` | Product Screws Mat Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Product_Screws_Material_Name__c` | Product Screws Material Name | string | `text` |  |  |  |
| `bpmpro3__A3_Product_Screws_Req_Ext__c` | Product Screws Required [Ext] | double | `float8` |  |  |  |
| `bpmpro3__A3_Product_Unit_Install_Cost__c` | Main Product Install Cost [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Project__c` | Project | string | `text` |  |  |  |
| `bpmpro3__A3_SalesDocStatus__c` | SalesDoc Status | string | `text` |  |  |  |
| `bpmpro3__A3_Sales_Commission_Basis_Explained__c` | Sales Commission Basis Explained | string | `text` |  |  |  |
| `bpmpro3__A3_Sales_Commission_Basis__c` | Sales Commission Basis | string | `text` |  |  |  |
| `bpmpro3__A3_Sales_Doc_Number__c` | SalesDoc # | string | `text` |  |  |  |
| `bpmpro3__A3_Sales_Document_Grand_Total__c` | SalesDoc Grand Total | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Sales_Document_Name__c` | SalesDoc Name | string | `text` |  |  |  |
| `bpmpro3__A3_Square_Footage_Extended__c` | Square Footage [Ext] | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Square_Footage__c` | Square Footage | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalAddOnLaborCost__c` | AddOn Product Labor Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalAddOnProductCost__c` | AddOn Product Cost SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalAdditionalLaborCost__c` | Additional Labor Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalDrywallLaborCost__c` | Drywall Labor Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalEquipmentCost__c` | Total Equipment Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalEquipmentLaborCost__c` | Total Equipment Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalFinishWorkLaborCost__c` | Total Finish Work Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalFlashingLaborCost__c` | Flashing Labor Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalFlashingMatCost__c` | Flashing Material Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalLaborCost__c` | Combined Labor Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalLaborPrice__c` | Combined Labor Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalLaborUpchargeAmount__c` | Total Labor Upcharge ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalLaborUpcharges__c` | Labor Upcharges [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalLadderEquipmentCost__c` | Ladder Equipment Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalLadderLaborCost__c` | Ladder Labor Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalLineItemCost__c` | Total Line Item Cost SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalMainProductDealerCost__c` | Main Product Cost SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalMainProductLaborCost__c` | Main Product Labor Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalMatCost__c` | Total Material Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalMatEquipment_Cost__c` | Total MatEquipment Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalOpeningPrepLaborCost__c` | Total Opening Prep Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalOversizedCharge__c` | Oversized Charge [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalProdMatEquipPrice__c` | Total ProdMatEquip Price SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalProdMatEquip_Price_FS__c` | Total ProdMatEquip Price FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalProdMatEquipmentCost__c` | Total ProdMatEquip Cost SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalProductInstallCost__c` | Product Install Cost Adj [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalProductInstallUpchargeAmount__c` | Product Install Upcharge [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalScaffoldingEquipmentCost__c` | Scaffolding Equipment Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalScaffoldingLabor__c` | Scaffolding Labor [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalStuccoLaborCost__c` | Stucco Labor Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalWoodBuckLaborCost__c` | Wood Buck Labor Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalWoodBuckMatCost__c` | Total Wood Buck MatCost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Total_Equipment_Price__c` | Total Equipment Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Total_LineItem_Retail_Price__c` | Total Line Item Retail Price SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Total_Line_Item_Cost_FS__c` | Total Line Item Cost FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Total_Line_Item_Price_FS__c` | Total Line Item Price FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Total_Line_Item_Price__c` | Total Line Item Price SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Total_Line_Item_Retail_Price_FS__c` | Total Line Item Retail Price FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Total_Material_Price__c` | Total Material Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Total_ProdMatEquip_Cost_FS__c` | Total ProdMatEquip Cost FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Total_Product_Cost_FS__c` | Combined Product Cost FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Total_Product_Cost__c` | Combined Product Cost SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Total_Product_Price__c` | Combined Product Price SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Total_Retail_SalesTax_Ext__c` | Total Retail Sales Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Vendor_Name__c` | Vendor Name | string | `text` |  |  |  |
| `bpmpro3__A3_WB_Boards_Req_Ext__c` | Wood Buck Boards Required [Ext] | double | `float8` |  |  |  |
| `bpmpro3__A3_WB_Boards_Req__c` | Wood Buck Boards Required | double | `float8` |  |  |  |
| `bpmpro3__A3_WB_Coverage_Rate__c` | Wood Buck Coverage Rate | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__A3_WB_MatCost__c` | Wood Buck Mat Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_WB_Mat_Cost_Ext__c` | Wood Buck Mat Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_WB_Mat_Cost_Per_Board__c` | Wood Buck Mat Cost Per Board | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_WB_Material_Name__c` | Wood Buck Material Name | string | `text` |  |  |  |
| `bpmpro3__A3_WB_Screws_MatCost_Extended__c` | Wood Buck Screws MatCost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_WB_Screws_MatCost_Per_Unit__c` | Wood Buck Screws Material Cost [$ Per Un | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_WB_Screws_MatCost__c` | Wood Buck Screws Mat Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_WB_Screws_Material_Name__c` | Wood Buck Screws Material Name | string | `text` |  |  |  |
| `bpmpro3__A3_WB_Screws_Req_Ext__c` | Wood Buck Screws Required [Ext] | double | `float8` |  |  |  |
| `bpmpro3__A3_WB_Units_Package__c` | Wood Bucks # of Units in Package | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__A3_Waive_Sales_Commission__c` | Waive Sales Commission | boolean | `boolean` |  |  |  |
| `bpmpro3__A3_Wave_Sales_Commission__c` | Waive - Deprecated | boolean | `boolean` |  |  |  |
| `bpmpro3__A3_ProLaborLineItemMarkupPCT__c` | ProLabor Line Item Markup % | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A3_ProdMatLineItemMarkupPCT__c` | ProdMat Line Item Markup % | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A3_TriggerCombinedLaborCost_Ext__c` | Trigger Combined Labor Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TriggerEffectiveLaborMarkupPCT__c` | Trigger Effective Labor Markup % | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A3_TriggerEffectiveProductMarkupPCT__c` | Trigger Effective Product Markup % | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A3_TriggerLineItemProdMatMultiplier__c` | Trigger ProdMat Line Item Multiplier | double | `numeric(18,6)` |  |  |  |
| `bpmpro3__A3_TriggerProLaborLineItemMultiplier__c` | Trigger ProLabor Line Item Multiplier | double | `numeric(18,6)` |  |  |  |
| `bpmpro3__A3_EffectiveLaborMarkupPCT__c` | Effective Labor Markup % | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A3_EffectiveProLaborMultiplier__c` | Effective ProLabor Multiplier | double | `numeric(18,6)` |  |  |  |
| `bpmpro3__A3_EffectiveProdMatMultiplier__c` | Effective ProdMat Multiplier | double | `numeric(18,6)` |  |  |  |
| `bpmpro3__A3_EffectiveProductMarkupPCT__c` | Effective Product Markup % | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A3_MainProductInstallUnitPrice__c` | Product Install Price [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalMatEquipPrice__c` | Total MatEquipment Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_CostBasis__c` | Main Product Cost Basis [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_LaborCost_Unit__c` | AddOn Product Labor Cost [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_AddOnProduct_Labor_Price_Unit__c` | AddOn Product Labor Price [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_CostBasis_Ext__c` | Main Product Cost Basis [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_LaborCost_Unit__c` | Main Product Labor Cost [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_LaborPrice_Unit__c` | Main Product Labor Price [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalEquipmentCost_Unit__c` | Total Equipment Cost [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalEquipmentPrice_Unit__c` | Total Equipment Price [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalMaterialCost_Unit__c` | Total Material Cost [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_TotalMaterialPrice_Unit__c` | Total Material Price [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Last_Utility_Refresh_Date__c` | Last Utility Refresh Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__A3_Utility_Update_Log__c` | Utility Update Log | textarea | `text` |  |  |  |
| `bpmpro3__A3_VendorProductImage_URL__c` | Vendor Product Image URL | string | `varchar(255)` |  |  |  |
| `bpmpro3__A3_Lock_Cost__c` | Lock Cost | boolean | `boolean` |  |  |  |
| `bpmpro3__A3_MainProduct_Price_FS_Unit_Manual__c` | A3 MainProduct Price FS Unit Manual | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_MainProduct_Price_SO_Unit_Manual__c` | A3 MainProduct Price SO Unit Manual | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_Manual_Price_Override__c` | Manual Price Override | boolean | `boolean` |  |  |  |
| `bpmpro3__A3_Manual_Product_Cost_Override__c` | Manual Product Cost Override | boolean | `boolean` |  |  |  |
| `bpmpro3__A3_ProdMatLineItemMarginPCT__c` | ProdMat Line Item Margin % | percent | `numeric(5,2)` |  |  |  |

### Picklist Values

**Finish Color** (`bpmpro3__A3_Finish_Color_Picklist__c`):
- Black = `Black`
- Bronze = `Bronze`
- Clear Anodized = `Clear Anodized`
- Custom Color = `Custom Color`
- Dark Gray = `Dark Gray`
- Silver = `Silver`
- White = `White`
- * Refer to specs = `* Refer to specs`

**Glass Color** (`bpmpro3__A3_Glass_Color_Picklist__c`):
- Azurlite = `Azurlite`
- BlueGreen = `BlueGreen`
- Bronze = `Bronze`
- Clear = `Clear`
- Gray = `Gray`
- Green = `Green`
- OptiBlue = `OptiBlue`
- SolarBlue = `SolarBlue`
- * Refer to specs = `* Refer to specs`

**Installation Type** (`bpmpro3__A3_InstallationType_Picklist__c`):
- New Construction = `New Construction`
- Retrofit = `Retrofit`

**Size Category** (`bpmpro3__A3_SizeCategory__c`):
- Standard = `Standard`
- Oversized XL = `Oversized XL`
- Oversized 2XL = `Oversized 2XL`
- Oversized 3XL = `Oversized 3XL`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__LaborItem_AddOn_Junction__c | bpmpro3__AOPS_Product_Labor_Item__c | bpmpro3__Labor_Item_Add_On_Junctions__r | No |

---

## Add-On CPI (`bpmpro3__Add_On_CPI__c`) {#bpmpro3addoncpic}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1f |
| Fields | 24 |
| Relationships | 28 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Add-On Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__AOC_Configure_Pricing_Items__c` | CPI Record | reference | `uuid` |  |  | -> bpmpro3__CPI_Configure_Pricing_Items__c (Lookup) |
| `bpmpro3__AOC_Quantity__c` | Quantity | double | `float8` |  |  |  |
| `bpmpro3__AOC_Unit_Cost__c` | Product Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__AOC_Total_Cost__c` | Total Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__AOCPI_Add_On_Product__c` | Add-On Product | reference | `uuid` |  |  | -> bpmpro3__CPI_AddOn_Product_Catalog__c (Lookup) |
| `bpmpro3__AOCPI_Description__c` | Description | textarea | `text` |  |  |  |
| `bpmpro3__AOCPI_Is_Custom__c` | Is Custom | boolean | `boolean` |  |  |  |
| `bpmpro3__AOC_Adjusted_Unit_Cost__c` | Adjusted Unit Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__AOC_Base_Rate__c` | Base Rate | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__AOC_Manual_Quantity_Override__c` | Manual Quantity Override | boolean | `boolean` |  |  |  |
| `bpmpro3__AOC_Unit_Type__c` | Unit Type | string | `varchar(100)` |  |  |  |
| `bpmpro3__AOC_Labor_Cost__c` | Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__AOC_Sales_Document__c` | SalesDoc # | string | `text` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Add-On Product (`bpmpro3__AddOn_Product__c`) {#bpmpro3addonproductc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a19 |
| Fields | 21 |
| Relationships | 29 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Add-On Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__AOP_Item_Type__c` | Add-On Item Type Deprecated | picklist | `text` |  |  |  |
| `bpmpro3__AOP_Measurement_Unit__c` | Measurement Unit | picklist | `text` | Yes |  |  |
| `bpmpro3__AOP_Brand_Name__c` | Brand Name | string | `varchar(100)` |  |  |  |
| `bpmpro3__AOP_Cost_History_Log__c` | Cost History Log | textarea | `text` |  |  |  |
| `bpmpro3__AOP_Description__c` | Description | textarea | `text` |  |  |  |
| `bpmpro3__AOP_Install_Unit_Cost__c` | Add-On Install Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__AOP_Product_Unit_Cost__c` | Add-On Product Unit Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__AOP_Vendor__c` | Vendor | reference | `uuid` | Yes |  | -> Account (Lookup) |
| `bpmpro3__AOP_AddOn_Total_Cost__c` | Add-On Total Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__AOP_Cost_Control_Variable__c` | Cost_Control_Variable | currency | `numeric(18,2)` |  |  |  |

### Picklist Values

**Add-On Item Type Deprecated** (`bpmpro3__AOP_Item_Type__c`):
- Deadbolt = `Deadbolt`
- Handleset = `Handleset`
- Lever = `Lever`
- Pull Handle = `Pull Handle`

**Measurement Unit** (`bpmpro3__AOP_Measurement_Unit__c`):
- Hourly = `Hourly`
- Linear Feet = `Linear Feet`
- Monthly = `Monthly`
- Piece = `Piece`
- Pounds = `Pounds`
- Square Feet = `Square Feet`
- Weekly = `Weekly`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__A3_LaborItems__c | bpmpro3__A3_AddOnProductItem_Rel__c | bpmpro3__A3_AddOnProduct_Rel__r | No |
| bpmpro3__LaborItem_AddOn_Junction__c | bpmpro3__AOPS_AddOn_Product__c | bpmpro3__Labor_Item_Add_On_Junctions__r | No |

---

## Back Charge (`bpmpro3__Back_Charge__c`) {#bpmpro3backchargec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1A |
| Fields | 16 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Back Charge # | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__LaborTicket_BackCharge_Rel__c` | Labor Ticket # | reference | `uuid` | Yes |  | -> bpmpro3__Labor_Ticket__c (MasterDetail) |
| `bpmpro3__Description__c` | Description | textarea | `text` | Yes |  |  |
| `bpmpro3__Quantity__c` | Quantity | double | `float8` |  |  |  |
| `bpmpro3__Receipt_Number__c` | Receipt # | string | `varchar(100)` |  |  |  |
| `bpmpro3__Unit_Price__c` | Unit Price | currency | `numeric(18,2)` | Yes |  |  |
| `bpmpro3__Total_Receipt__c` | Total Receipt | currency | `numeric(18,2)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Building Material (`bpmpro3__Building_Material__c`) {#bpmpro3buildingmaterialc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1B |
| Fields | 21 |
| Relationships | 31 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Building Material Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__BM_Coverage_Unit_Measure__c` | Coverage Unit Measure | picklist | `text` | Yes |  |  |
| `bpmpro3__BM_Material_Type__c` | Material Type | picklist | `text` | Yes |  |  |
| `bpmpro3__BM_Package_Unit_Measure__c` | Package Unit Measure | picklist | `text` |  |  |  |
| `bpmpro3__BM_Cost__c` | Cost | currency | `numeric(18,2)` | Yes |  |  |
| `bpmpro3__BM_Coverage_Rate__c` | Coverage Rate | double | `numeric(14,4)` | Yes |  |  |
| `bpmpro3__BM_Description__c` | Description | textarea | `text` |  |  |  |
| `bpmpro3__BM_Number_Units_Package__c` | Number of Units in Package | double | `float8` | Yes |  |  |
| `bpmpro3__BM_Cost_Per_Coverage_Unit__c` | Cost Per Coverage Unit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__BM_Cost_Per_Unit_Package__c` | Cost Per Unit in Package | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__BM_Coverage_Rate_Explanation__c` | Coverage Rate Explanation | string | `text` |  |  |  |

### Picklist Values

**Coverage Unit Measure** (`bpmpro3__BM_Coverage_Unit_Measure__c`):
- Square Feet = `Square Feet`
- Linear Feet = `Linear Feet`
- Unit = `Unit`

**Material Type** (`bpmpro3__BM_Material_Type__c`):
- Wood Buck = `Wood Buck`
- Screw = `Screw`
- Flashing = `Flashing`
- Caulking = `Caulking`
- Other = `Other`

**Package Unit Measure** (`bpmpro3__BM_Package_Unit_Measure__c`):
- Board = `Board`
- Each = `Each`
- Gallon = `Gallon`
- Linear Feet = `Linear Feet`
- Liter = `Liter`
- Piece = `Piece`
- Pounds = `Pounds`
- Square Feet = `Square Feet`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__Dealer_Item__c | bpmpro3__DI_Caulking_Selection__c | bpmpro3__Dealer_Items__r | No |
| bpmpro3__Dealer_Item__c | bpmpro3__DI_Flashing_Selection__c | bpmpro3__DI_Flashing__r | No |
| bpmpro3__Dealer_Item__c | bpmpro3__DI_Product_Screw_Selection__c | bpmpro3__DI_Product_Screw__r | No |
| bpmpro3__Dealer_Item__c | bpmpro3__DI_WB_Screw_Selection__c | bpmpro3__DI_Screws__r | No |
| bpmpro3__Dealer_Item__c | bpmpro3__DI_WB_Selection__c | bpmpro3__DI_Wood_Bucks__r | No |

---

## Building Permit and HOA (`bpmpro3__Building_Permit_c__c`) {#bpmpro3buildingpermitcc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1C |
| Fields | 34 |
| Relationships | 35 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | BP Record | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__BP_Project__c` | Project | reference | `uuid` | Yes |  | -> bpmpro3__Project__c (MasterDetail) |
| `bpmpro3__BP_HOA_Approval__c` | HOA Approval Required? | picklist | `text` |  |  |  |
| `bpmpro3__BP_ApprovedInspections_Rollup__c` | Approved Inspections # | double | `float8` |  |  |  |
| `bpmpro3__BP_HOAApprovalDate__c` | HOA Approval Date | date | `date` |  |  |  |
| `bpmpro3__BP_HOARequestedDate__c` | HOA Approval Requested Date | date | `date` |  |  |  |
| `bpmpro3__BP_HOA__c` | Homeowner's Association | reference | `uuid` |  |  | -> Account (Lookup) |
| `bpmpro3__BP_Municipality__c` | Municipality | reference | `uuid` | Yes |  | -> Account (Lookup) |
| `bpmpro3__BP_NOC_Notarized_Date__c` | NOC Notarized Date | date | `date` |  |  |  |
| `bpmpro3__BP_NOC_Recorded_Date__c` | NOC Recorded Date | date | `date` |  |  |  |
| `bpmpro3__BP_PermitExpirationDate__c` | Permit Expiration Date | date | `date` |  |  |  |
| `bpmpro3__BP_PermitIssuedDate__c` | Permit Issued Date | date | `date` |  |  |  |
| `bpmpro3__BP_PermitNumber__c` | Permit # | string | `varchar(50)` |  | Yes |  |
| `bpmpro3__BP_Permit_Applied_Date__c` | Permit Applied Date | date | `date` |  |  |  |
| `bpmpro3__BP_Process_Number__c` | Process # | string | `varchar(90)` |  |  |  |
| `bpmpro3__BP_Remarks__c` | Remarks | textarea | `text` |  |  |  |
| `bpmpro3__BP_ExpiresIn__c` | Expires In | double | `float8` |  |  |  |
| `bpmpro3__BP_PermitStatus__c` | Permit Status | string | `text` |  |  |  |
| `bpmpro3__BP_Project_Full_Address__c` | Project Full Address | string | `text` |  |  |  |
| `bpmpro3__BP_Project_Name__c` | Project Name | string | `text` |  |  |  |
| `bpmpro3__BP_Sales_Person__c` | Sales Person | string | `text` |  |  |  |
| `bpmpro3__BP_BillablePermitFees_Rollup__c` | Billable Permit Fees | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__BP_FinalizedCode_Rollup__c` | Finalized Code | double | `float8` |  |  |  |
| `bpmpro3__BP_PermitFees_Rollup__c` | Total Permit Fees | currency | `numeric(18,2)` |  |  |  |

### Picklist Values

**HOA Approval Required?** (`bpmpro3__BP_HOA_Approval__c`):
- NO = `NO`
- YES = `YES`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__Inspections__c | bpmpro3__Building_Permit__c | bpmpro3__Inspections__r | Yes |
| bpmpro3__Permit_Fee__c | bpmpro3__PF_Building_Permit__c | bpmpro3__Permit_Fees__r | Yes |

---

## Company Settings (`bpmpro3__Company_Settings__c`) {#bpmpro3companysettingsc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1D |
| Fields | 69 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Company Settings | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__SOS_Sales_Commission_Basis__c` | Sales Commission Basis | picklist | `text` | Yes |  |  |
| `bpmpro3__SOS_State__c` | State | picklist | `text` | Yes |  |  |
| `bpmpro3__SOS_Active__c` | Active | boolean | `boolean` |  |  |  |
| `bpmpro3__SOS_City__c` | City | string | `varchar(80)` | Yes |  |  |
| `bpmpro3__SOS_Company_Logo_URL__c` | Company Logo URL | url | `text` |  |  |  |
| `bpmpro3__SOS_Company_Logo__c` | Company Logo | textarea | `text` |  |  |  |
| `bpmpro3__SOS_Company_Name_Abbreviation__c` | Company Name Abbreviation | string | `varchar(80)` | Yes |  |  |
| `bpmpro3__SOS_Company_Name__c` | Company Name to Display | textarea | `text` | Yes |  |  |
| `bpmpro3__SOS_Convenience_Fee_Pct__c` | Convenience Fee % | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SOS_County_TaxRate__c` | County Tax Rate | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SOS_Cover_Page__c` | Cover Page | textarea | `text` |  |  |  |
| `bpmpro3__SOS_Email__c` | Email | email | `text` |  |  |  |
| `bpmpro3__SOS_Instagram_Handle__c` | Instagram Handle | string | `varchar(60)` |  |  |  |
| `bpmpro3__SOS_Logo_Alt_Value__c` | Logo Alt Value | string | `varchar(80)` | Yes |  |  |
| `bpmpro3__SOS_Main_Phone_Number__c` | Main Phone Number | phone | `text` |  |  |  |
| `bpmpro3__SOS_Owning_Entity__c` | Owning Entity | reference | `uuid` |  |  | -> Account (Lookup) |
| `bpmpro3__SOS_State_TaxRate__c` | State Tax Rate | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SOS_Street_Address__c` | Street Address | textarea | `text` | Yes |  |  |
| `bpmpro3__SOS_Trade_License_Number__c` | Trade License Number | string | `varchar(80)` |  |  |  |
| `bpmpro3__SOS_Website__c` | Website | url | `text` |  |  |  |
| `bpmpro3__SOS_Zip_Code__c` | Zip Code | string | `varchar(12)` | Yes |  |  |
| `bpmpro3__SOS_Filtered_by_Stage_Grouping__c` | Filtered by Stage Grouping | picklist | `text` |  |  |  |
| `bpmpro3__SOS_QuickBooks_Company_Id__c` | QuickBooks Company Id | string | `varchar(80)` |  |  |  |
| `bpmpro3__SOS_ProLaborDefaultMarkup__c` | ProLabor Default Markup % | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SOS_ProdMatDefaultMarkup__c` | ProdMat Default Markup % | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SOS_QuickBooks_Product_Name_Tax_0__c` | (D) QuickBooks Product Name(Tax = 0) | string | `varchar(255)` |  |  |  |
| `bpmpro3__SOS_QuickBooks_Product_Name_With_Tax__c` | (D) QuickBooks Product Name(Tax > 0) | string | `varchar(255)` |  |  |  |
| `bpmpro3__Show_Zero_Amount_Projects__c` | Show Zero Amount Projects | boolean | `boolean` |  |  |  |
| `bpmpro3__SOS_QB_InstallationLabor__c` | QB Installation Labor | textarea | `text` |  |  |  |
| `bpmpro3__SOS_QB_ManufacturedProduts__c` | QB Manufactured Produts | textarea | `text` |  |  |  |
| `bpmpro3__SOS_QB_MatEquipment__c` | QB Materials and Equipment | textarea | `text` |  |  |  |
| `bpmpro3__SOS_QB_PlansPackage__c` | QB Plans Package | textarea | `text` |  |  |  |
| `bpmpro3__SOS_QB_ProServices__c` | QB Professional Services | textarea | `text` |  |  |  |
| `bpmpro3__SOS_SalesDoc_WonStatus__c` | Sales Doc Won Status | string | `varchar(80)` |  |  |  |
| `bpmpro3__SOS_ClauseEvenRowColor__c` | Clause Even Row Color | string | `varchar(20)` |  |  |  |
| `bpmpro3__SOS_ClauseOddRowColor__c` | Clause Odd Row Color | string | `varchar(20)` |  |  |  |
| `bpmpro3__SOS_ProjectInvoice_PaymentInstructions__c` | Project Invoice Payment Instructions | textarea | `text` |  |  |  |
| `bpmpro3__SOS_Install_Ticket_Label__c` | Installation Ticket Label | string | `varchar(60)` |  |  |  |
| `bpmpro3__SOS_DefaultPermitFeesTreatment__c` | Default Permit Fees Treatment | picklist | `text` |  |  |  |
| `bpmpro3__SOS_DefaultPlansPackageCost__c` | Default Plans Package Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SOS_DefaultUponAgreement__c` | Default Upon Agreement % | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SOS_DefaultUponCompletion__c` | Default Upon Completion % | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SOS_DefaultUponDelivery__c` | Default Upon Delivery % | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SOS_Default_Admin_Fee__c` | Default Admin Fee | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SOS_PlansPackageDefaultMarkup__c` | Plans Package Default Markup % | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SOS_Supply_Only_Mode__c` | Supply-Only Mode | boolean | `boolean` |  |  |  |
| `bpmpro3__SOS_Charge_A3_Materials_SalesTax__c` | Charge A3 Materials Sales Tax | boolean | `boolean` |  |  |  |
| `bpmpro3__SOS_County_Taxable_Amount_Cap__c` | County Taxable Amount Cap | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SOS_Default_SalesDoc_Type__c` | Default SalesDoc Type | picklist | `text` |  |  |  |
| `bpmpro3__SOS_Dashboard_Enable__c` | Enable Traffic Light (Deprecated) | boolean | `boolean` |  |  |  |
| `bpmpro3__SOS_Dashboard_Green_Threshold__c` | Dashboard Green (Deprecated) | double | `float8` |  |  |  |
| `bpmpro3__SOS_Dashboard_Red_Threshold__c` | Dashboard Red (Deprecated) | double | `float8` |  |  |  |
| `bpmpro3__SOS_Dashboard_Yellow_Threshold__c` | Dashboard Yellow (Deprecated) | double | `float8` |  |  |  |
| `bpmpro3__SOS_Default_Board_View__c` | Default Board View | picklist | `text` |  |  |  |
| `bpmpro3__SOS_Esign_Mailhook__c` | Esign Mailhook | email | `text` |  |  |  |
| `bpmpro3__SOS_Green_Light_Limit__c` | Green Light Limit | double | `float8` |  |  |  |
| `bpmpro3__SOS_Red_Light_Limit__c` | Red Light Limit | double | `float8` |  |  |  |
| `bpmpro3__SOS_Yellow_Light_Limit__c` | Yellow Light Limit | double | `float8` |  |  |  |

### Picklist Values

**Sales Commission Basis** (`bpmpro3__SOS_Sales_Commission_Basis__c`):
- [1] Cost-Based Commission = `[1] Cost-Based Commission`
- [2] Revenue-Based Commission = `[2] Revenue-Based Commission`
- [3] Profit-Based Commission = `[3] Profit-Based Commission`

**State** (`bpmpro3__SOS_State__c`):
- AK = `AK`
- AL = `AL`
- AR = `AR`
- AZ = `AZ`
- CA = `CA`
- CO = `CO`
- CT = `CT`
- DE = `DE`
- FL = `FL`
- GA = `GA`
- HI = `HI`
- IA = `IA`
- ID = `ID`
- IL = `IL`
- IN = `IN`
- KS = `KS`
- KY = `KY`
- LA = `LA`
- MA = `MA`
- MD = `MD`
- ME = `ME`
- MI = `MI`
- MN = `MN`
- MO = `MO`
- MS = `MS`
- MT = `MT`
- NC = `NC`
- ND = `ND`
- NE = `NE`
- NH = `NH`
- NJ = `NJ`
- NM = `NM`
- NV = `NV`
- NY = `NY`
- OH = `OH`
- OK = `OK`
- OR = `OR`
- PA = `PA`
- RI = `RI`
- SC = `SC`
- SD = `SD`
- TN = `TN`
- TX = `TX`
- UT = `UT`
- VA = `VA`
- VT = `VT`
- WA = `WA`
- WI = `WI`
- WV = `WV`
- WY = `WY`

**Filtered by Stage Grouping** (`bpmpro3__SOS_Filtered_by_Stage_Grouping__c`):
- Lowest Pending = `Pending`
- Lowest In Progress = `Lowest In Progress`
- Highest Passed = `Passed`

**Default Permit Fees Treatment** (`bpmpro3__SOS_DefaultPermitFeesTreatment__c`):
- Excluded = `Excluded`
- Included = `Included`

**Default SalesDoc Type** (`bpmpro3__SOS_Default_SalesDoc_Type__c`):
- Change Order = `Change Order`
- Contract = `Contract`
- Proposal = `Proposal`
- Proposal Summary = `Proposal Summary`
- Service Contract = `Service Contract`
- Service Proposal = `Service Proposal`

**Default Board View** (`bpmpro3__SOS_Default_Board_View__c`):
- Projects by Stage = `Projects by Stage`
- Projects by Status = `Projects by Status`
- Traffic Light = `Traffic Light`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Contact CSV Import (`bpmpro3__Contact_CSV_Import__c`) {#bpmpro3contactcsvimportc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1E |
| Fields | 41 |
| Relationships | 31 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Contact Full Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `bpmpro3__Account_Business_Internal_Role__c` | Account Business Internal Role | string | `varchar(255)` |  |  |  |
| `bpmpro3__Account_ID__c` | Account ID | string | `varchar(255)` |  |  |  |
| `bpmpro3__Account_Name__c` | Account Name | string | `varchar(255)` |  |  |  |
| `bpmpro3__Account_Phone__c` | Account Phone | phone | `text` |  |  |  |
| `bpmpro3__Contact_Birthdate__c` | Contact Birthdate | date | `date` |  |  |  |
| `bpmpro3__Contact_Business_Fax__c` | Contact Business Fax | phone | `text` |  |  |  |
| `bpmpro3__Contact_Business_Phone__c` | Contact Business Phone | phone | `text` |  |  |  |
| `bpmpro3__Contact_Category__c` | Contact Category | string | `varchar(255)` |  |  |  |
| `bpmpro3__Contact_Company_Role_Active__c` | Contact Company Role Active | boolean | `boolean` |  |  |  |
| `bpmpro3__Contact_Contact_Description__c` | Contact Contact Description | textarea | `text` |  |  |  |
| `bpmpro3__Contact_Department__c` | Contact Department | string | `varchar(255)` |  |  |  |
| `bpmpro3__Contact_Do_Not_Call__c` | Contact Do Not Call | boolean | `boolean` |  |  |  |
| `bpmpro3__Contact_Email_Opt_Out__c` | Contact Email Opt Out | boolean | `boolean` |  |  |  |
| `bpmpro3__Contact_Email__c` | Contact Email | email | `text` |  |  |  |
| `bpmpro3__Contact_First_Name__c` | Contact First Name | string | `varchar(255)` |  |  |  |
| `bpmpro3__Contact_Home_Phone__c` | Contact Home Phone | phone | `text` |  |  |  |
| `bpmpro3__Contact_Internal_Company_Role__c` | Contact Internal Company Role | string | `varchar(255)` |  |  |  |
| `bpmpro3__Contact_Last_Name__c` | Contact Last Name | string | `varchar(255)` |  |  |  |
| `bpmpro3__Contact_Lead_Source__c` | Contact Lead Source | string | `varchar(255)` |  |  |  |
| `bpmpro3__Contact_Mailing_Address__c` | Contact Mailing Address | string | `varchar(255)` |  |  |  |
| `bpmpro3__Contact_Mailing_City__c` | Contact Mailing City | string | `varchar(255)` |  |  |  |
| `bpmpro3__Contact_Mailing_Country__c` | Contact Mailing Country | string | `varchar(255)` |  |  |  |
| `bpmpro3__Contact_Mailing_StateProvince__c` | Contact Mailing State/Province | string | `varchar(255)` |  |  |  |
| `bpmpro3__Contact_Mailing_Street__c` | Contact Mailing Street | string | `varchar(255)` |  |  |  |
| `bpmpro3__Contact_Mailing_ZipPostal_Code__c` | Contact Mailing Zip/Postal Code | string | `varchar(255)` |  |  |  |
| `bpmpro3__Contact_Middle_Name__c` | Contact Middle Name | string | `varchar(255)` |  |  |  |
| `bpmpro3__Contact_Mobile_Phone__c` | Contact Mobile Phone | phone | `text` |  |  |  |
| `bpmpro3__Contact_Same_As_Billing_Email__c` | Contact Same As Billing Email | boolean | `boolean` |  |  |  |
| `bpmpro3__Contact_Same_as_Billing_Phone__c` | Contact Same as Billing Phone | boolean | `boolean` |  |  |  |
| `bpmpro3__Contact_Secondary_Email__c` | Contact Secondary Email | email | `text` |  |  |  |
| `bpmpro3__Contact_Title__c` | Contact Title | string | `varchar(255)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## CPI Add-On Product Catalog (`bpmpro3__CPI_AddOn_Product_Catalog__c`) {#bpmpro3cpiaddonproductcatalogc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1p |
| Fields | 22 |
| Relationships | 33 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Add-On Product Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__CPIAOPC_Active__c` | Active | boolean | `boolean` |  |  |  |
| `bpmpro3__CPIAOPC_Category__c` | Category | picklist | `text` |  |  |  |
| `bpmpro3__CPIAOPC_Default_Labor_Cost__c` | Default Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPIAOPC_Default_Product_Cost__c` | Default Product Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPIAOPC_Description__c` | Description | textarea | `text` |  |  |  |
| `bpmpro3__CPIAOPC_Display_Order__c` | Display Order | double | `float8` |  |  |  |
| `bpmpro3__CPIAOPC_Icon_Name__c` | Icon Name | string | `varchar(80)` |  |  |  |
| `bpmpro3__CPIAOPC_Product_Code__c` | Product Code | string | `varchar(40)` |  | Yes |  |
| `bpmpro3__CPIAOPC_Unit_Type__c` | Unit Type | picklist | `text` |  |  |  |
| `bpmpro3__CPIAOPC_Default_Total_Cost__c` | Default Total Cost | currency | `numeric(18,2)` |  |  |  |

### Picklist Values

**Category** (`bpmpro3__CPIAOPC_Category__c`):
- Delivery and Logistics = `Delivery and Logistics`
- Frame and Exterior Finishes = `Frame and Exterior Finishes`
- Glass and Glazing = `Glass and Glazing`
- Grids and Dividers = `Grids and Dividers`
- Hardware and Locks = `Hardware and Locks`
- Installation and Finish Work = `Installation and Finish Work`
- Interior Finishes = `Interior Finishes`
- Other = `Other`
- Performance and Energy Upgrades = `Performance and Energy Upgrades`
- Screens = `Screens`
- Specialty and Custom = `Specialty and Custom`
- Structural and Configuration = `Structural and Configuration`
- Warranty and Service = `Warranty and Service`
- Window Treatments = `Window Treatments`

**Unit Type** (`bpmpro3__CPIAOPC_Unit_Type__c`):
- Piece = `Piece`
- Square Foot = `Square Foot`
- Linear Foot = `Linear Foot`
- United Inches = `United Inches`
- Width = `Width`
- Height = `Height`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__Add_On_CPI__c | bpmpro3__AOCPI_Add_On_Product__c | bpmpro3__Add_On_CPIs__r | No |
| bpmpro3__CPI_Preset_Product_Add_On__c | bpmpro3__CPIPPAO_Add_On_Product__c | bpmpro3__CPI_Preset_Product_AddOns__r | No |

---

## Configure Pricing Items (`bpmpro3__CPI_Configure_Pricing_Items__c`) {#bpmpro3cpiconfigurepricingitemsc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1g |
| Fields | 54 |
| Relationships | 28 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Mark | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `bpmpro3__CPI_Sales_Document__c` | Sales Document | reference | `uuid` | Yes |  | -> bpmpro3__Sales_Document__c (MasterDetail) |
| `bpmpro3__CPI_AddOnCost_Unit__c` | Add On Cost [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_Additional_Cost__c` | Custom Add-On Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_Height_inches__c` | Height (inches) | double | `float8` |  |  |  |
| `bpmpro3__CPI_Order__c` | Order | double | `float8` |  |  |  |
| `bpmpro3__CPI_Preset_Product__c` | Preset Product | reference | `uuid` |  |  | -> bpmpro3__PP_Preset_Product__c (Lookup) |
| `bpmpro3__CPI_Quantity__c` | Quantity | double | `float8` |  |  |  |
| `bpmpro3__CPI_Remarks__c` | Remarks | textarea | `text` |  |  |  |
| `bpmpro3__CPI_Selling_Multiplier__c` | Selling Multiplier | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_Width_inches__c` | Width (inches) | double | `float8` |  |  |  |
| `bpmpro3__CPI_Cost__c` | Total Item Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_Customer_Sales_Price__c` | Customer Sales Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_Labor_Cost__c` | Labor Cost [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_Name__c` | Name | string | `text` |  |  |  |
| `bpmpro3__CPI_Pretax_Sales_Price__c` | Pretax Sales Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_Product_Code_Basis__c` | Product Cost Basis [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_Profit__c` | Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_Retail_Sales_Tax__c` | Retail Sales Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_Sales_Price_Ext__c` | Sales_Price (Deprecated) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_Unit_Price__c` | CPI Unit Price (Deprecated) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_Wholesale_Sales_Tax__c` | Wholesale Sales Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_LaborCost_Ext__c` | Labor Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_ProductCostBasis_Ext__c` | Product Cost Basis [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_ProductCost_Ext__c` | Product Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_ProductCost_Unit__c` | Product Cost [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_LaborPrice_Ext__c` | Labor Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_ProductPrice_Ext__c` | Product Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_TotalItemPrice_Ext__c` | Total Item Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_AddOnCost_Ext__c` | Add On Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_LaborPrice_Unit__c` | Labor Price [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_ProductPrice_Unit__c` | Product Price [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_RetailSalesTax_Ext__c` | Retail Sales Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_TotalItemCost_Unit__c` | Total Item Cost [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_WholesaleSalesTax_Ext__c` | Wholesale Sales Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_AddOn_Products_List__c` | AddOn Products List | textarea | `text` |  |  |  |
| `bpmpro3__CPI_TotalItemPrice_Unit__c` | Total Item Price [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Custom_Add_On_Cost_2__c` | Custom Add-On Cost 2 | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Custom_Add_On_Cost_3__c` | Custom Add-On Cost 3 | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Custom_Add_On_Cost_Des_2__c` | Custom Add-On Cost Description 2 | string | `varchar(255)` |  |  |  |
| `bpmpro3__Custom_Add_On_Cost_Des_3__c` | Custom Add-On Cost Description 3 | string | `varchar(255)` |  |  |  |
| `bpmpro3__Custom_Add_On_Cost_Des__c` | Custom Add-On Cost Description | string | `varchar(255)` |  |  |  |
| `bpmpro3__CPI_Project__c` | Project | string | `text` |  |  |  |
| `bpmpro3__CPI_AddOn_LaborCost_Unit__c` | Add On Labor Cost [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_AddOn_ProductCost_Unit__c` | Add On Product Cost [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_AddOn_LaborCost_Ext__c` | Add On Labor Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPI_AddOn_ProductCost_Ext__c` | Add On Product Cost [Ext] | currency | `numeric(18,2)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__Add_On_CPI__c | bpmpro3__AOC_Configure_Pricing_Items__c | bpmpro3__Add_On_CPIs__r | No |

---

## CPI Preset Product Add-On (`bpmpro3__CPI_Preset_Product_Add_On__c`) {#bpmpro3cpipresetproductaddonc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1q |
| Fields | 20 |
| Relationships | 28 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | CPI Preset Product Add-On Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `bpmpro3__CPIPPAO_Add_On_Product__c` | Add-On Product | reference | `uuid` | Yes |  | -> bpmpro3__CPI_AddOn_Product_Catalog__c (Lookup) |
| `bpmpro3__CPIPPAO_Default_Quantity__c` | Quantity | double | `numeric(7,2)` |  |  |  |
| `bpmpro3__CPIPPAO_Display_Order__c` | Display Order | double | `float8` |  |  |  |
| `bpmpro3__CPIPPAO_Is_Required__c` | Is Required | boolean | `boolean` |  |  |  |
| `bpmpro3__CPIPPAO_Labor_Cost_Override__c` | Labor Cost Override | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPIPPAO_Max_Quantity__c` | Max Quantity | double | `numeric(7,2)` |  |  |  |
| `bpmpro3__CPIPPAO_Min_Quantity__c` | Min Quantity | double | `numeric(7,2)` |  |  |  |
| `bpmpro3__CPIPPAO_Preset_Product__c` | Preset Product | reference | `uuid` | Yes |  | -> bpmpro3__PP_Preset_Product__c (Lookup) |
| `bpmpro3__CPIPPAO_Product_Cost_Override__c` | Product Cost Override | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPIPPAO_Default_Labor_Cost__c` | Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__CPIPPAO_Default_Product_Cost__c` | Product Cost | currency | `numeric(18,2)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Deal Sheet (`bpmpro3__Deal_Sheet__c`) {#bpmpro3dealsheetc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1h |
| Fields | 22 |
| Relationships | 36 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Deal Sheet | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__DS_CalculatedCommShare__c` | Sales Rep Comm Share | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DS_ProjectContactRole__c` | Project Contact Role | reference | `uuid` | Yes |  | -> bpmpro3__Project_Contact_Role__c (Lookup) |
| `bpmpro3__DS_Project__c` | Project | reference | `uuid` | Yes |  | -> bpmpro3__Project__c (Lookup) |
| `bpmpro3__DS_SalesCommSplit__c` | Sales Commission Split | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__DS_SalesCommissionTotal__c` | Deal Sales Commission Total | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DS_SalesDocument__c` | Sales Document | reference | `uuid` | Yes |  | -> bpmpro3__Sales_Document__c (Lookup) |
| `bpmpro3__DS_SalesRep__c` | Sales Rep | reference | `uuid` | Yes |  | -> Contact (Lookup) |
| `bpmpro3__DS_TotalPaid__c` | Total Paid | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DS_PercentPaidToSalesRep__c` | % Paid to Sales Rep | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__DS_SalesDocName__c` | SalesDoc Name | string | `text` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__Sales_Commission_Payout__c | bpmpro3__SCP_DealSheet__c | bpmpro3__Sales_Commission_Payouts__r | No |

---

## Dealer Item (`bpmpro3__Dealer_Item__c`) {#bpmpro3dealeritemc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1F |
| Fields | 80 |
| Relationships | 32 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Dealer Item Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__DI_ItemType_Picklist__c` | Item Type | picklist | `text` | Yes |  |  |
| `bpmpro3__DI_MeasuringUnit__c` | Measuring Unit | picklist | `text` |  |  |  |
| `bpmpro3__DI_ActiveItem__c` | Active Item | boolean | `boolean` |  |  |  |
| `bpmpro3__DI_Caulking_Selection__c` | Caulking Selection | reference | `uuid` |  |  | -> bpmpro3__Building_Material__c (Lookup) |
| `bpmpro3__DI_DealerItemDescription__c` | Dealer Item Description | textarea | `text` |  |  |  |
| `bpmpro3__DI_DrywallLaborCost__c` | Drywall Labor | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_FlashingLaborCost__c` | Flashing Labor Old | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_FlashingMatCost__c` | Flashing Material Cost Old | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_Flashing_Labor_Rate__c` | Flashing Labor Rate ($/Lin.Ft.) | double | `numeric(12,2)` | Yes |  |  |
| `bpmpro3__DI_Flashing_Length__c` | Flashing Length (Inches) | double | `numeric(14,4)` | Yes |  |  |
| `bpmpro3__DI_Flashing_Selection__c` | Flashing Selection | reference | `uuid` | Yes |  | -> bpmpro3__Building_Material__c (Lookup) |
| `bpmpro3__DI_Height__c` | Height | double | `numeric(14,4)` | Yes |  |  |
| `bpmpro3__DI_Hurricane_Shutter_Removal__c` | Hurricane Shutter Removal | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_LadderEquipmentCost__c` | Ladder Equipment Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_LadderLaborCost__c` | Ladder Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_Leg__c` | Leg | double | `numeric(14,4)` | Yes |  |  |
| `bpmpro3__DI_NC2XLCharge__c` | New Construction Install Cost 2XL ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_NC3XLCharge__c` | New Construction Install Cost 3XL ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_NCInstallCost__c` | New Construction Install Cost ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_NCXLCharge__c` | New Construction Install Cost XL ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_Product_Image__c` | Product Image | textarea | `text` |  |  |  |
| `bpmpro3__DI_Product_Screw_Selection__c` | Product Screw Selection | reference | `uuid` | Yes |  | -> bpmpro3__Building_Material__c (Lookup) |
| `bpmpro3__DI_Product_Screws_Spacing__c` | Product Screws Spacing (Inches) | double | `float8` | Yes |  |  |
| `bpmpro3__DI_RecessDownLaborCost__c` | Recess Down Opening | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_Retrofit2XLCharge__c` | Retrofit Install Cost 2XL ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_Retrofit3XLCharge__c` | Retrofit Install Cost 3XL ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_RetrofitInstallCost__c` | Retrofit Install Cost ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_RetrofitXLCharge__c` | Retrofit Install Cost XL ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_ScaffoldingEquipmentCost__c` | Scaffolding Equipment Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_ScaffoldingLaborCost__c` | Scaffolding Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_StuccoLaborCost__c` | Stucco Labor | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_WB_Screw_Selection__c` | Wood Buck Screw Selection | reference | `uuid` | Yes |  | -> bpmpro3__Building_Material__c (Lookup) |
| `bpmpro3__DI_WB_Screws_Spacing__c` | Wood Buck Screws Spacing (Inches) | double | `float8` | Yes |  |  |
| `bpmpro3__DI_WB_Selection__c` | Wood Buck Selection | reference | `uuid` | Yes |  | -> bpmpro3__Building_Material__c (Lookup) |
| `bpmpro3__DI_Width__c` | Width | double | `numeric(14,4)` | Yes |  |  |
| `bpmpro3__DI_WoodBuckLaborCost__c` | Wood Buck Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_WoodBuckMatCost__c` | Wood Buck Mat Cost Old | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_Caulking_Coverage_Rate__c` | Caulking Coverage Rate | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__DI_Caulking_MatCost_Linear_Footage__c` | Caulking Mat Cost Per Linear Footage | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_Caulking_Material_Cost__c` | Caulking Material Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_Caulking_Material_Name__c` | Caulking Material Name | string | `text` |  |  |  |
| `bpmpro3__DI_Caulking_Units_Package__c` | Caulking Units in Package | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__DI_Caulking_Units_Required__c` | Caulking Units Required | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__DI_CostControlVar__c` | Cost Control Var | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_Flashing_Cost_Per_Coverage_Unit__c` | Flashing Cost Per Coverage Unit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_Flashing_Coverage_Area__c` | Flashing Coverage Area (Sq.Ft.) | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_Flashing_Coverage_Rate__c` | Flashing Coverage Rate | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__DI_Flashing_Labor_Cost__c` | Flashing Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_Flashing_MatCost_Per_Unit__c` | Flashing Material Cost Per Unit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_Flashing_MatCost__c` | Flashing Material Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_Flashing_Material_Name__c` | Flashing Material Name | string | `text` |  |  |  |
| `bpmpro3__DI_Linear_Footage__c` | Linear Footage | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__DI_Number_Units_Package__c` | Flashing # of Units in Package | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__DI_Product_Screws_MatCost_Per_Unit__c` | Product Screws Material Cost Per Unit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_Product_Screws_MatCost__c` | Product Screws Material Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_Product_Screws_Material_Name__c` | Product Screws Material Name | string | `text` |  |  |  |
| `bpmpro3__DI_Product_Screws_Req__c` | Product Screws Required | double | `float8` |  |  |  |
| `bpmpro3__DI_Square_Footage__c` | Square Footage | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__DI_WB_Boards_Required__c` | Wood Buck Boards Required | double | `float8` |  |  |  |
| `bpmpro3__DI_WB_Cost_Per_Coverage_Unit__c` | Wood Buck Cost Per Linear Feet | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_WB_Coverage_Rate__c` | Wood Buck Coverage Rate | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__DI_WB_MatCost_Per_Board__c` | Wood Buck Mat Cost Per Board | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_WB_MatCost__c` | Wood Buck Mat Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_WB_Material_Name__c` | Wood Buck Material Name | string | `text` |  |  |  |
| `bpmpro3__DI_WB_Screws_MatCost_Per_Unit__c` | Wood Buck Screws Material Cost Per Unit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_WB_Screws_MatCost__c` | Wood Buck Screws Material Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__DI_WB_Screws_Material_Name__c` | Wood Buck Screws Material Name | string | `text` |  |  |  |
| `bpmpro3__DI_WB_Screws_Req__c` | Wood Buck Screws Required | double | `float8` |  |  |  |
| `bpmpro3__DI_WB_Units_Package__c` | Wood Bucks # of Units in Package | double | `numeric(18,4)` |  |  |  |

### Picklist Values

**Item Type** (`bpmpro3__DI_ItemType_Picklist__c`):
- Curtain Wall = `Curtain Wall`
- Door = `Door`
- Handleset = `Handleset`
- Labor = `Labor`
- Material = `Material`
- Miscellaneous = `Miscellaneous`
- Mullion = `Mullion`
- Professional Service = `Professional Service`
- Sidelite = `Sidelite`
- Storefront = `Storefront`
- Window = `Window`

**Measuring Unit** (`bpmpro3__DI_MeasuringUnit__c`):
- Hourly = `Hourly`
- Linear Feet = `Linear Feet`
- Monthly = `Monthly`
- Piece = `Piece`
- Pounds = `Pounds`
- Square Feet = `Square Feet`
- Weekly = `Weekly`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__A3_LaborItems__c | bpmpro3__A3_DealerItem_Rel__c | bpmpro3__A3_Labor_Items__r | No |

---

## Inspection (`bpmpro3__Inspections__c`) {#bpmpro3inspectionsc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1G |
| Fields | 23 |
| Relationships | 28 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Inspection # | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__Building_Permit__c` | Building Permit | reference | `uuid` | Yes |  | -> bpmpro3__Building_Permit_c__c (MasterDetail) |
| `bpmpro3__IN_Inspection_Result__c` | Inspection Status | picklist | `text` |  |  |  |
| `bpmpro3__IN_Inspection_Type__c` | Inspection Type | picklist | `text` |  |  |  |
| `bpmpro3__IN_Inspection_Date__c` | Inspection Date | date | `date` | Yes |  |  |
| `bpmpro3__IN_Inspector_Name__c` | Inspector's Name | string | `varchar(100)` |  |  |  |
| `bpmpro3__IN_Person_Present__c` | Person Present | reference | `uuid` |  |  | -> Contact (Lookup) |
| `bpmpro3__IN_Results_Comments__c` | Results Comments | textarea | `text` |  |  |  |
| `bpmpro3__IN_Scheduled_By__c` | Scheduled By | reference | `uuid` |  |  | -> Contact (Lookup) |
| `bpmpro3__IN_Finalized_Code__c` | Finalized Code | double | `float8` |  |  |  |
| `bpmpro3__IN_Municipality__c` | Municipality | string | `text` |  |  |  |
| `bpmpro3__IN_Permit_Number__c` | Permit Number | string | `text` |  |  |  |
| `bpmpro3__IN_Project_Name__c` | Project Name | string | `text` |  |  |  |
| `bpmpro3__IN_Project__c` | Project | string | `text` |  |  |  |

### Picklist Values

**Inspection Status** (`bpmpro3__IN_Inspection_Result__c`):
- Scheduled = `Scheduled`
- Rolled Over Next Day = `Rolled Over Next Day`
- Partially Approved = `Partially Approved`
- Approved = `Approved`
- Finalized = `Finalized`
- Failed = `Failed`
- Rejected = `Rejected`
- Cancelled = `Cancelled`

**Inspection Type** (`bpmpro3__IN_Inspection_Type__c`):
- Anchor + Buck Inspection = `Anchor + Buck Inspection`
- Anchor Inspection = `Anchor Inspection`
- Buck Inspection = `Buck Inspection`
- Final Fire Inspection = `Final Fire Inspection`
- Final Inspection = `Final Inspection`
- Final Zoning Inspection = `Final Zoning Inspection`
- Partial In-Progress Inspection = `Partial In-Progress Inspection`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Invoice Payment (`bpmpro3__Invoice_Payment__c`) {#bpmpro3invoicepaymentc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1k |
| Fields | 18 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Invoice Payment # | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__IP_Date_Paid__c` | Date Paid | date | `date` |  |  |  |
| `bpmpro3__IP_Notes__c` | Notes | textarea | `text` |  |  |  |
| `bpmpro3__IP_Payment_Amount__c` | Payment Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__IP_Pretax_Payment_Portion__c` | Pretax Payment Portion | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__IP_Reference__c` | Reference | textarea | `text` |  |  |  |
| `bpmpro3__IP_SalesDoc_Invoice__c` | Sales Document Invoice | reference | `uuid` | Yes |  | -> bpmpro3__SalesDoc_Invoice__c (Lookup) |
| `bpmpro3__IP_Tax_Payment_Portion__c` | Tax Payment Portion | currency | `numeric(18,2)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Labor Charge (`bpmpro3__Labor_Charge__c`) {#bpmpro3laborchargec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1I |
| Fields | 27 |
| Relationships | 32 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Charge # | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__LC_LaborTicketNumber__c` | Labor Ticket # | reference | `uuid` | Yes |  | -> bpmpro3__Labor_Ticket__c (MasterDetail) |
| `bpmpro3__LC_ChargeBacktoProject__c` | Charge Back to Project | picklist | `text` |  |  |  |
| `bpmpro3__Billable_Charge__c` | Billable Charge | boolean | `boolean` |  |  |  |
| `bpmpro3__LC_Additional_Charge_Comment__c` | Additional Charge Comment | textarea | `text` |  |  |  |
| `bpmpro3__LC_BackCharge__c` | Back Charge | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__LC_Description__c` | Description | textarea | `text` |  |  |  |
| `bpmpro3__LC_Invoice__c` | Invoice # | string | `varchar(100)` |  |  |  |
| `bpmpro3__LC_InvoicedAmount__c` | Invoiced Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__LC_RetentionPercentage__c` | Retention % | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__Project__c` | Project | reference | `uuid` | Yes |  | -> bpmpro3__Project__c (Lookup) |
| `bpmpro3__Estimated_Labor_Cost__c` | Estimated Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__LC_InstallerName__c` | Installer Name | string | `text` |  |  |  |
| `bpmpro3__LC_PayDate__c` | Pay Date | date | `date` |  |  |  |
| `bpmpro3__LC_RetentionAmount__c` | Retention $ | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__LC_Sales_Person__c` | Sales Person | string | `text` |  |  |  |
| `bpmpro3__LC_TotalPay__c` | Total Pay $ | currency | `numeric(18,2)` |  |  |  |

### Picklist Values

**Charge Back to Project** (`bpmpro3__LC_ChargeBacktoProject__c`):
- No = `No`
- Yes = `Yes`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Labor Ticket (`bpmpro3__Labor_Ticket__c`) {#bpmpro3laborticketc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1J |
| Fields | 21 |
| Relationships | 35 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Labor Ticket Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__LT_PaymentStatus__c` | Payment Status | picklist | `text` |  |  |  |
| `bpmpro3__LT_LaborTicketComments__c` | Labor Ticket Comments | textarea | `text` |  |  |  |
| `bpmpro3__LT_PaidCheckNumber__c` | Paid with Check # | string | `varchar(60)` |  |  |  |
| `bpmpro3__LT_PayDate__c` | Pay Date | date | `date` |  |  |  |
| `bpmpro3__LT_Subcontractor_Company__c` | Subcontractor Company | reference | `uuid` |  |  | -> Account (Lookup) |
| `bpmpro3__LT_TotalLaborTicket__c` | Total Labor Ticket | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__LT_TotalBackCharges__c` | Total Back Charges | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__LT_TotalLaborCharges__c` | Total Labor Charges | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__LT_TotalReimbursements__c` | Total Reimbursements | currency | `numeric(18,2)` |  |  |  |

### Picklist Values

**Payment Status** (`bpmpro3__LT_PaymentStatus__c`):
- Unpaid = `Unpaid`
- Paid = `Paid`
- Disputed = `Disputed`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__Back_Charge__c | bpmpro3__LaborTicket_BackCharge_Rel__c | bpmpro3__Back_Charges__r | Yes |
| bpmpro3__Labor_Charge__c | bpmpro3__LC_LaborTicketNumber__c | bpmpro3__Labor_Charges__r | Yes |
| bpmpro3__Reimbursement__c | bpmpro3__Labor_Ticket_Reimbursement__c | bpmpro3__Reimbursements__r | Yes |

---

## Add-On Product and Service (`bpmpro3__LaborItem_AddOn_Junction__c`) {#bpmpro3laboritemaddonjunctionc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1H |
| Fields | 18 |
| Relationships | 28 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Add-On Record | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `bpmpro3__AOPS_AddOn_Product__c` | Add-On Product | reference | `uuid` |  |  | -> bpmpro3__AddOn_Product__c (Lookup) |
| `bpmpro3__AOPS_Product_Labor_Item__c` | Product & Labor Item | reference | `uuid` |  |  | -> bpmpro3__A3_LaborItems__c (Lookup) |
| `bpmpro3__AOPS_Quantity__c` | Quantity | double | `float8` | Yes |  |  |
| `bpmpro3__AOPS_AddOn_Product_Name__c` | Add-On Product Name | string | `text` |  |  |  |
| `bpmpro3__AOPS_Labor_Cost_Extended__c` | Labor Cost [ Ext ] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__AOPS_Labor_Cost__c` | Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__AOPS_Product_Cost_Extended__c` | Product Cost [ Ext ] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__AOPS_Product_Cost__c` | Product Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__AOPS_Total_Cost_Ext__c` | Total Cost [ Ext ] | currency | `numeric(18,2)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Materials (`bpmpro3__Material__c`) {#bpmpro3materialc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1K |
| Fields | 26 |
| Relationships | 31 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Materials Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__Project__c` | Project | reference | `uuid` | Yes |  | -> bpmpro3__Project__c (MasterDetail) |
| `bpmpro3__Checked_In_By__c` | Checked-In By | picklist | `text` |  |  |  |
| `bpmpro3__Checked_Out_by__c` | Checked-Out by | picklist | `text` |  |  |  |
| `bpmpro3__Material_Checkedout__c` | Material Checked-Out | picklist | `text` |  |  |  |
| `bpmpro3__Material_Purchase__c` | Material Purchase | picklist | `text` |  |  |  |
| `bpmpro3__Transaction_Type__c` | Transaction Type | picklist | `text` |  |  |  |
| `bpmpro3__Checked_In_Date__c` | Checked-In Date | date | `date` |  |  |  |
| `bpmpro3__Checked_Out_Date__c` | Checked-Out Date | date | `date` |  |  |  |
| `bpmpro3__Free_of_Charge__c` | Free of Charge | boolean | `boolean` |  |  |  |
| `bpmpro3__In_QuickBooks__c` | In QuickBooks | boolean | `boolean` |  |  |  |
| `bpmpro3__Notes__c` | Notes | textarea | `text` |  |  |  |
| `bpmpro3__Purchase_Quantity__c` | Purchase Quantity | double | `float8` |  |  |  |
| `bpmpro3__Quantity_Out__c` | Quantity Out | double | `float8` |  |  |  |
| `bpmpro3__Unit_Cost_Price__c` | Unit Cost Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Cost__c` | Extended Cost | currency | `numeric(18,2)` |  |  |  |

### Picklist Values

**Checked-In By** (`bpmpro3__Checked_In_By__c`):
- Carlos A. Paesano = `Carlos A. Paesano`
- Carlos Cordovis = `Carlos Cordovis`
- Maximo Cardenas = `Maximo Cardenas`
- Ricardo Ubieta = `Ricardo Ubieta`

**Checked-Out by** (`bpmpro3__Checked_Out_by__c`):
- Carlos A. Paesano = `Carlos A. Paesano`
- Carlos Cordovis = `Carlos Cordovis`
- Maximo Cardenas = `Maximo Cardenas`
- Ricardo Ubieta = `Ricardo Ubieta`

**Material Checked-Out** (`bpmpro3__Material_Checkedout__c`):
- Buck - 1 x 4 = `Buck - 1 x 4`
- Buck - 1 x 6 = `Buck - 1 x 6`
- Buck - 1 x 8 = `Buck - 1 x 8`
- Buck - 2 x 4 = `Buck - 2 x 4`
- Buck - 2 x 6 = `Buck - 2 x 6`
- Buck - 2 x 8 = `Buck - 2 x 8`
- Buck - 4 x 4 = `Buck - 4 x 4`
- Buck - 4 x 6 = `Buck - 4 x 6`
- Buck - 4 x 8 = `Buck - 4 x 8`
- Caulk - Ace Silicone Acrylic - Clear - Tube 10.1 Oz = `Caulk - Ace Silicone Acrylic - Clear - Tube 10.1 Oz`
- Caulk - Dymeric 240 FC 1.5 Gal. = `Caulk - Dymeric 240 FC 1.5 Gal.`
- Caulk - Dynomic 100 - Gray = `Caulk - Dynomic 100 - Gray`
- Caulk - Dynomic FC - Anodized = `Caulk - Dynomic FC - Anodized`
- Caulk - Dynomic FC - Bronze = `Caulk - Dynomic FC - Bronze`
- Caulk - Dynomic FC - White = `Caulk - Dynomic FC - White`
- Caulk - Polyseam - Anodized = `Caulk - Polyseam - Anodized`
- Caulk - Polyseam - Bronze = `Caulk - Polyseam - Bronze`
- Caulk - Polyseam - White = `Caulk - Polyseam - White`
- Caulk - Sikaflex 15LM Limestone 24 Tubes = `Caulk - Sikaflex 15LM Limestone 24 Tubes`
- Caulk - Tremco Universal color pack (Miles Gray) = `Caulk - Tremco Universal color pack (Miles Gray)`
- Deadbolt - Baldwin Hardware = `Deadbolt - Baldwin Hardware`
- Deadbolt - Emtek Hardware = `Deadbolt - Emtek Hardware`
- Denatured Alcohol - 5 GL = `Denatured Alcohol - 5 GL`
- Drill Bit (Steel) 3/16" x 6" = `Drill Bit (Steel) 3/16" x 6"`
- Drill Bit (Steel) 5/32" x 6" = `Drill Bit (Steel) 5/32" x 6"`
- Drill Bit (Steel) 7/32" x 3-3/4" = `Drill Bit (Steel) 7/32" x 3-3/4"`
- Drill Bit (Steel) 7/32" x 6" = `Drill Bit (Steel) 7/32" x 6"`
- Drill Bit 3/16" (Concrete) = `Drill Bit 3/16" (Concrete)`
- Drill Bit - 3/16 x 3 1/2 x 6 1/2 - SDS = `Drill Bit - 3/16 x 3 1/2 x 6 1/2 - SDS`
- Drill Bit - 3/16 x 3 1/2 x 6 - SDS = `Drill Bit - 3/16 x 3 1/2 x 6 - SDS`
- Drill Bit - 3/16 x 3 1/2 x 8 - SDS = `Drill Bit - 3/16 x 3 1/2 x 8 - SDS`
- Drill Bit - StoreFront Fabrication. = `Drill Bit - StoreFront Fabrication.`
- Lever - Balwin Hardware = `Lever - Balwin Hardware`
- Lever - Emtek Hardware = `Lever - Emtek Hardware`
- Mini Roll - 4 x 1/2 - 2PK = `Mini Roll - 4 x 1/2 - 2PK`
- Nut - 1/4" SS (Tuercas para storefront) = `Nut - 1/4" SS (Tuercas para storefront)`
- Painting Brush - 2 inches = `Painting Brush - 2 inches`
- Paint Roller - 6 inches = `Paint Roller - 6 inches`
- Sand - Unimin Granusil 2040 Silica 50LB/BAG = `Sand - Unimin Granusil 2040 Silica 50LB/BAG`
- Sand - Unimin Silica (50 lbs.) = `Sand - Unimin Silica (50 lbs.)`
- Screw - Anchor Flat Head - 1/2 x 5 = `Screw - Anchor Flat Head - 1/2 x 5`
- Screw - Anchor Flat Head - 3/8 x 5 = `Screw - Anchor Flat Head - 3/8 x 5`
- Screw - Phillips - #10 x 1" = `Screw - Phillips - #10 x 1"`
- Screw - Phillips - #10 x 1-1/4" = `Screw - Phillips - #10 x 1-1/4"`
- Screw - Phillips - #12 x 1 = `Screw - Phillips - #12 x 1`
- Screw - Phillips - #12 x 1 1/2 = `Screw - Phillips - #12 x 1 1/2`
- Screw - Phillips - #12 x 1 1/4 = `Screw - Phillips - #12 x 1 1/4`
- Screw - Phillips - #12 x 2 = `Screw - Phillips - #12 x 2`
- Screw - Phillips - #12 x 2 1/2 = `Screw - Phillips - #12 x 2 1/2`
- Screw - Phillips - #12 x 3 = `Screw - Phillips - #12 x 3`
- Screw - Phillips - #14 x 1 = `Screw - Phillips - #14 x 1`
- Screw - Phillips - #14 x 1 1/2 = `Screw - Phillips - #14 x 1 1/2`
- Screw - Phillips - #14 x 1 1/4 = `Screw - Phillips - #14 x 1 1/4`
- Screw - Phillips - #14 x 2 = `Screw - Phillips - #14 x 2`
- Screw - Phillips - #14 x 2-1/2 = `Screw - Phillips - #14 x 2-1/2`
- Screw - Phillips - #14 x 3 = `Screw - Phillips - #14 x 3`
- Screw - Phillips - #6 x 1" = `Screw - Phillips - #6 x 1"`
- Screw - Phillips - 1/4" x 2-1/4" SS (Tornillos para storefront) = `Screw - Phillips - 1/4" x 2-1/4" SS (Tornillos para storefront)`
- Screw - Phillips - 1/4 x 3 1/2 Teck S/S = `Screw - Phillips - 1/4 x 3 1/2 Teck S/S`
- Screw - Tapcon - Anodized - 1/4 x 3 1/4 = `Screw - Tapcon - Anodized - 1/4 x 3 1/4`
- Screw - Tapcon - Bronze - 1/4 x 3 1/4 = `Screw - Tapcon - Bronze - 1/4 x 3 1/4`
- Screw - Tapcon - Bronze - 1/4 x 3 1/4 (Cabeza Hexagonal) = `Screw - Tapcon - Bronze - 1/4 x 3 1/4 (Cabeza Hexagonal)`
- Screw - Tapcon Flat Head - 1/4 x 4 = `Screw - Tapcon Flat Head - 1/4 x 4`
- Screw - Tapcon Flat Head - 1/4 x 5 = `Screw - Tapcon Flat Head - 1/4 x 5`
- Screw - Tapcon - White - 1/4 x 2 1/4 = `Screw - Tapcon - White - 1/4 x 2 1/4`
- Screw - Tapcon - White - 1/4 x 3 1/4 = `Screw - Tapcon - White - 1/4 x 3 1/4`
- Screw - Tapcon - White - 1/4 x 3 1/4 (Cabeza Hexagonal) = `Screw - Tapcon - White - 1/4 x 3 1/4 (Cabeza Hexagonal)`
- Shims - 8" Composite (12-piece package) = `Shims - 8" Composite (12-piece package)`
- Shims - 8" Composite (32-piece package) = `Shims - 8" Composite (32-piece package)`
- Silicone - Dow Corning #1299 Clear = `Silicone - Dow Corning #1299 Clear`
- Silicone - Dow Corning #791 Black = `Silicone - Dow Corning #791 Black`
- Silicone - Dow Corning #899 Clear = `Silicone - Dow Corning #899 Clear`
- Silicone - Sikaflex - Limestone = `Silicone - Sikaflex - Limestone`
- Tape - (Red tape) - concrete protector = `Tape - (Red tape) - concrete protector`
- Tape - ScotchBlue - 1.88" = `Tape - ScotchBlue - 1.88"`
- Tape - ScotchBlue - 1.88" 6PK = `Tape - ScotchBlue - 1.88" 6PK`
- Vulken 350 - Waterproofing Membrane 2 Gal. = `Vulken 350 - Waterproofing Membrane 2 Gal.`
- Vulken 350 - Waterproofing Membrane 5 Gal. = `Vulken 350 - Waterproofing Membrane 5 Gal.`

**Material Purchase** (`bpmpro3__Material_Purchase__c`):
- Buck - 1 x 4 = `Buck - 1 x 4`
- Buck - 1 x 6 = `Buck - 1 x 6`
- Buck - 1 x 8 = `Buck - 1 x 8`
- Buck - 2 x 4 = `Buck - 2 x 4`
- Buck - 2 x 6 = `Buck - 2 x 6`
- Buck - 2 x 8 = `Buck - 2 x 8`
- Buck - 4 x 4 = `Buck - 4 x 4`
- Buck - 4 x 6 = `Buck - 4 x 6`
- Buck - 4 x 8 = `Buck - 4 x 8`
- Caulk - Ace Silicone Acrylic - Clear - Tube 10.1 Oz = `Caulk - Ace Silicone Acrylic - Clear - Tube 10.1 Oz`
- Caulk - Dymeric 240 FC 1.5 Gal. = `Caulk - Dymeric 240 FC 1.5 Gal.`
- Caulk - Dynomic 100 - Gray = `Caulk - Dynomic 100 - Gray`
- Caulk - Dynomic FC - Anodized = `Caulk - Dynomic FC - Anodized`
- Caulk - Dynomic FC - Bronze = `Caulk - Dynomic FC - Bronze`
- Caulk - Dynomic FC - White = `Caulk - Dynomic FC - White`
- Caulk - Polyseam - Anodized = `Caulk - Polyseam - Anodized`
- Caulk - Polyseam - Bronze = `Caulk - Polyseam - Bronze`
- Caulk - Polyseam - White = `Caulk - Polyseam - White`
- Caulk - Sikaflex 15LM Limestone 24 Tubes = `Caulk - Sikaflex 15LM Limestone 24 Tubes`
- Caulk - Tremco Universal color pack (Miles Gray) = `Caulk - Tremco Universal color pack (Miles Gray)`
- Deadbolt - Baldwin Hardware = `Deadbolt - Baldwin Hardware`
- Deadbolt - Emtek Hardware = `Deadbolt - Emtek Hardware`
- Denatured Alcohol - 5 GL = `Denatured Alcohol - 5 GL`
- Drill Bit (Steel) 3/16" x 6" = `Drill Bit (Steel) 3/16" x 6"`
- Drill Bit (Steel) 5/32" x 6" = `Drill Bit (Steel) 5/32" x 6"`
- Drill Bit (Steel) 7/32" x 3-3/4" = `Drill Bit (Steel) 7/32" x 3-3/4"`
- Drill Bit (Steel) 7/32" x 6" = `Drill Bit (Steel) 7/32" x 6"`
- Drill Bit 3/16" (Concrete) = `Drill Bit 3/16" (Concrete)`
- Drill Bit - 3/16 x 3 1/2 x 6 1/2 - SDS = `Drill Bit - 3/16 x 3 1/2 x 6 1/2 - SDS`
- Drill Bit - 3/16 x 3 1/2 x 6 - SDS = `Drill Bit - 3/16 x 3 1/2 x 6 - SDS`
- Drill Bit - 3/16 x 3 1/2 x 8 - SDS = `Drill Bit - 3/16 x 3 1/2 x 8 - SDS`
- Drill Bit - StoreFront Fabrication. = `Drill Bit - StoreFront Fabrication.`
- Lever - Balwin Hardware = `Lever - Balwin Hardware`
- Lever - Emtek Hardware = `Lever - Emtek Hardware`
- Mini Roll - 4 x 1/2 - 2PK = `Mini Roll - 4 x 1/2 - 2PK`
- Nut - 1/4" SS (Tuercas para storefront) = `Nut - 1/4" SS (Tuercas para storefront)`
- Painting Brush - 2 inches = `Painting Brush - 2 inches`
- Paint Roller - 6 inches = `Paint Roller - 6 inches`
- Sand - Unimin Granusil 2040 Silica 50LB/BAG = `Sand - Unimin Granusil 2040 Silica 50LB/BAG`
- Sand - Unimin Silica (50 lbs.) = `Sand - Unimin Silica (50 lbs.)`
- Screw - Anchor Flat Head - 1/2 x 5 = `Screw - Anchor Flat Head - 1/2 x 5`
- Screw - Anchor Flat Head - 3/8 x 5 = `Screw - Anchor Flat Head - 3/8 x 5`
- Screw - Phillips - #10 x 1" = `Screw - Phillips - #10 x 1"`
- Screw - Phillips - #10 x 1-1/4" = `Screw - Phillips - #10 x 1-1/4"`
- Screw - Phillips - #12 x 1 = `Screw - Phillips - #12 x 1`
- Screw - Phillips - #12 x 1 1/2 = `Screw - Phillips - #12 x 1 1/2`
- Screw - Phillips - #12 x 1 1/4 = `Screw - Phillips - #12 x 1 1/4`
- Screw - Phillips - #12 x 2 = `Screw - Phillips - #12 x 2`
- Screw - Phillips - #12 x 2 1/2 = `Screw - Phillips - #12 x 2 1/2`
- Screw - Phillips - #12 x 3 = `Screw - Phillips - #12 x 3`
- Screw - Phillips - #14 x 1 = `Screw - Phillips - #14 x 1`
- Screw - Phillips - #14 x 1 1/2 = `Screw - Phillips - #14 x 1 1/2`
- Screw - Phillips - #14 x 1 1/4 = `Screw - Phillips - #14 x 1 1/4`
- Screw - Phillips - #14 x 2 = `Screw - Phillips - #14 x 2`
- Screw - Phillips - #14 x 2-1/2 = `Screw - Phillips - #14 x 2-1/2`
- Screw - Phillips - #14 x 3 = `Screw - Phillips - #14 x 3`
- Screw - Phillips - #6 x 1" = `Screw - Phillips - #6 x 1"`
- Screw - Phillips - 1/4" x 2-1/4" SS (Tornillos para storefront) = `Screw - Phillips - 1/4" x 2-1/4" SS (Tornillos para storefront)`
- Screw - Phillips - 1/4 x 3 1/2 Teck S/S = `Screw - Phillips - 1/4 x 3 1/2 Teck S/S`
- Screw - Tapcon - Anodized - 1/4 x 3 1/4 = `Screw - Tapcon - Anodized - 1/4 x 3 1/4`
- Screw - Tapcon - Bronze - 1/4 x 3 1/4 = `Screw - Tapcon - Bronze - 1/4 x 3 1/4`
- Screw - Tapcon - Bronze - 1/4 x 3 1/4 (Cabeza Hexagonal) = `Screw - Tapcon - Bronze - 1/4 x 3 1/4 (Cabeza Hexagonal)`
- Screw - Tapcon Flat Head - 1/4 x 4 = `Screw - Tapcon Flat Head - 1/4 x 4`
- Screw - Tapcon Flat Head - 1/4 x 5 = `Screw - Tapcon Flat Head - 1/4 x 5`
- Screw - Tapcon - White - 1/4 x 2 1/4 = `Screw - Tapcon - White - 1/4 x 2 1/4`
- Screw - Tapcon - White - 1/4 x 3 1/4 = `Screw - Tapcon - White - 1/4 x 3 1/4`
- Screw - Tapcon - White - 1/4 x 3 1/4 (Cabeza Hexagonal) = `Screw - Tapcon - White - 1/4 x 3 1/4 (Cabeza Hexagonal)`
- Shims - 8" Composite (12-piece package) = `Shims - 8" Composite (12-piece package)`
- Shims - 8" Composite (32-piece package) = `Shims - 8" Composite (32-piece package)`
- Silicone - Dow Corning #1299 Clear = `Silicone - Dow Corning #1299 Clear`
- Silicone - Dow Corning #791 Black = `Silicone - Dow Corning #791 Black`
- Silicone - Dow Corning #899 Clear = `Silicone - Dow Corning #899 Clear`
- Silicone - Sikaflex - Limestone = `Silicone - Sikaflex - Limestone`
- Tape - (Red tape) - concrete protector = `Tape - (Red tape) - concrete protector`
- Tape - ScotchBlue - 1.88" = `Tape - ScotchBlue - 1.88"`
- Tape - ScotchBlue - 1.88" 6PK = `Tape - ScotchBlue - 1.88" 6PK`
- Vulken 350 - Waterproofing Membrane 2 Gal. = `Vulken 350 - Waterproofing Membrane 2 Gal.`
- Vulken 350 - Waterproofing Membrane 5 Gal. = `Vulken 350 - Waterproofing Membrane 5 Gal.`

**Transaction Type** (`bpmpro3__Transaction_Type__c`):
- Material Used = `Material Used`
- Inventory Purchase = `Inventory Purchase`
- - Inventory Adjustment - = `- Inventory Adjustment -`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Product Order (`bpmpro3__Orders__c`) {#bpmpro3ordersc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1L |
| Fields | 60 |
| Relationships | 33 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | PO Number | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__PO_Project__c` | Project | reference | `uuid` | Yes |  | -> bpmpro3__Project__c (MasterDetail) |
| `bpmpro3__PO_Days_in_Warehouse__c` | Days in Warehouse | double | `float8` |  |  |  |
| `bpmpro3__PO_Order_Status__c` | Order Status | picklist | `text` |  |  |  |
| `bpmpro3__PO_Row_Number__c` | Row Number | picklist | `text` |  |  |  |
| `bpmpro3__PO_Accounting_Notes__c` | Accounting Notes | textarea | `text` |  |  |  |
| `bpmpro3__PO_Back_Order_ETA__c` | Back Order ETA | date | `date` |  |  |  |
| `bpmpro3__PO_Change_Order__c` | Change Order | boolean | `boolean` |  |  |  |
| `bpmpro3__PO_CheckedOut_Date__c` | Checked-Out Date | date | `date` |  |  |  |
| `bpmpro3__PO_Customer_Ship_Date__c` | Customer Ship Date | date | `date` |  |  |  |
| `bpmpro3__PO_Free_of_Charge__c` | Free of Charge | boolean | `boolean` |  |  |  |
| `bpmpro3__PO_Name__c` | PO Name | string | `varchar(90)` |  |  |  |
| `bpmpro3__PO_Order_Date__c` | Order Date | date | `date` |  |  |  |
| `bpmpro3__PO_Order_Status_Comments__c` | Order Status Comments | textarea | `text` |  |  |  |
| `bpmpro3__PO_PED_Number__c` | PED Number | multipicklist | `text[]` |  |  |  |
| `bpmpro3__PO_Reorder_Item__c` | Reorder Item | boolean | `boolean` |  |  |  |
| `bpmpro3__PO_Reorder_Reasons__c` | Reorder Reasons | textarea | `text` |  |  |  |
| `bpmpro3__PO_Sales_Order_Amount__c` | Sales Order Amount ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PO_Sales_Order_Number__c` | Sales Order# | string | `varchar(20)` | Yes |  |  |
| `bpmpro3__PO_Ship_Date__c` | Ship Date | date | `date` |  |  |  |
| `bpmpro3__PO_Shipping_Instructions__c` | Shipping Instructions | textarea | `text` |  |  |  |
| `bpmpro3__PO_Vendor__c` | Vendor | reference | `uuid` | Yes |  | -> Account (Lookup) |
| `bpmpro3__PO_Warranty_Item__c` | Warranty Item | boolean | `boolean` |  |  |  |
| `bpmpro3__PO_Account_Name__c` | Account Name | string | `text` |  |  |  |
| `bpmpro3__PO_Balance_Due__c` | Balance Due | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PO_Billing_City__c` | Billing City | string | `text` |  |  |  |
| `bpmpro3__PO_Billing_Contact_Details__c` | Billing Contact Details | string | `text` |  |  |  |
| `bpmpro3__PO_Billing_Contact_Name__c` | Billing Contact Name | string | `text` |  |  |  |
| `bpmpro3__PO_Billing_Email_Address_Literal__c` | Billing Email Address Literal | string | `text` |  |  |  |
| `bpmpro3__PO_Billing_Phone_Number_Literal__c` | Billing Phone Number Literal | string | `text` |  |  |  |
| `bpmpro3__PO_Billing_State__c` | Billing State | string | `text` |  |  |  |
| `bpmpro3__PO_Billing_Street_Address__c` | Billing Street Address | string | `text` |  |  |  |
| `bpmpro3__PO_Billing_Zip_Code__c` | Billing Zip Code | string | `text` |  |  |  |
| `bpmpro3__PO_Close_Date__c` | Close Date | date | `date` |  |  |  |
| `bpmpro3__PO_Lead_Time__c` | Lead Time | double | `float8` |  |  |  |
| `bpmpro3__PO_Open_Balance__c` | Open Balance | string | `text` |  |  |  |
| `bpmpro3__PO_Owning_Entity_Account_ID__c` | Owning Entity Account ID | string | `text` |  |  |  |
| `bpmpro3__PO_Project_Contracted_Amount__c` | Project Contracted Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PO_Project_Full_Address__c` | Project Full Address | string | `text` |  |  |  |
| `bpmpro3__PO_Project_Name_Literal__c` | Project Name | string | `text` |  |  |  |
| `bpmpro3__PO_Sales_Person__c` | Sales Person | string | `text` |  |  |  |
| `bpmpro3__PO_Service_Type__c` | Service Type | string | `text` |  |  |  |
| `bpmpro3__PO_Vendor_Full_Name__c` | Vendor Full Name | string | `text` |  |  |  |
| `bpmpro3__PO_Arrival_Code__c` | Arrival Code | double | `float8` |  |  |  |
| `bpmpro3__PO_Total_Number_of_Pieces__c` | Total Number of Pieces | double | `float8` |  |  |  |
| `bpmpro3__PO_Product_Order_Summary__c` | Product Order Summary | string | `text` |  |  |  |
| `bpmpro3__PO_InvoiceAmount__c` | Invoice Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PO_InvoiceNumber__c` | Invoice # | string | `varchar(80)` |  |  |  |
| `bpmpro3__PO_InvoicePaidDate__c` | Invoice Paid Date | date | `date` |  |  |  |
| `bpmpro3__PO_InvoiceRemarks__c` | Invoice Remarks | textarea | `text` |  |  |  |

### Picklist Values

**Order Status** (`bpmpro3__PO_Order_Status__c`):
- In Manufacturing = `In Manufacturing`
- Shipped = `Shipped`
- Arrived Incomplete = `Arrived Incomplete`
- Arrived Complete = `Arrived Complete`
- Arrived with Backorder Items = `Arrived with Backorder Items`
- Arrived with Issues = `Arrived with Issues`
- Fulfilled = `Fulfilled`
- Cancelled = `Cancelled`

**Row Number** (`bpmpro3__PO_Row_Number__c`):
- ROW-01 Closest to the Door = `ROW-01 Closest to the Door`
- ROW-02 = `ROW-02`
- ROW-03 = `ROW-03`
- ROW-04 = `ROW-04`
- ROW-05 = `ROW-05`
- ROW-06 = `ROW-06`
- ROW-07 = `ROW-07`
- ROW-08 = `ROW-08`
- ROW-09 = `ROW-09`
- ROW-10 = `ROW-10`

**PED Number** (`bpmpro3__PO_PED_Number__c`):
- PED-01 = `PED-01`
- PED-02 = `PED-02`
- PED-03 = `PED-03`
- PED-04 = `PED-04`
- PED-05 = `PED-05`
- PED-06 = `PED-06`
- PED-20 = `PED-20`
- PED-21 = `PED-21`
- PED-22 = `PED-22`
- PED-23 = `PED-23`
- PED-24 = `PED-24`
- PED-25 = `PED-25`
- PED-26 = `PED-26`
- PED-27 = `PED-27`
- PED-28 = `PED-28`
- PED-29 = `PED-29`
- PED-30 = `PED-30`
- PED-31 = `PED-31`
- PED-32 = `PED-32`
- PED-33 = `PED-33`
- PED-34 = `PED-34`
- PED-35 = `PED-35`
- PED-36 = `PED-36`
- PED-37 = `PED-37`
- PED-38 = `PED-38`
- PED-39 = `PED-39`
- PED-40 = `PED-40`
- PED-41 = `PED-41`
- PED-42 = `PED-42`
- PED-43 = `PED-43`
- PED-44 = `PED-44`
- PED-45 = `PED-45`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__Warehouse_Log__c | bpmpro3__WL_Product_Order__c | bpmpro3__WL_Product_Order_Rel__r | Yes |

---

## Org Info (`bpmpro3__Org_Info__mdt`) {#bpmpro3orginfomdt}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | m0C |
| Fields | 22 |
| Relationships | 0 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Custom Metadata Record ID | id | `uuid` |  |  |  |
| `DeveloperName` | Custom Metadata Record Name | string | `varchar(40)` |  |  |  |
| `MasterLabel` | Label | string | `varchar(40)` | Yes |  |  |
| `Language` | Master Language | picklist | `text` | Yes |  |  |
| `NamespacePrefix` | Namespace Prefix | string | `varchar(15)` |  |  |  |
| `Label` | Label | string | `varchar(40)` |  |  |  |
| `QualifiedApiName` | Qualified API Name | string | `varchar(70)` |  |  |  |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `bpmpro3__Org_Abbreviation__c` | Org Abbreviation | string | `varchar(80)` |  |  |  |
| `bpmpro3__Org_City__c` | Org City | string | `varchar(100)` |  |  |  |
| `bpmpro3__Org_Email__c` | Org Email | email | `text` |  |  |  |
| `bpmpro3__Org_Fax_Number__c` | Org Fax Number | string | `varchar(20)` |  |  |  |
| `bpmpro3__Org_IG_Handle__c` | Org Instagram Handle | string | `varchar(80)` |  |  |  |
| `bpmpro3__Org_License__c` | Org License | string | `varchar(60)` |  |  |  |
| `bpmpro3__Org_Logo_Alt_Value__c` | Org Logo Alt Value | string | `varchar(80)` |  |  |  |
| `bpmpro3__Org_Logo_URL__c` | Org Logo URL | url | `text` |  |  |  |
| `bpmpro3__Org_Name__c` | Org Name | string | `varchar(100)` | Yes |  |  |
| `bpmpro3__Org_Phone_Number__c` | Org Phone Number | string | `varchar(20)` |  |  |  |
| `bpmpro3__Org_State__c` | Org State | string | `varchar(60)` |  |  |  |
| `bpmpro3__Org_Street_Address__c` | Org Street Address | string | `varchar(120)` |  |  |  |
| `bpmpro3__Org_URL__c` | Org URL | string | `varchar(80)` |  |  |  |
| `bpmpro3__Org_Zip_Code__c` | Org Zip Code | string | `varchar(10)` |  |  |  |

### Picklist Values

**Master Language** (`Language`):
- English = `en_US`
- German = `de`
- Spanish = `es`
- French = `fr`
- Italian = `it`
- Japanese = `ja`
- Swedish = `sv`
- Korean = `ko`
- Chinese (Traditional) = `zh_TW`
- Chinese (Simplified) = `zh_CN`
- Portuguese (Brazil) = `pt_BR`
- Dutch = `nl_NL`
- Danish = `da`
- Thai = `th`
- Finnish = `fi`
- Russian = `ru`
- Spanish (Mexico) = `es_MX`
- Norwegian = `no`

---

## Client Payment (`bpmpro3__PaymentBPM__c`) {#bpmpro3paymentbpmc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1M |
| Fields | 20 |
| Relationships | 31 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Payment # | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__Project__c` | Project | reference | `uuid` | Yes |  | -> bpmpro3__Project__c (MasterDetail) |
| `bpmpro3__Payment_Method__c` | Payment Method | picklist | `text` |  |  |  |
| `bpmpro3__Payment_Type__c` | Payment Type | picklist | `text` |  |  |  |
| `bpmpro3__Convenience_Fee__c` | Convenience Fee $ | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Notes__c` | Notes | textarea | `text` |  |  |  |
| `bpmpro3__Payment_Amount__c` | Payment Amount | currency | `numeric(18,2)` | Yes |  |  |
| `bpmpro3__Payment_Date__c` | Payment Date | date | `date` | Yes |  |  |
| `bpmpro3__Reference__c` | Reference # | string | `varchar(12)` |  |  |  |
| `bpmpro3__QB_Payment_ID__c` | QB Payment ID | string | `varchar(16)` |  |  |  |

### Picklist Values

**Payment Method** (`bpmpro3__Payment_Method__c`):
- Accounting Adjustment = `Accounting Adjustment`
- ACH = `ACH`
- Cash = `Cash`
- Check = `Check`
- Credit Card = `Credit Card`
- Debit Card = `Debit Card`
- Other = `Other`
- Stripe = `Stripe`
- Wire Transfer = `Wire Transfer`
- Zelle = `Zelle`

**Payment Type** (`bpmpro3__Payment_Type__c`):
- Accounting Credit = `Accounting Credit`
- Balance Payment = `Balance Payment`
- Change Order Payment = `Change Order Payment`
- Deposit Payment = `Deposit Payment`
- Full Payment = `Full Payment`
- Miscellaneous = `Miscellaneous`
- Mixed Payment = `Mixed Payment`
- Permit Fee = `Permit Fee`
- Progress Payment = `Progress Payment`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Permit Fee (`bpmpro3__Permit_Fee__c`) {#bpmpro3permitfeec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1N |
| Fields | 17 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Permit Fee # | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__PF_Building_Permit__c` | BP Record | reference | `uuid` | Yes |  | -> bpmpro3__Building_Permit_c__c (MasterDetail) |
| `bpmpro3__PF_Billable__c` | Billable | picklist | `text` |  |  |  |
| `bpmpro3__PF_PermitFeeType__c` | Permit Fee Type | picklist | `text` |  |  |  |
| `bpmpro3__PF_PaidDate__c` | Paid Date | date | `date` | Yes |  |  |
| `bpmpro3__PF_PermitFeeAmount__c` | Permit Fee Amount | currency | `numeric(18,2)` | Yes |  |  |
| `bpmpro3__PF_Remarks__c` | Remarks | textarea | `text` |  |  |  |
| `bpmpro3__Project__c` | Project | string | `text` |  |  |  |

### Picklist Values

**Billable** (`bpmpro3__PF_Billable__c`):
- Yes = `Yes`
- No = `No`

**Permit Fee Type** (`bpmpro3__PF_PermitFeeType__c`):
- Issued Fee = `Issued Fee`
- Revision Fee = `Revision Fee`
- Miscellaneous = `Miscellaneous`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Preset Product (`bpmpro3__PP_Preset_Product__c`) {#bpmpro3pppresetproductc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1i |
| Fields | 60 |
| Relationships | 28 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Preset Product Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__PP_Brand__c` | Brand | picklist | `text` |  |  |  |
| `bpmpro3__PP_Multiplier__c` | Multiplier | picklist | `text` |  |  |  |
| `bpmpro3__PP_Product_Series__c` | Product Series | picklist | `text` |  |  |  |
| `bpmpro3__PP_Active__c` | Active | boolean | `boolean` |  |  |  |
| `bpmpro3__PP_AddOn_01__c` | Half Screens | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_02__c` | Full Screens | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_03__c` | Gray Tint | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_04__c` | Bronze Tint | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_05__c` | SDL grids per square | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_06__c` | Flat Grids | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_07__c` | Countoured Grids | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_08__c` | Beige Frame | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_09__c` | Clay Frame | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_10__c` | Architectural Ext Color | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_11__c` | Interior Woodgrain | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_12__c` | HP Upgrade | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_13__c` | Mull to form multi Units | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_14__c` | Tempered DH Sash | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_15__c` | Obscured Glass | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_16__c` | Rain Obscured Glass | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_17__c` | Wood Bucks | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_18__c` | Interior Finish Work | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_19__c` | Exterior Finish Work | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_20__c` | Architectural Exterior Color | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_21__c` | Blinds Standard | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_22__c` | CWS DP or Match | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_23__c` | J Series: Lever, Knob, Deadbolt | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_24__c` | J Series: Deco Handle Set | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_25__c` | F Series: Deco Handle Set | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_26__c` | PanoLock System (Add Handle) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_27__c` | Electronic Keypad DB(Add Handle) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_28__c` | Smart Phone DB (Add Handle) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_29__c` | Peephole | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_AddOn_30__c` | LowE2 Per Lite | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_Height_inches__c` | Height (inches) | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__PP_High_Range_Multiplier__c` | High Range Multiplier | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_Labor_Cost__c` | Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_Low_Range_Multiplier__c` | Low Range Multiplier | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_Markup__c` | Markup | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__PP_Price_Changed_Date__c` | Price Changed Date | date | `date` |  |  |  |
| `bpmpro3__PP_Product_Cost__c` | Product Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_Remarks__c` | Remarks | textarea | `text` |  |  |  |
| `bpmpro3__PP_Width_inches__c` | Width (inches) | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__PP_Adjusted_Product_Cost__c` | Adjusted Product Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_Lineal_Foot__c` | Lineal Foot | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_Square_footage__c` | Square footage | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__PP_Type__c` | Type | picklist | `text` |  |  |  |
| `bpmpro3__Item_Type__c` | Item Type | picklist | `text` |  |  |  |
| `bpmpro3__PP_Category__c` | Category | picklist | `text` |  |  |  |

### Picklist Values

**Brand** (`bpmpro3__PP_Brand__c`):
- CGI = `CGI`
- Custom Window Systems = `Custom Window Systems`
- Florida Window and Doors = `Florida Window and Doors`
- Pella = `Pella`
- PGT = `PGT`
- Plastpro = `Plastpro`
- PlexiDor = `PlexiDor`
- Wincore = `Wincore`

**Multiplier** (`bpmpro3__PP_Multiplier__c`):
- 1 = `1`
- 1.2 = `1.2`
- 1.3 = `1.3`

**Product Series** (`bpmpro3__PP_Product_Series__c`):
- Double Hung 7700 = `Double Hung 7700`
- Double Hung 8800 = `Double Hung 8800`
- Double Slider 8800 = `Double Slider 8800`
- End Vent Slider 8800 = `End Vent Slider 8800`
- Fixed Window 5400 = `Fixed Window 5400`
- Fixed Window 7700 = `Fixed Window 7700`
- PlexiDor Dog Doors = `PlexiDor Dog Doors`
- Single Hung 5400 = `Single Hung 5400`
- Sliding Patio Door CWS 8800 Impact-Resistant = `Sliding Patio Door CWS 8800 Impact-Resistant`
- Sliding Patio Door CWS 8800 Non-Impact = `Sliding Patio Door CWS 8800 Non-Impact`
- Sliding Patio Door WC 500 = `Sliding Patio Door WC 500`
- Sliding Patio Door WC 5400 = `Sliding Patio Door WC 5400`
- Sliding Patio Door WC 7700 = `Sliding Patio Door WC 7700`
- Sliding Patio Door WC 8800 Impact-Resistant = `Sliding Patio Door WC 8800 Impact-Resistant`
- Sliding Patio Door WC 8800 Non-Impact = `Sliding Patio Door WC 8800 Non-Impact`
- Sliding Window 5400 = `Sliding Window 5400`
- Sliding Window 7700 = `Sliding Window 7700`
- Smooth = `Smooth`
- Temp Placeholder = `Temp Placeholder`
- Wood Grain = `Wood Grain`

**Type** (`bpmpro3__PP_Type__c`):
- Double Hung Window = `Double Hung Window`
- Fiberglass Door = `Fiberglass Door`
- Fiberglass Sidelite = `Fiberglass Sidelite`
- Fixed Window = `Fixed Window`
- Remove/Install = `Remove/Install`
- Single Hung Window = `Single Hung Window`
- Sliding Patio Door (CWS) = `Sliding Patio Door (CWS)`
- Sliding Patio Door (WC) = `Sliding Patio Door (WC)`
- Sliding Window = `Sliding Window`
- Swing Door = `Swing Door`

**Item Type** (`bpmpro3__Item_Type__c`):
- Curtain Wall = `Curtain Wall`
- Door = `Door`
- Handleset = `Handleset`
- Labor = `Labor`
- Material = `Material`
- Miscellaneous = `Miscellaneous`
- Mullion = `Mullion`
- Professional Service = `Professional Service`
- Sidelite = `Sidelite`
- Storefront = `Storefront`
- Window = `Window`

**Category** (`bpmpro3__PP_Category__c`):
- Window = `Window`
- Door = `Door`
- Mullion = `Mullion`
- Other = `Other`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__CPI_Configure_Pricing_Items__c | bpmpro3__CPI_Preset_Product__c | bpmpro3__Configurable_Pricing_Items__r | No |
| bpmpro3__CPI_Preset_Product_Add_On__c | bpmpro3__CPIPPAO_Preset_Product__c | bpmpro3__CPI_Preset_Product_Add_Ons__r | No |

---

## Product-Only Item (`bpmpro3__ProductItem__c`) {#bpmpro3productitemc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1O |
| Fields | 48 |
| Relationships | 32 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Item Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__SalesDoc_A1__c` | Sales Document | reference | `uuid` | Yes |  | -> bpmpro3__Sales_Document__c (MasterDetail) |
| `bpmpro3__A1_Configuration__c` | Configuration | string | `varchar(150)` |  |  |  |
| `bpmpro3__A1_Excluded_Checkbox__c` | Excluded | boolean | `boolean` |  |  |  |
| `bpmpro3__A1_Finish_Color__c` | Finish Color | string | `varchar(200)` |  |  |  |
| `bpmpro3__A1_Glass_Specifications__c` | Glass Specifications | string | `varchar(150)` |  |  |  |
| `bpmpro3__A1_Height__c` | Height | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__A1_Optional_Checkbox__c` | Optional | boolean | `boolean` |  |  |  |
| `bpmpro3__A1_Product_Series__c` | Product Series | string | `varchar(200)` |  |  |  |
| `bpmpro3__A1_Quantity__c` | Quantity | double | `float8` |  |  |  |
| `bpmpro3__A1_VendorQuoteNumber__c` | Vendor's Quote # | string | `varchar(80)` | Yes |  |  |
| `bpmpro3__A1_VendorSpecialDiscount__c` | Vendor's Special Discount (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A1_Vendor__c` | Vendor | reference | `uuid` | Yes |  | -> Account (Lookup) |
| `bpmpro3__A1_Width__c` | Width | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__Description_PI__c` | Description | textarea | `text` |  |  |  |
| `bpmpro3__Internal_Notes__c` | Internal Notes | textarea | `text` |  |  |  |
| `bpmpro3__Product_Cost__c` | Product Cost | currency | `numeric(18,2)` | Yes |  |  |
| `bpmpro3__Remarks__c` | Remarks | textarea | `text` |  |  |  |
| `bpmpro3__A1_Estimated_Profit__c` | Estimated Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A1_Ext_Estimated_Profit__c` | Ext Estimated_Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A1_Ext_Product_Cost__c` | Ext Product Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A1_Ext_Product_Markup_Amount__c` | Ext Product Markup Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A1_Ext_Product_Sales_Commission_Amount__c` | Ext Product Sales Commission Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A1_ProdMat_Multiplier__c` | ProdMat Multiplier | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__A1_ProductSalesCommPercent__c` | Product Sales Commission (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A1_Product_Markup_Percentage__c` | Product Markup Percentage | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__A1_Project__c` | Project | string | `text` |  |  |  |
| `bpmpro3__A1_Sales_Commission_Basis__c` | Sales Commission Basis | string | `text` |  |  |  |
| `bpmpro3__A1_Sales_Commission_Method__c` | Sales Commission Basis Explained | string | `text` |  |  |  |
| `bpmpro3__A1_Sales_Document_Grand_Total__c` | Sales Document Grand Total | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A1_Sales_Document_Name__c` | Sales Document Name | string | `text` |  |  |  |
| `bpmpro3__A1_Sales_Document_Status__c` | Sales Document Status | string | `text` |  |  |  |
| `bpmpro3__A1_Unit_ProductSalesCommAmount__c` | Unit Product Sales Commission ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A1_Unit_Product_Cost_AD__c` | Unit Product Cost After Discount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A1_Unit_Product_Markup_Amount__c` | Unit Product Markup Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A1_Unit_Product_Price__c` | Unit Product Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Ext_Product_Price_PI__c` | Ext Product Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Ext_Sales_Tax_PI__c` | Ext Sales Tax | currency | `numeric(18,2)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Project (`bpmpro3__Project__c`) {#bpmpro3projectc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1T |
| Fields | 130 |
| Relationships | 47 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Project Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__PJ_Account__c` | Account | reference | `uuid` | Yes |  | -> Account (MasterDetail) |
| `bpmpro3__Country__c` | Country | picklist | `text` |  |  |  |
| `bpmpro3__Customer_Reading__c` | Customer Reading | picklist | `text` |  |  |  |
| `bpmpro3__Lead_Source__c` | Lead Source | picklist | `text` |  |  |  |
| `bpmpro3__Payment_Method__c` | Payment Method | picklist | `text` |  |  |  |
| `bpmpro3__Project_Type__c` | Service Type | picklist | `text` | Yes |  |  |
| `bpmpro3__Relationship__c` | Relationship | picklist | `text` |  |  |  |
| `bpmpro3__Second_Measures_By__c` | Second Measures By | picklist | `text` |  |  |  |
| `bpmpro3__Stage__c` | Stage (Discontinued) | picklist | `text` |  |  |  |
| `bpmpro3__Status__c` | Status | picklist | `text` |  |  |  |
| `bpmpro3__Type__c` | Construction Type | picklist | `text` |  |  |  |
| `bpmpro3__Walkthrough_By__c` | Walkthrough By | picklist | `text` |  |  |  |
| `bpmpro3__Bypass_Automation_Toggle__c` | Bypass Automation Toggle | boolean | `boolean` |  |  |  |
| `bpmpro3__Date_Measured__c` | Date Measured | date | `date` |  |  |  |
| `bpmpro3__Description__c` | Description | textarea | `text` |  |  |  |
| `bpmpro3__Flow_Total_Actual_Labor_Cost__c` | Flow Total Actual Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Included_in_Plans_Package__c` | Included in Plans Delete Me | boolean | `boolean` |  |  |  |
| `bpmpro3__Installation_Notes__c` | Installation Notes | textarea | `text` |  |  |  |
| `bpmpro3__Legal_Description__c` | Legal Description | textarea | `text` |  |  |  |
| `bpmpro3__Notes_to_Sales_Person__c` | Notes to Sales Person | textarea | `text` |  |  |  |
| `bpmpro3__PJ_Call_In_Date__c` | Call In Date | date | `date` |  |  |  |
| `bpmpro3__PJ_Close_Date__c` | Close Date | date | `date` |  |  |  |
| `bpmpro3__PJ_Current_Stage__c` | Current Stage LWC | string | `varchar(100)` |  |  |  |
| `bpmpro3__PJ_Folio_Number__c` | Folio Number | string | `varchar(20)` |  |  |  |
| `bpmpro3__PJ_Last_Updated_SaleDoc_Date__c` | Last Updated SalesDoc Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__PJ_Last_Updated_SalesDoc_Amount__c` | Last Updated SalesDoc Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PJ_New_Lead_Source__c` | New Lead Source | string | `varchar(255)` |  |  |  |
| `bpmpro3__PJ_Project_City__c` | Project City | string | `varchar(255)` |  |  |  |
| `bpmpro3__PJ_Project_Manager__c` | Project Manager | reference | `uuid` | Yes |  | -> Contact (Lookup) |
| `bpmpro3__PJ_Project_State__c` | Project State | string | `varchar(40)` |  |  |  |
| `bpmpro3__PJ_Project_Street_Address__c` | Project Street Address | textarea | `text` |  |  |  |
| `bpmpro3__PJ_Project_Zip_Code__c` | Project Zip Code | string | `varchar(20)` |  |  |  |
| `bpmpro3__PJ_SalesDoc_Price_Change_Count__c` | SalesDoc Price Change Count | double | `float8` |  |  |  |
| `bpmpro3__PJ_Sales_Person__c` | Sales Person | reference | `uuid` |  |  | -> Contact (Lookup) |
| `bpmpro3__Private__c` | Private | boolean | `boolean` |  |  |  |
| `bpmpro3__Probability__c` | Probability (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__Project_Completion_Date__c` | Project Completion Date | date | `date` |  |  |  |
| `bpmpro3__Project__c` | Project # | string | `varchar(30)` |  |  |  |
| `bpmpro3__Quote_Deadline__c` | Quote Deadline | date | `date` |  |  |  |
| `bpmpro3__Referring_Party__c` | Referring Party | reference | `uuid` |  |  | -> Contact (Lookup) |
| `bpmpro3__Same_as_Billing_Address__c` | Same as Billing Address | boolean | `boolean` |  |  |  |
| `bpmpro3__Walkthrough_Date__c` | Walkthrough Date | date | `date` |  |  |  |
| `bpmpro3__Year_Built__c` | Year Built | double | `float8` |  |  |  |
| `bpmpro3__Balance_Due__c` | Balance Due | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Days_Unquoted__c` | Days Unquoted | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__IsWon__c` | IsWon | boolean | `boolean` |  |  |  |
| `bpmpro3__Labor_Cost_Variance__c` | Labor Cost Variance | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Lost_Reason__c` | Lost Reason (Deprecated) | picklist | `text` |  |  |  |
| `bpmpro3__PJ_Account_Name__c` | Account Name | string | `text` |  |  |  |
| `bpmpro3__PJ_Billing_Address__c` | Billing Address | string | `text` |  |  |  |
| `bpmpro3__PJ_Billing_City__c` | Billing City | string | `text` |  |  |  |
| `bpmpro3__PJ_Billing_Contact_Details__c` | Billing Contact Details | string | `text` |  |  |  |
| `bpmpro3__PJ_Billing_Contact_Name_Literal__c` | Billing Contact Name | string | `text` |  |  |  |
| `bpmpro3__PJ_Billing_Contact_Name_URL__c` | Billing Contact Name | string | `text` |  |  |  |
| `bpmpro3__PJ_Billing_Email_Address_Link__c` | Billing Email Address Link | string | `text` |  |  |  |
| `bpmpro3__PJ_Billing_Email_Address__c` | Billing Email Address | string | `text` |  |  |  |
| `bpmpro3__PJ_Billing_Phone_Number_Link__c` | Billing Phone Number Link | string | `text` |  |  |  |
| `bpmpro3__PJ_Billing_Phone_Number__c` | Billing Phone Number | string | `text` |  |  |  |
| `bpmpro3__PJ_Billing_State__c` | Billing State | string | `text` |  |  |  |
| `bpmpro3__PJ_Billing_Street_Address__c` | Billing Street Address | string | `text` |  |  |  |
| `bpmpro3__PJ_Billing_Zip_Code__c` | Billing Zip Code | string | `text` |  |  |  |
| `bpmpro3__PJ_Close_Month__c` | Close Month | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__PJ_Cost_Variance_Pct__c` | Total Cost Variance % | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__PJ_Cost_Variance__c` | Total Cost Variance | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PJ_Current_Stage_RO__c` | Current Stage | string | `text` |  |  |  |
| `bpmpro3__PJ_Owning_Entity_Account_ID__c` | Owning Entity Account ID | string | `text` |  |  |  |
| `bpmpro3__PJ_Project_Manager_Email__c` | Project Manager Email | string | `text` |  |  |  |
| `bpmpro3__PJ_Project_Manager_Name__c` | Project Manager Name | string | `text` |  |  |  |
| `bpmpro3__PJ_Sales_Cycle__c` | Sales Cycle (Days) | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__PJ_Sales_Person_Email__c` | Sales Person Email | string | `text` |  |  |  |
| `bpmpro3__PJ_Sales_Person_Full_Name__c` | Sales Person Full Name | string | `text` |  |  |  |
| `bpmpro3__PJ_Sales_Person_Mobile__c` | Sales Person Mobile | string | `text` |  |  |  |
| `bpmpro3__PJ_Stripe_Account_Id__c` | Stripe Account Id | string | `text` |  |  |  |
| `bpmpro3__Product_Cost_Variance__c` | Product Cost Variance | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Project_Full_Address__c` | Project Full Address | string | `text` |  |  |  |
| `bpmpro3__Time_to_Finish__c` | Time to Finish | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__Total_Actual_Labor_Charges__c` | Total Actual Labor Charges | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PJ_Billable_Permit_Fees__c` | Billable Permit Fees | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PJ_Contracted_Amount__c` | Contracted Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PJ_Invoiced_Amount__c` | Invoiced (Billed) Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Proposed_Amount__c` | Active Quotes Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Quoted_Amount__c` | Aggregate Quoted Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Sales_Commission_Paid__c` | Sales Commission Paid | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Total_Actual_Product_Orders__c` | Total Actual Product Orders | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Total_Change_Orders__c` | Total Change Orders | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Total_Estimated_Labor_Cost__c` | Total Estimated Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Total_Estimated_Product_Cost__c` | Total Estimated Product Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Total_Payments__c` | Total Payments | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Total_Permit_Fees__c` | Total Permit Fees | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Total_Product_Reorders__c` | Total Product Reorders | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Total_Service_Contracts__c` | Total Service Contracts | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PJ_Pinned_Project_Notes__c` | Pinned Project Notes | textarea | `text` |  |  |  |
| `bpmpro3__PJ_Sales_Stage__c` | Sales Stage Apex | string | `varchar(100)` |  |  |  |
| `bpmpro3__PJ_Sales_Stage_RO__c` | Sales Stage | string | `text` |  |  |  |
| `bpmpro3__PJ_Total_Project_Payments__c` | Total Project Payments | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PJ_Total_Invoice_Payments__c` | Total Invoice Payments | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PJ_Unbilled_Amount__c` | Unbilled Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PJ_Total_Estimated_Material_Cost__c` | Total Estimated Material Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PJ_Total_Estimated_Proservices_Cost__c` | Total Estimated Proservices Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PJ_Highest_Passed_Stage__c` | Highest Passed Stage | string | `varchar(100)` |  |  |  |
| `bpmpro3__PJ_IsLost__c` | Is Lost | boolean | `boolean` |  |  |  |
| `bpmpro3__PJ_Is_Legacy_Project__c` | Is Legacy Project | boolean | `boolean` |  |  |  |
| `bpmpro3__PJ_Legacy_Balance__c` | Legacy Balance | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PJ_Legacy_Comments__c` | Legacy Comments | textarea | `text` |  |  |  |
| `bpmpro3__PJ_Legacy_Completed__c` | Legacy Completed Date | date | `date` |  |  |  |
| `bpmpro3__PJ_Legacy_Description__c` | Legacy Description | textarea | `text` |  |  |  |
| `bpmpro3__PJ_Legacy_Lead_Source__c` | Legacy Lead Source | string | `varchar(255)` |  |  |  |
| `bpmpro3__PJ_Legacy_Record_ID__c` | Legacy Record ID | string | `varchar(50)` |  |  |  |
| `bpmpro3__PJ_Legacy_System_Name__c` | Legacy System Name | string | `varchar(100)` |  |  |  |
| `bpmpro3__PJ_Lost_At_Stage__c` | Lost At Stage | string | `varchar(100)` |  |  |  |
| `bpmpro3__PJ_Lost_Date__c` | Lost Date | date | `date` |  |  |  |
| `bpmpro3__PJ_Lost_Notes__c` | Lost Notes | textarea | `text` |  |  |  |
| `bpmpro3__PJ_Lost_Reason_LWC__c` | Lost Reason LWC | picklist | `text` |  |  |  |
| `bpmpro3__PJ_Lowest_Pending_Stage__c` | Lowest Pending Stage | string | `varchar(100)` |  |  |  |
| `bpmpro3__PJ_Default_Stage_Order__c` | Default Stage Order (Snapshot) | textarea | `text` |  |  |  |
| `bpmpro3__PJ_Finalized_Date__c` | Finalized Date | date | `date` |  |  |  |
| `bpmpro3__PJ_Has_Custom_Stage_Order__c` | Has Custom Stage Order | boolean | `boolean` |  |  |  |
| `bpmpro3__PJ_Is_Finalized__c` | Is Finalized | boolean | `boolean` |  |  |  |
| `bpmpro3__PJ_Lowest_In_Progress_Stage__c` | Lowest In Progress Stage | string | `varchar(100)` |  |  |  |

### Picklist Values

**Country** (`bpmpro3__Country__c`):
- Anguilla = `Anguilla`
- Antigua = `Antigua`
- Aruba = `Aruba`
- Bahamas = `Bahamas`
- Barbados = `Barbados`
- Belize = `Belize`
- British Virgin Islands = `British Virgin Islands`
- Costa Rica = `Costa Rica`
- Curazao = `Curazao`
- Dominica = `Dominica`
- Gran Bahamas = `Gran Bahamas`
- Grand Cayman = `Grand Cayman`
- Great Inegua = `Great Inegua`
- Grenada = `Grenada`
- Grenadines = `Grenadines`
- Guyana = `Guyana`
- Haiti = `Haiti`
- Israel = `Israel`
- Jamaica = `Jamaica`
- Mexico = `Mexico`
- Monserrat = `Monserrat`
- Panama = `Panama`
- Puerto Rico = `Puerto Rico`
- Republica Dominicana = `Republica Dominicana`
- Saba = `Saba`
- Saint Lucia = `Saint Lucia`
- Trinidad & Tobago = `Trinidad & Tobago`
- Turks & Caicos = `Turks & Caicos`
- United States = `United States`
- US Virgin Islands = `US Virgin Islands`
- Venezuela = `Venezuela`

**Customer Reading** (`bpmpro3__Customer_Reading__c`):
- Difficult to contact = `Difficult to contact`
- Down to two = `Down to two`
- Evasive = `Evasive`
- Hard to read = `Hard to read`
- Indecisive = `Indecisive`
- Motivated = `Motivated`
- Not serious = `Not serious`
- Reappeared after Lost = `Reappeared after Lost`
- Responsive = `Responsive`
- Shopper = `Shopper`
- Timing = `Timing`

**Lead Source** (`bpmpro3__Lead_Source__c`):
- Company Truck = `Company Truck`
- Crew at Jobsite = `Crew at Jobsite`
- Digital Advertisement = `Digital Advertisement`
- Events and Networking = `Events and Networking`
- Online Marketplaces and Services = `Online Marketplaces and Services`
- Other = `Other`
- Partner = `Partner`
- Purchased List = `Purchased List`
- Referral - Client = `Referral - Client`
- Referral - Employee = `Referral - Employee`
- Referral - Sales Person = `Referral - Sales Person`
- Referral - Third Party = `Referral - Third Party`
- Trade Show = `Trade Show`
- Traditional Advertisement = `Traditional Advertisement`
- Website = `Website`
- Yard Signs at Jobsites = `Yard Signs at Jobsites`

**Payment Method** (`bpmpro3__Payment_Method__c`):
- Cash = `Cash`
- Conventional + Ygrene = `Conventional + Ygrene`
- Conventional Terms = `Conventional Terms`
- FortiFi = `FortiFi`
- GreenSky = `GreenSky`
- Other (see notes) = `Other (see notes)`
- Synchrony = `Synchrony`
- Ygrene Financing = `Ygrene Financing`

**Service Type** (`bpmpro3__Project_Type__c`):
- Export = `Export`
- Installation Only = `Installation Only`
- Other = `Other`
- Product + Installation = `Product + Installation`
- Product Only = `Product Only`

**Relationship** (`bpmpro3__Relationship__c`):
- New Client = `New Client`
- Repeat Business = `Repeat Business`

**Second Measures By** (`bpmpro3__Second_Measures_By__c`):
- Client = `Client`

**Stage (Discontinued)** (`bpmpro3__Stage__c`):
- Lost = `Lost`
- Prospecting = `Prospecting`
- Quoted = `Quoted`
- Sold = `Sold`
- Completed = `Completed`

**Status** (`bpmpro3__Status__c`):
- Attention Needed = `Attention Needed`
- Awaiting External Process = `Awaiting External Process`
- On Hold = `On Hold`
- On Track = `On Track`
- Lost = `Lost`

**Construction Type** (`bpmpro3__Type__c`):
- New Construction - Commercial = `New Construction Commercial`
- New Construction - Residential = `New Construction Residential`
- Retrofit - Commercial = `Retrofit Commercial`
- Retrofit - Residential = `Retrofit Residential`
- Service - New Construction = `Service New Construction`
- Service - Retrofit = `Service Retrofit`

**Walkthrough By** (`bpmpro3__Walkthrough_By__c`):
- Installer = `Installer`
- Other (read notes) = `Other (read notes)`
- Sales Person = `Sales Person`
- Unassisted = `Unassisted`

**Lost Reason (Deprecated)** (`bpmpro3__Lost_Reason__c`):
- Attitude = `Attitude`
- Availability = `Availability`
- Client Chose GC Vendor = `Client Chose GC Vendor`
- Condo Unit = `Condo Unit`
- Contractor Lost Bid = `Contractor Lost Bid`
- Financing = `Financing`
- Future = `Future`
- Historic Home = `Historic Home`
- Lack of Interest = `Lack of Interest`
- Missed Appointment = `Missed Appointment`
- No Answer = `No Answer`
- Other = `Other`
- Out of Area = `Out of Area`
- Out of Budget = `Out of Budget`
- Payment Terms = `Payment Terms`
- Price = `Price`
- Project Cancelled = `Project Cancelled`
- Project Size = `Project Size`
- Relocation = `Relocation`
- Sales Rep Did not Follow Up = `Sales Rep Did not Follow Up`
- Scope of Work = `Scope of Work`
- Selling House = `Selling House`
- Shopper = `Shopper`
- Structural Deficiencies = `Structural Deficiencies`
- Wrong Product = `Wrong Product`
- Year Built = `Year Built`

**Lost Reason LWC** (`bpmpro3__PJ_Lost_Reason_LWC__c`):
- Attitude = `Attitude`
- Availability = `Availability`
- Canceled = `Canceled`
- Client Chose GC Vendor = `Client Chose GC Vendor`
- Condo Unit = `Condo Unit`
- Contractor Lost Bid = `Contractor Lost Bid`
- Financing = `Financing`
- Future = `Future`
- Historic Home = `Historic Home`
- Lack of Interest = `Lack of Interest`
- Missed Appointment = `Missed Appointment`
- No Answer = `No Answer`
- Other = `Other`
- Out of Area = `Out of Area`
- Out of Budget = `Out of Budget`
- Payment Terms = `Payment Terms`
- Price = `Price`
- Project Cancelled = `Project Cancelled`
- Project Size = `Project Size`
- Relocation = `Relocation`
- Sales Rep Did not Follow Up = `Sales Rep Did not Follow Up`
- Scope of Work = `Scope of Work`
- Selling House = `Selling House`
- Shopper = `Shopper`
- Structural Deficiencies = `Structural Deficiencies`
- Wrong Product = `Wrong Product`
- Year Built = `Year Built`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__Building_Permit_c__c | bpmpro3__BP_Project__c | bpmpro3__Building_Permits__r | Yes |
| bpmpro3__Deal_Sheet__c | bpmpro3__DS_Project__c | bpmpro3__Sales_Commission_Calcs__r | No |
| bpmpro3__Labor_Charge__c | bpmpro3__Project__c | bpmpro3__Labor_Charges__r | No |
| bpmpro3__Material__c | bpmpro3__Project__c | bpmpro3__Materials__r | Yes |
| bpmpro3__Orders__c | bpmpro3__PO_Project__c | bpmpro3__PO_Project_Rel__r | Yes |
| bpmpro3__PaymentBPM__c | bpmpro3__Project__c | bpmpro3__Payments__r | Yes |
| bpmpro3__Project_Contact_Role__c | bpmpro3__PCR_Project__c | bpmpro3__Project_Contact_Roles__r | No |
| bpmpro3__Project_Invoice__c | bpmpro3__PI_Project__c | bpmpro3__Project_Invoices__r | Yes |
| bpmpro3__Project_Stage_Assignment__c | bpmpro3__PSA_Project__c | bpmpro3__Project_Stage_Assignments__r | Yes |
| bpmpro3__Sales_Commission__c | bpmpro3__Project__c | bpmpro3__Sales_Commissions__r | Yes |
| bpmpro3__Sales_Document__c | bpmpro3__Project__c | bpmpro3__Sales_Documents__r | Yes |
| bpmpro3__Time_Entry__c | bpmpro3__TE_Project__c | bpmpro3__Time_Entries__r | No |
| bpmpro3__Work_Assignment__c | bpmpro3__WA_Project__c | bpmpro3__Work_Assignments__r | Yes |

---

## Project Contact Role (`bpmpro3__Project_Contact_Role__c`) {#bpmpro3projectcontactrolec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1P |
| Fields | 22 |
| Relationships | 29 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Project Contact Role | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__PCR_Project_Role_Type__c` | Project Role Type | picklist | `text` |  |  |  |
| `bpmpro3__PCR_Contact__c` | Contact | reference | `uuid` | Yes |  | -> Contact (Lookup) |
| `bpmpro3__PCR_Project__c` | Project | reference | `uuid` |  |  | -> bpmpro3__Project__c (Lookup) |
| `bpmpro3__PCR_Email__c` | Email | string | `text` |  |  |  |
| `bpmpro3__PCR_First_Name__c` | First Name | string | `text` |  |  |  |
| `bpmpro3__PCR_Full_Name__c` | Full Name | string | `text` |  |  |  |
| `bpmpro3__PCR_Last_Name__c` | Last Name | string | `text` |  |  |  |
| `bpmpro3__PCR_Mobile__c` | Mobile | string | `text` |  |  |  |
| `bpmpro3__PCR_SalesCommEligible__c` | Sales Commission Eligible | boolean | `boolean` |  |  |  |
| `bpmpro3__PCR_SalesCommSplit__c` | Sales Commission Split | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__PCR_Company_Name__c` | Company Name | string | `text` |  |  |  |

### Picklist Values

**Project Role Type** (`bpmpro3__PCR_Project_Role_Type__c`):
- Alarm Contractor = `Alarm Contractor`
- Architect = `Architect`
- Board Member = `Board Member`
- Building Contractor = `Building Contractor`
- Building Inspection = `Building Inspection`
- Civil Engineer = `Civil Engineer`
- Cladding Installer = `Cladding Installer`
- Cleaning Service = `Cleaning Service`
- Construction Manager = `Construction Manager`
- Consultant = `Consultant`
- Developer = `Developer`
- Electrical Contractor = `Electrical Contractor`
- Environmental Specialist = `Environmental Specialist`
- Fabrication Specialist = `Fabrication Specialist`
- General Contractor = `General Contractor`
- HVAC Contractor = `HVAC Contractor`
- Interior Designer = `Interior Designer`
- IT Specialist = `IT Specialist`
- Legal Advisor = `Legal Advisor`
- Logistics Coordinator = `Logistics Coordinator`
- Maintenance Engineer = `Maintenance Engineer`
- Manufacturer = `Manufacturer`
- Other = `Other`
- Painting Contractor = `Painting Contractor`
- Permit Expediter = `Permit Expediter`
- Project Manager = `Project Manager`
- Property Manager = `Property Manager`
- Property Owner = `Property Owner`
- Quality Assurance Specialist = `Quality Assurance Specialist`
- Real Estate Agent = `Real Estate Agent`
- Roofing Contractor = `Roofing Contractor`
- Safety Officer = `Safety Officer`
- Sales Person = `Sales Person`
- Site Engineer = `Site Engineer`
- Subcontractor = `Subcontractor`
- Surveyor = `Surveyor`
- Tenant Coordinator = `Tenant Coordinator`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__Deal_Sheet__c | bpmpro3__DS_ProjectContactRole__c | bpmpro3__Sales_Commission_Calcs__r | No |

---

## Project Invoice (`bpmpro3__Project_Invoice__c`) {#bpmpro3projectinvoicec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1Q |
| Fields | 46 |
| Relationships | 32 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Invoice Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__PI_Project__c` | Project | reference | `uuid` | Yes |  | -> bpmpro3__Project__c (MasterDetail) |
| `bpmpro3__PI_Invoice_Status__c` | Invoice Status | picklist | `text` |  |  |  |
| `bpmpro3__PI_Payment_Status__c` | Payment Status | picklist | `text` |  |  |  |
| `bpmpro3__PI_Date_Issued__c` | Date Issued | date | `date` |  |  |  |
| `bpmpro3__PI_Due_Date__c` | Due Date | date | `date` |  |  |  |
| `bpmpro3__PI_Invoice_Number__c` | Invoice Number | string | `varchar(30)` |  |  |  |
| `bpmpro3__PI_Stripe_Invoice_ID__c` | Stripe Invoice ID | string | `varchar(90)` |  |  |  |
| `bpmpro3__PI_Stripe_Invoice_Item_ID__c` | Stripe Invoice Item ID | string | `varchar(90)` |  |  |  |
| `bpmpro3__PI_Stripe_Invoice_URL__c` | Stripe Invoice URL | url | `text` |  |  |  |
| `bpmpro3__PI_Account__c` | Account | string | `text` |  |  |  |
| `bpmpro3__PI_Billing_Account_Name__c` | Billing Account Name | string | `text` |  |  |  |
| `bpmpro3__PI_Billing_City__c` | Billing City | string | `text` |  |  |  |
| `bpmpro3__PI_Billing_Email_Address__c` | Billing Email Address | string | `text` |  |  |  |
| `bpmpro3__PI_Billing_Phone_Number__c` | Billing Phone Number | string | `text` |  |  |  |
| `bpmpro3__PI_Billing_State__c` | Billing State | string | `text` |  |  |  |
| `bpmpro3__PI_Billing_Street_Address__c` | Billing Street Address | string | `text` |  |  |  |
| `bpmpro3__PI_Billing_Zip_Code__c` | Billing Zip Code | string | `text` |  |  |  |
| `bpmpro3__PI_Grand_Total__c` | Grand Total | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PI_Invoice_Summary_Details__c` | Invoice Summary Details | string | `text` |  |  |  |
| `bpmpro3__PI_Owning_Entity_Account_ID__c` | Owning Entity Account ID | string | `text` |  |  |  |
| `bpmpro3__PI_Project_City__c` | Project City | string | `text` |  |  |  |
| `bpmpro3__PI_Project_Name__c` | Project Name | string | `text` |  |  |  |
| `bpmpro3__PI_Project_Number__c` | Project # | string | `text` |  |  |  |
| `bpmpro3__PI_Project_State__c` | Project State | string | `text` |  |  |  |
| `bpmpro3__PI_Project_Street_Address__c` | Project Street Address | string | `text` |  |  |  |
| `bpmpro3__PI_Project_Zip_Code__c` | Project Zip Code | string | `text` |  |  |  |
| `bpmpro3__PI_Stripe_Invoice_Description__c` | Stripe Invoice Description | string | `text` |  |  |  |
| `bpmpro3__PI_Stripe_Invoice__c` | Stripe Invoice | string | `text` |  |  |  |
| `bpmpro3__PI_Sub_Total_Price__c` | Pretax Subtotal | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PI_Total_Amount__c` | (Deprecated) Total Tax Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PI_QB_Invoice_ID__c` | QB Invoice ID | string | `varchar(16)` |  |  |  |
| `bpmpro3__PI_Prorated_Sales_Tax__c` | Prorated Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PI_Balance_Remaining__c` | Balance Remaining | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PI_Invoices_Fully_Paid__c` | Invoices Fully Paid | double | `float8` |  |  |  |
| `bpmpro3__PI_Total_Paid__c` | Total Paid | currency | `numeric(18,2)` |  |  |  |

### Picklist Values

**Invoice Status** (`bpmpro3__PI_Invoice_Status__c`):
- Draft = `Draft`
- Issued = `Issued`
- Payment Requested = `Payment Requested`
- Paid = `Paid`
- Overdue = `Overdue`

**Payment Status** (`bpmpro3__PI_Payment_Status__c`):
- Pending = `Pending`
- Completed = `Completed`
- Failed = `Failed`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__SalesDoc_Invoice__c | bpmpro3__SDI_Project_Invoice__c | bpmpro3__Project_Invoice_Items__r | Yes |

---

## Project Stage (`bpmpro3__Project_Stage__c`) {#bpmpro3projectstagec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1S |
| Fields | 31 |
| Relationships | 28 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | PS # | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__Active__c` | Active | boolean | `boolean` |  |  |  |
| `bpmpro3__PS_Description__c` | Description | textarea | `text` |  |  |  |
| `bpmpro3__PS_Exclude_from_Board__c` | Exclude from Board | boolean | `boolean` |  |  |  |
| `bpmpro3__PS_Sorting_Order__c` | Sorting Order | double | `float8` | Yes |  |  |
| `bpmpro3__PS_Stage_Name__c` | Stage Name | string | `varchar(100)` | Yes | Yes |  |
| `bpmpro3__PS_Sales_Stage__c` | Sales Stage | picklist | `text` |  |  |  |
| `bpmpro3__PS_Is_Won__c` | Is Won | boolean | `boolean` |  |  |  |
| `bpmpro3__PS_Dashboard_Order__c` | Dashboard Display Order | double | `float8` |  |  |  |
| `bpmpro3__PS_Green_Threshold__c` | Green Threshold (Override) | double | `float8` |  |  |  |
| `bpmpro3__PS_Is_Lost__c` | Is Lost | boolean | `boolean` |  |  |  |
| `bpmpro3__PS_Red_Threshold__c` | Red Threshold (Override) | double | `float8` |  |  |  |
| `bpmpro3__PS_Yellow_Threshold__c` | Yellow Threshold (Override) | double | `float8` |  |  |  |
| `bpmpro3__PS_Assigned_Team__c` | Assigned Team | textarea | `text` |  |  |  |
| `bpmpro3__PS_Default_Duration_Days__c` | Default Duration Days | double | `float8` |  |  |  |
| `bpmpro3__PS_Default_Priority__c` | Default Priority | picklist | `text` |  |  |  |
| `bpmpro3__PS_Enable_External_Notifications__c` | Enable External Notifications | boolean | `boolean` |  |  |  |
| `bpmpro3__PS_External_Notification_HighestPassed__c` | External Notification Highest Passed | textarea | `text` |  |  |  |
| `bpmpro3__PS_External_Notification_LowestPending__c` | External Notification Lowest Pending | textarea | `text` |  |  |  |
| `bpmpro3__PS_Is_Final__c` | Is Final Stage | boolean | `boolean` |  |  |  |
| `bpmpro3__PS_Is_Initial__c` | Is Initial Stage | boolean | `boolean` |  |  |  |

### Picklist Values

**Sales Stage** (`bpmpro3__PS_Sales_Stage__c`):
- Lost = `Lost`
- Prospecting = `Prospecting`
- Being Quoted = `Being Quoted`
- Quoted = `Quoted`
- Booked = `Booked`
- Sold = `Sold`
- Completed = `Completed`
- Cancelled = `Cancelled`

**Default Priority** (`bpmpro3__PS_Default_Priority__c`):
- Low = `Low`
- Normal = `Normal`
- High = `High`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__Project_Stage_Assignment__c | bpmpro3__PSA_Project_Stage__c | bpmpro3__Project_Stage_Assignments__r | Yes |
| bpmpro3__Project_Stage_Team_Member__c | bpmpro3__PSTM_Project_Stage__c | bpmpro3__Project_Stage_Team_Members__r | Yes |

---

## Project Stage Assignment (`bpmpro3__Project_Stage_Assignment__c`) {#bpmpro3projectstageassignmentc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1R |
| Fields | 35 |
| Relationships | 31 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | PS Assignment # | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__PSA_Project__c` | Project | reference | `uuid` | Yes |  | -> bpmpro3__Project__c (MasterDetail) |
| `bpmpro3__PSA_Project_Stage__c` | Project Stage | reference | `uuid` | Yes |  | -> bpmpro3__Project_Stage__c (MasterDetail) |
| `bpmpro3__PSA_Status__c` | Status | picklist | `text` |  |  |  |
| `bpmpro3__PSA_Date_Modified__c` | Date Modified | datetime | `timestamptz` |  |  |  |
| `bpmpro3__PSA_Step_Order__c` | Step Order | double | `float8` |  |  |  |
| `bpmpro3__PSA_Project_Stage_Name__c` | Project Stage Name | string | `text` |  |  |  |
| `bpmpro3__PSA_Relative_Time_Stamp__c` | Relative Time Stamp | string | `text` |  |  |  |
| `bpmpro3__PSA_Modified_By__c` | Modified By | string | `varchar(40)` |  |  |  |
| `bpmpro3__PSA_Sales_Stage__c` | Sales Stage | string | `text` |  |  |  |
| `bpmpro3__PSA_Is_Won__c` | Is Won | boolean | `boolean` |  |  |  |
| `bpmpro3__PSA_Is_Downgraded__c` | Is Downgraded? | boolean | `boolean` |  |  |  |
| `bpmpro3__PSA_Completed_Early__c` | Completed Early | boolean | `boolean` |  |  |  |
| `bpmpro3__PSA_Assigned_By__c` | Assigned By | reference | `uuid` |  |  | -> User (Lookup) |
| `bpmpro3__PSA_Assigned_Date__c` | Assigned Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__PSA_Assigned_Team__c` | Assigned Team | string | `varchar(100)` |  |  |  |
| `bpmpro3__PSA_Assigned_To__c` | User | reference | `uuid` |  |  | -> User (Lookup) |
| `bpmpro3__PSA_Completed_By__c` | User | reference | `uuid` |  |  | -> User (Lookup) |
| `bpmpro3__PSA_Completed_Date__c` | Completed Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__PSA_Duration_Days_del__c` | Duration (Days) | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__PSA_Duration_Hours_del__c` | Duration (Hours) | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__PSA_Inactive__c` | Inactive | boolean | `boolean` |  |  |  |
| `bpmpro3__PSA_Pending_Date__c` | Pending Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__PSA_Duration_Days__c` | Duration Days | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__PSA_Duration_Display__c` | Duration Display | string | `text` |  |  |  |
| `bpmpro3__PSA_Duration_Hours__c` | Duration Hours | double | `numeric(18,2)` |  |  |  |

### Picklist Values

**Status** (`bpmpro3__PSA_Status__c`):
- Pending = `Pending`
- In Progress = `In Progress`
- Passed = `Passed`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__Project_Stage_Assignment_Team_Member__c | bpmpro3__PSATM_Project_Stage_Assignment__c | bpmpro3__PSA_Team_Members__r | No |

---

## Project Stage Assignment Team Member (`bpmpro3__Project_Stage_Assignment_Team_Member__c`) {#bpmpro3projectstageassignmentteammemberc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1r |
| Fields | 17 |
| Relationships | 33 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Project Stage Assignment Team Member Nam | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `bpmpro3__PSATM_Active__c` | Active | boolean | `boolean` |  |  |  |
| `bpmpro3__PSATM_Create_Task__c` | Create Task | boolean | `boolean` |  |  |  |
| `bpmpro3__PSATM_Is_Override__c` | Is Override | boolean | `boolean` |  |  |  |
| `bpmpro3__PSATM_Project_Stage_Assignment__c` | Project Stage Assignment | reference | `uuid` |  |  | -> bpmpro3__Project_Stage_Assignment__c (Lookup) |
| `bpmpro3__PSATM_Role__c` | Role | picklist | `text` |  |  |  |
| `bpmpro3__PSATM_Send_Email_Notification__c` | Send Email Notification | boolean | `boolean` |  |  |  |
| `bpmpro3__PSATM_Team_Member__c` | Team Member | reference | `uuid` |  |  | -> User (Lookup) |

### Picklist Values

**Role** (`bpmpro3__PSATM_Role__c`):
- Primary = `Primary`
- Secondary = `Secondary`
- Backup = `Backup`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Project Stage Team Member (`bpmpro3__Project_Stage_Team_Member__c`) {#bpmpro3projectstageteammemberc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1s |
| Fields | 16 |
| Relationships | 32 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Project Stage Team Member Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `bpmpro3__PSTM_Project_Stage__c` | Project Stage | reference | `uuid` | Yes |  | -> bpmpro3__Project_Stage__c (MasterDetail) |
| `bpmpro3__PSTM_Active__c` | Active | boolean | `boolean` |  |  |  |
| `bpmpro3__PSTM_Create_Task__c` | Create Task | boolean | `boolean` |  |  |  |
| `bpmpro3__PSTM_Role__c` | Role | picklist | `text` |  |  |  |
| `bpmpro3__PSTM_Send_Email_Notification__c` | Send Email Notification | boolean | `boolean` |  |  |  |
| `bpmpro3__PSTM_Team_Member__c` | Team Member | reference | `uuid` |  |  | -> User (Lookup) |
| `bpmpro3__PSTM_Project_Stage_Name__c` | Project Stage Name | string | `text` |  |  |  |

### Picklist Values

**Role** (`bpmpro3__PSTM_Role__c`):
- Primary = `Primary`
- Secondary = `Secondary`
- Backup = `Backup`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Property (`bpmpro3__Property__c`) {#bpmpro3propertyc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1m |
| Fields | 24 |
| Relationships | 34 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Property Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__PTY_Building_Type__c` | Building Type | picklist | `text` |  |  |  |
| `bpmpro3__PTY_City__c` | City | string | `varchar(80)` | Yes |  |  |
| `bpmpro3__PTY_Notes__c` | Notes | textarea | `text` |  |  |  |
| `bpmpro3__PTY_Promoted_Client_Account__c` | Promoted Client Account | reference | `uuid` |  |  | -> Account (Lookup) |
| `bpmpro3__PTY_PropertyMgmtCompany__c` | Property Management Company | reference | `uuid` |  |  | -> Account (Lookup) |
| `bpmpro3__PTY_Property_Manager__c` | Property Manager | reference | `uuid` |  |  | -> Contact (Lookup) |
| `bpmpro3__PTY_State__c` | State | picklist | `text` |  |  |  |
| `bpmpro3__PTY_Status__c` | Status | picklist | `text` |  |  |  |
| `bpmpro3__PTY_Street_Address__c` | Street Address | string | `varchar(80)` |  |  |  |
| `bpmpro3__PTY_Units__c` | Number of Units | double | `float8` |  |  |  |
| `bpmpro3__PTY_Year_Built__c` | Year Built | string | `varchar(4)` |  |  |  |
| `bpmpro3__PTY_Zip_Code__c` | Zip Code | string | `varchar(12)` |  |  |  |

### Picklist Values

**Building Type** (`bpmpro3__PTY_Building_Type__c`):
- Apartment Complex = `Apartment Complex`
- Assisted Living Facility = `Assisted Living Facility`
- Commercial Building = `Commercial Building`
- Condominium = `Condominium`
- Duplex = `Duplex`
- Fourplex = `Fourplex`
- Government Building = `Government Building`
- Hospital = `Hospital`
- Hotel = `Hotel`
- Industrial Facility = `Industrial Facility`
- Medical Office = `Medical Office`
- Military Housing = `Military Housing`
- Mixed-Use Building = `Mixed-Use Building`
- Mobile Home Park = `Mobile Home Park`
- Motel = `Motel`
- Multi-Family Building = `Multi-Family Building`
- Office Building = `Office Building`
- Other = `Other`
- Religious Facility = `Religious Facility`
- Resort = `Resort`
- Retail Plaza = `Retail Plaza`
- School = `School`
- Senior Living Community = `Senior Living Community`
- Shopping Mall = `Shopping Mall`
- Single-Family Building = `Single-Family Building`
- Strip Mall = `Strip Mall`
- Townhouse = `Townhouse`
- Trailer Park = `Trailer Park`
- Triplex = `Triplex`
- University Dormitory = `University Dormitory`
- Warehouse = `Warehouse`

**State** (`bpmpro3__PTY_State__c`):
- AK = `AK`
- AL = `AL`
- AR = `AR`
- AZ = `AZ`
- CA = `CA`
- CO = `CO`
- CT = `CT`
- DE = `DE`
- FL = `FL`
- GA = `GA`
- HI = `HI`
- IA = `IA`
- ID = `ID`
- IL = `IL`
- IN = `IN`
- KS = `KS`
- KY = `KY`
- LA = `LA`
- MA = `MA`
- MD = `MD`
- ME = `ME`
- MI = `MI`
- MN = `MN`
- MO = `MO`
- MS = `MS`
- MT = `MT`
- NC = `NC`
- ND = `ND`
- NE = `NE`
- NH = `NH`
- NJ = `NJ`
- NM = `NM`
- NV = `NV`
- NY = `NY`
- OH = `OH`
- OK = `OK`
- OR = `OR`
- PA = `PA`
- RI = `RI`
- SC = `SC`
- SD = `SD`
- TN = `TN`
- TX = `TX`
- UT = `UT`
- VA = `VA`
- VT = `VT`
- WA = `WA`
- WI = `WI`
- WV = `WV`
- WY = `WY`

**Status** (`bpmpro3__PTY_Status__c`):
- New = `New`
- In Research = `In Research`
- Qualified = `Qualified`
- Promoted = `Promoted`
- Inactive = `Inactive`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Prospect (`bpmpro3__Prospect__c`) {#bpmpro3prospectc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1l |
| Fields | 33 |
| Relationships | 34 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Prospect Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__PRT_Lead_Source__c` | Lead Source | picklist | `text` |  |  |  |
| `bpmpro3__PRT_Status__c` | Status | picklist | `text` |  |  |  |
| `bpmpro3__PRT_City__c` | City | string | `varchar(80)` |  |  |  |
| `bpmpro3__PRT_Company__c` | Company | string | `varchar(255)` |  |  |  |
| `bpmpro3__PRT_Converted_Account__c` | Converted Account | reference | `uuid` |  |  | -> Account (Lookup) |
| `bpmpro3__PRT_Converted_Contact__c` | Converted Contact | reference | `uuid` |  |  | -> Contact (Lookup) |
| `bpmpro3__PRT_Converted_Date__c` | Converted Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__PRT_County__c` | County | string | `varchar(80)` |  |  |  |
| `bpmpro3__PRT_Email_Address__c` | Email Address | email | `text` |  |  |  |
| `bpmpro3__PRT_External_ID__c` | External ID | string | `varchar(100)` |  | Yes |  |
| `bpmpro3__PRT_First_Name__c` | First Name | string | `varchar(80)` |  |  |  |
| `bpmpro3__PRT_Last_Name__c` | Last Name | string | `varchar(80)` |  |  |  |
| `bpmpro3__PRT_License_ID__c` | License Identifier | string | `varchar(80)` |  |  |  |
| `bpmpro3__PRT_Mobile_Number__c` | Mobile Number | phone | `text` |  |  |  |
| `bpmpro3__PRT_Note__c` | Note | textarea | `text` |  |  |  |
| `bpmpro3__PRT_Secondary_Email_Address__c` | Secondary Email Address | email | `text` |  |  |  |
| `bpmpro3__PRT_State__c` | State | string | `varchar(80)` |  |  |  |
| `bpmpro3__PRT_Street__c` | Street Address | string | `varchar(255)` |  |  |  |
| `bpmpro3__PRT_ZIP_Code__c` | ZIP Code | string | `varchar(20)` |  |  |  |
| `bpmpro3__PRT_Full_Address__c` | Full Address | string | `text` |  |  |  |
| `bpmpro3__PRT_Rainmaker__c` | Rainmaker | reference | `uuid` |  |  | -> User (Lookup) |

### Picklist Values

**Lead Source** (`bpmpro3__PRT_Lead_Source__c`):
- Purchased List = `Purchased List`
- Referral = `Referral`
- Webform = `Webform`
- Trade Show = `Trade Show`

**Status** (`bpmpro3__PRT_Status__c`):
- New = `New`
- Contacted = `Contacted`
- Nurturing = `Nurturing`
- Qualified = `Qualified`
- Converted = `Converted`
- Disqualified = `Disqualified`
- Unresponsive = `Unresponsive`
- On Hold = `On Hold`
- Other = `Other`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Reimbursement (`bpmpro3__Reimbursement__c`) {#bpmpro3reimbursementc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1U |
| Fields | 15 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Reimbursement Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__Labor_Ticket_Reimbursement__c` | Labor Ticket Reimbursement | reference | `uuid` | Yes |  | -> bpmpro3__Labor_Ticket__c (MasterDetail) |
| `bpmpro3__Description__c` | Description | textarea | `text` | Yes |  |  |
| `bpmpro3__Quantity__c` | Quantity | double | `float8` |  |  |  |
| `bpmpro3__Unit_Price__c` | Unit Price | currency | `numeric(18,2)` | Yes |  |  |
| `bpmpro3__Total_Reimbursement__c` | Total Reimbursement | currency | `numeric(18,2)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Sales Commission (`bpmpro3__Sales_Commission__c`) {#bpmpro3salescommissionc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1Y |
| Fields | 17 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | SC# | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__Project__c` | Project | reference | `uuid` | Yes |  | -> bpmpro3__Project__c (MasterDetail) |
| `bpmpro3__Commission_Type__c` | Commission Type | picklist | `text` |  |  |  |
| `bpmpro3__Comments__c` | Comments | textarea | `text` |  |  |  |
| `bpmpro3__Commission_Amount__c` | Commission Amount | currency | `numeric(18,2)` | Yes |  |  |
| `bpmpro3__Commission_Payment_Date__c` | Commission Payment Date | date | `date` | Yes |  |  |
| `bpmpro3__SC_Project_Full_Address__c` | Project Full Address | string | `text` |  |  |  |
| `bpmpro3__SC_Sales_Person__c` | Sales Person | string | `text` |  |  |  |

### Picklist Values

**Commission Type** (`bpmpro3__Commission_Type__c`):
- Draw = `Draw`
- Final = `Final`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Sales Commission Payout (`bpmpro3__Sales_Commission_Payout__c`) {#bpmpro3salescommissionpayoutc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1j |
| Fields | 25 |
| Relationships | 29 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | SalesComm Payout | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__SCP_PayoutStatus__c` | Payout Status | picklist | `text` |  |  |  |
| `bpmpro3__SCP_Amount__c` | Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SCP_DealSheet__c` | Deal Sheet | reference | `uuid` | Yes |  | -> bpmpro3__Deal_Sheet__c (Lookup) |
| `bpmpro3__SCP_DefaultCommShare__c` | Default Commission Share | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SCP_IsSplitOverridden__c` | Is Split Overridden | boolean | `boolean` |  |  |  |
| `bpmpro3__SCP_Notes__c` | Notes | textarea | `text` |  |  |  |
| `bpmpro3__SCP_PaidBy__c` | Paid By | reference | `uuid` |  |  | -> User (Lookup) |
| `bpmpro3__SCP_PaymentDate__c` | Payment Date | date | `date` |  |  |  |
| `bpmpro3__SCP_PayoutPercentage__c` | Payout Percentage | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SCP_Sales_Rep__c` | Sales Rep | reference | `uuid` |  |  | -> Contact (Lookup) |
| `bpmpro3__SCP_ProjectName__c` | Project Name | string | `text` |  |  |  |
| `bpmpro3__SCP_PaymentReference__c` | Payment Reference | textarea | `text` |  |  |  |
| `bpmpro3__SCP_SubmittedDate__c` | Submitted Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__SCP_SalesDocument__c` | Sales Document | string | `text` |  |  |  |

### Picklist Values

**Payout Status** (`bpmpro3__SCP_PayoutStatus__c`):
- Draft = `Draft`
- To Be Paid = `To Be Paid`
- Paid = `Paid`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Sales Commission Table (`bpmpro3__Sales_Commission_Table__c`) {#bpmpro3salescommissiontablec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1X |
| Fields | 16 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Sales Commission Table Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__SCT_Service_Type__c` | Service Type | picklist | `text` | Yes |  |  |
| `bpmpro3__SCT_Company_Markup_Pct__c` | Company Markup % | percent | `numeric(5,2)` | Yes |  |  |
| `bpmpro3__SCT_Is_Active__c` | Is Active | boolean | `boolean` |  |  |  |
| `bpmpro3__SCT_Sales_Commission_Pct__c` | Sales Commission % | percent | `numeric(5,2)` | Yes |  |  |
| `bpmpro3__SCT_Company_Margin__c` | Company Margin % | percent | `numeric(5,2)` |  |  |  |

### Picklist Values

**Service Type** (`bpmpro3__SCT_Service_Type__c`):
- Export = `Export`
- Installation Only = `Installation Only`
- Other = `Other`
- Product + Installation = `Product + Installation`
- Product Only = `Product Only`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Sales Document (`bpmpro3__Sales_Document__c`) {#bpmpro3salesdocumentc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1Z |
| Fields | 476 |
| Relationships | 41 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | SalesDoc # | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__Project__c` | Project | reference | `uuid` | Yes |  | -> bpmpro3__Project__c (MasterDetail) |
| `bpmpro3__C_Material_Price_NonPT_SO__c` | Deprecated Field | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Document_Type_Picklist__c` | Document Type | picklist | `text` |  |  |  |
| `bpmpro3__Permit_Fees__c` | Permit Fees Treatment | picklist | `text` |  |  |  |
| `bpmpro3__SD_Sales_Comm_Method__c` | Sales Commission Method Deprecated | string | `text` |  |  |  |
| `bpmpro3__SD_Total_Product_PreTax_Price__c` | Total Product PreTax Price Deprecated | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SalesTaxTreatment__c` | Sales Tax Treatment | picklist | `text` |  |  |  |
| `bpmpro3__Sales_Commission_Basis__c` | Sales Commission Basis | picklist | `text` |  |  |  |
| `bpmpro3__Sales_Document_Status__c` | SalesDoc Status | picklist | `text` |  |  |  |
| `bpmpro3__Additional_Notes__c` | Additional Notes | textarea | `text` |  |  |  |
| `bpmpro3__Admin_Fee__c` | Admin Fee ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Price_NonPT_Flow__c` | C Product Price NonPT Deprecated | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_RollupFlowExtConfiProLaborCost__c` | C Rollup Ext Confi ProLabor Cost Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_RollupFlowExtConfiProdMatCost__c` | C Rollup Ext Confi ProdMat Cost Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Charge_Sales_Commission__c` | Charge Sales Commission Deprecated | boolean | `boolean` |  |  |  |
| `bpmpro3__Exclude_Labor__c` | Exclude Labor | boolean | `boolean` |  |  |  |
| `bpmpro3__LaborCostMarkup__c` | Base ProLabor Markup | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__MatCostMarkup__c` | Material Cost Markup | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__Minimum_Cost_Baseline__c` | Minimum Cost Baseline | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Notes_to_Clients__c` | Executive Summary | textarea | `text` |  |  |  |
| `bpmpro3__PermitMarkup__c` | Plans Package Markup | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__PermitPackageCost__c` | Plans Package Charge ($): | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__ProductMarkup__c` | Base ProdMat Markup | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__QuoteName__c` | SalesDoc Name | string | `varchar(80)` | Yes |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Cost_FS_Flow__c` | A3 AddOn Product Cost FS Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Cost_SO_Flow__c` | A3 AddOn Product Cost SO Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Labor_Cost__c` | A3 AddOn Product Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Labor_Price__c` | A3 AddOn Product Labor Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Labor_Profit__c` | A3 AddOn Product Labor Profit Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Labor_SalesComm__c` | A3 AddOn Product Labor Sales Comm | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Profit_FS__c` | A3 AddOn Product Profit FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Profit_SO__c` | A3 AddOn Product Profit SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Retail_CountyTax_Flow__c` | A3 AddOn Product Retail County Tax Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Retail_StateTax_Flow__c` | A3 AddOn Product Retail State Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_SalesComm_FS__c` | A3 AddOn Product Sales Comm FS (D) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_SalesComm_SO__c` | A3 AddOn Product Sales Comm SO (D) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_WS_CountyTax_Flow__c` | A3 AddOn Product Wholesale County Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_WS_StateTax_Flow__c` | A3 AddOn Product Wholesale State Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Cost_FS_Flow__c` | A3 Main Product Cost FS Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Cost_Flow__c` | A3 Main Product Cost SO Deprecated | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Cost_SO_Flow__c` | A3 Main Product Cost SO Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Labor_Cost__c` | A3 Main Product Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Labor_Price__c` | A3 Main Product Labor Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Labor_Profit__c` | A3 Main Product Labor Profit Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Labor_SalesComm__c` | A3 Main Product Labor Sales Comm | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Profit_FS__c` | A3 Main Product Profit FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Profit_SO__c` | A3 Main Product Profit SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Retail_CountyTax_Flow__c` | A3 Main Product Retail County Tax Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Retail_StateTax_Flow__c` | A3 Main Product Retail State Tax Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_SalesComm_FS__c` | A3 Main Product Sales Comm FS (D) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_SalesComm_SO__c` | A3 Main Product Sales Comm SO (D) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_WS_CountyTax_Flow__c` | A3 Main Product WS County Tax Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_WS_StateTax_Flow__c` | A3 Main Product Wholesale State Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MatEquipment_Profit__c` | A3 MatEquip Profit Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MatEquipment_SalesComm__c` | A3 MatEquipment Sales Comm (Deprecated) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Automation_Flag__c` | Automation Flag | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_Building_Permit_App_Completed__c` | Building Permit App Completed | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_Building_Permit_App_Pending__c` | Building Permit App Pending | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_C_Labor_Profit_NonPT__c` | C Labor Profit Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Labor_SalesComm_NonPT__c` | C Labor Sales Commission NonPT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Cost_NonPT_FS__c` | C Material Cost NonPT FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Cost_NonPT__c` | C Material Cost NonPT SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Cost_PT_FS__c` | C Material Cost PT FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Cost_PT__c` | C Material Cost PT SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Pretax_Price__c` | C Material Pretax Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Profit_FS__c` | C Material Profit FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Profit_SO__c` | C Material Profit SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Retail_CountyTax__c` | C Material Retail County Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Retail_StateTax__c` | C Material Retail State Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_SalesComm_NonPT_FS__c` | C Material Sales Commission NonPT FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_SalesComm_NonPT_SO__c` | C Material Sales Commission NonPT SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Wholesale_CountyTax__c` | C Material Wholesale County Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Wholesale_StateTax__c` | C Material Wholesale State Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_ProServices_Cost_NonPT__c` | C ProServices Cost NonPT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_ProServices_Cost_PT__c` | C ProServices Cost PT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_ProServices_Cost__c` | C ProServices Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_ProServices_Profit_NonPT__c` | C ProServices Profit Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_ProServices_SalesComm_NonPT__c` | C ProServices Sales Commission NonPT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Cost_NonPT_FS__c` | C Product Cost NonPT FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Cost_NonPT__c` | C Product Cost NonPT SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Cost_PT_FS__c` | C Product Cost PT FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Cost_PT_Flow__c` | C Product Cost PT Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Cost_PT__c` | C Product Cost PT SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Pretax_Price__c` | C Product Price SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Price_NonPT_Flow__c` | C Product Price NonPT Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Profit_FS__c` | C Product Profit FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Profit_SO__c` | C Product Profit SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Retail_CountyTax__c` | C Product Retail County Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Retail_StateTax__c` | C Product Retail State Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_SalesComm_NonPT_FS__c` | C Product Sales Comm NonPT FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_SalesComm_NonPT_SO__c` | C Product Sales Comm NonPT SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Wholesale_CountyTax__c` | C Product Wholesale County Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Wholesale_StateTax__c` | C Product Wholesale State Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_County_TaxRate_Flow__c` | County Tax Rate Flow | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_Final_Measurements_Completed__c` | Final Measurements Completed | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_Final_Measurements_Pending__c` | Final Measurements Pending | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_Frame_Color_Global__c` | Frame Color | Default | string | `varchar(150)` |  |  |  |
| `bpmpro3__SD_HOA_Letter_Completed__c` | HOA Letter Completed | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_HOA_Letter_Pending__c` | HOA Letter Pending | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_LaborSalesCommPercent_Flow__c` | ProLabor Sales Commission (%) Flow | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_Municipality__c` | Municipality | reference | `uuid` |  |  | -> Account (Lookup) |
| `bpmpro3__SD_NOC_Completed__c` | NOC Completed | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_NOC_Pending__c` | NOC Pending | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_NOC_Signed_Completed__c` | NOC Signed Completed | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_PlansSalesCommPercent_Flow__c` | Plans Package Sales Commission (%) Flow | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_Price_Anchoring_Percentage__c` | Price Anchoring (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_ProductSalesCommPercent_Flow__c` | ProdMat Sales Commission (%) Flow | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_Proof_of_Payment_Completed__c` | Proof of Payment Completed | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_Proof_of_Payment_Pending__c` | Proof of Payment Pending | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_Run_Convert_to_Sold_Assignments__c` | Run Convert to Sold Assignments | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_Run_Sold_SalesDoc_WA_Flow__c` | Run Sold SalesDoc WA Flow | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_SalesDoc_Close_Date__c` | SalesDoc Close Date | date | `date` |  |  |  |
| `bpmpro3__SD_Sales_Doc_Signed_Completed__c` | SalesDoc Signed Completed | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_Sales_Doc_Signed_Pending__c` | SalesDoc Signed Pending | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_Sold_CheckList_Completed__c` | Sold CheckList Completed | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_Sold_Check_Completed__c` | Sold Check Completed | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_State_TaxRate_Flow__c` | State Tax Rate Flow | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_Total_Labor_Cost_Flow__c` | Total Labor Cost A3 C | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Product_Price_FS_Flow__c` | Total Product Price FS Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Product_Price_Flow__c` | Total Product Price Flow (Inactive) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Product_Price_SO_Flow__c` | Total Product Price SO Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Waive_Sales_Commission__c` | Waive Sales Commission | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_Wave_Sales_Commission__c` | Wave Sales Comm (Deprecated) | boolean | `boolean` |  |  |  |
| `bpmpro3__ShowProductOnly_del__c` | ShowProductOnly_del | boolean | `boolean` |  |  |  |
| `bpmpro3__Show_Breakdown__c` | Show Product/Labor Breakdown | boolean | `boolean` |  |  |  |
| `bpmpro3__Show_Cover_Page__c` | Show Cover Page | boolean | `boolean` |  |  |  |
| `bpmpro3__Show_Design_Pressures__c` | Show Design Pressures | boolean | `boolean` |  |  |  |
| `bpmpro3__Show_Energy_Values__c` | Show Energy Values | boolean | `boolean` |  |  |  |
| `bpmpro3__Show_Labor_Item_Pricing__c` | Show Labor Item Pricing | boolean | `boolean` |  |  |  |
| `bpmpro3__Show_Labor_Scope__c` | Show Labor Scope of Work | boolean | `boolean` |  |  |  |
| `bpmpro3__Show_Line_Item_Pricing__c` | Show Line Item Pricing | boolean | `boolean` |  |  |  |
| `bpmpro3__Show_Manu_Quote_Number__c` | Show Manufacturer Q# | boolean | `boolean` |  |  |  |
| `bpmpro3__Show_Product_Approval__c` | Show Product Approval Details | boolean | `boolean` |  |  |  |
| `bpmpro3__Show_Product_Dimensions__c` | Show Product Dimensions | boolean | `boolean` |  |  |  |
| `bpmpro3__Show_Product_Illustrations__c` | Show Product Illustrations | boolean | `boolean` |  |  |  |
| `bpmpro3__Show_Product_Item_Pricing__c` | Show Product Item Pricing | boolean | `boolean` |  |  |  |
| `bpmpro3__UponAgreementPcnt__c` | Upon Agreement (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__UponCompletionPcnt__c` | Upon Completion (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__UponDeliveryPcnt__c` | Upon Delivery (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__AdminFeeEstimatedProfits__c` | Admin Fee Profits | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__AdminFeeSalesCommAmount__c` | Admin Fee Sales Comm Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Price_NonPT_FS__c` | C Material Price NonPT FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__GrandTotal__c` | Grand Total | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__LaborSalesCommPercent__c` | ProLabor Sales Comm (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__PlansPackageEstimatedProfits__c` | Plans Package Profits | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__PlansSalesCommPercent__c` | Plans Package Sales Commission (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__Plans_Commissionable_Cost__c` | Plans Package Commissionable Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Plans_Multiplier__c` | Plans Package Multiplier | double | `numeric(18,6)` |  |  |  |
| `bpmpro3__Plans_Sales_Commission__c` | Plans Package Sales Comm Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__ProLaborMultiplier__c` | ProLabor Multiplier | double | `numeric(18,6)` |  |  |  |
| `bpmpro3__ProLabor_Commissionable_Cost__c` | ProLabor Commissionable Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__ProLabor_Sales_Commission__c` | ProLabor Sales Comm Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__ProdMatMultiplier__c` | ProdMat Multiplier | double | `numeric(18,6)` |  |  |  |
| `bpmpro3__ProdMat_Commissionable_Cost__c` | ProdMat Commissionable Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__ProdMat_Sales_Commission__c` | ProdMat Sales Comm Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__ProductSalesCommPercent__c` | ProdMat Sales Comm (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__Profit__c` | Total Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Project_Full_Address__c` | Project Full Address | string | `text` |  |  |  |
| `bpmpro3__Retail_Sales_Tax__c` | Total Retail Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Rollup_TotalMatSalesPrice__c` | Total Material Price SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Cost_Basis__c` | A3 AddOn Product Cost Basis | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Cost_FS__c` | A3 AddOn Product Cost FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Cost_SO__c` | A3 AddOn Product Cost SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Price_FS__c` | A3 AddOn Product Price FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Price_SO__c` | A3 AddOn Product Price SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Profit__c` | A3 AddOn Product Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Retail_CountyTax__c` | A3 AddOn Product Retail County Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Retail_Price__c` | A3 AddOn Product Retail Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_Retail_SalesTax__c` | A3 AddOn Product Retail Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_SalesComm__c` | A3 AddOn Product Sales Comm | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_WS_CountyTax__c` | A3 AddOn Product WS County Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProduct_WS_SalesTax__c` | A3 AddOn Product Wholesale Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOn_Product_Price__c` | A3 AddOn Product Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_CombinedProduct_Cost_FS__c` | A3 Combined Product Cost FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_CombinedProduct_Price__c` | A3 Combined Product Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_CombinedProduct_Retail_Price__c` | A3 Combined Product Retail Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_CombinedProduct_Retail_SalesTax__c` | A3 Combined Product Retail Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_CombinedProduct_WS_SalesTax__c` | A3 Combined Product Wholesale Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_Combined_Product_Cost__c` | A3 Combined Product Cost SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_Equipment_Rental_Price__c` | A3 Equipment Rental Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_Labor_Price__c` | A3 Combined Labor Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Cost_Basis__c` | A3 Main Product Cost Basis | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Cost_FS__c` | A3 Main Product Cost FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Cost_SO__c` | A3 Main Product Cost SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Price_FS__c` | A3 Main Product Price FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Price_SO__c` | A3 Main Product Price SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Price__c` | A3 Main Product Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Profit_FS_Calc__c` | A3 Main Product Profit FS (Deprecated) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Profit__c` | A3 Main Product Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Retail_CountyTax__c` | A3 Main Product Retail County Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Retail_Price__c` | A3 Main Product Retail Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_Retail_SalesTax__c` | A3 Main Product Retail Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_SalesComm_FS_Calc__c` | A3 Main Product Sales Comm FS (Old) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_SalesComm__c` | A3 Main Product Sales Comm | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_SalesTax__c` | A3 Main Product Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_WS_CountyTax__c` | A3 Main Product WS County Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProduct_WS_SalesTax__c` | A3 Main Product Wholesale Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MatEquipment_Cost__c` | A3 Total Mat Equip Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MatEquipment_Price__c` | A3 Product MatEquip Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_Material_Price__c` | A3 Material Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_ProdMatEquip_Cost_FS__c` | A3 ProdMatEquip Cost FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_Wholesale_CountyTax__c` | A3 Wholesale County Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_Wholesale_StateTax__c` | A3 Wholesale State Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Account_ID__c` | Account ID | string | `text` |  |  |  |
| `bpmpro3__SD_Account_Name__c` | Account Name | string | `text` |  |  |  |
| `bpmpro3__SD_Admin_Fee_Price__c` | Admin Fee Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Billing_City__c` | Billing City | string | `text` |  |  |  |
| `bpmpro3__SD_Billing_Email_Address__c` | Billing Email Address | string | `text` |  |  |  |
| `bpmpro3__SD_Billing_Phone_Number__c` | Billing Phone Number | string | `text` |  |  |  |
| `bpmpro3__SD_Billing_State__c` | Billing State | string | `text` |  |  |  |
| `bpmpro3__SD_Billing_Street__c` | Billing Street | string | `text` |  |  |  |
| `bpmpro3__SD_Billing_Zip_Code__c` | Billing Zip Code | string | `text` |  |  |  |
| `bpmpro3__SD_C_Labor_Cost_NonPT__c` | C Labor Cost NonPT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Labor_Price_NonPT__c` | C Labor Price NonPT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Cost_Basis_NonPT__c` | C Material Cost Basis NonPT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Cost_Basis_PT__c` | C Material Cost Basis PT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Cost_FS__c` | C Material Cost FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Price_FS__c` | C Material Price FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Price_NonPT_SO__c` | C Material Price NonPT SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Price_NonPT__c` | C Material Price NonPT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Price_SO__c` | C Material Price SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Profit__c` | C Material Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Retail_Price__c` | C Material Retail Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Retail_SalesTax__c` | C Material Retail Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_SalesComm_NonPT__c` | C Material Sales Commission NonPT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Wholesale_SalesTax_2__c` | C Material Wholesale Sales Tax #2 | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Wholesale_SalesTax__c` | C Material Wholesale Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_ProdMat_Sales_Tax__c` | C ProdMat Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Cost_Basis_NonPT__c` | C Product Cost Basis NonPT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Cost_Basis_PT__c` | C Product Cost Basis PT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Cost_Basis__c` | C Product Cost Basis | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Cost_FS__c` | C Product Cost FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Price_NonPT_FS__c` | C Product Price NonPT FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Price_NonPT_SO__c` | C Product Price NonPT SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Price_NonPT__c` | C Product Price NonPT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Profit__c` | C Product Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Retail_Price__c` | C Product Retail Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Retail_SalesTax__c` | C Product Retail Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_SalesComm_NonPT__c` | C Product Sales Comm Amount NonPT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Wholesale_SalesTax__c` | C Product Wholesale Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_County_TaxRate__c` | County Tax Rate | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_Is_ProLabor_Confi_Higher__c` | Is ProLabor Confi Higher | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_Is_ProdMat_Confi_Higher__c` | Is ProdMat Confi Higher | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_OwningEntityAccount_ID__c` | Owning Entity Account ID | string | `text` |  |  |  |
| `bpmpro3__SD_Permit_Explanation__c` | Permit Explanation | string | `text` |  |  |  |
| `bpmpro3__SD_Price_Anchoring_Discount_Amount__c` | Price Anchoring Discount Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Price_Anchoring_Multiplier__c` | Price Anchoring Multiplier | double | `numeric(18,12)` |  |  |  |
| `bpmpro3__SD_Project_City__c` | Project City | string | `text` |  |  |  |
| `bpmpro3__SD_Project_Manager_Email__c` | Project Manager Email | string | `text` |  |  |  |
| `bpmpro3__SD_Project_Manager_Name__c` | Project Manager Name | string | `text` |  |  |  |
| `bpmpro3__SD_Project_Service_Type__c` | Project Service Type | string | `text` |  |  |  |
| `bpmpro3__SD_Project_Stage__c` | Project Stage | string | `text` |  |  |  |
| `bpmpro3__SD_Project_State__c` | Project State | string | `text` |  |  |  |
| `bpmpro3__SD_Project_Street_Address__c` | Project Street Address | string | `text` |  |  |  |
| `bpmpro3__SD_Project_Zip_Code__c` | Project Zip Code | string | `text` |  |  |  |
| `bpmpro3__SD_SalesDoc_Service_Type__c` | SalesDoc Service Type | string | `text` |  |  |  |
| `bpmpro3__SD_Sales_Person_Email__c` | Sales Person Email | string | `text` |  |  |  |
| `bpmpro3__SD_Sales_Person_ID__c` | Sales Person ID | string | `text` |  |  |  |
| `bpmpro3__SD_Sales_Person_Mobile__c` | Sales Person Mobile | string | `text` |  |  |  |
| `bpmpro3__SD_Sales_Person__c` | Sales Person | string | `text` |  |  |  |
| `bpmpro3__SD_State_TaxRate__c` | State Tax Rate | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_Tax_Exempt_Indicator__c` | Tax Exempt Indicator | double | `float8` |  |  |  |
| `bpmpro3__SD_Total_MatEquip_Cost_FS__c` | Total MatEquip Cost FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_MatEquip_Price_FS__c` | Total MatEquip Price FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_MatEquip_Price__c` | Total MatEquip Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_MatEquipment_Cost_Basis__c` | Total MatEquip Cost Basis | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_MatEquipment_Cost__c` | Total MatEquip Cost SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_MatEquipment_PreTax_Price__c` | Total MatEquip Price SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Material_Cost_FS__c` | Total Material Cost FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Material_Price_FS__c` | Total Material Price FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_ProMatProLabor_Price__c` | Total ProMatProLabor Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_ProServices_Pretax_Price__c` | Total ProServices Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_ProdMatEquip_AdjustedCost__c` | Total ProdMatEquip Cost FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_ProdMatEquip_Cost_SO__c` | Total ProdMatEquip Cost SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_ProdMatEquip_Price__c` | Total ProdMatEquip Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_ProdMat_Price_FS__c` | Total ProdMat Price FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Product_Cost_Basis__c` | Total Product Cost Basis | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Product_Cost_FS__c` | Total Product Cost FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Product_Cost_SO__c` | Total Product Cost SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Product_Price_FS__c` | Total Product Price FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Product_Price_SO__c` | Total Product Price SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Product_Price__c` | Total Product Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Retail_CountyTax_Calcs__c` | Total Retail County Tax Calcs | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Retail_CountyTax__c` | Total Retail County Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Retail_SalesTax_Calcs__c` | Total Retail Sales Tax Calcs | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Retail_StateTax_Calcs__c` | Total Retail State Tax Calcs | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Retail_StateTax__c` | Total Retail State Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Wholesale_CountyTax__c` | Total Wholesale County Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Wholesale_SalesTax__c` | Total Wholesale Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Total_Wholesale_StateTax__c` | Total Wholesale State Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SalesCommAmount__c` | Total Sales Comm Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Sales_Commission_Basis_Explained__c` | Sales Commission Basis Explained | string | `text` |  |  |  |
| `bpmpro3__TaxRate__c` | Tax Rate Deprecated | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__TotalPlansSalesPrice__c` | Total Plans Package Sales Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__TotalProLaborSalesPrice__c` | Total ProLabor Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__TotalProdMatSalesPrice__c` | Total ProdMat Price SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__TotalQuoteAmount__c` | Total Quote Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__TotalQuoteCost__c` | Total Quote Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Total_Adjusted_Labor_Cost__c` | Total Labor Adjusted Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Total_Labor_Cost__c` | Total Labor Cost (A3 C CPI) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Total_Labor_Price__c` | Total Labor Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Total_Material_Cost__c` | Total Material Cost SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Total_ProLabor_Cost__c` | Total ProLabor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Total_Pro_Services_Cost__c` | Total ProServices Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Total_ProdMat_Cost__c` | Total ProdMat Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Total_Product_Cost__c` | Total Product Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__UponAgreementAmount__c` | Upon Agreement Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__UponCompletionAmount__c` | Upon Completion Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__UponDeliveryAmount__c` | Upon Delivery Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A1_RollupExtProductCost__c` | A1 Rollup Ext Product Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A2_RollupExtLaborCost__c` | A2 Rollup Ext Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_RollupExtEquipmentCost__c` | A3 Equipment Rental Cost Roll-Up | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_RollupExtLaborCost__c` | A3 Combined Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_RollupExtLaborUpcharges__c` | A3 Rollup Ext Labor Upcharges | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_RollupExtMaterialCost__c` | A3 Material Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_RollupExtProdMatEquipCost__c` | A3 ProdMatEquip Cost SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__A3_RollupExtProductCost__c` | A3 Main Product Cost SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_RollupCBExtProLaborCost__c` | C Rollup CB Ext ProLabor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_RollupCBExtProdMatCost__c` | C Rollup CB Ext ProdMat Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_RollupExtConfidentialCost__c` | C Rollup Ext Confidential Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_RollupExtLaborCost__c` | C Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_RollupExtProLaborCost__c` | C ProLabor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_RollupExtProdMatCost__c` | C ProdMat Cost SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_RollupPTExtLaborCost__c` | C Labor Cost PT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_RollupPTProLaborCost__c` | C ProLabor Cost PT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_RollupPTProdMatCost__c` | C ProdMat Cost PT SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Rollup_Ext_Material_Cost__c` | C Material Cost SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Rollup_Ext_Product_Cost__c` | C Product Cost SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_RollupAddOnProductCost__c` | A3 AddOn Product Cost SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_RollupExtAddOnProdInstallCost__c` | A3 Rollup Ext AddOn Prod Install Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_RollupExtEquipAccessCost__c` | A3 Equipment Labor Cost Roll-Up | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_RollupExtFinishWorkLaborCost__c` | A3 Rollup Ext Finish Work Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_RollupExtMainProductInstallCost__c` | A3 Rollup Ext Main Product Install Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_RollupExtOpeningPrep__c` | A3 Rollup Ext Opening Prep | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Sales_Person_Title__c` | Sales Person Title | string | `text` |  |  |  |
| `bpmpro3__SD_A3_AddOnProductCustomerLaborPrice__c` | A3 AddOn Product Customer Labor Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProductCustomerPrice__c` | A3 AddOn Product Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProductEffProdMatMarkup__c` | A3 AddOnProd Effective ProdMat Markup | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProductLaborProfit_RO__c` | A3 AddOn Product Labor Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_CombinedProductEffProdMatMarkup__c` | A3 CombinedProd Effective ProdMat Markup | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProductCustomerPrice__c` | A3 Main Product Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProductLaborCustomerPrice__c` | A3 Main Product Labor Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProductLaborProfit_RO__c` | A3 Main Product Labor Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MatEquipProfit_RO__c` | A3 MatEquip Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MatEquipmentCustomerPrice__c` | A3 Main Product MatEquip Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_AdminFeeCustomerPrice__c` | Admin Fee Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_LaborCustomerPrice_NonPT__c` | C Labor Customer Price NonPT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_LaborProfit_RO__c` | C Labor Profits | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_MaterialCustomerPrice_NonPT__c` | C Material Customer Price NonPT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Price_PT__c` | C Material Price PT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_ProServicesPrice_NonPT__c` | C ProServices Price NonPT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_ProServicesProfit_RO__c` | C ProServices Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_ProductCustomerPrice_NonPT__c` | C Product Customer Price NonPT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_ProductSalesComm_NonPT__c` | C Product Sales Comm NonPT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Price_PT__c` | C Product Price PT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_ProLaborSalesCommMultiplier__c` | ProLabor Sales Comm Multiplier | double | `numeric(18,6)` |  |  |  |
| `bpmpro3__SD_ProdMatSalesCommMultiplier__c` | ProdMat Sales Comm Multiplier | double | `numeric(18,6)` |  |  |  |
| `bpmpro3__SD_TotalPlansCustomerSalesPrice__c` | Total Plans Package Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_TotalPrice__c` | Total Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_TotalProdMatEquipCostBasis__c` | Total ProdMatEquip Cost Basis | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_RollupExtConfiProdMatPrice_Flow__c` | C RollupExtConfi ProdMat Price Flow (D) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProductPriceFS_Flow__c` | A3 AddOn Product Price FS Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProductPriceSO_Flow__c` | A3 AddOn Product Price SO Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProductEffProLaborMarkup_Flow__c` | A3 MainProd Effective ProLabor MKP Flow | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProductEffProdMatMarkup_Flow__c` | A3 MainProd Effective ProdMat MKP Flow | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProductPriceFS_Flow__c` | A3 Main Product Price FS Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProductPriceSO_Flow__c` | A3 Main Product Price SO Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MatEquipPrice_Flow__c` | A3 Main MatEquip Price Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MaterialPrice_Flow__c` | A3 Material Price Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_Discount__c` | CPI Discount | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_CPI_Labor_Cost__c` | CPI Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_SalesPrice__c` | CPI Sales Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_ProLaborEffectiveMarkup_Flow__c` | ProLabor Effective Markup Flow | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_ProLaborEffectiveMultiplier__c` | ProLabor Effective Multiplier (inactive) | double | `numeric(11,6)` |  |  |  |
| `bpmpro3__SD_ProdMatEffectiveMarkup_Flow__c` | ProdMat Effective Markup Flow | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_ProdMatEffectiveMultiplier__c` | ProdMat Effective Multiplier (Inactive) | double | `numeric(11,6)` |  |  |  |
| `bpmpro3__SD_ProdMat_Sales_Comm__c` | ProdMat Sales Comm Amount (Inactive) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_TotalMatEquipCustomerPrice_Flow__c` | Total MatEquip Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_TotalProdMatEquipCustomerPrice_Flow__c` | Total ProdMatEquip Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_TotalProductCustomerPrice_Flow__c` | Total Product Customer Price Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_AddOnProductEffProLaborMarkup__c` | A3 AddOnProd Effective ProLabor Markup | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_A3_CombinedProductEffProLaborMarkup__c` | A3 CombinedProd Effective ProLaborMarkup | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProductEffProLaborMarkup__c` | A3 MainProd Effective ProLabor Markup | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_A3_MainProductEffProdMatMarkup__c` | A3 MainProd Effective ProdMat Markup | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_A3_MatEquipEffMarkup__c` | A3 MatEquip Effective Markup | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_A3_MatEquipSalesComm_RO__c` | A3 MatEquipment Sales Comm | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MaterialEffMarkup__c` | A3 Material Effective Markup | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_CPI_DiscountPrice__c` | CPI Discount Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_GrandTotal__c` | CPI Grand Total | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Material_Price__c` | C Material Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_ProServicesCustomerPrice_NonPT__c` | C ProServices Customer Price NonPT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Product_Price__c` | C Product Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_ProLaborEffectiveMargin__c` | ProLabor Effective Margin | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_ProLaborEffectiveMarkup__c` | ProLabor Effective Markup | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_ProLaborProfits__c` | ProLabor Profits | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_ProdMatEffectiveMargin__c` | ProdMat Effective Margin | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_ProdMatEffectiveMarkup__c` | ProdMat Effective Markup | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_ProdMatEquipProfits__c` | ProdMatEquip Profits | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_SalesDocOverallEffectiveMargin__c` | SalesDoc Overall Effective Margin | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_SalesDocOverallEffectiveMarkup__c` | SalesDoc Overall Effective Markup | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SD_TotalCustomerPrice__c` | Total Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_TotalLaborCustomerPrice__c` | Total Labor Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_TotalProLaborCustomerPrice__c` | Total ProLabor Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_TotalProServicesCustomer_Price__c` | Total ProServices Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_TotalProdMatEquipPrice_SO__c` | Total ProdMatEquip Price SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_LaborPrice__c` | CPI Labor Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_LaborSalesCommission__c` | CPI Labor Sales Commission | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_ProductCost_SO__c` | CPI Product Cost SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_ProductSalesCommission__c` | CPI Product Sales Commission | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Pinned_SalesDoc_Notes__c` | Pinned SalesDoc Notes | textarea | `text` |  |  |  |
| `bpmpro3__SD_TotalProductCostFS_Flow__c` | Total Product Cost FS Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_Grand_Total_Cost__c` | CPI Grand Total Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_LaborCustomerPrice__c` | CPI Labor Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_LaborProfit__c` | CPI Labor Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_ProductCostBasis__c` | CPI Product Cost Basis | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_ProductCost_FS__c` | CPI Product Cost FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_ProductCustomerPrice__c` | CPI Product Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_ProductPrice_FS__c` | CPI Product Price FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_ProductPrice_SO__c` | CPI Product Price SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_ProductPrice__c` | CPI Product Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_ProductProfit__c` | CPI Product Profit | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_Wholesale_StateTax__c` | CPI Wholesale State Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_MaterialCustomerPrice_PT__c` | C Material Customer Price PT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_ProductCustomerPrice_PT__c` | C Product Customer Price PT | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_IsWon__c` | IsWon | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_DoNotRecalculate_Flag__c` | Do Not Recalculate Flag | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_ShowVendorSummary__c` | Show Vendor Summary | boolean | `boolean` |  |  |  |
| `bpmpro3__Line_Item_Markups_Copied__c` | Line Item Markups Copied | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_A3_MainProductPrice_Flow__c` | A3 Main Product Price Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_ProductPrice_Flow__c` | CPI Product Price Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_ProductCostBasisPT_Flow__c` | C Product Cost Basis PT Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Supply_Only_Mode__c` | Supply-Only Mode | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_Total_MatEquip_Price_Flow__c` | Total MatEquip Price Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_ShowCategoryBreakdown__c` | Show Category Breakdown | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_A3_MainMaterials_Retail_CountyTax__c` | A3 Main Materials Retail County Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainMaterials_Retail_SalesTax__c` | A3 Main Materials Retail Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_A3_MainMaterials_Retail_StateTax__c` | A3 Main Materials Retail State Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_CPI_Retail_StateTax__c` | CPI Retail State Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_Charge_MainMaterials_SalesTax__c` | Charge Main Materials Sales Tax | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_County_Taxable_Amount_Cap__c` | County Taxable Amount Cap | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_LaborCustomerPrice_Adjustment__c` | Labor Customer Price Adjustment | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_MaterialCustomerPrice_Adjustment__c` | Material Customer Price Adjustment | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_ProLaborEffectiveMarkup_Adj__c` | ProLabor Effective Markup Adj | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_ProLaborSalesCommAmount_Adj__c` | ProLabor Sales Comm Amount Adj | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_ProLaborSalesCommPercent_Adj__c` | ProLabor Sales Comm Adj (%) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_ProLabor_Commissionable_Cost_Adj__c` | ProLabor Commissionable_Cost Adj | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_ProServicesCustomerPrice_Adjustment__c` | ProServices Customer Price Adjustment | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_ProdMatEffectiveMarkup_Adj__c` | ProdMat Effective Markup Adj | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_ProdMatSalesCommAmount_Adj__c` | ProdMat Sales Comm Amount Adj | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_ProdMatSalesCommPercent_Adj__c` | ProdMat Sales Comm Adj (%) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_ProdMat_Commissionable_Cost_Adj__c` | ProdMat Commissionable Cost Adj | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_ProductCustomerPrice_Adjustment__c` | Product Customer Price Adjustment | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_SalesCommAmount_Adj__c` | Total Sales Comm Amount Adj | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_SalesTax_Adjustment__c` | Sales Tax Adjustment | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_ShowInstallerSummary__c` | Show Installer Summary | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_Finalized_Date__c` | Finalized Date | date | `date` |  |  |  |
| `bpmpro3__SD_Is_Finalized__c` | Is Finalized | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_Is_Clone__c` | Is Clone | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_PriceAnchoringLabel__c` | Price Anchoring Label | string | `varchar(100)` |  |  |  |
| `bpmpro3__SD_BypassProductVendorImages__c` | Bypass Product Vendor Images | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_Door_Count__c` | Door Count | double | `float8` |  |  |  |
| `bpmpro3__SD_Lock_Cost__c` | Lock Cost | boolean | `boolean` |  |  |  |
| `bpmpro3__SD_Window_Count__c` | Window Count | double | `float8` |  |  |  |
| `bpmpro3__SD_CPI_ProductCostBasis_Flow__c` | CPI Product Cost Basis Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SD_C_Labor_Cost_NonPT_Flow__c` | C Labor Cost NonPT Flow | currency | `numeric(18,2)` |  |  |  |

### Picklist Values

**Document Type** (`bpmpro3__Document_Type_Picklist__c`):
- Change Order = `Change Order`
- Contract = `Contract`
- Proposal = `Proposal`
- Proposal Summary = `Proposal Summary`
- Service Contract = `Service Contract`
- Service Proposal = `Service Proposal`

**Permit Fees Treatment** (`bpmpro3__Permit_Fees__c`):
- Excluded = `Excluded`
- Included = `Included`

**Sales Tax Treatment** (`bpmpro3__SalesTaxTreatment__c`):
- Annual Resale Certificate - Tax Exempt = `Annual Resale Certificate - Tax Exempt`
- Export Sale - Tax Exempt = `Export Sale - Tax Exempt`
- Non-Taxable = `Non-Taxable`
- Retail Sale Tax 7% = `Retail Sale Tax 7%`
- Taxable = `Taxable`

**Sales Commission Basis** (`bpmpro3__Sales_Commission_Basis__c`):
- [1] Cost-Based Commission = `[1] Cost-Based Commission`
- [2] Revenue-Based Commission = `[2] Revenue-Based Commission`
- [3] Profit-Based Commission = `[3] Profit-Based Commission`

**SalesDoc Status** (`bpmpro3__Sales_Document_Status__c`):
- Unquoted = `Unquoted`
- Being Quoted = `Being Quoted`
- Booked = `Booked`
- Sold = `Sold`
- Superseded = `Superseded`
- Canceled = `Canceled`
- Lost = `Lost`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| APXT_CongaSign__Transaction__c | Parent_a1Z__c | APXT_CongaSign_Transactions__r | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__A2_Labor_Only_Item__c | bpmpro3__SalesDoc_A2__c | bpmpro3__A2_Labor_Item_Relationship__r | Yes |
| bpmpro3__A3_LaborItems__c | bpmpro3__SalesDoc_A3__c | bpmpro3__A3_Labor_Item_Relationship__r | Yes |
| bpmpro3__CPI_Configure_Pricing_Items__c | bpmpro3__CPI_Sales_Document__c | bpmpro3__Configurable_Pricing_Items__r | Yes |
| bpmpro3__Deal_Sheet__c | bpmpro3__DS_SalesDocument__c | bpmpro3__Sales_Commission_Calcs__r | No |
| bpmpro3__ProductItem__c | bpmpro3__SalesDoc_A1__c | bpmpro3__Product_Item_Relationship__r | Yes |
| bpmpro3__SalesDoc_Credit_Memo__c | bpmpro3__SDCM_Sales_Document__c | bpmpro3__SalesDoc_Credit_Memos__r | No |
| bpmpro3__SalesDoc_Invoice__c | bpmpro3__SDI_Sales_Document__c | bpmpro3__Project_Invoice_Items__r | No |
| bpmpro3__SpecialtyItem__c | bpmpro3__SalesDoc_C__c | bpmpro3__Specialty_Item_Relationship__r | Yes |

---

## SalesDoc Clause (`bpmpro3__SalesDoc_Clauses__c`) {#bpmpro3salesdocclausesc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1V |
| Fields | 20 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Clause | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__SDC_Clause_Type__c` | Clause Type | picklist | `text` |  |  |  |
| `bpmpro3__SDC_Active__c` | Active | boolean | `boolean` |  |  |  |
| `bpmpro3__SDC_Change_Order_Clause__c` | Change Order Clause | boolean | `boolean` |  |  |  |
| `bpmpro3__SDC_Clause_Index__c` | Index | double | `numeric(11,1)` | Yes |  |  |
| `bpmpro3__SDC_Clause_Text__c` | Clause Text | textarea | `text` |  |  |  |
| `bpmpro3__SDC_Clause_Title__c` | Title | textarea | `text` |  |  |  |
| `bpmpro3__SDC_Contract_Clause__c` | Contract Clause | boolean | `boolean` |  |  |  |
| `bpmpro3__SDC_Proposal_Clause__c` | Proposal Clause | boolean | `boolean` |  |  |  |
| `bpmpro3__SDC_Service_Contract_Clause__c` | Service Contract Clause | boolean | `boolean` |  |  |  |

### Picklist Values

**Clause Type** (`bpmpro3__SDC_Clause_Type__c`):
- Change Order = `Change Order`
- Contract = `Contract`
- Proposal = `Proposal`
- Service Contract = `Service Contract`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## SalesDoc Credit Memo (`bpmpro3__SalesDoc_Credit_Memo__c`) {#bpmpro3salesdoccreditmemoc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1n |
| Fields | 23 |
| Relationships | 28 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Sales Doc Credit Memo Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__SDCM_Applied_To_Invoice__c` | Applied To Invoice | reference | `uuid` |  |  | -> bpmpro3__SalesDoc_Invoice__c (Lookup) |
| `bpmpro3__SDCM_Auto_Applied__c` | Auto Applied | boolean | `boolean` |  |  |  |
| `bpmpro3__SDCM_County_Tax_Amount__c` | County Tax Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDCM_Credit_Amount__c` | Credit Amount | currency | `numeric(18,2)` | Yes |  |  |
| `bpmpro3__SDCM_Credit_Date__c` | Credit Date | date | `date` | Yes |  |  |
| `bpmpro3__SDCM_Credit_Memo_Type__c` | Credit Memo Type | picklist | `text` |  |  |  |
| `bpmpro3__SDCM_Description__c` | Description | textarea | `text` |  |  |  |
| `bpmpro3__SDCM_Remark__c` | Remark | string | `varchar(255)` |  |  |  |
| `bpmpro3__SDCM_Reversed_Tax_Amount__c` | Reversed Tax Amount | currency | `numeric(18,2)` | Yes |  |  |
| `bpmpro3__SDCM_Sales_Document__c` | Sales Document | reference | `uuid` | Yes |  | -> bpmpro3__Sales_Document__c (Lookup) |
| `bpmpro3__SDCM_State_Tax_Amount__c` | State Tax Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDCM_Total_Tax__c` | Total Tax % | percent | `numeric(5,2)` |  |  |  |

### Picklist Values

**Credit Memo Type** (`bpmpro3__SDCM_Credit_Memo_Type__c`):
- Discount = `Discount`
- Refund = `Refund`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Sales Document Invoice (`bpmpro3__SalesDoc_Invoice__c`) {#bpmpro3salesdocinvoicec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1W |
| Fields | 52 |
| Relationships | 29 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | SalesDoc Invoice | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__SDI_Project_Invoice__c` | Project Invoice | reference | `uuid` | Yes |  | -> bpmpro3__Project_Invoice__c (MasterDetail) |
| `bpmpro3__SDI_Description__c` | Description | textarea | `text` |  |  |  |
| `bpmpro3__SDI_Quantity__c` | Quantity | double | `numeric(14,2)` |  |  |  |
| `bpmpro3__SDI_Sales_Document__c` | SalesDoc | reference | `uuid` | Yes |  | -> bpmpro3__Sales_Document__c (Lookup) |
| `bpmpro3__SDI_Tax_Rate__c` | Tax Rate | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SDI_Taxable_Item__c` | Taxable Item | boolean | `boolean` |  |  |  |
| `bpmpro3__SDI_Unit_Price__c` | Invoice Pretax Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_Balance_Due__c` | Project Balance Due | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_Extended_Price__c` | Pretax Invoice Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_Extended_Tax_Amount__c` | Extended Tax Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_Project_ID__c` | Project ID | string | `text` |  |  |  |
| `bpmpro3__SDI_Project_Name__c` | Project Name | string | `text` |  |  |  |
| `bpmpro3__SDI_Sales_Document_Name__c` | SalesDoc Name | string | `text` |  |  |  |
| `bpmpro3__SDI_Tax_Amount__c` | Tax Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_Total_Item_Price__c` | Total Invoice Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_Prorated_Sales_County_Tax__c` | Prorated Sales County Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_Prorated_Sales_State_Tax__c` | Prorated Sales State Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_Prorated_Sales_Tax__c` | (Deprecated) Prorated Sales Tax | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_SalesDoc_Number_Name__c` | SalesDoc # Name | string | `text` |  |  |  |
| `bpmpro3__SDI_Prorated_SalesTax__c` | Prorated Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Discount_Percent__c` | % of SalesDoc LWC | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SDI_QB_Invoice_Id__c` | QB Invoice Id | string | `varchar(30)` |  |  |  |
| `bpmpro3__SDI_Total_Paid_Apex__c` | Total Paid Apex | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Sales_Doc_Invoice_Amount__c` | SalesDoc Invoice Amount * | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_Payment_Status__c` | Payment Status | string | `text` |  |  |  |
| `bpmpro3__SDI_SalesDoc_Balance_Due__c` | SalesDoc Balance Due | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_Total_Paid__c` | Total Paid | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_PercentageSalesDoc_RO__c` | % of SalesDoc | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__SDI_SalesDocGrandTotal__c` | SalesDoc Grand Total | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_TotalLaborCustomerPrice__c` | Total Labor Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_TotalMatEquipCustomerPrice__c` | Total MatEquip Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_TotalPlansPackageCustomerPrice__c` | Total Plans Package Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_TotalProServicesCustomerPrice__c` | Total ProServices Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_TotalProductCustomerPrice__c` | Total Product Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_ProratedLaborCustomerPrice__c` | Prorated Labor Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_ProratedMatEquipCustomerPrice__c` | Prorated MatEquip Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_ProratedPlansPackageCustomerPrice__c` | Prorated Plans Package Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_ProratedProServicesCustomerPrice__c` | Prorated ProServices Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_ProratedProductCustomerPrice__c` | Prorated Product Customer Price | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Sales_Doc_Invoice_Amount_Currency__c` | SalesDoc Invoice Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__SDI_SalesDocNumber__c` | SalesDoc # | string | `text` |  |  |  |
| `bpmpro3__SDI_Total_Credit_Memo_Amount__c` | Total Credit Memo Amount | currency | `numeric(18,2)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__Invoice_Payment__c | bpmpro3__IP_SalesDoc_Invoice__c | bpmpro3__Invoice_Payments__r | No |
| bpmpro3__SalesDoc_Credit_Memo__c | bpmpro3__SDCM_Applied_To_Invoice__c | bpmpro3__SalesDoc_Credit_Memos__r | No |

---

## Service Ticket (`bpmpro3__Service_Ticket__c`) {#bpmpro3serviceticketc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1t |
| Fields | 43 |
| Relationships | 35 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Service Ticket | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__SVC_Account__c` | Account | reference | `uuid` |  |  | -> Account (Lookup) |
| `bpmpro3__SVC_Assigned_To__c` | Assigned To | reference | `uuid` |  |  | -> User (Lookup) |
| `bpmpro3__SVC_Billable__c` | Billable | boolean | `boolean` |  |  |  |
| `bpmpro3__SVC_Billed__c` | Billed | boolean | `boolean` |  |  |  |
| `bpmpro3__SVC_Call_In_Date__c` | Call In Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__SVC_Completed_Date__c` | Completed Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__SVC_Created_by_User__c` | Created by User | reference | `uuid` |  |  | -> User (Lookup) |
| `bpmpro3__SVC_Customer_Portal_URL__c` | Customer Portal URL | string | `text` |  |  |  |
| `bpmpro3__SVC_External_Ticket_ID__c` | External Ticket ID | string | `varchar(100)` |  |  |  |
| `bpmpro3__SVC_Internal_Notes__c` | Internal Notes | textarea | `text` |  |  |  |
| `bpmpro3__SVC_Primary_Contact__c` | Primary Contact | reference | `uuid` |  |  | -> Contact (Lookup) |
| `bpmpro3__SVC_Priority__c` | Priority | picklist | `text` |  |  |  |
| `bpmpro3__SVC_Problem_Detail__c` | Problem Detail | textarea | `text` |  |  |  |
| `bpmpro3__SVC_Problem_Summary__c` | Problem Summary | string | `varchar(255)` |  |  |  |
| `bpmpro3__SVC_Resolution_Notes__c` | Resolution Notes | textarea | `text` |  |  |  |
| `bpmpro3__SVC_Scheduled_End_DateTime__c` | Scheduled End Date Time | datetime | `timestamptz` |  |  |  |
| `bpmpro3__SVC_Scheduled_Start_DateTime__c` | Scheduled Start Date Time | datetime | `timestamptz` |  |  |  |
| `bpmpro3__SVC_Service_City__c` | Service City | string | `varchar(100)` |  |  |  |
| `bpmpro3__SVC_Service_State__c` | Service State | string | `varchar(100)` |  |  |  |
| `bpmpro3__SVC_Service_Street__c` | Service Street | string | `varchar(100)` |  |  |  |
| `bpmpro3__SVC_Service_Type__c` | Service Type | picklist | `text` |  |  |  |
| `bpmpro3__SVC_Service_Zip__c` | Service Zip | string | `varchar(50)` |  |  |  |
| `bpmpro3__SVC_Source__c` | Source | picklist | `text` |  |  |  |
| `bpmpro3__SVC_Status__c` | Status | picklist | `text` |  |  |  |
| `bpmpro3__SVC_Target_Response_Date__c` | Target Response Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__SVC_Days_Open__c` | Days Open | double | `float8` |  |  |  |
| `bpmpro3__SVC_Hours_to_Response__c` | Hours to Response | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__SVC_Is_Overdue__c` | Is Overdue | boolean | `boolean` |  |  |  |
| `bpmpro3__SVC_SLA_Breach__c` | SLA Breach | boolean | `boolean` |  |  |  |
| `bpmpro3__SVC_Scheduled_Time__c` | Scheduled Time | string | `text` |  |  |  |
| `bpmpro3__SVC_Service_Full_Address__c` | Service Full Address | string | `text` |  |  |  |

### Picklist Values

**Priority** (`bpmpro3__SVC_Priority__c`):
- Low = `Low`
- Normal = `Normal`
- High = `High`
- Emergency = `Emergency`

**Service Type** (`bpmpro3__SVC_Service_Type__c`):
- Warranty = `Warranty`
- Repair = `Repair`
- Maintenance = `Maintenance`
- Inspection = `Inspection`
- Emergency = `Emergency`

**Source** (`bpmpro3__SVC_Source__c`):
- Phone = `Phone`
- Email = `Email`
- Web Form = `Web Form`
- Portal = `Portal`
- Mobile App = `Mobile App`
- Walk-In = `Walk-In`
- Other = `Other`

**Status** (`bpmpro3__SVC_Status__c`):
- New = `New`
- Scheduled = `Scheduled`
- In Progress = `In Progress`
- Completed = `Completed`
- Closed = `Closed`
- Canceled = `Canceled`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Specialty Item (`bpmpro3__SpecialtyItem__c`) {#bpmpro3specialtyitemc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1a |
| Fields | 166 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Item Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__SalesDoc_C__c` | SalesDoc | reference | `uuid` | Yes |  | -> bpmpro3__Sales_Document__c (MasterDetail) |
| `bpmpro3__C_Favorite__c` | Favorite | boolean | `boolean` |  |  |  |
| `bpmpro3__C_Item_Price_Flow_Ext__c` | Item Price Flow [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Labor_Description__c` | Labor Description | textarea | `text` |  |  |  |
| `bpmpro3__C_Material_Price_Flow_Ext__c` | C Material Price Flow [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Taxable__c` | Material Taxable | boolean | `boolean` |  |  |  |
| `bpmpro3__C_Material_Wholesale_CountyTax_UE_Unit__c` | Material County Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Wholesale_SalesTax_UE_Unit__c` | Material Sales Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Wholesale_StateTax_UE_Unit__c` | Material State Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Materials_Description__c` | Materials Description | textarea | `text` |  |  |  |
| `bpmpro3__C_ProServices_Description__c` | Professional Services Description | textarea | `text` |  |  |  |
| `bpmpro3__C_Pro_Services_Description__c` | Professional Services Desc - Deprecated | textarea | `text` |  |  |  |
| `bpmpro3__C_ProdMat_Cost_Flow_Ext__c` | ProdMat Cost Flow [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_ProdMat_Price_Flow_Ext__c` | ProdMat Price Flow [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Description__c` | Product Description | textarea | `text` |  |  |  |
| `bpmpro3__C_Product_Price_Flow_Ext__c` | Product Price (Deprecated) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Taxable__c` | Product Taxable | boolean | `boolean` |  |  |  |
| `bpmpro3__C_Product_Wholesale_CountyTax_UE_Unit__c` | Product County Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Wholesale_SalesTax_UE_Unit__c` | Product Sales Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Wholesale_StateTax_UE_Unit__c` | Product State Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_SalesDoc_Total_Labor__c` | SalesDoc Total Labor Flow | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Skip_Specialty_Flow__c` | Skip Specialty Item Flow | boolean | `boolean` |  |  |  |
| `bpmpro3__C_Vendor_Quote_Number__c` | Vendor's Quote # | string | `varchar(100)` |  |  |  |
| `bpmpro3__C_Vendor__c` | Vendor | reference | `uuid` |  |  | -> Account (Lookup) |
| `bpmpro3__Chargeback_Checkbox__c` | Chargeback | boolean | `boolean` |  |  |  |
| `bpmpro3__Confidential_Checkbox__c` | Confidential | boolean | `boolean` |  |  |  |
| `bpmpro3__Excluded_Checkbox__c` | Excluded | boolean | `boolean` |  |  |  |
| `bpmpro3__Internal_Notes__c` | Internal Notes for Accounting | textarea | `text` |  |  |  |
| `bpmpro3__Labor_Cost_Lump_Sum__c` | Labor Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Materials_Lump_Sum_Cost__c` | Material Cost Pretax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Optional_Checkbox__c` | Optional | boolean | `boolean` |  |  |  |
| `bpmpro3__Pass_Through_Checkbox__c` | Pass-Through Item | boolean | `boolean` |  |  |  |
| `bpmpro3__Position__c` | Position | double | `float8` |  |  |  |
| `bpmpro3__Pro_Services_Lump_Sum_Cost__c` | Professional Services Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Product_Lump_Sum_Cost__c` | Product Cost Pretax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Quantity__c` | Quantity | double | `float8` |  |  |  |
| `bpmpro3__Remarks__c` | Remarks | textarea | `text` |  |  |  |
| `bpmpro3__A3_ProLaborMultiplier__c` | ProLaborMultiplier | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__A3_ProdMatMultiplier__c` | ProdMatMultiplier | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__C_Exclude_Labor__c` | Exclude Labor | boolean | `boolean` |  |  |  |
| `bpmpro3__C_Item_Price_FS_Ext__c` | Item Price FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_LaborEstimatedProfits__c` | Labor Profits [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_LaborSalesCommAmount__c` | Labor Sales Commission ($) | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_LaborSalesCommPercent__c` | Labor Sales Commission (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__C_Labor_Cost_NonPT_Ext__c` | Labor Cost NonPT [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Line_Item_Wholesale_SalesTax_Ext__c` | Line Item Wholesale Sales Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_MaterialEstimatedProfits__c` | Material Profits SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_MaterialSalesCommAmount__c` | Material Sales Commission NonPT SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Cost_FS_Ext__c` | Material Cost FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Cost_FS_Unit__c` | Material Cost FS [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Cost_NonPT_Ext__c` | Material Cost NonPT SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Cost_NonPT_FS_Ext__c` | Material Cost NonPT FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Cost_PT_FS_Ext__c` | Material Cost PT FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Pretax_Price_Unit__c` | Material Price SO [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Price_FS_Ext__c` | Material Price FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Price_FS_Unit__c` | Material Price FS [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Profits_FS__c` | Material Profits FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Retail_CountyTax_Ext__c` | Material Retail County Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Retail_CountyTax_Unit__c` | Material Retail County Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Retail_Price_Ext__c` | Material Retail Price [Extended] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Retail_StateTax_Ext__c` | Material Retail State Tax [Extended] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Retail_StateTax_Unit__c` | Material Retail State Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_SalesComm_NonPT_FS__c` | Material Sales Commission NonPT FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Wholesale_CountyTax_Ext__c` | Material Wholesale County Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Wholesale_CountyTax_Unit__c` | Material Wholesale County Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Wholesale_SalesTax_Ext__c` | Material Wholesale Sales Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Wholesale_SalesTax_Unit__c` | Material Wholesale Sales Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Wholesale_StateTax_Ext__c` | Material Wholesale State Tax [Extended] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Material_Wholesale_StateTax_Unit__c` | Material Wholesale State Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Price_Anchoring_Multiplier__c` | Price Anchoring Multiplier | double | `numeric(18,4)` |  |  |  |
| `bpmpro3__C_Pro_Services_NonPT_Cost_Ext__c` | Pro Services Non-Pass-Through Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_ProdMat_Cost_FS_Ext__c` | ProdMat Cost FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_ProdMat_Cost_FS_PT_Ext__c` | ProdMat Cost FS PT [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_ProdMat_Cost_SO_PT_Ext__c` | ProdMat Cost SO PT [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_ProdMat_Price_FS_Ext__c` | ProdMat Price FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_ProductEstimatedProfits__c` | Product Profits SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_ProductSalesCommAmount__c` | Product Sales Commission NonPT SO | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_ProductSalesCommPercent__c` | Product Sales Commission (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__C_Product_Cost_Basis_NonPT_Ext__c` | Product Cost Basis NonPT [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Cost_FS_Ext__c` | Product Cost FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Cost_FS_Unit__c` | Product Cost FS [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Cost_NonPT_Ext__c` | Product Cost NonPT SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Cost_NonPT_FS_Ext__c` | Product Cost NonPT FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Cost_PT_FS_Ext__c` | Product Cost PT FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Pretax_Price_Unit__c` | Product Price SO [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Price_FS_Ext__c` | Product Price FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Price_FS_Unit__c` | Product Price FS [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Profits_FS__c` | Product Profits FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Retail_CountyTax_Ext__c` | Product Retail County Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Retail_CountyTax_Unit__c` | Product Retail County Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Retail_Price_Ext__c` | Product Retail Price [Extended] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Retail_SalesTax__c` | Product Retail Sales Tax | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Retail_StateTax_Ext__c` | Product Retail State Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Retail_StateTax_Unit__c` | Product Retail State Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_SalesComm_NonPT_FS__c` | Product Sales Commission NonPT FS | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Wholesale_CountyTax_Ext__c` | Product Wholesale County Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Wholesale_CountyTax_Unit__c` | Product Wholesale County Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Wholesale_SalesTax_Ext__c` | Product Wholesale Sales Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Wholesale_SalesTax_Unit__c` | Product Wholesale Sales Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Wholesale_StateTax_Ext__c` | Product Wholesale State Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Product_Wholesale_StateTax_Unit__c` | Product Wholesale State Tax [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Project__c` | Project | string | `text` |  |  |  |
| `bpmpro3__C_ProservicesEstimatedProfits__c` | Pro Services Profits [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_ProservicesSalesCommAmount__c` | Proservices Sales Commission  Amount | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_SalesDoc_Total_Labor_UI__c` | SalesDoc Total Labor | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_SalesDocument_Total_Labor__c` | SalesDoc Total Labor | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Sales_Commission_Basis_Explained__c` | Sales Commission Basis Explained | string | `text` |  |  |  |
| `bpmpro3__C_Sales_Commission_Basis__c` | Sales Commission Basis | string | `text` |  |  |  |
| `bpmpro3__C_Sales_Document_Grand_Total__c` | SalesDoc Grand Total | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__C_Sales_Document_Name__c` | SalesDoc Name | string | `text` |  |  |  |
| `bpmpro3__C_Sales_Document_Status__c` | SalesDoc Status | string | `text` |  |  |  |
| `bpmpro3__Confi_Cost_FS_Ext__c` | Confidential Cost FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Confi_Price_FS_Ext__c` | Confidential Price FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Confi_ProdMat_Cost_FS_Ext__c` | Confidential ProdMat Cost FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Confi_Product_Cost_FS_Ext__c` | Confidential Product Cost FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Confidential_ProdMat_Price_FS_Ext__c` | Confidential ProdMat Price FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Confidential_ProdMat_Price_SO_Ext__c` | Confidential ProdMat Price SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Ext_Confidential_ProLabor_Cost_SI__c` | Confidential ProLabor Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Ext_Confidential_ProLabor_Price_SI__c` | Confidential ProLabor Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Ext_Confidential_ProdMaterial_Cost_SI__c` | Confidential ProdMat Cost SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Ext_Confidential_ProdMaterial_Price_SI__c` | Confidential ProdMat Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Ext_Confidential_Product_Cost__c` | Confidential Product Cost SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Ext_ProLabor_Price_SI__c` | ProLabor Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Ext_ProdMaterial_Price_SI__c` | ProdMat Price SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Confidential_Cost__c` | Confidential Cost SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Confidential_Price__c` | Confidential Price SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Item_Customer_Price__c` | Item Price SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Labor_Cost_PT__c` | Labor Cost Pass-Through [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Labor_Cost__c` | Labor Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Labor_Price__c` | Labor Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Material_Cost_PT__c` | Material Cost PT SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Material_Cost__c` | Material Cost Pretax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Material_Price__c` | Material Price SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_ProLabor_Cost__c` | ProLabor Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Pro_Services_Cost_PT__c` | Pro Services Pass-Through Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Pro_Services_Cost__c` | Pro Services Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Pro_Services_Price__c` | Pro Services Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_ProductMaterial_Cost__c` | ProdMat Cost SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Product_Cost_PT__c` | Product Cost PT SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Product_Cost__c` | Product Cost Pretax SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Product_Price__c` | Product Price SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Sales_Tax__c` | Line Item Retail Sales Tax [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Total_Item_Cost_SI_Q__c` | Total Item Cost Qualified [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Extended_Total_Item_Cost__c` | Total Item Cost [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Labor_Unit_Cost__c` | Labor Cost [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Material_Cost_Basis_NonPT_Ext__c` | Material Cost Basis NonPT [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Materials_Unit_Cost__c` | Materials Unit Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__NonConfi_ProLabor_Price_Ext__c` | NonConfidential ProLabor Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__NonConfi_ProdMat_Price_Ext__c` | NonConfidential ProdMat Price [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__NonConfi_ProdMat_Price_FS_Ext__c` | NonConfidential ProdMat Price FS [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__NonConfi_ProdMat_Price_SO_Ext__c` | NonConfidential ProdMat Price SO [Ext] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Pro_Services_Unit_Cost__c` | Pro Services Cost [Unit] | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Product_Unit_Cost__c` | Product Unit Cost | currency | `numeric(18,2)` |  |  |  |
| `bpmpro3__Specialty_Item_Labor_Markup__c` | Labor Markup (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__Specialty_Item_Product_Markup__c` | ProdMat Markup (%) | percent | `numeric(5,2)` |  |  |  |
| `bpmpro3__C_Vendor_Name__c` | Vendor Name | string | `text` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Time Entry (`bpmpro3__Time_Entry__c`) {#bpmpro3timeentryc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1b |
| Fields | 20 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Time Entry | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__TE_Timesheet__c` | Timesheet | reference | `uuid` | Yes |  | -> bpmpro3__Timesheet__c (MasterDetail) |
| `bpmpro3__TE_Activity_Type__c` | Activity Type | picklist | `text` | Yes |  |  |
| `bpmpro3__TE_BreakTime_Minutes__c` | Break Time (Minutes) | double | `float8` |  |  |  |
| `bpmpro3__TE_Clock_In_Time__c` | Clock-In Time | datetime | `timestamptz` |  |  |  |
| `bpmpro3__TE_Clock_Out_Time__c` | Clock-Out Time | datetime | `timestamptz` |  |  |  |
| `bpmpro3__TE_Date__c` | Date | date | `date` |  |  |  |
| `bpmpro3__TE_Notes__c` | Notes | textarea | `text` |  |  |  |
| `bpmpro3__TE_Project__c` | Project | reference | `uuid` |  |  | -> bpmpro3__Project__c (Lookup) |
| `bpmpro3__TE_Employee_FullName__c` | Employee Full Name | string | `text` |  |  |  |
| `bpmpro3__TE_Hours_Worked__c` | Hours Worked | double | `numeric(18,2)` |  |  |  |

### Picklist Values

**Activity Type** (`bpmpro3__TE_Activity_Type__c`):
- Admin = `Admin`
- Installation = `Installation`
- Miscellaneous Labor = `Miscellaneous Labor`
- Office = `Office`
- Other = `Other`
- Repair = `Repair`
- Service and Maintenance = `Service and Maintenance`
- Travel = `Travel`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Timesheet (`bpmpro3__Timesheet__c`) {#bpmpro3timesheetc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1c |
| Fields | 21 |
| Relationships | 34 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Timesheet # | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__TS_Timesheet_Status__c` | Timesheet Status | picklist | `text` |  |  |  |
| `bpmpro3__TS_Employee_ID__c` | Employee ID | string | `varchar(100)` |  | Yes |  |
| `bpmpro3__TS_Employee_Name__c` | Employee Name | reference | `uuid` | Yes |  | -> Contact (Lookup) |
| `bpmpro3__TS_Notes__c` | Notes | textarea | `text` |  |  |  |
| `bpmpro3__TS_Supervisor__c` | Supervisor | reference | `uuid` |  |  | -> Contact (Lookup) |
| `bpmpro3__TS_Week_StartDate__c` | Week Start Date | date | `date` |  |  |  |
| `bpmpro3__TS_Employee_FullName__c` | Employee Full Name | string | `text` |  |  |  |
| `bpmpro3__TS_Week_EndDate__c` | Week End Date | date | `date` |  |  |  |
| `bpmpro3__TS_Total_HoursWorked__c` | Total Hours Worked | double | `numeric(18,2)` |  |  |  |

### Picklist Values

**Timesheet Status** (`bpmpro3__TS_Timesheet_Status__c`):
- Draft = `Draft`
- Submitted = `Submitted`
- Approved = `Approved`
- Returned for Edits = `Returned for Edits`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| bpmpro3__Time_Entry__c | bpmpro3__TE_Timesheet__c | bpmpro3__Time_Entries__r | Yes |

---

## Warehouse Log (`bpmpro3__Warehouse_Log__c`) {#bpmpro3warehouselogc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1d |
| Fields | 21 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Warehouse Log Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__WL_Product_Order__c` | Product Order | reference | `uuid` | Yes |  | -> bpmpro3__Orders__c (MasterDetail) |
| `bpmpro3__WL_Activity_Status__c` | Activity Status | picklist | `text` | Yes |  |  |
| `bpmpro3__WL_Activity_Type__c` | Activity Type | picklist | `text` | Yes |  |  |
| `bpmpro3__WL_Activity_Date__c` | Activity Date | date | `date` | Yes |  |  |
| `bpmpro3__WL_Comments__c` | Comments | textarea | `text` |  |  |  |
| `bpmpro3__WL_Handled_By__c` | Handled By | reference | `uuid` |  |  | -> Contact (Lookup) |
| `bpmpro3__WL_Pieces__c` | Pieces | double | `float8` |  |  |  |
| `bpmpro3__WL_Arrival_Code__c` | Arrival Code | double | `float8` |  |  |  |
| `bpmpro3__WL_Project__c` | Project | string | `text` |  |  |  |
| `bpmpro3__WL_Project_Number__c` | Project # | string | `text` |  |  |  |
| `bpmpro3__WL_Sales_Order_Amount__c` | Sales Order Amount | currency | `numeric(18,2)` |  |  |  |

### Picklist Values

**Activity Status** (`bpmpro3__WL_Activity_Status__c`):
- Complete = `Complete`
- Partial = `Partial`

**Activity Type** (`bpmpro3__WL_Activity_Type__c`):
- Check-In = `Check-In`
- Check-Out = `Check-Out`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Work Assignment (`bpmpro3__Work_Assignment__c`) {#bpmpro3workassignmentc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1e |
| Fields | 49 |
| Relationships | 33 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Work # | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `bpmpro3__WA_Project__c` | Project | reference | `uuid` | Yes |  | -> bpmpro3__Project__c (MasterDetail) |
| `bpmpro3__WA_Schedule_Status__c` | Schedule Status | picklist | `text` |  |  |  |
| `bpmpro3__WA_User_Email__c` | User Email Address | string | `text` |  |  |  |
| `bpmpro3__WA_Work_Type__c` | Work Type | picklist | `text` |  |  |  |
| `bpmpro3__WO_Assignment_Completion_Status__c` | Assignment Completion Status | picklist | `text` |  |  |  |
| `bpmpro3__WA_Assignment_Coordinator__c` | Assignment Coordinator | reference | `uuid` |  |  | -> Contact (Lookup) |
| `bpmpro3__WA_Assignment_Notes__c` | Assignment Notes | textarea | `text` |  |  |  |
| `bpmpro3__WA_End_DateTime__c` | End Date & Time | datetime | `timestamptz` |  |  |  |
| `bpmpro3__WA_Project_Completed__c` | Project Completed | boolean | `boolean` |  |  |  |
| `bpmpro3__WA_Resource_Name__c` | Resource Name | reference | `uuid` |  |  | -> Contact (Lookup) |
| `bpmpro3__WA_Send_Me_Notification_Copy__c` | Send Me Notification Copy | boolean | `boolean` |  |  |  |
| `bpmpro3__WA_Send_Notification_to_Coordinator__c` | Send Notification to Coordinator | boolean | `boolean` |  |  |  |
| `bpmpro3__WA_Send_Notification_to_Resource__c` | Send Notification to Resource | boolean | `boolean` |  |  |  |
| `bpmpro3__WA_Start_DateTime__c` | Start Date & Time | datetime | `timestamptz` |  |  |  |
| `bpmpro3__Billing_Contact_Name_Literal__c` | Billing Contact Name | string | `text` |  |  |  |
| `bpmpro3__WA_Account_Billing_Contact_Details__c` | Account Billing Contact Details | string | `text` |  |  |  |
| `bpmpro3__WA_Account_Name__c` | Account Name | string | `text` |  |  |  |
| `bpmpro3__WA_Assignment_Status__c` | Assignment Status | string | `text` |  |  |  |
| `bpmpro3__WA_Billing_Contact_Name_URL__c` | Billing Contact Name | string | `text` |  |  |  |
| `bpmpro3__WA_Billing_Email_Address__c` | Billing Email Address | string | `text` |  |  |  |
| `bpmpro3__WA_Billing_Phone_Number__c` | Billing Phone Number | string | `text` |  |  |  |
| `bpmpro3__WA_Coordinator_Email_Address__c` | Coordinator Email Address | string | `text` |  |  |  |
| `bpmpro3__WA_Coordinator_Full_Name__c` | Coordinator Full Name | string | `text` |  |  |  |
| `bpmpro3__WA_Days_to_Start__c` | Days to Start | double | `numeric(18,2)` |  |  |  |
| `bpmpro3__WA_End_Date__c` | End Date | date | `date` |  |  |  |
| `bpmpro3__WA_End_Day__c` | End Day | string | `text` |  |  |  |
| `bpmpro3__WA_End_Time__c` | End Time | string | `text` |  |  |  |
| `bpmpro3__WA_Project_Full_Address__c` | Project Full Address | string | `text` |  |  |  |
| `bpmpro3__WA_Resource_Email_Address__c` | Resource Email Address | string | `text` |  |  |  |
| `bpmpro3__WA_Resource_Full_Name__c` | Resource Full Name | string | `text` |  |  |  |
| `bpmpro3__WA_Resource_and_Location__c` | Resource and Location | string | `text` |  |  |  |
| `bpmpro3__WA_Resource_and_Project__c` | Resource and Project | string | `text` |  |  |  |
| `bpmpro3__WA_Start_Date__c` | Start Date | date | `date` |  |  |  |
| `bpmpro3__WA_Start_Day__c` | Start Day | string | `text` |  |  |  |
| `bpmpro3__WA_Start_Time__c` | Start Time | string | `text` |  |  |  |
| `bpmpro3__WA_Start_Time_old__c` | Start Time Old | time | `time` |  |  |  |
| `bpmpro3__WA_Work_Duration__c` | Work Duration (Days) | double | `float8` |  |  |  |
| `bpmpro3__WA_Days_Unconfirmed__c` | Days Unconfirmed | double | `float8` |  |  |  |

### Picklist Values

**Schedule Status** (`bpmpro3__WA_Schedule_Status__c`):
- Awaiting Scheduling = `Awaiting Scheduling`
- Canceled = `Canceled`
- Confirmed = `Confirmed`
- Tentative = `Tentative`

**Work Type** (`bpmpro3__WA_Work_Type__c`):
- Admin - Customer Communication = `Admin - Customer Communication`
- Admin - Sales Update = `Admin - Sales Update`
- Admin - Schedule Inspection = `Admin - Schedule Inspection`
- Admin - Vendor Coordination = `Admin - Vendor Coordination`
- Compliance - Legal Documentation = `Compliance - Legal Documentation`
- Finance - Payment Processing = `Finance - Payment Processing`
- Finance - Project Accounting = `Finance - Project Accounting`
- Labor - Cleanup = `Labor - Cleanup`
- Labor - Delivery Jobsite = `Labor - Delivery Jobsite`
- Labor - Final Measurements = `Labor - Final Measurements`
- Labor -  Finish Work = `Labor -  Finish Work`
- Labor - Jobsite Supervision = `Labor - Jobsite Supervision`
- Labor - Miscellaneous = `Labor - Miscellaneous`
- Labor -  Product Installation = `Labor -  Product Installation`
- Labor -  Service and Maintenance = `Labor -  Service and Maintenance`
- Labor - Structural Work = `Labor - Structural Work`
- Labor - Wait for Inspector = `Labor - Wait for Inspector`
- Labor -  Wait for Inspector = `Labor -  Wait for Inspector`
- Pro Services - Architectural Design = `Pro Services - Architectural Design`
- Pro Services - Building Permit Management = `Pro Services - Building Permit Management`
- Pro Services - Engineering Design = `Pro Services - Engineering Design`
- Pro Services - HOA Approval Coordination = `Pro Services - HOA Approval Coordination`
- Pro Services - NOC Registration = `Pro Services - NOC Registration`
- Pro Services - Permit Expediting = `Pro Services - Permit Expediting`
- Pro Services - Structural Engineering Design = `Pro Services - Structural Engineering Design`
- Sales - Estimating = `Sales - Estimating`
- Sales - Measurement Appointment = `Sales - Measurement Appointment`
- Sales - Presentation = `Sales - Presentation`

**Assignment Completion Status** (`bpmpro3__WO_Assignment_Completion_Status__c`):
- In Progress = `In Progress`
- Partially Completed = `Partially Completed`
- Completed with Issues = `Completed with Issues`
- Completed Successfully = `Completed Successfully`
- Failed = `Failed`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Campaign (`Campaign`) {#campaign}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 701 |
| Fields | 33 |
| Relationships | 33 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Campaign ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Name | string | `varchar(80)` | Yes |  |  |
| `ParentId` | Parent Campaign ID | reference | `uuid` |  |  | -> Campaign (Lookup) |
| `Type` | Type | picklist | `text` |  |  |  |
| `Status` | Status | picklist | `text` |  |  |  |
| `StartDate` | Start Date | date | `date` |  |  |  |
| `EndDate` | End Date | date | `date` |  |  |  |
| `ExpectedRevenue` | Expected Revenue in Campaign | currency | `numeric(18,2)` |  |  |  |
| `BudgetedCost` | Budgeted Cost in Campaign | currency | `numeric(18,2)` |  |  |  |
| `ActualCost` | Actual Cost in Campaign | currency | `numeric(18,2)` |  |  |  |
| `ExpectedResponse` | Expected Response (%) | percent | `numeric(5,2)` |  |  |  |
| `NumberSent` | Num Sent in Campaign | double | `float8` |  |  |  |
| `IsActive` | Active | boolean | `boolean` |  |  |  |
| `Description` | Description | textarea | `text` |  |  |  |
| `NumberOfLeads` | Leads in Campaign | int | `int4` | Yes |  |  |
| `NumberOfConvertedLeads` | Converted Leads in Campaign | int | `int4` | Yes |  |  |
| `NumberOfContacts` | Contacts in Campaign | int | `int4` | Yes |  |  |
| `NumberOfResponses` | Responses in Campaign | int | `int4` | Yes |  |  |
| `NumberOfOpportunities` | Opportunities in Campaign | int | `int4` | Yes |  |  |
| `NumberOfWonOpportunities` | Won Opportunities in Campaign | int | `int4` | Yes |  |  |
| `AmountAllOpportunities` | Value Opportunities in Campaign | currency | `numeric(18,2)` | Yes |  |  |
| `AmountWonOpportunities` | Value Won Opportunities in Campaign | currency | `numeric(18,2)` | Yes |  |  |
| `OwnerId` | Owner ID | reference | `uuid` | Yes |  | -> User (Lookup) |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `CampaignMemberRecordTypeId` | Record Type ID | reference | `uuid` |  |  | -> RecordType (Lookup) |

### Picklist Values

**Type** (`Type`):
- Event = `Event`
- Demo Signup / Trial = `Demo Signup / Trial`
- Email = `Email`
- Referral Program = `Referral Program`
- Search = `Search`
- Social Media = `Social Media`
- Thought Leadership = `Thought Leadership`
- Website Direct = `Website Direct`
- Other = `Other`

**Status** (`Status`):
- In Progress = `In Progress`
- Completed = `Completed`
- Aborted = `Aborted`
- Planned = `Planned`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| Campaign | ParentId | ChildCampaigns | No |
| CampaignMember | CampaignId | CampaignMembers | Yes |
| CampaignMemberStatus | CampaignId | CampaignMemberStatuses | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| ListEmail | CampaignId | ListEmails | No |
| ListEmailRecipientSource | SourceListId | ListEmailRecipientSources | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity | CampaignId | Opportunities | No |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |

---

## Campaign Member (`CampaignMember`) {#campaignmember}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 00v |
| Fields | 36 |
| Relationships | 12 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Campaign Member ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `CampaignId` | Campaign ID | reference | `uuid` | Yes |  | -> Campaign (Lookup) |
| `LeadId` | Lead ID | reference | `uuid` |  |  | -> Lead (Lookup) |
| `ContactId` | Contact ID | reference | `uuid` |  |  | -> Contact (Lookup) |
| `Status` | Status | picklist | `text` |  |  |  |
| `HasResponded` | Responded | boolean | `boolean` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `FirstRespondedDate` | First Responded Date | date | `date` |  |  |  |
| `Salutation` | Salutation | picklist | `text` |  |  |  |
| `Name` | Name | string | `varchar(255)` |  |  |  |
| `FirstName` | First Name | string | `varchar(40)` |  |  |  |
| `LastName` | Last Name | string | `varchar(80)` |  |  |  |
| `Title` | Title | string | `varchar(128)` |  |  |  |
| `Street` | Street | string | `varchar(255)` |  |  |  |
| `City` | City | string | `varchar(40)` |  |  |  |
| `State` | State/Province | string | `varchar(80)` |  |  |  |
| `PostalCode` | Zip/Postal Code | string | `varchar(20)` |  |  |  |
| `Country` | Country | string | `varchar(80)` |  |  |  |
| `Email` | Email | email | `text` |  |  |  |
| `Phone` | Phone | phone | `text` |  |  |  |
| `Fax` | Fax | phone | `text` |  |  |  |
| `MobilePhone` | Mobile | phone | `text` |  |  |  |
| `Description` | Description | textarea | `text` |  |  |  |
| `DoNotCall` | Do Not Call | boolean | `boolean` |  |  |  |
| `HasOptedOutOfEmail` | Email Opt Out | boolean | `boolean` |  |  |  |
| `HasOptedOutOfFax` | Fax Opt Out | boolean | `boolean` |  |  |  |
| `LeadSource` | Lead Source | picklist | `text` |  |  |  |
| `CompanyOrAccount` | Company (Account) | string | `varchar(255)` |  |  |  |
| `Type` | Type | string | `varchar(40)` |  |  |  |
| `LeadOrContactId` | Related Record ID | reference | `uuid` |  |  | -> Account, Contact, Lead (Lookup) |
| `LeadOrContactOwnerId` | Related Record Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |

### Picklist Values

**Status** (`Status`):
- Responded = `Responded`
- Sent = `Sent`

**Salutation** (`Salutation`):
- Mr. = `Mr.`
- Ms. = `Ms.`
- Mrs. = `Mrs.`
- Dr. = `Dr.`
- Prof. = `Prof.`
- Mx. = `Mx.`

**Lead Source** (`LeadSource`):
- Advertisement = `Advertisement`
- Customer Event = `Customer Event`
- Employee Referral = `Employee Referral`
- External Referral = `External Referral`
- Google AdWords = `Google AdWords`
- Other = `Other`
- Partner = `Partner`
- Purchased List = `Purchased List`
- Trade Show = `Trade Show`
- Webinar = `Webinar`
- Website = `Website`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| ListEmailIndividualRecipient | RecipientId | ListEmailIndividualRecipients | Yes |
| RecordAction | RecordId | RecordActions | Yes |

---

## Case (`Case`) {#case}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 500 |
| Fields | 38 |
| Relationships | 45 |
| Record Types | 1 |

### Record Types

| Name | Developer Name | Active | Default |
|------|----------------|--------|---------|
| PMT Project | PMT_Project | Yes | No |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Case ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `MasterRecordId` | Master Record ID | reference | `uuid` |  |  | -> Case (Lookup) |
| `CaseNumber` | Case Number | string | `varchar(30)` |  |  |  |
| `ContactId` | Contact ID | reference | `uuid` |  |  | -> Contact (Lookup) |
| `AccountId` | Account ID | reference | `uuid` |  |  | -> Account (Lookup) |
| `ParentId` | Parent Case ID | reference | `uuid` |  |  | -> Case (Lookup) |
| `SuppliedName` | Name | string | `varchar(80)` |  |  |  |
| `SuppliedEmail` | Email Address | email | `text` |  |  |  |
| `SuppliedPhone` | Phone | string | `varchar(40)` |  |  |  |
| `SuppliedCompany` | Company | string | `varchar(80)` |  |  |  |
| `Type` | Case Type | picklist | `text` |  |  |  |
| `RecordTypeId` | Record Type ID | reference | `uuid` |  |  | -> RecordType (Lookup) |
| `Status` | Status | picklist | `text` |  |  |  |
| `Reason` | Case Reason | picklist | `text` |  |  |  |
| `Origin` | Case Origin | picklist | `text` |  |  |  |
| `Subject` | Subject | string | `varchar(255)` |  |  |  |
| `Priority` | Priority | picklist | `text` |  |  |  |
| `Description` | Description | textarea | `text` |  |  |  |
| `IsClosed` | Closed | boolean | `boolean` |  |  |  |
| `ClosedDate` | Closed Date | datetime | `timestamptz` |  |  |  |
| `IsEscalated` | Escalated | boolean | `boolean` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `ContactPhone` | Contact Phone | phone | `text` |  |  |  |
| `ContactMobile` | Contact Mobile | phone | `text` |  |  |  |
| `ContactEmail` | Contact Email | email | `text` |  |  |  |
| `ContactFax` | Contact Fax | phone | `text` |  |  |  |
| `Comments` | Internal Comments | textarea | `text` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `inov8__PMT_Days_Open__c` | PMT Days Open | double | `float8` |  |  |  |
| `inov8__PMT_Project__c` | PMT Project | reference | `uuid` |  |  | -> inov8__PMT_Project__c (Lookup) |
| `inov8__PMT_Program__c` | PMT Program | string | `text` |  |  |  |

### Picklist Values

**Case Type** (`Type`):
- Problem = `Problem`
- Feature Request = `Feature Request`
- Question = `Question`

**Status** (`Status`):
- On Hold = `On Hold`
- Escalated = `Escalated`
- Closed = `Closed`
- New = `New`

**Case Reason** (`Reason`):
- User didn't attend training = `User didn't attend training`
- Complex functionality = `Complex functionality`
- Existing problem = `Existing problem`
- Instructions not clear = `Instructions not clear`
- New problem = `New problem`

**Case Origin** (`Origin`):
- Email = `Email`
- Phone = `Phone`
- Web = `Web`

**Priority** (`Priority`):
- High = `High`
- Medium = `Medium`
- Low = `Low`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| Case | ParentId | Cases | No |
| CaseComment | ParentId | CaseComments | Yes |
| CaseContactRole | CasesId | CaseContactRoles | Yes |
| CaseHistory2 | CaseId | N/A | Yes |
| CaseSolution | CaseId | CaseSolutions | Yes |
| CaseTeamMember | ParentId | TeamMembers | Yes |
| CaseTeamTemplateRecord | ParentId | TeamTemplateRecords | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| ListEmail | RelatedToId | ListEmails | No |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| SocialPost | ParentId | Posts | No |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| WorkOrder | CaseId | WorkOrders | No |
| dfsle__EnvelopeStatus__c | dfsle__Case__c | dfsle__DocuSign_Status__r | No |

---

## Contact (`Contact`) {#contact}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 003 |
| Fields | 75 |
| Relationships | 90 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Contact ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `MasterRecordId` | Master Record ID | reference | `uuid` |  |  | -> Contact (Lookup) |
| `AccountId` | Account ID | reference | `uuid` |  |  | -> Account (Lookup) |
| `IsPersonAccount` | Is Person Account | boolean | `boolean` |  |  |  |
| `LastName` | Last Name | string | `varchar(80)` | Yes |  |  |
| `FirstName` | First Name | string | `varchar(40)` |  |  |  |
| `Salutation` | Salutation | picklist | `text` |  |  |  |
| `MiddleName` | Middle Name | string | `varchar(40)` |  |  |  |
| `Suffix` | Suffix | string | `varchar(40)` |  |  |  |
| `Name` | Full Name | string | `varchar(121)` | Yes |  |  |
| `OtherStreet` | Other Street | textarea | `text` |  |  |  |
| `OtherCity` | Other City | string | `varchar(40)` |  |  |  |
| `OtherState` | Other State/Province | string | `varchar(80)` |  |  |  |
| `OtherPostalCode` | Other Zip/Postal Code | string | `varchar(20)` |  |  |  |
| `OtherCountry` | Other Country | string | `varchar(80)` |  |  |  |
| `OtherLatitude` | Other Latitude | double | `numeric(18,15)` |  |  |  |
| `OtherLongitude` | Other Longitude | double | `numeric(18,15)` |  |  |  |
| `OtherGeocodeAccuracy` | Other Geocode Accuracy | picklist | `text` |  |  |  |
| `OtherAddress` | Other Address | address | `jsonb` |  |  |  |
| `MailingStreet` | Mailing Street | textarea | `text` |  |  |  |
| `MailingCity` | Mailing City | string | `varchar(40)` |  |  |  |
| `MailingState` | Mailing State/Province | string | `varchar(80)` |  |  |  |
| `MailingPostalCode` | Mailing Zip/Postal Code | string | `varchar(20)` |  |  |  |
| `MailingCountry` | Mailing Country | string | `varchar(80)` |  |  |  |
| `MailingLatitude` | Mailing Latitude | double | `numeric(18,15)` |  |  |  |
| `MailingLongitude` | Mailing Longitude | double | `numeric(18,15)` |  |  |  |
| `MailingGeocodeAccuracy` | Mailing Geocode Accuracy | picklist | `text` |  |  |  |
| `MailingAddress` | Mailing Address | address | `jsonb` |  |  |  |
| `Phone` | Business Phone | phone | `text` |  |  |  |
| `Fax` | Business Fax | phone | `text` |  |  |  |
| `MobilePhone` | Mobile Phone | phone | `text` |  |  |  |
| `HomePhone` | Home Phone | phone | `text` |  |  |  |
| `OtherPhone` | Other Phone | phone | `text` |  |  |  |
| `AssistantPhone` | Asst. Phone | phone | `text` |  |  |  |
| `ReportsToId` | Reports To ID | reference | `uuid` |  |  | -> Contact (Lookup) |
| `Email` | Email | email | `text` |  |  |  |
| `Title` | Title | string | `varchar(128)` |  |  |  |
| `Department` | Department | string | `varchar(80)` |  |  |  |
| `AssistantName` | Assistant's Name | string | `varchar(40)` |  |  |  |
| `LeadSource` | Lead Source | picklist | `text` |  |  |  |
| `Birthdate` | Birthdate | date | `date` |  |  |  |
| `Description` | Contact Description | textarea | `text` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> User (Lookup) |
| `HasOptedOutOfEmail` | Email Opt Out | boolean | `boolean` |  |  |  |
| `HasOptedOutOfFax` | Fax Opt Out | boolean | `boolean` |  |  |  |
| `DoNotCall` | Do Not Call | boolean | `boolean` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity | date | `date` |  |  |  |
| `LastCURequestDate` | Last Stay-in-Touch Request Date | datetime | `timestamptz` |  |  |  |
| `LastCUUpdateDate` | Last Stay-in-Touch Save Date | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `EmailBouncedReason` | Email Bounced Reason | string | `varchar(255)` |  |  |  |
| `EmailBouncedDate` | Email Bounced Date | datetime | `timestamptz` |  |  |  |
| `IsEmailBounced` | Is Email Bounced | boolean | `boolean` |  |  |  |
| `PhotoUrl` | Photo URL | url | `text` |  |  |  |
| `Jigsaw` | Data.com Key | string | `varchar(20)` |  |  |  |
| `JigsawContactId` | Jigsaw Contact ID | string | `varchar(20)` |  |  |  |
| `Pronouns` | Pronouns | picklist | `text` |  |  |  |
| `GenderIdentity` | Gender Identity | picklist | `text` |  |  |  |
| `IsPriorityRecord` | Important | boolean | `boolean` |  |  |  |
| `bpmpro3__Category__c` | Category | picklist | `text` |  |  |  |
| `bpmpro3__Internal_Company_Role__c` | Internal Company Role | picklist | `text` |  |  |  |
| `bpmpro3__Company_Role_Active__c` | Company Role Active | boolean | `boolean` |  |  |  |
| `bpmpro3__Same_As_Billing_Email__c` | Same As Billing Email | boolean | `boolean` |  |  |  |
| `bpmpro3__Same_as_Billing_Phone__c` | Same as Billing Phone | boolean | `boolean` |  |  |  |
| `bpmpro3__Secondary_Email__c` | Secondary Email | email | `text` |  |  |  |
| `bpmpro3__Account_Business_Internal_Role__c` | Account Business Internal Role | string | `text` |  |  |  |
| `bpmpro3__Primary_Contact__c` | Primary Contact | boolean | `boolean` |  |  |  |
| `Preferred_Contact_Method__c` | Preferred Contact Method | picklist | `text` |  |  |  |

### Picklist Values

**Salutation** (`Salutation`):
- Mr. = `Mr.`
- Ms. = `Ms.`
- Mrs. = `Mrs.`
- Dr. = `Dr.`
- Prof. = `Prof.`
- Mx. = `Mx.`

**Other Geocode Accuracy** (`OtherGeocodeAccuracy`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

**Mailing Geocode Accuracy** (`MailingGeocodeAccuracy`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

**Lead Source** (`LeadSource`):
- Advertisement = `Advertisement`
- Customer Event = `Customer Event`
- Employee Referral = `Employee Referral`
- External Referral = `External Referral`
- Google AdWords = `Google AdWords`
- Other = `Other`
- Partner = `Partner`
- Purchased List = `Purchased List`
- Trade Show = `Trade Show`
- Webinar = `Webinar`
- Website = `Website`

**Pronouns** (`Pronouns`):
- He/Him = `He/Him`
- She/Her = `She/Her`
- They/Them = `They/Them`
- He/They = `He/They`
- She/They = `She/They`
- Not Listed = `Not Listed`

**Gender Identity** (`GenderIdentity`):
- Male = `Male`
- Female = `Female`
- Nonbinary = `Nonbinary`
- Not Listed = `Not Listed`

**Category** (`bpmpro3__Category__c`):
- A/C Contractor = `A/C Contractor`
- A/C Supplier = `A/C Supplier`
- Accountant = `Accountant`
- Alarm Contractor = `Alarm Contractor`
- Alarm Technician = `Alarm Technician`
- Anodizing = `Anodizing`
- Architect = `Architect`
- Attorney = `Attorney`
- Banks = `Banks`
- Bath Furnishings = `Bath Furnishings`
- Blinds = `Blinds`
- Carpenter = `Carpenter`
- Cladding Installer = `Cladding Installer`
- Cleaning = `Cleaning`
- Closets = `Closets`
- Coatings = `Coatings`
- Concrete = `Concrete`
- Containers = `Containers`
- Contractor = `Contractor`
- Crating and Packaging = `Crating and Packaging`
- Delivery Company = `Delivery Company`
- Demolition = `Demolition`
- Developer = `Developer`
- Drywall Contractor = `Drywall Contractor`
- Electrical Contractor = `Electrical Contractor`
- Electrical Supplier = `Electrical Supplier`
- Employee = `Employee`
- Engineer = `Engineer`
- Equipment = `Equipment`
- Fences = `Fences`
- Financing = `Financing`
- Flooring Contractor = `Flooring Contractor`
- Freight Forward Agent = `Freight Forward Agent`
- Garbage = `Garbage`
- General Contractor = `General Contractor`
- Graphic Designer = `Graphic Designer`
- Hauling and Excavating = `Hauling and Excavating`
- Inspector = `Inspector`
- Insurance Broker = `Insurance Broker`
- Interior Designer = `Interior Designer`
- Ironwork Contractor = `Ironwork Contractor`
- Kitchen Contractor = `Kitchen Contractor`
- Landscaping Contractor = `Landscaping Contractor`
- Land Surveyors = `Land Surveyors`
- Locksmith = `Locksmith`
- Metalwork Shop = `Metalwork Shop`
- Municipality Employee = `Municipality Employee`
- Other = `Other`
- Painting Contractor = `Painting Contractor`
- Permit Expediter = `Permit Expediter`
- Plastering Contractor = `Plastering Contractor`
- Plumbing Contractor = `Plumbing Contractor`
- Plumbing Supplier = `Plumbing Supplier`
- Pool Contractor = `Pool Contractor`
- Project Estimator = `Project Estimator`
- Project Manager = `Project Manager`
- Property Manager = `Property Manager`
- Property Owner = `Property Owner`
- Real Estate Agent = `Real Estate Agent`
- Real Estate Appraiser = `Real Estate Appraiser`
- Retractable Screen Contractor = `Retractable Screen Contractor`
- Roofing Contractor = `Roofing Contractor`
- Scaffolding Contractor = `Scaffolding Contractor`
- Shell Contractor = `Shell Contractor`
- Signs Contractor = `Signs Contractor`
- Stucco Contractors = `Stucco Contractors`
- Surveyors = `Surveyors`
- Tile and Stones Supplier = `Tile and Stones Supplier`
- Transportation Company = `Transportation Company`
- Window Contractor = `Window Contractor`
- Window Installer = `Window Installer`
- Window Manufacturer = `Window Manufacturer`
- Window Treatment Contractor = `Window Treatment Contractor`

**Internal Company Role** (`bpmpro3__Internal_Company_Role__c`):
- Accounting = `Accounting`
- Administration = `Administration`
- Engineering = `Engineering`
- IT Support = `IT Support`
- Legal and Compliance = `Legal and Compliance`
- Management = `Management`
- Marketing = `Marketing`
- Operations = `Operations`
- Permitting = `Permitting`
- Sales and Estimating = `Sales and Estimating`
- Project Management = `Project Management`
- Customer Service = `Customer Service`
- Human Resources (HR) = `Human Resources (HR)`
- Other = `Other`

**Preferred Contact Method** (`Preferred_Contact_Method__c`):
- Call = `Call`
- Text = `Text`
- Email = `Email`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| APXT_CongaSign__Transaction__c | Parent_003__c | APXT_CongaSign_Transactions__r | No |
| AcceptedEventRelation | RelationId | AcceptedEventRelations | No |
| Account | PersonContactId | N/A | No |
| AccountContactRelation | ContactId | AccountContactRelations | Yes |
| AccountContactRole | ContactId | AccountContactRoles | Yes |
| ActionPlan | TargetId | ActionPlans | No |
| Asset | ContactId | Assets | Yes |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CampaignMember | ContactId | CampaignMembers | Yes |
| CampaignMember | LeadOrContactId | N/A | No |
| Case | ContactId | Cases | No |
| CaseContactRole | ContactId | CaseContactRoles | Yes |
| CaseTeamMember | MemberId | N/A | Yes |
| CaseTeamTemplateMember | MemberId | N/A | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| Contact | ReportsToId | N/A | No |
| ContactRequest | WhoId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Contract | CustomerSignedId | ContractsSigned | No |
| ContractContactRole | ContactId | ContractContactRoles | Yes |
| DeclinedEventRelation | RelationId | DeclinedEventRelations | No |
| EmailBounceEvent | BouncedObjectId | N/A | No |
| EmailStatus | WhoId | EmailStatuses | Yes |
| Event | WhoId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| EventWhoRelation | RelationId | EventWhoRelations | No |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Lead | ConvertedContactId | N/A | No |
| ListEmail | RelatedToId | ListEmails | No |
| ListEmailIndividualRecipient | RecipientId | ListEmailIndividualRecipients | Yes |
| ListEmailSentResult | RecipientId | ListEmailRecipients | No |
| LookedUpFromActivity | Project_Manager__c | Activities__r | No |
| MatchingInformation | SFDCIdId | N/A | Yes |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | PrimaryWhoId | N/A | No |
| OpenActivity | WhoId | OpenActivities | Yes |
| Opportunity | ContactId | Opportunities | No |
| OpportunityContactRole | ContactId | OpportunityContactRoles | Yes |
| Order | CustomerAuthorizedById | N/A | No |
| OutgoingEmail | WhoId | N/A | No |
| OutgoingEmailRelation | RelationId | OutgoingEmailRelations | No |
| Quote | ContactId | Quotes | No |
| RecordAction | RecordId | RecordActions | Yes |
| SocialPersona | ParentId | Personas | Yes |
| SocialPost | WhoId | Posts | No |
| Task | WhoId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| TaskWhoRelation | RelationId | TaskWhoRelations | No |
| User | ContactId | Users | No |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| UserEmailPreferredPerson | PersonRecordId | PersonRecord | Yes |
| UserPrioritizedRecord | TargetId | N/A | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VideoCallParticipant | RelatedPersonId | RelatedPersons | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| WorkOrder | ContactId | WorkOrders | No |
| bpmpro3__Deal_Sheet__c | bpmpro3__DS_SalesRep__c | bpmpro3__Sales_Commission_Calcs__r | No |
| bpmpro3__Inspections__c | bpmpro3__IN_Person_Present__c | bpmpro3__PersonPresent_Inspections__r | No |
| bpmpro3__Inspections__c | bpmpro3__IN_Scheduled_By__c | bpmpro3__ScheduledBy_Inspections__r | No |
| bpmpro3__Project_Contact_Role__c | bpmpro3__PCR_Contact__c | bpmpro3__Project_Contact_Roles__r | No |
| bpmpro3__Project__c | bpmpro3__PJ_Project_Manager__c | bpmpro3__Project_Manager_Rel__r | No |
| bpmpro3__Project__c | bpmpro3__PJ_Sales_Person__c | bpmpro3__PJ_Sales_Person_Rel__r | No |
| bpmpro3__Project__c | bpmpro3__Referring_Party__c | bpmpro3__Projects2__r | No |
| bpmpro3__Property__c | bpmpro3__PTY_Property_Manager__c | bpmpro3__Properties__r | No |
| bpmpro3__Prospect__c | bpmpro3__PRT_Converted_Contact__c | bpmpro3__Prospects__r | No |
| bpmpro3__Sales_Commission_Payout__c | bpmpro3__SCP_Sales_Rep__c | bpmpro3__Sales_Commission_Payouts__r | No |
| bpmpro3__Service_Ticket__c | bpmpro3__SVC_Primary_Contact__c | bpmpro3__Service_Tickets__r | No |
| bpmpro3__Timesheet__c | bpmpro3__TS_Employee_Name__c | bpmpro3__Timesheets__r | No |
| bpmpro3__Timesheet__c | bpmpro3__TS_Supervisor__c | bpmpro3__Timesheets1__r | No |
| bpmpro3__Warehouse_Log__c | bpmpro3__WL_Handled_By__c | bpmpro3__WL_Handled_By_Rel__r | No |
| bpmpro3__Work_Assignment__c | bpmpro3__WA_Assignment_Coordinator__c | bpmpro3__WA_Coordinator_Rel__r | No |
| bpmpro3__Work_Assignment__c | bpmpro3__WA_Resource_Name__c | bpmpro3__WA_Resource_Name_Rel__r | No |
| dfsle__EnvelopeStatus__c | dfsle__Contact__c | dfsle__DocuSign_Status__r | No |
| dfsle__RecipientStatus__c | dfsle__Contact__c | dfsle__DocuSign_Recipient_Status__r | No |

---

## Content Document (`ContentDocument`) {#contentdocument}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 069 |
| Fields | 25 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Content Document ID | id | `uuid` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `CreatedDate` | Created | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `IsArchived` | Is Archived | boolean | `boolean` |  |  |  |
| `ArchivedById` | User ID | reference | `uuid` |  |  | -> User (Lookup) |
| `ArchivedDate` | Archived Date | date | `date` |  |  |  |
| `IsDeleted` | Is Deleted | boolean | `boolean` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` | Yes |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `Title` | Title | string | `varchar(255)` | Yes |  |  |
| `PublishStatus` | Publish Status | picklist | `text` |  |  |  |
| `LatestPublishedVersionId` | Latest Published Version ID | reference | `uuid` |  |  | -> ContentVersion (Lookup) |
| `ParentId` | Parent ID | reference | `uuid` |  |  | -> ContentWorkspace (Lookup) |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `Description` | Description | textarea | `text` |  |  |  |
| `ContentSize` | Size | int | `int4` |  |  |  |
| `FileType` | File Type | string | `varchar(20)` |  |  |  |
| `FileExtension` | File Extension | string | `varchar(40)` |  |  |  |
| `SharingOption` | Prevent others from sharing and unsharing | picklist | `text` |  |  |  |
| `SharingPrivacy` | File Privacy on Records | picklist | `text` |  |  |  |
| `ContentModifiedDate` | Content Modified Date | datetime | `timestamptz` |  |  |  |
| `ContentAssetId` | Asset File ID | reference | `uuid` |  |  | -> ContentAsset (Lookup) |

### Picklist Values

**Publish Status** (`PublishStatus`):
- Upload Interrupted = `U`
- Public = `P`
- Private Library = `R`

**Prevent others from sharing and unsharing** (`SharingOption`):
- Freeze Sharing Off = `A`
- Freeze Sharing On = `R`

**File Privacy on Records** (`SharingPrivacy`):
- Visible to Anyone With Record Access = `N`
- Private on Records = `P`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AttachedContentDocument | ContentDocumentId | N/A | Yes |
| AttachedContentNote | ContentDocumentId | N/A | Yes |
| ContentAsset | ContentDocumentId | N/A | No |
| ContentDistribution | ContentDocumentId | ContentDistributions | No |
| ContentDocumentLink | ContentDocumentId | ContentDocumentLinks | Yes |
| ContentDocumentSubscription | ContentDocumentId | N/A | Yes |
| ContentFolderMember | ChildRecordId | N/A | Yes |
| ContentNotification | EntityIdentifierId | N/A | No |
| ContentVersion | ContentDocumentId | ContentVersions | Yes |
| ContentVersionComment | ContentDocumentId | N/A | Yes |
| ContentWorkspaceDoc | ContentDocumentId | N/A | Yes |
| FeedAttachment | RecordId | N/A | No |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| FolderedContentDocument | ContentDocumentId | N/A | No |
| Image | ContentDocumentId | N/A | Yes |
| OwnedContentDocument | ContentDocumentId | N/A | Yes |
| VoiceCallRecording | MediaContentId | N/A | Yes |

---

## Content Version (`ContentVersion`) {#contentversion}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 068 |
| Fields | 47 |
| Relationships | 22 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Content Version ID | id | `uuid` |  |  |  |
| `ContentDocumentId` | Content Document ID | reference | `uuid` | Yes |  | -> ContentDocument (Lookup) |
| `IsLatest` | Is Latest | boolean | `boolean` |  |  |  |
| `ContentUrl` | Content URL | url | `text` |  |  |  |
| `ContentBodyId` | Content Body ID | reference | `uuid` |  |  | -> ContentBody (Lookup) |
| `VersionNumber` | Version Number | string | `varchar(20)` |  |  |  |
| `Title` | Title | string | `varchar(255)` | Yes |  |  |
| `Description` | Description | textarea | `text` |  |  |  |
| `ReasonForChange` | Reason For Change | string | `text` |  |  |  |
| `SharingOption` | Prevent others from sharing and unsharing | picklist | `text` |  |  |  |
| `SharingPrivacy` | File Privacy on Records | picklist | `text` |  |  |  |
| `PathOnClient` | Path On Client | string | `text` |  |  |  |
| `RatingCount` | Rating Count | int | `int4` |  |  |  |
| `IsDeleted` | Is Deleted | boolean | `boolean` |  |  |  |
| `ContentModifiedDate` | Content Modified Date | datetime | `timestamptz` |  |  |  |
| `ContentModifiedById` | User ID | reference | `uuid` |  |  | -> User (Lookup) |
| `PositiveRatingCount` | Positive Rating Count | int | `int4` |  |  |  |
| `NegativeRatingCount` | Negative Rating Count | int | `int4` |  |  |  |
| `FeaturedContentBoost` | Featured Content Boost | int | `int4` |  |  |  |
| `FeaturedContentDate` | Featured Content Date | date | `date` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> User (Lookup) |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `TagCsv` | Tags | textarea | `text` |  |  |  |
| `FileType` | File Type | string | `varchar(20)` | Yes |  |  |
| `PublishStatus` | Publish Status | picklist | `text` |  |  |  |
| `VersionData` | Version Data | base64 | `bytea` |  |  |  |
| `ContentSize` | Size | int | `int4` |  |  |  |
| `FileExtension` | File Extension | string | `varchar(40)` |  |  |  |
| `FirstPublishLocationId` | First Publish Location ID | reference | `uuid` |  |  | -> APXTConga4__Composer_Host_Override__c, APXTConga4__Composer_QuickMerge__c, APXTConga4__Conga_Collection_Solution__c, APXTConga4__Conga_Collection__c, APXTConga4__Conga_Composer_Settings__c, APXTConga4__Conga_Email_Staging__c, APXTConga4__Conga_Email_Template__c, APXTConga4__Conga_Merge_Query__c, APXTConga4__Conga_Solution_Email_Template__c, APXTConga4__Conga_Solution_Parameter__c, APXTConga4__Conga_Solution_Query__c, APXTConga4__Conga_Solution_Report__c, APXTConga4__Conga_Solution_Template__c, APXTConga4__Conga_Solution__c, APXTConga4__Conga_Solutions_Settings__c, APXTConga4__Conga_Template__c, APXTConga4__Document_History_Detail__c, APXTConga4__Document_History__c, APXTConga4__EventData__c, APXTConga4__VersionedData__c, APXT_CongaSign__CongaSign_Settings__c, APXT_CongaSign__Document__c, APXT_CongaSign__Recipient__c, APXT_CongaSign__Transaction__c, Account, ActionPlan, Asset, AssetRelationship, BatchJob, BatchJobPart, BatchJobPartFailedRecord, BirdeyeCheckin__Automation_Failed_Record__c, BirdeyeCheckin__Automation__c, BirdeyeCheckin__Checkin_Config__c, BirdeyeCheckin__Connector__c, Campaign, Case, CollaborationGroup, Contact, ContentWorkspace, Contract, Dashboard, DashboardComponent, EmailMessage, EmailTemplate, EnhancedLetterhead, Event, Image, In_App_Checklist_Settings__c, Lead, ListEmail, Location, Opportunity, Order, OrderItem, Organization, OutgoingEmail, Product2, ProfileSkill, ProfileSkillEndorsement, ProfileSkillUser, Quote, Report, SalesforceContract, SalesforceInvoice, SalesforceQuote, Site, SocialPost, Solution, Task, Topic, User, VideoCall, VoiceCall, WorkBadgeDefinition, WorkOrder, WorkOrderLineItem, bpmpro3__A2_Labor_Only_Item__c, bpmpro3__A3_LaborItems__c, bpmpro3__AddOn_Product__c, bpmpro3__Add_On_CPI__c, bpmpro3__Back_Charge__c, bpmpro3__Building_Material__c, bpmpro3__Building_Permit_c__c, bpmpro3__CPI_AddOn_Product_Catalog__c, bpmpro3__CPI_Configure_Pricing_Items__c, bpmpro3__CPI_Preset_Product_Add_On__c, bpmpro3__Company_Settings__c, bpmpro3__Contact_CSV_Import__c, bpmpro3__Deal_Sheet__c, bpmpro3__Dealer_Item__c, bpmpro3__Inspections__c, bpmpro3__Invoice_Payment__c, bpmpro3__LaborItem_AddOn_Junction__c, bpmpro3__Labor_Charge__c, bpmpro3__Labor_Ticket__c, bpmpro3__Material__c, bpmpro3__Orders__c, bpmpro3__PP_Preset_Product__c, bpmpro3__PaymentBPM__c, bpmpro3__Permit_Fee__c, bpmpro3__ProductItem__c, bpmpro3__Project_Contact_Role__c, bpmpro3__Project_Invoice__c, bpmpro3__Project_Stage_Assignment_Team_Member__c, bpmpro3__Project_Stage_Assignment__c, bpmpro3__Project_Stage_Team_Member__c, bpmpro3__Project_Stage__c, bpmpro3__Project__c, bpmpro3__Property__c, bpmpro3__Prospect__c, bpmpro3__Reimbursement__c, bpmpro3__SalesDoc_Clauses__c, bpmpro3__SalesDoc_Credit_Memo__c, bpmpro3__SalesDoc_Invoice__c, bpmpro3__Sales_Commission_Payout__c, bpmpro3__Sales_Commission_Table__c, bpmpro3__Sales_Commission__c, bpmpro3__Sales_Document__c, bpmpro3__Service_Ticket__c, bpmpro3__SpecialtyItem__c, bpmpro3__Time_Entry__c, bpmpro3__Timesheet__c, bpmpro3__Warehouse_Log__c, bpmpro3__Work_Assignment__c, dfsle__AgreementConfiguration__c, dfsle__BulkList__c, dfsle__BulkStatus__c, dfsle__CustomParameterMap__c, dfsle__CustomRecipient__c, dfsle__Document__c, dfsle__EOS_Type__c, dfsle__EnvelopeConfigurationDocument__c, dfsle__EnvelopeConfigurationRecipient__c, dfsle__EnvelopeConfiguration__c, dfsle__EnvelopeLocalization__c, dfsle__EnvelopeStatus__c, dfsle__Envelope__c, dfsle__GenTemplate__c, dfsle__Jobs__c, dfsle__Log__c, dfsle__RecipientStatus__c, dfsle__Recipient__c, inov8__PMT_Error_Log__c, inov8__PMT_Phase__c, inov8__PMT_Program__c, inov8__PMT_Project__c, inov8__PMT_Resource_Allocation__c, inov8__PMT_Resource_Availability__c, inov8__PMT_Task__c (Lookup) |
| `Origin` | Content Origin | picklist | `text` |  |  |  |
| `ContentLocation` | Content Location | picklist | `text` |  |  |  |
| `TextPreview` | Text Preview | string | `varchar(255)` |  |  |  |
| `ExternalDocumentInfo1` | External Document Info1 | string | `text` |  |  |  |
| `ExternalDocumentInfo2` | External Document Info2 | string | `text` |  |  |  |
| `ExternalDataSourceId` | External Data Source ID | reference | `uuid` |  |  | -> ExternalDataSource (Lookup) |
| `Checksum` | Checksum | string | `varchar(50)` |  |  |  |
| `IsMajorVersion` | Major Version | boolean | `boolean` |  |  |  |
| `IsAssetEnabled` | Asset File Enabled | boolean | `boolean` |  |  |  |
| `VersionDataUrl` | Version Data URL | string | `varchar(255)` |  |  |  |
| `dfsle__GeneratedFileFormat__c` | Generated File Format | picklist | `text` |  |  |  |
| `dfsle__GeneratedFileName__c` | Generated File Name | string | `varchar(255)` |  |  |  |
| `dfsle__GeneratedFileSuffix__c` | Generated File Suffix | picklist | `text` |  |  |  |
| `dfsle__Rule__c` | Rule | textarea | `text` |  |  |  |

### Picklist Values

**Prevent others from sharing and unsharing** (`SharingOption`):
- Freeze Sharing Off = `A`
- Freeze Sharing On = `R`

**File Privacy on Records** (`SharingPrivacy`):
- Visible to Anyone With Record Access = `N`
- Private on Records = `P`

**Publish Status** (`PublishStatus`):
- Upload Interrupted = `U`
- Public = `P`
- Private Library = `R`

**Content Origin** (`Origin`):
- Content = `C`
- Chatter = `H`

**Content Location** (`ContentLocation`):
- Salesforce = `S`
- External = `E`
- Social Customer Service = `L`
- SfDrive = `SfDrive`
- SCS = `SCS`

**Generated File Format** (`dfsle__GeneratedFileFormat__c`):
- Word = `Word`
- PDF = `PDF`

**Generated File Suffix** (`dfsle__GeneratedFileSuffix__c`):
- name = `name`
- date = `date`
- name_date = `name_date`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ContentDistribution | ContentVersionId | N/A | Yes |
| ContentDocument | LatestPublishedVersionId | N/A | No |
| ContentNote | LatestPublishedVersionId | N/A | No |
| ContentNotification | EntityIdentifierId | N/A | No |
| ContentVersionComment | ContentVersionId | N/A | Yes |
| ContentVersionRating | ContentVersionId | N/A | Yes |
| FeedAttachment | RecordId | N/A | No |
| FeedComment | RelatedRecordId | N/A | No |
| FeedItem | RelatedRecordId | N/A | No |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| QuoteDocument | ContentVersionDocumentId | N/A | Yes |

---

## Contract (`Contract`) {#contract}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 800 |
| Fields | 48 |
| Relationships | 36 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Contract ID | id | `uuid` |  |  |  |
| `AccountId` | Account ID | reference | `uuid` | Yes |  | -> Account (Lookup) |
| `Pricebook2Id` | Price Book ID | reference | `uuid` |  |  | -> Pricebook2 (Lookup) |
| `OwnerExpirationNotice` | Owner Expiration Notice | picklist | `text` |  |  |  |
| `StartDate` | Contract Start Date | date | `date` |  |  |  |
| `EndDate` | Contract End Date | date | `date` |  |  |  |
| `BillingStreet` | Billing Street | textarea | `text` |  |  |  |
| `BillingCity` | Billing City | string | `varchar(40)` |  |  |  |
| `BillingState` | Billing State/Province | string | `varchar(80)` |  |  |  |
| `BillingPostalCode` | Billing Zip/Postal Code | string | `varchar(20)` |  |  |  |
| `BillingCountry` | Billing Country | string | `varchar(80)` |  |  |  |
| `BillingLatitude` | Billing Latitude | double | `numeric(18,15)` |  |  |  |
| `BillingLongitude` | Billing Longitude | double | `numeric(18,15)` |  |  |  |
| `BillingGeocodeAccuracy` | Billing Geocode Accuracy | picklist | `text` |  |  |  |
| `BillingAddress` | Billing Address | address | `jsonb` |  |  |  |
| `ShippingStreet` | Shipping Street | textarea | `text` |  |  |  |
| `ShippingCity` | Shipping City | string | `varchar(40)` |  |  |  |
| `ShippingState` | Shipping State/Province | string | `varchar(80)` |  |  |  |
| `ShippingPostalCode` | Shipping Zip/Postal Code | string | `varchar(20)` |  |  |  |
| `ShippingCountry` | Shipping Country | string | `varchar(80)` |  |  |  |
| `ShippingLatitude` | Shipping Latitude | double | `numeric(18,15)` |  |  |  |
| `ShippingLongitude` | Shipping Longitude | double | `numeric(18,15)` |  |  |  |
| `ShippingGeocodeAccuracy` | Shipping Geocode Accuracy | picklist | `text` |  |  |  |
| `ShippingAddress` | Shipping Address | address | `jsonb` |  |  |  |
| `ContractTerm` | Contract Term | int | `int4` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> User (Lookup) |
| `Status` | Status | picklist | `text` |  |  |  |
| `CompanySignedId` | Company Signed By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `CompanySignedDate` | Company Signed Date | date | `date` |  |  |  |
| `CustomerSignedId` | Customer Signed By ID | reference | `uuid` |  |  | -> Contact (Lookup) |
| `CustomerSignedTitle` | Customer Signed Title | string | `varchar(40)` |  |  |  |
| `CustomerSignedDate` | Customer Signed Date | date | `date` |  |  |  |
| `SpecialTerms` | Special Terms | textarea | `text` |  |  |  |
| `ActivatedById` | Activated By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `ActivatedDate` | Activated Date | datetime | `timestamptz` |  |  |  |
| `StatusCode` | Status Category | picklist | `text` | Yes |  |  |
| `Description` | Description | textarea | `text` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `ContractNumber` | Contract Number | string | `varchar(30)` |  |  |  |
| `LastApprovedDate` | Last Approved Date | datetime | `timestamptz` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |

### Picklist Values

**Owner Expiration Notice** (`OwnerExpirationNotice`):
- 15 Days = `15`
- 30 Days = `30`
- 45 Days = `45`
- 60 Days = `60`
- 90 Days = `90`
- 120 Days = `120`

**Billing Geocode Accuracy** (`BillingGeocodeAccuracy`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

**Shipping Geocode Accuracy** (`ShippingGeocodeAccuracy`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

**Status** (`Status`):
- In Approval Process = `In Approval Process`
- Activated = `Activated`
- Draft = `Draft`

**Status Category** (`StatusCode`):
- Draft = `Draft`
- In Approval Process = `InApproval`
- Activated = `Activated`
- Terminated = `Terminated`
- Expired = `Expired`
- Rejected = `Rejected`
- Negotiating = `Negotiating`
- Awaiting Signature = `AwaitingSignature`
- Signature Declined = `SignatureDeclined`
- Signed = `Signed`
- Canceled = `Cancelled`
- Contract Expired = `Expired2`
- Contract Terminated = `Terminated2`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| Approval | ParentId | Approvals | Yes |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| ContractContactRole | ContractId | ContractContactRoles | Yes |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity | ContractId | Opportunities | No |
| Order | ContractId | Orders | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| Quote | ContractId | Quotes | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| dfsle__EnvelopeStatus__c | dfsle__Contract__c | dfsle__DocuSign_Status__r | No |

---

## Agreement Configuration (`dfsle__AgreementConfiguration__c`) {#dfsleagreementconfigurationc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a02 |
| Fields | 13 |
| Relationships | 31 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `dfsle__FolderId__c` | Folder Id | string | `varchar(255)` | Yes | Yes |  |
| `dfsle__SourceObject__c` | Source Object | string | `varchar(255)` | Yes | Yes |  |
| `dfsle__TempFolderId__c` | Temp Folder Id | string | `varchar(255)` |  | Yes |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## DocuSign Auth Provider Metadata (`dfsle__AuthProvider__mdt`) {#dfsleauthprovidermdt}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | m00 |
| Fields | 8 |
| Relationships | 0 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Custom Metadata Record ID | id | `uuid` |  |  |  |
| `DeveloperName` | Custom Metadata Record Name | string | `varchar(40)` |  |  |  |
| `MasterLabel` | Label | string | `varchar(40)` | Yes |  |  |
| `Language` | Master Language | picklist | `text` | Yes |  |  |
| `NamespacePrefix` | Namespace Prefix | string | `varchar(15)` |  |  |  |
| `Label` | Label | string | `varchar(40)` |  |  |  |
| `QualifiedApiName` | Qualified API Name | string | `varchar(70)` |  |  |  |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |

### Picklist Values

**Master Language** (`Language`):
- English = `en_US`
- German = `de`
- Spanish = `es`
- French = `fr`
- Italian = `it`
- Japanese = `ja`
- Swedish = `sv`
- Korean = `ko`
- Chinese (Traditional) = `zh_TW`
- Chinese (Simplified) = `zh_CN`
- Portuguese (Brazil) = `pt_BR`
- Dutch = `nl_NL`
- Danish = `da`
- Thai = `th`
- Finnish = `fi`
- Russian = `ru`
- Spanish (Mexico) = `es_MX`
- Norwegian = `no`

---

## Docusign Bulk Send List (`dfsle__BulkList__c`) {#dfslebulklistc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a03 |
| Fields | 13 |
| Relationships | 31 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `dfsle__DocuSignId__c` | DocuSign bulk list ID | string | `varchar(36)` |  | Yes |  |
| `dfsle__Recipients__c` | Recipients | textarea | `text` |  |  |  |
| `dfsle__SourceId__c` | Salesforce source ID | string | `varchar(18)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Docusign Bulk Send Status (`dfsle__BulkStatus__c`) {#dfslebulkstatusc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a04 |
| Fields | 18 |
| Relationships | 31 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Envelope# | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `dfsle__BatchSize__c` | Batch size | double | `float8` |  |  |  |
| `dfsle__DocuSignId__c` | DocuSign batch ID | string | `varchar(36)` |  | Yes |  |
| `dfsle__FailedEnvelopes__c` | Failed envelopes | double | `float8` |  |  |  |
| `dfsle__LastStatusUpdate__c` | Last status update | datetime | `timestamptz` |  |  |  |
| `dfsle__QueuedEnvelopes__c` | Queued envelopes | double | `float8` |  |  |  |
| `dfsle__SentEnvelopes__c` | Sent envelopes | double | `float8` |  |  |  |
| `dfsle__SourceId__c` | Salesforce source ID | string | `varchar(18)` |  |  |  |
| `dfsle__Submitted__c` | Submitted | datetime | `timestamptz` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## DocuSign Custom Parameter Map (`dfsle__CustomParameterMap__c`) {#dfslecustomparametermapc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a07 |
| Fields | 15 |
| Relationships | 31 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `dfsle__EnvelopeConfiguration__c` | DocuSign Envelope Configuration | reference | `uuid` | Yes |  | -> dfsle__EnvelopeConfiguration__c (MasterDetail) |
| `dfsle__Name__c` | Name | textarea | `text` |  |  |  |
| `dfsle__Order__c` | Order | double | `float8` |  |  |  |
| `dfsle__SubValue__c` | SubValue | string | `varchar(99)` |  |  |  |
| `dfsle__Type__c` | Type | string | `varchar(99)` |  |  |  |
| `dfsle__Value__c` | Value | textarea | `text` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## DocuSign Custom Recipient (`dfsle__CustomRecipient__c`) {#dfslecustomrecipientc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a08 |
| Fields | 27 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `dfsle__EnvelopeConfiguration__c` | Envelope Configuration | reference | `uuid` | Yes |  | -> dfsle__EnvelopeConfiguration__c (MasterDetail) |
| `dfsle__AccessCode__c` | Access Code | string | `varchar(255)` |  |  |  |
| `dfsle__EmailMessage__c` | Email Message | textarea | `text` |  |  |  |
| `dfsle__EmailSubject__c` | Email Subject | textarea | `text` |  |  |  |
| `dfsle__Email__c` | Email | string | `varchar(255)` |  |  |  |
| `dfsle__FirstName__c` | First Name | string | `varchar(100)` |  |  |  |
| `dfsle__HostEmail__c` | Host Email | string | `varchar(100)` |  |  |  |
| `dfsle__HostName__c` | Host Name | string | `varchar(100)` |  |  |  |
| `dfsle__Language__c` | Language | string | `varchar(10)` |  |  |  |
| `dfsle__LastName__c` | Last Name | string | `varchar(100)` |  |  |  |
| `dfsle__Note__c` | Private Message | textarea | `text` |  |  |  |
| `dfsle__Relationship__c` | Contact Relationship | string | `varchar(99)` |  |  |  |
| `dfsle__Role__c` | Role | string | `varchar(100)` |  |  |  |
| `dfsle__RoutingOrder__c` | Routing Order | double | `float8` |  |  |  |
| `dfsle__SignNow__c` | Sign now | boolean | `boolean` |  |  |  |
| `dfsle__SigningGroupId__c` | Signing Group ID | double | `float8` |  |  |  |
| `dfsle__SigningGroupName__c` | Signing Group Name | string | `varchar(100)` |  |  |  |
| `dfsle__SmsPhoneNumber__c` | SMS Phone Number | string | `varchar(50)` |  |  |  |
| `dfsle__Type__c` | Type | picklist | `text` |  |  |  |

### Picklist Values

**Type** (`dfsle__Type__c`):
- Needs to Sign = `Signer`
- In Person Signer = `InPersonSigner`
- Receives a Copy = `CarbonCopy`
- Needs to View = `CertifiedDelivery`
- Specify Recipients = `Agent`
- Allow to Edit = `Editor`
- Update Recipients = `Intermediary`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Docusign Envelope Document (`dfsle__Document__c`) {#dfsledocumentc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0A |
| Fields | 21 |
| Relationships | 28 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `dfsle__Envelope__c` | DocuSign Envelope | reference | `uuid` | Yes |  | -> dfsle__Envelope__c (MasterDetail) |
| `dfsle__Extension__c` | Extension | string | `varchar(20)` |  |  |  |
| `dfsle__FullName__c` | Full Name | string | `varchar(255)` |  |  |  |
| `dfsle__IsReplacement__c` | Is Replacement | boolean | `boolean` |  |  |  |
| `dfsle__LastModified__c` | Source Last Modified | datetime | `timestamptz` |  |  |  |
| `dfsle__Options__c` | Options | textarea | `text` |  |  |  |
| `dfsle__ReadOnly__c` | Read-only | boolean | `boolean` |  |  |  |
| `dfsle__Replacement__c` | Replacement Document | reference | `uuid` |  |  | -> dfsle__Document__c (Lookup) |
| `dfsle__Required__c` | Required | boolean | `boolean` |  |  |  |
| `dfsle__Sequence__c` | Sequence | double | `float8` |  |  |  |
| `dfsle__Size__c` | Size | double | `float8` |  |  |  |
| `dfsle__SourceId__c` | Source ID | string | `varchar(40)` |  |  |  |
| `dfsle__Type__c` | Type | picklist | `text` |  |  |  |

### Picklist Values

**Type** (`dfsle__Type__c`):
- File = `File`
- Template = `Template`
- Document = `Document`
- Other = `Other`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| dfsle__Document__c | dfsle__Replacement__c | dfsle__Replacement__r | No |

---

## Docusign Envelope (`dfsle__Envelope__c`) {#dfsleenvelopec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0I |
| Fields | 30 |
| Relationships | 30 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | DocuSign Envelope | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `dfsle__CustomFields__c` | Custom fields | textarea | `text` |  |  |  |
| `dfsle__DFSTemplateId__c` | DFS Template ID | string | `varchar(18)` |  |  |  |
| `dfsle__DocuSignId__c` | DocuSign envelope ID | string | `varchar(36)` |  | Yes |  |
| `dfsle__EmailMessage__c` | Email message | textarea | `text` |  |  |  |
| `dfsle__EmailSubject__c` | Email subject | string | `varchar(255)` |  |  |  |
| `dfsle__EnvelopeConfiguration__c` | Envelope Configuration | reference | `uuid` |  |  | -> dfsle__EnvelopeConfiguration__c (Lookup) |
| `dfsle__ExpireAfterDays__c` | Expire/void envelope in N day(s) | double | `float8` |  |  |  |
| `dfsle__ExpireWarnDays__c` | Warn of expiration in N day(s) prior | double | `float8` |  |  |  |
| `dfsle__Expires__c` | Expire/void Envelope | boolean | `boolean` |  |  |  |
| `dfsle__Options__c` | Options | textarea | `text` |  |  |  |
| `dfsle__RemindAfterDays__c` | Send reminder in N day(s) | double | `float8` |  |  |  |
| `dfsle__RemindFrequencyDays__c` | Remind every N day(s) until complete | double | `float8` |  |  |  |
| `dfsle__Remind__c` | Remind signers via email | boolean | `boolean` |  |  |  |
| `dfsle__SenderPermissions__c` | Sender permissions | textarea | `text` |  |  |  |
| `dfsle__Sender__c` | Sender | reference | `uuid` |  |  | -> User (Lookup) |
| `dfsle__Sent__c` | Sent | datetime | `timestamptz` |  |  |  |
| `dfsle__SourceId__c` | Salesforce source ID | string | `varchar(18)` |  |  |  |
| `dfsle__TransactionId__c` | Transaction ID | string | `varchar(36)` |  | Yes |  |
| `dfsle__UpdateChatter__c` | Enable Chatter status updates | boolean | `boolean` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| dfsle__Document__c | dfsle__Envelope__c | dfsle__Documents__r | Yes |
| dfsle__Recipient__c | dfsle__Envelope__c | dfsle__Recipients__r | Yes |

---

## Docusign Envelope Template (`dfsle__EnvelopeConfiguration__c`) {#dfsleenvelopeconfigurationc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0E |
| Fields | 46 |
| Relationships | 38 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `dfsle__Action__c` | Action | picklist | `text` |  |  |  |
| `dfsle__Active__c` | Active | boolean | `boolean` |  |  |  |
| `dfsle__AddSourceDocuments__c` | Add Salesforce source documents | boolean | `boolean` |  |  |  |
| `dfsle__AddSourceRecipients__c` | Add Salesforce source recipients | boolean | `boolean` |  |  |  |
| `dfsle__CustomFields__c` | Custom fields | textarea | `text` |  |  |  |
| `dfsle__DFSTemplateId__c` | DFS Template ID | string | `varchar(18)` |  |  |  |
| `dfsle__DocuSignId__c` | DocuSign template ID | string | `varchar(36)` |  | Yes |  |
| `dfsle__EmailMessage__c` | Email message | textarea | `text` |  |  |  |
| `dfsle__EmailSubject__c` | Email subject | string | `varchar(255)` |  |  |  |
| `dfsle__ExpireAfterDays__c` | Expire/void Envelope in N day(s) | double | `float8` |  |  |  |
| `dfsle__ExpireWarnDays__c` | Warn of expiration in N day(s) prior | double | `float8` |  |  |  |
| `dfsle__Expires__c` | Expire/void Envelope | boolean | `boolean` |  |  |  |
| `dfsle__IsDraft__c` | Is draft | boolean | `boolean` |  |  |  |
| `dfsle__IsQuickSend__c` | Is Quick Send | boolean | `boolean` |  |  |  |
| `dfsle__MergeFields__c` | Merge fields | textarea | `text` |  |  |  |
| `dfsle__Notifications__c` | Notifications | textarea | `text` |  |  |  |
| `dfsle__ObjectType__c` | Object type | textarea | `text` |  |  |  |
| `dfsle__Options__c` | Options | textarea | `text` |  |  |  |
| `dfsle__RemindAfterDays__c` | Send reminder in N day(s) | double | `float8` |  |  |  |
| `dfsle__RemindFrequencyDays__c` | Remind every N day(s) until complete | double | `float8` |  |  |  |
| `dfsle__Remind__c` | Remind signers via email | boolean | `boolean` |  |  |  |
| `dfsle__SenderPermissions__c` | Sender permissions | textarea | `text` |  |  |  |
| `dfsle__Sender__c` | Sender | reference | `uuid` |  |  | -> User (Lookup) |
| `dfsle__SendingExperience__c` | Sending Experience | picklist | `text` |  |  |  |
| `dfsle__ShowChatterSettings__c` | Show Chatter settings | boolean | `boolean` |  |  |  |
| `dfsle__ShowEmailMessage__c` | Show email message | boolean | `boolean` |  |  |  |
| `dfsle__ShowEmailSubject__c` | Show email subject | boolean | `boolean` |  |  |  |
| `dfsle__ShowRemindExpire__c` | Show remind and expire settings | boolean | `boolean` |  |  |  |
| `dfsle__ShowSendButton__c` | Show send button | boolean | `boolean` |  |  |  |
| `dfsle__ShowTagButton__c` | Show tag button | boolean | `boolean` |  |  |  |
| `dfsle__SourceObject__c` | Source object | string | `varchar(255)` |  |  |  |
| `dfsle__TemplateType__c` | Template Type | picklist | `text` |  |  |  |
| `dfsle__SenderDocuSignUserName__c` | Sender DocuSign UserName | string | `text` |  |  |  |
| `dfsle__SenderSalesforceUserName__c` | Sender Salesforce UserName | string | `text` |  |  |  |

### Picklist Values

**Action** (`dfsle__Action__c`):
- Prepare = `Prepare`
- Tag = `Tag`
- Send = `Send`

**Sending Experience** (`dfsle__SendingExperience__c`):
- edit = `edit`
- quickSend = `quickSend`
- tag = `tag`
- send = `send`

**Template Type** (`dfsle__TemplateType__c`):
- Embedded = `Embedded`
- General = `General`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| dfsle__CustomParameterMap__c | dfsle__EnvelopeConfiguration__c | dfsle__CustomParameterMap__r | Yes |
| dfsle__CustomRecipient__c | dfsle__EnvelopeConfiguration__c | dfsle__CustomRecipient__r | Yes |
| dfsle__EnvelopeConfigurationDocument__c | dfsle__EnvelopeConfiguration__c | dfsle__Documents__r | Yes |
| dfsle__EnvelopeConfigurationRecipient__c | dfsle__EnvelopeConfiguration__c | dfsle__Recipients__r | Yes |
| dfsle__Envelope__c | dfsle__EnvelopeConfiguration__c | dfsle__EnvelopeConfiguration__r | No |
| dfsle__GenTemplate__c | dfsle__EnvelopeConfiguration__c | dfsle__GenTemplates__r | No |

---

## Docusign Envelope Configuration Document (`dfsle__EnvelopeConfigurationDocument__c`) {#dfsleenvelopeconfigurationdocumentc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0C |
| Fields | 17 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Document | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `dfsle__EnvelopeConfiguration__c` | Envelope Configuration | reference | `uuid` | Yes |  | -> dfsle__EnvelopeConfiguration__c (MasterDetail) |
| `dfsle__Extension__c` | Extension | string | `varchar(20)` |  |  |  |
| `dfsle__Filter__c` | Filter | textarea | `text` |  |  |  |
| `dfsle__Name__c` | Name | string | `varchar(255)` |  |  |  |
| `dfsle__ReadOnly__c` | Read-only | boolean | `boolean` |  |  |  |
| `dfsle__Required__c` | Required | boolean | `boolean` |  |  |  |
| `dfsle__Sequence__c` | Sequence | double | `float8` |  |  |  |
| `dfsle__SourceId__c` | Source ID | string | `varchar(40)` |  |  |  |
| `dfsle__Type__c` | Type | picklist | `text` |  |  |  |

### Picklist Values

**Type** (`dfsle__Type__c`):
- Template Document = `TemplateDocument`
- Source Files = `SourceFiles`
- Template = `Template`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Docusign Envelope Configuration Recipient (`dfsle__EnvelopeConfigurationRecipient__c`) {#dfsleenvelopeconfigurationrecipientc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0D |
| Fields | 35 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Recipient | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `dfsle__EnvelopeConfiguration__c` | Envelope Configuration | reference | `uuid` | Yes |  | -> dfsle__EnvelopeConfiguration__c (MasterDetail) |
| `dfsle__AccessCode__c` | Access code | string | `varchar(255)` |  |  |  |
| `dfsle__DeliverBySms__c` | Deliver By Sms | boolean | `boolean` |  |  |  |
| `dfsle__EmailMessage__c` | Email message | textarea | `text` |  |  |  |
| `dfsle__EmailSubject__c` | Email subject | textarea | `text` |  |  |  |
| `dfsle__Email__c` | Email | string | `varchar(255)` |  |  |  |
| `dfsle__Filter__c` | Filter | textarea | `text` |  |  |  |
| `dfsle__HostEmail__c` | Host email | string | `varchar(100)` |  |  |  |
| `dfsle__HostName__c` | Host name | string | `varchar(100)` |  |  |  |
| `dfsle__IdCheckRequired__c` | ID check required | boolean | `boolean` |  |  |  |
| `dfsle__IncrementRoutingOrder__c` | Increment routing order | boolean | `boolean` |  |  |  |
| `dfsle__IsSender__c` | Is Sender | boolean | `boolean` |  |  |  |
| `dfsle__Language__c` | Language | string | `varchar(10)` |  |  |  |
| `dfsle__Name__c` | Name | string | `varchar(100)` |  |  |  |
| `dfsle__Note__c` | Note | textarea | `text` |  |  |  |
| `dfsle__ReadOnly__c` | Read-only | boolean | `boolean` |  |  |  |
| `dfsle__Relationship__c` | Relationship | textarea | `text` |  |  |  |
| `dfsle__Required__c` | Required | boolean | `boolean` |  |  |  |
| `dfsle__Roles__c` | Roles | string | `varchar(255)` |  |  |  |
| `dfsle__RoutingOrder__c` | Routing order | double | `float8` |  |  |  |
| `dfsle__Sequence__c` | Sequence | double | `float8` |  |  |  |
| `dfsle__SignNow__c` | Sign now | boolean | `boolean` |  |  |  |
| `dfsle__SigningGroupId__c` | Signing Group ID | double | `float8` |  |  |  |
| `dfsle__SigningGroupName__c` | Signing Group name | string | `varchar(100)` |  |  |  |
| `dfsle__SmsPhoneNumber__c` | SMS phone number | string | `varchar(50)` |  |  |  |
| `dfsle__SourceId__c` | Source ID | string | `varchar(18)` |  |  |  |
| `dfsle__Type__c` | Type | picklist | `text` |  |  |  |

### Picklist Values

**Type** (`dfsle__Type__c`):
- Needs to Sign = `Signer`
- In Person Signer = `InPersonSigner`
- Receives a Copy = `CarbonCopy`
- Needs to View = `CertifiedDelivery`
- Specify Recipients = `Agent`
- Allow to Edit = `Editor`
- Update Recipients = `Intermediary`
- Seal = `Seal`
- Witness = `Witness`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Docusign Localization (`dfsle__EnvelopeLocalization__c`) {#dfsleenvelopelocalizationc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0F |
| Fields | 12 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Language | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `dfsle__EmailMessage__c` | Email Message | textarea | `text` |  |  |  |
| `dfsle__EmailSubject__c` | Email Subject | string | `varchar(255)` |  |  |  |
| `dfsle__Language__c` | Language | string | `varchar(30)` |  | Yes |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Docusign Status (`dfsle__EnvelopeStatus__c`) {#dfsleenvelopestatusc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0H |
| Fields | 30 |
| Relationships | 38 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Envelope# | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `dfsle__Account__c` | Account | reference | `uuid` |  |  | -> Account (Lookup) |
| `dfsle__Case__c` | Case | reference | `uuid` |  |  | -> Case (Lookup) |
| `dfsle__Completed__c` | Completed | datetime | `timestamptz` |  |  |  |
| `dfsle__Contact__c` | Contact | reference | `uuid` |  |  | -> Contact (Lookup) |
| `dfsle__Contract__c` | Contract | reference | `uuid` |  |  | -> Contract (Lookup) |
| `dfsle__DocuSignId__c` | DocuSign envelope ID | string | `varchar(36)` |  | Yes |  |
| `dfsle__EmailSubject__c` | Email Subject | string | `varchar(100)` |  |  |  |
| `dfsle__Expires__c` | Expires | datetime | `timestamptz` |  |  |  |
| `dfsle__LastStatusUpdate__c` | Last Status Update | datetime | `timestamptz` |  |  |  |
| `dfsle__Lead__c` | Lead | reference | `uuid` |  |  | -> Lead (Lookup) |
| `dfsle__Opportunity__c` | Opportunity | reference | `uuid` |  |  | -> Opportunity (Lookup) |
| `dfsle__Reason__c` | Declined or Voided Reason | textarea | `text` |  |  |  |
| `dfsle__SenderEmail__c` | Sender Email | email | `text` |  |  |  |
| `dfsle__SenderName__c` | Sender Name | string | `varchar(56)` |  |  |  |
| `dfsle__Sent__c` | Sent | datetime | `timestamptz` |  |  |  |
| `dfsle__SourceId__c` | Salesforce Source ID | string | `varchar(18)` |  |  |  |
| `dfsle__Status__c` | Status | string | `varchar(56)` |  |  |  |
| `dfsle__TimeToComplete__c` | Time to Complete | string | `text` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| dfsle__RecipientStatus__c | dfsle__EnvelopeStatus__c | dfsle__Recipients__r | Yes |

---

## EOS Type (`dfsle__EOS_Type__c`) {#dfsleeostypec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0B |
| Fields | 16 |
| Relationships | 23 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Name | string | `varchar(38)` |  |  |  |
| `SetupOwnerId` | Location | reference | `uuid` |  |  | -> Organization, Profile, User (Lookup) |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `dfsle__DoNotConvertSpecialCharacters__c` | DoNotConvertSpecialCharacters | boolean | `boolean` |  |  |  |
| `dfsle__FolderNameFormat__c` | Folder Name Format | string | `varchar(255)` |  |  |  |
| `dfsle__FolderName__c` | Folder Name | string | `varchar(255)` | Yes |  |  |
| `dfsle__IsLegacyFileIt__c` | Was Previously a Legacy FileIt Row | boolean | `boolean` |  |  |  |
| `dfsle__PathFormat__c` | Path Format | string | `varchar(255)` |  |  |  |
| `dfsle__Path__c` | Path | string | `varchar(255)` | Yes |  |  |
| `dfsle__Variables__c` | Variables | string | `varchar(255)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Docusign Gen Template (`dfsle__GenTemplate__c`) {#dfslegentemplatec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0K |
| Fields | 43 |
| Relationships | 32 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `dfsle__AgreementMetadata__c` | Agreement Metadata | textarea | `text` |  |  |  |
| `dfsle__ApplyCLMWorkflow__c` | Apply CLM Workflow | string | `varchar(110)` |  |  |  |
| `dfsle__CurrencyLocaleEdit__c` | Generator Can Edit | boolean | `boolean` |  |  |  |
| `dfsle__Description__c` | Description | textarea | `text` |  |  |  |
| `dfsle__DocumentTargetLocation__c` | Document Target Location | picklist | `text` |  |  |  |
| `dfsle__EnvelopeConfiguration__c` | Envelope Template | reference | `uuid` |  |  | -> dfsle__EnvelopeConfiguration__c (Lookup) |
| `dfsle__FileName__c` | File Name | string | `varchar(255)` |  |  |  |
| `dfsle__FileSuffix__c` | File Suffix | string | `varchar(255)` |  |  |  |
| `dfsle__HasEnabledSendForSignature__c` | Has Enabled Send For Signature | boolean | `boolean` |  |  |  |
| `dfsle__HasLaunchAutomatically__c` | Has Launch Automatically | boolean | `boolean` |  |  |  |
| `dfsle__HasPreviewedDocuments__c` | Has Previewed Documents | boolean | `boolean` |  |  |  |
| `dfsle__InvoiceMappings__c` | Invoice Mappings | textarea | `text` |  |  |  |
| `dfsle__IsAutomateInvoice__c` | Is Automate Invoice | boolean | `boolean` |  |  |  |
| `dfsle__IsSample__c` | Is Sample | boolean | `boolean` |  |  |  |
| `dfsle__ObjectMappings2__c` | Object Mappings 2 | textarea | `text` |  |  |  |
| `dfsle__ObjectMappings3__c` | Object Mappings 3 | textarea | `text` |  |  |  |
| `dfsle__ObjectMappings4__c` | Object Mappings 4 | textarea | `text` |  |  |  |
| `dfsle__ObjectMappings__c` | Object Mappings | textarea | `text` |  |  |  |
| `dfsle__SignerMappings__c` | Signer Mappings | textarea | `text` |  |  |  |
| `dfsle__SourceObject__c` | Source Object | string | `varchar(255)` |  |  |  |
| `dfsle__StepsCompleted__c` | Steps Completed | double | `float8` |  |  |  |
| `dfsle__TemplateCurrencyFormat__c` | Template Currency Format | string | `varchar(255)` |  |  |  |
| `dfsle__TemplateId__c` | Template Id | string | `varchar(255)` |  | Yes |  |
| `dfsle__TemplateType__c` | Template Type | picklist | `text` |  |  |  |
| `dfsle__UseAllTemplates__c` | Use All Templates | boolean | `boolean` |  |  |  |
| `dfsle__UseCurrentRecord__c` | Use Current Record | boolean | `boolean` |  |  |  |
| `dfsle__templateCurrencyCode__c` | Template Currency Code | string | `varchar(255)` |  |  |  |
| `dfsle__templateCurrencySymbol__c` | Template Currency Symbol | string | `varchar(255)` |  |  |  |
| `dfsle__templateISO__c` | Template ISO | string | `varchar(255)` |  |  |  |
| `dfsle__templateLocaleCode__c` | Template Locale Code | string | `varchar(255)` |  |  |  |
| `dfsle__templateLocale__c` | Template Locale | string | `varchar(255)` |  |  |  |

### Picklist Values

**Document Target Location** (`dfsle__DocumentTargetLocation__c`):
- salesforce = `salesforce`
- clm = `clm`

**Template Type** (`dfsle__TemplateType__c`):
- DocuSign Agreement Cloud Editor = `Online Editor`
- Microsoft Word = `Microsoft Word`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Docusign Job (`dfsle__Jobs__c`) {#dfslejobsc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a1o |
| Fields | 18 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Docusign Job | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `dfsle__ContentVersion_Ids__c` | ContentVersion Ids | textarea | `text` |  |  |  |
| `dfsle__Gen_Template_Id__c` | Gen Template Id | string | `varchar(18)` |  |  |  |
| `dfsle__JobEnvelopeStatus__c` | Sending Status | string | `varchar(255)` |  |  |  |
| `dfsle__JobId__c` | Job Id | string | `varchar(255)` |  | Yes |  |
| `dfsle__Job_Status__c` | Job Status | picklist | `text` |  |  |  |
| `dfsle__Source_Id__c` | Source Id | string | `varchar(18)` |  |  |  |
| `dfsle__TaskId__c` | Task Ids | textarea | `text` |  |  |  |

### Picklist Values

**Job Status** (`dfsle__Job_Status__c`):
- Open = `Open`
- In Progress = `In Progress`
- Completed - Successful = `Completed - Successful`
- Failed = `Failed`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Docusign Log (`dfsle__Log__c`) {#dfslelogc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0M |
| Fields | 20 |
| Relationships | 31 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Docusign Log | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `dfsle__Class__c` | Class | string | `varchar(100)` |  |  |  |
| `dfsle__EntityId__c` | DocuSign entity ID | string | `varchar(36)` |  |  |  |
| `dfsle__Message__c` | Message | textarea | `text` |  |  |  |
| `dfsle__Method__c` | Method | string | `varchar(100)` |  |  |  |
| `dfsle__Severity__c` | Severity | picklist | `text` |  |  |  |
| `dfsle__SourceId__c` | Salesforce source ID | string | `varchar(18)` |  |  |  |
| `dfsle__TransactionId__c` | Transaction ID | string | `varchar(36)` |  |  |  |
| `dfsle__Version__c` | Version | string | `varchar(20)` |  |  |  |

### Picklist Values

**Severity** (`dfsle__Severity__c`):
- DEBUG = `DEBUG`
- INFO = `INFO`
- WARN = `WARN`
- ERROR = `ERROR`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Docusign Envelope Recipient (`dfsle__Recipient__c`) {#dfslerecipientc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0R |
| Fields | 33 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `dfsle__Envelope__c` | DocuSign Envelope | reference | `uuid` | Yes |  | -> dfsle__Envelope__c (MasterDetail) |
| `dfsle__AccessCode__c` | Access Code | string | `varchar(255)` |  |  |  |
| `dfsle__DeliverBySms__c` | Deliver By Sms | boolean | `boolean` |  |  |  |
| `dfsle__EmailMessage__c` | Email Message | textarea | `text` |  |  |  |
| `dfsle__EmailSubject__c` | Email Subject | textarea | `text` |  |  |  |
| `dfsle__Email__c` | Email | email | `text` |  |  |  |
| `dfsle__EnvelopeRecipientId__c` | Envelope Recipient ID | string | `varchar(100)` |  |  |  |
| `dfsle__HostEmail__c` | Host Email | string | `varchar(100)` |  |  |  |
| `dfsle__HostName__c` | Host Name | string | `varchar(100)` |  |  |  |
| `dfsle__IdCheckRequired__c` | ID Check Required | boolean | `boolean` |  |  |  |
| `dfsle__Language__c` | Language | string | `varchar(10)` |  |  |  |
| `dfsle__Note__c` | Recipient Note | textarea | `text` |  |  |  |
| `dfsle__Options__c` | Options | textarea | `text` |  |  |  |
| `dfsle__ReadOnly__c` | Read-only | boolean | `boolean` |  |  |  |
| `dfsle__Required__c` | Required | boolean | `boolean` |  |  |  |
| `dfsle__RoleValue__c` | Role Value | double | `float8` |  |  |  |
| `dfsle__Role__c` | Role | string | `varchar(100)` |  |  |  |
| `dfsle__RoutingOrder__c` | Routing Order | double | `float8` |  |  |  |
| `dfsle__Sequence__c` | Sequence | double | `float8` |  |  |  |
| `dfsle__SignNow__c` | Sign now | boolean | `boolean` |  |  |  |
| `dfsle__SigningGroupId__c` | Signing Group ID | double | `float8` |  |  |  |
| `dfsle__SigningGroupName__c` | Signing Group Name | string | `varchar(100)` |  |  |  |
| `dfsle__SmsPhoneNumber__c` | SMS Phone Number | string | `varchar(50)` |  |  |  |
| `dfsle__SourceId__c` | Source ID | string | `varchar(18)` |  |  |  |
| `dfsle__Type__c` | Type | picklist | `text` |  |  |  |

### Picklist Values

**Type** (`dfsle__Type__c`):
- Needs to Sign = `Signer`
- In Person Signer = `InPersonSigner`
- Receives a Copy = `CarbonCopy`
- Needs to View = `CertifiedDelivery`
- Specify Recipients = `Agent`
- Allow to Edit = `Editor`
- Update Recipients = `Intermediary`
- Seal = `Seal`
- Witness = `Witness`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Docusign Recipient Status (`dfsle__RecipientStatus__c`) {#dfslerecipientstatusc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0Q |
| Fields | 23 |
| Relationships | 34 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `dfsle__EnvelopeStatus__c` | DocuSign Envelope Status | reference | `uuid` | Yes |  | -> dfsle__EnvelopeStatus__c (MasterDetail) |
| `dfsle__Account__c` | Account | reference | `uuid` |  |  | -> Account (Lookup) |
| `dfsle__Completed__c` | Completed | datetime | `timestamptz` |  |  |  |
| `dfsle__Contact__c` | Contact | reference | `uuid` |  |  | -> Contact (Lookup) |
| `dfsle__Email__c` | Email | email | `text` |  |  |  |
| `dfsle__LastStatusUpdate__c` | Last Status Update | datetime | `timestamptz` |  |  |  |
| `dfsle__Lead__c` | Lead | reference | `uuid` |  |  | -> Lead (Lookup) |
| `dfsle__Reason__c` | Declined Reason | textarea | `text` |  |  |  |
| `dfsle__RoutingOrder__c` | Routing Order | double | `float8` |  |  |  |
| `dfsle__Sent__c` | Sent | datetime | `timestamptz` |  |  |  |
| `dfsle__Sequence__c` | Sequence | double | `float8` |  |  |  |
| `dfsle__SourceId__c` | Salesforce Source ID | string | `varchar(18)` |  |  |  |
| `dfsle__Status__c` | Status | string | `varchar(56)` |  |  |  |
| `dfsle__Type__c` | Type | string | `varchar(56)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Event (`Event`) {#event}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 00U |
| Fields | 76 |
| Relationships | 26 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Activity ID | id | `uuid` |  |  |  |
| `WhoId` | Name ID | reference | `uuid` |  |  | -> Contact, Lead (Lookup) |
| `WhatId` | Related To ID | reference | `uuid` |  |  | -> APXTConga4__Composer_QuickMerge__c, APXTConga4__Conga_Email_Staging__c, APXTConga4__Conga_Email_Template__c, Account, Asset, AssetRelationship, Campaign, Case, ContactRequest, Contract, Image, ListEmail, Location, Opportunity, Order, ProcessException, Product2, Quote, Solution, WorkOrder, WorkOrderLineItem, bpmpro3__Building_Permit_c__c, bpmpro3__CPI_AddOn_Product_Catalog__c, bpmpro3__Contact_CSV_Import__c, bpmpro3__Deal_Sheet__c, bpmpro3__Labor_Charge__c, bpmpro3__Labor_Ticket__c, bpmpro3__Material__c, bpmpro3__Orders__c, bpmpro3__PaymentBPM__c, bpmpro3__ProductItem__c, bpmpro3__Project_Invoice__c, bpmpro3__Project_Stage_Assignment_Team_Member__c, bpmpro3__Project_Stage_Team_Member__c, bpmpro3__Project__c, bpmpro3__Property__c, bpmpro3__Prospect__c, bpmpro3__Sales_Document__c, bpmpro3__Service_Ticket__c, bpmpro3__Timesheet__c, bpmpro3__Work_Assignment__c, dfsle__AgreementConfiguration__c, dfsle__BulkList__c, dfsle__BulkStatus__c, dfsle__CustomParameterMap__c, dfsle__EnvelopeConfiguration__c, dfsle__EnvelopeStatus__c, dfsle__GenTemplate__c, dfsle__Log__c, dfsle__RecipientStatus__c, inov8__PMT_Error_Log__c, inov8__PMT_Project__c, inov8__PMT_Task__c (Lookup) |
| `WhoCount` | Relation Count | int | `int4` |  |  |  |
| `WhatCount` | Related To Count | int | `int4` |  |  |  |
| `Subject` | Subject | combobox | `text` |  |  |  |
| `Location` | Location | string | `varchar(255)` |  |  |  |
| `IsAllDayEvent` | All-Day Event | boolean | `boolean` |  |  |  |
| `ActivityDateTime` | Due Date Time | datetime | `timestamptz` |  |  |  |
| `ActivityDate` | Due Date Only | date | `date` |  |  |  |
| `DurationInMinutes` | Duration | int | `int4` |  |  |  |
| `StartDateTime` | Start Date Time | datetime | `timestamptz` |  |  |  |
| `EndDateTime` | End Date Time | datetime | `timestamptz` |  |  |  |
| `EndDate` | End Date | date | `date` |  |  |  |
| `Description` | Description | textarea | `text` |  |  |  |
| `AccountId` | Account ID | reference | `uuid` |  |  | -> Account (Lookup) |
| `OwnerId` | Assigned To ID | reference | `uuid` |  |  | -> Calendar, User (Lookup) |
| `Type` | Type | picklist | `text` |  |  |  |
| `IsPrivate` | Private | boolean | `boolean` |  |  |  |
| `ShowAs` | Show Time As | picklist | `text` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `IsChild` | Is Child | boolean | `boolean` |  |  |  |
| `IsGroupEvent` | Is Group Event | boolean | `boolean` |  |  |  |
| `GroupEventType` | Group Event Type | picklist | `text` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `IsArchived` | Archived | boolean | `boolean` |  |  |  |
| `RecurrenceActivityId` | Recurrence Activity ID | reference | `uuid` |  |  | -> Event (Lookup) |
| `IsRecurrence` | Create Recurring Series of Events | boolean | `boolean` |  |  |  |
| `RecurrenceStartDateTime` | Recurrence Start | datetime | `timestamptz` |  |  |  |
| `RecurrenceEndDateOnly` | Recurrence End | date | `date` |  |  |  |
| `RecurrenceTimeZoneSidKey` | Recurrence Time Zone | picklist | `text` |  |  |  |
| `RecurrenceType` | Recurrence Type | picklist | `text` |  |  |  |
| `RecurrenceInterval` | Recurrence Interval | int | `int4` |  |  |  |
| `RecurrenceDayOfWeekMask` | Recurrence Day of Week Mask | int | `int4` |  |  |  |
| `RecurrenceDayOfMonth` | Recurrence Day of Month | int | `int4` |  |  |  |
| `RecurrenceInstance` | Recurrence Instance | picklist | `text` |  |  |  |
| `RecurrenceMonthOfYear` | Recurrence Month of Year | picklist | `text` |  |  |  |
| `ReminderDateTime` | Reminder Date/Time | datetime | `timestamptz` |  |  |  |
| `IsReminderSet` | Reminder Set | boolean | `boolean` |  |  |  |
| `EventSubtype` | Event Subtype | picklist | `text` |  |  |  |
| `IsRecurrence2Exclusion` | Historical Event, Not Following Recurrence | boolean | `boolean` |  |  |  |
| `Recurrence2PatternText` | Recurrence Pattern | textarea | `text` |  |  |  |
| `Recurrence2PatternVersion` | Pattern Version | picklist | `text` |  |  |  |
| `IsRecurrence2` | Repeat | boolean | `boolean` |  |  |  |
| `IsRecurrence2Exception` | Is Exception | boolean | `boolean` |  |  |  |
| `Recurrence2PatternStartDate` | Recurrence Pattern Start Date | datetime | `timestamptz` |  |  |  |
| `Recurrence2PatternTimeZone` | Recurrence Pattern Time Zone Reference | string | `varchar(255)` |  |  |  |
| `New_Account_Business_Internal_Role__c` | New Account Business Internal Role | picklist | `text` |  |  |  |
| `New_Account_Record_Type__c` | New Account Record Type | picklist | `text` |  |  |  |
| `Location_Custom__Street__s` | Location (Street) | textarea | `text` |  |  |  |
| `Location_Custom__City__s` | Location (City) | string | `varchar(40)` |  |  |  |
| `Location_Custom__PostalCode__s` | Location (ZIP/Postal Code) | string | `varchar(20)` |  |  |  |
| `Location_Custom__StateCode__s` | Location (State/Province) | picklist | `text` |  |  |  |
| `Location_Custom__CountryCode__s` | Location (Country/Territory) | picklist | `text` |  |  |  |
| `Location_Custom__Latitude__s` | Location (Latitude) | double | `numeric(18,15)` |  |  |  |
| `Location_Custom__Longitude__s` | Location (Longitude) | double | `numeric(18,15)` |  |  |  |
| `Location_Custom__GeocodeAccuracy__s` | Location (Geocode Accuracy) | picklist | `text` |  |  |  |
| `Location_Custom__c` | Location | address | `jsonb` |  |  |  |
| `New_Account_Billing_Email_Address__c` | New Contact Email | email | `text` |  |  |  |
| `New_Account_First_Name__c` | New Account First Name | string | `varchar(255)` |  |  |  |
| `New_Account_Name_Last_Name__c` | New Account Name | string | `varchar(255)` |  |  |  |
| `New_Contact_First_Name__c` | New Contact First Name | string | `varchar(255)` |  |  |  |
| `New_Contact_Last_Name__c` | New Contact Last Name | string | `varchar(255)` |  |  |  |
| `Preferred_Contact_Method__c` | Preferred Contact Method | picklist | `text` |  |  |  |
| `New_Contact_Mobile__c` | New Contact Mobile | phone | `text` |  |  |  |
| `New_Contact_Phone__c` | New Contact Phone | phone | `text` |  |  |  |
| `Lead_Source__c` | Lead Source | picklist | `text` |  |  |  |
| `Service_Type__c` | Service Type | picklist | `text` |  |  |  |
| `Relationship__c` | Relationship | picklist | `text` |  |  |  |
| `Construction_Type__c` | Construction Type | picklist | `text` |  |  |  |
| `Project_Manager__c` | Project Manager | reference | `uuid` |  |  | -> Contact (Lookup) |
| `Project_Name__c` | Project Name | string | `varchar(255)` |  |  |  |

### Picklist Values

**Type** (`Type`):
- On-site Visit = `On-site Visit`
- Email = `Email`
- Meeting = `Meeting`
- Other = `Other`
- Call = `Call`

**Show Time As** (`ShowAs`):
- Busy = `Busy`
- Out of Office = `OutOfOffice`
- Free = `Free`

**Group Event Type** (`GroupEventType`):
- Non-group Event = `0`
- Group Event = `1`
- Proposed Event = `2`
- IsRecurrence2 Series Pattern = `3`

**Recurrence Time Zone** (`RecurrenceTimeZoneSidKey`):
- (GMT+14:00) Line Islands Time (Pacific/Kiritimati) = `Pacific/Kiritimati`
- (GMT+13:45) Chatham Daylight Time (Pacific/Chatham) = `Pacific/Chatham`
- (GMT+13:00) New Zealand Daylight Time (Antarctica/McMurdo) = `Antarctica/McMurdo`
- (GMT+13:00) Apia Standard Time (Pacific/Apia) = `Pacific/Apia`
- (GMT+13:00) New Zealand Daylight Time (Pacific/Auckland) = `Pacific/Auckland`
- (GMT+13:00) Phoenix Islands Time (Pacific/Enderbury) = `Pacific/Enderbury`
- (GMT+13:00) Tokelau Time (Pacific/Fakaofo) = `Pacific/Fakaofo`
- (GMT+13:00) Tonga Standard Time (Pacific/Tongatapu) = `Pacific/Tongatapu`
- (GMT+12:00) Anadyr Standard Time (Asia/Anadyr) = `Asia/Anadyr`
- (GMT+12:00) Petropavlovsk-Kamchatski Standard Time (Asia/Kamchatka) = `Asia/Kamchatka`
- (GMT+12:00) Fiji Standard Time (Pacific/Fiji) = `Pacific/Fiji`
- (GMT+12:00) Tuvalu Time (Pacific/Funafuti) = `Pacific/Funafuti`
- (GMT+12:00) Marshall Islands Time (Pacific/Kwajalein) = `Pacific/Kwajalein`
- (GMT+12:00) Marshall Islands Time (Pacific/Majuro) = `Pacific/Majuro`
- (GMT+12:00) Nauru Time (Pacific/Nauru) = `Pacific/Nauru`
- (GMT+12:00) Norfolk Island Daylight Time (Pacific/Norfolk) = `Pacific/Norfolk`
- (GMT+12:00) Gilbert Islands Time (Pacific/Tarawa) = `Pacific/Tarawa`
- (GMT+12:00) Wake Island Time (Pacific/Wake) = `Pacific/Wake`
- (GMT+12:00) Wallis & Futuna Time (Pacific/Wallis) = `Pacific/Wallis`
- (GMT+11:00) Australian Eastern Daylight Time (Antarctica/Macquarie) = `Antarctica/Macquarie`
- (GMT+11:00) Magadan Standard Time (Asia/Magadan) = `Asia/Magadan`
- (GMT+11:00) Sakhalin Standard Time (Asia/Sakhalin) = `Asia/Sakhalin`
- (GMT+11:00) Magadan Standard Time (Asia/Srednekolymsk) = `Asia/Srednekolymsk`
- (GMT+11:00) Australian Eastern Daylight Time (Australia/Currie) = `Australia/Currie`
- (GMT+11:00) Australian Eastern Daylight Time (Australia/Hobart) = `Australia/Hobart`
- (GMT+11:00) Lord Howe Daylight Time (Australia/Lord_Howe) = `Australia/Lord_Howe`
- (GMT+11:00) Australian Eastern Daylight Time (Australia/Melbourne) = `Australia/Melbourne`
- (GMT+11:00) Australian Eastern Daylight Time (Australia/Sydney) = `Australia/Sydney`
- (GMT+11:00) Bougainville Standard Time (Pacific/Bougainville) = `Pacific/Bougainville`
- (GMT+11:00) Vanuatu Standard Time (Pacific/Efate) = `Pacific/Efate`
- (GMT+11:00) Solomon Islands Time (Pacific/Guadalcanal) = `Pacific/Guadalcanal`
- (GMT+11:00) Kosrae Time (Pacific/Kosrae) = `Pacific/Kosrae`
- (GMT+11:00) New Caledonia Standard Time (Pacific/Noumea) = `Pacific/Noumea`
- (GMT+11:00) Ponape Time (Pacific/Ponape) = `Pacific/Ponape`
- (GMT+10:30) Australian Central Daylight Time (Australia/Adelaide) = `Australia/Adelaide`
- (GMT+10:30) Australian Central Daylight Time (Australia/Broken_Hill) = `Australia/Broken_Hill`
- (GMT+10:00) Dumont-d’Urville Time (Antarctica/DumontDUrville) = `Antarctica/DumontDUrville`
- (GMT+10:00) Vladivostok Standard Time (Asia/Ust-Nera) = `Asia/Ust-Nera`
- (GMT+10:00) Vladivostok Standard Time (Asia/Vladivostok) = `Asia/Vladivostok`
- (GMT+10:00) Australian Eastern Standard Time (Australia/Brisbane) = `Australia/Brisbane`
- (GMT+10:00) Australian Eastern Standard Time (Australia/Lindeman) = `Australia/Lindeman`
- (GMT+10:00) Chamorro Standard Time (Pacific/Guam) = `Pacific/Guam`
- (GMT+10:00) Papua New Guinea Time (Pacific/Port_Moresby) = `Pacific/Port_Moresby`
- (GMT+10:00) Chamorro Standard Time (Pacific/Saipan) = `Pacific/Saipan`
- (GMT+10:00) Chuuk Time (Pacific/Truk) = `Pacific/Truk`
- (GMT+09:30) Australian Central Standard Time (Australia/Darwin) = `Australia/Darwin`
- (GMT+09:00) Yakutsk Standard Time (Asia/Chita) = `Asia/Chita`
- (GMT+09:00) East Timor Time (Asia/Dili) = `Asia/Dili`
- (GMT+09:00) Eastern Indonesia Time (Asia/Jayapura) = `Asia/Jayapura`
- (GMT+09:00) Yakutsk Standard Time (Asia/Khandyga) = `Asia/Khandyga`
- (GMT+09:00) Korean Standard Time (Asia/Seoul) = `Asia/Seoul`
- (GMT+09:00) Japan Standard Time (Asia/Tokyo) = `Asia/Tokyo`
- (GMT+09:00) Yakutsk Standard Time (Asia/Yakutsk) = `Asia/Yakutsk`
- (GMT+09:00) Palau Time (Pacific/Palau) = `Pacific/Palau`
- (GMT+08:45) Australian Central Western Standard Time (Australia/Eucla) = `Australia/Eucla`
- (GMT+08:00) Casey Time (Antarctica/Casey) = `Antarctica/Casey`
- (GMT+08:00) Brunei Darussalam Time (Asia/Brunei) = `Asia/Brunei`
- (GMT+08:00) Ulaanbaatar Standard Time (Asia/Choibalsan) = `Asia/Choibalsan`
- (GMT+08:00) Hong Kong Standard Time (Asia/Hong_Kong) = `Asia/Hong_Kong`
- (GMT+08:00) Irkutsk Standard Time (Asia/Irkutsk) = `Asia/Irkutsk`
- (GMT+08:00) Malaysia Time (Asia/Kuala_Lumpur) = `Asia/Kuala_Lumpur`
- (GMT+08:00) Malaysia Time (Asia/Kuching) = `Asia/Kuching`
- (GMT+08:00) China Standard Time (Asia/Macau) = `Asia/Macau`
- (GMT+08:00) Central Indonesia Time (Asia/Makassar) = `Asia/Makassar`
- (GMT+08:00) Philippine Standard Time (Asia/Manila) = `Asia/Manila`
- (GMT+08:00) China Standard Time (Asia/Shanghai) = `Asia/Shanghai`
- (GMT+08:00) Singapore Standard Time (Asia/Singapore) = `Asia/Singapore`
- (GMT+08:00) Taipei Standard Time (Asia/Taipei) = `Asia/Taipei`
- (GMT+08:00) Ulaanbaatar Standard Time (Asia/Ulaanbaatar) = `Asia/Ulaanbaatar`
- (GMT+08:00) Australian Western Standard Time (Australia/Perth) = `Australia/Perth`
- (GMT+07:00) Davis Time (Antarctica/Davis) = `Antarctica/Davis`
- (GMT+07:00) Indochina Time (Asia/Bangkok) = `Asia/Bangkok`
- (GMT+07:00) Moscow Standard Time + 4 (Asia/Barnaul) = `Asia/Barnaul`
- (GMT+07:00) Indochina Time (Asia/Ho_Chi_Minh) = `Asia/Ho_Chi_Minh`
- (GMT+07:00) Hovd Standard Time (Asia/Hovd) = `Asia/Hovd`
- (GMT+07:00) Western Indonesia Time (Asia/Jakarta) = `Asia/Jakarta`
- (GMT+07:00) Krasnoyarsk Standard Time (Asia/Krasnoyarsk) = `Asia/Krasnoyarsk`
- (GMT+07:00) Krasnoyarsk Standard Time (Asia/Novokuznetsk) = `Asia/Novokuznetsk`
- (GMT+07:00) Novosibirsk Standard Time (Asia/Novosibirsk) = `Asia/Novosibirsk`
- (GMT+07:00) Indochina Time (Asia/Phnom_Penh) = `Asia/Phnom_Penh`
- (GMT+07:00) Western Indonesia Time (Asia/Pontianak) = `Asia/Pontianak`
- (GMT+07:00) Moscow Standard Time + 4 (Asia/Tomsk) = `Asia/Tomsk`
- (GMT+07:00) Indochina Time (Asia/Vientiane) = `Asia/Vientiane`
- (GMT+07:00) Christmas Island Time (Indian/Christmas) = `Indian/Christmas`
- (GMT+06:30) Myanmar Time (Asia/Rangoon) = `Asia/Rangoon`
- (GMT+06:30) Cocos Islands Time (Indian/Cocos) = `Indian/Cocos`
- (GMT+06:00) Kyrgyzstan Time (Asia/Bishkek) = `Asia/Bishkek`
- (GMT+06:00) Bangladesh Standard Time (Asia/Dhaka) = `Asia/Dhaka`
- (GMT+06:00) Omsk Standard Time (Asia/Omsk) = `Asia/Omsk`
- (GMT+06:00) Bhutan Time (Asia/Thimphu) = `Asia/Thimphu`
- (GMT+06:00) China Standard Time (Asia/Urumqi) = `Asia/Urumqi`
- (GMT+06:00) Indian Ocean Time (Indian/Chagos) = `Indian/Chagos`
- (GMT+05:45) Nepal Time (Asia/Kathmandu) = `Asia/Kathmandu`
- (GMT+05:30) India Standard Time (Asia/Colombo) = `Asia/Colombo`
- (GMT+05:30) India Standard Time (Asia/Kolkata) = `Asia/Kolkata`
- (GMT+05:00) Mawson Time (Antarctica/Mawson) = `Antarctica/Mawson`
- (GMT+05:00) Vostok Time (Antarctica/Vostok) = `Antarctica/Vostok`
- (GMT+05:00) East Kazakhstan Time (Asia/Almaty) = `Asia/Almaty`
- (GMT+05:00) West Kazakhstan Time (Asia/Aqtau) = `Asia/Aqtau`
- (GMT+05:00) West Kazakhstan Time (Asia/Aqtobe) = `Asia/Aqtobe`
- (GMT+05:00) Turkmenistan Standard Time (Asia/Ashgabat) = `Asia/Ashgabat`
- (GMT+05:00) West Kazakhstan Time (Asia/Atyrau) = `Asia/Atyrau`
- (GMT+05:00) Tajikistan Time (Asia/Dushanbe) = `Asia/Dushanbe`
- (GMT+05:00) Pakistan Standard Time (Asia/Karachi) = `Asia/Karachi`
- (GMT+05:00) West Kazakhstan Time (Asia/Oral) = `Asia/Oral`
- (GMT+05:00) East Kazakhstan Time (Asia/Qostanay) = `Asia/Qostanay`
- (GMT+05:00) West Kazakhstan Time (Asia/Qyzylorda) = `Asia/Qyzylorda`
- (GMT+05:00) Uzbekistan Standard Time (Asia/Samarkand) = `Asia/Samarkand`
- (GMT+05:00) Uzbekistan Standard Time (Asia/Tashkent) = `Asia/Tashkent`
- (GMT+05:00) Yekaterinburg Standard Time (Asia/Yekaterinburg) = `Asia/Yekaterinburg`
- (GMT+05:00) French Southern & Antarctic Time (Indian/Kerguelen) = `Indian/Kerguelen`
- (GMT+05:00) Maldives Time (Indian/Maldives) = `Indian/Maldives`
- (GMT+04:30) Afghanistan Time (Asia/Kabul) = `Asia/Kabul`
- (GMT+04:00) Azerbaijan Standard Time (Asia/Baku) = `Asia/Baku`
- (GMT+04:00) Gulf Standard Time (Asia/Dubai) = `Asia/Dubai`
- (GMT+04:00) Gulf Standard Time (Asia/Muscat) = `Asia/Muscat`
- (GMT+04:00) Georgia Standard Time (Asia/Tbilisi) = `Asia/Tbilisi`
- (GMT+04:00) Armenia Standard Time (Asia/Yerevan) = `Asia/Yerevan`
- (GMT+04:00) Samara Standard Time (Europe/Astrakhan) = `Europe/Astrakhan`
- (GMT+04:00) Samara Standard Time (Europe/Samara) = `Europe/Samara`
- (GMT+04:00) Moscow Standard Time + 1 (Europe/Saratov) = `Europe/Saratov`
- (GMT+04:00) Moscow Standard Time + 1 (Europe/Ulyanovsk) = `Europe/Ulyanovsk`
- (GMT+04:00) Seychelles Time (Indian/Mahe) = `Indian/Mahe`
- (GMT+04:00) Mauritius Standard Time (Indian/Mauritius) = `Indian/Mauritius`
- (GMT+04:00) Réunion Time (Indian/Reunion) = `Indian/Reunion`
- (GMT+03:00) East Africa Time (Africa/Addis_Ababa) = `Africa/Addis_Ababa`
- (GMT+03:00) East Africa Time (Africa/Asmera) = `Africa/Asmera`
- (GMT+03:00) East Africa Time (Africa/Dar_es_Salaam) = `Africa/Dar_es_Salaam`
- (GMT+03:00) East Africa Time (Africa/Djibouti) = `Africa/Djibouti`
- (GMT+03:00) East Africa Time (Africa/Kampala) = `Africa/Kampala`
- (GMT+03:00) East Africa Time (Africa/Mogadishu) = `Africa/Mogadishu`
- (GMT+03:00) East Africa Time (Africa/Nairobi) = `Africa/Nairobi`
- (GMT+03:00) Syowa Time (Antarctica/Syowa) = `Antarctica/Syowa`
- (GMT+03:00) Arabian Standard Time (Asia/Aden) = `Asia/Aden`
- (GMT+03:00) Eastern European Standard Time (Asia/Amman) = `Asia/Amman`
- (GMT+03:00) Arabian Standard Time (Asia/Baghdad) = `Asia/Baghdad`
- (GMT+03:00) Arabian Standard Time (Asia/Bahrain) = `Asia/Bahrain`
- (GMT+03:00) Arabian Standard Time (Asia/Kuwait) = `Asia/Kuwait`
- (GMT+03:00) Arabian Standard Time (Asia/Qatar) = `Asia/Qatar`
- (GMT+03:00) Arabian Standard Time (Asia/Riyadh) = `Asia/Riyadh`
- (GMT+03:00) Eastern European Standard Time (Europe/Istanbul) = `Europe/Istanbul`
- (GMT+03:00) Moscow Standard Time (Europe/Kirov) = `Europe/Kirov`
- (GMT+03:00) Moscow Standard Time (Europe/Minsk) = `Europe/Minsk`
- (GMT+03:00) Moscow Standard Time (Europe/Moscow) = `Europe/Moscow`
- (GMT+03:00) Volgograd Standard Time (Europe/Volgograd) = `Europe/Volgograd`
- (GMT+03:00) East Africa Time (Indian/Antananarivo) = `Indian/Antananarivo`
- (GMT+03:00) East Africa Time (Indian/Comoro) = `Indian/Comoro`
- (GMT+03:00) East Africa Time (Indian/Mayotte) = `Indian/Mayotte`
- (GMT+02:00) Central Africa Time (Africa/Blantyre) = `Africa/Blantyre`
- (GMT+02:00) Central Africa Time (Africa/Bujumbura) = `Africa/Bujumbura`
- (GMT+02:00) Eastern European Standard Time (Africa/Cairo) = `Africa/Cairo`
- (GMT+02:00) Central Africa Time (Africa/Gaborone) = `Africa/Gaborone`
- (GMT+02:00) Central Africa Time (Africa/Harare) = `Africa/Harare`
- (GMT+02:00) South Africa Standard Time (Africa/Johannesburg) = `Africa/Johannesburg`
- (GMT+02:00) Central Africa Time (Africa/Juba) = `Africa/Juba`
- (GMT+02:00) Central Africa Time (Africa/Khartoum) = `Africa/Khartoum`
- (GMT+02:00) Central Africa Time (Africa/Kigali) = `Africa/Kigali`
- (GMT+02:00) Central Africa Time (Africa/Lubumbashi) = `Africa/Lubumbashi`
- (GMT+02:00) Central Africa Time (Africa/Lusaka) = `Africa/Lusaka`
- (GMT+02:00) Central Africa Time (Africa/Maputo) = `Africa/Maputo`
- (GMT+02:00) South Africa Standard Time (Africa/Maseru) = `Africa/Maseru`
- (GMT+02:00) South Africa Standard Time (Africa/Mbabane) = `Africa/Mbabane`
- (GMT+02:00) Eastern European Standard Time (Africa/Tripoli) = `Africa/Tripoli`
- (GMT+02:00) Central Africa Time (Africa/Windhoek) = `Africa/Windhoek`
- (GMT+02:00) Eastern European Standard Time (Asia/Beirut) = `Asia/Beirut`
- (GMT+02:00) Eastern European Standard Time (Asia/Famagusta) = `Asia/Famagusta`
- (GMT+02:00) Eastern European Standard Time (Asia/Gaza) = `Asia/Gaza`
- (GMT+02:00) Eastern European Standard Time (Asia/Hebron) = `Asia/Hebron`
- (GMT+02:00) Israel Standard Time (Asia/Jerusalem) = `Asia/Jerusalem`
- (GMT+02:00) Eastern European Standard Time (Asia/Nicosia) = `Asia/Nicosia`
- (GMT+02:00) Eastern European Standard Time (Europe/Athens) = `Europe/Athens`
- (GMT+02:00) Eastern European Standard Time (Europe/Bucharest) = `Europe/Bucharest`
- (GMT+02:00) Eastern European Standard Time (Europe/Chisinau) = `Europe/Chisinau`
- (GMT+02:00) Eastern European Standard Time (Europe/Helsinki) = `Europe/Helsinki`
- (GMT+02:00) Eastern European Standard Time (Europe/Kaliningrad) = `Europe/Kaliningrad`
- (GMT+02:00) Eastern European Standard Time (Europe/Kyiv) = `Europe/Kiev`
- (GMT+02:00) Eastern European Standard Time (Europe/Mariehamn) = `Europe/Mariehamn`
- (GMT+02:00) Eastern European Standard Time (Europe/Riga) = `Europe/Riga`
- (GMT+02:00) Eastern European Standard Time (Europe/Sofia) = `Europe/Sofia`
- (GMT+02:00) Eastern European Standard Time (Europe/Tallinn) = `Europe/Tallinn`
- (GMT+02:00) Eastern European Standard Time (Europe/Uzhgorod) = `Europe/Uzhgorod`
- (GMT+02:00) Eastern European Standard Time (Europe/Vilnius) = `Europe/Vilnius`
- (GMT+02:00) Eastern European Standard Time (Europe/Zaporozhye) = `Europe/Zaporozhye`
- (GMT+01:00) Central European Standard Time (Africa/Algiers) = `Africa/Algiers`
- (GMT+01:00) West Africa Standard Time (Africa/Bangui) = `Africa/Bangui`
- (GMT+01:00) West Africa Standard Time (Africa/Brazzaville) = `Africa/Brazzaville`
- (GMT+01:00) Central European Standard Time (Africa/Ceuta) = `Africa/Ceuta`
- (GMT+01:00) West Africa Standard Time (Africa/Douala) = `Africa/Douala`
- (GMT+01:00) West Africa Standard Time (Africa/Kinshasa) = `Africa/Kinshasa`
- (GMT+01:00) West Africa Standard Time (Africa/Lagos) = `Africa/Lagos`
- (GMT+01:00) West Africa Standard Time (Africa/Libreville) = `Africa/Libreville`
- (GMT+01:00) West Africa Standard Time (Africa/Luanda) = `Africa/Luanda`
- (GMT+01:00) West Africa Standard Time (Africa/Malabo) = `Africa/Malabo`
- (GMT+01:00) West Africa Standard Time (Africa/Ndjamena) = `Africa/Ndjamena`
- (GMT+01:00) West Africa Standard Time (Africa/Niamey) = `Africa/Niamey`
- (GMT+01:00) West Africa Standard Time (Africa/Porto-Novo) = `Africa/Porto-Novo`
- (GMT+01:00) Central European Standard Time (Africa/Tunis) = `Africa/Tunis`
- (GMT+01:00) Central European Standard Time (Arctic/Longyearbyen) = `Arctic/Longyearbyen`
- (GMT+01:00) Central European Standard Time (Europe/Amsterdam) = `Europe/Amsterdam`
- (GMT+01:00) Central European Standard Time (Europe/Andorra) = `Europe/Andorra`
- (GMT+01:00) Central European Standard Time (Europe/Belgrade) = `Europe/Belgrade`
- (GMT+01:00) Central European Standard Time (Europe/Berlin) = `Europe/Berlin`
- (GMT+01:00) Central European Standard Time (Europe/Bratislava) = `Europe/Bratislava`
- (GMT+01:00) Central European Standard Time (Europe/Brussels) = `Europe/Brussels`
- (GMT+01:00) Central European Standard Time (Europe/Budapest) = `Europe/Budapest`
- (GMT+01:00) Central European Standard Time (Europe/Busingen) = `Europe/Busingen`
- (GMT+01:00) Central European Standard Time (Europe/Copenhagen) = `Europe/Copenhagen`
- (GMT+01:00) Central European Standard Time (Europe/Gibraltar) = `Europe/Gibraltar`
- (GMT+01:00) Central European Standard Time (Europe/Ljubljana) = `Europe/Ljubljana`
- (GMT+01:00) Central European Standard Time (Europe/Luxembourg) = `Europe/Luxembourg`
- (GMT+01:00) Central European Standard Time (Europe/Madrid) = `Europe/Madrid`
- (GMT+01:00) Central European Standard Time (Europe/Malta) = `Europe/Malta`
- (GMT+01:00) Central European Standard Time (Europe/Monaco) = `Europe/Monaco`
- (GMT+01:00) Central European Standard Time (Europe/Oslo) = `Europe/Oslo`
- (GMT+01:00) Central European Standard Time (Europe/Paris) = `Europe/Paris`
- (GMT+01:00) Central European Standard Time (Europe/Podgorica) = `Europe/Podgorica`
- (GMT+01:00) Central European Standard Time (Europe/Prague) = `Europe/Prague`
- (GMT+01:00) Central European Standard Time (Europe/Rome) = `Europe/Rome`
- (GMT+01:00) Central European Standard Time (Europe/San_Marino) = `Europe/San_Marino`
- (GMT+01:00) Central European Standard Time (Europe/Sarajevo) = `Europe/Sarajevo`
- (GMT+01:00) Central European Standard Time (Europe/Skopje) = `Europe/Skopje`
- (GMT+01:00) Central European Standard Time (Europe/Stockholm) = `Europe/Stockholm`
- (GMT+01:00) Central European Standard Time (Europe/Tirane) = `Europe/Tirane`
- (GMT+01:00) Central European Standard Time (Europe/Vaduz) = `Europe/Vaduz`
- (GMT+01:00) Central European Standard Time (Europe/Vatican) = `Europe/Vatican`
- (GMT+01:00) Central European Standard Time (Europe/Vienna) = `Europe/Vienna`
- (GMT+01:00) Central European Standard Time (Europe/Warsaw) = `Europe/Warsaw`
- (GMT+01:00) Central European Standard Time (Europe/Zagreb) = `Europe/Zagreb`
- (GMT+01:00) Central European Standard Time (Europe/Zurich) = `Europe/Zurich`
- (GMT+00:00) Greenwich Mean Time (Africa/Abidjan) = `Africa/Abidjan`
- (GMT+00:00) Greenwich Mean Time (Africa/Accra) = `Africa/Accra`
- (GMT+00:00) Greenwich Mean Time (Africa/Bamako) = `Africa/Bamako`
- (GMT+00:00) Greenwich Mean Time (Africa/Banjul) = `Africa/Banjul`
- (GMT+00:00) Greenwich Mean Time (Africa/Bissau) = `Africa/Bissau`
- (GMT+00:00) Western European Standard Time (Africa/Casablanca) = `Africa/Casablanca`
- (GMT+00:00) Greenwich Mean Time (Africa/Conakry) = `Africa/Conakry`
- (GMT+00:00) Greenwich Mean Time (Africa/Dakar) = `Africa/Dakar`
- (GMT+00:00) Western European Standard Time (Africa/El_Aaiun) = `Africa/El_Aaiun`
- (GMT+00:00) Greenwich Mean Time (Africa/Freetown) = `Africa/Freetown`
- (GMT+00:00) Greenwich Mean Time (Africa/Lome) = `Africa/Lome`
- (GMT+00:00) Greenwich Mean Time (Africa/Monrovia) = `Africa/Monrovia`
- (GMT+00:00) Greenwich Mean Time (Africa/Nouakchott) = `Africa/Nouakchott`
- (GMT+00:00) Greenwich Mean Time (Africa/Ouagadougou) = `Africa/Ouagadougou`
- (GMT+00:00) Greenwich Mean Time (Africa/Sao_Tome) = `Africa/Sao_Tome`
- (GMT+00:00) Greenwich Mean Time (America/Danmarkshavn) = `America/Danmarkshavn`
- (GMT+00:00) Greenwich Mean Time (Antarctica/Troll) = `Antarctica/Troll`
- (GMT+00:00) Western European Standard Time (Atlantic/Canary) = `Atlantic/Canary`
- (GMT+00:00) Western European Standard Time (Atlantic/Faeroe) = `Atlantic/Faeroe`
- (GMT+00:00) Western European Standard Time (Atlantic/Madeira) = `Atlantic/Madeira`
- (GMT+00:00) Greenwich Mean Time (Atlantic/Reykjavik) = `Atlantic/Reykjavik`
- (GMT+00:00) Greenwich Mean Time (Atlantic/St_Helena) = `Atlantic/St_Helena`
- (GMT+00:00) Greenwich Mean Time (Europe/Dublin) = `Europe/Dublin`
- (GMT+00:00) Greenwich Mean Time (Europe/Guernsey) = `Europe/Guernsey`
- (GMT+00:00) Greenwich Mean Time (Europe/Isle_of_Man) = `Europe/Isle_of_Man`
- (GMT+00:00) Greenwich Mean Time (Europe/Jersey) = `Europe/Jersey`
- (GMT+00:00) Western European Standard Time (Europe/Lisbon) = `Europe/Lisbon`
- (GMT+00:00) Greenwich Mean Time (Europe/London) = `Europe/London`
- (GMT+00:00) Greenwich Mean Time (GMT) = `GMT`
- (GMT-01:00) Azores Standard Time (Atlantic/Azores) = `Atlantic/Azores`
- (GMT-01:00) Cape Verde Standard Time (Atlantic/Cape_Verde) = `Atlantic/Cape_Verde`
- (GMT-02:00) West Greenland Standard Time (America/Godthab) = `America/Godthab`
- (GMT-02:00) Fernando de Noronha Standard Time (America/Noronha) = `America/Noronha`
- (GMT-02:00) East Greenland Standard Time (America/Scoresbysund) = `America/Scoresbysund`
- (GMT-02:00) South Georgia Time (Atlantic/South_Georgia) = `Atlantic/South_Georgia`
- (GMT-03:00) Brasilia Standard Time (America/Araguaina) = `America/Araguaina`
- (GMT-03:00) Argentina Standard Time (America/Argentina/Buenos_Aires) = `America/Argentina/Buenos_Aires`
- (GMT-03:00) Argentina Standard Time (America/Argentina/La_Rioja) = `America/Argentina/La_Rioja`
- (GMT-03:00) Argentina Standard Time (America/Argentina/Rio_Gallegos) = `America/Argentina/Rio_Gallegos`
- (GMT-03:00) Argentina Standard Time (America/Argentina/Salta) = `America/Argentina/Salta`
- (GMT-03:00) Argentina Standard Time (America/Argentina/San_Juan) = `America/Argentina/San_Juan`
- (GMT-03:00) Argentina Standard Time (America/Argentina/San_Luis) = `America/Argentina/San_Luis`
- (GMT-03:00) Argentina Standard Time (America/Argentina/Tucuman) = `America/Argentina/Tucuman`
- (GMT-03:00) Argentina Standard Time (America/Argentina/Ushuaia) = `America/Argentina/Ushuaia`
- (GMT-03:00) Paraguay Standard Time (America/Asuncion) = `America/Asuncion`
- (GMT-03:00) Brasilia Standard Time (America/Bahia) = `America/Bahia`
- (GMT-03:00) Brasilia Standard Time (America/Belem) = `America/Belem`
- (GMT-03:00) Argentina Standard Time (America/Catamarca) = `America/Catamarca`
- (GMT-03:00) French Guiana Time (America/Cayenne) = `America/Cayenne`
- (GMT-03:00) Argentina Standard Time (America/Cordoba) = `America/Cordoba`
- (GMT-03:00) Brasilia Standard Time (America/Fortaleza) = `America/Fortaleza`
- (GMT-03:00) Argentina Standard Time (America/Jujuy) = `America/Jujuy`
- (GMT-03:00) Brasilia Standard Time (America/Maceio) = `America/Maceio`
- (GMT-03:00) Argentina Standard Time (America/Mendoza) = `America/Mendoza`
- (GMT-03:00) St Pierre & Miquelon Standard Time (America/Miquelon) = `America/Miquelon`
- (GMT-03:00) Uruguay Standard Time (America/Montevideo) = `America/Montevideo`
- (GMT-03:00) Suriname Time (America/Paramaribo) = `America/Paramaribo`
- (GMT-03:00) Chile Standard Time (America/Punta_Arenas) = `America/Punta_Arenas`
- (GMT-03:00) Brasilia Standard Time (America/Recife) = `America/Recife`
- (GMT-03:00) Brasilia Standard Time (America/Santarem) = `America/Santarem`
- (GMT-03:00) Chile Summer Time (America/Santiago) = `America/Santiago`
- (GMT-03:00) Brasilia Standard Time (America/Sao_Paulo) = `America/Sao_Paulo`
- (GMT-03:00) Chile Standard Time (Antarctica/Palmer) = `Antarctica/Palmer`
- (GMT-03:00) Rothera Time (Antarctica/Rothera) = `Antarctica/Rothera`
- (GMT-03:00) Falkland Islands Standard Time (Atlantic/Stanley) = `Atlantic/Stanley`
- (GMT-03:30) Newfoundland Standard Time (America/St_Johns) = `America/St_Johns`
- (GMT-04:00) Atlantic Standard Time (America/Anguilla) = `America/Anguilla`
- (GMT-04:00) Atlantic Standard Time (America/Antigua) = `America/Antigua`
- (GMT-04:00) Atlantic Standard Time (America/Aruba) = `America/Aruba`
- (GMT-04:00) Atlantic Standard Time (America/Barbados) = `America/Barbados`
- (GMT-04:00) Atlantic Standard Time (America/Blanc-Sablon) = `America/Blanc-Sablon`
- (GMT-04:00) Amazon Standard Time (America/Boa_Vista) = `America/Boa_Vista`
- (GMT-04:00) Amazon Standard Time (America/Campo_Grande) = `America/Campo_Grande`
- (GMT-04:00) Venezuela Time (America/Caracas) = `America/Caracas`
- (GMT-04:00) Amazon Standard Time (America/Cuiaba) = `America/Cuiaba`
- (GMT-04:00) Atlantic Standard Time (America/Curacao) = `America/Curacao`
- (GMT-04:00) Atlantic Standard Time (America/Dominica) = `America/Dominica`
- (GMT-04:00) Atlantic Standard Time (America/Glace_Bay) = `America/Glace_Bay`
- (GMT-04:00) Atlantic Standard Time (America/Goose_Bay) = `America/Goose_Bay`
- (GMT-04:00) Atlantic Standard Time (America/Grenada) = `America/Grenada`
- (GMT-04:00) Atlantic Standard Time (America/Guadeloupe) = `America/Guadeloupe`
- (GMT-04:00) Guyana Time (America/Guyana) = `America/Guyana`
- (GMT-04:00) Atlantic Standard Time (America/Halifax) = `America/Halifax`
- (GMT-04:00) Atlantic Standard Time (America/Kralendijk) = `America/Kralendijk`
- (GMT-04:00) Bolivia Time (America/La_Paz) = `America/La_Paz`
- (GMT-04:00) Atlantic Standard Time (America/Lower_Princes) = `America/Lower_Princes`
- (GMT-04:00) Amazon Standard Time (America/Manaus) = `America/Manaus`
- (GMT-04:00) Atlantic Standard Time (America/Marigot) = `America/Marigot`
- (GMT-04:00) Atlantic Standard Time (America/Martinique) = `America/Martinique`
- (GMT-04:00) Atlantic Standard Time (America/Moncton) = `America/Moncton`
- (GMT-04:00) Atlantic Standard Time (America/Montserrat) = `America/Montserrat`
- (GMT-04:00) Atlantic Standard Time (America/Port_of_Spain) = `America/Port_of_Spain`
- (GMT-04:00) Amazon Standard Time (America/Porto_Velho) = `America/Porto_Velho`
- (GMT-04:00) Atlantic Standard Time (America/Puerto_Rico) = `America/Puerto_Rico`
- (GMT-04:00) Atlantic Standard Time (America/Santo_Domingo) = `America/Santo_Domingo`
- (GMT-04:00) Atlantic Standard Time (America/St_Barthelemy) = `America/St_Barthelemy`
- (GMT-04:00) Atlantic Standard Time (America/St_Kitts) = `America/St_Kitts`
- (GMT-04:00) Atlantic Standard Time (America/St_Lucia) = `America/St_Lucia`
- (GMT-04:00) Atlantic Standard Time (America/St_Thomas) = `America/St_Thomas`
- (GMT-04:00) Atlantic Standard Time (America/St_Vincent) = `America/St_Vincent`
- (GMT-04:00) Atlantic Standard Time (America/Thule) = `America/Thule`
- (GMT-04:00) Atlantic Standard Time (America/Tortola) = `America/Tortola`
- (GMT-04:00) Atlantic Standard Time (Atlantic/Bermuda) = `Atlantic/Bermuda`
- (GMT-05:00) Colombia Standard Time (America/Bogota) = `America/Bogota`
- (GMT-05:00) Eastern Standard Time (America/Cancun) = `America/Cancun`
- (GMT-05:00) Eastern Standard Time (America/Cayman) = `America/Cayman`
- (GMT-05:00) Eastern Standard Time (America/Coral_Harbour) = `America/Coral_Harbour`
- (GMT-05:00) Eastern Standard Time (America/Detroit) = `America/Detroit`
- (GMT-05:00) Acre Standard Time (America/Eirunepe) = `America/Eirunepe`
- (GMT-05:00) Eastern Standard Time (America/Grand_Turk) = `America/Grand_Turk`
- (GMT-05:00) Ecuador Time (America/Guayaquil) = `America/Guayaquil`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Indianapolis) = `America/Indiana/Indianapolis`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Marengo) = `America/Indiana/Marengo`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Petersburg) = `America/Indiana/Petersburg`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Vevay) = `America/Indiana/Vevay`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Vincennes) = `America/Indiana/Vincennes`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Winamac) = `America/Indiana/Winamac`
- (GMT-05:00) Eastern Standard Time (America/Iqaluit) = `America/Iqaluit`
- (GMT-05:00) Eastern Standard Time (America/Jamaica) = `America/Jamaica`
- (GMT-05:00) Eastern Standard Time (America/Kentucky/Monticello) = `America/Kentucky/Monticello`
- (GMT-05:00) Peru Standard Time (America/Lima) = `America/Lima`
- (GMT-05:00) Eastern Standard Time (America/Louisville) = `America/Louisville`
- (GMT-05:00) Eastern Standard Time (America/Montreal) = `America/Montreal`
- (GMT-05:00) Eastern Standard Time (America/Nassau) = `America/Nassau`
- (GMT-05:00) Eastern Standard Time (America/New_York) = `America/New_York`
- (GMT-05:00) Eastern Standard Time (America/Nipigon) = `America/Nipigon`
- (GMT-05:00) Eastern Standard Time (America/Panama) = `America/Panama`
- (GMT-05:00) Eastern Standard Time (America/Pangnirtung) = `America/Pangnirtung`
- (GMT-05:00) Eastern Standard Time (America/Port-au-Prince) = `America/Port-au-Prince`
- (GMT-05:00) Acre Standard Time (America/Rio_Branco) = `America/Rio_Branco`
- (GMT-05:00) Eastern Standard Time (America/Thunder_Bay) = `America/Thunder_Bay`
- (GMT-05:00) Eastern Standard Time (America/Toronto) = `America/Toronto`
- (GMT-05:00) Easter Island Summer Time (Pacific/Easter) = `Pacific/Easter`
- (GMT-06:00) Central Standard Time (America/Bahia_Banderas) = `America/Bahia_Banderas`
- (GMT-06:00) Central Standard Time (America/Belize) = `America/Belize`
- (GMT-06:00) Central Standard Time (America/Chicago) = `America/Chicago`
- (GMT-06:00) Mexican Pacific Standard Time (America/Chihuahua) = `America/Chihuahua`
- (GMT-06:00) Central Standard Time (America/Costa_Rica) = `America/Costa_Rica`
- (GMT-06:00) Central Standard Time (America/El_Salvador) = `America/El_Salvador`
- (GMT-06:00) Central Standard Time (America/Guatemala) = `America/Guatemala`
- (GMT-06:00) Central Standard Time (America/Indiana/Knox) = `America/Indiana/Knox`
- (GMT-06:00) Central Standard Time (America/Indiana/Tell_City) = `America/Indiana/Tell_City`
- (GMT-06:00) Central Standard Time (America/Managua) = `America/Managua`
- (GMT-06:00) Central Standard Time (America/Matamoros) = `America/Matamoros`
- (GMT-06:00) Central Standard Time (America/Menominee) = `America/Menominee`
- (GMT-06:00) Central Standard Time (America/Merida) = `America/Merida`
- (GMT-06:00) Central Standard Time (America/Mexico_City) = `America/Mexico_City`
- (GMT-06:00) Central Standard Time (America/Monterrey) = `America/Monterrey`
- (GMT-06:00) Central Standard Time (America/North_Dakota/Beulah) = `America/North_Dakota/Beulah`
- (GMT-06:00) Central Standard Time (America/North_Dakota/Center) = `America/North_Dakota/Center`
- (GMT-06:00) Central Standard Time (America/North_Dakota/New_Salem) = `America/North_Dakota/New_Salem`
- (GMT-06:00) Mountain Standard Time (America/Ojinaga) = `America/Ojinaga`
- (GMT-06:00) Central Standard Time (America/Rainy_River) = `America/Rainy_River`
- (GMT-06:00) Central Standard Time (America/Rankin_Inlet) = `America/Rankin_Inlet`
- (GMT-06:00) Central Standard Time (America/Regina) = `America/Regina`
- (GMT-06:00) Central Standard Time (America/Resolute) = `America/Resolute`
- (GMT-06:00) Central Standard Time (America/Swift_Current) = `America/Swift_Current`
- (GMT-06:00) Central Standard Time (America/Tegucigalpa) = `America/Tegucigalpa`
- (GMT-06:00) Central Standard Time (America/Winnipeg) = `America/Winnipeg`
- (GMT-06:00) Galapagos Time (Pacific/Galapagos) = `Pacific/Galapagos`
- (GMT-07:00) Mountain Standard Time (America/Boise) = `America/Boise`
- (GMT-07:00) Mountain Standard Time (America/Cambridge_Bay) = `America/Cambridge_Bay`
- (GMT-07:00) Mountain Standard Time (America/Creston) = `America/Creston`
- (GMT-07:00) Yukon Time (America/Dawson) = `America/Dawson`
- (GMT-07:00) Mountain Standard Time (America/Dawson_Creek) = `America/Dawson_Creek`
- (GMT-07:00) Mountain Standard Time (America/Denver) = `America/Denver`
- (GMT-07:00) Mountain Standard Time (America/Edmonton) = `America/Edmonton`
- (GMT-07:00) Mountain Standard Time (America/Fort_Nelson) = `America/Fort_Nelson`
- (GMT-07:00) Mexican Pacific Standard Time (America/Hermosillo) = `America/Hermosillo`
- (GMT-07:00) Mountain Standard Time (America/Inuvik) = `America/Inuvik`
- (GMT-07:00) Mexican Pacific Standard Time (America/Mazatlan) = `America/Mazatlan`
- (GMT-07:00) Mountain Standard Time (America/Phoenix) = `America/Phoenix`
- (GMT-07:00) Yukon Time (America/Whitehorse) = `America/Whitehorse`
- (GMT-07:00) Mountain Standard Time (America/Yellowknife) = `America/Yellowknife`
- (GMT-08:00) Pacific Standard Time (America/Los_Angeles) = `America/Los_Angeles`
- (GMT-08:00) Northwest Mexico Standard Time (America/Santa_Isabel) = `America/Santa_Isabel`
- (GMT-08:00) Pacific Standard Time (America/Tijuana) = `America/Tijuana`
- (GMT-08:00) Pacific Standard Time (America/Vancouver) = `America/Vancouver`
- (GMT-08:00) Pitcairn Time (Pacific/Pitcairn) = `Pacific/Pitcairn`
- (GMT-09:00) Alaska Standard Time (America/Anchorage) = `America/Anchorage`
- (GMT-09:00) Alaska Standard Time (America/Juneau) = `America/Juneau`
- (GMT-09:00) Alaska Standard Time (America/Metlakatla) = `America/Metlakatla`
- (GMT-09:00) Alaska Standard Time (America/Nome) = `America/Nome`
- (GMT-09:00) Alaska Standard Time (America/Sitka) = `America/Sitka`
- (GMT-09:00) Alaska Standard Time (America/Yakutat) = `America/Yakutat`
- (GMT-09:00) Gambier Time (Pacific/Gambier) = `Pacific/Gambier`
- (GMT-09:30) Marquesas Time (Pacific/Marquesas) = `Pacific/Marquesas`
- (GMT-10:00) Hawaii-Aleutian Standard Time (America/Adak) = `America/Adak`
- (GMT-10:00) Hawaii-Aleutian Standard Time (Pacific/Honolulu) = `Pacific/Honolulu`
- (GMT-10:00) Hawaii-Aleutian Standard Time (Pacific/Johnston) = `Pacific/Johnston`
- (GMT-10:00) Cook Islands Standard Time (Pacific/Rarotonga) = `Pacific/Rarotonga`
- (GMT-10:00) Tahiti Time (Pacific/Tahiti) = `Pacific/Tahiti`
- (GMT-11:00) Samoa Standard Time (Pacific/Midway) = `Pacific/Midway`
- (GMT-11:00) Niue Time (Pacific/Niue) = `Pacific/Niue`
- (GMT-11:00) Samoa Standard Time (Pacific/Pago_Pago) = `Pacific/Pago_Pago`

**Recurrence Type** (`RecurrenceType`):
- Recurs Daily = `RecursDaily`
- Recurs Every Weekday = `RecursEveryWeekday`
- Recurs Monthly = `RecursMonthly`
- Recurs Monthly Nth = `RecursMonthlyNth`
- Recurs Weekly = `RecursWeekly`
- Recurs Yearly = `RecursYearly`
- Recurs Yearly Nth = `RecursYearlyNth`

**Recurrence Instance** (`RecurrenceInstance`):
- 1st = `First`
- 2nd = `Second`
- 3rd = `Third`
- 4th = `Fourth`
- last = `Last`

**Recurrence Month of Year** (`RecurrenceMonthOfYear`):
- January = `January`
- February = `February`
- March = `March`
- April = `April`
- May = `May`
- June = `June`
- July = `July`
- August = `August`
- September = `September`
- October = `October`
- November = `November`
- December = `December`

**Event Subtype** (`EventSubtype`):
- Event = `Event`

**Pattern Version** (`Recurrence2PatternVersion`):
- RFC 5545 v4 RRULE = `1`
- RFC 5545 v4_2 RRULE = `2`

**New Account Business Internal Role** (`New_Account_Business_Internal_Role__c`):
- Client = `Client`
- Homeowner Association = `Homeowner Association`
- Labor Subcontractor = `Labor Subcontractor`
- Municipality = `Municipality`
- Other = `Other`
- Owning Entity = `Owning Entity`
- Product Vendor = `Product Vendor`
- Professional Services = `Professional Services`

**New Account Record Type** (`New_Account_Record_Type__c`):
- Home Owner = `Home Owner`
- Builder = `Builder`

**Location (State/Province)** (`Location_Custom__StateCode__s`):
- Acre = `AC`
- Agrigento = `AG`
- Aguascalientes = `AG`
- Alabama = `AL`
- Alagoas = `AL`
- Alaska = `AK`
- Alberta = `AB`
- Alessandria = `AL`
- Amapá = `AP`
- Amazonas = `AM`
- Ancona = `AN`
- Andaman and Nicobar Islands = `AN`
- Andhra Pradesh = `AP`
- Anhui = `34`
- Aosta = `AO`
- Arezzo = `AR`
- Arizona = `AZ`
- Arkansas = `AR`
- Arunachal Pradesh = `AR`
- Ascoli Piceno = `AP`
- Assam = `AS`
- Asti = `AT`
- Australian Capital Territory = `ACT`
- Avellino = `AV`
- Bahia = `BA`
- Baja California = `BC`
- Baja California Sur = `BS`
- Bari = `BA`
- Barletta-Andria-Trani = `BT`
- Beijing = `11`
- Belluno = `BL`
- Benevento = `BN`
- Bergamo = `BG`
- Biella = `BI`
- Bihar = `BR`
- Bologna = `BO`
- Bolzano = `BZ`
- Brescia = `BS`
- Brindisi = `BR`
- British Columbia = `BC`
- Cagliari = `CA`
- California = `CA`
- Caltanissetta = `CL`
- Campeche = `CM`
- Campobasso = `CB`
- Carbonia-Iglesias = `CI`
- Carlow = `CW`
- Caserta = `CE`
- Catania = `CT`
- Catanzaro = `CZ`
- Cavan = `CN`
- Ceará = `CE`
- Chandigarh = `CH`
- Chhattisgarh = `CT`
- Chiapas = `CS`
- Chieti = `CH`
- Chihuahua = `CH`
- Chinese Taipei = `71`
- Chongqing = `50`
- Clare = `CE`
- Coahuila = `CO`
- Colima = `CL`
- Colorado = `CO`
- Como = `CO`
- Connecticut = `CT`
- Cork = `CO`
- Cosenza = `CS`
- Cremona = `CR`
- Crotone = `KR`
- Cuneo = `CN`
- Dadra and Nagar Haveli = `DN`
- Daman and Diu = `DD`
- Delaware = `DE`
- Delhi = `DL`
- District of Columbia = `DC`
- Distrito Federal = `DF`
- Donegal = `DL`
- Dublin = `D`
- Durango = `DG`
- Enna = `EN`
- Espírito Santo = `ES`
- Federal District = `DF`
- Fermo = `FM`
- Ferrara = `FE`
- Florence = `FI`
- Florida = `FL`
- Foggia = `FG`
- Forlì-Cesena = `FC`
- Frosinone = `FR`
- Fujian = `35`
- Galway = `G`
- Gansu = `62`
- Genoa = `GE`
- Georgia = `GA`
- Goa = `GA`
- Goiás = `GO`
- Gorizia = `GO`
- Grosseto = `GR`
- Guanajuato = `GT`
- Guangdong = `44`
- Guangxi = `45`
- Guerrero = `GR`
- Guizhou = `52`
- Gujarat = `GJ`
- Hainan = `46`
- Haryana = `HR`
- Hawaii = `HI`
- Hebei = `13`
- Heilongjiang = `23`
- Henan = `41`
- Hidalgo = `HG`
- Himachal Pradesh = `HP`
- Hong Kong = `91`
- Hubei = `42`
- Hunan = `43`
- Idaho = `ID`
- Illinois = `IL`
- Imperia = `IM`
- Indiana = `IN`
- Iowa = `IA`
- Isernia = `IS`
- Jalisco = `JA`
- Jammu and Kashmir = `JK`
- Jharkhand = `JH`
- Jiangsu = `32`
- Jiangxi = `36`
- Jilin = `22`
- Kansas = `KS`
- Karnataka = `KA`
- Kentucky = `KY`
- Kerala = `KL`
- Kerry = `KY`
- Kildare = `KE`
- Kilkenny = `KK`
- L'Aquila = `AQ`
- Lakshadweep = `LD`
- Laois = `LS`
- La Spezia = `SP`
- Latina = `LT`
- Lecce = `LE`
- Lecco = `LC`
- Leitrim = `LM`
- Liaoning = `21`
- Limerick = `LK`
- Livorno = `LI`
- Lodi = `LO`
- Longford = `LD`
- Louisiana = `LA`
- Louth = `LH`
- Lucca = `LU`
- Macao = `92`
- Macerata = `MC`
- Madhya Pradesh = `MP`
- Maharashtra = `MH`
- Maine = `ME`
- Manipur = `MN`
- Manitoba = `MB`
- Mantua = `MN`
- Maranhão = `MA`
- Maryland = `MD`
- Massa and Carrara = `MS`
- Massachusetts = `MA`
- Matera = `MT`
- Mato Grosso = `MT`
- Mato Grosso do Sul = `MS`
- Mayo = `MO`
- Meath = `MH`
- Medio Campidano = `VS`
- Meghalaya = `ML`
- Messina = `ME`
- Mexico State = `ME`
- Michigan = `MI`
- Michoacán = `MI`
- Milan = `MI`
- Minas Gerais = `MG`
- Minnesota = `MN`
- Mississippi = `MS`
- Missouri = `MO`
- Mizoram = `MZ`
- Modena = `MO`
- Monaghan = `MN`
- Montana = `MT`
- Monza and Brianza = `MB`
- Morelos = `MO`
- Nagaland = `NL`
- Naples = `NA`
- Nayarit = `NA`
- Nebraska = `NE`
- Nei Mongol = `15`
- Nevada = `NV`
- New Brunswick = `NB`
- Newfoundland and Labrador = `NL`
- New Hampshire = `NH`
- New Jersey = `NJ`
- New Mexico = `NM`
- New South Wales = `NSW`
- New York = `NY`
- Ningxia = `64`
- North Carolina = `NC`
- North Dakota = `ND`
- Northern Territory = `NT`
- Northwest Territories = `NT`
- Novara = `NO`
- Nova Scotia = `NS`
- Nuevo León = `NL`
- Nunavut = `NU`
- Nuoro = `NU`
- Oaxaca = `OA`
- Odisha = `OR`
- Offaly = `OY`
- Ogliastra = `OG`
- Ohio = `OH`
- Oklahoma = `OK`
- Olbia-Tempio = `OT`
- Ontario = `ON`
- Oregon = `OR`
- Oristano = `OR`
- Padua = `PD`
- Palermo = `PA`
- Pará = `PA`
- Paraíba = `PB`
- Paraná = `PR`
- Parma = `PR`
- Pavia = `PV`
- Pennsylvania = `PA`
- Pernambuco = `PE`
- Perugia = `PG`
- Pesaro and Urbino = `PU`
- Pescara = `PE`
- Piacenza = `PC`
- Piauí = `PI`
- Pisa = `PI`
- Pistoia = `PT`
- Pordenone = `PN`
- Potenza = `PZ`
- Prato = `PO`
- Prince Edward Island = `PE`
- Puducherry = `PY`
- Puebla = `PB`
- Punjab = `PB`
- Qinghai = `63`
- Quebec = `QC`
- Queensland = `QLD`
- Querétaro = `QE`
- Quintana Roo = `QR`
- Ragusa = `RG`
- Rajasthan = `RJ`
- Ravenna = `RA`
- Reggio Calabria = `RC`
- Reggio Emilia = `RE`
- Rhode Island = `RI`
- Rieti = `RI`
- Rimini = `RN`
- Rio de Janeiro = `RJ`
- Rio Grande do Norte = `RN`
- Rio Grande do Sul = `RS`
- Rome = `RM`
- Rondônia = `RO`
- Roraima = `RR`
- Roscommon = `RN`
- Rovigo = `RO`
- Salerno = `SA`
- San Luis Potosí = `SL`
- Santa Catarina = `SC`
- São Paulo = `SP`
- Saskatchewan = `SK`
- Sassari = `SS`
- Savona = `SV`
- Sergipe = `SE`
- Shaanxi = `61`
- Shandong = `37`
- Shanghai = `31`
- Shanxi = `14`
- Sichuan = `51`
- Siena = `SI`
- Sikkim = `SK`
- Sinaloa = `SI`
- Sligo = `SO`
- Sondrio = `SO`
- Sonora = `SO`
- South Australia = `SA`
- South Carolina = `SC`
- South Dakota = `SD`
- Syracuse = `SR`
- Tabasco = `TB`
- Tamaulipas = `TM`
- Tamil Nadu = `TN`
- Taranto = `TA`
- Tasmania = `TAS`
- Tennessee = `TN`
- Teramo = `TE`
- Terni = `TR`
- Texas = `TX`
- Tianjin = `12`
- Tipperary = `TA`
- Tlaxcala = `TL`
- Tocantins = `TO`
- Trapani = `TP`
- Trento = `TN`
- Treviso = `TV`
- Trieste = `TS`
- Tripura = `TR`
- Turin = `TO`
- Udine = `UD`
- Utah = `UT`
- Uttarakhand = `UT`
- Uttar Pradesh = `UP`
- Varese = `VA`
- Venice = `VE`
- Veracruz = `VE`
- Verbano-Cusio-Ossola = `VB`
- Vercelli = `VC`
- Vermont = `VT`
- Verona = `VR`
- Vibo Valentia = `VV`
- Vicenza = `VI`
- Victoria = `VIC`
- Virginia = `VA`
- Viterbo = `VT`
- Washington = `WA`
- Waterford = `WD`
- West Bengal = `WB`
- Western Australia = `WA`
- Westmeath = `WH`
- West Virginia = `WV`
- Wexford = `WX`
- Wicklow = `WW`
- Wisconsin = `WI`
- Wyoming = `WY`
- Xinjiang = `65`
- Xizang = `54`
- Yucatán = `YU`
- Yukon Territories = `YT`
- Yunnan = `53`
- Zacatecas = `ZA`
- Zhejiang = `33`

**Location (Country/Territory)** (`Location_Custom__CountryCode__s`):
- Afghanistan = `AF`
- Aland Islands = `AX`
- Albania = `AL`
- Algeria = `DZ`
- Andorra = `AD`
- Angola = `AO`
- Anguilla = `AI`
- Antarctica = `AQ`
- Antigua and Barbuda = `AG`
- Argentina = `AR`
- Armenia = `AM`
- Aruba = `AW`
- Australia = `AU`
- Austria = `AT`
- Azerbaijan = `AZ`
- Bahamas = `BS`
- Bahrain = `BH`
- Bangladesh = `BD`
- Barbados = `BB`
- Belarus = `BY`
- Belgium = `BE`
- Belize = `BZ`
- Benin = `BJ`
- Bermuda = `BM`
- Bhutan = `BT`
- Bolivia, Plurinational State of = `BO`
- Bonaire, Sint Eustatius and Saba = `BQ`
- Bosnia and Herzegovina = `BA`
- Botswana = `BW`
- Bouvet Island = `BV`
- Brazil = `BR`
- British Indian Ocean Territory = `IO`
- Brunei Darussalam = `BN`
- Bulgaria = `BG`
- Burkina Faso = `BF`
- Burundi = `BI`
- Cambodia = `KH`
- Cameroon = `CM`
- Canada = `CA`
- Cape Verde = `CV`
- Cayman Islands = `KY`
- Central African Republic = `CF`
- Chad = `TD`
- Chile = `CL`
- China = `CN`
- Chinese Taipei = `TW`
- Christmas Island = `CX`
- Cocos (Keeling) Islands = `CC`
- Colombia = `CO`
- Comoros = `KM`
- Congo = `CG`
- Congo, the Democratic Republic of the = `CD`
- Cook Islands = `CK`
- Costa Rica = `CR`
- Cote d'Ivoire = `CI`
- Croatia = `HR`
- Cuba = `CU`
- Curaçao = `CW`
- Cyprus = `CY`
- Czech Republic = `CZ`
- Denmark = `DK`
- Djibouti = `DJ`
- Dominica = `DM`
- Dominican Republic = `DO`
- Ecuador = `EC`
- Egypt = `EG`
- El Salvador = `SV`
- Equatorial Guinea = `GQ`
- Eritrea = `ER`
- Estonia = `EE`
- Ethiopia = `ET`
- Falkland Islands (Malvinas) = `FK`
- Faroe Islands = `FO`
- Fiji = `FJ`
- Finland = `FI`
- France = `FR`
- French Guiana = `GF`
- French Polynesia = `PF`
- French Southern Territories = `TF`
- Gabon = `GA`
- Gambia = `GM`
- Georgia = `GE`
- Germany = `DE`
- Ghana = `GH`
- Gibraltar = `GI`
- Greece = `GR`
- Greenland = `GL`
- Grenada = `GD`
- Guadeloupe = `GP`
- Guatemala = `GT`
- Guernsey = `GG`
- Guinea = `GN`
- Guinea-Bissau = `GW`
- Guyana = `GY`
- Haiti = `HT`
- Heard Island and McDonald Islands = `HM`
- Holy See (Vatican City State) = `VA`
- Honduras = `HN`
- Hungary = `HU`
- Iceland = `IS`
- India = `IN`
- Indonesia = `ID`
- Iran, Islamic Republic of = `IR`
- Iraq = `IQ`
- Ireland = `IE`
- Isle of Man = `IM`
- Israel = `IL`
- Italy = `IT`
- Jamaica = `JM`
- Japan = `JP`
- Jersey = `JE`
- Jordan = `JO`
- Kazakhstan = `KZ`
- Kenya = `KE`
- Kiribati = `KI`
- Korea, Democratic People's Republic of = `KP`
- Korea, Republic of = `KR`
- Kuwait = `KW`
- Kyrgyzstan = `KG`
- Lao People's Democratic Republic = `LA`
- Latvia = `LV`
- Lebanon = `LB`
- Lesotho = `LS`
- Liberia = `LR`
- Libyan Arab Jamahiriya = `LY`
- Liechtenstein = `LI`
- Lithuania = `LT`
- Luxembourg = `LU`
- Macao = `MO`
- Macedonia, the former Yugoslav Republic of = `MK`
- Madagascar = `MG`
- Malawi = `MW`
- Malaysia = `MY`
- Maldives = `MV`
- Mali = `ML`
- Malta = `MT`
- Martinique = `MQ`
- Mauritania = `MR`
- Mauritius = `MU`
- Mayotte = `YT`
- Mexico = `MX`
- Moldova, Republic of = `MD`
- Monaco = `MC`
- Mongolia = `MN`
- Montenegro = `ME`
- Montserrat = `MS`
- Morocco = `MA`
- Mozambique = `MZ`
- Myanmar = `MM`
- Namibia = `NA`
- Nauru = `NR`
- Nepal = `NP`
- Netherlands = `NL`
- New Caledonia = `NC`
- New Zealand = `NZ`
- Nicaragua = `NI`
- Niger = `NE`
- Nigeria = `NG`
- Niue = `NU`
- Norfolk Island = `NF`
- Norway = `NO`
- Oman = `OM`
- Pakistan = `PK`
- Palestinian Territory, Occupied = `PS`
- Panama = `PA`
- Papua New Guinea = `PG`
- Paraguay = `PY`
- Peru = `PE`
- Philippines = `PH`
- Pitcairn = `PN`
- Poland = `PL`
- Portugal = `PT`
- Qatar = `QA`
- Reunion = `RE`
- Romania = `RO`
- Russian Federation = `RU`
- Rwanda = `RW`
- Saint Barthélemy = `BL`
- Saint Helena, Ascension and Tristan da Cunha = `SH`
- Saint Kitts and Nevis = `KN`
- Saint Lucia = `LC`
- Saint Martin (French part) = `MF`
- Saint Pierre and Miquelon = `PM`
- Saint Vincent and the Grenadines = `VC`
- Samoa = `WS`
- San Marino = `SM`
- Sao Tome and Principe = `ST`
- Saudi Arabia = `SA`
- Senegal = `SN`
- Serbia = `RS`
- Seychelles = `SC`
- Sierra Leone = `SL`
- Singapore = `SG`
- Sint Maarten (Dutch part) = `SX`
- Slovakia = `SK`
- Slovenia = `SI`
- Solomon Islands = `SB`
- Somalia = `SO`
- South Africa = `ZA`
- South Georgia and the South Sandwich Islands = `GS`
- South Sudan = `SS`
- Spain = `ES`
- Sri Lanka = `LK`
- Sudan = `SD`
- Suriname = `SR`
- Svalbard and Jan Mayen = `SJ`
- Swaziland = `SZ`
- Sweden = `SE`
- Switzerland = `CH`
- Syrian Arab Republic = `SY`
- Tajikistan = `TJ`
- Tanzania, United Republic of = `TZ`
- Thailand = `TH`
- Timor-Leste = `TL`
- Togo = `TG`
- Tokelau = `TK`
- Tonga = `TO`
- Trinidad and Tobago = `TT`
- Tunisia = `TN`
- Turkey = `TR`
- Turkmenistan = `TM`
- Turks and Caicos Islands = `TC`
- Tuvalu = `TV`
- Uganda = `UG`
- Ukraine = `UA`
- United Arab Emirates = `AE`
- United Kingdom = `GB`
- United States = `US`
- Uruguay = `UY`
- Uzbekistan = `UZ`
- Vanuatu = `VU`
- Venezuela, Bolivarian Republic of = `VE`
- Viet Nam = `VN`
- Virgin Islands, British = `VG`
- Wallis and Futuna = `WF`
- Western Sahara = `EH`
- Yemen = `YE`
- Zambia = `ZM`
- Zimbabwe = `ZW`

**Location (Geocode Accuracy)** (`Location_Custom__GeocodeAccuracy__s`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

**Preferred Contact Method** (`Preferred_Contact_Method__c`):
- Call = `Call`
- Text = `Text`
- Email = `Email`

**Lead Source** (`Lead_Source__c`):
- Company Truck = `Company Truck`
- Crew at Jobsite = `Crew at Jobsite`
- Digital Advertisement = `Digital Advertisement`
- Events and Networking = `Events and Networking`
- Online Marketplaces and Services = `Online Marketplaces and Services`
- Other = `Other`
- Partner = `Partner`
- Purchased List = `Purchased List`
- Referral - Client = `Referral - Client`
- Referral - Employee = `Referral - Employee`
- Referral - Sales Person = `Referral - Sales Person`
- Referral - Third Party = `Referral - Third Party`
- Trade Show = `Trade Show`
- Traditional Advertisement = `Traditional Advertisement`
- Website = `Website`
- Yard Signs at Jobsites = `Yard Signs at Jobsites`

**Service Type** (`Service_Type__c`):
- Export = `Export`
- Installation Only = `Installation Only`
- Other = `Other`
- Product + Installation = `Product + Installation`
- Product Only = `Product Only`

**Relationship** (`Relationship__c`):
- New Client = `New Client`
- Repeat Business = `Repeat Business`

**Construction Type** (`Construction_Type__c`):
- New Construction - Commercial = `New Construction Commercial`
- New Construction - Residential = `New Construction Residential`
- Retrofit - Commercial = `Retrofit Commercial`
- Retrofit - Residential = `Retrofit Residential`
- Service - New Construction = `Service New Construction`
- Service - Retrofit = `Service Retrofit`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AcceptedEventRelation | EventId | AcceptedEventRelations | No |
| ActionPlanItem | ItemId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| DeclinedEventRelation | EventId | DeclinedEventRelations | No |
| Event | RecurrenceActivityId | RecurringEvents | No |
| EventRelation | EventId | EventRelations | Yes |
| EventWhoRelation | EventId | EventWhoRelations | No |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| VideoCall | EventId | VideoCallActivities | No |

---

## Group (`Group`) {#group}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 00G |
| Fields | 14 |
| Relationships | 14 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Group ID | id | `uuid` |  |  |  |
| `Name` | Name | string | `varchar(40)` | Yes |  |  |
| `DeveloperName` | Developer Name | string | `varchar(80)` |  |  |  |
| `RelatedId` | Related ID | reference | `uuid` |  |  | -> User, UserRole (Lookup) |
| `Type` | Type | picklist | `text` | Yes |  |  |
| `Email` | Email | email | `text` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` | Yes |  | -> Organization, User (Lookup) |
| `DoesSendEmailToMembers` | Send Email to Members | boolean | `boolean` |  |  |  |
| `DoesIncludeBosses` | Include Bosses | boolean | `boolean` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |

### Picklist Values

**Type** (`Type`):
- null = `AllCustomerPortal`
- null = `ChannelProgramGroup`
- null = `CollaborationGroup`
- null = `DataAnalytics`
- null = `Manager`
- null = `ManagerAndSubordinatesInternal`
- null = `Organization`
- null = `Participant`
- null = `PRMOrganization`
- null = `Queue`
- null = `Regular`
- null = `Role`
- null = `RoleAndSubordinates`
- null = `RoleAndSubordinatesInternal`
- null = `SharingRecordCollGroup`
- null = `Territory`
- null = `TerritoryAndSubordinates`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| BriefcaseAssignment | UserOrGroupId | N/A | Yes |
| CaseHistory2 | OwnerId | N/A | No |
| ContentWorkspaceMember | MemberId | N/A | Yes |
| FieldDefinition | BusinessOwnerId | N/A | No |
| FlowOrchestrationWorkItem | AssigneeId | N/A | Yes |
| GroupMember | GroupId | GroupMembers | Yes |
| GroupMember | UserOrGroupId | N/A | Yes |
| SharingRecordCollection | GroupId | N/A | Yes |
| SharingRecordCollectionMember | UserOrGroupId | N/A | Yes |
| User | DelegatedApproverId | DelegatedUsers | No |

---

## In App Checklist Settings (`In_App_Checklist_Settings__c`) {#inappchecklistsettingsc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a00 |
| Fields | 11 |
| Relationships | 23 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Name | string | `varchar(80)` |  |  |  |
| `SetupOwnerId` | Location | reference | `uuid` |  |  | -> Organization, Profile, User (Lookup) |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `ProfileKey__c` | ProfileKey | string | `varchar(255)` |  |  |  |
| `Sales_Cloud_In_App_Page__c` | Sales Cloud In App Page | url | `text` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## PMT Error Log (`inov8__PMT_Error_Log__c`) {#inov8pmterrorlogc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0w |
| Fields | 16 |
| Relationships | 31 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | PMT Error Log Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `inov8__Apex_Class__c` | Apex Class | string | `varchar(255)` |  |  |  |
| `inov8__Error_Message__c` | Error Message | string | `varchar(255)` | Yes |  |  |
| `inov8__Method_Name__c` | Method Name | string | `varchar(255)` |  |  |  |
| `inov8__Salesforce_Record_Id__c` | Salesforce Record Id | string | `varchar(18)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## PMT Phase (`inov8__PMT_Phase__c`) {#inov8pmtphasec}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0x |
| Fields | 36 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Phase Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `inov8__Project__c` | Project Name | reference | `uuid` | Yes |  | -> inov8__PMT_Project__c (MasterDetail) |
| `inov8__End_date_from_child__c` | End date from child | date | `date` |  |  |  |
| `inov8__Phase_Description__c` | Phase Description | textarea | `text` |  |  |  |
| `inov8__Phase_Health__c` | Phase Health | picklist | `text` |  |  |  |
| `inov8__Start_date_from_child_project__c` | Start date from child project | date | `date` |  |  |  |
| `inov8__Sum_of_tasks_count_child__c` | Sum of tasks count child | double | `float8` |  |  |  |
| `inov8__End_Date_Rollup__c` | End Date Rollup | date | `date` |  |  |  |
| `inov8__Phases_with_completed_tasks__c` | Phases with completed tasks | double | `float8` |  |  |  |
| `inov8__Start_Date_Rollup__c` | Start Date Rollup | date | `date` |  |  |  |
| `inov8__Sum_Of_Task_Completion__c` | Sum Of Task Completion | percent | `numeric(5,2)` |  |  |  |
| `inov8__Task_Count__c` | Tasks Count | double | `float8` |  |  |  |
| `inov8__Daily_progress__c` | Daily progress | string | `text` |  |  |  |
| `inov8__Days_to_go__c` | Days to go | double | `float8` |  |  |  |
| `inov8__Deadline_formula__c` | End Date | date | `date` |  |  |  |
| `inov8__Duration__c` | Duration | double | `float8` |  |  |  |
| `inov8__Expected_age_of_completion__c` | Expected % age of completion | double | `numeric(18,2)` |  |  |  |
| `inov8__Health_Icon__c` | Phase Health | string | `text` |  |  |  |
| `inov8__Kickoff_formula__c` | Start Date | date | `date` |  |  |  |
| `inov8__Length__c` | Length | double | `float8` |  |  |  |
| `inov8__Percentage_Completion_without_child__c` | Percentage Completion without child % | percent | `numeric(5,2)` |  |  |  |
| `inov8__Phase_Completion_Image__c` | Phase Completion | string | `text` |  |  |  |
| `inov8__Phase_Completion__c` | Phase Completion % | percent | `numeric(5,2)` |  |  |  |
| `inov8__Phase_Weighted_Perc__c` | Phase Weighted % | double | `numeric(18,2)` |  |  |  |
| `inov8__Project_Name__c` | Project Name | string | `text` |  |  |  |
| `inov8__Sum_Task_Duration__c` | Sum Task Duration | double | `float8` |  |  |  |
| `inov8__Sum_Weighted_perc__c` | Sum Weighted % | double | `numeric(18,2)` |  |  |  |

### Picklist Values

**Phase Health** (`inov8__Phase_Health__c`):
- Not Started = `Not Started`
- On Track = `On Track`
- At Risk = `At Risk`
- Late = `Late`
- On Hold = `On Hold`
- Completed = `Completed`
- Closed, not Completed = `Closed, not Completed`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| inov8__PMT_Task__c | inov8__Phase__c | inov8__Project_Tasks__r | Yes |

---

## PMT Program (`inov8__PMT_Program__c`) {#inov8pmtprogramc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0y |
| Fields | 14 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Program Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `inov8__Program_Health__c` | Program Health | picklist | `text` |  |  |  |
| `inov8__Program_Owner__c` | Program Owner | string | `text` |  |  |  |
| `inov8__Program_Health_Icon__c` | Program Health Icon | string | `text` |  |  |  |

### Picklist Values

**Program Health** (`inov8__Program_Health__c`):
- Not Started = `Not Started`
- On Track = `On Track`
- At Risk = `At Risk`
- Late = `Late`
- On Hold = `On Hold`
- Completed = `Completed`
- Closed, not Completed = `Closed, not Completed`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| inov8__PMT_Project__c | inov8__Program__c | inov8__Projects__r | No |

---

## PMT Project (`inov8__PMT_Project__c`) {#inov8pmtprojectc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a0z |
| Fields | 74 |
| Relationships | 40 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Project Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `inov8__Assumptions__c` | Assumptions | textarea | `text` |  |  |  |
| `inov8__Business_Case__c` | Business Case | textarea | `text` |  |  |  |
| `inov8__Description__c` | Description | textarea | `text` |  |  |  |
| `inov8__Go_Live_Date__c` | Go Live Date | date | `date` |  |  |  |
| `inov8__Goal_Statement__c` | Goal Statement | textarea | `text` |  |  |  |
| `inov8__Health_Comment__c` | Health Comment | textarea | `text` |  |  |  |
| `inov8__In_Scope__c` | In Scope | textarea | `text` |  |  |  |
| `inov8__Initial_End_Date__c` | Initial End Date | date | `date` |  |  |  |
| `inov8__Initial_Start_Date__c` | Initial Start Date | date | `date` |  |  |  |
| `inov8__IsTemplate__c` | IsTemplate? | boolean | `boolean` |  |  |  |
| `inov8__Issues_Risk__c` | Issues & Risks | textarea | `text` |  |  |  |
| `inov8__Level_of_Effort__c` | Level of Effort | picklist | `text` | Yes |  |  |
| `inov8__Out_of_Scope__c` | Out of Scope | textarea | `text` |  |  |  |
| `inov8__Owner_s_Department__c` | Owner's Department | string | `text` |  |  |  |
| `inov8__PMO_Contact__c` | PMO Contact | reference | `uuid` |  |  | -> User (Lookup) |
| `inov8__Path_to_Green__c` | Path to Green | textarea | `text` |  |  |  |
| `inov8__Portfolio__c` | Portfolio | multipicklist | `text[]` |  |  |  |
| `inov8__Problem_Statement__c` | Problem Statement | textarea | `text` |  |  |  |
| `inov8__Processes_Impacted__c` | Process(es) Impacted | picklist | `text` |  |  |  |
| `inov8__Program__c` | Program | reference | `uuid` |  |  | -> inov8__PMT_Program__c (Lookup) |
| `inov8__Project_Category__c` | Project Category | picklist | `text` |  |  |  |
| `inov8__Project_Health__c` | Project Health | picklist | `text` |  |  |  |
| `inov8__Project_Initiator__c` | Project Initiator | picklist | `text` |  |  |  |
| `inov8__Project_Lead__c` | Project Lead | string | `text` |  |  |  |
| `inov8__Project_Owner__c` | Project Owner | string | `text` |  |  |  |
| `inov8__Project_Status__c` | Project Current Stage | picklist | `text` |  |  |  |
| `inov8__Release_Changes__c` | Release Changes | textarea | `text` |  |  |  |
| `inov8__Release_Date__c` | Release Date | date | `date` |  |  |  |
| `inov8__Roadmap_Status__c` | Roadmap Status | picklist | `text` |  |  |  |
| `inov8__SOX_Comment__c` | SOX Comment | string | `varchar(255)` |  |  |  |
| `inov8__SOX_Impact__c` | SOX Impact | boolean | `boolean` |  |  |  |
| `inov8__Sponsor__c` | Sponsor | string | `varchar(255)` |  |  |  |
| `inov8__SystemsImpacted__c` | System(s) Impacted | multipicklist | `text[]` |  |  |  |
| `inov8__Deadline__c` | End Date Rollup | date | `date` |  |  |  |
| `inov8__Deadline_parent_phase__c` | End Date from parent phase | date | `date` |  |  |  |
| `inov8__Start_Date_Rollup__c` | Start Date Rollup | date | `date` |  |  |  |
| `inov8__Start_Date_from_parent_phase__c` | Start Date from parent phase | date | `date` |  |  |  |
| `inov8__Sum_of_sum_of_percentage_completion__c` | Sum of sum of percentage completion | percent | `numeric(5,2)` |  |  |  |
| `inov8__Sum_of_task_count_child_project__c` | Sum of task count child project | double | `float8` |  |  |  |
| `inov8__Sum_of_tasks_count__c` | Sum of tasks count | double | `float8` |  |  |  |
| `inov8__Days_to_go__c` | Days to go | double | `float8` |  |  |  |
| `inov8__Deadline_formula__c` | End Date | date | `date` |  |  |  |
| `inov8__Duration__c` | Duration | double | `float8` |  |  |  |
| `inov8__End_Fiscal_Year__c` | End Fiscal Year | string | `text` |  |  |  |
| `inov8__Fiscal_Year_Difference__c` | Fiscal Year Difference | double | `float8` |  |  |  |
| `inov8__Health_Icon__c` | Project Health | string | `text` |  |  |  |
| `inov8__Kickoff_formula__c` | Start Date | date | `date` |  |  |  |
| `inov8__Percentage_Completion__c` | Percentage Completion % | percent | `numeric(5,2)` |  |  |  |
| `inov8__Program_Text__c` | Program | string | `text` |  |  |  |
| `inov8__Project_Completion_Image__c` | Project Completion | string | `text` |  |  |  |
| `inov8__Project_End_Month__c` | Project End Month | string | `text` |  |  |  |
| `inov8__Project_Size__c` | Project Size | double | `float8` |  |  |  |
| `inov8__Project_Start_Month__c` | Project Start Month | string | `text` |  |  |  |
| `inov8__Qtr_of_Completion__c` | Qtr of Completion | string | `text` |  |  |  |
| `inov8__Release_Qtr__c` | Release Qtr | string | `text` |  |  |  |
| `inov8__Start_Fiscal_Year__c` | Start Fiscal Year | string | `text` |  |  |  |
| `inov8__Sum_Wheigted_perc__c` | Sum Wheigted % | double | `numeric(18,2)` |  |  |  |
| `inov8__Sum_of_Task_Duration__c` | Sum of Task Duration | double | `float8` |  |  |  |
| `Account__c` | Account | reference | `uuid` |  |  | -> Account (Lookup) |
| `Installation_Person__c` | Installation Person | reference | `uuid` |  |  | -> User (Lookup) |
| `Opportunity__c` | Opportunity | reference | `uuid` |  |  | -> Opportunity (Lookup) |
| `Project_Manager__c` | Project Manager | reference | `uuid` |  |  | -> User (Lookup) |

### Picklist Values

**Level of Effort** (`inov8__Level_of_Effort__c`):
- Small = `Small`
- Medium = `Medium`
- Large = `Large`

**Portfolio** (`inov8__Portfolio__c`):
- F&S = `F&S`
- P2P = `P2P`
- Q2O = `Q2O`
- R2R = `R2R`
- New Entity = `New Entity`

**Process(es) Impacted** (`inov8__Processes_Impacted__c`):
- Accruals = `Accruals`
- Cash = `Cash`
- Commissions = `Commissions`
- Comp & Ben = `Comp & Ben`
- Fixed Assets = `Fixed Assets`
- Inter-Co = `Inter-Co`
- Prepaids = `Prepaids`
- Revenue = `Revenue`
- T&E = `T&E`
- Other = `Other`

**Project Category** (`inov8__Project_Category__c`):
- IT = `IT`
- Non IT = `Non IT`
- SteerCo = `SteerCo`

**Project Health** (`inov8__Project_Health__c`):
- Not Started = `Not Started`
- On Track = `On Track`
- At Risk = `At Risk`
- Late = `Late`
- On Hold = `On Hold`
- Completed = `Completed`
- Closed, not Completed = `Closed, not Completed`

**Project Initiator** (`inov8__Project_Initiator__c`):
- Tax = `Tax`
- IT = `IT`
- Legal = `Legal`
- F&S = `F&S`
- Sales = `Sales`

**Project Current Stage** (`inov8__Project_Status__c`):
- New = `New`
- In Review = `In Review`
- Product Ordered = `Product Ordered`
- Permit = `Permit`
- Product Arrival = `Product Arrival`
- Schedule Appointment = `Schedule Appointment`
- Installation = `Installation`
- Inspection = `Inspection`
- Service = `Service`
- Completed = `Completed`

**Roadmap Status** (`inov8__Roadmap_Status__c`):
- Committed = `Committed`
- Deferred = `Deferred`
- Incremental = `Incremental`
- Funded = `Funded`
- Non funded = `Non funded`
- Internal = `Internal`
- Runrate = `Runrate`

**System(s) Impacted** (`inov8__SystemsImpacted__c`):
- Other = `Other`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| Case | inov8__PMT_Project__c | inov8__Cases__r | No |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| inov8__PMT_Phase__c | inov8__Project__c | inov8__Project_Phases__r | Yes |
| inov8__PMT_Resource_Allocation__c | inov8__Project__c | inov8__Resource_Allocations__r | Yes |

---

## PMT Resource Allocation (`inov8__PMT_Resource_Allocation__c`) {#inov8pmtresourceallocationc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a10 |
| Fields | 48 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Resource Allocation No | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `inov8__Resource_Availability__c` | Resource Availability | reference | `uuid` | Yes |  | -> inov8__PMT_Resource_Availability__c (MasterDetail) |
| `inov8__Project__c` | Project | reference | `uuid` | Yes |  | -> inov8__PMT_Project__c (MasterDetail) |
| `inov8__Apr_Hours__c` | Apr Hours | double | `float8` |  |  |  |
| `inov8__Apr__c` | Apr | percent | `numeric(5,2)` |  |  |  |
| `inov8__Aug_Hours__c` | Aug Hours | double | `float8` |  |  |  |
| `inov8__Aug__c` | Aug | percent | `numeric(5,2)` |  |  |  |
| `inov8__Dec_Hours__c` | Dec Hours | double | `float8` |  |  |  |
| `inov8__Dec__c` | Dec | percent | `numeric(5,2)` |  |  |  |
| `inov8__Feb_Hours__c` | Feb Hours | double | `float8` |  |  |  |
| `inov8__Feb__c` | Feb | percent | `numeric(5,2)` |  |  |  |
| `inov8__Jan_Hours__c` | Jan Hours | double | `float8` |  |  |  |
| `inov8__Jan__c` | Jan | percent | `numeric(5,2)` |  |  |  |
| `inov8__Jul_Hours__c` | Jul Hours | double | `float8` |  |  |  |
| `inov8__Jul__c` | Jul | percent | `numeric(5,2)` |  |  |  |
| `inov8__Jun_Hours__c` | Jun Hours | double | `float8` |  |  |  |
| `inov8__Jun__c` | Jun | percent | `numeric(5,2)` |  |  |  |
| `inov8__Mar_Hours__c` | Mar Hours | double | `float8` |  |  |  |
| `inov8__Mar__c` | Mar | percent | `numeric(5,2)` |  |  |  |
| `inov8__May_Hours__c` | May Hours | double | `float8` |  |  |  |
| `inov8__May__c` | May | percent | `numeric(5,2)` |  |  |  |
| `inov8__Nov_Hours__c` | Nov Hours | double | `float8` |  |  |  |
| `inov8__Nov__c` | Nov | percent | `numeric(5,2)` |  |  |  |
| `inov8__Oct_Hours__c` | Oct Hours | double | `float8` |  |  |  |
| `inov8__Oct__c` | Oct | percent | `numeric(5,2)` |  |  |  |
| `inov8__Role__c` | Role | picklist | `text` | Yes |  |  |
| `inov8__Sep_Hours__c` | Sep Hours | double | `float8` |  |  |  |
| `inov8__Sep__c` | Sep | percent | `numeric(5,2)` |  |  |  |
| `inov8__Allocated_Resource_Id__c` | Allocated Resource Id | string | `text` |  |  |  |
| `inov8__Fiscal_Year__c` | Fiscal Year | string | `text` |  |  |  |
| `inov8__Is_Allocated_to_Me__c` | Is Allocated to Me | boolean | `boolean` |  |  |  |
| `inov8__Program_Name__c` | Program Name | string | `text` |  |  |  |
| `inov8__Project_Name__c` | Project Name | string | `text` |  |  |  |
| `inov8__Project_Owner__c` | Project Owner | string | `text` |  |  |  |
| `inov8__Resource_IsActive__c` | Resource IsActive | boolean | `boolean` |  |  |  |
| `inov8__Resource_Name__c` | Resource Name | string | `text` |  |  |  |
| `inov8__UserId__c` | UserId | string | `text` |  |  |  |
| `inov8__User_Department__c` | User Department | string | `text` |  |  |  |
| `inov8__User_Name__c` | User Name | string | `text` |  |  |  |

### Picklist Values

**Role** (`inov8__Role__c`):
- Sponsor = `Sponsor`
- Project Owner = `Project Owner`
- PMO = `PMO`
- SME = `SME`
- IT = `IT`
- Functional Business Owner = `Functional Business Owner`
- Business Lead = `Business Lead`
- Procurement Category Partner = `Procurement Category Partner`
- Stakeholder = `Stakeholder`
- Project Manager = `Project Manager`
- Business Analyst = `Business Analyst`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## PMT Resource Availability (`inov8__PMT_Resource_Availability__c`) {#inov8pmtresourceavailabilityc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a11 |
| Fields | 69 |
| Relationships | 28 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Resource Availibility No | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `inov8__Apr__c` | Apr | percent | `numeric(5,2)` | Yes |  |  |
| `inov8__Aug__c` | Aug | percent | `numeric(5,2)` | Yes |  |  |
| `inov8__Dec__c` | Dec | percent | `numeric(5,2)` | Yes |  |  |
| `inov8__Feb__c` | Feb | percent | `numeric(5,2)` | Yes |  |  |
| `inov8__Fiscal_Year__c` | Fiscal Year | string | `varchar(10)` | Yes |  |  |
| `inov8__Jan__c` | Jan | percent | `numeric(5,2)` | Yes |  |  |
| `inov8__Jul__c` | Jul | percent | `numeric(5,2)` | Yes |  |  |
| `inov8__Jun__c` | Jun | percent | `numeric(5,2)` | Yes |  |  |
| `inov8__Mar__c` | Mar | percent | `numeric(5,2)` | Yes |  |  |
| `inov8__May__c` | May | percent | `numeric(5,2)` | Yes |  |  |
| `inov8__Nov__c` | Nov | percent | `numeric(5,2)` | Yes |  |  |
| `inov8__Oct__c` | Oct | percent | `numeric(5,2)` | Yes |  |  |
| `inov8__Sep__c` | Sep | percent | `numeric(5,2)` | Yes |  |  |
| `inov8__User__c` | User | reference | `uuid` |  |  | -> User (Lookup) |
| `inov8__Apr_Actual_Hours__c` | Apr Actual Hours | double | `float8` |  |  |  |
| `inov8__Apr_Allocation__c` | Apr Allocation | percent | `numeric(5,2)` |  |  |  |
| `inov8__Aug_Actual_Hours__c` | Aug Actual Hours | double | `float8` |  |  |  |
| `inov8__Aug_Allocation__c` | Aug Allocation | percent | `numeric(5,2)` |  |  |  |
| `inov8__Dec_Actual_Hours__c` | Dec Actual Hours | double | `float8` |  |  |  |
| `inov8__Dec_Allocation__c` | Dec Allocation | percent | `numeric(5,2)` |  |  |  |
| `inov8__Feb_Actual_Hours__c` | Feb Actual Hours | double | `float8` |  |  |  |
| `inov8__Feb_Allocation__c` | Feb Allocation | percent | `numeric(5,2)` |  |  |  |
| `inov8__Jan_Actual_Hours__c` | Jan Actual Hours | double | `float8` |  |  |  |
| `inov8__Jan_Allocation__c` | Jan Allocation | percent | `numeric(5,2)` |  |  |  |
| `inov8__Jul_Actual_Hours__c` | Jul Actual Hours | double | `float8` |  |  |  |
| `inov8__Jul_Allocation__c` | Jul Allocation | percent | `numeric(5,2)` |  |  |  |
| `inov8__Jun_Actual_Hours__c` | Jun Actual Hours | double | `float8` |  |  |  |
| `inov8__Jun_Allocation__c` | Jun Allocation | percent | `numeric(5,2)` |  |  |  |
| `inov8__Mar_Actual_Hours__c` | Mar Actual Hours | double | `float8` |  |  |  |
| `inov8__Mar_Allocation__c` | Mar Allocation | percent | `numeric(5,2)` |  |  |  |
| `inov8__May_Actual_Hours__c` | May Actual Hours | double | `float8` |  |  |  |
| `inov8__May_Allocation__c` | May Allocation | percent | `numeric(5,2)` |  |  |  |
| `inov8__Nov_Actual_Hours__c` | Nov Actual Hours | double | `float8` |  |  |  |
| `inov8__Nov_Allocation__c` | Nov Allocation | percent | `numeric(5,2)` |  |  |  |
| `inov8__Oct_Actual_Hours__c` | Oct Actual Hours | double | `float8` |  |  |  |
| `inov8__Oct_Allocation__c` | Oct Allocation | percent | `numeric(5,2)` |  |  |  |
| `inov8__Sep_Actual_Hours__c` | Sep Actual Hours | double | `float8` |  |  |  |
| `inov8__Sep_Allocation__c` | Sep Allocation | percent | `numeric(5,2)` |  |  |  |
| `inov8__Apr_Remaining__c` | Apr Remaining | percent | `numeric(5,2)` |  |  |  |
| `inov8__Aug_Remaining__c` | Aug Remaining | percent | `numeric(5,2)` |  |  |  |
| `inov8__Dec_Remaining__c` | Dec Remaining | percent | `numeric(5,2)` |  |  |  |
| `inov8__End_Date__c` | End Date | date | `date` |  |  |  |
| `inov8__Feb_Remaining__c` | Feb Remaining | percent | `numeric(5,2)` |  |  |  |
| `inov8__Jan_Remaining__c` | Jan Remaining | percent | `numeric(5,2)` |  |  |  |
| `inov8__Jul_Remaining__c` | Jul Remaining | percent | `numeric(5,2)` |  |  |  |
| `inov8__Jun_Remaining__c` | Jun Remaining | percent | `numeric(5,2)` |  |  |  |
| `inov8__Mar_Remaining__c` | Mar Remaining | percent | `numeric(5,2)` |  |  |  |
| `inov8__May_Remaining__c` | May Remaining | percent | `numeric(5,2)` |  |  |  |
| `inov8__Nov_Remaining__c` | Nov Remaining | percent | `numeric(5,2)` |  |  |  |
| `inov8__Oct_Remaining__c` | Oct Remaining | percent | `numeric(5,2)` |  |  |  |
| `inov8__Resource_Name_FY__c` | Resource Name & FY | string | `text` |  |  |  |
| `inov8__Sep_Remaining__c` | Sep Remaining | percent | `numeric(5,2)` |  |  |  |
| `inov8__Start_Date__c` | Start Date | date | `date` |  |  |  |
| `inov8__User_Department__c` | User Department | string | `text` |  |  |  |
| `inov8__User_Id__c` | User Id | string | `text` |  |  |  |
| `inov8__User_IsActive__c` | User IsActive | boolean | `boolean` |  |  |  |
| `inov8__User_Name__c` | User Name | string | `text` |  |  |  |
| `inov8__is_Dummy_Availability__c` | is Dummy Availability? | boolean | `boolean` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| inov8__PMT_Resource_Allocation__c | inov8__Resource_Availability__c | inov8__Allocations__r | Yes |

---

## PMT Setting (`inov8__PMT_Setting__mdt`) {#inov8pmtsettingmdt}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | m0A |
| Fields | 13 |
| Relationships | 0 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Custom Metadata Record ID | id | `uuid` |  |  |  |
| `DeveloperName` | Custom Metadata Record Name | string | `varchar(40)` |  |  |  |
| `MasterLabel` | Label | string | `varchar(40)` | Yes |  |  |
| `Language` | Master Language | picklist | `text` | Yes |  |  |
| `NamespacePrefix` | Namespace Prefix | string | `varchar(15)` |  |  |  |
| `Label` | Label | string | `varchar(40)` |  |  |  |
| `QualifiedApiName` | Qualified API Name | string | `varchar(70)` |  |  |  |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `inov8__Allocation_Trigger_Status__c` | Allocation Trigger Status | boolean | `boolean` |  |  |  |
| `inov8__Default_Availability_for_Scheduler__c` | Default Availability for Scheduler | double | `float8` |  |  |  |
| `inov8__Holidays__c` | Holidays | string | `varchar(255)` |  |  |  |
| `inov8__Resource_Planning_Years_in_Advance__c` | Resource Planning # Years in Advance | double | `float8` |  |  |  |
| `inov8__Start_Month_of_Fiscal_Year__c` | Start Month of Fiscal Year | double | `float8` |  |  |  |

### Picklist Values

**Master Language** (`Language`):
- English = `en_US`
- German = `de`
- Spanish = `es`
- French = `fr`
- Italian = `it`
- Japanese = `ja`
- Swedish = `sv`
- Korean = `ko`
- Chinese (Traditional) = `zh_TW`
- Chinese (Simplified) = `zh_CN`
- Portuguese (Brazil) = `pt_BR`
- Dutch = `nl_NL`
- Danish = `da`
- Thai = `th`
- Finnish = `fi`
- Russian = `ru`
- Spanish (Mexico) = `es_MX`
- Norwegian = `no`

---

## PMT Task (`inov8__PMT_Task__c`) {#inov8pmttaskc}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | a12 |
| Fields | 41 |
| Relationships | 32 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Record ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Task Name | string | `varchar(80)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity Date | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `inov8__Phase__c` | Phase | reference | `uuid` | Yes |  | -> inov8__PMT_Phase__c (MasterDetail) |
| `inov8__Assigned_To1__c` | Assigned To | reference | `uuid` |  |  | -> User (Lookup) |
| `inov8__Checklist_Selected__c` | Checklist Selected | boolean | `boolean` |  |  |  |
| `inov8__Description__c` | Description | textarea | `text` |  |  |  |
| `inov8__Due_Date__c` | End Date | date | `date` |  |  |  |
| `inov8__Duration_In_Days__c` | Duration In Days | double | `float8` |  |  |  |
| `inov8__Is_Milestone__c` | Is Milestone? | boolean | `boolean` |  |  |  |
| `inov8__Is_Recurring__c` | Is Recurring? | boolean | `boolean` |  |  |  |
| `inov8__On_Hold_Reason__c` | On Hold Reason | string | `varchar(255)` |  |  |  |
| `inov8__Percentage_Completion__c` | Task Completion % | percent | `numeric(5,2)` |  |  |  |
| `inov8__Sign_off_status__c` | Sign-off status | picklist | `text` |  |  |  |
| `inov8__Start_Date__c` | Start Date | date | `date` |  |  |  |
| `inov8__Start_Days_Out__c` | Start Days Out | double | `float8` |  |  |  |
| `inov8__Status__c` | Task Status | picklist | `text` |  |  |  |
| `inov8__Task_Level__c` | Task Level | double | `float8` |  |  |  |
| `inov8__Topic__c` | Topic | string | `varchar(255)` |  |  |  |
| `inov8__Alert__c` | Alert | string | `text` |  |  |  |
| `inov8__Assigned_To_Email__c` | Assigned To Email | string | `text` |  |  |  |
| `inov8__Days_Late__c` | Days Late | double | `float8` |  |  |  |
| `inov8__Duration__c` | Duration | double | `float8` |  |  |  |
| `inov8__IsTemplate__c` | IsTemplate? | boolean | `boolean` |  |  |  |
| `inov8__My_Task__c` | My Task | string | `text` |  |  |  |
| `inov8__Phase_Name__c` | Phase Name | string | `text` |  |  |  |
| `inov8__Project_Id__c` | Project Id | string | `text` |  |  |  |
| `inov8__Project_Name__c` | Project Name | string | `text` |  |  |  |
| `inov8__Status_Icon_Name__c` | Status Icon Name | string | `text` |  |  |  |
| `inov8__Status_Icon__c` | Status Icon | string | `text` |  |  |  |
| `inov8__Task_Level_formula__c` | Task Level | double | `float8` |  |  |  |
| `inov8__Task_Name_w_Alert__c` | Task Name w. Alert | string | `text` |  |  |  |
| `inov8__Weighted_percentage__c` | Weighted % | double | `numeric(18,2)` |  |  |  |

### Picklist Values

**Sign-off status** (`inov8__Sign_off_status__c`):
- Submitted = `Submitted`
- Approved = `Approved`
- Rejected = `Rejected`

**Task Status** (`inov8__Status__c`):
- Not Started = `Not Started`
- In Progress = `In Progress`
- On Hold = `On Hold`
- Completed = `Completed`
- Closed, not Completed = `Closed, not Completed`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |

---

## Lead (`Lead`) {#lead}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 00Q |
| Fields | 56 |
| Relationships | 56 |
| Record Types | 2 |

### Record Types

| Name | Developer Name | Active | Default |
|------|----------------|--------|---------|
| Builder | Builder | Yes | No |
| Home Owner | Home_Owner | Yes | Yes |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Lead ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `MasterRecordId` | Master Record ID | reference | `uuid` |  |  | -> Lead (Lookup) |
| `LastName` | Last Name | string | `varchar(80)` | Yes |  |  |
| `FirstName` | First Name | string | `varchar(40)` |  |  |  |
| `Salutation` | Salutation | picklist | `text` |  |  |  |
| `MiddleName` | Middle Name | string | `varchar(40)` |  |  |  |
| `Suffix` | Suffix | string | `varchar(40)` |  |  |  |
| `Name` | Full Name | string | `varchar(121)` | Yes |  |  |
| `RecordTypeId` | Record Type ID | reference | `uuid` |  |  | -> RecordType (Lookup) |
| `Title` | Title | string | `varchar(128)` |  |  |  |
| `Company` | Company | string | `varchar(255)` |  |  |  |
| `Street` | Street | textarea | `text` |  |  |  |
| `City` | City | string | `varchar(40)` |  |  |  |
| `State` | State/Province | string | `varchar(80)` |  |  |  |
| `PostalCode` | Zip/Postal Code | string | `varchar(20)` |  |  |  |
| `Country` | Country | string | `varchar(80)` |  |  |  |
| `Latitude` | Latitude | double | `numeric(18,15)` |  |  |  |
| `Longitude` | Longitude | double | `numeric(18,15)` |  |  |  |
| `GeocodeAccuracy` | Geocode Accuracy | picklist | `text` |  |  |  |
| `Address` | Address | address | `jsonb` |  |  |  |
| `Phone` | Phone | phone | `text` |  |  |  |
| `MobilePhone` | Mobile Phone | phone | `text` |  |  |  |
| `Email` | Email | email | `text` |  |  |  |
| `Website` | Website | url | `text` |  |  |  |
| `PhotoUrl` | Photo URL | url | `text` |  |  |  |
| `Description` | Description | textarea | `text` |  |  |  |
| `LeadSource` | Lead Source | picklist | `text` |  |  |  |
| `Status` | Status | picklist | `text` |  |  |  |
| `Industry` | Industry | picklist | `text` |  |  |  |
| `Rating` | Rating | picklist | `text` |  |  |  |
| `NumberOfEmployees` | Employees | int | `int4` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsConverted` | Converted | boolean | `boolean` |  |  |  |
| `ConvertedDate` | Converted Date | date | `date` |  |  |  |
| `ConvertedAccountId` | Converted Account ID | reference | `uuid` |  |  | -> Account (Lookup) |
| `ConvertedContactId` | Converted Contact ID | reference | `uuid` |  |  | -> Contact (Lookup) |
| `ConvertedOpportunityId` | Converted Opportunity ID | reference | `uuid` |  |  | -> Opportunity (Lookup) |
| `IsUnreadByOwner` | Unread By Owner | boolean | `boolean` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity | date | `date` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `Jigsaw` | Data.com Key | string | `varchar(20)` |  |  |  |
| `JigsawContactId` | Jigsaw Contact ID | string | `varchar(20)` |  |  |  |
| `EmailBouncedReason` | Email Bounced Reason | string | `varchar(255)` |  |  |  |
| `EmailBouncedDate` | Email Bounced Date | datetime | `timestamptz` |  |  |  |
| `IsPriorityRecord` | Important | boolean | `boolean` |  |  |  |
| `Appointment_Date_Time__c` | Appointment Date Time | datetime | `timestamptz` |  |  |  |
| `Is_Lead__c` | Is Lead | boolean | `boolean` |  |  |  |
| `County__c` | County | string | `varchar(255)` |  |  |  |
| `Gender__c` | Gender of Lead | picklist | `text` |  |  |  |

### Picklist Values

**Salutation** (`Salutation`):
- Mr. = `Mr.`
- Ms. = `Ms.`
- Mrs. = `Mrs.`
- Dr. = `Dr.`
- Prof. = `Prof.`
- Mx. = `Mx.`

**Geocode Accuracy** (`GeocodeAccuracy`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

**Lead Source** (`LeadSource`):
- Advertisement = `Advertisement`
- Customer Event = `Customer Event`
- Employee Referral = `Employee Referral`
- External Referral = `External Referral`
- Google AdWords = `Google AdWords`
- Other = `Other`
- Partner = `Partner`
- Purchased List = `Purchased List`
- Trade Show = `Trade Show`
- Webinar = `Webinar`
- Website = `Website`

**Status** (`Status`):
- Unqualified = `Unqualified`
- New = `New`
- Working = `Working`
- Nurturing = `Nurturing`
- Appointment Confirmed = `Appointment Confirmed`
- Qualified = `Qualified`

**Industry** (`Industry`):
- Agriculture = `Agriculture`
- Apparel = `Apparel`
- Banking = `Banking`
- Biotechnology = `Biotechnology`
- Chemicals = `Chemicals`
- Communications = `Communications`
- Construction = `Construction`
- Consulting = `Consulting`
- Education = `Education`
- Electronics = `Electronics`
- Energy = `Energy`
- Engineering = `Engineering`
- Entertainment = `Entertainment`
- Environmental = `Environmental`
- Finance = `Finance`
- Food & Beverage = `Food & Beverage`
- Government = `Government`
- Healthcare = `Healthcare`
- Hospitality = `Hospitality`
- Insurance = `Insurance`
- Machinery = `Machinery`
- Manufacturing = `Manufacturing`
- Media = `Media`
- Not For Profit = `Not For Profit`
- Other = `Other`
- Recreation = `Recreation`
- Retail = `Retail`
- Shipping = `Shipping`
- Technology = `Technology`
- Telecommunications = `Telecommunications`
- Transportation = `Transportation`
- Utilities = `Utilities`

**Rating** (`Rating`):
- Hot = `Hot`
- Warm = `Warm`
- Cold = `Cold`

**Gender of Lead** (`Gender__c`):
- Test1 = `Test1`
- Test2 = `Test2`
- Test3 = `Test3`
- Male = `Male`
- Female = `Female`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| APXT_CongaSign__Transaction__c | Parent_00Q__c | APXT_CongaSign_Transactions__r | No |
| AcceptedEventRelation | RelationId | AcceptedEventRelations | No |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CampaignMember | LeadId | CampaignMembers | Yes |
| CampaignMember | LeadOrContactId | N/A | No |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhoId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| DeclinedEventRelation | RelationId | DeclinedEventRelations | No |
| EmailBounceEvent | BouncedObjectId | N/A | No |
| EmailStatus | WhoId | EmailStatuses | Yes |
| Event | WhoId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| EventWhoRelation | RelationId | EventWhoRelations | No |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| ListEmail | RelatedToId | ListEmails | No |
| ListEmailIndividualRecipient | RecipientId | ListEmailIndividualRecipients | Yes |
| ListEmailSentResult | RecipientId | ListEmailRecipients | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | PrimaryWhoId | N/A | No |
| OpenActivity | WhoId | OpenActivities | Yes |
| OutgoingEmail | WhoId | N/A | No |
| OutgoingEmailRelation | RelationId | OutgoingEmailRelations | No |
| RecordAction | RecordId | RecordActions | Yes |
| SocialPersona | ParentId | Personas | Yes |
| SocialPost | WhoId | Posts | No |
| Task | WhoId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| TaskWhoRelation | RelationId | TaskWhoRelations | No |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| UserEmailPreferredPerson | PersonRecordId | PersonRecord | Yes |
| UserPrioritizedRecord | TargetId | N/A | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VideoCallParticipant | RelatedPersonId | RelatedPersons | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| dfsle__EnvelopeStatus__c | dfsle__Lead__c | dfsle__DocuSign_Status__r | No |
| dfsle__RecipientStatus__c | dfsle__Lead__c | dfsle__DocuSign_Recipient_Status__r | No |

---

## Note (`Note`) {#note}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 002 |
| Fields | 12 |
| Relationships | 5 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Note ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `ParentId` | Parent ID | reference | `uuid` | Yes |  | -> APXTConga4__Composer_Host_Override__c, APXTConga4__Composer_QuickMerge__c, APXTConga4__Conga_Collection_Solution__c, APXTConga4__Conga_Collection__c, APXTConga4__Conga_Email_Staging__c, APXTConga4__Conga_Email_Template__c, APXTConga4__Conga_Merge_Query__c, APXTConga4__Conga_Solution_Email_Template__c, APXTConga4__Conga_Solution_Parameter__c, APXTConga4__Conga_Solution_Query__c, APXTConga4__Conga_Solution_Report__c, APXTConga4__Conga_Solution_Template__c, APXTConga4__Conga_Solution__c, APXTConga4__Conga_Template__c, APXTConga4__Document_History_Detail__c, APXTConga4__Document_History__c, APXTConga4__EventData__c, APXTConga4__VersionedData__c, APXT_CongaSign__Document__c, APXT_CongaSign__Recipient__c, APXT_CongaSign__Transaction__c, Account, Asset, BirdeyeCheckin__Automation_Failed_Record__c, BirdeyeCheckin__Automation__c, BirdeyeCheckin__Connector__c, Contact, Contract, Image, Lead, Location, Opportunity, Order, Product2, Quote, SocialPost, WorkOrder, WorkOrderLineItem, bpmpro3__A2_Labor_Only_Item__c, bpmpro3__A3_LaborItems__c, bpmpro3__AddOn_Product__c, bpmpro3__Add_On_CPI__c, bpmpro3__Back_Charge__c, bpmpro3__Building_Material__c, bpmpro3__Building_Permit_c__c, bpmpro3__CPI_AddOn_Product_Catalog__c, bpmpro3__CPI_Configure_Pricing_Items__c, bpmpro3__CPI_Preset_Product_Add_On__c, bpmpro3__Company_Settings__c, bpmpro3__Contact_CSV_Import__c, bpmpro3__Deal_Sheet__c, bpmpro3__Dealer_Item__c, bpmpro3__Inspections__c, bpmpro3__Invoice_Payment__c, bpmpro3__LaborItem_AddOn_Junction__c, bpmpro3__Labor_Charge__c, bpmpro3__Labor_Ticket__c, bpmpro3__Material__c, bpmpro3__Orders__c, bpmpro3__PP_Preset_Product__c, bpmpro3__PaymentBPM__c, bpmpro3__Permit_Fee__c, bpmpro3__ProductItem__c, bpmpro3__Project_Contact_Role__c, bpmpro3__Project_Invoice__c, bpmpro3__Project_Stage_Assignment_Team_Member__c, bpmpro3__Project_Stage_Assignment__c, bpmpro3__Project_Stage_Team_Member__c, bpmpro3__Project_Stage__c, bpmpro3__Project__c, bpmpro3__Property__c, bpmpro3__Prospect__c, bpmpro3__Reimbursement__c, bpmpro3__SalesDoc_Clauses__c, bpmpro3__SalesDoc_Credit_Memo__c, bpmpro3__SalesDoc_Invoice__c, bpmpro3__Sales_Commission_Payout__c, bpmpro3__Sales_Commission_Table__c, bpmpro3__Sales_Commission__c, bpmpro3__Sales_Document__c, bpmpro3__Service_Ticket__c, bpmpro3__SpecialtyItem__c, bpmpro3__Time_Entry__c, bpmpro3__Timesheet__c, bpmpro3__Warehouse_Log__c, bpmpro3__Work_Assignment__c, dfsle__AgreementConfiguration__c, dfsle__BulkList__c, dfsle__BulkStatus__c, dfsle__CustomParameterMap__c, dfsle__CustomRecipient__c, dfsle__Document__c, dfsle__EnvelopeConfigurationDocument__c, dfsle__EnvelopeConfigurationRecipient__c, dfsle__EnvelopeConfiguration__c, dfsle__EnvelopeLocalization__c, dfsle__EnvelopeStatus__c, dfsle__Envelope__c, dfsle__GenTemplate__c, dfsle__Jobs__c, dfsle__Log__c, dfsle__RecipientStatus__c, dfsle__Recipient__c, inov8__PMT_Error_Log__c, inov8__PMT_Phase__c, inov8__PMT_Program__c, inov8__PMT_Project__c, inov8__PMT_Resource_Allocation__c, inov8__PMT_Resource_Availability__c, inov8__PMT_Task__c (Lookup) |
| `Title` | Title | string | `varchar(80)` | Yes |  |  |
| `IsPrivate` | Private | boolean | `boolean` |  |  |  |
| `Body` | Body | textarea | `text` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> User (Lookup) |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |

---

## Opportunity (`Opportunity`) {#opportunity}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 006 |
| Fields | 69 |
| Relationships | 56 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Opportunity ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `AccountId` | Account ID | reference | `uuid` |  |  | -> Account (Lookup) |
| `Name` | Name | string | `varchar(120)` | Yes |  |  |
| `Description` | Description | textarea | `text` |  |  |  |
| `StageName` | Stage | picklist | `text` | Yes |  |  |
| `Amount` | Amount | currency | `numeric(18,2)` |  |  |  |
| `Probability` | Probability (%) | percent | `numeric(5,2)` |  |  |  |
| `CloseDate` | Close Date | date | `date` | Yes |  |  |
| `Type` | Opportunity Type | picklist | `text` |  |  |  |
| `NextStep` | Next Step | string | `varchar(255)` |  |  |  |
| `LeadSource` | Lead Source | picklist | `text` |  |  |  |
| `IsClosed` | Closed | boolean | `boolean` |  |  |  |
| `IsWon` | Won | boolean | `boolean` |  |  |  |
| `ForecastCategory` | Forecast Category | picklist | `text` | Yes |  |  |
| `ForecastCategoryName` | Forecast Category | picklist | `text` |  |  |  |
| `CampaignId` | Campaign ID | reference | `uuid` |  |  | -> Campaign (Lookup) |
| `HasOpportunityLineItem` | Has Line Item | boolean | `boolean` |  |  |  |
| `Pricebook2Id` | Price Book ID | reference | `uuid` |  |  | -> Pricebook2 (Lookup) |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> User (Lookup) |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `AgeInDays` | Age | int | `int4` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastActivityDate` | Last Activity | date | `date` |  |  |  |
| `LastActivityInDays` | Recent Activity | int | `int4` |  |  |  |
| `PushCount` | Push Count | int | `int4` |  |  |  |
| `LastStageChangeDate` | Last Stage Change Date | datetime | `timestamptz` |  |  |  |
| `LastStageChangeInDays` | Days In Stage | int | `int4` |  |  |  |
| `FiscalQuarter` | Fiscal Quarter | int | `int4` |  |  |  |
| `FiscalYear` | Fiscal Year | int | `int4` |  |  |  |
| `Fiscal` | Fiscal Period | string | `varchar(6)` |  |  |  |
| `ContactId` | Contact ID | reference | `uuid` |  |  | -> Contact (Lookup) |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `SyncedQuoteId` | Quote ID | reference | `uuid` |  |  | -> Quote (Lookup) |
| `ContractId` | Contract ID | reference | `uuid` |  |  | -> Contract (Lookup) |
| `HasOpenActivity` | Has Open Activity | boolean | `boolean` |  |  |  |
| `HasOverdueTask` | Has Overdue Task | boolean | `boolean` |  |  |  |
| `LastAmountChangedHistoryId` | Opportunity History ID | reference | `uuid` |  |  | -> OpportunityHistory (Lookup) |
| `LastCloseDateChangedHistoryId` | Opportunity History ID | reference | `uuid` |  |  | -> OpportunityHistory (Lookup) |
| `IsPriorityRecord` | Important | boolean | `boolean` |  |  |  |
| `Budget_Confirmed__c` | Budget Confirmed | boolean | `boolean` |  |  |  |
| `Discovery_Completed__c` | Discovery Completed | boolean | `boolean` |  |  |  |
| `ROI_Analysis_Completed__c` | ROI Analysis Completed | boolean | `boolean` |  |  |  |
| `Appointment_Date_Time__c` | Appointment Date Time | datetime | `timestamptz` |  |  |  |
| `Loss_Reason__c` | Loss Reason | picklist | `text` |  |  |  |
| `Deposit_Amount__c` | Deposit Amount | currency | `numeric(18,2)` |  |  |  |
| `Balance__c` | Balance | currency | `numeric(18,2)` |  |  |  |
| `Labour__c` | Labour | currency | `numeric(18,2)` |  |  |  |
| `Material__c` | Material | currency | `numeric(18,2)` |  |  |  |
| `Commission__c` | Commission | currency | `numeric(18,2)` |  |  |  |
| `Is_Originated_From_Lead_Conversion__c` | Is Originated From Lead Conversion | boolean | `boolean` |  |  |  |
| `Signee_Contact__c` | Signee Contact | string | `text` |  |  |  |
| `Labourpercentage__c` | Labour % | percent | `numeric(5,2)` |  |  |  |
| `Materialpercentage__c` | Material % | percent | `numeric(5,2)` |  |  |  |
| `Commissionpercentage__c` | Commission % | percent | `numeric(5,2)` |  |  |  |
| `Account_Name_Abbr__c` | Account Name Abbr. | string | `text` |  |  |  |
| `Quote_Total_Price__c` | Quote Total Price | currency | `numeric(18,2)` |  |  |  |
| `Down_Payment__c` | Down Payment | currency | `numeric(18,2)` |  |  |  |
| `Finance_Amount__c` | Finance Amount | currency | `numeric(18,2)` |  |  |  |
| `Balance_Due__c` | Balance Due | currency | `numeric(18,2)` |  |  |  |
| `County__c` | County | string | `varchar(255)` |  |  |  |
| `Commission_Percentage_user__c` | Commission % | percent | `numeric(5,2)` |  |  |  |
| `Commission_Front_Amount__c` | Commission Front Amount | currency | `numeric(18,2)` |  |  |  |
| `Backend_Commission__c` | Backend Commission % | percent | `numeric(5,2)` |  |  |  |
| `Backend_Commission_Amount__c` | Backend Commission Amount | currency | `numeric(18,2)` |  |  |  |

### Picklist Values

**Stage** (`StageName`):
- Qualification = `Qualification`
- Needs Analysis = `Needs Analysis`
- Proposal = `Proposal`
- Negotiation = `Negotiation`
- Closed Won = `Closed Won`
- Closed Lost = `Closed Lost`

**Opportunity Type** (`Type`):
- Existing Business = `Existing Business`
- New Business = `New Business`

**Lead Source** (`LeadSource`):
- Advertisement = `Advertisement`
- Customer Event = `Customer Event`
- Employee Referral = `Employee Referral`
- External Referral = `External Referral`
- Google AdWords = `Google AdWords`
- Other = `Other`
- Partner = `Partner`
- Purchased List = `Purchased List`
- Trade Show = `Trade Show`
- Webinar = `Webinar`
- Website = `Website`

**Forecast Category** (`ForecastCategory`):
- Omitted = `Omitted`
- Pipeline = `Pipeline`
- Best Case = `BestCase`
- Most Likely = `MostLikely`
- Commit = `Forecast`
- Closed = `Closed`

**Forecast Category** (`ForecastCategoryName`):
- Omitted = `Omitted`
- Pipeline = `Pipeline`
- Best Case = `Best Case`
- Commit = `Commit`
- Closed = `Closed`

**Loss Reason** (`Loss_Reason__c`):
- Lost to Competitor = `Lost to Competitor`
- No Budget / Lost Funding = `No Budget / Lost Funding`
- No Decision / Non-Responsive = `No Decision / Non-Responsive`
- Price = `Price`
- Other = `Other`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| APXT_CongaSign__Transaction__c | Parent_006__c | APXT_CongaSign_Transactions__r | No |
| AccountPartner | OpportunityId | AccountPartners | Yes |
| ActionPlan | TargetId | ActionPlans | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContactRequest | WhatId | ContactRequests | No |
| ContentDistribution | RelatedRecordId | N/A | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FieldChangeSnapshot | ParentId | FieldChangeSnapshots | No |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| ForecastingFact | OpportunityId | N/A | No |
| Lead | ConvertedOpportunityId | N/A | No |
| ListEmail | RelatedToId | ListEmails | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| OpportunityCompetitor | OpportunityId | OpportunityCompetitors | Yes |
| OpportunityContactRole | OpportunityId | OpportunityContactRoles | Yes |
| OpportunityLineItem | OpportunityId | OpportunityLineItems | Yes |
| OpportunityPartner | OpportunityId | OpportunityPartnersFrom | Yes |
| OpportunityRelatedDeleteLog | OpportunityId | OpportunityRelatedDeleteLogs | Yes |
| Opportunity__hd | ParentId | N/A | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| Partner | OpportunityId | Partners | Yes |
| Quote | OpportunityId | Quotes | Yes |
| RecentFieldChange | ParentId | RecentFieldChanges | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| UserPrioritizedRecord | TargetId | N/A | Yes |
| VideoCall | RelatedRecordId | VideoRelatedRecords | No |
| VoiceCall | RelatedRecordId | RelatedRecords | No |
| dfsle__EnvelopeStatus__c | dfsle__Opportunity__c | dfsle__DocuSign_Status__r | No |
| inov8__PMT_Project__c | Opportunity__c | PMT_Projects__r | No |

---

## Opportunity (Historical) (`Opportunity__hd`) {#opportunityhd}

| Property | Value |
|----------|-------|
| Custom | Yes |
| Key Prefix | h00 |
| Fields | 20 |
| Relationships | 2 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Historical Data Table Id | id | `uuid` |  |  |  |
| `ParentId` | Parent ID | reference | `uuid` | Yes |  | -> Opportunity (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `ValidFromDate` | Valid From | datetime | `timestamptz` |  |  |  |
| `ValidToDate` | Valid To | datetime | `timestamptz` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `Amount__hpr` | Amount (Prior) | currency | `numeric(18,2)` |  |  |  |
| `Amount__hst` | Amount (Historical) | currency | `numeric(18,2)` |  |  |  |
| `CloseDate__hpr` | Close Date (Prior) | date | `date` |  |  |  |
| `CloseDate__hst` | Close Date (Historical) | date | `date` |  |  |  |
| `StageName__hpr` | Stage (Prior) | picklist | `text` |  |  |  |
| `StageName__hst` | Stage (Historical) | picklist | `text` |  |  |  |
| `Probability__hpr` | Probability (%) (Prior) | percent | `numeric(5,2)` |  |  |  |
| `Probability__hst` | Probability (%) (Historical) | percent | `numeric(5,2)` |  |  |  |
| `ForecastCategoryName__hpr` | Forecast Category (Prior) | picklist | `text` |  |  |  |
| `ForecastCategoryName__hst` | Forecast Category (Historical) | picklist | `text` |  |  |  |
| `NextStep__hpr` | Next Step (Prior) | string | `varchar(255)` |  |  |  |
| `NextStep__hst` | Next Step (Historical) | string | `varchar(255)` |  |  |  |

### Picklist Values

**Stage (Prior)** (`StageName__hpr`):
- Qualification = `Qualification`
- Needs Analysis = `Needs Analysis`
- Proposal = `Proposal`
- Negotiation = `Negotiation`
- Closed Won = `Closed Won`
- Closed Lost = `Closed Lost`

**Stage (Historical)** (`StageName__hst`):
- Qualification = `Qualification`
- Needs Analysis = `Needs Analysis`
- Proposal = `Proposal`
- Negotiation = `Negotiation`
- Closed Won = `Closed Won`
- Closed Lost = `Closed Lost`

**Forecast Category (Prior)** (`ForecastCategoryName__hpr`):
- Omitted = `Omitted`
- Pipeline = `Pipeline`
- Best Case = `Best Case`
- Commit = `Commit`
- Closed = `Closed`

**Forecast Category (Historical)** (`ForecastCategoryName__hst`):
- Omitted = `Omitted`
- Pipeline = `Pipeline`
- Best Case = `Best Case`
- Commit = `Commit`
- Closed = `Closed`

---

## Opportunity Product (`OpportunityLineItem`) {#opportunitylineitem}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 00k |
| Fields | 21 |
| Relationships | 10 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Line Item ID | id | `uuid` |  |  |  |
| `OpportunityId` | Opportunity ID | reference | `uuid` | Yes |  | -> Opportunity (Lookup) |
| `SortOrder` | Sort Order | int | `int4` |  |  |  |
| `PricebookEntryId` | Price Book Entry ID | reference | `uuid` |  |  | -> PricebookEntry (Lookup) |
| `Product2Id` | Product ID | reference | `uuid` |  |  | -> Product2 (Lookup) |
| `ProductCode` | Product Code | string | `varchar(255)` |  |  |  |
| `Name` | Opportunity Product Name | string | `text` |  |  |  |
| `Quantity` | Quantity | double | `numeric(12,2)` | Yes |  |  |
| `TotalPrice` | Total Price | currency | `numeric(18,2)` |  |  |  |
| `UnitPrice` | Sales Price | currency | `numeric(18,2)` |  |  |  |
| `ListPrice` | List Price | currency | `numeric(18,2)` |  |  |  |
| `ServiceDate` | Date | date | `date` |  |  |  |
| `Description` | Line Description | string | `varchar(255)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| ForecastingFact | ForecastedObjectId | N/A | No |
| QuoteLineItem | OpportunityLineItemId | N/A | No |

---

## Order (`Order`) {#order}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 801 |
| Fields | 45 |
| Relationships | 35 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Order ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `ContractId` | Contract ID | reference | `uuid` |  |  | -> Contract (Lookup) |
| `AccountId` | Account ID | reference | `uuid` |  |  | -> Account (Lookup) |
| `Pricebook2Id` | Price Book ID | reference | `uuid` |  |  | -> Pricebook2 (Lookup) |
| `OriginalOrderId` | Order ID | reference | `uuid` |  |  | -> Order (Lookup) |
| `EffectiveDate` | Order Start Date | date | `date` | Yes |  |  |
| `EndDate` | Order End Date | date | `date` |  |  |  |
| `IsReductionOrder` | Reduction Order | boolean | `boolean` |  |  |  |
| `Status` | Status | picklist | `text` | Yes |  |  |
| `Description` | Description | textarea | `text` |  |  |  |
| `CustomerAuthorizedById` | Customer Authorized By ID | reference | `uuid` |  |  | -> Contact (Lookup) |
| `CompanyAuthorizedById` | Company Authorized By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `Type` | Order Type | picklist | `text` |  |  |  |
| `BillingStreet` | Billing Street | textarea | `text` |  |  |  |
| `BillingCity` | Billing City | string | `varchar(40)` |  |  |  |
| `BillingState` | Billing State/Province | string | `varchar(80)` |  |  |  |
| `BillingPostalCode` | Billing Zip/Postal Code | string | `varchar(20)` |  |  |  |
| `BillingCountry` | Billing Country | string | `varchar(80)` |  |  |  |
| `BillingLatitude` | Billing Latitude | double | `numeric(18,15)` |  |  |  |
| `BillingLongitude` | Billing Longitude | double | `numeric(18,15)` |  |  |  |
| `BillingGeocodeAccuracy` | Billing Geocode Accuracy | picklist | `text` |  |  |  |
| `BillingAddress` | Billing Address | address | `jsonb` |  |  |  |
| `ShippingStreet` | Shipping Street | textarea | `text` |  |  |  |
| `ShippingCity` | Shipping City | string | `varchar(40)` |  |  |  |
| `ShippingState` | Shipping State/Province | string | `varchar(80)` |  |  |  |
| `ShippingPostalCode` | Shipping Zip/Postal Code | string | `varchar(20)` |  |  |  |
| `ShippingCountry` | Shipping Country | string | `varchar(80)` |  |  |  |
| `ShippingLatitude` | Shipping Latitude | double | `numeric(18,15)` |  |  |  |
| `ShippingLongitude` | Shipping Longitude | double | `numeric(18,15)` |  |  |  |
| `ShippingGeocodeAccuracy` | Shipping Geocode Accuracy | picklist | `text` |  |  |  |
| `ShippingAddress` | Shipping Address | address | `jsonb` |  |  |  |
| `ActivatedDate` | Activated Date | datetime | `timestamptz` |  |  |  |
| `ActivatedById` | Activated By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `StatusCode` | Status Category | picklist | `text` | Yes |  |  |
| `OrderNumber` | Order Number | string | `varchar(30)` |  |  |  |
| `TotalAmount` | Order Amount | currency | `numeric(18,2)` | Yes |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |

### Picklist Values

**Status** (`Status`):
- Draft = `Draft`
- Activated = `Activated`

**Billing Geocode Accuracy** (`BillingGeocodeAccuracy`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

**Shipping Geocode Accuracy** (`ShippingGeocodeAccuracy`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

**Status Category** (`StatusCode`):
- Draft = `Draft`
- Activated = `Activated`
- Canceled = `Canceled`
- Expired = `Expired`
- Superseded = `Superseded`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| APXT_CongaSign__Transaction__c | Parent_801__c | APXT_CongaSign_Transactions__r | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Order | OriginalOrderId | Orders | No |
| OrderItem | OrderId | OrderItems | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| WorkOrderLineItem | OrderId | WorkOrderLineItems | No |

---

## Order Product (`OrderItem`) {#orderitem}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 802 |
| Fields | 20 |
| Relationships | 18 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Order Product ID | id | `uuid` |  |  |  |
| `Product2Id` | Product ID | reference | `uuid` |  |  | -> Product2 (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `OrderId` | Order ID | reference | `uuid` | Yes |  | -> Order (Lookup) |
| `PricebookEntryId` | Price Book Entry ID | reference | `uuid` | Yes |  | -> PricebookEntry (Lookup) |
| `OriginalOrderItemId` | Original Order Item ID | reference | `uuid` |  |  | -> OrderItem (Lookup) |
| `AvailableQuantity` | Available Quantity | double | `numeric(18,2)` |  |  |  |
| `Quantity` | Quantity | double | `numeric(18,2)` | Yes |  |  |
| `UnitPrice` | Unit Price | currency | `numeric(18,2)` |  |  |  |
| `ListPrice` | List Price | currency | `numeric(18,2)` |  |  |  |
| `TotalPrice` | Total Price | currency | `numeric(18,2)` |  |  |  |
| `ServiceDate` | Start Date | date | `date` |  |  |  |
| `EndDate` | End Date | date | `date` |  |  |  |
| `Description` | Line Description | string | `varchar(255)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `OrderItemNumber` | Order Product Number | string | `varchar(30)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| OrderItem | OriginalOrderItemId | ChildOrderItems | No |

---

## Price Book (`Pricebook2`) {#pricebook2}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 01s |
| Fields | 14 |
| Relationships | 12 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Price Book ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Price Book Name | string | `varchar(255)` | Yes |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `IsActive` | Active | boolean | `boolean` |  |  |  |
| `IsArchived` | Archived | boolean | `boolean` |  |  |  |
| `Description` | Description | string | `varchar(255)` |  |  |  |
| `IsStandard` | Is Standard Price Book | boolean | `boolean` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| Contract | Pricebook2Id | Contracts | No |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| Opportunity | Pricebook2Id | Opportunities | No |
| Order | Pricebook2Id | Orders | No |
| PricebookEntry | Pricebook2Id | PricebookEntries | Yes |
| Quote | Pricebook2Id | Quotes | No |
| RecordAction | RecordId | RecordActions | Yes |
| WorkOrder | Pricebook2Id | WorkOrders | No |

---

## Price Book Entry (`PricebookEntry`) {#pricebookentry}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 01u |
| Fields | 15 |
| Relationships | 12 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Price Book Entry ID | id | `uuid` |  |  |  |
| `Name` | Product Name | string | `varchar(255)` |  |  |  |
| `Pricebook2Id` | Price Book ID | reference | `uuid` | Yes |  | -> Pricebook2 (Lookup) |
| `Product2Id` | Product ID | reference | `uuid` | Yes |  | -> Product2 (Lookup) |
| `UnitPrice` | List Price | currency | `numeric(18,2)` | Yes |  |  |
| `IsActive` | Active | boolean | `boolean` |  |  |  |
| `UseStandardPrice` | Use Standard Price | boolean | `boolean` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `ProductCode` | Product Code | string | `varchar(255)` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `IsArchived` | Archived | boolean | `boolean` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| OpportunityLineItem | PricebookEntryId | OpportunityLineItems | No |
| OrderItem | PricebookEntryId | OrderItems | No |
| QuoteLineItem | PricebookEntryId | QuoteLineItems | No |
| RecordAction | RecordId | RecordActions | Yes |
| WorkOrderLineItem | PricebookEntryId | WorkOrderLineItems | No |

---

## Product (`Product2`) {#product2}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 01t |
| Fields | 20 |
| Relationships | 31 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Product ID | id | `uuid` |  |  |  |
| `Name` | Product Name | string | `varchar(255)` | Yes |  |  |
| `ProductCode` | Product Code | string | `varchar(255)` |  |  |  |
| `Description` | Product Description | textarea | `text` |  |  |  |
| `IsActive` | Active | boolean | `boolean` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `Family` | Product Family | picklist | `text` |  |  |  |
| `ExternalDataSourceId` | External Data Source ID | reference | `uuid` |  |  | -> ExternalDataSource (Lookup) |
| `ExternalId` | External ID | string | `varchar(255)` |  |  |  |
| `DisplayUrl` | Display URL | url | `text` |  |  |  |
| `QuantityUnitOfMeasure` | Quantity Unit Of Measure | picklist | `text` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `IsArchived` | Archived | boolean | `boolean` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `StockKeepingUnit` | Product SKU | string | `varchar(180)` |  |  |  |

### Picklist Values

**Product Family** (`Family`):
- None = `None`
- DOUBLE HUNG WINDOWS = `DOUBLE HUNG WINDOWS`
- SLIDER & FIXED WINDOWS = `SLIDER & FIXED WINDOWS`
- WINDOW FEATURES & EXTRAS = `WINDOW FEATURES & EXTRAS`
- SLIDING PATIO DOORS = `SLIDING PATIO DOORS`
- NON-DECO DOORS = `NON-DECO DOORS`
- LowE3, GRIDS, BLINDS (PER PANEL) = `LowE3, GRIDS, BLINDS (PER PANEL)`
- SOLUTION SERIES = `SOLUTION SERIES`
- SIDELITES LOWE3, GRIDS, BLINDS = `SIDELITES LOWE3, GRIDS, BLINDS`
- HARDWARE/ACCESSORIES = `HARDWARE/ACCESSORIES`
- INSTALLATION = `INSTALLATION`
- Outside Pockets = `Outside Pockets`
- Stackables = `Stackables`

**Quantity Unit Of Measure** (`QuantityUnitOfMeasure`):
- Each = `Each`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| Asset | Product2Id | Assets | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| ListEmail | RelatedToId | ListEmails | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| OpportunityLineItem | Product2Id | N/A | No |
| OrderItem | Product2Id | N/A | No |
| OutgoingEmail | RelatedToId | N/A | No |
| PricebookEntry | Product2Id | PricebookEntries | Yes |
| QuoteLineItem | Product2Id | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |
| WorkOrderLineItem | Product2Id | WorkOrderLineItems | No |

---

## Quote (`Quote`) {#quote}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 0Q0 |
| Fields | 84 |
| Relationships | 34 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Quote ID | id | `uuid` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `Name` | Quote Name | string | `varchar(255)` | Yes |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `OpportunityId` | Opportunity ID | reference | `uuid` |  |  | -> Opportunity (Lookup) |
| `Pricebook2Id` | Price Book ID | reference | `uuid` |  |  | -> Pricebook2 (Lookup) |
| `ContactId` | Contact ID | reference | `uuid` |  |  | -> Contact (Lookup) |
| `QuoteNumber` | Quote Number | string | `varchar(30)` |  |  |  |
| `IsSyncing` | Syncing | boolean | `boolean` |  |  |  |
| `ShippingHandling` | Shipping and Handling | currency | `numeric(18,2)` |  |  |  |
| `Tax` | Tax | currency | `numeric(18,2)` |  |  |  |
| `Status` | Status | picklist | `text` |  |  |  |
| `ExpirationDate` | Expiration Date | date | `date` |  |  |  |
| `Description` | Description | textarea | `text` |  |  |  |
| `Subtotal` | Subtotal | currency | `numeric(18,2)` |  |  |  |
| `TotalPrice` | Total Price | currency | `numeric(18,2)` |  |  |  |
| `LineItemCount` | Line Items | int | `int4` |  |  |  |
| `BillingStreet` | Bill To Street | textarea | `text` |  |  |  |
| `BillingCity` | Bill To City | string | `varchar(40)` |  |  |  |
| `BillingState` | Bill To State/Province | string | `varchar(80)` |  |  |  |
| `BillingPostalCode` | Bill To Zip/Postal Code | string | `varchar(20)` |  |  |  |
| `BillingCountry` | Bill To Country | string | `varchar(80)` |  |  |  |
| `BillingLatitude` | Bill To Latitude | double | `numeric(18,15)` |  |  |  |
| `BillingLongitude` | Bill To Longitude | double | `numeric(18,15)` |  |  |  |
| `BillingGeocodeAccuracy` | Bill To Geocode Accuracy | picklist | `text` |  |  |  |
| `BillingAddress` | Bill To | address | `jsonb` |  |  |  |
| `ShippingStreet` | Ship To Street | textarea | `text` |  |  |  |
| `ShippingCity` | Ship To City | string | `varchar(40)` |  |  |  |
| `ShippingState` | Ship To State/Province | string | `varchar(80)` |  |  |  |
| `ShippingPostalCode` | Ship To Zip/Postal Code | string | `varchar(20)` |  |  |  |
| `ShippingCountry` | Ship To Country | string | `varchar(80)` |  |  |  |
| `ShippingLatitude` | Ship To Latitude | double | `numeric(18,15)` |  |  |  |
| `ShippingLongitude` | Ship To Longitude | double | `numeric(18,15)` |  |  |  |
| `ShippingGeocodeAccuracy` | Ship To Geocode Accuracy | picklist | `text` |  |  |  |
| `ShippingAddress` | Ship To | address | `jsonb` |  |  |  |
| `QuoteToStreet` | Quote To Street | textarea | `text` |  |  |  |
| `QuoteToCity` | Quote To City | string | `varchar(40)` |  |  |  |
| `QuoteToState` | Quote To State/Province | string | `varchar(80)` |  |  |  |
| `QuoteToPostalCode` | Quote To Zip/Postal Code | string | `varchar(20)` |  |  |  |
| `QuoteToCountry` | Quote To Country | string | `varchar(80)` |  |  |  |
| `QuoteToLatitude` | Quote To Latitude | double | `numeric(18,15)` |  |  |  |
| `QuoteToLongitude` | Quote To Longitude | double | `numeric(18,15)` |  |  |  |
| `QuoteToGeocodeAccuracy` | Quote To Geocode Accuracy | picklist | `text` |  |  |  |
| `QuoteToAddress` | Quote To | address | `jsonb` |  |  |  |
| `AdditionalStreet` | Additional To Street | textarea | `text` |  |  |  |
| `AdditionalCity` | Additional To City | string | `varchar(40)` |  |  |  |
| `AdditionalState` | Additional To State/Province | string | `varchar(80)` |  |  |  |
| `AdditionalPostalCode` | Additional To Zip/Postal Code | string | `varchar(20)` |  |  |  |
| `AdditionalCountry` | Additional To Country | string | `varchar(80)` |  |  |  |
| `AdditionalLatitude` | Additional To Latitude | double | `numeric(18,15)` |  |  |  |
| `AdditionalLongitude` | Additional To Longitude | double | `numeric(18,15)` |  |  |  |
| `AdditionalGeocodeAccuracy` | Additional To Geocode Accuracy | picklist | `text` |  |  |  |
| `AdditionalAddress` | Additional To | address | `jsonb` |  |  |  |
| `BillingName` | Bill To Name | string | `varchar(255)` |  |  |  |
| `ShippingName` | Ship To Name | string | `varchar(255)` |  |  |  |
| `QuoteToName` | Quote To Name | string | `varchar(255)` |  |  |  |
| `AdditionalName` | Additional To Name | string | `varchar(255)` |  |  |  |
| `Email` | Email | email | `text` |  |  |  |
| `Phone` | Phone | phone | `text` |  |  |  |
| `Fax` | Fax | phone | `text` |  |  |  |
| `ContractId` | Contract ID | reference | `uuid` |  |  | -> Contract (Lookup) |
| `AccountId` | Account ID | reference | `uuid` |  |  | -> Account (Lookup) |
| `QuoteAccountId` | Account ID | reference | `uuid` |  |  | -> Account (Lookup) |
| `Discount` | Discount | percent | `numeric(5,2)` |  |  |  |
| `GrandTotal` | Grand Total | currency | `numeric(18,2)` |  |  |  |
| `CanCreateQuoteLineItems` | Can Create Quote Line Items | boolean | `boolean` |  |  |  |
| `Discount_Percentage__c` | Discount Percentage | percent | `numeric(5,2)` |  |  |  |
| `Discount_Comments__c` | Discount Comments | string | `varchar(255)` |  |  |  |
| `Promotional_Discount__c` | Promotional Discount | currency | `numeric(18,2)` |  |  |  |
| `Down_Payment__c` | Down Payment | currency | `numeric(18,2)` |  |  |  |
| `Just__c` | Just | currency | `numeric(18,2)` |  |  |  |
| `X12_Months_0_APR__c` | 12 Months 0% APR | currency | `numeric(18,2)` |  |  |  |
| `X18_Months_0_APR__c` | 18 Months 0% APR | currency | `numeric(18,2)` |  |  |  |
| `X8_99_APR__c` | 8.99% APR | currency | `numeric(18,2)` |  |  |  |
| `Finance_Amount__c` | Finance Amount | currency | `numeric(18,2)` |  |  |  |
| `Balance_Due__c` | Balance Due | currency | `numeric(18,2)` |  |  |  |
| `Is_Presented__c` | Is Presented ? | boolean | `boolean` |  |  |  |

### Picklist Values

**Status** (`Status`):
- Draft = `Draft`
- Needs Review = `Needs Review`
- In Review = `In Review`
- Approved = `Approved`
- Rejected = `Rejected`
- Presented = `Presented`
- Accepted = `Accepted`
- Denied = `Denied`

**Bill To Geocode Accuracy** (`BillingGeocodeAccuracy`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

**Ship To Geocode Accuracy** (`ShippingGeocodeAccuracy`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

**Quote To Geocode Accuracy** (`QuoteToGeocodeAccuracy`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

**Additional To Geocode Accuracy** (`AdditionalGeocodeAccuracy`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| APXT_CongaSign__Transaction__c | Parent_0Q0__c | APXT_CongaSign_Transactions__r | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| Note | ParentId | Notes | Yes |
| NoteAndAttachment | ParentId | NotesAndAttachments | Yes |
| OpenActivity | WhatId | OpenActivities | Yes |
| Opportunity | SyncedQuoteId | N/A | No |
| OutgoingEmail | RelatedToId | N/A | No |
| QuoteDocument | QuoteId | QuoteDocuments | Yes |
| QuoteLineItem | QuoteId | QuoteLineItems | Yes |
| RecordAction | RecordId | RecordActions | Yes |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |

---

## Quote Line Item (`QuoteLineItem`) {#quotelineitem}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 0QL |
| Fields | 23 |
| Relationships | 11 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Quote Line Item ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `LineNumber` | Line Item Number | string | `varchar(255)` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `QuoteId` | Quote ID | reference | `uuid` | Yes |  | -> Quote (Lookup) |
| `PricebookEntryId` | Price Book Entry ID | reference | `uuid` | Yes |  | -> PricebookEntry (Lookup) |
| `OpportunityLineItemId` | Line Item ID | reference | `uuid` |  |  | -> OpportunityLineItem (Lookup) |
| `Quantity` | Quantity | double | `numeric(12,2)` | Yes |  |  |
| `UnitPrice` | Sales Price | currency | `numeric(18,2)` |  |  |  |
| `Discount` | Discount (Percentage) | percent | `numeric(5,2)` |  |  |  |
| `Description` | Line Item Description | string | `varchar(255)` |  |  |  |
| `ServiceDate` | Date | date | `date` |  |  |  |
| `Product2Id` | Product ID | reference | `uuid` | Yes |  | -> Product2 (Lookup) |
| `SortOrder` | Sort Order | int | `int4` |  |  |  |
| `ListPrice` | List Price | currency | `numeric(18,2)` |  |  |  |
| `Subtotal` | Subtotal  | currency | `numeric(18,2)` |  |  |  |
| `TotalPrice` | Total Price | currency | `numeric(18,2)` |  |  |  |

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| RecordAction | RecordId | RecordActions | Yes |

---

## Solution (`Solution`) {#solution}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 501 |
| Fields | 19 |
| Relationships | 23 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Solution ID | id | `uuid` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `SolutionNumber` | Solution Number | string | `varchar(30)` |  |  |  |
| `SolutionName` | Title | string | `varchar(255)` | Yes |  |  |
| `IsPublished` | Public | boolean | `boolean` |  |  |  |
| `IsPublishedInPublicKb` | Visible in Public Knowledge Base | boolean | `boolean` |  |  |  |
| `Status` | Status | picklist | `text` |  |  |  |
| `IsReviewed` | Reviewed | boolean | `boolean` |  |  |  |
| `SolutionNote` | Description | textarea | `text` |  |  |  |
| `OwnerId` | Owner ID | reference | `uuid` |  |  | -> User (Lookup) |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `TimesUsed` | Num Related Cases | int | `int4` | Yes |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `IsHtml` | Is Html | boolean | `boolean` |  |  |  |

### Picklist Values

**Status** (`Status`):
- Draft = `Draft`
- Reviewed = `Reviewed`
- Duplicate = `Duplicate`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CaseSolution | SolutionId | CaseSolutions | Yes |
| CategoryData | RelatedSobjectId | N/A | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| Event | WhatId | Events | Yes |
| EventRelation | RelationId | EventRelations | Yes |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| OpenActivity | WhatId | OpenActivities | Yes |
| OutgoingEmail | RelatedToId | N/A | No |
| Task | WhatId | Tasks | Yes |
| TaskRelation | RelationId | TaskRelations | Yes |

---

## Task (`Task`) {#task}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 00T |
| Fields | 67 |
| Relationships | 27 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Activity ID | id | `uuid` |  |  |  |
| `WhoId` | Name ID | reference | `uuid` |  |  | -> Contact, Lead (Lookup) |
| `WhatId` | Related To ID | reference | `uuid` |  |  | -> APXTConga4__Composer_QuickMerge__c, APXTConga4__Conga_Email_Staging__c, APXTConga4__Conga_Email_Template__c, Account, Asset, AssetRelationship, Campaign, Case, ContactRequest, Contract, Image, ListEmail, Location, Opportunity, Order, ProcessException, Product2, Quote, Solution, WorkOrder, WorkOrderLineItem, bpmpro3__Building_Permit_c__c, bpmpro3__CPI_AddOn_Product_Catalog__c, bpmpro3__Contact_CSV_Import__c, bpmpro3__Deal_Sheet__c, bpmpro3__Labor_Charge__c, bpmpro3__Labor_Ticket__c, bpmpro3__Material__c, bpmpro3__Orders__c, bpmpro3__PaymentBPM__c, bpmpro3__ProductItem__c, bpmpro3__Project_Invoice__c, bpmpro3__Project_Stage_Assignment_Team_Member__c, bpmpro3__Project_Stage_Team_Member__c, bpmpro3__Project__c, bpmpro3__Property__c, bpmpro3__Prospect__c, bpmpro3__Sales_Document__c, bpmpro3__Service_Ticket__c, bpmpro3__Timesheet__c, bpmpro3__Work_Assignment__c, dfsle__AgreementConfiguration__c, dfsle__BulkList__c, dfsle__BulkStatus__c, dfsle__CustomParameterMap__c, dfsle__EnvelopeConfiguration__c, dfsle__EnvelopeStatus__c, dfsle__GenTemplate__c, dfsle__Log__c, dfsle__RecipientStatus__c, inov8__PMT_Error_Log__c, inov8__PMT_Project__c, inov8__PMT_Task__c (Lookup) |
| `WhoCount` | Relation Count | int | `int4` |  |  |  |
| `WhatCount` | Related To Count | int | `int4` |  |  |  |
| `Subject` | Subject | combobox | `text` |  |  |  |
| `ActivityDate` | Due Date Only | date | `date` |  |  |  |
| `Status` | Status | picklist | `text` |  |  |  |
| `Priority` | Priority | picklist | `text` |  |  |  |
| `IsHighPriority` | High Priority | boolean | `boolean` |  |  |  |
| `OwnerId` | Assigned To ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `Description` | Description | textarea | `text` |  |  |  |
| `Type` | Type | picklist | `text` |  |  |  |
| `IsDeleted` | Deleted | boolean | `boolean` |  |  |  |
| `AccountId` | Account ID | reference | `uuid` |  |  | -> Account (Lookup) |
| `IsClosed` | Closed | boolean | `boolean` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `IsArchived` | Archived | boolean | `boolean` |  |  |  |
| `CallDurationInSeconds` | Call Duration | int | `int4` |  |  |  |
| `CallType` | Call Type | picklist | `text` |  |  |  |
| `CallDisposition` | Call Result | string | `varchar(255)` |  |  |  |
| `CallObject` | Call Object Identifier | string | `varchar(255)` |  |  |  |
| `ReminderDateTime` | Reminder Date/Time | datetime | `timestamptz` |  |  |  |
| `IsReminderSet` | Reminder Set | boolean | `boolean` |  |  |  |
| `RecurrenceActivityId` | Recurrence Activity ID | reference | `uuid` |  |  | -> Task (Lookup) |
| `IsRecurrence` | Create Recurring Series of Tasks | boolean | `boolean` |  |  |  |
| `RecurrenceStartDateOnly` | Recurrence Start | date | `date` |  |  |  |
| `RecurrenceEndDateOnly` | Recurrence End | date | `date` |  |  |  |
| `RecurrenceTimeZoneSidKey` | Recurrence Time Zone | picklist | `text` |  |  |  |
| `RecurrenceType` | Recurrence Type | picklist | `text` |  |  |  |
| `RecurrenceInterval` | Recurrence Interval | int | `int4` |  |  |  |
| `RecurrenceDayOfWeekMask` | Recurrence Day of Week Mask | int | `int4` |  |  |  |
| `RecurrenceDayOfMonth` | Recurrence Day of Month | int | `int4` |  |  |  |
| `RecurrenceInstance` | Recurrence Instance | picklist | `text` |  |  |  |
| `RecurrenceMonthOfYear` | Recurrence Month of Year | picklist | `text` |  |  |  |
| `RecurrenceRegeneratedType` | Repeat This Task | picklist | `text` |  |  |  |
| `TaskSubtype` | Task Subtype | picklist | `text` |  |  |  |
| `CompletedDateTime` | Completed Date/Time | datetime | `timestamptz` |  |  |  |
| `New_Account_Business_Internal_Role__c` | New Account Business Internal Role | picklist | `text` |  |  |  |
| `New_Account_Record_Type__c` | New Account Record Type | picklist | `text` |  |  |  |
| `Location_Custom__Street__s` | Location (Street) | textarea | `text` |  |  |  |
| `Location_Custom__City__s` | Location (City) | string | `varchar(40)` |  |  |  |
| `Location_Custom__PostalCode__s` | Location (ZIP/Postal Code) | string | `varchar(20)` |  |  |  |
| `Location_Custom__StateCode__s` | Location (State/Province) | picklist | `text` |  |  |  |
| `Location_Custom__CountryCode__s` | Location (Country/Territory) | picklist | `text` |  |  |  |
| `Location_Custom__Latitude__s` | Location (Latitude) | double | `numeric(18,15)` |  |  |  |
| `Location_Custom__Longitude__s` | Location (Longitude) | double | `numeric(18,15)` |  |  |  |
| `Location_Custom__GeocodeAccuracy__s` | Location (Geocode Accuracy) | picklist | `text` |  |  |  |
| `Location_Custom__c` | Location | address | `jsonb` |  |  |  |
| `New_Account_Billing_Email_Address__c` | New Contact Email | email | `text` |  |  |  |
| `New_Account_First_Name__c` | New Account First Name | string | `varchar(255)` |  |  |  |
| `New_Account_Name_Last_Name__c` | New Account Name | string | `varchar(255)` |  |  |  |
| `New_Contact_First_Name__c` | New Contact First Name | string | `varchar(255)` |  |  |  |
| `New_Contact_Last_Name__c` | New Contact Last Name | string | `varchar(255)` |  |  |  |
| `Preferred_Contact_Method__c` | Preferred Contact Method | picklist | `text` |  |  |  |
| `New_Contact_Mobile__c` | New Contact Mobile | phone | `text` |  |  |  |
| `New_Contact_Phone__c` | New Contact Phone | phone | `text` |  |  |  |
| `Lead_Source__c` | Lead Source | picklist | `text` |  |  |  |
| `Service_Type__c` | Service Type | picklist | `text` |  |  |  |
| `Relationship__c` | Relationship | picklist | `text` |  |  |  |
| `Construction_Type__c` | Construction Type | picklist | `text` |  |  |  |
| `Project_Manager__c` | Project Manager | reference | `uuid` |  |  | -> Contact (Lookup) |
| `Project_Name__c` | Project Name | string | `varchar(255)` |  |  |  |

### Picklist Values

**Status** (`Status`):
- Open = `Open`
- Completed = `Completed`

**Priority** (`Priority`):
- High = `High`
- Normal = `Normal`

**Type** (`Type`):
- Call = `Call`
- Meeting = `Meeting`
- Other = `Other`

**Call Type** (`CallType`):
- Internal = `Internal`
- Inbound = `Inbound`
- Outbound = `Outbound`

**Recurrence Time Zone** (`RecurrenceTimeZoneSidKey`):
- (GMT+14:00) Line Islands Time (Pacific/Kiritimati) = `Pacific/Kiritimati`
- (GMT+13:45) Chatham Daylight Time (Pacific/Chatham) = `Pacific/Chatham`
- (GMT+13:00) New Zealand Daylight Time (Antarctica/McMurdo) = `Antarctica/McMurdo`
- (GMT+13:00) Apia Standard Time (Pacific/Apia) = `Pacific/Apia`
- (GMT+13:00) New Zealand Daylight Time (Pacific/Auckland) = `Pacific/Auckland`
- (GMT+13:00) Phoenix Islands Time (Pacific/Enderbury) = `Pacific/Enderbury`
- (GMT+13:00) Tokelau Time (Pacific/Fakaofo) = `Pacific/Fakaofo`
- (GMT+13:00) Tonga Standard Time (Pacific/Tongatapu) = `Pacific/Tongatapu`
- (GMT+12:00) Anadyr Standard Time (Asia/Anadyr) = `Asia/Anadyr`
- (GMT+12:00) Petropavlovsk-Kamchatski Standard Time (Asia/Kamchatka) = `Asia/Kamchatka`
- (GMT+12:00) Fiji Standard Time (Pacific/Fiji) = `Pacific/Fiji`
- (GMT+12:00) Tuvalu Time (Pacific/Funafuti) = `Pacific/Funafuti`
- (GMT+12:00) Marshall Islands Time (Pacific/Kwajalein) = `Pacific/Kwajalein`
- (GMT+12:00) Marshall Islands Time (Pacific/Majuro) = `Pacific/Majuro`
- (GMT+12:00) Nauru Time (Pacific/Nauru) = `Pacific/Nauru`
- (GMT+12:00) Norfolk Island Daylight Time (Pacific/Norfolk) = `Pacific/Norfolk`
- (GMT+12:00) Gilbert Islands Time (Pacific/Tarawa) = `Pacific/Tarawa`
- (GMT+12:00) Wake Island Time (Pacific/Wake) = `Pacific/Wake`
- (GMT+12:00) Wallis & Futuna Time (Pacific/Wallis) = `Pacific/Wallis`
- (GMT+11:00) Australian Eastern Daylight Time (Antarctica/Macquarie) = `Antarctica/Macquarie`
- (GMT+11:00) Magadan Standard Time (Asia/Magadan) = `Asia/Magadan`
- (GMT+11:00) Sakhalin Standard Time (Asia/Sakhalin) = `Asia/Sakhalin`
- (GMT+11:00) Magadan Standard Time (Asia/Srednekolymsk) = `Asia/Srednekolymsk`
- (GMT+11:00) Australian Eastern Daylight Time (Australia/Currie) = `Australia/Currie`
- (GMT+11:00) Australian Eastern Daylight Time (Australia/Hobart) = `Australia/Hobart`
- (GMT+11:00) Lord Howe Daylight Time (Australia/Lord_Howe) = `Australia/Lord_Howe`
- (GMT+11:00) Australian Eastern Daylight Time (Australia/Melbourne) = `Australia/Melbourne`
- (GMT+11:00) Australian Eastern Daylight Time (Australia/Sydney) = `Australia/Sydney`
- (GMT+11:00) Bougainville Standard Time (Pacific/Bougainville) = `Pacific/Bougainville`
- (GMT+11:00) Vanuatu Standard Time (Pacific/Efate) = `Pacific/Efate`
- (GMT+11:00) Solomon Islands Time (Pacific/Guadalcanal) = `Pacific/Guadalcanal`
- (GMT+11:00) Kosrae Time (Pacific/Kosrae) = `Pacific/Kosrae`
- (GMT+11:00) New Caledonia Standard Time (Pacific/Noumea) = `Pacific/Noumea`
- (GMT+11:00) Ponape Time (Pacific/Ponape) = `Pacific/Ponape`
- (GMT+10:30) Australian Central Daylight Time (Australia/Adelaide) = `Australia/Adelaide`
- (GMT+10:30) Australian Central Daylight Time (Australia/Broken_Hill) = `Australia/Broken_Hill`
- (GMT+10:00) Dumont-d’Urville Time (Antarctica/DumontDUrville) = `Antarctica/DumontDUrville`
- (GMT+10:00) Vladivostok Standard Time (Asia/Ust-Nera) = `Asia/Ust-Nera`
- (GMT+10:00) Vladivostok Standard Time (Asia/Vladivostok) = `Asia/Vladivostok`
- (GMT+10:00) Australian Eastern Standard Time (Australia/Brisbane) = `Australia/Brisbane`
- (GMT+10:00) Australian Eastern Standard Time (Australia/Lindeman) = `Australia/Lindeman`
- (GMT+10:00) Chamorro Standard Time (Pacific/Guam) = `Pacific/Guam`
- (GMT+10:00) Papua New Guinea Time (Pacific/Port_Moresby) = `Pacific/Port_Moresby`
- (GMT+10:00) Chamorro Standard Time (Pacific/Saipan) = `Pacific/Saipan`
- (GMT+10:00) Chuuk Time (Pacific/Truk) = `Pacific/Truk`
- (GMT+09:30) Australian Central Standard Time (Australia/Darwin) = `Australia/Darwin`
- (GMT+09:00) Yakutsk Standard Time (Asia/Chita) = `Asia/Chita`
- (GMT+09:00) East Timor Time (Asia/Dili) = `Asia/Dili`
- (GMT+09:00) Eastern Indonesia Time (Asia/Jayapura) = `Asia/Jayapura`
- (GMT+09:00) Yakutsk Standard Time (Asia/Khandyga) = `Asia/Khandyga`
- (GMT+09:00) Korean Standard Time (Asia/Seoul) = `Asia/Seoul`
- (GMT+09:00) Japan Standard Time (Asia/Tokyo) = `Asia/Tokyo`
- (GMT+09:00) Yakutsk Standard Time (Asia/Yakutsk) = `Asia/Yakutsk`
- (GMT+09:00) Palau Time (Pacific/Palau) = `Pacific/Palau`
- (GMT+08:45) Australian Central Western Standard Time (Australia/Eucla) = `Australia/Eucla`
- (GMT+08:00) Casey Time (Antarctica/Casey) = `Antarctica/Casey`
- (GMT+08:00) Brunei Darussalam Time (Asia/Brunei) = `Asia/Brunei`
- (GMT+08:00) Ulaanbaatar Standard Time (Asia/Choibalsan) = `Asia/Choibalsan`
- (GMT+08:00) Hong Kong Standard Time (Asia/Hong_Kong) = `Asia/Hong_Kong`
- (GMT+08:00) Irkutsk Standard Time (Asia/Irkutsk) = `Asia/Irkutsk`
- (GMT+08:00) Malaysia Time (Asia/Kuala_Lumpur) = `Asia/Kuala_Lumpur`
- (GMT+08:00) Malaysia Time (Asia/Kuching) = `Asia/Kuching`
- (GMT+08:00) China Standard Time (Asia/Macau) = `Asia/Macau`
- (GMT+08:00) Central Indonesia Time (Asia/Makassar) = `Asia/Makassar`
- (GMT+08:00) Philippine Standard Time (Asia/Manila) = `Asia/Manila`
- (GMT+08:00) China Standard Time (Asia/Shanghai) = `Asia/Shanghai`
- (GMT+08:00) Singapore Standard Time (Asia/Singapore) = `Asia/Singapore`
- (GMT+08:00) Taipei Standard Time (Asia/Taipei) = `Asia/Taipei`
- (GMT+08:00) Ulaanbaatar Standard Time (Asia/Ulaanbaatar) = `Asia/Ulaanbaatar`
- (GMT+08:00) Australian Western Standard Time (Australia/Perth) = `Australia/Perth`
- (GMT+07:00) Davis Time (Antarctica/Davis) = `Antarctica/Davis`
- (GMT+07:00) Indochina Time (Asia/Bangkok) = `Asia/Bangkok`
- (GMT+07:00) Moscow Standard Time + 4 (Asia/Barnaul) = `Asia/Barnaul`
- (GMT+07:00) Indochina Time (Asia/Ho_Chi_Minh) = `Asia/Ho_Chi_Minh`
- (GMT+07:00) Hovd Standard Time (Asia/Hovd) = `Asia/Hovd`
- (GMT+07:00) Western Indonesia Time (Asia/Jakarta) = `Asia/Jakarta`
- (GMT+07:00) Krasnoyarsk Standard Time (Asia/Krasnoyarsk) = `Asia/Krasnoyarsk`
- (GMT+07:00) Krasnoyarsk Standard Time (Asia/Novokuznetsk) = `Asia/Novokuznetsk`
- (GMT+07:00) Novosibirsk Standard Time (Asia/Novosibirsk) = `Asia/Novosibirsk`
- (GMT+07:00) Indochina Time (Asia/Phnom_Penh) = `Asia/Phnom_Penh`
- (GMT+07:00) Western Indonesia Time (Asia/Pontianak) = `Asia/Pontianak`
- (GMT+07:00) Moscow Standard Time + 4 (Asia/Tomsk) = `Asia/Tomsk`
- (GMT+07:00) Indochina Time (Asia/Vientiane) = `Asia/Vientiane`
- (GMT+07:00) Christmas Island Time (Indian/Christmas) = `Indian/Christmas`
- (GMT+06:30) Myanmar Time (Asia/Rangoon) = `Asia/Rangoon`
- (GMT+06:30) Cocos Islands Time (Indian/Cocos) = `Indian/Cocos`
- (GMT+06:00) Kyrgyzstan Time (Asia/Bishkek) = `Asia/Bishkek`
- (GMT+06:00) Bangladesh Standard Time (Asia/Dhaka) = `Asia/Dhaka`
- (GMT+06:00) Omsk Standard Time (Asia/Omsk) = `Asia/Omsk`
- (GMT+06:00) Bhutan Time (Asia/Thimphu) = `Asia/Thimphu`
- (GMT+06:00) China Standard Time (Asia/Urumqi) = `Asia/Urumqi`
- (GMT+06:00) Indian Ocean Time (Indian/Chagos) = `Indian/Chagos`
- (GMT+05:45) Nepal Time (Asia/Kathmandu) = `Asia/Kathmandu`
- (GMT+05:30) India Standard Time (Asia/Colombo) = `Asia/Colombo`
- (GMT+05:30) India Standard Time (Asia/Kolkata) = `Asia/Kolkata`
- (GMT+05:00) Mawson Time (Antarctica/Mawson) = `Antarctica/Mawson`
- (GMT+05:00) Vostok Time (Antarctica/Vostok) = `Antarctica/Vostok`
- (GMT+05:00) East Kazakhstan Time (Asia/Almaty) = `Asia/Almaty`
- (GMT+05:00) West Kazakhstan Time (Asia/Aqtau) = `Asia/Aqtau`
- (GMT+05:00) West Kazakhstan Time (Asia/Aqtobe) = `Asia/Aqtobe`
- (GMT+05:00) Turkmenistan Standard Time (Asia/Ashgabat) = `Asia/Ashgabat`
- (GMT+05:00) West Kazakhstan Time (Asia/Atyrau) = `Asia/Atyrau`
- (GMT+05:00) Tajikistan Time (Asia/Dushanbe) = `Asia/Dushanbe`
- (GMT+05:00) Pakistan Standard Time (Asia/Karachi) = `Asia/Karachi`
- (GMT+05:00) West Kazakhstan Time (Asia/Oral) = `Asia/Oral`
- (GMT+05:00) East Kazakhstan Time (Asia/Qostanay) = `Asia/Qostanay`
- (GMT+05:00) West Kazakhstan Time (Asia/Qyzylorda) = `Asia/Qyzylorda`
- (GMT+05:00) Uzbekistan Standard Time (Asia/Samarkand) = `Asia/Samarkand`
- (GMT+05:00) Uzbekistan Standard Time (Asia/Tashkent) = `Asia/Tashkent`
- (GMT+05:00) Yekaterinburg Standard Time (Asia/Yekaterinburg) = `Asia/Yekaterinburg`
- (GMT+05:00) French Southern & Antarctic Time (Indian/Kerguelen) = `Indian/Kerguelen`
- (GMT+05:00) Maldives Time (Indian/Maldives) = `Indian/Maldives`
- (GMT+04:30) Afghanistan Time (Asia/Kabul) = `Asia/Kabul`
- (GMT+04:00) Azerbaijan Standard Time (Asia/Baku) = `Asia/Baku`
- (GMT+04:00) Gulf Standard Time (Asia/Dubai) = `Asia/Dubai`
- (GMT+04:00) Gulf Standard Time (Asia/Muscat) = `Asia/Muscat`
- (GMT+04:00) Georgia Standard Time (Asia/Tbilisi) = `Asia/Tbilisi`
- (GMT+04:00) Armenia Standard Time (Asia/Yerevan) = `Asia/Yerevan`
- (GMT+04:00) Samara Standard Time (Europe/Astrakhan) = `Europe/Astrakhan`
- (GMT+04:00) Samara Standard Time (Europe/Samara) = `Europe/Samara`
- (GMT+04:00) Moscow Standard Time + 1 (Europe/Saratov) = `Europe/Saratov`
- (GMT+04:00) Moscow Standard Time + 1 (Europe/Ulyanovsk) = `Europe/Ulyanovsk`
- (GMT+04:00) Seychelles Time (Indian/Mahe) = `Indian/Mahe`
- (GMT+04:00) Mauritius Standard Time (Indian/Mauritius) = `Indian/Mauritius`
- (GMT+04:00) Réunion Time (Indian/Reunion) = `Indian/Reunion`
- (GMT+03:00) East Africa Time (Africa/Addis_Ababa) = `Africa/Addis_Ababa`
- (GMT+03:00) East Africa Time (Africa/Asmera) = `Africa/Asmera`
- (GMT+03:00) East Africa Time (Africa/Dar_es_Salaam) = `Africa/Dar_es_Salaam`
- (GMT+03:00) East Africa Time (Africa/Djibouti) = `Africa/Djibouti`
- (GMT+03:00) East Africa Time (Africa/Kampala) = `Africa/Kampala`
- (GMT+03:00) East Africa Time (Africa/Mogadishu) = `Africa/Mogadishu`
- (GMT+03:00) East Africa Time (Africa/Nairobi) = `Africa/Nairobi`
- (GMT+03:00) Syowa Time (Antarctica/Syowa) = `Antarctica/Syowa`
- (GMT+03:00) Arabian Standard Time (Asia/Aden) = `Asia/Aden`
- (GMT+03:00) Eastern European Standard Time (Asia/Amman) = `Asia/Amman`
- (GMT+03:00) Arabian Standard Time (Asia/Baghdad) = `Asia/Baghdad`
- (GMT+03:00) Arabian Standard Time (Asia/Bahrain) = `Asia/Bahrain`
- (GMT+03:00) Arabian Standard Time (Asia/Kuwait) = `Asia/Kuwait`
- (GMT+03:00) Arabian Standard Time (Asia/Qatar) = `Asia/Qatar`
- (GMT+03:00) Arabian Standard Time (Asia/Riyadh) = `Asia/Riyadh`
- (GMT+03:00) Eastern European Standard Time (Europe/Istanbul) = `Europe/Istanbul`
- (GMT+03:00) Moscow Standard Time (Europe/Kirov) = `Europe/Kirov`
- (GMT+03:00) Moscow Standard Time (Europe/Minsk) = `Europe/Minsk`
- (GMT+03:00) Moscow Standard Time (Europe/Moscow) = `Europe/Moscow`
- (GMT+03:00) Volgograd Standard Time (Europe/Volgograd) = `Europe/Volgograd`
- (GMT+03:00) East Africa Time (Indian/Antananarivo) = `Indian/Antananarivo`
- (GMT+03:00) East Africa Time (Indian/Comoro) = `Indian/Comoro`
- (GMT+03:00) East Africa Time (Indian/Mayotte) = `Indian/Mayotte`
- (GMT+02:00) Central Africa Time (Africa/Blantyre) = `Africa/Blantyre`
- (GMT+02:00) Central Africa Time (Africa/Bujumbura) = `Africa/Bujumbura`
- (GMT+02:00) Eastern European Standard Time (Africa/Cairo) = `Africa/Cairo`
- (GMT+02:00) Central Africa Time (Africa/Gaborone) = `Africa/Gaborone`
- (GMT+02:00) Central Africa Time (Africa/Harare) = `Africa/Harare`
- (GMT+02:00) South Africa Standard Time (Africa/Johannesburg) = `Africa/Johannesburg`
- (GMT+02:00) Central Africa Time (Africa/Juba) = `Africa/Juba`
- (GMT+02:00) Central Africa Time (Africa/Khartoum) = `Africa/Khartoum`
- (GMT+02:00) Central Africa Time (Africa/Kigali) = `Africa/Kigali`
- (GMT+02:00) Central Africa Time (Africa/Lubumbashi) = `Africa/Lubumbashi`
- (GMT+02:00) Central Africa Time (Africa/Lusaka) = `Africa/Lusaka`
- (GMT+02:00) Central Africa Time (Africa/Maputo) = `Africa/Maputo`
- (GMT+02:00) South Africa Standard Time (Africa/Maseru) = `Africa/Maseru`
- (GMT+02:00) South Africa Standard Time (Africa/Mbabane) = `Africa/Mbabane`
- (GMT+02:00) Eastern European Standard Time (Africa/Tripoli) = `Africa/Tripoli`
- (GMT+02:00) Central Africa Time (Africa/Windhoek) = `Africa/Windhoek`
- (GMT+02:00) Eastern European Standard Time (Asia/Beirut) = `Asia/Beirut`
- (GMT+02:00) Eastern European Standard Time (Asia/Famagusta) = `Asia/Famagusta`
- (GMT+02:00) Eastern European Standard Time (Asia/Gaza) = `Asia/Gaza`
- (GMT+02:00) Eastern European Standard Time (Asia/Hebron) = `Asia/Hebron`
- (GMT+02:00) Israel Standard Time (Asia/Jerusalem) = `Asia/Jerusalem`
- (GMT+02:00) Eastern European Standard Time (Asia/Nicosia) = `Asia/Nicosia`
- (GMT+02:00) Eastern European Standard Time (Europe/Athens) = `Europe/Athens`
- (GMT+02:00) Eastern European Standard Time (Europe/Bucharest) = `Europe/Bucharest`
- (GMT+02:00) Eastern European Standard Time (Europe/Chisinau) = `Europe/Chisinau`
- (GMT+02:00) Eastern European Standard Time (Europe/Helsinki) = `Europe/Helsinki`
- (GMT+02:00) Eastern European Standard Time (Europe/Kaliningrad) = `Europe/Kaliningrad`
- (GMT+02:00) Eastern European Standard Time (Europe/Kyiv) = `Europe/Kiev`
- (GMT+02:00) Eastern European Standard Time (Europe/Mariehamn) = `Europe/Mariehamn`
- (GMT+02:00) Eastern European Standard Time (Europe/Riga) = `Europe/Riga`
- (GMT+02:00) Eastern European Standard Time (Europe/Sofia) = `Europe/Sofia`
- (GMT+02:00) Eastern European Standard Time (Europe/Tallinn) = `Europe/Tallinn`
- (GMT+02:00) Eastern European Standard Time (Europe/Uzhgorod) = `Europe/Uzhgorod`
- (GMT+02:00) Eastern European Standard Time (Europe/Vilnius) = `Europe/Vilnius`
- (GMT+02:00) Eastern European Standard Time (Europe/Zaporozhye) = `Europe/Zaporozhye`
- (GMT+01:00) Central European Standard Time (Africa/Algiers) = `Africa/Algiers`
- (GMT+01:00) West Africa Standard Time (Africa/Bangui) = `Africa/Bangui`
- (GMT+01:00) West Africa Standard Time (Africa/Brazzaville) = `Africa/Brazzaville`
- (GMT+01:00) Central European Standard Time (Africa/Ceuta) = `Africa/Ceuta`
- (GMT+01:00) West Africa Standard Time (Africa/Douala) = `Africa/Douala`
- (GMT+01:00) West Africa Standard Time (Africa/Kinshasa) = `Africa/Kinshasa`
- (GMT+01:00) West Africa Standard Time (Africa/Lagos) = `Africa/Lagos`
- (GMT+01:00) West Africa Standard Time (Africa/Libreville) = `Africa/Libreville`
- (GMT+01:00) West Africa Standard Time (Africa/Luanda) = `Africa/Luanda`
- (GMT+01:00) West Africa Standard Time (Africa/Malabo) = `Africa/Malabo`
- (GMT+01:00) West Africa Standard Time (Africa/Ndjamena) = `Africa/Ndjamena`
- (GMT+01:00) West Africa Standard Time (Africa/Niamey) = `Africa/Niamey`
- (GMT+01:00) West Africa Standard Time (Africa/Porto-Novo) = `Africa/Porto-Novo`
- (GMT+01:00) Central European Standard Time (Africa/Tunis) = `Africa/Tunis`
- (GMT+01:00) Central European Standard Time (Arctic/Longyearbyen) = `Arctic/Longyearbyen`
- (GMT+01:00) Central European Standard Time (Europe/Amsterdam) = `Europe/Amsterdam`
- (GMT+01:00) Central European Standard Time (Europe/Andorra) = `Europe/Andorra`
- (GMT+01:00) Central European Standard Time (Europe/Belgrade) = `Europe/Belgrade`
- (GMT+01:00) Central European Standard Time (Europe/Berlin) = `Europe/Berlin`
- (GMT+01:00) Central European Standard Time (Europe/Bratislava) = `Europe/Bratislava`
- (GMT+01:00) Central European Standard Time (Europe/Brussels) = `Europe/Brussels`
- (GMT+01:00) Central European Standard Time (Europe/Budapest) = `Europe/Budapest`
- (GMT+01:00) Central European Standard Time (Europe/Busingen) = `Europe/Busingen`
- (GMT+01:00) Central European Standard Time (Europe/Copenhagen) = `Europe/Copenhagen`
- (GMT+01:00) Central European Standard Time (Europe/Gibraltar) = `Europe/Gibraltar`
- (GMT+01:00) Central European Standard Time (Europe/Ljubljana) = `Europe/Ljubljana`
- (GMT+01:00) Central European Standard Time (Europe/Luxembourg) = `Europe/Luxembourg`
- (GMT+01:00) Central European Standard Time (Europe/Madrid) = `Europe/Madrid`
- (GMT+01:00) Central European Standard Time (Europe/Malta) = `Europe/Malta`
- (GMT+01:00) Central European Standard Time (Europe/Monaco) = `Europe/Monaco`
- (GMT+01:00) Central European Standard Time (Europe/Oslo) = `Europe/Oslo`
- (GMT+01:00) Central European Standard Time (Europe/Paris) = `Europe/Paris`
- (GMT+01:00) Central European Standard Time (Europe/Podgorica) = `Europe/Podgorica`
- (GMT+01:00) Central European Standard Time (Europe/Prague) = `Europe/Prague`
- (GMT+01:00) Central European Standard Time (Europe/Rome) = `Europe/Rome`
- (GMT+01:00) Central European Standard Time (Europe/San_Marino) = `Europe/San_Marino`
- (GMT+01:00) Central European Standard Time (Europe/Sarajevo) = `Europe/Sarajevo`
- (GMT+01:00) Central European Standard Time (Europe/Skopje) = `Europe/Skopje`
- (GMT+01:00) Central European Standard Time (Europe/Stockholm) = `Europe/Stockholm`
- (GMT+01:00) Central European Standard Time (Europe/Tirane) = `Europe/Tirane`
- (GMT+01:00) Central European Standard Time (Europe/Vaduz) = `Europe/Vaduz`
- (GMT+01:00) Central European Standard Time (Europe/Vatican) = `Europe/Vatican`
- (GMT+01:00) Central European Standard Time (Europe/Vienna) = `Europe/Vienna`
- (GMT+01:00) Central European Standard Time (Europe/Warsaw) = `Europe/Warsaw`
- (GMT+01:00) Central European Standard Time (Europe/Zagreb) = `Europe/Zagreb`
- (GMT+01:00) Central European Standard Time (Europe/Zurich) = `Europe/Zurich`
- (GMT+00:00) Greenwich Mean Time (Africa/Abidjan) = `Africa/Abidjan`
- (GMT+00:00) Greenwich Mean Time (Africa/Accra) = `Africa/Accra`
- (GMT+00:00) Greenwich Mean Time (Africa/Bamako) = `Africa/Bamako`
- (GMT+00:00) Greenwich Mean Time (Africa/Banjul) = `Africa/Banjul`
- (GMT+00:00) Greenwich Mean Time (Africa/Bissau) = `Africa/Bissau`
- (GMT+00:00) Western European Standard Time (Africa/Casablanca) = `Africa/Casablanca`
- (GMT+00:00) Greenwich Mean Time (Africa/Conakry) = `Africa/Conakry`
- (GMT+00:00) Greenwich Mean Time (Africa/Dakar) = `Africa/Dakar`
- (GMT+00:00) Western European Standard Time (Africa/El_Aaiun) = `Africa/El_Aaiun`
- (GMT+00:00) Greenwich Mean Time (Africa/Freetown) = `Africa/Freetown`
- (GMT+00:00) Greenwich Mean Time (Africa/Lome) = `Africa/Lome`
- (GMT+00:00) Greenwich Mean Time (Africa/Monrovia) = `Africa/Monrovia`
- (GMT+00:00) Greenwich Mean Time (Africa/Nouakchott) = `Africa/Nouakchott`
- (GMT+00:00) Greenwich Mean Time (Africa/Ouagadougou) = `Africa/Ouagadougou`
- (GMT+00:00) Greenwich Mean Time (Africa/Sao_Tome) = `Africa/Sao_Tome`
- (GMT+00:00) Greenwich Mean Time (America/Danmarkshavn) = `America/Danmarkshavn`
- (GMT+00:00) Greenwich Mean Time (Antarctica/Troll) = `Antarctica/Troll`
- (GMT+00:00) Western European Standard Time (Atlantic/Canary) = `Atlantic/Canary`
- (GMT+00:00) Western European Standard Time (Atlantic/Faeroe) = `Atlantic/Faeroe`
- (GMT+00:00) Western European Standard Time (Atlantic/Madeira) = `Atlantic/Madeira`
- (GMT+00:00) Greenwich Mean Time (Atlantic/Reykjavik) = `Atlantic/Reykjavik`
- (GMT+00:00) Greenwich Mean Time (Atlantic/St_Helena) = `Atlantic/St_Helena`
- (GMT+00:00) Greenwich Mean Time (Europe/Dublin) = `Europe/Dublin`
- (GMT+00:00) Greenwich Mean Time (Europe/Guernsey) = `Europe/Guernsey`
- (GMT+00:00) Greenwich Mean Time (Europe/Isle_of_Man) = `Europe/Isle_of_Man`
- (GMT+00:00) Greenwich Mean Time (Europe/Jersey) = `Europe/Jersey`
- (GMT+00:00) Western European Standard Time (Europe/Lisbon) = `Europe/Lisbon`
- (GMT+00:00) Greenwich Mean Time (Europe/London) = `Europe/London`
- (GMT+00:00) Greenwich Mean Time (GMT) = `GMT`
- (GMT-01:00) Azores Standard Time (Atlantic/Azores) = `Atlantic/Azores`
- (GMT-01:00) Cape Verde Standard Time (Atlantic/Cape_Verde) = `Atlantic/Cape_Verde`
- (GMT-02:00) West Greenland Standard Time (America/Godthab) = `America/Godthab`
- (GMT-02:00) Fernando de Noronha Standard Time (America/Noronha) = `America/Noronha`
- (GMT-02:00) East Greenland Standard Time (America/Scoresbysund) = `America/Scoresbysund`
- (GMT-02:00) South Georgia Time (Atlantic/South_Georgia) = `Atlantic/South_Georgia`
- (GMT-03:00) Brasilia Standard Time (America/Araguaina) = `America/Araguaina`
- (GMT-03:00) Argentina Standard Time (America/Argentina/Buenos_Aires) = `America/Argentina/Buenos_Aires`
- (GMT-03:00) Argentina Standard Time (America/Argentina/La_Rioja) = `America/Argentina/La_Rioja`
- (GMT-03:00) Argentina Standard Time (America/Argentina/Rio_Gallegos) = `America/Argentina/Rio_Gallegos`
- (GMT-03:00) Argentina Standard Time (America/Argentina/Salta) = `America/Argentina/Salta`
- (GMT-03:00) Argentina Standard Time (America/Argentina/San_Juan) = `America/Argentina/San_Juan`
- (GMT-03:00) Argentina Standard Time (America/Argentina/San_Luis) = `America/Argentina/San_Luis`
- (GMT-03:00) Argentina Standard Time (America/Argentina/Tucuman) = `America/Argentina/Tucuman`
- (GMT-03:00) Argentina Standard Time (America/Argentina/Ushuaia) = `America/Argentina/Ushuaia`
- (GMT-03:00) Paraguay Standard Time (America/Asuncion) = `America/Asuncion`
- (GMT-03:00) Brasilia Standard Time (America/Bahia) = `America/Bahia`
- (GMT-03:00) Brasilia Standard Time (America/Belem) = `America/Belem`
- (GMT-03:00) Argentina Standard Time (America/Catamarca) = `America/Catamarca`
- (GMT-03:00) French Guiana Time (America/Cayenne) = `America/Cayenne`
- (GMT-03:00) Argentina Standard Time (America/Cordoba) = `America/Cordoba`
- (GMT-03:00) Brasilia Standard Time (America/Fortaleza) = `America/Fortaleza`
- (GMT-03:00) Argentina Standard Time (America/Jujuy) = `America/Jujuy`
- (GMT-03:00) Brasilia Standard Time (America/Maceio) = `America/Maceio`
- (GMT-03:00) Argentina Standard Time (America/Mendoza) = `America/Mendoza`
- (GMT-03:00) St Pierre & Miquelon Standard Time (America/Miquelon) = `America/Miquelon`
- (GMT-03:00) Uruguay Standard Time (America/Montevideo) = `America/Montevideo`
- (GMT-03:00) Suriname Time (America/Paramaribo) = `America/Paramaribo`
- (GMT-03:00) Chile Standard Time (America/Punta_Arenas) = `America/Punta_Arenas`
- (GMT-03:00) Brasilia Standard Time (America/Recife) = `America/Recife`
- (GMT-03:00) Brasilia Standard Time (America/Santarem) = `America/Santarem`
- (GMT-03:00) Chile Summer Time (America/Santiago) = `America/Santiago`
- (GMT-03:00) Brasilia Standard Time (America/Sao_Paulo) = `America/Sao_Paulo`
- (GMT-03:00) Chile Standard Time (Antarctica/Palmer) = `Antarctica/Palmer`
- (GMT-03:00) Rothera Time (Antarctica/Rothera) = `Antarctica/Rothera`
- (GMT-03:00) Falkland Islands Standard Time (Atlantic/Stanley) = `Atlantic/Stanley`
- (GMT-03:30) Newfoundland Standard Time (America/St_Johns) = `America/St_Johns`
- (GMT-04:00) Atlantic Standard Time (America/Anguilla) = `America/Anguilla`
- (GMT-04:00) Atlantic Standard Time (America/Antigua) = `America/Antigua`
- (GMT-04:00) Atlantic Standard Time (America/Aruba) = `America/Aruba`
- (GMT-04:00) Atlantic Standard Time (America/Barbados) = `America/Barbados`
- (GMT-04:00) Atlantic Standard Time (America/Blanc-Sablon) = `America/Blanc-Sablon`
- (GMT-04:00) Amazon Standard Time (America/Boa_Vista) = `America/Boa_Vista`
- (GMT-04:00) Amazon Standard Time (America/Campo_Grande) = `America/Campo_Grande`
- (GMT-04:00) Venezuela Time (America/Caracas) = `America/Caracas`
- (GMT-04:00) Amazon Standard Time (America/Cuiaba) = `America/Cuiaba`
- (GMT-04:00) Atlantic Standard Time (America/Curacao) = `America/Curacao`
- (GMT-04:00) Atlantic Standard Time (America/Dominica) = `America/Dominica`
- (GMT-04:00) Atlantic Standard Time (America/Glace_Bay) = `America/Glace_Bay`
- (GMT-04:00) Atlantic Standard Time (America/Goose_Bay) = `America/Goose_Bay`
- (GMT-04:00) Atlantic Standard Time (America/Grenada) = `America/Grenada`
- (GMT-04:00) Atlantic Standard Time (America/Guadeloupe) = `America/Guadeloupe`
- (GMT-04:00) Guyana Time (America/Guyana) = `America/Guyana`
- (GMT-04:00) Atlantic Standard Time (America/Halifax) = `America/Halifax`
- (GMT-04:00) Atlantic Standard Time (America/Kralendijk) = `America/Kralendijk`
- (GMT-04:00) Bolivia Time (America/La_Paz) = `America/La_Paz`
- (GMT-04:00) Atlantic Standard Time (America/Lower_Princes) = `America/Lower_Princes`
- (GMT-04:00) Amazon Standard Time (America/Manaus) = `America/Manaus`
- (GMT-04:00) Atlantic Standard Time (America/Marigot) = `America/Marigot`
- (GMT-04:00) Atlantic Standard Time (America/Martinique) = `America/Martinique`
- (GMT-04:00) Atlantic Standard Time (America/Moncton) = `America/Moncton`
- (GMT-04:00) Atlantic Standard Time (America/Montserrat) = `America/Montserrat`
- (GMT-04:00) Atlantic Standard Time (America/Port_of_Spain) = `America/Port_of_Spain`
- (GMT-04:00) Amazon Standard Time (America/Porto_Velho) = `America/Porto_Velho`
- (GMT-04:00) Atlantic Standard Time (America/Puerto_Rico) = `America/Puerto_Rico`
- (GMT-04:00) Atlantic Standard Time (America/Santo_Domingo) = `America/Santo_Domingo`
- (GMT-04:00) Atlantic Standard Time (America/St_Barthelemy) = `America/St_Barthelemy`
- (GMT-04:00) Atlantic Standard Time (America/St_Kitts) = `America/St_Kitts`
- (GMT-04:00) Atlantic Standard Time (America/St_Lucia) = `America/St_Lucia`
- (GMT-04:00) Atlantic Standard Time (America/St_Thomas) = `America/St_Thomas`
- (GMT-04:00) Atlantic Standard Time (America/St_Vincent) = `America/St_Vincent`
- (GMT-04:00) Atlantic Standard Time (America/Thule) = `America/Thule`
- (GMT-04:00) Atlantic Standard Time (America/Tortola) = `America/Tortola`
- (GMT-04:00) Atlantic Standard Time (Atlantic/Bermuda) = `Atlantic/Bermuda`
- (GMT-05:00) Colombia Standard Time (America/Bogota) = `America/Bogota`
- (GMT-05:00) Eastern Standard Time (America/Cancun) = `America/Cancun`
- (GMT-05:00) Eastern Standard Time (America/Cayman) = `America/Cayman`
- (GMT-05:00) Eastern Standard Time (America/Coral_Harbour) = `America/Coral_Harbour`
- (GMT-05:00) Eastern Standard Time (America/Detroit) = `America/Detroit`
- (GMT-05:00) Acre Standard Time (America/Eirunepe) = `America/Eirunepe`
- (GMT-05:00) Eastern Standard Time (America/Grand_Turk) = `America/Grand_Turk`
- (GMT-05:00) Ecuador Time (America/Guayaquil) = `America/Guayaquil`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Indianapolis) = `America/Indiana/Indianapolis`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Marengo) = `America/Indiana/Marengo`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Petersburg) = `America/Indiana/Petersburg`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Vevay) = `America/Indiana/Vevay`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Vincennes) = `America/Indiana/Vincennes`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Winamac) = `America/Indiana/Winamac`
- (GMT-05:00) Eastern Standard Time (America/Iqaluit) = `America/Iqaluit`
- (GMT-05:00) Eastern Standard Time (America/Jamaica) = `America/Jamaica`
- (GMT-05:00) Eastern Standard Time (America/Kentucky/Monticello) = `America/Kentucky/Monticello`
- (GMT-05:00) Peru Standard Time (America/Lima) = `America/Lima`
- (GMT-05:00) Eastern Standard Time (America/Louisville) = `America/Louisville`
- (GMT-05:00) Eastern Standard Time (America/Montreal) = `America/Montreal`
- (GMT-05:00) Eastern Standard Time (America/Nassau) = `America/Nassau`
- (GMT-05:00) Eastern Standard Time (America/New_York) = `America/New_York`
- (GMT-05:00) Eastern Standard Time (America/Nipigon) = `America/Nipigon`
- (GMT-05:00) Eastern Standard Time (America/Panama) = `America/Panama`
- (GMT-05:00) Eastern Standard Time (America/Pangnirtung) = `America/Pangnirtung`
- (GMT-05:00) Eastern Standard Time (America/Port-au-Prince) = `America/Port-au-Prince`
- (GMT-05:00) Acre Standard Time (America/Rio_Branco) = `America/Rio_Branco`
- (GMT-05:00) Eastern Standard Time (America/Thunder_Bay) = `America/Thunder_Bay`
- (GMT-05:00) Eastern Standard Time (America/Toronto) = `America/Toronto`
- (GMT-05:00) Easter Island Summer Time (Pacific/Easter) = `Pacific/Easter`
- (GMT-06:00) Central Standard Time (America/Bahia_Banderas) = `America/Bahia_Banderas`
- (GMT-06:00) Central Standard Time (America/Belize) = `America/Belize`
- (GMT-06:00) Central Standard Time (America/Chicago) = `America/Chicago`
- (GMT-06:00) Mexican Pacific Standard Time (America/Chihuahua) = `America/Chihuahua`
- (GMT-06:00) Central Standard Time (America/Costa_Rica) = `America/Costa_Rica`
- (GMT-06:00) Central Standard Time (America/El_Salvador) = `America/El_Salvador`
- (GMT-06:00) Central Standard Time (America/Guatemala) = `America/Guatemala`
- (GMT-06:00) Central Standard Time (America/Indiana/Knox) = `America/Indiana/Knox`
- (GMT-06:00) Central Standard Time (America/Indiana/Tell_City) = `America/Indiana/Tell_City`
- (GMT-06:00) Central Standard Time (America/Managua) = `America/Managua`
- (GMT-06:00) Central Standard Time (America/Matamoros) = `America/Matamoros`
- (GMT-06:00) Central Standard Time (America/Menominee) = `America/Menominee`
- (GMT-06:00) Central Standard Time (America/Merida) = `America/Merida`
- (GMT-06:00) Central Standard Time (America/Mexico_City) = `America/Mexico_City`
- (GMT-06:00) Central Standard Time (America/Monterrey) = `America/Monterrey`
- (GMT-06:00) Central Standard Time (America/North_Dakota/Beulah) = `America/North_Dakota/Beulah`
- (GMT-06:00) Central Standard Time (America/North_Dakota/Center) = `America/North_Dakota/Center`
- (GMT-06:00) Central Standard Time (America/North_Dakota/New_Salem) = `America/North_Dakota/New_Salem`
- (GMT-06:00) Mountain Standard Time (America/Ojinaga) = `America/Ojinaga`
- (GMT-06:00) Central Standard Time (America/Rainy_River) = `America/Rainy_River`
- (GMT-06:00) Central Standard Time (America/Rankin_Inlet) = `America/Rankin_Inlet`
- (GMT-06:00) Central Standard Time (America/Regina) = `America/Regina`
- (GMT-06:00) Central Standard Time (America/Resolute) = `America/Resolute`
- (GMT-06:00) Central Standard Time (America/Swift_Current) = `America/Swift_Current`
- (GMT-06:00) Central Standard Time (America/Tegucigalpa) = `America/Tegucigalpa`
- (GMT-06:00) Central Standard Time (America/Winnipeg) = `America/Winnipeg`
- (GMT-06:00) Galapagos Time (Pacific/Galapagos) = `Pacific/Galapagos`
- (GMT-07:00) Mountain Standard Time (America/Boise) = `America/Boise`
- (GMT-07:00) Mountain Standard Time (America/Cambridge_Bay) = `America/Cambridge_Bay`
- (GMT-07:00) Mountain Standard Time (America/Creston) = `America/Creston`
- (GMT-07:00) Yukon Time (America/Dawson) = `America/Dawson`
- (GMT-07:00) Mountain Standard Time (America/Dawson_Creek) = `America/Dawson_Creek`
- (GMT-07:00) Mountain Standard Time (America/Denver) = `America/Denver`
- (GMT-07:00) Mountain Standard Time (America/Edmonton) = `America/Edmonton`
- (GMT-07:00) Mountain Standard Time (America/Fort_Nelson) = `America/Fort_Nelson`
- (GMT-07:00) Mexican Pacific Standard Time (America/Hermosillo) = `America/Hermosillo`
- (GMT-07:00) Mountain Standard Time (America/Inuvik) = `America/Inuvik`
- (GMT-07:00) Mexican Pacific Standard Time (America/Mazatlan) = `America/Mazatlan`
- (GMT-07:00) Mountain Standard Time (America/Phoenix) = `America/Phoenix`
- (GMT-07:00) Yukon Time (America/Whitehorse) = `America/Whitehorse`
- (GMT-07:00) Mountain Standard Time (America/Yellowknife) = `America/Yellowknife`
- (GMT-08:00) Pacific Standard Time (America/Los_Angeles) = `America/Los_Angeles`
- (GMT-08:00) Northwest Mexico Standard Time (America/Santa_Isabel) = `America/Santa_Isabel`
- (GMT-08:00) Pacific Standard Time (America/Tijuana) = `America/Tijuana`
- (GMT-08:00) Pacific Standard Time (America/Vancouver) = `America/Vancouver`
- (GMT-08:00) Pitcairn Time (Pacific/Pitcairn) = `Pacific/Pitcairn`
- (GMT-09:00) Alaska Standard Time (America/Anchorage) = `America/Anchorage`
- (GMT-09:00) Alaska Standard Time (America/Juneau) = `America/Juneau`
- (GMT-09:00) Alaska Standard Time (America/Metlakatla) = `America/Metlakatla`
- (GMT-09:00) Alaska Standard Time (America/Nome) = `America/Nome`
- (GMT-09:00) Alaska Standard Time (America/Sitka) = `America/Sitka`
- (GMT-09:00) Alaska Standard Time (America/Yakutat) = `America/Yakutat`
- (GMT-09:00) Gambier Time (Pacific/Gambier) = `Pacific/Gambier`
- (GMT-09:30) Marquesas Time (Pacific/Marquesas) = `Pacific/Marquesas`
- (GMT-10:00) Hawaii-Aleutian Standard Time (America/Adak) = `America/Adak`
- (GMT-10:00) Hawaii-Aleutian Standard Time (Pacific/Honolulu) = `Pacific/Honolulu`
- (GMT-10:00) Hawaii-Aleutian Standard Time (Pacific/Johnston) = `Pacific/Johnston`
- (GMT-10:00) Cook Islands Standard Time (Pacific/Rarotonga) = `Pacific/Rarotonga`
- (GMT-10:00) Tahiti Time (Pacific/Tahiti) = `Pacific/Tahiti`
- (GMT-11:00) Samoa Standard Time (Pacific/Midway) = `Pacific/Midway`
- (GMT-11:00) Niue Time (Pacific/Niue) = `Pacific/Niue`
- (GMT-11:00) Samoa Standard Time (Pacific/Pago_Pago) = `Pacific/Pago_Pago`

**Recurrence Type** (`RecurrenceType`):
- Recurs Daily = `RecursDaily`
- Recurs Every Weekday = `RecursEveryWeekday`
- Recurs Monthly = `RecursMonthly`
- Recurs Monthly Nth = `RecursMonthlyNth`
- Recurs Weekly = `RecursWeekly`
- Recurs Yearly = `RecursYearly`
- Recurs Yearly Nth = `RecursYearlyNth`

**Recurrence Instance** (`RecurrenceInstance`):
- 1st = `First`
- 2nd = `Second`
- 3rd = `Third`
- 4th = `Fourth`
- last = `Last`

**Recurrence Month of Year** (`RecurrenceMonthOfYear`):
- January = `January`
- February = `February`
- March = `March`
- April = `April`
- May = `May`
- June = `June`
- July = `July`
- August = `August`
- September = `September`
- October = `October`
- November = `November`
- December = `December`

**Repeat This Task** (`RecurrenceRegeneratedType`):
- After due date = `RecurrenceRegenerateAfterDueDate`
- After date completed = `RecurrenceRegenerateAfterToday`
- (Task Closed) = `RecurrenceRegenerated`

**Task Subtype** (`TaskSubtype`):
- Task = `Task`
- Email = `Email`
- List Email = `ListEmail`
- Cadence = `Cadence`
- Call = `Call`
- LinkedIn = `LinkedIn`

**New Account Business Internal Role** (`New_Account_Business_Internal_Role__c`):
- Client = `Client`
- Homeowner Association = `Homeowner Association`
- Labor Subcontractor = `Labor Subcontractor`
- Municipality = `Municipality`
- Other = `Other`
- Owning Entity = `Owning Entity`
- Product Vendor = `Product Vendor`
- Professional Services = `Professional Services`

**New Account Record Type** (`New_Account_Record_Type__c`):
- Home Owner = `Home Owner`
- Builder = `Builder`

**Location (State/Province)** (`Location_Custom__StateCode__s`):
- Acre = `AC`
- Agrigento = `AG`
- Aguascalientes = `AG`
- Alabama = `AL`
- Alagoas = `AL`
- Alaska = `AK`
- Alberta = `AB`
- Alessandria = `AL`
- Amapá = `AP`
- Amazonas = `AM`
- Ancona = `AN`
- Andaman and Nicobar Islands = `AN`
- Andhra Pradesh = `AP`
- Anhui = `34`
- Aosta = `AO`
- Arezzo = `AR`
- Arizona = `AZ`
- Arkansas = `AR`
- Arunachal Pradesh = `AR`
- Ascoli Piceno = `AP`
- Assam = `AS`
- Asti = `AT`
- Australian Capital Territory = `ACT`
- Avellino = `AV`
- Bahia = `BA`
- Baja California = `BC`
- Baja California Sur = `BS`
- Bari = `BA`
- Barletta-Andria-Trani = `BT`
- Beijing = `11`
- Belluno = `BL`
- Benevento = `BN`
- Bergamo = `BG`
- Biella = `BI`
- Bihar = `BR`
- Bologna = `BO`
- Bolzano = `BZ`
- Brescia = `BS`
- Brindisi = `BR`
- British Columbia = `BC`
- Cagliari = `CA`
- California = `CA`
- Caltanissetta = `CL`
- Campeche = `CM`
- Campobasso = `CB`
- Carbonia-Iglesias = `CI`
- Carlow = `CW`
- Caserta = `CE`
- Catania = `CT`
- Catanzaro = `CZ`
- Cavan = `CN`
- Ceará = `CE`
- Chandigarh = `CH`
- Chhattisgarh = `CT`
- Chiapas = `CS`
- Chieti = `CH`
- Chihuahua = `CH`
- Chinese Taipei = `71`
- Chongqing = `50`
- Clare = `CE`
- Coahuila = `CO`
- Colima = `CL`
- Colorado = `CO`
- Como = `CO`
- Connecticut = `CT`
- Cork = `CO`
- Cosenza = `CS`
- Cremona = `CR`
- Crotone = `KR`
- Cuneo = `CN`
- Dadra and Nagar Haveli = `DN`
- Daman and Diu = `DD`
- Delaware = `DE`
- Delhi = `DL`
- District of Columbia = `DC`
- Distrito Federal = `DF`
- Donegal = `DL`
- Dublin = `D`
- Durango = `DG`
- Enna = `EN`
- Espírito Santo = `ES`
- Federal District = `DF`
- Fermo = `FM`
- Ferrara = `FE`
- Florence = `FI`
- Florida = `FL`
- Foggia = `FG`
- Forlì-Cesena = `FC`
- Frosinone = `FR`
- Fujian = `35`
- Galway = `G`
- Gansu = `62`
- Genoa = `GE`
- Georgia = `GA`
- Goa = `GA`
- Goiás = `GO`
- Gorizia = `GO`
- Grosseto = `GR`
- Guanajuato = `GT`
- Guangdong = `44`
- Guangxi = `45`
- Guerrero = `GR`
- Guizhou = `52`
- Gujarat = `GJ`
- Hainan = `46`
- Haryana = `HR`
- Hawaii = `HI`
- Hebei = `13`
- Heilongjiang = `23`
- Henan = `41`
- Hidalgo = `HG`
- Himachal Pradesh = `HP`
- Hong Kong = `91`
- Hubei = `42`
- Hunan = `43`
- Idaho = `ID`
- Illinois = `IL`
- Imperia = `IM`
- Indiana = `IN`
- Iowa = `IA`
- Isernia = `IS`
- Jalisco = `JA`
- Jammu and Kashmir = `JK`
- Jharkhand = `JH`
- Jiangsu = `32`
- Jiangxi = `36`
- Jilin = `22`
- Kansas = `KS`
- Karnataka = `KA`
- Kentucky = `KY`
- Kerala = `KL`
- Kerry = `KY`
- Kildare = `KE`
- Kilkenny = `KK`
- L'Aquila = `AQ`
- Lakshadweep = `LD`
- Laois = `LS`
- La Spezia = `SP`
- Latina = `LT`
- Lecce = `LE`
- Lecco = `LC`
- Leitrim = `LM`
- Liaoning = `21`
- Limerick = `LK`
- Livorno = `LI`
- Lodi = `LO`
- Longford = `LD`
- Louisiana = `LA`
- Louth = `LH`
- Lucca = `LU`
- Macao = `92`
- Macerata = `MC`
- Madhya Pradesh = `MP`
- Maharashtra = `MH`
- Maine = `ME`
- Manipur = `MN`
- Manitoba = `MB`
- Mantua = `MN`
- Maranhão = `MA`
- Maryland = `MD`
- Massa and Carrara = `MS`
- Massachusetts = `MA`
- Matera = `MT`
- Mato Grosso = `MT`
- Mato Grosso do Sul = `MS`
- Mayo = `MO`
- Meath = `MH`
- Medio Campidano = `VS`
- Meghalaya = `ML`
- Messina = `ME`
- Mexico State = `ME`
- Michigan = `MI`
- Michoacán = `MI`
- Milan = `MI`
- Minas Gerais = `MG`
- Minnesota = `MN`
- Mississippi = `MS`
- Missouri = `MO`
- Mizoram = `MZ`
- Modena = `MO`
- Monaghan = `MN`
- Montana = `MT`
- Monza and Brianza = `MB`
- Morelos = `MO`
- Nagaland = `NL`
- Naples = `NA`
- Nayarit = `NA`
- Nebraska = `NE`
- Nei Mongol = `15`
- Nevada = `NV`
- New Brunswick = `NB`
- Newfoundland and Labrador = `NL`
- New Hampshire = `NH`
- New Jersey = `NJ`
- New Mexico = `NM`
- New South Wales = `NSW`
- New York = `NY`
- Ningxia = `64`
- North Carolina = `NC`
- North Dakota = `ND`
- Northern Territory = `NT`
- Northwest Territories = `NT`
- Novara = `NO`
- Nova Scotia = `NS`
- Nuevo León = `NL`
- Nunavut = `NU`
- Nuoro = `NU`
- Oaxaca = `OA`
- Odisha = `OR`
- Offaly = `OY`
- Ogliastra = `OG`
- Ohio = `OH`
- Oklahoma = `OK`
- Olbia-Tempio = `OT`
- Ontario = `ON`
- Oregon = `OR`
- Oristano = `OR`
- Padua = `PD`
- Palermo = `PA`
- Pará = `PA`
- Paraíba = `PB`
- Paraná = `PR`
- Parma = `PR`
- Pavia = `PV`
- Pennsylvania = `PA`
- Pernambuco = `PE`
- Perugia = `PG`
- Pesaro and Urbino = `PU`
- Pescara = `PE`
- Piacenza = `PC`
- Piauí = `PI`
- Pisa = `PI`
- Pistoia = `PT`
- Pordenone = `PN`
- Potenza = `PZ`
- Prato = `PO`
- Prince Edward Island = `PE`
- Puducherry = `PY`
- Puebla = `PB`
- Punjab = `PB`
- Qinghai = `63`
- Quebec = `QC`
- Queensland = `QLD`
- Querétaro = `QE`
- Quintana Roo = `QR`
- Ragusa = `RG`
- Rajasthan = `RJ`
- Ravenna = `RA`
- Reggio Calabria = `RC`
- Reggio Emilia = `RE`
- Rhode Island = `RI`
- Rieti = `RI`
- Rimini = `RN`
- Rio de Janeiro = `RJ`
- Rio Grande do Norte = `RN`
- Rio Grande do Sul = `RS`
- Rome = `RM`
- Rondônia = `RO`
- Roraima = `RR`
- Roscommon = `RN`
- Rovigo = `RO`
- Salerno = `SA`
- San Luis Potosí = `SL`
- Santa Catarina = `SC`
- São Paulo = `SP`
- Saskatchewan = `SK`
- Sassari = `SS`
- Savona = `SV`
- Sergipe = `SE`
- Shaanxi = `61`
- Shandong = `37`
- Shanghai = `31`
- Shanxi = `14`
- Sichuan = `51`
- Siena = `SI`
- Sikkim = `SK`
- Sinaloa = `SI`
- Sligo = `SO`
- Sondrio = `SO`
- Sonora = `SO`
- South Australia = `SA`
- South Carolina = `SC`
- South Dakota = `SD`
- Syracuse = `SR`
- Tabasco = `TB`
- Tamaulipas = `TM`
- Tamil Nadu = `TN`
- Taranto = `TA`
- Tasmania = `TAS`
- Tennessee = `TN`
- Teramo = `TE`
- Terni = `TR`
- Texas = `TX`
- Tianjin = `12`
- Tipperary = `TA`
- Tlaxcala = `TL`
- Tocantins = `TO`
- Trapani = `TP`
- Trento = `TN`
- Treviso = `TV`
- Trieste = `TS`
- Tripura = `TR`
- Turin = `TO`
- Udine = `UD`
- Utah = `UT`
- Uttarakhand = `UT`
- Uttar Pradesh = `UP`
- Varese = `VA`
- Venice = `VE`
- Veracruz = `VE`
- Verbano-Cusio-Ossola = `VB`
- Vercelli = `VC`
- Vermont = `VT`
- Verona = `VR`
- Vibo Valentia = `VV`
- Vicenza = `VI`
- Victoria = `VIC`
- Virginia = `VA`
- Viterbo = `VT`
- Washington = `WA`
- Waterford = `WD`
- West Bengal = `WB`
- Western Australia = `WA`
- Westmeath = `WH`
- West Virginia = `WV`
- Wexford = `WX`
- Wicklow = `WW`
- Wisconsin = `WI`
- Wyoming = `WY`
- Xinjiang = `65`
- Xizang = `54`
- Yucatán = `YU`
- Yukon Territories = `YT`
- Yunnan = `53`
- Zacatecas = `ZA`
- Zhejiang = `33`

**Location (Country/Territory)** (`Location_Custom__CountryCode__s`):
- Afghanistan = `AF`
- Aland Islands = `AX`
- Albania = `AL`
- Algeria = `DZ`
- Andorra = `AD`
- Angola = `AO`
- Anguilla = `AI`
- Antarctica = `AQ`
- Antigua and Barbuda = `AG`
- Argentina = `AR`
- Armenia = `AM`
- Aruba = `AW`
- Australia = `AU`
- Austria = `AT`
- Azerbaijan = `AZ`
- Bahamas = `BS`
- Bahrain = `BH`
- Bangladesh = `BD`
- Barbados = `BB`
- Belarus = `BY`
- Belgium = `BE`
- Belize = `BZ`
- Benin = `BJ`
- Bermuda = `BM`
- Bhutan = `BT`
- Bolivia, Plurinational State of = `BO`
- Bonaire, Sint Eustatius and Saba = `BQ`
- Bosnia and Herzegovina = `BA`
- Botswana = `BW`
- Bouvet Island = `BV`
- Brazil = `BR`
- British Indian Ocean Territory = `IO`
- Brunei Darussalam = `BN`
- Bulgaria = `BG`
- Burkina Faso = `BF`
- Burundi = `BI`
- Cambodia = `KH`
- Cameroon = `CM`
- Canada = `CA`
- Cape Verde = `CV`
- Cayman Islands = `KY`
- Central African Republic = `CF`
- Chad = `TD`
- Chile = `CL`
- China = `CN`
- Chinese Taipei = `TW`
- Christmas Island = `CX`
- Cocos (Keeling) Islands = `CC`
- Colombia = `CO`
- Comoros = `KM`
- Congo = `CG`
- Congo, the Democratic Republic of the = `CD`
- Cook Islands = `CK`
- Costa Rica = `CR`
- Cote d'Ivoire = `CI`
- Croatia = `HR`
- Cuba = `CU`
- Curaçao = `CW`
- Cyprus = `CY`
- Czech Republic = `CZ`
- Denmark = `DK`
- Djibouti = `DJ`
- Dominica = `DM`
- Dominican Republic = `DO`
- Ecuador = `EC`
- Egypt = `EG`
- El Salvador = `SV`
- Equatorial Guinea = `GQ`
- Eritrea = `ER`
- Estonia = `EE`
- Ethiopia = `ET`
- Falkland Islands (Malvinas) = `FK`
- Faroe Islands = `FO`
- Fiji = `FJ`
- Finland = `FI`
- France = `FR`
- French Guiana = `GF`
- French Polynesia = `PF`
- French Southern Territories = `TF`
- Gabon = `GA`
- Gambia = `GM`
- Georgia = `GE`
- Germany = `DE`
- Ghana = `GH`
- Gibraltar = `GI`
- Greece = `GR`
- Greenland = `GL`
- Grenada = `GD`
- Guadeloupe = `GP`
- Guatemala = `GT`
- Guernsey = `GG`
- Guinea = `GN`
- Guinea-Bissau = `GW`
- Guyana = `GY`
- Haiti = `HT`
- Heard Island and McDonald Islands = `HM`
- Holy See (Vatican City State) = `VA`
- Honduras = `HN`
- Hungary = `HU`
- Iceland = `IS`
- India = `IN`
- Indonesia = `ID`
- Iran, Islamic Republic of = `IR`
- Iraq = `IQ`
- Ireland = `IE`
- Isle of Man = `IM`
- Israel = `IL`
- Italy = `IT`
- Jamaica = `JM`
- Japan = `JP`
- Jersey = `JE`
- Jordan = `JO`
- Kazakhstan = `KZ`
- Kenya = `KE`
- Kiribati = `KI`
- Korea, Democratic People's Republic of = `KP`
- Korea, Republic of = `KR`
- Kuwait = `KW`
- Kyrgyzstan = `KG`
- Lao People's Democratic Republic = `LA`
- Latvia = `LV`
- Lebanon = `LB`
- Lesotho = `LS`
- Liberia = `LR`
- Libyan Arab Jamahiriya = `LY`
- Liechtenstein = `LI`
- Lithuania = `LT`
- Luxembourg = `LU`
- Macao = `MO`
- Macedonia, the former Yugoslav Republic of = `MK`
- Madagascar = `MG`
- Malawi = `MW`
- Malaysia = `MY`
- Maldives = `MV`
- Mali = `ML`
- Malta = `MT`
- Martinique = `MQ`
- Mauritania = `MR`
- Mauritius = `MU`
- Mayotte = `YT`
- Mexico = `MX`
- Moldova, Republic of = `MD`
- Monaco = `MC`
- Mongolia = `MN`
- Montenegro = `ME`
- Montserrat = `MS`
- Morocco = `MA`
- Mozambique = `MZ`
- Myanmar = `MM`
- Namibia = `NA`
- Nauru = `NR`
- Nepal = `NP`
- Netherlands = `NL`
- New Caledonia = `NC`
- New Zealand = `NZ`
- Nicaragua = `NI`
- Niger = `NE`
- Nigeria = `NG`
- Niue = `NU`
- Norfolk Island = `NF`
- Norway = `NO`
- Oman = `OM`
- Pakistan = `PK`
- Palestinian Territory, Occupied = `PS`
- Panama = `PA`
- Papua New Guinea = `PG`
- Paraguay = `PY`
- Peru = `PE`
- Philippines = `PH`
- Pitcairn = `PN`
- Poland = `PL`
- Portugal = `PT`
- Qatar = `QA`
- Reunion = `RE`
- Romania = `RO`
- Russian Federation = `RU`
- Rwanda = `RW`
- Saint Barthélemy = `BL`
- Saint Helena, Ascension and Tristan da Cunha = `SH`
- Saint Kitts and Nevis = `KN`
- Saint Lucia = `LC`
- Saint Martin (French part) = `MF`
- Saint Pierre and Miquelon = `PM`
- Saint Vincent and the Grenadines = `VC`
- Samoa = `WS`
- San Marino = `SM`
- Sao Tome and Principe = `ST`
- Saudi Arabia = `SA`
- Senegal = `SN`
- Serbia = `RS`
- Seychelles = `SC`
- Sierra Leone = `SL`
- Singapore = `SG`
- Sint Maarten (Dutch part) = `SX`
- Slovakia = `SK`
- Slovenia = `SI`
- Solomon Islands = `SB`
- Somalia = `SO`
- South Africa = `ZA`
- South Georgia and the South Sandwich Islands = `GS`
- South Sudan = `SS`
- Spain = `ES`
- Sri Lanka = `LK`
- Sudan = `SD`
- Suriname = `SR`
- Svalbard and Jan Mayen = `SJ`
- Swaziland = `SZ`
- Sweden = `SE`
- Switzerland = `CH`
- Syrian Arab Republic = `SY`
- Tajikistan = `TJ`
- Tanzania, United Republic of = `TZ`
- Thailand = `TH`
- Timor-Leste = `TL`
- Togo = `TG`
- Tokelau = `TK`
- Tonga = `TO`
- Trinidad and Tobago = `TT`
- Tunisia = `TN`
- Turkey = `TR`
- Turkmenistan = `TM`
- Turks and Caicos Islands = `TC`
- Tuvalu = `TV`
- Uganda = `UG`
- Ukraine = `UA`
- United Arab Emirates = `AE`
- United Kingdom = `GB`
- United States = `US`
- Uruguay = `UY`
- Uzbekistan = `UZ`
- Vanuatu = `VU`
- Venezuela, Bolivarian Republic of = `VE`
- Viet Nam = `VN`
- Virgin Islands, British = `VG`
- Wallis and Futuna = `WF`
- Western Sahara = `EH`
- Yemen = `YE`
- Zambia = `ZM`
- Zimbabwe = `ZW`

**Location (Geocode Accuracy)** (`Location_Custom__GeocodeAccuracy__s`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

**Preferred Contact Method** (`Preferred_Contact_Method__c`):
- Call = `Call`
- Text = `Text`
- Email = `Email`

**Lead Source** (`Lead_Source__c`):
- Company Truck = `Company Truck`
- Crew at Jobsite = `Crew at Jobsite`
- Digital Advertisement = `Digital Advertisement`
- Events and Networking = `Events and Networking`
- Online Marketplaces and Services = `Online Marketplaces and Services`
- Other = `Other`
- Partner = `Partner`
- Purchased List = `Purchased List`
- Referral - Client = `Referral - Client`
- Referral - Employee = `Referral - Employee`
- Referral - Sales Person = `Referral - Sales Person`
- Referral - Third Party = `Referral - Third Party`
- Trade Show = `Trade Show`
- Traditional Advertisement = `Traditional Advertisement`
- Website = `Website`
- Yard Signs at Jobsites = `Yard Signs at Jobsites`

**Service Type** (`Service_Type__c`):
- Export = `Export`
- Installation Only = `Installation Only`
- Other = `Other`
- Product + Installation = `Product + Installation`
- Product Only = `Product Only`

**Relationship** (`Relationship__c`):
- New Client = `New Client`
- Repeat Business = `Repeat Business`

**Construction Type** (`Construction_Type__c`):
- New Construction - Commercial = `New Construction Commercial`
- New Construction - Residential = `New Construction Residential`
- Retrofit - Commercial = `Retrofit Commercial`
- Retrofit - Residential = `Retrofit Residential`
- Service - New Construction = `Service New Construction`
- Service - Retrofit = `Service Retrofit`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIInsightValue | SobjectLookupValueId | N/A | Yes |
| AIRecordInsight | TargetId | N/A | No |
| ActionPlanItem | ItemId | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | ParentId | Attachments | Yes |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentVersion | FirstPublishLocationId | N/A | No |
| EmailStatus | TaskId | N/A | No |
| FeedComment | ParentId | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FlowExecutionErrorEvent | ContextRecordId | N/A | No |
| ListEmailSentResult | ActivityId | SentResultActivities | No |
| Task | RecurrenceActivityId | RecurringTasks | No |
| TaskRelation | TaskId | TaskRelations | Yes |
| TaskWhoRelation | TaskId | TaskWhoRelations | No |
| UserDefinedLabelAssignment | ItemId | UserDefinedLabelAssignments | Yes |
| VoiceCall | ActivityId | VoiceCallActivities | No |

---

## User (`User`) {#user}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 005 |
| Fields | 183 |
| Relationships | 1047 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | User ID | id | `uuid` |  |  |  |
| `Username` | Username | string | `varchar(80)` | Yes |  |  |
| `LastName` | Last Name | string | `varchar(80)` | Yes |  |  |
| `FirstName` | First Name | string | `varchar(40)` |  |  |  |
| `MiddleName` | Middle Name | string | `varchar(40)` |  |  |  |
| `Suffix` | Suffix | string | `varchar(40)` |  |  |  |
| `Name` | Full Name | string | `varchar(121)` | Yes |  |  |
| `CompanyName` | Company Name | string | `varchar(80)` |  |  |  |
| `Division` | Division | string | `varchar(80)` |  |  |  |
| `Department` | Department | string | `varchar(80)` |  |  |  |
| `Title` | Title | string | `varchar(80)` |  |  |  |
| `Street` | Street | textarea | `text` |  |  |  |
| `City` | City | string | `varchar(40)` |  |  |  |
| `State` | State/Province | string | `varchar(80)` |  |  |  |
| `PostalCode` | Zip/Postal Code | string | `varchar(20)` |  |  |  |
| `Country` | Country | string | `varchar(80)` |  |  |  |
| `Latitude` | Latitude | double | `numeric(18,15)` |  |  |  |
| `Longitude` | Longitude | double | `numeric(18,15)` |  |  |  |
| `GeocodeAccuracy` | Geocode Accuracy | picklist | `text` |  |  |  |
| `Address` | Address | address | `jsonb` |  |  |  |
| `Email` | Email | email | `text` | Yes |  |  |
| `EmailPreferencesAutoBcc` | AutoBcc | boolean | `boolean` | Yes |  |  |
| `EmailPreferencesAutoBccStayInTouch` | AutoBccStayInTouch | boolean | `boolean` | Yes |  |  |
| `EmailPreferencesStayInTouchReminder` | StayInTouchReminder | boolean | `boolean` | Yes |  |  |
| `SenderEmail` | Email Sender Address | email | `text` |  |  |  |
| `SenderName` | Email Sender Name | string | `varchar(80)` |  |  |  |
| `Signature` | Email Signature | textarea | `text` |  |  |  |
| `StayInTouchSubject` | Stay-in-Touch Email Subject | string | `varchar(80)` |  |  |  |
| `StayInTouchSignature` | Stay-in-Touch Email Signature | textarea | `text` |  |  |  |
| `StayInTouchNote` | Stay-in-Touch Email Note | string | `text` |  |  |  |
| `Phone` | Phone | phone | `text` |  |  |  |
| `Fax` | Fax | phone | `text` |  |  |  |
| `MobilePhone` | Mobile | phone | `text` |  |  |  |
| `Alias` | Alias | string | `varchar(8)` | Yes |  |  |
| `CommunityNickname` | Nickname | string | `varchar(40)` | Yes |  |  |
| `BadgeText` | User Photo badge text overlay | string | `varchar(80)` |  |  |  |
| `IsActive` | Active | boolean | `boolean` |  |  |  |
| `TimeZoneSidKey` | Time Zone | picklist | `text` | Yes |  |  |
| `UserRoleId` | Role ID | reference | `uuid` |  |  | -> UserRole (Lookup) |
| `LocaleSidKey` | Locale | picklist | `text` | Yes |  |  |
| `ReceivesInfoEmails` | Info Emails | boolean | `boolean` |  |  |  |
| `ReceivesAdminInfoEmails` | Admin Info Emails | boolean | `boolean` |  |  |  |
| `EmailEncodingKey` | Email Encoding | picklist | `text` | Yes |  |  |
| `ProfileId` | Profile ID | reference | `uuid` | Yes |  | -> Profile (Lookup) |
| `UserType` | User Type | picklist | `text` |  |  |  |
| `StartDay` | Start of Day | picklist | `text` |  |  |  |
| `EndDay` | End of Day | picklist | `text` |  |  |  |
| `LanguageLocaleKey` | Language | picklist | `text` | Yes |  |  |
| `EmployeeNumber` | Employee Number | string | `varchar(20)` |  |  |  |
| `DelegatedApproverId` | Delegated Approver ID | reference | `uuid` |  |  | -> Group, User (Lookup) |
| `ManagerId` | Manager ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastLoginDate` | Last Login | datetime | `timestamptz` |  |  |  |
| `LastPasswordChangeDate` | Last Password Change or Reset | datetime | `timestamptz` |  |  |  |
| `CreatedDate` | Created Date | datetime | `timestamptz` |  |  |  |
| `CreatedById` | Created By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `PasswordExpirationDate` | Password Expiration Date | datetime | `timestamptz` |  |  |  |
| `NumberOfFailedLogins` | Failed Login Attempts | int | `int4` |  |  |  |
| `SuAccessExpirationDate` | SU Access Expiration Date | date | `date` |  |  |  |
| `OfflineTrialExpirationDate` | Offline Edition Trial Expiration Date | datetime | `timestamptz` |  |  |  |
| `OfflinePdaTrialExpirationDate` | Sales Anywhere Trial Expiration Date | datetime | `timestamptz` |  |  |  |
| `UserPermissionsMarketingUser` | Marketing User | boolean | `boolean` | Yes |  |  |
| `UserPermissionsOfflineUser` | Offline User | boolean | `boolean` | Yes |  |  |
| `UserPermissionsAvantgoUser` | AvantGo User | boolean | `boolean` | Yes |  |  |
| `UserPermissionsCallCenterAutoLogin` | Auto-login To Call Center | boolean | `boolean` | Yes |  |  |
| `UserPermissionsSFContentUser` | Salesforce CRM Content User | boolean | `boolean` | Yes |  |  |
| `UserPermissionsInteractionUser` | Flow User | boolean | `boolean` | Yes |  |  |
| `UserPermissionsSupportUser` | Service Cloud User | boolean | `boolean` | Yes |  |  |
| `ForecastEnabled` | Allow Forecasting | boolean | `boolean` |  |  |  |
| `UserPreferencesActivityRemindersPopup` | ActivityRemindersPopup | boolean | `boolean` | Yes |  |  |
| `UserPreferencesEventRemindersCheckboxDefault` | EventRemindersCheckboxDefault | boolean | `boolean` | Yes |  |  |
| `UserPreferencesTaskRemindersCheckboxDefault` | TaskRemindersCheckboxDefault | boolean | `boolean` | Yes |  |  |
| `UserPreferencesReminderSoundOff` | ReminderSoundOff | boolean | `boolean` | Yes |  |  |
| `UserPreferencesDisableAllFeedsEmail` | DisableAllFeedsEmail | boolean | `boolean` | Yes |  |  |
| `UserPreferencesDisableFollowersEmail` | DisableFollowersEmail | boolean | `boolean` | Yes |  |  |
| `UserPreferencesDisableProfilePostEmail` | DisableProfilePostEmail | boolean | `boolean` | Yes |  |  |
| `UserPreferencesDisableChangeCommentEmail` | DisableChangeCommentEmail | boolean | `boolean` | Yes |  |  |
| `UserPreferencesDisableLaterCommentEmail` | DisableLaterCommentEmail | boolean | `boolean` | Yes |  |  |
| `UserPreferencesDisProfPostCommentEmail` | DisProfPostCommentEmail | boolean | `boolean` | Yes |  |  |
| `UserPreferencesApexPagesDeveloperMode` | ApexPagesDeveloperMode | boolean | `boolean` | Yes |  |  |
| `UserPreferencesReceiveNoNotificationsAsApprover` | ReceiveNoNotificationsAsApprover | boolean | `boolean` | Yes |  |  |
| `UserPreferencesReceiveNotificationsAsDelegatedApprover` | ReceiveNotificationsAsDelegatedApprover | boolean | `boolean` | Yes |  |  |
| `UserPreferencesHideCSNGetChatterMobileTask` | HideCSNGetChatterMobileTask | boolean | `boolean` | Yes |  |  |
| `UserPreferencesDisableMentionsPostEmail` | DisableMentionsPostEmail | boolean | `boolean` | Yes |  |  |
| `UserPreferencesDisMentionsCommentEmail` | DisMentionsCommentEmail | boolean | `boolean` | Yes |  |  |
| `UserPreferencesHideCSNDesktopTask` | HideCSNDesktopTask | boolean | `boolean` | Yes |  |  |
| `UserPreferencesHideChatterOnboardingSplash` | HideChatterOnboardingSplash | boolean | `boolean` | Yes |  |  |
| `UserPreferencesHideSecondChatterOnboardingSplash` | HideSecondChatterOnboardingSplash | boolean | `boolean` | Yes |  |  |
| `UserPreferencesDisCommentAfterLikeEmail` | DisCommentAfterLikeEmail | boolean | `boolean` | Yes |  |  |
| `UserPreferencesDisableLikeEmail` | DisableLikeEmail | boolean | `boolean` | Yes |  |  |
| `UserPreferencesSortFeedByComment` | SortFeedByComment | boolean | `boolean` | Yes |  |  |
| `UserPreferencesDisableMessageEmail` | DisableMessageEmail | boolean | `boolean` | Yes |  |  |
| `UserPreferencesDisableBookmarkEmail` | DisableBookmarkEmail | boolean | `boolean` | Yes |  |  |
| `UserPreferencesDisableSharePostEmail` | DisableSharePostEmail | boolean | `boolean` | Yes |  |  |
| `UserPreferencesEnableAutoSubForFeeds` | EnableAutoSubForFeeds | boolean | `boolean` | Yes |  |  |
| `UserPreferencesDisableFileShareNotificationsForApi` | DisableFileShareNotificationsForApi | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowTitleToExternalUsers` | ShowTitleToExternalUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowManagerToExternalUsers` | ShowManagerToExternalUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowEmailToExternalUsers` | ShowEmailToExternalUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowWorkPhoneToExternalUsers` | ShowWorkPhoneToExternalUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowMobilePhoneToExternalUsers` | ShowMobilePhoneToExternalUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowFaxToExternalUsers` | ShowFaxToExternalUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowStreetAddressToExternalUsers` | ShowStreetAddressToExternalUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowCityToExternalUsers` | ShowCityToExternalUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowStateToExternalUsers` | ShowStateToExternalUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowPostalCodeToExternalUsers` | ShowPostalCodeToExternalUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowCountryToExternalUsers` | ShowCountryToExternalUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowProfilePicToGuestUsers` | ShowProfilePicToGuestUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowTitleToGuestUsers` | ShowTitleToGuestUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowCityToGuestUsers` | ShowCityToGuestUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowStateToGuestUsers` | ShowStateToGuestUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowPostalCodeToGuestUsers` | ShowPostalCodeToGuestUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowCountryToGuestUsers` | ShowCountryToGuestUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowForecastingChangeSignals` | ShowForecastingChangeSignals | boolean | `boolean` | Yes |  |  |
| `UserPreferencesLiveAgentMiawSetupDeflection` | LiveAgentMiawSetupDeflection | boolean | `boolean` | Yes |  |  |
| `UserPreferencesHideS1BrowserUI` | HideS1BrowserUI | boolean | `boolean` | Yes |  |  |
| `UserPreferencesDisableEndorsementEmail` | DisableEndorsementEmail | boolean | `boolean` | Yes |  |  |
| `UserPreferencesPathAssistantCollapsed` | PathAssistantCollapsed | boolean | `boolean` | Yes |  |  |
| `UserPreferencesCacheDiagnostics` | CacheDiagnostics | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowEmailToGuestUsers` | ShowEmailToGuestUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowManagerToGuestUsers` | ShowManagerToGuestUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowWorkPhoneToGuestUsers` | ShowWorkPhoneToGuestUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowMobilePhoneToGuestUsers` | ShowMobilePhoneToGuestUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowFaxToGuestUsers` | ShowFaxToGuestUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowStreetAddressToGuestUsers` | ShowStreetAddressToGuestUsers | boolean | `boolean` | Yes |  |  |
| `UserPreferencesLightningExperiencePreferred` | LightningExperiencePreferred | boolean | `boolean` | Yes |  |  |
| `UserPreferencesPreviewLightning` | PreviewLightning | boolean | `boolean` | Yes |  |  |
| `UserPreferencesHideEndUserOnboardingAssistantModal` | HideEndUserOnboardingAssistantModal | boolean | `boolean` | Yes |  |  |
| `UserPreferencesHideLightningMigrationModal` | HideLightningMigrationModal | boolean | `boolean` | Yes |  |  |
| `UserPreferencesHideSfxWelcomeMat` | HideSfxWelcomeMat | boolean | `boolean` | Yes |  |  |
| `UserPreferencesHideBiggerPhotoCallout` | HideBiggerPhotoCallout | boolean | `boolean` | Yes |  |  |
| `UserPreferencesGlobalNavBarWTShown` | GlobalNavBarWTShown | boolean | `boolean` | Yes |  |  |
| `UserPreferencesGlobalNavGridMenuWTShown` | GlobalNavGridMenuWTShown | boolean | `boolean` | Yes |  |  |
| `UserPreferencesCreateLEXAppsWTShown` | CreateLEXAppsWTShown | boolean | `boolean` | Yes |  |  |
| `UserPreferencesFavoritesWTShown` | FavoritesWTShown | boolean | `boolean` | Yes |  |  |
| `UserPreferencesRecordHomeSectionCollapseWTShown` | RecordHomeSectionCollapseWTShown | boolean | `boolean` | Yes |  |  |
| `UserPreferencesRecordHomeReservedWTShown` | RecordHomeReservedWTShown | boolean | `boolean` | Yes |  |  |
| `UserPreferencesFavoritesShowTopFavorites` | FavoritesShowTopFavorites | boolean | `boolean` | Yes |  |  |
| `UserPreferencesExcludeMailAppAttachments` | ExcludeMailAppAttachments | boolean | `boolean` | Yes |  |  |
| `UserPreferencesSuppressTaskSFXReminders` | SuppressTaskSFXReminders | boolean | `boolean` | Yes |  |  |
| `UserPreferencesSuppressEventSFXReminders` | SuppressEventSFXReminders | boolean | `boolean` | Yes |  |  |
| `UserPreferencesPreviewCustomTheme` | PreviewCustomTheme | boolean | `boolean` | Yes |  |  |
| `UserPreferencesHasCelebrationBadge` | HasCelebrationBadge | boolean | `boolean` | Yes |  |  |
| `UserPreferencesUserDebugModePref` | UserDebugModePref | boolean | `boolean` | Yes |  |  |
| `UserPreferencesSRHOverrideActivities` | SRHOverrideActivities | boolean | `boolean` | Yes |  |  |
| `UserPreferencesNewLightningReportRunPageEnabled` | NewLightningReportRunPageEnabled | boolean | `boolean` | Yes |  |  |
| `UserPreferencesReverseOpenActivitiesView` | ReverseOpenActivitiesView | boolean | `boolean` | Yes |  |  |
| `UserPreferencesHasSentWarningEmail` | HasSentWarningEmail | boolean | `boolean` | Yes |  |  |
| `UserPreferencesHasSentWarningEmail238` | HasSentWarningEmail238 | boolean | `boolean` | Yes |  |  |
| `UserPreferencesHasSentWarningEmail240` | HasSentWarningEmail240 | boolean | `boolean` | Yes |  |  |
| `UserPreferencesNativeEmailClient` | NativeEmailClient | boolean | `boolean` | Yes |  |  |
| `UserPreferencesSendListEmailThroughExternalService` | SendListEmailThroughExternalService | boolean | `boolean` | Yes |  |  |
| `UserPreferencesHideBrowseProductRedirectConfirmation` | HideBrowseProductRedirectConfirmation | boolean | `boolean` | Yes |  |  |
| `UserPreferencesHideOnlineSalesAppWelcomeMat` | HideOnlineSalesAppWelcomeMat | boolean | `boolean` | Yes |  |  |
| `UserPreferencesShowForecastingRoundedAmounts` | ShowForecastingRoundedAmounts | boolean | `boolean` | Yes |  |  |
| `ContactId` | Contact ID | reference | `uuid` |  |  | -> Contact (Lookup) |
| `AccountId` | Account ID | reference | `uuid` |  |  | -> Account (Lookup) |
| `CallCenterId` | Call Center ID | reference | `uuid` |  |  | -> CallCenter (Lookup) |
| `Extension` | Extension | phone | `text` |  |  |  |
| `FederationIdentifier` | SAML Federation ID | string | `text` |  |  |  |
| `AboutMe` | About Me | textarea | `text` |  |  |  |
| `FullPhotoUrl` | Url for full-sized Photo | url | `text` |  |  |  |
| `SmallPhotoUrl` | Photo | url | `text` |  |  |  |
| `IsExtIndicatorVisible` | Show external indicator | boolean | `boolean` |  |  |  |
| `OutOfOfficeMessage` | Out of office message | string | `varchar(40)` |  |  |  |
| `MediumPhotoUrl` | URL for medium profile photo | url | `text` |  |  |  |
| `DigestFrequency` | Chatter Email Highlights Frequency | picklist | `text` |  |  |  |
| `DefaultGroupNotificationFrequency` | Default Notification Frequency when Joining Groups | picklist | `text` |  |  |  |
| `LastViewedDate` | Last Viewed Date | datetime | `timestamptz` |  |  |  |
| `LastReferencedDate` | Last Referenced Date | datetime | `timestamptz` |  |  |  |
| `BannerPhotoUrl` | URL for banner photo | url | `text` |  |  |  |
| `SmallBannerPhotoUrl` | URL for IOS banner photo | url | `text` |  |  |  |
| `MediumBannerPhotoUrl` | URL for Android banner photo | url | `text` |  |  |  |
| `IsProfilePhotoActive` | Has Profile Photo | boolean | `boolean` |  |  |  |
| `dfsle__CanManageAccount__c` | Can Manage DocuSign Account | boolean | `boolean` |  |  |  |
| `dfsle__Provisioned__c` | DocuSign Provisioned Date | date | `date` |  |  |  |
| `dfsle__Status__c` | DocuSign User Status | picklist | `text` |  |  |  |
| `dfsle__Username__c` | DocuSign Username | string | `varchar(100)` |  |  |  |
| `Commission__c` | Commission % | percent | `numeric(5,2)` |  |  |  |
| `inov8__Is_PMT_User_consider_for_Availability__c` | Is PMT User consider for Availability | boolean | `boolean` |  |  |  |
| `inov8__PMT_Manager_Name__c` | PMT Manager Name | string | `text` |  |  |  |

### Picklist Values

**Geocode Accuracy** (`GeocodeAccuracy`):
- Address = `Address`
- Near Address = `NearAddress`
- Block = `Block`
- Street = `Street`
- Extended Zip = `ExtendedZip`
- Zip = `Zip`
- Neighborhood = `Neighborhood`
- City = `City`
- County = `County`
- State = `State`
- Unknown = `Unknown`

**Time Zone** (`TimeZoneSidKey`):
- (GMT+14:00) Line Islands Time (Pacific/Kiritimati) = `Pacific/Kiritimati`
- (GMT+13:45) Chatham Daylight Time (Pacific/Chatham) = `Pacific/Chatham`
- (GMT+13:00) New Zealand Daylight Time (Antarctica/McMurdo) = `Antarctica/McMurdo`
- (GMT+13:00) Apia Standard Time (Pacific/Apia) = `Pacific/Apia`
- (GMT+13:00) New Zealand Daylight Time (Pacific/Auckland) = `Pacific/Auckland`
- (GMT+13:00) Phoenix Islands Time (Pacific/Enderbury) = `Pacific/Enderbury`
- (GMT+13:00) Tokelau Time (Pacific/Fakaofo) = `Pacific/Fakaofo`
- (GMT+13:00) Tonga Standard Time (Pacific/Tongatapu) = `Pacific/Tongatapu`
- (GMT+12:00) Anadyr Standard Time (Asia/Anadyr) = `Asia/Anadyr`
- (GMT+12:00) Petropavlovsk-Kamchatski Standard Time (Asia/Kamchatka) = `Asia/Kamchatka`
- (GMT+12:00) Fiji Standard Time (Pacific/Fiji) = `Pacific/Fiji`
- (GMT+12:00) Tuvalu Time (Pacific/Funafuti) = `Pacific/Funafuti`
- (GMT+12:00) Marshall Islands Time (Pacific/Kwajalein) = `Pacific/Kwajalein`
- (GMT+12:00) Marshall Islands Time (Pacific/Majuro) = `Pacific/Majuro`
- (GMT+12:00) Nauru Time (Pacific/Nauru) = `Pacific/Nauru`
- (GMT+12:00) Norfolk Island Daylight Time (Pacific/Norfolk) = `Pacific/Norfolk`
- (GMT+12:00) Gilbert Islands Time (Pacific/Tarawa) = `Pacific/Tarawa`
- (GMT+12:00) Wake Island Time (Pacific/Wake) = `Pacific/Wake`
- (GMT+12:00) Wallis & Futuna Time (Pacific/Wallis) = `Pacific/Wallis`
- (GMT+11:00) Australian Eastern Daylight Time (Antarctica/Macquarie) = `Antarctica/Macquarie`
- (GMT+11:00) Magadan Standard Time (Asia/Magadan) = `Asia/Magadan`
- (GMT+11:00) Sakhalin Standard Time (Asia/Sakhalin) = `Asia/Sakhalin`
- (GMT+11:00) Magadan Standard Time (Asia/Srednekolymsk) = `Asia/Srednekolymsk`
- (GMT+11:00) Australian Eastern Daylight Time (Australia/Currie) = `Australia/Currie`
- (GMT+11:00) Australian Eastern Daylight Time (Australia/Hobart) = `Australia/Hobart`
- (GMT+11:00) Lord Howe Daylight Time (Australia/Lord_Howe) = `Australia/Lord_Howe`
- (GMT+11:00) Australian Eastern Daylight Time (Australia/Melbourne) = `Australia/Melbourne`
- (GMT+11:00) Australian Eastern Daylight Time (Australia/Sydney) = `Australia/Sydney`
- (GMT+11:00) Bougainville Standard Time (Pacific/Bougainville) = `Pacific/Bougainville`
- (GMT+11:00) Vanuatu Standard Time (Pacific/Efate) = `Pacific/Efate`
- (GMT+11:00) Solomon Islands Time (Pacific/Guadalcanal) = `Pacific/Guadalcanal`
- (GMT+11:00) Kosrae Time (Pacific/Kosrae) = `Pacific/Kosrae`
- (GMT+11:00) New Caledonia Standard Time (Pacific/Noumea) = `Pacific/Noumea`
- (GMT+11:00) Ponape Time (Pacific/Ponape) = `Pacific/Ponape`
- (GMT+10:30) Australian Central Daylight Time (Australia/Adelaide) = `Australia/Adelaide`
- (GMT+10:30) Australian Central Daylight Time (Australia/Broken_Hill) = `Australia/Broken_Hill`
- (GMT+10:00) Dumont-d’Urville Time (Antarctica/DumontDUrville) = `Antarctica/DumontDUrville`
- (GMT+10:00) Vladivostok Standard Time (Asia/Ust-Nera) = `Asia/Ust-Nera`
- (GMT+10:00) Vladivostok Standard Time (Asia/Vladivostok) = `Asia/Vladivostok`
- (GMT+10:00) Australian Eastern Standard Time (Australia/Brisbane) = `Australia/Brisbane`
- (GMT+10:00) Australian Eastern Standard Time (Australia/Lindeman) = `Australia/Lindeman`
- (GMT+10:00) Chamorro Standard Time (Pacific/Guam) = `Pacific/Guam`
- (GMT+10:00) Papua New Guinea Time (Pacific/Port_Moresby) = `Pacific/Port_Moresby`
- (GMT+10:00) Chamorro Standard Time (Pacific/Saipan) = `Pacific/Saipan`
- (GMT+10:00) Chuuk Time (Pacific/Truk) = `Pacific/Truk`
- (GMT+09:30) Australian Central Standard Time (Australia/Darwin) = `Australia/Darwin`
- (GMT+09:00) Yakutsk Standard Time (Asia/Chita) = `Asia/Chita`
- (GMT+09:00) East Timor Time (Asia/Dili) = `Asia/Dili`
- (GMT+09:00) Eastern Indonesia Time (Asia/Jayapura) = `Asia/Jayapura`
- (GMT+09:00) Yakutsk Standard Time (Asia/Khandyga) = `Asia/Khandyga`
- (GMT+09:00) Korean Standard Time (Asia/Seoul) = `Asia/Seoul`
- (GMT+09:00) Japan Standard Time (Asia/Tokyo) = `Asia/Tokyo`
- (GMT+09:00) Yakutsk Standard Time (Asia/Yakutsk) = `Asia/Yakutsk`
- (GMT+09:00) Palau Time (Pacific/Palau) = `Pacific/Palau`
- (GMT+08:45) Australian Central Western Standard Time (Australia/Eucla) = `Australia/Eucla`
- (GMT+08:00) Casey Time (Antarctica/Casey) = `Antarctica/Casey`
- (GMT+08:00) Brunei Darussalam Time (Asia/Brunei) = `Asia/Brunei`
- (GMT+08:00) Ulaanbaatar Standard Time (Asia/Choibalsan) = `Asia/Choibalsan`
- (GMT+08:00) Hong Kong Standard Time (Asia/Hong_Kong) = `Asia/Hong_Kong`
- (GMT+08:00) Irkutsk Standard Time (Asia/Irkutsk) = `Asia/Irkutsk`
- (GMT+08:00) Malaysia Time (Asia/Kuala_Lumpur) = `Asia/Kuala_Lumpur`
- (GMT+08:00) Malaysia Time (Asia/Kuching) = `Asia/Kuching`
- (GMT+08:00) China Standard Time (Asia/Macau) = `Asia/Macau`
- (GMT+08:00) Central Indonesia Time (Asia/Makassar) = `Asia/Makassar`
- (GMT+08:00) Philippine Standard Time (Asia/Manila) = `Asia/Manila`
- (GMT+08:00) China Standard Time (Asia/Shanghai) = `Asia/Shanghai`
- (GMT+08:00) Singapore Standard Time (Asia/Singapore) = `Asia/Singapore`
- (GMT+08:00) Taipei Standard Time (Asia/Taipei) = `Asia/Taipei`
- (GMT+08:00) Ulaanbaatar Standard Time (Asia/Ulaanbaatar) = `Asia/Ulaanbaatar`
- (GMT+08:00) Australian Western Standard Time (Australia/Perth) = `Australia/Perth`
- (GMT+07:00) Davis Time (Antarctica/Davis) = `Antarctica/Davis`
- (GMT+07:00) Indochina Time (Asia/Bangkok) = `Asia/Bangkok`
- (GMT+07:00) Moscow Standard Time + 4 (Asia/Barnaul) = `Asia/Barnaul`
- (GMT+07:00) Indochina Time (Asia/Ho_Chi_Minh) = `Asia/Ho_Chi_Minh`
- (GMT+07:00) Hovd Standard Time (Asia/Hovd) = `Asia/Hovd`
- (GMT+07:00) Western Indonesia Time (Asia/Jakarta) = `Asia/Jakarta`
- (GMT+07:00) Krasnoyarsk Standard Time (Asia/Krasnoyarsk) = `Asia/Krasnoyarsk`
- (GMT+07:00) Krasnoyarsk Standard Time (Asia/Novokuznetsk) = `Asia/Novokuznetsk`
- (GMT+07:00) Novosibirsk Standard Time (Asia/Novosibirsk) = `Asia/Novosibirsk`
- (GMT+07:00) Indochina Time (Asia/Phnom_Penh) = `Asia/Phnom_Penh`
- (GMT+07:00) Western Indonesia Time (Asia/Pontianak) = `Asia/Pontianak`
- (GMT+07:00) Moscow Standard Time + 4 (Asia/Tomsk) = `Asia/Tomsk`
- (GMT+07:00) Indochina Time (Asia/Vientiane) = `Asia/Vientiane`
- (GMT+07:00) Christmas Island Time (Indian/Christmas) = `Indian/Christmas`
- (GMT+06:30) Myanmar Time (Asia/Rangoon) = `Asia/Rangoon`
- (GMT+06:30) Cocos Islands Time (Indian/Cocos) = `Indian/Cocos`
- (GMT+06:00) Kyrgyzstan Time (Asia/Bishkek) = `Asia/Bishkek`
- (GMT+06:00) Bangladesh Standard Time (Asia/Dhaka) = `Asia/Dhaka`
- (GMT+06:00) Omsk Standard Time (Asia/Omsk) = `Asia/Omsk`
- (GMT+06:00) Bhutan Time (Asia/Thimphu) = `Asia/Thimphu`
- (GMT+06:00) China Standard Time (Asia/Urumqi) = `Asia/Urumqi`
- (GMT+06:00) Indian Ocean Time (Indian/Chagos) = `Indian/Chagos`
- (GMT+05:45) Nepal Time (Asia/Kathmandu) = `Asia/Kathmandu`
- (GMT+05:30) India Standard Time (Asia/Colombo) = `Asia/Colombo`
- (GMT+05:30) India Standard Time (Asia/Kolkata) = `Asia/Kolkata`
- (GMT+05:00) Mawson Time (Antarctica/Mawson) = `Antarctica/Mawson`
- (GMT+05:00) Vostok Time (Antarctica/Vostok) = `Antarctica/Vostok`
- (GMT+05:00) East Kazakhstan Time (Asia/Almaty) = `Asia/Almaty`
- (GMT+05:00) West Kazakhstan Time (Asia/Aqtau) = `Asia/Aqtau`
- (GMT+05:00) West Kazakhstan Time (Asia/Aqtobe) = `Asia/Aqtobe`
- (GMT+05:00) Turkmenistan Standard Time (Asia/Ashgabat) = `Asia/Ashgabat`
- (GMT+05:00) West Kazakhstan Time (Asia/Atyrau) = `Asia/Atyrau`
- (GMT+05:00) Tajikistan Time (Asia/Dushanbe) = `Asia/Dushanbe`
- (GMT+05:00) Pakistan Standard Time (Asia/Karachi) = `Asia/Karachi`
- (GMT+05:00) West Kazakhstan Time (Asia/Oral) = `Asia/Oral`
- (GMT+05:00) East Kazakhstan Time (Asia/Qostanay) = `Asia/Qostanay`
- (GMT+05:00) West Kazakhstan Time (Asia/Qyzylorda) = `Asia/Qyzylorda`
- (GMT+05:00) Uzbekistan Standard Time (Asia/Samarkand) = `Asia/Samarkand`
- (GMT+05:00) Uzbekistan Standard Time (Asia/Tashkent) = `Asia/Tashkent`
- (GMT+05:00) Yekaterinburg Standard Time (Asia/Yekaterinburg) = `Asia/Yekaterinburg`
- (GMT+05:00) French Southern & Antarctic Time (Indian/Kerguelen) = `Indian/Kerguelen`
- (GMT+05:00) Maldives Time (Indian/Maldives) = `Indian/Maldives`
- (GMT+04:30) Afghanistan Time (Asia/Kabul) = `Asia/Kabul`
- (GMT+04:00) Azerbaijan Standard Time (Asia/Baku) = `Asia/Baku`
- (GMT+04:00) Gulf Standard Time (Asia/Dubai) = `Asia/Dubai`
- (GMT+04:00) Gulf Standard Time (Asia/Muscat) = `Asia/Muscat`
- (GMT+04:00) Georgia Standard Time (Asia/Tbilisi) = `Asia/Tbilisi`
- (GMT+04:00) Armenia Standard Time (Asia/Yerevan) = `Asia/Yerevan`
- (GMT+04:00) Samara Standard Time (Europe/Astrakhan) = `Europe/Astrakhan`
- (GMT+04:00) Samara Standard Time (Europe/Samara) = `Europe/Samara`
- (GMT+04:00) Moscow Standard Time + 1 (Europe/Saratov) = `Europe/Saratov`
- (GMT+04:00) Moscow Standard Time + 1 (Europe/Ulyanovsk) = `Europe/Ulyanovsk`
- (GMT+04:00) Seychelles Time (Indian/Mahe) = `Indian/Mahe`
- (GMT+04:00) Mauritius Standard Time (Indian/Mauritius) = `Indian/Mauritius`
- (GMT+04:00) Réunion Time (Indian/Reunion) = `Indian/Reunion`
- (GMT+03:00) East Africa Time (Africa/Addis_Ababa) = `Africa/Addis_Ababa`
- (GMT+03:00) East Africa Time (Africa/Asmera) = `Africa/Asmera`
- (GMT+03:00) East Africa Time (Africa/Dar_es_Salaam) = `Africa/Dar_es_Salaam`
- (GMT+03:00) East Africa Time (Africa/Djibouti) = `Africa/Djibouti`
- (GMT+03:00) East Africa Time (Africa/Kampala) = `Africa/Kampala`
- (GMT+03:00) East Africa Time (Africa/Mogadishu) = `Africa/Mogadishu`
- (GMT+03:00) East Africa Time (Africa/Nairobi) = `Africa/Nairobi`
- (GMT+03:00) Syowa Time (Antarctica/Syowa) = `Antarctica/Syowa`
- (GMT+03:00) Arabian Standard Time (Asia/Aden) = `Asia/Aden`
- (GMT+03:00) Eastern European Standard Time (Asia/Amman) = `Asia/Amman`
- (GMT+03:00) Arabian Standard Time (Asia/Baghdad) = `Asia/Baghdad`
- (GMT+03:00) Arabian Standard Time (Asia/Bahrain) = `Asia/Bahrain`
- (GMT+03:00) Arabian Standard Time (Asia/Kuwait) = `Asia/Kuwait`
- (GMT+03:00) Arabian Standard Time (Asia/Qatar) = `Asia/Qatar`
- (GMT+03:00) Arabian Standard Time (Asia/Riyadh) = `Asia/Riyadh`
- (GMT+03:00) Eastern European Standard Time (Europe/Istanbul) = `Europe/Istanbul`
- (GMT+03:00) Moscow Standard Time (Europe/Kirov) = `Europe/Kirov`
- (GMT+03:00) Moscow Standard Time (Europe/Minsk) = `Europe/Minsk`
- (GMT+03:00) Moscow Standard Time (Europe/Moscow) = `Europe/Moscow`
- (GMT+03:00) Volgograd Standard Time (Europe/Volgograd) = `Europe/Volgograd`
- (GMT+03:00) East Africa Time (Indian/Antananarivo) = `Indian/Antananarivo`
- (GMT+03:00) East Africa Time (Indian/Comoro) = `Indian/Comoro`
- (GMT+03:00) East Africa Time (Indian/Mayotte) = `Indian/Mayotte`
- (GMT+02:00) Central Africa Time (Africa/Blantyre) = `Africa/Blantyre`
- (GMT+02:00) Central Africa Time (Africa/Bujumbura) = `Africa/Bujumbura`
- (GMT+02:00) Eastern European Standard Time (Africa/Cairo) = `Africa/Cairo`
- (GMT+02:00) Central Africa Time (Africa/Gaborone) = `Africa/Gaborone`
- (GMT+02:00) Central Africa Time (Africa/Harare) = `Africa/Harare`
- (GMT+02:00) South Africa Standard Time (Africa/Johannesburg) = `Africa/Johannesburg`
- (GMT+02:00) Central Africa Time (Africa/Juba) = `Africa/Juba`
- (GMT+02:00) Central Africa Time (Africa/Khartoum) = `Africa/Khartoum`
- (GMT+02:00) Central Africa Time (Africa/Kigali) = `Africa/Kigali`
- (GMT+02:00) Central Africa Time (Africa/Lubumbashi) = `Africa/Lubumbashi`
- (GMT+02:00) Central Africa Time (Africa/Lusaka) = `Africa/Lusaka`
- (GMT+02:00) Central Africa Time (Africa/Maputo) = `Africa/Maputo`
- (GMT+02:00) South Africa Standard Time (Africa/Maseru) = `Africa/Maseru`
- (GMT+02:00) South Africa Standard Time (Africa/Mbabane) = `Africa/Mbabane`
- (GMT+02:00) Eastern European Standard Time (Africa/Tripoli) = `Africa/Tripoli`
- (GMT+02:00) Central Africa Time (Africa/Windhoek) = `Africa/Windhoek`
- (GMT+02:00) Eastern European Standard Time (Asia/Beirut) = `Asia/Beirut`
- (GMT+02:00) Eastern European Standard Time (Asia/Famagusta) = `Asia/Famagusta`
- (GMT+02:00) Eastern European Standard Time (Asia/Gaza) = `Asia/Gaza`
- (GMT+02:00) Eastern European Standard Time (Asia/Hebron) = `Asia/Hebron`
- (GMT+02:00) Israel Standard Time (Asia/Jerusalem) = `Asia/Jerusalem`
- (GMT+02:00) Eastern European Standard Time (Asia/Nicosia) = `Asia/Nicosia`
- (GMT+02:00) Eastern European Standard Time (Europe/Athens) = `Europe/Athens`
- (GMT+02:00) Eastern European Standard Time (Europe/Bucharest) = `Europe/Bucharest`
- (GMT+02:00) Eastern European Standard Time (Europe/Chisinau) = `Europe/Chisinau`
- (GMT+02:00) Eastern European Standard Time (Europe/Helsinki) = `Europe/Helsinki`
- (GMT+02:00) Eastern European Standard Time (Europe/Kaliningrad) = `Europe/Kaliningrad`
- (GMT+02:00) Eastern European Standard Time (Europe/Kyiv) = `Europe/Kiev`
- (GMT+02:00) Eastern European Standard Time (Europe/Mariehamn) = `Europe/Mariehamn`
- (GMT+02:00) Eastern European Standard Time (Europe/Riga) = `Europe/Riga`
- (GMT+02:00) Eastern European Standard Time (Europe/Sofia) = `Europe/Sofia`
- (GMT+02:00) Eastern European Standard Time (Europe/Tallinn) = `Europe/Tallinn`
- (GMT+02:00) Eastern European Standard Time (Europe/Uzhgorod) = `Europe/Uzhgorod`
- (GMT+02:00) Eastern European Standard Time (Europe/Vilnius) = `Europe/Vilnius`
- (GMT+02:00) Eastern European Standard Time (Europe/Zaporozhye) = `Europe/Zaporozhye`
- (GMT+01:00) Central European Standard Time (Africa/Algiers) = `Africa/Algiers`
- (GMT+01:00) West Africa Standard Time (Africa/Bangui) = `Africa/Bangui`
- (GMT+01:00) West Africa Standard Time (Africa/Brazzaville) = `Africa/Brazzaville`
- (GMT+01:00) Central European Standard Time (Africa/Ceuta) = `Africa/Ceuta`
- (GMT+01:00) West Africa Standard Time (Africa/Douala) = `Africa/Douala`
- (GMT+01:00) West Africa Standard Time (Africa/Kinshasa) = `Africa/Kinshasa`
- (GMT+01:00) West Africa Standard Time (Africa/Lagos) = `Africa/Lagos`
- (GMT+01:00) West Africa Standard Time (Africa/Libreville) = `Africa/Libreville`
- (GMT+01:00) West Africa Standard Time (Africa/Luanda) = `Africa/Luanda`
- (GMT+01:00) West Africa Standard Time (Africa/Malabo) = `Africa/Malabo`
- (GMT+01:00) West Africa Standard Time (Africa/Ndjamena) = `Africa/Ndjamena`
- (GMT+01:00) West Africa Standard Time (Africa/Niamey) = `Africa/Niamey`
- (GMT+01:00) West Africa Standard Time (Africa/Porto-Novo) = `Africa/Porto-Novo`
- (GMT+01:00) Central European Standard Time (Africa/Tunis) = `Africa/Tunis`
- (GMT+01:00) Central European Standard Time (Arctic/Longyearbyen) = `Arctic/Longyearbyen`
- (GMT+01:00) Central European Standard Time (Europe/Amsterdam) = `Europe/Amsterdam`
- (GMT+01:00) Central European Standard Time (Europe/Andorra) = `Europe/Andorra`
- (GMT+01:00) Central European Standard Time (Europe/Belgrade) = `Europe/Belgrade`
- (GMT+01:00) Central European Standard Time (Europe/Berlin) = `Europe/Berlin`
- (GMT+01:00) Central European Standard Time (Europe/Bratislava) = `Europe/Bratislava`
- (GMT+01:00) Central European Standard Time (Europe/Brussels) = `Europe/Brussels`
- (GMT+01:00) Central European Standard Time (Europe/Budapest) = `Europe/Budapest`
- (GMT+01:00) Central European Standard Time (Europe/Busingen) = `Europe/Busingen`
- (GMT+01:00) Central European Standard Time (Europe/Copenhagen) = `Europe/Copenhagen`
- (GMT+01:00) Central European Standard Time (Europe/Gibraltar) = `Europe/Gibraltar`
- (GMT+01:00) Central European Standard Time (Europe/Ljubljana) = `Europe/Ljubljana`
- (GMT+01:00) Central European Standard Time (Europe/Luxembourg) = `Europe/Luxembourg`
- (GMT+01:00) Central European Standard Time (Europe/Madrid) = `Europe/Madrid`
- (GMT+01:00) Central European Standard Time (Europe/Malta) = `Europe/Malta`
- (GMT+01:00) Central European Standard Time (Europe/Monaco) = `Europe/Monaco`
- (GMT+01:00) Central European Standard Time (Europe/Oslo) = `Europe/Oslo`
- (GMT+01:00) Central European Standard Time (Europe/Paris) = `Europe/Paris`
- (GMT+01:00) Central European Standard Time (Europe/Podgorica) = `Europe/Podgorica`
- (GMT+01:00) Central European Standard Time (Europe/Prague) = `Europe/Prague`
- (GMT+01:00) Central European Standard Time (Europe/Rome) = `Europe/Rome`
- (GMT+01:00) Central European Standard Time (Europe/San_Marino) = `Europe/San_Marino`
- (GMT+01:00) Central European Standard Time (Europe/Sarajevo) = `Europe/Sarajevo`
- (GMT+01:00) Central European Standard Time (Europe/Skopje) = `Europe/Skopje`
- (GMT+01:00) Central European Standard Time (Europe/Stockholm) = `Europe/Stockholm`
- (GMT+01:00) Central European Standard Time (Europe/Tirane) = `Europe/Tirane`
- (GMT+01:00) Central European Standard Time (Europe/Vaduz) = `Europe/Vaduz`
- (GMT+01:00) Central European Standard Time (Europe/Vatican) = `Europe/Vatican`
- (GMT+01:00) Central European Standard Time (Europe/Vienna) = `Europe/Vienna`
- (GMT+01:00) Central European Standard Time (Europe/Warsaw) = `Europe/Warsaw`
- (GMT+01:00) Central European Standard Time (Europe/Zagreb) = `Europe/Zagreb`
- (GMT+01:00) Central European Standard Time (Europe/Zurich) = `Europe/Zurich`
- (GMT+00:00) Greenwich Mean Time (Africa/Abidjan) = `Africa/Abidjan`
- (GMT+00:00) Greenwich Mean Time (Africa/Accra) = `Africa/Accra`
- (GMT+00:00) Greenwich Mean Time (Africa/Bamako) = `Africa/Bamako`
- (GMT+00:00) Greenwich Mean Time (Africa/Banjul) = `Africa/Banjul`
- (GMT+00:00) Greenwich Mean Time (Africa/Bissau) = `Africa/Bissau`
- (GMT+00:00) Western European Standard Time (Africa/Casablanca) = `Africa/Casablanca`
- (GMT+00:00) Greenwich Mean Time (Africa/Conakry) = `Africa/Conakry`
- (GMT+00:00) Greenwich Mean Time (Africa/Dakar) = `Africa/Dakar`
- (GMT+00:00) Western European Standard Time (Africa/El_Aaiun) = `Africa/El_Aaiun`
- (GMT+00:00) Greenwich Mean Time (Africa/Freetown) = `Africa/Freetown`
- (GMT+00:00) Greenwich Mean Time (Africa/Lome) = `Africa/Lome`
- (GMT+00:00) Greenwich Mean Time (Africa/Monrovia) = `Africa/Monrovia`
- (GMT+00:00) Greenwich Mean Time (Africa/Nouakchott) = `Africa/Nouakchott`
- (GMT+00:00) Greenwich Mean Time (Africa/Ouagadougou) = `Africa/Ouagadougou`
- (GMT+00:00) Greenwich Mean Time (Africa/Sao_Tome) = `Africa/Sao_Tome`
- (GMT+00:00) Greenwich Mean Time (America/Danmarkshavn) = `America/Danmarkshavn`
- (GMT+00:00) Greenwich Mean Time (Antarctica/Troll) = `Antarctica/Troll`
- (GMT+00:00) Western European Standard Time (Atlantic/Canary) = `Atlantic/Canary`
- (GMT+00:00) Western European Standard Time (Atlantic/Faeroe) = `Atlantic/Faeroe`
- (GMT+00:00) Western European Standard Time (Atlantic/Madeira) = `Atlantic/Madeira`
- (GMT+00:00) Greenwich Mean Time (Atlantic/Reykjavik) = `Atlantic/Reykjavik`
- (GMT+00:00) Greenwich Mean Time (Atlantic/St_Helena) = `Atlantic/St_Helena`
- (GMT+00:00) Greenwich Mean Time (Europe/Dublin) = `Europe/Dublin`
- (GMT+00:00) Greenwich Mean Time (Europe/Guernsey) = `Europe/Guernsey`
- (GMT+00:00) Greenwich Mean Time (Europe/Isle_of_Man) = `Europe/Isle_of_Man`
- (GMT+00:00) Greenwich Mean Time (Europe/Jersey) = `Europe/Jersey`
- (GMT+00:00) Western European Standard Time (Europe/Lisbon) = `Europe/Lisbon`
- (GMT+00:00) Greenwich Mean Time (Europe/London) = `Europe/London`
- (GMT+00:00) Greenwich Mean Time (GMT) = `GMT`
- (GMT-01:00) Azores Standard Time (Atlantic/Azores) = `Atlantic/Azores`
- (GMT-01:00) Cape Verde Standard Time (Atlantic/Cape_Verde) = `Atlantic/Cape_Verde`
- (GMT-02:00) West Greenland Standard Time (America/Godthab) = `America/Godthab`
- (GMT-02:00) Fernando de Noronha Standard Time (America/Noronha) = `America/Noronha`
- (GMT-02:00) East Greenland Standard Time (America/Scoresbysund) = `America/Scoresbysund`
- (GMT-02:00) South Georgia Time (Atlantic/South_Georgia) = `Atlantic/South_Georgia`
- (GMT-03:00) Brasilia Standard Time (America/Araguaina) = `America/Araguaina`
- (GMT-03:00) Argentina Standard Time (America/Argentina/Buenos_Aires) = `America/Argentina/Buenos_Aires`
- (GMT-03:00) Argentina Standard Time (America/Argentina/La_Rioja) = `America/Argentina/La_Rioja`
- (GMT-03:00) Argentina Standard Time (America/Argentina/Rio_Gallegos) = `America/Argentina/Rio_Gallegos`
- (GMT-03:00) Argentina Standard Time (America/Argentina/Salta) = `America/Argentina/Salta`
- (GMT-03:00) Argentina Standard Time (America/Argentina/San_Juan) = `America/Argentina/San_Juan`
- (GMT-03:00) Argentina Standard Time (America/Argentina/San_Luis) = `America/Argentina/San_Luis`
- (GMT-03:00) Argentina Standard Time (America/Argentina/Tucuman) = `America/Argentina/Tucuman`
- (GMT-03:00) Argentina Standard Time (America/Argentina/Ushuaia) = `America/Argentina/Ushuaia`
- (GMT-03:00) Paraguay Standard Time (America/Asuncion) = `America/Asuncion`
- (GMT-03:00) Brasilia Standard Time (America/Bahia) = `America/Bahia`
- (GMT-03:00) Brasilia Standard Time (America/Belem) = `America/Belem`
- (GMT-03:00) Argentina Standard Time (America/Catamarca) = `America/Catamarca`
- (GMT-03:00) French Guiana Time (America/Cayenne) = `America/Cayenne`
- (GMT-03:00) Argentina Standard Time (America/Cordoba) = `America/Cordoba`
- (GMT-03:00) Brasilia Standard Time (America/Fortaleza) = `America/Fortaleza`
- (GMT-03:00) Argentina Standard Time (America/Jujuy) = `America/Jujuy`
- (GMT-03:00) Brasilia Standard Time (America/Maceio) = `America/Maceio`
- (GMT-03:00) Argentina Standard Time (America/Mendoza) = `America/Mendoza`
- (GMT-03:00) St Pierre & Miquelon Standard Time (America/Miquelon) = `America/Miquelon`
- (GMT-03:00) Uruguay Standard Time (America/Montevideo) = `America/Montevideo`
- (GMT-03:00) Suriname Time (America/Paramaribo) = `America/Paramaribo`
- (GMT-03:00) Chile Standard Time (America/Punta_Arenas) = `America/Punta_Arenas`
- (GMT-03:00) Brasilia Standard Time (America/Recife) = `America/Recife`
- (GMT-03:00) Brasilia Standard Time (America/Santarem) = `America/Santarem`
- (GMT-03:00) Chile Summer Time (America/Santiago) = `America/Santiago`
- (GMT-03:00) Brasilia Standard Time (America/Sao_Paulo) = `America/Sao_Paulo`
- (GMT-03:00) Chile Standard Time (Antarctica/Palmer) = `Antarctica/Palmer`
- (GMT-03:00) Rothera Time (Antarctica/Rothera) = `Antarctica/Rothera`
- (GMT-03:00) Falkland Islands Standard Time (Atlantic/Stanley) = `Atlantic/Stanley`
- (GMT-03:30) Newfoundland Standard Time (America/St_Johns) = `America/St_Johns`
- (GMT-04:00) Atlantic Standard Time (America/Anguilla) = `America/Anguilla`
- (GMT-04:00) Atlantic Standard Time (America/Antigua) = `America/Antigua`
- (GMT-04:00) Atlantic Standard Time (America/Aruba) = `America/Aruba`
- (GMT-04:00) Atlantic Standard Time (America/Barbados) = `America/Barbados`
- (GMT-04:00) Atlantic Standard Time (America/Blanc-Sablon) = `America/Blanc-Sablon`
- (GMT-04:00) Amazon Standard Time (America/Boa_Vista) = `America/Boa_Vista`
- (GMT-04:00) Amazon Standard Time (America/Campo_Grande) = `America/Campo_Grande`
- (GMT-04:00) Venezuela Time (America/Caracas) = `America/Caracas`
- (GMT-04:00) Amazon Standard Time (America/Cuiaba) = `America/Cuiaba`
- (GMT-04:00) Atlantic Standard Time (America/Curacao) = `America/Curacao`
- (GMT-04:00) Atlantic Standard Time (America/Dominica) = `America/Dominica`
- (GMT-04:00) Atlantic Standard Time (America/Glace_Bay) = `America/Glace_Bay`
- (GMT-04:00) Atlantic Standard Time (America/Goose_Bay) = `America/Goose_Bay`
- (GMT-04:00) Atlantic Standard Time (America/Grenada) = `America/Grenada`
- (GMT-04:00) Atlantic Standard Time (America/Guadeloupe) = `America/Guadeloupe`
- (GMT-04:00) Guyana Time (America/Guyana) = `America/Guyana`
- (GMT-04:00) Atlantic Standard Time (America/Halifax) = `America/Halifax`
- (GMT-04:00) Atlantic Standard Time (America/Kralendijk) = `America/Kralendijk`
- (GMT-04:00) Bolivia Time (America/La_Paz) = `America/La_Paz`
- (GMT-04:00) Atlantic Standard Time (America/Lower_Princes) = `America/Lower_Princes`
- (GMT-04:00) Amazon Standard Time (America/Manaus) = `America/Manaus`
- (GMT-04:00) Atlantic Standard Time (America/Marigot) = `America/Marigot`
- (GMT-04:00) Atlantic Standard Time (America/Martinique) = `America/Martinique`
- (GMT-04:00) Atlantic Standard Time (America/Moncton) = `America/Moncton`
- (GMT-04:00) Atlantic Standard Time (America/Montserrat) = `America/Montserrat`
- (GMT-04:00) Atlantic Standard Time (America/Port_of_Spain) = `America/Port_of_Spain`
- (GMT-04:00) Amazon Standard Time (America/Porto_Velho) = `America/Porto_Velho`
- (GMT-04:00) Atlantic Standard Time (America/Puerto_Rico) = `America/Puerto_Rico`
- (GMT-04:00) Atlantic Standard Time (America/Santo_Domingo) = `America/Santo_Domingo`
- (GMT-04:00) Atlantic Standard Time (America/St_Barthelemy) = `America/St_Barthelemy`
- (GMT-04:00) Atlantic Standard Time (America/St_Kitts) = `America/St_Kitts`
- (GMT-04:00) Atlantic Standard Time (America/St_Lucia) = `America/St_Lucia`
- (GMT-04:00) Atlantic Standard Time (America/St_Thomas) = `America/St_Thomas`
- (GMT-04:00) Atlantic Standard Time (America/St_Vincent) = `America/St_Vincent`
- (GMT-04:00) Atlantic Standard Time (America/Thule) = `America/Thule`
- (GMT-04:00) Atlantic Standard Time (America/Tortola) = `America/Tortola`
- (GMT-04:00) Atlantic Standard Time (Atlantic/Bermuda) = `Atlantic/Bermuda`
- (GMT-05:00) Colombia Standard Time (America/Bogota) = `America/Bogota`
- (GMT-05:00) Eastern Standard Time (America/Cancun) = `America/Cancun`
- (GMT-05:00) Eastern Standard Time (America/Cayman) = `America/Cayman`
- (GMT-05:00) Eastern Standard Time (America/Coral_Harbour) = `America/Coral_Harbour`
- (GMT-05:00) Eastern Standard Time (America/Detroit) = `America/Detroit`
- (GMT-05:00) Acre Standard Time (America/Eirunepe) = `America/Eirunepe`
- (GMT-05:00) Eastern Standard Time (America/Grand_Turk) = `America/Grand_Turk`
- (GMT-05:00) Ecuador Time (America/Guayaquil) = `America/Guayaquil`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Indianapolis) = `America/Indiana/Indianapolis`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Marengo) = `America/Indiana/Marengo`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Petersburg) = `America/Indiana/Petersburg`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Vevay) = `America/Indiana/Vevay`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Vincennes) = `America/Indiana/Vincennes`
- (GMT-05:00) Eastern Standard Time (America/Indiana/Winamac) = `America/Indiana/Winamac`
- (GMT-05:00) Eastern Standard Time (America/Iqaluit) = `America/Iqaluit`
- (GMT-05:00) Eastern Standard Time (America/Jamaica) = `America/Jamaica`
- (GMT-05:00) Eastern Standard Time (America/Kentucky/Monticello) = `America/Kentucky/Monticello`
- (GMT-05:00) Peru Standard Time (America/Lima) = `America/Lima`
- (GMT-05:00) Eastern Standard Time (America/Louisville) = `America/Louisville`
- (GMT-05:00) Eastern Standard Time (America/Montreal) = `America/Montreal`
- (GMT-05:00) Eastern Standard Time (America/Nassau) = `America/Nassau`
- (GMT-05:00) Eastern Standard Time (America/New_York) = `America/New_York`
- (GMT-05:00) Eastern Standard Time (America/Nipigon) = `America/Nipigon`
- (GMT-05:00) Eastern Standard Time (America/Panama) = `America/Panama`
- (GMT-05:00) Eastern Standard Time (America/Pangnirtung) = `America/Pangnirtung`
- (GMT-05:00) Eastern Standard Time (America/Port-au-Prince) = `America/Port-au-Prince`
- (GMT-05:00) Acre Standard Time (America/Rio_Branco) = `America/Rio_Branco`
- (GMT-05:00) Eastern Standard Time (America/Thunder_Bay) = `America/Thunder_Bay`
- (GMT-05:00) Eastern Standard Time (America/Toronto) = `America/Toronto`
- (GMT-05:00) Easter Island Summer Time (Pacific/Easter) = `Pacific/Easter`
- (GMT-06:00) Central Standard Time (America/Bahia_Banderas) = `America/Bahia_Banderas`
- (GMT-06:00) Central Standard Time (America/Belize) = `America/Belize`
- (GMT-06:00) Central Standard Time (America/Chicago) = `America/Chicago`
- (GMT-06:00) Mexican Pacific Standard Time (America/Chihuahua) = `America/Chihuahua`
- (GMT-06:00) Central Standard Time (America/Costa_Rica) = `America/Costa_Rica`
- (GMT-06:00) Central Standard Time (America/El_Salvador) = `America/El_Salvador`
- (GMT-06:00) Central Standard Time (America/Guatemala) = `America/Guatemala`
- (GMT-06:00) Central Standard Time (America/Indiana/Knox) = `America/Indiana/Knox`
- (GMT-06:00) Central Standard Time (America/Indiana/Tell_City) = `America/Indiana/Tell_City`
- (GMT-06:00) Central Standard Time (America/Managua) = `America/Managua`
- (GMT-06:00) Central Standard Time (America/Matamoros) = `America/Matamoros`
- (GMT-06:00) Central Standard Time (America/Menominee) = `America/Menominee`
- (GMT-06:00) Central Standard Time (America/Merida) = `America/Merida`
- (GMT-06:00) Central Standard Time (America/Mexico_City) = `America/Mexico_City`
- (GMT-06:00) Central Standard Time (America/Monterrey) = `America/Monterrey`
- (GMT-06:00) Central Standard Time (America/North_Dakota/Beulah) = `America/North_Dakota/Beulah`
- (GMT-06:00) Central Standard Time (America/North_Dakota/Center) = `America/North_Dakota/Center`
- (GMT-06:00) Central Standard Time (America/North_Dakota/New_Salem) = `America/North_Dakota/New_Salem`
- (GMT-06:00) Mountain Standard Time (America/Ojinaga) = `America/Ojinaga`
- (GMT-06:00) Central Standard Time (America/Rainy_River) = `America/Rainy_River`
- (GMT-06:00) Central Standard Time (America/Rankin_Inlet) = `America/Rankin_Inlet`
- (GMT-06:00) Central Standard Time (America/Regina) = `America/Regina`
- (GMT-06:00) Central Standard Time (America/Resolute) = `America/Resolute`
- (GMT-06:00) Central Standard Time (America/Swift_Current) = `America/Swift_Current`
- (GMT-06:00) Central Standard Time (America/Tegucigalpa) = `America/Tegucigalpa`
- (GMT-06:00) Central Standard Time (America/Winnipeg) = `America/Winnipeg`
- (GMT-06:00) Galapagos Time (Pacific/Galapagos) = `Pacific/Galapagos`
- (GMT-07:00) Mountain Standard Time (America/Boise) = `America/Boise`
- (GMT-07:00) Mountain Standard Time (America/Cambridge_Bay) = `America/Cambridge_Bay`
- (GMT-07:00) Mountain Standard Time (America/Creston) = `America/Creston`
- (GMT-07:00) Yukon Time (America/Dawson) = `America/Dawson`
- (GMT-07:00) Mountain Standard Time (America/Dawson_Creek) = `America/Dawson_Creek`
- (GMT-07:00) Mountain Standard Time (America/Denver) = `America/Denver`
- (GMT-07:00) Mountain Standard Time (America/Edmonton) = `America/Edmonton`
- (GMT-07:00) Mountain Standard Time (America/Fort_Nelson) = `America/Fort_Nelson`
- (GMT-07:00) Mexican Pacific Standard Time (America/Hermosillo) = `America/Hermosillo`
- (GMT-07:00) Mountain Standard Time (America/Inuvik) = `America/Inuvik`
- (GMT-07:00) Mexican Pacific Standard Time (America/Mazatlan) = `America/Mazatlan`
- (GMT-07:00) Mountain Standard Time (America/Phoenix) = `America/Phoenix`
- (GMT-07:00) Yukon Time (America/Whitehorse) = `America/Whitehorse`
- (GMT-07:00) Mountain Standard Time (America/Yellowknife) = `America/Yellowknife`
- (GMT-08:00) Pacific Standard Time (America/Los_Angeles) = `America/Los_Angeles`
- (GMT-08:00) Northwest Mexico Standard Time (America/Santa_Isabel) = `America/Santa_Isabel`
- (GMT-08:00) Pacific Standard Time (America/Tijuana) = `America/Tijuana`
- (GMT-08:00) Pacific Standard Time (America/Vancouver) = `America/Vancouver`
- (GMT-08:00) Pitcairn Time (Pacific/Pitcairn) = `Pacific/Pitcairn`
- (GMT-09:00) Alaska Standard Time (America/Anchorage) = `America/Anchorage`
- (GMT-09:00) Alaska Standard Time (America/Juneau) = `America/Juneau`
- (GMT-09:00) Alaska Standard Time (America/Metlakatla) = `America/Metlakatla`
- (GMT-09:00) Alaska Standard Time (America/Nome) = `America/Nome`
- (GMT-09:00) Alaska Standard Time (America/Sitka) = `America/Sitka`
- (GMT-09:00) Alaska Standard Time (America/Yakutat) = `America/Yakutat`
- (GMT-09:00) Gambier Time (Pacific/Gambier) = `Pacific/Gambier`
- (GMT-09:30) Marquesas Time (Pacific/Marquesas) = `Pacific/Marquesas`
- (GMT-10:00) Hawaii-Aleutian Standard Time (America/Adak) = `America/Adak`
- (GMT-10:00) Hawaii-Aleutian Standard Time (Pacific/Honolulu) = `Pacific/Honolulu`
- (GMT-10:00) Hawaii-Aleutian Standard Time (Pacific/Johnston) = `Pacific/Johnston`
- (GMT-10:00) Cook Islands Standard Time (Pacific/Rarotonga) = `Pacific/Rarotonga`
- (GMT-10:00) Tahiti Time (Pacific/Tahiti) = `Pacific/Tahiti`
- (GMT-11:00) Samoa Standard Time (Pacific/Midway) = `Pacific/Midway`
- (GMT-11:00) Niue Time (Pacific/Niue) = `Pacific/Niue`
- (GMT-11:00) Samoa Standard Time (Pacific/Pago_Pago) = `Pacific/Pago_Pago`

**Locale** (`LocaleSidKey`):
- Afrikaans (South Africa) = `af_ZA`
- Albanian (Albania) = `sq_AL`
- Amharic (Ethiopia) = `am_ET`
- Arabic (Algeria) = `ar_DZ`
- Arabic (Bahrain) = `ar_BH`
- Arabic (Egypt) = `ar_EG`
- Arabic (Iraq) = `ar_IQ`
- Arabic (Jordan) = `ar_JO`
- Arabic (Kuwait) = `ar_KW`
- Arabic (Lebanon) = `ar_LB`
- Arabic (Libya) = `ar_LY`
- Arabic (Morocco) = `ar_MA`
- Arabic (Oman) = `ar_OM`
- Arabic (Qatar) = `ar_QA`
- Arabic (Saudi Arabia) = `ar_SA`
- Arabic (Sudan) = `ar_SD`
- Arabic (Tunisia) = `ar_TN`
- Arabic (United Arab Emirates) = `ar_AE`
- Arabic (Yemen) = `ar_YE`
- Armenian (Armenia) = `hy_AM`
- Azerbaijani (Azerbaijan) = `az_AZ`
- Bangla (Bangladesh) = `bn_BD`
- Bangla (India) = `bn_IN`
- Basque (Spain) = `eu_ES`
- Belarusian (Belarus) = `be_BY`
- Bosnian (Bosnia & Herzegovina) = `bs_BA`
- Bulgarian (Bulgaria) = `bg_BG`
- Burmese (Myanmar [Burma]) = `my_MM`
- Catalan (Spain) = `ca_ES`
- Chinese (China, Pinyin Ordering) = `zh_CN_PINYIN`
- Chinese (China, Stroke Ordering) = `zh_CN_STROKE`
- Chinese (China) = `zh_CN`
- Chinese (Hong Kong SAR China, Stroke Ordering) = `zh_HK_STROKE`
- Chinese (Hong Kong SAR China) = `zh_HK`
- Chinese (Macao SAR China) = `zh_MO`
- Chinese (Malaysia) = `zh_MY`
- Chinese (Singapore) = `zh_SG`
- Chinese (Taiwan, Stroke Ordering) = `zh_TW_STROKE`
- Chinese (Taiwan) = `zh_TW`
- Croatian (Croatia) = `hr_HR`
- Czech (Czechia) = `cs_CZ`
- Danish (Denmark) = `da_DK`
- Dutch (Aruba) = `nl_AW`
- Dutch (Belgium) = `nl_BE`
- Dutch (Netherlands) = `nl_NL`
- Dutch (Suriname) = `nl_SR`
- Dzongkha (Bhutan) = `dz_BT`
- English (Antigua & Barbuda) = `en_AG`
- English (Australia) = `en_AU`
- English (Bahamas) = `en_BS`
- English (Barbados) = `en_BB`
- English (Belgium) = `en_BE`
- English (Belize) = `en_BZ`
- English (Bermuda) = `en_BM`
- English (Botswana) = `en_BW`
- English (Cameroon) = `en_CM`
- English (Canada) = `en_CA`
- English (Cayman Islands) = `en_KY`
- English (Cyprus) = `en_CY`
- English (Eritrea) = `en_ER`
- English (Eswatini) = `en_SZ`
- English (Falkland Islands) = `en_FK`
- English (Fiji) = `en_FJ`
- English (Gambia) = `en_GM`
- English (Germany) = `en_DE`
- English (Ghana) = `en_GH`
- English (Gibraltar) = `en_GI`
- English (Guyana) = `en_GY`
- English (Hong Kong SAR China) = `en_HK`
- English (India) = `en_IN`
- English (Indonesia) = `en_ID`
- English (Ireland) = `en_IE`
- English (Israel) = `en_IL`
- English (Italy) = `en_IT`
- English (Jamaica) = `en_JM`
- English (Kenya) = `en_KE`
- English (Liberia) = `en_LR`
- English (Madagascar) = `en_MG`
- English (Malawi) = `en_MW`
- English (Malaysia) = `en_MY`
- English (Malta) = `en_MT`
- English (Mauritius) = `en_MU`
- English (Namibia) = `en_NA`
- English (Netherlands) = `en_NL`
- English (New Zealand) = `en_NZ`
- English (Nigeria) = `en_NG`
- English (Pakistan) = `en_PK`
- English (Papua New Guinea) = `en_PG`
- English (Philippines) = `en_PH`
- English (Rwanda) = `en_RW`
- English (Samoa) = `en_WS`
- English (Seychelles) = `en_SC`
- English (Sierra Leone) = `en_SL`
- English (Singapore) = `en_SG`
- English (Sint Maarten) = `en_SX`
- English (Solomon Islands) = `en_SB`
- English (South Africa) = `en_ZA`
- English (St. Helena) = `en_SH`
- English (Tanzania) = `en_TZ`
- English (Tonga) = `en_TO`
- English (Trinidad & Tobago) = `en_TT`
- English (Uganda) = `en_UG`
- English (United Arab Emirates) = `en_AE`
- English (United Kingdom) = `en_GB`
- English (United States) = `en_US`
- English (Vanuatu) = `en_VU`
- Estonian (Estonia) = `et_EE`
- Finnish (Finland) = `fi_FI`
- French (Belgium) = `fr_BE`
- French (Canada) = `fr_CA`
- French (Comoros) = `fr_KM`
- French (France) = `fr_FR`
- French (Guinea) = `fr_GN`
- French (Haiti) = `fr_HT`
- French (Luxembourg) = `fr_LU`
- French (Mauritania) = `fr_MR`
- French (Monaco) = `fr_MC`
- French (Morocco) = `fr_MA`
- French (Switzerland) = `fr_CH`
- French (Wallis & Futuna) = `fr_WF`
- Georgian (Georgia) = `ka_GE`
- German (Austria) = `de_AT`
- German (Belgium) = `de_BE`
- German (Germany) = `de_DE`
- German (Luxembourg) = `de_LU`
- German (Switzerland) = `de_CH`
- Greek (Cyprus) = `el_CY`
- Greek (Greece) = `el_GR`
- Gujarati (India) = `gu_IN`
- Haitian Creole (Haiti) = `ht_HT`
- Haitian Creole (United States) = `ht_US`
- Hawaiian (United States) = `haw_US`
- Hebrew (Israel) = `iw_IL`
- Hindi (India) = `hi_IN`
- Hmong (United States) = `hmn_US`
- Hungarian (Hungary) = `hu_HU`
- Icelandic (Iceland) = `is_IS`
- Indonesian (Indonesia) = `in_ID`
- Irish (Ireland) = `ga_IE`
- Italian (Italy) = `it_IT`
- Italian (Switzerland) = `it_CH`
- Japanese (Japan) = `ja_JP`
- Kalaallisut (Greenland) = `kl_GL`
- Kannada (India) = `kn_IN`
- Kazakh (Kazakhstan) = `kk_KZ`
- Khmer (Cambodia) = `km_KH`
- Korean (South Korea) = `ko_KR`
- Kyrgyz (Kyrgyzstan) = `ky_KG`
- Lao (Laos) = `lo_LA`
- Latvian (Latvia) = `lv_LV`
- Lithuanian (Lithuania) = `lt_LT`
- Luba-Katanga (Congo - Kinshasa) = `lu_CD`
- Luxembourgish (Luxembourg) = `lb_LU`
- Macedonian (North Macedonia) = `mk_MK`
- Malay (Brunei) = `ms_BN`
- Malay (Malaysia) = `ms_MY`
- Malayalam (India) = `ml_IN`
- Maltese (Malta) = `mt_MT`
- Marathi (India) = `mr_IN`
- Montenegrin (Montenegro) = `sh_ME`
- Nepali (Nepal) = `ne_NP`
- Norwegian (Norway) = `no_NO`
- Pashto (Afghanistan) = `ps_AF`
- Polish (Poland) = `pl_PL`
- Portuguese (Angola) = `pt_AO`
- Portuguese (Brazil) = `pt_BR`
- Portuguese (Cape Verde) = `pt_CV`
- Portuguese (Mozambique) = `pt_MZ`
- Portuguese (Portugal) = `pt_PT`
- Portuguese (São Tomé & Príncipe) = `pt_ST`
- Punjabi (India) = `pa_IN`
- Romanian (Moldova) = `ro_MD`
- Romanian (Romania) = `ro_RO`
- Romansh (Switzerland) = `rm_CH`
- Rundi (Burundi) = `rn_BI`
- Russian (Armenia) = `ru_AM`
- Russian (Belarus) = `ru_BY`
- Russian (Kazakhstan) = `ru_KZ`
- Russian (Kyrgyzstan) = `ru_KG`
- Russian (Lithuania) = `ru_LT`
- Russian (Moldova) = `ru_MD`
- Russian (Poland) = `ru_PL`
- Russian (Russia) = `ru_RU`
- Russian (Ukraine) = `ru_UA`
- Samoan (Samoa) = `sm_WS`
- Samoan (United States) = `sm_US`
- Serbian (Cyrillic) (Bosnia and Herzegovina) = `sr_BA`
- Serbian (Cyrillic) (Serbia) = `sr_CS`
- Serbian (Latin) (Bosnia and Herzegovina) = `sh_BA`
- Serbian (Latin) (Serbia) = `sh_CS`
- Serbian (Serbia) = `sr_RS`
- Slovak (Slovakia) = `sk_SK`
- Slovenian (Slovenia) = `sl_SI`
- Somali (Djibouti) = `so_DJ`
- Somali (Somalia) = `so_SO`
- Spanish (Argentina) = `es_AR`
- Spanish (Bolivia) = `es_BO`
- Spanish (Chile) = `es_CL`
- Spanish (Colombia) = `es_CO`
- Spanish (Costa Rica) = `es_CR`
- Spanish (Dominican Republic) = `es_DO`
- Spanish (Ecuador) = `es_EC`
- Spanish (El Salvador) = `es_SV`
- Spanish (Guatemala) = `es_GT`
- Spanish (Honduras) = `es_HN`
- Spanish (Mexico) = `es_MX`
- Spanish (Nicaragua) = `es_NI`
- Spanish (Panama) = `es_PA`
- Spanish (Paraguay) = `es_PY`
- Spanish (Peru) = `es_PE`
- Spanish (Puerto Rico) = `es_PR`
- Spanish (Spain) = `es_ES`
- Spanish (United States) = `es_US`
- Spanish (Uruguay) = `es_UY`
- Spanish (Venezuela) = `es_VE`
- Swahili (Kenya) = `sw_KE`
- Swedish (Sweden) = `sv_SE`
- Tagalog (Philippines) = `tl_PH`
- Tajik (Tajikistan) = `tg_TJ`
- Tamil (India) = `ta_IN`
- Tamil (Sri Lanka) = `ta_LK`
- Telugu (India) = `te_IN`
- Te reo (New Zealand) = `mi_NZ`
- Thai (Thailand) = `th_TH`
- Tigrinya (Ethiopia) = `ti_ET`
- Turkish (Türkiye) = `tr_TR`
- Ukrainian (Ukraine) = `uk_UA`
- Urdu (Pakistan) = `ur_PK`
- Uzbek (Latin, Uzbekistan) = `uz_LATN_UZ`
- Vietnamese (Vietnam) = `vi_VN`
- Welsh (United Kingdom) = `cy_GB`
- Xhosa (South Africa) = `xh_ZA`
- Yiddish (United States) = `ji_US`
- Yoruba (Benin) = `yo_BJ`
- Zulu (South Africa) = `zu_ZA`

**Email Encoding** (`EmailEncodingKey`):
- Unicode (UTF-8) = `UTF-8`
- General US & Western Europe (ISO-8859-1, ISO-LATIN-1) = `ISO-8859-1`
- Japanese (Shift-JIS) = `Shift_JIS`
- Japanese (JIS) = `ISO-2022-JP`
- Japanese (EUC) = `EUC-JP`
- Korean (ks_c_5601-1987) = `ks_c_5601-1987`
- Traditional Chinese (Big5) = `Big5`
- Simplified Chinese (GB2312) = `GB2312`
- Traditional Chinese Hong Kong (Big5-HKSCS) = `Big5-HKSCS`
- Japanese (Shift-JIS_2004) = `x-SJIS_0213`

**User Type** (`UserType`):
- Standard = `Standard`
- Partner = `PowerPartner`
- Customer Portal Manager = `PowerCustomerSuccess`
- Customer Portal User = `CustomerSuccess`
- Guest = `Guest`
- High Volume Portal = `CspLitePortal`
- CSN Only = `CsnOnly`
- Self Service = `SelfService`

**Start of Day** (`StartDay`):
- 12:00 AM = `0`
- 1:00 AM = `1`
- 2:00 AM = `2`
- 3:00 AM = `3`
- 4:00 AM = `4`
- 5:00 AM = `5`
- 6:00 AM = `6`
- 7:00 AM = `7`
- 8:00 AM = `8`
- 9:00 AM = `9`
- 10:00 AM = `10`
- 11:00 AM = `11`
- 12:00 PM = `12`
- 1:00 PM = `13`
- 2:00 PM = `14`
- 3:00 PM = `15`
- 4:00 PM = `16`
- 5:00 PM = `17`
- 6:00 PM = `18`
- 7:00 PM = `19`
- 8:00 PM = `20`
- 9:00 PM = `21`
- 10:00 PM = `22`
- 11:00 PM = `23`

**End of Day** (`EndDay`):
- 12:00 AM = `0`
- 1:00 AM = `1`
- 2:00 AM = `2`
- 3:00 AM = `3`
- 4:00 AM = `4`
- 5:00 AM = `5`
- 6:00 AM = `6`
- 7:00 AM = `7`
- 8:00 AM = `8`
- 9:00 AM = `9`
- 10:00 AM = `10`
- 11:00 AM = `11`
- 12:00 PM = `12`
- 1:00 PM = `13`
- 2:00 PM = `14`
- 3:00 PM = `15`
- 4:00 PM = `16`
- 5:00 PM = `17`
- 6:00 PM = `18`
- 7:00 PM = `19`
- 8:00 PM = `20`
- 9:00 PM = `21`
- 10:00 PM = `22`
- 11:00 PM = `23`

**Language** (`LanguageLocaleKey`):
- English = `en_US`
- German = `de`
- Spanish = `es`
- French = `fr`
- Italian = `it`
- Japanese = `ja`
- Swedish = `sv`
- Korean = `ko`
- Chinese (Traditional) = `zh_TW`
- Chinese (Simplified) = `zh_CN`
- Portuguese (Brazil) = `pt_BR`
- Dutch = `nl_NL`
- Danish = `da`
- Thai = `th`
- Finnish = `fi`
- Russian = `ru`
- Spanish (Mexico) = `es_MX`
- Norwegian = `no`

**Chatter Email Highlights Frequency** (`DigestFrequency`):
- Daily = `D`
- Weekly = `W`
- Never = `N`

**Default Notification Frequency when Joining Groups** (`DefaultGroupNotificationFrequency`):
- Email on Each Post = `P`
- Daily Digests = `D`
- Weekly Digests = `W`
- Never = `N`

**DocuSign User Status** (`dfsle__Status__c`):
- Inactive = `Inactive`
- Pending = `Pending`
- Active = `Active`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| AIApplication | CreatedById | N/A | No |
| AIApplication | LastModifiedById | N/A | No |
| AIApplicationConfig | CreatedById | N/A | No |
| AIApplicationConfig | LastModifiedById | N/A | No |
| AIInsightAction | CreatedById | N/A | No |
| AIInsightAction | LastModifiedById | N/A | No |
| AIInsightFeedback | CreatedById | N/A | No |
| AIInsightFeedback | LastModifiedById | N/A | No |
| AIInsightReason | CreatedById | N/A | No |
| AIInsightReason | LastModifiedById | N/A | No |
| AIInsightValue | CreatedById | N/A | No |
| AIInsightValue | LastModifiedById | N/A | No |
| AIPredictionEvent | CreatedById | N/A | No |
| AIRecordInsight | CreatedById | N/A | No |
| AIRecordInsight | LastModifiedById | N/A | No |
| APXTConga4__Composer_Host_Override__c | CreatedById | N/A | No |
| APXTConga4__Composer_Host_Override__c | LastModifiedById | N/A | No |
| APXTConga4__Composer_Host_Override__c | OwnerId | N/A | No |
| APXTConga4__Composer_QuickMerge__c | CreatedById | N/A | No |
| APXTConga4__Composer_QuickMerge__c | LastModifiedById | N/A | No |
| APXTConga4__Composer_QuickMerge__c | OwnerId | N/A | No |
| APXTConga4__Conga_Collection_Solution__c | CreatedById | N/A | No |
| APXTConga4__Conga_Collection_Solution__c | LastModifiedById | N/A | No |
| APXTConga4__Conga_Collection__c | CreatedById | N/A | No |
| APXTConga4__Conga_Collection__c | LastModifiedById | N/A | No |
| APXTConga4__Conga_Collection__c | OwnerId | N/A | No |
| APXTConga4__Conga_Email_Staging__c | CreatedById | N/A | No |
| APXTConga4__Conga_Email_Staging__c | LastModifiedById | N/A | No |
| APXTConga4__Conga_Email_Staging__c | OwnerId | N/A | No |
| APXTConga4__Conga_Email_Template__c | CreatedById | N/A | No |
| APXTConga4__Conga_Email_Template__c | LastModifiedById | N/A | No |
| APXTConga4__Conga_Email_Template__c | OwnerId | N/A | No |
| APXTConga4__Conga_Merge_Query__c | CreatedById | N/A | No |
| APXTConga4__Conga_Merge_Query__c | LastModifiedById | N/A | No |
| APXTConga4__Conga_Merge_Query__c | OwnerId | N/A | No |
| APXTConga4__Conga_Solution_Email_Template__c | CreatedById | N/A | No |
| APXTConga4__Conga_Solution_Email_Template__c | LastModifiedById | N/A | No |
| APXTConga4__Conga_Solution_Parameter__c | CreatedById | N/A | No |
| APXTConga4__Conga_Solution_Parameter__c | LastModifiedById | N/A | No |
| APXTConga4__Conga_Solution_Query__c | CreatedById | N/A | No |
| APXTConga4__Conga_Solution_Query__c | LastModifiedById | N/A | No |
| APXTConga4__Conga_Solution_Report__c | CreatedById | N/A | No |
| APXTConga4__Conga_Solution_Report__c | LastModifiedById | N/A | No |
| APXTConga4__Conga_Solution_Template__c | CreatedById | N/A | No |
| APXTConga4__Conga_Solution_Template__c | LastModifiedById | N/A | No |
| APXTConga4__Conga_Solution__c | CreatedById | N/A | No |
| APXTConga4__Conga_Solution__c | LastModifiedById | N/A | No |
| APXTConga4__Conga_Solution__c | OwnerId | N/A | No |
| APXTConga4__Conga_Template__c | CreatedById | N/A | No |
| APXTConga4__Conga_Template__c | LastModifiedById | N/A | No |
| APXTConga4__Conga_Template__c | OwnerId | N/A | No |
| APXTConga4__Document_History_Detail__c | CreatedById | N/A | No |
| APXTConga4__Document_History_Detail__c | LastModifiedById | N/A | No |
| APXTConga4__Document_History__c | CreatedById | N/A | No |
| APXTConga4__Document_History__c | LastModifiedById | N/A | No |
| APXTConga4__Document_History__c | OwnerId | N/A | No |
| APXTConga4__EventData__c | CreatedById | N/A | No |
| APXTConga4__EventData__c | LastModifiedById | N/A | No |
| APXTConga4__EventData__c | OwnerId | N/A | No |
| APXTConga4__VersionedData__c | CreatedById | N/A | No |
| APXTConga4__VersionedData__c | LastModifiedById | N/A | No |
| APXTConga4__VersionedData__c | OwnerId | N/A | No |
| APXT_CongaSign__Document__c | CreatedById | N/A | No |
| APXT_CongaSign__Document__c | LastModifiedById | N/A | No |
| APXT_CongaSign__Document__c | OwnerId | N/A | No |
| APXT_CongaSign__Recipient__c | CreatedById | N/A | No |
| APXT_CongaSign__Recipient__c | LastModifiedById | N/A | No |
| APXT_CongaSign__Transaction__c | CreatedById | N/A | No |
| APXT_CongaSign__Transaction__c | LastModifiedById | N/A | No |
| APXT_CongaSign__Transaction__c | OwnerId | N/A | No |
| AcceptedEventRelation | CreatedById | N/A | No |
| AcceptedEventRelation | LastModifiedById | N/A | No |
| AcceptedEventRelation | RelationId | AcceptedEventRelations | No |
| Account | CreatedById | N/A | No |
| Account | LastModifiedById | N/A | No |
| Account | OwnerId | N/A | No |
| AccountContactRelation | CreatedById | N/A | No |
| AccountContactRelation | LastModifiedById | N/A | No |
| AccountContactRole | CreatedById | N/A | No |
| AccountContactRole | LastModifiedById | N/A | No |
| AccountPartner | CreatedById | N/A | No |
| AccountPartner | LastModifiedById | N/A | No |
| ActionLinkGroupTemplate | CreatedById | N/A | No |
| ActionLinkGroupTemplate | LastModifiedById | N/A | No |
| ActionLinkTemplate | CreatedById | N/A | No |
| ActionLinkTemplate | LastModifiedById | N/A | No |
| ActionPlan | CreatedById | N/A | No |
| ActionPlan | LastModifiedById | N/A | No |
| ActionPlan | OwnerId | N/A | No |
| ActionPlanItem | CreatedById | N/A | No |
| ActionPlanItem | LastModifiedById | N/A | No |
| ActionPlanItemDependency | CreatedById | N/A | No |
| ActionPlanItemDependency | LastModifiedById | N/A | No |
| ActionPlanTemplate | CreatedById | N/A | No |
| ActionPlanTemplate | LastModifiedById | N/A | No |
| ActionPlanTemplate | OwnerId | N/A | No |
| ActionPlanTemplateItem | CreatedById | N/A | No |
| ActionPlanTemplateItem | LastModifiedById | N/A | No |
| ActionPlanTemplateItemValue | CreatedById | N/A | No |
| ActionPlanTemplateItemValue | LastModifiedById | N/A | No |
| ActionPlanTemplateVersion | CreatedById | N/A | No |
| ActionPlanTemplateVersion | LastModifiedById | N/A | No |
| ActionPlanTmplPkgConfig | CreatedById | N/A | No |
| ActionPlanTmplPkgConfig | LastModifiedById | N/A | No |
| ActionPlnTmplItmDependency | CreatedById | N/A | No |
| ActionPlnTmplItmDependency | LastModifiedById | N/A | No |
| AdditionalNumber | CreatedById | N/A | No |
| AdditionalNumber | LastModifiedById | N/A | No |
| Announcement | CreatedById | N/A | No |
| Announcement | LastModifiedById | N/A | No |
| AppAnalyticsQueryRequest | CreatedById | N/A | No |
| AppAnalyticsQueryRequest | LastModifiedById | N/A | No |
| AppMenuItem | CreatedById | N/A | No |
| AppMenuItem | LastModifiedById | N/A | No |
| Approval | CreatedById | N/A | No |
| Approval | LastModifiedById | N/A | No |
| Approval | OwnerId | N/A | No |
| Asset | CreatedById | N/A | No |
| Asset | LastModifiedById | N/A | No |
| Asset | OwnerId | N/A | No |
| AssetRelationship | CreatedById | N/A | No |
| AssetRelationship | LastModifiedById | N/A | No |
| AssetTokenEvent | CreatedById | N/A | No |
| AssetTokenEvent | UserId | N/A | No |
| AssignmentRule | CreatedById | N/A | No |
| AssignmentRule | LastModifiedById | N/A | No |
| AssociatedLocation | CreatedById | N/A | No |
| AssociatedLocation | LastModifiedById | N/A | No |
| AsyncApexJob | CreatedById | N/A | No |
| AsyncOperationEvent | CreatedById | N/A | No |
| AsyncOperationStatus | CreatedById | N/A | No |
| AttachedContentDocument | CreatedById | N/A | No |
| AttachedContentDocument | LastModifiedById | N/A | No |
| AttachedContentDocument | LinkedEntityId | AttachedContentDocuments | Yes |
| AttachedContentNote | CreatedById | N/A | No |
| AttachedContentNote | LastModifiedById | N/A | No |
| AttachedContentNote | LinkedEntityId | AttachedContentNotes | Yes |
| Attachment | CreatedById | N/A | No |
| Attachment | LastModifiedById | N/A | No |
| Attachment | OwnerId | N/A | No |
| AuraDefinition | CreatedById | N/A | No |
| AuraDefinition | LastModifiedById | N/A | No |
| AuraDefinitionBundle | CreatedById | N/A | No |
| AuraDefinitionBundle | LastModifiedById | N/A | No |
| BirdeyeCheckin__Automation_Failed_Record__c | CreatedById | N/A | No |
| BirdeyeCheckin__Automation_Failed_Record__c | LastModifiedById | N/A | No |
| BirdeyeCheckin__Automation_Failed_Record__c | OwnerId | N/A | No |
| BirdeyeCheckin__Automation__c | CreatedById | N/A | No |
| BirdeyeCheckin__Automation__c | LastModifiedById | N/A | No |
| BirdeyeCheckin__Automation__c | OwnerId | N/A | No |
| BirdeyeCheckin__Connector__c | CreatedById | N/A | No |
| BirdeyeCheckin__Connector__c | LastModifiedById | N/A | No |
| BirdeyeCheckin__Connector__c | OwnerId | N/A | No |
| BrandTemplate | CreatedById | N/A | No |
| BrandTemplate | LastModifiedById | N/A | No |
| BrandingSet | CreatedById | N/A | No |
| BrandingSet | LastModifiedById | N/A | No |
| BrandingSetProperty | CreatedById | N/A | No |
| BrandingSetProperty | LastModifiedById | N/A | No |
| BriefcaseAssignment | CreatedById | N/A | No |
| BriefcaseAssignment | LastModifiedById | N/A | No |
| BriefcaseAssignment | UserOrGroupId | N/A | Yes |
| BriefcaseDefinition | CreatedById | N/A | No |
| BriefcaseDefinition | LastModifiedById | N/A | No |
| BriefcaseRule | CreatedById | N/A | No |
| BriefcaseRule | LastModifiedById | N/A | No |
| BriefcaseRuleFilter | CreatedById | N/A | No |
| BriefcaseRuleFilter | LastModifiedById | N/A | No |
| BusinessHours | CreatedById | N/A | No |
| BusinessHours | LastModifiedById | N/A | No |
| BusinessProcess | CreatedById | N/A | No |
| BusinessProcess | LastModifiedById | N/A | No |
| Calendar | CreatedById | N/A | No |
| Calendar | LastModifiedById | N/A | No |
| Calendar | UserId | N/A | Yes |
| CalendarView | CreatedById | N/A | No |
| CalendarView | LastModifiedById | N/A | No |
| CalendarView | OwnerId | N/A | No |
| CalendarView | PublisherId | N/A | No |
| CallCenter | CreatedById | N/A | No |
| CallCenter | LastModifiedById | N/A | No |
| CallCoachConfigModifyEvent | CreatedById | N/A | No |
| CallCoachKeywordEvent | CreatedById | N/A | No |
| CallCoachingMediaProvider | CreatedById | N/A | No |
| CallCoachingMediaProvider | LastModifiedById | N/A | No |
| Campaign | CreatedById | N/A | No |
| Campaign | LastModifiedById | N/A | No |
| Campaign | OwnerId | N/A | No |
| CampaignInfluenceModel | CreatedById | N/A | No |
| CampaignInfluenceModel | LastModifiedById | N/A | No |
| CampaignMember | CreatedById | N/A | No |
| CampaignMember | LastModifiedById | N/A | No |
| CampaignMember | LeadOrContactOwnerId | N/A | No |
| CampaignMemberStatus | CreatedById | N/A | No |
| CampaignMemberStatus | LastModifiedById | N/A | No |
| Case | CreatedById | N/A | No |
| Case | LastModifiedById | N/A | No |
| Case | OwnerId | N/A | No |
| CaseComment | CreatedById | N/A | No |
| CaseComment | LastModifiedById | N/A | No |
| CaseContactRole | CreatedById | N/A | No |
| CaseContactRole | LastModifiedById | N/A | No |
| CaseHistory2 | LastModifiedById | N/A | No |
| CaseHistory2 | OwnerId | N/A | No |
| CaseSolution | CreatedById | N/A | No |
| CaseStatus | CreatedById | N/A | No |
| CaseStatus | LastModifiedById | N/A | No |
| CaseSubjectParticle | CreatedById | N/A | No |
| CaseSubjectParticle | LastModifiedById | N/A | No |
| CaseTeamMember | CreatedById | N/A | No |
| CaseTeamMember | LastModifiedById | N/A | No |
| CaseTeamMember | MemberId | N/A | Yes |
| CaseTeamRole | CreatedById | N/A | No |
| CaseTeamRole | LastModifiedById | N/A | No |
| CaseTeamTemplate | CreatedById | N/A | No |
| CaseTeamTemplate | LastModifiedById | N/A | No |
| CaseTeamTemplateMember | CreatedById | N/A | No |
| CaseTeamTemplateMember | LastModifiedById | N/A | No |
| CaseTeamTemplateMember | MemberId | N/A | Yes |
| CaseTeamTemplateRecord | CreatedById | N/A | No |
| CategoryData | CreatedById | N/A | No |
| CategoryData | LastModifiedById | N/A | No |
| CategoryNode | CreatedById | N/A | No |
| CategoryNode | LastModifiedById | N/A | No |
| CollaborationInvitation | CreatedById | N/A | Yes |
| CollaborationInvitation | InviterId | N/A | No |
| CollaborationInvitation | LastModifiedById | N/A | No |
| CollaborationInvitation | SharedEntityId | N/A | Yes |
| CombinedAttachment | CreatedById | N/A | No |
| CombinedAttachment | LastModifiedById | N/A | No |
| CombinedAttachment | ParentId | CombinedAttachments | Yes |
| ConferenceNumber | CreatedById | N/A | No |
| ConferenceNumber | LastModifiedById | N/A | No |
| ConnectedApplication | CreatedById | N/A | No |
| ConnectedApplication | LastModifiedById | N/A | No |
| Contact | CreatedById | N/A | No |
| Contact | LastModifiedById | N/A | No |
| Contact | OwnerId | N/A | No |
| ContactRequest | CreatedById | N/A | No |
| ContactRequest | LastModifiedById | N/A | No |
| ContactRequest | OwnerId | N/A | No |
| ContactRequest | WhoId | ContactRequests | No |
| ContentAsset | CreatedById | N/A | No |
| ContentAsset | LastModifiedById | N/A | No |
| ContentDistribution | CreatedById | N/A | No |
| ContentDistribution | LastModifiedById | N/A | No |
| ContentDistribution | OwnerId | N/A | Yes |
| ContentDistributionView | CreatedById | N/A | No |
| ContentDocument | ArchivedById | N/A | No |
| ContentDocument | CreatedById | N/A | No |
| ContentDocument | LastModifiedById | N/A | No |
| ContentDocument | OwnerId | N/A | No |
| ContentDocumentLink | LinkedEntityId | ContentDocumentLinks | Yes |
| ContentDocumentSubscription | UserId | N/A | Yes |
| ContentFolder | CreatedById | N/A | No |
| ContentFolder | LastModifiedById | N/A | No |
| ContentFolderItem | CreatedById | N/A | No |
| ContentFolderItem | LastModifiedById | N/A | No |
| ContentFolderMember | CreatedById | N/A | No |
| ContentFolderMember | LastModifiedById | N/A | No |
| ContentNote | CreatedById | N/A | No |
| ContentNote | LastModifiedById | N/A | No |
| ContentNote | OwnerId | N/A | No |
| ContentNotification | EntityIdentifierId | N/A | No |
| ContentNotification | UsersId | N/A | Yes |
| ContentTagSubscription | UserId | N/A | Yes |
| ContentUserSubscription | SubscribedToUserId | N/A | Yes |
| ContentUserSubscription | SubscriberUserId | N/A | Yes |
| ContentVersion | ContentModifiedById | N/A | No |
| ContentVersion | CreatedById | N/A | No |
| ContentVersion | FirstPublishLocationId | N/A | No |
| ContentVersion | LastModifiedById | N/A | No |
| ContentVersion | OwnerId | N/A | No |
| ContentVersionRating | UserId | N/A | Yes |
| ContentWorkspace | CreatedById | N/A | No |
| ContentWorkspace | LastModifiedById | N/A | No |
| ContentWorkspaceMember | CreatedById | N/A | No |
| ContentWorkspaceMember | MemberId | N/A | Yes |
| ContentWorkspacePermission | CreatedById | N/A | No |
| ContentWorkspacePermission | LastModifiedById | N/A | No |
| ContentWorkspaceSubscription | UserId | N/A | Yes |
| Contract | ActivatedById | N/A | No |
| Contract | CompanySignedId | ContractsSigned | No |
| Contract | CreatedById | N/A | No |
| Contract | LastModifiedById | N/A | No |
| Contract | OwnerId | N/A | No |
| ContractContactRole | CreatedById | N/A | No |
| ContractContactRole | LastModifiedById | N/A | No |
| ContractStatus | CreatedById | N/A | No |
| ContractStatus | LastModifiedById | N/A | No |
| CorsWhitelistEntry | CreatedById | N/A | No |
| CorsWhitelistEntry | LastModifiedById | N/A | No |
| CspTrustedSite | CreatedById | N/A | No |
| CspTrustedSite | LastModifiedById | N/A | No |
| CustomPermission | CreatedById | N/A | No |
| CustomPermission | LastModifiedById | N/A | No |
| CustomPermissionDependency | CreatedById | N/A | No |
| CustomPermissionDependency | LastModifiedById | N/A | No |
| DataIntegrationRecordPurchasePermission | CreatedById | N/A | No |
| DataIntegrationRecordPurchasePermission | LastModifiedById | N/A | No |
| DataIntegrationRecordPurchasePermission | UserId | N/A | Yes |
| DataObjectDataChgEvent | CreatedById | N/A | No |
| DataStatistics | UserId | N/A | No |
| DataWeaveResource | CreatedById | N/A | No |
| DataWeaveResource | LastModifiedById | N/A | No |
| DeclinedEventRelation | CreatedById | N/A | No |
| DeclinedEventRelation | LastModifiedById | N/A | No |
| DeclinedEventRelation | RelationId | DeclinedEventRelations | No |
| DeleteEvent | DeletedById | N/A | No |
| DialerCallUsage | CreatedById | N/A | No |
| DialerCallUsage | LastModifiedById | N/A | No |
| DialerCallUsage | OwnerId | N/A | No |
| Document | AuthorId | N/A | No |
| Document | CreatedById | N/A | No |
| Document | FolderId | N/A | No |
| Document | LastModifiedById | N/A | No |
| DocumentAttachmentMap | CreatedById | N/A | No |
| Domain | CreatedById | N/A | No |
| Domain | LastModifiedById | N/A | No |
| DomainSite | CreatedById | N/A | No |
| DomainSite | LastModifiedById | N/A | No |
| EmailBounceEvent | CreatedById | N/A | No |
| EmailCapture | CreatedById | N/A | No |
| EmailCapture | LastModifiedById | N/A | No |
| EmailDomainFilter | CreatedById | N/A | No |
| EmailDomainFilter | LastModifiedById | N/A | No |
| EmailDomainKey | CreatedById | N/A | No |
| EmailDomainKey | LastModifiedById | N/A | No |
| EmailRelay | CreatedById | N/A | No |
| EmailRelay | LastModifiedById | N/A | No |
| EmailServicesAddress | CreatedById | N/A | No |
| EmailServicesAddress | LastModifiedById | N/A | No |
| EmailServicesAddress | RunAsUserId | N/A | No |
| EmailServicesFunction | CreatedById | N/A | No |
| EmailServicesFunction | LastModifiedById | N/A | No |
| EmailStatus | CreatedById | N/A | No |
| EmailStatus | LastModifiedById | N/A | No |
| EmailTemplate | CreatedById | N/A | No |
| EmailTemplate | FolderId | N/A | No |
| EmailTemplate | LastModifiedById | N/A | No |
| EmailTemplate | OwnerId | N/A | No |
| EngmtChannelTypeSettings | CreatedById | N/A | No |
| EngmtChannelTypeSettings | LastModifiedById | N/A | No |
| EnhancedLetterhead | CreatedById | N/A | No |
| EnhancedLetterhead | LastModifiedById | N/A | No |
| Event | CreatedById | N/A | No |
| Event | LastModifiedById | N/A | No |
| Event | OwnerId | N/A | No |
| EventLogFile | CreatedById | N/A | No |
| EventLogFile | LastModifiedById | N/A | No |
| EventRelation | CreatedById | N/A | No |
| EventRelation | LastModifiedById | N/A | No |
| EventRelation | RelationId | EventRelations | Yes |
| EventRelayConfig | CreatedById | N/A | No |
| EventRelayConfig | LastModifiedById | N/A | No |
| EventRelayFeedback | CreatedById | N/A | No |
| EventRelayFeedback | LastModifiedById | N/A | No |
| EventWhoRelation | CreatedById | N/A | No |
| EventWhoRelation | LastModifiedById | N/A | No |
| ExpressionFilter | CreatedById | N/A | No |
| ExpressionFilter | LastModifiedById | N/A | No |
| ExpressionFilterCriteria | CreatedById | N/A | No |
| ExpressionFilterCriteria | LastModifiedById | N/A | No |
| ExtlClntAppOauthConsumer | CreatedById | N/A | No |
| ExtlClntAppOauthConsumer | LastModifiedById | N/A | No |
| ExtlClntAppOauthIpRange | CreatedById | N/A | No |
| ExtlClntAppOauthIpRange | LastModifiedById | N/A | No |
| ExtlClntAppOauthPlcyAttr | CreatedById | N/A | No |
| ExtlClntAppOauthPlcyAttr | LastModifiedById | N/A | No |
| ExtlClntAppOauthPlcyCnfg | CreatedById | N/A | No |
| ExtlClntAppOauthPlcyCnfg | LastModifiedById | N/A | No |
| ExtlClntAppOauthSetAttr | CreatedById | N/A | No |
| ExtlClntAppOauthSetAttr | LastModifiedById | N/A | No |
| ExtlClntAppOauthSettings | CreatedById | N/A | No |
| ExtlClntAppOauthSettings | LastModifiedById | N/A | No |
| ExtlClntAppPlcyCnfg | CreatedById | N/A | No |
| ExtlClntAppPlcyCnfg | LastModifiedById | N/A | No |
| ExtlClntAppSamplePlcyCnfg | CreatedById | N/A | No |
| ExtlClntAppSamplePlcyCnfg | LastModifiedById | N/A | No |
| ExtlClntAppSampleSettings | CreatedById | N/A | No |
| ExtlClntAppSampleSettings | LastModifiedById | N/A | No |
| FeedComment | CreatedById | N/A | Yes |
| FeedComment | InsertedById | N/A | Yes |
| FeedComment | LastEditById | N/A | No |
| FeedComment | ParentId | N/A | No |
| FeedItem | CreatedById | N/A | Yes |
| FeedItem | InsertedById | N/A | No |
| FeedItem | LastEditById | N/A | No |
| FeedItem | ParentId | N/A | Yes |
| FeedLike | CreatedById | N/A | Yes |
| FeedLike | InsertedById | N/A | Yes |
| FeedPollChoice | CreatedById | N/A | No |
| FeedPollVote | CreatedById | N/A | No |
| FeedRevision | CreatedById | N/A | No |
| FeedSignal | CreatedById | N/A | Yes |
| FeedSignal | InsertedById | N/A | Yes |
| FieldDefinition | BusinessOwnerId | N/A | No |
| FieldDefinition | LastModifiedById | N/A | No |
| FieldSecurityClassification | CreatedById | N/A | No |
| FieldSecurityClassification | LastModifiedById | N/A | No |
| FileSearchActivity | CreatedById | N/A | No |
| FileSearchActivity | LastModifiedById | N/A | No |
| FlowExecutionErrorEvent | CreatedById | N/A | No |
| FlowExecutionErrorEvent | InterviewStartedById | N/A | No |
| FlowExecutionErrorEvent | UserId | N/A | No |
| FlowOrchestrationEvent | CreatedById | N/A | No |
| FlowOrchestrationInstance | CreatedById | N/A | No |
| FlowOrchestrationInstance | LastModifiedById | N/A | No |
| FlowOrchestrationInstance | OwnerId | N/A | No |
| FlowOrchestrationLog | CreatedById | N/A | No |
| FlowOrchestrationLog | LastModifiedById | N/A | No |
| FlowOrchestrationStageInstance | CreatedById | N/A | No |
| FlowOrchestrationStageInstance | LastModifiedById | N/A | No |
| FlowOrchestrationStageInstance | OwnerId | N/A | No |
| FlowOrchestrationStepInstance | CreatedById | N/A | No |
| FlowOrchestrationStepInstance | LastModifiedById | N/A | No |
| FlowOrchestrationStepInstance | OwnerId | N/A | No |
| FlowOrchestrationWorkItem | AssigneeId | N/A | Yes |
| FlowOrchestrationWorkItem | CreatedById | N/A | No |
| FlowOrchestrationWorkItem | LastModifiedById | N/A | No |
| FlowOrchestrationWorkItem | OwnerId | N/A | No |
| FlowOrchestrationWorkItem | RelatedRecordId | FlowOrchestrationWorkItems | No |
| FlowTestResult | CreatedById | N/A | No |
| FlowTestResult | LastModifiedById | N/A | No |
| FlowTestResult | OwnerId | N/A | No |
| FlowTestView | CreatedById | N/A | No |
| FlowTestView | LastModifiedById | N/A | No |
| Folder | CreatedById | N/A | No |
| Folder | LastModifiedById | N/A | No |
| FolderedContentDocument | CreatedById | N/A | No |
| FolderedContentDocument | LastModifiedById | N/A | No |
| ForecastingAdjustment | CreatedById | N/A | No |
| ForecastingAdjustment | LastModifiedById | N/A | No |
| ForecastingAdjustment | OwnerId | N/A | No |
| ForecastingCategoryMapping | CreatedById | N/A | No |
| ForecastingCategoryMapping | LastModifiedById | N/A | No |
| ForecastingColumnDefinition | CreatedById | N/A | No |
| ForecastingColumnDefinition | LastModifiedById | N/A | No |
| ForecastingCustomData | CreatedById | N/A | No |
| ForecastingCustomData | ForecastOwnerId | N/A | No |
| ForecastingCustomData | LastModifiedById | N/A | No |
| ForecastingDisplayedFamily | CreatedById | N/A | No |
| ForecastingDisplayedFamily | LastModifiedById | N/A | No |
| ForecastingFact | OwnerId | N/A | No |
| ForecastingFilter | CreatedById | N/A | No |
| ForecastingFilter | LastModifiedById | N/A | No |
| ForecastingFilterCondition | CreatedById | N/A | No |
| ForecastingFilterCondition | LastModifiedById | N/A | No |
| ForecastingGroup | CreatedById | N/A | No |
| ForecastingGroup | LastModifiedById | N/A | No |
| ForecastingGroupItem | CreatedById | N/A | No |
| ForecastingGroupItem | LastModifiedById | N/A | No |
| ForecastingItem | OwnerId | N/A | No |
| ForecastingOwnerAdjustment | CreatedById | N/A | No |
| ForecastingOwnerAdjustment | ForecastOwnerId | N/A | No |
| ForecastingOwnerAdjustment | LastModifiedById | N/A | No |
| ForecastingQuota | CreatedById | N/A | No |
| ForecastingQuota | LastModifiedById | N/A | No |
| ForecastingQuota | QuotaOwnerId | N/A | No |
| ForecastingSourceDefinition | CreatedById | N/A | No |
| ForecastingSourceDefinition | LastModifiedById | N/A | No |
| ForecastingType | CreatedById | N/A | No |
| ForecastingType | LastModifiedById | N/A | No |
| ForecastingTypeSource | CreatedById | N/A | No |
| ForecastingTypeSource | LastModifiedById | N/A | No |
| ForecastingTypeToCategory | CreatedById | N/A | No |
| ForecastingTypeToCategory | LastModifiedById | N/A | No |
| GrantedByLicense | CreatedById | N/A | No |
| GrantedByLicense | LastModifiedById | N/A | No |
| Group | CreatedById | N/A | No |
| Group | LastModifiedById | N/A | No |
| Group | OwnerId | N/A | No |
| Group | RelatedId | N/A | No |
| GroupMember | UserOrGroupId | N/A | Yes |
| Holiday | CreatedById | N/A | No |
| Holiday | LastModifiedById | N/A | No |
| IPAddressRange | CreatedById | N/A | No |
| IPAddressRange | LastModifiedById | N/A | No |
| IdpEventLog | UserId | N/A | No |
| IframeWhiteListUrl | CreatedById | N/A | No |
| IframeWhiteListUrl | LastModifiedById | N/A | No |
| Image | CreatedById | N/A | No |
| Image | LastModifiedById | N/A | No |
| Image | OwnerId | N/A | No |
| InstalledMobileApp | CreatedById | N/A | No |
| InstalledMobileApp | LastModifiedById | N/A | No |
| InstalledMobileApp | UserId | InstalledMobileApps | Yes |
| KnowledgeableUser | UserId | N/A | No |
| Lead | CreatedById | N/A | No |
| Lead | LastModifiedById | N/A | No |
| Lead | OwnerId | N/A | No |
| LeadStatus | CreatedById | N/A | No |
| LeadStatus | LastModifiedById | N/A | No |
| LightningExitByPageMetrics | UserId | N/A | Yes |
| LightningExperienceTheme | CreatedById | N/A | No |
| LightningExperienceTheme | LastModifiedById | N/A | No |
| LightningOnboardingConfig | CreatedById | N/A | No |
| LightningOnboardingConfig | LastModifiedById | N/A | No |
| LightningToggleMetrics | UserId | N/A | Yes |
| LightningUsageByAppTypeMetrics | UserId | N/A | Yes |
| LightningUsageByPageMetrics | UserId | N/A | Yes |
| ListEmail | CreatedById | N/A | No |
| ListEmail | LastModifiedById | N/A | No |
| ListEmail | OwnerId | N/A | No |
| ListEmail | RelatedToId | ListEmails | No |
| ListEmailIndividualRecipient | CreatedById | N/A | No |
| ListEmailIndividualRecipient | LastModifiedById | N/A | No |
| ListEmailRecipientSource | CreatedById | N/A | No |
| ListEmailRecipientSource | LastModifiedById | N/A | No |
| ListEmailSentResult | CreatedById | N/A | No |
| ListEmailSentResult | LastModifiedById | N/A | No |
| ListView | CreatedById | N/A | No |
| ListView | LastModifiedById | N/A | No |
| ListViewChart | CreatedById | N/A | No |
| ListViewChart | LastModifiedById | N/A | No |
| ListViewChart | OwnerId | N/A | Yes |
| Location | CreatedById | N/A | No |
| Location | LastModifiedById | N/A | No |
| Location | OwnerId | N/A | No |
| LocationTrustMeasure | CreatedById | N/A | No |
| LocationTrustMeasure | LastModifiedById | N/A | No |
| LocationTrustMeasure | OwnerId | N/A | No |
| LogoutEventStream | CreatedById | N/A | No |
| LogoutEventStream | UserId | N/A | No |
| MLEngagementEvent | CreatedById | N/A | No |
| MLEngagementEvent | UserId | N/A | No |
| MLModel | CreatedById | N/A | No |
| MLModel | LastModifiedById | N/A | No |
| MLModelFactor | CreatedById | N/A | No |
| MLModelFactor | LastModifiedById | N/A | No |
| MLModelFactorComponent | CreatedById | N/A | No |
| MLModelFactorComponent | LastModifiedById | N/A | No |
| MLModelMetric | CreatedById | N/A | No |
| MLModelMetric | LastModifiedById | N/A | No |
| MLPredictionDefinition | CreatedById | N/A | No |
| MLPredictionDefinition | LastModifiedById | N/A | No |
| MLRecommendationDefinition | CreatedById | N/A | No |
| MLRecommendationDefinition | LastModifiedById | N/A | No |
| ManagedContent | CreatedById | N/A | No |
| ManagedContent | LastModifiedById | N/A | No |
| ManagedContentChannel | CreatedById | N/A | No |
| ManagedContentChannel | LastModifiedById | N/A | No |
| ManagedContentSpace | CreatedById | N/A | No |
| ManagedContentSpace | LastModifiedById | N/A | No |
| ManagedContentVariant | CreatedById | N/A | No |
| ManagedContentVariant | LastModifiedById | N/A | No |
| MatchingInformation | CreatedById | N/A | No |
| MatchingInformation | LastModifiedById | N/A | No |
| MatchingInformation | UserId | N/A | Yes |
| MatchingRule | CreatedById | N/A | No |
| MatchingRule | LastModifiedById | N/A | No |
| MatchingRuleItem | CreatedById | N/A | No |
| MatchingRuleItem | LastModifiedById | N/A | No |
| MlFeatureValueMetric | CreatedById | N/A | No |
| MlFeatureValueMetric | LastModifiedById | N/A | No |
| MobileApplicationDetail | CreatedById | N/A | No |
| MobileApplicationDetail | LastModifiedById | N/A | No |
| MutingPermissionSet | CreatedById | N/A | No |
| MutingPermissionSet | LastModifiedById | N/A | No |
| MyDomainDiscoverableLogin | CreatedById | N/A | No |
| MyDomainDiscoverableLogin | ExecuteApexHandlerAsId | N/A | No |
| MyDomainDiscoverableLogin | LastModifiedById | N/A | No |
| NamedCredential | CreatedById | N/A | No |
| NamedCredential | LastModifiedById | N/A | No |
| Note | CreatedById | N/A | No |
| Note | LastModifiedById | N/A | No |
| Note | OwnerId | N/A | No |
| NoteAndAttachment | CreatedById | N/A | No |
| NoteAndAttachment | LastModifiedById | N/A | No |
| NoteAndAttachment | OwnerId | N/A | No |
| OauthCustomScope | CreatedById | N/A | No |
| OauthCustomScope | LastModifiedById | N/A | No |
| OauthCustomScopeApp | CreatedById | N/A | No |
| OauthCustomScopeApp | LastModifiedById | N/A | No |
| OauthToken | UserId | N/A | No |
| OauthTokenExchHandlerApp | ApexExecutionUserId | N/A | No |
| OauthTokenExchHandlerApp | CreatedById | N/A | No |
| OauthTokenExchHandlerApp | LastModifiedById | N/A | No |
| OauthTokenExchangeHandler | CreatedById | N/A | No |
| OauthTokenExchangeHandler | LastModifiedById | N/A | No |
| ObjectDataImport | CreatedById | N/A | No |
| ObjectDataImport | LastModifiedById | N/A | No |
| ObjectDataImport | OwnerId | N/A | No |
| ObjectDataImportReference | CreatedById | N/A | No |
| ObjectDataImportReference | LastModifiedById | N/A | No |
| OnboardingMetrics | CreatedById | N/A | No |
| OnboardingMetrics | LastModifiedById | N/A | No |
| OnboardingMetrics | UserId | N/A | Yes |
| OpenActivity | CreatedById | N/A | No |
| OpenActivity | LastModifiedById | N/A | No |
| OpenActivity | OwnerId | N/A | No |
| Opportunity | CreatedById | N/A | No |
| Opportunity | LastModifiedById | N/A | No |
| Opportunity | OwnerId | N/A | No |
| OpportunityCompetitor | CreatedById | N/A | No |
| OpportunityCompetitor | LastModifiedById | N/A | No |
| OpportunityContactRole | CreatedById | N/A | No |
| OpportunityContactRole | LastModifiedById | N/A | No |
| OpportunityLineItem | CreatedById | N/A | No |
| OpportunityLineItem | LastModifiedById | N/A | No |
| OpportunityPartner | CreatedById | N/A | No |
| OpportunityPartner | LastModifiedById | N/A | No |
| OpportunityRelatedDeleteLog | CreatedById | N/A | No |
| OpportunityRelatedDeleteLog | LastModifiedById | N/A | No |
| OpportunityStage | CreatedById | N/A | No |
| OpportunityStage | LastModifiedById | N/A | No |
| Opportunity__hd | CreatedById | N/A | No |
| Order | ActivatedById | N/A | No |
| Order | CompanyAuthorizedById | N/A | No |
| Order | CreatedById | N/A | No |
| Order | LastModifiedById | N/A | No |
| Order | OwnerId | N/A | No |
| OrderItem | CreatedById | N/A | No |
| OrderItem | LastModifiedById | N/A | No |
| OrderStatus | CreatedById | N/A | No |
| OrderStatus | LastModifiedById | N/A | No |
| OrgLifecycleNotification | CreatedById | N/A | No |
| OrgMetric | CreatedById | N/A | No |
| OrgMetric | LastModifiedById | N/A | No |
| OrgMetricScanSummary | CreatedById | N/A | No |
| OrgMetricScanSummary | LastModifiedById | N/A | No |
| Organization | CreatedById | N/A | No |
| Organization | LastModifiedById | N/A | No |
| OutgoingEmailRelation | RelationId | OutgoingEmailRelations | No |
| OwnedContentDocument | CreatedById | N/A | No |
| OwnedContentDocument | LastModifiedById | N/A | No |
| OwnedContentDocument | OwnerId | OwnedContentDocuments | Yes |
| Partner | CreatedById | N/A | No |
| Partner | LastModifiedById | N/A | No |
| PartnerRole | CreatedById | N/A | No |
| PartnerRole | LastModifiedById | N/A | No |
| PipelineInspMetricConfig | CreatedById | N/A | No |
| PipelineInspMetricConfig | LastModifiedById | N/A | No |
| PipelineInspectionListView | CreatedById | N/A | No |
| PipelineInspectionListView | LastModifiedById | N/A | No |
| PipelineInspectionListView | UserId | N/A | No |
| PipelineInspectionSumField | CreatedById | N/A | No |
| PipelineInspectionSumField | LastModifiedById | N/A | No |
| Pricebook2 | CreatedById | N/A | No |
| Pricebook2 | LastModifiedById | N/A | No |
| PricebookEntry | CreatedById | N/A | No |
| PricebookEntry | LastModifiedById | N/A | No |
| Product2 | CreatedById | N/A | No |
| Product2 | LastModifiedById | N/A | No |
| Prompt | CreatedById | N/A | No |
| Prompt | LastModifiedById | N/A | No |
| PromptAction | CreatedById | N/A | No |
| PromptAction | LastModifiedById | N/A | No |
| PromptAction | OwnerId | N/A | No |
| PromptAction | UserId | N/A | Yes |
| PromptError | CreatedById | N/A | No |
| PromptError | LastModifiedById | N/A | No |
| PromptError | OwnerId | N/A | No |
| PromptVersion | CreatedById | N/A | No |
| PromptVersion | LastModifiedById | N/A | No |
| PromptVersion | PublishedByUserId | N/A | No |
| PushTopic | CreatedById | N/A | No |
| PushTopic | LastModifiedById | N/A | No |
| QuickText | CreatedById | N/A | No |
| QuickText | LastModifiedById | N/A | No |
| QuickText | OwnerId | N/A | No |
| QuickTextUsage | CreatedById | N/A | No |
| QuickTextUsage | LastModifiedById | N/A | No |
| QuickTextUsage | OwnerId | N/A | No |
| QuickTextUsage | UserId | N/A | No |
| Quote | CreatedById | N/A | No |
| Quote | LastModifiedById | N/A | No |
| Quote | OwnerId | N/A | No |
| QuoteDocument | CreatedById | N/A | No |
| QuoteDocument | LastModifiedById | N/A | No |
| QuoteLineItem | CreatedById | N/A | No |
| QuoteLineItem | LastModifiedById | N/A | No |
| QuoteTemplateRichTextData | CreatedById | N/A | No |
| QuoteTemplateRichTextData | LastModifiedById | N/A | No |
| RecentFieldChange | ValueChangedById | N/A | No |
| Recommendation | CreatedById | N/A | No |
| Recommendation | LastModifiedById | N/A | No |
| RecommendationResponse | CreatedById | N/A | No |
| RecommendationResponse | LastModifiedById | N/A | No |
| RecordAction | CreatedById | N/A | No |
| RecordAction | LastModifiedById | N/A | No |
| RecordAction | RecordId | RecordActions | Yes |
| RecordType | CreatedById | N/A | No |
| RecordType | LastModifiedById | N/A | No |
| SPSamlAttributes | CreatedById | N/A | No |
| SPSamlAttributes | LastModifiedById | N/A | No |
| SamlSsoConfig | CreatedById | N/A | No |
| SamlSsoConfig | ExecutionUserId | N/A | No |
| SamlSsoConfig | LastModifiedById | N/A | No |
| Scorecard | CreatedById | N/A | No |
| Scorecard | LastModifiedById | N/A | No |
| Scorecard | OwnerId | N/A | No |
| ScorecardAssociation | CreatedById | N/A | No |
| ScorecardAssociation | LastModifiedById | N/A | No |
| ScorecardMetric | CreatedById | N/A | No |
| ScorecardMetric | LastModifiedById | N/A | No |
| SecurityCustomBaseline | CreatedById | N/A | No |
| SecurityCustomBaseline | LastModifiedById | N/A | No |
| ServiceSetupProvisioning | CreatedById | N/A | No |
| ServiceSetupProvisioning | LastModifiedById | N/A | No |
| SessionPermSetActivation | CreatedById | N/A | No |
| SessionPermSetActivation | LastModifiedById | N/A | No |
| SessionPermSetActivation | UserId | SessionPermSetActivations | Yes |
| SharingRecordCollection | CreatedById | N/A | No |
| SharingRecordCollection | LastModifiedById | N/A | No |
| SharingRecordCollection | OwnerId | N/A | No |
| SharingRecordCollectionItem | CreatedById | N/A | No |
| SharingRecordCollectionItem | LastModifiedById | N/A | No |
| SharingRecordCollectionMember | CreatedById | N/A | No |
| SharingRecordCollectionMember | LastModifiedById | N/A | No |
| SharingRecordCollectionMember | UserOrGroupId | N/A | Yes |
| SocialPersona | CreatedById | N/A | No |
| SocialPersona | LastModifiedById | N/A | No |
| SocialPost | CreatedById | N/A | No |
| SocialPost | DeletedById | N/A | No |
| SocialPost | HiddenById | N/A | No |
| SocialPost | LastModifiedById | N/A | No |
| SocialPost | OwnerId | N/A | No |
| Solution | CreatedById | N/A | No |
| Solution | LastModifiedById | N/A | No |
| Solution | OwnerId | N/A | No |
| SolutionStatus | CreatedById | N/A | No |
| SolutionStatus | LastModifiedById | N/A | No |
| StaticResource | CreatedById | N/A | No |
| StaticResource | LastModifiedById | N/A | No |
| TableauHostMapping | CreatedById | N/A | No |
| TableauHostMapping | LastModifiedById | N/A | No |
| TableauHostMapping | OwnerId | N/A | No |
| Task | CreatedById | N/A | No |
| Task | LastModifiedById | N/A | No |
| Task | OwnerId | N/A | No |
| TaskPriority | CreatedById | N/A | No |
| TaskPriority | LastModifiedById | N/A | No |
| TaskRelation | CreatedById | N/A | No |
| TaskRelation | LastModifiedById | N/A | No |
| TaskStatus | CreatedById | N/A | No |
| TaskStatus | LastModifiedById | N/A | No |
| TaskWhoRelation | CreatedById | N/A | No |
| TaskWhoRelation | LastModifiedById | N/A | No |
| TenantUsageEntitlement | CreatedById | N/A | No |
| TenantUsageEntitlement | LastModifiedById | N/A | No |
| ThirdPartyAccountLink | UserId | N/A | No |
| TodayGoal | CreatedById | N/A | No |
| TodayGoal | LastModifiedById | N/A | No |
| TodayGoal | OwnerId | N/A | No |
| TodayGoal | UserId | N/A | Yes |
| Topic | CreatedById | N/A | No |
| TopicUserEvent | UserId | N/A | No |
| Translation | CreatedById | N/A | No |
| Translation | LastModifiedById | N/A | No |
| UiFormulaCriterion | CreatedById | N/A | No |
| UiFormulaCriterion | LastModifiedById | N/A | No |
| UiFormulaRule | CreatedById | N/A | No |
| UiFormulaRule | LastModifiedById | N/A | No |
| User | CreatedById | N/A | No |
| User | DelegatedApproverId | DelegatedUsers | No |
| User | LastModifiedById | N/A | No |
| User | ManagerId | ManagedUsers | No |
| UserDefinedLabel | CreatedById | N/A | No |
| UserDefinedLabel | LastModifiedById | N/A | No |
| UserDefinedLabel | OwnerId | N/A | No |
| UserDefinedLabelAssignment | CreatedById | N/A | No |
| UserDefinedLabelAssignment | LastModifiedById | N/A | No |
| UserDefinedLabelAssignment | OwnerId | N/A | No |
| UserEmailPreferredPerson | CreatedById | N/A | No |
| UserEmailPreferredPerson | LastModifiedById | N/A | No |
| UserEmailPreferredPerson | OwnerId | N/A | No |
| UserEmailPreferredPerson | PersonRecordId | PersonRecord | Yes |
| UserEntityAccess | UserId | UserEntityAccessRights | No |
| UserFieldAccess | UserId | UserFieldAccessRights | No |
| UserListView | CreatedById | N/A | No |
| UserListView | LastModifiedById | N/A | No |
| UserListView | UserId | N/A | Yes |
| UserListViewCriterion | CreatedById | N/A | No |
| UserListViewCriterion | LastModifiedById | N/A | No |
| UserPackageLicense | CreatedById | N/A | No |
| UserPackageLicense | LastModifiedById | N/A | No |
| UserPackageLicense | UserId | N/A | Yes |
| UserPrioritizedRecord | CreatedById | N/A | No |
| UserPrioritizedRecord | LastModifiedById | N/A | No |
| UserPrioritizedRecord | OwnerId | N/A | No |
| UserProvAccount | CreatedById | N/A | No |
| UserProvAccount | LastModifiedById | N/A | No |
| UserProvAccount | SalesforceUserId | N/A | No |
| UserProvAccountStaging | CreatedById | N/A | No |
| UserProvAccountStaging | LastModifiedById | N/A | No |
| UserProvAccountStaging | SalesforceUserId | N/A | No |
| UserProvMockTarget | CreatedById | N/A | No |
| UserProvMockTarget | LastModifiedById | N/A | No |
| UserRecordAccess | UserId | N/A | No |
| UserRole | ForecastUserId | N/A | No |
| UserRole | LastModifiedById | N/A | No |
| UserRole | PortalAccountOwnerId | N/A | No |
| VideoCall | CreatedById | N/A | No |
| VideoCall | HostId | Host | No |
| VideoCall | LastModifiedById | N/A | No |
| VideoCall | OwnerId | N/A | No |
| VideoCallParticipant | CreatedById | N/A | No |
| VideoCallParticipant | LastModifiedById | N/A | No |
| VideoCallParticipant | RelatedPersonId | RelatedPersons | No |
| VideoCallRecording | CreatedById | N/A | No |
| VideoCallRecording | LastModifiedById | N/A | No |
| VideoVendorAdminConsent | CreatedById | N/A | No |
| VideoVendorAdminConsent | LastModifiedById | N/A | No |
| VoiceCall | CreatedById | N/A | No |
| VoiceCall | LastModifiedById | N/A | No |
| VoiceCall | OwnerId | N/A | No |
| VoiceCall | UserId | VoiceCalls | No |
| VoiceCallRecording | CreatedById | N/A | No |
| VoiceCallRecording | LastModifiedById | N/A | No |
| VoiceCallRecording | OwnerId | N/A | No |
| VoiceVendorInfo | CreatedById | N/A | No |
| VoiceVendorInfo | LastModifiedById | N/A | No |
| WaveAutoInstallRequest | CreatedById | N/A | No |
| WaveAutoInstallRequest | LastModifiedById | N/A | No |
| WaveCompatibilityCheckItem | CreatedById | N/A | No |
| WaveCompatibilityCheckItem | LastModifiedById | N/A | No |
| WorkAccess | CreatedById | N/A | No |
| WorkAccess | LastModifiedById | N/A | No |
| WorkAccess | OwnerId | N/A | No |
| WorkBadge | CreatedById | N/A | No |
| WorkBadge | GiverId | N/A | No |
| WorkBadge | LastModifiedById | N/A | No |
| WorkBadge | RecipientId | Badges | No |
| WorkBadgeDefinition | CreatedById | N/A | No |
| WorkBadgeDefinition | LastModifiedById | N/A | No |
| WorkBadgeDefinition | OwnerId | N/A | No |
| WorkOrder | CreatedById | N/A | No |
| WorkOrder | LastModifiedById | N/A | No |
| WorkOrder | OwnerId | N/A | No |
| WorkOrderLineItem | CreatedById | N/A | No |
| WorkOrderLineItem | LastModifiedById | N/A | No |
| WorkOrderLineItemStatus | CreatedById | N/A | No |
| WorkOrderLineItemStatus | LastModifiedById | N/A | No |
| WorkOrderStatus | CreatedById | N/A | No |
| WorkOrderStatus | LastModifiedById | N/A | No |
| WorkThanks | CreatedById | N/A | No |
| WorkThanks | GiverId | GivenThanks | No |
| WorkThanks | LastModifiedById | N/A | No |
| WorkThanks | OwnerId | N/A | No |
| bpmpro3__A2_Labor_Only_Item__c | CreatedById | N/A | No |
| bpmpro3__A2_Labor_Only_Item__c | LastModifiedById | N/A | No |
| bpmpro3__A3_LaborItems__c | CreatedById | N/A | No |
| bpmpro3__A3_LaborItems__c | LastModifiedById | N/A | No |
| bpmpro3__AddOn_Product__c | CreatedById | N/A | No |
| bpmpro3__AddOn_Product__c | LastModifiedById | N/A | No |
| bpmpro3__AddOn_Product__c | OwnerId | N/A | No |
| bpmpro3__Add_On_CPI__c | CreatedById | N/A | No |
| bpmpro3__Add_On_CPI__c | LastModifiedById | N/A | No |
| bpmpro3__Add_On_CPI__c | OwnerId | N/A | No |
| bpmpro3__Back_Charge__c | CreatedById | N/A | No |
| bpmpro3__Back_Charge__c | LastModifiedById | N/A | No |
| bpmpro3__Building_Material__c | CreatedById | N/A | No |
| bpmpro3__Building_Material__c | LastModifiedById | N/A | No |
| bpmpro3__Building_Material__c | OwnerId | N/A | No |
| bpmpro3__Building_Permit_c__c | CreatedById | N/A | No |
| bpmpro3__Building_Permit_c__c | LastModifiedById | N/A | No |
| bpmpro3__CPI_AddOn_Product_Catalog__c | CreatedById | N/A | No |
| bpmpro3__CPI_AddOn_Product_Catalog__c | LastModifiedById | N/A | No |
| bpmpro3__CPI_AddOn_Product_Catalog__c | OwnerId | N/A | No |
| bpmpro3__CPI_Configure_Pricing_Items__c | CreatedById | N/A | No |
| bpmpro3__CPI_Configure_Pricing_Items__c | LastModifiedById | N/A | No |
| bpmpro3__CPI_Preset_Product_Add_On__c | CreatedById | N/A | No |
| bpmpro3__CPI_Preset_Product_Add_On__c | LastModifiedById | N/A | No |
| bpmpro3__CPI_Preset_Product_Add_On__c | OwnerId | N/A | No |
| bpmpro3__Company_Settings__c | CreatedById | N/A | No |
| bpmpro3__Company_Settings__c | LastModifiedById | N/A | No |
| bpmpro3__Company_Settings__c | OwnerId | N/A | No |
| bpmpro3__Contact_CSV_Import__c | CreatedById | N/A | No |
| bpmpro3__Contact_CSV_Import__c | LastModifiedById | N/A | No |
| bpmpro3__Contact_CSV_Import__c | OwnerId | N/A | No |
| bpmpro3__Deal_Sheet__c | CreatedById | N/A | No |
| bpmpro3__Deal_Sheet__c | LastModifiedById | N/A | No |
| bpmpro3__Deal_Sheet__c | OwnerId | N/A | No |
| bpmpro3__Dealer_Item__c | CreatedById | N/A | No |
| bpmpro3__Dealer_Item__c | LastModifiedById | N/A | No |
| bpmpro3__Dealer_Item__c | OwnerId | N/A | No |
| bpmpro3__Inspections__c | CreatedById | N/A | No |
| bpmpro3__Inspections__c | LastModifiedById | N/A | No |
| bpmpro3__Invoice_Payment__c | CreatedById | N/A | No |
| bpmpro3__Invoice_Payment__c | LastModifiedById | N/A | No |
| bpmpro3__Invoice_Payment__c | OwnerId | N/A | No |
| bpmpro3__LaborItem_AddOn_Junction__c | CreatedById | N/A | No |
| bpmpro3__LaborItem_AddOn_Junction__c | LastModifiedById | N/A | No |
| bpmpro3__LaborItem_AddOn_Junction__c | OwnerId | N/A | No |
| bpmpro3__Labor_Charge__c | CreatedById | N/A | No |
| bpmpro3__Labor_Charge__c | LastModifiedById | N/A | No |
| bpmpro3__Labor_Ticket__c | CreatedById | N/A | No |
| bpmpro3__Labor_Ticket__c | LastModifiedById | N/A | No |
| bpmpro3__Labor_Ticket__c | OwnerId | N/A | No |
| bpmpro3__Material__c | CreatedById | N/A | No |
| bpmpro3__Material__c | LastModifiedById | N/A | No |
| bpmpro3__Orders__c | CreatedById | N/A | No |
| bpmpro3__Orders__c | LastModifiedById | N/A | No |
| bpmpro3__PP_Preset_Product__c | CreatedById | N/A | No |
| bpmpro3__PP_Preset_Product__c | LastModifiedById | N/A | No |
| bpmpro3__PP_Preset_Product__c | OwnerId | N/A | No |
| bpmpro3__PaymentBPM__c | CreatedById | N/A | No |
| bpmpro3__PaymentBPM__c | LastModifiedById | N/A | No |
| bpmpro3__Permit_Fee__c | CreatedById | N/A | No |
| bpmpro3__Permit_Fee__c | LastModifiedById | N/A | No |
| bpmpro3__ProductItem__c | CreatedById | N/A | No |
| bpmpro3__ProductItem__c | LastModifiedById | N/A | No |
| bpmpro3__Project_Contact_Role__c | CreatedById | N/A | No |
| bpmpro3__Project_Contact_Role__c | LastModifiedById | N/A | No |
| bpmpro3__Project_Contact_Role__c | OwnerId | N/A | No |
| bpmpro3__Project_Invoice__c | CreatedById | N/A | No |
| bpmpro3__Project_Invoice__c | LastModifiedById | N/A | No |
| bpmpro3__Project_Stage_Assignment_Team_Member__c | CreatedById | N/A | No |
| bpmpro3__Project_Stage_Assignment_Team_Member__c | LastModifiedById | N/A | No |
| bpmpro3__Project_Stage_Assignment_Team_Member__c | OwnerId | N/A | No |
| bpmpro3__Project_Stage_Assignment_Team_Member__c | bpmpro3__PSATM_Team_Member__c | bpmpro3__PSATM_Team_Member_Assignments__r | No |
| bpmpro3__Project_Stage_Assignment__c | CreatedById | N/A | No |
| bpmpro3__Project_Stage_Assignment__c | LastModifiedById | N/A | No |
| bpmpro3__Project_Stage_Assignment__c | bpmpro3__PSA_Assigned_By__c | bpmpro3__Project_Stages_Assignment__r | No |
| bpmpro3__Project_Stage_Assignment__c | bpmpro3__PSA_Assigned_To__c | bpmpro3__Assigned_Project_Stage_Assignments__r | No |
| bpmpro3__Project_Stage_Assignment__c | bpmpro3__PSA_Completed_By__c | bpmpro3__Completed_Project_Stage_Assignments__r | No |
| bpmpro3__Project_Stage_Team_Member__c | CreatedById | N/A | No |
| bpmpro3__Project_Stage_Team_Member__c | LastModifiedById | N/A | No |
| bpmpro3__Project_Stage_Team_Member__c | bpmpro3__PSTM_Team_Member__c | bpmpro3__Stage_Team_Assignments__r | No |
| bpmpro3__Project_Stage__c | CreatedById | N/A | No |
| bpmpro3__Project_Stage__c | LastModifiedById | N/A | No |
| bpmpro3__Project_Stage__c | OwnerId | N/A | No |
| bpmpro3__Project__c | CreatedById | N/A | No |
| bpmpro3__Project__c | LastModifiedById | N/A | No |
| bpmpro3__Property__c | CreatedById | N/A | No |
| bpmpro3__Property__c | LastModifiedById | N/A | No |
| bpmpro3__Property__c | OwnerId | N/A | No |
| bpmpro3__Prospect__c | CreatedById | N/A | No |
| bpmpro3__Prospect__c | LastModifiedById | N/A | No |
| bpmpro3__Prospect__c | OwnerId | N/A | No |
| bpmpro3__Prospect__c | bpmpro3__PRT_Rainmaker__c | bpmpro3__Prospects__r | No |
| bpmpro3__Reimbursement__c | CreatedById | N/A | No |
| bpmpro3__Reimbursement__c | LastModifiedById | N/A | No |
| bpmpro3__SalesDoc_Clauses__c | CreatedById | N/A | No |
| bpmpro3__SalesDoc_Clauses__c | LastModifiedById | N/A | No |
| bpmpro3__SalesDoc_Clauses__c | OwnerId | N/A | No |
| bpmpro3__SalesDoc_Credit_Memo__c | CreatedById | N/A | No |
| bpmpro3__SalesDoc_Credit_Memo__c | LastModifiedById | N/A | No |
| bpmpro3__SalesDoc_Credit_Memo__c | OwnerId | N/A | No |
| bpmpro3__SalesDoc_Invoice__c | CreatedById | N/A | No |
| bpmpro3__SalesDoc_Invoice__c | LastModifiedById | N/A | No |
| bpmpro3__Sales_Commission_Payout__c | CreatedById | N/A | No |
| bpmpro3__Sales_Commission_Payout__c | LastModifiedById | N/A | No |
| bpmpro3__Sales_Commission_Payout__c | OwnerId | N/A | No |
| bpmpro3__Sales_Commission_Payout__c | bpmpro3__SCP_PaidBy__c | bpmpro3__Sales_Commission_Payouts__r | No |
| bpmpro3__Sales_Commission_Table__c | CreatedById | N/A | No |
| bpmpro3__Sales_Commission_Table__c | LastModifiedById | N/A | No |
| bpmpro3__Sales_Commission_Table__c | OwnerId | N/A | No |
| bpmpro3__Sales_Commission__c | CreatedById | N/A | No |
| bpmpro3__Sales_Commission__c | LastModifiedById | N/A | No |
| bpmpro3__Sales_Document__c | CreatedById | N/A | No |
| bpmpro3__Sales_Document__c | LastModifiedById | N/A | No |
| bpmpro3__Service_Ticket__c | CreatedById | N/A | No |
| bpmpro3__Service_Ticket__c | LastModifiedById | N/A | No |
| bpmpro3__Service_Ticket__c | OwnerId | N/A | No |
| bpmpro3__Service_Ticket__c | bpmpro3__SVC_Assigned_To__c | bpmpro3__Service_Tickets__r | No |
| bpmpro3__Service_Ticket__c | bpmpro3__SVC_Created_by_User__c | bpmpro3__Service_Tickets_Created_By__r | No |
| bpmpro3__SpecialtyItem__c | CreatedById | N/A | No |
| bpmpro3__SpecialtyItem__c | LastModifiedById | N/A | No |
| bpmpro3__Time_Entry__c | CreatedById | N/A | No |
| bpmpro3__Time_Entry__c | LastModifiedById | N/A | No |
| bpmpro3__Timesheet__c | CreatedById | N/A | No |
| bpmpro3__Timesheet__c | LastModifiedById | N/A | No |
| bpmpro3__Timesheet__c | OwnerId | N/A | No |
| bpmpro3__Warehouse_Log__c | CreatedById | N/A | No |
| bpmpro3__Warehouse_Log__c | LastModifiedById | N/A | No |
| bpmpro3__Work_Assignment__c | CreatedById | N/A | No |
| bpmpro3__Work_Assignment__c | LastModifiedById | N/A | No |
| dfsle__AgreementConfiguration__c | CreatedById | N/A | No |
| dfsle__AgreementConfiguration__c | LastModifiedById | N/A | No |
| dfsle__AgreementConfiguration__c | OwnerId | N/A | No |
| dfsle__BulkList__c | CreatedById | N/A | No |
| dfsle__BulkList__c | LastModifiedById | N/A | No |
| dfsle__BulkList__c | OwnerId | N/A | No |
| dfsle__BulkStatus__c | CreatedById | N/A | No |
| dfsle__BulkStatus__c | LastModifiedById | N/A | No |
| dfsle__BulkStatus__c | OwnerId | N/A | No |
| dfsle__CustomParameterMap__c | CreatedById | N/A | No |
| dfsle__CustomParameterMap__c | LastModifiedById | N/A | No |
| dfsle__CustomRecipient__c | CreatedById | N/A | No |
| dfsle__CustomRecipient__c | LastModifiedById | N/A | No |
| dfsle__Document__c | CreatedById | N/A | No |
| dfsle__Document__c | LastModifiedById | N/A | No |
| dfsle__EnvelopeConfigurationDocument__c | CreatedById | N/A | No |
| dfsle__EnvelopeConfigurationDocument__c | LastModifiedById | N/A | No |
| dfsle__EnvelopeConfigurationRecipient__c | CreatedById | N/A | No |
| dfsle__EnvelopeConfigurationRecipient__c | LastModifiedById | N/A | No |
| dfsle__EnvelopeConfiguration__c | CreatedById | N/A | No |
| dfsle__EnvelopeConfiguration__c | LastModifiedById | N/A | No |
| dfsle__EnvelopeConfiguration__c | OwnerId | N/A | No |
| dfsle__EnvelopeConfiguration__c | dfsle__Sender__c | dfsle__DocuSign_Envelope_Templates__r | No |
| dfsle__EnvelopeLocalization__c | CreatedById | N/A | No |
| dfsle__EnvelopeLocalization__c | LastModifiedById | N/A | No |
| dfsle__EnvelopeLocalization__c | OwnerId | N/A | No |
| dfsle__EnvelopeStatus__c | CreatedById | N/A | No |
| dfsle__EnvelopeStatus__c | LastModifiedById | N/A | No |
| dfsle__EnvelopeStatus__c | OwnerId | N/A | No |
| dfsle__Envelope__c | CreatedById | N/A | No |
| dfsle__Envelope__c | LastModifiedById | N/A | No |
| dfsle__Envelope__c | OwnerId | N/A | No |
| dfsle__Envelope__c | dfsle__Sender__c | dfsle__DocuSign_Envelopes__r | No |
| dfsle__GenTemplate__c | CreatedById | N/A | No |
| dfsle__GenTemplate__c | LastModifiedById | N/A | No |
| dfsle__GenTemplate__c | OwnerId | N/A | No |
| dfsle__Jobs__c | CreatedById | N/A | No |
| dfsle__Jobs__c | LastModifiedById | N/A | No |
| dfsle__Jobs__c | OwnerId | N/A | No |
| dfsle__Log__c | CreatedById | N/A | No |
| dfsle__Log__c | LastModifiedById | N/A | No |
| dfsle__Log__c | OwnerId | N/A | No |
| dfsle__RecipientStatus__c | CreatedById | N/A | No |
| dfsle__RecipientStatus__c | LastModifiedById | N/A | No |
| dfsle__Recipient__c | CreatedById | N/A | No |
| dfsle__Recipient__c | LastModifiedById | N/A | No |
| inov8__PMT_Error_Log__c | CreatedById | N/A | No |
| inov8__PMT_Error_Log__c | LastModifiedById | N/A | No |
| inov8__PMT_Error_Log__c | OwnerId | N/A | No |
| inov8__PMT_Phase__c | CreatedById | N/A | No |
| inov8__PMT_Phase__c | LastModifiedById | N/A | No |
| inov8__PMT_Program__c | CreatedById | N/A | No |
| inov8__PMT_Program__c | LastModifiedById | N/A | No |
| inov8__PMT_Program__c | OwnerId | N/A | No |
| inov8__PMT_Project__c | CreatedById | N/A | No |
| inov8__PMT_Project__c | Installation_Person__c | PMT_Projects__r | No |
| inov8__PMT_Project__c | LastModifiedById | N/A | No |
| inov8__PMT_Project__c | OwnerId | N/A | No |
| inov8__PMT_Project__c | Project_Manager__c | PMT_Projects1__r | No |
| inov8__PMT_Project__c | inov8__PMO_Contact__c | inov8__Project__r | No |
| inov8__PMT_Resource_Allocation__c | CreatedById | N/A | No |
| inov8__PMT_Resource_Allocation__c | LastModifiedById | N/A | No |
| inov8__PMT_Resource_Availability__c | CreatedById | N/A | No |
| inov8__PMT_Resource_Availability__c | LastModifiedById | N/A | No |
| inov8__PMT_Resource_Availability__c | OwnerId | N/A | No |
| inov8__PMT_Resource_Availability__c | inov8__User__c | inov8__Resource_Availability__r | No |
| inov8__PMT_Task__c | CreatedById | N/A | No |
| inov8__PMT_Task__c | LastModifiedById | N/A | No |
| inov8__PMT_Task__c | inov8__Assigned_To1__c | inov8__PMT_Tasks__r | No |

---

## Role (`UserRole`) {#userrole}

| Property | Value |
|----------|-------|
| Custom | No |
| Key Prefix | 00E |
| Fields | 16 |
| Relationships | 9 |
| Record Types | None |

### Fields

| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |
|-------|-------|---------|---------------|----------|--------|-----------|
| `Id` | Role ID | id | `uuid` |  |  |  |
| `Name` | Name | string | `varchar(80)` | Yes |  |  |
| `ParentRoleId` | Parent Role ID | reference | `uuid` |  |  | -> UserRole (Lookup) |
| `RollupDescription` | Description | string | `varchar(80)` |  |  |  |
| `OpportunityAccessForAccountOwner` | Opportunity Access Level for Account Owner | picklist | `text` | Yes |  |  |
| `CaseAccessForAccountOwner` | Case Access Level for Account Owner | picklist | `text` |  |  |  |
| `ContactAccessForAccountOwner` | Contact Access Level for Account Owner | picklist | `text` |  |  |  |
| `ForecastUserId` | User ID | reference | `uuid` |  |  | -> User (Lookup) |
| `MayForecastManagerShare` | May Forecast Manager Share | boolean | `boolean` |  |  |  |
| `LastModifiedDate` | Last Modified Date | datetime | `timestamptz` |  |  |  |
| `LastModifiedById` | Last Modified By ID | reference | `uuid` |  |  | -> User (Lookup) |
| `SystemModstamp` | System Modstamp | datetime | `timestamptz` |  |  |  |
| `DeveloperName` | Developer Name | string | `varchar(80)` |  |  |  |
| `PortalAccountId` | Account ID | reference | `uuid` |  |  | -> Account (Lookup) |
| `PortalType` | Portal Type | picklist | `text` |  |  |  |
| `PortalAccountOwnerId` | User ID | reference | `uuid` |  |  | -> User (Lookup) |

### Picklist Values

**Opportunity Access Level for Account Owner** (`OpportunityAccessForAccountOwner`):
- Private = `None`
- Read Only = `Read`
- Read/Write = `Edit`

**Case Access Level for Account Owner** (`CaseAccessForAccountOwner`):
- Private = `None`
- Read Only = `Read`
- Read/Write = `Edit`

**Contact Access Level for Account Owner** (`ContactAccessForAccountOwner`):
- Private = `None`
- Read Only = `Read`
- Read/Write = `Edit`

**Portal Type** (`PortalType`):
- None = `None`
- Customer Portal = `CustomerPortal`
- Partner Portal = `Partner`

### Child Relationships

| Child Object | Field | Relationship | Cascade Delete |
|-------------|-------|-------------|----------------|
| Group | RelatedId | N/A | No |
| Name | UserRoleId | N/A | No |
| User | UserRoleId | Users | No |
| UserRole | ParentRoleId | N/A | No |

---
