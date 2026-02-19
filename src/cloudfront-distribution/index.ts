/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudfrontDistributionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#aliases CloudfrontDistribution#aliases}
  */
  readonly aliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#anycast_ip_list_id CloudfrontDistribution#anycast_ip_list_id}
  */
  readonly anycastIpListId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#comment CloudfrontDistribution#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#continuous_deployment_policy_id CloudfrontDistribution#continuous_deployment_policy_id}
  */
  readonly continuousDeploymentPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#default_root_object CloudfrontDistribution#default_root_object}
  */
  readonly defaultRootObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#enabled CloudfrontDistribution#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#http_version CloudfrontDistribution#http_version}
  */
  readonly httpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#id CloudfrontDistribution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#is_ipv6_enabled CloudfrontDistribution#is_ipv6_enabled}
  */
  readonly isIpv6Enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#price_class CloudfrontDistribution#price_class}
  */
  readonly priceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#retain_on_delete CloudfrontDistribution#retain_on_delete}
  */
  readonly retainOnDelete?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#staging CloudfrontDistribution#staging}
  */
  readonly staging?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#tags CloudfrontDistribution#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#tags_all CloudfrontDistribution#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#wait_for_deployment CloudfrontDistribution#wait_for_deployment}
  */
  readonly waitForDeployment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#web_acl_id CloudfrontDistribution#web_acl_id}
  */
  readonly webAclId?: string;
  /**
  * connection_function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#connection_function_association CloudfrontDistribution#connection_function_association}
  */
  readonly connectionFunctionAssociation?: CloudfrontDistributionConnectionFunctionAssociation;
  /**
  * custom_error_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#custom_error_response CloudfrontDistribution#custom_error_response}
  */
  readonly customErrorResponse?: CloudfrontDistributionCustomErrorResponse[] | cdktn.IResolvable;
  /**
  * default_cache_behavior block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#default_cache_behavior CloudfrontDistribution#default_cache_behavior}
  */
  readonly defaultCacheBehavior: CloudfrontDistributionDefaultCacheBehavior;
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#logging_config CloudfrontDistribution#logging_config}
  */
  readonly loggingConfig?: CloudfrontDistributionLoggingConfig;
  /**
  * ordered_cache_behavior block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#ordered_cache_behavior CloudfrontDistribution#ordered_cache_behavior}
  */
  readonly orderedCacheBehavior?: CloudfrontDistributionOrderedCacheBehavior[] | cdktn.IResolvable;
  /**
  * origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin CloudfrontDistribution#origin}
  */
  readonly origin: CloudfrontDistributionOrigin[] | cdktn.IResolvable;
  /**
  * origin_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin_group CloudfrontDistribution#origin_group}
  */
  readonly originGroup?: CloudfrontDistributionOriginGroup[] | cdktn.IResolvable;
  /**
  * restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#restrictions CloudfrontDistribution#restrictions}
  */
  readonly restrictions: CloudfrontDistributionRestrictions;
  /**
  * viewer_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#viewer_certificate CloudfrontDistribution#viewer_certificate}
  */
  readonly viewerCertificate: CloudfrontDistributionViewerCertificate;
  /**
  * viewer_mtls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#viewer_mtls_config CloudfrontDistribution#viewer_mtls_config}
  */
  readonly viewerMtlsConfig?: CloudfrontDistributionViewerMtlsConfig;
}
export interface CloudfrontDistributionTrustedKeyGroupsItems {
}

export function cloudfrontDistributionTrustedKeyGroupsItemsToTerraform(struct?: CloudfrontDistributionTrustedKeyGroupsItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudfrontDistributionTrustedKeyGroupsItemsToHclTerraform(struct?: CloudfrontDistributionTrustedKeyGroupsItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudfrontDistributionTrustedKeyGroupsItemsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionTrustedKeyGroupsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionTrustedKeyGroupsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_group_id - computed: true, optional: false, required: false
  public get keyGroupId() {
    return this.getStringAttribute('key_group_id');
  }

  // key_pair_ids - computed: true, optional: false, required: false
  public get keyPairIds() {
    return cdktn.Fn.tolist(this.getListAttribute('key_pair_ids'));
  }
}

export class CloudfrontDistributionTrustedKeyGroupsItemsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudfrontDistributionTrustedKeyGroupsItemsOutputReference {
    return new CloudfrontDistributionTrustedKeyGroupsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionTrustedKeyGroups {
}

export function cloudfrontDistributionTrustedKeyGroupsToTerraform(struct?: CloudfrontDistributionTrustedKeyGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudfrontDistributionTrustedKeyGroupsToHclTerraform(struct?: CloudfrontDistributionTrustedKeyGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudfrontDistributionTrustedKeyGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionTrustedKeyGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionTrustedKeyGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // items - computed: true, optional: false, required: false
  private _items = new CloudfrontDistributionTrustedKeyGroupsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class CloudfrontDistributionTrustedKeyGroupsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudfrontDistributionTrustedKeyGroupsOutputReference {
    return new CloudfrontDistributionTrustedKeyGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionTrustedSignersItems {
}

export function cloudfrontDistributionTrustedSignersItemsToTerraform(struct?: CloudfrontDistributionTrustedSignersItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudfrontDistributionTrustedSignersItemsToHclTerraform(struct?: CloudfrontDistributionTrustedSignersItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudfrontDistributionTrustedSignersItemsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionTrustedSignersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionTrustedSignersItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_account_number - computed: true, optional: false, required: false
  public get awsAccountNumber() {
    return this.getStringAttribute('aws_account_number');
  }

  // key_pair_ids - computed: true, optional: false, required: false
  public get keyPairIds() {
    return cdktn.Fn.tolist(this.getListAttribute('key_pair_ids'));
  }
}

export class CloudfrontDistributionTrustedSignersItemsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudfrontDistributionTrustedSignersItemsOutputReference {
    return new CloudfrontDistributionTrustedSignersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionTrustedSigners {
}

export function cloudfrontDistributionTrustedSignersToTerraform(struct?: CloudfrontDistributionTrustedSigners): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudfrontDistributionTrustedSignersToHclTerraform(struct?: CloudfrontDistributionTrustedSigners): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudfrontDistributionTrustedSignersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionTrustedSigners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionTrustedSigners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // items - computed: true, optional: false, required: false
  private _items = new CloudfrontDistributionTrustedSignersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class CloudfrontDistributionTrustedSignersList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudfrontDistributionTrustedSignersOutputReference {
    return new CloudfrontDistributionTrustedSignersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionConnectionFunctionAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#id CloudfrontDistribution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function cloudfrontDistributionConnectionFunctionAssociationToTerraform(struct?: CloudfrontDistributionConnectionFunctionAssociationOutputReference | CloudfrontDistributionConnectionFunctionAssociation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function cloudfrontDistributionConnectionFunctionAssociationToHclTerraform(struct?: CloudfrontDistributionConnectionFunctionAssociationOutputReference | CloudfrontDistributionConnectionFunctionAssociation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionConnectionFunctionAssociationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionConnectionFunctionAssociation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionConnectionFunctionAssociation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
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
}
export interface CloudfrontDistributionCustomErrorResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#error_caching_min_ttl CloudfrontDistribution#error_caching_min_ttl}
  */
  readonly errorCachingMinTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#error_code CloudfrontDistribution#error_code}
  */
  readonly errorCode: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#response_code CloudfrontDistribution#response_code}
  */
  readonly responseCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#response_page_path CloudfrontDistribution#response_page_path}
  */
  readonly responsePagePath?: string;
}

export function cloudfrontDistributionCustomErrorResponseToTerraform(struct?: CloudfrontDistributionCustomErrorResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_caching_min_ttl: cdktn.numberToTerraform(struct!.errorCachingMinTtl),
    error_code: cdktn.numberToTerraform(struct!.errorCode),
    response_code: cdktn.numberToTerraform(struct!.responseCode),
    response_page_path: cdktn.stringToTerraform(struct!.responsePagePath),
  }
}


export function cloudfrontDistributionCustomErrorResponseToHclTerraform(struct?: CloudfrontDistributionCustomErrorResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_caching_min_ttl: {
      value: cdktn.numberToHclTerraform(struct!.errorCachingMinTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_code: {
      value: cdktn.numberToHclTerraform(struct!.errorCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_code: {
      value: cdktn.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_page_path: {
      value: cdktn.stringToHclTerraform(struct!.responsePagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionCustomErrorResponseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionCustomErrorResponse | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorCachingMinTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCachingMinTtl = this._errorCachingMinTtl;
    }
    if (this._errorCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCode = this._errorCode;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._responsePagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.responsePagePath = this._responsePagePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionCustomErrorResponse | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorCachingMinTtl = undefined;
      this._errorCode = undefined;
      this._responseCode = undefined;
      this._responsePagePath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorCachingMinTtl = value.errorCachingMinTtl;
      this._errorCode = value.errorCode;
      this._responseCode = value.responseCode;
      this._responsePagePath = value.responsePagePath;
    }
  }

  // error_caching_min_ttl - computed: false, optional: true, required: false
  private _errorCachingMinTtl?: number; 
  public get errorCachingMinTtl() {
    return this.getNumberAttribute('error_caching_min_ttl');
  }
  public set errorCachingMinTtl(value: number) {
    this._errorCachingMinTtl = value;
  }
  public resetErrorCachingMinTtl() {
    this._errorCachingMinTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCachingMinTtlInput() {
    return this._errorCachingMinTtl;
  }

  // error_code - computed: false, optional: false, required: true
  private _errorCode?: number; 
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }
  public set errorCode(value: number) {
    this._errorCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCodeInput() {
    return this._errorCode;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // response_page_path - computed: false, optional: true, required: false
  private _responsePagePath?: string; 
  public get responsePagePath() {
    return this.getStringAttribute('response_page_path');
  }
  public set responsePagePath(value: string) {
    this._responsePagePath = value;
  }
  public resetResponsePagePath() {
    this._responsePagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsePagePathInput() {
    return this._responsePagePath;
  }
}

export class CloudfrontDistributionCustomErrorResponseList extends cdktn.ComplexList {
  public internalValue? : CloudfrontDistributionCustomErrorResponse[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudfrontDistributionCustomErrorResponseOutputReference {
    return new CloudfrontDistributionCustomErrorResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#forward CloudfrontDistribution#forward}
  */
  readonly forward: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}
  */
  readonly whitelistedNames?: string[];
}

export function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference | CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward: cdktn.stringToTerraform(struct!.forward),
    whitelisted_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.whitelistedNames),
  }
}


export function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToHclTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference | CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward: {
      value: cdktn.stringToHclTerraform(struct!.forward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whitelisted_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.whitelistedNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward;
    }
    if (this._whitelistedNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistedNames = this._whitelistedNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forward = undefined;
      this._whitelistedNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forward = value.forward;
      this._whitelistedNames = value.whitelistedNames;
    }
  }

  // forward - computed: false, optional: false, required: true
  private _forward?: string; 
  public get forward() {
    return this.getStringAttribute('forward');
  }
  public set forward(value: string) {
    this._forward = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }

  // whitelisted_names - computed: true, optional: true, required: false
  private _whitelistedNames?: string[]; 
  public get whitelistedNames() {
    return cdktn.Fn.tolist(this.getListAttribute('whitelisted_names'));
  }
  public set whitelistedNames(value: string[]) {
    this._whitelistedNames = value;
  }
  public resetWhitelistedNames() {
    this._whitelistedNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistedNamesInput() {
    return this._whitelistedNames;
  }
}
export interface CloudfrontDistributionDefaultCacheBehaviorForwardedValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#headers CloudfrontDistribution#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#query_string CloudfrontDistribution#query_string}
  */
  readonly queryString: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}
  */
  readonly queryStringCacheKeys?: string[];
  /**
  * cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#cookies CloudfrontDistribution#cookies}
  */
  readonly cookies: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies;
}

export function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference | CloudfrontDistributionDefaultCacheBehaviorForwardedValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.headers),
    query_string: cdktn.booleanToTerraform(struct!.queryString),
    query_string_cache_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.queryStringCacheKeys),
    cookies: cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct!.cookies),
  }
}


export function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToHclTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference | CloudfrontDistributionDefaultCacheBehaviorForwardedValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    query_string: {
      value: cdktn.booleanToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_string_cache_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.queryStringCacheKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cookies: {
      value: cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToHclTerraform(struct!.cookies),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionDefaultCacheBehaviorForwardedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._queryStringCacheKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringCacheKeys = this._queryStringCacheKeys;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionDefaultCacheBehaviorForwardedValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers = undefined;
      this._queryString = undefined;
      this._queryStringCacheKeys = undefined;
      this._cookies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers = value.headers;
      this._queryString = value.queryString;
      this._queryStringCacheKeys = value.queryStringCacheKeys;
      this._cookies.internalValue = value.cookies;
    }
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return cdktn.Fn.tolist(this.getListAttribute('headers'));
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString?: boolean | cdktn.IResolvable; 
  public get queryString() {
    return this.getBooleanAttribute('query_string');
  }
  public set queryString(value: boolean | cdktn.IResolvable) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // query_string_cache_keys - computed: true, optional: true, required: false
  private _queryStringCacheKeys?: string[]; 
  public get queryStringCacheKeys() {
    return this.getListAttribute('query_string_cache_keys');
  }
  public set queryStringCacheKeys(value: string[]) {
    this._queryStringCacheKeys = value;
  }
  public resetQueryStringCacheKeys() {
    this._queryStringCacheKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringCacheKeysInput() {
    return this._queryStringCacheKeys;
  }

  // cookies - computed: false, optional: false, required: true
  private _cookies = new CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies) {
    this._cookies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }
}
export interface CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#event_type CloudfrontDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}
  */
  readonly functionArn: string;
}

export function cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktn.stringToTerraform(struct!.eventType),
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
  }
}


export function cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToHclTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktn.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_arn: {
      value: cdktn.stringToHclTerraform(struct!.functionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._functionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._functionArn = value.functionArn;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // function_arn - computed: false, optional: false, required: true
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
  }
}

export class CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList extends cdktn.ComplexList {
  public internalValue? : CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference {
    return new CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionDefaultCacheBehaviorGrpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#enabled CloudfrontDistribution#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function cloudfrontDistributionDefaultCacheBehaviorGrpcConfigToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorGrpcConfigOutputReference | CloudfrontDistributionDefaultCacheBehaviorGrpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function cloudfrontDistributionDefaultCacheBehaviorGrpcConfigToHclTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorGrpcConfigOutputReference | CloudfrontDistributionDefaultCacheBehaviorGrpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionDefaultCacheBehaviorGrpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionDefaultCacheBehaviorGrpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionDefaultCacheBehaviorGrpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#event_type CloudfrontDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#include_body CloudfrontDistribution#include_body}
  */
  readonly includeBody?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}
  */
  readonly lambdaArn: string;
}

export function cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktn.stringToTerraform(struct!.eventType),
    include_body: cdktn.booleanToTerraform(struct!.includeBody),
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
  }
}


export function cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToHclTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktn.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_body: {
      value: cdktn.booleanToHclTerraform(struct!.includeBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._includeBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeBody = this._includeBody;
    }
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._includeBody = undefined;
      this._lambdaArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._includeBody = value.includeBody;
      this._lambdaArn = value.lambdaArn;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // include_body - computed: false, optional: true, required: false
  private _includeBody?: boolean | cdktn.IResolvable; 
  public get includeBody() {
    return this.getBooleanAttribute('include_body');
  }
  public set includeBody(value: boolean | cdktn.IResolvable) {
    this._includeBody = value;
  }
  public resetIncludeBody() {
    this._includeBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBodyInput() {
    return this._includeBody;
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }
}

export class CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList extends cdktn.ComplexList {
  public internalValue? : CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference {
    return new CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionDefaultCacheBehavior {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}
  */
  readonly cachePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}
  */
  readonly cachedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#compress CloudfrontDistribution#compress}
  */
  readonly compress?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}
  */
  readonly fieldLevelEncryptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}
  */
  readonly minTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}
  */
  readonly originRequestPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}
  */
  readonly realtimeLogConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}
  */
  readonly responseHeadersPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}
  */
  readonly smoothStreaming?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}
  */
  readonly targetOriginId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}
  */
  readonly trustedKeyGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}
  */
  readonly trustedSigners?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}
  */
  readonly viewerProtocolPolicy: string;
  /**
  * forwarded_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#forwarded_values CloudfrontDistribution#forwarded_values}
  */
  readonly forwardedValues?: CloudfrontDistributionDefaultCacheBehaviorForwardedValues;
  /**
  * function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#function_association CloudfrontDistribution#function_association}
  */
  readonly functionAssociation?: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[] | cdktn.IResolvable;
  /**
  * grpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#grpc_config CloudfrontDistribution#grpc_config}
  */
  readonly grpcConfig?: CloudfrontDistributionDefaultCacheBehaviorGrpcConfig;
  /**
  * lambda_function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#lambda_function_association CloudfrontDistribution#lambda_function_association}
  */
  readonly lambdaFunctionAssociation?: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[] | cdktn.IResolvable;
}

export function cloudfrontDistributionDefaultCacheBehaviorToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorOutputReference | CloudfrontDistributionDefaultCacheBehavior): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedMethods),
    cache_policy_id: cdktn.stringToTerraform(struct!.cachePolicyId),
    cached_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cachedMethods),
    compress: cdktn.booleanToTerraform(struct!.compress),
    default_ttl: cdktn.numberToTerraform(struct!.defaultTtl),
    field_level_encryption_id: cdktn.stringToTerraform(struct!.fieldLevelEncryptionId),
    max_ttl: cdktn.numberToTerraform(struct!.maxTtl),
    min_ttl: cdktn.numberToTerraform(struct!.minTtl),
    origin_request_policy_id: cdktn.stringToTerraform(struct!.originRequestPolicyId),
    realtime_log_config_arn: cdktn.stringToTerraform(struct!.realtimeLogConfigArn),
    response_headers_policy_id: cdktn.stringToTerraform(struct!.responseHeadersPolicyId),
    smooth_streaming: cdktn.booleanToTerraform(struct!.smoothStreaming),
    target_origin_id: cdktn.stringToTerraform(struct!.targetOriginId),
    trusted_key_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.trustedKeyGroups),
    trusted_signers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.trustedSigners),
    viewer_protocol_policy: cdktn.stringToTerraform(struct!.viewerProtocolPolicy),
    forwarded_values: cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform(struct!.forwardedValues),
    function_association: cdktn.listMapper(cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToTerraform, true)(struct!.functionAssociation),
    grpc_config: cloudfrontDistributionDefaultCacheBehaviorGrpcConfigToTerraform(struct!.grpcConfig),
    lambda_function_association: cdktn.listMapper(cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform, true)(struct!.lambdaFunctionAssociation),
  }
}


export function cloudfrontDistributionDefaultCacheBehaviorToHclTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorOutputReference | CloudfrontDistributionDefaultCacheBehavior): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cache_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.cachePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cached_methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cachedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    compress: {
      value: cdktn.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_ttl: {
      value: cdktn.numberToHclTerraform(struct!.defaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    field_level_encryption_id: {
      value: cdktn.stringToHclTerraform(struct!.fieldLevelEncryptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ttl: {
      value: cdktn.numberToHclTerraform(struct!.maxTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_ttl: {
      value: cdktn.numberToHclTerraform(struct!.minTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_request_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.originRequestPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realtime_log_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.realtimeLogConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_headers_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.responseHeadersPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smooth_streaming: {
      value: cdktn.booleanToHclTerraform(struct!.smoothStreaming),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_origin_id: {
      value: cdktn.stringToHclTerraform(struct!.targetOriginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_key_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.trustedKeyGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trusted_signers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.trustedSigners),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    viewer_protocol_policy: {
      value: cdktn.stringToHclTerraform(struct!.viewerProtocolPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarded_values: {
      value: cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToHclTerraform(struct!.forwardedValues),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontDistributionDefaultCacheBehaviorForwardedValuesList",
    },
    function_association: {
      value: cdktn.listMapperHcl(cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToHclTerraform, true)(struct!.functionAssociation),
      isBlock: true,
      type: "set",
      storageClassType: "CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList",
    },
    grpc_config: {
      value: cloudfrontDistributionDefaultCacheBehaviorGrpcConfigToHclTerraform(struct!.grpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontDistributionDefaultCacheBehaviorGrpcConfigList",
    },
    lambda_function_association: {
      value: cdktn.listMapperHcl(cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToHclTerraform, true)(struct!.lambdaFunctionAssociation),
      isBlock: true,
      type: "set",
      storageClassType: "CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionDefaultCacheBehaviorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionDefaultCacheBehavior | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._cachePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePolicyId = this._cachePolicyId;
    }
    if (this._cachedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachedMethods = this._cachedMethods;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._fieldLevelEncryptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldLevelEncryptionId = this._fieldLevelEncryptionId;
    }
    if (this._maxTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTtl = this._maxTtl;
    }
    if (this._minTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTtl = this._minTtl;
    }
    if (this._originRequestPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originRequestPolicyId = this._originRequestPolicyId;
    }
    if (this._realtimeLogConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.realtimeLogConfigArn = this._realtimeLogConfigArn;
    }
    if (this._responseHeadersPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersPolicyId = this._responseHeadersPolicyId;
    }
    if (this._smoothStreaming !== undefined) {
      hasAnyValues = true;
      internalValueResult.smoothStreaming = this._smoothStreaming;
    }
    if (this._targetOriginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetOriginId = this._targetOriginId;
    }
    if (this._trustedKeyGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedKeyGroups = this._trustedKeyGroups;
    }
    if (this._trustedSigners !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedSigners = this._trustedSigners;
    }
    if (this._viewerProtocolPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewerProtocolPolicy = this._viewerProtocolPolicy;
    }
    if (this._forwardedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedValues = this._forwardedValues?.internalValue;
    }
    if (this._functionAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionAssociation = this._functionAssociation?.internalValue;
    }
    if (this._grpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcConfig = this._grpcConfig?.internalValue;
    }
    if (this._lambdaFunctionAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionAssociation = this._lambdaFunctionAssociation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionDefaultCacheBehavior | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedMethods = undefined;
      this._cachePolicyId = undefined;
      this._cachedMethods = undefined;
      this._compress = undefined;
      this._defaultTtl = undefined;
      this._fieldLevelEncryptionId = undefined;
      this._maxTtl = undefined;
      this._minTtl = undefined;
      this._originRequestPolicyId = undefined;
      this._realtimeLogConfigArn = undefined;
      this._responseHeadersPolicyId = undefined;
      this._smoothStreaming = undefined;
      this._targetOriginId = undefined;
      this._trustedKeyGroups = undefined;
      this._trustedSigners = undefined;
      this._viewerProtocolPolicy = undefined;
      this._forwardedValues.internalValue = undefined;
      this._functionAssociation.internalValue = undefined;
      this._grpcConfig.internalValue = undefined;
      this._lambdaFunctionAssociation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedMethods = value.allowedMethods;
      this._cachePolicyId = value.cachePolicyId;
      this._cachedMethods = value.cachedMethods;
      this._compress = value.compress;
      this._defaultTtl = value.defaultTtl;
      this._fieldLevelEncryptionId = value.fieldLevelEncryptionId;
      this._maxTtl = value.maxTtl;
      this._minTtl = value.minTtl;
      this._originRequestPolicyId = value.originRequestPolicyId;
      this._realtimeLogConfigArn = value.realtimeLogConfigArn;
      this._responseHeadersPolicyId = value.responseHeadersPolicyId;
      this._smoothStreaming = value.smoothStreaming;
      this._targetOriginId = value.targetOriginId;
      this._trustedKeyGroups = value.trustedKeyGroups;
      this._trustedSigners = value.trustedSigners;
      this._viewerProtocolPolicy = value.viewerProtocolPolicy;
      this._forwardedValues.internalValue = value.forwardedValues;
      this._functionAssociation.internalValue = value.functionAssociation;
      this._grpcConfig.internalValue = value.grpcConfig;
      this._lambdaFunctionAssociation.internalValue = value.lambdaFunctionAssociation;
    }
  }

  // allowed_methods - computed: false, optional: false, required: true
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_methods'));
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // cache_policy_id - computed: false, optional: true, required: false
  private _cachePolicyId?: string; 
  public get cachePolicyId() {
    return this.getStringAttribute('cache_policy_id');
  }
  public set cachePolicyId(value: string) {
    this._cachePolicyId = value;
  }
  public resetCachePolicyId() {
    this._cachePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePolicyIdInput() {
    return this._cachePolicyId;
  }

  // cached_methods - computed: false, optional: false, required: true
  private _cachedMethods?: string[]; 
  public get cachedMethods() {
    return cdktn.Fn.tolist(this.getListAttribute('cached_methods'));
  }
  public set cachedMethods(value: string[]) {
    this._cachedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedMethodsInput() {
    return this._cachedMethods;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: boolean | cdktn.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktn.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // default_ttl - computed: true, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // field_level_encryption_id - computed: false, optional: true, required: false
  private _fieldLevelEncryptionId?: string; 
  public get fieldLevelEncryptionId() {
    return this.getStringAttribute('field_level_encryption_id');
  }
  public set fieldLevelEncryptionId(value: string) {
    this._fieldLevelEncryptionId = value;
  }
  public resetFieldLevelEncryptionId() {
    this._fieldLevelEncryptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldLevelEncryptionIdInput() {
    return this._fieldLevelEncryptionId;
  }

  // max_ttl - computed: true, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // min_ttl - computed: false, optional: true, required: false
  private _minTtl?: number; 
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }
  public set minTtl(value: number) {
    this._minTtl = value;
  }
  public resetMinTtl() {
    this._minTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTtlInput() {
    return this._minTtl;
  }

  // origin_request_policy_id - computed: false, optional: true, required: false
  private _originRequestPolicyId?: string; 
  public get originRequestPolicyId() {
    return this.getStringAttribute('origin_request_policy_id');
  }
  public set originRequestPolicyId(value: string) {
    this._originRequestPolicyId = value;
  }
  public resetOriginRequestPolicyId() {
    this._originRequestPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRequestPolicyIdInput() {
    return this._originRequestPolicyId;
  }

  // realtime_log_config_arn - computed: false, optional: true, required: false
  private _realtimeLogConfigArn?: string; 
  public get realtimeLogConfigArn() {
    return this.getStringAttribute('realtime_log_config_arn');
  }
  public set realtimeLogConfigArn(value: string) {
    this._realtimeLogConfigArn = value;
  }
  public resetRealtimeLogConfigArn() {
    this._realtimeLogConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeLogConfigArnInput() {
    return this._realtimeLogConfigArn;
  }

  // response_headers_policy_id - computed: false, optional: true, required: false
  private _responseHeadersPolicyId?: string; 
  public get responseHeadersPolicyId() {
    return this.getStringAttribute('response_headers_policy_id');
  }
  public set responseHeadersPolicyId(value: string) {
    this._responseHeadersPolicyId = value;
  }
  public resetResponseHeadersPolicyId() {
    this._responseHeadersPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersPolicyIdInput() {
    return this._responseHeadersPolicyId;
  }

  // smooth_streaming - computed: false, optional: true, required: false
  private _smoothStreaming?: boolean | cdktn.IResolvable; 
  public get smoothStreaming() {
    return this.getBooleanAttribute('smooth_streaming');
  }
  public set smoothStreaming(value: boolean | cdktn.IResolvable) {
    this._smoothStreaming = value;
  }
  public resetSmoothStreaming() {
    this._smoothStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smoothStreamingInput() {
    return this._smoothStreaming;
  }

  // target_origin_id - computed: false, optional: false, required: true
  private _targetOriginId?: string; 
  public get targetOriginId() {
    return this.getStringAttribute('target_origin_id');
  }
  public set targetOriginId(value: string) {
    this._targetOriginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOriginIdInput() {
    return this._targetOriginId;
  }

  // trusted_key_groups - computed: true, optional: true, required: false
  private _trustedKeyGroups?: string[]; 
  public get trustedKeyGroups() {
    return this.getListAttribute('trusted_key_groups');
  }
  public set trustedKeyGroups(value: string[]) {
    this._trustedKeyGroups = value;
  }
  public resetTrustedKeyGroups() {
    this._trustedKeyGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedKeyGroupsInput() {
    return this._trustedKeyGroups;
  }

  // trusted_signers - computed: true, optional: true, required: false
  private _trustedSigners?: string[]; 
  public get trustedSigners() {
    return this.getListAttribute('trusted_signers');
  }
  public set trustedSigners(value: string[]) {
    this._trustedSigners = value;
  }
  public resetTrustedSigners() {
    this._trustedSigners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedSignersInput() {
    return this._trustedSigners;
  }

  // viewer_protocol_policy - computed: false, optional: false, required: true
  private _viewerProtocolPolicy?: string; 
  public get viewerProtocolPolicy() {
    return this.getStringAttribute('viewer_protocol_policy');
  }
  public set viewerProtocolPolicy(value: string) {
    this._viewerProtocolPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viewerProtocolPolicyInput() {
    return this._viewerProtocolPolicy;
  }

  // forwarded_values - computed: false, optional: true, required: false
  private _forwardedValues = new CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference(this, "forwarded_values");
  public get forwardedValues() {
    return this._forwardedValues;
  }
  public putForwardedValues(value: CloudfrontDistributionDefaultCacheBehaviorForwardedValues) {
    this._forwardedValues.internalValue = value;
  }
  public resetForwardedValues() {
    this._forwardedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedValuesInput() {
    return this._forwardedValues.internalValue;
  }

  // function_association - computed: false, optional: true, required: false
  private _functionAssociation = new CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList(this, "function_association", true);
  public get functionAssociation() {
    return this._functionAssociation;
  }
  public putFunctionAssociation(value: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[] | cdktn.IResolvable) {
    this._functionAssociation.internalValue = value;
  }
  public resetFunctionAssociation() {
    this._functionAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAssociationInput() {
    return this._functionAssociation.internalValue;
  }

  // grpc_config - computed: false, optional: true, required: false
  private _grpcConfig = new CloudfrontDistributionDefaultCacheBehaviorGrpcConfigOutputReference(this, "grpc_config");
  public get grpcConfig() {
    return this._grpcConfig;
  }
  public putGrpcConfig(value: CloudfrontDistributionDefaultCacheBehaviorGrpcConfig) {
    this._grpcConfig.internalValue = value;
  }
  public resetGrpcConfig() {
    this._grpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcConfigInput() {
    return this._grpcConfig.internalValue;
  }

  // lambda_function_association - computed: false, optional: true, required: false
  private _lambdaFunctionAssociation = new CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList(this, "lambda_function_association", true);
  public get lambdaFunctionAssociation() {
    return this._lambdaFunctionAssociation;
  }
  public putLambdaFunctionAssociation(value: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[] | cdktn.IResolvable) {
    this._lambdaFunctionAssociation.internalValue = value;
  }
  public resetLambdaFunctionAssociation() {
    this._lambdaFunctionAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionAssociationInput() {
    return this._lambdaFunctionAssociation.internalValue;
  }
}
export interface CloudfrontDistributionLoggingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#bucket CloudfrontDistribution#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#include_cookies CloudfrontDistribution#include_cookies}
  */
  readonly includeCookies?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#prefix CloudfrontDistribution#prefix}
  */
  readonly prefix?: string;
}

export function cloudfrontDistributionLoggingConfigToTerraform(struct?: CloudfrontDistributionLoggingConfigOutputReference | CloudfrontDistributionLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    include_cookies: cdktn.booleanToTerraform(struct!.includeCookies),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function cloudfrontDistributionLoggingConfigToHclTerraform(struct?: CloudfrontDistributionLoggingConfigOutputReference | CloudfrontDistributionLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_cookies: {
      value: cdktn.booleanToHclTerraform(struct!.includeCookies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionLoggingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._includeCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeCookies = this._includeCookies;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._includeCookies = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._includeCookies = value.includeCookies;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // include_cookies - computed: false, optional: true, required: false
  private _includeCookies?: boolean | cdktn.IResolvable; 
  public get includeCookies() {
    return this.getBooleanAttribute('include_cookies');
  }
  public set includeCookies(value: boolean | cdktn.IResolvable) {
    this._includeCookies = value;
  }
  public resetIncludeCookies() {
    this._includeCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCookiesInput() {
    return this._includeCookies;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#forward CloudfrontDistribution#forward}
  */
  readonly forward: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}
  */
  readonly whitelistedNames?: string[];
}

export function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference | CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward: cdktn.stringToTerraform(struct!.forward),
    whitelisted_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.whitelistedNames),
  }
}


export function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToHclTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference | CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward: {
      value: cdktn.stringToHclTerraform(struct!.forward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whitelisted_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.whitelistedNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward;
    }
    if (this._whitelistedNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistedNames = this._whitelistedNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forward = undefined;
      this._whitelistedNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forward = value.forward;
      this._whitelistedNames = value.whitelistedNames;
    }
  }

  // forward - computed: false, optional: false, required: true
  private _forward?: string; 
  public get forward() {
    return this.getStringAttribute('forward');
  }
  public set forward(value: string) {
    this._forward = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }

  // whitelisted_names - computed: false, optional: true, required: false
  private _whitelistedNames?: string[]; 
  public get whitelistedNames() {
    return cdktn.Fn.tolist(this.getListAttribute('whitelisted_names'));
  }
  public set whitelistedNames(value: string[]) {
    this._whitelistedNames = value;
  }
  public resetWhitelistedNames() {
    this._whitelistedNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistedNamesInput() {
    return this._whitelistedNames;
  }
}
export interface CloudfrontDistributionOrderedCacheBehaviorForwardedValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#headers CloudfrontDistribution#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#query_string CloudfrontDistribution#query_string}
  */
  readonly queryString: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}
  */
  readonly queryStringCacheKeys?: string[];
  /**
  * cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#cookies CloudfrontDistribution#cookies}
  */
  readonly cookies: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies;
}

export function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference | CloudfrontDistributionOrderedCacheBehaviorForwardedValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.headers),
    query_string: cdktn.booleanToTerraform(struct!.queryString),
    query_string_cache_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.queryStringCacheKeys),
    cookies: cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform(struct!.cookies),
  }
}


export function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToHclTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference | CloudfrontDistributionOrderedCacheBehaviorForwardedValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    query_string: {
      value: cdktn.booleanToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_string_cache_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.queryStringCacheKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cookies: {
      value: cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToHclTerraform(struct!.cookies),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionOrderedCacheBehaviorForwardedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._queryStringCacheKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringCacheKeys = this._queryStringCacheKeys;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionOrderedCacheBehaviorForwardedValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers = undefined;
      this._queryString = undefined;
      this._queryStringCacheKeys = undefined;
      this._cookies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers = value.headers;
      this._queryString = value.queryString;
      this._queryStringCacheKeys = value.queryStringCacheKeys;
      this._cookies.internalValue = value.cookies;
    }
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return cdktn.Fn.tolist(this.getListAttribute('headers'));
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString?: boolean | cdktn.IResolvable; 
  public get queryString() {
    return this.getBooleanAttribute('query_string');
  }
  public set queryString(value: boolean | cdktn.IResolvable) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // query_string_cache_keys - computed: true, optional: true, required: false
  private _queryStringCacheKeys?: string[]; 
  public get queryStringCacheKeys() {
    return this.getListAttribute('query_string_cache_keys');
  }
  public set queryStringCacheKeys(value: string[]) {
    this._queryStringCacheKeys = value;
  }
  public resetQueryStringCacheKeys() {
    this._queryStringCacheKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringCacheKeysInput() {
    return this._queryStringCacheKeys;
  }

  // cookies - computed: false, optional: false, required: true
  private _cookies = new CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies) {
    this._cookies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }
}
export interface CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#event_type CloudfrontDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}
  */
  readonly functionArn: string;
}

export function cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktn.stringToTerraform(struct!.eventType),
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
  }
}


export function cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToHclTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktn.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_arn: {
      value: cdktn.stringToHclTerraform(struct!.functionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._functionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._functionArn = value.functionArn;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // function_arn - computed: false, optional: false, required: true
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
  }
}

export class CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList extends cdktn.ComplexList {
  public internalValue? : CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference {
    return new CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionOrderedCacheBehaviorGrpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#enabled CloudfrontDistribution#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function cloudfrontDistributionOrderedCacheBehaviorGrpcConfigToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorGrpcConfigOutputReference | CloudfrontDistributionOrderedCacheBehaviorGrpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function cloudfrontDistributionOrderedCacheBehaviorGrpcConfigToHclTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorGrpcConfigOutputReference | CloudfrontDistributionOrderedCacheBehaviorGrpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionOrderedCacheBehaviorGrpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionOrderedCacheBehaviorGrpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionOrderedCacheBehaviorGrpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#event_type CloudfrontDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#include_body CloudfrontDistribution#include_body}
  */
  readonly includeBody?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}
  */
  readonly lambdaArn: string;
}

export function cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktn.stringToTerraform(struct!.eventType),
    include_body: cdktn.booleanToTerraform(struct!.includeBody),
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
  }
}


export function cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToHclTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktn.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_body: {
      value: cdktn.booleanToHclTerraform(struct!.includeBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._includeBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeBody = this._includeBody;
    }
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._includeBody = undefined;
      this._lambdaArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._includeBody = value.includeBody;
      this._lambdaArn = value.lambdaArn;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // include_body - computed: false, optional: true, required: false
  private _includeBody?: boolean | cdktn.IResolvable; 
  public get includeBody() {
    return this.getBooleanAttribute('include_body');
  }
  public set includeBody(value: boolean | cdktn.IResolvable) {
    this._includeBody = value;
  }
  public resetIncludeBody() {
    this._includeBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBodyInput() {
    return this._includeBody;
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }
}

export class CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList extends cdktn.ComplexList {
  public internalValue? : CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference {
    return new CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionOrderedCacheBehavior {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}
  */
  readonly cachePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}
  */
  readonly cachedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#compress CloudfrontDistribution#compress}
  */
  readonly compress?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}
  */
  readonly fieldLevelEncryptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}
  */
  readonly minTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}
  */
  readonly originRequestPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#path_pattern CloudfrontDistribution#path_pattern}
  */
  readonly pathPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}
  */
  readonly realtimeLogConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}
  */
  readonly responseHeadersPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}
  */
  readonly smoothStreaming?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}
  */
  readonly targetOriginId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}
  */
  readonly trustedKeyGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}
  */
  readonly trustedSigners?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}
  */
  readonly viewerProtocolPolicy: string;
  /**
  * forwarded_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#forwarded_values CloudfrontDistribution#forwarded_values}
  */
  readonly forwardedValues?: CloudfrontDistributionOrderedCacheBehaviorForwardedValues;
  /**
  * function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#function_association CloudfrontDistribution#function_association}
  */
  readonly functionAssociation?: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation[] | cdktn.IResolvable;
  /**
  * grpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#grpc_config CloudfrontDistribution#grpc_config}
  */
  readonly grpcConfig?: CloudfrontDistributionOrderedCacheBehaviorGrpcConfig;
  /**
  * lambda_function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#lambda_function_association CloudfrontDistribution#lambda_function_association}
  */
  readonly lambdaFunctionAssociation?: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation[] | cdktn.IResolvable;
}

export function cloudfrontDistributionOrderedCacheBehaviorToTerraform(struct?: CloudfrontDistributionOrderedCacheBehavior | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedMethods),
    cache_policy_id: cdktn.stringToTerraform(struct!.cachePolicyId),
    cached_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cachedMethods),
    compress: cdktn.booleanToTerraform(struct!.compress),
    default_ttl: cdktn.numberToTerraform(struct!.defaultTtl),
    field_level_encryption_id: cdktn.stringToTerraform(struct!.fieldLevelEncryptionId),
    max_ttl: cdktn.numberToTerraform(struct!.maxTtl),
    min_ttl: cdktn.numberToTerraform(struct!.minTtl),
    origin_request_policy_id: cdktn.stringToTerraform(struct!.originRequestPolicyId),
    path_pattern: cdktn.stringToTerraform(struct!.pathPattern),
    realtime_log_config_arn: cdktn.stringToTerraform(struct!.realtimeLogConfigArn),
    response_headers_policy_id: cdktn.stringToTerraform(struct!.responseHeadersPolicyId),
    smooth_streaming: cdktn.booleanToTerraform(struct!.smoothStreaming),
    target_origin_id: cdktn.stringToTerraform(struct!.targetOriginId),
    trusted_key_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.trustedKeyGroups),
    trusted_signers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.trustedSigners),
    viewer_protocol_policy: cdktn.stringToTerraform(struct!.viewerProtocolPolicy),
    forwarded_values: cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform(struct!.forwardedValues),
    function_association: cdktn.listMapper(cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToTerraform, true)(struct!.functionAssociation),
    grpc_config: cloudfrontDistributionOrderedCacheBehaviorGrpcConfigToTerraform(struct!.grpcConfig),
    lambda_function_association: cdktn.listMapper(cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform, true)(struct!.lambdaFunctionAssociation),
  }
}


export function cloudfrontDistributionOrderedCacheBehaviorToHclTerraform(struct?: CloudfrontDistributionOrderedCacheBehavior | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cache_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.cachePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cached_methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cachedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    compress: {
      value: cdktn.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_ttl: {
      value: cdktn.numberToHclTerraform(struct!.defaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    field_level_encryption_id: {
      value: cdktn.stringToHclTerraform(struct!.fieldLevelEncryptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ttl: {
      value: cdktn.numberToHclTerraform(struct!.maxTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_ttl: {
      value: cdktn.numberToHclTerraform(struct!.minTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_request_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.originRequestPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_pattern: {
      value: cdktn.stringToHclTerraform(struct!.pathPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realtime_log_config_arn: {
      value: cdktn.stringToHclTerraform(struct!.realtimeLogConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_headers_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.responseHeadersPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smooth_streaming: {
      value: cdktn.booleanToHclTerraform(struct!.smoothStreaming),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_origin_id: {
      value: cdktn.stringToHclTerraform(struct!.targetOriginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_key_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.trustedKeyGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trusted_signers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.trustedSigners),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    viewer_protocol_policy: {
      value: cdktn.stringToHclTerraform(struct!.viewerProtocolPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarded_values: {
      value: cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToHclTerraform(struct!.forwardedValues),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontDistributionOrderedCacheBehaviorForwardedValuesList",
    },
    function_association: {
      value: cdktn.listMapperHcl(cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToHclTerraform, true)(struct!.functionAssociation),
      isBlock: true,
      type: "set",
      storageClassType: "CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList",
    },
    grpc_config: {
      value: cloudfrontDistributionOrderedCacheBehaviorGrpcConfigToHclTerraform(struct!.grpcConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontDistributionOrderedCacheBehaviorGrpcConfigList",
    },
    lambda_function_association: {
      value: cdktn.listMapperHcl(cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToHclTerraform, true)(struct!.lambdaFunctionAssociation),
      isBlock: true,
      type: "set",
      storageClassType: "CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionOrderedCacheBehaviorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionOrderedCacheBehavior | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._cachePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePolicyId = this._cachePolicyId;
    }
    if (this._cachedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachedMethods = this._cachedMethods;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._fieldLevelEncryptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldLevelEncryptionId = this._fieldLevelEncryptionId;
    }
    if (this._maxTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTtl = this._maxTtl;
    }
    if (this._minTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTtl = this._minTtl;
    }
    if (this._originRequestPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originRequestPolicyId = this._originRequestPolicyId;
    }
    if (this._pathPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPattern = this._pathPattern;
    }
    if (this._realtimeLogConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.realtimeLogConfigArn = this._realtimeLogConfigArn;
    }
    if (this._responseHeadersPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersPolicyId = this._responseHeadersPolicyId;
    }
    if (this._smoothStreaming !== undefined) {
      hasAnyValues = true;
      internalValueResult.smoothStreaming = this._smoothStreaming;
    }
    if (this._targetOriginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetOriginId = this._targetOriginId;
    }
    if (this._trustedKeyGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedKeyGroups = this._trustedKeyGroups;
    }
    if (this._trustedSigners !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedSigners = this._trustedSigners;
    }
    if (this._viewerProtocolPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewerProtocolPolicy = this._viewerProtocolPolicy;
    }
    if (this._forwardedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedValues = this._forwardedValues?.internalValue;
    }
    if (this._functionAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionAssociation = this._functionAssociation?.internalValue;
    }
    if (this._grpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcConfig = this._grpcConfig?.internalValue;
    }
    if (this._lambdaFunctionAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionAssociation = this._lambdaFunctionAssociation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionOrderedCacheBehavior | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedMethods = undefined;
      this._cachePolicyId = undefined;
      this._cachedMethods = undefined;
      this._compress = undefined;
      this._defaultTtl = undefined;
      this._fieldLevelEncryptionId = undefined;
      this._maxTtl = undefined;
      this._minTtl = undefined;
      this._originRequestPolicyId = undefined;
      this._pathPattern = undefined;
      this._realtimeLogConfigArn = undefined;
      this._responseHeadersPolicyId = undefined;
      this._smoothStreaming = undefined;
      this._targetOriginId = undefined;
      this._trustedKeyGroups = undefined;
      this._trustedSigners = undefined;
      this._viewerProtocolPolicy = undefined;
      this._forwardedValues.internalValue = undefined;
      this._functionAssociation.internalValue = undefined;
      this._grpcConfig.internalValue = undefined;
      this._lambdaFunctionAssociation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedMethods = value.allowedMethods;
      this._cachePolicyId = value.cachePolicyId;
      this._cachedMethods = value.cachedMethods;
      this._compress = value.compress;
      this._defaultTtl = value.defaultTtl;
      this._fieldLevelEncryptionId = value.fieldLevelEncryptionId;
      this._maxTtl = value.maxTtl;
      this._minTtl = value.minTtl;
      this._originRequestPolicyId = value.originRequestPolicyId;
      this._pathPattern = value.pathPattern;
      this._realtimeLogConfigArn = value.realtimeLogConfigArn;
      this._responseHeadersPolicyId = value.responseHeadersPolicyId;
      this._smoothStreaming = value.smoothStreaming;
      this._targetOriginId = value.targetOriginId;
      this._trustedKeyGroups = value.trustedKeyGroups;
      this._trustedSigners = value.trustedSigners;
      this._viewerProtocolPolicy = value.viewerProtocolPolicy;
      this._forwardedValues.internalValue = value.forwardedValues;
      this._functionAssociation.internalValue = value.functionAssociation;
      this._grpcConfig.internalValue = value.grpcConfig;
      this._lambdaFunctionAssociation.internalValue = value.lambdaFunctionAssociation;
    }
  }

  // allowed_methods - computed: false, optional: false, required: true
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_methods'));
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // cache_policy_id - computed: false, optional: true, required: false
  private _cachePolicyId?: string; 
  public get cachePolicyId() {
    return this.getStringAttribute('cache_policy_id');
  }
  public set cachePolicyId(value: string) {
    this._cachePolicyId = value;
  }
  public resetCachePolicyId() {
    this._cachePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePolicyIdInput() {
    return this._cachePolicyId;
  }

  // cached_methods - computed: false, optional: false, required: true
  private _cachedMethods?: string[]; 
  public get cachedMethods() {
    return cdktn.Fn.tolist(this.getListAttribute('cached_methods'));
  }
  public set cachedMethods(value: string[]) {
    this._cachedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedMethodsInput() {
    return this._cachedMethods;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: boolean | cdktn.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktn.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // default_ttl - computed: true, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // field_level_encryption_id - computed: false, optional: true, required: false
  private _fieldLevelEncryptionId?: string; 
  public get fieldLevelEncryptionId() {
    return this.getStringAttribute('field_level_encryption_id');
  }
  public set fieldLevelEncryptionId(value: string) {
    this._fieldLevelEncryptionId = value;
  }
  public resetFieldLevelEncryptionId() {
    this._fieldLevelEncryptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldLevelEncryptionIdInput() {
    return this._fieldLevelEncryptionId;
  }

  // max_ttl - computed: true, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // min_ttl - computed: false, optional: true, required: false
  private _minTtl?: number; 
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }
  public set minTtl(value: number) {
    this._minTtl = value;
  }
  public resetMinTtl() {
    this._minTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTtlInput() {
    return this._minTtl;
  }

  // origin_request_policy_id - computed: false, optional: true, required: false
  private _originRequestPolicyId?: string; 
  public get originRequestPolicyId() {
    return this.getStringAttribute('origin_request_policy_id');
  }
  public set originRequestPolicyId(value: string) {
    this._originRequestPolicyId = value;
  }
  public resetOriginRequestPolicyId() {
    this._originRequestPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRequestPolicyIdInput() {
    return this._originRequestPolicyId;
  }

  // path_pattern - computed: false, optional: false, required: true
  private _pathPattern?: string; 
  public get pathPattern() {
    return this.getStringAttribute('path_pattern');
  }
  public set pathPattern(value: string) {
    this._pathPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPatternInput() {
    return this._pathPattern;
  }

  // realtime_log_config_arn - computed: false, optional: true, required: false
  private _realtimeLogConfigArn?: string; 
  public get realtimeLogConfigArn() {
    return this.getStringAttribute('realtime_log_config_arn');
  }
  public set realtimeLogConfigArn(value: string) {
    this._realtimeLogConfigArn = value;
  }
  public resetRealtimeLogConfigArn() {
    this._realtimeLogConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeLogConfigArnInput() {
    return this._realtimeLogConfigArn;
  }

  // response_headers_policy_id - computed: false, optional: true, required: false
  private _responseHeadersPolicyId?: string; 
  public get responseHeadersPolicyId() {
    return this.getStringAttribute('response_headers_policy_id');
  }
  public set responseHeadersPolicyId(value: string) {
    this._responseHeadersPolicyId = value;
  }
  public resetResponseHeadersPolicyId() {
    this._responseHeadersPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersPolicyIdInput() {
    return this._responseHeadersPolicyId;
  }

  // smooth_streaming - computed: false, optional: true, required: false
  private _smoothStreaming?: boolean | cdktn.IResolvable; 
  public get smoothStreaming() {
    return this.getBooleanAttribute('smooth_streaming');
  }
  public set smoothStreaming(value: boolean | cdktn.IResolvable) {
    this._smoothStreaming = value;
  }
  public resetSmoothStreaming() {
    this._smoothStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smoothStreamingInput() {
    return this._smoothStreaming;
  }

  // target_origin_id - computed: false, optional: false, required: true
  private _targetOriginId?: string; 
  public get targetOriginId() {
    return this.getStringAttribute('target_origin_id');
  }
  public set targetOriginId(value: string) {
    this._targetOriginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOriginIdInput() {
    return this._targetOriginId;
  }

  // trusted_key_groups - computed: false, optional: true, required: false
  private _trustedKeyGroups?: string[]; 
  public get trustedKeyGroups() {
    return this.getListAttribute('trusted_key_groups');
  }
  public set trustedKeyGroups(value: string[]) {
    this._trustedKeyGroups = value;
  }
  public resetTrustedKeyGroups() {
    this._trustedKeyGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedKeyGroupsInput() {
    return this._trustedKeyGroups;
  }

  // trusted_signers - computed: false, optional: true, required: false
  private _trustedSigners?: string[]; 
  public get trustedSigners() {
    return this.getListAttribute('trusted_signers');
  }
  public set trustedSigners(value: string[]) {
    this._trustedSigners = value;
  }
  public resetTrustedSigners() {
    this._trustedSigners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedSignersInput() {
    return this._trustedSigners;
  }

  // viewer_protocol_policy - computed: false, optional: false, required: true
  private _viewerProtocolPolicy?: string; 
  public get viewerProtocolPolicy() {
    return this.getStringAttribute('viewer_protocol_policy');
  }
  public set viewerProtocolPolicy(value: string) {
    this._viewerProtocolPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viewerProtocolPolicyInput() {
    return this._viewerProtocolPolicy;
  }

  // forwarded_values - computed: false, optional: true, required: false
  private _forwardedValues = new CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference(this, "forwarded_values");
  public get forwardedValues() {
    return this._forwardedValues;
  }
  public putForwardedValues(value: CloudfrontDistributionOrderedCacheBehaviorForwardedValues) {
    this._forwardedValues.internalValue = value;
  }
  public resetForwardedValues() {
    this._forwardedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedValuesInput() {
    return this._forwardedValues.internalValue;
  }

  // function_association - computed: false, optional: true, required: false
  private _functionAssociation = new CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList(this, "function_association", true);
  public get functionAssociation() {
    return this._functionAssociation;
  }
  public putFunctionAssociation(value: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation[] | cdktn.IResolvable) {
    this._functionAssociation.internalValue = value;
  }
  public resetFunctionAssociation() {
    this._functionAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAssociationInput() {
    return this._functionAssociation.internalValue;
  }

  // grpc_config - computed: false, optional: true, required: false
  private _grpcConfig = new CloudfrontDistributionOrderedCacheBehaviorGrpcConfigOutputReference(this, "grpc_config");
  public get grpcConfig() {
    return this._grpcConfig;
  }
  public putGrpcConfig(value: CloudfrontDistributionOrderedCacheBehaviorGrpcConfig) {
    this._grpcConfig.internalValue = value;
  }
  public resetGrpcConfig() {
    this._grpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcConfigInput() {
    return this._grpcConfig.internalValue;
  }

  // lambda_function_association - computed: false, optional: true, required: false
  private _lambdaFunctionAssociation = new CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList(this, "lambda_function_association", true);
  public get lambdaFunctionAssociation() {
    return this._lambdaFunctionAssociation;
  }
  public putLambdaFunctionAssociation(value: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation[] | cdktn.IResolvable) {
    this._lambdaFunctionAssociation.internalValue = value;
  }
  public resetLambdaFunctionAssociation() {
    this._lambdaFunctionAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionAssociationInput() {
    return this._lambdaFunctionAssociation.internalValue;
  }
}

export class CloudfrontDistributionOrderedCacheBehaviorList extends cdktn.ComplexList {
  public internalValue? : CloudfrontDistributionOrderedCacheBehavior[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudfrontDistributionOrderedCacheBehaviorOutputReference {
    return new CloudfrontDistributionOrderedCacheBehaviorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionOriginCustomHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#name CloudfrontDistribution#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#value CloudfrontDistribution#value}
  */
  readonly value: string;
}

export function cloudfrontDistributionOriginCustomHeaderToTerraform(struct?: CloudfrontDistributionOriginCustomHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cloudfrontDistributionOriginCustomHeaderToHclTerraform(struct?: CloudfrontDistributionOriginCustomHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionOriginCustomHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionOriginCustomHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionOriginCustomHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CloudfrontDistributionOriginCustomHeaderList extends cdktn.ComplexList {
  public internalValue? : CloudfrontDistributionOriginCustomHeader[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudfrontDistributionOriginCustomHeaderOutputReference {
    return new CloudfrontDistributionOriginCustomHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionOriginCustomOriginConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#http_port CloudfrontDistribution#http_port}
  */
  readonly httpPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#https_port CloudfrontDistribution#https_port}
  */
  readonly httpsPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#ip_address_type CloudfrontDistribution#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}
  */
  readonly originKeepaliveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin_protocol_policy CloudfrontDistribution#origin_protocol_policy}
  */
  readonly originProtocolPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin_read_timeout CloudfrontDistribution#origin_read_timeout}
  */
  readonly originReadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin_ssl_protocols CloudfrontDistribution#origin_ssl_protocols}
  */
  readonly originSslProtocols: string[];
}

export function cloudfrontDistributionOriginCustomOriginConfigToTerraform(struct?: CloudfrontDistributionOriginCustomOriginConfigOutputReference | CloudfrontDistributionOriginCustomOriginConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_port: cdktn.numberToTerraform(struct!.httpPort),
    https_port: cdktn.numberToTerraform(struct!.httpsPort),
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    origin_keepalive_timeout: cdktn.numberToTerraform(struct!.originKeepaliveTimeout),
    origin_protocol_policy: cdktn.stringToTerraform(struct!.originProtocolPolicy),
    origin_read_timeout: cdktn.numberToTerraform(struct!.originReadTimeout),
    origin_ssl_protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.originSslProtocols),
  }
}


export function cloudfrontDistributionOriginCustomOriginConfigToHclTerraform(struct?: CloudfrontDistributionOriginCustomOriginConfigOutputReference | CloudfrontDistributionOriginCustomOriginConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_port: {
      value: cdktn.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_port: {
      value: cdktn.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_keepalive_timeout: {
      value: cdktn.numberToHclTerraform(struct!.originKeepaliveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_protocol_policy: {
      value: cdktn.stringToHclTerraform(struct!.originProtocolPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_read_timeout: {
      value: cdktn.numberToHclTerraform(struct!.originReadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_ssl_protocols: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.originSslProtocols),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionOriginCustomOriginConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionOriginCustomOriginConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._originKeepaliveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.originKeepaliveTimeout = this._originKeepaliveTimeout;
    }
    if (this._originProtocolPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.originProtocolPolicy = this._originProtocolPolicy;
    }
    if (this._originReadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.originReadTimeout = this._originReadTimeout;
    }
    if (this._originSslProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.originSslProtocols = this._originSslProtocols;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionOriginCustomOriginConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpPort = undefined;
      this._httpsPort = undefined;
      this._ipAddressType = undefined;
      this._originKeepaliveTimeout = undefined;
      this._originProtocolPolicy = undefined;
      this._originReadTimeout = undefined;
      this._originSslProtocols = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpPort = value.httpPort;
      this._httpsPort = value.httpsPort;
      this._ipAddressType = value.ipAddressType;
      this._originKeepaliveTimeout = value.originKeepaliveTimeout;
      this._originProtocolPolicy = value.originProtocolPolicy;
      this._originReadTimeout = value.originReadTimeout;
      this._originSslProtocols = value.originSslProtocols;
    }
  }

  // http_port - computed: false, optional: false, required: true
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: false, optional: false, required: true
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // origin_keepalive_timeout - computed: false, optional: true, required: false
  private _originKeepaliveTimeout?: number; 
  public get originKeepaliveTimeout() {
    return this.getNumberAttribute('origin_keepalive_timeout');
  }
  public set originKeepaliveTimeout(value: number) {
    this._originKeepaliveTimeout = value;
  }
  public resetOriginKeepaliveTimeout() {
    this._originKeepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originKeepaliveTimeoutInput() {
    return this._originKeepaliveTimeout;
  }

  // origin_protocol_policy - computed: false, optional: false, required: true
  private _originProtocolPolicy?: string; 
  public get originProtocolPolicy() {
    return this.getStringAttribute('origin_protocol_policy');
  }
  public set originProtocolPolicy(value: string) {
    this._originProtocolPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originProtocolPolicyInput() {
    return this._originProtocolPolicy;
  }

  // origin_read_timeout - computed: false, optional: true, required: false
  private _originReadTimeout?: number; 
  public get originReadTimeout() {
    return this.getNumberAttribute('origin_read_timeout');
  }
  public set originReadTimeout(value: number) {
    this._originReadTimeout = value;
  }
  public resetOriginReadTimeout() {
    this._originReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originReadTimeoutInput() {
    return this._originReadTimeout;
  }

  // origin_ssl_protocols - computed: false, optional: false, required: true
  private _originSslProtocols?: string[]; 
  public get originSslProtocols() {
    return cdktn.Fn.tolist(this.getListAttribute('origin_ssl_protocols'));
  }
  public set originSslProtocols(value: string[]) {
    this._originSslProtocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originSslProtocolsInput() {
    return this._originSslProtocols;
  }
}
export interface CloudfrontDistributionOriginOriginShield {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#enabled CloudfrontDistribution#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin_shield_region CloudfrontDistribution#origin_shield_region}
  */
  readonly originShieldRegion?: string;
}

export function cloudfrontDistributionOriginOriginShieldToTerraform(struct?: CloudfrontDistributionOriginOriginShieldOutputReference | CloudfrontDistributionOriginOriginShield): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    origin_shield_region: cdktn.stringToTerraform(struct!.originShieldRegion),
  }
}


export function cloudfrontDistributionOriginOriginShieldToHclTerraform(struct?: CloudfrontDistributionOriginOriginShieldOutputReference | CloudfrontDistributionOriginOriginShield): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    origin_shield_region: {
      value: cdktn.stringToHclTerraform(struct!.originShieldRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionOriginOriginShieldOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionOriginOriginShield | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._originShieldRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.originShieldRegion = this._originShieldRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionOriginOriginShield | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._originShieldRegion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._originShieldRegion = value.originShieldRegion;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // origin_shield_region - computed: false, optional: true, required: false
  private _originShieldRegion?: string; 
  public get originShieldRegion() {
    return this.getStringAttribute('origin_shield_region');
  }
  public set originShieldRegion(value: string) {
    this._originShieldRegion = value;
  }
  public resetOriginShieldRegion() {
    this._originShieldRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originShieldRegionInput() {
    return this._originShieldRegion;
  }
}
export interface CloudfrontDistributionOriginS3OriginConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin_access_identity CloudfrontDistribution#origin_access_identity}
  */
  readonly originAccessIdentity: string;
}

export function cloudfrontDistributionOriginS3OriginConfigToTerraform(struct?: CloudfrontDistributionOriginS3OriginConfigOutputReference | CloudfrontDistributionOriginS3OriginConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin_access_identity: cdktn.stringToTerraform(struct!.originAccessIdentity),
  }
}


export function cloudfrontDistributionOriginS3OriginConfigToHclTerraform(struct?: CloudfrontDistributionOriginS3OriginConfigOutputReference | CloudfrontDistributionOriginS3OriginConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin_access_identity: {
      value: cdktn.stringToHclTerraform(struct!.originAccessIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionOriginS3OriginConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionOriginS3OriginConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originAccessIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.originAccessIdentity = this._originAccessIdentity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionOriginS3OriginConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._originAccessIdentity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._originAccessIdentity = value.originAccessIdentity;
    }
  }

  // origin_access_identity - computed: false, optional: false, required: true
  private _originAccessIdentity?: string; 
  public get originAccessIdentity() {
    return this.getStringAttribute('origin_access_identity');
  }
  public set originAccessIdentity(value: string) {
    this._originAccessIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originAccessIdentityInput() {
    return this._originAccessIdentity;
  }
}
export interface CloudfrontDistributionOriginVpcOriginConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}
  */
  readonly originKeepaliveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin_read_timeout CloudfrontDistribution#origin_read_timeout}
  */
  readonly originReadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#owner_account_id CloudfrontDistribution#owner_account_id}
  */
  readonly ownerAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#vpc_origin_id CloudfrontDistribution#vpc_origin_id}
  */
  readonly vpcOriginId: string;
}

export function cloudfrontDistributionOriginVpcOriginConfigToTerraform(struct?: CloudfrontDistributionOriginVpcOriginConfigOutputReference | CloudfrontDistributionOriginVpcOriginConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin_keepalive_timeout: cdktn.numberToTerraform(struct!.originKeepaliveTimeout),
    origin_read_timeout: cdktn.numberToTerraform(struct!.originReadTimeout),
    owner_account_id: cdktn.stringToTerraform(struct!.ownerAccountId),
    vpc_origin_id: cdktn.stringToTerraform(struct!.vpcOriginId),
  }
}


export function cloudfrontDistributionOriginVpcOriginConfigToHclTerraform(struct?: CloudfrontDistributionOriginVpcOriginConfigOutputReference | CloudfrontDistributionOriginVpcOriginConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin_keepalive_timeout: {
      value: cdktn.numberToHclTerraform(struct!.originKeepaliveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_read_timeout: {
      value: cdktn.numberToHclTerraform(struct!.originReadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    owner_account_id: {
      value: cdktn.stringToHclTerraform(struct!.ownerAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_origin_id: {
      value: cdktn.stringToHclTerraform(struct!.vpcOriginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionOriginVpcOriginConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionOriginVpcOriginConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originKeepaliveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.originKeepaliveTimeout = this._originKeepaliveTimeout;
    }
    if (this._originReadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.originReadTimeout = this._originReadTimeout;
    }
    if (this._ownerAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerAccountId = this._ownerAccountId;
    }
    if (this._vpcOriginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcOriginId = this._vpcOriginId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionOriginVpcOriginConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._originKeepaliveTimeout = undefined;
      this._originReadTimeout = undefined;
      this._ownerAccountId = undefined;
      this._vpcOriginId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._originKeepaliveTimeout = value.originKeepaliveTimeout;
      this._originReadTimeout = value.originReadTimeout;
      this._ownerAccountId = value.ownerAccountId;
      this._vpcOriginId = value.vpcOriginId;
    }
  }

  // origin_keepalive_timeout - computed: false, optional: true, required: false
  private _originKeepaliveTimeout?: number; 
  public get originKeepaliveTimeout() {
    return this.getNumberAttribute('origin_keepalive_timeout');
  }
  public set originKeepaliveTimeout(value: number) {
    this._originKeepaliveTimeout = value;
  }
  public resetOriginKeepaliveTimeout() {
    this._originKeepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originKeepaliveTimeoutInput() {
    return this._originKeepaliveTimeout;
  }

  // origin_read_timeout - computed: false, optional: true, required: false
  private _originReadTimeout?: number; 
  public get originReadTimeout() {
    return this.getNumberAttribute('origin_read_timeout');
  }
  public set originReadTimeout(value: number) {
    this._originReadTimeout = value;
  }
  public resetOriginReadTimeout() {
    this._originReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originReadTimeoutInput() {
    return this._originReadTimeout;
  }

  // owner_account_id - computed: false, optional: true, required: false
  private _ownerAccountId?: string; 
  public get ownerAccountId() {
    return this.getStringAttribute('owner_account_id');
  }
  public set ownerAccountId(value: string) {
    this._ownerAccountId = value;
  }
  public resetOwnerAccountId() {
    this._ownerAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerAccountIdInput() {
    return this._ownerAccountId;
  }

  // vpc_origin_id - computed: false, optional: false, required: true
  private _vpcOriginId?: string; 
  public get vpcOriginId() {
    return this.getStringAttribute('vpc_origin_id');
  }
  public set vpcOriginId(value: string) {
    this._vpcOriginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOriginIdInput() {
    return this._vpcOriginId;
  }
}
export interface CloudfrontDistributionOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#connection_attempts CloudfrontDistribution#connection_attempts}
  */
  readonly connectionAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#connection_timeout CloudfrontDistribution#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#domain_name CloudfrontDistribution#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin_access_control_id CloudfrontDistribution#origin_access_control_id}
  */
  readonly originAccessControlId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}
  */
  readonly originId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin_path CloudfrontDistribution#origin_path}
  */
  readonly originPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#response_completion_timeout CloudfrontDistribution#response_completion_timeout}
  */
  readonly responseCompletionTimeout?: number;
  /**
  * custom_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#custom_header CloudfrontDistribution#custom_header}
  */
  readonly customHeader?: CloudfrontDistributionOriginCustomHeader[] | cdktn.IResolvable;
  /**
  * custom_origin_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#custom_origin_config CloudfrontDistribution#custom_origin_config}
  */
  readonly customOriginConfig?: CloudfrontDistributionOriginCustomOriginConfig;
  /**
  * origin_shield block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin_shield CloudfrontDistribution#origin_shield}
  */
  readonly originShield?: CloudfrontDistributionOriginOriginShield;
  /**
  * s3_origin_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#s3_origin_config CloudfrontDistribution#s3_origin_config}
  */
  readonly s3OriginConfig?: CloudfrontDistributionOriginS3OriginConfig;
  /**
  * vpc_origin_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#vpc_origin_config CloudfrontDistribution#vpc_origin_config}
  */
  readonly vpcOriginConfig?: CloudfrontDistributionOriginVpcOriginConfig;
}

export function cloudfrontDistributionOriginToTerraform(struct?: CloudfrontDistributionOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_attempts: cdktn.numberToTerraform(struct!.connectionAttempts),
    connection_timeout: cdktn.numberToTerraform(struct!.connectionTimeout),
    domain_name: cdktn.stringToTerraform(struct!.domainName),
    origin_access_control_id: cdktn.stringToTerraform(struct!.originAccessControlId),
    origin_id: cdktn.stringToTerraform(struct!.originId),
    origin_path: cdktn.stringToTerraform(struct!.originPath),
    response_completion_timeout: cdktn.numberToTerraform(struct!.responseCompletionTimeout),
    custom_header: cdktn.listMapper(cloudfrontDistributionOriginCustomHeaderToTerraform, true)(struct!.customHeader),
    custom_origin_config: cloudfrontDistributionOriginCustomOriginConfigToTerraform(struct!.customOriginConfig),
    origin_shield: cloudfrontDistributionOriginOriginShieldToTerraform(struct!.originShield),
    s3_origin_config: cloudfrontDistributionOriginS3OriginConfigToTerraform(struct!.s3OriginConfig),
    vpc_origin_config: cloudfrontDistributionOriginVpcOriginConfigToTerraform(struct!.vpcOriginConfig),
  }
}


export function cloudfrontDistributionOriginToHclTerraform(struct?: CloudfrontDistributionOrigin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_attempts: {
      value: cdktn.numberToHclTerraform(struct!.connectionAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_timeout: {
      value: cdktn.numberToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_name: {
      value: cdktn.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_access_control_id: {
      value: cdktn.stringToHclTerraform(struct!.originAccessControlId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_id: {
      value: cdktn.stringToHclTerraform(struct!.originId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_path: {
      value: cdktn.stringToHclTerraform(struct!.originPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_completion_timeout: {
      value: cdktn.numberToHclTerraform(struct!.responseCompletionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_header: {
      value: cdktn.listMapperHcl(cloudfrontDistributionOriginCustomHeaderToHclTerraform, true)(struct!.customHeader),
      isBlock: true,
      type: "set",
      storageClassType: "CloudfrontDistributionOriginCustomHeaderList",
    },
    custom_origin_config: {
      value: cloudfrontDistributionOriginCustomOriginConfigToHclTerraform(struct!.customOriginConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontDistributionOriginCustomOriginConfigList",
    },
    origin_shield: {
      value: cloudfrontDistributionOriginOriginShieldToHclTerraform(struct!.originShield),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontDistributionOriginOriginShieldList",
    },
    s3_origin_config: {
      value: cloudfrontDistributionOriginS3OriginConfigToHclTerraform(struct!.s3OriginConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontDistributionOriginS3OriginConfigList",
    },
    vpc_origin_config: {
      value: cloudfrontDistributionOriginVpcOriginConfigToHclTerraform(struct!.vpcOriginConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontDistributionOriginVpcOriginConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionOriginOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionOrigin | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionAttempts = this._connectionAttempts;
    }
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._originAccessControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originAccessControlId = this._originAccessControlId;
    }
    if (this._originId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originId = this._originId;
    }
    if (this._originPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.originPath = this._originPath;
    }
    if (this._responseCompletionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCompletionTimeout = this._responseCompletionTimeout;
    }
    if (this._customHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeader = this._customHeader?.internalValue;
    }
    if (this._customOriginConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOriginConfig = this._customOriginConfig?.internalValue;
    }
    if (this._originShield?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originShield = this._originShield?.internalValue;
    }
    if (this._s3OriginConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OriginConfig = this._s3OriginConfig?.internalValue;
    }
    if (this._vpcOriginConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcOriginConfig = this._vpcOriginConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionOrigin | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionAttempts = undefined;
      this._connectionTimeout = undefined;
      this._domainName = undefined;
      this._originAccessControlId = undefined;
      this._originId = undefined;
      this._originPath = undefined;
      this._responseCompletionTimeout = undefined;
      this._customHeader.internalValue = undefined;
      this._customOriginConfig.internalValue = undefined;
      this._originShield.internalValue = undefined;
      this._s3OriginConfig.internalValue = undefined;
      this._vpcOriginConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionAttempts = value.connectionAttempts;
      this._connectionTimeout = value.connectionTimeout;
      this._domainName = value.domainName;
      this._originAccessControlId = value.originAccessControlId;
      this._originId = value.originId;
      this._originPath = value.originPath;
      this._responseCompletionTimeout = value.responseCompletionTimeout;
      this._customHeader.internalValue = value.customHeader;
      this._customOriginConfig.internalValue = value.customOriginConfig;
      this._originShield.internalValue = value.originShield;
      this._s3OriginConfig.internalValue = value.s3OriginConfig;
      this._vpcOriginConfig.internalValue = value.vpcOriginConfig;
    }
  }

  // connection_attempts - computed: false, optional: true, required: false
  private _connectionAttempts?: number; 
  public get connectionAttempts() {
    return this.getNumberAttribute('connection_attempts');
  }
  public set connectionAttempts(value: number) {
    this._connectionAttempts = value;
  }
  public resetConnectionAttempts() {
    this._connectionAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionAttemptsInput() {
    return this._connectionAttempts;
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

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

  // origin_access_control_id - computed: false, optional: true, required: false
  private _originAccessControlId?: string; 
  public get originAccessControlId() {
    return this.getStringAttribute('origin_access_control_id');
  }
  public set originAccessControlId(value: string) {
    this._originAccessControlId = value;
  }
  public resetOriginAccessControlId() {
    this._originAccessControlId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originAccessControlIdInput() {
    return this._originAccessControlId;
  }

  // origin_id - computed: false, optional: false, required: true
  private _originId?: string; 
  public get originId() {
    return this.getStringAttribute('origin_id');
  }
  public set originId(value: string) {
    this._originId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originIdInput() {
    return this._originId;
  }

  // origin_path - computed: false, optional: true, required: false
  private _originPath?: string; 
  public get originPath() {
    return this.getStringAttribute('origin_path');
  }
  public set originPath(value: string) {
    this._originPath = value;
  }
  public resetOriginPath() {
    this._originPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPathInput() {
    return this._originPath;
  }

  // response_completion_timeout - computed: true, optional: true, required: false
  private _responseCompletionTimeout?: number; 
  public get responseCompletionTimeout() {
    return this.getNumberAttribute('response_completion_timeout');
  }
  public set responseCompletionTimeout(value: number) {
    this._responseCompletionTimeout = value;
  }
  public resetResponseCompletionTimeout() {
    this._responseCompletionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCompletionTimeoutInput() {
    return this._responseCompletionTimeout;
  }

  // custom_header - computed: false, optional: true, required: false
  private _customHeader = new CloudfrontDistributionOriginCustomHeaderList(this, "custom_header", true);
  public get customHeader() {
    return this._customHeader;
  }
  public putCustomHeader(value: CloudfrontDistributionOriginCustomHeader[] | cdktn.IResolvable) {
    this._customHeader.internalValue = value;
  }
  public resetCustomHeader() {
    this._customHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderInput() {
    return this._customHeader.internalValue;
  }

  // custom_origin_config - computed: false, optional: true, required: false
  private _customOriginConfig = new CloudfrontDistributionOriginCustomOriginConfigOutputReference(this, "custom_origin_config");
  public get customOriginConfig() {
    return this._customOriginConfig;
  }
  public putCustomOriginConfig(value: CloudfrontDistributionOriginCustomOriginConfig) {
    this._customOriginConfig.internalValue = value;
  }
  public resetCustomOriginConfig() {
    this._customOriginConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOriginConfigInput() {
    return this._customOriginConfig.internalValue;
  }

  // origin_shield - computed: false, optional: true, required: false
  private _originShield = new CloudfrontDistributionOriginOriginShieldOutputReference(this, "origin_shield");
  public get originShield() {
    return this._originShield;
  }
  public putOriginShield(value: CloudfrontDistributionOriginOriginShield) {
    this._originShield.internalValue = value;
  }
  public resetOriginShield() {
    this._originShield.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originShieldInput() {
    return this._originShield.internalValue;
  }

  // s3_origin_config - computed: false, optional: true, required: false
  private _s3OriginConfig = new CloudfrontDistributionOriginS3OriginConfigOutputReference(this, "s3_origin_config");
  public get s3OriginConfig() {
    return this._s3OriginConfig;
  }
  public putS3OriginConfig(value: CloudfrontDistributionOriginS3OriginConfig) {
    this._s3OriginConfig.internalValue = value;
  }
  public resetS3OriginConfig() {
    this._s3OriginConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OriginConfigInput() {
    return this._s3OriginConfig.internalValue;
  }

  // vpc_origin_config - computed: false, optional: true, required: false
  private _vpcOriginConfig = new CloudfrontDistributionOriginVpcOriginConfigOutputReference(this, "vpc_origin_config");
  public get vpcOriginConfig() {
    return this._vpcOriginConfig;
  }
  public putVpcOriginConfig(value: CloudfrontDistributionOriginVpcOriginConfig) {
    this._vpcOriginConfig.internalValue = value;
  }
  public resetVpcOriginConfig() {
    this._vpcOriginConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOriginConfigInput() {
    return this._vpcOriginConfig.internalValue;
  }
}

export class CloudfrontDistributionOriginList extends cdktn.ComplexList {
  public internalValue? : CloudfrontDistributionOrigin[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudfrontDistributionOriginOutputReference {
    return new CloudfrontDistributionOriginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionOriginGroupFailoverCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#status_codes CloudfrontDistribution#status_codes}
  */
  readonly statusCodes: number[];
}

export function cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform(struct?: CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference | CloudfrontDistributionOriginGroupFailoverCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_codes: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.statusCodes),
  }
}


export function cloudfrontDistributionOriginGroupFailoverCriteriaToHclTerraform(struct?: CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference | CloudfrontDistributionOriginGroupFailoverCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_codes: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.statusCodes),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionOriginGroupFailoverCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodes = this._statusCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionOriginGroupFailoverCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statusCodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statusCodes = value.statusCodes;
    }
  }

  // status_codes - computed: false, optional: false, required: true
  private _statusCodes?: number[]; 
  public get statusCodes() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('status_codes')));
  }
  public set statusCodes(value: number[]) {
    this._statusCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodesInput() {
    return this._statusCodes;
  }
}
export interface CloudfrontDistributionOriginGroupMember {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}
  */
  readonly originId: string;
}

export function cloudfrontDistributionOriginGroupMemberToTerraform(struct?: CloudfrontDistributionOriginGroupMember | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin_id: cdktn.stringToTerraform(struct!.originId),
  }
}


export function cloudfrontDistributionOriginGroupMemberToHclTerraform(struct?: CloudfrontDistributionOriginGroupMember | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin_id: {
      value: cdktn.stringToHclTerraform(struct!.originId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionOriginGroupMemberOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionOriginGroupMember | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originId = this._originId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionOriginGroupMember | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._originId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._originId = value.originId;
    }
  }

  // origin_id - computed: false, optional: false, required: true
  private _originId?: string; 
  public get originId() {
    return this.getStringAttribute('origin_id');
  }
  public set originId(value: string) {
    this._originId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originIdInput() {
    return this._originId;
  }
}

export class CloudfrontDistributionOriginGroupMemberList extends cdktn.ComplexList {
  public internalValue? : CloudfrontDistributionOriginGroupMember[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudfrontDistributionOriginGroupMemberOutputReference {
    return new CloudfrontDistributionOriginGroupMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionOriginGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}
  */
  readonly originId: string;
  /**
  * failover_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#failover_criteria CloudfrontDistribution#failover_criteria}
  */
  readonly failoverCriteria: CloudfrontDistributionOriginGroupFailoverCriteria;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#member CloudfrontDistribution#member}
  */
  readonly member: CloudfrontDistributionOriginGroupMember[] | cdktn.IResolvable;
}

export function cloudfrontDistributionOriginGroupToTerraform(struct?: CloudfrontDistributionOriginGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin_id: cdktn.stringToTerraform(struct!.originId),
    failover_criteria: cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform(struct!.failoverCriteria),
    member: cdktn.listMapper(cloudfrontDistributionOriginGroupMemberToTerraform, true)(struct!.member),
  }
}


export function cloudfrontDistributionOriginGroupToHclTerraform(struct?: CloudfrontDistributionOriginGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin_id: {
      value: cdktn.stringToHclTerraform(struct!.originId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover_criteria: {
      value: cloudfrontDistributionOriginGroupFailoverCriteriaToHclTerraform(struct!.failoverCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontDistributionOriginGroupFailoverCriteriaList",
    },
    member: {
      value: cdktn.listMapperHcl(cloudfrontDistributionOriginGroupMemberToHclTerraform, true)(struct!.member),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontDistributionOriginGroupMemberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionOriginGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionOriginGroup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originId = this._originId;
    }
    if (this._failoverCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverCriteria = this._failoverCriteria?.internalValue;
    }
    if (this._member?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionOriginGroup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._originId = undefined;
      this._failoverCriteria.internalValue = undefined;
      this._member.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._originId = value.originId;
      this._failoverCriteria.internalValue = value.failoverCriteria;
      this._member.internalValue = value.member;
    }
  }

  // origin_id - computed: false, optional: false, required: true
  private _originId?: string; 
  public get originId() {
    return this.getStringAttribute('origin_id');
  }
  public set originId(value: string) {
    this._originId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originIdInput() {
    return this._originId;
  }

  // failover_criteria - computed: false, optional: false, required: true
  private _failoverCriteria = new CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference(this, "failover_criteria");
  public get failoverCriteria() {
    return this._failoverCriteria;
  }
  public putFailoverCriteria(value: CloudfrontDistributionOriginGroupFailoverCriteria) {
    this._failoverCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverCriteriaInput() {
    return this._failoverCriteria.internalValue;
  }

  // member - computed: false, optional: false, required: true
  private _member = new CloudfrontDistributionOriginGroupMemberList(this, "member", false);
  public get member() {
    return this._member;
  }
  public putMember(value: CloudfrontDistributionOriginGroupMember[] | cdktn.IResolvable) {
    this._member.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }
}

export class CloudfrontDistributionOriginGroupList extends cdktn.ComplexList {
  public internalValue? : CloudfrontDistributionOriginGroup[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudfrontDistributionOriginGroupOutputReference {
    return new CloudfrontDistributionOriginGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionRestrictionsGeoRestriction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#locations CloudfrontDistribution#locations}
  */
  readonly locations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#restriction_type CloudfrontDistribution#restriction_type}
  */
  readonly restrictionType: string;
}

export function cloudfrontDistributionRestrictionsGeoRestrictionToTerraform(struct?: CloudfrontDistributionRestrictionsGeoRestrictionOutputReference | CloudfrontDistributionRestrictionsGeoRestriction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.locations),
    restriction_type: cdktn.stringToTerraform(struct!.restrictionType),
  }
}


export function cloudfrontDistributionRestrictionsGeoRestrictionToHclTerraform(struct?: CloudfrontDistributionRestrictionsGeoRestrictionOutputReference | CloudfrontDistributionRestrictionsGeoRestriction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    restriction_type: {
      value: cdktn.stringToHclTerraform(struct!.restrictionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionRestrictionsGeoRestrictionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionRestrictionsGeoRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    if (this._restrictionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionType = this._restrictionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionRestrictionsGeoRestriction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locations = undefined;
      this._restrictionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locations = value.locations;
      this._restrictionType = value.restrictionType;
    }
  }

  // locations - computed: true, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return cdktn.Fn.tolist(this.getListAttribute('locations'));
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }

  // restriction_type - computed: false, optional: false, required: true
  private _restrictionType?: string; 
  public get restrictionType() {
    return this.getStringAttribute('restriction_type');
  }
  public set restrictionType(value: string) {
    this._restrictionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionTypeInput() {
    return this._restrictionType;
  }
}
export interface CloudfrontDistributionRestrictions {
  /**
  * geo_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#geo_restriction CloudfrontDistribution#geo_restriction}
  */
  readonly geoRestriction: CloudfrontDistributionRestrictionsGeoRestriction;
}

export function cloudfrontDistributionRestrictionsToTerraform(struct?: CloudfrontDistributionRestrictionsOutputReference | CloudfrontDistributionRestrictions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_restriction: cloudfrontDistributionRestrictionsGeoRestrictionToTerraform(struct!.geoRestriction),
  }
}


export function cloudfrontDistributionRestrictionsToHclTerraform(struct?: CloudfrontDistributionRestrictionsOutputReference | CloudfrontDistributionRestrictions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_restriction: {
      value: cloudfrontDistributionRestrictionsGeoRestrictionToHclTerraform(struct!.geoRestriction),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontDistributionRestrictionsGeoRestrictionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionRestrictionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoRestriction = this._geoRestriction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geoRestriction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geoRestriction.internalValue = value.geoRestriction;
    }
  }

  // geo_restriction - computed: false, optional: false, required: true
  private _geoRestriction = new CloudfrontDistributionRestrictionsGeoRestrictionOutputReference(this, "geo_restriction");
  public get geoRestriction() {
    return this._geoRestriction;
  }
  public putGeoRestriction(value: CloudfrontDistributionRestrictionsGeoRestriction) {
    this._geoRestriction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRestrictionInput() {
    return this._geoRestriction.internalValue;
  }
}
export interface CloudfrontDistributionViewerCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#acm_certificate_arn CloudfrontDistribution#acm_certificate_arn}
  */
  readonly acmCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#cloudfront_default_certificate CloudfrontDistribution#cloudfront_default_certificate}
  */
  readonly cloudfrontDefaultCertificate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#iam_certificate_id CloudfrontDistribution#iam_certificate_id}
  */
  readonly iamCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#minimum_protocol_version CloudfrontDistribution#minimum_protocol_version}
  */
  readonly minimumProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#ssl_support_method CloudfrontDistribution#ssl_support_method}
  */
  readonly sslSupportMethod?: string;
}

export function cloudfrontDistributionViewerCertificateToTerraform(struct?: CloudfrontDistributionViewerCertificateOutputReference | CloudfrontDistributionViewerCertificate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm_certificate_arn: cdktn.stringToTerraform(struct!.acmCertificateArn),
    cloudfront_default_certificate: cdktn.booleanToTerraform(struct!.cloudfrontDefaultCertificate),
    iam_certificate_id: cdktn.stringToTerraform(struct!.iamCertificateId),
    minimum_protocol_version: cdktn.stringToTerraform(struct!.minimumProtocolVersion),
    ssl_support_method: cdktn.stringToTerraform(struct!.sslSupportMethod),
  }
}


export function cloudfrontDistributionViewerCertificateToHclTerraform(struct?: CloudfrontDistributionViewerCertificateOutputReference | CloudfrontDistributionViewerCertificate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acm_certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.acmCertificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudfront_default_certificate: {
      value: cdktn.booleanToHclTerraform(struct!.cloudfrontDefaultCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iam_certificate_id: {
      value: cdktn.stringToHclTerraform(struct!.iamCertificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_protocol_version: {
      value: cdktn.stringToHclTerraform(struct!.minimumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_support_method: {
      value: cdktn.stringToHclTerraform(struct!.sslSupportMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionViewerCertificateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionViewerCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acmCertificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.acmCertificateArn = this._acmCertificateArn;
    }
    if (this._cloudfrontDefaultCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudfrontDefaultCertificate = this._cloudfrontDefaultCertificate;
    }
    if (this._iamCertificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamCertificateId = this._iamCertificateId;
    }
    if (this._minimumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumProtocolVersion = this._minimumProtocolVersion;
    }
    if (this._sslSupportMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSupportMethod = this._sslSupportMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionViewerCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acmCertificateArn = undefined;
      this._cloudfrontDefaultCertificate = undefined;
      this._iamCertificateId = undefined;
      this._minimumProtocolVersion = undefined;
      this._sslSupportMethod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acmCertificateArn = value.acmCertificateArn;
      this._cloudfrontDefaultCertificate = value.cloudfrontDefaultCertificate;
      this._iamCertificateId = value.iamCertificateId;
      this._minimumProtocolVersion = value.minimumProtocolVersion;
      this._sslSupportMethod = value.sslSupportMethod;
    }
  }

  // acm_certificate_arn - computed: false, optional: true, required: false
  private _acmCertificateArn?: string; 
  public get acmCertificateArn() {
    return this.getStringAttribute('acm_certificate_arn');
  }
  public set acmCertificateArn(value: string) {
    this._acmCertificateArn = value;
  }
  public resetAcmCertificateArn() {
    this._acmCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmCertificateArnInput() {
    return this._acmCertificateArn;
  }

  // cloudfront_default_certificate - computed: false, optional: true, required: false
  private _cloudfrontDefaultCertificate?: boolean | cdktn.IResolvable; 
  public get cloudfrontDefaultCertificate() {
    return this.getBooleanAttribute('cloudfront_default_certificate');
  }
  public set cloudfrontDefaultCertificate(value: boolean | cdktn.IResolvable) {
    this._cloudfrontDefaultCertificate = value;
  }
  public resetCloudfrontDefaultCertificate() {
    this._cloudfrontDefaultCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudfrontDefaultCertificateInput() {
    return this._cloudfrontDefaultCertificate;
  }

  // iam_certificate_id - computed: false, optional: true, required: false
  private _iamCertificateId?: string; 
  public get iamCertificateId() {
    return this.getStringAttribute('iam_certificate_id');
  }
  public set iamCertificateId(value: string) {
    this._iamCertificateId = value;
  }
  public resetIamCertificateId() {
    this._iamCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamCertificateIdInput() {
    return this._iamCertificateId;
  }

  // minimum_protocol_version - computed: false, optional: true, required: false
  private _minimumProtocolVersion?: string; 
  public get minimumProtocolVersion() {
    return this.getStringAttribute('minimum_protocol_version');
  }
  public set minimumProtocolVersion(value: string) {
    this._minimumProtocolVersion = value;
  }
  public resetMinimumProtocolVersion() {
    this._minimumProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumProtocolVersionInput() {
    return this._minimumProtocolVersion;
  }

  // ssl_support_method - computed: false, optional: true, required: false
  private _sslSupportMethod?: string; 
  public get sslSupportMethod() {
    return this.getStringAttribute('ssl_support_method');
  }
  public set sslSupportMethod(value: string) {
    this._sslSupportMethod = value;
  }
  public resetSslSupportMethod() {
    this._sslSupportMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSupportMethodInput() {
    return this._sslSupportMethod;
  }
}
export interface CloudfrontDistributionViewerMtlsConfigTrustStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#advertise_trust_store_ca_names CloudfrontDistribution#advertise_trust_store_ca_names}
  */
  readonly advertiseTrustStoreCaNames?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#ignore_certificate_expiry CloudfrontDistribution#ignore_certificate_expiry}
  */
  readonly ignoreCertificateExpiry?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#trust_store_id CloudfrontDistribution#trust_store_id}
  */
  readonly trustStoreId: string;
}

export function cloudfrontDistributionViewerMtlsConfigTrustStoreConfigToTerraform(struct?: CloudfrontDistributionViewerMtlsConfigTrustStoreConfigOutputReference | CloudfrontDistributionViewerMtlsConfigTrustStoreConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_trust_store_ca_names: cdktn.booleanToTerraform(struct!.advertiseTrustStoreCaNames),
    ignore_certificate_expiry: cdktn.booleanToTerraform(struct!.ignoreCertificateExpiry),
    trust_store_id: cdktn.stringToTerraform(struct!.trustStoreId),
  }
}


export function cloudfrontDistributionViewerMtlsConfigTrustStoreConfigToHclTerraform(struct?: CloudfrontDistributionViewerMtlsConfigTrustStoreConfigOutputReference | CloudfrontDistributionViewerMtlsConfigTrustStoreConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_trust_store_ca_names: {
      value: cdktn.booleanToHclTerraform(struct!.advertiseTrustStoreCaNames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_certificate_expiry: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreCertificateExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trust_store_id: {
      value: cdktn.stringToHclTerraform(struct!.trustStoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionViewerMtlsConfigTrustStoreConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionViewerMtlsConfigTrustStoreConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseTrustStoreCaNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseTrustStoreCaNames = this._advertiseTrustStoreCaNames;
    }
    if (this._ignoreCertificateExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCertificateExpiry = this._ignoreCertificateExpiry;
    }
    if (this._trustStoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStoreId = this._trustStoreId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionViewerMtlsConfigTrustStoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseTrustStoreCaNames = undefined;
      this._ignoreCertificateExpiry = undefined;
      this._trustStoreId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseTrustStoreCaNames = value.advertiseTrustStoreCaNames;
      this._ignoreCertificateExpiry = value.ignoreCertificateExpiry;
      this._trustStoreId = value.trustStoreId;
    }
  }

  // advertise_trust_store_ca_names - computed: false, optional: true, required: false
  private _advertiseTrustStoreCaNames?: boolean | cdktn.IResolvable; 
  public get advertiseTrustStoreCaNames() {
    return this.getBooleanAttribute('advertise_trust_store_ca_names');
  }
  public set advertiseTrustStoreCaNames(value: boolean | cdktn.IResolvable) {
    this._advertiseTrustStoreCaNames = value;
  }
  public resetAdvertiseTrustStoreCaNames() {
    this._advertiseTrustStoreCaNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseTrustStoreCaNamesInput() {
    return this._advertiseTrustStoreCaNames;
  }

  // ignore_certificate_expiry - computed: false, optional: true, required: false
  private _ignoreCertificateExpiry?: boolean | cdktn.IResolvable; 
  public get ignoreCertificateExpiry() {
    return this.getBooleanAttribute('ignore_certificate_expiry');
  }
  public set ignoreCertificateExpiry(value: boolean | cdktn.IResolvable) {
    this._ignoreCertificateExpiry = value;
  }
  public resetIgnoreCertificateExpiry() {
    this._ignoreCertificateExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertificateExpiryInput() {
    return this._ignoreCertificateExpiry;
  }

  // trust_store_id - computed: false, optional: false, required: true
  private _trustStoreId?: string; 
  public get trustStoreId() {
    return this.getStringAttribute('trust_store_id');
  }
  public set trustStoreId(value: string) {
    this._trustStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreIdInput() {
    return this._trustStoreId;
  }
}
export interface CloudfrontDistributionViewerMtlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#mode CloudfrontDistribution#mode}
  */
  readonly mode?: string;
  /**
  * trust_store_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#trust_store_config CloudfrontDistribution#trust_store_config}
  */
  readonly trustStoreConfig?: CloudfrontDistributionViewerMtlsConfigTrustStoreConfig;
}

export function cloudfrontDistributionViewerMtlsConfigToTerraform(struct?: CloudfrontDistributionViewerMtlsConfigOutputReference | CloudfrontDistributionViewerMtlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
    trust_store_config: cloudfrontDistributionViewerMtlsConfigTrustStoreConfigToTerraform(struct!.trustStoreConfig),
  }
}


export function cloudfrontDistributionViewerMtlsConfigToHclTerraform(struct?: CloudfrontDistributionViewerMtlsConfigOutputReference | CloudfrontDistributionViewerMtlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_config: {
      value: cloudfrontDistributionViewerMtlsConfigTrustStoreConfigToHclTerraform(struct!.trustStoreConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontDistributionViewerMtlsConfigTrustStoreConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionViewerMtlsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontDistributionViewerMtlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._trustStoreConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStoreConfig = this._trustStoreConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionViewerMtlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._trustStoreConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._trustStoreConfig.internalValue = value.trustStoreConfig;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // trust_store_config - computed: false, optional: true, required: false
  private _trustStoreConfig = new CloudfrontDistributionViewerMtlsConfigTrustStoreConfigOutputReference(this, "trust_store_config");
  public get trustStoreConfig() {
    return this._trustStoreConfig;
  }
  public putTrustStoreConfig(value: CloudfrontDistributionViewerMtlsConfigTrustStoreConfig) {
    this._trustStoreConfig.internalValue = value;
  }
  public resetTrustStoreConfig() {
    this._trustStoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreConfigInput() {
    return this._trustStoreConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution aws_cloudfront_distribution}
*/
export class CloudfrontDistribution extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_distribution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudfrontDistribution resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfrontDistribution to import
  * @param importFromId The id of the existing CloudfrontDistribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfrontDistribution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_distribution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.33.0/docs/resources/cloudfront_distribution aws_cloudfront_distribution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontDistributionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontDistributionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_distribution',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.33.0',
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
    this._aliases = config.aliases;
    this._anycastIpListId = config.anycastIpListId;
    this._comment = config.comment;
    this._continuousDeploymentPolicyId = config.continuousDeploymentPolicyId;
    this._defaultRootObject = config.defaultRootObject;
    this._enabled = config.enabled;
    this._httpVersion = config.httpVersion;
    this._id = config.id;
    this._isIpv6Enabled = config.isIpv6Enabled;
    this._priceClass = config.priceClass;
    this._retainOnDelete = config.retainOnDelete;
    this._staging = config.staging;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._waitForDeployment = config.waitForDeployment;
    this._webAclId = config.webAclId;
    this._connectionFunctionAssociation.internalValue = config.connectionFunctionAssociation;
    this._customErrorResponse.internalValue = config.customErrorResponse;
    this._defaultCacheBehavior.internalValue = config.defaultCacheBehavior;
    this._loggingConfig.internalValue = config.loggingConfig;
    this._orderedCacheBehavior.internalValue = config.orderedCacheBehavior;
    this._origin.internalValue = config.origin;
    this._originGroup.internalValue = config.originGroup;
    this._restrictions.internalValue = config.restrictions;
    this._viewerCertificate.internalValue = config.viewerCertificate;
    this._viewerMtlsConfig.internalValue = config.viewerMtlsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return cdktn.Fn.tolist(this.getListAttribute('aliases'));
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // anycast_ip_list_id - computed: false, optional: true, required: false
  private _anycastIpListId?: string; 
  public get anycastIpListId() {
    return this.getStringAttribute('anycast_ip_list_id');
  }
  public set anycastIpListId(value: string) {
    this._anycastIpListId = value;
  }
  public resetAnycastIpListId() {
    this._anycastIpListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastIpListIdInput() {
    return this._anycastIpListId;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // caller_reference - computed: true, optional: false, required: false
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // continuous_deployment_policy_id - computed: true, optional: true, required: false
  private _continuousDeploymentPolicyId?: string; 
  public get continuousDeploymentPolicyId() {
    return this.getStringAttribute('continuous_deployment_policy_id');
  }
  public set continuousDeploymentPolicyId(value: string) {
    this._continuousDeploymentPolicyId = value;
  }
  public resetContinuousDeploymentPolicyId() {
    this._continuousDeploymentPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousDeploymentPolicyIdInput() {
    return this._continuousDeploymentPolicyId;
  }

  // default_root_object - computed: false, optional: true, required: false
  private _defaultRootObject?: string; 
  public get defaultRootObject() {
    return this.getStringAttribute('default_root_object');
  }
  public set defaultRootObject(value: string) {
    this._defaultRootObject = value;
  }
  public resetDefaultRootObject() {
    this._defaultRootObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRootObjectInput() {
    return this._defaultRootObject;
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: string; 
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }
  public set httpVersion(value: string) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
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

  // in_progress_validation_batches - computed: true, optional: false, required: false
  public get inProgressValidationBatches() {
    return this.getNumberAttribute('in_progress_validation_batches');
  }

  // is_ipv6_enabled - computed: false, optional: true, required: false
  private _isIpv6Enabled?: boolean | cdktn.IResolvable; 
  public get isIpv6Enabled() {
    return this.getBooleanAttribute('is_ipv6_enabled');
  }
  public set isIpv6Enabled(value: boolean | cdktn.IResolvable) {
    this._isIpv6Enabled = value;
  }
  public resetIsIpv6Enabled() {
    this._isIpv6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIpv6EnabledInput() {
    return this._isIpv6Enabled;
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // logging_v1_enabled - computed: true, optional: false, required: false
  public get loggingV1Enabled() {
    return this.getBooleanAttribute('logging_v1_enabled');
  }

  // price_class - computed: false, optional: true, required: false
  private _priceClass?: string; 
  public get priceClass() {
    return this.getStringAttribute('price_class');
  }
  public set priceClass(value: string) {
    this._priceClass = value;
  }
  public resetPriceClass() {
    this._priceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priceClassInput() {
    return this._priceClass;
  }

  // retain_on_delete - computed: false, optional: true, required: false
  private _retainOnDelete?: boolean | cdktn.IResolvable; 
  public get retainOnDelete() {
    return this.getBooleanAttribute('retain_on_delete');
  }
  public set retainOnDelete(value: boolean | cdktn.IResolvable) {
    this._retainOnDelete = value;
  }
  public resetRetainOnDelete() {
    this._retainOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainOnDeleteInput() {
    return this._retainOnDelete;
  }

  // staging - computed: false, optional: true, required: false
  private _staging?: boolean | cdktn.IResolvable; 
  public get staging() {
    return this.getBooleanAttribute('staging');
  }
  public set staging(value: boolean | cdktn.IResolvable) {
    this._staging = value;
  }
  public resetStaging() {
    this._staging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingInput() {
    return this._staging;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // trusted_key_groups - computed: true, optional: false, required: false
  private _trustedKeyGroups = new CloudfrontDistributionTrustedKeyGroupsList(this, "trusted_key_groups", false);
  public get trustedKeyGroups() {
    return this._trustedKeyGroups;
  }

  // trusted_signers - computed: true, optional: false, required: false
  private _trustedSigners = new CloudfrontDistributionTrustedSignersList(this, "trusted_signers", false);
  public get trustedSigners() {
    return this._trustedSigners;
  }

  // wait_for_deployment - computed: false, optional: true, required: false
  private _waitForDeployment?: boolean | cdktn.IResolvable; 
  public get waitForDeployment() {
    return this.getBooleanAttribute('wait_for_deployment');
  }
  public set waitForDeployment(value: boolean | cdktn.IResolvable) {
    this._waitForDeployment = value;
  }
  public resetWaitForDeployment() {
    this._waitForDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDeploymentInput() {
    return this._waitForDeployment;
  }

  // web_acl_id - computed: false, optional: true, required: false
  private _webAclId?: string; 
  public get webAclId() {
    return this.getStringAttribute('web_acl_id');
  }
  public set webAclId(value: string) {
    this._webAclId = value;
  }
  public resetWebAclId() {
    this._webAclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAclIdInput() {
    return this._webAclId;
  }

  // connection_function_association - computed: false, optional: true, required: false
  private _connectionFunctionAssociation = new CloudfrontDistributionConnectionFunctionAssociationOutputReference(this, "connection_function_association");
  public get connectionFunctionAssociation() {
    return this._connectionFunctionAssociation;
  }
  public putConnectionFunctionAssociation(value: CloudfrontDistributionConnectionFunctionAssociation) {
    this._connectionFunctionAssociation.internalValue = value;
  }
  public resetConnectionFunctionAssociation() {
    this._connectionFunctionAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionFunctionAssociationInput() {
    return this._connectionFunctionAssociation.internalValue;
  }

  // custom_error_response - computed: false, optional: true, required: false
  private _customErrorResponse = new CloudfrontDistributionCustomErrorResponseList(this, "custom_error_response", true);
  public get customErrorResponse() {
    return this._customErrorResponse;
  }
  public putCustomErrorResponse(value: CloudfrontDistributionCustomErrorResponse[] | cdktn.IResolvable) {
    this._customErrorResponse.internalValue = value;
  }
  public resetCustomErrorResponse() {
    this._customErrorResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorResponseInput() {
    return this._customErrorResponse.internalValue;
  }

  // default_cache_behavior - computed: false, optional: false, required: true
  private _defaultCacheBehavior = new CloudfrontDistributionDefaultCacheBehaviorOutputReference(this, "default_cache_behavior");
  public get defaultCacheBehavior() {
    return this._defaultCacheBehavior;
  }
  public putDefaultCacheBehavior(value: CloudfrontDistributionDefaultCacheBehavior) {
    this._defaultCacheBehavior.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCacheBehaviorInput() {
    return this._defaultCacheBehavior.internalValue;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new CloudfrontDistributionLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: CloudfrontDistributionLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // ordered_cache_behavior - computed: false, optional: true, required: false
  private _orderedCacheBehavior = new CloudfrontDistributionOrderedCacheBehaviorList(this, "ordered_cache_behavior", false);
  public get orderedCacheBehavior() {
    return this._orderedCacheBehavior;
  }
  public putOrderedCacheBehavior(value: CloudfrontDistributionOrderedCacheBehavior[] | cdktn.IResolvable) {
    this._orderedCacheBehavior.internalValue = value;
  }
  public resetOrderedCacheBehavior() {
    this._orderedCacheBehavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedCacheBehaviorInput() {
    return this._orderedCacheBehavior.internalValue;
  }

  // origin - computed: false, optional: false, required: true
  private _origin = new CloudfrontDistributionOriginList(this, "origin", true);
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: CloudfrontDistributionOrigin[] | cdktn.IResolvable) {
    this._origin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // origin_group - computed: false, optional: true, required: false
  private _originGroup = new CloudfrontDistributionOriginGroupList(this, "origin_group", true);
  public get originGroup() {
    return this._originGroup;
  }
  public putOriginGroup(value: CloudfrontDistributionOriginGroup[] | cdktn.IResolvable) {
    this._originGroup.internalValue = value;
  }
  public resetOriginGroup() {
    this._originGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originGroupInput() {
    return this._originGroup.internalValue;
  }

  // restrictions - computed: false, optional: false, required: true
  private _restrictions = new CloudfrontDistributionRestrictionsOutputReference(this, "restrictions");
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: CloudfrontDistributionRestrictions) {
    this._restrictions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }

  // viewer_certificate - computed: false, optional: false, required: true
  private _viewerCertificate = new CloudfrontDistributionViewerCertificateOutputReference(this, "viewer_certificate");
  public get viewerCertificate() {
    return this._viewerCertificate;
  }
  public putViewerCertificate(value: CloudfrontDistributionViewerCertificate) {
    this._viewerCertificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viewerCertificateInput() {
    return this._viewerCertificate.internalValue;
  }

  // viewer_mtls_config - computed: false, optional: true, required: false
  private _viewerMtlsConfig = new CloudfrontDistributionViewerMtlsConfigOutputReference(this, "viewer_mtls_config");
  public get viewerMtlsConfig() {
    return this._viewerMtlsConfig;
  }
  public putViewerMtlsConfig(value: CloudfrontDistributionViewerMtlsConfig) {
    this._viewerMtlsConfig.internalValue = value;
  }
  public resetViewerMtlsConfig() {
    this._viewerMtlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewerMtlsConfigInput() {
    return this._viewerMtlsConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aliases: cdktn.listMapper(cdktn.stringToTerraform, false)(this._aliases),
      anycast_ip_list_id: cdktn.stringToTerraform(this._anycastIpListId),
      comment: cdktn.stringToTerraform(this._comment),
      continuous_deployment_policy_id: cdktn.stringToTerraform(this._continuousDeploymentPolicyId),
      default_root_object: cdktn.stringToTerraform(this._defaultRootObject),
      enabled: cdktn.booleanToTerraform(this._enabled),
      http_version: cdktn.stringToTerraform(this._httpVersion),
      id: cdktn.stringToTerraform(this._id),
      is_ipv6_enabled: cdktn.booleanToTerraform(this._isIpv6Enabled),
      price_class: cdktn.stringToTerraform(this._priceClass),
      retain_on_delete: cdktn.booleanToTerraform(this._retainOnDelete),
      staging: cdktn.booleanToTerraform(this._staging),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      wait_for_deployment: cdktn.booleanToTerraform(this._waitForDeployment),
      web_acl_id: cdktn.stringToTerraform(this._webAclId),
      connection_function_association: cloudfrontDistributionConnectionFunctionAssociationToTerraform(this._connectionFunctionAssociation.internalValue),
      custom_error_response: cdktn.listMapper(cloudfrontDistributionCustomErrorResponseToTerraform, true)(this._customErrorResponse.internalValue),
      default_cache_behavior: cloudfrontDistributionDefaultCacheBehaviorToTerraform(this._defaultCacheBehavior.internalValue),
      logging_config: cloudfrontDistributionLoggingConfigToTerraform(this._loggingConfig.internalValue),
      ordered_cache_behavior: cdktn.listMapper(cloudfrontDistributionOrderedCacheBehaviorToTerraform, true)(this._orderedCacheBehavior.internalValue),
      origin: cdktn.listMapper(cloudfrontDistributionOriginToTerraform, true)(this._origin.internalValue),
      origin_group: cdktn.listMapper(cloudfrontDistributionOriginGroupToTerraform, true)(this._originGroup.internalValue),
      restrictions: cloudfrontDistributionRestrictionsToTerraform(this._restrictions.internalValue),
      viewer_certificate: cloudfrontDistributionViewerCertificateToTerraform(this._viewerCertificate.internalValue),
      viewer_mtls_config: cloudfrontDistributionViewerMtlsConfigToTerraform(this._viewerMtlsConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aliases: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._aliases),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      anycast_ip_list_id: {
        value: cdktn.stringToHclTerraform(this._anycastIpListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktn.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      continuous_deployment_policy_id: {
        value: cdktn.stringToHclTerraform(this._continuousDeploymentPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_root_object: {
        value: cdktn.stringToHclTerraform(this._defaultRootObject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_version: {
        value: cdktn.stringToHclTerraform(this._httpVersion),
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
      is_ipv6_enabled: {
        value: cdktn.booleanToHclTerraform(this._isIpv6Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      price_class: {
        value: cdktn.stringToHclTerraform(this._priceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_on_delete: {
        value: cdktn.booleanToHclTerraform(this._retainOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      staging: {
        value: cdktn.booleanToHclTerraform(this._staging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      wait_for_deployment: {
        value: cdktn.booleanToHclTerraform(this._waitForDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_acl_id: {
        value: cdktn.stringToHclTerraform(this._webAclId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_function_association: {
        value: cloudfrontDistributionConnectionFunctionAssociationToHclTerraform(this._connectionFunctionAssociation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontDistributionConnectionFunctionAssociationList",
      },
      custom_error_response: {
        value: cdktn.listMapperHcl(cloudfrontDistributionCustomErrorResponseToHclTerraform, true)(this._customErrorResponse.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudfrontDistributionCustomErrorResponseList",
      },
      default_cache_behavior: {
        value: cloudfrontDistributionDefaultCacheBehaviorToHclTerraform(this._defaultCacheBehavior.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontDistributionDefaultCacheBehaviorList",
      },
      logging_config: {
        value: cloudfrontDistributionLoggingConfigToHclTerraform(this._loggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontDistributionLoggingConfigList",
      },
      ordered_cache_behavior: {
        value: cdktn.listMapperHcl(cloudfrontDistributionOrderedCacheBehaviorToHclTerraform, true)(this._orderedCacheBehavior.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontDistributionOrderedCacheBehaviorList",
      },
      origin: {
        value: cdktn.listMapperHcl(cloudfrontDistributionOriginToHclTerraform, true)(this._origin.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudfrontDistributionOriginList",
      },
      origin_group: {
        value: cdktn.listMapperHcl(cloudfrontDistributionOriginGroupToHclTerraform, true)(this._originGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudfrontDistributionOriginGroupList",
      },
      restrictions: {
        value: cloudfrontDistributionRestrictionsToHclTerraform(this._restrictions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontDistributionRestrictionsList",
      },
      viewer_certificate: {
        value: cloudfrontDistributionViewerCertificateToHclTerraform(this._viewerCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontDistributionViewerCertificateList",
      },
      viewer_mtls_config: {
        value: cloudfrontDistributionViewerMtlsConfigToHclTerraform(this._viewerMtlsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontDistributionViewerMtlsConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
