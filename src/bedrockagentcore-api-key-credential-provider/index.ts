/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_api_key_credential_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BedrockagentcoreApiKeyCredentialProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key BedrockagentcoreApiKeyCredentialProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_wo BedrockagentcoreApiKeyCredentialProvider#api_key_wo}
  */
  readonly apiKeyWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_wo_version BedrockagentcoreApiKeyCredentialProvider#api_key_wo_version}
  */
  readonly apiKeyWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_api_key_credential_provider#name BedrockagentcoreApiKeyCredentialProvider#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_api_key_credential_provider#region BedrockagentcoreApiKeyCredentialProvider#region}
  */
  readonly region?: string;
}
export interface BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn {
}

export function bedrockagentcoreApiKeyCredentialProviderApiKeySecretArnToTerraform(struct?: BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bedrockagentcoreApiKeyCredentialProviderApiKeySecretArnToHclTerraform(struct?: BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
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

export class BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList extends cdktf.ComplexList {

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
  public get(index: number): BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference {
    return new BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_api_key_credential_provider aws_bedrockagentcore_api_key_credential_provider}
*/
export class BedrockagentcoreApiKeyCredentialProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_api_key_credential_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BedrockagentcoreApiKeyCredentialProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreApiKeyCredentialProvider to import
  * @param importFromId The id of the existing BedrockagentcoreApiKeyCredentialProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_api_key_credential_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreApiKeyCredentialProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_api_key_credential_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_api_key_credential_provider aws_bedrockagentcore_api_key_credential_provider} Resource
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
        providerVersion: '6.23.0',
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
    this._apiKeyWo = config.apiKeyWo;
    this._apiKeyWoVersion = config.apiKeyWoVersion;
    this._name = config.name;
    this._region = config.region;
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

  // api_key_wo - computed: false, optional: true, required: false
  private _apiKeyWo?: string; 
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_key_wo: cdktf.stringToTerraform(this._apiKeyWo),
      api_key_wo_version: cdktf.numberToTerraform(this._apiKeyWoVersion),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key_wo: {
        value: cdktf.stringToHclTerraform(this._apiKeyWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key_wo_version: {
        value: cdktf.numberToHclTerraform(this._apiKeyWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
