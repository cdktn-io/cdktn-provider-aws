/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudwatchomniOrganizationDomainConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#domain_access_role_arn CloudwatchomniOrganizationDomain#domain_access_role_arn}
  */
  readonly domainAccessRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_providers CloudwatchomniOrganizationDomain#identity_providers}
  */
  readonly identityProviders: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#name CloudwatchomniOrganizationDomain#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#region CloudwatchomniOrganizationDomain#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#tags CloudwatchomniOrganizationDomain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * identity_provider_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_provider_configuration CloudwatchomniOrganizationDomain#identity_provider_configuration}
  */
  readonly identityProviderConfiguration?: CloudwatchomniOrganizationDomainIdentityProviderConfiguration[] | cdktn.IResolvable;
}
export interface CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_center_instance_arn CloudwatchomniOrganizationDomain#identity_center_instance_arn}
  */
  readonly identityCenterInstanceArn: string;
}

export function cloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationToTerraform(struct?: CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_center_instance_arn: cdktn.stringToTerraform(struct!.identityCenterInstanceArn),
  }
}


export function cloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationToHclTerraform(struct?: CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_center_instance_arn: {
      value: cdktn.stringToHclTerraform(struct!.identityCenterInstanceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityCenterInstanceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCenterInstanceArn = this._identityCenterInstanceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityCenterInstanceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityCenterInstanceArn = value.identityCenterInstanceArn;
    }
  }

  // identity_center_instance_arn - computed: false, optional: false, required: true
  private _identityCenterInstanceArn?: string; 
  public get identityCenterInstanceArn() {
    return this.getStringAttribute('identity_center_instance_arn');
  }
  public set identityCenterInstanceArn(value: string) {
    this._identityCenterInstanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterInstanceArnInput() {
    return this._identityCenterInstanceArn;
  }
}

export class CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference {
    return new CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchomniOrganizationDomainIdentityProviderConfiguration {
  /**
  * identity_center_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#identity_center_configuration CloudwatchomniOrganizationDomain#identity_center_configuration}
  */
  readonly identityCenterConfiguration?: CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration[] | cdktn.IResolvable;
}

export function cloudwatchomniOrganizationDomainIdentityProviderConfigurationToTerraform(struct?: CloudwatchomniOrganizationDomainIdentityProviderConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_center_configuration: cdktn.listMapper(cloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationToTerraform, true)(struct!.identityCenterConfiguration),
  }
}


export function cloudwatchomniOrganizationDomainIdentityProviderConfigurationToHclTerraform(struct?: CloudwatchomniOrganizationDomainIdentityProviderConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_center_configuration: {
      value: cdktn.listMapperHcl(cloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationToHclTerraform, true)(struct!.identityCenterConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniOrganizationDomainIdentityProviderConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityCenterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCenterConfiguration = this._identityCenterConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchomniOrganizationDomainIdentityProviderConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityCenterConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityCenterConfiguration.internalValue = value.identityCenterConfiguration;
    }
  }

  // identity_center_configuration - computed: false, optional: true, required: false
  private _identityCenterConfiguration = new CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfigurationList(this, "identity_center_configuration", false);
  public get identityCenterConfiguration() {
    return this._identityCenterConfiguration;
  }
  public putIdentityCenterConfiguration(value: CloudwatchomniOrganizationDomainIdentityProviderConfigurationIdentityCenterConfiguration[] | cdktn.IResolvable) {
    this._identityCenterConfiguration.internalValue = value;
  }
  public resetIdentityCenterConfiguration() {
    this._identityCenterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterConfigurationInput() {
    return this._identityCenterConfiguration.internalValue;
  }
}

export class CloudwatchomniOrganizationDomainIdentityProviderConfigurationList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniOrganizationDomainIdentityProviderConfiguration[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference {
    return new CloudwatchomniOrganizationDomainIdentityProviderConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain aws_cloudwatchomni_organization_domain}
*/
export class CloudwatchomniOrganizationDomain extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatchomni_organization_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudwatchomniOrganizationDomain resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchomniOrganizationDomain to import
  * @param importFromId The id of the existing CloudwatchomniOrganizationDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchomniOrganizationDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatchomni_organization_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_organization_domain aws_cloudwatchomni_organization_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchomniOrganizationDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchomniOrganizationDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatchomni_organization_domain',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.71.0',
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
    this._domainAccessRoleArn = config.domainAccessRoleArn;
    this._identityProviders = config.identityProviders;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._identityProviderConfiguration.internalValue = config.identityProviderConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // custom_endpoint_urls - computed: true, optional: false, required: false
  public get customEndpointUrls() {
    return this.getListAttribute('custom_endpoint_urls');
  }

  // domain_access_role_arn - computed: false, optional: false, required: true
  private _domainAccessRoleArn?: string; 
  public get domainAccessRoleArn() {
    return this.getStringAttribute('domain_access_role_arn');
  }
  public set domainAccessRoleArn(value: string) {
    this._domainAccessRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAccessRoleArnInput() {
    return this._domainAccessRoleArn;
  }

  // domain_endpoint_url - computed: true, optional: false, required: false
  public get domainEndpointUrl() {
    return this.getStringAttribute('domain_endpoint_url');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // identity_center_application_arn - computed: true, optional: false, required: false
  public get identityCenterApplicationArn() {
    return this.getStringAttribute('identity_center_application_arn');
  }

  // identity_providers - computed: false, optional: false, required: true
  private _identityProviders?: string[]; 
  public get identityProviders() {
    return cdktn.Fn.tolist(this.getListAttribute('identity_providers'));
  }
  public set identityProviders(value: string[]) {
    this._identityProviders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProvidersInput() {
    return this._identityProviders;
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

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // owner_account_id - computed: true, optional: false, required: false
  public get ownerAccountId() {
    return this.getStringAttribute('owner_account_id');
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

  // identity_provider_configuration - computed: false, optional: true, required: false
  private _identityProviderConfiguration = new CloudwatchomniOrganizationDomainIdentityProviderConfigurationList(this, "identity_provider_configuration", false);
  public get identityProviderConfiguration() {
    return this._identityProviderConfiguration;
  }
  public putIdentityProviderConfiguration(value: CloudwatchomniOrganizationDomainIdentityProviderConfiguration[] | cdktn.IResolvable) {
    this._identityProviderConfiguration.internalValue = value;
  }
  public resetIdentityProviderConfiguration() {
    this._identityProviderConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderConfigurationInput() {
    return this._identityProviderConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_access_role_arn: cdktn.stringToTerraform(this._domainAccessRoleArn),
      identity_providers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._identityProviders),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      identity_provider_configuration: cdktn.listMapper(cloudwatchomniOrganizationDomainIdentityProviderConfigurationToTerraform, true)(this._identityProviderConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_access_role_arn: {
        value: cdktn.stringToHclTerraform(this._domainAccessRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_providers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._identityProviders),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      identity_provider_configuration: {
        value: cdktn.listMapperHcl(cloudwatchomniOrganizationDomainIdentityProviderConfigurationToHclTerraform, true)(this._identityProviderConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchomniOrganizationDomainIdentityProviderConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
