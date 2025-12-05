/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/transfer_web_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransferWebAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/transfer_web_app#access_endpoint TransferWebApp#access_endpoint}
  */
  readonly accessEndpoint?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/transfer_web_app#region TransferWebApp#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/transfer_web_app#tags TransferWebApp#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/transfer_web_app#web_app_endpoint_policy TransferWebApp#web_app_endpoint_policy}
  */
  readonly webAppEndpointPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/transfer_web_app#web_app_units TransferWebApp#web_app_units}
  */
  readonly webAppUnits?: TransferWebAppWebAppUnits[] | cdktf.IResolvable;
  /**
  * identity_provider_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/transfer_web_app#identity_provider_details TransferWebApp#identity_provider_details}
  */
  readonly identityProviderDetails?: TransferWebAppIdentityProviderDetails[] | cdktf.IResolvable;
}
export interface TransferWebAppWebAppUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/transfer_web_app#provisioned TransferWebApp#provisioned}
  */
  readonly provisioned?: number;
}

export function transferWebAppWebAppUnitsToTerraform(struct?: TransferWebAppWebAppUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provisioned: cdktf.numberToTerraform(struct!.provisioned),
  }
}


export function transferWebAppWebAppUnitsToHclTerraform(struct?: TransferWebAppWebAppUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provisioned: {
      value: cdktf.numberToHclTerraform(struct!.provisioned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWebAppWebAppUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransferWebAppWebAppUnits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provisioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioned = this._provisioned;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWebAppWebAppUnits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provisioned = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provisioned = value.provisioned;
    }
  }

  // provisioned - computed: true, optional: true, required: false
  private _provisioned?: number; 
  public get provisioned() {
    return this.getNumberAttribute('provisioned');
  }
  public set provisioned(value: number) {
    this._provisioned = value;
  }
  public resetProvisioned() {
    this._provisioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedInput() {
    return this._provisioned;
  }
}

export class TransferWebAppWebAppUnitsList extends cdktf.ComplexList {
  public internalValue? : TransferWebAppWebAppUnits[] | cdktf.IResolvable

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
  public get(index: number): TransferWebAppWebAppUnitsOutputReference {
    return new TransferWebAppWebAppUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransferWebAppIdentityProviderDetailsIdentityCenterConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/transfer_web_app#instance_arn TransferWebApp#instance_arn}
  */
  readonly instanceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/transfer_web_app#role TransferWebApp#role}
  */
  readonly role?: string;
}

export function transferWebAppIdentityProviderDetailsIdentityCenterConfigToTerraform(struct?: TransferWebAppIdentityProviderDetailsIdentityCenterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_arn: cdktf.stringToTerraform(struct!.instanceArn),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function transferWebAppIdentityProviderDetailsIdentityCenterConfigToHclTerraform(struct?: TransferWebAppIdentityProviderDetailsIdentityCenterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_arn: {
      value: cdktf.stringToHclTerraform(struct!.instanceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransferWebAppIdentityProviderDetailsIdentityCenterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceArn = this._instanceArn;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWebAppIdentityProviderDetailsIdentityCenterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceArn = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceArn = value.instanceArn;
      this._role = value.role;
    }
  }

  // application_arn - computed: true, optional: false, required: false
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }

  // instance_arn - computed: false, optional: true, required: false
  private _instanceArn?: string; 
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  public resetInstanceArn() {
    this._instanceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class TransferWebAppIdentityProviderDetailsIdentityCenterConfigList extends cdktf.ComplexList {
  public internalValue? : TransferWebAppIdentityProviderDetailsIdentityCenterConfig[] | cdktf.IResolvable

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
  public get(index: number): TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference {
    return new TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransferWebAppIdentityProviderDetails {
  /**
  * identity_center_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/transfer_web_app#identity_center_config TransferWebApp#identity_center_config}
  */
  readonly identityCenterConfig?: TransferWebAppIdentityProviderDetailsIdentityCenterConfig[] | cdktf.IResolvable;
}

export function transferWebAppIdentityProviderDetailsToTerraform(struct?: TransferWebAppIdentityProviderDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_center_config: cdktf.listMapper(transferWebAppIdentityProviderDetailsIdentityCenterConfigToTerraform, true)(struct!.identityCenterConfig),
  }
}


export function transferWebAppIdentityProviderDetailsToHclTerraform(struct?: TransferWebAppIdentityProviderDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_center_config: {
      value: cdktf.listMapperHcl(transferWebAppIdentityProviderDetailsIdentityCenterConfigToHclTerraform, true)(struct!.identityCenterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TransferWebAppIdentityProviderDetailsIdentityCenterConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWebAppIdentityProviderDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransferWebAppIdentityProviderDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityCenterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCenterConfig = this._identityCenterConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWebAppIdentityProviderDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityCenterConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityCenterConfig.internalValue = value.identityCenterConfig;
    }
  }

  // identity_center_config - computed: false, optional: true, required: false
  private _identityCenterConfig = new TransferWebAppIdentityProviderDetailsIdentityCenterConfigList(this, "identity_center_config", false);
  public get identityCenterConfig() {
    return this._identityCenterConfig;
  }
  public putIdentityCenterConfig(value: TransferWebAppIdentityProviderDetailsIdentityCenterConfig[] | cdktf.IResolvable) {
    this._identityCenterConfig.internalValue = value;
  }
  public resetIdentityCenterConfig() {
    this._identityCenterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterConfigInput() {
    return this._identityCenterConfig.internalValue;
  }
}

export class TransferWebAppIdentityProviderDetailsList extends cdktf.ComplexList {
  public internalValue? : TransferWebAppIdentityProviderDetails[] | cdktf.IResolvable

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
  public get(index: number): TransferWebAppIdentityProviderDetailsOutputReference {
    return new TransferWebAppIdentityProviderDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/transfer_web_app aws_transfer_web_app}
*/
export class TransferWebApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_transfer_web_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransferWebApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransferWebApp to import
  * @param importFromId The id of the existing TransferWebApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/transfer_web_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransferWebApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_transfer_web_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/transfer_web_app aws_transfer_web_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransferWebAppConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TransferWebAppConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_transfer_web_app',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.25.0',
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
    this._accessEndpoint = config.accessEndpoint;
    this._region = config.region;
    this._tags = config.tags;
    this._webAppEndpointPolicy = config.webAppEndpointPolicy;
    this._webAppUnits.internalValue = config.webAppUnits;
    this._identityProviderDetails.internalValue = config.identityProviderDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_endpoint - computed: true, optional: true, required: false
  private _accessEndpoint?: string; 
  public get accessEndpoint() {
    return this.getStringAttribute('access_endpoint');
  }
  public set accessEndpoint(value: string) {
    this._accessEndpoint = value;
  }
  public resetAccessEndpoint() {
    this._accessEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessEndpointInput() {
    return this._accessEndpoint;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // web_app_endpoint_policy - computed: true, optional: true, required: false
  private _webAppEndpointPolicy?: string; 
  public get webAppEndpointPolicy() {
    return this.getStringAttribute('web_app_endpoint_policy');
  }
  public set webAppEndpointPolicy(value: string) {
    this._webAppEndpointPolicy = value;
  }
  public resetWebAppEndpointPolicy() {
    this._webAppEndpointPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAppEndpointPolicyInput() {
    return this._webAppEndpointPolicy;
  }

  // web_app_id - computed: true, optional: false, required: false
  public get webAppId() {
    return this.getStringAttribute('web_app_id');
  }

  // web_app_units - computed: true, optional: true, required: false
  private _webAppUnits = new TransferWebAppWebAppUnitsList(this, "web_app_units", false);
  public get webAppUnits() {
    return this._webAppUnits;
  }
  public putWebAppUnits(value: TransferWebAppWebAppUnits[] | cdktf.IResolvable) {
    this._webAppUnits.internalValue = value;
  }
  public resetWebAppUnits() {
    this._webAppUnits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAppUnitsInput() {
    return this._webAppUnits.internalValue;
  }

  // identity_provider_details - computed: false, optional: true, required: false
  private _identityProviderDetails = new TransferWebAppIdentityProviderDetailsList(this, "identity_provider_details", false);
  public get identityProviderDetails() {
    return this._identityProviderDetails;
  }
  public putIdentityProviderDetails(value: TransferWebAppIdentityProviderDetails[] | cdktf.IResolvable) {
    this._identityProviderDetails.internalValue = value;
  }
  public resetIdentityProviderDetails() {
    this._identityProviderDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderDetailsInput() {
    return this._identityProviderDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_endpoint: cdktf.stringToTerraform(this._accessEndpoint),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      web_app_endpoint_policy: cdktf.stringToTerraform(this._webAppEndpointPolicy),
      web_app_units: cdktf.listMapper(transferWebAppWebAppUnitsToTerraform, false)(this._webAppUnits.internalValue),
      identity_provider_details: cdktf.listMapper(transferWebAppIdentityProviderDetailsToTerraform, true)(this._identityProviderDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_endpoint: {
        value: cdktf.stringToHclTerraform(this._accessEndpoint),
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
      web_app_endpoint_policy: {
        value: cdktf.stringToHclTerraform(this._webAppEndpointPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_app_units: {
        value: cdktf.listMapperHcl(transferWebAppWebAppUnitsToHclTerraform, false)(this._webAppUnits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransferWebAppWebAppUnitsList",
      },
      identity_provider_details: {
        value: cdktf.listMapperHcl(transferWebAppIdentityProviderDetailsToHclTerraform, true)(this._identityProviderDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransferWebAppIdentityProviderDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
