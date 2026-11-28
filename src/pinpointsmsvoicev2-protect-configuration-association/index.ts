/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_protect_configuration_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Pinpointsmsvoicev2ProtectConfigurationAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_protect_configuration_association#configuration_set_name Pinpointsmsvoicev2ProtectConfigurationAssociation#configuration_set_name}
  */
  readonly configurationSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_protect_configuration_association#protect_configuration_id Pinpointsmsvoicev2ProtectConfigurationAssociation#protect_configuration_id}
  */
  readonly protectConfigurationId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_protect_configuration_association#region Pinpointsmsvoicev2ProtectConfigurationAssociation#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_protect_configuration_association aws_pinpointsmsvoicev2_protect_configuration_association}
*/
export class Pinpointsmsvoicev2ProtectConfigurationAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_pinpointsmsvoicev2_protect_configuration_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Pinpointsmsvoicev2ProtectConfigurationAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pinpointsmsvoicev2ProtectConfigurationAssociation to import
  * @param importFromId The id of the existing Pinpointsmsvoicev2ProtectConfigurationAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_protect_configuration_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pinpointsmsvoicev2ProtectConfigurationAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_pinpointsmsvoicev2_protect_configuration_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/pinpointsmsvoicev2_protect_configuration_association aws_pinpointsmsvoicev2_protect_configuration_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Pinpointsmsvoicev2ProtectConfigurationAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: Pinpointsmsvoicev2ProtectConfigurationAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpointsmsvoicev2_protect_configuration_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.74.0',
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
    this._configurationSetName = config.configurationSetName;
    this._protectConfigurationId = config.protectConfigurationId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_set_name - computed: false, optional: false, required: true
  private _configurationSetName?: string; 
  public get configurationSetName() {
    return this.getStringAttribute('configuration_set_name');
  }
  public set configurationSetName(value: string) {
    this._configurationSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSetNameInput() {
    return this._configurationSetName;
  }

  // protect_configuration_id - computed: false, optional: false, required: true
  private _protectConfigurationId?: string; 
  public get protectConfigurationId() {
    return this.getStringAttribute('protect_configuration_id');
  }
  public set protectConfigurationId(value: string) {
    this._protectConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectConfigurationIdInput() {
    return this._protectConfigurationId;
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
      configuration_set_name: cdktn.stringToTerraform(this._configurationSetName),
      protect_configuration_id: cdktn.stringToTerraform(this._protectConfigurationId),
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_set_name: {
        value: cdktn.stringToHclTerraform(this._configurationSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protect_configuration_id: {
        value: cdktn.stringToHclTerraform(this._protectConfigurationId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
