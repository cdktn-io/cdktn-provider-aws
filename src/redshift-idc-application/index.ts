/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftIdcApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#application_type RedshiftIdcApplication#application_type}
  */
  readonly applicationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#iam_role_arn RedshiftIdcApplication#iam_role_arn}
  */
  readonly iamRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_display_name RedshiftIdcApplication#idc_display_name}
  */
  readonly idcDisplayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_instance_arn RedshiftIdcApplication#idc_instance_arn}
  */
  readonly idcInstanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#identity_namespace RedshiftIdcApplication#identity_namespace}
  */
  readonly identityNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#redshift_idc_application_name RedshiftIdcApplication#redshift_idc_application_name}
  */
  readonly redshiftIdcApplicationName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#region RedshiftIdcApplication#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#tags RedshiftIdcApplication#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * authorized_token_issuer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorized_token_issuer RedshiftIdcApplication#authorized_token_issuer}
  */
  readonly authorizedTokenIssuer?: RedshiftIdcApplicationAuthorizedTokenIssuer[] | cdktf.IResolvable;
  /**
  * service_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#service_integration RedshiftIdcApplication#service_integration}
  */
  readonly serviceIntegration?: RedshiftIdcApplicationServiceIntegration[] | cdktf.IResolvable;
}
export interface RedshiftIdcApplicationAuthorizedTokenIssuer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorized_audiences_list RedshiftIdcApplication#authorized_audiences_list}
  */
  readonly authorizedAudiencesList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#trusted_token_issuer_arn RedshiftIdcApplication#trusted_token_issuer_arn}
  */
  readonly trustedTokenIssuerArn?: string;
}

export function redshiftIdcApplicationAuthorizedTokenIssuerToTerraform(struct?: RedshiftIdcApplicationAuthorizedTokenIssuer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_audiences_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizedAudiencesList),
    trusted_token_issuer_arn: cdktf.stringToTerraform(struct!.trustedTokenIssuerArn),
  }
}


export function redshiftIdcApplicationAuthorizedTokenIssuerToHclTerraform(struct?: RedshiftIdcApplicationAuthorizedTokenIssuer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorized_audiences_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizedAudiencesList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trusted_token_issuer_arn: {
      value: cdktf.stringToHclTerraform(struct!.trustedTokenIssuerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedshiftIdcApplicationAuthorizedTokenIssuer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedAudiencesList !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedAudiencesList = this._authorizedAudiencesList;
    }
    if (this._trustedTokenIssuerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedTokenIssuerArn = this._trustedTokenIssuerArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftIdcApplicationAuthorizedTokenIssuer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizedAudiencesList = undefined;
      this._trustedTokenIssuerArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizedAudiencesList = value.authorizedAudiencesList;
      this._trustedTokenIssuerArn = value.trustedTokenIssuerArn;
    }
  }

  // authorized_audiences_list - computed: false, optional: true, required: false
  private _authorizedAudiencesList?: string[]; 
  public get authorizedAudiencesList() {
    return this.getListAttribute('authorized_audiences_list');
  }
  public set authorizedAudiencesList(value: string[]) {
    this._authorizedAudiencesList = value;
  }
  public resetAuthorizedAudiencesList() {
    this._authorizedAudiencesList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedAudiencesListInput() {
    return this._authorizedAudiencesList;
  }

  // trusted_token_issuer_arn - computed: false, optional: true, required: false
  private _trustedTokenIssuerArn?: string; 
  public get trustedTokenIssuerArn() {
    return this.getStringAttribute('trusted_token_issuer_arn');
  }
  public set trustedTokenIssuerArn(value: string) {
    this._trustedTokenIssuerArn = value;
  }
  public resetTrustedTokenIssuerArn() {
    this._trustedTokenIssuerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedTokenIssuerArnInput() {
    return this._trustedTokenIssuerArn;
  }
}

export class RedshiftIdcApplicationAuthorizedTokenIssuerList extends cdktf.ComplexList {
  public internalValue? : RedshiftIdcApplicationAuthorizedTokenIssuer[] | cdktf.IResolvable

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
  public get(index: number): RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference {
    return new RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}
  */
  readonly authorization: string;
}

export function redshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryToTerraform(struct?: RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: cdktf.stringToTerraform(struct!.authorization),
  }
}


export function redshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryToHclTerraform(struct?: RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: cdktf.stringToHclTerraform(struct!.authorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorization = value.authorization;
    }
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }
}

export class RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList extends cdktf.ComplexList {
  public internalValue? : RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery[] | cdktf.IResolvable

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
  public get(index: number): RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference {
    return new RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedshiftIdcApplicationServiceIntegrationLakeFormation {
  /**
  * lake_formation_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#lake_formation_query RedshiftIdcApplication#lake_formation_query}
  */
  readonly lakeFormationQuery?: RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery[] | cdktf.IResolvable;
}

export function redshiftIdcApplicationServiceIntegrationLakeFormationToTerraform(struct?: RedshiftIdcApplicationServiceIntegrationLakeFormation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lake_formation_query: cdktf.listMapper(redshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryToTerraform, true)(struct!.lakeFormationQuery),
  }
}


export function redshiftIdcApplicationServiceIntegrationLakeFormationToHclTerraform(struct?: RedshiftIdcApplicationServiceIntegrationLakeFormation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lake_formation_query: {
      value: cdktf.listMapperHcl(redshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryToHclTerraform, true)(struct!.lakeFormationQuery),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedshiftIdcApplicationServiceIntegrationLakeFormation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lakeFormationQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakeFormationQuery = this._lakeFormationQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftIdcApplicationServiceIntegrationLakeFormation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lakeFormationQuery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lakeFormationQuery.internalValue = value.lakeFormationQuery;
    }
  }

  // lake_formation_query - computed: false, optional: true, required: false
  private _lakeFormationQuery = new RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList(this, "lake_formation_query", false);
  public get lakeFormationQuery() {
    return this._lakeFormationQuery;
  }
  public putLakeFormationQuery(value: RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery[] | cdktf.IResolvable) {
    this._lakeFormationQuery.internalValue = value;
  }
  public resetLakeFormationQuery() {
    this._lakeFormationQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakeFormationQueryInput() {
    return this._lakeFormationQuery.internalValue;
  }
}

export class RedshiftIdcApplicationServiceIntegrationLakeFormationList extends cdktf.ComplexList {
  public internalValue? : RedshiftIdcApplicationServiceIntegrationLakeFormation[] | cdktf.IResolvable

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
  public get(index: number): RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference {
    return new RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedshiftIdcApplicationServiceIntegrationRedshiftConnect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}
  */
  readonly authorization: string;
}

export function redshiftIdcApplicationServiceIntegrationRedshiftConnectToTerraform(struct?: RedshiftIdcApplicationServiceIntegrationRedshiftConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: cdktf.stringToTerraform(struct!.authorization),
  }
}


export function redshiftIdcApplicationServiceIntegrationRedshiftConnectToHclTerraform(struct?: RedshiftIdcApplicationServiceIntegrationRedshiftConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: cdktf.stringToHclTerraform(struct!.authorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedshiftIdcApplicationServiceIntegrationRedshiftConnect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftIdcApplicationServiceIntegrationRedshiftConnect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorization = value.authorization;
    }
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }
}

export class RedshiftIdcApplicationServiceIntegrationRedshiftConnectList extends cdktf.ComplexList {
  public internalValue? : RedshiftIdcApplicationServiceIntegrationRedshiftConnect[] | cdktf.IResolvable

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
  public get(index: number): RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference {
    return new RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedshiftIdcApplicationServiceIntegrationRedshift {
  /**
  * connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#connect RedshiftIdcApplication#connect}
  */
  readonly connect?: RedshiftIdcApplicationServiceIntegrationRedshiftConnect[] | cdktf.IResolvable;
}

export function redshiftIdcApplicationServiceIntegrationRedshiftToTerraform(struct?: RedshiftIdcApplicationServiceIntegrationRedshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect: cdktf.listMapper(redshiftIdcApplicationServiceIntegrationRedshiftConnectToTerraform, true)(struct!.connect),
  }
}


export function redshiftIdcApplicationServiceIntegrationRedshiftToHclTerraform(struct?: RedshiftIdcApplicationServiceIntegrationRedshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect: {
      value: cdktf.listMapperHcl(redshiftIdcApplicationServiceIntegrationRedshiftConnectToHclTerraform, true)(struct!.connect),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftIdcApplicationServiceIntegrationRedshiftConnectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedshiftIdcApplicationServiceIntegrationRedshift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connect = this._connect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftIdcApplicationServiceIntegrationRedshift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connect.internalValue = value.connect;
    }
  }

  // connect - computed: false, optional: true, required: false
  private _connect = new RedshiftIdcApplicationServiceIntegrationRedshiftConnectList(this, "connect", false);
  public get connect() {
    return this._connect;
  }
  public putConnect(value: RedshiftIdcApplicationServiceIntegrationRedshiftConnect[] | cdktf.IResolvable) {
    this._connect.internalValue = value;
  }
  public resetConnect() {
    this._connect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInput() {
    return this._connect.internalValue;
  }
}

export class RedshiftIdcApplicationServiceIntegrationRedshiftList extends cdktf.ComplexList {
  public internalValue? : RedshiftIdcApplicationServiceIntegrationRedshift[] | cdktf.IResolvable

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
  public get(index: number): RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference {
    return new RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}
  */
  readonly authorization: string;
}

export function redshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessToTerraform(struct?: RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: cdktf.stringToTerraform(struct!.authorization),
  }
}


export function redshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessToHclTerraform(struct?: RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: cdktf.stringToHclTerraform(struct!.authorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorization = value.authorization;
    }
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }
}

export class RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList extends cdktf.ComplexList {
  public internalValue? : RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess[] | cdktf.IResolvable

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
  public get(index: number): RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference {
    return new RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedshiftIdcApplicationServiceIntegrationS3AccessGrants {
  /**
  * read_write_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#read_write_access RedshiftIdcApplication#read_write_access}
  */
  readonly readWriteAccess?: RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess[] | cdktf.IResolvable;
}

export function redshiftIdcApplicationServiceIntegrationS3AccessGrantsToTerraform(struct?: RedshiftIdcApplicationServiceIntegrationS3AccessGrants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_write_access: cdktf.listMapper(redshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessToTerraform, true)(struct!.readWriteAccess),
  }
}


export function redshiftIdcApplicationServiceIntegrationS3AccessGrantsToHclTerraform(struct?: RedshiftIdcApplicationServiceIntegrationS3AccessGrants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_write_access: {
      value: cdktf.listMapperHcl(redshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessToHclTerraform, true)(struct!.readWriteAccess),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedshiftIdcApplicationServiceIntegrationS3AccessGrants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readWriteAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readWriteAccess = this._readWriteAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftIdcApplicationServiceIntegrationS3AccessGrants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readWriteAccess.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readWriteAccess.internalValue = value.readWriteAccess;
    }
  }

  // read_write_access - computed: false, optional: true, required: false
  private _readWriteAccess = new RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList(this, "read_write_access", false);
  public get readWriteAccess() {
    return this._readWriteAccess;
  }
  public putReadWriteAccess(value: RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess[] | cdktf.IResolvable) {
    this._readWriteAccess.internalValue = value;
  }
  public resetReadWriteAccess() {
    this._readWriteAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteAccessInput() {
    return this._readWriteAccess.internalValue;
  }
}

export class RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList extends cdktf.ComplexList {
  public internalValue? : RedshiftIdcApplicationServiceIntegrationS3AccessGrants[] | cdktf.IResolvable

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
  public get(index: number): RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference {
    return new RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedshiftIdcApplicationServiceIntegration {
  /**
  * lake_formation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#lake_formation RedshiftIdcApplication#lake_formation}
  */
  readonly lakeFormation?: RedshiftIdcApplicationServiceIntegrationLakeFormation[] | cdktf.IResolvable;
  /**
  * redshift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#redshift RedshiftIdcApplication#redshift}
  */
  readonly redshift?: RedshiftIdcApplicationServiceIntegrationRedshift[] | cdktf.IResolvable;
  /**
  * s3_access_grants block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#s3_access_grants RedshiftIdcApplication#s3_access_grants}
  */
  readonly s3AccessGrants?: RedshiftIdcApplicationServiceIntegrationS3AccessGrants[] | cdktf.IResolvable;
}

export function redshiftIdcApplicationServiceIntegrationToTerraform(struct?: RedshiftIdcApplicationServiceIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lake_formation: cdktf.listMapper(redshiftIdcApplicationServiceIntegrationLakeFormationToTerraform, true)(struct!.lakeFormation),
    redshift: cdktf.listMapper(redshiftIdcApplicationServiceIntegrationRedshiftToTerraform, true)(struct!.redshift),
    s3_access_grants: cdktf.listMapper(redshiftIdcApplicationServiceIntegrationS3AccessGrantsToTerraform, true)(struct!.s3AccessGrants),
  }
}


export function redshiftIdcApplicationServiceIntegrationToHclTerraform(struct?: RedshiftIdcApplicationServiceIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lake_formation: {
      value: cdktf.listMapperHcl(redshiftIdcApplicationServiceIntegrationLakeFormationToHclTerraform, true)(struct!.lakeFormation),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftIdcApplicationServiceIntegrationLakeFormationList",
    },
    redshift: {
      value: cdktf.listMapperHcl(redshiftIdcApplicationServiceIntegrationRedshiftToHclTerraform, true)(struct!.redshift),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftIdcApplicationServiceIntegrationRedshiftList",
    },
    s3_access_grants: {
      value: cdktf.listMapperHcl(redshiftIdcApplicationServiceIntegrationS3AccessGrantsToHclTerraform, true)(struct!.s3AccessGrants),
      isBlock: true,
      type: "list",
      storageClassType: "RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedshiftIdcApplicationServiceIntegrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedshiftIdcApplicationServiceIntegration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lakeFormation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakeFormation = this._lakeFormation?.internalValue;
    }
    if (this._redshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshift = this._redshift?.internalValue;
    }
    if (this._s3AccessGrants?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AccessGrants = this._s3AccessGrants?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftIdcApplicationServiceIntegration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lakeFormation.internalValue = undefined;
      this._redshift.internalValue = undefined;
      this._s3AccessGrants.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lakeFormation.internalValue = value.lakeFormation;
      this._redshift.internalValue = value.redshift;
      this._s3AccessGrants.internalValue = value.s3AccessGrants;
    }
  }

  // lake_formation - computed: false, optional: true, required: false
  private _lakeFormation = new RedshiftIdcApplicationServiceIntegrationLakeFormationList(this, "lake_formation", false);
  public get lakeFormation() {
    return this._lakeFormation;
  }
  public putLakeFormation(value: RedshiftIdcApplicationServiceIntegrationLakeFormation[] | cdktf.IResolvable) {
    this._lakeFormation.internalValue = value;
  }
  public resetLakeFormation() {
    this._lakeFormation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakeFormationInput() {
    return this._lakeFormation.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new RedshiftIdcApplicationServiceIntegrationRedshiftList(this, "redshift", false);
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: RedshiftIdcApplicationServiceIntegrationRedshift[] | cdktf.IResolvable) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // s3_access_grants - computed: false, optional: true, required: false
  private _s3AccessGrants = new RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList(this, "s3_access_grants", false);
  public get s3AccessGrants() {
    return this._s3AccessGrants;
  }
  public putS3AccessGrants(value: RedshiftIdcApplicationServiceIntegrationS3AccessGrants[] | cdktf.IResolvable) {
    this._s3AccessGrants.internalValue = value;
  }
  public resetS3AccessGrants() {
    this._s3AccessGrants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessGrantsInput() {
    return this._s3AccessGrants.internalValue;
  }
}

export class RedshiftIdcApplicationServiceIntegrationList extends cdktf.ComplexList {
  public internalValue? : RedshiftIdcApplicationServiceIntegration[] | cdktf.IResolvable

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
  public get(index: number): RedshiftIdcApplicationServiceIntegrationOutputReference {
    return new RedshiftIdcApplicationServiceIntegrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application aws_redshift_idc_application}
*/
export class RedshiftIdcApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_idc_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedshiftIdcApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedshiftIdcApplication to import
  * @param importFromId The id of the existing RedshiftIdcApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedshiftIdcApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshift_idc_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application aws_redshift_idc_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftIdcApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftIdcApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_idc_application',
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
    this._applicationType = config.applicationType;
    this._iamRoleArn = config.iamRoleArn;
    this._idcDisplayName = config.idcDisplayName;
    this._idcInstanceArn = config.idcInstanceArn;
    this._identityNamespace = config.identityNamespace;
    this._redshiftIdcApplicationName = config.redshiftIdcApplicationName;
    this._region = config.region;
    this._tags = config.tags;
    this._authorizedTokenIssuer.internalValue = config.authorizedTokenIssuer;
    this._serviceIntegration.internalValue = config.serviceIntegration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_type - computed: true, optional: true, required: false
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  public resetApplicationType() {
    this._applicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
  }

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
  }

  // idc_display_name - computed: false, optional: false, required: true
  private _idcDisplayName?: string; 
  public get idcDisplayName() {
    return this.getStringAttribute('idc_display_name');
  }
  public set idcDisplayName(value: string) {
    this._idcDisplayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcDisplayNameInput() {
    return this._idcDisplayName;
  }

  // idc_instance_arn - computed: false, optional: false, required: true
  private _idcInstanceArn?: string; 
  public get idcInstanceArn() {
    return this.getStringAttribute('idc_instance_arn');
  }
  public set idcInstanceArn(value: string) {
    this._idcInstanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcInstanceArnInput() {
    return this._idcInstanceArn;
  }

  // idc_managed_application_arn - computed: true, optional: false, required: false
  public get idcManagedApplicationArn() {
    return this.getStringAttribute('idc_managed_application_arn');
  }

  // identity_namespace - computed: true, optional: true, required: false
  private _identityNamespace?: string; 
  public get identityNamespace() {
    return this.getStringAttribute('identity_namespace');
  }
  public set identityNamespace(value: string) {
    this._identityNamespace = value;
  }
  public resetIdentityNamespace() {
    this._identityNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityNamespaceInput() {
    return this._identityNamespace;
  }

  // redshift_idc_application_arn - computed: true, optional: false, required: false
  public get redshiftIdcApplicationArn() {
    return this.getStringAttribute('redshift_idc_application_arn');
  }

  // redshift_idc_application_name - computed: false, optional: false, required: true
  private _redshiftIdcApplicationName?: string; 
  public get redshiftIdcApplicationName() {
    return this.getStringAttribute('redshift_idc_application_name');
  }
  public set redshiftIdcApplicationName(value: string) {
    this._redshiftIdcApplicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftIdcApplicationNameInput() {
    return this._redshiftIdcApplicationName;
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
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // authorized_token_issuer - computed: false, optional: true, required: false
  private _authorizedTokenIssuer = new RedshiftIdcApplicationAuthorizedTokenIssuerList(this, "authorized_token_issuer", false);
  public get authorizedTokenIssuer() {
    return this._authorizedTokenIssuer;
  }
  public putAuthorizedTokenIssuer(value: RedshiftIdcApplicationAuthorizedTokenIssuer[] | cdktf.IResolvable) {
    this._authorizedTokenIssuer.internalValue = value;
  }
  public resetAuthorizedTokenIssuer() {
    this._authorizedTokenIssuer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedTokenIssuerInput() {
    return this._authorizedTokenIssuer.internalValue;
  }

  // service_integration - computed: false, optional: true, required: false
  private _serviceIntegration = new RedshiftIdcApplicationServiceIntegrationList(this, "service_integration", false);
  public get serviceIntegration() {
    return this._serviceIntegration;
  }
  public putServiceIntegration(value: RedshiftIdcApplicationServiceIntegration[] | cdktf.IResolvable) {
    this._serviceIntegration.internalValue = value;
  }
  public resetServiceIntegration() {
    this._serviceIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIntegrationInput() {
    return this._serviceIntegration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_type: cdktf.stringToTerraform(this._applicationType),
      iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
      idc_display_name: cdktf.stringToTerraform(this._idcDisplayName),
      idc_instance_arn: cdktf.stringToTerraform(this._idcInstanceArn),
      identity_namespace: cdktf.stringToTerraform(this._identityNamespace),
      redshift_idc_application_name: cdktf.stringToTerraform(this._redshiftIdcApplicationName),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      authorized_token_issuer: cdktf.listMapper(redshiftIdcApplicationAuthorizedTokenIssuerToTerraform, true)(this._authorizedTokenIssuer.internalValue),
      service_integration: cdktf.listMapper(redshiftIdcApplicationServiceIntegrationToTerraform, true)(this._serviceIntegration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_type: {
        value: cdktf.stringToHclTerraform(this._applicationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_role_arn: {
        value: cdktf.stringToHclTerraform(this._iamRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idc_display_name: {
        value: cdktf.stringToHclTerraform(this._idcDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idc_instance_arn: {
        value: cdktf.stringToHclTerraform(this._idcInstanceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_namespace: {
        value: cdktf.stringToHclTerraform(this._identityNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redshift_idc_application_name: {
        value: cdktf.stringToHclTerraform(this._redshiftIdcApplicationName),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      authorized_token_issuer: {
        value: cdktf.listMapperHcl(redshiftIdcApplicationAuthorizedTokenIssuerToHclTerraform, true)(this._authorizedTokenIssuer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedshiftIdcApplicationAuthorizedTokenIssuerList",
      },
      service_integration: {
        value: cdktf.listMapperHcl(redshiftIdcApplicationServiceIntegrationToHclTerraform, true)(this._serviceIntegration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedshiftIdcApplicationServiceIntegrationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
