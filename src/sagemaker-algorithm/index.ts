/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerAlgorithmConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#algorithm_description SagemakerAlgorithm#algorithm_description}
  */
  readonly algorithmDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#algorithm_name SagemakerAlgorithm#algorithm_name}
  */
  readonly algorithmName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#certify_for_marketplace SagemakerAlgorithm#certify_for_marketplace}
  */
  readonly certifyForMarketplace?: boolean | cdktn.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#region SagemakerAlgorithm#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#tags SagemakerAlgorithm#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * inference_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#inference_specification SagemakerAlgorithm#inference_specification}
  */
  readonly inferenceSpecification?: SagemakerAlgorithmInferenceSpecification[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#timeouts SagemakerAlgorithm#timeouts}
  */
  readonly timeouts?: SagemakerAlgorithmTimeouts;
  /**
  * training_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#training_specification SagemakerAlgorithm#training_specification}
  */
  readonly trainingSpecification?: SagemakerAlgorithmTrainingSpecification[] | cdktn.IResolvable;
  /**
  * validation_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#validation_specification SagemakerAlgorithm#validation_specification}
  */
  readonly validationSpecification?: SagemakerAlgorithmValidationSpecification[] | cdktn.IResolvable;
}
export interface SagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#compression_type SagemakerAlgorithm#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#etag SagemakerAlgorithm#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#s3_data_type SagemakerAlgorithm#s3_data_type}
  */
  readonly s3DataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#s3_uri SagemakerAlgorithm#s3_uri}
  */
  readonly s3Uri: string;
}

export function sagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSourceToTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    etag: cdktn.stringToTerraform(struct!.etag),
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSourceToHclTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etag: {
      value: cdktn.stringToHclTerraform(struct!.etag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._etag !== undefined) {
      hasAnyValues = true;
      internalValueResult.etag = this._etag;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._etag = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._etag = value.etag;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
    }
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // etag - computed: false, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // s3_data_type - computed: false, optional: false, required: true
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}

export class SagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSourceOutputReference {
    return new SagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmInferenceSpecificationContainersBaseModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#hub_content_name SagemakerAlgorithm#hub_content_name}
  */
  readonly hubContentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#hub_content_version SagemakerAlgorithm#hub_content_version}
  */
  readonly hubContentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#recipe_name SagemakerAlgorithm#recipe_name}
  */
  readonly recipeName?: string;
}

export function sagemakerAlgorithmInferenceSpecificationContainersBaseModelToTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainersBaseModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hub_content_name: cdktn.stringToTerraform(struct!.hubContentName),
    hub_content_version: cdktn.stringToTerraform(struct!.hubContentVersion),
    recipe_name: cdktn.stringToTerraform(struct!.recipeName),
  }
}


export function sagemakerAlgorithmInferenceSpecificationContainersBaseModelToHclTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainersBaseModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hub_content_name: {
      value: cdktn.stringToHclTerraform(struct!.hubContentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hub_content_version: {
      value: cdktn.stringToHclTerraform(struct!.hubContentVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipe_name: {
      value: cdktn.stringToHclTerraform(struct!.recipeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmInferenceSpecificationContainersBaseModelOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmInferenceSpecificationContainersBaseModel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hubContentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubContentName = this._hubContentName;
    }
    if (this._hubContentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubContentVersion = this._hubContentVersion;
    }
    if (this._recipeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipeName = this._recipeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmInferenceSpecificationContainersBaseModel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hubContentName = undefined;
      this._hubContentVersion = undefined;
      this._recipeName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hubContentName = value.hubContentName;
      this._hubContentVersion = value.hubContentVersion;
      this._recipeName = value.recipeName;
    }
  }

  // hub_content_name - computed: false, optional: true, required: false
  private _hubContentName?: string; 
  public get hubContentName() {
    return this.getStringAttribute('hub_content_name');
  }
  public set hubContentName(value: string) {
    this._hubContentName = value;
  }
  public resetHubContentName() {
    this._hubContentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubContentNameInput() {
    return this._hubContentName;
  }

  // hub_content_version - computed: false, optional: true, required: false
  private _hubContentVersion?: string; 
  public get hubContentVersion() {
    return this.getStringAttribute('hub_content_version');
  }
  public set hubContentVersion(value: string) {
    this._hubContentVersion = value;
  }
  public resetHubContentVersion() {
    this._hubContentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubContentVersionInput() {
    return this._hubContentVersion;
  }

  // recipe_name - computed: false, optional: true, required: false
  private _recipeName?: string; 
  public get recipeName() {
    return this.getStringAttribute('recipe_name');
  }
  public set recipeName(value: string) {
    this._recipeName = value;
  }
  public resetRecipeName() {
    this._recipeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipeNameInput() {
    return this._recipeName;
  }
}

export class SagemakerAlgorithmInferenceSpecificationContainersBaseModelList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmInferenceSpecificationContainersBaseModel[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmInferenceSpecificationContainersBaseModelOutputReference {
    return new SagemakerAlgorithmInferenceSpecificationContainersBaseModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#hub_content_arn SagemakerAlgorithm#hub_content_arn}
  */
  readonly hubContentArn?: string;
}

export function sagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfigToTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hub_content_arn: cdktn.stringToTerraform(struct!.hubContentArn),
  }
}


export function sagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfigToHclTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hub_content_arn: {
      value: cdktn.stringToHclTerraform(struct!.hubContentArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hubContentArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubContentArn = this._hubContentArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hubContentArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hubContentArn = value.hubContentArn;
    }
  }

  // hub_content_arn - computed: false, optional: true, required: false
  private _hubContentArn?: string; 
  public get hubContentArn() {
    return this.getStringAttribute('hub_content_arn');
  }
  public set hubContentArn(value: string) {
    this._hubContentArn = value;
  }
  public resetHubContentArn() {
    this._hubContentArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubContentArnInput() {
    return this._hubContentArn;
  }
}

export class SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference {
    return new SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#accept_eula SagemakerAlgorithm#accept_eula}
  */
  readonly acceptEula?: boolean | cdktn.IResolvable;
}

export function sagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
  }
}


export function sagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept_eula: {
      value: cdktn.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptEula = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: false, optional: true, required: false
  private _acceptEula?: boolean | cdktn.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktn.IResolvable) {
    this._acceptEula = value;
  }
  public resetAcceptEula() {
    this._acceptEula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}

export class SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference {
    return new SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#compression_type SagemakerAlgorithm#compression_type}
  */
  readonly compressionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#etag SagemakerAlgorithm#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#manifest_etag SagemakerAlgorithm#manifest_etag}
  */
  readonly manifestEtag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#manifest_s3_uri SagemakerAlgorithm#manifest_s3_uri}
  */
  readonly manifestS3Uri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#s3_data_type SagemakerAlgorithm#s3_data_type}
  */
  readonly s3DataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#s3_uri SagemakerAlgorithm#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * hub_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#hub_access_config SagemakerAlgorithm#hub_access_config}
  */
  readonly hubAccessConfig?: SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfig[] | cdktn.IResolvable;
  /**
  * model_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#model_access_config SagemakerAlgorithm#model_access_config}
  */
  readonly modelAccessConfig?: SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceToTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    etag: cdktn.stringToTerraform(struct!.etag),
    manifest_etag: cdktn.stringToTerraform(struct!.manifestEtag),
    manifest_s3_uri: cdktn.stringToTerraform(struct!.manifestS3Uri),
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    hub_access_config: cdktn.listMapper(sagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfigToTerraform, true)(struct!.hubAccessConfig),
    model_access_config: cdktn.listMapper(sagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigToTerraform, true)(struct!.modelAccessConfig),
  }
}


export function sagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceToHclTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etag: {
      value: cdktn.stringToHclTerraform(struct!.etag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manifest_etag: {
      value: cdktn.stringToHclTerraform(struct!.manifestEtag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manifest_s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.manifestS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hub_access_config: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfigToHclTerraform, true)(struct!.hubAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfigList",
    },
    model_access_config: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigToHclTerraform, true)(struct!.modelAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._etag !== undefined) {
      hasAnyValues = true;
      internalValueResult.etag = this._etag;
    }
    if (this._manifestEtag !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestEtag = this._manifestEtag;
    }
    if (this._manifestS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestS3Uri = this._manifestS3Uri;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._hubAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubAccessConfig = this._hubAccessConfig?.internalValue;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._etag = undefined;
      this._manifestEtag = undefined;
      this._manifestS3Uri = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
      this._hubAccessConfig.internalValue = undefined;
      this._modelAccessConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._etag = value.etag;
      this._manifestEtag = value.manifestEtag;
      this._manifestS3Uri = value.manifestS3Uri;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
      this._hubAccessConfig.internalValue = value.hubAccessConfig;
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
    }
  }

  // compression_type - computed: false, optional: false, required: true
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // etag - computed: false, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // manifest_etag - computed: false, optional: true, required: false
  private _manifestEtag?: string; 
  public get manifestEtag() {
    return this.getStringAttribute('manifest_etag');
  }
  public set manifestEtag(value: string) {
    this._manifestEtag = value;
  }
  public resetManifestEtag() {
    this._manifestEtag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestEtagInput() {
    return this._manifestEtag;
  }

  // manifest_s3_uri - computed: false, optional: true, required: false
  private _manifestS3Uri?: string; 
  public get manifestS3Uri() {
    return this.getStringAttribute('manifest_s3_uri');
  }
  public set manifestS3Uri(value: string) {
    this._manifestS3Uri = value;
  }
  public resetManifestS3Uri() {
    this._manifestS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestS3UriInput() {
    return this._manifestS3Uri;
  }

  // s3_data_type - computed: false, optional: false, required: true
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // hub_access_config - computed: false, optional: true, required: false
  private _hubAccessConfig = new SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfigList(this, "hub_access_config", false);
  public get hubAccessConfig() {
    return this._hubAccessConfig;
  }
  public putHubAccessConfig(value: SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceHubAccessConfig[] | cdktn.IResolvable) {
    this._hubAccessConfig.internalValue = value;
  }
  public resetHubAccessConfig() {
    this._hubAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubAccessConfigInput() {
    return this._hubAccessConfig.internalValue;
  }

  // model_access_config - computed: false, optional: true, required: false
  private _modelAccessConfig = new SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigList(this, "model_access_config", false);
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig[] | cdktn.IResolvable) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
  }
}

export class SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceOutputReference {
    return new SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmInferenceSpecificationContainersModelDataSource {
  /**
  * s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#s3_data_source SagemakerAlgorithm#s3_data_source}
  */
  readonly s3DataSource?: SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSource[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmInferenceSpecificationContainersModelDataSourceToTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainersModelDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_data_source: cdktn.listMapper(sagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceToTerraform, true)(struct!.s3DataSource),
  }
}


export function sagemakerAlgorithmInferenceSpecificationContainersModelDataSourceToHclTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainersModelDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_data_source: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceToHclTerraform, true)(struct!.s3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmInferenceSpecificationContainersModelDataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmInferenceSpecificationContainersModelDataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // s3_data_source - computed: false, optional: true, required: false
  private _s3DataSource = new SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSourceList(this, "s3_data_source", false);
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceS3DataSource[] | cdktn.IResolvable) {
    this._s3DataSource.internalValue = value;
  }
  public resetS3DataSource() {
    this._s3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}

export class SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmInferenceSpecificationContainersModelDataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceOutputReference {
    return new SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmInferenceSpecificationContainersModelInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#data_input_config SagemakerAlgorithm#data_input_config}
  */
  readonly dataInputConfig?: string;
}

export function sagemakerAlgorithmInferenceSpecificationContainersModelInputToTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainersModelInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_input_config: cdktn.stringToTerraform(struct!.dataInputConfig),
  }
}


export function sagemakerAlgorithmInferenceSpecificationContainersModelInputToHclTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainersModelInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_input_config: {
      value: cdktn.stringToHclTerraform(struct!.dataInputConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmInferenceSpecificationContainersModelInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataInputConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataInputConfig = this._dataInputConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmInferenceSpecificationContainersModelInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataInputConfig = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataInputConfig = value.dataInputConfig;
    }
  }

  // data_input_config - computed: false, optional: true, required: false
  private _dataInputConfig?: string; 
  public get dataInputConfig() {
    return this.getStringAttribute('data_input_config');
  }
  public set dataInputConfig(value: string) {
    this._dataInputConfig = value;
  }
  public resetDataInputConfig() {
    this._dataInputConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInputConfigInput() {
    return this._dataInputConfig;
  }
}

export class SagemakerAlgorithmInferenceSpecificationContainersModelInputList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmInferenceSpecificationContainersModelInput[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference {
    return new SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmInferenceSpecificationContainers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#container_hostname SagemakerAlgorithm#container_hostname}
  */
  readonly containerHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#environment SagemakerAlgorithm#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#framework SagemakerAlgorithm#framework}
  */
  readonly framework?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#framework_version SagemakerAlgorithm#framework_version}
  */
  readonly frameworkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#image SagemakerAlgorithm#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#image_digest SagemakerAlgorithm#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#is_checkpoint SagemakerAlgorithm#is_checkpoint}
  */
  readonly isCheckpoint?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#model_data_etag SagemakerAlgorithm#model_data_etag}
  */
  readonly modelDataEtag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#model_data_url SagemakerAlgorithm#model_data_url}
  */
  readonly modelDataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#nearest_model_name SagemakerAlgorithm#nearest_model_name}
  */
  readonly nearestModelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#product_id SagemakerAlgorithm#product_id}
  */
  readonly productId?: string;
  /**
  * additional_s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#additional_s3_data_source SagemakerAlgorithm#additional_s3_data_source}
  */
  readonly additionalS3DataSource?: SagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSource[] | cdktn.IResolvable;
  /**
  * base_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#base_model SagemakerAlgorithm#base_model}
  */
  readonly baseModel?: SagemakerAlgorithmInferenceSpecificationContainersBaseModel[] | cdktn.IResolvable;
  /**
  * model_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#model_data_source SagemakerAlgorithm#model_data_source}
  */
  readonly modelDataSource?: SagemakerAlgorithmInferenceSpecificationContainersModelDataSource[] | cdktn.IResolvable;
  /**
  * model_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#model_input SagemakerAlgorithm#model_input}
  */
  readonly modelInput?: SagemakerAlgorithmInferenceSpecificationContainersModelInput[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmInferenceSpecificationContainersToTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_hostname: cdktn.stringToTerraform(struct!.containerHostname),
    environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
    framework: cdktn.stringToTerraform(struct!.framework),
    framework_version: cdktn.stringToTerraform(struct!.frameworkVersion),
    image: cdktn.stringToTerraform(struct!.image),
    image_digest: cdktn.stringToTerraform(struct!.imageDigest),
    is_checkpoint: cdktn.booleanToTerraform(struct!.isCheckpoint),
    model_data_etag: cdktn.stringToTerraform(struct!.modelDataEtag),
    model_data_url: cdktn.stringToTerraform(struct!.modelDataUrl),
    nearest_model_name: cdktn.stringToTerraform(struct!.nearestModelName),
    product_id: cdktn.stringToTerraform(struct!.productId),
    additional_s3_data_source: cdktn.listMapper(sagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSourceToTerraform, true)(struct!.additionalS3DataSource),
    base_model: cdktn.listMapper(sagemakerAlgorithmInferenceSpecificationContainersBaseModelToTerraform, true)(struct!.baseModel),
    model_data_source: cdktn.listMapper(sagemakerAlgorithmInferenceSpecificationContainersModelDataSourceToTerraform, true)(struct!.modelDataSource),
    model_input: cdktn.listMapper(sagemakerAlgorithmInferenceSpecificationContainersModelInputToTerraform, true)(struct!.modelInput),
  }
}


export function sagemakerAlgorithmInferenceSpecificationContainersToHclTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_hostname: {
      value: cdktn.stringToHclTerraform(struct!.containerHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    framework: {
      value: cdktn.stringToHclTerraform(struct!.framework),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    framework_version: {
      value: cdktn.stringToHclTerraform(struct!.frameworkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_digest: {
      value: cdktn.stringToHclTerraform(struct!.imageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_checkpoint: {
      value: cdktn.booleanToHclTerraform(struct!.isCheckpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    model_data_etag: {
      value: cdktn.stringToHclTerraform(struct!.modelDataEtag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_data_url: {
      value: cdktn.stringToHclTerraform(struct!.modelDataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nearest_model_name: {
      value: cdktn.stringToHclTerraform(struct!.nearestModelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_id: {
      value: cdktn.stringToHclTerraform(struct!.productId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_s3_data_source: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSourceToHclTerraform, true)(struct!.additionalS3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSourceList",
    },
    base_model: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmInferenceSpecificationContainersBaseModelToHclTerraform, true)(struct!.baseModel),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmInferenceSpecificationContainersBaseModelList",
    },
    model_data_source: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmInferenceSpecificationContainersModelDataSourceToHclTerraform, true)(struct!.modelDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceList",
    },
    model_input: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmInferenceSpecificationContainersModelInputToHclTerraform, true)(struct!.modelInput),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmInferenceSpecificationContainersModelInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmInferenceSpecificationContainersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmInferenceSpecificationContainers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerHostname = this._containerHostname;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._framework !== undefined) {
      hasAnyValues = true;
      internalValueResult.framework = this._framework;
    }
    if (this._frameworkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameworkVersion = this._frameworkVersion;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDigest = this._imageDigest;
    }
    if (this._isCheckpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCheckpoint = this._isCheckpoint;
    }
    if (this._modelDataEtag !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataEtag = this._modelDataEtag;
    }
    if (this._modelDataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataUrl = this._modelDataUrl;
    }
    if (this._nearestModelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nearestModelName = this._nearestModelName;
    }
    if (this._productId !== undefined) {
      hasAnyValues = true;
      internalValueResult.productId = this._productId;
    }
    if (this._additionalS3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalS3DataSource = this._additionalS3DataSource?.internalValue;
    }
    if (this._baseModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseModel = this._baseModel?.internalValue;
    }
    if (this._modelDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataSource = this._modelDataSource?.internalValue;
    }
    if (this._modelInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelInput = this._modelInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmInferenceSpecificationContainers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerHostname = undefined;
      this._environment = undefined;
      this._framework = undefined;
      this._frameworkVersion = undefined;
      this._image = undefined;
      this._imageDigest = undefined;
      this._isCheckpoint = undefined;
      this._modelDataEtag = undefined;
      this._modelDataUrl = undefined;
      this._nearestModelName = undefined;
      this._productId = undefined;
      this._additionalS3DataSource.internalValue = undefined;
      this._baseModel.internalValue = undefined;
      this._modelDataSource.internalValue = undefined;
      this._modelInput.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerHostname = value.containerHostname;
      this._environment = value.environment;
      this._framework = value.framework;
      this._frameworkVersion = value.frameworkVersion;
      this._image = value.image;
      this._imageDigest = value.imageDigest;
      this._isCheckpoint = value.isCheckpoint;
      this._modelDataEtag = value.modelDataEtag;
      this._modelDataUrl = value.modelDataUrl;
      this._nearestModelName = value.nearestModelName;
      this._productId = value.productId;
      this._additionalS3DataSource.internalValue = value.additionalS3DataSource;
      this._baseModel.internalValue = value.baseModel;
      this._modelDataSource.internalValue = value.modelDataSource;
      this._modelInput.internalValue = value.modelInput;
    }
  }

  // container_hostname - computed: false, optional: true, required: false
  private _containerHostname?: string; 
  public get containerHostname() {
    return this.getStringAttribute('container_hostname');
  }
  public set containerHostname(value: string) {
    this._containerHostname = value;
  }
  public resetContainerHostname() {
    this._containerHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerHostnameInput() {
    return this._containerHostname;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // framework - computed: false, optional: true, required: false
  private _framework?: string; 
  public get framework() {
    return this.getStringAttribute('framework');
  }
  public set framework(value: string) {
    this._framework = value;
  }
  public resetFramework() {
    this._framework = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkInput() {
    return this._framework;
  }

  // framework_version - computed: false, optional: true, required: false
  private _frameworkVersion?: string; 
  public get frameworkVersion() {
    return this.getStringAttribute('framework_version');
  }
  public set frameworkVersion(value: string) {
    this._frameworkVersion = value;
  }
  public resetFrameworkVersion() {
    this._frameworkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkVersionInput() {
    return this._frameworkVersion;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_digest - computed: true, optional: true, required: false
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

  // is_checkpoint - computed: true, optional: true, required: false
  private _isCheckpoint?: boolean | cdktn.IResolvable; 
  public get isCheckpoint() {
    return this.getBooleanAttribute('is_checkpoint');
  }
  public set isCheckpoint(value: boolean | cdktn.IResolvable) {
    this._isCheckpoint = value;
  }
  public resetIsCheckpoint() {
    this._isCheckpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCheckpointInput() {
    return this._isCheckpoint;
  }

  // model_data_etag - computed: false, optional: true, required: false
  private _modelDataEtag?: string; 
  public get modelDataEtag() {
    return this.getStringAttribute('model_data_etag');
  }
  public set modelDataEtag(value: string) {
    this._modelDataEtag = value;
  }
  public resetModelDataEtag() {
    this._modelDataEtag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataEtagInput() {
    return this._modelDataEtag;
  }

  // model_data_url - computed: false, optional: true, required: false
  private _modelDataUrl?: string; 
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }
  public set modelDataUrl(value: string) {
    this._modelDataUrl = value;
  }
  public resetModelDataUrl() {
    this._modelDataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataUrlInput() {
    return this._modelDataUrl;
  }

  // nearest_model_name - computed: false, optional: true, required: false
  private _nearestModelName?: string; 
  public get nearestModelName() {
    return this.getStringAttribute('nearest_model_name');
  }
  public set nearestModelName(value: string) {
    this._nearestModelName = value;
  }
  public resetNearestModelName() {
    this._nearestModelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nearestModelNameInput() {
    return this._nearestModelName;
  }

  // product_id - computed: false, optional: true, required: false
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // additional_s3_data_source - computed: false, optional: true, required: false
  private _additionalS3DataSource = new SagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSourceList(this, "additional_s3_data_source", false);
  public get additionalS3DataSource() {
    return this._additionalS3DataSource;
  }
  public putAdditionalS3DataSource(value: SagemakerAlgorithmInferenceSpecificationContainersAdditionalS3DataSource[] | cdktn.IResolvable) {
    this._additionalS3DataSource.internalValue = value;
  }
  public resetAdditionalS3DataSource() {
    this._additionalS3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalS3DataSourceInput() {
    return this._additionalS3DataSource.internalValue;
  }

  // base_model - computed: false, optional: true, required: false
  private _baseModel = new SagemakerAlgorithmInferenceSpecificationContainersBaseModelList(this, "base_model", false);
  public get baseModel() {
    return this._baseModel;
  }
  public putBaseModel(value: SagemakerAlgorithmInferenceSpecificationContainersBaseModel[] | cdktn.IResolvable) {
    this._baseModel.internalValue = value;
  }
  public resetBaseModel() {
    this._baseModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseModelInput() {
    return this._baseModel.internalValue;
  }

  // model_data_source - computed: false, optional: true, required: false
  private _modelDataSource = new SagemakerAlgorithmInferenceSpecificationContainersModelDataSourceList(this, "model_data_source", false);
  public get modelDataSource() {
    return this._modelDataSource;
  }
  public putModelDataSource(value: SagemakerAlgorithmInferenceSpecificationContainersModelDataSource[] | cdktn.IResolvable) {
    this._modelDataSource.internalValue = value;
  }
  public resetModelDataSource() {
    this._modelDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataSourceInput() {
    return this._modelDataSource.internalValue;
  }

  // model_input - computed: false, optional: true, required: false
  private _modelInput = new SagemakerAlgorithmInferenceSpecificationContainersModelInputList(this, "model_input", false);
  public get modelInput() {
    return this._modelInput;
  }
  public putModelInput(value: SagemakerAlgorithmInferenceSpecificationContainersModelInput[] | cdktn.IResolvable) {
    this._modelInput.internalValue = value;
  }
  public resetModelInput() {
    this._modelInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInputInput() {
    return this._modelInput.internalValue;
  }
}

export class SagemakerAlgorithmInferenceSpecificationContainersList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmInferenceSpecificationContainers[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmInferenceSpecificationContainersOutputReference {
    return new SagemakerAlgorithmInferenceSpecificationContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmInferenceSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#supported_content_types SagemakerAlgorithm#supported_content_types}
  */
  readonly supportedContentTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#supported_realtime_inference_instance_types SagemakerAlgorithm#supported_realtime_inference_instance_types}
  */
  readonly supportedRealtimeInferenceInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#supported_response_mime_types SagemakerAlgorithm#supported_response_mime_types}
  */
  readonly supportedResponseMimeTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#supported_transform_instance_types SagemakerAlgorithm#supported_transform_instance_types}
  */
  readonly supportedTransformInstanceTypes?: string[];
  /**
  * containers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#containers SagemakerAlgorithm#containers}
  */
  readonly containers?: SagemakerAlgorithmInferenceSpecificationContainers[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmInferenceSpecificationToTerraform(struct?: SagemakerAlgorithmInferenceSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    supported_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedContentTypes),
    supported_realtime_inference_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
    supported_response_mime_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedResponseMimeTypes),
    supported_transform_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedTransformInstanceTypes),
    containers: cdktn.listMapper(sagemakerAlgorithmInferenceSpecificationContainersToTerraform, true)(struct!.containers),
  }
}


export function sagemakerAlgorithmInferenceSpecificationToHclTerraform(struct?: SagemakerAlgorithmInferenceSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    supported_content_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedContentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_realtime_inference_instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_response_mime_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedResponseMimeTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_transform_instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedTransformInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    containers: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmInferenceSpecificationContainersToHclTerraform, true)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmInferenceSpecificationContainersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmInferenceSpecificationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmInferenceSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._supportedContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedContentTypes = this._supportedContentTypes;
    }
    if (this._supportedRealtimeInferenceInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedRealtimeInferenceInstanceTypes = this._supportedRealtimeInferenceInstanceTypes;
    }
    if (this._supportedResponseMimeTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedResponseMimeTypes = this._supportedResponseMimeTypes;
    }
    if (this._supportedTransformInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedTransformInstanceTypes = this._supportedTransformInstanceTypes;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmInferenceSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._supportedContentTypes = undefined;
      this._supportedRealtimeInferenceInstanceTypes = undefined;
      this._supportedResponseMimeTypes = undefined;
      this._supportedTransformInstanceTypes = undefined;
      this._containers.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._supportedContentTypes = value.supportedContentTypes;
      this._supportedRealtimeInferenceInstanceTypes = value.supportedRealtimeInferenceInstanceTypes;
      this._supportedResponseMimeTypes = value.supportedResponseMimeTypes;
      this._supportedTransformInstanceTypes = value.supportedTransformInstanceTypes;
      this._containers.internalValue = value.containers;
    }
  }

  // supported_content_types - computed: false, optional: true, required: false
  private _supportedContentTypes?: string[]; 
  public get supportedContentTypes() {
    return this.getListAttribute('supported_content_types');
  }
  public set supportedContentTypes(value: string[]) {
    this._supportedContentTypes = value;
  }
  public resetSupportedContentTypes() {
    this._supportedContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedContentTypesInput() {
    return this._supportedContentTypes;
  }

  // supported_realtime_inference_instance_types - computed: false, optional: true, required: false
  private _supportedRealtimeInferenceInstanceTypes?: string[]; 
  public get supportedRealtimeInferenceInstanceTypes() {
    return this.getListAttribute('supported_realtime_inference_instance_types');
  }
  public set supportedRealtimeInferenceInstanceTypes(value: string[]) {
    this._supportedRealtimeInferenceInstanceTypes = value;
  }
  public resetSupportedRealtimeInferenceInstanceTypes() {
    this._supportedRealtimeInferenceInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedRealtimeInferenceInstanceTypesInput() {
    return this._supportedRealtimeInferenceInstanceTypes;
  }

  // supported_response_mime_types - computed: false, optional: true, required: false
  private _supportedResponseMimeTypes?: string[]; 
  public get supportedResponseMimeTypes() {
    return this.getListAttribute('supported_response_mime_types');
  }
  public set supportedResponseMimeTypes(value: string[]) {
    this._supportedResponseMimeTypes = value;
  }
  public resetSupportedResponseMimeTypes() {
    this._supportedResponseMimeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedResponseMimeTypesInput() {
    return this._supportedResponseMimeTypes;
  }

  // supported_transform_instance_types - computed: false, optional: true, required: false
  private _supportedTransformInstanceTypes?: string[]; 
  public get supportedTransformInstanceTypes() {
    return this.getListAttribute('supported_transform_instance_types');
  }
  public set supportedTransformInstanceTypes(value: string[]) {
    this._supportedTransformInstanceTypes = value;
  }
  public resetSupportedTransformInstanceTypes() {
    this._supportedTransformInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedTransformInstanceTypesInput() {
    return this._supportedTransformInstanceTypes;
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new SagemakerAlgorithmInferenceSpecificationContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: SagemakerAlgorithmInferenceSpecificationContainers[] | cdktn.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }
}

export class SagemakerAlgorithmInferenceSpecificationList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmInferenceSpecification[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmInferenceSpecificationOutputReference {
    return new SagemakerAlgorithmInferenceSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#create SagemakerAlgorithm#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#delete SagemakerAlgorithm#delete}
  */
  readonly delete?: string;
}

export function sagemakerAlgorithmTimeoutsToTerraform(struct?: SagemakerAlgorithmTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function sagemakerAlgorithmTimeoutsToHclTerraform(struct?: SagemakerAlgorithmTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class SagemakerAlgorithmTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerAlgorithmTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
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
export interface SagemakerAlgorithmTrainingSpecificationAdditionalS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#compression_type SagemakerAlgorithm#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#etag SagemakerAlgorithm#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#s3_data_type SagemakerAlgorithm#s3_data_type}
  */
  readonly s3DataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#s3_uri SagemakerAlgorithm#s3_uri}
  */
  readonly s3Uri: string;
}

export function sagemakerAlgorithmTrainingSpecificationAdditionalS3DataSourceToTerraform(struct?: SagemakerAlgorithmTrainingSpecificationAdditionalS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    etag: cdktn.stringToTerraform(struct!.etag),
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerAlgorithmTrainingSpecificationAdditionalS3DataSourceToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecificationAdditionalS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etag: {
      value: cdktn.stringToHclTerraform(struct!.etag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationAdditionalS3DataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmTrainingSpecificationAdditionalS3DataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._etag !== undefined) {
      hasAnyValues = true;
      internalValueResult.etag = this._etag;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecificationAdditionalS3DataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._etag = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._etag = value.etag;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
    }
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // etag - computed: false, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // s3_data_type - computed: false, optional: false, required: true
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}

export class SagemakerAlgorithmTrainingSpecificationAdditionalS3DataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmTrainingSpecificationAdditionalS3DataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmTrainingSpecificationAdditionalS3DataSourceOutputReference {
    return new SagemakerAlgorithmTrainingSpecificationAdditionalS3DataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmTrainingSpecificationMetricDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#regex SagemakerAlgorithm#regex}
  */
  readonly regex: string;
}

export function sagemakerAlgorithmTrainingSpecificationMetricDefinitionsToTerraform(struct?: SagemakerAlgorithmTrainingSpecificationMetricDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    regex: cdktn.stringToTerraform(struct!.regex),
  }
}


export function sagemakerAlgorithmTrainingSpecificationMetricDefinitionsToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecificationMetricDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmTrainingSpecificationMetricDefinitions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecificationMetricDefinitions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
    }
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

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmTrainingSpecificationMetricDefinitions[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference {
    return new SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#values SagemakerAlgorithm#values}
  */
  readonly values: string[];
}

export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationToTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference {
    return new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}
  */
  readonly maxValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}
  */
  readonly minValue: string;
}

export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationToTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.stringToTerraform(struct!.maxValue),
    min_value: cdktn.stringToTerraform(struct!.minValue),
  }
}


export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktn.stringToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}

export class SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference {
    return new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}
  */
  readonly maxValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}
  */
  readonly minValue: string;
}

export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationToTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.stringToTerraform(struct!.maxValue),
    min_value: cdktn.stringToTerraform(struct!.minValue),
  }
}


export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktn.stringToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}

export class SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference {
    return new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange {
  /**
  * categorical_parameter_range_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#categorical_parameter_range_specification SagemakerAlgorithm#categorical_parameter_range_specification}
  */
  readonly categoricalParameterRangeSpecification?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification[] | cdktn.IResolvable;
  /**
  * continuous_parameter_range_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#continuous_parameter_range_specification SagemakerAlgorithm#continuous_parameter_range_specification}
  */
  readonly continuousParameterRangeSpecification?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification[] | cdktn.IResolvable;
  /**
  * integer_parameter_range_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#integer_parameter_range_specification SagemakerAlgorithm#integer_parameter_range_specification}
  */
  readonly integerParameterRangeSpecification?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeToTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    categorical_parameter_range_specification: cdktn.listMapper(sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationToTerraform, true)(struct!.categoricalParameterRangeSpecification),
    continuous_parameter_range_specification: cdktn.listMapper(sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationToTerraform, true)(struct!.continuousParameterRangeSpecification),
    integer_parameter_range_specification: cdktn.listMapper(sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationToTerraform, true)(struct!.integerParameterRangeSpecification),
  }
}


export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    categorical_parameter_range_specification: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationToHclTerraform, true)(struct!.categoricalParameterRangeSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationList",
    },
    continuous_parameter_range_specification: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationToHclTerraform, true)(struct!.continuousParameterRangeSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationList",
    },
    integer_parameter_range_specification: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationToHclTerraform, true)(struct!.integerParameterRangeSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoricalParameterRangeSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoricalParameterRangeSpecification = this._categoricalParameterRangeSpecification?.internalValue;
    }
    if (this._continuousParameterRangeSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousParameterRangeSpecification = this._continuousParameterRangeSpecification?.internalValue;
    }
    if (this._integerParameterRangeSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerParameterRangeSpecification = this._integerParameterRangeSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoricalParameterRangeSpecification.internalValue = undefined;
      this._continuousParameterRangeSpecification.internalValue = undefined;
      this._integerParameterRangeSpecification.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoricalParameterRangeSpecification.internalValue = value.categoricalParameterRangeSpecification;
      this._continuousParameterRangeSpecification.internalValue = value.continuousParameterRangeSpecification;
      this._integerParameterRangeSpecification.internalValue = value.integerParameterRangeSpecification;
    }
  }

  // categorical_parameter_range_specification - computed: false, optional: true, required: false
  private _categoricalParameterRangeSpecification = new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationList(this, "categorical_parameter_range_specification", false);
  public get categoricalParameterRangeSpecification() {
    return this._categoricalParameterRangeSpecification;
  }
  public putCategoricalParameterRangeSpecification(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification[] | cdktn.IResolvable) {
    this._categoricalParameterRangeSpecification.internalValue = value;
  }
  public resetCategoricalParameterRangeSpecification() {
    this._categoricalParameterRangeSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoricalParameterRangeSpecificationInput() {
    return this._categoricalParameterRangeSpecification.internalValue;
  }

  // continuous_parameter_range_specification - computed: false, optional: true, required: false
  private _continuousParameterRangeSpecification = new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationList(this, "continuous_parameter_range_specification", false);
  public get continuousParameterRangeSpecification() {
    return this._continuousParameterRangeSpecification;
  }
  public putContinuousParameterRangeSpecification(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification[] | cdktn.IResolvable) {
    this._continuousParameterRangeSpecification.internalValue = value;
  }
  public resetContinuousParameterRangeSpecification() {
    this._continuousParameterRangeSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousParameterRangeSpecificationInput() {
    return this._continuousParameterRangeSpecification.internalValue;
  }

  // integer_parameter_range_specification - computed: false, optional: true, required: false
  private _integerParameterRangeSpecification = new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationList(this, "integer_parameter_range_specification", false);
  public get integerParameterRangeSpecification() {
    return this._integerParameterRangeSpecification;
  }
  public putIntegerParameterRangeSpecification(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification[] | cdktn.IResolvable) {
    this._integerParameterRangeSpecification.internalValue = value;
  }
  public resetIntegerParameterRangeSpecification() {
    this._integerParameterRangeSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerParameterRangeSpecificationInput() {
    return this._integerParameterRangeSpecification.internalValue;
  }
}

export class SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference {
    return new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#default_value SagemakerAlgorithm#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#description SagemakerAlgorithm#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#is_required SagemakerAlgorithm#is_required}
  */
  readonly isRequired?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#is_tunable SagemakerAlgorithm#is_tunable}
  */
  readonly isTunable?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#type SagemakerAlgorithm#type}
  */
  readonly type: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#range SagemakerAlgorithm#range}
  */
  readonly range?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersToTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    description: cdktn.stringToTerraform(struct!.description),
    is_required: cdktn.booleanToTerraform(struct!.isRequired),
    is_tunable: cdktn.booleanToTerraform(struct!.isTunable),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
    range: cdktn.listMapper(sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeToTerraform, true)(struct!.range),
  }
}


export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_required: {
      value: cdktn.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_tunable: {
      value: cdktn.booleanToHclTerraform(struct!.isTunable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._isTunable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isTunable = this._isTunable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._isRequired = undefined;
      this._isTunable = undefined;
      this._name = undefined;
      this._type = undefined;
      this._range.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._isRequired = value.isRequired;
      this._isTunable = value.isTunable;
      this._name = value.name;
      this._type = value.type;
      this._range.internalValue = value.range;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // is_required - computed: true, optional: true, required: false
  private _isRequired?: boolean | cdktn.IResolvable; 
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | cdktn.IResolvable) {
    this._isRequired = value;
  }
  public resetIsRequired() {
    this._isRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequiredInput() {
    return this._isRequired;
  }

  // is_tunable - computed: true, optional: true, required: false
  private _isTunable?: boolean | cdktn.IResolvable; 
  public get isTunable() {
    return this.getBooleanAttribute('is_tunable');
  }
  public set isTunable(value: boolean | cdktn.IResolvable) {
    this._isTunable = value;
  }
  public resetIsTunable() {
    this._isTunable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTunableInput() {
    return this._isTunable;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // range - computed: false, optional: true, required: false
  private _range = new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange[] | cdktn.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}

export class SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference {
    return new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#metric_name SagemakerAlgorithm#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#type SagemakerAlgorithm#type}
  */
  readonly type: string;
}

export function sagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsToTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function sagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._type = value.type;
    }
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference {
    return new SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmTrainingSpecificationTrainingChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#description SagemakerAlgorithm#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#is_required SagemakerAlgorithm#is_required}
  */
  readonly isRequired?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#supported_compression_types SagemakerAlgorithm#supported_compression_types}
  */
  readonly supportedCompressionTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#supported_content_types SagemakerAlgorithm#supported_content_types}
  */
  readonly supportedContentTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#supported_input_modes SagemakerAlgorithm#supported_input_modes}
  */
  readonly supportedInputModes: string[];
}

export function sagemakerAlgorithmTrainingSpecificationTrainingChannelsToTerraform(struct?: SagemakerAlgorithmTrainingSpecificationTrainingChannels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    is_required: cdktn.booleanToTerraform(struct!.isRequired),
    name: cdktn.stringToTerraform(struct!.name),
    supported_compression_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedCompressionTypes),
    supported_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedContentTypes),
    supported_input_modes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedInputModes),
  }
}


export function sagemakerAlgorithmTrainingSpecificationTrainingChannelsToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecificationTrainingChannels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_required: {
      value: cdktn.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supported_compression_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedCompressionTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_content_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedContentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_input_modes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedInputModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmTrainingSpecificationTrainingChannels | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._supportedCompressionTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedCompressionTypes = this._supportedCompressionTypes;
    }
    if (this._supportedContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedContentTypes = this._supportedContentTypes;
    }
    if (this._supportedInputModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedInputModes = this._supportedInputModes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecificationTrainingChannels | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._isRequired = undefined;
      this._name = undefined;
      this._supportedCompressionTypes = undefined;
      this._supportedContentTypes = undefined;
      this._supportedInputModes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._isRequired = value.isRequired;
      this._name = value.name;
      this._supportedCompressionTypes = value.supportedCompressionTypes;
      this._supportedContentTypes = value.supportedContentTypes;
      this._supportedInputModes = value.supportedInputModes;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // is_required - computed: true, optional: true, required: false
  private _isRequired?: boolean | cdktn.IResolvable; 
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | cdktn.IResolvable) {
    this._isRequired = value;
  }
  public resetIsRequired() {
    this._isRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequiredInput() {
    return this._isRequired;
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

  // supported_compression_types - computed: false, optional: true, required: false
  private _supportedCompressionTypes?: string[]; 
  public get supportedCompressionTypes() {
    return this.getListAttribute('supported_compression_types');
  }
  public set supportedCompressionTypes(value: string[]) {
    this._supportedCompressionTypes = value;
  }
  public resetSupportedCompressionTypes() {
    this._supportedCompressionTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedCompressionTypesInput() {
    return this._supportedCompressionTypes;
  }

  // supported_content_types - computed: false, optional: false, required: true
  private _supportedContentTypes?: string[]; 
  public get supportedContentTypes() {
    return this.getListAttribute('supported_content_types');
  }
  public set supportedContentTypes(value: string[]) {
    this._supportedContentTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedContentTypesInput() {
    return this._supportedContentTypes;
  }

  // supported_input_modes - computed: false, optional: false, required: true
  private _supportedInputModes?: string[]; 
  public get supportedInputModes() {
    return this.getListAttribute('supported_input_modes');
  }
  public set supportedInputModes(value: string[]) {
    this._supportedInputModes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedInputModesInput() {
    return this._supportedInputModes;
  }
}

export class SagemakerAlgorithmTrainingSpecificationTrainingChannelsList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmTrainingSpecificationTrainingChannels[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference {
    return new SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmTrainingSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#supported_training_instance_types SagemakerAlgorithm#supported_training_instance_types}
  */
  readonly supportedTrainingInstanceTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#supports_distributed_training SagemakerAlgorithm#supports_distributed_training}
  */
  readonly supportsDistributedTraining?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#training_image SagemakerAlgorithm#training_image}
  */
  readonly trainingImage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#training_image_digest SagemakerAlgorithm#training_image_digest}
  */
  readonly trainingImageDigest?: string;
  /**
  * additional_s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#additional_s3_data_source SagemakerAlgorithm#additional_s3_data_source}
  */
  readonly additionalS3DataSource?: SagemakerAlgorithmTrainingSpecificationAdditionalS3DataSource[] | cdktn.IResolvable;
  /**
  * metric_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#metric_definitions SagemakerAlgorithm#metric_definitions}
  */
  readonly metricDefinitions?: SagemakerAlgorithmTrainingSpecificationMetricDefinitions[] | cdktn.IResolvable;
  /**
  * supported_hyper_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#supported_hyper_parameters SagemakerAlgorithm#supported_hyper_parameters}
  */
  readonly supportedHyperParameters?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters[] | cdktn.IResolvable;
  /**
  * supported_tuning_job_objective_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#supported_tuning_job_objective_metrics SagemakerAlgorithm#supported_tuning_job_objective_metrics}
  */
  readonly supportedTuningJobObjectiveMetrics?: SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics[] | cdktn.IResolvable;
  /**
  * training_channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#training_channels SagemakerAlgorithm#training_channels}
  */
  readonly trainingChannels?: SagemakerAlgorithmTrainingSpecificationTrainingChannels[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmTrainingSpecificationToTerraform(struct?: SagemakerAlgorithmTrainingSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    supported_training_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedTrainingInstanceTypes),
    supports_distributed_training: cdktn.booleanToTerraform(struct!.supportsDistributedTraining),
    training_image: cdktn.stringToTerraform(struct!.trainingImage),
    training_image_digest: cdktn.stringToTerraform(struct!.trainingImageDigest),
    additional_s3_data_source: cdktn.listMapper(sagemakerAlgorithmTrainingSpecificationAdditionalS3DataSourceToTerraform, true)(struct!.additionalS3DataSource),
    metric_definitions: cdktn.listMapper(sagemakerAlgorithmTrainingSpecificationMetricDefinitionsToTerraform, true)(struct!.metricDefinitions),
    supported_hyper_parameters: cdktn.listMapper(sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersToTerraform, true)(struct!.supportedHyperParameters),
    supported_tuning_job_objective_metrics: cdktn.listMapper(sagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsToTerraform, true)(struct!.supportedTuningJobObjectiveMetrics),
    training_channels: cdktn.listMapper(sagemakerAlgorithmTrainingSpecificationTrainingChannelsToTerraform, true)(struct!.trainingChannels),
  }
}


export function sagemakerAlgorithmTrainingSpecificationToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    supported_training_instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedTrainingInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supports_distributed_training: {
      value: cdktn.booleanToHclTerraform(struct!.supportsDistributedTraining),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    training_image: {
      value: cdktn.stringToHclTerraform(struct!.trainingImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_image_digest: {
      value: cdktn.stringToHclTerraform(struct!.trainingImageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_s3_data_source: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmTrainingSpecificationAdditionalS3DataSourceToHclTerraform, true)(struct!.additionalS3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmTrainingSpecificationAdditionalS3DataSourceList",
    },
    metric_definitions: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmTrainingSpecificationMetricDefinitionsToHclTerraform, true)(struct!.metricDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList",
    },
    supported_hyper_parameters: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersToHclTerraform, true)(struct!.supportedHyperParameters),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList",
    },
    supported_tuning_job_objective_metrics: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsToHclTerraform, true)(struct!.supportedTuningJobObjectiveMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList",
    },
    training_channels: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmTrainingSpecificationTrainingChannelsToHclTerraform, true)(struct!.trainingChannels),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmTrainingSpecificationTrainingChannelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmTrainingSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._supportedTrainingInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedTrainingInstanceTypes = this._supportedTrainingInstanceTypes;
    }
    if (this._supportsDistributedTraining !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportsDistributedTraining = this._supportsDistributedTraining;
    }
    if (this._trainingImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingImage = this._trainingImage;
    }
    if (this._trainingImageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingImageDigest = this._trainingImageDigest;
    }
    if (this._additionalS3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalS3DataSource = this._additionalS3DataSource?.internalValue;
    }
    if (this._metricDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDefinitions = this._metricDefinitions?.internalValue;
    }
    if (this._supportedHyperParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedHyperParameters = this._supportedHyperParameters?.internalValue;
    }
    if (this._supportedTuningJobObjectiveMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedTuningJobObjectiveMetrics = this._supportedTuningJobObjectiveMetrics?.internalValue;
    }
    if (this._trainingChannels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingChannels = this._trainingChannels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._supportedTrainingInstanceTypes = undefined;
      this._supportsDistributedTraining = undefined;
      this._trainingImage = undefined;
      this._trainingImageDigest = undefined;
      this._additionalS3DataSource.internalValue = undefined;
      this._metricDefinitions.internalValue = undefined;
      this._supportedHyperParameters.internalValue = undefined;
      this._supportedTuningJobObjectiveMetrics.internalValue = undefined;
      this._trainingChannels.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._supportedTrainingInstanceTypes = value.supportedTrainingInstanceTypes;
      this._supportsDistributedTraining = value.supportsDistributedTraining;
      this._trainingImage = value.trainingImage;
      this._trainingImageDigest = value.trainingImageDigest;
      this._additionalS3DataSource.internalValue = value.additionalS3DataSource;
      this._metricDefinitions.internalValue = value.metricDefinitions;
      this._supportedHyperParameters.internalValue = value.supportedHyperParameters;
      this._supportedTuningJobObjectiveMetrics.internalValue = value.supportedTuningJobObjectiveMetrics;
      this._trainingChannels.internalValue = value.trainingChannels;
    }
  }

  // supported_training_instance_types - computed: false, optional: false, required: true
  private _supportedTrainingInstanceTypes?: string[]; 
  public get supportedTrainingInstanceTypes() {
    return this.getListAttribute('supported_training_instance_types');
  }
  public set supportedTrainingInstanceTypes(value: string[]) {
    this._supportedTrainingInstanceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedTrainingInstanceTypesInput() {
    return this._supportedTrainingInstanceTypes;
  }

  // supports_distributed_training - computed: true, optional: true, required: false
  private _supportsDistributedTraining?: boolean | cdktn.IResolvable; 
  public get supportsDistributedTraining() {
    return this.getBooleanAttribute('supports_distributed_training');
  }
  public set supportsDistributedTraining(value: boolean | cdktn.IResolvable) {
    this._supportsDistributedTraining = value;
  }
  public resetSupportsDistributedTraining() {
    this._supportsDistributedTraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsDistributedTrainingInput() {
    return this._supportsDistributedTraining;
  }

  // training_image - computed: false, optional: false, required: true
  private _trainingImage?: string; 
  public get trainingImage() {
    return this.getStringAttribute('training_image');
  }
  public set trainingImage(value: string) {
    this._trainingImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingImageInput() {
    return this._trainingImage;
  }

  // training_image_digest - computed: true, optional: true, required: false
  private _trainingImageDigest?: string; 
  public get trainingImageDigest() {
    return this.getStringAttribute('training_image_digest');
  }
  public set trainingImageDigest(value: string) {
    this._trainingImageDigest = value;
  }
  public resetTrainingImageDigest() {
    this._trainingImageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingImageDigestInput() {
    return this._trainingImageDigest;
  }

  // additional_s3_data_source - computed: false, optional: true, required: false
  private _additionalS3DataSource = new SagemakerAlgorithmTrainingSpecificationAdditionalS3DataSourceList(this, "additional_s3_data_source", false);
  public get additionalS3DataSource() {
    return this._additionalS3DataSource;
  }
  public putAdditionalS3DataSource(value: SagemakerAlgorithmTrainingSpecificationAdditionalS3DataSource[] | cdktn.IResolvable) {
    this._additionalS3DataSource.internalValue = value;
  }
  public resetAdditionalS3DataSource() {
    this._additionalS3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalS3DataSourceInput() {
    return this._additionalS3DataSource.internalValue;
  }

  // metric_definitions - computed: false, optional: true, required: false
  private _metricDefinitions = new SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList(this, "metric_definitions", false);
  public get metricDefinitions() {
    return this._metricDefinitions;
  }
  public putMetricDefinitions(value: SagemakerAlgorithmTrainingSpecificationMetricDefinitions[] | cdktn.IResolvable) {
    this._metricDefinitions.internalValue = value;
  }
  public resetMetricDefinitions() {
    this._metricDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDefinitionsInput() {
    return this._metricDefinitions.internalValue;
  }

  // supported_hyper_parameters - computed: false, optional: true, required: false
  private _supportedHyperParameters = new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList(this, "supported_hyper_parameters", false);
  public get supportedHyperParameters() {
    return this._supportedHyperParameters;
  }
  public putSupportedHyperParameters(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters[] | cdktn.IResolvable) {
    this._supportedHyperParameters.internalValue = value;
  }
  public resetSupportedHyperParameters() {
    this._supportedHyperParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedHyperParametersInput() {
    return this._supportedHyperParameters.internalValue;
  }

  // supported_tuning_job_objective_metrics - computed: false, optional: true, required: false
  private _supportedTuningJobObjectiveMetrics = new SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList(this, "supported_tuning_job_objective_metrics", false);
  public get supportedTuningJobObjectiveMetrics() {
    return this._supportedTuningJobObjectiveMetrics;
  }
  public putSupportedTuningJobObjectiveMetrics(value: SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics[] | cdktn.IResolvable) {
    this._supportedTuningJobObjectiveMetrics.internalValue = value;
  }
  public resetSupportedTuningJobObjectiveMetrics() {
    this._supportedTuningJobObjectiveMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedTuningJobObjectiveMetricsInput() {
    return this._supportedTuningJobObjectiveMetrics.internalValue;
  }

  // training_channels - computed: false, optional: true, required: false
  private _trainingChannels = new SagemakerAlgorithmTrainingSpecificationTrainingChannelsList(this, "training_channels", false);
  public get trainingChannels() {
    return this._trainingChannels;
  }
  public putTrainingChannels(value: SagemakerAlgorithmTrainingSpecificationTrainingChannels[] | cdktn.IResolvable) {
    this._trainingChannels.internalValue = value;
  }
  public resetTrainingChannels() {
    this._trainingChannels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingChannelsInput() {
    return this._trainingChannels.internalValue;
  }
}

export class SagemakerAlgorithmTrainingSpecificationList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmTrainingSpecification[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmTrainingSpecificationOutputReference {
    return new SagemakerAlgorithmTrainingSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#directory_path SagemakerAlgorithm#directory_path}
  */
  readonly directoryPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#file_system_access_mode SagemakerAlgorithm#file_system_access_mode}
  */
  readonly fileSystemAccessMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#file_system_id SagemakerAlgorithm#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#file_system_type SagemakerAlgorithm#file_system_type}
  */
  readonly fileSystemType: string;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    directory_path: cdktn.stringToTerraform(struct!.directoryPath),
    file_system_access_mode: cdktn.stringToTerraform(struct!.fileSystemAccessMode),
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    file_system_type: cdktn.stringToTerraform(struct!.fileSystemType),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    directory_path: {
      value: cdktn.stringToHclTerraform(struct!.directoryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_access_mode: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemAccessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_type: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryPath = this._directoryPath;
    }
    if (this._fileSystemAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemAccessMode = this._fileSystemAccessMode;
    }
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemType = this._fileSystemType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directoryPath = undefined;
      this._fileSystemAccessMode = undefined;
      this._fileSystemId = undefined;
      this._fileSystemType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directoryPath = value.directoryPath;
      this._fileSystemAccessMode = value.fileSystemAccessMode;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemType = value.fileSystemType;
    }
  }

  // directory_path - computed: false, optional: false, required: true
  private _directoryPath?: string; 
  public get directoryPath() {
    return this.getStringAttribute('directory_path');
  }
  public set directoryPath(value: string) {
    this._directoryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryPathInput() {
    return this._directoryPath;
  }

  // file_system_access_mode - computed: false, optional: false, required: true
  private _fileSystemAccessMode?: string; 
  public get fileSystemAccessMode() {
    return this.getStringAttribute('file_system_access_mode');
  }
  public set fileSystemAccessMode(value: string) {
    this._fileSystemAccessMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemAccessModeInput() {
    return this._fileSystemAccessMode;
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_type - computed: false, optional: false, required: true
  private _fileSystemType?: string; 
  public get fileSystemType() {
    return this.getStringAttribute('file_system_type');
  }
  public set fileSystemType(value: string) {
    this._fileSystemType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemTypeInput() {
    return this._fileSystemType;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#hub_content_arn SagemakerAlgorithm#hub_content_arn}
  */
  readonly hubContentArn?: string;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hub_content_arn: cdktn.stringToTerraform(struct!.hubContentArn),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hub_content_arn: {
      value: cdktn.stringToHclTerraform(struct!.hubContentArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hubContentArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubContentArn = this._hubContentArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hubContentArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hubContentArn = value.hubContentArn;
    }
  }

  // hub_content_arn - computed: false, optional: true, required: false
  private _hubContentArn?: string; 
  public get hubContentArn() {
    return this.getStringAttribute('hub_content_arn');
  }
  public set hubContentArn(value: string) {
    this._hubContentArn = value;
  }
  public resetHubContentArn() {
    this._hubContentArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubContentArnInput() {
    return this._hubContentArn;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#accept_eula SagemakerAlgorithm#accept_eula}
  */
  readonly acceptEula?: boolean | cdktn.IResolvable;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept_eula: {
      value: cdktn.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptEula = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: false, optional: true, required: false
  private _acceptEula?: boolean | cdktn.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktn.IResolvable) {
    this._acceptEula = value;
  }
  public resetAcceptEula() {
    this._acceptEula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#attribute_names SagemakerAlgorithm#attribute_names}
  */
  readonly attributeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#instance_group_names SagemakerAlgorithm#instance_group_names}
  */
  readonly instanceGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#s3_data_distribution_type SagemakerAlgorithm#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#s3_data_type SagemakerAlgorithm#s3_data_type}
  */
  readonly s3DataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#s3_uri SagemakerAlgorithm#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * hub_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#hub_access_config SagemakerAlgorithm#hub_access_config}
  */
  readonly hubAccessConfig?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfig[] | cdktn.IResolvable;
  /**
  * model_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#model_access_config SagemakerAlgorithm#model_access_config}
  */
  readonly modelAccessConfig?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfig[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.attributeNames),
    instance_group_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceGroupNames),
    s3_data_distribution_type: cdktn.stringToTerraform(struct!.s3DataDistributionType),
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    hub_access_config: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigToTerraform, true)(struct!.hubAccessConfig),
    model_access_config: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigToTerraform, true)(struct!.modelAccessConfig),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.attributeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    instance_group_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceGroupNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    s3_data_distribution_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataDistributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hub_access_config: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigToHclTerraform, true)(struct!.hubAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigList",
    },
    model_access_config: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigToHclTerraform, true)(struct!.modelAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNames = this._attributeNames;
    }
    if (this._instanceGroupNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupNames = this._instanceGroupNames;
    }
    if (this._s3DataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._hubAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubAccessConfig = this._hubAccessConfig?.internalValue;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeNames = undefined;
      this._instanceGroupNames = undefined;
      this._s3DataDistributionType = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
      this._hubAccessConfig.internalValue = undefined;
      this._modelAccessConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeNames = value.attributeNames;
      this._instanceGroupNames = value.instanceGroupNames;
      this._s3DataDistributionType = value.s3DataDistributionType;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
      this._hubAccessConfig.internalValue = value.hubAccessConfig;
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
    }
  }

  // attribute_names - computed: false, optional: true, required: false
  private _attributeNames?: string[]; 
  public get attributeNames() {
    return this.getListAttribute('attribute_names');
  }
  public set attributeNames(value: string[]) {
    this._attributeNames = value;
  }
  public resetAttributeNames() {
    this._attributeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNamesInput() {
    return this._attributeNames;
  }

  // instance_group_names - computed: false, optional: true, required: false
  private _instanceGroupNames?: string[]; 
  public get instanceGroupNames() {
    return this.getListAttribute('instance_group_names');
  }
  public set instanceGroupNames(value: string[]) {
    this._instanceGroupNames = value;
  }
  public resetInstanceGroupNames() {
    this._instanceGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNamesInput() {
    return this._instanceGroupNames;
  }

  // s3_data_distribution_type - computed: false, optional: true, required: false
  private _s3DataDistributionType?: string; 
  public get s3DataDistributionType() {
    return this.getStringAttribute('s3_data_distribution_type');
  }
  public set s3DataDistributionType(value: string) {
    this._s3DataDistributionType = value;
  }
  public resetS3DataDistributionType() {
    this._s3DataDistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataDistributionTypeInput() {
    return this._s3DataDistributionType;
  }

  // s3_data_type - computed: false, optional: false, required: true
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // hub_access_config - computed: false, optional: true, required: false
  private _hubAccessConfig = new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfigList(this, "hub_access_config", false);
  public get hubAccessConfig() {
    return this._hubAccessConfig;
  }
  public putHubAccessConfig(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceHubAccessConfig[] | cdktn.IResolvable) {
    this._hubAccessConfig.internalValue = value;
  }
  public resetHubAccessConfig() {
    this._hubAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubAccessConfigInput() {
    return this._hubAccessConfig.internalValue;
  }

  // model_access_config - computed: false, optional: true, required: false
  private _modelAccessConfig = new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfigList(this, "model_access_config", false);
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceModelAccessConfig[] | cdktn.IResolvable) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSource {
  /**
  * file_system_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#file_system_data_source SagemakerAlgorithm#file_system_data_source}
  */
  readonly fileSystemDataSource?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource[] | cdktn.IResolvable;
  /**
  * s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#s3_data_source SagemakerAlgorithm#s3_data_source}
  */
  readonly s3DataSource?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSource[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_data_source: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceToTerraform, true)(struct!.fileSystemDataSource),
    s3_data_source: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceToTerraform, true)(struct!.s3DataSource),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_data_source: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceToHclTerraform, true)(struct!.fileSystemDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceList",
    },
    s3_data_source: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceToHclTerraform, true)(struct!.s3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemDataSource = this._fileSystemDataSource?.internalValue;
    }
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemDataSource.internalValue = undefined;
      this._s3DataSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemDataSource.internalValue = value.fileSystemDataSource;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // file_system_data_source - computed: false, optional: true, required: false
  private _fileSystemDataSource = new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSourceList(this, "file_system_data_source", false);
  public get fileSystemDataSource() {
    return this._fileSystemDataSource;
  }
  public putFileSystemDataSource(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceFileSystemDataSource[] | cdktn.IResolvable) {
    this._fileSystemDataSource.internalValue = value;
  }
  public resetFileSystemDataSource() {
    this._fileSystemDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemDataSourceInput() {
    return this._fileSystemDataSource.internalValue;
  }

  // s3_data_source - computed: false, optional: true, required: false
  private _s3DataSource = new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSourceList(this, "s3_data_source", false);
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceS3DataSource[] | cdktn.IResolvable) {
    this._s3DataSource.internalValue = value;
  }
  public resetS3DataSource() {
    this._s3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#seed SagemakerAlgorithm#seed}
  */
  readonly seed: number;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfigToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    seed: cdktn.numberToTerraform(struct!.seed),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfigToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    seed: {
      value: cdktn.numberToHclTerraform(struct!.seed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seed = this._seed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seed = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seed = value.seed;
    }
  }

  // seed - computed: false, optional: false, required: true
  private _seed?: number; 
  public get seed() {
    return this.getNumberAttribute('seed');
  }
  public set seed(value: number) {
    this._seed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfigOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#channel_name SagemakerAlgorithm#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#compression_type SagemakerAlgorithm#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#content_type SagemakerAlgorithm#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#input_mode SagemakerAlgorithm#input_mode}
  */
  readonly inputMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#record_wrapper_type SagemakerAlgorithm#record_wrapper_type}
  */
  readonly recordWrapperType?: string;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#data_source SagemakerAlgorithm#data_source}
  */
  readonly dataSource?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSource[] | cdktn.IResolvable;
  /**
  * shuffle_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#shuffle_config SagemakerAlgorithm#shuffle_config}
  */
  readonly shuffleConfig?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfig[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_name: cdktn.stringToTerraform(struct!.channelName),
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    input_mode: cdktn.stringToTerraform(struct!.inputMode),
    record_wrapper_type: cdktn.stringToTerraform(struct!.recordWrapperType),
    data_source: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceToTerraform, true)(struct!.dataSource),
    shuffle_config: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfigToTerraform, true)(struct!.shuffleConfig),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_name: {
      value: cdktn.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_mode: {
      value: cdktn.stringToHclTerraform(struct!.inputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_wrapper_type: {
      value: cdktn.stringToHclTerraform(struct!.recordWrapperType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceList",
    },
    shuffle_config: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfigToHclTerraform, true)(struct!.shuffleConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._inputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputMode = this._inputMode;
    }
    if (this._recordWrapperType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordWrapperType = this._recordWrapperType;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._shuffleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shuffleConfig = this._shuffleConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelName = undefined;
      this._compressionType = undefined;
      this._contentType = undefined;
      this._inputMode = undefined;
      this._recordWrapperType = undefined;
      this._dataSource.internalValue = undefined;
      this._shuffleConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelName = value.channelName;
      this._compressionType = value.compressionType;
      this._contentType = value.contentType;
      this._inputMode = value.inputMode;
      this._recordWrapperType = value.recordWrapperType;
      this._dataSource.internalValue = value.dataSource;
      this._shuffleConfig.internalValue = value.shuffleConfig;
    }
  }

  // channel_name - computed: false, optional: false, required: true
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // input_mode - computed: true, optional: true, required: false
  private _inputMode?: string; 
  public get inputMode() {
    return this.getStringAttribute('input_mode');
  }
  public set inputMode(value: string) {
    this._inputMode = value;
  }
  public resetInputMode() {
    this._inputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputModeInput() {
    return this._inputMode;
  }

  // record_wrapper_type - computed: false, optional: true, required: false
  private _recordWrapperType?: string; 
  public get recordWrapperType() {
    return this.getStringAttribute('record_wrapper_type');
  }
  public set recordWrapperType(value: string) {
    this._recordWrapperType = value;
  }
  public resetRecordWrapperType() {
    this._recordWrapperType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordWrapperTypeInput() {
    return this._recordWrapperType;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigDataSource[] | cdktn.IResolvable) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // shuffle_config - computed: false, optional: true, required: false
  private _shuffleConfig = new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfigList(this, "shuffle_config", false);
  public get shuffleConfig() {
    return this._shuffleConfig;
  }
  public putShuffleConfig(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigShuffleConfig[] | cdktn.IResolvable) {
    this._shuffleConfig.internalValue = value;
  }
  public resetShuffleConfig() {
    this._shuffleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shuffleConfigInput() {
    return this._shuffleConfig.internalValue;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#compression_type SagemakerAlgorithm#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#kms_key_id SagemakerAlgorithm#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#s3_output_path SagemakerAlgorithm#s3_output_path}
  */
  readonly s3OutputPath: string;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfigToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfigToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._kmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._kmsKeyId = value.kmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // compression_type - computed: true, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // s3_output_path - computed: false, optional: false, required: true
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfigOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#instance_count SagemakerAlgorithm#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#instance_group_name SagemakerAlgorithm#instance_group_name}
  */
  readonly instanceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#instance_type SagemakerAlgorithm#instance_type}
  */
  readonly instanceType: string;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroupsToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_group_name: cdktn.stringToTerraform(struct!.instanceGroupName),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroupsToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_group_name: {
      value: cdktn.stringToHclTerraform(struct!.instanceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroups | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupName = this._instanceGroupName;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroups | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceGroupName = undefined;
      this._instanceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceGroupName = value.instanceGroupName;
      this._instanceType = value.instanceType;
    }
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_group_name - computed: false, optional: false, required: true
  private _instanceGroupName?: string; 
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }
  public set instanceGroupName(value: string) {
    this._instanceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNameInput() {
    return this._instanceGroupName;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroupsList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroups[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroupsOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#instance_count SagemakerAlgorithm#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#ultra_server_id SagemakerAlgorithm#ultra_server_id}
  */
  readonly ultraServerId?: string;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    ultra_server_id: cdktn.stringToTerraform(struct!.ultraServerId),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ultra_server_id: {
      value: cdktn.stringToHclTerraform(struct!.ultraServerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._ultraServerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ultraServerId = this._ultraServerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._ultraServerId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._ultraServerId = value.ultraServerId;
    }
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // ultra_server_id - computed: false, optional: true, required: false
  private _ultraServerId?: string; 
  public get ultraServerId() {
    return this.getStringAttribute('ultra_server_id');
  }
  public set ultraServerId(value: string) {
    this._ultraServerId = value;
  }
  public resetUltraServerId() {
    this._ultraServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ultraServerIdInput() {
    return this._ultraServerId;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecifications[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#enable_multiple_jobs SagemakerAlgorithm#enable_multiple_jobs}
  */
  readonly enableMultipleJobs?: boolean | cdktn.IResolvable;
  /**
  * placement_specifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#placement_specifications SagemakerAlgorithm#placement_specifications}
  */
  readonly placementSpecifications?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecifications[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_multiple_jobs: cdktn.booleanToTerraform(struct!.enableMultipleJobs),
    placement_specifications: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsToTerraform, true)(struct!.placementSpecifications),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_multiple_jobs: {
      value: cdktn.booleanToHclTerraform(struct!.enableMultipleJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    placement_specifications: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsToHclTerraform, true)(struct!.placementSpecifications),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMultipleJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMultipleJobs = this._enableMultipleJobs;
    }
    if (this._placementSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementSpecifications = this._placementSpecifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableMultipleJobs = undefined;
      this._placementSpecifications.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableMultipleJobs = value.enableMultipleJobs;
      this._placementSpecifications.internalValue = value.placementSpecifications;
    }
  }

  // enable_multiple_jobs - computed: false, optional: true, required: false
  private _enableMultipleJobs?: boolean | cdktn.IResolvable; 
  public get enableMultipleJobs() {
    return this.getBooleanAttribute('enable_multiple_jobs');
  }
  public set enableMultipleJobs(value: boolean | cdktn.IResolvable) {
    this._enableMultipleJobs = value;
  }
  public resetEnableMultipleJobs() {
    this._enableMultipleJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultipleJobsInput() {
    return this._enableMultipleJobs;
  }

  // placement_specifications - computed: false, optional: true, required: false
  private _placementSpecifications = new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecificationsList(this, "placement_specifications", false);
  public get placementSpecifications() {
    return this._placementSpecifications;
  }
  public putPlacementSpecifications(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigPlacementSpecifications[] | cdktn.IResolvable) {
    this._placementSpecifications.internalValue = value;
  }
  public resetPlacementSpecifications() {
    this._placementSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementSpecificationsInput() {
    return this._placementSpecifications.internalValue;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#instance_count SagemakerAlgorithm#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#instance_type SagemakerAlgorithm#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#keep_alive_period_in_seconds SagemakerAlgorithm#keep_alive_period_in_seconds}
  */
  readonly keepAlivePeriodInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#training_plan_arn SagemakerAlgorithm#training_plan_arn}
  */
  readonly trainingPlanArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#volume_kms_key_id SagemakerAlgorithm#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#volume_size_in_gb SagemakerAlgorithm#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
  /**
  * instance_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#instance_groups SagemakerAlgorithm#instance_groups}
  */
  readonly instanceGroups?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroups[] | cdktn.IResolvable;
  /**
  * instance_placement_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#instance_placement_config SagemakerAlgorithm#instance_placement_config}
  */
  readonly instancePlacementConfig?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfig[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    keep_alive_period_in_seconds: cdktn.numberToTerraform(struct!.keepAlivePeriodInSeconds),
    training_plan_arn: cdktn.stringToTerraform(struct!.trainingPlanArn),
    volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    instance_groups: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroupsToTerraform, true)(struct!.instanceGroups),
    instance_placement_config: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigToTerraform, true)(struct!.instancePlacementConfig),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_alive_period_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.keepAlivePeriodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    training_plan_arn: {
      value: cdktn.stringToHclTerraform(struct!.trainingPlanArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_groups: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroupsToHclTerraform, true)(struct!.instanceGroups),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroupsList",
    },
    instance_placement_config: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigToHclTerraform, true)(struct!.instancePlacementConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._keepAlivePeriodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAlivePeriodInSeconds = this._keepAlivePeriodInSeconds;
    }
    if (this._trainingPlanArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingPlanArn = this._trainingPlanArn;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    if (this._instanceGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroups = this._instanceGroups?.internalValue;
    }
    if (this._instancePlacementConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePlacementConfig = this._instancePlacementConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._keepAlivePeriodInSeconds = undefined;
      this._trainingPlanArn = undefined;
      this._volumeKmsKeyId = undefined;
      this._volumeSizeInGb = undefined;
      this._instanceGroups.internalValue = undefined;
      this._instancePlacementConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._keepAlivePeriodInSeconds = value.keepAlivePeriodInSeconds;
      this._trainingPlanArn = value.trainingPlanArn;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._volumeSizeInGb = value.volumeSizeInGb;
      this._instanceGroups.internalValue = value.instanceGroups;
      this._instancePlacementConfig.internalValue = value.instancePlacementConfig;
    }
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // keep_alive_period_in_seconds - computed: true, optional: true, required: false
  private _keepAlivePeriodInSeconds?: number; 
  public get keepAlivePeriodInSeconds() {
    return this.getNumberAttribute('keep_alive_period_in_seconds');
  }
  public set keepAlivePeriodInSeconds(value: number) {
    this._keepAlivePeriodInSeconds = value;
  }
  public resetKeepAlivePeriodInSeconds() {
    this._keepAlivePeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAlivePeriodInSecondsInput() {
    return this._keepAlivePeriodInSeconds;
  }

  // training_plan_arn - computed: false, optional: true, required: false
  private _trainingPlanArn?: string; 
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
  public set trainingPlanArn(value: string) {
    this._trainingPlanArn = value;
  }
  public resetTrainingPlanArn() {
    this._trainingPlanArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingPlanArnInput() {
    return this._trainingPlanArn;
  }

  // volume_kms_key_id - computed: false, optional: true, required: false
  private _volumeKmsKeyId?: string; 
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }

  // instance_groups - computed: false, optional: true, required: false
  private _instanceGroups = new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroupsList(this, "instance_groups", false);
  public get instanceGroups() {
    return this._instanceGroups;
  }
  public putInstanceGroups(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstanceGroups[] | cdktn.IResolvable) {
    this._instanceGroups.internalValue = value;
  }
  public resetInstanceGroups() {
    this._instanceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupsInput() {
    return this._instanceGroups.internalValue;
  }

  // instance_placement_config - computed: false, optional: true, required: false
  private _instancePlacementConfig = new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfigList(this, "instance_placement_config", false);
  public get instancePlacementConfig() {
    return this._instancePlacementConfig;
  }
  public putInstancePlacementConfig(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigInstancePlacementConfig[] | cdktn.IResolvable) {
    this._instancePlacementConfig.internalValue = value;
  }
  public resetInstancePlacementConfig() {
    this._instancePlacementConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePlacementConfigInput() {
    return this._instancePlacementConfig.internalValue;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#max_pending_time_in_seconds SagemakerAlgorithm#max_pending_time_in_seconds}
  */
  readonly maxPendingTimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#max_runtime_in_seconds SagemakerAlgorithm#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#max_wait_time_in_seconds SagemakerAlgorithm#max_wait_time_in_seconds}
  */
  readonly maxWaitTimeInSeconds?: number;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingConditionToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_pending_time_in_seconds: cdktn.numberToTerraform(struct!.maxPendingTimeInSeconds),
    max_runtime_in_seconds: cdktn.numberToTerraform(struct!.maxRuntimeInSeconds),
    max_wait_time_in_seconds: cdktn.numberToTerraform(struct!.maxWaitTimeInSeconds),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingConditionToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_pending_time_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxPendingTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_runtime_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxRuntimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_wait_time_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxWaitTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPendingTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingTimeInSeconds = this._maxPendingTimeInSeconds;
    }
    if (this._maxRuntimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRuntimeInSeconds = this._maxRuntimeInSeconds;
    }
    if (this._maxWaitTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWaitTimeInSeconds = this._maxWaitTimeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPendingTimeInSeconds = undefined;
      this._maxRuntimeInSeconds = undefined;
      this._maxWaitTimeInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPendingTimeInSeconds = value.maxPendingTimeInSeconds;
      this._maxRuntimeInSeconds = value.maxRuntimeInSeconds;
      this._maxWaitTimeInSeconds = value.maxWaitTimeInSeconds;
    }
  }

  // max_pending_time_in_seconds - computed: true, optional: true, required: false
  private _maxPendingTimeInSeconds?: number; 
  public get maxPendingTimeInSeconds() {
    return this.getNumberAttribute('max_pending_time_in_seconds');
  }
  public set maxPendingTimeInSeconds(value: number) {
    this._maxPendingTimeInSeconds = value;
  }
  public resetMaxPendingTimeInSeconds() {
    this._maxPendingTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingTimeInSecondsInput() {
    return this._maxPendingTimeInSeconds;
  }

  // max_runtime_in_seconds - computed: false, optional: true, required: false
  private _maxRuntimeInSeconds?: number; 
  public get maxRuntimeInSeconds() {
    return this.getNumberAttribute('max_runtime_in_seconds');
  }
  public set maxRuntimeInSeconds(value: number) {
    this._maxRuntimeInSeconds = value;
  }
  public resetMaxRuntimeInSeconds() {
    this._maxRuntimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRuntimeInSecondsInput() {
    return this._maxRuntimeInSeconds;
  }

  // max_wait_time_in_seconds - computed: true, optional: true, required: false
  private _maxWaitTimeInSeconds?: number; 
  public get maxWaitTimeInSeconds() {
    return this.getNumberAttribute('max_wait_time_in_seconds');
  }
  public set maxWaitTimeInSeconds(value: number) {
    this._maxWaitTimeInSeconds = value;
  }
  public resetMaxWaitTimeInSeconds() {
    this._maxWaitTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitTimeInSecondsInput() {
    return this._maxWaitTimeInSeconds;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingConditionList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingCondition[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingConditionOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#hyper_parameters SagemakerAlgorithm#hyper_parameters}
  */
  readonly hyperParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#training_input_mode SagemakerAlgorithm#training_input_mode}
  */
  readonly trainingInputMode: string;
  /**
  * input_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#input_data_config SagemakerAlgorithm#input_data_config}
  */
  readonly inputDataConfig?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfig[] | cdktn.IResolvable;
  /**
  * output_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#output_data_config SagemakerAlgorithm#output_data_config}
  */
  readonly outputDataConfig?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfig[] | cdktn.IResolvable;
  /**
  * resource_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#resource_config SagemakerAlgorithm#resource_config}
  */
  readonly resourceConfig?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfig[] | cdktn.IResolvable;
  /**
  * stopping_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#stopping_condition SagemakerAlgorithm#stopping_condition}
  */
  readonly stoppingCondition?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingCondition[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hyper_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.hyperParameters),
    training_input_mode: cdktn.stringToTerraform(struct!.trainingInputMode),
    input_data_config: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigToTerraform, true)(struct!.inputDataConfig),
    output_data_config: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfigToTerraform, true)(struct!.outputDataConfig),
    resource_config: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigToTerraform, true)(struct!.resourceConfig),
    stopping_condition: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingConditionToTerraform, true)(struct!.stoppingCondition),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hyper_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.hyperParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    training_input_mode: {
      value: cdktn.stringToHclTerraform(struct!.trainingInputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_data_config: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigToHclTerraform, true)(struct!.inputDataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigList",
    },
    output_data_config: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfigToHclTerraform, true)(struct!.outputDataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfigList",
    },
    resource_config: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigToHclTerraform, true)(struct!.resourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigList",
    },
    stopping_condition: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingConditionToHclTerraform, true)(struct!.stoppingCondition),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hyperParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperParameters = this._hyperParameters;
    }
    if (this._trainingInputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingInputMode = this._trainingInputMode;
    }
    if (this._inputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputDataConfig = this._inputDataConfig?.internalValue;
    }
    if (this._outputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputDataConfig = this._outputDataConfig?.internalValue;
    }
    if (this._resourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfig = this._resourceConfig?.internalValue;
    }
    if (this._stoppingCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stoppingCondition = this._stoppingCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hyperParameters = undefined;
      this._trainingInputMode = undefined;
      this._inputDataConfig.internalValue = undefined;
      this._outputDataConfig.internalValue = undefined;
      this._resourceConfig.internalValue = undefined;
      this._stoppingCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hyperParameters = value.hyperParameters;
      this._trainingInputMode = value.trainingInputMode;
      this._inputDataConfig.internalValue = value.inputDataConfig;
      this._outputDataConfig.internalValue = value.outputDataConfig;
      this._resourceConfig.internalValue = value.resourceConfig;
      this._stoppingCondition.internalValue = value.stoppingCondition;
    }
  }

  // hyper_parameters - computed: false, optional: true, required: false
  private _hyperParameters?: { [key: string]: string }; 
  public get hyperParameters() {
    return this.getStringMapAttribute('hyper_parameters');
  }
  public set hyperParameters(value: { [key: string]: string }) {
    this._hyperParameters = value;
  }
  public resetHyperParameters() {
    this._hyperParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperParametersInput() {
    return this._hyperParameters;
  }

  // training_input_mode - computed: false, optional: false, required: true
  private _trainingInputMode?: string; 
  public get trainingInputMode() {
    return this.getStringAttribute('training_input_mode');
  }
  public set trainingInputMode(value: string) {
    this._trainingInputMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingInputModeInput() {
    return this._trainingInputMode;
  }

  // input_data_config - computed: false, optional: true, required: false
  private _inputDataConfig = new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfigList(this, "input_data_config", false);
  public get inputDataConfig() {
    return this._inputDataConfig;
  }
  public putInputDataConfig(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionInputDataConfig[] | cdktn.IResolvable) {
    this._inputDataConfig.internalValue = value;
  }
  public resetInputDataConfig() {
    this._inputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataConfigInput() {
    return this._inputDataConfig.internalValue;
  }

  // output_data_config - computed: false, optional: true, required: false
  private _outputDataConfig = new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfigList(this, "output_data_config", false);
  public get outputDataConfig() {
    return this._outputDataConfig;
  }
  public putOutputDataConfig(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputDataConfig[] | cdktn.IResolvable) {
    this._outputDataConfig.internalValue = value;
  }
  public resetOutputDataConfig() {
    this._outputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDataConfigInput() {
    return this._outputDataConfig.internalValue;
  }

  // resource_config - computed: false, optional: true, required: false
  private _resourceConfig = new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfigList(this, "resource_config", false);
  public get resourceConfig() {
    return this._resourceConfig;
  }
  public putResourceConfig(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionResourceConfig[] | cdktn.IResolvable) {
    this._resourceConfig.internalValue = value;
  }
  public resetResourceConfig() {
    this._resourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigInput() {
    return this._resourceConfig.internalValue;
  }

  // stopping_condition - computed: false, optional: true, required: false
  private _stoppingCondition = new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingConditionList(this, "stopping_condition", false);
  public get stoppingCondition() {
    return this._stoppingCondition;
  }
  public putStoppingCondition(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionStoppingCondition[] | cdktn.IResolvable) {
    this._stoppingCondition.internalValue = value;
  }
  public resetStoppingCondition() {
    this._stoppingCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppingConditionInput() {
    return this._stoppingCondition.internalValue;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinition[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#s3_data_type SagemakerAlgorithm#s3_data_type}
  */
  readonly s3DataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#s3_uri SagemakerAlgorithm#s3_uri}
  */
  readonly s3Uri: string;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
    }
  }

  // s3_data_type - computed: false, optional: false, required: true
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource {
  /**
  * s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#s3_data_source SagemakerAlgorithm#s3_data_source}
  */
  readonly s3DataSource?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_data_source: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceToTerraform, true)(struct!.s3DataSource),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_data_source: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceToHclTerraform, true)(struct!.s3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // s3_data_source - computed: false, optional: true, required: false
  private _s3DataSource = new SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceList(this, "s3_data_source", false);
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource[] | cdktn.IResolvable) {
    this._s3DataSource.internalValue = value;
  }
  public resetS3DataSource() {
    this._s3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#compression_type SagemakerAlgorithm#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#content_type SagemakerAlgorithm#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#split_type SagemakerAlgorithm#split_type}
  */
  readonly splitType?: string;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#data_source SagemakerAlgorithm#data_source}
  */
  readonly dataSource?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    split_type: cdktn.stringToTerraform(struct!.splitType),
    data_source: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceToTerraform, true)(struct!.dataSource),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_type: {
      value: cdktn.stringToHclTerraform(struct!.splitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._splitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitType = this._splitType;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._contentType = undefined;
      this._splitType = undefined;
      this._dataSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._contentType = value.contentType;
      this._splitType = value.splitType;
      this._dataSource.internalValue = value.dataSource;
    }
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // split_type - computed: false, optional: true, required: false
  private _splitType?: string; 
  public get splitType() {
    return this.getStringAttribute('split_type');
  }
  public set splitType(value: string) {
    this._splitType = value;
  }
  public resetSplitType() {
    this._splitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTypeInput() {
    return this._splitType;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource[] | cdktn.IResolvable) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#accept SagemakerAlgorithm#accept}
  */
  readonly accept?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#assemble_with SagemakerAlgorithm#assemble_with}
  */
  readonly assembleWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#kms_key_id SagemakerAlgorithm#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#s3_output_path SagemakerAlgorithm#s3_output_path}
  */
  readonly s3OutputPath: string;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept: cdktn.stringToTerraform(struct!.accept),
    assemble_with: cdktn.stringToTerraform(struct!.assembleWith),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept: {
      value: cdktn.stringToHclTerraform(struct!.accept),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assemble_with: {
      value: cdktn.stringToHclTerraform(struct!.assembleWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accept !== undefined) {
      hasAnyValues = true;
      internalValueResult.accept = this._accept;
    }
    if (this._assembleWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.assembleWith = this._assembleWith;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accept = undefined;
      this._assembleWith = undefined;
      this._kmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accept = value.accept;
      this._assembleWith = value.assembleWith;
      this._kmsKeyId = value.kmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // accept - computed: false, optional: true, required: false
  private _accept?: string; 
  public get accept() {
    return this.getStringAttribute('accept');
  }
  public set accept(value: string) {
    this._accept = value;
  }
  public resetAccept() {
    this._accept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptInput() {
    return this._accept;
  }

  // assemble_with - computed: false, optional: true, required: false
  private _assembleWith?: string; 
  public get assembleWith() {
    return this.getStringAttribute('assemble_with');
  }
  public set assembleWith(value: string) {
    this._assembleWith = value;
  }
  public resetAssembleWith() {
    this._assembleWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assembleWithInput() {
    return this._assembleWith;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // s3_output_path - computed: false, optional: false, required: true
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#instance_count SagemakerAlgorithm#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#instance_type SagemakerAlgorithm#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#transform_ami_version SagemakerAlgorithm#transform_ami_version}
  */
  readonly transformAmiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#volume_kms_key_id SagemakerAlgorithm#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    transform_ami_version: cdktn.stringToTerraform(struct!.transformAmiVersion),
    volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transform_ami_version: {
      value: cdktn.stringToHclTerraform(struct!.transformAmiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._transformAmiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformAmiVersion = this._transformAmiVersion;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._transformAmiVersion = undefined;
      this._volumeKmsKeyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._transformAmiVersion = value.transformAmiVersion;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
    }
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // transform_ami_version - computed: false, optional: true, required: false
  private _transformAmiVersion?: string; 
  public get transformAmiVersion() {
    return this.getStringAttribute('transform_ami_version');
  }
  public set transformAmiVersion(value: string) {
    this._transformAmiVersion = value;
  }
  public resetTransformAmiVersion() {
    this._transformAmiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformAmiVersionInput() {
    return this._transformAmiVersion;
  }

  // volume_kms_key_id - computed: false, optional: true, required: false
  private _volumeKmsKeyId?: string; 
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#batch_strategy SagemakerAlgorithm#batch_strategy}
  */
  readonly batchStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#environment SagemakerAlgorithm#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#max_concurrent_transforms SagemakerAlgorithm#max_concurrent_transforms}
  */
  readonly maxConcurrentTransforms?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#max_payload_in_mb SagemakerAlgorithm#max_payload_in_mb}
  */
  readonly maxPayloadInMb?: number;
  /**
  * transform_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#transform_input SagemakerAlgorithm#transform_input}
  */
  readonly transformInput?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput[] | cdktn.IResolvable;
  /**
  * transform_output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#transform_output SagemakerAlgorithm#transform_output}
  */
  readonly transformOutput?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput[] | cdktn.IResolvable;
  /**
  * transform_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#transform_resources SagemakerAlgorithm#transform_resources}
  */
  readonly transformResources?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_strategy: cdktn.stringToTerraform(struct!.batchStrategy),
    environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
    max_concurrent_transforms: cdktn.numberToTerraform(struct!.maxConcurrentTransforms),
    max_payload_in_mb: cdktn.numberToTerraform(struct!.maxPayloadInMb),
    transform_input: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputToTerraform, true)(struct!.transformInput),
    transform_output: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputToTerraform, true)(struct!.transformOutput),
    transform_resources: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesToTerraform, true)(struct!.transformResources),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_strategy: {
      value: cdktn.stringToHclTerraform(struct!.batchStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    max_concurrent_transforms: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentTransforms),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_payload_in_mb: {
      value: cdktn.numberToHclTerraform(struct!.maxPayloadInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transform_input: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputToHclTerraform, true)(struct!.transformInput),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputList",
    },
    transform_output: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputToHclTerraform, true)(struct!.transformOutput),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputList",
    },
    transform_resources: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesToHclTerraform, true)(struct!.transformResources),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchStrategy = this._batchStrategy;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._maxConcurrentTransforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentTransforms = this._maxConcurrentTransforms;
    }
    if (this._maxPayloadInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPayloadInMb = this._maxPayloadInMb;
    }
    if (this._transformInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformInput = this._transformInput?.internalValue;
    }
    if (this._transformOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformOutput = this._transformOutput?.internalValue;
    }
    if (this._transformResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformResources = this._transformResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchStrategy = undefined;
      this._environment = undefined;
      this._maxConcurrentTransforms = undefined;
      this._maxPayloadInMb = undefined;
      this._transformInput.internalValue = undefined;
      this._transformOutput.internalValue = undefined;
      this._transformResources.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchStrategy = value.batchStrategy;
      this._environment = value.environment;
      this._maxConcurrentTransforms = value.maxConcurrentTransforms;
      this._maxPayloadInMb = value.maxPayloadInMb;
      this._transformInput.internalValue = value.transformInput;
      this._transformOutput.internalValue = value.transformOutput;
      this._transformResources.internalValue = value.transformResources;
    }
  }

  // batch_strategy - computed: false, optional: true, required: false
  private _batchStrategy?: string; 
  public get batchStrategy() {
    return this.getStringAttribute('batch_strategy');
  }
  public set batchStrategy(value: string) {
    this._batchStrategy = value;
  }
  public resetBatchStrategy() {
    this._batchStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchStrategyInput() {
    return this._batchStrategy;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // max_concurrent_transforms - computed: false, optional: true, required: false
  private _maxConcurrentTransforms?: number; 
  public get maxConcurrentTransforms() {
    return this.getNumberAttribute('max_concurrent_transforms');
  }
  public set maxConcurrentTransforms(value: number) {
    this._maxConcurrentTransforms = value;
  }
  public resetMaxConcurrentTransforms() {
    this._maxConcurrentTransforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentTransformsInput() {
    return this._maxConcurrentTransforms;
  }

  // max_payload_in_mb - computed: false, optional: true, required: false
  private _maxPayloadInMb?: number; 
  public get maxPayloadInMb() {
    return this.getNumberAttribute('max_payload_in_mb');
  }
  public set maxPayloadInMb(value: number) {
    this._maxPayloadInMb = value;
  }
  public resetMaxPayloadInMb() {
    this._maxPayloadInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPayloadInMbInput() {
    return this._maxPayloadInMb;
  }

  // transform_input - computed: false, optional: true, required: false
  private _transformInput = new SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputList(this, "transform_input", false);
  public get transformInput() {
    return this._transformInput;
  }
  public putTransformInput(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput[] | cdktn.IResolvable) {
    this._transformInput.internalValue = value;
  }
  public resetTransformInput() {
    this._transformInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInputInput() {
    return this._transformInput.internalValue;
  }

  // transform_output - computed: false, optional: true, required: false
  private _transformOutput = new SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputList(this, "transform_output", false);
  public get transformOutput() {
    return this._transformOutput;
  }
  public putTransformOutput(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput[] | cdktn.IResolvable) {
    this._transformOutput.internalValue = value;
  }
  public resetTransformOutput() {
    this._transformOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformOutputInput() {
    return this._transformOutput.internalValue;
  }

  // transform_resources - computed: false, optional: true, required: false
  private _transformResources = new SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesList(this, "transform_resources", false);
  public get transformResources() {
    return this._transformResources;
  }
  public putTransformResources(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources[] | cdktn.IResolvable) {
    this._transformResources.internalValue = value;
  }
  public resetTransformResources() {
    this._transformResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformResourcesInput() {
    return this._transformResources.internalValue;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinition[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecificationValidationProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#profile_name SagemakerAlgorithm#profile_name}
  */
  readonly profileName: string;
  /**
  * training_job_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#training_job_definition SagemakerAlgorithm#training_job_definition}
  */
  readonly trainingJobDefinition?: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinition[] | cdktn.IResolvable;
  /**
  * transform_job_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#transform_job_definition SagemakerAlgorithm#transform_job_definition}
  */
  readonly transformJobDefinition?: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinition[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmValidationSpecificationValidationProfilesToTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfiles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    profile_name: cdktn.stringToTerraform(struct!.profileName),
    training_job_definition: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionToTerraform, true)(struct!.trainingJobDefinition),
    transform_job_definition: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionToTerraform, true)(struct!.transformJobDefinition),
  }
}


export function sagemakerAlgorithmValidationSpecificationValidationProfilesToHclTerraform(struct?: SagemakerAlgorithmValidationSpecificationValidationProfiles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    profile_name: {
      value: cdktn.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_job_definition: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionToHclTerraform, true)(struct!.trainingJobDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionList",
    },
    transform_job_definition: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionToHclTerraform, true)(struct!.transformJobDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecificationValidationProfiles | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    if (this._trainingJobDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingJobDefinition = this._trainingJobDefinition?.internalValue;
    }
    if (this._transformJobDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformJobDefinition = this._transformJobDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecificationValidationProfiles | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profileName = undefined;
      this._trainingJobDefinition.internalValue = undefined;
      this._transformJobDefinition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profileName = value.profileName;
      this._trainingJobDefinition.internalValue = value.trainingJobDefinition;
      this._transformJobDefinition.internalValue = value.transformJobDefinition;
    }
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // training_job_definition - computed: false, optional: true, required: false
  private _trainingJobDefinition = new SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinitionList(this, "training_job_definition", false);
  public get trainingJobDefinition() {
    return this._trainingJobDefinition;
  }
  public putTrainingJobDefinition(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTrainingJobDefinition[] | cdktn.IResolvable) {
    this._trainingJobDefinition.internalValue = value;
  }
  public resetTrainingJobDefinition() {
    this._trainingJobDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingJobDefinitionInput() {
    return this._trainingJobDefinition.internalValue;
  }

  // transform_job_definition - computed: false, optional: true, required: false
  private _transformJobDefinition = new SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinitionList(this, "transform_job_definition", false);
  public get transformJobDefinition() {
    return this._transformJobDefinition;
  }
  public putTransformJobDefinition(value: SagemakerAlgorithmValidationSpecificationValidationProfilesTransformJobDefinition[] | cdktn.IResolvable) {
    this._transformJobDefinition.internalValue = value;
  }
  public resetTransformJobDefinition() {
    this._transformJobDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformJobDefinitionInput() {
    return this._transformJobDefinition.internalValue;
  }
}

export class SagemakerAlgorithmValidationSpecificationValidationProfilesList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecificationValidationProfiles[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationValidationProfilesOutputReference {
    return new SagemakerAlgorithmValidationSpecificationValidationProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmValidationSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#validation_role SagemakerAlgorithm#validation_role}
  */
  readonly validationRole: string;
  /**
  * validation_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#validation_profiles SagemakerAlgorithm#validation_profiles}
  */
  readonly validationProfiles?: SagemakerAlgorithmValidationSpecificationValidationProfiles[] | cdktn.IResolvable;
}

export function sagemakerAlgorithmValidationSpecificationToTerraform(struct?: SagemakerAlgorithmValidationSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    validation_role: cdktn.stringToTerraform(struct!.validationRole),
    validation_profiles: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationValidationProfilesToTerraform, true)(struct!.validationProfiles),
  }
}


export function sagemakerAlgorithmValidationSpecificationToHclTerraform(struct?: SagemakerAlgorithmValidationSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    validation_role: {
      value: cdktn.stringToHclTerraform(struct!.validationRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation_profiles: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationValidationProfilesToHclTerraform, true)(struct!.validationProfiles),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmValidationSpecificationValidationProfilesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmValidationSpecificationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmValidationSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validationRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationRole = this._validationRole;
    }
    if (this._validationProfiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationProfiles = this._validationProfiles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmValidationSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._validationRole = undefined;
      this._validationProfiles.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._validationRole = value.validationRole;
      this._validationProfiles.internalValue = value.validationProfiles;
    }
  }

  // validation_role - computed: false, optional: false, required: true
  private _validationRole?: string; 
  public get validationRole() {
    return this.getStringAttribute('validation_role');
  }
  public set validationRole(value: string) {
    this._validationRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationRoleInput() {
    return this._validationRole;
  }

  // validation_profiles - computed: false, optional: true, required: false
  private _validationProfiles = new SagemakerAlgorithmValidationSpecificationValidationProfilesList(this, "validation_profiles", false);
  public get validationProfiles() {
    return this._validationProfiles;
  }
  public putValidationProfiles(value: SagemakerAlgorithmValidationSpecificationValidationProfiles[] | cdktn.IResolvable) {
    this._validationProfiles.internalValue = value;
  }
  public resetValidationProfiles() {
    this._validationProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationProfilesInput() {
    return this._validationProfiles.internalValue;
  }
}

export class SagemakerAlgorithmValidationSpecificationList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmValidationSpecification[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmValidationSpecificationOutputReference {
    return new SagemakerAlgorithmValidationSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm aws_sagemaker_algorithm}
*/
export class SagemakerAlgorithm extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_algorithm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerAlgorithm resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerAlgorithm to import
  * @param importFromId The id of the existing SagemakerAlgorithm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerAlgorithm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_algorithm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/sagemaker_algorithm aws_sagemaker_algorithm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerAlgorithmConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerAlgorithmConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_algorithm',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.62.0',
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
    this._algorithmDescription = config.algorithmDescription;
    this._algorithmName = config.algorithmName;
    this._certifyForMarketplace = config.certifyForMarketplace;
    this._region = config.region;
    this._tags = config.tags;
    this._inferenceSpecification.internalValue = config.inferenceSpecification;
    this._timeouts.internalValue = config.timeouts;
    this._trainingSpecification.internalValue = config.trainingSpecification;
    this._validationSpecification.internalValue = config.validationSpecification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm_description - computed: false, optional: true, required: false
  private _algorithmDescription?: string; 
  public get algorithmDescription() {
    return this.getStringAttribute('algorithm_description');
  }
  public set algorithmDescription(value: string) {
    this._algorithmDescription = value;
  }
  public resetAlgorithmDescription() {
    this._algorithmDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmDescriptionInput() {
    return this._algorithmDescription;
  }

  // algorithm_name - computed: false, optional: false, required: true
  private _algorithmName?: string; 
  public get algorithmName() {
    return this.getStringAttribute('algorithm_name');
  }
  public set algorithmName(value: string) {
    this._algorithmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmNameInput() {
    return this._algorithmName;
  }

  // algorithm_status - computed: true, optional: false, required: false
  public get algorithmStatus() {
    return this.getStringAttribute('algorithm_status');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certify_for_marketplace - computed: true, optional: true, required: false
  private _certifyForMarketplace?: boolean | cdktn.IResolvable; 
  public get certifyForMarketplace() {
    return this.getBooleanAttribute('certify_for_marketplace');
  }
  public set certifyForMarketplace(value: boolean | cdktn.IResolvable) {
    this._certifyForMarketplace = value;
  }
  public resetCertifyForMarketplace() {
    this._certifyForMarketplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certifyForMarketplaceInput() {
    return this._certifyForMarketplace;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
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
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // inference_specification - computed: false, optional: true, required: false
  private _inferenceSpecification = new SagemakerAlgorithmInferenceSpecificationList(this, "inference_specification", false);
  public get inferenceSpecification() {
    return this._inferenceSpecification;
  }
  public putInferenceSpecification(value: SagemakerAlgorithmInferenceSpecification[] | cdktn.IResolvable) {
    this._inferenceSpecification.internalValue = value;
  }
  public resetInferenceSpecification() {
    this._inferenceSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceSpecificationInput() {
    return this._inferenceSpecification.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SagemakerAlgorithmTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SagemakerAlgorithmTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // training_specification - computed: false, optional: true, required: false
  private _trainingSpecification = new SagemakerAlgorithmTrainingSpecificationList(this, "training_specification", false);
  public get trainingSpecification() {
    return this._trainingSpecification;
  }
  public putTrainingSpecification(value: SagemakerAlgorithmTrainingSpecification[] | cdktn.IResolvable) {
    this._trainingSpecification.internalValue = value;
  }
  public resetTrainingSpecification() {
    this._trainingSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingSpecificationInput() {
    return this._trainingSpecification.internalValue;
  }

  // validation_specification - computed: false, optional: true, required: false
  private _validationSpecification = new SagemakerAlgorithmValidationSpecificationList(this, "validation_specification", false);
  public get validationSpecification() {
    return this._validationSpecification;
  }
  public putValidationSpecification(value: SagemakerAlgorithmValidationSpecification[] | cdktn.IResolvable) {
    this._validationSpecification.internalValue = value;
  }
  public resetValidationSpecification() {
    this._validationSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationSpecificationInput() {
    return this._validationSpecification.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm_description: cdktn.stringToTerraform(this._algorithmDescription),
      algorithm_name: cdktn.stringToTerraform(this._algorithmName),
      certify_for_marketplace: cdktn.booleanToTerraform(this._certifyForMarketplace),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      inference_specification: cdktn.listMapper(sagemakerAlgorithmInferenceSpecificationToTerraform, true)(this._inferenceSpecification.internalValue),
      timeouts: sagemakerAlgorithmTimeoutsToTerraform(this._timeouts.internalValue),
      training_specification: cdktn.listMapper(sagemakerAlgorithmTrainingSpecificationToTerraform, true)(this._trainingSpecification.internalValue),
      validation_specification: cdktn.listMapper(sagemakerAlgorithmValidationSpecificationToTerraform, true)(this._validationSpecification.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm_description: {
        value: cdktn.stringToHclTerraform(this._algorithmDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      algorithm_name: {
        value: cdktn.stringToHclTerraform(this._algorithmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certify_for_marketplace: {
        value: cdktn.booleanToHclTerraform(this._certifyForMarketplace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      inference_specification: {
        value: cdktn.listMapperHcl(sagemakerAlgorithmInferenceSpecificationToHclTerraform, true)(this._inferenceSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerAlgorithmInferenceSpecificationList",
      },
      timeouts: {
        value: sagemakerAlgorithmTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerAlgorithmTimeouts",
      },
      training_specification: {
        value: cdktn.listMapperHcl(sagemakerAlgorithmTrainingSpecificationToHclTerraform, true)(this._trainingSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerAlgorithmTrainingSpecificationList",
      },
      validation_specification: {
        value: cdktn.listMapperHcl(sagemakerAlgorithmValidationSpecificationToHclTerraform, true)(this._validationSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerAlgorithmValidationSpecificationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
