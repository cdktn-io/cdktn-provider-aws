/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsLbListenerRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#arn DataAwsLbListenerRule#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#listener_arn DataAwsLbListenerRule#listener_arn}
  */
  readonly listenerArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#priority DataAwsLbListenerRule#priority}
  */
  readonly priority?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#region DataAwsLbListenerRule#region}
  */
  readonly region?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#action DataAwsLbListenerRule#action}
  */
  readonly action?: DataAwsLbListenerRuleAction[] | cdktn.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#condition DataAwsLbListenerRule#condition}
  */
  readonly condition?: DataAwsLbListenerRuleCondition[] | cdktn.IResolvable;
  /**
  * transform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#transform DataAwsLbListenerRule#transform}
  */
  readonly transform?: DataAwsLbListenerRuleTransform[] | cdktn.IResolvable;
}
export interface DataAwsLbListenerRuleActionAuthenticateCognito {
}

export function dataAwsLbListenerRuleActionAuthenticateCognitoToTerraform(struct?: DataAwsLbListenerRuleActionAuthenticateCognito | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLbListenerRuleActionAuthenticateCognitoToHclTerraform(struct?: DataAwsLbListenerRuleActionAuthenticateCognito | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleActionAuthenticateCognito | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleActionAuthenticateCognito | cdktn.IResolvable | undefined) {
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

  // authentication_request_extra_params - computed: true, optional: false, required: false
  private _authenticationRequestExtraParams = new cdktn.StringMap(this, "authentication_request_extra_params");
  public get authenticationRequestExtraParams() {
    return this._authenticationRequestExtraParams;
  }

  // on_unauthenticated_request - computed: true, optional: false, required: false
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // session_cookie_name - computed: true, optional: false, required: false
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }

  // user_pool_arn - computed: true, optional: false, required: false
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }

  // user_pool_client_id - computed: true, optional: false, required: false
  public get userPoolClientId() {
    return this.getStringAttribute('user_pool_client_id');
  }

  // user_pool_domain - computed: true, optional: false, required: false
  public get userPoolDomain() {
    return this.getStringAttribute('user_pool_domain');
  }
}

export class DataAwsLbListenerRuleActionAuthenticateCognitoList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleActionAuthenticateCognito[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference {
    return new DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleActionAuthenticateOidc {
}

export function dataAwsLbListenerRuleActionAuthenticateOidcToTerraform(struct?: DataAwsLbListenerRuleActionAuthenticateOidc | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLbListenerRuleActionAuthenticateOidcToHclTerraform(struct?: DataAwsLbListenerRuleActionAuthenticateOidc | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleActionAuthenticateOidcOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleActionAuthenticateOidc | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleActionAuthenticateOidc | cdktn.IResolvable | undefined) {
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

  // authentication_request_extra_params - computed: true, optional: false, required: false
  private _authenticationRequestExtraParams = new cdktn.StringMap(this, "authentication_request_extra_params");
  public get authenticationRequestExtraParams() {
    return this._authenticationRequestExtraParams;
  }

  // authorization_endpoint - computed: true, optional: false, required: false
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // on_unauthenticated_request - computed: true, optional: false, required: false
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // session_cookie_name - computed: true, optional: false, required: false
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }

  // user_info_endpoint - computed: true, optional: false, required: false
  public get userInfoEndpoint() {
    return this.getStringAttribute('user_info_endpoint');
  }
}

export class DataAwsLbListenerRuleActionAuthenticateOidcList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleActionAuthenticateOidc[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionAuthenticateOidcOutputReference {
    return new DataAwsLbListenerRuleActionAuthenticateOidcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleActionFixedResponse {
}

export function dataAwsLbListenerRuleActionFixedResponseToTerraform(struct?: DataAwsLbListenerRuleActionFixedResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLbListenerRuleActionFixedResponseToHclTerraform(struct?: DataAwsLbListenerRuleActionFixedResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleActionFixedResponseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleActionFixedResponse | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleActionFixedResponse | cdktn.IResolvable | undefined) {
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

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // message_body - computed: true, optional: false, required: false
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataAwsLbListenerRuleActionFixedResponseList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleActionFixedResponse[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionFixedResponseOutputReference {
    return new DataAwsLbListenerRuleActionFixedResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleActionForwardStickiness {
}

export function dataAwsLbListenerRuleActionForwardStickinessToTerraform(struct?: DataAwsLbListenerRuleActionForwardStickiness | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLbListenerRuleActionForwardStickinessToHclTerraform(struct?: DataAwsLbListenerRuleActionForwardStickiness | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleActionForwardStickinessOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleActionForwardStickiness | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleActionForwardStickiness | cdktn.IResolvable | undefined) {
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

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAwsLbListenerRuleActionForwardStickinessList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleActionForwardStickiness[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionForwardStickinessOutputReference {
    return new DataAwsLbListenerRuleActionForwardStickinessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleActionForwardTargetGroup {
}

export function dataAwsLbListenerRuleActionForwardTargetGroupToTerraform(struct?: DataAwsLbListenerRuleActionForwardTargetGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLbListenerRuleActionForwardTargetGroupToHclTerraform(struct?: DataAwsLbListenerRuleActionForwardTargetGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleActionForwardTargetGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleActionForwardTargetGroup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleActionForwardTargetGroup | cdktn.IResolvable | undefined) {
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataAwsLbListenerRuleActionForwardTargetGroupList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleActionForwardTargetGroup[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionForwardTargetGroupOutputReference {
    return new DataAwsLbListenerRuleActionForwardTargetGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleActionForward {
  /**
  * stickiness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#stickiness DataAwsLbListenerRule#stickiness}
  */
  readonly stickiness?: DataAwsLbListenerRuleActionForwardStickiness[] | cdktn.IResolvable;
  /**
  * target_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#target_group DataAwsLbListenerRule#target_group}
  */
  readonly targetGroup?: DataAwsLbListenerRuleActionForwardTargetGroup[] | cdktn.IResolvable;
}

export function dataAwsLbListenerRuleActionForwardToTerraform(struct?: DataAwsLbListenerRuleActionForward | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    stickiness: cdktn.listMapper(dataAwsLbListenerRuleActionForwardStickinessToTerraform, true)(struct!.stickiness),
    target_group: cdktn.listMapper(dataAwsLbListenerRuleActionForwardTargetGroupToTerraform, true)(struct!.targetGroup),
  }
}


export function dataAwsLbListenerRuleActionForwardToHclTerraform(struct?: DataAwsLbListenerRuleActionForward | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    stickiness: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleActionForwardStickinessToHclTerraform, true)(struct!.stickiness),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleActionForwardStickinessList",
    },
    target_group: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleActionForwardTargetGroupToHclTerraform, true)(struct!.targetGroup),
      isBlock: true,
      type: "set",
      storageClassType: "DataAwsLbListenerRuleActionForwardTargetGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsLbListenerRuleActionForwardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleActionForward | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stickiness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickiness = this._stickiness?.internalValue;
    }
    if (this._targetGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroup = this._targetGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleActionForward | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stickiness.internalValue = undefined;
      this._targetGroup.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stickiness.internalValue = value.stickiness;
      this._targetGroup.internalValue = value.targetGroup;
    }
  }

  // stickiness - computed: false, optional: true, required: false
  private _stickiness = new DataAwsLbListenerRuleActionForwardStickinessList(this, "stickiness", false);
  public get stickiness() {
    return this._stickiness;
  }
  public putStickiness(value: DataAwsLbListenerRuleActionForwardStickiness[] | cdktn.IResolvable) {
    this._stickiness.internalValue = value;
  }
  public resetStickiness() {
    this._stickiness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickinessInput() {
    return this._stickiness.internalValue;
  }

  // target_group - computed: false, optional: true, required: false
  private _targetGroup = new DataAwsLbListenerRuleActionForwardTargetGroupList(this, "target_group", true);
  public get targetGroup() {
    return this._targetGroup;
  }
  public putTargetGroup(value: DataAwsLbListenerRuleActionForwardTargetGroup[] | cdktn.IResolvable) {
    this._targetGroup.internalValue = value;
  }
  public resetTargetGroup() {
    this._targetGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupInput() {
    return this._targetGroup.internalValue;
  }
}

export class DataAwsLbListenerRuleActionForwardList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleActionForward[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionForwardOutputReference {
    return new DataAwsLbListenerRuleActionForwardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleActionJwtValidationAdditionalClaim {
}

export function dataAwsLbListenerRuleActionJwtValidationAdditionalClaimToTerraform(struct?: DataAwsLbListenerRuleActionJwtValidationAdditionalClaim | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLbListenerRuleActionJwtValidationAdditionalClaimToHclTerraform(struct?: DataAwsLbListenerRuleActionJwtValidationAdditionalClaim | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleActionJwtValidationAdditionalClaimOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleActionJwtValidationAdditionalClaim | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleActionJwtValidationAdditionalClaim | cdktn.IResolvable | undefined) {
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

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAwsLbListenerRuleActionJwtValidationAdditionalClaimList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleActionJwtValidationAdditionalClaim[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionJwtValidationAdditionalClaimOutputReference {
    return new DataAwsLbListenerRuleActionJwtValidationAdditionalClaimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleActionJwtValidation {
  /**
  * additional_claim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#additional_claim DataAwsLbListenerRule#additional_claim}
  */
  readonly additionalClaim?: DataAwsLbListenerRuleActionJwtValidationAdditionalClaim[] | cdktn.IResolvable;
}

export function dataAwsLbListenerRuleActionJwtValidationToTerraform(struct?: DataAwsLbListenerRuleActionJwtValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_claim: cdktn.listMapper(dataAwsLbListenerRuleActionJwtValidationAdditionalClaimToTerraform, true)(struct!.additionalClaim),
  }
}


export function dataAwsLbListenerRuleActionJwtValidationToHclTerraform(struct?: DataAwsLbListenerRuleActionJwtValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_claim: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleActionJwtValidationAdditionalClaimToHclTerraform, true)(struct!.additionalClaim),
      isBlock: true,
      type: "set",
      storageClassType: "DataAwsLbListenerRuleActionJwtValidationAdditionalClaimList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsLbListenerRuleActionJwtValidationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleActionJwtValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalClaim = this._additionalClaim?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleActionJwtValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalClaim.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalClaim.internalValue = value.additionalClaim;
    }
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // jwks_endpoint - computed: true, optional: false, required: false
  public get jwksEndpoint() {
    return this.getStringAttribute('jwks_endpoint');
  }

  // additional_claim - computed: false, optional: true, required: false
  private _additionalClaim = new DataAwsLbListenerRuleActionJwtValidationAdditionalClaimList(this, "additional_claim", true);
  public get additionalClaim() {
    return this._additionalClaim;
  }
  public putAdditionalClaim(value: DataAwsLbListenerRuleActionJwtValidationAdditionalClaim[] | cdktn.IResolvable) {
    this._additionalClaim.internalValue = value;
  }
  public resetAdditionalClaim() {
    this._additionalClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalClaimInput() {
    return this._additionalClaim.internalValue;
  }
}

export class DataAwsLbListenerRuleActionJwtValidationList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleActionJwtValidation[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionJwtValidationOutputReference {
    return new DataAwsLbListenerRuleActionJwtValidationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleActionRedirect {
}

export function dataAwsLbListenerRuleActionRedirectToTerraform(struct?: DataAwsLbListenerRuleActionRedirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLbListenerRuleActionRedirectToHclTerraform(struct?: DataAwsLbListenerRuleActionRedirect | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleActionRedirectOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleActionRedirect | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleActionRedirect | cdktn.IResolvable | undefined) {
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

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataAwsLbListenerRuleActionRedirectList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleActionRedirect[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionRedirectOutputReference {
    return new DataAwsLbListenerRuleActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleAction {
  /**
  * authenticate_cognito block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#authenticate_cognito DataAwsLbListenerRule#authenticate_cognito}
  */
  readonly authenticateCognito?: DataAwsLbListenerRuleActionAuthenticateCognito[] | cdktn.IResolvable;
  /**
  * authenticate_oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#authenticate_oidc DataAwsLbListenerRule#authenticate_oidc}
  */
  readonly authenticateOidc?: DataAwsLbListenerRuleActionAuthenticateOidc[] | cdktn.IResolvable;
  /**
  * fixed_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#fixed_response DataAwsLbListenerRule#fixed_response}
  */
  readonly fixedResponse?: DataAwsLbListenerRuleActionFixedResponse[] | cdktn.IResolvable;
  /**
  * forward block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#forward DataAwsLbListenerRule#forward}
  */
  readonly forward?: DataAwsLbListenerRuleActionForward[] | cdktn.IResolvable;
  /**
  * jwt_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#jwt_validation DataAwsLbListenerRule#jwt_validation}
  */
  readonly jwtValidation?: DataAwsLbListenerRuleActionJwtValidation[] | cdktn.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#redirect DataAwsLbListenerRule#redirect}
  */
  readonly redirect?: DataAwsLbListenerRuleActionRedirect[] | cdktn.IResolvable;
}

export function dataAwsLbListenerRuleActionToTerraform(struct?: DataAwsLbListenerRuleAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authenticate_cognito: cdktn.listMapper(dataAwsLbListenerRuleActionAuthenticateCognitoToTerraform, true)(struct!.authenticateCognito),
    authenticate_oidc: cdktn.listMapper(dataAwsLbListenerRuleActionAuthenticateOidcToTerraform, true)(struct!.authenticateOidc),
    fixed_response: cdktn.listMapper(dataAwsLbListenerRuleActionFixedResponseToTerraform, true)(struct!.fixedResponse),
    forward: cdktn.listMapper(dataAwsLbListenerRuleActionForwardToTerraform, true)(struct!.forward),
    jwt_validation: cdktn.listMapper(dataAwsLbListenerRuleActionJwtValidationToTerraform, true)(struct!.jwtValidation),
    redirect: cdktn.listMapper(dataAwsLbListenerRuleActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function dataAwsLbListenerRuleActionToHclTerraform(struct?: DataAwsLbListenerRuleAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authenticate_cognito: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleActionAuthenticateCognitoToHclTerraform, true)(struct!.authenticateCognito),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleActionAuthenticateCognitoList",
    },
    authenticate_oidc: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleActionAuthenticateOidcToHclTerraform, true)(struct!.authenticateOidc),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleActionAuthenticateOidcList",
    },
    fixed_response: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleActionFixedResponseToHclTerraform, true)(struct!.fixedResponse),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleActionFixedResponseList",
    },
    forward: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleActionForwardToHclTerraform, true)(struct!.forward),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleActionForwardList",
    },
    jwt_validation: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleActionJwtValidationToHclTerraform, true)(struct!.jwtValidation),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleActionJwtValidationList",
    },
    redirect: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsLbListenerRuleActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticateCognito?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateCognito = this._authenticateCognito?.internalValue;
    }
    if (this._authenticateOidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateOidc = this._authenticateOidc?.internalValue;
    }
    if (this._fixedResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedResponse = this._fixedResponse?.internalValue;
    }
    if (this._forward?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward?.internalValue;
    }
    if (this._jwtValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtValidation = this._jwtValidation?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticateCognito.internalValue = undefined;
      this._authenticateOidc.internalValue = undefined;
      this._fixedResponse.internalValue = undefined;
      this._forward.internalValue = undefined;
      this._jwtValidation.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticateCognito.internalValue = value.authenticateCognito;
      this._authenticateOidc.internalValue = value.authenticateOidc;
      this._fixedResponse.internalValue = value.fixedResponse;
      this._forward.internalValue = value.forward;
      this._jwtValidation.internalValue = value.jwtValidation;
      this._redirect.internalValue = value.redirect;
    }
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // authenticate_cognito - computed: false, optional: true, required: false
  private _authenticateCognito = new DataAwsLbListenerRuleActionAuthenticateCognitoList(this, "authenticate_cognito", false);
  public get authenticateCognito() {
    return this._authenticateCognito;
  }
  public putAuthenticateCognito(value: DataAwsLbListenerRuleActionAuthenticateCognito[] | cdktn.IResolvable) {
    this._authenticateCognito.internalValue = value;
  }
  public resetAuthenticateCognito() {
    this._authenticateCognito.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateCognitoInput() {
    return this._authenticateCognito.internalValue;
  }

  // authenticate_oidc - computed: false, optional: true, required: false
  private _authenticateOidc = new DataAwsLbListenerRuleActionAuthenticateOidcList(this, "authenticate_oidc", false);
  public get authenticateOidc() {
    return this._authenticateOidc;
  }
  public putAuthenticateOidc(value: DataAwsLbListenerRuleActionAuthenticateOidc[] | cdktn.IResolvable) {
    this._authenticateOidc.internalValue = value;
  }
  public resetAuthenticateOidc() {
    this._authenticateOidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateOidcInput() {
    return this._authenticateOidc.internalValue;
  }

  // fixed_response - computed: false, optional: true, required: false
  private _fixedResponse = new DataAwsLbListenerRuleActionFixedResponseList(this, "fixed_response", false);
  public get fixedResponse() {
    return this._fixedResponse;
  }
  public putFixedResponse(value: DataAwsLbListenerRuleActionFixedResponse[] | cdktn.IResolvable) {
    this._fixedResponse.internalValue = value;
  }
  public resetFixedResponse() {
    this._fixedResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedResponseInput() {
    return this._fixedResponse.internalValue;
  }

  // forward - computed: false, optional: true, required: false
  private _forward = new DataAwsLbListenerRuleActionForwardList(this, "forward", false);
  public get forward() {
    return this._forward;
  }
  public putForward(value: DataAwsLbListenerRuleActionForward[] | cdktn.IResolvable) {
    this._forward.internalValue = value;
  }
  public resetForward() {
    this._forward.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward.internalValue;
  }

  // jwt_validation - computed: false, optional: true, required: false
  private _jwtValidation = new DataAwsLbListenerRuleActionJwtValidationList(this, "jwt_validation", false);
  public get jwtValidation() {
    return this._jwtValidation;
  }
  public putJwtValidation(value: DataAwsLbListenerRuleActionJwtValidation[] | cdktn.IResolvable) {
    this._jwtValidation.internalValue = value;
  }
  public resetJwtValidation() {
    this._jwtValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtValidationInput() {
    return this._jwtValidation.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new DataAwsLbListenerRuleActionRedirectList(this, "redirect", false);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: DataAwsLbListenerRuleActionRedirect[] | cdktn.IResolvable) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}

export class DataAwsLbListenerRuleActionList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleAction[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionOutputReference {
    return new DataAwsLbListenerRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleConditionHostHeader {
}

export function dataAwsLbListenerRuleConditionHostHeaderToTerraform(struct?: DataAwsLbListenerRuleConditionHostHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLbListenerRuleConditionHostHeaderToHclTerraform(struct?: DataAwsLbListenerRuleConditionHostHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleConditionHostHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleConditionHostHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleConditionHostHeader | cdktn.IResolvable | undefined) {
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

  // regex_values - computed: true, optional: false, required: false
  public get regexValues() {
    return cdktn.Fn.tolist(this.getListAttribute('regex_values'));
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAwsLbListenerRuleConditionHostHeaderList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleConditionHostHeader[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleConditionHostHeaderOutputReference {
    return new DataAwsLbListenerRuleConditionHostHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleConditionHttpHeader {
}

export function dataAwsLbListenerRuleConditionHttpHeaderToTerraform(struct?: DataAwsLbListenerRuleConditionHttpHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLbListenerRuleConditionHttpHeaderToHclTerraform(struct?: DataAwsLbListenerRuleConditionHttpHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleConditionHttpHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleConditionHttpHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleConditionHttpHeader | cdktn.IResolvable | undefined) {
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

  // http_header_name - computed: true, optional: false, required: false
  public get httpHeaderName() {
    return this.getStringAttribute('http_header_name');
  }

  // regex_values - computed: true, optional: false, required: false
  public get regexValues() {
    return cdktn.Fn.tolist(this.getListAttribute('regex_values'));
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAwsLbListenerRuleConditionHttpHeaderList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleConditionHttpHeader[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleConditionHttpHeaderOutputReference {
    return new DataAwsLbListenerRuleConditionHttpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleConditionHttpRequestMethod {
}

export function dataAwsLbListenerRuleConditionHttpRequestMethodToTerraform(struct?: DataAwsLbListenerRuleConditionHttpRequestMethod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLbListenerRuleConditionHttpRequestMethodToHclTerraform(struct?: DataAwsLbListenerRuleConditionHttpRequestMethod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleConditionHttpRequestMethod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleConditionHttpRequestMethod | cdktn.IResolvable | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAwsLbListenerRuleConditionHttpRequestMethodList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleConditionHttpRequestMethod[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference {
    return new DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleConditionPathPattern {
}

export function dataAwsLbListenerRuleConditionPathPatternToTerraform(struct?: DataAwsLbListenerRuleConditionPathPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLbListenerRuleConditionPathPatternToHclTerraform(struct?: DataAwsLbListenerRuleConditionPathPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleConditionPathPatternOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleConditionPathPattern | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleConditionPathPattern | cdktn.IResolvable | undefined) {
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

  // regex_values - computed: true, optional: false, required: false
  public get regexValues() {
    return cdktn.Fn.tolist(this.getListAttribute('regex_values'));
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAwsLbListenerRuleConditionPathPatternList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleConditionPathPattern[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleConditionPathPatternOutputReference {
    return new DataAwsLbListenerRuleConditionPathPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleConditionQueryStringValues {
}

export function dataAwsLbListenerRuleConditionQueryStringValuesToTerraform(struct?: DataAwsLbListenerRuleConditionQueryStringValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLbListenerRuleConditionQueryStringValuesToHclTerraform(struct?: DataAwsLbListenerRuleConditionQueryStringValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleConditionQueryStringValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleConditionQueryStringValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleConditionQueryStringValues | cdktn.IResolvable | undefined) {
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsLbListenerRuleConditionQueryStringValuesList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleConditionQueryStringValues[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleConditionQueryStringValuesOutputReference {
    return new DataAwsLbListenerRuleConditionQueryStringValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleConditionQueryString {
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#values DataAwsLbListenerRule#values}
  */
  readonly values?: DataAwsLbListenerRuleConditionQueryStringValues[] | cdktn.IResolvable;
}

export function dataAwsLbListenerRuleConditionQueryStringToTerraform(struct?: DataAwsLbListenerRuleConditionQueryString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    values: cdktn.listMapper(dataAwsLbListenerRuleConditionQueryStringValuesToTerraform, true)(struct!.values),
  }
}


export function dataAwsLbListenerRuleConditionQueryStringToHclTerraform(struct?: DataAwsLbListenerRuleConditionQueryString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    values: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleConditionQueryStringValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "set",
      storageClassType: "DataAwsLbListenerRuleConditionQueryStringValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsLbListenerRuleConditionQueryStringOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleConditionQueryString | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleConditionQueryString | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values.internalValue = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values = new DataAwsLbListenerRuleConditionQueryStringValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
  public putValues(value: DataAwsLbListenerRuleConditionQueryStringValues[] | cdktn.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class DataAwsLbListenerRuleConditionQueryStringList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleConditionQueryString[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleConditionQueryStringOutputReference {
    return new DataAwsLbListenerRuleConditionQueryStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleConditionSourceIp {
}

export function dataAwsLbListenerRuleConditionSourceIpToTerraform(struct?: DataAwsLbListenerRuleConditionSourceIp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLbListenerRuleConditionSourceIpToHclTerraform(struct?: DataAwsLbListenerRuleConditionSourceIp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleConditionSourceIpOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleConditionSourceIp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleConditionSourceIp | cdktn.IResolvable | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAwsLbListenerRuleConditionSourceIpList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleConditionSourceIp[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleConditionSourceIpOutputReference {
    return new DataAwsLbListenerRuleConditionSourceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleCondition {
  /**
  * host_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#host_header DataAwsLbListenerRule#host_header}
  */
  readonly hostHeader?: DataAwsLbListenerRuleConditionHostHeader[] | cdktn.IResolvable;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#http_header DataAwsLbListenerRule#http_header}
  */
  readonly httpHeader?: DataAwsLbListenerRuleConditionHttpHeader[] | cdktn.IResolvable;
  /**
  * http_request_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#http_request_method DataAwsLbListenerRule#http_request_method}
  */
  readonly httpRequestMethod?: DataAwsLbListenerRuleConditionHttpRequestMethod[] | cdktn.IResolvable;
  /**
  * path_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#path_pattern DataAwsLbListenerRule#path_pattern}
  */
  readonly pathPattern?: DataAwsLbListenerRuleConditionPathPattern[] | cdktn.IResolvable;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#query_string DataAwsLbListenerRule#query_string}
  */
  readonly queryString?: DataAwsLbListenerRuleConditionQueryString[] | cdktn.IResolvable;
  /**
  * source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#source_ip DataAwsLbListenerRule#source_ip}
  */
  readonly sourceIp?: DataAwsLbListenerRuleConditionSourceIp[] | cdktn.IResolvable;
}

export function dataAwsLbListenerRuleConditionToTerraform(struct?: DataAwsLbListenerRuleCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host_header: cdktn.listMapper(dataAwsLbListenerRuleConditionHostHeaderToTerraform, true)(struct!.hostHeader),
    http_header: cdktn.listMapper(dataAwsLbListenerRuleConditionHttpHeaderToTerraform, true)(struct!.httpHeader),
    http_request_method: cdktn.listMapper(dataAwsLbListenerRuleConditionHttpRequestMethodToTerraform, true)(struct!.httpRequestMethod),
    path_pattern: cdktn.listMapper(dataAwsLbListenerRuleConditionPathPatternToTerraform, true)(struct!.pathPattern),
    query_string: cdktn.listMapper(dataAwsLbListenerRuleConditionQueryStringToTerraform, true)(struct!.queryString),
    source_ip: cdktn.listMapper(dataAwsLbListenerRuleConditionSourceIpToTerraform, true)(struct!.sourceIp),
  }
}


export function dataAwsLbListenerRuleConditionToHclTerraform(struct?: DataAwsLbListenerRuleCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host_header: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleConditionHostHeaderToHclTerraform, true)(struct!.hostHeader),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleConditionHostHeaderList",
    },
    http_header: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleConditionHttpHeaderToHclTerraform, true)(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleConditionHttpHeaderList",
    },
    http_request_method: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleConditionHttpRequestMethodToHclTerraform, true)(struct!.httpRequestMethod),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleConditionHttpRequestMethodList",
    },
    path_pattern: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleConditionPathPatternToHclTerraform, true)(struct!.pathPattern),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleConditionPathPatternList",
    },
    query_string: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleConditionQueryStringToHclTerraform, true)(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleConditionQueryStringList",
    },
    source_ip: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleConditionSourceIpToHclTerraform, true)(struct!.sourceIp),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleConditionSourceIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsLbListenerRuleConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader?.internalValue;
    }
    if (this._httpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader?.internalValue;
    }
    if (this._httpRequestMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestMethod = this._httpRequestMethod?.internalValue;
    }
    if (this._pathPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPattern = this._pathPattern?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._sourceIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostHeader.internalValue = undefined;
      this._httpHeader.internalValue = undefined;
      this._httpRequestMethod.internalValue = undefined;
      this._pathPattern.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._sourceIp.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostHeader.internalValue = value.hostHeader;
      this._httpHeader.internalValue = value.httpHeader;
      this._httpRequestMethod.internalValue = value.httpRequestMethod;
      this._pathPattern.internalValue = value.pathPattern;
      this._queryString.internalValue = value.queryString;
      this._sourceIp.internalValue = value.sourceIp;
    }
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader = new DataAwsLbListenerRuleConditionHostHeaderList(this, "host_header", false);
  public get hostHeader() {
    return this._hostHeader;
  }
  public putHostHeader(value: DataAwsLbListenerRuleConditionHostHeader[] | cdktn.IResolvable) {
    this._hostHeader.internalValue = value;
  }
  public resetHostHeader() {
    this._hostHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader.internalValue;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader = new DataAwsLbListenerRuleConditionHttpHeaderList(this, "http_header", false);
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: DataAwsLbListenerRuleConditionHttpHeader[] | cdktn.IResolvable) {
    this._httpHeader.internalValue = value;
  }
  public resetHttpHeader() {
    this._httpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader.internalValue;
  }

  // http_request_method - computed: false, optional: true, required: false
  private _httpRequestMethod = new DataAwsLbListenerRuleConditionHttpRequestMethodList(this, "http_request_method", false);
  public get httpRequestMethod() {
    return this._httpRequestMethod;
  }
  public putHttpRequestMethod(value: DataAwsLbListenerRuleConditionHttpRequestMethod[] | cdktn.IResolvable) {
    this._httpRequestMethod.internalValue = value;
  }
  public resetHttpRequestMethod() {
    this._httpRequestMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestMethodInput() {
    return this._httpRequestMethod.internalValue;
  }

  // path_pattern - computed: false, optional: true, required: false
  private _pathPattern = new DataAwsLbListenerRuleConditionPathPatternList(this, "path_pattern", false);
  public get pathPattern() {
    return this._pathPattern;
  }
  public putPathPattern(value: DataAwsLbListenerRuleConditionPathPattern[] | cdktn.IResolvable) {
    this._pathPattern.internalValue = value;
  }
  public resetPathPattern() {
    this._pathPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPatternInput() {
    return this._pathPattern.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new DataAwsLbListenerRuleConditionQueryStringList(this, "query_string", false);
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: DataAwsLbListenerRuleConditionQueryString[] | cdktn.IResolvable) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp = new DataAwsLbListenerRuleConditionSourceIpList(this, "source_ip", false);
  public get sourceIp() {
    return this._sourceIp;
  }
  public putSourceIp(value: DataAwsLbListenerRuleConditionSourceIp[] | cdktn.IResolvable) {
    this._sourceIp.internalValue = value;
  }
  public resetSourceIp() {
    this._sourceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp.internalValue;
  }
}

export class DataAwsLbListenerRuleConditionList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleCondition[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleConditionOutputReference {
    return new DataAwsLbListenerRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewrite {
}

export function dataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewriteToTerraform(struct?: DataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewrite | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewriteToHclTerraform(struct?: DataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewrite | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewriteOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewrite | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewrite | cdktn.IResolvable | undefined) {
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

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }

  // replace - computed: true, optional: false, required: false
  public get replace() {
    return this.getStringAttribute('replace');
  }
}

export class DataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewriteList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewrite[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewriteOutputReference {
    return new DataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewriteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleTransformHostHeaderRewriteConfig {
  /**
  * rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#rewrite DataAwsLbListenerRule#rewrite}
  */
  readonly rewrite?: DataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewrite[] | cdktn.IResolvable;
}

export function dataAwsLbListenerRuleTransformHostHeaderRewriteConfigToTerraform(struct?: DataAwsLbListenerRuleTransformHostHeaderRewriteConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rewrite: cdktn.listMapper(dataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewriteToTerraform, true)(struct!.rewrite),
  }
}


export function dataAwsLbListenerRuleTransformHostHeaderRewriteConfigToHclTerraform(struct?: DataAwsLbListenerRuleTransformHostHeaderRewriteConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rewrite: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewriteToHclTerraform, true)(struct!.rewrite),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewriteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsLbListenerRuleTransformHostHeaderRewriteConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleTransformHostHeaderRewriteConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleTransformHostHeaderRewriteConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rewrite.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rewrite.internalValue = value.rewrite;
    }
  }

  // rewrite - computed: false, optional: true, required: false
  private _rewrite = new DataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewriteList(this, "rewrite", false);
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: DataAwsLbListenerRuleTransformHostHeaderRewriteConfigRewrite[] | cdktn.IResolvable) {
    this._rewrite.internalValue = value;
  }
  public resetRewrite() {
    this._rewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite.internalValue;
  }
}

export class DataAwsLbListenerRuleTransformHostHeaderRewriteConfigList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleTransformHostHeaderRewriteConfig[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleTransformHostHeaderRewriteConfigOutputReference {
    return new DataAwsLbListenerRuleTransformHostHeaderRewriteConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleTransformUrlRewriteConfigRewrite {
}

export function dataAwsLbListenerRuleTransformUrlRewriteConfigRewriteToTerraform(struct?: DataAwsLbListenerRuleTransformUrlRewriteConfigRewrite | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsLbListenerRuleTransformUrlRewriteConfigRewriteToHclTerraform(struct?: DataAwsLbListenerRuleTransformUrlRewriteConfigRewrite | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleTransformUrlRewriteConfigRewriteOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleTransformUrlRewriteConfigRewrite | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleTransformUrlRewriteConfigRewrite | cdktn.IResolvable | undefined) {
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

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }

  // replace - computed: true, optional: false, required: false
  public get replace() {
    return this.getStringAttribute('replace');
  }
}

export class DataAwsLbListenerRuleTransformUrlRewriteConfigRewriteList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleTransformUrlRewriteConfigRewrite[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleTransformUrlRewriteConfigRewriteOutputReference {
    return new DataAwsLbListenerRuleTransformUrlRewriteConfigRewriteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleTransformUrlRewriteConfig {
  /**
  * rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#rewrite DataAwsLbListenerRule#rewrite}
  */
  readonly rewrite?: DataAwsLbListenerRuleTransformUrlRewriteConfigRewrite[] | cdktn.IResolvable;
}

export function dataAwsLbListenerRuleTransformUrlRewriteConfigToTerraform(struct?: DataAwsLbListenerRuleTransformUrlRewriteConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rewrite: cdktn.listMapper(dataAwsLbListenerRuleTransformUrlRewriteConfigRewriteToTerraform, true)(struct!.rewrite),
  }
}


export function dataAwsLbListenerRuleTransformUrlRewriteConfigToHclTerraform(struct?: DataAwsLbListenerRuleTransformUrlRewriteConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rewrite: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleTransformUrlRewriteConfigRewriteToHclTerraform, true)(struct!.rewrite),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleTransformUrlRewriteConfigRewriteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsLbListenerRuleTransformUrlRewriteConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleTransformUrlRewriteConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleTransformUrlRewriteConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rewrite.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rewrite.internalValue = value.rewrite;
    }
  }

  // rewrite - computed: false, optional: true, required: false
  private _rewrite = new DataAwsLbListenerRuleTransformUrlRewriteConfigRewriteList(this, "rewrite", false);
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: DataAwsLbListenerRuleTransformUrlRewriteConfigRewrite[] | cdktn.IResolvable) {
    this._rewrite.internalValue = value;
  }
  public resetRewrite() {
    this._rewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite.internalValue;
  }
}

export class DataAwsLbListenerRuleTransformUrlRewriteConfigList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleTransformUrlRewriteConfig[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleTransformUrlRewriteConfigOutputReference {
    return new DataAwsLbListenerRuleTransformUrlRewriteConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleTransform {
  /**
  * host_header_rewrite_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#host_header_rewrite_config DataAwsLbListenerRule#host_header_rewrite_config}
  */
  readonly hostHeaderRewriteConfig?: DataAwsLbListenerRuleTransformHostHeaderRewriteConfig[] | cdktn.IResolvable;
  /**
  * url_rewrite_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#url_rewrite_config DataAwsLbListenerRule#url_rewrite_config}
  */
  readonly urlRewriteConfig?: DataAwsLbListenerRuleTransformUrlRewriteConfig[] | cdktn.IResolvable;
}

export function dataAwsLbListenerRuleTransformToTerraform(struct?: DataAwsLbListenerRuleTransform | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host_header_rewrite_config: cdktn.listMapper(dataAwsLbListenerRuleTransformHostHeaderRewriteConfigToTerraform, true)(struct!.hostHeaderRewriteConfig),
    url_rewrite_config: cdktn.listMapper(dataAwsLbListenerRuleTransformUrlRewriteConfigToTerraform, true)(struct!.urlRewriteConfig),
  }
}


export function dataAwsLbListenerRuleTransformToHclTerraform(struct?: DataAwsLbListenerRuleTransform | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host_header_rewrite_config: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleTransformHostHeaderRewriteConfigToHclTerraform, true)(struct!.hostHeaderRewriteConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleTransformHostHeaderRewriteConfigList",
    },
    url_rewrite_config: {
      value: cdktn.listMapperHcl(dataAwsLbListenerRuleTransformUrlRewriteConfigToHclTerraform, true)(struct!.urlRewriteConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleTransformUrlRewriteConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsLbListenerRuleTransformOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleTransform | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostHeaderRewriteConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeaderRewriteConfig = this._hostHeaderRewriteConfig?.internalValue;
    }
    if (this._urlRewriteConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewriteConfig = this._urlRewriteConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleTransform | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostHeaderRewriteConfig.internalValue = undefined;
      this._urlRewriteConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostHeaderRewriteConfig.internalValue = value.hostHeaderRewriteConfig;
      this._urlRewriteConfig.internalValue = value.urlRewriteConfig;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // host_header_rewrite_config - computed: false, optional: true, required: false
  private _hostHeaderRewriteConfig = new DataAwsLbListenerRuleTransformHostHeaderRewriteConfigList(this, "host_header_rewrite_config", false);
  public get hostHeaderRewriteConfig() {
    return this._hostHeaderRewriteConfig;
  }
  public putHostHeaderRewriteConfig(value: DataAwsLbListenerRuleTransformHostHeaderRewriteConfig[] | cdktn.IResolvable) {
    this._hostHeaderRewriteConfig.internalValue = value;
  }
  public resetHostHeaderRewriteConfig() {
    this._hostHeaderRewriteConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderRewriteConfigInput() {
    return this._hostHeaderRewriteConfig.internalValue;
  }

  // url_rewrite_config - computed: false, optional: true, required: false
  private _urlRewriteConfig = new DataAwsLbListenerRuleTransformUrlRewriteConfigList(this, "url_rewrite_config", false);
  public get urlRewriteConfig() {
    return this._urlRewriteConfig;
  }
  public putUrlRewriteConfig(value: DataAwsLbListenerRuleTransformUrlRewriteConfig[] | cdktn.IResolvable) {
    this._urlRewriteConfig.internalValue = value;
  }
  public resetUrlRewriteConfig() {
    this._urlRewriteConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteConfigInput() {
    return this._urlRewriteConfig.internalValue;
  }
}

export class DataAwsLbListenerRuleTransformList extends cdktn.ComplexList {
  public internalValue? : DataAwsLbListenerRuleTransform[] | cdktn.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleTransformOutputReference {
    return new DataAwsLbListenerRuleTransformOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule aws_lb_listener_rule}
*/
export class DataAwsLbListenerRule extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lb_listener_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsLbListenerRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsLbListenerRule to import
  * @param importFromId The id of the existing DataAwsLbListenerRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsLbListenerRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lb_listener_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/lb_listener_rule aws_lb_listener_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsLbListenerRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsLbListenerRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_lb_listener_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.60.0',
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
    this._arn = config.arn;
    this._listenerArn = config.listenerArn;
    this._priority = config.priority;
    this._region = config.region;
    this._action.internalValue = config.action;
    this._condition.internalValue = config.condition;
    this._transform.internalValue = config.transform;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: true, required: false
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

  // listener_arn - computed: true, optional: true, required: false
  private _listenerArn?: string; 
  public get listenerArn() {
    return this.getStringAttribute('listener_arn');
  }
  public set listenerArn(value: string) {
    this._listenerArn = value;
  }
  public resetListenerArn() {
    this._listenerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerArnInput() {
    return this._listenerArn;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
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

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // action - computed: false, optional: true, required: false
  private _action = new DataAwsLbListenerRuleActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: DataAwsLbListenerRuleAction[] | cdktn.IResolvable) {
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
  private _condition = new DataAwsLbListenerRuleConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DataAwsLbListenerRuleCondition[] | cdktn.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // transform - computed: false, optional: true, required: false
  private _transform = new DataAwsLbListenerRuleTransformList(this, "transform", true);
  public get transform() {
    return this._transform;
  }
  public putTransform(value: DataAwsLbListenerRuleTransform[] | cdktn.IResolvable) {
    this._transform.internalValue = value;
  }
  public resetTransform() {
    this._transform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktn.stringToTerraform(this._arn),
      listener_arn: cdktn.stringToTerraform(this._listenerArn),
      priority: cdktn.numberToTerraform(this._priority),
      region: cdktn.stringToTerraform(this._region),
      action: cdktn.listMapper(dataAwsLbListenerRuleActionToTerraform, true)(this._action.internalValue),
      condition: cdktn.listMapper(dataAwsLbListenerRuleConditionToTerraform, true)(this._condition.internalValue),
      transform: cdktn.listMapper(dataAwsLbListenerRuleTransformToTerraform, true)(this._transform.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arn: {
        value: cdktn.stringToHclTerraform(this._arn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_arn: {
        value: cdktn.stringToHclTerraform(this._listenerArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktn.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktn.listMapperHcl(dataAwsLbListenerRuleActionToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsLbListenerRuleActionList",
      },
      condition: {
        value: cdktn.listMapperHcl(dataAwsLbListenerRuleConditionToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAwsLbListenerRuleConditionList",
      },
      transform: {
        value: cdktn.listMapperHcl(dataAwsLbListenerRuleTransformToHclTerraform, true)(this._transform.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAwsLbListenerRuleTransformList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
