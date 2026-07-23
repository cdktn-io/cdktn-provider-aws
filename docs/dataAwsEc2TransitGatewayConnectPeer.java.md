# `dataAwsEc2TransitGatewayConnectPeer` Submodule <a name="`dataAwsEc2TransitGatewayConnectPeer` Submodule" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayConnectPeer <a name="DataAwsEc2TransitGatewayConnectPeer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer aws_ec2_transit_gateway_connect_peer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect_peer.DataAwsEc2TransitGatewayConnectPeer;

DataAwsEc2TransitGatewayConnectPeer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsEc2TransitGatewayConnectPeerFilter>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2TransitGatewayConnectPeerTimeouts)
//  .transitGatewayConnectPeerId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#id DataAwsEc2TransitGatewayConnectPeer#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#tags DataAwsEc2TransitGatewayConnectPeer#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts">DataAwsEc2TransitGatewayConnectPeerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.transitGatewayConnectPeerId">transitGatewayConnectPeerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#transit_gateway_connect_peer_id DataAwsEc2TransitGatewayConnectPeer#transit_gateway_connect_peer_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.filter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#filter DataAwsEc2TransitGatewayConnectPeer#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#id DataAwsEc2TransitGatewayConnectPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#region DataAwsEc2TransitGatewayConnectPeer#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#tags DataAwsEc2TransitGatewayConnectPeer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts">DataAwsEc2TransitGatewayConnectPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#timeouts DataAwsEc2TransitGatewayConnectPeer#timeouts}

---

##### `transitGatewayConnectPeerId`<sup>Optional</sup> <a name="transitGatewayConnectPeerId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.Initializer.parameter.transitGatewayConnectPeerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#transit_gateway_connect_peer_id DataAwsEc2TransitGatewayConnectPeer#transit_gateway_connect_peer_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetTransitGatewayConnectPeerId">resetTransitGatewayConnectPeerId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<DataAwsEc2TransitGatewayConnectPeerFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.putTimeouts"></a>

```java
public void putTimeouts(DataAwsEc2TransitGatewayConnectPeerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts">DataAwsEc2TransitGatewayConnectPeerTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransitGatewayConnectPeerId` <a name="resetTransitGatewayConnectPeerId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.resetTransitGatewayConnectPeerId"></a>

```java
public void resetTransitGatewayConnectPeerId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2TransitGatewayConnectPeer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect_peer.DataAwsEc2TransitGatewayConnectPeer;

DataAwsEc2TransitGatewayConnectPeer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect_peer.DataAwsEc2TransitGatewayConnectPeer;

DataAwsEc2TransitGatewayConnectPeer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect_peer.DataAwsEc2TransitGatewayConnectPeer;

DataAwsEc2TransitGatewayConnectPeer.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect_peer.DataAwsEc2TransitGatewayConnectPeer;

DataAwsEc2TransitGatewayConnectPeer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsEc2TransitGatewayConnectPeer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsEc2TransitGatewayConnectPeer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsEc2TransitGatewayConnectPeer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsEc2TransitGatewayConnectPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2TransitGatewayConnectPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.bgpAsn">bgpAsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.bgpPeerAddress">bgpPeerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.bgpTransitGatewayAddresses">bgpTransitGatewayAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList">DataAwsEc2TransitGatewayConnectPeerFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.peerAddress">peerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference">DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.transitGatewayAddress">transitGatewayAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts">DataAwsEc2TransitGatewayConnectPeerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.transitGatewayConnectPeerIdInput">transitGatewayConnectPeerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.transitGatewayConnectPeerId">transitGatewayConnectPeerId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.bgpAsn"></a>

```java
public java.lang.String getBgpAsn();
```

- *Type:* java.lang.String

---

##### `bgpPeerAddress`<sup>Required</sup> <a name="bgpPeerAddress" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.bgpPeerAddress"></a>

```java
public java.lang.String getBgpPeerAddress();
```

- *Type:* java.lang.String

---

##### `bgpTransitGatewayAddresses`<sup>Required</sup> <a name="bgpTransitGatewayAddresses" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.bgpTransitGatewayAddresses"></a>

```java
public java.util.List<java.lang.String> getBgpTransitGatewayAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.filter"></a>

```java
public DataAwsEc2TransitGatewayConnectPeerFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList">DataAwsEc2TransitGatewayConnectPeerFilterList</a>

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.insideCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getInsideCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.peerAddress"></a>

```java
public java.lang.String getPeerAddress();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.timeouts"></a>

```java
public DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference">DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference</a>

---

##### `transitGatewayAddress`<sup>Required</sup> <a name="transitGatewayAddress" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.transitGatewayAddress"></a>

```java
public java.lang.String getTransitGatewayAddress();
```

- *Type:* java.lang.String

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.transitGatewayAttachmentId"></a>

```java
public java.lang.String getTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.filterInput"></a>

```java
public IResolvable|java.util.List<DataAwsEc2TransitGatewayConnectPeerFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.timeoutsInput"></a>

```java
public IResolvable|DataAwsEc2TransitGatewayConnectPeerTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts">DataAwsEc2TransitGatewayConnectPeerTimeouts</a>

---

##### `transitGatewayConnectPeerIdInput`<sup>Optional</sup> <a name="transitGatewayConnectPeerIdInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.transitGatewayConnectPeerIdInput"></a>

```java
public java.lang.String getTransitGatewayConnectPeerIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transitGatewayConnectPeerId`<sup>Required</sup> <a name="transitGatewayConnectPeerId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.transitGatewayConnectPeerId"></a>

```java
public java.lang.String getTransitGatewayConnectPeerId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayConnectPeerConfig <a name="DataAwsEc2TransitGatewayConnectPeerConfig" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect_peer.DataAwsEc2TransitGatewayConnectPeerConfig;

DataAwsEc2TransitGatewayConnectPeerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsEc2TransitGatewayConnectPeerFilter>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2TransitGatewayConnectPeerTimeouts)
//  .transitGatewayConnectPeerId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#id DataAwsEc2TransitGatewayConnectPeer#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#tags DataAwsEc2TransitGatewayConnectPeer#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts">DataAwsEc2TransitGatewayConnectPeerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.transitGatewayConnectPeerId">transitGatewayConnectPeerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#transit_gateway_connect_peer_id DataAwsEc2TransitGatewayConnectPeer#transit_gateway_connect_peer_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.filter"></a>

```java
public IResolvable|java.util.List<DataAwsEc2TransitGatewayConnectPeerFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#filter DataAwsEc2TransitGatewayConnectPeer#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#id DataAwsEc2TransitGatewayConnectPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#region DataAwsEc2TransitGatewayConnectPeer#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#tags DataAwsEc2TransitGatewayConnectPeer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.timeouts"></a>

```java
public DataAwsEc2TransitGatewayConnectPeerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts">DataAwsEc2TransitGatewayConnectPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#timeouts DataAwsEc2TransitGatewayConnectPeer#timeouts}

---

##### `transitGatewayConnectPeerId`<sup>Optional</sup> <a name="transitGatewayConnectPeerId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerConfig.property.transitGatewayConnectPeerId"></a>

```java
public java.lang.String getTransitGatewayConnectPeerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#transit_gateway_connect_peer_id DataAwsEc2TransitGatewayConnectPeer#transit_gateway_connect_peer_id}.

---

### DataAwsEc2TransitGatewayConnectPeerFilter <a name="DataAwsEc2TransitGatewayConnectPeerFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect_peer.DataAwsEc2TransitGatewayConnectPeerFilter;

DataAwsEc2TransitGatewayConnectPeerFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#name DataAwsEc2TransitGatewayConnectPeer#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#values DataAwsEc2TransitGatewayConnectPeer#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#name DataAwsEc2TransitGatewayConnectPeer#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#values DataAwsEc2TransitGatewayConnectPeer#values}.

---

### DataAwsEc2TransitGatewayConnectPeerTimeouts <a name="DataAwsEc2TransitGatewayConnectPeerTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect_peer.DataAwsEc2TransitGatewayConnectPeerTimeouts;

DataAwsEc2TransitGatewayConnectPeerTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#read DataAwsEc2TransitGatewayConnectPeer#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/ec2_transit_gateway_connect_peer#read DataAwsEc2TransitGatewayConnectPeer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayConnectPeerFilterList <a name="DataAwsEc2TransitGatewayConnectPeerFilterList" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect_peer.DataAwsEc2TransitGatewayConnectPeerFilterList;

new DataAwsEc2TransitGatewayConnectPeerFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.get"></a>

```java
public DataAwsEc2TransitGatewayConnectPeerFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsEc2TransitGatewayConnectPeerFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>>

---


### DataAwsEc2TransitGatewayConnectPeerFilterOutputReference <a name="DataAwsEc2TransitGatewayConnectPeerFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect_peer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference;

new DataAwsEc2TransitGatewayConnectPeerFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsEc2TransitGatewayConnectPeerFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerFilter">DataAwsEc2TransitGatewayConnectPeerFilter</a>

---


### DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect_peer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference;

new DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts">DataAwsEc2TransitGatewayConnectPeerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsEc2TransitGatewayConnectPeerTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnectPeer.DataAwsEc2TransitGatewayConnectPeerTimeouts">DataAwsEc2TransitGatewayConnectPeerTimeouts</a>

---



