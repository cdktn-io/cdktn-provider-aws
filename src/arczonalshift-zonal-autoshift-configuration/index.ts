/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/arczonalshift_zonal_autoshift_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ArczonalshiftZonalAutoshiftConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * List of time windows during which practice runs are allowed, in the format `Day:HH:MM-Day:HH:MM` (e.g., `Mon:09:00-Mon:17:00`). Cannot be used together with `blocked_windows`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/arczonalshift_zonal_autoshift_configuration#allowed_windows ArczonalshiftZonalAutoshiftConfiguration#allowed_windows}
  */
  readonly allowedWindows?: string[];
  /**
  * List of dates when practice runs should not be started, in the format `YYYY-MM-DD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_dates ArczonalshiftZonalAutoshiftConfiguration#blocked_dates}
  */
  readonly blockedDates?: string[];
  /**
  * List of time windows during which practice runs should not be started, in the format `Day:HH:MM-Day:HH:MM` (e.g., `Mon:00:00-Mon:08:00`). Cannot be used together with `allowed_windows`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocked_windows ArczonalshiftZonalAutoshiftConfiguration#blocked_windows}
  */
  readonly blockedWindows?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/arczonalshift_zonal_autoshift_configuration#region ArczonalshiftZonalAutoshiftConfiguration#region}
  */
  readonly region?: string;
  /**
  * The ARN of the managed resource to configure zonal autoshift for (e.g., an Application Load Balancer). Changing this creates a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/arczonalshift_zonal_autoshift_configuration#resource_arn ArczonalshiftZonalAutoshiftConfiguration#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * The status of zonal autoshift. Valid values: `ENABLED`, `DISABLED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/arczonalshift_zonal_autoshift_configuration#zonal_autoshift_status ArczonalshiftZonalAutoshiftConfiguration#zonal_autoshift_status}
  */
  readonly zonalAutoshiftStatus: string;
  /**
  * blocking_alarms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/arczonalshift_zonal_autoshift_configuration#blocking_alarms ArczonalshiftZonalAutoshiftConfiguration#blocking_alarms}
  */
  readonly blockingAlarms?: ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms[] | cdktn.IResolvable;
  /**
  * outcome_alarms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/arczonalshift_zonal_autoshift_configuration#outcome_alarms ArczonalshiftZonalAutoshiftConfiguration#outcome_alarms}
  */
  readonly outcomeAlarms?: ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms[] | cdktn.IResolvable;
}
export interface ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms {
  /**
  * ARN of the CloudWatch alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}
  */
  readonly alarmIdentifier: string;
  /**
  * Type of control condition. Valid value: `CLOUDWATCH`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}
  */
  readonly type: string;
}

export function arczonalshiftZonalAutoshiftConfigurationBlockingAlarmsToTerraform(struct?: ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_identifier: cdktn.stringToTerraform(struct!.alarmIdentifier),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function arczonalshiftZonalAutoshiftConfigurationBlockingAlarmsToHclTerraform(struct?: ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_identifier: {
      value: cdktn.stringToHclTerraform(struct!.alarmIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmIdentifier = this._alarmIdentifier;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmIdentifier = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmIdentifier = value.alarmIdentifier;
      this._type = value.type;
    }
  }

  // alarm_identifier - computed: false, optional: false, required: true
  private _alarmIdentifier?: string; 
  public get alarmIdentifier() {
    return this.getStringAttribute('alarm_identifier');
  }
  public set alarmIdentifier(value: string) {
    this._alarmIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmIdentifierInput() {
    return this._alarmIdentifier;
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

export class ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList extends cdktn.ComplexList {
  public internalValue? : ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms[] | cdktn.IResolvable

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
  public get(index: number): ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference {
    return new ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms {
  /**
  * ARN of the CloudWatch alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/arczonalshift_zonal_autoshift_configuration#alarm_identifier ArczonalshiftZonalAutoshiftConfiguration#alarm_identifier}
  */
  readonly alarmIdentifier: string;
  /**
  * Type of control condition. Valid value: `CLOUDWATCH`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/arczonalshift_zonal_autoshift_configuration#type ArczonalshiftZonalAutoshiftConfiguration#type}
  */
  readonly type: string;
}

export function arczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsToTerraform(struct?: ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_identifier: cdktn.stringToTerraform(struct!.alarmIdentifier),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function arczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsToHclTerraform(struct?: ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_identifier: {
      value: cdktn.stringToHclTerraform(struct!.alarmIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmIdentifier = this._alarmIdentifier;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmIdentifier = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmIdentifier = value.alarmIdentifier;
      this._type = value.type;
    }
  }

  // alarm_identifier - computed: false, optional: false, required: true
  private _alarmIdentifier?: string; 
  public get alarmIdentifier() {
    return this.getStringAttribute('alarm_identifier');
  }
  public set alarmIdentifier(value: string) {
    this._alarmIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmIdentifierInput() {
    return this._alarmIdentifier;
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

export class ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList extends cdktn.ComplexList {
  public internalValue? : ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms[] | cdktn.IResolvable

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
  public get(index: number): ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference {
    return new ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/arczonalshift_zonal_autoshift_configuration aws_arczonalshift_zonal_autoshift_configuration}
*/
export class ArczonalshiftZonalAutoshiftConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_arczonalshift_zonal_autoshift_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ArczonalshiftZonalAutoshiftConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArczonalshiftZonalAutoshiftConfiguration to import
  * @param importFromId The id of the existing ArczonalshiftZonalAutoshiftConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/arczonalshift_zonal_autoshift_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArczonalshiftZonalAutoshiftConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_arczonalshift_zonal_autoshift_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/arczonalshift_zonal_autoshift_configuration aws_arczonalshift_zonal_autoshift_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArczonalshiftZonalAutoshiftConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ArczonalshiftZonalAutoshiftConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_arczonalshift_zonal_autoshift_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.54.0',
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
    this._allowedWindows = config.allowedWindows;
    this._blockedDates = config.blockedDates;
    this._blockedWindows = config.blockedWindows;
    this._region = config.region;
    this._resourceArn = config.resourceArn;
    this._zonalAutoshiftStatus = config.zonalAutoshiftStatus;
    this._blockingAlarms.internalValue = config.blockingAlarms;
    this._outcomeAlarms.internalValue = config.outcomeAlarms;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_windows - computed: false, optional: true, required: false
  private _allowedWindows?: string[]; 
  public get allowedWindows() {
    return this.getListAttribute('allowed_windows');
  }
  public set allowedWindows(value: string[]) {
    this._allowedWindows = value;
  }
  public resetAllowedWindows() {
    this._allowedWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedWindowsInput() {
    return this._allowedWindows;
  }

  // blocked_dates - computed: false, optional: true, required: false
  private _blockedDates?: string[]; 
  public get blockedDates() {
    return this.getListAttribute('blocked_dates');
  }
  public set blockedDates(value: string[]) {
    this._blockedDates = value;
  }
  public resetBlockedDates() {
    this._blockedDates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedDatesInput() {
    return this._blockedDates;
  }

  // blocked_windows - computed: false, optional: true, required: false
  private _blockedWindows?: string[]; 
  public get blockedWindows() {
    return this.getListAttribute('blocked_windows');
  }
  public set blockedWindows(value: string[]) {
    this._blockedWindows = value;
  }
  public resetBlockedWindows() {
    this._blockedWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedWindowsInput() {
    return this._blockedWindows;
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

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }

  // zonal_autoshift_status - computed: false, optional: false, required: true
  private _zonalAutoshiftStatus?: string; 
  public get zonalAutoshiftStatus() {
    return this.getStringAttribute('zonal_autoshift_status');
  }
  public set zonalAutoshiftStatus(value: string) {
    this._zonalAutoshiftStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zonalAutoshiftStatusInput() {
    return this._zonalAutoshiftStatus;
  }

  // blocking_alarms - computed: false, optional: true, required: false
  private _blockingAlarms = new ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList(this, "blocking_alarms", false);
  public get blockingAlarms() {
    return this._blockingAlarms;
  }
  public putBlockingAlarms(value: ArczonalshiftZonalAutoshiftConfigurationBlockingAlarms[] | cdktn.IResolvable) {
    this._blockingAlarms.internalValue = value;
  }
  public resetBlockingAlarms() {
    this._blockingAlarms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingAlarmsInput() {
    return this._blockingAlarms.internalValue;
  }

  // outcome_alarms - computed: false, optional: true, required: false
  private _outcomeAlarms = new ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList(this, "outcome_alarms", false);
  public get outcomeAlarms() {
    return this._outcomeAlarms;
  }
  public putOutcomeAlarms(value: ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarms[] | cdktn.IResolvable) {
    this._outcomeAlarms.internalValue = value;
  }
  public resetOutcomeAlarms() {
    this._outcomeAlarms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomeAlarmsInput() {
    return this._outcomeAlarms.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_windows: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedWindows),
      blocked_dates: cdktn.listMapper(cdktn.stringToTerraform, false)(this._blockedDates),
      blocked_windows: cdktn.listMapper(cdktn.stringToTerraform, false)(this._blockedWindows),
      region: cdktn.stringToTerraform(this._region),
      resource_arn: cdktn.stringToTerraform(this._resourceArn),
      zonal_autoshift_status: cdktn.stringToTerraform(this._zonalAutoshiftStatus),
      blocking_alarms: cdktn.listMapper(arczonalshiftZonalAutoshiftConfigurationBlockingAlarmsToTerraform, true)(this._blockingAlarms.internalValue),
      outcome_alarms: cdktn.listMapper(arczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsToTerraform, true)(this._outcomeAlarms.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_windows: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedWindows),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      blocked_dates: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._blockedDates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      blocked_windows: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._blockedWindows),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_arn: {
        value: cdktn.stringToHclTerraform(this._resourceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zonal_autoshift_status: {
        value: cdktn.stringToHclTerraform(this._zonalAutoshiftStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocking_alarms: {
        value: cdktn.listMapperHcl(arczonalshiftZonalAutoshiftConfigurationBlockingAlarmsToHclTerraform, true)(this._blockingAlarms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArczonalshiftZonalAutoshiftConfigurationBlockingAlarmsList",
      },
      outcome_alarms: {
        value: cdktn.listMapperHcl(arczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsToHclTerraform, true)(this._outcomeAlarms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArczonalshiftZonalAutoshiftConfigurationOutcomeAlarmsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
