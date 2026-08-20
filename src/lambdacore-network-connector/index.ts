/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdacore_network_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LambdacoreNetworkConnectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdacore_network_connector#name LambdacoreNetworkConnector#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdacore_network_connector#operator_role LambdacoreNetworkConnector#operator_role}
  */
  readonly operatorRole: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdacore_network_connector#region LambdacoreNetworkConnector#region}
  */
  readonly region?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdacore_network_connector#configuration LambdacoreNetworkConnector#configuration}
  */
  readonly configuration?: LambdacoreNetworkConnectorConfiguration[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdacore_network_connector#timeouts LambdacoreNetworkConnector#timeouts}
  */
  readonly timeouts?: LambdacoreNetworkConnectorTimeouts;
}
export interface LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdacore_network_connector#associated_compute_resource_types LambdacoreNetworkConnector#associated_compute_resource_types}
  */
  readonly associatedComputeResourceTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdacore_network_connector#network_protocol LambdacoreNetworkConnector#network_protocol}
  */
  readonly networkProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdacore_network_connector#security_group_ids LambdacoreNetworkConnector#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdacore_network_connector#subnet_ids LambdacoreNetworkConnector#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function lambdacoreNetworkConnectorConfigurationVpcEgressConfigurationToTerraform(struct?: LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    associated_compute_resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.associatedComputeResourceTypes),
    network_protocol: cdktn.stringToTerraform(struct!.networkProtocol),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function lambdacoreNetworkConnectorConfigurationVpcEgressConfigurationToHclTerraform(struct?: LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    associated_compute_resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.associatedComputeResourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network_protocol: {
      value: cdktn.stringToHclTerraform(struct!.networkProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associatedComputeResourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedComputeResourceTypes = this._associatedComputeResourceTypes;
    }
    if (this._networkProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProtocol = this._networkProtocol;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associatedComputeResourceTypes = undefined;
      this._networkProtocol = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associatedComputeResourceTypes = value.associatedComputeResourceTypes;
      this._networkProtocol = value.networkProtocol;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // associated_compute_resource_types - computed: false, optional: false, required: true
  private _associatedComputeResourceTypes?: string[]; 
  public get associatedComputeResourceTypes() {
    return this.getListAttribute('associated_compute_resource_types');
  }
  public set associatedComputeResourceTypes(value: string[]) {
    this._associatedComputeResourceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedComputeResourceTypesInput() {
    return this._associatedComputeResourceTypes;
  }

  // network_protocol - computed: true, optional: true, required: false
  private _networkProtocol?: string; 
  public get networkProtocol() {
    return this.getStringAttribute('network_protocol');
  }
  public set networkProtocol(value: string) {
    this._networkProtocol = value;
  }
  public resetNetworkProtocol() {
    this._networkProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProtocolInput() {
    return this._networkProtocol;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}

export class LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList extends cdktn.ComplexList {
  public internalValue? : LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration[] | cdktn.IResolvable

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
  public get(index: number): LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference {
    return new LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdacoreNetworkConnectorConfiguration {
  /**
  * vpc_egress_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdacore_network_connector#vpc_egress_configuration LambdacoreNetworkConnector#vpc_egress_configuration}
  */
  readonly vpcEgressConfiguration?: LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration[] | cdktn.IResolvable;
}

export function lambdacoreNetworkConnectorConfigurationToTerraform(struct?: LambdacoreNetworkConnectorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc_egress_configuration: cdktn.listMapper(lambdacoreNetworkConnectorConfigurationVpcEgressConfigurationToTerraform, true)(struct!.vpcEgressConfiguration),
  }
}


export function lambdacoreNetworkConnectorConfigurationToHclTerraform(struct?: LambdacoreNetworkConnectorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc_egress_configuration: {
      value: cdktn.listMapperHcl(lambdacoreNetworkConnectorConfigurationVpcEgressConfigurationToHclTerraform, true)(struct!.vpcEgressConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdacoreNetworkConnectorConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdacoreNetworkConnectorConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcEgressConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEgressConfiguration = this._vpcEgressConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdacoreNetworkConnectorConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcEgressConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcEgressConfiguration.internalValue = value.vpcEgressConfiguration;
    }
  }

  // vpc_egress_configuration - computed: false, optional: true, required: false
  private _vpcEgressConfiguration = new LambdacoreNetworkConnectorConfigurationVpcEgressConfigurationList(this, "vpc_egress_configuration", false);
  public get vpcEgressConfiguration() {
    return this._vpcEgressConfiguration;
  }
  public putVpcEgressConfiguration(value: LambdacoreNetworkConnectorConfigurationVpcEgressConfiguration[] | cdktn.IResolvable) {
    this._vpcEgressConfiguration.internalValue = value;
  }
  public resetVpcEgressConfiguration() {
    this._vpcEgressConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEgressConfigurationInput() {
    return this._vpcEgressConfiguration.internalValue;
  }
}

export class LambdacoreNetworkConnectorConfigurationList extends cdktn.ComplexList {
  public internalValue? : LambdacoreNetworkConnectorConfiguration[] | cdktn.IResolvable

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
  public get(index: number): LambdacoreNetworkConnectorConfigurationOutputReference {
    return new LambdacoreNetworkConnectorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdacoreNetworkConnectorTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdacore_network_connector#create LambdacoreNetworkConnector#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdacore_network_connector#delete LambdacoreNetworkConnector#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdacore_network_connector#update LambdacoreNetworkConnector#update}
  */
  readonly update?: string;
}

export function lambdacoreNetworkConnectorTimeoutsToTerraform(struct?: LambdacoreNetworkConnectorTimeouts | cdktn.IResolvable): any {
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


export function lambdacoreNetworkConnectorTimeoutsToHclTerraform(struct?: LambdacoreNetworkConnectorTimeouts | cdktn.IResolvable): any {
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

export class LambdacoreNetworkConnectorTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdacoreNetworkConnectorTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LambdacoreNetworkConnectorTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdacore_network_connector aws_lambdacore_network_connector}
*/
export class LambdacoreNetworkConnector extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambdacore_network_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LambdacoreNetworkConnector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdacoreNetworkConnector to import
  * @param importFromId The id of the existing LambdacoreNetworkConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdacore_network_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdacoreNetworkConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambdacore_network_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdacore_network_connector aws_lambdacore_network_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdacoreNetworkConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: LambdacoreNetworkConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambdacore_network_connector',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.61.0',
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
    this._name = config.name;
    this._operatorRole = config.operatorRole;
    this._region = config.region;
    this._configuration.internalValue = config.configuration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // operator_role - computed: false, optional: false, required: true
  private _operatorRole?: string; 
  public get operatorRole() {
    return this.getStringAttribute('operator_role');
  }
  public set operatorRole(value: string) {
    this._operatorRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorRoleInput() {
    return this._operatorRole;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new LambdacoreNetworkConnectorConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: LambdacoreNetworkConnectorConfiguration[] | cdktn.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LambdacoreNetworkConnectorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LambdacoreNetworkConnectorTimeouts) {
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
      name: cdktn.stringToTerraform(this._name),
      operator_role: cdktn.stringToTerraform(this._operatorRole),
      region: cdktn.stringToTerraform(this._region),
      configuration: cdktn.listMapper(lambdacoreNetworkConnectorConfigurationToTerraform, true)(this._configuration.internalValue),
      timeouts: lambdacoreNetworkConnectorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operator_role: {
        value: cdktn.stringToHclTerraform(this._operatorRole),
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
      configuration: {
        value: cdktn.listMapperHcl(lambdacoreNetworkConnectorConfigurationToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdacoreNetworkConnectorConfigurationList",
      },
      timeouts: {
        value: lambdacoreNetworkConnectorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LambdacoreNetworkConnectorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
