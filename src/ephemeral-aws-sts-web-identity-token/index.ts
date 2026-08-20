/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/sts_web_identity_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralAwsStsWebIdentityTokenConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * The intended recipients of the token (populates the `aud` claim in the JWT). Must contain between 1 and 10 items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/sts_web_identity_token#audience EphemeralAwsStsWebIdentityToken#audience}
  */
  readonly audience: string[];
  /**
  * The duration, in seconds, for which the JWT will remain valid. Value can range from 60 to 3600 seconds. Default is 300 seconds (5 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/sts_web_identity_token#duration_seconds EphemeralAwsStsWebIdentityToken#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * The cryptographic algorithm to use for signing the JWT. Valid values are `RS256` (RSA with SHA-256) and `ES384` (ECDSA using P-384 curve with SHA-384).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/sts_web_identity_token#signing_algorithm EphemeralAwsStsWebIdentityToken#signing_algorithm}
  */
  readonly signingAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/sts_web_identity_token#tags EphemeralAwsStsWebIdentityToken#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/sts_web_identity_token aws_sts_web_identity_token}
*/
export class EphemeralAwsStsWebIdentityToken extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sts_web_identity_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/sts_web_identity_token aws_sts_web_identity_token} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralAwsStsWebIdentityTokenConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralAwsStsWebIdentityTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sts_web_identity_token',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.61.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      forEach: config.forEach
    });
    this._audience = config.audience;
    this._durationSeconds = config.durationSeconds;
    this._signingAlgorithm = config.signingAlgorithm;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audience - computed: false, optional: false, required: true
  private _audience?: string[]; 
  public get audience() {
    return cdktn.Fn.tolist(this.getListAttribute('audience'));
  }
  public set audience(value: string[]) {
    this._audience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // duration_seconds - computed: false, optional: true, required: false
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // signing_algorithm - computed: false, optional: false, required: true
  private _signingAlgorithm?: string; 
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
  }
  public set signingAlgorithm(value: string) {
    this._signingAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAlgorithmInput() {
    return this._signingAlgorithm;
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

  // web_identity_token - computed: true, optional: false, required: false
  public get webIdentityToken() {
    return this.getStringAttribute('web_identity_token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audience: cdktn.listMapper(cdktn.stringToTerraform, false)(this._audience),
      duration_seconds: cdktn.numberToTerraform(this._durationSeconds),
      signing_algorithm: cdktn.stringToTerraform(this._signingAlgorithm),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audience: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._audience),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      duration_seconds: {
        value: cdktn.numberToHclTerraform(this._durationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signing_algorithm: {
        value: cdktn.stringToHclTerraform(this._signingAlgorithm),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
