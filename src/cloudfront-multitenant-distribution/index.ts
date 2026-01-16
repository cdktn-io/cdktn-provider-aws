/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontMultitenantDistributionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#comment CloudfrontMultitenantDistribution#comment}
  */
  readonly comment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#default_root_object CloudfrontMultitenantDistribution#default_root_object}
  */
  readonly defaultRootObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#enabled CloudfrontMultitenantDistribution#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#http_version CloudfrontMultitenantDistribution#http_version}
  */
  readonly httpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#tags CloudfrontMultitenantDistribution#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#web_acl_id CloudfrontMultitenantDistribution#web_acl_id}
  */
  readonly webAclId?: string;
  /**
  * active_trusted_key_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#active_trusted_key_groups CloudfrontMultitenantDistribution#active_trusted_key_groups}
  */
  readonly activeTrustedKeyGroups?: CloudfrontMultitenantDistributionActiveTrustedKeyGroups[] | cdktf.IResolvable;
  /**
  * cache_behavior block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#cache_behavior CloudfrontMultitenantDistribution#cache_behavior}
  */
  readonly cacheBehavior?: CloudfrontMultitenantDistributionCacheBehavior[] | cdktf.IResolvable;
  /**
  * custom_error_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#custom_error_response CloudfrontMultitenantDistribution#custom_error_response}
  */
  readonly customErrorResponse?: CloudfrontMultitenantDistributionCustomErrorResponse[] | cdktf.IResolvable;
  /**
  * default_cache_behavior block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#default_cache_behavior CloudfrontMultitenantDistribution#default_cache_behavior}
  */
  readonly defaultCacheBehavior?: CloudfrontMultitenantDistributionDefaultCacheBehavior[] | cdktf.IResolvable;
  /**
  * origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#origin CloudfrontMultitenantDistribution#origin}
  */
  readonly origin?: CloudfrontMultitenantDistributionOrigin[] | cdktf.IResolvable;
  /**
  * origin_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#origin_group CloudfrontMultitenantDistribution#origin_group}
  */
  readonly originGroup?: CloudfrontMultitenantDistributionOriginGroup[] | cdktf.IResolvable;
  /**
  * restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#restrictions CloudfrontMultitenantDistribution#restrictions}
  */
  readonly restrictions?: CloudfrontMultitenantDistributionRestrictions[] | cdktf.IResolvable;
  /**
  * tenant_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#tenant_config CloudfrontMultitenantDistribution#tenant_config}
  */
  readonly tenantConfig?: CloudfrontMultitenantDistributionTenantConfig[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#timeouts CloudfrontMultitenantDistribution#timeouts}
  */
  readonly timeouts?: CloudfrontMultitenantDistributionTimeouts;
  /**
  * viewer_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#viewer_certificate CloudfrontMultitenantDistribution#viewer_certificate}
  */
  readonly viewerCertificate?: CloudfrontMultitenantDistributionViewerCertificate[] | cdktf.IResolvable;
}
export interface CloudfrontMultitenantDistributionActiveTrustedKeyGroupsItems {
}

export function cloudfrontMultitenantDistributionActiveTrustedKeyGroupsItemsToTerraform(struct?: CloudfrontMultitenantDistributionActiveTrustedKeyGroupsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudfrontMultitenantDistributionActiveTrustedKeyGroupsItemsToHclTerraform(struct?: CloudfrontMultitenantDistributionActiveTrustedKeyGroupsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudfrontMultitenantDistributionActiveTrustedKeyGroupsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionActiveTrustedKeyGroupsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionActiveTrustedKeyGroupsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // key_group_id - computed: true, optional: false, required: false
  public get keyGroupId() {
    return this.getStringAttribute('key_group_id');
  }

  // key_pair_ids - computed: true, optional: false, required: false
  public get keyPairIds() {
    return this.getListAttribute('key_pair_ids');
  }
}

export class CloudfrontMultitenantDistributionActiveTrustedKeyGroupsItemsList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionActiveTrustedKeyGroupsItems[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionActiveTrustedKeyGroupsItemsOutputReference {
    return new CloudfrontMultitenantDistributionActiveTrustedKeyGroupsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionActiveTrustedKeyGroups {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#items CloudfrontMultitenantDistribution#items}
  */
  readonly items?: CloudfrontMultitenantDistributionActiveTrustedKeyGroupsItems[] | cdktf.IResolvable;
}

export function cloudfrontMultitenantDistributionActiveTrustedKeyGroupsToTerraform(struct?: CloudfrontMultitenantDistributionActiveTrustedKeyGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cloudfrontMultitenantDistributionActiveTrustedKeyGroupsItemsToTerraform, true)(struct!.items),
  }
}


export function cloudfrontMultitenantDistributionActiveTrustedKeyGroupsToHclTerraform(struct?: CloudfrontMultitenantDistributionActiveTrustedKeyGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionActiveTrustedKeyGroupsItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionActiveTrustedKeyGroupsItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionActiveTrustedKeyGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionActiveTrustedKeyGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionActiveTrustedKeyGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // items - computed: false, optional: true, required: false
  private _items = new CloudfrontMultitenantDistributionActiveTrustedKeyGroupsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: CloudfrontMultitenantDistributionActiveTrustedKeyGroupsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}

export class CloudfrontMultitenantDistributionActiveTrustedKeyGroupsList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionActiveTrustedKeyGroups[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionActiveTrustedKeyGroupsOutputReference {
    return new CloudfrontMultitenantDistributionActiveTrustedKeyGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionCacheBehaviorAllowedMethods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#cached_methods CloudfrontMultitenantDistribution#cached_methods}
  */
  readonly cachedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#items CloudfrontMultitenantDistribution#items}
  */
  readonly items: string[];
}

export function cloudfrontMultitenantDistributionCacheBehaviorAllowedMethodsToTerraform(struct?: CloudfrontMultitenantDistributionCacheBehaviorAllowedMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cached_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cachedMethods),
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function cloudfrontMultitenantDistributionCacheBehaviorAllowedMethodsToHclTerraform(struct?: CloudfrontMultitenantDistributionCacheBehaviorAllowedMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cached_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cachedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionCacheBehaviorAllowedMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionCacheBehaviorAllowedMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachedMethods = this._cachedMethods;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionCacheBehaviorAllowedMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachedMethods = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachedMethods = value.cachedMethods;
      this._items = value.items;
    }
  }

  // cached_methods - computed: false, optional: false, required: true
  private _cachedMethods?: string[]; 
  public get cachedMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('cached_methods'));
  }
  public set cachedMethods(value: string[]) {
    this._cachedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedMethodsInput() {
    return this._cachedMethods;
  }

  // items - computed: false, optional: false, required: true
  private _items?: string[]; 
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}

export class CloudfrontMultitenantDistributionCacheBehaviorAllowedMethodsList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionCacheBehaviorAllowedMethods[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionCacheBehaviorAllowedMethodsOutputReference {
    return new CloudfrontMultitenantDistributionCacheBehaviorAllowedMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionCacheBehaviorFunctionAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#event_type CloudfrontMultitenantDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#function_arn CloudfrontMultitenantDistribution#function_arn}
  */
  readonly functionArn: string;
}

export function cloudfrontMultitenantDistributionCacheBehaviorFunctionAssociationToTerraform(struct?: CloudfrontMultitenantDistributionCacheBehaviorFunctionAssociation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}


export function cloudfrontMultitenantDistributionCacheBehaviorFunctionAssociationToHclTerraform(struct?: CloudfrontMultitenantDistributionCacheBehaviorFunctionAssociation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_arn: {
      value: cdktf.stringToHclTerraform(struct!.functionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionCacheBehaviorFunctionAssociationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionCacheBehaviorFunctionAssociation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudfrontMultitenantDistributionCacheBehaviorFunctionAssociation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._functionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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

export class CloudfrontMultitenantDistributionCacheBehaviorFunctionAssociationList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionCacheBehaviorFunctionAssociation[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionCacheBehaviorFunctionAssociationOutputReference {
    return new CloudfrontMultitenantDistributionCacheBehaviorFunctionAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#event_type CloudfrontMultitenantDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#include_body CloudfrontMultitenantDistribution#include_body}
  */
  readonly includeBody?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#lambda_function_arn CloudfrontMultitenantDistribution#lambda_function_arn}
  */
  readonly lambdaFunctionArn: string;
}

export function cloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociationToTerraform(struct?: CloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    include_body: cdktf.booleanToTerraform(struct!.includeBody),
    lambda_function_arn: cdktf.stringToTerraform(struct!.lambdaFunctionArn),
  }
}


export function cloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociationToHclTerraform(struct?: CloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_body: {
      value: cdktf.booleanToHclTerraform(struct!.includeBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lambda_function_arn: {
      value: cdktf.stringToHclTerraform(struct!.lambdaFunctionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociation | cdktf.IResolvable | undefined {
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
    if (this._lambdaFunctionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionArn = this._lambdaFunctionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._includeBody = undefined;
      this._lambdaFunctionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._includeBody = value.includeBody;
      this._lambdaFunctionArn = value.lambdaFunctionArn;
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

  // include_body - computed: true, optional: true, required: false
  private _includeBody?: boolean | cdktf.IResolvable; 
  public get includeBody() {
    return this.getBooleanAttribute('include_body');
  }
  public set includeBody(value: boolean | cdktf.IResolvable) {
    this._includeBody = value;
  }
  public resetIncludeBody() {
    this._includeBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBodyInput() {
    return this._includeBody;
  }

  // lambda_function_arn - computed: false, optional: false, required: true
  private _lambdaFunctionArn?: string; 
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
  public set lambdaFunctionArn(value: string) {
    this._lambdaFunctionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionArnInput() {
    return this._lambdaFunctionArn;
  }
}

export class CloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociationList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociation[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociationOutputReference {
    return new CloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#enabled CloudfrontMultitenantDistribution#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#items CloudfrontMultitenantDistribution#items}
  */
  readonly items?: string[];
}

export function cloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroupsToTerraform(struct?: CloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function cloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroupsToHclTerraform(struct?: CloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._items = value.items;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}

export class CloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroupsList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroups[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroupsOutputReference {
    return new CloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionCacheBehavior {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#cache_policy_id CloudfrontMultitenantDistribution#cache_policy_id}
  */
  readonly cachePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#compress CloudfrontMultitenantDistribution#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#field_level_encryption_id CloudfrontMultitenantDistribution#field_level_encryption_id}
  */
  readonly fieldLevelEncryptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#origin_request_policy_id CloudfrontMultitenantDistribution#origin_request_policy_id}
  */
  readonly originRequestPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#path_pattern CloudfrontMultitenantDistribution#path_pattern}
  */
  readonly pathPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#realtime_log_config_arn CloudfrontMultitenantDistribution#realtime_log_config_arn}
  */
  readonly realtimeLogConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#response_headers_policy_id CloudfrontMultitenantDistribution#response_headers_policy_id}
  */
  readonly responseHeadersPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#target_origin_id CloudfrontMultitenantDistribution#target_origin_id}
  */
  readonly targetOriginId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#viewer_protocol_policy CloudfrontMultitenantDistribution#viewer_protocol_policy}
  */
  readonly viewerProtocolPolicy: string;
  /**
  * allowed_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#allowed_methods CloudfrontMultitenantDistribution#allowed_methods}
  */
  readonly allowedMethods?: CloudfrontMultitenantDistributionCacheBehaviorAllowedMethods[] | cdktf.IResolvable;
  /**
  * function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#function_association CloudfrontMultitenantDistribution#function_association}
  */
  readonly functionAssociation?: CloudfrontMultitenantDistributionCacheBehaviorFunctionAssociation[] | cdktf.IResolvable;
  /**
  * lambda_function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#lambda_function_association CloudfrontMultitenantDistribution#lambda_function_association}
  */
  readonly lambdaFunctionAssociation?: CloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociation[] | cdktf.IResolvable;
  /**
  * trusted_key_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#trusted_key_groups CloudfrontMultitenantDistribution#trusted_key_groups}
  */
  readonly trustedKeyGroups?: CloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroups[] | cdktf.IResolvable;
}

export function cloudfrontMultitenantDistributionCacheBehaviorToTerraform(struct?: CloudfrontMultitenantDistributionCacheBehavior | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_policy_id: cdktf.stringToTerraform(struct!.cachePolicyId),
    compress: cdktf.booleanToTerraform(struct!.compress),
    field_level_encryption_id: cdktf.stringToTerraform(struct!.fieldLevelEncryptionId),
    origin_request_policy_id: cdktf.stringToTerraform(struct!.originRequestPolicyId),
    path_pattern: cdktf.stringToTerraform(struct!.pathPattern),
    realtime_log_config_arn: cdktf.stringToTerraform(struct!.realtimeLogConfigArn),
    response_headers_policy_id: cdktf.stringToTerraform(struct!.responseHeadersPolicyId),
    target_origin_id: cdktf.stringToTerraform(struct!.targetOriginId),
    viewer_protocol_policy: cdktf.stringToTerraform(struct!.viewerProtocolPolicy),
    allowed_methods: cdktf.listMapper(cloudfrontMultitenantDistributionCacheBehaviorAllowedMethodsToTerraform, true)(struct!.allowedMethods),
    function_association: cdktf.listMapper(cloudfrontMultitenantDistributionCacheBehaviorFunctionAssociationToTerraform, true)(struct!.functionAssociation),
    lambda_function_association: cdktf.listMapper(cloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociationToTerraform, true)(struct!.lambdaFunctionAssociation),
    trusted_key_groups: cdktf.listMapper(cloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroupsToTerraform, true)(struct!.trustedKeyGroups),
  }
}


export function cloudfrontMultitenantDistributionCacheBehaviorToHclTerraform(struct?: CloudfrontMultitenantDistributionCacheBehavior | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.cachePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress: {
      value: cdktf.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field_level_encryption_id: {
      value: cdktf.stringToHclTerraform(struct!.fieldLevelEncryptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_request_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.originRequestPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_pattern: {
      value: cdktf.stringToHclTerraform(struct!.pathPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realtime_log_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.realtimeLogConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_headers_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.responseHeadersPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_origin_id: {
      value: cdktf.stringToHclTerraform(struct!.targetOriginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    viewer_protocol_policy: {
      value: cdktf.stringToHclTerraform(struct!.viewerProtocolPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_methods: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionCacheBehaviorAllowedMethodsToHclTerraform, true)(struct!.allowedMethods),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionCacheBehaviorAllowedMethodsList",
    },
    function_association: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionCacheBehaviorFunctionAssociationToHclTerraform, true)(struct!.functionAssociation),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionCacheBehaviorFunctionAssociationList",
    },
    lambda_function_association: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociationToHclTerraform, true)(struct!.lambdaFunctionAssociation),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociationList",
    },
    trusted_key_groups: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroupsToHclTerraform, true)(struct!.trustedKeyGroups),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionCacheBehaviorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionCacheBehavior | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePolicyId = this._cachePolicyId;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._fieldLevelEncryptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldLevelEncryptionId = this._fieldLevelEncryptionId;
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
    if (this._targetOriginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetOriginId = this._targetOriginId;
    }
    if (this._viewerProtocolPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewerProtocolPolicy = this._viewerProtocolPolicy;
    }
    if (this._allowedMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods?.internalValue;
    }
    if (this._functionAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionAssociation = this._functionAssociation?.internalValue;
    }
    if (this._lambdaFunctionAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionAssociation = this._lambdaFunctionAssociation?.internalValue;
    }
    if (this._trustedKeyGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedKeyGroups = this._trustedKeyGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionCacheBehavior | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachePolicyId = undefined;
      this._compress = undefined;
      this._fieldLevelEncryptionId = undefined;
      this._originRequestPolicyId = undefined;
      this._pathPattern = undefined;
      this._realtimeLogConfigArn = undefined;
      this._responseHeadersPolicyId = undefined;
      this._targetOriginId = undefined;
      this._viewerProtocolPolicy = undefined;
      this._allowedMethods.internalValue = undefined;
      this._functionAssociation.internalValue = undefined;
      this._lambdaFunctionAssociation.internalValue = undefined;
      this._trustedKeyGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachePolicyId = value.cachePolicyId;
      this._compress = value.compress;
      this._fieldLevelEncryptionId = value.fieldLevelEncryptionId;
      this._originRequestPolicyId = value.originRequestPolicyId;
      this._pathPattern = value.pathPattern;
      this._realtimeLogConfigArn = value.realtimeLogConfigArn;
      this._responseHeadersPolicyId = value.responseHeadersPolicyId;
      this._targetOriginId = value.targetOriginId;
      this._viewerProtocolPolicy = value.viewerProtocolPolicy;
      this._allowedMethods.internalValue = value.allowedMethods;
      this._functionAssociation.internalValue = value.functionAssociation;
      this._lambdaFunctionAssociation.internalValue = value.lambdaFunctionAssociation;
      this._trustedKeyGroups.internalValue = value.trustedKeyGroups;
    }
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

  // compress - computed: true, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // field_level_encryption_id - computed: true, optional: true, required: false
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

  // allowed_methods - computed: false, optional: true, required: false
  private _allowedMethods = new CloudfrontMultitenantDistributionCacheBehaviorAllowedMethodsList(this, "allowed_methods", false);
  public get allowedMethods() {
    return this._allowedMethods;
  }
  public putAllowedMethods(value: CloudfrontMultitenantDistributionCacheBehaviorAllowedMethods[] | cdktf.IResolvable) {
    this._allowedMethods.internalValue = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods.internalValue;
  }

  // function_association - computed: false, optional: true, required: false
  private _functionAssociation = new CloudfrontMultitenantDistributionCacheBehaviorFunctionAssociationList(this, "function_association", false);
  public get functionAssociation() {
    return this._functionAssociation;
  }
  public putFunctionAssociation(value: CloudfrontMultitenantDistributionCacheBehaviorFunctionAssociation[] | cdktf.IResolvable) {
    this._functionAssociation.internalValue = value;
  }
  public resetFunctionAssociation() {
    this._functionAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAssociationInput() {
    return this._functionAssociation.internalValue;
  }

  // lambda_function_association - computed: false, optional: true, required: false
  private _lambdaFunctionAssociation = new CloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociationList(this, "lambda_function_association", false);
  public get lambdaFunctionAssociation() {
    return this._lambdaFunctionAssociation;
  }
  public putLambdaFunctionAssociation(value: CloudfrontMultitenantDistributionCacheBehaviorLambdaFunctionAssociation[] | cdktf.IResolvable) {
    this._lambdaFunctionAssociation.internalValue = value;
  }
  public resetLambdaFunctionAssociation() {
    this._lambdaFunctionAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionAssociationInput() {
    return this._lambdaFunctionAssociation.internalValue;
  }

  // trusted_key_groups - computed: false, optional: true, required: false
  private _trustedKeyGroups = new CloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroupsList(this, "trusted_key_groups", false);
  public get trustedKeyGroups() {
    return this._trustedKeyGroups;
  }
  public putTrustedKeyGroups(value: CloudfrontMultitenantDistributionCacheBehaviorTrustedKeyGroups[] | cdktf.IResolvable) {
    this._trustedKeyGroups.internalValue = value;
  }
  public resetTrustedKeyGroups() {
    this._trustedKeyGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedKeyGroupsInput() {
    return this._trustedKeyGroups.internalValue;
  }
}

export class CloudfrontMultitenantDistributionCacheBehaviorList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionCacheBehavior[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionCacheBehaviorOutputReference {
    return new CloudfrontMultitenantDistributionCacheBehaviorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionCustomErrorResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#error_caching_min_ttl CloudfrontMultitenantDistribution#error_caching_min_ttl}
  */
  readonly errorCachingMinTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#error_code CloudfrontMultitenantDistribution#error_code}
  */
  readonly errorCode: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#response_code CloudfrontMultitenantDistribution#response_code}
  */
  readonly responseCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#response_page_path CloudfrontMultitenantDistribution#response_page_path}
  */
  readonly responsePagePath?: string;
}

export function cloudfrontMultitenantDistributionCustomErrorResponseToTerraform(struct?: CloudfrontMultitenantDistributionCustomErrorResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_caching_min_ttl: cdktf.numberToTerraform(struct!.errorCachingMinTtl),
    error_code: cdktf.numberToTerraform(struct!.errorCode),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
    response_page_path: cdktf.stringToTerraform(struct!.responsePagePath),
  }
}


export function cloudfrontMultitenantDistributionCustomErrorResponseToHclTerraform(struct?: CloudfrontMultitenantDistributionCustomErrorResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_caching_min_ttl: {
      value: cdktf.numberToHclTerraform(struct!.errorCachingMinTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_code: {
      value: cdktf.numberToHclTerraform(struct!.errorCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_page_path: {
      value: cdktf.stringToHclTerraform(struct!.responsePagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionCustomErrorResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionCustomErrorResponse | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudfrontMultitenantDistributionCustomErrorResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorCachingMinTtl = undefined;
      this._errorCode = undefined;
      this._responseCode = undefined;
      this._responsePagePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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

  // error_caching_min_ttl - computed: true, optional: true, required: false
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
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
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

export class CloudfrontMultitenantDistributionCustomErrorResponseList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionCustomErrorResponse[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionCustomErrorResponseOutputReference {
    return new CloudfrontMultitenantDistributionCustomErrorResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#cached_methods CloudfrontMultitenantDistribution#cached_methods}
  */
  readonly cachedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#items CloudfrontMultitenantDistribution#items}
  */
  readonly items: string[];
}

export function cloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethodsToTerraform(struct?: CloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cached_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cachedMethods),
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function cloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethodsToHclTerraform(struct?: CloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cached_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cachedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachedMethods = this._cachedMethods;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachedMethods = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachedMethods = value.cachedMethods;
      this._items = value.items;
    }
  }

  // cached_methods - computed: false, optional: false, required: true
  private _cachedMethods?: string[]; 
  public get cachedMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('cached_methods'));
  }
  public set cachedMethods(value: string[]) {
    this._cachedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedMethodsInput() {
    return this._cachedMethods;
  }

  // items - computed: false, optional: false, required: true
  private _items?: string[]; 
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}

export class CloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethodsList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethods[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethodsOutputReference {
    return new CloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#event_type CloudfrontMultitenantDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#function_arn CloudfrontMultitenantDistribution#function_arn}
  */
  readonly functionArn: string;
}

export function cloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociationToTerraform(struct?: CloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}


export function cloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociationToHclTerraform(struct?: CloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_arn: {
      value: cdktf.stringToHclTerraform(struct!.functionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._functionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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

export class CloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociationList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociation[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociationOutputReference {
    return new CloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#event_type CloudfrontMultitenantDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#include_body CloudfrontMultitenantDistribution#include_body}
  */
  readonly includeBody?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#lambda_function_arn CloudfrontMultitenantDistribution#lambda_function_arn}
  */
  readonly lambdaFunctionArn: string;
}

export function cloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform(struct?: CloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    include_body: cdktf.booleanToTerraform(struct!.includeBody),
    lambda_function_arn: cdktf.stringToTerraform(struct!.lambdaFunctionArn),
  }
}


export function cloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociationToHclTerraform(struct?: CloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_body: {
      value: cdktf.booleanToHclTerraform(struct!.includeBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lambda_function_arn: {
      value: cdktf.stringToHclTerraform(struct!.lambdaFunctionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociation | cdktf.IResolvable | undefined {
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
    if (this._lambdaFunctionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionArn = this._lambdaFunctionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._includeBody = undefined;
      this._lambdaFunctionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._includeBody = value.includeBody;
      this._lambdaFunctionArn = value.lambdaFunctionArn;
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

  // include_body - computed: true, optional: true, required: false
  private _includeBody?: boolean | cdktf.IResolvable; 
  public get includeBody() {
    return this.getBooleanAttribute('include_body');
  }
  public set includeBody(value: boolean | cdktf.IResolvable) {
    this._includeBody = value;
  }
  public resetIncludeBody() {
    this._includeBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBodyInput() {
    return this._includeBody;
  }

  // lambda_function_arn - computed: false, optional: false, required: true
  private _lambdaFunctionArn?: string; 
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
  public set lambdaFunctionArn(value: string) {
    this._lambdaFunctionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionArnInput() {
    return this._lambdaFunctionArn;
  }
}

export class CloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociationList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociation[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference {
    return new CloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#enabled CloudfrontMultitenantDistribution#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#items CloudfrontMultitenantDistribution#items}
  */
  readonly items?: string[];
}

export function cloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroupsToTerraform(struct?: CloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function cloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroupsToHclTerraform(struct?: CloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._items = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._items = value.items;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}

export class CloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroupsList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroups[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroupsOutputReference {
    return new CloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionDefaultCacheBehavior {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#cache_policy_id CloudfrontMultitenantDistribution#cache_policy_id}
  */
  readonly cachePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#compress CloudfrontMultitenantDistribution#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#field_level_encryption_id CloudfrontMultitenantDistribution#field_level_encryption_id}
  */
  readonly fieldLevelEncryptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#origin_request_policy_id CloudfrontMultitenantDistribution#origin_request_policy_id}
  */
  readonly originRequestPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#realtime_log_config_arn CloudfrontMultitenantDistribution#realtime_log_config_arn}
  */
  readonly realtimeLogConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#response_headers_policy_id CloudfrontMultitenantDistribution#response_headers_policy_id}
  */
  readonly responseHeadersPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#target_origin_id CloudfrontMultitenantDistribution#target_origin_id}
  */
  readonly targetOriginId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#viewer_protocol_policy CloudfrontMultitenantDistribution#viewer_protocol_policy}
  */
  readonly viewerProtocolPolicy: string;
  /**
  * allowed_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#allowed_methods CloudfrontMultitenantDistribution#allowed_methods}
  */
  readonly allowedMethods?: CloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethods[] | cdktf.IResolvable;
  /**
  * function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#function_association CloudfrontMultitenantDistribution#function_association}
  */
  readonly functionAssociation?: CloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociation[] | cdktf.IResolvable;
  /**
  * lambda_function_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#lambda_function_association CloudfrontMultitenantDistribution#lambda_function_association}
  */
  readonly lambdaFunctionAssociation?: CloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociation[] | cdktf.IResolvable;
  /**
  * trusted_key_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#trusted_key_groups CloudfrontMultitenantDistribution#trusted_key_groups}
  */
  readonly trustedKeyGroups?: CloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroups[] | cdktf.IResolvable;
}

export function cloudfrontMultitenantDistributionDefaultCacheBehaviorToTerraform(struct?: CloudfrontMultitenantDistributionDefaultCacheBehavior | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_policy_id: cdktf.stringToTerraform(struct!.cachePolicyId),
    compress: cdktf.booleanToTerraform(struct!.compress),
    field_level_encryption_id: cdktf.stringToTerraform(struct!.fieldLevelEncryptionId),
    origin_request_policy_id: cdktf.stringToTerraform(struct!.originRequestPolicyId),
    realtime_log_config_arn: cdktf.stringToTerraform(struct!.realtimeLogConfigArn),
    response_headers_policy_id: cdktf.stringToTerraform(struct!.responseHeadersPolicyId),
    target_origin_id: cdktf.stringToTerraform(struct!.targetOriginId),
    viewer_protocol_policy: cdktf.stringToTerraform(struct!.viewerProtocolPolicy),
    allowed_methods: cdktf.listMapper(cloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethodsToTerraform, true)(struct!.allowedMethods),
    function_association: cdktf.listMapper(cloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociationToTerraform, true)(struct!.functionAssociation),
    lambda_function_association: cdktf.listMapper(cloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform, true)(struct!.lambdaFunctionAssociation),
    trusted_key_groups: cdktf.listMapper(cloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroupsToTerraform, true)(struct!.trustedKeyGroups),
  }
}


export function cloudfrontMultitenantDistributionDefaultCacheBehaviorToHclTerraform(struct?: CloudfrontMultitenantDistributionDefaultCacheBehavior | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.cachePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress: {
      value: cdktf.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field_level_encryption_id: {
      value: cdktf.stringToHclTerraform(struct!.fieldLevelEncryptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_request_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.originRequestPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realtime_log_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.realtimeLogConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_headers_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.responseHeadersPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_origin_id: {
      value: cdktf.stringToHclTerraform(struct!.targetOriginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    viewer_protocol_policy: {
      value: cdktf.stringToHclTerraform(struct!.viewerProtocolPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_methods: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethodsToHclTerraform, true)(struct!.allowedMethods),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethodsList",
    },
    function_association: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociationToHclTerraform, true)(struct!.functionAssociation),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociationList",
    },
    lambda_function_association: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociationToHclTerraform, true)(struct!.lambdaFunctionAssociation),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociationList",
    },
    trusted_key_groups: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroupsToHclTerraform, true)(struct!.trustedKeyGroups),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionDefaultCacheBehaviorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionDefaultCacheBehavior | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePolicyId = this._cachePolicyId;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._fieldLevelEncryptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldLevelEncryptionId = this._fieldLevelEncryptionId;
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
    if (this._targetOriginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetOriginId = this._targetOriginId;
    }
    if (this._viewerProtocolPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewerProtocolPolicy = this._viewerProtocolPolicy;
    }
    if (this._allowedMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods?.internalValue;
    }
    if (this._functionAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionAssociation = this._functionAssociation?.internalValue;
    }
    if (this._lambdaFunctionAssociation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionAssociation = this._lambdaFunctionAssociation?.internalValue;
    }
    if (this._trustedKeyGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedKeyGroups = this._trustedKeyGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionDefaultCacheBehavior | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachePolicyId = undefined;
      this._compress = undefined;
      this._fieldLevelEncryptionId = undefined;
      this._originRequestPolicyId = undefined;
      this._realtimeLogConfigArn = undefined;
      this._responseHeadersPolicyId = undefined;
      this._targetOriginId = undefined;
      this._viewerProtocolPolicy = undefined;
      this._allowedMethods.internalValue = undefined;
      this._functionAssociation.internalValue = undefined;
      this._lambdaFunctionAssociation.internalValue = undefined;
      this._trustedKeyGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachePolicyId = value.cachePolicyId;
      this._compress = value.compress;
      this._fieldLevelEncryptionId = value.fieldLevelEncryptionId;
      this._originRequestPolicyId = value.originRequestPolicyId;
      this._realtimeLogConfigArn = value.realtimeLogConfigArn;
      this._responseHeadersPolicyId = value.responseHeadersPolicyId;
      this._targetOriginId = value.targetOriginId;
      this._viewerProtocolPolicy = value.viewerProtocolPolicy;
      this._allowedMethods.internalValue = value.allowedMethods;
      this._functionAssociation.internalValue = value.functionAssociation;
      this._lambdaFunctionAssociation.internalValue = value.lambdaFunctionAssociation;
      this._trustedKeyGroups.internalValue = value.trustedKeyGroups;
    }
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

  // compress - computed: true, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // field_level_encryption_id - computed: true, optional: true, required: false
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

  // allowed_methods - computed: false, optional: true, required: false
  private _allowedMethods = new CloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethodsList(this, "allowed_methods", false);
  public get allowedMethods() {
    return this._allowedMethods;
  }
  public putAllowedMethods(value: CloudfrontMultitenantDistributionDefaultCacheBehaviorAllowedMethods[] | cdktf.IResolvable) {
    this._allowedMethods.internalValue = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods.internalValue;
  }

  // function_association - computed: false, optional: true, required: false
  private _functionAssociation = new CloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociationList(this, "function_association", false);
  public get functionAssociation() {
    return this._functionAssociation;
  }
  public putFunctionAssociation(value: CloudfrontMultitenantDistributionDefaultCacheBehaviorFunctionAssociation[] | cdktf.IResolvable) {
    this._functionAssociation.internalValue = value;
  }
  public resetFunctionAssociation() {
    this._functionAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAssociationInput() {
    return this._functionAssociation.internalValue;
  }

  // lambda_function_association - computed: false, optional: true, required: false
  private _lambdaFunctionAssociation = new CloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociationList(this, "lambda_function_association", false);
  public get lambdaFunctionAssociation() {
    return this._lambdaFunctionAssociation;
  }
  public putLambdaFunctionAssociation(value: CloudfrontMultitenantDistributionDefaultCacheBehaviorLambdaFunctionAssociation[] | cdktf.IResolvable) {
    this._lambdaFunctionAssociation.internalValue = value;
  }
  public resetLambdaFunctionAssociation() {
    this._lambdaFunctionAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionAssociationInput() {
    return this._lambdaFunctionAssociation.internalValue;
  }

  // trusted_key_groups - computed: false, optional: true, required: false
  private _trustedKeyGroups = new CloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroupsList(this, "trusted_key_groups", false);
  public get trustedKeyGroups() {
    return this._trustedKeyGroups;
  }
  public putTrustedKeyGroups(value: CloudfrontMultitenantDistributionDefaultCacheBehaviorTrustedKeyGroups[] | cdktf.IResolvable) {
    this._trustedKeyGroups.internalValue = value;
  }
  public resetTrustedKeyGroups() {
    this._trustedKeyGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedKeyGroupsInput() {
    return this._trustedKeyGroups.internalValue;
  }
}

export class CloudfrontMultitenantDistributionDefaultCacheBehaviorList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionDefaultCacheBehavior[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionDefaultCacheBehaviorOutputReference {
    return new CloudfrontMultitenantDistributionDefaultCacheBehaviorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionOriginCustomHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#header_name CloudfrontMultitenantDistribution#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#header_value CloudfrontMultitenantDistribution#header_value}
  */
  readonly headerValue: string;
}

export function cloudfrontMultitenantDistributionOriginCustomHeaderToTerraform(struct?: CloudfrontMultitenantDistributionOriginCustomHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
  }
}


export function cloudfrontMultitenantDistributionOriginCustomHeaderToHclTerraform(struct?: CloudfrontMultitenantDistributionOriginCustomHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionOriginCustomHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionOriginCustomHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionOriginCustomHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }
}

export class CloudfrontMultitenantDistributionOriginCustomHeaderList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionOriginCustomHeader[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionOriginCustomHeaderOutputReference {
    return new CloudfrontMultitenantDistributionOriginCustomHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionOriginCustomOriginConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#http_port CloudfrontMultitenantDistribution#http_port}
  */
  readonly httpPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#https_port CloudfrontMultitenantDistribution#https_port}
  */
  readonly httpsPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#ip_address_type CloudfrontMultitenantDistribution#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#origin_keepalive_timeout CloudfrontMultitenantDistribution#origin_keepalive_timeout}
  */
  readonly originKeepaliveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#origin_protocol_policy CloudfrontMultitenantDistribution#origin_protocol_policy}
  */
  readonly originProtocolPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#origin_read_timeout CloudfrontMultitenantDistribution#origin_read_timeout}
  */
  readonly originReadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#origin_ssl_protocols CloudfrontMultitenantDistribution#origin_ssl_protocols}
  */
  readonly originSslProtocols: string[];
}

export function cloudfrontMultitenantDistributionOriginCustomOriginConfigToTerraform(struct?: CloudfrontMultitenantDistributionOriginCustomOriginConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    ip_address_type: cdktf.stringToTerraform(struct!.ipAddressType),
    origin_keepalive_timeout: cdktf.numberToTerraform(struct!.originKeepaliveTimeout),
    origin_protocol_policy: cdktf.stringToTerraform(struct!.originProtocolPolicy),
    origin_read_timeout: cdktf.numberToTerraform(struct!.originReadTimeout),
    origin_ssl_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.originSslProtocols),
  }
}


export function cloudfrontMultitenantDistributionOriginCustomOriginConfigToHclTerraform(struct?: CloudfrontMultitenantDistributionOriginCustomOriginConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address_type: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_keepalive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.originKeepaliveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_protocol_policy: {
      value: cdktf.stringToHclTerraform(struct!.originProtocolPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.originReadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_ssl_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.originSslProtocols),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionOriginCustomOriginConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionOriginCustomOriginConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CloudfrontMultitenantDistributionOriginCustomOriginConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpPort = undefined;
      this._httpsPort = undefined;
      this._ipAddressType = undefined;
      this._originKeepaliveTimeout = undefined;
      this._originProtocolPolicy = undefined;
      this._originReadTimeout = undefined;
      this._originSslProtocols = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

  // origin_keepalive_timeout - computed: true, optional: true, required: false
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

  // origin_read_timeout - computed: true, optional: true, required: false
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
    return cdktf.Fn.tolist(this.getListAttribute('origin_ssl_protocols'));
  }
  public set originSslProtocols(value: string[]) {
    this._originSslProtocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originSslProtocolsInput() {
    return this._originSslProtocols;
  }
}

export class CloudfrontMultitenantDistributionOriginCustomOriginConfigList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionOriginCustomOriginConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionOriginCustomOriginConfigOutputReference {
    return new CloudfrontMultitenantDistributionOriginCustomOriginConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionOriginOriginShield {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#enabled CloudfrontMultitenantDistribution#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#origin_shield_region CloudfrontMultitenantDistribution#origin_shield_region}
  */
  readonly originShieldRegion?: string;
}

export function cloudfrontMultitenantDistributionOriginOriginShieldToTerraform(struct?: CloudfrontMultitenantDistributionOriginOriginShield | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    origin_shield_region: cdktf.stringToTerraform(struct!.originShieldRegion),
  }
}


export function cloudfrontMultitenantDistributionOriginOriginShieldToHclTerraform(struct?: CloudfrontMultitenantDistributionOriginOriginShield | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    origin_shield_region: {
      value: cdktf.stringToHclTerraform(struct!.originShieldRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionOriginOriginShieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionOriginOriginShield | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CloudfrontMultitenantDistributionOriginOriginShield | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._originShieldRegion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._originShieldRegion = value.originShieldRegion;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
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

export class CloudfrontMultitenantDistributionOriginOriginShieldList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionOriginOriginShield[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionOriginOriginShieldOutputReference {
    return new CloudfrontMultitenantDistributionOriginOriginShieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionOriginVpcOriginConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#origin_keepalive_timeout CloudfrontMultitenantDistribution#origin_keepalive_timeout}
  */
  readonly originKeepaliveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#origin_read_timeout CloudfrontMultitenantDistribution#origin_read_timeout}
  */
  readonly originReadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#vpc_origin_id CloudfrontMultitenantDistribution#vpc_origin_id}
  */
  readonly vpcOriginId: string;
}

export function cloudfrontMultitenantDistributionOriginVpcOriginConfigToTerraform(struct?: CloudfrontMultitenantDistributionOriginVpcOriginConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin_keepalive_timeout: cdktf.numberToTerraform(struct!.originKeepaliveTimeout),
    origin_read_timeout: cdktf.numberToTerraform(struct!.originReadTimeout),
    vpc_origin_id: cdktf.stringToTerraform(struct!.vpcOriginId),
  }
}


export function cloudfrontMultitenantDistributionOriginVpcOriginConfigToHclTerraform(struct?: CloudfrontMultitenantDistributionOriginVpcOriginConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin_keepalive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.originKeepaliveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.originReadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpc_origin_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcOriginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionOriginVpcOriginConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionOriginVpcOriginConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._vpcOriginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcOriginId = this._vpcOriginId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionOriginVpcOriginConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._originKeepaliveTimeout = undefined;
      this._originReadTimeout = undefined;
      this._vpcOriginId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._originKeepaliveTimeout = value.originKeepaliveTimeout;
      this._originReadTimeout = value.originReadTimeout;
      this._vpcOriginId = value.vpcOriginId;
    }
  }

  // origin_keepalive_timeout - computed: true, optional: true, required: false
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

  // origin_read_timeout - computed: true, optional: true, required: false
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

export class CloudfrontMultitenantDistributionOriginVpcOriginConfigList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionOriginVpcOriginConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionOriginVpcOriginConfigOutputReference {
    return new CloudfrontMultitenantDistributionOriginVpcOriginConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#connection_attempts CloudfrontMultitenantDistribution#connection_attempts}
  */
  readonly connectionAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#connection_timeout CloudfrontMultitenantDistribution#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#domain_name CloudfrontMultitenantDistribution#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#id CloudfrontMultitenantDistribution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#origin_access_control_id CloudfrontMultitenantDistribution#origin_access_control_id}
  */
  readonly originAccessControlId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#origin_path CloudfrontMultitenantDistribution#origin_path}
  */
  readonly originPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#response_completion_timeout CloudfrontMultitenantDistribution#response_completion_timeout}
  */
  readonly responseCompletionTimeout?: number;
  /**
  * custom_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#custom_header CloudfrontMultitenantDistribution#custom_header}
  */
  readonly customHeader?: CloudfrontMultitenantDistributionOriginCustomHeader[] | cdktf.IResolvable;
  /**
  * custom_origin_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#custom_origin_config CloudfrontMultitenantDistribution#custom_origin_config}
  */
  readonly customOriginConfig?: CloudfrontMultitenantDistributionOriginCustomOriginConfig[] | cdktf.IResolvable;
  /**
  * origin_shield block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#origin_shield CloudfrontMultitenantDistribution#origin_shield}
  */
  readonly originShield?: CloudfrontMultitenantDistributionOriginOriginShield[] | cdktf.IResolvable;
  /**
  * vpc_origin_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#vpc_origin_config CloudfrontMultitenantDistribution#vpc_origin_config}
  */
  readonly vpcOriginConfig?: CloudfrontMultitenantDistributionOriginVpcOriginConfig[] | cdktf.IResolvable;
}

export function cloudfrontMultitenantDistributionOriginToTerraform(struct?: CloudfrontMultitenantDistributionOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_attempts: cdktf.numberToTerraform(struct!.connectionAttempts),
    connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    id: cdktf.stringToTerraform(struct!.id),
    origin_access_control_id: cdktf.stringToTerraform(struct!.originAccessControlId),
    origin_path: cdktf.stringToTerraform(struct!.originPath),
    response_completion_timeout: cdktf.numberToTerraform(struct!.responseCompletionTimeout),
    custom_header: cdktf.listMapper(cloudfrontMultitenantDistributionOriginCustomHeaderToTerraform, true)(struct!.customHeader),
    custom_origin_config: cdktf.listMapper(cloudfrontMultitenantDistributionOriginCustomOriginConfigToTerraform, true)(struct!.customOriginConfig),
    origin_shield: cdktf.listMapper(cloudfrontMultitenantDistributionOriginOriginShieldToTerraform, true)(struct!.originShield),
    vpc_origin_config: cdktf.listMapper(cloudfrontMultitenantDistributionOriginVpcOriginConfigToTerraform, true)(struct!.vpcOriginConfig),
  }
}


export function cloudfrontMultitenantDistributionOriginToHclTerraform(struct?: CloudfrontMultitenantDistributionOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_attempts: {
      value: cdktf.numberToHclTerraform(struct!.connectionAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_access_control_id: {
      value: cdktf.stringToHclTerraform(struct!.originAccessControlId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_path: {
      value: cdktf.stringToHclTerraform(struct!.originPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_completion_timeout: {
      value: cdktf.numberToHclTerraform(struct!.responseCompletionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_header: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionOriginCustomHeaderToHclTerraform, true)(struct!.customHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionOriginCustomHeaderList",
    },
    custom_origin_config: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionOriginCustomOriginConfigToHclTerraform, true)(struct!.customOriginConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionOriginCustomOriginConfigList",
    },
    origin_shield: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionOriginOriginShieldToHclTerraform, true)(struct!.originShield),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionOriginOriginShieldList",
    },
    vpc_origin_config: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionOriginVpcOriginConfigToHclTerraform, true)(struct!.vpcOriginConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionOriginVpcOriginConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionOriginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionOrigin | cdktf.IResolvable | undefined {
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._originAccessControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originAccessControlId = this._originAccessControlId;
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
    if (this._vpcOriginConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcOriginConfig = this._vpcOriginConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionOrigin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionAttempts = undefined;
      this._connectionTimeout = undefined;
      this._domainName = undefined;
      this._id = undefined;
      this._originAccessControlId = undefined;
      this._originPath = undefined;
      this._responseCompletionTimeout = undefined;
      this._customHeader.internalValue = undefined;
      this._customOriginConfig.internalValue = undefined;
      this._originShield.internalValue = undefined;
      this._vpcOriginConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionAttempts = value.connectionAttempts;
      this._connectionTimeout = value.connectionTimeout;
      this._domainName = value.domainName;
      this._id = value.id;
      this._originAccessControlId = value.originAccessControlId;
      this._originPath = value.originPath;
      this._responseCompletionTimeout = value.responseCompletionTimeout;
      this._customHeader.internalValue = value.customHeader;
      this._customOriginConfig.internalValue = value.customOriginConfig;
      this._originShield.internalValue = value.originShield;
      this._vpcOriginConfig.internalValue = value.vpcOriginConfig;
    }
  }

  // connection_attempts - computed: true, optional: true, required: false
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

  // connection_timeout - computed: true, optional: true, required: false
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

  // origin_path - computed: true, optional: true, required: false
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
  private _customHeader = new CloudfrontMultitenantDistributionOriginCustomHeaderList(this, "custom_header", false);
  public get customHeader() {
    return this._customHeader;
  }
  public putCustomHeader(value: CloudfrontMultitenantDistributionOriginCustomHeader[] | cdktf.IResolvable) {
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
  private _customOriginConfig = new CloudfrontMultitenantDistributionOriginCustomOriginConfigList(this, "custom_origin_config", false);
  public get customOriginConfig() {
    return this._customOriginConfig;
  }
  public putCustomOriginConfig(value: CloudfrontMultitenantDistributionOriginCustomOriginConfig[] | cdktf.IResolvable) {
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
  private _originShield = new CloudfrontMultitenantDistributionOriginOriginShieldList(this, "origin_shield", false);
  public get originShield() {
    return this._originShield;
  }
  public putOriginShield(value: CloudfrontMultitenantDistributionOriginOriginShield[] | cdktf.IResolvable) {
    this._originShield.internalValue = value;
  }
  public resetOriginShield() {
    this._originShield.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originShieldInput() {
    return this._originShield.internalValue;
  }

  // vpc_origin_config - computed: false, optional: true, required: false
  private _vpcOriginConfig = new CloudfrontMultitenantDistributionOriginVpcOriginConfigList(this, "vpc_origin_config", false);
  public get vpcOriginConfig() {
    return this._vpcOriginConfig;
  }
  public putVpcOriginConfig(value: CloudfrontMultitenantDistributionOriginVpcOriginConfig[] | cdktf.IResolvable) {
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

export class CloudfrontMultitenantDistributionOriginList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionOrigin[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionOriginOutputReference {
    return new CloudfrontMultitenantDistributionOriginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionOriginGroupFailoverCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#status_codes CloudfrontMultitenantDistribution#status_codes}
  */
  readonly statusCodes: number[];
}

export function cloudfrontMultitenantDistributionOriginGroupFailoverCriteriaToTerraform(struct?: CloudfrontMultitenantDistributionOriginGroupFailoverCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.statusCodes),
  }
}


export function cloudfrontMultitenantDistributionOriginGroupFailoverCriteriaToHclTerraform(struct?: CloudfrontMultitenantDistributionOriginGroupFailoverCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.statusCodes),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionOriginGroupFailoverCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionOriginGroupFailoverCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodes = this._statusCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionOriginGroupFailoverCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCodes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCodes = value.statusCodes;
    }
  }

  // status_codes - computed: false, optional: false, required: true
  private _statusCodes?: number[]; 
  public get statusCodes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('status_codes')));
  }
  public set statusCodes(value: number[]) {
    this._statusCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodesInput() {
    return this._statusCodes;
  }
}

export class CloudfrontMultitenantDistributionOriginGroupFailoverCriteriaList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionOriginGroupFailoverCriteria[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionOriginGroupFailoverCriteriaOutputReference {
    return new CloudfrontMultitenantDistributionOriginGroupFailoverCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionOriginGroupMember {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#origin_id CloudfrontMultitenantDistribution#origin_id}
  */
  readonly originId: string;
}

export function cloudfrontMultitenantDistributionOriginGroupMemberToTerraform(struct?: CloudfrontMultitenantDistributionOriginGroupMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin_id: cdktf.stringToTerraform(struct!.originId),
  }
}


export function cloudfrontMultitenantDistributionOriginGroupMemberToHclTerraform(struct?: CloudfrontMultitenantDistributionOriginGroupMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin_id: {
      value: cdktf.stringToHclTerraform(struct!.originId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionOriginGroupMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionOriginGroupMember | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudfrontMultitenantDistributionOriginGroupMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._originId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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

export class CloudfrontMultitenantDistributionOriginGroupMemberList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionOriginGroupMember[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionOriginGroupMemberOutputReference {
    return new CloudfrontMultitenantDistributionOriginGroupMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionOriginGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#origin_id CloudfrontMultitenantDistribution#origin_id}
  */
  readonly originId: string;
  /**
  * failover_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#failover_criteria CloudfrontMultitenantDistribution#failover_criteria}
  */
  readonly failoverCriteria?: CloudfrontMultitenantDistributionOriginGroupFailoverCriteria[] | cdktf.IResolvable;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#member CloudfrontMultitenantDistribution#member}
  */
  readonly member?: CloudfrontMultitenantDistributionOriginGroupMember[] | cdktf.IResolvable;
}

export function cloudfrontMultitenantDistributionOriginGroupToTerraform(struct?: CloudfrontMultitenantDistributionOriginGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin_id: cdktf.stringToTerraform(struct!.originId),
    failover_criteria: cdktf.listMapper(cloudfrontMultitenantDistributionOriginGroupFailoverCriteriaToTerraform, true)(struct!.failoverCriteria),
    member: cdktf.listMapper(cloudfrontMultitenantDistributionOriginGroupMemberToTerraform, true)(struct!.member),
  }
}


export function cloudfrontMultitenantDistributionOriginGroupToHclTerraform(struct?: CloudfrontMultitenantDistributionOriginGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin_id: {
      value: cdktf.stringToHclTerraform(struct!.originId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover_criteria: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionOriginGroupFailoverCriteriaToHclTerraform, true)(struct!.failoverCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionOriginGroupFailoverCriteriaList",
    },
    member: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionOriginGroupMemberToHclTerraform, true)(struct!.member),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionOriginGroupMemberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionOriginGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionOriginGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudfrontMultitenantDistributionOriginGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._originId = undefined;
      this._failoverCriteria.internalValue = undefined;
      this._member.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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

  // failover_criteria - computed: false, optional: true, required: false
  private _failoverCriteria = new CloudfrontMultitenantDistributionOriginGroupFailoverCriteriaList(this, "failover_criteria", false);
  public get failoverCriteria() {
    return this._failoverCriteria;
  }
  public putFailoverCriteria(value: CloudfrontMultitenantDistributionOriginGroupFailoverCriteria[] | cdktf.IResolvable) {
    this._failoverCriteria.internalValue = value;
  }
  public resetFailoverCriteria() {
    this._failoverCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverCriteriaInput() {
    return this._failoverCriteria.internalValue;
  }

  // member - computed: false, optional: true, required: false
  private _member = new CloudfrontMultitenantDistributionOriginGroupMemberList(this, "member", false);
  public get member() {
    return this._member;
  }
  public putMember(value: CloudfrontMultitenantDistributionOriginGroupMember[] | cdktf.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }
}

export class CloudfrontMultitenantDistributionOriginGroupList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionOriginGroup[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionOriginGroupOutputReference {
    return new CloudfrontMultitenantDistributionOriginGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionRestrictionsGeoRestriction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#items CloudfrontMultitenantDistribution#items}
  */
  readonly items?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#restriction_type CloudfrontMultitenantDistribution#restriction_type}
  */
  readonly restrictionType: string;
}

export function cloudfrontMultitenantDistributionRestrictionsGeoRestrictionToTerraform(struct?: CloudfrontMultitenantDistributionRestrictionsGeoRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
    restriction_type: cdktf.stringToTerraform(struct!.restrictionType),
  }
}


export function cloudfrontMultitenantDistributionRestrictionsGeoRestrictionToHclTerraform(struct?: CloudfrontMultitenantDistributionRestrictionsGeoRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    restriction_type: {
      value: cdktf.stringToHclTerraform(struct!.restrictionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionRestrictionsGeoRestrictionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionRestrictionsGeoRestriction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    if (this._restrictionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictionType = this._restrictionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionRestrictionsGeoRestriction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
      this._restrictionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
      this._restrictionType = value.restrictionType;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
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

export class CloudfrontMultitenantDistributionRestrictionsGeoRestrictionList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionRestrictionsGeoRestriction[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionRestrictionsGeoRestrictionOutputReference {
    return new CloudfrontMultitenantDistributionRestrictionsGeoRestrictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionRestrictions {
  /**
  * geo_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#geo_restriction CloudfrontMultitenantDistribution#geo_restriction}
  */
  readonly geoRestriction?: CloudfrontMultitenantDistributionRestrictionsGeoRestriction[] | cdktf.IResolvable;
}

export function cloudfrontMultitenantDistributionRestrictionsToTerraform(struct?: CloudfrontMultitenantDistributionRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_restriction: cdktf.listMapper(cloudfrontMultitenantDistributionRestrictionsGeoRestrictionToTerraform, true)(struct!.geoRestriction),
  }
}


export function cloudfrontMultitenantDistributionRestrictionsToHclTerraform(struct?: CloudfrontMultitenantDistributionRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_restriction: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionRestrictionsGeoRestrictionToHclTerraform, true)(struct!.geoRestriction),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionRestrictionsGeoRestrictionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoRestriction = this._geoRestriction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geoRestriction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geoRestriction.internalValue = value.geoRestriction;
    }
  }

  // geo_restriction - computed: false, optional: true, required: false
  private _geoRestriction = new CloudfrontMultitenantDistributionRestrictionsGeoRestrictionList(this, "geo_restriction", false);
  public get geoRestriction() {
    return this._geoRestriction;
  }
  public putGeoRestriction(value: CloudfrontMultitenantDistributionRestrictionsGeoRestriction[] | cdktf.IResolvable) {
    this._geoRestriction.internalValue = value;
  }
  public resetGeoRestriction() {
    this._geoRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRestrictionInput() {
    return this._geoRestriction.internalValue;
  }
}

export class CloudfrontMultitenantDistributionRestrictionsList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionRestrictions[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionRestrictionsOutputReference {
    return new CloudfrontMultitenantDistributionRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#comment CloudfrontMultitenantDistribution#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#default_value CloudfrontMultitenantDistribution#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#required CloudfrontMultitenantDistribution#required}
  */
  readonly required: boolean | cdktf.IResolvable;
}

export function cloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchemaToTerraform(struct?: CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function cloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchemaToHclTerraform(struct?: CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._defaultValue = undefined;
      this._required = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._defaultValue = value.defaultValue;
      this._required = value.required;
    }
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

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}

export class CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchemaList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchema[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchemaOutputReference {
    return new CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinition {
  /**
  * string_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#string_schema CloudfrontMultitenantDistribution#string_schema}
  */
  readonly stringSchema?: CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchema[] | cdktf.IResolvable;
}

export function cloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionToTerraform(struct?: CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_schema: cdktf.listMapper(cloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchemaToTerraform, true)(struct!.stringSchema),
  }
}


export function cloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionToHclTerraform(struct?: CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_schema: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchemaToHclTerraform, true)(struct!.stringSchema),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringSchema = this._stringSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stringSchema.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stringSchema.internalValue = value.stringSchema;
    }
  }

  // string_schema - computed: false, optional: true, required: false
  private _stringSchema = new CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchemaList(this, "string_schema", false);
  public get stringSchema() {
    return this._stringSchema;
  }
  public putStringSchema(value: CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionStringSchema[] | cdktf.IResolvable) {
    this._stringSchema.internalValue = value;
  }
  public resetStringSchema() {
    this._stringSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringSchemaInput() {
    return this._stringSchema.internalValue;
  }
}

export class CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinition[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionOutputReference {
    return new CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionTenantConfigParameterDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#name CloudfrontMultitenantDistribution#name}
  */
  readonly name: string;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#definition CloudfrontMultitenantDistribution#definition}
  */
  readonly definition?: CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinition[] | cdktf.IResolvable;
}

export function cloudfrontMultitenantDistributionTenantConfigParameterDefinitionToTerraform(struct?: CloudfrontMultitenantDistributionTenantConfigParameterDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    definition: cdktf.listMapper(cloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionToTerraform, true)(struct!.definition),
  }
}


export function cloudfrontMultitenantDistributionTenantConfigParameterDefinitionToHclTerraform(struct?: CloudfrontMultitenantDistributionTenantConfigParameterDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    definition: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionToHclTerraform, true)(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionTenantConfigParameterDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionTenantConfigParameterDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionTenantConfigParameterDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._definition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._definition.internalValue = value.definition;
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

  // definition - computed: false, optional: true, required: false
  private _definition = new CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: CloudfrontMultitenantDistributionTenantConfigParameterDefinitionDefinition[] | cdktf.IResolvable) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }
}

export class CloudfrontMultitenantDistributionTenantConfigParameterDefinitionList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionTenantConfigParameterDefinition[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionTenantConfigParameterDefinitionOutputReference {
    return new CloudfrontMultitenantDistributionTenantConfigParameterDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionTenantConfig {
  /**
  * parameter_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#parameter_definition CloudfrontMultitenantDistribution#parameter_definition}
  */
  readonly parameterDefinition?: CloudfrontMultitenantDistributionTenantConfigParameterDefinition[] | cdktf.IResolvable;
}

export function cloudfrontMultitenantDistributionTenantConfigToTerraform(struct?: CloudfrontMultitenantDistributionTenantConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_definition: cdktf.listMapper(cloudfrontMultitenantDistributionTenantConfigParameterDefinitionToTerraform, true)(struct!.parameterDefinition),
  }
}


export function cloudfrontMultitenantDistributionTenantConfigToHclTerraform(struct?: CloudfrontMultitenantDistributionTenantConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_definition: {
      value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionTenantConfigParameterDefinitionToHclTerraform, true)(struct!.parameterDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMultitenantDistributionTenantConfigParameterDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionTenantConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionTenantConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterDefinition = this._parameterDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMultitenantDistributionTenantConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterDefinition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterDefinition.internalValue = value.parameterDefinition;
    }
  }

  // parameter_definition - computed: false, optional: true, required: false
  private _parameterDefinition = new CloudfrontMultitenantDistributionTenantConfigParameterDefinitionList(this, "parameter_definition", false);
  public get parameterDefinition() {
    return this._parameterDefinition;
  }
  public putParameterDefinition(value: CloudfrontMultitenantDistributionTenantConfigParameterDefinition[] | cdktf.IResolvable) {
    this._parameterDefinition.internalValue = value;
  }
  public resetParameterDefinition() {
    this._parameterDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterDefinitionInput() {
    return this._parameterDefinition.internalValue;
  }
}

export class CloudfrontMultitenantDistributionTenantConfigList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionTenantConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionTenantConfigOutputReference {
    return new CloudfrontMultitenantDistributionTenantConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontMultitenantDistributionTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#create CloudfrontMultitenantDistribution#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#delete CloudfrontMultitenantDistribution#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#update CloudfrontMultitenantDistribution#update}
  */
  readonly update?: string;
}

export function cloudfrontMultitenantDistributionTimeoutsToTerraform(struct?: CloudfrontMultitenantDistributionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudfrontMultitenantDistributionTimeoutsToHclTerraform(struct?: CloudfrontMultitenantDistributionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontMultitenantDistributionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudfrontMultitenantDistributionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
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
export interface CloudfrontMultitenantDistributionViewerCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#acm_certificate_arn CloudfrontMultitenantDistribution#acm_certificate_arn}
  */
  readonly acmCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#cloudfront_default_certificate CloudfrontMultitenantDistribution#cloudfront_default_certificate}
  */
  readonly cloudfrontDefaultCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#minimum_protocol_version CloudfrontMultitenantDistribution#minimum_protocol_version}
  */
  readonly minimumProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#ssl_support_method CloudfrontMultitenantDistribution#ssl_support_method}
  */
  readonly sslSupportMethod?: string;
}

export function cloudfrontMultitenantDistributionViewerCertificateToTerraform(struct?: CloudfrontMultitenantDistributionViewerCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm_certificate_arn: cdktf.stringToTerraform(struct!.acmCertificateArn),
    cloudfront_default_certificate: cdktf.booleanToTerraform(struct!.cloudfrontDefaultCertificate),
    minimum_protocol_version: cdktf.stringToTerraform(struct!.minimumProtocolVersion),
    ssl_support_method: cdktf.stringToTerraform(struct!.sslSupportMethod),
  }
}


export function cloudfrontMultitenantDistributionViewerCertificateToHclTerraform(struct?: CloudfrontMultitenantDistributionViewerCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acm_certificate_arn: {
      value: cdktf.stringToHclTerraform(struct!.acmCertificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudfront_default_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.cloudfrontDefaultCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    minimum_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.minimumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_support_method: {
      value: cdktf.stringToHclTerraform(struct!.sslSupportMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMultitenantDistributionViewerCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontMultitenantDistributionViewerCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CloudfrontMultitenantDistributionViewerCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acmCertificateArn = undefined;
      this._cloudfrontDefaultCertificate = undefined;
      this._minimumProtocolVersion = undefined;
      this._sslSupportMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acmCertificateArn = value.acmCertificateArn;
      this._cloudfrontDefaultCertificate = value.cloudfrontDefaultCertificate;
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

  // cloudfront_default_certificate - computed: true, optional: true, required: false
  private _cloudfrontDefaultCertificate?: boolean | cdktf.IResolvable; 
  public get cloudfrontDefaultCertificate() {
    return this.getBooleanAttribute('cloudfront_default_certificate');
  }
  public set cloudfrontDefaultCertificate(value: boolean | cdktf.IResolvable) {
    this._cloudfrontDefaultCertificate = value;
  }
  public resetCloudfrontDefaultCertificate() {
    this._cloudfrontDefaultCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudfrontDefaultCertificateInput() {
    return this._cloudfrontDefaultCertificate;
  }

  // minimum_protocol_version - computed: true, optional: true, required: false
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

  // ssl_support_method - computed: true, optional: true, required: false
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

export class CloudfrontMultitenantDistributionViewerCertificateList extends cdktf.ComplexList {
  public internalValue? : CloudfrontMultitenantDistributionViewerCertificate[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontMultitenantDistributionViewerCertificateOutputReference {
    return new CloudfrontMultitenantDistributionViewerCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution aws_cloudfront_multitenant_distribution}
*/
export class CloudfrontMultitenantDistribution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_multitenant_distribution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudfrontMultitenantDistribution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfrontMultitenantDistribution to import
  * @param importFromId The id of the existing CloudfrontMultitenantDistribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfrontMultitenantDistribution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_multitenant_distribution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution aws_cloudfront_multitenant_distribution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontMultitenantDistributionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontMultitenantDistributionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_multitenant_distribution',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.28.0',
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
    this._comment = config.comment;
    this._defaultRootObject = config.defaultRootObject;
    this._enabled = config.enabled;
    this._httpVersion = config.httpVersion;
    this._tags = config.tags;
    this._webAclId = config.webAclId;
    this._activeTrustedKeyGroups.internalValue = config.activeTrustedKeyGroups;
    this._cacheBehavior.internalValue = config.cacheBehavior;
    this._customErrorResponse.internalValue = config.customErrorResponse;
    this._defaultCacheBehavior.internalValue = config.defaultCacheBehavior;
    this._origin.internalValue = config.origin;
    this._originGroup.internalValue = config.originGroup;
    this._restrictions.internalValue = config.restrictions;
    this._tenantConfig.internalValue = config.tenantConfig;
    this._timeouts.internalValue = config.timeouts;
    this._viewerCertificate.internalValue = config.viewerCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // caller_reference - computed: true, optional: false, required: false
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
  }

  // comment - computed: false, optional: false, required: true
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // connection_mode - computed: true, optional: false, required: false
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
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
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
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

  // http_version - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_progress_invalidation_batches - computed: true, optional: false, required: false
  public get inProgressInvalidationBatches() {
    return this.getNumberAttribute('in_progress_invalidation_batches');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
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

  // active_trusted_key_groups - computed: false, optional: true, required: false
  private _activeTrustedKeyGroups = new CloudfrontMultitenantDistributionActiveTrustedKeyGroupsList(this, "active_trusted_key_groups", false);
  public get activeTrustedKeyGroups() {
    return this._activeTrustedKeyGroups;
  }
  public putActiveTrustedKeyGroups(value: CloudfrontMultitenantDistributionActiveTrustedKeyGroups[] | cdktf.IResolvable) {
    this._activeTrustedKeyGroups.internalValue = value;
  }
  public resetActiveTrustedKeyGroups() {
    this._activeTrustedKeyGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTrustedKeyGroupsInput() {
    return this._activeTrustedKeyGroups.internalValue;
  }

  // cache_behavior - computed: false, optional: true, required: false
  private _cacheBehavior = new CloudfrontMultitenantDistributionCacheBehaviorList(this, "cache_behavior", false);
  public get cacheBehavior() {
    return this._cacheBehavior;
  }
  public putCacheBehavior(value: CloudfrontMultitenantDistributionCacheBehavior[] | cdktf.IResolvable) {
    this._cacheBehavior.internalValue = value;
  }
  public resetCacheBehavior() {
    this._cacheBehavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheBehaviorInput() {
    return this._cacheBehavior.internalValue;
  }

  // custom_error_response - computed: false, optional: true, required: false
  private _customErrorResponse = new CloudfrontMultitenantDistributionCustomErrorResponseList(this, "custom_error_response", false);
  public get customErrorResponse() {
    return this._customErrorResponse;
  }
  public putCustomErrorResponse(value: CloudfrontMultitenantDistributionCustomErrorResponse[] | cdktf.IResolvable) {
    this._customErrorResponse.internalValue = value;
  }
  public resetCustomErrorResponse() {
    this._customErrorResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorResponseInput() {
    return this._customErrorResponse.internalValue;
  }

  // default_cache_behavior - computed: false, optional: true, required: false
  private _defaultCacheBehavior = new CloudfrontMultitenantDistributionDefaultCacheBehaviorList(this, "default_cache_behavior", false);
  public get defaultCacheBehavior() {
    return this._defaultCacheBehavior;
  }
  public putDefaultCacheBehavior(value: CloudfrontMultitenantDistributionDefaultCacheBehavior[] | cdktf.IResolvable) {
    this._defaultCacheBehavior.internalValue = value;
  }
  public resetDefaultCacheBehavior() {
    this._defaultCacheBehavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCacheBehaviorInput() {
    return this._defaultCacheBehavior.internalValue;
  }

  // origin - computed: false, optional: true, required: false
  private _origin = new CloudfrontMultitenantDistributionOriginList(this, "origin", false);
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: CloudfrontMultitenantDistributionOrigin[] | cdktf.IResolvable) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // origin_group - computed: false, optional: true, required: false
  private _originGroup = new CloudfrontMultitenantDistributionOriginGroupList(this, "origin_group", false);
  public get originGroup() {
    return this._originGroup;
  }
  public putOriginGroup(value: CloudfrontMultitenantDistributionOriginGroup[] | cdktf.IResolvable) {
    this._originGroup.internalValue = value;
  }
  public resetOriginGroup() {
    this._originGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originGroupInput() {
    return this._originGroup.internalValue;
  }

  // restrictions - computed: false, optional: true, required: false
  private _restrictions = new CloudfrontMultitenantDistributionRestrictionsList(this, "restrictions", false);
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: CloudfrontMultitenantDistributionRestrictions[] | cdktf.IResolvable) {
    this._restrictions.internalValue = value;
  }
  public resetRestrictions() {
    this._restrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }

  // tenant_config - computed: false, optional: true, required: false
  private _tenantConfig = new CloudfrontMultitenantDistributionTenantConfigList(this, "tenant_config", false);
  public get tenantConfig() {
    return this._tenantConfig;
  }
  public putTenantConfig(value: CloudfrontMultitenantDistributionTenantConfig[] | cdktf.IResolvable) {
    this._tenantConfig.internalValue = value;
  }
  public resetTenantConfig() {
    this._tenantConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantConfigInput() {
    return this._tenantConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudfrontMultitenantDistributionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudfrontMultitenantDistributionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // viewer_certificate - computed: false, optional: true, required: false
  private _viewerCertificate = new CloudfrontMultitenantDistributionViewerCertificateList(this, "viewer_certificate", false);
  public get viewerCertificate() {
    return this._viewerCertificate;
  }
  public putViewerCertificate(value: CloudfrontMultitenantDistributionViewerCertificate[] | cdktf.IResolvable) {
    this._viewerCertificate.internalValue = value;
  }
  public resetViewerCertificate() {
    this._viewerCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewerCertificateInput() {
    return this._viewerCertificate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      default_root_object: cdktf.stringToTerraform(this._defaultRootObject),
      enabled: cdktf.booleanToTerraform(this._enabled),
      http_version: cdktf.stringToTerraform(this._httpVersion),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      web_acl_id: cdktf.stringToTerraform(this._webAclId),
      active_trusted_key_groups: cdktf.listMapper(cloudfrontMultitenantDistributionActiveTrustedKeyGroupsToTerraform, true)(this._activeTrustedKeyGroups.internalValue),
      cache_behavior: cdktf.listMapper(cloudfrontMultitenantDistributionCacheBehaviorToTerraform, true)(this._cacheBehavior.internalValue),
      custom_error_response: cdktf.listMapper(cloudfrontMultitenantDistributionCustomErrorResponseToTerraform, true)(this._customErrorResponse.internalValue),
      default_cache_behavior: cdktf.listMapper(cloudfrontMultitenantDistributionDefaultCacheBehaviorToTerraform, true)(this._defaultCacheBehavior.internalValue),
      origin: cdktf.listMapper(cloudfrontMultitenantDistributionOriginToTerraform, true)(this._origin.internalValue),
      origin_group: cdktf.listMapper(cloudfrontMultitenantDistributionOriginGroupToTerraform, true)(this._originGroup.internalValue),
      restrictions: cdktf.listMapper(cloudfrontMultitenantDistributionRestrictionsToTerraform, true)(this._restrictions.internalValue),
      tenant_config: cdktf.listMapper(cloudfrontMultitenantDistributionTenantConfigToTerraform, true)(this._tenantConfig.internalValue),
      timeouts: cloudfrontMultitenantDistributionTimeoutsToTerraform(this._timeouts.internalValue),
      viewer_certificate: cdktf.listMapper(cloudfrontMultitenantDistributionViewerCertificateToTerraform, true)(this._viewerCertificate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_root_object: {
        value: cdktf.stringToHclTerraform(this._defaultRootObject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_version: {
        value: cdktf.stringToHclTerraform(this._httpVersion),
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
      web_acl_id: {
        value: cdktf.stringToHclTerraform(this._webAclId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_trusted_key_groups: {
        value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionActiveTrustedKeyGroupsToHclTerraform, true)(this._activeTrustedKeyGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontMultitenantDistributionActiveTrustedKeyGroupsList",
      },
      cache_behavior: {
        value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionCacheBehaviorToHclTerraform, true)(this._cacheBehavior.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontMultitenantDistributionCacheBehaviorList",
      },
      custom_error_response: {
        value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionCustomErrorResponseToHclTerraform, true)(this._customErrorResponse.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontMultitenantDistributionCustomErrorResponseList",
      },
      default_cache_behavior: {
        value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionDefaultCacheBehaviorToHclTerraform, true)(this._defaultCacheBehavior.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontMultitenantDistributionDefaultCacheBehaviorList",
      },
      origin: {
        value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionOriginToHclTerraform, true)(this._origin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontMultitenantDistributionOriginList",
      },
      origin_group: {
        value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionOriginGroupToHclTerraform, true)(this._originGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontMultitenantDistributionOriginGroupList",
      },
      restrictions: {
        value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionRestrictionsToHclTerraform, true)(this._restrictions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontMultitenantDistributionRestrictionsList",
      },
      tenant_config: {
        value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionTenantConfigToHclTerraform, true)(this._tenantConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontMultitenantDistributionTenantConfigList",
      },
      timeouts: {
        value: cloudfrontMultitenantDistributionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudfrontMultitenantDistributionTimeouts",
      },
      viewer_certificate: {
        value: cdktf.listMapperHcl(cloudfrontMultitenantDistributionViewerCertificateToHclTerraform, true)(this._viewerCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontMultitenantDistributionViewerCertificateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
