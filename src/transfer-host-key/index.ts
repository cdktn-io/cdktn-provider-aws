/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransferHostKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#description TransferHostKey#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#host_key_body TransferHostKey#host_key_body}
  */
  readonly hostKeyBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#host_key_body_wo TransferHostKey#host_key_body_wo}
  */
  readonly hostKeyBodyWo?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#region TransferHostKey#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#server_id TransferHostKey#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#tags TransferHostKey#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key aws_transfer_host_key}
*/
export class TransferHostKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_transfer_host_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransferHostKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransferHostKey to import
  * @param importFromId The id of the existing TransferHostKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransferHostKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_transfer_host_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/resources/transfer_host_key aws_transfer_host_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransferHostKeyConfig
  */
  public constructor(scope: Construct, id: string, config: TransferHostKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_transfer_host_key',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.16.0',
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
    this._description = config.description;
    this._hostKeyBody = config.hostKeyBody;
    this._hostKeyBodyWo = config.hostKeyBodyWo;
    this._region = config.region;
    this._serverId = config.serverId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // host_key_body - computed: false, optional: true, required: false
  private _hostKeyBody?: string; 
  public get hostKeyBody() {
    return this.getStringAttribute('host_key_body');
  }
  public set hostKeyBody(value: string) {
    this._hostKeyBody = value;
  }
  public resetHostKeyBody() {
    this._hostKeyBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyBodyInput() {
    return this._hostKeyBody;
  }

  // host_key_body_wo - computed: false, optional: true, required: false
  private _hostKeyBodyWo?: string; 
  public get hostKeyBodyWo() {
    return this.getStringAttribute('host_key_body_wo');
  }
  public set hostKeyBodyWo(value: string) {
    this._hostKeyBodyWo = value;
  }
  public resetHostKeyBodyWo() {
    this._hostKeyBodyWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyBodyWoInput() {
    return this._hostKeyBodyWo;
  }

  // host_key_fingerprint - computed: true, optional: false, required: false
  public get hostKeyFingerprint() {
    return this.getStringAttribute('host_key_fingerprint');
  }

  // host_key_id - computed: true, optional: false, required: false
  public get hostKeyId() {
    return this.getStringAttribute('host_key_id');
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

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
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
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      host_key_body: cdktf.stringToTerraform(this._hostKeyBody),
      host_key_body_wo: cdktf.stringToTerraform(this._hostKeyBodyWo),
      region: cdktf.stringToTerraform(this._region),
      server_id: cdktf.stringToTerraform(this._serverId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_key_body: {
        value: cdktf.stringToHclTerraform(this._hostKeyBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_key_body_wo: {
        value: cdktf.stringToHclTerraform(this._hostKeyBodyWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
