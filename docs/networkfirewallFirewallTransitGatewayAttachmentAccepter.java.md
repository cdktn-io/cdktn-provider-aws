# `networkfirewallFirewallTransitGatewayAttachmentAccepter` Submodule <a name="`networkfirewallFirewallTransitGatewayAttachmentAccepter` Submodule" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallFirewallTransitGatewayAttachmentAccepter <a name="NetworkfirewallFirewallTransitGatewayAttachmentAccepter" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter aws_networkfirewall_firewall_transit_gateway_attachment_accepter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer"></a>

```java
import io.cdktn.providers.aws.networkfirewall_firewall_transit_gateway_attachment_accepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter;

NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .transitGatewayAttachmentId(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#transit_gateway_attachment_id NetworkfirewallFirewallTransitGatewayAttachmentAccepter#transit_gateway_attachment_id}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts">NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.transitGatewayAttachmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#transit_gateway_attachment_id NetworkfirewallFirewallTransitGatewayAttachmentAccepter#transit_gateway_attachment_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#region NetworkfirewallFirewallTransitGatewayAttachmentAccepter#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts">NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#timeouts NetworkfirewallFirewallTransitGatewayAttachmentAccepter#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.putTimeouts"></a>

```java
public void putTimeouts(NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts">NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkfirewallFirewallTransitGatewayAttachmentAccepter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isConstruct"></a>

```java
import io.cdktn.providers.aws.networkfirewall_firewall_transit_gateway_attachment_accepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter;

NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.networkfirewall_firewall_transit_gateway_attachment_accepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter;

NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.networkfirewall_firewall_transit_gateway_attachment_accepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter;

NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.networkfirewall_firewall_transit_gateway_attachment_accepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter;

NetworkfirewallFirewallTransitGatewayAttachmentAccepter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkfirewallFirewallTransitGatewayAttachmentAccepter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkfirewallFirewallTransitGatewayAttachmentAccepter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkfirewallFirewallTransitGatewayAttachmentAccepter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkfirewallFirewallTransitGatewayAttachmentAccepter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallFirewallTransitGatewayAttachmentAccepter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference">NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts">NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.transitGatewayAttachmentIdInput">transitGatewayAttachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.timeouts"></a>

```java
public NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference">NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.timeoutsInput"></a>

```java
public IResolvable|NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts">NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts</a>

---

##### `transitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="transitGatewayAttachmentIdInput" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.transitGatewayAttachmentIdInput"></a>

```java
public java.lang.String getTransitGatewayAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.transitGatewayAttachmentId"></a>

```java
public java.lang.String getTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig <a name="NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.networkfirewall_firewall_transit_gateway_attachment_accepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig;

NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .transitGatewayAttachmentId(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#transit_gateway_attachment_id NetworkfirewallFirewallTransitGatewayAttachmentAccepter#transit_gateway_attachment_id}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts">NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.transitGatewayAttachmentId"></a>

```java
public java.lang.String getTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#transit_gateway_attachment_id NetworkfirewallFirewallTransitGatewayAttachmentAccepter#transit_gateway_attachment_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#region NetworkfirewallFirewallTransitGatewayAttachmentAccepter#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.timeouts"></a>

```java
public NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts">NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#timeouts NetworkfirewallFirewallTransitGatewayAttachmentAccepter#timeouts}

---

### NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts <a name="NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.networkfirewall_firewall_transit_gateway_attachment_accepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts;

NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#create NetworkfirewallFirewallTransitGatewayAttachmentAccepter#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#delete NetworkfirewallFirewallTransitGatewayAttachmentAccepter#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference <a name="NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.networkfirewall_firewall_transit_gateway_attachment_accepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference;

new NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts">NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts">NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts</a>

---



