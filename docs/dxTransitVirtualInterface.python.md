# `dxTransitVirtualInterface` Submodule <a name="`dxTransitVirtualInterface` Submodule" id="@cdktn/provider-aws.dxTransitVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxTransitVirtualInterface <a name="DxTransitVirtualInterface" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface aws_dx_transit_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer"></a>

```python
from cdktn_provider_aws import dx_transit_virtual_interface

dxTransitVirtualInterface.DxTransitVirtualInterface(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  address_family: str,
  bgp_asn: typing.Union[int, float],
  connection_id: str,
  dx_gateway_id: str,
  name: str,
  vlan: typing.Union[int, float],
  amazon_address: str = None,
  bgp_auth_key: str = None,
  customer_address: str = None,
  id: str = None,
  mtu: typing.Union[int, float] = None,
  region: str = None,
  sitelink_enabled: bool | IResolvable = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DxTransitVirtualInterfaceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.addressFamily">address_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#address_family DxTransitVirtualInterface#address_family}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.bgpAsn">bgp_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#bgp_asn DxTransitVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#connection_id DxTransitVirtualInterface#connection_id}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.dxGatewayId">dx_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#dx_gateway_id DxTransitVirtualInterface#dx_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#name DxTransitVirtualInterface#name}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#vlan DxTransitVirtualInterface#vlan}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.amazonAddress">amazon_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#amazon_address DxTransitVirtualInterface#amazon_address}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.bgpAuthKey">bgp_auth_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#bgp_auth_key DxTransitVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.customerAddress">customer_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#customer_address DxTransitVirtualInterface#customer_address}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#id DxTransitVirtualInterface#id}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#mtu DxTransitVirtualInterface#mtu}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.sitelinkEnabled">sitelink_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#sitelink_enabled DxTransitVirtualInterface#sitelink_enabled}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#tags DxTransitVirtualInterface#tags}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#tags_all DxTransitVirtualInterface#tags_all}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.addressFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#address_family DxTransitVirtualInterface#address_family}.

---

##### `bgp_asn`<sup>Required</sup> <a name="bgp_asn" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.bgpAsn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#bgp_asn DxTransitVirtualInterface#bgp_asn}.

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.connectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#connection_id DxTransitVirtualInterface#connection_id}.

---

##### `dx_gateway_id`<sup>Required</sup> <a name="dx_gateway_id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.dxGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#dx_gateway_id DxTransitVirtualInterface#dx_gateway_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#name DxTransitVirtualInterface#name}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.vlan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#vlan DxTransitVirtualInterface#vlan}.

---

##### `amazon_address`<sup>Optional</sup> <a name="amazon_address" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.amazonAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#amazon_address DxTransitVirtualInterface#amazon_address}.

---

##### `bgp_auth_key`<sup>Optional</sup> <a name="bgp_auth_key" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.bgpAuthKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#bgp_auth_key DxTransitVirtualInterface#bgp_auth_key}.

---

##### `customer_address`<sup>Optional</sup> <a name="customer_address" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.customerAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#customer_address DxTransitVirtualInterface#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#id DxTransitVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.mtu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#mtu DxTransitVirtualInterface#mtu}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#region DxTransitVirtualInterface#region}

---

##### `sitelink_enabled`<sup>Optional</sup> <a name="sitelink_enabled" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.sitelinkEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#sitelink_enabled DxTransitVirtualInterface#sitelink_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#tags DxTransitVirtualInterface#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#tags_all DxTransitVirtualInterface#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#timeouts DxTransitVirtualInterface#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetAmazonAddress">reset_amazon_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetBgpAuthKey">reset_bgp_auth_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetCustomerAddress">reset_customer_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetMtu">reset_mtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetSitelinkEnabled">reset_sitelink_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#create DxTransitVirtualInterface#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#delete DxTransitVirtualInterface#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#update DxTransitVirtualInterface#update}.

---

##### `reset_amazon_address` <a name="reset_amazon_address" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetAmazonAddress"></a>

```python
def reset_amazon_address() -> None
```

##### `reset_bgp_auth_key` <a name="reset_bgp_auth_key" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetBgpAuthKey"></a>

```python
def reset_bgp_auth_key() -> None
```

##### `reset_customer_address` <a name="reset_customer_address" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetCustomerAddress"></a>

```python
def reset_customer_address() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mtu` <a name="reset_mtu" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetMtu"></a>

```python
def reset_mtu() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_sitelink_enabled` <a name="reset_sitelink_enabled" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetSitelinkEnabled"></a>

```python
def reset_sitelink_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DxTransitVirtualInterface resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isConstruct"></a>

```python
from cdktn_provider_aws import dx_transit_virtual_interface

dxTransitVirtualInterface.DxTransitVirtualInterface.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformElement"></a>

```python
from cdktn_provider_aws import dx_transit_virtual_interface

dxTransitVirtualInterface.DxTransitVirtualInterface.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformResource"></a>

```python
from cdktn_provider_aws import dx_transit_virtual_interface

dxTransitVirtualInterface.DxTransitVirtualInterface.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.generateConfigForImport"></a>

```python
from cdktn_provider_aws import dx_transit_virtual_interface

dxTransitVirtualInterface.DxTransitVirtualInterface.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DxTransitVirtualInterface resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DxTransitVirtualInterface to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DxTransitVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DxTransitVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonSideAsn">amazon_side_asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.awsDevice">aws_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.jumboFrameCapable">jumbo_frame_capable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference">DxTransitVirtualInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.addressFamilyInput">address_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonAddressInput">amazon_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAsnInput">bgp_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAuthKeyInput">bgp_auth_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.customerAddressInput">customer_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dxGatewayIdInput">dx_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.mtuInput">mtu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.sitelinkEnabledInput">sitelink_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.vlanInput">vlan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.addressFamily">address_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonAddress">amazon_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAsn">bgp_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAuthKey">bgp_auth_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.customerAddress">customer_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dxGatewayId">dx_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.sitelinkEnabled">sitelink_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `amazon_side_asn`<sup>Required</sup> <a name="amazon_side_asn" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonSideAsn"></a>

```python
amazon_side_asn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `aws_device`<sup>Required</sup> <a name="aws_device" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.awsDevice"></a>

```python
aws_device: str
```

- *Type:* str

---

##### `jumbo_frame_capable`<sup>Required</sup> <a name="jumbo_frame_capable" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.jumboFrameCapable"></a>

```python
jumbo_frame_capable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.timeouts"></a>

```python
timeouts: DxTransitVirtualInterfaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference">DxTransitVirtualInterfaceTimeoutsOutputReference</a>

---

##### `address_family_input`<sup>Optional</sup> <a name="address_family_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.addressFamilyInput"></a>

```python
address_family_input: str
```

- *Type:* str

---

##### `amazon_address_input`<sup>Optional</sup> <a name="amazon_address_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonAddressInput"></a>

```python
amazon_address_input: str
```

- *Type:* str

---

##### `bgp_asn_input`<sup>Optional</sup> <a name="bgp_asn_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAsnInput"></a>

```python
bgp_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_auth_key_input`<sup>Optional</sup> <a name="bgp_auth_key_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAuthKeyInput"></a>

```python
bgp_auth_key_input: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `customer_address_input`<sup>Optional</sup> <a name="customer_address_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.customerAddressInput"></a>

```python
customer_address_input: str
```

- *Type:* str

---

##### `dx_gateway_id_input`<sup>Optional</sup> <a name="dx_gateway_id_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dxGatewayIdInput"></a>

```python
dx_gateway_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mtu_input`<sup>Optional</sup> <a name="mtu_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.mtuInput"></a>

```python
mtu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `sitelink_enabled_input`<sup>Optional</sup> <a name="sitelink_enabled_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.sitelinkEnabledInput"></a>

```python
sitelink_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DxTransitVirtualInterfaceTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a>

---

##### `vlan_input`<sup>Optional</sup> <a name="vlan_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.vlanInput"></a>

```python
vlan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

---

##### `amazon_address`<sup>Required</sup> <a name="amazon_address" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonAddress"></a>

```python
amazon_address: str
```

- *Type:* str

---

##### `bgp_asn`<sup>Required</sup> <a name="bgp_asn" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAsn"></a>

```python
bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_auth_key`<sup>Required</sup> <a name="bgp_auth_key" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAuthKey"></a>

```python
bgp_auth_key: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `customer_address`<sup>Required</sup> <a name="customer_address" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.customerAddress"></a>

```python
customer_address: str
```

- *Type:* str

---

##### `dx_gateway_id`<sup>Required</sup> <a name="dx_gateway_id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dxGatewayId"></a>

```python
dx_gateway_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `sitelink_enabled`<sup>Required</sup> <a name="sitelink_enabled" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.sitelinkEnabled"></a>

```python
sitelink_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DxTransitVirtualInterfaceConfig <a name="DxTransitVirtualInterfaceConfig" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.Initializer"></a>

```python
from cdktn_provider_aws import dx_transit_virtual_interface

dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  address_family: str,
  bgp_asn: typing.Union[int, float],
  connection_id: str,
  dx_gateway_id: str,
  name: str,
  vlan: typing.Union[int, float],
  amazon_address: str = None,
  bgp_auth_key: str = None,
  customer_address: str = None,
  id: str = None,
  mtu: typing.Union[int, float] = None,
  region: str = None,
  sitelink_enabled: bool | IResolvable = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DxTransitVirtualInterfaceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.addressFamily">address_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#address_family DxTransitVirtualInterface#address_family}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.bgpAsn">bgp_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#bgp_asn DxTransitVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#connection_id DxTransitVirtualInterface#connection_id}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.dxGatewayId">dx_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#dx_gateway_id DxTransitVirtualInterface#dx_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#name DxTransitVirtualInterface#name}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#vlan DxTransitVirtualInterface#vlan}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.amazonAddress">amazon_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#amazon_address DxTransitVirtualInterface#amazon_address}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.bgpAuthKey">bgp_auth_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#bgp_auth_key DxTransitVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.customerAddress">customer_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#customer_address DxTransitVirtualInterface#customer_address}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#id DxTransitVirtualInterface#id}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#mtu DxTransitVirtualInterface#mtu}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.sitelinkEnabled">sitelink_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#sitelink_enabled DxTransitVirtualInterface#sitelink_enabled}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#tags DxTransitVirtualInterface#tags}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#tags_all DxTransitVirtualInterface#tags_all}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#address_family DxTransitVirtualInterface#address_family}.

---

##### `bgp_asn`<sup>Required</sup> <a name="bgp_asn" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.bgpAsn"></a>

```python
bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#bgp_asn DxTransitVirtualInterface#bgp_asn}.

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#connection_id DxTransitVirtualInterface#connection_id}.

---

##### `dx_gateway_id`<sup>Required</sup> <a name="dx_gateway_id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.dxGatewayId"></a>

```python
dx_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#dx_gateway_id DxTransitVirtualInterface#dx_gateway_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#name DxTransitVirtualInterface#name}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#vlan DxTransitVirtualInterface#vlan}.

---

##### `amazon_address`<sup>Optional</sup> <a name="amazon_address" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.amazonAddress"></a>

```python
amazon_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#amazon_address DxTransitVirtualInterface#amazon_address}.

---

##### `bgp_auth_key`<sup>Optional</sup> <a name="bgp_auth_key" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.bgpAuthKey"></a>

```python
bgp_auth_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#bgp_auth_key DxTransitVirtualInterface#bgp_auth_key}.

---

##### `customer_address`<sup>Optional</sup> <a name="customer_address" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.customerAddress"></a>

```python
customer_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#customer_address DxTransitVirtualInterface#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#id DxTransitVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#mtu DxTransitVirtualInterface#mtu}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#region DxTransitVirtualInterface#region}

---

##### `sitelink_enabled`<sup>Optional</sup> <a name="sitelink_enabled" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.sitelinkEnabled"></a>

```python
sitelink_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#sitelink_enabled DxTransitVirtualInterface#sitelink_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#tags DxTransitVirtualInterface#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#tags_all DxTransitVirtualInterface#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.timeouts"></a>

```python
timeouts: DxTransitVirtualInterfaceTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#timeouts DxTransitVirtualInterface#timeouts}

---

### DxTransitVirtualInterfaceTimeouts <a name="DxTransitVirtualInterfaceTimeouts" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import dx_transit_virtual_interface

dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#create DxTransitVirtualInterface#create}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#delete DxTransitVirtualInterface#delete}. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#update DxTransitVirtualInterface#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#create DxTransitVirtualInterface#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#delete DxTransitVirtualInterface#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/dx_transit_virtual_interface#update DxTransitVirtualInterface#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxTransitVirtualInterfaceTimeoutsOutputReference <a name="DxTransitVirtualInterfaceTimeoutsOutputReference" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import dx_transit_virtual_interface

dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DxTransitVirtualInterfaceTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a>

---



