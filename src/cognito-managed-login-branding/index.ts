/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/cognito_managed_login_branding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CognitoManagedLoginBrandingConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/cognito_managed_login_branding#client_id CognitoManagedLoginBranding#client_id}
  */
  readonly clientId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/cognito_managed_login_branding#region CognitoManagedLoginBranding#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/cognito_managed_login_branding#settings CognitoManagedLoginBranding#settings}
  */
  readonly settings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/cognito_managed_login_branding#use_cognito_provided_values CognitoManagedLoginBranding#use_cognito_provided_values}
  */
  readonly useCognitoProvidedValues?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/cognito_managed_login_branding#user_pool_id CognitoManagedLoginBranding#user_pool_id}
  */
  readonly userPoolId: string;
  /**
  * asset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/cognito_managed_login_branding#asset CognitoManagedLoginBranding#asset}
  */
  readonly asset?: CognitoManagedLoginBrandingAsset[] | cdktn.IResolvable;
}
export interface CognitoManagedLoginBrandingAsset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/cognito_managed_login_branding#bytes CognitoManagedLoginBranding#bytes}
  */
  readonly bytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/cognito_managed_login_branding#category CognitoManagedLoginBranding#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/cognito_managed_login_branding#color_mode CognitoManagedLoginBranding#color_mode}
  */
  readonly colorMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/cognito_managed_login_branding#extension CognitoManagedLoginBranding#extension}
  */
  readonly extension: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/cognito_managed_login_branding#resource_id CognitoManagedLoginBranding#resource_id}
  */
  readonly resourceId?: string;
}

export function cognitoManagedLoginBrandingAssetToTerraform(struct?: CognitoManagedLoginBrandingAsset | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bytes: cdktn.stringToTerraform(struct!.bytes),
    category: cdktn.stringToTerraform(struct!.category),
    color_mode: cdktn.stringToTerraform(struct!.colorMode),
    extension: cdktn.stringToTerraform(struct!.extension),
    resource_id: cdktn.stringToTerraform(struct!.resourceId),
  }
}


export function cognitoManagedLoginBrandingAssetToHclTerraform(struct?: CognitoManagedLoginBrandingAsset | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bytes: {
      value: cdktn.stringToHclTerraform(struct!.bytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color_mode: {
      value: cdktn.stringToHclTerraform(struct!.colorMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension: {
      value: cdktn.stringToHclTerraform(struct!.extension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktn.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoManagedLoginBrandingAssetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CognitoManagedLoginBrandingAsset | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytes = this._bytes;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._colorMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorMode = this._colorMode;
    }
    if (this._extension !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoManagedLoginBrandingAsset | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bytes = undefined;
      this._category = undefined;
      this._colorMode = undefined;
      this._extension = undefined;
      this._resourceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bytes = value.bytes;
      this._category = value.category;
      this._colorMode = value.colorMode;
      this._extension = value.extension;
      this._resourceId = value.resourceId;
    }
  }

  // bytes - computed: false, optional: true, required: false
  private _bytes?: string; 
  public get bytes() {
    return this.getStringAttribute('bytes');
  }
  public set bytes(value: string) {
    this._bytes = value;
  }
  public resetBytes() {
    this._bytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesInput() {
    return this._bytes;
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // color_mode - computed: false, optional: false, required: true
  private _colorMode?: string; 
  public get colorMode() {
    return this.getStringAttribute('color_mode');
  }
  public set colorMode(value: string) {
    this._colorMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorModeInput() {
    return this._colorMode;
  }

  // extension - computed: false, optional: false, required: true
  private _extension?: string; 
  public get extension() {
    return this.getStringAttribute('extension');
  }
  public set extension(value: string) {
    this._extension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }
}

export class CognitoManagedLoginBrandingAssetList extends cdktn.ComplexList {
  public internalValue? : CognitoManagedLoginBrandingAsset[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CognitoManagedLoginBrandingAssetOutputReference {
    return new CognitoManagedLoginBrandingAssetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/cognito_managed_login_branding aws_cognito_managed_login_branding}
*/
export class CognitoManagedLoginBranding extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_managed_login_branding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CognitoManagedLoginBranding resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CognitoManagedLoginBranding to import
  * @param importFromId The id of the existing CognitoManagedLoginBranding that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/cognito_managed_login_branding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CognitoManagedLoginBranding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cognito_managed_login_branding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.35.0/docs/resources/cognito_managed_login_branding aws_cognito_managed_login_branding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoManagedLoginBrandingConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoManagedLoginBrandingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_managed_login_branding',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.35.0',
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
    this._clientId = config.clientId;
    this._region = config.region;
    this._settings = config.settings;
    this._useCognitoProvidedValues = config.useCognitoProvidedValues;
    this._userPoolId = config.userPoolId;
    this._asset.internalValue = config.asset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // managed_login_branding_id - computed: true, optional: false, required: false
  public get managedLoginBrandingId() {
    return this.getStringAttribute('managed_login_branding_id');
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

  // settings - computed: false, optional: true, required: false
  private _settings?: string; 
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // settings_all - computed: true, optional: false, required: false
  public get settingsAll() {
    return this.getStringAttribute('settings_all');
  }

  // use_cognito_provided_values - computed: true, optional: true, required: false
  private _useCognitoProvidedValues?: boolean | cdktn.IResolvable; 
  public get useCognitoProvidedValues() {
    return this.getBooleanAttribute('use_cognito_provided_values');
  }
  public set useCognitoProvidedValues(value: boolean | cdktn.IResolvable) {
    this._useCognitoProvidedValues = value;
  }
  public resetUseCognitoProvidedValues() {
    this._useCognitoProvidedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCognitoProvidedValuesInput() {
    return this._useCognitoProvidedValues;
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }

  // asset - computed: false, optional: true, required: false
  private _asset = new CognitoManagedLoginBrandingAssetList(this, "asset", true);
  public get asset() {
    return this._asset;
  }
  public putAsset(value: CognitoManagedLoginBrandingAsset[] | cdktn.IResolvable) {
    this._asset.internalValue = value;
  }
  public resetAsset() {
    this._asset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetInput() {
    return this._asset.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktn.stringToTerraform(this._clientId),
      region: cdktn.stringToTerraform(this._region),
      settings: cdktn.stringToTerraform(this._settings),
      use_cognito_provided_values: cdktn.booleanToTerraform(this._useCognitoProvidedValues),
      user_pool_id: cdktn.stringToTerraform(this._userPoolId),
      asset: cdktn.listMapper(cognitoManagedLoginBrandingAssetToTerraform, true)(this._asset.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktn.stringToHclTerraform(this._clientId),
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
      settings: {
        value: cdktn.stringToHclTerraform(this._settings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_cognito_provided_values: {
        value: cdktn.booleanToHclTerraform(this._useCognitoProvidedValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_pool_id: {
        value: cdktn.stringToHclTerraform(this._userPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asset: {
        value: cdktn.listMapperHcl(cognitoManagedLoginBrandingAssetToHclTerraform, true)(this._asset.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CognitoManagedLoginBrandingAssetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
