/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizational_unit_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationsOrganizationalUnitAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizational_unit_association#notification_configuration_arn NotificationsOrganizationalUnitAssociation#notification_configuration_arn}
  */
  readonly notificationConfigurationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizational_unit_association#organizational_unit_id NotificationsOrganizationalUnitAssociation#organizational_unit_id}
  */
  readonly organizationalUnitId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizational_unit_association aws_notifications_organizational_unit_association}
*/
export class NotificationsOrganizationalUnitAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_notifications_organizational_unit_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationsOrganizationalUnitAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationsOrganizationalUnitAssociation to import
  * @param importFromId The id of the existing NotificationsOrganizationalUnitAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizational_unit_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationsOrganizationalUnitAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_notifications_organizational_unit_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_organizational_unit_association aws_notifications_organizational_unit_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationsOrganizationalUnitAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationsOrganizationalUnitAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_notifications_organizational_unit_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.31.0',
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
    this._notificationConfigurationArn = config.notificationConfigurationArn;
    this._organizationalUnitId = config.organizationalUnitId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // notification_configuration_arn - computed: false, optional: false, required: true
  private _notificationConfigurationArn?: string; 
  public get notificationConfigurationArn() {
    return this.getStringAttribute('notification_configuration_arn');
  }
  public set notificationConfigurationArn(value: string) {
    this._notificationConfigurationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigurationArnInput() {
    return this._notificationConfigurationArn;
  }

  // organizational_unit_id - computed: false, optional: false, required: true
  private _organizationalUnitId?: string; 
  public get organizationalUnitId() {
    return this.getStringAttribute('organizational_unit_id');
  }
  public set organizationalUnitId(value: string) {
    this._organizationalUnitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitIdInput() {
    return this._organizationalUnitId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      notification_configuration_arn: cdktf.stringToTerraform(this._notificationConfigurationArn),
      organizational_unit_id: cdktf.stringToTerraform(this._organizationalUnitId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      notification_configuration_arn: {
        value: cdktf.stringToHclTerraform(this._notificationConfigurationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizational_unit_id: {
        value: cdktf.stringToHclTerraform(this._organizationalUnitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
