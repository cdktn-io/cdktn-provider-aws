/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PipesPipeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#description PipesPipe#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#desired_state PipesPipe#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#enrichment PipesPipe#enrichment}
  */
  readonly enrichment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#id PipesPipe#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#kms_key_identifier PipesPipe#kms_key_identifier}
  */
  readonly kmsKeyIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#name PipesPipe#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#name_prefix PipesPipe#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#region PipesPipe#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#role_arn PipesPipe#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#source PipesPipe#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#tags PipesPipe#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#tags_all PipesPipe#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#target PipesPipe#target}
  */
  readonly target: string;
  /**
  * enrichment_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#enrichment_parameters PipesPipe#enrichment_parameters}
  */
  readonly enrichmentParameters?: PipesPipeEnrichmentParameters;
  /**
  * log_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#log_configuration PipesPipe#log_configuration}
  */
  readonly logConfiguration?: PipesPipeLogConfiguration;
  /**
  * source_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#source_parameters PipesPipe#source_parameters}
  */
  readonly sourceParameters?: PipesPipeSourceParameters;
  /**
  * target_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#target_parameters PipesPipe#target_parameters}
  */
  readonly targetParameters?: PipesPipeTargetParameters;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#timeouts PipesPipe#timeouts}
  */
  readonly timeouts?: PipesPipeTimeouts;
}
export interface PipesPipeEnrichmentParametersHttpParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#header_parameters PipesPipe#header_parameters}
  */
  readonly headerParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#path_parameter_values PipesPipe#path_parameter_values}
  */
  readonly pathParameterValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#query_string_parameters PipesPipe#query_string_parameters}
  */
  readonly queryStringParameters?: { [key: string]: string };
}

export function pipesPipeEnrichmentParametersHttpParametersToTerraform(struct?: PipesPipeEnrichmentParametersHttpParametersOutputReference | PipesPipeEnrichmentParametersHttpParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.headerParameters),
    path_parameter_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.pathParameterValues),
    query_string_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.queryStringParameters),
  }
}


export function pipesPipeEnrichmentParametersHttpParametersToHclTerraform(struct?: PipesPipeEnrichmentParametersHttpParametersOutputReference | PipesPipeEnrichmentParametersHttpParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.headerParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    path_parameter_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.pathParameterValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query_string_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.queryStringParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeEnrichmentParametersHttpParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeEnrichmentParametersHttpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerParameters = this._headerParameters;
    }
    if (this._pathParameterValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathParameterValues = this._pathParameterValues;
    }
    if (this._queryStringParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringParameters = this._queryStringParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeEnrichmentParametersHttpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerParameters = undefined;
      this._pathParameterValues = undefined;
      this._queryStringParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerParameters = value.headerParameters;
      this._pathParameterValues = value.pathParameterValues;
      this._queryStringParameters = value.queryStringParameters;
    }
  }

  // header_parameters - computed: false, optional: true, required: false
  private _headerParameters?: { [key: string]: string }; 
  public get headerParameters() {
    return this.getStringMapAttribute('header_parameters');
  }
  public set headerParameters(value: { [key: string]: string }) {
    this._headerParameters = value;
  }
  public resetHeaderParameters() {
    this._headerParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerParametersInput() {
    return this._headerParameters;
  }

  // path_parameter_values - computed: false, optional: true, required: false
  private _pathParameterValues?: string[]; 
  public get pathParameterValues() {
    return this.getListAttribute('path_parameter_values');
  }
  public set pathParameterValues(value: string[]) {
    this._pathParameterValues = value;
  }
  public resetPathParameterValues() {
    this._pathParameterValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathParameterValuesInput() {
    return this._pathParameterValues;
  }

  // query_string_parameters - computed: false, optional: true, required: false
  private _queryStringParameters?: { [key: string]: string }; 
  public get queryStringParameters() {
    return this.getStringMapAttribute('query_string_parameters');
  }
  public set queryStringParameters(value: { [key: string]: string }) {
    this._queryStringParameters = value;
  }
  public resetQueryStringParameters() {
    this._queryStringParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringParametersInput() {
    return this._queryStringParameters;
  }
}
export interface PipesPipeEnrichmentParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#input_template PipesPipe#input_template}
  */
  readonly inputTemplate?: string;
  /**
  * http_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#http_parameters PipesPipe#http_parameters}
  */
  readonly httpParameters?: PipesPipeEnrichmentParametersHttpParameters;
}

export function pipesPipeEnrichmentParametersToTerraform(struct?: PipesPipeEnrichmentParametersOutputReference | PipesPipeEnrichmentParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_template: cdktn.stringToTerraform(struct!.inputTemplate),
    http_parameters: pipesPipeEnrichmentParametersHttpParametersToTerraform(struct!.httpParameters),
  }
}


export function pipesPipeEnrichmentParametersToHclTerraform(struct?: PipesPipeEnrichmentParametersOutputReference | PipesPipeEnrichmentParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_template: {
      value: cdktn.stringToHclTerraform(struct!.inputTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_parameters: {
      value: pipesPipeEnrichmentParametersHttpParametersToHclTerraform(struct!.httpParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeEnrichmentParametersHttpParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeEnrichmentParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeEnrichmentParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputTemplate = this._inputTemplate;
    }
    if (this._httpParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpParameters = this._httpParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeEnrichmentParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputTemplate = undefined;
      this._httpParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputTemplate = value.inputTemplate;
      this._httpParameters.internalValue = value.httpParameters;
    }
  }

  // input_template - computed: false, optional: true, required: false
  private _inputTemplate?: string; 
  public get inputTemplate() {
    return this.getStringAttribute('input_template');
  }
  public set inputTemplate(value: string) {
    this._inputTemplate = value;
  }
  public resetInputTemplate() {
    this._inputTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTemplateInput() {
    return this._inputTemplate;
  }

  // http_parameters - computed: false, optional: true, required: false
  private _httpParameters = new PipesPipeEnrichmentParametersHttpParametersOutputReference(this, "http_parameters");
  public get httpParameters() {
    return this._httpParameters;
  }
  public putHttpParameters(value: PipesPipeEnrichmentParametersHttpParameters) {
    this._httpParameters.internalValue = value;
  }
  public resetHttpParameters() {
    this._httpParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpParametersInput() {
    return this._httpParameters.internalValue;
  }
}
export interface PipesPipeLogConfigurationCloudwatchLogsLogDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#log_group_arn PipesPipe#log_group_arn}
  */
  readonly logGroupArn: string;
}

export function pipesPipeLogConfigurationCloudwatchLogsLogDestinationToTerraform(struct?: PipesPipeLogConfigurationCloudwatchLogsLogDestinationOutputReference | PipesPipeLogConfigurationCloudwatchLogsLogDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
  }
}


export function pipesPipeLogConfigurationCloudwatchLogsLogDestinationToHclTerraform(struct?: PipesPipeLogConfigurationCloudwatchLogsLogDestinationOutputReference | PipesPipeLogConfigurationCloudwatchLogsLogDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.logGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeLogConfigurationCloudwatchLogsLogDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeLogConfigurationCloudwatchLogsLogDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupArn = this._logGroupArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeLogConfigurationCloudwatchLogsLogDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logGroupArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logGroupArn = value.logGroupArn;
    }
  }

  // log_group_arn - computed: false, optional: false, required: true
  private _logGroupArn?: string; 
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
  public set logGroupArn(value: string) {
    this._logGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupArnInput() {
    return this._logGroupArn;
  }
}
export interface PipesPipeLogConfigurationFirehoseLogDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#delivery_stream_arn PipesPipe#delivery_stream_arn}
  */
  readonly deliveryStreamArn: string;
}

export function pipesPipeLogConfigurationFirehoseLogDestinationToTerraform(struct?: PipesPipeLogConfigurationFirehoseLogDestinationOutputReference | PipesPipeLogConfigurationFirehoseLogDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delivery_stream_arn: cdktn.stringToTerraform(struct!.deliveryStreamArn),
  }
}


export function pipesPipeLogConfigurationFirehoseLogDestinationToHclTerraform(struct?: PipesPipeLogConfigurationFirehoseLogDestinationOutputReference | PipesPipeLogConfigurationFirehoseLogDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delivery_stream_arn: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStreamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeLogConfigurationFirehoseLogDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeLogConfigurationFirehoseLogDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStreamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStreamArn = this._deliveryStreamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeLogConfigurationFirehoseLogDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deliveryStreamArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deliveryStreamArn = value.deliveryStreamArn;
    }
  }

  // delivery_stream_arn - computed: false, optional: false, required: true
  private _deliveryStreamArn?: string; 
  public get deliveryStreamArn() {
    return this.getStringAttribute('delivery_stream_arn');
  }
  public set deliveryStreamArn(value: string) {
    this._deliveryStreamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamArnInput() {
    return this._deliveryStreamArn;
  }
}
export interface PipesPipeLogConfigurationS3LogDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#bucket_name PipesPipe#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#bucket_owner PipesPipe#bucket_owner}
  */
  readonly bucketOwner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#output_format PipesPipe#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#prefix PipesPipe#prefix}
  */
  readonly prefix?: string;
}

export function pipesPipeLogConfigurationS3LogDestinationToTerraform(struct?: PipesPipeLogConfigurationS3LogDestinationOutputReference | PipesPipeLogConfigurationS3LogDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
    output_format: cdktn.stringToTerraform(struct!.outputFormat),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function pipesPipeLogConfigurationS3LogDestinationToHclTerraform(struct?: PipesPipeLogConfigurationS3LogDestinationOutputReference | PipesPipeLogConfigurationS3LogDestination): any {
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
    bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_format: {
      value: cdktn.stringToHclTerraform(struct!.outputFormat),
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

export class PipesPipeLogConfigurationS3LogDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeLogConfigurationS3LogDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwner = this._bucketOwner;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeLogConfigurationS3LogDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketOwner = undefined;
      this._outputFormat = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketOwner = value.bucketOwner;
      this._outputFormat = value.outputFormat;
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

  // bucket_owner - computed: false, optional: false, required: true
  private _bucketOwner?: string; 
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }
  public set bucketOwner(value: string) {
    this._bucketOwner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerInput() {
    return this._bucketOwner;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
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
export interface PipesPipeLogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#include_execution_data PipesPipe#include_execution_data}
  */
  readonly includeExecutionData?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#level PipesPipe#level}
  */
  readonly level: string;
  /**
  * cloudwatch_logs_log_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#cloudwatch_logs_log_destination PipesPipe#cloudwatch_logs_log_destination}
  */
  readonly cloudwatchLogsLogDestination?: PipesPipeLogConfigurationCloudwatchLogsLogDestination;
  /**
  * firehose_log_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#firehose_log_destination PipesPipe#firehose_log_destination}
  */
  readonly firehoseLogDestination?: PipesPipeLogConfigurationFirehoseLogDestination;
  /**
  * s3_log_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#s3_log_destination PipesPipe#s3_log_destination}
  */
  readonly s3LogDestination?: PipesPipeLogConfigurationS3LogDestination;
}

export function pipesPipeLogConfigurationToTerraform(struct?: PipesPipeLogConfigurationOutputReference | PipesPipeLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_execution_data: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeExecutionData),
    level: cdktn.stringToTerraform(struct!.level),
    cloudwatch_logs_log_destination: pipesPipeLogConfigurationCloudwatchLogsLogDestinationToTerraform(struct!.cloudwatchLogsLogDestination),
    firehose_log_destination: pipesPipeLogConfigurationFirehoseLogDestinationToTerraform(struct!.firehoseLogDestination),
    s3_log_destination: pipesPipeLogConfigurationS3LogDestinationToTerraform(struct!.s3LogDestination),
  }
}


export function pipesPipeLogConfigurationToHclTerraform(struct?: PipesPipeLogConfigurationOutputReference | PipesPipeLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_execution_data: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeExecutionData),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    level: {
      value: cdktn.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logs_log_destination: {
      value: pipesPipeLogConfigurationCloudwatchLogsLogDestinationToHclTerraform(struct!.cloudwatchLogsLogDestination),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeLogConfigurationCloudwatchLogsLogDestinationList",
    },
    firehose_log_destination: {
      value: pipesPipeLogConfigurationFirehoseLogDestinationToHclTerraform(struct!.firehoseLogDestination),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeLogConfigurationFirehoseLogDestinationList",
    },
    s3_log_destination: {
      value: pipesPipeLogConfigurationS3LogDestinationToHclTerraform(struct!.s3LogDestination),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeLogConfigurationS3LogDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeLogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeExecutionData !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeExecutionData = this._includeExecutionData;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._cloudwatchLogsLogDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogsLogDestination = this._cloudwatchLogsLogDestination?.internalValue;
    }
    if (this._firehoseLogDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehoseLogDestination = this._firehoseLogDestination?.internalValue;
    }
    if (this._s3LogDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3LogDestination = this._s3LogDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeExecutionData = undefined;
      this._level = undefined;
      this._cloudwatchLogsLogDestination.internalValue = undefined;
      this._firehoseLogDestination.internalValue = undefined;
      this._s3LogDestination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeExecutionData = value.includeExecutionData;
      this._level = value.level;
      this._cloudwatchLogsLogDestination.internalValue = value.cloudwatchLogsLogDestination;
      this._firehoseLogDestination.internalValue = value.firehoseLogDestination;
      this._s3LogDestination.internalValue = value.s3LogDestination;
    }
  }

  // include_execution_data - computed: false, optional: true, required: false
  private _includeExecutionData?: string[]; 
  public get includeExecutionData() {
    return cdktn.Fn.tolist(this.getListAttribute('include_execution_data'));
  }
  public set includeExecutionData(value: string[]) {
    this._includeExecutionData = value;
  }
  public resetIncludeExecutionData() {
    this._includeExecutionData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExecutionDataInput() {
    return this._includeExecutionData;
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // cloudwatch_logs_log_destination - computed: false, optional: true, required: false
  private _cloudwatchLogsLogDestination = new PipesPipeLogConfigurationCloudwatchLogsLogDestinationOutputReference(this, "cloudwatch_logs_log_destination");
  public get cloudwatchLogsLogDestination() {
    return this._cloudwatchLogsLogDestination;
  }
  public putCloudwatchLogsLogDestination(value: PipesPipeLogConfigurationCloudwatchLogsLogDestination) {
    this._cloudwatchLogsLogDestination.internalValue = value;
  }
  public resetCloudwatchLogsLogDestination() {
    this._cloudwatchLogsLogDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsLogDestinationInput() {
    return this._cloudwatchLogsLogDestination.internalValue;
  }

  // firehose_log_destination - computed: false, optional: true, required: false
  private _firehoseLogDestination = new PipesPipeLogConfigurationFirehoseLogDestinationOutputReference(this, "firehose_log_destination");
  public get firehoseLogDestination() {
    return this._firehoseLogDestination;
  }
  public putFirehoseLogDestination(value: PipesPipeLogConfigurationFirehoseLogDestination) {
    this._firehoseLogDestination.internalValue = value;
  }
  public resetFirehoseLogDestination() {
    this._firehoseLogDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseLogDestinationInput() {
    return this._firehoseLogDestination.internalValue;
  }

  // s3_log_destination - computed: false, optional: true, required: false
  private _s3LogDestination = new PipesPipeLogConfigurationS3LogDestinationOutputReference(this, "s3_log_destination");
  public get s3LogDestination() {
    return this._s3LogDestination;
  }
  public putS3LogDestination(value: PipesPipeLogConfigurationS3LogDestination) {
    this._s3LogDestination.internalValue = value;
  }
  public resetS3LogDestination() {
    this._s3LogDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LogDestinationInput() {
    return this._s3LogDestination.internalValue;
  }
}
export interface PipesPipeSourceParametersActivemqBrokerParametersCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#basic_auth PipesPipe#basic_auth}
  */
  readonly basicAuth: string;
}

export function pipesPipeSourceParametersActivemqBrokerParametersCredentialsToTerraform(struct?: PipesPipeSourceParametersActivemqBrokerParametersCredentialsOutputReference | PipesPipeSourceParametersActivemqBrokerParametersCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    basic_auth: cdktn.stringToTerraform(struct!.basicAuth),
  }
}


export function pipesPipeSourceParametersActivemqBrokerParametersCredentialsToHclTerraform(struct?: PipesPipeSourceParametersActivemqBrokerParametersCredentialsOutputReference | PipesPipeSourceParametersActivemqBrokerParametersCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    basic_auth: {
      value: cdktn.stringToHclTerraform(struct!.basicAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeSourceParametersActivemqBrokerParametersCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeSourceParametersActivemqBrokerParametersCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeSourceParametersActivemqBrokerParametersCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basicAuth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basicAuth = value.basicAuth;
    }
  }

  // basic_auth - computed: false, optional: false, required: true
  private _basicAuth?: string; 
  public get basicAuth() {
    return this.getStringAttribute('basic_auth');
  }
  public set basicAuth(value: string) {
    this._basicAuth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth;
  }
}
export interface PipesPipeSourceParametersActivemqBrokerParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#batch_size PipesPipe#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds PipesPipe#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#queue_name PipesPipe#queue_name}
  */
  readonly queueName: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#credentials PipesPipe#credentials}
  */
  readonly credentials: PipesPipeSourceParametersActivemqBrokerParametersCredentials;
}

export function pipesPipeSourceParametersActivemqBrokerParametersToTerraform(struct?: PipesPipeSourceParametersActivemqBrokerParametersOutputReference | PipesPipeSourceParametersActivemqBrokerParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_size: cdktn.numberToTerraform(struct!.batchSize),
    maximum_batching_window_in_seconds: cdktn.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
    queue_name: cdktn.stringToTerraform(struct!.queueName),
    credentials: pipesPipeSourceParametersActivemqBrokerParametersCredentialsToTerraform(struct!.credentials),
  }
}


export function pipesPipeSourceParametersActivemqBrokerParametersToHclTerraform(struct?: PipesPipeSourceParametersActivemqBrokerParametersOutputReference | PipesPipeSourceParametersActivemqBrokerParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_size: {
      value: cdktn.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_batching_window_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_name: {
      value: cdktn.stringToHclTerraform(struct!.queueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: pipesPipeSourceParametersActivemqBrokerParametersCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeSourceParametersActivemqBrokerParametersCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeSourceParametersActivemqBrokerParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeSourceParametersActivemqBrokerParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._maximumBatchingWindowInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
    }
    if (this._queueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueName = this._queueName;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeSourceParametersActivemqBrokerParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchSize = undefined;
      this._maximumBatchingWindowInSeconds = undefined;
      this._queueName = undefined;
      this._credentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchSize = value.batchSize;
      this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
      this._queueName = value.queueName;
      this._credentials.internalValue = value.credentials;
    }
  }

  // batch_size - computed: true, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // maximum_batching_window_in_seconds - computed: true, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number; 
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds;
  }

  // queue_name - computed: false, optional: false, required: true
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new PipesPipeSourceParametersActivemqBrokerParametersCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PipesPipeSourceParametersActivemqBrokerParametersCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}
export interface PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#arn PipesPipe#arn}
  */
  readonly arn?: string;
}

export function pipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfigToTerraform(struct?: PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfigOutputReference | PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function pipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfigToHclTerraform(struct?: PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfigOutputReference | PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface PipesPipeSourceParametersDynamodbStreamParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#batch_size PipesPipe#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds PipesPipe#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#maximum_record_age_in_seconds PipesPipe#maximum_record_age_in_seconds}
  */
  readonly maximumRecordAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#maximum_retry_attempts PipesPipe#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#on_partial_batch_item_failure PipesPipe#on_partial_batch_item_failure}
  */
  readonly onPartialBatchItemFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#parallelization_factor PipesPipe#parallelization_factor}
  */
  readonly parallelizationFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#starting_position PipesPipe#starting_position}
  */
  readonly startingPosition: string;
  /**
  * dead_letter_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#dead_letter_config PipesPipe#dead_letter_config}
  */
  readonly deadLetterConfig?: PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfig;
}

export function pipesPipeSourceParametersDynamodbStreamParametersToTerraform(struct?: PipesPipeSourceParametersDynamodbStreamParametersOutputReference | PipesPipeSourceParametersDynamodbStreamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_size: cdktn.numberToTerraform(struct!.batchSize),
    maximum_batching_window_in_seconds: cdktn.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
    maximum_record_age_in_seconds: cdktn.numberToTerraform(struct!.maximumRecordAgeInSeconds),
    maximum_retry_attempts: cdktn.numberToTerraform(struct!.maximumRetryAttempts),
    on_partial_batch_item_failure: cdktn.stringToTerraform(struct!.onPartialBatchItemFailure),
    parallelization_factor: cdktn.numberToTerraform(struct!.parallelizationFactor),
    starting_position: cdktn.stringToTerraform(struct!.startingPosition),
    dead_letter_config: pipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfigToTerraform(struct!.deadLetterConfig),
  }
}


export function pipesPipeSourceParametersDynamodbStreamParametersToHclTerraform(struct?: PipesPipeSourceParametersDynamodbStreamParametersOutputReference | PipesPipeSourceParametersDynamodbStreamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_size: {
      value: cdktn.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_batching_window_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_record_age_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumRecordAgeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_retry_attempts: {
      value: cdktn.numberToHclTerraform(struct!.maximumRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_partial_batch_item_failure: {
      value: cdktn.stringToHclTerraform(struct!.onPartialBatchItemFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallelization_factor: {
      value: cdktn.numberToHclTerraform(struct!.parallelizationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    starting_position: {
      value: cdktn.stringToHclTerraform(struct!.startingPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_letter_config: {
      value: pipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfigToHclTerraform(struct!.deadLetterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeSourceParametersDynamodbStreamParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeSourceParametersDynamodbStreamParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._maximumBatchingWindowInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
    }
    if (this._maximumRecordAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRecordAgeInSeconds = this._maximumRecordAgeInSeconds;
    }
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    if (this._onPartialBatchItemFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPartialBatchItemFailure = this._onPartialBatchItemFailure;
    }
    if (this._parallelizationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelizationFactor = this._parallelizationFactor;
    }
    if (this._startingPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPosition = this._startingPosition;
    }
    if (this._deadLetterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadLetterConfig = this._deadLetterConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeSourceParametersDynamodbStreamParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchSize = undefined;
      this._maximumBatchingWindowInSeconds = undefined;
      this._maximumRecordAgeInSeconds = undefined;
      this._maximumRetryAttempts = undefined;
      this._onPartialBatchItemFailure = undefined;
      this._parallelizationFactor = undefined;
      this._startingPosition = undefined;
      this._deadLetterConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchSize = value.batchSize;
      this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
      this._maximumRecordAgeInSeconds = value.maximumRecordAgeInSeconds;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
      this._onPartialBatchItemFailure = value.onPartialBatchItemFailure;
      this._parallelizationFactor = value.parallelizationFactor;
      this._startingPosition = value.startingPosition;
      this._deadLetterConfig.internalValue = value.deadLetterConfig;
    }
  }

  // batch_size - computed: true, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // maximum_batching_window_in_seconds - computed: true, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number; 
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds;
  }

  // maximum_record_age_in_seconds - computed: true, optional: true, required: false
  private _maximumRecordAgeInSeconds?: number; 
  public get maximumRecordAgeInSeconds() {
    return this.getNumberAttribute('maximum_record_age_in_seconds');
  }
  public set maximumRecordAgeInSeconds(value: number) {
    this._maximumRecordAgeInSeconds = value;
  }
  public resetMaximumRecordAgeInSeconds() {
    this._maximumRecordAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRecordAgeInSecondsInput() {
    return this._maximumRecordAgeInSeconds;
  }

  // maximum_retry_attempts - computed: false, optional: true, required: false
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }

  // on_partial_batch_item_failure - computed: false, optional: true, required: false
  private _onPartialBatchItemFailure?: string; 
  public get onPartialBatchItemFailure() {
    return this.getStringAttribute('on_partial_batch_item_failure');
  }
  public set onPartialBatchItemFailure(value: string) {
    this._onPartialBatchItemFailure = value;
  }
  public resetOnPartialBatchItemFailure() {
    this._onPartialBatchItemFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPartialBatchItemFailureInput() {
    return this._onPartialBatchItemFailure;
  }

  // parallelization_factor - computed: true, optional: true, required: false
  private _parallelizationFactor?: number; 
  public get parallelizationFactor() {
    return this.getNumberAttribute('parallelization_factor');
  }
  public set parallelizationFactor(value: number) {
    this._parallelizationFactor = value;
  }
  public resetParallelizationFactor() {
    this._parallelizationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelizationFactorInput() {
    return this._parallelizationFactor;
  }

  // starting_position - computed: false, optional: false, required: true
  private _startingPosition?: string; 
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }
  public set startingPosition(value: string) {
    this._startingPosition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionInput() {
    return this._startingPosition;
  }

  // dead_letter_config - computed: false, optional: true, required: false
  private _deadLetterConfig = new PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfigOutputReference(this, "dead_letter_config");
  public get deadLetterConfig() {
    return this._deadLetterConfig;
  }
  public putDeadLetterConfig(value: PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfig) {
    this._deadLetterConfig.internalValue = value;
  }
  public resetDeadLetterConfig() {
    this._deadLetterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterConfigInput() {
    return this._deadLetterConfig.internalValue;
  }
}
export interface PipesPipeSourceParametersFilterCriteriaFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#pattern PipesPipe#pattern}
  */
  readonly pattern: string;
}

export function pipesPipeSourceParametersFilterCriteriaFilterToTerraform(struct?: PipesPipeSourceParametersFilterCriteriaFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pattern: cdktn.stringToTerraform(struct!.pattern),
  }
}


export function pipesPipeSourceParametersFilterCriteriaFilterToHclTerraform(struct?: PipesPipeSourceParametersFilterCriteriaFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeSourceParametersFilterCriteriaFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PipesPipeSourceParametersFilterCriteriaFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeSourceParametersFilterCriteriaFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
    }
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class PipesPipeSourceParametersFilterCriteriaFilterList extends cdktn.ComplexList {
  public internalValue? : PipesPipeSourceParametersFilterCriteriaFilter[] | cdktn.IResolvable

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
  public get(index: number): PipesPipeSourceParametersFilterCriteriaFilterOutputReference {
    return new PipesPipeSourceParametersFilterCriteriaFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipesPipeSourceParametersFilterCriteria {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#filter PipesPipe#filter}
  */
  readonly filter?: PipesPipeSourceParametersFilterCriteriaFilter[] | cdktn.IResolvable;
}

export function pipesPipeSourceParametersFilterCriteriaToTerraform(struct?: PipesPipeSourceParametersFilterCriteriaOutputReference | PipesPipeSourceParametersFilterCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter: cdktn.listMapper(pipesPipeSourceParametersFilterCriteriaFilterToTerraform, true)(struct!.filter),
  }
}


export function pipesPipeSourceParametersFilterCriteriaToHclTerraform(struct?: PipesPipeSourceParametersFilterCriteriaOutputReference | PipesPipeSourceParametersFilterCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter: {
      value: cdktn.listMapperHcl(pipesPipeSourceParametersFilterCriteriaFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeSourceParametersFilterCriteriaFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeSourceParametersFilterCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeSourceParametersFilterCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeSourceParametersFilterCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter.internalValue = value.filter;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new PipesPipeSourceParametersFilterCriteriaFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: PipesPipeSourceParametersFilterCriteriaFilter[] | cdktn.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#arn PipesPipe#arn}
  */
  readonly arn?: string;
}

export function pipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigToTerraform(struct?: PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigOutputReference | PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function pipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigToHclTerraform(struct?: PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigOutputReference | PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface PipesPipeSourceParametersKinesisStreamParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#batch_size PipesPipe#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds PipesPipe#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#maximum_record_age_in_seconds PipesPipe#maximum_record_age_in_seconds}
  */
  readonly maximumRecordAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#maximum_retry_attempts PipesPipe#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#on_partial_batch_item_failure PipesPipe#on_partial_batch_item_failure}
  */
  readonly onPartialBatchItemFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#parallelization_factor PipesPipe#parallelization_factor}
  */
  readonly parallelizationFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#starting_position PipesPipe#starting_position}
  */
  readonly startingPosition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#starting_position_timestamp PipesPipe#starting_position_timestamp}
  */
  readonly startingPositionTimestamp?: string;
  /**
  * dead_letter_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#dead_letter_config PipesPipe#dead_letter_config}
  */
  readonly deadLetterConfig?: PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig;
}

export function pipesPipeSourceParametersKinesisStreamParametersToTerraform(struct?: PipesPipeSourceParametersKinesisStreamParametersOutputReference | PipesPipeSourceParametersKinesisStreamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_size: cdktn.numberToTerraform(struct!.batchSize),
    maximum_batching_window_in_seconds: cdktn.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
    maximum_record_age_in_seconds: cdktn.numberToTerraform(struct!.maximumRecordAgeInSeconds),
    maximum_retry_attempts: cdktn.numberToTerraform(struct!.maximumRetryAttempts),
    on_partial_batch_item_failure: cdktn.stringToTerraform(struct!.onPartialBatchItemFailure),
    parallelization_factor: cdktn.numberToTerraform(struct!.parallelizationFactor),
    starting_position: cdktn.stringToTerraform(struct!.startingPosition),
    starting_position_timestamp: cdktn.stringToTerraform(struct!.startingPositionTimestamp),
    dead_letter_config: pipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigToTerraform(struct!.deadLetterConfig),
  }
}


export function pipesPipeSourceParametersKinesisStreamParametersToHclTerraform(struct?: PipesPipeSourceParametersKinesisStreamParametersOutputReference | PipesPipeSourceParametersKinesisStreamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_size: {
      value: cdktn.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_batching_window_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_record_age_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumRecordAgeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_retry_attempts: {
      value: cdktn.numberToHclTerraform(struct!.maximumRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_partial_batch_item_failure: {
      value: cdktn.stringToHclTerraform(struct!.onPartialBatchItemFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallelization_factor: {
      value: cdktn.numberToHclTerraform(struct!.parallelizationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    starting_position: {
      value: cdktn.stringToHclTerraform(struct!.startingPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_position_timestamp: {
      value: cdktn.stringToHclTerraform(struct!.startingPositionTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_letter_config: {
      value: pipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigToHclTerraform(struct!.deadLetterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeSourceParametersKinesisStreamParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeSourceParametersKinesisStreamParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._maximumBatchingWindowInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
    }
    if (this._maximumRecordAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRecordAgeInSeconds = this._maximumRecordAgeInSeconds;
    }
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    if (this._onPartialBatchItemFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPartialBatchItemFailure = this._onPartialBatchItemFailure;
    }
    if (this._parallelizationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelizationFactor = this._parallelizationFactor;
    }
    if (this._startingPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPosition = this._startingPosition;
    }
    if (this._startingPositionTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPositionTimestamp = this._startingPositionTimestamp;
    }
    if (this._deadLetterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadLetterConfig = this._deadLetterConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeSourceParametersKinesisStreamParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchSize = undefined;
      this._maximumBatchingWindowInSeconds = undefined;
      this._maximumRecordAgeInSeconds = undefined;
      this._maximumRetryAttempts = undefined;
      this._onPartialBatchItemFailure = undefined;
      this._parallelizationFactor = undefined;
      this._startingPosition = undefined;
      this._startingPositionTimestamp = undefined;
      this._deadLetterConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchSize = value.batchSize;
      this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
      this._maximumRecordAgeInSeconds = value.maximumRecordAgeInSeconds;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
      this._onPartialBatchItemFailure = value.onPartialBatchItemFailure;
      this._parallelizationFactor = value.parallelizationFactor;
      this._startingPosition = value.startingPosition;
      this._startingPositionTimestamp = value.startingPositionTimestamp;
      this._deadLetterConfig.internalValue = value.deadLetterConfig;
    }
  }

  // batch_size - computed: true, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // maximum_batching_window_in_seconds - computed: true, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number; 
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds;
  }

  // maximum_record_age_in_seconds - computed: true, optional: true, required: false
  private _maximumRecordAgeInSeconds?: number; 
  public get maximumRecordAgeInSeconds() {
    return this.getNumberAttribute('maximum_record_age_in_seconds');
  }
  public set maximumRecordAgeInSeconds(value: number) {
    this._maximumRecordAgeInSeconds = value;
  }
  public resetMaximumRecordAgeInSeconds() {
    this._maximumRecordAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRecordAgeInSecondsInput() {
    return this._maximumRecordAgeInSeconds;
  }

  // maximum_retry_attempts - computed: false, optional: true, required: false
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }

  // on_partial_batch_item_failure - computed: false, optional: true, required: false
  private _onPartialBatchItemFailure?: string; 
  public get onPartialBatchItemFailure() {
    return this.getStringAttribute('on_partial_batch_item_failure');
  }
  public set onPartialBatchItemFailure(value: string) {
    this._onPartialBatchItemFailure = value;
  }
  public resetOnPartialBatchItemFailure() {
    this._onPartialBatchItemFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPartialBatchItemFailureInput() {
    return this._onPartialBatchItemFailure;
  }

  // parallelization_factor - computed: true, optional: true, required: false
  private _parallelizationFactor?: number; 
  public get parallelizationFactor() {
    return this.getNumberAttribute('parallelization_factor');
  }
  public set parallelizationFactor(value: number) {
    this._parallelizationFactor = value;
  }
  public resetParallelizationFactor() {
    this._parallelizationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelizationFactorInput() {
    return this._parallelizationFactor;
  }

  // starting_position - computed: false, optional: false, required: true
  private _startingPosition?: string; 
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }
  public set startingPosition(value: string) {
    this._startingPosition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionInput() {
    return this._startingPosition;
  }

  // starting_position_timestamp - computed: false, optional: true, required: false
  private _startingPositionTimestamp?: string; 
  public get startingPositionTimestamp() {
    return this.getStringAttribute('starting_position_timestamp');
  }
  public set startingPositionTimestamp(value: string) {
    this._startingPositionTimestamp = value;
  }
  public resetStartingPositionTimestamp() {
    this._startingPositionTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionTimestampInput() {
    return this._startingPositionTimestamp;
  }

  // dead_letter_config - computed: false, optional: true, required: false
  private _deadLetterConfig = new PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigOutputReference(this, "dead_letter_config");
  public get deadLetterConfig() {
    return this._deadLetterConfig;
  }
  public putDeadLetterConfig(value: PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig) {
    this._deadLetterConfig.internalValue = value;
  }
  public resetDeadLetterConfig() {
    this._deadLetterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterConfigInput() {
    return this._deadLetterConfig.internalValue;
  }
}
export interface PipesPipeSourceParametersManagedStreamingKafkaParametersCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#client_certificate_tls_auth PipesPipe#client_certificate_tls_auth}
  */
  readonly clientCertificateTlsAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#sasl_scram_512_auth PipesPipe#sasl_scram_512_auth}
  */
  readonly saslScram512Auth?: string;
}

export function pipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsToTerraform(struct?: PipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsOutputReference | PipesPipeSourceParametersManagedStreamingKafkaParametersCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_certificate_tls_auth: cdktn.stringToTerraform(struct!.clientCertificateTlsAuth),
    sasl_scram_512_auth: cdktn.stringToTerraform(struct!.saslScram512Auth),
  }
}


export function pipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsToHclTerraform(struct?: PipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsOutputReference | PipesPipeSourceParametersManagedStreamingKafkaParametersCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_certificate_tls_auth: {
      value: cdktn.stringToHclTerraform(struct!.clientCertificateTlsAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_scram_512_auth: {
      value: cdktn.stringToHclTerraform(struct!.saslScram512Auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeSourceParametersManagedStreamingKafkaParametersCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateTlsAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateTlsAuth = this._clientCertificateTlsAuth;
    }
    if (this._saslScram512Auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslScram512Auth = this._saslScram512Auth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeSourceParametersManagedStreamingKafkaParametersCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateTlsAuth = undefined;
      this._saslScram512Auth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateTlsAuth = value.clientCertificateTlsAuth;
      this._saslScram512Auth = value.saslScram512Auth;
    }
  }

  // client_certificate_tls_auth - computed: false, optional: true, required: false
  private _clientCertificateTlsAuth?: string; 
  public get clientCertificateTlsAuth() {
    return this.getStringAttribute('client_certificate_tls_auth');
  }
  public set clientCertificateTlsAuth(value: string) {
    this._clientCertificateTlsAuth = value;
  }
  public resetClientCertificateTlsAuth() {
    this._clientCertificateTlsAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateTlsAuthInput() {
    return this._clientCertificateTlsAuth;
  }

  // sasl_scram_512_auth - computed: false, optional: true, required: false
  private _saslScram512Auth?: string; 
  public get saslScram512Auth() {
    return this.getStringAttribute('sasl_scram_512_auth');
  }
  public set saslScram512Auth(value: string) {
    this._saslScram512Auth = value;
  }
  public resetSaslScram512Auth() {
    this._saslScram512Auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslScram512AuthInput() {
    return this._saslScram512Auth;
  }
}
export interface PipesPipeSourceParametersManagedStreamingKafkaParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#batch_size PipesPipe#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#consumer_group_id PipesPipe#consumer_group_id}
  */
  readonly consumerGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds PipesPipe#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#starting_position PipesPipe#starting_position}
  */
  readonly startingPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#topic_name PipesPipe#topic_name}
  */
  readonly topicName: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#credentials PipesPipe#credentials}
  */
  readonly credentials?: PipesPipeSourceParametersManagedStreamingKafkaParametersCredentials;
}

export function pipesPipeSourceParametersManagedStreamingKafkaParametersToTerraform(struct?: PipesPipeSourceParametersManagedStreamingKafkaParametersOutputReference | PipesPipeSourceParametersManagedStreamingKafkaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_size: cdktn.numberToTerraform(struct!.batchSize),
    consumer_group_id: cdktn.stringToTerraform(struct!.consumerGroupId),
    maximum_batching_window_in_seconds: cdktn.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
    starting_position: cdktn.stringToTerraform(struct!.startingPosition),
    topic_name: cdktn.stringToTerraform(struct!.topicName),
    credentials: pipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsToTerraform(struct!.credentials),
  }
}


export function pipesPipeSourceParametersManagedStreamingKafkaParametersToHclTerraform(struct?: PipesPipeSourceParametersManagedStreamingKafkaParametersOutputReference | PipesPipeSourceParametersManagedStreamingKafkaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_size: {
      value: cdktn.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consumer_group_id: {
      value: cdktn.stringToHclTerraform(struct!.consumerGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_batching_window_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    starting_position: {
      value: cdktn.stringToHclTerraform(struct!.startingPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_name: {
      value: cdktn.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: pipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeSourceParametersManagedStreamingKafkaParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeSourceParametersManagedStreamingKafkaParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._consumerGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroupId = this._consumerGroupId;
    }
    if (this._maximumBatchingWindowInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
    }
    if (this._startingPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPosition = this._startingPosition;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeSourceParametersManagedStreamingKafkaParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchSize = undefined;
      this._consumerGroupId = undefined;
      this._maximumBatchingWindowInSeconds = undefined;
      this._startingPosition = undefined;
      this._topicName = undefined;
      this._credentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchSize = value.batchSize;
      this._consumerGroupId = value.consumerGroupId;
      this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
      this._startingPosition = value.startingPosition;
      this._topicName = value.topicName;
      this._credentials.internalValue = value.credentials;
    }
  }

  // batch_size - computed: true, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // consumer_group_id - computed: false, optional: true, required: false
  private _consumerGroupId?: string; 
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }
  public set consumerGroupId(value: string) {
    this._consumerGroupId = value;
  }
  public resetConsumerGroupId() {
    this._consumerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupIdInput() {
    return this._consumerGroupId;
  }

  // maximum_batching_window_in_seconds - computed: true, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number; 
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds;
  }

  // starting_position - computed: false, optional: true, required: false
  private _startingPosition?: string; 
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }
  public set startingPosition(value: string) {
    this._startingPosition = value;
  }
  public resetStartingPosition() {
    this._startingPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionInput() {
    return this._startingPosition;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new PipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PipesPipeSourceParametersManagedStreamingKafkaParametersCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}
export interface PipesPipeSourceParametersRabbitmqBrokerParametersCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#basic_auth PipesPipe#basic_auth}
  */
  readonly basicAuth: string;
}

export function pipesPipeSourceParametersRabbitmqBrokerParametersCredentialsToTerraform(struct?: PipesPipeSourceParametersRabbitmqBrokerParametersCredentialsOutputReference | PipesPipeSourceParametersRabbitmqBrokerParametersCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    basic_auth: cdktn.stringToTerraform(struct!.basicAuth),
  }
}


export function pipesPipeSourceParametersRabbitmqBrokerParametersCredentialsToHclTerraform(struct?: PipesPipeSourceParametersRabbitmqBrokerParametersCredentialsOutputReference | PipesPipeSourceParametersRabbitmqBrokerParametersCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    basic_auth: {
      value: cdktn.stringToHclTerraform(struct!.basicAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeSourceParametersRabbitmqBrokerParametersCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeSourceParametersRabbitmqBrokerParametersCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeSourceParametersRabbitmqBrokerParametersCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basicAuth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basicAuth = value.basicAuth;
    }
  }

  // basic_auth - computed: false, optional: false, required: true
  private _basicAuth?: string; 
  public get basicAuth() {
    return this.getStringAttribute('basic_auth');
  }
  public set basicAuth(value: string) {
    this._basicAuth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth;
  }
}
export interface PipesPipeSourceParametersRabbitmqBrokerParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#batch_size PipesPipe#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds PipesPipe#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#queue_name PipesPipe#queue_name}
  */
  readonly queueName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#virtual_host PipesPipe#virtual_host}
  */
  readonly virtualHost?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#credentials PipesPipe#credentials}
  */
  readonly credentials: PipesPipeSourceParametersRabbitmqBrokerParametersCredentials;
}

export function pipesPipeSourceParametersRabbitmqBrokerParametersToTerraform(struct?: PipesPipeSourceParametersRabbitmqBrokerParametersOutputReference | PipesPipeSourceParametersRabbitmqBrokerParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_size: cdktn.numberToTerraform(struct!.batchSize),
    maximum_batching_window_in_seconds: cdktn.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
    queue_name: cdktn.stringToTerraform(struct!.queueName),
    virtual_host: cdktn.stringToTerraform(struct!.virtualHost),
    credentials: pipesPipeSourceParametersRabbitmqBrokerParametersCredentialsToTerraform(struct!.credentials),
  }
}


export function pipesPipeSourceParametersRabbitmqBrokerParametersToHclTerraform(struct?: PipesPipeSourceParametersRabbitmqBrokerParametersOutputReference | PipesPipeSourceParametersRabbitmqBrokerParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_size: {
      value: cdktn.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_batching_window_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_name: {
      value: cdktn.stringToHclTerraform(struct!.queueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_host: {
      value: cdktn.stringToHclTerraform(struct!.virtualHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: pipesPipeSourceParametersRabbitmqBrokerParametersCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeSourceParametersRabbitmqBrokerParametersCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeSourceParametersRabbitmqBrokerParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeSourceParametersRabbitmqBrokerParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._maximumBatchingWindowInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
    }
    if (this._queueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueName = this._queueName;
    }
    if (this._virtualHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualHost = this._virtualHost;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeSourceParametersRabbitmqBrokerParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchSize = undefined;
      this._maximumBatchingWindowInSeconds = undefined;
      this._queueName = undefined;
      this._virtualHost = undefined;
      this._credentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchSize = value.batchSize;
      this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
      this._queueName = value.queueName;
      this._virtualHost = value.virtualHost;
      this._credentials.internalValue = value.credentials;
    }
  }

  // batch_size - computed: true, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // maximum_batching_window_in_seconds - computed: true, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number; 
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds;
  }

  // queue_name - computed: false, optional: false, required: true
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName;
  }

  // virtual_host - computed: false, optional: true, required: false
  private _virtualHost?: string; 
  public get virtualHost() {
    return this.getStringAttribute('virtual_host');
  }
  public set virtualHost(value: string) {
    this._virtualHost = value;
  }
  public resetVirtualHost() {
    this._virtualHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostInput() {
    return this._virtualHost;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new PipesPipeSourceParametersRabbitmqBrokerParametersCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PipesPipeSourceParametersRabbitmqBrokerParametersCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}
export interface PipesPipeSourceParametersSelfManagedKafkaParametersCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#basic_auth PipesPipe#basic_auth}
  */
  readonly basicAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#client_certificate_tls_auth PipesPipe#client_certificate_tls_auth}
  */
  readonly clientCertificateTlsAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#sasl_scram_256_auth PipesPipe#sasl_scram_256_auth}
  */
  readonly saslScram256Auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#sasl_scram_512_auth PipesPipe#sasl_scram_512_auth}
  */
  readonly saslScram512Auth?: string;
}

export function pipesPipeSourceParametersSelfManagedKafkaParametersCredentialsToTerraform(struct?: PipesPipeSourceParametersSelfManagedKafkaParametersCredentialsOutputReference | PipesPipeSourceParametersSelfManagedKafkaParametersCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    basic_auth: cdktn.stringToTerraform(struct!.basicAuth),
    client_certificate_tls_auth: cdktn.stringToTerraform(struct!.clientCertificateTlsAuth),
    sasl_scram_256_auth: cdktn.stringToTerraform(struct!.saslScram256Auth),
    sasl_scram_512_auth: cdktn.stringToTerraform(struct!.saslScram512Auth),
  }
}


export function pipesPipeSourceParametersSelfManagedKafkaParametersCredentialsToHclTerraform(struct?: PipesPipeSourceParametersSelfManagedKafkaParametersCredentialsOutputReference | PipesPipeSourceParametersSelfManagedKafkaParametersCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    basic_auth: {
      value: cdktn.stringToHclTerraform(struct!.basicAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_tls_auth: {
      value: cdktn.stringToHclTerraform(struct!.clientCertificateTlsAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_scram_256_auth: {
      value: cdktn.stringToHclTerraform(struct!.saslScram256Auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_scram_512_auth: {
      value: cdktn.stringToHclTerraform(struct!.saslScram512Auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeSourceParametersSelfManagedKafkaParametersCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeSourceParametersSelfManagedKafkaParametersCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth;
    }
    if (this._clientCertificateTlsAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateTlsAuth = this._clientCertificateTlsAuth;
    }
    if (this._saslScram256Auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslScram256Auth = this._saslScram256Auth;
    }
    if (this._saslScram512Auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslScram512Auth = this._saslScram512Auth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeSourceParametersSelfManagedKafkaParametersCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basicAuth = undefined;
      this._clientCertificateTlsAuth = undefined;
      this._saslScram256Auth = undefined;
      this._saslScram512Auth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basicAuth = value.basicAuth;
      this._clientCertificateTlsAuth = value.clientCertificateTlsAuth;
      this._saslScram256Auth = value.saslScram256Auth;
      this._saslScram512Auth = value.saslScram512Auth;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth?: string; 
  public get basicAuth() {
    return this.getStringAttribute('basic_auth');
  }
  public set basicAuth(value: string) {
    this._basicAuth = value;
  }
  public resetBasicAuth() {
    this._basicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth;
  }

  // client_certificate_tls_auth - computed: false, optional: true, required: false
  private _clientCertificateTlsAuth?: string; 
  public get clientCertificateTlsAuth() {
    return this.getStringAttribute('client_certificate_tls_auth');
  }
  public set clientCertificateTlsAuth(value: string) {
    this._clientCertificateTlsAuth = value;
  }
  public resetClientCertificateTlsAuth() {
    this._clientCertificateTlsAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateTlsAuthInput() {
    return this._clientCertificateTlsAuth;
  }

  // sasl_scram_256_auth - computed: false, optional: true, required: false
  private _saslScram256Auth?: string; 
  public get saslScram256Auth() {
    return this.getStringAttribute('sasl_scram_256_auth');
  }
  public set saslScram256Auth(value: string) {
    this._saslScram256Auth = value;
  }
  public resetSaslScram256Auth() {
    this._saslScram256Auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslScram256AuthInput() {
    return this._saslScram256Auth;
  }

  // sasl_scram_512_auth - computed: false, optional: true, required: false
  private _saslScram512Auth?: string; 
  public get saslScram512Auth() {
    return this.getStringAttribute('sasl_scram_512_auth');
  }
  public set saslScram512Auth(value: string) {
    this._saslScram512Auth = value;
  }
  public resetSaslScram512Auth() {
    this._saslScram512Auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslScram512AuthInput() {
    return this._saslScram512Auth;
  }
}
export interface PipesPipeSourceParametersSelfManagedKafkaParametersVpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#security_groups PipesPipe#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#subnets PipesPipe#subnets}
  */
  readonly subnets?: string[];
}

export function pipesPipeSourceParametersSelfManagedKafkaParametersVpcToTerraform(struct?: PipesPipeSourceParametersSelfManagedKafkaParametersVpcOutputReference | PipesPipeSourceParametersSelfManagedKafkaParametersVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function pipesPipeSourceParametersSelfManagedKafkaParametersVpcToHclTerraform(struct?: PipesPipeSourceParametersSelfManagedKafkaParametersVpcOutputReference | PipesPipeSourceParametersSelfManagedKafkaParametersVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeSourceParametersSelfManagedKafkaParametersVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeSourceParametersSelfManagedKafkaParametersVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeSourceParametersSelfManagedKafkaParametersVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface PipesPipeSourceParametersSelfManagedKafkaParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#additional_bootstrap_servers PipesPipe#additional_bootstrap_servers}
  */
  readonly additionalBootstrapServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#batch_size PipesPipe#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#consumer_group_id PipesPipe#consumer_group_id}
  */
  readonly consumerGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds PipesPipe#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#server_root_ca_certificate PipesPipe#server_root_ca_certificate}
  */
  readonly serverRootCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#starting_position PipesPipe#starting_position}
  */
  readonly startingPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#topic_name PipesPipe#topic_name}
  */
  readonly topicName: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#credentials PipesPipe#credentials}
  */
  readonly credentials?: PipesPipeSourceParametersSelfManagedKafkaParametersCredentials;
  /**
  * vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#vpc PipesPipe#vpc}
  */
  readonly vpc?: PipesPipeSourceParametersSelfManagedKafkaParametersVpc;
}

export function pipesPipeSourceParametersSelfManagedKafkaParametersToTerraform(struct?: PipesPipeSourceParametersSelfManagedKafkaParametersOutputReference | PipesPipeSourceParametersSelfManagedKafkaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_bootstrap_servers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.additionalBootstrapServers),
    batch_size: cdktn.numberToTerraform(struct!.batchSize),
    consumer_group_id: cdktn.stringToTerraform(struct!.consumerGroupId),
    maximum_batching_window_in_seconds: cdktn.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
    server_root_ca_certificate: cdktn.stringToTerraform(struct!.serverRootCaCertificate),
    starting_position: cdktn.stringToTerraform(struct!.startingPosition),
    topic_name: cdktn.stringToTerraform(struct!.topicName),
    credentials: pipesPipeSourceParametersSelfManagedKafkaParametersCredentialsToTerraform(struct!.credentials),
    vpc: pipesPipeSourceParametersSelfManagedKafkaParametersVpcToTerraform(struct!.vpc),
  }
}


export function pipesPipeSourceParametersSelfManagedKafkaParametersToHclTerraform(struct?: PipesPipeSourceParametersSelfManagedKafkaParametersOutputReference | PipesPipeSourceParametersSelfManagedKafkaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_bootstrap_servers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.additionalBootstrapServers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    batch_size: {
      value: cdktn.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consumer_group_id: {
      value: cdktn.stringToHclTerraform(struct!.consumerGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_batching_window_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_root_ca_certificate: {
      value: cdktn.stringToHclTerraform(struct!.serverRootCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_position: {
      value: cdktn.stringToHclTerraform(struct!.startingPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_name: {
      value: cdktn.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: pipesPipeSourceParametersSelfManagedKafkaParametersCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeSourceParametersSelfManagedKafkaParametersCredentialsList",
    },
    vpc: {
      value: pipesPipeSourceParametersSelfManagedKafkaParametersVpcToHclTerraform(struct!.vpc),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeSourceParametersSelfManagedKafkaParametersVpcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeSourceParametersSelfManagedKafkaParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeSourceParametersSelfManagedKafkaParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalBootstrapServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalBootstrapServers = this._additionalBootstrapServers;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._consumerGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroupId = this._consumerGroupId;
    }
    if (this._maximumBatchingWindowInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
    }
    if (this._serverRootCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRootCaCertificate = this._serverRootCaCertificate;
    }
    if (this._startingPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPosition = this._startingPosition;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._vpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeSourceParametersSelfManagedKafkaParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalBootstrapServers = undefined;
      this._batchSize = undefined;
      this._consumerGroupId = undefined;
      this._maximumBatchingWindowInSeconds = undefined;
      this._serverRootCaCertificate = undefined;
      this._startingPosition = undefined;
      this._topicName = undefined;
      this._credentials.internalValue = undefined;
      this._vpc.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalBootstrapServers = value.additionalBootstrapServers;
      this._batchSize = value.batchSize;
      this._consumerGroupId = value.consumerGroupId;
      this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
      this._serverRootCaCertificate = value.serverRootCaCertificate;
      this._startingPosition = value.startingPosition;
      this._topicName = value.topicName;
      this._credentials.internalValue = value.credentials;
      this._vpc.internalValue = value.vpc;
    }
  }

  // additional_bootstrap_servers - computed: false, optional: true, required: false
  private _additionalBootstrapServers?: string[]; 
  public get additionalBootstrapServers() {
    return cdktn.Fn.tolist(this.getListAttribute('additional_bootstrap_servers'));
  }
  public set additionalBootstrapServers(value: string[]) {
    this._additionalBootstrapServers = value;
  }
  public resetAdditionalBootstrapServers() {
    this._additionalBootstrapServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalBootstrapServersInput() {
    return this._additionalBootstrapServers;
  }

  // batch_size - computed: true, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // consumer_group_id - computed: false, optional: true, required: false
  private _consumerGroupId?: string; 
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }
  public set consumerGroupId(value: string) {
    this._consumerGroupId = value;
  }
  public resetConsumerGroupId() {
    this._consumerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupIdInput() {
    return this._consumerGroupId;
  }

  // maximum_batching_window_in_seconds - computed: true, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number; 
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds;
  }

  // server_root_ca_certificate - computed: false, optional: true, required: false
  private _serverRootCaCertificate?: string; 
  public get serverRootCaCertificate() {
    return this.getStringAttribute('server_root_ca_certificate');
  }
  public set serverRootCaCertificate(value: string) {
    this._serverRootCaCertificate = value;
  }
  public resetServerRootCaCertificate() {
    this._serverRootCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRootCaCertificateInput() {
    return this._serverRootCaCertificate;
  }

  // starting_position - computed: false, optional: true, required: false
  private _startingPosition?: string; 
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }
  public set startingPosition(value: string) {
    this._startingPosition = value;
  }
  public resetStartingPosition() {
    this._startingPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionInput() {
    return this._startingPosition;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new PipesPipeSourceParametersSelfManagedKafkaParametersCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PipesPipeSourceParametersSelfManagedKafkaParametersCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc = new PipesPipeSourceParametersSelfManagedKafkaParametersVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: PipesPipeSourceParametersSelfManagedKafkaParametersVpc) {
    this._vpc.internalValue = value;
  }
  public resetVpc() {
    this._vpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }
}
export interface PipesPipeSourceParametersSqsQueueParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#batch_size PipesPipe#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds PipesPipe#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
}

export function pipesPipeSourceParametersSqsQueueParametersToTerraform(struct?: PipesPipeSourceParametersSqsQueueParametersOutputReference | PipesPipeSourceParametersSqsQueueParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_size: cdktn.numberToTerraform(struct!.batchSize),
    maximum_batching_window_in_seconds: cdktn.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
  }
}


export function pipesPipeSourceParametersSqsQueueParametersToHclTerraform(struct?: PipesPipeSourceParametersSqsQueueParametersOutputReference | PipesPipeSourceParametersSqsQueueParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_size: {
      value: cdktn.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_batching_window_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeSourceParametersSqsQueueParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeSourceParametersSqsQueueParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._maximumBatchingWindowInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeSourceParametersSqsQueueParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchSize = undefined;
      this._maximumBatchingWindowInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchSize = value.batchSize;
      this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
    }
  }

  // batch_size - computed: true, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // maximum_batching_window_in_seconds - computed: true, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number; 
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds;
  }
}
export interface PipesPipeSourceParameters {
  /**
  * activemq_broker_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#activemq_broker_parameters PipesPipe#activemq_broker_parameters}
  */
  readonly activemqBrokerParameters?: PipesPipeSourceParametersActivemqBrokerParameters;
  /**
  * dynamodb_stream_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#dynamodb_stream_parameters PipesPipe#dynamodb_stream_parameters}
  */
  readonly dynamodbStreamParameters?: PipesPipeSourceParametersDynamodbStreamParameters;
  /**
  * filter_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#filter_criteria PipesPipe#filter_criteria}
  */
  readonly filterCriteria?: PipesPipeSourceParametersFilterCriteria;
  /**
  * kinesis_stream_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#kinesis_stream_parameters PipesPipe#kinesis_stream_parameters}
  */
  readonly kinesisStreamParameters?: PipesPipeSourceParametersKinesisStreamParameters;
  /**
  * managed_streaming_kafka_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#managed_streaming_kafka_parameters PipesPipe#managed_streaming_kafka_parameters}
  */
  readonly managedStreamingKafkaParameters?: PipesPipeSourceParametersManagedStreamingKafkaParameters;
  /**
  * rabbitmq_broker_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#rabbitmq_broker_parameters PipesPipe#rabbitmq_broker_parameters}
  */
  readonly rabbitmqBrokerParameters?: PipesPipeSourceParametersRabbitmqBrokerParameters;
  /**
  * self_managed_kafka_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#self_managed_kafka_parameters PipesPipe#self_managed_kafka_parameters}
  */
  readonly selfManagedKafkaParameters?: PipesPipeSourceParametersSelfManagedKafkaParameters;
  /**
  * sqs_queue_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#sqs_queue_parameters PipesPipe#sqs_queue_parameters}
  */
  readonly sqsQueueParameters?: PipesPipeSourceParametersSqsQueueParameters;
}

export function pipesPipeSourceParametersToTerraform(struct?: PipesPipeSourceParametersOutputReference | PipesPipeSourceParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    activemq_broker_parameters: pipesPipeSourceParametersActivemqBrokerParametersToTerraform(struct!.activemqBrokerParameters),
    dynamodb_stream_parameters: pipesPipeSourceParametersDynamodbStreamParametersToTerraform(struct!.dynamodbStreamParameters),
    filter_criteria: pipesPipeSourceParametersFilterCriteriaToTerraform(struct!.filterCriteria),
    kinesis_stream_parameters: pipesPipeSourceParametersKinesisStreamParametersToTerraform(struct!.kinesisStreamParameters),
    managed_streaming_kafka_parameters: pipesPipeSourceParametersManagedStreamingKafkaParametersToTerraform(struct!.managedStreamingKafkaParameters),
    rabbitmq_broker_parameters: pipesPipeSourceParametersRabbitmqBrokerParametersToTerraform(struct!.rabbitmqBrokerParameters),
    self_managed_kafka_parameters: pipesPipeSourceParametersSelfManagedKafkaParametersToTerraform(struct!.selfManagedKafkaParameters),
    sqs_queue_parameters: pipesPipeSourceParametersSqsQueueParametersToTerraform(struct!.sqsQueueParameters),
  }
}


export function pipesPipeSourceParametersToHclTerraform(struct?: PipesPipeSourceParametersOutputReference | PipesPipeSourceParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    activemq_broker_parameters: {
      value: pipesPipeSourceParametersActivemqBrokerParametersToHclTerraform(struct!.activemqBrokerParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeSourceParametersActivemqBrokerParametersList",
    },
    dynamodb_stream_parameters: {
      value: pipesPipeSourceParametersDynamodbStreamParametersToHclTerraform(struct!.dynamodbStreamParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeSourceParametersDynamodbStreamParametersList",
    },
    filter_criteria: {
      value: pipesPipeSourceParametersFilterCriteriaToHclTerraform(struct!.filterCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeSourceParametersFilterCriteriaList",
    },
    kinesis_stream_parameters: {
      value: pipesPipeSourceParametersKinesisStreamParametersToHclTerraform(struct!.kinesisStreamParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeSourceParametersKinesisStreamParametersList",
    },
    managed_streaming_kafka_parameters: {
      value: pipesPipeSourceParametersManagedStreamingKafkaParametersToHclTerraform(struct!.managedStreamingKafkaParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeSourceParametersManagedStreamingKafkaParametersList",
    },
    rabbitmq_broker_parameters: {
      value: pipesPipeSourceParametersRabbitmqBrokerParametersToHclTerraform(struct!.rabbitmqBrokerParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeSourceParametersRabbitmqBrokerParametersList",
    },
    self_managed_kafka_parameters: {
      value: pipesPipeSourceParametersSelfManagedKafkaParametersToHclTerraform(struct!.selfManagedKafkaParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeSourceParametersSelfManagedKafkaParametersList",
    },
    sqs_queue_parameters: {
      value: pipesPipeSourceParametersSqsQueueParametersToHclTerraform(struct!.sqsQueueParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeSourceParametersSqsQueueParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeSourceParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeSourceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activemqBrokerParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activemqBrokerParameters = this._activemqBrokerParameters?.internalValue;
    }
    if (this._dynamodbStreamParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamodbStreamParameters = this._dynamodbStreamParameters?.internalValue;
    }
    if (this._filterCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCriteria = this._filterCriteria?.internalValue;
    }
    if (this._kinesisStreamParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStreamParameters = this._kinesisStreamParameters?.internalValue;
    }
    if (this._managedStreamingKafkaParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedStreamingKafkaParameters = this._managedStreamingKafkaParameters?.internalValue;
    }
    if (this._rabbitmqBrokerParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rabbitmqBrokerParameters = this._rabbitmqBrokerParameters?.internalValue;
    }
    if (this._selfManagedKafkaParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfManagedKafkaParameters = this._selfManagedKafkaParameters?.internalValue;
    }
    if (this._sqsQueueParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsQueueParameters = this._sqsQueueParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeSourceParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activemqBrokerParameters.internalValue = undefined;
      this._dynamodbStreamParameters.internalValue = undefined;
      this._filterCriteria.internalValue = undefined;
      this._kinesisStreamParameters.internalValue = undefined;
      this._managedStreamingKafkaParameters.internalValue = undefined;
      this._rabbitmqBrokerParameters.internalValue = undefined;
      this._selfManagedKafkaParameters.internalValue = undefined;
      this._sqsQueueParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activemqBrokerParameters.internalValue = value.activemqBrokerParameters;
      this._dynamodbStreamParameters.internalValue = value.dynamodbStreamParameters;
      this._filterCriteria.internalValue = value.filterCriteria;
      this._kinesisStreamParameters.internalValue = value.kinesisStreamParameters;
      this._managedStreamingKafkaParameters.internalValue = value.managedStreamingKafkaParameters;
      this._rabbitmqBrokerParameters.internalValue = value.rabbitmqBrokerParameters;
      this._selfManagedKafkaParameters.internalValue = value.selfManagedKafkaParameters;
      this._sqsQueueParameters.internalValue = value.sqsQueueParameters;
    }
  }

  // activemq_broker_parameters - computed: false, optional: true, required: false
  private _activemqBrokerParameters = new PipesPipeSourceParametersActivemqBrokerParametersOutputReference(this, "activemq_broker_parameters");
  public get activemqBrokerParameters() {
    return this._activemqBrokerParameters;
  }
  public putActivemqBrokerParameters(value: PipesPipeSourceParametersActivemqBrokerParameters) {
    this._activemqBrokerParameters.internalValue = value;
  }
  public resetActivemqBrokerParameters() {
    this._activemqBrokerParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activemqBrokerParametersInput() {
    return this._activemqBrokerParameters.internalValue;
  }

  // dynamodb_stream_parameters - computed: false, optional: true, required: false
  private _dynamodbStreamParameters = new PipesPipeSourceParametersDynamodbStreamParametersOutputReference(this, "dynamodb_stream_parameters");
  public get dynamodbStreamParameters() {
    return this._dynamodbStreamParameters;
  }
  public putDynamodbStreamParameters(value: PipesPipeSourceParametersDynamodbStreamParameters) {
    this._dynamodbStreamParameters.internalValue = value;
  }
  public resetDynamodbStreamParameters() {
    this._dynamodbStreamParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbStreamParametersInput() {
    return this._dynamodbStreamParameters.internalValue;
  }

  // filter_criteria - computed: false, optional: true, required: false
  private _filterCriteria = new PipesPipeSourceParametersFilterCriteriaOutputReference(this, "filter_criteria");
  public get filterCriteria() {
    return this._filterCriteria;
  }
  public putFilterCriteria(value: PipesPipeSourceParametersFilterCriteria) {
    this._filterCriteria.internalValue = value;
  }
  public resetFilterCriteria() {
    this._filterCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCriteriaInput() {
    return this._filterCriteria.internalValue;
  }

  // kinesis_stream_parameters - computed: false, optional: true, required: false
  private _kinesisStreamParameters = new PipesPipeSourceParametersKinesisStreamParametersOutputReference(this, "kinesis_stream_parameters");
  public get kinesisStreamParameters() {
    return this._kinesisStreamParameters;
  }
  public putKinesisStreamParameters(value: PipesPipeSourceParametersKinesisStreamParameters) {
    this._kinesisStreamParameters.internalValue = value;
  }
  public resetKinesisStreamParameters() {
    this._kinesisStreamParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamParametersInput() {
    return this._kinesisStreamParameters.internalValue;
  }

  // managed_streaming_kafka_parameters - computed: false, optional: true, required: false
  private _managedStreamingKafkaParameters = new PipesPipeSourceParametersManagedStreamingKafkaParametersOutputReference(this, "managed_streaming_kafka_parameters");
  public get managedStreamingKafkaParameters() {
    return this._managedStreamingKafkaParameters;
  }
  public putManagedStreamingKafkaParameters(value: PipesPipeSourceParametersManagedStreamingKafkaParameters) {
    this._managedStreamingKafkaParameters.internalValue = value;
  }
  public resetManagedStreamingKafkaParameters() {
    this._managedStreamingKafkaParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedStreamingKafkaParametersInput() {
    return this._managedStreamingKafkaParameters.internalValue;
  }

  // rabbitmq_broker_parameters - computed: false, optional: true, required: false
  private _rabbitmqBrokerParameters = new PipesPipeSourceParametersRabbitmqBrokerParametersOutputReference(this, "rabbitmq_broker_parameters");
  public get rabbitmqBrokerParameters() {
    return this._rabbitmqBrokerParameters;
  }
  public putRabbitmqBrokerParameters(value: PipesPipeSourceParametersRabbitmqBrokerParameters) {
    this._rabbitmqBrokerParameters.internalValue = value;
  }
  public resetRabbitmqBrokerParameters() {
    this._rabbitmqBrokerParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rabbitmqBrokerParametersInput() {
    return this._rabbitmqBrokerParameters.internalValue;
  }

  // self_managed_kafka_parameters - computed: false, optional: true, required: false
  private _selfManagedKafkaParameters = new PipesPipeSourceParametersSelfManagedKafkaParametersOutputReference(this, "self_managed_kafka_parameters");
  public get selfManagedKafkaParameters() {
    return this._selfManagedKafkaParameters;
  }
  public putSelfManagedKafkaParameters(value: PipesPipeSourceParametersSelfManagedKafkaParameters) {
    this._selfManagedKafkaParameters.internalValue = value;
  }
  public resetSelfManagedKafkaParameters() {
    this._selfManagedKafkaParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedKafkaParametersInput() {
    return this._selfManagedKafkaParameters.internalValue;
  }

  // sqs_queue_parameters - computed: false, optional: true, required: false
  private _sqsQueueParameters = new PipesPipeSourceParametersSqsQueueParametersOutputReference(this, "sqs_queue_parameters");
  public get sqsQueueParameters() {
    return this._sqsQueueParameters;
  }
  public putSqsQueueParameters(value: PipesPipeSourceParametersSqsQueueParameters) {
    this._sqsQueueParameters.internalValue = value;
  }
  public resetSqsQueueParameters() {
    this._sqsQueueParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsQueueParametersInput() {
    return this._sqsQueueParameters.internalValue;
  }
}
export interface PipesPipeTargetParametersBatchJobParametersArrayProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#size PipesPipe#size}
  */
  readonly size?: number;
}

export function pipesPipeTargetParametersBatchJobParametersArrayPropertiesToTerraform(struct?: PipesPipeTargetParametersBatchJobParametersArrayPropertiesOutputReference | PipesPipeTargetParametersBatchJobParametersArrayProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    size: cdktn.numberToTerraform(struct!.size),
  }
}


export function pipesPipeTargetParametersBatchJobParametersArrayPropertiesToHclTerraform(struct?: PipesPipeTargetParametersBatchJobParametersArrayPropertiesOutputReference | PipesPipeTargetParametersBatchJobParametersArrayProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersBatchJobParametersArrayPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersBatchJobParametersArrayProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersBatchJobParametersArrayProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
    }
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#name PipesPipe#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#value PipesPipe#value}
  */
  readonly value?: string;
}

export function pipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentToTerraform(struct?: PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function pipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentToHclTerraform(struct?: PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentList extends cdktn.ComplexList {
  public internalValue? : PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment[] | cdktn.IResolvable

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
  public get(index: number): PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentOutputReference {
    return new PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#type PipesPipe#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#value PipesPipe#value}
  */
  readonly value: string;
}

export function pipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementToTerraform(struct?: PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function pipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementToHclTerraform(struct?: PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementList extends cdktn.ComplexList {
  public internalValue? : PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement[] | cdktn.IResolvable

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
  public get(index: number): PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementOutputReference {
    return new PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipesPipeTargetParametersBatchJobParametersContainerOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#command PipesPipe#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#instance_type PipesPipe#instance_type}
  */
  readonly instanceType?: string;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#environment PipesPipe#environment}
  */
  readonly environment?: PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment[] | cdktn.IResolvable;
  /**
  * resource_requirement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#resource_requirement PipesPipe#resource_requirement}
  */
  readonly resourceRequirement?: PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement[] | cdktn.IResolvable;
}

export function pipesPipeTargetParametersBatchJobParametersContainerOverridesToTerraform(struct?: PipesPipeTargetParametersBatchJobParametersContainerOverridesOutputReference | PipesPipeTargetParametersBatchJobParametersContainerOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    environment: cdktn.listMapper(pipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentToTerraform, true)(struct!.environment),
    resource_requirement: cdktn.listMapper(pipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementToTerraform, true)(struct!.resourceRequirement),
  }
}


export function pipesPipeTargetParametersBatchJobParametersContainerOverridesToHclTerraform(struct?: PipesPipeTargetParametersBatchJobParametersContainerOverridesOutputReference | PipesPipeTargetParametersBatchJobParametersContainerOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktn.listMapperHcl(pipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentToHclTerraform, true)(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentList",
    },
    resource_requirement: {
      value: cdktn.listMapperHcl(pipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementToHclTerraform, true)(struct!.resourceRequirement),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersBatchJobParametersContainerOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersBatchJobParametersContainerOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._resourceRequirement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirement = this._resourceRequirement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersBatchJobParametersContainerOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
      this._instanceType = undefined;
      this._environment.internalValue = undefined;
      this._resourceRequirement.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
      this._instanceType = value.instanceType;
      this._environment.internalValue = value.environment;
      this._resourceRequirement.internalValue = value.resourceRequirement;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
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

  // environment - computed: false, optional: true, required: false
  private _environment = new PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment[] | cdktn.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // resource_requirement - computed: false, optional: true, required: false
  private _resourceRequirement = new PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementList(this, "resource_requirement", false);
  public get resourceRequirement() {
    return this._resourceRequirement;
  }
  public putResourceRequirement(value: PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement[] | cdktn.IResolvable) {
    this._resourceRequirement.internalValue = value;
  }
  public resetResourceRequirement() {
    this._resourceRequirement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementInput() {
    return this._resourceRequirement.internalValue;
  }
}
export interface PipesPipeTargetParametersBatchJobParametersDependsOn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#job_id PipesPipe#job_id}
  */
  readonly jobId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#type PipesPipe#type}
  */
  readonly type?: string;
}

export function pipesPipeTargetParametersBatchJobParametersDependsOnToTerraform(struct?: PipesPipeTargetParametersBatchJobParametersDependsOn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    job_id: cdktn.stringToTerraform(struct!.jobId),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function pipesPipeTargetParametersBatchJobParametersDependsOnToHclTerraform(struct?: PipesPipeTargetParametersBatchJobParametersDependsOn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    job_id: {
      value: cdktn.stringToHclTerraform(struct!.jobId),
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

export class PipesPipeTargetParametersBatchJobParametersDependsOnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PipesPipeTargetParametersBatchJobParametersDependsOn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersBatchJobParametersDependsOn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobId = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jobId = value.jobId;
      this._type = value.type;
    }
  }

  // job_id - computed: false, optional: true, required: false
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PipesPipeTargetParametersBatchJobParametersDependsOnList extends cdktn.ComplexList {
  public internalValue? : PipesPipeTargetParametersBatchJobParametersDependsOn[] | cdktn.IResolvable

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
  public get(index: number): PipesPipeTargetParametersBatchJobParametersDependsOnOutputReference {
    return new PipesPipeTargetParametersBatchJobParametersDependsOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipesPipeTargetParametersBatchJobParametersRetryStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#attempts PipesPipe#attempts}
  */
  readonly attempts?: number;
}

export function pipesPipeTargetParametersBatchJobParametersRetryStrategyToTerraform(struct?: PipesPipeTargetParametersBatchJobParametersRetryStrategyOutputReference | PipesPipeTargetParametersBatchJobParametersRetryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attempts: cdktn.numberToTerraform(struct!.attempts),
  }
}


export function pipesPipeTargetParametersBatchJobParametersRetryStrategyToHclTerraform(struct?: PipesPipeTargetParametersBatchJobParametersRetryStrategyOutputReference | PipesPipeTargetParametersBatchJobParametersRetryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attempts: {
      value: cdktn.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersBatchJobParametersRetryStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersBatchJobParametersRetryStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersBatchJobParametersRetryStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attempts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attempts = value.attempts;
    }
  }

  // attempts - computed: false, optional: true, required: false
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  public resetAttempts() {
    this._attempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }
}
export interface PipesPipeTargetParametersBatchJobParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#job_definition PipesPipe#job_definition}
  */
  readonly jobDefinition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#job_name PipesPipe#job_name}
  */
  readonly jobName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#parameters PipesPipe#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * array_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#array_properties PipesPipe#array_properties}
  */
  readonly arrayProperties?: PipesPipeTargetParametersBatchJobParametersArrayProperties;
  /**
  * container_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#container_overrides PipesPipe#container_overrides}
  */
  readonly containerOverrides?: PipesPipeTargetParametersBatchJobParametersContainerOverrides;
  /**
  * depends_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#depends_on PipesPipe#depends_on}
  */
  readonly dependsOn?: PipesPipeTargetParametersBatchJobParametersDependsOn[] | cdktn.IResolvable;
  /**
  * retry_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#retry_strategy PipesPipe#retry_strategy}
  */
  readonly retryStrategy?: PipesPipeTargetParametersBatchJobParametersRetryStrategy;
}

export function pipesPipeTargetParametersBatchJobParametersToTerraform(struct?: PipesPipeTargetParametersBatchJobParametersOutputReference | PipesPipeTargetParametersBatchJobParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    job_definition: cdktn.stringToTerraform(struct!.jobDefinition),
    job_name: cdktn.stringToTerraform(struct!.jobName),
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    array_properties: pipesPipeTargetParametersBatchJobParametersArrayPropertiesToTerraform(struct!.arrayProperties),
    container_overrides: pipesPipeTargetParametersBatchJobParametersContainerOverridesToTerraform(struct!.containerOverrides),
    depends_on: cdktn.listMapper(pipesPipeTargetParametersBatchJobParametersDependsOnToTerraform, true)(struct!.dependsOn),
    retry_strategy: pipesPipeTargetParametersBatchJobParametersRetryStrategyToTerraform(struct!.retryStrategy),
  }
}


export function pipesPipeTargetParametersBatchJobParametersToHclTerraform(struct?: PipesPipeTargetParametersBatchJobParametersOutputReference | PipesPipeTargetParametersBatchJobParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    job_definition: {
      value: cdktn.stringToHclTerraform(struct!.jobDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_name: {
      value: cdktn.stringToHclTerraform(struct!.jobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    array_properties: {
      value: pipesPipeTargetParametersBatchJobParametersArrayPropertiesToHclTerraform(struct!.arrayProperties),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersBatchJobParametersArrayPropertiesList",
    },
    container_overrides: {
      value: pipesPipeTargetParametersBatchJobParametersContainerOverridesToHclTerraform(struct!.containerOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersBatchJobParametersContainerOverridesList",
    },
    depends_on: {
      value: cdktn.listMapperHcl(pipesPipeTargetParametersBatchJobParametersDependsOnToHclTerraform, true)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersBatchJobParametersDependsOnList",
    },
    retry_strategy: {
      value: pipesPipeTargetParametersBatchJobParametersRetryStrategyToHclTerraform(struct!.retryStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersBatchJobParametersRetryStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersBatchJobParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersBatchJobParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobDefinition = this._jobDefinition;
    }
    if (this._jobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobName = this._jobName;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._arrayProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayProperties = this._arrayProperties?.internalValue;
    }
    if (this._containerOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerOverrides = this._containerOverrides?.internalValue;
    }
    if (this._dependsOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn?.internalValue;
    }
    if (this._retryStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryStrategy = this._retryStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersBatchJobParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobDefinition = undefined;
      this._jobName = undefined;
      this._parameters = undefined;
      this._arrayProperties.internalValue = undefined;
      this._containerOverrides.internalValue = undefined;
      this._dependsOn.internalValue = undefined;
      this._retryStrategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobDefinition = value.jobDefinition;
      this._jobName = value.jobName;
      this._parameters = value.parameters;
      this._arrayProperties.internalValue = value.arrayProperties;
      this._containerOverrides.internalValue = value.containerOverrides;
      this._dependsOn.internalValue = value.dependsOn;
      this._retryStrategy.internalValue = value.retryStrategy;
    }
  }

  // job_definition - computed: false, optional: false, required: true
  private _jobDefinition?: string; 
  public get jobDefinition() {
    return this.getStringAttribute('job_definition');
  }
  public set jobDefinition(value: string) {
    this._jobDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDefinitionInput() {
    return this._jobDefinition;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // array_properties - computed: false, optional: true, required: false
  private _arrayProperties = new PipesPipeTargetParametersBatchJobParametersArrayPropertiesOutputReference(this, "array_properties");
  public get arrayProperties() {
    return this._arrayProperties;
  }
  public putArrayProperties(value: PipesPipeTargetParametersBatchJobParametersArrayProperties) {
    this._arrayProperties.internalValue = value;
  }
  public resetArrayProperties() {
    this._arrayProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayPropertiesInput() {
    return this._arrayProperties.internalValue;
  }

  // container_overrides - computed: false, optional: true, required: false
  private _containerOverrides = new PipesPipeTargetParametersBatchJobParametersContainerOverridesOutputReference(this, "container_overrides");
  public get containerOverrides() {
    return this._containerOverrides;
  }
  public putContainerOverrides(value: PipesPipeTargetParametersBatchJobParametersContainerOverrides) {
    this._containerOverrides.internalValue = value;
  }
  public resetContainerOverrides() {
    this._containerOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerOverridesInput() {
    return this._containerOverrides.internalValue;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn = new PipesPipeTargetParametersBatchJobParametersDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: PipesPipeTargetParametersBatchJobParametersDependsOn[] | cdktn.IResolvable) {
    this._dependsOn.internalValue = value;
  }
  public resetDependsOn() {
    this._dependsOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn.internalValue;
  }

  // retry_strategy - computed: false, optional: true, required: false
  private _retryStrategy = new PipesPipeTargetParametersBatchJobParametersRetryStrategyOutputReference(this, "retry_strategy");
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: PipesPipeTargetParametersBatchJobParametersRetryStrategy) {
    this._retryStrategy.internalValue = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy.internalValue;
  }
}
export interface PipesPipeTargetParametersCloudwatchLogsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#log_stream_name PipesPipe#log_stream_name}
  */
  readonly logStreamName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#timestamp PipesPipe#timestamp}
  */
  readonly timestamp?: string;
}

export function pipesPipeTargetParametersCloudwatchLogsParametersToTerraform(struct?: PipesPipeTargetParametersCloudwatchLogsParametersOutputReference | PipesPipeTargetParametersCloudwatchLogsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
    timestamp: cdktn.stringToTerraform(struct!.timestamp),
  }
}


export function pipesPipeTargetParametersCloudwatchLogsParametersToHclTerraform(struct?: PipesPipeTargetParametersCloudwatchLogsParametersOutputReference | PipesPipeTargetParametersCloudwatchLogsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.logStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktn.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersCloudwatchLogsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersCloudwatchLogsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamName = this._logStreamName;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersCloudwatchLogsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logStreamName = undefined;
      this._timestamp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logStreamName = value.logStreamName;
      this._timestamp = value.timestamp;
    }
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }
}
export interface PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#base PipesPipe#base}
  */
  readonly base?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#capacity_provider PipesPipe#capacity_provider}
  */
  readonly capacityProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#weight PipesPipe#weight}
  */
  readonly weight?: number;
}

export function pipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base: cdktn.numberToTerraform(struct!.base),
    capacity_provider: cdktn.stringToTerraform(struct!.capacityProvider),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function pipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base: {
      value: cdktn.numberToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capacity_provider: {
      value: cdktn.stringToHclTerraform(struct!.capacityProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._capacityProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityProvider = this._capacityProvider;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base = undefined;
      this._capacityProvider = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base = value.base;
      this._capacityProvider = value.capacityProvider;
      this._weight = value.weight;
    }
  }

  // base - computed: false, optional: true, required: false
  private _base?: number; 
  public get base() {
    return this.getNumberAttribute('base');
  }
  public set base(value: number) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // capacity_provider - computed: false, optional: false, required: true
  private _capacityProvider?: string; 
  public get capacityProvider() {
    return this.getStringAttribute('capacity_provider');
  }
  public set capacityProvider(value: string) {
    this._capacityProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderInput() {
    return this._capacityProvider;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyList extends cdktn.ComplexList {
  public internalValue? : PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy[] | cdktn.IResolvable

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
  public get(index: number): PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyOutputReference {
    return new PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#assign_public_ip PipesPipe#assign_public_ip}
  */
  readonly assignPublicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#security_groups PipesPipe#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#subnets PipesPipe#subnets}
  */
  readonly subnets?: string[];
}

export function pipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationOutputReference | PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    assign_public_ip: cdktn.stringToTerraform(struct!.assignPublicIp),
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function pipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationOutputReference | PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktn.stringToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignPublicIp = undefined;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignPublicIp = value.assignPublicIp;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: string; 
  public get assignPublicIp() {
    return this.getStringAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: string) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface PipesPipeTargetParametersEcsTaskParametersNetworkConfiguration {
  /**
  * aws_vpc_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#aws_vpc_configuration PipesPipe#aws_vpc_configuration}
  */
  readonly awsVpcConfiguration?: PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration;
}

export function pipesPipeTargetParametersEcsTaskParametersNetworkConfigurationToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationOutputReference | PipesPipeTargetParametersEcsTaskParametersNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_vpc_configuration: pipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationToTerraform(struct!.awsVpcConfiguration),
  }
}


export function pipesPipeTargetParametersEcsTaskParametersNetworkConfigurationToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationOutputReference | PipesPipeTargetParametersEcsTaskParametersNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_vpc_configuration: {
      value: pipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationToHclTerraform(struct!.awsVpcConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersEcsTaskParametersNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsVpcConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsVpcConfiguration = this._awsVpcConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersEcsTaskParametersNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsVpcConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsVpcConfiguration.internalValue = value.awsVpcConfiguration;
    }
  }

  // aws_vpc_configuration - computed: false, optional: true, required: false
  private _awsVpcConfiguration = new PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationOutputReference(this, "aws_vpc_configuration");
  public get awsVpcConfiguration() {
    return this._awsVpcConfiguration;
  }
  public putAwsVpcConfiguration(value: PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration) {
    this._awsVpcConfiguration.internalValue = value;
  }
  public resetAwsVpcConfiguration() {
    this._awsVpcConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsVpcConfigurationInput() {
    return this._awsVpcConfiguration.internalValue;
  }
}
export interface PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#name PipesPipe#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#value PipesPipe#value}
  */
  readonly value?: string;
}

export function pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentList extends cdktn.ComplexList {
  public internalValue? : PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment[] | cdktn.IResolvable

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
  public get(index: number): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentOutputReference {
    return new PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#type PipesPipe#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#value PipesPipe#value}
  */
  readonly value: string;
}

export function pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFileToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFileToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFileOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFileList extends cdktn.ComplexList {
  public internalValue? : PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile[] | cdktn.IResolvable

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
  public get(index: number): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFileOutputReference {
    return new PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#type PipesPipe#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#value PipesPipe#value}
  */
  readonly value: string;
}

export function pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirementToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirementToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirementOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirementList extends cdktn.ComplexList {
  public internalValue? : PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement[] | cdktn.IResolvable

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
  public get(index: number): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirementOutputReference {
    return new PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#command PipesPipe#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#cpu PipesPipe#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#memory PipesPipe#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#memory_reservation PipesPipe#memory_reservation}
  */
  readonly memoryReservation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#name PipesPipe#name}
  */
  readonly name?: string;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#environment PipesPipe#environment}
  */
  readonly environment?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment[] | cdktn.IResolvable;
  /**
  * environment_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#environment_file PipesPipe#environment_file}
  */
  readonly environmentFile?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile[] | cdktn.IResolvable;
  /**
  * resource_requirement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#resource_requirement PipesPipe#resource_requirement}
  */
  readonly resourceRequirement?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement[] | cdktn.IResolvable;
}

export function pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    cpu: cdktn.numberToTerraform(struct!.cpu),
    memory: cdktn.numberToTerraform(struct!.memory),
    memory_reservation: cdktn.numberToTerraform(struct!.memoryReservation),
    name: cdktn.stringToTerraform(struct!.name),
    environment: cdktn.listMapper(pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentToTerraform, true)(struct!.environment),
    environment_file: cdktn.listMapper(pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFileToTerraform, true)(struct!.environmentFile),
    resource_requirement: cdktn.listMapper(pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirementToTerraform, true)(struct!.resourceRequirement),
  }
}


export function pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu: {
      value: cdktn.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktn.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_reservation: {
      value: cdktn.numberToHclTerraform(struct!.memoryReservation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktn.listMapperHcl(pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentToHclTerraform, true)(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentList",
    },
    environment_file: {
      value: cdktn.listMapperHcl(pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFileToHclTerraform, true)(struct!.environmentFile),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFileList",
    },
    resource_requirement: {
      value: cdktn.listMapperHcl(pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirementToHclTerraform, true)(struct!.resourceRequirement),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._memoryReservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryReservation = this._memoryReservation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._environmentFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentFile = this._environmentFile?.internalValue;
    }
    if (this._resourceRequirement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirement = this._resourceRequirement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._cpu = undefined;
      this._memory = undefined;
      this._memoryReservation = undefined;
      this._name = undefined;
      this._environment.internalValue = undefined;
      this._environmentFile.internalValue = undefined;
      this._resourceRequirement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._cpu = value.cpu;
      this._memory = value.memory;
      this._memoryReservation = value.memoryReservation;
      this._name = value.name;
      this._environment.internalValue = value.environment;
      this._environmentFile.internalValue = value.environmentFile;
      this._resourceRequirement.internalValue = value.resourceRequirement;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // memory_reservation - computed: false, optional: true, required: false
  private _memoryReservation?: number; 
  public get memoryReservation() {
    return this.getNumberAttribute('memory_reservation');
  }
  public set memoryReservation(value: number) {
    this._memoryReservation = value;
  }
  public resetMemoryReservation() {
    this._memoryReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryReservationInput() {
    return this._memoryReservation;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment[] | cdktn.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // environment_file - computed: false, optional: true, required: false
  private _environmentFile = new PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFileList(this, "environment_file", false);
  public get environmentFile() {
    return this._environmentFile;
  }
  public putEnvironmentFile(value: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile[] | cdktn.IResolvable) {
    this._environmentFile.internalValue = value;
  }
  public resetEnvironmentFile() {
    this._environmentFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentFileInput() {
    return this._environmentFile.internalValue;
  }

  // resource_requirement - computed: false, optional: true, required: false
  private _resourceRequirement = new PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirementList(this, "resource_requirement", false);
  public get resourceRequirement() {
    return this._resourceRequirement;
  }
  public putResourceRequirement(value: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement[] | cdktn.IResolvable) {
    this._resourceRequirement.internalValue = value;
  }
  public resetResourceRequirement() {
    this._resourceRequirement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementInput() {
    return this._resourceRequirement.internalValue;
  }
}

export class PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideList extends cdktn.ComplexList {
  public internalValue? : PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverride[] | cdktn.IResolvable

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
  public get(index: number): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideOutputReference {
    return new PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#size_in_gib PipesPipe#size_in_gib}
  */
  readonly sizeInGib: number;
}

export function pipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageOutputReference | PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    size_in_gib: cdktn.numberToTerraform(struct!.sizeInGib),
  }
}


export function pipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageOutputReference | PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    size_in_gib: {
      value: cdktn.numberToHclTerraform(struct!.sizeInGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeInGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInGib = this._sizeInGib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sizeInGib = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sizeInGib = value.sizeInGib;
    }
  }

  // size_in_gib - computed: false, optional: false, required: true
  private _sizeInGib?: number; 
  public get sizeInGib() {
    return this.getNumberAttribute('size_in_gib');
  }
  public set sizeInGib(value: number) {
    this._sizeInGib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGibInput() {
    return this._sizeInGib;
  }
}
export interface PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#device_name PipesPipe#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#device_type PipesPipe#device_type}
  */
  readonly deviceType?: string;
}

export function pipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrideToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    device_name: cdktn.stringToTerraform(struct!.deviceName),
    device_type: cdktn.stringToTerraform(struct!.deviceType),
  }
}


export function pipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrideToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    device_name: {
      value: cdktn.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type: {
      value: cdktn.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrideOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._deviceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._deviceType = value.deviceType;
    }
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }
}

export class PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrideList extends cdktn.ComplexList {
  public internalValue? : PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride[] | cdktn.IResolvable

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
  public get(index: number): PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrideOutputReference {
    return new PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipesPipeTargetParametersEcsTaskParametersOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#cpu PipesPipe#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#execution_role_arn PipesPipe#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#memory PipesPipe#memory}
  */
  readonly memory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#task_role_arn PipesPipe#task_role_arn}
  */
  readonly taskRoleArn?: string;
  /**
  * container_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#container_override PipesPipe#container_override}
  */
  readonly containerOverride?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverride[] | cdktn.IResolvable;
  /**
  * ephemeral_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#ephemeral_storage PipesPipe#ephemeral_storage}
  */
  readonly ephemeralStorage?: PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage;
  /**
  * inference_accelerator_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#inference_accelerator_override PipesPipe#inference_accelerator_override}
  */
  readonly inferenceAcceleratorOverride?: PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride[] | cdktn.IResolvable;
}

export function pipesPipeTargetParametersEcsTaskParametersOverridesToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesOutputReference | PipesPipeTargetParametersEcsTaskParametersOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cpu: cdktn.stringToTerraform(struct!.cpu),
    execution_role_arn: cdktn.stringToTerraform(struct!.executionRoleArn),
    memory: cdktn.stringToTerraform(struct!.memory),
    task_role_arn: cdktn.stringToTerraform(struct!.taskRoleArn),
    container_override: cdktn.listMapper(pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideToTerraform, true)(struct!.containerOverride),
    ephemeral_storage: pipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageToTerraform(struct!.ephemeralStorage),
    inference_accelerator_override: cdktn.listMapper(pipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrideToTerraform, true)(struct!.inferenceAcceleratorOverride),
  }
}


export function pipesPipeTargetParametersEcsTaskParametersOverridesToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesOutputReference | PipesPipeTargetParametersEcsTaskParametersOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cpu: {
      value: cdktn.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.executionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktn.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.taskRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_override: {
      value: cdktn.listMapperHcl(pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideToHclTerraform, true)(struct!.containerOverride),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideList",
    },
    ephemeral_storage: {
      value: pipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageToHclTerraform(struct!.ephemeralStorage),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageList",
    },
    inference_accelerator_override: {
      value: cdktn.listMapperHcl(pipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrideToHclTerraform, true)(struct!.inferenceAcceleratorOverride),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersEcsTaskParametersOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersEcsTaskParametersOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._executionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleArn = this._executionRoleArn;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._taskRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskRoleArn = this._taskRoleArn;
    }
    if (this._containerOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerOverride = this._containerOverride?.internalValue;
    }
    if (this._ephemeralStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorage = this._ephemeralStorage?.internalValue;
    }
    if (this._inferenceAcceleratorOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceAcceleratorOverride = this._inferenceAcceleratorOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersEcsTaskParametersOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._executionRoleArn = undefined;
      this._memory = undefined;
      this._taskRoleArn = undefined;
      this._containerOverride.internalValue = undefined;
      this._ephemeralStorage.internalValue = undefined;
      this._inferenceAcceleratorOverride.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._executionRoleArn = value.executionRoleArn;
      this._memory = value.memory;
      this._taskRoleArn = value.taskRoleArn;
      this._containerOverride.internalValue = value.containerOverride;
      this._ephemeralStorage.internalValue = value.ephemeralStorage;
      this._inferenceAcceleratorOverride.internalValue = value.inferenceAcceleratorOverride;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // execution_role_arn - computed: false, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // task_role_arn - computed: false, optional: true, required: false
  private _taskRoleArn?: string; 
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }
  public set taskRoleArn(value: string) {
    this._taskRoleArn = value;
  }
  public resetTaskRoleArn() {
    this._taskRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRoleArnInput() {
    return this._taskRoleArn;
  }

  // container_override - computed: false, optional: true, required: false
  private _containerOverride = new PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideList(this, "container_override", false);
  public get containerOverride() {
    return this._containerOverride;
  }
  public putContainerOverride(value: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverride[] | cdktn.IResolvable) {
    this._containerOverride.internalValue = value;
  }
  public resetContainerOverride() {
    this._containerOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerOverrideInput() {
    return this._containerOverride.internalValue;
  }

  // ephemeral_storage - computed: false, optional: true, required: false
  private _ephemeralStorage = new PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageOutputReference(this, "ephemeral_storage");
  public get ephemeralStorage() {
    return this._ephemeralStorage;
  }
  public putEphemeralStorage(value: PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage) {
    this._ephemeralStorage.internalValue = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage.internalValue;
  }

  // inference_accelerator_override - computed: false, optional: true, required: false
  private _inferenceAcceleratorOverride = new PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrideList(this, "inference_accelerator_override", false);
  public get inferenceAcceleratorOverride() {
    return this._inferenceAcceleratorOverride;
  }
  public putInferenceAcceleratorOverride(value: PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride[] | cdktn.IResolvable) {
    this._inferenceAcceleratorOverride.internalValue = value;
  }
  public resetInferenceAcceleratorOverride() {
    this._inferenceAcceleratorOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceAcceleratorOverrideInput() {
    return this._inferenceAcceleratorOverride.internalValue;
  }
}
export interface PipesPipeTargetParametersEcsTaskParametersPlacementConstraint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#expression PipesPipe#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#type PipesPipe#type}
  */
  readonly type?: string;
}

export function pipesPipeTargetParametersEcsTaskParametersPlacementConstraintToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersPlacementConstraint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function pipesPipeTargetParametersEcsTaskParametersPlacementConstraintToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersPlacementConstraint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
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

export class PipesPipeTargetParametersEcsTaskParametersPlacementConstraintOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PipesPipeTargetParametersEcsTaskParametersPlacementConstraint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersEcsTaskParametersPlacementConstraint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._type = value.type;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PipesPipeTargetParametersEcsTaskParametersPlacementConstraintList extends cdktn.ComplexList {
  public internalValue? : PipesPipeTargetParametersEcsTaskParametersPlacementConstraint[] | cdktn.IResolvable

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
  public get(index: number): PipesPipeTargetParametersEcsTaskParametersPlacementConstraintOutputReference {
    return new PipesPipeTargetParametersEcsTaskParametersPlacementConstraintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipesPipeTargetParametersEcsTaskParametersPlacementStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#field PipesPipe#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#type PipesPipe#type}
  */
  readonly type?: string;
}

export function pipesPipeTargetParametersEcsTaskParametersPlacementStrategyToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersPlacementStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function pipesPipeTargetParametersEcsTaskParametersPlacementStrategyToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersPlacementStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
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

export class PipesPipeTargetParametersEcsTaskParametersPlacementStrategyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PipesPipeTargetParametersEcsTaskParametersPlacementStrategy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersEcsTaskParametersPlacementStrategy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._type = value.type;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PipesPipeTargetParametersEcsTaskParametersPlacementStrategyList extends cdktn.ComplexList {
  public internalValue? : PipesPipeTargetParametersEcsTaskParametersPlacementStrategy[] | cdktn.IResolvable

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
  public get(index: number): PipesPipeTargetParametersEcsTaskParametersPlacementStrategyOutputReference {
    return new PipesPipeTargetParametersEcsTaskParametersPlacementStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipesPipeTargetParametersEcsTaskParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#enable_ecs_managed_tags PipesPipe#enable_ecs_managed_tags}
  */
  readonly enableEcsManagedTags?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#enable_execute_command PipesPipe#enable_execute_command}
  */
  readonly enableExecuteCommand?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#group PipesPipe#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#launch_type PipesPipe#launch_type}
  */
  readonly launchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#platform_version PipesPipe#platform_version}
  */
  readonly platformVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#propagate_tags PipesPipe#propagate_tags}
  */
  readonly propagateTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#reference_id PipesPipe#reference_id}
  */
  readonly referenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#tags PipesPipe#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#task_count PipesPipe#task_count}
  */
  readonly taskCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#task_definition_arn PipesPipe#task_definition_arn}
  */
  readonly taskDefinitionArn: string;
  /**
  * capacity_provider_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#capacity_provider_strategy PipesPipe#capacity_provider_strategy}
  */
  readonly capacityProviderStrategy?: PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy[] | cdktn.IResolvable;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#network_configuration PipesPipe#network_configuration}
  */
  readonly networkConfiguration?: PipesPipeTargetParametersEcsTaskParametersNetworkConfiguration;
  /**
  * overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#overrides PipesPipe#overrides}
  */
  readonly overrides?: PipesPipeTargetParametersEcsTaskParametersOverrides;
  /**
  * placement_constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#placement_constraint PipesPipe#placement_constraint}
  */
  readonly placementConstraint?: PipesPipeTargetParametersEcsTaskParametersPlacementConstraint[] | cdktn.IResolvable;
  /**
  * placement_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#placement_strategy PipesPipe#placement_strategy}
  */
  readonly placementStrategy?: PipesPipeTargetParametersEcsTaskParametersPlacementStrategy[] | cdktn.IResolvable;
}

export function pipesPipeTargetParametersEcsTaskParametersToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOutputReference | PipesPipeTargetParametersEcsTaskParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_ecs_managed_tags: cdktn.booleanToTerraform(struct!.enableEcsManagedTags),
    enable_execute_command: cdktn.booleanToTerraform(struct!.enableExecuteCommand),
    group: cdktn.stringToTerraform(struct!.group),
    launch_type: cdktn.stringToTerraform(struct!.launchType),
    platform_version: cdktn.stringToTerraform(struct!.platformVersion),
    propagate_tags: cdktn.stringToTerraform(struct!.propagateTags),
    reference_id: cdktn.stringToTerraform(struct!.referenceId),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    task_count: cdktn.numberToTerraform(struct!.taskCount),
    task_definition_arn: cdktn.stringToTerraform(struct!.taskDefinitionArn),
    capacity_provider_strategy: cdktn.listMapper(pipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyToTerraform, true)(struct!.capacityProviderStrategy),
    network_configuration: pipesPipeTargetParametersEcsTaskParametersNetworkConfigurationToTerraform(struct!.networkConfiguration),
    overrides: pipesPipeTargetParametersEcsTaskParametersOverridesToTerraform(struct!.overrides),
    placement_constraint: cdktn.listMapper(pipesPipeTargetParametersEcsTaskParametersPlacementConstraintToTerraform, true)(struct!.placementConstraint),
    placement_strategy: cdktn.listMapper(pipesPipeTargetParametersEcsTaskParametersPlacementStrategyToTerraform, true)(struct!.placementStrategy),
  }
}


export function pipesPipeTargetParametersEcsTaskParametersToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOutputReference | PipesPipeTargetParametersEcsTaskParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_ecs_managed_tags: {
      value: cdktn.booleanToHclTerraform(struct!.enableEcsManagedTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_execute_command: {
      value: cdktn.booleanToHclTerraform(struct!.enableExecuteCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group: {
      value: cdktn.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_type: {
      value: cdktn.stringToHclTerraform(struct!.launchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform_version: {
      value: cdktn.stringToHclTerraform(struct!.platformVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagate_tags: {
      value: cdktn.stringToHclTerraform(struct!.propagateTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference_id: {
      value: cdktn.stringToHclTerraform(struct!.referenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    task_count: {
      value: cdktn.numberToHclTerraform(struct!.taskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_definition_arn: {
      value: cdktn.stringToHclTerraform(struct!.taskDefinitionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_provider_strategy: {
      value: cdktn.listMapperHcl(pipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyToHclTerraform, true)(struct!.capacityProviderStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyList",
    },
    network_configuration: {
      value: pipesPipeTargetParametersEcsTaskParametersNetworkConfigurationToHclTerraform(struct!.networkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationList",
    },
    overrides: {
      value: pipesPipeTargetParametersEcsTaskParametersOverridesToHclTerraform(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersEcsTaskParametersOverridesList",
    },
    placement_constraint: {
      value: cdktn.listMapperHcl(pipesPipeTargetParametersEcsTaskParametersPlacementConstraintToHclTerraform, true)(struct!.placementConstraint),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersEcsTaskParametersPlacementConstraintList",
    },
    placement_strategy: {
      value: cdktn.listMapperHcl(pipesPipeTargetParametersEcsTaskParametersPlacementStrategyToHclTerraform, true)(struct!.placementStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersEcsTaskParametersPlacementStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersEcsTaskParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersEcsTaskParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableEcsManagedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEcsManagedTags = this._enableEcsManagedTags;
    }
    if (this._enableExecuteCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableExecuteCommand = this._enableExecuteCommand;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._launchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchType = this._launchType;
    }
    if (this._platformVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformVersion = this._platformVersion;
    }
    if (this._propagateTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateTags = this._propagateTags;
    }
    if (this._referenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceId = this._referenceId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._taskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskCount = this._taskCount;
    }
    if (this._taskDefinitionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskDefinitionArn = this._taskDefinitionArn;
    }
    if (this._capacityProviderStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityProviderStrategy = this._capacityProviderStrategy?.internalValue;
    }
    if (this._networkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    if (this._placementConstraint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementConstraint = this._placementConstraint?.internalValue;
    }
    if (this._placementStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementStrategy = this._placementStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersEcsTaskParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableEcsManagedTags = undefined;
      this._enableExecuteCommand = undefined;
      this._group = undefined;
      this._launchType = undefined;
      this._platformVersion = undefined;
      this._propagateTags = undefined;
      this._referenceId = undefined;
      this._tags = undefined;
      this._taskCount = undefined;
      this._taskDefinitionArn = undefined;
      this._capacityProviderStrategy.internalValue = undefined;
      this._networkConfiguration.internalValue = undefined;
      this._overrides.internalValue = undefined;
      this._placementConstraint.internalValue = undefined;
      this._placementStrategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableEcsManagedTags = value.enableEcsManagedTags;
      this._enableExecuteCommand = value.enableExecuteCommand;
      this._group = value.group;
      this._launchType = value.launchType;
      this._platformVersion = value.platformVersion;
      this._propagateTags = value.propagateTags;
      this._referenceId = value.referenceId;
      this._tags = value.tags;
      this._taskCount = value.taskCount;
      this._taskDefinitionArn = value.taskDefinitionArn;
      this._capacityProviderStrategy.internalValue = value.capacityProviderStrategy;
      this._networkConfiguration.internalValue = value.networkConfiguration;
      this._overrides.internalValue = value.overrides;
      this._placementConstraint.internalValue = value.placementConstraint;
      this._placementStrategy.internalValue = value.placementStrategy;
    }
  }

  // enable_ecs_managed_tags - computed: false, optional: true, required: false
  private _enableEcsManagedTags?: boolean | cdktn.IResolvable; 
  public get enableEcsManagedTags() {
    return this.getBooleanAttribute('enable_ecs_managed_tags');
  }
  public set enableEcsManagedTags(value: boolean | cdktn.IResolvable) {
    this._enableEcsManagedTags = value;
  }
  public resetEnableEcsManagedTags() {
    this._enableEcsManagedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEcsManagedTagsInput() {
    return this._enableEcsManagedTags;
  }

  // enable_execute_command - computed: false, optional: true, required: false
  private _enableExecuteCommand?: boolean | cdktn.IResolvable; 
  public get enableExecuteCommand() {
    return this.getBooleanAttribute('enable_execute_command');
  }
  public set enableExecuteCommand(value: boolean | cdktn.IResolvable) {
    this._enableExecuteCommand = value;
  }
  public resetEnableExecuteCommand() {
    this._enableExecuteCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExecuteCommandInput() {
    return this._enableExecuteCommand;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // launch_type - computed: false, optional: true, required: false
  private _launchType?: string; 
  public get launchType() {
    return this.getStringAttribute('launch_type');
  }
  public set launchType(value: string) {
    this._launchType = value;
  }
  public resetLaunchType() {
    this._launchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTypeInput() {
    return this._launchType;
  }

  // platform_version - computed: false, optional: true, required: false
  private _platformVersion?: string; 
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
  public set platformVersion(value: string) {
    this._platformVersion = value;
  }
  public resetPlatformVersion() {
    this._platformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformVersionInput() {
    return this._platformVersion;
  }

  // propagate_tags - computed: false, optional: true, required: false
  private _propagateTags?: string; 
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }
  public set propagateTags(value: string) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags;
  }

  // reference_id - computed: false, optional: true, required: false
  private _referenceId?: string; 
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }
  public set referenceId(value: string) {
    this._referenceId = value;
  }
  public resetReferenceId() {
    this._referenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceIdInput() {
    return this._referenceId;
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

  // task_count - computed: false, optional: true, required: false
  private _taskCount?: number; 
  public get taskCount() {
    return this.getNumberAttribute('task_count');
  }
  public set taskCount(value: number) {
    this._taskCount = value;
  }
  public resetTaskCount() {
    this._taskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCountInput() {
    return this._taskCount;
  }

  // task_definition_arn - computed: false, optional: false, required: true
  private _taskDefinitionArn?: string; 
  public get taskDefinitionArn() {
    return this.getStringAttribute('task_definition_arn');
  }
  public set taskDefinitionArn(value: string) {
    this._taskDefinitionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDefinitionArnInput() {
    return this._taskDefinitionArn;
  }

  // capacity_provider_strategy - computed: false, optional: true, required: false
  private _capacityProviderStrategy = new PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyList(this, "capacity_provider_strategy", false);
  public get capacityProviderStrategy() {
    return this._capacityProviderStrategy;
  }
  public putCapacityProviderStrategy(value: PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy[] | cdktn.IResolvable) {
    this._capacityProviderStrategy.internalValue = value;
  }
  public resetCapacityProviderStrategy() {
    this._capacityProviderStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderStrategyInput() {
    return this._capacityProviderStrategy.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: PipesPipeTargetParametersEcsTaskParametersNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new PipesPipeTargetParametersEcsTaskParametersOverridesOutputReference(this, "overrides");
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: PipesPipeTargetParametersEcsTaskParametersOverrides) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // placement_constraint - computed: false, optional: true, required: false
  private _placementConstraint = new PipesPipeTargetParametersEcsTaskParametersPlacementConstraintList(this, "placement_constraint", false);
  public get placementConstraint() {
    return this._placementConstraint;
  }
  public putPlacementConstraint(value: PipesPipeTargetParametersEcsTaskParametersPlacementConstraint[] | cdktn.IResolvable) {
    this._placementConstraint.internalValue = value;
  }
  public resetPlacementConstraint() {
    this._placementConstraint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintInput() {
    return this._placementConstraint.internalValue;
  }

  // placement_strategy - computed: false, optional: true, required: false
  private _placementStrategy = new PipesPipeTargetParametersEcsTaskParametersPlacementStrategyList(this, "placement_strategy", false);
  public get placementStrategy() {
    return this._placementStrategy;
  }
  public putPlacementStrategy(value: PipesPipeTargetParametersEcsTaskParametersPlacementStrategy[] | cdktn.IResolvable) {
    this._placementStrategy.internalValue = value;
  }
  public resetPlacementStrategy() {
    this._placementStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementStrategyInput() {
    return this._placementStrategy.internalValue;
  }
}
export interface PipesPipeTargetParametersEventbridgeEventBusParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#detail_type PipesPipe#detail_type}
  */
  readonly detailType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#endpoint_id PipesPipe#endpoint_id}
  */
  readonly endpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#resources PipesPipe#resources}
  */
  readonly resources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#source PipesPipe#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#time PipesPipe#time}
  */
  readonly time?: string;
}

export function pipesPipeTargetParametersEventbridgeEventBusParametersToTerraform(struct?: PipesPipeTargetParametersEventbridgeEventBusParametersOutputReference | PipesPipeTargetParametersEventbridgeEventBusParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    detail_type: cdktn.stringToTerraform(struct!.detailType),
    endpoint_id: cdktn.stringToTerraform(struct!.endpointId),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
    source: cdktn.stringToTerraform(struct!.source),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function pipesPipeTargetParametersEventbridgeEventBusParametersToHclTerraform(struct?: PipesPipeTargetParametersEventbridgeEventBusParametersOutputReference | PipesPipeTargetParametersEventbridgeEventBusParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    detail_type: {
      value: cdktn.stringToHclTerraform(struct!.detailType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_id: {
      value: cdktn.stringToHclTerraform(struct!.endpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersEventbridgeEventBusParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersEventbridgeEventBusParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detailType !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailType = this._detailType;
    }
    if (this._endpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointId = this._endpointId;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersEventbridgeEventBusParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detailType = undefined;
      this._endpointId = undefined;
      this._resources = undefined;
      this._source = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detailType = value.detailType;
      this._endpointId = value.endpointId;
      this._resources = value.resources;
      this._source = value.source;
      this._time = value.time;
    }
  }

  // detail_type - computed: false, optional: true, required: false
  private _detailType?: string; 
  public get detailType() {
    return this.getStringAttribute('detail_type');
  }
  public set detailType(value: string) {
    this._detailType = value;
  }
  public resetDetailType() {
    this._detailType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailTypeInput() {
    return this._detailType;
  }

  // endpoint_id - computed: false, optional: true, required: false
  private _endpointId?: string; 
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }
  public resetEndpointId() {
    this._endpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktn.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface PipesPipeTargetParametersHttpParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#header_parameters PipesPipe#header_parameters}
  */
  readonly headerParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#path_parameter_values PipesPipe#path_parameter_values}
  */
  readonly pathParameterValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#query_string_parameters PipesPipe#query_string_parameters}
  */
  readonly queryStringParameters?: { [key: string]: string };
}

export function pipesPipeTargetParametersHttpParametersToTerraform(struct?: PipesPipeTargetParametersHttpParametersOutputReference | PipesPipeTargetParametersHttpParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.headerParameters),
    path_parameter_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.pathParameterValues),
    query_string_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.queryStringParameters),
  }
}


export function pipesPipeTargetParametersHttpParametersToHclTerraform(struct?: PipesPipeTargetParametersHttpParametersOutputReference | PipesPipeTargetParametersHttpParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.headerParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    path_parameter_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.pathParameterValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query_string_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.queryStringParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersHttpParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersHttpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerParameters = this._headerParameters;
    }
    if (this._pathParameterValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathParameterValues = this._pathParameterValues;
    }
    if (this._queryStringParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringParameters = this._queryStringParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersHttpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerParameters = undefined;
      this._pathParameterValues = undefined;
      this._queryStringParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerParameters = value.headerParameters;
      this._pathParameterValues = value.pathParameterValues;
      this._queryStringParameters = value.queryStringParameters;
    }
  }

  // header_parameters - computed: false, optional: true, required: false
  private _headerParameters?: { [key: string]: string }; 
  public get headerParameters() {
    return this.getStringMapAttribute('header_parameters');
  }
  public set headerParameters(value: { [key: string]: string }) {
    this._headerParameters = value;
  }
  public resetHeaderParameters() {
    this._headerParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerParametersInput() {
    return this._headerParameters;
  }

  // path_parameter_values - computed: false, optional: true, required: false
  private _pathParameterValues?: string[]; 
  public get pathParameterValues() {
    return this.getListAttribute('path_parameter_values');
  }
  public set pathParameterValues(value: string[]) {
    this._pathParameterValues = value;
  }
  public resetPathParameterValues() {
    this._pathParameterValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathParameterValuesInput() {
    return this._pathParameterValues;
  }

  // query_string_parameters - computed: false, optional: true, required: false
  private _queryStringParameters?: { [key: string]: string }; 
  public get queryStringParameters() {
    return this.getStringMapAttribute('query_string_parameters');
  }
  public set queryStringParameters(value: { [key: string]: string }) {
    this._queryStringParameters = value;
  }
  public resetQueryStringParameters() {
    this._queryStringParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringParametersInput() {
    return this._queryStringParameters;
  }
}
export interface PipesPipeTargetParametersKinesisStreamParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#partition_key PipesPipe#partition_key}
  */
  readonly partitionKey: string;
}

export function pipesPipeTargetParametersKinesisStreamParametersToTerraform(struct?: PipesPipeTargetParametersKinesisStreamParametersOutputReference | PipesPipeTargetParametersKinesisStreamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    partition_key: cdktn.stringToTerraform(struct!.partitionKey),
  }
}


export function pipesPipeTargetParametersKinesisStreamParametersToHclTerraform(struct?: PipesPipeTargetParametersKinesisStreamParametersOutputReference | PipesPipeTargetParametersKinesisStreamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    partition_key: {
      value: cdktn.stringToHclTerraform(struct!.partitionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersKinesisStreamParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersKinesisStreamParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionKey = this._partitionKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersKinesisStreamParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partitionKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partitionKey = value.partitionKey;
    }
  }

  // partition_key - computed: false, optional: false, required: true
  private _partitionKey?: string; 
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
  public set partitionKey(value: string) {
    this._partitionKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey;
  }
}
export interface PipesPipeTargetParametersLambdaFunctionParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#invocation_type PipesPipe#invocation_type}
  */
  readonly invocationType: string;
}

export function pipesPipeTargetParametersLambdaFunctionParametersToTerraform(struct?: PipesPipeTargetParametersLambdaFunctionParametersOutputReference | PipesPipeTargetParametersLambdaFunctionParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invocation_type: cdktn.stringToTerraform(struct!.invocationType),
  }
}


export function pipesPipeTargetParametersLambdaFunctionParametersToHclTerraform(struct?: PipesPipeTargetParametersLambdaFunctionParametersOutputReference | PipesPipeTargetParametersLambdaFunctionParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invocation_type: {
      value: cdktn.stringToHclTerraform(struct!.invocationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersLambdaFunctionParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersLambdaFunctionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationType = this._invocationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersLambdaFunctionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invocationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invocationType = value.invocationType;
    }
  }

  // invocation_type - computed: false, optional: false, required: true
  private _invocationType?: string; 
  public get invocationType() {
    return this.getStringAttribute('invocation_type');
  }
  public set invocationType(value: string) {
    this._invocationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationTypeInput() {
    return this._invocationType;
  }
}
export interface PipesPipeTargetParametersRedshiftDataParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#database PipesPipe#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#db_user PipesPipe#db_user}
  */
  readonly dbUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#secret_manager_arn PipesPipe#secret_manager_arn}
  */
  readonly secretManagerArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#sqls PipesPipe#sqls}
  */
  readonly sqls: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#statement_name PipesPipe#statement_name}
  */
  readonly statementName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#with_event PipesPipe#with_event}
  */
  readonly withEvent?: boolean | cdktn.IResolvable;
}

export function pipesPipeTargetParametersRedshiftDataParametersToTerraform(struct?: PipesPipeTargetParametersRedshiftDataParametersOutputReference | PipesPipeTargetParametersRedshiftDataParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    db_user: cdktn.stringToTerraform(struct!.dbUser),
    secret_manager_arn: cdktn.stringToTerraform(struct!.secretManagerArn),
    sqls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sqls),
    statement_name: cdktn.stringToTerraform(struct!.statementName),
    with_event: cdktn.booleanToTerraform(struct!.withEvent),
  }
}


export function pipesPipeTargetParametersRedshiftDataParametersToHclTerraform(struct?: PipesPipeTargetParametersRedshiftDataParametersOutputReference | PipesPipeTargetParametersRedshiftDataParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_user: {
      value: cdktn.stringToHclTerraform(struct!.dbUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_manager_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretManagerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sqls: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sqls),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    statement_name: {
      value: cdktn.stringToHclTerraform(struct!.statementName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    with_event: {
      value: cdktn.booleanToHclTerraform(struct!.withEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersRedshiftDataParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersRedshiftDataParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._dbUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUser = this._dbUser;
    }
    if (this._secretManagerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerArn = this._secretManagerArn;
    }
    if (this._sqls !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqls = this._sqls;
    }
    if (this._statementName !== undefined) {
      hasAnyValues = true;
      internalValueResult.statementName = this._statementName;
    }
    if (this._withEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.withEvent = this._withEvent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersRedshiftDataParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._dbUser = undefined;
      this._secretManagerArn = undefined;
      this._sqls = undefined;
      this._statementName = undefined;
      this._withEvent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._dbUser = value.dbUser;
      this._secretManagerArn = value.secretManagerArn;
      this._sqls = value.sqls;
      this._statementName = value.statementName;
      this._withEvent = value.withEvent;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // db_user - computed: false, optional: true, required: false
  private _dbUser?: string; 
  public get dbUser() {
    return this.getStringAttribute('db_user');
  }
  public set dbUser(value: string) {
    this._dbUser = value;
  }
  public resetDbUser() {
    this._dbUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUserInput() {
    return this._dbUser;
  }

  // secret_manager_arn - computed: false, optional: true, required: false
  private _secretManagerArn?: string; 
  public get secretManagerArn() {
    return this.getStringAttribute('secret_manager_arn');
  }
  public set secretManagerArn(value: string) {
    this._secretManagerArn = value;
  }
  public resetSecretManagerArn() {
    this._secretManagerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerArnInput() {
    return this._secretManagerArn;
  }

  // sqls - computed: false, optional: false, required: true
  private _sqls?: string[]; 
  public get sqls() {
    return cdktn.Fn.tolist(this.getListAttribute('sqls'));
  }
  public set sqls(value: string[]) {
    this._sqls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlsInput() {
    return this._sqls;
  }

  // statement_name - computed: false, optional: true, required: false
  private _statementName?: string; 
  public get statementName() {
    return this.getStringAttribute('statement_name');
  }
  public set statementName(value: string) {
    this._statementName = value;
  }
  public resetStatementName() {
    this._statementName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementNameInput() {
    return this._statementName;
  }

  // with_event - computed: false, optional: true, required: false
  private _withEvent?: boolean | cdktn.IResolvable; 
  public get withEvent() {
    return this.getBooleanAttribute('with_event');
  }
  public set withEvent(value: boolean | cdktn.IResolvable) {
    this._withEvent = value;
  }
  public resetWithEvent() {
    this._withEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withEventInput() {
    return this._withEvent;
  }
}
export interface PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#name PipesPipe#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#value PipesPipe#value}
  */
  readonly value: string;
}

export function pipesPipeTargetParametersSagemakerPipelineParametersPipelineParameterToTerraform(struct?: PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function pipesPipeTargetParametersSagemakerPipelineParametersPipelineParameterToHclTerraform(struct?: PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameter | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameterList extends cdktn.ComplexList {
  public internalValue? : PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameter[] | cdktn.IResolvable

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
  public get(index: number): PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameterOutputReference {
    return new PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipesPipeTargetParametersSagemakerPipelineParameters {
  /**
  * pipeline_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#pipeline_parameter PipesPipe#pipeline_parameter}
  */
  readonly pipelineParameter?: PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameter[] | cdktn.IResolvable;
}

export function pipesPipeTargetParametersSagemakerPipelineParametersToTerraform(struct?: PipesPipeTargetParametersSagemakerPipelineParametersOutputReference | PipesPipeTargetParametersSagemakerPipelineParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pipeline_parameter: cdktn.listMapper(pipesPipeTargetParametersSagemakerPipelineParametersPipelineParameterToTerraform, true)(struct!.pipelineParameter),
  }
}


export function pipesPipeTargetParametersSagemakerPipelineParametersToHclTerraform(struct?: PipesPipeTargetParametersSagemakerPipelineParametersOutputReference | PipesPipeTargetParametersSagemakerPipelineParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pipeline_parameter: {
      value: cdktn.listMapperHcl(pipesPipeTargetParametersSagemakerPipelineParametersPipelineParameterToHclTerraform, true)(struct!.pipelineParameter),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersSagemakerPipelineParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersSagemakerPipelineParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipelineParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineParameter = this._pipelineParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersSagemakerPipelineParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pipelineParameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pipelineParameter.internalValue = value.pipelineParameter;
    }
  }

  // pipeline_parameter - computed: false, optional: true, required: false
  private _pipelineParameter = new PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameterList(this, "pipeline_parameter", false);
  public get pipelineParameter() {
    return this._pipelineParameter;
  }
  public putPipelineParameter(value: PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameter[] | cdktn.IResolvable) {
    this._pipelineParameter.internalValue = value;
  }
  public resetPipelineParameter() {
    this._pipelineParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineParameterInput() {
    return this._pipelineParameter.internalValue;
  }
}
export interface PipesPipeTargetParametersSqsQueueParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#message_deduplication_id PipesPipe#message_deduplication_id}
  */
  readonly messageDeduplicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#message_group_id PipesPipe#message_group_id}
  */
  readonly messageGroupId?: string;
}

export function pipesPipeTargetParametersSqsQueueParametersToTerraform(struct?: PipesPipeTargetParametersSqsQueueParametersOutputReference | PipesPipeTargetParametersSqsQueueParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_deduplication_id: cdktn.stringToTerraform(struct!.messageDeduplicationId),
    message_group_id: cdktn.stringToTerraform(struct!.messageGroupId),
  }
}


export function pipesPipeTargetParametersSqsQueueParametersToHclTerraform(struct?: PipesPipeTargetParametersSqsQueueParametersOutputReference | PipesPipeTargetParametersSqsQueueParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_deduplication_id: {
      value: cdktn.stringToHclTerraform(struct!.messageDeduplicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_group_id: {
      value: cdktn.stringToHclTerraform(struct!.messageGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersSqsQueueParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersSqsQueueParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageDeduplicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDeduplicationId = this._messageDeduplicationId;
    }
    if (this._messageGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroupId = this._messageGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersSqsQueueParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageDeduplicationId = undefined;
      this._messageGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageDeduplicationId = value.messageDeduplicationId;
      this._messageGroupId = value.messageGroupId;
    }
  }

  // message_deduplication_id - computed: false, optional: true, required: false
  private _messageDeduplicationId?: string; 
  public get messageDeduplicationId() {
    return this.getStringAttribute('message_deduplication_id');
  }
  public set messageDeduplicationId(value: string) {
    this._messageDeduplicationId = value;
  }
  public resetMessageDeduplicationId() {
    this._messageDeduplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDeduplicationIdInput() {
    return this._messageDeduplicationId;
  }

  // message_group_id - computed: false, optional: true, required: false
  private _messageGroupId?: string; 
  public get messageGroupId() {
    return this.getStringAttribute('message_group_id');
  }
  public set messageGroupId(value: string) {
    this._messageGroupId = value;
  }
  public resetMessageGroupId() {
    this._messageGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupIdInput() {
    return this._messageGroupId;
  }
}
export interface PipesPipeTargetParametersStepFunctionStateMachineParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#invocation_type PipesPipe#invocation_type}
  */
  readonly invocationType: string;
}

export function pipesPipeTargetParametersStepFunctionStateMachineParametersToTerraform(struct?: PipesPipeTargetParametersStepFunctionStateMachineParametersOutputReference | PipesPipeTargetParametersStepFunctionStateMachineParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invocation_type: cdktn.stringToTerraform(struct!.invocationType),
  }
}


export function pipesPipeTargetParametersStepFunctionStateMachineParametersToHclTerraform(struct?: PipesPipeTargetParametersStepFunctionStateMachineParametersOutputReference | PipesPipeTargetParametersStepFunctionStateMachineParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invocation_type: {
      value: cdktn.stringToHclTerraform(struct!.invocationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersStepFunctionStateMachineParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParametersStepFunctionStateMachineParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationType = this._invocationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParametersStepFunctionStateMachineParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invocationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invocationType = value.invocationType;
    }
  }

  // invocation_type - computed: false, optional: false, required: true
  private _invocationType?: string; 
  public get invocationType() {
    return this.getStringAttribute('invocation_type');
  }
  public set invocationType(value: string) {
    this._invocationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationTypeInput() {
    return this._invocationType;
  }
}
export interface PipesPipeTargetParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#input_template PipesPipe#input_template}
  */
  readonly inputTemplate?: string;
  /**
  * batch_job_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#batch_job_parameters PipesPipe#batch_job_parameters}
  */
  readonly batchJobParameters?: PipesPipeTargetParametersBatchJobParameters;
  /**
  * cloudwatch_logs_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#cloudwatch_logs_parameters PipesPipe#cloudwatch_logs_parameters}
  */
  readonly cloudwatchLogsParameters?: PipesPipeTargetParametersCloudwatchLogsParameters;
  /**
  * ecs_task_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#ecs_task_parameters PipesPipe#ecs_task_parameters}
  */
  readonly ecsTaskParameters?: PipesPipeTargetParametersEcsTaskParameters;
  /**
  * eventbridge_event_bus_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#eventbridge_event_bus_parameters PipesPipe#eventbridge_event_bus_parameters}
  */
  readonly eventbridgeEventBusParameters?: PipesPipeTargetParametersEventbridgeEventBusParameters;
  /**
  * http_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#http_parameters PipesPipe#http_parameters}
  */
  readonly httpParameters?: PipesPipeTargetParametersHttpParameters;
  /**
  * kinesis_stream_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#kinesis_stream_parameters PipesPipe#kinesis_stream_parameters}
  */
  readonly kinesisStreamParameters?: PipesPipeTargetParametersKinesisStreamParameters;
  /**
  * lambda_function_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#lambda_function_parameters PipesPipe#lambda_function_parameters}
  */
  readonly lambdaFunctionParameters?: PipesPipeTargetParametersLambdaFunctionParameters;
  /**
  * redshift_data_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#redshift_data_parameters PipesPipe#redshift_data_parameters}
  */
  readonly redshiftDataParameters?: PipesPipeTargetParametersRedshiftDataParameters;
  /**
  * sagemaker_pipeline_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#sagemaker_pipeline_parameters PipesPipe#sagemaker_pipeline_parameters}
  */
  readonly sagemakerPipelineParameters?: PipesPipeTargetParametersSagemakerPipelineParameters;
  /**
  * sqs_queue_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#sqs_queue_parameters PipesPipe#sqs_queue_parameters}
  */
  readonly sqsQueueParameters?: PipesPipeTargetParametersSqsQueueParameters;
  /**
  * step_function_state_machine_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#step_function_state_machine_parameters PipesPipe#step_function_state_machine_parameters}
  */
  readonly stepFunctionStateMachineParameters?: PipesPipeTargetParametersStepFunctionStateMachineParameters;
}

export function pipesPipeTargetParametersToTerraform(struct?: PipesPipeTargetParametersOutputReference | PipesPipeTargetParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_template: cdktn.stringToTerraform(struct!.inputTemplate),
    batch_job_parameters: pipesPipeTargetParametersBatchJobParametersToTerraform(struct!.batchJobParameters),
    cloudwatch_logs_parameters: pipesPipeTargetParametersCloudwatchLogsParametersToTerraform(struct!.cloudwatchLogsParameters),
    ecs_task_parameters: pipesPipeTargetParametersEcsTaskParametersToTerraform(struct!.ecsTaskParameters),
    eventbridge_event_bus_parameters: pipesPipeTargetParametersEventbridgeEventBusParametersToTerraform(struct!.eventbridgeEventBusParameters),
    http_parameters: pipesPipeTargetParametersHttpParametersToTerraform(struct!.httpParameters),
    kinesis_stream_parameters: pipesPipeTargetParametersKinesisStreamParametersToTerraform(struct!.kinesisStreamParameters),
    lambda_function_parameters: pipesPipeTargetParametersLambdaFunctionParametersToTerraform(struct!.lambdaFunctionParameters),
    redshift_data_parameters: pipesPipeTargetParametersRedshiftDataParametersToTerraform(struct!.redshiftDataParameters),
    sagemaker_pipeline_parameters: pipesPipeTargetParametersSagemakerPipelineParametersToTerraform(struct!.sagemakerPipelineParameters),
    sqs_queue_parameters: pipesPipeTargetParametersSqsQueueParametersToTerraform(struct!.sqsQueueParameters),
    step_function_state_machine_parameters: pipesPipeTargetParametersStepFunctionStateMachineParametersToTerraform(struct!.stepFunctionStateMachineParameters),
  }
}


export function pipesPipeTargetParametersToHclTerraform(struct?: PipesPipeTargetParametersOutputReference | PipesPipeTargetParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_template: {
      value: cdktn.stringToHclTerraform(struct!.inputTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_job_parameters: {
      value: pipesPipeTargetParametersBatchJobParametersToHclTerraform(struct!.batchJobParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersBatchJobParametersList",
    },
    cloudwatch_logs_parameters: {
      value: pipesPipeTargetParametersCloudwatchLogsParametersToHclTerraform(struct!.cloudwatchLogsParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersCloudwatchLogsParametersList",
    },
    ecs_task_parameters: {
      value: pipesPipeTargetParametersEcsTaskParametersToHclTerraform(struct!.ecsTaskParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersEcsTaskParametersList",
    },
    eventbridge_event_bus_parameters: {
      value: pipesPipeTargetParametersEventbridgeEventBusParametersToHclTerraform(struct!.eventbridgeEventBusParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersEventbridgeEventBusParametersList",
    },
    http_parameters: {
      value: pipesPipeTargetParametersHttpParametersToHclTerraform(struct!.httpParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersHttpParametersList",
    },
    kinesis_stream_parameters: {
      value: pipesPipeTargetParametersKinesisStreamParametersToHclTerraform(struct!.kinesisStreamParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersKinesisStreamParametersList",
    },
    lambda_function_parameters: {
      value: pipesPipeTargetParametersLambdaFunctionParametersToHclTerraform(struct!.lambdaFunctionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersLambdaFunctionParametersList",
    },
    redshift_data_parameters: {
      value: pipesPipeTargetParametersRedshiftDataParametersToHclTerraform(struct!.redshiftDataParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersRedshiftDataParametersList",
    },
    sagemaker_pipeline_parameters: {
      value: pipesPipeTargetParametersSagemakerPipelineParametersToHclTerraform(struct!.sagemakerPipelineParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersSagemakerPipelineParametersList",
    },
    sqs_queue_parameters: {
      value: pipesPipeTargetParametersSqsQueueParametersToHclTerraform(struct!.sqsQueueParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersSqsQueueParametersList",
    },
    step_function_state_machine_parameters: {
      value: pipesPipeTargetParametersStepFunctionStateMachineParametersToHclTerraform(struct!.stepFunctionStateMachineParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PipesPipeTargetParametersStepFunctionStateMachineParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipesPipeTargetParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipesPipeTargetParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputTemplate = this._inputTemplate;
    }
    if (this._batchJobParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchJobParameters = this._batchJobParameters?.internalValue;
    }
    if (this._cloudwatchLogsParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogsParameters = this._cloudwatchLogsParameters?.internalValue;
    }
    if (this._ecsTaskParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsTaskParameters = this._ecsTaskParameters?.internalValue;
    }
    if (this._eventbridgeEventBusParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventbridgeEventBusParameters = this._eventbridgeEventBusParameters?.internalValue;
    }
    if (this._httpParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpParameters = this._httpParameters?.internalValue;
    }
    if (this._kinesisStreamParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStreamParameters = this._kinesisStreamParameters?.internalValue;
    }
    if (this._lambdaFunctionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionParameters = this._lambdaFunctionParameters?.internalValue;
    }
    if (this._redshiftDataParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshiftDataParameters = this._redshiftDataParameters?.internalValue;
    }
    if (this._sagemakerPipelineParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerPipelineParameters = this._sagemakerPipelineParameters?.internalValue;
    }
    if (this._sqsQueueParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsQueueParameters = this._sqsQueueParameters?.internalValue;
    }
    if (this._stepFunctionStateMachineParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepFunctionStateMachineParameters = this._stepFunctionStateMachineParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipesPipeTargetParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputTemplate = undefined;
      this._batchJobParameters.internalValue = undefined;
      this._cloudwatchLogsParameters.internalValue = undefined;
      this._ecsTaskParameters.internalValue = undefined;
      this._eventbridgeEventBusParameters.internalValue = undefined;
      this._httpParameters.internalValue = undefined;
      this._kinesisStreamParameters.internalValue = undefined;
      this._lambdaFunctionParameters.internalValue = undefined;
      this._redshiftDataParameters.internalValue = undefined;
      this._sagemakerPipelineParameters.internalValue = undefined;
      this._sqsQueueParameters.internalValue = undefined;
      this._stepFunctionStateMachineParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputTemplate = value.inputTemplate;
      this._batchJobParameters.internalValue = value.batchJobParameters;
      this._cloudwatchLogsParameters.internalValue = value.cloudwatchLogsParameters;
      this._ecsTaskParameters.internalValue = value.ecsTaskParameters;
      this._eventbridgeEventBusParameters.internalValue = value.eventbridgeEventBusParameters;
      this._httpParameters.internalValue = value.httpParameters;
      this._kinesisStreamParameters.internalValue = value.kinesisStreamParameters;
      this._lambdaFunctionParameters.internalValue = value.lambdaFunctionParameters;
      this._redshiftDataParameters.internalValue = value.redshiftDataParameters;
      this._sagemakerPipelineParameters.internalValue = value.sagemakerPipelineParameters;
      this._sqsQueueParameters.internalValue = value.sqsQueueParameters;
      this._stepFunctionStateMachineParameters.internalValue = value.stepFunctionStateMachineParameters;
    }
  }

  // input_template - computed: false, optional: true, required: false
  private _inputTemplate?: string; 
  public get inputTemplate() {
    return this.getStringAttribute('input_template');
  }
  public set inputTemplate(value: string) {
    this._inputTemplate = value;
  }
  public resetInputTemplate() {
    this._inputTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTemplateInput() {
    return this._inputTemplate;
  }

  // batch_job_parameters - computed: false, optional: true, required: false
  private _batchJobParameters = new PipesPipeTargetParametersBatchJobParametersOutputReference(this, "batch_job_parameters");
  public get batchJobParameters() {
    return this._batchJobParameters;
  }
  public putBatchJobParameters(value: PipesPipeTargetParametersBatchJobParameters) {
    this._batchJobParameters.internalValue = value;
  }
  public resetBatchJobParameters() {
    this._batchJobParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchJobParametersInput() {
    return this._batchJobParameters.internalValue;
  }

  // cloudwatch_logs_parameters - computed: false, optional: true, required: false
  private _cloudwatchLogsParameters = new PipesPipeTargetParametersCloudwatchLogsParametersOutputReference(this, "cloudwatch_logs_parameters");
  public get cloudwatchLogsParameters() {
    return this._cloudwatchLogsParameters;
  }
  public putCloudwatchLogsParameters(value: PipesPipeTargetParametersCloudwatchLogsParameters) {
    this._cloudwatchLogsParameters.internalValue = value;
  }
  public resetCloudwatchLogsParameters() {
    this._cloudwatchLogsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsParametersInput() {
    return this._cloudwatchLogsParameters.internalValue;
  }

  // ecs_task_parameters - computed: false, optional: true, required: false
  private _ecsTaskParameters = new PipesPipeTargetParametersEcsTaskParametersOutputReference(this, "ecs_task_parameters");
  public get ecsTaskParameters() {
    return this._ecsTaskParameters;
  }
  public putEcsTaskParameters(value: PipesPipeTargetParametersEcsTaskParameters) {
    this._ecsTaskParameters.internalValue = value;
  }
  public resetEcsTaskParameters() {
    this._ecsTaskParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsTaskParametersInput() {
    return this._ecsTaskParameters.internalValue;
  }

  // eventbridge_event_bus_parameters - computed: false, optional: true, required: false
  private _eventbridgeEventBusParameters = new PipesPipeTargetParametersEventbridgeEventBusParametersOutputReference(this, "eventbridge_event_bus_parameters");
  public get eventbridgeEventBusParameters() {
    return this._eventbridgeEventBusParameters;
  }
  public putEventbridgeEventBusParameters(value: PipesPipeTargetParametersEventbridgeEventBusParameters) {
    this._eventbridgeEventBusParameters.internalValue = value;
  }
  public resetEventbridgeEventBusParameters() {
    this._eventbridgeEventBusParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventbridgeEventBusParametersInput() {
    return this._eventbridgeEventBusParameters.internalValue;
  }

  // http_parameters - computed: false, optional: true, required: false
  private _httpParameters = new PipesPipeTargetParametersHttpParametersOutputReference(this, "http_parameters");
  public get httpParameters() {
    return this._httpParameters;
  }
  public putHttpParameters(value: PipesPipeTargetParametersHttpParameters) {
    this._httpParameters.internalValue = value;
  }
  public resetHttpParameters() {
    this._httpParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpParametersInput() {
    return this._httpParameters.internalValue;
  }

  // kinesis_stream_parameters - computed: false, optional: true, required: false
  private _kinesisStreamParameters = new PipesPipeTargetParametersKinesisStreamParametersOutputReference(this, "kinesis_stream_parameters");
  public get kinesisStreamParameters() {
    return this._kinesisStreamParameters;
  }
  public putKinesisStreamParameters(value: PipesPipeTargetParametersKinesisStreamParameters) {
    this._kinesisStreamParameters.internalValue = value;
  }
  public resetKinesisStreamParameters() {
    this._kinesisStreamParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamParametersInput() {
    return this._kinesisStreamParameters.internalValue;
  }

  // lambda_function_parameters - computed: false, optional: true, required: false
  private _lambdaFunctionParameters = new PipesPipeTargetParametersLambdaFunctionParametersOutputReference(this, "lambda_function_parameters");
  public get lambdaFunctionParameters() {
    return this._lambdaFunctionParameters;
  }
  public putLambdaFunctionParameters(value: PipesPipeTargetParametersLambdaFunctionParameters) {
    this._lambdaFunctionParameters.internalValue = value;
  }
  public resetLambdaFunctionParameters() {
    this._lambdaFunctionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionParametersInput() {
    return this._lambdaFunctionParameters.internalValue;
  }

  // redshift_data_parameters - computed: false, optional: true, required: false
  private _redshiftDataParameters = new PipesPipeTargetParametersRedshiftDataParametersOutputReference(this, "redshift_data_parameters");
  public get redshiftDataParameters() {
    return this._redshiftDataParameters;
  }
  public putRedshiftDataParameters(value: PipesPipeTargetParametersRedshiftDataParameters) {
    this._redshiftDataParameters.internalValue = value;
  }
  public resetRedshiftDataParameters() {
    this._redshiftDataParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftDataParametersInput() {
    return this._redshiftDataParameters.internalValue;
  }

  // sagemaker_pipeline_parameters - computed: false, optional: true, required: false
  private _sagemakerPipelineParameters = new PipesPipeTargetParametersSagemakerPipelineParametersOutputReference(this, "sagemaker_pipeline_parameters");
  public get sagemakerPipelineParameters() {
    return this._sagemakerPipelineParameters;
  }
  public putSagemakerPipelineParameters(value: PipesPipeTargetParametersSagemakerPipelineParameters) {
    this._sagemakerPipelineParameters.internalValue = value;
  }
  public resetSagemakerPipelineParameters() {
    this._sagemakerPipelineParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerPipelineParametersInput() {
    return this._sagemakerPipelineParameters.internalValue;
  }

  // sqs_queue_parameters - computed: false, optional: true, required: false
  private _sqsQueueParameters = new PipesPipeTargetParametersSqsQueueParametersOutputReference(this, "sqs_queue_parameters");
  public get sqsQueueParameters() {
    return this._sqsQueueParameters;
  }
  public putSqsQueueParameters(value: PipesPipeTargetParametersSqsQueueParameters) {
    this._sqsQueueParameters.internalValue = value;
  }
  public resetSqsQueueParameters() {
    this._sqsQueueParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsQueueParametersInput() {
    return this._sqsQueueParameters.internalValue;
  }

  // step_function_state_machine_parameters - computed: false, optional: true, required: false
  private _stepFunctionStateMachineParameters = new PipesPipeTargetParametersStepFunctionStateMachineParametersOutputReference(this, "step_function_state_machine_parameters");
  public get stepFunctionStateMachineParameters() {
    return this._stepFunctionStateMachineParameters;
  }
  public putStepFunctionStateMachineParameters(value: PipesPipeTargetParametersStepFunctionStateMachineParameters) {
    this._stepFunctionStateMachineParameters.internalValue = value;
  }
  public resetStepFunctionStateMachineParameters() {
    this._stepFunctionStateMachineParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepFunctionStateMachineParametersInput() {
    return this._stepFunctionStateMachineParameters.internalValue;
  }
}
export interface PipesPipeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#create PipesPipe#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#delete PipesPipe#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#update PipesPipe#update}
  */
  readonly update?: string;
}

export function pipesPipeTimeoutsToTerraform(struct?: PipesPipeTimeouts | cdktn.IResolvable): any {
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


export function pipesPipeTimeoutsToHclTerraform(struct?: PipesPipeTimeouts | cdktn.IResolvable): any {
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

export class PipesPipeTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipesPipeTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PipesPipeTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe aws_pipes_pipe}
*/
export class PipesPipe extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_pipes_pipe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PipesPipe resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PipesPipe to import
  * @param importFromId The id of the existing PipesPipe that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PipesPipe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_pipes_pipe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/pipes_pipe aws_pipes_pipe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipesPipeConfig
  */
  public constructor(scope: Construct, id: string, config: PipesPipeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pipes_pipe',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.55.0',
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
    this._description = config.description;
    this._desiredState = config.desiredState;
    this._enrichment = config.enrichment;
    this._id = config.id;
    this._kmsKeyIdentifier = config.kmsKeyIdentifier;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._source = config.source;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._target = config.target;
    this._enrichmentParameters.internalValue = config.enrichmentParameters;
    this._logConfiguration.internalValue = config.logConfiguration;
    this._sourceParameters.internalValue = config.sourceParameters;
    this._targetParameters.internalValue = config.targetParameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // desired_state - computed: false, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // enrichment - computed: false, optional: true, required: false
  private _enrichment?: string; 
  public get enrichment() {
    return this.getStringAttribute('enrichment');
  }
  public set enrichment(value: string) {
    this._enrichment = value;
  }
  public resetEnrichment() {
    this._enrichment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentInput() {
    return this._enrichment;
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

  // kms_key_identifier - computed: false, optional: true, required: false
  private _kmsKeyIdentifier?: string; 
  public get kmsKeyIdentifier() {
    return this.getStringAttribute('kms_key_identifier');
  }
  public set kmsKeyIdentifier(value: string) {
    this._kmsKeyIdentifier = value;
  }
  public resetKmsKeyIdentifier() {
    this._kmsKeyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdentifierInput() {
    return this._kmsKeyIdentifier;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // enrichment_parameters - computed: false, optional: true, required: false
  private _enrichmentParameters = new PipesPipeEnrichmentParametersOutputReference(this, "enrichment_parameters");
  public get enrichmentParameters() {
    return this._enrichmentParameters;
  }
  public putEnrichmentParameters(value: PipesPipeEnrichmentParameters) {
    this._enrichmentParameters.internalValue = value;
  }
  public resetEnrichmentParameters() {
    this._enrichmentParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentParametersInput() {
    return this._enrichmentParameters.internalValue;
  }

  // log_configuration - computed: false, optional: true, required: false
  private _logConfiguration = new PipesPipeLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }
  public putLogConfiguration(value: PipesPipeLogConfiguration) {
    this._logConfiguration.internalValue = value;
  }
  public resetLogConfiguration() {
    this._logConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationInput() {
    return this._logConfiguration.internalValue;
  }

  // source_parameters - computed: false, optional: true, required: false
  private _sourceParameters = new PipesPipeSourceParametersOutputReference(this, "source_parameters");
  public get sourceParameters() {
    return this._sourceParameters;
  }
  public putSourceParameters(value: PipesPipeSourceParameters) {
    this._sourceParameters.internalValue = value;
  }
  public resetSourceParameters() {
    this._sourceParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceParametersInput() {
    return this._sourceParameters.internalValue;
  }

  // target_parameters - computed: false, optional: true, required: false
  private _targetParameters = new PipesPipeTargetParametersOutputReference(this, "target_parameters");
  public get targetParameters() {
    return this._targetParameters;
  }
  public putTargetParameters(value: PipesPipeTargetParameters) {
    this._targetParameters.internalValue = value;
  }
  public resetTargetParameters() {
    this._targetParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetParametersInput() {
    return this._targetParameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PipesPipeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PipesPipeTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      desired_state: cdktn.stringToTerraform(this._desiredState),
      enrichment: cdktn.stringToTerraform(this._enrichment),
      id: cdktn.stringToTerraform(this._id),
      kms_key_identifier: cdktn.stringToTerraform(this._kmsKeyIdentifier),
      name: cdktn.stringToTerraform(this._name),
      name_prefix: cdktn.stringToTerraform(this._namePrefix),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      source: cdktn.stringToTerraform(this._source),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      target: cdktn.stringToTerraform(this._target),
      enrichment_parameters: pipesPipeEnrichmentParametersToTerraform(this._enrichmentParameters.internalValue),
      log_configuration: pipesPipeLogConfigurationToTerraform(this._logConfiguration.internalValue),
      source_parameters: pipesPipeSourceParametersToTerraform(this._sourceParameters.internalValue),
      target_parameters: pipesPipeTargetParametersToTerraform(this._targetParameters.internalValue),
      timeouts: pipesPipeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_state: {
        value: cdktn.stringToHclTerraform(this._desiredState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enrichment: {
        value: cdktn.stringToHclTerraform(this._enrichment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_identifier: {
        value: cdktn.stringToHclTerraform(this._kmsKeyIdentifier),
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
      name_prefix: {
        value: cdktn.stringToHclTerraform(this._namePrefix),
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
      source: {
        value: cdktn.stringToHclTerraform(this._source),
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
      target: {
        value: cdktn.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enrichment_parameters: {
        value: pipesPipeEnrichmentParametersToHclTerraform(this._enrichmentParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipesPipeEnrichmentParametersList",
      },
      log_configuration: {
        value: pipesPipeLogConfigurationToHclTerraform(this._logConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipesPipeLogConfigurationList",
      },
      source_parameters: {
        value: pipesPipeSourceParametersToHclTerraform(this._sourceParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipesPipeSourceParametersList",
      },
      target_parameters: {
        value: pipesPipeTargetParametersToHclTerraform(this._targetParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipesPipeTargetParametersList",
      },
      timeouts: {
        value: pipesPipeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipesPipeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
