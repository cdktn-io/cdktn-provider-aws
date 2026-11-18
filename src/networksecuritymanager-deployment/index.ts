/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworksecuritymanagerDeploymentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_deployment#description NetworksecuritymanagerDeployment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_deployment#is_published NetworksecuritymanagerDeployment#is_published}
  */
  readonly isPublished?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_deployment#name NetworksecuritymanagerDeployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_deployment#policy_arns NetworksecuritymanagerDeployment#policy_arns}
  */
  readonly policyArns: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_deployment#region NetworksecuritymanagerDeployment#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_deployment#scope_arn NetworksecuritymanagerDeployment#scope_arn}
  */
  readonly scopeArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_deployment#tags NetworksecuritymanagerDeployment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_deployment#configuration NetworksecuritymanagerDeployment#configuration}
  */
  readonly configuration?: NetworksecuritymanagerDeploymentConfiguration[] | cdktn.IResolvable;
}
export interface NetworksecuritymanagerDeploymentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_deployment#enable_cross_account_visibility NetworksecuritymanagerDeployment#enable_cross_account_visibility}
  */
  readonly enableCrossAccountVisibility: boolean | cdktn.IResolvable;
}

export function networksecuritymanagerDeploymentConfigurationToTerraform(struct?: NetworksecuritymanagerDeploymentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_cross_account_visibility: cdktn.booleanToTerraform(struct!.enableCrossAccountVisibility),
  }
}


export function networksecuritymanagerDeploymentConfigurationToHclTerraform(struct?: NetworksecuritymanagerDeploymentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_cross_account_visibility: {
      value: cdktn.booleanToHclTerraform(struct!.enableCrossAccountVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksecuritymanagerDeploymentConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworksecuritymanagerDeploymentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCrossAccountVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCrossAccountVisibility = this._enableCrossAccountVisibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksecuritymanagerDeploymentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableCrossAccountVisibility = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableCrossAccountVisibility = value.enableCrossAccountVisibility;
    }
  }

  // enable_cross_account_visibility - computed: false, optional: false, required: true
  private _enableCrossAccountVisibility?: boolean | cdktn.IResolvable; 
  public get enableCrossAccountVisibility() {
    return this.getBooleanAttribute('enable_cross_account_visibility');
  }
  public set enableCrossAccountVisibility(value: boolean | cdktn.IResolvable) {
    this._enableCrossAccountVisibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCrossAccountVisibilityInput() {
    return this._enableCrossAccountVisibility;
  }
}

export class NetworksecuritymanagerDeploymentConfigurationList extends cdktn.ComplexList {
  public internalValue? : NetworksecuritymanagerDeploymentConfiguration[] | cdktn.IResolvable

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
  public get(index: number): NetworksecuritymanagerDeploymentConfigurationOutputReference {
    return new NetworksecuritymanagerDeploymentConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_deployment aws_networksecuritymanager_deployment}
*/
export class NetworksecuritymanagerDeployment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networksecuritymanager_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworksecuritymanagerDeployment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworksecuritymanagerDeployment to import
  * @param importFromId The id of the existing NetworksecuritymanagerDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworksecuritymanagerDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_networksecuritymanager_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_deployment aws_networksecuritymanager_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworksecuritymanagerDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: NetworksecuritymanagerDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networksecuritymanager_deployment',
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
    this._isPublished = config.isPublished;
    this._name = config.name;
    this._policyArns = config.policyArns;
    this._region = config.region;
    this._scopeArn = config.scopeArn;
    this._tags = config.tags;
    this._configuration.internalValue = config.configuration;
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

  // policy_arns - computed: false, optional: false, required: true
  private _policyArns?: string[]; 
  public get policyArns() {
    return cdktn.Fn.tolist(this.getListAttribute('policy_arns'));
  }
  public set policyArns(value: string[]) {
    this._policyArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnsInput() {
    return this._policyArns;
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

  // scope_arn - computed: false, optional: false, required: true
  private _scopeArn?: string; 
  public get scopeArn() {
    return this.getStringAttribute('scope_arn');
  }
  public set scopeArn(value: string) {
    this._scopeArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeArnInput() {
    return this._scopeArn;
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
  private _configuration = new NetworksecuritymanagerDeploymentConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: NetworksecuritymanagerDeploymentConfiguration[] | cdktn.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      is_published: cdktn.booleanToTerraform(this._isPublished),
      name: cdktn.stringToTerraform(this._name),
      policy_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._policyArns),
      region: cdktn.stringToTerraform(this._region),
      scope_arn: cdktn.stringToTerraform(this._scopeArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      configuration: cdktn.listMapper(networksecuritymanagerDeploymentConfigurationToTerraform, true)(this._configuration.internalValue),
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
      policy_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._policyArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_arn: {
        value: cdktn.stringToHclTerraform(this._scopeArn),
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
        value: cdktn.listMapperHcl(networksecuritymanagerDeploymentConfigurationToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworksecuritymanagerDeploymentConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
