/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerLabelingJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#label_attribute_name SagemakerLabelingJob#label_attribute_name}
  */
  readonly labelAttributeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#label_category_config_s3_uri SagemakerLabelingJob#label_category_config_s3_uri}
  */
  readonly labelCategoryConfigS3Uri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_name SagemakerLabelingJob#labeling_job_name}
  */
  readonly labelingJobName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#region SagemakerLabelingJob#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#role_arn SagemakerLabelingJob#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#stopping_conditions SagemakerLabelingJob#stopping_conditions}
  */
  readonly stoppingConditions?: SagemakerLabelingJobStoppingConditions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#tags SagemakerLabelingJob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * human_task_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#human_task_config SagemakerLabelingJob#human_task_config}
  */
  readonly humanTaskConfig?: SagemakerLabelingJobHumanTaskConfig[] | cdktf.IResolvable;
  /**
  * input_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#input_config SagemakerLabelingJob#input_config}
  */
  readonly inputConfig?: SagemakerLabelingJobInputConfig[] | cdktf.IResolvable;
  /**
  * labeling_job_algorithms_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithms_config SagemakerLabelingJob#labeling_job_algorithms_config}
  */
  readonly labelingJobAlgorithmsConfig?: SagemakerLabelingJobLabelingJobAlgorithmsConfig[] | cdktf.IResolvable;
  /**
  * output_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#output_config SagemakerLabelingJob#output_config}
  */
  readonly outputConfig?: SagemakerLabelingJobOutputConfig[] | cdktf.IResolvable;
}
export interface SagemakerLabelingJobLabelCounters {
}

export function sagemakerLabelingJobLabelCountersToTerraform(struct?: SagemakerLabelingJobLabelCounters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sagemakerLabelingJobLabelCountersToHclTerraform(struct?: SagemakerLabelingJobLabelCounters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SagemakerLabelingJobLabelCountersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerLabelingJobLabelCounters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerLabelingJobLabelCounters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failed_non_retryable_error - computed: true, optional: false, required: false
  public get failedNonRetryableError() {
    return this.getNumberAttribute('failed_non_retryable_error');
  }

  // human_labeled - computed: true, optional: false, required: false
  public get humanLabeled() {
    return this.getNumberAttribute('human_labeled');
  }

  // machine_labeled - computed: true, optional: false, required: false
  public get machineLabeled() {
    return this.getNumberAttribute('machine_labeled');
  }

  // total_labeled - computed: true, optional: false, required: false
  public get totalLabeled() {
    return this.getNumberAttribute('total_labeled');
  }

  // unlabeled - computed: true, optional: false, required: false
  public get unlabeled() {
    return this.getNumberAttribute('unlabeled');
  }
}

export class SagemakerLabelingJobLabelCountersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerLabelingJobLabelCountersOutputReference {
    return new SagemakerLabelingJobLabelCountersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerLabelingJobStoppingConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#max_human_labeled_object_count SagemakerLabelingJob#max_human_labeled_object_count}
  */
  readonly maxHumanLabeledObjectCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#max_percentage_of_input_dataset_labeled SagemakerLabelingJob#max_percentage_of_input_dataset_labeled}
  */
  readonly maxPercentageOfInputDatasetLabeled?: number;
}

export function sagemakerLabelingJobStoppingConditionsToTerraform(struct?: SagemakerLabelingJobStoppingConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_human_labeled_object_count: cdktf.numberToTerraform(struct!.maxHumanLabeledObjectCount),
    max_percentage_of_input_dataset_labeled: cdktf.numberToTerraform(struct!.maxPercentageOfInputDatasetLabeled),
  }
}


export function sagemakerLabelingJobStoppingConditionsToHclTerraform(struct?: SagemakerLabelingJobStoppingConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_human_labeled_object_count: {
      value: cdktf.numberToHclTerraform(struct!.maxHumanLabeledObjectCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_percentage_of_input_dataset_labeled: {
      value: cdktf.numberToHclTerraform(struct!.maxPercentageOfInputDatasetLabeled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerLabelingJobStoppingConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerLabelingJobStoppingConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxHumanLabeledObjectCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHumanLabeledObjectCount = this._maxHumanLabeledObjectCount;
    }
    if (this._maxPercentageOfInputDatasetLabeled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPercentageOfInputDatasetLabeled = this._maxPercentageOfInputDatasetLabeled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerLabelingJobStoppingConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxHumanLabeledObjectCount = undefined;
      this._maxPercentageOfInputDatasetLabeled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxHumanLabeledObjectCount = value.maxHumanLabeledObjectCount;
      this._maxPercentageOfInputDatasetLabeled = value.maxPercentageOfInputDatasetLabeled;
    }
  }

  // max_human_labeled_object_count - computed: true, optional: true, required: false
  private _maxHumanLabeledObjectCount?: number; 
  public get maxHumanLabeledObjectCount() {
    return this.getNumberAttribute('max_human_labeled_object_count');
  }
  public set maxHumanLabeledObjectCount(value: number) {
    this._maxHumanLabeledObjectCount = value;
  }
  public resetMaxHumanLabeledObjectCount() {
    this._maxHumanLabeledObjectCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHumanLabeledObjectCountInput() {
    return this._maxHumanLabeledObjectCount;
  }

  // max_percentage_of_input_dataset_labeled - computed: true, optional: true, required: false
  private _maxPercentageOfInputDatasetLabeled?: number; 
  public get maxPercentageOfInputDatasetLabeled() {
    return this.getNumberAttribute('max_percentage_of_input_dataset_labeled');
  }
  public set maxPercentageOfInputDatasetLabeled(value: number) {
    this._maxPercentageOfInputDatasetLabeled = value;
  }
  public resetMaxPercentageOfInputDatasetLabeled() {
    this._maxPercentageOfInputDatasetLabeled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPercentageOfInputDatasetLabeledInput() {
    return this._maxPercentageOfInputDatasetLabeled;
  }
}

export class SagemakerLabelingJobStoppingConditionsList extends cdktf.ComplexList {
  public internalValue? : SagemakerLabelingJobStoppingConditions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerLabelingJobStoppingConditionsOutputReference {
    return new SagemakerLabelingJobStoppingConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#annotation_consolidation_lambda_arn SagemakerLabelingJob#annotation_consolidation_lambda_arn}
  */
  readonly annotationConsolidationLambdaArn: string;
}

export function sagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigToTerraform(struct?: SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_consolidation_lambda_arn: cdktf.stringToTerraform(struct!.annotationConsolidationLambdaArn),
  }
}


export function sagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigToHclTerraform(struct?: SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_consolidation_lambda_arn: {
      value: cdktf.stringToHclTerraform(struct!.annotationConsolidationLambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationConsolidationLambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationConsolidationLambdaArn = this._annotationConsolidationLambdaArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationConsolidationLambdaArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationConsolidationLambdaArn = value.annotationConsolidationLambdaArn;
    }
  }

  // annotation_consolidation_lambda_arn - computed: false, optional: false, required: true
  private _annotationConsolidationLambdaArn?: string; 
  public get annotationConsolidationLambdaArn() {
    return this.getStringAttribute('annotation_consolidation_lambda_arn');
  }
  public set annotationConsolidationLambdaArn(value: string) {
    this._annotationConsolidationLambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationConsolidationLambdaArnInput() {
    return this._annotationConsolidationLambdaArn;
  }
}

export class SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList extends cdktf.ComplexList {
  public internalValue? : SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference {
    return new SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#cents SagemakerLabelingJob#cents}
  */
  readonly cents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#dollars SagemakerLabelingJob#dollars}
  */
  readonly dollars?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#tenth_fractions_of_a_cent SagemakerLabelingJob#tenth_fractions_of_a_cent}
  */
  readonly tenthFractionsOfACent?: number;
}

export function sagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdToTerraform(struct?: SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cents: cdktf.numberToTerraform(struct!.cents),
    dollars: cdktf.numberToTerraform(struct!.dollars),
    tenth_fractions_of_a_cent: cdktf.numberToTerraform(struct!.tenthFractionsOfACent),
  }
}


export function sagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdToHclTerraform(struct?: SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cents: {
      value: cdktf.numberToHclTerraform(struct!.cents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dollars: {
      value: cdktf.numberToHclTerraform(struct!.dollars),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tenth_fractions_of_a_cent: {
      value: cdktf.numberToHclTerraform(struct!.tenthFractionsOfACent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cents !== undefined) {
      hasAnyValues = true;
      internalValueResult.cents = this._cents;
    }
    if (this._dollars !== undefined) {
      hasAnyValues = true;
      internalValueResult.dollars = this._dollars;
    }
    if (this._tenthFractionsOfACent !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenthFractionsOfACent = this._tenthFractionsOfACent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cents = undefined;
      this._dollars = undefined;
      this._tenthFractionsOfACent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cents = value.cents;
      this._dollars = value.dollars;
      this._tenthFractionsOfACent = value.tenthFractionsOfACent;
    }
  }

  // cents - computed: false, optional: true, required: false
  private _cents?: number; 
  public get cents() {
    return this.getNumberAttribute('cents');
  }
  public set cents(value: number) {
    this._cents = value;
  }
  public resetCents() {
    this._cents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centsInput() {
    return this._cents;
  }

  // dollars - computed: false, optional: true, required: false
  private _dollars?: number; 
  public get dollars() {
    return this.getNumberAttribute('dollars');
  }
  public set dollars(value: number) {
    this._dollars = value;
  }
  public resetDollars() {
    this._dollars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dollarsInput() {
    return this._dollars;
  }

  // tenth_fractions_of_a_cent - computed: false, optional: true, required: false
  private _tenthFractionsOfACent?: number; 
  public get tenthFractionsOfACent() {
    return this.getNumberAttribute('tenth_fractions_of_a_cent');
  }
  public set tenthFractionsOfACent(value: number) {
    this._tenthFractionsOfACent = value;
  }
  public resetTenthFractionsOfACent() {
    this._tenthFractionsOfACent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenthFractionsOfACentInput() {
    return this._tenthFractionsOfACent;
  }
}

export class SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList extends cdktf.ComplexList {
  public internalValue? : SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference {
    return new SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice {
  /**
  * amount_in_usd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#amount_in_usd SagemakerLabelingJob#amount_in_usd}
  */
  readonly amountInUsd?: SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd[] | cdktf.IResolvable;
}

export function sagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceToTerraform(struct?: SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount_in_usd: cdktf.listMapper(sagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdToTerraform, true)(struct!.amountInUsd),
  }
}


export function sagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceToHclTerraform(struct?: SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount_in_usd: {
      value: cdktf.listMapperHcl(sagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdToHclTerraform, true)(struct!.amountInUsd),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amountInUsd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amountInUsd = this._amountInUsd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amountInUsd.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amountInUsd.internalValue = value.amountInUsd;
    }
  }

  // amount_in_usd - computed: false, optional: true, required: false
  private _amountInUsd = new SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList(this, "amount_in_usd", false);
  public get amountInUsd() {
    return this._amountInUsd;
  }
  public putAmountInUsd(value: SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd[] | cdktf.IResolvable) {
    this._amountInUsd.internalValue = value;
  }
  public resetAmountInUsd() {
    this._amountInUsd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInUsdInput() {
    return this._amountInUsd.internalValue;
  }
}

export class SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList extends cdktf.ComplexList {
  public internalValue? : SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference {
    return new SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerLabelingJobHumanTaskConfigUiConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#human_task_ui_arn SagemakerLabelingJob#human_task_ui_arn}
  */
  readonly humanTaskUiArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#ui_template_s3_uri SagemakerLabelingJob#ui_template_s3_uri}
  */
  readonly uiTemplateS3Uri?: string;
}

export function sagemakerLabelingJobHumanTaskConfigUiConfigToTerraform(struct?: SagemakerLabelingJobHumanTaskConfigUiConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    human_task_ui_arn: cdktf.stringToTerraform(struct!.humanTaskUiArn),
    ui_template_s3_uri: cdktf.stringToTerraform(struct!.uiTemplateS3Uri),
  }
}


export function sagemakerLabelingJobHumanTaskConfigUiConfigToHclTerraform(struct?: SagemakerLabelingJobHumanTaskConfigUiConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    human_task_ui_arn: {
      value: cdktf.stringToHclTerraform(struct!.humanTaskUiArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ui_template_s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.uiTemplateS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerLabelingJobHumanTaskConfigUiConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._humanTaskUiArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanTaskUiArn = this._humanTaskUiArn;
    }
    if (this._uiTemplateS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uiTemplateS3Uri = this._uiTemplateS3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerLabelingJobHumanTaskConfigUiConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._humanTaskUiArn = undefined;
      this._uiTemplateS3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._humanTaskUiArn = value.humanTaskUiArn;
      this._uiTemplateS3Uri = value.uiTemplateS3Uri;
    }
  }

  // human_task_ui_arn - computed: false, optional: true, required: false
  private _humanTaskUiArn?: string; 
  public get humanTaskUiArn() {
    return this.getStringAttribute('human_task_ui_arn');
  }
  public set humanTaskUiArn(value: string) {
    this._humanTaskUiArn = value;
  }
  public resetHumanTaskUiArn() {
    this._humanTaskUiArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanTaskUiArnInput() {
    return this._humanTaskUiArn;
  }

  // ui_template_s3_uri - computed: false, optional: true, required: false
  private _uiTemplateS3Uri?: string; 
  public get uiTemplateS3Uri() {
    return this.getStringAttribute('ui_template_s3_uri');
  }
  public set uiTemplateS3Uri(value: string) {
    this._uiTemplateS3Uri = value;
  }
  public resetUiTemplateS3Uri() {
    this._uiTemplateS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiTemplateS3UriInput() {
    return this._uiTemplateS3Uri;
  }
}

export class SagemakerLabelingJobHumanTaskConfigUiConfigList extends cdktf.ComplexList {
  public internalValue? : SagemakerLabelingJobHumanTaskConfigUiConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference {
    return new SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerLabelingJobHumanTaskConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#max_concurrent_task_count SagemakerLabelingJob#max_concurrent_task_count}
  */
  readonly maxConcurrentTaskCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#number_of_human_workers_per_data_object SagemakerLabelingJob#number_of_human_workers_per_data_object}
  */
  readonly numberOfHumanWorkersPerDataObject: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#pre_human_task_lambda_arn SagemakerLabelingJob#pre_human_task_lambda_arn}
  */
  readonly preHumanTaskLambdaArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_availability_lifetime_in_seconds SagemakerLabelingJob#task_availability_lifetime_in_seconds}
  */
  readonly taskAvailabilityLifetimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_description SagemakerLabelingJob#task_description}
  */
  readonly taskDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_keywords SagemakerLabelingJob#task_keywords}
  */
  readonly taskKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_time_limit_in_seconds SagemakerLabelingJob#task_time_limit_in_seconds}
  */
  readonly taskTimeLimitInSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#task_title SagemakerLabelingJob#task_title}
  */
  readonly taskTitle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#workteam_arn SagemakerLabelingJob#workteam_arn}
  */
  readonly workteamArn: string;
  /**
  * annotation_consolidation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#annotation_consolidation_config SagemakerLabelingJob#annotation_consolidation_config}
  */
  readonly annotationConsolidationConfig?: SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig[] | cdktf.IResolvable;
  /**
  * public_workforce_task_price block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#public_workforce_task_price SagemakerLabelingJob#public_workforce_task_price}
  */
  readonly publicWorkforceTaskPrice?: SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice[] | cdktf.IResolvable;
  /**
  * ui_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#ui_config SagemakerLabelingJob#ui_config}
  */
  readonly uiConfig?: SagemakerLabelingJobHumanTaskConfigUiConfig[] | cdktf.IResolvable;
}

export function sagemakerLabelingJobHumanTaskConfigToTerraform(struct?: SagemakerLabelingJobHumanTaskConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_task_count: cdktf.numberToTerraform(struct!.maxConcurrentTaskCount),
    number_of_human_workers_per_data_object: cdktf.numberToTerraform(struct!.numberOfHumanWorkersPerDataObject),
    pre_human_task_lambda_arn: cdktf.stringToTerraform(struct!.preHumanTaskLambdaArn),
    task_availability_lifetime_in_seconds: cdktf.numberToTerraform(struct!.taskAvailabilityLifetimeInSeconds),
    task_description: cdktf.stringToTerraform(struct!.taskDescription),
    task_keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.taskKeywords),
    task_time_limit_in_seconds: cdktf.numberToTerraform(struct!.taskTimeLimitInSeconds),
    task_title: cdktf.stringToTerraform(struct!.taskTitle),
    workteam_arn: cdktf.stringToTerraform(struct!.workteamArn),
    annotation_consolidation_config: cdktf.listMapper(sagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigToTerraform, true)(struct!.annotationConsolidationConfig),
    public_workforce_task_price: cdktf.listMapper(sagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceToTerraform, true)(struct!.publicWorkforceTaskPrice),
    ui_config: cdktf.listMapper(sagemakerLabelingJobHumanTaskConfigUiConfigToTerraform, true)(struct!.uiConfig),
  }
}


export function sagemakerLabelingJobHumanTaskConfigToHclTerraform(struct?: SagemakerLabelingJobHumanTaskConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_task_count: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentTaskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_human_workers_per_data_object: {
      value: cdktf.numberToHclTerraform(struct!.numberOfHumanWorkersPerDataObject),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pre_human_task_lambda_arn: {
      value: cdktf.stringToHclTerraform(struct!.preHumanTaskLambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_availability_lifetime_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.taskAvailabilityLifetimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_description: {
      value: cdktf.stringToHclTerraform(struct!.taskDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_keywords: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.taskKeywords),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    task_time_limit_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.taskTimeLimitInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_title: {
      value: cdktf.stringToHclTerraform(struct!.taskTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workteam_arn: {
      value: cdktf.stringToHclTerraform(struct!.workteamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotation_consolidation_config: {
      value: cdktf.listMapperHcl(sagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigToHclTerraform, true)(struct!.annotationConsolidationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList",
    },
    public_workforce_task_price: {
      value: cdktf.listMapperHcl(sagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceToHclTerraform, true)(struct!.publicWorkforceTaskPrice),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList",
    },
    ui_config: {
      value: cdktf.listMapperHcl(sagemakerLabelingJobHumanTaskConfigUiConfigToHclTerraform, true)(struct!.uiConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerLabelingJobHumanTaskConfigUiConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerLabelingJobHumanTaskConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerLabelingJobHumanTaskConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentTaskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentTaskCount = this._maxConcurrentTaskCount;
    }
    if (this._numberOfHumanWorkersPerDataObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfHumanWorkersPerDataObject = this._numberOfHumanWorkersPerDataObject;
    }
    if (this._preHumanTaskLambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.preHumanTaskLambdaArn = this._preHumanTaskLambdaArn;
    }
    if (this._taskAvailabilityLifetimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskAvailabilityLifetimeInSeconds = this._taskAvailabilityLifetimeInSeconds;
    }
    if (this._taskDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskDescription = this._taskDescription;
    }
    if (this._taskKeywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskKeywords = this._taskKeywords;
    }
    if (this._taskTimeLimitInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskTimeLimitInSeconds = this._taskTimeLimitInSeconds;
    }
    if (this._taskTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskTitle = this._taskTitle;
    }
    if (this._workteamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.workteamArn = this._workteamArn;
    }
    if (this._annotationConsolidationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationConsolidationConfig = this._annotationConsolidationConfig?.internalValue;
    }
    if (this._publicWorkforceTaskPrice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicWorkforceTaskPrice = this._publicWorkforceTaskPrice?.internalValue;
    }
    if (this._uiConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uiConfig = this._uiConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerLabelingJobHumanTaskConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConcurrentTaskCount = undefined;
      this._numberOfHumanWorkersPerDataObject = undefined;
      this._preHumanTaskLambdaArn = undefined;
      this._taskAvailabilityLifetimeInSeconds = undefined;
      this._taskDescription = undefined;
      this._taskKeywords = undefined;
      this._taskTimeLimitInSeconds = undefined;
      this._taskTitle = undefined;
      this._workteamArn = undefined;
      this._annotationConsolidationConfig.internalValue = undefined;
      this._publicWorkforceTaskPrice.internalValue = undefined;
      this._uiConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConcurrentTaskCount = value.maxConcurrentTaskCount;
      this._numberOfHumanWorkersPerDataObject = value.numberOfHumanWorkersPerDataObject;
      this._preHumanTaskLambdaArn = value.preHumanTaskLambdaArn;
      this._taskAvailabilityLifetimeInSeconds = value.taskAvailabilityLifetimeInSeconds;
      this._taskDescription = value.taskDescription;
      this._taskKeywords = value.taskKeywords;
      this._taskTimeLimitInSeconds = value.taskTimeLimitInSeconds;
      this._taskTitle = value.taskTitle;
      this._workteamArn = value.workteamArn;
      this._annotationConsolidationConfig.internalValue = value.annotationConsolidationConfig;
      this._publicWorkforceTaskPrice.internalValue = value.publicWorkforceTaskPrice;
      this._uiConfig.internalValue = value.uiConfig;
    }
  }

  // max_concurrent_task_count - computed: true, optional: true, required: false
  private _maxConcurrentTaskCount?: number; 
  public get maxConcurrentTaskCount() {
    return this.getNumberAttribute('max_concurrent_task_count');
  }
  public set maxConcurrentTaskCount(value: number) {
    this._maxConcurrentTaskCount = value;
  }
  public resetMaxConcurrentTaskCount() {
    this._maxConcurrentTaskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentTaskCountInput() {
    return this._maxConcurrentTaskCount;
  }

  // number_of_human_workers_per_data_object - computed: false, optional: false, required: true
  private _numberOfHumanWorkersPerDataObject?: number; 
  public get numberOfHumanWorkersPerDataObject() {
    return this.getNumberAttribute('number_of_human_workers_per_data_object');
  }
  public set numberOfHumanWorkersPerDataObject(value: number) {
    this._numberOfHumanWorkersPerDataObject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfHumanWorkersPerDataObjectInput() {
    return this._numberOfHumanWorkersPerDataObject;
  }

  // pre_human_task_lambda_arn - computed: false, optional: true, required: false
  private _preHumanTaskLambdaArn?: string; 
  public get preHumanTaskLambdaArn() {
    return this.getStringAttribute('pre_human_task_lambda_arn');
  }
  public set preHumanTaskLambdaArn(value: string) {
    this._preHumanTaskLambdaArn = value;
  }
  public resetPreHumanTaskLambdaArn() {
    this._preHumanTaskLambdaArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preHumanTaskLambdaArnInput() {
    return this._preHumanTaskLambdaArn;
  }

  // task_availability_lifetime_in_seconds - computed: true, optional: true, required: false
  private _taskAvailabilityLifetimeInSeconds?: number; 
  public get taskAvailabilityLifetimeInSeconds() {
    return this.getNumberAttribute('task_availability_lifetime_in_seconds');
  }
  public set taskAvailabilityLifetimeInSeconds(value: number) {
    this._taskAvailabilityLifetimeInSeconds = value;
  }
  public resetTaskAvailabilityLifetimeInSeconds() {
    this._taskAvailabilityLifetimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskAvailabilityLifetimeInSecondsInput() {
    return this._taskAvailabilityLifetimeInSeconds;
  }

  // task_description - computed: false, optional: false, required: true
  private _taskDescription?: string; 
  public get taskDescription() {
    return this.getStringAttribute('task_description');
  }
  public set taskDescription(value: string) {
    this._taskDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDescriptionInput() {
    return this._taskDescription;
  }

  // task_keywords - computed: false, optional: true, required: false
  private _taskKeywords?: string[]; 
  public get taskKeywords() {
    return cdktf.Fn.tolist(this.getListAttribute('task_keywords'));
  }
  public set taskKeywords(value: string[]) {
    this._taskKeywords = value;
  }
  public resetTaskKeywords() {
    this._taskKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskKeywordsInput() {
    return this._taskKeywords;
  }

  // task_time_limit_in_seconds - computed: false, optional: false, required: true
  private _taskTimeLimitInSeconds?: number; 
  public get taskTimeLimitInSeconds() {
    return this.getNumberAttribute('task_time_limit_in_seconds');
  }
  public set taskTimeLimitInSeconds(value: number) {
    this._taskTimeLimitInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTimeLimitInSecondsInput() {
    return this._taskTimeLimitInSeconds;
  }

  // task_title - computed: false, optional: false, required: true
  private _taskTitle?: string; 
  public get taskTitle() {
    return this.getStringAttribute('task_title');
  }
  public set taskTitle(value: string) {
    this._taskTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTitleInput() {
    return this._taskTitle;
  }

  // workteam_arn - computed: false, optional: false, required: true
  private _workteamArn?: string; 
  public get workteamArn() {
    return this.getStringAttribute('workteam_arn');
  }
  public set workteamArn(value: string) {
    this._workteamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workteamArnInput() {
    return this._workteamArn;
  }

  // annotation_consolidation_config - computed: false, optional: true, required: false
  private _annotationConsolidationConfig = new SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList(this, "annotation_consolidation_config", false);
  public get annotationConsolidationConfig() {
    return this._annotationConsolidationConfig;
  }
  public putAnnotationConsolidationConfig(value: SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig[] | cdktf.IResolvable) {
    this._annotationConsolidationConfig.internalValue = value;
  }
  public resetAnnotationConsolidationConfig() {
    this._annotationConsolidationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationConsolidationConfigInput() {
    return this._annotationConsolidationConfig.internalValue;
  }

  // public_workforce_task_price - computed: false, optional: true, required: false
  private _publicWorkforceTaskPrice = new SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList(this, "public_workforce_task_price", false);
  public get publicWorkforceTaskPrice() {
    return this._publicWorkforceTaskPrice;
  }
  public putPublicWorkforceTaskPrice(value: SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice[] | cdktf.IResolvable) {
    this._publicWorkforceTaskPrice.internalValue = value;
  }
  public resetPublicWorkforceTaskPrice() {
    this._publicWorkforceTaskPrice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicWorkforceTaskPriceInput() {
    return this._publicWorkforceTaskPrice.internalValue;
  }

  // ui_config - computed: false, optional: true, required: false
  private _uiConfig = new SagemakerLabelingJobHumanTaskConfigUiConfigList(this, "ui_config", false);
  public get uiConfig() {
    return this._uiConfig;
  }
  public putUiConfig(value: SagemakerLabelingJobHumanTaskConfigUiConfig[] | cdktf.IResolvable) {
    this._uiConfig.internalValue = value;
  }
  public resetUiConfig() {
    this._uiConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiConfigInput() {
    return this._uiConfig.internalValue;
  }
}

export class SagemakerLabelingJobHumanTaskConfigList extends cdktf.ComplexList {
  public internalValue? : SagemakerLabelingJobHumanTaskConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerLabelingJobHumanTaskConfigOutputReference {
    return new SagemakerLabelingJobHumanTaskConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerLabelingJobInputConfigDataAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#content_classifiers SagemakerLabelingJob#content_classifiers}
  */
  readonly contentClassifiers?: string[];
}

export function sagemakerLabelingJobInputConfigDataAttributesToTerraform(struct?: SagemakerLabelingJobInputConfigDataAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_classifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentClassifiers),
  }
}


export function sagemakerLabelingJobInputConfigDataAttributesToHclTerraform(struct?: SagemakerLabelingJobInputConfigDataAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_classifiers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentClassifiers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerLabelingJobInputConfigDataAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerLabelingJobInputConfigDataAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentClassifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentClassifiers = this._contentClassifiers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerLabelingJobInputConfigDataAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentClassifiers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentClassifiers = value.contentClassifiers;
    }
  }

  // content_classifiers - computed: false, optional: true, required: false
  private _contentClassifiers?: string[]; 
  public get contentClassifiers() {
    return cdktf.Fn.tolist(this.getListAttribute('content_classifiers'));
  }
  public set contentClassifiers(value: string[]) {
    this._contentClassifiers = value;
  }
  public resetContentClassifiers() {
    this._contentClassifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentClassifiersInput() {
    return this._contentClassifiers;
  }
}

export class SagemakerLabelingJobInputConfigDataAttributesList extends cdktf.ComplexList {
  public internalValue? : SagemakerLabelingJobInputConfigDataAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerLabelingJobInputConfigDataAttributesOutputReference {
    return new SagemakerLabelingJobInputConfigDataAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerLabelingJobInputConfigDataSourceS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#manifest_s3_uri SagemakerLabelingJob#manifest_s3_uri}
  */
  readonly manifestS3Uri: string;
}

export function sagemakerLabelingJobInputConfigDataSourceS3DataSourceToTerraform(struct?: SagemakerLabelingJobInputConfigDataSourceS3DataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manifest_s3_uri: cdktf.stringToTerraform(struct!.manifestS3Uri),
  }
}


export function sagemakerLabelingJobInputConfigDataSourceS3DataSourceToHclTerraform(struct?: SagemakerLabelingJobInputConfigDataSourceS3DataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manifest_s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.manifestS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerLabelingJobInputConfigDataSourceS3DataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manifestS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestS3Uri = this._manifestS3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerLabelingJobInputConfigDataSourceS3DataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._manifestS3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._manifestS3Uri = value.manifestS3Uri;
    }
  }

  // manifest_s3_uri - computed: false, optional: false, required: true
  private _manifestS3Uri?: string; 
  public get manifestS3Uri() {
    return this.getStringAttribute('manifest_s3_uri');
  }
  public set manifestS3Uri(value: string) {
    this._manifestS3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestS3UriInput() {
    return this._manifestS3Uri;
  }
}

export class SagemakerLabelingJobInputConfigDataSourceS3DataSourceList extends cdktf.ComplexList {
  public internalValue? : SagemakerLabelingJobInputConfigDataSourceS3DataSource[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference {
    return new SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerLabelingJobInputConfigDataSourceSnsDataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}
  */
  readonly snsTopicArn: string;
}

export function sagemakerLabelingJobInputConfigDataSourceSnsDataSourceToTerraform(struct?: SagemakerLabelingJobInputConfigDataSourceSnsDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sns_topic_arn: cdktf.stringToTerraform(struct!.snsTopicArn),
  }
}


export function sagemakerLabelingJobInputConfigDataSourceSnsDataSourceToHclTerraform(struct?: SagemakerLabelingJobInputConfigDataSourceSnsDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sns_topic_arn: {
      value: cdktf.stringToHclTerraform(struct!.snsTopicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerLabelingJobInputConfigDataSourceSnsDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snsTopicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsTopicArn = this._snsTopicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerLabelingJobInputConfigDataSourceSnsDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snsTopicArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snsTopicArn = value.snsTopicArn;
    }
  }

  // sns_topic_arn - computed: false, optional: false, required: true
  private _snsTopicArn?: string; 
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn;
  }
}

export class SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList extends cdktf.ComplexList {
  public internalValue? : SagemakerLabelingJobInputConfigDataSourceSnsDataSource[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference {
    return new SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerLabelingJobInputConfigDataSource {
  /**
  * s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#s3_data_source SagemakerLabelingJob#s3_data_source}
  */
  readonly s3DataSource?: SagemakerLabelingJobInputConfigDataSourceS3DataSource[] | cdktf.IResolvable;
  /**
  * sns_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#sns_data_source SagemakerLabelingJob#sns_data_source}
  */
  readonly snsDataSource?: SagemakerLabelingJobInputConfigDataSourceSnsDataSource[] | cdktf.IResolvable;
}

export function sagemakerLabelingJobInputConfigDataSourceToTerraform(struct?: SagemakerLabelingJobInputConfigDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_data_source: cdktf.listMapper(sagemakerLabelingJobInputConfigDataSourceS3DataSourceToTerraform, true)(struct!.s3DataSource),
    sns_data_source: cdktf.listMapper(sagemakerLabelingJobInputConfigDataSourceSnsDataSourceToTerraform, true)(struct!.snsDataSource),
  }
}


export function sagemakerLabelingJobInputConfigDataSourceToHclTerraform(struct?: SagemakerLabelingJobInputConfigDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_data_source: {
      value: cdktf.listMapperHcl(sagemakerLabelingJobInputConfigDataSourceS3DataSourceToHclTerraform, true)(struct!.s3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerLabelingJobInputConfigDataSourceS3DataSourceList",
    },
    sns_data_source: {
      value: cdktf.listMapperHcl(sagemakerLabelingJobInputConfigDataSourceSnsDataSourceToHclTerraform, true)(struct!.snsDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerLabelingJobInputConfigDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerLabelingJobInputConfigDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    if (this._snsDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsDataSource = this._snsDataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerLabelingJobInputConfigDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = undefined;
      this._snsDataSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = value.s3DataSource;
      this._snsDataSource.internalValue = value.snsDataSource;
    }
  }

  // s3_data_source - computed: false, optional: true, required: false
  private _s3DataSource = new SagemakerLabelingJobInputConfigDataSourceS3DataSourceList(this, "s3_data_source", false);
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: SagemakerLabelingJobInputConfigDataSourceS3DataSource[] | cdktf.IResolvable) {
    this._s3DataSource.internalValue = value;
  }
  public resetS3DataSource() {
    this._s3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }

  // sns_data_source - computed: false, optional: true, required: false
  private _snsDataSource = new SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList(this, "sns_data_source", false);
  public get snsDataSource() {
    return this._snsDataSource;
  }
  public putSnsDataSource(value: SagemakerLabelingJobInputConfigDataSourceSnsDataSource[] | cdktf.IResolvable) {
    this._snsDataSource.internalValue = value;
  }
  public resetSnsDataSource() {
    this._snsDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsDataSourceInput() {
    return this._snsDataSource.internalValue;
  }
}

export class SagemakerLabelingJobInputConfigDataSourceList extends cdktf.ComplexList {
  public internalValue? : SagemakerLabelingJobInputConfigDataSource[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerLabelingJobInputConfigDataSourceOutputReference {
    return new SagemakerLabelingJobInputConfigDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerLabelingJobInputConfig {
  /**
  * data_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#data_attributes SagemakerLabelingJob#data_attributes}
  */
  readonly dataAttributes?: SagemakerLabelingJobInputConfigDataAttributes[] | cdktf.IResolvable;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#data_source SagemakerLabelingJob#data_source}
  */
  readonly dataSource?: SagemakerLabelingJobInputConfigDataSource[] | cdktf.IResolvable;
}

export function sagemakerLabelingJobInputConfigToTerraform(struct?: SagemakerLabelingJobInputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_attributes: cdktf.listMapper(sagemakerLabelingJobInputConfigDataAttributesToTerraform, true)(struct!.dataAttributes),
    data_source: cdktf.listMapper(sagemakerLabelingJobInputConfigDataSourceToTerraform, true)(struct!.dataSource),
  }
}


export function sagemakerLabelingJobInputConfigToHclTerraform(struct?: SagemakerLabelingJobInputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_attributes: {
      value: cdktf.listMapperHcl(sagemakerLabelingJobInputConfigDataAttributesToHclTerraform, true)(struct!.dataAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerLabelingJobInputConfigDataAttributesList",
    },
    data_source: {
      value: cdktf.listMapperHcl(sagemakerLabelingJobInputConfigDataSourceToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerLabelingJobInputConfigDataSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerLabelingJobInputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerLabelingJobInputConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataAttributes = this._dataAttributes?.internalValue;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerLabelingJobInputConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataAttributes.internalValue = undefined;
      this._dataSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataAttributes.internalValue = value.dataAttributes;
      this._dataSource.internalValue = value.dataSource;
    }
  }

  // data_attributes - computed: false, optional: true, required: false
  private _dataAttributes = new SagemakerLabelingJobInputConfigDataAttributesList(this, "data_attributes", false);
  public get dataAttributes() {
    return this._dataAttributes;
  }
  public putDataAttributes(value: SagemakerLabelingJobInputConfigDataAttributes[] | cdktf.IResolvable) {
    this._dataAttributes.internalValue = value;
  }
  public resetDataAttributes() {
    this._dataAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAttributesInput() {
    return this._dataAttributes.internalValue;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new SagemakerLabelingJobInputConfigDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: SagemakerLabelingJobInputConfigDataSource[] | cdktf.IResolvable) {
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

export class SagemakerLabelingJobInputConfigList extends cdktf.ComplexList {
  public internalValue? : SagemakerLabelingJobInputConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerLabelingJobInputConfigOutputReference {
    return new SagemakerLabelingJobInputConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#security_group_ids SagemakerLabelingJob#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#subnets SagemakerLabelingJob#subnets}
  */
  readonly subnets: string[];
}

export function sagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigToTerraform(struct?: SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function sagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigToHclTerraform(struct?: SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
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
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList extends cdktf.ComplexList {
  public internalValue? : SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference {
    return new SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#volume_kms_key_id SagemakerLabelingJob#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#vpc_config SagemakerLabelingJob#vpc_config}
  */
  readonly vpcConfig?: SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig[] | cdktf.IResolvable;
}

export function sagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigToTerraform(struct?: SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_kms_key_id: cdktf.stringToTerraform(struct!.volumeKmsKeyId),
    vpc_config: cdktf.listMapper(sagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigToTerraform, true)(struct!.vpcConfig),
  }
}


export function sagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigToHclTerraform(struct?: SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_config: {
      value: cdktf.listMapperHcl(sagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigToHclTerraform, true)(struct!.vpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeKmsKeyId = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
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

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList(this, "vpc_config", false);
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig[] | cdktf.IResolvable) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}

export class SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList extends cdktf.ComplexList {
  public internalValue? : SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference {
    return new SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerLabelingJobLabelingJobAlgorithmsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#initial_active_learning_model_arn SagemakerLabelingJob#initial_active_learning_model_arn}
  */
  readonly initialActiveLearningModelArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithm_specification_arn SagemakerLabelingJob#labeling_job_algorithm_specification_arn}
  */
  readonly labelingJobAlgorithmSpecificationArn: string;
  /**
  * labeling_job_resource_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#labeling_job_resource_config SagemakerLabelingJob#labeling_job_resource_config}
  */
  readonly labelingJobResourceConfig?: SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig[] | cdktf.IResolvable;
}

export function sagemakerLabelingJobLabelingJobAlgorithmsConfigToTerraform(struct?: SagemakerLabelingJobLabelingJobAlgorithmsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial_active_learning_model_arn: cdktf.stringToTerraform(struct!.initialActiveLearningModelArn),
    labeling_job_algorithm_specification_arn: cdktf.stringToTerraform(struct!.labelingJobAlgorithmSpecificationArn),
    labeling_job_resource_config: cdktf.listMapper(sagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigToTerraform, true)(struct!.labelingJobResourceConfig),
  }
}


export function sagemakerLabelingJobLabelingJobAlgorithmsConfigToHclTerraform(struct?: SagemakerLabelingJobLabelingJobAlgorithmsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initial_active_learning_model_arn: {
      value: cdktf.stringToHclTerraform(struct!.initialActiveLearningModelArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labeling_job_algorithm_specification_arn: {
      value: cdktf.stringToHclTerraform(struct!.labelingJobAlgorithmSpecificationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labeling_job_resource_config: {
      value: cdktf.listMapperHcl(sagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigToHclTerraform, true)(struct!.labelingJobResourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerLabelingJobLabelingJobAlgorithmsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialActiveLearningModelArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialActiveLearningModelArn = this._initialActiveLearningModelArn;
    }
    if (this._labelingJobAlgorithmSpecificationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelingJobAlgorithmSpecificationArn = this._labelingJobAlgorithmSpecificationArn;
    }
    if (this._labelingJobResourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelingJobResourceConfig = this._labelingJobResourceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerLabelingJobLabelingJobAlgorithmsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initialActiveLearningModelArn = undefined;
      this._labelingJobAlgorithmSpecificationArn = undefined;
      this._labelingJobResourceConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initialActiveLearningModelArn = value.initialActiveLearningModelArn;
      this._labelingJobAlgorithmSpecificationArn = value.labelingJobAlgorithmSpecificationArn;
      this._labelingJobResourceConfig.internalValue = value.labelingJobResourceConfig;
    }
  }

  // initial_active_learning_model_arn - computed: false, optional: true, required: false
  private _initialActiveLearningModelArn?: string; 
  public get initialActiveLearningModelArn() {
    return this.getStringAttribute('initial_active_learning_model_arn');
  }
  public set initialActiveLearningModelArn(value: string) {
    this._initialActiveLearningModelArn = value;
  }
  public resetInitialActiveLearningModelArn() {
    this._initialActiveLearningModelArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialActiveLearningModelArnInput() {
    return this._initialActiveLearningModelArn;
  }

  // labeling_job_algorithm_specification_arn - computed: false, optional: false, required: true
  private _labelingJobAlgorithmSpecificationArn?: string; 
  public get labelingJobAlgorithmSpecificationArn() {
    return this.getStringAttribute('labeling_job_algorithm_specification_arn');
  }
  public set labelingJobAlgorithmSpecificationArn(value: string) {
    this._labelingJobAlgorithmSpecificationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelingJobAlgorithmSpecificationArnInput() {
    return this._labelingJobAlgorithmSpecificationArn;
  }

  // labeling_job_resource_config - computed: false, optional: true, required: false
  private _labelingJobResourceConfig = new SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList(this, "labeling_job_resource_config", false);
  public get labelingJobResourceConfig() {
    return this._labelingJobResourceConfig;
  }
  public putLabelingJobResourceConfig(value: SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig[] | cdktf.IResolvable) {
    this._labelingJobResourceConfig.internalValue = value;
  }
  public resetLabelingJobResourceConfig() {
    this._labelingJobResourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelingJobResourceConfigInput() {
    return this._labelingJobResourceConfig.internalValue;
  }
}

export class SagemakerLabelingJobLabelingJobAlgorithmsConfigList extends cdktf.ComplexList {
  public internalValue? : SagemakerLabelingJobLabelingJobAlgorithmsConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference {
    return new SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerLabelingJobOutputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#kms_key_id SagemakerLabelingJob#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#s3_output_path SagemakerLabelingJob#s3_output_path}
  */
  readonly s3OutputPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}
  */
  readonly snsTopicArn?: string;
}

export function sagemakerLabelingJobOutputConfigToTerraform(struct?: SagemakerLabelingJobOutputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
    sns_topic_arn: cdktf.stringToTerraform(struct!.snsTopicArn),
  }
}


export function sagemakerLabelingJobOutputConfigToHclTerraform(struct?: SagemakerLabelingJobOutputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktf.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns_topic_arn: {
      value: cdktf.stringToHclTerraform(struct!.snsTopicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerLabelingJobOutputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerLabelingJobOutputConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    if (this._snsTopicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsTopicArn = this._snsTopicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerLabelingJobOutputConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
      this._s3OutputPath = undefined;
      this._snsTopicArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
      this._snsTopicArn = value.snsTopicArn;
    }
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

  // sns_topic_arn - computed: false, optional: true, required: false
  private _snsTopicArn?: string; 
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  public resetSnsTopicArn() {
    this._snsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn;
  }
}

export class SagemakerLabelingJobOutputConfigList extends cdktf.ComplexList {
  public internalValue? : SagemakerLabelingJobOutputConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SagemakerLabelingJobOutputConfigOutputReference {
    return new SagemakerLabelingJobOutputConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job aws_sagemaker_labeling_job}
*/
export class SagemakerLabelingJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_labeling_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerLabelingJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerLabelingJob to import
  * @param importFromId The id of the existing SagemakerLabelingJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerLabelingJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_labeling_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/sagemaker_labeling_job aws_sagemaker_labeling_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerLabelingJobConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerLabelingJobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_labeling_job',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.31.0',
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
    this._labelAttributeName = config.labelAttributeName;
    this._labelCategoryConfigS3Uri = config.labelCategoryConfigS3Uri;
    this._labelingJobName = config.labelingJobName;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._stoppingConditions.internalValue = config.stoppingConditions;
    this._tags = config.tags;
    this._humanTaskConfig.internalValue = config.humanTaskConfig;
    this._inputConfig.internalValue = config.inputConfig;
    this._labelingJobAlgorithmsConfig.internalValue = config.labelingJobAlgorithmsConfig;
    this._outputConfig.internalValue = config.outputConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // job_reference_code - computed: true, optional: false, required: false
  public get jobReferenceCode() {
    return this.getStringAttribute('job_reference_code');
  }

  // label_attribute_name - computed: false, optional: false, required: true
  private _labelAttributeName?: string; 
  public get labelAttributeName() {
    return this.getStringAttribute('label_attribute_name');
  }
  public set labelAttributeName(value: string) {
    this._labelAttributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelAttributeNameInput() {
    return this._labelAttributeName;
  }

  // label_category_config_s3_uri - computed: false, optional: true, required: false
  private _labelCategoryConfigS3Uri?: string; 
  public get labelCategoryConfigS3Uri() {
    return this.getStringAttribute('label_category_config_s3_uri');
  }
  public set labelCategoryConfigS3Uri(value: string) {
    this._labelCategoryConfigS3Uri = value;
  }
  public resetLabelCategoryConfigS3Uri() {
    this._labelCategoryConfigS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelCategoryConfigS3UriInput() {
    return this._labelCategoryConfigS3Uri;
  }

  // label_counters - computed: true, optional: false, required: false
  private _labelCounters = new SagemakerLabelingJobLabelCountersList(this, "label_counters", false);
  public get labelCounters() {
    return this._labelCounters;
  }

  // labeling_job_arn - computed: true, optional: false, required: false
  public get labelingJobArn() {
    return this.getStringAttribute('labeling_job_arn');
  }

  // labeling_job_name - computed: false, optional: false, required: true
  private _labelingJobName?: string; 
  public get labelingJobName() {
    return this.getStringAttribute('labeling_job_name');
  }
  public set labelingJobName(value: string) {
    this._labelingJobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelingJobNameInput() {
    return this._labelingJobName;
  }

  // labeling_job_status - computed: true, optional: false, required: false
  public get labelingJobStatus() {
    return this.getStringAttribute('labeling_job_status');
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

  // stopping_conditions - computed: true, optional: true, required: false
  private _stoppingConditions = new SagemakerLabelingJobStoppingConditionsList(this, "stopping_conditions", false);
  public get stoppingConditions() {
    return this._stoppingConditions;
  }
  public putStoppingConditions(value: SagemakerLabelingJobStoppingConditions[] | cdktf.IResolvable) {
    this._stoppingConditions.internalValue = value;
  }
  public resetStoppingConditions() {
    this._stoppingConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppingConditionsInput() {
    return this._stoppingConditions.internalValue;
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
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // human_task_config - computed: false, optional: true, required: false
  private _humanTaskConfig = new SagemakerLabelingJobHumanTaskConfigList(this, "human_task_config", false);
  public get humanTaskConfig() {
    return this._humanTaskConfig;
  }
  public putHumanTaskConfig(value: SagemakerLabelingJobHumanTaskConfig[] | cdktf.IResolvable) {
    this._humanTaskConfig.internalValue = value;
  }
  public resetHumanTaskConfig() {
    this._humanTaskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanTaskConfigInput() {
    return this._humanTaskConfig.internalValue;
  }

  // input_config - computed: false, optional: true, required: false
  private _inputConfig = new SagemakerLabelingJobInputConfigList(this, "input_config", false);
  public get inputConfig() {
    return this._inputConfig;
  }
  public putInputConfig(value: SagemakerLabelingJobInputConfig[] | cdktf.IResolvable) {
    this._inputConfig.internalValue = value;
  }
  public resetInputConfig() {
    this._inputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputConfigInput() {
    return this._inputConfig.internalValue;
  }

  // labeling_job_algorithms_config - computed: false, optional: true, required: false
  private _labelingJobAlgorithmsConfig = new SagemakerLabelingJobLabelingJobAlgorithmsConfigList(this, "labeling_job_algorithms_config", false);
  public get labelingJobAlgorithmsConfig() {
    return this._labelingJobAlgorithmsConfig;
  }
  public putLabelingJobAlgorithmsConfig(value: SagemakerLabelingJobLabelingJobAlgorithmsConfig[] | cdktf.IResolvable) {
    this._labelingJobAlgorithmsConfig.internalValue = value;
  }
  public resetLabelingJobAlgorithmsConfig() {
    this._labelingJobAlgorithmsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelingJobAlgorithmsConfigInput() {
    return this._labelingJobAlgorithmsConfig.internalValue;
  }

  // output_config - computed: false, optional: true, required: false
  private _outputConfig = new SagemakerLabelingJobOutputConfigList(this, "output_config", false);
  public get outputConfig() {
    return this._outputConfig;
  }
  public putOutputConfig(value: SagemakerLabelingJobOutputConfig[] | cdktf.IResolvable) {
    this._outputConfig.internalValue = value;
  }
  public resetOutputConfig() {
    this._outputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigInput() {
    return this._outputConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      label_attribute_name: cdktf.stringToTerraform(this._labelAttributeName),
      label_category_config_s3_uri: cdktf.stringToTerraform(this._labelCategoryConfigS3Uri),
      labeling_job_name: cdktf.stringToTerraform(this._labelingJobName),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      stopping_conditions: cdktf.listMapper(sagemakerLabelingJobStoppingConditionsToTerraform, false)(this._stoppingConditions.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      human_task_config: cdktf.listMapper(sagemakerLabelingJobHumanTaskConfigToTerraform, true)(this._humanTaskConfig.internalValue),
      input_config: cdktf.listMapper(sagemakerLabelingJobInputConfigToTerraform, true)(this._inputConfig.internalValue),
      labeling_job_algorithms_config: cdktf.listMapper(sagemakerLabelingJobLabelingJobAlgorithmsConfigToTerraform, true)(this._labelingJobAlgorithmsConfig.internalValue),
      output_config: cdktf.listMapper(sagemakerLabelingJobOutputConfigToTerraform, true)(this._outputConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      label_attribute_name: {
        value: cdktf.stringToHclTerraform(this._labelAttributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label_category_config_s3_uri: {
        value: cdktf.stringToHclTerraform(this._labelCategoryConfigS3Uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labeling_job_name: {
        value: cdktf.stringToHclTerraform(this._labelingJobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stopping_conditions: {
        value: cdktf.listMapperHcl(sagemakerLabelingJobStoppingConditionsToHclTerraform, false)(this._stoppingConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerLabelingJobStoppingConditionsList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      human_task_config: {
        value: cdktf.listMapperHcl(sagemakerLabelingJobHumanTaskConfigToHclTerraform, true)(this._humanTaskConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerLabelingJobHumanTaskConfigList",
      },
      input_config: {
        value: cdktf.listMapperHcl(sagemakerLabelingJobInputConfigToHclTerraform, true)(this._inputConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerLabelingJobInputConfigList",
      },
      labeling_job_algorithms_config: {
        value: cdktf.listMapperHcl(sagemakerLabelingJobLabelingJobAlgorithmsConfigToHclTerraform, true)(this._labelingJobAlgorithmsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerLabelingJobLabelingJobAlgorithmsConfigList",
      },
      output_config: {
        value: cdktf.listMapperHcl(sagemakerLabelingJobOutputConfigToHclTerraform, true)(this._outputConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerLabelingJobOutputConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
