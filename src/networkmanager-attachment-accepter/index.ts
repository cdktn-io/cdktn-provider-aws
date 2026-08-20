/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_attachment_accepter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkmanagerAttachmentAccepterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_attachment_accepter#attachment_id NetworkmanagerAttachmentAccepter#attachment_id}
  */
  readonly attachmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_attachment_accepter#attachment_type NetworkmanagerAttachmentAccepter#attachment_type}
  */
  readonly attachmentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_attachment_accepter#id NetworkmanagerAttachmentAccepter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_attachment_accepter#timeouts NetworkmanagerAttachmentAccepter#timeouts}
  */
  readonly timeouts?: NetworkmanagerAttachmentAccepterTimeouts;
}
export interface NetworkmanagerAttachmentAccepterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_attachment_accepter#create NetworkmanagerAttachmentAccepter#create}
  */
  readonly create?: string;
}

export function networkmanagerAttachmentAccepterTimeoutsToTerraform(struct?: NetworkmanagerAttachmentAccepterTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
  }
}


export function networkmanagerAttachmentAccepterTimeoutsToHclTerraform(struct?: NetworkmanagerAttachmentAccepterTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkmanagerAttachmentAccepterTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkmanagerAttachmentAccepterTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkmanagerAttachmentAccepterTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_attachment_accepter aws_networkmanager_attachment_accepter}
*/
export class NetworkmanagerAttachmentAccepter extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networkmanager_attachment_accepter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkmanagerAttachmentAccepter resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkmanagerAttachmentAccepter to import
  * @param importFromId The id of the existing NetworkmanagerAttachmentAccepter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_attachment_accepter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkmanagerAttachmentAccepter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_networkmanager_attachment_accepter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_attachment_accepter aws_networkmanager_attachment_accepter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkmanagerAttachmentAccepterConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkmanagerAttachmentAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkmanager_attachment_accepter',
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
    this._attachmentId = config.attachmentId;
    this._attachmentType = config.attachmentType;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
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

  // attachment_policy_rule_number - computed: true, optional: false, required: false
  public get attachmentPolicyRuleNumber() {
    return this.getNumberAttribute('attachment_policy_rule_number');
  }

  // attachment_type - computed: false, optional: false, required: true
  private _attachmentType?: string; 
  public get attachmentType() {
    return this.getStringAttribute('attachment_type');
  }
  public set attachmentType(value: string) {
    this._attachmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentTypeInput() {
    return this._attachmentType;
  }

  // core_network_arn - computed: true, optional: false, required: false
  public get coreNetworkArn() {
    return this.getStringAttribute('core_network_arn');
  }

  // core_network_id - computed: true, optional: false, required: false
  public get coreNetworkId() {
    return this.getStringAttribute('core_network_id');
  }

  // edge_location - computed: true, optional: false, required: false
  public get edgeLocation() {
    return this.getStringAttribute('edge_location');
  }

  // edge_locations - computed: true, optional: false, required: false
  public get edgeLocations() {
    return this.getListAttribute('edge_locations');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // owner_account_id - computed: true, optional: false, required: false
  public get ownerAccountId() {
    return this.getStringAttribute('owner_account_id');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // segment_name - computed: true, optional: false, required: false
  public get segmentName() {
    return this.getStringAttribute('segment_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkmanagerAttachmentAccepterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkmanagerAttachmentAccepterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attachment_id: cdktn.stringToTerraform(this._attachmentId),
      attachment_type: cdktn.stringToTerraform(this._attachmentType),
      id: cdktn.stringToTerraform(this._id),
      timeouts: networkmanagerAttachmentAccepterTimeoutsToTerraform(this._timeouts.internalValue),
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
      attachment_type: {
        value: cdktn.stringToHclTerraform(this._attachmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: networkmanagerAttachmentAccepterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkmanagerAttachmentAccepterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
