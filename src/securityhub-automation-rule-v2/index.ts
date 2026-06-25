/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityhubAutomationRuleV2Config extends cdktn.TerraformMetaArguments {
  /**
  * A description of the automation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2#description SecurityhubAutomationRuleV2#description}
  */
  readonly description: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2#region SecurityhubAutomationRuleV2#region}
  */
  readonly region?: string;
  /**
  * The name of the automation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2#rule_name SecurityhubAutomationRuleV2#rule_name}
  */
  readonly ruleName: string;
  /**
  * The priority of the rule (lower values = higher priority).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2#rule_order SecurityhubAutomationRuleV2#rule_order}
  */
  readonly ruleOrder: number;
  /**
  * The status of the rule: ENABLED or DISABLED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2#rule_status SecurityhubAutomationRuleV2#rule_status}
  */
  readonly ruleStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2#action SecurityhubAutomationRuleV2#action}
  */
  readonly action?: SecurityhubAutomationRuleV2Action[] | cdktn.IResolvable;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2#criteria SecurityhubAutomationRuleV2#criteria}
  */
  readonly criteria?: SecurityhubAutomationRuleV2Criteria[] | cdktn.IResolvable;
}
export interface SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration {
  /**
  * The ARN of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2#connector_arn SecurityhubAutomationRuleV2#connector_arn}
  */
  readonly connectorArn: string;
}

export function securityhubAutomationRuleV2ActionExternalIntegrationConfigurationToTerraform(struct?: SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connector_arn: cdktn.stringToTerraform(struct!.connectorArn),
  }
}


export function securityhubAutomationRuleV2ActionExternalIntegrationConfigurationToHclTerraform(struct?: SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connector_arn: {
      value: cdktn.stringToHclTerraform(struct!.connectorArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorArn = this._connectorArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorArn = value.connectorArn;
    }
  }

  // connector_arn - computed: false, optional: false, required: true
  private _connectorArn?: string; 
  public get connectorArn() {
    return this.getStringAttribute('connector_arn');
  }
  public set connectorArn(value: string) {
    this._connectorArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorArnInput() {
    return this._connectorArn;
  }
}

export class SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference {
    return new SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleV2ActionFindingFieldsUpdate {
  /**
  * A comment for the finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2#comment SecurityhubAutomationRuleV2#comment}
  */
  readonly comment?: string;
  /**
  * The severity ID to assign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2#severity_id SecurityhubAutomationRuleV2#severity_id}
  */
  readonly severityId?: number;
  /**
  * The status ID to assign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2#status_id SecurityhubAutomationRuleV2#status_id}
  */
  readonly statusId?: number;
}

export function securityhubAutomationRuleV2ActionFindingFieldsUpdateToTerraform(struct?: SecurityhubAutomationRuleV2ActionFindingFieldsUpdate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    severity_id: cdktn.numberToTerraform(struct!.severityId),
    status_id: cdktn.numberToTerraform(struct!.statusId),
  }
}


export function securityhubAutomationRuleV2ActionFindingFieldsUpdateToHclTerraform(struct?: SecurityhubAutomationRuleV2ActionFindingFieldsUpdate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity_id: {
      value: cdktn.numberToHclTerraform(struct!.severityId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_id: {
      value: cdktn.numberToHclTerraform(struct!.statusId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleV2ActionFindingFieldsUpdate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._severityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityId = this._severityId;
    }
    if (this._statusId !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusId = this._statusId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2ActionFindingFieldsUpdate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._severityId = undefined;
      this._statusId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._severityId = value.severityId;
      this._statusId = value.statusId;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // severity_id - computed: false, optional: true, required: false
  private _severityId?: number; 
  public get severityId() {
    return this.getNumberAttribute('severity_id');
  }
  public set severityId(value: number) {
    this._severityId = value;
  }
  public resetSeverityId() {
    this._severityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityIdInput() {
    return this._severityId;
  }

  // status_id - computed: false, optional: true, required: false
  private _statusId?: number; 
  public get statusId() {
    return this.getNumberAttribute('status_id');
  }
  public set statusId(value: number) {
    this._statusId = value;
  }
  public resetStatusId() {
    this._statusId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusIdInput() {
    return this._statusId;
  }
}

export class SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleV2ActionFindingFieldsUpdate[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference {
    return new SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleV2Action {
  /**
  * The action type: FINDING_FIELDS_UPDATE or EXTERNAL_INTEGRATION.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2#type SecurityhubAutomationRuleV2#type}
  */
  readonly type: string;
  /**
  * external_integration_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2#external_integration_configuration SecurityhubAutomationRuleV2#external_integration_configuration}
  */
  readonly externalIntegrationConfiguration?: SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration[] | cdktn.IResolvable;
  /**
  * finding_fields_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2#finding_fields_update SecurityhubAutomationRuleV2#finding_fields_update}
  */
  readonly findingFieldsUpdate?: SecurityhubAutomationRuleV2ActionFindingFieldsUpdate[] | cdktn.IResolvable;
}

export function securityhubAutomationRuleV2ActionToTerraform(struct?: SecurityhubAutomationRuleV2Action | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    external_integration_configuration: cdktn.listMapper(securityhubAutomationRuleV2ActionExternalIntegrationConfigurationToTerraform, true)(struct!.externalIntegrationConfiguration),
    finding_fields_update: cdktn.listMapper(securityhubAutomationRuleV2ActionFindingFieldsUpdateToTerraform, true)(struct!.findingFieldsUpdate),
  }
}


export function securityhubAutomationRuleV2ActionToHclTerraform(struct?: SecurityhubAutomationRuleV2Action | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_integration_configuration: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleV2ActionExternalIntegrationConfigurationToHclTerraform, true)(struct!.externalIntegrationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList",
    },
    finding_fields_update: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleV2ActionFindingFieldsUpdateToHclTerraform, true)(struct!.findingFieldsUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2ActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleV2Action | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._externalIntegrationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIntegrationConfiguration = this._externalIntegrationConfiguration?.internalValue;
    }
    if (this._findingFieldsUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingFieldsUpdate = this._findingFieldsUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2Action | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._externalIntegrationConfiguration.internalValue = undefined;
      this._findingFieldsUpdate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._externalIntegrationConfiguration.internalValue = value.externalIntegrationConfiguration;
      this._findingFieldsUpdate.internalValue = value.findingFieldsUpdate;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // external_integration_configuration - computed: false, optional: true, required: false
  private _externalIntegrationConfiguration = new SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList(this, "external_integration_configuration", false);
  public get externalIntegrationConfiguration() {
    return this._externalIntegrationConfiguration;
  }
  public putExternalIntegrationConfiguration(value: SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration[] | cdktn.IResolvable) {
    this._externalIntegrationConfiguration.internalValue = value;
  }
  public resetExternalIntegrationConfiguration() {
    this._externalIntegrationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIntegrationConfigurationInput() {
    return this._externalIntegrationConfiguration.internalValue;
  }

  // finding_fields_update - computed: false, optional: true, required: false
  private _findingFieldsUpdate = new SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList(this, "finding_fields_update", false);
  public get findingFieldsUpdate() {
    return this._findingFieldsUpdate;
  }
  public putFindingFieldsUpdate(value: SecurityhubAutomationRuleV2ActionFindingFieldsUpdate[] | cdktn.IResolvable) {
    this._findingFieldsUpdate.internalValue = value;
  }
  public resetFindingFieldsUpdate() {
    this._findingFieldsUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingFieldsUpdateInput() {
    return this._findingFieldsUpdate.internalValue;
  }
}

export class SecurityhubAutomationRuleV2ActionList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleV2Action[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleV2ActionOutputReference {
    return new SecurityhubAutomationRuleV2ActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleV2Criteria {
  /**
  * JSON-encoded OCSF finding criteria for the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2#ocsf_finding_criteria_json SecurityhubAutomationRuleV2#ocsf_finding_criteria_json}
  */
  readonly ocsfFindingCriteriaJson: string;
}

export function securityhubAutomationRuleV2CriteriaToTerraform(struct?: SecurityhubAutomationRuleV2Criteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ocsf_finding_criteria_json: cdktn.stringToTerraform(struct!.ocsfFindingCriteriaJson),
  }
}


export function securityhubAutomationRuleV2CriteriaToHclTerraform(struct?: SecurityhubAutomationRuleV2Criteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ocsf_finding_criteria_json: {
      value: cdktn.stringToHclTerraform(struct!.ocsfFindingCriteriaJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2CriteriaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleV2Criteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ocsfFindingCriteriaJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocsfFindingCriteriaJson = this._ocsfFindingCriteriaJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2Criteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ocsfFindingCriteriaJson = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ocsfFindingCriteriaJson = value.ocsfFindingCriteriaJson;
    }
  }

  // ocsf_finding_criteria_json - computed: false, optional: false, required: true
  private _ocsfFindingCriteriaJson?: string; 
  public get ocsfFindingCriteriaJson() {
    return this.getStringAttribute('ocsf_finding_criteria_json');
  }
  public set ocsfFindingCriteriaJson(value: string) {
    this._ocsfFindingCriteriaJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocsfFindingCriteriaJsonInput() {
    return this._ocsfFindingCriteriaJson;
  }
}

export class SecurityhubAutomationRuleV2CriteriaList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleV2Criteria[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleV2CriteriaOutputReference {
    return new SecurityhubAutomationRuleV2CriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2 aws_securityhub_automation_rule_v2}
*/
export class SecurityhubAutomationRuleV2 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_automation_rule_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubAutomationRuleV2 to import
  * @param importFromId The id of the existing SecurityhubAutomationRuleV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubAutomationRuleV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_automation_rule_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/securityhub_automation_rule_v2 aws_securityhub_automation_rule_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubAutomationRuleV2Config
  */
  public constructor(scope: Construct, id: string, config: SecurityhubAutomationRuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_automation_rule_v2',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.52.0',
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
    this._description = config.description;
    this._region = config.region;
    this._ruleName = config.ruleName;
    this._ruleOrder = config.ruleOrder;
    this._ruleStatus = config.ruleStatus;
    this._tags = config.tags;
    this._action.internalValue = config.action;
    this._criteria.internalValue = config.criteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_order - computed: false, optional: false, required: true
  private _ruleOrder?: number; 
  public get ruleOrder() {
    return this.getNumberAttribute('rule_order');
  }
  public set ruleOrder(value: number) {
    this._ruleOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOrderInput() {
    return this._ruleOrder;
  }

  // rule_status - computed: true, optional: true, required: false
  private _ruleStatus?: string; 
  public get ruleStatus() {
    return this.getStringAttribute('rule_status');
  }
  public set ruleStatus(value: string) {
    this._ruleStatus = value;
  }
  public resetRuleStatus() {
    this._ruleStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleStatusInput() {
    return this._ruleStatus;
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

  // action - computed: false, optional: true, required: false
  private _action = new SecurityhubAutomationRuleV2ActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: SecurityhubAutomationRuleV2Action[] | cdktn.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria = new SecurityhubAutomationRuleV2CriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: SecurityhubAutomationRuleV2Criteria[] | cdktn.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      region: cdktn.stringToTerraform(this._region),
      rule_name: cdktn.stringToTerraform(this._ruleName),
      rule_order: cdktn.numberToTerraform(this._ruleOrder),
      rule_status: cdktn.stringToTerraform(this._ruleStatus),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      action: cdktn.listMapper(securityhubAutomationRuleV2ActionToTerraform, true)(this._action.internalValue),
      criteria: cdktn.listMapper(securityhubAutomationRuleV2CriteriaToTerraform, true)(this._criteria.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      rule_name: {
        value: cdktn.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_order: {
        value: cdktn.numberToHclTerraform(this._ruleOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_status: {
        value: cdktn.stringToHclTerraform(this._ruleStatus),
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
      action: {
        value: cdktn.listMapperHcl(securityhubAutomationRuleV2ActionToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityhubAutomationRuleV2ActionList",
      },
      criteria: {
        value: cdktn.listMapperHcl(securityhubAutomationRuleV2CriteriaToHclTerraform, true)(this._criteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityhubAutomationRuleV2CriteriaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
