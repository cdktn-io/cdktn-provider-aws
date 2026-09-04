/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GlueCatalogTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#database_name GlueCatalogTable#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#description GlueCatalogTable#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#id GlueCatalogTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#owner GlueCatalogTable#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#region GlueCatalogTable#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#retention GlueCatalogTable#retention}
  */
  readonly retention?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#table_type GlueCatalogTable#table_type}
  */
  readonly tableType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#view_expanded_text GlueCatalogTable#view_expanded_text}
  */
  readonly viewExpandedText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#view_original_text GlueCatalogTable#view_original_text}
  */
  readonly viewOriginalText?: string;
  /**
  * open_table_format_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#open_table_format_input GlueCatalogTable#open_table_format_input}
  */
  readonly openTableFormatInput?: GlueCatalogTableOpenTableFormatInput;
  /**
  * partition_index block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#partition_index GlueCatalogTable#partition_index}
  */
  readonly partitionIndex?: GlueCatalogTablePartitionIndex[] | cdktn.IResolvable;
  /**
  * partition_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#partition_keys GlueCatalogTable#partition_keys}
  */
  readonly partitionKeys?: GlueCatalogTablePartitionKeys[] | cdktn.IResolvable;
  /**
  * storage_descriptor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#storage_descriptor GlueCatalogTable#storage_descriptor}
  */
  readonly storageDescriptor?: GlueCatalogTableStorageDescriptor;
  /**
  * target_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#target_table GlueCatalogTable#target_table}
  */
  readonly targetTable?: GlueCatalogTableTargetTable;
  /**
  * view_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#view_definition GlueCatalogTable#view_definition}
  */
  readonly viewDefinition?: GlueCatalogTableViewDefinition;
}
export interface GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#field_id GlueCatalogTable#field_id}
  */
  readonly fieldId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#source_id GlueCatalogTable#source_id}
  */
  readonly sourceId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#transform GlueCatalogTable#transform}
  */
  readonly transform: string;
}

export function glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsToTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_id: cdktn.numberToTerraform(struct!.fieldId),
    name: cdktn.stringToTerraform(struct!.name),
    source_id: cdktn.numberToTerraform(struct!.sourceId),
    transform: cdktn.stringToTerraform(struct!.transform),
  }
}


export function glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsToHclTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_id: {
      value: cdktn.numberToHclTerraform(struct!.fieldId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_id: {
      value: cdktn.numberToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transform: {
      value: cdktn.stringToHclTerraform(struct!.transform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._transform !== undefined) {
      hasAnyValues = true;
      internalValueResult.transform = this._transform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldId = undefined;
      this._name = undefined;
      this._sourceId = undefined;
      this._transform = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldId = value.fieldId;
      this._name = value.name;
      this._sourceId = value.sourceId;
      this._transform = value.transform;
    }
  }

  // field_id - computed: false, optional: true, required: false
  private _fieldId?: number; 
  public get fieldId() {
    return this.getNumberAttribute('field_id');
  }
  public set fieldId(value: number) {
    this._fieldId = value;
  }
  public resetFieldId() {
    this._fieldId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
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

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: number; 
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }
  public set sourceId(value: number) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // transform - computed: false, optional: false, required: true
  private _transform?: string; 
  public get transform() {
    return this.getStringAttribute('transform');
  }
  public set transform(value: string) {
    this._transform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform;
  }
}

export class GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference {
    return new GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#spec_id GlueCatalogTable#spec_id}
  */
  readonly specId?: number;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#fields GlueCatalogTable#fields}
  */
  readonly fields: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields[] | cdktn.IResolvable;
}

export function glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecToTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    spec_id: cdktn.numberToTerraform(struct!.specId),
    fields: cdktn.listMapper(glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsToTerraform, true)(struct!.fields),
  }
}


export function glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecToHclTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    spec_id: {
      value: cdktn.numberToHclTerraform(struct!.specId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fields: {
      value: cdktn.listMapperHcl(glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._specId !== undefined) {
      hasAnyValues = true;
      internalValueResult.specId = this._specId;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._specId = undefined;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._specId = value.specId;
      this._fields.internalValue = value.fields;
    }
  }

  // spec_id - computed: false, optional: true, required: false
  private _specId?: number; 
  public get specId() {
    return this.getNumberAttribute('spec_id');
  }
  public set specId(value: number) {
    this._specId = value;
  }
  public resetSpecId() {
    this._specId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specIdInput() {
    return this._specId;
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#doc GlueCatalogTable#doc}
  */
  readonly doc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#id GlueCatalogTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#initial_default GlueCatalogTable#initial_default}
  */
  readonly initialDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#required GlueCatalogTable#required}
  */
  readonly required: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#write_default GlueCatalogTable#write_default}
  */
  readonly writeDefault?: string;
}

export function glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsToTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    doc: cdktn.stringToTerraform(struct!.doc),
    id: cdktn.numberToTerraform(struct!.id),
    initial_default: cdktn.stringToTerraform(struct!.initialDefault),
    name: cdktn.stringToTerraform(struct!.name),
    required: cdktn.booleanToTerraform(struct!.required),
    type: cdktn.stringToTerraform(struct!.type),
    write_default: cdktn.stringToTerraform(struct!.writeDefault),
  }
}


export function glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsToHclTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    doc: {
      value: cdktn.stringToHclTerraform(struct!.doc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_default: {
      value: cdktn.stringToHclTerraform(struct!.initialDefault),
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
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
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
    write_default: {
      value: cdktn.stringToHclTerraform(struct!.writeDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doc !== undefined) {
      hasAnyValues = true;
      internalValueResult.doc = this._doc;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._initialDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDefault = this._initialDefault;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._writeDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeDefault = this._writeDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doc = undefined;
      this._id = undefined;
      this._initialDefault = undefined;
      this._name = undefined;
      this._required = undefined;
      this._type = undefined;
      this._writeDefault = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doc = value.doc;
      this._id = value.id;
      this._initialDefault = value.initialDefault;
      this._name = value.name;
      this._required = value.required;
      this._type = value.type;
      this._writeDefault = value.writeDefault;
    }
  }

  // doc - computed: false, optional: true, required: false
  private _doc?: string; 
  public get doc() {
    return this.getStringAttribute('doc');
  }
  public set doc(value: string) {
    this._doc = value;
  }
  public resetDoc() {
    this._doc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docInput() {
    return this._doc;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // initial_default - computed: false, optional: true, required: false
  private _initialDefault?: string; 
  public get initialDefault() {
    return this.getStringAttribute('initial_default');
  }
  public set initialDefault(value: string) {
    this._initialDefault = value;
  }
  public resetInitialDefault() {
    this._initialDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDefaultInput() {
    return this._initialDefault;
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

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

  // write_default - computed: false, optional: true, required: false
  private _writeDefault?: string; 
  public get writeDefault() {
    return this.getStringAttribute('write_default');
  }
  public set writeDefault(value: string) {
    this._writeDefault = value;
  }
  public resetWriteDefault() {
    this._writeDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeDefaultInput() {
    return this._writeDefault;
  }
}

export class GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference {
    return new GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#identifier_field_ids GlueCatalogTable#identifier_field_ids}
  */
  readonly identifierFieldIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#schema_id GlueCatalogTable#schema_id}
  */
  readonly schemaId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}
  */
  readonly type?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#fields GlueCatalogTable#fields}
  */
  readonly fields: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields[] | cdktn.IResolvable;
}

export function glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaToTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifier_field_ids: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.identifierFieldIds),
    schema_id: cdktn.numberToTerraform(struct!.schemaId),
    type: cdktn.stringToTerraform(struct!.type),
    fields: cdktn.listMapper(glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsToTerraform, true)(struct!.fields),
  }
}


export function glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaToHclTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identifier_field_ids: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.identifierFieldIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    schema_id: {
      value: cdktn.numberToHclTerraform(struct!.schemaId),
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
    fields: {
      value: cdktn.listMapperHcl(glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifierFieldIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifierFieldIds = this._identifierFieldIds;
    }
    if (this._schemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaId = this._schemaId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identifierFieldIds = undefined;
      this._schemaId = undefined;
      this._type = undefined;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identifierFieldIds = value.identifierFieldIds;
      this._schemaId = value.schemaId;
      this._type = value.type;
      this._fields.internalValue = value.fields;
    }
  }

  // identifier_field_ids - computed: false, optional: true, required: false
  private _identifierFieldIds?: number[]; 
  public get identifierFieldIds() {
    return this.getNumberListAttribute('identifier_field_ids');
  }
  public set identifierFieldIds(value: number[]) {
    this._identifierFieldIds = value;
  }
  public resetIdentifierFieldIds() {
    this._identifierFieldIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierFieldIdsInput() {
    return this._identifierFieldIds;
  }

  // schema_id - computed: false, optional: true, required: false
  private _schemaId?: number; 
  public get schemaId() {
    return this.getNumberAttribute('schema_id');
  }
  public set schemaId(value: number) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // type - computed: false, optional: true, required: false
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

  // fields - computed: false, optional: false, required: true
  private _fields = new GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#direction GlueCatalogTable#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#null_order GlueCatalogTable#null_order}
  */
  readonly nullOrder: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#source_id GlueCatalogTable#source_id}
  */
  readonly sourceId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#transform GlueCatalogTable#transform}
  */
  readonly transform: string;
}

export function glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsToTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direction: cdktn.stringToTerraform(struct!.direction),
    null_order: cdktn.stringToTerraform(struct!.nullOrder),
    source_id: cdktn.numberToTerraform(struct!.sourceId),
    transform: cdktn.stringToTerraform(struct!.transform),
  }
}


export function glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsToHclTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_order: {
      value: cdktn.stringToHclTerraform(struct!.nullOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_id: {
      value: cdktn.numberToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transform: {
      value: cdktn.stringToHclTerraform(struct!.transform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._nullOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullOrder = this._nullOrder;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._transform !== undefined) {
      hasAnyValues = true;
      internalValueResult.transform = this._transform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._nullOrder = undefined;
      this._sourceId = undefined;
      this._transform = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._nullOrder = value.nullOrder;
      this._sourceId = value.sourceId;
      this._transform = value.transform;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // null_order - computed: false, optional: false, required: true
  private _nullOrder?: string; 
  public get nullOrder() {
    return this.getStringAttribute('null_order');
  }
  public set nullOrder(value: string) {
    this._nullOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nullOrderInput() {
    return this._nullOrder;
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: number; 
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }
  public set sourceId(value: number) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // transform - computed: false, optional: false, required: true
  private _transform?: string; 
  public get transform() {
    return this.getStringAttribute('transform');
  }
  public set transform(value: string) {
    this._transform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform;
  }
}

export class GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference {
    return new GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#order_id GlueCatalogTable#order_id}
  */
  readonly orderId: number;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#fields GlueCatalogTable#fields}
  */
  readonly fields: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields[] | cdktn.IResolvable;
}

export function glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderToTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    order_id: cdktn.numberToTerraform(struct!.orderId),
    fields: cdktn.listMapper(glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsToTerraform, true)(struct!.fields),
  }
}


export function glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderToHclTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    order_id: {
      value: cdktn.numberToHclTerraform(struct!.orderId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fields: {
      value: cdktn.listMapperHcl(glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderId = this._orderId;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._orderId = undefined;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._orderId = value.orderId;
      this._fields.internalValue = value.fields;
    }
  }

  // order_id - computed: false, optional: false, required: true
  private _orderId?: number; 
  public get orderId() {
    return this.getNumberAttribute('order_id');
  }
  public set orderId(value: number) {
    this._orderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderIdInput() {
    return this._orderId;
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#location GlueCatalogTable#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#properties GlueCatalogTable#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * partition_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#partition_spec GlueCatalogTable#partition_spec}
  */
  readonly partitionSpec?: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#schema GlueCatalogTable#schema}
  */
  readonly schema: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema;
  /**
  * sort_order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#sort_order GlueCatalogTable#sort_order}
  */
  readonly sortOrder?: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder;
}

export function glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputToTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    location: cdktn.stringToTerraform(struct!.location),
    properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.properties),
    partition_spec: glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecToTerraform(struct!.partitionSpec),
    schema: glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaToTerraform(struct!.schema),
    sort_order: glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderToTerraform(struct!.sortOrder),
  }
}


export function glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputToHclTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    partition_spec: {
      value: glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecToHclTerraform(struct!.partitionSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecList",
    },
    schema: {
      value: glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaList",
    },
    sort_order: {
      value: glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderToHclTerraform(struct!.sortOrder),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._partitionSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionSpec = this._partitionSpec?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._sortOrder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrder = this._sortOrder?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._properties = undefined;
      this._partitionSpec.internalValue = undefined;
      this._schema.internalValue = undefined;
      this._sortOrder.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._properties = value.properties;
      this._partitionSpec.internalValue = value.partitionSpec;
      this._schema.internalValue = value.schema;
      this._sortOrder.internalValue = value.sortOrder;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // partition_spec - computed: false, optional: true, required: false
  private _partitionSpec = new GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference(this, "partition_spec");
  public get partitionSpec() {
    return this._partitionSpec;
  }
  public putPartitionSpec(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec) {
    this._partitionSpec.internalValue = value;
  }
  public resetPartitionSpec() {
    this._partitionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionSpecInput() {
    return this._partitionSpec.internalValue;
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder = new GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference(this, "sort_order");
  public get sortOrder() {
    return this._sortOrder;
  }
  public putSortOrder(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder) {
    this._sortOrder.internalValue = value;
  }
  public resetSortOrder() {
    this._sortOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder.internalValue;
  }
}
export interface GlueCatalogTableOpenTableFormatInputIcebergInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#metadata_operation GlueCatalogTable#metadata_operation}
  */
  readonly metadataOperation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#version GlueCatalogTable#version}
  */
  readonly version?: string;
  /**
  * iceberg_table_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#iceberg_table_input GlueCatalogTable#iceberg_table_input}
  */
  readonly icebergTableInput?: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput;
}

export function glueCatalogTableOpenTableFormatInputIcebergInputToTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference | GlueCatalogTableOpenTableFormatInputIcebergInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_operation: cdktn.stringToTerraform(struct!.metadataOperation),
    version: cdktn.stringToTerraform(struct!.version),
    iceberg_table_input: glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputToTerraform(struct!.icebergTableInput),
  }
}


export function glueCatalogTableOpenTableFormatInputIcebergInputToHclTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference | GlueCatalogTableOpenTableFormatInputIcebergInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_operation: {
      value: cdktn.stringToHclTerraform(struct!.metadataOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iceberg_table_input: {
      value: glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputToHclTerraform(struct!.icebergTableInput),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCatalogTableOpenTableFormatInputIcebergInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataOperation = this._metadataOperation;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._icebergTableInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergTableInput = this._icebergTableInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableOpenTableFormatInputIcebergInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadataOperation = undefined;
      this._version = undefined;
      this._icebergTableInput.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadataOperation = value.metadataOperation;
      this._version = value.version;
      this._icebergTableInput.internalValue = value.icebergTableInput;
    }
  }

  // metadata_operation - computed: false, optional: false, required: true
  private _metadataOperation?: string; 
  public get metadataOperation() {
    return this.getStringAttribute('metadata_operation');
  }
  public set metadataOperation(value: string) {
    this._metadataOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOperationInput() {
    return this._metadataOperation;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // iceberg_table_input - computed: false, optional: true, required: false
  private _icebergTableInput = new GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference(this, "iceberg_table_input");
  public get icebergTableInput() {
    return this._icebergTableInput;
  }
  public putIcebergTableInput(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput) {
    this._icebergTableInput.internalValue = value;
  }
  public resetIcebergTableInput() {
    this._icebergTableInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergTableInputInput() {
    return this._icebergTableInput.internalValue;
  }
}
export interface GlueCatalogTableOpenTableFormatInput {
  /**
  * iceberg_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#iceberg_input GlueCatalogTable#iceberg_input}
  */
  readonly icebergInput: GlueCatalogTableOpenTableFormatInputIcebergInput;
}

export function glueCatalogTableOpenTableFormatInputToTerraform(struct?: GlueCatalogTableOpenTableFormatInputOutputReference | GlueCatalogTableOpenTableFormatInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iceberg_input: glueCatalogTableOpenTableFormatInputIcebergInputToTerraform(struct!.icebergInput),
  }
}


export function glueCatalogTableOpenTableFormatInputToHclTerraform(struct?: GlueCatalogTableOpenTableFormatInputOutputReference | GlueCatalogTableOpenTableFormatInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iceberg_input: {
      value: glueCatalogTableOpenTableFormatInputIcebergInputToHclTerraform(struct!.icebergInput),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableOpenTableFormatInputIcebergInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableOpenTableFormatInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCatalogTableOpenTableFormatInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icebergInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergInput = this._icebergInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableOpenTableFormatInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icebergInput.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icebergInput.internalValue = value.icebergInput;
    }
  }

  // iceberg_input - computed: false, optional: false, required: true
  private _icebergInput = new GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference(this, "iceberg_input");
  public get icebergInput() {
    return this._icebergInput;
  }
  public putIcebergInput(value: GlueCatalogTableOpenTableFormatInputIcebergInput) {
    this._icebergInput.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergInputInput() {
    return this._icebergInput.internalValue;
  }
}
export interface GlueCatalogTablePartitionIndex {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#index_name GlueCatalogTable#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#keys GlueCatalogTable#keys}
  */
  readonly keys: string[];
}

export function glueCatalogTablePartitionIndexToTerraform(struct?: GlueCatalogTablePartitionIndex | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index_name: cdktn.stringToTerraform(struct!.indexName),
    keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.keys),
  }
}


export function glueCatalogTablePartitionIndexToHclTerraform(struct?: GlueCatalogTablePartitionIndex | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    index_name: {
      value: cdktn.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTablePartitionIndexOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogTablePartitionIndex | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTablePartitionIndex | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexName = undefined;
      this._keys = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexName = value.indexName;
      this._keys = value.keys;
    }
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

  // index_status - computed: true, optional: false, required: false
  public get indexStatus() {
    return this.getStringAttribute('index_status');
  }

  // keys - computed: false, optional: false, required: true
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }
}

export class GlueCatalogTablePartitionIndexList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogTablePartitionIndex[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogTablePartitionIndexOutputReference {
    return new GlueCatalogTablePartitionIndexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogTablePartitionKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#comment GlueCatalogTable#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}
  */
  readonly type?: string;
}

export function glueCatalogTablePartitionKeysToTerraform(struct?: GlueCatalogTablePartitionKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    name: cdktn.stringToTerraform(struct!.name),
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function glueCatalogTablePartitionKeysToHclTerraform(struct?: GlueCatalogTablePartitionKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
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
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class GlueCatalogTablePartitionKeysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogTablePartitionKeys | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTablePartitionKeys | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._parameters = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._name = value.name;
      this._parameters = value.parameters;
      this._type = value.type;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // type - computed: false, optional: true, required: false
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
}

export class GlueCatalogTablePartitionKeysList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogTablePartitionKeys[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogTablePartitionKeysOutputReference {
    return new GlueCatalogTablePartitionKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogTableStorageDescriptorColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#comment GlueCatalogTable#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}
  */
  readonly type?: string;
}

export function glueCatalogTableStorageDescriptorColumnsToTerraform(struct?: GlueCatalogTableStorageDescriptorColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    name: cdktn.stringToTerraform(struct!.name),
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function glueCatalogTableStorageDescriptorColumnsToHclTerraform(struct?: GlueCatalogTableStorageDescriptorColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
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
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class GlueCatalogTableStorageDescriptorColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogTableStorageDescriptorColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableStorageDescriptorColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._parameters = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._name = value.name;
      this._parameters = value.parameters;
      this._type = value.type;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // type - computed: false, optional: true, required: false
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
}

export class GlueCatalogTableStorageDescriptorColumnsList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogTableStorageDescriptorColumns[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogTableStorageDescriptorColumnsOutputReference {
    return new GlueCatalogTableStorageDescriptorColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#registry_name GlueCatalogTable#registry_name}
  */
  readonly registryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#schema_arn GlueCatalogTable#schema_arn}
  */
  readonly schemaArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#schema_name GlueCatalogTable#schema_name}
  */
  readonly schemaName?: string;
}

export function glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform(struct?: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference | GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    registry_name: cdktn.stringToTerraform(struct!.registryName),
    schema_arn: cdktn.stringToTerraform(struct!.schemaArn),
    schema_name: cdktn.stringToTerraform(struct!.schemaName),
  }
}


export function glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToHclTerraform(struct?: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference | GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    registry_name: {
      value: cdktn.stringToHclTerraform(struct!.registryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_arn: {
      value: cdktn.stringToHclTerraform(struct!.schemaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktn.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._registryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryName = this._registryName;
    }
    if (this._schemaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaArn = this._schemaArn;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._registryName = undefined;
      this._schemaArn = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._registryName = value.registryName;
      this._schemaArn = value.schemaArn;
      this._schemaName = value.schemaName;
    }
  }

  // registry_name - computed: false, optional: true, required: false
  private _registryName?: string; 
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string) {
    this._registryName = value;
  }
  public resetRegistryName() {
    this._registryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName;
  }

  // schema_arn - computed: false, optional: true, required: false
  private _schemaArn?: string; 
  public get schemaArn() {
    return this.getStringAttribute('schema_arn');
  }
  public set schemaArn(value: string) {
    this._schemaArn = value;
  }
  public resetSchemaArn() {
    this._schemaArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaArnInput() {
    return this._schemaArn;
  }

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface GlueCatalogTableStorageDescriptorSchemaReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#schema_version_id GlueCatalogTable#schema_version_id}
  */
  readonly schemaVersionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#schema_version_number GlueCatalogTable#schema_version_number}
  */
  readonly schemaVersionNumber: number;
  /**
  * schema_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#schema_id GlueCatalogTable#schema_id}
  */
  readonly schemaId?: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId;
}

export function glueCatalogTableStorageDescriptorSchemaReferenceToTerraform(struct?: GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference | GlueCatalogTableStorageDescriptorSchemaReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema_version_id: cdktn.stringToTerraform(struct!.schemaVersionId),
    schema_version_number: cdktn.numberToTerraform(struct!.schemaVersionNumber),
    schema_id: glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform(struct!.schemaId),
  }
}


export function glueCatalogTableStorageDescriptorSchemaReferenceToHclTerraform(struct?: GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference | GlueCatalogTableStorageDescriptorSchemaReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schema_version_id: {
      value: cdktn.stringToHclTerraform(struct!.schemaVersionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_version_number: {
      value: cdktn.numberToHclTerraform(struct!.schemaVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schema_id: {
      value: glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToHclTerraform(struct!.schemaId),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCatalogTableStorageDescriptorSchemaReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaVersionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaVersionId = this._schemaVersionId;
    }
    if (this._schemaVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaVersionNumber = this._schemaVersionNumber;
    }
    if (this._schemaId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaId = this._schemaId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableStorageDescriptorSchemaReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemaVersionId = undefined;
      this._schemaVersionNumber = undefined;
      this._schemaId.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemaVersionId = value.schemaVersionId;
      this._schemaVersionNumber = value.schemaVersionNumber;
      this._schemaId.internalValue = value.schemaId;
    }
  }

  // schema_version_id - computed: false, optional: true, required: false
  private _schemaVersionId?: string; 
  public get schemaVersionId() {
    return this.getStringAttribute('schema_version_id');
  }
  public set schemaVersionId(value: string) {
    this._schemaVersionId = value;
  }
  public resetSchemaVersionId() {
    this._schemaVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaVersionIdInput() {
    return this._schemaVersionId;
  }

  // schema_version_number - computed: false, optional: false, required: true
  private _schemaVersionNumber?: number; 
  public get schemaVersionNumber() {
    return this.getNumberAttribute('schema_version_number');
  }
  public set schemaVersionNumber(value: number) {
    this._schemaVersionNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaVersionNumberInput() {
    return this._schemaVersionNumber;
  }

  // schema_id - computed: false, optional: true, required: false
  private _schemaId = new GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference(this, "schema_id");
  public get schemaId() {
    return this._schemaId;
  }
  public putSchemaId(value: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId) {
    this._schemaId.internalValue = value;
  }
  public resetSchemaId() {
    this._schemaId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId.internalValue;
  }
}
export interface GlueCatalogTableStorageDescriptorSerDeInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#serialization_library GlueCatalogTable#serialization_library}
  */
  readonly serializationLibrary?: string;
}

export function glueCatalogTableStorageDescriptorSerDeInfoToTerraform(struct?: GlueCatalogTableStorageDescriptorSerDeInfoOutputReference | GlueCatalogTableStorageDescriptorSerDeInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    serialization_library: cdktn.stringToTerraform(struct!.serializationLibrary),
  }
}


export function glueCatalogTableStorageDescriptorSerDeInfoToHclTerraform(struct?: GlueCatalogTableStorageDescriptorSerDeInfoOutputReference | GlueCatalogTableStorageDescriptorSerDeInfo): any {
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
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    serialization_library: {
      value: cdktn.stringToHclTerraform(struct!.serializationLibrary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableStorageDescriptorSerDeInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCatalogTableStorageDescriptorSerDeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._serializationLibrary !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializationLibrary = this._serializationLibrary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableStorageDescriptorSerDeInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._parameters = undefined;
      this._serializationLibrary = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._parameters = value.parameters;
      this._serializationLibrary = value.serializationLibrary;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // serialization_library - computed: false, optional: true, required: false
  private _serializationLibrary?: string; 
  public get serializationLibrary() {
    return this.getStringAttribute('serialization_library');
  }
  public set serializationLibrary(value: string) {
    this._serializationLibrary = value;
  }
  public resetSerializationLibrary() {
    this._serializationLibrary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationLibraryInput() {
    return this._serializationLibrary;
  }
}
export interface GlueCatalogTableStorageDescriptorSkewedInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#skewed_column_names GlueCatalogTable#skewed_column_names}
  */
  readonly skewedColumnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}
  */
  readonly skewedColumnValueLocationMaps?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#skewed_column_values GlueCatalogTable#skewed_column_values}
  */
  readonly skewedColumnValues?: string[];
}

export function glueCatalogTableStorageDescriptorSkewedInfoToTerraform(struct?: GlueCatalogTableStorageDescriptorSkewedInfoOutputReference | GlueCatalogTableStorageDescriptorSkewedInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    skewed_column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.skewedColumnNames),
    skewed_column_value_location_maps: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.skewedColumnValueLocationMaps),
    skewed_column_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.skewedColumnValues),
  }
}


export function glueCatalogTableStorageDescriptorSkewedInfoToHclTerraform(struct?: GlueCatalogTableStorageDescriptorSkewedInfoOutputReference | GlueCatalogTableStorageDescriptorSkewedInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    skewed_column_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.skewedColumnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    skewed_column_value_location_maps: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.skewedColumnValueLocationMaps),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    skewed_column_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.skewedColumnValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableStorageDescriptorSkewedInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCatalogTableStorageDescriptorSkewedInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skewedColumnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedColumnNames = this._skewedColumnNames;
    }
    if (this._skewedColumnValueLocationMaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedColumnValueLocationMaps = this._skewedColumnValueLocationMaps;
    }
    if (this._skewedColumnValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedColumnValues = this._skewedColumnValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableStorageDescriptorSkewedInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skewedColumnNames = undefined;
      this._skewedColumnValueLocationMaps = undefined;
      this._skewedColumnValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skewedColumnNames = value.skewedColumnNames;
      this._skewedColumnValueLocationMaps = value.skewedColumnValueLocationMaps;
      this._skewedColumnValues = value.skewedColumnValues;
    }
  }

  // skewed_column_names - computed: false, optional: true, required: false
  private _skewedColumnNames?: string[]; 
  public get skewedColumnNames() {
    return this.getListAttribute('skewed_column_names');
  }
  public set skewedColumnNames(value: string[]) {
    this._skewedColumnNames = value;
  }
  public resetSkewedColumnNames() {
    this._skewedColumnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColumnNamesInput() {
    return this._skewedColumnNames;
  }

  // skewed_column_value_location_maps - computed: false, optional: true, required: false
  private _skewedColumnValueLocationMaps?: { [key: string]: string }; 
  public get skewedColumnValueLocationMaps() {
    return this.getStringMapAttribute('skewed_column_value_location_maps');
  }
  public set skewedColumnValueLocationMaps(value: { [key: string]: string }) {
    this._skewedColumnValueLocationMaps = value;
  }
  public resetSkewedColumnValueLocationMaps() {
    this._skewedColumnValueLocationMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColumnValueLocationMapsInput() {
    return this._skewedColumnValueLocationMaps;
  }

  // skewed_column_values - computed: false, optional: true, required: false
  private _skewedColumnValues?: string[]; 
  public get skewedColumnValues() {
    return this.getListAttribute('skewed_column_values');
  }
  public set skewedColumnValues(value: string[]) {
    this._skewedColumnValues = value;
  }
  public resetSkewedColumnValues() {
    this._skewedColumnValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColumnValuesInput() {
    return this._skewedColumnValues;
  }
}
export interface GlueCatalogTableStorageDescriptorSortColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#column GlueCatalogTable#column}
  */
  readonly column: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#sort_order GlueCatalogTable#sort_order}
  */
  readonly sortOrder: number;
}

export function glueCatalogTableStorageDescriptorSortColumnsToTerraform(struct?: GlueCatalogTableStorageDescriptorSortColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    sort_order: cdktn.numberToTerraform(struct!.sortOrder),
  }
}


export function glueCatalogTableStorageDescriptorSortColumnsToHclTerraform(struct?: GlueCatalogTableStorageDescriptorSortColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_order: {
      value: cdktn.numberToHclTerraform(struct!.sortOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableStorageDescriptorSortColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogTableStorageDescriptorSortColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._sortOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOrder = this._sortOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableStorageDescriptorSortColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._sortOrder = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._sortOrder = value.sortOrder;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // sort_order - computed: false, optional: false, required: true
  private _sortOrder?: number; 
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }
  public set sortOrder(value: number) {
    this._sortOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }
}

export class GlueCatalogTableStorageDescriptorSortColumnsList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogTableStorageDescriptorSortColumns[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogTableStorageDescriptorSortColumnsOutputReference {
    return new GlueCatalogTableStorageDescriptorSortColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogTableStorageDescriptor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#additional_locations GlueCatalogTable#additional_locations}
  */
  readonly additionalLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#bucket_columns GlueCatalogTable#bucket_columns}
  */
  readonly bucketColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#compressed GlueCatalogTable#compressed}
  */
  readonly compressed?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#input_format GlueCatalogTable#input_format}
  */
  readonly inputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#location GlueCatalogTable#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#number_of_buckets GlueCatalogTable#number_of_buckets}
  */
  readonly numberOfBuckets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#output_format GlueCatalogTable#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}
  */
  readonly storedAsSubDirectories?: boolean | cdktn.IResolvable;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#columns GlueCatalogTable#columns}
  */
  readonly columns?: GlueCatalogTableStorageDescriptorColumns[] | cdktn.IResolvable;
  /**
  * schema_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#schema_reference GlueCatalogTable#schema_reference}
  */
  readonly schemaReference?: GlueCatalogTableStorageDescriptorSchemaReference;
  /**
  * ser_de_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#ser_de_info GlueCatalogTable#ser_de_info}
  */
  readonly serDeInfo?: GlueCatalogTableStorageDescriptorSerDeInfo;
  /**
  * skewed_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#skewed_info GlueCatalogTable#skewed_info}
  */
  readonly skewedInfo?: GlueCatalogTableStorageDescriptorSkewedInfo;
  /**
  * sort_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#sort_columns GlueCatalogTable#sort_columns}
  */
  readonly sortColumns?: GlueCatalogTableStorageDescriptorSortColumns[] | cdktn.IResolvable;
}

export function glueCatalogTableStorageDescriptorToTerraform(struct?: GlueCatalogTableStorageDescriptorOutputReference | GlueCatalogTableStorageDescriptor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.additionalLocations),
    bucket_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.bucketColumns),
    compressed: cdktn.booleanToTerraform(struct!.compressed),
    input_format: cdktn.stringToTerraform(struct!.inputFormat),
    location: cdktn.stringToTerraform(struct!.location),
    number_of_buckets: cdktn.numberToTerraform(struct!.numberOfBuckets),
    output_format: cdktn.stringToTerraform(struct!.outputFormat),
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    stored_as_sub_directories: cdktn.booleanToTerraform(struct!.storedAsSubDirectories),
    columns: cdktn.listMapper(glueCatalogTableStorageDescriptorColumnsToTerraform, true)(struct!.columns),
    schema_reference: glueCatalogTableStorageDescriptorSchemaReferenceToTerraform(struct!.schemaReference),
    ser_de_info: glueCatalogTableStorageDescriptorSerDeInfoToTerraform(struct!.serDeInfo),
    skewed_info: glueCatalogTableStorageDescriptorSkewedInfoToTerraform(struct!.skewedInfo),
    sort_columns: cdktn.listMapper(glueCatalogTableStorageDescriptorSortColumnsToTerraform, true)(struct!.sortColumns),
  }
}


export function glueCatalogTableStorageDescriptorToHclTerraform(struct?: GlueCatalogTableStorageDescriptorOutputReference | GlueCatalogTableStorageDescriptor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.additionalLocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bucket_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.bucketColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    compressed: {
      value: cdktn.booleanToHclTerraform(struct!.compressed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format: {
      value: cdktn.stringToHclTerraform(struct!.inputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_buckets: {
      value: cdktn.numberToHclTerraform(struct!.numberOfBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_format: {
      value: cdktn.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    stored_as_sub_directories: {
      value: cdktn.booleanToHclTerraform(struct!.storedAsSubDirectories),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    columns: {
      value: cdktn.listMapperHcl(glueCatalogTableStorageDescriptorColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableStorageDescriptorColumnsList",
    },
    schema_reference: {
      value: glueCatalogTableStorageDescriptorSchemaReferenceToHclTerraform(struct!.schemaReference),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableStorageDescriptorSchemaReferenceList",
    },
    ser_de_info: {
      value: glueCatalogTableStorageDescriptorSerDeInfoToHclTerraform(struct!.serDeInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableStorageDescriptorSerDeInfoList",
    },
    skewed_info: {
      value: glueCatalogTableStorageDescriptorSkewedInfoToHclTerraform(struct!.skewedInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableStorageDescriptorSkewedInfoList",
    },
    sort_columns: {
      value: cdktn.listMapperHcl(glueCatalogTableStorageDescriptorSortColumnsToHclTerraform, true)(struct!.sortColumns),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableStorageDescriptorSortColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableStorageDescriptorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCatalogTableStorageDescriptor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalLocations = this._additionalLocations;
    }
    if (this._bucketColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketColumns = this._bucketColumns;
    }
    if (this._compressed !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressed = this._compressed;
    }
    if (this._inputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormat = this._inputFormat;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._numberOfBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfBuckets = this._numberOfBuckets;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._storedAsSubDirectories !== undefined) {
      hasAnyValues = true;
      internalValueResult.storedAsSubDirectories = this._storedAsSubDirectories;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._schemaReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaReference = this._schemaReference?.internalValue;
    }
    if (this._serDeInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serDeInfo = this._serDeInfo?.internalValue;
    }
    if (this._skewedInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skewedInfo = this._skewedInfo?.internalValue;
    }
    if (this._sortColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortColumns = this._sortColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableStorageDescriptor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalLocations = undefined;
      this._bucketColumns = undefined;
      this._compressed = undefined;
      this._inputFormat = undefined;
      this._location = undefined;
      this._numberOfBuckets = undefined;
      this._outputFormat = undefined;
      this._parameters = undefined;
      this._storedAsSubDirectories = undefined;
      this._columns.internalValue = undefined;
      this._schemaReference.internalValue = undefined;
      this._serDeInfo.internalValue = undefined;
      this._skewedInfo.internalValue = undefined;
      this._sortColumns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalLocations = value.additionalLocations;
      this._bucketColumns = value.bucketColumns;
      this._compressed = value.compressed;
      this._inputFormat = value.inputFormat;
      this._location = value.location;
      this._numberOfBuckets = value.numberOfBuckets;
      this._outputFormat = value.outputFormat;
      this._parameters = value.parameters;
      this._storedAsSubDirectories = value.storedAsSubDirectories;
      this._columns.internalValue = value.columns;
      this._schemaReference.internalValue = value.schemaReference;
      this._serDeInfo.internalValue = value.serDeInfo;
      this._skewedInfo.internalValue = value.skewedInfo;
      this._sortColumns.internalValue = value.sortColumns;
    }
  }

  // additional_locations - computed: false, optional: true, required: false
  private _additionalLocations?: string[]; 
  public get additionalLocations() {
    return this.getListAttribute('additional_locations');
  }
  public set additionalLocations(value: string[]) {
    this._additionalLocations = value;
  }
  public resetAdditionalLocations() {
    this._additionalLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLocationsInput() {
    return this._additionalLocations;
  }

  // bucket_columns - computed: false, optional: true, required: false
  private _bucketColumns?: string[]; 
  public get bucketColumns() {
    return this.getListAttribute('bucket_columns');
  }
  public set bucketColumns(value: string[]) {
    this._bucketColumns = value;
  }
  public resetBucketColumns() {
    this._bucketColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketColumnsInput() {
    return this._bucketColumns;
  }

  // compressed - computed: false, optional: true, required: false
  private _compressed?: boolean | cdktn.IResolvable; 
  public get compressed() {
    return this.getBooleanAttribute('compressed');
  }
  public set compressed(value: boolean | cdktn.IResolvable) {
    this._compressed = value;
  }
  public resetCompressed() {
    this._compressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedInput() {
    return this._compressed;
  }

  // input_format - computed: false, optional: true, required: false
  private _inputFormat?: string; 
  public get inputFormat() {
    return this.getStringAttribute('input_format');
  }
  public set inputFormat(value: string) {
    this._inputFormat = value;
  }
  public resetInputFormat() {
    this._inputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatInput() {
    return this._inputFormat;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // number_of_buckets - computed: false, optional: true, required: false
  private _numberOfBuckets?: number; 
  public get numberOfBuckets() {
    return this.getNumberAttribute('number_of_buckets');
  }
  public set numberOfBuckets(value: number) {
    this._numberOfBuckets = value;
  }
  public resetNumberOfBuckets() {
    this._numberOfBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfBucketsInput() {
    return this._numberOfBuckets;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // stored_as_sub_directories - computed: false, optional: true, required: false
  private _storedAsSubDirectories?: boolean | cdktn.IResolvable; 
  public get storedAsSubDirectories() {
    return this.getBooleanAttribute('stored_as_sub_directories');
  }
  public set storedAsSubDirectories(value: boolean | cdktn.IResolvable) {
    this._storedAsSubDirectories = value;
  }
  public resetStoredAsSubDirectories() {
    this._storedAsSubDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedAsSubDirectoriesInput() {
    return this._storedAsSubDirectories;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new GlueCatalogTableStorageDescriptorColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: GlueCatalogTableStorageDescriptorColumns[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // schema_reference - computed: false, optional: true, required: false
  private _schemaReference = new GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference(this, "schema_reference");
  public get schemaReference() {
    return this._schemaReference;
  }
  public putSchemaReference(value: GlueCatalogTableStorageDescriptorSchemaReference) {
    this._schemaReference.internalValue = value;
  }
  public resetSchemaReference() {
    this._schemaReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaReferenceInput() {
    return this._schemaReference.internalValue;
  }

  // ser_de_info - computed: false, optional: true, required: false
  private _serDeInfo = new GlueCatalogTableStorageDescriptorSerDeInfoOutputReference(this, "ser_de_info");
  public get serDeInfo() {
    return this._serDeInfo;
  }
  public putSerDeInfo(value: GlueCatalogTableStorageDescriptorSerDeInfo) {
    this._serDeInfo.internalValue = value;
  }
  public resetSerDeInfo() {
    this._serDeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serDeInfoInput() {
    return this._serDeInfo.internalValue;
  }

  // skewed_info - computed: false, optional: true, required: false
  private _skewedInfo = new GlueCatalogTableStorageDescriptorSkewedInfoOutputReference(this, "skewed_info");
  public get skewedInfo() {
    return this._skewedInfo;
  }
  public putSkewedInfo(value: GlueCatalogTableStorageDescriptorSkewedInfo) {
    this._skewedInfo.internalValue = value;
  }
  public resetSkewedInfo() {
    this._skewedInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedInfoInput() {
    return this._skewedInfo.internalValue;
  }

  // sort_columns - computed: false, optional: true, required: false
  private _sortColumns = new GlueCatalogTableStorageDescriptorSortColumnsList(this, "sort_columns", false);
  public get sortColumns() {
    return this._sortColumns;
  }
  public putSortColumns(value: GlueCatalogTableStorageDescriptorSortColumns[] | cdktn.IResolvable) {
    this._sortColumns.internalValue = value;
  }
  public resetSortColumns() {
    this._sortColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortColumnsInput() {
    return this._sortColumns.internalValue;
  }
}
export interface GlueCatalogTableTargetTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}
  */
  readonly catalogId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#database_name GlueCatalogTable#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#region GlueCatalogTable#region}
  */
  readonly region?: string;
}

export function glueCatalogTableTargetTableToTerraform(struct?: GlueCatalogTableTargetTableOutputReference | GlueCatalogTableTargetTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_id: cdktn.stringToTerraform(struct!.catalogId),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    name: cdktn.stringToTerraform(struct!.name),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function glueCatalogTableTargetTableToHclTerraform(struct?: GlueCatalogTableTargetTableOutputReference | GlueCatalogTableTargetTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_id: {
      value: cdktn.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
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
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableTargetTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCatalogTableTargetTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableTargetTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogId = undefined;
      this._databaseName = undefined;
      this._name = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogId = value.catalogId;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._region = value.region;
    }
  }

  // catalog_id - computed: false, optional: false, required: true
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // region - computed: false, optional: true, required: false
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
}
export interface GlueCatalogTableViewDefinitionRepresentations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#dialect GlueCatalogTable#dialect}
  */
  readonly dialect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#dialect_version GlueCatalogTable#dialect_version}
  */
  readonly dialectVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#validation_connection GlueCatalogTable#validation_connection}
  */
  readonly validationConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#view_expanded_text GlueCatalogTable#view_expanded_text}
  */
  readonly viewExpandedText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#view_original_text GlueCatalogTable#view_original_text}
  */
  readonly viewOriginalText?: string;
}

export function glueCatalogTableViewDefinitionRepresentationsToTerraform(struct?: GlueCatalogTableViewDefinitionRepresentations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dialect: cdktn.stringToTerraform(struct!.dialect),
    dialect_version: cdktn.stringToTerraform(struct!.dialectVersion),
    validation_connection: cdktn.stringToTerraform(struct!.validationConnection),
    view_expanded_text: cdktn.stringToTerraform(struct!.viewExpandedText),
    view_original_text: cdktn.stringToTerraform(struct!.viewOriginalText),
  }
}


export function glueCatalogTableViewDefinitionRepresentationsToHclTerraform(struct?: GlueCatalogTableViewDefinitionRepresentations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dialect: {
      value: cdktn.stringToHclTerraform(struct!.dialect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dialect_version: {
      value: cdktn.stringToHclTerraform(struct!.dialectVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation_connection: {
      value: cdktn.stringToHclTerraform(struct!.validationConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_expanded_text: {
      value: cdktn.stringToHclTerraform(struct!.viewExpandedText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_original_text: {
      value: cdktn.stringToHclTerraform(struct!.viewOriginalText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableViewDefinitionRepresentationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogTableViewDefinitionRepresentations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dialect !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialect = this._dialect;
    }
    if (this._dialectVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialectVersion = this._dialectVersion;
    }
    if (this._validationConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationConnection = this._validationConnection;
    }
    if (this._viewExpandedText !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewExpandedText = this._viewExpandedText;
    }
    if (this._viewOriginalText !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewOriginalText = this._viewOriginalText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableViewDefinitionRepresentations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dialect = undefined;
      this._dialectVersion = undefined;
      this._validationConnection = undefined;
      this._viewExpandedText = undefined;
      this._viewOriginalText = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dialect = value.dialect;
      this._dialectVersion = value.dialectVersion;
      this._validationConnection = value.validationConnection;
      this._viewExpandedText = value.viewExpandedText;
      this._viewOriginalText = value.viewOriginalText;
    }
  }

  // dialect - computed: false, optional: true, required: false
  private _dialect?: string; 
  public get dialect() {
    return this.getStringAttribute('dialect');
  }
  public set dialect(value: string) {
    this._dialect = value;
  }
  public resetDialect() {
    this._dialect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialectInput() {
    return this._dialect;
  }

  // dialect_version - computed: false, optional: true, required: false
  private _dialectVersion?: string; 
  public get dialectVersion() {
    return this.getStringAttribute('dialect_version');
  }
  public set dialectVersion(value: string) {
    this._dialectVersion = value;
  }
  public resetDialectVersion() {
    this._dialectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialectVersionInput() {
    return this._dialectVersion;
  }

  // validation_connection - computed: true, optional: true, required: false
  private _validationConnection?: string; 
  public get validationConnection() {
    return this.getStringAttribute('validation_connection');
  }
  public set validationConnection(value: string) {
    this._validationConnection = value;
  }
  public resetValidationConnection() {
    this._validationConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationConnectionInput() {
    return this._validationConnection;
  }

  // view_expanded_text - computed: true, optional: true, required: false
  private _viewExpandedText?: string; 
  public get viewExpandedText() {
    return this.getStringAttribute('view_expanded_text');
  }
  public set viewExpandedText(value: string) {
    this._viewExpandedText = value;
  }
  public resetViewExpandedText() {
    this._viewExpandedText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewExpandedTextInput() {
    return this._viewExpandedText;
  }

  // view_original_text - computed: true, optional: true, required: false
  private _viewOriginalText?: string; 
  public get viewOriginalText() {
    return this.getStringAttribute('view_original_text');
  }
  public set viewOriginalText(value: string) {
    this._viewOriginalText = value;
  }
  public resetViewOriginalText() {
    this._viewOriginalText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewOriginalTextInput() {
    return this._viewOriginalText;
  }
}

export class GlueCatalogTableViewDefinitionRepresentationsList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogTableViewDefinitionRepresentations[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogTableViewDefinitionRepresentationsOutputReference {
    return new GlueCatalogTableViewDefinitionRepresentationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogTableViewDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#definer GlueCatalogTable#definer}
  */
  readonly definer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#is_protected GlueCatalogTable#is_protected}
  */
  readonly isProtected?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#last_refresh_type GlueCatalogTable#last_refresh_type}
  */
  readonly lastRefreshType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#refresh_seconds GlueCatalogTable#refresh_seconds}
  */
  readonly refreshSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#sub_object_version_ids GlueCatalogTable#sub_object_version_ids}
  */
  readonly subObjectVersionIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#sub_objects GlueCatalogTable#sub_objects}
  */
  readonly subObjects?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#view_version_id GlueCatalogTable#view_version_id}
  */
  readonly viewVersionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#view_version_token GlueCatalogTable#view_version_token}
  */
  readonly viewVersionToken?: string;
  /**
  * representations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#representations GlueCatalogTable#representations}
  */
  readonly representations?: GlueCatalogTableViewDefinitionRepresentations[] | cdktn.IResolvable;
}

export function glueCatalogTableViewDefinitionToTerraform(struct?: GlueCatalogTableViewDefinitionOutputReference | GlueCatalogTableViewDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definer: cdktn.stringToTerraform(struct!.definer),
    is_protected: cdktn.booleanToTerraform(struct!.isProtected),
    last_refresh_type: cdktn.stringToTerraform(struct!.lastRefreshType),
    refresh_seconds: cdktn.numberToTerraform(struct!.refreshSeconds),
    sub_object_version_ids: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.subObjectVersionIds),
    sub_objects: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subObjects),
    view_version_id: cdktn.numberToTerraform(struct!.viewVersionId),
    view_version_token: cdktn.stringToTerraform(struct!.viewVersionToken),
    representations: cdktn.listMapper(glueCatalogTableViewDefinitionRepresentationsToTerraform, true)(struct!.representations),
  }
}


export function glueCatalogTableViewDefinitionToHclTerraform(struct?: GlueCatalogTableViewDefinitionOutputReference | GlueCatalogTableViewDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definer: {
      value: cdktn.stringToHclTerraform(struct!.definer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_protected: {
      value: cdktn.booleanToHclTerraform(struct!.isProtected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_refresh_type: {
      value: cdktn.stringToHclTerraform(struct!.lastRefreshType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_seconds: {
      value: cdktn.numberToHclTerraform(struct!.refreshSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_object_version_ids: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.subObjectVersionIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    sub_objects: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subObjects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    view_version_id: {
      value: cdktn.numberToHclTerraform(struct!.viewVersionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    view_version_token: {
      value: cdktn.stringToHclTerraform(struct!.viewVersionToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    representations: {
      value: cdktn.listMapperHcl(glueCatalogTableViewDefinitionRepresentationsToHclTerraform, true)(struct!.representations),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableViewDefinitionRepresentationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableViewDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCatalogTableViewDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definer !== undefined) {
      hasAnyValues = true;
      internalValueResult.definer = this._definer;
    }
    if (this._isProtected !== undefined) {
      hasAnyValues = true;
      internalValueResult.isProtected = this._isProtected;
    }
    if (this._lastRefreshType !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastRefreshType = this._lastRefreshType;
    }
    if (this._refreshSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshSeconds = this._refreshSeconds;
    }
    if (this._subObjectVersionIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subObjectVersionIds = this._subObjectVersionIds;
    }
    if (this._subObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.subObjects = this._subObjects;
    }
    if (this._viewVersionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewVersionId = this._viewVersionId;
    }
    if (this._viewVersionToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewVersionToken = this._viewVersionToken;
    }
    if (this._representations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.representations = this._representations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableViewDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definer = undefined;
      this._isProtected = undefined;
      this._lastRefreshType = undefined;
      this._refreshSeconds = undefined;
      this._subObjectVersionIds = undefined;
      this._subObjects = undefined;
      this._viewVersionId = undefined;
      this._viewVersionToken = undefined;
      this._representations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definer = value.definer;
      this._isProtected = value.isProtected;
      this._lastRefreshType = value.lastRefreshType;
      this._refreshSeconds = value.refreshSeconds;
      this._subObjectVersionIds = value.subObjectVersionIds;
      this._subObjects = value.subObjects;
      this._viewVersionId = value.viewVersionId;
      this._viewVersionToken = value.viewVersionToken;
      this._representations.internalValue = value.representations;
    }
  }

  // definer - computed: true, optional: true, required: false
  private _definer?: string; 
  public get definer() {
    return this.getStringAttribute('definer');
  }
  public set definer(value: string) {
    this._definer = value;
  }
  public resetDefiner() {
    this._definer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definerInput() {
    return this._definer;
  }

  // is_protected - computed: true, optional: true, required: false
  private _isProtected?: boolean | cdktn.IResolvable; 
  public get isProtected() {
    return this.getBooleanAttribute('is_protected');
  }
  public set isProtected(value: boolean | cdktn.IResolvable) {
    this._isProtected = value;
  }
  public resetIsProtected() {
    this._isProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isProtectedInput() {
    return this._isProtected;
  }

  // last_refresh_type - computed: false, optional: true, required: false
  private _lastRefreshType?: string; 
  public get lastRefreshType() {
    return this.getStringAttribute('last_refresh_type');
  }
  public set lastRefreshType(value: string) {
    this._lastRefreshType = value;
  }
  public resetLastRefreshType() {
    this._lastRefreshType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastRefreshTypeInput() {
    return this._lastRefreshType;
  }

  // refresh_seconds - computed: false, optional: true, required: false
  private _refreshSeconds?: number; 
  public get refreshSeconds() {
    return this.getNumberAttribute('refresh_seconds');
  }
  public set refreshSeconds(value: number) {
    this._refreshSeconds = value;
  }
  public resetRefreshSeconds() {
    this._refreshSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshSecondsInput() {
    return this._refreshSeconds;
  }

  // sub_object_version_ids - computed: false, optional: true, required: false
  private _subObjectVersionIds?: number[]; 
  public get subObjectVersionIds() {
    return this.getNumberListAttribute('sub_object_version_ids');
  }
  public set subObjectVersionIds(value: number[]) {
    this._subObjectVersionIds = value;
  }
  public resetSubObjectVersionIds() {
    this._subObjectVersionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subObjectVersionIdsInput() {
    return this._subObjectVersionIds;
  }

  // sub_objects - computed: false, optional: true, required: false
  private _subObjects?: string[]; 
  public get subObjects() {
    return this.getListAttribute('sub_objects');
  }
  public set subObjects(value: string[]) {
    this._subObjects = value;
  }
  public resetSubObjects() {
    this._subObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subObjectsInput() {
    return this._subObjects;
  }

  // view_version_id - computed: false, optional: true, required: false
  private _viewVersionId?: number; 
  public get viewVersionId() {
    return this.getNumberAttribute('view_version_id');
  }
  public set viewVersionId(value: number) {
    this._viewVersionId = value;
  }
  public resetViewVersionId() {
    this._viewVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewVersionIdInput() {
    return this._viewVersionId;
  }

  // view_version_token - computed: false, optional: true, required: false
  private _viewVersionToken?: string; 
  public get viewVersionToken() {
    return this.getStringAttribute('view_version_token');
  }
  public set viewVersionToken(value: string) {
    this._viewVersionToken = value;
  }
  public resetViewVersionToken() {
    this._viewVersionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewVersionTokenInput() {
    return this._viewVersionToken;
  }

  // representations - computed: false, optional: true, required: false
  private _representations = new GlueCatalogTableViewDefinitionRepresentationsList(this, "representations", false);
  public get representations() {
    return this._representations;
  }
  public putRepresentations(value: GlueCatalogTableViewDefinitionRepresentations[] | cdktn.IResolvable) {
    this._representations.internalValue = value;
  }
  public resetRepresentations() {
    this._representations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get representationsInput() {
    return this._representations.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table aws_glue_catalog_table}
*/
export class GlueCatalogTable extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_catalog_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GlueCatalogTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueCatalogTable to import
  * @param importFromId The id of the existing GlueCatalogTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueCatalogTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_catalog_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/glue_catalog_table aws_glue_catalog_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueCatalogTableConfig
  */
  public constructor(scope: Construct, id: string, config: GlueCatalogTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_catalog_table',
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
    this._catalogId = config.catalogId;
    this._databaseName = config.databaseName;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._owner = config.owner;
    this._parameters = config.parameters;
    this._region = config.region;
    this._retention = config.retention;
    this._tableType = config.tableType;
    this._viewExpandedText = config.viewExpandedText;
    this._viewOriginalText = config.viewOriginalText;
    this._openTableFormatInput.internalValue = config.openTableFormatInput;
    this._partitionIndex.internalValue = config.partitionIndex;
    this._partitionKeys.internalValue = config.partitionKeys;
    this._storageDescriptor.internalValue = config.storageDescriptor;
    this._targetTable.internalValue = config.targetTable;
    this._viewDefinition.internalValue = config.viewDefinition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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

  // retention - computed: false, optional: true, required: false
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // table_type - computed: true, optional: true, required: false
  private _tableType?: string; 
  public get tableType() {
    return this.getStringAttribute('table_type');
  }
  public set tableType(value: string) {
    this._tableType = value;
  }
  public resetTableType() {
    this._tableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableTypeInput() {
    return this._tableType;
  }

  // view_expanded_text - computed: false, optional: true, required: false
  private _viewExpandedText?: string; 
  public get viewExpandedText() {
    return this.getStringAttribute('view_expanded_text');
  }
  public set viewExpandedText(value: string) {
    this._viewExpandedText = value;
  }
  public resetViewExpandedText() {
    this._viewExpandedText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewExpandedTextInput() {
    return this._viewExpandedText;
  }

  // view_original_text - computed: false, optional: true, required: false
  private _viewOriginalText?: string; 
  public get viewOriginalText() {
    return this.getStringAttribute('view_original_text');
  }
  public set viewOriginalText(value: string) {
    this._viewOriginalText = value;
  }
  public resetViewOriginalText() {
    this._viewOriginalText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewOriginalTextInput() {
    return this._viewOriginalText;
  }

  // open_table_format_input - computed: false, optional: true, required: false
  private _openTableFormatInput = new GlueCatalogTableOpenTableFormatInputOutputReference(this, "open_table_format_input");
  public get openTableFormatInput() {
    return this._openTableFormatInput;
  }
  public putOpenTableFormatInput(value: GlueCatalogTableOpenTableFormatInput) {
    this._openTableFormatInput.internalValue = value;
  }
  public resetOpenTableFormatInput() {
    this._openTableFormatInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openTableFormatInputInput() {
    return this._openTableFormatInput.internalValue;
  }

  // partition_index - computed: false, optional: true, required: false
  private _partitionIndex = new GlueCatalogTablePartitionIndexList(this, "partition_index", false);
  public get partitionIndex() {
    return this._partitionIndex;
  }
  public putPartitionIndex(value: GlueCatalogTablePartitionIndex[] | cdktn.IResolvable) {
    this._partitionIndex.internalValue = value;
  }
  public resetPartitionIndex() {
    this._partitionIndex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionIndexInput() {
    return this._partitionIndex.internalValue;
  }

  // partition_keys - computed: false, optional: true, required: false
  private _partitionKeys = new GlueCatalogTablePartitionKeysList(this, "partition_keys", false);
  public get partitionKeys() {
    return this._partitionKeys;
  }
  public putPartitionKeys(value: GlueCatalogTablePartitionKeys[] | cdktn.IResolvable) {
    this._partitionKeys.internalValue = value;
  }
  public resetPartitionKeys() {
    this._partitionKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeysInput() {
    return this._partitionKeys.internalValue;
  }

  // storage_descriptor - computed: false, optional: true, required: false
  private _storageDescriptor = new GlueCatalogTableStorageDescriptorOutputReference(this, "storage_descriptor");
  public get storageDescriptor() {
    return this._storageDescriptor;
  }
  public putStorageDescriptor(value: GlueCatalogTableStorageDescriptor) {
    this._storageDescriptor.internalValue = value;
  }
  public resetStorageDescriptor() {
    this._storageDescriptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDescriptorInput() {
    return this._storageDescriptor.internalValue;
  }

  // target_table - computed: false, optional: true, required: false
  private _targetTable = new GlueCatalogTableTargetTableOutputReference(this, "target_table");
  public get targetTable() {
    return this._targetTable;
  }
  public putTargetTable(value: GlueCatalogTableTargetTable) {
    this._targetTable.internalValue = value;
  }
  public resetTargetTable() {
    this._targetTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTableInput() {
    return this._targetTable.internalValue;
  }

  // view_definition - computed: false, optional: true, required: false
  private _viewDefinition = new GlueCatalogTableViewDefinitionOutputReference(this, "view_definition");
  public get viewDefinition() {
    return this._viewDefinition;
  }
  public putViewDefinition(value: GlueCatalogTableViewDefinition) {
    this._viewDefinition.internalValue = value;
  }
  public resetViewDefinition() {
    this._viewDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewDefinitionInput() {
    return this._viewDefinition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktn.stringToTerraform(this._catalogId),
      database_name: cdktn.stringToTerraform(this._databaseName),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      owner: cdktn.stringToTerraform(this._owner),
      parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._parameters),
      region: cdktn.stringToTerraform(this._region),
      retention: cdktn.numberToTerraform(this._retention),
      table_type: cdktn.stringToTerraform(this._tableType),
      view_expanded_text: cdktn.stringToTerraform(this._viewExpandedText),
      view_original_text: cdktn.stringToTerraform(this._viewOriginalText),
      open_table_format_input: glueCatalogTableOpenTableFormatInputToTerraform(this._openTableFormatInput.internalValue),
      partition_index: cdktn.listMapper(glueCatalogTablePartitionIndexToTerraform, true)(this._partitionIndex.internalValue),
      partition_keys: cdktn.listMapper(glueCatalogTablePartitionKeysToTerraform, true)(this._partitionKeys.internalValue),
      storage_descriptor: glueCatalogTableStorageDescriptorToTerraform(this._storageDescriptor.internalValue),
      target_table: glueCatalogTableTargetTableToTerraform(this._targetTable.internalValue),
      view_definition: glueCatalogTableViewDefinitionToTerraform(this._viewDefinition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_id: {
        value: cdktn.stringToHclTerraform(this._catalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktn.stringToHclTerraform(this._databaseName),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
      owner: {
        value: cdktn.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention: {
        value: cdktn.numberToHclTerraform(this._retention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      table_type: {
        value: cdktn.stringToHclTerraform(this._tableType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view_expanded_text: {
        value: cdktn.stringToHclTerraform(this._viewExpandedText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view_original_text: {
        value: cdktn.stringToHclTerraform(this._viewOriginalText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      open_table_format_input: {
        value: glueCatalogTableOpenTableFormatInputToHclTerraform(this._openTableFormatInput.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCatalogTableOpenTableFormatInputList",
      },
      partition_index: {
        value: cdktn.listMapperHcl(glueCatalogTablePartitionIndexToHclTerraform, true)(this._partitionIndex.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCatalogTablePartitionIndexList",
      },
      partition_keys: {
        value: cdktn.listMapperHcl(glueCatalogTablePartitionKeysToHclTerraform, true)(this._partitionKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCatalogTablePartitionKeysList",
      },
      storage_descriptor: {
        value: glueCatalogTableStorageDescriptorToHclTerraform(this._storageDescriptor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCatalogTableStorageDescriptorList",
      },
      target_table: {
        value: glueCatalogTableTargetTableToHclTerraform(this._targetTable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCatalogTableTargetTableList",
      },
      view_definition: {
        value: glueCatalogTableViewDefinitionToHclTerraform(this._viewDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCatalogTableViewDefinitionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
