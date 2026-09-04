# `dxHostedPrivateVirtualInterface` Submodule <a name="`dxHostedPrivateVirtualInterface` Submodule" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxHostedPrivateVirtualInterface <a name="DxHostedPrivateVirtualInterface" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface aws_dx_hosted_private_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer"></a>

```java
import io.cdktn.providers.aws.dx_hosted_private_virtual_interface.DxHostedPrivateVirtualInterface;

DxHostedPrivateVirtualInterface.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .addressFamily(java.lang.String)
    .bgpAsn(java.lang.Number)
    .connectionId(java.lang.String)
    .name(java.lang.String)
    .ownerAccountId(java.lang.String)
    .vlan(java.lang.Number)
//  .amazonAddress(java.lang.String)
//  .bgpAuthKey(java.lang.String)
//  .customerAddress(java.lang.String)
//  .id(java.lang.String)
//  .mtu(java.lang.Number)
//  .rateLimit(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(DxHostedPrivateVirtualInterfaceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#address_family DxHostedPrivateVirtualInterface#address_family}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.bgpAsn">bgpAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#bgp_asn DxHostedPrivateVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#connection_id DxHostedPrivateVirtualInterface#connection_id}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#name DxHostedPrivateVirtualInterface#name}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.ownerAccountId">ownerAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#owner_account_id DxHostedPrivateVirtualInterface#owner_account_id}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.vlan">vlan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#vlan DxHostedPrivateVirtualInterface#vlan}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#amazon_address DxHostedPrivateVirtualInterface#amazon_address}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.bgpAuthKey">bgpAuthKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#bgp_auth_key DxHostedPrivateVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#customer_address DxHostedPrivateVirtualInterface#customer_address}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#id DxHostedPrivateVirtualInterface#id}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.mtu">mtu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#mtu DxHostedPrivateVirtualInterface#mtu}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.rateLimit">rateLimit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#rate_limit DxHostedPrivateVirtualInterface#rate_limit}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.addressFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#address_family DxHostedPrivateVirtualInterface#address_family}.

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.bgpAsn"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#bgp_asn DxHostedPrivateVirtualInterface#bgp_asn}.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.connectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#connection_id DxHostedPrivateVirtualInterface#connection_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#name DxHostedPrivateVirtualInterface#name}.

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.ownerAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#owner_account_id DxHostedPrivateVirtualInterface#owner_account_id}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.vlan"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#vlan DxHostedPrivateVirtualInterface#vlan}.

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.amazonAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#amazon_address DxHostedPrivateVirtualInterface#amazon_address}.

---

##### `bgpAuthKey`<sup>Optional</sup> <a name="bgpAuthKey" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.bgpAuthKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#bgp_auth_key DxHostedPrivateVirtualInterface#bgp_auth_key}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.customerAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#customer_address DxHostedPrivateVirtualInterface#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#id DxHostedPrivateVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.mtu"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#mtu DxHostedPrivateVirtualInterface#mtu}.

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.rateLimit"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#rate_limit DxHostedPrivateVirtualInterface#rate_limit}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#region DxHostedPrivateVirtualInterface#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#timeouts DxHostedPrivateVirtualInterface#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetAmazonAddress">resetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetBgpAuthKey">resetBgpAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetCustomerAddress">resetCustomerAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetRateLimit">resetRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.putTimeouts"></a>

```java
public void putTimeouts(DxHostedPrivateVirtualInterfaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a>

---

##### `resetAmazonAddress` <a name="resetAmazonAddress" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetAmazonAddress"></a>

```java
public void resetAmazonAddress()
```

##### `resetBgpAuthKey` <a name="resetBgpAuthKey" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetBgpAuthKey"></a>

```java
public void resetBgpAuthKey()
```

##### `resetCustomerAddress` <a name="resetCustomerAddress" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetCustomerAddress"></a>

```java
public void resetCustomerAddress()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetId"></a>

```java
public void resetId()
```

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetMtu"></a>

```java
public void resetMtu()
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetRateLimit"></a>

```java
public void resetRateLimit()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DxHostedPrivateVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isConstruct"></a>

```java
import io.cdktn.providers.aws.dx_hosted_private_virtual_interface.DxHostedPrivateVirtualInterface;

DxHostedPrivateVirtualInterface.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.dx_hosted_private_virtual_interface.DxHostedPrivateVirtualInterface;

DxHostedPrivateVirtualInterface.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.dx_hosted_private_virtual_interface.DxHostedPrivateVirtualInterface;

DxHostedPrivateVirtualInterface.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.dx_hosted_private_virtual_interface.DxHostedPrivateVirtualInterface;

DxHostedPrivateVirtualInterface.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DxHostedPrivateVirtualInterface.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DxHostedPrivateVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DxHostedPrivateVirtualInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DxHostedPrivateVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DxHostedPrivateVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonSideAsn">amazonSideAsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.awsDevice">awsDevice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.jumboFrameCapable">jumboFrameCapable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.prefixPoolAllocatedCountIpv4">prefixPoolAllocatedCountIpv4</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.prefixPoolAllocatedCountIpv6">prefixPoolAllocatedCountIpv6</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference">DxHostedPrivateVirtualInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.addressFamilyInput">addressFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonAddressInput">amazonAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAsnInput">bgpAsnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAuthKeyInput">bgpAuthKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.customerAddressInput">customerAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.mtuInput">mtuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.ownerAccountIdInput">ownerAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.rateLimitInput">rateLimitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.vlanInput">vlanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAsn">bgpAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAuthKey">bgpAuthKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.ownerAccountId">ownerAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.rateLimit">rateLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `amazonSideAsn`<sup>Required</sup> <a name="amazonSideAsn" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonSideAsn"></a>

```java
public java.lang.String getAmazonSideAsn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `awsDevice`<sup>Required</sup> <a name="awsDevice" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.awsDevice"></a>

```java
public java.lang.String getAwsDevice();
```

- *Type:* java.lang.String

---

##### `jumboFrameCapable`<sup>Required</sup> <a name="jumboFrameCapable" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.jumboFrameCapable"></a>

```java
public IResolvable getJumboFrameCapable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `prefixPoolAllocatedCountIpv4`<sup>Required</sup> <a name="prefixPoolAllocatedCountIpv4" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.prefixPoolAllocatedCountIpv4"></a>

```java
public java.lang.Number getPrefixPoolAllocatedCountIpv4();
```

- *Type:* java.lang.Number

---

##### `prefixPoolAllocatedCountIpv6`<sup>Required</sup> <a name="prefixPoolAllocatedCountIpv6" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.prefixPoolAllocatedCountIpv6"></a>

```java
public java.lang.Number getPrefixPoolAllocatedCountIpv6();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.timeouts"></a>

```java
public DxHostedPrivateVirtualInterfaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference">DxHostedPrivateVirtualInterfaceTimeoutsOutputReference</a>

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.addressFamilyInput"></a>

```java
public java.lang.String getAddressFamilyInput();
```

- *Type:* java.lang.String

---

##### `amazonAddressInput`<sup>Optional</sup> <a name="amazonAddressInput" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonAddressInput"></a>

```java
public java.lang.String getAmazonAddressInput();
```

- *Type:* java.lang.String

---

##### `bgpAsnInput`<sup>Optional</sup> <a name="bgpAsnInput" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAsnInput"></a>

```java
public java.lang.Number getBgpAsnInput();
```

- *Type:* java.lang.Number

---

##### `bgpAuthKeyInput`<sup>Optional</sup> <a name="bgpAuthKeyInput" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAuthKeyInput"></a>

```java
public java.lang.String getBgpAuthKeyInput();
```

- *Type:* java.lang.String

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `customerAddressInput`<sup>Optional</sup> <a name="customerAddressInput" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.customerAddressInput"></a>

```java
public java.lang.String getCustomerAddressInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.mtuInput"></a>

```java
public java.lang.Number getMtuInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerAccountIdInput`<sup>Optional</sup> <a name="ownerAccountIdInput" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.ownerAccountIdInput"></a>

```java
public java.lang.String getOwnerAccountIdInput();
```

- *Type:* java.lang.String

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.rateLimitInput"></a>

```java
public java.lang.String getRateLimitInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.timeoutsInput"></a>

```java
public IResolvable|DxHostedPrivateVirtualInterfaceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a>

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.vlanInput"></a>

```java
public java.lang.Number getVlanInput();
```

- *Type:* java.lang.Number

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

---

##### `amazonAddress`<sup>Required</sup> <a name="amazonAddress" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.amazonAddress"></a>

```java
public java.lang.String getAmazonAddress();
```

- *Type:* java.lang.String

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAsn"></a>

```java
public java.lang.Number getBgpAsn();
```

- *Type:* java.lang.Number

---

##### `bgpAuthKey`<sup>Required</sup> <a name="bgpAuthKey" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.bgpAuthKey"></a>

```java
public java.lang.String getBgpAuthKey();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `customerAddress`<sup>Required</sup> <a name="customerAddress" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.customerAddress"></a>

```java
public java.lang.String getCustomerAddress();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.ownerAccountId"></a>

```java
public java.lang.String getOwnerAccountId();
```

- *Type:* java.lang.String

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.rateLimit"></a>

```java
public java.lang.String getRateLimit();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterface.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DxHostedPrivateVirtualInterfaceConfig <a name="DxHostedPrivateVirtualInterfaceConfig" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.dx_hosted_private_virtual_interface.DxHostedPrivateVirtualInterfaceConfig;

DxHostedPrivateVirtualInterfaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .addressFamily(java.lang.String)
    .bgpAsn(java.lang.Number)
    .connectionId(java.lang.String)
    .name(java.lang.String)
    .ownerAccountId(java.lang.String)
    .vlan(java.lang.Number)
//  .amazonAddress(java.lang.String)
//  .bgpAuthKey(java.lang.String)
//  .customerAddress(java.lang.String)
//  .id(java.lang.String)
//  .mtu(java.lang.Number)
//  .rateLimit(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(DxHostedPrivateVirtualInterfaceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.addressFamily">addressFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#address_family DxHostedPrivateVirtualInterface#address_family}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.bgpAsn">bgpAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#bgp_asn DxHostedPrivateVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#connection_id DxHostedPrivateVirtualInterface#connection_id}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#name DxHostedPrivateVirtualInterface#name}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.ownerAccountId">ownerAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#owner_account_id DxHostedPrivateVirtualInterface#owner_account_id}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#vlan DxHostedPrivateVirtualInterface#vlan}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.amazonAddress">amazonAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#amazon_address DxHostedPrivateVirtualInterface#amazon_address}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.bgpAuthKey">bgpAuthKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#bgp_auth_key DxHostedPrivateVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.customerAddress">customerAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#customer_address DxHostedPrivateVirtualInterface#customer_address}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#id DxHostedPrivateVirtualInterface#id}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#mtu DxHostedPrivateVirtualInterface#mtu}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.rateLimit">rateLimit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#rate_limit DxHostedPrivateVirtualInterface#rate_limit}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.addressFamily"></a>

```java
public java.lang.String getAddressFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#address_family DxHostedPrivateVirtualInterface#address_family}.

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.bgpAsn"></a>

```java
public java.lang.Number getBgpAsn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#bgp_asn DxHostedPrivateVirtualInterface#bgp_asn}.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#connection_id DxHostedPrivateVirtualInterface#connection_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#name DxHostedPrivateVirtualInterface#name}.

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.ownerAccountId"></a>

```java
public java.lang.String getOwnerAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#owner_account_id DxHostedPrivateVirtualInterface#owner_account_id}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#vlan DxHostedPrivateVirtualInterface#vlan}.

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.amazonAddress"></a>

```java
public java.lang.String getAmazonAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#amazon_address DxHostedPrivateVirtualInterface#amazon_address}.

---

##### `bgpAuthKey`<sup>Optional</sup> <a name="bgpAuthKey" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.bgpAuthKey"></a>

```java
public java.lang.String getBgpAuthKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#bgp_auth_key DxHostedPrivateVirtualInterface#bgp_auth_key}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.customerAddress"></a>

```java
public java.lang.String getCustomerAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#customer_address DxHostedPrivateVirtualInterface#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#id DxHostedPrivateVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#mtu DxHostedPrivateVirtualInterface#mtu}.

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.rateLimit"></a>

```java
public java.lang.String getRateLimit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#rate_limit DxHostedPrivateVirtualInterface#rate_limit}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#region DxHostedPrivateVirtualInterface#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceConfig.property.timeouts"></a>

```java
public DxHostedPrivateVirtualInterfaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#timeouts DxHostedPrivateVirtualInterface#timeouts}

---

### DxHostedPrivateVirtualInterfaceTimeouts <a name="DxHostedPrivateVirtualInterfaceTimeouts" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.dx_hosted_private_virtual_interface.DxHostedPrivateVirtualInterfaceTimeouts;

DxHostedPrivateVirtualInterfaceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#create DxHostedPrivateVirtualInterface#create}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#delete DxHostedPrivateVirtualInterface#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#create DxHostedPrivateVirtualInterface#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/dx_hosted_private_virtual_interface#delete DxHostedPrivateVirtualInterface#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxHostedPrivateVirtualInterfaceTimeoutsOutputReference <a name="DxHostedPrivateVirtualInterfaceTimeoutsOutputReference" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.dx_hosted_private_virtual_interface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference;

new DxHostedPrivateVirtualInterfaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DxHostedPrivateVirtualInterfaceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dxHostedPrivateVirtualInterface.DxHostedPrivateVirtualInterfaceTimeouts">DxHostedPrivateVirtualInterfaceTimeouts</a>

---



