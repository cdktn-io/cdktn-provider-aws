/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BackupSelectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#iam_role_arn BackupSelection#iam_role_arn}
  */
  readonly iamRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#id BackupSelection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#name BackupSelection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#not_resources BackupSelection#not_resources}
  */
  readonly notResources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#plan_id BackupSelection#plan_id}
  */
  readonly planId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#region BackupSelection#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#resources BackupSelection#resources}
  */
  readonly resources?: string[];
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#condition BackupSelection#condition}
  */
  readonly condition?: BackupSelectionCondition[] | cdktn.IResolvable;
  /**
  * selection_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#selection_tag BackupSelection#selection_tag}
  */
  readonly selectionTag?: BackupSelectionSelectionTag[] | cdktn.IResolvable;
}
export interface BackupSelectionConditionStringEquals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#key BackupSelection#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#value BackupSelection#value}
  */
  readonly value: string;
}

export function backupSelectionConditionStringEqualsToTerraform(struct?: BackupSelectionConditionStringEquals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function backupSelectionConditionStringEqualsToHclTerraform(struct?: BackupSelectionConditionStringEquals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class BackupSelectionConditionStringEqualsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupSelectionConditionStringEquals | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupSelectionConditionStringEquals | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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

export class BackupSelectionConditionStringEqualsList extends cdktn.ComplexList {
  public internalValue? : BackupSelectionConditionStringEquals[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BackupSelectionConditionStringEqualsOutputReference {
    return new BackupSelectionConditionStringEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupSelectionConditionStringLike {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#key BackupSelection#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#value BackupSelection#value}
  */
  readonly value: string;
}

export function backupSelectionConditionStringLikeToTerraform(struct?: BackupSelectionConditionStringLike | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function backupSelectionConditionStringLikeToHclTerraform(struct?: BackupSelectionConditionStringLike | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class BackupSelectionConditionStringLikeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupSelectionConditionStringLike | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupSelectionConditionStringLike | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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

export class BackupSelectionConditionStringLikeList extends cdktn.ComplexList {
  public internalValue? : BackupSelectionConditionStringLike[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BackupSelectionConditionStringLikeOutputReference {
    return new BackupSelectionConditionStringLikeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupSelectionConditionStringNotEquals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#key BackupSelection#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#value BackupSelection#value}
  */
  readonly value: string;
}

export function backupSelectionConditionStringNotEqualsToTerraform(struct?: BackupSelectionConditionStringNotEquals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function backupSelectionConditionStringNotEqualsToHclTerraform(struct?: BackupSelectionConditionStringNotEquals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class BackupSelectionConditionStringNotEqualsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupSelectionConditionStringNotEquals | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupSelectionConditionStringNotEquals | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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

export class BackupSelectionConditionStringNotEqualsList extends cdktn.ComplexList {
  public internalValue? : BackupSelectionConditionStringNotEquals[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BackupSelectionConditionStringNotEqualsOutputReference {
    return new BackupSelectionConditionStringNotEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupSelectionConditionStringNotLike {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#key BackupSelection#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#value BackupSelection#value}
  */
  readonly value: string;
}

export function backupSelectionConditionStringNotLikeToTerraform(struct?: BackupSelectionConditionStringNotLike | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function backupSelectionConditionStringNotLikeToHclTerraform(struct?: BackupSelectionConditionStringNotLike | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class BackupSelectionConditionStringNotLikeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupSelectionConditionStringNotLike | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupSelectionConditionStringNotLike | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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

export class BackupSelectionConditionStringNotLikeList extends cdktn.ComplexList {
  public internalValue? : BackupSelectionConditionStringNotLike[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BackupSelectionConditionStringNotLikeOutputReference {
    return new BackupSelectionConditionStringNotLikeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupSelectionCondition {
  /**
  * string_equals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#string_equals BackupSelection#string_equals}
  */
  readonly stringEquals?: BackupSelectionConditionStringEquals[] | cdktn.IResolvable;
  /**
  * string_like block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#string_like BackupSelection#string_like}
  */
  readonly stringLike?: BackupSelectionConditionStringLike[] | cdktn.IResolvable;
  /**
  * string_not_equals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#string_not_equals BackupSelection#string_not_equals}
  */
  readonly stringNotEquals?: BackupSelectionConditionStringNotEquals[] | cdktn.IResolvable;
  /**
  * string_not_like block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#string_not_like BackupSelection#string_not_like}
  */
  readonly stringNotLike?: BackupSelectionConditionStringNotLike[] | cdktn.IResolvable;
}

export function backupSelectionConditionToTerraform(struct?: BackupSelectionCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_equals: cdktn.listMapper(backupSelectionConditionStringEqualsToTerraform, true)(struct!.stringEquals),
    string_like: cdktn.listMapper(backupSelectionConditionStringLikeToTerraform, true)(struct!.stringLike),
    string_not_equals: cdktn.listMapper(backupSelectionConditionStringNotEqualsToTerraform, true)(struct!.stringNotEquals),
    string_not_like: cdktn.listMapper(backupSelectionConditionStringNotLikeToTerraform, true)(struct!.stringNotLike),
  }
}


export function backupSelectionConditionToHclTerraform(struct?: BackupSelectionCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_equals: {
      value: cdktn.listMapperHcl(backupSelectionConditionStringEqualsToHclTerraform, true)(struct!.stringEquals),
      isBlock: true,
      type: "set",
      storageClassType: "BackupSelectionConditionStringEqualsList",
    },
    string_like: {
      value: cdktn.listMapperHcl(backupSelectionConditionStringLikeToHclTerraform, true)(struct!.stringLike),
      isBlock: true,
      type: "set",
      storageClassType: "BackupSelectionConditionStringLikeList",
    },
    string_not_equals: {
      value: cdktn.listMapperHcl(backupSelectionConditionStringNotEqualsToHclTerraform, true)(struct!.stringNotEquals),
      isBlock: true,
      type: "set",
      storageClassType: "BackupSelectionConditionStringNotEqualsList",
    },
    string_not_like: {
      value: cdktn.listMapperHcl(backupSelectionConditionStringNotLikeToHclTerraform, true)(struct!.stringNotLike),
      isBlock: true,
      type: "set",
      storageClassType: "BackupSelectionConditionStringNotLikeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupSelectionConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupSelectionCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringEquals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringEquals = this._stringEquals?.internalValue;
    }
    if (this._stringLike?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringLike = this._stringLike?.internalValue;
    }
    if (this._stringNotEquals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringNotEquals = this._stringNotEquals?.internalValue;
    }
    if (this._stringNotLike?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringNotLike = this._stringNotLike?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupSelectionCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stringEquals.internalValue = undefined;
      this._stringLike.internalValue = undefined;
      this._stringNotEquals.internalValue = undefined;
      this._stringNotLike.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stringEquals.internalValue = value.stringEquals;
      this._stringLike.internalValue = value.stringLike;
      this._stringNotEquals.internalValue = value.stringNotEquals;
      this._stringNotLike.internalValue = value.stringNotLike;
    }
  }

  // string_equals - computed: false, optional: true, required: false
  private _stringEquals = new BackupSelectionConditionStringEqualsList(this, "string_equals", true);
  public get stringEquals() {
    return this._stringEquals;
  }
  public putStringEquals(value: BackupSelectionConditionStringEquals[] | cdktn.IResolvable) {
    this._stringEquals.internalValue = value;
  }
  public resetStringEquals() {
    this._stringEquals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringEqualsInput() {
    return this._stringEquals.internalValue;
  }

  // string_like - computed: false, optional: true, required: false
  private _stringLike = new BackupSelectionConditionStringLikeList(this, "string_like", true);
  public get stringLike() {
    return this._stringLike;
  }
  public putStringLike(value: BackupSelectionConditionStringLike[] | cdktn.IResolvable) {
    this._stringLike.internalValue = value;
  }
  public resetStringLike() {
    this._stringLike.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringLikeInput() {
    return this._stringLike.internalValue;
  }

  // string_not_equals - computed: false, optional: true, required: false
  private _stringNotEquals = new BackupSelectionConditionStringNotEqualsList(this, "string_not_equals", true);
  public get stringNotEquals() {
    return this._stringNotEquals;
  }
  public putStringNotEquals(value: BackupSelectionConditionStringNotEquals[] | cdktn.IResolvable) {
    this._stringNotEquals.internalValue = value;
  }
  public resetStringNotEquals() {
    this._stringNotEquals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotEqualsInput() {
    return this._stringNotEquals.internalValue;
  }

  // string_not_like - computed: false, optional: true, required: false
  private _stringNotLike = new BackupSelectionConditionStringNotLikeList(this, "string_not_like", true);
  public get stringNotLike() {
    return this._stringNotLike;
  }
  public putStringNotLike(value: BackupSelectionConditionStringNotLike[] | cdktn.IResolvable) {
    this._stringNotLike.internalValue = value;
  }
  public resetStringNotLike() {
    this._stringNotLike.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotLikeInput() {
    return this._stringNotLike.internalValue;
  }
}

export class BackupSelectionConditionList extends cdktn.ComplexList {
  public internalValue? : BackupSelectionCondition[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BackupSelectionConditionOutputReference {
    return new BackupSelectionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupSelectionSelectionTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#key BackupSelection#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#type BackupSelection#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#value BackupSelection#value}
  */
  readonly value: string;
}

export function backupSelectionSelectionTagToTerraform(struct?: BackupSelectionSelectionTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function backupSelectionSelectionTagToHclTerraform(struct?: BackupSelectionSelectionTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class BackupSelectionSelectionTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupSelectionSelectionTag | cdktn.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupSelectionSelectionTag | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._type = undefined;
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
      this._type = value.type;
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

export class BackupSelectionSelectionTagList extends cdktn.ComplexList {
  public internalValue? : BackupSelectionSelectionTag[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BackupSelectionSelectionTagOutputReference {
    return new BackupSelectionSelectionTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection aws_backup_selection}
*/
export class BackupSelection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_backup_selection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BackupSelection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupSelection to import
  * @param importFromId The id of the existing BackupSelection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupSelection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_backup_selection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/backup_selection aws_backup_selection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupSelectionConfig
  */
  public constructor(scope: Construct, id: string, config: BackupSelectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_selection',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.40.0',
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
    this._iamRoleArn = config.iamRoleArn;
    this._id = config.id;
    this._name = config.name;
    this._notResources = config.notResources;
    this._planId = config.planId;
    this._region = config.region;
    this._resources = config.resources;
    this._condition.internalValue = config.condition;
    this._selectionTag.internalValue = config.selectionTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
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

  // not_resources - computed: true, optional: true, required: false
  private _notResources?: string[]; 
  public get notResources() {
    return cdktn.Fn.tolist(this.getListAttribute('not_resources'));
  }
  public set notResources(value: string[]) {
    this._notResources = value;
  }
  public resetNotResources() {
    this._notResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notResourcesInput() {
    return this._notResources;
  }

  // plan_id - computed: false, optional: false, required: true
  private _planId?: string; 
  public get planId() {
    return this.getStringAttribute('plan_id');
  }
  public set planId(value: string) {
    this._planId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planIdInput() {
    return this._planId;
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

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktn.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new BackupSelectionConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: BackupSelectionCondition[] | cdktn.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // selection_tag - computed: false, optional: true, required: false
  private _selectionTag = new BackupSelectionSelectionTagList(this, "selection_tag", true);
  public get selectionTag() {
    return this._selectionTag;
  }
  public putSelectionTag(value: BackupSelectionSelectionTag[] | cdktn.IResolvable) {
    this._selectionTag.internalValue = value;
  }
  public resetSelectionTag() {
    this._selectionTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionTagInput() {
    return this._selectionTag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      iam_role_arn: cdktn.stringToTerraform(this._iamRoleArn),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      not_resources: cdktn.listMapper(cdktn.stringToTerraform, false)(this._notResources),
      plan_id: cdktn.stringToTerraform(this._planId),
      region: cdktn.stringToTerraform(this._region),
      resources: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resources),
      condition: cdktn.listMapper(backupSelectionConditionToTerraform, true)(this._condition.internalValue),
      selection_tag: cdktn.listMapper(backupSelectionSelectionTagToTerraform, true)(this._selectionTag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      iam_role_arn: {
        value: cdktn.stringToHclTerraform(this._iamRoleArn),
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
      not_resources: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._notResources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      plan_id: {
        value: cdktn.stringToHclTerraform(this._planId),
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
      resources: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      condition: {
        value: cdktn.listMapperHcl(backupSelectionConditionToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BackupSelectionConditionList",
      },
      selection_tag: {
        value: cdktn.listMapperHcl(backupSelectionSelectionTagToHclTerraform, true)(this._selectionTag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BackupSelectionSelectionTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
