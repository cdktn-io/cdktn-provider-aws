/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TimestreamqueryScheduledQueryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#execution_role_arn TimestreamqueryScheduledQuery#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#kms_key_id TimestreamqueryScheduledQuery#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#name TimestreamqueryScheduledQuery#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#query_string TimestreamqueryScheduledQuery#query_string}
  */
  readonly queryString: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#region TimestreamqueryScheduledQuery#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#tags TimestreamqueryScheduledQuery#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * error_report_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#error_report_configuration TimestreamqueryScheduledQuery#error_report_configuration}
  */
  readonly errorReportConfiguration?: TimestreamqueryScheduledQueryErrorReportConfiguration[] | cdktn.IResolvable;
  /**
  * last_run_summary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#last_run_summary TimestreamqueryScheduledQuery#last_run_summary}
  */
  readonly lastRunSummary?: TimestreamqueryScheduledQueryLastRunSummary[] | cdktn.IResolvable;
  /**
  * notification_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#notification_configuration TimestreamqueryScheduledQuery#notification_configuration}
  */
  readonly notificationConfiguration?: TimestreamqueryScheduledQueryNotificationConfiguration[] | cdktn.IResolvable;
  /**
  * recently_failed_runs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#recently_failed_runs TimestreamqueryScheduledQuery#recently_failed_runs}
  */
  readonly recentlyFailedRuns?: TimestreamqueryScheduledQueryRecentlyFailedRuns[] | cdktn.IResolvable;
  /**
  * schedule_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#schedule_configuration TimestreamqueryScheduledQuery#schedule_configuration}
  */
  readonly scheduleConfiguration?: TimestreamqueryScheduledQueryScheduleConfiguration[] | cdktn.IResolvable;
  /**
  * target_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#target_configuration TimestreamqueryScheduledQuery#target_configuration}
  */
  readonly targetConfiguration?: TimestreamqueryScheduledQueryTargetConfiguration[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#timeouts TimestreamqueryScheduledQuery#timeouts}
  */
  readonly timeouts?: TimestreamqueryScheduledQueryTimeouts;
}
export interface TimestreamqueryScheduledQueryErrorReportConfigurationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#bucket_name TimestreamqueryScheduledQuery#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#encryption_option TimestreamqueryScheduledQuery#encryption_option}
  */
  readonly encryptionOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#object_key_prefix TimestreamqueryScheduledQuery#object_key_prefix}
  */
  readonly objectKeyPrefix?: string;
}

export function timestreamqueryScheduledQueryErrorReportConfigurationS3ConfigurationToTerraform(struct?: TimestreamqueryScheduledQueryErrorReportConfigurationS3Configuration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    encryption_option: cdktn.stringToTerraform(struct!.encryptionOption),
    object_key_prefix: cdktn.stringToTerraform(struct!.objectKeyPrefix),
  }
}


export function timestreamqueryScheduledQueryErrorReportConfigurationS3ConfigurationToHclTerraform(struct?: TimestreamqueryScheduledQueryErrorReportConfigurationS3Configuration | cdktn.IResolvable): any {
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
    encryption_option: {
      value: cdktn.stringToHclTerraform(struct!.encryptionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.objectKeyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryErrorReportConfigurationS3Configuration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._encryptionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionOption = this._encryptionOption;
    }
    if (this._objectKeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectKeyPrefix = this._objectKeyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryErrorReportConfigurationS3Configuration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._encryptionOption = undefined;
      this._objectKeyPrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._encryptionOption = value.encryptionOption;
      this._objectKeyPrefix = value.objectKeyPrefix;
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

  // encryption_option - computed: true, optional: true, required: false
  private _encryptionOption?: string; 
  public get encryptionOption() {
    return this.getStringAttribute('encryption_option');
  }
  public set encryptionOption(value: string) {
    this._encryptionOption = value;
  }
  public resetEncryptionOption() {
    this._encryptionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionOptionInput() {
    return this._encryptionOption;
  }

  // object_key_prefix - computed: false, optional: true, required: false
  private _objectKeyPrefix?: string; 
  public get objectKeyPrefix() {
    return this.getStringAttribute('object_key_prefix');
  }
  public set objectKeyPrefix(value: string) {
    this._objectKeyPrefix = value;
  }
  public resetObjectKeyPrefix() {
    this._objectKeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectKeyPrefixInput() {
    return this._objectKeyPrefix;
  }
}

export class TimestreamqueryScheduledQueryErrorReportConfigurationS3ConfigurationList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryErrorReportConfigurationS3Configuration[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference {
    return new TimestreamqueryScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryErrorReportConfiguration {
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#s3_configuration TimestreamqueryScheduledQuery#s3_configuration}
  */
  readonly s3Configuration?: TimestreamqueryScheduledQueryErrorReportConfigurationS3Configuration[] | cdktn.IResolvable;
}

export function timestreamqueryScheduledQueryErrorReportConfigurationToTerraform(struct?: TimestreamqueryScheduledQueryErrorReportConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_configuration: cdktn.listMapper(timestreamqueryScheduledQueryErrorReportConfigurationS3ConfigurationToTerraform, true)(struct!.s3Configuration),
  }
}


export function timestreamqueryScheduledQueryErrorReportConfigurationToHclTerraform(struct?: TimestreamqueryScheduledQueryErrorReportConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_configuration: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryErrorReportConfigurationS3ConfigurationToHclTerraform, true)(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryErrorReportConfigurationS3ConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryErrorReportConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryErrorReportConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryErrorReportConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Configuration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Configuration.internalValue = value.s3Configuration;
    }
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration = new TimestreamqueryScheduledQueryErrorReportConfigurationS3ConfigurationList(this, "s3_configuration", false);
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: TimestreamqueryScheduledQueryErrorReportConfigurationS3Configuration[] | cdktn.IResolvable) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }
}

export class TimestreamqueryScheduledQueryErrorReportConfigurationList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryErrorReportConfiguration[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryErrorReportConfigurationOutputReference {
    return new TimestreamqueryScheduledQueryErrorReportConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation {
}

export function timestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function timestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // object_key - computed: true, optional: false, required: false
  public get objectKey() {
    return this.getStringAttribute('object_key');
  }
}

export class TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationOutputReference {
    return new TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocation {
  /**
  * s3_report_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#s3_report_location TimestreamqueryScheduledQuery#s3_report_location}
  */
  readonly s3ReportLocation?: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation[] | cdktn.IResolvable;
}

export function timestreamqueryScheduledQueryLastRunSummaryErrorReportLocationToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_report_location: cdktn.listMapper(timestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationToTerraform, true)(struct!.s3ReportLocation),
  }
}


export function timestreamqueryScheduledQueryLastRunSummaryErrorReportLocationToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_report_location: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationToHclTerraform, true)(struct!.s3ReportLocation),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3ReportLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ReportLocation = this._s3ReportLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3ReportLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3ReportLocation.internalValue = value.s3ReportLocation;
    }
  }

  // s3_report_location - computed: false, optional: true, required: false
  private _s3ReportLocation = new TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationList(this, "s3_report_location", false);
  public get s3ReportLocation() {
    return this._s3ReportLocation;
  }
  public putS3ReportLocation(value: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation[] | cdktn.IResolvable) {
    this._s3ReportLocation.internalValue = value;
  }
  public resetS3ReportLocation() {
    this._s3ReportLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ReportLocationInput() {
    return this._s3ReportLocation.internalValue;
  }
}

export class TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocation[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationOutputReference {
    return new TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryLastRunSummaryExecutionStats {
}

export function timestreamqueryScheduledQueryLastRunSummaryExecutionStatsToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryExecutionStats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function timestreamqueryScheduledQueryLastRunSummaryExecutionStatsToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryExecutionStats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class TimestreamqueryScheduledQueryLastRunSummaryExecutionStatsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryLastRunSummaryExecutionStats | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryLastRunSummaryExecutionStats | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // bytes_metered - computed: true, optional: false, required: false
  public get bytesMetered() {
    return this.getNumberAttribute('bytes_metered');
  }

  // cumulative_bytes_scanned - computed: true, optional: false, required: false
  public get cumulativeBytesScanned() {
    return this.getNumberAttribute('cumulative_bytes_scanned');
  }

  // data_writes - computed: true, optional: false, required: false
  public get dataWrites() {
    return this.getNumberAttribute('data_writes');
  }

  // execution_time_in_millis - computed: true, optional: false, required: false
  public get executionTimeInMillis() {
    return this.getNumberAttribute('execution_time_in_millis');
  }

  // query_result_rows - computed: true, optional: false, required: false
  public get queryResultRows() {
    return this.getNumberAttribute('query_result_rows');
  }

  // records_ingested - computed: true, optional: false, required: false
  public get recordsIngested() {
    return this.getNumberAttribute('records_ingested');
  }
}

export class TimestreamqueryScheduledQueryLastRunSummaryExecutionStatsList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryLastRunSummaryExecutionStats[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryLastRunSummaryExecutionStatsOutputReference {
    return new TimestreamqueryScheduledQueryLastRunSummaryExecutionStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMax {
}

export function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMax | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMax | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMax | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMax | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // partition_key - computed: true, optional: false, required: false
  public get partitionKey() {
    return this.getListAttribute('partition_key');
  }

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMax[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxOutputReference {
    return new TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage {
  /**
  * max block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#max TimestreamqueryScheduledQuery#max}
  */
  readonly max?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMax[] | cdktn.IResolvable;
}

export function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.listMapper(timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxToTerraform, true)(struct!.max),
  }
}


export function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxToHclTerraform, true)(struct!.max),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max.internalValue = value.max;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max = new TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxList(this, "max", false);
  public get max() {
    return this._max;
  }
  public putMax(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMax[] | cdktn.IResolvable) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }
}

export class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageOutputReference {
    return new TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMax {
}

export function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMax | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMax | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMax | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMax | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMax[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxOutputReference {
    return new TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange {
  /**
  * max block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#max TimestreamqueryScheduledQuery#max}
  */
  readonly max?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMax[] | cdktn.IResolvable;
}

export function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.listMapper(timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxToTerraform, true)(struct!.max),
  }
}


export function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxToHclTerraform, true)(struct!.max),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max.internalValue = value.max;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max = new TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxList(this, "max", false);
  public get max() {
    return this._max;
  }
  public putMax(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMax[] | cdktn.IResolvable) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }
}

export class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeOutputReference {
    return new TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponse {
  /**
  * query_spatial_coverage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#query_spatial_coverage TimestreamqueryScheduledQuery#query_spatial_coverage}
  */
  readonly querySpatialCoverage?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage[] | cdktn.IResolvable;
  /**
  * query_temporal_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#query_temporal_range TimestreamqueryScheduledQuery#query_temporal_range}
  */
  readonly queryTemporalRange?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange[] | cdktn.IResolvable;
}

export function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query_spatial_coverage: cdktn.listMapper(timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageToTerraform, true)(struct!.querySpatialCoverage),
    query_temporal_range: cdktn.listMapper(timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeToTerraform, true)(struct!.queryTemporalRange),
  }
}


export function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query_spatial_coverage: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageToHclTerraform, true)(struct!.querySpatialCoverage),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageList",
    },
    query_temporal_range: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeToHclTerraform, true)(struct!.queryTemporalRange),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponse | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._querySpatialCoverage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.querySpatialCoverage = this._querySpatialCoverage?.internalValue;
    }
    if (this._queryTemporalRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTemporalRange = this._queryTemporalRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponse | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._querySpatialCoverage.internalValue = undefined;
      this._queryTemporalRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._querySpatialCoverage.internalValue = value.querySpatialCoverage;
      this._queryTemporalRange.internalValue = value.queryTemporalRange;
    }
  }

  // output_bytes - computed: true, optional: false, required: false
  public get outputBytes() {
    return this.getNumberAttribute('output_bytes');
  }

  // output_rows - computed: true, optional: false, required: false
  public get outputRows() {
    return this.getNumberAttribute('output_rows');
  }

  // query_table_count - computed: true, optional: false, required: false
  public get queryTableCount() {
    return this.getNumberAttribute('query_table_count');
  }

  // query_spatial_coverage - computed: false, optional: true, required: false
  private _querySpatialCoverage = new TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageList(this, "query_spatial_coverage", false);
  public get querySpatialCoverage() {
    return this._querySpatialCoverage;
  }
  public putQuerySpatialCoverage(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage[] | cdktn.IResolvable) {
    this._querySpatialCoverage.internalValue = value;
  }
  public resetQuerySpatialCoverage() {
    this._querySpatialCoverage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querySpatialCoverageInput() {
    return this._querySpatialCoverage.internalValue;
  }

  // query_temporal_range - computed: false, optional: true, required: false
  private _queryTemporalRange = new TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeList(this, "query_temporal_range", false);
  public get queryTemporalRange() {
    return this._queryTemporalRange;
  }
  public putQueryTemporalRange(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange[] | cdktn.IResolvable) {
    this._queryTemporalRange.internalValue = value;
  }
  public resetQueryTemporalRange() {
    this._queryTemporalRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTemporalRangeInput() {
    return this._queryTemporalRange.internalValue;
  }
}

export class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponse[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseOutputReference {
    return new TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryLastRunSummary {
  /**
  * error_report_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#error_report_location TimestreamqueryScheduledQuery#error_report_location}
  */
  readonly errorReportLocation?: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocation[] | cdktn.IResolvable;
  /**
  * execution_stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#execution_stats TimestreamqueryScheduledQuery#execution_stats}
  */
  readonly executionStats?: TimestreamqueryScheduledQueryLastRunSummaryExecutionStats[] | cdktn.IResolvable;
  /**
  * query_insights_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#query_insights_response TimestreamqueryScheduledQuery#query_insights_response}
  */
  readonly queryInsightsResponse?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponse[] | cdktn.IResolvable;
}

export function timestreamqueryScheduledQueryLastRunSummaryToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    error_report_location: cdktn.listMapper(timestreamqueryScheduledQueryLastRunSummaryErrorReportLocationToTerraform, true)(struct!.errorReportLocation),
    execution_stats: cdktn.listMapper(timestreamqueryScheduledQueryLastRunSummaryExecutionStatsToTerraform, true)(struct!.executionStats),
    query_insights_response: cdktn.listMapper(timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseToTerraform, true)(struct!.queryInsightsResponse),
  }
}


export function timestreamqueryScheduledQueryLastRunSummaryToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    error_report_location: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryLastRunSummaryErrorReportLocationToHclTerraform, true)(struct!.errorReportLocation),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationList",
    },
    execution_stats: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryLastRunSummaryExecutionStatsToHclTerraform, true)(struct!.executionStats),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryLastRunSummaryExecutionStatsList",
    },
    query_insights_response: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseToHclTerraform, true)(struct!.queryInsightsResponse),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryLastRunSummaryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryLastRunSummary | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorReportLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorReportLocation = this._errorReportLocation?.internalValue;
    }
    if (this._executionStats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionStats = this._executionStats?.internalValue;
    }
    if (this._queryInsightsResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryInsightsResponse = this._queryInsightsResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryLastRunSummary | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorReportLocation.internalValue = undefined;
      this._executionStats.internalValue = undefined;
      this._queryInsightsResponse.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorReportLocation.internalValue = value.errorReportLocation;
      this._executionStats.internalValue = value.executionStats;
      this._queryInsightsResponse.internalValue = value.queryInsightsResponse;
    }
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // invocation_time - computed: true, optional: false, required: false
  public get invocationTime() {
    return this.getStringAttribute('invocation_time');
  }

  // run_status - computed: true, optional: false, required: false
  public get runStatus() {
    return this.getStringAttribute('run_status');
  }

  // trigger_time - computed: true, optional: false, required: false
  public get triggerTime() {
    return this.getStringAttribute('trigger_time');
  }

  // error_report_location - computed: false, optional: true, required: false
  private _errorReportLocation = new TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationList(this, "error_report_location", false);
  public get errorReportLocation() {
    return this._errorReportLocation;
  }
  public putErrorReportLocation(value: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocation[] | cdktn.IResolvable) {
    this._errorReportLocation.internalValue = value;
  }
  public resetErrorReportLocation() {
    this._errorReportLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorReportLocationInput() {
    return this._errorReportLocation.internalValue;
  }

  // execution_stats - computed: false, optional: true, required: false
  private _executionStats = new TimestreamqueryScheduledQueryLastRunSummaryExecutionStatsList(this, "execution_stats", false);
  public get executionStats() {
    return this._executionStats;
  }
  public putExecutionStats(value: TimestreamqueryScheduledQueryLastRunSummaryExecutionStats[] | cdktn.IResolvable) {
    this._executionStats.internalValue = value;
  }
  public resetExecutionStats() {
    this._executionStats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionStatsInput() {
    return this._executionStats.internalValue;
  }

  // query_insights_response - computed: false, optional: true, required: false
  private _queryInsightsResponse = new TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseList(this, "query_insights_response", false);
  public get queryInsightsResponse() {
    return this._queryInsightsResponse;
  }
  public putQueryInsightsResponse(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponse[] | cdktn.IResolvable) {
    this._queryInsightsResponse.internalValue = value;
  }
  public resetQueryInsightsResponse() {
    this._queryInsightsResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInsightsResponseInput() {
    return this._queryInsightsResponse.internalValue;
  }
}

export class TimestreamqueryScheduledQueryLastRunSummaryList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryLastRunSummary[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryLastRunSummaryOutputReference {
    return new TimestreamqueryScheduledQueryLastRunSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryNotificationConfigurationSnsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#topic_arn TimestreamqueryScheduledQuery#topic_arn}
  */
  readonly topicArn: string;
}

export function timestreamqueryScheduledQueryNotificationConfigurationSnsConfigurationToTerraform(struct?: TimestreamqueryScheduledQueryNotificationConfigurationSnsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function timestreamqueryScheduledQueryNotificationConfigurationSnsConfigurationToHclTerraform(struct?: TimestreamqueryScheduledQueryNotificationConfigurationSnsConfiguration | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryNotificationConfigurationSnsConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryNotificationConfigurationSnsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryNotificationConfigurationSnsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._topicArn = value.topicArn;
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
}

export class TimestreamqueryScheduledQueryNotificationConfigurationSnsConfigurationList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryNotificationConfigurationSnsConfiguration[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryNotificationConfigurationSnsConfigurationOutputReference {
    return new TimestreamqueryScheduledQueryNotificationConfigurationSnsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryNotificationConfiguration {
  /**
  * sns_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#sns_configuration TimestreamqueryScheduledQuery#sns_configuration}
  */
  readonly snsConfiguration?: TimestreamqueryScheduledQueryNotificationConfigurationSnsConfiguration[] | cdktn.IResolvable;
}

export function timestreamqueryScheduledQueryNotificationConfigurationToTerraform(struct?: TimestreamqueryScheduledQueryNotificationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sns_configuration: cdktn.listMapper(timestreamqueryScheduledQueryNotificationConfigurationSnsConfigurationToTerraform, true)(struct!.snsConfiguration),
  }
}


export function timestreamqueryScheduledQueryNotificationConfigurationToHclTerraform(struct?: TimestreamqueryScheduledQueryNotificationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sns_configuration: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryNotificationConfigurationSnsConfigurationToHclTerraform, true)(struct!.snsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryNotificationConfigurationSnsConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryNotificationConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryNotificationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsConfiguration = this._snsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryNotificationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snsConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snsConfiguration.internalValue = value.snsConfiguration;
    }
  }

  // sns_configuration - computed: false, optional: true, required: false
  private _snsConfiguration = new TimestreamqueryScheduledQueryNotificationConfigurationSnsConfigurationList(this, "sns_configuration", false);
  public get snsConfiguration() {
    return this._snsConfiguration;
  }
  public putSnsConfiguration(value: TimestreamqueryScheduledQueryNotificationConfigurationSnsConfiguration[] | cdktn.IResolvable) {
    this._snsConfiguration.internalValue = value;
  }
  public resetSnsConfiguration() {
    this._snsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsConfigurationInput() {
    return this._snsConfiguration.internalValue;
  }
}

export class TimestreamqueryScheduledQueryNotificationConfigurationList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryNotificationConfiguration[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryNotificationConfigurationOutputReference {
    return new TimestreamqueryScheduledQueryNotificationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocation {
}

export function timestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function timestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // object_key - computed: true, optional: false, required: false
  public get objectKey() {
    return this.getStringAttribute('object_key');
  }
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocation[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationOutputReference {
    return new TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocation {
  /**
  * s3_report_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#s3_report_location TimestreamqueryScheduledQuery#s3_report_location}
  */
  readonly s3ReportLocation?: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocation[] | cdktn.IResolvable;
}

export function timestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_report_location: cdktn.listMapper(timestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationToTerraform, true)(struct!.s3ReportLocation),
  }
}


export function timestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_report_location: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationToHclTerraform, true)(struct!.s3ReportLocation),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3ReportLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ReportLocation = this._s3ReportLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3ReportLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3ReportLocation.internalValue = value.s3ReportLocation;
    }
  }

  // s3_report_location - computed: false, optional: true, required: false
  private _s3ReportLocation = new TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationList(this, "s3_report_location", false);
  public get s3ReportLocation() {
    return this._s3ReportLocation;
  }
  public putS3ReportLocation(value: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocation[] | cdktn.IResolvable) {
    this._s3ReportLocation.internalValue = value;
  }
  public resetS3ReportLocation() {
    this._s3ReportLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ReportLocationInput() {
    return this._s3ReportLocation.internalValue;
  }
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocation[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationOutputReference {
    return new TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStats {
}

export function timestreamqueryScheduledQueryRecentlyFailedRunsExecutionStatsToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function timestreamqueryScheduledQueryRecentlyFailedRunsExecutionStatsToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStats | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStatsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStats | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStats | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // bytes_metered - computed: true, optional: false, required: false
  public get bytesMetered() {
    return this.getNumberAttribute('bytes_metered');
  }

  // cumulative_bytes_scanned - computed: true, optional: false, required: false
  public get cumulativeBytesScanned() {
    return this.getNumberAttribute('cumulative_bytes_scanned');
  }

  // data_writes - computed: true, optional: false, required: false
  public get dataWrites() {
    return this.getNumberAttribute('data_writes');
  }

  // execution_time_in_millis - computed: true, optional: false, required: false
  public get executionTimeInMillis() {
    return this.getNumberAttribute('execution_time_in_millis');
  }

  // query_result_rows - computed: true, optional: false, required: false
  public get queryResultRows() {
    return this.getNumberAttribute('query_result_rows');
  }

  // records_ingested - computed: true, optional: false, required: false
  public get recordsIngested() {
    return this.getNumberAttribute('records_ingested');
  }
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStatsList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStats[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStatsOutputReference {
    return new TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMax {
}

export function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMax | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMax | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMax | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMax | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // partition_key - computed: true, optional: false, required: false
  public get partitionKey() {
    return this.getListAttribute('partition_key');
  }

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMax[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxOutputReference {
    return new TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverage {
  /**
  * max block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#max TimestreamqueryScheduledQuery#max}
  */
  readonly max?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMax[] | cdktn.IResolvable;
}

export function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.listMapper(timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxToTerraform, true)(struct!.max),
  }
}


export function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxToHclTerraform, true)(struct!.max),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max.internalValue = value.max;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max = new TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxList(this, "max", false);
  public get max() {
    return this._max;
  }
  public putMax(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMax[] | cdktn.IResolvable) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverage[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageOutputReference {
    return new TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMax {
}

export function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMax | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMax | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMax | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMax | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMax[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxOutputReference {
    return new TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRange {
  /**
  * max block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#max TimestreamqueryScheduledQuery#max}
  */
  readonly max?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMax[] | cdktn.IResolvable;
}

export function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.listMapper(timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxToTerraform, true)(struct!.max),
  }
}


export function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxToHclTerraform, true)(struct!.max),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max.internalValue = value.max;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max = new TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxList(this, "max", false);
  public get max() {
    return this._max;
  }
  public putMax(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMax[] | cdktn.IResolvable) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRange[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeOutputReference {
    return new TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponse {
  /**
  * query_spatial_coverage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#query_spatial_coverage TimestreamqueryScheduledQuery#query_spatial_coverage}
  */
  readonly querySpatialCoverage?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverage[] | cdktn.IResolvable;
  /**
  * query_temporal_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#query_temporal_range TimestreamqueryScheduledQuery#query_temporal_range}
  */
  readonly queryTemporalRange?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRange[] | cdktn.IResolvable;
}

export function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query_spatial_coverage: cdktn.listMapper(timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageToTerraform, true)(struct!.querySpatialCoverage),
    query_temporal_range: cdktn.listMapper(timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeToTerraform, true)(struct!.queryTemporalRange),
  }
}


export function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query_spatial_coverage: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageToHclTerraform, true)(struct!.querySpatialCoverage),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageList",
    },
    query_temporal_range: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeToHclTerraform, true)(struct!.queryTemporalRange),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponse | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._querySpatialCoverage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.querySpatialCoverage = this._querySpatialCoverage?.internalValue;
    }
    if (this._queryTemporalRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTemporalRange = this._queryTemporalRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponse | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._querySpatialCoverage.internalValue = undefined;
      this._queryTemporalRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._querySpatialCoverage.internalValue = value.querySpatialCoverage;
      this._queryTemporalRange.internalValue = value.queryTemporalRange;
    }
  }

  // output_bytes - computed: true, optional: false, required: false
  public get outputBytes() {
    return this.getNumberAttribute('output_bytes');
  }

  // output_rows - computed: true, optional: false, required: false
  public get outputRows() {
    return this.getNumberAttribute('output_rows');
  }

  // query_table_count - computed: true, optional: false, required: false
  public get queryTableCount() {
    return this.getNumberAttribute('query_table_count');
  }

  // query_spatial_coverage - computed: false, optional: true, required: false
  private _querySpatialCoverage = new TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageList(this, "query_spatial_coverage", false);
  public get querySpatialCoverage() {
    return this._querySpatialCoverage;
  }
  public putQuerySpatialCoverage(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverage[] | cdktn.IResolvable) {
    this._querySpatialCoverage.internalValue = value;
  }
  public resetQuerySpatialCoverage() {
    this._querySpatialCoverage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querySpatialCoverageInput() {
    return this._querySpatialCoverage.internalValue;
  }

  // query_temporal_range - computed: false, optional: true, required: false
  private _queryTemporalRange = new TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeList(this, "query_temporal_range", false);
  public get queryTemporalRange() {
    return this._queryTemporalRange;
  }
  public putQueryTemporalRange(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRange[] | cdktn.IResolvable) {
    this._queryTemporalRange.internalValue = value;
  }
  public resetQueryTemporalRange() {
    this._queryTemporalRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTemporalRangeInput() {
    return this._queryTemporalRange.internalValue;
  }
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponse[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseOutputReference {
    return new TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRuns {
  /**
  * error_report_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#error_report_location TimestreamqueryScheduledQuery#error_report_location}
  */
  readonly errorReportLocation?: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocation[] | cdktn.IResolvable;
  /**
  * execution_stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#execution_stats TimestreamqueryScheduledQuery#execution_stats}
  */
  readonly executionStats?: TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStats[] | cdktn.IResolvable;
  /**
  * query_insights_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#query_insights_response TimestreamqueryScheduledQuery#query_insights_response}
  */
  readonly queryInsightsResponse?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponse[] | cdktn.IResolvable;
}

export function timestreamqueryScheduledQueryRecentlyFailedRunsToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRuns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    error_report_location: cdktn.listMapper(timestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationToTerraform, true)(struct!.errorReportLocation),
    execution_stats: cdktn.listMapper(timestreamqueryScheduledQueryRecentlyFailedRunsExecutionStatsToTerraform, true)(struct!.executionStats),
    query_insights_response: cdktn.listMapper(timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseToTerraform, true)(struct!.queryInsightsResponse),
  }
}


export function timestreamqueryScheduledQueryRecentlyFailedRunsToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRuns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    error_report_location: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationToHclTerraform, true)(struct!.errorReportLocation),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationList",
    },
    execution_stats: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryRecentlyFailedRunsExecutionStatsToHclTerraform, true)(struct!.executionStats),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStatsList",
    },
    query_insights_response: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseToHclTerraform, true)(struct!.queryInsightsResponse),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRuns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorReportLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorReportLocation = this._errorReportLocation?.internalValue;
    }
    if (this._executionStats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionStats = this._executionStats?.internalValue;
    }
    if (this._queryInsightsResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryInsightsResponse = this._queryInsightsResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRuns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorReportLocation.internalValue = undefined;
      this._executionStats.internalValue = undefined;
      this._queryInsightsResponse.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorReportLocation.internalValue = value.errorReportLocation;
      this._executionStats.internalValue = value.executionStats;
      this._queryInsightsResponse.internalValue = value.queryInsightsResponse;
    }
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // invocation_time - computed: true, optional: false, required: false
  public get invocationTime() {
    return this.getStringAttribute('invocation_time');
  }

  // run_status - computed: true, optional: false, required: false
  public get runStatus() {
    return this.getStringAttribute('run_status');
  }

  // trigger_time - computed: true, optional: false, required: false
  public get triggerTime() {
    return this.getStringAttribute('trigger_time');
  }

  // error_report_location - computed: false, optional: true, required: false
  private _errorReportLocation = new TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationList(this, "error_report_location", false);
  public get errorReportLocation() {
    return this._errorReportLocation;
  }
  public putErrorReportLocation(value: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocation[] | cdktn.IResolvable) {
    this._errorReportLocation.internalValue = value;
  }
  public resetErrorReportLocation() {
    this._errorReportLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorReportLocationInput() {
    return this._errorReportLocation.internalValue;
  }

  // execution_stats - computed: false, optional: true, required: false
  private _executionStats = new TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStatsList(this, "execution_stats", false);
  public get executionStats() {
    return this._executionStats;
  }
  public putExecutionStats(value: TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStats[] | cdktn.IResolvable) {
    this._executionStats.internalValue = value;
  }
  public resetExecutionStats() {
    this._executionStats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionStatsInput() {
    return this._executionStats.internalValue;
  }

  // query_insights_response - computed: false, optional: true, required: false
  private _queryInsightsResponse = new TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseList(this, "query_insights_response", false);
  public get queryInsightsResponse() {
    return this._queryInsightsResponse;
  }
  public putQueryInsightsResponse(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponse[] | cdktn.IResolvable) {
    this._queryInsightsResponse.internalValue = value;
  }
  public resetQueryInsightsResponse() {
    this._queryInsightsResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInsightsResponseInput() {
    return this._queryInsightsResponse.internalValue;
  }
}

export class TimestreamqueryScheduledQueryRecentlyFailedRunsList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryRecentlyFailedRuns[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsOutputReference {
    return new TimestreamqueryScheduledQueryRecentlyFailedRunsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryScheduleConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#schedule_expression TimestreamqueryScheduledQuery#schedule_expression}
  */
  readonly scheduleExpression: string;
}

export function timestreamqueryScheduledQueryScheduleConfigurationToTerraform(struct?: TimestreamqueryScheduledQueryScheduleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
  }
}


export function timestreamqueryScheduledQueryScheduleConfigurationToHclTerraform(struct?: TimestreamqueryScheduledQueryScheduleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schedule_expression: {
      value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryScheduleConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryScheduleConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduleExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpression = this._scheduleExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryScheduleConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scheduleExpression = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scheduleExpression = value.scheduleExpression;
    }
  }

  // schedule_expression - computed: false, optional: false, required: true
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }
}

export class TimestreamqueryScheduledQueryScheduleConfigurationList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryScheduleConfiguration[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryScheduleConfigurationOutputReference {
    return new TimestreamqueryScheduledQueryScheduleConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#dimension_value_type TimestreamqueryScheduledQuery#dimension_value_type}
  */
  readonly dimensionValueType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#name TimestreamqueryScheduledQuery#name}
  */
  readonly name: string;
}

export function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingToTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_value_type: cdktn.stringToTerraform(struct!.dimensionValueType),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingToHclTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_value_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionValueType = this._dimensionValueType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionValueType = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionValueType = value.dimensionValueType;
      this._name = value.name;
    }
  }

  // dimension_value_type - computed: false, optional: false, required: true
  private _dimensionValueType?: string; 
  public get dimensionValueType() {
    return this.getStringAttribute('dimension_value_type');
  }
  public set dimensionValueType(value: string) {
    this._dimensionValueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionValueTypeInput() {
    return this._dimensionValueType;
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
}

export class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingOutputReference {
    return new TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#measure_value_type TimestreamqueryScheduledQuery#measure_value_type}
  */
  readonly measureValueType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#source_column TimestreamqueryScheduledQuery#source_column}
  */
  readonly sourceColumn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#target_multi_measure_attribute_name TimestreamqueryScheduledQuery#target_multi_measure_attribute_name}
  */
  readonly targetMultiMeasureAttributeName?: string;
}

export function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingToTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    measure_value_type: cdktn.stringToTerraform(struct!.measureValueType),
    source_column: cdktn.stringToTerraform(struct!.sourceColumn),
    target_multi_measure_attribute_name: cdktn.stringToTerraform(struct!.targetMultiMeasureAttributeName),
  }
}


export function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingToHclTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    measure_value_type: {
      value: cdktn.stringToHclTerraform(struct!.measureValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_column: {
      value: cdktn.stringToHclTerraform(struct!.sourceColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_multi_measure_attribute_name: {
      value: cdktn.stringToHclTerraform(struct!.targetMultiMeasureAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._measureValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureValueType = this._measureValueType;
    }
    if (this._sourceColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceColumn = this._sourceColumn;
    }
    if (this._targetMultiMeasureAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMultiMeasureAttributeName = this._targetMultiMeasureAttributeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._measureValueType = undefined;
      this._sourceColumn = undefined;
      this._targetMultiMeasureAttributeName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._measureValueType = value.measureValueType;
      this._sourceColumn = value.sourceColumn;
      this._targetMultiMeasureAttributeName = value.targetMultiMeasureAttributeName;
    }
  }

  // measure_value_type - computed: false, optional: false, required: true
  private _measureValueType?: string; 
  public get measureValueType() {
    return this.getStringAttribute('measure_value_type');
  }
  public set measureValueType(value: string) {
    this._measureValueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measureValueTypeInput() {
    return this._measureValueType;
  }

  // source_column - computed: false, optional: false, required: true
  private _sourceColumn?: string; 
  public get sourceColumn() {
    return this.getStringAttribute('source_column');
  }
  public set sourceColumn(value: string) {
    this._sourceColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceColumnInput() {
    return this._sourceColumn;
  }

  // target_multi_measure_attribute_name - computed: false, optional: true, required: false
  private _targetMultiMeasureAttributeName?: string; 
  public get targetMultiMeasureAttributeName() {
    return this.getStringAttribute('target_multi_measure_attribute_name');
  }
  public set targetMultiMeasureAttributeName(value: string) {
    this._targetMultiMeasureAttributeName = value;
  }
  public resetTargetMultiMeasureAttributeName() {
    this._targetMultiMeasureAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMultiMeasureAttributeNameInput() {
    return this._targetMultiMeasureAttributeName;
  }
}

export class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingOutputReference {
    return new TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#measure_name TimestreamqueryScheduledQuery#measure_name}
  */
  readonly measureName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#measure_value_type TimestreamqueryScheduledQuery#measure_value_type}
  */
  readonly measureValueType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#source_column TimestreamqueryScheduledQuery#source_column}
  */
  readonly sourceColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#target_measure_name TimestreamqueryScheduledQuery#target_measure_name}
  */
  readonly targetMeasureName?: string;
  /**
  * multi_measure_attribute_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#multi_measure_attribute_mapping TimestreamqueryScheduledQuery#multi_measure_attribute_mapping}
  */
  readonly multiMeasureAttributeMapping?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping[] | cdktn.IResolvable;
}

export function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingToTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    measure_name: cdktn.stringToTerraform(struct!.measureName),
    measure_value_type: cdktn.stringToTerraform(struct!.measureValueType),
    source_column: cdktn.stringToTerraform(struct!.sourceColumn),
    target_measure_name: cdktn.stringToTerraform(struct!.targetMeasureName),
    multi_measure_attribute_mapping: cdktn.listMapper(timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingToTerraform, true)(struct!.multiMeasureAttributeMapping),
  }
}


export function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingToHclTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    measure_name: {
      value: cdktn.stringToHclTerraform(struct!.measureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    measure_value_type: {
      value: cdktn.stringToHclTerraform(struct!.measureValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_column: {
      value: cdktn.stringToHclTerraform(struct!.sourceColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_measure_name: {
      value: cdktn.stringToHclTerraform(struct!.targetMeasureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_measure_attribute_mapping: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingToHclTerraform, true)(struct!.multiMeasureAttributeMapping),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._measureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureName = this._measureName;
    }
    if (this._measureValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureValueType = this._measureValueType;
    }
    if (this._sourceColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceColumn = this._sourceColumn;
    }
    if (this._targetMeasureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMeasureName = this._targetMeasureName;
    }
    if (this._multiMeasureAttributeMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiMeasureAttributeMapping = this._multiMeasureAttributeMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._measureName = undefined;
      this._measureValueType = undefined;
      this._sourceColumn = undefined;
      this._targetMeasureName = undefined;
      this._multiMeasureAttributeMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._measureName = value.measureName;
      this._measureValueType = value.measureValueType;
      this._sourceColumn = value.sourceColumn;
      this._targetMeasureName = value.targetMeasureName;
      this._multiMeasureAttributeMapping.internalValue = value.multiMeasureAttributeMapping;
    }
  }

  // measure_name - computed: false, optional: true, required: false
  private _measureName?: string; 
  public get measureName() {
    return this.getStringAttribute('measure_name');
  }
  public set measureName(value: string) {
    this._measureName = value;
  }
  public resetMeasureName() {
    this._measureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureNameInput() {
    return this._measureName;
  }

  // measure_value_type - computed: false, optional: false, required: true
  private _measureValueType?: string; 
  public get measureValueType() {
    return this.getStringAttribute('measure_value_type');
  }
  public set measureValueType(value: string) {
    this._measureValueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measureValueTypeInput() {
    return this._measureValueType;
  }

  // source_column - computed: false, optional: true, required: false
  private _sourceColumn?: string; 
  public get sourceColumn() {
    return this.getStringAttribute('source_column');
  }
  public set sourceColumn(value: string) {
    this._sourceColumn = value;
  }
  public resetSourceColumn() {
    this._sourceColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceColumnInput() {
    return this._sourceColumn;
  }

  // target_measure_name - computed: false, optional: true, required: false
  private _targetMeasureName?: string; 
  public get targetMeasureName() {
    return this.getStringAttribute('target_measure_name');
  }
  public set targetMeasureName(value: string) {
    this._targetMeasureName = value;
  }
  public resetTargetMeasureName() {
    this._targetMeasureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMeasureNameInput() {
    return this._targetMeasureName;
  }

  // multi_measure_attribute_mapping - computed: false, optional: true, required: false
  private _multiMeasureAttributeMapping = new TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingList(this, "multi_measure_attribute_mapping", false);
  public get multiMeasureAttributeMapping() {
    return this._multiMeasureAttributeMapping;
  }
  public putMultiMeasureAttributeMapping(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping[] | cdktn.IResolvable) {
    this._multiMeasureAttributeMapping.internalValue = value;
  }
  public resetMultiMeasureAttributeMapping() {
    this._multiMeasureAttributeMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiMeasureAttributeMappingInput() {
    return this._multiMeasureAttributeMapping.internalValue;
  }
}

export class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingOutputReference {
    return new TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#measure_value_type TimestreamqueryScheduledQuery#measure_value_type}
  */
  readonly measureValueType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#source_column TimestreamqueryScheduledQuery#source_column}
  */
  readonly sourceColumn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#target_multi_measure_attribute_name TimestreamqueryScheduledQuery#target_multi_measure_attribute_name}
  */
  readonly targetMultiMeasureAttributeName?: string;
}

export function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingToTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    measure_value_type: cdktn.stringToTerraform(struct!.measureValueType),
    source_column: cdktn.stringToTerraform(struct!.sourceColumn),
    target_multi_measure_attribute_name: cdktn.stringToTerraform(struct!.targetMultiMeasureAttributeName),
  }
}


export function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingToHclTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    measure_value_type: {
      value: cdktn.stringToHclTerraform(struct!.measureValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_column: {
      value: cdktn.stringToHclTerraform(struct!.sourceColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_multi_measure_attribute_name: {
      value: cdktn.stringToHclTerraform(struct!.targetMultiMeasureAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._measureValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureValueType = this._measureValueType;
    }
    if (this._sourceColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceColumn = this._sourceColumn;
    }
    if (this._targetMultiMeasureAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMultiMeasureAttributeName = this._targetMultiMeasureAttributeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._measureValueType = undefined;
      this._sourceColumn = undefined;
      this._targetMultiMeasureAttributeName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._measureValueType = value.measureValueType;
      this._sourceColumn = value.sourceColumn;
      this._targetMultiMeasureAttributeName = value.targetMultiMeasureAttributeName;
    }
  }

  // measure_value_type - computed: false, optional: false, required: true
  private _measureValueType?: string; 
  public get measureValueType() {
    return this.getStringAttribute('measure_value_type');
  }
  public set measureValueType(value: string) {
    this._measureValueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measureValueTypeInput() {
    return this._measureValueType;
  }

  // source_column - computed: false, optional: false, required: true
  private _sourceColumn?: string; 
  public get sourceColumn() {
    return this.getStringAttribute('source_column');
  }
  public set sourceColumn(value: string) {
    this._sourceColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceColumnInput() {
    return this._sourceColumn;
  }

  // target_multi_measure_attribute_name - computed: false, optional: true, required: false
  private _targetMultiMeasureAttributeName?: string; 
  public get targetMultiMeasureAttributeName() {
    return this.getStringAttribute('target_multi_measure_attribute_name');
  }
  public set targetMultiMeasureAttributeName(value: string) {
    this._targetMultiMeasureAttributeName = value;
  }
  public resetTargetMultiMeasureAttributeName() {
    this._targetMultiMeasureAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMultiMeasureAttributeNameInput() {
    return this._targetMultiMeasureAttributeName;
  }
}

export class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingOutputReference {
    return new TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#target_multi_measure_name TimestreamqueryScheduledQuery#target_multi_measure_name}
  */
  readonly targetMultiMeasureName?: string;
  /**
  * multi_measure_attribute_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#multi_measure_attribute_mapping TimestreamqueryScheduledQuery#multi_measure_attribute_mapping}
  */
  readonly multiMeasureAttributeMapping?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping[] | cdktn.IResolvable;
}

export function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsToTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_multi_measure_name: cdktn.stringToTerraform(struct!.targetMultiMeasureName),
    multi_measure_attribute_mapping: cdktn.listMapper(timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingToTerraform, true)(struct!.multiMeasureAttributeMapping),
  }
}


export function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsToHclTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_multi_measure_name: {
      value: cdktn.stringToHclTerraform(struct!.targetMultiMeasureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_measure_attribute_mapping: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingToHclTerraform, true)(struct!.multiMeasureAttributeMapping),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetMultiMeasureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMultiMeasureName = this._targetMultiMeasureName;
    }
    if (this._multiMeasureAttributeMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiMeasureAttributeMapping = this._multiMeasureAttributeMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetMultiMeasureName = undefined;
      this._multiMeasureAttributeMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetMultiMeasureName = value.targetMultiMeasureName;
      this._multiMeasureAttributeMapping.internalValue = value.multiMeasureAttributeMapping;
    }
  }

  // target_multi_measure_name - computed: false, optional: true, required: false
  private _targetMultiMeasureName?: string; 
  public get targetMultiMeasureName() {
    return this.getStringAttribute('target_multi_measure_name');
  }
  public set targetMultiMeasureName(value: string) {
    this._targetMultiMeasureName = value;
  }
  public resetTargetMultiMeasureName() {
    this._targetMultiMeasureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMultiMeasureNameInput() {
    return this._targetMultiMeasureName;
  }

  // multi_measure_attribute_mapping - computed: false, optional: true, required: false
  private _multiMeasureAttributeMapping = new TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingList(this, "multi_measure_attribute_mapping", false);
  public get multiMeasureAttributeMapping() {
    return this._multiMeasureAttributeMapping;
  }
  public putMultiMeasureAttributeMapping(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping[] | cdktn.IResolvable) {
    this._multiMeasureAttributeMapping.internalValue = value;
  }
  public resetMultiMeasureAttributeMapping() {
    this._multiMeasureAttributeMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiMeasureAttributeMappingInput() {
    return this._multiMeasureAttributeMapping.internalValue;
  }
}

export class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference {
    return new TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#database_name TimestreamqueryScheduledQuery#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#measure_name_column TimestreamqueryScheduledQuery#measure_name_column}
  */
  readonly measureNameColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#table_name TimestreamqueryScheduledQuery#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#time_column TimestreamqueryScheduledQuery#time_column}
  */
  readonly timeColumn: string;
  /**
  * dimension_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#dimension_mapping TimestreamqueryScheduledQuery#dimension_mapping}
  */
  readonly dimensionMapping?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping[] | cdktn.IResolvable;
  /**
  * mixed_measure_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#mixed_measure_mapping TimestreamqueryScheduledQuery#mixed_measure_mapping}
  */
  readonly mixedMeasureMapping?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping[] | cdktn.IResolvable;
  /**
  * multi_measure_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#multi_measure_mappings TimestreamqueryScheduledQuery#multi_measure_mappings}
  */
  readonly multiMeasureMappings?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings[] | cdktn.IResolvable;
}

export function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationToTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    measure_name_column: cdktn.stringToTerraform(struct!.measureNameColumn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    time_column: cdktn.stringToTerraform(struct!.timeColumn),
    dimension_mapping: cdktn.listMapper(timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingToTerraform, true)(struct!.dimensionMapping),
    mixed_measure_mapping: cdktn.listMapper(timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingToTerraform, true)(struct!.mixedMeasureMapping),
    multi_measure_mappings: cdktn.listMapper(timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsToTerraform, true)(struct!.multiMeasureMappings),
  }
}


export function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationToHclTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    measure_name_column: {
      value: cdktn.stringToHclTerraform(struct!.measureNameColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_column: {
      value: cdktn.stringToHclTerraform(struct!.timeColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension_mapping: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingToHclTerraform, true)(struct!.dimensionMapping),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingList",
    },
    mixed_measure_mapping: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingToHclTerraform, true)(struct!.mixedMeasureMapping),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingList",
    },
    multi_measure_mappings: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsToHclTerraform, true)(struct!.multiMeasureMappings),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._measureNameColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureNameColumn = this._measureNameColumn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._timeColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeColumn = this._timeColumn;
    }
    if (this._dimensionMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionMapping = this._dimensionMapping?.internalValue;
    }
    if (this._mixedMeasureMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mixedMeasureMapping = this._mixedMeasureMapping?.internalValue;
    }
    if (this._multiMeasureMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiMeasureMappings = this._multiMeasureMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._measureNameColumn = undefined;
      this._tableName = undefined;
      this._timeColumn = undefined;
      this._dimensionMapping.internalValue = undefined;
      this._mixedMeasureMapping.internalValue = undefined;
      this._multiMeasureMappings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._measureNameColumn = value.measureNameColumn;
      this._tableName = value.tableName;
      this._timeColumn = value.timeColumn;
      this._dimensionMapping.internalValue = value.dimensionMapping;
      this._mixedMeasureMapping.internalValue = value.mixedMeasureMapping;
      this._multiMeasureMappings.internalValue = value.multiMeasureMappings;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // measure_name_column - computed: false, optional: true, required: false
  private _measureNameColumn?: string; 
  public get measureNameColumn() {
    return this.getStringAttribute('measure_name_column');
  }
  public set measureNameColumn(value: string) {
    this._measureNameColumn = value;
  }
  public resetMeasureNameColumn() {
    this._measureNameColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureNameColumnInput() {
    return this._measureNameColumn;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // time_column - computed: false, optional: false, required: true
  private _timeColumn?: string; 
  public get timeColumn() {
    return this.getStringAttribute('time_column');
  }
  public set timeColumn(value: string) {
    this._timeColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeColumnInput() {
    return this._timeColumn;
  }

  // dimension_mapping - computed: false, optional: true, required: false
  private _dimensionMapping = new TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingList(this, "dimension_mapping", false);
  public get dimensionMapping() {
    return this._dimensionMapping;
  }
  public putDimensionMapping(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping[] | cdktn.IResolvable) {
    this._dimensionMapping.internalValue = value;
  }
  public resetDimensionMapping() {
    this._dimensionMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionMappingInput() {
    return this._dimensionMapping.internalValue;
  }

  // mixed_measure_mapping - computed: false, optional: true, required: false
  private _mixedMeasureMapping = new TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingList(this, "mixed_measure_mapping", false);
  public get mixedMeasureMapping() {
    return this._mixedMeasureMapping;
  }
  public putMixedMeasureMapping(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping[] | cdktn.IResolvable) {
    this._mixedMeasureMapping.internalValue = value;
  }
  public resetMixedMeasureMapping() {
    this._mixedMeasureMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mixedMeasureMappingInput() {
    return this._mixedMeasureMapping.internalValue;
  }

  // multi_measure_mappings - computed: false, optional: true, required: false
  private _multiMeasureMappings = new TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsList(this, "multi_measure_mappings", false);
  public get multiMeasureMappings() {
    return this._multiMeasureMappings;
  }
  public putMultiMeasureMappings(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings[] | cdktn.IResolvable) {
    this._multiMeasureMappings.internalValue = value;
  }
  public resetMultiMeasureMappings() {
    this._multiMeasureMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiMeasureMappingsInput() {
    return this._multiMeasureMappings.internalValue;
  }
}

export class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfiguration[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference {
    return new TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryTargetConfiguration {
  /**
  * timestream_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#timestream_configuration TimestreamqueryScheduledQuery#timestream_configuration}
  */
  readonly timestreamConfiguration?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfiguration[] | cdktn.IResolvable;
}

export function timestreamqueryScheduledQueryTargetConfigurationToTerraform(struct?: TimestreamqueryScheduledQueryTargetConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    timestream_configuration: cdktn.listMapper(timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationToTerraform, true)(struct!.timestreamConfiguration),
  }
}


export function timestreamqueryScheduledQueryTargetConfigurationToHclTerraform(struct?: TimestreamqueryScheduledQueryTargetConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    timestream_configuration: {
      value: cdktn.listMapperHcl(timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationToHclTerraform, true)(struct!.timestreamConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamqueryScheduledQueryTargetConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamqueryScheduledQueryTargetConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timestreamConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestreamConfiguration = this._timestreamConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamqueryScheduledQueryTargetConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timestreamConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timestreamConfiguration.internalValue = value.timestreamConfiguration;
    }
  }

  // timestream_configuration - computed: false, optional: true, required: false
  private _timestreamConfiguration = new TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationList(this, "timestream_configuration", false);
  public get timestreamConfiguration() {
    return this._timestreamConfiguration;
  }
  public putTimestreamConfiguration(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfiguration[] | cdktn.IResolvable) {
    this._timestreamConfiguration.internalValue = value;
  }
  public resetTimestreamConfiguration() {
    this._timestreamConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestreamConfigurationInput() {
    return this._timestreamConfiguration.internalValue;
  }
}

export class TimestreamqueryScheduledQueryTargetConfigurationList extends cdktn.ComplexList {
  public internalValue? : TimestreamqueryScheduledQueryTargetConfiguration[] | cdktn.IResolvable

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
  public get(index: number): TimestreamqueryScheduledQueryTargetConfigurationOutputReference {
    return new TimestreamqueryScheduledQueryTargetConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamqueryScheduledQueryTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#create TimestreamqueryScheduledQuery#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#delete TimestreamqueryScheduledQuery#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#update TimestreamqueryScheduledQuery#update}
  */
  readonly update?: string;
}

export function timestreamqueryScheduledQueryTimeoutsToTerraform(struct?: TimestreamqueryScheduledQueryTimeouts | cdktn.IResolvable): any {
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


export function timestreamqueryScheduledQueryTimeoutsToHclTerraform(struct?: TimestreamqueryScheduledQueryTimeouts | cdktn.IResolvable): any {
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

export class TimestreamqueryScheduledQueryTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TimestreamqueryScheduledQueryTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: TimestreamqueryScheduledQueryTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query aws_timestreamquery_scheduled_query}
*/
export class TimestreamqueryScheduledQuery extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_timestreamquery_scheduled_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TimestreamqueryScheduledQuery resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TimestreamqueryScheduledQuery to import
  * @param importFromId The id of the existing TimestreamqueryScheduledQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TimestreamqueryScheduledQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_timestreamquery_scheduled_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/timestreamquery_scheduled_query aws_timestreamquery_scheduled_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TimestreamqueryScheduledQueryConfig
  */
  public constructor(scope: Construct, id: string, config: TimestreamqueryScheduledQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_timestreamquery_scheduled_query',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.57.1',
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
    this._executionRoleArn = config.executionRoleArn;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._queryString = config.queryString;
    this._region = config.region;
    this._tags = config.tags;
    this._errorReportConfiguration.internalValue = config.errorReportConfiguration;
    this._lastRunSummary.internalValue = config.lastRunSummary;
    this._notificationConfiguration.internalValue = config.notificationConfiguration;
    this._recentlyFailedRuns.internalValue = config.recentlyFailedRuns;
    this._scheduleConfiguration.internalValue = config.scheduleConfiguration;
    this._targetConfiguration.internalValue = config.targetConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
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

  // next_invocation_time - computed: true, optional: false, required: false
  public get nextInvocationTime() {
    return this.getStringAttribute('next_invocation_time');
  }

  // previous_invocation_time - computed: true, optional: false, required: false
  public get previousInvocationTime() {
    return this.getStringAttribute('previous_invocation_time');
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // error_report_configuration - computed: false, optional: true, required: false
  private _errorReportConfiguration = new TimestreamqueryScheduledQueryErrorReportConfigurationList(this, "error_report_configuration", false);
  public get errorReportConfiguration() {
    return this._errorReportConfiguration;
  }
  public putErrorReportConfiguration(value: TimestreamqueryScheduledQueryErrorReportConfiguration[] | cdktn.IResolvable) {
    this._errorReportConfiguration.internalValue = value;
  }
  public resetErrorReportConfiguration() {
    this._errorReportConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorReportConfigurationInput() {
    return this._errorReportConfiguration.internalValue;
  }

  // last_run_summary - computed: false, optional: true, required: false
  private _lastRunSummary = new TimestreamqueryScheduledQueryLastRunSummaryList(this, "last_run_summary", false);
  public get lastRunSummary() {
    return this._lastRunSummary;
  }
  public putLastRunSummary(value: TimestreamqueryScheduledQueryLastRunSummary[] | cdktn.IResolvable) {
    this._lastRunSummary.internalValue = value;
  }
  public resetLastRunSummary() {
    this._lastRunSummary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastRunSummaryInput() {
    return this._lastRunSummary.internalValue;
  }

  // notification_configuration - computed: false, optional: true, required: false
  private _notificationConfiguration = new TimestreamqueryScheduledQueryNotificationConfigurationList(this, "notification_configuration", false);
  public get notificationConfiguration() {
    return this._notificationConfiguration;
  }
  public putNotificationConfiguration(value: TimestreamqueryScheduledQueryNotificationConfiguration[] | cdktn.IResolvable) {
    this._notificationConfiguration.internalValue = value;
  }
  public resetNotificationConfiguration() {
    this._notificationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigurationInput() {
    return this._notificationConfiguration.internalValue;
  }

  // recently_failed_runs - computed: false, optional: true, required: false
  private _recentlyFailedRuns = new TimestreamqueryScheduledQueryRecentlyFailedRunsList(this, "recently_failed_runs", false);
  public get recentlyFailedRuns() {
    return this._recentlyFailedRuns;
  }
  public putRecentlyFailedRuns(value: TimestreamqueryScheduledQueryRecentlyFailedRuns[] | cdktn.IResolvable) {
    this._recentlyFailedRuns.internalValue = value;
  }
  public resetRecentlyFailedRuns() {
    this._recentlyFailedRuns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recentlyFailedRunsInput() {
    return this._recentlyFailedRuns.internalValue;
  }

  // schedule_configuration - computed: false, optional: true, required: false
  private _scheduleConfiguration = new TimestreamqueryScheduledQueryScheduleConfigurationList(this, "schedule_configuration", false);
  public get scheduleConfiguration() {
    return this._scheduleConfiguration;
  }
  public putScheduleConfiguration(value: TimestreamqueryScheduledQueryScheduleConfiguration[] | cdktn.IResolvable) {
    this._scheduleConfiguration.internalValue = value;
  }
  public resetScheduleConfiguration() {
    this._scheduleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleConfigurationInput() {
    return this._scheduleConfiguration.internalValue;
  }

  // target_configuration - computed: false, optional: true, required: false
  private _targetConfiguration = new TimestreamqueryScheduledQueryTargetConfigurationList(this, "target_configuration", false);
  public get targetConfiguration() {
    return this._targetConfiguration;
  }
  public putTargetConfiguration(value: TimestreamqueryScheduledQueryTargetConfiguration[] | cdktn.IResolvable) {
    this._targetConfiguration.internalValue = value;
  }
  public resetTargetConfiguration() {
    this._targetConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetConfigurationInput() {
    return this._targetConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TimestreamqueryScheduledQueryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TimestreamqueryScheduledQueryTimeouts) {
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
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      name: cdktn.stringToTerraform(this._name),
      query_string: cdktn.stringToTerraform(this._queryString),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      error_report_configuration: cdktn.listMapper(timestreamqueryScheduledQueryErrorReportConfigurationToTerraform, true)(this._errorReportConfiguration.internalValue),
      last_run_summary: cdktn.listMapper(timestreamqueryScheduledQueryLastRunSummaryToTerraform, true)(this._lastRunSummary.internalValue),
      notification_configuration: cdktn.listMapper(timestreamqueryScheduledQueryNotificationConfigurationToTerraform, true)(this._notificationConfiguration.internalValue),
      recently_failed_runs: cdktn.listMapper(timestreamqueryScheduledQueryRecentlyFailedRunsToTerraform, true)(this._recentlyFailedRuns.internalValue),
      schedule_configuration: cdktn.listMapper(timestreamqueryScheduledQueryScheduleConfigurationToTerraform, true)(this._scheduleConfiguration.internalValue),
      target_configuration: cdktn.listMapper(timestreamqueryScheduledQueryTargetConfigurationToTerraform, true)(this._targetConfiguration.internalValue),
      timeouts: timestreamqueryScheduledQueryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
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
      query_string: {
        value: cdktn.stringToHclTerraform(this._queryString),
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
      error_report_configuration: {
        value: cdktn.listMapperHcl(timestreamqueryScheduledQueryErrorReportConfigurationToHclTerraform, true)(this._errorReportConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TimestreamqueryScheduledQueryErrorReportConfigurationList",
      },
      last_run_summary: {
        value: cdktn.listMapperHcl(timestreamqueryScheduledQueryLastRunSummaryToHclTerraform, true)(this._lastRunSummary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TimestreamqueryScheduledQueryLastRunSummaryList",
      },
      notification_configuration: {
        value: cdktn.listMapperHcl(timestreamqueryScheduledQueryNotificationConfigurationToHclTerraform, true)(this._notificationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TimestreamqueryScheduledQueryNotificationConfigurationList",
      },
      recently_failed_runs: {
        value: cdktn.listMapperHcl(timestreamqueryScheduledQueryRecentlyFailedRunsToHclTerraform, true)(this._recentlyFailedRuns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TimestreamqueryScheduledQueryRecentlyFailedRunsList",
      },
      schedule_configuration: {
        value: cdktn.listMapperHcl(timestreamqueryScheduledQueryScheduleConfigurationToHclTerraform, true)(this._scheduleConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TimestreamqueryScheduledQueryScheduleConfigurationList",
      },
      target_configuration: {
        value: cdktn.listMapperHcl(timestreamqueryScheduledQueryTargetConfigurationToHclTerraform, true)(this._targetConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TimestreamqueryScheduledQueryTargetConfigurationList",
      },
      timeouts: {
        value: timestreamqueryScheduledQueryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TimestreamqueryScheduledQueryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
