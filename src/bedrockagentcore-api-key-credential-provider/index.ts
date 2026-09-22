/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrockagentcore_api_key_credential_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentcoreApiKeyCredentialProviderConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key BedrockagentcoreApiKeyCredentialProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_secret_source BedrockagentcoreApiKeyCredentialProvider#api_key_secret_source}
  */
  readonly apiKeySecretSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_wo BedrockagentcoreApiKeyCredentialProvider#api_key_wo}
  */
  readonly apiKeyWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_wo_version BedrockagentcoreApiKeyCredentialProvider#api_key_wo_version}
  */
  readonly apiKeyWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrockagentcore_api_key_credential_provider#name BedrockagentcoreApiKeyCredentialProvider#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrockagentcore_api_key_credential_provider#region BedrockagentcoreApiKeyCredentialProvider#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrockagentcore_api_key_credential_provider#tags BedrockagentcoreApiKeyCredentialProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * api_key_secret_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_secret_config BedrockagentcoreApiKeyCredentialProvider#api_key_secret_config}
  */
  readonly apiKeySecretConfig?: BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig[] | cdktn.IResolvable;
}
export interface BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn {
}

export function bedrockagentcoreApiKeyCredentialProviderApiKeySecretArnToTerraform(struct?: BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreApiKeyCredentialProviderApiKeySecretArnToHclTerraform(struct?: BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}

export class BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference {
    return new BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrockagentcore_api_key_credential_provider#json_key BedrockagentcoreApiKeyCredentialProvider#json_key}
  */
  readonly jsonKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrockagentcore_api_key_credential_provider#secret_id BedrockagentcoreApiKeyCredentialProvider#secret_id}
  */
  readonly secretId: string;
}

export function bedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigToTerraform(struct?: BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_key: cdktn.stringToTerraform(struct!.jsonKey),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
  }
}


export function bedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigToHclTerraform(struct?: BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_key: {
      value: cdktn.stringToHclTerraform(struct!.jsonKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKey = this._jsonKey;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonKey = undefined;
      this._secretId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonKey = value.jsonKey;
      this._secretId = value.secretId;
    }
  }

  // json_key - computed: false, optional: false, required: true
  private _jsonKey?: string; 
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }
  public set jsonKey(value: string) {
    this._jsonKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeyInput() {
    return this._jsonKey;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }
}

export class BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference {
    return new BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrockagentcore_api_key_credential_provider aws_bedrockagentcore_api_key_credential_provider}
*/
export class BedrockagentcoreApiKeyCredentialProvider extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_api_key_credential_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentcoreApiKeyCredentialProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreApiKeyCredentialProvider to import
  * @param importFromId The id of the existing BedrockagentcoreApiKeyCredentialProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrockagentcore_api_key_credential_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreApiKeyCredentialProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_api_key_credential_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/bedrockagentcore_api_key_credential_provider aws_bedrockagentcore_api_key_credential_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreApiKeyCredentialProviderConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreApiKeyCredentialProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagentcore_api_key_credential_provider',
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
    this._apiKey = config.apiKey;
    this._apiKeySecretSource = config.apiKeySecretSource;
    this._apiKeyWo = config.apiKeyWo;
    this._apiKeyWoVersion = config.apiKeyWoVersion;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._apiKeySecretConfig.internalValue = config.apiKeySecretConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_secret_arn - computed: true, optional: false, required: false
  private _apiKeySecretArn = new BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList(this, "api_key_secret_arn", false);
  public get apiKeySecretArn() {
    return this._apiKeySecretArn;
  }

  // api_key_secret_source - computed: true, optional: true, required: false
  private _apiKeySecretSource?: string; 
  public get apiKeySecretSource() {
    return this.getStringAttribute('api_key_secret_source');
  }
  public set apiKeySecretSource(value: string) {
    this._apiKeySecretSource = value;
  }
  public resetApiKeySecretSource() {
    this._apiKeySecretSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySecretSourceInput() {
    return this._apiKeySecretSource;
  }

  // api_key_wo - computed: false, optional: true, required: false
  private _apiKeyWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get apiKeyWo() {
    return this.getStringAttribute('api_key_wo');
  }
  public set apiKeyWo(value: string) {
    this._apiKeyWo = value;
  }
  public resetApiKeyWo() {
    this._apiKeyWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyWoInput() {
    return this._apiKeyWo;
  }

  // api_key_wo_version - computed: false, optional: true, required: false
  private _apiKeyWoVersion?: number; 
  public get apiKeyWoVersion() {
    return this.getNumberAttribute('api_key_wo_version');
  }
  public set apiKeyWoVersion(value: number) {
    this._apiKeyWoVersion = value;
  }
  public resetApiKeyWoVersion() {
    this._apiKeyWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyWoVersionInput() {
    return this._apiKeyWoVersion;
  }

  // credential_provider_arn - computed: true, optional: false, required: false
  public get credentialProviderArn() {
    return this.getStringAttribute('credential_provider_arn');
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
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // api_key_secret_config - computed: false, optional: true, required: false
  private _apiKeySecretConfig = new BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigList(this, "api_key_secret_config", false);
  public get apiKeySecretConfig() {
    return this._apiKeySecretConfig;
  }
  public putApiKeySecretConfig(value: BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig[] | cdktn.IResolvable) {
    this._apiKeySecretConfig.internalValue = value;
  }
  public resetApiKeySecretConfig() {
    this._apiKeySecretConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySecretConfigInput() {
    return this._apiKeySecretConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktn.stringToTerraform(this._apiKey),
      api_key_secret_source: cdktn.stringToTerraform(this._apiKeySecretSource),
      api_key_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._apiKeyWo)),
      api_key_wo_version: cdktn.numberToTerraform(this._apiKeyWoVersion),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      api_key_secret_config: cdktn.listMapper(bedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigToTerraform, true)(this._apiKeySecretConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktn.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key_secret_source: {
        value: cdktn.stringToHclTerraform(this._apiKeySecretSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._apiKeyWo)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key_wo_version: {
        value: cdktn.numberToHclTerraform(this._apiKeyWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      api_key_secret_config: {
        value: cdktn.listMapperHcl(bedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigToHclTerraform, true)(this._apiKeySecretConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
