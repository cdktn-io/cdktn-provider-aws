/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_additional_channel_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationsManagedNotificationAdditionalChannelAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_additional_channel_association#channel_arn NotificationsManagedNotificationAdditionalChannelAssociation#channel_arn}
  */
  readonly channelArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_additional_channel_association#managed_notification_arn NotificationsManagedNotificationAdditionalChannelAssociation#managed_notification_arn}
  */
  readonly managedNotificationArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_additional_channel_association aws_notifications_managed_notification_additional_channel_association}
*/
export class NotificationsManagedNotificationAdditionalChannelAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_notifications_managed_notification_additional_channel_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationsManagedNotificationAdditionalChannelAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationsManagedNotificationAdditionalChannelAssociation to import
  * @param importFromId The id of the existing NotificationsManagedNotificationAdditionalChannelAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_additional_channel_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationsManagedNotificationAdditionalChannelAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_notifications_managed_notification_additional_channel_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_additional_channel_association aws_notifications_managed_notification_additional_channel_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationsManagedNotificationAdditionalChannelAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationsManagedNotificationAdditionalChannelAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_notifications_managed_notification_additional_channel_association',
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
    this._channelArn = config.channelArn;
    this._managedNotificationArn = config.managedNotificationArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_arn - computed: false, optional: false, required: true
  private _channelArn?: string; 
  public get channelArn() {
    return this.getStringAttribute('channel_arn');
  }
  public set channelArn(value: string) {
    this._channelArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelArnInput() {
    return this._channelArn;
  }

  // managed_notification_arn - computed: false, optional: false, required: true
  private _managedNotificationArn?: string; 
  public get managedNotificationArn() {
    return this.getStringAttribute('managed_notification_arn');
  }
  public set managedNotificationArn(value: string) {
    this._managedNotificationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedNotificationArnInput() {
    return this._managedNotificationArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_arn: cdktf.stringToTerraform(this._channelArn),
      managed_notification_arn: cdktf.stringToTerraform(this._managedNotificationArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_arn: {
        value: cdktf.stringToHclTerraform(this._channelArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_notification_arn: {
        value: cdktf.stringToHclTerraform(this._managedNotificationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
