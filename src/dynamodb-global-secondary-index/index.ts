/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamodbGlobalSecondaryIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#index_name DynamodbGlobalSecondaryIndex#index_name}
  */
  readonly indexName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#region DynamodbGlobalSecondaryIndex#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#table_name DynamodbGlobalSecondaryIndex#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#warm_throughput DynamodbGlobalSecondaryIndex#warm_throughput}
  */
  readonly warmThroughput?: DynamodbGlobalSecondaryIndexWarmThroughput;
  /**
  * key_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#key_schema DynamodbGlobalSecondaryIndex#key_schema}
  */
  readonly keySchema?: DynamodbGlobalSecondaryIndexKeySchema[] | cdktf.IResolvable;
  /**
  * on_demand_throughput block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#on_demand_throughput DynamodbGlobalSecondaryIndex#on_demand_throughput}
  */
  readonly onDemandThroughput?: DynamodbGlobalSecondaryIndexOnDemandThroughput[] | cdktf.IResolvable;
  /**
  * projection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#projection DynamodbGlobalSecondaryIndex#projection}
  */
  readonly projection?: DynamodbGlobalSecondaryIndexProjection[] | cdktf.IResolvable;
  /**
  * provisioned_throughput block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#provisioned_throughput DynamodbGlobalSecondaryIndex#provisioned_throughput}
  */
  readonly provisionedThroughput?: DynamodbGlobalSecondaryIndexProvisionedThroughput[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#timeouts DynamodbGlobalSecondaryIndex#timeouts}
  */
  readonly timeouts?: DynamodbGlobalSecondaryIndexTimeouts;
}
export interface DynamodbGlobalSecondaryIndexWarmThroughput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#read_units_per_second DynamodbGlobalSecondaryIndex#read_units_per_second}
  */
  readonly readUnitsPerSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#write_units_per_second DynamodbGlobalSecondaryIndex#write_units_per_second}
  */
  readonly writeUnitsPerSecond?: number;
}

export function dynamodbGlobalSecondaryIndexWarmThroughputToTerraform(struct?: DynamodbGlobalSecondaryIndexWarmThroughput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_units_per_second: cdktf.numberToTerraform(struct!.readUnitsPerSecond),
    write_units_per_second: cdktf.numberToTerraform(struct!.writeUnitsPerSecond),
  }
}


export function dynamodbGlobalSecondaryIndexWarmThroughputToHclTerraform(struct?: DynamodbGlobalSecondaryIndexWarmThroughput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_units_per_second: {
      value: cdktf.numberToHclTerraform(struct!.readUnitsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_units_per_second: {
      value: cdktf.numberToHclTerraform(struct!.writeUnitsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalSecondaryIndexWarmThroughputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalSecondaryIndexWarmThroughput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readUnitsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.readUnitsPerSecond = this._readUnitsPerSecond;
    }
    if (this._writeUnitsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeUnitsPerSecond = this._writeUnitsPerSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalSecondaryIndexWarmThroughput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readUnitsPerSecond = undefined;
      this._writeUnitsPerSecond = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readUnitsPerSecond = value.readUnitsPerSecond;
      this._writeUnitsPerSecond = value.writeUnitsPerSecond;
    }
  }

  // read_units_per_second - computed: true, optional: true, required: false
  private _readUnitsPerSecond?: number; 
  public get readUnitsPerSecond() {
    return this.getNumberAttribute('read_units_per_second');
  }
  public set readUnitsPerSecond(value: number) {
    this._readUnitsPerSecond = value;
  }
  public resetReadUnitsPerSecond() {
    this._readUnitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readUnitsPerSecondInput() {
    return this._readUnitsPerSecond;
  }

  // write_units_per_second - computed: true, optional: true, required: false
  private _writeUnitsPerSecond?: number; 
  public get writeUnitsPerSecond() {
    return this.getNumberAttribute('write_units_per_second');
  }
  public set writeUnitsPerSecond(value: number) {
    this._writeUnitsPerSecond = value;
  }
  public resetWriteUnitsPerSecond() {
    this._writeUnitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeUnitsPerSecondInput() {
    return this._writeUnitsPerSecond;
  }
}
export interface DynamodbGlobalSecondaryIndexKeySchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#attribute_name DynamodbGlobalSecondaryIndex#attribute_name}
  */
  readonly attributeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#attribute_type DynamodbGlobalSecondaryIndex#attribute_type}
  */
  readonly attributeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#key_type DynamodbGlobalSecondaryIndex#key_type}
  */
  readonly keyType: string;
}

export function dynamodbGlobalSecondaryIndexKeySchemaToTerraform(struct?: DynamodbGlobalSecondaryIndexKeySchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_type: cdktf.stringToTerraform(struct!.attributeType),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}


export function dynamodbGlobalSecondaryIndexKeySchemaToHclTerraform(struct?: DynamodbGlobalSecondaryIndexKeySchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_type: {
      value: cdktf.stringToHclTerraform(struct!.attributeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalSecondaryIndexKeySchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DynamodbGlobalSecondaryIndexKeySchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._attributeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeType = this._attributeType;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalSecondaryIndexKeySchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._attributeType = undefined;
      this._keyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._attributeType = value.attributeType;
      this._keyType = value.keyType;
    }
  }

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_type - computed: false, optional: false, required: true
  private _attributeType?: string; 
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
  public set attributeType(value: string) {
    this._attributeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }
}

export class DynamodbGlobalSecondaryIndexKeySchemaList extends cdktf.ComplexList {
  public internalValue? : DynamodbGlobalSecondaryIndexKeySchema[] | cdktf.IResolvable

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
  public get(index: number): DynamodbGlobalSecondaryIndexKeySchemaOutputReference {
    return new DynamodbGlobalSecondaryIndexKeySchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbGlobalSecondaryIndexOnDemandThroughput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#max_read_request_units DynamodbGlobalSecondaryIndex#max_read_request_units}
  */
  readonly maxReadRequestUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#max_write_request_units DynamodbGlobalSecondaryIndex#max_write_request_units}
  */
  readonly maxWriteRequestUnits?: number;
}

export function dynamodbGlobalSecondaryIndexOnDemandThroughputToTerraform(struct?: DynamodbGlobalSecondaryIndexOnDemandThroughput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_read_request_units: cdktf.numberToTerraform(struct!.maxReadRequestUnits),
    max_write_request_units: cdktf.numberToTerraform(struct!.maxWriteRequestUnits),
  }
}


export function dynamodbGlobalSecondaryIndexOnDemandThroughputToHclTerraform(struct?: DynamodbGlobalSecondaryIndexOnDemandThroughput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_read_request_units: {
      value: cdktf.numberToHclTerraform(struct!.maxReadRequestUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_write_request_units: {
      value: cdktf.numberToHclTerraform(struct!.maxWriteRequestUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DynamodbGlobalSecondaryIndexOnDemandThroughput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReadRequestUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReadRequestUnits = this._maxReadRequestUnits;
    }
    if (this._maxWriteRequestUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWriteRequestUnits = this._maxWriteRequestUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalSecondaryIndexOnDemandThroughput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxReadRequestUnits = undefined;
      this._maxWriteRequestUnits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxReadRequestUnits = value.maxReadRequestUnits;
      this._maxWriteRequestUnits = value.maxWriteRequestUnits;
    }
  }

  // max_read_request_units - computed: true, optional: true, required: false
  private _maxReadRequestUnits?: number; 
  public get maxReadRequestUnits() {
    return this.getNumberAttribute('max_read_request_units');
  }
  public set maxReadRequestUnits(value: number) {
    this._maxReadRequestUnits = value;
  }
  public resetMaxReadRequestUnits() {
    this._maxReadRequestUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReadRequestUnitsInput() {
    return this._maxReadRequestUnits;
  }

  // max_write_request_units - computed: true, optional: true, required: false
  private _maxWriteRequestUnits?: number; 
  public get maxWriteRequestUnits() {
    return this.getNumberAttribute('max_write_request_units');
  }
  public set maxWriteRequestUnits(value: number) {
    this._maxWriteRequestUnits = value;
  }
  public resetMaxWriteRequestUnits() {
    this._maxWriteRequestUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWriteRequestUnitsInput() {
    return this._maxWriteRequestUnits;
  }
}

export class DynamodbGlobalSecondaryIndexOnDemandThroughputList extends cdktf.ComplexList {
  public internalValue? : DynamodbGlobalSecondaryIndexOnDemandThroughput[] | cdktf.IResolvable

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
  public get(index: number): DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference {
    return new DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbGlobalSecondaryIndexProjection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#non_key_attributes DynamodbGlobalSecondaryIndex#non_key_attributes}
  */
  readonly nonKeyAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#projection_type DynamodbGlobalSecondaryIndex#projection_type}
  */
  readonly projectionType: string;
}

export function dynamodbGlobalSecondaryIndexProjectionToTerraform(struct?: DynamodbGlobalSecondaryIndexProjection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_key_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nonKeyAttributes),
    projection_type: cdktf.stringToTerraform(struct!.projectionType),
  }
}


export function dynamodbGlobalSecondaryIndexProjectionToHclTerraform(struct?: DynamodbGlobalSecondaryIndexProjection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    non_key_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nonKeyAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    projection_type: {
      value: cdktf.stringToHclTerraform(struct!.projectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalSecondaryIndexProjectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DynamodbGlobalSecondaryIndexProjection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonKeyAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonKeyAttributes = this._nonKeyAttributes;
    }
    if (this._projectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectionType = this._projectionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalSecondaryIndexProjection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nonKeyAttributes = undefined;
      this._projectionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nonKeyAttributes = value.nonKeyAttributes;
      this._projectionType = value.projectionType;
    }
  }

  // non_key_attributes - computed: false, optional: true, required: false
  private _nonKeyAttributes?: string[]; 
  public get nonKeyAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('non_key_attributes'));
  }
  public set nonKeyAttributes(value: string[]) {
    this._nonKeyAttributes = value;
  }
  public resetNonKeyAttributes() {
    this._nonKeyAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonKeyAttributesInput() {
    return this._nonKeyAttributes;
  }

  // projection_type - computed: false, optional: false, required: true
  private _projectionType?: string; 
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }
  public set projectionType(value: string) {
    this._projectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionTypeInput() {
    return this._projectionType;
  }
}

export class DynamodbGlobalSecondaryIndexProjectionList extends cdktf.ComplexList {
  public internalValue? : DynamodbGlobalSecondaryIndexProjection[] | cdktf.IResolvable

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
  public get(index: number): DynamodbGlobalSecondaryIndexProjectionOutputReference {
    return new DynamodbGlobalSecondaryIndexProjectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbGlobalSecondaryIndexProvisionedThroughput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#read_capacity_units DynamodbGlobalSecondaryIndex#read_capacity_units}
  */
  readonly readCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#write_capacity_units DynamodbGlobalSecondaryIndex#write_capacity_units}
  */
  readonly writeCapacityUnits?: number;
}

export function dynamodbGlobalSecondaryIndexProvisionedThroughputToTerraform(struct?: DynamodbGlobalSecondaryIndexProvisionedThroughput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_capacity_units: cdktf.numberToTerraform(struct!.readCapacityUnits),
    write_capacity_units: cdktf.numberToTerraform(struct!.writeCapacityUnits),
  }
}


export function dynamodbGlobalSecondaryIndexProvisionedThroughputToHclTerraform(struct?: DynamodbGlobalSecondaryIndexProvisionedThroughput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_capacity_units: {
      value: cdktf.numberToHclTerraform(struct!.readCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_capacity_units: {
      value: cdktf.numberToHclTerraform(struct!.writeCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DynamodbGlobalSecondaryIndexProvisionedThroughput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.readCapacityUnits = this._readCapacityUnits;
    }
    if (this._writeCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeCapacityUnits = this._writeCapacityUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbGlobalSecondaryIndexProvisionedThroughput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readCapacityUnits = undefined;
      this._writeCapacityUnits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readCapacityUnits = value.readCapacityUnits;
      this._writeCapacityUnits = value.writeCapacityUnits;
    }
  }

  // read_capacity_units - computed: true, optional: true, required: false
  private _readCapacityUnits?: number; 
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }
  public set readCapacityUnits(value: number) {
    this._readCapacityUnits = value;
  }
  public resetReadCapacityUnits() {
    this._readCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCapacityUnitsInput() {
    return this._readCapacityUnits;
  }

  // write_capacity_units - computed: true, optional: true, required: false
  private _writeCapacityUnits?: number; 
  public get writeCapacityUnits() {
    return this.getNumberAttribute('write_capacity_units');
  }
  public set writeCapacityUnits(value: number) {
    this._writeCapacityUnits = value;
  }
  public resetWriteCapacityUnits() {
    this._writeCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeCapacityUnitsInput() {
    return this._writeCapacityUnits;
  }
}

export class DynamodbGlobalSecondaryIndexProvisionedThroughputList extends cdktf.ComplexList {
  public internalValue? : DynamodbGlobalSecondaryIndexProvisionedThroughput[] | cdktf.IResolvable

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
  public get(index: number): DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference {
    return new DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbGlobalSecondaryIndexTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#create DynamodbGlobalSecondaryIndex#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#delete DynamodbGlobalSecondaryIndex#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#update DynamodbGlobalSecondaryIndex#update}
  */
  readonly update?: string;
}

export function dynamodbGlobalSecondaryIndexTimeoutsToTerraform(struct?: DynamodbGlobalSecondaryIndexTimeouts | cdktf.IResolvable): any {
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


export function dynamodbGlobalSecondaryIndexTimeoutsToHclTerraform(struct?: DynamodbGlobalSecondaryIndexTimeouts | cdktf.IResolvable): any {
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

export class DynamodbGlobalSecondaryIndexTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbGlobalSecondaryIndexTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamodbGlobalSecondaryIndexTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index aws_dynamodb_global_secondary_index}
*/
export class DynamodbGlobalSecondaryIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dynamodb_global_secondary_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamodbGlobalSecondaryIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamodbGlobalSecondaryIndex to import
  * @param importFromId The id of the existing DynamodbGlobalSecondaryIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamodbGlobalSecondaryIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dynamodb_global_secondary_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index aws_dynamodb_global_secondary_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamodbGlobalSecondaryIndexConfig
  */
  public constructor(scope: Construct, id: string, config: DynamodbGlobalSecondaryIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dynamodb_global_secondary_index',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.28.0',
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
    this._indexName = config.indexName;
    this._region = config.region;
    this._tableName = config.tableName;
    this._warmThroughput.internalValue = config.warmThroughput;
    this._keySchema.internalValue = config.keySchema;
    this._onDemandThroughput.internalValue = config.onDemandThroughput;
    this._projection.internalValue = config.projection;
    this._provisionedThroughput.internalValue = config.provisionedThroughput;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // index_name - computed: false, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
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

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // warm_throughput - computed: true, optional: true, required: false
  private _warmThroughput = new DynamodbGlobalSecondaryIndexWarmThroughputOutputReference(this, "warm_throughput");
  public get warmThroughput() {
    return this._warmThroughput;
  }
  public putWarmThroughput(value: DynamodbGlobalSecondaryIndexWarmThroughput) {
    this._warmThroughput.internalValue = value;
  }
  public resetWarmThroughput() {
    this._warmThroughput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmThroughputInput() {
    return this._warmThroughput.internalValue;
  }

  // key_schema - computed: false, optional: true, required: false
  private _keySchema = new DynamodbGlobalSecondaryIndexKeySchemaList(this, "key_schema", false);
  public get keySchema() {
    return this._keySchema;
  }
  public putKeySchema(value: DynamodbGlobalSecondaryIndexKeySchema[] | cdktf.IResolvable) {
    this._keySchema.internalValue = value;
  }
  public resetKeySchema() {
    this._keySchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySchemaInput() {
    return this._keySchema.internalValue;
  }

  // on_demand_throughput - computed: false, optional: true, required: false
  private _onDemandThroughput = new DynamodbGlobalSecondaryIndexOnDemandThroughputList(this, "on_demand_throughput", false);
  public get onDemandThroughput() {
    return this._onDemandThroughput;
  }
  public putOnDemandThroughput(value: DynamodbGlobalSecondaryIndexOnDemandThroughput[] | cdktf.IResolvable) {
    this._onDemandThroughput.internalValue = value;
  }
  public resetOnDemandThroughput() {
    this._onDemandThroughput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandThroughputInput() {
    return this._onDemandThroughput.internalValue;
  }

  // projection - computed: false, optional: true, required: false
  private _projection = new DynamodbGlobalSecondaryIndexProjectionList(this, "projection", false);
  public get projection() {
    return this._projection;
  }
  public putProjection(value: DynamodbGlobalSecondaryIndexProjection[] | cdktf.IResolvable) {
    this._projection.internalValue = value;
  }
  public resetProjection() {
    this._projection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionInput() {
    return this._projection.internalValue;
  }

  // provisioned_throughput - computed: false, optional: true, required: false
  private _provisionedThroughput = new DynamodbGlobalSecondaryIndexProvisionedThroughputList(this, "provisioned_throughput", false);
  public get provisionedThroughput() {
    return this._provisionedThroughput;
  }
  public putProvisionedThroughput(value: DynamodbGlobalSecondaryIndexProvisionedThroughput[] | cdktf.IResolvable) {
    this._provisionedThroughput.internalValue = value;
  }
  public resetProvisionedThroughput() {
    this._provisionedThroughput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputInput() {
    return this._provisionedThroughput.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DynamodbGlobalSecondaryIndexTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DynamodbGlobalSecondaryIndexTimeouts) {
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
      index_name: cdktf.stringToTerraform(this._indexName),
      region: cdktf.stringToTerraform(this._region),
      table_name: cdktf.stringToTerraform(this._tableName),
      warm_throughput: dynamodbGlobalSecondaryIndexWarmThroughputToTerraform(this._warmThroughput.internalValue),
      key_schema: cdktf.listMapper(dynamodbGlobalSecondaryIndexKeySchemaToTerraform, true)(this._keySchema.internalValue),
      on_demand_throughput: cdktf.listMapper(dynamodbGlobalSecondaryIndexOnDemandThroughputToTerraform, true)(this._onDemandThroughput.internalValue),
      projection: cdktf.listMapper(dynamodbGlobalSecondaryIndexProjectionToTerraform, true)(this._projection.internalValue),
      provisioned_throughput: cdktf.listMapper(dynamodbGlobalSecondaryIndexProvisionedThroughputToTerraform, true)(this._provisionedThroughput.internalValue),
      timeouts: dynamodbGlobalSecondaryIndexTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      index_name: {
        value: cdktf.stringToHclTerraform(this._indexName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_name: {
        value: cdktf.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warm_throughput: {
        value: dynamodbGlobalSecondaryIndexWarmThroughputToHclTerraform(this._warmThroughput.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamodbGlobalSecondaryIndexWarmThroughput",
      },
      key_schema: {
        value: cdktf.listMapperHcl(dynamodbGlobalSecondaryIndexKeySchemaToHclTerraform, true)(this._keySchema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DynamodbGlobalSecondaryIndexKeySchemaList",
      },
      on_demand_throughput: {
        value: cdktf.listMapperHcl(dynamodbGlobalSecondaryIndexOnDemandThroughputToHclTerraform, true)(this._onDemandThroughput.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DynamodbGlobalSecondaryIndexOnDemandThroughputList",
      },
      projection: {
        value: cdktf.listMapperHcl(dynamodbGlobalSecondaryIndexProjectionToHclTerraform, true)(this._projection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DynamodbGlobalSecondaryIndexProjectionList",
      },
      provisioned_throughput: {
        value: cdktf.listMapperHcl(dynamodbGlobalSecondaryIndexProvisionedThroughputToHclTerraform, true)(this._provisionedThroughput.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DynamodbGlobalSecondaryIndexProvisionedThroughputList",
      },
      timeouts: {
        value: dynamodbGlobalSecondaryIndexTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamodbGlobalSecondaryIndexTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
