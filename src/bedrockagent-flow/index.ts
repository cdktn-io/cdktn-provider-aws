/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentFlowConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#customer_encryption_key_arn BedrockagentFlow#customer_encryption_key_arn}
  */
  readonly customerEncryptionKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#description BedrockagentFlow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#execution_role_arn BedrockagentFlow#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#name BedrockagentFlow#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#region BedrockagentFlow#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#tags BedrockagentFlow#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#definition BedrockagentFlow#definition}
  */
  readonly definition?: BedrockagentFlowDefinition[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#timeouts BedrockagentFlow#timeouts}
  */
  readonly timeouts?: BedrockagentFlowTimeouts;
}
export interface BedrockagentFlowDefinitionConnectionConfigurationConditional {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#condition BedrockagentFlow#condition}
  */
  readonly condition: string;
}

export function bedrockagentFlowDefinitionConnectionConfigurationConditionalToTerraform(struct?: BedrockagentFlowDefinitionConnectionConfigurationConditional | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: cdktn.stringToTerraform(struct!.condition),
  }
}


export function bedrockagentFlowDefinitionConnectionConfigurationConditionalToHclTerraform(struct?: BedrockagentFlowDefinitionConnectionConfigurationConditional | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionConnectionConfigurationConditionalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionConnectionConfigurationConditional | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionConnectionConfigurationConditional | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }
}

export class BedrockagentFlowDefinitionConnectionConfigurationConditionalList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionConnectionConfigurationConditional[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionConnectionConfigurationConditionalOutputReference {
    return new BedrockagentFlowDefinitionConnectionConfigurationConditionalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionConnectionConfigurationData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#source_output BedrockagentFlow#source_output}
  */
  readonly sourceOutput: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#target_input BedrockagentFlow#target_input}
  */
  readonly targetInput: string;
}

export function bedrockagentFlowDefinitionConnectionConfigurationDataToTerraform(struct?: BedrockagentFlowDefinitionConnectionConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_output: cdktn.stringToTerraform(struct!.sourceOutput),
    target_input: cdktn.stringToTerraform(struct!.targetInput),
  }
}


export function bedrockagentFlowDefinitionConnectionConfigurationDataToHclTerraform(struct?: BedrockagentFlowDefinitionConnectionConfigurationData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_output: {
      value: cdktn.stringToHclTerraform(struct!.sourceOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_input: {
      value: cdktn.stringToHclTerraform(struct!.targetInput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionConnectionConfigurationDataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionConnectionConfigurationData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceOutput = this._sourceOutput;
    }
    if (this._targetInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetInput = this._targetInput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionConnectionConfigurationData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceOutput = undefined;
      this._targetInput = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceOutput = value.sourceOutput;
      this._targetInput = value.targetInput;
    }
  }

  // source_output - computed: false, optional: false, required: true
  private _sourceOutput?: string; 
  public get sourceOutput() {
    return this.getStringAttribute('source_output');
  }
  public set sourceOutput(value: string) {
    this._sourceOutput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceOutputInput() {
    return this._sourceOutput;
  }

  // target_input - computed: false, optional: false, required: true
  private _targetInput?: string; 
  public get targetInput() {
    return this.getStringAttribute('target_input');
  }
  public set targetInput(value: string) {
    this._targetInput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInputInput() {
    return this._targetInput;
  }
}

export class BedrockagentFlowDefinitionConnectionConfigurationDataList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionConnectionConfigurationData[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionConnectionConfigurationDataOutputReference {
    return new BedrockagentFlowDefinitionConnectionConfigurationDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionConnectionConfiguration {
  /**
  * conditional block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#conditional BedrockagentFlow#conditional}
  */
  readonly conditional?: BedrockagentFlowDefinitionConnectionConfigurationConditional[] | cdktn.IResolvable;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#data BedrockagentFlow#data}
  */
  readonly data?: BedrockagentFlowDefinitionConnectionConfigurationData[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionConnectionConfigurationToTerraform(struct?: BedrockagentFlowDefinitionConnectionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conditional: cdktn.listMapper(bedrockagentFlowDefinitionConnectionConfigurationConditionalToTerraform, true)(struct!.conditional),
    data: cdktn.listMapper(bedrockagentFlowDefinitionConnectionConfigurationDataToTerraform, true)(struct!.data),
  }
}


export function bedrockagentFlowDefinitionConnectionConfigurationToHclTerraform(struct?: BedrockagentFlowDefinitionConnectionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    conditional: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionConnectionConfigurationConditionalToHclTerraform, true)(struct!.conditional),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionConnectionConfigurationConditionalList",
    },
    data: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionConnectionConfigurationDataToHclTerraform, true)(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionConnectionConfigurationDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionConnectionConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionConnectionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditional?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditional = this._conditional?.internalValue;
    }
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionConnectionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditional.internalValue = undefined;
      this._data.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditional.internalValue = value.conditional;
      this._data.internalValue = value.data;
    }
  }

  // conditional - computed: false, optional: true, required: false
  private _conditional = new BedrockagentFlowDefinitionConnectionConfigurationConditionalList(this, "conditional", false);
  public get conditional() {
    return this._conditional;
  }
  public putConditional(value: BedrockagentFlowDefinitionConnectionConfigurationConditional[] | cdktn.IResolvable) {
    this._conditional.internalValue = value;
  }
  public resetConditional() {
    this._conditional.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalInput() {
    return this._conditional.internalValue;
  }

  // data - computed: false, optional: true, required: false
  private _data = new BedrockagentFlowDefinitionConnectionConfigurationDataList(this, "data", false);
  public get data() {
    return this._data;
  }
  public putData(value: BedrockagentFlowDefinitionConnectionConfigurationData[] | cdktn.IResolvable) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}

export class BedrockagentFlowDefinitionConnectionConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionConnectionConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionConnectionConfigurationOutputReference {
    return new BedrockagentFlowDefinitionConnectionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#name BedrockagentFlow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#source BedrockagentFlow#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#target BedrockagentFlow#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#type BedrockagentFlow#type}
  */
  readonly type: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#configuration BedrockagentFlow#configuration}
  */
  readonly configuration?: BedrockagentFlowDefinitionConnectionConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionConnectionToTerraform(struct?: BedrockagentFlowDefinitionConnection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    source: cdktn.stringToTerraform(struct!.source),
    target: cdktn.stringToTerraform(struct!.target),
    type: cdktn.stringToTerraform(struct!.type),
    configuration: cdktn.listMapper(bedrockagentFlowDefinitionConnectionConfigurationToTerraform, true)(struct!.configuration),
  }
}


export function bedrockagentFlowDefinitionConnectionToHclTerraform(struct?: BedrockagentFlowDefinitionConnection | cdktn.IResolvable): any {
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
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
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
    configuration: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionConnectionConfigurationToHclTerraform, true)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionConnectionConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionConnectionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionConnection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionConnection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._source = undefined;
      this._target = undefined;
      this._type = undefined;
      this._configuration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._source = value.source;
      this._target = value.target;
      this._type = value.type;
      this._configuration.internalValue = value.configuration;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new BedrockagentFlowDefinitionConnectionConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: BedrockagentFlowDefinitionConnectionConfiguration[] | cdktn.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}

export class BedrockagentFlowDefinitionConnectionList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionConnection[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionConnectionOutputReference {
    return new BedrockagentFlowDefinitionConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationAgent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#agent_alias_arn BedrockagentFlow#agent_alias_arn}
  */
  readonly agentAliasArn: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationAgentToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationAgent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_alias_arn: cdktn.stringToTerraform(struct!.agentAliasArn),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationAgentToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationAgent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_alias_arn: {
      value: cdktn.stringToHclTerraform(struct!.agentAliasArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationAgentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationAgent | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentAliasArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentAliasArn = this._agentAliasArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationAgent | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentAliasArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentAliasArn = value.agentAliasArn;
    }
  }

  // agent_alias_arn - computed: false, optional: false, required: true
  private _agentAliasArn?: string; 
  public get agentAliasArn() {
    return this.getStringAttribute('agent_alias_arn');
  }
  public set agentAliasArn(value: string) {
    this._agentAliasArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentAliasArnInput() {
    return this._agentAliasArn;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationAgentList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationAgent[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationAgentOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationCollector {
}

export function bedrockagentFlowDefinitionNodeConfigurationCollectorToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationCollector | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationCollectorToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationCollector | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentFlowDefinitionNodeConfigurationCollectorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationCollector | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationCollector | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationCollectorList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationCollector[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationCollectorOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationCollectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationConditionCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#expression BedrockagentFlow#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#name BedrockagentFlow#name}
  */
  readonly name: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationConditionConditionToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationConditionCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationConditionConditionToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationConditionCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationConditionConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationConditionCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationConditionCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._name = value.name;
    }
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

export class BedrockagentFlowDefinitionNodeConfigurationConditionConditionList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationConditionCondition[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationConditionConditionOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationConditionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationCondition {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#condition BedrockagentFlow#condition}
  */
  readonly condition?: BedrockagentFlowDefinitionNodeConfigurationConditionCondition[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationConditionToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationConditionConditionToTerraform, true)(struct!.condition),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationConditionToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationConditionConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationConditionConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new BedrockagentFlowDefinitionNodeConfigurationConditionConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: BedrockagentFlowDefinitionNodeConfigurationConditionCondition[] | cdktn.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationConditionList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationCondition[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationConditionOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationInlineCode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#code BedrockagentFlow#code}
  */
  readonly code: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#language BedrockagentFlow#language}
  */
  readonly language: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationInlineCodeToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationInlineCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code: cdktn.stringToTerraform(struct!.code),
    language: cdktn.stringToTerraform(struct!.language),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationInlineCodeToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationInlineCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code: {
      value: cdktn.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language: {
      value: cdktn.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationInlineCodeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationInlineCode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationInlineCode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._language = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._language = value.language;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationInlineCodeList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationInlineCode[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationInlineCodeOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationInlineCodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationInput {
}

export function bedrockagentFlowDefinitionNodeConfigurationInputToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationInputToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentFlowDefinitionNodeConfigurationInputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationInputList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationInput[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationInputOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationIterator {
}

export function bedrockagentFlowDefinitionNodeConfigurationIteratorToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationIterator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationIteratorToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationIterator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentFlowDefinitionNodeConfigurationIteratorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationIterator | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationIterator | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationIteratorList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationIterator[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationIteratorOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationIteratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#guardrail_identifier BedrockagentFlow#guardrail_identifier}
  */
  readonly guardrailIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#guardrail_version BedrockagentFlow#guardrail_version}
  */
  readonly guardrailVersion: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfigurationToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    guardrail_identifier: cdktn.stringToTerraform(struct!.guardrailIdentifier),
    guardrail_version: cdktn.stringToTerraform(struct!.guardrailVersion),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfigurationToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    guardrail_identifier: {
      value: cdktn.stringToHclTerraform(struct!.guardrailIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guardrail_version: {
      value: cdktn.stringToHclTerraform(struct!.guardrailVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guardrailIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardrailIdentifier = this._guardrailIdentifier;
    }
    if (this._guardrailVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardrailVersion = this._guardrailVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guardrailIdentifier = undefined;
      this._guardrailVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guardrailIdentifier = value.guardrailIdentifier;
      this._guardrailVersion = value.guardrailVersion;
    }
  }

  // guardrail_identifier - computed: false, optional: false, required: true
  private _guardrailIdentifier?: string; 
  public get guardrailIdentifier() {
    return this.getStringAttribute('guardrail_identifier');
  }
  public set guardrailIdentifier(value: string) {
    this._guardrailIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailIdentifierInput() {
    return this._guardrailIdentifier;
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
}

export class BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfigurationOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#max_tokens BedrockagentFlow#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#stop_sequences BedrockagentFlow#stop_sequences}
  */
  readonly stopSequences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#temperature BedrockagentFlow#temperature}
  */
  readonly temperature?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#top_p BedrockagentFlow#top_p}
  */
  readonly topP?: number;
}

export function bedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationTextToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationText | cdktn.IResolvable): any {
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


export function bedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationTextToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationText | cdktn.IResolvable): any {
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

export class BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationTextOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationText | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationText | cdktn.IResolvable | undefined) {
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

export class BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationTextList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationText[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationTextOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfiguration {
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#text BedrockagentFlow#text}
  */
  readonly text?: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationText[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationTextToTerraform, true)(struct!.text),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationTextToHclTerraform, true)(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text.internalValue = value.text;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text = new BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationTextList(this, "text", false);
  public get text() {
    return this._text;
  }
  public putText(value: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationText[] | cdktn.IResolvable) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationKnowledgeBase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#knowledge_base_id BedrockagentFlow#knowledge_base_id}
  */
  readonly knowledgeBaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#model_id BedrockagentFlow#model_id}
  */
  readonly modelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#number_of_results BedrockagentFlow#number_of_results}
  */
  readonly numberOfResults?: number;
  /**
  * guardrail_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#guardrail_configuration BedrockagentFlow#guardrail_configuration}
  */
  readonly guardrailConfiguration?: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfiguration[] | cdktn.IResolvable;
  /**
  * inference_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#inference_configuration BedrockagentFlow#inference_configuration}
  */
  readonly inferenceConfiguration?: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    knowledge_base_id: cdktn.stringToTerraform(struct!.knowledgeBaseId),
    model_id: cdktn.stringToTerraform(struct!.modelId),
    number_of_results: cdktn.numberToTerraform(struct!.numberOfResults),
    guardrail_configuration: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfigurationToTerraform, true)(struct!.guardrailConfiguration),
    inference_configuration: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationToTerraform, true)(struct!.inferenceConfiguration),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBase | cdktn.IResolvable): any {
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
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_results: {
      value: cdktn.numberToHclTerraform(struct!.numberOfResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    guardrail_configuration: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfigurationToHclTerraform, true)(struct!.guardrailConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfigurationList",
    },
    inference_configuration: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationToHclTerraform, true)(struct!.inferenceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationKnowledgeBase | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knowledgeBaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseId = this._knowledgeBaseId;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._numberOfResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfResults = this._numberOfResults;
    }
    if (this._guardrailConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardrailConfiguration = this._guardrailConfiguration?.internalValue;
    }
    if (this._inferenceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceConfiguration = this._inferenceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBase | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knowledgeBaseId = undefined;
      this._modelId = undefined;
      this._numberOfResults = undefined;
      this._guardrailConfiguration.internalValue = undefined;
      this._inferenceConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knowledgeBaseId = value.knowledgeBaseId;
      this._modelId = value.modelId;
      this._numberOfResults = value.numberOfResults;
      this._guardrailConfiguration.internalValue = value.guardrailConfiguration;
      this._inferenceConfiguration.internalValue = value.inferenceConfiguration;
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

  // guardrail_configuration - computed: false, optional: true, required: false
  private _guardrailConfiguration = new BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfigurationList(this, "guardrail_configuration", false);
  public get guardrailConfiguration() {
    return this._guardrailConfiguration;
  }
  public putGuardrailConfiguration(value: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseGuardrailConfiguration[] | cdktn.IResolvable) {
    this._guardrailConfiguration.internalValue = value;
  }
  public resetGuardrailConfiguration() {
    this._guardrailConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailConfigurationInput() {
    return this._guardrailConfiguration.internalValue;
  }

  // inference_configuration - computed: false, optional: true, required: false
  private _inferenceConfiguration = new BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfigurationList(this, "inference_configuration", false);
  public get inferenceConfiguration() {
    return this._inferenceConfiguration;
  }
  public putInferenceConfiguration(value: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseInferenceConfiguration[] | cdktn.IResolvable) {
    this._inferenceConfiguration.internalValue = value;
  }
  public resetInferenceConfiguration() {
    this._inferenceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceConfigurationInput() {
    return this._inferenceConfiguration.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationKnowledgeBase[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationLambdaFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#lambda_arn BedrockagentFlow#lambda_arn}
  */
  readonly lambdaArn: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationLambdaFunctionToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationLambdaFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationLambdaFunctionToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationLambdaFunction | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationLambdaFunctionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationLambdaFunction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationLambdaFunction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambdaArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambdaArn = value.lambdaArn;
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
}

export class BedrockagentFlowDefinitionNodeConfigurationLambdaFunctionList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationLambdaFunction[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationLambdaFunctionOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationLambdaFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationLex {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#bot_alias_arn BedrockagentFlow#bot_alias_arn}
  */
  readonly botAliasArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#locale_id BedrockagentFlow#locale_id}
  */
  readonly localeId: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationLexToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationLex | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bot_alias_arn: cdktn.stringToTerraform(struct!.botAliasArn),
    locale_id: cdktn.stringToTerraform(struct!.localeId),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationLexToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationLex | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bot_alias_arn: {
      value: cdktn.stringToHclTerraform(struct!.botAliasArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locale_id: {
      value: cdktn.stringToHclTerraform(struct!.localeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationLexOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationLex | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botAliasArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.botAliasArn = this._botAliasArn;
    }
    if (this._localeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localeId = this._localeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationLex | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._botAliasArn = undefined;
      this._localeId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._botAliasArn = value.botAliasArn;
      this._localeId = value.localeId;
    }
  }

  // bot_alias_arn - computed: false, optional: false, required: true
  private _botAliasArn?: string; 
  public get botAliasArn() {
    return this.getStringAttribute('bot_alias_arn');
  }
  public set botAliasArn(value: string) {
    this._botAliasArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botAliasArnInput() {
    return this._botAliasArn;
  }

  // locale_id - computed: false, optional: false, required: true
  private _localeId?: string; 
  public get localeId() {
    return this.getStringAttribute('locale_id');
  }
  public set localeId(value: string) {
    this._localeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localeIdInput() {
    return this._localeId;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationLexList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationLex[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationLexOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationLexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationOutput {
}

export function bedrockagentFlowDefinitionNodeConfigurationOutputToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationOutputToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentFlowDefinitionNodeConfigurationOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationOutput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationOutput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationOutputList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationOutput[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationOutputOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#guardrail_identifier BedrockagentFlow#guardrail_identifier}
  */
  readonly guardrailIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#guardrail_version BedrockagentFlow#guardrail_version}
  */
  readonly guardrailVersion: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfigurationToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    guardrail_identifier: cdktn.stringToTerraform(struct!.guardrailIdentifier),
    guardrail_version: cdktn.stringToTerraform(struct!.guardrailVersion),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfigurationToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    guardrail_identifier: {
      value: cdktn.stringToHclTerraform(struct!.guardrailIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guardrail_version: {
      value: cdktn.stringToHclTerraform(struct!.guardrailVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guardrailIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardrailIdentifier = this._guardrailIdentifier;
    }
    if (this._guardrailVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardrailVersion = this._guardrailVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guardrailIdentifier = undefined;
      this._guardrailVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guardrailIdentifier = value.guardrailIdentifier;
      this._guardrailVersion = value.guardrailVersion;
    }
  }

  // guardrail_identifier - computed: false, optional: false, required: true
  private _guardrailIdentifier?: string; 
  public get guardrailIdentifier() {
    return this.getStringAttribute('guardrail_identifier');
  }
  public set guardrailIdentifier(value: string) {
    this._guardrailIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailIdentifierInput() {
    return this._guardrailIdentifier;
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
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfigurationOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#max_tokens BedrockagentFlow#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#stop_sequences BedrockagentFlow#stop_sequences}
  */
  readonly stopSequences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#temperature BedrockagentFlow#temperature}
  */
  readonly temperature?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#top_p BedrockagentFlow#top_p}
  */
  readonly topP?: number;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationText | cdktn.IResolvable): any {
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


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationText | cdktn.IResolvable): any {
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

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationText | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationText | cdktn.IResolvable | undefined) {
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

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationText[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfiguration {
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#text BedrockagentFlow#text}
  */
  readonly text?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationText[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextToTerraform, true)(struct!.text),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextToHclTerraform, true)(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text.internalValue = value.text;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextList(this, "text", false);
  public get text() {
    return this._text;
  }
  public putText(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationText[] | cdktn.IResolvable) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#name BedrockagentFlow#name}
  */
  readonly name: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariableToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariableToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariable | cdktn.IResolvable): any {
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

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariable | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariable | cdktn.IResolvable | undefined) {
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

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariableList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariable[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariableOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#type BedrockagentFlow#type}
  */
  readonly type: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePointToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePointToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePointOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePointList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePoint[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePointOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#text BedrockagentFlow#text}
  */
  readonly text?: string;
  /**
  * cache_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#cache_point BedrockagentFlow#cache_point}
  */
  readonly cachePoint?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePoint[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    cache_point: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePointToTerraform, true)(struct!.cachePoint),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_point: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePointToHclTerraform, true)(struct!.cachePoint),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContent | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._cachePoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePoint = this._cachePoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContent | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._cachePoint.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._cachePoint.internalValue = value.cachePoint;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // cache_point - computed: false, optional: true, required: false
  private _cachePoint = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePointList(this, "cache_point", false);
  public get cachePoint() {
    return this._cachePoint;
  }
  public putCachePoint(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentCachePoint[] | cdktn.IResolvable) {
    this._cachePoint.internalValue = value;
  }
  public resetCachePoint() {
    this._cachePoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePointInput() {
    return this._cachePoint.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContent[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#role BedrockagentFlow#role}
  */
  readonly role: string;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#content BedrockagentFlow#content}
  */
  readonly content?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContent[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role: cdktn.stringToTerraform(struct!.role),
    content: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentToTerraform, true)(struct!.content),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentToHclTerraform, true)(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
      this._content.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
      this._content.internalValue = value.content;
    }
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // content - computed: false, optional: true, required: false
  private _content = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContentList(this, "content", false);
  public get content() {
    return this._content;
  }
  public putContent(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageContent[] | cdktn.IResolvable) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessage[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#type BedrockagentFlow#type}
  */
  readonly type: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePointToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePointToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePointOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePointList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePoint[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePointOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#text BedrockagentFlow#text}
  */
  readonly text?: string;
  /**
  * cache_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#cache_point BedrockagentFlow#cache_point}
  */
  readonly cachePoint?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePoint[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystem | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    cache_point: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePointToTerraform, true)(struct!.cachePoint),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystem | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_point: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePointToHclTerraform, true)(struct!.cachePoint),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystem | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._cachePoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePoint = this._cachePoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystem | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._cachePoint.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._cachePoint.internalValue = value.cachePoint;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // cache_point - computed: false, optional: true, required: false
  private _cachePoint = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePointList(this, "cache_point", false);
  public get cachePoint() {
    return this._cachePoint;
  }
  public putCachePoint(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemCachePoint[] | cdktn.IResolvable) {
    this._cachePoint.internalValue = value;
  }
  public resetCachePoint() {
    this._cachePoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePointInput() {
    return this._cachePoint.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystem[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#type BedrockagentFlow#type}
  */
  readonly type: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePointToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePointToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePointOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePointList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePoint[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePointOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#json BedrockagentFlow#json}
  */
  readonly json?: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json: cdktn.stringToTerraform(struct!.json),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json: {
      value: cdktn.stringToHclTerraform(struct!.json),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._json = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._json = value.json;
    }
  }

  // json - computed: false, optional: true, required: false
  private _json?: string; 
  public get json() {
    return this.getStringAttribute('json');
  }
  public set json(value: string) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#description BedrockagentFlow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#name BedrockagentFlow#name}
  */
  readonly name: string;
  /**
  * input_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#input_schema BedrockagentFlow#input_schema}
  */
  readonly inputSchema?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    input_schema: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaToTerraform, true)(struct!.inputSchema),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpec | cdktn.IResolvable): any {
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
    input_schema: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaToHclTerraform, true)(struct!.inputSchema),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpec | cdktn.IResolvable | undefined {
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
    if (this._inputSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSchema = this._inputSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._inputSchema.internalValue = undefined;
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
      this._inputSchema.internalValue = value.inputSchema;
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

  // input_schema - computed: false, optional: true, required: false
  private _inputSchema = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList(this, "input_schema", false);
  public get inputSchema() {
    return this._inputSchema;
  }
  public putInputSchema(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema[] | cdktn.IResolvable) {
    this._inputSchema.internalValue = value;
  }
  public resetInputSchema() {
    this._inputSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpec[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationTool {
  /**
  * cache_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#cache_point BedrockagentFlow#cache_point}
  */
  readonly cachePoint?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePoint[] | cdktn.IResolvable;
  /**
  * tool_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#tool_spec BedrockagentFlow#tool_spec}
  */
  readonly toolSpec?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpec[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationTool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cache_point: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePointToTerraform, true)(struct!.cachePoint),
    tool_spec: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecToTerraform, true)(struct!.toolSpec),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationTool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cache_point: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePointToHclTerraform, true)(struct!.cachePoint),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePointList",
    },
    tool_spec: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecToHclTerraform, true)(struct!.toolSpec),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationTool | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachePoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePoint = this._cachePoint?.internalValue;
    }
    if (this._toolSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolSpec = this._toolSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationTool | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachePoint.internalValue = undefined;
      this._toolSpec.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachePoint.internalValue = value.cachePoint;
      this._toolSpec.internalValue = value.toolSpec;
    }
  }

  // cache_point - computed: false, optional: true, required: false
  private _cachePoint = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePointList(this, "cache_point", false);
  public get cachePoint() {
    return this._cachePoint;
  }
  public putCachePoint(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolCachePoint[] | cdktn.IResolvable) {
    this._cachePoint.internalValue = value;
  }
  public resetCachePoint() {
    this._cachePoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePointInput() {
    return this._cachePoint.internalValue;
  }

  // tool_spec - computed: false, optional: true, required: false
  private _toolSpec = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpecList(this, "tool_spec", false);
  public get toolSpec() {
    return this._toolSpec;
  }
  public putToolSpec(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToolSpec[] | cdktn.IResolvable) {
    this._toolSpec.internalValue = value;
  }
  public resetToolSpec() {
    this._toolSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolSpecInput() {
    return this._toolSpec.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationTool[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAny {
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAnyToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAny | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAnyToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAny | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAny | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAny | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAnyList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAny[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAuto {
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAutoToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAuto | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAutoToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAuto | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAuto | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAuto | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAutoList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAuto[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceTool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#name BedrockagentFlow#name}
  */
  readonly name: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceToolToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceTool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceToolToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceTool | cdktn.IResolvable): any {
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

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceTool | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceTool | cdktn.IResolvable | undefined) {
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

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceToolList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceTool[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoice {
  /**
  * any block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#any BedrockagentFlow#any}
  */
  readonly any?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAny[] | cdktn.IResolvable;
  /**
  * auto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#auto BedrockagentFlow#auto}
  */
  readonly auto?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAuto[] | cdktn.IResolvable;
  /**
  * tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#tool BedrockagentFlow#tool}
  */
  readonly tool?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceTool[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoice | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    any: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAnyToTerraform, true)(struct!.any),
    auto: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAutoToTerraform, true)(struct!.auto),
    tool: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceToolToTerraform, true)(struct!.tool),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoice | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    any: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAnyToHclTerraform, true)(struct!.any),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAnyList",
    },
    auto: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAutoToHclTerraform, true)(struct!.auto),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAutoList",
    },
    tool: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceToolToHclTerraform, true)(struct!.tool),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceToolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoice | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._any?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any?.internalValue;
    }
    if (this._auto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto?.internalValue;
    }
    if (this._tool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoice | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._any.internalValue = undefined;
      this._auto.internalValue = undefined;
      this._tool.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._any.internalValue = value.any;
      this._auto.internalValue = value.auto;
      this._tool.internalValue = value.tool;
    }
  }

  // any - computed: false, optional: true, required: false
  private _any = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAnyList(this, "any", false);
  public get any() {
    return this._any;
  }
  public putAny(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAny[] | cdktn.IResolvable) {
    this._any.internalValue = value;
  }
  public resetAny() {
    this._any.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any.internalValue;
  }

  // auto - computed: false, optional: true, required: false
  private _auto = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAutoList(this, "auto", false);
  public get auto() {
    return this._auto;
  }
  public putAuto(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceAuto[] | cdktn.IResolvable) {
    this._auto.internalValue = value;
  }
  public resetAuto() {
    this._auto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto.internalValue;
  }

  // tool - computed: false, optional: true, required: false
  private _tool = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceToolList(this, "tool", false);
  public get tool() {
    return this._tool;
  }
  public putTool(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceTool[] | cdktn.IResolvable) {
    this._tool.internalValue = value;
  }
  public resetTool() {
    this._tool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoice[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfiguration {
  /**
  * tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#tool BedrockagentFlow#tool}
  */
  readonly tool?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationTool[] | cdktn.IResolvable;
  /**
  * tool_choice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#tool_choice BedrockagentFlow#tool_choice}
  */
  readonly toolChoice?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoice[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tool: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToTerraform, true)(struct!.tool),
    tool_choice: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceToTerraform, true)(struct!.toolChoice),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tool: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolToHclTerraform, true)(struct!.tool),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolList",
    },
    tool_choice: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceToHclTerraform, true)(struct!.toolChoice),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool?.internalValue;
    }
    if (this._toolChoice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolChoice = this._toolChoice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tool.internalValue = undefined;
      this._toolChoice.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tool.internalValue = value.tool;
      this._toolChoice.internalValue = value.toolChoice;
    }
  }

  // tool - computed: false, optional: true, required: false
  private _tool = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolList(this, "tool", false);
  public get tool() {
    return this._tool;
  }
  public putTool(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationTool[] | cdktn.IResolvable) {
    this._tool.internalValue = value;
  }
  public resetTool() {
    this._tool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool.internalValue;
  }

  // tool_choice - computed: false, optional: true, required: false
  private _toolChoice = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoiceList(this, "tool_choice", false);
  public get toolChoice() {
    return this._toolChoice;
  }
  public putToolChoice(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToolChoice[] | cdktn.IResolvable) {
    this._toolChoice.internalValue = value;
  }
  public resetToolChoice() {
    this._toolChoice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolChoiceInput() {
    return this._toolChoice.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChat {
  /**
  * input_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#input_variable BedrockagentFlow#input_variable}
  */
  readonly inputVariable?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariable[] | cdktn.IResolvable;
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#message BedrockagentFlow#message}
  */
  readonly message?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessage[] | cdktn.IResolvable;
  /**
  * system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#system BedrockagentFlow#system}
  */
  readonly systemAttribute?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystem[] | cdktn.IResolvable;
  /**
  * tool_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#tool_configuration BedrockagentFlow#tool_configuration}
  */
  readonly toolConfiguration?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_variable: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariableToTerraform, true)(struct!.inputVariable),
    message: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageToTerraform, true)(struct!.message),
    system: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemToTerraform, true)(struct!.systemAttribute),
    tool_configuration: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToTerraform, true)(struct!.toolConfiguration),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_variable: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariableToHclTerraform, true)(struct!.inputVariable),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariableList",
    },
    message: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageList",
    },
    system: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemToHclTerraform, true)(struct!.systemAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemList",
    },
    tool_configuration: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationToHclTerraform, true)(struct!.toolConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputVariable = this._inputVariable?.internalValue;
    }
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    if (this._system?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system?.internalValue;
    }
    if (this._toolConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolConfiguration = this._toolConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputVariable.internalValue = undefined;
      this._message.internalValue = undefined;
      this._system.internalValue = undefined;
      this._toolConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputVariable.internalValue = value.inputVariable;
      this._message.internalValue = value.message;
      this._system.internalValue = value.systemAttribute;
      this._toolConfiguration.internalValue = value.toolConfiguration;
    }
  }

  // input_variable - computed: false, optional: true, required: false
  private _inputVariable = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariableList(this, "input_variable", false);
  public get inputVariable() {
    return this._inputVariable;
  }
  public putInputVariable(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatInputVariable[] | cdktn.IResolvable) {
    this._inputVariable.internalValue = value;
  }
  public resetInputVariable() {
    this._inputVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariableInput() {
    return this._inputVariable.internalValue;
  }

  // message - computed: false, optional: true, required: false
  private _message = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatMessage[] | cdktn.IResolvable) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // system - computed: false, optional: true, required: false
  private _system = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystemList(this, "system", false);
  public get systemAttribute() {
    return this._system;
  }
  public putSystemAttribute(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatSystem[] | cdktn.IResolvable) {
    this._system.internalValue = value;
  }
  public resetSystemAttribute() {
    this._system.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system.internalValue;
  }

  // tool_configuration - computed: false, optional: true, required: false
  private _toolConfiguration = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfigurationList(this, "tool_configuration", false);
  public get toolConfiguration() {
    return this._toolConfiguration;
  }
  public putToolConfiguration(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToolConfiguration[] | cdktn.IResolvable) {
    this._toolConfiguration.internalValue = value;
  }
  public resetToolConfiguration() {
    this._toolConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolConfigurationInput() {
    return this._toolConfiguration.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChat[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#type BedrockagentFlow#type}
  */
  readonly type: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePointToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePointToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePointOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePointList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePoint[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePointOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#name BedrockagentFlow#name}
  */
  readonly name: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariableToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariableToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariable | cdktn.IResolvable): any {
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

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariable | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariable | cdktn.IResolvable | undefined) {
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

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariableList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariable[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariableOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#text BedrockagentFlow#text}
  */
  readonly text: string;
  /**
  * cache_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#cache_point BedrockagentFlow#cache_point}
  */
  readonly cachePoint?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePoint[] | cdktn.IResolvable;
  /**
  * input_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#input_variable BedrockagentFlow#input_variable}
  */
  readonly inputVariable?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariable[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationText | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    cache_point: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePointToTerraform, true)(struct!.cachePoint),
    input_variable: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariableToTerraform, true)(struct!.inputVariable),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationText | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_point: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePointToHclTerraform, true)(struct!.cachePoint),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePointList",
    },
    input_variable: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariableToHclTerraform, true)(struct!.inputVariable),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationText | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._cachePoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePoint = this._cachePoint?.internalValue;
    }
    if (this._inputVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputVariable = this._inputVariable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationText | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._cachePoint.internalValue = undefined;
      this._inputVariable.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._cachePoint.internalValue = value.cachePoint;
      this._inputVariable.internalValue = value.inputVariable;
    }
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

  // cache_point - computed: false, optional: true, required: false
  private _cachePoint = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePointList(this, "cache_point", false);
  public get cachePoint() {
    return this._cachePoint;
  }
  public putCachePoint(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextCachePoint[] | cdktn.IResolvable) {
    this._cachePoint.internalValue = value;
  }
  public resetCachePoint() {
    this._cachePoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePointInput() {
    return this._cachePoint.internalValue;
  }

  // input_variable - computed: false, optional: true, required: false
  private _inputVariable = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariableList(this, "input_variable", false);
  public get inputVariable() {
    return this._inputVariable;
  }
  public putInputVariable(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariable[] | cdktn.IResolvable) {
    this._inputVariable.internalValue = value;
  }
  public resetInputVariable() {
    this._inputVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariableInput() {
    return this._inputVariable.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationText[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfiguration {
  /**
  * chat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#chat BedrockagentFlow#chat}
  */
  readonly chat?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChat[] | cdktn.IResolvable;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#text BedrockagentFlow#text}
  */
  readonly text?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationText[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    chat: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToTerraform, true)(struct!.chat),
    text: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextToTerraform, true)(struct!.text),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    chat: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatToHclTerraform, true)(struct!.chat),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatList",
    },
    text: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextToHclTerraform, true)(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chat = this._chat?.internalValue;
    }
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chat.internalValue = undefined;
      this._text.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chat.internalValue = value.chat;
      this._text.internalValue = value.text;
    }
  }

  // chat - computed: false, optional: true, required: false
  private _chat = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChatList(this, "chat", false);
  public get chat() {
    return this._chat;
  }
  public putChat(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationChat[] | cdktn.IResolvable) {
    this._chat.internalValue = value;
  }
  public resetChat() {
    this._chat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatInput() {
    return this._chat.internalValue;
  }

  // text - computed: false, optional: true, required: false
  private _text = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextList(this, "text", false);
  public get text() {
    return this._text;
  }
  public putText(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationText[] | cdktn.IResolvable) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInline {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#additional_model_request_fields BedrockagentFlow#additional_model_request_fields}
  */
  readonly additionalModelRequestFields?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#model_id BedrockagentFlow#model_id}
  */
  readonly modelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#template_type BedrockagentFlow#template_type}
  */
  readonly templateType: string;
  /**
  * inference_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#inference_configuration BedrockagentFlow#inference_configuration}
  */
  readonly inferenceConfiguration?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfiguration[] | cdktn.IResolvable;
  /**
  * template_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#template_configuration BedrockagentFlow#template_configuration}
  */
  readonly templateConfiguration?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInline | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_model_request_fields: cdktn.stringToTerraform(struct!.additionalModelRequestFields),
    model_id: cdktn.stringToTerraform(struct!.modelId),
    template_type: cdktn.stringToTerraform(struct!.templateType),
    inference_configuration: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationToTerraform, true)(struct!.inferenceConfiguration),
    template_configuration: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationToTerraform, true)(struct!.templateConfiguration),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInline | cdktn.IResolvable): any {
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
    template_type: {
      value: cdktn.stringToHclTerraform(struct!.templateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inference_configuration: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationToHclTerraform, true)(struct!.inferenceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationList",
    },
    template_configuration: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationToHclTerraform, true)(struct!.templateConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInline | cdktn.IResolvable | undefined {
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
    if (this._templateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateType = this._templateType;
    }
    if (this._inferenceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceConfiguration = this._inferenceConfiguration?.internalValue;
    }
    if (this._templateConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateConfiguration = this._templateConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInline | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalModelRequestFields = undefined;
      this._modelId = undefined;
      this._templateType = undefined;
      this._inferenceConfiguration.internalValue = undefined;
      this._templateConfiguration.internalValue = undefined;
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
      this._templateType = value.templateType;
      this._inferenceConfiguration.internalValue = value.inferenceConfiguration;
      this._templateConfiguration.internalValue = value.templateConfiguration;
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

  // template_type - computed: false, optional: false, required: true
  private _templateType?: string; 
  public get templateType() {
    return this.getStringAttribute('template_type');
  }
  public set templateType(value: string) {
    this._templateType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTypeInput() {
    return this._templateType;
  }

  // inference_configuration - computed: false, optional: true, required: false
  private _inferenceConfiguration = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfigurationList(this, "inference_configuration", false);
  public get inferenceConfiguration() {
    return this._inferenceConfiguration;
  }
  public putInferenceConfiguration(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineInferenceConfiguration[] | cdktn.IResolvable) {
    this._inferenceConfiguration.internalValue = value;
  }
  public resetInferenceConfiguration() {
    this._inferenceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceConfigurationInput() {
    return this._inferenceConfiguration.internalValue;
  }

  // template_configuration - computed: false, optional: true, required: false
  private _templateConfiguration = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfigurationList(this, "template_configuration", false);
  public get templateConfiguration() {
    return this._templateConfiguration;
  }
  public putTemplateConfiguration(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineTemplateConfiguration[] | cdktn.IResolvable) {
    this._templateConfiguration.internalValue = value;
  }
  public resetTemplateConfiguration() {
    this._templateConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateConfigurationInput() {
    return this._templateConfiguration.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInline[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#prompt_arn BedrockagentFlow#prompt_arn}
  */
  readonly promptArn: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResourceToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prompt_arn: cdktn.stringToTerraform(struct!.promptArn),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResourceToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prompt_arn: {
      value: cdktn.stringToHclTerraform(struct!.promptArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promptArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptArn = this._promptArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promptArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promptArn = value.promptArn;
    }
  }

  // prompt_arn - computed: false, optional: false, required: true
  private _promptArn?: string; 
  public get promptArn() {
    return this.getStringAttribute('prompt_arn');
  }
  public set promptArn(value: string) {
    this._promptArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptArnInput() {
    return this._promptArn;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResourceList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResource[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResourceOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfiguration {
  /**
  * inline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#inline BedrockagentFlow#inline}
  */
  readonly inline?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInline[] | cdktn.IResolvable;
  /**
  * resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#resource BedrockagentFlow#resource}
  */
  readonly resource?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResource[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inline: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineToTerraform, true)(struct!.inline),
    resource: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResourceToTerraform, true)(struct!.resource),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inline: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineToHclTerraform, true)(struct!.inline),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineList",
    },
    resource: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResourceToHclTerraform, true)(struct!.resource),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline?.internalValue;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inline.internalValue = undefined;
      this._resource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inline.internalValue = value.inline;
      this._resource.internalValue = value.resource;
    }
  }

  // inline - computed: false, optional: true, required: false
  private _inline = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInlineList(this, "inline", false);
  public get inline() {
    return this._inline;
  }
  public putInline(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationInline[] | cdktn.IResolvable) {
    this._inline.internalValue = value;
  }
  public resetInline() {
    this._inline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline.internalValue;
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResourceList(this, "resource", false);
  public get resource() {
    return this._resource;
  }
  public putResource(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationResource[] | cdktn.IResolvable) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationPrompt {
  /**
  * guardrail_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#guardrail_configuration BedrockagentFlow#guardrail_configuration}
  */
  readonly guardrailConfiguration?: BedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfiguration[] | cdktn.IResolvable;
  /**
  * source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#source_configuration BedrockagentFlow#source_configuration}
  */
  readonly sourceConfiguration?: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationPromptToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPrompt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    guardrail_configuration: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfigurationToTerraform, true)(struct!.guardrailConfiguration),
    source_configuration: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationToTerraform, true)(struct!.sourceConfiguration),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationPromptToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationPrompt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    guardrail_configuration: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfigurationToHclTerraform, true)(struct!.guardrailConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfigurationList",
    },
    source_configuration: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationToHclTerraform, true)(struct!.sourceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationPrompt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guardrailConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardrailConfiguration = this._guardrailConfiguration?.internalValue;
    }
    if (this._sourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationPrompt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guardrailConfiguration.internalValue = undefined;
      this._sourceConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guardrailConfiguration.internalValue = value.guardrailConfiguration;
      this._sourceConfiguration.internalValue = value.sourceConfiguration;
    }
  }

  // guardrail_configuration - computed: false, optional: true, required: false
  private _guardrailConfiguration = new BedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfigurationList(this, "guardrail_configuration", false);
  public get guardrailConfiguration() {
    return this._guardrailConfiguration;
  }
  public putGuardrailConfiguration(value: BedrockagentFlowDefinitionNodeConfigurationPromptGuardrailConfiguration[] | cdktn.IResolvable) {
    this._guardrailConfiguration.internalValue = value;
  }
  public resetGuardrailConfiguration() {
    this._guardrailConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailConfigurationInput() {
    return this._guardrailConfiguration.internalValue;
  }

  // source_configuration - computed: false, optional: true, required: false
  private _sourceConfiguration = new BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfigurationList(this, "source_configuration", false);
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: BedrockagentFlowDefinitionNodeConfigurationPromptSourceConfiguration[] | cdktn.IResolvable) {
    this._sourceConfiguration.internalValue = value;
  }
  public resetSourceConfiguration() {
    this._sourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationPromptList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationPrompt[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationPromptOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationPromptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#bucket_name BedrockagentFlow#bucket_name}
  */
  readonly bucketName: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3ToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3ToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
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
}

export class BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3List extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3OutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfiguration {
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#s3 BedrockagentFlow#s3}
  */
  readonly s3?: BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3ToTerraform, true)(struct!.s3),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3ToHclTerraform, true)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3.internalValue = value.s3;
    }
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3List(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationS3[] | cdktn.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationRetrieval {
  /**
  * service_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#service_configuration BedrockagentFlow#service_configuration}
  */
  readonly serviceConfiguration?: BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationRetrievalToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationRetrieval | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service_configuration: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationToTerraform, true)(struct!.serviceConfiguration),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationRetrievalToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationRetrieval | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    service_configuration: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationToHclTerraform, true)(struct!.serviceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationRetrievalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationRetrieval | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceConfiguration = this._serviceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationRetrieval | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceConfiguration.internalValue = value.serviceConfiguration;
    }
  }

  // service_configuration - computed: false, optional: true, required: false
  private _serviceConfiguration = new BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfigurationList(this, "service_configuration", false);
  public get serviceConfiguration() {
    return this._serviceConfiguration;
  }
  public putServiceConfiguration(value: BedrockagentFlowDefinitionNodeConfigurationRetrievalServiceConfiguration[] | cdktn.IResolvable) {
    this._serviceConfiguration.internalValue = value;
  }
  public resetServiceConfiguration() {
    this._serviceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigurationInput() {
    return this._serviceConfiguration.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationRetrievalList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationRetrieval[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationRetrievalOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationRetrievalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#bucket_name BedrockagentFlow#bucket_name}
  */
  readonly bucketName: string;
}

export function bedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3ToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3ToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
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
}

export class BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3List extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3OutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfiguration {
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#s3 BedrockagentFlow#s3}
  */
  readonly s3?: BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3ToTerraform, true)(struct!.s3),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3ToHclTerraform, true)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3.internalValue = value.s3;
    }
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3List(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationS3[] | cdktn.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfigurationStorage {
  /**
  * service_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#service_configuration BedrockagentFlow#service_configuration}
  */
  readonly serviceConfiguration?: BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationStorageToTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service_configuration: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationToTerraform, true)(struct!.serviceConfiguration),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationStorageToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfigurationStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    service_configuration: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationToHclTerraform, true)(struct!.serviceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationStorageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfigurationStorage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceConfiguration = this._serviceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfigurationStorage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceConfiguration.internalValue = value.serviceConfiguration;
    }
  }

  // service_configuration - computed: false, optional: true, required: false
  private _serviceConfiguration = new BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfigurationList(this, "service_configuration", false);
  public get serviceConfiguration() {
    return this._serviceConfiguration;
  }
  public putServiceConfiguration(value: BedrockagentFlowDefinitionNodeConfigurationStorageServiceConfiguration[] | cdktn.IResolvable) {
    this._serviceConfiguration.internalValue = value;
  }
  public resetServiceConfiguration() {
    this._serviceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigurationInput() {
    return this._serviceConfiguration.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationStorageList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfigurationStorage[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationStorageOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeConfiguration {
  /**
  * agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#agent BedrockagentFlow#agent}
  */
  readonly agent?: BedrockagentFlowDefinitionNodeConfigurationAgent[] | cdktn.IResolvable;
  /**
  * collector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#collector BedrockagentFlow#collector}
  */
  readonly collector?: BedrockagentFlowDefinitionNodeConfigurationCollector[] | cdktn.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#condition BedrockagentFlow#condition}
  */
  readonly condition?: BedrockagentFlowDefinitionNodeConfigurationCondition[] | cdktn.IResolvable;
  /**
  * inline_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#inline_code BedrockagentFlow#inline_code}
  */
  readonly inlineCode?: BedrockagentFlowDefinitionNodeConfigurationInlineCode[] | cdktn.IResolvable;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#input BedrockagentFlow#input}
  */
  readonly input?: BedrockagentFlowDefinitionNodeConfigurationInput[] | cdktn.IResolvable;
  /**
  * iterator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#iterator BedrockagentFlow#iterator}
  */
  readonly iterator?: BedrockagentFlowDefinitionNodeConfigurationIterator[] | cdktn.IResolvable;
  /**
  * knowledge_base block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#knowledge_base BedrockagentFlow#knowledge_base}
  */
  readonly knowledgeBase?: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBase[] | cdktn.IResolvable;
  /**
  * lambda_function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#lambda_function BedrockagentFlow#lambda_function}
  */
  readonly lambdaFunction?: BedrockagentFlowDefinitionNodeConfigurationLambdaFunction[] | cdktn.IResolvable;
  /**
  * lex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#lex BedrockagentFlow#lex}
  */
  readonly lex?: BedrockagentFlowDefinitionNodeConfigurationLex[] | cdktn.IResolvable;
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#output BedrockagentFlow#output}
  */
  readonly output?: BedrockagentFlowDefinitionNodeConfigurationOutput[] | cdktn.IResolvable;
  /**
  * prompt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#prompt BedrockagentFlow#prompt}
  */
  readonly prompt?: BedrockagentFlowDefinitionNodeConfigurationPrompt[] | cdktn.IResolvable;
  /**
  * retrieval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#retrieval BedrockagentFlow#retrieval}
  */
  readonly retrieval?: BedrockagentFlowDefinitionNodeConfigurationRetrieval[] | cdktn.IResolvable;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#storage BedrockagentFlow#storage}
  */
  readonly storage?: BedrockagentFlowDefinitionNodeConfigurationStorage[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeConfigurationToTerraform(struct?: BedrockagentFlowDefinitionNodeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationAgentToTerraform, true)(struct!.agent),
    collector: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationCollectorToTerraform, true)(struct!.collector),
    condition: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationConditionToTerraform, true)(struct!.condition),
    inline_code: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationInlineCodeToTerraform, true)(struct!.inlineCode),
    input: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationInputToTerraform, true)(struct!.input),
    iterator: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationIteratorToTerraform, true)(struct!.iterator),
    knowledge_base: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseToTerraform, true)(struct!.knowledgeBase),
    lambda_function: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationLambdaFunctionToTerraform, true)(struct!.lambdaFunction),
    lex: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationLexToTerraform, true)(struct!.lex),
    output: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationOutputToTerraform, true)(struct!.output),
    prompt: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationPromptToTerraform, true)(struct!.prompt),
    retrieval: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationRetrievalToTerraform, true)(struct!.retrieval),
    storage: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationStorageToTerraform, true)(struct!.storage),
  }
}


export function bedrockagentFlowDefinitionNodeConfigurationToHclTerraform(struct?: BedrockagentFlowDefinitionNodeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationAgentToHclTerraform, true)(struct!.agent),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationAgentList",
    },
    collector: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationCollectorToHclTerraform, true)(struct!.collector),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationCollectorList",
    },
    condition: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationConditionList",
    },
    inline_code: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationInlineCodeToHclTerraform, true)(struct!.inlineCode),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationInlineCodeList",
    },
    input: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationInputToHclTerraform, true)(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationInputList",
    },
    iterator: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationIteratorToHclTerraform, true)(struct!.iterator),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationIteratorList",
    },
    knowledge_base: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseToHclTerraform, true)(struct!.knowledgeBase),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseList",
    },
    lambda_function: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationLambdaFunctionToHclTerraform, true)(struct!.lambdaFunction),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationLambdaFunctionList",
    },
    lex: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationLexToHclTerraform, true)(struct!.lex),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationLexList",
    },
    output: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationOutputToHclTerraform, true)(struct!.output),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationOutputList",
    },
    prompt: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationPromptToHclTerraform, true)(struct!.prompt),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationPromptList",
    },
    retrieval: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationRetrievalToHclTerraform, true)(struct!.retrieval),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationRetrievalList",
    },
    storage: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationStorageToHclTerraform, true)(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent?.internalValue;
    }
    if (this._collector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collector = this._collector?.internalValue;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._inlineCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineCode = this._inlineCode?.internalValue;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    if (this._iterator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iterator = this._iterator?.internalValue;
    }
    if (this._knowledgeBase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBase = this._knowledgeBase?.internalValue;
    }
    if (this._lambdaFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunction = this._lambdaFunction?.internalValue;
    }
    if (this._lex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lex = this._lex?.internalValue;
    }
    if (this._output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output?.internalValue;
    }
    if (this._prompt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt?.internalValue;
    }
    if (this._retrieval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrieval = this._retrieval?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNodeConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agent.internalValue = undefined;
      this._collector.internalValue = undefined;
      this._condition.internalValue = undefined;
      this._inlineCode.internalValue = undefined;
      this._input.internalValue = undefined;
      this._iterator.internalValue = undefined;
      this._knowledgeBase.internalValue = undefined;
      this._lambdaFunction.internalValue = undefined;
      this._lex.internalValue = undefined;
      this._output.internalValue = undefined;
      this._prompt.internalValue = undefined;
      this._retrieval.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agent.internalValue = value.agent;
      this._collector.internalValue = value.collector;
      this._condition.internalValue = value.condition;
      this._inlineCode.internalValue = value.inlineCode;
      this._input.internalValue = value.input;
      this._iterator.internalValue = value.iterator;
      this._knowledgeBase.internalValue = value.knowledgeBase;
      this._lambdaFunction.internalValue = value.lambdaFunction;
      this._lex.internalValue = value.lex;
      this._output.internalValue = value.output;
      this._prompt.internalValue = value.prompt;
      this._retrieval.internalValue = value.retrieval;
      this._storage.internalValue = value.storage;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent = new BedrockagentFlowDefinitionNodeConfigurationAgentList(this, "agent", false);
  public get agent() {
    return this._agent;
  }
  public putAgent(value: BedrockagentFlowDefinitionNodeConfigurationAgent[] | cdktn.IResolvable) {
    this._agent.internalValue = value;
  }
  public resetAgent() {
    this._agent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent.internalValue;
  }

  // collector - computed: false, optional: true, required: false
  private _collector = new BedrockagentFlowDefinitionNodeConfigurationCollectorList(this, "collector", false);
  public get collector() {
    return this._collector;
  }
  public putCollector(value: BedrockagentFlowDefinitionNodeConfigurationCollector[] | cdktn.IResolvable) {
    this._collector.internalValue = value;
  }
  public resetCollector() {
    this._collector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorInput() {
    return this._collector.internalValue;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new BedrockagentFlowDefinitionNodeConfigurationConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: BedrockagentFlowDefinitionNodeConfigurationCondition[] | cdktn.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // inline_code - computed: false, optional: true, required: false
  private _inlineCode = new BedrockagentFlowDefinitionNodeConfigurationInlineCodeList(this, "inline_code", false);
  public get inlineCode() {
    return this._inlineCode;
  }
  public putInlineCode(value: BedrockagentFlowDefinitionNodeConfigurationInlineCode[] | cdktn.IResolvable) {
    this._inlineCode.internalValue = value;
  }
  public resetInlineCode() {
    this._inlineCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineCodeInput() {
    return this._inlineCode.internalValue;
  }

  // input - computed: false, optional: true, required: false
  private _input = new BedrockagentFlowDefinitionNodeConfigurationInputList(this, "input", false);
  public get input() {
    return this._input;
  }
  public putInput(value: BedrockagentFlowDefinitionNodeConfigurationInput[] | cdktn.IResolvable) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // iterator - computed: false, optional: true, required: false
  private _iterator = new BedrockagentFlowDefinitionNodeConfigurationIteratorList(this, "iterator", false);
  public get iterator() {
    return this._iterator;
  }
  public putIterator(value: BedrockagentFlowDefinitionNodeConfigurationIterator[] | cdktn.IResolvable) {
    this._iterator.internalValue = value;
  }
  public resetIterator() {
    this._iterator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iteratorInput() {
    return this._iterator.internalValue;
  }

  // knowledge_base - computed: false, optional: true, required: false
  private _knowledgeBase = new BedrockagentFlowDefinitionNodeConfigurationKnowledgeBaseList(this, "knowledge_base", false);
  public get knowledgeBase() {
    return this._knowledgeBase;
  }
  public putKnowledgeBase(value: BedrockagentFlowDefinitionNodeConfigurationKnowledgeBase[] | cdktn.IResolvable) {
    this._knowledgeBase.internalValue = value;
  }
  public resetKnowledgeBase() {
    this._knowledgeBase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseInput() {
    return this._knowledgeBase.internalValue;
  }

  // lambda_function - computed: false, optional: true, required: false
  private _lambdaFunction = new BedrockagentFlowDefinitionNodeConfigurationLambdaFunctionList(this, "lambda_function", false);
  public get lambdaFunction() {
    return this._lambdaFunction;
  }
  public putLambdaFunction(value: BedrockagentFlowDefinitionNodeConfigurationLambdaFunction[] | cdktn.IResolvable) {
    this._lambdaFunction.internalValue = value;
  }
  public resetLambdaFunction() {
    this._lambdaFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionInput() {
    return this._lambdaFunction.internalValue;
  }

  // lex - computed: false, optional: true, required: false
  private _lex = new BedrockagentFlowDefinitionNodeConfigurationLexList(this, "lex", false);
  public get lex() {
    return this._lex;
  }
  public putLex(value: BedrockagentFlowDefinitionNodeConfigurationLex[] | cdktn.IResolvable) {
    this._lex.internalValue = value;
  }
  public resetLex() {
    this._lex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lexInput() {
    return this._lex.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output = new BedrockagentFlowDefinitionNodeConfigurationOutputList(this, "output", false);
  public get output() {
    return this._output;
  }
  public putOutput(value: BedrockagentFlowDefinitionNodeConfigurationOutput[] | cdktn.IResolvable) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // prompt - computed: false, optional: true, required: false
  private _prompt = new BedrockagentFlowDefinitionNodeConfigurationPromptList(this, "prompt", false);
  public get prompt() {
    return this._prompt;
  }
  public putPrompt(value: BedrockagentFlowDefinitionNodeConfigurationPrompt[] | cdktn.IResolvable) {
    this._prompt.internalValue = value;
  }
  public resetPrompt() {
    this._prompt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt.internalValue;
  }

  // retrieval - computed: false, optional: true, required: false
  private _retrieval = new BedrockagentFlowDefinitionNodeConfigurationRetrievalList(this, "retrieval", false);
  public get retrieval() {
    return this._retrieval;
  }
  public putRetrieval(value: BedrockagentFlowDefinitionNodeConfigurationRetrieval[] | cdktn.IResolvable) {
    this._retrieval.internalValue = value;
  }
  public resetRetrieval() {
    this._retrieval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalInput() {
    return this._retrieval.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new BedrockagentFlowDefinitionNodeConfigurationStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: BedrockagentFlowDefinitionNodeConfigurationStorage[] | cdktn.IResolvable) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeConfigurationOutputReference {
    return new BedrockagentFlowDefinitionNodeConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#category BedrockagentFlow#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#expression BedrockagentFlow#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#name BedrockagentFlow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#type BedrockagentFlow#type}
  */
  readonly type: string;
}

export function bedrockagentFlowDefinitionNodeInputToTerraform(struct?: BedrockagentFlowDefinitionNodeInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    expression: cdktn.stringToTerraform(struct!.expression),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentFlowDefinitionNodeInputToHclTerraform(struct?: BedrockagentFlowDefinitionNodeInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
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

export class BedrockagentFlowDefinitionNodeInputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
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

  public set internalValue(value: BedrockagentFlowDefinitionNodeInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._expression = undefined;
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
      this._category = value.category;
      this._expression = value.expression;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

export class BedrockagentFlowDefinitionNodeInputList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeInput[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeInputOutputReference {
    return new BedrockagentFlowDefinitionNodeInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNodeOutput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#name BedrockagentFlow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#type BedrockagentFlow#type}
  */
  readonly type: string;
}

export function bedrockagentFlowDefinitionNodeOutputToTerraform(struct?: BedrockagentFlowDefinitionNodeOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentFlowDefinitionNodeOutputToHclTerraform(struct?: BedrockagentFlowDefinitionNodeOutput | cdktn.IResolvable): any {
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

export class BedrockagentFlowDefinitionNodeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNodeOutput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: BedrockagentFlowDefinitionNodeOutput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._type = value.type;
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

export class BedrockagentFlowDefinitionNodeOutputList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNodeOutput[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeOutputOutputReference {
    return new BedrockagentFlowDefinitionNodeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinitionNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#name BedrockagentFlow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#type BedrockagentFlow#type}
  */
  readonly type: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#configuration BedrockagentFlow#configuration}
  */
  readonly configuration?: BedrockagentFlowDefinitionNodeConfiguration[] | cdktn.IResolvable;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#input BedrockagentFlow#input}
  */
  readonly input?: BedrockagentFlowDefinitionNodeInput[] | cdktn.IResolvable;
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#output BedrockagentFlow#output}
  */
  readonly output?: BedrockagentFlowDefinitionNodeOutput[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionNodeToTerraform(struct?: BedrockagentFlowDefinitionNode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
    configuration: cdktn.listMapper(bedrockagentFlowDefinitionNodeConfigurationToTerraform, true)(struct!.configuration),
    input: cdktn.listMapper(bedrockagentFlowDefinitionNodeInputToTerraform, true)(struct!.input),
    output: cdktn.listMapper(bedrockagentFlowDefinitionNodeOutputToTerraform, true)(struct!.output),
  }
}


export function bedrockagentFlowDefinitionNodeToHclTerraform(struct?: BedrockagentFlowDefinitionNode | cdktn.IResolvable): any {
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeConfigurationToHclTerraform, true)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeConfigurationList",
    },
    input: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeInputToHclTerraform, true)(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeInputList",
    },
    output: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeOutputToHclTerraform, true)(struct!.output),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeOutputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionNodeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinitionNode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    if (this._output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinitionNode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._configuration.internalValue = undefined;
      this._input.internalValue = undefined;
      this._output.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._configuration.internalValue = value.configuration;
      this._input.internalValue = value.input;
      this._output.internalValue = value.output;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new BedrockagentFlowDefinitionNodeConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: BedrockagentFlowDefinitionNodeConfiguration[] | cdktn.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // input - computed: false, optional: true, required: false
  private _input = new BedrockagentFlowDefinitionNodeInputList(this, "input", false);
  public get input() {
    return this._input;
  }
  public putInput(value: BedrockagentFlowDefinitionNodeInput[] | cdktn.IResolvable) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output = new BedrockagentFlowDefinitionNodeOutputList(this, "output", false);
  public get output() {
    return this._output;
  }
  public putOutput(value: BedrockagentFlowDefinitionNodeOutput[] | cdktn.IResolvable) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }
}

export class BedrockagentFlowDefinitionNodeList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinitionNode[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionNodeOutputReference {
    return new BedrockagentFlowDefinitionNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowDefinition {
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#connection BedrockagentFlow#connection}
  */
  readonly connection?: BedrockagentFlowDefinitionConnection[] | cdktn.IResolvable;
  /**
  * node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#node BedrockagentFlow#node}
  */
  readonly nodeAttribute?: BedrockagentFlowDefinitionNode[] | cdktn.IResolvable;
}

export function bedrockagentFlowDefinitionToTerraform(struct?: BedrockagentFlowDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection: cdktn.listMapper(bedrockagentFlowDefinitionConnectionToTerraform, true)(struct!.connection),
    node: cdktn.listMapper(bedrockagentFlowDefinitionNodeToTerraform, true)(struct!.nodeAttribute),
  }
}


export function bedrockagentFlowDefinitionToHclTerraform(struct?: BedrockagentFlowDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionConnectionToHclTerraform, true)(struct!.connection),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionConnectionList",
    },
    node: {
      value: cdktn.listMapperHcl(bedrockagentFlowDefinitionNodeToHclTerraform, true)(struct!.nodeAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentFlowDefinitionNodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentFlowDefinitionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentFlowDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._node?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentFlowDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connection.internalValue = undefined;
      this._node.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connection.internalValue = value.connection;
      this._node.internalValue = value.nodeAttribute;
    }
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new BedrockagentFlowDefinitionConnectionList(this, "connection", false);
  public get connection() {
    return this._connection;
  }
  public putConnection(value: BedrockagentFlowDefinitionConnection[] | cdktn.IResolvable) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // node - computed: false, optional: true, required: false
  private _node = new BedrockagentFlowDefinitionNodeList(this, "node", false);
  public get nodeAttribute() {
    return this._node;
  }
  public putNodeAttribute(value: BedrockagentFlowDefinitionNode[] | cdktn.IResolvable) {
    this._node.internalValue = value;
  }
  public resetNodeAttribute() {
    this._node.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node.internalValue;
  }
}

export class BedrockagentFlowDefinitionList extends cdktn.ComplexList {
  public internalValue? : BedrockagentFlowDefinition[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentFlowDefinitionOutputReference {
    return new BedrockagentFlowDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentFlowTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#create BedrockagentFlow#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#delete BedrockagentFlow#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#update BedrockagentFlow#update}
  */
  readonly update?: string;
}

export function bedrockagentFlowTimeoutsToTerraform(struct?: BedrockagentFlowTimeouts | cdktn.IResolvable): any {
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


export function bedrockagentFlowTimeoutsToHclTerraform(struct?: BedrockagentFlowTimeouts | cdktn.IResolvable): any {
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

export class BedrockagentFlowTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentFlowTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentFlowTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow aws_bedrockagent_flow}
*/
export class BedrockagentFlow extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagent_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentFlow resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentFlow to import
  * @param importFromId The id of the existing BedrockagentFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagent_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_flow aws_bedrockagent_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentFlowConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagent_flow',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.63.0',
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
    this._customerEncryptionKeyArn = config.customerEncryptionKeyArn;
    this._description = config.description;
    this._executionRoleArn = config.executionRoleArn;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._definition.internalValue = config.definition;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // customer_encryption_key_arn - computed: false, optional: true, required: false
  private _customerEncryptionKeyArn?: string; 
  public get customerEncryptionKeyArn() {
    return this.getStringAttribute('customer_encryption_key_arn');
  }
  public set customerEncryptionKeyArn(value: string) {
    this._customerEncryptionKeyArn = value;
  }
  public resetCustomerEncryptionKeyArn() {
    this._customerEncryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerEncryptionKeyArnInput() {
    return this._customerEncryptionKeyArn;
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

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new BedrockagentFlowDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: BedrockagentFlowDefinition[] | cdktn.IResolvable) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockagentFlowTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockagentFlowTimeouts) {
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
      customer_encryption_key_arn: cdktn.stringToTerraform(this._customerEncryptionKeyArn),
      description: cdktn.stringToTerraform(this._description),
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      definition: cdktn.listMapper(bedrockagentFlowDefinitionToTerraform, true)(this._definition.internalValue),
      timeouts: bedrockagentFlowTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_encryption_key_arn: {
        value: cdktn.stringToHclTerraform(this._customerEncryptionKeyArn),
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
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
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
      definition: {
        value: cdktn.listMapperHcl(bedrockagentFlowDefinitionToHclTerraform, true)(this._definition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentFlowDefinitionList",
      },
      timeouts: {
        value: bedrockagentFlowTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentFlowTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
