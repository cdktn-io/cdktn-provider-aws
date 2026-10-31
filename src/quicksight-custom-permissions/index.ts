/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface QuicksightCustomPermissionsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}
  */
  readonly customPermissionsName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#region QuicksightCustomPermissions#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#capabilities QuicksightCustomPermissions#capabilities}
  */
  readonly capabilities?: QuicksightCustomPermissionsCapabilities[] | cdktn.IResolvable;
}
export interface QuicksightCustomPermissionsCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#action QuicksightCustomPermissions#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#add_or_run_anomaly_detection_for_analyses QuicksightCustomPermissions#add_or_run_anomaly_detection_for_analyses}
  */
  readonly addOrRunAnomalyDetectionForAnalyses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#analysis QuicksightCustomPermissions#analysis}
  */
  readonly analysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#automate QuicksightCustomPermissions#automate}
  */
  readonly automate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#chat_agent QuicksightCustomPermissions#chat_agent}
  */
  readonly chatAgent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#create_and_update_dashboard_email_reports QuicksightCustomPermissions#create_and_update_dashboard_email_reports}
  */
  readonly createAndUpdateDashboardEmailReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#create_and_update_data_sources QuicksightCustomPermissions#create_and_update_data_sources}
  */
  readonly createAndUpdateDataSources?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#create_and_update_datasets QuicksightCustomPermissions#create_and_update_datasets}
  */
  readonly createAndUpdateDatasets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#create_and_update_themes QuicksightCustomPermissions#create_and_update_themes}
  */
  readonly createAndUpdateThemes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#create_and_update_threshold_alerts QuicksightCustomPermissions#create_and_update_threshold_alerts}
  */
  readonly createAndUpdateThresholdAlerts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#create_chat_agents QuicksightCustomPermissions#create_chat_agents}
  */
  readonly createChatAgents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#create_shared_folders QuicksightCustomPermissions#create_shared_folders}
  */
  readonly createSharedFolders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#create_spice_dataset QuicksightCustomPermissions#create_spice_dataset}
  */
  readonly createSpiceDataset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#dashboard QuicksightCustomPermissions#dashboard}
  */
  readonly dashboard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#export_to_csv QuicksightCustomPermissions#export_to_csv}
  */
  readonly exportToCsv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#export_to_csv_in_scheduled_reports QuicksightCustomPermissions#export_to_csv_in_scheduled_reports}
  */
  readonly exportToCsvInScheduledReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#export_to_excel QuicksightCustomPermissions#export_to_excel}
  */
  readonly exportToExcel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#export_to_excel_in_scheduled_reports QuicksightCustomPermissions#export_to_excel_in_scheduled_reports}
  */
  readonly exportToExcelInScheduledReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#export_to_pdf QuicksightCustomPermissions#export_to_pdf}
  */
  readonly exportToPdf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#export_to_pdf_in_scheduled_reports QuicksightCustomPermissions#export_to_pdf_in_scheduled_reports}
  */
  readonly exportToPdfInScheduledReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#flow QuicksightCustomPermissions#flow}
  */
  readonly flow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#include_content_in_scheduled_reports_email QuicksightCustomPermissions#include_content_in_scheduled_reports_email}
  */
  readonly includeContentInScheduledReportsEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#knowledge_base QuicksightCustomPermissions#knowledge_base}
  */
  readonly knowledgeBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#perform_flow_ui_task QuicksightCustomPermissions#perform_flow_ui_task}
  */
  readonly performFlowUiTask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#print_reports QuicksightCustomPermissions#print_reports}
  */
  readonly printReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#publish_without_approval QuicksightCustomPermissions#publish_without_approval}
  */
  readonly publishWithoutApproval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#rename_shared_folders QuicksightCustomPermissions#rename_shared_folders}
  */
  readonly renameSharedFolders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#research QuicksightCustomPermissions#research}
  */
  readonly research?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#share_analyses QuicksightCustomPermissions#share_analyses}
  */
  readonly shareAnalyses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#share_dashboards QuicksightCustomPermissions#share_dashboards}
  */
  readonly shareDashboards?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#share_data_sources QuicksightCustomPermissions#share_data_sources}
  */
  readonly shareDataSources?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#share_datasets QuicksightCustomPermissions#share_datasets}
  */
  readonly shareDatasets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#space QuicksightCustomPermissions#space}
  */
  readonly space?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#subscribe_dashboard_email_reports QuicksightCustomPermissions#subscribe_dashboard_email_reports}
  */
  readonly subscribeDashboardEmailReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#use_agent_web_search QuicksightCustomPermissions#use_agent_web_search}
  */
  readonly useAgentWebSearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#use_bedrock_models QuicksightCustomPermissions#use_bedrock_models}
  */
  readonly useBedrockModels?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#view_account_spice_capacity QuicksightCustomPermissions#view_account_spice_capacity}
  */
  readonly viewAccountSpiceCapacity?: string;
}

export function quicksightCustomPermissionsCapabilitiesToTerraform(struct?: QuicksightCustomPermissionsCapabilities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    add_or_run_anomaly_detection_for_analyses: cdktn.stringToTerraform(struct!.addOrRunAnomalyDetectionForAnalyses),
    analysis: cdktn.stringToTerraform(struct!.analysis),
    automate: cdktn.stringToTerraform(struct!.automate),
    chat_agent: cdktn.stringToTerraform(struct!.chatAgent),
    create_and_update_dashboard_email_reports: cdktn.stringToTerraform(struct!.createAndUpdateDashboardEmailReports),
    create_and_update_data_sources: cdktn.stringToTerraform(struct!.createAndUpdateDataSources),
    create_and_update_datasets: cdktn.stringToTerraform(struct!.createAndUpdateDatasets),
    create_and_update_themes: cdktn.stringToTerraform(struct!.createAndUpdateThemes),
    create_and_update_threshold_alerts: cdktn.stringToTerraform(struct!.createAndUpdateThresholdAlerts),
    create_chat_agents: cdktn.stringToTerraform(struct!.createChatAgents),
    create_shared_folders: cdktn.stringToTerraform(struct!.createSharedFolders),
    create_spice_dataset: cdktn.stringToTerraform(struct!.createSpiceDataset),
    dashboard: cdktn.stringToTerraform(struct!.dashboard),
    export_to_csv: cdktn.stringToTerraform(struct!.exportToCsv),
    export_to_csv_in_scheduled_reports: cdktn.stringToTerraform(struct!.exportToCsvInScheduledReports),
    export_to_excel: cdktn.stringToTerraform(struct!.exportToExcel),
    export_to_excel_in_scheduled_reports: cdktn.stringToTerraform(struct!.exportToExcelInScheduledReports),
    export_to_pdf: cdktn.stringToTerraform(struct!.exportToPdf),
    export_to_pdf_in_scheduled_reports: cdktn.stringToTerraform(struct!.exportToPdfInScheduledReports),
    flow: cdktn.stringToTerraform(struct!.flow),
    include_content_in_scheduled_reports_email: cdktn.stringToTerraform(struct!.includeContentInScheduledReportsEmail),
    knowledge_base: cdktn.stringToTerraform(struct!.knowledgeBase),
    perform_flow_ui_task: cdktn.stringToTerraform(struct!.performFlowUiTask),
    print_reports: cdktn.stringToTerraform(struct!.printReports),
    publish_without_approval: cdktn.stringToTerraform(struct!.publishWithoutApproval),
    rename_shared_folders: cdktn.stringToTerraform(struct!.renameSharedFolders),
    research: cdktn.stringToTerraform(struct!.research),
    share_analyses: cdktn.stringToTerraform(struct!.shareAnalyses),
    share_dashboards: cdktn.stringToTerraform(struct!.shareDashboards),
    share_data_sources: cdktn.stringToTerraform(struct!.shareDataSources),
    share_datasets: cdktn.stringToTerraform(struct!.shareDatasets),
    space: cdktn.stringToTerraform(struct!.space),
    subscribe_dashboard_email_reports: cdktn.stringToTerraform(struct!.subscribeDashboardEmailReports),
    use_agent_web_search: cdktn.stringToTerraform(struct!.useAgentWebSearch),
    use_bedrock_models: cdktn.stringToTerraform(struct!.useBedrockModels),
    view_account_spice_capacity: cdktn.stringToTerraform(struct!.viewAccountSpiceCapacity),
  }
}


export function quicksightCustomPermissionsCapabilitiesToHclTerraform(struct?: QuicksightCustomPermissionsCapabilities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_or_run_anomaly_detection_for_analyses: {
      value: cdktn.stringToHclTerraform(struct!.addOrRunAnomalyDetectionForAnalyses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: cdktn.stringToHclTerraform(struct!.analysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    automate: {
      value: cdktn.stringToHclTerraform(struct!.automate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chat_agent: {
      value: cdktn.stringToHclTerraform(struct!.chatAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_and_update_dashboard_email_reports: {
      value: cdktn.stringToHclTerraform(struct!.createAndUpdateDashboardEmailReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_and_update_data_sources: {
      value: cdktn.stringToHclTerraform(struct!.createAndUpdateDataSources),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_and_update_datasets: {
      value: cdktn.stringToHclTerraform(struct!.createAndUpdateDatasets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_and_update_themes: {
      value: cdktn.stringToHclTerraform(struct!.createAndUpdateThemes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_and_update_threshold_alerts: {
      value: cdktn.stringToHclTerraform(struct!.createAndUpdateThresholdAlerts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_chat_agents: {
      value: cdktn.stringToHclTerraform(struct!.createChatAgents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_shared_folders: {
      value: cdktn.stringToHclTerraform(struct!.createSharedFolders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_spice_dataset: {
      value: cdktn.stringToHclTerraform(struct!.createSpiceDataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dashboard: {
      value: cdktn.stringToHclTerraform(struct!.dashboard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_to_csv: {
      value: cdktn.stringToHclTerraform(struct!.exportToCsv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_to_csv_in_scheduled_reports: {
      value: cdktn.stringToHclTerraform(struct!.exportToCsvInScheduledReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_to_excel: {
      value: cdktn.stringToHclTerraform(struct!.exportToExcel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_to_excel_in_scheduled_reports: {
      value: cdktn.stringToHclTerraform(struct!.exportToExcelInScheduledReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_to_pdf: {
      value: cdktn.stringToHclTerraform(struct!.exportToPdf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_to_pdf_in_scheduled_reports: {
      value: cdktn.stringToHclTerraform(struct!.exportToPdfInScheduledReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow: {
      value: cdktn.stringToHclTerraform(struct!.flow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_content_in_scheduled_reports_email: {
      value: cdktn.stringToHclTerraform(struct!.includeContentInScheduledReportsEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    knowledge_base: {
      value: cdktn.stringToHclTerraform(struct!.knowledgeBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    perform_flow_ui_task: {
      value: cdktn.stringToHclTerraform(struct!.performFlowUiTask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    print_reports: {
      value: cdktn.stringToHclTerraform(struct!.printReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publish_without_approval: {
      value: cdktn.stringToHclTerraform(struct!.publishWithoutApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rename_shared_folders: {
      value: cdktn.stringToHclTerraform(struct!.renameSharedFolders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    research: {
      value: cdktn.stringToHclTerraform(struct!.research),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_analyses: {
      value: cdktn.stringToHclTerraform(struct!.shareAnalyses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_dashboards: {
      value: cdktn.stringToHclTerraform(struct!.shareDashboards),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_data_sources: {
      value: cdktn.stringToHclTerraform(struct!.shareDataSources),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_datasets: {
      value: cdktn.stringToHclTerraform(struct!.shareDatasets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space: {
      value: cdktn.stringToHclTerraform(struct!.space),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscribe_dashboard_email_reports: {
      value: cdktn.stringToHclTerraform(struct!.subscribeDashboardEmailReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_agent_web_search: {
      value: cdktn.stringToHclTerraform(struct!.useAgentWebSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_bedrock_models: {
      value: cdktn.stringToHclTerraform(struct!.useBedrockModels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_account_spice_capacity: {
      value: cdktn.stringToHclTerraform(struct!.viewAccountSpiceCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightCustomPermissionsCapabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightCustomPermissionsCapabilities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._addOrRunAnomalyDetectionForAnalyses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addOrRunAnomalyDetectionForAnalyses = this._addOrRunAnomalyDetectionForAnalyses;
    }
    if (this._analysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis;
    }
    if (this._automate !== undefined) {
      hasAnyValues = true;
      internalValueResult.automate = this._automate;
    }
    if (this._chatAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.chatAgent = this._chatAgent;
    }
    if (this._createAndUpdateDashboardEmailReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.createAndUpdateDashboardEmailReports = this._createAndUpdateDashboardEmailReports;
    }
    if (this._createAndUpdateDataSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.createAndUpdateDataSources = this._createAndUpdateDataSources;
    }
    if (this._createAndUpdateDatasets !== undefined) {
      hasAnyValues = true;
      internalValueResult.createAndUpdateDatasets = this._createAndUpdateDatasets;
    }
    if (this._createAndUpdateThemes !== undefined) {
      hasAnyValues = true;
      internalValueResult.createAndUpdateThemes = this._createAndUpdateThemes;
    }
    if (this._createAndUpdateThresholdAlerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.createAndUpdateThresholdAlerts = this._createAndUpdateThresholdAlerts;
    }
    if (this._createChatAgents !== undefined) {
      hasAnyValues = true;
      internalValueResult.createChatAgents = this._createChatAgents;
    }
    if (this._createSharedFolders !== undefined) {
      hasAnyValues = true;
      internalValueResult.createSharedFolders = this._createSharedFolders;
    }
    if (this._createSpiceDataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.createSpiceDataset = this._createSpiceDataset;
    }
    if (this._dashboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboard = this._dashboard;
    }
    if (this._exportToCsv !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportToCsv = this._exportToCsv;
    }
    if (this._exportToCsvInScheduledReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportToCsvInScheduledReports = this._exportToCsvInScheduledReports;
    }
    if (this._exportToExcel !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportToExcel = this._exportToExcel;
    }
    if (this._exportToExcelInScheduledReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportToExcelInScheduledReports = this._exportToExcelInScheduledReports;
    }
    if (this._exportToPdf !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportToPdf = this._exportToPdf;
    }
    if (this._exportToPdfInScheduledReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportToPdfInScheduledReports = this._exportToPdfInScheduledReports;
    }
    if (this._flow !== undefined) {
      hasAnyValues = true;
      internalValueResult.flow = this._flow;
    }
    if (this._includeContentInScheduledReportsEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeContentInScheduledReportsEmail = this._includeContentInScheduledReportsEmail;
    }
    if (this._knowledgeBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBase = this._knowledgeBase;
    }
    if (this._performFlowUiTask !== undefined) {
      hasAnyValues = true;
      internalValueResult.performFlowUiTask = this._performFlowUiTask;
    }
    if (this._printReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.printReports = this._printReports;
    }
    if (this._publishWithoutApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishWithoutApproval = this._publishWithoutApproval;
    }
    if (this._renameSharedFolders !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameSharedFolders = this._renameSharedFolders;
    }
    if (this._research !== undefined) {
      hasAnyValues = true;
      internalValueResult.research = this._research;
    }
    if (this._shareAnalyses !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareAnalyses = this._shareAnalyses;
    }
    if (this._shareDashboards !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareDashboards = this._shareDashboards;
    }
    if (this._shareDataSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareDataSources = this._shareDataSources;
    }
    if (this._shareDatasets !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareDatasets = this._shareDatasets;
    }
    if (this._space !== undefined) {
      hasAnyValues = true;
      internalValueResult.space = this._space;
    }
    if (this._subscribeDashboardEmailReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribeDashboardEmailReports = this._subscribeDashboardEmailReports;
    }
    if (this._useAgentWebSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAgentWebSearch = this._useAgentWebSearch;
    }
    if (this._useBedrockModels !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBedrockModels = this._useBedrockModels;
    }
    if (this._viewAccountSpiceCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewAccountSpiceCapacity = this._viewAccountSpiceCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightCustomPermissionsCapabilities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._addOrRunAnomalyDetectionForAnalyses = undefined;
      this._analysis = undefined;
      this._automate = undefined;
      this._chatAgent = undefined;
      this._createAndUpdateDashboardEmailReports = undefined;
      this._createAndUpdateDataSources = undefined;
      this._createAndUpdateDatasets = undefined;
      this._createAndUpdateThemes = undefined;
      this._createAndUpdateThresholdAlerts = undefined;
      this._createChatAgents = undefined;
      this._createSharedFolders = undefined;
      this._createSpiceDataset = undefined;
      this._dashboard = undefined;
      this._exportToCsv = undefined;
      this._exportToCsvInScheduledReports = undefined;
      this._exportToExcel = undefined;
      this._exportToExcelInScheduledReports = undefined;
      this._exportToPdf = undefined;
      this._exportToPdfInScheduledReports = undefined;
      this._flow = undefined;
      this._includeContentInScheduledReportsEmail = undefined;
      this._knowledgeBase = undefined;
      this._performFlowUiTask = undefined;
      this._printReports = undefined;
      this._publishWithoutApproval = undefined;
      this._renameSharedFolders = undefined;
      this._research = undefined;
      this._shareAnalyses = undefined;
      this._shareDashboards = undefined;
      this._shareDataSources = undefined;
      this._shareDatasets = undefined;
      this._space = undefined;
      this._subscribeDashboardEmailReports = undefined;
      this._useAgentWebSearch = undefined;
      this._useBedrockModels = undefined;
      this._viewAccountSpiceCapacity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._addOrRunAnomalyDetectionForAnalyses = value.addOrRunAnomalyDetectionForAnalyses;
      this._analysis = value.analysis;
      this._automate = value.automate;
      this._chatAgent = value.chatAgent;
      this._createAndUpdateDashboardEmailReports = value.createAndUpdateDashboardEmailReports;
      this._createAndUpdateDataSources = value.createAndUpdateDataSources;
      this._createAndUpdateDatasets = value.createAndUpdateDatasets;
      this._createAndUpdateThemes = value.createAndUpdateThemes;
      this._createAndUpdateThresholdAlerts = value.createAndUpdateThresholdAlerts;
      this._createChatAgents = value.createChatAgents;
      this._createSharedFolders = value.createSharedFolders;
      this._createSpiceDataset = value.createSpiceDataset;
      this._dashboard = value.dashboard;
      this._exportToCsv = value.exportToCsv;
      this._exportToCsvInScheduledReports = value.exportToCsvInScheduledReports;
      this._exportToExcel = value.exportToExcel;
      this._exportToExcelInScheduledReports = value.exportToExcelInScheduledReports;
      this._exportToPdf = value.exportToPdf;
      this._exportToPdfInScheduledReports = value.exportToPdfInScheduledReports;
      this._flow = value.flow;
      this._includeContentInScheduledReportsEmail = value.includeContentInScheduledReportsEmail;
      this._knowledgeBase = value.knowledgeBase;
      this._performFlowUiTask = value.performFlowUiTask;
      this._printReports = value.printReports;
      this._publishWithoutApproval = value.publishWithoutApproval;
      this._renameSharedFolders = value.renameSharedFolders;
      this._research = value.research;
      this._shareAnalyses = value.shareAnalyses;
      this._shareDashboards = value.shareDashboards;
      this._shareDataSources = value.shareDataSources;
      this._shareDatasets = value.shareDatasets;
      this._space = value.space;
      this._subscribeDashboardEmailReports = value.subscribeDashboardEmailReports;
      this._useAgentWebSearch = value.useAgentWebSearch;
      this._useBedrockModels = value.useBedrockModels;
      this._viewAccountSpiceCapacity = value.viewAccountSpiceCapacity;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // add_or_run_anomaly_detection_for_analyses - computed: false, optional: true, required: false
  private _addOrRunAnomalyDetectionForAnalyses?: string; 
  public get addOrRunAnomalyDetectionForAnalyses() {
    return this.getStringAttribute('add_or_run_anomaly_detection_for_analyses');
  }
  public set addOrRunAnomalyDetectionForAnalyses(value: string) {
    this._addOrRunAnomalyDetectionForAnalyses = value;
  }
  public resetAddOrRunAnomalyDetectionForAnalyses() {
    this._addOrRunAnomalyDetectionForAnalyses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addOrRunAnomalyDetectionForAnalysesInput() {
    return this._addOrRunAnomalyDetectionForAnalyses;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis?: string; 
  public get analysis() {
    return this.getStringAttribute('analysis');
  }
  public set analysis(value: string) {
    this._analysis = value;
  }
  public resetAnalysis() {
    this._analysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis;
  }

  // automate - computed: false, optional: true, required: false
  private _automate?: string; 
  public get automate() {
    return this.getStringAttribute('automate');
  }
  public set automate(value: string) {
    this._automate = value;
  }
  public resetAutomate() {
    this._automate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automateInput() {
    return this._automate;
  }

  // chat_agent - computed: false, optional: true, required: false
  private _chatAgent?: string; 
  public get chatAgent() {
    return this.getStringAttribute('chat_agent');
  }
  public set chatAgent(value: string) {
    this._chatAgent = value;
  }
  public resetChatAgent() {
    this._chatAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatAgentInput() {
    return this._chatAgent;
  }

  // create_and_update_dashboard_email_reports - computed: false, optional: true, required: false
  private _createAndUpdateDashboardEmailReports?: string; 
  public get createAndUpdateDashboardEmailReports() {
    return this.getStringAttribute('create_and_update_dashboard_email_reports');
  }
  public set createAndUpdateDashboardEmailReports(value: string) {
    this._createAndUpdateDashboardEmailReports = value;
  }
  public resetCreateAndUpdateDashboardEmailReports() {
    this._createAndUpdateDashboardEmailReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAndUpdateDashboardEmailReportsInput() {
    return this._createAndUpdateDashboardEmailReports;
  }

  // create_and_update_data_sources - computed: false, optional: true, required: false
  private _createAndUpdateDataSources?: string; 
  public get createAndUpdateDataSources() {
    return this.getStringAttribute('create_and_update_data_sources');
  }
  public set createAndUpdateDataSources(value: string) {
    this._createAndUpdateDataSources = value;
  }
  public resetCreateAndUpdateDataSources() {
    this._createAndUpdateDataSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAndUpdateDataSourcesInput() {
    return this._createAndUpdateDataSources;
  }

  // create_and_update_datasets - computed: false, optional: true, required: false
  private _createAndUpdateDatasets?: string; 
  public get createAndUpdateDatasets() {
    return this.getStringAttribute('create_and_update_datasets');
  }
  public set createAndUpdateDatasets(value: string) {
    this._createAndUpdateDatasets = value;
  }
  public resetCreateAndUpdateDatasets() {
    this._createAndUpdateDatasets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAndUpdateDatasetsInput() {
    return this._createAndUpdateDatasets;
  }

  // create_and_update_themes - computed: false, optional: true, required: false
  private _createAndUpdateThemes?: string; 
  public get createAndUpdateThemes() {
    return this.getStringAttribute('create_and_update_themes');
  }
  public set createAndUpdateThemes(value: string) {
    this._createAndUpdateThemes = value;
  }
  public resetCreateAndUpdateThemes() {
    this._createAndUpdateThemes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAndUpdateThemesInput() {
    return this._createAndUpdateThemes;
  }

  // create_and_update_threshold_alerts - computed: false, optional: true, required: false
  private _createAndUpdateThresholdAlerts?: string; 
  public get createAndUpdateThresholdAlerts() {
    return this.getStringAttribute('create_and_update_threshold_alerts');
  }
  public set createAndUpdateThresholdAlerts(value: string) {
    this._createAndUpdateThresholdAlerts = value;
  }
  public resetCreateAndUpdateThresholdAlerts() {
    this._createAndUpdateThresholdAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAndUpdateThresholdAlertsInput() {
    return this._createAndUpdateThresholdAlerts;
  }

  // create_chat_agents - computed: false, optional: true, required: false
  private _createChatAgents?: string; 
  public get createChatAgents() {
    return this.getStringAttribute('create_chat_agents');
  }
  public set createChatAgents(value: string) {
    this._createChatAgents = value;
  }
  public resetCreateChatAgents() {
    this._createChatAgents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createChatAgentsInput() {
    return this._createChatAgents;
  }

  // create_shared_folders - computed: false, optional: true, required: false
  private _createSharedFolders?: string; 
  public get createSharedFolders() {
    return this.getStringAttribute('create_shared_folders');
  }
  public set createSharedFolders(value: string) {
    this._createSharedFolders = value;
  }
  public resetCreateSharedFolders() {
    this._createSharedFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSharedFoldersInput() {
    return this._createSharedFolders;
  }

  // create_spice_dataset - computed: false, optional: true, required: false
  private _createSpiceDataset?: string; 
  public get createSpiceDataset() {
    return this.getStringAttribute('create_spice_dataset');
  }
  public set createSpiceDataset(value: string) {
    this._createSpiceDataset = value;
  }
  public resetCreateSpiceDataset() {
    this._createSpiceDataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSpiceDatasetInput() {
    return this._createSpiceDataset;
  }

  // dashboard - computed: false, optional: true, required: false
  private _dashboard?: string; 
  public get dashboard() {
    return this.getStringAttribute('dashboard');
  }
  public set dashboard(value: string) {
    this._dashboard = value;
  }
  public resetDashboard() {
    this._dashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInput() {
    return this._dashboard;
  }

  // export_to_csv - computed: false, optional: true, required: false
  private _exportToCsv?: string; 
  public get exportToCsv() {
    return this.getStringAttribute('export_to_csv');
  }
  public set exportToCsv(value: string) {
    this._exportToCsv = value;
  }
  public resetExportToCsv() {
    this._exportToCsv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToCsvInput() {
    return this._exportToCsv;
  }

  // export_to_csv_in_scheduled_reports - computed: false, optional: true, required: false
  private _exportToCsvInScheduledReports?: string; 
  public get exportToCsvInScheduledReports() {
    return this.getStringAttribute('export_to_csv_in_scheduled_reports');
  }
  public set exportToCsvInScheduledReports(value: string) {
    this._exportToCsvInScheduledReports = value;
  }
  public resetExportToCsvInScheduledReports() {
    this._exportToCsvInScheduledReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToCsvInScheduledReportsInput() {
    return this._exportToCsvInScheduledReports;
  }

  // export_to_excel - computed: false, optional: true, required: false
  private _exportToExcel?: string; 
  public get exportToExcel() {
    return this.getStringAttribute('export_to_excel');
  }
  public set exportToExcel(value: string) {
    this._exportToExcel = value;
  }
  public resetExportToExcel() {
    this._exportToExcel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToExcelInput() {
    return this._exportToExcel;
  }

  // export_to_excel_in_scheduled_reports - computed: false, optional: true, required: false
  private _exportToExcelInScheduledReports?: string; 
  public get exportToExcelInScheduledReports() {
    return this.getStringAttribute('export_to_excel_in_scheduled_reports');
  }
  public set exportToExcelInScheduledReports(value: string) {
    this._exportToExcelInScheduledReports = value;
  }
  public resetExportToExcelInScheduledReports() {
    this._exportToExcelInScheduledReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToExcelInScheduledReportsInput() {
    return this._exportToExcelInScheduledReports;
  }

  // export_to_pdf - computed: false, optional: true, required: false
  private _exportToPdf?: string; 
  public get exportToPdf() {
    return this.getStringAttribute('export_to_pdf');
  }
  public set exportToPdf(value: string) {
    this._exportToPdf = value;
  }
  public resetExportToPdf() {
    this._exportToPdf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToPdfInput() {
    return this._exportToPdf;
  }

  // export_to_pdf_in_scheduled_reports - computed: false, optional: true, required: false
  private _exportToPdfInScheduledReports?: string; 
  public get exportToPdfInScheduledReports() {
    return this.getStringAttribute('export_to_pdf_in_scheduled_reports');
  }
  public set exportToPdfInScheduledReports(value: string) {
    this._exportToPdfInScheduledReports = value;
  }
  public resetExportToPdfInScheduledReports() {
    this._exportToPdfInScheduledReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToPdfInScheduledReportsInput() {
    return this._exportToPdfInScheduledReports;
  }

  // flow - computed: false, optional: true, required: false
  private _flow?: string; 
  public get flow() {
    return this.getStringAttribute('flow');
  }
  public set flow(value: string) {
    this._flow = value;
  }
  public resetFlow() {
    this._flow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowInput() {
    return this._flow;
  }

  // include_content_in_scheduled_reports_email - computed: false, optional: true, required: false
  private _includeContentInScheduledReportsEmail?: string; 
  public get includeContentInScheduledReportsEmail() {
    return this.getStringAttribute('include_content_in_scheduled_reports_email');
  }
  public set includeContentInScheduledReportsEmail(value: string) {
    this._includeContentInScheduledReportsEmail = value;
  }
  public resetIncludeContentInScheduledReportsEmail() {
    this._includeContentInScheduledReportsEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeContentInScheduledReportsEmailInput() {
    return this._includeContentInScheduledReportsEmail;
  }

  // knowledge_base - computed: false, optional: true, required: false
  private _knowledgeBase?: string; 
  public get knowledgeBase() {
    return this.getStringAttribute('knowledge_base');
  }
  public set knowledgeBase(value: string) {
    this._knowledgeBase = value;
  }
  public resetKnowledgeBase() {
    this._knowledgeBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseInput() {
    return this._knowledgeBase;
  }

  // perform_flow_ui_task - computed: false, optional: true, required: false
  private _performFlowUiTask?: string; 
  public get performFlowUiTask() {
    return this.getStringAttribute('perform_flow_ui_task');
  }
  public set performFlowUiTask(value: string) {
    this._performFlowUiTask = value;
  }
  public resetPerformFlowUiTask() {
    this._performFlowUiTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performFlowUiTaskInput() {
    return this._performFlowUiTask;
  }

  // print_reports - computed: false, optional: true, required: false
  private _printReports?: string; 
  public get printReports() {
    return this.getStringAttribute('print_reports');
  }
  public set printReports(value: string) {
    this._printReports = value;
  }
  public resetPrintReports() {
    this._printReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get printReportsInput() {
    return this._printReports;
  }

  // publish_without_approval - computed: false, optional: true, required: false
  private _publishWithoutApproval?: string; 
  public get publishWithoutApproval() {
    return this.getStringAttribute('publish_without_approval');
  }
  public set publishWithoutApproval(value: string) {
    this._publishWithoutApproval = value;
  }
  public resetPublishWithoutApproval() {
    this._publishWithoutApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishWithoutApprovalInput() {
    return this._publishWithoutApproval;
  }

  // rename_shared_folders - computed: false, optional: true, required: false
  private _renameSharedFolders?: string; 
  public get renameSharedFolders() {
    return this.getStringAttribute('rename_shared_folders');
  }
  public set renameSharedFolders(value: string) {
    this._renameSharedFolders = value;
  }
  public resetRenameSharedFolders() {
    this._renameSharedFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameSharedFoldersInput() {
    return this._renameSharedFolders;
  }

  // research - computed: false, optional: true, required: false
  private _research?: string; 
  public get research() {
    return this.getStringAttribute('research');
  }
  public set research(value: string) {
    this._research = value;
  }
  public resetResearch() {
    this._research = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get researchInput() {
    return this._research;
  }

  // share_analyses - computed: false, optional: true, required: false
  private _shareAnalyses?: string; 
  public get shareAnalyses() {
    return this.getStringAttribute('share_analyses');
  }
  public set shareAnalyses(value: string) {
    this._shareAnalyses = value;
  }
  public resetShareAnalyses() {
    this._shareAnalyses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareAnalysesInput() {
    return this._shareAnalyses;
  }

  // share_dashboards - computed: false, optional: true, required: false
  private _shareDashboards?: string; 
  public get shareDashboards() {
    return this.getStringAttribute('share_dashboards');
  }
  public set shareDashboards(value: string) {
    this._shareDashboards = value;
  }
  public resetShareDashboards() {
    this._shareDashboards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareDashboardsInput() {
    return this._shareDashboards;
  }

  // share_data_sources - computed: false, optional: true, required: false
  private _shareDataSources?: string; 
  public get shareDataSources() {
    return this.getStringAttribute('share_data_sources');
  }
  public set shareDataSources(value: string) {
    this._shareDataSources = value;
  }
  public resetShareDataSources() {
    this._shareDataSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareDataSourcesInput() {
    return this._shareDataSources;
  }

  // share_datasets - computed: false, optional: true, required: false
  private _shareDatasets?: string; 
  public get shareDatasets() {
    return this.getStringAttribute('share_datasets');
  }
  public set shareDatasets(value: string) {
    this._shareDatasets = value;
  }
  public resetShareDatasets() {
    this._shareDatasets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareDatasetsInput() {
    return this._shareDatasets;
  }

  // space - computed: false, optional: true, required: false
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  public resetSpace() {
    this._space = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // subscribe_dashboard_email_reports - computed: false, optional: true, required: false
  private _subscribeDashboardEmailReports?: string; 
  public get subscribeDashboardEmailReports() {
    return this.getStringAttribute('subscribe_dashboard_email_reports');
  }
  public set subscribeDashboardEmailReports(value: string) {
    this._subscribeDashboardEmailReports = value;
  }
  public resetSubscribeDashboardEmailReports() {
    this._subscribeDashboardEmailReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeDashboardEmailReportsInput() {
    return this._subscribeDashboardEmailReports;
  }

  // use_agent_web_search - computed: false, optional: true, required: false
  private _useAgentWebSearch?: string; 
  public get useAgentWebSearch() {
    return this.getStringAttribute('use_agent_web_search');
  }
  public set useAgentWebSearch(value: string) {
    this._useAgentWebSearch = value;
  }
  public resetUseAgentWebSearch() {
    this._useAgentWebSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAgentWebSearchInput() {
    return this._useAgentWebSearch;
  }

  // use_bedrock_models - computed: false, optional: true, required: false
  private _useBedrockModels?: string; 
  public get useBedrockModels() {
    return this.getStringAttribute('use_bedrock_models');
  }
  public set useBedrockModels(value: string) {
    this._useBedrockModels = value;
  }
  public resetUseBedrockModels() {
    this._useBedrockModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBedrockModelsInput() {
    return this._useBedrockModels;
  }

  // view_account_spice_capacity - computed: false, optional: true, required: false
  private _viewAccountSpiceCapacity?: string; 
  public get viewAccountSpiceCapacity() {
    return this.getStringAttribute('view_account_spice_capacity');
  }
  public set viewAccountSpiceCapacity(value: string) {
    this._viewAccountSpiceCapacity = value;
  }
  public resetViewAccountSpiceCapacity() {
    this._viewAccountSpiceCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewAccountSpiceCapacityInput() {
    return this._viewAccountSpiceCapacity;
  }
}

export class QuicksightCustomPermissionsCapabilitiesList extends cdktn.ComplexList {
  public internalValue? : QuicksightCustomPermissionsCapabilities[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightCustomPermissionsCapabilitiesOutputReference {
    return new QuicksightCustomPermissionsCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions aws_quicksight_custom_permissions}
*/
export class QuicksightCustomPermissions extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_custom_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a QuicksightCustomPermissions resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuicksightCustomPermissions to import
  * @param importFromId The id of the existing QuicksightCustomPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuicksightCustomPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_quicksight_custom_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/quicksight_custom_permissions aws_quicksight_custom_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightCustomPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightCustomPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_custom_permissions',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.71.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccountId = config.awsAccountId;
    this._customPermissionsName = config.customPermissionsName;
    this._region = config.region;
    this._tags = config.tags;
    this._capabilities.internalValue = config.capabilities;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // custom_permissions_name - computed: false, optional: false, required: true
  private _customPermissionsName?: string; 
  public get customPermissionsName() {
    return this.getStringAttribute('custom_permissions_name');
  }
  public set customPermissionsName(value: string) {
    this._customPermissionsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customPermissionsNameInput() {
    return this._customPermissionsName;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new QuicksightCustomPermissionsCapabilitiesList(this, "capabilities", false);
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: QuicksightCustomPermissionsCapabilities[] | cdktn.IResolvable) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      custom_permissions_name: cdktn.stringToTerraform(this._customPermissionsName),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      capabilities: cdktn.listMapper(quicksightCustomPermissionsCapabilitiesToTerraform, true)(this._capabilities.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktn.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_permissions_name: {
        value: cdktn.stringToHclTerraform(this._customPermissionsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      capabilities: {
        value: cdktn.listMapperHcl(quicksightCustomPermissionsCapabilitiesToHclTerraform, true)(this._capabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightCustomPermissionsCapabilitiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
