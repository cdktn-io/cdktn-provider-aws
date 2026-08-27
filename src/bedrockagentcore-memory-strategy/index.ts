/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentcoreMemoryStrategyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#description BedrockagentcoreMemoryStrategy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#memory_execution_role_arn BedrockagentcoreMemoryStrategy#memory_execution_role_arn}
  */
  readonly memoryExecutionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#memory_id BedrockagentcoreMemoryStrategy#memory_id}
  */
  readonly memoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#name BedrockagentcoreMemoryStrategy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#namespace_templates BedrockagentcoreMemoryStrategy#namespace_templates}
  */
  readonly namespaceTemplates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#namespaces BedrockagentcoreMemoryStrategy#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#region BedrockagentcoreMemoryStrategy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#type BedrockagentcoreMemoryStrategy#type}
  */
  readonly type: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#configuration BedrockagentcoreMemoryStrategy#configuration}
  */
  readonly configuration?: BedrockagentcoreMemoryStrategyConfiguration[] | cdktn.IResolvable;
  /**
  * memory_record_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#memory_record_schema BedrockagentcoreMemoryStrategy#memory_record_schema}
  */
  readonly memoryRecordSchema?: BedrockagentcoreMemoryStrategyMemoryRecordSchema[] | cdktn.IResolvable;
  /**
  * reflection_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#reflection_configuration BedrockagentcoreMemoryStrategy#reflection_configuration}
  */
  readonly reflectionConfiguration?: BedrockagentcoreMemoryStrategyReflectionConfiguration[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#timeouts BedrockagentcoreMemoryStrategy#timeouts}
  */
  readonly timeouts?: BedrockagentcoreMemoryStrategyTimeouts;
}
export interface BedrockagentcoreMemoryStrategyConfigurationConsolidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#append_to_prompt BedrockagentcoreMemoryStrategy#append_to_prompt}
  */
  readonly appendToPrompt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#model_id BedrockagentcoreMemoryStrategy#model_id}
  */
  readonly modelId: string;
}

export function bedrockagentcoreMemoryStrategyConfigurationConsolidationToTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationConsolidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
    model_id: cdktn.stringToTerraform(struct!.modelId),
  }
}


export function bedrockagentcoreMemoryStrategyConfigurationConsolidationToHclTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationConsolidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_to_prompt: {
      value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyConfigurationConsolidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendToPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendToPrompt = this._appendToPrompt;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyConfigurationConsolidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendToPrompt = undefined;
      this._modelId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendToPrompt = value.appendToPrompt;
      this._modelId = value.modelId;
    }
  }

  // append_to_prompt - computed: false, optional: false, required: true
  private _appendToPrompt?: string; 
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }
  public set appendToPrompt(value: string) {
    this._appendToPrompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appendToPromptInput() {
    return this._appendToPrompt;
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
}

export class BedrockagentcoreMemoryStrategyConfigurationConsolidationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyConfigurationConsolidation[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference {
    return new BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyConfigurationExtraction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#append_to_prompt BedrockagentcoreMemoryStrategy#append_to_prompt}
  */
  readonly appendToPrompt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#model_id BedrockagentcoreMemoryStrategy#model_id}
  */
  readonly modelId: string;
}

export function bedrockagentcoreMemoryStrategyConfigurationExtractionToTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
    model_id: cdktn.stringToTerraform(struct!.modelId),
  }
}


export function bedrockagentcoreMemoryStrategyConfigurationExtractionToHclTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_to_prompt: {
      value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyConfigurationExtraction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendToPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendToPrompt = this._appendToPrompt;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyConfigurationExtraction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendToPrompt = undefined;
      this._modelId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendToPrompt = value.appendToPrompt;
      this._modelId = value.modelId;
    }
  }

  // append_to_prompt - computed: false, optional: false, required: true
  private _appendToPrompt?: string; 
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }
  public set appendToPrompt(value: string) {
    this._appendToPrompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appendToPromptInput() {
    return this._appendToPrompt;
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
}

export class BedrockagentcoreMemoryStrategyConfigurationExtractionList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyConfigurationExtraction[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference {
    return new BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyConfigurationReflection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#append_to_prompt BedrockagentcoreMemoryStrategy#append_to_prompt}
  */
  readonly appendToPrompt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#model_id BedrockagentcoreMemoryStrategy#model_id}
  */
  readonly modelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#namespace_templates BedrockagentcoreMemoryStrategy#namespace_templates}
  */
  readonly namespaceTemplates: string[];
}

export function bedrockagentcoreMemoryStrategyConfigurationReflectionToTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationReflection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
    model_id: cdktn.stringToTerraform(struct!.modelId),
    namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
  }
}


export function bedrockagentcoreMemoryStrategyConfigurationReflectionToHclTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationReflection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_to_prompt: {
      value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
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
    namespace_templates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyConfigurationReflectionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyConfigurationReflection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendToPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendToPrompt = this._appendToPrompt;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._namespaceTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceTemplates = this._namespaceTemplates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyConfigurationReflection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendToPrompt = undefined;
      this._modelId = undefined;
      this._namespaceTemplates = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendToPrompt = value.appendToPrompt;
      this._modelId = value.modelId;
      this._namespaceTemplates = value.namespaceTemplates;
    }
  }

  // append_to_prompt - computed: false, optional: false, required: true
  private _appendToPrompt?: string; 
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }
  public set appendToPrompt(value: string) {
    this._appendToPrompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appendToPromptInput() {
    return this._appendToPrompt;
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

  // namespace_templates - computed: false, optional: false, required: true
  private _namespaceTemplates?: string[]; 
  public get namespaceTemplates() {
    return cdktn.Fn.tolist(this.getListAttribute('namespace_templates'));
  }
  public set namespaceTemplates(value: string[]) {
    this._namespaceTemplates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplatesInput() {
    return this._namespaceTemplates;
  }
}

export class BedrockagentcoreMemoryStrategyConfigurationReflectionList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyConfigurationReflection[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyConfigurationReflectionOutputReference {
    return new BedrockagentcoreMemoryStrategyConfigurationReflectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTrigger {
}

export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerToTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerToHclTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message_count - computed: true, optional: false, required: false
  public get messageCount() {
    return this.getNumberAttribute('message_count');
  }
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerOutputReference {
    return new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTrigger {
}

export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerToTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerToHclTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_session_timeout - computed: true, optional: false, required: false
  public get idleSessionTimeout() {
    return this.getNumberAttribute('idle_session_timeout');
  }
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerOutputReference {
    return new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTrigger {
}

export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerToTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerToHclTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // token_count - computed: true, optional: false, required: false
  public get tokenCount() {
    return this.getNumberAttribute('token_count');
  }
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerOutputReference {
    return new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActual {
}

export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualToTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActual): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualToHclTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActual): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message_based_trigger - computed: true, optional: false, required: false
  private _messageBasedTrigger = new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualMessageBasedTriggerList(this, "message_based_trigger", false);
  public get messageBasedTrigger() {
    return this._messageBasedTrigger;
  }

  // time_based_trigger - computed: true, optional: false, required: false
  private _timeBasedTrigger = new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTimeBasedTriggerList(this, "time_based_trigger", false);
  public get timeBasedTrigger() {
    return this._timeBasedTrigger;
  }

  // token_based_trigger - computed: true, optional: false, required: false
  private _tokenBasedTrigger = new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualTokenBasedTriggerList(this, "token_based_trigger", false);
  public get tokenBasedTrigger() {
    return this._tokenBasedTrigger;
  }
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualOutputReference {
    return new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#payload_delivery_bucket_name BedrockagentcoreMemoryStrategy#payload_delivery_bucket_name}
  */
  readonly payloadDeliveryBucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#topic_arn BedrockagentcoreMemoryStrategy#topic_arn}
  */
  readonly topicArn: string;
}

export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationToTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload_delivery_bucket_name: cdktn.stringToTerraform(struct!.payloadDeliveryBucketName),
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationToHclTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload_delivery_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.payloadDeliveryBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.topicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payloadDeliveryBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadDeliveryBucketName = this._payloadDeliveryBucketName;
    }
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payloadDeliveryBucketName = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payloadDeliveryBucketName = value.payloadDeliveryBucketName;
      this._topicArn = value.topicArn;
    }
  }

  // payload_delivery_bucket_name - computed: false, optional: false, required: true
  private _payloadDeliveryBucketName?: string; 
  public get payloadDeliveryBucketName() {
    return this.getStringAttribute('payload_delivery_bucket_name');
  }
  public set payloadDeliveryBucketName(value: string) {
    this._payloadDeliveryBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadDeliveryBucketNameInput() {
    return this._payloadDeliveryBucketName;
  }

  // topic_arn - computed: false, optional: false, required: true
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationOutputReference {
    return new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#message_count BedrockagentcoreMemoryStrategy#message_count}
  */
  readonly messageCount: number;
}

export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerToTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_count: cdktn.numberToTerraform(struct!.messageCount),
  }
}


export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerToHclTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_count: {
      value: cdktn.numberToHclTerraform(struct!.messageCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageCount = this._messageCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageCount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageCount = value.messageCount;
    }
  }

  // message_count - computed: false, optional: false, required: true
  private _messageCount?: number; 
  public get messageCount() {
    return this.getNumberAttribute('message_count');
  }
  public set messageCount(value: number) {
    this._messageCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageCountInput() {
    return this._messageCount;
  }
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerOutputReference {
    return new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#idle_session_timeout BedrockagentcoreMemoryStrategy#idle_session_timeout}
  */
  readonly idleSessionTimeout: number;
}

export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerToTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_session_timeout: cdktn.numberToTerraform(struct!.idleSessionTimeout),
  }
}


export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerToHclTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_session_timeout: {
      value: cdktn.numberToHclTerraform(struct!.idleSessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleSessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleSessionTimeout = this._idleSessionTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleSessionTimeout = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleSessionTimeout = value.idleSessionTimeout;
    }
  }

  // idle_session_timeout - computed: false, optional: false, required: true
  private _idleSessionTimeout?: number; 
  public get idleSessionTimeout() {
    return this.getNumberAttribute('idle_session_timeout');
  }
  public set idleSessionTimeout(value: number) {
    this._idleSessionTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSessionTimeoutInput() {
    return this._idleSessionTimeout;
  }
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerOutputReference {
    return new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#token_count BedrockagentcoreMemoryStrategy#token_count}
  */
  readonly tokenCount: number;
}

export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerToTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    token_count: cdktn.numberToTerraform(struct!.tokenCount),
  }
}


export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerToHclTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    token_count: {
      value: cdktn.numberToHclTerraform(struct!.tokenCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenCount = this._tokenCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tokenCount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tokenCount = value.tokenCount;
    }
  }

  // token_count - computed: false, optional: false, required: true
  private _tokenCount?: number; 
  public get tokenCount() {
    return this.getNumberAttribute('token_count');
  }
  public set tokenCount(value: number) {
    this._tokenCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenCountInput() {
    return this._tokenCount;
  }
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerOutputReference {
    return new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions {
  /**
  * message_based_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#message_based_trigger BedrockagentcoreMemoryStrategy#message_based_trigger}
  */
  readonly messageBasedTrigger?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger[] | cdktn.IResolvable;
  /**
  * time_based_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#time_based_trigger BedrockagentcoreMemoryStrategy#time_based_trigger}
  */
  readonly timeBasedTrigger?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger[] | cdktn.IResolvable;
  /**
  * token_based_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#token_based_trigger BedrockagentcoreMemoryStrategy#token_based_trigger}
  */
  readonly tokenBasedTrigger?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsToTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_based_trigger: cdktn.listMapper(bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerToTerraform, true)(struct!.messageBasedTrigger),
    time_based_trigger: cdktn.listMapper(bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerToTerraform, true)(struct!.timeBasedTrigger),
    token_based_trigger: cdktn.listMapper(bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerToTerraform, true)(struct!.tokenBasedTrigger),
  }
}


export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsToHclTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_based_trigger: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerToHclTerraform, true)(struct!.messageBasedTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerList",
    },
    time_based_trigger: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerToHclTerraform, true)(struct!.timeBasedTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerList",
    },
    token_based_trigger: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerToHclTerraform, true)(struct!.tokenBasedTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageBasedTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageBasedTrigger = this._messageBasedTrigger?.internalValue;
    }
    if (this._timeBasedTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBasedTrigger = this._timeBasedTrigger?.internalValue;
    }
    if (this._tokenBasedTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenBasedTrigger = this._tokenBasedTrigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageBasedTrigger.internalValue = undefined;
      this._timeBasedTrigger.internalValue = undefined;
      this._tokenBasedTrigger.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageBasedTrigger.internalValue = value.messageBasedTrigger;
      this._timeBasedTrigger.internalValue = value.timeBasedTrigger;
      this._tokenBasedTrigger.internalValue = value.tokenBasedTrigger;
    }
  }

  // message_based_trigger - computed: false, optional: true, required: false
  private _messageBasedTrigger = new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerList(this, "message_based_trigger", false);
  public get messageBasedTrigger() {
    return this._messageBasedTrigger;
  }
  public putMessageBasedTrigger(value: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger[] | cdktn.IResolvable) {
    this._messageBasedTrigger.internalValue = value;
  }
  public resetMessageBasedTrigger() {
    this._messageBasedTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBasedTriggerInput() {
    return this._messageBasedTrigger.internalValue;
  }

  // time_based_trigger - computed: false, optional: true, required: false
  private _timeBasedTrigger = new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerList(this, "time_based_trigger", false);
  public get timeBasedTrigger() {
    return this._timeBasedTrigger;
  }
  public putTimeBasedTrigger(value: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger[] | cdktn.IResolvable) {
    this._timeBasedTrigger.internalValue = value;
  }
  public resetTimeBasedTrigger() {
    this._timeBasedTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBasedTriggerInput() {
    return this._timeBasedTrigger.internalValue;
  }

  // token_based_trigger - computed: false, optional: true, required: false
  private _tokenBasedTrigger = new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerList(this, "token_based_trigger", false);
  public get tokenBasedTrigger() {
    return this._tokenBasedTrigger;
  }
  public putTokenBasedTrigger(value: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger[] | cdktn.IResolvable) {
    this._tokenBasedTrigger.internalValue = value;
  }
  public resetTokenBasedTrigger() {
    this._tokenBasedTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenBasedTriggerInput() {
    return this._tokenBasedTrigger.internalValue;
  }
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsOutputReference {
    return new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#historical_context_window_size BedrockagentcoreMemoryStrategy#historical_context_window_size}
  */
  readonly historicalContextWindowSize?: number;
  /**
  * invocation_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#invocation_configuration BedrockagentcoreMemoryStrategy#invocation_configuration}
  */
  readonly invocationConfiguration?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration[] | cdktn.IResolvable;
  /**
  * trigger_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#trigger_conditions BedrockagentcoreMemoryStrategy#trigger_conditions}
  */
  readonly triggerConditions?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationToTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    historical_context_window_size: cdktn.numberToTerraform(struct!.historicalContextWindowSize),
    invocation_configuration: cdktn.listMapper(bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationToTerraform, true)(struct!.invocationConfiguration),
    trigger_conditions: cdktn.listMapper(bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsToTerraform, true)(struct!.triggerConditions),
  }
}


export function bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationToHclTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    historical_context_window_size: {
      value: cdktn.numberToHclTerraform(struct!.historicalContextWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invocation_configuration: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationToHclTerraform, true)(struct!.invocationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationList",
    },
    trigger_conditions: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsToHclTerraform, true)(struct!.triggerConditions),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._historicalContextWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.historicalContextWindowSize = this._historicalContextWindowSize;
    }
    if (this._invocationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationConfiguration = this._invocationConfiguration?.internalValue;
    }
    if (this._triggerConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerConditions = this._triggerConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._historicalContextWindowSize = undefined;
      this._invocationConfiguration.internalValue = undefined;
      this._triggerConditions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._historicalContextWindowSize = value.historicalContextWindowSize;
      this._invocationConfiguration.internalValue = value.invocationConfiguration;
      this._triggerConditions.internalValue = value.triggerConditions;
    }
  }

  // historical_context_window_size - computed: true, optional: true, required: false
  private _historicalContextWindowSize?: number; 
  public get historicalContextWindowSize() {
    return this.getNumberAttribute('historical_context_window_size');
  }
  public set historicalContextWindowSize(value: number) {
    this._historicalContextWindowSize = value;
  }
  public resetHistoricalContextWindowSize() {
    this._historicalContextWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historicalContextWindowSizeInput() {
    return this._historicalContextWindowSize;
  }

  // trigger_conditions_actual - computed: true, optional: false, required: false
  private _triggerConditionsActual = new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsActualList(this, "trigger_conditions_actual", false);
  public get triggerConditionsActual() {
    return this._triggerConditionsActual;
  }

  // invocation_configuration - computed: false, optional: true, required: false
  private _invocationConfiguration = new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationList(this, "invocation_configuration", false);
  public get invocationConfiguration() {
    return this._invocationConfiguration;
  }
  public putInvocationConfiguration(value: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration[] | cdktn.IResolvable) {
    this._invocationConfiguration.internalValue = value;
  }
  public resetInvocationConfiguration() {
    this._invocationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationConfigurationInput() {
    return this._invocationConfiguration.internalValue;
  }

  // trigger_conditions - computed: false, optional: true, required: false
  private _triggerConditions = new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsList(this, "trigger_conditions", false);
  public get triggerConditions() {
    return this._triggerConditions;
  }
  public putTriggerConditions(value: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions[] | cdktn.IResolvable) {
    this._triggerConditions.internalValue = value;
  }
  public resetTriggerConditions() {
    this._triggerConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerConditionsInput() {
    return this._triggerConditions.internalValue;
  }
}

export class BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationOutputReference {
    return new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#type BedrockagentcoreMemoryStrategy#type}
  */
  readonly type: string;
  /**
  * consolidation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#consolidation BedrockagentcoreMemoryStrategy#consolidation}
  */
  readonly consolidation?: BedrockagentcoreMemoryStrategyConfigurationConsolidation[] | cdktn.IResolvable;
  /**
  * extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#extraction BedrockagentcoreMemoryStrategy#extraction}
  */
  readonly extraction?: BedrockagentcoreMemoryStrategyConfigurationExtraction[] | cdktn.IResolvable;
  /**
  * reflection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#reflection BedrockagentcoreMemoryStrategy#reflection}
  */
  readonly reflection?: BedrockagentcoreMemoryStrategyConfigurationReflection[] | cdktn.IResolvable;
  /**
  * self_managed_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#self_managed_configuration BedrockagentcoreMemoryStrategy#self_managed_configuration}
  */
  readonly selfManagedConfiguration?: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryStrategyConfigurationToTerraform(struct?: BedrockagentcoreMemoryStrategyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    consolidation: cdktn.listMapper(bedrockagentcoreMemoryStrategyConfigurationConsolidationToTerraform, true)(struct!.consolidation),
    extraction: cdktn.listMapper(bedrockagentcoreMemoryStrategyConfigurationExtractionToTerraform, true)(struct!.extraction),
    reflection: cdktn.listMapper(bedrockagentcoreMemoryStrategyConfigurationReflectionToTerraform, true)(struct!.reflection),
    self_managed_configuration: cdktn.listMapper(bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationToTerraform, true)(struct!.selfManagedConfiguration),
  }
}


export function bedrockagentcoreMemoryStrategyConfigurationToHclTerraform(struct?: BedrockagentcoreMemoryStrategyConfiguration | cdktn.IResolvable): any {
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
    consolidation: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyConfigurationConsolidationToHclTerraform, true)(struct!.consolidation),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyConfigurationConsolidationList",
    },
    extraction: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyConfigurationExtractionToHclTerraform, true)(struct!.extraction),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyConfigurationExtractionList",
    },
    reflection: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyConfigurationReflectionToHclTerraform, true)(struct!.reflection),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyConfigurationReflectionList",
    },
    self_managed_configuration: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationToHclTerraform, true)(struct!.selfManagedConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._consolidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolidation = this._consolidation?.internalValue;
    }
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    if (this._reflection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reflection = this._reflection?.internalValue;
    }
    if (this._selfManagedConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfManagedConfiguration = this._selfManagedConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._consolidation.internalValue = undefined;
      this._extraction.internalValue = undefined;
      this._reflection.internalValue = undefined;
      this._selfManagedConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._consolidation.internalValue = value.consolidation;
      this._extraction.internalValue = value.extraction;
      this._reflection.internalValue = value.reflection;
      this._selfManagedConfiguration.internalValue = value.selfManagedConfiguration;
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

  // consolidation - computed: false, optional: true, required: false
  private _consolidation = new BedrockagentcoreMemoryStrategyConfigurationConsolidationList(this, "consolidation", false);
  public get consolidation() {
    return this._consolidation;
  }
  public putConsolidation(value: BedrockagentcoreMemoryStrategyConfigurationConsolidation[] | cdktn.IResolvable) {
    this._consolidation.internalValue = value;
  }
  public resetConsolidation() {
    this._consolidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidationInput() {
    return this._consolidation.internalValue;
  }

  // extraction - computed: false, optional: true, required: false
  private _extraction = new BedrockagentcoreMemoryStrategyConfigurationExtractionList(this, "extraction", false);
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: BedrockagentcoreMemoryStrategyConfigurationExtraction[] | cdktn.IResolvable) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }

  // reflection - computed: false, optional: true, required: false
  private _reflection = new BedrockagentcoreMemoryStrategyConfigurationReflectionList(this, "reflection", false);
  public get reflection() {
    return this._reflection;
  }
  public putReflection(value: BedrockagentcoreMemoryStrategyConfigurationReflection[] | cdktn.IResolvable) {
    this._reflection.internalValue = value;
  }
  public resetReflection() {
    this._reflection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reflectionInput() {
    return this._reflection.internalValue;
  }

  // self_managed_configuration - computed: false, optional: true, required: false
  private _selfManagedConfiguration = new BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfigurationList(this, "self_managed_configuration", false);
  public get selfManagedConfiguration() {
    return this._selfManagedConfiguration;
  }
  public putSelfManagedConfiguration(value: BedrockagentcoreMemoryStrategyConfigurationSelfManagedConfiguration[] | cdktn.IResolvable) {
    this._selfManagedConfiguration.internalValue = value;
  }
  public resetSelfManagedConfiguration() {
    this._selfManagedConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedConfigurationInput() {
    return this._selfManagedConfiguration.internalValue;
  }
}

export class BedrockagentcoreMemoryStrategyConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyConfigurationOutputReference {
    return new BedrockagentcoreMemoryStrategyConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#max_value BedrockagentcoreMemoryStrategy#max_value}
  */
  readonly maxValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#min_value BedrockagentcoreMemoryStrategy#min_value}
  */
  readonly minValue?: number;
}

export function bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.numberToTerraform(struct!.maxValue),
    min_value: cdktn.numberToTerraform(struct!.minValue),
  }
}


export function bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktn.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
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
    }
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}

export class BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference {
    return new BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#allowed_values BedrockagentcoreMemoryStrategy#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#max_items BedrockagentcoreMemoryStrategy#max_items}
  */
  readonly maxItems?: number;
}

export function bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    max_items: cdktn.numberToTerraform(struct!.maxItems),
  }
}


export function bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_items: {
      value: cdktn.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._maxItems = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._maxItems = value.maxItems;
    }
  }

  // allowed_values - computed: false, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }
}

export class BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference {
    return new BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#allowed_values BedrockagentcoreMemoryStrategy#allowed_values}
  */
  readonly allowedValues: string[];
}

export function bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
  }
}


export function bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
    }
  }

  // allowed_values - computed: false, optional: false, required: true
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }
}

export class BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference {
    return new BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation {
  /**
  * number_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#number_validation BedrockagentcoreMemoryStrategy#number_validation}
  */
  readonly numberValidation?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation[] | cdktn.IResolvable;
  /**
  * string_list_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#string_list_validation BedrockagentcoreMemoryStrategy#string_list_validation}
  */
  readonly stringListValidation?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation[] | cdktn.IResolvable;
  /**
  * string_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#string_validation BedrockagentcoreMemoryStrategy#string_validation}
  */
  readonly stringValidation?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_validation: cdktn.listMapper(bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform, true)(struct!.numberValidation),
    string_list_validation: cdktn.listMapper(bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform, true)(struct!.stringListValidation),
    string_validation: cdktn.listMapper(bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform, true)(struct!.stringValidation),
  }
}


export function bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_validation: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform, true)(struct!.numberValidation),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationList",
    },
    string_list_validation: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform, true)(struct!.stringListValidation),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationList",
    },
    string_validation: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform, true)(struct!.stringValidation),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberValidation = this._numberValidation?.internalValue;
    }
    if (this._stringListValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValidation = this._stringListValidation?.internalValue;
    }
    if (this._stringValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValidation = this._stringValidation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = undefined;
      this._stringListValidation.internalValue = undefined;
      this._stringValidation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = value.numberValidation;
      this._stringListValidation.internalValue = value.stringListValidation;
      this._stringValidation.internalValue = value.stringValidation;
    }
  }

  // number_validation - computed: false, optional: true, required: false
  private _numberValidation = new BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationList(this, "number_validation", false);
  public get numberValidation() {
    return this._numberValidation;
  }
  public putNumberValidation(value: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation[] | cdktn.IResolvable) {
    this._numberValidation.internalValue = value;
  }
  public resetNumberValidation() {
    this._numberValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberValidationInput() {
    return this._numberValidation.internalValue;
  }

  // string_list_validation - computed: false, optional: true, required: false
  private _stringListValidation = new BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationList(this, "string_list_validation", false);
  public get stringListValidation() {
    return this._stringListValidation;
  }
  public putStringListValidation(value: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation[] | cdktn.IResolvable) {
    this._stringListValidation.internalValue = value;
  }
  public resetStringListValidation() {
    this._stringListValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValidationInput() {
    return this._stringListValidation.internalValue;
  }

  // string_validation - computed: false, optional: true, required: false
  private _stringValidation = new BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationList(this, "string_validation", false);
  public get stringValidation() {
    return this._stringValidation;
  }
  public putStringValidation(value: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation[] | cdktn.IResolvable) {
    this._stringValidation.internalValue = value;
  }
  public resetStringValidation() {
    this._stringValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValidationInput() {
    return this._stringValidation.internalValue;
  }
}

export class BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference {
    return new BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#definition BedrockagentcoreMemoryStrategy#definition}
  */
  readonly definition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#llm_extraction_instruction BedrockagentcoreMemoryStrategy#llm_extraction_instruction}
  */
  readonly llmExtractionInstruction?: string;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#validation BedrockagentcoreMemoryStrategy#validation}
  */
  readonly validation?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    llm_extraction_instruction: cdktn.stringToTerraform(struct!.llmExtractionInstruction),
    validation: cdktn.listMapper(bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform, true)(struct!.validation),
  }
}


export function bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable): any {
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
    llm_extraction_instruction: {
      value: cdktn.stringToHclTerraform(struct!.llmExtractionInstruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform, true)(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._llmExtractionInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionInstruction = this._llmExtractionInstruction;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._llmExtractionInstruction = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._llmExtractionInstruction = value.llmExtractionInstruction;
      this._validation.internalValue = value.validation;
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

  // llm_extraction_instruction - computed: true, optional: true, required: false
  private _llmExtractionInstruction?: string; 
  public get llmExtractionInstruction() {
    return this.getStringAttribute('llm_extraction_instruction');
  }
  public set llmExtractionInstruction(value: string) {
    this._llmExtractionInstruction = value;
  }
  public resetLlmExtractionInstruction() {
    this._llmExtractionInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionInstructionInput() {
    return this._llmExtractionInstruction;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationList(this, "validation", false);
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation[] | cdktn.IResolvable) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}

export class BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference {
    return new BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig {
  /**
  * llm_extraction_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#llm_extraction_config BedrockagentcoreMemoryStrategy#llm_extraction_config}
  */
  readonly llmExtractionConfig?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    llm_extraction_config: cdktn.listMapper(bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform, true)(struct!.llmExtractionConfig),
  }
}


export function bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    llm_extraction_config: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform, true)(struct!.llmExtractionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._llmExtractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionConfig = this._llmExtractionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = value.llmExtractionConfig;
    }
  }

  // llm_extraction_config - computed: false, optional: true, required: false
  private _llmExtractionConfig = new BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigList(this, "llm_extraction_config", false);
  public get llmExtractionConfig() {
    return this._llmExtractionConfig;
  }
  public putLlmExtractionConfig(value: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig[] | cdktn.IResolvable) {
    this._llmExtractionConfig.internalValue = value;
  }
  public resetLlmExtractionConfig() {
    this._llmExtractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionConfigInput() {
    return this._llmExtractionConfig.internalValue;
  }
}

export class BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference {
    return new BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#extraction_type BedrockagentcoreMemoryStrategy#extraction_type}
  */
  readonly extractionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#key BedrockagentcoreMemoryStrategy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#type BedrockagentcoreMemoryStrategy#type}
  */
  readonly type?: string;
  /**
  * extraction_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#extraction_config BedrockagentcoreMemoryStrategy#extraction_config}
  */
  readonly extractionConfig?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaToTerraform(struct?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extraction_type: cdktn.stringToTerraform(struct!.extractionType),
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
    extraction_config: cdktn.listMapper(bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform, true)(struct!.extractionConfig),
  }
}


export function bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaToHclTerraform(struct?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extraction_type: {
      value: cdktn.stringToHclTerraform(struct!.extractionType),
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extraction_config: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform, true)(struct!.extractionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extractionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractionType = this._extractionType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._extractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractionConfig = this._extractionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extractionType = undefined;
      this._key = undefined;
      this._type = undefined;
      this._extractionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extractionType = value.extractionType;
      this._key = value.key;
      this._type = value.type;
      this._extractionConfig.internalValue = value.extractionConfig;
    }
  }

  // extraction_type - computed: true, optional: true, required: false
  private _extractionType?: string; 
  public get extractionType() {
    return this.getStringAttribute('extraction_type');
  }
  public set extractionType(value: string) {
    this._extractionType = value;
  }
  public resetExtractionType() {
    this._extractionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionTypeInput() {
    return this._extractionType;
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // extraction_config - computed: false, optional: true, required: false
  private _extractionConfig = new BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigList(this, "extraction_config", false);
  public get extractionConfig() {
    return this._extractionConfig;
  }
  public putExtractionConfig(value: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig[] | cdktn.IResolvable) {
    this._extractionConfig.internalValue = value;
  }
  public resetExtractionConfig() {
    this._extractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionConfigInput() {
    return this._extractionConfig.internalValue;
  }
}

export class BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference {
    return new BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyMemoryRecordSchema {
  /**
  * metadata_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#metadata_schema BedrockagentcoreMemoryStrategy#metadata_schema}
  */
  readonly metadataSchema?: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryStrategyMemoryRecordSchemaToTerraform(struct?: BedrockagentcoreMemoryStrategyMemoryRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_schema: cdktn.listMapper(bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaToTerraform, true)(struct!.metadataSchema),
  }
}


export function bedrockagentcoreMemoryStrategyMemoryRecordSchemaToHclTerraform(struct?: BedrockagentcoreMemoryStrategyMemoryRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_schema: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaToHclTerraform, true)(struct!.metadataSchema),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyMemoryRecordSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyMemoryRecordSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSchema = this._metadataSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyMemoryRecordSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = value.metadataSchema;
    }
  }

  // metadata_schema - computed: false, optional: true, required: false
  private _metadataSchema = new BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchemaList(this, "metadata_schema", false);
  public get metadataSchema() {
    return this._metadataSchema;
  }
  public putMetadataSchema(value: BedrockagentcoreMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable) {
    this._metadataSchema.internalValue = value;
  }
  public resetMetadataSchema() {
    this._metadataSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSchemaInput() {
    return this._metadataSchema.internalValue;
  }
}

export class BedrockagentcoreMemoryStrategyMemoryRecordSchemaList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyMemoryRecordSchema[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyMemoryRecordSchemaOutputReference {
    return new BedrockagentcoreMemoryStrategyMemoryRecordSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyReflectionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#namespace_templates BedrockagentcoreMemoryStrategy#namespace_templates}
  */
  readonly namespaceTemplates: string[];
}

export function bedrockagentcoreMemoryStrategyReflectionConfigurationToTerraform(struct?: BedrockagentcoreMemoryStrategyReflectionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
  }
}


export function bedrockagentcoreMemoryStrategyReflectionConfigurationToHclTerraform(struct?: BedrockagentcoreMemoryStrategyReflectionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    namespace_templates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyReflectionConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStrategyReflectionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceTemplates = this._namespaceTemplates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyReflectionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceTemplates = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceTemplates = value.namespaceTemplates;
    }
  }

  // namespace_templates - computed: false, optional: false, required: true
  private _namespaceTemplates?: string[]; 
  public get namespaceTemplates() {
    return cdktn.Fn.tolist(this.getListAttribute('namespace_templates'));
  }
  public set namespaceTemplates(value: string[]) {
    this._namespaceTemplates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplatesInput() {
    return this._namespaceTemplates;
  }
}

export class BedrockagentcoreMemoryStrategyReflectionConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyReflectionConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStrategyReflectionConfigurationOutputReference {
    return new BedrockagentcoreMemoryStrategyReflectionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#create BedrockagentcoreMemoryStrategy#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#delete BedrockagentcoreMemoryStrategy#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#update BedrockagentcoreMemoryStrategy#update}
  */
  readonly update?: string;
}

export function bedrockagentcoreMemoryStrategyTimeoutsToTerraform(struct?: BedrockagentcoreMemoryStrategyTimeouts | cdktn.IResolvable): any {
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


export function bedrockagentcoreMemoryStrategyTimeoutsToHclTerraform(struct?: BedrockagentcoreMemoryStrategyTimeouts | cdktn.IResolvable): any {
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

export class BedrockagentcoreMemoryStrategyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryStrategyTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreMemoryStrategyTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy aws_bedrockagentcore_memory_strategy}
*/
export class BedrockagentcoreMemoryStrategy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_memory_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentcoreMemoryStrategy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreMemoryStrategy to import
  * @param importFromId The id of the existing BedrockagentcoreMemoryStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreMemoryStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_memory_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/bedrockagentcore_memory_strategy aws_bedrockagentcore_memory_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreMemoryStrategyConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreMemoryStrategyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagentcore_memory_strategy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.62.0',
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
    this._memoryExecutionRoleArn = config.memoryExecutionRoleArn;
    this._memoryId = config.memoryId;
    this._name = config.name;
    this._namespaceTemplates = config.namespaceTemplates;
    this._namespaces = config.namespaces;
    this._region = config.region;
    this._type = config.type;
    this._configuration.internalValue = config.configuration;
    this._memoryRecordSchema.internalValue = config.memoryRecordSchema;
    this._reflectionConfiguration.internalValue = config.reflectionConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // memory_execution_role_arn - computed: false, optional: true, required: false
  private _memoryExecutionRoleArn?: string; 
  public get memoryExecutionRoleArn() {
    return this.getStringAttribute('memory_execution_role_arn');
  }
  public set memoryExecutionRoleArn(value: string) {
    this._memoryExecutionRoleArn = value;
  }
  public resetMemoryExecutionRoleArn() {
    this._memoryExecutionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryExecutionRoleArnInput() {
    return this._memoryExecutionRoleArn;
  }

  // memory_id - computed: false, optional: false, required: true
  private _memoryId?: string; 
  public get memoryId() {
    return this.getStringAttribute('memory_id');
  }
  public set memoryId(value: string) {
    this._memoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryIdInput() {
    return this._memoryId;
  }

  // memory_strategy_id - computed: true, optional: false, required: false
  public get memoryStrategyId() {
    return this.getStringAttribute('memory_strategy_id');
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

  // namespace_templates - computed: true, optional: true, required: false
  private _namespaceTemplates?: string[]; 
  public get namespaceTemplates() {
    return cdktn.Fn.tolist(this.getListAttribute('namespace_templates'));
  }
  public set namespaceTemplates(value: string[]) {
    this._namespaceTemplates = value;
  }
  public resetNamespaceTemplates() {
    this._namespaceTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplatesInput() {
    return this._namespaceTemplates;
  }

  // namespaces - computed: true, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return cdktn.Fn.tolist(this.getListAttribute('namespaces'));
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
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
  private _configuration = new BedrockagentcoreMemoryStrategyConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: BedrockagentcoreMemoryStrategyConfiguration[] | cdktn.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // memory_record_schema - computed: false, optional: true, required: false
  private _memoryRecordSchema = new BedrockagentcoreMemoryStrategyMemoryRecordSchemaList(this, "memory_record_schema", false);
  public get memoryRecordSchema() {
    return this._memoryRecordSchema;
  }
  public putMemoryRecordSchema(value: BedrockagentcoreMemoryStrategyMemoryRecordSchema[] | cdktn.IResolvable) {
    this._memoryRecordSchema.internalValue = value;
  }
  public resetMemoryRecordSchema() {
    this._memoryRecordSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRecordSchemaInput() {
    return this._memoryRecordSchema.internalValue;
  }

  // reflection_configuration - computed: false, optional: true, required: false
  private _reflectionConfiguration = new BedrockagentcoreMemoryStrategyReflectionConfigurationList(this, "reflection_configuration", false);
  public get reflectionConfiguration() {
    return this._reflectionConfiguration;
  }
  public putReflectionConfiguration(value: BedrockagentcoreMemoryStrategyReflectionConfiguration[] | cdktn.IResolvable) {
    this._reflectionConfiguration.internalValue = value;
  }
  public resetReflectionConfiguration() {
    this._reflectionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reflectionConfigurationInput() {
    return this._reflectionConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockagentcoreMemoryStrategyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockagentcoreMemoryStrategyTimeouts) {
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
      memory_execution_role_arn: cdktn.stringToTerraform(this._memoryExecutionRoleArn),
      memory_id: cdktn.stringToTerraform(this._memoryId),
      name: cdktn.stringToTerraform(this._name),
      namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(this._namespaceTemplates),
      namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(this._namespaces),
      region: cdktn.stringToTerraform(this._region),
      type: cdktn.stringToTerraform(this._type),
      configuration: cdktn.listMapper(bedrockagentcoreMemoryStrategyConfigurationToTerraform, true)(this._configuration.internalValue),
      memory_record_schema: cdktn.listMapper(bedrockagentcoreMemoryStrategyMemoryRecordSchemaToTerraform, true)(this._memoryRecordSchema.internalValue),
      reflection_configuration: cdktn.listMapper(bedrockagentcoreMemoryStrategyReflectionConfigurationToTerraform, true)(this._reflectionConfiguration.internalValue),
      timeouts: bedrockagentcoreMemoryStrategyTimeoutsToTerraform(this._timeouts.internalValue),
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
      memory_execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._memoryExecutionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_id: {
        value: cdktn.stringToHclTerraform(this._memoryId),
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
      namespace_templates: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._namespaceTemplates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      namespaces: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._namespaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyConfigurationToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreMemoryStrategyConfigurationList",
      },
      memory_record_schema: {
        value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyMemoryRecordSchemaToHclTerraform, true)(this._memoryRecordSchema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreMemoryStrategyMemoryRecordSchemaList",
      },
      reflection_configuration: {
        value: cdktn.listMapperHcl(bedrockagentcoreMemoryStrategyReflectionConfigurationToHclTerraform, true)(this._reflectionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreMemoryStrategyReflectionConfigurationList",
      },
      timeouts: {
        value: bedrockagentcoreMemoryStrategyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreMemoryStrategyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
