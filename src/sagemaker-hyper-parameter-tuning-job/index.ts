/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerHyperParameterTuningJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#name SagemakerHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#region SagemakerHyperParameterTuningJob#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#tags SagemakerHyperParameterTuningJob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * autotune block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#autotune SagemakerHyperParameterTuningJob#autotune}
  */
  readonly autotune?: SagemakerHyperParameterTuningJobAutotune[] | cdktn.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#config SagemakerHyperParameterTuningJob#config}
  */
  readonly config?: SagemakerHyperParameterTuningJobConfigA[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#timeouts SagemakerHyperParameterTuningJob#timeouts}
  */
  readonly timeouts?: SagemakerHyperParameterTuningJobTimeouts;
  /**
  * training_job_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#training_job_definition SagemakerHyperParameterTuningJob#training_job_definition}
  */
  readonly trainingJobDefinition?: SagemakerHyperParameterTuningJobTrainingJobDefinition[] | cdktn.IResolvable;
  /**
  * training_job_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#training_job_definitions SagemakerHyperParameterTuningJob#training_job_definitions}
  */
  readonly trainingJobDefinitions?: SagemakerHyperParameterTuningJobTrainingJobDefinitions[] | cdktn.IResolvable;
  /**
  * warm_start_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#warm_start_config SagemakerHyperParameterTuningJob#warm_start_config}
  */
  readonly warmStartConfig?: SagemakerHyperParameterTuningJobWarmStartConfig[] | cdktn.IResolvable;
}
export interface SagemakerHyperParameterTuningJobAutotune {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#mode SagemakerHyperParameterTuningJob#mode}
  */
  readonly mode: string;
}

export function sagemakerHyperParameterTuningJobAutotuneToTerraform(struct?: SagemakerHyperParameterTuningJobAutotune | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function sagemakerHyperParameterTuningJobAutotuneToHclTerraform(struct?: SagemakerHyperParameterTuningJobAutotune | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobAutotuneOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobAutotune | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobAutotune | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class SagemakerHyperParameterTuningJobAutotuneList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobAutotune[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobAutotuneOutputReference {
    return new SagemakerHyperParameterTuningJobAutotuneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobConfigObjective {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#metric_name SagemakerHyperParameterTuningJob#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#type SagemakerHyperParameterTuningJob#type}
  */
  readonly type: string;
}

export function sagemakerHyperParameterTuningJobConfigObjectiveToTerraform(struct?: SagemakerHyperParameterTuningJobConfigObjective | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function sagemakerHyperParameterTuningJobConfigObjectiveToHclTerraform(struct?: SagemakerHyperParameterTuningJobConfigObjective | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
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

export class SagemakerHyperParameterTuningJobConfigObjectiveOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobConfigObjective | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobConfigObjective | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._type = value.type;
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

export class SagemakerHyperParameterTuningJobConfigObjectiveList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobConfigObjective[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobConfigObjectiveOutputReference {
    return new SagemakerHyperParameterTuningJobConfigObjectiveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobConfigParameterRangesAutoParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#name SagemakerHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#value_hint SagemakerHyperParameterTuningJob#value_hint}
  */
  readonly valueHint: string;
}

export function sagemakerHyperParameterTuningJobConfigParameterRangesAutoParametersToTerraform(struct?: SagemakerHyperParameterTuningJobConfigParameterRangesAutoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value_hint: cdktn.stringToTerraform(struct!.valueHint),
  }
}


export function sagemakerHyperParameterTuningJobConfigParameterRangesAutoParametersToHclTerraform(struct?: SagemakerHyperParameterTuningJobConfigParameterRangesAutoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_hint: {
      value: cdktn.stringToHclTerraform(struct!.valueHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobConfigParameterRangesAutoParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobConfigParameterRangesAutoParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueHint = this._valueHint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobConfigParameterRangesAutoParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueHint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueHint = value.valueHint;
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

  // value_hint - computed: false, optional: false, required: true
  private _valueHint?: string; 
  public get valueHint() {
    return this.getStringAttribute('value_hint');
  }
  public set valueHint(value: string) {
    this._valueHint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueHintInput() {
    return this._valueHint;
  }
}

export class SagemakerHyperParameterTuningJobConfigParameterRangesAutoParametersList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobConfigParameterRangesAutoParameters[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobConfigParameterRangesAutoParametersOutputReference {
    return new SagemakerHyperParameterTuningJobConfigParameterRangesAutoParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#name SagemakerHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#values SagemakerHyperParameterTuningJob#values}
  */
  readonly values: string[];
}

export function sagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesToTerraform(struct?: SagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function sagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesToHclTerraform(struct?: SagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRanges[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesOutputReference {
    return new SagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#max_value SagemakerHyperParameterTuningJob#max_value}
  */
  readonly maxValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#min_value SagemakerHyperParameterTuningJob#min_value}
  */
  readonly minValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#name SagemakerHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#scaling_type SagemakerHyperParameterTuningJob#scaling_type}
  */
  readonly scalingType?: string;
}

export function sagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesToTerraform(struct?: SagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.stringToTerraform(struct!.maxValue),
    min_value: cdktn.stringToTerraform(struct!.minValue),
    name: cdktn.stringToTerraform(struct!.name),
    scaling_type: cdktn.stringToTerraform(struct!.scalingType),
  }
}


export function sagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesToHclTerraform(struct?: SagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktn.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktn.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: true, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class SagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRanges[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesOutputReference {
    return new SagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#max_value SagemakerHyperParameterTuningJob#max_value}
  */
  readonly maxValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#min_value SagemakerHyperParameterTuningJob#min_value}
  */
  readonly minValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#name SagemakerHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#scaling_type SagemakerHyperParameterTuningJob#scaling_type}
  */
  readonly scalingType?: string;
}

export function sagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesToTerraform(struct?: SagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.stringToTerraform(struct!.maxValue),
    min_value: cdktn.stringToTerraform(struct!.minValue),
    name: cdktn.stringToTerraform(struct!.name),
    scaling_type: cdktn.stringToTerraform(struct!.scalingType),
  }
}


export function sagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesToHclTerraform(struct?: SagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktn.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktn.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: true, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class SagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRanges[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesOutputReference {
    return new SagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobConfigParameterRanges {
  /**
  * auto_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#auto_parameters SagemakerHyperParameterTuningJob#auto_parameters}
  */
  readonly autoParameters?: SagemakerHyperParameterTuningJobConfigParameterRangesAutoParameters[] | cdktn.IResolvable;
  /**
  * categorical_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#categorical_parameter_ranges SagemakerHyperParameterTuningJob#categorical_parameter_ranges}
  */
  readonly categoricalParameterRanges?: SagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRanges[] | cdktn.IResolvable;
  /**
  * continuous_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#continuous_parameter_ranges SagemakerHyperParameterTuningJob#continuous_parameter_ranges}
  */
  readonly continuousParameterRanges?: SagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRanges[] | cdktn.IResolvable;
  /**
  * integer_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#integer_parameter_ranges SagemakerHyperParameterTuningJob#integer_parameter_ranges}
  */
  readonly integerParameterRanges?: SagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRanges[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobConfigParameterRangesToTerraform(struct?: SagemakerHyperParameterTuningJobConfigParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_parameters: cdktn.listMapper(sagemakerHyperParameterTuningJobConfigParameterRangesAutoParametersToTerraform, true)(struct!.autoParameters),
    categorical_parameter_ranges: cdktn.listMapper(sagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesToTerraform, true)(struct!.categoricalParameterRanges),
    continuous_parameter_ranges: cdktn.listMapper(sagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesToTerraform, true)(struct!.continuousParameterRanges),
    integer_parameter_ranges: cdktn.listMapper(sagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesToTerraform, true)(struct!.integerParameterRanges),
  }
}


export function sagemakerHyperParameterTuningJobConfigParameterRangesToHclTerraform(struct?: SagemakerHyperParameterTuningJobConfigParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_parameters: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobConfigParameterRangesAutoParametersToHclTerraform, true)(struct!.autoParameters),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobConfigParameterRangesAutoParametersList",
    },
    categorical_parameter_ranges: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesToHclTerraform, true)(struct!.categoricalParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesList",
    },
    continuous_parameter_ranges: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesToHclTerraform, true)(struct!.continuousParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesList",
    },
    integer_parameter_ranges: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesToHclTerraform, true)(struct!.integerParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobConfigParameterRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobConfigParameterRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoParameters = this._autoParameters?.internalValue;
    }
    if (this._categoricalParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoricalParameterRanges = this._categoricalParameterRanges?.internalValue;
    }
    if (this._continuousParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousParameterRanges = this._continuousParameterRanges?.internalValue;
    }
    if (this._integerParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerParameterRanges = this._integerParameterRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobConfigParameterRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = undefined;
      this._categoricalParameterRanges.internalValue = undefined;
      this._continuousParameterRanges.internalValue = undefined;
      this._integerParameterRanges.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = value.autoParameters;
      this._categoricalParameterRanges.internalValue = value.categoricalParameterRanges;
      this._continuousParameterRanges.internalValue = value.continuousParameterRanges;
      this._integerParameterRanges.internalValue = value.integerParameterRanges;
    }
  }

  // auto_parameters - computed: false, optional: true, required: false
  private _autoParameters = new SagemakerHyperParameterTuningJobConfigParameterRangesAutoParametersList(this, "auto_parameters", false);
  public get autoParameters() {
    return this._autoParameters;
  }
  public putAutoParameters(value: SagemakerHyperParameterTuningJobConfigParameterRangesAutoParameters[] | cdktn.IResolvable) {
    this._autoParameters.internalValue = value;
  }
  public resetAutoParameters() {
    this._autoParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoParametersInput() {
    return this._autoParameters.internalValue;
  }

  // categorical_parameter_ranges - computed: false, optional: true, required: false
  private _categoricalParameterRanges = new SagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRangesList(this, "categorical_parameter_ranges", false);
  public get categoricalParameterRanges() {
    return this._categoricalParameterRanges;
  }
  public putCategoricalParameterRanges(value: SagemakerHyperParameterTuningJobConfigParameterRangesCategoricalParameterRanges[] | cdktn.IResolvable) {
    this._categoricalParameterRanges.internalValue = value;
  }
  public resetCategoricalParameterRanges() {
    this._categoricalParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoricalParameterRangesInput() {
    return this._categoricalParameterRanges.internalValue;
  }

  // continuous_parameter_ranges - computed: false, optional: true, required: false
  private _continuousParameterRanges = new SagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRangesList(this, "continuous_parameter_ranges", false);
  public get continuousParameterRanges() {
    return this._continuousParameterRanges;
  }
  public putContinuousParameterRanges(value: SagemakerHyperParameterTuningJobConfigParameterRangesContinuousParameterRanges[] | cdktn.IResolvable) {
    this._continuousParameterRanges.internalValue = value;
  }
  public resetContinuousParameterRanges() {
    this._continuousParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousParameterRangesInput() {
    return this._continuousParameterRanges.internalValue;
  }

  // integer_parameter_ranges - computed: false, optional: true, required: false
  private _integerParameterRanges = new SagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRangesList(this, "integer_parameter_ranges", false);
  public get integerParameterRanges() {
    return this._integerParameterRanges;
  }
  public putIntegerParameterRanges(value: SagemakerHyperParameterTuningJobConfigParameterRangesIntegerParameterRanges[] | cdktn.IResolvable) {
    this._integerParameterRanges.internalValue = value;
  }
  public resetIntegerParameterRanges() {
    this._integerParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerParameterRangesInput() {
    return this._integerParameterRanges.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobConfigParameterRangesList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobConfigParameterRanges[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobConfigParameterRangesOutputReference {
    return new SagemakerHyperParameterTuningJobConfigParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobConfigResourceLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#max_number_of_training_jobs SagemakerHyperParameterTuningJob#max_number_of_training_jobs}
  */
  readonly maxNumberOfTrainingJobs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#max_parallel_training_jobs SagemakerHyperParameterTuningJob#max_parallel_training_jobs}
  */
  readonly maxParallelTrainingJobs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#max_runtime_in_seconds SagemakerHyperParameterTuningJob#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
}

export function sagemakerHyperParameterTuningJobConfigResourceLimitsToTerraform(struct?: SagemakerHyperParameterTuningJobConfigResourceLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_number_of_training_jobs: cdktn.numberToTerraform(struct!.maxNumberOfTrainingJobs),
    max_parallel_training_jobs: cdktn.numberToTerraform(struct!.maxParallelTrainingJobs),
    max_runtime_in_seconds: cdktn.numberToTerraform(struct!.maxRuntimeInSeconds),
  }
}


export function sagemakerHyperParameterTuningJobConfigResourceLimitsToHclTerraform(struct?: SagemakerHyperParameterTuningJobConfigResourceLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_number_of_training_jobs: {
      value: cdktn.numberToHclTerraform(struct!.maxNumberOfTrainingJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_parallel_training_jobs: {
      value: cdktn.numberToHclTerraform(struct!.maxParallelTrainingJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_runtime_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxRuntimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobConfigResourceLimitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobConfigResourceLimits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNumberOfTrainingJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfTrainingJobs = this._maxNumberOfTrainingJobs;
    }
    if (this._maxParallelTrainingJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelTrainingJobs = this._maxParallelTrainingJobs;
    }
    if (this._maxRuntimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRuntimeInSeconds = this._maxRuntimeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobConfigResourceLimits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxNumberOfTrainingJobs = undefined;
      this._maxParallelTrainingJobs = undefined;
      this._maxRuntimeInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxNumberOfTrainingJobs = value.maxNumberOfTrainingJobs;
      this._maxParallelTrainingJobs = value.maxParallelTrainingJobs;
      this._maxRuntimeInSeconds = value.maxRuntimeInSeconds;
    }
  }

  // max_number_of_training_jobs - computed: true, optional: true, required: false
  private _maxNumberOfTrainingJobs?: number; 
  public get maxNumberOfTrainingJobs() {
    return this.getNumberAttribute('max_number_of_training_jobs');
  }
  public set maxNumberOfTrainingJobs(value: number) {
    this._maxNumberOfTrainingJobs = value;
  }
  public resetMaxNumberOfTrainingJobs() {
    this._maxNumberOfTrainingJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfTrainingJobsInput() {
    return this._maxNumberOfTrainingJobs;
  }

  // max_parallel_training_jobs - computed: false, optional: false, required: true
  private _maxParallelTrainingJobs?: number; 
  public get maxParallelTrainingJobs() {
    return this.getNumberAttribute('max_parallel_training_jobs');
  }
  public set maxParallelTrainingJobs(value: number) {
    this._maxParallelTrainingJobs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelTrainingJobsInput() {
    return this._maxParallelTrainingJobs;
  }

  // max_runtime_in_seconds - computed: true, optional: true, required: false
  private _maxRuntimeInSeconds?: number; 
  public get maxRuntimeInSeconds() {
    return this.getNumberAttribute('max_runtime_in_seconds');
  }
  public set maxRuntimeInSeconds(value: number) {
    this._maxRuntimeInSeconds = value;
  }
  public resetMaxRuntimeInSeconds() {
    this._maxRuntimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRuntimeInSecondsInput() {
    return this._maxRuntimeInSeconds;
  }
}

export class SagemakerHyperParameterTuningJobConfigResourceLimitsList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobConfigResourceLimits[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobConfigResourceLimitsOutputReference {
    return new SagemakerHyperParameterTuningJobConfigResourceLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#max_resource SagemakerHyperParameterTuningJob#max_resource}
  */
  readonly maxResource?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#min_resource SagemakerHyperParameterTuningJob#min_resource}
  */
  readonly minResource?: number;
}

export function sagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfigToTerraform(struct?: SagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_resource: cdktn.numberToTerraform(struct!.maxResource),
    min_resource: cdktn.numberToTerraform(struct!.minResource),
  }
}


export function sagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_resource: {
      value: cdktn.numberToHclTerraform(struct!.maxResource),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_resource: {
      value: cdktn.numberToHclTerraform(struct!.minResource),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResource = this._maxResource;
    }
    if (this._minResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.minResource = this._minResource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxResource = undefined;
      this._minResource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxResource = value.maxResource;
      this._minResource = value.minResource;
    }
  }

  // max_resource - computed: false, optional: true, required: false
  private _maxResource?: number; 
  public get maxResource() {
    return this.getNumberAttribute('max_resource');
  }
  public set maxResource(value: number) {
    this._maxResource = value;
  }
  public resetMaxResource() {
    this._maxResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResourceInput() {
    return this._maxResource;
  }

  // min_resource - computed: false, optional: true, required: false
  private _minResource?: number; 
  public get minResource() {
    return this.getNumberAttribute('min_resource');
  }
  public set minResource(value: number) {
    this._minResource = value;
  }
  public resetMinResource() {
    this._minResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minResourceInput() {
    return this._minResource;
  }
}

export class SagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfigOutputReference {
    return new SagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobConfigStrategyConfig {
  /**
  * hyperband_strategy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#hyperband_strategy_config SagemakerHyperParameterTuningJob#hyperband_strategy_config}
  */
  readonly hyperbandStrategyConfig?: SagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfig[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobConfigStrategyConfigToTerraform(struct?: SagemakerHyperParameterTuningJobConfigStrategyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hyperband_strategy_config: cdktn.listMapper(sagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfigToTerraform, true)(struct!.hyperbandStrategyConfig),
  }
}


export function sagemakerHyperParameterTuningJobConfigStrategyConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobConfigStrategyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hyperband_strategy_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfigToHclTerraform, true)(struct!.hyperbandStrategyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobConfigStrategyConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobConfigStrategyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hyperbandStrategyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperbandStrategyConfig = this._hyperbandStrategyConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobConfigStrategyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hyperbandStrategyConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hyperbandStrategyConfig.internalValue = value.hyperbandStrategyConfig;
    }
  }

  // hyperband_strategy_config - computed: false, optional: true, required: false
  private _hyperbandStrategyConfig = new SagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfigList(this, "hyperband_strategy_config", false);
  public get hyperbandStrategyConfig() {
    return this._hyperbandStrategyConfig;
  }
  public putHyperbandStrategyConfig(value: SagemakerHyperParameterTuningJobConfigStrategyConfigHyperbandStrategyConfig[] | cdktn.IResolvable) {
    this._hyperbandStrategyConfig.internalValue = value;
  }
  public resetHyperbandStrategyConfig() {
    this._hyperbandStrategyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperbandStrategyConfigInput() {
    return this._hyperbandStrategyConfig.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobConfigStrategyConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobConfigStrategyConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobConfigStrategyConfigOutputReference {
    return new SagemakerHyperParameterTuningJobConfigStrategyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImproving {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#max_number_of_training_jobs_not_improving SagemakerHyperParameterTuningJob#max_number_of_training_jobs_not_improving}
  */
  readonly maxNumberOfTrainingJobsNotImproving?: number;
}

export function sagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImprovingToTerraform(struct?: SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImproving | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_number_of_training_jobs_not_improving: cdktn.numberToTerraform(struct!.maxNumberOfTrainingJobsNotImproving),
  }
}


export function sagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImprovingToHclTerraform(struct?: SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImproving | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_number_of_training_jobs_not_improving: {
      value: cdktn.numberToHclTerraform(struct!.maxNumberOfTrainingJobsNotImproving),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImprovingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImproving | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNumberOfTrainingJobsNotImproving !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfTrainingJobsNotImproving = this._maxNumberOfTrainingJobsNotImproving;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImproving | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxNumberOfTrainingJobsNotImproving = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxNumberOfTrainingJobsNotImproving = value.maxNumberOfTrainingJobsNotImproving;
    }
  }

  // max_number_of_training_jobs_not_improving - computed: true, optional: true, required: false
  private _maxNumberOfTrainingJobsNotImproving?: number; 
  public get maxNumberOfTrainingJobsNotImproving() {
    return this.getNumberAttribute('max_number_of_training_jobs_not_improving');
  }
  public set maxNumberOfTrainingJobsNotImproving(value: number) {
    this._maxNumberOfTrainingJobsNotImproving = value;
  }
  public resetMaxNumberOfTrainingJobsNotImproving() {
    this._maxNumberOfTrainingJobsNotImproving = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfTrainingJobsNotImprovingInput() {
    return this._maxNumberOfTrainingJobsNotImproving;
  }
}

export class SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImprovingList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImproving[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImprovingOutputReference {
    return new SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImprovingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetected {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#complete_on_convergence SagemakerHyperParameterTuningJob#complete_on_convergence}
  */
  readonly completeOnConvergence?: string;
}

export function sagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetectedToTerraform(struct?: SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetected | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    complete_on_convergence: cdktn.stringToTerraform(struct!.completeOnConvergence),
  }
}


export function sagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetectedToHclTerraform(struct?: SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetected | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    complete_on_convergence: {
      value: cdktn.stringToHclTerraform(struct!.completeOnConvergence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetectedOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetected | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._completeOnConvergence !== undefined) {
      hasAnyValues = true;
      internalValueResult.completeOnConvergence = this._completeOnConvergence;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetected | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._completeOnConvergence = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._completeOnConvergence = value.completeOnConvergence;
    }
  }

  // complete_on_convergence - computed: false, optional: true, required: false
  private _completeOnConvergence?: string; 
  public get completeOnConvergence() {
    return this.getStringAttribute('complete_on_convergence');
  }
  public set completeOnConvergence(value: string) {
    this._completeOnConvergence = value;
  }
  public resetCompleteOnConvergence() {
    this._completeOnConvergence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completeOnConvergenceInput() {
    return this._completeOnConvergence;
  }
}

export class SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetectedList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetected[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetectedOutputReference {
    return new SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetectedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#target_objective_metric_value SagemakerHyperParameterTuningJob#target_objective_metric_value}
  */
  readonly targetObjectiveMetricValue?: number;
  /**
  * best_objective_not_improving block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#best_objective_not_improving SagemakerHyperParameterTuningJob#best_objective_not_improving}
  */
  readonly bestObjectiveNotImproving?: SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImproving[] | cdktn.IResolvable;
  /**
  * convergence_detected block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#convergence_detected SagemakerHyperParameterTuningJob#convergence_detected}
  */
  readonly convergenceDetected?: SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetected[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaToTerraform(struct?: SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_objective_metric_value: cdktn.numberToTerraform(struct!.targetObjectiveMetricValue),
    best_objective_not_improving: cdktn.listMapper(sagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImprovingToTerraform, true)(struct!.bestObjectiveNotImproving),
    convergence_detected: cdktn.listMapper(sagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetectedToTerraform, true)(struct!.convergenceDetected),
  }
}


export function sagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaToHclTerraform(struct?: SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_objective_metric_value: {
      value: cdktn.numberToHclTerraform(struct!.targetObjectiveMetricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    best_objective_not_improving: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImprovingToHclTerraform, true)(struct!.bestObjectiveNotImproving),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImprovingList",
    },
    convergence_detected: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetectedToHclTerraform, true)(struct!.convergenceDetected),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetectedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetObjectiveMetricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetObjectiveMetricValue = this._targetObjectiveMetricValue;
    }
    if (this._bestObjectiveNotImproving?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bestObjectiveNotImproving = this._bestObjectiveNotImproving?.internalValue;
    }
    if (this._convergenceDetected?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.convergenceDetected = this._convergenceDetected?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetObjectiveMetricValue = undefined;
      this._bestObjectiveNotImproving.internalValue = undefined;
      this._convergenceDetected.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetObjectiveMetricValue = value.targetObjectiveMetricValue;
      this._bestObjectiveNotImproving.internalValue = value.bestObjectiveNotImproving;
      this._convergenceDetected.internalValue = value.convergenceDetected;
    }
  }

  // target_objective_metric_value - computed: false, optional: true, required: false
  private _targetObjectiveMetricValue?: number; 
  public get targetObjectiveMetricValue() {
    return this.getNumberAttribute('target_objective_metric_value');
  }
  public set targetObjectiveMetricValue(value: number) {
    this._targetObjectiveMetricValue = value;
  }
  public resetTargetObjectiveMetricValue() {
    this._targetObjectiveMetricValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetObjectiveMetricValueInput() {
    return this._targetObjectiveMetricValue;
  }

  // best_objective_not_improving - computed: false, optional: true, required: false
  private _bestObjectiveNotImproving = new SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImprovingList(this, "best_objective_not_improving", false);
  public get bestObjectiveNotImproving() {
    return this._bestObjectiveNotImproving;
  }
  public putBestObjectiveNotImproving(value: SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaBestObjectiveNotImproving[] | cdktn.IResolvable) {
    this._bestObjectiveNotImproving.internalValue = value;
  }
  public resetBestObjectiveNotImproving() {
    this._bestObjectiveNotImproving.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestObjectiveNotImprovingInput() {
    return this._bestObjectiveNotImproving.internalValue;
  }

  // convergence_detected - computed: false, optional: true, required: false
  private _convergenceDetected = new SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetectedList(this, "convergence_detected", false);
  public get convergenceDetected() {
    return this._convergenceDetected;
  }
  public putConvergenceDetected(value: SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaConvergenceDetected[] | cdktn.IResolvable) {
    this._convergenceDetected.internalValue = value;
  }
  public resetConvergenceDetected() {
    this._convergenceDetected.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convergenceDetectedInput() {
    return this._convergenceDetected.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteria[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaOutputReference {
    return new SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#random_seed SagemakerHyperParameterTuningJob#random_seed}
  */
  readonly randomSeed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#strategy SagemakerHyperParameterTuningJob#strategy}
  */
  readonly strategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#training_job_early_stopping_type SagemakerHyperParameterTuningJob#training_job_early_stopping_type}
  */
  readonly trainingJobEarlyStoppingType?: string;
  /**
  * objective block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#objective SagemakerHyperParameterTuningJob#objective}
  */
  readonly objective?: SagemakerHyperParameterTuningJobConfigObjective[] | cdktn.IResolvable;
  /**
  * parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#parameter_ranges SagemakerHyperParameterTuningJob#parameter_ranges}
  */
  readonly parameterRanges?: SagemakerHyperParameterTuningJobConfigParameterRanges[] | cdktn.IResolvable;
  /**
  * resource_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#resource_limits SagemakerHyperParameterTuningJob#resource_limits}
  */
  readonly resourceLimits?: SagemakerHyperParameterTuningJobConfigResourceLimits[] | cdktn.IResolvable;
  /**
  * strategy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#strategy_config SagemakerHyperParameterTuningJob#strategy_config}
  */
  readonly strategyConfig?: SagemakerHyperParameterTuningJobConfigStrategyConfig[] | cdktn.IResolvable;
  /**
  * tuning_job_completion_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#tuning_job_completion_criteria SagemakerHyperParameterTuningJob#tuning_job_completion_criteria}
  */
  readonly tuningJobCompletionCriteria?: SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteria[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobConfigAToTerraform(struct?: SagemakerHyperParameterTuningJobConfigA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    random_seed: cdktn.numberToTerraform(struct!.randomSeed),
    strategy: cdktn.stringToTerraform(struct!.strategy),
    training_job_early_stopping_type: cdktn.stringToTerraform(struct!.trainingJobEarlyStoppingType),
    objective: cdktn.listMapper(sagemakerHyperParameterTuningJobConfigObjectiveToTerraform, true)(struct!.objective),
    parameter_ranges: cdktn.listMapper(sagemakerHyperParameterTuningJobConfigParameterRangesToTerraform, true)(struct!.parameterRanges),
    resource_limits: cdktn.listMapper(sagemakerHyperParameterTuningJobConfigResourceLimitsToTerraform, true)(struct!.resourceLimits),
    strategy_config: cdktn.listMapper(sagemakerHyperParameterTuningJobConfigStrategyConfigToTerraform, true)(struct!.strategyConfig),
    tuning_job_completion_criteria: cdktn.listMapper(sagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaToTerraform, true)(struct!.tuningJobCompletionCriteria),
  }
}


export function sagemakerHyperParameterTuningJobConfigAToHclTerraform(struct?: SagemakerHyperParameterTuningJobConfigA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    random_seed: {
      value: cdktn.numberToHclTerraform(struct!.randomSeed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktn.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_job_early_stopping_type: {
      value: cdktn.stringToHclTerraform(struct!.trainingJobEarlyStoppingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    objective: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobConfigObjectiveToHclTerraform, true)(struct!.objective),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobConfigObjectiveList",
    },
    parameter_ranges: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobConfigParameterRangesToHclTerraform, true)(struct!.parameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobConfigParameterRangesList",
    },
    resource_limits: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobConfigResourceLimitsToHclTerraform, true)(struct!.resourceLimits),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobConfigResourceLimitsList",
    },
    strategy_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobConfigStrategyConfigToHclTerraform, true)(struct!.strategyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobConfigStrategyConfigList",
    },
    tuning_job_completion_criteria: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaToHclTerraform, true)(struct!.tuningJobCompletionCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobConfigAOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobConfigA | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._randomSeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.randomSeed = this._randomSeed;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._trainingJobEarlyStoppingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingJobEarlyStoppingType = this._trainingJobEarlyStoppingType;
    }
    if (this._objective?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objective = this._objective?.internalValue;
    }
    if (this._parameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterRanges = this._parameterRanges?.internalValue;
    }
    if (this._resourceLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimits = this._resourceLimits?.internalValue;
    }
    if (this._strategyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyConfig = this._strategyConfig?.internalValue;
    }
    if (this._tuningJobCompletionCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuningJobCompletionCriteria = this._tuningJobCompletionCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobConfigA | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._randomSeed = undefined;
      this._strategy = undefined;
      this._trainingJobEarlyStoppingType = undefined;
      this._objective.internalValue = undefined;
      this._parameterRanges.internalValue = undefined;
      this._resourceLimits.internalValue = undefined;
      this._strategyConfig.internalValue = undefined;
      this._tuningJobCompletionCriteria.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._randomSeed = value.randomSeed;
      this._strategy = value.strategy;
      this._trainingJobEarlyStoppingType = value.trainingJobEarlyStoppingType;
      this._objective.internalValue = value.objective;
      this._parameterRanges.internalValue = value.parameterRanges;
      this._resourceLimits.internalValue = value.resourceLimits;
      this._strategyConfig.internalValue = value.strategyConfig;
      this._tuningJobCompletionCriteria.internalValue = value.tuningJobCompletionCriteria;
    }
  }

  // random_seed - computed: false, optional: true, required: false
  private _randomSeed?: number; 
  public get randomSeed() {
    return this.getNumberAttribute('random_seed');
  }
  public set randomSeed(value: number) {
    this._randomSeed = value;
  }
  public resetRandomSeed() {
    this._randomSeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomSeedInput() {
    return this._randomSeed;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // training_job_early_stopping_type - computed: true, optional: true, required: false
  private _trainingJobEarlyStoppingType?: string; 
  public get trainingJobEarlyStoppingType() {
    return this.getStringAttribute('training_job_early_stopping_type');
  }
  public set trainingJobEarlyStoppingType(value: string) {
    this._trainingJobEarlyStoppingType = value;
  }
  public resetTrainingJobEarlyStoppingType() {
    this._trainingJobEarlyStoppingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingJobEarlyStoppingTypeInput() {
    return this._trainingJobEarlyStoppingType;
  }

  // objective - computed: false, optional: true, required: false
  private _objective = new SagemakerHyperParameterTuningJobConfigObjectiveList(this, "objective", false);
  public get objective() {
    return this._objective;
  }
  public putObjective(value: SagemakerHyperParameterTuningJobConfigObjective[] | cdktn.IResolvable) {
    this._objective.internalValue = value;
  }
  public resetObjective() {
    this._objective.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectiveInput() {
    return this._objective.internalValue;
  }

  // parameter_ranges - computed: false, optional: true, required: false
  private _parameterRanges = new SagemakerHyperParameterTuningJobConfigParameterRangesList(this, "parameter_ranges", false);
  public get parameterRanges() {
    return this._parameterRanges;
  }
  public putParameterRanges(value: SagemakerHyperParameterTuningJobConfigParameterRanges[] | cdktn.IResolvable) {
    this._parameterRanges.internalValue = value;
  }
  public resetParameterRanges() {
    this._parameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterRangesInput() {
    return this._parameterRanges.internalValue;
  }

  // resource_limits - computed: false, optional: true, required: false
  private _resourceLimits = new SagemakerHyperParameterTuningJobConfigResourceLimitsList(this, "resource_limits", false);
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: SagemakerHyperParameterTuningJobConfigResourceLimits[] | cdktn.IResolvable) {
    this._resourceLimits.internalValue = value;
  }
  public resetResourceLimits() {
    this._resourceLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits.internalValue;
  }

  // strategy_config - computed: false, optional: true, required: false
  private _strategyConfig = new SagemakerHyperParameterTuningJobConfigStrategyConfigList(this, "strategy_config", false);
  public get strategyConfig() {
    return this._strategyConfig;
  }
  public putStrategyConfig(value: SagemakerHyperParameterTuningJobConfigStrategyConfig[] | cdktn.IResolvable) {
    this._strategyConfig.internalValue = value;
  }
  public resetStrategyConfig() {
    this._strategyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyConfigInput() {
    return this._strategyConfig.internalValue;
  }

  // tuning_job_completion_criteria - computed: false, optional: true, required: false
  private _tuningJobCompletionCriteria = new SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteriaList(this, "tuning_job_completion_criteria", false);
  public get tuningJobCompletionCriteria() {
    return this._tuningJobCompletionCriteria;
  }
  public putTuningJobCompletionCriteria(value: SagemakerHyperParameterTuningJobConfigTuningJobCompletionCriteria[] | cdktn.IResolvable) {
    this._tuningJobCompletionCriteria.internalValue = value;
  }
  public resetTuningJobCompletionCriteria() {
    this._tuningJobCompletionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuningJobCompletionCriteriaInput() {
    return this._tuningJobCompletionCriteria.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobConfigAList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobConfigA[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobConfigAOutputReference {
    return new SagemakerHyperParameterTuningJobConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#create SagemakerHyperParameterTuningJob#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#delete SagemakerHyperParameterTuningJob#delete}
  */
  readonly delete?: string;
}

export function sagemakerHyperParameterTuningJobTimeoutsToTerraform(struct?: SagemakerHyperParameterTuningJobTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function sagemakerHyperParameterTuningJobTimeoutsToHclTerraform(struct?: SagemakerHyperParameterTuningJobTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerHyperParameterTuningJobTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#maximum_retry_attempts SagemakerHyperParameterTuningJob#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategyToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_retry_attempts: cdktn.numberToTerraform(struct!.maximumRetryAttempts),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategyToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_retry_attempts: {
      value: cdktn.numberToHclTerraform(struct!.maximumRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumRetryAttempts = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
    }
  }

  // maximum_retry_attempts - computed: true, optional: true, required: false
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategyList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategy[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategyOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#name SagemakerHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#regex SagemakerHyperParameterTuningJob#regex}
  */
  readonly regex: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    regex: cdktn.stringToTerraform(struct!.regex),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
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

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitions[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#algorithm_name SagemakerHyperParameterTuningJob#algorithm_name}
  */
  readonly algorithmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#training_image SagemakerHyperParameterTuningJob#training_image}
  */
  readonly trainingImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#training_input_mode SagemakerHyperParameterTuningJob#training_input_mode}
  */
  readonly trainingInputMode: string;
  /**
  * metric_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#metric_definitions SagemakerHyperParameterTuningJob#metric_definitions}
  */
  readonly metricDefinitions?: SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitions[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    algorithm_name: cdktn.stringToTerraform(struct!.algorithmName),
    training_image: cdktn.stringToTerraform(struct!.trainingImage),
    training_input_mode: cdktn.stringToTerraform(struct!.trainingInputMode),
    metric_definitions: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsToTerraform, true)(struct!.metricDefinitions),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    algorithm_name: {
      value: cdktn.stringToHclTerraform(struct!.algorithmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_image: {
      value: cdktn.stringToHclTerraform(struct!.trainingImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_input_mode: {
      value: cdktn.stringToHclTerraform(struct!.trainingInputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_definitions: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsToHclTerraform, true)(struct!.metricDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmName = this._algorithmName;
    }
    if (this._trainingImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingImage = this._trainingImage;
    }
    if (this._trainingInputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingInputMode = this._trainingInputMode;
    }
    if (this._metricDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDefinitions = this._metricDefinitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithmName = undefined;
      this._trainingImage = undefined;
      this._trainingInputMode = undefined;
      this._metricDefinitions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithmName = value.algorithmName;
      this._trainingImage = value.trainingImage;
      this._trainingInputMode = value.trainingInputMode;
      this._metricDefinitions.internalValue = value.metricDefinitions;
    }
  }

  // algorithm_name - computed: true, optional: true, required: false
  private _algorithmName?: string; 
  public get algorithmName() {
    return this.getStringAttribute('algorithm_name');
  }
  public set algorithmName(value: string) {
    this._algorithmName = value;
  }
  public resetAlgorithmName() {
    this._algorithmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmNameInput() {
    return this._algorithmName;
  }

  // training_image - computed: true, optional: true, required: false
  private _trainingImage?: string; 
  public get trainingImage() {
    return this.getStringAttribute('training_image');
  }
  public set trainingImage(value: string) {
    this._trainingImage = value;
  }
  public resetTrainingImage() {
    this._trainingImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingImageInput() {
    return this._trainingImage;
  }

  // training_input_mode - computed: false, optional: false, required: true
  private _trainingInputMode?: string; 
  public get trainingInputMode() {
    return this.getStringAttribute('training_input_mode');
  }
  public set trainingInputMode(value: string) {
    this._trainingInputMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingInputModeInput() {
    return this._trainingInputMode;
  }

  // metric_definitions - computed: false, optional: true, required: false
  private _metricDefinitions = new SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitionsList(this, "metric_definitions", false);
  public get metricDefinitions() {
    return this._metricDefinitions;
  }
  public putMetricDefinitions(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationMetricDefinitions[] | cdktn.IResolvable) {
    this._metricDefinitions.internalValue = value;
  }
  public resetMetricDefinitions() {
    this._metricDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDefinitionsInput() {
    return this._metricDefinitions.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecification[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#local_path SagemakerHyperParameterTuningJob#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_uri SagemakerHyperParameterTuningJob#s3_uri}
  */
  readonly s3Uri: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    local_path: cdktn.stringToTerraform(struct!.localPath),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPath = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPath = value.localPath;
      this._s3Uri = value.s3Uri;
    }
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#name SagemakerHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#value_hint SagemakerHyperParameterTuningJob#value_hint}
  */
  readonly valueHint: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParametersToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value_hint: cdktn.stringToTerraform(struct!.valueHint),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParametersToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_hint: {
      value: cdktn.stringToHclTerraform(struct!.valueHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueHint = this._valueHint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueHint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueHint = value.valueHint;
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

  // value_hint - computed: false, optional: false, required: true
  private _valueHint?: string; 
  public get valueHint() {
    return this.getStringAttribute('value_hint');
  }
  public set valueHint(value: string) {
    this._valueHint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueHintInput() {
    return this._valueHint;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParametersList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParameters[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParametersOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#name SagemakerHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#values SagemakerHyperParameterTuningJob#values}
  */
  readonly values: string[];
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRanges[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#max_value SagemakerHyperParameterTuningJob#max_value}
  */
  readonly maxValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#min_value SagemakerHyperParameterTuningJob#min_value}
  */
  readonly minValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#name SagemakerHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#scaling_type SagemakerHyperParameterTuningJob#scaling_type}
  */
  readonly scalingType?: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.stringToTerraform(struct!.maxValue),
    min_value: cdktn.stringToTerraform(struct!.minValue),
    name: cdktn.stringToTerraform(struct!.name),
    scaling_type: cdktn.stringToTerraform(struct!.scalingType),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktn.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktn.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: true, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRanges[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#max_value SagemakerHyperParameterTuningJob#max_value}
  */
  readonly maxValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#min_value SagemakerHyperParameterTuningJob#min_value}
  */
  readonly minValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#name SagemakerHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#scaling_type SagemakerHyperParameterTuningJob#scaling_type}
  */
  readonly scalingType?: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.stringToTerraform(struct!.maxValue),
    min_value: cdktn.stringToTerraform(struct!.minValue),
    name: cdktn.stringToTerraform(struct!.name),
    scaling_type: cdktn.stringToTerraform(struct!.scalingType),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktn.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktn.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: true, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRanges[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRanges {
  /**
  * auto_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#auto_parameters SagemakerHyperParameterTuningJob#auto_parameters}
  */
  readonly autoParameters?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParameters[] | cdktn.IResolvable;
  /**
  * categorical_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#categorical_parameter_ranges SagemakerHyperParameterTuningJob#categorical_parameter_ranges}
  */
  readonly categoricalParameterRanges?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRanges[] | cdktn.IResolvable;
  /**
  * continuous_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#continuous_parameter_ranges SagemakerHyperParameterTuningJob#continuous_parameter_ranges}
  */
  readonly continuousParameterRanges?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRanges[] | cdktn.IResolvable;
  /**
  * integer_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#integer_parameter_ranges SagemakerHyperParameterTuningJob#integer_parameter_ranges}
  */
  readonly integerParameterRanges?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRanges[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_parameters: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParametersToTerraform, true)(struct!.autoParameters),
    categorical_parameter_ranges: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesToTerraform, true)(struct!.categoricalParameterRanges),
    continuous_parameter_ranges: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesToTerraform, true)(struct!.continuousParameterRanges),
    integer_parameter_ranges: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesToTerraform, true)(struct!.integerParameterRanges),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_parameters: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParametersToHclTerraform, true)(struct!.autoParameters),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParametersList",
    },
    categorical_parameter_ranges: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesToHclTerraform, true)(struct!.categoricalParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesList",
    },
    continuous_parameter_ranges: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesToHclTerraform, true)(struct!.continuousParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesList",
    },
    integer_parameter_ranges: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesToHclTerraform, true)(struct!.integerParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoParameters = this._autoParameters?.internalValue;
    }
    if (this._categoricalParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoricalParameterRanges = this._categoricalParameterRanges?.internalValue;
    }
    if (this._continuousParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousParameterRanges = this._continuousParameterRanges?.internalValue;
    }
    if (this._integerParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerParameterRanges = this._integerParameterRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = undefined;
      this._categoricalParameterRanges.internalValue = undefined;
      this._continuousParameterRanges.internalValue = undefined;
      this._integerParameterRanges.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = value.autoParameters;
      this._categoricalParameterRanges.internalValue = value.categoricalParameterRanges;
      this._continuousParameterRanges.internalValue = value.continuousParameterRanges;
      this._integerParameterRanges.internalValue = value.integerParameterRanges;
    }
  }

  // auto_parameters - computed: false, optional: true, required: false
  private _autoParameters = new SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParametersList(this, "auto_parameters", false);
  public get autoParameters() {
    return this._autoParameters;
  }
  public putAutoParameters(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesAutoParameters[] | cdktn.IResolvable) {
    this._autoParameters.internalValue = value;
  }
  public resetAutoParameters() {
    this._autoParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoParametersInput() {
    return this._autoParameters.internalValue;
  }

  // categorical_parameter_ranges - computed: false, optional: true, required: false
  private _categoricalParameterRanges = new SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRangesList(this, "categorical_parameter_ranges", false);
  public get categoricalParameterRanges() {
    return this._categoricalParameterRanges;
  }
  public putCategoricalParameterRanges(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesCategoricalParameterRanges[] | cdktn.IResolvable) {
    this._categoricalParameterRanges.internalValue = value;
  }
  public resetCategoricalParameterRanges() {
    this._categoricalParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoricalParameterRangesInput() {
    return this._categoricalParameterRanges.internalValue;
  }

  // continuous_parameter_ranges - computed: false, optional: true, required: false
  private _continuousParameterRanges = new SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRangesList(this, "continuous_parameter_ranges", false);
  public get continuousParameterRanges() {
    return this._continuousParameterRanges;
  }
  public putContinuousParameterRanges(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesContinuousParameterRanges[] | cdktn.IResolvable) {
    this._continuousParameterRanges.internalValue = value;
  }
  public resetContinuousParameterRanges() {
    this._continuousParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousParameterRangesInput() {
    return this._continuousParameterRanges.internalValue;
  }

  // integer_parameter_ranges - computed: false, optional: true, required: false
  private _integerParameterRanges = new SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRangesList(this, "integer_parameter_ranges", false);
  public get integerParameterRanges() {
    return this._integerParameterRanges;
  }
  public putIntegerParameterRanges(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesIntegerParameterRanges[] | cdktn.IResolvable) {
    this._integerParameterRanges.internalValue = value;
  }
  public resetIntegerParameterRanges() {
    this._integerParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerParameterRangesInput() {
    return this._integerParameterRanges.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRanges[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count SagemakerHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_type SagemakerHyperParameterTuningJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_size_in_gb SagemakerHyperParameterTuningJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._volumeSizeInGb = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._volumeSizeInGb = value.volumeSizeInGb;
    }
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigs[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#allocation_strategy SagemakerHyperParameterTuningJob#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count SagemakerHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_type SagemakerHyperParameterTuningJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_kms_key_id SagemakerHyperParameterTuningJob#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_size_in_gb SagemakerHyperParameterTuningJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
  /**
  * instance_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_configs SagemakerHyperParameterTuningJob#instance_configs}
  */
  readonly instanceConfigs?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigs[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    instance_configs: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsToTerraform, true)(struct!.instanceConfigs),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allocation_strategy: {
      value: cdktn.stringToHclTerraform(struct!.allocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_configs: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsToHclTerraform, true)(struct!.instanceConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    if (this._instanceConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigs = this._instanceConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationStrategy = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._volumeKmsKeyId = undefined;
      this._volumeSizeInGb = undefined;
      this._instanceConfigs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationStrategy = value.allocationStrategy;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._volumeSizeInGb = value.volumeSizeInGb;
      this._instanceConfigs.internalValue = value.instanceConfigs;
    }
  }

  // allocation_strategy - computed: false, optional: true, required: false
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  public resetAllocationStrategy() {
    this._allocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // volume_kms_key_id - computed: false, optional: true, required: false
  private _volumeKmsKeyId?: string; 
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }

  // instance_configs - computed: false, optional: true, required: false
  private _instanceConfigs = new SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigsList(this, "instance_configs", false);
  public get instanceConfigs() {
    return this._instanceConfigs;
  }
  public putInstanceConfigs(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigInstanceConfigs[] | cdktn.IResolvable) {
    this._instanceConfigs.internalValue = value;
  }
  public resetInstanceConfigs() {
    this._instanceConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigsInput() {
    return this._instanceConfigs.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#directory_path SagemakerHyperParameterTuningJob#directory_path}
  */
  readonly directoryPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#file_system_access_mode SagemakerHyperParameterTuningJob#file_system_access_mode}
  */
  readonly fileSystemAccessMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#file_system_id SagemakerHyperParameterTuningJob#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#file_system_type SagemakerHyperParameterTuningJob#file_system_type}
  */
  readonly fileSystemType: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    directory_path: cdktn.stringToTerraform(struct!.directoryPath),
    file_system_access_mode: cdktn.stringToTerraform(struct!.fileSystemAccessMode),
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    file_system_type: cdktn.stringToTerraform(struct!.fileSystemType),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    directory_path: {
      value: cdktn.stringToHclTerraform(struct!.directoryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_access_mode: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemAccessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_type: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryPath = this._directoryPath;
    }
    if (this._fileSystemAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemAccessMode = this._fileSystemAccessMode;
    }
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemType = this._fileSystemType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directoryPath = undefined;
      this._fileSystemAccessMode = undefined;
      this._fileSystemId = undefined;
      this._fileSystemType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directoryPath = value.directoryPath;
      this._fileSystemAccessMode = value.fileSystemAccessMode;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemType = value.fileSystemType;
    }
  }

  // directory_path - computed: false, optional: false, required: true
  private _directoryPath?: string; 
  public get directoryPath() {
    return this.getStringAttribute('directory_path');
  }
  public set directoryPath(value: string) {
    this._directoryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryPathInput() {
    return this._directoryPath;
  }

  // file_system_access_mode - computed: false, optional: false, required: true
  private _fileSystemAccessMode?: string; 
  public get fileSystemAccessMode() {
    return this.getStringAttribute('file_system_access_mode');
  }
  public set fileSystemAccessMode(value: string) {
    this._fileSystemAccessMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemAccessModeInput() {
    return this._fileSystemAccessMode;
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_type - computed: false, optional: false, required: true
  private _fileSystemType?: string; 
  public get fileSystemType() {
    return this.getStringAttribute('file_system_type');
  }
  public set fileSystemType(value: string) {
    this._fileSystemType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemTypeInput() {
    return this._fileSystemType;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#hub_content_arn SagemakerHyperParameterTuningJob#hub_content_arn}
  */
  readonly hubContentArn: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hub_content_arn: cdktn.stringToTerraform(struct!.hubContentArn),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hub_content_arn: {
      value: cdktn.stringToHclTerraform(struct!.hubContentArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hubContentArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubContentArn = this._hubContentArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hubContentArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hubContentArn = value.hubContentArn;
    }
  }

  // hub_content_arn - computed: false, optional: false, required: true
  private _hubContentArn?: string; 
  public get hubContentArn() {
    return this.getStringAttribute('hub_content_arn');
  }
  public set hubContentArn(value: string) {
    this._hubContentArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubContentArnInput() {
    return this._hubContentArn;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#accept_eula SagemakerHyperParameterTuningJob#accept_eula}
  */
  readonly acceptEula: boolean | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept_eula: {
      value: cdktn.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptEula = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: false, optional: false, required: true
  private _acceptEula?: boolean | cdktn.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktn.IResolvable) {
    this._acceptEula = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#attribute_names SagemakerHyperParameterTuningJob#attribute_names}
  */
  readonly attributeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_group_names SagemakerHyperParameterTuningJob#instance_group_names}
  */
  readonly instanceGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_data_distribution_type SagemakerHyperParameterTuningJob#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_data_type SagemakerHyperParameterTuningJob#s3_data_type}
  */
  readonly s3DataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_uri SagemakerHyperParameterTuningJob#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * hub_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#hub_access_config SagemakerHyperParameterTuningJob#hub_access_config}
  */
  readonly hubAccessConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfig[] | cdktn.IResolvable;
  /**
  * model_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#model_access_config SagemakerHyperParameterTuningJob#model_access_config}
  */
  readonly modelAccessConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfig[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.attributeNames),
    instance_group_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceGroupNames),
    s3_data_distribution_type: cdktn.stringToTerraform(struct!.s3DataDistributionType),
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    hub_access_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigToTerraform, true)(struct!.hubAccessConfig),
    model_access_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigToTerraform, true)(struct!.modelAccessConfig),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.attributeNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    instance_group_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceGroupNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    s3_data_distribution_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataDistributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hub_access_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigToHclTerraform, true)(struct!.hubAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigList",
    },
    model_access_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigToHclTerraform, true)(struct!.modelAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNames = this._attributeNames;
    }
    if (this._instanceGroupNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupNames = this._instanceGroupNames;
    }
    if (this._s3DataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._hubAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubAccessConfig = this._hubAccessConfig?.internalValue;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeNames = undefined;
      this._instanceGroupNames = undefined;
      this._s3DataDistributionType = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
      this._hubAccessConfig.internalValue = undefined;
      this._modelAccessConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeNames = value.attributeNames;
      this._instanceGroupNames = value.instanceGroupNames;
      this._s3DataDistributionType = value.s3DataDistributionType;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
      this._hubAccessConfig.internalValue = value.hubAccessConfig;
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
    }
  }

  // attribute_names - computed: false, optional: true, required: false
  private _attributeNames?: string[]; 
  public get attributeNames() {
    return cdktn.Fn.tolist(this.getListAttribute('attribute_names'));
  }
  public set attributeNames(value: string[]) {
    this._attributeNames = value;
  }
  public resetAttributeNames() {
    this._attributeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNamesInput() {
    return this._attributeNames;
  }

  // instance_group_names - computed: false, optional: true, required: false
  private _instanceGroupNames?: string[]; 
  public get instanceGroupNames() {
    return cdktn.Fn.tolist(this.getListAttribute('instance_group_names'));
  }
  public set instanceGroupNames(value: string[]) {
    this._instanceGroupNames = value;
  }
  public resetInstanceGroupNames() {
    this._instanceGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNamesInput() {
    return this._instanceGroupNames;
  }

  // s3_data_distribution_type - computed: false, optional: true, required: false
  private _s3DataDistributionType?: string; 
  public get s3DataDistributionType() {
    return this.getStringAttribute('s3_data_distribution_type');
  }
  public set s3DataDistributionType(value: string) {
    this._s3DataDistributionType = value;
  }
  public resetS3DataDistributionType() {
    this._s3DataDistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataDistributionTypeInput() {
    return this._s3DataDistributionType;
  }

  // s3_data_type - computed: false, optional: false, required: true
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // hub_access_config - computed: false, optional: true, required: false
  private _hubAccessConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigList(this, "hub_access_config", false);
  public get hubAccessConfig() {
    return this._hubAccessConfig;
  }
  public putHubAccessConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfig[] | cdktn.IResolvable) {
    this._hubAccessConfig.internalValue = value;
  }
  public resetHubAccessConfig() {
    this._hubAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubAccessConfigInput() {
    return this._hubAccessConfig.internalValue;
  }

  // model_access_config - computed: false, optional: true, required: false
  private _modelAccessConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigList(this, "model_access_config", false);
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfig[] | cdktn.IResolvable) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSource {
  /**
  * file_system_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#file_system_data_source SagemakerHyperParameterTuningJob#file_system_data_source}
  */
  readonly fileSystemDataSource?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource[] | cdktn.IResolvable;
  /**
  * s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_data_source SagemakerHyperParameterTuningJob#s3_data_source}
  */
  readonly s3DataSource?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSource[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_data_source: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceToTerraform, true)(struct!.fileSystemDataSource),
    s3_data_source: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceToTerraform, true)(struct!.s3DataSource),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_data_source: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceToHclTerraform, true)(struct!.fileSystemDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceList",
    },
    s3_data_source: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceToHclTerraform, true)(struct!.s3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemDataSource = this._fileSystemDataSource?.internalValue;
    }
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemDataSource.internalValue = undefined;
      this._s3DataSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemDataSource.internalValue = value.fileSystemDataSource;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // file_system_data_source - computed: false, optional: true, required: false
  private _fileSystemDataSource = new SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceList(this, "file_system_data_source", false);
  public get fileSystemDataSource() {
    return this._fileSystemDataSource;
  }
  public putFileSystemDataSource(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource[] | cdktn.IResolvable) {
    this._fileSystemDataSource.internalValue = value;
  }
  public resetFileSystemDataSource() {
    this._fileSystemDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemDataSourceInput() {
    return this._fileSystemDataSource.internalValue;
  }

  // s3_data_source - computed: false, optional: true, required: false
  private _s3DataSource = new SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceList(this, "s3_data_source", false);
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceS3DataSource[] | cdktn.IResolvable) {
    this._s3DataSource.internalValue = value;
  }
  public resetS3DataSource() {
    this._s3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#seed SagemakerHyperParameterTuningJob#seed}
  */
  readonly seed: number;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    seed: cdktn.numberToTerraform(struct!.seed),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    seed: {
      value: cdktn.numberToHclTerraform(struct!.seed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seed = this._seed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seed = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seed = value.seed;
    }
  }

  // seed - computed: false, optional: false, required: true
  private _seed?: number; 
  public get seed() {
    return this.getNumberAttribute('seed');
  }
  public set seed(value: number) {
    this._seed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#channel_name SagemakerHyperParameterTuningJob#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#compression_type SagemakerHyperParameterTuningJob#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#content_type SagemakerHyperParameterTuningJob#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#input_mode SagemakerHyperParameterTuningJob#input_mode}
  */
  readonly inputMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#record_wrapper_type SagemakerHyperParameterTuningJob#record_wrapper_type}
  */
  readonly recordWrapperType?: string;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#data_source SagemakerHyperParameterTuningJob#data_source}
  */
  readonly dataSource?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSource[] | cdktn.IResolvable;
  /**
  * shuffle_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#shuffle_config SagemakerHyperParameterTuningJob#shuffle_config}
  */
  readonly shuffleConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfig[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_name: cdktn.stringToTerraform(struct!.channelName),
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    input_mode: cdktn.stringToTerraform(struct!.inputMode),
    record_wrapper_type: cdktn.stringToTerraform(struct!.recordWrapperType),
    data_source: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceToTerraform, true)(struct!.dataSource),
    shuffle_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfigToTerraform, true)(struct!.shuffleConfig),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_name: {
      value: cdktn.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_mode: {
      value: cdktn.stringToHclTerraform(struct!.inputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_wrapper_type: {
      value: cdktn.stringToHclTerraform(struct!.recordWrapperType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceList",
    },
    shuffle_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfigToHclTerraform, true)(struct!.shuffleConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._inputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputMode = this._inputMode;
    }
    if (this._recordWrapperType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordWrapperType = this._recordWrapperType;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._shuffleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shuffleConfig = this._shuffleConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelName = undefined;
      this._compressionType = undefined;
      this._contentType = undefined;
      this._inputMode = undefined;
      this._recordWrapperType = undefined;
      this._dataSource.internalValue = undefined;
      this._shuffleConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelName = value.channelName;
      this._compressionType = value.compressionType;
      this._contentType = value.contentType;
      this._inputMode = value.inputMode;
      this._recordWrapperType = value.recordWrapperType;
      this._dataSource.internalValue = value.dataSource;
      this._shuffleConfig.internalValue = value.shuffleConfig;
    }
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

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // input_mode - computed: false, optional: true, required: false
  private _inputMode?: string; 
  public get inputMode() {
    return this.getStringAttribute('input_mode');
  }
  public set inputMode(value: string) {
    this._inputMode = value;
  }
  public resetInputMode() {
    this._inputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputModeInput() {
    return this._inputMode;
  }

  // record_wrapper_type - computed: false, optional: true, required: false
  private _recordWrapperType?: string; 
  public get recordWrapperType() {
    return this.getStringAttribute('record_wrapper_type');
  }
  public set recordWrapperType(value: string) {
    this._recordWrapperType = value;
  }
  public resetRecordWrapperType() {
    this._recordWrapperType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordWrapperTypeInput() {
    return this._recordWrapperType;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigDataSource[] | cdktn.IResolvable) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // shuffle_config - computed: false, optional: true, required: false
  private _shuffleConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfigList(this, "shuffle_config", false);
  public get shuffleConfig() {
    return this._shuffleConfig;
  }
  public putShuffleConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigShuffleConfig[] | cdktn.IResolvable) {
    this._shuffleConfig.internalValue = value;
  }
  public resetShuffleConfig() {
    this._shuffleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shuffleConfigInput() {
    return this._shuffleConfig.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#compression_type SagemakerHyperParameterTuningJob#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#kms_key_id SagemakerHyperParameterTuningJob#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_output_path SagemakerHyperParameterTuningJob#s3_output_path}
  */
  readonly s3OutputPath: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._kmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._kmsKeyId = value.kmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // s3_output_path - computed: false, optional: false, required: true
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count SagemakerHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_group_name SagemakerHyperParameterTuningJob#instance_group_name}
  */
  readonly instanceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_type SagemakerHyperParameterTuningJob#instance_type}
  */
  readonly instanceType: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroupsToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_group_name: cdktn.stringToTerraform(struct!.instanceGroupName),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroupsToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_group_name: {
      value: cdktn.stringToHclTerraform(struct!.instanceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroups | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupName = this._instanceGroupName;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroups | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceGroupName = undefined;
      this._instanceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceGroupName = value.instanceGroupName;
      this._instanceType = value.instanceType;
    }
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_group_name - computed: false, optional: false, required: true
  private _instanceGroupName?: string; 
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }
  public set instanceGroupName(value: string) {
    this._instanceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNameInput() {
    return this._instanceGroupName;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroupsList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroups[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroupsOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count SagemakerHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#ultra_server_id SagemakerHyperParameterTuningJob#ultra_server_id}
  */
  readonly ultraServerId?: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    ultra_server_id: cdktn.stringToTerraform(struct!.ultraServerId),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ultra_server_id: {
      value: cdktn.stringToHclTerraform(struct!.ultraServerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._ultraServerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ultraServerId = this._ultraServerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._ultraServerId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._ultraServerId = value.ultraServerId;
    }
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // ultra_server_id - computed: false, optional: true, required: false
  private _ultraServerId?: string; 
  public get ultraServerId() {
    return this.getStringAttribute('ultra_server_id');
  }
  public set ultraServerId(value: string) {
    this._ultraServerId = value;
  }
  public resetUltraServerId() {
    this._ultraServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ultraServerIdInput() {
    return this._ultraServerId;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecifications[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#enable_multiple_jobs SagemakerHyperParameterTuningJob#enable_multiple_jobs}
  */
  readonly enableMultipleJobs?: boolean | cdktn.IResolvable;
  /**
  * placement_specifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#placement_specifications SagemakerHyperParameterTuningJob#placement_specifications}
  */
  readonly placementSpecifications?: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecifications[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_multiple_jobs: cdktn.booleanToTerraform(struct!.enableMultipleJobs),
    placement_specifications: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsToTerraform, true)(struct!.placementSpecifications),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_multiple_jobs: {
      value: cdktn.booleanToHclTerraform(struct!.enableMultipleJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    placement_specifications: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsToHclTerraform, true)(struct!.placementSpecifications),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMultipleJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMultipleJobs = this._enableMultipleJobs;
    }
    if (this._placementSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementSpecifications = this._placementSpecifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableMultipleJobs = undefined;
      this._placementSpecifications.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableMultipleJobs = value.enableMultipleJobs;
      this._placementSpecifications.internalValue = value.placementSpecifications;
    }
  }

  // enable_multiple_jobs - computed: false, optional: true, required: false
  private _enableMultipleJobs?: boolean | cdktn.IResolvable; 
  public get enableMultipleJobs() {
    return this.getBooleanAttribute('enable_multiple_jobs');
  }
  public set enableMultipleJobs(value: boolean | cdktn.IResolvable) {
    this._enableMultipleJobs = value;
  }
  public resetEnableMultipleJobs() {
    this._enableMultipleJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultipleJobsInput() {
    return this._enableMultipleJobs;
  }

  // placement_specifications - computed: false, optional: true, required: false
  private _placementSpecifications = new SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsList(this, "placement_specifications", false);
  public get placementSpecifications() {
    return this._placementSpecifications;
  }
  public putPlacementSpecifications(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecifications[] | cdktn.IResolvable) {
    this._placementSpecifications.internalValue = value;
  }
  public resetPlacementSpecifications() {
    this._placementSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementSpecificationsInput() {
    return this._placementSpecifications.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count SagemakerHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_type SagemakerHyperParameterTuningJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#keep_alive_period_in_seconds SagemakerHyperParameterTuningJob#keep_alive_period_in_seconds}
  */
  readonly keepAlivePeriodInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#training_plan_arn SagemakerHyperParameterTuningJob#training_plan_arn}
  */
  readonly trainingPlanArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_kms_key_id SagemakerHyperParameterTuningJob#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_size_in_gb SagemakerHyperParameterTuningJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
  /**
  * instance_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_groups SagemakerHyperParameterTuningJob#instance_groups}
  */
  readonly instanceGroups?: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroups[] | cdktn.IResolvable;
  /**
  * instance_placement_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_placement_config SagemakerHyperParameterTuningJob#instance_placement_config}
  */
  readonly instancePlacementConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfig[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    keep_alive_period_in_seconds: cdktn.numberToTerraform(struct!.keepAlivePeriodInSeconds),
    training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    instance_groups: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroupsToTerraform, true)(struct!.instanceGroups),
    instance_placement_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigToTerraform, true)(struct!.instancePlacementConfig),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_alive_period_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.keepAlivePeriodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    training_plan_arn: {
      value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_groups: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroupsToHclTerraform, true)(struct!.instanceGroups),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroupsList",
    },
    instance_placement_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigToHclTerraform, true)(struct!.instancePlacementConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._keepAlivePeriodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAlivePeriodInSeconds = this._keepAlivePeriodInSeconds;
    }
    if (this._trainingPlanArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingPlanArn = this._trainingPlanArn;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    if (this._instanceGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroups = this._instanceGroups?.internalValue;
    }
    if (this._instancePlacementConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePlacementConfig = this._instancePlacementConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._keepAlivePeriodInSeconds = undefined;
      this._trainingPlanArn = undefined;
      this._volumeKmsKeyId = undefined;
      this._volumeSizeInGb = undefined;
      this._instanceGroups.internalValue = undefined;
      this._instancePlacementConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._keepAlivePeriodInSeconds = value.keepAlivePeriodInSeconds;
      this._trainingPlanArn = value.trainingPlanArn;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._volumeSizeInGb = value.volumeSizeInGb;
      this._instanceGroups.internalValue = value.instanceGroups;
      this._instancePlacementConfig.internalValue = value.instancePlacementConfig;
    }
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // keep_alive_period_in_seconds - computed: false, optional: true, required: false
  private _keepAlivePeriodInSeconds?: number; 
  public get keepAlivePeriodInSeconds() {
    return this.getNumberAttribute('keep_alive_period_in_seconds');
  }
  public set keepAlivePeriodInSeconds(value: number) {
    this._keepAlivePeriodInSeconds = value;
  }
  public resetKeepAlivePeriodInSeconds() {
    this._keepAlivePeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAlivePeriodInSecondsInput() {
    return this._keepAlivePeriodInSeconds;
  }

  // training_plan_arn - computed: false, optional: true, required: false
  private _trainingPlanArn?: string; 
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
  public set trainingPlanArn(value: string) {
    this._trainingPlanArn = value;
  }
  public resetTrainingPlanArn() {
    this._trainingPlanArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingPlanArnInput() {
    return this._trainingPlanArn;
  }

  // volume_kms_key_id - computed: false, optional: true, required: false
  private _volumeKmsKeyId?: string; 
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }

  // instance_groups - computed: false, optional: true, required: false
  private _instanceGroups = new SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroupsList(this, "instance_groups", false);
  public get instanceGroups() {
    return this._instanceGroups;
  }
  public putInstanceGroups(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstanceGroups[] | cdktn.IResolvable) {
    this._instanceGroups.internalValue = value;
  }
  public resetInstanceGroups() {
    this._instanceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupsInput() {
    return this._instanceGroups.internalValue;
  }

  // instance_placement_config - computed: false, optional: true, required: false
  private _instancePlacementConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfigList(this, "instance_placement_config", false);
  public get instancePlacementConfig() {
    return this._instancePlacementConfig;
  }
  public putInstancePlacementConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigInstancePlacementConfig[] | cdktn.IResolvable) {
    this._instancePlacementConfig.internalValue = value;
  }
  public resetInstancePlacementConfig() {
    this._instancePlacementConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePlacementConfigInput() {
    return this._instancePlacementConfig.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#max_pending_time_in_seconds SagemakerHyperParameterTuningJob#max_pending_time_in_seconds}
  */
  readonly maxPendingTimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#max_runtime_in_seconds SagemakerHyperParameterTuningJob#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#max_wait_time_in_seconds SagemakerHyperParameterTuningJob#max_wait_time_in_seconds}
  */
  readonly maxWaitTimeInSeconds?: number;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingConditionToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_pending_time_in_seconds: cdktn.numberToTerraform(struct!.maxPendingTimeInSeconds),
    max_runtime_in_seconds: cdktn.numberToTerraform(struct!.maxRuntimeInSeconds),
    max_wait_time_in_seconds: cdktn.numberToTerraform(struct!.maxWaitTimeInSeconds),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingConditionToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_pending_time_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxPendingTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_runtime_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxRuntimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_wait_time_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxWaitTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPendingTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingTimeInSeconds = this._maxPendingTimeInSeconds;
    }
    if (this._maxRuntimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRuntimeInSeconds = this._maxRuntimeInSeconds;
    }
    if (this._maxWaitTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWaitTimeInSeconds = this._maxWaitTimeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPendingTimeInSeconds = undefined;
      this._maxRuntimeInSeconds = undefined;
      this._maxWaitTimeInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPendingTimeInSeconds = value.maxPendingTimeInSeconds;
      this._maxRuntimeInSeconds = value.maxRuntimeInSeconds;
      this._maxWaitTimeInSeconds = value.maxWaitTimeInSeconds;
    }
  }

  // max_pending_time_in_seconds - computed: false, optional: true, required: false
  private _maxPendingTimeInSeconds?: number; 
  public get maxPendingTimeInSeconds() {
    return this.getNumberAttribute('max_pending_time_in_seconds');
  }
  public set maxPendingTimeInSeconds(value: number) {
    this._maxPendingTimeInSeconds = value;
  }
  public resetMaxPendingTimeInSeconds() {
    this._maxPendingTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingTimeInSecondsInput() {
    return this._maxPendingTimeInSeconds;
  }

  // max_runtime_in_seconds - computed: false, optional: true, required: false
  private _maxRuntimeInSeconds?: number; 
  public get maxRuntimeInSeconds() {
    return this.getNumberAttribute('max_runtime_in_seconds');
  }
  public set maxRuntimeInSeconds(value: number) {
    this._maxRuntimeInSeconds = value;
  }
  public resetMaxRuntimeInSeconds() {
    this._maxRuntimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRuntimeInSecondsInput() {
    return this._maxRuntimeInSeconds;
  }

  // max_wait_time_in_seconds - computed: false, optional: true, required: false
  private _maxWaitTimeInSeconds?: number; 
  public get maxWaitTimeInSeconds() {
    return this.getNumberAttribute('max_wait_time_in_seconds');
  }
  public set maxWaitTimeInSeconds(value: number) {
    this._maxWaitTimeInSeconds = value;
  }
  public resetMaxWaitTimeInSeconds() {
    this._maxWaitTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitTimeInSecondsInput() {
    return this._maxWaitTimeInSeconds;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingConditionList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingCondition[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingConditionOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjective {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#metric_name SagemakerHyperParameterTuningJob#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#type SagemakerHyperParameterTuningJob#type}
  */
  readonly type: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjectiveToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjective | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjectiveToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjective | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
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

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjectiveOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjective | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjective | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._type = value.type;
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

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjectiveList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjective[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjectiveOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjectiveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#security_group_ids SagemakerHyperParameterTuningJob#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#subnets SagemakerHyperParameterTuningJob#subnets}
  */
  readonly subnets: string[];
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnets = value.subnets;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#definition_name SagemakerHyperParameterTuningJob#definition_name}
  */
  readonly definitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#enable_inter_container_traffic_encryption SagemakerHyperParameterTuningJob#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#enable_managed_spot_training SagemakerHyperParameterTuningJob#enable_managed_spot_training}
  */
  readonly enableManagedSpotTraining?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#enable_network_isolation SagemakerHyperParameterTuningJob#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#environment SagemakerHyperParameterTuningJob#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#retry_strategy SagemakerHyperParameterTuningJob#retry_strategy}
  */
  readonly retryStrategy?: SagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategy[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#role_arn SagemakerHyperParameterTuningJob#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#static_hyper_parameters SagemakerHyperParameterTuningJob#static_hyper_parameters}
  */
  readonly staticHyperParameters?: { [key: string]: string };
  /**
  * algorithm_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#algorithm_specification SagemakerHyperParameterTuningJob#algorithm_specification}
  */
  readonly algorithmSpecification?: SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecification[] | cdktn.IResolvable;
  /**
  * checkpoint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#checkpoint_config SagemakerHyperParameterTuningJob#checkpoint_config}
  */
  readonly checkpointConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfig[] | cdktn.IResolvable;
  /**
  * hyper_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#hyper_parameter_ranges SagemakerHyperParameterTuningJob#hyper_parameter_ranges}
  */
  readonly hyperParameterRanges?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRanges[] | cdktn.IResolvable;
  /**
  * hyper_parameter_tuning_resource_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#hyper_parameter_tuning_resource_config SagemakerHyperParameterTuningJob#hyper_parameter_tuning_resource_config}
  */
  readonly hyperParameterTuningResourceConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfig[] | cdktn.IResolvable;
  /**
  * input_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#input_data_config SagemakerHyperParameterTuningJob#input_data_config}
  */
  readonly inputDataConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfig[] | cdktn.IResolvable;
  /**
  * output_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#output_data_config SagemakerHyperParameterTuningJob#output_data_config}
  */
  readonly outputDataConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfig[] | cdktn.IResolvable;
  /**
  * resource_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#resource_config SagemakerHyperParameterTuningJob#resource_config}
  */
  readonly resourceConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfig[] | cdktn.IResolvable;
  /**
  * stopping_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#stopping_condition SagemakerHyperParameterTuningJob#stopping_condition}
  */
  readonly stoppingCondition?: SagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingCondition[] | cdktn.IResolvable;
  /**
  * tuning_objective block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#tuning_objective SagemakerHyperParameterTuningJob#tuning_objective}
  */
  readonly tuningObjective?: SagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjective[] | cdktn.IResolvable;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#vpc_config SagemakerHyperParameterTuningJob#vpc_config}
  */
  readonly vpcConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfig[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition_name: cdktn.stringToTerraform(struct!.definitionName),
    enable_inter_container_traffic_encryption: cdktn.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_managed_spot_training: cdktn.booleanToTerraform(struct!.enableManagedSpotTraining),
    enable_network_isolation: cdktn.booleanToTerraform(struct!.enableNetworkIsolation),
    environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
    retry_strategy: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategyToTerraform, false)(struct!.retryStrategy),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    static_hyper_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.staticHyperParameters),
    algorithm_specification: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationToTerraform, true)(struct!.algorithmSpecification),
    checkpoint_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfigToTerraform, true)(struct!.checkpointConfig),
    hyper_parameter_ranges: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesToTerraform, true)(struct!.hyperParameterRanges),
    hyper_parameter_tuning_resource_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigToTerraform, true)(struct!.hyperParameterTuningResourceConfig),
    input_data_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigToTerraform, true)(struct!.inputDataConfig),
    output_data_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfigToTerraform, true)(struct!.outputDataConfig),
    resource_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigToTerraform, true)(struct!.resourceConfig),
    stopping_condition: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingConditionToTerraform, true)(struct!.stoppingCondition),
    tuning_objective: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjectiveToTerraform, true)(struct!.tuningObjective),
    vpc_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfigToTerraform, true)(struct!.vpcConfig),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition_name: {
      value: cdktn.stringToHclTerraform(struct!.definitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_inter_container_traffic_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableInterContainerTrafficEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_managed_spot_training: {
      value: cdktn.booleanToHclTerraform(struct!.enableManagedSpotTraining),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_network_isolation: {
      value: cdktn.booleanToHclTerraform(struct!.enableNetworkIsolation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    retry_strategy: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategyToHclTerraform, false)(struct!.retryStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategyList",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_hyper_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.staticHyperParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    algorithm_specification: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationToHclTerraform, true)(struct!.algorithmSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationList",
    },
    checkpoint_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfigToHclTerraform, true)(struct!.checkpointConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfigList",
    },
    hyper_parameter_ranges: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesToHclTerraform, true)(struct!.hyperParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesList",
    },
    hyper_parameter_tuning_resource_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigToHclTerraform, true)(struct!.hyperParameterTuningResourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigList",
    },
    input_data_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigToHclTerraform, true)(struct!.inputDataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigList",
    },
    output_data_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfigToHclTerraform, true)(struct!.outputDataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfigList",
    },
    resource_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigToHclTerraform, true)(struct!.resourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigList",
    },
    stopping_condition: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingConditionToHclTerraform, true)(struct!.stoppingCondition),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingConditionList",
    },
    tuning_objective: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjectiveToHclTerraform, true)(struct!.tuningObjective),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjectiveList",
    },
    vpc_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfigToHclTerraform, true)(struct!.vpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.definitionName = this._definitionName;
    }
    if (this._enableInterContainerTrafficEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInterContainerTrafficEncryption = this._enableInterContainerTrafficEncryption;
    }
    if (this._enableManagedSpotTraining !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableManagedSpotTraining = this._enableManagedSpotTraining;
    }
    if (this._enableNetworkIsolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetworkIsolation = this._enableNetworkIsolation;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._retryStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryStrategy = this._retryStrategy?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._staticHyperParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticHyperParameters = this._staticHyperParameters;
    }
    if (this._algorithmSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmSpecification = this._algorithmSpecification?.internalValue;
    }
    if (this._checkpointConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointConfig = this._checkpointConfig?.internalValue;
    }
    if (this._hyperParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperParameterRanges = this._hyperParameterRanges?.internalValue;
    }
    if (this._hyperParameterTuningResourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperParameterTuningResourceConfig = this._hyperParameterTuningResourceConfig?.internalValue;
    }
    if (this._inputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputDataConfig = this._inputDataConfig?.internalValue;
    }
    if (this._outputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputDataConfig = this._outputDataConfig?.internalValue;
    }
    if (this._resourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfig = this._resourceConfig?.internalValue;
    }
    if (this._stoppingCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stoppingCondition = this._stoppingCondition?.internalValue;
    }
    if (this._tuningObjective?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuningObjective = this._tuningObjective?.internalValue;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definitionName = undefined;
      this._enableInterContainerTrafficEncryption = undefined;
      this._enableManagedSpotTraining = undefined;
      this._enableNetworkIsolation = undefined;
      this._environment = undefined;
      this._retryStrategy.internalValue = undefined;
      this._roleArn = undefined;
      this._staticHyperParameters = undefined;
      this._algorithmSpecification.internalValue = undefined;
      this._checkpointConfig.internalValue = undefined;
      this._hyperParameterRanges.internalValue = undefined;
      this._hyperParameterTuningResourceConfig.internalValue = undefined;
      this._inputDataConfig.internalValue = undefined;
      this._outputDataConfig.internalValue = undefined;
      this._resourceConfig.internalValue = undefined;
      this._stoppingCondition.internalValue = undefined;
      this._tuningObjective.internalValue = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definitionName = value.definitionName;
      this._enableInterContainerTrafficEncryption = value.enableInterContainerTrafficEncryption;
      this._enableManagedSpotTraining = value.enableManagedSpotTraining;
      this._enableNetworkIsolation = value.enableNetworkIsolation;
      this._environment = value.environment;
      this._retryStrategy.internalValue = value.retryStrategy;
      this._roleArn = value.roleArn;
      this._staticHyperParameters = value.staticHyperParameters;
      this._algorithmSpecification.internalValue = value.algorithmSpecification;
      this._checkpointConfig.internalValue = value.checkpointConfig;
      this._hyperParameterRanges.internalValue = value.hyperParameterRanges;
      this._hyperParameterTuningResourceConfig.internalValue = value.hyperParameterTuningResourceConfig;
      this._inputDataConfig.internalValue = value.inputDataConfig;
      this._outputDataConfig.internalValue = value.outputDataConfig;
      this._resourceConfig.internalValue = value.resourceConfig;
      this._stoppingCondition.internalValue = value.stoppingCondition;
      this._tuningObjective.internalValue = value.tuningObjective;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // definition_name - computed: false, optional: true, required: false
  private _definitionName?: string; 
  public get definitionName() {
    return this.getStringAttribute('definition_name');
  }
  public set definitionName(value: string) {
    this._definitionName = value;
  }
  public resetDefinitionName() {
    this._definitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionNameInput() {
    return this._definitionName;
  }

  // enable_inter_container_traffic_encryption - computed: true, optional: true, required: false
  private _enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable; 
  public get enableInterContainerTrafficEncryption() {
    return this.getBooleanAttribute('enable_inter_container_traffic_encryption');
  }
  public set enableInterContainerTrafficEncryption(value: boolean | cdktn.IResolvable) {
    this._enableInterContainerTrafficEncryption = value;
  }
  public resetEnableInterContainerTrafficEncryption() {
    this._enableInterContainerTrafficEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInterContainerTrafficEncryptionInput() {
    return this._enableInterContainerTrafficEncryption;
  }

  // enable_managed_spot_training - computed: true, optional: true, required: false
  private _enableManagedSpotTraining?: boolean | cdktn.IResolvable; 
  public get enableManagedSpotTraining() {
    return this.getBooleanAttribute('enable_managed_spot_training');
  }
  public set enableManagedSpotTraining(value: boolean | cdktn.IResolvable) {
    this._enableManagedSpotTraining = value;
  }
  public resetEnableManagedSpotTraining() {
    this._enableManagedSpotTraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableManagedSpotTrainingInput() {
    return this._enableManagedSpotTraining;
  }

  // enable_network_isolation - computed: true, optional: true, required: false
  private _enableNetworkIsolation?: boolean | cdktn.IResolvable; 
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }
  public set enableNetworkIsolation(value: boolean | cdktn.IResolvable) {
    this._enableNetworkIsolation = value;
  }
  public resetEnableNetworkIsolation() {
    this._enableNetworkIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkIsolationInput() {
    return this._enableNetworkIsolation;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // retry_strategy - computed: true, optional: true, required: false
  private _retryStrategy = new SagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategyList(this, "retry_strategy", false);
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionRetryStrategy[] | cdktn.IResolvable) {
    this._retryStrategy.internalValue = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy.internalValue;
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

  // static_hyper_parameters - computed: true, optional: true, required: false
  private _staticHyperParameters?: { [key: string]: string }; 
  public get staticHyperParameters() {
    return this.getStringMapAttribute('static_hyper_parameters');
  }
  public set staticHyperParameters(value: { [key: string]: string }) {
    this._staticHyperParameters = value;
  }
  public resetStaticHyperParameters() {
    this._staticHyperParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticHyperParametersInput() {
    return this._staticHyperParameters;
  }

  // algorithm_specification - computed: false, optional: true, required: false
  private _algorithmSpecification = new SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecificationList(this, "algorithm_specification", false);
  public get algorithmSpecification() {
    return this._algorithmSpecification;
  }
  public putAlgorithmSpecification(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionAlgorithmSpecification[] | cdktn.IResolvable) {
    this._algorithmSpecification.internalValue = value;
  }
  public resetAlgorithmSpecification() {
    this._algorithmSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmSpecificationInput() {
    return this._algorithmSpecification.internalValue;
  }

  // checkpoint_config - computed: false, optional: true, required: false
  private _checkpointConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfigList(this, "checkpoint_config", false);
  public get checkpointConfig() {
    return this._checkpointConfig;
  }
  public putCheckpointConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionCheckpointConfig[] | cdktn.IResolvable) {
    this._checkpointConfig.internalValue = value;
  }
  public resetCheckpointConfig() {
    this._checkpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointConfigInput() {
    return this._checkpointConfig.internalValue;
  }

  // hyper_parameter_ranges - computed: false, optional: true, required: false
  private _hyperParameterRanges = new SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRangesList(this, "hyper_parameter_ranges", false);
  public get hyperParameterRanges() {
    return this._hyperParameterRanges;
  }
  public putHyperParameterRanges(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterRanges[] | cdktn.IResolvable) {
    this._hyperParameterRanges.internalValue = value;
  }
  public resetHyperParameterRanges() {
    this._hyperParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParameterRangesInput() {
    return this._hyperParameterRanges.internalValue;
  }

  // hyper_parameter_tuning_resource_config - computed: false, optional: true, required: false
  private _hyperParameterTuningResourceConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfigList(this, "hyper_parameter_tuning_resource_config", false);
  public get hyperParameterTuningResourceConfig() {
    return this._hyperParameterTuningResourceConfig;
  }
  public putHyperParameterTuningResourceConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionHyperParameterTuningResourceConfig[] | cdktn.IResolvable) {
    this._hyperParameterTuningResourceConfig.internalValue = value;
  }
  public resetHyperParameterTuningResourceConfig() {
    this._hyperParameterTuningResourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParameterTuningResourceConfigInput() {
    return this._hyperParameterTuningResourceConfig.internalValue;
  }

  // input_data_config - computed: false, optional: true, required: false
  private _inputDataConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfigList(this, "input_data_config", false);
  public get inputDataConfig() {
    return this._inputDataConfig;
  }
  public putInputDataConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionInputDataConfig[] | cdktn.IResolvable) {
    this._inputDataConfig.internalValue = value;
  }
  public resetInputDataConfig() {
    this._inputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataConfigInput() {
    return this._inputDataConfig.internalValue;
  }

  // output_data_config - computed: false, optional: true, required: false
  private _outputDataConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfigList(this, "output_data_config", false);
  public get outputDataConfig() {
    return this._outputDataConfig;
  }
  public putOutputDataConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionOutputDataConfig[] | cdktn.IResolvable) {
    this._outputDataConfig.internalValue = value;
  }
  public resetOutputDataConfig() {
    this._outputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDataConfigInput() {
    return this._outputDataConfig.internalValue;
  }

  // resource_config - computed: false, optional: true, required: false
  private _resourceConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfigList(this, "resource_config", false);
  public get resourceConfig() {
    return this._resourceConfig;
  }
  public putResourceConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionResourceConfig[] | cdktn.IResolvable) {
    this._resourceConfig.internalValue = value;
  }
  public resetResourceConfig() {
    this._resourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigInput() {
    return this._resourceConfig.internalValue;
  }

  // stopping_condition - computed: false, optional: true, required: false
  private _stoppingCondition = new SagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingConditionList(this, "stopping_condition", false);
  public get stoppingCondition() {
    return this._stoppingCondition;
  }
  public putStoppingCondition(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionStoppingCondition[] | cdktn.IResolvable) {
    this._stoppingCondition.internalValue = value;
  }
  public resetStoppingCondition() {
    this._stoppingCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppingConditionInput() {
    return this._stoppingCondition.internalValue;
  }

  // tuning_objective - computed: false, optional: true, required: false
  private _tuningObjective = new SagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjectiveList(this, "tuning_objective", false);
  public get tuningObjective() {
    return this._tuningObjective;
  }
  public putTuningObjective(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionTuningObjective[] | cdktn.IResolvable) {
    this._tuningObjective.internalValue = value;
  }
  public resetTuningObjective() {
    this._tuningObjective.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuningObjectiveInput() {
    return this._tuningObjective.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfigList(this, "vpc_config", false);
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionVpcConfig[] | cdktn.IResolvable) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinition[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#maximum_retry_attempts SagemakerHyperParameterTuningJob#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategyToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_retry_attempts: cdktn.numberToTerraform(struct!.maximumRetryAttempts),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategyToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_retry_attempts: {
      value: cdktn.numberToHclTerraform(struct!.maximumRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumRetryAttempts = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
    }
  }

  // maximum_retry_attempts - computed: true, optional: true, required: false
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategyList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategy[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategyOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#name SagemakerHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#regex SagemakerHyperParameterTuningJob#regex}
  */
  readonly regex: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    regex: cdktn.stringToTerraform(struct!.regex),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
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

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitions[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#algorithm_name SagemakerHyperParameterTuningJob#algorithm_name}
  */
  readonly algorithmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#training_image SagemakerHyperParameterTuningJob#training_image}
  */
  readonly trainingImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#training_input_mode SagemakerHyperParameterTuningJob#training_input_mode}
  */
  readonly trainingInputMode: string;
  /**
  * metric_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#metric_definitions SagemakerHyperParameterTuningJob#metric_definitions}
  */
  readonly metricDefinitions?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitions[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    algorithm_name: cdktn.stringToTerraform(struct!.algorithmName),
    training_image: cdktn.stringToTerraform(struct!.trainingImage),
    training_input_mode: cdktn.stringToTerraform(struct!.trainingInputMode),
    metric_definitions: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsToTerraform, true)(struct!.metricDefinitions),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    algorithm_name: {
      value: cdktn.stringToHclTerraform(struct!.algorithmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_image: {
      value: cdktn.stringToHclTerraform(struct!.trainingImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_input_mode: {
      value: cdktn.stringToHclTerraform(struct!.trainingInputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_definitions: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsToHclTerraform, true)(struct!.metricDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmName = this._algorithmName;
    }
    if (this._trainingImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingImage = this._trainingImage;
    }
    if (this._trainingInputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingInputMode = this._trainingInputMode;
    }
    if (this._metricDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDefinitions = this._metricDefinitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithmName = undefined;
      this._trainingImage = undefined;
      this._trainingInputMode = undefined;
      this._metricDefinitions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithmName = value.algorithmName;
      this._trainingImage = value.trainingImage;
      this._trainingInputMode = value.trainingInputMode;
      this._metricDefinitions.internalValue = value.metricDefinitions;
    }
  }

  // algorithm_name - computed: true, optional: true, required: false
  private _algorithmName?: string; 
  public get algorithmName() {
    return this.getStringAttribute('algorithm_name');
  }
  public set algorithmName(value: string) {
    this._algorithmName = value;
  }
  public resetAlgorithmName() {
    this._algorithmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmNameInput() {
    return this._algorithmName;
  }

  // training_image - computed: true, optional: true, required: false
  private _trainingImage?: string; 
  public get trainingImage() {
    return this.getStringAttribute('training_image');
  }
  public set trainingImage(value: string) {
    this._trainingImage = value;
  }
  public resetTrainingImage() {
    this._trainingImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingImageInput() {
    return this._trainingImage;
  }

  // training_input_mode - computed: false, optional: false, required: true
  private _trainingInputMode?: string; 
  public get trainingInputMode() {
    return this.getStringAttribute('training_input_mode');
  }
  public set trainingInputMode(value: string) {
    this._trainingInputMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingInputModeInput() {
    return this._trainingInputMode;
  }

  // metric_definitions - computed: false, optional: true, required: false
  private _metricDefinitions = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitionsList(this, "metric_definitions", false);
  public get metricDefinitions() {
    return this._metricDefinitions;
  }
  public putMetricDefinitions(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationMetricDefinitions[] | cdktn.IResolvable) {
    this._metricDefinitions.internalValue = value;
  }
  public resetMetricDefinitions() {
    this._metricDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDefinitionsInput() {
    return this._metricDefinitions.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecification[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#local_path SagemakerHyperParameterTuningJob#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_uri SagemakerHyperParameterTuningJob#s3_uri}
  */
  readonly s3Uri: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    local_path: cdktn.stringToTerraform(struct!.localPath),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPath = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPath = value.localPath;
      this._s3Uri = value.s3Uri;
    }
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#name SagemakerHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#value_hint SagemakerHyperParameterTuningJob#value_hint}
  */
  readonly valueHint: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParametersToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value_hint: cdktn.stringToTerraform(struct!.valueHint),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParametersToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_hint: {
      value: cdktn.stringToHclTerraform(struct!.valueHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueHint = this._valueHint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueHint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueHint = value.valueHint;
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

  // value_hint - computed: false, optional: false, required: true
  private _valueHint?: string; 
  public get valueHint() {
    return this.getStringAttribute('value_hint');
  }
  public set valueHint(value: string) {
    this._valueHint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueHintInput() {
    return this._valueHint;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParametersList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParameters[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParametersOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#name SagemakerHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#values SagemakerHyperParameterTuningJob#values}
  */
  readonly values: string[];
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRanges[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#max_value SagemakerHyperParameterTuningJob#max_value}
  */
  readonly maxValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#min_value SagemakerHyperParameterTuningJob#min_value}
  */
  readonly minValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#name SagemakerHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#scaling_type SagemakerHyperParameterTuningJob#scaling_type}
  */
  readonly scalingType?: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.stringToTerraform(struct!.maxValue),
    min_value: cdktn.stringToTerraform(struct!.minValue),
    name: cdktn.stringToTerraform(struct!.name),
    scaling_type: cdktn.stringToTerraform(struct!.scalingType),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktn.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktn.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: true, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRanges[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#max_value SagemakerHyperParameterTuningJob#max_value}
  */
  readonly maxValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#min_value SagemakerHyperParameterTuningJob#min_value}
  */
  readonly minValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#name SagemakerHyperParameterTuningJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#scaling_type SagemakerHyperParameterTuningJob#scaling_type}
  */
  readonly scalingType?: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.stringToTerraform(struct!.maxValue),
    min_value: cdktn.stringToTerraform(struct!.minValue),
    name: cdktn.stringToTerraform(struct!.name),
    scaling_type: cdktn.stringToTerraform(struct!.scalingType),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktn.stringToHclTerraform(struct!.minValue),
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
    scaling_type: {
      value: cdktn.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._name = undefined;
      this._scalingType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._name = value.name;
      this._scalingType = value.scalingType;
    }
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
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

  // scaling_type - computed: true, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRanges[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRanges {
  /**
  * auto_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#auto_parameters SagemakerHyperParameterTuningJob#auto_parameters}
  */
  readonly autoParameters?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParameters[] | cdktn.IResolvable;
  /**
  * categorical_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#categorical_parameter_ranges SagemakerHyperParameterTuningJob#categorical_parameter_ranges}
  */
  readonly categoricalParameterRanges?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRanges[] | cdktn.IResolvable;
  /**
  * continuous_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#continuous_parameter_ranges SagemakerHyperParameterTuningJob#continuous_parameter_ranges}
  */
  readonly continuousParameterRanges?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRanges[] | cdktn.IResolvable;
  /**
  * integer_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#integer_parameter_ranges SagemakerHyperParameterTuningJob#integer_parameter_ranges}
  */
  readonly integerParameterRanges?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRanges[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_parameters: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParametersToTerraform, true)(struct!.autoParameters),
    categorical_parameter_ranges: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesToTerraform, true)(struct!.categoricalParameterRanges),
    continuous_parameter_ranges: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesToTerraform, true)(struct!.continuousParameterRanges),
    integer_parameter_ranges: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesToTerraform, true)(struct!.integerParameterRanges),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRanges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_parameters: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParametersToHclTerraform, true)(struct!.autoParameters),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParametersList",
    },
    categorical_parameter_ranges: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesToHclTerraform, true)(struct!.categoricalParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesList",
    },
    continuous_parameter_ranges: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesToHclTerraform, true)(struct!.continuousParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesList",
    },
    integer_parameter_ranges: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesToHclTerraform, true)(struct!.integerParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRanges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoParameters = this._autoParameters?.internalValue;
    }
    if (this._categoricalParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoricalParameterRanges = this._categoricalParameterRanges?.internalValue;
    }
    if (this._continuousParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousParameterRanges = this._continuousParameterRanges?.internalValue;
    }
    if (this._integerParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerParameterRanges = this._integerParameterRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRanges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = undefined;
      this._categoricalParameterRanges.internalValue = undefined;
      this._continuousParameterRanges.internalValue = undefined;
      this._integerParameterRanges.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoParameters.internalValue = value.autoParameters;
      this._categoricalParameterRanges.internalValue = value.categoricalParameterRanges;
      this._continuousParameterRanges.internalValue = value.continuousParameterRanges;
      this._integerParameterRanges.internalValue = value.integerParameterRanges;
    }
  }

  // auto_parameters - computed: false, optional: true, required: false
  private _autoParameters = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParametersList(this, "auto_parameters", false);
  public get autoParameters() {
    return this._autoParameters;
  }
  public putAutoParameters(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesAutoParameters[] | cdktn.IResolvable) {
    this._autoParameters.internalValue = value;
  }
  public resetAutoParameters() {
    this._autoParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoParametersInput() {
    return this._autoParameters.internalValue;
  }

  // categorical_parameter_ranges - computed: false, optional: true, required: false
  private _categoricalParameterRanges = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRangesList(this, "categorical_parameter_ranges", false);
  public get categoricalParameterRanges() {
    return this._categoricalParameterRanges;
  }
  public putCategoricalParameterRanges(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesCategoricalParameterRanges[] | cdktn.IResolvable) {
    this._categoricalParameterRanges.internalValue = value;
  }
  public resetCategoricalParameterRanges() {
    this._categoricalParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoricalParameterRangesInput() {
    return this._categoricalParameterRanges.internalValue;
  }

  // continuous_parameter_ranges - computed: false, optional: true, required: false
  private _continuousParameterRanges = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRangesList(this, "continuous_parameter_ranges", false);
  public get continuousParameterRanges() {
    return this._continuousParameterRanges;
  }
  public putContinuousParameterRanges(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesContinuousParameterRanges[] | cdktn.IResolvable) {
    this._continuousParameterRanges.internalValue = value;
  }
  public resetContinuousParameterRanges() {
    this._continuousParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousParameterRangesInput() {
    return this._continuousParameterRanges.internalValue;
  }

  // integer_parameter_ranges - computed: false, optional: true, required: false
  private _integerParameterRanges = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRangesList(this, "integer_parameter_ranges", false);
  public get integerParameterRanges() {
    return this._integerParameterRanges;
  }
  public putIntegerParameterRanges(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesIntegerParameterRanges[] | cdktn.IResolvable) {
    this._integerParameterRanges.internalValue = value;
  }
  public resetIntegerParameterRanges() {
    this._integerParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerParameterRangesInput() {
    return this._integerParameterRanges.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRanges[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count SagemakerHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_type SagemakerHyperParameterTuningJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_size_in_gb SagemakerHyperParameterTuningJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._volumeSizeInGb = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._volumeSizeInGb = value.volumeSizeInGb;
    }
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigs[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#allocation_strategy SagemakerHyperParameterTuningJob#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count SagemakerHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_type SagemakerHyperParameterTuningJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_kms_key_id SagemakerHyperParameterTuningJob#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_size_in_gb SagemakerHyperParameterTuningJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
  /**
  * instance_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_configs SagemakerHyperParameterTuningJob#instance_configs}
  */
  readonly instanceConfigs?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigs[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    instance_configs: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsToTerraform, true)(struct!.instanceConfigs),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allocation_strategy: {
      value: cdktn.stringToHclTerraform(struct!.allocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_configs: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsToHclTerraform, true)(struct!.instanceConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    if (this._instanceConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigs = this._instanceConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationStrategy = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._volumeKmsKeyId = undefined;
      this._volumeSizeInGb = undefined;
      this._instanceConfigs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationStrategy = value.allocationStrategy;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._volumeSizeInGb = value.volumeSizeInGb;
      this._instanceConfigs.internalValue = value.instanceConfigs;
    }
  }

  // allocation_strategy - computed: false, optional: true, required: false
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  public resetAllocationStrategy() {
    this._allocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // volume_kms_key_id - computed: false, optional: true, required: false
  private _volumeKmsKeyId?: string; 
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }

  // instance_configs - computed: false, optional: true, required: false
  private _instanceConfigs = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigsList(this, "instance_configs", false);
  public get instanceConfigs() {
    return this._instanceConfigs;
  }
  public putInstanceConfigs(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigInstanceConfigs[] | cdktn.IResolvable) {
    this._instanceConfigs.internalValue = value;
  }
  public resetInstanceConfigs() {
    this._instanceConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigsInput() {
    return this._instanceConfigs.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#directory_path SagemakerHyperParameterTuningJob#directory_path}
  */
  readonly directoryPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#file_system_access_mode SagemakerHyperParameterTuningJob#file_system_access_mode}
  */
  readonly fileSystemAccessMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#file_system_id SagemakerHyperParameterTuningJob#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#file_system_type SagemakerHyperParameterTuningJob#file_system_type}
  */
  readonly fileSystemType: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    directory_path: cdktn.stringToTerraform(struct!.directoryPath),
    file_system_access_mode: cdktn.stringToTerraform(struct!.fileSystemAccessMode),
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    file_system_type: cdktn.stringToTerraform(struct!.fileSystemType),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    directory_path: {
      value: cdktn.stringToHclTerraform(struct!.directoryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_access_mode: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemAccessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_type: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryPath = this._directoryPath;
    }
    if (this._fileSystemAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemAccessMode = this._fileSystemAccessMode;
    }
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemType = this._fileSystemType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directoryPath = undefined;
      this._fileSystemAccessMode = undefined;
      this._fileSystemId = undefined;
      this._fileSystemType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directoryPath = value.directoryPath;
      this._fileSystemAccessMode = value.fileSystemAccessMode;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemType = value.fileSystemType;
    }
  }

  // directory_path - computed: false, optional: false, required: true
  private _directoryPath?: string; 
  public get directoryPath() {
    return this.getStringAttribute('directory_path');
  }
  public set directoryPath(value: string) {
    this._directoryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryPathInput() {
    return this._directoryPath;
  }

  // file_system_access_mode - computed: false, optional: false, required: true
  private _fileSystemAccessMode?: string; 
  public get fileSystemAccessMode() {
    return this.getStringAttribute('file_system_access_mode');
  }
  public set fileSystemAccessMode(value: string) {
    this._fileSystemAccessMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemAccessModeInput() {
    return this._fileSystemAccessMode;
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_type - computed: false, optional: false, required: true
  private _fileSystemType?: string; 
  public get fileSystemType() {
    return this.getStringAttribute('file_system_type');
  }
  public set fileSystemType(value: string) {
    this._fileSystemType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemTypeInput() {
    return this._fileSystemType;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#hub_content_arn SagemakerHyperParameterTuningJob#hub_content_arn}
  */
  readonly hubContentArn: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hub_content_arn: cdktn.stringToTerraform(struct!.hubContentArn),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hub_content_arn: {
      value: cdktn.stringToHclTerraform(struct!.hubContentArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hubContentArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubContentArn = this._hubContentArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hubContentArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hubContentArn = value.hubContentArn;
    }
  }

  // hub_content_arn - computed: false, optional: false, required: true
  private _hubContentArn?: string; 
  public get hubContentArn() {
    return this.getStringAttribute('hub_content_arn');
  }
  public set hubContentArn(value: string) {
    this._hubContentArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubContentArnInput() {
    return this._hubContentArn;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#accept_eula SagemakerHyperParameterTuningJob#accept_eula}
  */
  readonly acceptEula: boolean | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept_eula: {
      value: cdktn.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptEula = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: false, optional: false, required: true
  private _acceptEula?: boolean | cdktn.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktn.IResolvable) {
    this._acceptEula = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#attribute_names SagemakerHyperParameterTuningJob#attribute_names}
  */
  readonly attributeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_group_names SagemakerHyperParameterTuningJob#instance_group_names}
  */
  readonly instanceGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_data_distribution_type SagemakerHyperParameterTuningJob#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_data_type SagemakerHyperParameterTuningJob#s3_data_type}
  */
  readonly s3DataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_uri SagemakerHyperParameterTuningJob#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * hub_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#hub_access_config SagemakerHyperParameterTuningJob#hub_access_config}
  */
  readonly hubAccessConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfig[] | cdktn.IResolvable;
  /**
  * model_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#model_access_config SagemakerHyperParameterTuningJob#model_access_config}
  */
  readonly modelAccessConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfig[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.attributeNames),
    instance_group_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceGroupNames),
    s3_data_distribution_type: cdktn.stringToTerraform(struct!.s3DataDistributionType),
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    hub_access_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigToTerraform, true)(struct!.hubAccessConfig),
    model_access_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigToTerraform, true)(struct!.modelAccessConfig),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.attributeNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    instance_group_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceGroupNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    s3_data_distribution_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataDistributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hub_access_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigToHclTerraform, true)(struct!.hubAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigList",
    },
    model_access_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigToHclTerraform, true)(struct!.modelAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNames = this._attributeNames;
    }
    if (this._instanceGroupNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupNames = this._instanceGroupNames;
    }
    if (this._s3DataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._hubAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubAccessConfig = this._hubAccessConfig?.internalValue;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeNames = undefined;
      this._instanceGroupNames = undefined;
      this._s3DataDistributionType = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
      this._hubAccessConfig.internalValue = undefined;
      this._modelAccessConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeNames = value.attributeNames;
      this._instanceGroupNames = value.instanceGroupNames;
      this._s3DataDistributionType = value.s3DataDistributionType;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
      this._hubAccessConfig.internalValue = value.hubAccessConfig;
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
    }
  }

  // attribute_names - computed: false, optional: true, required: false
  private _attributeNames?: string[]; 
  public get attributeNames() {
    return cdktn.Fn.tolist(this.getListAttribute('attribute_names'));
  }
  public set attributeNames(value: string[]) {
    this._attributeNames = value;
  }
  public resetAttributeNames() {
    this._attributeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNamesInput() {
    return this._attributeNames;
  }

  // instance_group_names - computed: false, optional: true, required: false
  private _instanceGroupNames?: string[]; 
  public get instanceGroupNames() {
    return cdktn.Fn.tolist(this.getListAttribute('instance_group_names'));
  }
  public set instanceGroupNames(value: string[]) {
    this._instanceGroupNames = value;
  }
  public resetInstanceGroupNames() {
    this._instanceGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNamesInput() {
    return this._instanceGroupNames;
  }

  // s3_data_distribution_type - computed: false, optional: true, required: false
  private _s3DataDistributionType?: string; 
  public get s3DataDistributionType() {
    return this.getStringAttribute('s3_data_distribution_type');
  }
  public set s3DataDistributionType(value: string) {
    this._s3DataDistributionType = value;
  }
  public resetS3DataDistributionType() {
    this._s3DataDistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataDistributionTypeInput() {
    return this._s3DataDistributionType;
  }

  // s3_data_type - computed: false, optional: false, required: true
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // hub_access_config - computed: false, optional: true, required: false
  private _hubAccessConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfigList(this, "hub_access_config", false);
  public get hubAccessConfig() {
    return this._hubAccessConfig;
  }
  public putHubAccessConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceHubAccessConfig[] | cdktn.IResolvable) {
    this._hubAccessConfig.internalValue = value;
  }
  public resetHubAccessConfig() {
    this._hubAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubAccessConfigInput() {
    return this._hubAccessConfig.internalValue;
  }

  // model_access_config - computed: false, optional: true, required: false
  private _modelAccessConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfigList(this, "model_access_config", false);
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceModelAccessConfig[] | cdktn.IResolvable) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSource {
  /**
  * file_system_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#file_system_data_source SagemakerHyperParameterTuningJob#file_system_data_source}
  */
  readonly fileSystemDataSource?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSource[] | cdktn.IResolvable;
  /**
  * s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_data_source SagemakerHyperParameterTuningJob#s3_data_source}
  */
  readonly s3DataSource?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSource[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_data_source: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceToTerraform, true)(struct!.fileSystemDataSource),
    s3_data_source: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceToTerraform, true)(struct!.s3DataSource),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_data_source: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceToHclTerraform, true)(struct!.fileSystemDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceList",
    },
    s3_data_source: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceToHclTerraform, true)(struct!.s3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemDataSource = this._fileSystemDataSource?.internalValue;
    }
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemDataSource.internalValue = undefined;
      this._s3DataSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemDataSource.internalValue = value.fileSystemDataSource;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // file_system_data_source - computed: false, optional: true, required: false
  private _fileSystemDataSource = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSourceList(this, "file_system_data_source", false);
  public get fileSystemDataSource() {
    return this._fileSystemDataSource;
  }
  public putFileSystemDataSource(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceFileSystemDataSource[] | cdktn.IResolvable) {
    this._fileSystemDataSource.internalValue = value;
  }
  public resetFileSystemDataSource() {
    this._fileSystemDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemDataSourceInput() {
    return this._fileSystemDataSource.internalValue;
  }

  // s3_data_source - computed: false, optional: true, required: false
  private _s3DataSource = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSourceList(this, "s3_data_source", false);
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceS3DataSource[] | cdktn.IResolvable) {
    this._s3DataSource.internalValue = value;
  }
  public resetS3DataSource() {
    this._s3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#seed SagemakerHyperParameterTuningJob#seed}
  */
  readonly seed: number;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    seed: cdktn.numberToTerraform(struct!.seed),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    seed: {
      value: cdktn.numberToHclTerraform(struct!.seed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seed = this._seed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seed = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seed = value.seed;
    }
  }

  // seed - computed: false, optional: false, required: true
  private _seed?: number; 
  public get seed() {
    return this.getNumberAttribute('seed');
  }
  public set seed(value: number) {
    this._seed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#channel_name SagemakerHyperParameterTuningJob#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#compression_type SagemakerHyperParameterTuningJob#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#content_type SagemakerHyperParameterTuningJob#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#input_mode SagemakerHyperParameterTuningJob#input_mode}
  */
  readonly inputMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#record_wrapper_type SagemakerHyperParameterTuningJob#record_wrapper_type}
  */
  readonly recordWrapperType?: string;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#data_source SagemakerHyperParameterTuningJob#data_source}
  */
  readonly dataSource?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSource[] | cdktn.IResolvable;
  /**
  * shuffle_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#shuffle_config SagemakerHyperParameterTuningJob#shuffle_config}
  */
  readonly shuffleConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfig[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_name: cdktn.stringToTerraform(struct!.channelName),
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    input_mode: cdktn.stringToTerraform(struct!.inputMode),
    record_wrapper_type: cdktn.stringToTerraform(struct!.recordWrapperType),
    data_source: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceToTerraform, true)(struct!.dataSource),
    shuffle_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfigToTerraform, true)(struct!.shuffleConfig),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_name: {
      value: cdktn.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_mode: {
      value: cdktn.stringToHclTerraform(struct!.inputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_wrapper_type: {
      value: cdktn.stringToHclTerraform(struct!.recordWrapperType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceList",
    },
    shuffle_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfigToHclTerraform, true)(struct!.shuffleConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._inputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputMode = this._inputMode;
    }
    if (this._recordWrapperType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordWrapperType = this._recordWrapperType;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._shuffleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shuffleConfig = this._shuffleConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelName = undefined;
      this._compressionType = undefined;
      this._contentType = undefined;
      this._inputMode = undefined;
      this._recordWrapperType = undefined;
      this._dataSource.internalValue = undefined;
      this._shuffleConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelName = value.channelName;
      this._compressionType = value.compressionType;
      this._contentType = value.contentType;
      this._inputMode = value.inputMode;
      this._recordWrapperType = value.recordWrapperType;
      this._dataSource.internalValue = value.dataSource;
      this._shuffleConfig.internalValue = value.shuffleConfig;
    }
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

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // input_mode - computed: false, optional: true, required: false
  private _inputMode?: string; 
  public get inputMode() {
    return this.getStringAttribute('input_mode');
  }
  public set inputMode(value: string) {
    this._inputMode = value;
  }
  public resetInputMode() {
    this._inputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputModeInput() {
    return this._inputMode;
  }

  // record_wrapper_type - computed: false, optional: true, required: false
  private _recordWrapperType?: string; 
  public get recordWrapperType() {
    return this.getStringAttribute('record_wrapper_type');
  }
  public set recordWrapperType(value: string) {
    this._recordWrapperType = value;
  }
  public resetRecordWrapperType() {
    this._recordWrapperType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordWrapperTypeInput() {
    return this._recordWrapperType;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigDataSource[] | cdktn.IResolvable) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // shuffle_config - computed: false, optional: true, required: false
  private _shuffleConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfigList(this, "shuffle_config", false);
  public get shuffleConfig() {
    return this._shuffleConfig;
  }
  public putShuffleConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigShuffleConfig[] | cdktn.IResolvable) {
    this._shuffleConfig.internalValue = value;
  }
  public resetShuffleConfig() {
    this._shuffleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shuffleConfigInput() {
    return this._shuffleConfig.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#compression_type SagemakerHyperParameterTuningJob#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#kms_key_id SagemakerHyperParameterTuningJob#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#s3_output_path SagemakerHyperParameterTuningJob#s3_output_path}
  */
  readonly s3OutputPath: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._kmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._kmsKeyId = value.kmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // s3_output_path - computed: false, optional: false, required: true
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count SagemakerHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_group_name SagemakerHyperParameterTuningJob#instance_group_name}
  */
  readonly instanceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_type SagemakerHyperParameterTuningJob#instance_type}
  */
  readonly instanceType: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroupsToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_group_name: cdktn.stringToTerraform(struct!.instanceGroupName),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroupsToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_group_name: {
      value: cdktn.stringToHclTerraform(struct!.instanceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroups | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupName = this._instanceGroupName;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroups | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceGroupName = undefined;
      this._instanceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceGroupName = value.instanceGroupName;
      this._instanceType = value.instanceType;
    }
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_group_name - computed: false, optional: false, required: true
  private _instanceGroupName?: string; 
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }
  public set instanceGroupName(value: string) {
    this._instanceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNameInput() {
    return this._instanceGroupName;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroupsList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroups[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroupsOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count SagemakerHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#ultra_server_id SagemakerHyperParameterTuningJob#ultra_server_id}
  */
  readonly ultraServerId?: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    ultra_server_id: cdktn.stringToTerraform(struct!.ultraServerId),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ultra_server_id: {
      value: cdktn.stringToHclTerraform(struct!.ultraServerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._ultraServerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ultraServerId = this._ultraServerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._ultraServerId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._ultraServerId = value.ultraServerId;
    }
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // ultra_server_id - computed: false, optional: true, required: false
  private _ultraServerId?: string; 
  public get ultraServerId() {
    return this.getStringAttribute('ultra_server_id');
  }
  public set ultraServerId(value: string) {
    this._ultraServerId = value;
  }
  public resetUltraServerId() {
    this._ultraServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ultraServerIdInput() {
    return this._ultraServerId;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecifications[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#enable_multiple_jobs SagemakerHyperParameterTuningJob#enable_multiple_jobs}
  */
  readonly enableMultipleJobs?: boolean | cdktn.IResolvable;
  /**
  * placement_specifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#placement_specifications SagemakerHyperParameterTuningJob#placement_specifications}
  */
  readonly placementSpecifications?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecifications[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_multiple_jobs: cdktn.booleanToTerraform(struct!.enableMultipleJobs),
    placement_specifications: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsToTerraform, true)(struct!.placementSpecifications),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_multiple_jobs: {
      value: cdktn.booleanToHclTerraform(struct!.enableMultipleJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    placement_specifications: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsToHclTerraform, true)(struct!.placementSpecifications),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMultipleJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMultipleJobs = this._enableMultipleJobs;
    }
    if (this._placementSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementSpecifications = this._placementSpecifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableMultipleJobs = undefined;
      this._placementSpecifications.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableMultipleJobs = value.enableMultipleJobs;
      this._placementSpecifications.internalValue = value.placementSpecifications;
    }
  }

  // enable_multiple_jobs - computed: false, optional: true, required: false
  private _enableMultipleJobs?: boolean | cdktn.IResolvable; 
  public get enableMultipleJobs() {
    return this.getBooleanAttribute('enable_multiple_jobs');
  }
  public set enableMultipleJobs(value: boolean | cdktn.IResolvable) {
    this._enableMultipleJobs = value;
  }
  public resetEnableMultipleJobs() {
    this._enableMultipleJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultipleJobsInput() {
    return this._enableMultipleJobs;
  }

  // placement_specifications - computed: false, optional: true, required: false
  private _placementSpecifications = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecificationsList(this, "placement_specifications", false);
  public get placementSpecifications() {
    return this._placementSpecifications;
  }
  public putPlacementSpecifications(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigPlacementSpecifications[] | cdktn.IResolvable) {
    this._placementSpecifications.internalValue = value;
  }
  public resetPlacementSpecifications() {
    this._placementSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementSpecificationsInput() {
    return this._placementSpecifications.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_count SagemakerHyperParameterTuningJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_type SagemakerHyperParameterTuningJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#keep_alive_period_in_seconds SagemakerHyperParameterTuningJob#keep_alive_period_in_seconds}
  */
  readonly keepAlivePeriodInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#training_plan_arn SagemakerHyperParameterTuningJob#training_plan_arn}
  */
  readonly trainingPlanArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_kms_key_id SagemakerHyperParameterTuningJob#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#volume_size_in_gb SagemakerHyperParameterTuningJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
  /**
  * instance_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_groups SagemakerHyperParameterTuningJob#instance_groups}
  */
  readonly instanceGroups?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroups[] | cdktn.IResolvable;
  /**
  * instance_placement_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#instance_placement_config SagemakerHyperParameterTuningJob#instance_placement_config}
  */
  readonly instancePlacementConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfig[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    keep_alive_period_in_seconds: cdktn.numberToTerraform(struct!.keepAlivePeriodInSeconds),
    training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    instance_groups: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroupsToTerraform, true)(struct!.instanceGroups),
    instance_placement_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigToTerraform, true)(struct!.instancePlacementConfig),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_alive_period_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.keepAlivePeriodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    training_plan_arn: {
      value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_groups: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroupsToHclTerraform, true)(struct!.instanceGroups),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroupsList",
    },
    instance_placement_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigToHclTerraform, true)(struct!.instancePlacementConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._keepAlivePeriodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAlivePeriodInSeconds = this._keepAlivePeriodInSeconds;
    }
    if (this._trainingPlanArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingPlanArn = this._trainingPlanArn;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    if (this._instanceGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroups = this._instanceGroups?.internalValue;
    }
    if (this._instancePlacementConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePlacementConfig = this._instancePlacementConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._keepAlivePeriodInSeconds = undefined;
      this._trainingPlanArn = undefined;
      this._volumeKmsKeyId = undefined;
      this._volumeSizeInGb = undefined;
      this._instanceGroups.internalValue = undefined;
      this._instancePlacementConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._keepAlivePeriodInSeconds = value.keepAlivePeriodInSeconds;
      this._trainingPlanArn = value.trainingPlanArn;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._volumeSizeInGb = value.volumeSizeInGb;
      this._instanceGroups.internalValue = value.instanceGroups;
      this._instancePlacementConfig.internalValue = value.instancePlacementConfig;
    }
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // keep_alive_period_in_seconds - computed: false, optional: true, required: false
  private _keepAlivePeriodInSeconds?: number; 
  public get keepAlivePeriodInSeconds() {
    return this.getNumberAttribute('keep_alive_period_in_seconds');
  }
  public set keepAlivePeriodInSeconds(value: number) {
    this._keepAlivePeriodInSeconds = value;
  }
  public resetKeepAlivePeriodInSeconds() {
    this._keepAlivePeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAlivePeriodInSecondsInput() {
    return this._keepAlivePeriodInSeconds;
  }

  // training_plan_arn - computed: false, optional: true, required: false
  private _trainingPlanArn?: string; 
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
  public set trainingPlanArn(value: string) {
    this._trainingPlanArn = value;
  }
  public resetTrainingPlanArn() {
    this._trainingPlanArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingPlanArnInput() {
    return this._trainingPlanArn;
  }

  // volume_kms_key_id - computed: false, optional: true, required: false
  private _volumeKmsKeyId?: string; 
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }

  // instance_groups - computed: false, optional: true, required: false
  private _instanceGroups = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroupsList(this, "instance_groups", false);
  public get instanceGroups() {
    return this._instanceGroups;
  }
  public putInstanceGroups(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstanceGroups[] | cdktn.IResolvable) {
    this._instanceGroups.internalValue = value;
  }
  public resetInstanceGroups() {
    this._instanceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupsInput() {
    return this._instanceGroups.internalValue;
  }

  // instance_placement_config - computed: false, optional: true, required: false
  private _instancePlacementConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfigList(this, "instance_placement_config", false);
  public get instancePlacementConfig() {
    return this._instancePlacementConfig;
  }
  public putInstancePlacementConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigInstancePlacementConfig[] | cdktn.IResolvable) {
    this._instancePlacementConfig.internalValue = value;
  }
  public resetInstancePlacementConfig() {
    this._instancePlacementConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePlacementConfigInput() {
    return this._instancePlacementConfig.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#max_pending_time_in_seconds SagemakerHyperParameterTuningJob#max_pending_time_in_seconds}
  */
  readonly maxPendingTimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#max_runtime_in_seconds SagemakerHyperParameterTuningJob#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#max_wait_time_in_seconds SagemakerHyperParameterTuningJob#max_wait_time_in_seconds}
  */
  readonly maxWaitTimeInSeconds?: number;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingConditionToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_pending_time_in_seconds: cdktn.numberToTerraform(struct!.maxPendingTimeInSeconds),
    max_runtime_in_seconds: cdktn.numberToTerraform(struct!.maxRuntimeInSeconds),
    max_wait_time_in_seconds: cdktn.numberToTerraform(struct!.maxWaitTimeInSeconds),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingConditionToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_pending_time_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxPendingTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_runtime_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxRuntimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_wait_time_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxWaitTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPendingTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingTimeInSeconds = this._maxPendingTimeInSeconds;
    }
    if (this._maxRuntimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRuntimeInSeconds = this._maxRuntimeInSeconds;
    }
    if (this._maxWaitTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWaitTimeInSeconds = this._maxWaitTimeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPendingTimeInSeconds = undefined;
      this._maxRuntimeInSeconds = undefined;
      this._maxWaitTimeInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPendingTimeInSeconds = value.maxPendingTimeInSeconds;
      this._maxRuntimeInSeconds = value.maxRuntimeInSeconds;
      this._maxWaitTimeInSeconds = value.maxWaitTimeInSeconds;
    }
  }

  // max_pending_time_in_seconds - computed: false, optional: true, required: false
  private _maxPendingTimeInSeconds?: number; 
  public get maxPendingTimeInSeconds() {
    return this.getNumberAttribute('max_pending_time_in_seconds');
  }
  public set maxPendingTimeInSeconds(value: number) {
    this._maxPendingTimeInSeconds = value;
  }
  public resetMaxPendingTimeInSeconds() {
    this._maxPendingTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingTimeInSecondsInput() {
    return this._maxPendingTimeInSeconds;
  }

  // max_runtime_in_seconds - computed: false, optional: true, required: false
  private _maxRuntimeInSeconds?: number; 
  public get maxRuntimeInSeconds() {
    return this.getNumberAttribute('max_runtime_in_seconds');
  }
  public set maxRuntimeInSeconds(value: number) {
    this._maxRuntimeInSeconds = value;
  }
  public resetMaxRuntimeInSeconds() {
    this._maxRuntimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRuntimeInSecondsInput() {
    return this._maxRuntimeInSeconds;
  }

  // max_wait_time_in_seconds - computed: false, optional: true, required: false
  private _maxWaitTimeInSeconds?: number; 
  public get maxWaitTimeInSeconds() {
    return this.getNumberAttribute('max_wait_time_in_seconds');
  }
  public set maxWaitTimeInSeconds(value: number) {
    this._maxWaitTimeInSeconds = value;
  }
  public resetMaxWaitTimeInSeconds() {
    this._maxWaitTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitTimeInSecondsInput() {
    return this._maxWaitTimeInSeconds;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingConditionList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingCondition[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingConditionOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjective {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#metric_name SagemakerHyperParameterTuningJob#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#type SagemakerHyperParameterTuningJob#type}
  */
  readonly type: string;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjectiveToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjective | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjectiveToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjective | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
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

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjectiveOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjective | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjective | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._type = value.type;
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

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjectiveList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjective[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjectiveOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjectiveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#security_group_ids SagemakerHyperParameterTuningJob#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#subnets SagemakerHyperParameterTuningJob#subnets}
  */
  readonly subnets: string[];
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfigToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnets = value.subnets;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfigOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobTrainingJobDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#definition_name SagemakerHyperParameterTuningJob#definition_name}
  */
  readonly definitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#enable_inter_container_traffic_encryption SagemakerHyperParameterTuningJob#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#enable_managed_spot_training SagemakerHyperParameterTuningJob#enable_managed_spot_training}
  */
  readonly enableManagedSpotTraining?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#enable_network_isolation SagemakerHyperParameterTuningJob#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#environment SagemakerHyperParameterTuningJob#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#retry_strategy SagemakerHyperParameterTuningJob#retry_strategy}
  */
  readonly retryStrategy?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategy[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#role_arn SagemakerHyperParameterTuningJob#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#static_hyper_parameters SagemakerHyperParameterTuningJob#static_hyper_parameters}
  */
  readonly staticHyperParameters?: { [key: string]: string };
  /**
  * algorithm_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#algorithm_specification SagemakerHyperParameterTuningJob#algorithm_specification}
  */
  readonly algorithmSpecification?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecification[] | cdktn.IResolvable;
  /**
  * checkpoint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#checkpoint_config SagemakerHyperParameterTuningJob#checkpoint_config}
  */
  readonly checkpointConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfig[] | cdktn.IResolvable;
  /**
  * hyper_parameter_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#hyper_parameter_ranges SagemakerHyperParameterTuningJob#hyper_parameter_ranges}
  */
  readonly hyperParameterRanges?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRanges[] | cdktn.IResolvable;
  /**
  * hyper_parameter_tuning_resource_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#hyper_parameter_tuning_resource_config SagemakerHyperParameterTuningJob#hyper_parameter_tuning_resource_config}
  */
  readonly hyperParameterTuningResourceConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfig[] | cdktn.IResolvable;
  /**
  * input_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#input_data_config SagemakerHyperParameterTuningJob#input_data_config}
  */
  readonly inputDataConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfig[] | cdktn.IResolvable;
  /**
  * output_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#output_data_config SagemakerHyperParameterTuningJob#output_data_config}
  */
  readonly outputDataConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfig[] | cdktn.IResolvable;
  /**
  * resource_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#resource_config SagemakerHyperParameterTuningJob#resource_config}
  */
  readonly resourceConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfig[] | cdktn.IResolvable;
  /**
  * stopping_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#stopping_condition SagemakerHyperParameterTuningJob#stopping_condition}
  */
  readonly stoppingCondition?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingCondition[] | cdktn.IResolvable;
  /**
  * tuning_objective block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#tuning_objective SagemakerHyperParameterTuningJob#tuning_objective}
  */
  readonly tuningObjective?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjective[] | cdktn.IResolvable;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#vpc_config SagemakerHyperParameterTuningJob#vpc_config}
  */
  readonly vpcConfig?: SagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfig[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsToTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition_name: cdktn.stringToTerraform(struct!.definitionName),
    enable_inter_container_traffic_encryption: cdktn.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_managed_spot_training: cdktn.booleanToTerraform(struct!.enableManagedSpotTraining),
    enable_network_isolation: cdktn.booleanToTerraform(struct!.enableNetworkIsolation),
    environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
    retry_strategy: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategyToTerraform, false)(struct!.retryStrategy),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    static_hyper_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.staticHyperParameters),
    algorithm_specification: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationToTerraform, true)(struct!.algorithmSpecification),
    checkpoint_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfigToTerraform, true)(struct!.checkpointConfig),
    hyper_parameter_ranges: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesToTerraform, true)(struct!.hyperParameterRanges),
    hyper_parameter_tuning_resource_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigToTerraform, true)(struct!.hyperParameterTuningResourceConfig),
    input_data_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigToTerraform, true)(struct!.inputDataConfig),
    output_data_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfigToTerraform, true)(struct!.outputDataConfig),
    resource_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigToTerraform, true)(struct!.resourceConfig),
    stopping_condition: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingConditionToTerraform, true)(struct!.stoppingCondition),
    tuning_objective: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjectiveToTerraform, true)(struct!.tuningObjective),
    vpc_config: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfigToTerraform, true)(struct!.vpcConfig),
  }
}


export function sagemakerHyperParameterTuningJobTrainingJobDefinitionsToHclTerraform(struct?: SagemakerHyperParameterTuningJobTrainingJobDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition_name: {
      value: cdktn.stringToHclTerraform(struct!.definitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_inter_container_traffic_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableInterContainerTrafficEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_managed_spot_training: {
      value: cdktn.booleanToHclTerraform(struct!.enableManagedSpotTraining),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_network_isolation: {
      value: cdktn.booleanToHclTerraform(struct!.enableNetworkIsolation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    retry_strategy: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategyToHclTerraform, false)(struct!.retryStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategyList",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_hyper_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.staticHyperParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    algorithm_specification: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationToHclTerraform, true)(struct!.algorithmSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationList",
    },
    checkpoint_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfigToHclTerraform, true)(struct!.checkpointConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfigList",
    },
    hyper_parameter_ranges: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesToHclTerraform, true)(struct!.hyperParameterRanges),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesList",
    },
    hyper_parameter_tuning_resource_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigToHclTerraform, true)(struct!.hyperParameterTuningResourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigList",
    },
    input_data_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigToHclTerraform, true)(struct!.inputDataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigList",
    },
    output_data_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfigToHclTerraform, true)(struct!.outputDataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfigList",
    },
    resource_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigToHclTerraform, true)(struct!.resourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigList",
    },
    stopping_condition: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingConditionToHclTerraform, true)(struct!.stoppingCondition),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingConditionList",
    },
    tuning_objective: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjectiveToHclTerraform, true)(struct!.tuningObjective),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjectiveList",
    },
    vpc_config: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfigToHclTerraform, true)(struct!.vpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobTrainingJobDefinitions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.definitionName = this._definitionName;
    }
    if (this._enableInterContainerTrafficEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInterContainerTrafficEncryption = this._enableInterContainerTrafficEncryption;
    }
    if (this._enableManagedSpotTraining !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableManagedSpotTraining = this._enableManagedSpotTraining;
    }
    if (this._enableNetworkIsolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetworkIsolation = this._enableNetworkIsolation;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._retryStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryStrategy = this._retryStrategy?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._staticHyperParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticHyperParameters = this._staticHyperParameters;
    }
    if (this._algorithmSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmSpecification = this._algorithmSpecification?.internalValue;
    }
    if (this._checkpointConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointConfig = this._checkpointConfig?.internalValue;
    }
    if (this._hyperParameterRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperParameterRanges = this._hyperParameterRanges?.internalValue;
    }
    if (this._hyperParameterTuningResourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperParameterTuningResourceConfig = this._hyperParameterTuningResourceConfig?.internalValue;
    }
    if (this._inputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputDataConfig = this._inputDataConfig?.internalValue;
    }
    if (this._outputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputDataConfig = this._outputDataConfig?.internalValue;
    }
    if (this._resourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfig = this._resourceConfig?.internalValue;
    }
    if (this._stoppingCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stoppingCondition = this._stoppingCondition?.internalValue;
    }
    if (this._tuningObjective?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuningObjective = this._tuningObjective?.internalValue;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobTrainingJobDefinitions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definitionName = undefined;
      this._enableInterContainerTrafficEncryption = undefined;
      this._enableManagedSpotTraining = undefined;
      this._enableNetworkIsolation = undefined;
      this._environment = undefined;
      this._retryStrategy.internalValue = undefined;
      this._roleArn = undefined;
      this._staticHyperParameters = undefined;
      this._algorithmSpecification.internalValue = undefined;
      this._checkpointConfig.internalValue = undefined;
      this._hyperParameterRanges.internalValue = undefined;
      this._hyperParameterTuningResourceConfig.internalValue = undefined;
      this._inputDataConfig.internalValue = undefined;
      this._outputDataConfig.internalValue = undefined;
      this._resourceConfig.internalValue = undefined;
      this._stoppingCondition.internalValue = undefined;
      this._tuningObjective.internalValue = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definitionName = value.definitionName;
      this._enableInterContainerTrafficEncryption = value.enableInterContainerTrafficEncryption;
      this._enableManagedSpotTraining = value.enableManagedSpotTraining;
      this._enableNetworkIsolation = value.enableNetworkIsolation;
      this._environment = value.environment;
      this._retryStrategy.internalValue = value.retryStrategy;
      this._roleArn = value.roleArn;
      this._staticHyperParameters = value.staticHyperParameters;
      this._algorithmSpecification.internalValue = value.algorithmSpecification;
      this._checkpointConfig.internalValue = value.checkpointConfig;
      this._hyperParameterRanges.internalValue = value.hyperParameterRanges;
      this._hyperParameterTuningResourceConfig.internalValue = value.hyperParameterTuningResourceConfig;
      this._inputDataConfig.internalValue = value.inputDataConfig;
      this._outputDataConfig.internalValue = value.outputDataConfig;
      this._resourceConfig.internalValue = value.resourceConfig;
      this._stoppingCondition.internalValue = value.stoppingCondition;
      this._tuningObjective.internalValue = value.tuningObjective;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // definition_name - computed: false, optional: true, required: false
  private _definitionName?: string; 
  public get definitionName() {
    return this.getStringAttribute('definition_name');
  }
  public set definitionName(value: string) {
    this._definitionName = value;
  }
  public resetDefinitionName() {
    this._definitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionNameInput() {
    return this._definitionName;
  }

  // enable_inter_container_traffic_encryption - computed: true, optional: true, required: false
  private _enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable; 
  public get enableInterContainerTrafficEncryption() {
    return this.getBooleanAttribute('enable_inter_container_traffic_encryption');
  }
  public set enableInterContainerTrafficEncryption(value: boolean | cdktn.IResolvable) {
    this._enableInterContainerTrafficEncryption = value;
  }
  public resetEnableInterContainerTrafficEncryption() {
    this._enableInterContainerTrafficEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInterContainerTrafficEncryptionInput() {
    return this._enableInterContainerTrafficEncryption;
  }

  // enable_managed_spot_training - computed: true, optional: true, required: false
  private _enableManagedSpotTraining?: boolean | cdktn.IResolvable; 
  public get enableManagedSpotTraining() {
    return this.getBooleanAttribute('enable_managed_spot_training');
  }
  public set enableManagedSpotTraining(value: boolean | cdktn.IResolvable) {
    this._enableManagedSpotTraining = value;
  }
  public resetEnableManagedSpotTraining() {
    this._enableManagedSpotTraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableManagedSpotTrainingInput() {
    return this._enableManagedSpotTraining;
  }

  // enable_network_isolation - computed: true, optional: true, required: false
  private _enableNetworkIsolation?: boolean | cdktn.IResolvable; 
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }
  public set enableNetworkIsolation(value: boolean | cdktn.IResolvable) {
    this._enableNetworkIsolation = value;
  }
  public resetEnableNetworkIsolation() {
    this._enableNetworkIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkIsolationInput() {
    return this._enableNetworkIsolation;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // retry_strategy - computed: true, optional: true, required: false
  private _retryStrategy = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategyList(this, "retry_strategy", false);
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsRetryStrategy[] | cdktn.IResolvable) {
    this._retryStrategy.internalValue = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy.internalValue;
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

  // static_hyper_parameters - computed: true, optional: true, required: false
  private _staticHyperParameters?: { [key: string]: string }; 
  public get staticHyperParameters() {
    return this.getStringMapAttribute('static_hyper_parameters');
  }
  public set staticHyperParameters(value: { [key: string]: string }) {
    this._staticHyperParameters = value;
  }
  public resetStaticHyperParameters() {
    this._staticHyperParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticHyperParametersInput() {
    return this._staticHyperParameters;
  }

  // algorithm_specification - computed: false, optional: true, required: false
  private _algorithmSpecification = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecificationList(this, "algorithm_specification", false);
  public get algorithmSpecification() {
    return this._algorithmSpecification;
  }
  public putAlgorithmSpecification(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsAlgorithmSpecification[] | cdktn.IResolvable) {
    this._algorithmSpecification.internalValue = value;
  }
  public resetAlgorithmSpecification() {
    this._algorithmSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmSpecificationInput() {
    return this._algorithmSpecification.internalValue;
  }

  // checkpoint_config - computed: false, optional: true, required: false
  private _checkpointConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfigList(this, "checkpoint_config", false);
  public get checkpointConfig() {
    return this._checkpointConfig;
  }
  public putCheckpointConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsCheckpointConfig[] | cdktn.IResolvable) {
    this._checkpointConfig.internalValue = value;
  }
  public resetCheckpointConfig() {
    this._checkpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointConfigInput() {
    return this._checkpointConfig.internalValue;
  }

  // hyper_parameter_ranges - computed: false, optional: true, required: false
  private _hyperParameterRanges = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRangesList(this, "hyper_parameter_ranges", false);
  public get hyperParameterRanges() {
    return this._hyperParameterRanges;
  }
  public putHyperParameterRanges(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterRanges[] | cdktn.IResolvable) {
    this._hyperParameterRanges.internalValue = value;
  }
  public resetHyperParameterRanges() {
    this._hyperParameterRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParameterRangesInput() {
    return this._hyperParameterRanges.internalValue;
  }

  // hyper_parameter_tuning_resource_config - computed: false, optional: true, required: false
  private _hyperParameterTuningResourceConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfigList(this, "hyper_parameter_tuning_resource_config", false);
  public get hyperParameterTuningResourceConfig() {
    return this._hyperParameterTuningResourceConfig;
  }
  public putHyperParameterTuningResourceConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsHyperParameterTuningResourceConfig[] | cdktn.IResolvable) {
    this._hyperParameterTuningResourceConfig.internalValue = value;
  }
  public resetHyperParameterTuningResourceConfig() {
    this._hyperParameterTuningResourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParameterTuningResourceConfigInput() {
    return this._hyperParameterTuningResourceConfig.internalValue;
  }

  // input_data_config - computed: false, optional: true, required: false
  private _inputDataConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfigList(this, "input_data_config", false);
  public get inputDataConfig() {
    return this._inputDataConfig;
  }
  public putInputDataConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsInputDataConfig[] | cdktn.IResolvable) {
    this._inputDataConfig.internalValue = value;
  }
  public resetInputDataConfig() {
    this._inputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataConfigInput() {
    return this._inputDataConfig.internalValue;
  }

  // output_data_config - computed: false, optional: true, required: false
  private _outputDataConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfigList(this, "output_data_config", false);
  public get outputDataConfig() {
    return this._outputDataConfig;
  }
  public putOutputDataConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputDataConfig[] | cdktn.IResolvable) {
    this._outputDataConfig.internalValue = value;
  }
  public resetOutputDataConfig() {
    this._outputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDataConfigInput() {
    return this._outputDataConfig.internalValue;
  }

  // resource_config - computed: false, optional: true, required: false
  private _resourceConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfigList(this, "resource_config", false);
  public get resourceConfig() {
    return this._resourceConfig;
  }
  public putResourceConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsResourceConfig[] | cdktn.IResolvable) {
    this._resourceConfig.internalValue = value;
  }
  public resetResourceConfig() {
    this._resourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigInput() {
    return this._resourceConfig.internalValue;
  }

  // stopping_condition - computed: false, optional: true, required: false
  private _stoppingCondition = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingConditionList(this, "stopping_condition", false);
  public get stoppingCondition() {
    return this._stoppingCondition;
  }
  public putStoppingCondition(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsStoppingCondition[] | cdktn.IResolvable) {
    this._stoppingCondition.internalValue = value;
  }
  public resetStoppingCondition() {
    this._stoppingCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppingConditionInput() {
    return this._stoppingCondition.internalValue;
  }

  // tuning_objective - computed: false, optional: true, required: false
  private _tuningObjective = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjectiveList(this, "tuning_objective", false);
  public get tuningObjective() {
    return this._tuningObjective;
  }
  public putTuningObjective(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsTuningObjective[] | cdktn.IResolvable) {
    this._tuningObjective.internalValue = value;
  }
  public resetTuningObjective() {
    this._tuningObjective.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuningObjectiveInput() {
    return this._tuningObjective.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfigList(this, "vpc_config", false);
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: SagemakerHyperParameterTuningJobTrainingJobDefinitionsVpcConfig[] | cdktn.IResolvable) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobTrainingJobDefinitionsList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobTrainingJobDefinitions[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputReference {
    return new SagemakerHyperParameterTuningJobTrainingJobDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#name SagemakerHyperParameterTuningJob#name}
  */
  readonly name: string;
}

export function sagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobsToTerraform(struct?: SagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function sagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobsToHclTerraform(struct?: SagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class SagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobsList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobs[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobsOutputReference {
    return new SagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerHyperParameterTuningJobWarmStartConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#warm_start_type SagemakerHyperParameterTuningJob#warm_start_type}
  */
  readonly warmStartType?: string;
  /**
  * parent_hyper_parameter_tuning_jobs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#parent_hyper_parameter_tuning_jobs SagemakerHyperParameterTuningJob#parent_hyper_parameter_tuning_jobs}
  */
  readonly parentHyperParameterTuningJobs?: SagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobs[] | cdktn.IResolvable;
}

export function sagemakerHyperParameterTuningJobWarmStartConfigToTerraform(struct?: SagemakerHyperParameterTuningJobWarmStartConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    warm_start_type: cdktn.stringToTerraform(struct!.warmStartType),
    parent_hyper_parameter_tuning_jobs: cdktn.listMapper(sagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobsToTerraform, true)(struct!.parentHyperParameterTuningJobs),
  }
}


export function sagemakerHyperParameterTuningJobWarmStartConfigToHclTerraform(struct?: SagemakerHyperParameterTuningJobWarmStartConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    warm_start_type: {
      value: cdktn.stringToHclTerraform(struct!.warmStartType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_hyper_parameter_tuning_jobs: {
      value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobsToHclTerraform, true)(struct!.parentHyperParameterTuningJobs),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHyperParameterTuningJobWarmStartConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerHyperParameterTuningJobWarmStartConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._warmStartType !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmStartType = this._warmStartType;
    }
    if (this._parentHyperParameterTuningJobs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentHyperParameterTuningJobs = this._parentHyperParameterTuningJobs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHyperParameterTuningJobWarmStartConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._warmStartType = undefined;
      this._parentHyperParameterTuningJobs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._warmStartType = value.warmStartType;
      this._parentHyperParameterTuningJobs.internalValue = value.parentHyperParameterTuningJobs;
    }
  }

  // warm_start_type - computed: false, optional: true, required: false
  private _warmStartType?: string; 
  public get warmStartType() {
    return this.getStringAttribute('warm_start_type');
  }
  public set warmStartType(value: string) {
    this._warmStartType = value;
  }
  public resetWarmStartType() {
    this._warmStartType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmStartTypeInput() {
    return this._warmStartType;
  }

  // parent_hyper_parameter_tuning_jobs - computed: false, optional: true, required: false
  private _parentHyperParameterTuningJobs = new SagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobsList(this, "parent_hyper_parameter_tuning_jobs", false);
  public get parentHyperParameterTuningJobs() {
    return this._parentHyperParameterTuningJobs;
  }
  public putParentHyperParameterTuningJobs(value: SagemakerHyperParameterTuningJobWarmStartConfigParentHyperParameterTuningJobs[] | cdktn.IResolvable) {
    this._parentHyperParameterTuningJobs.internalValue = value;
  }
  public resetParentHyperParameterTuningJobs() {
    this._parentHyperParameterTuningJobs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentHyperParameterTuningJobsInput() {
    return this._parentHyperParameterTuningJobs.internalValue;
  }
}

export class SagemakerHyperParameterTuningJobWarmStartConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerHyperParameterTuningJobWarmStartConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerHyperParameterTuningJobWarmStartConfigOutputReference {
    return new SagemakerHyperParameterTuningJobWarmStartConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job aws_sagemaker_hyper_parameter_tuning_job}
*/
export class SagemakerHyperParameterTuningJob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_hyper_parameter_tuning_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerHyperParameterTuningJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerHyperParameterTuningJob to import
  * @param importFromId The id of the existing SagemakerHyperParameterTuningJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerHyperParameterTuningJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_hyper_parameter_tuning_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sagemaker_hyper_parameter_tuning_job aws_sagemaker_hyper_parameter_tuning_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerHyperParameterTuningJobConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerHyperParameterTuningJobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_hyper_parameter_tuning_job',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.57.1',
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
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._autotune.internalValue = config.autotune;
    this._config.internalValue = config.config;
    this._timeouts.internalValue = config.timeouts;
    this._trainingJobDefinition.internalValue = config.trainingJobDefinition;
    this._trainingJobDefinitions.internalValue = config.trainingJobDefinitions;
    this._warmStartConfig.internalValue = config.warmStartConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
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

  // autotune - computed: false, optional: true, required: false
  private _autotune = new SagemakerHyperParameterTuningJobAutotuneList(this, "autotune", false);
  public get autotune() {
    return this._autotune;
  }
  public putAutotune(value: SagemakerHyperParameterTuningJobAutotune[] | cdktn.IResolvable) {
    this._autotune.internalValue = value;
  }
  public resetAutotune() {
    this._autotune.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autotuneInput() {
    return this._autotune.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new SagemakerHyperParameterTuningJobConfigAList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: SagemakerHyperParameterTuningJobConfigA[] | cdktn.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SagemakerHyperParameterTuningJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SagemakerHyperParameterTuningJobTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // training_job_definition - computed: false, optional: true, required: false
  private _trainingJobDefinition = new SagemakerHyperParameterTuningJobTrainingJobDefinitionList(this, "training_job_definition", false);
  public get trainingJobDefinition() {
    return this._trainingJobDefinition;
  }
  public putTrainingJobDefinition(value: SagemakerHyperParameterTuningJobTrainingJobDefinition[] | cdktn.IResolvable) {
    this._trainingJobDefinition.internalValue = value;
  }
  public resetTrainingJobDefinition() {
    this._trainingJobDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingJobDefinitionInput() {
    return this._trainingJobDefinition.internalValue;
  }

  // training_job_definitions - computed: false, optional: true, required: false
  private _trainingJobDefinitions = new SagemakerHyperParameterTuningJobTrainingJobDefinitionsList(this, "training_job_definitions", false);
  public get trainingJobDefinitions() {
    return this._trainingJobDefinitions;
  }
  public putTrainingJobDefinitions(value: SagemakerHyperParameterTuningJobTrainingJobDefinitions[] | cdktn.IResolvable) {
    this._trainingJobDefinitions.internalValue = value;
  }
  public resetTrainingJobDefinitions() {
    this._trainingJobDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingJobDefinitionsInput() {
    return this._trainingJobDefinitions.internalValue;
  }

  // warm_start_config - computed: false, optional: true, required: false
  private _warmStartConfig = new SagemakerHyperParameterTuningJobWarmStartConfigList(this, "warm_start_config", false);
  public get warmStartConfig() {
    return this._warmStartConfig;
  }
  public putWarmStartConfig(value: SagemakerHyperParameterTuningJobWarmStartConfig[] | cdktn.IResolvable) {
    this._warmStartConfig.internalValue = value;
  }
  public resetWarmStartConfig() {
    this._warmStartConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmStartConfigInput() {
    return this._warmStartConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      autotune: cdktn.listMapper(sagemakerHyperParameterTuningJobAutotuneToTerraform, true)(this._autotune.internalValue),
      config: cdktn.listMapper(sagemakerHyperParameterTuningJobConfigAToTerraform, true)(this._config.internalValue),
      timeouts: sagemakerHyperParameterTuningJobTimeoutsToTerraform(this._timeouts.internalValue),
      training_job_definition: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionToTerraform, true)(this._trainingJobDefinition.internalValue),
      training_job_definitions: cdktn.listMapper(sagemakerHyperParameterTuningJobTrainingJobDefinitionsToTerraform, true)(this._trainingJobDefinitions.internalValue),
      warm_start_config: cdktn.listMapper(sagemakerHyperParameterTuningJobWarmStartConfigToTerraform, true)(this._warmStartConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      autotune: {
        value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobAutotuneToHclTerraform, true)(this._autotune.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerHyperParameterTuningJobAutotuneList",
      },
      config: {
        value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobConfigAToHclTerraform, true)(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerHyperParameterTuningJobConfigAList",
      },
      timeouts: {
        value: sagemakerHyperParameterTuningJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerHyperParameterTuningJobTimeouts",
      },
      training_job_definition: {
        value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionToHclTerraform, true)(this._trainingJobDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionList",
      },
      training_job_definitions: {
        value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobTrainingJobDefinitionsToHclTerraform, true)(this._trainingJobDefinitions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerHyperParameterTuningJobTrainingJobDefinitionsList",
      },
      warm_start_config: {
        value: cdktn.listMapperHcl(sagemakerHyperParameterTuningJobWarmStartConfigToHclTerraform, true)(this._warmStartConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerHyperParameterTuningJobWarmStartConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
