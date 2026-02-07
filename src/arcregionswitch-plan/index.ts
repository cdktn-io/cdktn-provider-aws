/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArcregionswitchPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#description ArcregionswitchPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#execution_role ArcregionswitchPlan#execution_role}
  */
  readonly executionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#name ArcregionswitchPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#primary_region ArcregionswitchPlan#primary_region}
  */
  readonly primaryRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#recovery_approach ArcregionswitchPlan#recovery_approach}
  */
  readonly recoveryApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#recovery_time_objective_minutes ArcregionswitchPlan#recovery_time_objective_minutes}
  */
  readonly recoveryTimeObjectiveMinutes?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#region ArcregionswitchPlan#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#regions ArcregionswitchPlan#regions}
  */
  readonly regions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#tags ArcregionswitchPlan#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * associated_alarms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#associated_alarms ArcregionswitchPlan#associated_alarms}
  */
  readonly associatedAlarms?: ArcregionswitchPlanAssociatedAlarms[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeouts ArcregionswitchPlan#timeouts}
  */
  readonly timeouts?: ArcregionswitchPlanTimeouts;
  /**
  * triggers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#triggers ArcregionswitchPlan#triggers}
  */
  readonly triggers?: ArcregionswitchPlanTriggers[] | cdktf.IResolvable;
  /**
  * workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#workflow ArcregionswitchPlan#workflow}
  */
  readonly workflow?: ArcregionswitchPlanWorkflow[] | cdktf.IResolvable;
}
export interface ArcregionswitchPlanAssociatedAlarms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#alarm_type ArcregionswitchPlan#alarm_type}
  */
  readonly alarmType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#map_block_key ArcregionswitchPlan#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#resource_identifier ArcregionswitchPlan#resource_identifier}
  */
  readonly resourceIdentifier: string;
}

export function arcregionswitchPlanAssociatedAlarmsToTerraform(struct?: ArcregionswitchPlanAssociatedAlarms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_type: cdktf.stringToTerraform(struct!.alarmType),
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    map_block_key: cdktf.stringToTerraform(struct!.mapBlockKey),
    resource_identifier: cdktf.stringToTerraform(struct!.resourceIdentifier),
  }
}


export function arcregionswitchPlanAssociatedAlarmsToHclTerraform(struct?: ArcregionswitchPlanAssociatedAlarms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarm_type: {
      value: cdktf.stringToHclTerraform(struct!.alarmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    map_block_key: {
      value: cdktf.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_identifier: {
      value: cdktf.stringToHclTerraform(struct!.resourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanAssociatedAlarmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanAssociatedAlarms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmType = this._alarmType;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._resourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceIdentifier = this._resourceIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanAssociatedAlarms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmType = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._mapBlockKey = undefined;
      this._resourceIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmType = value.alarmType;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._mapBlockKey = value.mapBlockKey;
      this._resourceIdentifier = value.resourceIdentifier;
    }
  }

  // alarm_type - computed: false, optional: false, required: true
  private _alarmType?: string; 
  public get alarmType() {
    return this.getStringAttribute('alarm_type');
  }
  public set alarmType(value: string) {
    this._alarmType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmTypeInput() {
    return this._alarmType;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // resource_identifier - computed: false, optional: false, required: true
  private _resourceIdentifier?: string; 
  public get resourceIdentifier() {
    return this.getStringAttribute('resource_identifier');
  }
  public set resourceIdentifier(value: string) {
    this._resourceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdentifierInput() {
    return this._resourceIdentifier;
  }
}

export class ArcregionswitchPlanAssociatedAlarmsList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanAssociatedAlarms[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanAssociatedAlarmsOutputReference {
    return new ArcregionswitchPlanAssociatedAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#create ArcregionswitchPlan#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#delete ArcregionswitchPlan#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#update ArcregionswitchPlan#update}
  */
  readonly update?: string;
}

export function arcregionswitchPlanTimeoutsToTerraform(struct?: ArcregionswitchPlanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function arcregionswitchPlanTimeoutsToHclTerraform(struct?: ArcregionswitchPlanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArcregionswitchPlanTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ArcregionswitchPlanTriggersConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#associated_alarm_name ArcregionswitchPlan#associated_alarm_name}
  */
  readonly associatedAlarmName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#condition ArcregionswitchPlan#condition}
  */
  readonly condition: string;
}

export function arcregionswitchPlanTriggersConditionsToTerraform(struct?: ArcregionswitchPlanTriggersConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associated_alarm_name: cdktf.stringToTerraform(struct!.associatedAlarmName),
    condition: cdktf.stringToTerraform(struct!.condition),
  }
}


export function arcregionswitchPlanTriggersConditionsToHclTerraform(struct?: ArcregionswitchPlanTriggersConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    associated_alarm_name: {
      value: cdktf.stringToHclTerraform(struct!.associatedAlarmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanTriggersConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanTriggersConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associatedAlarmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedAlarmName = this._associatedAlarmName;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanTriggersConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associatedAlarmName = undefined;
      this._condition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associatedAlarmName = value.associatedAlarmName;
      this._condition = value.condition;
    }
  }

  // associated_alarm_name - computed: false, optional: false, required: true
  private _associatedAlarmName?: string; 
  public get associatedAlarmName() {
    return this.getStringAttribute('associated_alarm_name');
  }
  public set associatedAlarmName(value: string) {
    this._associatedAlarmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedAlarmNameInput() {
    return this._associatedAlarmName;
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }
}

export class ArcregionswitchPlanTriggersConditionsList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanTriggersConditions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanTriggersConditionsOutputReference {
    return new ArcregionswitchPlanTriggersConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanTriggers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#action ArcregionswitchPlan#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#description ArcregionswitchPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#min_delay_minutes_between_executions ArcregionswitchPlan#min_delay_minutes_between_executions}
  */
  readonly minDelayMinutesBetweenExecutions: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#target_region ArcregionswitchPlan#target_region}
  */
  readonly targetRegion: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#conditions ArcregionswitchPlan#conditions}
  */
  readonly conditions?: ArcregionswitchPlanTriggersConditions[] | cdktf.IResolvable;
}

export function arcregionswitchPlanTriggersToTerraform(struct?: ArcregionswitchPlanTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    min_delay_minutes_between_executions: cdktf.numberToTerraform(struct!.minDelayMinutesBetweenExecutions),
    target_region: cdktf.stringToTerraform(struct!.targetRegion),
    conditions: cdktf.listMapper(arcregionswitchPlanTriggersConditionsToTerraform, true)(struct!.conditions),
  }
}


export function arcregionswitchPlanTriggersToHclTerraform(struct?: ArcregionswitchPlanTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_delay_minutes_between_executions: {
      value: cdktf.numberToHclTerraform(struct!.minDelayMinutesBetweenExecutions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_region: {
      value: cdktf.stringToHclTerraform(struct!.targetRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(arcregionswitchPlanTriggersConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanTriggersConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanTriggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._minDelayMinutesBetweenExecutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDelayMinutesBetweenExecutions = this._minDelayMinutesBetweenExecutions;
    }
    if (this._targetRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRegion = this._targetRegion;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._minDelayMinutesBetweenExecutions = undefined;
      this._targetRegion = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._minDelayMinutesBetweenExecutions = value.minDelayMinutesBetweenExecutions;
      this._targetRegion = value.targetRegion;
      this._conditions.internalValue = value.conditions;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // min_delay_minutes_between_executions - computed: false, optional: false, required: true
  private _minDelayMinutesBetweenExecutions?: number; 
  public get minDelayMinutesBetweenExecutions() {
    return this.getNumberAttribute('min_delay_minutes_between_executions');
  }
  public set minDelayMinutesBetweenExecutions(value: number) {
    this._minDelayMinutesBetweenExecutions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minDelayMinutesBetweenExecutionsInput() {
    return this._minDelayMinutesBetweenExecutions;
  }

  // target_region - computed: false, optional: false, required: true
  private _targetRegion?: string; 
  public get targetRegion() {
    return this.getStringAttribute('target_region');
  }
  public set targetRegion(value: string) {
    this._targetRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionInput() {
    return this._targetRegion;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new ArcregionswitchPlanTriggersConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ArcregionswitchPlanTriggersConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class ArcregionswitchPlanTriggersList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanTriggers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanTriggersOutputReference {
    return new ArcregionswitchPlanTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#routing_control_arn ArcregionswitchPlan#routing_control_arn}
  */
  readonly routingControlArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#state ArcregionswitchPlan#state}
  */
  readonly state: string;
}

export function arcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlToTerraform(struct?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_control_arn: cdktf.stringToTerraform(struct!.routingControlArn),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function arcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routing_control_arn: {
      value: cdktf.stringToHclTerraform(struct!.routingControlArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingControlArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingControlArn = this._routingControlArn;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingControlArn = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingControlArn = value.routingControlArn;
      this._state = value.state;
    }
  }

  // routing_control_arn - computed: false, optional: false, required: true
  private _routingControlArn?: string; 
  public get routingControlArn() {
    return this.getStringAttribute('routing_control_arn');
  }
  public set routingControlArn(value: string) {
    this._routingControlArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingControlArnInput() {
    return this._routingControlArn;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlOutputReference {
    return new ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#region ArcregionswitchPlan#region}
  */
  readonly region: string;
  /**
  * routing_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#routing_control ArcregionswitchPlan#routing_control}
  */
  readonly routingControl?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsToTerraform(struct?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    routing_control: cdktf.listMapper(arcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlToTerraform, true)(struct!.routingControl),
  }
}


export function arcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_control: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlToHclTerraform, true)(struct!.routingControl),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._routingControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingControl = this._routingControl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._routingControl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._routingControl.internalValue = value.routingControl;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // routing_control - computed: false, optional: true, required: false
  private _routingControl = new ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlList(this, "routing_control", false);
  public get routingControl() {
    return this._routingControl;
  }
  public putRoutingControl(value: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl[] | cdktf.IResolvable) {
    this._routingControl.internalValue = value;
  }
  public resetRoutingControl() {
    this._routingControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingControlInput() {
    return this._routingControl.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControls[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsOutputReference {
    return new ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepArcRoutingControlConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * region_and_routing_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#region_and_routing_controls ArcregionswitchPlan#region_and_routing_controls}
  */
  readonly regionAndRoutingControls?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControls[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepArcRoutingControlConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    region_and_routing_controls: cdktf.listMapper(arcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsToTerraform, true)(struct!.regionAndRoutingControls),
  }
}


export function arcregionswitchPlanWorkflowStepArcRoutingControlConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_and_routing_controls: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsToHclTerraform, true)(struct!.regionAndRoutingControls),
      isBlock: true,
      type: "set",
      storageClassType: "ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepArcRoutingControlConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepArcRoutingControlConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._regionAndRoutingControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionAndRoutingControls = this._regionAndRoutingControls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepArcRoutingControlConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._timeoutMinutes = undefined;
      this._regionAndRoutingControls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._timeoutMinutes = value.timeoutMinutes;
      this._regionAndRoutingControls.internalValue = value.regionAndRoutingControls;
    }
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // region_and_routing_controls - computed: false, optional: true, required: false
  private _regionAndRoutingControls = new ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsList(this, "region_and_routing_controls", true);
  public get regionAndRoutingControls() {
    return this._regionAndRoutingControls;
  }
  public putRegionAndRoutingControls(value: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControls[] | cdktf.IResolvable) {
    this._regionAndRoutingControls.internalValue = value;
  }
  public resetRegionAndRoutingControls() {
    this._regionAndRoutingControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionAndRoutingControlsInput() {
    return this._regionAndRoutingControls.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepArcRoutingControlConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepArcRoutingControlConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepArcRoutingControlConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepArcRoutingControlConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambda {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#arn ArcregionswitchPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
}

export function arcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaToTerraform(struct?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktf.stringToTerraform(struct!.externalId),
  }
}


export function arcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambda | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambda | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
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

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambda[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaOutputReference {
    return new ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#behavior ArcregionswitchPlan#behavior}
  */
  readonly behavior: string;
}

export function arcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
  }
}


export function arcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngraceful | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngraceful | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }
}

export class ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngraceful[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepCustomActionLambdaConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#region_to_run ArcregionswitchPlan#region_to_run}
  */
  readonly regionToRun: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#retry_interval_minutes ArcregionswitchPlan#retry_interval_minutes}
  */
  readonly retryIntervalMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#lambda ArcregionswitchPlan#lambda}
  */
  readonly lambda?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambda[] | cdktf.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngraceful[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepCustomActionLambdaConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_to_run: cdktf.stringToTerraform(struct!.regionToRun),
    retry_interval_minutes: cdktf.numberToTerraform(struct!.retryIntervalMinutes),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    lambda: cdktf.listMapper(arcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaToTerraform, true)(struct!.lambda),
    ungraceful: cdktf.listMapper(arcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepCustomActionLambdaConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_to_run: {
      value: cdktf.stringToHclTerraform(struct!.regionToRun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_interval_minutes: {
      value: cdktf.numberToHclTerraform(struct!.retryIntervalMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lambda: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaToHclTerraform, true)(struct!.lambda),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaList",
    },
    ungraceful: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepCustomActionLambdaConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionToRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionToRun = this._regionToRun;
    }
    if (this._retryIntervalMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryIntervalMinutes = this._retryIntervalMinutes;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionToRun = undefined;
      this._retryIntervalMinutes = undefined;
      this._timeoutMinutes = undefined;
      this._lambda.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionToRun = value.regionToRun;
      this._retryIntervalMinutes = value.retryIntervalMinutes;
      this._timeoutMinutes = value.timeoutMinutes;
      this._lambda.internalValue = value.lambda;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // region_to_run - computed: false, optional: false, required: true
  private _regionToRun?: string; 
  public get regionToRun() {
    return this.getStringAttribute('region_to_run');
  }
  public set regionToRun(value: string) {
    this._regionToRun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionToRunInput() {
    return this._regionToRun;
  }

  // retry_interval_minutes - computed: false, optional: false, required: true
  private _retryIntervalMinutes?: number; 
  public get retryIntervalMinutes() {
    return this.getNumberAttribute('retry_interval_minutes');
  }
  public set retryIntervalMinutes(value: number) {
    this._retryIntervalMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalMinutesInput() {
    return this._retryIntervalMinutes;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda = new ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaList(this, "lambda", false);
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambda[] | cdktf.IResolvable) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngraceful[] | cdktf.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepCustomActionLambdaConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepDocumentDbConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful: string;
}

export function arcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepDocumentDbConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ungraceful: cdktf.stringToTerraform(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepDocumentDbConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ungraceful: {
      value: cdktf.stringToHclTerraform(struct!.ungraceful),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepDocumentDbConfigUngraceful | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ungraceful !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepDocumentDbConfigUngraceful | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ungraceful = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ungraceful = value.ungraceful;
    }
  }

  // ungraceful - computed: false, optional: false, required: true
  private _ungraceful?: string; 
  public get ungraceful() {
    return this.getStringAttribute('ungraceful');
  }
  public set ungraceful(value: string) {
    this._ungraceful = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful;
  }
}

export class ArcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepDocumentDbConfigUngraceful[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepDocumentDbConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#behavior ArcregionswitchPlan#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#database_cluster_arns ArcregionswitchPlan#database_cluster_arns}
  */
  readonly databaseClusterArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#global_cluster_identifier ArcregionswitchPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepDocumentDbConfigUngraceful[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepDocumentDbConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepDocumentDbConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    database_cluster_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databaseClusterArns),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktf.stringToTerraform(struct!.globalClusterIdentifier),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    ungraceful: cdktf.listMapper(arcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepDocumentDbConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepDocumentDbConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_cluster_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databaseClusterArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktf.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ungraceful: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepDocumentDbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepDocumentDbConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._databaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseClusterArns = this._databaseClusterArns;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepDocumentDbConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._crossAccountRole = undefined;
      this._databaseClusterArns = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._timeoutMinutes = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._crossAccountRole = value.crossAccountRole;
      this._databaseClusterArns = value.databaseClusterArns;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._timeoutMinutes = value.timeoutMinutes;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // database_cluster_arns - computed: false, optional: false, required: true
  private _databaseClusterArns?: string[]; 
  public get databaseClusterArns() {
    return this.getListAttribute('database_cluster_arns');
  }
  public set databaseClusterArns(value: string[]) {
    this._databaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseClusterArnsInput() {
    return this._databaseClusterArns;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new ArcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepDocumentDbConfigUngraceful[] | cdktf.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepDocumentDbConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepDocumentDbConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepDocumentDbConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepDocumentDbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#arn ArcregionswitchPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
}

export function arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgToTerraform(struct?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktf.stringToTerraform(struct!.externalId),
  }
}


export function arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
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

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsg[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgOutputReference {
    return new ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#minimum_success_percentage ArcregionswitchPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}

export function arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_success_percentage: cdktf.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktf.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngraceful | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumSuccessPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSuccessPercentage = this._minimumSuccessPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngraceful | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = value.minimumSuccessPercentage;
    }
  }

  // minimum_success_percentage - computed: false, optional: false, required: true
  private _minimumSuccessPercentage?: number; 
  public get minimumSuccessPercentage() {
    return this.getNumberAttribute('minimum_success_percentage');
  }
  public set minimumSuccessPercentage(value: number) {
    this._minimumSuccessPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSuccessPercentageInput() {
    return this._minimumSuccessPercentage;
  }
}

export class ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngraceful[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach ArcregionswitchPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#target_percent ArcregionswitchPlan#target_percent}
  */
  readonly targetPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * asg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#asg ArcregionswitchPlan#asg}
  */
  readonly asg?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsg[] | cdktf.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngraceful[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_monitoring_approach: cdktf.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktf.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    asg: cdktf.listMapper(arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgToTerraform, true)(struct!.asg),
    ungraceful: cdktf.listMapper(arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktf.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktf.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asg: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgToHclTerraform, true)(struct!.asg),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgList",
    },
    ungraceful: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityMonitoringApproach !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityMonitoringApproach = this._capacityMonitoringApproach;
    }
    if (this._targetPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercent = this._targetPercent;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._asg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asg = this._asg?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
      this._asg.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = value.capacityMonitoringApproach;
      this._targetPercent = value.targetPercent;
      this._timeoutMinutes = value.timeoutMinutes;
      this._asg.internalValue = value.asg;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // capacity_monitoring_approach - computed: false, optional: false, required: true
  private _capacityMonitoringApproach?: string; 
  public get capacityMonitoringApproach() {
    return this.getStringAttribute('capacity_monitoring_approach');
  }
  public set capacityMonitoringApproach(value: string) {
    this._capacityMonitoringApproach = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityMonitoringApproachInput() {
    return this._capacityMonitoringApproach;
  }

  // target_percent - computed: false, optional: true, required: false
  private _targetPercent?: number; 
  public get targetPercent() {
    return this.getNumberAttribute('target_percent');
  }
  public set targetPercent(value: number) {
    this._targetPercent = value;
  }
  public resetTargetPercent() {
    this._targetPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentInput() {
    return this._targetPercent;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // asg - computed: false, optional: true, required: false
  private _asg = new ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgList(this, "asg", false);
  public get asg() {
    return this._asg;
  }
  public putAsg(value: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsg[] | cdktf.IResolvable) {
    this._asg.internalValue = value;
  }
  public resetAsg() {
    this._asg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asgInput() {
    return this._asg.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngraceful[] | cdktf.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cluster_arn ArcregionswitchPlan#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#service_arn ArcregionswitchPlan#service_arn}
  */
  readonly serviceArn: string;
}

export function arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceToTerraform(struct?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_arn: cdktf.stringToTerraform(struct!.clusterArn),
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    service_arn: cdktf.stringToTerraform(struct!.serviceArn),
  }
}


export function arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_arn: {
      value: cdktf.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_arn: {
      value: cdktf.stringToHclTerraform(struct!.serviceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterArn = this._clusterArn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._serviceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceArn = this._serviceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._serviceArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterArn = value.clusterArn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._serviceArn = value.serviceArn;
    }
  }

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // service_arn - computed: false, optional: false, required: true
  private _serviceArn?: string; 
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }
  public set serviceArn(value: string) {
    this._serviceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceArnInput() {
    return this._serviceArn;
  }
}

export class ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigService[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceOutputReference {
    return new ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#minimum_success_percentage ArcregionswitchPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}

export function arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_success_percentage: cdktf.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktf.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngraceful | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumSuccessPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSuccessPercentage = this._minimumSuccessPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngraceful | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = value.minimumSuccessPercentage;
    }
  }

  // minimum_success_percentage - computed: false, optional: false, required: true
  private _minimumSuccessPercentage?: number; 
  public get minimumSuccessPercentage() {
    return this.getNumberAttribute('minimum_success_percentage');
  }
  public set minimumSuccessPercentage(value: number) {
    this._minimumSuccessPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSuccessPercentageInput() {
    return this._minimumSuccessPercentage;
  }
}

export class ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngraceful[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach ArcregionswitchPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#target_percent ArcregionswitchPlan#target_percent}
  */
  readonly targetPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#service ArcregionswitchPlan#service}
  */
  readonly service?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigService[] | cdktf.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngraceful[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_monitoring_approach: cdktf.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktf.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    service: cdktf.listMapper(arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceToTerraform, true)(struct!.service),
    ungraceful: cdktf.listMapper(arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktf.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktf.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceToHclTerraform, true)(struct!.service),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceList",
    },
    ungraceful: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityMonitoringApproach !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityMonitoringApproach = this._capacityMonitoringApproach;
    }
    if (this._targetPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercent = this._targetPercent;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
      this._service.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = value.capacityMonitoringApproach;
      this._targetPercent = value.targetPercent;
      this._timeoutMinutes = value.timeoutMinutes;
      this._service.internalValue = value.service;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // capacity_monitoring_approach - computed: false, optional: false, required: true
  private _capacityMonitoringApproach?: string; 
  public get capacityMonitoringApproach() {
    return this.getStringAttribute('capacity_monitoring_approach');
  }
  public set capacityMonitoringApproach(value: string) {
    this._capacityMonitoringApproach = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityMonitoringApproachInput() {
    return this._capacityMonitoringApproach;
  }

  // target_percent - computed: false, optional: true, required: false
  private _targetPercent?: number; 
  public get targetPercent() {
    return this.getNumberAttribute('target_percent');
  }
  public set targetPercent(value: number) {
    this._targetPercent = value;
  }
  public resetTargetPercent() {
    this._targetPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentInput() {
    return this._targetPercent;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // service - computed: false, optional: true, required: false
  private _service = new ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceList(this, "service", false);
  public get service() {
    return this._service;
  }
  public putService(value: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngraceful[] | cdktf.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClusters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cluster_arn ArcregionswitchPlan#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
}

export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersToTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_arn: cdktf.stringToTerraform(struct!.clusterArn),
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktf.stringToTerraform(struct!.externalId),
  }
}


export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_arn: {
      value: cdktf.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterArn = this._clusterArn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterArn = value.clusterArn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
    }
  }

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClusters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersOutputReference {
    return new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#api_version ArcregionswitchPlan#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#kind ArcregionswitchPlan#kind}
  */
  readonly kind: string;
}

export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeToTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceType[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeOutputReference {
    return new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#hpa_name ArcregionswitchPlan#hpa_name}
  */
  readonly hpaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#name ArcregionswitchPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#namespace ArcregionswitchPlan#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#resource_name ArcregionswitchPlan#resource_name}
  */
  readonly resourceName: string;
}

export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesToTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hpa_name: cdktf.stringToTerraform(struct!.hpaName),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
  }
}


export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hpa_name: {
      value: cdktf.stringToHclTerraform(struct!.hpaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hpaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpaName = this._hpaName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hpaName = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hpaName = value.hpaName;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceName = value.resourceName;
    }
  }

  // hpa_name - computed: false, optional: true, required: false
  private _hpaName?: string; 
  public get hpaName() {
    return this.getStringAttribute('hpa_name');
  }
  public set hpaName(value: string) {
    this._hpaName = value;
  }
  public resetHpaName() {
    this._hpaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpaNameInput() {
    return this._hpaName;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesOutputReference {
    return new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#namespace ArcregionswitchPlan#namespace}
  */
  readonly namespace: string;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#resources ArcregionswitchPlan#resources}
  */
  readonly resources?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResources[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesToTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resources: cdktf.listMapper(arcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesToTerraform, true)(struct!.resources),
  }
}


export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "set",
      storageClassType: "ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._resources.internalValue = value.resources;
    }
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesOutputReference {
    return new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#minimum_success_percentage ArcregionswitchPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}

export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_success_percentage: cdktf.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktf.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngraceful | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumSuccessPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSuccessPercentage = this._minimumSuccessPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngraceful | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = value.minimumSuccessPercentage;
    }
  }

  // minimum_success_percentage - computed: false, optional: false, required: true
  private _minimumSuccessPercentage?: number; 
  public get minimumSuccessPercentage() {
    return this.getNumberAttribute('minimum_success_percentage');
  }
  public set minimumSuccessPercentage(value: number) {
    this._minimumSuccessPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSuccessPercentageInput() {
    return this._minimumSuccessPercentage;
  }
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngraceful[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEksResourceScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach ArcregionswitchPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#target_percent ArcregionswitchPlan#target_percent}
  */
  readonly targetPercent: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * eks_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#eks_clusters ArcregionswitchPlan#eks_clusters}
  */
  readonly eksClusters?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClusters[] | cdktf.IResolvable;
  /**
  * kubernetes_resource_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#kubernetes_resource_type ArcregionswitchPlan#kubernetes_resource_type}
  */
  readonly kubernetesResourceType?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceType[] | cdktf.IResolvable;
  /**
  * scaling_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#scaling_resources ArcregionswitchPlan#scaling_resources}
  */
  readonly scalingResources?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResources[] | cdktf.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngraceful[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_monitoring_approach: cdktf.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktf.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    eks_clusters: cdktf.listMapper(arcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersToTerraform, true)(struct!.eksClusters),
    kubernetes_resource_type: cdktf.listMapper(arcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeToTerraform, true)(struct!.kubernetesResourceType),
    scaling_resources: cdktf.listMapper(arcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesToTerraform, true)(struct!.scalingResources),
    ungraceful: cdktf.listMapper(arcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktf.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktf.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eks_clusters: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersToHclTerraform, true)(struct!.eksClusters),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersList",
    },
    kubernetes_resource_type: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeToHclTerraform, true)(struct!.kubernetesResourceType),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeList",
    },
    scaling_resources: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesToHclTerraform, true)(struct!.scalingResources),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesList",
    },
    ungraceful: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepEksResourceScalingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityMonitoringApproach !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityMonitoringApproach = this._capacityMonitoringApproach;
    }
    if (this._targetPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercent = this._targetPercent;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._eksClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksClusters = this._eksClusters?.internalValue;
    }
    if (this._kubernetesResourceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesResourceType = this._kubernetesResourceType?.internalValue;
    }
    if (this._scalingResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingResources = this._scalingResources?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
      this._eksClusters.internalValue = undefined;
      this._kubernetesResourceType.internalValue = undefined;
      this._scalingResources.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = value.capacityMonitoringApproach;
      this._targetPercent = value.targetPercent;
      this._timeoutMinutes = value.timeoutMinutes;
      this._eksClusters.internalValue = value.eksClusters;
      this._kubernetesResourceType.internalValue = value.kubernetesResourceType;
      this._scalingResources.internalValue = value.scalingResources;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // capacity_monitoring_approach - computed: false, optional: false, required: true
  private _capacityMonitoringApproach?: string; 
  public get capacityMonitoringApproach() {
    return this.getStringAttribute('capacity_monitoring_approach');
  }
  public set capacityMonitoringApproach(value: string) {
    this._capacityMonitoringApproach = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityMonitoringApproachInput() {
    return this._capacityMonitoringApproach;
  }

  // target_percent - computed: false, optional: false, required: true
  private _targetPercent?: number; 
  public get targetPercent() {
    return this.getNumberAttribute('target_percent');
  }
  public set targetPercent(value: number) {
    this._targetPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentInput() {
    return this._targetPercent;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // eks_clusters - computed: false, optional: true, required: false
  private _eksClusters = new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersList(this, "eks_clusters", false);
  public get eksClusters() {
    return this._eksClusters;
  }
  public putEksClusters(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClusters[] | cdktf.IResolvable) {
    this._eksClusters.internalValue = value;
  }
  public resetEksClusters() {
    this._eksClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksClustersInput() {
    return this._eksClusters.internalValue;
  }

  // kubernetes_resource_type - computed: false, optional: true, required: false
  private _kubernetesResourceType = new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeList(this, "kubernetes_resource_type", false);
  public get kubernetesResourceType() {
    return this._kubernetesResourceType;
  }
  public putKubernetesResourceType(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceType[] | cdktf.IResolvable) {
    this._kubernetesResourceType.internalValue = value;
  }
  public resetKubernetesResourceType() {
    this._kubernetesResourceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesResourceTypeInput() {
    return this._kubernetesResourceType.internalValue;
  }

  // scaling_resources - computed: false, optional: true, required: false
  private _scalingResources = new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesList(this, "scaling_resources", false);
  public get scalingResources() {
    return this._scalingResources;
  }
  public putScalingResources(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResources[] | cdktf.IResolvable) {
    this._scalingResources.internalValue = value;
  }
  public resetScalingResources() {
    this._scalingResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingResourcesInput() {
    return this._scalingResources.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngraceful[] | cdktf.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEksResourceScalingConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepExecutionApprovalConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#approval_role ArcregionswitchPlan#approval_role}
  */
  readonly approvalRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

export function arcregionswitchPlanWorkflowStepExecutionApprovalConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepExecutionApprovalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approval_role: cdktf.stringToTerraform(struct!.approvalRole),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function arcregionswitchPlanWorkflowStepExecutionApprovalConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepExecutionApprovalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approval_role: {
      value: cdktf.stringToHclTerraform(struct!.approvalRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepExecutionApprovalConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepExecutionApprovalConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvalRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalRole = this._approvalRole;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepExecutionApprovalConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approvalRole = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approvalRole = value.approvalRole;
      this._timeoutMinutes = value.timeoutMinutes;
    }
  }

  // approval_role - computed: false, optional: false, required: true
  private _approvalRole?: string; 
  public get approvalRole() {
    return this.getStringAttribute('approval_role');
  }
  public set approvalRole(value: string) {
    this._approvalRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRoleInput() {
    return this._approvalRole;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }
}

export class ArcregionswitchPlanWorkflowStepExecutionApprovalConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepExecutionApprovalConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepExecutionApprovalConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepExecutionApprovalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful: string;
}

export function arcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ungraceful: cdktf.stringToTerraform(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ungraceful: {
      value: cdktf.stringToHclTerraform(struct!.ungraceful),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngraceful | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ungraceful !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngraceful | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ungraceful = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ungraceful = value.ungraceful;
    }
  }

  // ungraceful - computed: false, optional: false, required: true
  private _ungraceful?: string; 
  public get ungraceful() {
    return this.getStringAttribute('ungraceful');
  }
  public set ungraceful(value: string) {
    this._ungraceful = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful;
  }
}

export class ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngraceful[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepGlobalAuroraConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#behavior ArcregionswitchPlan#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#database_cluster_arns ArcregionswitchPlan#database_cluster_arns}
  */
  readonly databaseClusterArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#global_cluster_identifier ArcregionswitchPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngraceful[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepGlobalAuroraConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepGlobalAuroraConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    database_cluster_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databaseClusterArns),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktf.stringToTerraform(struct!.globalClusterIdentifier),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    ungraceful: cdktf.listMapper(arcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepGlobalAuroraConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepGlobalAuroraConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_cluster_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databaseClusterArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktf.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ungraceful: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepGlobalAuroraConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepGlobalAuroraConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._databaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseClusterArns = this._databaseClusterArns;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepGlobalAuroraConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._crossAccountRole = undefined;
      this._databaseClusterArns = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._timeoutMinutes = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._crossAccountRole = value.crossAccountRole;
      this._databaseClusterArns = value.databaseClusterArns;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._timeoutMinutes = value.timeoutMinutes;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // database_cluster_arns - computed: false, optional: false, required: true
  private _databaseClusterArns?: string[]; 
  public get databaseClusterArns() {
    return this.getListAttribute('database_cluster_arns');
  }
  public set databaseClusterArns(value: string[]) {
    this._databaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseClusterArnsInput() {
    return this._databaseClusterArns;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngraceful[] | cdktf.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepGlobalAuroraConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepGlobalAuroraConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepGlobalAuroraConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepGlobalAuroraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#routing_control_arn ArcregionswitchPlan#routing_control_arn}
  */
  readonly routingControlArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#state ArcregionswitchPlan#state}
  */
  readonly state: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_control_arn: cdktf.stringToTerraform(struct!.routingControlArn),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routing_control_arn: {
      value: cdktf.stringToHclTerraform(struct!.routingControlArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingControlArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingControlArn = this._routingControlArn;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingControlArn = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingControlArn = value.routingControlArn;
      this._state = value.state;
    }
  }

  // routing_control_arn - computed: false, optional: false, required: true
  private _routingControlArn?: string; 
  public get routingControlArn() {
    return this.getStringAttribute('routing_control_arn');
  }
  public set routingControlArn(value: string) {
    this._routingControlArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingControlArnInput() {
    return this._routingControlArn;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#region ArcregionswitchPlan#region}
  */
  readonly region: string;
  /**
  * routing_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#routing_control ArcregionswitchPlan#routing_control}
  */
  readonly routingControl?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    routing_control: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlToTerraform, true)(struct!.routingControl),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_control: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlToHclTerraform, true)(struct!.routingControl),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._routingControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingControl = this._routingControl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._routingControl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._routingControl.internalValue = value.routingControl;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // routing_control - computed: false, optional: true, required: false
  private _routingControl = new ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlList(this, "routing_control", false);
  public get routingControl() {
    return this._routingControl;
  }
  public putRoutingControl(value: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl[] | cdktf.IResolvable) {
    this._routingControl.internalValue = value;
  }
  public resetRoutingControl() {
    this._routingControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingControlInput() {
    return this._routingControl.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControls[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * region_and_routing_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#region_and_routing_controls ArcregionswitchPlan#region_and_routing_controls}
  */
  readonly regionAndRoutingControls?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControls[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    region_and_routing_controls: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsToTerraform, true)(struct!.regionAndRoutingControls),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_and_routing_controls: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsToHclTerraform, true)(struct!.regionAndRoutingControls),
      isBlock: true,
      type: "set",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._regionAndRoutingControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionAndRoutingControls = this._regionAndRoutingControls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._timeoutMinutes = undefined;
      this._regionAndRoutingControls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._timeoutMinutes = value.timeoutMinutes;
      this._regionAndRoutingControls.internalValue = value.regionAndRoutingControls;
    }
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // region_and_routing_controls - computed: false, optional: true, required: false
  private _regionAndRoutingControls = new ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsList(this, "region_and_routing_controls", true);
  public get regionAndRoutingControls() {
    return this._regionAndRoutingControls;
  }
  public putRegionAndRoutingControls(value: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControls[] | cdktf.IResolvable) {
    this._regionAndRoutingControls.internalValue = value;
  }
  public resetRegionAndRoutingControls() {
    this._regionAndRoutingControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionAndRoutingControlsInput() {
    return this._regionAndRoutingControls.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambda {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#arn ArcregionswitchPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktf.stringToTerraform(struct!.externalId),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambda | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambda | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
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

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambda[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#behavior ArcregionswitchPlan#behavior}
  */
  readonly behavior: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngraceful | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngraceful | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngraceful[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#region_to_run ArcregionswitchPlan#region_to_run}
  */
  readonly regionToRun: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#retry_interval_minutes ArcregionswitchPlan#retry_interval_minutes}
  */
  readonly retryIntervalMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#lambda ArcregionswitchPlan#lambda}
  */
  readonly lambda?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambda[] | cdktf.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngraceful[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_to_run: cdktf.stringToTerraform(struct!.regionToRun),
    retry_interval_minutes: cdktf.numberToTerraform(struct!.retryIntervalMinutes),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    lambda: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaToTerraform, true)(struct!.lambda),
    ungraceful: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_to_run: {
      value: cdktf.stringToHclTerraform(struct!.regionToRun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_interval_minutes: {
      value: cdktf.numberToHclTerraform(struct!.retryIntervalMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lambda: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaToHclTerraform, true)(struct!.lambda),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaList",
    },
    ungraceful: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionToRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionToRun = this._regionToRun;
    }
    if (this._retryIntervalMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryIntervalMinutes = this._retryIntervalMinutes;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionToRun = undefined;
      this._retryIntervalMinutes = undefined;
      this._timeoutMinutes = undefined;
      this._lambda.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionToRun = value.regionToRun;
      this._retryIntervalMinutes = value.retryIntervalMinutes;
      this._timeoutMinutes = value.timeoutMinutes;
      this._lambda.internalValue = value.lambda;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // region_to_run - computed: false, optional: false, required: true
  private _regionToRun?: string; 
  public get regionToRun() {
    return this.getStringAttribute('region_to_run');
  }
  public set regionToRun(value: string) {
    this._regionToRun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionToRunInput() {
    return this._regionToRun;
  }

  // retry_interval_minutes - computed: false, optional: false, required: true
  private _retryIntervalMinutes?: number; 
  public get retryIntervalMinutes() {
    return this.getNumberAttribute('retry_interval_minutes');
  }
  public set retryIntervalMinutes(value: number) {
    this._retryIntervalMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalMinutesInput() {
    return this._retryIntervalMinutes;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda = new ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaList(this, "lambda", false);
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambda[] | cdktf.IResolvable) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngraceful[] | cdktf.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ungraceful: cdktf.stringToTerraform(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ungraceful: {
      value: cdktf.stringToHclTerraform(struct!.ungraceful),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngraceful | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ungraceful !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngraceful | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ungraceful = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ungraceful = value.ungraceful;
    }
  }

  // ungraceful - computed: false, optional: false, required: true
  private _ungraceful?: string; 
  public get ungraceful() {
    return this.getStringAttribute('ungraceful');
  }
  public set ungraceful(value: string) {
    this._ungraceful = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngraceful[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#behavior ArcregionswitchPlan#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#database_cluster_arns ArcregionswitchPlan#database_cluster_arns}
  */
  readonly databaseClusterArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#global_cluster_identifier ArcregionswitchPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngraceful[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    database_cluster_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databaseClusterArns),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktf.stringToTerraform(struct!.globalClusterIdentifier),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    ungraceful: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_cluster_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databaseClusterArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktf.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ungraceful: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._databaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseClusterArns = this._databaseClusterArns;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._crossAccountRole = undefined;
      this._databaseClusterArns = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._timeoutMinutes = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._crossAccountRole = value.crossAccountRole;
      this._databaseClusterArns = value.databaseClusterArns;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._timeoutMinutes = value.timeoutMinutes;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // database_cluster_arns - computed: false, optional: false, required: true
  private _databaseClusterArns?: string[]; 
  public get databaseClusterArns() {
    return this.getListAttribute('database_cluster_arns');
  }
  public set databaseClusterArns(value: string[]) {
    this._databaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseClusterArnsInput() {
    return this._databaseClusterArns;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngraceful[] | cdktf.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#arn ArcregionswitchPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktf.stringToTerraform(struct!.externalId),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
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

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsg[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#minimum_success_percentage ArcregionswitchPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_success_percentage: cdktf.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktf.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngraceful | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumSuccessPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSuccessPercentage = this._minimumSuccessPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngraceful | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = value.minimumSuccessPercentage;
    }
  }

  // minimum_success_percentage - computed: false, optional: false, required: true
  private _minimumSuccessPercentage?: number; 
  public get minimumSuccessPercentage() {
    return this.getNumberAttribute('minimum_success_percentage');
  }
  public set minimumSuccessPercentage(value: number) {
    this._minimumSuccessPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSuccessPercentageInput() {
    return this._minimumSuccessPercentage;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngraceful[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach ArcregionswitchPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#target_percent ArcregionswitchPlan#target_percent}
  */
  readonly targetPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * asg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#asg ArcregionswitchPlan#asg}
  */
  readonly asg?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsg[] | cdktf.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngraceful[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_monitoring_approach: cdktf.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktf.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    asg: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgToTerraform, true)(struct!.asg),
    ungraceful: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktf.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktf.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asg: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgToHclTerraform, true)(struct!.asg),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgList",
    },
    ungraceful: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityMonitoringApproach !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityMonitoringApproach = this._capacityMonitoringApproach;
    }
    if (this._targetPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercent = this._targetPercent;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._asg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asg = this._asg?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
      this._asg.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = value.capacityMonitoringApproach;
      this._targetPercent = value.targetPercent;
      this._timeoutMinutes = value.timeoutMinutes;
      this._asg.internalValue = value.asg;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // capacity_monitoring_approach - computed: false, optional: false, required: true
  private _capacityMonitoringApproach?: string; 
  public get capacityMonitoringApproach() {
    return this.getStringAttribute('capacity_monitoring_approach');
  }
  public set capacityMonitoringApproach(value: string) {
    this._capacityMonitoringApproach = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityMonitoringApproachInput() {
    return this._capacityMonitoringApproach;
  }

  // target_percent - computed: false, optional: true, required: false
  private _targetPercent?: number; 
  public get targetPercent() {
    return this.getNumberAttribute('target_percent');
  }
  public set targetPercent(value: number) {
    this._targetPercent = value;
  }
  public resetTargetPercent() {
    this._targetPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentInput() {
    return this._targetPercent;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // asg - computed: false, optional: true, required: false
  private _asg = new ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgList(this, "asg", false);
  public get asg() {
    return this._asg;
  }
  public putAsg(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsg[] | cdktf.IResolvable) {
    this._asg.internalValue = value;
  }
  public resetAsg() {
    this._asg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asgInput() {
    return this._asg.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngraceful[] | cdktf.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cluster_arn ArcregionswitchPlan#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#service_arn ArcregionswitchPlan#service_arn}
  */
  readonly serviceArn: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_arn: cdktf.stringToTerraform(struct!.clusterArn),
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    service_arn: cdktf.stringToTerraform(struct!.serviceArn),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_arn: {
      value: cdktf.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_arn: {
      value: cdktf.stringToHclTerraform(struct!.serviceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterArn = this._clusterArn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._serviceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceArn = this._serviceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._serviceArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterArn = value.clusterArn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._serviceArn = value.serviceArn;
    }
  }

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // service_arn - computed: false, optional: false, required: true
  private _serviceArn?: string; 
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }
  public set serviceArn(value: string) {
    this._serviceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceArnInput() {
    return this._serviceArn;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigService[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#minimum_success_percentage ArcregionswitchPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_success_percentage: cdktf.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktf.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngraceful | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumSuccessPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSuccessPercentage = this._minimumSuccessPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngraceful | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = value.minimumSuccessPercentage;
    }
  }

  // minimum_success_percentage - computed: false, optional: false, required: true
  private _minimumSuccessPercentage?: number; 
  public get minimumSuccessPercentage() {
    return this.getNumberAttribute('minimum_success_percentage');
  }
  public set minimumSuccessPercentage(value: number) {
    this._minimumSuccessPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSuccessPercentageInput() {
    return this._minimumSuccessPercentage;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngraceful[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach ArcregionswitchPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#target_percent ArcregionswitchPlan#target_percent}
  */
  readonly targetPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#service ArcregionswitchPlan#service}
  */
  readonly service?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigService[] | cdktf.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngraceful[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_monitoring_approach: cdktf.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktf.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    service: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceToTerraform, true)(struct!.service),
    ungraceful: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktf.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktf.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceToHclTerraform, true)(struct!.service),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceList",
    },
    ungraceful: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityMonitoringApproach !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityMonitoringApproach = this._capacityMonitoringApproach;
    }
    if (this._targetPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercent = this._targetPercent;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
      this._service.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = value.capacityMonitoringApproach;
      this._targetPercent = value.targetPercent;
      this._timeoutMinutes = value.timeoutMinutes;
      this._service.internalValue = value.service;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // capacity_monitoring_approach - computed: false, optional: false, required: true
  private _capacityMonitoringApproach?: string; 
  public get capacityMonitoringApproach() {
    return this.getStringAttribute('capacity_monitoring_approach');
  }
  public set capacityMonitoringApproach(value: string) {
    this._capacityMonitoringApproach = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityMonitoringApproachInput() {
    return this._capacityMonitoringApproach;
  }

  // target_percent - computed: false, optional: true, required: false
  private _targetPercent?: number; 
  public get targetPercent() {
    return this.getNumberAttribute('target_percent');
  }
  public set targetPercent(value: number) {
    this._targetPercent = value;
  }
  public resetTargetPercent() {
    this._targetPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentInput() {
    return this._targetPercent;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // service - computed: false, optional: true, required: false
  private _service = new ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceList(this, "service", false);
  public get service() {
    return this._service;
  }
  public putService(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngraceful[] | cdktf.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClusters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cluster_arn ArcregionswitchPlan#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_arn: cdktf.stringToTerraform(struct!.clusterArn),
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktf.stringToTerraform(struct!.externalId),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_arn: {
      value: cdktf.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterArn = this._clusterArn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterArn = value.clusterArn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
    }
  }

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClusters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#api_version ArcregionswitchPlan#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#kind ArcregionswitchPlan#kind}
  */
  readonly kind: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceType[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#hpa_name ArcregionswitchPlan#hpa_name}
  */
  readonly hpaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#name ArcregionswitchPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#namespace ArcregionswitchPlan#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#resource_name ArcregionswitchPlan#resource_name}
  */
  readonly resourceName: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hpa_name: cdktf.stringToTerraform(struct!.hpaName),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hpa_name: {
      value: cdktf.stringToHclTerraform(struct!.hpaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hpaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpaName = this._hpaName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hpaName = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hpaName = value.hpaName;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceName = value.resourceName;
    }
  }

  // hpa_name - computed: false, optional: true, required: false
  private _hpaName?: string; 
  public get hpaName() {
    return this.getStringAttribute('hpa_name');
  }
  public set hpaName(value: string) {
    this._hpaName = value;
  }
  public resetHpaName() {
    this._hpaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpaNameInput() {
    return this._hpaName;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#namespace ArcregionswitchPlan#namespace}
  */
  readonly namespace: string;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#resources ArcregionswitchPlan#resources}
  */
  readonly resources?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResources[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resources: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesToTerraform, true)(struct!.resources),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "set",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._resources.internalValue = value.resources;
    }
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#minimum_success_percentage ArcregionswitchPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_success_percentage: cdktf.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktf.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngraceful | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumSuccessPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSuccessPercentage = this._minimumSuccessPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngraceful | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = value.minimumSuccessPercentage;
    }
  }

  // minimum_success_percentage - computed: false, optional: false, required: true
  private _minimumSuccessPercentage?: number; 
  public get minimumSuccessPercentage() {
    return this.getNumberAttribute('minimum_success_percentage');
  }
  public set minimumSuccessPercentage(value: number) {
    this._minimumSuccessPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSuccessPercentageInput() {
    return this._minimumSuccessPercentage;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngraceful[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach ArcregionswitchPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#target_percent ArcregionswitchPlan#target_percent}
  */
  readonly targetPercent: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * eks_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#eks_clusters ArcregionswitchPlan#eks_clusters}
  */
  readonly eksClusters?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClusters[] | cdktf.IResolvable;
  /**
  * kubernetes_resource_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#kubernetes_resource_type ArcregionswitchPlan#kubernetes_resource_type}
  */
  readonly kubernetesResourceType?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceType[] | cdktf.IResolvable;
  /**
  * scaling_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#scaling_resources ArcregionswitchPlan#scaling_resources}
  */
  readonly scalingResources?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResources[] | cdktf.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngraceful[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_monitoring_approach: cdktf.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktf.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    eks_clusters: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersToTerraform, true)(struct!.eksClusters),
    kubernetes_resource_type: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeToTerraform, true)(struct!.kubernetesResourceType),
    scaling_resources: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesToTerraform, true)(struct!.scalingResources),
    ungraceful: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktf.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktf.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eks_clusters: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersToHclTerraform, true)(struct!.eksClusters),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersList",
    },
    kubernetes_resource_type: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeToHclTerraform, true)(struct!.kubernetesResourceType),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeList",
    },
    scaling_resources: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesToHclTerraform, true)(struct!.scalingResources),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesList",
    },
    ungraceful: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityMonitoringApproach !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityMonitoringApproach = this._capacityMonitoringApproach;
    }
    if (this._targetPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercent = this._targetPercent;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._eksClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksClusters = this._eksClusters?.internalValue;
    }
    if (this._kubernetesResourceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesResourceType = this._kubernetesResourceType?.internalValue;
    }
    if (this._scalingResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingResources = this._scalingResources?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
      this._eksClusters.internalValue = undefined;
      this._kubernetesResourceType.internalValue = undefined;
      this._scalingResources.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = value.capacityMonitoringApproach;
      this._targetPercent = value.targetPercent;
      this._timeoutMinutes = value.timeoutMinutes;
      this._eksClusters.internalValue = value.eksClusters;
      this._kubernetesResourceType.internalValue = value.kubernetesResourceType;
      this._scalingResources.internalValue = value.scalingResources;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // capacity_monitoring_approach - computed: false, optional: false, required: true
  private _capacityMonitoringApproach?: string; 
  public get capacityMonitoringApproach() {
    return this.getStringAttribute('capacity_monitoring_approach');
  }
  public set capacityMonitoringApproach(value: string) {
    this._capacityMonitoringApproach = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityMonitoringApproachInput() {
    return this._capacityMonitoringApproach;
  }

  // target_percent - computed: false, optional: false, required: true
  private _targetPercent?: number; 
  public get targetPercent() {
    return this.getNumberAttribute('target_percent');
  }
  public set targetPercent(value: number) {
    this._targetPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentInput() {
    return this._targetPercent;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // eks_clusters - computed: false, optional: true, required: false
  private _eksClusters = new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersList(this, "eks_clusters", false);
  public get eksClusters() {
    return this._eksClusters;
  }
  public putEksClusters(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClusters[] | cdktf.IResolvable) {
    this._eksClusters.internalValue = value;
  }
  public resetEksClusters() {
    this._eksClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksClustersInput() {
    return this._eksClusters.internalValue;
  }

  // kubernetes_resource_type - computed: false, optional: true, required: false
  private _kubernetesResourceType = new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeList(this, "kubernetes_resource_type", false);
  public get kubernetesResourceType() {
    return this._kubernetesResourceType;
  }
  public putKubernetesResourceType(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceType[] | cdktf.IResolvable) {
    this._kubernetesResourceType.internalValue = value;
  }
  public resetKubernetesResourceType() {
    this._kubernetesResourceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesResourceTypeInput() {
    return this._kubernetesResourceType.internalValue;
  }

  // scaling_resources - computed: false, optional: true, required: false
  private _scalingResources = new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesList(this, "scaling_resources", false);
  public get scalingResources() {
    return this._scalingResources;
  }
  public putScalingResources(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResources[] | cdktf.IResolvable) {
    this._scalingResources.internalValue = value;
  }
  public resetScalingResources() {
    this._scalingResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingResourcesInput() {
    return this._scalingResources.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngraceful[] | cdktf.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#approval_role ArcregionswitchPlan#approval_role}
  */
  readonly approvalRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approval_role: cdktf.stringToTerraform(struct!.approvalRole),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approval_role: {
      value: cdktf.stringToHclTerraform(struct!.approvalRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvalRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalRole = this._approvalRole;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approvalRole = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approvalRole = value.approvalRole;
      this._timeoutMinutes = value.timeoutMinutes;
    }
  }

  // approval_role - computed: false, optional: false, required: true
  private _approvalRole?: string; 
  public get approvalRole() {
    return this.getStringAttribute('approval_role');
  }
  public set approvalRole(value: string) {
    this._approvalRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRoleInput() {
    return this._approvalRole;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ungraceful: cdktf.stringToTerraform(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngraceful | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ungraceful: {
      value: cdktf.stringToHclTerraform(struct!.ungraceful),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngraceful | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ungraceful !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngraceful | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ungraceful = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ungraceful = value.ungraceful;
    }
  }

  // ungraceful - computed: false, optional: false, required: true
  private _ungraceful?: string; 
  public get ungraceful() {
    return this.getStringAttribute('ungraceful');
  }
  public set ungraceful(value: string) {
    this._ungraceful = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngraceful[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#behavior ArcregionswitchPlan#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#database_cluster_arns ArcregionswitchPlan#database_cluster_arns}
  */
  readonly databaseClusterArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#global_cluster_identifier ArcregionswitchPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngraceful[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    database_cluster_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databaseClusterArns),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktf.stringToTerraform(struct!.globalClusterIdentifier),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    ungraceful: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_cluster_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databaseClusterArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktf.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ungraceful: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._databaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseClusterArns = this._databaseClusterArns;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._crossAccountRole = undefined;
      this._databaseClusterArns = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._timeoutMinutes = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._crossAccountRole = value.crossAccountRole;
      this._databaseClusterArns = value.databaseClusterArns;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._timeoutMinutes = value.timeoutMinutes;
      this._ungraceful.internalValue = value.ungraceful;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // database_cluster_arns - computed: false, optional: false, required: true
  private _databaseClusterArns?: string[]; 
  public get databaseClusterArns() {
    return this.getListAttribute('database_cluster_arns');
  }
  public set databaseClusterArns(value: string[]) {
    this._databaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseClusterArnsInput() {
    return this._databaseClusterArns;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngraceful[] | cdktf.IResolvable) {
    this._ungraceful.internalValue = value;
  }
  public resetUngraceful() {
    this._ungraceful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ungracefulInput() {
    return this._ungraceful.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#arn ArcregionswitchPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktf.stringToTerraform(struct!.externalId),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
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

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#record_set_identifier ArcregionswitchPlan#record_set_identifier}
  */
  readonly recordSetIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#region ArcregionswitchPlan#region}
  */
  readonly region: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_set_identifier: cdktf.stringToTerraform(struct!.recordSetIdentifier),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record_set_identifier: {
      value: cdktf.stringToHclTerraform(struct!.recordSetIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSetIdentifier = this._recordSetIdentifier;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordSetIdentifier = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recordSetIdentifier = value.recordSetIdentifier;
      this._region = value.region;
    }
  }

  // record_set_identifier - computed: false, optional: false, required: true
  private _recordSetIdentifier?: string; 
  public get recordSetIdentifier() {
    return this.getStringAttribute('record_set_identifier');
  }
  public set recordSetIdentifier(value: string) {
    this._recordSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetIdentifierInput() {
    return this._recordSetIdentifier;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSet[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#hosted_zone_id ArcregionswitchPlan#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#record_name ArcregionswitchPlan#record_name}
  */
  readonly recordName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * record_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#record_set ArcregionswitchPlan#record_set}
  */
  readonly recordSet?: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSet[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    hosted_zone_id: cdktf.stringToTerraform(struct!.hostedZoneId),
    record_name: cdktf.stringToTerraform(struct!.recordName),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    record_set: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetToTerraform, true)(struct!.recordSet),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosted_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.hostedZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_name: {
      value: cdktf.stringToHclTerraform(struct!.recordName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_set: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetToHclTerraform, true)(struct!.recordSet),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._hostedZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedZoneId = this._hostedZoneId;
    }
    if (this._recordName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordName = this._recordName;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._recordSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSet = this._recordSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._hostedZoneId = undefined;
      this._recordName = undefined;
      this._timeoutMinutes = undefined;
      this._recordSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._hostedZoneId = value.hostedZoneId;
      this._recordName = value.recordName;
      this._timeoutMinutes = value.timeoutMinutes;
      this._recordSet.internalValue = value.recordSet;
    }
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // hosted_zone_id - computed: false, optional: false, required: true
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
  }

  // record_name - computed: false, optional: false, required: true
  private _recordName?: string; 
  public get recordName() {
    return this.getStringAttribute('record_name');
  }
  public set recordName(value: string) {
    this._recordName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordNameInput() {
    return this._recordName;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // record_set - computed: false, optional: true, required: false
  private _recordSet = new ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetList(this, "record_set", false);
  public get recordSet() {
    return this._recordSet;
  }
  public putRecordSet(value: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSet[] | cdktf.IResolvable) {
    this._recordSet.internalValue = value;
  }
  public resetRecordSet() {
    this._recordSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetInput() {
    return this._recordSet.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#description ArcregionswitchPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#execution_block_type ArcregionswitchPlan#execution_block_type}
  */
  readonly executionBlockType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#name ArcregionswitchPlan#name}
  */
  readonly name: string;
  /**
  * arc_routing_control_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#arc_routing_control_config ArcregionswitchPlan#arc_routing_control_config}
  */
  readonly arcRoutingControlConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfig[] | cdktf.IResolvable;
  /**
  * custom_action_lambda_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#custom_action_lambda_config ArcregionswitchPlan#custom_action_lambda_config}
  */
  readonly customActionLambdaConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfig[] | cdktf.IResolvable;
  /**
  * document_db_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#document_db_config ArcregionswitchPlan#document_db_config}
  */
  readonly documentDbConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfig[] | cdktf.IResolvable;
  /**
  * ec2_asg_capacity_increase_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ec2_asg_capacity_increase_config ArcregionswitchPlan#ec2_asg_capacity_increase_config}
  */
  readonly ec2AsgCapacityIncreaseConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfig[] | cdktf.IResolvable;
  /**
  * ecs_capacity_increase_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ecs_capacity_increase_config ArcregionswitchPlan#ecs_capacity_increase_config}
  */
  readonly ecsCapacityIncreaseConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfig[] | cdktf.IResolvable;
  /**
  * eks_resource_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#eks_resource_scaling_config ArcregionswitchPlan#eks_resource_scaling_config}
  */
  readonly eksResourceScalingConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfig[] | cdktf.IResolvable;
  /**
  * execution_approval_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#execution_approval_config ArcregionswitchPlan#execution_approval_config}
  */
  readonly executionApprovalConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfig[] | cdktf.IResolvable;
  /**
  * global_aurora_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#global_aurora_config ArcregionswitchPlan#global_aurora_config}
  */
  readonly globalAuroraConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfig[] | cdktf.IResolvable;
  /**
  * region_switch_plan_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#region_switch_plan_config ArcregionswitchPlan#region_switch_plan_config}
  */
  readonly regionSwitchPlanConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfig[] | cdktf.IResolvable;
  /**
  * route53_health_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#route53_health_check_config ArcregionswitchPlan#route53_health_check_config}
  */
  readonly route53HealthCheckConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfig[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    execution_block_type: cdktf.stringToTerraform(struct!.executionBlockType),
    name: cdktf.stringToTerraform(struct!.name),
    arc_routing_control_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigToTerraform, true)(struct!.arcRoutingControlConfig),
    custom_action_lambda_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigToTerraform, true)(struct!.customActionLambdaConfig),
    document_db_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigToTerraform, true)(struct!.documentDbConfig),
    ec2_asg_capacity_increase_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigToTerraform, true)(struct!.ec2AsgCapacityIncreaseConfig),
    ecs_capacity_increase_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigToTerraform, true)(struct!.ecsCapacityIncreaseConfig),
    eks_resource_scaling_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigToTerraform, true)(struct!.eksResourceScalingConfig),
    execution_approval_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigToTerraform, true)(struct!.executionApprovalConfig),
    global_aurora_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigToTerraform, true)(struct!.globalAuroraConfig),
    region_switch_plan_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigToTerraform, true)(struct!.regionSwitchPlanConfig),
    route53_health_check_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigToTerraform, true)(struct!.route53HealthCheckConfig),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_block_type: {
      value: cdktf.stringToHclTerraform(struct!.executionBlockType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arc_routing_control_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigToHclTerraform, true)(struct!.arcRoutingControlConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigList",
    },
    custom_action_lambda_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigToHclTerraform, true)(struct!.customActionLambdaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigList",
    },
    document_db_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigToHclTerraform, true)(struct!.documentDbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigList",
    },
    ec2_asg_capacity_increase_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigToHclTerraform, true)(struct!.ec2AsgCapacityIncreaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigList",
    },
    ecs_capacity_increase_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigToHclTerraform, true)(struct!.ecsCapacityIncreaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigList",
    },
    eks_resource_scaling_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigToHclTerraform, true)(struct!.eksResourceScalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigList",
    },
    execution_approval_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigToHclTerraform, true)(struct!.executionApprovalConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigList",
    },
    global_aurora_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigToHclTerraform, true)(struct!.globalAuroraConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigList",
    },
    region_switch_plan_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigToHclTerraform, true)(struct!.regionSwitchPlanConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigList",
    },
    route53_health_check_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigToHclTerraform, true)(struct!.route53HealthCheckConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._executionBlockType !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionBlockType = this._executionBlockType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._arcRoutingControlConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arcRoutingControlConfig = this._arcRoutingControlConfig?.internalValue;
    }
    if (this._customActionLambdaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customActionLambdaConfig = this._customActionLambdaConfig?.internalValue;
    }
    if (this._documentDbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentDbConfig = this._documentDbConfig?.internalValue;
    }
    if (this._ec2AsgCapacityIncreaseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2AsgCapacityIncreaseConfig = this._ec2AsgCapacityIncreaseConfig?.internalValue;
    }
    if (this._ecsCapacityIncreaseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsCapacityIncreaseConfig = this._ecsCapacityIncreaseConfig?.internalValue;
    }
    if (this._eksResourceScalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksResourceScalingConfig = this._eksResourceScalingConfig?.internalValue;
    }
    if (this._executionApprovalConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionApprovalConfig = this._executionApprovalConfig?.internalValue;
    }
    if (this._globalAuroraConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalAuroraConfig = this._globalAuroraConfig?.internalValue;
    }
    if (this._regionSwitchPlanConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionSwitchPlanConfig = this._regionSwitchPlanConfig?.internalValue;
    }
    if (this._route53HealthCheckConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route53HealthCheckConfig = this._route53HealthCheckConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._executionBlockType = undefined;
      this._name = undefined;
      this._arcRoutingControlConfig.internalValue = undefined;
      this._customActionLambdaConfig.internalValue = undefined;
      this._documentDbConfig.internalValue = undefined;
      this._ec2AsgCapacityIncreaseConfig.internalValue = undefined;
      this._ecsCapacityIncreaseConfig.internalValue = undefined;
      this._eksResourceScalingConfig.internalValue = undefined;
      this._executionApprovalConfig.internalValue = undefined;
      this._globalAuroraConfig.internalValue = undefined;
      this._regionSwitchPlanConfig.internalValue = undefined;
      this._route53HealthCheckConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._executionBlockType = value.executionBlockType;
      this._name = value.name;
      this._arcRoutingControlConfig.internalValue = value.arcRoutingControlConfig;
      this._customActionLambdaConfig.internalValue = value.customActionLambdaConfig;
      this._documentDbConfig.internalValue = value.documentDbConfig;
      this._ec2AsgCapacityIncreaseConfig.internalValue = value.ec2AsgCapacityIncreaseConfig;
      this._ecsCapacityIncreaseConfig.internalValue = value.ecsCapacityIncreaseConfig;
      this._eksResourceScalingConfig.internalValue = value.eksResourceScalingConfig;
      this._executionApprovalConfig.internalValue = value.executionApprovalConfig;
      this._globalAuroraConfig.internalValue = value.globalAuroraConfig;
      this._regionSwitchPlanConfig.internalValue = value.regionSwitchPlanConfig;
      this._route53HealthCheckConfig.internalValue = value.route53HealthCheckConfig;
    }
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

  // execution_block_type - computed: false, optional: false, required: true
  private _executionBlockType?: string; 
  public get executionBlockType() {
    return this.getStringAttribute('execution_block_type');
  }
  public set executionBlockType(value: string) {
    this._executionBlockType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionBlockTypeInput() {
    return this._executionBlockType;
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

  // arc_routing_control_config - computed: false, optional: true, required: false
  private _arcRoutingControlConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigList(this, "arc_routing_control_config", false);
  public get arcRoutingControlConfig() {
    return this._arcRoutingControlConfig;
  }
  public putArcRoutingControlConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfig[] | cdktf.IResolvable) {
    this._arcRoutingControlConfig.internalValue = value;
  }
  public resetArcRoutingControlConfig() {
    this._arcRoutingControlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arcRoutingControlConfigInput() {
    return this._arcRoutingControlConfig.internalValue;
  }

  // custom_action_lambda_config - computed: false, optional: true, required: false
  private _customActionLambdaConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigList(this, "custom_action_lambda_config", false);
  public get customActionLambdaConfig() {
    return this._customActionLambdaConfig;
  }
  public putCustomActionLambdaConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfig[] | cdktf.IResolvable) {
    this._customActionLambdaConfig.internalValue = value;
  }
  public resetCustomActionLambdaConfig() {
    this._customActionLambdaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionLambdaConfigInput() {
    return this._customActionLambdaConfig.internalValue;
  }

  // document_db_config - computed: false, optional: true, required: false
  private _documentDbConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigList(this, "document_db_config", false);
  public get documentDbConfig() {
    return this._documentDbConfig;
  }
  public putDocumentDbConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfig[] | cdktf.IResolvable) {
    this._documentDbConfig.internalValue = value;
  }
  public resetDocumentDbConfig() {
    this._documentDbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentDbConfigInput() {
    return this._documentDbConfig.internalValue;
  }

  // ec2_asg_capacity_increase_config - computed: false, optional: true, required: false
  private _ec2AsgCapacityIncreaseConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigList(this, "ec2_asg_capacity_increase_config", false);
  public get ec2AsgCapacityIncreaseConfig() {
    return this._ec2AsgCapacityIncreaseConfig;
  }
  public putEc2AsgCapacityIncreaseConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfig[] | cdktf.IResolvable) {
    this._ec2AsgCapacityIncreaseConfig.internalValue = value;
  }
  public resetEc2AsgCapacityIncreaseConfig() {
    this._ec2AsgCapacityIncreaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2AsgCapacityIncreaseConfigInput() {
    return this._ec2AsgCapacityIncreaseConfig.internalValue;
  }

  // ecs_capacity_increase_config - computed: false, optional: true, required: false
  private _ecsCapacityIncreaseConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigList(this, "ecs_capacity_increase_config", false);
  public get ecsCapacityIncreaseConfig() {
    return this._ecsCapacityIncreaseConfig;
  }
  public putEcsCapacityIncreaseConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfig[] | cdktf.IResolvable) {
    this._ecsCapacityIncreaseConfig.internalValue = value;
  }
  public resetEcsCapacityIncreaseConfig() {
    this._ecsCapacityIncreaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsCapacityIncreaseConfigInput() {
    return this._ecsCapacityIncreaseConfig.internalValue;
  }

  // eks_resource_scaling_config - computed: false, optional: true, required: false
  private _eksResourceScalingConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigList(this, "eks_resource_scaling_config", false);
  public get eksResourceScalingConfig() {
    return this._eksResourceScalingConfig;
  }
  public putEksResourceScalingConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfig[] | cdktf.IResolvable) {
    this._eksResourceScalingConfig.internalValue = value;
  }
  public resetEksResourceScalingConfig() {
    this._eksResourceScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksResourceScalingConfigInput() {
    return this._eksResourceScalingConfig.internalValue;
  }

  // execution_approval_config - computed: false, optional: true, required: false
  private _executionApprovalConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigList(this, "execution_approval_config", false);
  public get executionApprovalConfig() {
    return this._executionApprovalConfig;
  }
  public putExecutionApprovalConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfig[] | cdktf.IResolvable) {
    this._executionApprovalConfig.internalValue = value;
  }
  public resetExecutionApprovalConfig() {
    this._executionApprovalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionApprovalConfigInput() {
    return this._executionApprovalConfig.internalValue;
  }

  // global_aurora_config - computed: false, optional: true, required: false
  private _globalAuroraConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigList(this, "global_aurora_config", false);
  public get globalAuroraConfig() {
    return this._globalAuroraConfig;
  }
  public putGlobalAuroraConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfig[] | cdktf.IResolvable) {
    this._globalAuroraConfig.internalValue = value;
  }
  public resetGlobalAuroraConfig() {
    this._globalAuroraConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalAuroraConfigInput() {
    return this._globalAuroraConfig.internalValue;
  }

  // region_switch_plan_config - computed: false, optional: true, required: false
  private _regionSwitchPlanConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigList(this, "region_switch_plan_config", false);
  public get regionSwitchPlanConfig() {
    return this._regionSwitchPlanConfig;
  }
  public putRegionSwitchPlanConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfig[] | cdktf.IResolvable) {
    this._regionSwitchPlanConfig.internalValue = value;
  }
  public resetRegionSwitchPlanConfig() {
    this._regionSwitchPlanConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionSwitchPlanConfigInput() {
    return this._regionSwitchPlanConfig.internalValue;
  }

  // route53_health_check_config - computed: false, optional: true, required: false
  private _route53HealthCheckConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigList(this, "route53_health_check_config", false);
  public get route53HealthCheckConfig() {
    return this._route53HealthCheckConfig;
  }
  public putRoute53HealthCheckConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfig[] | cdktf.IResolvable) {
    this._route53HealthCheckConfig.internalValue = value;
  }
  public resetRoute53HealthCheckConfig() {
    this._route53HealthCheckConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get route53HealthCheckConfigInput() {
    return this._route53HealthCheckConfig.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStep[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfig {
  /**
  * step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#step ArcregionswitchPlan#step}
  */
  readonly step?: ArcregionswitchPlanWorkflowStepParallelConfigStep[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepToTerraform, true)(struct!.step),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    step: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepToHclTerraform, true)(struct!.step),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._step?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._step.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._step.internalValue = value.step;
    }
  }

  // step - computed: false, optional: true, required: false
  private _step = new ArcregionswitchPlanWorkflowStepParallelConfigStepList(this, "step", false);
  public get step() {
    return this._step;
  }
  public putStep(value: ArcregionswitchPlanWorkflowStepParallelConfigStep[] | cdktf.IResolvable) {
    this._step.internalValue = value;
  }
  public resetStep() {
    this._step.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepParallelConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#arn ArcregionswitchPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
}

export function arcregionswitchPlanWorkflowStepRegionSwitchPlanConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktf.stringToTerraform(struct!.externalId),
  }
}


export function arcregionswitchPlanWorkflowStepRegionSwitchPlanConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
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

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#record_set_identifier ArcregionswitchPlan#record_set_identifier}
  */
  readonly recordSetIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#region ArcregionswitchPlan#region}
  */
  readonly region: string;
}

export function arcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetToTerraform(struct?: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_set_identifier: cdktf.stringToTerraform(struct!.recordSetIdentifier),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function arcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record_set_identifier: {
      value: cdktf.stringToHclTerraform(struct!.recordSetIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSetIdentifier = this._recordSetIdentifier;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordSetIdentifier = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recordSetIdentifier = value.recordSetIdentifier;
      this._region = value.region;
    }
  }

  // record_set_identifier - computed: false, optional: false, required: true
  private _recordSetIdentifier?: string; 
  public get recordSetIdentifier() {
    return this.getStringAttribute('record_set_identifier');
  }
  public set recordSetIdentifier(value: string) {
    this._recordSetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetIdentifierInput() {
    return this._recordSetIdentifier;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSet[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetOutputReference {
    return new ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#hosted_zone_id ArcregionswitchPlan#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#record_name ArcregionswitchPlan#record_name}
  */
  readonly recordName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * record_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#record_set ArcregionswitchPlan#record_set}
  */
  readonly recordSet?: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSet[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepRoute53HealthCheckConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_account_role: cdktf.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    hosted_zone_id: cdktf.stringToTerraform(struct!.hostedZoneId),
    record_name: cdktf.stringToTerraform(struct!.recordName),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
    record_set: cdktf.listMapper(arcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetToTerraform, true)(struct!.recordSet),
  }
}


export function arcregionswitchPlanWorkflowStepRoute53HealthCheckConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cross_account_role: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosted_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.hostedZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_name: {
      value: cdktf.stringToHclTerraform(struct!.recordName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_set: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetToHclTerraform, true)(struct!.recordSet),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._hostedZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedZoneId = this._hostedZoneId;
    }
    if (this._recordName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordName = this._recordName;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._recordSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSet = this._recordSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._hostedZoneId = undefined;
      this._recordName = undefined;
      this._timeoutMinutes = undefined;
      this._recordSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._hostedZoneId = value.hostedZoneId;
      this._recordName = value.recordName;
      this._timeoutMinutes = value.timeoutMinutes;
      this._recordSet.internalValue = value.recordSet;
    }
  }

  // cross_account_role - computed: false, optional: true, required: false
  private _crossAccountRole?: string; 
  public get crossAccountRole() {
    return this.getStringAttribute('cross_account_role');
  }
  public set crossAccountRole(value: string) {
    this._crossAccountRole = value;
  }
  public resetCrossAccountRole() {
    this._crossAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleInput() {
    return this._crossAccountRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // hosted_zone_id - computed: false, optional: false, required: true
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
  }

  // record_name - computed: false, optional: false, required: true
  private _recordName?: string; 
  public get recordName() {
    return this.getStringAttribute('record_name');
  }
  public set recordName(value: string) {
    this._recordName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordNameInput() {
    return this._recordName;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // record_set - computed: false, optional: true, required: false
  private _recordSet = new ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetList(this, "record_set", false);
  public get recordSet() {
    return this._recordSet;
  }
  public putRecordSet(value: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSet[] | cdktf.IResolvable) {
    this._recordSet.internalValue = value;
  }
  public resetRecordSet() {
    this._recordSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetInput() {
    return this._recordSet.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#description ArcregionswitchPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#execution_block_type ArcregionswitchPlan#execution_block_type}
  */
  readonly executionBlockType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#name ArcregionswitchPlan#name}
  */
  readonly name: string;
  /**
  * arc_routing_control_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#arc_routing_control_config ArcregionswitchPlan#arc_routing_control_config}
  */
  readonly arcRoutingControlConfig?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfig[] | cdktf.IResolvable;
  /**
  * custom_action_lambda_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#custom_action_lambda_config ArcregionswitchPlan#custom_action_lambda_config}
  */
  readonly customActionLambdaConfig?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfig[] | cdktf.IResolvable;
  /**
  * document_db_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#document_db_config ArcregionswitchPlan#document_db_config}
  */
  readonly documentDbConfig?: ArcregionswitchPlanWorkflowStepDocumentDbConfig[] | cdktf.IResolvable;
  /**
  * ec2_asg_capacity_increase_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ec2_asg_capacity_increase_config ArcregionswitchPlan#ec2_asg_capacity_increase_config}
  */
  readonly ec2AsgCapacityIncreaseConfig?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfig[] | cdktf.IResolvable;
  /**
  * ecs_capacity_increase_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#ecs_capacity_increase_config ArcregionswitchPlan#ecs_capacity_increase_config}
  */
  readonly ecsCapacityIncreaseConfig?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfig[] | cdktf.IResolvable;
  /**
  * eks_resource_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#eks_resource_scaling_config ArcregionswitchPlan#eks_resource_scaling_config}
  */
  readonly eksResourceScalingConfig?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfig[] | cdktf.IResolvable;
  /**
  * execution_approval_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#execution_approval_config ArcregionswitchPlan#execution_approval_config}
  */
  readonly executionApprovalConfig?: ArcregionswitchPlanWorkflowStepExecutionApprovalConfig[] | cdktf.IResolvable;
  /**
  * global_aurora_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#global_aurora_config ArcregionswitchPlan#global_aurora_config}
  */
  readonly globalAuroraConfig?: ArcregionswitchPlanWorkflowStepGlobalAuroraConfig[] | cdktf.IResolvable;
  /**
  * parallel_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#parallel_config ArcregionswitchPlan#parallel_config}
  */
  readonly parallelConfig?: ArcregionswitchPlanWorkflowStepParallelConfig[] | cdktf.IResolvable;
  /**
  * region_switch_plan_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#region_switch_plan_config ArcregionswitchPlan#region_switch_plan_config}
  */
  readonly regionSwitchPlanConfig?: ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfig[] | cdktf.IResolvable;
  /**
  * route53_health_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#route53_health_check_config ArcregionswitchPlan#route53_health_check_config}
  */
  readonly route53HealthCheckConfig?: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfig[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowStepToTerraform(struct?: ArcregionswitchPlanWorkflowStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    execution_block_type: cdktf.stringToTerraform(struct!.executionBlockType),
    name: cdktf.stringToTerraform(struct!.name),
    arc_routing_control_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepArcRoutingControlConfigToTerraform, true)(struct!.arcRoutingControlConfig),
    custom_action_lambda_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepCustomActionLambdaConfigToTerraform, true)(struct!.customActionLambdaConfig),
    document_db_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepDocumentDbConfigToTerraform, true)(struct!.documentDbConfig),
    ec2_asg_capacity_increase_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigToTerraform, true)(struct!.ec2AsgCapacityIncreaseConfig),
    ecs_capacity_increase_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigToTerraform, true)(struct!.ecsCapacityIncreaseConfig),
    eks_resource_scaling_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepEksResourceScalingConfigToTerraform, true)(struct!.eksResourceScalingConfig),
    execution_approval_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepExecutionApprovalConfigToTerraform, true)(struct!.executionApprovalConfig),
    global_aurora_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepGlobalAuroraConfigToTerraform, true)(struct!.globalAuroraConfig),
    parallel_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepParallelConfigToTerraform, true)(struct!.parallelConfig),
    region_switch_plan_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepRegionSwitchPlanConfigToTerraform, true)(struct!.regionSwitchPlanConfig),
    route53_health_check_config: cdktf.listMapper(arcregionswitchPlanWorkflowStepRoute53HealthCheckConfigToTerraform, true)(struct!.route53HealthCheckConfig),
  }
}


export function arcregionswitchPlanWorkflowStepToHclTerraform(struct?: ArcregionswitchPlanWorkflowStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_block_type: {
      value: cdktf.stringToHclTerraform(struct!.executionBlockType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arc_routing_control_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepArcRoutingControlConfigToHclTerraform, true)(struct!.arcRoutingControlConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepArcRoutingControlConfigList",
    },
    custom_action_lambda_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepCustomActionLambdaConfigToHclTerraform, true)(struct!.customActionLambdaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigList",
    },
    document_db_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepDocumentDbConfigToHclTerraform, true)(struct!.documentDbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepDocumentDbConfigList",
    },
    ec2_asg_capacity_increase_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigToHclTerraform, true)(struct!.ec2AsgCapacityIncreaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigList",
    },
    ecs_capacity_increase_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigToHclTerraform, true)(struct!.ecsCapacityIncreaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigList",
    },
    eks_resource_scaling_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepEksResourceScalingConfigToHclTerraform, true)(struct!.eksResourceScalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEksResourceScalingConfigList",
    },
    execution_approval_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepExecutionApprovalConfigToHclTerraform, true)(struct!.executionApprovalConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepExecutionApprovalConfigList",
    },
    global_aurora_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepGlobalAuroraConfigToHclTerraform, true)(struct!.globalAuroraConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepGlobalAuroraConfigList",
    },
    parallel_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigToHclTerraform, true)(struct!.parallelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigList",
    },
    region_switch_plan_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepRegionSwitchPlanConfigToHclTerraform, true)(struct!.regionSwitchPlanConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfigList",
    },
    route53_health_check_config: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepRoute53HealthCheckConfigToHclTerraform, true)(struct!.route53HealthCheckConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflowStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._executionBlockType !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionBlockType = this._executionBlockType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._arcRoutingControlConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arcRoutingControlConfig = this._arcRoutingControlConfig?.internalValue;
    }
    if (this._customActionLambdaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customActionLambdaConfig = this._customActionLambdaConfig?.internalValue;
    }
    if (this._documentDbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentDbConfig = this._documentDbConfig?.internalValue;
    }
    if (this._ec2AsgCapacityIncreaseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2AsgCapacityIncreaseConfig = this._ec2AsgCapacityIncreaseConfig?.internalValue;
    }
    if (this._ecsCapacityIncreaseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsCapacityIncreaseConfig = this._ecsCapacityIncreaseConfig?.internalValue;
    }
    if (this._eksResourceScalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksResourceScalingConfig = this._eksResourceScalingConfig?.internalValue;
    }
    if (this._executionApprovalConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionApprovalConfig = this._executionApprovalConfig?.internalValue;
    }
    if (this._globalAuroraConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalAuroraConfig = this._globalAuroraConfig?.internalValue;
    }
    if (this._parallelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelConfig = this._parallelConfig?.internalValue;
    }
    if (this._regionSwitchPlanConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionSwitchPlanConfig = this._regionSwitchPlanConfig?.internalValue;
    }
    if (this._route53HealthCheckConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route53HealthCheckConfig = this._route53HealthCheckConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._executionBlockType = undefined;
      this._name = undefined;
      this._arcRoutingControlConfig.internalValue = undefined;
      this._customActionLambdaConfig.internalValue = undefined;
      this._documentDbConfig.internalValue = undefined;
      this._ec2AsgCapacityIncreaseConfig.internalValue = undefined;
      this._ecsCapacityIncreaseConfig.internalValue = undefined;
      this._eksResourceScalingConfig.internalValue = undefined;
      this._executionApprovalConfig.internalValue = undefined;
      this._globalAuroraConfig.internalValue = undefined;
      this._parallelConfig.internalValue = undefined;
      this._regionSwitchPlanConfig.internalValue = undefined;
      this._route53HealthCheckConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._executionBlockType = value.executionBlockType;
      this._name = value.name;
      this._arcRoutingControlConfig.internalValue = value.arcRoutingControlConfig;
      this._customActionLambdaConfig.internalValue = value.customActionLambdaConfig;
      this._documentDbConfig.internalValue = value.documentDbConfig;
      this._ec2AsgCapacityIncreaseConfig.internalValue = value.ec2AsgCapacityIncreaseConfig;
      this._ecsCapacityIncreaseConfig.internalValue = value.ecsCapacityIncreaseConfig;
      this._eksResourceScalingConfig.internalValue = value.eksResourceScalingConfig;
      this._executionApprovalConfig.internalValue = value.executionApprovalConfig;
      this._globalAuroraConfig.internalValue = value.globalAuroraConfig;
      this._parallelConfig.internalValue = value.parallelConfig;
      this._regionSwitchPlanConfig.internalValue = value.regionSwitchPlanConfig;
      this._route53HealthCheckConfig.internalValue = value.route53HealthCheckConfig;
    }
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

  // execution_block_type - computed: false, optional: false, required: true
  private _executionBlockType?: string; 
  public get executionBlockType() {
    return this.getStringAttribute('execution_block_type');
  }
  public set executionBlockType(value: string) {
    this._executionBlockType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionBlockTypeInput() {
    return this._executionBlockType;
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

  // arc_routing_control_config - computed: false, optional: true, required: false
  private _arcRoutingControlConfig = new ArcregionswitchPlanWorkflowStepArcRoutingControlConfigList(this, "arc_routing_control_config", false);
  public get arcRoutingControlConfig() {
    return this._arcRoutingControlConfig;
  }
  public putArcRoutingControlConfig(value: ArcregionswitchPlanWorkflowStepArcRoutingControlConfig[] | cdktf.IResolvable) {
    this._arcRoutingControlConfig.internalValue = value;
  }
  public resetArcRoutingControlConfig() {
    this._arcRoutingControlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arcRoutingControlConfigInput() {
    return this._arcRoutingControlConfig.internalValue;
  }

  // custom_action_lambda_config - computed: false, optional: true, required: false
  private _customActionLambdaConfig = new ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigList(this, "custom_action_lambda_config", false);
  public get customActionLambdaConfig() {
    return this._customActionLambdaConfig;
  }
  public putCustomActionLambdaConfig(value: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfig[] | cdktf.IResolvable) {
    this._customActionLambdaConfig.internalValue = value;
  }
  public resetCustomActionLambdaConfig() {
    this._customActionLambdaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionLambdaConfigInput() {
    return this._customActionLambdaConfig.internalValue;
  }

  // document_db_config - computed: false, optional: true, required: false
  private _documentDbConfig = new ArcregionswitchPlanWorkflowStepDocumentDbConfigList(this, "document_db_config", false);
  public get documentDbConfig() {
    return this._documentDbConfig;
  }
  public putDocumentDbConfig(value: ArcregionswitchPlanWorkflowStepDocumentDbConfig[] | cdktf.IResolvable) {
    this._documentDbConfig.internalValue = value;
  }
  public resetDocumentDbConfig() {
    this._documentDbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentDbConfigInput() {
    return this._documentDbConfig.internalValue;
  }

  // ec2_asg_capacity_increase_config - computed: false, optional: true, required: false
  private _ec2AsgCapacityIncreaseConfig = new ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigList(this, "ec2_asg_capacity_increase_config", false);
  public get ec2AsgCapacityIncreaseConfig() {
    return this._ec2AsgCapacityIncreaseConfig;
  }
  public putEc2AsgCapacityIncreaseConfig(value: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfig[] | cdktf.IResolvable) {
    this._ec2AsgCapacityIncreaseConfig.internalValue = value;
  }
  public resetEc2AsgCapacityIncreaseConfig() {
    this._ec2AsgCapacityIncreaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2AsgCapacityIncreaseConfigInput() {
    return this._ec2AsgCapacityIncreaseConfig.internalValue;
  }

  // ecs_capacity_increase_config - computed: false, optional: true, required: false
  private _ecsCapacityIncreaseConfig = new ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigList(this, "ecs_capacity_increase_config", false);
  public get ecsCapacityIncreaseConfig() {
    return this._ecsCapacityIncreaseConfig;
  }
  public putEcsCapacityIncreaseConfig(value: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfig[] | cdktf.IResolvable) {
    this._ecsCapacityIncreaseConfig.internalValue = value;
  }
  public resetEcsCapacityIncreaseConfig() {
    this._ecsCapacityIncreaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsCapacityIncreaseConfigInput() {
    return this._ecsCapacityIncreaseConfig.internalValue;
  }

  // eks_resource_scaling_config - computed: false, optional: true, required: false
  private _eksResourceScalingConfig = new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigList(this, "eks_resource_scaling_config", false);
  public get eksResourceScalingConfig() {
    return this._eksResourceScalingConfig;
  }
  public putEksResourceScalingConfig(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfig[] | cdktf.IResolvable) {
    this._eksResourceScalingConfig.internalValue = value;
  }
  public resetEksResourceScalingConfig() {
    this._eksResourceScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksResourceScalingConfigInput() {
    return this._eksResourceScalingConfig.internalValue;
  }

  // execution_approval_config - computed: false, optional: true, required: false
  private _executionApprovalConfig = new ArcregionswitchPlanWorkflowStepExecutionApprovalConfigList(this, "execution_approval_config", false);
  public get executionApprovalConfig() {
    return this._executionApprovalConfig;
  }
  public putExecutionApprovalConfig(value: ArcregionswitchPlanWorkflowStepExecutionApprovalConfig[] | cdktf.IResolvable) {
    this._executionApprovalConfig.internalValue = value;
  }
  public resetExecutionApprovalConfig() {
    this._executionApprovalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionApprovalConfigInput() {
    return this._executionApprovalConfig.internalValue;
  }

  // global_aurora_config - computed: false, optional: true, required: false
  private _globalAuroraConfig = new ArcregionswitchPlanWorkflowStepGlobalAuroraConfigList(this, "global_aurora_config", false);
  public get globalAuroraConfig() {
    return this._globalAuroraConfig;
  }
  public putGlobalAuroraConfig(value: ArcregionswitchPlanWorkflowStepGlobalAuroraConfig[] | cdktf.IResolvable) {
    this._globalAuroraConfig.internalValue = value;
  }
  public resetGlobalAuroraConfig() {
    this._globalAuroraConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalAuroraConfigInput() {
    return this._globalAuroraConfig.internalValue;
  }

  // parallel_config - computed: false, optional: true, required: false
  private _parallelConfig = new ArcregionswitchPlanWorkflowStepParallelConfigList(this, "parallel_config", false);
  public get parallelConfig() {
    return this._parallelConfig;
  }
  public putParallelConfig(value: ArcregionswitchPlanWorkflowStepParallelConfig[] | cdktf.IResolvable) {
    this._parallelConfig.internalValue = value;
  }
  public resetParallelConfig() {
    this._parallelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelConfigInput() {
    return this._parallelConfig.internalValue;
  }

  // region_switch_plan_config - computed: false, optional: true, required: false
  private _regionSwitchPlanConfig = new ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfigList(this, "region_switch_plan_config", false);
  public get regionSwitchPlanConfig() {
    return this._regionSwitchPlanConfig;
  }
  public putRegionSwitchPlanConfig(value: ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfig[] | cdktf.IResolvable) {
    this._regionSwitchPlanConfig.internalValue = value;
  }
  public resetRegionSwitchPlanConfig() {
    this._regionSwitchPlanConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionSwitchPlanConfigInput() {
    return this._regionSwitchPlanConfig.internalValue;
  }

  // route53_health_check_config - computed: false, optional: true, required: false
  private _route53HealthCheckConfig = new ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigList(this, "route53_health_check_config", false);
  public get route53HealthCheckConfig() {
    return this._route53HealthCheckConfig;
  }
  public putRoute53HealthCheckConfig(value: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfig[] | cdktf.IResolvable) {
    this._route53HealthCheckConfig.internalValue = value;
  }
  public resetRoute53HealthCheckConfig() {
    this._route53HealthCheckConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get route53HealthCheckConfigInput() {
    return this._route53HealthCheckConfig.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowStepList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStep[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowStepOutputReference {
    return new ArcregionswitchPlanWorkflowStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#workflow_description ArcregionswitchPlan#workflow_description}
  */
  readonly workflowDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#workflow_target_action ArcregionswitchPlan#workflow_target_action}
  */
  readonly workflowTargetAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#workflow_target_region ArcregionswitchPlan#workflow_target_region}
  */
  readonly workflowTargetRegion?: string;
  /**
  * step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#step ArcregionswitchPlan#step}
  */
  readonly step?: ArcregionswitchPlanWorkflowStep[] | cdktf.IResolvable;
}

export function arcregionswitchPlanWorkflowToTerraform(struct?: ArcregionswitchPlanWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workflow_description: cdktf.stringToTerraform(struct!.workflowDescription),
    workflow_target_action: cdktf.stringToTerraform(struct!.workflowTargetAction),
    workflow_target_region: cdktf.stringToTerraform(struct!.workflowTargetRegion),
    step: cdktf.listMapper(arcregionswitchPlanWorkflowStepToTerraform, true)(struct!.step),
  }
}


export function arcregionswitchPlanWorkflowToHclTerraform(struct?: ArcregionswitchPlanWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workflow_description: {
      value: cdktf.stringToHclTerraform(struct!.workflowDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_target_action: {
      value: cdktf.stringToHclTerraform(struct!.workflowTargetAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_target_region: {
      value: cdktf.stringToHclTerraform(struct!.workflowTargetRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step: {
      value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowStepToHclTerraform, true)(struct!.step),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArcregionswitchPlanWorkflow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workflowDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowDescription = this._workflowDescription;
    }
    if (this._workflowTargetAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowTargetAction = this._workflowTargetAction;
    }
    if (this._workflowTargetRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowTargetRegion = this._workflowTargetRegion;
    }
    if (this._step?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workflowDescription = undefined;
      this._workflowTargetAction = undefined;
      this._workflowTargetRegion = undefined;
      this._step.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workflowDescription = value.workflowDescription;
      this._workflowTargetAction = value.workflowTargetAction;
      this._workflowTargetRegion = value.workflowTargetRegion;
      this._step.internalValue = value.step;
    }
  }

  // workflow_description - computed: false, optional: true, required: false
  private _workflowDescription?: string; 
  public get workflowDescription() {
    return this.getStringAttribute('workflow_description');
  }
  public set workflowDescription(value: string) {
    this._workflowDescription = value;
  }
  public resetWorkflowDescription() {
    this._workflowDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowDescriptionInput() {
    return this._workflowDescription;
  }

  // workflow_target_action - computed: false, optional: false, required: true
  private _workflowTargetAction?: string; 
  public get workflowTargetAction() {
    return this.getStringAttribute('workflow_target_action');
  }
  public set workflowTargetAction(value: string) {
    this._workflowTargetAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowTargetActionInput() {
    return this._workflowTargetAction;
  }

  // workflow_target_region - computed: false, optional: true, required: false
  private _workflowTargetRegion?: string; 
  public get workflowTargetRegion() {
    return this.getStringAttribute('workflow_target_region');
  }
  public set workflowTargetRegion(value: string) {
    this._workflowTargetRegion = value;
  }
  public resetWorkflowTargetRegion() {
    this._workflowTargetRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowTargetRegionInput() {
    return this._workflowTargetRegion;
  }

  // step - computed: false, optional: true, required: false
  private _step = new ArcregionswitchPlanWorkflowStepList(this, "step", false);
  public get step() {
    return this._step;
  }
  public putStep(value: ArcregionswitchPlanWorkflowStep[] | cdktf.IResolvable) {
    this._step.internalValue = value;
  }
  public resetStep() {
    this._step.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step.internalValue;
  }
}

export class ArcregionswitchPlanWorkflowList extends cdktf.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflow[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArcregionswitchPlanWorkflowOutputReference {
    return new ArcregionswitchPlanWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan aws_arcregionswitch_plan}
*/
export class ArcregionswitchPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_arcregionswitch_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArcregionswitchPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArcregionswitchPlan to import
  * @param importFromId The id of the existing ArcregionswitchPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArcregionswitchPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_arcregionswitch_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/arcregionswitch_plan aws_arcregionswitch_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArcregionswitchPlanConfig
  */
  public constructor(scope: Construct, id: string, config: ArcregionswitchPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_arcregionswitch_plan',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.31.0',
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
    this._executionRole = config.executionRole;
    this._name = config.name;
    this._primaryRegion = config.primaryRegion;
    this._recoveryApproach = config.recoveryApproach;
    this._recoveryTimeObjectiveMinutes = config.recoveryTimeObjectiveMinutes;
    this._region = config.region;
    this._regions = config.regions;
    this._tags = config.tags;
    this._associatedAlarms.internalValue = config.associatedAlarms;
    this._timeouts.internalValue = config.timeouts;
    this._triggers.internalValue = config.triggers;
    this._workflow.internalValue = config.workflow;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // execution_role - computed: false, optional: false, required: true
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
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

  // primary_region - computed: false, optional: true, required: false
  private _primaryRegion?: string; 
  public get primaryRegion() {
    return this.getStringAttribute('primary_region');
  }
  public set primaryRegion(value: string) {
    this._primaryRegion = value;
  }
  public resetPrimaryRegion() {
    this._primaryRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryRegionInput() {
    return this._primaryRegion;
  }

  // recovery_approach - computed: false, optional: false, required: true
  private _recoveryApproach?: string; 
  public get recoveryApproach() {
    return this.getStringAttribute('recovery_approach');
  }
  public set recoveryApproach(value: string) {
    this._recoveryApproach = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryApproachInput() {
    return this._recoveryApproach;
  }

  // recovery_time_objective_minutes - computed: false, optional: true, required: false
  private _recoveryTimeObjectiveMinutes?: number; 
  public get recoveryTimeObjectiveMinutes() {
    return this.getNumberAttribute('recovery_time_objective_minutes');
  }
  public set recoveryTimeObjectiveMinutes(value: number) {
    this._recoveryTimeObjectiveMinutes = value;
  }
  public resetRecoveryTimeObjectiveMinutes() {
    this._recoveryTimeObjectiveMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryTimeObjectiveMinutesInput() {
    return this._recoveryTimeObjectiveMinutes;
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

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
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
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // associated_alarms - computed: false, optional: true, required: false
  private _associatedAlarms = new ArcregionswitchPlanAssociatedAlarmsList(this, "associated_alarms", true);
  public get associatedAlarms() {
    return this._associatedAlarms;
  }
  public putAssociatedAlarms(value: ArcregionswitchPlanAssociatedAlarms[] | cdktf.IResolvable) {
    this._associatedAlarms.internalValue = value;
  }
  public resetAssociatedAlarms() {
    this._associatedAlarms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedAlarmsInput() {
    return this._associatedAlarms.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ArcregionswitchPlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ArcregionswitchPlanTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers = new ArcregionswitchPlanTriggersList(this, "triggers", false);
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: ArcregionswitchPlanTriggers[] | cdktf.IResolvable) {
    this._triggers.internalValue = value;
  }
  public resetTriggers() {
    this._triggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow = new ArcregionswitchPlanWorkflowList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: ArcregionswitchPlanWorkflow[] | cdktf.IResolvable) {
    this._workflow.internalValue = value;
  }
  public resetWorkflow() {
    this._workflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      execution_role: cdktf.stringToTerraform(this._executionRole),
      name: cdktf.stringToTerraform(this._name),
      primary_region: cdktf.stringToTerraform(this._primaryRegion),
      recovery_approach: cdktf.stringToTerraform(this._recoveryApproach),
      recovery_time_objective_minutes: cdktf.numberToTerraform(this._recoveryTimeObjectiveMinutes),
      region: cdktf.stringToTerraform(this._region),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      associated_alarms: cdktf.listMapper(arcregionswitchPlanAssociatedAlarmsToTerraform, true)(this._associatedAlarms.internalValue),
      timeouts: arcregionswitchPlanTimeoutsToTerraform(this._timeouts.internalValue),
      triggers: cdktf.listMapper(arcregionswitchPlanTriggersToTerraform, true)(this._triggers.internalValue),
      workflow: cdktf.listMapper(arcregionswitchPlanWorkflowToTerraform, true)(this._workflow.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_role: {
        value: cdktf.stringToHclTerraform(this._executionRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_region: {
        value: cdktf.stringToHclTerraform(this._primaryRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_approach: {
        value: cdktf.stringToHclTerraform(this._recoveryApproach),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_time_objective_minutes: {
        value: cdktf.numberToHclTerraform(this._recoveryTimeObjectiveMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      associated_alarms: {
        value: cdktf.listMapperHcl(arcregionswitchPlanAssociatedAlarmsToHclTerraform, true)(this._associatedAlarms.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ArcregionswitchPlanAssociatedAlarmsList",
      },
      timeouts: {
        value: arcregionswitchPlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArcregionswitchPlanTimeouts",
      },
      triggers: {
        value: cdktf.listMapperHcl(arcregionswitchPlanTriggersToHclTerraform, true)(this._triggers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArcregionswitchPlanTriggersList",
      },
      workflow: {
        value: cdktf.listMapperHcl(arcregionswitchPlanWorkflowToHclTerraform, true)(this._workflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArcregionswitchPlanWorkflowList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
