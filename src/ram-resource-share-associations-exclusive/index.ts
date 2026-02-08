/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RamResourceShareAssociationsExclusiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive#principals RamResourceShareAssociationsExclusive#principals}
  */
  readonly principals?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive#region RamResourceShareAssociationsExclusive#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive#resource_arns RamResourceShareAssociationsExclusive#resource_arns}
  */
  readonly resourceArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive#resource_share_arn RamResourceShareAssociationsExclusive#resource_share_arn}
  */
  readonly resourceShareArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive#sources RamResourceShareAssociationsExclusive#sources}
  */
  readonly sources?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive aws_ram_resource_share_associations_exclusive}
*/
export class RamResourceShareAssociationsExclusive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ram_resource_share_associations_exclusive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RamResourceShareAssociationsExclusive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RamResourceShareAssociationsExclusive to import
  * @param importFromId The id of the existing RamResourceShareAssociationsExclusive that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RamResourceShareAssociationsExclusive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ram_resource_share_associations_exclusive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive aws_ram_resource_share_associations_exclusive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RamResourceShareAssociationsExclusiveConfig
  */
  public constructor(scope: Construct, id: string, config: RamResourceShareAssociationsExclusiveConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ram_resource_share_associations_exclusive',
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
    this._principals = config.principals;
    this._region = config.region;
    this._resourceArns = config.resourceArns;
    this._resourceShareArn = config.resourceShareArn;
    this._sources = config.sources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // principals - computed: false, optional: true, required: false
  private _principals?: string[]; 
  public get principals() {
    return cdktf.Fn.tolist(this.getListAttribute('principals'));
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  public resetPrincipals() {
    this._principals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
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

  // resource_arns - computed: false, optional: true, required: false
  private _resourceArns?: string[]; 
  public get resourceArns() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_arns'));
  }
  public set resourceArns(value: string[]) {
    this._resourceArns = value;
  }
  public resetResourceArns() {
    this._resourceArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnsInput() {
    return this._resourceArns;
  }

  // resource_share_arn - computed: false, optional: false, required: true
  private _resourceShareArn?: string; 
  public get resourceShareArn() {
    return this.getStringAttribute('resource_share_arn');
  }
  public set resourceShareArn(value: string) {
    this._resourceShareArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceShareArnInput() {
    return this._resourceShareArn;
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: string[]; 
  public get sources() {
    return cdktf.Fn.tolist(this.getListAttribute('sources'));
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      principals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._principals),
      region: cdktf.stringToTerraform(this._region),
      resource_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceArns),
      resource_share_arn: cdktf.stringToTerraform(this._resourceShareArn),
      sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sources),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      principals: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._principals),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_share_arn: {
        value: cdktf.stringToHclTerraform(this._resourceShareArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
