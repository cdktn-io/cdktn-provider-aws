/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralAwsSsmParameterConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#arn EphemeralAwsSsmParameter#arn}
  */
  readonly arn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#region EphemeralAwsSsmParameter#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#with_decryption EphemeralAwsSsmParameter#with_decryption}
  */
  readonly withDecryption?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter aws_ssm_parameter}
*/
export class EphemeralAwsSsmParameter extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssm_parameter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter aws_ssm_parameter} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralAwsSsmParameterConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralAwsSsmParameterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_parameter',
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
    this._arn = config.arn;
    this._region = config.region;
    this._withDecryption = config.withDecryption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // with_decryption - computed: true, optional: true, required: false
  private _withDecryption?: boolean | cdktn.IResolvable; 
  public get withDecryption() {
    return this.getBooleanAttribute('with_decryption');
  }
  public set withDecryption(value: boolean | cdktn.IResolvable) {
    this._withDecryption = value;
  }
  public resetWithDecryption() {
    this._withDecryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withDecryptionInput() {
    return this._withDecryption;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktn.stringToTerraform(this._arn),
      region: cdktn.stringToTerraform(this._region),
      with_decryption: cdktn.booleanToTerraform(this._withDecryption),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arn: {
        value: cdktn.stringToHclTerraform(this._arn),
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
      with_decryption: {
        value: cdktn.booleanToHclTerraform(this._withDecryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
