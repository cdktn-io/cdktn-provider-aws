/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LambdawebFunctionEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auth_type LambdawebFunctionEndpoint#auth_type}
  */
  readonly authType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auto_deployment_mode LambdawebFunctionEndpoint#auto_deployment_mode}
  */
  readonly autoDeploymentMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#description LambdawebFunctionEndpoint#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_name LambdawebFunctionEndpoint#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_type LambdawebFunctionEndpoint#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#function_name LambdawebFunctionEndpoint#function_name}
  */
  readonly functionName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#region LambdawebFunctionEndpoint#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#regions LambdawebFunctionEndpoint#regions}
  */
  readonly regions?: string[];
  /**
  * revision_weight block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#revision_weight LambdawebFunctionEndpoint#revision_weight}
  */
  readonly revisionWeight?: LambdawebFunctionEndpointRevisionWeight[] | cdktn.IResolvable;
  /**
  * scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#scaling_config LambdawebFunctionEndpoint#scaling_config}
  */
  readonly scalingConfig?: LambdawebFunctionEndpointScalingConfig[] | cdktn.IResolvable;
  /**
  * throttle_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#throttle_config LambdawebFunctionEndpoint#throttle_config}
  */
  readonly throttleConfig?: LambdawebFunctionEndpointThrottleConfig[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#timeouts LambdawebFunctionEndpoint#timeouts}
  */
  readonly timeouts?: LambdawebFunctionEndpointTimeouts;
}
export interface LambdawebFunctionEndpointRevisionWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#revision_id LambdawebFunctionEndpoint#revision_id}
  */
  readonly revisionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#weight LambdawebFunctionEndpoint#weight}
  */
  readonly weight: number;
}

export function lambdawebFunctionEndpointRevisionWeightToTerraform(struct?: LambdawebFunctionEndpointRevisionWeight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    revision_id: cdktn.stringToTerraform(struct!.revisionId),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function lambdawebFunctionEndpointRevisionWeightToHclTerraform(struct?: LambdawebFunctionEndpointRevisionWeight | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    revision_id: {
      value: cdktn.stringToHclTerraform(struct!.revisionId),
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

export class LambdawebFunctionEndpointRevisionWeightOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdawebFunctionEndpointRevisionWeight | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._revisionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionId = this._revisionId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdawebFunctionEndpointRevisionWeight | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._revisionId = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._revisionId = value.revisionId;
      this._weight = value.weight;
    }
  }

  // revision_id - computed: false, optional: false, required: true
  private _revisionId?: string; 
  public get revisionId() {
    return this.getStringAttribute('revision_id');
  }
  public set revisionId(value: string) {
    this._revisionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionIdInput() {
    return this._revisionId;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class LambdawebFunctionEndpointRevisionWeightList extends cdktn.ComplexList {
  public internalValue? : LambdawebFunctionEndpointRevisionWeight[] | cdktn.IResolvable

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
  public get(index: number): LambdawebFunctionEndpointRevisionWeightOutputReference {
    return new LambdawebFunctionEndpointRevisionWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdawebFunctionEndpointScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#max_environments LambdawebFunctionEndpoint#max_environments}
  */
  readonly maxEnvironments: number;
}

export function lambdawebFunctionEndpointScalingConfigToTerraform(struct?: LambdawebFunctionEndpointScalingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_environments: cdktn.numberToTerraform(struct!.maxEnvironments),
  }
}


export function lambdawebFunctionEndpointScalingConfigToHclTerraform(struct?: LambdawebFunctionEndpointScalingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_environments: {
      value: cdktn.numberToHclTerraform(struct!.maxEnvironments),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdawebFunctionEndpointScalingConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdawebFunctionEndpointScalingConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEnvironments !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEnvironments = this._maxEnvironments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdawebFunctionEndpointScalingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxEnvironments = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxEnvironments = value.maxEnvironments;
    }
  }

  // max_environments - computed: false, optional: false, required: true
  private _maxEnvironments?: number; 
  public get maxEnvironments() {
    return this.getNumberAttribute('max_environments');
  }
  public set maxEnvironments(value: number) {
    this._maxEnvironments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEnvironmentsInput() {
    return this._maxEnvironments;
  }
}

export class LambdawebFunctionEndpointScalingConfigList extends cdktn.ComplexList {
  public internalValue? : LambdawebFunctionEndpointScalingConfig[] | cdktn.IResolvable

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
  public get(index: number): LambdawebFunctionEndpointScalingConfigOutputReference {
    return new LambdawebFunctionEndpointScalingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdawebFunctionEndpointThrottleConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#rate_limit LambdawebFunctionEndpoint#rate_limit}
  */
  readonly rateLimit: number;
}

export function lambdawebFunctionEndpointThrottleConfigToTerraform(struct?: LambdawebFunctionEndpointThrottleConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rate_limit: cdktn.numberToTerraform(struct!.rateLimit),
  }
}


export function lambdawebFunctionEndpointThrottleConfigToHclTerraform(struct?: LambdawebFunctionEndpointThrottleConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rate_limit: {
      value: cdktn.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdawebFunctionEndpointThrottleConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdawebFunctionEndpointThrottleConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdawebFunctionEndpointThrottleConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rateLimit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rateLimit = value.rateLimit;
    }
  }

  // rate_limit - computed: false, optional: false, required: true
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }
}

export class LambdawebFunctionEndpointThrottleConfigList extends cdktn.ComplexList {
  public internalValue? : LambdawebFunctionEndpointThrottleConfig[] | cdktn.IResolvable

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
  public get(index: number): LambdawebFunctionEndpointThrottleConfigOutputReference {
    return new LambdawebFunctionEndpointThrottleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdawebFunctionEndpointTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#create LambdawebFunctionEndpoint#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#delete LambdawebFunctionEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#update LambdawebFunctionEndpoint#update}
  */
  readonly update?: string;
}

export function lambdawebFunctionEndpointTimeoutsToTerraform(struct?: LambdawebFunctionEndpointTimeouts | cdktn.IResolvable): any {
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


export function lambdawebFunctionEndpointTimeoutsToHclTerraform(struct?: LambdawebFunctionEndpointTimeouts | cdktn.IResolvable): any {
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

export class LambdawebFunctionEndpointTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdawebFunctionEndpointTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LambdawebFunctionEndpointTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint aws_lambdaweb_function_endpoint}
*/
export class LambdawebFunctionEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambdaweb_function_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LambdawebFunctionEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdawebFunctionEndpoint to import
  * @param importFromId The id of the existing LambdawebFunctionEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdawebFunctionEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambdaweb_function_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint aws_lambdaweb_function_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdawebFunctionEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: LambdawebFunctionEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambdaweb_function_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.73.0',
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
    this._authType = config.authType;
    this._autoDeploymentMode = config.autoDeploymentMode;
    this._description = config.description;
    this._endpointName = config.endpointName;
    this._endpointType = config.endpointType;
    this._functionName = config.functionName;
    this._region = config.region;
    this._regions = config.regions;
    this._revisionWeight.internalValue = config.revisionWeight;
    this._scalingConfig.internalValue = config.scalingConfig;
    this._throttleConfig.internalValue = config.throttleConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // auto_deployment_mode - computed: true, optional: true, required: false
  private _autoDeploymentMode?: string; 
  public get autoDeploymentMode() {
    return this.getStringAttribute('auto_deployment_mode');
  }
  public set autoDeploymentMode(value: string) {
    this._autoDeploymentMode = value;
  }
  public resetAutoDeploymentMode() {
    this._autoDeploymentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeploymentModeInput() {
    return this._autoDeploymentMode;
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

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // endpoint_name - computed: false, optional: false, required: true
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // endpoint_type - computed: false, optional: false, required: true
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
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

  // regional_domain_names - computed: true, optional: false, required: false
  private _regionalDomainNames = new cdktn.StringMap(this, "regional_domain_names");
  public get regionalDomainNames() {
    return this._regionalDomainNames;
  }

  // regions - computed: true, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // revision_weight - computed: false, optional: true, required: false
  private _revisionWeight = new LambdawebFunctionEndpointRevisionWeightList(this, "revision_weight", false);
  public get revisionWeight() {
    return this._revisionWeight;
  }
  public putRevisionWeight(value: LambdawebFunctionEndpointRevisionWeight[] | cdktn.IResolvable) {
    this._revisionWeight.internalValue = value;
  }
  public resetRevisionWeight() {
    this._revisionWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionWeightInput() {
    return this._revisionWeight.internalValue;
  }

  // scaling_config - computed: false, optional: true, required: false
  private _scalingConfig = new LambdawebFunctionEndpointScalingConfigList(this, "scaling_config", false);
  public get scalingConfig() {
    return this._scalingConfig;
  }
  public putScalingConfig(value: LambdawebFunctionEndpointScalingConfig[] | cdktn.IResolvable) {
    this._scalingConfig.internalValue = value;
  }
  public resetScalingConfig() {
    this._scalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigInput() {
    return this._scalingConfig.internalValue;
  }

  // throttle_config - computed: false, optional: true, required: false
  private _throttleConfig = new LambdawebFunctionEndpointThrottleConfigList(this, "throttle_config", false);
  public get throttleConfig() {
    return this._throttleConfig;
  }
  public putThrottleConfig(value: LambdawebFunctionEndpointThrottleConfig[] | cdktn.IResolvable) {
    this._throttleConfig.internalValue = value;
  }
  public resetThrottleConfig() {
    this._throttleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleConfigInput() {
    return this._throttleConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LambdawebFunctionEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LambdawebFunctionEndpointTimeouts) {
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
      auth_type: cdktn.stringToTerraform(this._authType),
      auto_deployment_mode: cdktn.stringToTerraform(this._autoDeploymentMode),
      description: cdktn.stringToTerraform(this._description),
      endpoint_name: cdktn.stringToTerraform(this._endpointName),
      endpoint_type: cdktn.stringToTerraform(this._endpointType),
      function_name: cdktn.stringToTerraform(this._functionName),
      region: cdktn.stringToTerraform(this._region),
      regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._regions),
      revision_weight: cdktn.listMapper(lambdawebFunctionEndpointRevisionWeightToTerraform, true)(this._revisionWeight.internalValue),
      scaling_config: cdktn.listMapper(lambdawebFunctionEndpointScalingConfigToTerraform, true)(this._scalingConfig.internalValue),
      throttle_config: cdktn.listMapper(lambdawebFunctionEndpointThrottleConfigToTerraform, true)(this._throttleConfig.internalValue),
      timeouts: lambdawebFunctionEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_type: {
        value: cdktn.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_deployment_mode: {
        value: cdktn.stringToHclTerraform(this._autoDeploymentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_name: {
        value: cdktn.stringToHclTerraform(this._endpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_type: {
        value: cdktn.stringToHclTerraform(this._endpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_name: {
        value: cdktn.stringToHclTerraform(this._functionName),
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
      regions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      revision_weight: {
        value: cdktn.listMapperHcl(lambdawebFunctionEndpointRevisionWeightToHclTerraform, true)(this._revisionWeight.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdawebFunctionEndpointRevisionWeightList",
      },
      scaling_config: {
        value: cdktn.listMapperHcl(lambdawebFunctionEndpointScalingConfigToHclTerraform, true)(this._scalingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdawebFunctionEndpointScalingConfigList",
      },
      throttle_config: {
        value: cdktn.listMapperHcl(lambdawebFunctionEndpointThrottleConfigToHclTerraform, true)(this._throttleConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdawebFunctionEndpointThrottleConfigList",
      },
      timeouts: {
        value: lambdawebFunctionEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LambdawebFunctionEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
