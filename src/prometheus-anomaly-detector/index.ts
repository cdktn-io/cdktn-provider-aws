/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PrometheusAnomalyDetectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#alias PrometheusAnomalyDetector#alias}
  */
  readonly alias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#evaluation_interval_in_seconds PrometheusAnomalyDetector#evaluation_interval_in_seconds}
  */
  readonly evaluationIntervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#labels PrometheusAnomalyDetector#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#region PrometheusAnomalyDetector#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#tags PrometheusAnomalyDetector#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#workspace_id PrometheusAnomalyDetector#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#configuration PrometheusAnomalyDetector#configuration}
  */
  readonly configuration?: PrometheusAnomalyDetectorConfiguration[] | cdktn.IResolvable;
  /**
  * missing_data_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#missing_data_action PrometheusAnomalyDetector#missing_data_action}
  */
  readonly missingDataAction?: PrometheusAnomalyDetectorMissingDataAction[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#timeouts PrometheusAnomalyDetector#timeouts}
  */
  readonly timeouts?: PrometheusAnomalyDetectorTimeouts;
}
export interface PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#amount PrometheusAnomalyDetector#amount}
  */
  readonly amount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#ratio PrometheusAnomalyDetector#ratio}
  */
  readonly ratio?: number;
}

export function prometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveToTerraform(struct?: PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amount: cdktn.numberToTerraform(struct!.amount),
    ratio: cdktn.numberToTerraform(struct!.ratio),
  }
}


export function prometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveToHclTerraform(struct?: PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amount: {
      value: cdktn.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratio: {
      value: cdktn.numberToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._ratio = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._ratio = value.ratio;
    }
  }

  // amount - computed: false, optional: true, required: false
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // ratio - computed: false, optional: true, required: false
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }
}

export class PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList extends cdktn.ComplexList {
  public internalValue? : PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove[] | cdktn.IResolvable

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
  public get(index: number): PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference {
    return new PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#amount PrometheusAnomalyDetector#amount}
  */
  readonly amount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#ratio PrometheusAnomalyDetector#ratio}
  */
  readonly ratio?: number;
}

export function prometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowToTerraform(struct?: PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amount: cdktn.numberToTerraform(struct!.amount),
    ratio: cdktn.numberToTerraform(struct!.ratio),
  }
}


export function prometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowToHclTerraform(struct?: PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amount: {
      value: cdktn.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratio: {
      value: cdktn.numberToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._ratio = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._ratio = value.ratio;
    }
  }

  // amount - computed: false, optional: true, required: false
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // ratio - computed: false, optional: true, required: false
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }
}

export class PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList extends cdktn.ComplexList {
  public internalValue? : PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow[] | cdktn.IResolvable

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
  public get(index: number): PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference {
    return new PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrometheusAnomalyDetectorConfigurationRandomCutForest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#query PrometheusAnomalyDetector#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#sample_size PrometheusAnomalyDetector#sample_size}
  */
  readonly sampleSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#shingle_size PrometheusAnomalyDetector#shingle_size}
  */
  readonly shingleSize?: number;
  /**
  * ignore_near_expected_from_above block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#ignore_near_expected_from_above PrometheusAnomalyDetector#ignore_near_expected_from_above}
  */
  readonly ignoreNearExpectedFromAbove?: PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove[] | cdktn.IResolvable;
  /**
  * ignore_near_expected_from_below block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#ignore_near_expected_from_below PrometheusAnomalyDetector#ignore_near_expected_from_below}
  */
  readonly ignoreNearExpectedFromBelow?: PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow[] | cdktn.IResolvable;
}

export function prometheusAnomalyDetectorConfigurationRandomCutForestToTerraform(struct?: PrometheusAnomalyDetectorConfigurationRandomCutForest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
    sample_size: cdktn.numberToTerraform(struct!.sampleSize),
    shingle_size: cdktn.numberToTerraform(struct!.shingleSize),
    ignore_near_expected_from_above: cdktn.listMapper(prometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveToTerraform, true)(struct!.ignoreNearExpectedFromAbove),
    ignore_near_expected_from_below: cdktn.listMapper(prometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowToTerraform, true)(struct!.ignoreNearExpectedFromBelow),
  }
}


export function prometheusAnomalyDetectorConfigurationRandomCutForestToHclTerraform(struct?: PrometheusAnomalyDetectorConfigurationRandomCutForest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_size: {
      value: cdktn.numberToHclTerraform(struct!.sampleSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shingle_size: {
      value: cdktn.numberToHclTerraform(struct!.shingleSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_near_expected_from_above: {
      value: cdktn.listMapperHcl(prometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveToHclTerraform, true)(struct!.ignoreNearExpectedFromAbove),
      isBlock: true,
      type: "list",
      storageClassType: "PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList",
    },
    ignore_near_expected_from_below: {
      value: cdktn.listMapperHcl(prometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowToHclTerraform, true)(struct!.ignoreNearExpectedFromBelow),
      isBlock: true,
      type: "list",
      storageClassType: "PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrometheusAnomalyDetectorConfigurationRandomCutForest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._sampleSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleSize = this._sampleSize;
    }
    if (this._shingleSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.shingleSize = this._shingleSize;
    }
    if (this._ignoreNearExpectedFromAbove?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreNearExpectedFromAbove = this._ignoreNearExpectedFromAbove?.internalValue;
    }
    if (this._ignoreNearExpectedFromBelow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreNearExpectedFromBelow = this._ignoreNearExpectedFromBelow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrometheusAnomalyDetectorConfigurationRandomCutForest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
      this._sampleSize = undefined;
      this._shingleSize = undefined;
      this._ignoreNearExpectedFromAbove.internalValue = undefined;
      this._ignoreNearExpectedFromBelow.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
      this._sampleSize = value.sampleSize;
      this._shingleSize = value.shingleSize;
      this._ignoreNearExpectedFromAbove.internalValue = value.ignoreNearExpectedFromAbove;
      this._ignoreNearExpectedFromBelow.internalValue = value.ignoreNearExpectedFromBelow;
    }
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

  // sample_size - computed: true, optional: true, required: false
  private _sampleSize?: number; 
  public get sampleSize() {
    return this.getNumberAttribute('sample_size');
  }
  public set sampleSize(value: number) {
    this._sampleSize = value;
  }
  public resetSampleSize() {
    this._sampleSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleSizeInput() {
    return this._sampleSize;
  }

  // shingle_size - computed: true, optional: true, required: false
  private _shingleSize?: number; 
  public get shingleSize() {
    return this.getNumberAttribute('shingle_size');
  }
  public set shingleSize(value: number) {
    this._shingleSize = value;
  }
  public resetShingleSize() {
    this._shingleSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shingleSizeInput() {
    return this._shingleSize;
  }

  // ignore_near_expected_from_above - computed: false, optional: true, required: false
  private _ignoreNearExpectedFromAbove = new PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList(this, "ignore_near_expected_from_above", false);
  public get ignoreNearExpectedFromAbove() {
    return this._ignoreNearExpectedFromAbove;
  }
  public putIgnoreNearExpectedFromAbove(value: PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove[] | cdktn.IResolvable) {
    this._ignoreNearExpectedFromAbove.internalValue = value;
  }
  public resetIgnoreNearExpectedFromAbove() {
    this._ignoreNearExpectedFromAbove.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNearExpectedFromAboveInput() {
    return this._ignoreNearExpectedFromAbove.internalValue;
  }

  // ignore_near_expected_from_below - computed: false, optional: true, required: false
  private _ignoreNearExpectedFromBelow = new PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList(this, "ignore_near_expected_from_below", false);
  public get ignoreNearExpectedFromBelow() {
    return this._ignoreNearExpectedFromBelow;
  }
  public putIgnoreNearExpectedFromBelow(value: PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow[] | cdktn.IResolvable) {
    this._ignoreNearExpectedFromBelow.internalValue = value;
  }
  public resetIgnoreNearExpectedFromBelow() {
    this._ignoreNearExpectedFromBelow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNearExpectedFromBelowInput() {
    return this._ignoreNearExpectedFromBelow.internalValue;
  }
}

export class PrometheusAnomalyDetectorConfigurationRandomCutForestList extends cdktn.ComplexList {
  public internalValue? : PrometheusAnomalyDetectorConfigurationRandomCutForest[] | cdktn.IResolvable

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
  public get(index: number): PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference {
    return new PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrometheusAnomalyDetectorConfiguration {
  /**
  * random_cut_forest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#random_cut_forest PrometheusAnomalyDetector#random_cut_forest}
  */
  readonly randomCutForest?: PrometheusAnomalyDetectorConfigurationRandomCutForest[] | cdktn.IResolvable;
}

export function prometheusAnomalyDetectorConfigurationToTerraform(struct?: PrometheusAnomalyDetectorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    random_cut_forest: cdktn.listMapper(prometheusAnomalyDetectorConfigurationRandomCutForestToTerraform, true)(struct!.randomCutForest),
  }
}


export function prometheusAnomalyDetectorConfigurationToHclTerraform(struct?: PrometheusAnomalyDetectorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    random_cut_forest: {
      value: cdktn.listMapperHcl(prometheusAnomalyDetectorConfigurationRandomCutForestToHclTerraform, true)(struct!.randomCutForest),
      isBlock: true,
      type: "list",
      storageClassType: "PrometheusAnomalyDetectorConfigurationRandomCutForestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrometheusAnomalyDetectorConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrometheusAnomalyDetectorConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._randomCutForest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.randomCutForest = this._randomCutForest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrometheusAnomalyDetectorConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._randomCutForest.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._randomCutForest.internalValue = value.randomCutForest;
    }
  }

  // random_cut_forest - computed: false, optional: true, required: false
  private _randomCutForest = new PrometheusAnomalyDetectorConfigurationRandomCutForestList(this, "random_cut_forest", false);
  public get randomCutForest() {
    return this._randomCutForest;
  }
  public putRandomCutForest(value: PrometheusAnomalyDetectorConfigurationRandomCutForest[] | cdktn.IResolvable) {
    this._randomCutForest.internalValue = value;
  }
  public resetRandomCutForest() {
    this._randomCutForest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomCutForestInput() {
    return this._randomCutForest.internalValue;
  }
}

export class PrometheusAnomalyDetectorConfigurationList extends cdktn.ComplexList {
  public internalValue? : PrometheusAnomalyDetectorConfiguration[] | cdktn.IResolvable

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
  public get(index: number): PrometheusAnomalyDetectorConfigurationOutputReference {
    return new PrometheusAnomalyDetectorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrometheusAnomalyDetectorMissingDataAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#mark_as_anomaly PrometheusAnomalyDetector#mark_as_anomaly}
  */
  readonly markAsAnomaly?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#skip PrometheusAnomalyDetector#skip}
  */
  readonly skip?: boolean | cdktn.IResolvable;
}

export function prometheusAnomalyDetectorMissingDataActionToTerraform(struct?: PrometheusAnomalyDetectorMissingDataAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mark_as_anomaly: cdktn.booleanToTerraform(struct!.markAsAnomaly),
    skip: cdktn.booleanToTerraform(struct!.skip),
  }
}


export function prometheusAnomalyDetectorMissingDataActionToHclTerraform(struct?: PrometheusAnomalyDetectorMissingDataAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mark_as_anomaly: {
      value: cdktn.booleanToHclTerraform(struct!.markAsAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip: {
      value: cdktn.booleanToHclTerraform(struct!.skip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrometheusAnomalyDetectorMissingDataActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrometheusAnomalyDetectorMissingDataAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._markAsAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.markAsAnomaly = this._markAsAnomaly;
    }
    if (this._skip !== undefined) {
      hasAnyValues = true;
      internalValueResult.skip = this._skip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrometheusAnomalyDetectorMissingDataAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._markAsAnomaly = undefined;
      this._skip = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._markAsAnomaly = value.markAsAnomaly;
      this._skip = value.skip;
    }
  }

  // mark_as_anomaly - computed: false, optional: true, required: false
  private _markAsAnomaly?: boolean | cdktn.IResolvable; 
  public get markAsAnomaly() {
    return this.getBooleanAttribute('mark_as_anomaly');
  }
  public set markAsAnomaly(value: boolean | cdktn.IResolvable) {
    this._markAsAnomaly = value;
  }
  public resetMarkAsAnomaly() {
    this._markAsAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markAsAnomalyInput() {
    return this._markAsAnomaly;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: boolean | cdktn.IResolvable; 
  public get skip() {
    return this.getBooleanAttribute('skip');
  }
  public set skip(value: boolean | cdktn.IResolvable) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }
}

export class PrometheusAnomalyDetectorMissingDataActionList extends cdktn.ComplexList {
  public internalValue? : PrometheusAnomalyDetectorMissingDataAction[] | cdktn.IResolvable

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
  public get(index: number): PrometheusAnomalyDetectorMissingDataActionOutputReference {
    return new PrometheusAnomalyDetectorMissingDataActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrometheusAnomalyDetectorTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#create PrometheusAnomalyDetector#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#delete PrometheusAnomalyDetector#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#update PrometheusAnomalyDetector#update}
  */
  readonly update?: string;
}

export function prometheusAnomalyDetectorTimeoutsToTerraform(struct?: PrometheusAnomalyDetectorTimeouts | cdktn.IResolvable): any {
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


export function prometheusAnomalyDetectorTimeoutsToHclTerraform(struct?: PrometheusAnomalyDetectorTimeouts | cdktn.IResolvable): any {
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

export class PrometheusAnomalyDetectorTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrometheusAnomalyDetectorTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PrometheusAnomalyDetectorTimeouts | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector aws_prometheus_anomaly_detector}
*/
export class PrometheusAnomalyDetector extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_prometheus_anomaly_detector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PrometheusAnomalyDetector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrometheusAnomalyDetector to import
  * @param importFromId The id of the existing PrometheusAnomalyDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrometheusAnomalyDetector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_prometheus_anomaly_detector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_anomaly_detector aws_prometheus_anomaly_detector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrometheusAnomalyDetectorConfig
  */
  public constructor(scope: Construct, id: string, config: PrometheusAnomalyDetectorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_prometheus_anomaly_detector',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.60.0',
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
    this._alias = config.alias;
    this._evaluationIntervalInSeconds = config.evaluationIntervalInSeconds;
    this._labels = config.labels;
    this._region = config.region;
    this._tags = config.tags;
    this._workspaceId = config.workspaceId;
    this._configuration.internalValue = config.configuration;
    this._missingDataAction.internalValue = config.missingDataAction;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // evaluation_interval_in_seconds - computed: true, optional: true, required: false
  private _evaluationIntervalInSeconds?: number; 
  public get evaluationIntervalInSeconds() {
    return this.getNumberAttribute('evaluation_interval_in_seconds');
  }
  public set evaluationIntervalInSeconds(value: number) {
    this._evaluationIntervalInSeconds = value;
  }
  public resetEvaluationIntervalInSeconds() {
    this._evaluationIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationIntervalInSecondsInput() {
    return this._evaluationIntervalInSeconds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new PrometheusAnomalyDetectorConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: PrometheusAnomalyDetectorConfiguration[] | cdktn.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // missing_data_action - computed: false, optional: true, required: false
  private _missingDataAction = new PrometheusAnomalyDetectorMissingDataActionList(this, "missing_data_action", false);
  public get missingDataAction() {
    return this._missingDataAction;
  }
  public putMissingDataAction(value: PrometheusAnomalyDetectorMissingDataAction[] | cdktn.IResolvable) {
    this._missingDataAction.internalValue = value;
  }
  public resetMissingDataAction() {
    this._missingDataAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingDataActionInput() {
    return this._missingDataAction.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrometheusAnomalyDetectorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrometheusAnomalyDetectorTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktn.stringToTerraform(this._alias),
      evaluation_interval_in_seconds: cdktn.numberToTerraform(this._evaluationIntervalInSeconds),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      workspace_id: cdktn.stringToTerraform(this._workspaceId),
      configuration: cdktn.listMapper(prometheusAnomalyDetectorConfigurationToTerraform, true)(this._configuration.internalValue),
      missing_data_action: cdktn.listMapper(prometheusAnomalyDetectorMissingDataActionToTerraform, true)(this._missingDataAction.internalValue),
      timeouts: prometheusAnomalyDetectorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktn.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evaluation_interval_in_seconds: {
        value: cdktn.numberToHclTerraform(this._evaluationIntervalInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      workspace_id: {
        value: cdktn.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktn.listMapperHcl(prometheusAnomalyDetectorConfigurationToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrometheusAnomalyDetectorConfigurationList",
      },
      missing_data_action: {
        value: cdktn.listMapperHcl(prometheusAnomalyDetectorMissingDataActionToHclTerraform, true)(this._missingDataAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrometheusAnomalyDetectorMissingDataActionList",
      },
      timeouts: {
        value: prometheusAnomalyDetectorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrometheusAnomalyDetectorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
