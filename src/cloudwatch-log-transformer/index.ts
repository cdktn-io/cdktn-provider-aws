/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudwatchLogTransformerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#log_group_arn CloudwatchLogTransformer#log_group_arn}
  */
  readonly logGroupArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#region CloudwatchLogTransformer#region}
  */
  readonly region?: string;
  /**
  * transformer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#transformer_config CloudwatchLogTransformer#transformer_config}
  */
  readonly transformerConfig?: CloudwatchLogTransformerTransformerConfig[] | cdktn.IResolvable;
}
export interface CloudwatchLogTransformerTransformerConfigAddKeysEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#key CloudwatchLogTransformer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists CloudwatchLogTransformer#overwrite_if_exists}
  */
  readonly overwriteIfExists?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#value CloudwatchLogTransformer#value}
  */
  readonly value: string;
}

export function cloudwatchLogTransformerTransformerConfigAddKeysEntryToTerraform(struct?: CloudwatchLogTransformerTransformerConfigAddKeysEntry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    overwrite_if_exists: cdktn.booleanToTerraform(struct!.overwriteIfExists),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cloudwatchLogTransformerTransformerConfigAddKeysEntryToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigAddKeysEntry | cdktn.IResolvable): any {
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
    overwrite_if_exists: {
      value: cdktn.booleanToHclTerraform(struct!.overwriteIfExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigAddKeysEntry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._overwriteIfExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteIfExists = this._overwriteIfExists;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigAddKeysEntry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._overwriteIfExists = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._overwriteIfExists = value.overwriteIfExists;
      this._value = value.value;
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

  // overwrite_if_exists - computed: true, optional: true, required: false
  private _overwriteIfExists?: boolean | cdktn.IResolvable; 
  public get overwriteIfExists() {
    return this.getBooleanAttribute('overwrite_if_exists');
  }
  public set overwriteIfExists(value: boolean | cdktn.IResolvable) {
    this._overwriteIfExists = value;
  }
  public resetOverwriteIfExists() {
    this._overwriteIfExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteIfExistsInput() {
    return this._overwriteIfExists;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CloudwatchLogTransformerTransformerConfigAddKeysEntryList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigAddKeysEntry[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference {
    return new CloudwatchLogTransformerTransformerConfigAddKeysEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigAddKeys {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#entry CloudwatchLogTransformer#entry}
  */
  readonly entry?: CloudwatchLogTransformerTransformerConfigAddKeysEntry[] | cdktn.IResolvable;
}

export function cloudwatchLogTransformerTransformerConfigAddKeysToTerraform(struct?: CloudwatchLogTransformerTransformerConfigAddKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entry: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigAddKeysEntryToTerraform, true)(struct!.entry),
  }
}


export function cloudwatchLogTransformerTransformerConfigAddKeysToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigAddKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entry: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigAddKeysEntryToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigAddKeysEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigAddKeysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigAddKeys | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigAddKeys | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry.internalValue = value.entry;
    }
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new CloudwatchLogTransformerTransformerConfigAddKeysEntryList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: CloudwatchLogTransformerTransformerConfigAddKeysEntry[] | cdktn.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}

export class CloudwatchLogTransformerTransformerConfigAddKeysList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigAddKeys[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigAddKeysOutputReference {
    return new CloudwatchLogTransformerTransformerConfigAddKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigCopyValueEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists CloudwatchLogTransformer#overwrite_if_exists}
  */
  readonly overwriteIfExists?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#target CloudwatchLogTransformer#target}
  */
  readonly target: string;
}

export function cloudwatchLogTransformerTransformerConfigCopyValueEntryToTerraform(struct?: CloudwatchLogTransformerTransformerConfigCopyValueEntry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    overwrite_if_exists: cdktn.booleanToTerraform(struct!.overwriteIfExists),
    source: cdktn.stringToTerraform(struct!.source),
    target: cdktn.stringToTerraform(struct!.target),
  }
}


export function cloudwatchLogTransformerTransformerConfigCopyValueEntryToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigCopyValueEntry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    overwrite_if_exists: {
      value: cdktn.booleanToHclTerraform(struct!.overwriteIfExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigCopyValueEntry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overwriteIfExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteIfExists = this._overwriteIfExists;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigCopyValueEntry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overwriteIfExists = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overwriteIfExists = value.overwriteIfExists;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // overwrite_if_exists - computed: true, optional: true, required: false
  private _overwriteIfExists?: boolean | cdktn.IResolvable; 
  public get overwriteIfExists() {
    return this.getBooleanAttribute('overwrite_if_exists');
  }
  public set overwriteIfExists(value: boolean | cdktn.IResolvable) {
    this._overwriteIfExists = value;
  }
  public resetOverwriteIfExists() {
    this._overwriteIfExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteIfExistsInput() {
    return this._overwriteIfExists;
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
}

export class CloudwatchLogTransformerTransformerConfigCopyValueEntryList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigCopyValueEntry[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference {
    return new CloudwatchLogTransformerTransformerConfigCopyValueEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigCopyValue {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#entry CloudwatchLogTransformer#entry}
  */
  readonly entry?: CloudwatchLogTransformerTransformerConfigCopyValueEntry[] | cdktn.IResolvable;
}

export function cloudwatchLogTransformerTransformerConfigCopyValueToTerraform(struct?: CloudwatchLogTransformerTransformerConfigCopyValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entry: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigCopyValueEntryToTerraform, true)(struct!.entry),
  }
}


export function cloudwatchLogTransformerTransformerConfigCopyValueToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigCopyValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entry: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigCopyValueEntryToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigCopyValueEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigCopyValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigCopyValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigCopyValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry.internalValue = value.entry;
    }
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new CloudwatchLogTransformerTransformerConfigCopyValueEntryList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: CloudwatchLogTransformerTransformerConfigCopyValueEntry[] | cdktn.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}

export class CloudwatchLogTransformerTransformerConfigCopyValueList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigCopyValue[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigCopyValueOutputReference {
    return new CloudwatchLogTransformerTransformerConfigCopyValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigCsv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#columns CloudwatchLogTransformer#columns}
  */
  readonly columns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#delimiter CloudwatchLogTransformer#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#quote_character CloudwatchLogTransformer#quote_character}
  */
  readonly quoteCharacter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}
  */
  readonly source?: string;
}

export function cloudwatchLogTransformerTransformerConfigCsvToTerraform(struct?: CloudwatchLogTransformerTransformerConfigCsv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columns),
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
    quote_character: cdktn.stringToTerraform(struct!.quoteCharacter),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function cloudwatchLogTransformerTransformerConfigCsvToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigCsv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    delimiter: {
      value: cdktn.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quote_character: {
      value: cdktn.stringToHclTerraform(struct!.quoteCharacter),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigCsvOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigCsv | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._quoteCharacter !== undefined) {
      hasAnyValues = true;
      internalValueResult.quoteCharacter = this._quoteCharacter;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigCsv | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._delimiter = undefined;
      this._quoteCharacter = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._delimiter = value.delimiter;
      this._quoteCharacter = value.quoteCharacter;
      this._source = value.source;
    }
  }

  // columns - computed: true, optional: true, required: false
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // delimiter - computed: true, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // quote_character - computed: true, optional: true, required: false
  private _quoteCharacter?: string; 
  public get quoteCharacter() {
    return this.getStringAttribute('quote_character');
  }
  public set quoteCharacter(value: string) {
    this._quoteCharacter = value;
  }
  public resetQuoteCharacter() {
    this._quoteCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteCharacterInput() {
    return this._quoteCharacter;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class CloudwatchLogTransformerTransformerConfigCsvList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigCsv[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigCsvOutputReference {
    return new CloudwatchLogTransformerTransformerConfigCsvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigDateTimeConverter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#locale CloudwatchLogTransformer#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#match_patterns CloudwatchLogTransformer#match_patterns}
  */
  readonly matchPatterns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#source_timezone CloudwatchLogTransformer#source_timezone}
  */
  readonly sourceTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#target CloudwatchLogTransformer#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#target_format CloudwatchLogTransformer#target_format}
  */
  readonly targetFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#target_timezone CloudwatchLogTransformer#target_timezone}
  */
  readonly targetTimezone?: string;
}

export function cloudwatchLogTransformerTransformerConfigDateTimeConverterToTerraform(struct?: CloudwatchLogTransformerTransformerConfigDateTimeConverter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    locale: cdktn.stringToTerraform(struct!.locale),
    match_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchPatterns),
    source: cdktn.stringToTerraform(struct!.source),
    source_timezone: cdktn.stringToTerraform(struct!.sourceTimezone),
    target: cdktn.stringToTerraform(struct!.target),
    target_format: cdktn.stringToTerraform(struct!.targetFormat),
    target_timezone: cdktn.stringToTerraform(struct!.targetTimezone),
  }
}


export function cloudwatchLogTransformerTransformerConfigDateTimeConverterToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigDateTimeConverter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    locale: {
      value: cdktn.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_timezone: {
      value: cdktn.stringToHclTerraform(struct!.sourceTimezone),
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
    target_format: {
      value: cdktn.stringToHclTerraform(struct!.targetFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_timezone: {
      value: cdktn.stringToHclTerraform(struct!.targetTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigDateTimeConverter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    if (this._matchPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPatterns = this._matchPatterns;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourceTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTimezone = this._sourceTimezone;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._targetFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFormat = this._targetFormat;
    }
    if (this._targetTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTimezone = this._targetTimezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigDateTimeConverter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locale = undefined;
      this._matchPatterns = undefined;
      this._source = undefined;
      this._sourceTimezone = undefined;
      this._target = undefined;
      this._targetFormat = undefined;
      this._targetTimezone = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locale = value.locale;
      this._matchPatterns = value.matchPatterns;
      this._source = value.source;
      this._sourceTimezone = value.sourceTimezone;
      this._target = value.target;
      this._targetFormat = value.targetFormat;
      this._targetTimezone = value.targetTimezone;
    }
  }

  // locale - computed: true, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // match_patterns - computed: false, optional: false, required: true
  private _matchPatterns?: string[]; 
  public get matchPatterns() {
    return this.getListAttribute('match_patterns');
  }
  public set matchPatterns(value: string[]) {
    this._matchPatterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternsInput() {
    return this._matchPatterns;
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

  // source_timezone - computed: true, optional: true, required: false
  private _sourceTimezone?: string; 
  public get sourceTimezone() {
    return this.getStringAttribute('source_timezone');
  }
  public set sourceTimezone(value: string) {
    this._sourceTimezone = value;
  }
  public resetSourceTimezone() {
    this._sourceTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTimezoneInput() {
    return this._sourceTimezone;
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

  // target_format - computed: true, optional: true, required: false
  private _targetFormat?: string; 
  public get targetFormat() {
    return this.getStringAttribute('target_format');
  }
  public set targetFormat(value: string) {
    this._targetFormat = value;
  }
  public resetTargetFormat() {
    this._targetFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFormatInput() {
    return this._targetFormat;
  }

  // target_timezone - computed: true, optional: true, required: false
  private _targetTimezone?: string; 
  public get targetTimezone() {
    return this.getStringAttribute('target_timezone');
  }
  public set targetTimezone(value: string) {
    this._targetTimezone = value;
  }
  public resetTargetTimezone() {
    this._targetTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTimezoneInput() {
    return this._targetTimezone;
  }
}

export class CloudwatchLogTransformerTransformerConfigDateTimeConverterList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigDateTimeConverter[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference {
    return new CloudwatchLogTransformerTransformerConfigDateTimeConverterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigDeleteKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#with_keys CloudwatchLogTransformer#with_keys}
  */
  readonly withKeys: string[];
}

export function cloudwatchLogTransformerTransformerConfigDeleteKeysToTerraform(struct?: CloudwatchLogTransformerTransformerConfigDeleteKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    with_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.withKeys),
  }
}


export function cloudwatchLogTransformerTransformerConfigDeleteKeysToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigDeleteKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    with_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.withKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigDeleteKeys | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._withKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.withKeys = this._withKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigDeleteKeys | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._withKeys = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._withKeys = value.withKeys;
    }
  }

  // with_keys - computed: false, optional: false, required: true
  private _withKeys?: string[]; 
  public get withKeys() {
    return this.getListAttribute('with_keys');
  }
  public set withKeys(value: string[]) {
    this._withKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get withKeysInput() {
    return this._withKeys;
  }
}

export class CloudwatchLogTransformerTransformerConfigDeleteKeysList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigDeleteKeys[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference {
    return new CloudwatchLogTransformerTransformerConfigDeleteKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigGrok {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#match CloudwatchLogTransformer#match}
  */
  readonly match: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}
  */
  readonly source?: string;
}

export function cloudwatchLogTransformerTransformerConfigGrokToTerraform(struct?: CloudwatchLogTransformerTransformerConfigGrok | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match: cdktn.stringToTerraform(struct!.match),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function cloudwatchLogTransformerTransformerConfigGrokToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigGrok | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match: {
      value: cdktn.stringToHclTerraform(struct!.match),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigGrokOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigGrok | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigGrok | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
      this._source = value.source;
    }
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class CloudwatchLogTransformerTransformerConfigGrokList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigGrok[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigGrokOutputReference {
    return new CloudwatchLogTransformerTransformerConfigGrokOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigListToMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#flatten CloudwatchLogTransformer#flatten}
  */
  readonly flatten?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#flattened_element CloudwatchLogTransformer#flattened_element}
  */
  readonly flattenedElement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#key CloudwatchLogTransformer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#target CloudwatchLogTransformer#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#value_key CloudwatchLogTransformer#value_key}
  */
  readonly valueKey?: string;
}

export function cloudwatchLogTransformerTransformerConfigListToMapToTerraform(struct?: CloudwatchLogTransformerTransformerConfigListToMap | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    flatten: cdktn.booleanToTerraform(struct!.flatten),
    flattened_element: cdktn.stringToTerraform(struct!.flattenedElement),
    key: cdktn.stringToTerraform(struct!.key),
    source: cdktn.stringToTerraform(struct!.source),
    target: cdktn.stringToTerraform(struct!.target),
    value_key: cdktn.stringToTerraform(struct!.valueKey),
  }
}


export function cloudwatchLogTransformerTransformerConfigListToMapToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigListToMap | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    flatten: {
      value: cdktn.booleanToHclTerraform(struct!.flatten),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flattened_element: {
      value: cdktn.stringToHclTerraform(struct!.flattenedElement),
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
    value_key: {
      value: cdktn.stringToHclTerraform(struct!.valueKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigListToMapOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigListToMap | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flatten !== undefined) {
      hasAnyValues = true;
      internalValueResult.flatten = this._flatten;
    }
    if (this._flattenedElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.flattenedElement = this._flattenedElement;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._valueKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueKey = this._valueKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigListToMap | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flatten = undefined;
      this._flattenedElement = undefined;
      this._key = undefined;
      this._source = undefined;
      this._target = undefined;
      this._valueKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flatten = value.flatten;
      this._flattenedElement = value.flattenedElement;
      this._key = value.key;
      this._source = value.source;
      this._target = value.target;
      this._valueKey = value.valueKey;
    }
  }

  // flatten - computed: true, optional: true, required: false
  private _flatten?: boolean | cdktn.IResolvable; 
  public get flatten() {
    return this.getBooleanAttribute('flatten');
  }
  public set flatten(value: boolean | cdktn.IResolvable) {
    this._flatten = value;
  }
  public resetFlatten() {
    this._flatten = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flattenInput() {
    return this._flatten;
  }

  // flattened_element - computed: true, optional: true, required: false
  private _flattenedElement?: string; 
  public get flattenedElement() {
    return this.getStringAttribute('flattened_element');
  }
  public set flattenedElement(value: string) {
    this._flattenedElement = value;
  }
  public resetFlattenedElement() {
    this._flattenedElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flattenedElementInput() {
    return this._flattenedElement;
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

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // value_key - computed: true, optional: true, required: false
  private _valueKey?: string; 
  public get valueKey() {
    return this.getStringAttribute('value_key');
  }
  public set valueKey(value: string) {
    this._valueKey = value;
  }
  public resetValueKey() {
    this._valueKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueKeyInput() {
    return this._valueKey;
  }
}

export class CloudwatchLogTransformerTransformerConfigListToMapList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigListToMap[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigListToMapOutputReference {
    return new CloudwatchLogTransformerTransformerConfigListToMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigLowerCaseString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#with_keys CloudwatchLogTransformer#with_keys}
  */
  readonly withKeys: string[];
}

export function cloudwatchLogTransformerTransformerConfigLowerCaseStringToTerraform(struct?: CloudwatchLogTransformerTransformerConfigLowerCaseString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    with_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.withKeys),
  }
}


export function cloudwatchLogTransformerTransformerConfigLowerCaseStringToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigLowerCaseString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    with_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.withKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigLowerCaseString | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._withKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.withKeys = this._withKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigLowerCaseString | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._withKeys = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._withKeys = value.withKeys;
    }
  }

  // with_keys - computed: false, optional: false, required: true
  private _withKeys?: string[]; 
  public get withKeys() {
    return this.getListAttribute('with_keys');
  }
  public set withKeys(value: string[]) {
    this._withKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get withKeysInput() {
    return this._withKeys;
  }
}

export class CloudwatchLogTransformerTransformerConfigLowerCaseStringList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigLowerCaseString[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference {
    return new CloudwatchLogTransformerTransformerConfigLowerCaseStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigMoveKeysEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists CloudwatchLogTransformer#overwrite_if_exists}
  */
  readonly overwriteIfExists?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#target CloudwatchLogTransformer#target}
  */
  readonly target: string;
}

export function cloudwatchLogTransformerTransformerConfigMoveKeysEntryToTerraform(struct?: CloudwatchLogTransformerTransformerConfigMoveKeysEntry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    overwrite_if_exists: cdktn.booleanToTerraform(struct!.overwriteIfExists),
    source: cdktn.stringToTerraform(struct!.source),
    target: cdktn.stringToTerraform(struct!.target),
  }
}


export function cloudwatchLogTransformerTransformerConfigMoveKeysEntryToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigMoveKeysEntry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    overwrite_if_exists: {
      value: cdktn.booleanToHclTerraform(struct!.overwriteIfExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigMoveKeysEntry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overwriteIfExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteIfExists = this._overwriteIfExists;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigMoveKeysEntry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overwriteIfExists = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overwriteIfExists = value.overwriteIfExists;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // overwrite_if_exists - computed: true, optional: true, required: false
  private _overwriteIfExists?: boolean | cdktn.IResolvable; 
  public get overwriteIfExists() {
    return this.getBooleanAttribute('overwrite_if_exists');
  }
  public set overwriteIfExists(value: boolean | cdktn.IResolvable) {
    this._overwriteIfExists = value;
  }
  public resetOverwriteIfExists() {
    this._overwriteIfExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteIfExistsInput() {
    return this._overwriteIfExists;
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
}

export class CloudwatchLogTransformerTransformerConfigMoveKeysEntryList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigMoveKeysEntry[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference {
    return new CloudwatchLogTransformerTransformerConfigMoveKeysEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigMoveKeys {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#entry CloudwatchLogTransformer#entry}
  */
  readonly entry?: CloudwatchLogTransformerTransformerConfigMoveKeysEntry[] | cdktn.IResolvable;
}

export function cloudwatchLogTransformerTransformerConfigMoveKeysToTerraform(struct?: CloudwatchLogTransformerTransformerConfigMoveKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entry: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigMoveKeysEntryToTerraform, true)(struct!.entry),
  }
}


export function cloudwatchLogTransformerTransformerConfigMoveKeysToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigMoveKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entry: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigMoveKeysEntryToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigMoveKeysEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigMoveKeys | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigMoveKeys | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry.internalValue = value.entry;
    }
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new CloudwatchLogTransformerTransformerConfigMoveKeysEntryList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: CloudwatchLogTransformerTransformerConfigMoveKeysEntry[] | cdktn.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}

export class CloudwatchLogTransformerTransformerConfigMoveKeysList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigMoveKeys[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference {
    return new CloudwatchLogTransformerTransformerConfigMoveKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigParseCloudfront {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}
  */
  readonly source?: string;
}

export function cloudwatchLogTransformerTransformerConfigParseCloudfrontToTerraform(struct?: CloudwatchLogTransformerTransformerConfigParseCloudfront | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function cloudwatchLogTransformerTransformerConfigParseCloudfrontToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigParseCloudfront | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigParseCloudfront | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigParseCloudfront | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
    }
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class CloudwatchLogTransformerTransformerConfigParseCloudfrontList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigParseCloudfront[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference {
    return new CloudwatchLogTransformerTransformerConfigParseCloudfrontOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigParseJson {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#destination CloudwatchLogTransformer#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}
  */
  readonly source?: string;
}

export function cloudwatchLogTransformerTransformerConfigParseJsonToTerraform(struct?: CloudwatchLogTransformerTransformerConfigParseJson | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function cloudwatchLogTransformerTransformerConfigParseJsonToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigParseJson | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigParseJsonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigParseJson | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigParseJson | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._source = value.source;
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class CloudwatchLogTransformerTransformerConfigParseJsonList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigParseJson[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigParseJsonOutputReference {
    return new CloudwatchLogTransformerTransformerConfigParseJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigParseKeyValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#destination CloudwatchLogTransformer#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#field_delimiter CloudwatchLogTransformer#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#key_prefix CloudwatchLogTransformer#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#key_value_delimiter CloudwatchLogTransformer#key_value_delimiter}
  */
  readonly keyValueDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#non_match_value CloudwatchLogTransformer#non_match_value}
  */
  readonly nonMatchValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists CloudwatchLogTransformer#overwrite_if_exists}
  */
  readonly overwriteIfExists?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}
  */
  readonly source?: string;
}

export function cloudwatchLogTransformerTransformerConfigParseKeyValueToTerraform(struct?: CloudwatchLogTransformerTransformerConfigParseKeyValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
    field_delimiter: cdktn.stringToTerraform(struct!.fieldDelimiter),
    key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
    key_value_delimiter: cdktn.stringToTerraform(struct!.keyValueDelimiter),
    non_match_value: cdktn.stringToTerraform(struct!.nonMatchValue),
    overwrite_if_exists: cdktn.booleanToTerraform(struct!.overwriteIfExists),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function cloudwatchLogTransformerTransformerConfigParseKeyValueToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigParseKeyValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.fieldDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_value_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.keyValueDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_match_value: {
      value: cdktn.stringToHclTerraform(struct!.nonMatchValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite_if_exists: {
      value: cdktn.booleanToHclTerraform(struct!.overwriteIfExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigParseKeyValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._keyValueDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValueDelimiter = this._keyValueDelimiter;
    }
    if (this._nonMatchValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonMatchValue = this._nonMatchValue;
    }
    if (this._overwriteIfExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteIfExists = this._overwriteIfExists;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigParseKeyValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._fieldDelimiter = undefined;
      this._keyPrefix = undefined;
      this._keyValueDelimiter = undefined;
      this._nonMatchValue = undefined;
      this._overwriteIfExists = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._fieldDelimiter = value.fieldDelimiter;
      this._keyPrefix = value.keyPrefix;
      this._keyValueDelimiter = value.keyValueDelimiter;
      this._nonMatchValue = value.nonMatchValue;
      this._overwriteIfExists = value.overwriteIfExists;
      this._source = value.source;
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // field_delimiter - computed: true, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // key_prefix - computed: true, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }

  // key_value_delimiter - computed: true, optional: true, required: false
  private _keyValueDelimiter?: string; 
  public get keyValueDelimiter() {
    return this.getStringAttribute('key_value_delimiter');
  }
  public set keyValueDelimiter(value: string) {
    this._keyValueDelimiter = value;
  }
  public resetKeyValueDelimiter() {
    this._keyValueDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueDelimiterInput() {
    return this._keyValueDelimiter;
  }

  // non_match_value - computed: true, optional: true, required: false
  private _nonMatchValue?: string; 
  public get nonMatchValue() {
    return this.getStringAttribute('non_match_value');
  }
  public set nonMatchValue(value: string) {
    this._nonMatchValue = value;
  }
  public resetNonMatchValue() {
    this._nonMatchValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonMatchValueInput() {
    return this._nonMatchValue;
  }

  // overwrite_if_exists - computed: true, optional: true, required: false
  private _overwriteIfExists?: boolean | cdktn.IResolvable; 
  public get overwriteIfExists() {
    return this.getBooleanAttribute('overwrite_if_exists');
  }
  public set overwriteIfExists(value: boolean | cdktn.IResolvable) {
    this._overwriteIfExists = value;
  }
  public resetOverwriteIfExists() {
    this._overwriteIfExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteIfExistsInput() {
    return this._overwriteIfExists;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class CloudwatchLogTransformerTransformerConfigParseKeyValueList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigParseKeyValue[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference {
    return new CloudwatchLogTransformerTransformerConfigParseKeyValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigParsePostgres {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}
  */
  readonly source?: string;
}

export function cloudwatchLogTransformerTransformerConfigParsePostgresToTerraform(struct?: CloudwatchLogTransformerTransformerConfigParsePostgres | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function cloudwatchLogTransformerTransformerConfigParsePostgresToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigParsePostgres | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigParsePostgres | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigParsePostgres | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
    }
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class CloudwatchLogTransformerTransformerConfigParsePostgresList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigParsePostgres[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference {
    return new CloudwatchLogTransformerTransformerConfigParsePostgresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigParseRoute53 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}
  */
  readonly source?: string;
}

export function cloudwatchLogTransformerTransformerConfigParseRoute53ToTerraform(struct?: CloudwatchLogTransformerTransformerConfigParseRoute53 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function cloudwatchLogTransformerTransformerConfigParseRoute53ToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigParseRoute53 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigParseRoute53 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigParseRoute53 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
    }
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class CloudwatchLogTransformerTransformerConfigParseRoute53List extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigParseRoute53[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference {
    return new CloudwatchLogTransformerTransformerConfigParseRoute53OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigParseToOcsf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#event_source CloudwatchLogTransformer#event_source}
  */
  readonly eventSource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#ocsf_version CloudwatchLogTransformer#ocsf_version}
  */
  readonly ocsfVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}
  */
  readonly source?: string;
}

export function cloudwatchLogTransformerTransformerConfigParseToOcsfToTerraform(struct?: CloudwatchLogTransformerTransformerConfigParseToOcsf | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_source: cdktn.stringToTerraform(struct!.eventSource),
    ocsf_version: cdktn.stringToTerraform(struct!.ocsfVersion),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function cloudwatchLogTransformerTransformerConfigParseToOcsfToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigParseToOcsf | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_source: {
      value: cdktn.stringToHclTerraform(struct!.eventSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsf_version: {
      value: cdktn.stringToHclTerraform(struct!.ocsfVersion),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigParseToOcsf | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSource = this._eventSource;
    }
    if (this._ocsfVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocsfVersion = this._ocsfVersion;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigParseToOcsf | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventSource = undefined;
      this._ocsfVersion = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventSource = value.eventSource;
      this._ocsfVersion = value.ocsfVersion;
      this._source = value.source;
    }
  }

  // event_source - computed: false, optional: false, required: true
  private _eventSource?: string; 
  public get eventSource() {
    return this.getStringAttribute('event_source');
  }
  public set eventSource(value: string) {
    this._eventSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceInput() {
    return this._eventSource;
  }

  // ocsf_version - computed: false, optional: false, required: true
  private _ocsfVersion?: string; 
  public get ocsfVersion() {
    return this.getStringAttribute('ocsf_version');
  }
  public set ocsfVersion(value: string) {
    this._ocsfVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocsfVersionInput() {
    return this._ocsfVersion;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class CloudwatchLogTransformerTransformerConfigParseToOcsfList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigParseToOcsf[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference {
    return new CloudwatchLogTransformerTransformerConfigParseToOcsfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigParseVpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}
  */
  readonly source?: string;
}

export function cloudwatchLogTransformerTransformerConfigParseVpcToTerraform(struct?: CloudwatchLogTransformerTransformerConfigParseVpc | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function cloudwatchLogTransformerTransformerConfigParseVpcToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigParseVpc | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigParseVpcOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigParseVpc | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigParseVpc | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
    }
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class CloudwatchLogTransformerTransformerConfigParseVpcList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigParseVpc[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigParseVpcOutputReference {
    return new CloudwatchLogTransformerTransformerConfigParseVpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigParseWaf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}
  */
  readonly source?: string;
}

export function cloudwatchLogTransformerTransformerConfigParseWafToTerraform(struct?: CloudwatchLogTransformerTransformerConfigParseWaf | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function cloudwatchLogTransformerTransformerConfigParseWafToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigParseWaf | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigParseWafOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigParseWaf | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigParseWaf | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
    }
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class CloudwatchLogTransformerTransformerConfigParseWafList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigParseWaf[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigParseWafOutputReference {
    return new CloudwatchLogTransformerTransformerConfigParseWafOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigRenameKeysEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#key CloudwatchLogTransformer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#overwrite_if_exists CloudwatchLogTransformer#overwrite_if_exists}
  */
  readonly overwriteIfExists?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#rename_to CloudwatchLogTransformer#rename_to}
  */
  readonly renameTo: string;
}

export function cloudwatchLogTransformerTransformerConfigRenameKeysEntryToTerraform(struct?: CloudwatchLogTransformerTransformerConfigRenameKeysEntry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    overwrite_if_exists: cdktn.booleanToTerraform(struct!.overwriteIfExists),
    rename_to: cdktn.stringToTerraform(struct!.renameTo),
  }
}


export function cloudwatchLogTransformerTransformerConfigRenameKeysEntryToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigRenameKeysEntry | cdktn.IResolvable): any {
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
    overwrite_if_exists: {
      value: cdktn.booleanToHclTerraform(struct!.overwriteIfExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rename_to: {
      value: cdktn.stringToHclTerraform(struct!.renameTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigRenameKeysEntry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._overwriteIfExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteIfExists = this._overwriteIfExists;
    }
    if (this._renameTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameTo = this._renameTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigRenameKeysEntry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._overwriteIfExists = undefined;
      this._renameTo = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._overwriteIfExists = value.overwriteIfExists;
      this._renameTo = value.renameTo;
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

  // overwrite_if_exists - computed: true, optional: true, required: false
  private _overwriteIfExists?: boolean | cdktn.IResolvable; 
  public get overwriteIfExists() {
    return this.getBooleanAttribute('overwrite_if_exists');
  }
  public set overwriteIfExists(value: boolean | cdktn.IResolvable) {
    this._overwriteIfExists = value;
  }
  public resetOverwriteIfExists() {
    this._overwriteIfExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteIfExistsInput() {
    return this._overwriteIfExists;
  }

  // rename_to - computed: false, optional: false, required: true
  private _renameTo?: string; 
  public get renameTo() {
    return this.getStringAttribute('rename_to');
  }
  public set renameTo(value: string) {
    this._renameTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renameToInput() {
    return this._renameTo;
  }
}

export class CloudwatchLogTransformerTransformerConfigRenameKeysEntryList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigRenameKeysEntry[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference {
    return new CloudwatchLogTransformerTransformerConfigRenameKeysEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigRenameKeys {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#entry CloudwatchLogTransformer#entry}
  */
  readonly entry?: CloudwatchLogTransformerTransformerConfigRenameKeysEntry[] | cdktn.IResolvable;
}

export function cloudwatchLogTransformerTransformerConfigRenameKeysToTerraform(struct?: CloudwatchLogTransformerTransformerConfigRenameKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entry: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigRenameKeysEntryToTerraform, true)(struct!.entry),
  }
}


export function cloudwatchLogTransformerTransformerConfigRenameKeysToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigRenameKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entry: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigRenameKeysEntryToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigRenameKeysEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigRenameKeys | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigRenameKeys | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry.internalValue = value.entry;
    }
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new CloudwatchLogTransformerTransformerConfigRenameKeysEntryList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: CloudwatchLogTransformerTransformerConfigRenameKeysEntry[] | cdktn.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}

export class CloudwatchLogTransformerTransformerConfigRenameKeysList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigRenameKeys[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference {
    return new CloudwatchLogTransformerTransformerConfigRenameKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigSplitStringEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#delimiter CloudwatchLogTransformer#delimiter}
  */
  readonly delimiter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}
  */
  readonly source: string;
}

export function cloudwatchLogTransformerTransformerConfigSplitStringEntryToTerraform(struct?: CloudwatchLogTransformerTransformerConfigSplitStringEntry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function cloudwatchLogTransformerTransformerConfigSplitStringEntryToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigSplitStringEntry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delimiter: {
      value: cdktn.stringToHclTerraform(struct!.delimiter),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigSplitStringEntry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigSplitStringEntry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delimiter = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delimiter = value.delimiter;
      this._source = value.source;
    }
  }

  // delimiter - computed: false, optional: false, required: true
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
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
}

export class CloudwatchLogTransformerTransformerConfigSplitStringEntryList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigSplitStringEntry[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference {
    return new CloudwatchLogTransformerTransformerConfigSplitStringEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigSplitString {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#entry CloudwatchLogTransformer#entry}
  */
  readonly entry?: CloudwatchLogTransformerTransformerConfigSplitStringEntry[] | cdktn.IResolvable;
}

export function cloudwatchLogTransformerTransformerConfigSplitStringToTerraform(struct?: CloudwatchLogTransformerTransformerConfigSplitString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entry: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigSplitStringEntryToTerraform, true)(struct!.entry),
  }
}


export function cloudwatchLogTransformerTransformerConfigSplitStringToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigSplitString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entry: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigSplitStringEntryToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigSplitStringEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigSplitStringOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigSplitString | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigSplitString | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry.internalValue = value.entry;
    }
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new CloudwatchLogTransformerTransformerConfigSplitStringEntryList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: CloudwatchLogTransformerTransformerConfigSplitStringEntry[] | cdktn.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}

export class CloudwatchLogTransformerTransformerConfigSplitStringList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigSplitString[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigSplitStringOutputReference {
    return new CloudwatchLogTransformerTransformerConfigSplitStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigSubstituteStringEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#from CloudwatchLogTransformer#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#source CloudwatchLogTransformer#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#to CloudwatchLogTransformer#to}
  */
  readonly to: string;
}

export function cloudwatchLogTransformerTransformerConfigSubstituteStringEntryToTerraform(struct?: CloudwatchLogTransformerTransformerConfigSubstituteStringEntry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.stringToTerraform(struct!.from),
    source: cdktn.stringToTerraform(struct!.source),
    to: cdktn.stringToTerraform(struct!.to),
  }
}


export function cloudwatchLogTransformerTransformerConfigSubstituteStringEntryToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigSubstituteStringEntry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from: {
      value: cdktn.stringToHclTerraform(struct!.from),
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
    to: {
      value: cdktn.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigSubstituteStringEntry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigSubstituteStringEntry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._source = undefined;
      this._to = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._source = value.source;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
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

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigSubstituteStringEntry[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference {
    return new CloudwatchLogTransformerTransformerConfigSubstituteStringEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigSubstituteString {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#entry CloudwatchLogTransformer#entry}
  */
  readonly entry?: CloudwatchLogTransformerTransformerConfigSubstituteStringEntry[] | cdktn.IResolvable;
}

export function cloudwatchLogTransformerTransformerConfigSubstituteStringToTerraform(struct?: CloudwatchLogTransformerTransformerConfigSubstituteString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entry: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigSubstituteStringEntryToTerraform, true)(struct!.entry),
  }
}


export function cloudwatchLogTransformerTransformerConfigSubstituteStringToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigSubstituteString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entry: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigSubstituteStringEntryToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigSubstituteString | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigSubstituteString | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry.internalValue = value.entry;
    }
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new CloudwatchLogTransformerTransformerConfigSubstituteStringEntryList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: CloudwatchLogTransformerTransformerConfigSubstituteStringEntry[] | cdktn.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}

export class CloudwatchLogTransformerTransformerConfigSubstituteStringList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigSubstituteString[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference {
    return new CloudwatchLogTransformerTransformerConfigSubstituteStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigTrimString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#with_keys CloudwatchLogTransformer#with_keys}
  */
  readonly withKeys: string[];
}

export function cloudwatchLogTransformerTransformerConfigTrimStringToTerraform(struct?: CloudwatchLogTransformerTransformerConfigTrimString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    with_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.withKeys),
  }
}


export function cloudwatchLogTransformerTransformerConfigTrimStringToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigTrimString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    with_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.withKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigTrimStringOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigTrimString | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._withKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.withKeys = this._withKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigTrimString | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._withKeys = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._withKeys = value.withKeys;
    }
  }

  // with_keys - computed: false, optional: false, required: true
  private _withKeys?: string[]; 
  public get withKeys() {
    return this.getListAttribute('with_keys');
  }
  public set withKeys(value: string[]) {
    this._withKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get withKeysInput() {
    return this._withKeys;
  }
}

export class CloudwatchLogTransformerTransformerConfigTrimStringList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigTrimString[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigTrimStringOutputReference {
    return new CloudwatchLogTransformerTransformerConfigTrimStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigTypeConverterEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#key CloudwatchLogTransformer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#type CloudwatchLogTransformer#type}
  */
  readonly type: string;
}

export function cloudwatchLogTransformerTransformerConfigTypeConverterEntryToTerraform(struct?: CloudwatchLogTransformerTransformerConfigTypeConverterEntry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function cloudwatchLogTransformerTransformerConfigTypeConverterEntryToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigTypeConverterEntry | cdktn.IResolvable): any {
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

export class CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigTypeConverterEntry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigTypeConverterEntry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._type = value.type;
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

export class CloudwatchLogTransformerTransformerConfigTypeConverterEntryList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigTypeConverterEntry[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference {
    return new CloudwatchLogTransformerTransformerConfigTypeConverterEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigTypeConverter {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#entry CloudwatchLogTransformer#entry}
  */
  readonly entry?: CloudwatchLogTransformerTransformerConfigTypeConverterEntry[] | cdktn.IResolvable;
}

export function cloudwatchLogTransformerTransformerConfigTypeConverterToTerraform(struct?: CloudwatchLogTransformerTransformerConfigTypeConverter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entry: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigTypeConverterEntryToTerraform, true)(struct!.entry),
  }
}


export function cloudwatchLogTransformerTransformerConfigTypeConverterToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigTypeConverter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entry: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigTypeConverterEntryToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigTypeConverterEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigTypeConverter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigTypeConverter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry.internalValue = value.entry;
    }
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new CloudwatchLogTransformerTransformerConfigTypeConverterEntryList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: CloudwatchLogTransformerTransformerConfigTypeConverterEntry[] | cdktn.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}

export class CloudwatchLogTransformerTransformerConfigTypeConverterList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigTypeConverter[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference {
    return new CloudwatchLogTransformerTransformerConfigTypeConverterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfigUpperCaseString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#with_keys CloudwatchLogTransformer#with_keys}
  */
  readonly withKeys: string[];
}

export function cloudwatchLogTransformerTransformerConfigUpperCaseStringToTerraform(struct?: CloudwatchLogTransformerTransformerConfigUpperCaseString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    with_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.withKeys),
  }
}


export function cloudwatchLogTransformerTransformerConfigUpperCaseStringToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfigUpperCaseString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    with_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.withKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfigUpperCaseString | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._withKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.withKeys = this._withKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfigUpperCaseString | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._withKeys = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._withKeys = value.withKeys;
    }
  }

  // with_keys - computed: false, optional: false, required: true
  private _withKeys?: string[]; 
  public get withKeys() {
    return this.getListAttribute('with_keys');
  }
  public set withKeys(value: string[]) {
    this._withKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get withKeysInput() {
    return this._withKeys;
  }
}

export class CloudwatchLogTransformerTransformerConfigUpperCaseStringList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfigUpperCaseString[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference {
    return new CloudwatchLogTransformerTransformerConfigUpperCaseStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchLogTransformerTransformerConfig {
  /**
  * add_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#add_keys CloudwatchLogTransformer#add_keys}
  */
  readonly addKeys?: CloudwatchLogTransformerTransformerConfigAddKeys[] | cdktn.IResolvable;
  /**
  * copy_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#copy_value CloudwatchLogTransformer#copy_value}
  */
  readonly copyValue?: CloudwatchLogTransformerTransformerConfigCopyValue[] | cdktn.IResolvable;
  /**
  * csv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#csv CloudwatchLogTransformer#csv}
  */
  readonly csv?: CloudwatchLogTransformerTransformerConfigCsv[] | cdktn.IResolvable;
  /**
  * date_time_converter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#date_time_converter CloudwatchLogTransformer#date_time_converter}
  */
  readonly dateTimeConverter?: CloudwatchLogTransformerTransformerConfigDateTimeConverter[] | cdktn.IResolvable;
  /**
  * delete_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#delete_keys CloudwatchLogTransformer#delete_keys}
  */
  readonly deleteKeys?: CloudwatchLogTransformerTransformerConfigDeleteKeys[] | cdktn.IResolvable;
  /**
  * grok block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#grok CloudwatchLogTransformer#grok}
  */
  readonly grok?: CloudwatchLogTransformerTransformerConfigGrok[] | cdktn.IResolvable;
  /**
  * list_to_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#list_to_map CloudwatchLogTransformer#list_to_map}
  */
  readonly listToMap?: CloudwatchLogTransformerTransformerConfigListToMap[] | cdktn.IResolvable;
  /**
  * lower_case_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#lower_case_string CloudwatchLogTransformer#lower_case_string}
  */
  readonly lowerCaseString?: CloudwatchLogTransformerTransformerConfigLowerCaseString[] | cdktn.IResolvable;
  /**
  * move_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#move_keys CloudwatchLogTransformer#move_keys}
  */
  readonly moveKeys?: CloudwatchLogTransformerTransformerConfigMoveKeys[] | cdktn.IResolvable;
  /**
  * parse_cloudfront block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#parse_cloudfront CloudwatchLogTransformer#parse_cloudfront}
  */
  readonly parseCloudfront?: CloudwatchLogTransformerTransformerConfigParseCloudfront[] | cdktn.IResolvable;
  /**
  * parse_json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#parse_json CloudwatchLogTransformer#parse_json}
  */
  readonly parseJson?: CloudwatchLogTransformerTransformerConfigParseJson[] | cdktn.IResolvable;
  /**
  * parse_key_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#parse_key_value CloudwatchLogTransformer#parse_key_value}
  */
  readonly parseKeyValue?: CloudwatchLogTransformerTransformerConfigParseKeyValue[] | cdktn.IResolvable;
  /**
  * parse_postgres block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#parse_postgres CloudwatchLogTransformer#parse_postgres}
  */
  readonly parsePostgres?: CloudwatchLogTransformerTransformerConfigParsePostgres[] | cdktn.IResolvable;
  /**
  * parse_route53 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#parse_route53 CloudwatchLogTransformer#parse_route53}
  */
  readonly parseRoute53?: CloudwatchLogTransformerTransformerConfigParseRoute53[] | cdktn.IResolvable;
  /**
  * parse_to_ocsf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#parse_to_ocsf CloudwatchLogTransformer#parse_to_ocsf}
  */
  readonly parseToOcsf?: CloudwatchLogTransformerTransformerConfigParseToOcsf[] | cdktn.IResolvable;
  /**
  * parse_vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#parse_vpc CloudwatchLogTransformer#parse_vpc}
  */
  readonly parseVpc?: CloudwatchLogTransformerTransformerConfigParseVpc[] | cdktn.IResolvable;
  /**
  * parse_waf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#parse_waf CloudwatchLogTransformer#parse_waf}
  */
  readonly parseWaf?: CloudwatchLogTransformerTransformerConfigParseWaf[] | cdktn.IResolvable;
  /**
  * rename_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#rename_keys CloudwatchLogTransformer#rename_keys}
  */
  readonly renameKeys?: CloudwatchLogTransformerTransformerConfigRenameKeys[] | cdktn.IResolvable;
  /**
  * split_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#split_string CloudwatchLogTransformer#split_string}
  */
  readonly splitString?: CloudwatchLogTransformerTransformerConfigSplitString[] | cdktn.IResolvable;
  /**
  * substitute_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#substitute_string CloudwatchLogTransformer#substitute_string}
  */
  readonly substituteString?: CloudwatchLogTransformerTransformerConfigSubstituteString[] | cdktn.IResolvable;
  /**
  * trim_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#trim_string CloudwatchLogTransformer#trim_string}
  */
  readonly trimString?: CloudwatchLogTransformerTransformerConfigTrimString[] | cdktn.IResolvable;
  /**
  * type_converter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#type_converter CloudwatchLogTransformer#type_converter}
  */
  readonly typeConverter?: CloudwatchLogTransformerTransformerConfigTypeConverter[] | cdktn.IResolvable;
  /**
  * upper_case_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#upper_case_string CloudwatchLogTransformer#upper_case_string}
  */
  readonly upperCaseString?: CloudwatchLogTransformerTransformerConfigUpperCaseString[] | cdktn.IResolvable;
}

export function cloudwatchLogTransformerTransformerConfigToTerraform(struct?: CloudwatchLogTransformerTransformerConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    add_keys: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigAddKeysToTerraform, true)(struct!.addKeys),
    copy_value: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigCopyValueToTerraform, true)(struct!.copyValue),
    csv: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigCsvToTerraform, true)(struct!.csv),
    date_time_converter: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigDateTimeConverterToTerraform, true)(struct!.dateTimeConverter),
    delete_keys: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigDeleteKeysToTerraform, true)(struct!.deleteKeys),
    grok: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigGrokToTerraform, true)(struct!.grok),
    list_to_map: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigListToMapToTerraform, true)(struct!.listToMap),
    lower_case_string: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigLowerCaseStringToTerraform, true)(struct!.lowerCaseString),
    move_keys: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigMoveKeysToTerraform, true)(struct!.moveKeys),
    parse_cloudfront: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigParseCloudfrontToTerraform, true)(struct!.parseCloudfront),
    parse_json: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigParseJsonToTerraform, true)(struct!.parseJson),
    parse_key_value: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigParseKeyValueToTerraform, true)(struct!.parseKeyValue),
    parse_postgres: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigParsePostgresToTerraform, true)(struct!.parsePostgres),
    parse_route53: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigParseRoute53ToTerraform, true)(struct!.parseRoute53),
    parse_to_ocsf: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigParseToOcsfToTerraform, true)(struct!.parseToOcsf),
    parse_vpc: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigParseVpcToTerraform, true)(struct!.parseVpc),
    parse_waf: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigParseWafToTerraform, true)(struct!.parseWaf),
    rename_keys: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigRenameKeysToTerraform, true)(struct!.renameKeys),
    split_string: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigSplitStringToTerraform, true)(struct!.splitString),
    substitute_string: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigSubstituteStringToTerraform, true)(struct!.substituteString),
    trim_string: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigTrimStringToTerraform, true)(struct!.trimString),
    type_converter: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigTypeConverterToTerraform, true)(struct!.typeConverter),
    upper_case_string: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigUpperCaseStringToTerraform, true)(struct!.upperCaseString),
  }
}


export function cloudwatchLogTransformerTransformerConfigToHclTerraform(struct?: CloudwatchLogTransformerTransformerConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    add_keys: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigAddKeysToHclTerraform, true)(struct!.addKeys),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigAddKeysList",
    },
    copy_value: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigCopyValueToHclTerraform, true)(struct!.copyValue),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigCopyValueList",
    },
    csv: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigCsvToHclTerraform, true)(struct!.csv),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigCsvList",
    },
    date_time_converter: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigDateTimeConverterToHclTerraform, true)(struct!.dateTimeConverter),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigDateTimeConverterList",
    },
    delete_keys: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigDeleteKeysToHclTerraform, true)(struct!.deleteKeys),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigDeleteKeysList",
    },
    grok: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigGrokToHclTerraform, true)(struct!.grok),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigGrokList",
    },
    list_to_map: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigListToMapToHclTerraform, true)(struct!.listToMap),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigListToMapList",
    },
    lower_case_string: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigLowerCaseStringToHclTerraform, true)(struct!.lowerCaseString),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigLowerCaseStringList",
    },
    move_keys: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigMoveKeysToHclTerraform, true)(struct!.moveKeys),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigMoveKeysList",
    },
    parse_cloudfront: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigParseCloudfrontToHclTerraform, true)(struct!.parseCloudfront),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigParseCloudfrontList",
    },
    parse_json: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigParseJsonToHclTerraform, true)(struct!.parseJson),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigParseJsonList",
    },
    parse_key_value: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigParseKeyValueToHclTerraform, true)(struct!.parseKeyValue),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigParseKeyValueList",
    },
    parse_postgres: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigParsePostgresToHclTerraform, true)(struct!.parsePostgres),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigParsePostgresList",
    },
    parse_route53: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigParseRoute53ToHclTerraform, true)(struct!.parseRoute53),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigParseRoute53List",
    },
    parse_to_ocsf: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigParseToOcsfToHclTerraform, true)(struct!.parseToOcsf),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigParseToOcsfList",
    },
    parse_vpc: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigParseVpcToHclTerraform, true)(struct!.parseVpc),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigParseVpcList",
    },
    parse_waf: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigParseWafToHclTerraform, true)(struct!.parseWaf),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigParseWafList",
    },
    rename_keys: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigRenameKeysToHclTerraform, true)(struct!.renameKeys),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigRenameKeysList",
    },
    split_string: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigSplitStringToHclTerraform, true)(struct!.splitString),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigSplitStringList",
    },
    substitute_string: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigSubstituteStringToHclTerraform, true)(struct!.substituteString),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigSubstituteStringList",
    },
    trim_string: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigTrimStringToHclTerraform, true)(struct!.trimString),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigTrimStringList",
    },
    type_converter: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigTypeConverterToHclTerraform, true)(struct!.typeConverter),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigTypeConverterList",
    },
    upper_case_string: {
      value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigUpperCaseStringToHclTerraform, true)(struct!.upperCaseString),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchLogTransformerTransformerConfigUpperCaseStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogTransformerTransformerConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchLogTransformerTransformerConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addKeys = this._addKeys?.internalValue;
    }
    if (this._copyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyValue = this._copyValue?.internalValue;
    }
    if (this._csv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv?.internalValue;
    }
    if (this._dateTimeConverter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeConverter = this._dateTimeConverter?.internalValue;
    }
    if (this._deleteKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteKeys = this._deleteKeys?.internalValue;
    }
    if (this._grok?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grok = this._grok?.internalValue;
    }
    if (this._listToMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listToMap = this._listToMap?.internalValue;
    }
    if (this._lowerCaseString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerCaseString = this._lowerCaseString?.internalValue;
    }
    if (this._moveKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.moveKeys = this._moveKeys?.internalValue;
    }
    if (this._parseCloudfront?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseCloudfront = this._parseCloudfront?.internalValue;
    }
    if (this._parseJson?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseJson = this._parseJson?.internalValue;
    }
    if (this._parseKeyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseKeyValue = this._parseKeyValue?.internalValue;
    }
    if (this._parsePostgres?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsePostgres = this._parsePostgres?.internalValue;
    }
    if (this._parseRoute53?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseRoute53 = this._parseRoute53?.internalValue;
    }
    if (this._parseToOcsf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseToOcsf = this._parseToOcsf?.internalValue;
    }
    if (this._parseVpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseVpc = this._parseVpc?.internalValue;
    }
    if (this._parseWaf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseWaf = this._parseWaf?.internalValue;
    }
    if (this._renameKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameKeys = this._renameKeys?.internalValue;
    }
    if (this._splitString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitString = this._splitString?.internalValue;
    }
    if (this._substituteString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.substituteString = this._substituteString?.internalValue;
    }
    if (this._trimString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimString = this._trimString?.internalValue;
    }
    if (this._typeConverter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeConverter = this._typeConverter?.internalValue;
    }
    if (this._upperCaseString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperCaseString = this._upperCaseString?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogTransformerTransformerConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addKeys.internalValue = undefined;
      this._copyValue.internalValue = undefined;
      this._csv.internalValue = undefined;
      this._dateTimeConverter.internalValue = undefined;
      this._deleteKeys.internalValue = undefined;
      this._grok.internalValue = undefined;
      this._listToMap.internalValue = undefined;
      this._lowerCaseString.internalValue = undefined;
      this._moveKeys.internalValue = undefined;
      this._parseCloudfront.internalValue = undefined;
      this._parseJson.internalValue = undefined;
      this._parseKeyValue.internalValue = undefined;
      this._parsePostgres.internalValue = undefined;
      this._parseRoute53.internalValue = undefined;
      this._parseToOcsf.internalValue = undefined;
      this._parseVpc.internalValue = undefined;
      this._parseWaf.internalValue = undefined;
      this._renameKeys.internalValue = undefined;
      this._splitString.internalValue = undefined;
      this._substituteString.internalValue = undefined;
      this._trimString.internalValue = undefined;
      this._typeConverter.internalValue = undefined;
      this._upperCaseString.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addKeys.internalValue = value.addKeys;
      this._copyValue.internalValue = value.copyValue;
      this._csv.internalValue = value.csv;
      this._dateTimeConverter.internalValue = value.dateTimeConverter;
      this._deleteKeys.internalValue = value.deleteKeys;
      this._grok.internalValue = value.grok;
      this._listToMap.internalValue = value.listToMap;
      this._lowerCaseString.internalValue = value.lowerCaseString;
      this._moveKeys.internalValue = value.moveKeys;
      this._parseCloudfront.internalValue = value.parseCloudfront;
      this._parseJson.internalValue = value.parseJson;
      this._parseKeyValue.internalValue = value.parseKeyValue;
      this._parsePostgres.internalValue = value.parsePostgres;
      this._parseRoute53.internalValue = value.parseRoute53;
      this._parseToOcsf.internalValue = value.parseToOcsf;
      this._parseVpc.internalValue = value.parseVpc;
      this._parseWaf.internalValue = value.parseWaf;
      this._renameKeys.internalValue = value.renameKeys;
      this._splitString.internalValue = value.splitString;
      this._substituteString.internalValue = value.substituteString;
      this._trimString.internalValue = value.trimString;
      this._typeConverter.internalValue = value.typeConverter;
      this._upperCaseString.internalValue = value.upperCaseString;
    }
  }

  // add_keys - computed: false, optional: true, required: false
  private _addKeys = new CloudwatchLogTransformerTransformerConfigAddKeysList(this, "add_keys", false);
  public get addKeys() {
    return this._addKeys;
  }
  public putAddKeys(value: CloudwatchLogTransformerTransformerConfigAddKeys[] | cdktn.IResolvable) {
    this._addKeys.internalValue = value;
  }
  public resetAddKeys() {
    this._addKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addKeysInput() {
    return this._addKeys.internalValue;
  }

  // copy_value - computed: false, optional: true, required: false
  private _copyValue = new CloudwatchLogTransformerTransformerConfigCopyValueList(this, "copy_value", false);
  public get copyValue() {
    return this._copyValue;
  }
  public putCopyValue(value: CloudwatchLogTransformerTransformerConfigCopyValue[] | cdktn.IResolvable) {
    this._copyValue.internalValue = value;
  }
  public resetCopyValue() {
    this._copyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyValueInput() {
    return this._copyValue.internalValue;
  }

  // csv - computed: false, optional: true, required: false
  private _csv = new CloudwatchLogTransformerTransformerConfigCsvList(this, "csv", false);
  public get csv() {
    return this._csv;
  }
  public putCsv(value: CloudwatchLogTransformerTransformerConfigCsv[] | cdktn.IResolvable) {
    this._csv.internalValue = value;
  }
  public resetCsv() {
    this._csv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv.internalValue;
  }

  // date_time_converter - computed: false, optional: true, required: false
  private _dateTimeConverter = new CloudwatchLogTransformerTransformerConfigDateTimeConverterList(this, "date_time_converter", false);
  public get dateTimeConverter() {
    return this._dateTimeConverter;
  }
  public putDateTimeConverter(value: CloudwatchLogTransformerTransformerConfigDateTimeConverter[] | cdktn.IResolvable) {
    this._dateTimeConverter.internalValue = value;
  }
  public resetDateTimeConverter() {
    this._dateTimeConverter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeConverterInput() {
    return this._dateTimeConverter.internalValue;
  }

  // delete_keys - computed: false, optional: true, required: false
  private _deleteKeys = new CloudwatchLogTransformerTransformerConfigDeleteKeysList(this, "delete_keys", false);
  public get deleteKeys() {
    return this._deleteKeys;
  }
  public putDeleteKeys(value: CloudwatchLogTransformerTransformerConfigDeleteKeys[] | cdktn.IResolvable) {
    this._deleteKeys.internalValue = value;
  }
  public resetDeleteKeys() {
    this._deleteKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteKeysInput() {
    return this._deleteKeys.internalValue;
  }

  // grok - computed: false, optional: true, required: false
  private _grok = new CloudwatchLogTransformerTransformerConfigGrokList(this, "grok", false);
  public get grok() {
    return this._grok;
  }
  public putGrok(value: CloudwatchLogTransformerTransformerConfigGrok[] | cdktn.IResolvable) {
    this._grok.internalValue = value;
  }
  public resetGrok() {
    this._grok.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokInput() {
    return this._grok.internalValue;
  }

  // list_to_map - computed: false, optional: true, required: false
  private _listToMap = new CloudwatchLogTransformerTransformerConfigListToMapList(this, "list_to_map", false);
  public get listToMap() {
    return this._listToMap;
  }
  public putListToMap(value: CloudwatchLogTransformerTransformerConfigListToMap[] | cdktn.IResolvable) {
    this._listToMap.internalValue = value;
  }
  public resetListToMap() {
    this._listToMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listToMapInput() {
    return this._listToMap.internalValue;
  }

  // lower_case_string - computed: false, optional: true, required: false
  private _lowerCaseString = new CloudwatchLogTransformerTransformerConfigLowerCaseStringList(this, "lower_case_string", false);
  public get lowerCaseString() {
    return this._lowerCaseString;
  }
  public putLowerCaseString(value: CloudwatchLogTransformerTransformerConfigLowerCaseString[] | cdktn.IResolvable) {
    this._lowerCaseString.internalValue = value;
  }
  public resetLowerCaseString() {
    this._lowerCaseString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerCaseStringInput() {
    return this._lowerCaseString.internalValue;
  }

  // move_keys - computed: false, optional: true, required: false
  private _moveKeys = new CloudwatchLogTransformerTransformerConfigMoveKeysList(this, "move_keys", false);
  public get moveKeys() {
    return this._moveKeys;
  }
  public putMoveKeys(value: CloudwatchLogTransformerTransformerConfigMoveKeys[] | cdktn.IResolvable) {
    this._moveKeys.internalValue = value;
  }
  public resetMoveKeys() {
    this._moveKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveKeysInput() {
    return this._moveKeys.internalValue;
  }

  // parse_cloudfront - computed: false, optional: true, required: false
  private _parseCloudfront = new CloudwatchLogTransformerTransformerConfigParseCloudfrontList(this, "parse_cloudfront", false);
  public get parseCloudfront() {
    return this._parseCloudfront;
  }
  public putParseCloudfront(value: CloudwatchLogTransformerTransformerConfigParseCloudfront[] | cdktn.IResolvable) {
    this._parseCloudfront.internalValue = value;
  }
  public resetParseCloudfront() {
    this._parseCloudfront.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseCloudfrontInput() {
    return this._parseCloudfront.internalValue;
  }

  // parse_json - computed: false, optional: true, required: false
  private _parseJson = new CloudwatchLogTransformerTransformerConfigParseJsonList(this, "parse_json", false);
  public get parseJson() {
    return this._parseJson;
  }
  public putParseJson(value: CloudwatchLogTransformerTransformerConfigParseJson[] | cdktn.IResolvable) {
    this._parseJson.internalValue = value;
  }
  public resetParseJson() {
    this._parseJson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseJsonInput() {
    return this._parseJson.internalValue;
  }

  // parse_key_value - computed: false, optional: true, required: false
  private _parseKeyValue = new CloudwatchLogTransformerTransformerConfigParseKeyValueList(this, "parse_key_value", false);
  public get parseKeyValue() {
    return this._parseKeyValue;
  }
  public putParseKeyValue(value: CloudwatchLogTransformerTransformerConfigParseKeyValue[] | cdktn.IResolvable) {
    this._parseKeyValue.internalValue = value;
  }
  public resetParseKeyValue() {
    this._parseKeyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseKeyValueInput() {
    return this._parseKeyValue.internalValue;
  }

  // parse_postgres - computed: false, optional: true, required: false
  private _parsePostgres = new CloudwatchLogTransformerTransformerConfigParsePostgresList(this, "parse_postgres", false);
  public get parsePostgres() {
    return this._parsePostgres;
  }
  public putParsePostgres(value: CloudwatchLogTransformerTransformerConfigParsePostgres[] | cdktn.IResolvable) {
    this._parsePostgres.internalValue = value;
  }
  public resetParsePostgres() {
    this._parsePostgres.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsePostgresInput() {
    return this._parsePostgres.internalValue;
  }

  // parse_route53 - computed: false, optional: true, required: false
  private _parseRoute53 = new CloudwatchLogTransformerTransformerConfigParseRoute53List(this, "parse_route53", false);
  public get parseRoute53() {
    return this._parseRoute53;
  }
  public putParseRoute53(value: CloudwatchLogTransformerTransformerConfigParseRoute53[] | cdktn.IResolvable) {
    this._parseRoute53.internalValue = value;
  }
  public resetParseRoute53() {
    this._parseRoute53.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseRoute53Input() {
    return this._parseRoute53.internalValue;
  }

  // parse_to_ocsf - computed: false, optional: true, required: false
  private _parseToOcsf = new CloudwatchLogTransformerTransformerConfigParseToOcsfList(this, "parse_to_ocsf", false);
  public get parseToOcsf() {
    return this._parseToOcsf;
  }
  public putParseToOcsf(value: CloudwatchLogTransformerTransformerConfigParseToOcsf[] | cdktn.IResolvable) {
    this._parseToOcsf.internalValue = value;
  }
  public resetParseToOcsf() {
    this._parseToOcsf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseToOcsfInput() {
    return this._parseToOcsf.internalValue;
  }

  // parse_vpc - computed: false, optional: true, required: false
  private _parseVpc = new CloudwatchLogTransformerTransformerConfigParseVpcList(this, "parse_vpc", false);
  public get parseVpc() {
    return this._parseVpc;
  }
  public putParseVpc(value: CloudwatchLogTransformerTransformerConfigParseVpc[] | cdktn.IResolvable) {
    this._parseVpc.internalValue = value;
  }
  public resetParseVpc() {
    this._parseVpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseVpcInput() {
    return this._parseVpc.internalValue;
  }

  // parse_waf - computed: false, optional: true, required: false
  private _parseWaf = new CloudwatchLogTransformerTransformerConfigParseWafList(this, "parse_waf", false);
  public get parseWaf() {
    return this._parseWaf;
  }
  public putParseWaf(value: CloudwatchLogTransformerTransformerConfigParseWaf[] | cdktn.IResolvable) {
    this._parseWaf.internalValue = value;
  }
  public resetParseWaf() {
    this._parseWaf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseWafInput() {
    return this._parseWaf.internalValue;
  }

  // rename_keys - computed: false, optional: true, required: false
  private _renameKeys = new CloudwatchLogTransformerTransformerConfigRenameKeysList(this, "rename_keys", false);
  public get renameKeys() {
    return this._renameKeys;
  }
  public putRenameKeys(value: CloudwatchLogTransformerTransformerConfigRenameKeys[] | cdktn.IResolvable) {
    this._renameKeys.internalValue = value;
  }
  public resetRenameKeys() {
    this._renameKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameKeysInput() {
    return this._renameKeys.internalValue;
  }

  // split_string - computed: false, optional: true, required: false
  private _splitString = new CloudwatchLogTransformerTransformerConfigSplitStringList(this, "split_string", false);
  public get splitString() {
    return this._splitString;
  }
  public putSplitString(value: CloudwatchLogTransformerTransformerConfigSplitString[] | cdktn.IResolvable) {
    this._splitString.internalValue = value;
  }
  public resetSplitString() {
    this._splitString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitStringInput() {
    return this._splitString.internalValue;
  }

  // substitute_string - computed: false, optional: true, required: false
  private _substituteString = new CloudwatchLogTransformerTransformerConfigSubstituteStringList(this, "substitute_string", false);
  public get substituteString() {
    return this._substituteString;
  }
  public putSubstituteString(value: CloudwatchLogTransformerTransformerConfigSubstituteString[] | cdktn.IResolvable) {
    this._substituteString.internalValue = value;
  }
  public resetSubstituteString() {
    this._substituteString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteStringInput() {
    return this._substituteString.internalValue;
  }

  // trim_string - computed: false, optional: true, required: false
  private _trimString = new CloudwatchLogTransformerTransformerConfigTrimStringList(this, "trim_string", false);
  public get trimString() {
    return this._trimString;
  }
  public putTrimString(value: CloudwatchLogTransformerTransformerConfigTrimString[] | cdktn.IResolvable) {
    this._trimString.internalValue = value;
  }
  public resetTrimString() {
    this._trimString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimStringInput() {
    return this._trimString.internalValue;
  }

  // type_converter - computed: false, optional: true, required: false
  private _typeConverter = new CloudwatchLogTransformerTransformerConfigTypeConverterList(this, "type_converter", false);
  public get typeConverter() {
    return this._typeConverter;
  }
  public putTypeConverter(value: CloudwatchLogTransformerTransformerConfigTypeConverter[] | cdktn.IResolvable) {
    this._typeConverter.internalValue = value;
  }
  public resetTypeConverter() {
    this._typeConverter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeConverterInput() {
    return this._typeConverter.internalValue;
  }

  // upper_case_string - computed: false, optional: true, required: false
  private _upperCaseString = new CloudwatchLogTransformerTransformerConfigUpperCaseStringList(this, "upper_case_string", false);
  public get upperCaseString() {
    return this._upperCaseString;
  }
  public putUpperCaseString(value: CloudwatchLogTransformerTransformerConfigUpperCaseString[] | cdktn.IResolvable) {
    this._upperCaseString.internalValue = value;
  }
  public resetUpperCaseString() {
    this._upperCaseString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperCaseStringInput() {
    return this._upperCaseString.internalValue;
  }
}

export class CloudwatchLogTransformerTransformerConfigList extends cdktn.ComplexList {
  public internalValue? : CloudwatchLogTransformerTransformerConfig[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchLogTransformerTransformerConfigOutputReference {
    return new CloudwatchLogTransformerTransformerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer aws_cloudwatch_log_transformer}
*/
export class CloudwatchLogTransformer extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_log_transformer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudwatchLogTransformer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchLogTransformer to import
  * @param importFromId The id of the existing CloudwatchLogTransformer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchLogTransformer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_log_transformer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/cloudwatch_log_transformer aws_cloudwatch_log_transformer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchLogTransformerConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchLogTransformerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_transformer',
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
    this._logGroupArn = config.logGroupArn;
    this._region = config.region;
    this._transformerConfig.internalValue = config.transformerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // log_group_arn - computed: false, optional: false, required: true
  private _logGroupArn?: string; 
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
  public set logGroupArn(value: string) {
    this._logGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupArnInput() {
    return this._logGroupArn;
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

  // transformer_config - computed: false, optional: true, required: false
  private _transformerConfig = new CloudwatchLogTransformerTransformerConfigList(this, "transformer_config", false);
  public get transformerConfig() {
    return this._transformerConfig;
  }
  public putTransformerConfig(value: CloudwatchLogTransformerTransformerConfig[] | cdktn.IResolvable) {
    this._transformerConfig.internalValue = value;
  }
  public resetTransformerConfig() {
    this._transformerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformerConfigInput() {
    return this._transformerConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      log_group_arn: cdktn.stringToTerraform(this._logGroupArn),
      region: cdktn.stringToTerraform(this._region),
      transformer_config: cdktn.listMapper(cloudwatchLogTransformerTransformerConfigToTerraform, true)(this._transformerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      log_group_arn: {
        value: cdktn.stringToHclTerraform(this._logGroupArn),
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
      transformer_config: {
        value: cdktn.listMapperHcl(cloudwatchLogTransformerTransformerConfigToHclTerraform, true)(this._transformerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchLogTransformerTransformerConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
