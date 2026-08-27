/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudfrontDistributionTenantConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#connection_group_id CloudfrontDistributionTenant#connection_group_id}
  */
  readonly connectionGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#distribution_id CloudfrontDistributionTenant#distribution_id}
  */
  readonly distributionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#enabled CloudfrontDistributionTenant#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#tags CloudfrontDistributionTenant#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#wait_for_deployment CloudfrontDistributionTenant#wait_for_deployment}
  */
  readonly waitForDeployment?: boolean | cdktn.IResolvable;
  /**
  * customizations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#customizations CloudfrontDistributionTenant#customizations}
  */
  readonly customizations?: CloudfrontDistributionTenantCustomizations[] | cdktn.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#domain CloudfrontDistributionTenant#domain}
  */
  readonly domain?: CloudfrontDistributionTenantDomain[] | cdktn.IResolvable;
  /**
  * managed_certificate_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#managed_certificate_request CloudfrontDistributionTenant#managed_certificate_request}
  */
  readonly managedCertificateRequest?: CloudfrontDistributionTenantManagedCertificateRequest[] | cdktn.IResolvable;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#parameter CloudfrontDistributionTenant#parameter}
  */
  readonly parameter?: CloudfrontDistributionTenantParameter[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#timeouts CloudfrontDistributionTenant#timeouts}
  */
  readonly timeouts?: CloudfrontDistributionTenantTimeouts;
}
export interface CloudfrontDistributionTenantCustomizationsCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}
  */
  readonly arn?: string;
}

export function cloudfrontDistributionTenantCustomizationsCertificateToTerraform(struct?: CloudfrontDistributionTenantCustomizationsCertificate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function cloudfrontDistributionTenantCustomizationsCertificateToHclTerraform(struct?: CloudfrontDistributionTenantCustomizationsCertificate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionTenantCustomizationsCertificateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionTenantCustomizationsCertificate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionTenantCustomizationsCertificate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: true, required: false
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
}

export class CloudfrontDistributionTenantCustomizationsCertificateList extends cdktn.ComplexList {
  public internalValue? : CloudfrontDistributionTenantCustomizationsCertificate[] | cdktn.IResolvable

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
  public get(index: number): CloudfrontDistributionTenantCustomizationsCertificateOutputReference {
    return new CloudfrontDistributionTenantCustomizationsCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionTenantCustomizationsGeoRestriction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#locations CloudfrontDistributionTenant#locations}
  */
  readonly locations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#restriction_type CloudfrontDistributionTenant#restriction_type}
  */
  readonly restrictionType?: string;
}

export function cloudfrontDistributionTenantCustomizationsGeoRestrictionToTerraform(struct?: CloudfrontDistributionTenantCustomizationsGeoRestriction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.locations),
    restriction_type: cdktn.stringToTerraform(struct!.restrictionType),
  }
}


export function cloudfrontDistributionTenantCustomizationsGeoRestrictionToHclTerraform(struct?: CloudfrontDistributionTenantCustomizationsGeoRestriction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionTenantCustomizationsGeoRestriction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CloudfrontDistributionTenantCustomizationsGeoRestriction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locations = undefined;
      this._restrictionType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

  // restriction_type - computed: false, optional: true, required: false
  private _restrictionType?: string; 
  public get restrictionType() {
    return this.getStringAttribute('restriction_type');
  }
  public set restrictionType(value: string) {
    this._restrictionType = value;
  }
  public resetRestrictionType() {
    this._restrictionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionTypeInput() {
    return this._restrictionType;
  }
}

export class CloudfrontDistributionTenantCustomizationsGeoRestrictionList extends cdktn.ComplexList {
  public internalValue? : CloudfrontDistributionTenantCustomizationsGeoRestriction[] | cdktn.IResolvable

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
  public get(index: number): CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference {
    return new CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionTenantCustomizationsWebAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#action CloudfrontDistributionTenant#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}
  */
  readonly arn?: string;
}

export function cloudfrontDistributionTenantCustomizationsWebAclToTerraform(struct?: CloudfrontDistributionTenantCustomizationsWebAcl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function cloudfrontDistributionTenantCustomizationsWebAclToHclTerraform(struct?: CloudfrontDistributionTenantCustomizationsWebAcl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionTenantCustomizationsWebAclOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionTenantCustomizationsWebAcl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionTenantCustomizationsWebAcl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._arn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._arn = value.arn;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // arn - computed: false, optional: true, required: false
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
}

export class CloudfrontDistributionTenantCustomizationsWebAclList extends cdktn.ComplexList {
  public internalValue? : CloudfrontDistributionTenantCustomizationsWebAcl[] | cdktn.IResolvable

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
  public get(index: number): CloudfrontDistributionTenantCustomizationsWebAclOutputReference {
    return new CloudfrontDistributionTenantCustomizationsWebAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionTenantCustomizations {
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#certificate CloudfrontDistributionTenant#certificate}
  */
  readonly certificate?: CloudfrontDistributionTenantCustomizationsCertificate[] | cdktn.IResolvable;
  /**
  * geo_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#geo_restriction CloudfrontDistributionTenant#geo_restriction}
  */
  readonly geoRestriction?: CloudfrontDistributionTenantCustomizationsGeoRestriction[] | cdktn.IResolvable;
  /**
  * web_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#web_acl CloudfrontDistributionTenant#web_acl}
  */
  readonly webAcl?: CloudfrontDistributionTenantCustomizationsWebAcl[] | cdktn.IResolvable;
}

export function cloudfrontDistributionTenantCustomizationsToTerraform(struct?: CloudfrontDistributionTenantCustomizations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate: cdktn.listMapper(cloudfrontDistributionTenantCustomizationsCertificateToTerraform, true)(struct!.certificate),
    geo_restriction: cdktn.listMapper(cloudfrontDistributionTenantCustomizationsGeoRestrictionToTerraform, true)(struct!.geoRestriction),
    web_acl: cdktn.listMapper(cloudfrontDistributionTenantCustomizationsWebAclToTerraform, true)(struct!.webAcl),
  }
}


export function cloudfrontDistributionTenantCustomizationsToHclTerraform(struct?: CloudfrontDistributionTenantCustomizations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate: {
      value: cdktn.listMapperHcl(cloudfrontDistributionTenantCustomizationsCertificateToHclTerraform, true)(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontDistributionTenantCustomizationsCertificateList",
    },
    geo_restriction: {
      value: cdktn.listMapperHcl(cloudfrontDistributionTenantCustomizationsGeoRestrictionToHclTerraform, true)(struct!.geoRestriction),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontDistributionTenantCustomizationsGeoRestrictionList",
    },
    web_acl: {
      value: cdktn.listMapperHcl(cloudfrontDistributionTenantCustomizationsWebAclToHclTerraform, true)(struct!.webAcl),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontDistributionTenantCustomizationsWebAclList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionTenantCustomizationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionTenantCustomizations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._geoRestriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoRestriction = this._geoRestriction?.internalValue;
    }
    if (this._webAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAcl = this._webAcl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionTenantCustomizations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate.internalValue = undefined;
      this._geoRestriction.internalValue = undefined;
      this._webAcl.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate.internalValue = value.certificate;
      this._geoRestriction.internalValue = value.geoRestriction;
      this._webAcl.internalValue = value.webAcl;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new CloudfrontDistributionTenantCustomizationsCertificateList(this, "certificate", false);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: CloudfrontDistributionTenantCustomizationsCertificate[] | cdktn.IResolvable) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // geo_restriction - computed: false, optional: true, required: false
  private _geoRestriction = new CloudfrontDistributionTenantCustomizationsGeoRestrictionList(this, "geo_restriction", false);
  public get geoRestriction() {
    return this._geoRestriction;
  }
  public putGeoRestriction(value: CloudfrontDistributionTenantCustomizationsGeoRestriction[] | cdktn.IResolvable) {
    this._geoRestriction.internalValue = value;
  }
  public resetGeoRestriction() {
    this._geoRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRestrictionInput() {
    return this._geoRestriction.internalValue;
  }

  // web_acl - computed: false, optional: true, required: false
  private _webAcl = new CloudfrontDistributionTenantCustomizationsWebAclList(this, "web_acl", false);
  public get webAcl() {
    return this._webAcl;
  }
  public putWebAcl(value: CloudfrontDistributionTenantCustomizationsWebAcl[] | cdktn.IResolvable) {
    this._webAcl.internalValue = value;
  }
  public resetWebAcl() {
    this._webAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAclInput() {
    return this._webAcl.internalValue;
  }
}

export class CloudfrontDistributionTenantCustomizationsList extends cdktn.ComplexList {
  public internalValue? : CloudfrontDistributionTenantCustomizations[] | cdktn.IResolvable

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
  public get(index: number): CloudfrontDistributionTenantCustomizationsOutputReference {
    return new CloudfrontDistributionTenantCustomizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionTenantDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#domain CloudfrontDistributionTenant#domain}
  */
  readonly domain: string;
}

export function cloudfrontDistributionTenantDomainToTerraform(struct?: CloudfrontDistributionTenantDomain | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
  }
}


export function cloudfrontDistributionTenantDomainToHclTerraform(struct?: CloudfrontDistributionTenantDomain | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionTenantDomainOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionTenantDomain | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionTenantDomain | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class CloudfrontDistributionTenantDomainList extends cdktn.ComplexList {
  public internalValue? : CloudfrontDistributionTenantDomain[] | cdktn.IResolvable

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
  public get(index: number): CloudfrontDistributionTenantDomainOutputReference {
    return new CloudfrontDistributionTenantDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionTenantManagedCertificateRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#certificate_transparency_logging_preference CloudfrontDistributionTenant#certificate_transparency_logging_preference}
  */
  readonly certificateTransparencyLoggingPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#primary_domain_name CloudfrontDistributionTenant#primary_domain_name}
  */
  readonly primaryDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#validation_token_host CloudfrontDistributionTenant#validation_token_host}
  */
  readonly validationTokenHost?: string;
}

export function cloudfrontDistributionTenantManagedCertificateRequestToTerraform(struct?: CloudfrontDistributionTenantManagedCertificateRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_transparency_logging_preference: cdktn.stringToTerraform(struct!.certificateTransparencyLoggingPreference),
    primary_domain_name: cdktn.stringToTerraform(struct!.primaryDomainName),
    validation_token_host: cdktn.stringToTerraform(struct!.validationTokenHost),
  }
}


export function cloudfrontDistributionTenantManagedCertificateRequestToHclTerraform(struct?: CloudfrontDistributionTenantManagedCertificateRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_transparency_logging_preference: {
      value: cdktn.stringToHclTerraform(struct!.certificateTransparencyLoggingPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_domain_name: {
      value: cdktn.stringToHclTerraform(struct!.primaryDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation_token_host: {
      value: cdktn.stringToHclTerraform(struct!.validationTokenHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontDistributionTenantManagedCertificateRequestOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionTenantManagedCertificateRequest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateTransparencyLoggingPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateTransparencyLoggingPreference = this._certificateTransparencyLoggingPreference;
    }
    if (this._primaryDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryDomainName = this._primaryDomainName;
    }
    if (this._validationTokenHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationTokenHost = this._validationTokenHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontDistributionTenantManagedCertificateRequest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateTransparencyLoggingPreference = undefined;
      this._primaryDomainName = undefined;
      this._validationTokenHost = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateTransparencyLoggingPreference = value.certificateTransparencyLoggingPreference;
      this._primaryDomainName = value.primaryDomainName;
      this._validationTokenHost = value.validationTokenHost;
    }
  }

  // certificate_transparency_logging_preference - computed: false, optional: true, required: false
  private _certificateTransparencyLoggingPreference?: string; 
  public get certificateTransparencyLoggingPreference() {
    return this.getStringAttribute('certificate_transparency_logging_preference');
  }
  public set certificateTransparencyLoggingPreference(value: string) {
    this._certificateTransparencyLoggingPreference = value;
  }
  public resetCertificateTransparencyLoggingPreference() {
    this._certificateTransparencyLoggingPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTransparencyLoggingPreferenceInput() {
    return this._certificateTransparencyLoggingPreference;
  }

  // primary_domain_name - computed: false, optional: true, required: false
  private _primaryDomainName?: string; 
  public get primaryDomainName() {
    return this.getStringAttribute('primary_domain_name');
  }
  public set primaryDomainName(value: string) {
    this._primaryDomainName = value;
  }
  public resetPrimaryDomainName() {
    this._primaryDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDomainNameInput() {
    return this._primaryDomainName;
  }

  // validation_token_host - computed: false, optional: true, required: false
  private _validationTokenHost?: string; 
  public get validationTokenHost() {
    return this.getStringAttribute('validation_token_host');
  }
  public set validationTokenHost(value: string) {
    this._validationTokenHost = value;
  }
  public resetValidationTokenHost() {
    this._validationTokenHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationTokenHostInput() {
    return this._validationTokenHost;
  }
}

export class CloudfrontDistributionTenantManagedCertificateRequestList extends cdktn.ComplexList {
  public internalValue? : CloudfrontDistributionTenantManagedCertificateRequest[] | cdktn.IResolvable

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
  public get(index: number): CloudfrontDistributionTenantManagedCertificateRequestOutputReference {
    return new CloudfrontDistributionTenantManagedCertificateRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionTenantParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#value CloudfrontDistributionTenant#value}
  */
  readonly value: string;
}

export function cloudfrontDistributionTenantParameterToTerraform(struct?: CloudfrontDistributionTenantParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cloudfrontDistributionTenantParameterToHclTerraform(struct?: CloudfrontDistributionTenantParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class CloudfrontDistributionTenantParameterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontDistributionTenantParameter | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudfrontDistributionTenantParameter | cdktn.IResolvable | undefined) {
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

export class CloudfrontDistributionTenantParameterList extends cdktn.ComplexList {
  public internalValue? : CloudfrontDistributionTenantParameter[] | cdktn.IResolvable

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
  public get(index: number): CloudfrontDistributionTenantParameterOutputReference {
    return new CloudfrontDistributionTenantParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontDistributionTenantTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#create CloudfrontDistributionTenant#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#delete CloudfrontDistributionTenant#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#update CloudfrontDistributionTenant#update}
  */
  readonly update?: string;
}

export function cloudfrontDistributionTenantTimeoutsToTerraform(struct?: CloudfrontDistributionTenantTimeouts | cdktn.IResolvable): any {
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


export function cloudfrontDistributionTenantTimeoutsToHclTerraform(struct?: CloudfrontDistributionTenantTimeouts | cdktn.IResolvable): any {
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

export class CloudfrontDistributionTenantTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontDistributionTenantTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudfrontDistributionTenantTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant aws_cloudfront_distribution_tenant}
*/
export class CloudfrontDistributionTenant extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_distribution_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudfrontDistributionTenant resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfrontDistributionTenant to import
  * @param importFromId The id of the existing CloudfrontDistributionTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfrontDistributionTenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_distribution_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudfront_distribution_tenant aws_cloudfront_distribution_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontDistributionTenantConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontDistributionTenantConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_distribution_tenant',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.62.0',
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
    this._connectionGroupId = config.connectionGroupId;
    this._distributionId = config.distributionId;
    this._enabled = config.enabled;
    this._name = config.name;
    this._tags = config.tags;
    this._waitForDeployment = config.waitForDeployment;
    this._customizations.internalValue = config.customizations;
    this._domain.internalValue = config.domain;
    this._managedCertificateRequest.internalValue = config.managedCertificateRequest;
    this._parameter.internalValue = config.parameter;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // connection_group_id - computed: true, optional: true, required: false
  private _connectionGroupId?: string; 
  public get connectionGroupId() {
    return this.getStringAttribute('connection_group_id');
  }
  public set connectionGroupId(value: string) {
    this._connectionGroupId = value;
  }
  public resetConnectionGroupId() {
    this._connectionGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionGroupIdInput() {
    return this._connectionGroupId;
  }

  // distribution_id - computed: false, optional: false, required: true
  private _distributionId?: string; 
  public get distributionId() {
    return this.getStringAttribute('distribution_id');
  }
  public set distributionId(value: string) {
    this._distributionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionIdInput() {
    return this._distributionId;
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // wait_for_deployment - computed: true, optional: true, required: false
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

  // customizations - computed: false, optional: true, required: false
  private _customizations = new CloudfrontDistributionTenantCustomizationsList(this, "customizations", false);
  public get customizations() {
    return this._customizations;
  }
  public putCustomizations(value: CloudfrontDistributionTenantCustomizations[] | cdktn.IResolvable) {
    this._customizations.internalValue = value;
  }
  public resetCustomizations() {
    this._customizations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationsInput() {
    return this._customizations.internalValue;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new CloudfrontDistributionTenantDomainList(this, "domain", true);
  public get domain() {
    return this._domain;
  }
  public putDomain(value: CloudfrontDistributionTenantDomain[] | cdktn.IResolvable) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // managed_certificate_request - computed: false, optional: true, required: false
  private _managedCertificateRequest = new CloudfrontDistributionTenantManagedCertificateRequestList(this, "managed_certificate_request", false);
  public get managedCertificateRequest() {
    return this._managedCertificateRequest;
  }
  public putManagedCertificateRequest(value: CloudfrontDistributionTenantManagedCertificateRequest[] | cdktn.IResolvable) {
    this._managedCertificateRequest.internalValue = value;
  }
  public resetManagedCertificateRequest() {
    this._managedCertificateRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedCertificateRequestInput() {
    return this._managedCertificateRequest.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new CloudfrontDistributionTenantParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: CloudfrontDistributionTenantParameter[] | cdktn.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudfrontDistributionTenantTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudfrontDistributionTenantTimeouts) {
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
      connection_group_id: cdktn.stringToTerraform(this._connectionGroupId),
      distribution_id: cdktn.stringToTerraform(this._distributionId),
      enabled: cdktn.booleanToTerraform(this._enabled),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      wait_for_deployment: cdktn.booleanToTerraform(this._waitForDeployment),
      customizations: cdktn.listMapper(cloudfrontDistributionTenantCustomizationsToTerraform, true)(this._customizations.internalValue),
      domain: cdktn.listMapper(cloudfrontDistributionTenantDomainToTerraform, true)(this._domain.internalValue),
      managed_certificate_request: cdktn.listMapper(cloudfrontDistributionTenantManagedCertificateRequestToTerraform, true)(this._managedCertificateRequest.internalValue),
      parameter: cdktn.listMapper(cloudfrontDistributionTenantParameterToTerraform, true)(this._parameter.internalValue),
      timeouts: cloudfrontDistributionTenantTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_group_id: {
        value: cdktn.stringToHclTerraform(this._connectionGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribution_id: {
        value: cdktn.stringToHclTerraform(this._distributionId),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      wait_for_deployment: {
        value: cdktn.booleanToHclTerraform(this._waitForDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      customizations: {
        value: cdktn.listMapperHcl(cloudfrontDistributionTenantCustomizationsToHclTerraform, true)(this._customizations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontDistributionTenantCustomizationsList",
      },
      domain: {
        value: cdktn.listMapperHcl(cloudfrontDistributionTenantDomainToHclTerraform, true)(this._domain.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudfrontDistributionTenantDomainList",
      },
      managed_certificate_request: {
        value: cdktn.listMapperHcl(cloudfrontDistributionTenantManagedCertificateRequestToHclTerraform, true)(this._managedCertificateRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontDistributionTenantManagedCertificateRequestList",
      },
      parameter: {
        value: cdktn.listMapperHcl(cloudfrontDistributionTenantParameterToHclTerraform, true)(this._parameter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudfrontDistributionTenantParameterList",
      },
      timeouts: {
        value: cloudfrontDistributionTenantTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudfrontDistributionTenantTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
