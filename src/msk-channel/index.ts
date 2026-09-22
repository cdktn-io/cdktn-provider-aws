/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MskChannelConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#channel_name MskChannel#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cluster_arn MskChannel#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#region MskChannel#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#tags MskChannel#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#encryption_configuration MskChannel#encryption_configuration}
  */
  readonly encryptionConfiguration?: MskChannelEncryptionConfiguration[] | cdktn.IResolvable;
  /**
  * iceberg_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#iceberg_destination MskChannel#iceberg_destination}
  */
  readonly icebergDestination?: MskChannelIcebergDestination[] | cdktn.IResolvable;
  /**
  * logging_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#logging_info MskChannel#logging_info}
  */
  readonly loggingInfo?: MskChannelLoggingInfo[] | cdktn.IResolvable;
  /**
  * s3_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#s3_destination MskChannel#s3_destination}
  */
  readonly s3Destination?: MskChannelS3Destination[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#timeouts MskChannel#timeouts}
  */
  readonly timeouts?: MskChannelTimeouts;
  /**
  * topic_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#topic_configuration MskChannel#topic_configuration}
  */
  readonly topicConfiguration?: MskChannelTopicConfiguration[] | cdktn.IResolvable;
}
export interface MskChannelEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#kms_key_arn MskChannel#kms_key_arn}
  */
  readonly kmsKeyArn: string;
}

export function mskChannelEncryptionConfigurationToTerraform(struct?: MskChannelEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function mskChannelEncryptionConfigurationToHclTerraform(struct?: MskChannelEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // kms_key_arn - computed: false, optional: false, required: true
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}

export class MskChannelEncryptionConfigurationList extends cdktn.ComplexList {
  public internalValue? : MskChannelEncryptionConfiguration[] | cdktn.IResolvable

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
  public get(index: number): MskChannelEncryptionConfigurationOutputReference {
    return new MskChannelEncryptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelIcebergDestinationCatalog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#catalog_arn MskChannel#catalog_arn}
  */
  readonly catalogArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#warehouse_location MskChannel#warehouse_location}
  */
  readonly warehouseLocation?: string;
}

export function mskChannelIcebergDestinationCatalogToTerraform(struct?: MskChannelIcebergDestinationCatalog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_arn: cdktn.stringToTerraform(struct!.catalogArn),
    warehouse_location: cdktn.stringToTerraform(struct!.warehouseLocation),
  }
}


export function mskChannelIcebergDestinationCatalogToHclTerraform(struct?: MskChannelIcebergDestinationCatalog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_arn: {
      value: cdktn.stringToHclTerraform(struct!.catalogArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse_location: {
      value: cdktn.stringToHclTerraform(struct!.warehouseLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelIcebergDestinationCatalogOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelIcebergDestinationCatalog | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogArn = this._catalogArn;
    }
    if (this._warehouseLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseLocation = this._warehouseLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelIcebergDestinationCatalog | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogArn = undefined;
      this._warehouseLocation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogArn = value.catalogArn;
      this._warehouseLocation = value.warehouseLocation;
    }
  }

  // catalog_arn - computed: false, optional: true, required: false
  private _catalogArn?: string; 
  public get catalogArn() {
    return this.getStringAttribute('catalog_arn');
  }
  public set catalogArn(value: string) {
    this._catalogArn = value;
  }
  public resetCatalogArn() {
    this._catalogArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogArnInput() {
    return this._catalogArn;
  }

  // warehouse_location - computed: false, optional: true, required: false
  private _warehouseLocation?: string; 
  public get warehouseLocation() {
    return this.getStringAttribute('warehouse_location');
  }
  public set warehouseLocation(value: string) {
    this._warehouseLocation = value;
  }
  public resetWarehouseLocation() {
    this._warehouseLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseLocationInput() {
    return this._warehouseLocation;
  }
}

export class MskChannelIcebergDestinationCatalogList extends cdktn.ComplexList {
  public internalValue? : MskChannelIcebergDestinationCatalog[] | cdktn.IResolvable

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
  public get(index: number): MskChannelIcebergDestinationCatalogOutputReference {
    return new MskChannelIcebergDestinationCatalogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelIcebergDestinationDeadLetterQueueS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
}

export function mskChannelIcebergDestinationDeadLetterQueueS3ToTerraform(struct?: MskChannelIcebergDestinationDeadLetterQueueS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    error_output_prefix: cdktn.stringToTerraform(struct!.errorOutputPrefix),
    expected_bucket_owner: cdktn.stringToTerraform(struct!.expectedBucketOwner),
  }
}


export function mskChannelIcebergDestinationDeadLetterQueueS3ToHclTerraform(struct?: MskChannelIcebergDestinationDeadLetterQueueS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktn.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expected_bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.expectedBucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelIcebergDestinationDeadLetterQueueS3OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelIcebergDestinationDeadLetterQueueS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._expectedBucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedBucketOwner = this._expectedBucketOwner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelIcebergDestinationDeadLetterQueueS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketArn = undefined;
      this._errorOutputPrefix = undefined;
      this._expectedBucketOwner = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketArn = value.bucketArn;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._expectedBucketOwner = value.expectedBucketOwner;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
  }

  // expected_bucket_owner - computed: false, optional: true, required: false
  private _expectedBucketOwner?: string; 
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
  public set expectedBucketOwner(value: string) {
    this._expectedBucketOwner = value;
  }
  public resetExpectedBucketOwner() {
    this._expectedBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBucketOwnerInput() {
    return this._expectedBucketOwner;
  }
}

export class MskChannelIcebergDestinationDeadLetterQueueS3List extends cdktn.ComplexList {
  public internalValue? : MskChannelIcebergDestinationDeadLetterQueueS3[] | cdktn.IResolvable

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
  public get(index: number): MskChannelIcebergDestinationDeadLetterQueueS3OutputReference {
    return new MskChannelIcebergDestinationDeadLetterQueueS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelIcebergDestinationDestinationTablePartitionSpecSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#source_name MskChannel#source_name}
  */
  readonly sourceName?: string;
}

export function mskChannelIcebergDestinationDestinationTablePartitionSpecSourceToTerraform(struct?: MskChannelIcebergDestinationDestinationTablePartitionSpecSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_name: cdktn.stringToTerraform(struct!.sourceName),
  }
}


export function mskChannelIcebergDestinationDestinationTablePartitionSpecSourceToHclTerraform(struct?: MskChannelIcebergDestinationDestinationTablePartitionSpecSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelIcebergDestinationDestinationTablePartitionSpecSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelIcebergDestinationDestinationTablePartitionSpecSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceName = value.sourceName;
    }
  }

  // source_name - computed: false, optional: true, required: false
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  public resetSourceName() {
    this._sourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }
}

export class MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList extends cdktn.ComplexList {
  public internalValue? : MskChannelIcebergDestinationDestinationTablePartitionSpecSource[] | cdktn.IResolvable

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
  public get(index: number): MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference {
    return new MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelIcebergDestinationDestinationTablePartitionSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#partition_strategy MskChannel#partition_strategy}
  */
  readonly partitionStrategy: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#source MskChannel#source}
  */
  readonly source?: MskChannelIcebergDestinationDestinationTablePartitionSpecSource[] | cdktn.IResolvable;
}

export function mskChannelIcebergDestinationDestinationTablePartitionSpecToTerraform(struct?: MskChannelIcebergDestinationDestinationTablePartitionSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    partition_strategy: cdktn.stringToTerraform(struct!.partitionStrategy),
    source: cdktn.listMapper(mskChannelIcebergDestinationDestinationTablePartitionSpecSourceToTerraform, true)(struct!.source),
  }
}


export function mskChannelIcebergDestinationDestinationTablePartitionSpecToHclTerraform(struct?: MskChannelIcebergDestinationDestinationTablePartitionSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    partition_strategy: {
      value: cdktn.stringToHclTerraform(struct!.partitionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.listMapperHcl(mskChannelIcebergDestinationDestinationTablePartitionSpecSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelIcebergDestinationDestinationTablePartitionSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionStrategy = this._partitionStrategy;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelIcebergDestinationDestinationTablePartitionSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partitionStrategy = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partitionStrategy = value.partitionStrategy;
      this._source.internalValue = value.source;
    }
  }

  // partition_strategy - computed: false, optional: false, required: true
  private _partitionStrategy?: string; 
  public get partitionStrategy() {
    return this.getStringAttribute('partition_strategy');
  }
  public set partitionStrategy(value: string) {
    this._partitionStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionStrategyInput() {
    return this._partitionStrategy;
  }

  // source - computed: false, optional: true, required: false
  private _source = new MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: MskChannelIcebergDestinationDestinationTablePartitionSpecSource[] | cdktn.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class MskChannelIcebergDestinationDestinationTablePartitionSpecList extends cdktn.ComplexList {
  public internalValue? : MskChannelIcebergDestinationDestinationTablePartitionSpec[] | cdktn.IResolvable

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
  public get(index: number): MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference {
    return new MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelIcebergDestinationDestinationTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_database_name MskChannel#destination_database_name}
  */
  readonly destinationDatabaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_table_name MskChannel#destination_table_name}
  */
  readonly destinationTableName?: string;
  /**
  * partition_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#partition_spec MskChannel#partition_spec}
  */
  readonly partitionSpec?: MskChannelIcebergDestinationDestinationTablePartitionSpec[] | cdktn.IResolvable;
}

export function mskChannelIcebergDestinationDestinationTableToTerraform(struct?: MskChannelIcebergDestinationDestinationTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_database_name: cdktn.stringToTerraform(struct!.destinationDatabaseName),
    destination_table_name: cdktn.stringToTerraform(struct!.destinationTableName),
    partition_spec: cdktn.listMapper(mskChannelIcebergDestinationDestinationTablePartitionSpecToTerraform, true)(struct!.partitionSpec),
  }
}


export function mskChannelIcebergDestinationDestinationTableToHclTerraform(struct?: MskChannelIcebergDestinationDestinationTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_database_name: {
      value: cdktn.stringToHclTerraform(struct!.destinationDatabaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_table_name: {
      value: cdktn.stringToHclTerraform(struct!.destinationTableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_spec: {
      value: cdktn.listMapperHcl(mskChannelIcebergDestinationDestinationTablePartitionSpecToHclTerraform, true)(struct!.partitionSpec),
      isBlock: true,
      type: "list",
      storageClassType: "MskChannelIcebergDestinationDestinationTablePartitionSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelIcebergDestinationDestinationTableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelIcebergDestinationDestinationTable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationDatabaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDatabaseName = this._destinationDatabaseName;
    }
    if (this._destinationTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTableName = this._destinationTableName;
    }
    if (this._partitionSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionSpec = this._partitionSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelIcebergDestinationDestinationTable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationDatabaseName = undefined;
      this._destinationTableName = undefined;
      this._partitionSpec.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationDatabaseName = value.destinationDatabaseName;
      this._destinationTableName = value.destinationTableName;
      this._partitionSpec.internalValue = value.partitionSpec;
    }
  }

  // destination_database_name - computed: false, optional: true, required: false
  private _destinationDatabaseName?: string; 
  public get destinationDatabaseName() {
    return this.getStringAttribute('destination_database_name');
  }
  public set destinationDatabaseName(value: string) {
    this._destinationDatabaseName = value;
  }
  public resetDestinationDatabaseName() {
    this._destinationDatabaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDatabaseNameInput() {
    return this._destinationDatabaseName;
  }

  // destination_table_name - computed: false, optional: true, required: false
  private _destinationTableName?: string; 
  public get destinationTableName() {
    return this.getStringAttribute('destination_table_name');
  }
  public set destinationTableName(value: string) {
    this._destinationTableName = value;
  }
  public resetDestinationTableName() {
    this._destinationTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTableNameInput() {
    return this._destinationTableName;
  }

  // partition_spec - computed: false, optional: true, required: false
  private _partitionSpec = new MskChannelIcebergDestinationDestinationTablePartitionSpecList(this, "partition_spec", false);
  public get partitionSpec() {
    return this._partitionSpec;
  }
  public putPartitionSpec(value: MskChannelIcebergDestinationDestinationTablePartitionSpec[] | cdktn.IResolvable) {
    this._partitionSpec.internalValue = value;
  }
  public resetPartitionSpec() {
    this._partitionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionSpecInput() {
    return this._partitionSpec.internalValue;
  }
}

export class MskChannelIcebergDestinationDestinationTableList extends cdktn.ComplexList {
  public internalValue? : MskChannelIcebergDestinationDestinationTable[] | cdktn.IResolvable

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
  public get(index: number): MskChannelIcebergDestinationDestinationTableOutputReference {
    return new MskChannelIcebergDestinationDestinationTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelIcebergDestinationSchemaEvolution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_schema_evolution MskChannel#enable_schema_evolution}
  */
  readonly enableSchemaEvolution?: boolean | cdktn.IResolvable;
}

export function mskChannelIcebergDestinationSchemaEvolutionToTerraform(struct?: MskChannelIcebergDestinationSchemaEvolution | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_schema_evolution: cdktn.booleanToTerraform(struct!.enableSchemaEvolution),
  }
}


export function mskChannelIcebergDestinationSchemaEvolutionToHclTerraform(struct?: MskChannelIcebergDestinationSchemaEvolution | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_schema_evolution: {
      value: cdktn.booleanToHclTerraform(struct!.enableSchemaEvolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelIcebergDestinationSchemaEvolutionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelIcebergDestinationSchemaEvolution | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSchemaEvolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSchemaEvolution = this._enableSchemaEvolution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelIcebergDestinationSchemaEvolution | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableSchemaEvolution = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableSchemaEvolution = value.enableSchemaEvolution;
    }
  }

  // enable_schema_evolution - computed: false, optional: true, required: false
  private _enableSchemaEvolution?: boolean | cdktn.IResolvable; 
  public get enableSchemaEvolution() {
    return this.getBooleanAttribute('enable_schema_evolution');
  }
  public set enableSchemaEvolution(value: boolean | cdktn.IResolvable) {
    this._enableSchemaEvolution = value;
  }
  public resetEnableSchemaEvolution() {
    this._enableSchemaEvolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSchemaEvolutionInput() {
    return this._enableSchemaEvolution;
  }
}

export class MskChannelIcebergDestinationSchemaEvolutionList extends cdktn.ComplexList {
  public internalValue? : MskChannelIcebergDestinationSchemaEvolution[] | cdktn.IResolvable

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
  public get(index: number): MskChannelIcebergDestinationSchemaEvolutionOutputReference {
    return new MskChannelIcebergDestinationSchemaEvolutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelIcebergDestinationTableCreation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_table_creation MskChannel#enable_table_creation}
  */
  readonly enableTableCreation?: boolean | cdktn.IResolvable;
}

export function mskChannelIcebergDestinationTableCreationToTerraform(struct?: MskChannelIcebergDestinationTableCreation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_table_creation: cdktn.booleanToTerraform(struct!.enableTableCreation),
  }
}


export function mskChannelIcebergDestinationTableCreationToHclTerraform(struct?: MskChannelIcebergDestinationTableCreation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_table_creation: {
      value: cdktn.booleanToHclTerraform(struct!.enableTableCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelIcebergDestinationTableCreationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelIcebergDestinationTableCreation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableTableCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTableCreation = this._enableTableCreation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelIcebergDestinationTableCreation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableTableCreation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableTableCreation = value.enableTableCreation;
    }
  }

  // enable_table_creation - computed: false, optional: true, required: false
  private _enableTableCreation?: boolean | cdktn.IResolvable; 
  public get enableTableCreation() {
    return this.getBooleanAttribute('enable_table_creation');
  }
  public set enableTableCreation(value: boolean | cdktn.IResolvable) {
    this._enableTableCreation = value;
  }
  public resetEnableTableCreation() {
    this._enableTableCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTableCreationInput() {
    return this._enableTableCreation;
  }
}

export class MskChannelIcebergDestinationTableCreationList extends cdktn.ComplexList {
  public internalValue? : MskChannelIcebergDestinationTableCreation[] | cdktn.IResolvable

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
  public get(index: number): MskChannelIcebergDestinationTableCreationOutputReference {
    return new MskChannelIcebergDestinationTableCreationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelIcebergDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#append_only MskChannel#append_only}
  */
  readonly appendOnly: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}
  */
  readonly dataFreshnessInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}
  */
  readonly serviceExecutionRoleArn: string;
  /**
  * catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#catalog MskChannel#catalog}
  */
  readonly catalog?: MskChannelIcebergDestinationCatalog[] | cdktn.IResolvable;
  /**
  * dead_letter_queue_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}
  */
  readonly deadLetterQueueS3?: MskChannelIcebergDestinationDeadLetterQueueS3[] | cdktn.IResolvable;
  /**
  * destination_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_table MskChannel#destination_table}
  */
  readonly destinationTable?: MskChannelIcebergDestinationDestinationTable[] | cdktn.IResolvable;
  /**
  * schema_evolution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#schema_evolution MskChannel#schema_evolution}
  */
  readonly schemaEvolution?: MskChannelIcebergDestinationSchemaEvolution[] | cdktn.IResolvable;
  /**
  * table_creation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#table_creation MskChannel#table_creation}
  */
  readonly tableCreation?: MskChannelIcebergDestinationTableCreation[] | cdktn.IResolvable;
}

export function mskChannelIcebergDestinationToTerraform(struct?: MskChannelIcebergDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_only: cdktn.booleanToTerraform(struct!.appendOnly),
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    data_freshness_in_seconds: cdktn.numberToTerraform(struct!.dataFreshnessInSeconds),
    service_execution_role_arn: cdktn.stringToTerraform(struct!.serviceExecutionRoleArn),
    catalog: cdktn.listMapper(mskChannelIcebergDestinationCatalogToTerraform, true)(struct!.catalog),
    dead_letter_queue_s3: cdktn.listMapper(mskChannelIcebergDestinationDeadLetterQueueS3ToTerraform, true)(struct!.deadLetterQueueS3),
    destination_table: cdktn.listMapper(mskChannelIcebergDestinationDestinationTableToTerraform, true)(struct!.destinationTable),
    schema_evolution: cdktn.listMapper(mskChannelIcebergDestinationSchemaEvolutionToTerraform, true)(struct!.schemaEvolution),
    table_creation: cdktn.listMapper(mskChannelIcebergDestinationTableCreationToTerraform, true)(struct!.tableCreation),
  }
}


export function mskChannelIcebergDestinationToHclTerraform(struct?: MskChannelIcebergDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_only: {
      value: cdktn.booleanToHclTerraform(struct!.appendOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_freshness_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.dataFreshnessInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_execution_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.serviceExecutionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog: {
      value: cdktn.listMapperHcl(mskChannelIcebergDestinationCatalogToHclTerraform, true)(struct!.catalog),
      isBlock: true,
      type: "list",
      storageClassType: "MskChannelIcebergDestinationCatalogList",
    },
    dead_letter_queue_s3: {
      value: cdktn.listMapperHcl(mskChannelIcebergDestinationDeadLetterQueueS3ToHclTerraform, true)(struct!.deadLetterQueueS3),
      isBlock: true,
      type: "list",
      storageClassType: "MskChannelIcebergDestinationDeadLetterQueueS3List",
    },
    destination_table: {
      value: cdktn.listMapperHcl(mskChannelIcebergDestinationDestinationTableToHclTerraform, true)(struct!.destinationTable),
      isBlock: true,
      type: "list",
      storageClassType: "MskChannelIcebergDestinationDestinationTableList",
    },
    schema_evolution: {
      value: cdktn.listMapperHcl(mskChannelIcebergDestinationSchemaEvolutionToHclTerraform, true)(struct!.schemaEvolution),
      isBlock: true,
      type: "list",
      storageClassType: "MskChannelIcebergDestinationSchemaEvolutionList",
    },
    table_creation: {
      value: cdktn.listMapperHcl(mskChannelIcebergDestinationTableCreationToHclTerraform, true)(struct!.tableCreation),
      isBlock: true,
      type: "list",
      storageClassType: "MskChannelIcebergDestinationTableCreationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelIcebergDestinationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelIcebergDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendOnly = this._appendOnly;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._dataFreshnessInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFreshnessInSeconds = this._dataFreshnessInSeconds;
    }
    if (this._serviceExecutionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceExecutionRoleArn = this._serviceExecutionRoleArn;
    }
    if (this._catalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog?.internalValue;
    }
    if (this._deadLetterQueueS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadLetterQueueS3 = this._deadLetterQueueS3?.internalValue;
    }
    if (this._destinationTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTable = this._destinationTable?.internalValue;
    }
    if (this._schemaEvolution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaEvolution = this._schemaEvolution?.internalValue;
    }
    if (this._tableCreation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableCreation = this._tableCreation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelIcebergDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendOnly = undefined;
      this._compressionType = undefined;
      this._dataFreshnessInSeconds = undefined;
      this._serviceExecutionRoleArn = undefined;
      this._catalog.internalValue = undefined;
      this._deadLetterQueueS3.internalValue = undefined;
      this._destinationTable.internalValue = undefined;
      this._schemaEvolution.internalValue = undefined;
      this._tableCreation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendOnly = value.appendOnly;
      this._compressionType = value.compressionType;
      this._dataFreshnessInSeconds = value.dataFreshnessInSeconds;
      this._serviceExecutionRoleArn = value.serviceExecutionRoleArn;
      this._catalog.internalValue = value.catalog;
      this._deadLetterQueueS3.internalValue = value.deadLetterQueueS3;
      this._destinationTable.internalValue = value.destinationTable;
      this._schemaEvolution.internalValue = value.schemaEvolution;
      this._tableCreation.internalValue = value.tableCreation;
    }
  }

  // append_only - computed: false, optional: false, required: true
  private _appendOnly?: boolean | cdktn.IResolvable; 
  public get appendOnly() {
    return this.getBooleanAttribute('append_only');
  }
  public set appendOnly(value: boolean | cdktn.IResolvable) {
    this._appendOnly = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appendOnlyInput() {
    return this._appendOnly;
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

  // data_freshness_in_seconds - computed: true, optional: true, required: false
  private _dataFreshnessInSeconds?: number; 
  public get dataFreshnessInSeconds() {
    return this.getNumberAttribute('data_freshness_in_seconds');
  }
  public set dataFreshnessInSeconds(value: number) {
    this._dataFreshnessInSeconds = value;
  }
  public resetDataFreshnessInSeconds() {
    this._dataFreshnessInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFreshnessInSecondsInput() {
    return this._dataFreshnessInSeconds;
  }

  // service_execution_role_arn - computed: false, optional: false, required: true
  private _serviceExecutionRoleArn?: string; 
  public get serviceExecutionRoleArn() {
    return this.getStringAttribute('service_execution_role_arn');
  }
  public set serviceExecutionRoleArn(value: string) {
    this._serviceExecutionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceExecutionRoleArnInput() {
    return this._serviceExecutionRoleArn;
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog = new MskChannelIcebergDestinationCatalogList(this, "catalog", false);
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: MskChannelIcebergDestinationCatalog[] | cdktn.IResolvable) {
    this._catalog.internalValue = value;
  }
  public resetCatalog() {
    this._catalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
  }

  // dead_letter_queue_s3 - computed: false, optional: true, required: false
  private _deadLetterQueueS3 = new MskChannelIcebergDestinationDeadLetterQueueS3List(this, "dead_letter_queue_s3", false);
  public get deadLetterQueueS3() {
    return this._deadLetterQueueS3;
  }
  public putDeadLetterQueueS3(value: MskChannelIcebergDestinationDeadLetterQueueS3[] | cdktn.IResolvable) {
    this._deadLetterQueueS3.internalValue = value;
  }
  public resetDeadLetterQueueS3() {
    this._deadLetterQueueS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterQueueS3Input() {
    return this._deadLetterQueueS3.internalValue;
  }

  // destination_table - computed: false, optional: true, required: false
  private _destinationTable = new MskChannelIcebergDestinationDestinationTableList(this, "destination_table", false);
  public get destinationTable() {
    return this._destinationTable;
  }
  public putDestinationTable(value: MskChannelIcebergDestinationDestinationTable[] | cdktn.IResolvable) {
    this._destinationTable.internalValue = value;
  }
  public resetDestinationTable() {
    this._destinationTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTableInput() {
    return this._destinationTable.internalValue;
  }

  // schema_evolution - computed: false, optional: true, required: false
  private _schemaEvolution = new MskChannelIcebergDestinationSchemaEvolutionList(this, "schema_evolution", false);
  public get schemaEvolution() {
    return this._schemaEvolution;
  }
  public putSchemaEvolution(value: MskChannelIcebergDestinationSchemaEvolution[] | cdktn.IResolvable) {
    this._schemaEvolution.internalValue = value;
  }
  public resetSchemaEvolution() {
    this._schemaEvolution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaEvolutionInput() {
    return this._schemaEvolution.internalValue;
  }

  // table_creation - computed: false, optional: true, required: false
  private _tableCreation = new MskChannelIcebergDestinationTableCreationList(this, "table_creation", false);
  public get tableCreation() {
    return this._tableCreation;
  }
  public putTableCreation(value: MskChannelIcebergDestinationTableCreation[] | cdktn.IResolvable) {
    this._tableCreation.internalValue = value;
  }
  public resetTableCreation() {
    this._tableCreation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableCreationInput() {
    return this._tableCreation.internalValue;
  }
}

export class MskChannelIcebergDestinationList extends cdktn.ComplexList {
  public internalValue? : MskChannelIcebergDestination[] | cdktn.IResolvable

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
  public get(index: number): MskChannelIcebergDestinationOutputReference {
    return new MskChannelIcebergDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelLoggingInfoCloudwatchLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#log_group MskChannel#log_group}
  */
  readonly logGroup?: string;
}

export function mskChannelLoggingInfoCloudwatchLogsToTerraform(struct?: MskChannelLoggingInfoCloudwatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group: cdktn.stringToTerraform(struct!.logGroup),
  }
}


export function mskChannelLoggingInfoCloudwatchLogsToHclTerraform(struct?: MskChannelLoggingInfoCloudwatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group: {
      value: cdktn.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelLoggingInfoCloudwatchLogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelLoggingInfoCloudwatchLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelLoggingInfoCloudwatchLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._logGroup = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._logGroup = value.logGroup;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group - computed: false, optional: true, required: false
  private _logGroup?: string; 
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  public resetLogGroup() {
    this._logGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }
}

export class MskChannelLoggingInfoCloudwatchLogsList extends cdktn.ComplexList {
  public internalValue? : MskChannelLoggingInfoCloudwatchLogs[] | cdktn.IResolvable

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
  public get(index: number): MskChannelLoggingInfoCloudwatchLogsOutputReference {
    return new MskChannelLoggingInfoCloudwatchLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelLoggingInfoFirehose {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#delivery_stream MskChannel#delivery_stream}
  */
  readonly deliveryStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function mskChannelLoggingInfoFirehoseToTerraform(struct?: MskChannelLoggingInfoFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delivery_stream: cdktn.stringToTerraform(struct!.deliveryStream),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function mskChannelLoggingInfoFirehoseToHclTerraform(struct?: MskChannelLoggingInfoFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delivery_stream: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelLoggingInfoFirehoseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelLoggingInfoFirehose | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStream = this._deliveryStream;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelLoggingInfoFirehose | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deliveryStream = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deliveryStream = value.deliveryStream;
      this._enabled = value.enabled;
    }
  }

  // delivery_stream - computed: false, optional: true, required: false
  private _deliveryStream?: string; 
  public get deliveryStream() {
    return this.getStringAttribute('delivery_stream');
  }
  public set deliveryStream(value: string) {
    this._deliveryStream = value;
  }
  public resetDeliveryStream() {
    this._deliveryStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamInput() {
    return this._deliveryStream;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class MskChannelLoggingInfoFirehoseList extends cdktn.ComplexList {
  public internalValue? : MskChannelLoggingInfoFirehose[] | cdktn.IResolvable

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
  public get(index: number): MskChannelLoggingInfoFirehoseOutputReference {
    return new MskChannelLoggingInfoFirehoseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelLoggingInfoS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket MskChannel#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#prefix MskChannel#prefix}
  */
  readonly prefix?: string;
}

export function mskChannelLoggingInfoS3ToTerraform(struct?: MskChannelLoggingInfoS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function mskChannelLoggingInfoS3ToHclTerraform(struct?: MskChannelLoggingInfoS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelLoggingInfoS3OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelLoggingInfoS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelLoggingInfoS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._enabled = undefined;
      this._prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._enabled = value.enabled;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class MskChannelLoggingInfoS3List extends cdktn.ComplexList {
  public internalValue? : MskChannelLoggingInfoS3[] | cdktn.IResolvable

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
  public get(index: number): MskChannelLoggingInfoS3OutputReference {
    return new MskChannelLoggingInfoS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelLoggingInfo {
  /**
  * cloudwatch_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cloudwatch_logs MskChannel#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: MskChannelLoggingInfoCloudwatchLogs[] | cdktn.IResolvable;
  /**
  * firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#firehose MskChannel#firehose}
  */
  readonly firehose?: MskChannelLoggingInfoFirehose[] | cdktn.IResolvable;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#s3 MskChannel#s3}
  */
  readonly s3?: MskChannelLoggingInfoS3[] | cdktn.IResolvable;
}

export function mskChannelLoggingInfoToTerraform(struct?: MskChannelLoggingInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_logs: cdktn.listMapper(mskChannelLoggingInfoCloudwatchLogsToTerraform, true)(struct!.cloudwatchLogs),
    firehose: cdktn.listMapper(mskChannelLoggingInfoFirehoseToTerraform, true)(struct!.firehose),
    s3: cdktn.listMapper(mskChannelLoggingInfoS3ToTerraform, true)(struct!.s3),
  }
}


export function mskChannelLoggingInfoToHclTerraform(struct?: MskChannelLoggingInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_logs: {
      value: cdktn.listMapperHcl(mskChannelLoggingInfoCloudwatchLogsToHclTerraform, true)(struct!.cloudwatchLogs),
      isBlock: true,
      type: "list",
      storageClassType: "MskChannelLoggingInfoCloudwatchLogsList",
    },
    firehose: {
      value: cdktn.listMapperHcl(mskChannelLoggingInfoFirehoseToHclTerraform, true)(struct!.firehose),
      isBlock: true,
      type: "list",
      storageClassType: "MskChannelLoggingInfoFirehoseList",
    },
    s3: {
      value: cdktn.listMapperHcl(mskChannelLoggingInfoS3ToHclTerraform, true)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "MskChannelLoggingInfoS3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelLoggingInfoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelLoggingInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    if (this._firehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehose = this._firehose?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelLoggingInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchLogs.internalValue = undefined;
      this._firehose.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
      this._firehose.internalValue = value.firehose;
      this._s3.internalValue = value.s3;
    }
  }

  // cloudwatch_logs - computed: false, optional: true, required: false
  private _cloudwatchLogs = new MskChannelLoggingInfoCloudwatchLogsList(this, "cloudwatch_logs", false);
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: MskChannelLoggingInfoCloudwatchLogs[] | cdktn.IResolvable) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }

  // firehose - computed: false, optional: true, required: false
  private _firehose = new MskChannelLoggingInfoFirehoseList(this, "firehose", false);
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: MskChannelLoggingInfoFirehose[] | cdktn.IResolvable) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new MskChannelLoggingInfoS3List(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: MskChannelLoggingInfoS3[] | cdktn.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}

export class MskChannelLoggingInfoList extends cdktn.ComplexList {
  public internalValue? : MskChannelLoggingInfo[] | cdktn.IResolvable

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
  public get(index: number): MskChannelLoggingInfoOutputReference {
    return new MskChannelLoggingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelS3DestinationDeadLetterQueueS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
}

export function mskChannelS3DestinationDeadLetterQueueS3ToTerraform(struct?: MskChannelS3DestinationDeadLetterQueueS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    error_output_prefix: cdktn.stringToTerraform(struct!.errorOutputPrefix),
    expected_bucket_owner: cdktn.stringToTerraform(struct!.expectedBucketOwner),
  }
}


export function mskChannelS3DestinationDeadLetterQueueS3ToHclTerraform(struct?: MskChannelS3DestinationDeadLetterQueueS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_output_prefix: {
      value: cdktn.stringToHclTerraform(struct!.errorOutputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expected_bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.expectedBucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelS3DestinationDeadLetterQueueS3OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelS3DestinationDeadLetterQueueS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._errorOutputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
    }
    if (this._expectedBucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedBucketOwner = this._expectedBucketOwner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelS3DestinationDeadLetterQueueS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketArn = undefined;
      this._errorOutputPrefix = undefined;
      this._expectedBucketOwner = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketArn = value.bucketArn;
      this._errorOutputPrefix = value.errorOutputPrefix;
      this._expectedBucketOwner = value.expectedBucketOwner;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix;
  }

  // expected_bucket_owner - computed: false, optional: true, required: false
  private _expectedBucketOwner?: string; 
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
  public set expectedBucketOwner(value: string) {
    this._expectedBucketOwner = value;
  }
  public resetExpectedBucketOwner() {
    this._expectedBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBucketOwnerInput() {
    return this._expectedBucketOwner;
  }
}

export class MskChannelS3DestinationDeadLetterQueueS3List extends cdktn.ComplexList {
  public internalValue? : MskChannelS3DestinationDeadLetterQueueS3[] | cdktn.IResolvable

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
  public get(index: number): MskChannelS3DestinationDeadLetterQueueS3OutputReference {
    return new MskChannelS3DestinationDeadLetterQueueS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelS3DestinationStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}
  */
  readonly compressionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_key_template MskChannel#output_key_template}
  */
  readonly outputKeyTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_prefix MskChannel#output_prefix}
  */
  readonly outputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#storage_class MskChannel#storage_class}
  */
  readonly storageClass: string;
}

export function mskChannelS3DestinationStorageToTerraform(struct?: MskChannelS3DestinationStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    expected_bucket_owner: cdktn.stringToTerraform(struct!.expectedBucketOwner),
    output_key_template: cdktn.stringToTerraform(struct!.outputKeyTemplate),
    output_prefix: cdktn.stringToTerraform(struct!.outputPrefix),
    storage_class: cdktn.stringToTerraform(struct!.storageClass),
  }
}


export function mskChannelS3DestinationStorageToHclTerraform(struct?: MskChannelS3DestinationStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
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
    expected_bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.expectedBucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_key_template: {
      value: cdktn.stringToHclTerraform(struct!.outputKeyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_prefix: {
      value: cdktn.stringToHclTerraform(struct!.outputPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktn.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelS3DestinationStorageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelS3DestinationStorage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._expectedBucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedBucketOwner = this._expectedBucketOwner;
    }
    if (this._outputKeyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputKeyTemplate = this._outputKeyTemplate;
    }
    if (this._outputPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputPrefix = this._outputPrefix;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelS3DestinationStorage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketArn = undefined;
      this._compressionType = undefined;
      this._expectedBucketOwner = undefined;
      this._outputKeyTemplate = undefined;
      this._outputPrefix = undefined;
      this._storageClass = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketArn = value.bucketArn;
      this._compressionType = value.compressionType;
      this._expectedBucketOwner = value.expectedBucketOwner;
      this._outputKeyTemplate = value.outputKeyTemplate;
      this._outputPrefix = value.outputPrefix;
      this._storageClass = value.storageClass;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
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

  // expected_bucket_owner - computed: false, optional: true, required: false
  private _expectedBucketOwner?: string; 
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
  public set expectedBucketOwner(value: string) {
    this._expectedBucketOwner = value;
  }
  public resetExpectedBucketOwner() {
    this._expectedBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBucketOwnerInput() {
    return this._expectedBucketOwner;
  }

  // output_key_template - computed: false, optional: true, required: false
  private _outputKeyTemplate?: string; 
  public get outputKeyTemplate() {
    return this.getStringAttribute('output_key_template');
  }
  public set outputKeyTemplate(value: string) {
    this._outputKeyTemplate = value;
  }
  public resetOutputKeyTemplate() {
    this._outputKeyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputKeyTemplateInput() {
    return this._outputKeyTemplate;
  }

  // output_prefix - computed: false, optional: true, required: false
  private _outputPrefix?: string; 
  public get outputPrefix() {
    return this.getStringAttribute('output_prefix');
  }
  public set outputPrefix(value: string) {
    this._outputPrefix = value;
  }
  public resetOutputPrefix() {
    this._outputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPrefixInput() {
    return this._outputPrefix;
  }

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}

export class MskChannelS3DestinationStorageList extends cdktn.ComplexList {
  public internalValue? : MskChannelS3DestinationStorage[] | cdktn.IResolvable

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
  public get(index: number): MskChannelS3DestinationStorageOutputReference {
    return new MskChannelS3DestinationStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelS3Destination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}
  */
  readonly dataFreshnessInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}
  */
  readonly serviceExecutionRoleArn: string;
  /**
  * dead_letter_queue_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}
  */
  readonly deadLetterQueueS3?: MskChannelS3DestinationDeadLetterQueueS3[] | cdktn.IResolvable;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#storage MskChannel#storage}
  */
  readonly storage?: MskChannelS3DestinationStorage[] | cdktn.IResolvable;
}

export function mskChannelS3DestinationToTerraform(struct?: MskChannelS3Destination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_freshness_in_seconds: cdktn.numberToTerraform(struct!.dataFreshnessInSeconds),
    service_execution_role_arn: cdktn.stringToTerraform(struct!.serviceExecutionRoleArn),
    dead_letter_queue_s3: cdktn.listMapper(mskChannelS3DestinationDeadLetterQueueS3ToTerraform, true)(struct!.deadLetterQueueS3),
    storage: cdktn.listMapper(mskChannelS3DestinationStorageToTerraform, true)(struct!.storage),
  }
}


export function mskChannelS3DestinationToHclTerraform(struct?: MskChannelS3Destination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_freshness_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.dataFreshnessInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_execution_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.serviceExecutionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_letter_queue_s3: {
      value: cdktn.listMapperHcl(mskChannelS3DestinationDeadLetterQueueS3ToHclTerraform, true)(struct!.deadLetterQueueS3),
      isBlock: true,
      type: "list",
      storageClassType: "MskChannelS3DestinationDeadLetterQueueS3List",
    },
    storage: {
      value: cdktn.listMapperHcl(mskChannelS3DestinationStorageToHclTerraform, true)(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "MskChannelS3DestinationStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelS3DestinationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelS3Destination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataFreshnessInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFreshnessInSeconds = this._dataFreshnessInSeconds;
    }
    if (this._serviceExecutionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceExecutionRoleArn = this._serviceExecutionRoleArn;
    }
    if (this._deadLetterQueueS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadLetterQueueS3 = this._deadLetterQueueS3?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelS3Destination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataFreshnessInSeconds = undefined;
      this._serviceExecutionRoleArn = undefined;
      this._deadLetterQueueS3.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataFreshnessInSeconds = value.dataFreshnessInSeconds;
      this._serviceExecutionRoleArn = value.serviceExecutionRoleArn;
      this._deadLetterQueueS3.internalValue = value.deadLetterQueueS3;
      this._storage.internalValue = value.storage;
    }
  }

  // data_freshness_in_seconds - computed: true, optional: true, required: false
  private _dataFreshnessInSeconds?: number; 
  public get dataFreshnessInSeconds() {
    return this.getNumberAttribute('data_freshness_in_seconds');
  }
  public set dataFreshnessInSeconds(value: number) {
    this._dataFreshnessInSeconds = value;
  }
  public resetDataFreshnessInSeconds() {
    this._dataFreshnessInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFreshnessInSecondsInput() {
    return this._dataFreshnessInSeconds;
  }

  // service_execution_role_arn - computed: false, optional: false, required: true
  private _serviceExecutionRoleArn?: string; 
  public get serviceExecutionRoleArn() {
    return this.getStringAttribute('service_execution_role_arn');
  }
  public set serviceExecutionRoleArn(value: string) {
    this._serviceExecutionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceExecutionRoleArnInput() {
    return this._serviceExecutionRoleArn;
  }

  // dead_letter_queue_s3 - computed: false, optional: true, required: false
  private _deadLetterQueueS3 = new MskChannelS3DestinationDeadLetterQueueS3List(this, "dead_letter_queue_s3", false);
  public get deadLetterQueueS3() {
    return this._deadLetterQueueS3;
  }
  public putDeadLetterQueueS3(value: MskChannelS3DestinationDeadLetterQueueS3[] | cdktn.IResolvable) {
    this._deadLetterQueueS3.internalValue = value;
  }
  public resetDeadLetterQueueS3() {
    this._deadLetterQueueS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterQueueS3Input() {
    return this._deadLetterQueueS3.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new MskChannelS3DestinationStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: MskChannelS3DestinationStorage[] | cdktn.IResolvable) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}

export class MskChannelS3DestinationList extends cdktn.ComplexList {
  public internalValue? : MskChannelS3Destination[] | cdktn.IResolvable

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
  public get(index: number): MskChannelS3DestinationOutputReference {
    return new MskChannelS3DestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#create MskChannel#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#delete MskChannel#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#update MskChannel#update}
  */
  readonly update?: string;
}

export function mskChannelTimeoutsToTerraform(struct?: MskChannelTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function mskChannelTimeoutsToHclTerraform(struct?: MskChannelTimeouts | cdktn.IResolvable): any {
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
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskChannelTimeouts | cdktn.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface MskChannelTopicConfigurationRecordConverter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#value_converter MskChannel#value_converter}
  */
  readonly valueConverter: string;
}

export function mskChannelTopicConfigurationRecordConverterToTerraform(struct?: MskChannelTopicConfigurationRecordConverter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value_converter: cdktn.stringToTerraform(struct!.valueConverter),
  }
}


export function mskChannelTopicConfigurationRecordConverterToHclTerraform(struct?: MskChannelTopicConfigurationRecordConverter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value_converter: {
      value: cdktn.stringToHclTerraform(struct!.valueConverter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelTopicConfigurationRecordConverterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelTopicConfigurationRecordConverter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueConverter !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueConverter = this._valueConverter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelTopicConfigurationRecordConverter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueConverter = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueConverter = value.valueConverter;
    }
  }

  // value_converter - computed: false, optional: false, required: true
  private _valueConverter?: string; 
  public get valueConverter() {
    return this.getStringAttribute('value_converter');
  }
  public set valueConverter(value: string) {
    this._valueConverter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueConverterInput() {
    return this._valueConverter;
  }
}

export class MskChannelTopicConfigurationRecordConverterList extends cdktn.ComplexList {
  public internalValue? : MskChannelTopicConfigurationRecordConverter[] | cdktn.IResolvable

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
  public get(index: number): MskChannelTopicConfigurationRecordConverterOutputReference {
    return new MskChannelTopicConfigurationRecordConverterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelTopicConfigurationRecordSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#gsr_arn MskChannel#gsr_arn}
  */
  readonly gsrArn: string;
}

export function mskChannelTopicConfigurationRecordSchemaToTerraform(struct?: MskChannelTopicConfigurationRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gsr_arn: cdktn.stringToTerraform(struct!.gsrArn),
  }
}


export function mskChannelTopicConfigurationRecordSchemaToHclTerraform(struct?: MskChannelTopicConfigurationRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gsr_arn: {
      value: cdktn.stringToHclTerraform(struct!.gsrArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelTopicConfigurationRecordSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelTopicConfigurationRecordSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gsrArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsrArn = this._gsrArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelTopicConfigurationRecordSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gsrArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gsrArn = value.gsrArn;
    }
  }

  // gsr_arn - computed: false, optional: false, required: true
  private _gsrArn?: string; 
  public get gsrArn() {
    return this.getStringAttribute('gsr_arn');
  }
  public set gsrArn(value: string) {
    this._gsrArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gsrArnInput() {
    return this._gsrArn;
  }
}

export class MskChannelTopicConfigurationRecordSchemaList extends cdktn.ComplexList {
  public internalValue? : MskChannelTopicConfigurationRecordSchema[] | cdktn.IResolvable

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
  public get(index: number): MskChannelTopicConfigurationRecordSchemaOutputReference {
    return new MskChannelTopicConfigurationRecordSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MskChannelTopicConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#topic_arn MskChannel#topic_arn}
  */
  readonly topicArn: string;
  /**
  * record_converter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#record_converter MskChannel#record_converter}
  */
  readonly recordConverter?: MskChannelTopicConfigurationRecordConverter[] | cdktn.IResolvable;
  /**
  * record_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#record_schema MskChannel#record_schema}
  */
  readonly recordSchema?: MskChannelTopicConfigurationRecordSchema[] | cdktn.IResolvable;
}

export function mskChannelTopicConfigurationToTerraform(struct?: MskChannelTopicConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
    record_converter: cdktn.listMapper(mskChannelTopicConfigurationRecordConverterToTerraform, true)(struct!.recordConverter),
    record_schema: cdktn.listMapper(mskChannelTopicConfigurationRecordSchemaToTerraform, true)(struct!.recordSchema),
  }
}


export function mskChannelTopicConfigurationToHclTerraform(struct?: MskChannelTopicConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.topicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_converter: {
      value: cdktn.listMapperHcl(mskChannelTopicConfigurationRecordConverterToHclTerraform, true)(struct!.recordConverter),
      isBlock: true,
      type: "list",
      storageClassType: "MskChannelTopicConfigurationRecordConverterList",
    },
    record_schema: {
      value: cdktn.listMapperHcl(mskChannelTopicConfigurationRecordSchemaToHclTerraform, true)(struct!.recordSchema),
      isBlock: true,
      type: "list",
      storageClassType: "MskChannelTopicConfigurationRecordSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskChannelTopicConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MskChannelTopicConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    if (this._recordConverter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordConverter = this._recordConverter?.internalValue;
    }
    if (this._recordSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSchema = this._recordSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskChannelTopicConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._topicArn = undefined;
      this._recordConverter.internalValue = undefined;
      this._recordSchema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._topicArn = value.topicArn;
      this._recordConverter.internalValue = value.recordConverter;
      this._recordSchema.internalValue = value.recordSchema;
    }
  }

  // topic_arn - computed: false, optional: false, required: true
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }

  // record_converter - computed: false, optional: true, required: false
  private _recordConverter = new MskChannelTopicConfigurationRecordConverterList(this, "record_converter", false);
  public get recordConverter() {
    return this._recordConverter;
  }
  public putRecordConverter(value: MskChannelTopicConfigurationRecordConverter[] | cdktn.IResolvable) {
    this._recordConverter.internalValue = value;
  }
  public resetRecordConverter() {
    this._recordConverter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordConverterInput() {
    return this._recordConverter.internalValue;
  }

  // record_schema - computed: false, optional: true, required: false
  private _recordSchema = new MskChannelTopicConfigurationRecordSchemaList(this, "record_schema", false);
  public get recordSchema() {
    return this._recordSchema;
  }
  public putRecordSchema(value: MskChannelTopicConfigurationRecordSchema[] | cdktn.IResolvable) {
    this._recordSchema.internalValue = value;
  }
  public resetRecordSchema() {
    this._recordSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSchemaInput() {
    return this._recordSchema.internalValue;
  }
}

export class MskChannelTopicConfigurationList extends cdktn.ComplexList {
  public internalValue? : MskChannelTopicConfiguration[] | cdktn.IResolvable

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
  public get(index: number): MskChannelTopicConfigurationOutputReference {
    return new MskChannelTopicConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel aws_msk_channel}
*/
export class MskChannel extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_msk_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MskChannel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MskChannel to import
  * @param importFromId The id of the existing MskChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MskChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_msk_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel aws_msk_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MskChannelConfig
  */
  public constructor(scope: Construct, id: string, config: MskChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_msk_channel',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.66.0',
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
    this._channelName = config.channelName;
    this._clusterArn = config.clusterArn;
    this._region = config.region;
    this._tags = config.tags;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._icebergDestination.internalValue = config.icebergDestination;
    this._loggingInfo.internalValue = config.loggingInfo;
    this._s3Destination.internalValue = config.s3Destination;
    this._timeouts.internalValue = config.timeouts;
    this._topicConfiguration.internalValue = config.topicConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
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

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new MskChannelEncryptionConfigurationList(this, "encryption_configuration", false);
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: MskChannelEncryptionConfiguration[] | cdktn.IResolvable) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // iceberg_destination - computed: false, optional: true, required: false
  private _icebergDestination = new MskChannelIcebergDestinationList(this, "iceberg_destination", false);
  public get icebergDestination() {
    return this._icebergDestination;
  }
  public putIcebergDestination(value: MskChannelIcebergDestination[] | cdktn.IResolvable) {
    this._icebergDestination.internalValue = value;
  }
  public resetIcebergDestination() {
    this._icebergDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergDestinationInput() {
    return this._icebergDestination.internalValue;
  }

  // logging_info - computed: false, optional: true, required: false
  private _loggingInfo = new MskChannelLoggingInfoList(this, "logging_info", false);
  public get loggingInfo() {
    return this._loggingInfo;
  }
  public putLoggingInfo(value: MskChannelLoggingInfo[] | cdktn.IResolvable) {
    this._loggingInfo.internalValue = value;
  }
  public resetLoggingInfo() {
    this._loggingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInfoInput() {
    return this._loggingInfo.internalValue;
  }

  // s3_destination - computed: false, optional: true, required: false
  private _s3Destination = new MskChannelS3DestinationList(this, "s3_destination", false);
  public get s3Destination() {
    return this._s3Destination;
  }
  public putS3Destination(value: MskChannelS3Destination[] | cdktn.IResolvable) {
    this._s3Destination.internalValue = value;
  }
  public resetS3Destination() {
    this._s3Destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DestinationInput() {
    return this._s3Destination.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MskChannelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MskChannelTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // topic_configuration - computed: false, optional: true, required: false
  private _topicConfiguration = new MskChannelTopicConfigurationList(this, "topic_configuration", false);
  public get topicConfiguration() {
    return this._topicConfiguration;
  }
  public putTopicConfiguration(value: MskChannelTopicConfiguration[] | cdktn.IResolvable) {
    this._topicConfiguration.internalValue = value;
  }
  public resetTopicConfiguration() {
    this._topicConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicConfigurationInput() {
    return this._topicConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_name: cdktn.stringToTerraform(this._channelName),
      cluster_arn: cdktn.stringToTerraform(this._clusterArn),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      encryption_configuration: cdktn.listMapper(mskChannelEncryptionConfigurationToTerraform, true)(this._encryptionConfiguration.internalValue),
      iceberg_destination: cdktn.listMapper(mskChannelIcebergDestinationToTerraform, true)(this._icebergDestination.internalValue),
      logging_info: cdktn.listMapper(mskChannelLoggingInfoToTerraform, true)(this._loggingInfo.internalValue),
      s3_destination: cdktn.listMapper(mskChannelS3DestinationToTerraform, true)(this._s3Destination.internalValue),
      timeouts: mskChannelTimeoutsToTerraform(this._timeouts.internalValue),
      topic_configuration: cdktn.listMapper(mskChannelTopicConfigurationToTerraform, true)(this._topicConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_name: {
        value: cdktn.stringToHclTerraform(this._channelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_arn: {
        value: cdktn.stringToHclTerraform(this._clusterArn),
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
      encryption_configuration: {
        value: cdktn.listMapperHcl(mskChannelEncryptionConfigurationToHclTerraform, true)(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MskChannelEncryptionConfigurationList",
      },
      iceberg_destination: {
        value: cdktn.listMapperHcl(mskChannelIcebergDestinationToHclTerraform, true)(this._icebergDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MskChannelIcebergDestinationList",
      },
      logging_info: {
        value: cdktn.listMapperHcl(mskChannelLoggingInfoToHclTerraform, true)(this._loggingInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MskChannelLoggingInfoList",
      },
      s3_destination: {
        value: cdktn.listMapperHcl(mskChannelS3DestinationToHclTerraform, true)(this._s3Destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MskChannelS3DestinationList",
      },
      timeouts: {
        value: mskChannelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MskChannelTimeouts",
      },
      topic_configuration: {
        value: cdktn.listMapperHcl(mskChannelTopicConfigurationToHclTerraform, true)(this._topicConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MskChannelTopicConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
