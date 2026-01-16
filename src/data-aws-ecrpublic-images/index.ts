/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/ecrpublic_images
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEcrpublicImagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/ecrpublic_images#region DataAwsEcrpublicImages#region}
  */
  readonly region?: string;
  /**
  * AWS account ID associated with the public registry that contains the repository. If not specified, the default public registry is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/ecrpublic_images#registry_id DataAwsEcrpublicImages#registry_id}
  */
  readonly registryId?: string;
  /**
  * Name of the public repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/ecrpublic_images#repository_name DataAwsEcrpublicImages#repository_name}
  */
  readonly repositoryName: string;
  /**
  * image_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/ecrpublic_images#image_ids DataAwsEcrpublicImages#image_ids}
  */
  readonly imageIds?: DataAwsEcrpublicImagesImageIds[] | cdktf.IResolvable;
}
export interface DataAwsEcrpublicImagesImages {
}

export function dataAwsEcrpublicImagesImagesToTerraform(struct?: DataAwsEcrpublicImagesImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsEcrpublicImagesImagesToHclTerraform(struct?: DataAwsEcrpublicImagesImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEcrpublicImagesImagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsEcrpublicImagesImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEcrpublicImagesImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artifact_media_type - computed: true, optional: false, required: false
  public get artifactMediaType() {
    return this.getStringAttribute('artifact_media_type');
  }

  // image_digest - computed: true, optional: false, required: false
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }

  // image_manifest_media_type - computed: true, optional: false, required: false
  public get imageManifestMediaType() {
    return this.getStringAttribute('image_manifest_media_type');
  }

  // image_pushed_at - computed: true, optional: false, required: false
  public get imagePushedAt() {
    return this.getStringAttribute('image_pushed_at');
  }

  // image_size_in_bytes - computed: true, optional: false, required: false
  public get imageSizeInBytes() {
    return this.getNumberAttribute('image_size_in_bytes');
  }

  // image_tags - computed: true, optional: false, required: false
  public get imageTags() {
    return this.getListAttribute('image_tags');
  }

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // repository_name - computed: true, optional: false, required: false
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
}

export class DataAwsEcrpublicImagesImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsEcrpublicImagesImagesOutputReference {
    return new DataAwsEcrpublicImagesImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEcrpublicImagesImageIds {
  /**
  * Image digest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/ecrpublic_images#image_digest DataAwsEcrpublicImages#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Image tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/ecrpublic_images#image_tag DataAwsEcrpublicImages#image_tag}
  */
  readonly imageTag?: string;
}

export function dataAwsEcrpublicImagesImageIdsToTerraform(struct?: DataAwsEcrpublicImagesImageIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_digest: cdktf.stringToTerraform(struct!.imageDigest),
    image_tag: cdktf.stringToTerraform(struct!.imageTag),
  }
}


export function dataAwsEcrpublicImagesImageIdsToHclTerraform(struct?: DataAwsEcrpublicImagesImageIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_digest: {
      value: cdktf.stringToHclTerraform(struct!.imageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_tag: {
      value: cdktf.stringToHclTerraform(struct!.imageTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsEcrpublicImagesImageIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEcrpublicImagesImageIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDigest = this._imageDigest;
    }
    if (this._imageTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTag = this._imageTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEcrpublicImagesImageIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageDigest = undefined;
      this._imageTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageDigest = value.imageDigest;
      this._imageTag = value.imageTag;
    }
  }

  // image_digest - computed: false, optional: true, required: false
  private _imageDigest?: string; 
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }
  public set imageDigest(value: string) {
    this._imageDigest = value;
  }
  public resetImageDigest() {
    this._imageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDigestInput() {
    return this._imageDigest;
  }

  // image_tag - computed: false, optional: true, required: false
  private _imageTag?: string; 
  public get imageTag() {
    return this.getStringAttribute('image_tag');
  }
  public set imageTag(value: string) {
    this._imageTag = value;
  }
  public resetImageTag() {
    this._imageTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagInput() {
    return this._imageTag;
  }
}

export class DataAwsEcrpublicImagesImageIdsList extends cdktf.ComplexList {
  public internalValue? : DataAwsEcrpublicImagesImageIds[] | cdktf.IResolvable

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
  public get(index: number): DataAwsEcrpublicImagesImageIdsOutputReference {
    return new DataAwsEcrpublicImagesImageIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/ecrpublic_images aws_ecrpublic_images}
*/
export class DataAwsEcrpublicImages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecrpublic_images";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsEcrpublicImages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsEcrpublicImages to import
  * @param importFromId The id of the existing DataAwsEcrpublicImages that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/ecrpublic_images#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsEcrpublicImages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecrpublic_images", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/ecrpublic_images aws_ecrpublic_images} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEcrpublicImagesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsEcrpublicImagesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecrpublic_images',
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
    this._region = config.region;
    this._registryId = config.registryId;
    this._repositoryName = config.repositoryName;
    this._imageIds.internalValue = config.imageIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // images - computed: true, optional: false, required: false
  private _images = new DataAwsEcrpublicImagesImagesList(this, "images", false);
  public get images() {
    return this._images;
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

  // registry_id - computed: false, optional: true, required: false
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  public resetRegistryId() {
    this._registryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // image_ids - computed: false, optional: true, required: false
  private _imageIds = new DataAwsEcrpublicImagesImageIdsList(this, "image_ids", false);
  public get imageIds() {
    return this._imageIds;
  }
  public putImageIds(value: DataAwsEcrpublicImagesImageIds[] | cdktf.IResolvable) {
    this._imageIds.internalValue = value;
  }
  public resetImageIds() {
    this._imageIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdsInput() {
    return this._imageIds.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktf.stringToTerraform(this._region),
      registry_id: cdktf.stringToTerraform(this._registryId),
      repository_name: cdktf.stringToTerraform(this._repositoryName),
      image_ids: cdktf.listMapper(dataAwsEcrpublicImagesImageIdsToTerraform, true)(this._imageIds.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_id: {
        value: cdktf.stringToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_name: {
        value: cdktf.stringToHclTerraform(this._repositoryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_ids: {
        value: cdktf.listMapperHcl(dataAwsEcrpublicImagesImageIdsToHclTerraform, true)(this._imageIds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsEcrpublicImagesImageIdsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
