/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EcrRepositoryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#force_delete EcrRepository#force_delete}
  */
  readonly forceDelete?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#id EcrRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#image_tag_mutability EcrRepository#image_tag_mutability}
  */
  readonly imageTagMutability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#name EcrRepository#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#region EcrRepository#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#tags EcrRepository#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#tags_all EcrRepository#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#encryption_configuration EcrRepository#encryption_configuration}
  */
  readonly encryptionConfiguration?: EcrRepositoryEncryptionConfiguration[] | cdktn.IResolvable;
  /**
  * image_scanning_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#image_scanning_configuration EcrRepository#image_scanning_configuration}
  */
  readonly imageScanningConfiguration?: EcrRepositoryImageScanningConfiguration;
  /**
  * image_tag_mutability_exclusion_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#image_tag_mutability_exclusion_filter EcrRepository#image_tag_mutability_exclusion_filter}
  */
  readonly imageTagMutabilityExclusionFilter?: EcrRepositoryImageTagMutabilityExclusionFilter[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#timeouts EcrRepository#timeouts}
  */
  readonly timeouts?: EcrRepositoryTimeouts;
}
export interface EcrRepositoryEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#encryption_type EcrRepository#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#kms_key EcrRepository#kms_key}
  */
  readonly kmsKey?: string;
}

export function ecrRepositoryEncryptionConfigurationToTerraform(struct?: EcrRepositoryEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function ecrRepositoryEncryptionConfigurationToHclTerraform(struct?: EcrRepositoryEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcrRepositoryEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcrRepositoryEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrRepositoryEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionType = undefined;
      this._kmsKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionType = value.encryptionType;
      this._kmsKey = value.kmsKey;
    }
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}

export class EcrRepositoryEncryptionConfigurationList extends cdktn.ComplexList {
  public internalValue? : EcrRepositoryEncryptionConfiguration[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EcrRepositoryEncryptionConfigurationOutputReference {
    return new EcrRepositoryEncryptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcrRepositoryImageScanningConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#scan_on_push EcrRepository#scan_on_push}
  */
  readonly scanOnPush: boolean | cdktn.IResolvable;
}

export function ecrRepositoryImageScanningConfigurationToTerraform(struct?: EcrRepositoryImageScanningConfigurationOutputReference | EcrRepositoryImageScanningConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scan_on_push: cdktn.booleanToTerraform(struct!.scanOnPush),
  }
}


export function ecrRepositoryImageScanningConfigurationToHclTerraform(struct?: EcrRepositoryImageScanningConfigurationOutputReference | EcrRepositoryImageScanningConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scan_on_push: {
      value: cdktn.booleanToHclTerraform(struct!.scanOnPush),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcrRepositoryImageScanningConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcrRepositoryImageScanningConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scanOnPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanOnPush = this._scanOnPush;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrRepositoryImageScanningConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scanOnPush = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scanOnPush = value.scanOnPush;
    }
  }

  // scan_on_push - computed: false, optional: false, required: true
  private _scanOnPush?: boolean | cdktn.IResolvable; 
  public get scanOnPush() {
    return this.getBooleanAttribute('scan_on_push');
  }
  public set scanOnPush(value: boolean | cdktn.IResolvable) {
    this._scanOnPush = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanOnPushInput() {
    return this._scanOnPush;
  }
}
export interface EcrRepositoryImageTagMutabilityExclusionFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#filter EcrRepository#filter}
  */
  readonly filter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#filter_type EcrRepository#filter_type}
  */
  readonly filterType: string;
}

export function ecrRepositoryImageTagMutabilityExclusionFilterToTerraform(struct?: EcrRepositoryImageTagMutabilityExclusionFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter: cdktn.stringToTerraform(struct!.filter),
    filter_type: cdktn.stringToTerraform(struct!.filterType),
  }
}


export function ecrRepositoryImageTagMutabilityExclusionFilterToHclTerraform(struct?: EcrRepositoryImageTagMutabilityExclusionFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter: {
      value: cdktn.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_type: {
      value: cdktn.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcrRepositoryImageTagMutabilityExclusionFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcrRepositoryImageTagMutabilityExclusionFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrRepositoryImageTagMutabilityExclusionFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._filterType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._filterType = value.filterType;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }
}

export class EcrRepositoryImageTagMutabilityExclusionFilterList extends cdktn.ComplexList {
  public internalValue? : EcrRepositoryImageTagMutabilityExclusionFilter[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EcrRepositoryImageTagMutabilityExclusionFilterOutputReference {
    return new EcrRepositoryImageTagMutabilityExclusionFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcrRepositoryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#delete EcrRepository#delete}
  */
  readonly delete?: string;
}

export function ecrRepositoryTimeoutsToTerraform(struct?: EcrRepositoryTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function ecrRepositoryTimeoutsToHclTerraform(struct?: EcrRepositoryTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcrRepositoryTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcrRepositoryTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrRepositoryTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository aws_ecr_repository}
*/
export class EcrRepository extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecr_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EcrRepository resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcrRepository to import
  * @param importFromId The id of the existing EcrRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcrRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecr_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ecr_repository aws_ecr_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcrRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: EcrRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecr_repository',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.51.0',
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
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._imageTagMutability = config.imageTagMutability;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._imageScanningConfiguration.internalValue = config.imageScanningConfiguration;
    this._imageTagMutabilityExclusionFilter.internalValue = config.imageTagMutabilityExclusionFilter;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktn.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktn.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

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

  // image_tag_mutability - computed: false, optional: true, required: false
  private _imageTagMutability?: string; 
  public get imageTagMutability() {
    return this.getStringAttribute('image_tag_mutability');
  }
  public set imageTagMutability(value: string) {
    this._imageTagMutability = value;
  }
  public resetImageTagMutability() {
    this._imageTagMutability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagMutabilityInput() {
    return this._imageTagMutability;
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

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // repository_url - computed: true, optional: false, required: false
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new EcrRepositoryEncryptionConfigurationList(this, "encryption_configuration", false);
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: EcrRepositoryEncryptionConfiguration[] | cdktn.IResolvable) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // image_scanning_configuration - computed: false, optional: true, required: false
  private _imageScanningConfiguration = new EcrRepositoryImageScanningConfigurationOutputReference(this, "image_scanning_configuration");
  public get imageScanningConfiguration() {
    return this._imageScanningConfiguration;
  }
  public putImageScanningConfiguration(value: EcrRepositoryImageScanningConfiguration) {
    this._imageScanningConfiguration.internalValue = value;
  }
  public resetImageScanningConfiguration() {
    this._imageScanningConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageScanningConfigurationInput() {
    return this._imageScanningConfiguration.internalValue;
  }

  // image_tag_mutability_exclusion_filter - computed: false, optional: true, required: false
  private _imageTagMutabilityExclusionFilter = new EcrRepositoryImageTagMutabilityExclusionFilterList(this, "image_tag_mutability_exclusion_filter", false);
  public get imageTagMutabilityExclusionFilter() {
    return this._imageTagMutabilityExclusionFilter;
  }
  public putImageTagMutabilityExclusionFilter(value: EcrRepositoryImageTagMutabilityExclusionFilter[] | cdktn.IResolvable) {
    this._imageTagMutabilityExclusionFilter.internalValue = value;
  }
  public resetImageTagMutabilityExclusionFilter() {
    this._imageTagMutabilityExclusionFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagMutabilityExclusionFilterInput() {
    return this._imageTagMutabilityExclusionFilter.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcrRepositoryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcrRepositoryTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force_delete: cdktn.booleanToTerraform(this._forceDelete),
      id: cdktn.stringToTerraform(this._id),
      image_tag_mutability: cdktn.stringToTerraform(this._imageTagMutability),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      encryption_configuration: cdktn.listMapper(ecrRepositoryEncryptionConfigurationToTerraform, true)(this._encryptionConfiguration.internalValue),
      image_scanning_configuration: ecrRepositoryImageScanningConfigurationToTerraform(this._imageScanningConfiguration.internalValue),
      image_tag_mutability_exclusion_filter: cdktn.listMapper(ecrRepositoryImageTagMutabilityExclusionFilterToTerraform, true)(this._imageTagMutabilityExclusionFilter.internalValue),
      timeouts: ecrRepositoryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force_delete: {
        value: cdktn.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_tag_mutability: {
        value: cdktn.stringToHclTerraform(this._imageTagMutability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      encryption_configuration: {
        value: cdktn.listMapperHcl(ecrRepositoryEncryptionConfigurationToHclTerraform, true)(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcrRepositoryEncryptionConfigurationList",
      },
      image_scanning_configuration: {
        value: ecrRepositoryImageScanningConfigurationToHclTerraform(this._imageScanningConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcrRepositoryImageScanningConfigurationList",
      },
      image_tag_mutability_exclusion_filter: {
        value: cdktn.listMapperHcl(ecrRepositoryImageTagMutabilityExclusionFilterToHclTerraform, true)(this._imageTagMutabilityExclusionFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcrRepositoryImageTagMutabilityExclusionFilterList",
      },
      timeouts: {
        value: ecrRepositoryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcrRepositoryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
