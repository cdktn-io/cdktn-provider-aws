/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3vectors_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3VectorsIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3vectors_index#data_type S3VectorsIndex#data_type}
  */
  readonly dataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3vectors_index#dimension S3VectorsIndex#dimension}
  */
  readonly dimension: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3vectors_index#distance_metric S3VectorsIndex#distance_metric}
  */
  readonly distanceMetric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3vectors_index#index_name S3VectorsIndex#index_name}
  */
  readonly indexName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3vectors_index#region S3VectorsIndex#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3vectors_index#tags S3VectorsIndex#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3vectors_index#vector_bucket_name S3VectorsIndex#vector_bucket_name}
  */
  readonly vectorBucketName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3vectors_index aws_s3vectors_index}
*/
export class S3VectorsIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3vectors_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3VectorsIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3VectorsIndex to import
  * @param importFromId The id of the existing S3VectorsIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3vectors_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3VectorsIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3vectors_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3vectors_index aws_s3vectors_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3VectorsIndexConfig
  */
  public constructor(scope: Construct, id: string, config: S3VectorsIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3vectors_index',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.25.0',
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
    this._dataType = config.dataType;
    this._dimension = config.dimension;
    this._distanceMetric = config.distanceMetric;
    this._indexName = config.indexName;
    this._region = config.region;
    this._tags = config.tags;
    this._vectorBucketName = config.vectorBucketName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension?: number; 
  public get dimension() {
    return this.getNumberAttribute('dimension');
  }
  public set dimension(value: number) {
    this._dimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // distance_metric - computed: false, optional: false, required: true
  private _distanceMetric?: string; 
  public get distanceMetric() {
    return this.getStringAttribute('distance_metric');
  }
  public set distanceMetric(value: string) {
    this._distanceMetric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceMetricInput() {
    return this._distanceMetric;
  }

  // index_arn - computed: true, optional: false, required: false
  public get indexArn() {
    return this.getStringAttribute('index_arn');
  }

  // index_name - computed: false, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
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

  // vector_bucket_name - computed: false, optional: false, required: true
  private _vectorBucketName?: string; 
  public get vectorBucketName() {
    return this.getStringAttribute('vector_bucket_name');
  }
  public set vectorBucketName(value: string) {
    this._vectorBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorBucketNameInput() {
    return this._vectorBucketName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_type: cdktf.stringToTerraform(this._dataType),
      dimension: cdktf.numberToTerraform(this._dimension),
      distance_metric: cdktf.stringToTerraform(this._distanceMetric),
      index_name: cdktf.stringToTerraform(this._indexName),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vector_bucket_name: cdktf.stringToTerraform(this._vectorBucketName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_type: {
        value: cdktf.stringToHclTerraform(this._dataType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dimension: {
        value: cdktf.numberToHclTerraform(this._dimension),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distance_metric: {
        value: cdktf.stringToHclTerraform(this._distanceMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_name: {
        value: cdktf.stringToHclTerraform(this._indexName),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vector_bucket_name: {
        value: cdktf.stringToHclTerraform(this._vectorBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
