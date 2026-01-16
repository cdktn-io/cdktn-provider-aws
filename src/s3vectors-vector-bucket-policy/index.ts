/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3VectorsVectorBucketPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket_policy#policy S3VectorsVectorBucketPolicy#policy}
  */
  readonly policy: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket_policy#region S3VectorsVectorBucketPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket_policy#vector_bucket_arn S3VectorsVectorBucketPolicy#vector_bucket_arn}
  */
  readonly vectorBucketArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket_policy aws_s3vectors_vector_bucket_policy}
*/
export class S3VectorsVectorBucketPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3vectors_vector_bucket_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3VectorsVectorBucketPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3VectorsVectorBucketPolicy to import
  * @param importFromId The id of the existing S3VectorsVectorBucketPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3VectorsVectorBucketPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3vectors_vector_bucket_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket_policy aws_s3vectors_vector_bucket_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3VectorsVectorBucketPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: S3VectorsVectorBucketPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3vectors_vector_bucket_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.28.0',
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
    this._policy = config.policy;
    this._region = config.region;
    this._vectorBucketArn = config.vectorBucketArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
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

  // vector_bucket_arn - computed: false, optional: false, required: true
  private _vectorBucketArn?: string; 
  public get vectorBucketArn() {
    return this.getStringAttribute('vector_bucket_arn');
  }
  public set vectorBucketArn(value: string) {
    this._vectorBucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorBucketArnInput() {
    return this._vectorBucketArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy: cdktf.stringToTerraform(this._policy),
      region: cdktf.stringToTerraform(this._region),
      vector_bucket_arn: cdktf.stringToTerraform(this._vectorBucketArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
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
      vector_bucket_arn: {
        value: cdktf.stringToHclTerraform(this._vectorBucketArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
