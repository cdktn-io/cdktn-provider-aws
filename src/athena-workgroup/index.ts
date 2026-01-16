/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AthenaWorkgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#description AthenaWorkgroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#id AthenaWorkgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#name AthenaWorkgroup#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#region AthenaWorkgroup#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#state AthenaWorkgroup#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#tags AthenaWorkgroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#tags_all AthenaWorkgroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#configuration AthenaWorkgroup#configuration}
  */
  readonly configuration?: AthenaWorkgroupConfiguration;
}
export interface AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}
  */
  readonly kmsKey?: string;
}

export function athenaWorkgroupConfigurationCustomerContentEncryptionConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference | AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}


export function athenaWorkgroupConfigurationCustomerContentEncryptionConfigurationToHclTerraform(struct?: AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference | AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface AthenaWorkgroupConfigurationEngineVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#selected_engine_version AthenaWorkgroup#selected_engine_version}
  */
  readonly selectedEngineVersion?: string;
}

export function athenaWorkgroupConfigurationEngineVersionToTerraform(struct?: AthenaWorkgroupConfigurationEngineVersionOutputReference | AthenaWorkgroupConfigurationEngineVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_engine_version: cdktf.stringToTerraform(struct!.selectedEngineVersion),
  }
}


export function athenaWorkgroupConfigurationEngineVersionToHclTerraform(struct?: AthenaWorkgroupConfigurationEngineVersionOutputReference | AthenaWorkgroupConfigurationEngineVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selected_engine_version: {
      value: cdktf.stringToHclTerraform(struct!.selectedEngineVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkgroupConfigurationEngineVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AthenaWorkgroupConfigurationEngineVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectedEngineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedEngineVersion = this._selectedEngineVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfigurationEngineVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectedEngineVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectedEngineVersion = value.selectedEngineVersion;
    }
  }

  // effective_engine_version - computed: true, optional: false, required: false
  public get effectiveEngineVersion() {
    return this.getStringAttribute('effective_engine_version');
  }

  // selected_engine_version - computed: false, optional: true, required: false
  private _selectedEngineVersion?: string; 
  public get selectedEngineVersion() {
    return this.getStringAttribute('selected_engine_version');
  }
  public set selectedEngineVersion(value: string) {
    this._selectedEngineVersion = value;
  }
  public resetSelectedEngineVersion() {
    this._selectedEngineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedEngineVersionInput() {
    return this._selectedEngineVersion;
  }
}
export interface AthenaWorkgroupConfigurationIdentityCenterConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enable_identity_center AthenaWorkgroup#enable_identity_center}
  */
  readonly enableIdentityCenter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#identity_center_instance_arn AthenaWorkgroup#identity_center_instance_arn}
  */
  readonly identityCenterInstanceArn?: string;
}

export function athenaWorkgroupConfigurationIdentityCenterConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference | AthenaWorkgroupConfigurationIdentityCenterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_identity_center: cdktf.booleanToTerraform(struct!.enableIdentityCenter),
    identity_center_instance_arn: cdktf.stringToTerraform(struct!.identityCenterInstanceArn),
  }
}


export function athenaWorkgroupConfigurationIdentityCenterConfigurationToHclTerraform(struct?: AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference | AthenaWorkgroupConfigurationIdentityCenterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_identity_center: {
      value: cdktf.booleanToHclTerraform(struct!.enableIdentityCenter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    identity_center_instance_arn: {
      value: cdktf.stringToHclTerraform(struct!.identityCenterInstanceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AthenaWorkgroupConfigurationIdentityCenterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIdentityCenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIdentityCenter = this._enableIdentityCenter;
    }
    if (this._identityCenterInstanceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCenterInstanceArn = this._identityCenterInstanceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfigurationIdentityCenterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIdentityCenter = undefined;
      this._identityCenterInstanceArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIdentityCenter = value.enableIdentityCenter;
      this._identityCenterInstanceArn = value.identityCenterInstanceArn;
    }
  }

  // enable_identity_center - computed: false, optional: true, required: false
  private _enableIdentityCenter?: boolean | cdktf.IResolvable; 
  public get enableIdentityCenter() {
    return this.getBooleanAttribute('enable_identity_center');
  }
  public set enableIdentityCenter(value: boolean | cdktf.IResolvable) {
    this._enableIdentityCenter = value;
  }
  public resetEnableIdentityCenter() {
    this._enableIdentityCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIdentityCenterInput() {
    return this._enableIdentityCenter;
  }

  // identity_center_instance_arn - computed: false, optional: true, required: false
  private _identityCenterInstanceArn?: string; 
  public get identityCenterInstanceArn() {
    return this.getStringAttribute('identity_center_instance_arn');
  }
  public set identityCenterInstanceArn(value: string) {
    this._identityCenterInstanceArn = value;
  }
  public resetIdentityCenterInstanceArn() {
    this._identityCenterInstanceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterInstanceArnInput() {
    return this._identityCenterInstanceArn;
  }
}
export interface AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}
  */
  readonly kmsKey?: string;
}

export function athenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference | AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}


export function athenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationToHclTerraform(struct?: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference | AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface AthenaWorkgroupConfigurationManagedQueryResultsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#encryption_configuration AthenaWorkgroup#encryption_configuration}
  */
  readonly encryptionConfiguration?: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration;
}

export function athenaWorkgroupConfigurationManagedQueryResultsConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference | AthenaWorkgroupConfigurationManagedQueryResultsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    encryption_configuration: athenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
  }
}


export function athenaWorkgroupConfigurationManagedQueryResultsConfigurationToHclTerraform(struct?: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference | AthenaWorkgroupConfigurationManagedQueryResultsConfiguration): any {
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
    encryption_configuration: {
      value: athenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AthenaWorkgroupConfigurationManagedQueryResultsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfigurationManagedQueryResultsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._encryptionConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
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

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: AthenaWorkgroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }
}
export interface AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#key AthenaWorkgroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#values AthenaWorkgroup#values}
  */
  readonly values: string[];
}

export function athenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeToTerraform(struct?: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function athenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeToHclTerraform(struct?: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList extends cdktf.ComplexList {
  public internalValue? : AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType[] | cdktf.IResolvable

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
  public get(index: number): AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference {
    return new AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#log_group AthenaWorkgroup#log_group}
  */
  readonly logGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#log_stream_name_prefix AthenaWorkgroup#log_stream_name_prefix}
  */
  readonly logStreamNamePrefix?: string;
  /**
  * log_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#log_type AthenaWorkgroup#log_type}
  */
  readonly logType?: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType[] | cdktf.IResolvable;
}

export function athenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference | AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group: cdktf.stringToTerraform(struct!.logGroup),
    log_stream_name_prefix: cdktf.stringToTerraform(struct!.logStreamNamePrefix),
    log_type: cdktf.listMapper(athenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeToTerraform, true)(struct!.logType),
  }
}


export function athenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationToHclTerraform(struct?: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference | AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration): any {
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
    log_group: {
      value: cdktf.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.logStreamNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktf.listMapperHcl(athenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeToHclTerraform, true)(struct!.logType),
      isBlock: true,
      type: "set",
      storageClassType: "AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    if (this._logStreamNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamNamePrefix = this._logStreamNamePrefix;
    }
    if (this._logType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroup = undefined;
      this._logStreamNamePrefix = undefined;
      this._logType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroup = value.logGroup;
      this._logStreamNamePrefix = value.logStreamNamePrefix;
      this._logType.internalValue = value.logType;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // log_stream_name_prefix - computed: false, optional: true, required: false
  private _logStreamNamePrefix?: string; 
  public get logStreamNamePrefix() {
    return this.getStringAttribute('log_stream_name_prefix');
  }
  public set logStreamNamePrefix(value: string) {
    this._logStreamNamePrefix = value;
  }
  public resetLogStreamNamePrefix() {
    this._logStreamNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNamePrefixInput() {
    return this._logStreamNamePrefix;
  }

  // log_type - computed: false, optional: true, required: false
  private _logType = new AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogTypeList(this, "log_type", true);
  public get logType() {
    return this._logType;
  }
  public putLogType(value: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationLogType[] | cdktf.IResolvable) {
    this._logType.internalValue = value;
  }
  public resetLogType() {
    this._logType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType.internalValue;
  }
}
export interface AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}
  */
  readonly kmsKey?: string;
}

export function athenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference | AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}


export function athenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationToHclTerraform(struct?: AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference | AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration): any {
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
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._kmsKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._kmsKey = value.kmsKey;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enabled AthenaWorkgroup#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#kms_key AthenaWorkgroup#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#log_location AthenaWorkgroup#log_location}
  */
  readonly logLocation?: string;
}

export function athenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference | AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    log_location: cdktf.stringToTerraform(struct!.logLocation),
  }
}


export function athenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationToHclTerraform(struct?: AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference | AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration): any {
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
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_location: {
      value: cdktf.stringToHclTerraform(struct!.logLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._logLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLocation = this._logLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._kmsKey = undefined;
      this._logLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._kmsKey = value.kmsKey;
      this._logLocation = value.logLocation;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // log_location - computed: false, optional: true, required: false
  private _logLocation?: string; 
  public get logLocation() {
    return this.getStringAttribute('log_location');
  }
  public set logLocation(value: string) {
    this._logLocation = value;
  }
  public resetLogLocation() {
    this._logLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLocationInput() {
    return this._logLocation;
  }
}
export interface AthenaWorkgroupConfigurationMonitoringConfiguration {
  /**
  * cloud_watch_logging_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#cloud_watch_logging_configuration AthenaWorkgroup#cloud_watch_logging_configuration}
  */
  readonly cloudWatchLoggingConfiguration?: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration;
  /**
  * managed_logging_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#managed_logging_configuration AthenaWorkgroup#managed_logging_configuration}
  */
  readonly managedLoggingConfiguration?: AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration;
  /**
  * s3_logging_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#s3_logging_configuration AthenaWorkgroup#s3_logging_configuration}
  */
  readonly s3LoggingConfiguration?: AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration;
}

export function athenaWorkgroupConfigurationMonitoringConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference | AthenaWorkgroupConfigurationMonitoringConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_watch_logging_configuration: athenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationToTerraform(struct!.cloudWatchLoggingConfiguration),
    managed_logging_configuration: athenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationToTerraform(struct!.managedLoggingConfiguration),
    s3_logging_configuration: athenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationToTerraform(struct!.s3LoggingConfiguration),
  }
}


export function athenaWorkgroupConfigurationMonitoringConfigurationToHclTerraform(struct?: AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference | AthenaWorkgroupConfigurationMonitoringConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_watch_logging_configuration: {
      value: athenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationToHclTerraform(struct!.cloudWatchLoggingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationList",
    },
    managed_logging_configuration: {
      value: athenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationToHclTerraform(struct!.managedLoggingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationList",
    },
    s3_logging_configuration: {
      value: athenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationToHclTerraform(struct!.s3LoggingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AthenaWorkgroupConfigurationMonitoringConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudWatchLoggingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchLoggingConfiguration = this._cloudWatchLoggingConfiguration?.internalValue;
    }
    if (this._managedLoggingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedLoggingConfiguration = this._managedLoggingConfiguration?.internalValue;
    }
    if (this._s3LoggingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3LoggingConfiguration = this._s3LoggingConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfigurationMonitoringConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudWatchLoggingConfiguration.internalValue = undefined;
      this._managedLoggingConfiguration.internalValue = undefined;
      this._s3LoggingConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudWatchLoggingConfiguration.internalValue = value.cloudWatchLoggingConfiguration;
      this._managedLoggingConfiguration.internalValue = value.managedLoggingConfiguration;
      this._s3LoggingConfiguration.internalValue = value.s3LoggingConfiguration;
    }
  }

  // cloud_watch_logging_configuration - computed: false, optional: true, required: false
  private _cloudWatchLoggingConfiguration = new AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfigurationOutputReference(this, "cloud_watch_logging_configuration");
  public get cloudWatchLoggingConfiguration() {
    return this._cloudWatchLoggingConfiguration;
  }
  public putCloudWatchLoggingConfiguration(value: AthenaWorkgroupConfigurationMonitoringConfigurationCloudWatchLoggingConfiguration) {
    this._cloudWatchLoggingConfiguration.internalValue = value;
  }
  public resetCloudWatchLoggingConfiguration() {
    this._cloudWatchLoggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLoggingConfigurationInput() {
    return this._cloudWatchLoggingConfiguration.internalValue;
  }

  // managed_logging_configuration - computed: false, optional: true, required: false
  private _managedLoggingConfiguration = new AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference(this, "managed_logging_configuration");
  public get managedLoggingConfiguration() {
    return this._managedLoggingConfiguration;
  }
  public putManagedLoggingConfiguration(value: AthenaWorkgroupConfigurationMonitoringConfigurationManagedLoggingConfiguration) {
    this._managedLoggingConfiguration.internalValue = value;
  }
  public resetManagedLoggingConfiguration() {
    this._managedLoggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedLoggingConfigurationInput() {
    return this._managedLoggingConfiguration.internalValue;
  }

  // s3_logging_configuration - computed: false, optional: true, required: false
  private _s3LoggingConfiguration = new AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference(this, "s3_logging_configuration");
  public get s3LoggingConfiguration() {
    return this._s3LoggingConfiguration;
  }
  public putS3LoggingConfiguration(value: AthenaWorkgroupConfigurationMonitoringConfigurationS3LoggingConfiguration) {
    this._s3LoggingConfiguration.internalValue = value;
  }
  public resetS3LoggingConfiguration() {
    this._s3LoggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LoggingConfigurationInput() {
    return this._s3LoggingConfiguration.internalValue;
  }
}
export interface AthenaWorkgroupConfigurationResultConfigurationAclConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#s3_acl_option AthenaWorkgroup#s3_acl_option}
  */
  readonly s3AclOption: string;
}

export function athenaWorkgroupConfigurationResultConfigurationAclConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfigurationAclConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_acl_option: cdktf.stringToTerraform(struct!.s3AclOption),
  }
}


export function athenaWorkgroupConfigurationResultConfigurationAclConfigurationToHclTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfigurationAclConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_acl_option: {
      value: cdktf.stringToHclTerraform(struct!.s3AclOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AthenaWorkgroupConfigurationResultConfigurationAclConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3AclOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AclOption = this._s3AclOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3AclOption = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3AclOption = value.s3AclOption;
    }
  }

  // s3_acl_option - computed: false, optional: false, required: true
  private _s3AclOption?: string; 
  public get s3AclOption() {
    return this.getStringAttribute('s3_acl_option');
  }
  public set s3AclOption(value: string) {
    this._s3AclOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AclOptionInput() {
    return this._s3AclOption;
  }
}
export interface AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#encryption_option AthenaWorkgroup#encryption_option}
  */
  readonly encryptionOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#kms_key_arn AthenaWorkgroup#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_option: cdktf.stringToTerraform(struct!.encryptionOption),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToHclTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_option: {
      value: cdktf.stringToHclTerraform(struct!.encryptionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionOption = this._encryptionOption;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionOption = undefined;
      this._kmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionOption = value.encryptionOption;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // encryption_option - computed: false, optional: true, required: false
  private _encryptionOption?: string; 
  public get encryptionOption() {
    return this.getStringAttribute('encryption_option');
  }
  public set encryptionOption(value: string) {
    this._encryptionOption = value;
  }
  public resetEncryptionOption() {
    this._encryptionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionOptionInput() {
    return this._encryptionOption;
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
}
export interface AthenaWorkgroupConfigurationResultConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#expected_bucket_owner AthenaWorkgroup#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#output_location AthenaWorkgroup#output_location}
  */
  readonly outputLocation?: string;
  /**
  * acl_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#acl_configuration AthenaWorkgroup#acl_configuration}
  */
  readonly aclConfiguration?: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration;
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#encryption_configuration AthenaWorkgroup#encryption_configuration}
  */
  readonly encryptionConfiguration?: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration;
}

export function athenaWorkgroupConfigurationResultConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_bucket_owner: cdktf.stringToTerraform(struct!.expectedBucketOwner),
    output_location: cdktf.stringToTerraform(struct!.outputLocation),
    acl_configuration: athenaWorkgroupConfigurationResultConfigurationAclConfigurationToTerraform(struct!.aclConfiguration),
    encryption_configuration: athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
  }
}


export function athenaWorkgroupConfigurationResultConfigurationToHclTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_bucket_owner: {
      value: cdktf.stringToHclTerraform(struct!.expectedBucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_location: {
      value: cdktf.stringToHclTerraform(struct!.outputLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_configuration: {
      value: athenaWorkgroupConfigurationResultConfigurationAclConfigurationToHclTerraform(struct!.aclConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AthenaWorkgroupConfigurationResultConfigurationAclConfigurationList",
    },
    encryption_configuration: {
      value: athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkgroupConfigurationResultConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AthenaWorkgroupConfigurationResultConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedBucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedBucketOwner = this._expectedBucketOwner;
    }
    if (this._outputLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputLocation = this._outputLocation;
    }
    if (this._aclConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclConfiguration = this._aclConfiguration?.internalValue;
    }
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfigurationResultConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expectedBucketOwner = undefined;
      this._outputLocation = undefined;
      this._aclConfiguration.internalValue = undefined;
      this._encryptionConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expectedBucketOwner = value.expectedBucketOwner;
      this._outputLocation = value.outputLocation;
      this._aclConfiguration.internalValue = value.aclConfiguration;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
    }
  }

  // expected_bucket_owner - computed: false, optional: true, required: false
  private _expectedBucketOwner?: string; 
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
  public set expectedBucketOwner(value: string) {
    this._expectedBucketOwner = value;
  }
  public resetExpectedBucketOwner() {
    this._expectedBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBucketOwnerInput() {
    return this._expectedBucketOwner;
  }

  // output_location - computed: false, optional: true, required: false
  private _outputLocation?: string; 
  public get outputLocation() {
    return this.getStringAttribute('output_location');
  }
  public set outputLocation(value: string) {
    this._outputLocation = value;
  }
  public resetOutputLocation() {
    this._outputLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation;
  }

  // acl_configuration - computed: false, optional: true, required: false
  private _aclConfiguration = new AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference(this, "acl_configuration");
  public get aclConfiguration() {
    return this._aclConfiguration;
  }
  public putAclConfiguration(value: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration) {
    this._aclConfiguration.internalValue = value;
  }
  public resetAclConfiguration() {
    this._aclConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclConfigurationInput() {
    return this._aclConfiguration.internalValue;
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }
}
export interface AthenaWorkgroupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}
  */
  readonly bytesScannedCutoffPerQuery?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enable_minimum_encryption_configuration AthenaWorkgroup#enable_minimum_encryption_configuration}
  */
  readonly enableMinimumEncryptionConfiguration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}
  */
  readonly enforceWorkgroupConfiguration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#execution_role AthenaWorkgroup#execution_role}
  */
  readonly executionRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}
  */
  readonly publishCloudwatchMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#requester_pays_enabled AthenaWorkgroup#requester_pays_enabled}
  */
  readonly requesterPaysEnabled?: boolean | cdktf.IResolvable;
  /**
  * customer_content_encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#customer_content_encryption_configuration AthenaWorkgroup#customer_content_encryption_configuration}
  */
  readonly customerContentEncryptionConfiguration?: AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration;
  /**
  * engine_version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#engine_version AthenaWorkgroup#engine_version}
  */
  readonly engineVersion?: AthenaWorkgroupConfigurationEngineVersion;
  /**
  * identity_center_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#identity_center_configuration AthenaWorkgroup#identity_center_configuration}
  */
  readonly identityCenterConfiguration?: AthenaWorkgroupConfigurationIdentityCenterConfiguration;
  /**
  * managed_query_results_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#managed_query_results_configuration AthenaWorkgroup#managed_query_results_configuration}
  */
  readonly managedQueryResultsConfiguration?: AthenaWorkgroupConfigurationManagedQueryResultsConfiguration;
  /**
  * monitoring_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#monitoring_configuration AthenaWorkgroup#monitoring_configuration}
  */
  readonly monitoringConfiguration?: AthenaWorkgroupConfigurationMonitoringConfiguration;
  /**
  * result_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#result_configuration AthenaWorkgroup#result_configuration}
  */
  readonly resultConfiguration?: AthenaWorkgroupConfigurationResultConfiguration;
}

export function athenaWorkgroupConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationOutputReference | AthenaWorkgroupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bytes_scanned_cutoff_per_query: cdktf.numberToTerraform(struct!.bytesScannedCutoffPerQuery),
    enable_minimum_encryption_configuration: cdktf.booleanToTerraform(struct!.enableMinimumEncryptionConfiguration),
    enforce_workgroup_configuration: cdktf.booleanToTerraform(struct!.enforceWorkgroupConfiguration),
    execution_role: cdktf.stringToTerraform(struct!.executionRole),
    publish_cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.publishCloudwatchMetricsEnabled),
    requester_pays_enabled: cdktf.booleanToTerraform(struct!.requesterPaysEnabled),
    customer_content_encryption_configuration: athenaWorkgroupConfigurationCustomerContentEncryptionConfigurationToTerraform(struct!.customerContentEncryptionConfiguration),
    engine_version: athenaWorkgroupConfigurationEngineVersionToTerraform(struct!.engineVersion),
    identity_center_configuration: athenaWorkgroupConfigurationIdentityCenterConfigurationToTerraform(struct!.identityCenterConfiguration),
    managed_query_results_configuration: athenaWorkgroupConfigurationManagedQueryResultsConfigurationToTerraform(struct!.managedQueryResultsConfiguration),
    monitoring_configuration: athenaWorkgroupConfigurationMonitoringConfigurationToTerraform(struct!.monitoringConfiguration),
    result_configuration: athenaWorkgroupConfigurationResultConfigurationToTerraform(struct!.resultConfiguration),
  }
}


export function athenaWorkgroupConfigurationToHclTerraform(struct?: AthenaWorkgroupConfigurationOutputReference | AthenaWorkgroupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bytes_scanned_cutoff_per_query: {
      value: cdktf.numberToHclTerraform(struct!.bytesScannedCutoffPerQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_minimum_encryption_configuration: {
      value: cdktf.booleanToHclTerraform(struct!.enableMinimumEncryptionConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_workgroup_configuration: {
      value: cdktf.booleanToHclTerraform(struct!.enforceWorkgroupConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execution_role: {
      value: cdktf.stringToHclTerraform(struct!.executionRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publish_cloudwatch_metrics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.publishCloudwatchMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    requester_pays_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.requesterPaysEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    customer_content_encryption_configuration: {
      value: athenaWorkgroupConfigurationCustomerContentEncryptionConfigurationToHclTerraform(struct!.customerContentEncryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationList",
    },
    engine_version: {
      value: athenaWorkgroupConfigurationEngineVersionToHclTerraform(struct!.engineVersion),
      isBlock: true,
      type: "list",
      storageClassType: "AthenaWorkgroupConfigurationEngineVersionList",
    },
    identity_center_configuration: {
      value: athenaWorkgroupConfigurationIdentityCenterConfigurationToHclTerraform(struct!.identityCenterConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AthenaWorkgroupConfigurationIdentityCenterConfigurationList",
    },
    managed_query_results_configuration: {
      value: athenaWorkgroupConfigurationManagedQueryResultsConfigurationToHclTerraform(struct!.managedQueryResultsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AthenaWorkgroupConfigurationManagedQueryResultsConfigurationList",
    },
    monitoring_configuration: {
      value: athenaWorkgroupConfigurationMonitoringConfigurationToHclTerraform(struct!.monitoringConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AthenaWorkgroupConfigurationMonitoringConfigurationList",
    },
    result_configuration: {
      value: athenaWorkgroupConfigurationResultConfigurationToHclTerraform(struct!.resultConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AthenaWorkgroupConfigurationResultConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkgroupConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AthenaWorkgroupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bytesScannedCutoffPerQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesScannedCutoffPerQuery = this._bytesScannedCutoffPerQuery;
    }
    if (this._enableMinimumEncryptionConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMinimumEncryptionConfiguration = this._enableMinimumEncryptionConfiguration;
    }
    if (this._enforceWorkgroupConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceWorkgroupConfiguration = this._enforceWorkgroupConfiguration;
    }
    if (this._executionRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRole = this._executionRole;
    }
    if (this._publishCloudwatchMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishCloudwatchMetricsEnabled = this._publishCloudwatchMetricsEnabled;
    }
    if (this._requesterPaysEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.requesterPaysEnabled = this._requesterPaysEnabled;
    }
    if (this._customerContentEncryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerContentEncryptionConfiguration = this._customerContentEncryptionConfiguration?.internalValue;
    }
    if (this._engineVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion?.internalValue;
    }
    if (this._identityCenterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCenterConfiguration = this._identityCenterConfiguration?.internalValue;
    }
    if (this._managedQueryResultsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedQueryResultsConfiguration = this._managedQueryResultsConfiguration?.internalValue;
    }
    if (this._monitoringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringConfiguration = this._monitoringConfiguration?.internalValue;
    }
    if (this._resultConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultConfiguration = this._resultConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bytesScannedCutoffPerQuery = undefined;
      this._enableMinimumEncryptionConfiguration = undefined;
      this._enforceWorkgroupConfiguration = undefined;
      this._executionRole = undefined;
      this._publishCloudwatchMetricsEnabled = undefined;
      this._requesterPaysEnabled = undefined;
      this._customerContentEncryptionConfiguration.internalValue = undefined;
      this._engineVersion.internalValue = undefined;
      this._identityCenterConfiguration.internalValue = undefined;
      this._managedQueryResultsConfiguration.internalValue = undefined;
      this._monitoringConfiguration.internalValue = undefined;
      this._resultConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bytesScannedCutoffPerQuery = value.bytesScannedCutoffPerQuery;
      this._enableMinimumEncryptionConfiguration = value.enableMinimumEncryptionConfiguration;
      this._enforceWorkgroupConfiguration = value.enforceWorkgroupConfiguration;
      this._executionRole = value.executionRole;
      this._publishCloudwatchMetricsEnabled = value.publishCloudwatchMetricsEnabled;
      this._requesterPaysEnabled = value.requesterPaysEnabled;
      this._customerContentEncryptionConfiguration.internalValue = value.customerContentEncryptionConfiguration;
      this._engineVersion.internalValue = value.engineVersion;
      this._identityCenterConfiguration.internalValue = value.identityCenterConfiguration;
      this._managedQueryResultsConfiguration.internalValue = value.managedQueryResultsConfiguration;
      this._monitoringConfiguration.internalValue = value.monitoringConfiguration;
      this._resultConfiguration.internalValue = value.resultConfiguration;
    }
  }

  // bytes_scanned_cutoff_per_query - computed: false, optional: true, required: false
  private _bytesScannedCutoffPerQuery?: number; 
  public get bytesScannedCutoffPerQuery() {
    return this.getNumberAttribute('bytes_scanned_cutoff_per_query');
  }
  public set bytesScannedCutoffPerQuery(value: number) {
    this._bytesScannedCutoffPerQuery = value;
  }
  public resetBytesScannedCutoffPerQuery() {
    this._bytesScannedCutoffPerQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesScannedCutoffPerQueryInput() {
    return this._bytesScannedCutoffPerQuery;
  }

  // enable_minimum_encryption_configuration - computed: true, optional: true, required: false
  private _enableMinimumEncryptionConfiguration?: boolean | cdktf.IResolvable; 
  public get enableMinimumEncryptionConfiguration() {
    return this.getBooleanAttribute('enable_minimum_encryption_configuration');
  }
  public set enableMinimumEncryptionConfiguration(value: boolean | cdktf.IResolvable) {
    this._enableMinimumEncryptionConfiguration = value;
  }
  public resetEnableMinimumEncryptionConfiguration() {
    this._enableMinimumEncryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMinimumEncryptionConfigurationInput() {
    return this._enableMinimumEncryptionConfiguration;
  }

  // enforce_workgroup_configuration - computed: false, optional: true, required: false
  private _enforceWorkgroupConfiguration?: boolean | cdktf.IResolvable; 
  public get enforceWorkgroupConfiguration() {
    return this.getBooleanAttribute('enforce_workgroup_configuration');
  }
  public set enforceWorkgroupConfiguration(value: boolean | cdktf.IResolvable) {
    this._enforceWorkgroupConfiguration = value;
  }
  public resetEnforceWorkgroupConfiguration() {
    this._enforceWorkgroupConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceWorkgroupConfigurationInput() {
    return this._enforceWorkgroupConfiguration;
  }

  // execution_role - computed: false, optional: true, required: false
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  public resetExecutionRole() {
    this._executionRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // publish_cloudwatch_metrics_enabled - computed: false, optional: true, required: false
  private _publishCloudwatchMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get publishCloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('publish_cloudwatch_metrics_enabled');
  }
  public set publishCloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._publishCloudwatchMetricsEnabled = value;
  }
  public resetPublishCloudwatchMetricsEnabled() {
    this._publishCloudwatchMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishCloudwatchMetricsEnabledInput() {
    return this._publishCloudwatchMetricsEnabled;
  }

  // requester_pays_enabled - computed: false, optional: true, required: false
  private _requesterPaysEnabled?: boolean | cdktf.IResolvable; 
  public get requesterPaysEnabled() {
    return this.getBooleanAttribute('requester_pays_enabled');
  }
  public set requesterPaysEnabled(value: boolean | cdktf.IResolvable) {
    this._requesterPaysEnabled = value;
  }
  public resetRequesterPaysEnabled() {
    this._requesterPaysEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterPaysEnabledInput() {
    return this._requesterPaysEnabled;
  }

  // customer_content_encryption_configuration - computed: false, optional: true, required: false
  private _customerContentEncryptionConfiguration = new AthenaWorkgroupConfigurationCustomerContentEncryptionConfigurationOutputReference(this, "customer_content_encryption_configuration");
  public get customerContentEncryptionConfiguration() {
    return this._customerContentEncryptionConfiguration;
  }
  public putCustomerContentEncryptionConfiguration(value: AthenaWorkgroupConfigurationCustomerContentEncryptionConfiguration) {
    this._customerContentEncryptionConfiguration.internalValue = value;
  }
  public resetCustomerContentEncryptionConfiguration() {
    this._customerContentEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContentEncryptionConfigurationInput() {
    return this._customerContentEncryptionConfiguration.internalValue;
  }

  // engine_version - computed: false, optional: true, required: false
  private _engineVersion = new AthenaWorkgroupConfigurationEngineVersionOutputReference(this, "engine_version");
  public get engineVersion() {
    return this._engineVersion;
  }
  public putEngineVersion(value: AthenaWorkgroupConfigurationEngineVersion) {
    this._engineVersion.internalValue = value;
  }
  public resetEngineVersion() {
    this._engineVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion.internalValue;
  }

  // identity_center_configuration - computed: false, optional: true, required: false
  private _identityCenterConfiguration = new AthenaWorkgroupConfigurationIdentityCenterConfigurationOutputReference(this, "identity_center_configuration");
  public get identityCenterConfiguration() {
    return this._identityCenterConfiguration;
  }
  public putIdentityCenterConfiguration(value: AthenaWorkgroupConfigurationIdentityCenterConfiguration) {
    this._identityCenterConfiguration.internalValue = value;
  }
  public resetIdentityCenterConfiguration() {
    this._identityCenterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterConfigurationInput() {
    return this._identityCenterConfiguration.internalValue;
  }

  // managed_query_results_configuration - computed: false, optional: true, required: false
  private _managedQueryResultsConfiguration = new AthenaWorkgroupConfigurationManagedQueryResultsConfigurationOutputReference(this, "managed_query_results_configuration");
  public get managedQueryResultsConfiguration() {
    return this._managedQueryResultsConfiguration;
  }
  public putManagedQueryResultsConfiguration(value: AthenaWorkgroupConfigurationManagedQueryResultsConfiguration) {
    this._managedQueryResultsConfiguration.internalValue = value;
  }
  public resetManagedQueryResultsConfiguration() {
    this._managedQueryResultsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedQueryResultsConfigurationInput() {
    return this._managedQueryResultsConfiguration.internalValue;
  }

  // monitoring_configuration - computed: false, optional: true, required: false
  private _monitoringConfiguration = new AthenaWorkgroupConfigurationMonitoringConfigurationOutputReference(this, "monitoring_configuration");
  public get monitoringConfiguration() {
    return this._monitoringConfiguration;
  }
  public putMonitoringConfiguration(value: AthenaWorkgroupConfigurationMonitoringConfiguration) {
    this._monitoringConfiguration.internalValue = value;
  }
  public resetMonitoringConfiguration() {
    this._monitoringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigurationInput() {
    return this._monitoringConfiguration.internalValue;
  }

  // result_configuration - computed: false, optional: true, required: false
  private _resultConfiguration = new AthenaWorkgroupConfigurationResultConfigurationOutputReference(this, "result_configuration");
  public get resultConfiguration() {
    return this._resultConfiguration;
  }
  public putResultConfiguration(value: AthenaWorkgroupConfigurationResultConfiguration) {
    this._resultConfiguration.internalValue = value;
  }
  public resetResultConfiguration() {
    this._resultConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultConfigurationInput() {
    return this._resultConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup aws_athena_workgroup}
*/
export class AthenaWorkgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_athena_workgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AthenaWorkgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AthenaWorkgroup to import
  * @param importFromId The id of the existing AthenaWorkgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AthenaWorkgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_athena_workgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup aws_athena_workgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AthenaWorkgroupConfig
  */
  public constructor(scope: Construct, id: string, config: AthenaWorkgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_athena_workgroup',
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
    this._description = config.description;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._state = config.state;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._configuration.internalValue = config.configuration;
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

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new AthenaWorkgroupConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: AthenaWorkgroupConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      configuration: athenaWorkgroupConfigurationToTerraform(this._configuration.internalValue),
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
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
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
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      configuration: {
        value: athenaWorkgroupConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AthenaWorkgroupConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
