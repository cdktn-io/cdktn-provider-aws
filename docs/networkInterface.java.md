# `networkInterface` Submodule <a name="`networkInterface` Submodule" id="@cdktn/provider-aws.networkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterface <a name="NetworkInterface" id="@cdktn/provider-aws.networkInterface.NetworkInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface aws_network_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer"></a>

```java
import io.cdktn.providers.aws.network_interface.NetworkInterface;

NetworkInterface.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .subnetId(java.lang.String)
//  .attachment(IResolvable|java.util.List<NetworkInterfaceAttachment>)
//  .description(java.lang.String)
//  .enablePrimaryIpv6(java.lang.Boolean|IResolvable)
//  .enaSrdSpecification(NetworkInterfaceEnaSrdSpecification)
//  .id(java.lang.String)
//  .interfaceType(java.lang.String)
//  .ipv4PrefixCount(java.lang.Number)
//  .ipv4Prefixes(java.util.List<java.lang.String>)
//  .ipv6AddressCount(java.lang.Number)
//  .ipv6Addresses(java.util.List<java.lang.String>)
//  .ipv6AddressList(java.util.List<java.lang.String>)
//  .ipv6AddressListEnabled(java.lang.Boolean|IResolvable)
//  .ipv6PrefixCount(java.lang.Number)
//  .ipv6Prefixes(java.util.List<java.lang.String>)
//  .privateIp(java.lang.String)
//  .privateIpList(java.util.List<java.lang.String>)
//  .privateIpListEnabled(java.lang.Boolean|IResolvable)
//  .privateIps(java.util.List<java.lang.String>)
//  .privateIpsCount(java.lang.Number)
//  .region(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .sourceDestCheck(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#subnet_id NetworkInterface#subnet_id}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.attachment">attachment</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>></code> | attachment block. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#description NetworkInterface#description}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.enablePrimaryIpv6">enablePrimaryIpv6</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#enable_primary_ipv6 NetworkInterface#enable_primary_ipv6}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.enaSrdSpecification">enaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification">NetworkInterfaceEnaSrdSpecification</a></code> | ena_srd_specification block. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#id NetworkInterface#id}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.interfaceType">interfaceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#interface_type NetworkInterface#interface_type}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv4PrefixCount">ipv4PrefixCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv4_prefix_count NetworkInterface#ipv4_prefix_count}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv4Prefixes">ipv4Prefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv4_prefixes NetworkInterface#ipv4_prefixes}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_count NetworkInterface#ipv6_address_count}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6Addresses">ipv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_addresses NetworkInterface#ipv6_addresses}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6AddressList">ipv6AddressList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_list NetworkInterface#ipv6_address_list}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6AddressListEnabled">ipv6AddressListEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_list_enabled NetworkInterface#ipv6_address_list_enabled}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6PrefixCount">ipv6PrefixCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_prefix_count NetworkInterface#ipv6_prefix_count}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6Prefixes">ipv6Prefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_prefixes NetworkInterface#ipv6_prefixes}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip NetworkInterface#private_ip}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIpList">privateIpList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip_list NetworkInterface#private_ip_list}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIpListEnabled">privateIpListEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip_list_enabled NetworkInterface#private_ip_list_enabled}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIps">privateIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ips NetworkInterface#private_ips}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIpsCount">privateIpsCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ips_count NetworkInterface#private_ips_count}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#security_groups NetworkInterface#security_groups}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.sourceDestCheck">sourceDestCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#source_dest_check NetworkInterface#source_dest_check}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#tags NetworkInterface#tags}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#tags_all NetworkInterface#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#subnet_id NetworkInterface#subnet_id}.

---

##### `attachment`<sup>Optional</sup> <a name="attachment" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.attachment"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>>

attachment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#attachment NetworkInterface#attachment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#description NetworkInterface#description}.

---

##### `enablePrimaryIpv6`<sup>Optional</sup> <a name="enablePrimaryIpv6" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.enablePrimaryIpv6"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#enable_primary_ipv6 NetworkInterface#enable_primary_ipv6}.

---

##### `enaSrdSpecification`<sup>Optional</sup> <a name="enaSrdSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.enaSrdSpecification"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification">NetworkInterfaceEnaSrdSpecification</a>

ena_srd_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ena_srd_specification NetworkInterface#ena_srd_specification}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#id NetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interfaceType`<sup>Optional</sup> <a name="interfaceType" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.interfaceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#interface_type NetworkInterface#interface_type}.

---

##### `ipv4PrefixCount`<sup>Optional</sup> <a name="ipv4PrefixCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv4PrefixCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv4_prefix_count NetworkInterface#ipv4_prefix_count}.

---

##### `ipv4Prefixes`<sup>Optional</sup> <a name="ipv4Prefixes" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv4Prefixes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv4_prefixes NetworkInterface#ipv4_prefixes}.

---

##### `ipv6AddressCount`<sup>Optional</sup> <a name="ipv6AddressCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6AddressCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_count NetworkInterface#ipv6_address_count}.

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6Addresses"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_addresses NetworkInterface#ipv6_addresses}.

---

##### `ipv6AddressList`<sup>Optional</sup> <a name="ipv6AddressList" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6AddressList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_list NetworkInterface#ipv6_address_list}.

---

##### `ipv6AddressListEnabled`<sup>Optional</sup> <a name="ipv6AddressListEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6AddressListEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_list_enabled NetworkInterface#ipv6_address_list_enabled}.

---

##### `ipv6PrefixCount`<sup>Optional</sup> <a name="ipv6PrefixCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6PrefixCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_prefix_count NetworkInterface#ipv6_prefix_count}.

---

##### `ipv6Prefixes`<sup>Optional</sup> <a name="ipv6Prefixes" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6Prefixes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_prefixes NetworkInterface#ipv6_prefixes}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip NetworkInterface#private_ip}.

---

##### `privateIpList`<sup>Optional</sup> <a name="privateIpList" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIpList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip_list NetworkInterface#private_ip_list}.

---

##### `privateIpListEnabled`<sup>Optional</sup> <a name="privateIpListEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIpListEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip_list_enabled NetworkInterface#private_ip_list_enabled}.

---

##### `privateIps`<sup>Optional</sup> <a name="privateIps" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIps"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ips NetworkInterface#private_ips}.

---

##### `privateIpsCount`<sup>Optional</sup> <a name="privateIpsCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIpsCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ips_count NetworkInterface#private_ips_count}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#region NetworkInterface#region}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.securityGroups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#security_groups NetworkInterface#security_groups}.

---

##### `sourceDestCheck`<sup>Optional</sup> <a name="sourceDestCheck" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.sourceDestCheck"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#source_dest_check NetworkInterface#source_dest_check}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#tags NetworkInterface#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#tags_all NetworkInterface#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.putAttachment">putAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.putEnaSrdSpecification">putEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetAttachment">resetAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetEnablePrimaryIpv6">resetEnablePrimaryIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetEnaSrdSpecification">resetEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetInterfaceType">resetInterfaceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv4PrefixCount">resetIpv4PrefixCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv4Prefixes">resetIpv4Prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressCount">resetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6Addresses">resetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressList">resetIpv6AddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressListEnabled">resetIpv6AddressListEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6PrefixCount">resetIpv6PrefixCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6Prefixes">resetIpv6Prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIpList">resetPrivateIpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIpListEnabled">resetPrivateIpListEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIps">resetPrivateIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIpsCount">resetPrivateIpsCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetSourceDestCheck">resetSourceDestCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkInterface.NetworkInterface.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.networkInterface.NetworkInterface.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networkInterface.NetworkInterface.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.networkInterface.NetworkInterface.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networkInterface.NetworkInterface.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkInterface.NetworkInterface.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.networkInterface.NetworkInterface.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.networkInterface.NetworkInterface.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.networkInterface.NetworkInterface.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.networkInterface.NetworkInterface.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkInterface.NetworkInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.networkInterface.NetworkInterface.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.networkInterface.NetworkInterface.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkInterface.NetworkInterface.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkInterface.NetworkInterface.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkInterface.NetworkInterface.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.networkInterface.NetworkInterface.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkInterface.NetworkInterface.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networkInterface.NetworkInterface.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkInterface.NetworkInterface.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttachment` <a name="putAttachment" id="@cdktn/provider-aws.networkInterface.NetworkInterface.putAttachment"></a>

```java
public void putAttachment(IResolvable|java.util.List<NetworkInterfaceAttachment> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkInterface.NetworkInterface.putAttachment.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>>

---

##### `putEnaSrdSpecification` <a name="putEnaSrdSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterface.putEnaSrdSpecification"></a>

```java
public void putEnaSrdSpecification(NetworkInterfaceEnaSrdSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkInterface.NetworkInterface.putEnaSrdSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification">NetworkInterfaceEnaSrdSpecification</a>

---

##### `resetAttachment` <a name="resetAttachment" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetAttachment"></a>

```java
public void resetAttachment()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnablePrimaryIpv6` <a name="resetEnablePrimaryIpv6" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetEnablePrimaryIpv6"></a>

```java
public void resetEnablePrimaryIpv6()
```

##### `resetEnaSrdSpecification` <a name="resetEnaSrdSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetEnaSrdSpecification"></a>

```java
public void resetEnaSrdSpecification()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetId"></a>

```java
public void resetId()
```

##### `resetInterfaceType` <a name="resetInterfaceType" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetInterfaceType"></a>

```java
public void resetInterfaceType()
```

##### `resetIpv4PrefixCount` <a name="resetIpv4PrefixCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv4PrefixCount"></a>

```java
public void resetIpv4PrefixCount()
```

##### `resetIpv4Prefixes` <a name="resetIpv4Prefixes" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv4Prefixes"></a>

```java
public void resetIpv4Prefixes()
```

##### `resetIpv6AddressCount` <a name="resetIpv6AddressCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressCount"></a>

```java
public void resetIpv6AddressCount()
```

##### `resetIpv6Addresses` <a name="resetIpv6Addresses" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6Addresses"></a>

```java
public void resetIpv6Addresses()
```

##### `resetIpv6AddressList` <a name="resetIpv6AddressList" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressList"></a>

```java
public void resetIpv6AddressList()
```

##### `resetIpv6AddressListEnabled` <a name="resetIpv6AddressListEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressListEnabled"></a>

```java
public void resetIpv6AddressListEnabled()
```

##### `resetIpv6PrefixCount` <a name="resetIpv6PrefixCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6PrefixCount"></a>

```java
public void resetIpv6PrefixCount()
```

##### `resetIpv6Prefixes` <a name="resetIpv6Prefixes" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6Prefixes"></a>

```java
public void resetIpv6Prefixes()
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIp"></a>

```java
public void resetPrivateIp()
```

##### `resetPrivateIpList` <a name="resetPrivateIpList" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIpList"></a>

```java
public void resetPrivateIpList()
```

##### `resetPrivateIpListEnabled` <a name="resetPrivateIpListEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIpListEnabled"></a>

```java
public void resetPrivateIpListEnabled()
```

##### `resetPrivateIps` <a name="resetPrivateIps" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIps"></a>

```java
public void resetPrivateIps()
```

##### `resetPrivateIpsCount` <a name="resetPrivateIpsCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIpsCount"></a>

```java
public void resetPrivateIpsCount()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSourceDestCheck` <a name="resetSourceDestCheck" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetSourceDestCheck"></a>

```java
public void resetSourceDestCheck()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkInterface resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.networkInterface.NetworkInterface.isConstruct"></a>

```java
import io.cdktn.providers.aws.network_interface.NetworkInterface;

NetworkInterface.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkInterface.NetworkInterface.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.networkInterface.NetworkInterface.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.network_interface.NetworkInterface;

NetworkInterface.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkInterface.NetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.networkInterface.NetworkInterface.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.network_interface.NetworkInterface;

NetworkInterface.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkInterface.NetworkInterface.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.networkInterface.NetworkInterface.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.network_interface.NetworkInterface;

NetworkInterface.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkInterface.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkInterface.NetworkInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkInterface.NetworkInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.attachment">attachment</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList">NetworkInterfaceAttachmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.enaSrdSpecification">enaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference">NetworkInterfaceEnaSrdSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateDnsName">privateDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.attachmentInput">attachmentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.enablePrimaryIpv6Input">enablePrimaryIpv6Input</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.enaSrdSpecificationInput">enaSrdSpecificationInput</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification">NetworkInterfaceEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.interfaceTypeInput">interfaceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCountInput">ipv4PrefixCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixesInput">ipv4PrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCountInput">ipv6AddressCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressesInput">ipv6AddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabledInput">ipv6AddressListEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListInput">ipv6AddressListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCountInput">ipv6PrefixCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixesInput">ipv6PrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpInput">privateIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabledInput">privateIpListEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpListInput">privateIpListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpsCountInput">privateIpsCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpsInput">privateIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheckInput">sourceDestCheckInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.enablePrimaryIpv6">enablePrimaryIpv6</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.interfaceType">interfaceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCount">ipv4PrefixCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv4Prefixes">ipv4Prefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6Addresses">ipv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressList">ipv6AddressList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabled">ipv6AddressListEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCount">ipv6PrefixCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6Prefixes">ipv6Prefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpList">privateIpList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabled">privateIpListEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIps">privateIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpsCount">privateIpsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheck">sourceDestCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `attachment`<sup>Required</sup> <a name="attachment" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.attachment"></a>

```java
public NetworkInterfaceAttachmentList getAttachment();
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList">NetworkInterfaceAttachmentList</a>

---

##### `enaSrdSpecification`<sup>Required</sup> <a name="enaSrdSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.enaSrdSpecification"></a>

```java
public NetworkInterfaceEnaSrdSpecificationOutputReference getEnaSrdSpecification();
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference">NetworkInterfaceEnaSrdSpecificationOutputReference</a>

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.outpostArn"></a>

```java
public java.lang.String getOutpostArn();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `privateDnsName`<sup>Required</sup> <a name="privateDnsName" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateDnsName"></a>

```java
public java.lang.String getPrivateDnsName();
```

- *Type:* java.lang.String

---

##### `attachmentInput`<sup>Optional</sup> <a name="attachmentInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.attachmentInput"></a>

```java
public IResolvable|java.util.List<NetworkInterfaceAttachment> getAttachmentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enablePrimaryIpv6Input`<sup>Optional</sup> <a name="enablePrimaryIpv6Input" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.enablePrimaryIpv6Input"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrimaryIpv6Input();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enaSrdSpecificationInput`<sup>Optional</sup> <a name="enaSrdSpecificationInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.enaSrdSpecificationInput"></a>

```java
public NetworkInterfaceEnaSrdSpecification getEnaSrdSpecificationInput();
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification">NetworkInterfaceEnaSrdSpecification</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `interfaceTypeInput`<sup>Optional</sup> <a name="interfaceTypeInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.interfaceTypeInput"></a>

```java
public java.lang.String getInterfaceTypeInput();
```

- *Type:* java.lang.String

---

##### `ipv4PrefixCountInput`<sup>Optional</sup> <a name="ipv4PrefixCountInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCountInput"></a>

```java
public java.lang.Number getIpv4PrefixCountInput();
```

- *Type:* java.lang.Number

---

##### `ipv4PrefixesInput`<sup>Optional</sup> <a name="ipv4PrefixesInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixesInput"></a>

```java
public java.util.List<java.lang.String> getIpv4PrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6AddressCountInput`<sup>Optional</sup> <a name="ipv6AddressCountInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCountInput"></a>

```java
public java.lang.Number getIpv6AddressCountInput();
```

- *Type:* java.lang.Number

---

##### `ipv6AddressesInput`<sup>Optional</sup> <a name="ipv6AddressesInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressesInput"></a>

```java
public java.util.List<java.lang.String> getIpv6AddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6AddressListEnabledInput`<sup>Optional</sup> <a name="ipv6AddressListEnabledInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIpv6AddressListEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ipv6AddressListInput`<sup>Optional</sup> <a name="ipv6AddressListInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListInput"></a>

```java
public java.util.List<java.lang.String> getIpv6AddressListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6PrefixCountInput`<sup>Optional</sup> <a name="ipv6PrefixCountInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCountInput"></a>

```java
public java.lang.Number getIpv6PrefixCountInput();
```

- *Type:* java.lang.Number

---

##### `ipv6PrefixesInput`<sup>Optional</sup> <a name="ipv6PrefixesInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixesInput"></a>

```java
public java.util.List<java.lang.String> getIpv6PrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpInput"></a>

```java
public java.lang.String getPrivateIpInput();
```

- *Type:* java.lang.String

---

##### `privateIpListEnabledInput`<sup>Optional</sup> <a name="privateIpListEnabledInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPrivateIpListEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `privateIpListInput`<sup>Optional</sup> <a name="privateIpListInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpListInput"></a>

```java
public java.util.List<java.lang.String> getPrivateIpListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateIpsCountInput`<sup>Optional</sup> <a name="privateIpsCountInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpsCountInput"></a>

```java
public java.lang.Number getPrivateIpsCountInput();
```

- *Type:* java.lang.Number

---

##### `privateIpsInput`<sup>Optional</sup> <a name="privateIpsInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpsInput"></a>

```java
public java.util.List<java.lang.String> getPrivateIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceDestCheckInput`<sup>Optional</sup> <a name="sourceDestCheckInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getSourceDestCheckInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enablePrimaryIpv6`<sup>Required</sup> <a name="enablePrimaryIpv6" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.enablePrimaryIpv6"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrimaryIpv6();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interfaceType`<sup>Required</sup> <a name="interfaceType" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.interfaceType"></a>

```java
public java.lang.String getInterfaceType();
```

- *Type:* java.lang.String

---

##### `ipv4PrefixCount`<sup>Required</sup> <a name="ipv4PrefixCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCount"></a>

```java
public java.lang.Number getIpv4PrefixCount();
```

- *Type:* java.lang.Number

---

##### `ipv4Prefixes`<sup>Required</sup> <a name="ipv4Prefixes" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv4Prefixes"></a>

```java
public java.util.List<java.lang.String> getIpv4Prefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6AddressCount`<sup>Required</sup> <a name="ipv6AddressCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCount"></a>

```java
public java.lang.Number getIpv6AddressCount();
```

- *Type:* java.lang.Number

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6AddressList`<sup>Required</sup> <a name="ipv6AddressList" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressList"></a>

```java
public java.util.List<java.lang.String> getIpv6AddressList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6AddressListEnabled`<sup>Required</sup> <a name="ipv6AddressListEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIpv6AddressListEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ipv6PrefixCount`<sup>Required</sup> <a name="ipv6PrefixCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCount"></a>

```java
public java.lang.Number getIpv6PrefixCount();
```

- *Type:* java.lang.Number

---

##### `ipv6Prefixes`<sup>Required</sup> <a name="ipv6Prefixes" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6Prefixes"></a>

```java
public java.util.List<java.lang.String> getIpv6Prefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `privateIpList`<sup>Required</sup> <a name="privateIpList" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpList"></a>

```java
public java.util.List<java.lang.String> getPrivateIpList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateIpListEnabled`<sup>Required</sup> <a name="privateIpListEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPrivateIpListEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `privateIps`<sup>Required</sup> <a name="privateIps" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIps"></a>

```java
public java.util.List<java.lang.String> getPrivateIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateIpsCount`<sup>Required</sup> <a name="privateIpsCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpsCount"></a>

```java
public java.lang.Number getPrivateIpsCount();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceDestCheck`<sup>Required</sup> <a name="sourceDestCheck" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheck"></a>

```java
public java.lang.Boolean|IResolvable getSourceDestCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceAttachment <a name="NetworkInterfaceAttachment" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment.Initializer"></a>

```java
import io.cdktn.providers.aws.network_interface.NetworkInterfaceAttachment;

NetworkInterfaceAttachment.builder()
    .deviceIndex(java.lang.Number)
    .instance(java.lang.String)
//  .networkCardIndex(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#device_index NetworkInterface#device_index}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment.property.instance">instance</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#instance NetworkInterface#instance}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment.property.networkCardIndex">networkCardIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#network_card_index NetworkInterface#network_card_index}. |

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment.property.deviceIndex"></a>

```java
public java.lang.Number getDeviceIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#device_index NetworkInterface#device_index}.

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#instance NetworkInterface#instance}.

---

##### `networkCardIndex`<sup>Optional</sup> <a name="networkCardIndex" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment.property.networkCardIndex"></a>

```java
public java.lang.Number getNetworkCardIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#network_card_index NetworkInterface#network_card_index}.

---

### NetworkInterfaceConfig <a name="NetworkInterfaceConfig" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.network_interface.NetworkInterfaceConfig;

NetworkInterfaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .subnetId(java.lang.String)
//  .attachment(IResolvable|java.util.List<NetworkInterfaceAttachment>)
//  .description(java.lang.String)
//  .enablePrimaryIpv6(java.lang.Boolean|IResolvable)
//  .enaSrdSpecification(NetworkInterfaceEnaSrdSpecification)
//  .id(java.lang.String)
//  .interfaceType(java.lang.String)
//  .ipv4PrefixCount(java.lang.Number)
//  .ipv4Prefixes(java.util.List<java.lang.String>)
//  .ipv6AddressCount(java.lang.Number)
//  .ipv6Addresses(java.util.List<java.lang.String>)
//  .ipv6AddressList(java.util.List<java.lang.String>)
//  .ipv6AddressListEnabled(java.lang.Boolean|IResolvable)
//  .ipv6PrefixCount(java.lang.Number)
//  .ipv6Prefixes(java.util.List<java.lang.String>)
//  .privateIp(java.lang.String)
//  .privateIpList(java.util.List<java.lang.String>)
//  .privateIpListEnabled(java.lang.Boolean|IResolvable)
//  .privateIps(java.util.List<java.lang.String>)
//  .privateIpsCount(java.lang.Number)
//  .region(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .sourceDestCheck(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#subnet_id NetworkInterface#subnet_id}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.attachment">attachment</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>></code> | attachment block. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#description NetworkInterface#description}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.enablePrimaryIpv6">enablePrimaryIpv6</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#enable_primary_ipv6 NetworkInterface#enable_primary_ipv6}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.enaSrdSpecification">enaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification">NetworkInterfaceEnaSrdSpecification</a></code> | ena_srd_specification block. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#id NetworkInterface#id}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.interfaceType">interfaceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#interface_type NetworkInterface#interface_type}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4PrefixCount">ipv4PrefixCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv4_prefix_count NetworkInterface#ipv4_prefix_count}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4Prefixes">ipv4Prefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv4_prefixes NetworkInterface#ipv4_prefixes}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_count NetworkInterface#ipv6_address_count}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Addresses">ipv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_addresses NetworkInterface#ipv6_addresses}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressList">ipv6AddressList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_list NetworkInterface#ipv6_address_list}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressListEnabled">ipv6AddressListEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_list_enabled NetworkInterface#ipv6_address_list_enabled}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6PrefixCount">ipv6PrefixCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_prefix_count NetworkInterface#ipv6_prefix_count}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Prefixes">ipv6Prefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_prefixes NetworkInterface#ipv6_prefixes}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip NetworkInterface#private_ip}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpList">privateIpList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip_list NetworkInterface#private_ip_list}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpListEnabled">privateIpListEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip_list_enabled NetworkInterface#private_ip_list_enabled}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIps">privateIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ips NetworkInterface#private_ips}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpsCount">privateIpsCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ips_count NetworkInterface#private_ips_count}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#security_groups NetworkInterface#security_groups}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.sourceDestCheck">sourceDestCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#source_dest_check NetworkInterface#source_dest_check}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#tags NetworkInterface#tags}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#tags_all NetworkInterface#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#subnet_id NetworkInterface#subnet_id}.

---

##### `attachment`<sup>Optional</sup> <a name="attachment" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.attachment"></a>

```java
public IResolvable|java.util.List<NetworkInterfaceAttachment> getAttachment();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>>

attachment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#attachment NetworkInterface#attachment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#description NetworkInterface#description}.

---

##### `enablePrimaryIpv6`<sup>Optional</sup> <a name="enablePrimaryIpv6" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.enablePrimaryIpv6"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrimaryIpv6();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#enable_primary_ipv6 NetworkInterface#enable_primary_ipv6}.

---

##### `enaSrdSpecification`<sup>Optional</sup> <a name="enaSrdSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.enaSrdSpecification"></a>

```java
public NetworkInterfaceEnaSrdSpecification getEnaSrdSpecification();
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification">NetworkInterfaceEnaSrdSpecification</a>

ena_srd_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ena_srd_specification NetworkInterface#ena_srd_specification}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#id NetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interfaceType`<sup>Optional</sup> <a name="interfaceType" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.interfaceType"></a>

```java
public java.lang.String getInterfaceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#interface_type NetworkInterface#interface_type}.

---

##### `ipv4PrefixCount`<sup>Optional</sup> <a name="ipv4PrefixCount" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4PrefixCount"></a>

```java
public java.lang.Number getIpv4PrefixCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv4_prefix_count NetworkInterface#ipv4_prefix_count}.

---

##### `ipv4Prefixes`<sup>Optional</sup> <a name="ipv4Prefixes" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4Prefixes"></a>

```java
public java.util.List<java.lang.String> getIpv4Prefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv4_prefixes NetworkInterface#ipv4_prefixes}.

---

##### `ipv6AddressCount`<sup>Optional</sup> <a name="ipv6AddressCount" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressCount"></a>

```java
public java.lang.Number getIpv6AddressCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_count NetworkInterface#ipv6_address_count}.

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_addresses NetworkInterface#ipv6_addresses}.

---

##### `ipv6AddressList`<sup>Optional</sup> <a name="ipv6AddressList" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressList"></a>

```java
public java.util.List<java.lang.String> getIpv6AddressList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_list NetworkInterface#ipv6_address_list}.

---

##### `ipv6AddressListEnabled`<sup>Optional</sup> <a name="ipv6AddressListEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressListEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIpv6AddressListEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_list_enabled NetworkInterface#ipv6_address_list_enabled}.

---

##### `ipv6PrefixCount`<sup>Optional</sup> <a name="ipv6PrefixCount" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6PrefixCount"></a>

```java
public java.lang.Number getIpv6PrefixCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_prefix_count NetworkInterface#ipv6_prefix_count}.

---

##### `ipv6Prefixes`<sup>Optional</sup> <a name="ipv6Prefixes" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Prefixes"></a>

```java
public java.util.List<java.lang.String> getIpv6Prefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_prefixes NetworkInterface#ipv6_prefixes}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip NetworkInterface#private_ip}.

---

##### `privateIpList`<sup>Optional</sup> <a name="privateIpList" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpList"></a>

```java
public java.util.List<java.lang.String> getPrivateIpList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip_list NetworkInterface#private_ip_list}.

---

##### `privateIpListEnabled`<sup>Optional</sup> <a name="privateIpListEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpListEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPrivateIpListEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip_list_enabled NetworkInterface#private_ip_list_enabled}.

---

##### `privateIps`<sup>Optional</sup> <a name="privateIps" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIps"></a>

```java
public java.util.List<java.lang.String> getPrivateIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ips NetworkInterface#private_ips}.

---

##### `privateIpsCount`<sup>Optional</sup> <a name="privateIpsCount" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpsCount"></a>

```java
public java.lang.Number getPrivateIpsCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ips_count NetworkInterface#private_ips_count}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#region NetworkInterface#region}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#security_groups NetworkInterface#security_groups}.

---

##### `sourceDestCheck`<sup>Optional</sup> <a name="sourceDestCheck" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.sourceDestCheck"></a>

```java
public java.lang.Boolean|IResolvable getSourceDestCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#source_dest_check NetworkInterface#source_dest_check}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#tags NetworkInterface#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#tags_all NetworkInterface#tags_all}.

---

### NetworkInterfaceEnaSrdSpecification <a name="NetworkInterfaceEnaSrdSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification.Initializer"></a>

```java
import io.cdktn.providers.aws.network_interface.NetworkInterfaceEnaSrdSpecification;

NetworkInterfaceEnaSrdSpecification.builder()
//  .enaSrdEnabled(java.lang.Boolean|IResolvable)
//  .enaSrdUdpSpecification(NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification.property.enaSrdEnabled">enaSrdEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ena_srd_enabled NetworkInterface#ena_srd_enabled}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification.property.enaSrdUdpSpecification">enaSrdUdpSpecification</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | ena_srd_udp_specification block. |

---

##### `enaSrdEnabled`<sup>Optional</sup> <a name="enaSrdEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification.property.enaSrdEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ena_srd_enabled NetworkInterface#ena_srd_enabled}.

---

##### `enaSrdUdpSpecification`<sup>Optional</sup> <a name="enaSrdUdpSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification.property.enaSrdUdpSpecification"></a>

```java
public NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification getEnaSrdUdpSpecification();
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification</a>

ena_srd_udp_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ena_srd_udp_specification NetworkInterface#ena_srd_udp_specification}

---

### NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification <a name="NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification.Initializer"></a>

```java
import io.cdktn.providers.aws.network_interface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification;

NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification.builder()
//  .enaSrdUdpEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled">enaSrdUdpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ena_srd_udp_enabled NetworkInterface#ena_srd_udp_enabled}. |

---

##### `enaSrdUdpEnabled`<sup>Optional</sup> <a name="enaSrdUdpEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdUdpEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ena_srd_udp_enabled NetworkInterface#ena_srd_udp_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkInterfaceAttachmentList <a name="NetworkInterfaceAttachmentList" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer"></a>

```java
import io.cdktn.providers.aws.network_interface.NetworkInterfaceAttachmentList;

new NetworkInterfaceAttachmentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.get"></a>

```java
public NetworkInterfaceAttachmentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkInterfaceAttachment> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>>

---


### NetworkInterfaceAttachmentOutputReference <a name="NetworkInterfaceAttachmentOutputReference" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.network_interface.NetworkInterfaceAttachmentOutputReference;

new NetworkInterfaceAttachmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resetNetworkCardIndex">resetNetworkCardIndex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetworkCardIndex` <a name="resetNetworkCardIndex" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resetNetworkCardIndex"></a>

```java
public void resetNetworkCardIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.attachmentId">attachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndexInput">deviceIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.networkCardIndexInput">networkCardIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.networkCardIndex">networkCardIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.attachmentId"></a>

```java
public java.lang.String getAttachmentId();
```

- *Type:* java.lang.String

---

##### `deviceIndexInput`<sup>Optional</sup> <a name="deviceIndexInput" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndexInput"></a>

```java
public java.lang.Number getDeviceIndexInput();
```

- *Type:* java.lang.Number

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `networkCardIndexInput`<sup>Optional</sup> <a name="networkCardIndexInput" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.networkCardIndexInput"></a>

```java
public java.lang.Number getNetworkCardIndexInput();
```

- *Type:* java.lang.Number

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndex"></a>

```java
public java.lang.Number getDeviceIndex();
```

- *Type:* java.lang.Number

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `networkCardIndex`<sup>Required</sup> <a name="networkCardIndex" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.networkCardIndex"></a>

```java
public java.lang.Number getNetworkCardIndex();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkInterfaceAttachment getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>

---


### NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference <a name="NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.network_interface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference;

new NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled">resetEnaSrdUdpEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnaSrdUdpEnabled` <a name="resetEnaSrdUdpEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled"></a>

```java
public void resetEnaSrdUdpEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput">enaSrdUdpEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled">enaSrdUdpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enaSrdUdpEnabledInput`<sup>Optional</sup> <a name="enaSrdUdpEnabledInput" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdUdpEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enaSrdUdpEnabled`<sup>Required</sup> <a name="enaSrdUdpEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdUdpEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue"></a>

```java
public NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification</a>

---


### NetworkInterfaceEnaSrdSpecificationOutputReference <a name="NetworkInterfaceEnaSrdSpecificationOutputReference" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.network_interface.NetworkInterfaceEnaSrdSpecificationOutputReference;

new NetworkInterfaceEnaSrdSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification">putEnaSrdUdpSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.resetEnaSrdEnabled">resetEnaSrdEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification">resetEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnaSrdUdpSpecification` <a name="putEnaSrdUdpSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification"></a>

```java
public void putEnaSrdUdpSpecification(NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification</a>

---

##### `resetEnaSrdEnabled` <a name="resetEnaSrdEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.resetEnaSrdEnabled"></a>

```java
public void resetEnaSrdEnabled()
```

##### `resetEnaSrdUdpSpecification` <a name="resetEnaSrdUdpSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification"></a>

```java
public void resetEnaSrdUdpSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification">enaSrdUdpSpecification</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput">enaSrdEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput">enaSrdUdpSpecificationInput</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.enaSrdEnabled">enaSrdEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification">NetworkInterfaceEnaSrdSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enaSrdUdpSpecification`<sup>Required</sup> <a name="enaSrdUdpSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification"></a>

```java
public NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference getEnaSrdUdpSpecification();
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a>

---

##### `enaSrdEnabledInput`<sup>Optional</sup> <a name="enaSrdEnabledInput" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enaSrdUdpSpecificationInput`<sup>Optional</sup> <a name="enaSrdUdpSpecificationInput" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput"></a>

```java
public NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification getEnaSrdUdpSpecificationInput();
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification</a>

---

##### `enaSrdEnabled`<sup>Required</sup> <a name="enaSrdEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.enaSrdEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.internalValue"></a>

```java
public NetworkInterfaceEnaSrdSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification">NetworkInterfaceEnaSrdSpecification</a>

---



