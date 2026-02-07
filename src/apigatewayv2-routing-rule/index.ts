/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Apigatewayv2RoutingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#domain_name Apigatewayv2RoutingRule#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}
  */
  readonly priority: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#region Apigatewayv2RoutingRule#region}
  */
  readonly region?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#action Apigatewayv2RoutingRule#action}
  */
  readonly action?: Apigatewayv2RoutingRuleAction[] | cdktf.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#condition Apigatewayv2RoutingRule#condition}
  */
  readonly condition?: Apigatewayv2RoutingRuleCondition[] | cdktf.IResolvable;
}
export interface Apigatewayv2RoutingRuleActionInvokeApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#api_id Apigatewayv2RoutingRule#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#stage Apigatewayv2RoutingRule#stage}
  */
  readonly stage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#strip_base_path Apigatewayv2RoutingRule#strip_base_path}
  */
  readonly stripBasePath?: boolean | cdktf.IResolvable;
}

export function apigatewayv2RoutingRuleActionInvokeApiToTerraform(struct?: Apigatewayv2RoutingRuleActionInvokeApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_id: cdktf.stringToTerraform(struct!.apiId),
    stage: cdktf.stringToTerraform(struct!.stage),
    strip_base_path: cdktf.booleanToTerraform(struct!.stripBasePath),
  }
}


export function apigatewayv2RoutingRuleActionInvokeApiToHclTerraform(struct?: Apigatewayv2RoutingRuleActionInvokeApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_id: {
      value: cdktf.stringToHclTerraform(struct!.apiId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage: {
      value: cdktf.stringToHclTerraform(struct!.stage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_base_path: {
      value: cdktf.booleanToHclTerraform(struct!.stripBasePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Apigatewayv2RoutingRuleActionInvokeApiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Apigatewayv2RoutingRuleActionInvokeApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiId = this._apiId;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    if (this._stripBasePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripBasePath = this._stripBasePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2RoutingRuleActionInvokeApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiId = undefined;
      this._stage = undefined;
      this._stripBasePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiId = value.apiId;
      this._stage = value.stage;
      this._stripBasePath = value.stripBasePath;
    }
  }

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

  // stage - computed: false, optional: false, required: true
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // strip_base_path - computed: false, optional: true, required: false
  private _stripBasePath?: boolean | cdktf.IResolvable; 
  public get stripBasePath() {
    return this.getBooleanAttribute('strip_base_path');
  }
  public set stripBasePath(value: boolean | cdktf.IResolvable) {
    this._stripBasePath = value;
  }
  public resetStripBasePath() {
    this._stripBasePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripBasePathInput() {
    return this._stripBasePath;
  }
}

export class Apigatewayv2RoutingRuleActionInvokeApiList extends cdktf.ComplexList {
  public internalValue? : Apigatewayv2RoutingRuleActionInvokeApi[] | cdktf.IResolvable

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
  public get(index: number): Apigatewayv2RoutingRuleActionInvokeApiOutputReference {
    return new Apigatewayv2RoutingRuleActionInvokeApiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Apigatewayv2RoutingRuleAction {
  /**
  * invoke_api block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#invoke_api Apigatewayv2RoutingRule#invoke_api}
  */
  readonly invokeApi?: Apigatewayv2RoutingRuleActionInvokeApi[] | cdktf.IResolvable;
}

export function apigatewayv2RoutingRuleActionToTerraform(struct?: Apigatewayv2RoutingRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invoke_api: cdktf.listMapper(apigatewayv2RoutingRuleActionInvokeApiToTerraform, true)(struct!.invokeApi),
  }
}


export function apigatewayv2RoutingRuleActionToHclTerraform(struct?: Apigatewayv2RoutingRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invoke_api: {
      value: cdktf.listMapperHcl(apigatewayv2RoutingRuleActionInvokeApiToHclTerraform, true)(struct!.invokeApi),
      isBlock: true,
      type: "list",
      storageClassType: "Apigatewayv2RoutingRuleActionInvokeApiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Apigatewayv2RoutingRuleActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Apigatewayv2RoutingRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invokeApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invokeApi = this._invokeApi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2RoutingRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invokeApi.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invokeApi.internalValue = value.invokeApi;
    }
  }

  // invoke_api - computed: false, optional: true, required: false
  private _invokeApi = new Apigatewayv2RoutingRuleActionInvokeApiList(this, "invoke_api", false);
  public get invokeApi() {
    return this._invokeApi;
  }
  public putInvokeApi(value: Apigatewayv2RoutingRuleActionInvokeApi[] | cdktf.IResolvable) {
    this._invokeApi.internalValue = value;
  }
  public resetInvokeApi() {
    this._invokeApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeApiInput() {
    return this._invokeApi.internalValue;
  }
}

export class Apigatewayv2RoutingRuleActionList extends cdktf.ComplexList {
  public internalValue? : Apigatewayv2RoutingRuleAction[] | cdktf.IResolvable

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
  public get(index: number): Apigatewayv2RoutingRuleActionOutputReference {
    return new Apigatewayv2RoutingRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Apigatewayv2RoutingRuleConditionMatchBasePaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}
  */
  readonly anyOf: string[];
}

export function apigatewayv2RoutingRuleConditionMatchBasePathsToTerraform(struct?: Apigatewayv2RoutingRuleConditionMatchBasePaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anyOf),
  }
}


export function apigatewayv2RoutingRuleConditionMatchBasePathsToHclTerraform(struct?: Apigatewayv2RoutingRuleConditionMatchBasePaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_of: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.anyOf),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Apigatewayv2RoutingRuleConditionMatchBasePaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2RoutingRuleConditionMatchBasePaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyOf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyOf = value.anyOf;
    }
  }

  // any_of - computed: false, optional: false, required: true
  private _anyOf?: string[]; 
  public get anyOf() {
    return cdktf.Fn.tolist(this.getListAttribute('any_of'));
  }
  public set anyOf(value: string[]) {
    this._anyOf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }
}

export class Apigatewayv2RoutingRuleConditionMatchBasePathsList extends cdktf.ComplexList {
  public internalValue? : Apigatewayv2RoutingRuleConditionMatchBasePaths[] | cdktf.IResolvable

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
  public get(index: number): Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference {
    return new Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#header Apigatewayv2RoutingRule#header}
  */
  readonly header: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#value_glob Apigatewayv2RoutingRule#value_glob}
  */
  readonly valueGlob: string;
}

export function apigatewayv2RoutingRuleConditionMatchHeadersAnyOfToTerraform(struct?: Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    value_glob: cdktf.stringToTerraform(struct!.valueGlob),
  }
}


export function apigatewayv2RoutingRuleConditionMatchHeadersAnyOfToHclTerraform(struct?: Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_glob: {
      value: cdktf.stringToHclTerraform(struct!.valueGlob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._valueGlob !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueGlob = this._valueGlob;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._valueGlob = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._valueGlob = value.valueGlob;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // value_glob - computed: false, optional: false, required: true
  private _valueGlob?: string; 
  public get valueGlob() {
    return this.getStringAttribute('value_glob');
  }
  public set valueGlob(value: string) {
    this._valueGlob = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueGlobInput() {
    return this._valueGlob;
  }
}

export class Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList extends cdktf.ComplexList {
  public internalValue? : Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf[] | cdktf.IResolvable

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
  public get(index: number): Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference {
    return new Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Apigatewayv2RoutingRuleConditionMatchHeaders {
  /**
  * any_of block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}
  */
  readonly anyOf?: Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf[] | cdktf.IResolvable;
}

export function apigatewayv2RoutingRuleConditionMatchHeadersToTerraform(struct?: Apigatewayv2RoutingRuleConditionMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(apigatewayv2RoutingRuleConditionMatchHeadersAnyOfToTerraform, true)(struct!.anyOf),
  }
}


export function apigatewayv2RoutingRuleConditionMatchHeadersToHclTerraform(struct?: Apigatewayv2RoutingRuleConditionMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_of: {
      value: cdktf.listMapperHcl(apigatewayv2RoutingRuleConditionMatchHeadersAnyOfToHclTerraform, true)(struct!.anyOf),
      isBlock: true,
      type: "list",
      storageClassType: "Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Apigatewayv2RoutingRuleConditionMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2RoutingRuleConditionMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyOf.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyOf.internalValue = value.anyOf;
    }
  }

  // any_of - computed: false, optional: true, required: false
  private _anyOf = new Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList(this, "any_of", false);
  public get anyOf() {
    return this._anyOf;
  }
  public putAnyOf(value: Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf[] | cdktf.IResolvable) {
    this._anyOf.internalValue = value;
  }
  public resetAnyOf() {
    this._anyOf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf.internalValue;
  }
}

export class Apigatewayv2RoutingRuleConditionMatchHeadersList extends cdktf.ComplexList {
  public internalValue? : Apigatewayv2RoutingRuleConditionMatchHeaders[] | cdktf.IResolvable

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
  public get(index: number): Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference {
    return new Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Apigatewayv2RoutingRuleCondition {
  /**
  * match_base_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#match_base_paths Apigatewayv2RoutingRule#match_base_paths}
  */
  readonly matchBasePaths?: Apigatewayv2RoutingRuleConditionMatchBasePaths[] | cdktf.IResolvable;
  /**
  * match_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#match_headers Apigatewayv2RoutingRule#match_headers}
  */
  readonly matchHeaders?: Apigatewayv2RoutingRuleConditionMatchHeaders[] | cdktf.IResolvable;
}

export function apigatewayv2RoutingRuleConditionToTerraform(struct?: Apigatewayv2RoutingRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_base_paths: cdktf.listMapper(apigatewayv2RoutingRuleConditionMatchBasePathsToTerraform, true)(struct!.matchBasePaths),
    match_headers: cdktf.listMapper(apigatewayv2RoutingRuleConditionMatchHeadersToTerraform, true)(struct!.matchHeaders),
  }
}


export function apigatewayv2RoutingRuleConditionToHclTerraform(struct?: Apigatewayv2RoutingRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_base_paths: {
      value: cdktf.listMapperHcl(apigatewayv2RoutingRuleConditionMatchBasePathsToHclTerraform, true)(struct!.matchBasePaths),
      isBlock: true,
      type: "list",
      storageClassType: "Apigatewayv2RoutingRuleConditionMatchBasePathsList",
    },
    match_headers: {
      value: cdktf.listMapperHcl(apigatewayv2RoutingRuleConditionMatchHeadersToHclTerraform, true)(struct!.matchHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "Apigatewayv2RoutingRuleConditionMatchHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Apigatewayv2RoutingRuleConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Apigatewayv2RoutingRuleCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchBasePaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchBasePaths = this._matchBasePaths?.internalValue;
    }
    if (this._matchHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHeaders = this._matchHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2RoutingRuleCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchBasePaths.internalValue = undefined;
      this._matchHeaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchBasePaths.internalValue = value.matchBasePaths;
      this._matchHeaders.internalValue = value.matchHeaders;
    }
  }

  // match_base_paths - computed: false, optional: true, required: false
  private _matchBasePaths = new Apigatewayv2RoutingRuleConditionMatchBasePathsList(this, "match_base_paths", false);
  public get matchBasePaths() {
    return this._matchBasePaths;
  }
  public putMatchBasePaths(value: Apigatewayv2RoutingRuleConditionMatchBasePaths[] | cdktf.IResolvable) {
    this._matchBasePaths.internalValue = value;
  }
  public resetMatchBasePaths() {
    this._matchBasePaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchBasePathsInput() {
    return this._matchBasePaths.internalValue;
  }

  // match_headers - computed: false, optional: true, required: false
  private _matchHeaders = new Apigatewayv2RoutingRuleConditionMatchHeadersList(this, "match_headers", false);
  public get matchHeaders() {
    return this._matchHeaders;
  }
  public putMatchHeaders(value: Apigatewayv2RoutingRuleConditionMatchHeaders[] | cdktf.IResolvable) {
    this._matchHeaders.internalValue = value;
  }
  public resetMatchHeaders() {
    this._matchHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHeadersInput() {
    return this._matchHeaders.internalValue;
  }
}

export class Apigatewayv2RoutingRuleConditionList extends cdktf.ComplexList {
  public internalValue? : Apigatewayv2RoutingRuleCondition[] | cdktf.IResolvable

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
  public get(index: number): Apigatewayv2RoutingRuleConditionOutputReference {
    return new Apigatewayv2RoutingRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule aws_apigatewayv2_routing_rule}
*/
export class Apigatewayv2RoutingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_apigatewayv2_routing_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Apigatewayv2RoutingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Apigatewayv2RoutingRule to import
  * @param importFromId The id of the existing Apigatewayv2RoutingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Apigatewayv2RoutingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_apigatewayv2_routing_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule aws_apigatewayv2_routing_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Apigatewayv2RoutingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: Apigatewayv2RoutingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_routing_rule',
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
    this._domainName = config.domainName;
    this._priority = config.priority;
    this._region = config.region;
    this._action.internalValue = config.action;
    this._condition.internalValue = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // routing_rule_arn - computed: true, optional: false, required: false
  public get routingRuleArn() {
    return this.getStringAttribute('routing_rule_arn');
  }

  // routing_rule_id - computed: true, optional: false, required: false
  public get routingRuleId() {
    return this.getStringAttribute('routing_rule_id');
  }

  // action - computed: false, optional: true, required: false
  private _action = new Apigatewayv2RoutingRuleActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: Apigatewayv2RoutingRuleAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new Apigatewayv2RoutingRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: Apigatewayv2RoutingRuleCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      priority: cdktf.numberToTerraform(this._priority),
      region: cdktf.stringToTerraform(this._region),
      action: cdktf.listMapper(apigatewayv2RoutingRuleActionToTerraform, true)(this._action.internalValue),
      condition: cdktf.listMapper(apigatewayv2RoutingRuleConditionToTerraform, true)(this._condition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.listMapperHcl(apigatewayv2RoutingRuleActionToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Apigatewayv2RoutingRuleActionList",
      },
      condition: {
        value: cdktf.listMapperHcl(apigatewayv2RoutingRuleConditionToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Apigatewayv2RoutingRuleConditionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
