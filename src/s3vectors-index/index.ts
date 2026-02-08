/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3VectorsIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#data_type S3VectorsIndex#data_type}
  */
  readonly dataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#dimension S3VectorsIndex#dimension}
  */
  readonly dimension: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#distance_metric S3VectorsIndex#distance_metric}
  */
  readonly distanceMetric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#encryption_configuration S3VectorsIndex#encryption_configuration}
  */
  readonly encryptionConfiguration?: S3VectorsIndexEncryptionConfiguration[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#index_name S3VectorsIndex#index_name}
  */
  readonly indexName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#region S3VectorsIndex#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#tags S3VectorsIndex#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#vector_bucket_name S3VectorsIndex#vector_bucket_name}
  */
  readonly vectorBucketName: string;
  /**
  * metadata_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#metadata_configuration S3VectorsIndex#metadata_configuration}
  */
  readonly metadataConfiguration?: S3VectorsIndexMetadataConfiguration[] | cdktf.IResolvable;
}
export interface S3VectorsIndexEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#kms_key_arn S3VectorsIndex#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#sse_type S3VectorsIndex#sse_type}
  */
  readonly sseType?: string;
}

export function s3VectorsIndexEncryptionConfigurationToTerraform(struct?: S3VectorsIndexEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    sse_type: cdktf.stringToTerraform(struct!.sseType),
  }
}


export function s3VectorsIndexEncryptionConfigurationToHclTerraform(struct?: S3VectorsIndexEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sse_type: {
      value: cdktf.stringToHclTerraform(struct!.sseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3VectorsIndexEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): S3VectorsIndexEncryptionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._sseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseType = this._sseType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3VectorsIndexEncryptionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._sseType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._sseType = value.sseType;
    }
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // sse_type - computed: true, optional: true, required: false
  private _sseType?: string; 
  public get sseType() {
    return this.getStringAttribute('sse_type');
  }
  public set sseType(value: string) {
    this._sseType = value;
  }
  public resetSseType() {
    this._sseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseTypeInput() {
    return this._sseType;
  }
}

export class S3VectorsIndexEncryptionConfigurationList extends cdktf.ComplexList {
  public internalValue? : S3VectorsIndexEncryptionConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): S3VectorsIndexEncryptionConfigurationOutputReference {
    return new S3VectorsIndexEncryptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3VectorsIndexMetadataConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#non_filterable_metadata_keys S3VectorsIndex#non_filterable_metadata_keys}
  */
  readonly nonFilterableMetadataKeys: string[];
}

export function s3VectorsIndexMetadataConfigurationToTerraform(struct?: S3VectorsIndexMetadataConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_filterable_metadata_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nonFilterableMetadataKeys),
  }
}


export function s3VectorsIndexMetadataConfigurationToHclTerraform(struct?: S3VectorsIndexMetadataConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    non_filterable_metadata_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nonFilterableMetadataKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3VectorsIndexMetadataConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): S3VectorsIndexMetadataConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonFilterableMetadataKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonFilterableMetadataKeys = this._nonFilterableMetadataKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3VectorsIndexMetadataConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nonFilterableMetadataKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nonFilterableMetadataKeys = value.nonFilterableMetadataKeys;
    }
  }

  // non_filterable_metadata_keys - computed: false, optional: false, required: true
  private _nonFilterableMetadataKeys?: string[]; 
  public get nonFilterableMetadataKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('non_filterable_metadata_keys'));
  }
  public set nonFilterableMetadataKeys(value: string[]) {
    this._nonFilterableMetadataKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nonFilterableMetadataKeysInput() {
    return this._nonFilterableMetadataKeys;
  }
}

export class S3VectorsIndexMetadataConfigurationList extends cdktf.ComplexList {
  public internalValue? : S3VectorsIndexMetadataConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): S3VectorsIndexMetadataConfigurationOutputReference {
    return new S3VectorsIndexMetadataConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index aws_s3vectors_index}
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
  * @param importFromId The id of the existing S3VectorsIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3VectorsIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3vectors_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index aws_s3vectors_index} Resource
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
    this._dataType = config.dataType;
    this._dimension = config.dimension;
    this._distanceMetric = config.distanceMetric;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._indexName = config.indexName;
    this._region = config.region;
    this._tags = config.tags;
    this._vectorBucketName = config.vectorBucketName;
    this._metadataConfiguration.internalValue = config.metadataConfiguration;
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

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration = new S3VectorsIndexEncryptionConfigurationList(this, "encryption_configuration", false);
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: S3VectorsIndexEncryptionConfiguration[] | cdktf.IResolvable) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
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

  // metadata_configuration - computed: false, optional: true, required: false
  private _metadataConfiguration = new S3VectorsIndexMetadataConfigurationList(this, "metadata_configuration", false);
  public get metadataConfiguration() {
    return this._metadataConfiguration;
  }
  public putMetadataConfiguration(value: S3VectorsIndexMetadataConfiguration[] | cdktf.IResolvable) {
    this._metadataConfiguration.internalValue = value;
  }
  public resetMetadataConfiguration() {
    this._metadataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataConfigurationInput() {
    return this._metadataConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_type: cdktf.stringToTerraform(this._dataType),
      dimension: cdktf.numberToTerraform(this._dimension),
      distance_metric: cdktf.stringToTerraform(this._distanceMetric),
      encryption_configuration: cdktf.listMapper(s3VectorsIndexEncryptionConfigurationToTerraform, false)(this._encryptionConfiguration.internalValue),
      index_name: cdktf.stringToTerraform(this._indexName),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vector_bucket_name: cdktf.stringToTerraform(this._vectorBucketName),
      metadata_configuration: cdktf.listMapper(s3VectorsIndexMetadataConfigurationToTerraform, true)(this._metadataConfiguration.internalValue),
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
      encryption_configuration: {
        value: cdktf.listMapperHcl(s3VectorsIndexEncryptionConfigurationToHclTerraform, false)(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3VectorsIndexEncryptionConfigurationList",
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
      metadata_configuration: {
        value: cdktf.listMapperHcl(s3VectorsIndexMetadataConfigurationToHclTerraform, true)(this._metadataConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3VectorsIndexMetadataConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
