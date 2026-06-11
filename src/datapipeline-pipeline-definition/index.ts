/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatapipelinePipelineDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#pipeline_id DatapipelinePipelineDefinition#pipeline_id}
  */
  readonly pipelineId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#region DatapipelinePipelineDefinition#region}
  */
  readonly region?: string;
  /**
  * parameter_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#parameter_object DatapipelinePipelineDefinition#parameter_object}
  */
  readonly parameterObject?: DatapipelinePipelineDefinitionParameterObject[] | cdktn.IResolvable;
  /**
  * parameter_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#parameter_value DatapipelinePipelineDefinition#parameter_value}
  */
  readonly parameterValue?: DatapipelinePipelineDefinitionParameterValue[] | cdktn.IResolvable;
  /**
  * pipeline_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#pipeline_object DatapipelinePipelineDefinition#pipeline_object}
  */
  readonly pipelineObject: DatapipelinePipelineDefinitionPipelineObject[] | cdktn.IResolvable;
}
export interface DatapipelinePipelineDefinitionParameterObjectAttribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}
  */
  readonly stringValue: string;
}

export function datapipelinePipelineDefinitionParameterObjectAttributeToTerraform(struct?: DatapipelinePipelineDefinitionParameterObjectAttribute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function datapipelinePipelineDefinitionParameterObjectAttributeToHclTerraform(struct?: DatapipelinePipelineDefinitionParameterObjectAttribute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatapipelinePipelineDefinitionParameterObjectAttribute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatapipelinePipelineDefinitionParameterObjectAttribute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._stringValue = value.stringValue;
    }
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

  // string_value - computed: false, optional: false, required: true
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}

export class DatapipelinePipelineDefinitionParameterObjectAttributeList extends cdktn.ComplexList {
  public internalValue? : DatapipelinePipelineDefinitionParameterObjectAttribute[] | cdktn.IResolvable

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
  public get(index: number): DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference {
    return new DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatapipelinePipelineDefinitionParameterObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#attribute DatapipelinePipelineDefinition#attribute}
  */
  readonly attribute?: DatapipelinePipelineDefinitionParameterObjectAttribute[] | cdktn.IResolvable;
}

export function datapipelinePipelineDefinitionParameterObjectToTerraform(struct?: DatapipelinePipelineDefinitionParameterObject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    attribute: cdktn.listMapper(datapipelinePipelineDefinitionParameterObjectAttributeToTerraform, true)(struct!.attribute),
  }
}


export function datapipelinePipelineDefinitionParameterObjectToHclTerraform(struct?: DatapipelinePipelineDefinitionParameterObject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute: {
      value: cdktn.listMapperHcl(datapipelinePipelineDefinitionParameterObjectAttributeToHclTerraform, true)(struct!.attribute),
      isBlock: true,
      type: "set",
      storageClassType: "DatapipelinePipelineDefinitionParameterObjectAttributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatapipelinePipelineDefinitionParameterObjectOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatapipelinePipelineDefinitionParameterObject | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._attribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatapipelinePipelineDefinitionParameterObject | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._attribute.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._attribute.internalValue = value.attribute;
    }
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

  // attribute - computed: false, optional: true, required: false
  private _attribute = new DatapipelinePipelineDefinitionParameterObjectAttributeList(this, "attribute", true);
  public get attribute() {
    return this._attribute;
  }
  public putAttribute(value: DatapipelinePipelineDefinitionParameterObjectAttribute[] | cdktn.IResolvable) {
    this._attribute.internalValue = value;
  }
  public resetAttribute() {
    this._attribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute.internalValue;
  }
}

export class DatapipelinePipelineDefinitionParameterObjectList extends cdktn.ComplexList {
  public internalValue? : DatapipelinePipelineDefinitionParameterObject[] | cdktn.IResolvable

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
  public get(index: number): DatapipelinePipelineDefinitionParameterObjectOutputReference {
    return new DatapipelinePipelineDefinitionParameterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatapipelinePipelineDefinitionParameterValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}
  */
  readonly stringValue: string;
}

export function datapipelinePipelineDefinitionParameterValueToTerraform(struct?: DatapipelinePipelineDefinitionParameterValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function datapipelinePipelineDefinitionParameterValueToHclTerraform(struct?: DatapipelinePipelineDefinitionParameterValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DatapipelinePipelineDefinitionParameterValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatapipelinePipelineDefinitionParameterValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatapipelinePipelineDefinitionParameterValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._stringValue = value.stringValue;
    }
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

  // string_value - computed: false, optional: false, required: true
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}

export class DatapipelinePipelineDefinitionParameterValueList extends cdktn.ComplexList {
  public internalValue? : DatapipelinePipelineDefinitionParameterValue[] | cdktn.IResolvable

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
  public get(index: number): DatapipelinePipelineDefinitionParameterValueOutputReference {
    return new DatapipelinePipelineDefinitionParameterValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatapipelinePipelineDefinitionPipelineObjectField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#ref_value DatapipelinePipelineDefinition#ref_value}
  */
  readonly refValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}
  */
  readonly stringValue?: string;
}

export function datapipelinePipelineDefinitionPipelineObjectFieldToTerraform(struct?: DatapipelinePipelineDefinitionPipelineObjectField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    ref_value: cdktn.stringToTerraform(struct!.refValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function datapipelinePipelineDefinitionPipelineObjectFieldToHclTerraform(struct?: DatapipelinePipelineDefinitionPipelineObjectField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_value: {
      value: cdktn.stringToHclTerraform(struct!.refValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatapipelinePipelineDefinitionPipelineObjectField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._refValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refValue = this._refValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatapipelinePipelineDefinitionPipelineObjectField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._refValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._refValue = value.refValue;
      this._stringValue = value.stringValue;
    }
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

  // ref_value - computed: false, optional: true, required: false
  private _refValue?: string; 
  public get refValue() {
    return this.getStringAttribute('ref_value');
  }
  public set refValue(value: string) {
    this._refValue = value;
  }
  public resetRefValue() {
    this._refValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refValueInput() {
    return this._refValue;
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

export class DatapipelinePipelineDefinitionPipelineObjectFieldList extends cdktn.ComplexList {
  public internalValue? : DatapipelinePipelineDefinitionPipelineObjectField[] | cdktn.IResolvable

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
  public get(index: number): DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference {
    return new DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatapipelinePipelineDefinitionPipelineObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#name DatapipelinePipelineDefinition#name}
  */
  readonly name: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#field DatapipelinePipelineDefinition#field}
  */
  readonly field?: DatapipelinePipelineDefinitionPipelineObjectField[] | cdktn.IResolvable;
}

export function datapipelinePipelineDefinitionPipelineObjectToTerraform(struct?: DatapipelinePipelineDefinitionPipelineObject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
    field: cdktn.listMapper(datapipelinePipelineDefinitionPipelineObjectFieldToTerraform, true)(struct!.field),
  }
}


export function datapipelinePipelineDefinitionPipelineObjectToHclTerraform(struct?: DatapipelinePipelineDefinitionPipelineObject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
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
    field: {
      value: cdktn.listMapperHcl(datapipelinePipelineDefinitionPipelineObjectFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "set",
      storageClassType: "DatapipelinePipelineDefinitionPipelineObjectFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatapipelinePipelineDefinitionPipelineObjectOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatapipelinePipelineDefinitionPipelineObject | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatapipelinePipelineDefinitionPipelineObject | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._field.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._field.internalValue = value.field;
    }
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

  // field - computed: false, optional: true, required: false
  private _field = new DatapipelinePipelineDefinitionPipelineObjectFieldList(this, "field", true);
  public get field() {
    return this._field;
  }
  public putField(value: DatapipelinePipelineDefinitionPipelineObjectField[] | cdktn.IResolvable) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}

export class DatapipelinePipelineDefinitionPipelineObjectList extends cdktn.ComplexList {
  public internalValue? : DatapipelinePipelineDefinitionPipelineObject[] | cdktn.IResolvable

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
  public get(index: number): DatapipelinePipelineDefinitionPipelineObjectOutputReference {
    return new DatapipelinePipelineDefinitionPipelineObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition}
*/
export class DatapipelinePipelineDefinition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datapipeline_pipeline_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatapipelinePipelineDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatapipelinePipelineDefinition to import
  * @param importFromId The id of the existing DatapipelinePipelineDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatapipelinePipelineDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_datapipeline_pipeline_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatapipelinePipelineDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DatapipelinePipelineDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datapipeline_pipeline_definition',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.50.0',
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
    this._id = config.id;
    this._pipelineId = config.pipelineId;
    this._region = config.region;
    this._parameterObject.internalValue = config.parameterObject;
    this._parameterValue.internalValue = config.parameterValue;
    this._pipelineObject.internalValue = config.pipelineObject;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
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

  // parameter_object - computed: false, optional: true, required: false
  private _parameterObject = new DatapipelinePipelineDefinitionParameterObjectList(this, "parameter_object", true);
  public get parameterObject() {
    return this._parameterObject;
  }
  public putParameterObject(value: DatapipelinePipelineDefinitionParameterObject[] | cdktn.IResolvable) {
    this._parameterObject.internalValue = value;
  }
  public resetParameterObject() {
    this._parameterObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterObjectInput() {
    return this._parameterObject.internalValue;
  }

  // parameter_value - computed: false, optional: true, required: false
  private _parameterValue = new DatapipelinePipelineDefinitionParameterValueList(this, "parameter_value", true);
  public get parameterValue() {
    return this._parameterValue;
  }
  public putParameterValue(value: DatapipelinePipelineDefinitionParameterValue[] | cdktn.IResolvable) {
    this._parameterValue.internalValue = value;
  }
  public resetParameterValue() {
    this._parameterValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue.internalValue;
  }

  // pipeline_object - computed: false, optional: false, required: true
  private _pipelineObject = new DatapipelinePipelineDefinitionPipelineObjectList(this, "pipeline_object", true);
  public get pipelineObject() {
    return this._pipelineObject;
  }
  public putPipelineObject(value: DatapipelinePipelineDefinitionPipelineObject[] | cdktn.IResolvable) {
    this._pipelineObject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineObjectInput() {
    return this._pipelineObject.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      pipeline_id: cdktn.stringToTerraform(this._pipelineId),
      region: cdktn.stringToTerraform(this._region),
      parameter_object: cdktn.listMapper(datapipelinePipelineDefinitionParameterObjectToTerraform, true)(this._parameterObject.internalValue),
      parameter_value: cdktn.listMapper(datapipelinePipelineDefinitionParameterValueToTerraform, true)(this._parameterValue.internalValue),
      pipeline_object: cdktn.listMapper(datapipelinePipelineDefinitionPipelineObjectToTerraform, true)(this._pipelineObject.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_id: {
        value: cdktn.stringToHclTerraform(this._pipelineId),
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
      parameter_object: {
        value: cdktn.listMapperHcl(datapipelinePipelineDefinitionParameterObjectToHclTerraform, true)(this._parameterObject.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatapipelinePipelineDefinitionParameterObjectList",
      },
      parameter_value: {
        value: cdktn.listMapperHcl(datapipelinePipelineDefinitionParameterValueToHclTerraform, true)(this._parameterValue.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatapipelinePipelineDefinitionParameterValueList",
      },
      pipeline_object: {
        value: cdktn.listMapperHcl(datapipelinePipelineDefinitionPipelineObjectToHclTerraform, true)(this._pipelineObject.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatapipelinePipelineDefinitionPipelineObjectList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
