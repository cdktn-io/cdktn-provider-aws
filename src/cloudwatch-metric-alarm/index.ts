/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudwatchMetricAlarmConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#actions_enabled CloudwatchMetricAlarm#actions_enabled}
  */
  readonly actionsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#alarm_actions CloudwatchMetricAlarm#alarm_actions}
  */
  readonly alarmActions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#alarm_description CloudwatchMetricAlarm#alarm_description}
  */
  readonly alarmDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#alarm_name CloudwatchMetricAlarm#alarm_name}
  */
  readonly alarmName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#comparison_operator CloudwatchMetricAlarm#comparison_operator}
  */
  readonly comparisonOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}
  */
  readonly datapointsToAlarm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}
  */
  readonly evaluateLowSampleCountPercentiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#evaluation_interval CloudwatchMetricAlarm#evaluation_interval}
  */
  readonly evaluationInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#extended_statistic CloudwatchMetricAlarm#extended_statistic}
  */
  readonly extendedStatistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}
  */
  readonly insufficientDataActions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#ok_actions CloudwatchMetricAlarm#ok_actions}
  */
  readonly okActions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}
  */
  readonly period?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#region CloudwatchMetricAlarm#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#statistic CloudwatchMetricAlarm#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#tags CloudwatchMetricAlarm#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#tags_all CloudwatchMetricAlarm#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#threshold CloudwatchMetricAlarm#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}
  */
  readonly thresholdMetricId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}
  */
  readonly treatMissingData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}
  */
  readonly unit?: string;
  /**
  * evaluation_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#evaluation_criteria CloudwatchMetricAlarm#evaluation_criteria}
  */
  readonly evaluationCriteria?: CloudwatchMetricAlarmEvaluationCriteria;
  /**
  * metric_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#metric_query CloudwatchMetricAlarm#metric_query}
  */
  readonly metricQuery?: CloudwatchMetricAlarmMetricQuery[] | cdktn.IResolvable;
}
export interface CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#pending_period CloudwatchMetricAlarm#pending_period}
  */
  readonly pendingPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#query CloudwatchMetricAlarm#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#recovery_period CloudwatchMetricAlarm#recovery_period}
  */
  readonly recoveryPeriod?: number;
}

export function cloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaToTerraform(struct?: CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference | CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pending_period: cdktn.numberToTerraform(struct!.pendingPeriod),
    query: cdktn.stringToTerraform(struct!.query),
    recovery_period: cdktn.numberToTerraform(struct!.recoveryPeriod),
  }
}


export function cloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaToHclTerraform(struct?: CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference | CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pending_period: {
      value: cdktn.numberToHclTerraform(struct!.pendingPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_period: {
      value: cdktn.numberToHclTerraform(struct!.recoveryPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pendingPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingPeriod = this._pendingPeriod;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._recoveryPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryPeriod = this._recoveryPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pendingPeriod = undefined;
      this._query = undefined;
      this._recoveryPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pendingPeriod = value.pendingPeriod;
      this._query = value.query;
      this._recoveryPeriod = value.recoveryPeriod;
    }
  }

  // pending_period - computed: false, optional: true, required: false
  private _pendingPeriod?: number; 
  public get pendingPeriod() {
    return this.getNumberAttribute('pending_period');
  }
  public set pendingPeriod(value: number) {
    this._pendingPeriod = value;
  }
  public resetPendingPeriod() {
    this._pendingPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingPeriodInput() {
    return this._pendingPeriod;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // recovery_period - computed: false, optional: true, required: false
  private _recoveryPeriod?: number; 
  public get recoveryPeriod() {
    return this.getNumberAttribute('recovery_period');
  }
  public set recoveryPeriod(value: number) {
    this._recoveryPeriod = value;
  }
  public resetRecoveryPeriod() {
    this._recoveryPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPeriodInput() {
    return this._recoveryPeriod;
  }
}
export interface CloudwatchMetricAlarmEvaluationCriteria {
  /**
  * promql_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#promql_criteria CloudwatchMetricAlarm#promql_criteria}
  */
  readonly promqlCriteria: CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria;
}

export function cloudwatchMetricAlarmEvaluationCriteriaToTerraform(struct?: CloudwatchMetricAlarmEvaluationCriteriaOutputReference | CloudwatchMetricAlarmEvaluationCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql_criteria: cloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaToTerraform(struct!.promqlCriteria),
  }
}


export function cloudwatchMetricAlarmEvaluationCriteriaToHclTerraform(struct?: CloudwatchMetricAlarmEvaluationCriteriaOutputReference | CloudwatchMetricAlarmEvaluationCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql_criteria: {
      value: cloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaToHclTerraform(struct!.promqlCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchMetricAlarmEvaluationCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchMetricAlarmEvaluationCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promqlCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.promqlCriteria = this._promqlCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchMetricAlarmEvaluationCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._promqlCriteria.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._promqlCriteria.internalValue = value.promqlCriteria;
    }
  }

  // promql_criteria - computed: false, optional: false, required: true
  private _promqlCriteria = new CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference(this, "promql_criteria");
  public get promqlCriteria() {
    return this._promqlCriteria;
  }
  public putPromqlCriteria(value: CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria) {
    this._promqlCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlCriteriaInput() {
    return this._promqlCriteria.internalValue;
  }
}
export interface CloudwatchMetricAlarmMetricQueryMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}
  */
  readonly period: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#stat CloudwatchMetricAlarm#stat}
  */
  readonly stat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}
  */
  readonly unit?: string;
}

export function cloudwatchMetricAlarmMetricQueryMetricToTerraform(struct?: CloudwatchMetricAlarmMetricQueryMetricOutputReference | CloudwatchMetricAlarmMetricQueryMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dimensions),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    period: cdktn.numberToTerraform(struct!.period),
    stat: cdktn.stringToTerraform(struct!.stat),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function cloudwatchMetricAlarmMetricQueryMetricToHclTerraform(struct?: CloudwatchMetricAlarmMetricQueryMetricOutputReference | CloudwatchMetricAlarmMetricQueryMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dimensions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
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
    period: {
      value: cdktn.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stat: {
      value: cdktn.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchMetricAlarmMetricQueryMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchMetricAlarmMetricQueryMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchMetricAlarmMetricQueryMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimensions = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._period = undefined;
      this._stat = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimensions = value.dimensions;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._period = value.period;
      this._stat = value.stat;
      this._unit = value.unit;
    }
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: { [key: string]: string }; 
  public get dimensions() {
    return this.getStringMapAttribute('dimensions');
  }
  public set dimensions(value: { [key: string]: string }) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // stat - computed: false, optional: false, required: true
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface CloudwatchMetricAlarmMetricQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#account_id CloudwatchMetricAlarm#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#expression CloudwatchMetricAlarm#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#label CloudwatchMetricAlarm#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#return_data CloudwatchMetricAlarm#return_data}
  */
  readonly returnData?: boolean | cdktn.IResolvable;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#metric CloudwatchMetricAlarm#metric}
  */
  readonly metric?: CloudwatchMetricAlarmMetricQueryMetric;
}

export function cloudwatchMetricAlarmMetricQueryToTerraform(struct?: CloudwatchMetricAlarmMetricQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    expression: cdktn.stringToTerraform(struct!.expression),
    id: cdktn.stringToTerraform(struct!.id),
    label: cdktn.stringToTerraform(struct!.label),
    period: cdktn.numberToTerraform(struct!.period),
    return_data: cdktn.booleanToTerraform(struct!.returnData),
    metric: cloudwatchMetricAlarmMetricQueryMetricToTerraform(struct!.metric),
  }
}


export function cloudwatchMetricAlarmMetricQueryToHclTerraform(struct?: CloudwatchMetricAlarmMetricQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
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
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktn.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    return_data: {
      value: cdktn.booleanToHclTerraform(struct!.returnData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cloudwatchMetricAlarmMetricQueryMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchMetricAlarmMetricQueryMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchMetricAlarmMetricQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchMetricAlarmMetricQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._returnData !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnData = this._returnData;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchMetricAlarmMetricQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._expression = undefined;
      this._id = undefined;
      this._label = undefined;
      this._period = undefined;
      this._returnData = undefined;
      this._metric.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._expression = value.expression;
      this._id = value.id;
      this._label = value.label;
      this._period = value.period;
      this._returnData = value.returnData;
      this._metric.internalValue = value.metric;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // return_data - computed: false, optional: true, required: false
  private _returnData?: boolean | cdktn.IResolvable; 
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
  public set returnData(value: boolean | cdktn.IResolvable) {
    this._returnData = value;
  }
  public resetReturnData() {
    this._returnData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnDataInput() {
    return this._returnData;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new CloudwatchMetricAlarmMetricQueryMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: CloudwatchMetricAlarmMetricQueryMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}

export class CloudwatchMetricAlarmMetricQueryList extends cdktn.ComplexList {
  public internalValue? : CloudwatchMetricAlarmMetricQuery[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchMetricAlarmMetricQueryOutputReference {
    return new CloudwatchMetricAlarmMetricQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm aws_cloudwatch_metric_alarm}
*/
export class CloudwatchMetricAlarm extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_metric_alarm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudwatchMetricAlarm resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchMetricAlarm to import
  * @param importFromId The id of the existing CloudwatchMetricAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchMetricAlarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_metric_alarm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_metric_alarm aws_cloudwatch_metric_alarm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchMetricAlarmConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchMetricAlarmConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_metric_alarm',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.46.0',
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
    this._actionsEnabled = config.actionsEnabled;
    this._alarmActions = config.alarmActions;
    this._alarmDescription = config.alarmDescription;
    this._alarmName = config.alarmName;
    this._comparisonOperator = config.comparisonOperator;
    this._datapointsToAlarm = config.datapointsToAlarm;
    this._dimensions = config.dimensions;
    this._evaluateLowSampleCountPercentiles = config.evaluateLowSampleCountPercentiles;
    this._evaluationInterval = config.evaluationInterval;
    this._evaluationPeriods = config.evaluationPeriods;
    this._extendedStatistic = config.extendedStatistic;
    this._id = config.id;
    this._insufficientDataActions = config.insufficientDataActions;
    this._metricName = config.metricName;
    this._namespace = config.namespace;
    this._okActions = config.okActions;
    this._period = config.period;
    this._region = config.region;
    this._statistic = config.statistic;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._threshold = config.threshold;
    this._thresholdMetricId = config.thresholdMetricId;
    this._treatMissingData = config.treatMissingData;
    this._unit = config.unit;
    this._evaluationCriteria.internalValue = config.evaluationCriteria;
    this._metricQuery.internalValue = config.metricQuery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions_enabled - computed: false, optional: true, required: false
  private _actionsEnabled?: boolean | cdktn.IResolvable; 
  public get actionsEnabled() {
    return this.getBooleanAttribute('actions_enabled');
  }
  public set actionsEnabled(value: boolean | cdktn.IResolvable) {
    this._actionsEnabled = value;
  }
  public resetActionsEnabled() {
    this._actionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsEnabledInput() {
    return this._actionsEnabled;
  }

  // alarm_actions - computed: false, optional: true, required: false
  private _alarmActions?: string[]; 
  public get alarmActions() {
    return cdktn.Fn.tolist(this.getListAttribute('alarm_actions'));
  }
  public set alarmActions(value: string[]) {
    this._alarmActions = value;
  }
  public resetAlarmActions() {
    this._alarmActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmActionsInput() {
    return this._alarmActions;
  }

  // alarm_description - computed: false, optional: true, required: false
  private _alarmDescription?: string; 
  public get alarmDescription() {
    return this.getStringAttribute('alarm_description');
  }
  public set alarmDescription(value: string) {
    this._alarmDescription = value;
  }
  public resetAlarmDescription() {
    this._alarmDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmDescriptionInput() {
    return this._alarmDescription;
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // comparison_operator - computed: false, optional: true, required: false
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  public resetComparisonOperator() {
    this._comparisonOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // datapoints_to_alarm - computed: false, optional: true, required: false
  private _datapointsToAlarm?: number; 
  public get datapointsToAlarm() {
    return this.getNumberAttribute('datapoints_to_alarm');
  }
  public set datapointsToAlarm(value: number) {
    this._datapointsToAlarm = value;
  }
  public resetDatapointsToAlarm() {
    this._datapointsToAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datapointsToAlarmInput() {
    return this._datapointsToAlarm;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: { [key: string]: string }; 
  public get dimensions() {
    return this.getStringMapAttribute('dimensions');
  }
  public set dimensions(value: { [key: string]: string }) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // evaluate_low_sample_count_percentiles - computed: true, optional: true, required: false
  private _evaluateLowSampleCountPercentiles?: string; 
  public get evaluateLowSampleCountPercentiles() {
    return this.getStringAttribute('evaluate_low_sample_count_percentiles');
  }
  public set evaluateLowSampleCountPercentiles(value: string) {
    this._evaluateLowSampleCountPercentiles = value;
  }
  public resetEvaluateLowSampleCountPercentiles() {
    this._evaluateLowSampleCountPercentiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateLowSampleCountPercentilesInput() {
    return this._evaluateLowSampleCountPercentiles;
  }

  // evaluation_interval - computed: false, optional: true, required: false
  private _evaluationInterval?: number; 
  public get evaluationInterval() {
    return this.getNumberAttribute('evaluation_interval');
  }
  public set evaluationInterval(value: number) {
    this._evaluationInterval = value;
  }
  public resetEvaluationInterval() {
    this._evaluationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationIntervalInput() {
    return this._evaluationInterval;
  }

  // evaluation_periods - computed: false, optional: true, required: false
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  public resetEvaluationPeriods() {
    this._evaluationPeriods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
  }

  // extended_statistic - computed: false, optional: true, required: false
  private _extendedStatistic?: string; 
  public get extendedStatistic() {
    return this.getStringAttribute('extended_statistic');
  }
  public set extendedStatistic(value: string) {
    this._extendedStatistic = value;
  }
  public resetExtendedStatistic() {
    this._extendedStatistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedStatisticInput() {
    return this._extendedStatistic;
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

  // insufficient_data_actions - computed: false, optional: true, required: false
  private _insufficientDataActions?: string[]; 
  public get insufficientDataActions() {
    return cdktn.Fn.tolist(this.getListAttribute('insufficient_data_actions'));
  }
  public set insufficientDataActions(value: string[]) {
    this._insufficientDataActions = value;
  }
  public resetInsufficientDataActions() {
    this._insufficientDataActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insufficientDataActionsInput() {
    return this._insufficientDataActions;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // ok_actions - computed: false, optional: true, required: false
  private _okActions?: string[]; 
  public get okActions() {
    return cdktn.Fn.tolist(this.getListAttribute('ok_actions'));
  }
  public set okActions(value: string[]) {
    this._okActions = value;
  }
  public resetOkActions() {
    this._okActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okActionsInput() {
    return this._okActions;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
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

  // statistic - computed: false, optional: true, required: false
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  public resetStatistic() {
    this._statistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
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

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // threshold_metric_id - computed: false, optional: true, required: false
  private _thresholdMetricId?: string; 
  public get thresholdMetricId() {
    return this.getStringAttribute('threshold_metric_id');
  }
  public set thresholdMetricId(value: string) {
    this._thresholdMetricId = value;
  }
  public resetThresholdMetricId() {
    this._thresholdMetricId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdMetricIdInput() {
    return this._thresholdMetricId;
  }

  // treat_missing_data - computed: false, optional: true, required: false
  private _treatMissingData?: string; 
  public get treatMissingData() {
    return this.getStringAttribute('treat_missing_data');
  }
  public set treatMissingData(value: string) {
    this._treatMissingData = value;
  }
  public resetTreatMissingData() {
    this._treatMissingData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treatMissingDataInput() {
    return this._treatMissingData;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // evaluation_criteria - computed: false, optional: true, required: false
  private _evaluationCriteria = new CloudwatchMetricAlarmEvaluationCriteriaOutputReference(this, "evaluation_criteria");
  public get evaluationCriteria() {
    return this._evaluationCriteria;
  }
  public putEvaluationCriteria(value: CloudwatchMetricAlarmEvaluationCriteria) {
    this._evaluationCriteria.internalValue = value;
  }
  public resetEvaluationCriteria() {
    this._evaluationCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationCriteriaInput() {
    return this._evaluationCriteria.internalValue;
  }

  // metric_query - computed: false, optional: true, required: false
  private _metricQuery = new CloudwatchMetricAlarmMetricQueryList(this, "metric_query", true);
  public get metricQuery() {
    return this._metricQuery;
  }
  public putMetricQuery(value: CloudwatchMetricAlarmMetricQuery[] | cdktn.IResolvable) {
    this._metricQuery.internalValue = value;
  }
  public resetMetricQuery() {
    this._metricQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricQueryInput() {
    return this._metricQuery.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions_enabled: cdktn.booleanToTerraform(this._actionsEnabled),
      alarm_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._alarmActions),
      alarm_description: cdktn.stringToTerraform(this._alarmDescription),
      alarm_name: cdktn.stringToTerraform(this._alarmName),
      comparison_operator: cdktn.stringToTerraform(this._comparisonOperator),
      datapoints_to_alarm: cdktn.numberToTerraform(this._datapointsToAlarm),
      dimensions: cdktn.hashMapper(cdktn.stringToTerraform)(this._dimensions),
      evaluate_low_sample_count_percentiles: cdktn.stringToTerraform(this._evaluateLowSampleCountPercentiles),
      evaluation_interval: cdktn.numberToTerraform(this._evaluationInterval),
      evaluation_periods: cdktn.numberToTerraform(this._evaluationPeriods),
      extended_statistic: cdktn.stringToTerraform(this._extendedStatistic),
      id: cdktn.stringToTerraform(this._id),
      insufficient_data_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._insufficientDataActions),
      metric_name: cdktn.stringToTerraform(this._metricName),
      namespace: cdktn.stringToTerraform(this._namespace),
      ok_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._okActions),
      period: cdktn.numberToTerraform(this._period),
      region: cdktn.stringToTerraform(this._region),
      statistic: cdktn.stringToTerraform(this._statistic),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      threshold: cdktn.numberToTerraform(this._threshold),
      threshold_metric_id: cdktn.stringToTerraform(this._thresholdMetricId),
      treat_missing_data: cdktn.stringToTerraform(this._treatMissingData),
      unit: cdktn.stringToTerraform(this._unit),
      evaluation_criteria: cloudwatchMetricAlarmEvaluationCriteriaToTerraform(this._evaluationCriteria.internalValue),
      metric_query: cdktn.listMapper(cloudwatchMetricAlarmMetricQueryToTerraform, true)(this._metricQuery.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions_enabled: {
        value: cdktn.booleanToHclTerraform(this._actionsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alarm_actions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._alarmActions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alarm_description: {
        value: cdktn.stringToHclTerraform(this._alarmDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alarm_name: {
        value: cdktn.stringToHclTerraform(this._alarmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comparison_operator: {
        value: cdktn.stringToHclTerraform(this._comparisonOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datapoints_to_alarm: {
        value: cdktn.numberToHclTerraform(this._datapointsToAlarm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dimensions: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._dimensions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      evaluate_low_sample_count_percentiles: {
        value: cdktn.stringToHclTerraform(this._evaluateLowSampleCountPercentiles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evaluation_interval: {
        value: cdktn.numberToHclTerraform(this._evaluationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      evaluation_periods: {
        value: cdktn.numberToHclTerraform(this._evaluationPeriods),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extended_statistic: {
        value: cdktn.stringToHclTerraform(this._extendedStatistic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insufficient_data_actions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._insufficientDataActions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      metric_name: {
        value: cdktn.stringToHclTerraform(this._metricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ok_actions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._okActions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      period: {
        value: cdktn.numberToHclTerraform(this._period),
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
      statistic: {
        value: cdktn.stringToHclTerraform(this._statistic),
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
      threshold: {
        value: cdktn.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_metric_id: {
        value: cdktn.stringToHclTerraform(this._thresholdMetricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      treat_missing_data: {
        value: cdktn.stringToHclTerraform(this._treatMissingData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit: {
        value: cdktn.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evaluation_criteria: {
        value: cloudwatchMetricAlarmEvaluationCriteriaToHclTerraform(this._evaluationCriteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchMetricAlarmEvaluationCriteriaList",
      },
      metric_query: {
        value: cdktn.listMapperHcl(cloudwatchMetricAlarmMetricQueryToHclTerraform, true)(this._metricQuery.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudwatchMetricAlarmMetricQueryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
