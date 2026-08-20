/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambda_function_scaling_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LambdaFunctionScalingConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Name or ARN of the Lambda function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambda_function_scaling_config#function_name LambdaFunctionScalingConfig#function_name}
  */
  readonly functionName: string;
  /**
  * Qualifier for the scaling configuration. Valid values: $LATEST.PUBLISHED or a numeric version number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambda_function_scaling_config#qualifier LambdaFunctionScalingConfig#qualifier}
  */
  readonly qualifier: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambda_function_scaling_config#region LambdaFunctionScalingConfig#region}
  */
  readonly region?: string;
  /**
  * function_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambda_function_scaling_config#function_scaling_config LambdaFunctionScalingConfig#function_scaling_config}
  */
  readonly functionScalingConfig?: LambdaFunctionScalingConfigFunctionScalingConfig[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambda_function_scaling_config#timeouts LambdaFunctionScalingConfig#timeouts}
  */
  readonly timeouts?: LambdaFunctionScalingConfigTimeouts;
}
export interface LambdaFunctionScalingConfigFunctionScalingConfig {
  /**
  * Maximum number of execution environments that can be provisioned for the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambda_function_scaling_config#max_execution_environments LambdaFunctionScalingConfig#max_execution_environments}
  */
  readonly maxExecutionEnvironments?: number;
  /**
  * Minimum number of execution environments to maintain for the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambda_function_scaling_config#min_execution_environments LambdaFunctionScalingConfig#min_execution_environments}
  */
  readonly minExecutionEnvironments?: number;
}

export function lambdaFunctionScalingConfigFunctionScalingConfigToTerraform(struct?: LambdaFunctionScalingConfigFunctionScalingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_execution_environments: cdktn.numberToTerraform(struct!.maxExecutionEnvironments),
    min_execution_environments: cdktn.numberToTerraform(struct!.minExecutionEnvironments),
  }
}


export function lambdaFunctionScalingConfigFunctionScalingConfigToHclTerraform(struct?: LambdaFunctionScalingConfigFunctionScalingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_execution_environments: {
      value: cdktn.numberToHclTerraform(struct!.maxExecutionEnvironments),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_execution_environments: {
      value: cdktn.numberToHclTerraform(struct!.minExecutionEnvironments),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaFunctionScalingConfigFunctionScalingConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdaFunctionScalingConfigFunctionScalingConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxExecutionEnvironments !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExecutionEnvironments = this._maxExecutionEnvironments;
    }
    if (this._minExecutionEnvironments !== undefined) {
      hasAnyValues = true;
      internalValueResult.minExecutionEnvironments = this._minExecutionEnvironments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionScalingConfigFunctionScalingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxExecutionEnvironments = undefined;
      this._minExecutionEnvironments = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxExecutionEnvironments = value.maxExecutionEnvironments;
      this._minExecutionEnvironments = value.minExecutionEnvironments;
    }
  }

  // max_execution_environments - computed: true, optional: true, required: false
  private _maxExecutionEnvironments?: number; 
  public get maxExecutionEnvironments() {
    return this.getNumberAttribute('max_execution_environments');
  }
  public set maxExecutionEnvironments(value: number) {
    this._maxExecutionEnvironments = value;
  }
  public resetMaxExecutionEnvironments() {
    this._maxExecutionEnvironments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExecutionEnvironmentsInput() {
    return this._maxExecutionEnvironments;
  }

  // min_execution_environments - computed: true, optional: true, required: false
  private _minExecutionEnvironments?: number; 
  public get minExecutionEnvironments() {
    return this.getNumberAttribute('min_execution_environments');
  }
  public set minExecutionEnvironments(value: number) {
    this._minExecutionEnvironments = value;
  }
  public resetMinExecutionEnvironments() {
    this._minExecutionEnvironments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minExecutionEnvironmentsInput() {
    return this._minExecutionEnvironments;
  }
}

export class LambdaFunctionScalingConfigFunctionScalingConfigList extends cdktn.ComplexList {
  public internalValue? : LambdaFunctionScalingConfigFunctionScalingConfig[] | cdktn.IResolvable

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
  public get(index: number): LambdaFunctionScalingConfigFunctionScalingConfigOutputReference {
    return new LambdaFunctionScalingConfigFunctionScalingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdaFunctionScalingConfigTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambda_function_scaling_config#create LambdaFunctionScalingConfig#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambda_function_scaling_config#delete LambdaFunctionScalingConfig#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambda_function_scaling_config#update LambdaFunctionScalingConfig#update}
  */
  readonly update?: string;
}

export function lambdaFunctionScalingConfigTimeoutsToTerraform(struct?: LambdaFunctionScalingConfigTimeouts | cdktn.IResolvable): any {
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


export function lambdaFunctionScalingConfigTimeoutsToHclTerraform(struct?: LambdaFunctionScalingConfigTimeouts | cdktn.IResolvable): any {
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

export class LambdaFunctionScalingConfigTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdaFunctionScalingConfigTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LambdaFunctionScalingConfigTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambda_function_scaling_config aws_lambda_function_scaling_config}
*/
export class LambdaFunctionScalingConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_function_scaling_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LambdaFunctionScalingConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdaFunctionScalingConfig to import
  * @param importFromId The id of the existing LambdaFunctionScalingConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambda_function_scaling_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdaFunctionScalingConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambda_function_scaling_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambda_function_scaling_config aws_lambda_function_scaling_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaFunctionScalingConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaFunctionScalingConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_function_scaling_config',
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
    this._functionName = config.functionName;
    this._qualifier = config.qualifier;
    this._region = config.region;
    this._functionScalingConfig.internalValue = config.functionScalingConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // function_state - computed: true, optional: false, required: false
  public get functionState() {
    return this.getStringAttribute('function_state');
  }

  // qualifier - computed: false, optional: false, required: true
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
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

  // function_scaling_config - computed: false, optional: true, required: false
  private _functionScalingConfig = new LambdaFunctionScalingConfigFunctionScalingConfigList(this, "function_scaling_config", false);
  public get functionScalingConfig() {
    return this._functionScalingConfig;
  }
  public putFunctionScalingConfig(value: LambdaFunctionScalingConfigFunctionScalingConfig[] | cdktn.IResolvable) {
    this._functionScalingConfig.internalValue = value;
  }
  public resetFunctionScalingConfig() {
    this._functionScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionScalingConfigInput() {
    return this._functionScalingConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LambdaFunctionScalingConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LambdaFunctionScalingConfigTimeouts) {
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
      function_name: cdktn.stringToTerraform(this._functionName),
      qualifier: cdktn.stringToTerraform(this._qualifier),
      region: cdktn.stringToTerraform(this._region),
      function_scaling_config: cdktn.listMapper(lambdaFunctionScalingConfigFunctionScalingConfigToTerraform, true)(this._functionScalingConfig.internalValue),
      timeouts: lambdaFunctionScalingConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      function_name: {
        value: cdktn.stringToHclTerraform(this._functionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qualifier: {
        value: cdktn.stringToHclTerraform(this._qualifier),
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
      function_scaling_config: {
        value: cdktn.listMapperHcl(lambdaFunctionScalingConfigFunctionScalingConfigToHclTerraform, true)(this._functionScalingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaFunctionScalingConfigFunctionScalingConfigList",
      },
      timeouts: {
        value: lambdaFunctionScalingConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LambdaFunctionScalingConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
