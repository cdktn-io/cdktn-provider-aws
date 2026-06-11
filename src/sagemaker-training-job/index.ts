/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerTrainingJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether to delete model packages in the configured model package group when destroying the training job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#delete_model_packages_on_destroy SagemakerTrainingJob#delete_model_packages_on_destroy}
  */
  readonly deleteModelPackagesOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * Whether to delete detached VPC ENIs that SageMaker may leave behind when destroying the training job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#delete_vpc_enis_on_destroy SagemakerTrainingJob#delete_vpc_enis_on_destroy}
  */
  readonly deleteVpcEnisOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#enable_inter_container_traffic_encryption SagemakerTrainingJob#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#enable_managed_spot_training SagemakerTrainingJob#enable_managed_spot_training}
  */
  readonly enableManagedSpotTraining?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#enable_network_isolation SagemakerTrainingJob#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#environment SagemakerTrainingJob#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#hyper_parameters SagemakerTrainingJob#hyper_parameters}
  */
  readonly hyperParameters?: { [key: string]: string };
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#region SagemakerTrainingJob#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#role_arn SagemakerTrainingJob#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#tags SagemakerTrainingJob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#training_job_name SagemakerTrainingJob#training_job_name}
  */
  readonly trainingJobName: string;
  /**
  * algorithm_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#algorithm_specification SagemakerTrainingJob#algorithm_specification}
  */
  readonly algorithmSpecification?: SagemakerTrainingJobAlgorithmSpecification[] | cdktn.IResolvable;
  /**
  * checkpoint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#checkpoint_config SagemakerTrainingJob#checkpoint_config}
  */
  readonly checkpointConfig?: SagemakerTrainingJobCheckpointConfig[] | cdktn.IResolvable;
  /**
  * debug_hook_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#debug_hook_config SagemakerTrainingJob#debug_hook_config}
  */
  readonly debugHookConfig?: SagemakerTrainingJobDebugHookConfig[] | cdktn.IResolvable;
  /**
  * debug_rule_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#debug_rule_configurations SagemakerTrainingJob#debug_rule_configurations}
  */
  readonly debugRuleConfigurations?: SagemakerTrainingJobDebugRuleConfigurations[] | cdktn.IResolvable;
  /**
  * experiment_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#experiment_config SagemakerTrainingJob#experiment_config}
  */
  readonly experimentConfig?: SagemakerTrainingJobExperimentConfig[] | cdktn.IResolvable;
  /**
  * infra_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#infra_check_config SagemakerTrainingJob#infra_check_config}
  */
  readonly infraCheckConfig?: SagemakerTrainingJobInfraCheckConfig[] | cdktn.IResolvable;
  /**
  * input_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#input_data_config SagemakerTrainingJob#input_data_config}
  */
  readonly inputDataConfig?: SagemakerTrainingJobInputDataConfig[] | cdktn.IResolvable;
  /**
  * mlflow_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#mlflow_config SagemakerTrainingJob#mlflow_config}
  */
  readonly mlflowConfig?: SagemakerTrainingJobMlflowConfig[] | cdktn.IResolvable;
  /**
  * model_package_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#model_package_config SagemakerTrainingJob#model_package_config}
  */
  readonly modelPackageConfig?: SagemakerTrainingJobModelPackageConfig[] | cdktn.IResolvable;
  /**
  * output_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#output_data_config SagemakerTrainingJob#output_data_config}
  */
  readonly outputDataConfig?: SagemakerTrainingJobOutputDataConfig[] | cdktn.IResolvable;
  /**
  * profiler_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#profiler_config SagemakerTrainingJob#profiler_config}
  */
  readonly profilerConfig?: SagemakerTrainingJobProfilerConfig[] | cdktn.IResolvable;
  /**
  * profiler_rule_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#profiler_rule_configurations SagemakerTrainingJob#profiler_rule_configurations}
  */
  readonly profilerRuleConfigurations?: SagemakerTrainingJobProfilerRuleConfigurations[] | cdktn.IResolvable;
  /**
  * remote_debug_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#remote_debug_config SagemakerTrainingJob#remote_debug_config}
  */
  readonly remoteDebugConfig?: SagemakerTrainingJobRemoteDebugConfig[] | cdktn.IResolvable;
  /**
  * resource_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#resource_config SagemakerTrainingJob#resource_config}
  */
  readonly resourceConfig?: SagemakerTrainingJobResourceConfig[] | cdktn.IResolvable;
  /**
  * retry_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#retry_strategy SagemakerTrainingJob#retry_strategy}
  */
  readonly retryStrategy?: SagemakerTrainingJobRetryStrategy[] | cdktn.IResolvable;
  /**
  * serverless_job_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#serverless_job_config SagemakerTrainingJob#serverless_job_config}
  */
  readonly serverlessJobConfig?: SagemakerTrainingJobServerlessJobConfig[] | cdktn.IResolvable;
  /**
  * session_chaining_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#session_chaining_config SagemakerTrainingJob#session_chaining_config}
  */
  readonly sessionChainingConfig?: SagemakerTrainingJobSessionChainingConfig[] | cdktn.IResolvable;
  /**
  * stopping_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#stopping_condition SagemakerTrainingJob#stopping_condition}
  */
  readonly stoppingCondition?: SagemakerTrainingJobStoppingCondition[] | cdktn.IResolvable;
  /**
  * tensor_board_output_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#tensor_board_output_config SagemakerTrainingJob#tensor_board_output_config}
  */
  readonly tensorBoardOutputConfig?: SagemakerTrainingJobTensorBoardOutputConfig[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#timeouts SagemakerTrainingJob#timeouts}
  */
  readonly timeouts?: SagemakerTrainingJobTimeouts;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#vpc_config SagemakerTrainingJob#vpc_config}
  */
  readonly vpcConfig?: SagemakerTrainingJobVpcConfig[] | cdktn.IResolvable;
}
export interface SagemakerTrainingJobAlgorithmSpecificationMetricDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#name SagemakerTrainingJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#regex SagemakerTrainingJob#regex}
  */
  readonly regex: string;
}

export function sagemakerTrainingJobAlgorithmSpecificationMetricDefinitionsToTerraform(struct?: SagemakerTrainingJobAlgorithmSpecificationMetricDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    regex: cdktn.stringToTerraform(struct!.regex),
  }
}


export function sagemakerTrainingJobAlgorithmSpecificationMetricDefinitionsToHclTerraform(struct?: SagemakerTrainingJobAlgorithmSpecificationMetricDefinitions | cdktn.IResolvable): any {
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

export class SagemakerTrainingJobAlgorithmSpecificationMetricDefinitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobAlgorithmSpecificationMetricDefinitions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerTrainingJobAlgorithmSpecificationMetricDefinitions | cdktn.IResolvable | undefined) {
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

export class SagemakerTrainingJobAlgorithmSpecificationMetricDefinitionsList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobAlgorithmSpecificationMetricDefinitions[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobAlgorithmSpecificationMetricDefinitionsOutputReference {
    return new SagemakerTrainingJobAlgorithmSpecificationMetricDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#training_repository_credentials_provider_arn SagemakerTrainingJob#training_repository_credentials_provider_arn}
  */
  readonly trainingRepositoryCredentialsProviderArn?: string;
}

export function sagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfigToTerraform(struct?: SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    training_repository_credentials_provider_arn: cdktn.stringToTerraform(struct!.trainingRepositoryCredentialsProviderArn),
  }
}


export function sagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfigToHclTerraform(struct?: SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    training_repository_credentials_provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.trainingRepositoryCredentialsProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trainingRepositoryCredentialsProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingRepositoryCredentialsProviderArn = this._trainingRepositoryCredentialsProviderArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trainingRepositoryCredentialsProviderArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trainingRepositoryCredentialsProviderArn = value.trainingRepositoryCredentialsProviderArn;
    }
  }

  // training_repository_credentials_provider_arn - computed: false, optional: true, required: false
  private _trainingRepositoryCredentialsProviderArn?: string; 
  public get trainingRepositoryCredentialsProviderArn() {
    return this.getStringAttribute('training_repository_credentials_provider_arn');
  }
  public set trainingRepositoryCredentialsProviderArn(value: string) {
    this._trainingRepositoryCredentialsProviderArn = value;
  }
  public resetTrainingRepositoryCredentialsProviderArn() {
    this._trainingRepositoryCredentialsProviderArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingRepositoryCredentialsProviderArnInput() {
    return this._trainingRepositoryCredentialsProviderArn;
  }
}

export class SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfigOutputReference {
    return new SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#training_repository_access_mode SagemakerTrainingJob#training_repository_access_mode}
  */
  readonly trainingRepositoryAccessMode?: string;
  /**
  * training_repository_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#training_repository_auth_config SagemakerTrainingJob#training_repository_auth_config}
  */
  readonly trainingRepositoryAuthConfig?: SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfig[] | cdktn.IResolvable;
}

export function sagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigToTerraform(struct?: SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    training_repository_access_mode: cdktn.stringToTerraform(struct!.trainingRepositoryAccessMode),
    training_repository_auth_config: cdktn.listMapper(sagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfigToTerraform, true)(struct!.trainingRepositoryAuthConfig),
  }
}


export function sagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigToHclTerraform(struct?: SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    training_repository_access_mode: {
      value: cdktn.stringToHclTerraform(struct!.trainingRepositoryAccessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_repository_auth_config: {
      value: cdktn.listMapperHcl(sagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfigToHclTerraform, true)(struct!.trainingRepositoryAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trainingRepositoryAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingRepositoryAccessMode = this._trainingRepositoryAccessMode;
    }
    if (this._trainingRepositoryAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingRepositoryAuthConfig = this._trainingRepositoryAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trainingRepositoryAccessMode = undefined;
      this._trainingRepositoryAuthConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trainingRepositoryAccessMode = value.trainingRepositoryAccessMode;
      this._trainingRepositoryAuthConfig.internalValue = value.trainingRepositoryAuthConfig;
    }
  }

  // training_repository_access_mode - computed: false, optional: true, required: false
  private _trainingRepositoryAccessMode?: string; 
  public get trainingRepositoryAccessMode() {
    return this.getStringAttribute('training_repository_access_mode');
  }
  public set trainingRepositoryAccessMode(value: string) {
    this._trainingRepositoryAccessMode = value;
  }
  public resetTrainingRepositoryAccessMode() {
    this._trainingRepositoryAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingRepositoryAccessModeInput() {
    return this._trainingRepositoryAccessMode;
  }

  // training_repository_auth_config - computed: false, optional: true, required: false
  private _trainingRepositoryAuthConfig = new SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfigList(this, "training_repository_auth_config", false);
  public get trainingRepositoryAuthConfig() {
    return this._trainingRepositoryAuthConfig;
  }
  public putTrainingRepositoryAuthConfig(value: SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigTrainingRepositoryAuthConfig[] | cdktn.IResolvable) {
    this._trainingRepositoryAuthConfig.internalValue = value;
  }
  public resetTrainingRepositoryAuthConfig() {
    this._trainingRepositoryAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingRepositoryAuthConfigInput() {
    return this._trainingRepositoryAuthConfig.internalValue;
  }
}

export class SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigOutputReference {
    return new SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobAlgorithmSpecification {
  /**
  * Name or ARN of a SageMaker algorithm resource. Exactly one of `algorithm_name` or `training_image` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#algorithm_name SagemakerTrainingJob#algorithm_name}
  */
  readonly algorithmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#container_arguments SagemakerTrainingJob#container_arguments}
  */
  readonly containerArguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#container_entrypoint SagemakerTrainingJob#container_entrypoint}
  */
  readonly containerEntrypoint?: string[];
  /**
  * Whether SageMaker AI should publish time-series metrics. SageMaker enables this automatically for built-in algorithms, supported prebuilt images, and jobs with explicit `metric_definitions`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#enable_sagemaker_metrics_time_series SagemakerTrainingJob#enable_sagemaker_metrics_time_series}
  */
  readonly enableSagemakerMetricsTimeSeries?: boolean | cdktn.IResolvable;
  /**
  * Registry path of the training image. Exactly one of `algorithm_name` or `training_image` must be set. Use `metric_definitions` only when you need to extract custom metrics from your own training container logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#training_image SagemakerTrainingJob#training_image}
  */
  readonly trainingImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#training_input_mode SagemakerTrainingJob#training_input_mode}
  */
  readonly trainingInputMode?: string;
  /**
  * metric_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#metric_definitions SagemakerTrainingJob#metric_definitions}
  */
  readonly metricDefinitions?: SagemakerTrainingJobAlgorithmSpecificationMetricDefinitions[] | cdktn.IResolvable;
  /**
  * training_image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#training_image_config SagemakerTrainingJob#training_image_config}
  */
  readonly trainingImageConfig?: SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfig[] | cdktn.IResolvable;
}

export function sagemakerTrainingJobAlgorithmSpecificationToTerraform(struct?: SagemakerTrainingJobAlgorithmSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    algorithm_name: cdktn.stringToTerraform(struct!.algorithmName),
    container_arguments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerArguments),
    container_entrypoint: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerEntrypoint),
    enable_sagemaker_metrics_time_series: cdktn.booleanToTerraform(struct!.enableSagemakerMetricsTimeSeries),
    training_image: cdktn.stringToTerraform(struct!.trainingImage),
    training_input_mode: cdktn.stringToTerraform(struct!.trainingInputMode),
    metric_definitions: cdktn.listMapper(sagemakerTrainingJobAlgorithmSpecificationMetricDefinitionsToTerraform, true)(struct!.metricDefinitions),
    training_image_config: cdktn.listMapper(sagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigToTerraform, true)(struct!.trainingImageConfig),
  }
}


export function sagemakerTrainingJobAlgorithmSpecificationToHclTerraform(struct?: SagemakerTrainingJobAlgorithmSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    algorithm_name: {
      value: cdktn.stringToHclTerraform(struct!.algorithmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_arguments: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerArguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_entrypoint: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerEntrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_sagemaker_metrics_time_series: {
      value: cdktn.booleanToHclTerraform(struct!.enableSagemakerMetricsTimeSeries),
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
    training_input_mode: {
      value: cdktn.stringToHclTerraform(struct!.trainingInputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_definitions: {
      value: cdktn.listMapperHcl(sagemakerTrainingJobAlgorithmSpecificationMetricDefinitionsToHclTerraform, true)(struct!.metricDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerTrainingJobAlgorithmSpecificationMetricDefinitionsList",
    },
    training_image_config: {
      value: cdktn.listMapperHcl(sagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigToHclTerraform, true)(struct!.trainingImageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobAlgorithmSpecificationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobAlgorithmSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmName = this._algorithmName;
    }
    if (this._containerArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerArguments = this._containerArguments;
    }
    if (this._containerEntrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEntrypoint = this._containerEntrypoint;
    }
    if (this._enableSagemakerMetricsTimeSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSagemakerMetricsTimeSeries = this._enableSagemakerMetricsTimeSeries;
    }
    if (this._trainingImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingImage = this._trainingImage;
    }
    if (this._trainingInputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingInputMode = this._trainingInputMode;
    }
    if (this._metricDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDefinitions = this._metricDefinitions?.internalValue;
    }
    if (this._trainingImageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingImageConfig = this._trainingImageConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobAlgorithmSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithmName = undefined;
      this._containerArguments = undefined;
      this._containerEntrypoint = undefined;
      this._enableSagemakerMetricsTimeSeries = undefined;
      this._trainingImage = undefined;
      this._trainingInputMode = undefined;
      this._metricDefinitions.internalValue = undefined;
      this._trainingImageConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithmName = value.algorithmName;
      this._containerArguments = value.containerArguments;
      this._containerEntrypoint = value.containerEntrypoint;
      this._enableSagemakerMetricsTimeSeries = value.enableSagemakerMetricsTimeSeries;
      this._trainingImage = value.trainingImage;
      this._trainingInputMode = value.trainingInputMode;
      this._metricDefinitions.internalValue = value.metricDefinitions;
      this._trainingImageConfig.internalValue = value.trainingImageConfig;
    }
  }

  // algorithm_name - computed: false, optional: true, required: false
  private _algorithmName?: string; 
  public get algorithmName() {
    return this.getStringAttribute('algorithm_name');
  }
  public set algorithmName(value: string) {
    this._algorithmName = value;
  }
  public resetAlgorithmName() {
    this._algorithmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmNameInput() {
    return this._algorithmName;
  }

  // container_arguments - computed: false, optional: true, required: false
  private _containerArguments?: string[]; 
  public get containerArguments() {
    return this.getListAttribute('container_arguments');
  }
  public set containerArguments(value: string[]) {
    this._containerArguments = value;
  }
  public resetContainerArguments() {
    this._containerArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerArgumentsInput() {
    return this._containerArguments;
  }

  // container_entrypoint - computed: false, optional: true, required: false
  private _containerEntrypoint?: string[]; 
  public get containerEntrypoint() {
    return this.getListAttribute('container_entrypoint');
  }
  public set containerEntrypoint(value: string[]) {
    this._containerEntrypoint = value;
  }
  public resetContainerEntrypoint() {
    this._containerEntrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEntrypointInput() {
    return this._containerEntrypoint;
  }

  // enable_sagemaker_metrics_time_series - computed: true, optional: true, required: false
  private _enableSagemakerMetricsTimeSeries?: boolean | cdktn.IResolvable; 
  public get enableSagemakerMetricsTimeSeries() {
    return this.getBooleanAttribute('enable_sagemaker_metrics_time_series');
  }
  public set enableSagemakerMetricsTimeSeries(value: boolean | cdktn.IResolvable) {
    this._enableSagemakerMetricsTimeSeries = value;
  }
  public resetEnableSagemakerMetricsTimeSeries() {
    this._enableSagemakerMetricsTimeSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSagemakerMetricsTimeSeriesInput() {
    return this._enableSagemakerMetricsTimeSeries;
  }

  // training_image - computed: false, optional: true, required: false
  private _trainingImage?: string; 
  public get trainingImage() {
    return this.getStringAttribute('training_image');
  }
  public set trainingImage(value: string) {
    this._trainingImage = value;
  }
  public resetTrainingImage() {
    this._trainingImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingImageInput() {
    return this._trainingImage;
  }

  // training_input_mode - computed: false, optional: true, required: false
  private _trainingInputMode?: string; 
  public get trainingInputMode() {
    return this.getStringAttribute('training_input_mode');
  }
  public set trainingInputMode(value: string) {
    this._trainingInputMode = value;
  }
  public resetTrainingInputMode() {
    this._trainingInputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingInputModeInput() {
    return this._trainingInputMode;
  }

  // metric_definitions - computed: false, optional: true, required: false
  private _metricDefinitions = new SagemakerTrainingJobAlgorithmSpecificationMetricDefinitionsList(this, "metric_definitions", false);
  public get metricDefinitions() {
    return this._metricDefinitions;
  }
  public putMetricDefinitions(value: SagemakerTrainingJobAlgorithmSpecificationMetricDefinitions[] | cdktn.IResolvable) {
    this._metricDefinitions.internalValue = value;
  }
  public resetMetricDefinitions() {
    this._metricDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDefinitionsInput() {
    return this._metricDefinitions.internalValue;
  }

  // training_image_config - computed: false, optional: true, required: false
  private _trainingImageConfig = new SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfigList(this, "training_image_config", false);
  public get trainingImageConfig() {
    return this._trainingImageConfig;
  }
  public putTrainingImageConfig(value: SagemakerTrainingJobAlgorithmSpecificationTrainingImageConfig[] | cdktn.IResolvable) {
    this._trainingImageConfig.internalValue = value;
  }
  public resetTrainingImageConfig() {
    this._trainingImageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingImageConfigInput() {
    return this._trainingImageConfig.internalValue;
  }
}

export class SagemakerTrainingJobAlgorithmSpecificationList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobAlgorithmSpecification[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobAlgorithmSpecificationOutputReference {
    return new SagemakerTrainingJobAlgorithmSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobCheckpointConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#local_path SagemakerTrainingJob#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#s3_uri SagemakerTrainingJob#s3_uri}
  */
  readonly s3Uri: string;
}

export function sagemakerTrainingJobCheckpointConfigToTerraform(struct?: SagemakerTrainingJobCheckpointConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    local_path: cdktn.stringToTerraform(struct!.localPath),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerTrainingJobCheckpointConfigToHclTerraform(struct?: SagemakerTrainingJobCheckpointConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
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

export class SagemakerTrainingJobCheckpointConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobCheckpointConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobCheckpointConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPath = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPath = value.localPath;
      this._s3Uri = value.s3Uri;
    }
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
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

export class SagemakerTrainingJobCheckpointConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobCheckpointConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobCheckpointConfigOutputReference {
    return new SagemakerTrainingJobCheckpointConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobDebugHookConfigCollectionConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#collection_name SagemakerTrainingJob#collection_name}
  */
  readonly collectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#collection_parameters SagemakerTrainingJob#collection_parameters}
  */
  readonly collectionParameters?: { [key: string]: string };
}

export function sagemakerTrainingJobDebugHookConfigCollectionConfigurationsToTerraform(struct?: SagemakerTrainingJobDebugHookConfigCollectionConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    collection_name: cdktn.stringToTerraform(struct!.collectionName),
    collection_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.collectionParameters),
  }
}


export function sagemakerTrainingJobDebugHookConfigCollectionConfigurationsToHclTerraform(struct?: SagemakerTrainingJobDebugHookConfigCollectionConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    collection_name: {
      value: cdktn.stringToHclTerraform(struct!.collectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collection_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.collectionParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobDebugHookConfigCollectionConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobDebugHookConfigCollectionConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionName = this._collectionName;
    }
    if (this._collectionParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionParameters = this._collectionParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobDebugHookConfigCollectionConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionName = undefined;
      this._collectionParameters = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionName = value.collectionName;
      this._collectionParameters = value.collectionParameters;
    }
  }

  // collection_name - computed: false, optional: true, required: false
  private _collectionName?: string; 
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  public resetCollectionName() {
    this._collectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName;
  }

  // collection_parameters - computed: false, optional: true, required: false
  private _collectionParameters?: { [key: string]: string }; 
  public get collectionParameters() {
    return this.getStringMapAttribute('collection_parameters');
  }
  public set collectionParameters(value: { [key: string]: string }) {
    this._collectionParameters = value;
  }
  public resetCollectionParameters() {
    this._collectionParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionParametersInput() {
    return this._collectionParameters;
  }
}

export class SagemakerTrainingJobDebugHookConfigCollectionConfigurationsList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobDebugHookConfigCollectionConfigurations[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobDebugHookConfigCollectionConfigurationsOutputReference {
    return new SagemakerTrainingJobDebugHookConfigCollectionConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobDebugHookConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#hook_parameters SagemakerTrainingJob#hook_parameters}
  */
  readonly hookParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#local_path SagemakerTrainingJob#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#s3_output_path SagemakerTrainingJob#s3_output_path}
  */
  readonly s3OutputPath: string;
  /**
  * collection_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#collection_configurations SagemakerTrainingJob#collection_configurations}
  */
  readonly collectionConfigurations?: SagemakerTrainingJobDebugHookConfigCollectionConfigurations[] | cdktn.IResolvable;
}

export function sagemakerTrainingJobDebugHookConfigToTerraform(struct?: SagemakerTrainingJobDebugHookConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hook_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.hookParameters),
    local_path: cdktn.stringToTerraform(struct!.localPath),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
    collection_configurations: cdktn.listMapper(sagemakerTrainingJobDebugHookConfigCollectionConfigurationsToTerraform, true)(struct!.collectionConfigurations),
  }
}


export function sagemakerTrainingJobDebugHookConfigToHclTerraform(struct?: SagemakerTrainingJobDebugHookConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hook_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.hookParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
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
    collection_configurations: {
      value: cdktn.listMapperHcl(sagemakerTrainingJobDebugHookConfigCollectionConfigurationsToHclTerraform, true)(struct!.collectionConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerTrainingJobDebugHookConfigCollectionConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobDebugHookConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobDebugHookConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hookParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.hookParameters = this._hookParameters;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    if (this._collectionConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionConfigurations = this._collectionConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobDebugHookConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hookParameters = undefined;
      this._localPath = undefined;
      this._s3OutputPath = undefined;
      this._collectionConfigurations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hookParameters = value.hookParameters;
      this._localPath = value.localPath;
      this._s3OutputPath = value.s3OutputPath;
      this._collectionConfigurations.internalValue = value.collectionConfigurations;
    }
  }

  // hook_parameters - computed: false, optional: true, required: false
  private _hookParameters?: { [key: string]: string }; 
  public get hookParameters() {
    return this.getStringMapAttribute('hook_parameters');
  }
  public set hookParameters(value: { [key: string]: string }) {
    this._hookParameters = value;
  }
  public resetHookParameters() {
    this._hookParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hookParametersInput() {
    return this._hookParameters;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
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

  // collection_configurations - computed: false, optional: true, required: false
  private _collectionConfigurations = new SagemakerTrainingJobDebugHookConfigCollectionConfigurationsList(this, "collection_configurations", false);
  public get collectionConfigurations() {
    return this._collectionConfigurations;
  }
  public putCollectionConfigurations(value: SagemakerTrainingJobDebugHookConfigCollectionConfigurations[] | cdktn.IResolvable) {
    this._collectionConfigurations.internalValue = value;
  }
  public resetCollectionConfigurations() {
    this._collectionConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionConfigurationsInput() {
    return this._collectionConfigurations.internalValue;
  }
}

export class SagemakerTrainingJobDebugHookConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobDebugHookConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobDebugHookConfigOutputReference {
    return new SagemakerTrainingJobDebugHookConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobDebugRuleConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#instance_type SagemakerTrainingJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#local_path SagemakerTrainingJob#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#rule_configuration_name SagemakerTrainingJob#rule_configuration_name}
  */
  readonly ruleConfigurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#rule_evaluator_image SagemakerTrainingJob#rule_evaluator_image}
  */
  readonly ruleEvaluatorImage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#rule_parameters SagemakerTrainingJob#rule_parameters}
  */
  readonly ruleParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#s3_output_path SagemakerTrainingJob#s3_output_path}
  */
  readonly s3OutputPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#volume_size_in_gb SagemakerTrainingJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}

export function sagemakerTrainingJobDebugRuleConfigurationsToTerraform(struct?: SagemakerTrainingJobDebugRuleConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    local_path: cdktn.stringToTerraform(struct!.localPath),
    rule_configuration_name: cdktn.stringToTerraform(struct!.ruleConfigurationName),
    rule_evaluator_image: cdktn.stringToTerraform(struct!.ruleEvaluatorImage),
    rule_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.ruleParameters),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function sagemakerTrainingJobDebugRuleConfigurationsToHclTerraform(struct?: SagemakerTrainingJobDebugRuleConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_configuration_name: {
      value: cdktn.stringToHclTerraform(struct!.ruleConfigurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_evaluator_image: {
      value: cdktn.stringToHclTerraform(struct!.ruleEvaluatorImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.ruleParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobDebugRuleConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobDebugRuleConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._ruleConfigurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleConfigurationName = this._ruleConfigurationName;
    }
    if (this._ruleEvaluatorImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleEvaluatorImage = this._ruleEvaluatorImage;
    }
    if (this._ruleParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleParameters = this._ruleParameters;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobDebugRuleConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._localPath = undefined;
      this._ruleConfigurationName = undefined;
      this._ruleEvaluatorImage = undefined;
      this._ruleParameters = undefined;
      this._s3OutputPath = undefined;
      this._volumeSizeInGb = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._localPath = value.localPath;
      this._ruleConfigurationName = value.ruleConfigurationName;
      this._ruleEvaluatorImage = value.ruleEvaluatorImage;
      this._ruleParameters = value.ruleParameters;
      this._s3OutputPath = value.s3OutputPath;
      this._volumeSizeInGb = value.volumeSizeInGb;
    }
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

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // rule_configuration_name - computed: false, optional: false, required: true
  private _ruleConfigurationName?: string; 
  public get ruleConfigurationName() {
    return this.getStringAttribute('rule_configuration_name');
  }
  public set ruleConfigurationName(value: string) {
    this._ruleConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleConfigurationNameInput() {
    return this._ruleConfigurationName;
  }

  // rule_evaluator_image - computed: false, optional: false, required: true
  private _ruleEvaluatorImage?: string; 
  public get ruleEvaluatorImage() {
    return this.getStringAttribute('rule_evaluator_image');
  }
  public set ruleEvaluatorImage(value: string) {
    this._ruleEvaluatorImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleEvaluatorImageInput() {
    return this._ruleEvaluatorImage;
  }

  // rule_parameters - computed: false, optional: true, required: false
  private _ruleParameters?: { [key: string]: string }; 
  public get ruleParameters() {
    return this.getStringMapAttribute('rule_parameters');
  }
  public set ruleParameters(value: { [key: string]: string }) {
    this._ruleParameters = value;
  }
  public resetRuleParameters() {
    this._ruleParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleParametersInput() {
    return this._ruleParameters;
  }

  // s3_output_path - computed: false, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }

  // volume_size_in_gb - computed: true, optional: true, required: false
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
}

export class SagemakerTrainingJobDebugRuleConfigurationsList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobDebugRuleConfigurations[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobDebugRuleConfigurationsOutputReference {
    return new SagemakerTrainingJobDebugRuleConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobExperimentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#experiment_name SagemakerTrainingJob#experiment_name}
  */
  readonly experimentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#run_name SagemakerTrainingJob#run_name}
  */
  readonly runName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#trial_component_display_name SagemakerTrainingJob#trial_component_display_name}
  */
  readonly trialComponentDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#trial_name SagemakerTrainingJob#trial_name}
  */
  readonly trialName?: string;
}

export function sagemakerTrainingJobExperimentConfigToTerraform(struct?: SagemakerTrainingJobExperimentConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    experiment_name: cdktn.stringToTerraform(struct!.experimentName),
    run_name: cdktn.stringToTerraform(struct!.runName),
    trial_component_display_name: cdktn.stringToTerraform(struct!.trialComponentDisplayName),
    trial_name: cdktn.stringToTerraform(struct!.trialName),
  }
}


export function sagemakerTrainingJobExperimentConfigToHclTerraform(struct?: SagemakerTrainingJobExperimentConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    experiment_name: {
      value: cdktn.stringToHclTerraform(struct!.experimentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_name: {
      value: cdktn.stringToHclTerraform(struct!.runName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trial_component_display_name: {
      value: cdktn.stringToHclTerraform(struct!.trialComponentDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trial_name: {
      value: cdktn.stringToHclTerraform(struct!.trialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobExperimentConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobExperimentConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._experimentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentName = this._experimentName;
    }
    if (this._runName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runName = this._runName;
    }
    if (this._trialComponentDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trialComponentDisplayName = this._trialComponentDisplayName;
    }
    if (this._trialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trialName = this._trialName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobExperimentConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._experimentName = undefined;
      this._runName = undefined;
      this._trialComponentDisplayName = undefined;
      this._trialName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._experimentName = value.experimentName;
      this._runName = value.runName;
      this._trialComponentDisplayName = value.trialComponentDisplayName;
      this._trialName = value.trialName;
    }
  }

  // experiment_name - computed: false, optional: true, required: false
  private _experimentName?: string; 
  public get experimentName() {
    return this.getStringAttribute('experiment_name');
  }
  public set experimentName(value: string) {
    this._experimentName = value;
  }
  public resetExperimentName() {
    this._experimentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentNameInput() {
    return this._experimentName;
  }

  // run_name - computed: false, optional: true, required: false
  private _runName?: string; 
  public get runName() {
    return this.getStringAttribute('run_name');
  }
  public set runName(value: string) {
    this._runName = value;
  }
  public resetRunName() {
    this._runName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runNameInput() {
    return this._runName;
  }

  // trial_component_display_name - computed: false, optional: true, required: false
  private _trialComponentDisplayName?: string; 
  public get trialComponentDisplayName() {
    return this.getStringAttribute('trial_component_display_name');
  }
  public set trialComponentDisplayName(value: string) {
    this._trialComponentDisplayName = value;
  }
  public resetTrialComponentDisplayName() {
    this._trialComponentDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trialComponentDisplayNameInput() {
    return this._trialComponentDisplayName;
  }

  // trial_name - computed: false, optional: true, required: false
  private _trialName?: string; 
  public get trialName() {
    return this.getStringAttribute('trial_name');
  }
  public set trialName(value: string) {
    this._trialName = value;
  }
  public resetTrialName() {
    this._trialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trialNameInput() {
    return this._trialName;
  }
}

export class SagemakerTrainingJobExperimentConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobExperimentConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobExperimentConfigOutputReference {
    return new SagemakerTrainingJobExperimentConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobInfraCheckConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#enable_infra_check SagemakerTrainingJob#enable_infra_check}
  */
  readonly enableInfraCheck?: boolean | cdktn.IResolvable;
}

export function sagemakerTrainingJobInfraCheckConfigToTerraform(struct?: SagemakerTrainingJobInfraCheckConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_infra_check: cdktn.booleanToTerraform(struct!.enableInfraCheck),
  }
}


export function sagemakerTrainingJobInfraCheckConfigToHclTerraform(struct?: SagemakerTrainingJobInfraCheckConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_infra_check: {
      value: cdktn.booleanToHclTerraform(struct!.enableInfraCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobInfraCheckConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobInfraCheckConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInfraCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInfraCheck = this._enableInfraCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobInfraCheckConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableInfraCheck = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableInfraCheck = value.enableInfraCheck;
    }
  }

  // enable_infra_check - computed: false, optional: true, required: false
  private _enableInfraCheck?: boolean | cdktn.IResolvable; 
  public get enableInfraCheck() {
    return this.getBooleanAttribute('enable_infra_check');
  }
  public set enableInfraCheck(value: boolean | cdktn.IResolvable) {
    this._enableInfraCheck = value;
  }
  public resetEnableInfraCheck() {
    this._enableInfraCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInfraCheckInput() {
    return this._enableInfraCheck;
  }
}

export class SagemakerTrainingJobInfraCheckConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobInfraCheckConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobInfraCheckConfigOutputReference {
    return new SagemakerTrainingJobInfraCheckConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#directory_path SagemakerTrainingJob#directory_path}
  */
  readonly directoryPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#file_system_access_mode SagemakerTrainingJob#file_system_access_mode}
  */
  readonly fileSystemAccessMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#file_system_id SagemakerTrainingJob#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#file_system_type SagemakerTrainingJob#file_system_type}
  */
  readonly fileSystemType: string;
}

export function sagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSourceToTerraform(struct?: SagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSource | cdktn.IResolvable): any {
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


export function sagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSourceToHclTerraform(struct?: SagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSource | cdktn.IResolvable): any {
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

export class SagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSource | cdktn.IResolvable | undefined) {
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

export class SagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSourceOutputReference {
    return new SagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#hub_content_arn SagemakerTrainingJob#hub_content_arn}
  */
  readonly hubContentArn: string;
}

export function sagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfigToTerraform(struct?: SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hub_content_arn: cdktn.stringToTerraform(struct!.hubContentArn),
  }
}


export function sagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfigToHclTerraform(struct?: SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable): any {
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

export class SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfig | cdktn.IResolvable | undefined) {
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

  // hub_content_arn - computed: false, optional: false, required: true
  private _hubContentArn?: string; 
  public get hubContentArn() {
    return this.getStringAttribute('hub_content_arn');
  }
  public set hubContentArn(value: string) {
    this._hubContentArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubContentArnInput() {
    return this._hubContentArn;
  }
}

export class SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfigOutputReference {
    return new SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#accept_eula SagemakerTrainingJob#accept_eula}
  */
  readonly acceptEula: boolean | cdktn.IResolvable;
}

export function sagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfigToTerraform(struct?: SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
  }
}


export function sagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct?: SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable): any {
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

export class SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable | undefined) {
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

  // accept_eula - computed: false, optional: false, required: true
  private _acceptEula?: boolean | cdktn.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktn.IResolvable) {
    this._acceptEula = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}

export class SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfigOutputReference {
    return new SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobInputDataConfigDataSourceS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#attribute_names SagemakerTrainingJob#attribute_names}
  */
  readonly attributeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#instance_group_names SagemakerTrainingJob#instance_group_names}
  */
  readonly instanceGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#s3_data_distribution_type SagemakerTrainingJob#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#s3_data_type SagemakerTrainingJob#s3_data_type}
  */
  readonly s3DataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#s3_uri SagemakerTrainingJob#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * hub_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#hub_access_config SagemakerTrainingJob#hub_access_config}
  */
  readonly hubAccessConfig?: SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfig[] | cdktn.IResolvable;
  /**
  * model_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#model_access_config SagemakerTrainingJob#model_access_config}
  */
  readonly modelAccessConfig?: SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfig[] | cdktn.IResolvable;
}

export function sagemakerTrainingJobInputDataConfigDataSourceS3DataSourceToTerraform(struct?: SagemakerTrainingJobInputDataConfigDataSourceS3DataSource | cdktn.IResolvable): any {
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
    hub_access_config: cdktn.listMapper(sagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfigToTerraform, true)(struct!.hubAccessConfig),
    model_access_config: cdktn.listMapper(sagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfigToTerraform, true)(struct!.modelAccessConfig),
  }
}


export function sagemakerTrainingJobInputDataConfigDataSourceS3DataSourceToHclTerraform(struct?: SagemakerTrainingJobInputDataConfigDataSourceS3DataSource | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(sagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfigToHclTerraform, true)(struct!.hubAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfigList",
    },
    model_access_config: {
      value: cdktn.listMapperHcl(sagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfigToHclTerraform, true)(struct!.modelAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobInputDataConfigDataSourceS3DataSource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerTrainingJobInputDataConfigDataSourceS3DataSource | cdktn.IResolvable | undefined) {
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
  private _hubAccessConfig = new SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfigList(this, "hub_access_config", false);
  public get hubAccessConfig() {
    return this._hubAccessConfig;
  }
  public putHubAccessConfig(value: SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceHubAccessConfig[] | cdktn.IResolvable) {
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
  private _modelAccessConfig = new SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfigList(this, "model_access_config", false);
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceModelAccessConfig[] | cdktn.IResolvable) {
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

export class SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobInputDataConfigDataSourceS3DataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceOutputReference {
    return new SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobInputDataConfigDataSource {
  /**
  * file_system_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#file_system_data_source SagemakerTrainingJob#file_system_data_source}
  */
  readonly fileSystemDataSource?: SagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSource[] | cdktn.IResolvable;
  /**
  * s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#s3_data_source SagemakerTrainingJob#s3_data_source}
  */
  readonly s3DataSource?: SagemakerTrainingJobInputDataConfigDataSourceS3DataSource[] | cdktn.IResolvable;
}

export function sagemakerTrainingJobInputDataConfigDataSourceToTerraform(struct?: SagemakerTrainingJobInputDataConfigDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_data_source: cdktn.listMapper(sagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSourceToTerraform, true)(struct!.fileSystemDataSource),
    s3_data_source: cdktn.listMapper(sagemakerTrainingJobInputDataConfigDataSourceS3DataSourceToTerraform, true)(struct!.s3DataSource),
  }
}


export function sagemakerTrainingJobInputDataConfigDataSourceToHclTerraform(struct?: SagemakerTrainingJobInputDataConfigDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_data_source: {
      value: cdktn.listMapperHcl(sagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSourceToHclTerraform, true)(struct!.fileSystemDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSourceList",
    },
    s3_data_source: {
      value: cdktn.listMapperHcl(sagemakerTrainingJobInputDataConfigDataSourceS3DataSourceToHclTerraform, true)(struct!.s3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobInputDataConfigDataSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobInputDataConfigDataSource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerTrainingJobInputDataConfigDataSource | cdktn.IResolvable | undefined) {
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
  private _fileSystemDataSource = new SagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSourceList(this, "file_system_data_source", false);
  public get fileSystemDataSource() {
    return this._fileSystemDataSource;
  }
  public putFileSystemDataSource(value: SagemakerTrainingJobInputDataConfigDataSourceFileSystemDataSource[] | cdktn.IResolvable) {
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
  private _s3DataSource = new SagemakerTrainingJobInputDataConfigDataSourceS3DataSourceList(this, "s3_data_source", false);
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: SagemakerTrainingJobInputDataConfigDataSourceS3DataSource[] | cdktn.IResolvable) {
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

export class SagemakerTrainingJobInputDataConfigDataSourceList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobInputDataConfigDataSource[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobInputDataConfigDataSourceOutputReference {
    return new SagemakerTrainingJobInputDataConfigDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobInputDataConfigShuffleConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#seed SagemakerTrainingJob#seed}
  */
  readonly seed?: number;
}

export function sagemakerTrainingJobInputDataConfigShuffleConfigToTerraform(struct?: SagemakerTrainingJobInputDataConfigShuffleConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    seed: cdktn.numberToTerraform(struct!.seed),
  }
}


export function sagemakerTrainingJobInputDataConfigShuffleConfigToHclTerraform(struct?: SagemakerTrainingJobInputDataConfigShuffleConfig | cdktn.IResolvable): any {
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

export class SagemakerTrainingJobInputDataConfigShuffleConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobInputDataConfigShuffleConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerTrainingJobInputDataConfigShuffleConfig | cdktn.IResolvable | undefined) {
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

  // seed - computed: false, optional: true, required: false
  private _seed?: number; 
  public get seed() {
    return this.getNumberAttribute('seed');
  }
  public set seed(value: number) {
    this._seed = value;
  }
  public resetSeed() {
    this._seed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }
}

export class SagemakerTrainingJobInputDataConfigShuffleConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobInputDataConfigShuffleConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobInputDataConfigShuffleConfigOutputReference {
    return new SagemakerTrainingJobInputDataConfigShuffleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobInputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#channel_name SagemakerTrainingJob#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#compression_type SagemakerTrainingJob#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#content_type SagemakerTrainingJob#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#input_mode SagemakerTrainingJob#input_mode}
  */
  readonly inputMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#record_wrapper_type SagemakerTrainingJob#record_wrapper_type}
  */
  readonly recordWrapperType?: string;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#data_source SagemakerTrainingJob#data_source}
  */
  readonly dataSource?: SagemakerTrainingJobInputDataConfigDataSource[] | cdktn.IResolvable;
  /**
  * shuffle_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#shuffle_config SagemakerTrainingJob#shuffle_config}
  */
  readonly shuffleConfig?: SagemakerTrainingJobInputDataConfigShuffleConfig[] | cdktn.IResolvable;
}

export function sagemakerTrainingJobInputDataConfigToTerraform(struct?: SagemakerTrainingJobInputDataConfig | cdktn.IResolvable): any {
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
    data_source: cdktn.listMapper(sagemakerTrainingJobInputDataConfigDataSourceToTerraform, true)(struct!.dataSource),
    shuffle_config: cdktn.listMapper(sagemakerTrainingJobInputDataConfigShuffleConfigToTerraform, true)(struct!.shuffleConfig),
  }
}


export function sagemakerTrainingJobInputDataConfigToHclTerraform(struct?: SagemakerTrainingJobInputDataConfig | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(sagemakerTrainingJobInputDataConfigDataSourceToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerTrainingJobInputDataConfigDataSourceList",
    },
    shuffle_config: {
      value: cdktn.listMapperHcl(sagemakerTrainingJobInputDataConfigShuffleConfigToHclTerraform, true)(struct!.shuffleConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerTrainingJobInputDataConfigShuffleConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobInputDataConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobInputDataConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerTrainingJobInputDataConfig | cdktn.IResolvable | undefined) {
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

  // content_type - computed: true, optional: true, required: false
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

  // record_wrapper_type - computed: true, optional: true, required: false
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
  private _dataSource = new SagemakerTrainingJobInputDataConfigDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: SagemakerTrainingJobInputDataConfigDataSource[] | cdktn.IResolvable) {
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
  private _shuffleConfig = new SagemakerTrainingJobInputDataConfigShuffleConfigList(this, "shuffle_config", false);
  public get shuffleConfig() {
    return this._shuffleConfig;
  }
  public putShuffleConfig(value: SagemakerTrainingJobInputDataConfigShuffleConfig[] | cdktn.IResolvable) {
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

export class SagemakerTrainingJobInputDataConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobInputDataConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobInputDataConfigOutputReference {
    return new SagemakerTrainingJobInputDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobMlflowConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#mlflow_experiment_name SagemakerTrainingJob#mlflow_experiment_name}
  */
  readonly mlflowExperimentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#mlflow_resource_arn SagemakerTrainingJob#mlflow_resource_arn}
  */
  readonly mlflowResourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#mlflow_run_name SagemakerTrainingJob#mlflow_run_name}
  */
  readonly mlflowRunName?: string;
}

export function sagemakerTrainingJobMlflowConfigToTerraform(struct?: SagemakerTrainingJobMlflowConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mlflow_experiment_name: cdktn.stringToTerraform(struct!.mlflowExperimentName),
    mlflow_resource_arn: cdktn.stringToTerraform(struct!.mlflowResourceArn),
    mlflow_run_name: cdktn.stringToTerraform(struct!.mlflowRunName),
  }
}


export function sagemakerTrainingJobMlflowConfigToHclTerraform(struct?: SagemakerTrainingJobMlflowConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mlflow_experiment_name: {
      value: cdktn.stringToHclTerraform(struct!.mlflowExperimentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mlflow_resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.mlflowResourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mlflow_run_name: {
      value: cdktn.stringToHclTerraform(struct!.mlflowRunName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobMlflowConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobMlflowConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mlflowExperimentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlflowExperimentName = this._mlflowExperimentName;
    }
    if (this._mlflowResourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlflowResourceArn = this._mlflowResourceArn;
    }
    if (this._mlflowRunName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlflowRunName = this._mlflowRunName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobMlflowConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mlflowExperimentName = undefined;
      this._mlflowResourceArn = undefined;
      this._mlflowRunName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mlflowExperimentName = value.mlflowExperimentName;
      this._mlflowResourceArn = value.mlflowResourceArn;
      this._mlflowRunName = value.mlflowRunName;
    }
  }

  // mlflow_experiment_name - computed: false, optional: true, required: false
  private _mlflowExperimentName?: string; 
  public get mlflowExperimentName() {
    return this.getStringAttribute('mlflow_experiment_name');
  }
  public set mlflowExperimentName(value: string) {
    this._mlflowExperimentName = value;
  }
  public resetMlflowExperimentName() {
    this._mlflowExperimentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlflowExperimentNameInput() {
    return this._mlflowExperimentName;
  }

  // mlflow_resource_arn - computed: false, optional: false, required: true
  private _mlflowResourceArn?: string; 
  public get mlflowResourceArn() {
    return this.getStringAttribute('mlflow_resource_arn');
  }
  public set mlflowResourceArn(value: string) {
    this._mlflowResourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mlflowResourceArnInput() {
    return this._mlflowResourceArn;
  }

  // mlflow_run_name - computed: false, optional: true, required: false
  private _mlflowRunName?: string; 
  public get mlflowRunName() {
    return this.getStringAttribute('mlflow_run_name');
  }
  public set mlflowRunName(value: string) {
    this._mlflowRunName = value;
  }
  public resetMlflowRunName() {
    this._mlflowRunName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlflowRunNameInput() {
    return this._mlflowRunName;
  }
}

export class SagemakerTrainingJobMlflowConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobMlflowConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobMlflowConfigOutputReference {
    return new SagemakerTrainingJobMlflowConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobModelPackageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#model_package_group_arn SagemakerTrainingJob#model_package_group_arn}
  */
  readonly modelPackageGroupArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#source_model_package_arn SagemakerTrainingJob#source_model_package_arn}
  */
  readonly sourceModelPackageArn?: string;
}

export function sagemakerTrainingJobModelPackageConfigToTerraform(struct?: SagemakerTrainingJobModelPackageConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_package_group_arn: cdktn.stringToTerraform(struct!.modelPackageGroupArn),
    source_model_package_arn: cdktn.stringToTerraform(struct!.sourceModelPackageArn),
  }
}


export function sagemakerTrainingJobModelPackageConfigToHclTerraform(struct?: SagemakerTrainingJobModelPackageConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_package_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.modelPackageGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_model_package_arn: {
      value: cdktn.stringToHclTerraform(struct!.sourceModelPackageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobModelPackageConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobModelPackageConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelPackageGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelPackageGroupArn = this._modelPackageGroupArn;
    }
    if (this._sourceModelPackageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceModelPackageArn = this._sourceModelPackageArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobModelPackageConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelPackageGroupArn = undefined;
      this._sourceModelPackageArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelPackageGroupArn = value.modelPackageGroupArn;
      this._sourceModelPackageArn = value.sourceModelPackageArn;
    }
  }

  // model_package_group_arn - computed: false, optional: false, required: true
  private _modelPackageGroupArn?: string; 
  public get modelPackageGroupArn() {
    return this.getStringAttribute('model_package_group_arn');
  }
  public set modelPackageGroupArn(value: string) {
    this._modelPackageGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageGroupArnInput() {
    return this._modelPackageGroupArn;
  }

  // source_model_package_arn - computed: false, optional: true, required: false
  private _sourceModelPackageArn?: string; 
  public get sourceModelPackageArn() {
    return this.getStringAttribute('source_model_package_arn');
  }
  public set sourceModelPackageArn(value: string) {
    this._sourceModelPackageArn = value;
  }
  public resetSourceModelPackageArn() {
    this._sourceModelPackageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceModelPackageArnInput() {
    return this._sourceModelPackageArn;
  }
}

export class SagemakerTrainingJobModelPackageConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobModelPackageConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobModelPackageConfigOutputReference {
    return new SagemakerTrainingJobModelPackageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobOutputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#compression_type SagemakerTrainingJob#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#kms_key_id SagemakerTrainingJob#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#s3_output_path SagemakerTrainingJob#s3_output_path}
  */
  readonly s3OutputPath: string;
}

export function sagemakerTrainingJobOutputDataConfigToTerraform(struct?: SagemakerTrainingJobOutputDataConfig | cdktn.IResolvable): any {
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


export function sagemakerTrainingJobOutputDataConfigToHclTerraform(struct?: SagemakerTrainingJobOutputDataConfig | cdktn.IResolvable): any {
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

export class SagemakerTrainingJobOutputDataConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobOutputDataConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerTrainingJobOutputDataConfig | cdktn.IResolvable | undefined) {
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

  // kms_key_id - computed: true, optional: true, required: false
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

export class SagemakerTrainingJobOutputDataConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobOutputDataConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobOutputDataConfigOutputReference {
    return new SagemakerTrainingJobOutputDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobProfilerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#disable_profiler SagemakerTrainingJob#disable_profiler}
  */
  readonly disableProfiler?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#profiling_interval_in_milliseconds SagemakerTrainingJob#profiling_interval_in_milliseconds}
  */
  readonly profilingIntervalInMilliseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#profiling_parameters SagemakerTrainingJob#profiling_parameters}
  */
  readonly profilingParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#s3_output_path SagemakerTrainingJob#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function sagemakerTrainingJobProfilerConfigToTerraform(struct?: SagemakerTrainingJobProfilerConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_profiler: cdktn.booleanToTerraform(struct!.disableProfiler),
    profiling_interval_in_milliseconds: cdktn.numberToTerraform(struct!.profilingIntervalInMilliseconds),
    profiling_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.profilingParameters),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
  }
}


export function sagemakerTrainingJobProfilerConfigToHclTerraform(struct?: SagemakerTrainingJobProfilerConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_profiler: {
      value: cdktn.booleanToHclTerraform(struct!.disableProfiler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    profiling_interval_in_milliseconds: {
      value: cdktn.numberToHclTerraform(struct!.profilingIntervalInMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profiling_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.profilingParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class SagemakerTrainingJobProfilerConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobProfilerConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableProfiler !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableProfiler = this._disableProfiler;
    }
    if (this._profilingIntervalInMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilingIntervalInMilliseconds = this._profilingIntervalInMilliseconds;
    }
    if (this._profilingParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilingParameters = this._profilingParameters;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobProfilerConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableProfiler = undefined;
      this._profilingIntervalInMilliseconds = undefined;
      this._profilingParameters = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableProfiler = value.disableProfiler;
      this._profilingIntervalInMilliseconds = value.profilingIntervalInMilliseconds;
      this._profilingParameters = value.profilingParameters;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // disable_profiler - computed: false, optional: true, required: false
  private _disableProfiler?: boolean | cdktn.IResolvable; 
  public get disableProfiler() {
    return this.getBooleanAttribute('disable_profiler');
  }
  public set disableProfiler(value: boolean | cdktn.IResolvable) {
    this._disableProfiler = value;
  }
  public resetDisableProfiler() {
    this._disableProfiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProfilerInput() {
    return this._disableProfiler;
  }

  // profiling_interval_in_milliseconds - computed: false, optional: true, required: false
  private _profilingIntervalInMilliseconds?: number; 
  public get profilingIntervalInMilliseconds() {
    return this.getNumberAttribute('profiling_interval_in_milliseconds');
  }
  public set profilingIntervalInMilliseconds(value: number) {
    this._profilingIntervalInMilliseconds = value;
  }
  public resetProfilingIntervalInMilliseconds() {
    this._profilingIntervalInMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingIntervalInMillisecondsInput() {
    return this._profilingIntervalInMilliseconds;
  }

  // profiling_parameters - computed: false, optional: true, required: false
  private _profilingParameters?: { [key: string]: string }; 
  public get profilingParameters() {
    return this.getStringMapAttribute('profiling_parameters');
  }
  public set profilingParameters(value: { [key: string]: string }) {
    this._profilingParameters = value;
  }
  public resetProfilingParameters() {
    this._profilingParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingParametersInput() {
    return this._profilingParameters;
  }

  // s3_output_path - computed: false, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}

export class SagemakerTrainingJobProfilerConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobProfilerConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobProfilerConfigOutputReference {
    return new SagemakerTrainingJobProfilerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobProfilerRuleConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#instance_type SagemakerTrainingJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#local_path SagemakerTrainingJob#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#rule_configuration_name SagemakerTrainingJob#rule_configuration_name}
  */
  readonly ruleConfigurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#rule_evaluator_image SagemakerTrainingJob#rule_evaluator_image}
  */
  readonly ruleEvaluatorImage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#rule_parameters SagemakerTrainingJob#rule_parameters}
  */
  readonly ruleParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#s3_output_path SagemakerTrainingJob#s3_output_path}
  */
  readonly s3OutputPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#volume_size_in_gb SagemakerTrainingJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}

export function sagemakerTrainingJobProfilerRuleConfigurationsToTerraform(struct?: SagemakerTrainingJobProfilerRuleConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    local_path: cdktn.stringToTerraform(struct!.localPath),
    rule_configuration_name: cdktn.stringToTerraform(struct!.ruleConfigurationName),
    rule_evaluator_image: cdktn.stringToTerraform(struct!.ruleEvaluatorImage),
    rule_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.ruleParameters),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function sagemakerTrainingJobProfilerRuleConfigurationsToHclTerraform(struct?: SagemakerTrainingJobProfilerRuleConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_configuration_name: {
      value: cdktn.stringToHclTerraform(struct!.ruleConfigurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_evaluator_image: {
      value: cdktn.stringToHclTerraform(struct!.ruleEvaluatorImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.ruleParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobProfilerRuleConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobProfilerRuleConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._ruleConfigurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleConfigurationName = this._ruleConfigurationName;
    }
    if (this._ruleEvaluatorImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleEvaluatorImage = this._ruleEvaluatorImage;
    }
    if (this._ruleParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleParameters = this._ruleParameters;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobProfilerRuleConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._localPath = undefined;
      this._ruleConfigurationName = undefined;
      this._ruleEvaluatorImage = undefined;
      this._ruleParameters = undefined;
      this._s3OutputPath = undefined;
      this._volumeSizeInGb = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._localPath = value.localPath;
      this._ruleConfigurationName = value.ruleConfigurationName;
      this._ruleEvaluatorImage = value.ruleEvaluatorImage;
      this._ruleParameters = value.ruleParameters;
      this._s3OutputPath = value.s3OutputPath;
      this._volumeSizeInGb = value.volumeSizeInGb;
    }
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

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // rule_configuration_name - computed: false, optional: false, required: true
  private _ruleConfigurationName?: string; 
  public get ruleConfigurationName() {
    return this.getStringAttribute('rule_configuration_name');
  }
  public set ruleConfigurationName(value: string) {
    this._ruleConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleConfigurationNameInput() {
    return this._ruleConfigurationName;
  }

  // rule_evaluator_image - computed: false, optional: false, required: true
  private _ruleEvaluatorImage?: string; 
  public get ruleEvaluatorImage() {
    return this.getStringAttribute('rule_evaluator_image');
  }
  public set ruleEvaluatorImage(value: string) {
    this._ruleEvaluatorImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleEvaluatorImageInput() {
    return this._ruleEvaluatorImage;
  }

  // rule_parameters - computed: false, optional: true, required: false
  private _ruleParameters?: { [key: string]: string }; 
  public get ruleParameters() {
    return this.getStringMapAttribute('rule_parameters');
  }
  public set ruleParameters(value: { [key: string]: string }) {
    this._ruleParameters = value;
  }
  public resetRuleParameters() {
    this._ruleParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleParametersInput() {
    return this._ruleParameters;
  }

  // s3_output_path - computed: false, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }

  // volume_size_in_gb - computed: true, optional: true, required: false
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
}

export class SagemakerTrainingJobProfilerRuleConfigurationsList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobProfilerRuleConfigurations[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobProfilerRuleConfigurationsOutputReference {
    return new SagemakerTrainingJobProfilerRuleConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobRemoteDebugConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#enable_remote_debug SagemakerTrainingJob#enable_remote_debug}
  */
  readonly enableRemoteDebug?: boolean | cdktn.IResolvable;
}

export function sagemakerTrainingJobRemoteDebugConfigToTerraform(struct?: SagemakerTrainingJobRemoteDebugConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_remote_debug: cdktn.booleanToTerraform(struct!.enableRemoteDebug),
  }
}


export function sagemakerTrainingJobRemoteDebugConfigToHclTerraform(struct?: SagemakerTrainingJobRemoteDebugConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_remote_debug: {
      value: cdktn.booleanToHclTerraform(struct!.enableRemoteDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobRemoteDebugConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobRemoteDebugConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableRemoteDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRemoteDebug = this._enableRemoteDebug;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobRemoteDebugConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableRemoteDebug = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableRemoteDebug = value.enableRemoteDebug;
    }
  }

  // enable_remote_debug - computed: false, optional: true, required: false
  private _enableRemoteDebug?: boolean | cdktn.IResolvable; 
  public get enableRemoteDebug() {
    return this.getBooleanAttribute('enable_remote_debug');
  }
  public set enableRemoteDebug(value: boolean | cdktn.IResolvable) {
    this._enableRemoteDebug = value;
  }
  public resetEnableRemoteDebug() {
    this._enableRemoteDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRemoteDebugInput() {
    return this._enableRemoteDebug;
  }
}

export class SagemakerTrainingJobRemoteDebugConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobRemoteDebugConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobRemoteDebugConfigOutputReference {
    return new SagemakerTrainingJobRemoteDebugConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobResourceConfigInstanceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#instance_count SagemakerTrainingJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#instance_group_name SagemakerTrainingJob#instance_group_name}
  */
  readonly instanceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#instance_type SagemakerTrainingJob#instance_type}
  */
  readonly instanceType?: string;
}

export function sagemakerTrainingJobResourceConfigInstanceGroupsToTerraform(struct?: SagemakerTrainingJobResourceConfigInstanceGroups | cdktn.IResolvable): any {
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


export function sagemakerTrainingJobResourceConfigInstanceGroupsToHclTerraform(struct?: SagemakerTrainingJobResourceConfigInstanceGroups | cdktn.IResolvable): any {
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

export class SagemakerTrainingJobResourceConfigInstanceGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobResourceConfigInstanceGroups | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerTrainingJobResourceConfigInstanceGroups | cdktn.IResolvable | undefined) {
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

  // instance_group_name - computed: false, optional: true, required: false
  private _instanceGroupName?: string; 
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }
  public set instanceGroupName(value: string) {
    this._instanceGroupName = value;
  }
  public resetInstanceGroupName() {
    this._instanceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNameInput() {
    return this._instanceGroupName;
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
}

export class SagemakerTrainingJobResourceConfigInstanceGroupsList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobResourceConfigInstanceGroups[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobResourceConfigInstanceGroupsOutputReference {
    return new SagemakerTrainingJobResourceConfigInstanceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#instance_count SagemakerTrainingJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#ultra_server_id SagemakerTrainingJob#ultra_server_id}
  */
  readonly ultraServerId?: string;
}

export function sagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecificationsToTerraform(struct?: SagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    ultra_server_id: cdktn.stringToTerraform(struct!.ultraServerId),
  }
}


export function sagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecificationsToHclTerraform(struct?: SagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecifications | cdktn.IResolvable): any {
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

export class SagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecifications | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecifications | cdktn.IResolvable | undefined) {
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

export class SagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecificationsList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecifications[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecificationsOutputReference {
    return new SagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobResourceConfigInstancePlacementConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#enable_multiple_jobs SagemakerTrainingJob#enable_multiple_jobs}
  */
  readonly enableMultipleJobs?: boolean | cdktn.IResolvable;
  /**
  * placement_specifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#placement_specifications SagemakerTrainingJob#placement_specifications}
  */
  readonly placementSpecifications?: SagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecifications[] | cdktn.IResolvable;
}

export function sagemakerTrainingJobResourceConfigInstancePlacementConfigToTerraform(struct?: SagemakerTrainingJobResourceConfigInstancePlacementConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_multiple_jobs: cdktn.booleanToTerraform(struct!.enableMultipleJobs),
    placement_specifications: cdktn.listMapper(sagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecificationsToTerraform, true)(struct!.placementSpecifications),
  }
}


export function sagemakerTrainingJobResourceConfigInstancePlacementConfigToHclTerraform(struct?: SagemakerTrainingJobResourceConfigInstancePlacementConfig | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(sagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecificationsToHclTerraform, true)(struct!.placementSpecifications),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobResourceConfigInstancePlacementConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobResourceConfigInstancePlacementConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerTrainingJobResourceConfigInstancePlacementConfig | cdktn.IResolvable | undefined) {
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
  private _placementSpecifications = new SagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecificationsList(this, "placement_specifications", false);
  public get placementSpecifications() {
    return this._placementSpecifications;
  }
  public putPlacementSpecifications(value: SagemakerTrainingJobResourceConfigInstancePlacementConfigPlacementSpecifications[] | cdktn.IResolvable) {
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

export class SagemakerTrainingJobResourceConfigInstancePlacementConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobResourceConfigInstancePlacementConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobResourceConfigInstancePlacementConfigOutputReference {
    return new SagemakerTrainingJobResourceConfigInstancePlacementConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobResourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#instance_count SagemakerTrainingJob#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#instance_type SagemakerTrainingJob#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#keep_alive_period_in_seconds SagemakerTrainingJob#keep_alive_period_in_seconds}
  */
  readonly keepAlivePeriodInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#training_plan_arn SagemakerTrainingJob#training_plan_arn}
  */
  readonly trainingPlanArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#volume_kms_key_id SagemakerTrainingJob#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#volume_size_in_gb SagemakerTrainingJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
  /**
  * instance_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#instance_groups SagemakerTrainingJob#instance_groups}
  */
  readonly instanceGroups?: SagemakerTrainingJobResourceConfigInstanceGroups[] | cdktn.IResolvable;
  /**
  * instance_placement_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#instance_placement_config SagemakerTrainingJob#instance_placement_config}
  */
  readonly instancePlacementConfig?: SagemakerTrainingJobResourceConfigInstancePlacementConfig[] | cdktn.IResolvable;
}

export function sagemakerTrainingJobResourceConfigToTerraform(struct?: SagemakerTrainingJobResourceConfig | cdktn.IResolvable): any {
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
    instance_groups: cdktn.listMapper(sagemakerTrainingJobResourceConfigInstanceGroupsToTerraform, true)(struct!.instanceGroups),
    instance_placement_config: cdktn.listMapper(sagemakerTrainingJobResourceConfigInstancePlacementConfigToTerraform, true)(struct!.instancePlacementConfig),
  }
}


export function sagemakerTrainingJobResourceConfigToHclTerraform(struct?: SagemakerTrainingJobResourceConfig | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(sagemakerTrainingJobResourceConfigInstanceGroupsToHclTerraform, true)(struct!.instanceGroups),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerTrainingJobResourceConfigInstanceGroupsList",
    },
    instance_placement_config: {
      value: cdktn.listMapperHcl(sagemakerTrainingJobResourceConfigInstancePlacementConfigToHclTerraform, true)(struct!.instancePlacementConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerTrainingJobResourceConfigInstancePlacementConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobResourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobResourceConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerTrainingJobResourceConfig | cdktn.IResolvable | undefined) {
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

  // instance_count - computed: true, optional: true, required: false
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

  // instance_type - computed: true, optional: true, required: false
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

  // volume_size_in_gb - computed: true, optional: true, required: false
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
  private _instanceGroups = new SagemakerTrainingJobResourceConfigInstanceGroupsList(this, "instance_groups", false);
  public get instanceGroups() {
    return this._instanceGroups;
  }
  public putInstanceGroups(value: SagemakerTrainingJobResourceConfigInstanceGroups[] | cdktn.IResolvable) {
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
  private _instancePlacementConfig = new SagemakerTrainingJobResourceConfigInstancePlacementConfigList(this, "instance_placement_config", false);
  public get instancePlacementConfig() {
    return this._instancePlacementConfig;
  }
  public putInstancePlacementConfig(value: SagemakerTrainingJobResourceConfigInstancePlacementConfig[] | cdktn.IResolvable) {
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

export class SagemakerTrainingJobResourceConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobResourceConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobResourceConfigOutputReference {
    return new SagemakerTrainingJobResourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobRetryStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#maximum_retry_attempts SagemakerTrainingJob#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts: number;
}

export function sagemakerTrainingJobRetryStrategyToTerraform(struct?: SagemakerTrainingJobRetryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_retry_attempts: cdktn.numberToTerraform(struct!.maximumRetryAttempts),
  }
}


export function sagemakerTrainingJobRetryStrategyToHclTerraform(struct?: SagemakerTrainingJobRetryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_retry_attempts: {
      value: cdktn.numberToHclTerraform(struct!.maximumRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobRetryStrategyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobRetryStrategy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobRetryStrategy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumRetryAttempts = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
    }
  }

  // maximum_retry_attempts - computed: false, optional: false, required: true
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }
}

export class SagemakerTrainingJobRetryStrategyList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobRetryStrategy[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobRetryStrategyOutputReference {
    return new SagemakerTrainingJobRetryStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobServerlessJobConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#accept_eula SagemakerTrainingJob#accept_eula}
  */
  readonly acceptEula?: boolean | cdktn.IResolvable;
  /**
  * Base model ARN in SageMaker Public Hub. SageMaker always selects the latest version of the provided model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#base_model_arn SagemakerTrainingJob#base_model_arn}
  */
  readonly baseModelArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#customization_technique SagemakerTrainingJob#customization_technique}
  */
  readonly customizationTechnique?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#evaluation_type SagemakerTrainingJob#evaluation_type}
  */
  readonly evaluationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#evaluator_arn SagemakerTrainingJob#evaluator_arn}
  */
  readonly evaluatorArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#job_type SagemakerTrainingJob#job_type}
  */
  readonly jobType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#peft SagemakerTrainingJob#peft}
  */
  readonly peft?: string;
}

export function sagemakerTrainingJobServerlessJobConfigToTerraform(struct?: SagemakerTrainingJobServerlessJobConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
    base_model_arn: cdktn.stringToTerraform(struct!.baseModelArn),
    customization_technique: cdktn.stringToTerraform(struct!.customizationTechnique),
    evaluation_type: cdktn.stringToTerraform(struct!.evaluationType),
    evaluator_arn: cdktn.stringToTerraform(struct!.evaluatorArn),
    job_type: cdktn.stringToTerraform(struct!.jobType),
    peft: cdktn.stringToTerraform(struct!.peft),
  }
}


export function sagemakerTrainingJobServerlessJobConfigToHclTerraform(struct?: SagemakerTrainingJobServerlessJobConfig | cdktn.IResolvable): any {
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
    base_model_arn: {
      value: cdktn.stringToHclTerraform(struct!.baseModelArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customization_technique: {
      value: cdktn.stringToHclTerraform(struct!.customizationTechnique),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_type: {
      value: cdktn.stringToHclTerraform(struct!.evaluationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluator_arn: {
      value: cdktn.stringToHclTerraform(struct!.evaluatorArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_type: {
      value: cdktn.stringToHclTerraform(struct!.jobType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peft: {
      value: cdktn.stringToHclTerraform(struct!.peft),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobServerlessJobConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobServerlessJobConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    if (this._baseModelArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseModelArn = this._baseModelArn;
    }
    if (this._customizationTechnique !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizationTechnique = this._customizationTechnique;
    }
    if (this._evaluationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationType = this._evaluationType;
    }
    if (this._evaluatorArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluatorArn = this._evaluatorArn;
    }
    if (this._jobType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobType = this._jobType;
    }
    if (this._peft !== undefined) {
      hasAnyValues = true;
      internalValueResult.peft = this._peft;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobServerlessJobConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptEula = undefined;
      this._baseModelArn = undefined;
      this._customizationTechnique = undefined;
      this._evaluationType = undefined;
      this._evaluatorArn = undefined;
      this._jobType = undefined;
      this._peft = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptEula = value.acceptEula;
      this._baseModelArn = value.baseModelArn;
      this._customizationTechnique = value.customizationTechnique;
      this._evaluationType = value.evaluationType;
      this._evaluatorArn = value.evaluatorArn;
      this._jobType = value.jobType;
      this._peft = value.peft;
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

  // base_model_arn - computed: false, optional: false, required: true
  private _baseModelArn?: string; 
  public get baseModelArn() {
    return this.getStringAttribute('base_model_arn');
  }
  public set baseModelArn(value: string) {
    this._baseModelArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseModelArnInput() {
    return this._baseModelArn;
  }

  // customization_technique - computed: false, optional: true, required: false
  private _customizationTechnique?: string; 
  public get customizationTechnique() {
    return this.getStringAttribute('customization_technique');
  }
  public set customizationTechnique(value: string) {
    this._customizationTechnique = value;
  }
  public resetCustomizationTechnique() {
    this._customizationTechnique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationTechniqueInput() {
    return this._customizationTechnique;
  }

  // evaluation_type - computed: false, optional: true, required: false
  private _evaluationType?: string; 
  public get evaluationType() {
    return this.getStringAttribute('evaluation_type');
  }
  public set evaluationType(value: string) {
    this._evaluationType = value;
  }
  public resetEvaluationType() {
    this._evaluationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationTypeInput() {
    return this._evaluationType;
  }

  // evaluator_arn - computed: false, optional: true, required: false
  private _evaluatorArn?: string; 
  public get evaluatorArn() {
    return this.getStringAttribute('evaluator_arn');
  }
  public set evaluatorArn(value: string) {
    this._evaluatorArn = value;
  }
  public resetEvaluatorArn() {
    this._evaluatorArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatorArnInput() {
    return this._evaluatorArn;
  }

  // job_type - computed: false, optional: false, required: true
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
  }

  // peft - computed: false, optional: true, required: false
  private _peft?: string; 
  public get peft() {
    return this.getStringAttribute('peft');
  }
  public set peft(value: string) {
    this._peft = value;
  }
  public resetPeft() {
    this._peft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peftInput() {
    return this._peft;
  }
}

export class SagemakerTrainingJobServerlessJobConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobServerlessJobConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobServerlessJobConfigOutputReference {
    return new SagemakerTrainingJobServerlessJobConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobSessionChainingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#enable_session_tag_chaining SagemakerTrainingJob#enable_session_tag_chaining}
  */
  readonly enableSessionTagChaining?: boolean | cdktn.IResolvable;
}

export function sagemakerTrainingJobSessionChainingConfigToTerraform(struct?: SagemakerTrainingJobSessionChainingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_session_tag_chaining: cdktn.booleanToTerraform(struct!.enableSessionTagChaining),
  }
}


export function sagemakerTrainingJobSessionChainingConfigToHclTerraform(struct?: SagemakerTrainingJobSessionChainingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_session_tag_chaining: {
      value: cdktn.booleanToHclTerraform(struct!.enableSessionTagChaining),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobSessionChainingConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobSessionChainingConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSessionTagChaining !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSessionTagChaining = this._enableSessionTagChaining;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobSessionChainingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableSessionTagChaining = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableSessionTagChaining = value.enableSessionTagChaining;
    }
  }

  // enable_session_tag_chaining - computed: false, optional: true, required: false
  private _enableSessionTagChaining?: boolean | cdktn.IResolvable; 
  public get enableSessionTagChaining() {
    return this.getBooleanAttribute('enable_session_tag_chaining');
  }
  public set enableSessionTagChaining(value: boolean | cdktn.IResolvable) {
    this._enableSessionTagChaining = value;
  }
  public resetEnableSessionTagChaining() {
    this._enableSessionTagChaining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSessionTagChainingInput() {
    return this._enableSessionTagChaining;
  }
}

export class SagemakerTrainingJobSessionChainingConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobSessionChainingConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobSessionChainingConfigOutputReference {
    return new SagemakerTrainingJobSessionChainingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobStoppingCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#max_pending_time_in_seconds SagemakerTrainingJob#max_pending_time_in_seconds}
  */
  readonly maxPendingTimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#max_runtime_in_seconds SagemakerTrainingJob#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#max_wait_time_in_seconds SagemakerTrainingJob#max_wait_time_in_seconds}
  */
  readonly maxWaitTimeInSeconds?: number;
}

export function sagemakerTrainingJobStoppingConditionToTerraform(struct?: SagemakerTrainingJobStoppingCondition | cdktn.IResolvable): any {
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


export function sagemakerTrainingJobStoppingConditionToHclTerraform(struct?: SagemakerTrainingJobStoppingCondition | cdktn.IResolvable): any {
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

export class SagemakerTrainingJobStoppingConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobStoppingCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerTrainingJobStoppingCondition | cdktn.IResolvable | undefined) {
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

  // max_runtime_in_seconds - computed: true, optional: true, required: false
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

export class SagemakerTrainingJobStoppingConditionList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobStoppingCondition[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobStoppingConditionOutputReference {
    return new SagemakerTrainingJobStoppingConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobTensorBoardOutputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#local_path SagemakerTrainingJob#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#s3_output_path SagemakerTrainingJob#s3_output_path}
  */
  readonly s3OutputPath: string;
}

export function sagemakerTrainingJobTensorBoardOutputConfigToTerraform(struct?: SagemakerTrainingJobTensorBoardOutputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    local_path: cdktn.stringToTerraform(struct!.localPath),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
  }
}


export function sagemakerTrainingJobTensorBoardOutputConfigToHclTerraform(struct?: SagemakerTrainingJobTensorBoardOutputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
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

export class SagemakerTrainingJobTensorBoardOutputConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobTensorBoardOutputConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobTensorBoardOutputConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPath = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPath = value.localPath;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
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

export class SagemakerTrainingJobTensorBoardOutputConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobTensorBoardOutputConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobTensorBoardOutputConfigOutputReference {
    return new SagemakerTrainingJobTensorBoardOutputConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerTrainingJobTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#create SagemakerTrainingJob#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#delete SagemakerTrainingJob#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#update SagemakerTrainingJob#update}
  */
  readonly update?: string;
}

export function sagemakerTrainingJobTimeoutsToTerraform(struct?: SagemakerTrainingJobTimeouts | cdktn.IResolvable): any {
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


export function sagemakerTrainingJobTimeoutsToHclTerraform(struct?: SagemakerTrainingJobTimeouts | cdktn.IResolvable): any {
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

export class SagemakerTrainingJobTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerTrainingJobTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerTrainingJobTimeouts | cdktn.IResolvable | undefined) {
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
export interface SagemakerTrainingJobVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#security_group_ids SagemakerTrainingJob#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#subnets SagemakerTrainingJob#subnets}
  */
  readonly subnets: string[];
}

export function sagemakerTrainingJobVpcConfigToTerraform(struct?: SagemakerTrainingJobVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function sagemakerTrainingJobVpcConfigToHclTerraform(struct?: SagemakerTrainingJobVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrainingJobVpcConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrainingJobVpcConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrainingJobVpcConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnets = value.subnets;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class SagemakerTrainingJobVpcConfigList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrainingJobVpcConfig[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrainingJobVpcConfigOutputReference {
    return new SagemakerTrainingJobVpcConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job aws_sagemaker_training_job}
*/
export class SagemakerTrainingJob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_training_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerTrainingJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerTrainingJob to import
  * @param importFromId The id of the existing SagemakerTrainingJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerTrainingJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_training_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/sagemaker_training_job aws_sagemaker_training_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerTrainingJobConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerTrainingJobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_training_job',
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
    this._deleteModelPackagesOnDestroy = config.deleteModelPackagesOnDestroy;
    this._deleteVpcEnisOnDestroy = config.deleteVpcEnisOnDestroy;
    this._enableInterContainerTrafficEncryption = config.enableInterContainerTrafficEncryption;
    this._enableManagedSpotTraining = config.enableManagedSpotTraining;
    this._enableNetworkIsolation = config.enableNetworkIsolation;
    this._environment = config.environment;
    this._hyperParameters = config.hyperParameters;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._trainingJobName = config.trainingJobName;
    this._algorithmSpecification.internalValue = config.algorithmSpecification;
    this._checkpointConfig.internalValue = config.checkpointConfig;
    this._debugHookConfig.internalValue = config.debugHookConfig;
    this._debugRuleConfigurations.internalValue = config.debugRuleConfigurations;
    this._experimentConfig.internalValue = config.experimentConfig;
    this._infraCheckConfig.internalValue = config.infraCheckConfig;
    this._inputDataConfig.internalValue = config.inputDataConfig;
    this._mlflowConfig.internalValue = config.mlflowConfig;
    this._modelPackageConfig.internalValue = config.modelPackageConfig;
    this._outputDataConfig.internalValue = config.outputDataConfig;
    this._profilerConfig.internalValue = config.profilerConfig;
    this._profilerRuleConfigurations.internalValue = config.profilerRuleConfigurations;
    this._remoteDebugConfig.internalValue = config.remoteDebugConfig;
    this._resourceConfig.internalValue = config.resourceConfig;
    this._retryStrategy.internalValue = config.retryStrategy;
    this._serverlessJobConfig.internalValue = config.serverlessJobConfig;
    this._sessionChainingConfig.internalValue = config.sessionChainingConfig;
    this._stoppingCondition.internalValue = config.stoppingCondition;
    this._tensorBoardOutputConfig.internalValue = config.tensorBoardOutputConfig;
    this._timeouts.internalValue = config.timeouts;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delete_model_packages_on_destroy - computed: false, optional: true, required: false
  private _deleteModelPackagesOnDestroy?: boolean | cdktn.IResolvable; 
  public get deleteModelPackagesOnDestroy() {
    return this.getBooleanAttribute('delete_model_packages_on_destroy');
  }
  public set deleteModelPackagesOnDestroy(value: boolean | cdktn.IResolvable) {
    this._deleteModelPackagesOnDestroy = value;
  }
  public resetDeleteModelPackagesOnDestroy() {
    this._deleteModelPackagesOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModelPackagesOnDestroyInput() {
    return this._deleteModelPackagesOnDestroy;
  }

  // delete_vpc_enis_on_destroy - computed: false, optional: true, required: false
  private _deleteVpcEnisOnDestroy?: boolean | cdktn.IResolvable; 
  public get deleteVpcEnisOnDestroy() {
    return this.getBooleanAttribute('delete_vpc_enis_on_destroy');
  }
  public set deleteVpcEnisOnDestroy(value: boolean | cdktn.IResolvable) {
    this._deleteVpcEnisOnDestroy = value;
  }
  public resetDeleteVpcEnisOnDestroy() {
    this._deleteVpcEnisOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteVpcEnisOnDestroyInput() {
    return this._deleteVpcEnisOnDestroy;
  }

  // enable_inter_container_traffic_encryption - computed: true, optional: true, required: false
  private _enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable; 
  public get enableInterContainerTrafficEncryption() {
    return this.getBooleanAttribute('enable_inter_container_traffic_encryption');
  }
  public set enableInterContainerTrafficEncryption(value: boolean | cdktn.IResolvable) {
    this._enableInterContainerTrafficEncryption = value;
  }
  public resetEnableInterContainerTrafficEncryption() {
    this._enableInterContainerTrafficEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInterContainerTrafficEncryptionInput() {
    return this._enableInterContainerTrafficEncryption;
  }

  // enable_managed_spot_training - computed: true, optional: true, required: false
  private _enableManagedSpotTraining?: boolean | cdktn.IResolvable; 
  public get enableManagedSpotTraining() {
    return this.getBooleanAttribute('enable_managed_spot_training');
  }
  public set enableManagedSpotTraining(value: boolean | cdktn.IResolvable) {
    this._enableManagedSpotTraining = value;
  }
  public resetEnableManagedSpotTraining() {
    this._enableManagedSpotTraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableManagedSpotTrainingInput() {
    return this._enableManagedSpotTraining;
  }

  // enable_network_isolation - computed: true, optional: true, required: false
  private _enableNetworkIsolation?: boolean | cdktn.IResolvable; 
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }
  public set enableNetworkIsolation(value: boolean | cdktn.IResolvable) {
    this._enableNetworkIsolation = value;
  }
  public resetEnableNetworkIsolation() {
    this._enableNetworkIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkIsolationInput() {
    return this._enableNetworkIsolation;
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

  // training_job_name - computed: false, optional: false, required: true
  private _trainingJobName?: string; 
  public get trainingJobName() {
    return this.getStringAttribute('training_job_name');
  }
  public set trainingJobName(value: string) {
    this._trainingJobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingJobNameInput() {
    return this._trainingJobName;
  }

  // algorithm_specification - computed: false, optional: true, required: false
  private _algorithmSpecification = new SagemakerTrainingJobAlgorithmSpecificationList(this, "algorithm_specification", false);
  public get algorithmSpecification() {
    return this._algorithmSpecification;
  }
  public putAlgorithmSpecification(value: SagemakerTrainingJobAlgorithmSpecification[] | cdktn.IResolvable) {
    this._algorithmSpecification.internalValue = value;
  }
  public resetAlgorithmSpecification() {
    this._algorithmSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmSpecificationInput() {
    return this._algorithmSpecification.internalValue;
  }

  // checkpoint_config - computed: false, optional: true, required: false
  private _checkpointConfig = new SagemakerTrainingJobCheckpointConfigList(this, "checkpoint_config", false);
  public get checkpointConfig() {
    return this._checkpointConfig;
  }
  public putCheckpointConfig(value: SagemakerTrainingJobCheckpointConfig[] | cdktn.IResolvable) {
    this._checkpointConfig.internalValue = value;
  }
  public resetCheckpointConfig() {
    this._checkpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointConfigInput() {
    return this._checkpointConfig.internalValue;
  }

  // debug_hook_config - computed: false, optional: true, required: false
  private _debugHookConfig = new SagemakerTrainingJobDebugHookConfigList(this, "debug_hook_config", false);
  public get debugHookConfig() {
    return this._debugHookConfig;
  }
  public putDebugHookConfig(value: SagemakerTrainingJobDebugHookConfig[] | cdktn.IResolvable) {
    this._debugHookConfig.internalValue = value;
  }
  public resetDebugHookConfig() {
    this._debugHookConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugHookConfigInput() {
    return this._debugHookConfig.internalValue;
  }

  // debug_rule_configurations - computed: false, optional: true, required: false
  private _debugRuleConfigurations = new SagemakerTrainingJobDebugRuleConfigurationsList(this, "debug_rule_configurations", false);
  public get debugRuleConfigurations() {
    return this._debugRuleConfigurations;
  }
  public putDebugRuleConfigurations(value: SagemakerTrainingJobDebugRuleConfigurations[] | cdktn.IResolvable) {
    this._debugRuleConfigurations.internalValue = value;
  }
  public resetDebugRuleConfigurations() {
    this._debugRuleConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugRuleConfigurationsInput() {
    return this._debugRuleConfigurations.internalValue;
  }

  // experiment_config - computed: false, optional: true, required: false
  private _experimentConfig = new SagemakerTrainingJobExperimentConfigList(this, "experiment_config", false);
  public get experimentConfig() {
    return this._experimentConfig;
  }
  public putExperimentConfig(value: SagemakerTrainingJobExperimentConfig[] | cdktn.IResolvable) {
    this._experimentConfig.internalValue = value;
  }
  public resetExperimentConfig() {
    this._experimentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentConfigInput() {
    return this._experimentConfig.internalValue;
  }

  // infra_check_config - computed: false, optional: true, required: false
  private _infraCheckConfig = new SagemakerTrainingJobInfraCheckConfigList(this, "infra_check_config", false);
  public get infraCheckConfig() {
    return this._infraCheckConfig;
  }
  public putInfraCheckConfig(value: SagemakerTrainingJobInfraCheckConfig[] | cdktn.IResolvable) {
    this._infraCheckConfig.internalValue = value;
  }
  public resetInfraCheckConfig() {
    this._infraCheckConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraCheckConfigInput() {
    return this._infraCheckConfig.internalValue;
  }

  // input_data_config - computed: false, optional: true, required: false
  private _inputDataConfig = new SagemakerTrainingJobInputDataConfigList(this, "input_data_config", false);
  public get inputDataConfig() {
    return this._inputDataConfig;
  }
  public putInputDataConfig(value: SagemakerTrainingJobInputDataConfig[] | cdktn.IResolvable) {
    this._inputDataConfig.internalValue = value;
  }
  public resetInputDataConfig() {
    this._inputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataConfigInput() {
    return this._inputDataConfig.internalValue;
  }

  // mlflow_config - computed: false, optional: true, required: false
  private _mlflowConfig = new SagemakerTrainingJobMlflowConfigList(this, "mlflow_config", false);
  public get mlflowConfig() {
    return this._mlflowConfig;
  }
  public putMlflowConfig(value: SagemakerTrainingJobMlflowConfig[] | cdktn.IResolvable) {
    this._mlflowConfig.internalValue = value;
  }
  public resetMlflowConfig() {
    this._mlflowConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlflowConfigInput() {
    return this._mlflowConfig.internalValue;
  }

  // model_package_config - computed: false, optional: true, required: false
  private _modelPackageConfig = new SagemakerTrainingJobModelPackageConfigList(this, "model_package_config", false);
  public get modelPackageConfig() {
    return this._modelPackageConfig;
  }
  public putModelPackageConfig(value: SagemakerTrainingJobModelPackageConfig[] | cdktn.IResolvable) {
    this._modelPackageConfig.internalValue = value;
  }
  public resetModelPackageConfig() {
    this._modelPackageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageConfigInput() {
    return this._modelPackageConfig.internalValue;
  }

  // output_data_config - computed: false, optional: true, required: false
  private _outputDataConfig = new SagemakerTrainingJobOutputDataConfigList(this, "output_data_config", false);
  public get outputDataConfig() {
    return this._outputDataConfig;
  }
  public putOutputDataConfig(value: SagemakerTrainingJobOutputDataConfig[] | cdktn.IResolvable) {
    this._outputDataConfig.internalValue = value;
  }
  public resetOutputDataConfig() {
    this._outputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDataConfigInput() {
    return this._outputDataConfig.internalValue;
  }

  // profiler_config - computed: false, optional: true, required: false
  private _profilerConfig = new SagemakerTrainingJobProfilerConfigList(this, "profiler_config", false);
  public get profilerConfig() {
    return this._profilerConfig;
  }
  public putProfilerConfig(value: SagemakerTrainingJobProfilerConfig[] | cdktn.IResolvable) {
    this._profilerConfig.internalValue = value;
  }
  public resetProfilerConfig() {
    this._profilerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilerConfigInput() {
    return this._profilerConfig.internalValue;
  }

  // profiler_rule_configurations - computed: false, optional: true, required: false
  private _profilerRuleConfigurations = new SagemakerTrainingJobProfilerRuleConfigurationsList(this, "profiler_rule_configurations", false);
  public get profilerRuleConfigurations() {
    return this._profilerRuleConfigurations;
  }
  public putProfilerRuleConfigurations(value: SagemakerTrainingJobProfilerRuleConfigurations[] | cdktn.IResolvable) {
    this._profilerRuleConfigurations.internalValue = value;
  }
  public resetProfilerRuleConfigurations() {
    this._profilerRuleConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilerRuleConfigurationsInput() {
    return this._profilerRuleConfigurations.internalValue;
  }

  // remote_debug_config - computed: false, optional: true, required: false
  private _remoteDebugConfig = new SagemakerTrainingJobRemoteDebugConfigList(this, "remote_debug_config", false);
  public get remoteDebugConfig() {
    return this._remoteDebugConfig;
  }
  public putRemoteDebugConfig(value: SagemakerTrainingJobRemoteDebugConfig[] | cdktn.IResolvable) {
    this._remoteDebugConfig.internalValue = value;
  }
  public resetRemoteDebugConfig() {
    this._remoteDebugConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDebugConfigInput() {
    return this._remoteDebugConfig.internalValue;
  }

  // resource_config - computed: false, optional: true, required: false
  private _resourceConfig = new SagemakerTrainingJobResourceConfigList(this, "resource_config", false);
  public get resourceConfig() {
    return this._resourceConfig;
  }
  public putResourceConfig(value: SagemakerTrainingJobResourceConfig[] | cdktn.IResolvable) {
    this._resourceConfig.internalValue = value;
  }
  public resetResourceConfig() {
    this._resourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigInput() {
    return this._resourceConfig.internalValue;
  }

  // retry_strategy - computed: false, optional: true, required: false
  private _retryStrategy = new SagemakerTrainingJobRetryStrategyList(this, "retry_strategy", false);
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: SagemakerTrainingJobRetryStrategy[] | cdktn.IResolvable) {
    this._retryStrategy.internalValue = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy.internalValue;
  }

  // serverless_job_config - computed: false, optional: true, required: false
  private _serverlessJobConfig = new SagemakerTrainingJobServerlessJobConfigList(this, "serverless_job_config", false);
  public get serverlessJobConfig() {
    return this._serverlessJobConfig;
  }
  public putServerlessJobConfig(value: SagemakerTrainingJobServerlessJobConfig[] | cdktn.IResolvable) {
    this._serverlessJobConfig.internalValue = value;
  }
  public resetServerlessJobConfig() {
    this._serverlessJobConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessJobConfigInput() {
    return this._serverlessJobConfig.internalValue;
  }

  // session_chaining_config - computed: false, optional: true, required: false
  private _sessionChainingConfig = new SagemakerTrainingJobSessionChainingConfigList(this, "session_chaining_config", false);
  public get sessionChainingConfig() {
    return this._sessionChainingConfig;
  }
  public putSessionChainingConfig(value: SagemakerTrainingJobSessionChainingConfig[] | cdktn.IResolvable) {
    this._sessionChainingConfig.internalValue = value;
  }
  public resetSessionChainingConfig() {
    this._sessionChainingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionChainingConfigInput() {
    return this._sessionChainingConfig.internalValue;
  }

  // stopping_condition - computed: false, optional: true, required: false
  private _stoppingCondition = new SagemakerTrainingJobStoppingConditionList(this, "stopping_condition", false);
  public get stoppingCondition() {
    return this._stoppingCondition;
  }
  public putStoppingCondition(value: SagemakerTrainingJobStoppingCondition[] | cdktn.IResolvable) {
    this._stoppingCondition.internalValue = value;
  }
  public resetStoppingCondition() {
    this._stoppingCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppingConditionInput() {
    return this._stoppingCondition.internalValue;
  }

  // tensor_board_output_config - computed: false, optional: true, required: false
  private _tensorBoardOutputConfig = new SagemakerTrainingJobTensorBoardOutputConfigList(this, "tensor_board_output_config", false);
  public get tensorBoardOutputConfig() {
    return this._tensorBoardOutputConfig;
  }
  public putTensorBoardOutputConfig(value: SagemakerTrainingJobTensorBoardOutputConfig[] | cdktn.IResolvable) {
    this._tensorBoardOutputConfig.internalValue = value;
  }
  public resetTensorBoardOutputConfig() {
    this._tensorBoardOutputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tensorBoardOutputConfigInput() {
    return this._tensorBoardOutputConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SagemakerTrainingJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SagemakerTrainingJobTimeouts) {
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
  private _vpcConfig = new SagemakerTrainingJobVpcConfigList(this, "vpc_config", false);
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: SagemakerTrainingJobVpcConfig[] | cdktn.IResolvable) {
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
      delete_model_packages_on_destroy: cdktn.booleanToTerraform(this._deleteModelPackagesOnDestroy),
      delete_vpc_enis_on_destroy: cdktn.booleanToTerraform(this._deleteVpcEnisOnDestroy),
      enable_inter_container_traffic_encryption: cdktn.booleanToTerraform(this._enableInterContainerTrafficEncryption),
      enable_managed_spot_training: cdktn.booleanToTerraform(this._enableManagedSpotTraining),
      enable_network_isolation: cdktn.booleanToTerraform(this._enableNetworkIsolation),
      environment: cdktn.hashMapper(cdktn.stringToTerraform)(this._environment),
      hyper_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._hyperParameters),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      training_job_name: cdktn.stringToTerraform(this._trainingJobName),
      algorithm_specification: cdktn.listMapper(sagemakerTrainingJobAlgorithmSpecificationToTerraform, true)(this._algorithmSpecification.internalValue),
      checkpoint_config: cdktn.listMapper(sagemakerTrainingJobCheckpointConfigToTerraform, true)(this._checkpointConfig.internalValue),
      debug_hook_config: cdktn.listMapper(sagemakerTrainingJobDebugHookConfigToTerraform, true)(this._debugHookConfig.internalValue),
      debug_rule_configurations: cdktn.listMapper(sagemakerTrainingJobDebugRuleConfigurationsToTerraform, true)(this._debugRuleConfigurations.internalValue),
      experiment_config: cdktn.listMapper(sagemakerTrainingJobExperimentConfigToTerraform, true)(this._experimentConfig.internalValue),
      infra_check_config: cdktn.listMapper(sagemakerTrainingJobInfraCheckConfigToTerraform, true)(this._infraCheckConfig.internalValue),
      input_data_config: cdktn.listMapper(sagemakerTrainingJobInputDataConfigToTerraform, true)(this._inputDataConfig.internalValue),
      mlflow_config: cdktn.listMapper(sagemakerTrainingJobMlflowConfigToTerraform, true)(this._mlflowConfig.internalValue),
      model_package_config: cdktn.listMapper(sagemakerTrainingJobModelPackageConfigToTerraform, true)(this._modelPackageConfig.internalValue),
      output_data_config: cdktn.listMapper(sagemakerTrainingJobOutputDataConfigToTerraform, true)(this._outputDataConfig.internalValue),
      profiler_config: cdktn.listMapper(sagemakerTrainingJobProfilerConfigToTerraform, true)(this._profilerConfig.internalValue),
      profiler_rule_configurations: cdktn.listMapper(sagemakerTrainingJobProfilerRuleConfigurationsToTerraform, true)(this._profilerRuleConfigurations.internalValue),
      remote_debug_config: cdktn.listMapper(sagemakerTrainingJobRemoteDebugConfigToTerraform, true)(this._remoteDebugConfig.internalValue),
      resource_config: cdktn.listMapper(sagemakerTrainingJobResourceConfigToTerraform, true)(this._resourceConfig.internalValue),
      retry_strategy: cdktn.listMapper(sagemakerTrainingJobRetryStrategyToTerraform, true)(this._retryStrategy.internalValue),
      serverless_job_config: cdktn.listMapper(sagemakerTrainingJobServerlessJobConfigToTerraform, true)(this._serverlessJobConfig.internalValue),
      session_chaining_config: cdktn.listMapper(sagemakerTrainingJobSessionChainingConfigToTerraform, true)(this._sessionChainingConfig.internalValue),
      stopping_condition: cdktn.listMapper(sagemakerTrainingJobStoppingConditionToTerraform, true)(this._stoppingCondition.internalValue),
      tensor_board_output_config: cdktn.listMapper(sagemakerTrainingJobTensorBoardOutputConfigToTerraform, true)(this._tensorBoardOutputConfig.internalValue),
      timeouts: sagemakerTrainingJobTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_config: cdktn.listMapper(sagemakerTrainingJobVpcConfigToTerraform, true)(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_model_packages_on_destroy: {
        value: cdktn.booleanToHclTerraform(this._deleteModelPackagesOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_vpc_enis_on_destroy: {
        value: cdktn.booleanToHclTerraform(this._deleteVpcEnisOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_inter_container_traffic_encryption: {
        value: cdktn.booleanToHclTerraform(this._enableInterContainerTrafficEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_managed_spot_training: {
        value: cdktn.booleanToHclTerraform(this._enableManagedSpotTraining),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_network_isolation: {
        value: cdktn.booleanToHclTerraform(this._enableNetworkIsolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      hyper_parameters: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._hyperParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      training_job_name: {
        value: cdktn.stringToHclTerraform(this._trainingJobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      algorithm_specification: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobAlgorithmSpecificationToHclTerraform, true)(this._algorithmSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobAlgorithmSpecificationList",
      },
      checkpoint_config: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobCheckpointConfigToHclTerraform, true)(this._checkpointConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobCheckpointConfigList",
      },
      debug_hook_config: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobDebugHookConfigToHclTerraform, true)(this._debugHookConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobDebugHookConfigList",
      },
      debug_rule_configurations: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobDebugRuleConfigurationsToHclTerraform, true)(this._debugRuleConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobDebugRuleConfigurationsList",
      },
      experiment_config: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobExperimentConfigToHclTerraform, true)(this._experimentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobExperimentConfigList",
      },
      infra_check_config: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobInfraCheckConfigToHclTerraform, true)(this._infraCheckConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobInfraCheckConfigList",
      },
      input_data_config: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobInputDataConfigToHclTerraform, true)(this._inputDataConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobInputDataConfigList",
      },
      mlflow_config: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobMlflowConfigToHclTerraform, true)(this._mlflowConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobMlflowConfigList",
      },
      model_package_config: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobModelPackageConfigToHclTerraform, true)(this._modelPackageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobModelPackageConfigList",
      },
      output_data_config: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobOutputDataConfigToHclTerraform, true)(this._outputDataConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobOutputDataConfigList",
      },
      profiler_config: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobProfilerConfigToHclTerraform, true)(this._profilerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobProfilerConfigList",
      },
      profiler_rule_configurations: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobProfilerRuleConfigurationsToHclTerraform, true)(this._profilerRuleConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobProfilerRuleConfigurationsList",
      },
      remote_debug_config: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobRemoteDebugConfigToHclTerraform, true)(this._remoteDebugConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobRemoteDebugConfigList",
      },
      resource_config: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobResourceConfigToHclTerraform, true)(this._resourceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobResourceConfigList",
      },
      retry_strategy: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobRetryStrategyToHclTerraform, true)(this._retryStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobRetryStrategyList",
      },
      serverless_job_config: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobServerlessJobConfigToHclTerraform, true)(this._serverlessJobConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobServerlessJobConfigList",
      },
      session_chaining_config: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobSessionChainingConfigToHclTerraform, true)(this._sessionChainingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobSessionChainingConfigList",
      },
      stopping_condition: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobStoppingConditionToHclTerraform, true)(this._stoppingCondition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobStoppingConditionList",
      },
      tensor_board_output_config: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobTensorBoardOutputConfigToHclTerraform, true)(this._tensorBoardOutputConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobTensorBoardOutputConfigList",
      },
      timeouts: {
        value: sagemakerTrainingJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerTrainingJobTimeouts",
      },
      vpc_config: {
        value: cdktn.listMapperHcl(sagemakerTrainingJobVpcConfigToHclTerraform, true)(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrainingJobVpcConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
