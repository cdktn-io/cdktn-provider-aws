/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentcoreEvaluatorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#description BedrockagentcoreEvaluator#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#evaluator_name BedrockagentcoreEvaluator#evaluator_name}
  */
  readonly evaluatorName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#kms_key_arn BedrockagentcoreEvaluator#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#level BedrockagentcoreEvaluator#level}
  */
  readonly level: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#region BedrockagentcoreEvaluator#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#tags BedrockagentcoreEvaluator#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * evaluator_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#evaluator_config BedrockagentcoreEvaluator#evaluator_config}
  */
  readonly evaluatorConfig?: BedrockagentcoreEvaluatorEvaluatorConfig[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#timeouts BedrockagentcoreEvaluator#timeouts}
  */
  readonly timeouts?: BedrockagentcoreEvaluatorTimeouts;
}
export interface BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#lambda_arn BedrockagentcoreEvaluator#lambda_arn}
  */
  readonly lambdaArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#lambda_timeout_in_seconds BedrockagentcoreEvaluator#lambda_timeout_in_seconds}
  */
  readonly lambdaTimeoutInSeconds?: number;
}

export function bedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigToTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    lambda_timeout_in_seconds: cdktn.numberToTerraform(struct!.lambdaTimeoutInSeconds),
  }
}


export function bedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigToHclTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.lambdaTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    if (this._lambdaTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaTimeoutInSeconds = this._lambdaTimeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambdaArn = undefined;
      this._lambdaTimeoutInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambdaArn = value.lambdaArn;
      this._lambdaTimeoutInSeconds = value.lambdaTimeoutInSeconds;
    }
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }

  // lambda_timeout_in_seconds - computed: true, optional: true, required: false
  private _lambdaTimeoutInSeconds?: number; 
  public get lambdaTimeoutInSeconds() {
    return this.getNumberAttribute('lambda_timeout_in_seconds');
  }
  public set lambdaTimeoutInSeconds(value: number) {
    this._lambdaTimeoutInSeconds = value;
  }
  public resetLambdaTimeoutInSeconds() {
    this._lambdaTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaTimeoutInSecondsInput() {
    return this._lambdaTimeoutInSeconds;
  }
}

export class BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference {
    return new BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreEvaluatorEvaluatorConfigCodeBased {
  /**
  * lambda_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#lambda_config BedrockagentcoreEvaluator#lambda_config}
  */
  readonly lambdaConfig?: BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig[] | cdktn.IResolvable;
}

export function bedrockagentcoreEvaluatorEvaluatorConfigCodeBasedToTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigCodeBased | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_config: cdktn.listMapper(bedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigToTerraform, true)(struct!.lambdaConfig),
  }
}


export function bedrockagentcoreEvaluatorEvaluatorConfigCodeBasedToHclTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigCodeBased | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda_config: {
      value: cdktn.listMapperHcl(bedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigToHclTerraform, true)(struct!.lambdaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreEvaluatorEvaluatorConfigCodeBased | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaConfig = this._lambdaConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreEvaluatorEvaluatorConfigCodeBased | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambdaConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambdaConfig.internalValue = value.lambdaConfig;
    }
  }

  // lambda_config - computed: false, optional: true, required: false
  private _lambdaConfig = new BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigList(this, "lambda_config", false);
  public get lambdaConfig() {
    return this._lambdaConfig;
  }
  public putLambdaConfig(value: BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig[] | cdktn.IResolvable) {
    this._lambdaConfig.internalValue = value;
  }
  public resetLambdaConfig() {
    this._lambdaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigInput() {
    return this._lambdaConfig.internalValue;
  }
}

export class BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreEvaluatorEvaluatorConfigCodeBased[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference {
    return new BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#max_tokens BedrockagentcoreEvaluator#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#stop_sequences BedrockagentcoreEvaluator#stop_sequences}
  */
  readonly stopSequences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#temperature BedrockagentcoreEvaluator#temperature}
  */
  readonly temperature?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#top_p BedrockagentcoreEvaluator#top_p}
  */
  readonly topP?: number;
}

export function bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigToTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
    stop_sequences: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stopSequences),
    temperature: cdktn.numberToTerraform(struct!.temperature),
    top_p: cdktn.numberToTerraform(struct!.topP),
  }
}


export function bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigToHclTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_tokens: {
      value: cdktn.numberToHclTerraform(struct!.maxTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stop_sequences: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stopSequences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    temperature: {
      value: cdktn.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_p: {
      value: cdktn.numberToHclTerraform(struct!.topP),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    if (this._stopSequences !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopSequences = this._stopSequences;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    if (this._topP !== undefined) {
      hasAnyValues = true;
      internalValueResult.topP = this._topP;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxTokens = undefined;
      this._stopSequences = undefined;
      this._temperature = undefined;
      this._topP = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxTokens = value.maxTokens;
      this._stopSequences = value.stopSequences;
      this._temperature = value.temperature;
      this._topP = value.topP;
    }
  }

  // max_tokens - computed: false, optional: true, required: false
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  public resetMaxTokens() {
    this._maxTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }

  // stop_sequences - computed: false, optional: true, required: false
  private _stopSequences?: string[]; 
  public get stopSequences() {
    return this.getListAttribute('stop_sequences');
  }
  public set stopSequences(value: string[]) {
    this._stopSequences = value;
  }
  public resetStopSequences() {
    this._stopSequences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopSequencesInput() {
    return this._stopSequences;
  }

  // temperature - computed: false, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }

  // top_p - computed: false, optional: true, required: false
  private _topP?: number; 
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
  public set topP(value: number) {
    this._topP = value;
  }
  public resetTopP() {
    this._topP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topPInput() {
    return this._topP;
  }
}

export class BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference {
    return new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#additional_model_request_fields BedrockagentcoreEvaluator#additional_model_request_fields}
  */
  readonly additionalModelRequestFields?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#model_id BedrockagentcoreEvaluator#model_id}
  */
  readonly modelId: string;
  /**
  * inference_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#inference_config BedrockagentcoreEvaluator#inference_config}
  */
  readonly inferenceConfig?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig[] | cdktn.IResolvable;
}

export function bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigToTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_model_request_fields: cdktn.stringToTerraform(struct!.additionalModelRequestFields),
    model_id: cdktn.stringToTerraform(struct!.modelId),
    inference_config: cdktn.listMapper(bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigToTerraform, true)(struct!.inferenceConfig),
  }
}


export function bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigToHclTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_model_request_fields: {
      value: cdktn.stringToHclTerraform(struct!.additionalModelRequestFields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inference_config: {
      value: cdktn.listMapperHcl(bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigToHclTerraform, true)(struct!.inferenceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalModelRequestFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalModelRequestFields = this._additionalModelRequestFields;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._inferenceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceConfig = this._inferenceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalModelRequestFields = undefined;
      this._modelId = undefined;
      this._inferenceConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalModelRequestFields = value.additionalModelRequestFields;
      this._modelId = value.modelId;
      this._inferenceConfig.internalValue = value.inferenceConfig;
    }
  }

  // additional_model_request_fields - computed: false, optional: true, required: false
  private _additionalModelRequestFields?: string; 
  public get additionalModelRequestFields() {
    return this.getStringAttribute('additional_model_request_fields');
  }
  public set additionalModelRequestFields(value: string) {
    this._additionalModelRequestFields = value;
  }
  public resetAdditionalModelRequestFields() {
    this._additionalModelRequestFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalModelRequestFieldsInput() {
    return this._additionalModelRequestFields;
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // inference_config - computed: false, optional: true, required: false
  private _inferenceConfig = new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigList(this, "inference_config", false);
  public get inferenceConfig() {
    return this._inferenceConfig;
  }
  public putInferenceConfig(value: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig[] | cdktn.IResolvable) {
    this._inferenceConfig.internalValue = value;
  }
  public resetInferenceConfig() {
    this._inferenceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceConfigInput() {
    return this._inferenceConfig.internalValue;
  }
}

export class BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference {
    return new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig {
  /**
  * bedrock_evaluator_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#bedrock_evaluator_model_config BedrockagentcoreEvaluator#bedrock_evaluator_model_config}
  */
  readonly bedrockEvaluatorModelConfig?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig[] | cdktn.IResolvable;
}

export function bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigToTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bedrock_evaluator_model_config: cdktn.listMapper(bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigToTerraform, true)(struct!.bedrockEvaluatorModelConfig),
  }
}


export function bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigToHclTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bedrock_evaluator_model_config: {
      value: cdktn.listMapperHcl(bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigToHclTerraform, true)(struct!.bedrockEvaluatorModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bedrockEvaluatorModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockEvaluatorModelConfig = this._bedrockEvaluatorModelConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bedrockEvaluatorModelConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bedrockEvaluatorModelConfig.internalValue = value.bedrockEvaluatorModelConfig;
    }
  }

  // bedrock_evaluator_model_config - computed: false, optional: true, required: false
  private _bedrockEvaluatorModelConfig = new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigList(this, "bedrock_evaluator_model_config", false);
  public get bedrockEvaluatorModelConfig() {
    return this._bedrockEvaluatorModelConfig;
  }
  public putBedrockEvaluatorModelConfig(value: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig[] | cdktn.IResolvable) {
    this._bedrockEvaluatorModelConfig.internalValue = value;
  }
  public resetBedrockEvaluatorModelConfig() {
    this._bedrockEvaluatorModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockEvaluatorModelConfigInput() {
    return this._bedrockEvaluatorModelConfig.internalValue;
  }
}

export class BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference {
    return new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#definition BedrockagentcoreEvaluator#definition}
  */
  readonly definition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#label BedrockagentcoreEvaluator#label}
  */
  readonly label: string;
}

export function bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalToTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    label: cdktn.stringToTerraform(struct!.label),
  }
}


export function bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalToHclTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical | cdktn.IResolvable): any {
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
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._label = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._label = value.label;
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}

export class BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference {
    return new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#definition BedrockagentcoreEvaluator#definition}
  */
  readonly definition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#label BedrockagentcoreEvaluator#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#value BedrockagentcoreEvaluator#value}
  */
  readonly value: number;
}

export function bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalToTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    label: cdktn.stringToTerraform(struct!.label),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalToHclTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical | cdktn.IResolvable): any {
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
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._label = value.label;
      this._value = value.value;
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference {
    return new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale {
  /**
  * categorical block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#categorical BedrockagentcoreEvaluator#categorical}
  */
  readonly categorical?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical[] | cdktn.IResolvable;
  /**
  * numerical block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#numerical BedrockagentcoreEvaluator#numerical}
  */
  readonly numerical?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical[] | cdktn.IResolvable;
}

export function bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleToTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    categorical: cdktn.listMapper(bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalToTerraform, true)(struct!.categorical),
    numerical: cdktn.listMapper(bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalToTerraform, true)(struct!.numerical),
  }
}


export function bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleToHclTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    categorical: {
      value: cdktn.listMapperHcl(bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalToHclTerraform, true)(struct!.categorical),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList",
    },
    numerical: {
      value: cdktn.listMapperHcl(bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalToHclTerraform, true)(struct!.numerical),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categorical?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorical = this._categorical?.internalValue;
    }
    if (this._numerical?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numerical = this._numerical?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categorical.internalValue = undefined;
      this._numerical.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categorical.internalValue = value.categorical;
      this._numerical.internalValue = value.numerical;
    }
  }

  // categorical - computed: false, optional: true, required: false
  private _categorical = new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList(this, "categorical", false);
  public get categorical() {
    return this._categorical;
  }
  public putCategorical(value: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical[] | cdktn.IResolvable) {
    this._categorical.internalValue = value;
  }
  public resetCategorical() {
    this._categorical.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoricalInput() {
    return this._categorical.internalValue;
  }

  // numerical - computed: false, optional: true, required: false
  private _numerical = new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList(this, "numerical", false);
  public get numerical() {
    return this._numerical;
  }
  public putNumerical(value: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical[] | cdktn.IResolvable) {
    this._numerical.internalValue = value;
  }
  public resetNumerical() {
    this._numerical.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericalInput() {
    return this._numerical.internalValue;
  }
}

export class BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference {
    return new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#instructions BedrockagentcoreEvaluator#instructions}
  */
  readonly instructions: string;
  /**
  * model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#model_config BedrockagentcoreEvaluator#model_config}
  */
  readonly modelConfig?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig[] | cdktn.IResolvable;
  /**
  * rating_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#rating_scale BedrockagentcoreEvaluator#rating_scale}
  */
  readonly ratingScale?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale[] | cdktn.IResolvable;
}

export function bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeToTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instructions: cdktn.stringToTerraform(struct!.instructions),
    model_config: cdktn.listMapper(bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigToTerraform, true)(struct!.modelConfig),
    rating_scale: cdktn.listMapper(bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleToTerraform, true)(struct!.ratingScale),
  }
}


export function bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeToHclTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge | cdktn.IResolvable): any {
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
    model_config: {
      value: cdktn.listMapperHcl(bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigToHclTerraform, true)(struct!.modelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList",
    },
    rating_scale: {
      value: cdktn.listMapperHcl(bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleToHclTerraform, true)(struct!.ratingScale),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instructions !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructions = this._instructions;
    }
    if (this._modelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelConfig = this._modelConfig?.internalValue;
    }
    if (this._ratingScale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratingScale = this._ratingScale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instructions = undefined;
      this._modelConfig.internalValue = undefined;
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
      this._modelConfig.internalValue = value.modelConfig;
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

  // model_config - computed: false, optional: true, required: false
  private _modelConfig = new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigList(this, "model_config", false);
  public get modelConfig() {
    return this._modelConfig;
  }
  public putModelConfig(value: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig[] | cdktn.IResolvable) {
    this._modelConfig.internalValue = value;
  }
  public resetModelConfig() {
    this._modelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelConfigInput() {
    return this._modelConfig.internalValue;
  }

  // rating_scale - computed: false, optional: true, required: false
  private _ratingScale = new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleList(this, "rating_scale", false);
  public get ratingScale() {
    return this._ratingScale;
  }
  public putRatingScale(value: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale[] | cdktn.IResolvable) {
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

export class BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference {
    return new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreEvaluatorEvaluatorConfig {
  /**
  * code_based block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#code_based BedrockagentcoreEvaluator#code_based}
  */
  readonly codeBased?: BedrockagentcoreEvaluatorEvaluatorConfigCodeBased[] | cdktn.IResolvable;
  /**
  * llm_as_a_judge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#llm_as_a_judge BedrockagentcoreEvaluator#llm_as_a_judge}
  */
  readonly llmAsAJudge?: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge[] | cdktn.IResolvable;
}

export function bedrockagentcoreEvaluatorEvaluatorConfigToTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_based: cdktn.listMapper(bedrockagentcoreEvaluatorEvaluatorConfigCodeBasedToTerraform, true)(struct!.codeBased),
    llm_as_a_judge: cdktn.listMapper(bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeToTerraform, true)(struct!.llmAsAJudge),
  }
}


export function bedrockagentcoreEvaluatorEvaluatorConfigToHclTerraform(struct?: BedrockagentcoreEvaluatorEvaluatorConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_based: {
      value: cdktn.listMapperHcl(bedrockagentcoreEvaluatorEvaluatorConfigCodeBasedToHclTerraform, true)(struct!.codeBased),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList",
    },
    llm_as_a_judge: {
      value: cdktn.listMapperHcl(bedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeToHclTerraform, true)(struct!.llmAsAJudge),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreEvaluatorEvaluatorConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreEvaluatorEvaluatorConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeBased?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeBased = this._codeBased?.internalValue;
    }
    if (this._llmAsAJudge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmAsAJudge = this._llmAsAJudge?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreEvaluatorEvaluatorConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeBased.internalValue = undefined;
      this._llmAsAJudge.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeBased.internalValue = value.codeBased;
      this._llmAsAJudge.internalValue = value.llmAsAJudge;
    }
  }

  // code_based - computed: false, optional: true, required: false
  private _codeBased = new BedrockagentcoreEvaluatorEvaluatorConfigCodeBasedList(this, "code_based", false);
  public get codeBased() {
    return this._codeBased;
  }
  public putCodeBased(value: BedrockagentcoreEvaluatorEvaluatorConfigCodeBased[] | cdktn.IResolvable) {
    this._codeBased.internalValue = value;
  }
  public resetCodeBased() {
    this._codeBased.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeBasedInput() {
    return this._codeBased.internalValue;
  }

  // llm_as_a_judge - computed: false, optional: true, required: false
  private _llmAsAJudge = new BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeList(this, "llm_as_a_judge", false);
  public get llmAsAJudge() {
    return this._llmAsAJudge;
  }
  public putLlmAsAJudge(value: BedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge[] | cdktn.IResolvable) {
    this._llmAsAJudge.internalValue = value;
  }
  public resetLlmAsAJudge() {
    this._llmAsAJudge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmAsAJudgeInput() {
    return this._llmAsAJudge.internalValue;
  }
}

export class BedrockagentcoreEvaluatorEvaluatorConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreEvaluatorEvaluatorConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreEvaluatorEvaluatorConfigOutputReference {
    return new BedrockagentcoreEvaluatorEvaluatorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreEvaluatorTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#create BedrockagentcoreEvaluator#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#delete BedrockagentcoreEvaluator#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#update BedrockagentcoreEvaluator#update}
  */
  readonly update?: string;
}

export function bedrockagentcoreEvaluatorTimeoutsToTerraform(struct?: BedrockagentcoreEvaluatorTimeouts | cdktn.IResolvable): any {
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


export function bedrockagentcoreEvaluatorTimeoutsToHclTerraform(struct?: BedrockagentcoreEvaluatorTimeouts | cdktn.IResolvable): any {
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

export class BedrockagentcoreEvaluatorTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreEvaluatorTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreEvaluatorTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator aws_bedrockagentcore_evaluator}
*/
export class BedrockagentcoreEvaluator extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_evaluator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentcoreEvaluator resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreEvaluator to import
  * @param importFromId The id of the existing BedrockagentcoreEvaluator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreEvaluator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_evaluator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_evaluator aws_bedrockagentcore_evaluator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreEvaluatorConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreEvaluatorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagentcore_evaluator',
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
    this._description = config.description;
    this._evaluatorName = config.evaluatorName;
    this._kmsKeyArn = config.kmsKeyArn;
    this._level = config.level;
    this._region = config.region;
    this._tags = config.tags;
    this._evaluatorConfig.internalValue = config.evaluatorConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // evaluator_arn - computed: true, optional: false, required: false
  public get evaluatorArn() {
    return this.getStringAttribute('evaluator_arn');
  }

  // evaluator_id - computed: true, optional: false, required: false
  public get evaluatorId() {
    return this.getStringAttribute('evaluator_id');
  }

  // evaluator_name - computed: false, optional: false, required: true
  private _evaluatorName?: string; 
  public get evaluatorName() {
    return this.getStringAttribute('evaluator_name');
  }
  public set evaluatorName(value: string) {
    this._evaluatorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorNameInput() {
    return this._evaluatorName;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // locked_for_modification - computed: true, optional: false, required: false
  public get lockedForModification() {
    return this.getBooleanAttribute('locked_for_modification');
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

  // evaluator_config - computed: false, optional: true, required: false
  private _evaluatorConfig = new BedrockagentcoreEvaluatorEvaluatorConfigList(this, "evaluator_config", false);
  public get evaluatorConfig() {
    return this._evaluatorConfig;
  }
  public putEvaluatorConfig(value: BedrockagentcoreEvaluatorEvaluatorConfig[] | cdktn.IResolvable) {
    this._evaluatorConfig.internalValue = value;
  }
  public resetEvaluatorConfig() {
    this._evaluatorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorConfigInput() {
    return this._evaluatorConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockagentcoreEvaluatorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockagentcoreEvaluatorTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      evaluator_name: cdktn.stringToTerraform(this._evaluatorName),
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
      level: cdktn.stringToTerraform(this._level),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      evaluator_config: cdktn.listMapper(bedrockagentcoreEvaluatorEvaluatorConfigToTerraform, true)(this._evaluatorConfig.internalValue),
      timeouts: bedrockagentcoreEvaluatorTimeoutsToTerraform(this._timeouts.internalValue),
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
      evaluator_name: {
        value: cdktn.stringToHclTerraform(this._evaluatorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._kmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktn.stringToHclTerraform(this._level),
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
      evaluator_config: {
        value: cdktn.listMapperHcl(bedrockagentcoreEvaluatorEvaluatorConfigToHclTerraform, true)(this._evaluatorConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreEvaluatorEvaluatorConfigList",
      },
      timeouts: {
        value: bedrockagentcoreEvaluatorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreEvaluatorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
