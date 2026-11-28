/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudwatchomniAlertConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#description CloudwatchomniAlert#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#name CloudwatchomniAlert#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#notifications_enabled CloudwatchomniAlert#notifications_enabled}
  */
  readonly notificationsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#profile_id CloudwatchomniAlert#profile_id}
  */
  readonly profileId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#region CloudwatchomniAlert#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#space_id CloudwatchomniAlert#space_id}
  */
  readonly spaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#tags CloudwatchomniAlert#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * notification_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#notification_rule CloudwatchomniAlert#notification_rule}
  */
  readonly notificationRule?: CloudwatchomniAlertNotificationRule[] | cdktn.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#rule CloudwatchomniAlert#rule}
  */
  readonly rule?: CloudwatchomniAlertRule[] | cdktn.IResolvable;
}
export interface CloudwatchomniAlertNotificationRuleTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#arn CloudwatchomniAlert#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#metadata CloudwatchomniAlert#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#type CloudwatchomniAlert#type}
  */
  readonly type: string;
}

export function cloudwatchomniAlertNotificationRuleTargetToTerraform(struct?: CloudwatchomniAlertNotificationRuleTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function cloudwatchomniAlertNotificationRuleTargetToHclTerraform(struct?: CloudwatchomniAlertNotificationRuleTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniAlertNotificationRuleTargetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniAlertNotificationRuleTarget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchomniAlertNotificationRuleTarget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._metadata = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._metadata = value.metadata;
      this._type = value.type;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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
}

export class CloudwatchomniAlertNotificationRuleTargetList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniAlertNotificationRuleTarget[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniAlertNotificationRuleTargetOutputReference {
    return new CloudwatchomniAlertNotificationRuleTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchomniAlertNotificationRuleTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#state_values CloudwatchomniAlert#state_values}
  */
  readonly stateValues?: string[];
}

export function cloudwatchomniAlertNotificationRuleTriggerToTerraform(struct?: CloudwatchomniAlertNotificationRuleTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stateValues),
  }
}


export function cloudwatchomniAlertNotificationRuleTriggerToHclTerraform(struct?: CloudwatchomniAlertNotificationRuleTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stateValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniAlertNotificationRuleTriggerOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniAlertNotificationRuleTrigger | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stateValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateValues = this._stateValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchomniAlertNotificationRuleTrigger | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stateValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stateValues = value.stateValues;
    }
  }

  // state_values - computed: false, optional: true, required: false
  private _stateValues?: string[]; 
  public get stateValues() {
    return cdktn.Fn.tolist(this.getListAttribute('state_values'));
  }
  public set stateValues(value: string[]) {
    this._stateValues = value;
  }
  public resetStateValues() {
    this._stateValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateValuesInput() {
    return this._stateValues;
  }
}

export class CloudwatchomniAlertNotificationRuleTriggerList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniAlertNotificationRuleTrigger[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniAlertNotificationRuleTriggerOutputReference {
    return new CloudwatchomniAlertNotificationRuleTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchomniAlertNotificationRule {
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#target CloudwatchomniAlert#target}
  */
  readonly target?: CloudwatchomniAlertNotificationRuleTarget[] | cdktn.IResolvable;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#trigger CloudwatchomniAlert#trigger}
  */
  readonly trigger?: CloudwatchomniAlertNotificationRuleTrigger[] | cdktn.IResolvable;
}

export function cloudwatchomniAlertNotificationRuleToTerraform(struct?: CloudwatchomniAlertNotificationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target: cdktn.listMapper(cloudwatchomniAlertNotificationRuleTargetToTerraform, true)(struct!.target),
    trigger: cdktn.listMapper(cloudwatchomniAlertNotificationRuleTriggerToTerraform, true)(struct!.trigger),
  }
}


export function cloudwatchomniAlertNotificationRuleToHclTerraform(struct?: CloudwatchomniAlertNotificationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target: {
      value: cdktn.listMapperHcl(cloudwatchomniAlertNotificationRuleTargetToHclTerraform, true)(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchomniAlertNotificationRuleTargetList",
    },
    trigger: {
      value: cdktn.listMapperHcl(cloudwatchomniAlertNotificationRuleTriggerToHclTerraform, true)(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchomniAlertNotificationRuleTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniAlertNotificationRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniAlertNotificationRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchomniAlertNotificationRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target.internalValue = undefined;
      this._trigger.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target.internalValue = value.target;
      this._trigger.internalValue = value.trigger;
    }
  }

  // target - computed: false, optional: true, required: false
  private _target = new CloudwatchomniAlertNotificationRuleTargetList(this, "target", false);
  public get target() {
    return this._target;
  }
  public putTarget(value: CloudwatchomniAlertNotificationRuleTarget[] | cdktn.IResolvable) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new CloudwatchomniAlertNotificationRuleTriggerList(this, "trigger", false);
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: CloudwatchomniAlertNotificationRuleTrigger[] | cdktn.IResolvable) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}

export class CloudwatchomniAlertNotificationRuleList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniAlertNotificationRule[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniAlertNotificationRuleOutputReference {
    return new CloudwatchomniAlertNotificationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchomniAlertRuleTelemetryRuleCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#comparator CloudwatchomniAlert#comparator}
  */
  readonly comparator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#critical_threshold CloudwatchomniAlert#critical_threshold}
  */
  readonly criticalThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#threshold_field CloudwatchomniAlert#threshold_field}
  */
  readonly thresholdField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#threshold_mode CloudwatchomniAlert#threshold_mode}
  */
  readonly thresholdMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#warning_threshold CloudwatchomniAlert#warning_threshold}
  */
  readonly warningThreshold?: number;
}

export function cloudwatchomniAlertRuleTelemetryRuleConditionToTerraform(struct?: CloudwatchomniAlertRuleTelemetryRuleCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparator: cdktn.stringToTerraform(struct!.comparator),
    critical_threshold: cdktn.numberToTerraform(struct!.criticalThreshold),
    threshold_field: cdktn.stringToTerraform(struct!.thresholdField),
    threshold_mode: cdktn.stringToTerraform(struct!.thresholdMode),
    warning_threshold: cdktn.numberToTerraform(struct!.warningThreshold),
  }
}


export function cloudwatchomniAlertRuleTelemetryRuleConditionToHclTerraform(struct?: CloudwatchomniAlertRuleTelemetryRuleCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparator: {
      value: cdktn.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    critical_threshold: {
      value: cdktn.numberToHclTerraform(struct!.criticalThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_field: {
      value: cdktn.stringToHclTerraform(struct!.thresholdField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_mode: {
      value: cdktn.stringToHclTerraform(struct!.thresholdMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_threshold: {
      value: cdktn.numberToHclTerraform(struct!.warningThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniAlertRuleTelemetryRuleCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._criticalThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalThreshold = this._criticalThreshold;
    }
    if (this._thresholdField !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdField = this._thresholdField;
    }
    if (this._thresholdMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdMode = this._thresholdMode;
    }
    if (this._warningThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningThreshold = this._warningThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchomniAlertRuleTelemetryRuleCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparator = undefined;
      this._criticalThreshold = undefined;
      this._thresholdField = undefined;
      this._thresholdMode = undefined;
      this._warningThreshold = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparator = value.comparator;
      this._criticalThreshold = value.criticalThreshold;
      this._thresholdField = value.thresholdField;
      this._thresholdMode = value.thresholdMode;
      this._warningThreshold = value.warningThreshold;
    }
  }

  // comparator - computed: false, optional: false, required: true
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // critical_threshold - computed: false, optional: true, required: false
  private _criticalThreshold?: number; 
  public get criticalThreshold() {
    return this.getNumberAttribute('critical_threshold');
  }
  public set criticalThreshold(value: number) {
    this._criticalThreshold = value;
  }
  public resetCriticalThreshold() {
    this._criticalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalThresholdInput() {
    return this._criticalThreshold;
  }

  // threshold_field - computed: false, optional: true, required: false
  private _thresholdField?: string; 
  public get thresholdField() {
    return this.getStringAttribute('threshold_field');
  }
  public set thresholdField(value: string) {
    this._thresholdField = value;
  }
  public resetThresholdField() {
    this._thresholdField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdFieldInput() {
    return this._thresholdField;
  }

  // threshold_mode - computed: false, optional: false, required: true
  private _thresholdMode?: string; 
  public get thresholdMode() {
    return this.getStringAttribute('threshold_mode');
  }
  public set thresholdMode(value: string) {
    this._thresholdMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdModeInput() {
    return this._thresholdMode;
  }

  // warning_threshold - computed: false, optional: true, required: false
  private _warningThreshold?: number; 
  public get warningThreshold() {
    return this.getNumberAttribute('warning_threshold');
  }
  public set warningThreshold(value: number) {
    this._warningThreshold = value;
  }
  public resetWarningThreshold() {
    this._warningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningThresholdInput() {
    return this._warningThreshold;
  }
}

export class CloudwatchomniAlertRuleTelemetryRuleConditionList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniAlertRuleTelemetryRuleCondition[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference {
    return new CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchomniAlertRuleTelemetryRuleEvaluation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#interval_seconds CloudwatchomniAlert#interval_seconds}
  */
  readonly intervalSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#pending_duration_seconds CloudwatchomniAlert#pending_duration_seconds}
  */
  readonly pendingDurationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#recovery_duration_seconds CloudwatchomniAlert#recovery_duration_seconds}
  */
  readonly recoveryDurationSeconds?: number;
}

export function cloudwatchomniAlertRuleTelemetryRuleEvaluationToTerraform(struct?: CloudwatchomniAlertRuleTelemetryRuleEvaluation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interval_seconds: cdktn.numberToTerraform(struct!.intervalSeconds),
    pending_duration_seconds: cdktn.numberToTerraform(struct!.pendingDurationSeconds),
    recovery_duration_seconds: cdktn.numberToTerraform(struct!.recoveryDurationSeconds),
  }
}


export function cloudwatchomniAlertRuleTelemetryRuleEvaluationToHclTerraform(struct?: CloudwatchomniAlertRuleTelemetryRuleEvaluation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interval_seconds: {
      value: cdktn.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pending_duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.pendingDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recovery_duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.recoveryDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniAlertRuleTelemetryRuleEvaluation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    if (this._pendingDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingDurationSeconds = this._pendingDurationSeconds;
    }
    if (this._recoveryDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryDurationSeconds = this._recoveryDurationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchomniAlertRuleTelemetryRuleEvaluation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intervalSeconds = undefined;
      this._pendingDurationSeconds = undefined;
      this._recoveryDurationSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intervalSeconds = value.intervalSeconds;
      this._pendingDurationSeconds = value.pendingDurationSeconds;
      this._recoveryDurationSeconds = value.recoveryDurationSeconds;
    }
  }

  // interval_seconds - computed: false, optional: false, required: true
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }

  // pending_duration_seconds - computed: true, optional: true, required: false
  private _pendingDurationSeconds?: number; 
  public get pendingDurationSeconds() {
    return this.getNumberAttribute('pending_duration_seconds');
  }
  public set pendingDurationSeconds(value: number) {
    this._pendingDurationSeconds = value;
  }
  public resetPendingDurationSeconds() {
    this._pendingDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingDurationSecondsInput() {
    return this._pendingDurationSeconds;
  }

  // recovery_duration_seconds - computed: true, optional: true, required: false
  private _recoveryDurationSeconds?: number; 
  public get recoveryDurationSeconds() {
    return this.getNumberAttribute('recovery_duration_seconds');
  }
  public set recoveryDurationSeconds(value: number) {
    this._recoveryDurationSeconds = value;
  }
  public resetRecoveryDurationSeconds() {
    this._recoveryDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryDurationSecondsInput() {
    return this._recoveryDurationSeconds;
  }
}

export class CloudwatchomniAlertRuleTelemetryRuleEvaluationList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniAlertRuleTelemetryRuleEvaluation[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference {
    return new CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchomniAlertRuleTelemetryRuleNoData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#treat_as CloudwatchomniAlert#treat_as}
  */
  readonly treatAs: string;
}

export function cloudwatchomniAlertRuleTelemetryRuleNoDataToTerraform(struct?: CloudwatchomniAlertRuleTelemetryRuleNoData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    treat_as: cdktn.stringToTerraform(struct!.treatAs),
  }
}


export function cloudwatchomniAlertRuleTelemetryRuleNoDataToHclTerraform(struct?: CloudwatchomniAlertRuleTelemetryRuleNoData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    treat_as: {
      value: cdktn.stringToHclTerraform(struct!.treatAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniAlertRuleTelemetryRuleNoData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._treatAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.treatAs = this._treatAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchomniAlertRuleTelemetryRuleNoData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._treatAs = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._treatAs = value.treatAs;
    }
  }

  // treat_as - computed: false, optional: false, required: true
  private _treatAs?: string; 
  public get treatAs() {
    return this.getStringAttribute('treat_as');
  }
  public set treatAs(value: string) {
    this._treatAs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get treatAsInput() {
    return this._treatAs;
  }
}

export class CloudwatchomniAlertRuleTelemetryRuleNoDataList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniAlertRuleTelemetryRuleNoData[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference {
    return new CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchomniAlertRuleTelemetryRuleQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#expression CloudwatchomniAlert#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#language CloudwatchomniAlert#language}
  */
  readonly language: string;
}

export function cloudwatchomniAlertRuleTelemetryRuleQueryToTerraform(struct?: CloudwatchomniAlertRuleTelemetryRuleQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    language: cdktn.stringToTerraform(struct!.language),
  }
}


export function cloudwatchomniAlertRuleTelemetryRuleQueryToHclTerraform(struct?: CloudwatchomniAlertRuleTelemetryRuleQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language: {
      value: cdktn.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniAlertRuleTelemetryRuleQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchomniAlertRuleTelemetryRuleQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._language = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._language = value.language;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }
}

export class CloudwatchomniAlertRuleTelemetryRuleQueryList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniAlertRuleTelemetryRuleQuery[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference {
    return new CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchomniAlertRuleTelemetryRule {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#condition CloudwatchomniAlert#condition}
  */
  readonly condition?: CloudwatchomniAlertRuleTelemetryRuleCondition[] | cdktn.IResolvable;
  /**
  * evaluation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#evaluation CloudwatchomniAlert#evaluation}
  */
  readonly evaluation?: CloudwatchomniAlertRuleTelemetryRuleEvaluation[] | cdktn.IResolvable;
  /**
  * no_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#no_data CloudwatchomniAlert#no_data}
  */
  readonly noData?: CloudwatchomniAlertRuleTelemetryRuleNoData[] | cdktn.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#query CloudwatchomniAlert#query}
  */
  readonly query?: CloudwatchomniAlertRuleTelemetryRuleQuery[] | cdktn.IResolvable;
}

export function cloudwatchomniAlertRuleTelemetryRuleToTerraform(struct?: CloudwatchomniAlertRuleTelemetryRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: cdktn.listMapper(cloudwatchomniAlertRuleTelemetryRuleConditionToTerraform, true)(struct!.condition),
    evaluation: cdktn.listMapper(cloudwatchomniAlertRuleTelemetryRuleEvaluationToTerraform, true)(struct!.evaluation),
    no_data: cdktn.listMapper(cloudwatchomniAlertRuleTelemetryRuleNoDataToTerraform, true)(struct!.noData),
    query: cdktn.listMapper(cloudwatchomniAlertRuleTelemetryRuleQueryToTerraform, true)(struct!.query),
  }
}


export function cloudwatchomniAlertRuleTelemetryRuleToHclTerraform(struct?: CloudwatchomniAlertRuleTelemetryRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: cdktn.listMapperHcl(cloudwatchomniAlertRuleTelemetryRuleConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchomniAlertRuleTelemetryRuleConditionList",
    },
    evaluation: {
      value: cdktn.listMapperHcl(cloudwatchomniAlertRuleTelemetryRuleEvaluationToHclTerraform, true)(struct!.evaluation),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchomniAlertRuleTelemetryRuleEvaluationList",
    },
    no_data: {
      value: cdktn.listMapperHcl(cloudwatchomniAlertRuleTelemetryRuleNoDataToHclTerraform, true)(struct!.noData),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchomniAlertRuleTelemetryRuleNoDataList",
    },
    query: {
      value: cdktn.listMapperHcl(cloudwatchomniAlertRuleTelemetryRuleQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchomniAlertRuleTelemetryRuleQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniAlertRuleTelemetryRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniAlertRuleTelemetryRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._evaluation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluation = this._evaluation?.internalValue;
    }
    if (this._noData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noData = this._noData?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchomniAlertRuleTelemetryRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._evaluation.internalValue = undefined;
      this._noData.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._evaluation.internalValue = value.evaluation;
      this._noData.internalValue = value.noData;
      this._query.internalValue = value.query;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new CloudwatchomniAlertRuleTelemetryRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: CloudwatchomniAlertRuleTelemetryRuleCondition[] | cdktn.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // evaluation - computed: false, optional: true, required: false
  private _evaluation = new CloudwatchomniAlertRuleTelemetryRuleEvaluationList(this, "evaluation", false);
  public get evaluation() {
    return this._evaluation;
  }
  public putEvaluation(value: CloudwatchomniAlertRuleTelemetryRuleEvaluation[] | cdktn.IResolvable) {
    this._evaluation.internalValue = value;
  }
  public resetEvaluation() {
    this._evaluation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationInput() {
    return this._evaluation.internalValue;
  }

  // no_data - computed: false, optional: true, required: false
  private _noData = new CloudwatchomniAlertRuleTelemetryRuleNoDataList(this, "no_data", false);
  public get noData() {
    return this._noData;
  }
  public putNoData(value: CloudwatchomniAlertRuleTelemetryRuleNoData[] | cdktn.IResolvable) {
    this._noData.internalValue = value;
  }
  public resetNoData() {
    this._noData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDataInput() {
    return this._noData.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new CloudwatchomniAlertRuleTelemetryRuleQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: CloudwatchomniAlertRuleTelemetryRuleQuery[] | cdktn.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}

export class CloudwatchomniAlertRuleTelemetryRuleList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniAlertRuleTelemetryRule[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniAlertRuleTelemetryRuleOutputReference {
    return new CloudwatchomniAlertRuleTelemetryRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchomniAlertRule {
  /**
  * telemetry_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#telemetry_rule CloudwatchomniAlert#telemetry_rule}
  */
  readonly telemetryRule?: CloudwatchomniAlertRuleTelemetryRule[] | cdktn.IResolvable;
}

export function cloudwatchomniAlertRuleToTerraform(struct?: CloudwatchomniAlertRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    telemetry_rule: cdktn.listMapper(cloudwatchomniAlertRuleTelemetryRuleToTerraform, true)(struct!.telemetryRule),
  }
}


export function cloudwatchomniAlertRuleToHclTerraform(struct?: CloudwatchomniAlertRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    telemetry_rule: {
      value: cdktn.listMapperHcl(cloudwatchomniAlertRuleTelemetryRuleToHclTerraform, true)(struct!.telemetryRule),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchomniAlertRuleTelemetryRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniAlertRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniAlertRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._telemetryRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetryRule = this._telemetryRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchomniAlertRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._telemetryRule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._telemetryRule.internalValue = value.telemetryRule;
    }
  }

  // telemetry_rule - computed: false, optional: true, required: false
  private _telemetryRule = new CloudwatchomniAlertRuleTelemetryRuleList(this, "telemetry_rule", false);
  public get telemetryRule() {
    return this._telemetryRule;
  }
  public putTelemetryRule(value: CloudwatchomniAlertRuleTelemetryRule[] | cdktn.IResolvable) {
    this._telemetryRule.internalValue = value;
  }
  public resetTelemetryRule() {
    this._telemetryRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryRuleInput() {
    return this._telemetryRule.internalValue;
  }
}

export class CloudwatchomniAlertRuleList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniAlertRule[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniAlertRuleOutputReference {
    return new CloudwatchomniAlertRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert aws_cloudwatchomni_alert}
*/
export class CloudwatchomniAlert extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatchomni_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudwatchomniAlert resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchomniAlert to import
  * @param importFromId The id of the existing CloudwatchomniAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchomniAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatchomni_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert aws_cloudwatchomni_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchomniAlertConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchomniAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatchomni_alert',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.74.0',
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
    this._name = config.name;
    this._notificationsEnabled = config.notificationsEnabled;
    this._profileId = config.profileId;
    this._region = config.region;
    this._spaceId = config.spaceId;
    this._tags = config.tags;
    this._notificationRule.internalValue = config.notificationRule;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_id - computed: true, optional: false, required: false
  public get alertId() {
    return this.getStringAttribute('alert_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notifications_enabled - computed: true, optional: true, required: false
  private _notificationsEnabled?: boolean | cdktn.IResolvable; 
  public get notificationsEnabled() {
    return this.getBooleanAttribute('notifications_enabled');
  }
  public set notificationsEnabled(value: boolean | cdktn.IResolvable) {
    this._notificationsEnabled = value;
  }
  public resetNotificationsEnabled() {
    this._notificationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsEnabledInput() {
    return this._notificationsEnabled;
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
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

  // space_id - computed: false, optional: false, required: true
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
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

  // notification_rule - computed: false, optional: true, required: false
  private _notificationRule = new CloudwatchomniAlertNotificationRuleList(this, "notification_rule", false);
  public get notificationRule() {
    return this._notificationRule;
  }
  public putNotificationRule(value: CloudwatchomniAlertNotificationRule[] | cdktn.IResolvable) {
    this._notificationRule.internalValue = value;
  }
  public resetNotificationRule() {
    this._notificationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationRuleInput() {
    return this._notificationRule.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new CloudwatchomniAlertRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: CloudwatchomniAlertRule[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      notifications_enabled: cdktn.booleanToTerraform(this._notificationsEnabled),
      profile_id: cdktn.stringToTerraform(this._profileId),
      region: cdktn.stringToTerraform(this._region),
      space_id: cdktn.stringToTerraform(this._spaceId),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      notification_rule: cdktn.listMapper(cloudwatchomniAlertNotificationRuleToTerraform, true)(this._notificationRule.internalValue),
      rule: cdktn.listMapper(cloudwatchomniAlertRuleToTerraform, true)(this._rule.internalValue),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notifications_enabled: {
        value: cdktn.booleanToHclTerraform(this._notificationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      profile_id: {
        value: cdktn.stringToHclTerraform(this._profileId),
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
      space_id: {
        value: cdktn.stringToHclTerraform(this._spaceId),
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
      notification_rule: {
        value: cdktn.listMapperHcl(cloudwatchomniAlertNotificationRuleToHclTerraform, true)(this._notificationRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchomniAlertNotificationRuleList",
      },
      rule: {
        value: cdktn.listMapperHcl(cloudwatchomniAlertRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchomniAlertRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
