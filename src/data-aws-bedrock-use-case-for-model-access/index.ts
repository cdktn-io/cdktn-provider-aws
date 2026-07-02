/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/bedrock_use_case_for_model_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsBedrockUseCaseForModelAccessConfig extends cdktn.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/bedrock_use_case_for_model_access aws_bedrock_use_case_for_model_access}
*/
export class DataAwsBedrockUseCaseForModelAccess extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrock_use_case_for_model_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsBedrockUseCaseForModelAccess resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsBedrockUseCaseForModelAccess to import
  * @param importFromId The id of the existing DataAwsBedrockUseCaseForModelAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/bedrock_use_case_for_model_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsBedrockUseCaseForModelAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrock_use_case_for_model_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/bedrock_use_case_for_model_access aws_bedrock_use_case_for_model_access} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsBedrockUseCaseForModelAccessConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsBedrockUseCaseForModelAccessConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrock_use_case_for_model_access',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.53.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // form_data - computed: true, optional: false, required: false
  public get formData() {
    return this.getStringAttribute('form_data');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
