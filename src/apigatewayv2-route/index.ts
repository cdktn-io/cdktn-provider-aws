/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Apigatewayv2RouteConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route#api_id Apigatewayv2Route#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}
  */
  readonly apiKeyRequired?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}
  */
  readonly authorizationScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}
  */
  readonly authorizationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route#id Apigatewayv2Route#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}
  */
  readonly modelSelectionExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}
  */
  readonly operationName?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route#region Apigatewayv2Route#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route#request_models Apigatewayv2Route#request_models}
  */
  readonly requestModels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route#route_key Apigatewayv2Route#route_key}
  */
  readonly routeKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}
  */
  readonly routeResponseSelectionExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route#target Apigatewayv2Route#target}
  */
  readonly target?: string;
  /**
  * request_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route#request_parameter Apigatewayv2Route#request_parameter}
  */
  readonly requestParameter?: Apigatewayv2RouteRequestParameter[] | cdktn.IResolvable;
}
export interface Apigatewayv2RouteRequestParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route#request_parameter_key Apigatewayv2Route#request_parameter_key}
  */
  readonly requestParameterKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route#required Apigatewayv2Route#required}
  */
  readonly required: boolean | cdktn.IResolvable;
}

export function apigatewayv2RouteRequestParameterToTerraform(struct?: Apigatewayv2RouteRequestParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    request_parameter_key: cdktn.stringToTerraform(struct!.requestParameterKey),
    required: cdktn.booleanToTerraform(struct!.required),
  }
}


export function apigatewayv2RouteRequestParameterToHclTerraform(struct?: Apigatewayv2RouteRequestParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    request_parameter_key: {
      value: cdktn.stringToHclTerraform(struct!.requestParameterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Apigatewayv2RouteRequestParameterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Apigatewayv2RouteRequestParameter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestParameterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestParameterKey = this._requestParameterKey;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2RouteRequestParameter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestParameterKey = undefined;
      this._required = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestParameterKey = value.requestParameterKey;
      this._required = value.required;
    }
  }

  // request_parameter_key - computed: false, optional: false, required: true
  private _requestParameterKey?: string; 
  public get requestParameterKey() {
    return this.getStringAttribute('request_parameter_key');
  }
  public set requestParameterKey(value: string) {
    this._requestParameterKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParameterKeyInput() {
    return this._requestParameterKey;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}

export class Apigatewayv2RouteRequestParameterList extends cdktn.ComplexList {
  public internalValue? : Apigatewayv2RouteRequestParameter[] | cdktn.IResolvable

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
  public get(index: number): Apigatewayv2RouteRequestParameterOutputReference {
    return new Apigatewayv2RouteRequestParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route aws_apigatewayv2_route}
*/
export class Apigatewayv2Route extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_apigatewayv2_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Apigatewayv2Route resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Apigatewayv2Route to import
  * @param importFromId The id of the existing Apigatewayv2Route that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Apigatewayv2Route to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_apigatewayv2_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/apigatewayv2_route aws_apigatewayv2_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Apigatewayv2RouteConfig
  */
  public constructor(scope: Construct, id: string, config: Apigatewayv2RouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_route',
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
    this._apiId = config.apiId;
    this._apiKeyRequired = config.apiKeyRequired;
    this._authorizationScopes = config.authorizationScopes;
    this._authorizationType = config.authorizationType;
    this._authorizerId = config.authorizerId;
    this._id = config.id;
    this._modelSelectionExpression = config.modelSelectionExpression;
    this._operationName = config.operationName;
    this._region = config.region;
    this._requestModels = config.requestModels;
    this._routeKey = config.routeKey;
    this._routeResponseSelectionExpression = config.routeResponseSelectionExpression;
    this._target = config.target;
    this._requestParameter.internalValue = config.requestParameter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // api_key_required - computed: false, optional: true, required: false
  private _apiKeyRequired?: boolean | cdktn.IResolvable; 
  public get apiKeyRequired() {
    return this.getBooleanAttribute('api_key_required');
  }
  public set apiKeyRequired(value: boolean | cdktn.IResolvable) {
    this._apiKeyRequired = value;
  }
  public resetApiKeyRequired() {
    this._apiKeyRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyRequiredInput() {
    return this._apiKeyRequired;
  }

  // authorization_scopes - computed: false, optional: true, required: false
  private _authorizationScopes?: string[]; 
  public get authorizationScopes() {
    return cdktn.Fn.tolist(this.getListAttribute('authorization_scopes'));
  }
  public set authorizationScopes(value: string[]) {
    this._authorizationScopes = value;
  }
  public resetAuthorizationScopes() {
    this._authorizationScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationScopesInput() {
    return this._authorizationScopes;
  }

  // authorization_type - computed: false, optional: true, required: false
  private _authorizationType?: string; 
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  public resetAuthorizationType() {
    this._authorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType;
  }

  // authorizer_id - computed: false, optional: true, required: false
  private _authorizerId?: string; 
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }
  public set authorizerId(value: string) {
    this._authorizerId = value;
  }
  public resetAuthorizerId() {
    this._authorizerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerIdInput() {
    return this._authorizerId;
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

  // model_selection_expression - computed: false, optional: true, required: false
  private _modelSelectionExpression?: string; 
  public get modelSelectionExpression() {
    return this.getStringAttribute('model_selection_expression');
  }
  public set modelSelectionExpression(value: string) {
    this._modelSelectionExpression = value;
  }
  public resetModelSelectionExpression() {
    this._modelSelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSelectionExpressionInput() {
    return this._modelSelectionExpression;
  }

  // operation_name - computed: false, optional: true, required: false
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  public resetOperationName() {
    this._operationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
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

  // request_models - computed: false, optional: true, required: false
  private _requestModels?: { [key: string]: string }; 
  public get requestModels() {
    return this.getStringMapAttribute('request_models');
  }
  public set requestModels(value: { [key: string]: string }) {
    this._requestModels = value;
  }
  public resetRequestModels() {
    this._requestModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestModelsInput() {
    return this._requestModels;
  }

  // route_key - computed: false, optional: false, required: true
  private _routeKey?: string; 
  public get routeKey() {
    return this.getStringAttribute('route_key');
  }
  public set routeKey(value: string) {
    this._routeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeKeyInput() {
    return this._routeKey;
  }

  // route_response_selection_expression - computed: false, optional: true, required: false
  private _routeResponseSelectionExpression?: string; 
  public get routeResponseSelectionExpression() {
    return this.getStringAttribute('route_response_selection_expression');
  }
  public set routeResponseSelectionExpression(value: string) {
    this._routeResponseSelectionExpression = value;
  }
  public resetRouteResponseSelectionExpression() {
    this._routeResponseSelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeResponseSelectionExpressionInput() {
    return this._routeResponseSelectionExpression;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // request_parameter - computed: false, optional: true, required: false
  private _requestParameter = new Apigatewayv2RouteRequestParameterList(this, "request_parameter", true);
  public get requestParameter() {
    return this._requestParameter;
  }
  public putRequestParameter(value: Apigatewayv2RouteRequestParameter[] | cdktn.IResolvable) {
    this._requestParameter.internalValue = value;
  }
  public resetRequestParameter() {
    this._requestParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParameterInput() {
    return this._requestParameter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktn.stringToTerraform(this._apiId),
      api_key_required: cdktn.booleanToTerraform(this._apiKeyRequired),
      authorization_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._authorizationScopes),
      authorization_type: cdktn.stringToTerraform(this._authorizationType),
      authorizer_id: cdktn.stringToTerraform(this._authorizerId),
      id: cdktn.stringToTerraform(this._id),
      model_selection_expression: cdktn.stringToTerraform(this._modelSelectionExpression),
      operation_name: cdktn.stringToTerraform(this._operationName),
      region: cdktn.stringToTerraform(this._region),
      request_models: cdktn.hashMapper(cdktn.stringToTerraform)(this._requestModels),
      route_key: cdktn.stringToTerraform(this._routeKey),
      route_response_selection_expression: cdktn.stringToTerraform(this._routeResponseSelectionExpression),
      target: cdktn.stringToTerraform(this._target),
      request_parameter: cdktn.listMapper(apigatewayv2RouteRequestParameterToTerraform, true)(this._requestParameter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktn.stringToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key_required: {
        value: cdktn.booleanToHclTerraform(this._apiKeyRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authorization_scopes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._authorizationScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authorization_type: {
        value: cdktn.stringToHclTerraform(this._authorizationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizer_id: {
        value: cdktn.stringToHclTerraform(this._authorizerId),
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
      model_selection_expression: {
        value: cdktn.stringToHclTerraform(this._modelSelectionExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation_name: {
        value: cdktn.stringToHclTerraform(this._operationName),
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
      request_models: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._requestModels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      route_key: {
        value: cdktn.stringToHclTerraform(this._routeKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_response_selection_expression: {
        value: cdktn.stringToHclTerraform(this._routeResponseSelectionExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktn.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_parameter: {
        value: cdktn.listMapperHcl(apigatewayv2RouteRequestParameterToHclTerraform, true)(this._requestParameter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Apigatewayv2RouteRequestParameterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
