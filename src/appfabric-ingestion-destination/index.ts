/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AppfabricIngestionDestinationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#app_bundle_arn AppfabricIngestionDestination#app_bundle_arn}
  */
  readonly appBundleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#ingestion_arn AppfabricIngestionDestination#ingestion_arn}
  */
  readonly ingestionArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#region AppfabricIngestionDestination#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#tags AppfabricIngestionDestination#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * destination_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#destination_configuration AppfabricIngestionDestination#destination_configuration}
  */
  readonly destinationConfiguration?: AppfabricIngestionDestinationDestinationConfiguration[] | cdktn.IResolvable;
  /**
  * processing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#processing_configuration AppfabricIngestionDestination#processing_configuration}
  */
  readonly processingConfiguration?: AppfabricIngestionDestinationProcessingConfiguration[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#timeouts AppfabricIngestionDestination#timeouts}
  */
  readonly timeouts?: AppfabricIngestionDestinationTimeouts;
}
export interface AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#stream_name AppfabricIngestionDestination#stream_name}
  */
  readonly streamName: string;
}

export function appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamToTerraform(struct?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    stream_name: cdktn.stringToTerraform(struct!.streamName),
  }
}


export function appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamToHclTerraform(struct?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    stream_name: {
      value: cdktn.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._streamName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._streamName = value.streamName;
    }
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}

export class AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList extends cdktn.ComplexList {
  public internalValue? : AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream[] | cdktn.IResolvable

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
  public get(index: number): AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference {
    return new AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#bucket_name AppfabricIngestionDestination#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#prefix AppfabricIngestionDestination#prefix}
  */
  readonly prefix?: string;
}

export function appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketToTerraform(struct?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketToHclTerraform(struct?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._prefix = value.prefix;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
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

export class AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList extends cdktn.ComplexList {
  public internalValue? : AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket[] | cdktn.IResolvable

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
  public get(index: number): AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference {
    return new AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination {
  /**
  * firehose_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#firehose_stream AppfabricIngestionDestination#firehose_stream}
  */
  readonly firehoseStream?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream[] | cdktn.IResolvable;
  /**
  * s3_bucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#s3_bucket AppfabricIngestionDestination#s3_bucket}
  */
  readonly s3Bucket?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket[] | cdktn.IResolvable;
}

export function appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationToTerraform(struct?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    firehose_stream: cdktn.listMapper(appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamToTerraform, true)(struct!.firehoseStream),
    s3_bucket: cdktn.listMapper(appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketToTerraform, true)(struct!.s3Bucket),
  }
}


export function appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationToHclTerraform(struct?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    firehose_stream: {
      value: cdktn.listMapperHcl(appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamToHclTerraform, true)(struct!.firehoseStream),
      isBlock: true,
      type: "list",
      storageClassType: "AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList",
    },
    s3_bucket: {
      value: cdktn.listMapperHcl(appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketToHclTerraform, true)(struct!.s3Bucket),
      isBlock: true,
      type: "list",
      storageClassType: "AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firehoseStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehoseStream = this._firehoseStream?.internalValue;
    }
    if (this._s3Bucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firehoseStream.internalValue = undefined;
      this._s3Bucket.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firehoseStream.internalValue = value.firehoseStream;
      this._s3Bucket.internalValue = value.s3Bucket;
    }
  }

  // firehose_stream - computed: false, optional: true, required: false
  private _firehoseStream = new AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList(this, "firehose_stream", false);
  public get firehoseStream() {
    return this._firehoseStream;
  }
  public putFirehoseStream(value: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream[] | cdktn.IResolvable) {
    this._firehoseStream.internalValue = value;
  }
  public resetFirehoseStream() {
    this._firehoseStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseStreamInput() {
    return this._firehoseStream.internalValue;
  }

  // s3_bucket - computed: false, optional: true, required: false
  private _s3Bucket = new AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList(this, "s3_bucket", false);
  public get s3Bucket() {
    return this._s3Bucket;
  }
  public putS3Bucket(value: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket[] | cdktn.IResolvable) {
    this._s3Bucket.internalValue = value;
  }
  public resetS3Bucket() {
    this._s3Bucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket.internalValue;
  }
}

export class AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList extends cdktn.ComplexList {
  public internalValue? : AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination[] | cdktn.IResolvable

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
  public get(index: number): AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference {
    return new AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppfabricIngestionDestinationDestinationConfigurationAuditLog {
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#destination AppfabricIngestionDestination#destination}
  */
  readonly destination?: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination[] | cdktn.IResolvable;
}

export function appfabricIngestionDestinationDestinationConfigurationAuditLogToTerraform(struct?: AppfabricIngestionDestinationDestinationConfigurationAuditLog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.listMapper(appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationToTerraform, true)(struct!.destination),
  }
}


export function appfabricIngestionDestinationDestinationConfigurationAuditLogToHclTerraform(struct?: AppfabricIngestionDestinationDestinationConfigurationAuditLog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: cdktn.listMapperHcl(appfabricIngestionDestinationDestinationConfigurationAuditLogDestinationToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppfabricIngestionDestinationDestinationConfigurationAuditLog | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppfabricIngestionDestinationDestinationConfigurationAuditLog | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination[] | cdktn.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }
}

export class AppfabricIngestionDestinationDestinationConfigurationAuditLogList extends cdktn.ComplexList {
  public internalValue? : AppfabricIngestionDestinationDestinationConfigurationAuditLog[] | cdktn.IResolvable

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
  public get(index: number): AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference {
    return new AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppfabricIngestionDestinationDestinationConfiguration {
  /**
  * audit_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#audit_log AppfabricIngestionDestination#audit_log}
  */
  readonly auditLog?: AppfabricIngestionDestinationDestinationConfigurationAuditLog[] | cdktn.IResolvable;
}

export function appfabricIngestionDestinationDestinationConfigurationToTerraform(struct?: AppfabricIngestionDestinationDestinationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audit_log: cdktn.listMapper(appfabricIngestionDestinationDestinationConfigurationAuditLogToTerraform, true)(struct!.auditLog),
  }
}


export function appfabricIngestionDestinationDestinationConfigurationToHclTerraform(struct?: AppfabricIngestionDestinationDestinationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audit_log: {
      value: cdktn.listMapperHcl(appfabricIngestionDestinationDestinationConfigurationAuditLogToHclTerraform, true)(struct!.auditLog),
      isBlock: true,
      type: "list",
      storageClassType: "AppfabricIngestionDestinationDestinationConfigurationAuditLogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppfabricIngestionDestinationDestinationConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppfabricIngestionDestinationDestinationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLog = this._auditLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppfabricIngestionDestinationDestinationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auditLog.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auditLog.internalValue = value.auditLog;
    }
  }

  // audit_log - computed: false, optional: true, required: false
  private _auditLog = new AppfabricIngestionDestinationDestinationConfigurationAuditLogList(this, "audit_log", false);
  public get auditLog() {
    return this._auditLog;
  }
  public putAuditLog(value: AppfabricIngestionDestinationDestinationConfigurationAuditLog[] | cdktn.IResolvable) {
    this._auditLog.internalValue = value;
  }
  public resetAuditLog() {
    this._auditLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogInput() {
    return this._auditLog.internalValue;
  }
}

export class AppfabricIngestionDestinationDestinationConfigurationList extends cdktn.ComplexList {
  public internalValue? : AppfabricIngestionDestinationDestinationConfiguration[] | cdktn.IResolvable

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
  public get(index: number): AppfabricIngestionDestinationDestinationConfigurationOutputReference {
    return new AppfabricIngestionDestinationDestinationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppfabricIngestionDestinationProcessingConfigurationAuditLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#format AppfabricIngestionDestination#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#schema AppfabricIngestionDestination#schema}
  */
  readonly schema: string;
}

export function appfabricIngestionDestinationProcessingConfigurationAuditLogToTerraform(struct?: AppfabricIngestionDestinationProcessingConfigurationAuditLog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    format: cdktn.stringToTerraform(struct!.format),
    schema: cdktn.stringToTerraform(struct!.schema),
  }
}


export function appfabricIngestionDestinationProcessingConfigurationAuditLogToHclTerraform(struct?: AppfabricIngestionDestinationProcessingConfigurationAuditLog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppfabricIngestionDestinationProcessingConfigurationAuditLog | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppfabricIngestionDestinationProcessingConfigurationAuditLog | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._schema = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._schema = value.schema;
    }
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }
}

export class AppfabricIngestionDestinationProcessingConfigurationAuditLogList extends cdktn.ComplexList {
  public internalValue? : AppfabricIngestionDestinationProcessingConfigurationAuditLog[] | cdktn.IResolvable

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
  public get(index: number): AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference {
    return new AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppfabricIngestionDestinationProcessingConfiguration {
  /**
  * audit_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#audit_log AppfabricIngestionDestination#audit_log}
  */
  readonly auditLog?: AppfabricIngestionDestinationProcessingConfigurationAuditLog[] | cdktn.IResolvable;
}

export function appfabricIngestionDestinationProcessingConfigurationToTerraform(struct?: AppfabricIngestionDestinationProcessingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audit_log: cdktn.listMapper(appfabricIngestionDestinationProcessingConfigurationAuditLogToTerraform, true)(struct!.auditLog),
  }
}


export function appfabricIngestionDestinationProcessingConfigurationToHclTerraform(struct?: AppfabricIngestionDestinationProcessingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audit_log: {
      value: cdktn.listMapperHcl(appfabricIngestionDestinationProcessingConfigurationAuditLogToHclTerraform, true)(struct!.auditLog),
      isBlock: true,
      type: "list",
      storageClassType: "AppfabricIngestionDestinationProcessingConfigurationAuditLogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppfabricIngestionDestinationProcessingConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppfabricIngestionDestinationProcessingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLog = this._auditLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppfabricIngestionDestinationProcessingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auditLog.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auditLog.internalValue = value.auditLog;
    }
  }

  // audit_log - computed: false, optional: true, required: false
  private _auditLog = new AppfabricIngestionDestinationProcessingConfigurationAuditLogList(this, "audit_log", false);
  public get auditLog() {
    return this._auditLog;
  }
  public putAuditLog(value: AppfabricIngestionDestinationProcessingConfigurationAuditLog[] | cdktn.IResolvable) {
    this._auditLog.internalValue = value;
  }
  public resetAuditLog() {
    this._auditLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogInput() {
    return this._auditLog.internalValue;
  }
}

export class AppfabricIngestionDestinationProcessingConfigurationList extends cdktn.ComplexList {
  public internalValue? : AppfabricIngestionDestinationProcessingConfiguration[] | cdktn.IResolvable

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
  public get(index: number): AppfabricIngestionDestinationProcessingConfigurationOutputReference {
    return new AppfabricIngestionDestinationProcessingConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppfabricIngestionDestinationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#create AppfabricIngestionDestination#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#delete AppfabricIngestionDestination#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#update AppfabricIngestionDestination#update}
  */
  readonly update?: string;
}

export function appfabricIngestionDestinationTimeoutsToTerraform(struct?: AppfabricIngestionDestinationTimeouts | cdktn.IResolvable): any {
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


export function appfabricIngestionDestinationTimeoutsToHclTerraform(struct?: AppfabricIngestionDestinationTimeouts | cdktn.IResolvable): any {
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

export class AppfabricIngestionDestinationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppfabricIngestionDestinationTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AppfabricIngestionDestinationTimeouts | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination aws_appfabric_ingestion_destination}
*/
export class AppfabricIngestionDestination extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appfabric_ingestion_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AppfabricIngestionDestination resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfabricIngestionDestination to import
  * @param importFromId The id of the existing AppfabricIngestionDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfabricIngestionDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_appfabric_ingestion_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/appfabric_ingestion_destination aws_appfabric_ingestion_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfabricIngestionDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: AppfabricIngestionDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appfabric_ingestion_destination',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.61.0',
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
    this._appBundleArn = config.appBundleArn;
    this._ingestionArn = config.ingestionArn;
    this._region = config.region;
    this._tags = config.tags;
    this._destinationConfiguration.internalValue = config.destinationConfiguration;
    this._processingConfiguration.internalValue = config.processingConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_bundle_arn - computed: false, optional: false, required: true
  private _appBundleArn?: string; 
  public get appBundleArn() {
    return this.getStringAttribute('app_bundle_arn');
  }
  public set appBundleArn(value: string) {
    this._appBundleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appBundleArnInput() {
    return this._appBundleArn;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingestion_arn - computed: false, optional: false, required: true
  private _ingestionArn?: string; 
  public get ingestionArn() {
    return this.getStringAttribute('ingestion_arn');
  }
  public set ingestionArn(value: string) {
    this._ingestionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionArnInput() {
    return this._ingestionArn;
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

  // destination_configuration - computed: false, optional: true, required: false
  private _destinationConfiguration = new AppfabricIngestionDestinationDestinationConfigurationList(this, "destination_configuration", false);
  public get destinationConfiguration() {
    return this._destinationConfiguration;
  }
  public putDestinationConfiguration(value: AppfabricIngestionDestinationDestinationConfiguration[] | cdktn.IResolvable) {
    this._destinationConfiguration.internalValue = value;
  }
  public resetDestinationConfiguration() {
    this._destinationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigurationInput() {
    return this._destinationConfiguration.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new AppfabricIngestionDestinationProcessingConfigurationList(this, "processing_configuration", false);
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: AppfabricIngestionDestinationProcessingConfiguration[] | cdktn.IResolvable) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppfabricIngestionDestinationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppfabricIngestionDestinationTimeouts) {
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
      app_bundle_arn: cdktn.stringToTerraform(this._appBundleArn),
      ingestion_arn: cdktn.stringToTerraform(this._ingestionArn),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      destination_configuration: cdktn.listMapper(appfabricIngestionDestinationDestinationConfigurationToTerraform, true)(this._destinationConfiguration.internalValue),
      processing_configuration: cdktn.listMapper(appfabricIngestionDestinationProcessingConfigurationToTerraform, true)(this._processingConfiguration.internalValue),
      timeouts: appfabricIngestionDestinationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_bundle_arn: {
        value: cdktn.stringToHclTerraform(this._appBundleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingestion_arn: {
        value: cdktn.stringToHclTerraform(this._ingestionArn),
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
      destination_configuration: {
        value: cdktn.listMapperHcl(appfabricIngestionDestinationDestinationConfigurationToHclTerraform, true)(this._destinationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppfabricIngestionDestinationDestinationConfigurationList",
      },
      processing_configuration: {
        value: cdktn.listMapperHcl(appfabricIngestionDestinationProcessingConfigurationToHclTerraform, true)(this._processingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppfabricIngestionDestinationProcessingConfigurationList",
      },
      timeouts: {
        value: appfabricIngestionDestinationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppfabricIngestionDestinationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
