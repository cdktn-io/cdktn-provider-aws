/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentcoreOnlineEvaluationConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#description BedrockagentcoreOnlineEvaluationConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#enable_on_create BedrockagentcoreOnlineEvaluationConfig#enable_on_create}
  */
  readonly enableOnCreate: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluation_execution_role_arn BedrockagentcoreOnlineEvaluationConfig#evaluation_execution_role_arn}
  */
  readonly evaluationExecutionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#execution_status BedrockagentcoreOnlineEvaluationConfig#execution_status}
  */
  readonly executionStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#online_evaluation_config_name BedrockagentcoreOnlineEvaluationConfig#online_evaluation_config_name}
  */
  readonly onlineEvaluationConfigName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#region BedrockagentcoreOnlineEvaluationConfig#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#tags BedrockagentcoreOnlineEvaluationConfig#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * data_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#data_source_config BedrockagentcoreOnlineEvaluationConfig#data_source_config}
  */
  readonly dataSourceConfig?: BedrockagentcoreOnlineEvaluationConfigDataSourceConfig[] | cdktn.IResolvable;
  /**
  * evaluator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluator BedrockagentcoreOnlineEvaluationConfig#evaluator}
  */
  readonly evaluator?: BedrockagentcoreOnlineEvaluationConfigEvaluator[] | cdktn.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#rule BedrockagentcoreOnlineEvaluationConfig#rule}
  */
  readonly rule?: BedrockagentcoreOnlineEvaluationConfigRule[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#timeouts BedrockagentcoreOnlineEvaluationConfig#timeouts}
  */
  readonly timeouts?: BedrockagentcoreOnlineEvaluationConfigTimeouts;
}
export interface BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig {
}

export function bedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigToTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigToHclTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
}

export class BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference {
    return new BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreOnlineEvaluationConfigOutputConfig {
}

export function bedrockagentcoreOnlineEvaluationConfigOutputConfigToTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigOutputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreOnlineEvaluationConfigOutputConfigToHclTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigOutputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreOnlineEvaluationConfigOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOnlineEvaluationConfigOutputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_config - computed: true, optional: false, required: false
  private _cloudwatchConfig = new BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList(this, "cloudwatch_config", false);
  public get cloudwatchConfig() {
    return this._cloudwatchConfig;
  }
}

export class BedrockagentcoreOnlineEvaluationConfigOutputConfigList extends cdktn.ComplexList {

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
  public get(index: number): BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference {
    return new BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#log_group_names BedrockagentcoreOnlineEvaluationConfig#log_group_names}
  */
  readonly logGroupNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#service_names BedrockagentcoreOnlineEvaluationConfig#service_names}
  */
  readonly serviceNames: string[];
}

export function bedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsToTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_group_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.logGroupNames),
    service_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.serviceNames),
  }
}


export function bedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsToHclTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_group_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.logGroupNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.serviceNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupNames = this._logGroupNames;
    }
    if (this._serviceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNames = this._serviceNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroupNames = undefined;
      this._serviceNames = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroupNames = value.logGroupNames;
      this._serviceNames = value.serviceNames;
    }
  }

  // log_group_names - computed: false, optional: false, required: true
  private _logGroupNames?: string[]; 
  public get logGroupNames() {
    return this.getListAttribute('log_group_names');
  }
  public set logGroupNames(value: string[]) {
    this._logGroupNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNamesInput() {
    return this._logGroupNames;
  }

  // service_names - computed: false, optional: false, required: true
  private _serviceNames?: string[]; 
  public get serviceNames() {
    return this.getListAttribute('service_names');
  }
  public set serviceNames(value: string[]) {
    this._serviceNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNamesInput() {
    return this._serviceNames;
  }
}

export class BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference {
    return new BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreOnlineEvaluationConfigDataSourceConfig {
  /**
  * cloudwatch_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#cloudwatch_logs BedrockagentcoreOnlineEvaluationConfig#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs[] | cdktn.IResolvable;
}

export function bedrockagentcoreOnlineEvaluationConfigDataSourceConfigToTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigDataSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_logs: cdktn.listMapper(bedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsToTerraform, true)(struct!.cloudwatchLogs),
  }
}


export function bedrockagentcoreOnlineEvaluationConfigDataSourceConfigToHclTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigDataSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_logs: {
      value: cdktn.listMapperHcl(bedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsToHclTerraform, true)(struct!.cloudwatchLogs),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreOnlineEvaluationConfigDataSourceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOnlineEvaluationConfigDataSourceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchLogs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
    }
  }

  // cloudwatch_logs - computed: false, optional: true, required: false
  private _cloudwatchLogs = new BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList(this, "cloudwatch_logs", false);
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs[] | cdktn.IResolvable) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }
}

export class BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreOnlineEvaluationConfigDataSourceConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference {
    return new BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreOnlineEvaluationConfigEvaluator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluator_id BedrockagentcoreOnlineEvaluationConfig#evaluator_id}
  */
  readonly evaluatorId: string;
}

export function bedrockagentcoreOnlineEvaluationConfigEvaluatorToTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigEvaluator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluator_id: cdktn.stringToTerraform(struct!.evaluatorId),
  }
}


export function bedrockagentcoreOnlineEvaluationConfigEvaluatorToHclTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigEvaluator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluator_id: {
      value: cdktn.stringToHclTerraform(struct!.evaluatorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreOnlineEvaluationConfigEvaluator | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluatorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorId = this._evaluatorId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOnlineEvaluationConfigEvaluator | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluatorId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluatorId = value.evaluatorId;
    }
  }

  // evaluator_id - computed: false, optional: false, required: true
  private _evaluatorId?: string; 
  public get evaluatorId() {
    return this.getStringAttribute('evaluator_id');
  }
  public set evaluatorId(value: string) {
    this._evaluatorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorIdInput() {
    return this._evaluatorId;
  }
}

export class BedrockagentcoreOnlineEvaluationConfigEvaluatorList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreOnlineEvaluationConfigEvaluator[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference {
    return new BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreOnlineEvaluationConfigRuleFilterValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#boolean_value BedrockagentcoreOnlineEvaluationConfig#boolean_value}
  */
  readonly booleanValue?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#double_value BedrockagentcoreOnlineEvaluationConfig#double_value}
  */
  readonly doubleValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#string_value BedrockagentcoreOnlineEvaluationConfig#string_value}
  */
  readonly stringValue?: string;
}

export function bedrockagentcoreOnlineEvaluationConfigRuleFilterValueToTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigRuleFilterValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_value: cdktn.booleanToTerraform(struct!.booleanValue),
    double_value: cdktn.numberToTerraform(struct!.doubleValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function bedrockagentcoreOnlineEvaluationConfigRuleFilterValueToHclTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigRuleFilterValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_value: {
      value: cdktn.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    double_value: {
      value: cdktn.numberToHclTerraform(struct!.doubleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreOnlineEvaluationConfigRuleFilterValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._doubleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOnlineEvaluationConfigRuleFilterValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._doubleValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._doubleValue = value.doubleValue;
      this._stringValue = value.stringValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktn.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktn.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue?: number; 
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }
  public set doubleValue(value: number) {
    this._doubleValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}

export class BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreOnlineEvaluationConfigRuleFilterValue[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference {
    return new BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreOnlineEvaluationConfigRuleFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#key BedrockagentcoreOnlineEvaluationConfig#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#operator BedrockagentcoreOnlineEvaluationConfig#operator}
  */
  readonly operator: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#value BedrockagentcoreOnlineEvaluationConfig#value}
  */
  readonly value?: BedrockagentcoreOnlineEvaluationConfigRuleFilterValue[] | cdktn.IResolvable;
}

export function bedrockagentcoreOnlineEvaluationConfigRuleFilterToTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigRuleFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.listMapper(bedrockagentcoreOnlineEvaluationConfigRuleFilterValueToTerraform, true)(struct!.value),
  }
}


export function bedrockagentcoreOnlineEvaluationConfigRuleFilterToHclTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigRuleFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.listMapperHcl(bedrockagentcoreOnlineEvaluationConfigRuleFilterValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreOnlineEvaluationConfigRuleFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOnlineEvaluationConfigRuleFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._value.internalValue = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value = new BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: BedrockagentcoreOnlineEvaluationConfigRuleFilterValue[] | cdktn.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class BedrockagentcoreOnlineEvaluationConfigRuleFilterList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreOnlineEvaluationConfigRuleFilter[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference {
    return new BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#sampling_percentage BedrockagentcoreOnlineEvaluationConfig#sampling_percentage}
  */
  readonly samplingPercentage: number;
}

export function bedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigToTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sampling_percentage: cdktn.numberToTerraform(struct!.samplingPercentage),
  }
}


export function bedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigToHclTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sampling_percentage: {
      value: cdktn.numberToHclTerraform(struct!.samplingPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samplingPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingPercentage = this._samplingPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._samplingPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._samplingPercentage = value.samplingPercentage;
    }
  }

  // sampling_percentage - computed: false, optional: false, required: true
  private _samplingPercentage?: number; 
  public get samplingPercentage() {
    return this.getNumberAttribute('sampling_percentage');
  }
  public set samplingPercentage(value: number) {
    this._samplingPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPercentageInput() {
    return this._samplingPercentage;
  }
}

export class BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference {
    return new BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#session_timeout_minutes BedrockagentcoreOnlineEvaluationConfig#session_timeout_minutes}
  */
  readonly sessionTimeoutMinutes: number;
}

export function bedrockagentcoreOnlineEvaluationConfigRuleSessionConfigToTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    session_timeout_minutes: cdktn.numberToTerraform(struct!.sessionTimeoutMinutes),
  }
}


export function bedrockagentcoreOnlineEvaluationConfigRuleSessionConfigToHclTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    session_timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.sessionTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeoutMinutes = this._sessionTimeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sessionTimeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sessionTimeoutMinutes = value.sessionTimeoutMinutes;
    }
  }

  // session_timeout_minutes - computed: false, optional: false, required: true
  private _sessionTimeoutMinutes?: number; 
  public get sessionTimeoutMinutes() {
    return this.getNumberAttribute('session_timeout_minutes');
  }
  public set sessionTimeoutMinutes(value: number) {
    this._sessionTimeoutMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutMinutesInput() {
    return this._sessionTimeoutMinutes;
  }
}

export class BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference {
    return new BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreOnlineEvaluationConfigRule {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#filter BedrockagentcoreOnlineEvaluationConfig#filter}
  */
  readonly filter?: BedrockagentcoreOnlineEvaluationConfigRuleFilter[] | cdktn.IResolvable;
  /**
  * sampling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#sampling_config BedrockagentcoreOnlineEvaluationConfig#sampling_config}
  */
  readonly samplingConfig?: BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig[] | cdktn.IResolvable;
  /**
  * session_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#session_config BedrockagentcoreOnlineEvaluationConfig#session_config}
  */
  readonly sessionConfig?: BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig[] | cdktn.IResolvable;
}

export function bedrockagentcoreOnlineEvaluationConfigRuleToTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter: cdktn.listMapper(bedrockagentcoreOnlineEvaluationConfigRuleFilterToTerraform, true)(struct!.filter),
    sampling_config: cdktn.listMapper(bedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigToTerraform, true)(struct!.samplingConfig),
    session_config: cdktn.listMapper(bedrockagentcoreOnlineEvaluationConfigRuleSessionConfigToTerraform, true)(struct!.sessionConfig),
  }
}


export function bedrockagentcoreOnlineEvaluationConfigRuleToHclTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter: {
      value: cdktn.listMapperHcl(bedrockagentcoreOnlineEvaluationConfigRuleFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreOnlineEvaluationConfigRuleFilterList",
    },
    sampling_config: {
      value: cdktn.listMapperHcl(bedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigToHclTerraform, true)(struct!.samplingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList",
    },
    session_config: {
      value: cdktn.listMapperHcl(bedrockagentcoreOnlineEvaluationConfigRuleSessionConfigToHclTerraform, true)(struct!.sessionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOnlineEvaluationConfigRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreOnlineEvaluationConfigRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._samplingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingConfig = this._samplingConfig?.internalValue;
    }
    if (this._sessionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionConfig = this._sessionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOnlineEvaluationConfigRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter.internalValue = undefined;
      this._samplingConfig.internalValue = undefined;
      this._sessionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter.internalValue = value.filter;
      this._samplingConfig.internalValue = value.samplingConfig;
      this._sessionConfig.internalValue = value.sessionConfig;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new BedrockagentcoreOnlineEvaluationConfigRuleFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: BedrockagentcoreOnlineEvaluationConfigRuleFilter[] | cdktn.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // sampling_config - computed: false, optional: true, required: false
  private _samplingConfig = new BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList(this, "sampling_config", false);
  public get samplingConfig() {
    return this._samplingConfig;
  }
  public putSamplingConfig(value: BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig[] | cdktn.IResolvable) {
    this._samplingConfig.internalValue = value;
  }
  public resetSamplingConfig() {
    this._samplingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingConfigInput() {
    return this._samplingConfig.internalValue;
  }

  // session_config - computed: false, optional: true, required: false
  private _sessionConfig = new BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList(this, "session_config", false);
  public get sessionConfig() {
    return this._sessionConfig;
  }
  public putSessionConfig(value: BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig[] | cdktn.IResolvable) {
    this._sessionConfig.internalValue = value;
  }
  public resetSessionConfig() {
    this._sessionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionConfigInput() {
    return this._sessionConfig.internalValue;
  }
}

export class BedrockagentcoreOnlineEvaluationConfigRuleList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreOnlineEvaluationConfigRule[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreOnlineEvaluationConfigRuleOutputReference {
    return new BedrockagentcoreOnlineEvaluationConfigRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreOnlineEvaluationConfigTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#create BedrockagentcoreOnlineEvaluationConfig#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#delete BedrockagentcoreOnlineEvaluationConfig#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#update BedrockagentcoreOnlineEvaluationConfig#update}
  */
  readonly update?: string;
}

export function bedrockagentcoreOnlineEvaluationConfigTimeoutsToTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigTimeouts | cdktn.IResolvable): any {
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


export function bedrockagentcoreOnlineEvaluationConfigTimeoutsToHclTerraform(struct?: BedrockagentcoreOnlineEvaluationConfigTimeouts | cdktn.IResolvable): any {
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

export class BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOnlineEvaluationConfigTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreOnlineEvaluationConfigTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config aws_bedrockagentcore_online_evaluation_config}
*/
export class BedrockagentcoreOnlineEvaluationConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_online_evaluation_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreOnlineEvaluationConfig to import
  * @param importFromId The id of the existing BedrockagentcoreOnlineEvaluationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreOnlineEvaluationConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_online_evaluation_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/bedrockagentcore_online_evaluation_config aws_bedrockagentcore_online_evaluation_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreOnlineEvaluationConfigConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreOnlineEvaluationConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagentcore_online_evaluation_config',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.50.0',
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
    this._enableOnCreate = config.enableOnCreate;
    this._evaluationExecutionRoleArn = config.evaluationExecutionRoleArn;
    this._executionStatus = config.executionStatus;
    this._onlineEvaluationConfigName = config.onlineEvaluationConfigName;
    this._region = config.region;
    this._tags = config.tags;
    this._dataSourceConfig.internalValue = config.dataSourceConfig;
    this._evaluator.internalValue = config.evaluator;
    this._rule.internalValue = config.rule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enable_on_create - computed: false, optional: false, required: true
  private _enableOnCreate?: boolean | cdktn.IResolvable; 
  public get enableOnCreate() {
    return this.getBooleanAttribute('enable_on_create');
  }
  public set enableOnCreate(value: boolean | cdktn.IResolvable) {
    this._enableOnCreate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnCreateInput() {
    return this._enableOnCreate;
  }

  // evaluation_execution_role_arn - computed: false, optional: false, required: true
  private _evaluationExecutionRoleArn?: string; 
  public get evaluationExecutionRoleArn() {
    return this.getStringAttribute('evaluation_execution_role_arn');
  }
  public set evaluationExecutionRoleArn(value: string) {
    this._evaluationExecutionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationExecutionRoleArnInput() {
    return this._evaluationExecutionRoleArn;
  }

  // execution_status - computed: true, optional: true, required: false
  private _executionStatus?: string; 
  public get executionStatus() {
    return this.getStringAttribute('execution_status');
  }
  public set executionStatus(value: string) {
    this._executionStatus = value;
  }
  public resetExecutionStatus() {
    this._executionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionStatusInput() {
    return this._executionStatus;
  }

  // online_evaluation_config_arn - computed: true, optional: false, required: false
  public get onlineEvaluationConfigArn() {
    return this.getStringAttribute('online_evaluation_config_arn');
  }

  // online_evaluation_config_id - computed: true, optional: false, required: false
  public get onlineEvaluationConfigId() {
    return this.getStringAttribute('online_evaluation_config_id');
  }

  // online_evaluation_config_name - computed: false, optional: false, required: true
  private _onlineEvaluationConfigName?: string; 
  public get onlineEvaluationConfigName() {
    return this.getStringAttribute('online_evaluation_config_name');
  }
  public set onlineEvaluationConfigName(value: string) {
    this._onlineEvaluationConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineEvaluationConfigNameInput() {
    return this._onlineEvaluationConfigName;
  }

  // output_config - computed: true, optional: false, required: false
  private _outputConfig = new BedrockagentcoreOnlineEvaluationConfigOutputConfigList(this, "output_config", false);
  public get outputConfig() {
    return this._outputConfig;
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

  // data_source_config - computed: false, optional: true, required: false
  private _dataSourceConfig = new BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList(this, "data_source_config", false);
  public get dataSourceConfig() {
    return this._dataSourceConfig;
  }
  public putDataSourceConfig(value: BedrockagentcoreOnlineEvaluationConfigDataSourceConfig[] | cdktn.IResolvable) {
    this._dataSourceConfig.internalValue = value;
  }
  public resetDataSourceConfig() {
    this._dataSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceConfigInput() {
    return this._dataSourceConfig.internalValue;
  }

  // evaluator - computed: false, optional: true, required: false
  private _evaluator = new BedrockagentcoreOnlineEvaluationConfigEvaluatorList(this, "evaluator", true);
  public get evaluator() {
    return this._evaluator;
  }
  public putEvaluator(value: BedrockagentcoreOnlineEvaluationConfigEvaluator[] | cdktn.IResolvable) {
    this._evaluator.internalValue = value;
  }
  public resetEvaluator() {
    this._evaluator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorInput() {
    return this._evaluator.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new BedrockagentcoreOnlineEvaluationConfigRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: BedrockagentcoreOnlineEvaluationConfigRule[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockagentcoreOnlineEvaluationConfigTimeouts) {
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
      enable_on_create: cdktn.booleanToTerraform(this._enableOnCreate),
      evaluation_execution_role_arn: cdktn.stringToTerraform(this._evaluationExecutionRoleArn),
      execution_status: cdktn.stringToTerraform(this._executionStatus),
      online_evaluation_config_name: cdktn.stringToTerraform(this._onlineEvaluationConfigName),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      data_source_config: cdktn.listMapper(bedrockagentcoreOnlineEvaluationConfigDataSourceConfigToTerraform, true)(this._dataSourceConfig.internalValue),
      evaluator: cdktn.listMapper(bedrockagentcoreOnlineEvaluationConfigEvaluatorToTerraform, true)(this._evaluator.internalValue),
      rule: cdktn.listMapper(bedrockagentcoreOnlineEvaluationConfigRuleToTerraform, true)(this._rule.internalValue),
      timeouts: bedrockagentcoreOnlineEvaluationConfigTimeoutsToTerraform(this._timeouts.internalValue),
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
      enable_on_create: {
        value: cdktn.booleanToHclTerraform(this._enableOnCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      evaluation_execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._evaluationExecutionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_status: {
        value: cdktn.stringToHclTerraform(this._executionStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      online_evaluation_config_name: {
        value: cdktn.stringToHclTerraform(this._onlineEvaluationConfigName),
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
      data_source_config: {
        value: cdktn.listMapperHcl(bedrockagentcoreOnlineEvaluationConfigDataSourceConfigToHclTerraform, true)(this._dataSourceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList",
      },
      evaluator: {
        value: cdktn.listMapperHcl(bedrockagentcoreOnlineEvaluationConfigEvaluatorToHclTerraform, true)(this._evaluator.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BedrockagentcoreOnlineEvaluationConfigEvaluatorList",
      },
      rule: {
        value: cdktn.listMapperHcl(bedrockagentcoreOnlineEvaluationConfigRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreOnlineEvaluationConfigRuleList",
      },
      timeouts: {
        value: bedrockagentcoreOnlineEvaluationConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreOnlineEvaluationConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
