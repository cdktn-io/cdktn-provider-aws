# `odbNetworkPeeringConnection` Submodule <a name="`odbNetworkPeeringConnection` Submodule" id="@cdktn/provider-aws.odbNetworkPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbNetworkPeeringConnection <a name="OdbNetworkPeeringConnection" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection aws_odb_network_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_network_peering_connection.OdbNetworkPeeringConnection;

OdbNetworkPeeringConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .peerNetworkId(java.lang.String)
//  .odbNetworkArn(java.lang.String)
//  .odbNetworkId(java.lang.String)
//  .peerNetworkCidrs(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OdbNetworkPeeringConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the odb network peering connection. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.peerNetworkId">peerNetworkId</a></code> | <code>java.lang.String</code> | Required field. The unique identifier of the ODB peering connection. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.odbNetworkArn">odbNetworkArn</a></code> | <code>java.lang.String</code> | ARN of the odb network peering connection. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.odbNetworkId">odbNetworkId</a></code> | <code>java.lang.String</code> | Required field. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.peerNetworkCidrs">peerNetworkCidrs</a></code> | <code>java.util.List<java.lang.String></code> | List of peered network cidrs. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#tags OdbNetworkPeeringConnection#tags}. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name of the odb network peering connection. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#display_name OdbNetworkPeeringConnection#display_name}

---

##### `peerNetworkId`<sup>Required</sup> <a name="peerNetworkId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.peerNetworkId"></a>

- *Type:* java.lang.String

Required field. The unique identifier of the ODB peering connection. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#peer_network_id OdbNetworkPeeringConnection#peer_network_id}

---

##### `odbNetworkArn`<sup>Optional</sup> <a name="odbNetworkArn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.odbNetworkArn"></a>

- *Type:* java.lang.String

ARN of the odb network peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#odb_network_arn OdbNetworkPeeringConnection#odb_network_arn}

---

##### `odbNetworkId`<sup>Optional</sup> <a name="odbNetworkId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.odbNetworkId"></a>

- *Type:* java.lang.String

Required field.

The unique identifier of the ODB network that initiates the peering connection. A sample ID is odbpcx-abcdefgh12345678. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#odb_network_id OdbNetworkPeeringConnection#odb_network_id}

---

##### `peerNetworkCidrs`<sup>Optional</sup> <a name="peerNetworkCidrs" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.peerNetworkCidrs"></a>

- *Type:* java.util.List<java.lang.String>

List of peered network cidrs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#peer_network_cidrs OdbNetworkPeeringConnection#peer_network_cidrs}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#region OdbNetworkPeeringConnection#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#tags OdbNetworkPeeringConnection#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#timeouts OdbNetworkPeeringConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetOdbNetworkArn">resetOdbNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetOdbNetworkId">resetOdbNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetPeerNetworkCidrs">resetPeerNetworkCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.putTimeouts"></a>

```java
public void putTimeouts(OdbNetworkPeeringConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a>

---

##### `resetOdbNetworkArn` <a name="resetOdbNetworkArn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetOdbNetworkArn"></a>

```java
public void resetOdbNetworkArn()
```

##### `resetOdbNetworkId` <a name="resetOdbNetworkId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetOdbNetworkId"></a>

```java
public void resetOdbNetworkId()
```

##### `resetPeerNetworkCidrs` <a name="resetPeerNetworkCidrs" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetPeerNetworkCidrs"></a>

```java
public void resetPeerNetworkCidrs()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OdbNetworkPeeringConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isConstruct"></a>

```java
import io.cdktn.providers.aws.odb_network_peering_connection.OdbNetworkPeeringConnection;

OdbNetworkPeeringConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.odb_network_peering_connection.OdbNetworkPeeringConnection;

OdbNetworkPeeringConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.odb_network_peering_connection.OdbNetworkPeeringConnection;

OdbNetworkPeeringConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.odb_network_peering_connection.OdbNetworkPeeringConnection;

OdbNetworkPeeringConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OdbNetworkPeeringConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OdbNetworkPeeringConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OdbNetworkPeeringConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OdbNetworkPeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OdbNetworkPeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbPeeringConnectionType">odbPeeringConnectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkArn">peerNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.percentProgress">percentProgress</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference">OdbNetworkPeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkArnInput">odbNetworkArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkIdInput">odbNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkCidrsInput">peerNetworkCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkIdInput">peerNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkArn">odbNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkId">odbNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkCidrs">peerNetworkCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkId">peerNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `odbPeeringConnectionType`<sup>Required</sup> <a name="odbPeeringConnectionType" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbPeeringConnectionType"></a>

```java
public java.lang.String getOdbPeeringConnectionType();
```

- *Type:* java.lang.String

---

##### `peerNetworkArn`<sup>Required</sup> <a name="peerNetworkArn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkArn"></a>

```java
public java.lang.String getPeerNetworkArn();
```

- *Type:* java.lang.String

---

##### `percentProgress`<sup>Required</sup> <a name="percentProgress" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.percentProgress"></a>

```java
public java.lang.Number getPercentProgress();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.timeouts"></a>

```java
public OdbNetworkPeeringConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference">OdbNetworkPeeringConnectionTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `odbNetworkArnInput`<sup>Optional</sup> <a name="odbNetworkArnInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkArnInput"></a>

```java
public java.lang.String getOdbNetworkArnInput();
```

- *Type:* java.lang.String

---

##### `odbNetworkIdInput`<sup>Optional</sup> <a name="odbNetworkIdInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkIdInput"></a>

```java
public java.lang.String getOdbNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `peerNetworkCidrsInput`<sup>Optional</sup> <a name="peerNetworkCidrsInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkCidrsInput"></a>

```java
public java.util.List<java.lang.String> getPeerNetworkCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerNetworkIdInput`<sup>Optional</sup> <a name="peerNetworkIdInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkIdInput"></a>

```java
public java.lang.String getPeerNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.timeoutsInput"></a>

```java
public IResolvable|OdbNetworkPeeringConnectionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `odbNetworkArn`<sup>Required</sup> <a name="odbNetworkArn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkArn"></a>

```java
public java.lang.String getOdbNetworkArn();
```

- *Type:* java.lang.String

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.odbNetworkId"></a>

```java
public java.lang.String getOdbNetworkId();
```

- *Type:* java.lang.String

---

##### `peerNetworkCidrs`<sup>Required</sup> <a name="peerNetworkCidrs" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkCidrs"></a>

```java
public java.util.List<java.lang.String> getPeerNetworkCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerNetworkId`<sup>Required</sup> <a name="peerNetworkId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.peerNetworkId"></a>

```java
public java.lang.String getPeerNetworkId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OdbNetworkPeeringConnectionConfig <a name="OdbNetworkPeeringConnectionConfig" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_network_peering_connection.OdbNetworkPeeringConnectionConfig;

OdbNetworkPeeringConnectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .peerNetworkId(java.lang.String)
//  .odbNetworkArn(java.lang.String)
//  .odbNetworkId(java.lang.String)
//  .peerNetworkCidrs(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OdbNetworkPeeringConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the odb network peering connection. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.peerNetworkId">peerNetworkId</a></code> | <code>java.lang.String</code> | Required field. The unique identifier of the ODB peering connection. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.odbNetworkArn">odbNetworkArn</a></code> | <code>java.lang.String</code> | ARN of the odb network peering connection. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.odbNetworkId">odbNetworkId</a></code> | <code>java.lang.String</code> | Required field. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.peerNetworkCidrs">peerNetworkCidrs</a></code> | <code>java.util.List<java.lang.String></code> | List of peered network cidrs. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#tags OdbNetworkPeeringConnection#tags}. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name of the odb network peering connection. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#display_name OdbNetworkPeeringConnection#display_name}

---

##### `peerNetworkId`<sup>Required</sup> <a name="peerNetworkId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.peerNetworkId"></a>

```java
public java.lang.String getPeerNetworkId();
```

- *Type:* java.lang.String

Required field. The unique identifier of the ODB peering connection. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#peer_network_id OdbNetworkPeeringConnection#peer_network_id}

---

##### `odbNetworkArn`<sup>Optional</sup> <a name="odbNetworkArn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.odbNetworkArn"></a>

```java
public java.lang.String getOdbNetworkArn();
```

- *Type:* java.lang.String

ARN of the odb network peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#odb_network_arn OdbNetworkPeeringConnection#odb_network_arn}

---

##### `odbNetworkId`<sup>Optional</sup> <a name="odbNetworkId" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.odbNetworkId"></a>

```java
public java.lang.String getOdbNetworkId();
```

- *Type:* java.lang.String

Required field.

The unique identifier of the ODB network that initiates the peering connection. A sample ID is odbpcx-abcdefgh12345678. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#odb_network_id OdbNetworkPeeringConnection#odb_network_id}

---

##### `peerNetworkCidrs`<sup>Optional</sup> <a name="peerNetworkCidrs" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.peerNetworkCidrs"></a>

```java
public java.util.List<java.lang.String> getPeerNetworkCidrs();
```

- *Type:* java.util.List<java.lang.String>

List of peered network cidrs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#peer_network_cidrs OdbNetworkPeeringConnection#peer_network_cidrs}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#region OdbNetworkPeeringConnection#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#tags OdbNetworkPeeringConnection#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionConfig.property.timeouts"></a>

```java
public OdbNetworkPeeringConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#timeouts OdbNetworkPeeringConnection#timeouts}

---

### OdbNetworkPeeringConnectionTimeouts <a name="OdbNetworkPeeringConnectionTimeouts" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_network_peering_connection.OdbNetworkPeeringConnectionTimeouts;

OdbNetworkPeeringConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#create OdbNetworkPeeringConnection#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#delete OdbNetworkPeeringConnection#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/odb_network_peering_connection#update OdbNetworkPeeringConnection#update}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbNetworkPeeringConnectionTimeoutsOutputReference <a name="OdbNetworkPeeringConnectionTimeoutsOutputReference" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_network_peering_connection.OdbNetworkPeeringConnectionTimeoutsOutputReference;

new OdbNetworkPeeringConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbNetworkPeeringConnectionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbNetworkPeeringConnection.OdbNetworkPeeringConnectionTimeouts">OdbNetworkPeeringConnectionTimeouts</a>

---



