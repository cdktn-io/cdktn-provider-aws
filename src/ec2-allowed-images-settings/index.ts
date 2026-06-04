/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/ec2_allowed_images_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2AllowedImagesSettingsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/ec2_allowed_images_settings#region Ec2AllowedImagesSettings#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/ec2_allowed_images_settings#state Ec2AllowedImagesSettings#state}
  */
  readonly state: string;
  /**
  * image_criterion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/ec2_allowed_images_settings#image_criterion Ec2AllowedImagesSettings#image_criterion}
  */
  readonly imageCriterion?: Ec2AllowedImagesSettingsImageCriterion[] | cdktn.IResolvable;
}
export interface Ec2AllowedImagesSettingsImageCriterionCreationDateCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/ec2_allowed_images_settings#maximum_days_since_created Ec2AllowedImagesSettings#maximum_days_since_created}
  */
  readonly maximumDaysSinceCreated?: number;
}

export function ec2AllowedImagesSettingsImageCriterionCreationDateConditionToTerraform(struct?: Ec2AllowedImagesSettingsImageCriterionCreationDateCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_days_since_created: cdktn.numberToTerraform(struct!.maximumDaysSinceCreated),
  }
}


export function ec2AllowedImagesSettingsImageCriterionCreationDateConditionToHclTerraform(struct?: Ec2AllowedImagesSettingsImageCriterionCreationDateCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_days_since_created: {
      value: cdktn.numberToHclTerraform(struct!.maximumDaysSinceCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2AllowedImagesSettingsImageCriterionCreationDateCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumDaysSinceCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumDaysSinceCreated = this._maximumDaysSinceCreated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2AllowedImagesSettingsImageCriterionCreationDateCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumDaysSinceCreated = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumDaysSinceCreated = value.maximumDaysSinceCreated;
    }
  }

  // maximum_days_since_created - computed: false, optional: true, required: false
  private _maximumDaysSinceCreated?: number; 
  public get maximumDaysSinceCreated() {
    return this.getNumberAttribute('maximum_days_since_created');
  }
  public set maximumDaysSinceCreated(value: number) {
    this._maximumDaysSinceCreated = value;
  }
  public resetMaximumDaysSinceCreated() {
    this._maximumDaysSinceCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumDaysSinceCreatedInput() {
    return this._maximumDaysSinceCreated;
  }
}

export class Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList extends cdktn.ComplexList {
  public internalValue? : Ec2AllowedImagesSettingsImageCriterionCreationDateCondition[] | cdktn.IResolvable

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
  public get(index: number): Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference {
    return new Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/ec2_allowed_images_settings#maximum_days_since_deprecated Ec2AllowedImagesSettings#maximum_days_since_deprecated}
  */
  readonly maximumDaysSinceDeprecated?: number;
}

export function ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionToTerraform(struct?: Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_days_since_deprecated: cdktn.numberToTerraform(struct!.maximumDaysSinceDeprecated),
  }
}


export function ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionToHclTerraform(struct?: Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_days_since_deprecated: {
      value: cdktn.numberToHclTerraform(struct!.maximumDaysSinceDeprecated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumDaysSinceDeprecated !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumDaysSinceDeprecated = this._maximumDaysSinceDeprecated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumDaysSinceDeprecated = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumDaysSinceDeprecated = value.maximumDaysSinceDeprecated;
    }
  }

  // maximum_days_since_deprecated - computed: false, optional: true, required: false
  private _maximumDaysSinceDeprecated?: number; 
  public get maximumDaysSinceDeprecated() {
    return this.getNumberAttribute('maximum_days_since_deprecated');
  }
  public set maximumDaysSinceDeprecated(value: number) {
    this._maximumDaysSinceDeprecated = value;
  }
  public resetMaximumDaysSinceDeprecated() {
    this._maximumDaysSinceDeprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumDaysSinceDeprecatedInput() {
    return this._maximumDaysSinceDeprecated;
  }
}

export class Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList extends cdktn.ComplexList {
  public internalValue? : Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition[] | cdktn.IResolvable

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
  public get(index: number): Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference {
    return new Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2AllowedImagesSettingsImageCriterion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/ec2_allowed_images_settings#image_names Ec2AllowedImagesSettings#image_names}
  */
  readonly imageNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/ec2_allowed_images_settings#image_providers Ec2AllowedImagesSettings#image_providers}
  */
  readonly imageProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/ec2_allowed_images_settings#marketplace_product_codes Ec2AllowedImagesSettings#marketplace_product_codes}
  */
  readonly marketplaceProductCodes?: string[];
  /**
  * creation_date_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/ec2_allowed_images_settings#creation_date_condition Ec2AllowedImagesSettings#creation_date_condition}
  */
  readonly creationDateCondition?: Ec2AllowedImagesSettingsImageCriterionCreationDateCondition[] | cdktn.IResolvable;
  /**
  * deprecation_time_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/ec2_allowed_images_settings#deprecation_time_condition Ec2AllowedImagesSettings#deprecation_time_condition}
  */
  readonly deprecationTimeCondition?: Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition[] | cdktn.IResolvable;
}

export function ec2AllowedImagesSettingsImageCriterionToTerraform(struct?: Ec2AllowedImagesSettingsImageCriterion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.imageNames),
    image_providers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.imageProviders),
    marketplace_product_codes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.marketplaceProductCodes),
    creation_date_condition: cdktn.listMapper(ec2AllowedImagesSettingsImageCriterionCreationDateConditionToTerraform, true)(struct!.creationDateCondition),
    deprecation_time_condition: cdktn.listMapper(ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionToTerraform, true)(struct!.deprecationTimeCondition),
  }
}


export function ec2AllowedImagesSettingsImageCriterionToHclTerraform(struct?: Ec2AllowedImagesSettingsImageCriterion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.imageNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    image_providers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.imageProviders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    marketplace_product_codes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.marketplaceProductCodes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    creation_date_condition: {
      value: cdktn.listMapperHcl(ec2AllowedImagesSettingsImageCriterionCreationDateConditionToHclTerraform, true)(struct!.creationDateCondition),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList",
    },
    deprecation_time_condition: {
      value: cdktn.listMapperHcl(ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionToHclTerraform, true)(struct!.deprecationTimeCondition),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2AllowedImagesSettingsImageCriterionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2AllowedImagesSettingsImageCriterion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageNames = this._imageNames;
    }
    if (this._imageProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageProviders = this._imageProviders;
    }
    if (this._marketplaceProductCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketplaceProductCodes = this._marketplaceProductCodes;
    }
    if (this._creationDateCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationDateCondition = this._creationDateCondition?.internalValue;
    }
    if (this._deprecationTimeCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecationTimeCondition = this._deprecationTimeCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2AllowedImagesSettingsImageCriterion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageNames = undefined;
      this._imageProviders = undefined;
      this._marketplaceProductCodes = undefined;
      this._creationDateCondition.internalValue = undefined;
      this._deprecationTimeCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageNames = value.imageNames;
      this._imageProviders = value.imageProviders;
      this._marketplaceProductCodes = value.marketplaceProductCodes;
      this._creationDateCondition.internalValue = value.creationDateCondition;
      this._deprecationTimeCondition.internalValue = value.deprecationTimeCondition;
    }
  }

  // image_names - computed: false, optional: true, required: false
  private _imageNames?: string[]; 
  public get imageNames() {
    return cdktn.Fn.tolist(this.getListAttribute('image_names'));
  }
  public set imageNames(value: string[]) {
    this._imageNames = value;
  }
  public resetImageNames() {
    this._imageNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNamesInput() {
    return this._imageNames;
  }

  // image_providers - computed: false, optional: true, required: false
  private _imageProviders?: string[]; 
  public get imageProviders() {
    return cdktn.Fn.tolist(this.getListAttribute('image_providers'));
  }
  public set imageProviders(value: string[]) {
    this._imageProviders = value;
  }
  public resetImageProviders() {
    this._imageProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageProvidersInput() {
    return this._imageProviders;
  }

  // marketplace_product_codes - computed: false, optional: true, required: false
  private _marketplaceProductCodes?: string[]; 
  public get marketplaceProductCodes() {
    return cdktn.Fn.tolist(this.getListAttribute('marketplace_product_codes'));
  }
  public set marketplaceProductCodes(value: string[]) {
    this._marketplaceProductCodes = value;
  }
  public resetMarketplaceProductCodes() {
    this._marketplaceProductCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketplaceProductCodesInput() {
    return this._marketplaceProductCodes;
  }

  // creation_date_condition - computed: false, optional: true, required: false
  private _creationDateCondition = new Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList(this, "creation_date_condition", false);
  public get creationDateCondition() {
    return this._creationDateCondition;
  }
  public putCreationDateCondition(value: Ec2AllowedImagesSettingsImageCriterionCreationDateCondition[] | cdktn.IResolvable) {
    this._creationDateCondition.internalValue = value;
  }
  public resetCreationDateCondition() {
    this._creationDateCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationDateConditionInput() {
    return this._creationDateCondition.internalValue;
  }

  // deprecation_time_condition - computed: false, optional: true, required: false
  private _deprecationTimeCondition = new Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList(this, "deprecation_time_condition", false);
  public get deprecationTimeCondition() {
    return this._deprecationTimeCondition;
  }
  public putDeprecationTimeCondition(value: Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition[] | cdktn.IResolvable) {
    this._deprecationTimeCondition.internalValue = value;
  }
  public resetDeprecationTimeCondition() {
    this._deprecationTimeCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecationTimeConditionInput() {
    return this._deprecationTimeCondition.internalValue;
  }
}

export class Ec2AllowedImagesSettingsImageCriterionList extends cdktn.ComplexList {
  public internalValue? : Ec2AllowedImagesSettingsImageCriterion[] | cdktn.IResolvable

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
  public get(index: number): Ec2AllowedImagesSettingsImageCriterionOutputReference {
    return new Ec2AllowedImagesSettingsImageCriterionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/ec2_allowed_images_settings aws_ec2_allowed_images_settings}
*/
export class Ec2AllowedImagesSettings extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_allowed_images_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2AllowedImagesSettings resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2AllowedImagesSettings to import
  * @param importFromId The id of the existing Ec2AllowedImagesSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/ec2_allowed_images_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2AllowedImagesSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_allowed_images_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/ec2_allowed_images_settings aws_ec2_allowed_images_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2AllowedImagesSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2AllowedImagesSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_allowed_images_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.48.0',
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
    this._state = config.state;
    this._imageCriterion.internalValue = config.imageCriterion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // image_criterion - computed: false, optional: true, required: false
  private _imageCriterion = new Ec2AllowedImagesSettingsImageCriterionList(this, "image_criterion", false);
  public get imageCriterion() {
    return this._imageCriterion;
  }
  public putImageCriterion(value: Ec2AllowedImagesSettingsImageCriterion[] | cdktn.IResolvable) {
    this._imageCriterion.internalValue = value;
  }
  public resetImageCriterion() {
    this._imageCriterion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageCriterionInput() {
    return this._imageCriterion.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      state: cdktn.stringToTerraform(this._state),
      image_criterion: cdktn.listMapper(ec2AllowedImagesSettingsImageCriterionToTerraform, true)(this._imageCriterion.internalValue),
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
      state: {
        value: cdktn.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_criterion: {
        value: cdktn.listMapperHcl(ec2AllowedImagesSettingsImageCriterionToHclTerraform, true)(this._imageCriterion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2AllowedImagesSettingsImageCriterionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
