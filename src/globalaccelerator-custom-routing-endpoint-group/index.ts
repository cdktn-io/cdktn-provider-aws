/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/globalaccelerator_custom_routing_endpoint_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GlobalacceleratorCustomRoutingEndpointGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#endpoint_group_region GlobalacceleratorCustomRoutingEndpointGroup#endpoint_group_region}
  */
  readonly endpointGroupRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#id GlobalacceleratorCustomRoutingEndpointGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#listener_arn GlobalacceleratorCustomRoutingEndpointGroup#listener_arn}
  */
  readonly listenerArn: string;
  /**
  * destination_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#destination_configuration GlobalacceleratorCustomRoutingEndpointGroup#destination_configuration}
  */
  readonly destinationConfiguration: GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration[] | cdktn.IResolvable;
  /**
  * endpoint_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#endpoint_configuration GlobalacceleratorCustomRoutingEndpointGroup#endpoint_configuration}
  */
  readonly endpointConfiguration?: GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#timeouts GlobalacceleratorCustomRoutingEndpointGroup#timeouts}
  */
  readonly timeouts?: GlobalacceleratorCustomRoutingEndpointGroupTimeouts;
}
export interface GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#from_port GlobalacceleratorCustomRoutingEndpointGroup#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#protocols GlobalacceleratorCustomRoutingEndpointGroup#protocols}
  */
  readonly protocols: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#to_port GlobalacceleratorCustomRoutingEndpointGroup#to_port}
  */
  readonly toPort: number;
}

export function globalacceleratorCustomRoutingEndpointGroupDestinationConfigurationToTerraform(struct?: GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_port: cdktn.numberToTerraform(struct!.fromPort),
    protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
    to_port: cdktn.numberToTerraform(struct!.toPort),
  }
}


export function globalacceleratorCustomRoutingEndpointGroupDestinationConfigurationToHclTerraform(struct?: GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from_port: {
      value: cdktn.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocols: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    to_port: {
      value: cdktn.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._protocols = undefined;
      this._toPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._protocols = value.protocols;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: false, required: true
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // protocols - computed: false, optional: false, required: true
  private _protocols?: string[]; 
  public get protocols() {
    return cdktn.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // to_port - computed: false, optional: false, required: true
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList extends cdktn.ComplexList {
  public internalValue? : GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration[] | cdktn.IResolvable

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
  public get(index: number): GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference {
    return new GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#endpoint_id GlobalacceleratorCustomRoutingEndpointGroup#endpoint_id}
  */
  readonly endpointId?: string;
}

export function globalacceleratorCustomRoutingEndpointGroupEndpointConfigurationToTerraform(struct?: GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_id: cdktn.stringToTerraform(struct!.endpointId),
  }
}


export function globalacceleratorCustomRoutingEndpointGroupEndpointConfigurationToHclTerraform(struct?: GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_id: {
      value: cdktn.stringToHclTerraform(struct!.endpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointId = this._endpointId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointId = value.endpointId;
    }
  }

  // endpoint_id - computed: false, optional: true, required: false
  private _endpointId?: string; 
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }
  public resetEndpointId() {
    this._endpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
  }
}

export class GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList extends cdktn.ComplexList {
  public internalValue? : GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration[] | cdktn.IResolvable

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
  public get(index: number): GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference {
    return new GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalacceleratorCustomRoutingEndpointGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#create GlobalacceleratorCustomRoutingEndpointGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#delete GlobalacceleratorCustomRoutingEndpointGroup#delete}
  */
  readonly delete?: string;
}

export function globalacceleratorCustomRoutingEndpointGroupTimeoutsToTerraform(struct?: GlobalacceleratorCustomRoutingEndpointGroupTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function globalacceleratorCustomRoutingEndpointGroupTimeoutsToHclTerraform(struct?: GlobalacceleratorCustomRoutingEndpointGroupTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalacceleratorCustomRoutingEndpointGroupTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalacceleratorCustomRoutingEndpointGroupTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/globalaccelerator_custom_routing_endpoint_group aws_globalaccelerator_custom_routing_endpoint_group}
*/
export class GlobalacceleratorCustomRoutingEndpointGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_globalaccelerator_custom_routing_endpoint_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GlobalacceleratorCustomRoutingEndpointGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalacceleratorCustomRoutingEndpointGroup to import
  * @param importFromId The id of the existing GlobalacceleratorCustomRoutingEndpointGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalacceleratorCustomRoutingEndpointGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_globalaccelerator_custom_routing_endpoint_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/globalaccelerator_custom_routing_endpoint_group aws_globalaccelerator_custom_routing_endpoint_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalacceleratorCustomRoutingEndpointGroupConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalacceleratorCustomRoutingEndpointGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_globalaccelerator_custom_routing_endpoint_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.51.0',
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
    this._endpointGroupRegion = config.endpointGroupRegion;
    this._id = config.id;
    this._listenerArn = config.listenerArn;
    this._destinationConfiguration.internalValue = config.destinationConfiguration;
    this._endpointConfiguration.internalValue = config.endpointConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // endpoint_group_region - computed: true, optional: true, required: false
  private _endpointGroupRegion?: string; 
  public get endpointGroupRegion() {
    return this.getStringAttribute('endpoint_group_region');
  }
  public set endpointGroupRegion(value: string) {
    this._endpointGroupRegion = value;
  }
  public resetEndpointGroupRegion() {
    this._endpointGroupRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointGroupRegionInput() {
    return this._endpointGroupRegion;
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

  // listener_arn - computed: false, optional: false, required: true
  private _listenerArn?: string; 
  public get listenerArn() {
    return this.getStringAttribute('listener_arn');
  }
  public set listenerArn(value: string) {
    this._listenerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerArnInput() {
    return this._listenerArn;
  }

  // destination_configuration - computed: false, optional: false, required: true
  private _destinationConfiguration = new GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList(this, "destination_configuration", true);
  public get destinationConfiguration() {
    return this._destinationConfiguration;
  }
  public putDestinationConfiguration(value: GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration[] | cdktn.IResolvable) {
    this._destinationConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigurationInput() {
    return this._destinationConfiguration.internalValue;
  }

  // endpoint_configuration - computed: false, optional: true, required: false
  private _endpointConfiguration = new GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList(this, "endpoint_configuration", true);
  public get endpointConfiguration() {
    return this._endpointConfiguration;
  }
  public putEndpointConfiguration(value: GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration[] | cdktn.IResolvable) {
    this._endpointConfiguration.internalValue = value;
  }
  public resetEndpointConfiguration() {
    this._endpointConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationInput() {
    return this._endpointConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GlobalacceleratorCustomRoutingEndpointGroupTimeouts) {
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
      endpoint_group_region: cdktn.stringToTerraform(this._endpointGroupRegion),
      id: cdktn.stringToTerraform(this._id),
      listener_arn: cdktn.stringToTerraform(this._listenerArn),
      destination_configuration: cdktn.listMapper(globalacceleratorCustomRoutingEndpointGroupDestinationConfigurationToTerraform, true)(this._destinationConfiguration.internalValue),
      endpoint_configuration: cdktn.listMapper(globalacceleratorCustomRoutingEndpointGroupEndpointConfigurationToTerraform, true)(this._endpointConfiguration.internalValue),
      timeouts: globalacceleratorCustomRoutingEndpointGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_group_region: {
        value: cdktn.stringToHclTerraform(this._endpointGroupRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_arn: {
        value: cdktn.stringToHclTerraform(this._listenerArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_configuration: {
        value: cdktn.listMapperHcl(globalacceleratorCustomRoutingEndpointGroupDestinationConfigurationToHclTerraform, true)(this._destinationConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList",
      },
      endpoint_configuration: {
        value: cdktn.listMapperHcl(globalacceleratorCustomRoutingEndpointGroupEndpointConfigurationToHclTerraform, true)(this._endpointConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList",
      },
      timeouts: {
        value: globalacceleratorCustomRoutingEndpointGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlobalacceleratorCustomRoutingEndpointGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
