/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ObservabilityadminDatasetIntegrationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration#region ObservabilityadminDatasetIntegration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration#role_arn ObservabilityadminDatasetIntegration#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration#tags ObservabilityadminDatasetIntegration#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration aws_observabilityadmin_dataset_integration}
*/
export class ObservabilityadminDatasetIntegration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_observabilityadmin_dataset_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ObservabilityadminDatasetIntegration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObservabilityadminDatasetIntegration to import
  * @param importFromId The id of the existing ObservabilityadminDatasetIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObservabilityadminDatasetIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_observabilityadmin_dataset_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/observabilityadmin_dataset_integration aws_observabilityadmin_dataset_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObservabilityadminDatasetIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ObservabilityadminDatasetIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_observabilityadmin_dataset_integration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.71.0',
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
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
