/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpensearchApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#kms_key_arn OpensearchApplication#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#name OpensearchApplication#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#region OpensearchApplication#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#tags OpensearchApplication#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * app_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#app_config OpensearchApplication#app_config}
  */
  readonly appConfig?: OpensearchApplicationAppConfig[] | cdktf.IResolvable;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#data_source OpensearchApplication#data_source}
  */
  readonly dataSource?: OpensearchApplicationDataSource[] | cdktf.IResolvable;
  /**
  * iam_identity_center_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#iam_identity_center_options OpensearchApplication#iam_identity_center_options}
  */
  readonly iamIdentityCenterOptions?: OpensearchApplicationIamIdentityCenterOptions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#timeouts OpensearchApplication#timeouts}
  */
  readonly timeouts?: OpensearchApplicationTimeouts;
}
export interface OpensearchApplicationAppConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#key OpensearchApplication#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#value OpensearchApplication#value}
  */
  readonly value?: string;
}

export function opensearchApplicationAppConfigToTerraform(struct?: OpensearchApplicationAppConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function opensearchApplicationAppConfigToHclTerraform(struct?: OpensearchApplicationAppConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchApplicationAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpensearchApplicationAppConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpensearchApplicationAppConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OpensearchApplicationAppConfigList extends cdktf.ComplexList {
  public internalValue? : OpensearchApplicationAppConfig[] | cdktf.IResolvable

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
  public get(index: number): OpensearchApplicationAppConfigOutputReference {
    return new OpensearchApplicationAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchApplicationDataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#data_source_arn OpensearchApplication#data_source_arn}
  */
  readonly dataSourceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#data_source_description OpensearchApplication#data_source_description}
  */
  readonly dataSourceDescription?: string;
}

export function opensearchApplicationDataSourceToTerraform(struct?: OpensearchApplicationDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source_arn: cdktf.stringToTerraform(struct!.dataSourceArn),
    data_source_description: cdktf.stringToTerraform(struct!.dataSourceDescription),
  }
}


export function opensearchApplicationDataSourceToHclTerraform(struct?: OpensearchApplicationDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source_arn: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source_description: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchApplicationDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpensearchApplicationDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceArn = this._dataSourceArn;
    }
    if (this._dataSourceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceDescription = this._dataSourceDescription;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchApplicationDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceArn = undefined;
      this._dataSourceDescription = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceArn = value.dataSourceArn;
      this._dataSourceDescription = value.dataSourceDescription;
    }
  }

  // data_source_arn - computed: false, optional: true, required: false
  private _dataSourceArn?: string; 
  public get dataSourceArn() {
    return this.getStringAttribute('data_source_arn');
  }
  public set dataSourceArn(value: string) {
    this._dataSourceArn = value;
  }
  public resetDataSourceArn() {
    this._dataSourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceArnInput() {
    return this._dataSourceArn;
  }

  // data_source_description - computed: false, optional: true, required: false
  private _dataSourceDescription?: string; 
  public get dataSourceDescription() {
    return this.getStringAttribute('data_source_description');
  }
  public set dataSourceDescription(value: string) {
    this._dataSourceDescription = value;
  }
  public resetDataSourceDescription() {
    this._dataSourceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceDescriptionInput() {
    return this._dataSourceDescription;
  }
}

export class OpensearchApplicationDataSourceList extends cdktf.ComplexList {
  public internalValue? : OpensearchApplicationDataSource[] | cdktf.IResolvable

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
  public get(index: number): OpensearchApplicationDataSourceOutputReference {
    return new OpensearchApplicationDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchApplicationIamIdentityCenterOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#enabled OpensearchApplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#iam_identity_center_instance_arn OpensearchApplication#iam_identity_center_instance_arn}
  */
  readonly iamIdentityCenterInstanceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#iam_role_for_identity_center_application_arn OpensearchApplication#iam_role_for_identity_center_application_arn}
  */
  readonly iamRoleForIdentityCenterApplicationArn?: string;
}

export function opensearchApplicationIamIdentityCenterOptionsToTerraform(struct?: OpensearchApplicationIamIdentityCenterOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    iam_identity_center_instance_arn: cdktf.stringToTerraform(struct!.iamIdentityCenterInstanceArn),
    iam_role_for_identity_center_application_arn: cdktf.stringToTerraform(struct!.iamRoleForIdentityCenterApplicationArn),
  }
}


export function opensearchApplicationIamIdentityCenterOptionsToHclTerraform(struct?: OpensearchApplicationIamIdentityCenterOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iam_identity_center_instance_arn: {
      value: cdktf.stringToHclTerraform(struct!.iamIdentityCenterInstanceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_role_for_identity_center_application_arn: {
      value: cdktf.stringToHclTerraform(struct!.iamRoleForIdentityCenterApplicationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchApplicationIamIdentityCenterOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpensearchApplicationIamIdentityCenterOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._iamIdentityCenterInstanceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamIdentityCenterInstanceArn = this._iamIdentityCenterInstanceArn;
    }
    if (this._iamRoleForIdentityCenterApplicationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleForIdentityCenterApplicationArn = this._iamRoleForIdentityCenterApplicationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchApplicationIamIdentityCenterOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._iamIdentityCenterInstanceArn = undefined;
      this._iamRoleForIdentityCenterApplicationArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._iamIdentityCenterInstanceArn = value.iamIdentityCenterInstanceArn;
      this._iamRoleForIdentityCenterApplicationArn = value.iamRoleForIdentityCenterApplicationArn;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // iam_identity_center_application_arn - computed: true, optional: false, required: false
  public get iamIdentityCenterApplicationArn() {
    return this.getStringAttribute('iam_identity_center_application_arn');
  }

  // iam_identity_center_instance_arn - computed: false, optional: true, required: false
  private _iamIdentityCenterInstanceArn?: string; 
  public get iamIdentityCenterInstanceArn() {
    return this.getStringAttribute('iam_identity_center_instance_arn');
  }
  public set iamIdentityCenterInstanceArn(value: string) {
    this._iamIdentityCenterInstanceArn = value;
  }
  public resetIamIdentityCenterInstanceArn() {
    this._iamIdentityCenterInstanceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamIdentityCenterInstanceArnInput() {
    return this._iamIdentityCenterInstanceArn;
  }

  // iam_role_for_identity_center_application_arn - computed: false, optional: true, required: false
  private _iamRoleForIdentityCenterApplicationArn?: string; 
  public get iamRoleForIdentityCenterApplicationArn() {
    return this.getStringAttribute('iam_role_for_identity_center_application_arn');
  }
  public set iamRoleForIdentityCenterApplicationArn(value: string) {
    this._iamRoleForIdentityCenterApplicationArn = value;
  }
  public resetIamRoleForIdentityCenterApplicationArn() {
    this._iamRoleForIdentityCenterApplicationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleForIdentityCenterApplicationArnInput() {
    return this._iamRoleForIdentityCenterApplicationArn;
  }
}

export class OpensearchApplicationIamIdentityCenterOptionsList extends cdktf.ComplexList {
  public internalValue? : OpensearchApplicationIamIdentityCenterOptions[] | cdktf.IResolvable

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
  public get(index: number): OpensearchApplicationIamIdentityCenterOptionsOutputReference {
    return new OpensearchApplicationIamIdentityCenterOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchApplicationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#create OpensearchApplication#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#delete OpensearchApplication#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#update OpensearchApplication#update}
  */
  readonly update?: string;
}

export function opensearchApplicationTimeoutsToTerraform(struct?: OpensearchApplicationTimeouts | cdktf.IResolvable): any {
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


export function opensearchApplicationTimeoutsToHclTerraform(struct?: OpensearchApplicationTimeouts | cdktf.IResolvable): any {
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

export class OpensearchApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchApplicationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpensearchApplicationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application aws_opensearch_application}
*/
export class OpensearchApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_opensearch_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpensearchApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpensearchApplication to import
  * @param importFromId The id of the existing OpensearchApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpensearchApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_opensearch_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application aws_opensearch_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opensearch_application',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.31.0',
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
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._appConfig.internalValue = config.appConfig;
    this._dataSource.internalValue = config.dataSource;
    this._iamIdentityCenterOptions.internalValue = config.iamIdentityCenterOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // app_config - computed: false, optional: true, required: false
  private _appConfig = new OpensearchApplicationAppConfigList(this, "app_config", true);
  public get appConfig() {
    return this._appConfig;
  }
  public putAppConfig(value: OpensearchApplicationAppConfig[] | cdktf.IResolvable) {
    this._appConfig.internalValue = value;
  }
  public resetAppConfig() {
    this._appConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appConfigInput() {
    return this._appConfig.internalValue;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new OpensearchApplicationDataSourceList(this, "data_source", true);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: OpensearchApplicationDataSource[] | cdktf.IResolvable) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // iam_identity_center_options - computed: false, optional: true, required: false
  private _iamIdentityCenterOptions = new OpensearchApplicationIamIdentityCenterOptionsList(this, "iam_identity_center_options", false);
  public get iamIdentityCenterOptions() {
    return this._iamIdentityCenterOptions;
  }
  public putIamIdentityCenterOptions(value: OpensearchApplicationIamIdentityCenterOptions[] | cdktf.IResolvable) {
    this._iamIdentityCenterOptions.internalValue = value;
  }
  public resetIamIdentityCenterOptions() {
    this._iamIdentityCenterOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamIdentityCenterOptionsInput() {
    return this._iamIdentityCenterOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpensearchApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpensearchApplicationTimeouts) {
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
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      app_config: cdktf.listMapper(opensearchApplicationAppConfigToTerraform, true)(this._appConfig.internalValue),
      data_source: cdktf.listMapper(opensearchApplicationDataSourceToTerraform, true)(this._dataSource.internalValue),
      iam_identity_center_options: cdktf.listMapper(opensearchApplicationIamIdentityCenterOptionsToTerraform, true)(this._iamIdentityCenterOptions.internalValue),
      timeouts: opensearchApplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      kms_key_arn: {
        value: cdktf.stringToHclTerraform(this._kmsKeyArn),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      app_config: {
        value: cdktf.listMapperHcl(opensearchApplicationAppConfigToHclTerraform, true)(this._appConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpensearchApplicationAppConfigList",
      },
      data_source: {
        value: cdktf.listMapperHcl(opensearchApplicationDataSourceToHclTerraform, true)(this._dataSource.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpensearchApplicationDataSourceList",
      },
      iam_identity_center_options: {
        value: cdktf.listMapperHcl(opensearchApplicationIamIdentityCenterOptionsToHclTerraform, true)(this._iamIdentityCenterOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpensearchApplicationIamIdentityCenterOptionsList",
      },
      timeouts: {
        value: opensearchApplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchApplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
