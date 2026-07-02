/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrock_use_case_for_model_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockUseCaseForModelAccessConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrock_use_case_for_model_access#form_data BedrockUseCaseForModelAccess#form_data}
  */
  readonly formData: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrock_use_case_for_model_access aws_bedrock_use_case_for_model_access}
*/
export class BedrockUseCaseForModelAccess extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrock_use_case_for_model_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockUseCaseForModelAccess resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockUseCaseForModelAccess to import
  * @param importFromId The id of the existing BedrockUseCaseForModelAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrock_use_case_for_model_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockUseCaseForModelAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrock_use_case_for_model_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/bedrock_use_case_for_model_access aws_bedrock_use_case_for_model_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockUseCaseForModelAccessConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockUseCaseForModelAccessConfig) {
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
    this._formData = config.formData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // form_data - computed: false, optional: false, required: true
  private _formData?: string; 
  public get formData() {
    return this.getStringAttribute('form_data');
  }
  public set formData(value: string) {
    this._formData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formDataInput() {
    return this._formData;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      form_data: cdktn.stringToTerraform(this._formData),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      form_data: {
        value: cdktn.stringToHclTerraform(this._formData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
