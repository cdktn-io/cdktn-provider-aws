/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_id}
  */
  readonly identityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_pool_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_pool_id}
  */
  readonly identityPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#logins EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#logins}
  */
  readonly logins: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#principal_tags EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#principal_tags}
  */
  readonly principalTags?: { [key: string]: string };
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#region EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#token_duration EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#token_duration}
  */
  readonly tokenDuration?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity aws_cognito_identity_openid_token_for_developer_identity}
*/
export class EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_identity_openid_token_for_developer_identity";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity aws_cognito_identity_openid_token_for_developer_identity} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_identity_openid_token_for_developer_identity',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.62.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      forEach: config.forEach
    });
    this._identityId = config.identityId;
    this._identityPoolId = config.identityPoolId;
    this._logins = config.logins;
    this._principalTags = config.principalTags;
    this._region = config.region;
    this._tokenDuration = config.tokenDuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // identity_id - computed: true, optional: true, required: false
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  public resetIdentityId() {
    this._identityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // identity_pool_id - computed: false, optional: false, required: true
  private _identityPoolId?: string; 
  public get identityPoolId() {
    return this.getStringAttribute('identity_pool_id');
  }
  public set identityPoolId(value: string) {
    this._identityPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPoolIdInput() {
    return this._identityPoolId;
  }

  // logins - computed: false, optional: false, required: true
  private _logins?: { [key: string]: string }; 
  public get logins() {
    return this.getStringMapAttribute('logins');
  }
  public set logins(value: { [key: string]: string }) {
    this._logins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginsInput() {
    return this._logins;
  }

  // principal_tags - computed: false, optional: true, required: false
  private _principalTags?: { [key: string]: string }; 
  public get principalTags() {
    return this.getStringMapAttribute('principal_tags');
  }
  public set principalTags(value: { [key: string]: string }) {
    this._principalTags = value;
  }
  public resetPrincipalTags() {
    this._principalTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTagsInput() {
    return this._principalTags;
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

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // token_duration - computed: false, optional: true, required: false
  private _tokenDuration?: number; 
  public get tokenDuration() {
    return this.getNumberAttribute('token_duration');
  }
  public set tokenDuration(value: number) {
    this._tokenDuration = value;
  }
  public resetTokenDuration() {
    this._tokenDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenDurationInput() {
    return this._tokenDuration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identity_id: cdktn.stringToTerraform(this._identityId),
      identity_pool_id: cdktn.stringToTerraform(this._identityPoolId),
      logins: cdktn.hashMapper(cdktn.stringToTerraform)(this._logins),
      principal_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._principalTags),
      region: cdktn.stringToTerraform(this._region),
      token_duration: cdktn.numberToTerraform(this._tokenDuration),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      identity_id: {
        value: cdktn.stringToHclTerraform(this._identityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_pool_id: {
        value: cdktn.stringToHclTerraform(this._identityPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logins: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._logins),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      principal_tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._principalTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_duration: {
        value: cdktn.numberToHclTerraform(this._tokenDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
