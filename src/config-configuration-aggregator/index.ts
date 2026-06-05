/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/config_configuration_aggregator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConfigConfigurationAggregatorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/config_configuration_aggregator#id ConfigConfigurationAggregator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/config_configuration_aggregator#name ConfigConfigurationAggregator#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/config_configuration_aggregator#region ConfigConfigurationAggregator#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/config_configuration_aggregator#tags ConfigConfigurationAggregator#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/config_configuration_aggregator#tags_all ConfigConfigurationAggregator#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * account_aggregation_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/config_configuration_aggregator#account_aggregation_source ConfigConfigurationAggregator#account_aggregation_source}
  */
  readonly accountAggregationSource?: ConfigConfigurationAggregatorAccountAggregationSource;
  /**
  * organization_aggregation_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/config_configuration_aggregator#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}
  */
  readonly organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource;
}
export interface ConfigConfigurationAggregatorAccountAggregationSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/config_configuration_aggregator#account_ids ConfigConfigurationAggregator#account_ids}
  */
  readonly accountIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/config_configuration_aggregator#all_regions ConfigConfigurationAggregator#all_regions}
  */
  readonly allRegions?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/config_configuration_aggregator#regions ConfigConfigurationAggregator#regions}
  */
  readonly regions?: string[];
}

export function configConfigurationAggregatorAccountAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorAccountAggregationSourceOutputReference | ConfigConfigurationAggregatorAccountAggregationSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accountIds),
    all_regions: cdktn.booleanToTerraform(struct!.allRegions),
    regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
  }
}


export function configConfigurationAggregatorAccountAggregationSourceToHclTerraform(struct?: ConfigConfigurationAggregatorAccountAggregationSourceOutputReference | ConfigConfigurationAggregatorAccountAggregationSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accountIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    all_regions: {
      value: cdktn.booleanToHclTerraform(struct!.allRegions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConfigurationAggregatorAccountAggregationSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigConfigurationAggregatorAccountAggregationSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._allRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRegions = this._allRegions;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigurationAggregatorAccountAggregationSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountIds = undefined;
      this._allRegions = undefined;
      this._regions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountIds = value.accountIds;
      this._allRegions = value.allRegions;
      this._regions = value.regions;
    }
  }

  // account_ids - computed: false, optional: false, required: true
  private _accountIds?: string[]; 
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // all_regions - computed: false, optional: true, required: false
  private _allRegions?: boolean | cdktn.IResolvable; 
  public get allRegions() {
    return this.getBooleanAttribute('all_regions');
  }
  public set allRegions(value: boolean | cdktn.IResolvable) {
    this._allRegions = value;
  }
  public resetAllRegions() {
    this._allRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRegionsInput() {
    return this._allRegions;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }
}
export interface ConfigConfigurationAggregatorOrganizationAggregationSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/config_configuration_aggregator#all_regions ConfigConfigurationAggregator#all_regions}
  */
  readonly allRegions?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/config_configuration_aggregator#regions ConfigConfigurationAggregator#regions}
  */
  readonly regions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/config_configuration_aggregator#role_arn ConfigConfigurationAggregator#role_arn}
  */
  readonly roleArn: string;
}

export function configConfigurationAggregatorOrganizationAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference | ConfigConfigurationAggregatorOrganizationAggregationSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_regions: cdktn.booleanToTerraform(struct!.allRegions),
    regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function configConfigurationAggregatorOrganizationAggregationSourceToHclTerraform(struct?: ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference | ConfigConfigurationAggregatorOrganizationAggregationSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_regions: {
      value: cdktn.booleanToHclTerraform(struct!.allRegions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigConfigurationAggregatorOrganizationAggregationSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRegions = this._allRegions;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigurationAggregatorOrganizationAggregationSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRegions = undefined;
      this._regions = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRegions = value.allRegions;
      this._regions = value.regions;
      this._roleArn = value.roleArn;
    }
  }

  // all_regions - computed: false, optional: true, required: false
  private _allRegions?: boolean | cdktn.IResolvable; 
  public get allRegions() {
    return this.getBooleanAttribute('all_regions');
  }
  public set allRegions(value: boolean | cdktn.IResolvable) {
    this._allRegions = value;
  }
  public resetAllRegions() {
    this._allRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRegionsInput() {
    return this._allRegions;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/config_configuration_aggregator aws_config_configuration_aggregator}
*/
export class ConfigConfigurationAggregator extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_config_configuration_aggregator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConfigConfigurationAggregator resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigConfigurationAggregator to import
  * @param importFromId The id of the existing ConfigConfigurationAggregator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/config_configuration_aggregator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigConfigurationAggregator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_config_configuration_aggregator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/config_configuration_aggregator aws_config_configuration_aggregator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConfigurationAggregatorConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConfigurationAggregatorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_configuration_aggregator',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.49.0',
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
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._accountAggregationSource.internalValue = config.accountAggregationSource;
    this._organizationAggregationSource.internalValue = config.organizationAggregationSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // account_aggregation_source - computed: false, optional: true, required: false
  private _accountAggregationSource = new ConfigConfigurationAggregatorAccountAggregationSourceOutputReference(this, "account_aggregation_source");
  public get accountAggregationSource() {
    return this._accountAggregationSource;
  }
  public putAccountAggregationSource(value: ConfigConfigurationAggregatorAccountAggregationSource) {
    this._accountAggregationSource.internalValue = value;
  }
  public resetAccountAggregationSource() {
    this._accountAggregationSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAggregationSourceInput() {
    return this._accountAggregationSource.internalValue;
  }

  // organization_aggregation_source - computed: false, optional: true, required: false
  private _organizationAggregationSource = new ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference(this, "organization_aggregation_source");
  public get organizationAggregationSource() {
    return this._organizationAggregationSource;
  }
  public putOrganizationAggregationSource(value: ConfigConfigurationAggregatorOrganizationAggregationSource) {
    this._organizationAggregationSource.internalValue = value;
  }
  public resetOrganizationAggregationSource() {
    this._organizationAggregationSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationAggregationSourceInput() {
    return this._organizationAggregationSource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      account_aggregation_source: configConfigurationAggregatorAccountAggregationSourceToTerraform(this._accountAggregationSource.internalValue),
      organization_aggregation_source: configConfigurationAggregatorOrganizationAggregationSourceToTerraform(this._organizationAggregationSource.internalValue),
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
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      account_aggregation_source: {
        value: configConfigurationAggregatorAccountAggregationSourceToHclTerraform(this._accountAggregationSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigConfigurationAggregatorAccountAggregationSourceList",
      },
      organization_aggregation_source: {
        value: configConfigurationAggregatorOrganizationAggregationSourceToHclTerraform(this._organizationAggregationSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigConfigurationAggregatorOrganizationAggregationSourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
