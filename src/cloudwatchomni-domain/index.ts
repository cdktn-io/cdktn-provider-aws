/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatchomni_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudwatchomniDomainConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatchomni_domain#identity_providers CloudwatchomniDomain#identity_providers}
  */
  readonly identityProviders: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatchomni_domain#name CloudwatchomniDomain#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatchomni_domain#region CloudwatchomniDomain#region}
  */
  readonly region?: string;
  /**
  * identity_provider_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatchomni_domain#identity_provider_configuration CloudwatchomniDomain#identity_provider_configuration}
  */
  readonly identityProviderConfiguration?: CloudwatchomniDomainIdentityProviderConfiguration[] | cdktn.IResolvable;
}
export interface CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatchomni_domain#identity_center_instance_arn CloudwatchomniDomain#identity_center_instance_arn}
  */
  readonly identityCenterInstanceArn: string;
}

export function cloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationToTerraform(struct?: CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_center_instance_arn: cdktn.stringToTerraform(struct!.identityCenterInstanceArn),
  }
}


export function cloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationToHclTerraform(struct?: CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration | cdktn.IResolvable): any {
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

export class CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration | cdktn.IResolvable | undefined) {
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

export class CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference {
    return new CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchomniDomainIdentityProviderConfiguration {
  /**
  * identity_center_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatchomni_domain#identity_center_configuration CloudwatchomniDomain#identity_center_configuration}
  */
  readonly identityCenterConfiguration?: CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration[] | cdktn.IResolvable;
}

export function cloudwatchomniDomainIdentityProviderConfigurationToTerraform(struct?: CloudwatchomniDomainIdentityProviderConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_center_configuration: cdktn.listMapper(cloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationToTerraform, true)(struct!.identityCenterConfiguration),
  }
}


export function cloudwatchomniDomainIdentityProviderConfigurationToHclTerraform(struct?: CloudwatchomniDomainIdentityProviderConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_center_configuration: {
      value: cdktn.listMapperHcl(cloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationToHclTerraform, true)(struct!.identityCenterConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniDomainIdentityProviderConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniDomainIdentityProviderConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudwatchomniDomainIdentityProviderConfiguration | cdktn.IResolvable | undefined) {
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
  private _identityCenterConfiguration = new CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfigurationList(this, "identity_center_configuration", false);
  public get identityCenterConfiguration() {
    return this._identityCenterConfiguration;
  }
  public putIdentityCenterConfiguration(value: CloudwatchomniDomainIdentityProviderConfigurationIdentityCenterConfiguration[] | cdktn.IResolvable) {
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

export class CloudwatchomniDomainIdentityProviderConfigurationList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniDomainIdentityProviderConfiguration[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniDomainIdentityProviderConfigurationOutputReference {
    return new CloudwatchomniDomainIdentityProviderConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatchomni_domain aws_cloudwatchomni_domain}
*/
export class CloudwatchomniDomain extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatchomni_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudwatchomniDomain resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchomniDomain to import
  * @param importFromId The id of the existing CloudwatchomniDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatchomni_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchomniDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatchomni_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatchomni_domain aws_cloudwatchomni_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchomniDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchomniDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatchomni_domain',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.70.0',
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
    this._identityProviders = config.identityProviders;
    this._name = config.name;
    this._region = config.region;
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

  // identity_provider_configuration - computed: false, optional: true, required: false
  private _identityProviderConfiguration = new CloudwatchomniDomainIdentityProviderConfigurationList(this, "identity_provider_configuration", false);
  public get identityProviderConfiguration() {
    return this._identityProviderConfiguration;
  }
  public putIdentityProviderConfiguration(value: CloudwatchomniDomainIdentityProviderConfiguration[] | cdktn.IResolvable) {
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
      identity_providers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._identityProviders),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      identity_provider_configuration: cdktn.listMapper(cloudwatchomniDomainIdentityProviderConfigurationToTerraform, true)(this._identityProviderConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      identity_provider_configuration: {
        value: cdktn.listMapperHcl(cloudwatchomniDomainIdentityProviderConfigurationToHclTerraform, true)(this._identityProviderConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchomniDomainIdentityProviderConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
