/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockGuardrailConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#blocked_input_messaging BedrockGuardrail#blocked_input_messaging}
  */
  readonly blockedInputMessaging: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#blocked_outputs_messaging BedrockGuardrail#blocked_outputs_messaging}
  */
  readonly blockedOutputsMessaging: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#kms_key_arn BedrockGuardrail#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#region BedrockGuardrail#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#tags BedrockGuardrail#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * content_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#content_policy_config BedrockGuardrail#content_policy_config}
  */
  readonly contentPolicyConfig?: BedrockGuardrailContentPolicyConfig[] | cdktn.IResolvable;
  /**
  * contextual_grounding_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#contextual_grounding_policy_config BedrockGuardrail#contextual_grounding_policy_config}
  */
  readonly contextualGroundingPolicyConfig?: BedrockGuardrailContextualGroundingPolicyConfig[] | cdktn.IResolvable;
  /**
  * cross_region_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#cross_region_config BedrockGuardrail#cross_region_config}
  */
  readonly crossRegionConfig?: BedrockGuardrailCrossRegionConfig[] | cdktn.IResolvable;
  /**
  * sensitive_information_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#sensitive_information_policy_config BedrockGuardrail#sensitive_information_policy_config}
  */
  readonly sensitiveInformationPolicyConfig?: BedrockGuardrailSensitiveInformationPolicyConfig[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#timeouts BedrockGuardrail#timeouts}
  */
  readonly timeouts?: BedrockGuardrailTimeouts;
  /**
  * topic_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#topic_policy_config BedrockGuardrail#topic_policy_config}
  */
  readonly topicPolicyConfig?: BedrockGuardrailTopicPolicyConfig[] | cdktn.IResolvable;
  /**
  * word_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#word_policy_config BedrockGuardrail#word_policy_config}
  */
  readonly wordPolicyConfig?: BedrockGuardrailWordPolicyConfig[] | cdktn.IResolvable;
}
export interface BedrockGuardrailContentPolicyConfigTierConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#tier_name BedrockGuardrail#tier_name}
  */
  readonly tierName?: string;
}

export function bedrockGuardrailContentPolicyConfigTierConfigToTerraform(struct?: BedrockGuardrailContentPolicyConfigTierConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tier_name: cdktn.stringToTerraform(struct!.tierName),
  }
}


export function bedrockGuardrailContentPolicyConfigTierConfigToHclTerraform(struct?: BedrockGuardrailContentPolicyConfigTierConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tier_name: {
      value: cdktn.stringToHclTerraform(struct!.tierName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailContentPolicyConfigTierConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailContentPolicyConfigTierConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tierName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierName = this._tierName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailContentPolicyConfigTierConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tierName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tierName = value.tierName;
    }
  }

  // tier_name - computed: true, optional: true, required: false
  private _tierName?: string; 
  public get tierName() {
    return this.getStringAttribute('tier_name');
  }
  public set tierName(value: string) {
    this._tierName = value;
  }
  public resetTierName() {
    this._tierName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierNameInput() {
    return this._tierName;
  }
}

export class BedrockGuardrailContentPolicyConfigTierConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailContentPolicyConfigTierConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockGuardrailContentPolicyConfigTierConfigOutputReference {
    return new BedrockGuardrailContentPolicyConfigTierConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailContentPolicyConfigFiltersConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}
  */
  readonly inputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}
  */
  readonly inputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#input_modalities BedrockGuardrail#input_modalities}
  */
  readonly inputModalities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#input_strength BedrockGuardrail#input_strength}
  */
  readonly inputStrength: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}
  */
  readonly outputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}
  */
  readonly outputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#output_modalities BedrockGuardrail#output_modalities}
  */
  readonly outputModalities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#output_strength BedrockGuardrail#output_strength}
  */
  readonly outputStrength: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
  */
  readonly type: string;
}

export function bedrockGuardrailContentPolicyConfigFiltersConfigToTerraform(struct?: BedrockGuardrailContentPolicyConfigFiltersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_action: cdktn.stringToTerraform(struct!.inputAction),
    input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
    input_modalities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inputModalities),
    input_strength: cdktn.stringToTerraform(struct!.inputStrength),
    output_action: cdktn.stringToTerraform(struct!.outputAction),
    output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
    output_modalities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.outputModalities),
    output_strength: cdktn.stringToTerraform(struct!.outputStrength),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockGuardrailContentPolicyConfigFiltersConfigToHclTerraform(struct?: BedrockGuardrailContentPolicyConfigFiltersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_action: {
      value: cdktn.stringToHclTerraform(struct!.inputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_modalities: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inputModalities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    input_strength: {
      value: cdktn.stringToHclTerraform(struct!.inputStrength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_action: {
      value: cdktn.stringToHclTerraform(struct!.outputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_modalities: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.outputModalities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    output_strength: {
      value: cdktn.stringToHclTerraform(struct!.outputStrength),
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

export class BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailContentPolicyConfigFiltersConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAction = this._inputAction;
    }
    if (this._inputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputEnabled = this._inputEnabled;
    }
    if (this._inputModalities !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputModalities = this._inputModalities;
    }
    if (this._inputStrength !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputStrength = this._inputStrength;
    }
    if (this._outputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAction = this._outputAction;
    }
    if (this._outputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEnabled = this._outputEnabled;
    }
    if (this._outputModalities !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputModalities = this._outputModalities;
    }
    if (this._outputStrength !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStrength = this._outputStrength;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailContentPolicyConfigFiltersConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputAction = undefined;
      this._inputEnabled = undefined;
      this._inputModalities = undefined;
      this._inputStrength = undefined;
      this._outputAction = undefined;
      this._outputEnabled = undefined;
      this._outputModalities = undefined;
      this._outputStrength = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputAction = value.inputAction;
      this._inputEnabled = value.inputEnabled;
      this._inputModalities = value.inputModalities;
      this._inputStrength = value.inputStrength;
      this._outputAction = value.outputAction;
      this._outputEnabled = value.outputEnabled;
      this._outputModalities = value.outputModalities;
      this._outputStrength = value.outputStrength;
      this._type = value.type;
    }
  }

  // input_action - computed: false, optional: true, required: false
  private _inputAction?: string; 
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }
  public set inputAction(value: string) {
    this._inputAction = value;
  }
  public resetInputAction() {
    this._inputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputActionInput() {
    return this._inputAction;
  }

  // input_enabled - computed: false, optional: true, required: false
  private _inputEnabled?: boolean | cdktn.IResolvable; 
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }
  public set inputEnabled(value: boolean | cdktn.IResolvable) {
    this._inputEnabled = value;
  }
  public resetInputEnabled() {
    this._inputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEnabledInput() {
    return this._inputEnabled;
  }

  // input_modalities - computed: false, optional: true, required: false
  private _inputModalities?: string[]; 
  public get inputModalities() {
    return this.getListAttribute('input_modalities');
  }
  public set inputModalities(value: string[]) {
    this._inputModalities = value;
  }
  public resetInputModalities() {
    this._inputModalities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputModalitiesInput() {
    return this._inputModalities;
  }

  // input_strength - computed: false, optional: false, required: true
  private _inputStrength?: string; 
  public get inputStrength() {
    return this.getStringAttribute('input_strength');
  }
  public set inputStrength(value: string) {
    this._inputStrength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputStrengthInput() {
    return this._inputStrength;
  }

  // output_action - computed: false, optional: true, required: false
  private _outputAction?: string; 
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }
  public set outputAction(value: string) {
    this._outputAction = value;
  }
  public resetOutputAction() {
    this._outputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputActionInput() {
    return this._outputAction;
  }

  // output_enabled - computed: false, optional: true, required: false
  private _outputEnabled?: boolean | cdktn.IResolvable; 
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }
  public set outputEnabled(value: boolean | cdktn.IResolvable) {
    this._outputEnabled = value;
  }
  public resetOutputEnabled() {
    this._outputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEnabledInput() {
    return this._outputEnabled;
  }

  // output_modalities - computed: false, optional: true, required: false
  private _outputModalities?: string[]; 
  public get outputModalities() {
    return this.getListAttribute('output_modalities');
  }
  public set outputModalities(value: string[]) {
    this._outputModalities = value;
  }
  public resetOutputModalities() {
    this._outputModalities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputModalitiesInput() {
    return this._outputModalities;
  }

  // output_strength - computed: false, optional: false, required: true
  private _outputStrength?: string; 
  public get outputStrength() {
    return this.getStringAttribute('output_strength');
  }
  public set outputStrength(value: string) {
    this._outputStrength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStrengthInput() {
    return this._outputStrength;
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

export class BedrockGuardrailContentPolicyConfigFiltersConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailContentPolicyConfigFiltersConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference {
    return new BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailContentPolicyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#tier_config BedrockGuardrail#tier_config}
  */
  readonly tierConfig?: BedrockGuardrailContentPolicyConfigTierConfig[] | cdktn.IResolvable;
  /**
  * filters_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#filters_config BedrockGuardrail#filters_config}
  */
  readonly filtersConfig?: BedrockGuardrailContentPolicyConfigFiltersConfig[] | cdktn.IResolvable;
}

export function bedrockGuardrailContentPolicyConfigToTerraform(struct?: BedrockGuardrailContentPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tier_config: cdktn.listMapper(bedrockGuardrailContentPolicyConfigTierConfigToTerraform, false)(struct!.tierConfig),
    filters_config: cdktn.listMapper(bedrockGuardrailContentPolicyConfigFiltersConfigToTerraform, true)(struct!.filtersConfig),
  }
}


export function bedrockGuardrailContentPolicyConfigToHclTerraform(struct?: BedrockGuardrailContentPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tier_config: {
      value: cdktn.listMapperHcl(bedrockGuardrailContentPolicyConfigTierConfigToHclTerraform, false)(struct!.tierConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailContentPolicyConfigTierConfigList",
    },
    filters_config: {
      value: cdktn.listMapperHcl(bedrockGuardrailContentPolicyConfigFiltersConfigToHclTerraform, true)(struct!.filtersConfig),
      isBlock: true,
      type: "set",
      storageClassType: "BedrockGuardrailContentPolicyConfigFiltersConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailContentPolicyConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailContentPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tierConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierConfig = this._tierConfig?.internalValue;
    }
    if (this._filtersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersConfig = this._filtersConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailContentPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tierConfig.internalValue = undefined;
      this._filtersConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tierConfig.internalValue = value.tierConfig;
      this._filtersConfig.internalValue = value.filtersConfig;
    }
  }

  // tier_config - computed: true, optional: true, required: false
  private _tierConfig = new BedrockGuardrailContentPolicyConfigTierConfigList(this, "tier_config", false);
  public get tierConfig() {
    return this._tierConfig;
  }
  public putTierConfig(value: BedrockGuardrailContentPolicyConfigTierConfig[] | cdktn.IResolvable) {
    this._tierConfig.internalValue = value;
  }
  public resetTierConfig() {
    this._tierConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierConfigInput() {
    return this._tierConfig.internalValue;
  }

  // filters_config - computed: false, optional: true, required: false
  private _filtersConfig = new BedrockGuardrailContentPolicyConfigFiltersConfigList(this, "filters_config", true);
  public get filtersConfig() {
    return this._filtersConfig;
  }
  public putFiltersConfig(value: BedrockGuardrailContentPolicyConfigFiltersConfig[] | cdktn.IResolvable) {
    this._filtersConfig.internalValue = value;
  }
  public resetFiltersConfig() {
    this._filtersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersConfigInput() {
    return this._filtersConfig.internalValue;
  }
}

export class BedrockGuardrailContentPolicyConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailContentPolicyConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockGuardrailContentPolicyConfigOutputReference {
    return new BedrockGuardrailContentPolicyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#threshold BedrockGuardrail#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
  */
  readonly type: string;
}

export function bedrockGuardrailContextualGroundingPolicyConfigFiltersConfigToTerraform(struct?: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktn.numberToTerraform(struct!.threshold),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockGuardrailContextualGroundingPolicyConfigFiltersConfigToHclTerraform(struct?: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktn.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
      this._type = value.type;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
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

export class BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference {
    return new BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailContextualGroundingPolicyConfig {
  /**
  * filters_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#filters_config BedrockGuardrail#filters_config}
  */
  readonly filtersConfig?: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig[] | cdktn.IResolvable;
}

export function bedrockGuardrailContextualGroundingPolicyConfigToTerraform(struct?: BedrockGuardrailContextualGroundingPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters_config: cdktn.listMapper(bedrockGuardrailContextualGroundingPolicyConfigFiltersConfigToTerraform, true)(struct!.filtersConfig),
  }
}


export function bedrockGuardrailContextualGroundingPolicyConfigToHclTerraform(struct?: BedrockGuardrailContextualGroundingPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters_config: {
      value: cdktn.listMapperHcl(bedrockGuardrailContextualGroundingPolicyConfigFiltersConfigToHclTerraform, true)(struct!.filtersConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailContextualGroundingPolicyConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailContextualGroundingPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filtersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersConfig = this._filtersConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailContextualGroundingPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filtersConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filtersConfig.internalValue = value.filtersConfig;
    }
  }

  // filters_config - computed: false, optional: true, required: false
  private _filtersConfig = new BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList(this, "filters_config", false);
  public get filtersConfig() {
    return this._filtersConfig;
  }
  public putFiltersConfig(value: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig[] | cdktn.IResolvable) {
    this._filtersConfig.internalValue = value;
  }
  public resetFiltersConfig() {
    this._filtersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersConfigInput() {
    return this._filtersConfig.internalValue;
  }
}

export class BedrockGuardrailContextualGroundingPolicyConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailContextualGroundingPolicyConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockGuardrailContextualGroundingPolicyConfigOutputReference {
    return new BedrockGuardrailContextualGroundingPolicyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailCrossRegionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#guardrail_profile_identifier BedrockGuardrail#guardrail_profile_identifier}
  */
  readonly guardrailProfileIdentifier: string;
}

export function bedrockGuardrailCrossRegionConfigToTerraform(struct?: BedrockGuardrailCrossRegionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    guardrail_profile_identifier: cdktn.stringToTerraform(struct!.guardrailProfileIdentifier),
  }
}


export function bedrockGuardrailCrossRegionConfigToHclTerraform(struct?: BedrockGuardrailCrossRegionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    guardrail_profile_identifier: {
      value: cdktn.stringToHclTerraform(struct!.guardrailProfileIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailCrossRegionConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailCrossRegionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guardrailProfileIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardrailProfileIdentifier = this._guardrailProfileIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailCrossRegionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guardrailProfileIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guardrailProfileIdentifier = value.guardrailProfileIdentifier;
    }
  }

  // guardrail_profile_identifier - computed: false, optional: false, required: true
  private _guardrailProfileIdentifier?: string; 
  public get guardrailProfileIdentifier() {
    return this.getStringAttribute('guardrail_profile_identifier');
  }
  public set guardrailProfileIdentifier(value: string) {
    this._guardrailProfileIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailProfileIdentifierInput() {
    return this._guardrailProfileIdentifier;
  }
}

export class BedrockGuardrailCrossRegionConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailCrossRegionConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockGuardrailCrossRegionConfigOutputReference {
    return new BedrockGuardrailCrossRegionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}
  */
  readonly inputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}
  */
  readonly inputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}
  */
  readonly outputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}
  */
  readonly outputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
  */
  readonly type: string;
}

export function bedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    input_action: cdktn.stringToTerraform(struct!.inputAction),
    input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
    output_action: cdktn.stringToTerraform(struct!.outputAction),
    output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToHclTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_action: {
      value: cdktn.stringToHclTerraform(struct!.inputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_action: {
      value: cdktn.stringToHclTerraform(struct!.outputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._inputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAction = this._inputAction;
    }
    if (this._inputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputEnabled = this._inputEnabled;
    }
    if (this._outputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAction = this._outputAction;
    }
    if (this._outputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEnabled = this._outputEnabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._inputAction = undefined;
      this._inputEnabled = undefined;
      this._outputAction = undefined;
      this._outputEnabled = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._inputAction = value.inputAction;
      this._inputEnabled = value.inputEnabled;
      this._outputAction = value.outputAction;
      this._outputEnabled = value.outputEnabled;
      this._type = value.type;
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

  // input_action - computed: true, optional: true, required: false
  private _inputAction?: string; 
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }
  public set inputAction(value: string) {
    this._inputAction = value;
  }
  public resetInputAction() {
    this._inputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputActionInput() {
    return this._inputAction;
  }

  // input_enabled - computed: true, optional: true, required: false
  private _inputEnabled?: boolean | cdktn.IResolvable; 
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }
  public set inputEnabled(value: boolean | cdktn.IResolvable) {
    this._inputEnabled = value;
  }
  public resetInputEnabled() {
    this._inputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEnabledInput() {
    return this._inputEnabled;
  }

  // output_action - computed: true, optional: true, required: false
  private _outputAction?: string; 
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }
  public set outputAction(value: string) {
    this._outputAction = value;
  }
  public resetOutputAction() {
    this._outputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputActionInput() {
    return this._outputAction;
  }

  // output_enabled - computed: true, optional: true, required: false
  private _outputEnabled?: boolean | cdktn.IResolvable; 
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }
  public set outputEnabled(value: boolean | cdktn.IResolvable) {
    this._outputEnabled = value;
  }
  public resetOutputEnabled() {
    this._outputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEnabledInput() {
    return this._outputEnabled;
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

export class BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference {
    return new BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}
  */
  readonly inputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}
  */
  readonly inputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}
  */
  readonly outputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}
  */
  readonly outputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#pattern BedrockGuardrail#pattern}
  */
  readonly pattern: string;
}

export function bedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigToTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    description: cdktn.stringToTerraform(struct!.description),
    input_action: cdktn.stringToTerraform(struct!.inputAction),
    input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
    name: cdktn.stringToTerraform(struct!.name),
    output_action: cdktn.stringToTerraform(struct!.outputAction),
    output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
    pattern: cdktn.stringToTerraform(struct!.pattern),
  }
}


export function bedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigToHclTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    input_action: {
      value: cdktn.stringToHclTerraform(struct!.inputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_action: {
      value: cdktn.stringToHclTerraform(struct!.outputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktn.IResolvable | undefined {
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
    if (this._inputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAction = this._inputAction;
    }
    if (this._inputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputEnabled = this._inputEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._outputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAction = this._outputAction;
    }
    if (this._outputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEnabled = this._outputEnabled;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._inputAction = undefined;
      this._inputEnabled = undefined;
      this._name = undefined;
      this._outputAction = undefined;
      this._outputEnabled = undefined;
      this._pattern = undefined;
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
      this._inputAction = value.inputAction;
      this._inputEnabled = value.inputEnabled;
      this._name = value.name;
      this._outputAction = value.outputAction;
      this._outputEnabled = value.outputEnabled;
      this._pattern = value.pattern;
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

  // description - computed: true, optional: true, required: false
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

  // input_action - computed: true, optional: true, required: false
  private _inputAction?: string; 
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }
  public set inputAction(value: string) {
    this._inputAction = value;
  }
  public resetInputAction() {
    this._inputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputActionInput() {
    return this._inputAction;
  }

  // input_enabled - computed: true, optional: true, required: false
  private _inputEnabled?: boolean | cdktn.IResolvable; 
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }
  public set inputEnabled(value: boolean | cdktn.IResolvable) {
    this._inputEnabled = value;
  }
  public resetInputEnabled() {
    this._inputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEnabledInput() {
    return this._inputEnabled;
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

  // output_action - computed: true, optional: true, required: false
  private _outputAction?: string; 
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }
  public set outputAction(value: string) {
    this._outputAction = value;
  }
  public resetOutputAction() {
    this._outputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputActionInput() {
    return this._outputAction;
  }

  // output_enabled - computed: true, optional: true, required: false
  private _outputEnabled?: boolean | cdktn.IResolvable; 
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }
  public set outputEnabled(value: boolean | cdktn.IResolvable) {
    this._outputEnabled = value;
  }
  public resetOutputEnabled() {
    this._outputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEnabledInput() {
    return this._outputEnabled;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference {
    return new BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailSensitiveInformationPolicyConfig {
  /**
  * pii_entities_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#pii_entities_config BedrockGuardrail#pii_entities_config}
  */
  readonly piiEntitiesConfig?: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig[] | cdktn.IResolvable;
  /**
  * regexes_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#regexes_config BedrockGuardrail#regexes_config}
  */
  readonly regexesConfig?: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig[] | cdktn.IResolvable;
}

export function bedrockGuardrailSensitiveInformationPolicyConfigToTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pii_entities_config: cdktn.listMapper(bedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToTerraform, true)(struct!.piiEntitiesConfig),
    regexes_config: cdktn.listMapper(bedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigToTerraform, true)(struct!.regexesConfig),
  }
}


export function bedrockGuardrailSensitiveInformationPolicyConfigToHclTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pii_entities_config: {
      value: cdktn.listMapperHcl(bedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToHclTerraform, true)(struct!.piiEntitiesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList",
    },
    regexes_config: {
      value: cdktn.listMapperHcl(bedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigToHclTerraform, true)(struct!.regexesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailSensitiveInformationPolicyConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailSensitiveInformationPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._piiEntitiesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntitiesConfig = this._piiEntitiesConfig?.internalValue;
    }
    if (this._regexesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexesConfig = this._regexesConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailSensitiveInformationPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._piiEntitiesConfig.internalValue = undefined;
      this._regexesConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._piiEntitiesConfig.internalValue = value.piiEntitiesConfig;
      this._regexesConfig.internalValue = value.regexesConfig;
    }
  }

  // pii_entities_config - computed: false, optional: true, required: false
  private _piiEntitiesConfig = new BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList(this, "pii_entities_config", false);
  public get piiEntitiesConfig() {
    return this._piiEntitiesConfig;
  }
  public putPiiEntitiesConfig(value: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig[] | cdktn.IResolvable) {
    this._piiEntitiesConfig.internalValue = value;
  }
  public resetPiiEntitiesConfig() {
    this._piiEntitiesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntitiesConfigInput() {
    return this._piiEntitiesConfig.internalValue;
  }

  // regexes_config - computed: false, optional: true, required: false
  private _regexesConfig = new BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList(this, "regexes_config", false);
  public get regexesConfig() {
    return this._regexesConfig;
  }
  public putRegexesConfig(value: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig[] | cdktn.IResolvable) {
    this._regexesConfig.internalValue = value;
  }
  public resetRegexesConfig() {
    this._regexesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexesConfigInput() {
    return this._regexesConfig.internalValue;
  }
}

export class BedrockGuardrailSensitiveInformationPolicyConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailSensitiveInformationPolicyConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockGuardrailSensitiveInformationPolicyConfigOutputReference {
    return new BedrockGuardrailSensitiveInformationPolicyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#create BedrockGuardrail#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#delete BedrockGuardrail#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#update BedrockGuardrail#update}
  */
  readonly update?: string;
}

export function bedrockGuardrailTimeoutsToTerraform(struct?: BedrockGuardrailTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function bedrockGuardrailTimeoutsToHclTerraform(struct?: BedrockGuardrailTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class BedrockGuardrailTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockGuardrailTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockGuardrailTimeouts | cdktn.IResolvable | undefined) {
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
export interface BedrockGuardrailTopicPolicyConfigTierConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#tier_name BedrockGuardrail#tier_name}
  */
  readonly tierName?: string;
}

export function bedrockGuardrailTopicPolicyConfigTierConfigToTerraform(struct?: BedrockGuardrailTopicPolicyConfigTierConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tier_name: cdktn.stringToTerraform(struct!.tierName),
  }
}


export function bedrockGuardrailTopicPolicyConfigTierConfigToHclTerraform(struct?: BedrockGuardrailTopicPolicyConfigTierConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tier_name: {
      value: cdktn.stringToHclTerraform(struct!.tierName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailTopicPolicyConfigTierConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailTopicPolicyConfigTierConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tierName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierName = this._tierName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailTopicPolicyConfigTierConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tierName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tierName = value.tierName;
    }
  }

  // tier_name - computed: true, optional: true, required: false
  private _tierName?: string; 
  public get tierName() {
    return this.getStringAttribute('tier_name');
  }
  public set tierName(value: string) {
    this._tierName = value;
  }
  public resetTierName() {
    this._tierName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierNameInput() {
    return this._tierName;
  }
}

export class BedrockGuardrailTopicPolicyConfigTierConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailTopicPolicyConfigTierConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockGuardrailTopicPolicyConfigTierConfigOutputReference {
    return new BedrockGuardrailTopicPolicyConfigTierConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailTopicPolicyConfigTopicsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#definition BedrockGuardrail#definition}
  */
  readonly definition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#examples BedrockGuardrail#examples}
  */
  readonly examples?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
  */
  readonly type: string;
}

export function bedrockGuardrailTopicPolicyConfigTopicsConfigToTerraform(struct?: BedrockGuardrailTopicPolicyConfigTopicsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    examples: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.examples),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockGuardrailTopicPolicyConfigTopicsConfigToHclTerraform(struct?: BedrockGuardrailTopicPolicyConfigTopicsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktn.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    examples: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.examples),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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

export class BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailTopicPolicyConfigTopicsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._examples !== undefined) {
      hasAnyValues = true;
      internalValueResult.examples = this._examples;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailTopicPolicyConfigTopicsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._examples = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._examples = value.examples;
      this._name = value.name;
      this._type = value.type;
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

  // examples - computed: true, optional: true, required: false
  private _examples?: string[]; 
  public get examples() {
    return this.getListAttribute('examples');
  }
  public set examples(value: string[]) {
    this._examples = value;
  }
  public resetExamples() {
    this._examples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get examplesInput() {
    return this._examples;
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

export class BedrockGuardrailTopicPolicyConfigTopicsConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailTopicPolicyConfigTopicsConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference {
    return new BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailTopicPolicyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#tier_config BedrockGuardrail#tier_config}
  */
  readonly tierConfig?: BedrockGuardrailTopicPolicyConfigTierConfig[] | cdktn.IResolvable;
  /**
  * topics_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#topics_config BedrockGuardrail#topics_config}
  */
  readonly topicsConfig?: BedrockGuardrailTopicPolicyConfigTopicsConfig[] | cdktn.IResolvable;
}

export function bedrockGuardrailTopicPolicyConfigToTerraform(struct?: BedrockGuardrailTopicPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tier_config: cdktn.listMapper(bedrockGuardrailTopicPolicyConfigTierConfigToTerraform, false)(struct!.tierConfig),
    topics_config: cdktn.listMapper(bedrockGuardrailTopicPolicyConfigTopicsConfigToTerraform, true)(struct!.topicsConfig),
  }
}


export function bedrockGuardrailTopicPolicyConfigToHclTerraform(struct?: BedrockGuardrailTopicPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tier_config: {
      value: cdktn.listMapperHcl(bedrockGuardrailTopicPolicyConfigTierConfigToHclTerraform, false)(struct!.tierConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailTopicPolicyConfigTierConfigList",
    },
    topics_config: {
      value: cdktn.listMapperHcl(bedrockGuardrailTopicPolicyConfigTopicsConfigToHclTerraform, true)(struct!.topicsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailTopicPolicyConfigTopicsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailTopicPolicyConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailTopicPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tierConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierConfig = this._tierConfig?.internalValue;
    }
    if (this._topicsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicsConfig = this._topicsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailTopicPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tierConfig.internalValue = undefined;
      this._topicsConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tierConfig.internalValue = value.tierConfig;
      this._topicsConfig.internalValue = value.topicsConfig;
    }
  }

  // tier_config - computed: true, optional: true, required: false
  private _tierConfig = new BedrockGuardrailTopicPolicyConfigTierConfigList(this, "tier_config", false);
  public get tierConfig() {
    return this._tierConfig;
  }
  public putTierConfig(value: BedrockGuardrailTopicPolicyConfigTierConfig[] | cdktn.IResolvable) {
    this._tierConfig.internalValue = value;
  }
  public resetTierConfig() {
    this._tierConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierConfigInput() {
    return this._tierConfig.internalValue;
  }

  // topics_config - computed: false, optional: true, required: false
  private _topicsConfig = new BedrockGuardrailTopicPolicyConfigTopicsConfigList(this, "topics_config", false);
  public get topicsConfig() {
    return this._topicsConfig;
  }
  public putTopicsConfig(value: BedrockGuardrailTopicPolicyConfigTopicsConfig[] | cdktn.IResolvable) {
    this._topicsConfig.internalValue = value;
  }
  public resetTopicsConfig() {
    this._topicsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsConfigInput() {
    return this._topicsConfig.internalValue;
  }
}

export class BedrockGuardrailTopicPolicyConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailTopicPolicyConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockGuardrailTopicPolicyConfigOutputReference {
    return new BedrockGuardrailTopicPolicyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailWordPolicyConfigManagedWordListsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}
  */
  readonly inputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}
  */
  readonly inputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}
  */
  readonly outputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}
  */
  readonly outputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
  */
  readonly type: string;
}

export function bedrockGuardrailWordPolicyConfigManagedWordListsConfigToTerraform(struct?: BedrockGuardrailWordPolicyConfigManagedWordListsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_action: cdktn.stringToTerraform(struct!.inputAction),
    input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
    output_action: cdktn.stringToTerraform(struct!.outputAction),
    output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockGuardrailWordPolicyConfigManagedWordListsConfigToHclTerraform(struct?: BedrockGuardrailWordPolicyConfigManagedWordListsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_action: {
      value: cdktn.stringToHclTerraform(struct!.inputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_action: {
      value: cdktn.stringToHclTerraform(struct!.outputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailWordPolicyConfigManagedWordListsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAction = this._inputAction;
    }
    if (this._inputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputEnabled = this._inputEnabled;
    }
    if (this._outputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAction = this._outputAction;
    }
    if (this._outputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEnabled = this._outputEnabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailWordPolicyConfigManagedWordListsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputAction = undefined;
      this._inputEnabled = undefined;
      this._outputAction = undefined;
      this._outputEnabled = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputAction = value.inputAction;
      this._inputEnabled = value.inputEnabled;
      this._outputAction = value.outputAction;
      this._outputEnabled = value.outputEnabled;
      this._type = value.type;
    }
  }

  // input_action - computed: false, optional: true, required: false
  private _inputAction?: string; 
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }
  public set inputAction(value: string) {
    this._inputAction = value;
  }
  public resetInputAction() {
    this._inputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputActionInput() {
    return this._inputAction;
  }

  // input_enabled - computed: false, optional: true, required: false
  private _inputEnabled?: boolean | cdktn.IResolvable; 
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }
  public set inputEnabled(value: boolean | cdktn.IResolvable) {
    this._inputEnabled = value;
  }
  public resetInputEnabled() {
    this._inputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEnabledInput() {
    return this._inputEnabled;
  }

  // output_action - computed: false, optional: true, required: false
  private _outputAction?: string; 
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }
  public set outputAction(value: string) {
    this._outputAction = value;
  }
  public resetOutputAction() {
    this._outputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputActionInput() {
    return this._outputAction;
  }

  // output_enabled - computed: false, optional: true, required: false
  private _outputEnabled?: boolean | cdktn.IResolvable; 
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }
  public set outputEnabled(value: boolean | cdktn.IResolvable) {
    this._outputEnabled = value;
  }
  public resetOutputEnabled() {
    this._outputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEnabledInput() {
    return this._outputEnabled;
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

export class BedrockGuardrailWordPolicyConfigManagedWordListsConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailWordPolicyConfigManagedWordListsConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference {
    return new BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailWordPolicyConfigWordsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}
  */
  readonly inputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}
  */
  readonly inputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}
  */
  readonly outputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}
  */
  readonly outputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#text BedrockGuardrail#text}
  */
  readonly text: string;
}

export function bedrockGuardrailWordPolicyConfigWordsConfigToTerraform(struct?: BedrockGuardrailWordPolicyConfigWordsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_action: cdktn.stringToTerraform(struct!.inputAction),
    input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
    output_action: cdktn.stringToTerraform(struct!.outputAction),
    output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
    text: cdktn.stringToTerraform(struct!.text),
  }
}


export function bedrockGuardrailWordPolicyConfigWordsConfigToHclTerraform(struct?: BedrockGuardrailWordPolicyConfigWordsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_action: {
      value: cdktn.stringToHclTerraform(struct!.inputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_action: {
      value: cdktn.stringToHclTerraform(struct!.outputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailWordPolicyConfigWordsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailWordPolicyConfigWordsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAction = this._inputAction;
    }
    if (this._inputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputEnabled = this._inputEnabled;
    }
    if (this._outputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAction = this._outputAction;
    }
    if (this._outputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEnabled = this._outputEnabled;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailWordPolicyConfigWordsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputAction = undefined;
      this._inputEnabled = undefined;
      this._outputAction = undefined;
      this._outputEnabled = undefined;
      this._text = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputAction = value.inputAction;
      this._inputEnabled = value.inputEnabled;
      this._outputAction = value.outputAction;
      this._outputEnabled = value.outputEnabled;
      this._text = value.text;
    }
  }

  // input_action - computed: false, optional: true, required: false
  private _inputAction?: string; 
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }
  public set inputAction(value: string) {
    this._inputAction = value;
  }
  public resetInputAction() {
    this._inputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputActionInput() {
    return this._inputAction;
  }

  // input_enabled - computed: false, optional: true, required: false
  private _inputEnabled?: boolean | cdktn.IResolvable; 
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }
  public set inputEnabled(value: boolean | cdktn.IResolvable) {
    this._inputEnabled = value;
  }
  public resetInputEnabled() {
    this._inputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEnabledInput() {
    return this._inputEnabled;
  }

  // output_action - computed: false, optional: true, required: false
  private _outputAction?: string; 
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }
  public set outputAction(value: string) {
    this._outputAction = value;
  }
  public resetOutputAction() {
    this._outputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputActionInput() {
    return this._outputAction;
  }

  // output_enabled - computed: false, optional: true, required: false
  private _outputEnabled?: boolean | cdktn.IResolvable; 
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }
  public set outputEnabled(value: boolean | cdktn.IResolvable) {
    this._outputEnabled = value;
  }
  public resetOutputEnabled() {
    this._outputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEnabledInput() {
    return this._outputEnabled;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class BedrockGuardrailWordPolicyConfigWordsConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailWordPolicyConfigWordsConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockGuardrailWordPolicyConfigWordsConfigOutputReference {
    return new BedrockGuardrailWordPolicyConfigWordsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailWordPolicyConfig {
  /**
  * managed_word_lists_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#managed_word_lists_config BedrockGuardrail#managed_word_lists_config}
  */
  readonly managedWordListsConfig?: BedrockGuardrailWordPolicyConfigManagedWordListsConfig[] | cdktn.IResolvable;
  /**
  * words_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#words_config BedrockGuardrail#words_config}
  */
  readonly wordsConfig?: BedrockGuardrailWordPolicyConfigWordsConfig[] | cdktn.IResolvable;
}

export function bedrockGuardrailWordPolicyConfigToTerraform(struct?: BedrockGuardrailWordPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_word_lists_config: cdktn.listMapper(bedrockGuardrailWordPolicyConfigManagedWordListsConfigToTerraform, true)(struct!.managedWordListsConfig),
    words_config: cdktn.listMapper(bedrockGuardrailWordPolicyConfigWordsConfigToTerraform, true)(struct!.wordsConfig),
  }
}


export function bedrockGuardrailWordPolicyConfigToHclTerraform(struct?: BedrockGuardrailWordPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_word_lists_config: {
      value: cdktn.listMapperHcl(bedrockGuardrailWordPolicyConfigManagedWordListsConfigToHclTerraform, true)(struct!.managedWordListsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailWordPolicyConfigManagedWordListsConfigList",
    },
    words_config: {
      value: cdktn.listMapperHcl(bedrockGuardrailWordPolicyConfigWordsConfigToHclTerraform, true)(struct!.wordsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailWordPolicyConfigWordsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailWordPolicyConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailWordPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedWordListsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedWordListsConfig = this._managedWordListsConfig?.internalValue;
    }
    if (this._wordsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordsConfig = this._wordsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailWordPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managedWordListsConfig.internalValue = undefined;
      this._wordsConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managedWordListsConfig.internalValue = value.managedWordListsConfig;
      this._wordsConfig.internalValue = value.wordsConfig;
    }
  }

  // managed_word_lists_config - computed: false, optional: true, required: false
  private _managedWordListsConfig = new BedrockGuardrailWordPolicyConfigManagedWordListsConfigList(this, "managed_word_lists_config", false);
  public get managedWordListsConfig() {
    return this._managedWordListsConfig;
  }
  public putManagedWordListsConfig(value: BedrockGuardrailWordPolicyConfigManagedWordListsConfig[] | cdktn.IResolvable) {
    this._managedWordListsConfig.internalValue = value;
  }
  public resetManagedWordListsConfig() {
    this._managedWordListsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedWordListsConfigInput() {
    return this._managedWordListsConfig.internalValue;
  }

  // words_config - computed: false, optional: true, required: false
  private _wordsConfig = new BedrockGuardrailWordPolicyConfigWordsConfigList(this, "words_config", false);
  public get wordsConfig() {
    return this._wordsConfig;
  }
  public putWordsConfig(value: BedrockGuardrailWordPolicyConfigWordsConfig[] | cdktn.IResolvable) {
    this._wordsConfig.internalValue = value;
  }
  public resetWordsConfig() {
    this._wordsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsConfigInput() {
    return this._wordsConfig.internalValue;
  }
}

export class BedrockGuardrailWordPolicyConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailWordPolicyConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockGuardrailWordPolicyConfigOutputReference {
    return new BedrockGuardrailWordPolicyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail aws_bedrock_guardrail}
*/
export class BedrockGuardrail extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrock_guardrail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockGuardrail resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockGuardrail to import
  * @param importFromId The id of the existing BedrockGuardrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockGuardrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrock_guardrail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/bedrock_guardrail aws_bedrock_guardrail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockGuardrailConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockGuardrailConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrock_guardrail',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.35.0',
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
    this._blockedInputMessaging = config.blockedInputMessaging;
    this._blockedOutputsMessaging = config.blockedOutputsMessaging;
    this._description = config.description;
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._contentPolicyConfig.internalValue = config.contentPolicyConfig;
    this._contextualGroundingPolicyConfig.internalValue = config.contextualGroundingPolicyConfig;
    this._crossRegionConfig.internalValue = config.crossRegionConfig;
    this._sensitiveInformationPolicyConfig.internalValue = config.sensitiveInformationPolicyConfig;
    this._timeouts.internalValue = config.timeouts;
    this._topicPolicyConfig.internalValue = config.topicPolicyConfig;
    this._wordPolicyConfig.internalValue = config.wordPolicyConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked_input_messaging - computed: false, optional: false, required: true
  private _blockedInputMessaging?: string; 
  public get blockedInputMessaging() {
    return this.getStringAttribute('blocked_input_messaging');
  }
  public set blockedInputMessaging(value: string) {
    this._blockedInputMessaging = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInputMessagingInput() {
    return this._blockedInputMessaging;
  }

  // blocked_outputs_messaging - computed: false, optional: false, required: true
  private _blockedOutputsMessaging?: string; 
  public get blockedOutputsMessaging() {
    return this.getStringAttribute('blocked_outputs_messaging');
  }
  public set blockedOutputsMessaging(value: string) {
    this._blockedOutputsMessaging = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedOutputsMessagingInput() {
    return this._blockedOutputsMessaging;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
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

  // guardrail_arn - computed: true, optional: false, required: false
  public get guardrailArn() {
    return this.getStringAttribute('guardrail_arn');
  }

  // guardrail_id - computed: true, optional: false, required: false
  public get guardrailId() {
    return this.getStringAttribute('guardrail_id');
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // content_policy_config - computed: false, optional: true, required: false
  private _contentPolicyConfig = new BedrockGuardrailContentPolicyConfigList(this, "content_policy_config", false);
  public get contentPolicyConfig() {
    return this._contentPolicyConfig;
  }
  public putContentPolicyConfig(value: BedrockGuardrailContentPolicyConfig[] | cdktn.IResolvable) {
    this._contentPolicyConfig.internalValue = value;
  }
  public resetContentPolicyConfig() {
    this._contentPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentPolicyConfigInput() {
    return this._contentPolicyConfig.internalValue;
  }

  // contextual_grounding_policy_config - computed: false, optional: true, required: false
  private _contextualGroundingPolicyConfig = new BedrockGuardrailContextualGroundingPolicyConfigList(this, "contextual_grounding_policy_config", false);
  public get contextualGroundingPolicyConfig() {
    return this._contextualGroundingPolicyConfig;
  }
  public putContextualGroundingPolicyConfig(value: BedrockGuardrailContextualGroundingPolicyConfig[] | cdktn.IResolvable) {
    this._contextualGroundingPolicyConfig.internalValue = value;
  }
  public resetContextualGroundingPolicyConfig() {
    this._contextualGroundingPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextualGroundingPolicyConfigInput() {
    return this._contextualGroundingPolicyConfig.internalValue;
  }

  // cross_region_config - computed: false, optional: true, required: false
  private _crossRegionConfig = new BedrockGuardrailCrossRegionConfigList(this, "cross_region_config", false);
  public get crossRegionConfig() {
    return this._crossRegionConfig;
  }
  public putCrossRegionConfig(value: BedrockGuardrailCrossRegionConfig[] | cdktn.IResolvable) {
    this._crossRegionConfig.internalValue = value;
  }
  public resetCrossRegionConfig() {
    this._crossRegionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionConfigInput() {
    return this._crossRegionConfig.internalValue;
  }

  // sensitive_information_policy_config - computed: false, optional: true, required: false
  private _sensitiveInformationPolicyConfig = new BedrockGuardrailSensitiveInformationPolicyConfigList(this, "sensitive_information_policy_config", false);
  public get sensitiveInformationPolicyConfig() {
    return this._sensitiveInformationPolicyConfig;
  }
  public putSensitiveInformationPolicyConfig(value: BedrockGuardrailSensitiveInformationPolicyConfig[] | cdktn.IResolvable) {
    this._sensitiveInformationPolicyConfig.internalValue = value;
  }
  public resetSensitiveInformationPolicyConfig() {
    this._sensitiveInformationPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInformationPolicyConfigInput() {
    return this._sensitiveInformationPolicyConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockGuardrailTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockGuardrailTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // topic_policy_config - computed: false, optional: true, required: false
  private _topicPolicyConfig = new BedrockGuardrailTopicPolicyConfigList(this, "topic_policy_config", false);
  public get topicPolicyConfig() {
    return this._topicPolicyConfig;
  }
  public putTopicPolicyConfig(value: BedrockGuardrailTopicPolicyConfig[] | cdktn.IResolvable) {
    this._topicPolicyConfig.internalValue = value;
  }
  public resetTopicPolicyConfig() {
    this._topicPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicPolicyConfigInput() {
    return this._topicPolicyConfig.internalValue;
  }

  // word_policy_config - computed: false, optional: true, required: false
  private _wordPolicyConfig = new BedrockGuardrailWordPolicyConfigList(this, "word_policy_config", false);
  public get wordPolicyConfig() {
    return this._wordPolicyConfig;
  }
  public putWordPolicyConfig(value: BedrockGuardrailWordPolicyConfig[] | cdktn.IResolvable) {
    this._wordPolicyConfig.internalValue = value;
  }
  public resetWordPolicyConfig() {
    this._wordPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordPolicyConfigInput() {
    return this._wordPolicyConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocked_input_messaging: cdktn.stringToTerraform(this._blockedInputMessaging),
      blocked_outputs_messaging: cdktn.stringToTerraform(this._blockedOutputsMessaging),
      description: cdktn.stringToTerraform(this._description),
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      content_policy_config: cdktn.listMapper(bedrockGuardrailContentPolicyConfigToTerraform, true)(this._contentPolicyConfig.internalValue),
      contextual_grounding_policy_config: cdktn.listMapper(bedrockGuardrailContextualGroundingPolicyConfigToTerraform, true)(this._contextualGroundingPolicyConfig.internalValue),
      cross_region_config: cdktn.listMapper(bedrockGuardrailCrossRegionConfigToTerraform, true)(this._crossRegionConfig.internalValue),
      sensitive_information_policy_config: cdktn.listMapper(bedrockGuardrailSensitiveInformationPolicyConfigToTerraform, true)(this._sensitiveInformationPolicyConfig.internalValue),
      timeouts: bedrockGuardrailTimeoutsToTerraform(this._timeouts.internalValue),
      topic_policy_config: cdktn.listMapper(bedrockGuardrailTopicPolicyConfigToTerraform, true)(this._topicPolicyConfig.internalValue),
      word_policy_config: cdktn.listMapper(bedrockGuardrailWordPolicyConfigToTerraform, true)(this._wordPolicyConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blocked_input_messaging: {
        value: cdktn.stringToHclTerraform(this._blockedInputMessaging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocked_outputs_messaging: {
        value: cdktn.stringToHclTerraform(this._blockedOutputsMessaging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      content_policy_config: {
        value: cdktn.listMapperHcl(bedrockGuardrailContentPolicyConfigToHclTerraform, true)(this._contentPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockGuardrailContentPolicyConfigList",
      },
      contextual_grounding_policy_config: {
        value: cdktn.listMapperHcl(bedrockGuardrailContextualGroundingPolicyConfigToHclTerraform, true)(this._contextualGroundingPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockGuardrailContextualGroundingPolicyConfigList",
      },
      cross_region_config: {
        value: cdktn.listMapperHcl(bedrockGuardrailCrossRegionConfigToHclTerraform, true)(this._crossRegionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockGuardrailCrossRegionConfigList",
      },
      sensitive_information_policy_config: {
        value: cdktn.listMapperHcl(bedrockGuardrailSensitiveInformationPolicyConfigToHclTerraform, true)(this._sensitiveInformationPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockGuardrailSensitiveInformationPolicyConfigList",
      },
      timeouts: {
        value: bedrockGuardrailTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockGuardrailTimeouts",
      },
      topic_policy_config: {
        value: cdktn.listMapperHcl(bedrockGuardrailTopicPolicyConfigToHclTerraform, true)(this._topicPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockGuardrailTopicPolicyConfigList",
      },
      word_policy_config: {
        value: cdktn.listMapperHcl(bedrockGuardrailWordPolicyConfigToHclTerraform, true)(this._wordPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockGuardrailWordPolicyConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
