/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_workload_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BedrockagentcoreWorkloadIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_workload_identity#allowed_resource_oauth2_return_urls BedrockagentcoreWorkloadIdentity#allowed_resource_oauth2_return_urls}
  */
  readonly allowedResourceOauth2ReturnUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_workload_identity#name BedrockagentcoreWorkloadIdentity#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_workload_identity#region BedrockagentcoreWorkloadIdentity#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_workload_identity aws_bedrockagentcore_workload_identity}
*/
export class BedrockagentcoreWorkloadIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_workload_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BedrockagentcoreWorkloadIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreWorkloadIdentity to import
  * @param importFromId The id of the existing BedrockagentcoreWorkloadIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_workload_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreWorkloadIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_workload_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_workload_identity aws_bedrockagentcore_workload_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreWorkloadIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreWorkloadIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagentcore_workload_identity',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.22.1',
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
    this._allowedResourceOauth2ReturnUrls = config.allowedResourceOauth2ReturnUrls;
    this._name = config.name;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_resource_oauth2_return_urls - computed: false, optional: true, required: false
  private _allowedResourceOauth2ReturnUrls?: string[]; 
  public get allowedResourceOauth2ReturnUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_resource_oauth2_return_urls'));
  }
  public set allowedResourceOauth2ReturnUrls(value: string[]) {
    this._allowedResourceOauth2ReturnUrls = value;
  }
  public resetAllowedResourceOauth2ReturnUrls() {
    this._allowedResourceOauth2ReturnUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedResourceOauth2ReturnUrlsInput() {
    return this._allowedResourceOauth2ReturnUrls;
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

  // workload_identity_arn - computed: true, optional: false, required: false
  public get workloadIdentityArn() {
    return this.getStringAttribute('workload_identity_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_resource_oauth2_return_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedResourceOauth2ReturnUrls),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_resource_oauth2_return_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedResourceOauth2ReturnUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
