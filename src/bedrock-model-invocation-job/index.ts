/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockModelInvocationJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#job_name BedrockModelInvocationJob#job_name}
  */
  readonly jobName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#model_id BedrockModelInvocationJob#model_id}
  */
  readonly modelId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#region BedrockModelInvocationJob#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#role_arn BedrockModelInvocationJob#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#skip_destroy BedrockModelInvocationJob#skip_destroy}
  */
  readonly skipDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#timeout_duration_in_hours BedrockModelInvocationJob#timeout_duration_in_hours}
  */
  readonly timeoutDurationInHours?: number;
  /**
  * input_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#input_data_config BedrockModelInvocationJob#input_data_config}
  */
  readonly inputDataConfig?: BedrockModelInvocationJobInputDataConfig[] | cdktn.IResolvable;
  /**
  * output_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#output_data_config BedrockModelInvocationJob#output_data_config}
  */
  readonly outputDataConfig?: BedrockModelInvocationJobOutputDataConfig[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#timeouts BedrockModelInvocationJob#timeouts}
  */
  readonly timeouts?: BedrockModelInvocationJobTimeouts;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#vpc_config BedrockModelInvocationJob#vpc_config}
  */
  readonly vpcConfig?: BedrockModelInvocationJobVpcConfig[] | cdktn.IResolvable;
}
export interface BedrockModelInvocationJobInputDataConfigS3InputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_bucket_owner BedrockModelInvocationJob#s3_bucket_owner}
  */
  readonly s3BucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_input_format BedrockModelInvocationJob#s3_input_format}
  */
  readonly s3InputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_uri BedrockModelInvocationJob#s3_uri}
  */
  readonly s3Uri: string;
}

export function bedrockModelInvocationJobInputDataConfigS3InputDataConfigToTerraform(struct?: BedrockModelInvocationJobInputDataConfigS3InputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_bucket_owner: cdktn.stringToTerraform(struct!.s3BucketOwner),
    s3_input_format: cdktn.stringToTerraform(struct!.s3InputFormat),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function bedrockModelInvocationJobInputDataConfigS3InputDataConfigToHclTerraform(struct?: BedrockModelInvocationJobInputDataConfigS3InputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.s3BucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_input_format: {
      value: cdktn.stringToHclTerraform(struct!.s3InputFormat),
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

export class BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockModelInvocationJobInputDataConfigS3InputDataConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketOwner = this._s3BucketOwner;
    }
    if (this._s3InputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputFormat = this._s3InputFormat;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockModelInvocationJobInputDataConfigS3InputDataConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3BucketOwner = undefined;
      this._s3InputFormat = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3BucketOwner = value.s3BucketOwner;
      this._s3InputFormat = value.s3InputFormat;
      this._s3Uri = value.s3Uri;
    }
  }

  // s3_bucket_owner - computed: true, optional: true, required: false
  private _s3BucketOwner?: string; 
  public get s3BucketOwner() {
    return this.getStringAttribute('s3_bucket_owner');
  }
  public set s3BucketOwner(value: string) {
    this._s3BucketOwner = value;
  }
  public resetS3BucketOwner() {
    this._s3BucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketOwnerInput() {
    return this._s3BucketOwner;
  }

  // s3_input_format - computed: true, optional: true, required: false
  private _s3InputFormat?: string; 
  public get s3InputFormat() {
    return this.getStringAttribute('s3_input_format');
  }
  public set s3InputFormat(value: string) {
    this._s3InputFormat = value;
  }
  public resetS3InputFormat() {
    this._s3InputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputFormatInput() {
    return this._s3InputFormat;
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

export class BedrockModelInvocationJobInputDataConfigS3InputDataConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockModelInvocationJobInputDataConfigS3InputDataConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference {
    return new BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockModelInvocationJobInputDataConfig {
  /**
  * s3_input_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_input_data_config BedrockModelInvocationJob#s3_input_data_config}
  */
  readonly s3InputDataConfig?: BedrockModelInvocationJobInputDataConfigS3InputDataConfig[] | cdktn.IResolvable;
}

export function bedrockModelInvocationJobInputDataConfigToTerraform(struct?: BedrockModelInvocationJobInputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_input_data_config: cdktn.listMapper(bedrockModelInvocationJobInputDataConfigS3InputDataConfigToTerraform, true)(struct!.s3InputDataConfig),
  }
}


export function bedrockModelInvocationJobInputDataConfigToHclTerraform(struct?: BedrockModelInvocationJobInputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_input_data_config: {
      value: cdktn.listMapperHcl(bedrockModelInvocationJobInputDataConfigS3InputDataConfigToHclTerraform, true)(struct!.s3InputDataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockModelInvocationJobInputDataConfigS3InputDataConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockModelInvocationJobInputDataConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockModelInvocationJobInputDataConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3InputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputDataConfig = this._s3InputDataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockModelInvocationJobInputDataConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3InputDataConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3InputDataConfig.internalValue = value.s3InputDataConfig;
    }
  }

  // s3_input_data_config - computed: false, optional: true, required: false
  private _s3InputDataConfig = new BedrockModelInvocationJobInputDataConfigS3InputDataConfigList(this, "s3_input_data_config", false);
  public get s3InputDataConfig() {
    return this._s3InputDataConfig;
  }
  public putS3InputDataConfig(value: BedrockModelInvocationJobInputDataConfigS3InputDataConfig[] | cdktn.IResolvable) {
    this._s3InputDataConfig.internalValue = value;
  }
  public resetS3InputDataConfig() {
    this._s3InputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputDataConfigInput() {
    return this._s3InputDataConfig.internalValue;
  }
}

export class BedrockModelInvocationJobInputDataConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockModelInvocationJobInputDataConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockModelInvocationJobInputDataConfigOutputReference {
    return new BedrockModelInvocationJobInputDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_bucket_owner BedrockModelInvocationJob#s3_bucket_owner}
  */
  readonly s3BucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_encryption_key_id BedrockModelInvocationJob#s3_encryption_key_id}
  */
  readonly s3EncryptionKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_uri BedrockModelInvocationJob#s3_uri}
  */
  readonly s3Uri: string;
}

export function bedrockModelInvocationJobOutputDataConfigS3OutputDataConfigToTerraform(struct?: BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_bucket_owner: cdktn.stringToTerraform(struct!.s3BucketOwner),
    s3_encryption_key_id: cdktn.stringToTerraform(struct!.s3EncryptionKeyId),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function bedrockModelInvocationJobOutputDataConfigS3OutputDataConfigToHclTerraform(struct?: BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.s3BucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_encryption_key_id: {
      value: cdktn.stringToHclTerraform(struct!.s3EncryptionKeyId),
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

export class BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketOwner = this._s3BucketOwner;
    }
    if (this._s3EncryptionKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3EncryptionKeyId = this._s3EncryptionKeyId;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3BucketOwner = undefined;
      this._s3EncryptionKeyId = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3BucketOwner = value.s3BucketOwner;
      this._s3EncryptionKeyId = value.s3EncryptionKeyId;
      this._s3Uri = value.s3Uri;
    }
  }

  // s3_bucket_owner - computed: true, optional: true, required: false
  private _s3BucketOwner?: string; 
  public get s3BucketOwner() {
    return this.getStringAttribute('s3_bucket_owner');
  }
  public set s3BucketOwner(value: string) {
    this._s3BucketOwner = value;
  }
  public resetS3BucketOwner() {
    this._s3BucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketOwnerInput() {
    return this._s3BucketOwner;
  }

  // s3_encryption_key_id - computed: true, optional: true, required: false
  private _s3EncryptionKeyId?: string; 
  public get s3EncryptionKeyId() {
    return this.getStringAttribute('s3_encryption_key_id');
  }
  public set s3EncryptionKeyId(value: string) {
    this._s3EncryptionKeyId = value;
  }
  public resetS3EncryptionKeyId() {
    this._s3EncryptionKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EncryptionKeyIdInput() {
    return this._s3EncryptionKeyId;
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

export class BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference {
    return new BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockModelInvocationJobOutputDataConfig {
  /**
  * s3_output_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_output_data_config BedrockModelInvocationJob#s3_output_data_config}
  */
  readonly s3OutputDataConfig?: BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig[] | cdktn.IResolvable;
}

export function bedrockModelInvocationJobOutputDataConfigToTerraform(struct?: BedrockModelInvocationJobOutputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_output_data_config: cdktn.listMapper(bedrockModelInvocationJobOutputDataConfigS3OutputDataConfigToTerraform, true)(struct!.s3OutputDataConfig),
  }
}


export function bedrockModelInvocationJobOutputDataConfigToHclTerraform(struct?: BedrockModelInvocationJobOutputDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_output_data_config: {
      value: cdktn.listMapperHcl(bedrockModelInvocationJobOutputDataConfigS3OutputDataConfigToHclTerraform, true)(struct!.s3OutputDataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockModelInvocationJobOutputDataConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockModelInvocationJobOutputDataConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3OutputDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputDataConfig = this._s3OutputDataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockModelInvocationJobOutputDataConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3OutputDataConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3OutputDataConfig.internalValue = value.s3OutputDataConfig;
    }
  }

  // s3_output_data_config - computed: false, optional: true, required: false
  private _s3OutputDataConfig = new BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList(this, "s3_output_data_config", false);
  public get s3OutputDataConfig() {
    return this._s3OutputDataConfig;
  }
  public putS3OutputDataConfig(value: BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig[] | cdktn.IResolvable) {
    this._s3OutputDataConfig.internalValue = value;
  }
  public resetS3OutputDataConfig() {
    this._s3OutputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputDataConfigInput() {
    return this._s3OutputDataConfig.internalValue;
  }
}

export class BedrockModelInvocationJobOutputDataConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockModelInvocationJobOutputDataConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockModelInvocationJobOutputDataConfigOutputReference {
    return new BedrockModelInvocationJobOutputDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockModelInvocationJobTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#create BedrockModelInvocationJob#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#delete BedrockModelInvocationJob#delete}
  */
  readonly delete?: string;
}

export function bedrockModelInvocationJobTimeoutsToTerraform(struct?: BedrockModelInvocationJobTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function bedrockModelInvocationJobTimeoutsToHclTerraform(struct?: BedrockModelInvocationJobTimeouts | cdktn.IResolvable): any {
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

export class BedrockModelInvocationJobTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockModelInvocationJobTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockModelInvocationJobTimeouts | cdktn.IResolvable | undefined) {
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
export interface BedrockModelInvocationJobVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#security_group_ids BedrockModelInvocationJob#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#subnet_ids BedrockModelInvocationJob#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function bedrockModelInvocationJobVpcConfigToTerraform(struct?: BedrockModelInvocationJobVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function bedrockModelInvocationJobVpcConfigToHclTerraform(struct?: BedrockModelInvocationJobVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockModelInvocationJobVpcConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockModelInvocationJobVpcConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockModelInvocationJobVpcConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}

export class BedrockModelInvocationJobVpcConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockModelInvocationJobVpcConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockModelInvocationJobVpcConfigOutputReference {
    return new BedrockModelInvocationJobVpcConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job aws_bedrock_model_invocation_job}
*/
export class BedrockModelInvocationJob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrock_model_invocation_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockModelInvocationJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockModelInvocationJob to import
  * @param importFromId The id of the existing BedrockModelInvocationJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockModelInvocationJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrock_model_invocation_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job aws_bedrock_model_invocation_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockModelInvocationJobConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockModelInvocationJobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrock_model_invocation_job',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.64.0',
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
    this._jobName = config.jobName;
    this._modelId = config.modelId;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._skipDestroy = config.skipDestroy;
    this._timeoutDurationInHours = config.timeoutDurationInHours;
    this._inputDataConfig.internalValue = config.inputDataConfig;
    this._outputDataConfig.internalValue = config.outputDataConfig;
    this._timeouts.internalValue = config.timeouts;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // error_record_count - computed: true, optional: false, required: false
  public get errorRecordCount() {
    return this.getNumberAttribute('error_record_count');
  }

  // job_arn - computed: true, optional: false, required: false
  public get jobArn() {
    return this.getStringAttribute('job_arn');
  }

  // job_expiration_time - computed: true, optional: false, required: false
  public get jobExpirationTime() {
    return this.getStringAttribute('job_expiration_time');
  }

  // job_name - computed: false, optional: false, required: true
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // model_invocation_type - computed: true, optional: false, required: false
  public get modelInvocationType() {
    return this.getStringAttribute('model_invocation_type');
  }

  // processed_record_count - computed: true, optional: false, required: false
  public get processedRecordCount() {
    return this.getNumberAttribute('processed_record_count');
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // skip_destroy - computed: false, optional: true, required: false
  private _skipDestroy?: boolean | cdktn.IResolvable; 
  public get skipDestroy() {
    return this.getBooleanAttribute('skip_destroy');
  }
  public set skipDestroy(value: boolean | cdktn.IResolvable) {
    this._skipDestroy = value;
  }
  public resetSkipDestroy() {
    this._skipDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDestroyInput() {
    return this._skipDestroy;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // submit_time - computed: true, optional: false, required: false
  public get submitTime() {
    return this.getStringAttribute('submit_time');
  }

  // success_record_count - computed: true, optional: false, required: false
  public get successRecordCount() {
    return this.getNumberAttribute('success_record_count');
  }

  // timeout_duration_in_hours - computed: true, optional: true, required: false
  private _timeoutDurationInHours?: number; 
  public get timeoutDurationInHours() {
    return this.getNumberAttribute('timeout_duration_in_hours');
  }
  public set timeoutDurationInHours(value: number) {
    this._timeoutDurationInHours = value;
  }
  public resetTimeoutDurationInHours() {
    this._timeoutDurationInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutDurationInHoursInput() {
    return this._timeoutDurationInHours;
  }

  // total_record_count - computed: true, optional: false, required: false
  public get totalRecordCount() {
    return this.getNumberAttribute('total_record_count');
  }

  // input_data_config - computed: false, optional: true, required: false
  private _inputDataConfig = new BedrockModelInvocationJobInputDataConfigList(this, "input_data_config", false);
  public get inputDataConfig() {
    return this._inputDataConfig;
  }
  public putInputDataConfig(value: BedrockModelInvocationJobInputDataConfig[] | cdktn.IResolvable) {
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
  private _outputDataConfig = new BedrockModelInvocationJobOutputDataConfigList(this, "output_data_config", false);
  public get outputDataConfig() {
    return this._outputDataConfig;
  }
  public putOutputDataConfig(value: BedrockModelInvocationJobOutputDataConfig[] | cdktn.IResolvable) {
    this._outputDataConfig.internalValue = value;
  }
  public resetOutputDataConfig() {
    this._outputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDataConfigInput() {
    return this._outputDataConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockModelInvocationJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockModelInvocationJobTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new BedrockModelInvocationJobVpcConfigList(this, "vpc_config", false);
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: BedrockModelInvocationJobVpcConfig[] | cdktn.IResolvable) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      job_name: cdktn.stringToTerraform(this._jobName),
      model_id: cdktn.stringToTerraform(this._modelId),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      skip_destroy: cdktn.booleanToTerraform(this._skipDestroy),
      timeout_duration_in_hours: cdktn.numberToTerraform(this._timeoutDurationInHours),
      input_data_config: cdktn.listMapper(bedrockModelInvocationJobInputDataConfigToTerraform, true)(this._inputDataConfig.internalValue),
      output_data_config: cdktn.listMapper(bedrockModelInvocationJobOutputDataConfigToTerraform, true)(this._outputDataConfig.internalValue),
      timeouts: bedrockModelInvocationJobTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_config: cdktn.listMapper(bedrockModelInvocationJobVpcConfigToTerraform, true)(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      job_name: {
        value: cdktn.stringToHclTerraform(this._jobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_id: {
        value: cdktn.stringToHclTerraform(this._modelId),
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
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_destroy: {
        value: cdktn.booleanToHclTerraform(this._skipDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout_duration_in_hours: {
        value: cdktn.numberToHclTerraform(this._timeoutDurationInHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      input_data_config: {
        value: cdktn.listMapperHcl(bedrockModelInvocationJobInputDataConfigToHclTerraform, true)(this._inputDataConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockModelInvocationJobInputDataConfigList",
      },
      output_data_config: {
        value: cdktn.listMapperHcl(bedrockModelInvocationJobOutputDataConfigToHclTerraform, true)(this._outputDataConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockModelInvocationJobOutputDataConfigList",
      },
      timeouts: {
        value: bedrockModelInvocationJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockModelInvocationJobTimeouts",
      },
      vpc_config: {
        value: cdktn.listMapperHcl(bedrockModelInvocationJobVpcConfigToHclTerraform, true)(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockModelInvocationJobVpcConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
