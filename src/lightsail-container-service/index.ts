/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LightsailContainerServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#id LightsailContainerService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#is_disabled LightsailContainerService#is_disabled}
  */
  readonly isDisabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#name LightsailContainerService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#power LightsailContainerService#power}
  */
  readonly power: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#region LightsailContainerService#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#scale LightsailContainerService#scale}
  */
  readonly scale: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#tags LightsailContainerService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#tags_all LightsailContainerService#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * private_registry_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#private_registry_access LightsailContainerService#private_registry_access}
  */
  readonly privateRegistryAccess?: LightsailContainerServicePrivateRegistryAccess;
  /**
  * public_domain_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#public_domain_names LightsailContainerService#public_domain_names}
  */
  readonly publicDomainNames?: LightsailContainerServicePublicDomainNames;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#timeouts LightsailContainerService#timeouts}
  */
  readonly timeouts?: LightsailContainerServiceTimeouts;
}
export interface LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#is_active LightsailContainerService#is_active}
  */
  readonly isActive?: boolean | cdktn.IResolvable;
}

export function lightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleToTerraform(struct?: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference | LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_active: cdktn.booleanToTerraform(struct!.isActive),
  }
}


export function lightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleToHclTerraform(struct?: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference | LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_active: {
      value: cdktn.booleanToHclTerraform(struct!.isActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isActive = this._isActive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isActive = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isActive = value.isActive;
    }
  }

  // is_active - computed: false, optional: true, required: false
  private _isActive?: boolean | cdktn.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktn.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // principal_arn - computed: true, optional: false, required: false
  public get principalArn() {
    return this.getStringAttribute('principal_arn');
  }
}
export interface LightsailContainerServicePrivateRegistryAccess {
  /**
  * ecr_image_puller_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#ecr_image_puller_role LightsailContainerService#ecr_image_puller_role}
  */
  readonly ecrImagePullerRole?: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole;
}

export function lightsailContainerServicePrivateRegistryAccessToTerraform(struct?: LightsailContainerServicePrivateRegistryAccessOutputReference | LightsailContainerServicePrivateRegistryAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ecr_image_puller_role: lightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleToTerraform(struct!.ecrImagePullerRole),
  }
}


export function lightsailContainerServicePrivateRegistryAccessToHclTerraform(struct?: LightsailContainerServicePrivateRegistryAccessOutputReference | LightsailContainerServicePrivateRegistryAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ecr_image_puller_role: {
      value: lightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleToHclTerraform(struct!.ecrImagePullerRole),
      isBlock: true,
      type: "list",
      storageClassType: "LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LightsailContainerServicePrivateRegistryAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LightsailContainerServicePrivateRegistryAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ecrImagePullerRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImagePullerRole = this._ecrImagePullerRole?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LightsailContainerServicePrivateRegistryAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ecrImagePullerRole.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ecrImagePullerRole.internalValue = value.ecrImagePullerRole;
    }
  }

  // ecr_image_puller_role - computed: false, optional: true, required: false
  private _ecrImagePullerRole = new LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference(this, "ecr_image_puller_role");
  public get ecrImagePullerRole() {
    return this._ecrImagePullerRole;
  }
  public putEcrImagePullerRole(value: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole) {
    this._ecrImagePullerRole.internalValue = value;
  }
  public resetEcrImagePullerRole() {
    this._ecrImagePullerRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImagePullerRoleInput() {
    return this._ecrImagePullerRole.internalValue;
  }
}
export interface LightsailContainerServicePublicDomainNamesCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#certificate_name LightsailContainerService#certificate_name}
  */
  readonly certificateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#domain_names LightsailContainerService#domain_names}
  */
  readonly domainNames: string[];
}

export function lightsailContainerServicePublicDomainNamesCertificateToTerraform(struct?: LightsailContainerServicePublicDomainNamesCertificate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_name: cdktn.stringToTerraform(struct!.certificateName),
    domain_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.domainNames),
  }
}


export function lightsailContainerServicePublicDomainNamesCertificateToHclTerraform(struct?: LightsailContainerServicePublicDomainNamesCertificate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_name: {
      value: cdktn.stringToHclTerraform(struct!.certificateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.domainNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LightsailContainerServicePublicDomainNamesCertificateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LightsailContainerServicePublicDomainNamesCertificate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateName = this._certificateName;
    }
    if (this._domainNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNames = this._domainNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LightsailContainerServicePublicDomainNamesCertificate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateName = undefined;
      this._domainNames = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateName = value.certificateName;
      this._domainNames = value.domainNames;
    }
  }

  // certificate_name - computed: false, optional: false, required: true
  private _certificateName?: string; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName;
  }

  // domain_names - computed: false, optional: false, required: true
  private _domainNames?: string[]; 
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }
}

export class LightsailContainerServicePublicDomainNamesCertificateList extends cdktn.ComplexList {
  public internalValue? : LightsailContainerServicePublicDomainNamesCertificate[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LightsailContainerServicePublicDomainNamesCertificateOutputReference {
    return new LightsailContainerServicePublicDomainNamesCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LightsailContainerServicePublicDomainNames {
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#certificate LightsailContainerService#certificate}
  */
  readonly certificate: LightsailContainerServicePublicDomainNamesCertificate[] | cdktn.IResolvable;
}

export function lightsailContainerServicePublicDomainNamesToTerraform(struct?: LightsailContainerServicePublicDomainNamesOutputReference | LightsailContainerServicePublicDomainNames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktn.listMapper(lightsailContainerServicePublicDomainNamesCertificateToTerraform, true)(struct!.certificate),
  }
}


export function lightsailContainerServicePublicDomainNamesToHclTerraform(struct?: LightsailContainerServicePublicDomainNamesOutputReference | LightsailContainerServicePublicDomainNames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktn.listMapperHcl(lightsailContainerServicePublicDomainNamesCertificateToHclTerraform, true)(struct!.certificate),
      isBlock: true,
      type: "set",
      storageClassType: "LightsailContainerServicePublicDomainNamesCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LightsailContainerServicePublicDomainNamesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LightsailContainerServicePublicDomainNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LightsailContainerServicePublicDomainNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate.internalValue = value.certificate;
    }
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate = new LightsailContainerServicePublicDomainNamesCertificateList(this, "certificate", true);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: LightsailContainerServicePublicDomainNamesCertificate[] | cdktn.IResolvable) {
    this._certificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }
}
export interface LightsailContainerServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#create LightsailContainerService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#delete LightsailContainerService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#update LightsailContainerService#update}
  */
  readonly update?: string;
}

export function lightsailContainerServiceTimeoutsToTerraform(struct?: LightsailContainerServiceTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function lightsailContainerServiceTimeoutsToHclTerraform(struct?: LightsailContainerServiceTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class LightsailContainerServiceTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LightsailContainerServiceTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LightsailContainerServiceTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service aws_lightsail_container_service}
*/
export class LightsailContainerService extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lightsail_container_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LightsailContainerService resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LightsailContainerService to import
  * @param importFromId The id of the existing LightsailContainerService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LightsailContainerService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lightsail_container_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/lightsail_container_service aws_lightsail_container_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LightsailContainerServiceConfig
  */
  public constructor(scope: Construct, id: string, config: LightsailContainerServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lightsail_container_service',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.40.0',
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
    this._isDisabled = config.isDisabled;
    this._name = config.name;
    this._power = config.power;
    this._region = config.region;
    this._scale = config.scale;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._privateRegistryAccess.internalValue = config.privateRegistryAccess;
    this._publicDomainNames.internalValue = config.publicDomainNames;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // is_disabled - computed: false, optional: true, required: false
  private _isDisabled?: boolean | cdktn.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktn.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
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

  // power - computed: false, optional: false, required: true
  private _power?: string; 
  public get power() {
    return this.getStringAttribute('power');
  }
  public set power(value: string) {
    this._power = value;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // power_id - computed: true, optional: false, required: false
  public get powerId() {
    return this.getStringAttribute('power_id');
  }

  // principal_arn - computed: true, optional: false, required: false
  public get principalArn() {
    return this.getStringAttribute('principal_arn');
  }

  // private_domain_name - computed: true, optional: false, required: false
  public get privateDomainName() {
    return this.getStringAttribute('private_domain_name');
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

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // scale - computed: false, optional: false, required: true
  private _scale?: number; 
  public get scale() {
    return this.getNumberAttribute('scale');
  }
  public set scale(value: number) {
    this._scale = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInput() {
    return this._scale;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // private_registry_access - computed: false, optional: true, required: false
  private _privateRegistryAccess = new LightsailContainerServicePrivateRegistryAccessOutputReference(this, "private_registry_access");
  public get privateRegistryAccess() {
    return this._privateRegistryAccess;
  }
  public putPrivateRegistryAccess(value: LightsailContainerServicePrivateRegistryAccess) {
    this._privateRegistryAccess.internalValue = value;
  }
  public resetPrivateRegistryAccess() {
    this._privateRegistryAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateRegistryAccessInput() {
    return this._privateRegistryAccess.internalValue;
  }

  // public_domain_names - computed: false, optional: true, required: false
  private _publicDomainNames = new LightsailContainerServicePublicDomainNamesOutputReference(this, "public_domain_names");
  public get publicDomainNames() {
    return this._publicDomainNames;
  }
  public putPublicDomainNames(value: LightsailContainerServicePublicDomainNames) {
    this._publicDomainNames.internalValue = value;
  }
  public resetPublicDomainNames() {
    this._publicDomainNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicDomainNamesInput() {
    return this._publicDomainNames.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LightsailContainerServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LightsailContainerServiceTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      is_disabled: cdktn.booleanToTerraform(this._isDisabled),
      name: cdktn.stringToTerraform(this._name),
      power: cdktn.stringToTerraform(this._power),
      region: cdktn.stringToTerraform(this._region),
      scale: cdktn.numberToTerraform(this._scale),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      private_registry_access: lightsailContainerServicePrivateRegistryAccessToTerraform(this._privateRegistryAccess.internalValue),
      public_domain_names: lightsailContainerServicePublicDomainNamesToTerraform(this._publicDomainNames.internalValue),
      timeouts: lightsailContainerServiceTimeoutsToTerraform(this._timeouts.internalValue),
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
      is_disabled: {
        value: cdktn.booleanToHclTerraform(this._isDisabled),
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
      power: {
        value: cdktn.stringToHclTerraform(this._power),
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
      scale: {
        value: cdktn.numberToHclTerraform(this._scale),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      private_registry_access: {
        value: lightsailContainerServicePrivateRegistryAccessToHclTerraform(this._privateRegistryAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LightsailContainerServicePrivateRegistryAccessList",
      },
      public_domain_names: {
        value: lightsailContainerServicePublicDomainNamesToHclTerraform(this._publicDomainNames.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LightsailContainerServicePublicDomainNamesList",
      },
      timeouts: {
        value: lightsailContainerServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LightsailContainerServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
