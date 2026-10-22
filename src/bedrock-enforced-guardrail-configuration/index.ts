/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/bedrock_enforced_guardrail_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockEnforcedGuardrailConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_arn BedrockEnforcedGuardrailConfiguration#guardrail_arn}
  */
  readonly guardrailArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_version BedrockEnforcedGuardrailConfiguration#guardrail_version}
  */
  readonly guardrailVersion: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/bedrock_enforced_guardrail_configuration#region BedrockEnforcedGuardrailConfiguration#region}
  */
  readonly region?: string;
  /**
  * model_enforcement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/bedrock_enforced_guardrail_configuration#model_enforcement BedrockEnforcedGuardrailConfiguration#model_enforcement}
  */
  readonly modelEnforcement?: BedrockEnforcedGuardrailConfigurationModelEnforcement[] | cdktn.IResolvable;
  /**
  * selective_content_guarding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/bedrock_enforced_guardrail_configuration#selective_content_guarding BedrockEnforcedGuardrailConfiguration#selective_content_guarding}
  */
  readonly selectiveContentGuarding?: BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding[] | cdktn.IResolvable;
}
export interface BedrockEnforcedGuardrailConfigurationModelEnforcement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/bedrock_enforced_guardrail_configuration#excluded_models BedrockEnforcedGuardrailConfiguration#excluded_models}
  */
  readonly excludedModels: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/bedrock_enforced_guardrail_configuration#included_models BedrockEnforcedGuardrailConfiguration#included_models}
  */
  readonly includedModels: string[];
}

export function bedrockEnforcedGuardrailConfigurationModelEnforcementToTerraform(struct?: BedrockEnforcedGuardrailConfigurationModelEnforcement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excluded_models: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedModels),
    included_models: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedModels),
  }
}


export function bedrockEnforcedGuardrailConfigurationModelEnforcementToHclTerraform(struct?: BedrockEnforcedGuardrailConfigurationModelEnforcement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excluded_models: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedModels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_models: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedModels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEnforcedGuardrailConfigurationModelEnforcement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedModels !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedModels = this._excludedModels;
    }
    if (this._includedModels !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedModels = this._includedModels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEnforcedGuardrailConfigurationModelEnforcement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedModels = undefined;
      this._includedModels = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedModels = value.excludedModels;
      this._includedModels = value.includedModels;
    }
  }

  // excluded_models - computed: false, optional: false, required: true
  private _excludedModels?: string[]; 
  public get excludedModels() {
    return this.getListAttribute('excluded_models');
  }
  public set excludedModels(value: string[]) {
    this._excludedModels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedModelsInput() {
    return this._excludedModels;
  }

  // included_models - computed: false, optional: false, required: true
  private _includedModels?: string[]; 
  public get includedModels() {
    return this.getListAttribute('included_models');
  }
  public set includedModels(value: string[]) {
    this._includedModels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includedModelsInput() {
    return this._includedModels;
  }
}

export class BedrockEnforcedGuardrailConfigurationModelEnforcementList extends cdktn.ComplexList {
  public internalValue? : BedrockEnforcedGuardrailConfigurationModelEnforcement[] | cdktn.IResolvable

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
  public get(index: number): BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference {
    return new BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/bedrock_enforced_guardrail_configuration#messages BedrockEnforcedGuardrailConfiguration#messages}
  */
  readonly messages?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/bedrock_enforced_guardrail_configuration#system BedrockEnforcedGuardrailConfiguration#system}
  */
  readonly systemAttribute?: string;
}

export function bedrockEnforcedGuardrailConfigurationSelectiveContentGuardingToTerraform(struct?: BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    messages: cdktn.stringToTerraform(struct!.messages),
    system: cdktn.stringToTerraform(struct!.systemAttribute),
  }
}


export function bedrockEnforcedGuardrailConfigurationSelectiveContentGuardingToHclTerraform(struct?: BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    messages: {
      value: cdktn.stringToHclTerraform(struct!.messages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system: {
      value: cdktn.stringToHclTerraform(struct!.systemAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messages !== undefined) {
      hasAnyValues = true;
      internalValueResult.messages = this._messages;
    }
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messages = undefined;
      this._system = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messages = value.messages;
      this._system = value.systemAttribute;
    }
  }

  // messages - computed: false, optional: true, required: false
  private _messages?: string; 
  public get messages() {
    return this.getStringAttribute('messages');
  }
  public set messages(value: string) {
    this._messages = value;
  }
  public resetMessages() {
    this._messages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages;
  }

  // system - computed: false, optional: true, required: false
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }
}

export class BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList extends cdktn.ComplexList {
  public internalValue? : BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding[] | cdktn.IResolvable

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
  public get(index: number): BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference {
    return new BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/bedrock_enforced_guardrail_configuration aws_bedrock_enforced_guardrail_configuration}
*/
export class BedrockEnforcedGuardrailConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrock_enforced_guardrail_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockEnforcedGuardrailConfiguration to import
  * @param importFromId The id of the existing BedrockEnforcedGuardrailConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/bedrock_enforced_guardrail_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockEnforcedGuardrailConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrock_enforced_guardrail_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/bedrock_enforced_guardrail_configuration aws_bedrock_enforced_guardrail_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockEnforcedGuardrailConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockEnforcedGuardrailConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrock_enforced_guardrail_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.70.0',
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
    this._guardrailArn = config.guardrailArn;
    this._guardrailVersion = config.guardrailVersion;
    this._region = config.region;
    this._modelEnforcement.internalValue = config.modelEnforcement;
    this._selectiveContentGuarding.internalValue = config.selectiveContentGuarding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // guardrail_arn - computed: false, optional: false, required: true
  private _guardrailArn?: string; 
  public get guardrailArn() {
    return this.getStringAttribute('guardrail_arn');
  }
  public set guardrailArn(value: string) {
    this._guardrailArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailArnInput() {
    return this._guardrailArn;
  }

  // guardrail_id - computed: true, optional: false, required: false
  public get guardrailId() {
    return this.getStringAttribute('guardrail_id');
  }

  // guardrail_version - computed: false, optional: false, required: true
  private _guardrailVersion?: string; 
  public get guardrailVersion() {
    return this.getStringAttribute('guardrail_version');
  }
  public set guardrailVersion(value: string) {
    this._guardrailVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailVersionInput() {
    return this._guardrailVersion;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
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

  // model_enforcement - computed: false, optional: true, required: false
  private _modelEnforcement = new BedrockEnforcedGuardrailConfigurationModelEnforcementList(this, "model_enforcement", false);
  public get modelEnforcement() {
    return this._modelEnforcement;
  }
  public putModelEnforcement(value: BedrockEnforcedGuardrailConfigurationModelEnforcement[] | cdktn.IResolvable) {
    this._modelEnforcement.internalValue = value;
  }
  public resetModelEnforcement() {
    this._modelEnforcement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelEnforcementInput() {
    return this._modelEnforcement.internalValue;
  }

  // selective_content_guarding - computed: false, optional: true, required: false
  private _selectiveContentGuarding = new BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList(this, "selective_content_guarding", false);
  public get selectiveContentGuarding() {
    return this._selectiveContentGuarding;
  }
  public putSelectiveContentGuarding(value: BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding[] | cdktn.IResolvable) {
    this._selectiveContentGuarding.internalValue = value;
  }
  public resetSelectiveContentGuarding() {
    this._selectiveContentGuarding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectiveContentGuardingInput() {
    return this._selectiveContentGuarding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      guardrail_arn: cdktn.stringToTerraform(this._guardrailArn),
      guardrail_version: cdktn.stringToTerraform(this._guardrailVersion),
      region: cdktn.stringToTerraform(this._region),
      model_enforcement: cdktn.listMapper(bedrockEnforcedGuardrailConfigurationModelEnforcementToTerraform, true)(this._modelEnforcement.internalValue),
      selective_content_guarding: cdktn.listMapper(bedrockEnforcedGuardrailConfigurationSelectiveContentGuardingToTerraform, true)(this._selectiveContentGuarding.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      guardrail_arn: {
        value: cdktn.stringToHclTerraform(this._guardrailArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guardrail_version: {
        value: cdktn.stringToHclTerraform(this._guardrailVersion),
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
      model_enforcement: {
        value: cdktn.listMapperHcl(bedrockEnforcedGuardrailConfigurationModelEnforcementToHclTerraform, true)(this._modelEnforcement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockEnforcedGuardrailConfigurationModelEnforcementList",
      },
      selective_content_guarding: {
        value: cdktn.listMapperHcl(bedrockEnforcedGuardrailConfigurationSelectiveContentGuardingToHclTerraform, true)(this._selectiveContentGuarding.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
