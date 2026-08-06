/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_alarm_mute_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudwatchAlarmMuteRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_alarm_mute_rule#description CloudwatchAlarmMuteRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_alarm_mute_rule#expire_date CloudwatchAlarmMuteRule#expire_date}
  */
  readonly expireDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_alarm_mute_rule#name CloudwatchAlarmMuteRule#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_alarm_mute_rule#region CloudwatchAlarmMuteRule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_alarm_mute_rule#start_date CloudwatchAlarmMuteRule#start_date}
  */
  readonly startDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_alarm_mute_rule#tags CloudwatchAlarmMuteRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * mute_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_alarm_mute_rule#mute_targets CloudwatchAlarmMuteRule#mute_targets}
  */
  readonly muteTargets?: CloudwatchAlarmMuteRuleMuteTargets[] | cdktn.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_alarm_mute_rule#rule CloudwatchAlarmMuteRule#rule}
  */
  readonly rule?: CloudwatchAlarmMuteRuleRule[] | cdktn.IResolvable;
}
export interface CloudwatchAlarmMuteRuleMuteTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_alarm_mute_rule#alarm_names CloudwatchAlarmMuteRule#alarm_names}
  */
  readonly alarmNames: string[];
}

export function cloudwatchAlarmMuteRuleMuteTargetsToTerraform(struct?: CloudwatchAlarmMuteRuleMuteTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alarmNames),
  }
}


export function cloudwatchAlarmMuteRuleMuteTargetsToHclTerraform(struct?: CloudwatchAlarmMuteRuleMuteTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alarmNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchAlarmMuteRuleMuteTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchAlarmMuteRuleMuteTargets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmNames = this._alarmNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchAlarmMuteRuleMuteTargets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmNames = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmNames = value.alarmNames;
    }
  }

  // alarm_names - computed: false, optional: false, required: true
  private _alarmNames?: string[]; 
  public get alarmNames() {
    return cdktn.Fn.tolist(this.getListAttribute('alarm_names'));
  }
  public set alarmNames(value: string[]) {
    this._alarmNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNamesInput() {
    return this._alarmNames;
  }
}

export class CloudwatchAlarmMuteRuleMuteTargetsList extends cdktn.ComplexList {
  public internalValue? : CloudwatchAlarmMuteRuleMuteTargets[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchAlarmMuteRuleMuteTargetsOutputReference {
    return new CloudwatchAlarmMuteRuleMuteTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchAlarmMuteRuleRuleSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_alarm_mute_rule#duration CloudwatchAlarmMuteRule#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_alarm_mute_rule#expression CloudwatchAlarmMuteRule#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_alarm_mute_rule#timezone CloudwatchAlarmMuteRule#timezone}
  */
  readonly timezone?: string;
}

export function cloudwatchAlarmMuteRuleRuleScheduleToTerraform(struct?: CloudwatchAlarmMuteRuleRuleSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: cdktn.stringToTerraform(struct!.duration),
    expression: cdktn.stringToTerraform(struct!.expression),
    timezone: cdktn.stringToTerraform(struct!.timezone),
  }
}


export function cloudwatchAlarmMuteRuleRuleScheduleToHclTerraform(struct?: CloudwatchAlarmMuteRuleRuleSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: cdktn.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktn.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchAlarmMuteRuleRuleScheduleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchAlarmMuteRuleRuleSchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchAlarmMuteRuleRuleSchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._expression = undefined;
      this._timezone = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._expression = value.expression;
      this._timezone = value.timezone;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}

export class CloudwatchAlarmMuteRuleRuleScheduleList extends cdktn.ComplexList {
  public internalValue? : CloudwatchAlarmMuteRuleRuleSchedule[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchAlarmMuteRuleRuleScheduleOutputReference {
    return new CloudwatchAlarmMuteRuleRuleScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchAlarmMuteRuleRule {
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_alarm_mute_rule#schedule CloudwatchAlarmMuteRule#schedule}
  */
  readonly schedule?: CloudwatchAlarmMuteRuleRuleSchedule[] | cdktn.IResolvable;
}

export function cloudwatchAlarmMuteRuleRuleToTerraform(struct?: CloudwatchAlarmMuteRuleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schedule: cdktn.listMapper(cloudwatchAlarmMuteRuleRuleScheduleToTerraform, true)(struct!.schedule),
  }
}


export function cloudwatchAlarmMuteRuleRuleToHclTerraform(struct?: CloudwatchAlarmMuteRuleRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schedule: {
      value: cdktn.listMapperHcl(cloudwatchAlarmMuteRuleRuleScheduleToHclTerraform, true)(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchAlarmMuteRuleRuleScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchAlarmMuteRuleRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchAlarmMuteRuleRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchAlarmMuteRuleRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schedule.internalValue = value.schedule;
    }
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new CloudwatchAlarmMuteRuleRuleScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: CloudwatchAlarmMuteRuleRuleSchedule[] | cdktn.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}

export class CloudwatchAlarmMuteRuleRuleList extends cdktn.ComplexList {
  public internalValue? : CloudwatchAlarmMuteRuleRule[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchAlarmMuteRuleRuleOutputReference {
    return new CloudwatchAlarmMuteRuleRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_alarm_mute_rule aws_cloudwatch_alarm_mute_rule}
*/
export class CloudwatchAlarmMuteRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_alarm_mute_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudwatchAlarmMuteRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchAlarmMuteRule to import
  * @param importFromId The id of the existing CloudwatchAlarmMuteRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_alarm_mute_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchAlarmMuteRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_alarm_mute_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_alarm_mute_rule aws_cloudwatch_alarm_mute_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchAlarmMuteRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchAlarmMuteRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_alarm_mute_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.58.0',
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
    this._expireDate = config.expireDate;
    this._name = config.name;
    this._region = config.region;
    this._startDate = config.startDate;
    this._tags = config.tags;
    this._muteTargets.internalValue = config.muteTargets;
    this._rule.internalValue = config.rule;
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

  // expire_date - computed: false, optional: true, required: false
  private _expireDate?: string; 
  public get expireDate() {
    return this.getStringAttribute('expire_date');
  }
  public set expireDate(value: string) {
    this._expireDate = value;
  }
  public resetExpireDate() {
    this._expireDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireDateInput() {
    return this._expireDate;
  }

  // last_updated_timestamp - computed: true, optional: false, required: false
  public get lastUpdatedTimestamp() {
    return this.getStringAttribute('last_updated_timestamp');
  }

  // mute_type - computed: true, optional: false, required: false
  public get muteType() {
    return this.getStringAttribute('mute_type');
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

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // mute_targets - computed: false, optional: true, required: false
  private _muteTargets = new CloudwatchAlarmMuteRuleMuteTargetsList(this, "mute_targets", false);
  public get muteTargets() {
    return this._muteTargets;
  }
  public putMuteTargets(value: CloudwatchAlarmMuteRuleMuteTargets[] | cdktn.IResolvable) {
    this._muteTargets.internalValue = value;
  }
  public resetMuteTargets() {
    this._muteTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muteTargetsInput() {
    return this._muteTargets.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new CloudwatchAlarmMuteRuleRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: CloudwatchAlarmMuteRuleRule[] | cdktn.IResolvable) {
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
      expire_date: cdktn.stringToTerraform(this._expireDate),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      start_date: cdktn.stringToTerraform(this._startDate),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      mute_targets: cdktn.listMapper(cloudwatchAlarmMuteRuleMuteTargetsToTerraform, true)(this._muteTargets.internalValue),
      rule: cdktn.listMapper(cloudwatchAlarmMuteRuleRuleToTerraform, true)(this._rule.internalValue),
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
      expire_date: {
        value: cdktn.stringToHclTerraform(this._expireDate),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_date: {
        value: cdktn.stringToHclTerraform(this._startDate),
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
      mute_targets: {
        value: cdktn.listMapperHcl(cloudwatchAlarmMuteRuleMuteTargetsToHclTerraform, true)(this._muteTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchAlarmMuteRuleMuteTargetsList",
      },
      rule: {
        value: cdktn.listMapperHcl(cloudwatchAlarmMuteRuleRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchAlarmMuteRuleRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
