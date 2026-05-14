/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/sqs_queue_redrive_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SqsQueueRedrivePolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/sqs_queue_redrive_policy#id SqsQueueRedrivePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/sqs_queue_redrive_policy#queue_url SqsQueueRedrivePolicy#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/sqs_queue_redrive_policy#redrive_policy SqsQueueRedrivePolicy#redrive_policy}
  */
  readonly redrivePolicy: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/sqs_queue_redrive_policy#region SqsQueueRedrivePolicy#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/sqs_queue_redrive_policy aws_sqs_queue_redrive_policy}
*/
export class SqsQueueRedrivePolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sqs_queue_redrive_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SqsQueueRedrivePolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqsQueueRedrivePolicy to import
  * @param importFromId The id of the existing SqsQueueRedrivePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/sqs_queue_redrive_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqsQueueRedrivePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sqs_queue_redrive_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/sqs_queue_redrive_policy aws_sqs_queue_redrive_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqsQueueRedrivePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SqsQueueRedrivePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sqs_queue_redrive_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.45.0',
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
    this._id = config.id;
    this._queueUrl = config.queueUrl;
    this._redrivePolicy = config.redrivePolicy;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // queue_url - computed: false, optional: false, required: true
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
  }

  // redrive_policy - computed: false, optional: false, required: true
  private _redrivePolicy?: string; 
  public get redrivePolicy() {
    return this.getStringAttribute('redrive_policy');
  }
  public set redrivePolicy(value: string) {
    this._redrivePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redrivePolicyInput() {
    return this._redrivePolicy;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      queue_url: cdktn.stringToTerraform(this._queueUrl),
      redrive_policy: cdktn.stringToTerraform(this._redrivePolicy),
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_url: {
        value: cdktn.stringToHclTerraform(this._queueUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redrive_policy: {
        value: cdktn.stringToHclTerraform(this._redrivePolicy),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
