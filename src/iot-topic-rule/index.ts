/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotTopicRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#description IotTopicRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#enabled IotTopicRule#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#id IotTopicRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#name IotTopicRule#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#region IotTopicRule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#sql IotTopicRule#sql}
  */
  readonly sql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#sql_version IotTopicRule#sql_version}
  */
  readonly sqlVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#tags IotTopicRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#tags_all IotTopicRule#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * cloudwatch_alarm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}
  */
  readonly cloudwatchAlarm?: IotTopicRuleCloudwatchAlarm[] | cdktn.IResolvable;
  /**
  * cloudwatch_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#cloudwatch_logs IotTopicRule#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: IotTopicRuleCloudwatchLogs[] | cdktn.IResolvable;
  /**
  * cloudwatch_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#cloudwatch_metric IotTopicRule#cloudwatch_metric}
  */
  readonly cloudwatchMetric?: IotTopicRuleCloudwatchMetric[] | cdktn.IResolvable;
  /**
  * dynamodb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#dynamodb IotTopicRule#dynamodb}
  */
  readonly dynamodb?: IotTopicRuleDynamodb[] | cdktn.IResolvable;
  /**
  * dynamodbv2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#dynamodbv2 IotTopicRule#dynamodbv2}
  */
  readonly dynamodbv2?: IotTopicRuleDynamodbv2[] | cdktn.IResolvable;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#elasticsearch IotTopicRule#elasticsearch}
  */
  readonly elasticsearch?: IotTopicRuleElasticsearch[] | cdktn.IResolvable;
  /**
  * error_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#error_action IotTopicRule#error_action}
  */
  readonly errorAction?: IotTopicRuleErrorAction;
  /**
  * firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#firehose IotTopicRule#firehose}
  */
  readonly firehose?: IotTopicRuleFirehose[] | cdktn.IResolvable;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#http IotTopicRule#http}
  */
  readonly http?: IotTopicRuleHttp[] | cdktn.IResolvable;
  /**
  * iot_analytics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#iot_analytics IotTopicRule#iot_analytics}
  */
  readonly iotAnalytics?: IotTopicRuleIotAnalytics[] | cdktn.IResolvable;
  /**
  * iot_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#iot_events IotTopicRule#iot_events}
  */
  readonly iotEvents?: IotTopicRuleIotEvents[] | cdktn.IResolvable;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#kafka IotTopicRule#kafka}
  */
  readonly kafka?: IotTopicRuleKafka[] | cdktn.IResolvable;
  /**
  * kinesis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#kinesis IotTopicRule#kinesis}
  */
  readonly kinesis?: IotTopicRuleKinesis[] | cdktn.IResolvable;
  /**
  * lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#lambda IotTopicRule#lambda}
  */
  readonly lambda?: IotTopicRuleLambda[] | cdktn.IResolvable;
  /**
  * republish block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#republish IotTopicRule#republish}
  */
  readonly republish?: IotTopicRuleRepublish[] | cdktn.IResolvable;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#s3 IotTopicRule#s3}
  */
  readonly s3?: IotTopicRuleS3[] | cdktn.IResolvable;
  /**
  * sns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#sns IotTopicRule#sns}
  */
  readonly sns?: IotTopicRuleSns[] | cdktn.IResolvable;
  /**
  * sqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#sqs IotTopicRule#sqs}
  */
  readonly sqs?: IotTopicRuleSqs[] | cdktn.IResolvable;
  /**
  * step_functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#step_functions IotTopicRule#step_functions}
  */
  readonly stepFunctions?: IotTopicRuleStepFunctions[] | cdktn.IResolvable;
  /**
  * timestream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#timestream IotTopicRule#timestream}
  */
  readonly timestream?: IotTopicRuleTimestream[] | cdktn.IResolvable;
}
export interface IotTopicRuleCloudwatchAlarm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#alarm_name IotTopicRule#alarm_name}
  */
  readonly alarmName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#state_reason IotTopicRule#state_reason}
  */
  readonly stateReason: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#state_value IotTopicRule#state_value}
  */
  readonly stateValue: string;
}

export function iotTopicRuleCloudwatchAlarmToTerraform(struct?: IotTopicRuleCloudwatchAlarm | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_name: cdktn.stringToTerraform(struct!.alarmName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    state_reason: cdktn.stringToTerraform(struct!.stateReason),
    state_value: cdktn.stringToTerraform(struct!.stateValue),
  }
}


export function iotTopicRuleCloudwatchAlarmToHclTerraform(struct?: IotTopicRuleCloudwatchAlarm | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarm_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_reason: {
      value: cdktn.stringToHclTerraform(struct!.stateReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_value: {
      value: cdktn.stringToHclTerraform(struct!.stateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleCloudwatchAlarmOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleCloudwatchAlarm | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmName = this._alarmName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._stateReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateReason = this._stateReason;
    }
    if (this._stateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateValue = this._stateValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleCloudwatchAlarm | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmName = undefined;
      this._roleArn = undefined;
      this._stateReason = undefined;
      this._stateValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmName = value.alarmName;
      this._roleArn = value.roleArn;
      this._stateReason = value.stateReason;
      this._stateValue = value.stateValue;
    }
  }

  // alarm_name - computed: false, optional: false, required: true
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // state_reason - computed: false, optional: false, required: true
  private _stateReason?: string; 
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }
  public set stateReason(value: string) {
    this._stateReason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateReasonInput() {
    return this._stateReason;
  }

  // state_value - computed: false, optional: false, required: true
  private _stateValue?: string; 
  public get stateValue() {
    return this.getStringAttribute('state_value');
  }
  public set stateValue(value: string) {
    this._stateValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateValueInput() {
    return this._stateValue;
  }
}

export class IotTopicRuleCloudwatchAlarmList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleCloudwatchAlarm[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleCloudwatchAlarmOutputReference {
    return new IotTopicRuleCloudwatchAlarmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleCloudwatchLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#log_group_name IotTopicRule#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleCloudwatchLogsToTerraform(struct?: IotTopicRuleCloudwatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleCloudwatchLogsToHclTerraform(struct?: IotTopicRuleCloudwatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleCloudwatchLogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleCloudwatchLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleCloudwatchLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchMode = undefined;
      this._logGroupName = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchMode = value.batchMode;
      this._logGroupName = value.logGroupName;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: false, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class IotTopicRuleCloudwatchLogsList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleCloudwatchLogs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleCloudwatchLogsOutputReference {
    return new IotTopicRuleCloudwatchLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleCloudwatchMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#metric_name IotTopicRule#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#metric_namespace IotTopicRule#metric_namespace}
  */
  readonly metricNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#metric_timestamp IotTopicRule#metric_timestamp}
  */
  readonly metricTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#metric_unit IotTopicRule#metric_unit}
  */
  readonly metricUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#metric_value IotTopicRule#metric_value}
  */
  readonly metricValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleCloudwatchMetricToTerraform(struct?: IotTopicRuleCloudwatchMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    metric_namespace: cdktn.stringToTerraform(struct!.metricNamespace),
    metric_timestamp: cdktn.stringToTerraform(struct!.metricTimestamp),
    metric_unit: cdktn.stringToTerraform(struct!.metricUnit),
    metric_value: cdktn.stringToTerraform(struct!.metricValue),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleCloudwatchMetricToHclTerraform(struct?: IotTopicRuleCloudwatchMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_namespace: {
      value: cdktn.stringToHclTerraform(struct!.metricNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_timestamp: {
      value: cdktn.stringToHclTerraform(struct!.metricTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_unit: {
      value: cdktn.stringToHclTerraform(struct!.metricUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_value: {
      value: cdktn.stringToHclTerraform(struct!.metricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleCloudwatchMetricOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleCloudwatchMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNamespace = this._metricNamespace;
    }
    if (this._metricTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTimestamp = this._metricTimestamp;
    }
    if (this._metricUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricUnit = this._metricUnit;
    }
    if (this._metricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricValue = this._metricValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleCloudwatchMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._metricNamespace = undefined;
      this._metricTimestamp = undefined;
      this._metricUnit = undefined;
      this._metricValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._metricNamespace = value.metricNamespace;
      this._metricTimestamp = value.metricTimestamp;
      this._metricUnit = value.metricUnit;
      this._metricValue = value.metricValue;
      this._roleArn = value.roleArn;
    }
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_namespace - computed: false, optional: false, required: true
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace;
  }

  // metric_timestamp - computed: false, optional: true, required: false
  private _metricTimestamp?: string; 
  public get metricTimestamp() {
    return this.getStringAttribute('metric_timestamp');
  }
  public set metricTimestamp(value: string) {
    this._metricTimestamp = value;
  }
  public resetMetricTimestamp() {
    this._metricTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTimestampInput() {
    return this._metricTimestamp;
  }

  // metric_unit - computed: false, optional: false, required: true
  private _metricUnit?: string; 
  public get metricUnit() {
    return this.getStringAttribute('metric_unit');
  }
  public set metricUnit(value: string) {
    this._metricUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricUnitInput() {
    return this._metricUnit;
  }

  // metric_value - computed: false, optional: false, required: true
  private _metricValue?: string; 
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }
  public set metricValue(value: string) {
    this._metricValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricValueInput() {
    return this._metricValue;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class IotTopicRuleCloudwatchMetricList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleCloudwatchMetric[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleCloudwatchMetricOutputReference {
    return new IotTopicRuleCloudwatchMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleDynamodb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#hash_key_field IotTopicRule#hash_key_field}
  */
  readonly hashKeyField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#hash_key_type IotTopicRule#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#hash_key_value IotTopicRule#hash_key_value}
  */
  readonly hashKeyValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#operation IotTopicRule#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#payload_field IotTopicRule#payload_field}
  */
  readonly payloadField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#range_key_field IotTopicRule#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#range_key_type IotTopicRule#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#range_key_value IotTopicRule#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
  */
  readonly tableName: string;
}

export function iotTopicRuleDynamodbToTerraform(struct?: IotTopicRuleDynamodb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_key_field: cdktn.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktn.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktn.stringToTerraform(struct!.hashKeyValue),
    operation: cdktn.stringToTerraform(struct!.operation),
    payload_field: cdktn.stringToTerraform(struct!.payloadField),
    range_key_field: cdktn.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktn.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktn.stringToTerraform(struct!.rangeKeyValue),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function iotTopicRuleDynamodbToHclTerraform(struct?: IotTopicRuleDynamodb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_key_field: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_key_type: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_key_value: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktn.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_field: {
      value: cdktn.stringToHclTerraform(struct!.payloadField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_field: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_type: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_value: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleDynamodbOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleDynamodb | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashKeyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyField = this._hashKeyField;
    }
    if (this._hashKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyType = this._hashKeyType;
    }
    if (this._hashKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyValue = this._hashKeyValue;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._payloadField !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadField = this._payloadField;
    }
    if (this._rangeKeyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyField = this._rangeKeyField;
    }
    if (this._rangeKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyType = this._rangeKeyType;
    }
    if (this._rangeKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyValue = this._rangeKeyValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleDynamodb | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashKeyField = undefined;
      this._hashKeyType = undefined;
      this._hashKeyValue = undefined;
      this._operation = undefined;
      this._payloadField = undefined;
      this._rangeKeyField = undefined;
      this._rangeKeyType = undefined;
      this._rangeKeyValue = undefined;
      this._roleArn = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashKeyField = value.hashKeyField;
      this._hashKeyType = value.hashKeyType;
      this._hashKeyValue = value.hashKeyValue;
      this._operation = value.operation;
      this._payloadField = value.payloadField;
      this._rangeKeyField = value.rangeKeyField;
      this._rangeKeyType = value.rangeKeyType;
      this._rangeKeyValue = value.rangeKeyValue;
      this._roleArn = value.roleArn;
      this._tableName = value.tableName;
    }
  }

  // hash_key_field - computed: false, optional: false, required: true
  private _hashKeyField?: string; 
  public get hashKeyField() {
    return this.getStringAttribute('hash_key_field');
  }
  public set hashKeyField(value: string) {
    this._hashKeyField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyFieldInput() {
    return this._hashKeyField;
  }

  // hash_key_type - computed: false, optional: true, required: false
  private _hashKeyType?: string; 
  public get hashKeyType() {
    return this.getStringAttribute('hash_key_type');
  }
  public set hashKeyType(value: string) {
    this._hashKeyType = value;
  }
  public resetHashKeyType() {
    this._hashKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyTypeInput() {
    return this._hashKeyType;
  }

  // hash_key_value - computed: false, optional: false, required: true
  private _hashKeyValue?: string; 
  public get hashKeyValue() {
    return this.getStringAttribute('hash_key_value');
  }
  public set hashKeyValue(value: string) {
    this._hashKeyValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyValueInput() {
    return this._hashKeyValue;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // payload_field - computed: false, optional: true, required: false
  private _payloadField?: string; 
  public get payloadField() {
    return this.getStringAttribute('payload_field');
  }
  public set payloadField(value: string) {
    this._payloadField = value;
  }
  public resetPayloadField() {
    this._payloadField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFieldInput() {
    return this._payloadField;
  }

  // range_key_field - computed: false, optional: true, required: false
  private _rangeKeyField?: string; 
  public get rangeKeyField() {
    return this.getStringAttribute('range_key_field');
  }
  public set rangeKeyField(value: string) {
    this._rangeKeyField = value;
  }
  public resetRangeKeyField() {
    this._rangeKeyField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyFieldInput() {
    return this._rangeKeyField;
  }

  // range_key_type - computed: false, optional: true, required: false
  private _rangeKeyType?: string; 
  public get rangeKeyType() {
    return this.getStringAttribute('range_key_type');
  }
  public set rangeKeyType(value: string) {
    this._rangeKeyType = value;
  }
  public resetRangeKeyType() {
    this._rangeKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyTypeInput() {
    return this._rangeKeyType;
  }

  // range_key_value - computed: false, optional: true, required: false
  private _rangeKeyValue?: string; 
  public get rangeKeyValue() {
    return this.getStringAttribute('range_key_value');
  }
  public set rangeKeyValue(value: string) {
    this._rangeKeyValue = value;
  }
  public resetRangeKeyValue() {
    this._rangeKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyValueInput() {
    return this._rangeKeyValue;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}

export class IotTopicRuleDynamodbList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleDynamodb[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleDynamodbOutputReference {
    return new IotTopicRuleDynamodbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleDynamodbv2PutItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
  */
  readonly tableName: string;
}

export function iotTopicRuleDynamodbv2PutItemToTerraform(struct?: IotTopicRuleDynamodbv2PutItemOutputReference | IotTopicRuleDynamodbv2PutItem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function iotTopicRuleDynamodbv2PutItemToHclTerraform(struct?: IotTopicRuleDynamodbv2PutItemOutputReference | IotTopicRuleDynamodbv2PutItem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleDynamodbv2PutItemOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleDynamodbv2PutItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleDynamodbv2PutItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tableName = value.tableName;
    }
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface IotTopicRuleDynamodbv2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * put_item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#put_item IotTopicRule#put_item}
  */
  readonly putItem?: IotTopicRuleDynamodbv2PutItem;
}

export function iotTopicRuleDynamodbv2ToTerraform(struct?: IotTopicRuleDynamodbv2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    put_item: iotTopicRuleDynamodbv2PutItemToTerraform(struct!.putItem),
  }
}


export function iotTopicRuleDynamodbv2ToHclTerraform(struct?: IotTopicRuleDynamodbv2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    put_item: {
      value: iotTopicRuleDynamodbv2PutItemToHclTerraform(struct!.putItem),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleDynamodbv2PutItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleDynamodbv2OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleDynamodbv2 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._putItem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.putItem = this._putItem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleDynamodbv2 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._putItem.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._putItem.internalValue = value.putItem;
    }
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // put_item - computed: false, optional: true, required: false
  private _putItem = new IotTopicRuleDynamodbv2PutItemOutputReference(this, "put_item");
  public get putItem() {
    return this._putItem;
  }
  public putPutItem(value: IotTopicRuleDynamodbv2PutItem) {
    this._putItem.internalValue = value;
  }
  public resetPutItem() {
    this._putItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putItemInput() {
    return this._putItem.internalValue;
  }
}

export class IotTopicRuleDynamodbv2List extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleDynamodbv2[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleDynamodbv2OutputReference {
    return new IotTopicRuleDynamodbv2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleElasticsearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#endpoint IotTopicRule#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#id IotTopicRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#index IotTopicRule#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#type IotTopicRule#type}
  */
  readonly type: string;
}

export function iotTopicRuleElasticsearchToTerraform(struct?: IotTopicRuleElasticsearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    id: cdktn.stringToTerraform(struct!.id),
    index: cdktn.stringToTerraform(struct!.index),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function iotTopicRuleElasticsearchToHclTerraform(struct?: IotTopicRuleElasticsearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
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

export class IotTopicRuleElasticsearchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleElasticsearch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleElasticsearch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._id = undefined;
      this._index = undefined;
      this._roleArn = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._id = value.id;
      this._index = value.index;
      this._roleArn = value.roleArn;
      this._type = value.type;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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

export class IotTopicRuleElasticsearchList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleElasticsearch[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleElasticsearchOutputReference {
    return new IotTopicRuleElasticsearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleErrorActionCloudwatchAlarm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#alarm_name IotTopicRule#alarm_name}
  */
  readonly alarmName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#state_reason IotTopicRule#state_reason}
  */
  readonly stateReason: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#state_value IotTopicRule#state_value}
  */
  readonly stateValue: string;
}

export function iotTopicRuleErrorActionCloudwatchAlarmToTerraform(struct?: IotTopicRuleErrorActionCloudwatchAlarmOutputReference | IotTopicRuleErrorActionCloudwatchAlarm): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_name: cdktn.stringToTerraform(struct!.alarmName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    state_reason: cdktn.stringToTerraform(struct!.stateReason),
    state_value: cdktn.stringToTerraform(struct!.stateValue),
  }
}


export function iotTopicRuleErrorActionCloudwatchAlarmToHclTerraform(struct?: IotTopicRuleErrorActionCloudwatchAlarmOutputReference | IotTopicRuleErrorActionCloudwatchAlarm): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarm_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_reason: {
      value: cdktn.stringToHclTerraform(struct!.stateReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_value: {
      value: cdktn.stringToHclTerraform(struct!.stateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionCloudwatchAlarmOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionCloudwatchAlarm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmName = this._alarmName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._stateReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateReason = this._stateReason;
    }
    if (this._stateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateValue = this._stateValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionCloudwatchAlarm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alarmName = undefined;
      this._roleArn = undefined;
      this._stateReason = undefined;
      this._stateValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alarmName = value.alarmName;
      this._roleArn = value.roleArn;
      this._stateReason = value.stateReason;
      this._stateValue = value.stateValue;
    }
  }

  // alarm_name - computed: false, optional: false, required: true
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // state_reason - computed: false, optional: false, required: true
  private _stateReason?: string; 
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }
  public set stateReason(value: string) {
    this._stateReason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateReasonInput() {
    return this._stateReason;
  }

  // state_value - computed: false, optional: false, required: true
  private _stateValue?: string; 
  public get stateValue() {
    return this.getStringAttribute('state_value');
  }
  public set stateValue(value: string) {
    this._stateValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateValueInput() {
    return this._stateValue;
  }
}
export interface IotTopicRuleErrorActionCloudwatchLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#log_group_name IotTopicRule#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleErrorActionCloudwatchLogsToTerraform(struct?: IotTopicRuleErrorActionCloudwatchLogsOutputReference | IotTopicRuleErrorActionCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleErrorActionCloudwatchLogsToHclTerraform(struct?: IotTopicRuleErrorActionCloudwatchLogsOutputReference | IotTopicRuleErrorActionCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionCloudwatchLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionCloudwatchLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionCloudwatchLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchMode = undefined;
      this._logGroupName = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchMode = value.batchMode;
      this._logGroupName = value.logGroupName;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: false, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleErrorActionCloudwatchMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#metric_name IotTopicRule#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#metric_namespace IotTopicRule#metric_namespace}
  */
  readonly metricNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#metric_timestamp IotTopicRule#metric_timestamp}
  */
  readonly metricTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#metric_unit IotTopicRule#metric_unit}
  */
  readonly metricUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#metric_value IotTopicRule#metric_value}
  */
  readonly metricValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleErrorActionCloudwatchMetricToTerraform(struct?: IotTopicRuleErrorActionCloudwatchMetricOutputReference | IotTopicRuleErrorActionCloudwatchMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    metric_namespace: cdktn.stringToTerraform(struct!.metricNamespace),
    metric_timestamp: cdktn.stringToTerraform(struct!.metricTimestamp),
    metric_unit: cdktn.stringToTerraform(struct!.metricUnit),
    metric_value: cdktn.stringToTerraform(struct!.metricValue),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleErrorActionCloudwatchMetricToHclTerraform(struct?: IotTopicRuleErrorActionCloudwatchMetricOutputReference | IotTopicRuleErrorActionCloudwatchMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_namespace: {
      value: cdktn.stringToHclTerraform(struct!.metricNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_timestamp: {
      value: cdktn.stringToHclTerraform(struct!.metricTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_unit: {
      value: cdktn.stringToHclTerraform(struct!.metricUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_value: {
      value: cdktn.stringToHclTerraform(struct!.metricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionCloudwatchMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionCloudwatchMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNamespace = this._metricNamespace;
    }
    if (this._metricTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTimestamp = this._metricTimestamp;
    }
    if (this._metricUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricUnit = this._metricUnit;
    }
    if (this._metricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricValue = this._metricValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionCloudwatchMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricName = undefined;
      this._metricNamespace = undefined;
      this._metricTimestamp = undefined;
      this._metricUnit = undefined;
      this._metricValue = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricName = value.metricName;
      this._metricNamespace = value.metricNamespace;
      this._metricTimestamp = value.metricTimestamp;
      this._metricUnit = value.metricUnit;
      this._metricValue = value.metricValue;
      this._roleArn = value.roleArn;
    }
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_namespace - computed: false, optional: false, required: true
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace;
  }

  // metric_timestamp - computed: false, optional: true, required: false
  private _metricTimestamp?: string; 
  public get metricTimestamp() {
    return this.getStringAttribute('metric_timestamp');
  }
  public set metricTimestamp(value: string) {
    this._metricTimestamp = value;
  }
  public resetMetricTimestamp() {
    this._metricTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTimestampInput() {
    return this._metricTimestamp;
  }

  // metric_unit - computed: false, optional: false, required: true
  private _metricUnit?: string; 
  public get metricUnit() {
    return this.getStringAttribute('metric_unit');
  }
  public set metricUnit(value: string) {
    this._metricUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricUnitInput() {
    return this._metricUnit;
  }

  // metric_value - computed: false, optional: false, required: true
  private _metricValue?: string; 
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }
  public set metricValue(value: string) {
    this._metricValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricValueInput() {
    return this._metricValue;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleErrorActionDynamodb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#hash_key_field IotTopicRule#hash_key_field}
  */
  readonly hashKeyField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#hash_key_type IotTopicRule#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#hash_key_value IotTopicRule#hash_key_value}
  */
  readonly hashKeyValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#operation IotTopicRule#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#payload_field IotTopicRule#payload_field}
  */
  readonly payloadField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#range_key_field IotTopicRule#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#range_key_type IotTopicRule#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#range_key_value IotTopicRule#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
  */
  readonly tableName: string;
}

export function iotTopicRuleErrorActionDynamodbToTerraform(struct?: IotTopicRuleErrorActionDynamodbOutputReference | IotTopicRuleErrorActionDynamodb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_key_field: cdktn.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktn.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktn.stringToTerraform(struct!.hashKeyValue),
    operation: cdktn.stringToTerraform(struct!.operation),
    payload_field: cdktn.stringToTerraform(struct!.payloadField),
    range_key_field: cdktn.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktn.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktn.stringToTerraform(struct!.rangeKeyValue),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function iotTopicRuleErrorActionDynamodbToHclTerraform(struct?: IotTopicRuleErrorActionDynamodbOutputReference | IotTopicRuleErrorActionDynamodb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_key_field: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_key_type: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_key_value: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktn.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_field: {
      value: cdktn.stringToHclTerraform(struct!.payloadField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_field: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_type: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_value: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionDynamodbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionDynamodb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashKeyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyField = this._hashKeyField;
    }
    if (this._hashKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyType = this._hashKeyType;
    }
    if (this._hashKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyValue = this._hashKeyValue;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._payloadField !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadField = this._payloadField;
    }
    if (this._rangeKeyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyField = this._rangeKeyField;
    }
    if (this._rangeKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyType = this._rangeKeyType;
    }
    if (this._rangeKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyValue = this._rangeKeyValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionDynamodb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashKeyField = undefined;
      this._hashKeyType = undefined;
      this._hashKeyValue = undefined;
      this._operation = undefined;
      this._payloadField = undefined;
      this._rangeKeyField = undefined;
      this._rangeKeyType = undefined;
      this._rangeKeyValue = undefined;
      this._roleArn = undefined;
      this._tableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashKeyField = value.hashKeyField;
      this._hashKeyType = value.hashKeyType;
      this._hashKeyValue = value.hashKeyValue;
      this._operation = value.operation;
      this._payloadField = value.payloadField;
      this._rangeKeyField = value.rangeKeyField;
      this._rangeKeyType = value.rangeKeyType;
      this._rangeKeyValue = value.rangeKeyValue;
      this._roleArn = value.roleArn;
      this._tableName = value.tableName;
    }
  }

  // hash_key_field - computed: false, optional: false, required: true
  private _hashKeyField?: string; 
  public get hashKeyField() {
    return this.getStringAttribute('hash_key_field');
  }
  public set hashKeyField(value: string) {
    this._hashKeyField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyFieldInput() {
    return this._hashKeyField;
  }

  // hash_key_type - computed: false, optional: true, required: false
  private _hashKeyType?: string; 
  public get hashKeyType() {
    return this.getStringAttribute('hash_key_type');
  }
  public set hashKeyType(value: string) {
    this._hashKeyType = value;
  }
  public resetHashKeyType() {
    this._hashKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyTypeInput() {
    return this._hashKeyType;
  }

  // hash_key_value - computed: false, optional: false, required: true
  private _hashKeyValue?: string; 
  public get hashKeyValue() {
    return this.getStringAttribute('hash_key_value');
  }
  public set hashKeyValue(value: string) {
    this._hashKeyValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyValueInput() {
    return this._hashKeyValue;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // payload_field - computed: false, optional: true, required: false
  private _payloadField?: string; 
  public get payloadField() {
    return this.getStringAttribute('payload_field');
  }
  public set payloadField(value: string) {
    this._payloadField = value;
  }
  public resetPayloadField() {
    this._payloadField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFieldInput() {
    return this._payloadField;
  }

  // range_key_field - computed: false, optional: true, required: false
  private _rangeKeyField?: string; 
  public get rangeKeyField() {
    return this.getStringAttribute('range_key_field');
  }
  public set rangeKeyField(value: string) {
    this._rangeKeyField = value;
  }
  public resetRangeKeyField() {
    this._rangeKeyField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyFieldInput() {
    return this._rangeKeyField;
  }

  // range_key_type - computed: false, optional: true, required: false
  private _rangeKeyType?: string; 
  public get rangeKeyType() {
    return this.getStringAttribute('range_key_type');
  }
  public set rangeKeyType(value: string) {
    this._rangeKeyType = value;
  }
  public resetRangeKeyType() {
    this._rangeKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyTypeInput() {
    return this._rangeKeyType;
  }

  // range_key_value - computed: false, optional: true, required: false
  private _rangeKeyValue?: string; 
  public get rangeKeyValue() {
    return this.getStringAttribute('range_key_value');
  }
  public set rangeKeyValue(value: string) {
    this._rangeKeyValue = value;
  }
  public resetRangeKeyValue() {
    this._rangeKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyValueInput() {
    return this._rangeKeyValue;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface IotTopicRuleErrorActionDynamodbv2PutItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
  */
  readonly tableName: string;
}

export function iotTopicRuleErrorActionDynamodbv2PutItemToTerraform(struct?: IotTopicRuleErrorActionDynamodbv2PutItemOutputReference | IotTopicRuleErrorActionDynamodbv2PutItem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function iotTopicRuleErrorActionDynamodbv2PutItemToHclTerraform(struct?: IotTopicRuleErrorActionDynamodbv2PutItemOutputReference | IotTopicRuleErrorActionDynamodbv2PutItem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionDynamodbv2PutItemOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionDynamodbv2PutItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionDynamodbv2PutItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tableName = value.tableName;
    }
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface IotTopicRuleErrorActionDynamodbv2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * put_item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#put_item IotTopicRule#put_item}
  */
  readonly putItem?: IotTopicRuleErrorActionDynamodbv2PutItem;
}

export function iotTopicRuleErrorActionDynamodbv2ToTerraform(struct?: IotTopicRuleErrorActionDynamodbv2OutputReference | IotTopicRuleErrorActionDynamodbv2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    put_item: iotTopicRuleErrorActionDynamodbv2PutItemToTerraform(struct!.putItem),
  }
}


export function iotTopicRuleErrorActionDynamodbv2ToHclTerraform(struct?: IotTopicRuleErrorActionDynamodbv2OutputReference | IotTopicRuleErrorActionDynamodbv2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    put_item: {
      value: iotTopicRuleErrorActionDynamodbv2PutItemToHclTerraform(struct!.putItem),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionDynamodbv2PutItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionDynamodbv2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionDynamodbv2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._putItem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.putItem = this._putItem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionDynamodbv2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
      this._putItem.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
      this._putItem.internalValue = value.putItem;
    }
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // put_item - computed: false, optional: true, required: false
  private _putItem = new IotTopicRuleErrorActionDynamodbv2PutItemOutputReference(this, "put_item");
  public get putItem() {
    return this._putItem;
  }
  public putPutItem(value: IotTopicRuleErrorActionDynamodbv2PutItem) {
    this._putItem.internalValue = value;
  }
  public resetPutItem() {
    this._putItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putItemInput() {
    return this._putItem.internalValue;
  }
}
export interface IotTopicRuleErrorActionElasticsearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#endpoint IotTopicRule#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#id IotTopicRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#index IotTopicRule#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#type IotTopicRule#type}
  */
  readonly type: string;
}

export function iotTopicRuleErrorActionElasticsearchToTerraform(struct?: IotTopicRuleErrorActionElasticsearchOutputReference | IotTopicRuleErrorActionElasticsearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    id: cdktn.stringToTerraform(struct!.id),
    index: cdktn.stringToTerraform(struct!.index),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function iotTopicRuleErrorActionElasticsearchToHclTerraform(struct?: IotTopicRuleErrorActionElasticsearchOutputReference | IotTopicRuleErrorActionElasticsearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
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

export class IotTopicRuleErrorActionElasticsearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionElasticsearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionElasticsearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._id = undefined;
      this._index = undefined;
      this._roleArn = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._id = value.id;
      this._index = value.index;
      this._roleArn = value.roleArn;
      this._type = value.type;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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
export interface IotTopicRuleErrorActionFirehose {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#delivery_stream_name IotTopicRule#delivery_stream_name}
  */
  readonly deliveryStreamName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#separator IotTopicRule#separator}
  */
  readonly separator?: string;
}

export function iotTopicRuleErrorActionFirehoseToTerraform(struct?: IotTopicRuleErrorActionFirehoseOutputReference | IotTopicRuleErrorActionFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    delivery_stream_name: cdktn.stringToTerraform(struct!.deliveryStreamName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    separator: cdktn.stringToTerraform(struct!.separator),
  }
}


export function iotTopicRuleErrorActionFirehoseToHclTerraform(struct?: IotTopicRuleErrorActionFirehoseOutputReference | IotTopicRuleErrorActionFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delivery_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktn.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionFirehoseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionFirehose | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._deliveryStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStreamName = this._deliveryStreamName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionFirehose | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchMode = undefined;
      this._deliveryStreamName = undefined;
      this._roleArn = undefined;
      this._separator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchMode = value.batchMode;
      this._deliveryStreamName = value.deliveryStreamName;
      this._roleArn = value.roleArn;
      this._separator = value.separator;
    }
  }

  // batch_mode - computed: false, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // delivery_stream_name - computed: false, optional: false, required: true
  private _deliveryStreamName?: string; 
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }
  public set deliveryStreamName(value: string) {
    this._deliveryStreamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamNameInput() {
    return this._deliveryStreamName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }
}
export interface IotTopicRuleErrorActionHttpHttpHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value: string;
}

export function iotTopicRuleErrorActionHttpHttpHeaderToTerraform(struct?: IotTopicRuleErrorActionHttpHttpHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleErrorActionHttpHttpHeaderToHclTerraform(struct?: IotTopicRuleErrorActionHttpHttpHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionHttpHttpHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleErrorActionHttpHttpHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionHttpHttpHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IotTopicRuleErrorActionHttpHttpHeaderList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleErrorActionHttpHttpHeader[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleErrorActionHttpHttpHeaderOutputReference {
    return new IotTopicRuleErrorActionHttpHttpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleErrorActionHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#confirmation_url IotTopicRule#confirmation_url}
  */
  readonly confirmationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#url IotTopicRule#url}
  */
  readonly url: string;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#http_header IotTopicRule#http_header}
  */
  readonly httpHeader?: IotTopicRuleErrorActionHttpHttpHeader[] | cdktn.IResolvable;
}

export function iotTopicRuleErrorActionHttpToTerraform(struct?: IotTopicRuleErrorActionHttpOutputReference | IotTopicRuleErrorActionHttp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confirmation_url: cdktn.stringToTerraform(struct!.confirmationUrl),
    url: cdktn.stringToTerraform(struct!.url),
    http_header: cdktn.listMapper(iotTopicRuleErrorActionHttpHttpHeaderToTerraform, true)(struct!.httpHeader),
  }
}


export function iotTopicRuleErrorActionHttpToHclTerraform(struct?: IotTopicRuleErrorActionHttpOutputReference | IotTopicRuleErrorActionHttp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confirmation_url: {
      value: cdktn.stringToHclTerraform(struct!.confirmationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktn.listMapperHcl(iotTopicRuleErrorActionHttpHttpHeaderToHclTerraform, true)(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionHttpHttpHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionHttpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confirmationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationUrl = this._confirmationUrl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._httpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confirmationUrl = undefined;
      this._url = undefined;
      this._httpHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confirmationUrl = value.confirmationUrl;
      this._url = value.url;
      this._httpHeader.internalValue = value.httpHeader;
    }
  }

  // confirmation_url - computed: false, optional: true, required: false
  private _confirmationUrl?: string; 
  public get confirmationUrl() {
    return this.getStringAttribute('confirmation_url');
  }
  public set confirmationUrl(value: string) {
    this._confirmationUrl = value;
  }
  public resetConfirmationUrl() {
    this._confirmationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationUrlInput() {
    return this._confirmationUrl;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader = new IotTopicRuleErrorActionHttpHttpHeaderList(this, "http_header", false);
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: IotTopicRuleErrorActionHttpHttpHeader[] | cdktn.IResolvable) {
    this._httpHeader.internalValue = value;
  }
  public resetHttpHeader() {
    this._httpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader.internalValue;
  }
}
export interface IotTopicRuleErrorActionIotAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#channel_name IotTopicRule#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleErrorActionIotAnalyticsToTerraform(struct?: IotTopicRuleErrorActionIotAnalyticsOutputReference | IotTopicRuleErrorActionIotAnalytics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    channel_name: cdktn.stringToTerraform(struct!.channelName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleErrorActionIotAnalyticsToHclTerraform(struct?: IotTopicRuleErrorActionIotAnalyticsOutputReference | IotTopicRuleErrorActionIotAnalytics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channel_name: {
      value: cdktn.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionIotAnalyticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionIotAnalytics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionIotAnalytics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchMode = undefined;
      this._channelName = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchMode = value.batchMode;
      this._channelName = value.channelName;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: false, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // channel_name - computed: false, optional: false, required: true
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleErrorActionIotEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#input_name IotTopicRule#input_name}
  */
  readonly inputName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#message_id IotTopicRule#message_id}
  */
  readonly messageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleErrorActionIotEventsToTerraform(struct?: IotTopicRuleErrorActionIotEventsOutputReference | IotTopicRuleErrorActionIotEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    input_name: cdktn.stringToTerraform(struct!.inputName),
    message_id: cdktn.stringToTerraform(struct!.messageId),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleErrorActionIotEventsToHclTerraform(struct?: IotTopicRuleErrorActionIotEventsOutputReference | IotTopicRuleErrorActionIotEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_name: {
      value: cdktn.stringToHclTerraform(struct!.inputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_id: {
      value: cdktn.stringToHclTerraform(struct!.messageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionIotEventsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionIotEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._inputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputName = this._inputName;
    }
    if (this._messageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageId = this._messageId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionIotEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchMode = undefined;
      this._inputName = undefined;
      this._messageId = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchMode = value.batchMode;
      this._inputName = value.inputName;
      this._messageId = value.messageId;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: false, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // input_name - computed: false, optional: false, required: true
  private _inputName?: string; 
  public get inputName() {
    return this.getStringAttribute('input_name');
  }
  public set inputName(value: string) {
    this._inputName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputNameInput() {
    return this._inputName;
  }

  // message_id - computed: false, optional: true, required: false
  private _messageId?: string; 
  public get messageId() {
    return this.getStringAttribute('message_id');
  }
  public set messageId(value: string) {
    this._messageId = value;
  }
  public resetMessageId() {
    this._messageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdInput() {
    return this._messageId;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleErrorActionKafkaHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value: string;
}

export function iotTopicRuleErrorActionKafkaHeaderToTerraform(struct?: IotTopicRuleErrorActionKafkaHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleErrorActionKafkaHeaderToHclTerraform(struct?: IotTopicRuleErrorActionKafkaHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionKafkaHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleErrorActionKafkaHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionKafkaHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IotTopicRuleErrorActionKafkaHeaderList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleErrorActionKafkaHeader[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleErrorActionKafkaHeaderOutputReference {
    return new IotTopicRuleErrorActionKafkaHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleErrorActionKafka {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#client_properties IotTopicRule#client_properties}
  */
  readonly clientProperties: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#destination_arn IotTopicRule#destination_arn}
  */
  readonly destinationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#partition IotTopicRule#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#topic IotTopicRule#topic}
  */
  readonly topic: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#header IotTopicRule#header}
  */
  readonly header?: IotTopicRuleErrorActionKafkaHeader[] | cdktn.IResolvable;
}

export function iotTopicRuleErrorActionKafkaToTerraform(struct?: IotTopicRuleErrorActionKafkaOutputReference | IotTopicRuleErrorActionKafka): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.clientProperties),
    destination_arn: cdktn.stringToTerraform(struct!.destinationArn),
    key: cdktn.stringToTerraform(struct!.key),
    partition: cdktn.stringToTerraform(struct!.partition),
    topic: cdktn.stringToTerraform(struct!.topic),
    header: cdktn.listMapper(iotTopicRuleErrorActionKafkaHeaderToTerraform, true)(struct!.header),
  }
}


export function iotTopicRuleErrorActionKafkaToHclTerraform(struct?: IotTopicRuleErrorActionKafkaOutputReference | IotTopicRuleErrorActionKafka): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.clientProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    destination_arn: {
      value: cdktn.stringToHclTerraform(struct!.destinationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktn.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktn.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktn.listMapperHcl(iotTopicRuleErrorActionKafkaHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionKafkaHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionKafkaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionKafka | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientProperties = this._clientProperties;
    }
    if (this._destinationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationArn = this._destinationArn;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionKafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientProperties = undefined;
      this._destinationArn = undefined;
      this._key = undefined;
      this._partition = undefined;
      this._topic = undefined;
      this._header.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientProperties = value.clientProperties;
      this._destinationArn = value.destinationArn;
      this._key = value.key;
      this._partition = value.partition;
      this._topic = value.topic;
      this._header.internalValue = value.header;
    }
  }

  // client_properties - computed: false, optional: false, required: true
  private _clientProperties?: { [key: string]: string }; 
  public get clientProperties() {
    return this.getStringMapAttribute('client_properties');
  }
  public set clientProperties(value: { [key: string]: string }) {
    this._clientProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPropertiesInput() {
    return this._clientProperties;
  }

  // destination_arn - computed: false, optional: false, required: true
  private _destinationArn?: string; 
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }
  public set destinationArn(value: string) {
    this._destinationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationArnInput() {
    return this._destinationArn;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // header - computed: false, optional: true, required: false
  private _header = new IotTopicRuleErrorActionKafkaHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: IotTopicRuleErrorActionKafkaHeader[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}
export interface IotTopicRuleErrorActionKinesis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#partition_key IotTopicRule#partition_key}
  */
  readonly partitionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#stream_name IotTopicRule#stream_name}
  */
  readonly streamName: string;
}

export function iotTopicRuleErrorActionKinesisToTerraform(struct?: IotTopicRuleErrorActionKinesisOutputReference | IotTopicRuleErrorActionKinesis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition_key: cdktn.stringToTerraform(struct!.partitionKey),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    stream_name: cdktn.stringToTerraform(struct!.streamName),
  }
}


export function iotTopicRuleErrorActionKinesisToHclTerraform(struct?: IotTopicRuleErrorActionKinesisOutputReference | IotTopicRuleErrorActionKinesis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partition_key: {
      value: cdktn.stringToHclTerraform(struct!.partitionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktn.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionKinesisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionKinesis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionKey = this._partitionKey;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionKinesis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partitionKey = undefined;
      this._roleArn = undefined;
      this._streamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partitionKey = value.partitionKey;
      this._roleArn = value.roleArn;
      this._streamName = value.streamName;
    }
  }

  // partition_key - computed: false, optional: true, required: false
  private _partitionKey?: string; 
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
  public set partitionKey(value: string) {
    this._partitionKey = value;
  }
  public resetPartitionKey() {
    this._partitionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}
export interface IotTopicRuleErrorActionLambda {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#function_arn IotTopicRule#function_arn}
  */
  readonly functionArn: string;
}

export function iotTopicRuleErrorActionLambdaToTerraform(struct?: IotTopicRuleErrorActionLambdaOutputReference | IotTopicRuleErrorActionLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
  }
}


export function iotTopicRuleErrorActionLambdaToHclTerraform(struct?: IotTopicRuleErrorActionLambdaOutputReference | IotTopicRuleErrorActionLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_arn: {
      value: cdktn.stringToHclTerraform(struct!.functionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionLambda | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._functionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._functionArn = value.functionArn;
    }
  }

  // function_arn - computed: false, optional: false, required: true
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
  }
}
export interface IotTopicRuleErrorActionRepublish {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#qos IotTopicRule#qos}
  */
  readonly qos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#topic IotTopicRule#topic}
  */
  readonly topic: string;
}

export function iotTopicRuleErrorActionRepublishToTerraform(struct?: IotTopicRuleErrorActionRepublishOutputReference | IotTopicRuleErrorActionRepublish): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    qos: cdktn.numberToTerraform(struct!.qos),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    topic: cdktn.stringToTerraform(struct!.topic),
  }
}


export function iotTopicRuleErrorActionRepublishToHclTerraform(struct?: IotTopicRuleErrorActionRepublishOutputReference | IotTopicRuleErrorActionRepublish): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    qos: {
      value: cdktn.numberToHclTerraform(struct!.qos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktn.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionRepublishOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionRepublish | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._qos !== undefined) {
      hasAnyValues = true;
      internalValueResult.qos = this._qos;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionRepublish | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._qos = undefined;
      this._roleArn = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._qos = value.qos;
      this._roleArn = value.roleArn;
      this._topic = value.topic;
    }
  }

  // qos - computed: false, optional: true, required: false
  private _qos?: number; 
  public get qos() {
    return this.getNumberAttribute('qos');
  }
  public set qos(value: number) {
    this._qos = value;
  }
  public resetQos() {
    this._qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface IotTopicRuleErrorActionS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#bucket_name IotTopicRule#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#canned_acl IotTopicRule#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleErrorActionS3ToTerraform(struct?: IotTopicRuleErrorActionS3OutputReference | IotTopicRuleErrorActionS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    canned_acl: cdktn.stringToTerraform(struct!.cannedAcl),
    key: cdktn.stringToTerraform(struct!.key),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleErrorActionS3ToHclTerraform(struct?: IotTopicRuleErrorActionS3OutputReference | IotTopicRuleErrorActionS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canned_acl: {
      value: cdktn.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._cannedAcl = undefined;
      this._key = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._cannedAcl = value.cannedAcl;
      this._key = value.key;
      this._roleArn = value.roleArn;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleErrorActionSns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#message_format IotTopicRule#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#target_arn IotTopicRule#target_arn}
  */
  readonly targetArn: string;
}

export function iotTopicRuleErrorActionSnsToTerraform(struct?: IotTopicRuleErrorActionSnsOutputReference | IotTopicRuleErrorActionSns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_format: cdktn.stringToTerraform(struct!.messageFormat),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    target_arn: cdktn.stringToTerraform(struct!.targetArn),
  }
}


export function iotTopicRuleErrorActionSnsToHclTerraform(struct?: IotTopicRuleErrorActionSnsOutputReference | IotTopicRuleErrorActionSns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_format: {
      value: cdktn.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionSnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionSns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._targetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArn = this._targetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionSns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageFormat = undefined;
      this._roleArn = undefined;
      this._targetArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageFormat = value.messageFormat;
      this._roleArn = value.roleArn;
      this._targetArn = value.targetArn;
    }
  }

  // message_format - computed: false, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // target_arn - computed: false, optional: false, required: true
  private _targetArn?: string; 
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
  public set targetArn(value: string) {
    this._targetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnInput() {
    return this._targetArn;
  }
}
export interface IotTopicRuleErrorActionSqs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#queue_url IotTopicRule#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#use_base64 IotTopicRule#use_base64}
  */
  readonly useBase64: boolean | cdktn.IResolvable;
}

export function iotTopicRuleErrorActionSqsToTerraform(struct?: IotTopicRuleErrorActionSqsOutputReference | IotTopicRuleErrorActionSqs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queue_url: cdktn.stringToTerraform(struct!.queueUrl),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    use_base64: cdktn.booleanToTerraform(struct!.useBase64),
  }
}


export function iotTopicRuleErrorActionSqsToHclTerraform(struct?: IotTopicRuleErrorActionSqsOutputReference | IotTopicRuleErrorActionSqs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    queue_url: {
      value: cdktn.stringToHclTerraform(struct!.queueUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_base64: {
      value: cdktn.booleanToHclTerraform(struct!.useBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionSqsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionSqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._useBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBase64 = this._useBase64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionSqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queueUrl = undefined;
      this._roleArn = undefined;
      this._useBase64 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queueUrl = value.queueUrl;
      this._roleArn = value.roleArn;
      this._useBase64 = value.useBase64;
    }
  }

  // queue_url - computed: false, optional: false, required: true
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // use_base64 - computed: false, optional: false, required: true
  private _useBase64?: boolean | cdktn.IResolvable; 
  public get useBase64() {
    return this.getBooleanAttribute('use_base64');
  }
  public set useBase64(value: boolean | cdktn.IResolvable) {
    this._useBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useBase64Input() {
    return this._useBase64;
  }
}
export interface IotTopicRuleErrorActionStepFunctions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#execution_name_prefix IotTopicRule#execution_name_prefix}
  */
  readonly executionNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#state_machine_name IotTopicRule#state_machine_name}
  */
  readonly stateMachineName: string;
}

export function iotTopicRuleErrorActionStepFunctionsToTerraform(struct?: IotTopicRuleErrorActionStepFunctionsOutputReference | IotTopicRuleErrorActionStepFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_name_prefix: cdktn.stringToTerraform(struct!.executionNamePrefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    state_machine_name: cdktn.stringToTerraform(struct!.stateMachineName),
  }
}


export function iotTopicRuleErrorActionStepFunctionsToHclTerraform(struct?: IotTopicRuleErrorActionStepFunctionsOutputReference | IotTopicRuleErrorActionStepFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execution_name_prefix: {
      value: cdktn.stringToHclTerraform(struct!.executionNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_machine_name: {
      value: cdktn.stringToHclTerraform(struct!.stateMachineName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionStepFunctionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionStepFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionNamePrefix = this._executionNamePrefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._stateMachineName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMachineName = this._stateMachineName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionStepFunctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executionNamePrefix = undefined;
      this._roleArn = undefined;
      this._stateMachineName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executionNamePrefix = value.executionNamePrefix;
      this._roleArn = value.roleArn;
      this._stateMachineName = value.stateMachineName;
    }
  }

  // execution_name_prefix - computed: false, optional: true, required: false
  private _executionNamePrefix?: string; 
  public get executionNamePrefix() {
    return this.getStringAttribute('execution_name_prefix');
  }
  public set executionNamePrefix(value: string) {
    this._executionNamePrefix = value;
  }
  public resetExecutionNamePrefix() {
    this._executionNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionNamePrefixInput() {
    return this._executionNamePrefix;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // state_machine_name - computed: false, optional: false, required: true
  private _stateMachineName?: string; 
  public get stateMachineName() {
    return this.getStringAttribute('state_machine_name');
  }
  public set stateMachineName(value: string) {
    this._stateMachineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMachineNameInput() {
    return this._stateMachineName;
  }
}
export interface IotTopicRuleErrorActionTimestreamDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#name IotTopicRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value: string;
}

export function iotTopicRuleErrorActionTimestreamDimensionToTerraform(struct?: IotTopicRuleErrorActionTimestreamDimension | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleErrorActionTimestreamDimensionToHclTerraform(struct?: IotTopicRuleErrorActionTimestreamDimension | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionTimestreamDimensionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleErrorActionTimestreamDimension | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionTimestreamDimension | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IotTopicRuleErrorActionTimestreamDimensionList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleErrorActionTimestreamDimension[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleErrorActionTimestreamDimensionOutputReference {
    return new IotTopicRuleErrorActionTimestreamDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleErrorActionTimestreamTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#unit IotTopicRule#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value: string;
}

export function iotTopicRuleErrorActionTimestreamTimestampToTerraform(struct?: IotTopicRuleErrorActionTimestreamTimestampOutputReference | IotTopicRuleErrorActionTimestreamTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleErrorActionTimestreamTimestampToHclTerraform(struct?: IotTopicRuleErrorActionTimestreamTimestampOutputReference | IotTopicRuleErrorActionTimestreamTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionTimestreamTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionTimestreamTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionTimestreamTimestamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface IotTopicRuleErrorActionTimestream {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#database_name IotTopicRule#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
  */
  readonly tableName: string;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#dimension IotTopicRule#dimension}
  */
  readonly dimension: IotTopicRuleErrorActionTimestreamDimension[] | cdktn.IResolvable;
  /**
  * timestamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#timestamp IotTopicRule#timestamp}
  */
  readonly timestamp?: IotTopicRuleErrorActionTimestreamTimestamp;
}

export function iotTopicRuleErrorActionTimestreamToTerraform(struct?: IotTopicRuleErrorActionTimestreamOutputReference | IotTopicRuleErrorActionTimestream): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    dimension: cdktn.listMapper(iotTopicRuleErrorActionTimestreamDimensionToTerraform, true)(struct!.dimension),
    timestamp: iotTopicRuleErrorActionTimestreamTimestampToTerraform(struct!.timestamp),
  }
}


export function iotTopicRuleErrorActionTimestreamToHclTerraform(struct?: IotTopicRuleErrorActionTimestreamOutputReference | IotTopicRuleErrorActionTimestream): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension: {
      value: cdktn.listMapperHcl(iotTopicRuleErrorActionTimestreamDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "IotTopicRuleErrorActionTimestreamDimensionList",
    },
    timestamp: {
      value: iotTopicRuleErrorActionTimestreamTimestampToHclTerraform(struct!.timestamp),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionTimestreamTimestampList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionTimestreamOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorActionTimestream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._timestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorActionTimestream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._roleArn = undefined;
      this._tableName = undefined;
      this._dimension.internalValue = undefined;
      this._timestamp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._roleArn = value.roleArn;
      this._tableName = value.tableName;
      this._dimension.internalValue = value.dimension;
      this._timestamp.internalValue = value.timestamp;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new IotTopicRuleErrorActionTimestreamDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: IotTopicRuleErrorActionTimestreamDimension[] | cdktn.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp = new IotTopicRuleErrorActionTimestreamTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: IotTopicRuleErrorActionTimestreamTimestamp) {
    this._timestamp.internalValue = value;
  }
  public resetTimestamp() {
    this._timestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp.internalValue;
  }
}
export interface IotTopicRuleErrorAction {
  /**
  * cloudwatch_alarm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}
  */
  readonly cloudwatchAlarm?: IotTopicRuleErrorActionCloudwatchAlarm;
  /**
  * cloudwatch_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#cloudwatch_logs IotTopicRule#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: IotTopicRuleErrorActionCloudwatchLogs;
  /**
  * cloudwatch_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#cloudwatch_metric IotTopicRule#cloudwatch_metric}
  */
  readonly cloudwatchMetric?: IotTopicRuleErrorActionCloudwatchMetric;
  /**
  * dynamodb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#dynamodb IotTopicRule#dynamodb}
  */
  readonly dynamodb?: IotTopicRuleErrorActionDynamodb;
  /**
  * dynamodbv2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#dynamodbv2 IotTopicRule#dynamodbv2}
  */
  readonly dynamodbv2?: IotTopicRuleErrorActionDynamodbv2;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#elasticsearch IotTopicRule#elasticsearch}
  */
  readonly elasticsearch?: IotTopicRuleErrorActionElasticsearch;
  /**
  * firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#firehose IotTopicRule#firehose}
  */
  readonly firehose?: IotTopicRuleErrorActionFirehose;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#http IotTopicRule#http}
  */
  readonly http?: IotTopicRuleErrorActionHttp;
  /**
  * iot_analytics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#iot_analytics IotTopicRule#iot_analytics}
  */
  readonly iotAnalytics?: IotTopicRuleErrorActionIotAnalytics;
  /**
  * iot_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#iot_events IotTopicRule#iot_events}
  */
  readonly iotEvents?: IotTopicRuleErrorActionIotEvents;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#kafka IotTopicRule#kafka}
  */
  readonly kafka?: IotTopicRuleErrorActionKafka;
  /**
  * kinesis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#kinesis IotTopicRule#kinesis}
  */
  readonly kinesis?: IotTopicRuleErrorActionKinesis;
  /**
  * lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#lambda IotTopicRule#lambda}
  */
  readonly lambda?: IotTopicRuleErrorActionLambda;
  /**
  * republish block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#republish IotTopicRule#republish}
  */
  readonly republish?: IotTopicRuleErrorActionRepublish;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#s3 IotTopicRule#s3}
  */
  readonly s3?: IotTopicRuleErrorActionS3;
  /**
  * sns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#sns IotTopicRule#sns}
  */
  readonly sns?: IotTopicRuleErrorActionSns;
  /**
  * sqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#sqs IotTopicRule#sqs}
  */
  readonly sqs?: IotTopicRuleErrorActionSqs;
  /**
  * step_functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#step_functions IotTopicRule#step_functions}
  */
  readonly stepFunctions?: IotTopicRuleErrorActionStepFunctions;
  /**
  * timestream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#timestream IotTopicRule#timestream}
  */
  readonly timestream?: IotTopicRuleErrorActionTimestream;
}

export function iotTopicRuleErrorActionToTerraform(struct?: IotTopicRuleErrorActionOutputReference | IotTopicRuleErrorAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_alarm: iotTopicRuleErrorActionCloudwatchAlarmToTerraform(struct!.cloudwatchAlarm),
    cloudwatch_logs: iotTopicRuleErrorActionCloudwatchLogsToTerraform(struct!.cloudwatchLogs),
    cloudwatch_metric: iotTopicRuleErrorActionCloudwatchMetricToTerraform(struct!.cloudwatchMetric),
    dynamodb: iotTopicRuleErrorActionDynamodbToTerraform(struct!.dynamodb),
    dynamodbv2: iotTopicRuleErrorActionDynamodbv2ToTerraform(struct!.dynamodbv2),
    elasticsearch: iotTopicRuleErrorActionElasticsearchToTerraform(struct!.elasticsearch),
    firehose: iotTopicRuleErrorActionFirehoseToTerraform(struct!.firehose),
    http: iotTopicRuleErrorActionHttpToTerraform(struct!.http),
    iot_analytics: iotTopicRuleErrorActionIotAnalyticsToTerraform(struct!.iotAnalytics),
    iot_events: iotTopicRuleErrorActionIotEventsToTerraform(struct!.iotEvents),
    kafka: iotTopicRuleErrorActionKafkaToTerraform(struct!.kafka),
    kinesis: iotTopicRuleErrorActionKinesisToTerraform(struct!.kinesis),
    lambda: iotTopicRuleErrorActionLambdaToTerraform(struct!.lambda),
    republish: iotTopicRuleErrorActionRepublishToTerraform(struct!.republish),
    s3: iotTopicRuleErrorActionS3ToTerraform(struct!.s3),
    sns: iotTopicRuleErrorActionSnsToTerraform(struct!.sns),
    sqs: iotTopicRuleErrorActionSqsToTerraform(struct!.sqs),
    step_functions: iotTopicRuleErrorActionStepFunctionsToTerraform(struct!.stepFunctions),
    timestream: iotTopicRuleErrorActionTimestreamToTerraform(struct!.timestream),
  }
}


export function iotTopicRuleErrorActionToHclTerraform(struct?: IotTopicRuleErrorActionOutputReference | IotTopicRuleErrorAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudwatch_alarm: {
      value: iotTopicRuleErrorActionCloudwatchAlarmToHclTerraform(struct!.cloudwatchAlarm),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionCloudwatchAlarmList",
    },
    cloudwatch_logs: {
      value: iotTopicRuleErrorActionCloudwatchLogsToHclTerraform(struct!.cloudwatchLogs),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionCloudwatchLogsList",
    },
    cloudwatch_metric: {
      value: iotTopicRuleErrorActionCloudwatchMetricToHclTerraform(struct!.cloudwatchMetric),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionCloudwatchMetricList",
    },
    dynamodb: {
      value: iotTopicRuleErrorActionDynamodbToHclTerraform(struct!.dynamodb),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionDynamodbList",
    },
    dynamodbv2: {
      value: iotTopicRuleErrorActionDynamodbv2ToHclTerraform(struct!.dynamodbv2),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionDynamodbv2List",
    },
    elasticsearch: {
      value: iotTopicRuleErrorActionElasticsearchToHclTerraform(struct!.elasticsearch),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionElasticsearchList",
    },
    firehose: {
      value: iotTopicRuleErrorActionFirehoseToHclTerraform(struct!.firehose),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionFirehoseList",
    },
    http: {
      value: iotTopicRuleErrorActionHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionHttpList",
    },
    iot_analytics: {
      value: iotTopicRuleErrorActionIotAnalyticsToHclTerraform(struct!.iotAnalytics),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionIotAnalyticsList",
    },
    iot_events: {
      value: iotTopicRuleErrorActionIotEventsToHclTerraform(struct!.iotEvents),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionIotEventsList",
    },
    kafka: {
      value: iotTopicRuleErrorActionKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionKafkaList",
    },
    kinesis: {
      value: iotTopicRuleErrorActionKinesisToHclTerraform(struct!.kinesis),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionKinesisList",
    },
    lambda: {
      value: iotTopicRuleErrorActionLambdaToHclTerraform(struct!.lambda),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionLambdaList",
    },
    republish: {
      value: iotTopicRuleErrorActionRepublishToHclTerraform(struct!.republish),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionRepublishList",
    },
    s3: {
      value: iotTopicRuleErrorActionS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionS3List",
    },
    sns: {
      value: iotTopicRuleErrorActionSnsToHclTerraform(struct!.sns),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionSnsList",
    },
    sqs: {
      value: iotTopicRuleErrorActionSqsToHclTerraform(struct!.sqs),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionSqsList",
    },
    step_functions: {
      value: iotTopicRuleErrorActionStepFunctionsToHclTerraform(struct!.stepFunctions),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionStepFunctionsList",
    },
    timestream: {
      value: iotTopicRuleErrorActionTimestreamToHclTerraform(struct!.timestream),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleErrorActionTimestreamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleErrorActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleErrorAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchAlarm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchAlarm = this._cloudwatchAlarm?.internalValue;
    }
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    if (this._cloudwatchMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchMetric = this._cloudwatchMetric?.internalValue;
    }
    if (this._dynamodb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamodb = this._dynamodb?.internalValue;
    }
    if (this._dynamodbv2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamodbv2 = this._dynamodbv2?.internalValue;
    }
    if (this._elasticsearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearch = this._elasticsearch?.internalValue;
    }
    if (this._firehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehose = this._firehose?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._iotAnalytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotAnalytics = this._iotAnalytics?.internalValue;
    }
    if (this._iotEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotEvents = this._iotEvents?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._kinesis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesis = this._kinesis?.internalValue;
    }
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    if (this._republish?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.republish = this._republish?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._sns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sns = this._sns?.internalValue;
    }
    if (this._sqs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqs = this._sqs?.internalValue;
    }
    if (this._stepFunctions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepFunctions = this._stepFunctions?.internalValue;
    }
    if (this._timestream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestream = this._timestream?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleErrorAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchAlarm.internalValue = undefined;
      this._cloudwatchLogs.internalValue = undefined;
      this._cloudwatchMetric.internalValue = undefined;
      this._dynamodb.internalValue = undefined;
      this._dynamodbv2.internalValue = undefined;
      this._elasticsearch.internalValue = undefined;
      this._firehose.internalValue = undefined;
      this._http.internalValue = undefined;
      this._iotAnalytics.internalValue = undefined;
      this._iotEvents.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._kinesis.internalValue = undefined;
      this._lambda.internalValue = undefined;
      this._republish.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._sns.internalValue = undefined;
      this._sqs.internalValue = undefined;
      this._stepFunctions.internalValue = undefined;
      this._timestream.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchAlarm.internalValue = value.cloudwatchAlarm;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
      this._cloudwatchMetric.internalValue = value.cloudwatchMetric;
      this._dynamodb.internalValue = value.dynamodb;
      this._dynamodbv2.internalValue = value.dynamodbv2;
      this._elasticsearch.internalValue = value.elasticsearch;
      this._firehose.internalValue = value.firehose;
      this._http.internalValue = value.http;
      this._iotAnalytics.internalValue = value.iotAnalytics;
      this._iotEvents.internalValue = value.iotEvents;
      this._kafka.internalValue = value.kafka;
      this._kinesis.internalValue = value.kinesis;
      this._lambda.internalValue = value.lambda;
      this._republish.internalValue = value.republish;
      this._s3.internalValue = value.s3;
      this._sns.internalValue = value.sns;
      this._sqs.internalValue = value.sqs;
      this._stepFunctions.internalValue = value.stepFunctions;
      this._timestream.internalValue = value.timestream;
    }
  }

  // cloudwatch_alarm - computed: false, optional: true, required: false
  private _cloudwatchAlarm = new IotTopicRuleErrorActionCloudwatchAlarmOutputReference(this, "cloudwatch_alarm");
  public get cloudwatchAlarm() {
    return this._cloudwatchAlarm;
  }
  public putCloudwatchAlarm(value: IotTopicRuleErrorActionCloudwatchAlarm) {
    this._cloudwatchAlarm.internalValue = value;
  }
  public resetCloudwatchAlarm() {
    this._cloudwatchAlarm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchAlarmInput() {
    return this._cloudwatchAlarm.internalValue;
  }

  // cloudwatch_logs - computed: false, optional: true, required: false
  private _cloudwatchLogs = new IotTopicRuleErrorActionCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: IotTopicRuleErrorActionCloudwatchLogs) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }

  // cloudwatch_metric - computed: false, optional: true, required: false
  private _cloudwatchMetric = new IotTopicRuleErrorActionCloudwatchMetricOutputReference(this, "cloudwatch_metric");
  public get cloudwatchMetric() {
    return this._cloudwatchMetric;
  }
  public putCloudwatchMetric(value: IotTopicRuleErrorActionCloudwatchMetric) {
    this._cloudwatchMetric.internalValue = value;
  }
  public resetCloudwatchMetric() {
    this._cloudwatchMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricInput() {
    return this._cloudwatchMetric.internalValue;
  }

  // dynamodb - computed: false, optional: true, required: false
  private _dynamodb = new IotTopicRuleErrorActionDynamodbOutputReference(this, "dynamodb");
  public get dynamodb() {
    return this._dynamodb;
  }
  public putDynamodb(value: IotTopicRuleErrorActionDynamodb) {
    this._dynamodb.internalValue = value;
  }
  public resetDynamodb() {
    this._dynamodb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbInput() {
    return this._dynamodb.internalValue;
  }

  // dynamodbv2 - computed: false, optional: true, required: false
  private _dynamodbv2 = new IotTopicRuleErrorActionDynamodbv2OutputReference(this, "dynamodbv2");
  public get dynamodbv2() {
    return this._dynamodbv2;
  }
  public putDynamodbv2(value: IotTopicRuleErrorActionDynamodbv2) {
    this._dynamodbv2.internalValue = value;
  }
  public resetDynamodbv2() {
    this._dynamodbv2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbv2Input() {
    return this._dynamodbv2.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new IotTopicRuleErrorActionElasticsearchOutputReference(this, "elasticsearch");
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: IotTopicRuleErrorActionElasticsearch) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // firehose - computed: false, optional: true, required: false
  private _firehose = new IotTopicRuleErrorActionFirehoseOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: IotTopicRuleErrorActionFirehose) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new IotTopicRuleErrorActionHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: IotTopicRuleErrorActionHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // iot_analytics - computed: false, optional: true, required: false
  private _iotAnalytics = new IotTopicRuleErrorActionIotAnalyticsOutputReference(this, "iot_analytics");
  public get iotAnalytics() {
    return this._iotAnalytics;
  }
  public putIotAnalytics(value: IotTopicRuleErrorActionIotAnalytics) {
    this._iotAnalytics.internalValue = value;
  }
  public resetIotAnalytics() {
    this._iotAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotAnalyticsInput() {
    return this._iotAnalytics.internalValue;
  }

  // iot_events - computed: false, optional: true, required: false
  private _iotEvents = new IotTopicRuleErrorActionIotEventsOutputReference(this, "iot_events");
  public get iotEvents() {
    return this._iotEvents;
  }
  public putIotEvents(value: IotTopicRuleErrorActionIotEvents) {
    this._iotEvents.internalValue = value;
  }
  public resetIotEvents() {
    this._iotEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotEventsInput() {
    return this._iotEvents.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new IotTopicRuleErrorActionKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: IotTopicRuleErrorActionKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // kinesis - computed: false, optional: true, required: false
  private _kinesis = new IotTopicRuleErrorActionKinesisOutputReference(this, "kinesis");
  public get kinesis() {
    return this._kinesis;
  }
  public putKinesis(value: IotTopicRuleErrorActionKinesis) {
    this._kinesis.internalValue = value;
  }
  public resetKinesis() {
    this._kinesis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisInput() {
    return this._kinesis.internalValue;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda = new IotTopicRuleErrorActionLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: IotTopicRuleErrorActionLambda) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // republish - computed: false, optional: true, required: false
  private _republish = new IotTopicRuleErrorActionRepublishOutputReference(this, "republish");
  public get republish() {
    return this._republish;
  }
  public putRepublish(value: IotTopicRuleErrorActionRepublish) {
    this._republish.internalValue = value;
  }
  public resetRepublish() {
    this._republish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get republishInput() {
    return this._republish.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new IotTopicRuleErrorActionS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: IotTopicRuleErrorActionS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // sns - computed: false, optional: true, required: false
  private _sns = new IotTopicRuleErrorActionSnsOutputReference(this, "sns");
  public get sns() {
    return this._sns;
  }
  public putSns(value: IotTopicRuleErrorActionSns) {
    this._sns.internalValue = value;
  }
  public resetSns() {
    this._sns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsInput() {
    return this._sns.internalValue;
  }

  // sqs - computed: false, optional: true, required: false
  private _sqs = new IotTopicRuleErrorActionSqsOutputReference(this, "sqs");
  public get sqs() {
    return this._sqs;
  }
  public putSqs(value: IotTopicRuleErrorActionSqs) {
    this._sqs.internalValue = value;
  }
  public resetSqs() {
    this._sqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsInput() {
    return this._sqs.internalValue;
  }

  // step_functions - computed: false, optional: true, required: false
  private _stepFunctions = new IotTopicRuleErrorActionStepFunctionsOutputReference(this, "step_functions");
  public get stepFunctions() {
    return this._stepFunctions;
  }
  public putStepFunctions(value: IotTopicRuleErrorActionStepFunctions) {
    this._stepFunctions.internalValue = value;
  }
  public resetStepFunctions() {
    this._stepFunctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepFunctionsInput() {
    return this._stepFunctions.internalValue;
  }

  // timestream - computed: false, optional: true, required: false
  private _timestream = new IotTopicRuleErrorActionTimestreamOutputReference(this, "timestream");
  public get timestream() {
    return this._timestream;
  }
  public putTimestream(value: IotTopicRuleErrorActionTimestream) {
    this._timestream.internalValue = value;
  }
  public resetTimestream() {
    this._timestream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestreamInput() {
    return this._timestream.internalValue;
  }
}
export interface IotTopicRuleFirehose {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#delivery_stream_name IotTopicRule#delivery_stream_name}
  */
  readonly deliveryStreamName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#separator IotTopicRule#separator}
  */
  readonly separator?: string;
}

export function iotTopicRuleFirehoseToTerraform(struct?: IotTopicRuleFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    delivery_stream_name: cdktn.stringToTerraform(struct!.deliveryStreamName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    separator: cdktn.stringToTerraform(struct!.separator),
  }
}


export function iotTopicRuleFirehoseToHclTerraform(struct?: IotTopicRuleFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delivery_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktn.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleFirehoseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleFirehose | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._deliveryStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStreamName = this._deliveryStreamName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleFirehose | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchMode = undefined;
      this._deliveryStreamName = undefined;
      this._roleArn = undefined;
      this._separator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchMode = value.batchMode;
      this._deliveryStreamName = value.deliveryStreamName;
      this._roleArn = value.roleArn;
      this._separator = value.separator;
    }
  }

  // batch_mode - computed: false, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // delivery_stream_name - computed: false, optional: false, required: true
  private _deliveryStreamName?: string; 
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }
  public set deliveryStreamName(value: string) {
    this._deliveryStreamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamNameInput() {
    return this._deliveryStreamName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }
}

export class IotTopicRuleFirehoseList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleFirehose[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleFirehoseOutputReference {
    return new IotTopicRuleFirehoseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleHttpHttpHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value: string;
}

export function iotTopicRuleHttpHttpHeaderToTerraform(struct?: IotTopicRuleHttpHttpHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleHttpHttpHeaderToHclTerraform(struct?: IotTopicRuleHttpHttpHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleHttpHttpHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleHttpHttpHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleHttpHttpHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IotTopicRuleHttpHttpHeaderList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleHttpHttpHeader[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleHttpHttpHeaderOutputReference {
    return new IotTopicRuleHttpHttpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#confirmation_url IotTopicRule#confirmation_url}
  */
  readonly confirmationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#url IotTopicRule#url}
  */
  readonly url: string;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#http_header IotTopicRule#http_header}
  */
  readonly httpHeader?: IotTopicRuleHttpHttpHeader[] | cdktn.IResolvable;
}

export function iotTopicRuleHttpToTerraform(struct?: IotTopicRuleHttp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confirmation_url: cdktn.stringToTerraform(struct!.confirmationUrl),
    url: cdktn.stringToTerraform(struct!.url),
    http_header: cdktn.listMapper(iotTopicRuleHttpHttpHeaderToTerraform, true)(struct!.httpHeader),
  }
}


export function iotTopicRuleHttpToHclTerraform(struct?: IotTopicRuleHttp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confirmation_url: {
      value: cdktn.stringToHclTerraform(struct!.confirmationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktn.listMapperHcl(iotTopicRuleHttpHttpHeaderToHclTerraform, true)(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleHttpHttpHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleHttpOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleHttp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confirmationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationUrl = this._confirmationUrl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._httpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleHttp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confirmationUrl = undefined;
      this._url = undefined;
      this._httpHeader.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confirmationUrl = value.confirmationUrl;
      this._url = value.url;
      this._httpHeader.internalValue = value.httpHeader;
    }
  }

  // confirmation_url - computed: false, optional: true, required: false
  private _confirmationUrl?: string; 
  public get confirmationUrl() {
    return this.getStringAttribute('confirmation_url');
  }
  public set confirmationUrl(value: string) {
    this._confirmationUrl = value;
  }
  public resetConfirmationUrl() {
    this._confirmationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationUrlInput() {
    return this._confirmationUrl;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader = new IotTopicRuleHttpHttpHeaderList(this, "http_header", false);
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: IotTopicRuleHttpHttpHeader[] | cdktn.IResolvable) {
    this._httpHeader.internalValue = value;
  }
  public resetHttpHeader() {
    this._httpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader.internalValue;
  }
}

export class IotTopicRuleHttpList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleHttp[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleHttpOutputReference {
    return new IotTopicRuleHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleIotAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#channel_name IotTopicRule#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleIotAnalyticsToTerraform(struct?: IotTopicRuleIotAnalytics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    channel_name: cdktn.stringToTerraform(struct!.channelName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleIotAnalyticsToHclTerraform(struct?: IotTopicRuleIotAnalytics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channel_name: {
      value: cdktn.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleIotAnalyticsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleIotAnalytics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleIotAnalytics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchMode = undefined;
      this._channelName = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchMode = value.batchMode;
      this._channelName = value.channelName;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: false, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // channel_name - computed: false, optional: false, required: true
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class IotTopicRuleIotAnalyticsList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleIotAnalytics[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleIotAnalyticsOutputReference {
    return new IotTopicRuleIotAnalyticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleIotEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#input_name IotTopicRule#input_name}
  */
  readonly inputName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#message_id IotTopicRule#message_id}
  */
  readonly messageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleIotEventsToTerraform(struct?: IotTopicRuleIotEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    input_name: cdktn.stringToTerraform(struct!.inputName),
    message_id: cdktn.stringToTerraform(struct!.messageId),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleIotEventsToHclTerraform(struct?: IotTopicRuleIotEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_name: {
      value: cdktn.stringToHclTerraform(struct!.inputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_id: {
      value: cdktn.stringToHclTerraform(struct!.messageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleIotEventsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleIotEvents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._inputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputName = this._inputName;
    }
    if (this._messageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageId = this._messageId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleIotEvents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchMode = undefined;
      this._inputName = undefined;
      this._messageId = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchMode = value.batchMode;
      this._inputName = value.inputName;
      this._messageId = value.messageId;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: false, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // input_name - computed: false, optional: false, required: true
  private _inputName?: string; 
  public get inputName() {
    return this.getStringAttribute('input_name');
  }
  public set inputName(value: string) {
    this._inputName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputNameInput() {
    return this._inputName;
  }

  // message_id - computed: false, optional: true, required: false
  private _messageId?: string; 
  public get messageId() {
    return this.getStringAttribute('message_id');
  }
  public set messageId(value: string) {
    this._messageId = value;
  }
  public resetMessageId() {
    this._messageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdInput() {
    return this._messageId;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class IotTopicRuleIotEventsList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleIotEvents[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleIotEventsOutputReference {
    return new IotTopicRuleIotEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleKafkaHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value: string;
}

export function iotTopicRuleKafkaHeaderToTerraform(struct?: IotTopicRuleKafkaHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleKafkaHeaderToHclTerraform(struct?: IotTopicRuleKafkaHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleKafkaHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleKafkaHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleKafkaHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IotTopicRuleKafkaHeaderList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleKafkaHeader[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleKafkaHeaderOutputReference {
    return new IotTopicRuleKafkaHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleKafka {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#client_properties IotTopicRule#client_properties}
  */
  readonly clientProperties: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#destination_arn IotTopicRule#destination_arn}
  */
  readonly destinationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#partition IotTopicRule#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#topic IotTopicRule#topic}
  */
  readonly topic: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#header IotTopicRule#header}
  */
  readonly header?: IotTopicRuleKafkaHeader[] | cdktn.IResolvable;
}

export function iotTopicRuleKafkaToTerraform(struct?: IotTopicRuleKafka | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.clientProperties),
    destination_arn: cdktn.stringToTerraform(struct!.destinationArn),
    key: cdktn.stringToTerraform(struct!.key),
    partition: cdktn.stringToTerraform(struct!.partition),
    topic: cdktn.stringToTerraform(struct!.topic),
    header: cdktn.listMapper(iotTopicRuleKafkaHeaderToTerraform, true)(struct!.header),
  }
}


export function iotTopicRuleKafkaToHclTerraform(struct?: IotTopicRuleKafka | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.clientProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    destination_arn: {
      value: cdktn.stringToHclTerraform(struct!.destinationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktn.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktn.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktn.listMapperHcl(iotTopicRuleKafkaHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleKafkaHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleKafkaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleKafka | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientProperties = this._clientProperties;
    }
    if (this._destinationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationArn = this._destinationArn;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleKafka | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientProperties = undefined;
      this._destinationArn = undefined;
      this._key = undefined;
      this._partition = undefined;
      this._topic = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientProperties = value.clientProperties;
      this._destinationArn = value.destinationArn;
      this._key = value.key;
      this._partition = value.partition;
      this._topic = value.topic;
      this._header.internalValue = value.header;
    }
  }

  // client_properties - computed: false, optional: false, required: true
  private _clientProperties?: { [key: string]: string }; 
  public get clientProperties() {
    return this.getStringMapAttribute('client_properties');
  }
  public set clientProperties(value: { [key: string]: string }) {
    this._clientProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPropertiesInput() {
    return this._clientProperties;
  }

  // destination_arn - computed: false, optional: false, required: true
  private _destinationArn?: string; 
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }
  public set destinationArn(value: string) {
    this._destinationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationArnInput() {
    return this._destinationArn;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // header - computed: false, optional: true, required: false
  private _header = new IotTopicRuleKafkaHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: IotTopicRuleKafkaHeader[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

export class IotTopicRuleKafkaList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleKafka[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleKafkaOutputReference {
    return new IotTopicRuleKafkaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleKinesis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#partition_key IotTopicRule#partition_key}
  */
  readonly partitionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#stream_name IotTopicRule#stream_name}
  */
  readonly streamName: string;
}

export function iotTopicRuleKinesisToTerraform(struct?: IotTopicRuleKinesis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition_key: cdktn.stringToTerraform(struct!.partitionKey),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    stream_name: cdktn.stringToTerraform(struct!.streamName),
  }
}


export function iotTopicRuleKinesisToHclTerraform(struct?: IotTopicRuleKinesis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partition_key: {
      value: cdktn.stringToHclTerraform(struct!.partitionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktn.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleKinesisOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleKinesis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionKey = this._partitionKey;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleKinesis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partitionKey = undefined;
      this._roleArn = undefined;
      this._streamName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partitionKey = value.partitionKey;
      this._roleArn = value.roleArn;
      this._streamName = value.streamName;
    }
  }

  // partition_key - computed: false, optional: true, required: false
  private _partitionKey?: string; 
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
  public set partitionKey(value: string) {
    this._partitionKey = value;
  }
  public resetPartitionKey() {
    this._partitionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}

export class IotTopicRuleKinesisList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleKinesis[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleKinesisOutputReference {
    return new IotTopicRuleKinesisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleLambda {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#function_arn IotTopicRule#function_arn}
  */
  readonly functionArn: string;
}

export function iotTopicRuleLambdaToTerraform(struct?: IotTopicRuleLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
  }
}


export function iotTopicRuleLambdaToHclTerraform(struct?: IotTopicRuleLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_arn: {
      value: cdktn.stringToHclTerraform(struct!.functionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleLambdaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleLambda | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleLambda | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionArn = value.functionArn;
    }
  }

  // function_arn - computed: false, optional: false, required: true
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
  }
}

export class IotTopicRuleLambdaList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleLambda[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleLambdaOutputReference {
    return new IotTopicRuleLambdaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleRepublish {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#qos IotTopicRule#qos}
  */
  readonly qos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#topic IotTopicRule#topic}
  */
  readonly topic: string;
}

export function iotTopicRuleRepublishToTerraform(struct?: IotTopicRuleRepublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    qos: cdktn.numberToTerraform(struct!.qos),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    topic: cdktn.stringToTerraform(struct!.topic),
  }
}


export function iotTopicRuleRepublishToHclTerraform(struct?: IotTopicRuleRepublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    qos: {
      value: cdktn.numberToHclTerraform(struct!.qos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktn.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleRepublishOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleRepublish | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._qos !== undefined) {
      hasAnyValues = true;
      internalValueResult.qos = this._qos;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleRepublish | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._qos = undefined;
      this._roleArn = undefined;
      this._topic = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._qos = value.qos;
      this._roleArn = value.roleArn;
      this._topic = value.topic;
    }
  }

  // qos - computed: false, optional: true, required: false
  private _qos?: number; 
  public get qos() {
    return this.getNumberAttribute('qos');
  }
  public set qos(value: number) {
    this._qos = value;
  }
  public resetQos() {
    this._qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}

export class IotTopicRuleRepublishList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleRepublish[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleRepublishOutputReference {
    return new IotTopicRuleRepublishOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#bucket_name IotTopicRule#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#canned_acl IotTopicRule#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleS3ToTerraform(struct?: IotTopicRuleS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    canned_acl: cdktn.stringToTerraform(struct!.cannedAcl),
    key: cdktn.stringToTerraform(struct!.key),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleS3ToHclTerraform(struct?: IotTopicRuleS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canned_acl: {
      value: cdktn.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleS3OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._cannedAcl = undefined;
      this._key = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._cannedAcl = value.cannedAcl;
      this._key = value.key;
      this._roleArn = value.roleArn;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class IotTopicRuleS3List extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleS3[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleS3OutputReference {
    return new IotTopicRuleS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleSns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#message_format IotTopicRule#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#target_arn IotTopicRule#target_arn}
  */
  readonly targetArn: string;
}

export function iotTopicRuleSnsToTerraform(struct?: IotTopicRuleSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_format: cdktn.stringToTerraform(struct!.messageFormat),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    target_arn: cdktn.stringToTerraform(struct!.targetArn),
  }
}


export function iotTopicRuleSnsToHclTerraform(struct?: IotTopicRuleSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_format: {
      value: cdktn.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleSnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleSns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._targetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArn = this._targetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleSns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageFormat = undefined;
      this._roleArn = undefined;
      this._targetArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageFormat = value.messageFormat;
      this._roleArn = value.roleArn;
      this._targetArn = value.targetArn;
    }
  }

  // message_format - computed: false, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // target_arn - computed: false, optional: false, required: true
  private _targetArn?: string; 
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
  public set targetArn(value: string) {
    this._targetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnInput() {
    return this._targetArn;
  }
}

export class IotTopicRuleSnsList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleSns[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleSnsOutputReference {
    return new IotTopicRuleSnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleSqs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#queue_url IotTopicRule#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#use_base64 IotTopicRule#use_base64}
  */
  readonly useBase64: boolean | cdktn.IResolvable;
}

export function iotTopicRuleSqsToTerraform(struct?: IotTopicRuleSqs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queue_url: cdktn.stringToTerraform(struct!.queueUrl),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    use_base64: cdktn.booleanToTerraform(struct!.useBase64),
  }
}


export function iotTopicRuleSqsToHclTerraform(struct?: IotTopicRuleSqs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    queue_url: {
      value: cdktn.stringToHclTerraform(struct!.queueUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_base64: {
      value: cdktn.booleanToHclTerraform(struct!.useBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleSqsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleSqs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._useBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBase64 = this._useBase64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleSqs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queueUrl = undefined;
      this._roleArn = undefined;
      this._useBase64 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queueUrl = value.queueUrl;
      this._roleArn = value.roleArn;
      this._useBase64 = value.useBase64;
    }
  }

  // queue_url - computed: false, optional: false, required: true
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // use_base64 - computed: false, optional: false, required: true
  private _useBase64?: boolean | cdktn.IResolvable; 
  public get useBase64() {
    return this.getBooleanAttribute('use_base64');
  }
  public set useBase64(value: boolean | cdktn.IResolvable) {
    this._useBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useBase64Input() {
    return this._useBase64;
  }
}

export class IotTopicRuleSqsList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleSqs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleSqsOutputReference {
    return new IotTopicRuleSqsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleStepFunctions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#execution_name_prefix IotTopicRule#execution_name_prefix}
  */
  readonly executionNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#state_machine_name IotTopicRule#state_machine_name}
  */
  readonly stateMachineName: string;
}

export function iotTopicRuleStepFunctionsToTerraform(struct?: IotTopicRuleStepFunctions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_name_prefix: cdktn.stringToTerraform(struct!.executionNamePrefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    state_machine_name: cdktn.stringToTerraform(struct!.stateMachineName),
  }
}


export function iotTopicRuleStepFunctionsToHclTerraform(struct?: IotTopicRuleStepFunctions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execution_name_prefix: {
      value: cdktn.stringToHclTerraform(struct!.executionNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_machine_name: {
      value: cdktn.stringToHclTerraform(struct!.stateMachineName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleStepFunctionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleStepFunctions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionNamePrefix = this._executionNamePrefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._stateMachineName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMachineName = this._stateMachineName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleStepFunctions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executionNamePrefix = undefined;
      this._roleArn = undefined;
      this._stateMachineName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executionNamePrefix = value.executionNamePrefix;
      this._roleArn = value.roleArn;
      this._stateMachineName = value.stateMachineName;
    }
  }

  // execution_name_prefix - computed: false, optional: true, required: false
  private _executionNamePrefix?: string; 
  public get executionNamePrefix() {
    return this.getStringAttribute('execution_name_prefix');
  }
  public set executionNamePrefix(value: string) {
    this._executionNamePrefix = value;
  }
  public resetExecutionNamePrefix() {
    this._executionNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionNamePrefixInput() {
    return this._executionNamePrefix;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // state_machine_name - computed: false, optional: false, required: true
  private _stateMachineName?: string; 
  public get stateMachineName() {
    return this.getStringAttribute('state_machine_name');
  }
  public set stateMachineName(value: string) {
    this._stateMachineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMachineNameInput() {
    return this._stateMachineName;
  }
}

export class IotTopicRuleStepFunctionsList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleStepFunctions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleStepFunctionsOutputReference {
    return new IotTopicRuleStepFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleTimestreamDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#name IotTopicRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value: string;
}

export function iotTopicRuleTimestreamDimensionToTerraform(struct?: IotTopicRuleTimestreamDimension | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleTimestreamDimensionToHclTerraform(struct?: IotTopicRuleTimestreamDimension | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTimestreamDimensionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleTimestreamDimension | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTimestreamDimension | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IotTopicRuleTimestreamDimensionList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleTimestreamDimension[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleTimestreamDimensionOutputReference {
    return new IotTopicRuleTimestreamDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleTimestreamTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#unit IotTopicRule#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value: string;
}

export function iotTopicRuleTimestreamTimestampToTerraform(struct?: IotTopicRuleTimestreamTimestampOutputReference | IotTopicRuleTimestreamTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleTimestreamTimestampToHclTerraform(struct?: IotTopicRuleTimestreamTimestampOutputReference | IotTopicRuleTimestreamTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTimestreamTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotTopicRuleTimestreamTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTimestreamTimestamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface IotTopicRuleTimestream {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#database_name IotTopicRule#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
  */
  readonly tableName: string;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#dimension IotTopicRule#dimension}
  */
  readonly dimension: IotTopicRuleTimestreamDimension[] | cdktn.IResolvable;
  /**
  * timestamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#timestamp IotTopicRule#timestamp}
  */
  readonly timestamp?: IotTopicRuleTimestreamTimestamp;
}

export function iotTopicRuleTimestreamToTerraform(struct?: IotTopicRuleTimestream | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    dimension: cdktn.listMapper(iotTopicRuleTimestreamDimensionToTerraform, true)(struct!.dimension),
    timestamp: iotTopicRuleTimestreamTimestampToTerraform(struct!.timestamp),
  }
}


export function iotTopicRuleTimestreamToHclTerraform(struct?: IotTopicRuleTimestream | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension: {
      value: cdktn.listMapperHcl(iotTopicRuleTimestreamDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "IotTopicRuleTimestreamDimensionList",
    },
    timestamp: {
      value: iotTopicRuleTimestreamTimestampToHclTerraform(struct!.timestamp),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleTimestreamTimestampList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTimestreamOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleTimestream | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._timestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTimestream | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._roleArn = undefined;
      this._tableName = undefined;
      this._dimension.internalValue = undefined;
      this._timestamp.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._roleArn = value.roleArn;
      this._tableName = value.tableName;
      this._dimension.internalValue = value.dimension;
      this._timestamp.internalValue = value.timestamp;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new IotTopicRuleTimestreamDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: IotTopicRuleTimestreamDimension[] | cdktn.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp = new IotTopicRuleTimestreamTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: IotTopicRuleTimestreamTimestamp) {
    this._timestamp.internalValue = value;
  }
  public resetTimestamp() {
    this._timestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp.internalValue;
  }
}

export class IotTopicRuleTimestreamList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleTimestream[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotTopicRuleTimestreamOutputReference {
    return new IotTopicRuleTimestreamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule aws_iot_topic_rule}
*/
export class IotTopicRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iot_topic_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotTopicRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotTopicRule to import
  * @param importFromId The id of the existing IotTopicRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotTopicRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_iot_topic_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/iot_topic_rule aws_iot_topic_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotTopicRuleConfig
  */
  public constructor(scope: Construct, id: string, config: IotTopicRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_topic_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.40.0',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._sql = config.sql;
    this._sqlVersion = config.sqlVersion;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._cloudwatchAlarm.internalValue = config.cloudwatchAlarm;
    this._cloudwatchLogs.internalValue = config.cloudwatchLogs;
    this._cloudwatchMetric.internalValue = config.cloudwatchMetric;
    this._dynamodb.internalValue = config.dynamodb;
    this._dynamodbv2.internalValue = config.dynamodbv2;
    this._elasticsearch.internalValue = config.elasticsearch;
    this._errorAction.internalValue = config.errorAction;
    this._firehose.internalValue = config.firehose;
    this._http.internalValue = config.http;
    this._iotAnalytics.internalValue = config.iotAnalytics;
    this._iotEvents.internalValue = config.iotEvents;
    this._kafka.internalValue = config.kafka;
    this._kinesis.internalValue = config.kinesis;
    this._lambda.internalValue = config.lambda;
    this._republish.internalValue = config.republish;
    this._s3.internalValue = config.s3;
    this._sns.internalValue = config.sns;
    this._sqs.internalValue = config.sqs;
    this._stepFunctions.internalValue = config.stepFunctions;
    this._timestream.internalValue = config.timestream;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // sql - computed: false, optional: false, required: true
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // sql_version - computed: false, optional: false, required: true
  private _sqlVersion?: string; 
  public get sqlVersion() {
    return this.getStringAttribute('sql_version');
  }
  public set sqlVersion(value: string) {
    this._sqlVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlVersionInput() {
    return this._sqlVersion;
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // cloudwatch_alarm - computed: false, optional: true, required: false
  private _cloudwatchAlarm = new IotTopicRuleCloudwatchAlarmList(this, "cloudwatch_alarm", true);
  public get cloudwatchAlarm() {
    return this._cloudwatchAlarm;
  }
  public putCloudwatchAlarm(value: IotTopicRuleCloudwatchAlarm[] | cdktn.IResolvable) {
    this._cloudwatchAlarm.internalValue = value;
  }
  public resetCloudwatchAlarm() {
    this._cloudwatchAlarm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchAlarmInput() {
    return this._cloudwatchAlarm.internalValue;
  }

  // cloudwatch_logs - computed: false, optional: true, required: false
  private _cloudwatchLogs = new IotTopicRuleCloudwatchLogsList(this, "cloudwatch_logs", true);
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: IotTopicRuleCloudwatchLogs[] | cdktn.IResolvable) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }

  // cloudwatch_metric - computed: false, optional: true, required: false
  private _cloudwatchMetric = new IotTopicRuleCloudwatchMetricList(this, "cloudwatch_metric", true);
  public get cloudwatchMetric() {
    return this._cloudwatchMetric;
  }
  public putCloudwatchMetric(value: IotTopicRuleCloudwatchMetric[] | cdktn.IResolvable) {
    this._cloudwatchMetric.internalValue = value;
  }
  public resetCloudwatchMetric() {
    this._cloudwatchMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricInput() {
    return this._cloudwatchMetric.internalValue;
  }

  // dynamodb - computed: false, optional: true, required: false
  private _dynamodb = new IotTopicRuleDynamodbList(this, "dynamodb", true);
  public get dynamodb() {
    return this._dynamodb;
  }
  public putDynamodb(value: IotTopicRuleDynamodb[] | cdktn.IResolvable) {
    this._dynamodb.internalValue = value;
  }
  public resetDynamodb() {
    this._dynamodb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbInput() {
    return this._dynamodb.internalValue;
  }

  // dynamodbv2 - computed: false, optional: true, required: false
  private _dynamodbv2 = new IotTopicRuleDynamodbv2List(this, "dynamodbv2", true);
  public get dynamodbv2() {
    return this._dynamodbv2;
  }
  public putDynamodbv2(value: IotTopicRuleDynamodbv2[] | cdktn.IResolvable) {
    this._dynamodbv2.internalValue = value;
  }
  public resetDynamodbv2() {
    this._dynamodbv2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbv2Input() {
    return this._dynamodbv2.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new IotTopicRuleElasticsearchList(this, "elasticsearch", true);
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: IotTopicRuleElasticsearch[] | cdktn.IResolvable) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // error_action - computed: false, optional: true, required: false
  private _errorAction = new IotTopicRuleErrorActionOutputReference(this, "error_action");
  public get errorAction() {
    return this._errorAction;
  }
  public putErrorAction(value: IotTopicRuleErrorAction) {
    this._errorAction.internalValue = value;
  }
  public resetErrorAction() {
    this._errorAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorActionInput() {
    return this._errorAction.internalValue;
  }

  // firehose - computed: false, optional: true, required: false
  private _firehose = new IotTopicRuleFirehoseList(this, "firehose", true);
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: IotTopicRuleFirehose[] | cdktn.IResolvable) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new IotTopicRuleHttpList(this, "http", true);
  public get http() {
    return this._http;
  }
  public putHttp(value: IotTopicRuleHttp[] | cdktn.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // iot_analytics - computed: false, optional: true, required: false
  private _iotAnalytics = new IotTopicRuleIotAnalyticsList(this, "iot_analytics", true);
  public get iotAnalytics() {
    return this._iotAnalytics;
  }
  public putIotAnalytics(value: IotTopicRuleIotAnalytics[] | cdktn.IResolvable) {
    this._iotAnalytics.internalValue = value;
  }
  public resetIotAnalytics() {
    this._iotAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotAnalyticsInput() {
    return this._iotAnalytics.internalValue;
  }

  // iot_events - computed: false, optional: true, required: false
  private _iotEvents = new IotTopicRuleIotEventsList(this, "iot_events", true);
  public get iotEvents() {
    return this._iotEvents;
  }
  public putIotEvents(value: IotTopicRuleIotEvents[] | cdktn.IResolvable) {
    this._iotEvents.internalValue = value;
  }
  public resetIotEvents() {
    this._iotEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotEventsInput() {
    return this._iotEvents.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new IotTopicRuleKafkaList(this, "kafka", true);
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: IotTopicRuleKafka[] | cdktn.IResolvable) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // kinesis - computed: false, optional: true, required: false
  private _kinesis = new IotTopicRuleKinesisList(this, "kinesis", true);
  public get kinesis() {
    return this._kinesis;
  }
  public putKinesis(value: IotTopicRuleKinesis[] | cdktn.IResolvable) {
    this._kinesis.internalValue = value;
  }
  public resetKinesis() {
    this._kinesis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisInput() {
    return this._kinesis.internalValue;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda = new IotTopicRuleLambdaList(this, "lambda", true);
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: IotTopicRuleLambda[] | cdktn.IResolvable) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // republish - computed: false, optional: true, required: false
  private _republish = new IotTopicRuleRepublishList(this, "republish", true);
  public get republish() {
    return this._republish;
  }
  public putRepublish(value: IotTopicRuleRepublish[] | cdktn.IResolvable) {
    this._republish.internalValue = value;
  }
  public resetRepublish() {
    this._republish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get republishInput() {
    return this._republish.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new IotTopicRuleS3List(this, "s3", true);
  public get s3() {
    return this._s3;
  }
  public putS3(value: IotTopicRuleS3[] | cdktn.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // sns - computed: false, optional: true, required: false
  private _sns = new IotTopicRuleSnsList(this, "sns", true);
  public get sns() {
    return this._sns;
  }
  public putSns(value: IotTopicRuleSns[] | cdktn.IResolvable) {
    this._sns.internalValue = value;
  }
  public resetSns() {
    this._sns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsInput() {
    return this._sns.internalValue;
  }

  // sqs - computed: false, optional: true, required: false
  private _sqs = new IotTopicRuleSqsList(this, "sqs", true);
  public get sqs() {
    return this._sqs;
  }
  public putSqs(value: IotTopicRuleSqs[] | cdktn.IResolvable) {
    this._sqs.internalValue = value;
  }
  public resetSqs() {
    this._sqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsInput() {
    return this._sqs.internalValue;
  }

  // step_functions - computed: false, optional: true, required: false
  private _stepFunctions = new IotTopicRuleStepFunctionsList(this, "step_functions", true);
  public get stepFunctions() {
    return this._stepFunctions;
  }
  public putStepFunctions(value: IotTopicRuleStepFunctions[] | cdktn.IResolvable) {
    this._stepFunctions.internalValue = value;
  }
  public resetStepFunctions() {
    this._stepFunctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepFunctionsInput() {
    return this._stepFunctions.internalValue;
  }

  // timestream - computed: false, optional: true, required: false
  private _timestream = new IotTopicRuleTimestreamList(this, "timestream", true);
  public get timestream() {
    return this._timestream;
  }
  public putTimestream(value: IotTopicRuleTimestream[] | cdktn.IResolvable) {
    this._timestream.internalValue = value;
  }
  public resetTimestream() {
    this._timestream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestreamInput() {
    return this._timestream.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      enabled: cdktn.booleanToTerraform(this._enabled),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      sql: cdktn.stringToTerraform(this._sql),
      sql_version: cdktn.stringToTerraform(this._sqlVersion),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      cloudwatch_alarm: cdktn.listMapper(iotTopicRuleCloudwatchAlarmToTerraform, true)(this._cloudwatchAlarm.internalValue),
      cloudwatch_logs: cdktn.listMapper(iotTopicRuleCloudwatchLogsToTerraform, true)(this._cloudwatchLogs.internalValue),
      cloudwatch_metric: cdktn.listMapper(iotTopicRuleCloudwatchMetricToTerraform, true)(this._cloudwatchMetric.internalValue),
      dynamodb: cdktn.listMapper(iotTopicRuleDynamodbToTerraform, true)(this._dynamodb.internalValue),
      dynamodbv2: cdktn.listMapper(iotTopicRuleDynamodbv2ToTerraform, true)(this._dynamodbv2.internalValue),
      elasticsearch: cdktn.listMapper(iotTopicRuleElasticsearchToTerraform, true)(this._elasticsearch.internalValue),
      error_action: iotTopicRuleErrorActionToTerraform(this._errorAction.internalValue),
      firehose: cdktn.listMapper(iotTopicRuleFirehoseToTerraform, true)(this._firehose.internalValue),
      http: cdktn.listMapper(iotTopicRuleHttpToTerraform, true)(this._http.internalValue),
      iot_analytics: cdktn.listMapper(iotTopicRuleIotAnalyticsToTerraform, true)(this._iotAnalytics.internalValue),
      iot_events: cdktn.listMapper(iotTopicRuleIotEventsToTerraform, true)(this._iotEvents.internalValue),
      kafka: cdktn.listMapper(iotTopicRuleKafkaToTerraform, true)(this._kafka.internalValue),
      kinesis: cdktn.listMapper(iotTopicRuleKinesisToTerraform, true)(this._kinesis.internalValue),
      lambda: cdktn.listMapper(iotTopicRuleLambdaToTerraform, true)(this._lambda.internalValue),
      republish: cdktn.listMapper(iotTopicRuleRepublishToTerraform, true)(this._republish.internalValue),
      s3: cdktn.listMapper(iotTopicRuleS3ToTerraform, true)(this._s3.internalValue),
      sns: cdktn.listMapper(iotTopicRuleSnsToTerraform, true)(this._sns.internalValue),
      sqs: cdktn.listMapper(iotTopicRuleSqsToTerraform, true)(this._sqs.internalValue),
      step_functions: cdktn.listMapper(iotTopicRuleStepFunctionsToTerraform, true)(this._stepFunctions.internalValue),
      timestream: cdktn.listMapper(iotTopicRuleTimestreamToTerraform, true)(this._timestream.internalValue),
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
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
      sql: {
        value: cdktn.stringToHclTerraform(this._sql),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_version: {
        value: cdktn.stringToHclTerraform(this._sqlVersion),
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
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cloudwatch_alarm: {
        value: cdktn.listMapperHcl(iotTopicRuleCloudwatchAlarmToHclTerraform, true)(this._cloudwatchAlarm.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleCloudwatchAlarmList",
      },
      cloudwatch_logs: {
        value: cdktn.listMapperHcl(iotTopicRuleCloudwatchLogsToHclTerraform, true)(this._cloudwatchLogs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleCloudwatchLogsList",
      },
      cloudwatch_metric: {
        value: cdktn.listMapperHcl(iotTopicRuleCloudwatchMetricToHclTerraform, true)(this._cloudwatchMetric.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleCloudwatchMetricList",
      },
      dynamodb: {
        value: cdktn.listMapperHcl(iotTopicRuleDynamodbToHclTerraform, true)(this._dynamodb.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleDynamodbList",
      },
      dynamodbv2: {
        value: cdktn.listMapperHcl(iotTopicRuleDynamodbv2ToHclTerraform, true)(this._dynamodbv2.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleDynamodbv2List",
      },
      elasticsearch: {
        value: cdktn.listMapperHcl(iotTopicRuleElasticsearchToHclTerraform, true)(this._elasticsearch.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleElasticsearchList",
      },
      error_action: {
        value: iotTopicRuleErrorActionToHclTerraform(this._errorAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotTopicRuleErrorActionList",
      },
      firehose: {
        value: cdktn.listMapperHcl(iotTopicRuleFirehoseToHclTerraform, true)(this._firehose.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleFirehoseList",
      },
      http: {
        value: cdktn.listMapperHcl(iotTopicRuleHttpToHclTerraform, true)(this._http.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleHttpList",
      },
      iot_analytics: {
        value: cdktn.listMapperHcl(iotTopicRuleIotAnalyticsToHclTerraform, true)(this._iotAnalytics.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleIotAnalyticsList",
      },
      iot_events: {
        value: cdktn.listMapperHcl(iotTopicRuleIotEventsToHclTerraform, true)(this._iotEvents.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleIotEventsList",
      },
      kafka: {
        value: cdktn.listMapperHcl(iotTopicRuleKafkaToHclTerraform, true)(this._kafka.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleKafkaList",
      },
      kinesis: {
        value: cdktn.listMapperHcl(iotTopicRuleKinesisToHclTerraform, true)(this._kinesis.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleKinesisList",
      },
      lambda: {
        value: cdktn.listMapperHcl(iotTopicRuleLambdaToHclTerraform, true)(this._lambda.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleLambdaList",
      },
      republish: {
        value: cdktn.listMapperHcl(iotTopicRuleRepublishToHclTerraform, true)(this._republish.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleRepublishList",
      },
      s3: {
        value: cdktn.listMapperHcl(iotTopicRuleS3ToHclTerraform, true)(this._s3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleS3List",
      },
      sns: {
        value: cdktn.listMapperHcl(iotTopicRuleSnsToHclTerraform, true)(this._sns.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleSnsList",
      },
      sqs: {
        value: cdktn.listMapperHcl(iotTopicRuleSqsToHclTerraform, true)(this._sqs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleSqsList",
      },
      step_functions: {
        value: cdktn.listMapperHcl(iotTopicRuleStepFunctionsToHclTerraform, true)(this._stepFunctions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleStepFunctionsList",
      },
      timestream: {
        value: cdktn.listMapperHcl(iotTopicRuleTimestreamToHclTerraform, true)(this._timestream.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotTopicRuleTimestreamList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
