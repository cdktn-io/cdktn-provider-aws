/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworksecuritymanagerPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#description NetworksecuritymanagerPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}
  */
  readonly firewallType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#is_published NetworksecuritymanagerPolicy#is_published}
  */
  readonly isPublished?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#name NetworksecuritymanagerPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}
  */
  readonly priority: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#region NetworksecuritymanagerPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#configuration NetworksecuritymanagerPolicy#configuration}
  */
  readonly configuration?: NetworksecuritymanagerPolicyConfiguration[] | cdktn.IResolvable;
  /**
  * template_or_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#template_or_rule NetworksecuritymanagerPolicy#template_or_rule}
  */
  readonly templateOrRule?: NetworksecuritymanagerPolicyTemplateOrRule[] | cdktn.IResolvable;
}
export interface NetworksecuritymanagerPolicyConfigurationWafConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#conflict_resolution NetworksecuritymanagerPolicy#conflict_resolution}
  */
  readonly conflictResolution: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#existing_customer_web_acl_resolution NetworksecuritymanagerPolicy#existing_customer_web_acl_resolution}
  */
  readonly existingCustomerWebAclResolution: string;
}

export function networksecuritymanagerPolicyConfigurationWafConfigToTerraform(struct?: NetworksecuritymanagerPolicyConfigurationWafConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conflict_resolution: cdktn.stringToTerraform(struct!.conflictResolution),
    existing_customer_web_acl_resolution: cdktn.stringToTerraform(struct!.existingCustomerWebAclResolution),
  }
}


export function networksecuritymanagerPolicyConfigurationWafConfigToHclTerraform(struct?: NetworksecuritymanagerPolicyConfigurationWafConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    conflict_resolution: {
      value: cdktn.stringToHclTerraform(struct!.conflictResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    existing_customer_web_acl_resolution: {
      value: cdktn.stringToHclTerraform(struct!.existingCustomerWebAclResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerPolicyConfigurationWafConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conflictResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictResolution = this._conflictResolution;
    }
    if (this._existingCustomerWebAclResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingCustomerWebAclResolution = this._existingCustomerWebAclResolution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerPolicyConfigurationWafConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conflictResolution = undefined;
      this._existingCustomerWebAclResolution = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conflictResolution = value.conflictResolution;
      this._existingCustomerWebAclResolution = value.existingCustomerWebAclResolution;
    }
  }

  // conflict_resolution - computed: false, optional: false, required: true
  private _conflictResolution?: string; 
  public get conflictResolution() {
    return this.getStringAttribute('conflict_resolution');
  }
  public set conflictResolution(value: string) {
    this._conflictResolution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolutionInput() {
    return this._conflictResolution;
  }

  // existing_customer_web_acl_resolution - computed: false, optional: false, required: true
  private _existingCustomerWebAclResolution?: string; 
  public get existingCustomerWebAclResolution() {
    return this.getStringAttribute('existing_customer_web_acl_resolution');
  }
  public set existingCustomerWebAclResolution(value: string) {
    this._existingCustomerWebAclResolution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get existingCustomerWebAclResolutionInput() {
    return this._existingCustomerWebAclResolution;
  }
}

export class NetworksecuritymanagerPolicyConfigurationWafConfigList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerPolicyConfigurationWafConfig[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference {
    return new NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#remediation_enabled NetworksecuritymanagerPolicy#remediation_enabled}
  */
  readonly remediationEnabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#resources_clean_up NetworksecuritymanagerPolicy#resources_clean_up}
  */
  readonly resourcesCleanUp: boolean | cdktn.IResolvable;
  /**
  * waf_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#waf_config NetworksecuritymanagerPolicy#waf_config}
  */
  readonly wafConfig?: NetworksecuritymanagerPolicyConfigurationWafConfig[] | cdktn.IResolvable;
}

export function networksecuritymanagerPolicyConfigurationToTerraform(struct?: NetworksecuritymanagerPolicyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    remediation_enabled: cdktn.booleanToTerraform(struct!.remediationEnabled),
    resources_clean_up: cdktn.booleanToTerraform(struct!.resourcesCleanUp),
    waf_config: cdktn.listMapper(networksecuritymanagerPolicyConfigurationWafConfigToTerraform, true)(struct!.wafConfig),
  }
}


export function networksecuritymanagerPolicyConfigurationToHclTerraform(struct?: NetworksecuritymanagerPolicyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    remediation_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.remediationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources_clean_up: {
      value: cdktn.booleanToHclTerraform(struct!.resourcesCleanUp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    waf_config: {
      value: cdktn.listMapperHcl(networksecuritymanagerPolicyConfigurationWafConfigToHclTerraform, true)(struct!.wafConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksecuritymanagerPolicyConfigurationWafConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerPolicyConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerPolicyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remediationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediationEnabled = this._remediationEnabled;
    }
    if (this._resourcesCleanUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcesCleanUp = this._resourcesCleanUp;
    }
    if (this._wafConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafConfig = this._wafConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerPolicyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remediationEnabled = undefined;
      this._resourcesCleanUp = undefined;
      this._wafConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remediationEnabled = value.remediationEnabled;
      this._resourcesCleanUp = value.resourcesCleanUp;
      this._wafConfig.internalValue = value.wafConfig;
    }
  }

  // remediation_enabled - computed: false, optional: false, required: true
  private _remediationEnabled?: boolean | cdktn.IResolvable; 
  public get remediationEnabled() {
    return this.getBooleanAttribute('remediation_enabled');
  }
  public set remediationEnabled(value: boolean | cdktn.IResolvable) {
    this._remediationEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationEnabledInput() {
    return this._remediationEnabled;
  }

  // resources_clean_up - computed: false, optional: false, required: true
  private _resourcesCleanUp?: boolean | cdktn.IResolvable; 
  public get resourcesCleanUp() {
    return this.getBooleanAttribute('resources_clean_up');
  }
  public set resourcesCleanUp(value: boolean | cdktn.IResolvable) {
    this._resourcesCleanUp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesCleanUpInput() {
    return this._resourcesCleanUp;
  }

  // waf_config - computed: false, optional: true, required: false
  private _wafConfig = new NetworksecuritymanagerPolicyConfigurationWafConfigList(this, "waf_config", false);
  public get wafConfig() {
    return this._wafConfig;
  }
  public putWafConfig(value: NetworksecuritymanagerPolicyConfigurationWafConfig[] | cdktn.IResolvable) {
    this._wafConfig.internalValue = value;
  }
  public resetWafConfig() {
    this._wafConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafConfigInput() {
    return this._wafConfig.internalValue;
  }
}

export class NetworksecuritymanagerPolicyConfigurationList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerPolicyConfiguration[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerPolicyConfigurationOutputReference {
    return new NetworksecuritymanagerPolicyConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksecuritymanagerPolicyTemplateOrRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#rule_identifier NetworksecuritymanagerPolicy#rule_identifier}
  */
  readonly ruleIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#template_identifier NetworksecuritymanagerPolicy#template_identifier}
  */
  readonly templateIdentifier?: string;
}

export function networksecuritymanagerPolicyTemplateOrRuleToTerraform(struct?: NetworksecuritymanagerPolicyTemplateOrRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule_identifier: cdktn.stringToTerraform(struct!.ruleIdentifier),
    template_identifier: cdktn.stringToTerraform(struct!.templateIdentifier),
  }
}


export function networksecuritymanagerPolicyTemplateOrRuleToHclTerraform(struct?: NetworksecuritymanagerPolicyTemplateOrRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule_identifier: {
      value: cdktn.stringToHclTerraform(struct!.ruleIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_identifier: {
      value: cdktn.stringToHclTerraform(struct!.templateIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerPolicyTemplateOrRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerPolicyTemplateOrRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleIdentifier = this._ruleIdentifier;
    }
    if (this._templateIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIdentifier = this._templateIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerPolicyTemplateOrRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleIdentifier = undefined;
      this._templateIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleIdentifier = value.ruleIdentifier;
      this._templateIdentifier = value.templateIdentifier;
    }
  }

  // rule_identifier - computed: false, optional: true, required: false
  private _ruleIdentifier?: string; 
  public get ruleIdentifier() {
    return this.getStringAttribute('rule_identifier');
  }
  public set ruleIdentifier(value: string) {
    this._ruleIdentifier = value;
  }
  public resetRuleIdentifier() {
    this._ruleIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdentifierInput() {
    return this._ruleIdentifier;
  }

  // template_identifier - computed: false, optional: true, required: false
  private _templateIdentifier?: string; 
  public get templateIdentifier() {
    return this.getStringAttribute('template_identifier');
  }
  public set templateIdentifier(value: string) {
    this._templateIdentifier = value;
  }
  public resetTemplateIdentifier() {
    this._templateIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdentifierInput() {
    return this._templateIdentifier;
  }
}

export class NetworksecuritymanagerPolicyTemplateOrRuleList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerPolicyTemplateOrRule[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerPolicyTemplateOrRuleOutputReference {
    return new NetworksecuritymanagerPolicyTemplateOrRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy aws_networksecuritymanager_policy}
*/
export class NetworksecuritymanagerPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networksecuritymanager_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworksecuritymanagerPolicy to import
  * @param importFromId The id of the existing NetworksecuritymanagerPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworksecuritymanagerPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_networksecuritymanager_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy aws_networksecuritymanager_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworksecuritymanagerPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NetworksecuritymanagerPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networksecuritymanager_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.73.0',
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
    this._description = config.description;
    this._firewallType = config.firewallType;
    this._isPublished = config.isPublished;
    this._name = config.name;
    this._priority = config.priority;
    this._region = config.region;
    this._tags = config.tags;
    this._configuration.internalValue = config.configuration;
    this._templateOrRule.internalValue = config.templateOrRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // firewall_type - computed: false, optional: false, required: true
  private _firewallType?: string; 
  public get firewallType() {
    return this.getStringAttribute('firewall_type');
  }
  public set firewallType(value: string) {
    this._firewallType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallTypeInput() {
    return this._firewallType;
  }

  // is_published - computed: true, optional: true, required: false
  private _isPublished?: boolean | cdktn.IResolvable; 
  public get isPublished() {
    return this.getBooleanAttribute('is_published');
  }
  public set isPublished(value: boolean | cdktn.IResolvable) {
    this._isPublished = value;
  }
  public resetIsPublished() {
    this._isPublished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublishedInput() {
    return this._isPublished;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new NetworksecuritymanagerPolicyConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: NetworksecuritymanagerPolicyConfiguration[] | cdktn.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // template_or_rule - computed: false, optional: true, required: false
  private _templateOrRule = new NetworksecuritymanagerPolicyTemplateOrRuleList(this, "template_or_rule", false);
  public get templateOrRule() {
    return this._templateOrRule;
  }
  public putTemplateOrRule(value: NetworksecuritymanagerPolicyTemplateOrRule[] | cdktn.IResolvable) {
    this._templateOrRule.internalValue = value;
  }
  public resetTemplateOrRule() {
    this._templateOrRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateOrRuleInput() {
    return this._templateOrRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      firewall_type: cdktn.stringToTerraform(this._firewallType),
      is_published: cdktn.booleanToTerraform(this._isPublished),
      name: cdktn.stringToTerraform(this._name),
      priority: cdktn.numberToTerraform(this._priority),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      configuration: cdktn.listMapper(networksecuritymanagerPolicyConfigurationToTerraform, true)(this._configuration.internalValue),
      template_or_rule: cdktn.listMapper(networksecuritymanagerPolicyTemplateOrRuleToTerraform, true)(this._templateOrRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_type: {
        value: cdktn.stringToHclTerraform(this._firewallType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_published: {
        value: cdktn.booleanToHclTerraform(this._isPublished),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      configuration: {
        value: cdktn.listMapperHcl(networksecuritymanagerPolicyConfigurationToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworksecuritymanagerPolicyConfigurationList",
      },
      template_or_rule: {
        value: cdktn.listMapperHcl(networksecuritymanagerPolicyTemplateOrRuleToHclTerraform, true)(this._templateOrRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworksecuritymanagerPolicyTemplateOrRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
