/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/odb_network_peering_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OdbNetworkPeeringConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Display name of the odb network peering connection. Changing this will force terraform to create new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/odb_network_peering_connection#display_name OdbNetworkPeeringConnection#display_name}
  */
  readonly displayName: string;
  /**
  * ARN of the odb network peering connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/odb_network_peering_connection#odb_network_arn OdbNetworkPeeringConnection#odb_network_arn}
  */
  readonly odbNetworkArn?: string;
  /**
  * Required field. The unique identifier of the ODB network that initiates the peering connection. A sample ID is odbpcx-abcdefgh12345678. Changing this will force terraform to create new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/odb_network_peering_connection#odb_network_id OdbNetworkPeeringConnection#odb_network_id}
  */
  readonly odbNetworkId?: string;
  /**
  * List of peered network cidrs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/odb_network_peering_connection#peer_network_cidrs OdbNetworkPeeringConnection#peer_network_cidrs}
  */
  readonly peerNetworkCidrs?: string[];
  /**
  * Required field. The unique identifier of the ODB peering connection. Changing this will force terraform to create new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/odb_network_peering_connection#peer_network_id OdbNetworkPeeringConnection#peer_network_id}
  */
  readonly peerNetworkId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/odb_network_peering_connection#region OdbNetworkPeeringConnection#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/odb_network_peering_connection#tags OdbNetworkPeeringConnection#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/odb_network_peering_connection#timeouts OdbNetworkPeeringConnection#timeouts}
  */
  readonly timeouts?: OdbNetworkPeeringConnectionTimeouts;
}
export interface OdbNetworkPeeringConnectionTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/odb_network_peering_connection#create OdbNetworkPeeringConnection#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/odb_network_peering_connection#delete OdbNetworkPeeringConnection#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/odb_network_peering_connection#update OdbNetworkPeeringConnection#update}
  */
  readonly update?: string;
}

export function odbNetworkPeeringConnectionTimeoutsToTerraform(struct?: OdbNetworkPeeringConnectionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function odbNetworkPeeringConnectionTimeoutsToHclTerraform(struct?: OdbNetworkPeeringConnectionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdbNetworkPeeringConnectionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OdbNetworkPeeringConnectionTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbNetworkPeeringConnectionTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/odb_network_peering_connection aws_odb_network_peering_connection}
*/
export class OdbNetworkPeeringConnection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_odb_network_peering_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OdbNetworkPeeringConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OdbNetworkPeeringConnection to import
  * @param importFromId The id of the existing OdbNetworkPeeringConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/odb_network_peering_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OdbNetworkPeeringConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_odb_network_peering_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/odb_network_peering_connection aws_odb_network_peering_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OdbNetworkPeeringConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: OdbNetworkPeeringConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_odb_network_peering_connection',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.47.0',
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
    this._displayName = config.displayName;
    this._odbNetworkArn = config.odbNetworkArn;
    this._odbNetworkId = config.odbNetworkId;
    this._peerNetworkCidrs = config.peerNetworkCidrs;
    this._peerNetworkId = config.peerNetworkId;
    this._region = config.region;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // odb_network_arn - computed: true, optional: true, required: false
  private _odbNetworkArn?: string; 
  public get odbNetworkArn() {
    return this.getStringAttribute('odb_network_arn');
  }
  public set odbNetworkArn(value: string) {
    this._odbNetworkArn = value;
  }
  public resetOdbNetworkArn() {
    this._odbNetworkArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get odbNetworkArnInput() {
    return this._odbNetworkArn;
  }

  // odb_network_id - computed: true, optional: true, required: false
  private _odbNetworkId?: string; 
  public get odbNetworkId() {
    return this.getStringAttribute('odb_network_id');
  }
  public set odbNetworkId(value: string) {
    this._odbNetworkId = value;
  }
  public resetOdbNetworkId() {
    this._odbNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get odbNetworkIdInput() {
    return this._odbNetworkId;
  }

  // odb_peering_connection_type - computed: true, optional: false, required: false
  public get odbPeeringConnectionType() {
    return this.getStringAttribute('odb_peering_connection_type');
  }

  // peer_network_arn - computed: true, optional: false, required: false
  public get peerNetworkArn() {
    return this.getStringAttribute('peer_network_arn');
  }

  // peer_network_cidrs - computed: true, optional: true, required: false
  private _peerNetworkCidrs?: string[]; 
  public get peerNetworkCidrs() {
    return cdktn.Fn.tolist(this.getListAttribute('peer_network_cidrs'));
  }
  public set peerNetworkCidrs(value: string[]) {
    this._peerNetworkCidrs = value;
  }
  public resetPeerNetworkCidrs() {
    this._peerNetworkCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerNetworkCidrsInput() {
    return this._peerNetworkCidrs;
  }

  // peer_network_id - computed: false, optional: false, required: true
  private _peerNetworkId?: string; 
  public get peerNetworkId() {
    return this.getStringAttribute('peer_network_id');
  }
  public set peerNetworkId(value: string) {
    this._peerNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerNetworkIdInput() {
    return this._peerNetworkId;
  }

  // percent_progress - computed: true, optional: false, required: false
  public get percentProgress() {
    return this.getNumberAttribute('percent_progress');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OdbNetworkPeeringConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OdbNetworkPeeringConnectionTimeouts) {
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
      display_name: cdktn.stringToTerraform(this._displayName),
      odb_network_arn: cdktn.stringToTerraform(this._odbNetworkArn),
      odb_network_id: cdktn.stringToTerraform(this._odbNetworkId),
      peer_network_cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(this._peerNetworkCidrs),
      peer_network_id: cdktn.stringToTerraform(this._peerNetworkId),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      timeouts: odbNetworkPeeringConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      odb_network_arn: {
        value: cdktn.stringToHclTerraform(this._odbNetworkArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      odb_network_id: {
        value: cdktn.stringToHclTerraform(this._odbNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_network_cidrs: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._peerNetworkCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      peer_network_id: {
        value: cdktn.stringToHclTerraform(this._peerNetworkId),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: odbNetworkPeeringConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OdbNetworkPeeringConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
