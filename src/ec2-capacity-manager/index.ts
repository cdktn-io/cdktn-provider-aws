/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/ec2_capacity_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2CapacityManagerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/ec2_capacity_manager#enabled Ec2CapacityManager#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/ec2_capacity_manager#organizations_access Ec2CapacityManager#organizations_access}
  */
  readonly organizationsAccess?: boolean | cdktn.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/ec2_capacity_manager#region Ec2CapacityManager#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/ec2_capacity_manager aws_ec2_capacity_manager}
*/
export class Ec2CapacityManager extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_capacity_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2CapacityManager resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2CapacityManager to import
  * @param importFromId The id of the existing Ec2CapacityManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/ec2_capacity_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2CapacityManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_capacity_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/ec2_capacity_manager aws_ec2_capacity_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2CapacityManagerConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2CapacityManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_capacity_manager',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.73.0',
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
    this._enabled = config.enabled;
    this._organizationsAccess = config.organizationsAccess;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organizations_access - computed: true, optional: true, required: false
  private _organizationsAccess?: boolean | cdktn.IResolvable; 
  public get organizationsAccess() {
    return this.getBooleanAttribute('organizations_access');
  }
  public set organizationsAccess(value: boolean | cdktn.IResolvable) {
    this._organizationsAccess = value;
  }
  public resetOrganizationsAccess() {
    this._organizationsAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationsAccessInput() {
    return this._organizationsAccess;
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
      enabled: cdktn.booleanToTerraform(this._enabled),
      organizations_access: cdktn.booleanToTerraform(this._organizationsAccess),
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      organizations_access: {
        value: cdktn.booleanToHclTerraform(this._organizationsAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
