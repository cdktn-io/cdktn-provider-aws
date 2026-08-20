/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/notifications_managed_notification_account_contact_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NotificationsManagedNotificationAccountContactAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/notifications_managed_notification_account_contact_association#contact_identifier NotificationsManagedNotificationAccountContactAssociation#contact_identifier}
  */
  readonly contactIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/notifications_managed_notification_account_contact_association#managed_notification_configuration_arn NotificationsManagedNotificationAccountContactAssociation#managed_notification_configuration_arn}
  */
  readonly managedNotificationConfigurationArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/notifications_managed_notification_account_contact_association aws_notifications_managed_notification_account_contact_association}
*/
export class NotificationsManagedNotificationAccountContactAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_notifications_managed_notification_account_contact_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NotificationsManagedNotificationAccountContactAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationsManagedNotificationAccountContactAssociation to import
  * @param importFromId The id of the existing NotificationsManagedNotificationAccountContactAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/notifications_managed_notification_account_contact_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationsManagedNotificationAccountContactAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_notifications_managed_notification_account_contact_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/notifications_managed_notification_account_contact_association aws_notifications_managed_notification_account_contact_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationsManagedNotificationAccountContactAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationsManagedNotificationAccountContactAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_notifications_managed_notification_account_contact_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.61.0',
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
    this._contactIdentifier = config.contactIdentifier;
    this._managedNotificationConfigurationArn = config.managedNotificationConfigurationArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_identifier - computed: false, optional: false, required: true
  private _contactIdentifier?: string; 
  public get contactIdentifier() {
    return this.getStringAttribute('contact_identifier');
  }
  public set contactIdentifier(value: string) {
    this._contactIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdentifierInput() {
    return this._contactIdentifier;
  }

  // managed_notification_configuration_arn - computed: false, optional: false, required: true
  private _managedNotificationConfigurationArn?: string; 
  public get managedNotificationConfigurationArn() {
    return this.getStringAttribute('managed_notification_configuration_arn');
  }
  public set managedNotificationConfigurationArn(value: string) {
    this._managedNotificationConfigurationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedNotificationConfigurationArnInput() {
    return this._managedNotificationConfigurationArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_identifier: cdktn.stringToTerraform(this._contactIdentifier),
      managed_notification_configuration_arn: cdktn.stringToTerraform(this._managedNotificationConfigurationArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_identifier: {
        value: cdktn.stringToHclTerraform(this._contactIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_notification_configuration_arn: {
        value: cdktn.stringToHclTerraform(this._managedNotificationConfigurationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
