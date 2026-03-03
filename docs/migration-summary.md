# Migration Summary

> Generated: 2026-02-24T02:15:14.967Z

## Org Overview

| Metric | Count |
|--------|-------|
| Custom Objects | 150 |
| Standard Objects (in use) | 25 |
| Total Fields | 5104 |
| Total Relationships | 5735 |
| Active Flows | 47 |
| Active Validation Rules | 34 |
| Workflow Rules | 0 |
| Apex Triggers | 44 |
| Apex Classes | 1624 |
| Approval Processes | 0 |

## Object Priority Matrix

Objects ranked by migration complexity (fields + relationships + automation):

| Object | Fields | Relationships | Automation | Priority |
|--------|--------|--------------|------------|----------|
| User | 195 | 1187 | 1 | **High** |
| Contact | 393 | 123 | 5 | **High** |
| Account | 181 | 98 | 2 | **High** |
| Opportunity | 142 | 69 | 1 | **High** |
| Survey__c | 213 | 34 | 0 | **High** |
| pmdm__ProgramEngagement__c | 174 | 48 | 0 | **High** |
| Lead | 74 | 58 | 2 | **High** |
| Interview__c | 120 | 27 | 0 | **High** |
| Application__c | 101 | 35 | 0 | **High** |
| npsp__DataImport__c | 94 | 33 | 1 | **High** |
| Case | 49 | 48 | 0 | **High** |
| mone__Mailchimp_List__c | 62 | 39 | 1 | **High** |
| Employment__c | 70 | 37 | 0 | **High** |
| Campaign | 41 | 40 | 2 | **High** |
| mone__Mailchimp_Member__c | 53 | 36 | 1 | **High** |
| mone__Mailchimp_Campaign__c | 62 | 33 | 0 | **High** |
| npo02__Household__c | 55 | 32 | 1 | **High** |
| npe01__OppPayment__c | 55 | 30 | 1 | **High** |
| mone__Mailchimp_Email_Activity__c | 51 | 34 | 0 | **High** |
| Contract | 47 | 34 | 0 | **High** |
| npe03__Recurring_Donation__c | 40 | 33 | 1 | **High** |
| Order | 45 | 33 | 0 | **High** |
| Enrollment__c | 42 | 33 | 0 | **High** |
| GW_Volunteers__Volunteer_Hours__c | 28 | 34 | 2 | **High** |
| Intake__c | 40 | 33 | 0 | **High** |
| Asset | 35 | 35 | 0 | **High** |
| Event | 53 | 26 | 0 | **High** |
| GW_Volunteers__Volunteer_Job__c | 28 | 35 | 1 | **High** |
| Program__c | 29 | 37 | 0 | **High** |
| npsp__Address__c | 40 | 28 | 1 | **High** |
| npsp__Engagement_Plan__c | 20 | 38 | 1 | **High** |
| pmdm__ServiceSchedule__c | 29 | 36 | 0 | **High** |
| Task | 44 | 26 | 1 | **High** |
| npsp__General_Accounting_Unit__c | 29 | 32 | 1 | **High** |
| pmdm__ServiceDelivery__c | 26 | 32 | 1 | **High** |
| npe03__Recurring_Donations_Settings__c | 48 | 23 | 0 | **High** |
| pmdm__ProgramCohort__c | 34 | 30 | 0 | **High** |
| npo02__Households_Settings__c | 47 | 23 | 0 | **High** |
| pmdm__ServiceParticipant__c | 18 | 35 | 1 | **High** |
| pmdm__ServiceSession__c | 23 | 35 | 0 | **High** |
| Weekly_Report__c | 39 | 26 | 0 | **High** |
| GW_Volunteers__Volunteer_Shift__c | 24 | 33 | 0 | **High** |
| Referral__c | 20 | 35 | 0 | **High** |
| npe01__Contacts_And_Orgs_Settings__c | 42 | 23 | 0 | **High** |
| npsp__Engagement_Plan_Template__c | 19 | 34 | 0 | **High** |
| mone__Mailchimp_Import__c | 32 | 27 | 0 | **High** |
| Candidates__c | 23 | 31 | 0 | **High** |
| ContentVersion | 43 | 21 | 0 | **High** |
| docebo_v3__Course__c | 26 | 29 | 0 | **High** |
| docebo_v3__CourseEnrollment__c | 23 | 28 | 1 | **High** |
| npsp__Engagement_Plan_Task__c | 19 | 30 | 1 | **High** |
| Attendance__c | 29 | 27 | 0 | **High** |
| npsp__Level__c | 20 | 29 | 1 | **High** |
| npsp__Grant_Deadline__c | 15 | 31 | 1 | **High** |
| docebo_v3__LearningPlan__c | 25 | 28 | 0 | **High** |
| GW_Volunteers__Volunteer_Recurrence_Schedule__c | 20 | 28 | 1 | **High** |
| npe4__Relationship__c | 18 | 29 | 1 | **High** |
| npe5__Affiliation__c | 20 | 28 | 1 | **High** |
| pmdm__Program__c | 19 | 31 | 0 | **High** |
| npsp__Allocation__c | 15 | 30 | 1 | **Medium** |
| pmdm__Service__c | 20 | 30 | 0 | **Medium** |
| Session__c | 24 | 28 | 0 | **Medium** |
| ContentDocument | 25 | 27 | 0 | **Medium** |
| docebo_v3__LearningPlanEnrollment__c | 18 | 28 | 1 | **Medium** |
| hic_docmerge__Document_Solution__c | 16 | 31 | 0 | **Medium** |
| GW_Volunteers__Job_Recurrence_Schedule__c | 18 | 27 | 1 | **Medium** |
| LearnUponP__LearnUpon_API_Call_Logs__c | 19 | 29 | 0 | **Medium** |
| LearnUponP__LearnUpon_Portal_Membership__c | 13 | 32 | 0 | **Medium** |
| npsp__Customizable_Rollup_Settings__c | 31 | 23 | 0 | **Medium** |
| System_Changes__c | 23 | 27 | 0 | **Medium** |
| LearnUponP__LearnUponLearningPathContactEnrollment__c | 20 | 28 | 0 | **Medium** |
| LearnUponP__LearnUponLearningPathEnrollment__c | 20 | 28 | 0 | **Medium** |
| Product2 | 20 | 28 | 0 | **Medium** |
| Assignments__c | 19 | 28 | 0 | **Medium** |
| docebo_v3__DoceboUser__c | 13 | 31 | 0 | **Medium** |
| LearnUponP__LearnUponContactEnrollment__c | 19 | 28 | 0 | **Medium** |
| mone__Mailchimp_Account__c | 19 | 28 | 0 | **Medium** |
| LearnUponP__LearnUponEnrollment__c | 18 | 28 | 0 | **Medium** |
| Jotform_Integration__c | 21 | 26 | 0 | **Medium** |
| mone__Mailchimp_List_History__c | 21 | 26 | 0 | **Medium** |
| npsp__Batch__c | 13 | 30 | 0 | **Medium** |
| npsp__DataImportBatch__c | 16 | 26 | 1 | **Medium** |
| npsp__Partial_Soft_Credit__c | 14 | 27 | 1 | **Medium** |
| CampaignMember | 41 | 13 | 1 | **Medium** |
| docebo_v3__Session__c | 18 | 27 | 0 | **Medium** |
| Form_Builder__Document_Comment__c | 10 | 31 | 0 | **Medium** |
| npsp__Fund__c | 10 | 31 | 0 | **Medium** |
| User_Feedback__c | 18 | 27 | 0 | **Medium** |
| LearnUponP__LearnUponCustomData__c | 19 | 26 | 0 | **Medium** |
| npsp__Account_Soft_Credit__c | 12 | 27 | 1 | **Medium** |
| docebo_v3__LearningPlanCourse__c | 11 | 27 | 1 | **Medium** |
| hic_docmerge__Document_Email_Template__c | 16 | 27 | 0 | **Medium** |
| npsp__Data_Import_Settings__c | 24 | 23 | 0 | **Medium** |
| npsp__Error__c | 18 | 26 | 0 | **Medium** |
| hic_docmerge__Document_Solution_Query__c | 15 | 27 | 0 | **Medium** |
| hic_docmerge__Document_Template__c | 15 | 27 | 0 | **Medium** |
| docebo_v3__LearningPlanCourseEnrollment__c | 14 | 27 | 0 | **Medium** |
| docebo_v3__SessionAttendance__c | 14 | 27 | 0 | **Medium** |
| mone__Mailchimp_Group__c | 14 | 27 | 0 | **Medium** |
| npsp__Trigger_Handler__c | 16 | 26 | 0 | **Medium** |
| Enrollment_Snapshot__c | 15 | 26 | 0 | **Medium** |
| GW_Volunteers__Volunteers_Settings__c | 21 | 23 | 0 | **Medium** |
| hic_docmerge__Document_Query__c | 13 | 27 | 0 | **Medium** |
| LearnUponP__LearnUpon_Setup__c | 21 | 23 | 0 | **Medium** |
| mone__Mailchimp_Group_Category__c | 13 | 27 | 0 | **Medium** |
| npsp__Form_Template__c | 10 | 26 | 1 | **Medium** |
| hic_docmerge__Document_Global_Merge__c | 12 | 27 | 0 | **Medium** |
| hic_docmerge__Document_Solution_Parameter__c | 14 | 26 | 0 | **Medium** |
| npe4__Relationship_Error__c | 14 | 26 | 0 | **Medium** |
| npsp__Address_Verification_Settings__c | 20 | 23 | 0 | **Medium** |
| Coaches__c | 11 | 27 | 0 | **Medium** |
| Form_Builder__Titan_Sign_Document__c | 11 | 27 | 0 | **Medium** |
| Form_Builder__WorkFlow__c | 9 | 28 | 0 | **Medium** |
| hic_docmerge__Document_Email_Template_Solution__c | 11 | 27 | 0 | **Medium** |
| hic_docmerge__Document_Template_Solution__c | 11 | 27 | 0 | **Medium** |
| npe4__Relationship_Settings__c | 19 | 23 | 0 | **Medium** |
| npsp__Error_Settings__c | 19 | 23 | 0 | **Medium** |
| npsp__Schedulable__c | 13 | 26 | 0 | **Medium** |
| LearnUponP__LearnUpon_Portal__c | 10 | 27 | 0 | **Medium** |
| Timesheet__c | 12 | 26 | 0 | **Medium** |
| mone__Mailchimp_Queue_Item__c | 11 | 26 | 0 | **Medium** |
| npsp__Allocations_Settings__c | 16 | 23 | 0 | **Medium** |
| npsp__GetStartedCompletionChecklistState__c | 10 | 26 | 0 | **Medium** |
| npsp__Household_Naming_Settings__c | 16 | 23 | 0 | **Medium** |
| npsp__RecurringDonationChangeLog__c | 10 | 26 | 0 | **Medium** |
| Form_Builder__Document_Tracking__c | 9 | 26 | 0 | **Medium** |
| Form_Builder__MySubmission__c | 9 | 26 | 0 | **Medium** |
| Form_Builder__Payment_Data__c | 9 | 26 | 0 | **Medium** |
| Form_Builder__Titan_Docgen_Log__c | 9 | 26 | 0 | **Medium** |
| Form_Builder__TItan_Sign_Tracking__c | 9 | 26 | 0 | **Medium** |
| Form_Builder__WorkFlowField__c | 9 | 26 | 0 | **Medium** |
| Form_Builder__WorkFlowLog__c | 9 | 26 | 0 | **Medium** |
| Solution | 19 | 21 | 0 | **Medium** |
| npo02__Opportunity_Rollup_Error__c | 14 | 23 | 0 | **Medium** |
| npe4__Relationship_Auto_Create__c | 13 | 23 | 0 | **Medium** |
| npe4__Relationship_Lookup__c | 13 | 23 | 0 | **Medium** |
| npo02__User_Rollup_Field_Settings__c | 13 | 23 | 0 | **Medium** |
| npsp__Gift_Entry_Settings__c | 13 | 23 | 0 | **Medium** |
| npsp__Opportunity_Naming_Settings__c | 13 | 23 | 0 | **Medium** |
| Form_Builder__FormTitanPdfUrl__c | 12 | 23 | 0 | **Medium** |
| npsp__Batch_Data_Entry_Settings__c | 12 | 23 | 0 | **Medium** |
| npsp__Custom_Column_Header__c | 12 | 23 | 0 | **Medium** |
| npsp__Levels_Settings__c | 12 | 23 | 0 | **Medium** |
| npe01__Payment_Field_Mapping_Settings__c | 11 | 23 | 0 | **Medium** |
| npe03__Custom_Field_Mapping__c | 11 | 23 | 0 | **Medium** |
| npe03__Custom_Installment_Settings__c | 11 | 23 | 0 | **Medium** |
| npe03__Recurring_Donations_Error_Queue__c | 11 | 23 | 0 | **Medium** |
| flowmagic__FlowPicklistConfiguration__c | 10 | 23 | 0 | **Medium** |
| hic_docmerge__DMEQueryInfoShowAgain__c | 10 | 23 | 0 | **Medium** |
| npe5__Affiliations_Settings__c | 10 | 23 | 0 | **Medium** |
| OrderItem | 20 | 18 | 0 | **Medium** |
| npsp__Relationship_Sync_Excluded_Fields__c | 9 | 23 | 0 | **Medium** |
| Group | 14 | 14 | 0 | **Medium** |
| OpportunityLineItem | 21 | 9 | 0 | **Medium** |
| PricebookEntry | 15 | 10 | 0 | **Medium** |
| UserRole | 16 | 9 | 0 | **Medium** |
| Pricebook2 | 14 | 9 | 0 | **Medium** |
| npsp__Rollup__mdt | 24 | 1 | 0 | **Low** |
| Attachment | 15 | 5 | 0 | **Low** |
| npsp__GetStartedChecklistItem__mdt | 23 | 1 | 0 | **Low** |
| Note | 12 | 5 | 0 | **Low** |
| npsp__Data_Import_Object_Mapping__mdt | 18 | 2 | 0 | **Low** |
| npsp__Data_Import_Field_Mapping__mdt | 14 | 2 | 0 | **Low** |
| npsp__Filter_Rule__mdt | 14 | 1 | 0 | **Low** |
| npsp__Filter_Group__mdt | 10 | 2 | 0 | **Low** |
| npsp__GetStartedChecklistSection__mdt | 12 | 1 | 0 | **Low** |
| npsp__Data_Import_Field_Mapping_Set__mdt | 9 | 2 | 0 | **Low** |
| pmdm__Bucket__mdt | 9 | 2 | 0 | **Low** |
| npsp__Data_Import_Object_Mapping_Set__mdt | 8 | 2 | 0 | **Low** |
| pmdm__BucketedField__mdt | 10 | 1 | 0 | **Low** |
| pmdm__BucketedValue__mdt | 10 | 1 | 0 | **Low** |
| npsp__DeploymentEvent__e | 7 | 2 | 0 | **Low** |
| npsp__Opportunity_Stage_To_State_Mapping__mdt | 10 | 0 | 0 | **Low** |
| npsp__RecurringDonationStatusMapping__mdt | 10 | 0 | 0 | **Low** |
| pmdm__FeatureGate__mdt | 9 | 0 | 0 | **Low** |

## Picklist / Enum Inventory

These become Postgres enum types or lookup tables:

| Object | Field | Values |
|--------|-------|--------|
| Account | Type | Business, Channel Partner / Reseller, Church, Civic Groups/Clubs, Community (+17 more) |
| Account | BillingGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Account | ShippingGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Account | Industry | Advanced Manufacturing, Construction & Trades, Education, Education Partner, Financial & Professional Services (+8 more) |
| Account | Ownership | Public, Private, Subsidiary, Other |
| Account | Rating | Hot, Warm, Cold |
| Account | AccountSource | Web, Phone Inquiry, Referral, Faith That Works, Purchased List (+1 more) |
| Account | npo02__SYSTEM_CUSTOM_NAMING__c | Name, Formal_Greeting__c, Informal_Greeting__c |
| Account | npsp__Funding_Focus__c | Animal Welfare, Arts and Culture, Capacity Building, Education, Environmental (+2 more) |
| Account | Partner_Engagement_Type__c | Champion Partner, Hire, Source Participants, Donate, Source Volunteers (+4 more) |
| Account | npsp__Sustainer__c | Active, Lapsed, Former |
| Application__c | Case_Worker__c | Yes, No |
| Application__c | Convicted_felonies_last_5_years__c | Yes, No |
| Application__c | Convicted_misdemeanors_last_5_years__c | Yes, No |
| Application__c | Health_Insurance__c | Yes, No |
| Application__c | Student_Assistance__c | TANF, SSI, Section 8, 4C Childcare, Food Stamps (+2 more) |
| Application__c | US_Citizen__c | Yes, No |
| Application__c | Able_to_Read_Write_in_English__c | Yes, No |
| Application__c | Drug_Alcohol_Addictions__c | Yes, No |
| Application__c | HS_Diploma_or_GED__c | Yes, No |
| Application__c | Interest_in_accelerated_skills_training__c | Yes, No |
| Application__c | Stable_housing__c | Yes, No |
| Application__c | Training_site__c | Evans High School - 4949 Silver Star Rd, Orlando, FL 32808 - Thursday 2:30pm-5:00pm, Jones High School - 801 S. Rio Grande Ave, Orlando, FL 32805 - Thursday 2:30pm-5:00pm, Colonial High School - 6100 Oleander Dr, Orlando, FL 32807 - Thursday 2:30pm-5:00pm, Healthcare Academy |
| Application__c | Willing_to_learn__c | Yes, No |
| Application__c | Referral_Source__c | Adult Literacy League, Inc., AdventHealth, All Saints Episcopal Church, Aloma Church, Bridges International (+96 more) |
| Application__c | Technical_Training_Program__c | Apartment Maintenance, Cabinetry and Finishing, Certified Medical Assistant, Distribution Operations Tech, Electric Board Assembly (+3 more) |
| Application__c | Watched_Video__c | Yes, No |
| Application__c | Gender__c | Male, Female, Other |
| Application__c | Volunteer_Type__c | New, Returning |
| Application__c | Education_Level_Completed__c | High School Diploma/GED, Skill Training/Trade School, Some college, no degree, Associates Degree, Bachelor's Degree (+2 more) |
| Application__c | Volunteer_Role__c | Volunteer - Head Coach, Volunteer - Instructor, Volunteer - Intern, Volunteer - Interview Coach, Volunteer - Life & Work Coach (+10 more) |
| Application__c | Church_Affiliation__c | All Saints Episcopal, Antioch Missionary Baptist Church, Cathedral Church St. Luke, Faith Community Outreach Center, Family Church (+33 more) |
| Application__c | Volunteer_Training_Acknowledgement__c | Yes, I understand. I'll be there., Yes, I understand. But, I'm unable to attend. |
| Application__c | Emergency_Contact_Relationship__c | Child, Extended Family, Friend, Parent, Spouse |
| Application__c | Race__c | African American/Black, American Indian/Alaska Native, Asian, Bi-Racial, Caucasian/White (+6 more) |
| Application__c | Experience_Developing_Resume__c | Yes, No |
| Application__c | Experience_Interviewing_skills__c | Yes, No |
| Application__c | Confident_assist_resume__c | Not Confident, Slightly Confident, Moderately Confident, Highly Confident |
| Application__c | Confident_assist_interview_skills__c | Not Confident, Slightly Confident, Moderately Confident, Highly Confident |
| Application__c | Were_you_a_JP_student__c | Yes, No |
| Application__c | Do_you_have_a_smart_phone_with_WiFi__c | Yes, No |
| Application__c | Reliable_transportation_for_12_Weeks__c | Yes, I have access to a car/I own a car, Yes, I plan to use public transportation/bus/Uber/Lyft, No, Yes, I have access |
| Application__c | Participant_Agreement_12_Weeks__c | Yes, I understand and agree, I cannot commit to this requirement |
| Application__c | Preferred_Shirt_Size__c | Small, Medium, Large, XL, XXL |
| Application__c | Preferred_Contact_Method__c | Text, Email, Phone |
| Application__c | Preferred_Intake_Call_Day__c | Monday, Tuesday, Wednesday, Thursday, Friday |
| Application__c | Interested_in_Virtual_Class__c | Yes, I'm interested in attending virtually (online) |
| Application__c | Access_to_computer_or_tablet__c | Yes, No |
| Application__c | Photo_Permission__c | Yes, No |
| Application__c | Industry_of_Interest__c | Advanced Manufacturing, Construction (trades) & Utilities, Healthcare (clinical and non clinical), Hospitality, Information Technology & Finance (+3 more) |
| Application__c | Professional_Industry__c | Advanced Manufacturing, Construction (trades) & Utilities, Healthcare (clinical and non clinical), Hospitality, Information Technology & Finance (+3 more) |
| Asset | Status | Purchased, Shipped, Installed, Registered, Obsolete |
| Asset | GeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Assignments__c | Status__c | In Progress, Complete, Incomplete |
| Assignments__c | Type__c | MyPlan, Resume, VCS |
| Assignments__c | Personality_Type__c | ISTJ, ISFJ, INFJ, INTJ, ISTP (+11 more) |
| Assignments__c | Conscientiousness__c | Developmental Needs, Meets Requirements, Strengths |
| Assignments__c | Interpersonal_Effectiveness__c | Developmental Needs, Meets Requirements, Strengths |
| Assignments__c | Problem_Solving__c | Developmental Needs, Meets Requirements, Strengths |
| Attendance__c | Type__c | Coach, Student |
| Attendance__c | Session_Type__c | Class, Career Fair, Resource Fair, Graduation |
| Campaign | Type | Advertisement, Banner Ads, Conference, Direct Mail, Email (+8 more) |
| Campaign | Status | Planned, In Progress, Completed, Aborted |
| Campaign | GW_Volunteers__Volunteer_Website_Time_Zone__c | Pacific/Kiritimati, Pacific/Chatham, Pacific/Auckland, Pacific/Enderbury, Pacific/Tongatapu (+83 more) |
| CampaignMember | Status | $10000 Pathway Investor, $1000 Individual Investor, $15000 Champion Investor, $2500 Legacy Investor, 04/24/24, 2:30-3:30pm (+167 more) |
| CampaignMember | Salutation | Mr., Ms., Mrs., Dr., Prof. (+5 more) |
| CampaignMember | LeadSource | Web, Phone Inquiry, Referral, Faith That Works, Purchased List (+1 more) |
| Candidates__c | Staus__c | New, Reviewing Application, Accepted, Denied, Closed |
| Case | Type | Problem, Feature Request, Question |
| Case | Status | New, In Progress, On Hold, Waiting on Customer, Escalated (+1 more) |
| Case | Reason | Complex functionality, Dashboard, Error, Existing problem, Instructions not clear (+6 more) |
| Case | Origin | Email, Phone, Web, Internal, Jotform |
| Case | Language | en_US, de, es, fr, it (+13 more) |
| Case | Priority | High, Medium, Low |
| Case | Submitter_Type__c | Student, Coach |
| Case | Site_Location__c | Dream Center - Tues 9am-12pm (1136 E. Plant Street, Winter Garden, FL 34787), Dream Center - Tues 6pm-9pm (1136 E. Plant Street, Winter Garden, FL 34787), Washington Shores - Thurs 6pm-9pm (2818 Orange Center Blvd, Orlando, FL, 32805), Sanford - Tues 6pm-9pm (110 W 1st Street, Sanford, FL 32771), Reeves Center - Thurs 6pm-9pm (1100 North Fern Creek Avenue, Orlando, Florida 32803) |
| Case | Class_Location__c | Evans High School - 4949 Silver Star Rd, Orlando, FL 32808 - Thursday 2:30pm-5:00pm, Jones High School - 801 S. Rio Grande Ave, Orlando, FL 32805 - Thursday 2:30pm-5:00pm, Colonial High School - 6100 Oleander Dr, Orlando, FL 32807 - Thursday 2:30pm-5:00pm, Healthcare Academy |
| Contact | Salutation | Mr., Ms., Mrs., Dr., Prof. (+5 more) |
| Contact | OtherGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Contact | MailingGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Contact | LeadSource | Web, Phone Inquiry, Referral, Faith That Works, Purchased List (+1 more) |
| Contact | Pronouns | He/Him, She/Her, They/Them, He/They, She/They (+1 more) |
| Contact | GenderIdentity | Male, Female, Nonbinary, Not Listed |
| Contact | npe01__PreferredPhone__c | Home, Work, Mobile, Other |
| Contact | npe01__Preferred_Email__c | Personal, Work, Alternate |
| Contact | npe01__Primary_Address_Type__c | Home, Work, Other |
| Contact | npe01__Secondary_Address_Type__c | Home, Work, Other |
| Contact | npe01__SystemAccountProcessor__c | One-to-One, Individual |
| Contact | npo02__Naming_Exclusions__c | Household__c.Name, Household__c.Formal_Greeting__c, Household__c.Informal_Greeting__c |
| Contact | npo02__SystemHouseholdProcessor__c | All Individual Contacts, All New or Edited Contacts, No Contacts |
| Contact | GW_Volunteers__Volunteer_Availability__c | Weekdays, Weekends, Morning, Afternoon, Weekly |
| Contact | GW_Volunteers__Volunteer_Skills__c | Computer usage, Manual labor, Marketing, Fundraising, Event Planning (+1 more) |
| Contact | GW_Volunteers__Volunteer_Status__c | Active, Inactive, New Sign Up, Prospective, Applied (+6 more) |
| Contact | Gender__c | Male, Female, Other |
| Contact | Race__c | African American/Black, American Indian/Alaska Native, Asian, Bi-Racial, Caucasian/White (+6 more) |
| Contact | Referral_Source__c | Adult Literacy League, Inc., AdventHealth, All Saints Episcopal Church, Aloma Church, Bridges International (+96 more) |
| Contact | Marital_Status__c | Divorced, Married, Never Married, Separated, Widowed |
| Contact | County__c | Brevard, Lake, Orange, Osceola, Other (+3 more) |
| Contact | Provide_Proof_of_Residency__c | Yes, No |
| Contact | Current_Housing_Status__c | Homeless, Other, Own Home, Rent, Shelter/Transitional Housing |
| Contact | Highest_Level_of_Education_Completed__c | Associates Degree, Bachelor's Degree, High School Diploma/GED, Masters Degree, Post-graduate degree (+2 more) |
| Contact | Health_Insurance__c | Yes, No |
| Contact | Role__c | Admin Leader, Coach, Food Faciliator, Guest Instructor, Head Coach (+6 more) |
| Contact | Case_Worker__c | Yes, No |
| Contact | Currently_Attending_Church__c | Yes, No |
| Contact | Currently_Attending_School__c | Yes, No |
| Contact | Currently_Working__c | Yes, No |
| Contact | Emergency_Relationship__c | Child, Extended Family, Friend, Parent, Spouse |
| Contact | Receive_Benefits_from_Employer__c | 90 days eligible, Full benefits, Partial benefits, No benefits |
| Contact | Technical_Training_Programs__c | Apartment Maintenance Tech, Cabinetry and Finishing, Certified Medical Assisting, Electronic Board Assembly, IT/Network (+2 more) |
| Contact | US_Citizen__c | Yes, No |
| Contact | New_or_Returning_Volunteer__c | New, Returning |
| Contact | Were_you_a_JP_Student__c | Yes, No |
| Contact | Church_Affiliation__c | All Saints Episcopal, Antioch Missionary Baptist Church, Cathedral Church St. Luke, Faith Community Outreach Center, Family Church (+33 more) |
| Contact | Social_Media_Platform__c | Instagram, Facebook, LinkedIn, None |
| Contact | Experience_developing_resume__c | Yes, No |
| Contact | Experience_interviewing_skills__c | Yes, No |
| Contact | Confident_assist_resume__c | Not Confident, Slightly Confident, Moderately Confident, Highly Confident |
| Contact | Confident_assist_interview_skills__c | Not Confident, Slightly Confident, Moderately Confident, Highly Confident |
| Contact | Convicted_misdemeanors_last_5_years__c | Yes, No |
| Contact | Convicted_felonies_last_5_years__c | Yes, No |
| Contact | Contact_Type__c | Donor, Participant, Partner, Volunteer |
| Contact | Stable_Housing__c | Yes, No |
| Contact | npsp__Sustainer__c | Active, Lapsed, Former |
| Contact | Industry_of_Interest__c | Advanced Manufacturing, Construction (trades) & Utilities, Healthcare (clinical and non clinical), Hospitality, Information Technology & Finance (+3 more) |
| ContentDocument | PublishStatus | U, P, R |
| ContentDocument | SharingOption | A, R |
| ContentDocument | SharingPrivacy | N, P |
| ContentVersion | SharingOption | A, R |
| ContentVersion | SharingPrivacy | N, P |
| ContentVersion | PublishStatus | U, P, R |
| ContentVersion | Origin | C, H |
| ContentVersion | ContentLocation | S, E, L, SfDrive, SCS |
| Contract | OwnerExpirationNotice | 15, 30, 45, 60, 90 (+1 more) |
| Contract | BillingGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Contract | ShippingGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Contract | Status | In Approval Process, Activated, Draft |
| Contract | StatusCode | Draft, InApproval, Activated, Terminated, Expired (+8 more) |
| docebo_v3__Course__c | docebo_v3__Type__c | Elearning, Classroom, Webinar |
| docebo_v3__CourseEnrollment__c | docebo_v3__Status__c | None, Subscribed, In_Progress, Completed, Waiting (+3 more) |
| docebo_v3__LearningPlanCourseEnrollment__c | docebo_v3__CourseEnrollmentStatus__c | None, Subscribed, In_Progress, Completed, Waiting (+3 more) |
| Employment__c | Currently_Working__c | Yes, No |
| Employment__c | Success_Stories_Type__c | Got an Interview!, Got a Job!, Enrolled in Accelerated Skills Training!, Got a promotion/pay increase!, Had a Faith Experience! |
| Employment__c | Receive_Benefits_from_Employer__c | 90 days eligible, Full benefits, Partial benefits, No benefits |
| Employment__c | Placement_type__c | Career Fair Referral, Existing, Self, Self - During Class, Self Placement (+6 more) |
| Employment__c | Rate_of_Pay__c | under $15 per hour, $15-$20 per hour, $20-$25 per hour, $26+ per hour |
| Employment__c | PCT_Application_Process_Rating__c | 1, 2, 3, 4, 5 |
| Employment__c | Acquired_job_after_starting_LifeWorks__c | Yes, No |
| Employment__c | What_AST_Program_are_you_enrolled_in__c | Apartment Maintenance Technician, Cabinet Making and Finishing, Carpentry, Certified Forklift Technician, Computer Numeric Control (CNC) (+16 more) |
| Employment__c | Certification_Earned__c | Yes, No |
| Employment__c | Enrolled_in_Skills_Program__c | Yes, No |
| Employment__c | Enrollment_Status__c | Current LifeWorks Participant, Graduate of LifeWorks (Alumni) |
| Employment__c | Graduate_From_Skills_Training_Program__c | Yes, No, Pending graduation |
| Employment__c | Is_your_job_from_completion_of_AST_Certi__c | Yes, No |
| Employment__c | Job_Promotion_Benefits__c | Yes, Health benefits, Yes, Retirement benefits, No, already had benefits, No, no new benefits |
| Employment__c | Job_Promotion__c | Yes, No |
| Employment__c | Job_from_Career_Fair__c | Yes, No |
| Employment__c | Job_uses_skills_learned_in_training__c | Yes, No |
| Employment__c | New_Job_Benefits__c | Health benefits, Retirement benefits, No benefits |
| Employment__c | New_Job_Type__c | Full time, Part time |
| Employment__c | Pay_Increase_Yes_No__c | Yes, No |
| Employment__c | Pay_Increase__c | New, Returning |
| Employment__c | Skills_Training_School__c | Valencia College, Orange Technical College, AdventHealth University, Seminole State, New Horizons (+2 more) |
| Enrollment__c | Status__c | Applied, Completed Student Orientation, Completed Phone Screen, Denied, Accepted (+6 more) |
| Enrollment__c | Reason__c | Advanced Education, Assignments Incomplete, Attendance Issues, Attitude/Behavior, Childcare (+12 more) |
| Enrollment__c | Perfect_Attendance__c | Yes, No |
| Enrollment__c | Star_Student__c | Yes, No |
| Enrollment__c | Type__c | Electronic Board Assembly, Culinary Arts Professional, Distribution Operations Technician |
| Enrollment__c | Score__c | 0, 1, 2, 3 |
| Enrollment__c | Funding_Received__c | Yes, No |
| Enrollment__c | Funded_By__c | CareerSource, Community Action |
| Enrollment__c | Gained_Employment__c | Yes, No |
| Enrollment__c | Attendance_Reason__c | Absenses, Tardies |
| Event | Type | Email, Meeting, Other, Call |
| Event | ShowAs | Busy, OutOfOffice, Free |
| Event | GroupEventType | 0, 1, 2, 3 |
| Event | RecurrenceTimeZoneSidKey | Pacific/Kiritimati, Pacific/Chatham, Antarctica/McMurdo, Pacific/Apia, Pacific/Auckland (+419 more) |
| Event | RecurrenceType | RecursDaily, RecursEveryWeekday, RecursMonthly, RecursMonthlyNth, RecursWeekly (+2 more) |
| Event | RecurrenceInstance | First, Second, Third, Fourth, Last |
| Event | RecurrenceMonthOfYear | January, February, March, April, May (+7 more) |
| Event | EventSubtype | Event |
| Event | Recurrence2PatternVersion | 1, 2 |
| Event | Activity_Type__c | Technical Program 1, Technical Program 2, Phone Screen |
| Event | Disposition__c | Left Voice Mail, No Voicemail, Had Conversation |
| Group | Type | AllCustomerPortal, ChannelProgramGroup, CollaborationGroup, DataAnalytics, Manager (+12 more) |
| GW_Volunteers__Job_Recurrence_Schedule__c | GW_Volunteers__Days_of_Week__c | Sunday, Monday, Tuesday, Wednesday, Thursday (+2 more) |
| GW_Volunteers__Job_Recurrence_Schedule__c | GW_Volunteers__Weekly_Occurrence__c | Every, Alternate, 1st, 2nd, 3rd (+2 more) |
| GW_Volunteers__Volunteer_Hours__c | GW_Volunteers__Status__c | Prospect, Confirmed, Completed, No-Show, Web Sign Up (+1 more) |
| GW_Volunteers__Volunteer_Job__c | GW_Volunteers__Skills_Needed__c | Computer usage, Manual Labor, Marketing, Fundraising, Event Planning (+2 more) |
| GW_Volunteers__Volunteer_Job__c | GW_Volunteers__Volunteer_Website_Time_Zone__c | Pacific/Kiritimat, Pacific/Chatham, Pacific/Auckland, Pacific/Enderbury, Pacific/Tongatapu (+83 more) |
| GW_Volunteers__Volunteer_Recurrence_Schedule__c | GW_Volunteers__Days_of_Week__c | Sunday, Monday, Tuesday, Wednesday, Thursday (+2 more) |
| GW_Volunteers__Volunteer_Recurrence_Schedule__c | GW_Volunteers__Volunteer_Hours_Status__c | Prospect, Confirmed, Completed, Canceled |
| GW_Volunteers__Volunteer_Recurrence_Schedule__c | GW_Volunteers__Weekly_Occurrence__c | Every, Alternate, 1st, 2nd, 3rd (+2 more) |
| Intake__c | Are_you_a_United_States_citizen__c | Yes, No |
| Intake__c | Are_you_currently_attending_a_church__c | Yes, No |
| Intake__c | Are_you_currently_working__c | Yes, No |
| Intake__c | Convicted_felonies_last_5_years__c | Yes, No |
| Intake__c | Convicted_misdemeanors_last_5_years__c | Yes, No |
| Intake__c | Do_you_receive_any_of_the_following_form__c | TANF, SSI, Food Stamps, Section 8, 4C Childcare (+3 more) |
| Intake__c | Emergency_Relationship__c | Child, Extended Family, Friend, Parent, Spouse |
| Intake__c | Gender__c | Male, Female, Other |
| Intake__c | Highest_level_of_education_completed__c | Some High School, High School Diploma/GED, Some College/Technical School, Associate degree, Bachelor’s Degree (+1 more) |
| Intake__c | Marital_Status__c | Divorced, Married, Single, Widowed |
| Intake__c | Number_of_children_under_age_18__c | 1, 2, 3, 4, 5 (+11 more) |
| Intake__c | Race__c | African American/Black, American Indian/Alaska Native, Asian, Bi-Racial, Caucasian/White (+5 more) |
| Intake__c | Social_Media_Platform__c | Instagram, Facebook, LinkedIn, None |
| Intake__c | What_is_your_current_housing_status__c | Rent, Own Home, Shelter/Transitional Housing, Homeless, Other |
| Interview__c | Amount_of_homework_completed__c | None of it, Less than half, but some of it, Half of it, More than half, but not all of it, All of it |
| Interview__c | Anger_Frustration_at_job__c | Never, A few times a year, A few times a month, A few times a week, Once a day (+1 more) |
| Interview__c | Completing_homework_assignments__c | Very Difficult, Difficult, Neither difficult nor easy, Easy, Very easy |
| Interview__c | Completing_this_class__c | Very Difficult, Difficult, Neither difficult nor easy, Easy, Very easy |
| Interview__c | Confidence_to_get_job_desired__c | Not at all confident, Not very confident, Somewhat confident, Fairly confident, Extremely confident |
| Interview__c | Currently_Employed__c | Yes, No |
| Interview__c | Enrolled_in_skills_training_program__c | Yes, No |
| Interview__c | Ever_considered_skills_training_program__c | Yes, No |
| Interview__c | Feel_in_job_search_daily__c | Very discouraged, Discouraged, Hopeful, Very hopeful |
| Interview__c | Feel_respected_by_boss__c | Not at all, Slightly, Moderately, Very, Extremely |
| Interview__c | Fulfullment_Joy_at_job__c | Never, A few times a year, A few times a month, A few times a week, Once a day (+1 more) |
| Interview__c | Highest_level_education__c | Less than high school, High school diploma/GED, Some college, Associates degree, Bachelor's degree (+1 more) |
| Interview__c | Hired_for_a_new_job__c | Yes, No |
| Interview__c | How_often_skills_being_used__c | Never, Sometimes, About half the time, Most of the time, Always |
| Interview__c | How_skilled_do_you_feel__c | Never, Sometimes, About half the time, Most of the time, Always |
| Interview__c | Least_beneficial_class__c | Week 1: What is a Worldview, Week 2: What is Your Worldview, Week 3: The Biblical Worldview, Week 4: Sharing Your Story with Purpose, Week 5: Owning Integrity and Overcoming Barriers (+3 more) |
| Interview__c | Length_of_program_12wks_work__c | Yes, No |
| Interview__c | LifeWorks_class_overall__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Interview__c | Making_it_to_all_classes_on_time__c | Very Difficult, Difficult, Neither difficult nor easy, Easy, Very easy |
| Interview__c | Making_it_to_resource_fair__c | Very Difficult, Difficult, Neither difficult nor easy, Easy, Very easy |
| Interview__c | Making_it_to_the_job_fair__c | Very Difficult, Difficult, Neither difficult nor easy, Easy, Very easy |
| Interview__c | More_than_one_job__c | Yes, No |
| Interview__c | Most_beneficial_class__c | Week 1: What is a Worldview, Week 2: What is Your Worldview, Week 3: The Biblical Worldview, Week 4: Sharing Your Story with Purpose, Week 5: Owning Integrity and Overcoming Barriers (+3 more) |
| Interview__c | New_job_provide_benefits__c | During Week 1, During Week 2, During Week 3, During the Job Fair, Other |
| Interview__c | Number_of_Jobs__c | 0, 1, 2, 3, 4 (+2 more) |
| Interview__c | People_living_in_household__c | 1, 2, 3, 4, 5 (+3 more) |
| Interview__c | Prefer_Longer_or_Shorter_program__c | Longer, Shorter |
| Interview__c | Reason_why_you_work__c | For my family, For myself, For the money, For the experience, It is another step in my career plan (+1 more) |
| Interview__c | Receive_public_assistance__c | Yes, No |
| Interview__c | Relationship_with_mentor_coach__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Interview__c | Respect_boss__c | Not at all, Slightly, Moderately, Very, Extremely |
| Interview__c | Satisfied_with_current_employer__c | Very dissatisfied, Dissatisfied, Satisfied, Very satisfied, Other |
| Interview__c | Covid_Employment_Status__c | I am still going to my workplace for the same number of hours as before the pandemic., I am still going to my workplace but am working reduced hours., I am working from home., I lost my job/Furloughed, I had to quit my job because I need to take care of people who depend on me (children, parents) (+3 more) |
| Interview__c | Start_time_of_class_work_for_you__c | Yes, No |
| Interview__c | Still_at_job_5_years_from_now__c | Very unlikely, Unlikely, Likely, Very likely |
| Interview__c | The_class_content__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Interview__c | Understanding_the_instructors__c | Very Difficult, Difficult, Neither difficult nor easy, Easy, Very easy |
| Interview__c | of_community_resources_used_from_fair__c | 0, 1, 2, 3, 4 (+2 more) |
| Interview__c | of_employers_follow_up_career_fair__c | 0, 1, 2, 3, 4 (+2 more) |
| Interview__c | Reasons_unemployed__c | I need help with my cover letter and/or resume, I need help with interviewing, I don't know how to job search, I don't have the right connections, I don't know what the next step is (+2 more) |
| Interview__c | Tried_to_job_search__c | Applied with in-person applications, Applied with online applications, Asked a friend, Went to networking events, Walked into a place of employment and asked for a job (+4 more) |
| Interview__c | Forms_of_assistance__c | Cash, WIC, Social Security, Disability, Other (+1 more) |
| Interview__c | Job_Provide_Benefits__c | Health Benefits, Retirement Benefits, No Benefits |
| Interview__c | Current_Employment_Situation__c | I am new to the US and need help acclimating to the new workforce., I am unemployed and need a job., I have a full-time job but need a job with higher pay and/or benefits., I have a good full-time job but feel unfulfilled and want to find a position that gives me purpose., I have multiple part time jobs and need a full-time job. |
| Interview__c | Three_Areas_of_Growth__c | Networking/Knowing the right people, Resume writing, Interview skills, Virtual interview skills, Career planning (+2 more) |
| Interview__c | Frequency_of_Stress__c | A few times a day, A few times a week, A few times a month, A few times a year, Never |
| Interview__c | Attending_Career_and_Resource_Showcase__c | Very Difficult, Difficult, Neither difficult nor easy, Easy, Very easy |
| Interview__c | Health_Benefits__c | Yes, No |
| Interview__c | Retirement_Benefits__c | Yes, No |
| Interview__c | PTO__c | Yes, No |
| Interview__c | Same_job_next_5_years__c | Yes, No |
| Interview__c | Promoted_Since_Starting_LifeWorks__c | Yes, No |
| Interview__c | Pay_Increase__c | Yes, No |
| Interview__c | Since_starting_enroll_advanced_training__c | Yes, No |
| Interview__c | COVID_effected_job__c | Loss of job, Significant loss of work hours, No change, I was unemployed when I came into LifeWorks and am still seeking a job |
| Interview__c | New_job_benefits__c | Health, Retirement, PTO |
| Interview__c | Since_starting_enroll_in_college__c | Yes, No |
| Interview__c | Week_10_Integrity_and_Money_Management__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Interview__c | Week_11_Conflict_in_the_Workplace__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Interview__c | Week_12_Servanthood_and_Networking__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Interview__c | Week_1_Worldview__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Interview__c | Week_2_God_s_View_of_You_Work__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Interview__c | Week_3_My_Career_Plan__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Interview__c | Week_4_Understanding_Purpose__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Interview__c | Week_5_Respecting_Authority__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Interview__c | Week_6_Resume_Building__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Interview__c | Week_7_Responsibility_Job_Search__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Interview__c | Week_8_Effective_Communication__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Interview__c | Week_9_Interviewing_Skills_Model__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Interview__c | Respected_by_Boss__c | Never, A few times a year, A few times a month, A few times a week, Once a day (+1 more) |
| Interview__c | Receive_Job_Alerts__c | Yes, full-time only, Yes, part-time only, Yes, all opportunities, No, not at this time |
| Interview__c | Participate_Monthly_Workshops__c | Yes, No |
| Jotform_Integration__c | JotForm_Name__c | Enrollment Agreement |
| Jotform_Integration__c | Training_Site__c | Evans High School - 4949 Silver Star Rd, Orlando, FL 32808 - Thursday 2:30pm-5:00pm, Jones High School - 801 S. Rio Grande Ave, Orlando, FL 32805 - Thursday 2:30pm-5:00pm, Colonial High School - 6100 Oleander Dr, Orlando, FL 32807 - Thursday 2:30pm-5:00pm, Healthcare Academy |
| Jotform_Integration__c | Planned_Orientation_Date__c | Tuesday, February 13th from 2:30pm-3:30pm (Evans), Tuesday, February 13th at 9am-10am (Dream Center), Tuesday, February 13th at 6pm-7pm (Virtual Class), Thursday, February 15th at 6pm-7pm (FBO, Summit, St. Paul's) |
| Lead | Salutation | Mr., Ms., Mrs., Dr., Prof. (+5 more) |
| Lead | GeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Lead | LeadSource | Web, Phone Inquiry, Referral, Faith That Works, Purchased List (+1 more) |
| Lead | Status | New, Open - Not Contacted, Discovery, Working - Contacted, Closed - Converted (+4 more) |
| Lead | Industry | Advanced Manufacturing, Construction & Trades, Education, Education Partner, Financial & Professional Services (+8 more) |
| Lead | Rating | Hot, Warm, Cold |
| Lead | npe01__Preferred_Email__c | Personal, Work, Alternate |
| Lead | npe01__Preferred_Phone__c | Home, Work, Mobile, Other |
| Lead | GW_Volunteers__Volunteer_Availability__c | Weekdays, Weekends, Morning, Afternoon, Weekly |
| Lead | GW_Volunteers__Volunteer_Skills__c | Computer usage, Manual labor, Marketing, Fundraising, Event Planning (+1 more) |
| Lead | GW_Volunteers__Volunteer_Status__c | New Sign Up |
| Lead | Applied_Online__c | Yes, No |
| Lead | Partner_Engagement_Type__c | Champion Partner, Hire, Source Participants, Donate, Source Volunteers (+4 more) |
| Lead | County__c | Brevard, Lake, Orange, Osceola, Polk (+3 more) |
| Lead | Lead_Type__c | Donor, Participant, Volunteer, Church, Business (+5 more) |
| mone__Mailchimp_Account__c | mone__Status__c | Active, Disconnecting |
| mone__Mailchimp_Email_Activity__c | mone__Action__c | open, click, bounce, hard, soft (+4 more) |
| mone__Mailchimp_Email_Activity__c | mone__Event_Properties__c | -- None -- |
| mone__Mailchimp_Group_Category__c | mone__Type__c | checkboxes, dropdown, radio, hidden |
| mone__Mailchimp_Import__c | mone__Import_Type__c | report, soql, listview |
| mone__Mailchimp_Import__c | mone__Preferred_Time__c | 01:00, 02:00, 03:00, 04:00, 05:00 (+19 more) |
| mone__Mailchimp_Import__c | mone__Schedule_Type__c | once, scheduled, expired |
| mone__Mailchimp_Import__c | mone__Status__c | running, failed, completed, waiting, updating (+5 more) |
| mone__Mailchimp_Import__c | mone__Scheduled_Days__c | mon, tue, wed, thu, fri (+2 more) |
| mone__Mailchimp_Import__c | mone__Scheduled_Hours__c | 01:00, 02:00, 03:00, 04:00, 05:00 (+19 more) |
| mone__Mailchimp_List__c | mone__Status__c | Active, Deleting |
| mone__Mailchimp_Member__c | mone__Status__c | Subscribed, Unsubscribed, Cleaned, Pending, Transactional (+1 more) |
| mone__Mailchimp_Member__c | mone__Group_Ids__c | -- none -- |
| mone__Mailchimp_Member__c | mone__Groups__c | -- None --, 879133366b, B12 Group One | Three |
| mone__Mailchimp_Member__c | mone__Tags__c | -- None -- |
| npe01__OppPayment__c | npe01__Payment_Method__c | Card, Check, ACH, Donor Advised Fund, Cash (+4 more) |
| npe01__OppPayment__c | npsp__Payment_Acknowledgment_Status__c | To Be Acknowledged, Acknowledged, Do Not Acknowledge |
| npe01__OppPayment__c | npsp__ACH_Code__c | PPD, CCD, WEB, TEL, BOC (+1 more) |
| npe01__OppPayment__c | npsp__DebitType__c | Refund, Partial Refund, Chargeback |
| npe03__Recurring_Donation__c | npe03__Installment_Period__c | Monthly, Quarterly, Yearly, Weekly, 1st and 15th |
| npe03__Recurring_Donation__c | npe03__Open_Ended_Status__c | Open, Closed, None |
| npe03__Recurring_Donation__c | npe03__Schedule_Type__c | Multiply By, Divide By |
| npe03__Recurring_Donation__c | Gift_Type__c | One Time Gift, Monthly Gift, Multi-year Pledge |
| npe03__Recurring_Donation__c | Notification_Preference__c | Email, Postal Mail, Phone, Do Not Notify |
| npe03__Recurring_Donation__c | Recurring_Payment_Method__c | Card, Check, ACH, Donor Advised Fund, Pay Later (+1 more) |
| npe03__Recurring_Donation__c | Tribute_Type__c | Honor, Memorial |
| npe4__Relationship__c | npe4__Status__c | Current, Former |
| npe4__Relationship__c | npe4__Type__c | Coach / Mentor, Interview Coach, Resume Coach, Aunt, Case Worker (+17 more) |
| npe5__Affiliation__c | npe5__Status__c | Current, Former |
| npo02__Household__c | npo02__SYSTEM_CUSTOM_NAMING__c | Name, Formal_Greeting__c, Informal_Greeting__c |
| npsp__Account_Soft_Credit__c | npsp__Role__c | Donation Source, Influencer, Match |
| npsp__Address__c | npsp__Address_Type__c | Home, Work, Vacation Residence, Other |
| npsp__Address__c | npsp__Seasonal_End_Day__c | 1, 2, 3, 4, 5 (+26 more) |
| npsp__Address__c | npsp__Seasonal_End_Month__c | 1, 2, 3, 4, 5 (+7 more) |
| npsp__Address__c | npsp__Seasonal_Start_Day__c | 1, 2, 3, 4, 5 (+26 more) |
| npsp__Address__c | npsp__Seasonal_Start_Month__c | 1, 2, 3, 4, 5 (+7 more) |
| npsp__Batch__c | npsp__Batch_Status__c | In Progress, Complete |
| npsp__Data_Import_Field_Mapping__mdt | Language | en_US, de, es, fr, it (+13 more) |
| npsp__Data_Import_Field_Mapping__mdt | npsp__Required__c | Yes, No |
| npsp__Data_Import_Field_Mapping_Set__mdt | Language | en_US, de, es, fr, it (+13 more) |
| npsp__Data_Import_Object_Mapping__mdt | Language | en_US, de, es, fr, it (+13 more) |
| npsp__Data_Import_Object_Mapping__mdt | npsp__Relationship_To_Predecessor__c | Parent, Child, No Predecessor |
| npsp__Data_Import_Object_Mapping_Set__mdt | Language | en_US, de, es, fr, it (+13 more) |
| npsp__DataImport__c | npsp__Contact1_Preferred_Email__c | Personal, Work, Alternate |
| npsp__DataImport__c | npsp__Contact1_Preferred_Phone__c | Home, Work, Mobile, Other |
| npsp__DataImport__c | npsp__Contact2_Preferred_Email__c | Personal, Work, Alternate |
| npsp__DataImport__c | npsp__Contact2_Preferred_Phone__c | Home, Work, Mobile, Other |
| npsp__DataImport__c | npsp__Donation_Donor__c | Contact1, Account1 |
| npsp__DataImport__c | npsp__Status__c | Imported, Failed |
| npsp__DataImportBatch__c | npsp__Donation_Matching_Behavior__c | Do Not Match, No Match, Single Match, Single Match or Create, Best Match (+1 more) |
| npsp__Engagement_Plan_Task__c | npsp__Priority__c | High, Medium, Low |
| npsp__Engagement_Plan_Task__c | npsp__Status__c | Not Started, In Progress, Completed, Waiting on someone else, Deferred |
| npsp__Engagement_Plan_Task__c | npsp__Type__c | Call, Meeting, Other, Email |
| npsp__Engagement_Plan_Template__c | npsp__Default_Assignee__c | Owner of Object for Engagement Plan, User Creating Engagement Plan |
| npsp__Engagement_Plan_Template__c | npsp__Reschedule_To__c | Monday, Friday |
| npsp__Filter_Group__mdt | Language | en_US, de, es, fr, it (+13 more) |
| npsp__Filter_Rule__mdt | Language | en_US, de, es, fr, it (+13 more) |
| npsp__Filter_Rule__mdt | npsp__Operator__c | Equals, Not_Equals, Greater, Less, Greater_or_Equal (+8 more) |
| npsp__GetStartedChecklistItem__mdt | Language | en_US, de, es, fr, it (+13 more) |
| npsp__GetStartedChecklistItem__mdt | npsp__Primary_Button_Type__c | Disabled, sfdc:new-tab, link |
| npsp__GetStartedChecklistItem__mdt | npsp__Secondary_Button_Type__c | Disabled, sfdc:new-tab, link |
| npsp__GetStartedChecklistSection__mdt | Language | en_US, de, es, fr, it (+13 more) |
| npsp__GetStartedChecklistSection__mdt | npsp__Page_Type__c | Admin, End User |
| npsp__Grant_Deadline__c | npsp__Type__c | LOI, Application, Interim Report, Final Report |
| npsp__Level__c | npsp__Target__c | Account, Contact |
| npsp__Opportunity_Stage_To_State_Mapping__mdt | Language | en_US, de, es, fr, it (+13 more) |
| npsp__Opportunity_Stage_To_State_Mapping__mdt | npsp__Opportunity_State__c | Committed, Finalized |
| npsp__RecurringDonationStatusMapping__mdt | Language | en_US, de, es, fr, it (+13 more) |
| npsp__RecurringDonationStatusMapping__mdt | npsp__State__c | Active, Lapsed, Closed |
| npsp__Rollup__mdt | Language | en_US, de, es, fr, it (+13 more) |
| npsp__Rollup__mdt | npsp__Operation__c | Count, Sum, Average, Largest, Smallest (+6 more) |
| npsp__Rollup__mdt | npsp__Time_Bound_Operation_Type__c | All_Time, Years_Ago, Days_Back |
| npsp__Schedulable__c | npsp__Frequency__c | Hourly, Daily, Weekly, Monthly, Quarterly |
| npsp__Trigger_Handler__c | npsp__Trigger_Action__c | BeforeInsert, BeforeUpdate, BeforeDelete, AfterInsert, AfterUpdate (+2 more) |
| Opportunity | StageName | Prospecting, First Contact, Cultivating, Discovery, Engagement Details (+13 more) |
| Opportunity | Type | New Funding, Church, Business, Education, Community |
| Opportunity | LeadSource | Web, Phone Inquiry, Referral, Faith That Works, Purchased List (+1 more) |
| Opportunity | ForecastCategory | Omitted, Pipeline, BestCase, MostLikely, Forecast (+1 more) |
| Opportunity | ForecastCategoryName | Omitted, Pipeline, Best Case, Commit, Closed |
| Opportunity | npe01__Member_Level__c | Gold, Silver, Bronze |
| Opportunity | npe01__Membership_Origin__c | New, Renewal, Reacquire |
| Opportunity | npo02__systemHouseholdContactRoleProcessor__c | All Opportunities, No Opportunities |
| Opportunity | npsp__Acknowledgment_Status__c | To Be Acknowledged, Acknowledged, Do Not Acknowledge, Email Acknowledgment Now, Email Acknowledgment Not Sent |
| Opportunity | npsp__Notification_Preference__c | Email, Postal Mail, Phone, Do Not Notify |
| Opportunity | npsp__Tribute_Type__c | Honor, Memorial |
| Opportunity | npsp__Matching_Gift_Status__c | Potential, Submitted, Received |
| Opportunity | npsp__In_Kind_Type__c | Goods, Services |
| Opportunity | npsp__Gift_Strategy__c | New Donor, Renewal, Upgrade |
| Opportunity | Partner_Engagement_Type__c | Champion Partner, Hire, Source Participants, Donate, Source Volunteers (+4 more) |
| Opportunity | npsp__Tribute_Notification_Status__c | To Be Notified, Notified |
| Opportunity | Gift_Type__c | One-time Gift, Five Year Pledge, Custom Pledge |
| Opportunity | Grant_Type__c | Foundation Grant, Corporate Sponsor Grant, Contract |
| Opportunity | Payment_Method__c | Card, Check, ACH, Donor Advised Fund, Pay Later (+5 more) |
| Opportunity | Recurring_Pledge_Frequency__c | Monthly, Yearly |
| Order | Status | Draft, Activated |
| Order | BillingGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Order | ShippingGeocodeAccuracy | Address, NearAddress, Block, Street, ExtendedZip (+6 more) |
| Order | StatusCode | Draft, Activated, Canceled, Expired, Superseded |
| pmdm__Bucket__mdt | Language | en_US, de, es, fr, it (+13 more) |
| pmdm__BucketedField__mdt | Language | en_US, de, es, fr, it (+13 more) |
| pmdm__BucketedValue__mdt | Language | en_US, de, es, fr, it (+13 more) |
| pmdm__FeatureGate__mdt | Language | en_US, de, es, fr, it (+13 more) |
| pmdm__Program__c | pmdm__ProgramIssueArea__c | Housing, Employment, Education, Legal, Counseling (+2 more) |
| pmdm__Program__c | pmdm__Status__c | Planned, Active, Completed, Canceled |
| pmdm__ProgramCohort__c | pmdm__Status__c | Planned, Active, Completed, Canceled |
| pmdm__ProgramCohort__c | Mode__c | Face-to-Face, Virtual |
| pmdm__ProgramCohort__c | Meeting_Day__c | Tuesday AM Classes, Tuesday PM Classes, Tuesday Classes, Thursday Classes |
| pmdm__ProgramCohort__c | Term__c | Fall 2023, Summer 2024 |
| pmdm__ProgramEngagement__c | pmdm__Role__c | Class Admin, Class Facilitator, Participant, Volunteer - Admin Leader, Volunteer - Food Facilitator (+13 more) |
| pmdm__ProgramEngagement__c | pmdm__Stage__c | Interested, Applied, Pending, Interviewed, Accepted (+8 more) |
| pmdm__ProgramEngagement__c | Conscientiousness__c | Developmental Needs, Meets Requirements, Strengths |
| pmdm__ProgramEngagement__c | Personality_Type__c | ISTJ, ISFJ, INFJ, INTJ, ISTP (+11 more) |
| pmdm__ProgramEngagement__c | Problem_Solving__c | Developmental Needs, Meets Requirements, Strengths |
| pmdm__ProgramEngagement__c | Reason_Dismissed__c | Attendance, Missing Homework Assignments, Attitude/Behavior, Dishonesty about meeting eligibility, Felony (+1 more) |
| pmdm__ProgramEngagement__c | Reason_withdrawn__c | New employment/Promotion, Family emergency/Death, Childcare, Housing, Transportation (+7 more) |
| pmdm__ProgramEngagement__c | Technical_Training_Programs__c | Apartment Maintenance, Cabinetry and Finishing, Certified Medical Assistant, Distribution Operations Tech, Electric Board Assembly (+3 more) |
| pmdm__ProgramEngagement__c | Watched_video__c | Yes, No |
| pmdm__ProgramEngagement__c | interpersonal_Effectiveness__c | Developmental Needs, Meets Requirements, Strengths |
| pmdm__ProgramEngagement__c | Inactive_Category__c | Application Denied, Waitlisted, Not Interested, Dismissed, Withdrawn |
| pmdm__ProgramEngagement__c | Training_Status__c | Interested, Applied, Enrolled, Graduated, Certified (+1 more) |
| pmdm__ProgramEngagement__c | Certifications__c | Cert A, Cert B, Cert C, Cert D |
| pmdm__ProgramEngagement__c | Transferable_Skills__c | Leadership, Working with hands, Team Work, Listening, Public Speaking (+23 more) |
| pmdm__ProgramEngagement__c | Industries_of_Interest__c | Any, Construction, Education, Healthcare, Hospitality (+5 more) |
| pmdm__ProgramEngagement__c | Positions_of_Interest__c | Accounting, Administration, Assembly, Carpenter, Customer Service (+25 more) |
| pmdm__ProgramEngagement__c | Strength_VCS__c | Conscientiousness, Interpersonal Effectiveness, Problem Solving |
| pmdm__ProgramEngagement__c | Education_Level_Completed__c | High School Diploma/GED, Skill Training/Trade School, Some college, no degree, Associates Degree, Bachelor's Degree (+2 more) |
| pmdm__ProgramEngagement__c | Volunteer_Type__c | New, Returning |
| pmdm__ProgramEngagement__c | Preferred_Class_Location__c | Evans High School - 4949 Silver Star Rd, Orlando, FL 32808 - Thursday 2:30pm-5:00pm, Jones High School - 801 S. Rio Grande Ave, Orlando, FL 32805 - Thursday 2:30pm-5:00pm, Colonial High School - 6100 Oleander Dr, Orlando, FL 32807 - Thursday 2:30pm-5:00pm, Healthcare Academy |
| pmdm__ProgramEngagement__c | Volunteer_Role_1st_Choice__c | Team Leader, Head Coach, Site Coordinator, Life & Work Coach, Interview Coach (+10 more) |
| pmdm__ProgramEngagement__c | Volunteer_Training_Acknowledgement__c | Yes, I understand. I'll be there., Yes, I understand. But, I'm unable to attend. |
| pmdm__ProgramEngagement__c | Church_Affiliation__c | All Saints Episcopal, Antioch Missionary Baptist Church, Cathedral Church St. Luke, Faith Community Outreach Center, Family Church (+33 more) |
| pmdm__ProgramEngagement__c | Success_Stories_Type__c | Got an Interview!, Got a Job!, Enrolled into PCT (on the job training) Advent Health, Enrolled into Accelerated Skills Training |
| pmdm__ProgramEngagement__c | Preferred_Shirt_Size__c | Small, Medium, Large, XL, XXL |
| pmdm__ProgramEngagement__c | Date_Orientation_Planned__c | Wednesday, August 16th at 6pm-7pm |
| pmdm__ProgramEngagement__c | Interested_in_Virtual_Class__c | Yes, I'm interested in attending virtually (online) |
| pmdm__ProgramEngagement__c | Pathways_Stage__c | Applied, Under Review, Denied, Approved, Complete |
| pmdm__ProgramEngagement__c | Pathways_Stipend_Funding_Source__c | To Be Determined, Grant, Private Donor Fund |
| pmdm__ProgramEngagement__c | Photo_Permission__c | Yes, No |
| pmdm__ProgramEngagement__c | Industry_of_Interest__c | Advanced Manufacturing, Construction (trades) & Utilities, Healthcare (clinical and non clinical), Hospitality, Information Technology & Finance (+3 more) |
| pmdm__ProgramEngagement__c | Professional_Industry__c | Advanced Manufacturing, Construction (trades) & Utilities, Healthcare (clinical and non clinical), Hospitality, Information Technology & Finance (+3 more) |
| pmdm__ProgramEngagement__c | Preferred_Contact_Method__c | Text, Email, Phone |
| pmdm__ProgramEngagement__c | Gender__c | Male, Female |
| pmdm__ProgramEngagement__c | Computer_or_Tablet_and_WiFi__c | Yes, No |
| pmdm__ProgramEngagement__c | Do_you_currently_have_health_insurance__c | Yes, No |
| pmdm__ProgramEngagement__c | Is_Simply_Healthcare_your_insurance__c | Yes, No |
| pmdm__ProgramEngagement__c | Have_you_been_convicted_of_a_felony__c | Yes, No |
| pmdm__ProgramEngagement__c | Have_you_been_convicted_of_a_misdemeanor__c | Yes, No |
| pmdm__ProgramEngagement__c | Any_drug_or_alcohol_addictions__c | Yes, No |
| pmdm__ProgramEngagement__c | Do_you_have_stable_housing__c | Yes, No |
| pmdm__ProgramEngagement__c | Are_you_committed_to_change__c | Yes, No |
| pmdm__ProgramEngagement__c | Do_you_have_reliable_transportation__c | Yes, I have access to a car/I own a car, Yes, I plan to use public transportation/bus/Uber/Lyft, No, Yes, I have access |
| pmdm__ProgramEngagement__c | Which_best_describes_your_view_of_work__c | When it comes to work, serving others is what's important (including my colleagues)., When it comes to work, I put myself first to be successful and have an impact. |
| pmdm__ProgramEngagement__c | Do_you_understand_and_agree__c | Yes, I understand and agree, I cannot commit to these requirements |
| pmdm__ProgramEngagement__c | Assigned_PSA__c | Carrie Ashby, SaReeta Brown |
| pmdm__ProgramEngagement__c | Healthcare_Academy_Session_Time__c | Morning Session (9:00 AM - 12:00 PM), Afternoon Session (2:00 PM - 5:00 PM) |
| pmdm__ProgramEngagement__c | LifeWorks_Semester_and_Year_Graduated__c | Spring 2025, Fall 2025 |
| pmdm__ProgramEngagement__c | LifeWorks_Location_Graduated__c | Mosaic Church, Reeves Center, Washington Shores Church of Christ, Dream Center, First Life Center for Pregnancy (+5 more) |
| pmdm__ProgramEngagement__c | Know_Difference_Clinical_vs_Non_Clinic__c | Yes, No |
| pmdm__ProgramEngagement__c | Interested_in_Clinical_or_Non_Clinical__c | Clinical, Non-Clinical, Unsure |
| pmdm__ProgramEngagement__c | Healthcare_Educational_Interest__c | Career and Technical Education (CTE) Program, Degree Program, None at this time |
| pmdm__ProgramEngagement__c | Career_Goal_Employment_at_AdventHealth__c | Yes, No |
| pmdm__ProgramEngagement__c | Healthcare_Intake_Call_Dates__c | December 16, December 17, December 18, December 19, December 23 (+3 more) |
| pmdm__Service__c | pmdm__ServiceDeliveryFieldSet__c | Bulk_Service_Deliveries, Alumni_Services |
| pmdm__Service__c | pmdm__Status__c | Planned, Active, Completed, Canceled |
| pmdm__ServiceDelivery__c | pmdm__AttendanceStatus__c | Present, Unexcused Absence, Excused Absence |
| pmdm__ServiceDelivery__c | Topics_Discussed__c | Assignment Completion, Coching, Follow Up, Graduate Follow-up, Schedule Orientation (+1 more) |
| pmdm__ServiceParticipant__c | pmdm__Status__c | Waitlisted, Enrolled, Withdrawn |
| pmdm__ServiceSchedule__c | pmdm__DaysOfWeek__c | 1, 2, 3, 4, 5 (+2 more) |
| pmdm__ServiceSchedule__c | pmdm__Frequency__c | Daily, Weekly, Monthly, One Time |
| pmdm__ServiceSchedule__c | pmdm__MonthlyRecurrenceOption__c | LastDayOfMonth, 1MO, 2MO, 3MO, 4MO (+31 more) |
| pmdm__ServiceSchedule__c | pmdm__ServiceScheduleEnds__c | On, After |
| pmdm__ServiceSession__c | pmdm__Status__c | Pending, Complete, Canceled |
| Product2 | Family | None |
| Product2 | QuantityUnitOfMeasure | Each |
| Program__c | Semester__c | Fall, Spring |
| Program__c | Status__c | Open, Closed |
| Program__c | Type__c | Online, In-Person |
| Referral__c | Need_to_be_met__c | Accelerated Skills Training, Cars, Services, Suits, Supplies (+1 more) |
| Session__c | Type__c | Class, Career Fair, Resource Fair, Graduation |
| Session__c | Week_Number__c | 1, 2, 3, 4, 5 (+7 more) |
| Solution | Status | Draft, Reviewed, Duplicate |
| Survey__c | Training_Site__c | Evans High School - 4949 Silver Star Rd, Orlando, FL 32808 - Thursday 2:30pm-5:00pm, Jones High School - 801 S. Rio Grande Ave, Orlando, FL 32805 - Thursday 2:30pm-5:00pm, Colonial High School - 6100 Oleander Dr, Orlando, FL 32807 - Thursday 2:30pm-5:00pm, Healthcare Academy |
| Survey__c | Completing_Class__c | Very Difficult, Difficult, Neither difficult nor easy, Easy, Very easy |
| Survey__c | Employed__c | Yes, No |
| Survey__c | Current_Job_Seearch__c | Yes, No |
| Survey__c | Job_Search_Methods__c | Applied with in-person applications, Applied with online applications, Asked a friend, Other, Went to networking events (+9 more) |
| Survey__c | Job_Search_Feeling__c | Very hopeful, Hopeful, Discouraged, Very discouraged |
| Survey__c | Top_3_Reasons_Unemployed__c | I am currently employed, I need help with my cover letter and/or resume, I need help with interviewing, I don't know how to job search, I don't have the right connections (+3 more) |
| Survey__c | Number_of_Jobs__c | 1, 2, 3 |
| Survey__c | Job_Benefits__c | Health benefits, Retirement benefits, Both, No benefits |
| Survey__c | Job_Anger_Frustration__c | Never, A few times a year, A few times a month, A few times a week, Once a day (+1 more) |
| Survey__c | Job_Fulfillment__c | Never, A few times a year, A few times a month, A few times a week, Once a day (+1 more) |
| Survey__c | Use_of_your_Unique_Skills__c | Never, Sometimes, About half the time, Most of the time, Always |
| Survey__c | Stress_Frequency__c | Never, A few times a year, A few times a month, A few times a week, Once a day (+1 more) |
| Survey__c | Current_Employment_Satisfaction__c | Very dissatisfied, Dissatisfied, Satisfied, Very satisfied, Other |
| Survey__c | Current_Job_in_5_years__c | Very unlikely, Unlikely, Likely, Very likely |
| Survey__c | Reasons_at_Current_Job__c | For my family, For myself, For the money, For the experience, It is another step in my career plan (+1 more) |
| Survey__c | Receiving_Public_Assistance__c | Yes, No |
| Survey__c | Assistance_Received__c | Cash, WIC, Social Security, Disability, No assistance received (+5 more) |
| Survey__c | Highest_Level_of_Education__c | HS Diploma/GED, Associates Degree, Bachelors, Masters, Doctorate (+2 more) |
| Survey__c | Household_Size__c | 1, 2, 3, 4+ |
| Survey__c | Ever_Enrolled_in_Skills_Training__c | Yes, No |
| Survey__c | Considered_Skills_Training_Program__c | Yes, No |
| Survey__c | Ability_to_get_Job_Desired__c | Not at all confident, Not very confident, Somewhat confident, Fairly confident, Extremely confident |
| Survey__c | Areas_of_Growth__c | Networking/Knowing the right people, Resume writing, Interview skills, Virtual interview skills, Career planning (+3 more) |
| Survey__c | COVID__c | I am still going to my workplace for the same number of hours as before the pandemic, I am still going to my workplace but am working reduced hours, I am working from home, I lost my job, I had to quit my job because I need to take care of people who depend on me (children, parent) (+3 more) |
| Survey__c | Completing_Homework__c | Very Difficult, Difficult, Neither difficult nor easy, Easy, Very easy |
| Survey__c | Understanding_Instructors__c | Very Difficult, Difficult, Neither difficult nor easy, Easy, Very easy |
| Survey__c | Class_on_Time__c | Very Difficult, Difficult, Neither difficult nor easy, Easy, Very easy |
| Survey__c | Community_Resource_Fair__c | Very Difficult, Difficult, Neither difficult nor easy, Easy, Very easy |
| Survey__c | Career_Interview_Fair__c | Very Difficult, Difficult, Neither difficult nor easy, Easy, Very easy |
| Survey__c | Class_Content__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Survey__c | Coach_Relationship__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Survey__c | Class_Overall__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Survey__c | Most_Beneficial_Class__c | Week 1: What is a Worldview, Week 2: What is Your Worldview, Week 3: The Biblical Worldview, Week 4: Sharing Your Story with Purpose, Week 5: Owning Integrity and Overcoming Barriers (+3 more) |
| Survey__c | Least_Beneficial_Class__c | Week 1: What is a Worldview, Week 2: What is Your Worldview, Week 3: The Biblical Worldview, Week 4: Sharing Your Story with Purpose, Week 5: Owning Integrity and Overcoming Barriers (+3 more) |
| Survey__c | Start_Time_Work__c | Yes, No |
| Survey__c | Length_of_Class_Work__c | Yes, No |
| Survey__c | Program_Length__c | Longer, Shorter, No change |
| Survey__c | Effectiveness_of_Team__c | Not at all effective, Slightly effective, Moderately effective, Very effective, Extremely effective |
| Survey__c | Amount_Homework_Completed__c | None of it, Less than half of it, Half of it, More than half of it, All of it |
| Survey__c | New_Job__c | Yes, No |
| Survey__c | Job_from_Career_Fair__c | Yes, No |
| Survey__c | Gender__c | Male, Female, Other |
| Survey__c | Position_Type__c | Full time, Part time |
| Survey__c | Race_Ethnicity__c | African American/Black, American Indian/Alaska Native, Asian, Bi-Racial, Caucasian/White (+6 more) |
| Survey__c | Marital_Status__c | Never Married, Married, Divorced, Widowed |
| Survey__c | New_Job_Benefits__c | Yes, Health benefits, Yes, Retirement benefits, Yes, Health and Retirement benefits, No, Already had benefits, No, No new benefits |
| Survey__c | Weekly_Communication__c | Not at all beneficial, Slightly beneficial, Moderately beneficial, Very beneficial, Extremely beneficial |
| Survey__c | New_Job_Frustration__c | Never, A few times a year, A few times a month, A few times a week, Once a day (+1 more) |
| Survey__c | New_Job_Fulfillment__c | Never, A few times a year, A few times a month, A few times a week, Once a day (+1 more) |
| Survey__c | Promotion__c | Yes, No |
| Survey__c | Pay_Increase__c | Yes, No |
| Survey__c | Promotion_Benefits__c | Yes, Health benefits, Yes, Retirement benefits, Yes, Health and Retirement benefits, No, Already had benefits, No, No new benefits |
| Survey__c | Enrolled_in_Skills_Program__c | Yes, No |
| Survey__c | Hired_after_Certification__c | Yes, No |
| Survey__c | Create_Relationship_w_God__c | Yes, No |
| Survey__c | Improve_Relationship_w_God__c | Yes, No |
| Survey__c | Empowered_Leaving_Program__c | Yes, No, Maybe |
| Survey__c | New_Job_Type__c | Full time, Part time |
| Survey__c | Meet_with_Career_Services_Coordinator__c | Yes, No |
| Survey__c | County__c | Orange, Seminole, Osceola, Volusia, Other (+3 more) |
| Survey__c | LifeWorks_Semester__c | Fall 2021, Spring 2022, Fall 2022, Spring 2023 |
| Survey__c | New_Job_Career_Fair__c | Yes, No |
| Survey__c | New_Job_Health_Benefits__c | Yes, No |
| Survey__c | New_Job_Retirement_Benefits__c | Yes, No |
| Survey__c | New_Job_Maximized_Skills_Ranked__c | 1 - No, my skills and abilities are not being maximized, 2, 3, 4, 5 - Yes, my skills and abilities are being maximized |
| Survey__c | Working_Other_Jobs__c | Yes, No |
| Survey__c | Currently_Working__c | Yes, No |
| Survey__c | Current_Job_Benefits__c | Health, Retirement, None, Other, Health benefits (+3 more) |
| Survey__c | Promotion_Benefits_Yes_No__c | Yes, No |
| Survey__c | Job_Search_Job_Type__c | Full Time, Part Time |
| Survey__c | Job_Search_Frustrated_Ranking__c | 1 - Never Frustrated, 2, 3, 4, 5 - Always Frustrated |
| Survey__c | Job_Search_Results_Reasons__c | I need better job search strategies, My resume/cover letter needs more work, Employers are not reaching out to me for interviews, I am not hearing back from employers after interviews, I have personal matters that I need to address first (+3 more) |
| Survey__c | COVID_Job_Status_Change__c | Furloughed, Lost Job, No Change |
| Survey__c | COVID_Employment_Gained__c | Yes, No |
| Survey__c | COVID_Pay_Cut__c | Yes, No |
| Survey__c | COVID_Added_Work_Hours__c | Yes, No |
| Survey__c | COVID_Part_Time_Jobs__c | Yes, No |
| Survey__c | Served_in_Military__c | Yes, No |
| Survey__c | Ethnicity__c | Hispanic, Non Hispanic |
| Survey__c | Single_Parent__c | Yes, No |
| Survey__c | Contact_to_Share_Success__c | Yes, I'd love to!, Maybe, Probably not |
| Survey__c | barriers_to_full_time_employment__c | Personal & Financial Barriers, Emotional & Physical Barriers, Career Decision Making & Planning, Job Seeking Knowledge, Education & Training |
| Survey__c | Church_Partner_Reach_Out__c | Yes, No |
| Survey__c | Get_Involved_With_JP__c | Volunteer, Provide feedback, Connect my church, Donate, No, I'll pass (+1 more) |
| Survey__c | Do_you_have_a_disability__c | Yes, No |
| Survey__c | Specific_Barriers__c | I have no barriers to employment, Childcare, Transportation, Education/Certification, Experience (+14 more) |
| Survey__c | JP_Experience__c | I hope to use my Jobs Partnership experience to land a job as soon as possible., I want to use my Jobs Partnership experience to find a better paying job within my same field of work., I want to use my Jobs Partnership experience to help find a new career but do not anticipate getting additional education or training., I want to use my Jobs Partnership experience to find a new job or career and will strongly consider getting additional education or training. |
| Survey__c | Attitude_Current_Work_Situation__c | I am frustrated that I can't find a better paying job based upon my current education and skills., I am frustrated in my current job that I cannot progress to a higher level of pay., I am frustrated that I can't figure out a path to a better job or career., I am open to pursuing a number of different jobs or careers., I have a specific job or career in mind that I would like to figure out how to pursue. |
| Survey__c | Support_Network__c | I feel like I am alone in figuring out how to improve my job situation., I feel like I have a little support in figuring out how to improve my job situation., I feel I have considerable support in figuring out how to improve my job situation. |
| Survey__c | Ability_to_get_job_career_desired__c | Not at all confident, Not very confident, Somewhat confident, Fairly confident, Extremely confident |
| Survey__c | Acquired_job_after_completing_training__c | Yes, No |
| Survey__c | Acquired_job_after_starting_LifeWorks__c | Yes, No |
| Survey__c | Are_you_working_Ftime_or_Ptime_ETL23__c | Full Time, Part Time |
| Survey__c | Class_Leadership__c | Not at all effective, Slightly effective, Moderately effective, Very effective, Extremely effective |
| Survey__c | Complete_Graduate_from_Training_Program__c | Yes, No, Pending Graduation |
| Survey__c | Current_Job_Benefits_ETL23__c | Health benefits, Retirement benefits, No benefits |
| Survey__c | Did_Job_from_Career_Fair_ETL23__c | Yes, No |
| Survey__c | Do_you_have_any_Prior_certs_ETL23__c | Yes, No |
| Survey__c | Earned_Certification__c | Yes, No |
| Survey__c | Enrolled_in_Skills_Program_ETL23__c | Yes, No |
| Survey__c | Goal_for_JP_Experience__c | I hope to use my Jobs Partnership experience to land a job as soon as possible., I want to use my Jobs Partnership experience to find a better paying job within my same field of work., I want to use my Jobs Partnership experience to help find a new career but do not anticipate getting additional education or training., I want to use my Jobs Partnership experience to find a new job or career and will strongly consider getting additional education or training. |
| Survey__c | Have_u_enrolled_in_Skills_Program_ETL23__c | Yes, No |
| Survey__c | How_many_jobs_do_you_work_ETL23__c | 1, 2, 3 |
| Survey__c | Job_from_completion_of_AST_Cert_ETL23__c | Yes, No |
| Survey__c | Job_uses_skills_learned_in_training__c | Yes, No |
| Survey__c | Least_Beneficial_Class_Multi_Select__c | Week 1: What is a Worldview, Week 2: What is Your Worldview, Week 3: The Biblical Worldview, Week 4: Sharing Your Story with Purpose, Week 5: Owning Integrity and Overcoming Barriers (+3 more) |
| Survey__c | LifeWorks_Increase_Purpose_Picklist__c | Yes, No |
| Survey__c | LifeWorks_Increased_Hope_Picklist__c | Very Strong Significant Increase, Significant, Moderately Significant, Slightly Significant, Not Significant |
| Survey__c | LifeWorks_Increased_Opps_Picklist__c | Very Strong Significant Increase, Significant, Moderately Significant, Slightly Significant, Not Significant |
| Survey__c | Most_Beneficial_Class_Multi_Select__c | Week 1: What is a Worldview, Week 2: What is Your Worldview, Week 3: The Biblical Worldview, Week 4: Sharing Your Story with Purpose, Week 5: Owning Integrity and Overcoming Barriers (+3 more) |
| Survey__c | New_Job_Benefits_ETL23__c | Health benefits, Retirement benefits, No benefits |
| Survey__c | New_Job_Type_ETL23__c | Full Time, Part Time |
| Survey__c | New_Job_since_Program_completion_ETL23__c | Yes, No |
| Survey__c | Promotion_Benefits_Multi_select__c | Yes, Health benefits, Yes, Retirement benefits, No, already had benefits, No, no new benefits |
| Survey__c | Skills_Training_Since_Starting_LifeWorks__c | Yes, No |
| System_Changes__c | Object_Changed__c | Account, Attendance, Candidate, Case, Contact (+4 more) |
| System_Changes__c | Status__c | Not Started, In Progress, Completed |
| System_Changes__c | Type_of_Change__c | Application Install, Approval Process, Dashboard, Data Load, DiscoverOrg (+9 more) |
| Task | Status | Not Started, In Progress, Completed, Waiting on someone else, Deferred |
| Task | Priority | High, Normal, Low |
| Task | Type | Call, Meeting, Other |
| Task | CallType | Internal, Inbound, Outbound |
| Task | RecurrenceTimeZoneSidKey | Pacific/Kiritimati, Pacific/Chatham, Antarctica/McMurdo, Pacific/Apia, Pacific/Auckland (+419 more) |
| Task | RecurrenceType | RecursDaily, RecursEveryWeekday, RecursMonthly, RecursMonthlyNth, RecursWeekly (+2 more) |
| Task | RecurrenceInstance | First, Second, Third, Fourth, Last |
| Task | RecurrenceMonthOfYear | January, February, March, April, May (+7 more) |
| Task | RecurrenceRegeneratedType | RecurrenceRegenerateAfterDueDate, RecurrenceRegenerateAfterToday, RecurrenceRegenerated |
| Task | TaskSubtype | Task, Email, ListEmail, Cadence, Call (+1 more) |
| Task | Activity_Type__c | Technical Program 1, Technical Program 2, Phone Screen |
| Task | Disposition__c | Left Voice Mail, No Voicemail, Had Conversation |
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
| User_Feedback__c | Priority__c | Low, Medium, High |
| User_Feedback__c | Status__c | New, In Progress, Completed |
| UserRole | OpportunityAccessForAccountOwner | None, Read, Edit |
| UserRole | CaseAccessForAccountOwner | None, Read, Edit |
| UserRole | ContactAccessForAccountOwner | None, Read, Edit |
| UserRole | PortalType | None, CustomerPortal, Partner |
| Weekly_Report__c | Announcements_Delivered__c | Yes, No |
| Weekly_Report__c | Class_Start_on_Time__c | Yes, No |
| Weekly_Report__c | Computers_Delivered_Operational__c | Yes, No |
| Weekly_Report__c | Contact_Site_Manager__c | Yes, No |
| Weekly_Report__c | Dinner_One_Time__c | Yes, No |
| Weekly_Report__c | Equipment_Set_Up_Timely_Manner__c | Yes, No |
| Weekly_Report__c | Flow_of_Agenda__c | Excellent, Very Good, Good, Needs Improvement |
| Weekly_Report__c | Identified_At_Risk_Students__c | Yes, No |
| Weekly_Report__c | Instructor_adhere_to_PPT_Lesson_Agenda__c | Yes, No |
| Weekly_Report__c | Issue_Resolved__c | Yes, No |
| Weekly_Report__c | Key_Objectives_Delivered__c | Yes, No |
| Weekly_Report__c | Major_Issue__c | AC, Bathroom, Furniture, Lighting, Power / Internet connections |
| Weekly_Report__c | Parking_Security_Issues__c | Yes, No |
| Weekly_Report__c | Pre_Class_Head_Coach_Meeting__c | Yes, No |
| Weekly_Report__c | Referrals_for_JP_or_Chaplain__c | Yes, No |
| Weekly_Report__c | Status__c | Under Review, Approved |
| Weekly_Report__c | Students_Coaches_Engaged__c | Yes, No |
| Weekly_Report__c | Students_understand_concepts__c | Yes, No |
| Weekly_Report__c | Time_Management__c | Excellent, Very Good, Good, Needs Improvement |
| Weekly_Report__c | Weekly_Materials_Collected__c | Yes, No |

## Migration Checklist

- [ ] Create 150 Supabase tables for custom objects
- [ ] Create 645 enum types / lookup tables from picklists
- [ ] Create 736 foreign key relationships
- [ ] Rebuild 47 Flows as DB triggers / Edge Functions / components
- [ ] Convert 34 validation rules to Zod schemas + CHECK constraints
- [ ] Port 44 Apex triggers to application logic
- [ ] Review 807 Apex business logic classes for porting
- [ ] Design RLS policies based on Salesforce profiles/permission sets
- [ ] Plan data migration (records, attachments, files)
- [ ] Map record types to application logic
