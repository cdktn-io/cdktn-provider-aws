/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ArcregionswitchPlanConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#description ArcregionswitchPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#execution_role ArcregionswitchPlan#execution_role}
  */
  readonly executionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#name ArcregionswitchPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#primary_region ArcregionswitchPlan#primary_region}
  */
  readonly primaryRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#recovery_approach ArcregionswitchPlan#recovery_approach}
  */
  readonly recoveryApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#recovery_time_objective_minutes ArcregionswitchPlan#recovery_time_objective_minutes}
  */
  readonly recoveryTimeObjectiveMinutes?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region ArcregionswitchPlan#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#regions ArcregionswitchPlan#regions}
  */
  readonly regions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#tags ArcregionswitchPlan#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * associated_alarms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#associated_alarms ArcregionswitchPlan#associated_alarms}
  */
  readonly associatedAlarms?: ArcregionswitchPlanAssociatedAlarms[] | cdktn.IResolvable;
  /**
  * report_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#report_configuration ArcregionswitchPlan#report_configuration}
  */
  readonly reportConfiguration?: ArcregionswitchPlanReportConfiguration[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeouts ArcregionswitchPlan#timeouts}
  */
  readonly timeouts?: ArcregionswitchPlanTimeouts;
  /**
  * triggers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#triggers ArcregionswitchPlan#triggers}
  */
  readonly triggers?: ArcregionswitchPlanTriggers[] | cdktn.IResolvable;
  /**
  * workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#workflow ArcregionswitchPlan#workflow}
  */
  readonly workflow?: ArcregionswitchPlanWorkflow[] | cdktn.IResolvable;
}
export interface ArcregionswitchPlanAssociatedAlarms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#alarm_type ArcregionswitchPlan#alarm_type}
  */
  readonly alarmType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#map_block_key ArcregionswitchPlan#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#resource_identifier ArcregionswitchPlan#resource_identifier}
  */
  readonly resourceIdentifier: string;
}

export function arcregionswitchPlanAssociatedAlarmsToTerraform(struct?: ArcregionswitchPlanAssociatedAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_type: cdktn.stringToTerraform(struct!.alarmType),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    map_block_key: cdktn.stringToTerraform(struct!.mapBlockKey),
    resource_identifier: cdktn.stringToTerraform(struct!.resourceIdentifier),
  }
}


export function arcregionswitchPlanAssociatedAlarmsToHclTerraform(struct?: ArcregionswitchPlanAssociatedAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_type: {
      value: cdktn.stringToHclTerraform(struct!.alarmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    map_block_key: {
      value: cdktn.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_identifier: {
      value: cdktn.stringToHclTerraform(struct!.resourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanAssociatedAlarmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanAssociatedAlarms | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanAssociatedAlarms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmType = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._mapBlockKey = undefined;
      this._resourceIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanAssociatedAlarmsList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanAssociatedAlarms[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanAssociatedAlarmsOutputReference {
    return new ArcregionswitchPlanAssociatedAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanReportConfigurationReportOutputS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#bucket_owner ArcregionswitchPlan#bucket_owner}
  */
  readonly bucketOwner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#bucket_path ArcregionswitchPlan#bucket_path}
  */
  readonly bucketPath: string;
}

export function arcregionswitchPlanReportConfigurationReportOutputS3ConfigurationToTerraform(struct?: ArcregionswitchPlanReportConfigurationReportOutputS3Configuration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
    bucket_path: cdktn.stringToTerraform(struct!.bucketPath),
  }
}


export function arcregionswitchPlanReportConfigurationReportOutputS3ConfigurationToHclTerraform(struct?: ArcregionswitchPlanReportConfigurationReportOutputS3Configuration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_path: {
      value: cdktn.stringToHclTerraform(struct!.bucketPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanReportConfigurationReportOutputS3ConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanReportConfigurationReportOutputS3Configuration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwner = this._bucketOwner;
    }
    if (this._bucketPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPath = this._bucketPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanReportConfigurationReportOutputS3Configuration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketOwner = undefined;
      this._bucketPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketOwner = value.bucketOwner;
      this._bucketPath = value.bucketPath;
    }
  }

  // bucket_owner - computed: false, optional: false, required: true
  private _bucketOwner?: string; 
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }
  public set bucketOwner(value: string) {
    this._bucketOwner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerInput() {
    return this._bucketOwner;
  }

  // bucket_path - computed: false, optional: false, required: true
  private _bucketPath?: string; 
  public get bucketPath() {
    return this.getStringAttribute('bucket_path');
  }
  public set bucketPath(value: string) {
    this._bucketPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPathInput() {
    return this._bucketPath;
  }
}

export class ArcregionswitchPlanReportConfigurationReportOutputS3ConfigurationList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanReportConfigurationReportOutputS3Configuration[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanReportConfigurationReportOutputS3ConfigurationOutputReference {
    return new ArcregionswitchPlanReportConfigurationReportOutputS3ConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanReportConfigurationReportOutput {
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#s3_configuration ArcregionswitchPlan#s3_configuration}
  */
  readonly s3Configuration?: ArcregionswitchPlanReportConfigurationReportOutputS3Configuration[] | cdktn.IResolvable;
}

export function arcregionswitchPlanReportConfigurationReportOutputToTerraform(struct?: ArcregionswitchPlanReportConfigurationReportOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_configuration: cdktn.listMapper(arcregionswitchPlanReportConfigurationReportOutputS3ConfigurationToTerraform, true)(struct!.s3Configuration),
  }
}


export function arcregionswitchPlanReportConfigurationReportOutputToHclTerraform(struct?: ArcregionswitchPlanReportConfigurationReportOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_configuration: {
      value: cdktn.listMapperHcl(arcregionswitchPlanReportConfigurationReportOutputS3ConfigurationToHclTerraform, true)(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanReportConfigurationReportOutputS3ConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanReportConfigurationReportOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanReportConfigurationReportOutput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanReportConfigurationReportOutput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Configuration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Configuration.internalValue = value.s3Configuration;
    }
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration = new ArcregionswitchPlanReportConfigurationReportOutputS3ConfigurationList(this, "s3_configuration", false);
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: ArcregionswitchPlanReportConfigurationReportOutputS3Configuration[] | cdktn.IResolvable) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }
}

export class ArcregionswitchPlanReportConfigurationReportOutputList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanReportConfigurationReportOutput[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanReportConfigurationReportOutputOutputReference {
    return new ArcregionswitchPlanReportConfigurationReportOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanReportConfiguration {
  /**
  * report_output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#report_output ArcregionswitchPlan#report_output}
  */
  readonly reportOutput?: ArcregionswitchPlanReportConfigurationReportOutput[] | cdktn.IResolvable;
}

export function arcregionswitchPlanReportConfigurationToTerraform(struct?: ArcregionswitchPlanReportConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    report_output: cdktn.listMapper(arcregionswitchPlanReportConfigurationReportOutputToTerraform, true)(struct!.reportOutput),
  }
}


export function arcregionswitchPlanReportConfigurationToHclTerraform(struct?: ArcregionswitchPlanReportConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    report_output: {
      value: cdktn.listMapperHcl(arcregionswitchPlanReportConfigurationReportOutputToHclTerraform, true)(struct!.reportOutput),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanReportConfigurationReportOutputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanReportConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanReportConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reportOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportOutput = this._reportOutput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanReportConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reportOutput.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reportOutput.internalValue = value.reportOutput;
    }
  }

  // report_output - computed: false, optional: true, required: false
  private _reportOutput = new ArcregionswitchPlanReportConfigurationReportOutputList(this, "report_output", false);
  public get reportOutput() {
    return this._reportOutput;
  }
  public putReportOutput(value: ArcregionswitchPlanReportConfigurationReportOutput[] | cdktn.IResolvable) {
    this._reportOutput.internalValue = value;
  }
  public resetReportOutput() {
    this._reportOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportOutputInput() {
    return this._reportOutput.internalValue;
  }
}

export class ArcregionswitchPlanReportConfigurationList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanReportConfiguration[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanReportConfigurationOutputReference {
    return new ArcregionswitchPlanReportConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#create ArcregionswitchPlan#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#delete ArcregionswitchPlan#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#update ArcregionswitchPlan#update}
  */
  readonly update?: string;
}

export function arcregionswitchPlanTimeoutsToTerraform(struct?: ArcregionswitchPlanTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function arcregionswitchPlanTimeoutsToHclTerraform(struct?: ArcregionswitchPlanTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArcregionswitchPlanTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#associated_alarm_name ArcregionswitchPlan#associated_alarm_name}
  */
  readonly associatedAlarmName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#condition ArcregionswitchPlan#condition}
  */
  readonly condition: string;
}

export function arcregionswitchPlanTriggersConditionsToTerraform(struct?: ArcregionswitchPlanTriggersConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    associated_alarm_name: cdktn.stringToTerraform(struct!.associatedAlarmName),
    condition: cdktn.stringToTerraform(struct!.condition),
  }
}


export function arcregionswitchPlanTriggersConditionsToHclTerraform(struct?: ArcregionswitchPlanTriggersConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    associated_alarm_name: {
      value: cdktn.stringToHclTerraform(struct!.associatedAlarmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanTriggersConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanTriggersConditions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanTriggersConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associatedAlarmName = undefined;
      this._condition = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanTriggersConditionsList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanTriggersConditions[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanTriggersConditionsOutputReference {
    return new ArcregionswitchPlanTriggersConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanTriggers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#action ArcregionswitchPlan#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#description ArcregionswitchPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#min_delay_minutes_between_executions ArcregionswitchPlan#min_delay_minutes_between_executions}
  */
  readonly minDelayMinutesBetweenExecutions: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#target_region ArcregionswitchPlan#target_region}
  */
  readonly targetRegion: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#conditions ArcregionswitchPlan#conditions}
  */
  readonly conditions?: ArcregionswitchPlanTriggersConditions[] | cdktn.IResolvable;
}

export function arcregionswitchPlanTriggersToTerraform(struct?: ArcregionswitchPlanTriggers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    description: cdktn.stringToTerraform(struct!.description),
    min_delay_minutes_between_executions: cdktn.numberToTerraform(struct!.minDelayMinutesBetweenExecutions),
    target_region: cdktn.stringToTerraform(struct!.targetRegion),
    conditions: cdktn.listMapper(arcregionswitchPlanTriggersConditionsToTerraform, true)(struct!.conditions),
  }
}


export function arcregionswitchPlanTriggersToHclTerraform(struct?: ArcregionswitchPlanTriggers | cdktn.IResolvable): any {
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
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_delay_minutes_between_executions: {
      value: cdktn.numberToHclTerraform(struct!.minDelayMinutesBetweenExecutions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_region: {
      value: cdktn.stringToHclTerraform(struct!.targetRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktn.listMapperHcl(arcregionswitchPlanTriggersConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanTriggersConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanTriggersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanTriggers | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanTriggers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._minDelayMinutesBetweenExecutions = undefined;
      this._targetRegion = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putConditions(value: ArcregionswitchPlanTriggersConditions[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanTriggersList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanTriggers[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanTriggersOutputReference {
    return new ArcregionswitchPlanTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#routing_control_arn ArcregionswitchPlan#routing_control_arn}
  */
  readonly routingControlArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#state ArcregionswitchPlan#state}
  */
  readonly state: string;
}

export function arcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlToTerraform(struct?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    routing_control_arn: cdktn.stringToTerraform(struct!.routingControlArn),
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function arcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    routing_control_arn: {
      value: cdktn.stringToHclTerraform(struct!.routingControlArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingControlArn = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlOutputReference {
    return new ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region ArcregionswitchPlan#region}
  */
  readonly region: string;
  /**
  * routing_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#routing_control ArcregionswitchPlan#routing_control}
  */
  readonly routingControl?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsToTerraform(struct?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
    routing_control: cdktn.listMapper(arcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlToTerraform, true)(struct!.routingControl),
  }
}


export function arcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_control: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlToHclTerraform, true)(struct!.routingControl),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControls | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._routingControl.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putRoutingControl(value: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControls[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsOutputReference {
    return new ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepArcRoutingControlConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * region_and_routing_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region_and_routing_controls ArcregionswitchPlan#region_and_routing_controls}
  */
  readonly regionAndRoutingControls?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControls[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepArcRoutingControlConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    region_and_routing_controls: cdktn.listMapper(arcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsToTerraform, true)(struct!.regionAndRoutingControls),
  }
}


export function arcregionswitchPlanWorkflowStepArcRoutingControlConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_and_routing_controls: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsToHclTerraform, true)(struct!.regionAndRoutingControls),
      isBlock: true,
      type: "set",
      storageClassType: "ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepArcRoutingControlConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepArcRoutingControlConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepArcRoutingControlConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._timeoutMinutes = undefined;
      this._regionAndRoutingControls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putRegionAndRoutingControls(value: ArcregionswitchPlanWorkflowStepArcRoutingControlConfigRegionAndRoutingControls[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepArcRoutingControlConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepArcRoutingControlConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepArcRoutingControlConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepArcRoutingControlConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#global_cluster_identifier ArcregionswitchPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#instance_arns ArcregionswitchPlan#instance_arns}
  */
  readonly instanceArns: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region_database_cluster_arns ArcregionswitchPlan#region_database_cluster_arns}
  */
  readonly regionDatabaseClusterArns: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

export function arcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    instance_arns: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.instanceArns),
    region_database_cluster_arns: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.regionDatabaseClusterArns),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function arcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_arns: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.instanceArns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    region_database_cluster_arns: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.regionDatabaseClusterArns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfig | cdktn.IResolvable | undefined {
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
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._instanceArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceArns = this._instanceArns;
    }
    if (this._regionDatabaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionDatabaseClusterArns = this._regionDatabaseClusterArns;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._instanceArns = undefined;
      this._regionDatabaseClusterArns = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._instanceArns = value.instanceArns;
      this._regionDatabaseClusterArns = value.regionDatabaseClusterArns;
      this._timeoutMinutes = value.timeoutMinutes;
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

  // instance_arns - computed: false, optional: false, required: true
  private _instanceArns?: { [key: string]: string }; 
  public get instanceArns() {
    return this.getStringMapAttribute('instance_arns');
  }
  public set instanceArns(value: { [key: string]: string }) {
    this._instanceArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnsInput() {
    return this._instanceArns;
  }

  // region_database_cluster_arns - computed: false, optional: false, required: true
  private _regionDatabaseClusterArns?: { [key: string]: string }; 
  public get regionDatabaseClusterArns() {
    return this.getStringMapAttribute('region_database_cluster_arns');
  }
  public set regionDatabaseClusterArns(value: { [key: string]: string }) {
    this._regionDatabaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionDatabaseClusterArnsInput() {
    return this._regionDatabaseClusterArns;
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

export class ArcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepAuroraServerlessScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#global_cluster_identifier ArcregionswitchPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region_database_cluster_arns ArcregionswitchPlan#region_database_cluster_arns}
  */
  readonly regionDatabaseClusterArns: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#target_percent ArcregionswitchPlan#target_percent}
  */
  readonly targetPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

export function arcregionswitchPlanWorkflowStepAuroraServerlessScalingConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepAuroraServerlessScalingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    region_database_cluster_arns: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.regionDatabaseClusterArns),
    target_percent: cdktn.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function arcregionswitchPlanWorkflowStepAuroraServerlessScalingConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepAuroraServerlessScalingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_database_cluster_arns: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.regionDatabaseClusterArns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    target_percent: {
      value: cdktn.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepAuroraServerlessScalingConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepAuroraServerlessScalingConfig | cdktn.IResolvable | undefined {
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
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._regionDatabaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionDatabaseClusterArns = this._regionDatabaseClusterArns;
    }
    if (this._targetPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercent = this._targetPercent;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepAuroraServerlessScalingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._regionDatabaseClusterArns = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._regionDatabaseClusterArns = value.regionDatabaseClusterArns;
      this._targetPercent = value.targetPercent;
      this._timeoutMinutes = value.timeoutMinutes;
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

  // region_database_cluster_arns - computed: false, optional: false, required: true
  private _regionDatabaseClusterArns?: { [key: string]: string }; 
  public get regionDatabaseClusterArns() {
    return this.getStringMapAttribute('region_database_cluster_arns');
  }
  public set regionDatabaseClusterArns(value: { [key: string]: string }) {
    this._regionDatabaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionDatabaseClusterArnsInput() {
    return this._regionDatabaseClusterArns;
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
}

export class ArcregionswitchPlanWorkflowStepAuroraServerlessScalingConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepAuroraServerlessScalingConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepAuroraServerlessScalingConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepAuroraServerlessScalingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambda {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#arn ArcregionswitchPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
}

export function arcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaToTerraform(struct?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function arcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambda | cdktn.IResolvable): any {
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
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambda | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambda | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambda[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaOutputReference {
    return new ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#behavior ArcregionswitchPlan#behavior}
  */
  readonly behavior: string;
}

export function arcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
  }
}


export function arcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngraceful | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngraceful | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngraceful[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepCustomActionLambdaConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region_to_run ArcregionswitchPlan#region_to_run}
  */
  readonly regionToRun: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#retry_interval_minutes ArcregionswitchPlan#retry_interval_minutes}
  */
  readonly retryIntervalMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#lambda ArcregionswitchPlan#lambda}
  */
  readonly lambda?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambda[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngraceful[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepCustomActionLambdaConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region_to_run: cdktn.stringToTerraform(struct!.regionToRun),
    retry_interval_minutes: cdktn.numberToTerraform(struct!.retryIntervalMinutes),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    lambda: cdktn.listMapper(arcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaToTerraform, true)(struct!.lambda),
    ungraceful: cdktn.listMapper(arcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepCustomActionLambdaConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region_to_run: {
      value: cdktn.stringToHclTerraform(struct!.regionToRun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_interval_minutes: {
      value: cdktn.numberToHclTerraform(struct!.retryIntervalMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lambda: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaToHclTerraform, true)(struct!.lambda),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambdaList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepCustomActionLambdaConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionToRun = undefined;
      this._retryIntervalMinutes = undefined;
      this._timeoutMinutes = undefined;
      this._lambda.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putLambda(value: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigLambda[] | cdktn.IResolvable) {
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
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigUngraceful[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepCustomActionLambdaConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepDocumentDbConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful: string;
}

export function arcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepDocumentDbConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ungraceful: cdktn.stringToTerraform(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepDocumentDbConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ungraceful: {
      value: cdktn.stringToHclTerraform(struct!.ungraceful),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepDocumentDbConfigUngraceful | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepDocumentDbConfigUngraceful | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ungraceful = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepDocumentDbConfigUngraceful[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepDocumentDbConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#behavior ArcregionswitchPlan#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#database_cluster_arns ArcregionswitchPlan#database_cluster_arns}
  */
  readonly databaseClusterArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#global_cluster_identifier ArcregionswitchPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepDocumentDbConfigUngraceful[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepDocumentDbConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepDocumentDbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    database_cluster_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.databaseClusterArns),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    ungraceful: cdktn.listMapper(arcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepDocumentDbConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepDocumentDbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_cluster_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.databaseClusterArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepDocumentDbConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepDocumentDbConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepDocumentDbConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepDocumentDbConfig | cdktn.IResolvable | undefined) {
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
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepDocumentDbConfigUngraceful[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepDocumentDbConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepDocumentDbConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepDocumentDbConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepDocumentDbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#arn ArcregionswitchPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
}

export function arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgToTerraform(struct?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsg | cdktn.IResolvable): any {
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
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsg | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsg | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsg[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgOutputReference {
    return new ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#minimum_success_percentage ArcregionswitchPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}

export function arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    minimum_success_percentage: cdktn.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktn.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngraceful | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngraceful | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngraceful[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach ArcregionswitchPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#target_percent ArcregionswitchPlan#target_percent}
  */
  readonly targetPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * asg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#asg ArcregionswitchPlan#asg}
  */
  readonly asg?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsg[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngraceful[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_monitoring_approach: cdktn.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktn.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    asg: cdktn.listMapper(arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgToTerraform, true)(struct!.asg),
    ungraceful: cdktn.listMapper(arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktn.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktn.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asg: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgToHclTerraform, true)(struct!.asg),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsgList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
      this._asg.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putAsg(value: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigAsg[] | cdktn.IResolvable) {
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
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigUngraceful[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cluster_arn ArcregionswitchPlan#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#service_arn ArcregionswitchPlan#service_arn}
  */
  readonly serviceArn: string;
}

export function arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceToTerraform(struct?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigService | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_arn: cdktn.stringToTerraform(struct!.clusterArn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    service_arn: cdktn.stringToTerraform(struct!.serviceArn),
  }
}


export function arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigService | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_arn: {
      value: cdktn.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_arn: {
      value: cdktn.stringToHclTerraform(struct!.serviceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigService | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigService | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._serviceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigService[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceOutputReference {
    return new ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#minimum_success_percentage ArcregionswitchPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}

export function arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    minimum_success_percentage: cdktn.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktn.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngraceful | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngraceful | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngraceful[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach ArcregionswitchPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#target_percent ArcregionswitchPlan#target_percent}
  */
  readonly targetPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#service ArcregionswitchPlan#service}
  */
  readonly service?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigService[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngraceful[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_monitoring_approach: cdktn.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktn.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    service: cdktn.listMapper(arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceToTerraform, true)(struct!.service),
    ungraceful: cdktn.listMapper(arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktn.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktn.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceToHclTerraform, true)(struct!.service),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigServiceList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
      this._service.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putService(value: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigService[] | cdktn.IResolvable) {
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
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigUngraceful[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClusters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cluster_arn ArcregionswitchPlan#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
}

export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersToTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClusters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_arn: cdktn.stringToTerraform(struct!.clusterArn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClusters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_arn: {
      value: cdktn.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClusters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClusters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClusters[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersOutputReference {
    return new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#api_version ArcregionswitchPlan#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#kind ArcregionswitchPlan#kind}
  */
  readonly kind: string;
}

export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeToTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_version: cdktn.stringToTerraform(struct!.apiVersion),
    kind: cdktn.stringToTerraform(struct!.kind),
  }
}


export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_version: {
      value: cdktn.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktn.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceType | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceType[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeOutputReference {
    return new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#hpa_name ArcregionswitchPlan#hpa_name}
  */
  readonly hpaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#name ArcregionswitchPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#namespace ArcregionswitchPlan#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#resource_name ArcregionswitchPlan#resource_name}
  */
  readonly resourceName: string;
}

export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesToTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hpa_name: cdktn.stringToTerraform(struct!.hpaName),
    name: cdktn.stringToTerraform(struct!.name),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    resource_name: cdktn.stringToTerraform(struct!.resourceName),
  }
}


export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hpa_name: {
      value: cdktn.stringToHclTerraform(struct!.hpaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktn.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResources | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hpaName = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResources[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesOutputReference {
    return new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#namespace ArcregionswitchPlan#namespace}
  */
  readonly namespace: string;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#resources ArcregionswitchPlan#resources}
  */
  readonly resources?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResources[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesToTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    namespace: cdktn.stringToTerraform(struct!.namespace),
    resources: cdktn.listMapper(arcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesToTerraform, true)(struct!.resources),
  }
}


export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "set",
      storageClassType: "ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResources | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putResources(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesResources[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResources[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesOutputReference {
    return new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#minimum_success_percentage ArcregionswitchPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}

export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    minimum_success_percentage: cdktn.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktn.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngraceful | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngraceful | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngraceful[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepEksResourceScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach ArcregionswitchPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#target_percent ArcregionswitchPlan#target_percent}
  */
  readonly targetPercent: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * eks_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#eks_clusters ArcregionswitchPlan#eks_clusters}
  */
  readonly eksClusters?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClusters[] | cdktn.IResolvable;
  /**
  * kubernetes_resource_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#kubernetes_resource_type ArcregionswitchPlan#kubernetes_resource_type}
  */
  readonly kubernetesResourceType?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceType[] | cdktn.IResolvable;
  /**
  * scaling_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#scaling_resources ArcregionswitchPlan#scaling_resources}
  */
  readonly scalingResources?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResources[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngraceful[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_monitoring_approach: cdktn.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktn.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    eks_clusters: cdktn.listMapper(arcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersToTerraform, true)(struct!.eksClusters),
    kubernetes_resource_type: cdktn.listMapper(arcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeToTerraform, true)(struct!.kubernetesResourceType),
    scaling_resources: cdktn.listMapper(arcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesToTerraform, true)(struct!.scalingResources),
    ungraceful: cdktn.listMapper(arcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepEksResourceScalingConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktn.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktn.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eks_clusters: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersToHclTerraform, true)(struct!.eksClusters),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClustersList",
    },
    kubernetes_resource_type: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeToHclTerraform, true)(struct!.kubernetesResourceType),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceTypeList",
    },
    scaling_resources: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesToHclTerraform, true)(struct!.scalingResources),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResourcesList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepEksResourceScalingConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfig | cdktn.IResolvable | undefined) {
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
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putEksClusters(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigEksClusters[] | cdktn.IResolvable) {
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
  public putKubernetesResourceType(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigKubernetesResourceType[] | cdktn.IResolvable) {
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
  public putScalingResources(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigScalingResources[] | cdktn.IResolvable) {
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
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfigUngraceful[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepEksResourceScalingConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepEksResourceScalingConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepEksResourceScalingConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepEksResourceScalingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepExecutionApprovalConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#approval_role ArcregionswitchPlan#approval_role}
  */
  readonly approvalRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

export function arcregionswitchPlanWorkflowStepExecutionApprovalConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepExecutionApprovalConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    approval_role: cdktn.stringToTerraform(struct!.approvalRole),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function arcregionswitchPlanWorkflowStepExecutionApprovalConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepExecutionApprovalConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    approval_role: {
      value: cdktn.stringToHclTerraform(struct!.approvalRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepExecutionApprovalConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepExecutionApprovalConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepExecutionApprovalConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approvalRole = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepExecutionApprovalConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepExecutionApprovalConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepExecutionApprovalConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepExecutionApprovalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful: string;
}

export function arcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ungraceful: cdktn.stringToTerraform(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ungraceful: {
      value: cdktn.stringToHclTerraform(struct!.ungraceful),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngraceful | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngraceful | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ungraceful = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngraceful[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepGlobalAuroraConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#behavior ArcregionswitchPlan#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#database_cluster_arns ArcregionswitchPlan#database_cluster_arns}
  */
  readonly databaseClusterArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#global_cluster_identifier ArcregionswitchPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngraceful[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepGlobalAuroraConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepGlobalAuroraConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    database_cluster_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.databaseClusterArns),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    ungraceful: cdktn.listMapper(arcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepGlobalAuroraConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepGlobalAuroraConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_cluster_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.databaseClusterArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepGlobalAuroraConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepGlobalAuroraConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepGlobalAuroraConfig | cdktn.IResolvable | undefined) {
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
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepGlobalAuroraConfigUngraceful[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepGlobalAuroraConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepGlobalAuroraConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepGlobalAuroraConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepGlobalAuroraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#arn ArcregionswitchPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region ArcregionswitchPlan#region}
  */
  readonly region: string;
}

export function arcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingToTerraform(struct?: ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function arcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMapping | cdktn.IResolvable): any {
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
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMapping | cdktn.IResolvable | undefined {
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
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._region = value.region;
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

export class ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMapping[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingOutputReference {
    return new ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#behavior ArcregionswitchPlan#behavior}
  */
  readonly behavior: string;
}

export function arcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
  }
}


export function arcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngracefulOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngraceful | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngraceful | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngracefulList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngraceful[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#action ArcregionswitchPlan#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * region_event_source_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region_event_source_mapping ArcregionswitchPlan#region_event_source_mapping}
  */
  readonly regionEventSourceMapping?: ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMapping[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngraceful[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    region_event_source_mapping: cdktn.listMapper(arcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingToTerraform, true)(struct!.regionEventSourceMapping),
    ungraceful: cdktn.listMapper(arcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfig | cdktn.IResolvable): any {
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
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_event_source_mapping: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingToHclTerraform, true)(struct!.regionEventSourceMapping),
      isBlock: true,
      type: "set",
      storageClassType: "ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._regionEventSourceMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionEventSourceMapping = this._regionEventSourceMapping?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._timeoutMinutes = undefined;
      this._regionEventSourceMapping.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._timeoutMinutes = value.timeoutMinutes;
      this._regionEventSourceMapping.internalValue = value.regionEventSourceMapping;
      this._ungraceful.internalValue = value.ungraceful;
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

  // region_event_source_mapping - computed: false, optional: true, required: false
  private _regionEventSourceMapping = new ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMappingList(this, "region_event_source_mapping", true);
  public get regionEventSourceMapping() {
    return this._regionEventSourceMapping;
  }
  public putRegionEventSourceMapping(value: ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigRegionEventSourceMapping[] | cdktn.IResolvable) {
    this._regionEventSourceMapping.internalValue = value;
  }
  public resetRegionEventSourceMapping() {
    this._regionEventSourceMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionEventSourceMappingInput() {
    return this._regionEventSourceMapping.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngracefulList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigUngraceful[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful: string;
}

export function arcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ungraceful: cdktn.stringToTerraform(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ungraceful: {
      value: cdktn.stringToHclTerraform(struct!.ungraceful),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngracefulOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngraceful | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngraceful | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ungraceful = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngracefulList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngraceful[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#behavior ArcregionswitchPlan#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#global_cluster_identifier ArcregionswitchPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region_database_cluster_arns ArcregionswitchPlan#region_database_cluster_arns}
  */
  readonly regionDatabaseClusterArns: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngraceful[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    region_database_cluster_arns: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.regionDatabaseClusterArns),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    ungraceful: cdktn.listMapper(arcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_database_cluster_arns: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.regionDatabaseClusterArns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfig | cdktn.IResolvable | undefined {
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
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._regionDatabaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionDatabaseClusterArns = this._regionDatabaseClusterArns;
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._regionDatabaseClusterArns = undefined;
      this._timeoutMinutes = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._regionDatabaseClusterArns = value.regionDatabaseClusterArns;
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

  // region_database_cluster_arns - computed: false, optional: false, required: true
  private _regionDatabaseClusterArns?: { [key: string]: string }; 
  public get regionDatabaseClusterArns() {
    return this.getStringMapAttribute('region_database_cluster_arns');
  }
  public set regionDatabaseClusterArns(value: { [key: string]: string }) {
    this._regionDatabaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionDatabaseClusterArnsInput() {
    return this._regionDatabaseClusterArns;
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
  private _ungraceful = new ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngracefulList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigUngraceful[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#routing_control_arn ArcregionswitchPlan#routing_control_arn}
  */
  readonly routingControlArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#state ArcregionswitchPlan#state}
  */
  readonly state: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    routing_control_arn: cdktn.stringToTerraform(struct!.routingControlArn),
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    routing_control_arn: {
      value: cdktn.stringToHclTerraform(struct!.routingControlArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingControlArn = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region ArcregionswitchPlan#region}
  */
  readonly region: string;
  /**
  * routing_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#routing_control ArcregionswitchPlan#routing_control}
  */
  readonly routingControl?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
    routing_control: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlToTerraform, true)(struct!.routingControl),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_control: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlToHclTerraform, true)(struct!.routingControl),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControls | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._routingControl.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putRoutingControl(value: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsRoutingControl[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControls[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * region_and_routing_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region_and_routing_controls ArcregionswitchPlan#region_and_routing_controls}
  */
  readonly regionAndRoutingControls?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControls[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    region_and_routing_controls: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsToTerraform, true)(struct!.regionAndRoutingControls),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_and_routing_controls: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsToHclTerraform, true)(struct!.regionAndRoutingControls),
      isBlock: true,
      type: "set",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._timeoutMinutes = undefined;
      this._regionAndRoutingControls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putRegionAndRoutingControls(value: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigRegionAndRoutingControls[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#global_cluster_identifier ArcregionswitchPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#instance_arns ArcregionswitchPlan#instance_arns}
  */
  readonly instanceArns: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region_database_cluster_arns ArcregionswitchPlan#region_database_cluster_arns}
  */
  readonly regionDatabaseClusterArns: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    instance_arns: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.instanceArns),
    region_database_cluster_arns: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.regionDatabaseClusterArns),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_arns: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.instanceArns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    region_database_cluster_arns: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.regionDatabaseClusterArns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfig | cdktn.IResolvable | undefined {
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
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._instanceArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceArns = this._instanceArns;
    }
    if (this._regionDatabaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionDatabaseClusterArns = this._regionDatabaseClusterArns;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._instanceArns = undefined;
      this._regionDatabaseClusterArns = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._instanceArns = value.instanceArns;
      this._regionDatabaseClusterArns = value.regionDatabaseClusterArns;
      this._timeoutMinutes = value.timeoutMinutes;
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

  // instance_arns - computed: false, optional: false, required: true
  private _instanceArns?: { [key: string]: string }; 
  public get instanceArns() {
    return this.getStringMapAttribute('instance_arns');
  }
  public set instanceArns(value: { [key: string]: string }) {
    this._instanceArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnsInput() {
    return this._instanceArns;
  }

  // region_database_cluster_arns - computed: false, optional: false, required: true
  private _regionDatabaseClusterArns?: { [key: string]: string }; 
  public get regionDatabaseClusterArns() {
    return this.getStringMapAttribute('region_database_cluster_arns');
  }
  public set regionDatabaseClusterArns(value: { [key: string]: string }) {
    this._regionDatabaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionDatabaseClusterArnsInput() {
    return this._regionDatabaseClusterArns;
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#global_cluster_identifier ArcregionswitchPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region_database_cluster_arns ArcregionswitchPlan#region_database_cluster_arns}
  */
  readonly regionDatabaseClusterArns: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#target_percent ArcregionswitchPlan#target_percent}
  */
  readonly targetPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    region_database_cluster_arns: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.regionDatabaseClusterArns),
    target_percent: cdktn.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_database_cluster_arns: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.regionDatabaseClusterArns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    target_percent: {
      value: cdktn.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfig | cdktn.IResolvable | undefined {
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
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._regionDatabaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionDatabaseClusterArns = this._regionDatabaseClusterArns;
    }
    if (this._targetPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercent = this._targetPercent;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._regionDatabaseClusterArns = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._regionDatabaseClusterArns = value.regionDatabaseClusterArns;
      this._targetPercent = value.targetPercent;
      this._timeoutMinutes = value.timeoutMinutes;
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

  // region_database_cluster_arns - computed: false, optional: false, required: true
  private _regionDatabaseClusterArns?: { [key: string]: string }; 
  public get regionDatabaseClusterArns() {
    return this.getStringMapAttribute('region_database_cluster_arns');
  }
  public set regionDatabaseClusterArns(value: { [key: string]: string }) {
    this._regionDatabaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionDatabaseClusterArnsInput() {
    return this._regionDatabaseClusterArns;
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
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambda {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#arn ArcregionswitchPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambda | cdktn.IResolvable): any {
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
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambda | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambda | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambda[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#behavior ArcregionswitchPlan#behavior}
  */
  readonly behavior: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngraceful | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngraceful | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngraceful[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region_to_run ArcregionswitchPlan#region_to_run}
  */
  readonly regionToRun: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#retry_interval_minutes ArcregionswitchPlan#retry_interval_minutes}
  */
  readonly retryIntervalMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#lambda ArcregionswitchPlan#lambda}
  */
  readonly lambda?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambda[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngraceful[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region_to_run: cdktn.stringToTerraform(struct!.regionToRun),
    retry_interval_minutes: cdktn.numberToTerraform(struct!.retryIntervalMinutes),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    lambda: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaToTerraform, true)(struct!.lambda),
    ungraceful: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region_to_run: {
      value: cdktn.stringToHclTerraform(struct!.regionToRun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_interval_minutes: {
      value: cdktn.numberToHclTerraform(struct!.retryIntervalMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lambda: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaToHclTerraform, true)(struct!.lambda),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambdaList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionToRun = undefined;
      this._retryIntervalMinutes = undefined;
      this._timeoutMinutes = undefined;
      this._lambda.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putLambda(value: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigLambda[] | cdktn.IResolvable) {
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
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigUngraceful[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ungraceful: cdktn.stringToTerraform(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ungraceful: {
      value: cdktn.stringToHclTerraform(struct!.ungraceful),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngraceful | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngraceful | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ungraceful = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngraceful[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#behavior ArcregionswitchPlan#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#database_cluster_arns ArcregionswitchPlan#database_cluster_arns}
  */
  readonly databaseClusterArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#global_cluster_identifier ArcregionswitchPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngraceful[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    database_cluster_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.databaseClusterArns),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    ungraceful: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_cluster_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.databaseClusterArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfig | cdktn.IResolvable | undefined) {
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
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigUngraceful[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#arn ArcregionswitchPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsg | cdktn.IResolvable): any {
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
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsg | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsg | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsg[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#minimum_success_percentage ArcregionswitchPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    minimum_success_percentage: cdktn.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktn.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngraceful | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngraceful | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngraceful[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach ArcregionswitchPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#target_percent ArcregionswitchPlan#target_percent}
  */
  readonly targetPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * asg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#asg ArcregionswitchPlan#asg}
  */
  readonly asg?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsg[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngraceful[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_monitoring_approach: cdktn.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktn.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    asg: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgToTerraform, true)(struct!.asg),
    ungraceful: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktn.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktn.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asg: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgToHclTerraform, true)(struct!.asg),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsgList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
      this._asg.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putAsg(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigAsg[] | cdktn.IResolvable) {
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
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigUngraceful[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cluster_arn ArcregionswitchPlan#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#service_arn ArcregionswitchPlan#service_arn}
  */
  readonly serviceArn: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigService | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_arn: cdktn.stringToTerraform(struct!.clusterArn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    service_arn: cdktn.stringToTerraform(struct!.serviceArn),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigService | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_arn: {
      value: cdktn.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_arn: {
      value: cdktn.stringToHclTerraform(struct!.serviceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigService | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigService | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._serviceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigService[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#minimum_success_percentage ArcregionswitchPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    minimum_success_percentage: cdktn.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktn.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngraceful | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngraceful | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngraceful[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach ArcregionswitchPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#target_percent ArcregionswitchPlan#target_percent}
  */
  readonly targetPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#service ArcregionswitchPlan#service}
  */
  readonly service?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigService[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngraceful[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_monitoring_approach: cdktn.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktn.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    service: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceToTerraform, true)(struct!.service),
    ungraceful: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktn.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktn.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceToHclTerraform, true)(struct!.service),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigServiceList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityMonitoringApproach = undefined;
      this._targetPercent = undefined;
      this._timeoutMinutes = undefined;
      this._service.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putService(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigService[] | cdktn.IResolvable) {
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
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigUngraceful[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClusters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cluster_arn ArcregionswitchPlan#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClusters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_arn: cdktn.stringToTerraform(struct!.clusterArn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClusters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_arn: {
      value: cdktn.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClusters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClusters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClusters[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#api_version ArcregionswitchPlan#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#kind ArcregionswitchPlan#kind}
  */
  readonly kind: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_version: cdktn.stringToTerraform(struct!.apiVersion),
    kind: cdktn.stringToTerraform(struct!.kind),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_version: {
      value: cdktn.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktn.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceType | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceType[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#hpa_name ArcregionswitchPlan#hpa_name}
  */
  readonly hpaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#name ArcregionswitchPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#namespace ArcregionswitchPlan#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#resource_name ArcregionswitchPlan#resource_name}
  */
  readonly resourceName: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hpa_name: cdktn.stringToTerraform(struct!.hpaName),
    name: cdktn.stringToTerraform(struct!.name),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    resource_name: cdktn.stringToTerraform(struct!.resourceName),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hpa_name: {
      value: cdktn.stringToHclTerraform(struct!.hpaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktn.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResources | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hpaName = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResources[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#namespace ArcregionswitchPlan#namespace}
  */
  readonly namespace: string;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#resources ArcregionswitchPlan#resources}
  */
  readonly resources?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResources[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    namespace: cdktn.stringToTerraform(struct!.namespace),
    resources: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesToTerraform, true)(struct!.resources),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "set",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResources | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putResources(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesResources[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResources[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#minimum_success_percentage ArcregionswitchPlan#minimum_success_percentage}
  */
  readonly minimumSuccessPercentage: number;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    minimum_success_percentage: cdktn.numberToTerraform(struct!.minimumSuccessPercentage),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    minimum_success_percentage: {
      value: cdktn.numberToHclTerraform(struct!.minimumSuccessPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngraceful | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngraceful | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSuccessPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngraceful[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#capacity_monitoring_approach ArcregionswitchPlan#capacity_monitoring_approach}
  */
  readonly capacityMonitoringApproach: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#target_percent ArcregionswitchPlan#target_percent}
  */
  readonly targetPercent: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * eks_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#eks_clusters ArcregionswitchPlan#eks_clusters}
  */
  readonly eksClusters?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClusters[] | cdktn.IResolvable;
  /**
  * kubernetes_resource_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#kubernetes_resource_type ArcregionswitchPlan#kubernetes_resource_type}
  */
  readonly kubernetesResourceType?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceType[] | cdktn.IResolvable;
  /**
  * scaling_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#scaling_resources ArcregionswitchPlan#scaling_resources}
  */
  readonly scalingResources?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResources[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngraceful[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_monitoring_approach: cdktn.stringToTerraform(struct!.capacityMonitoringApproach),
    target_percent: cdktn.numberToTerraform(struct!.targetPercent),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    eks_clusters: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersToTerraform, true)(struct!.eksClusters),
    kubernetes_resource_type: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeToTerraform, true)(struct!.kubernetesResourceType),
    scaling_resources: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesToTerraform, true)(struct!.scalingResources),
    ungraceful: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_monitoring_approach: {
      value: cdktn.stringToHclTerraform(struct!.capacityMonitoringApproach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktn.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eks_clusters: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersToHclTerraform, true)(struct!.eksClusters),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClustersList",
    },
    kubernetes_resource_type: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeToHclTerraform, true)(struct!.kubernetesResourceType),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceTypeList",
    },
    scaling_resources: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesToHclTerraform, true)(struct!.scalingResources),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResourcesList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfig | cdktn.IResolvable | undefined) {
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
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putEksClusters(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigEksClusters[] | cdktn.IResolvable) {
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
  public putKubernetesResourceType(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigKubernetesResourceType[] | cdktn.IResolvable) {
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
  public putScalingResources(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigScalingResources[] | cdktn.IResolvable) {
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
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigUngraceful[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#approval_role ArcregionswitchPlan#approval_role}
  */
  readonly approvalRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    approval_role: cdktn.stringToTerraform(struct!.approvalRole),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    approval_role: {
      value: cdktn.stringToHclTerraform(struct!.approvalRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approvalRole = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ungraceful: cdktn.stringToTerraform(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ungraceful: {
      value: cdktn.stringToHclTerraform(struct!.ungraceful),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngraceful | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngraceful | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ungraceful = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngraceful[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#behavior ArcregionswitchPlan#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#database_cluster_arns ArcregionswitchPlan#database_cluster_arns}
  */
  readonly databaseClusterArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#global_cluster_identifier ArcregionswitchPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngraceful[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    database_cluster_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.databaseClusterArns),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    ungraceful: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_cluster_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.databaseClusterArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfig | cdktn.IResolvable | undefined) {
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
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigUngraceful[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#arn ArcregionswitchPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region ArcregionswitchPlan#region}
  */
  readonly region: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMapping | cdktn.IResolvable): any {
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
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMapping | cdktn.IResolvable | undefined {
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
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._region = value.region;
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMapping[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#behavior ArcregionswitchPlan#behavior}
  */
  readonly behavior: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngraceful | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngraceful | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngraceful[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#action ArcregionswitchPlan#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * region_event_source_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region_event_source_mapping ArcregionswitchPlan#region_event_source_mapping}
  */
  readonly regionEventSourceMapping?: ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMapping[] | cdktn.IResolvable;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngraceful[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    region_event_source_mapping: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingToTerraform, true)(struct!.regionEventSourceMapping),
    ungraceful: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfig | cdktn.IResolvable): any {
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
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_event_source_mapping: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingToHclTerraform, true)(struct!.regionEventSourceMapping),
      isBlock: true,
      type: "set",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingList",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    if (this._regionEventSourceMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionEventSourceMapping = this._regionEventSourceMapping?.internalValue;
    }
    if (this._ungraceful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ungraceful = this._ungraceful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._timeoutMinutes = undefined;
      this._regionEventSourceMapping.internalValue = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._timeoutMinutes = value.timeoutMinutes;
      this._regionEventSourceMapping.internalValue = value.regionEventSourceMapping;
      this._ungraceful.internalValue = value.ungraceful;
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

  // region_event_source_mapping - computed: false, optional: true, required: false
  private _regionEventSourceMapping = new ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMappingList(this, "region_event_source_mapping", true);
  public get regionEventSourceMapping() {
    return this._regionEventSourceMapping;
  }
  public putRegionEventSourceMapping(value: ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigRegionEventSourceMapping[] | cdktn.IResolvable) {
    this._regionEventSourceMapping.internalValue = value;
  }
  public resetRegionEventSourceMapping() {
    this._regionEventSourceMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionEventSourceMappingInput() {
    return this._regionEventSourceMapping.internalValue;
  }

  // ungraceful - computed: false, optional: true, required: false
  private _ungraceful = new ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngracefulList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigUngraceful[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngraceful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ungraceful: cdktn.stringToTerraform(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngraceful | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ungraceful: {
      value: cdktn.stringToHclTerraform(struct!.ungraceful),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngraceful | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngraceful | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ungraceful = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngraceful[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#behavior ArcregionswitchPlan#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#global_cluster_identifier ArcregionswitchPlan#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region_database_cluster_arns ArcregionswitchPlan#region_database_cluster_arns}
  */
  readonly regionDatabaseClusterArns: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * ungraceful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ungraceful ArcregionswitchPlan#ungraceful}
  */
  readonly ungraceful?: ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngraceful[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    global_cluster_identifier: cdktn.stringToTerraform(struct!.globalClusterIdentifier),
    region_database_cluster_arns: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.regionDatabaseClusterArns),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    ungraceful: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulToTerraform, true)(struct!.ungraceful),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.globalClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_database_cluster_arns: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.regionDatabaseClusterArns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ungraceful: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulToHclTerraform, true)(struct!.ungraceful),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfig | cdktn.IResolvable | undefined {
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
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._regionDatabaseClusterArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionDatabaseClusterArns = this._regionDatabaseClusterArns;
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
      this._globalClusterIdentifier = undefined;
      this._regionDatabaseClusterArns = undefined;
      this._timeoutMinutes = undefined;
      this._ungraceful.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._crossAccountRole = value.crossAccountRole;
      this._externalId = value.externalId;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._regionDatabaseClusterArns = value.regionDatabaseClusterArns;
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

  // region_database_cluster_arns - computed: false, optional: false, required: true
  private _regionDatabaseClusterArns?: { [key: string]: string }; 
  public get regionDatabaseClusterArns() {
    return this.getStringMapAttribute('region_database_cluster_arns');
  }
  public set regionDatabaseClusterArns(value: { [key: string]: string }) {
    this._regionDatabaseClusterArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionDatabaseClusterArnsInput() {
    return this._regionDatabaseClusterArns;
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
  private _ungraceful = new ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngracefulList(this, "ungraceful", false);
  public get ungraceful() {
    return this._ungraceful;
  }
  public putUngraceful(value: ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigUngraceful[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#db_instance_arn_map ArcregionswitchPlan#db_instance_arn_map}
  */
  readonly dbInstanceArnMap: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    db_instance_arn_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dbInstanceArnMap),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_instance_arn_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dbInstanceArnMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._dbInstanceArnMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbInstanceArnMap = this._dbInstanceArnMap;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._dbInstanceArnMap = undefined;
      this._externalId = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._dbInstanceArnMap = value.dbInstanceArnMap;
      this._externalId = value.externalId;
      this._timeoutMinutes = value.timeoutMinutes;
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

  // db_instance_arn_map - computed: false, optional: false, required: true
  private _dbInstanceArnMap?: { [key: string]: string }; 
  public get dbInstanceArnMap() {
    return this.getStringMapAttribute('db_instance_arn_map');
  }
  public set dbInstanceArnMap(value: { [key: string]: string }) {
    this._dbInstanceArnMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceArnMapInput() {
    return this._dbInstanceArnMap;
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
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#db_instance_arn_map ArcregionswitchPlan#db_instance_arn_map}
  */
  readonly dbInstanceArnMap: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    db_instance_arn_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dbInstanceArnMap),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_instance_arn_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dbInstanceArnMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._dbInstanceArnMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbInstanceArnMap = this._dbInstanceArnMap;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._dbInstanceArnMap = undefined;
      this._externalId = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._dbInstanceArnMap = value.dbInstanceArnMap;
      this._externalId = value.externalId;
      this._timeoutMinutes = value.timeoutMinutes;
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

  // db_instance_arn_map - computed: false, optional: false, required: true
  private _dbInstanceArnMap?: { [key: string]: string }; 
  public get dbInstanceArnMap() {
    return this.getStringMapAttribute('db_instance_arn_map');
  }
  public set dbInstanceArnMap(value: { [key: string]: string }) {
    this._dbInstanceArnMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceArnMapInput() {
    return this._dbInstanceArnMap;
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
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#arn ArcregionswitchPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfig | cdktn.IResolvable): any {
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
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#record_set_identifier ArcregionswitchPlan#record_set_identifier}
  */
  readonly recordSetIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region ArcregionswitchPlan#region}
  */
  readonly region: string;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_set_identifier: cdktn.stringToTerraform(struct!.recordSetIdentifier),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_set_identifier: {
      value: cdktn.stringToHclTerraform(struct!.recordSetIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSet | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSet | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordSetIdentifier = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSet[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#hosted_zone_id ArcregionswitchPlan#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#record_name ArcregionswitchPlan#record_name}
  */
  readonly recordName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * record_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#record_set ArcregionswitchPlan#record_set}
  */
  readonly recordSet?: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSet[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    hosted_zone_id: cdktn.stringToTerraform(struct!.hostedZoneId),
    record_name: cdktn.stringToTerraform(struct!.recordName),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    record_set: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetToTerraform, true)(struct!.recordSet),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosted_zone_id: {
      value: cdktn.stringToHclTerraform(struct!.hostedZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_name: {
      value: cdktn.stringToHclTerraform(struct!.recordName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_set: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetToHclTerraform, true)(struct!.recordSet),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfig | cdktn.IResolvable | undefined) {
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
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putRecordSet(value: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigRecordSet[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfigStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#description ArcregionswitchPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#execution_block_type ArcregionswitchPlan#execution_block_type}
  */
  readonly executionBlockType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#name ArcregionswitchPlan#name}
  */
  readonly name: string;
  /**
  * arc_routing_control_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#arc_routing_control_config ArcregionswitchPlan#arc_routing_control_config}
  */
  readonly arcRoutingControlConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfig[] | cdktn.IResolvable;
  /**
  * aurora_provisioned_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#aurora_provisioned_scaling_config ArcregionswitchPlan#aurora_provisioned_scaling_config}
  */
  readonly auroraProvisionedScalingConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfig[] | cdktn.IResolvable;
  /**
  * aurora_serverless_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#aurora_serverless_scaling_config ArcregionswitchPlan#aurora_serverless_scaling_config}
  */
  readonly auroraServerlessScalingConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfig[] | cdktn.IResolvable;
  /**
  * custom_action_lambda_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#custom_action_lambda_config ArcregionswitchPlan#custom_action_lambda_config}
  */
  readonly customActionLambdaConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfig[] | cdktn.IResolvable;
  /**
  * document_db_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#document_db_config ArcregionswitchPlan#document_db_config}
  */
  readonly documentDbConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfig[] | cdktn.IResolvable;
  /**
  * ec2_asg_capacity_increase_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ec2_asg_capacity_increase_config ArcregionswitchPlan#ec2_asg_capacity_increase_config}
  */
  readonly ec2AsgCapacityIncreaseConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfig[] | cdktn.IResolvable;
  /**
  * ecs_capacity_increase_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ecs_capacity_increase_config ArcregionswitchPlan#ecs_capacity_increase_config}
  */
  readonly ecsCapacityIncreaseConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfig[] | cdktn.IResolvable;
  /**
  * eks_resource_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#eks_resource_scaling_config ArcregionswitchPlan#eks_resource_scaling_config}
  */
  readonly eksResourceScalingConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfig[] | cdktn.IResolvable;
  /**
  * execution_approval_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#execution_approval_config ArcregionswitchPlan#execution_approval_config}
  */
  readonly executionApprovalConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfig[] | cdktn.IResolvable;
  /**
  * global_aurora_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#global_aurora_config ArcregionswitchPlan#global_aurora_config}
  */
  readonly globalAuroraConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfig[] | cdktn.IResolvable;
  /**
  * lambda_event_source_mapping_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#lambda_event_source_mapping_config ArcregionswitchPlan#lambda_event_source_mapping_config}
  */
  readonly lambdaEventSourceMappingConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfig[] | cdktn.IResolvable;
  /**
  * neptune_global_database_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#neptune_global_database_config ArcregionswitchPlan#neptune_global_database_config}
  */
  readonly neptuneGlobalDatabaseConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfig[] | cdktn.IResolvable;
  /**
  * rds_create_cross_region_read_replica_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#rds_create_cross_region_read_replica_config ArcregionswitchPlan#rds_create_cross_region_read_replica_config}
  */
  readonly rdsCreateCrossRegionReadReplicaConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfig[] | cdktn.IResolvable;
  /**
  * rds_promote_read_replica_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#rds_promote_read_replica_config ArcregionswitchPlan#rds_promote_read_replica_config}
  */
  readonly rdsPromoteReadReplicaConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfig[] | cdktn.IResolvable;
  /**
  * region_switch_plan_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region_switch_plan_config ArcregionswitchPlan#region_switch_plan_config}
  */
  readonly regionSwitchPlanConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfig[] | cdktn.IResolvable;
  /**
  * route53_health_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#route53_health_check_config ArcregionswitchPlan#route53_health_check_config}
  */
  readonly route53HealthCheckConfig?: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfig[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigStepToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    execution_block_type: cdktn.stringToTerraform(struct!.executionBlockType),
    name: cdktn.stringToTerraform(struct!.name),
    arc_routing_control_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigToTerraform, true)(struct!.arcRoutingControlConfig),
    aurora_provisioned_scaling_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfigToTerraform, true)(struct!.auroraProvisionedScalingConfig),
    aurora_serverless_scaling_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfigToTerraform, true)(struct!.auroraServerlessScalingConfig),
    custom_action_lambda_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigToTerraform, true)(struct!.customActionLambdaConfig),
    document_db_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigToTerraform, true)(struct!.documentDbConfig),
    ec2_asg_capacity_increase_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigToTerraform, true)(struct!.ec2AsgCapacityIncreaseConfig),
    ecs_capacity_increase_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigToTerraform, true)(struct!.ecsCapacityIncreaseConfig),
    eks_resource_scaling_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigToTerraform, true)(struct!.eksResourceScalingConfig),
    execution_approval_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigToTerraform, true)(struct!.executionApprovalConfig),
    global_aurora_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigToTerraform, true)(struct!.globalAuroraConfig),
    lambda_event_source_mapping_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigToTerraform, true)(struct!.lambdaEventSourceMappingConfig),
    neptune_global_database_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigToTerraform, true)(struct!.neptuneGlobalDatabaseConfig),
    rds_create_cross_region_read_replica_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigToTerraform, true)(struct!.rdsCreateCrossRegionReadReplicaConfig),
    rds_promote_read_replica_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigToTerraform, true)(struct!.rdsPromoteReadReplicaConfig),
    region_switch_plan_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigToTerraform, true)(struct!.regionSwitchPlanConfig),
    route53_health_check_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigToTerraform, true)(struct!.route53HealthCheckConfig),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigStepToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfigStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_block_type: {
      value: cdktn.stringToHclTerraform(struct!.executionBlockType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arc_routing_control_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigToHclTerraform, true)(struct!.arcRoutingControlConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfigList",
    },
    aurora_provisioned_scaling_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfigToHclTerraform, true)(struct!.auroraProvisionedScalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfigList",
    },
    aurora_serverless_scaling_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfigToHclTerraform, true)(struct!.auroraServerlessScalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfigList",
    },
    custom_action_lambda_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigToHclTerraform, true)(struct!.customActionLambdaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigList",
    },
    document_db_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigToHclTerraform, true)(struct!.documentDbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfigList",
    },
    ec2_asg_capacity_increase_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigToHclTerraform, true)(struct!.ec2AsgCapacityIncreaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfigList",
    },
    ecs_capacity_increase_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigToHclTerraform, true)(struct!.ecsCapacityIncreaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfigList",
    },
    eks_resource_scaling_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigToHclTerraform, true)(struct!.eksResourceScalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfigList",
    },
    execution_approval_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigToHclTerraform, true)(struct!.executionApprovalConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfigList",
    },
    global_aurora_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigToHclTerraform, true)(struct!.globalAuroraConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfigList",
    },
    lambda_event_source_mapping_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigToHclTerraform, true)(struct!.lambdaEventSourceMappingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigList",
    },
    neptune_global_database_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigToHclTerraform, true)(struct!.neptuneGlobalDatabaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigList",
    },
    rds_create_cross_region_read_replica_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigToHclTerraform, true)(struct!.rdsCreateCrossRegionReadReplicaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigList",
    },
    rds_promote_read_replica_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigToHclTerraform, true)(struct!.rdsPromoteReadReplicaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigList",
    },
    region_switch_plan_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigToHclTerraform, true)(struct!.regionSwitchPlanConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigList",
    },
    route53_health_check_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigToHclTerraform, true)(struct!.route53HealthCheckConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigStepOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfigStep | cdktn.IResolvable | undefined {
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
    if (this._auroraProvisionedScalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auroraProvisionedScalingConfig = this._auroraProvisionedScalingConfig?.internalValue;
    }
    if (this._auroraServerlessScalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auroraServerlessScalingConfig = this._auroraServerlessScalingConfig?.internalValue;
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
    if (this._lambdaEventSourceMappingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaEventSourceMappingConfig = this._lambdaEventSourceMappingConfig?.internalValue;
    }
    if (this._neptuneGlobalDatabaseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neptuneGlobalDatabaseConfig = this._neptuneGlobalDatabaseConfig?.internalValue;
    }
    if (this._rdsCreateCrossRegionReadReplicaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsCreateCrossRegionReadReplicaConfig = this._rdsCreateCrossRegionReadReplicaConfig?.internalValue;
    }
    if (this._rdsPromoteReadReplicaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsPromoteReadReplicaConfig = this._rdsPromoteReadReplicaConfig?.internalValue;
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfigStep | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._executionBlockType = undefined;
      this._name = undefined;
      this._arcRoutingControlConfig.internalValue = undefined;
      this._auroraProvisionedScalingConfig.internalValue = undefined;
      this._auroraServerlessScalingConfig.internalValue = undefined;
      this._customActionLambdaConfig.internalValue = undefined;
      this._documentDbConfig.internalValue = undefined;
      this._ec2AsgCapacityIncreaseConfig.internalValue = undefined;
      this._ecsCapacityIncreaseConfig.internalValue = undefined;
      this._eksResourceScalingConfig.internalValue = undefined;
      this._executionApprovalConfig.internalValue = undefined;
      this._globalAuroraConfig.internalValue = undefined;
      this._lambdaEventSourceMappingConfig.internalValue = undefined;
      this._neptuneGlobalDatabaseConfig.internalValue = undefined;
      this._rdsCreateCrossRegionReadReplicaConfig.internalValue = undefined;
      this._rdsPromoteReadReplicaConfig.internalValue = undefined;
      this._regionSwitchPlanConfig.internalValue = undefined;
      this._route53HealthCheckConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
      this._auroraProvisionedScalingConfig.internalValue = value.auroraProvisionedScalingConfig;
      this._auroraServerlessScalingConfig.internalValue = value.auroraServerlessScalingConfig;
      this._customActionLambdaConfig.internalValue = value.customActionLambdaConfig;
      this._documentDbConfig.internalValue = value.documentDbConfig;
      this._ec2AsgCapacityIncreaseConfig.internalValue = value.ec2AsgCapacityIncreaseConfig;
      this._ecsCapacityIncreaseConfig.internalValue = value.ecsCapacityIncreaseConfig;
      this._eksResourceScalingConfig.internalValue = value.eksResourceScalingConfig;
      this._executionApprovalConfig.internalValue = value.executionApprovalConfig;
      this._globalAuroraConfig.internalValue = value.globalAuroraConfig;
      this._lambdaEventSourceMappingConfig.internalValue = value.lambdaEventSourceMappingConfig;
      this._neptuneGlobalDatabaseConfig.internalValue = value.neptuneGlobalDatabaseConfig;
      this._rdsCreateCrossRegionReadReplicaConfig.internalValue = value.rdsCreateCrossRegionReadReplicaConfig;
      this._rdsPromoteReadReplicaConfig.internalValue = value.rdsPromoteReadReplicaConfig;
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
  public putArcRoutingControlConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepArcRoutingControlConfig[] | cdktn.IResolvable) {
    this._arcRoutingControlConfig.internalValue = value;
  }
  public resetArcRoutingControlConfig() {
    this._arcRoutingControlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arcRoutingControlConfigInput() {
    return this._arcRoutingControlConfig.internalValue;
  }

  // aurora_provisioned_scaling_config - computed: false, optional: true, required: false
  private _auroraProvisionedScalingConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfigList(this, "aurora_provisioned_scaling_config", false);
  public get auroraProvisionedScalingConfig() {
    return this._auroraProvisionedScalingConfig;
  }
  public putAuroraProvisionedScalingConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraProvisionedScalingConfig[] | cdktn.IResolvable) {
    this._auroraProvisionedScalingConfig.internalValue = value;
  }
  public resetAuroraProvisionedScalingConfig() {
    this._auroraProvisionedScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraProvisionedScalingConfigInput() {
    return this._auroraProvisionedScalingConfig.internalValue;
  }

  // aurora_serverless_scaling_config - computed: false, optional: true, required: false
  private _auroraServerlessScalingConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfigList(this, "aurora_serverless_scaling_config", false);
  public get auroraServerlessScalingConfig() {
    return this._auroraServerlessScalingConfig;
  }
  public putAuroraServerlessScalingConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepAuroraServerlessScalingConfig[] | cdktn.IResolvable) {
    this._auroraServerlessScalingConfig.internalValue = value;
  }
  public resetAuroraServerlessScalingConfig() {
    this._auroraServerlessScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraServerlessScalingConfigInput() {
    return this._auroraServerlessScalingConfig.internalValue;
  }

  // custom_action_lambda_config - computed: false, optional: true, required: false
  private _customActionLambdaConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfigList(this, "custom_action_lambda_config", false);
  public get customActionLambdaConfig() {
    return this._customActionLambdaConfig;
  }
  public putCustomActionLambdaConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepCustomActionLambdaConfig[] | cdktn.IResolvable) {
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
  public putDocumentDbConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepDocumentDbConfig[] | cdktn.IResolvable) {
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
  public putEc2AsgCapacityIncreaseConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEc2AsgCapacityIncreaseConfig[] | cdktn.IResolvable) {
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
  public putEcsCapacityIncreaseConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEcsCapacityIncreaseConfig[] | cdktn.IResolvable) {
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
  public putEksResourceScalingConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepEksResourceScalingConfig[] | cdktn.IResolvable) {
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
  public putExecutionApprovalConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepExecutionApprovalConfig[] | cdktn.IResolvable) {
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
  public putGlobalAuroraConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepGlobalAuroraConfig[] | cdktn.IResolvable) {
    this._globalAuroraConfig.internalValue = value;
  }
  public resetGlobalAuroraConfig() {
    this._globalAuroraConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalAuroraConfigInput() {
    return this._globalAuroraConfig.internalValue;
  }

  // lambda_event_source_mapping_config - computed: false, optional: true, required: false
  private _lambdaEventSourceMappingConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfigList(this, "lambda_event_source_mapping_config", false);
  public get lambdaEventSourceMappingConfig() {
    return this._lambdaEventSourceMappingConfig;
  }
  public putLambdaEventSourceMappingConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepLambdaEventSourceMappingConfig[] | cdktn.IResolvable) {
    this._lambdaEventSourceMappingConfig.internalValue = value;
  }
  public resetLambdaEventSourceMappingConfig() {
    this._lambdaEventSourceMappingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaEventSourceMappingConfigInput() {
    return this._lambdaEventSourceMappingConfig.internalValue;
  }

  // neptune_global_database_config - computed: false, optional: true, required: false
  private _neptuneGlobalDatabaseConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfigList(this, "neptune_global_database_config", false);
  public get neptuneGlobalDatabaseConfig() {
    return this._neptuneGlobalDatabaseConfig;
  }
  public putNeptuneGlobalDatabaseConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepNeptuneGlobalDatabaseConfig[] | cdktn.IResolvable) {
    this._neptuneGlobalDatabaseConfig.internalValue = value;
  }
  public resetNeptuneGlobalDatabaseConfig() {
    this._neptuneGlobalDatabaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neptuneGlobalDatabaseConfigInput() {
    return this._neptuneGlobalDatabaseConfig.internalValue;
  }

  // rds_create_cross_region_read_replica_config - computed: false, optional: true, required: false
  private _rdsCreateCrossRegionReadReplicaConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfigList(this, "rds_create_cross_region_read_replica_config", false);
  public get rdsCreateCrossRegionReadReplicaConfig() {
    return this._rdsCreateCrossRegionReadReplicaConfig;
  }
  public putRdsCreateCrossRegionReadReplicaConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepRdsCreateCrossRegionReadReplicaConfig[] | cdktn.IResolvable) {
    this._rdsCreateCrossRegionReadReplicaConfig.internalValue = value;
  }
  public resetRdsCreateCrossRegionReadReplicaConfig() {
    this._rdsCreateCrossRegionReadReplicaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsCreateCrossRegionReadReplicaConfigInput() {
    return this._rdsCreateCrossRegionReadReplicaConfig.internalValue;
  }

  // rds_promote_read_replica_config - computed: false, optional: true, required: false
  private _rdsPromoteReadReplicaConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfigList(this, "rds_promote_read_replica_config", false);
  public get rdsPromoteReadReplicaConfig() {
    return this._rdsPromoteReadReplicaConfig;
  }
  public putRdsPromoteReadReplicaConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepRdsPromoteReadReplicaConfig[] | cdktn.IResolvable) {
    this._rdsPromoteReadReplicaConfig.internalValue = value;
  }
  public resetRdsPromoteReadReplicaConfig() {
    this._rdsPromoteReadReplicaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsPromoteReadReplicaConfigInput() {
    return this._rdsPromoteReadReplicaConfig.internalValue;
  }

  // region_switch_plan_config - computed: false, optional: true, required: false
  private _regionSwitchPlanConfig = new ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfigList(this, "region_switch_plan_config", false);
  public get regionSwitchPlanConfig() {
    return this._regionSwitchPlanConfig;
  }
  public putRegionSwitchPlanConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepRegionSwitchPlanConfig[] | cdktn.IResolvable) {
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
  public putRoute53HealthCheckConfig(value: ArcregionswitchPlanWorkflowStepParallelConfigStepRoute53HealthCheckConfig[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigStepList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfigStep[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigStepOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepParallelConfig {
  /**
  * step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#step ArcregionswitchPlan#step}
  */
  readonly step?: ArcregionswitchPlanWorkflowStepParallelConfigStep[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepParallelConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    step: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigStepToTerraform, true)(struct!.step),
  }
}


export function arcregionswitchPlanWorkflowStepParallelConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepParallelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    step: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigStepToHclTerraform, true)(struct!.step),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigStepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepParallelConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepParallelConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepParallelConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._step.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putStep(value: ArcregionswitchPlanWorkflowStepParallelConfigStep[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepParallelConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepParallelConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepParallelConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepParallelConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#db_instance_arn_map ArcregionswitchPlan#db_instance_arn_map}
  */
  readonly dbInstanceArnMap: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

export function arcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    db_instance_arn_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dbInstanceArnMap),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function arcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_instance_arn_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dbInstanceArnMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._dbInstanceArnMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbInstanceArnMap = this._dbInstanceArnMap;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._dbInstanceArnMap = undefined;
      this._externalId = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._dbInstanceArnMap = value.dbInstanceArnMap;
      this._externalId = value.externalId;
      this._timeoutMinutes = value.timeoutMinutes;
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

  // db_instance_arn_map - computed: false, optional: false, required: true
  private _dbInstanceArnMap?: { [key: string]: string }; 
  public get dbInstanceArnMap() {
    return this.getStringMapAttribute('db_instance_arn_map');
  }
  public set dbInstanceArnMap(value: { [key: string]: string }) {
    this._dbInstanceArnMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceArnMapInput() {
    return this._dbInstanceArnMap;
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
}

export class ArcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#db_instance_arn_map ArcregionswitchPlan#db_instance_arn_map}
  */
  readonly dbInstanceArnMap: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

export function arcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    db_instance_arn_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dbInstanceArnMap),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function arcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_instance_arn_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dbInstanceArnMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRole = this._crossAccountRole;
    }
    if (this._dbInstanceArnMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbInstanceArnMap = this._dbInstanceArnMap;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRole = undefined;
      this._dbInstanceArnMap = undefined;
      this._externalId = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRole = value.crossAccountRole;
      this._dbInstanceArnMap = value.dbInstanceArnMap;
      this._externalId = value.externalId;
      this._timeoutMinutes = value.timeoutMinutes;
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

  // db_instance_arn_map - computed: false, optional: false, required: true
  private _dbInstanceArnMap?: { [key: string]: string }; 
  public get dbInstanceArnMap() {
    return this.getStringMapAttribute('db_instance_arn_map');
  }
  public set dbInstanceArnMap(value: { [key: string]: string }) {
    this._dbInstanceArnMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceArnMapInput() {
    return this._dbInstanceArnMap;
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
}

export class ArcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#arn ArcregionswitchPlan#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
}

export function arcregionswitchPlanWorkflowStepRegionSwitchPlanConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function arcregionswitchPlanWorkflowStepRegionSwitchPlanConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfig | cdktn.IResolvable): any {
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
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._crossAccountRole = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#record_set_identifier ArcregionswitchPlan#record_set_identifier}
  */
  readonly recordSetIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region ArcregionswitchPlan#region}
  */
  readonly region: string;
}

export function arcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetToTerraform(struct?: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    record_set_identifier: cdktn.stringToTerraform(struct!.recordSetIdentifier),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function arcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    record_set_identifier: {
      value: cdktn.stringToHclTerraform(struct!.recordSetIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSet | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSet | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordSetIdentifier = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSet[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetOutputReference {
    return new ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#cross_account_role ArcregionswitchPlan#cross_account_role}
  */
  readonly crossAccountRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#external_id ArcregionswitchPlan#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#hosted_zone_id ArcregionswitchPlan#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#record_name ArcregionswitchPlan#record_name}
  */
  readonly recordName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#timeout_minutes ArcregionswitchPlan#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * record_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#record_set ArcregionswitchPlan#record_set}
  */
  readonly recordSet?: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSet[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepRoute53HealthCheckConfigToTerraform(struct?: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role: cdktn.stringToTerraform(struct!.crossAccountRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    hosted_zone_id: cdktn.stringToTerraform(struct!.hostedZoneId),
    record_name: cdktn.stringToTerraform(struct!.recordName),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
    record_set: cdktn.listMapper(arcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetToTerraform, true)(struct!.recordSet),
  }
}


export function arcregionswitchPlanWorkflowStepRoute53HealthCheckConfigToHclTerraform(struct?: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosted_zone_id: {
      value: cdktn.stringToHclTerraform(struct!.hostedZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_name: {
      value: cdktn.stringToHclTerraform(struct!.recordName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_set: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetToHclTerraform, true)(struct!.recordSet),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfig | cdktn.IResolvable | undefined) {
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
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putRecordSet(value: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigRecordSet[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfig[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigOutputReference {
    return new ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflowStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#description ArcregionswitchPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#execution_block_type ArcregionswitchPlan#execution_block_type}
  */
  readonly executionBlockType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#name ArcregionswitchPlan#name}
  */
  readonly name: string;
  /**
  * arc_routing_control_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#arc_routing_control_config ArcregionswitchPlan#arc_routing_control_config}
  */
  readonly arcRoutingControlConfig?: ArcregionswitchPlanWorkflowStepArcRoutingControlConfig[] | cdktn.IResolvable;
  /**
  * aurora_provisioned_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#aurora_provisioned_scaling_config ArcregionswitchPlan#aurora_provisioned_scaling_config}
  */
  readonly auroraProvisionedScalingConfig?: ArcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfig[] | cdktn.IResolvable;
  /**
  * aurora_serverless_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#aurora_serverless_scaling_config ArcregionswitchPlan#aurora_serverless_scaling_config}
  */
  readonly auroraServerlessScalingConfig?: ArcregionswitchPlanWorkflowStepAuroraServerlessScalingConfig[] | cdktn.IResolvable;
  /**
  * custom_action_lambda_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#custom_action_lambda_config ArcregionswitchPlan#custom_action_lambda_config}
  */
  readonly customActionLambdaConfig?: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfig[] | cdktn.IResolvable;
  /**
  * document_db_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#document_db_config ArcregionswitchPlan#document_db_config}
  */
  readonly documentDbConfig?: ArcregionswitchPlanWorkflowStepDocumentDbConfig[] | cdktn.IResolvable;
  /**
  * ec2_asg_capacity_increase_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ec2_asg_capacity_increase_config ArcregionswitchPlan#ec2_asg_capacity_increase_config}
  */
  readonly ec2AsgCapacityIncreaseConfig?: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfig[] | cdktn.IResolvable;
  /**
  * ecs_capacity_increase_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#ecs_capacity_increase_config ArcregionswitchPlan#ecs_capacity_increase_config}
  */
  readonly ecsCapacityIncreaseConfig?: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfig[] | cdktn.IResolvable;
  /**
  * eks_resource_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#eks_resource_scaling_config ArcregionswitchPlan#eks_resource_scaling_config}
  */
  readonly eksResourceScalingConfig?: ArcregionswitchPlanWorkflowStepEksResourceScalingConfig[] | cdktn.IResolvable;
  /**
  * execution_approval_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#execution_approval_config ArcregionswitchPlan#execution_approval_config}
  */
  readonly executionApprovalConfig?: ArcregionswitchPlanWorkflowStepExecutionApprovalConfig[] | cdktn.IResolvable;
  /**
  * global_aurora_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#global_aurora_config ArcregionswitchPlan#global_aurora_config}
  */
  readonly globalAuroraConfig?: ArcregionswitchPlanWorkflowStepGlobalAuroraConfig[] | cdktn.IResolvable;
  /**
  * lambda_event_source_mapping_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#lambda_event_source_mapping_config ArcregionswitchPlan#lambda_event_source_mapping_config}
  */
  readonly lambdaEventSourceMappingConfig?: ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfig[] | cdktn.IResolvable;
  /**
  * neptune_global_database_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#neptune_global_database_config ArcregionswitchPlan#neptune_global_database_config}
  */
  readonly neptuneGlobalDatabaseConfig?: ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfig[] | cdktn.IResolvable;
  /**
  * parallel_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#parallel_config ArcregionswitchPlan#parallel_config}
  */
  readonly parallelConfig?: ArcregionswitchPlanWorkflowStepParallelConfig[] | cdktn.IResolvable;
  /**
  * rds_create_cross_region_read_replica_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#rds_create_cross_region_read_replica_config ArcregionswitchPlan#rds_create_cross_region_read_replica_config}
  */
  readonly rdsCreateCrossRegionReadReplicaConfig?: ArcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfig[] | cdktn.IResolvable;
  /**
  * rds_promote_read_replica_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#rds_promote_read_replica_config ArcregionswitchPlan#rds_promote_read_replica_config}
  */
  readonly rdsPromoteReadReplicaConfig?: ArcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfig[] | cdktn.IResolvable;
  /**
  * region_switch_plan_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#region_switch_plan_config ArcregionswitchPlan#region_switch_plan_config}
  */
  readonly regionSwitchPlanConfig?: ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfig[] | cdktn.IResolvable;
  /**
  * route53_health_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#route53_health_check_config ArcregionswitchPlan#route53_health_check_config}
  */
  readonly route53HealthCheckConfig?: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfig[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowStepToTerraform(struct?: ArcregionswitchPlanWorkflowStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    execution_block_type: cdktn.stringToTerraform(struct!.executionBlockType),
    name: cdktn.stringToTerraform(struct!.name),
    arc_routing_control_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepArcRoutingControlConfigToTerraform, true)(struct!.arcRoutingControlConfig),
    aurora_provisioned_scaling_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfigToTerraform, true)(struct!.auroraProvisionedScalingConfig),
    aurora_serverless_scaling_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepAuroraServerlessScalingConfigToTerraform, true)(struct!.auroraServerlessScalingConfig),
    custom_action_lambda_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepCustomActionLambdaConfigToTerraform, true)(struct!.customActionLambdaConfig),
    document_db_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepDocumentDbConfigToTerraform, true)(struct!.documentDbConfig),
    ec2_asg_capacity_increase_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigToTerraform, true)(struct!.ec2AsgCapacityIncreaseConfig),
    ecs_capacity_increase_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigToTerraform, true)(struct!.ecsCapacityIncreaseConfig),
    eks_resource_scaling_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepEksResourceScalingConfigToTerraform, true)(struct!.eksResourceScalingConfig),
    execution_approval_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepExecutionApprovalConfigToTerraform, true)(struct!.executionApprovalConfig),
    global_aurora_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepGlobalAuroraConfigToTerraform, true)(struct!.globalAuroraConfig),
    lambda_event_source_mapping_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigToTerraform, true)(struct!.lambdaEventSourceMappingConfig),
    neptune_global_database_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigToTerraform, true)(struct!.neptuneGlobalDatabaseConfig),
    parallel_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepParallelConfigToTerraform, true)(struct!.parallelConfig),
    rds_create_cross_region_read_replica_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfigToTerraform, true)(struct!.rdsCreateCrossRegionReadReplicaConfig),
    rds_promote_read_replica_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfigToTerraform, true)(struct!.rdsPromoteReadReplicaConfig),
    region_switch_plan_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepRegionSwitchPlanConfigToTerraform, true)(struct!.regionSwitchPlanConfig),
    route53_health_check_config: cdktn.listMapper(arcregionswitchPlanWorkflowStepRoute53HealthCheckConfigToTerraform, true)(struct!.route53HealthCheckConfig),
  }
}


export function arcregionswitchPlanWorkflowStepToHclTerraform(struct?: ArcregionswitchPlanWorkflowStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_block_type: {
      value: cdktn.stringToHclTerraform(struct!.executionBlockType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arc_routing_control_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepArcRoutingControlConfigToHclTerraform, true)(struct!.arcRoutingControlConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepArcRoutingControlConfigList",
    },
    aurora_provisioned_scaling_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfigToHclTerraform, true)(struct!.auroraProvisionedScalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfigList",
    },
    aurora_serverless_scaling_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepAuroraServerlessScalingConfigToHclTerraform, true)(struct!.auroraServerlessScalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepAuroraServerlessScalingConfigList",
    },
    custom_action_lambda_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepCustomActionLambdaConfigToHclTerraform, true)(struct!.customActionLambdaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigList",
    },
    document_db_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepDocumentDbConfigToHclTerraform, true)(struct!.documentDbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepDocumentDbConfigList",
    },
    ec2_asg_capacity_increase_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigToHclTerraform, true)(struct!.ec2AsgCapacityIncreaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfigList",
    },
    ecs_capacity_increase_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigToHclTerraform, true)(struct!.ecsCapacityIncreaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfigList",
    },
    eks_resource_scaling_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepEksResourceScalingConfigToHclTerraform, true)(struct!.eksResourceScalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepEksResourceScalingConfigList",
    },
    execution_approval_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepExecutionApprovalConfigToHclTerraform, true)(struct!.executionApprovalConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepExecutionApprovalConfigList",
    },
    global_aurora_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepGlobalAuroraConfigToHclTerraform, true)(struct!.globalAuroraConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepGlobalAuroraConfigList",
    },
    lambda_event_source_mapping_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigToHclTerraform, true)(struct!.lambdaEventSourceMappingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigList",
    },
    neptune_global_database_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigToHclTerraform, true)(struct!.neptuneGlobalDatabaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigList",
    },
    parallel_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepParallelConfigToHclTerraform, true)(struct!.parallelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepParallelConfigList",
    },
    rds_create_cross_region_read_replica_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfigToHclTerraform, true)(struct!.rdsCreateCrossRegionReadReplicaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfigList",
    },
    rds_promote_read_replica_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfigToHclTerraform, true)(struct!.rdsPromoteReadReplicaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfigList",
    },
    region_switch_plan_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepRegionSwitchPlanConfigToHclTerraform, true)(struct!.regionSwitchPlanConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfigList",
    },
    route53_health_check_config: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepRoute53HealthCheckConfigToHclTerraform, true)(struct!.route53HealthCheckConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowStepOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflowStep | cdktn.IResolvable | undefined {
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
    if (this._auroraProvisionedScalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auroraProvisionedScalingConfig = this._auroraProvisionedScalingConfig?.internalValue;
    }
    if (this._auroraServerlessScalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auroraServerlessScalingConfig = this._auroraServerlessScalingConfig?.internalValue;
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
    if (this._lambdaEventSourceMappingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaEventSourceMappingConfig = this._lambdaEventSourceMappingConfig?.internalValue;
    }
    if (this._neptuneGlobalDatabaseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neptuneGlobalDatabaseConfig = this._neptuneGlobalDatabaseConfig?.internalValue;
    }
    if (this._parallelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelConfig = this._parallelConfig?.internalValue;
    }
    if (this._rdsCreateCrossRegionReadReplicaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsCreateCrossRegionReadReplicaConfig = this._rdsCreateCrossRegionReadReplicaConfig?.internalValue;
    }
    if (this._rdsPromoteReadReplicaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsPromoteReadReplicaConfig = this._rdsPromoteReadReplicaConfig?.internalValue;
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

  public set internalValue(value: ArcregionswitchPlanWorkflowStep | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._executionBlockType = undefined;
      this._name = undefined;
      this._arcRoutingControlConfig.internalValue = undefined;
      this._auroraProvisionedScalingConfig.internalValue = undefined;
      this._auroraServerlessScalingConfig.internalValue = undefined;
      this._customActionLambdaConfig.internalValue = undefined;
      this._documentDbConfig.internalValue = undefined;
      this._ec2AsgCapacityIncreaseConfig.internalValue = undefined;
      this._ecsCapacityIncreaseConfig.internalValue = undefined;
      this._eksResourceScalingConfig.internalValue = undefined;
      this._executionApprovalConfig.internalValue = undefined;
      this._globalAuroraConfig.internalValue = undefined;
      this._lambdaEventSourceMappingConfig.internalValue = undefined;
      this._neptuneGlobalDatabaseConfig.internalValue = undefined;
      this._parallelConfig.internalValue = undefined;
      this._rdsCreateCrossRegionReadReplicaConfig.internalValue = undefined;
      this._rdsPromoteReadReplicaConfig.internalValue = undefined;
      this._regionSwitchPlanConfig.internalValue = undefined;
      this._route53HealthCheckConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
      this._auroraProvisionedScalingConfig.internalValue = value.auroraProvisionedScalingConfig;
      this._auroraServerlessScalingConfig.internalValue = value.auroraServerlessScalingConfig;
      this._customActionLambdaConfig.internalValue = value.customActionLambdaConfig;
      this._documentDbConfig.internalValue = value.documentDbConfig;
      this._ec2AsgCapacityIncreaseConfig.internalValue = value.ec2AsgCapacityIncreaseConfig;
      this._ecsCapacityIncreaseConfig.internalValue = value.ecsCapacityIncreaseConfig;
      this._eksResourceScalingConfig.internalValue = value.eksResourceScalingConfig;
      this._executionApprovalConfig.internalValue = value.executionApprovalConfig;
      this._globalAuroraConfig.internalValue = value.globalAuroraConfig;
      this._lambdaEventSourceMappingConfig.internalValue = value.lambdaEventSourceMappingConfig;
      this._neptuneGlobalDatabaseConfig.internalValue = value.neptuneGlobalDatabaseConfig;
      this._parallelConfig.internalValue = value.parallelConfig;
      this._rdsCreateCrossRegionReadReplicaConfig.internalValue = value.rdsCreateCrossRegionReadReplicaConfig;
      this._rdsPromoteReadReplicaConfig.internalValue = value.rdsPromoteReadReplicaConfig;
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
  public putArcRoutingControlConfig(value: ArcregionswitchPlanWorkflowStepArcRoutingControlConfig[] | cdktn.IResolvable) {
    this._arcRoutingControlConfig.internalValue = value;
  }
  public resetArcRoutingControlConfig() {
    this._arcRoutingControlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arcRoutingControlConfigInput() {
    return this._arcRoutingControlConfig.internalValue;
  }

  // aurora_provisioned_scaling_config - computed: false, optional: true, required: false
  private _auroraProvisionedScalingConfig = new ArcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfigList(this, "aurora_provisioned_scaling_config", false);
  public get auroraProvisionedScalingConfig() {
    return this._auroraProvisionedScalingConfig;
  }
  public putAuroraProvisionedScalingConfig(value: ArcregionswitchPlanWorkflowStepAuroraProvisionedScalingConfig[] | cdktn.IResolvable) {
    this._auroraProvisionedScalingConfig.internalValue = value;
  }
  public resetAuroraProvisionedScalingConfig() {
    this._auroraProvisionedScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraProvisionedScalingConfigInput() {
    return this._auroraProvisionedScalingConfig.internalValue;
  }

  // aurora_serverless_scaling_config - computed: false, optional: true, required: false
  private _auroraServerlessScalingConfig = new ArcregionswitchPlanWorkflowStepAuroraServerlessScalingConfigList(this, "aurora_serverless_scaling_config", false);
  public get auroraServerlessScalingConfig() {
    return this._auroraServerlessScalingConfig;
  }
  public putAuroraServerlessScalingConfig(value: ArcregionswitchPlanWorkflowStepAuroraServerlessScalingConfig[] | cdktn.IResolvable) {
    this._auroraServerlessScalingConfig.internalValue = value;
  }
  public resetAuroraServerlessScalingConfig() {
    this._auroraServerlessScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraServerlessScalingConfigInput() {
    return this._auroraServerlessScalingConfig.internalValue;
  }

  // custom_action_lambda_config - computed: false, optional: true, required: false
  private _customActionLambdaConfig = new ArcregionswitchPlanWorkflowStepCustomActionLambdaConfigList(this, "custom_action_lambda_config", false);
  public get customActionLambdaConfig() {
    return this._customActionLambdaConfig;
  }
  public putCustomActionLambdaConfig(value: ArcregionswitchPlanWorkflowStepCustomActionLambdaConfig[] | cdktn.IResolvable) {
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
  public putDocumentDbConfig(value: ArcregionswitchPlanWorkflowStepDocumentDbConfig[] | cdktn.IResolvable) {
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
  public putEc2AsgCapacityIncreaseConfig(value: ArcregionswitchPlanWorkflowStepEc2AsgCapacityIncreaseConfig[] | cdktn.IResolvable) {
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
  public putEcsCapacityIncreaseConfig(value: ArcregionswitchPlanWorkflowStepEcsCapacityIncreaseConfig[] | cdktn.IResolvable) {
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
  public putEksResourceScalingConfig(value: ArcregionswitchPlanWorkflowStepEksResourceScalingConfig[] | cdktn.IResolvable) {
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
  public putExecutionApprovalConfig(value: ArcregionswitchPlanWorkflowStepExecutionApprovalConfig[] | cdktn.IResolvable) {
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
  public putGlobalAuroraConfig(value: ArcregionswitchPlanWorkflowStepGlobalAuroraConfig[] | cdktn.IResolvable) {
    this._globalAuroraConfig.internalValue = value;
  }
  public resetGlobalAuroraConfig() {
    this._globalAuroraConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalAuroraConfigInput() {
    return this._globalAuroraConfig.internalValue;
  }

  // lambda_event_source_mapping_config - computed: false, optional: true, required: false
  private _lambdaEventSourceMappingConfig = new ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfigList(this, "lambda_event_source_mapping_config", false);
  public get lambdaEventSourceMappingConfig() {
    return this._lambdaEventSourceMappingConfig;
  }
  public putLambdaEventSourceMappingConfig(value: ArcregionswitchPlanWorkflowStepLambdaEventSourceMappingConfig[] | cdktn.IResolvable) {
    this._lambdaEventSourceMappingConfig.internalValue = value;
  }
  public resetLambdaEventSourceMappingConfig() {
    this._lambdaEventSourceMappingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaEventSourceMappingConfigInput() {
    return this._lambdaEventSourceMappingConfig.internalValue;
  }

  // neptune_global_database_config - computed: false, optional: true, required: false
  private _neptuneGlobalDatabaseConfig = new ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfigList(this, "neptune_global_database_config", false);
  public get neptuneGlobalDatabaseConfig() {
    return this._neptuneGlobalDatabaseConfig;
  }
  public putNeptuneGlobalDatabaseConfig(value: ArcregionswitchPlanWorkflowStepNeptuneGlobalDatabaseConfig[] | cdktn.IResolvable) {
    this._neptuneGlobalDatabaseConfig.internalValue = value;
  }
  public resetNeptuneGlobalDatabaseConfig() {
    this._neptuneGlobalDatabaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neptuneGlobalDatabaseConfigInput() {
    return this._neptuneGlobalDatabaseConfig.internalValue;
  }

  // parallel_config - computed: false, optional: true, required: false
  private _parallelConfig = new ArcregionswitchPlanWorkflowStepParallelConfigList(this, "parallel_config", false);
  public get parallelConfig() {
    return this._parallelConfig;
  }
  public putParallelConfig(value: ArcregionswitchPlanWorkflowStepParallelConfig[] | cdktn.IResolvable) {
    this._parallelConfig.internalValue = value;
  }
  public resetParallelConfig() {
    this._parallelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelConfigInput() {
    return this._parallelConfig.internalValue;
  }

  // rds_create_cross_region_read_replica_config - computed: false, optional: true, required: false
  private _rdsCreateCrossRegionReadReplicaConfig = new ArcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfigList(this, "rds_create_cross_region_read_replica_config", false);
  public get rdsCreateCrossRegionReadReplicaConfig() {
    return this._rdsCreateCrossRegionReadReplicaConfig;
  }
  public putRdsCreateCrossRegionReadReplicaConfig(value: ArcregionswitchPlanWorkflowStepRdsCreateCrossRegionReadReplicaConfig[] | cdktn.IResolvable) {
    this._rdsCreateCrossRegionReadReplicaConfig.internalValue = value;
  }
  public resetRdsCreateCrossRegionReadReplicaConfig() {
    this._rdsCreateCrossRegionReadReplicaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsCreateCrossRegionReadReplicaConfigInput() {
    return this._rdsCreateCrossRegionReadReplicaConfig.internalValue;
  }

  // rds_promote_read_replica_config - computed: false, optional: true, required: false
  private _rdsPromoteReadReplicaConfig = new ArcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfigList(this, "rds_promote_read_replica_config", false);
  public get rdsPromoteReadReplicaConfig() {
    return this._rdsPromoteReadReplicaConfig;
  }
  public putRdsPromoteReadReplicaConfig(value: ArcregionswitchPlanWorkflowStepRdsPromoteReadReplicaConfig[] | cdktn.IResolvable) {
    this._rdsPromoteReadReplicaConfig.internalValue = value;
  }
  public resetRdsPromoteReadReplicaConfig() {
    this._rdsPromoteReadReplicaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsPromoteReadReplicaConfigInput() {
    return this._rdsPromoteReadReplicaConfig.internalValue;
  }

  // region_switch_plan_config - computed: false, optional: true, required: false
  private _regionSwitchPlanConfig = new ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfigList(this, "region_switch_plan_config", false);
  public get regionSwitchPlanConfig() {
    return this._regionSwitchPlanConfig;
  }
  public putRegionSwitchPlanConfig(value: ArcregionswitchPlanWorkflowStepRegionSwitchPlanConfig[] | cdktn.IResolvable) {
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
  public putRoute53HealthCheckConfig(value: ArcregionswitchPlanWorkflowStepRoute53HealthCheckConfig[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowStepList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflowStep[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowStepOutputReference {
    return new ArcregionswitchPlanWorkflowStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArcregionswitchPlanWorkflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#workflow_description ArcregionswitchPlan#workflow_description}
  */
  readonly workflowDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#workflow_target_action ArcregionswitchPlan#workflow_target_action}
  */
  readonly workflowTargetAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#workflow_target_region ArcregionswitchPlan#workflow_target_region}
  */
  readonly workflowTargetRegion?: string;
  /**
  * step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#step ArcregionswitchPlan#step}
  */
  readonly step?: ArcregionswitchPlanWorkflowStep[] | cdktn.IResolvable;
}

export function arcregionswitchPlanWorkflowToTerraform(struct?: ArcregionswitchPlanWorkflow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workflow_description: cdktn.stringToTerraform(struct!.workflowDescription),
    workflow_target_action: cdktn.stringToTerraform(struct!.workflowTargetAction),
    workflow_target_region: cdktn.stringToTerraform(struct!.workflowTargetRegion),
    step: cdktn.listMapper(arcregionswitchPlanWorkflowStepToTerraform, true)(struct!.step),
  }
}


export function arcregionswitchPlanWorkflowToHclTerraform(struct?: ArcregionswitchPlanWorkflow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workflow_description: {
      value: cdktn.stringToHclTerraform(struct!.workflowDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_target_action: {
      value: cdktn.stringToHclTerraform(struct!.workflowTargetAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_target_region: {
      value: cdktn.stringToHclTerraform(struct!.workflowTargetRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step: {
      value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowStepToHclTerraform, true)(struct!.step),
      isBlock: true,
      type: "list",
      storageClassType: "ArcregionswitchPlanWorkflowStepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArcregionswitchPlanWorkflowOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArcregionswitchPlanWorkflow | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ArcregionswitchPlanWorkflow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workflowDescription = undefined;
      this._workflowTargetAction = undefined;
      this._workflowTargetRegion = undefined;
      this._step.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  public putStep(value: ArcregionswitchPlanWorkflowStep[] | cdktn.IResolvable) {
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

export class ArcregionswitchPlanWorkflowList extends cdktn.ComplexList {
  public internalValue? : ArcregionswitchPlanWorkflow[] | cdktn.IResolvable

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
  public get(index: number): ArcregionswitchPlanWorkflowOutputReference {
    return new ArcregionswitchPlanWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan aws_arcregionswitch_plan}
*/
export class ArcregionswitchPlan extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_arcregionswitch_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ArcregionswitchPlan resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArcregionswitchPlan to import
  * @param importFromId The id of the existing ArcregionswitchPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArcregionswitchPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_arcregionswitch_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/arcregionswitch_plan aws_arcregionswitch_plan} Resource
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
        providerVersion: '6.61.0',
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
    this._reportConfiguration.internalValue = config.reportConfiguration;
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
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // associated_alarms - computed: false, optional: true, required: false
  private _associatedAlarms = new ArcregionswitchPlanAssociatedAlarmsList(this, "associated_alarms", true);
  public get associatedAlarms() {
    return this._associatedAlarms;
  }
  public putAssociatedAlarms(value: ArcregionswitchPlanAssociatedAlarms[] | cdktn.IResolvable) {
    this._associatedAlarms.internalValue = value;
  }
  public resetAssociatedAlarms() {
    this._associatedAlarms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedAlarmsInput() {
    return this._associatedAlarms.internalValue;
  }

  // report_configuration - computed: false, optional: true, required: false
  private _reportConfiguration = new ArcregionswitchPlanReportConfigurationList(this, "report_configuration", false);
  public get reportConfiguration() {
    return this._reportConfiguration;
  }
  public putReportConfiguration(value: ArcregionswitchPlanReportConfiguration[] | cdktn.IResolvable) {
    this._reportConfiguration.internalValue = value;
  }
  public resetReportConfiguration() {
    this._reportConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportConfigurationInput() {
    return this._reportConfiguration.internalValue;
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
  public putTriggers(value: ArcregionswitchPlanTriggers[] | cdktn.IResolvable) {
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
  public putWorkflow(value: ArcregionswitchPlanWorkflow[] | cdktn.IResolvable) {
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
      description: cdktn.stringToTerraform(this._description),
      execution_role: cdktn.stringToTerraform(this._executionRole),
      name: cdktn.stringToTerraform(this._name),
      primary_region: cdktn.stringToTerraform(this._primaryRegion),
      recovery_approach: cdktn.stringToTerraform(this._recoveryApproach),
      recovery_time_objective_minutes: cdktn.numberToTerraform(this._recoveryTimeObjectiveMinutes),
      region: cdktn.stringToTerraform(this._region),
      regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._regions),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      associated_alarms: cdktn.listMapper(arcregionswitchPlanAssociatedAlarmsToTerraform, true)(this._associatedAlarms.internalValue),
      report_configuration: cdktn.listMapper(arcregionswitchPlanReportConfigurationToTerraform, true)(this._reportConfiguration.internalValue),
      timeouts: arcregionswitchPlanTimeoutsToTerraform(this._timeouts.internalValue),
      triggers: cdktn.listMapper(arcregionswitchPlanTriggersToTerraform, true)(this._triggers.internalValue),
      workflow: cdktn.listMapper(arcregionswitchPlanWorkflowToTerraform, true)(this._workflow.internalValue),
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
      execution_role: {
        value: cdktn.stringToHclTerraform(this._executionRole),
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
      primary_region: {
        value: cdktn.stringToHclTerraform(this._primaryRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_approach: {
        value: cdktn.stringToHclTerraform(this._recoveryApproach),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_time_objective_minutes: {
        value: cdktn.numberToHclTerraform(this._recoveryTimeObjectiveMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      associated_alarms: {
        value: cdktn.listMapperHcl(arcregionswitchPlanAssociatedAlarmsToHclTerraform, true)(this._associatedAlarms.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ArcregionswitchPlanAssociatedAlarmsList",
      },
      report_configuration: {
        value: cdktn.listMapperHcl(arcregionswitchPlanReportConfigurationToHclTerraform, true)(this._reportConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArcregionswitchPlanReportConfigurationList",
      },
      timeouts: {
        value: arcregionswitchPlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArcregionswitchPlanTimeouts",
      },
      triggers: {
        value: cdktn.listMapperHcl(arcregionswitchPlanTriggersToHclTerraform, true)(this._triggers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArcregionswitchPlanTriggersList",
      },
      workflow: {
        value: cdktn.listMapperHcl(arcregionswitchPlanWorkflowToHclTerraform, true)(this._workflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArcregionswitchPlanWorkflowList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
