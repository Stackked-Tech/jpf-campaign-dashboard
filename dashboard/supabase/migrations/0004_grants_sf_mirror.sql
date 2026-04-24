-- Grants Hub schema v2 — 1:1 mirror of Salesforce Opportunity (Grant record type)
-- Generated from SF describe of Opportunity on api version 66.0 (142 fields)

-- ========== Drop v1 schema ==========
drop trigger if exists grants_set_updated_at on grants;
drop trigger if exists grant_templates_set_updated_at on grant_templates;
drop trigger if exists grant_reports_set_updated_at on grant_reports;
drop function if exists set_updated_at();

drop table if exists grant_notes cascade;
drop table if exists grant_attachments cascade;
drop table if exists grant_tasks cascade;
drop table if exists grant_reports cascade;
drop table if exists field_definitions cascade;
drop table if exists grants cascade;
drop table if exists grant_templates cascade;

drop type if exists grant_status cascade;
drop type if exists funder_type cascade;
drop type if exists restriction_kind cascade;
drop type if exists field_type cascade;

-- ========== v2: grants as SF Opportunity mirror ==========

create table grants (
  id text primary key,
  is_deleted boolean,
  account_id text,
  record_type_id text,
  is_private boolean,
  name text,
  description text,
  stage_name text,
  amount numeric(18,2),
  probability numeric(3,0),
  expected_revenue numeric(18,2),
  total_opportunity_quantity numeric(18,2),
  close_date date,
  type text,
  next_step text,
  lead_source text,
  is_closed boolean,
  is_won boolean,
  forecast_category text,
  forecast_category_name text,
  campaign_id text,
  has_opportunity_line_item boolean,
  pricebook2_id text,
  owner_id text,
  created_date timestamptz,
  created_by_id text,
  last_modified_date timestamptz,
  last_modified_by_id text,
  system_modstamp timestamptz,
  last_activity_date date,
  push_count integer,
  last_stage_change_date timestamptz,
  fiscal_quarter integer,
  fiscal_year integer,
  fiscal text,
  contact_id text,
  last_viewed_date timestamptz,
  last_referenced_date timestamptz,
  contract_id text,
  has_open_activity boolean,
  has_overdue_task boolean,
  last_amount_changed_history_id text,
  last_close_date_changed_history_id text,
  npe01_amount_outstanding_c numeric(18,2),
  npe01_contact_id_for_role_c text,
  npe01_do_not_automatically_create_payment_c boolean,
  npe01_is_opp_from_individual_c text,
  npe01_member_level_c text,
  npe01_membership_end_date_c date,
  npe01_membership_origin_c text,
  npe01_membership_start_date_c date,
  npe01_amount_written_off_c numeric(14,2),
  npe01_number_of_payments_c numeric(18,0),
  npe01_payments_made_c numeric(14,2),
  npo02_combined_rollup_fieldset_c text,
  npo02_system_household_contact_role_processor_c text,
  npe03_recurring_donation_c text,
  npsp_batch_c text,
  npsp_acknowledgment_date_c date,
  npsp_acknowledgment_status_c text,
  npsp_recurring_donation_installment_name_c text,
  npsp_recurring_donation_installment_number_c numeric(18,0),
  npsp_primary_contact_c text,
  npsp_grant_contract_date_c date,
  npsp_grant_contract_number_c text,
  npsp_grant_period_end_date_c date,
  npsp_grant_period_start_date_c date,
  npsp_grant_program_area_s_c text,
  npsp_grant_requirements_website_c text,
  npsp_is_grant_renewal_c boolean,
  npsp_previous_grant_opportunity_c text,
  npsp_requested_amount_c numeric(18,2),
  npsp_next_grant_deadline_due_date_c date,
  npsp_primary_contact_campaign_member_status_c text,
  npsp_honoree_contact_c text,
  npsp_honoree_name_c text,
  npsp_notification_message_c text,
  npsp_notification_preference_c text,
  npsp_notification_recipient_contact_c text,
  npsp_notification_recipient_information_c text,
  npsp_notification_recipient_name_c text,
  npsp_tribute_type_c text,
  npsp_matching_gift_account_c text,
  npsp_matching_gift_employer_c text,
  npsp_matching_gift_status_c text,
  npsp_matching_gift_c text,
  npsp_fair_market_value_c numeric(18,2),
  npsp_in_kind_description_c text,
  npsp_in_kind_donor_declared_value_c boolean,
  npsp_in_kind_type_c text,
  npsp_ask_date_c date,
  npsp_closed_lost_reason_c text,
  npsp_gift_strategy_c text,
  npsp_qualified_date_c date,
  npsp_disable_contact_role_automation_c boolean,
  npsp_commitment_id_c text,
  npsp_batch_number_c text,
  partner_engagement_type_c text,
  lead_source_comments_c text,
  interested_in_c text,
  partner_details_c text,
  npsp_honoree_information_c text,
  npsp_notification_recipient_email_c text,
  npsp_tribute_notification_date_c date,
  npsp_tribute_notification_status_c text,
  auth_net_auth_token_c text,
  auth_net_subscription_id_c text,
  auth_net_transaction_id_c text,
  award_date_c date,
  check_number_c text,
  funder_notes_c text,
  gift_type_c text,
  grant_type_c text,
  loi_submission_date_c date,
  name_of_broker_financial_institution_c text,
  next_payment_amount_due_c numeric(18,2),
  number_of_payment_records_c numeric(18,0),
  payment_link_c text,
  payment_method_c text,
  portal_information_c text,
  project_notes_c text,
  proposal_date_c date,
  recognition_name_c text,
  reporting_requirements_c boolean,
  solicitor_none_look_up_c text,
  solicitor_c text,
  recurring_pledge_amount_c numeric(18,2),
  recurring_pledge_frequency_c text,
  last_payment_amount_c numeric(18,2),
  last_payment_date_c date,
  last_payment_id_c text,
  transaction_start_date_c date,
  case_safe_id_for_opportunity_c text,
  next_payment_c text,
  next_payment_amount_c numeric(14,2),
  next_payment_link_c text,
  next_scheduled_date_c date,
  next_payment_link_formula_c text,
  primary_contact_first_name_c text,
  primary_contact_last_name_c text,
  document_links_c text,
  preferred_name_c text
);

create index grants_record_type_id_idx on grants(record_type_id);
create index grants_stage_name_idx on grants(stage_name);
create index grants_close_date_idx on grants(close_date);
create index grants_account_id_idx on grants(account_id);

-- Audit metadata (separate from SF's own CreatedDate/LastModifiedDate)
alter table grants add column synced_at timestamptz not null default now();

-- Column mapping (postgres → salesforce field name):
--   id                                               Id
--   is_deleted                                       IsDeleted
--   account_id                                       AccountId
--   record_type_id                                   RecordTypeId
--   is_private                                       IsPrivate
--   name                                             Name
--   description                                      Description
--   stage_name                                       StageName
--   amount                                           Amount
--   probability                                      Probability
--   expected_revenue                                 ExpectedRevenue
--   total_opportunity_quantity                       TotalOpportunityQuantity
--   close_date                                       CloseDate
--   type                                             Type
--   next_step                                        NextStep
--   lead_source                                      LeadSource
--   is_closed                                        IsClosed
--   is_won                                           IsWon
--   forecast_category                                ForecastCategory
--   forecast_category_name                           ForecastCategoryName
--   campaign_id                                      CampaignId
--   has_opportunity_line_item                        HasOpportunityLineItem
--   pricebook2_id                                    Pricebook2Id
--   owner_id                                         OwnerId
--   created_date                                     CreatedDate
--   created_by_id                                    CreatedById
--   last_modified_date                               LastModifiedDate
--   last_modified_by_id                              LastModifiedById
--   system_modstamp                                  SystemModstamp
--   last_activity_date                               LastActivityDate
--   push_count                                       PushCount
--   last_stage_change_date                           LastStageChangeDate
--   fiscal_quarter                                   FiscalQuarter
--   fiscal_year                                      FiscalYear
--   fiscal                                           Fiscal
--   contact_id                                       ContactId
--   last_viewed_date                                 LastViewedDate
--   last_referenced_date                             LastReferencedDate
--   contract_id                                      ContractId
--   has_open_activity                                HasOpenActivity
--   has_overdue_task                                 HasOverdueTask
--   last_amount_changed_history_id                   LastAmountChangedHistoryId
--   last_close_date_changed_history_id               LastCloseDateChangedHistoryId
--   npe01_amount_outstanding_c                       npe01__Amount_Outstanding__c
--   npe01_contact_id_for_role_c                      npe01__Contact_Id_for_Role__c
--   npe01_do_not_automatically_create_payment_c      npe01__Do_Not_Automatically_Create_Payment__c
--   npe01_is_opp_from_individual_c                   npe01__Is_Opp_From_Individual__c
--   npe01_member_level_c                             npe01__Member_Level__c
--   npe01_membership_end_date_c                      npe01__Membership_End_Date__c
--   npe01_membership_origin_c                        npe01__Membership_Origin__c
--   npe01_membership_start_date_c                    npe01__Membership_Start_Date__c
--   npe01_amount_written_off_c                       npe01__Amount_Written_Off__c
--   npe01_number_of_payments_c                       npe01__Number_of_Payments__c
--   npe01_payments_made_c                            npe01__Payments_Made__c
--   npo02_combined_rollup_fieldset_c                 npo02__CombinedRollupFieldset__c
--   npo02_system_household_contact_role_processor_c  npo02__systemHouseholdContactRoleProcessor__c
--   npe03_recurring_donation_c                       npe03__Recurring_Donation__c
--   npsp_batch_c                                     npsp__Batch__c
--   npsp_acknowledgment_date_c                       npsp__Acknowledgment_Date__c
--   npsp_acknowledgment_status_c                     npsp__Acknowledgment_Status__c
--   npsp_recurring_donation_installment_name_c       npsp__Recurring_Donation_Installment_Name__c
--   npsp_recurring_donation_installment_number_c     npsp__Recurring_Donation_Installment_Number__c
--   npsp_primary_contact_c                           npsp__Primary_Contact__c
--   npsp_grant_contract_date_c                       npsp__Grant_Contract_Date__c
--   npsp_grant_contract_number_c                     npsp__Grant_Contract_Number__c
--   npsp_grant_period_end_date_c                     npsp__Grant_Period_End_Date__c
--   npsp_grant_period_start_date_c                   npsp__Grant_Period_Start_Date__c
--   npsp_grant_program_area_s_c                      npsp__Grant_Program_Area_s__c
--   npsp_grant_requirements_website_c                npsp__Grant_Requirements_Website__c
--   npsp_is_grant_renewal_c                          npsp__Is_Grant_Renewal__c
--   npsp_previous_grant_opportunity_c                npsp__Previous_Grant_Opportunity__c
--   npsp_requested_amount_c                          npsp__Requested_Amount__c
--   npsp_next_grant_deadline_due_date_c              npsp__Next_Grant_Deadline_Due_Date__c
--   npsp_primary_contact_campaign_member_status_c    npsp__Primary_Contact_Campaign_Member_Status__c
--   npsp_honoree_contact_c                           npsp__Honoree_Contact__c
--   npsp_honoree_name_c                              npsp__Honoree_Name__c
--   npsp_notification_message_c                      npsp__Notification_Message__c
--   npsp_notification_preference_c                   npsp__Notification_Preference__c
--   npsp_notification_recipient_contact_c            npsp__Notification_Recipient_Contact__c
--   npsp_notification_recipient_information_c        npsp__Notification_Recipient_Information__c
--   npsp_notification_recipient_name_c               npsp__Notification_Recipient_Name__c
--   npsp_tribute_type_c                              npsp__Tribute_Type__c
--   npsp_matching_gift_account_c                     npsp__Matching_Gift_Account__c
--   npsp_matching_gift_employer_c                    npsp__Matching_Gift_Employer__c
--   npsp_matching_gift_status_c                      npsp__Matching_Gift_Status__c
--   npsp_matching_gift_c                             npsp__Matching_Gift__c
--   npsp_fair_market_value_c                         npsp__Fair_Market_Value__c
--   npsp_in_kind_description_c                       npsp__In_Kind_Description__c
--   npsp_in_kind_donor_declared_value_c              npsp__In_Kind_Donor_Declared_Value__c
--   npsp_in_kind_type_c                              npsp__In_Kind_Type__c
--   npsp_ask_date_c                                  npsp__Ask_Date__c
--   npsp_closed_lost_reason_c                        npsp__Closed_Lost_Reason__c
--   npsp_gift_strategy_c                             npsp__Gift_Strategy__c
--   npsp_qualified_date_c                            npsp__Qualified_Date__c
--   npsp_disable_contact_role_automation_c           npsp__DisableContactRoleAutomation__c
--   npsp_commitment_id_c                             npsp__CommitmentId__c
--   npsp_batch_number_c                              npsp__Batch_Number__c
--   partner_engagement_type_c                        Partner_Engagement_Type__c
--   lead_source_comments_c                           Lead_Source_Comments__c
--   interested_in_c                                  Interested_In__c
--   partner_details_c                                Partner_Details__c
--   npsp_honoree_information_c                       npsp__Honoree_Information__c
--   npsp_notification_recipient_email_c              npsp__Notification_Recipient_Email__c
--   npsp_tribute_notification_date_c                 npsp__Tribute_Notification_Date__c
--   npsp_tribute_notification_status_c               npsp__Tribute_Notification_Status__c
--   auth_net_auth_token_c                            Auth_Net_Auth_Token__c
--   auth_net_subscription_id_c                       Auth_Net_Subscription_ID__c
--   auth_net_transaction_id_c                        Auth_Net_Transaction_ID__c
--   award_date_c                                     Award_date__c
--   check_number_c                                   Check_Number__c
--   funder_notes_c                                   Funder_Notes__c
--   gift_type_c                                      Gift_Type__c
--   grant_type_c                                     Grant_Type__c
--   loi_submission_date_c                            LOI_Submission_date__c
--   name_of_broker_financial_institution_c           Name_of_Broker_Financial_Institution__c
--   next_payment_amount_due_c                        Next_Payment_Amount_Due__c
--   number_of_payment_records_c                      Number_of_Payment_Records__c
--   payment_link_c                                   Payment_Link__c
--   payment_method_c                                 Payment_Method__c
--   portal_information_c                             Portal_information__c
--   project_notes_c                                  Project_Notes__c
--   proposal_date_c                                  Proposal_Date__c
--   recognition_name_c                               Recognition_Name__c
--   reporting_requirements_c                         Reporting_Requirements__c
--   solicitor_none_look_up_c                         Solicitor_None_Look_Up__c
--   solicitor_c                                      Solicitor__c
--   recurring_pledge_amount_c                        Recurring_Pledge_Amount__c
--   recurring_pledge_frequency_c                     Recurring_Pledge_Frequency__c
--   last_payment_amount_c                            Last_Payment_Amount__c
--   last_payment_date_c                              Last_Payment_Date__c
--   last_payment_id_c                                Last_Payment_ID__c
--   transaction_start_date_c                         Transaction_Start_Date__c
--   case_safe_id_for_opportunity_c                   Case_Safe_ID_for_Opportunity__c
--   next_payment_c                                   Next_Payment__c
--   next_payment_amount_c                            Next_payment_amount__c
--   next_payment_link_c                              Next_payment_link__c
--   next_scheduled_date_c                            Next_scheduled_date__c
--   next_payment_link_formula_c                      Next_payment_link_formula__c
--   primary_contact_first_name_c                     Primary_Contact_First_Name__c
--   primary_contact_last_name_c                      Primary_Contact_Last_Name__c
--   document_links_c                                 Document_Links__c
--   preferred_name_c                                 Preferred_Name__c
