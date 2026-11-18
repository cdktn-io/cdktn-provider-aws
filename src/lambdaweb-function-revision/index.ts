/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LambdawebFunctionRevisionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#description LambdawebFunctionRevision#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#function_name LambdawebFunctionRevision#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#kms_key_arn LambdawebFunctionRevision#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#region LambdawebFunctionRevision#region}
  */
  readonly region?: string;
  /**
  * build_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#build_config LambdawebFunctionRevision#build_config}
  */
  readonly buildConfig?: LambdawebFunctionRevisionBuildConfig[] | cdktn.IResolvable;
  /**
  * service_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#service_config LambdawebFunctionRevision#service_config}
  */
  readonly serviceConfig?: LambdawebFunctionRevisionServiceConfig[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#timeouts LambdawebFunctionRevision#timeouts}
  */
  readonly timeouts?: LambdawebFunctionRevisionTimeouts;
}
export interface LambdawebFunctionRevisionBuildConfigCodeConfigS3Object {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#bucket LambdawebFunctionRevision#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#key LambdawebFunctionRevision#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#version_id LambdawebFunctionRevision#version_id}
  */
  readonly versionId?: string;
}

export function lambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectToTerraform(struct?: LambdawebFunctionRevisionBuildConfigCodeConfigS3Object | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
    version_id: cdktn.stringToTerraform(struct!.versionId),
  }
}


export function lambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectToHclTerraform(struct?: LambdawebFunctionRevisionBuildConfigCodeConfigS3Object | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
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
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdawebFunctionRevisionBuildConfigCodeConfigS3Object | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdawebFunctionRevisionBuildConfigCodeConfigS3Object | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
      this._versionId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
      this._versionId = value.versionId;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }
}

export class LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList extends cdktn.ComplexList {
  public internalValue? : LambdawebFunctionRevisionBuildConfigCodeConfigS3Object[] | cdktn.IResolvable

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
  public get(index: number): LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference {
    return new LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdawebFunctionRevisionBuildConfigCodeConfig {
  /**
  * s3_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#s3_object LambdawebFunctionRevision#s3_object}
  */
  readonly s3Object?: LambdawebFunctionRevisionBuildConfigCodeConfigS3Object[] | cdktn.IResolvable;
}

export function lambdawebFunctionRevisionBuildConfigCodeConfigToTerraform(struct?: LambdawebFunctionRevisionBuildConfigCodeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_object: cdktn.listMapper(lambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectToTerraform, true)(struct!.s3Object),
  }
}


export function lambdawebFunctionRevisionBuildConfigCodeConfigToHclTerraform(struct?: LambdawebFunctionRevisionBuildConfigCodeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_object: {
      value: cdktn.listMapperHcl(lambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectToHclTerraform, true)(struct!.s3Object),
      isBlock: true,
      type: "list",
      storageClassType: "LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdawebFunctionRevisionBuildConfigCodeConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Object?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Object = this._s3Object?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdawebFunctionRevisionBuildConfigCodeConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Object.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Object.internalValue = value.s3Object;
    }
  }

  // s3_object - computed: false, optional: true, required: false
  private _s3Object = new LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList(this, "s3_object", false);
  public get s3Object() {
    return this._s3Object;
  }
  public putS3Object(value: LambdawebFunctionRevisionBuildConfigCodeConfigS3Object[] | cdktn.IResolvable) {
    this._s3Object.internalValue = value;
  }
  public resetS3Object() {
    this._s3Object.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectInput() {
    return this._s3Object.internalValue;
  }
}

export class LambdawebFunctionRevisionBuildConfigCodeConfigList extends cdktn.ComplexList {
  public internalValue? : LambdawebFunctionRevisionBuildConfigCodeConfig[] | cdktn.IResolvable

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
  public get(index: number): LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference {
    return new LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdawebFunctionRevisionBuildConfigRuntimeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#runtime LambdawebFunctionRevision#runtime}
  */
  readonly runtime: string;
}

export function lambdawebFunctionRevisionBuildConfigRuntimeConfigToTerraform(struct?: LambdawebFunctionRevisionBuildConfigRuntimeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    runtime: cdktn.stringToTerraform(struct!.runtime),
  }
}


export function lambdawebFunctionRevisionBuildConfigRuntimeConfigToHclTerraform(struct?: LambdawebFunctionRevisionBuildConfigRuntimeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    runtime: {
      value: cdktn.stringToHclTerraform(struct!.runtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdawebFunctionRevisionBuildConfigRuntimeConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._runtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdawebFunctionRevisionBuildConfigRuntimeConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._runtime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._runtime = value.runtime;
    }
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }
}

export class LambdawebFunctionRevisionBuildConfigRuntimeConfigList extends cdktn.ComplexList {
  public internalValue? : LambdawebFunctionRevisionBuildConfigRuntimeConfig[] | cdktn.IResolvable

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
  public get(index: number): LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference {
    return new LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdawebFunctionRevisionBuildConfig {
  /**
  * code_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#code_config LambdawebFunctionRevision#code_config}
  */
  readonly codeConfig?: LambdawebFunctionRevisionBuildConfigCodeConfig[] | cdktn.IResolvable;
  /**
  * runtime_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#runtime_config LambdawebFunctionRevision#runtime_config}
  */
  readonly runtimeConfig?: LambdawebFunctionRevisionBuildConfigRuntimeConfig[] | cdktn.IResolvable;
}

export function lambdawebFunctionRevisionBuildConfigToTerraform(struct?: LambdawebFunctionRevisionBuildConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_config: cdktn.listMapper(lambdawebFunctionRevisionBuildConfigCodeConfigToTerraform, true)(struct!.codeConfig),
    runtime_config: cdktn.listMapper(lambdawebFunctionRevisionBuildConfigRuntimeConfigToTerraform, true)(struct!.runtimeConfig),
  }
}


export function lambdawebFunctionRevisionBuildConfigToHclTerraform(struct?: LambdawebFunctionRevisionBuildConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_config: {
      value: cdktn.listMapperHcl(lambdawebFunctionRevisionBuildConfigCodeConfigToHclTerraform, true)(struct!.codeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "LambdawebFunctionRevisionBuildConfigCodeConfigList",
    },
    runtime_config: {
      value: cdktn.listMapperHcl(lambdawebFunctionRevisionBuildConfigRuntimeConfigToHclTerraform, true)(struct!.runtimeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "LambdawebFunctionRevisionBuildConfigRuntimeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdawebFunctionRevisionBuildConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdawebFunctionRevisionBuildConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeConfig = this._codeConfig?.internalValue;
    }
    if (this._runtimeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeConfig = this._runtimeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdawebFunctionRevisionBuildConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeConfig.internalValue = undefined;
      this._runtimeConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeConfig.internalValue = value.codeConfig;
      this._runtimeConfig.internalValue = value.runtimeConfig;
    }
  }

  // code_config - computed: false, optional: true, required: false
  private _codeConfig = new LambdawebFunctionRevisionBuildConfigCodeConfigList(this, "code_config", false);
  public get codeConfig() {
    return this._codeConfig;
  }
  public putCodeConfig(value: LambdawebFunctionRevisionBuildConfigCodeConfig[] | cdktn.IResolvable) {
    this._codeConfig.internalValue = value;
  }
  public resetCodeConfig() {
    this._codeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeConfigInput() {
    return this._codeConfig.internalValue;
  }

  // runtime_config - computed: false, optional: true, required: false
  private _runtimeConfig = new LambdawebFunctionRevisionBuildConfigRuntimeConfigList(this, "runtime_config", false);
  public get runtimeConfig() {
    return this._runtimeConfig;
  }
  public putRuntimeConfig(value: LambdawebFunctionRevisionBuildConfigRuntimeConfig[] | cdktn.IResolvable) {
    this._runtimeConfig.internalValue = value;
  }
  public resetRuntimeConfig() {
    this._runtimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigInput() {
    return this._runtimeConfig.internalValue;
  }
}

export class LambdawebFunctionRevisionBuildConfigList extends cdktn.ComplexList {
  public internalValue? : LambdawebFunctionRevisionBuildConfig[] | cdktn.IResolvable

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
  public get(index: number): LambdawebFunctionRevisionBuildConfigOutputReference {
    return new LambdawebFunctionRevisionBuildConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig {
}

export function lambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigToTerraform(struct?: LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function lambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigToHclTerraform(struct?: LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_log_level - computed: true, optional: false, required: false
  public get applicationLogLevel() {
    return this.getStringAttribute('application_log_level');
  }

  // log_group - computed: true, optional: false, required: false
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }

  // system_log_level - computed: true, optional: false, required: false
  public get systemLogLevel() {
    return this.getStringAttribute('system_log_level');
  }
}

export class LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList extends cdktn.ComplexList {

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
  public get(index: number): LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference {
    return new LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdawebFunctionRevisionServiceConfigTelemetryConfigActual {
}

export function lambdawebFunctionRevisionServiceConfigTelemetryConfigActualToTerraform(struct?: LambdawebFunctionRevisionServiceConfigTelemetryConfigActual): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function lambdawebFunctionRevisionServiceConfigTelemetryConfigActualToHclTerraform(struct?: LambdawebFunctionRevisionServiceConfigTelemetryConfigActual): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdawebFunctionRevisionServiceConfigTelemetryConfigActual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdawebFunctionRevisionServiceConfigTelemetryConfigActual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logging_config - computed: true, optional: false, required: false
  private _loggingConfig = new LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList(this, "logging_config", false);
  public get loggingConfig() {
    return this._loggingConfig;
  }
}

export class LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList extends cdktn.ComplexList {

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
  public get(index: number): LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference {
    return new LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#application_log_level LambdawebFunctionRevision#application_log_level}
  */
  readonly applicationLogLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#log_group LambdawebFunctionRevision#log_group}
  */
  readonly logGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#system_log_level LambdawebFunctionRevision#system_log_level}
  */
  readonly systemLogLevel?: string;
}

export function lambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigToTerraform(struct?: LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_log_level: cdktn.stringToTerraform(struct!.applicationLogLevel),
    log_group: cdktn.stringToTerraform(struct!.logGroup),
    system_log_level: cdktn.stringToTerraform(struct!.systemLogLevel),
  }
}


export function lambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigToHclTerraform(struct?: LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_log_level: {
      value: cdktn.stringToHclTerraform(struct!.applicationLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group: {
      value: cdktn.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_log_level: {
      value: cdktn.stringToHclTerraform(struct!.systemLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationLogLevel = this._applicationLogLevel;
    }
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    if (this._systemLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemLogLevel = this._systemLogLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationLogLevel = undefined;
      this._logGroup = undefined;
      this._systemLogLevel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationLogLevel = value.applicationLogLevel;
      this._logGroup = value.logGroup;
      this._systemLogLevel = value.systemLogLevel;
    }
  }

  // application_log_level - computed: false, optional: true, required: false
  private _applicationLogLevel?: string; 
  public get applicationLogLevel() {
    return this.getStringAttribute('application_log_level');
  }
  public set applicationLogLevel(value: string) {
    this._applicationLogLevel = value;
  }
  public resetApplicationLogLevel() {
    this._applicationLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationLogLevelInput() {
    return this._applicationLogLevel;
  }

  // log_group - computed: false, optional: true, required: false
  private _logGroup?: string; 
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  public resetLogGroup() {
    this._logGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }

  // system_log_level - computed: false, optional: true, required: false
  private _systemLogLevel?: string; 
  public get systemLogLevel() {
    return this.getStringAttribute('system_log_level');
  }
  public set systemLogLevel(value: string) {
    this._systemLogLevel = value;
  }
  public resetSystemLogLevel() {
    this._systemLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemLogLevelInput() {
    return this._systemLogLevel;
  }
}

export class LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList extends cdktn.ComplexList {
  public internalValue? : LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig[] | cdktn.IResolvable

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
  public get(index: number): LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference {
    return new LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdawebFunctionRevisionServiceConfigTelemetryConfig {
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#logging_config LambdawebFunctionRevision#logging_config}
  */
  readonly loggingConfig?: LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig[] | cdktn.IResolvable;
}

export function lambdawebFunctionRevisionServiceConfigTelemetryConfigToTerraform(struct?: LambdawebFunctionRevisionServiceConfigTelemetryConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    logging_config: cdktn.listMapper(lambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigToTerraform, true)(struct!.loggingConfig),
  }
}


export function lambdawebFunctionRevisionServiceConfigTelemetryConfigToHclTerraform(struct?: LambdawebFunctionRevisionServiceConfigTelemetryConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    logging_config: {
      value: cdktn.listMapperHcl(lambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigToHclTerraform, true)(struct!.loggingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdawebFunctionRevisionServiceConfigTelemetryConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loggingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdawebFunctionRevisionServiceConfigTelemetryConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loggingConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loggingConfig.internalValue = value.loggingConfig;
    }
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList(this, "logging_config", false);
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig[] | cdktn.IResolvable) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }
}

export class LambdawebFunctionRevisionServiceConfigTelemetryConfigList extends cdktn.ComplexList {
  public internalValue? : LambdawebFunctionRevisionServiceConfigTelemetryConfig[] | cdktn.IResolvable

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
  public get(index: number): LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference {
    return new LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdawebFunctionRevisionServiceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#egress_network_connector_arn LambdawebFunctionRevision#egress_network_connector_arn}
  */
  readonly egressNetworkConnectorArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#environment_variables LambdawebFunctionRevision#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#execution_role_arn LambdawebFunctionRevision#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#max_concurrency_per_environment LambdawebFunctionRevision#max_concurrency_per_environment}
  */
  readonly maxConcurrencyPerEnvironment?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#timeout_seconds LambdawebFunctionRevision#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * telemetry_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#telemetry_config LambdawebFunctionRevision#telemetry_config}
  */
  readonly telemetryConfig?: LambdawebFunctionRevisionServiceConfigTelemetryConfig[] | cdktn.IResolvable;
}

export function lambdawebFunctionRevisionServiceConfigToTerraform(struct?: LambdawebFunctionRevisionServiceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    egress_network_connector_arn: cdktn.stringToTerraform(struct!.egressNetworkConnectorArn),
    environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environmentVariables),
    execution_role_arn: cdktn.stringToTerraform(struct!.executionRoleArn),
    max_concurrency_per_environment: cdktn.numberToTerraform(struct!.maxConcurrencyPerEnvironment),
    timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
    telemetry_config: cdktn.listMapper(lambdawebFunctionRevisionServiceConfigTelemetryConfigToTerraform, true)(struct!.telemetryConfig),
  }
}


export function lambdawebFunctionRevisionServiceConfigToHclTerraform(struct?: LambdawebFunctionRevisionServiceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    egress_network_connector_arn: {
      value: cdktn.stringToHclTerraform(struct!.egressNetworkConnectorArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_variables: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    execution_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.executionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_concurrency_per_environment: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrencyPerEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    telemetry_config: {
      value: cdktn.listMapperHcl(lambdawebFunctionRevisionServiceConfigTelemetryConfigToHclTerraform, true)(struct!.telemetryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "LambdawebFunctionRevisionServiceConfigTelemetryConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdawebFunctionRevisionServiceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdawebFunctionRevisionServiceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressNetworkConnectorArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressNetworkConnectorArn = this._egressNetworkConnectorArn;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._executionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleArn = this._executionRoleArn;
    }
    if (this._maxConcurrencyPerEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrencyPerEnvironment = this._maxConcurrencyPerEnvironment;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._telemetryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetryConfig = this._telemetryConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdawebFunctionRevisionServiceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressNetworkConnectorArn = undefined;
      this._environmentVariables = undefined;
      this._executionRoleArn = undefined;
      this._maxConcurrencyPerEnvironment = undefined;
      this._timeoutSeconds = undefined;
      this._telemetryConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressNetworkConnectorArn = value.egressNetworkConnectorArn;
      this._environmentVariables = value.environmentVariables;
      this._executionRoleArn = value.executionRoleArn;
      this._maxConcurrencyPerEnvironment = value.maxConcurrencyPerEnvironment;
      this._timeoutSeconds = value.timeoutSeconds;
      this._telemetryConfig.internalValue = value.telemetryConfig;
    }
  }

  // egress_network_connector_arn - computed: false, optional: true, required: false
  private _egressNetworkConnectorArn?: string; 
  public get egressNetworkConnectorArn() {
    return this.getStringAttribute('egress_network_connector_arn');
  }
  public set egressNetworkConnectorArn(value: string) {
    this._egressNetworkConnectorArn = value;
  }
  public resetEgressNetworkConnectorArn() {
    this._egressNetworkConnectorArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressNetworkConnectorArnInput() {
    return this._egressNetworkConnectorArn;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
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

  // max_concurrency_per_environment - computed: true, optional: true, required: false
  private _maxConcurrencyPerEnvironment?: number; 
  public get maxConcurrencyPerEnvironment() {
    return this.getNumberAttribute('max_concurrency_per_environment');
  }
  public set maxConcurrencyPerEnvironment(value: number) {
    this._maxConcurrencyPerEnvironment = value;
  }
  public resetMaxConcurrencyPerEnvironment() {
    this._maxConcurrencyPerEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyPerEnvironmentInput() {
    return this._maxConcurrencyPerEnvironment;
  }

  // telemetry_config_actual - computed: true, optional: false, required: false
  private _telemetryConfigActual = new LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList(this, "telemetry_config_actual", false);
  public get telemetryConfigActual() {
    return this._telemetryConfigActual;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // telemetry_config - computed: false, optional: true, required: false
  private _telemetryConfig = new LambdawebFunctionRevisionServiceConfigTelemetryConfigList(this, "telemetry_config", false);
  public get telemetryConfig() {
    return this._telemetryConfig;
  }
  public putTelemetryConfig(value: LambdawebFunctionRevisionServiceConfigTelemetryConfig[] | cdktn.IResolvable) {
    this._telemetryConfig.internalValue = value;
  }
  public resetTelemetryConfig() {
    this._telemetryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryConfigInput() {
    return this._telemetryConfig.internalValue;
  }
}

export class LambdawebFunctionRevisionServiceConfigList extends cdktn.ComplexList {
  public internalValue? : LambdawebFunctionRevisionServiceConfig[] | cdktn.IResolvable

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
  public get(index: number): LambdawebFunctionRevisionServiceConfigOutputReference {
    return new LambdawebFunctionRevisionServiceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdawebFunctionRevisionTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#create LambdawebFunctionRevision#create}
  */
  readonly create?: string;
}

export function lambdawebFunctionRevisionTimeoutsToTerraform(struct?: LambdawebFunctionRevisionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
  }
}


export function lambdawebFunctionRevisionTimeoutsToHclTerraform(struct?: LambdawebFunctionRevisionTimeouts | cdktn.IResolvable): any {
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

export class LambdawebFunctionRevisionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdawebFunctionRevisionTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LambdawebFunctionRevisionTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision aws_lambdaweb_function_revision}
*/
export class LambdawebFunctionRevision extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambdaweb_function_revision";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LambdawebFunctionRevision resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdawebFunctionRevision to import
  * @param importFromId The id of the existing LambdawebFunctionRevision that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdawebFunctionRevision to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambdaweb_function_revision", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision aws_lambdaweb_function_revision} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdawebFunctionRevisionConfig
  */
  public constructor(scope: Construct, id: string, config: LambdawebFunctionRevisionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambdaweb_function_revision',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.73.0',
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
    this._functionName = config.functionName;
    this._kmsKeyArn = config.kmsKeyArn;
    this._region = config.region;
    this._buildConfig.internalValue = config.buildConfig;
    this._serviceConfig.internalValue = config.serviceConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
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

  // revision_id - computed: true, optional: false, required: false
  public get revisionId() {
    return this.getStringAttribute('revision_id');
  }

  // build_config - computed: false, optional: true, required: false
  private _buildConfig = new LambdawebFunctionRevisionBuildConfigList(this, "build_config", false);
  public get buildConfig() {
    return this._buildConfig;
  }
  public putBuildConfig(value: LambdawebFunctionRevisionBuildConfig[] | cdktn.IResolvable) {
    this._buildConfig.internalValue = value;
  }
  public resetBuildConfig() {
    this._buildConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildConfigInput() {
    return this._buildConfig.internalValue;
  }

  // service_config - computed: false, optional: true, required: false
  private _serviceConfig = new LambdawebFunctionRevisionServiceConfigList(this, "service_config", false);
  public get serviceConfig() {
    return this._serviceConfig;
  }
  public putServiceConfig(value: LambdawebFunctionRevisionServiceConfig[] | cdktn.IResolvable) {
    this._serviceConfig.internalValue = value;
  }
  public resetServiceConfig() {
    this._serviceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigInput() {
    return this._serviceConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LambdawebFunctionRevisionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LambdawebFunctionRevisionTimeouts) {
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
      function_name: cdktn.stringToTerraform(this._functionName),
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
      region: cdktn.stringToTerraform(this._region),
      build_config: cdktn.listMapper(lambdawebFunctionRevisionBuildConfigToTerraform, true)(this._buildConfig.internalValue),
      service_config: cdktn.listMapper(lambdawebFunctionRevisionServiceConfigToTerraform, true)(this._serviceConfig.internalValue),
      timeouts: lambdawebFunctionRevisionTimeoutsToTerraform(this._timeouts.internalValue),
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
      function_name: {
        value: cdktn.stringToHclTerraform(this._functionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._kmsKeyArn),
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
      build_config: {
        value: cdktn.listMapperHcl(lambdawebFunctionRevisionBuildConfigToHclTerraform, true)(this._buildConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdawebFunctionRevisionBuildConfigList",
      },
      service_config: {
        value: cdktn.listMapperHcl(lambdawebFunctionRevisionServiceConfigToHclTerraform, true)(this._serviceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdawebFunctionRevisionServiceConfigList",
      },
      timeouts: {
        value: lambdawebFunctionRevisionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LambdawebFunctionRevisionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
