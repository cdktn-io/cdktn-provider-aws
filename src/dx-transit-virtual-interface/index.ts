/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DxTransitVirtualInterfaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#address_family DxTransitVirtualInterface#address_family}
  */
  readonly addressFamily: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#amazon_address DxTransitVirtualInterface#amazon_address}
  */
  readonly amazonAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#bgp_asn DxTransitVirtualInterface#bgp_asn}
  */
  readonly bgpAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#bgp_asn_long DxTransitVirtualInterface#bgp_asn_long}
  */
  readonly bgpAsnLong?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#bgp_auth_key DxTransitVirtualInterface#bgp_auth_key}
  */
  readonly bgpAuthKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#connection_id DxTransitVirtualInterface#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#customer_address DxTransitVirtualInterface#customer_address}
  */
  readonly customerAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#dx_gateway_id DxTransitVirtualInterface#dx_gateway_id}
  */
  readonly dxGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#id DxTransitVirtualInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#mtu DxTransitVirtualInterface#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#name DxTransitVirtualInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#prefix_pool_allocated_count_ipv4 DxTransitVirtualInterface#prefix_pool_allocated_count_ipv4}
  */
  readonly prefixPoolAllocatedCountIpv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#prefix_pool_allocated_count_ipv6 DxTransitVirtualInterface#prefix_pool_allocated_count_ipv6}
  */
  readonly prefixPoolAllocatedCountIpv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#rate_limit DxTransitVirtualInterface#rate_limit}
  */
  readonly rateLimit?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#region DxTransitVirtualInterface#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#sitelink_enabled DxTransitVirtualInterface#sitelink_enabled}
  */
  readonly sitelinkEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#tags DxTransitVirtualInterface#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#tags_all DxTransitVirtualInterface#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#vlan DxTransitVirtualInterface#vlan}
  */
  readonly vlan: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#timeouts DxTransitVirtualInterface#timeouts}
  */
  readonly timeouts?: DxTransitVirtualInterfaceTimeouts;
}
export interface DxTransitVirtualInterfaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#create DxTransitVirtualInterface#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#delete DxTransitVirtualInterface#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#update DxTransitVirtualInterface#update}
  */
  readonly update?: string;
}

export function dxTransitVirtualInterfaceTimeoutsToTerraform(struct?: DxTransitVirtualInterfaceTimeouts | cdktn.IResolvable): any {
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


export function dxTransitVirtualInterfaceTimeoutsToHclTerraform(struct?: DxTransitVirtualInterfaceTimeouts | cdktn.IResolvable): any {
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

export class DxTransitVirtualInterfaceTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DxTransitVirtualInterfaceTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DxTransitVirtualInterfaceTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface aws_dx_transit_virtual_interface}
*/
export class DxTransitVirtualInterface extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dx_transit_virtual_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DxTransitVirtualInterface resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DxTransitVirtualInterface to import
  * @param importFromId The id of the existing DxTransitVirtualInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DxTransitVirtualInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_dx_transit_virtual_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_transit_virtual_interface aws_dx_transit_virtual_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DxTransitVirtualInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DxTransitVirtualInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_transit_virtual_interface',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.63.0',
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
    this._addressFamily = config.addressFamily;
    this._amazonAddress = config.amazonAddress;
    this._bgpAsn = config.bgpAsn;
    this._bgpAsnLong = config.bgpAsnLong;
    this._bgpAuthKey = config.bgpAuthKey;
    this._connectionId = config.connectionId;
    this._customerAddress = config.customerAddress;
    this._dxGatewayId = config.dxGatewayId;
    this._id = config.id;
    this._mtu = config.mtu;
    this._name = config.name;
    this._prefixPoolAllocatedCountIpv4 = config.prefixPoolAllocatedCountIpv4;
    this._prefixPoolAllocatedCountIpv6 = config.prefixPoolAllocatedCountIpv6;
    this._rateLimit = config.rateLimit;
    this._region = config.region;
    this._sitelinkEnabled = config.sitelinkEnabled;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vlan = config.vlan;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: false, optional: false, required: true
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
  }

  // amazon_address - computed: true, optional: true, required: false
  private _amazonAddress?: string; 
  public get amazonAddress() {
    return this.getStringAttribute('amazon_address');
  }
  public set amazonAddress(value: string) {
    this._amazonAddress = value;
  }
  public resetAmazonAddress() {
    this._amazonAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonAddressInput() {
    return this._amazonAddress;
  }

  // amazon_side_asn - computed: true, optional: false, required: false
  public get amazonSideAsn() {
    return this.getStringAttribute('amazon_side_asn');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_device - computed: true, optional: false, required: false
  public get awsDevice() {
    return this.getStringAttribute('aws_device');
  }

  // bgp_asn - computed: false, optional: true, required: false
  private _bgpAsn?: number; 
  public get bgpAsn() {
    return this.getNumberAttribute('bgp_asn');
  }
  public set bgpAsn(value: number) {
    this._bgpAsn = value;
  }
  public resetBgpAsn() {
    this._bgpAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsnInput() {
    return this._bgpAsn;
  }

  // bgp_asn_long - computed: false, optional: true, required: false
  private _bgpAsnLong?: string; 
  public get bgpAsnLong() {
    return this.getStringAttribute('bgp_asn_long');
  }
  public set bgpAsnLong(value: string) {
    this._bgpAsnLong = value;
  }
  public resetBgpAsnLong() {
    this._bgpAsnLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsnLongInput() {
    return this._bgpAsnLong;
  }

  // bgp_auth_key - computed: true, optional: true, required: false
  private _bgpAuthKey?: string; 
  public get bgpAuthKey() {
    return this.getStringAttribute('bgp_auth_key');
  }
  public set bgpAuthKey(value: string) {
    this._bgpAuthKey = value;
  }
  public resetBgpAuthKey() {
    this._bgpAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAuthKeyInput() {
    return this._bgpAuthKey;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // customer_address - computed: true, optional: true, required: false
  private _customerAddress?: string; 
  public get customerAddress() {
    return this.getStringAttribute('customer_address');
  }
  public set customerAddress(value: string) {
    this._customerAddress = value;
  }
  public resetCustomerAddress() {
    this._customerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAddressInput() {
    return this._customerAddress;
  }

  // dx_gateway_id - computed: false, optional: false, required: true
  private _dxGatewayId?: string; 
  public get dxGatewayId() {
    return this.getStringAttribute('dx_gateway_id');
  }
  public set dxGatewayId(value: string) {
    this._dxGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dxGatewayIdInput() {
    return this._dxGatewayId;
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

  // jumbo_frame_capable - computed: true, optional: false, required: false
  public get jumboFrameCapable() {
    return this.getBooleanAttribute('jumbo_frame_capable');
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // prefix_pool_allocated_count_ipv4 - computed: true, optional: true, required: false
  private _prefixPoolAllocatedCountIpv4?: number; 
  public get prefixPoolAllocatedCountIpv4() {
    return this.getNumberAttribute('prefix_pool_allocated_count_ipv4');
  }
  public set prefixPoolAllocatedCountIpv4(value: number) {
    this._prefixPoolAllocatedCountIpv4 = value;
  }
  public resetPrefixPoolAllocatedCountIpv4() {
    this._prefixPoolAllocatedCountIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPoolAllocatedCountIpv4Input() {
    return this._prefixPoolAllocatedCountIpv4;
  }

  // prefix_pool_allocated_count_ipv6 - computed: true, optional: true, required: false
  private _prefixPoolAllocatedCountIpv6?: number; 
  public get prefixPoolAllocatedCountIpv6() {
    return this.getNumberAttribute('prefix_pool_allocated_count_ipv6');
  }
  public set prefixPoolAllocatedCountIpv6(value: number) {
    this._prefixPoolAllocatedCountIpv6 = value;
  }
  public resetPrefixPoolAllocatedCountIpv6() {
    this._prefixPoolAllocatedCountIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPoolAllocatedCountIpv6Input() {
    return this._prefixPoolAllocatedCountIpv6;
  }

  // rate_limit - computed: true, optional: true, required: false
  private _rateLimit?: string; 
  public get rateLimit() {
    return this.getStringAttribute('rate_limit');
  }
  public set rateLimit(value: string) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
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

  // sitelink_enabled - computed: false, optional: true, required: false
  private _sitelinkEnabled?: boolean | cdktn.IResolvable; 
  public get sitelinkEnabled() {
    return this.getBooleanAttribute('sitelink_enabled');
  }
  public set sitelinkEnabled(value: boolean | cdktn.IResolvable) {
    this._sitelinkEnabled = value;
  }
  public resetSitelinkEnabled() {
    this._sitelinkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitelinkEnabledInput() {
    return this._sitelinkEnabled;
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

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DxTransitVirtualInterfaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DxTransitVirtualInterfaceTimeouts) {
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
      address_family: cdktn.stringToTerraform(this._addressFamily),
      amazon_address: cdktn.stringToTerraform(this._amazonAddress),
      bgp_asn: cdktn.numberToTerraform(this._bgpAsn),
      bgp_asn_long: cdktn.stringToTerraform(this._bgpAsnLong),
      bgp_auth_key: cdktn.stringToTerraform(this._bgpAuthKey),
      connection_id: cdktn.stringToTerraform(this._connectionId),
      customer_address: cdktn.stringToTerraform(this._customerAddress),
      dx_gateway_id: cdktn.stringToTerraform(this._dxGatewayId),
      id: cdktn.stringToTerraform(this._id),
      mtu: cdktn.numberToTerraform(this._mtu),
      name: cdktn.stringToTerraform(this._name),
      prefix_pool_allocated_count_ipv4: cdktn.numberToTerraform(this._prefixPoolAllocatedCountIpv4),
      prefix_pool_allocated_count_ipv6: cdktn.numberToTerraform(this._prefixPoolAllocatedCountIpv6),
      rate_limit: cdktn.stringToTerraform(this._rateLimit),
      region: cdktn.stringToTerraform(this._region),
      sitelink_enabled: cdktn.booleanToTerraform(this._sitelinkEnabled),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      vlan: cdktn.numberToTerraform(this._vlan),
      timeouts: dxTransitVirtualInterfaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_family: {
        value: cdktn.stringToHclTerraform(this._addressFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      amazon_address: {
        value: cdktn.stringToHclTerraform(this._amazonAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_asn: {
        value: cdktn.numberToHclTerraform(this._bgpAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_asn_long: {
        value: cdktn.stringToHclTerraform(this._bgpAsnLong),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_auth_key: {
        value: cdktn.stringToHclTerraform(this._bgpAuthKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_id: {
        value: cdktn.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_address: {
        value: cdktn.stringToHclTerraform(this._customerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dx_gateway_id: {
        value: cdktn.stringToHclTerraform(this._dxGatewayId),
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
      mtu: {
        value: cdktn.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_pool_allocated_count_ipv4: {
        value: cdktn.numberToHclTerraform(this._prefixPoolAllocatedCountIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix_pool_allocated_count_ipv6: {
        value: cdktn.numberToHclTerraform(this._prefixPoolAllocatedCountIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit: {
        value: cdktn.stringToHclTerraform(this._rateLimit),
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
      sitelink_enabled: {
        value: cdktn.booleanToHclTerraform(this._sitelinkEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      vlan: {
        value: cdktn.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: dxTransitVirtualInterfaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DxTransitVirtualInterfaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
