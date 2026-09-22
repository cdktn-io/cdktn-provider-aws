/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DmsMigrationProjectConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}
  */
  readonly instanceProfileArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#name DmsMigrationProject#name}
  */
  readonly name?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#region DmsMigrationProject#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}
  */
  readonly transformationRules?: string;
  /**
  * schema_conversion_application_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#schema_conversion_application_attributes DmsMigrationProject#schema_conversion_application_attributes}
  */
  readonly schemaConversionApplicationAttributes?: DmsMigrationProjectSchemaConversionApplicationAttributes[] | cdktn.IResolvable;
  /**
  * source_data_provider_descriptor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#source_data_provider_descriptor DmsMigrationProject#source_data_provider_descriptor}
  */
  readonly sourceDataProviderDescriptor?: DmsMigrationProjectSourceDataProviderDescriptor[] | cdktn.IResolvable;
  /**
  * target_data_provider_descriptor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#target_data_provider_descriptor DmsMigrationProject#target_data_provider_descriptor}
  */
  readonly targetDataProviderDescriptor?: DmsMigrationProjectTargetDataProviderDescriptor[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#timeouts DmsMigrationProject#timeouts}
  */
  readonly timeouts?: DmsMigrationProjectTimeouts;
}
export interface DmsMigrationProjectSchemaConversionApplicationAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_path DmsMigrationProject#s3_bucket_path}
  */
  readonly s3BucketPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_role_arn DmsMigrationProject#s3_bucket_role_arn}
  */
  readonly s3BucketRoleArn?: string;
}

export function dmsMigrationProjectSchemaConversionApplicationAttributesToTerraform(struct?: DmsMigrationProjectSchemaConversionApplicationAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_bucket_path: cdktn.stringToTerraform(struct!.s3BucketPath),
    s3_bucket_role_arn: cdktn.stringToTerraform(struct!.s3BucketRoleArn),
  }
}


export function dmsMigrationProjectSchemaConversionApplicationAttributesToHclTerraform(struct?: DmsMigrationProjectSchemaConversionApplicationAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_bucket_path: {
      value: cdktn.stringToHclTerraform(struct!.s3BucketPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.s3BucketRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsMigrationProjectSchemaConversionApplicationAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketPath = this._s3BucketPath;
    }
    if (this._s3BucketRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketRoleArn = this._s3BucketRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsMigrationProjectSchemaConversionApplicationAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3BucketPath = undefined;
      this._s3BucketRoleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3BucketPath = value.s3BucketPath;
      this._s3BucketRoleArn = value.s3BucketRoleArn;
    }
  }

  // s3_bucket_path - computed: false, optional: true, required: false
  private _s3BucketPath?: string; 
  public get s3BucketPath() {
    return this.getStringAttribute('s3_bucket_path');
  }
  public set s3BucketPath(value: string) {
    this._s3BucketPath = value;
  }
  public resetS3BucketPath() {
    this._s3BucketPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketPathInput() {
    return this._s3BucketPath;
  }

  // s3_bucket_role_arn - computed: false, optional: true, required: false
  private _s3BucketRoleArn?: string; 
  public get s3BucketRoleArn() {
    return this.getStringAttribute('s3_bucket_role_arn');
  }
  public set s3BucketRoleArn(value: string) {
    this._s3BucketRoleArn = value;
  }
  public resetS3BucketRoleArn() {
    this._s3BucketRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketRoleArnInput() {
    return this._s3BucketRoleArn;
  }
}

export class DmsMigrationProjectSchemaConversionApplicationAttributesList extends cdktn.ComplexList {
  public internalValue? : DmsMigrationProjectSchemaConversionApplicationAttributes[] | cdktn.IResolvable

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
  public get(index: number): DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference {
    return new DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsMigrationProjectSourceDataProviderDescriptor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}
  */
  readonly dataProviderArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}
  */
  readonly secretsManagerAccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}
  */
  readonly secretsManagerSecretId?: string;
}

export function dmsMigrationProjectSourceDataProviderDescriptorToTerraform(struct?: DmsMigrationProjectSourceDataProviderDescriptor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_provider_arn: cdktn.stringToTerraform(struct!.dataProviderArn),
    secrets_manager_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerAccessRoleArn),
    secrets_manager_secret_id: cdktn.stringToTerraform(struct!.secretsManagerSecretId),
  }
}


export function dmsMigrationProjectSourceDataProviderDescriptorToHclTerraform(struct?: DmsMigrationProjectSourceDataProviderDescriptor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretsManagerAccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager_secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretsManagerSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsMigrationProjectSourceDataProviderDescriptorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsMigrationProjectSourceDataProviderDescriptor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataProviderArn = this._dataProviderArn;
    }
    if (this._secretsManagerAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerAccessRoleArn = this._secretsManagerAccessRoleArn;
    }
    if (this._secretsManagerSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerSecretId = this._secretsManagerSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsMigrationProjectSourceDataProviderDescriptor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataProviderArn = undefined;
      this._secretsManagerAccessRoleArn = undefined;
      this._secretsManagerSecretId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataProviderArn = value.dataProviderArn;
      this._secretsManagerAccessRoleArn = value.secretsManagerAccessRoleArn;
      this._secretsManagerSecretId = value.secretsManagerSecretId;
    }
  }

  // data_provider_arn - computed: false, optional: false, required: true
  private _dataProviderArn?: string; 
  public get dataProviderArn() {
    return this.getStringAttribute('data_provider_arn');
  }
  public set dataProviderArn(value: string) {
    this._dataProviderArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProviderArnInput() {
    return this._dataProviderArn;
  }

  // data_provider_name - computed: true, optional: false, required: false
  public get dataProviderName() {
    return this.getStringAttribute('data_provider_name');
  }

  // secrets_manager_access_role_arn - computed: false, optional: true, required: false
  private _secretsManagerAccessRoleArn?: string; 
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }
  public set secretsManagerAccessRoleArn(value: string) {
    this._secretsManagerAccessRoleArn = value;
  }
  public resetSecretsManagerAccessRoleArn() {
    this._secretsManagerAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerAccessRoleArnInput() {
    return this._secretsManagerAccessRoleArn;
  }

  // secrets_manager_secret_id - computed: false, optional: true, required: false
  private _secretsManagerSecretId?: string; 
  public get secretsManagerSecretId() {
    return this.getStringAttribute('secrets_manager_secret_id');
  }
  public set secretsManagerSecretId(value: string) {
    this._secretsManagerSecretId = value;
  }
  public resetSecretsManagerSecretId() {
    this._secretsManagerSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerSecretIdInput() {
    return this._secretsManagerSecretId;
  }
}

export class DmsMigrationProjectSourceDataProviderDescriptorList extends cdktn.ComplexList {
  public internalValue? : DmsMigrationProjectSourceDataProviderDescriptor[] | cdktn.IResolvable

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
  public get(index: number): DmsMigrationProjectSourceDataProviderDescriptorOutputReference {
    return new DmsMigrationProjectSourceDataProviderDescriptorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsMigrationProjectTargetDataProviderDescriptor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}
  */
  readonly dataProviderArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}
  */
  readonly secretsManagerAccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}
  */
  readonly secretsManagerSecretId?: string;
}

export function dmsMigrationProjectTargetDataProviderDescriptorToTerraform(struct?: DmsMigrationProjectTargetDataProviderDescriptor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_provider_arn: cdktn.stringToTerraform(struct!.dataProviderArn),
    secrets_manager_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerAccessRoleArn),
    secrets_manager_secret_id: cdktn.stringToTerraform(struct!.secretsManagerSecretId),
  }
}


export function dmsMigrationProjectTargetDataProviderDescriptorToHclTerraform(struct?: DmsMigrationProjectTargetDataProviderDescriptor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretsManagerAccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager_secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretsManagerSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsMigrationProjectTargetDataProviderDescriptorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsMigrationProjectTargetDataProviderDescriptor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataProviderArn = this._dataProviderArn;
    }
    if (this._secretsManagerAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerAccessRoleArn = this._secretsManagerAccessRoleArn;
    }
    if (this._secretsManagerSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerSecretId = this._secretsManagerSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsMigrationProjectTargetDataProviderDescriptor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataProviderArn = undefined;
      this._secretsManagerAccessRoleArn = undefined;
      this._secretsManagerSecretId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataProviderArn = value.dataProviderArn;
      this._secretsManagerAccessRoleArn = value.secretsManagerAccessRoleArn;
      this._secretsManagerSecretId = value.secretsManagerSecretId;
    }
  }

  // data_provider_arn - computed: false, optional: false, required: true
  private _dataProviderArn?: string; 
  public get dataProviderArn() {
    return this.getStringAttribute('data_provider_arn');
  }
  public set dataProviderArn(value: string) {
    this._dataProviderArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProviderArnInput() {
    return this._dataProviderArn;
  }

  // data_provider_name - computed: true, optional: false, required: false
  public get dataProviderName() {
    return this.getStringAttribute('data_provider_name');
  }

  // secrets_manager_access_role_arn - computed: false, optional: true, required: false
  private _secretsManagerAccessRoleArn?: string; 
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }
  public set secretsManagerAccessRoleArn(value: string) {
    this._secretsManagerAccessRoleArn = value;
  }
  public resetSecretsManagerAccessRoleArn() {
    this._secretsManagerAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerAccessRoleArnInput() {
    return this._secretsManagerAccessRoleArn;
  }

  // secrets_manager_secret_id - computed: false, optional: true, required: false
  private _secretsManagerSecretId?: string; 
  public get secretsManagerSecretId() {
    return this.getStringAttribute('secrets_manager_secret_id');
  }
  public set secretsManagerSecretId(value: string) {
    this._secretsManagerSecretId = value;
  }
  public resetSecretsManagerSecretId() {
    this._secretsManagerSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerSecretIdInput() {
    return this._secretsManagerSecretId;
  }
}

export class DmsMigrationProjectTargetDataProviderDescriptorList extends cdktn.ComplexList {
  public internalValue? : DmsMigrationProjectTargetDataProviderDescriptor[] | cdktn.IResolvable

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
  public get(index: number): DmsMigrationProjectTargetDataProviderDescriptorOutputReference {
    return new DmsMigrationProjectTargetDataProviderDescriptorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsMigrationProjectTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#create DmsMigrationProject#create}
  */
  readonly create?: string;
}

export function dmsMigrationProjectTimeoutsToTerraform(struct?: DmsMigrationProjectTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
  }
}


export function dmsMigrationProjectTimeoutsToHclTerraform(struct?: DmsMigrationProjectTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsMigrationProjectTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DmsMigrationProjectTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsMigrationProjectTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project aws_dms_migration_project}
*/
export class DmsMigrationProject extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dms_migration_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DmsMigrationProject resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmsMigrationProject to import
  * @param importFromId The id of the existing DmsMigrationProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmsMigrationProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_dms_migration_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project aws_dms_migration_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsMigrationProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DmsMigrationProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_migration_project',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.66.0',
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
    this._instanceProfileArn = config.instanceProfileArn;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._transformationRules = config.transformationRules;
    this._schemaConversionApplicationAttributes.internalValue = config.schemaConversionApplicationAttributes;
    this._sourceDataProviderDescriptor.internalValue = config.sourceDataProviderDescriptor;
    this._targetDataProviderDescriptor.internalValue = config.targetDataProviderDescriptor;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // instance_profile_arn - computed: false, optional: false, required: true
  private _instanceProfileArn?: string; 
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // instance_profile_name - computed: true, optional: false, required: false
  public get instanceProfileName() {
    return this.getStringAttribute('instance_profile_name');
  }

  // name - computed: true, optional: true, required: false
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
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // transformation_rules - computed: false, optional: true, required: false
  private _transformationRules?: string; 
  public get transformationRules() {
    return this.getStringAttribute('transformation_rules');
  }
  public set transformationRules(value: string) {
    this._transformationRules = value;
  }
  public resetTransformationRules() {
    this._transformationRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationRulesInput() {
    return this._transformationRules;
  }

  // schema_conversion_application_attributes - computed: false, optional: true, required: false
  private _schemaConversionApplicationAttributes = new DmsMigrationProjectSchemaConversionApplicationAttributesList(this, "schema_conversion_application_attributes", false);
  public get schemaConversionApplicationAttributes() {
    return this._schemaConversionApplicationAttributes;
  }
  public putSchemaConversionApplicationAttributes(value: DmsMigrationProjectSchemaConversionApplicationAttributes[] | cdktn.IResolvable) {
    this._schemaConversionApplicationAttributes.internalValue = value;
  }
  public resetSchemaConversionApplicationAttributes() {
    this._schemaConversionApplicationAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaConversionApplicationAttributesInput() {
    return this._schemaConversionApplicationAttributes.internalValue;
  }

  // source_data_provider_descriptor - computed: false, optional: true, required: false
  private _sourceDataProviderDescriptor = new DmsMigrationProjectSourceDataProviderDescriptorList(this, "source_data_provider_descriptor", false);
  public get sourceDataProviderDescriptor() {
    return this._sourceDataProviderDescriptor;
  }
  public putSourceDataProviderDescriptor(value: DmsMigrationProjectSourceDataProviderDescriptor[] | cdktn.IResolvable) {
    this._sourceDataProviderDescriptor.internalValue = value;
  }
  public resetSourceDataProviderDescriptor() {
    this._sourceDataProviderDescriptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataProviderDescriptorInput() {
    return this._sourceDataProviderDescriptor.internalValue;
  }

  // target_data_provider_descriptor - computed: false, optional: true, required: false
  private _targetDataProviderDescriptor = new DmsMigrationProjectTargetDataProviderDescriptorList(this, "target_data_provider_descriptor", false);
  public get targetDataProviderDescriptor() {
    return this._targetDataProviderDescriptor;
  }
  public putTargetDataProviderDescriptor(value: DmsMigrationProjectTargetDataProviderDescriptor[] | cdktn.IResolvable) {
    this._targetDataProviderDescriptor.internalValue = value;
  }
  public resetTargetDataProviderDescriptor() {
    this._targetDataProviderDescriptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDataProviderDescriptorInput() {
    return this._targetDataProviderDescriptor.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DmsMigrationProjectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DmsMigrationProjectTimeouts) {
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
      instance_profile_arn: cdktn.stringToTerraform(this._instanceProfileArn),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      transformation_rules: cdktn.stringToTerraform(this._transformationRules),
      schema_conversion_application_attributes: cdktn.listMapper(dmsMigrationProjectSchemaConversionApplicationAttributesToTerraform, true)(this._schemaConversionApplicationAttributes.internalValue),
      source_data_provider_descriptor: cdktn.listMapper(dmsMigrationProjectSourceDataProviderDescriptorToTerraform, true)(this._sourceDataProviderDescriptor.internalValue),
      target_data_provider_descriptor: cdktn.listMapper(dmsMigrationProjectTargetDataProviderDescriptorToTerraform, true)(this._targetDataProviderDescriptor.internalValue),
      timeouts: dmsMigrationProjectTimeoutsToTerraform(this._timeouts.internalValue),
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
      instance_profile_arn: {
        value: cdktn.stringToHclTerraform(this._instanceProfileArn),
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
      transformation_rules: {
        value: cdktn.stringToHclTerraform(this._transformationRules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_conversion_application_attributes: {
        value: cdktn.listMapperHcl(dmsMigrationProjectSchemaConversionApplicationAttributesToHclTerraform, true)(this._schemaConversionApplicationAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DmsMigrationProjectSchemaConversionApplicationAttributesList",
      },
      source_data_provider_descriptor: {
        value: cdktn.listMapperHcl(dmsMigrationProjectSourceDataProviderDescriptorToHclTerraform, true)(this._sourceDataProviderDescriptor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DmsMigrationProjectSourceDataProviderDescriptorList",
      },
      target_data_provider_descriptor: {
        value: cdktn.listMapperHcl(dmsMigrationProjectTargetDataProviderDescriptorToHclTerraform, true)(this._targetDataProviderDescriptor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DmsMigrationProjectTargetDataProviderDescriptorList",
      },
      timeouts: {
        value: dmsMigrationProjectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DmsMigrationProjectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
