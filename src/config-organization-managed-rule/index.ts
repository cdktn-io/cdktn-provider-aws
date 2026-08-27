/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConfigOrganizationManagedRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule#description ConfigOrganizationManagedRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule#excluded_accounts ConfigOrganizationManagedRule#excluded_accounts}
  */
  readonly excludedAccounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule#id ConfigOrganizationManagedRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule#input_parameters ConfigOrganizationManagedRule#input_parameters}
  */
  readonly inputParameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule#maximum_execution_frequency ConfigOrganizationManagedRule#maximum_execution_frequency}
  */
  readonly maximumExecutionFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule#name ConfigOrganizationManagedRule#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule#region ConfigOrganizationManagedRule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule#resource_id_scope ConfigOrganizationManagedRule#resource_id_scope}
  */
  readonly resourceIdScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule#resource_types_scope ConfigOrganizationManagedRule#resource_types_scope}
  */
  readonly resourceTypesScope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule#rule_identifier ConfigOrganizationManagedRule#rule_identifier}
  */
  readonly ruleIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule#tag_key_scope ConfigOrganizationManagedRule#tag_key_scope}
  */
  readonly tagKeyScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule#tag_value_scope ConfigOrganizationManagedRule#tag_value_scope}
  */
  readonly tagValueScope?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule#timeouts ConfigOrganizationManagedRule#timeouts}
  */
  readonly timeouts?: ConfigOrganizationManagedRuleTimeouts;
}
export interface ConfigOrganizationManagedRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule#create ConfigOrganizationManagedRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule#delete ConfigOrganizationManagedRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule#update ConfigOrganizationManagedRule#update}
  */
  readonly update?: string;
}

export function configOrganizationManagedRuleTimeoutsToTerraform(struct?: ConfigOrganizationManagedRuleTimeouts | cdktn.IResolvable): any {
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


export function configOrganizationManagedRuleTimeoutsToHclTerraform(struct?: ConfigOrganizationManagedRuleTimeouts | cdktn.IResolvable): any {
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

export class ConfigOrganizationManagedRuleTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigOrganizationManagedRuleTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ConfigOrganizationManagedRuleTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule aws_config_organization_managed_rule}
*/
export class ConfigOrganizationManagedRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_config_organization_managed_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConfigOrganizationManagedRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigOrganizationManagedRule to import
  * @param importFromId The id of the existing ConfigOrganizationManagedRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigOrganizationManagedRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_config_organization_managed_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/config_organization_managed_rule aws_config_organization_managed_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigOrganizationManagedRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigOrganizationManagedRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_organization_managed_rule',
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
    this._description = config.description;
    this._excludedAccounts = config.excludedAccounts;
    this._id = config.id;
    this._inputParameters = config.inputParameters;
    this._maximumExecutionFrequency = config.maximumExecutionFrequency;
    this._name = config.name;
    this._region = config.region;
    this._resourceIdScope = config.resourceIdScope;
    this._resourceTypesScope = config.resourceTypesScope;
    this._ruleIdentifier = config.ruleIdentifier;
    this._tagKeyScope = config.tagKeyScope;
    this._tagValueScope = config.tagValueScope;
    this._timeouts.internalValue = config.timeouts;
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

  // excluded_accounts - computed: false, optional: true, required: false
  private _excludedAccounts?: string[]; 
  public get excludedAccounts() {
    return cdktn.Fn.tolist(this.getListAttribute('excluded_accounts'));
  }
  public set excludedAccounts(value: string[]) {
    this._excludedAccounts = value;
  }
  public resetExcludedAccounts() {
    this._excludedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedAccountsInput() {
    return this._excludedAccounts;
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

  // input_parameters - computed: false, optional: true, required: false
  private _inputParameters?: string; 
  public get inputParameters() {
    return this.getStringAttribute('input_parameters');
  }
  public set inputParameters(value: string) {
    this._inputParameters = value;
  }
  public resetInputParameters() {
    this._inputParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputParametersInput() {
    return this._inputParameters;
  }

  // maximum_execution_frequency - computed: false, optional: true, required: false
  private _maximumExecutionFrequency?: string; 
  public get maximumExecutionFrequency() {
    return this.getStringAttribute('maximum_execution_frequency');
  }
  public set maximumExecutionFrequency(value: string) {
    this._maximumExecutionFrequency = value;
  }
  public resetMaximumExecutionFrequency() {
    this._maximumExecutionFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumExecutionFrequencyInput() {
    return this._maximumExecutionFrequency;
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

  // resource_id_scope - computed: false, optional: true, required: false
  private _resourceIdScope?: string; 
  public get resourceIdScope() {
    return this.getStringAttribute('resource_id_scope');
  }
  public set resourceIdScope(value: string) {
    this._resourceIdScope = value;
  }
  public resetResourceIdScope() {
    this._resourceIdScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdScopeInput() {
    return this._resourceIdScope;
  }

  // resource_types_scope - computed: false, optional: true, required: false
  private _resourceTypesScope?: string[]; 
  public get resourceTypesScope() {
    return cdktn.Fn.tolist(this.getListAttribute('resource_types_scope'));
  }
  public set resourceTypesScope(value: string[]) {
    this._resourceTypesScope = value;
  }
  public resetResourceTypesScope() {
    this._resourceTypesScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesScopeInput() {
    return this._resourceTypesScope;
  }

  // rule_identifier - computed: false, optional: false, required: true
  private _ruleIdentifier?: string; 
  public get ruleIdentifier() {
    return this.getStringAttribute('rule_identifier');
  }
  public set ruleIdentifier(value: string) {
    this._ruleIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdentifierInput() {
    return this._ruleIdentifier;
  }

  // tag_key_scope - computed: false, optional: true, required: false
  private _tagKeyScope?: string; 
  public get tagKeyScope() {
    return this.getStringAttribute('tag_key_scope');
  }
  public set tagKeyScope(value: string) {
    this._tagKeyScope = value;
  }
  public resetTagKeyScope() {
    this._tagKeyScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyScopeInput() {
    return this._tagKeyScope;
  }

  // tag_value_scope - computed: false, optional: true, required: false
  private _tagValueScope?: string; 
  public get tagValueScope() {
    return this.getStringAttribute('tag_value_scope');
  }
  public set tagValueScope(value: string) {
    this._tagValueScope = value;
  }
  public resetTagValueScope() {
    this._tagValueScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueScopeInput() {
    return this._tagValueScope;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConfigOrganizationManagedRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConfigOrganizationManagedRuleTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      excluded_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(this._excludedAccounts),
      id: cdktn.stringToTerraform(this._id),
      input_parameters: cdktn.stringToTerraform(this._inputParameters),
      maximum_execution_frequency: cdktn.stringToTerraform(this._maximumExecutionFrequency),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      resource_id_scope: cdktn.stringToTerraform(this._resourceIdScope),
      resource_types_scope: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourceTypesScope),
      rule_identifier: cdktn.stringToTerraform(this._ruleIdentifier),
      tag_key_scope: cdktn.stringToTerraform(this._tagKeyScope),
      tag_value_scope: cdktn.stringToTerraform(this._tagValueScope),
      timeouts: configOrganizationManagedRuleTimeoutsToTerraform(this._timeouts.internalValue),
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
      excluded_accounts: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._excludedAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_parameters: {
        value: cdktn.stringToHclTerraform(this._inputParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_execution_frequency: {
        value: cdktn.stringToHclTerraform(this._maximumExecutionFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      resource_id_scope: {
        value: cdktn.stringToHclTerraform(this._resourceIdScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_types_scope: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourceTypesScope),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rule_identifier: {
        value: cdktn.stringToHclTerraform(this._ruleIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_key_scope: {
        value: cdktn.stringToHclTerraform(this._tagKeyScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_value_scope: {
        value: cdktn.stringToHclTerraform(this._tagValueScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: configOrganizationManagedRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigOrganizationManagedRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
