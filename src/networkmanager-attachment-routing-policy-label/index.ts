/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/networkmanager_attachment_routing_policy_label
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkmanagerAttachmentRoutingPolicyLabelConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/networkmanager_attachment_routing_policy_label#attachment_id NetworkmanagerAttachmentRoutingPolicyLabel#attachment_id}
  */
  readonly attachmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/networkmanager_attachment_routing_policy_label#core_network_id NetworkmanagerAttachmentRoutingPolicyLabel#core_network_id}
  */
  readonly coreNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/networkmanager_attachment_routing_policy_label#routing_policy_label NetworkmanagerAttachmentRoutingPolicyLabel#routing_policy_label}
  */
  readonly routingPolicyLabel: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/networkmanager_attachment_routing_policy_label aws_networkmanager_attachment_routing_policy_label}
*/
export class NetworkmanagerAttachmentRoutingPolicyLabel extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networkmanager_attachment_routing_policy_label";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkmanagerAttachmentRoutingPolicyLabel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkmanagerAttachmentRoutingPolicyLabel to import
  * @param importFromId The id of the existing NetworkmanagerAttachmentRoutingPolicyLabel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/networkmanager_attachment_routing_policy_label#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkmanagerAttachmentRoutingPolicyLabel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_networkmanager_attachment_routing_policy_label", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/networkmanager_attachment_routing_policy_label aws_networkmanager_attachment_routing_policy_label} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkmanagerAttachmentRoutingPolicyLabelConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkmanagerAttachmentRoutingPolicyLabelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkmanager_attachment_routing_policy_label',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.54.0',
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
    this._attachmentId = config.attachmentId;
    this._coreNetworkId = config.coreNetworkId;
    this._routingPolicyLabel = config.routingPolicyLabel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_id - computed: false, optional: false, required: true
  private _attachmentId?: string; 
  public get attachmentId() {
    return this.getStringAttribute('attachment_id');
  }
  public set attachmentId(value: string) {
    this._attachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentIdInput() {
    return this._attachmentId;
  }

  // core_network_id - computed: false, optional: false, required: true
  private _coreNetworkId?: string; 
  public get coreNetworkId() {
    return this.getStringAttribute('core_network_id');
  }
  public set coreNetworkId(value: string) {
    this._coreNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNetworkIdInput() {
    return this._coreNetworkId;
  }

  // routing_policy_label - computed: false, optional: false, required: true
  private _routingPolicyLabel?: string; 
  public get routingPolicyLabel() {
    return this.getStringAttribute('routing_policy_label');
  }
  public set routingPolicyLabel(value: string) {
    this._routingPolicyLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyLabelInput() {
    return this._routingPolicyLabel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attachment_id: cdktn.stringToTerraform(this._attachmentId),
      core_network_id: cdktn.stringToTerraform(this._coreNetworkId),
      routing_policy_label: cdktn.stringToTerraform(this._routingPolicyLabel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attachment_id: {
        value: cdktn.stringToHclTerraform(this._attachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_network_id: {
        value: cdktn.stringToHclTerraform(this._coreNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_policy_label: {
        value: cdktn.stringToHclTerraform(this._routingPolicyLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
