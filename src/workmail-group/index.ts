/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/workmail_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WorkmailGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Primary email address used to register the group with WorkMail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/workmail_group#email WorkmailGroup#email}
  */
  readonly email: string;
  /**
  * Whether to hide the group from the global address list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/workmail_group#hidden_from_global_address_list WorkmailGroup#hidden_from_global_address_list}
  */
  readonly hiddenFromGlobalAddressList?: boolean | cdktn.IResolvable;
  /**
  * Name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/workmail_group#name WorkmailGroup#name}
  */
  readonly name: string;
  /**
  * Identifier of the WorkMail organization where the group is managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/workmail_group#organization_id WorkmailGroup#organization_id}
  */
  readonly organizationId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/workmail_group#region WorkmailGroup#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/workmail_group aws_workmail_group}
*/
export class WorkmailGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_workmail_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WorkmailGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkmailGroup to import
  * @param importFromId The id of the existing WorkmailGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/workmail_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkmailGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_workmail_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/workmail_group aws_workmail_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkmailGroupConfig
  */
  public constructor(scope: Construct, id: string, config: WorkmailGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_workmail_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.45.0',
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
    this._email = config.email;
    this._hiddenFromGlobalAddressList = config.hiddenFromGlobalAddressList;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled_date - computed: true, optional: false, required: false
  public get disabledDate() {
    return this.getStringAttribute('disabled_date');
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // enabled_date - computed: true, optional: false, required: false
  public get enabledDate() {
    return this.getStringAttribute('enabled_date');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // hidden_from_global_address_list - computed: true, optional: true, required: false
  private _hiddenFromGlobalAddressList?: boolean | cdktn.IResolvable; 
  public get hiddenFromGlobalAddressList() {
    return this.getBooleanAttribute('hidden_from_global_address_list');
  }
  public set hiddenFromGlobalAddressList(value: boolean | cdktn.IResolvable) {
    this._hiddenFromGlobalAddressList = value;
  }
  public resetHiddenFromGlobalAddressList() {
    this._hiddenFromGlobalAddressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenFromGlobalAddressListInput() {
    return this._hiddenFromGlobalAddressList;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktn.stringToTerraform(this._email),
      hidden_from_global_address_list: cdktn.booleanToTerraform(this._hiddenFromGlobalAddressList),
      name: cdktn.stringToTerraform(this._name),
      organization_id: cdktn.stringToTerraform(this._organizationId),
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktn.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hidden_from_global_address_list: {
        value: cdktn.booleanToHclTerraform(this._hiddenFromGlobalAddressList),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktn.stringToHclTerraform(this._organizationId),
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
