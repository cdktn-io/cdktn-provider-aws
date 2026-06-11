/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsGlueConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_connection#id DataAwsGlueConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_connection#region DataAwsGlueConnection#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_connection#tags DataAwsGlueConnection#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials {
}

export function dataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsToTerraform(struct?: DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsToHclTerraform(struct?: DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference {
    return new DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties {
}

export function dataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesToTerraform(struct?: DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesToHclTerraform(struct?: DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_code - computed: true, optional: false, required: false
  public get authorizationCode() {
    return this.getStringAttribute('authorization_code');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}

export class DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference {
    return new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication {
}

export function dataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationToTerraform(struct?: DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationToHclTerraform(struct?: DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_managed_client_application_reference - computed: true, optional: false, required: false
  public get awsManagedClientApplicationReference() {
    return this.getStringAttribute('aws_managed_client_application_reference');
  }

  // user_managed_client_application_client_id - computed: true, optional: false, required: false
  public get userManagedClientApplicationClientId() {
    return this.getStringAttribute('user_managed_client_application_client_id');
  }
}

export class DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference {
    return new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials {
}

export function dataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsToTerraform(struct?: DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsToHclTerraform(struct?: DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // jwt_token - computed: true, optional: false, required: false
  public get jwtToken() {
    return this.getStringAttribute('jwt_token');
  }

  // refresh_token - computed: true, optional: false, required: false
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }

  // user_managed_client_application_client_secret - computed: true, optional: false, required: false
  public get userManagedClientApplicationClientSecret() {
    return this.getStringAttribute('user_managed_client_application_client_secret');
  }
}

export class DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference {
    return new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueConnectionAuthenticationConfigurationOauth2Properties {
}

export function dataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesToTerraform(struct?: DataAwsGlueConnectionAuthenticationConfigurationOauth2Properties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesToHclTerraform(struct?: DataAwsGlueConnectionAuthenticationConfigurationOauth2Properties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsGlueConnectionAuthenticationConfigurationOauth2Properties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueConnectionAuthenticationConfigurationOauth2Properties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_code_properties - computed: true, optional: false, required: false
  private _authorizationCodeProperties = new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList(this, "authorization_code_properties", false);
  public get authorizationCodeProperties() {
    return this._authorizationCodeProperties;
  }

  // oauth2_client_application - computed: true, optional: false, required: false
  private _oauth2ClientApplication = new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList(this, "oauth2_client_application", false);
  public get oauth2ClientApplication() {
    return this._oauth2ClientApplication;
  }

  // oauth2_credentials - computed: true, optional: false, required: false
  private _oauth2Credentials = new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList(this, "oauth2_credentials", false);
  public get oauth2Credentials() {
    return this._oauth2Credentials;
  }

  // oauth2_grant_type - computed: true, optional: false, required: false
  public get oauth2GrantType() {
    return this.getStringAttribute('oauth2_grant_type');
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }

  // token_url_parameters_map - computed: true, optional: false, required: false
  private _tokenUrlParametersMap = new cdktn.StringMap(this, "token_url_parameters_map");
  public get tokenUrlParametersMap() {
    return this._tokenUrlParametersMap;
  }
}

export class DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference {
    return new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueConnectionAuthenticationConfiguration {
}

export function dataAwsGlueConnectionAuthenticationConfigurationToTerraform(struct?: DataAwsGlueConnectionAuthenticationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsGlueConnectionAuthenticationConfigurationToHclTerraform(struct?: DataAwsGlueConnectionAuthenticationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlueConnectionAuthenticationConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsGlueConnectionAuthenticationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueConnectionAuthenticationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // basic_authentication_credentials - computed: true, optional: false, required: false
  private _basicAuthenticationCredentials = new DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList(this, "basic_authentication_credentials", false);
  public get basicAuthenticationCredentials() {
    return this._basicAuthenticationCredentials;
  }

  // custom_authentication_credentials - computed: true, optional: false, required: false
  private _customAuthenticationCredentials = new cdktn.StringMap(this, "custom_authentication_credentials");
  public get customAuthenticationCredentials() {
    return this._customAuthenticationCredentials;
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // oauth2_properties - computed: true, optional: false, required: false
  private _oauth2Properties = new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList(this, "oauth2_properties", false);
  public get oauth2Properties() {
    return this._oauth2Properties;
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}

export class DataAwsGlueConnectionAuthenticationConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsGlueConnectionAuthenticationConfigurationOutputReference {
    return new DataAwsGlueConnectionAuthenticationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueConnectionPhysicalConnectionRequirements {
}

export function dataAwsGlueConnectionPhysicalConnectionRequirementsToTerraform(struct?: DataAwsGlueConnectionPhysicalConnectionRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsGlueConnectionPhysicalConnectionRequirementsToHclTerraform(struct?: DataAwsGlueConnectionPhysicalConnectionRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsGlueConnectionPhysicalConnectionRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueConnectionPhysicalConnectionRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // security_group_id_list - computed: true, optional: false, required: false
  public get securityGroupIdList() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_id_list'));
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataAwsGlueConnectionPhysicalConnectionRequirementsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference {
    return new DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_connection aws_glue_connection}
*/
export class DataAwsGlueConnection extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsGlueConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsGlueConnection to import
  * @param importFromId The id of the existing DataAwsGlueConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsGlueConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_connection aws_glue_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsGlueConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsGlueConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_connection',
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
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // athena_properties - computed: true, optional: false, required: false
  private _athenaProperties = new cdktn.StringMap(this, "athena_properties");
  public get athenaProperties() {
    return this._athenaProperties;
  }

  // authentication_configuration - computed: true, optional: false, required: false
  private _authenticationConfiguration = new DataAwsGlueConnectionAuthenticationConfigurationList(this, "authentication_configuration", false);
  public get authenticationConfiguration() {
    return this._authenticationConfiguration;
  }

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // connection_properties - computed: true, optional: false, required: false
  private _connectionProperties = new cdktn.StringMap(this, "connection_properties");
  public get connectionProperties() {
    return this._connectionProperties;
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // match_criteria - computed: true, optional: false, required: false
  public get matchCriteria() {
    return this.getListAttribute('match_criteria');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // physical_connection_requirements - computed: true, optional: false, required: false
  private _physicalConnectionRequirements = new DataAwsGlueConnectionPhysicalConnectionRequirementsList(this, "physical_connection_requirements", false);
  public get physicalConnectionRequirements() {
    return this._physicalConnectionRequirements;
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

  // tags - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
