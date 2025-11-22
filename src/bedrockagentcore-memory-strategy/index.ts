/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BedrockagentcoreMemoryStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#description BedrockagentcoreMemoryStrategy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#memory_execution_role_arn BedrockagentcoreMemoryStrategy#memory_execution_role_arn}
  */
  readonly memoryExecutionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#memory_id BedrockagentcoreMemoryStrategy#memory_id}
  */
  readonly memoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#name BedrockagentcoreMemoryStrategy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#namespaces BedrockagentcoreMemoryStrategy#namespaces}
  */
  readonly namespaces: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#region BedrockagentcoreMemoryStrategy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#type BedrockagentcoreMemoryStrategy#type}
  */
  readonly type: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#configuration BedrockagentcoreMemoryStrategy#configuration}
  */
  readonly configuration?: BedrockagentcoreMemoryStrategyConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#timeouts BedrockagentcoreMemoryStrategy#timeouts}
  */
  readonly timeouts?: BedrockagentcoreMemoryStrategyTimeouts;
}
export interface BedrockagentcoreMemoryStrategyConfigurationConsolidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#append_to_prompt BedrockagentcoreMemoryStrategy#append_to_prompt}
  */
  readonly appendToPrompt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#model_id BedrockagentcoreMemoryStrategy#model_id}
  */
  readonly modelId: string;
}

export function bedrockagentcoreMemoryStrategyConfigurationConsolidationToTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationConsolidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append_to_prompt: cdktf.stringToTerraform(struct!.appendToPrompt),
    model_id: cdktf.stringToTerraform(struct!.modelId),
  }
}


export function bedrockagentcoreMemoryStrategyConfigurationConsolidationToHclTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationConsolidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append_to_prompt: {
      value: cdktf.stringToHclTerraform(struct!.appendToPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id: {
      value: cdktf.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyConfigurationConsolidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreMemoryStrategyConfigurationConsolidation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreMemoryStrategyConfigurationConsolidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendToPrompt = undefined;
      this._modelId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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

export class BedrockagentcoreMemoryStrategyConfigurationConsolidationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyConfigurationConsolidation[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#append_to_prompt BedrockagentcoreMemoryStrategy#append_to_prompt}
  */
  readonly appendToPrompt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#model_id BedrockagentcoreMemoryStrategy#model_id}
  */
  readonly modelId: string;
}

export function bedrockagentcoreMemoryStrategyConfigurationExtractionToTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationExtraction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append_to_prompt: cdktf.stringToTerraform(struct!.appendToPrompt),
    model_id: cdktf.stringToTerraform(struct!.modelId),
  }
}


export function bedrockagentcoreMemoryStrategyConfigurationExtractionToHclTerraform(struct?: BedrockagentcoreMemoryStrategyConfigurationExtraction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append_to_prompt: {
      value: cdktf.stringToHclTerraform(struct!.appendToPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id: {
      value: cdktf.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreMemoryStrategyConfigurationExtraction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreMemoryStrategyConfigurationExtraction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendToPrompt = undefined;
      this._modelId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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

export class BedrockagentcoreMemoryStrategyConfigurationExtractionList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyConfigurationExtraction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference {
    return new BedrockagentcoreMemoryStrategyConfigurationExtractionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#type BedrockagentcoreMemoryStrategy#type}
  */
  readonly type: string;
  /**
  * consolidation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#consolidation BedrockagentcoreMemoryStrategy#consolidation}
  */
  readonly consolidation?: BedrockagentcoreMemoryStrategyConfigurationConsolidation[] | cdktf.IResolvable;
  /**
  * extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#extraction BedrockagentcoreMemoryStrategy#extraction}
  */
  readonly extraction?: BedrockagentcoreMemoryStrategyConfigurationExtraction[] | cdktf.IResolvable;
}

export function bedrockagentcoreMemoryStrategyConfigurationToTerraform(struct?: BedrockagentcoreMemoryStrategyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    consolidation: cdktf.listMapper(bedrockagentcoreMemoryStrategyConfigurationConsolidationToTerraform, true)(struct!.consolidation),
    extraction: cdktf.listMapper(bedrockagentcoreMemoryStrategyConfigurationExtractionToTerraform, true)(struct!.extraction),
  }
}


export function bedrockagentcoreMemoryStrategyConfigurationToHclTerraform(struct?: BedrockagentcoreMemoryStrategyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consolidation: {
      value: cdktf.listMapperHcl(bedrockagentcoreMemoryStrategyConfigurationConsolidationToHclTerraform, true)(struct!.consolidation),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyConfigurationConsolidationList",
    },
    extraction: {
      value: cdktf.listMapperHcl(bedrockagentcoreMemoryStrategyConfigurationExtractionToHclTerraform, true)(struct!.extraction),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStrategyConfigurationExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreMemoryStrategyConfiguration | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStrategyConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._consolidation.internalValue = undefined;
      this._extraction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._consolidation.internalValue = value.consolidation;
      this._extraction.internalValue = value.extraction;
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
  public putConsolidation(value: BedrockagentcoreMemoryStrategyConfigurationConsolidation[] | cdktf.IResolvable) {
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
  public putExtraction(value: BedrockagentcoreMemoryStrategyConfigurationExtraction[] | cdktf.IResolvable) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }
}

export class BedrockagentcoreMemoryStrategyConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStrategyConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BedrockagentcoreMemoryStrategyConfigurationOutputReference {
    return new BedrockagentcoreMemoryStrategyConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStrategyTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#create BedrockagentcoreMemoryStrategy#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#delete BedrockagentcoreMemoryStrategy#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#update BedrockagentcoreMemoryStrategy#update}
  */
  readonly update?: string;
}

export function bedrockagentcoreMemoryStrategyTimeoutsToTerraform(struct?: BedrockagentcoreMemoryStrategyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function bedrockagentcoreMemoryStrategyTimeoutsToHclTerraform(struct?: BedrockagentcoreMemoryStrategyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStrategyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryStrategyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreMemoryStrategyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy aws_bedrockagentcore_memory_strategy}
*/
export class BedrockagentcoreMemoryStrategy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_memory_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BedrockagentcoreMemoryStrategy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreMemoryStrategy to import
  * @param importFromId The id of the existing BedrockagentcoreMemoryStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreMemoryStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_memory_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_memory_strategy aws_bedrockagentcore_memory_strategy} Resource
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
        providerVersion: '6.22.1',
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
    this._namespaces = config.namespaces;
    this._region = config.region;
    this._type = config.type;
    this._configuration.internalValue = config.configuration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // namespaces - computed: false, optional: false, required: true
  private _namespaces?: string[]; 
  public get namespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('namespaces'));
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
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
  public putConfiguration(value: BedrockagentcoreMemoryStrategyConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
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
      description: cdktf.stringToTerraform(this._description),
      memory_execution_role_arn: cdktf.stringToTerraform(this._memoryExecutionRoleArn),
      memory_id: cdktf.stringToTerraform(this._memoryId),
      name: cdktf.stringToTerraform(this._name),
      namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._namespaces),
      region: cdktf.stringToTerraform(this._region),
      type: cdktf.stringToTerraform(this._type),
      configuration: cdktf.listMapper(bedrockagentcoreMemoryStrategyConfigurationToTerraform, true)(this._configuration.internalValue),
      timeouts: bedrockagentcoreMemoryStrategyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_execution_role_arn: {
        value: cdktf.stringToHclTerraform(this._memoryExecutionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_id: {
        value: cdktf.stringToHclTerraform(this._memoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._namespaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktf.listMapperHcl(bedrockagentcoreMemoryStrategyConfigurationToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreMemoryStrategyConfigurationList",
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
