/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/secretsmanager_secret_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralAwsSecretsmanagerSecretVersionConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/secretsmanager_secret_version#region EphemeralAwsSecretsmanagerSecretVersion#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/secretsmanager_secret_version#secret_id EphemeralAwsSecretsmanagerSecretVersion#secret_id}
  */
  readonly secretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/secretsmanager_secret_version#version_id EphemeralAwsSecretsmanagerSecretVersion#version_id}
  */
  readonly versionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/secretsmanager_secret_version#version_stage EphemeralAwsSecretsmanagerSecretVersion#version_stage}
  */
  readonly versionStage?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/secretsmanager_secret_version aws_secretsmanager_secret_version}
*/
export class EphemeralAwsSecretsmanagerSecretVersion extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_secretsmanager_secret_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/secretsmanager_secret_version aws_secretsmanager_secret_version} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralAwsSecretsmanagerSecretVersionConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralAwsSecretsmanagerSecretVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_secret_version',
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
    this._region = config.region;
    this._secretId = config.secretId;
    this._versionId = config.versionId;
    this._versionStage = config.versionStage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
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

  // secret_binary - computed: true, optional: false, required: false
  public get secretBinary() {
    return this.getStringAttribute('secret_binary');
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

  // secret_string - computed: true, optional: false, required: false
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }

  // version_id - computed: true, optional: true, required: false
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

  // version_stage - computed: true, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }

  // version_stages - computed: true, optional: false, required: false
  public get versionStages() {
    return this.getListAttribute('version_stages');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      secret_id: cdktn.stringToTerraform(this._secretId),
      version_id: cdktn.stringToTerraform(this._versionId),
      version_stage: cdktn.stringToTerraform(this._versionStage),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_id: {
        value: cdktn.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_id: {
        value: cdktn.stringToHclTerraform(this._versionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_stage: {
        value: cdktn.stringToHclTerraform(this._versionStage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
