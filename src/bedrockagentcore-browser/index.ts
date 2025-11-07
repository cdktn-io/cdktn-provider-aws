/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BedrockagentcoreBrowserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#description BedrockagentcoreBrowser#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#execution_role_arn BedrockagentcoreBrowser#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#name BedrockagentcoreBrowser#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#region BedrockagentcoreBrowser#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#tags BedrockagentcoreBrowser#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#network_configuration BedrockagentcoreBrowser#network_configuration}
  */
  readonly networkConfiguration?: BedrockagentcoreBrowserNetworkConfiguration[] | cdktf.IResolvable;
  /**
  * recording block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#recording BedrockagentcoreBrowser#recording}
  */
  readonly recording?: BedrockagentcoreBrowserRecording[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#timeouts BedrockagentcoreBrowser#timeouts}
  */
  readonly timeouts?: BedrockagentcoreBrowserTimeouts;
}
export interface BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#security_groups BedrockagentcoreBrowser#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#subnets BedrockagentcoreBrowser#subnets}
  */
  readonly subnets: string[];
}

export function bedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigToTerraform(struct?: BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function bedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigToHclTerraform(struct?: BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference {
    return new BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreBrowserNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#network_mode BedrockagentcoreBrowser#network_mode}
  */
  readonly networkMode: string;
  /**
  * network_mode_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#network_mode_config BedrockagentcoreBrowser#network_mode_config}
  */
  readonly networkModeConfig?: BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfig[] | cdktf.IResolvable;
}

export function bedrockagentcoreBrowserNetworkConfigurationToTerraform(struct?: BedrockagentcoreBrowserNetworkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_mode: cdktf.stringToTerraform(struct!.networkMode),
    network_mode_config: cdktf.listMapper(bedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigToTerraform, true)(struct!.networkModeConfig),
  }
}


export function bedrockagentcoreBrowserNetworkConfigurationToHclTerraform(struct?: BedrockagentcoreBrowserNetworkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_mode_config: {
      value: cdktf.listMapperHcl(bedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigToHclTerraform, true)(struct!.networkModeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreBrowserNetworkConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentcoreBrowserNetworkConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMode = this._networkMode;
    }
    if (this._networkModeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkModeConfig = this._networkModeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreBrowserNetworkConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkMode = undefined;
      this._networkModeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkMode = value.networkMode;
      this._networkModeConfig.internalValue = value.networkModeConfig;
    }
  }

  // network_mode - computed: false, optional: false, required: true
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // network_mode_config - computed: false, optional: true, required: false
  private _networkModeConfig = new BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList(this, "network_mode_config", false);
  public get networkModeConfig() {
    return this._networkModeConfig;
  }
  public putNetworkModeConfig(value: BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfig[] | cdktf.IResolvable) {
    this._networkModeConfig.internalValue = value;
  }
  public resetNetworkModeConfig() {
    this._networkModeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeConfigInput() {
    return this._networkModeConfig.internalValue;
  }
}

export class BedrockagentcoreBrowserNetworkConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreBrowserNetworkConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentcoreBrowserNetworkConfigurationOutputReference {
    return new BedrockagentcoreBrowserNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreBrowserRecordingS3Location {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#bucket BedrockagentcoreBrowser#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#prefix BedrockagentcoreBrowser#prefix}
  */
  readonly prefix: string;
}

export function bedrockagentcoreBrowserRecordingS3LocationToTerraform(struct?: BedrockagentcoreBrowserRecordingS3Location | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function bedrockagentcoreBrowserRecordingS3LocationToHclTerraform(struct?: BedrockagentcoreBrowserRecordingS3Location | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreBrowserRecordingS3LocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentcoreBrowserRecordingS3Location | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreBrowserRecordingS3Location | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._prefix = value.prefix;
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

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class BedrockagentcoreBrowserRecordingS3LocationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreBrowserRecordingS3Location[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentcoreBrowserRecordingS3LocationOutputReference {
    return new BedrockagentcoreBrowserRecordingS3LocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreBrowserRecording {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#enabled BedrockagentcoreBrowser#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * s3_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#s3_location BedrockagentcoreBrowser#s3_location}
  */
  readonly s3Location?: BedrockagentcoreBrowserRecordingS3Location[] | cdktf.IResolvable;
}

export function bedrockagentcoreBrowserRecordingToTerraform(struct?: BedrockagentcoreBrowserRecording | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    s3_location: cdktf.listMapper(bedrockagentcoreBrowserRecordingS3LocationToTerraform, true)(struct!.s3Location),
  }
}


export function bedrockagentcoreBrowserRecordingToHclTerraform(struct?: BedrockagentcoreBrowserRecording | cdktf.IResolvable): any {
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
    s3_location: {
      value: cdktf.listMapperHcl(bedrockagentcoreBrowserRecordingS3LocationToHclTerraform, true)(struct!.s3Location),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreBrowserRecordingS3LocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreBrowserRecordingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentcoreBrowserRecording | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._s3Location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Location = this._s3Location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreBrowserRecording | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._s3Location.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._s3Location.internalValue = value.s3Location;
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

  // s3_location - computed: false, optional: true, required: false
  private _s3Location = new BedrockagentcoreBrowserRecordingS3LocationList(this, "s3_location", false);
  public get s3Location() {
    return this._s3Location;
  }
  public putS3Location(value: BedrockagentcoreBrowserRecordingS3Location[] | cdktf.IResolvable) {
    this._s3Location.internalValue = value;
  }
  public resetS3Location() {
    this._s3Location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LocationInput() {
    return this._s3Location.internalValue;
  }
}

export class BedrockagentcoreBrowserRecordingList extends cdktf.ComplexList {
  public internalValue? : BedrockagentcoreBrowserRecording[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentcoreBrowserRecordingOutputReference {
    return new BedrockagentcoreBrowserRecordingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreBrowserTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#create BedrockagentcoreBrowser#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#delete BedrockagentcoreBrowser#delete}
  */
  readonly delete?: string;
}

export function bedrockagentcoreBrowserTimeoutsToTerraform(struct?: BedrockagentcoreBrowserTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function bedrockagentcoreBrowserTimeoutsToHclTerraform(struct?: BedrockagentcoreBrowserTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreBrowserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreBrowserTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreBrowserTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser aws_bedrockagentcore_browser}
*/
export class BedrockagentcoreBrowser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_browser";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BedrockagentcoreBrowser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreBrowser to import
  * @param importFromId The id of the existing BedrockagentcoreBrowser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreBrowser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_browser", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_browser aws_bedrockagentcore_browser} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreBrowserConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreBrowserConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagentcore_browser',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.20.0',
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
    this._executionRoleArn = config.executionRoleArn;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._recording.internalValue = config.recording;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // browser_arn - computed: true, optional: false, required: false
  public get browserArn() {
    return this.getStringAttribute('browser_arn');
  }

  // browser_id - computed: true, optional: false, required: false
  public get browserId() {
    return this.getStringAttribute('browser_id');
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

  // execution_role_arn - computed: false, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
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

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new BedrockagentcoreBrowserNetworkConfigurationList(this, "network_configuration", false);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: BedrockagentcoreBrowserNetworkConfiguration[] | cdktf.IResolvable) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // recording - computed: false, optional: true, required: false
  private _recording = new BedrockagentcoreBrowserRecordingList(this, "recording", false);
  public get recording() {
    return this._recording;
  }
  public putRecording(value: BedrockagentcoreBrowserRecording[] | cdktf.IResolvable) {
    this._recording.internalValue = value;
  }
  public resetRecording() {
    this._recording.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingInput() {
    return this._recording.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockagentcoreBrowserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockagentcoreBrowserTimeouts) {
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
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      network_configuration: cdktf.listMapper(bedrockagentcoreBrowserNetworkConfigurationToTerraform, true)(this._networkConfiguration.internalValue),
      recording: cdktf.listMapper(bedrockagentcoreBrowserRecordingToTerraform, true)(this._recording.internalValue),
      timeouts: bedrockagentcoreBrowserTimeoutsToTerraform(this._timeouts.internalValue),
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
      execution_role_arn: {
        value: cdktf.stringToHclTerraform(this._executionRoleArn),
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
      network_configuration: {
        value: cdktf.listMapperHcl(bedrockagentcoreBrowserNetworkConfigurationToHclTerraform, true)(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreBrowserNetworkConfigurationList",
      },
      recording: {
        value: cdktf.listMapperHcl(bedrockagentcoreBrowserRecordingToHclTerraform, true)(this._recording.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreBrowserRecordingList",
      },
      timeouts: {
        value: bedrockagentcoreBrowserTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreBrowserTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
