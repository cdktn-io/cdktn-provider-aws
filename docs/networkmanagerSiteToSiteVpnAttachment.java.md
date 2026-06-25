# `networkmanagerSiteToSiteVpnAttachment` Submodule <a name="`networkmanagerSiteToSiteVpnAttachment` Submodule" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerSiteToSiteVpnAttachment <a name="NetworkmanagerSiteToSiteVpnAttachment" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment aws_networkmanager_site_to_site_vpn_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer"></a>

```java
import io.cdktn.providers.aws.networkmanager_site_to_site_vpn_attachment.NetworkmanagerSiteToSiteVpnAttachment;

NetworkmanagerSiteToSiteVpnAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .coreNetworkId(java.lang.String)
    .vpnConnectionArn(java.lang.String)
//  .id(java.lang.String)
//  .routingPolicyLabel(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NetworkmanagerSiteToSiteVpnAttachmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.coreNetworkId">coreNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#core_network_id NetworkmanagerSiteToSiteVpnAttachment#core_network_id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.vpnConnectionArn">vpnConnectionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#vpn_connection_arn NetworkmanagerSiteToSiteVpnAttachment#vpn_connection_arn}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#id NetworkmanagerSiteToSiteVpnAttachment#id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.routingPolicyLabel">routingPolicyLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#routing_policy_label NetworkmanagerSiteToSiteVpnAttachment#routing_policy_label}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags NetworkmanagerSiteToSiteVpnAttachment#tags}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags_all NetworkmanagerSiteToSiteVpnAttachment#tags_all}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.coreNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#core_network_id NetworkmanagerSiteToSiteVpnAttachment#core_network_id}.

---

##### `vpnConnectionArn`<sup>Required</sup> <a name="vpnConnectionArn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.vpnConnectionArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#vpn_connection_arn NetworkmanagerSiteToSiteVpnAttachment#vpn_connection_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#id NetworkmanagerSiteToSiteVpnAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routingPolicyLabel`<sup>Optional</sup> <a name="routingPolicyLabel" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.routingPolicyLabel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#routing_policy_label NetworkmanagerSiteToSiteVpnAttachment#routing_policy_label}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags NetworkmanagerSiteToSiteVpnAttachment#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags_all NetworkmanagerSiteToSiteVpnAttachment#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#timeouts NetworkmanagerSiteToSiteVpnAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetRoutingPolicyLabel">resetRoutingPolicyLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putTimeouts"></a>

```java
public void putTimeouts(NetworkmanagerSiteToSiteVpnAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetRoutingPolicyLabel` <a name="resetRoutingPolicyLabel" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetRoutingPolicyLabel"></a>

```java
public void resetRoutingPolicyLabel()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerSiteToSiteVpnAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isConstruct"></a>

```java
import io.cdktn.providers.aws.networkmanager_site_to_site_vpn_attachment.NetworkmanagerSiteToSiteVpnAttachment;

NetworkmanagerSiteToSiteVpnAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.networkmanager_site_to_site_vpn_attachment.NetworkmanagerSiteToSiteVpnAttachment;

NetworkmanagerSiteToSiteVpnAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.networkmanager_site_to_site_vpn_attachment.NetworkmanagerSiteToSiteVpnAttachment;

NetworkmanagerSiteToSiteVpnAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.networkmanager_site_to_site_vpn_attachment.NetworkmanagerSiteToSiteVpnAttachment;

NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkmanagerSiteToSiteVpnAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkmanagerSiteToSiteVpnAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkmanagerSiteToSiteVpnAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerSiteToSiteVpnAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentType">attachmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkArn">coreNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.edgeLocation">edgeLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.ownerAccountId">ownerAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.segmentName">segmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference">NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkIdInput">coreNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabelInput">routingPolicyLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArnInput">vpnConnectionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkId">coreNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabel">routingPolicyLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArn">vpnConnectionArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentPolicyRuleNumber"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumber();
```

- *Type:* java.lang.Number

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentType"></a>

```java
public java.lang.String getAttachmentType();
```

- *Type:* java.lang.String

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkArn"></a>

```java
public java.lang.String getCoreNetworkArn();
```

- *Type:* java.lang.String

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.edgeLocation"></a>

```java
public java.lang.String getEdgeLocation();
```

- *Type:* java.lang.String

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.ownerAccountId"></a>

```java
public java.lang.String getOwnerAccountId();
```

- *Type:* java.lang.String

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.segmentName"></a>

```java
public java.lang.String getSegmentName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.timeouts"></a>

```java
public NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference">NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference</a>

---

##### `coreNetworkIdInput`<sup>Optional</sup> <a name="coreNetworkIdInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkIdInput"></a>

```java
public java.lang.String getCoreNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `routingPolicyLabelInput`<sup>Optional</sup> <a name="routingPolicyLabelInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabelInput"></a>

```java
public java.lang.String getRoutingPolicyLabelInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.timeoutsInput"></a>

```java
public IResolvable|NetworkmanagerSiteToSiteVpnAttachmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a>

---

##### `vpnConnectionArnInput`<sup>Optional</sup> <a name="vpnConnectionArnInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArnInput"></a>

```java
public java.lang.String getVpnConnectionArnInput();
```

- *Type:* java.lang.String

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkId"></a>

```java
public java.lang.String getCoreNetworkId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `routingPolicyLabel`<sup>Required</sup> <a name="routingPolicyLabel" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabel"></a>

```java
public java.lang.String getRoutingPolicyLabel();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpnConnectionArn`<sup>Required</sup> <a name="vpnConnectionArn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArn"></a>

```java
public java.lang.String getVpnConnectionArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerSiteToSiteVpnAttachmentConfig <a name="NetworkmanagerSiteToSiteVpnAttachmentConfig" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.networkmanager_site_to_site_vpn_attachment.NetworkmanagerSiteToSiteVpnAttachmentConfig;

NetworkmanagerSiteToSiteVpnAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .coreNetworkId(java.lang.String)
    .vpnConnectionArn(java.lang.String)
//  .id(java.lang.String)
//  .routingPolicyLabel(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NetworkmanagerSiteToSiteVpnAttachmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.coreNetworkId">coreNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#core_network_id NetworkmanagerSiteToSiteVpnAttachment#core_network_id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.vpnConnectionArn">vpnConnectionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#vpn_connection_arn NetworkmanagerSiteToSiteVpnAttachment#vpn_connection_arn}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#id NetworkmanagerSiteToSiteVpnAttachment#id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.routingPolicyLabel">routingPolicyLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#routing_policy_label NetworkmanagerSiteToSiteVpnAttachment#routing_policy_label}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags NetworkmanagerSiteToSiteVpnAttachment#tags}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags_all NetworkmanagerSiteToSiteVpnAttachment#tags_all}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.coreNetworkId"></a>

```java
public java.lang.String getCoreNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#core_network_id NetworkmanagerSiteToSiteVpnAttachment#core_network_id}.

---

##### `vpnConnectionArn`<sup>Required</sup> <a name="vpnConnectionArn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.vpnConnectionArn"></a>

```java
public java.lang.String getVpnConnectionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#vpn_connection_arn NetworkmanagerSiteToSiteVpnAttachment#vpn_connection_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#id NetworkmanagerSiteToSiteVpnAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routingPolicyLabel`<sup>Optional</sup> <a name="routingPolicyLabel" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.routingPolicyLabel"></a>

```java
public java.lang.String getRoutingPolicyLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#routing_policy_label NetworkmanagerSiteToSiteVpnAttachment#routing_policy_label}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags NetworkmanagerSiteToSiteVpnAttachment#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags_all NetworkmanagerSiteToSiteVpnAttachment#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.timeouts"></a>

```java
public NetworkmanagerSiteToSiteVpnAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#timeouts NetworkmanagerSiteToSiteVpnAttachment#timeouts}

---

### NetworkmanagerSiteToSiteVpnAttachmentTimeouts <a name="NetworkmanagerSiteToSiteVpnAttachmentTimeouts" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.networkmanager_site_to_site_vpn_attachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts;

NetworkmanagerSiteToSiteVpnAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#create NetworkmanagerSiteToSiteVpnAttachment#create}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#delete NetworkmanagerSiteToSiteVpnAttachment#delete}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#update NetworkmanagerSiteToSiteVpnAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#create NetworkmanagerSiteToSiteVpnAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#delete NetworkmanagerSiteToSiteVpnAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_site_to_site_vpn_attachment#update NetworkmanagerSiteToSiteVpnAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference <a name="NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.networkmanager_site_to_site_vpn_attachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference;

new NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerSiteToSiteVpnAttachmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a>

---



