/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockEvaluationJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#application_type BedrockEvaluationJob#application_type}
  */
  readonly applicationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#customer_encryption_key_id BedrockEvaluationJob#customer_encryption_key_id}
  */
  readonly customerEncryptionKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#job_description BedrockEvaluationJob#job_description}
  */
  readonly jobDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#job_name BedrockEvaluationJob#job_name}
  */
  readonly jobName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#region BedrockEvaluationJob#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#role_arn BedrockEvaluationJob#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#skip_destroy BedrockEvaluationJob#skip_destroy}
  */
  readonly skipDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#tags BedrockEvaluationJob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * evaluation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#evaluation_config BedrockEvaluationJob#evaluation_config}
  */
  readonly evaluationConfig?: BedrockEvaluationJobEvaluationConfig[] | cdktn.IResolvable;
  /**
  * inference_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#inference_config BedrockEvaluationJob#inference_config}
  */
  readonly inferenceConfig?: BedrockEvaluationJobInferenceConfig[] | cdktn.IResolvable;
  /**
  * output_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#output_data_config BedrockEvaluationJob#output_data_config}
  */
  readonly outputDataConfig?: BedrockEvaluationJobOutputDataConfig[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#timeouts BedrockEvaluationJob#timeouts}
  */
  readonly timeouts?: BedrockEvaluationJobTimeouts;
}
export interface BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#float_value BedrockEvaluationJob#float_value}
  */
  readonly floatValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#string_value BedrockEvaluationJob#string_value}
  */
  readonly stringValue?: string;
}

export function bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValueToTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    float_value: cdktn.numberToTerraform(struct!.floatValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValueToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    float_value: {
      value: cdktn.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._floatValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._floatValue = value.floatValue;
      this._stringValue = value.stringValue;
    }
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}

export class BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValueList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValue[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValueOutputReference {
    return new BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#definition BedrockEvaluationJob#definition}
  */
  readonly definition: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#value BedrockEvaluationJob#value}
  */
  readonly value?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValue[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleToTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScale | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    value: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValueToTerraform, true)(struct!.value),
  }
}


export function bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScale | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition: {
      value: cdktn.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScale | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScale | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._value.internalValue = value.value;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // value - computed: false, optional: true, required: false
  private _value = new BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleValue[] | cdktn.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScale[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleOutputReference {
    return new BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#instructions BedrockEvaluationJob#instructions}
  */
  readonly instructions: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#name BedrockEvaluationJob#name}
  */
  readonly name: string;
  /**
  * rating_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#rating_scale BedrockEvaluationJob#rating_scale}
  */
  readonly ratingScale?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScale[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionToTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instructions: cdktn.stringToTerraform(struct!.instructions),
    name: cdktn.stringToTerraform(struct!.name),
    rating_scale: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleToTerraform, true)(struct!.ratingScale),
  }
}


export function bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instructions: {
      value: cdktn.stringToHclTerraform(struct!.instructions),
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
    rating_scale: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleToHclTerraform, true)(struct!.ratingScale),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instructions !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructions = this._instructions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ratingScale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratingScale = this._ratingScale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instructions = undefined;
      this._name = undefined;
      this._ratingScale.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instructions = value.instructions;
      this._name = value.name;
      this._ratingScale.internalValue = value.ratingScale;
    }
  }

  // instructions - computed: false, optional: false, required: true
  private _instructions?: string; 
  public get instructions() {
    return this.getStringAttribute('instructions');
  }
  public set instructions(value: string) {
    this._instructions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsInput() {
    return this._instructions;
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

  // rating_scale - computed: false, optional: true, required: false
  private _ratingScale = new BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScaleList(this, "rating_scale", false);
  public get ratingScale() {
    return this._ratingScale;
  }
  public putRatingScale(value: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionRatingScale[] | cdktn.IResolvable) {
    this._ratingScale.internalValue = value;
  }
  public resetRatingScale() {
    this._ratingScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratingScaleInput() {
    return this._ratingScale.internalValue;
  }
}

export class BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinition[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionOutputReference {
    return new BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetric {
  /**
  * custom_metric_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#custom_metric_definition BedrockEvaluationJob#custom_metric_definition}
  */
  readonly customMetricDefinition?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinition[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricToTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_metric_definition: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionToTerraform, true)(struct!.customMetricDefinition),
  }
}


export function bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_metric_definition: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionToHclTerraform, true)(struct!.customMetricDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMetricDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetricDefinition = this._customMetricDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMetricDefinition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMetricDefinition.internalValue = value.customMetricDefinition;
    }
  }

  // custom_metric_definition - computed: false, optional: true, required: false
  private _customMetricDefinition = new BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinitionList(this, "custom_metric_definition", false);
  public get customMetricDefinition() {
    return this._customMetricDefinition;
  }
  public putCustomMetricDefinition(value: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricCustomMetricDefinition[] | cdktn.IResolvable) {
    this._customMetricDefinition.internalValue = value;
  }
  public resetCustomMetricDefinition() {
    this._customMetricDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricDefinitionInput() {
    return this._customMetricDefinition.internalValue;
  }
}

export class BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetric[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricOutputReference {
    return new BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#model_identifier BedrockEvaluationJob#model_identifier}
  */
  readonly modelIdentifier: string;
}

export function bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelToTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_identifier: cdktn.stringToTerraform(struct!.modelIdentifier),
  }
}


export function bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_identifier: {
      value: cdktn.stringToHclTerraform(struct!.modelIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelIdentifier = this._modelIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelIdentifier = value.modelIdentifier;
    }
  }

  // model_identifier - computed: false, optional: false, required: true
  private _modelIdentifier?: string; 
  public get modelIdentifier() {
    return this.getStringAttribute('model_identifier');
  }
  public set modelIdentifier(value: string) {
    this._modelIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdentifierInput() {
    return this._modelIdentifier;
  }
}

export class BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModel[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelOutputReference {
    return new BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfig {
  /**
  * bedrock_evaluator_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#bedrock_evaluator_model BedrockEvaluationJob#bedrock_evaluator_model}
  */
  readonly bedrockEvaluatorModel?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModel[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigToTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bedrock_evaluator_model: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelToTerraform, true)(struct!.bedrockEvaluatorModel),
  }
}


export function bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bedrock_evaluator_model: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelToHclTerraform, true)(struct!.bedrockEvaluatorModel),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bedrockEvaluatorModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockEvaluatorModel = this._bedrockEvaluatorModel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bedrockEvaluatorModel.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bedrockEvaluatorModel.internalValue = value.bedrockEvaluatorModel;
    }
  }

  // bedrock_evaluator_model - computed: false, optional: true, required: false
  private _bedrockEvaluatorModel = new BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModelList(this, "bedrock_evaluator_model", false);
  public get bedrockEvaluatorModel() {
    return this._bedrockEvaluatorModel;
  }
  public putBedrockEvaluatorModel(value: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigBedrockEvaluatorModel[] | cdktn.IResolvable) {
    this._bedrockEvaluatorModel.internalValue = value;
  }
  public resetBedrockEvaluatorModel() {
    this._bedrockEvaluatorModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockEvaluatorModelInput() {
    return this._bedrockEvaluatorModel.internalValue;
  }
}

export class BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigOutputReference {
    return new BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfig {
  /**
  * custom_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#custom_metric BedrockEvaluationJob#custom_metric}
  */
  readonly customMetric?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetric[] | cdktn.IResolvable;
  /**
  * evaluator_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#evaluator_model_config BedrockEvaluationJob#evaluator_model_config}
  */
  readonly evaluatorModelConfig?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfig[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigToTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_metric: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricToTerraform, true)(struct!.customMetric),
    evaluator_model_config: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigToTerraform, true)(struct!.evaluatorModelConfig),
  }
}


export function bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_metric: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricToHclTerraform, true)(struct!.customMetric),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricList",
    },
    evaluator_model_config: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigToHclTerraform, true)(struct!.evaluatorModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetric = this._customMetric?.internalValue;
    }
    if (this._evaluatorModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorModelConfig = this._evaluatorModelConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMetric.internalValue = undefined;
      this._evaluatorModelConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMetric.internalValue = value.customMetric;
      this._evaluatorModelConfig.internalValue = value.evaluatorModelConfig;
    }
  }

  // custom_metric - computed: false, optional: true, required: false
  private _customMetric = new BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetricList(this, "custom_metric", false);
  public get customMetric() {
    return this._customMetric;
  }
  public putCustomMetric(value: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigCustomMetric[] | cdktn.IResolvable) {
    this._customMetric.internalValue = value;
  }
  public resetCustomMetric() {
    this._customMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricInput() {
    return this._customMetric.internalValue;
  }

  // evaluator_model_config - computed: false, optional: true, required: false
  private _evaluatorModelConfig = new BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfigList(this, "evaluator_model_config", false);
  public get evaluatorModelConfig() {
    return this._evaluatorModelConfig;
  }
  public putEvaluatorModelConfig(value: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigEvaluatorModelConfig[] | cdktn.IResolvable) {
    this._evaluatorModelConfig.internalValue = value;
  }
  public resetEvaluatorModelConfig() {
    this._evaluatorModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorModelConfigInput() {
    return this._evaluatorModelConfig.internalValue;
  }
}

export class BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigOutputReference {
    return new BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#s3_uri BedrockEvaluationJob#s3_uri}
  */
  readonly s3Uri: string;
}

export function bedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationToTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function bedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Uri = value.s3Uri;
    }
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

export class BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocation[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationOutputReference {
    return new BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDataset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#name BedrockEvaluationJob#name}
  */
  readonly name: string;
  /**
  * dataset_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#dataset_location BedrockEvaluationJob#dataset_location}
  */
  readonly datasetLocation?: BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocation[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetToTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDataset | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    dataset_location: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationToTerraform, true)(struct!.datasetLocation),
  }
}


export function bedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDataset | cdktn.IResolvable): any {
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
    dataset_location: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationToHclTerraform, true)(struct!.datasetLocation),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDataset | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._datasetLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetLocation = this._datasetLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDataset | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._datasetLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._datasetLocation.internalValue = value.datasetLocation;
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

  // dataset_location - computed: false, optional: true, required: false
  private _datasetLocation = new BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocationList(this, "dataset_location", false);
  public get datasetLocation() {
    return this._datasetLocation;
  }
  public putDatasetLocation(value: BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetDatasetLocation[] | cdktn.IResolvable) {
    this._datasetLocation.internalValue = value;
  }
  public resetDatasetLocation() {
    this._datasetLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetLocationInput() {
    return this._datasetLocation.internalValue;
  }
}

export class BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDataset[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetOutputReference {
    return new BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#metric_names BedrockEvaluationJob#metric_names}
  */
  readonly metricNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#task_type BedrockEvaluationJob#task_type}
  */
  readonly taskType: string;
  /**
  * dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#dataset BedrockEvaluationJob#dataset}
  */
  readonly dataset?: BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDataset[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigToTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metricNames),
    task_type: cdktn.stringToTerraform(struct!.taskType),
    dataset: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetToTerraform, true)(struct!.dataset),
  }
}


export function bedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metricNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    task_type: {
      value: cdktn.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetToHclTerraform, true)(struct!.dataset),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNames = this._metricNames;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._dataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricNames = undefined;
      this._taskType = undefined;
      this._dataset.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricNames = value.metricNames;
      this._taskType = value.taskType;
      this._dataset.internalValue = value.dataset;
    }
  }

  // metric_names - computed: false, optional: false, required: true
  private _metricNames?: string[]; 
  public get metricNames() {
    return this.getListAttribute('metric_names');
  }
  public set metricNames(value: string[]) {
    this._metricNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamesInput() {
    return this._metricNames;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // dataset - computed: false, optional: true, required: false
  private _dataset = new BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDatasetList(this, "dataset", false);
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigDataset[] | cdktn.IResolvable) {
    this._dataset.internalValue = value;
  }
  public resetDataset() {
    this._dataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
  }
}

export class BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigOutputReference {
    return new BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#model_identifier BedrockEvaluationJob#model_identifier}
  */
  readonly modelIdentifier: string;
}

export function bedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelToTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_identifier: cdktn.stringToTerraform(struct!.modelIdentifier),
  }
}


export function bedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_identifier: {
      value: cdktn.stringToHclTerraform(struct!.modelIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelIdentifier = this._modelIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelIdentifier = value.modelIdentifier;
    }
  }

  // model_identifier - computed: false, optional: false, required: true
  private _modelIdentifier?: string; 
  public get modelIdentifier() {
    return this.getStringAttribute('model_identifier');
  }
  public set modelIdentifier(value: string) {
    this._modelIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdentifierInput() {
    return this._modelIdentifier;
  }
}

export class BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModel[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelOutputReference {
    return new BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfig {
  /**
  * bedrock_evaluator_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#bedrock_evaluator_model BedrockEvaluationJob#bedrock_evaluator_model}
  */
  readonly bedrockEvaluatorModel?: BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModel[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigToTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bedrock_evaluator_model: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelToTerraform, true)(struct!.bedrockEvaluatorModel),
  }
}


export function bedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bedrock_evaluator_model: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelToHclTerraform, true)(struct!.bedrockEvaluatorModel),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bedrockEvaluatorModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockEvaluatorModel = this._bedrockEvaluatorModel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bedrockEvaluatorModel.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bedrockEvaluatorModel.internalValue = value.bedrockEvaluatorModel;
    }
  }

  // bedrock_evaluator_model - computed: false, optional: true, required: false
  private _bedrockEvaluatorModel = new BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModelList(this, "bedrock_evaluator_model", false);
  public get bedrockEvaluatorModel() {
    return this._bedrockEvaluatorModel;
  }
  public putBedrockEvaluatorModel(value: BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigBedrockEvaluatorModel[] | cdktn.IResolvable) {
    this._bedrockEvaluatorModel.internalValue = value;
  }
  public resetBedrockEvaluatorModel() {
    this._bedrockEvaluatorModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockEvaluatorModelInput() {
    return this._bedrockEvaluatorModel.internalValue;
  }
}

export class BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigOutputReference {
    return new BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigAutomated {
  /**
  * custom_metric_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#custom_metric_config BedrockEvaluationJob#custom_metric_config}
  */
  readonly customMetricConfig?: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfig[] | cdktn.IResolvable;
  /**
  * dataset_metric_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#dataset_metric_config BedrockEvaluationJob#dataset_metric_config}
  */
  readonly datasetMetricConfig?: BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfig[] | cdktn.IResolvable;
  /**
  * evaluator_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#evaluator_model_config BedrockEvaluationJob#evaluator_model_config}
  */
  readonly evaluatorModelConfig?: BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfig[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobEvaluationConfigAutomatedToTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomated | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_metric_config: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigToTerraform, true)(struct!.customMetricConfig),
    dataset_metric_config: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigToTerraform, true)(struct!.datasetMetricConfig),
    evaluator_model_config: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigToTerraform, true)(struct!.evaluatorModelConfig),
  }
}


export function bedrockEvaluationJobEvaluationConfigAutomatedToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigAutomated | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_metric_config: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigToHclTerraform, true)(struct!.customMetricConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigList",
    },
    dataset_metric_config: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigToHclTerraform, true)(struct!.datasetMetricConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigList",
    },
    evaluator_model_config: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigToHclTerraform, true)(struct!.evaluatorModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigAutomatedOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigAutomated | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMetricConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetricConfig = this._customMetricConfig?.internalValue;
    }
    if (this._datasetMetricConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetMetricConfig = this._datasetMetricConfig?.internalValue;
    }
    if (this._evaluatorModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorModelConfig = this._evaluatorModelConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigAutomated | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMetricConfig.internalValue = undefined;
      this._datasetMetricConfig.internalValue = undefined;
      this._evaluatorModelConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMetricConfig.internalValue = value.customMetricConfig;
      this._datasetMetricConfig.internalValue = value.datasetMetricConfig;
      this._evaluatorModelConfig.internalValue = value.evaluatorModelConfig;
    }
  }

  // custom_metric_config - computed: false, optional: true, required: false
  private _customMetricConfig = new BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfigList(this, "custom_metric_config", false);
  public get customMetricConfig() {
    return this._customMetricConfig;
  }
  public putCustomMetricConfig(value: BedrockEvaluationJobEvaluationConfigAutomatedCustomMetricConfig[] | cdktn.IResolvable) {
    this._customMetricConfig.internalValue = value;
  }
  public resetCustomMetricConfig() {
    this._customMetricConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricConfigInput() {
    return this._customMetricConfig.internalValue;
  }

  // dataset_metric_config - computed: false, optional: true, required: false
  private _datasetMetricConfig = new BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfigList(this, "dataset_metric_config", false);
  public get datasetMetricConfig() {
    return this._datasetMetricConfig;
  }
  public putDatasetMetricConfig(value: BedrockEvaluationJobEvaluationConfigAutomatedDatasetMetricConfig[] | cdktn.IResolvable) {
    this._datasetMetricConfig.internalValue = value;
  }
  public resetDatasetMetricConfig() {
    this._datasetMetricConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetMetricConfigInput() {
    return this._datasetMetricConfig.internalValue;
  }

  // evaluator_model_config - computed: false, optional: true, required: false
  private _evaluatorModelConfig = new BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfigList(this, "evaluator_model_config", false);
  public get evaluatorModelConfig() {
    return this._evaluatorModelConfig;
  }
  public putEvaluatorModelConfig(value: BedrockEvaluationJobEvaluationConfigAutomatedEvaluatorModelConfig[] | cdktn.IResolvable) {
    this._evaluatorModelConfig.internalValue = value;
  }
  public resetEvaluatorModelConfig() {
    this._evaluatorModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorModelConfigInput() {
    return this._evaluatorModelConfig.internalValue;
  }
}

export class BedrockEvaluationJobEvaluationConfigAutomatedList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigAutomated[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigAutomatedOutputReference {
    return new BedrockEvaluationJobEvaluationConfigAutomatedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigHumanCustomMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#description BedrockEvaluationJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#name BedrockEvaluationJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#rating_method BedrockEvaluationJob#rating_method}
  */
  readonly ratingMethod: string;
}

export function bedrockEvaluationJobEvaluationConfigHumanCustomMetricToTerraform(struct?: BedrockEvaluationJobEvaluationConfigHumanCustomMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    rating_method: cdktn.stringToTerraform(struct!.ratingMethod),
  }
}


export function bedrockEvaluationJobEvaluationConfigHumanCustomMetricToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigHumanCustomMetric | cdktn.IResolvable): any {
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rating_method: {
      value: cdktn.stringToHclTerraform(struct!.ratingMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigHumanCustomMetricOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigHumanCustomMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ratingMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratingMethod = this._ratingMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigHumanCustomMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._ratingMethod = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._ratingMethod = value.ratingMethod;
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

  // rating_method - computed: false, optional: false, required: true
  private _ratingMethod?: string; 
  public get ratingMethod() {
    return this.getStringAttribute('rating_method');
  }
  public set ratingMethod(value: string) {
    this._ratingMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ratingMethodInput() {
    return this._ratingMethod;
  }
}

export class BedrockEvaluationJobEvaluationConfigHumanCustomMetricList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigHumanCustomMetric[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigHumanCustomMetricOutputReference {
    return new BedrockEvaluationJobEvaluationConfigHumanCustomMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#s3_uri BedrockEvaluationJob#s3_uri}
  */
  readonly s3Uri: string;
}

export function bedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationToTerraform(struct?: BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function bedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Uri = value.s3Uri;
    }
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

export class BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocation[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationOutputReference {
    return new BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDataset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#name BedrockEvaluationJob#name}
  */
  readonly name: string;
  /**
  * dataset_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#dataset_location BedrockEvaluationJob#dataset_location}
  */
  readonly datasetLocation?: BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocation[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetToTerraform(struct?: BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDataset | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    dataset_location: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationToTerraform, true)(struct!.datasetLocation),
  }
}


export function bedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDataset | cdktn.IResolvable): any {
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
    dataset_location: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationToHclTerraform, true)(struct!.datasetLocation),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDataset | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._datasetLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetLocation = this._datasetLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDataset | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._datasetLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._datasetLocation.internalValue = value.datasetLocation;
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

  // dataset_location - computed: false, optional: true, required: false
  private _datasetLocation = new BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocationList(this, "dataset_location", false);
  public get datasetLocation() {
    return this._datasetLocation;
  }
  public putDatasetLocation(value: BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetDatasetLocation[] | cdktn.IResolvable) {
    this._datasetLocation.internalValue = value;
  }
  public resetDatasetLocation() {
    this._datasetLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetLocationInput() {
    return this._datasetLocation.internalValue;
  }
}

export class BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDataset[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetOutputReference {
    return new BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#metric_names BedrockEvaluationJob#metric_names}
  */
  readonly metricNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#task_type BedrockEvaluationJob#task_type}
  */
  readonly taskType: string;
  /**
  * dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#dataset BedrockEvaluationJob#dataset}
  */
  readonly dataset?: BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDataset[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigToTerraform(struct?: BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metricNames),
    task_type: cdktn.stringToTerraform(struct!.taskType),
    dataset: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetToTerraform, true)(struct!.dataset),
  }
}


export function bedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metricNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    task_type: {
      value: cdktn.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetToHclTerraform, true)(struct!.dataset),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNames = this._metricNames;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._dataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricNames = undefined;
      this._taskType = undefined;
      this._dataset.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricNames = value.metricNames;
      this._taskType = value.taskType;
      this._dataset.internalValue = value.dataset;
    }
  }

  // metric_names - computed: false, optional: false, required: true
  private _metricNames?: string[]; 
  public get metricNames() {
    return this.getListAttribute('metric_names');
  }
  public set metricNames(value: string[]) {
    this._metricNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamesInput() {
    return this._metricNames;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // dataset - computed: false, optional: true, required: false
  private _dataset = new BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDatasetList(this, "dataset", false);
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigDataset[] | cdktn.IResolvable) {
    this._dataset.internalValue = value;
  }
  public resetDataset() {
    this._dataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
  }
}

export class BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigOutputReference {
    return new BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#flow_definition_arn BedrockEvaluationJob#flow_definition_arn}
  */
  readonly flowDefinitionArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#instructions BedrockEvaluationJob#instructions}
  */
  readonly instructions?: string;
}

export function bedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfigToTerraform(struct?: BedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    flow_definition_arn: cdktn.stringToTerraform(struct!.flowDefinitionArn),
    instructions: cdktn.stringToTerraform(struct!.instructions),
  }
}


export function bedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfigToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    flow_definition_arn: {
      value: cdktn.stringToHclTerraform(struct!.flowDefinitionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instructions: {
      value: cdktn.stringToHclTerraform(struct!.instructions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowDefinitionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowDefinitionArn = this._flowDefinitionArn;
    }
    if (this._instructions !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructions = this._instructions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flowDefinitionArn = undefined;
      this._instructions = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flowDefinitionArn = value.flowDefinitionArn;
      this._instructions = value.instructions;
    }
  }

  // flow_definition_arn - computed: false, optional: false, required: true
  private _flowDefinitionArn?: string; 
  public get flowDefinitionArn() {
    return this.getStringAttribute('flow_definition_arn');
  }
  public set flowDefinitionArn(value: string) {
    this._flowDefinitionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowDefinitionArnInput() {
    return this._flowDefinitionArn;
  }

  // instructions - computed: false, optional: true, required: false
  private _instructions?: string; 
  public get instructions() {
    return this.getStringAttribute('instructions');
  }
  public set instructions(value: string) {
    this._instructions = value;
  }
  public resetInstructions() {
    this._instructions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsInput() {
    return this._instructions;
  }
}

export class BedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfigOutputReference {
    return new BedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfigHuman {
  /**
  * custom_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#custom_metric BedrockEvaluationJob#custom_metric}
  */
  readonly customMetric?: BedrockEvaluationJobEvaluationConfigHumanCustomMetric[] | cdktn.IResolvable;
  /**
  * dataset_metric_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#dataset_metric_config BedrockEvaluationJob#dataset_metric_config}
  */
  readonly datasetMetricConfig?: BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfig[] | cdktn.IResolvable;
  /**
  * human_workflow_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#human_workflow_config BedrockEvaluationJob#human_workflow_config}
  */
  readonly humanWorkflowConfig?: BedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfig[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobEvaluationConfigHumanToTerraform(struct?: BedrockEvaluationJobEvaluationConfigHuman | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_metric: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigHumanCustomMetricToTerraform, true)(struct!.customMetric),
    dataset_metric_config: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigToTerraform, true)(struct!.datasetMetricConfig),
    human_workflow_config: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfigToTerraform, true)(struct!.humanWorkflowConfig),
  }
}


export function bedrockEvaluationJobEvaluationConfigHumanToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfigHuman | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_metric: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigHumanCustomMetricToHclTerraform, true)(struct!.customMetric),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigHumanCustomMetricList",
    },
    dataset_metric_config: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigToHclTerraform, true)(struct!.datasetMetricConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigList",
    },
    human_workflow_config: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfigToHclTerraform, true)(struct!.humanWorkflowConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigHumanOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfigHuman | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetric = this._customMetric?.internalValue;
    }
    if (this._datasetMetricConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetMetricConfig = this._datasetMetricConfig?.internalValue;
    }
    if (this._humanWorkflowConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanWorkflowConfig = this._humanWorkflowConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfigHuman | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMetric.internalValue = undefined;
      this._datasetMetricConfig.internalValue = undefined;
      this._humanWorkflowConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMetric.internalValue = value.customMetric;
      this._datasetMetricConfig.internalValue = value.datasetMetricConfig;
      this._humanWorkflowConfig.internalValue = value.humanWorkflowConfig;
    }
  }

  // custom_metric - computed: false, optional: true, required: false
  private _customMetric = new BedrockEvaluationJobEvaluationConfigHumanCustomMetricList(this, "custom_metric", false);
  public get customMetric() {
    return this._customMetric;
  }
  public putCustomMetric(value: BedrockEvaluationJobEvaluationConfigHumanCustomMetric[] | cdktn.IResolvable) {
    this._customMetric.internalValue = value;
  }
  public resetCustomMetric() {
    this._customMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricInput() {
    return this._customMetric.internalValue;
  }

  // dataset_metric_config - computed: false, optional: true, required: false
  private _datasetMetricConfig = new BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfigList(this, "dataset_metric_config", false);
  public get datasetMetricConfig() {
    return this._datasetMetricConfig;
  }
  public putDatasetMetricConfig(value: BedrockEvaluationJobEvaluationConfigHumanDatasetMetricConfig[] | cdktn.IResolvable) {
    this._datasetMetricConfig.internalValue = value;
  }
  public resetDatasetMetricConfig() {
    this._datasetMetricConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetMetricConfigInput() {
    return this._datasetMetricConfig.internalValue;
  }

  // human_workflow_config - computed: false, optional: true, required: false
  private _humanWorkflowConfig = new BedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfigList(this, "human_workflow_config", false);
  public get humanWorkflowConfig() {
    return this._humanWorkflowConfig;
  }
  public putHumanWorkflowConfig(value: BedrockEvaluationJobEvaluationConfigHumanHumanWorkflowConfig[] | cdktn.IResolvable) {
    this._humanWorkflowConfig.internalValue = value;
  }
  public resetHumanWorkflowConfig() {
    this._humanWorkflowConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanWorkflowConfigInput() {
    return this._humanWorkflowConfig.internalValue;
  }
}

export class BedrockEvaluationJobEvaluationConfigHumanList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfigHuman[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigHumanOutputReference {
    return new BedrockEvaluationJobEvaluationConfigHumanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobEvaluationConfig {
  /**
  * automated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#automated BedrockEvaluationJob#automated}
  */
  readonly automated?: BedrockEvaluationJobEvaluationConfigAutomated[] | cdktn.IResolvable;
  /**
  * human block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#human BedrockEvaluationJob#human}
  */
  readonly human?: BedrockEvaluationJobEvaluationConfigHuman[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobEvaluationConfigToTerraform(struct?: BedrockEvaluationJobEvaluationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    automated: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigAutomatedToTerraform, true)(struct!.automated),
    human: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigHumanToTerraform, true)(struct!.human),
  }
}


export function bedrockEvaluationJobEvaluationConfigToHclTerraform(struct?: BedrockEvaluationJobEvaluationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    automated: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigAutomatedToHclTerraform, true)(struct!.automated),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigAutomatedList",
    },
    human: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigHumanToHclTerraform, true)(struct!.human),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobEvaluationConfigHumanList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobEvaluationConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobEvaluationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automated = this._automated?.internalValue;
    }
    if (this._human?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.human = this._human?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobEvaluationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automated.internalValue = undefined;
      this._human.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automated.internalValue = value.automated;
      this._human.internalValue = value.human;
    }
  }

  // automated - computed: false, optional: true, required: false
  private _automated = new BedrockEvaluationJobEvaluationConfigAutomatedList(this, "automated", false);
  public get automated() {
    return this._automated;
  }
  public putAutomated(value: BedrockEvaluationJobEvaluationConfigAutomated[] | cdktn.IResolvable) {
    this._automated.internalValue = value;
  }
  public resetAutomated() {
    this._automated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedInput() {
    return this._automated.internalValue;
  }

  // human - computed: false, optional: true, required: false
  private _human = new BedrockEvaluationJobEvaluationConfigHumanList(this, "human", false);
  public get human() {
    return this._human;
  }
  public putHuman(value: BedrockEvaluationJobEvaluationConfigHuman[] | cdktn.IResolvable) {
    this._human.internalValue = value;
  }
  public resetHuman() {
    this._human.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanInput() {
    return this._human.internalValue;
  }
}

export class BedrockEvaluationJobEvaluationConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobEvaluationConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobEvaluationConfigOutputReference {
    return new BedrockEvaluationJobEvaluationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#latency BedrockEvaluationJob#latency}
  */
  readonly latency?: string;
}

export function bedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfigToTerraform(struct?: BedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    latency: cdktn.stringToTerraform(struct!.latency),
  }
}


export function bedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfigToHclTerraform(struct?: BedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    latency: {
      value: cdktn.stringToHclTerraform(struct!.latency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latency !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._latency = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._latency = value.latency;
    }
  }

  // latency - computed: false, optional: true, required: false
  private _latency?: string; 
  public get latency() {
    return this.getStringAttribute('latency');
  }
  public set latency(value: string) {
    this._latency = value;
  }
  public resetLatency() {
    this._latency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency;
  }
}

export class BedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfigOutputReference {
    return new BedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobInferenceConfigModelBedrockModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#inference_params BedrockEvaluationJob#inference_params}
  */
  readonly inferenceParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#model_identifier BedrockEvaluationJob#model_identifier}
  */
  readonly modelIdentifier: string;
  /**
  * performance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#performance_config BedrockEvaluationJob#performance_config}
  */
  readonly performanceConfig?: BedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfig[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobInferenceConfigModelBedrockModelToTerraform(struct?: BedrockEvaluationJobInferenceConfigModelBedrockModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inference_params: cdktn.stringToTerraform(struct!.inferenceParams),
    model_identifier: cdktn.stringToTerraform(struct!.modelIdentifier),
    performance_config: cdktn.listMapper(bedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfigToTerraform, true)(struct!.performanceConfig),
  }
}


export function bedrockEvaluationJobInferenceConfigModelBedrockModelToHclTerraform(struct?: BedrockEvaluationJobInferenceConfigModelBedrockModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inference_params: {
      value: cdktn.stringToHclTerraform(struct!.inferenceParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_identifier: {
      value: cdktn.stringToHclTerraform(struct!.modelIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    performance_config: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfigToHclTerraform, true)(struct!.performanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobInferenceConfigModelBedrockModelOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobInferenceConfigModelBedrockModel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inferenceParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceParams = this._inferenceParams;
    }
    if (this._modelIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelIdentifier = this._modelIdentifier;
    }
    if (this._performanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceConfig = this._performanceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobInferenceConfigModelBedrockModel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inferenceParams = undefined;
      this._modelIdentifier = undefined;
      this._performanceConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inferenceParams = value.inferenceParams;
      this._modelIdentifier = value.modelIdentifier;
      this._performanceConfig.internalValue = value.performanceConfig;
    }
  }

  // inference_params - computed: false, optional: true, required: false
  private _inferenceParams?: string; 
  public get inferenceParams() {
    return this.getStringAttribute('inference_params');
  }
  public set inferenceParams(value: string) {
    this._inferenceParams = value;
  }
  public resetInferenceParams() {
    this._inferenceParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceParamsInput() {
    return this._inferenceParams;
  }

  // model_identifier - computed: false, optional: false, required: true
  private _modelIdentifier?: string; 
  public get modelIdentifier() {
    return this.getStringAttribute('model_identifier');
  }
  public set modelIdentifier(value: string) {
    this._modelIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdentifierInput() {
    return this._modelIdentifier;
  }

  // performance_config - computed: false, optional: true, required: false
  private _performanceConfig = new BedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfigList(this, "performance_config", false);
  public get performanceConfig() {
    return this._performanceConfig;
  }
  public putPerformanceConfig(value: BedrockEvaluationJobInferenceConfigModelBedrockModelPerformanceConfig[] | cdktn.IResolvable) {
    this._performanceConfig.internalValue = value;
  }
  public resetPerformanceConfig() {
    this._performanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceConfigInput() {
    return this._performanceConfig.internalValue;
  }
}

export class BedrockEvaluationJobInferenceConfigModelBedrockModelList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobInferenceConfigModelBedrockModel[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobInferenceConfigModelBedrockModelOutputReference {
    return new BedrockEvaluationJobInferenceConfigModelBedrockModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#inference_source_identifier BedrockEvaluationJob#inference_source_identifier}
  */
  readonly inferenceSourceIdentifier: string;
}

export function bedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSourceToTerraform(struct?: BedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inference_source_identifier: cdktn.stringToTerraform(struct!.inferenceSourceIdentifier),
  }
}


export function bedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSourceToHclTerraform(struct?: BedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inference_source_identifier: {
      value: cdktn.stringToHclTerraform(struct!.inferenceSourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inferenceSourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceSourceIdentifier = this._inferenceSourceIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inferenceSourceIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inferenceSourceIdentifier = value.inferenceSourceIdentifier;
    }
  }

  // inference_source_identifier - computed: false, optional: false, required: true
  private _inferenceSourceIdentifier?: string; 
  public get inferenceSourceIdentifier() {
    return this.getStringAttribute('inference_source_identifier');
  }
  public set inferenceSourceIdentifier(value: string) {
    this._inferenceSourceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceSourceIdentifierInput() {
    return this._inferenceSourceIdentifier;
  }
}

export class BedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSourceList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSource[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSourceOutputReference {
    return new BedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobInferenceConfigModel {
  /**
  * bedrock_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#bedrock_model BedrockEvaluationJob#bedrock_model}
  */
  readonly bedrockModel?: BedrockEvaluationJobInferenceConfigModelBedrockModel[] | cdktn.IResolvable;
  /**
  * precomputed_inference_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#precomputed_inference_source BedrockEvaluationJob#precomputed_inference_source}
  */
  readonly precomputedInferenceSource?: BedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSource[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobInferenceConfigModelToTerraform(struct?: BedrockEvaluationJobInferenceConfigModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bedrock_model: cdktn.listMapper(bedrockEvaluationJobInferenceConfigModelBedrockModelToTerraform, true)(struct!.bedrockModel),
    precomputed_inference_source: cdktn.listMapper(bedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSourceToTerraform, true)(struct!.precomputedInferenceSource),
  }
}


export function bedrockEvaluationJobInferenceConfigModelToHclTerraform(struct?: BedrockEvaluationJobInferenceConfigModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bedrock_model: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobInferenceConfigModelBedrockModelToHclTerraform, true)(struct!.bedrockModel),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobInferenceConfigModelBedrockModelList",
    },
    precomputed_inference_source: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSourceToHclTerraform, true)(struct!.precomputedInferenceSource),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobInferenceConfigModelOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobInferenceConfigModel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bedrockModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockModel = this._bedrockModel?.internalValue;
    }
    if (this._precomputedInferenceSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.precomputedInferenceSource = this._precomputedInferenceSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobInferenceConfigModel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bedrockModel.internalValue = undefined;
      this._precomputedInferenceSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bedrockModel.internalValue = value.bedrockModel;
      this._precomputedInferenceSource.internalValue = value.precomputedInferenceSource;
    }
  }

  // bedrock_model - computed: false, optional: true, required: false
  private _bedrockModel = new BedrockEvaluationJobInferenceConfigModelBedrockModelList(this, "bedrock_model", false);
  public get bedrockModel() {
    return this._bedrockModel;
  }
  public putBedrockModel(value: BedrockEvaluationJobInferenceConfigModelBedrockModel[] | cdktn.IResolvable) {
    this._bedrockModel.internalValue = value;
  }
  public resetBedrockModel() {
    this._bedrockModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockModelInput() {
    return this._bedrockModel.internalValue;
  }

  // precomputed_inference_source - computed: false, optional: true, required: false
  private _precomputedInferenceSource = new BedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSourceList(this, "precomputed_inference_source", false);
  public get precomputedInferenceSource() {
    return this._precomputedInferenceSource;
  }
  public putPrecomputedInferenceSource(value: BedrockEvaluationJobInferenceConfigModelPrecomputedInferenceSource[] | cdktn.IResolvable) {
    this._precomputedInferenceSource.internalValue = value;
  }
  public resetPrecomputedInferenceSource() {
    this._precomputedInferenceSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precomputedInferenceSourceInput() {
    return this._precomputedInferenceSource.internalValue;
  }
}

export class BedrockEvaluationJobInferenceConfigModelList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobInferenceConfigModel[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobInferenceConfigModelOutputReference {
    return new BedrockEvaluationJobInferenceConfigModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#number_of_results BedrockEvaluationJob#number_of_results}
  */
  readonly numberOfResults?: number;
}

export function bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationToTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_of_results: cdktn.numberToTerraform(struct!.numberOfResults),
  }
}


export function bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationToHclTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_of_results: {
      value: cdktn.numberToHclTerraform(struct!.numberOfResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfResults = this._numberOfResults;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberOfResults = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberOfResults = value.numberOfResults;
    }
  }

  // number_of_results - computed: false, optional: true, required: false
  private _numberOfResults?: number; 
  public get numberOfResults() {
    return this.getNumberAttribute('number_of_results');
  }
  public set numberOfResults(value: number) {
    this._numberOfResults = value;
  }
  public resetNumberOfResults() {
    this._numberOfResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfResultsInput() {
    return this._numberOfResults;
  }
}

export class BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationOutputReference {
    return new BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfiguration {
  /**
  * vector_search_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#vector_search_configuration BedrockEvaluationJob#vector_search_configuration}
  */
  readonly vectorSearchConfiguration?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfiguration[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationToTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vector_search_configuration: cdktn.listMapper(bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationToTerraform, true)(struct!.vectorSearchConfiguration),
  }
}


export function bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationToHclTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vector_search_configuration: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationToHclTerraform, true)(struct!.vectorSearchConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vectorSearchConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorSearchConfiguration = this._vectorSearchConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vectorSearchConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vectorSearchConfiguration.internalValue = value.vectorSearchConfiguration;
    }
  }

  // vector_search_configuration - computed: false, optional: true, required: false
  private _vectorSearchConfiguration = new BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfigurationList(this, "vector_search_configuration", false);
  public get vectorSearchConfiguration() {
    return this._vectorSearchConfiguration;
  }
  public putVectorSearchConfiguration(value: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationVectorSearchConfiguration[] | cdktn.IResolvable) {
    this._vectorSearchConfiguration.internalValue = value;
  }
  public resetVectorSearchConfiguration() {
    this._vectorSearchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorSearchConfigurationInput() {
    return this._vectorSearchConfiguration.internalValue;
  }
}

export class BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationOutputReference {
    return new BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#knowledge_base_id BedrockEvaluationJob#knowledge_base_id}
  */
  readonly knowledgeBaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#model_arn BedrockEvaluationJob#model_arn}
  */
  readonly modelArn: string;
  /**
  * retrieval_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#retrieval_configuration BedrockEvaluationJob#retrieval_configuration}
  */
  readonly retrievalConfiguration?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfiguration[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigToTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    knowledge_base_id: cdktn.stringToTerraform(struct!.knowledgeBaseId),
    model_arn: cdktn.stringToTerraform(struct!.modelArn),
    retrieval_configuration: cdktn.listMapper(bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationToTerraform, true)(struct!.retrievalConfiguration),
  }
}


export function bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigToHclTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    knowledge_base_id: {
      value: cdktn.stringToHclTerraform(struct!.knowledgeBaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_arn: {
      value: cdktn.stringToHclTerraform(struct!.modelArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retrieval_configuration: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationToHclTerraform, true)(struct!.retrievalConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knowledgeBaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseId = this._knowledgeBaseId;
    }
    if (this._modelArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelArn = this._modelArn;
    }
    if (this._retrievalConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrievalConfiguration = this._retrievalConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knowledgeBaseId = undefined;
      this._modelArn = undefined;
      this._retrievalConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knowledgeBaseId = value.knowledgeBaseId;
      this._modelArn = value.modelArn;
      this._retrievalConfiguration.internalValue = value.retrievalConfiguration;
    }
  }

  // knowledge_base_id - computed: false, optional: false, required: true
  private _knowledgeBaseId?: string; 
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
  public set knowledgeBaseId(value: string) {
    this._knowledgeBaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseIdInput() {
    return this._knowledgeBaseId;
  }

  // model_arn - computed: false, optional: false, required: true
  private _modelArn?: string; 
  public get modelArn() {
    return this.getStringAttribute('model_arn');
  }
  public set modelArn(value: string) {
    this._modelArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelArnInput() {
    return this._modelArn;
  }

  // retrieval_configuration - computed: false, optional: true, required: false
  private _retrievalConfiguration = new BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfigurationList(this, "retrieval_configuration", false);
  public get retrievalConfiguration() {
    return this._retrievalConfiguration;
  }
  public putRetrievalConfiguration(value: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigRetrievalConfiguration[] | cdktn.IResolvable) {
    this._retrievalConfiguration.internalValue = value;
  }
  public resetRetrievalConfiguration() {
    this._retrievalConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalConfigurationInput() {
    return this._retrievalConfiguration.internalValue;
  }
}

export class BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigOutputReference {
    return new BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#number_of_results BedrockEvaluationJob#number_of_results}
  */
  readonly numberOfResults?: number;
}

export function bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationToTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_of_results: cdktn.numberToTerraform(struct!.numberOfResults),
  }
}


export function bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationToHclTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_of_results: {
      value: cdktn.numberToHclTerraform(struct!.numberOfResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfResults = this._numberOfResults;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberOfResults = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberOfResults = value.numberOfResults;
    }
  }

  // number_of_results - computed: false, optional: true, required: false
  private _numberOfResults?: number; 
  public get numberOfResults() {
    return this.getNumberAttribute('number_of_results');
  }
  public set numberOfResults(value: number) {
    this._numberOfResults = value;
  }
  public resetNumberOfResults() {
    this._numberOfResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfResultsInput() {
    return this._numberOfResults;
  }
}

export class BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationOutputReference {
    return new BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfiguration {
  /**
  * vector_search_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#vector_search_configuration BedrockEvaluationJob#vector_search_configuration}
  */
  readonly vectorSearchConfiguration?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfiguration[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationToTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vector_search_configuration: cdktn.listMapper(bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationToTerraform, true)(struct!.vectorSearchConfiguration),
  }
}


export function bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationToHclTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vector_search_configuration: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationToHclTerraform, true)(struct!.vectorSearchConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vectorSearchConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorSearchConfiguration = this._vectorSearchConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vectorSearchConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vectorSearchConfiguration.internalValue = value.vectorSearchConfiguration;
    }
  }

  // vector_search_configuration - computed: false, optional: true, required: false
  private _vectorSearchConfiguration = new BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfigurationList(this, "vector_search_configuration", false);
  public get vectorSearchConfiguration() {
    return this._vectorSearchConfiguration;
  }
  public putVectorSearchConfiguration(value: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationVectorSearchConfiguration[] | cdktn.IResolvable) {
    this._vectorSearchConfiguration.internalValue = value;
  }
  public resetVectorSearchConfiguration() {
    this._vectorSearchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorSearchConfigurationInput() {
    return this._vectorSearchConfiguration.internalValue;
  }
}

export class BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationOutputReference {
    return new BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#knowledge_base_id BedrockEvaluationJob#knowledge_base_id}
  */
  readonly knowledgeBaseId: string;
  /**
  * knowledge_base_retrieval_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#knowledge_base_retrieval_configuration BedrockEvaluationJob#knowledge_base_retrieval_configuration}
  */
  readonly knowledgeBaseRetrievalConfiguration?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfiguration[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigToTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    knowledge_base_id: cdktn.stringToTerraform(struct!.knowledgeBaseId),
    knowledge_base_retrieval_configuration: cdktn.listMapper(bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationToTerraform, true)(struct!.knowledgeBaseRetrievalConfiguration),
  }
}


export function bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigToHclTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    knowledge_base_id: {
      value: cdktn.stringToHclTerraform(struct!.knowledgeBaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    knowledge_base_retrieval_configuration: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationToHclTerraform, true)(struct!.knowledgeBaseRetrievalConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knowledgeBaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseId = this._knowledgeBaseId;
    }
    if (this._knowledgeBaseRetrievalConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseRetrievalConfiguration = this._knowledgeBaseRetrievalConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knowledgeBaseId = undefined;
      this._knowledgeBaseRetrievalConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knowledgeBaseId = value.knowledgeBaseId;
      this._knowledgeBaseRetrievalConfiguration.internalValue = value.knowledgeBaseRetrievalConfiguration;
    }
  }

  // knowledge_base_id - computed: false, optional: false, required: true
  private _knowledgeBaseId?: string; 
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
  public set knowledgeBaseId(value: string) {
    this._knowledgeBaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseIdInput() {
    return this._knowledgeBaseId;
  }

  // knowledge_base_retrieval_configuration - computed: false, optional: true, required: false
  private _knowledgeBaseRetrievalConfiguration = new BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfigurationList(this, "knowledge_base_retrieval_configuration", false);
  public get knowledgeBaseRetrievalConfiguration() {
    return this._knowledgeBaseRetrievalConfiguration;
  }
  public putKnowledgeBaseRetrievalConfiguration(value: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigKnowledgeBaseRetrievalConfiguration[] | cdktn.IResolvable) {
    this._knowledgeBaseRetrievalConfiguration.internalValue = value;
  }
  public resetKnowledgeBaseRetrievalConfiguration() {
    this._knowledgeBaseRetrievalConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseRetrievalConfigurationInput() {
    return this._knowledgeBaseRetrievalConfiguration.internalValue;
  }
}

export class BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigOutputReference {
    return new BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfig {
  /**
  * retrieve_and_generate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#retrieve_and_generate_config BedrockEvaluationJob#retrieve_and_generate_config}
  */
  readonly retrieveAndGenerateConfig?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfig[] | cdktn.IResolvable;
  /**
  * retrieve_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#retrieve_config BedrockEvaluationJob#retrieve_config}
  */
  readonly retrieveConfig?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfig[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigToTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retrieve_and_generate_config: cdktn.listMapper(bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigToTerraform, true)(struct!.retrieveAndGenerateConfig),
    retrieve_config: cdktn.listMapper(bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigToTerraform, true)(struct!.retrieveConfig),
  }
}


export function bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigToHclTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    retrieve_and_generate_config: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigToHclTerraform, true)(struct!.retrieveAndGenerateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigList",
    },
    retrieve_config: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigToHclTerraform, true)(struct!.retrieveConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retrieveAndGenerateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrieveAndGenerateConfig = this._retrieveAndGenerateConfig?.internalValue;
    }
    if (this._retrieveConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrieveConfig = this._retrieveConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retrieveAndGenerateConfig.internalValue = undefined;
      this._retrieveConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retrieveAndGenerateConfig.internalValue = value.retrieveAndGenerateConfig;
      this._retrieveConfig.internalValue = value.retrieveConfig;
    }
  }

  // retrieve_and_generate_config - computed: false, optional: true, required: false
  private _retrieveAndGenerateConfig = new BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfigList(this, "retrieve_and_generate_config", false);
  public get retrieveAndGenerateConfig() {
    return this._retrieveAndGenerateConfig;
  }
  public putRetrieveAndGenerateConfig(value: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveAndGenerateConfig[] | cdktn.IResolvable) {
    this._retrieveAndGenerateConfig.internalValue = value;
  }
  public resetRetrieveAndGenerateConfig() {
    this._retrieveAndGenerateConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveAndGenerateConfigInput() {
    return this._retrieveAndGenerateConfig.internalValue;
  }

  // retrieve_config - computed: false, optional: true, required: false
  private _retrieveConfig = new BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfigList(this, "retrieve_config", false);
  public get retrieveConfig() {
    return this._retrieveConfig;
  }
  public putRetrieveConfig(value: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigRetrieveConfig[] | cdktn.IResolvable) {
    this._retrieveConfig.internalValue = value;
  }
  public resetRetrieveConfig() {
    this._retrieveConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveConfigInput() {
    return this._retrieveConfig.internalValue;
  }
}

export class BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigOutputReference {
    return new BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#rag_source_identifier BedrockEvaluationJob#rag_source_identifier}
  */
  readonly ragSourceIdentifier: string;
}

export function bedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfigToTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rag_source_identifier: cdktn.stringToTerraform(struct!.ragSourceIdentifier),
  }
}


export function bedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfigToHclTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rag_source_identifier: {
      value: cdktn.stringToHclTerraform(struct!.ragSourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ragSourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.ragSourceIdentifier = this._ragSourceIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ragSourceIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ragSourceIdentifier = value.ragSourceIdentifier;
    }
  }

  // rag_source_identifier - computed: false, optional: false, required: true
  private _ragSourceIdentifier?: string; 
  public get ragSourceIdentifier() {
    return this.getStringAttribute('rag_source_identifier');
  }
  public set ragSourceIdentifier(value: string) {
    this._ragSourceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ragSourceIdentifierInput() {
    return this._ragSourceIdentifier;
  }
}

export class BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfigOutputReference {
    return new BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#rag_source_identifier BedrockEvaluationJob#rag_source_identifier}
  */
  readonly ragSourceIdentifier: string;
}

export function bedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfigToTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rag_source_identifier: cdktn.stringToTerraform(struct!.ragSourceIdentifier),
  }
}


export function bedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfigToHclTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rag_source_identifier: {
      value: cdktn.stringToHclTerraform(struct!.ragSourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ragSourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.ragSourceIdentifier = this._ragSourceIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ragSourceIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ragSourceIdentifier = value.ragSourceIdentifier;
    }
  }

  // rag_source_identifier - computed: false, optional: false, required: true
  private _ragSourceIdentifier?: string; 
  public get ragSourceIdentifier() {
    return this.getStringAttribute('rag_source_identifier');
  }
  public set ragSourceIdentifier(value: string) {
    this._ragSourceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ragSourceIdentifierInput() {
    return this._ragSourceIdentifier;
  }
}

export class BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfigOutputReference {
    return new BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfig {
  /**
  * retrieve_and_generate_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#retrieve_and_generate_source_config BedrockEvaluationJob#retrieve_and_generate_source_config}
  */
  readonly retrieveAndGenerateSourceConfig?: BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfig[] | cdktn.IResolvable;
  /**
  * retrieve_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#retrieve_source_config BedrockEvaluationJob#retrieve_source_config}
  */
  readonly retrieveSourceConfig?: BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfig[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigToTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retrieve_and_generate_source_config: cdktn.listMapper(bedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfigToTerraform, true)(struct!.retrieveAndGenerateSourceConfig),
    retrieve_source_config: cdktn.listMapper(bedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfigToTerraform, true)(struct!.retrieveSourceConfig),
  }
}


export function bedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigToHclTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    retrieve_and_generate_source_config: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfigToHclTerraform, true)(struct!.retrieveAndGenerateSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfigList",
    },
    retrieve_source_config: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfigToHclTerraform, true)(struct!.retrieveSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retrieveAndGenerateSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrieveAndGenerateSourceConfig = this._retrieveAndGenerateSourceConfig?.internalValue;
    }
    if (this._retrieveSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrieveSourceConfig = this._retrieveSourceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retrieveAndGenerateSourceConfig.internalValue = undefined;
      this._retrieveSourceConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retrieveAndGenerateSourceConfig.internalValue = value.retrieveAndGenerateSourceConfig;
      this._retrieveSourceConfig.internalValue = value.retrieveSourceConfig;
    }
  }

  // retrieve_and_generate_source_config - computed: false, optional: true, required: false
  private _retrieveAndGenerateSourceConfig = new BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfigList(this, "retrieve_and_generate_source_config", false);
  public get retrieveAndGenerateSourceConfig() {
    return this._retrieveAndGenerateSourceConfig;
  }
  public putRetrieveAndGenerateSourceConfig(value: BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveAndGenerateSourceConfig[] | cdktn.IResolvable) {
    this._retrieveAndGenerateSourceConfig.internalValue = value;
  }
  public resetRetrieveAndGenerateSourceConfig() {
    this._retrieveAndGenerateSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveAndGenerateSourceConfigInput() {
    return this._retrieveAndGenerateSourceConfig.internalValue;
  }

  // retrieve_source_config - computed: false, optional: true, required: false
  private _retrieveSourceConfig = new BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfigList(this, "retrieve_source_config", false);
  public get retrieveSourceConfig() {
    return this._retrieveSourceConfig;
  }
  public putRetrieveSourceConfig(value: BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigRetrieveSourceConfig[] | cdktn.IResolvable) {
    this._retrieveSourceConfig.internalValue = value;
  }
  public resetRetrieveSourceConfig() {
    this._retrieveSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveSourceConfigInput() {
    return this._retrieveSourceConfig.internalValue;
  }
}

export class BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigOutputReference {
    return new BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobInferenceConfigRagConfig {
  /**
  * knowledge_base_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#knowledge_base_config BedrockEvaluationJob#knowledge_base_config}
  */
  readonly knowledgeBaseConfig?: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfig[] | cdktn.IResolvable;
  /**
  * precomputed_rag_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#precomputed_rag_source_config BedrockEvaluationJob#precomputed_rag_source_config}
  */
  readonly precomputedRagSourceConfig?: BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfig[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobInferenceConfigRagConfigToTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    knowledge_base_config: cdktn.listMapper(bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigToTerraform, true)(struct!.knowledgeBaseConfig),
    precomputed_rag_source_config: cdktn.listMapper(bedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigToTerraform, true)(struct!.precomputedRagSourceConfig),
  }
}


export function bedrockEvaluationJobInferenceConfigRagConfigToHclTerraform(struct?: BedrockEvaluationJobInferenceConfigRagConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    knowledge_base_config: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigToHclTerraform, true)(struct!.knowledgeBaseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigList",
    },
    precomputed_rag_source_config: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigToHclTerraform, true)(struct!.precomputedRagSourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobInferenceConfigRagConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobInferenceConfigRagConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knowledgeBaseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseConfig = this._knowledgeBaseConfig?.internalValue;
    }
    if (this._precomputedRagSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.precomputedRagSourceConfig = this._precomputedRagSourceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobInferenceConfigRagConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knowledgeBaseConfig.internalValue = undefined;
      this._precomputedRagSourceConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knowledgeBaseConfig.internalValue = value.knowledgeBaseConfig;
      this._precomputedRagSourceConfig.internalValue = value.precomputedRagSourceConfig;
    }
  }

  // knowledge_base_config - computed: false, optional: true, required: false
  private _knowledgeBaseConfig = new BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfigList(this, "knowledge_base_config", false);
  public get knowledgeBaseConfig() {
    return this._knowledgeBaseConfig;
  }
  public putKnowledgeBaseConfig(value: BedrockEvaluationJobInferenceConfigRagConfigKnowledgeBaseConfig[] | cdktn.IResolvable) {
    this._knowledgeBaseConfig.internalValue = value;
  }
  public resetKnowledgeBaseConfig() {
    this._knowledgeBaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseConfigInput() {
    return this._knowledgeBaseConfig.internalValue;
  }

  // precomputed_rag_source_config - computed: false, optional: true, required: false
  private _precomputedRagSourceConfig = new BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfigList(this, "precomputed_rag_source_config", false);
  public get precomputedRagSourceConfig() {
    return this._precomputedRagSourceConfig;
  }
  public putPrecomputedRagSourceConfig(value: BedrockEvaluationJobInferenceConfigRagConfigPrecomputedRagSourceConfig[] | cdktn.IResolvable) {
    this._precomputedRagSourceConfig.internalValue = value;
  }
  public resetPrecomputedRagSourceConfig() {
    this._precomputedRagSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precomputedRagSourceConfigInput() {
    return this._precomputedRagSourceConfig.internalValue;
  }
}

export class BedrockEvaluationJobInferenceConfigRagConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobInferenceConfigRagConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobInferenceConfigRagConfigOutputReference {
    return new BedrockEvaluationJobInferenceConfigRagConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobInferenceConfig {
  /**
  * model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#model BedrockEvaluationJob#model}
  */
  readonly model?: BedrockEvaluationJobInferenceConfigModel[] | cdktn.IResolvable;
  /**
  * rag_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#rag_config BedrockEvaluationJob#rag_config}
  */
  readonly ragConfig?: BedrockEvaluationJobInferenceConfigRagConfig[] | cdktn.IResolvable;
}

export function bedrockEvaluationJobInferenceConfigToTerraform(struct?: BedrockEvaluationJobInferenceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.listMapper(bedrockEvaluationJobInferenceConfigModelToTerraform, true)(struct!.model),
    rag_config: cdktn.listMapper(bedrockEvaluationJobInferenceConfigRagConfigToTerraform, true)(struct!.ragConfig),
  }
}


export function bedrockEvaluationJobInferenceConfigToHclTerraform(struct?: BedrockEvaluationJobInferenceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobInferenceConfigModelToHclTerraform, true)(struct!.model),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobInferenceConfigModelList",
    },
    rag_config: {
      value: cdktn.listMapperHcl(bedrockEvaluationJobInferenceConfigRagConfigToHclTerraform, true)(struct!.ragConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockEvaluationJobInferenceConfigRagConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEvaluationJobInferenceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobInferenceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model?.internalValue;
    }
    if (this._ragConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ragConfig = this._ragConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobInferenceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._model.internalValue = undefined;
      this._ragConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._model.internalValue = value.model;
      this._ragConfig.internalValue = value.ragConfig;
    }
  }

  // model - computed: false, optional: true, required: false
  private _model = new BedrockEvaluationJobInferenceConfigModelList(this, "model", false);
  public get model() {
    return this._model;
  }
  public putModel(value: BedrockEvaluationJobInferenceConfigModel[] | cdktn.IResolvable) {
    this._model.internalValue = value;
  }
  public resetModel() {
    this._model.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
  }

  // rag_config - computed: false, optional: true, required: false
  private _ragConfig = new BedrockEvaluationJobInferenceConfigRagConfigList(this, "rag_config", false);
  public get ragConfig() {
    return this._ragConfig;
  }
  public putRagConfig(value: BedrockEvaluationJobInferenceConfigRagConfig[] | cdktn.IResolvable) {
    this._ragConfig.internalValue = value;
  }
  public resetRagConfig() {
    this._ragConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ragConfigInput() {
    return this._ragConfig.internalValue;
  }
}

export class BedrockEvaluationJobInferenceConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobInferenceConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobInferenceConfigOutputReference {
    return new BedrockEvaluationJobInferenceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobOutputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#s3_uri BedrockEvaluationJob#s3_uri}
  */
  readonly s3Uri: string;
}

export function bedrockEvaluationJobOutputDataConfigToTerraform(struct?: BedrockEvaluationJobOutputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function bedrockEvaluationJobOutputDataConfigToHclTerraform(struct?: BedrockEvaluationJobOutputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class BedrockEvaluationJobOutputDataConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEvaluationJobOutputDataConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEvaluationJobOutputDataConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Uri = value.s3Uri;
    }
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

export class BedrockEvaluationJobOutputDataConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockEvaluationJobOutputDataConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockEvaluationJobOutputDataConfigOutputReference {
    return new BedrockEvaluationJobOutputDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEvaluationJobTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#create BedrockEvaluationJob#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#delete BedrockEvaluationJob#delete}
  */
  readonly delete?: string;
}

export function bedrockEvaluationJobTimeoutsToTerraform(struct?: BedrockEvaluationJobTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function bedrockEvaluationJobTimeoutsToHclTerraform(struct?: BedrockEvaluationJobTimeouts | cdktn.IResolvable): any {
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

export class BedrockEvaluationJobTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockEvaluationJobTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockEvaluationJobTimeouts | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job aws_bedrock_evaluation_job}
*/
export class BedrockEvaluationJob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrock_evaluation_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockEvaluationJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockEvaluationJob to import
  * @param importFromId The id of the existing BedrockEvaluationJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockEvaluationJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrock_evaluation_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/bedrock_evaluation_job aws_bedrock_evaluation_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockEvaluationJobConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockEvaluationJobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrock_evaluation_job',
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
    this._applicationType = config.applicationType;
    this._customerEncryptionKeyId = config.customerEncryptionKeyId;
    this._jobDescription = config.jobDescription;
    this._jobName = config.jobName;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._skipDestroy = config.skipDestroy;
    this._tags = config.tags;
    this._evaluationConfig.internalValue = config.evaluationConfig;
    this._inferenceConfig.internalValue = config.inferenceConfig;
    this._outputDataConfig.internalValue = config.outputDataConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_type - computed: true, optional: true, required: false
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  public resetApplicationType() {
    this._applicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // customer_encryption_key_id - computed: false, optional: true, required: false
  private _customerEncryptionKeyId?: string; 
  public get customerEncryptionKeyId() {
    return this.getStringAttribute('customer_encryption_key_id');
  }
  public set customerEncryptionKeyId(value: string) {
    this._customerEncryptionKeyId = value;
  }
  public resetCustomerEncryptionKeyId() {
    this._customerEncryptionKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerEncryptionKeyIdInput() {
    return this._customerEncryptionKeyId;
  }

  // failure_messages - computed: true, optional: false, required: false
  public get failureMessages() {
    return this.getListAttribute('failure_messages');
  }

  // job_arn - computed: true, optional: false, required: false
  public get jobArn() {
    return this.getStringAttribute('job_arn');
  }

  // job_description - computed: false, optional: true, required: false
  private _jobDescription?: string; 
  public get jobDescription() {
    return this.getStringAttribute('job_description');
  }
  public set jobDescription(value: string) {
    this._jobDescription = value;
  }
  public resetJobDescription() {
    this._jobDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDescriptionInput() {
    return this._jobDescription;
  }

  // job_name - computed: false, optional: false, required: true
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
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

  // skip_destroy - computed: false, optional: true, required: false
  private _skipDestroy?: boolean | cdktn.IResolvable; 
  public get skipDestroy() {
    return this.getBooleanAttribute('skip_destroy');
  }
  public set skipDestroy(value: boolean | cdktn.IResolvable) {
    this._skipDestroy = value;
  }
  public resetSkipDestroy() {
    this._skipDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDestroyInput() {
    return this._skipDestroy;
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

  // evaluation_config - computed: false, optional: true, required: false
  private _evaluationConfig = new BedrockEvaluationJobEvaluationConfigList(this, "evaluation_config", false);
  public get evaluationConfig() {
    return this._evaluationConfig;
  }
  public putEvaluationConfig(value: BedrockEvaluationJobEvaluationConfig[] | cdktn.IResolvable) {
    this._evaluationConfig.internalValue = value;
  }
  public resetEvaluationConfig() {
    this._evaluationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationConfigInput() {
    return this._evaluationConfig.internalValue;
  }

  // inference_config - computed: false, optional: true, required: false
  private _inferenceConfig = new BedrockEvaluationJobInferenceConfigList(this, "inference_config", false);
  public get inferenceConfig() {
    return this._inferenceConfig;
  }
  public putInferenceConfig(value: BedrockEvaluationJobInferenceConfig[] | cdktn.IResolvable) {
    this._inferenceConfig.internalValue = value;
  }
  public resetInferenceConfig() {
    this._inferenceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceConfigInput() {
    return this._inferenceConfig.internalValue;
  }

  // output_data_config - computed: false, optional: true, required: false
  private _outputDataConfig = new BedrockEvaluationJobOutputDataConfigList(this, "output_data_config", false);
  public get outputDataConfig() {
    return this._outputDataConfig;
  }
  public putOutputDataConfig(value: BedrockEvaluationJobOutputDataConfig[] | cdktn.IResolvable) {
    this._outputDataConfig.internalValue = value;
  }
  public resetOutputDataConfig() {
    this._outputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDataConfigInput() {
    return this._outputDataConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockEvaluationJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockEvaluationJobTimeouts) {
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
      application_type: cdktn.stringToTerraform(this._applicationType),
      customer_encryption_key_id: cdktn.stringToTerraform(this._customerEncryptionKeyId),
      job_description: cdktn.stringToTerraform(this._jobDescription),
      job_name: cdktn.stringToTerraform(this._jobName),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      skip_destroy: cdktn.booleanToTerraform(this._skipDestroy),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      evaluation_config: cdktn.listMapper(bedrockEvaluationJobEvaluationConfigToTerraform, true)(this._evaluationConfig.internalValue),
      inference_config: cdktn.listMapper(bedrockEvaluationJobInferenceConfigToTerraform, true)(this._inferenceConfig.internalValue),
      output_data_config: cdktn.listMapper(bedrockEvaluationJobOutputDataConfigToTerraform, true)(this._outputDataConfig.internalValue),
      timeouts: bedrockEvaluationJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_type: {
        value: cdktn.stringToHclTerraform(this._applicationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_encryption_key_id: {
        value: cdktn.stringToHclTerraform(this._customerEncryptionKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_description: {
        value: cdktn.stringToHclTerraform(this._jobDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_name: {
        value: cdktn.stringToHclTerraform(this._jobName),
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
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_destroy: {
        value: cdktn.booleanToHclTerraform(this._skipDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      evaluation_config: {
        value: cdktn.listMapperHcl(bedrockEvaluationJobEvaluationConfigToHclTerraform, true)(this._evaluationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockEvaluationJobEvaluationConfigList",
      },
      inference_config: {
        value: cdktn.listMapperHcl(bedrockEvaluationJobInferenceConfigToHclTerraform, true)(this._inferenceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockEvaluationJobInferenceConfigList",
      },
      output_data_config: {
        value: cdktn.listMapperHcl(bedrockEvaluationJobOutputDataConfigToHclTerraform, true)(this._outputDataConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockEvaluationJobOutputDataConfigList",
      },
      timeouts: {
        value: bedrockEvaluationJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockEvaluationJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
