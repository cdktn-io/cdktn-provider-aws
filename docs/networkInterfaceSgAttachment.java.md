# `networkInterfaceSgAttachment` Submodule <a name="`networkInterfaceSgAttachment` Submodule" id="@cdktn/provider-aws.networkInterfaceSgAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterfaceSgAttachment <a name="NetworkInterfaceSgAttachment" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment aws_network_interface_sg_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer"></a>

```java
import io.cdktn.providers.aws.network_interface_sg_attachment.NetworkInterfaceSgAttachment;

NetworkInterfaceSgAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .networkInterfaceId(java.lang.String)
    .securityGroupId(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(NetworkInterfaceSgAttachmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#network_interface_id NetworkInterfaceSgAttachment#network_interface_id}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#security_group_id NetworkInterfaceSgAttachment#security_group_id}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#id NetworkInterfaceSgAttachment#id}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeouts">NetworkInterfaceSgAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.networkInterfaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#network_interface_id NetworkInterfaceSgAttachment#network_interface_id}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.securityGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#security_group_id NetworkInterfaceSgAttachment#security_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#id NetworkInterfaceSgAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#region NetworkInterfaceSgAttachment#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeouts">NetworkInterfaceSgAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#timeouts NetworkInterfaceSgAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.putTimeouts"></a>

```java
public void putTimeouts(NetworkInterfaceSgAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeouts">NetworkInterfaceSgAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkInterfaceSgAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.isConstruct"></a>

```java
import io.cdktn.providers.aws.network_interface_sg_attachment.NetworkInterfaceSgAttachment;

NetworkInterfaceSgAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.network_interface_sg_attachment.NetworkInterfaceSgAttachment;

NetworkInterfaceSgAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.network_interface_sg_attachment.NetworkInterfaceSgAttachment;

NetworkInterfaceSgAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.network_interface_sg_attachment.NetworkInterfaceSgAttachment;

NetworkInterfaceSgAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkInterfaceSgAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkInterfaceSgAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkInterfaceSgAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkInterfaceSgAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkInterfaceSgAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference">NetworkInterfaceSgAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeouts">NetworkInterfaceSgAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.timeouts"></a>

```java
public NetworkInterfaceSgAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference">NetworkInterfaceSgAttachmentTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.securityGroupIdInput"></a>

```java
public java.lang.String getSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.timeoutsInput"></a>

```java
public IResolvable|NetworkInterfaceSgAttachmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeouts">NetworkInterfaceSgAttachmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceSgAttachmentConfig <a name="NetworkInterfaceSgAttachmentConfig" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.network_interface_sg_attachment.NetworkInterfaceSgAttachmentConfig;

NetworkInterfaceSgAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .networkInterfaceId(java.lang.String)
    .securityGroupId(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(NetworkInterfaceSgAttachmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#network_interface_id NetworkInterfaceSgAttachment#network_interface_id}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#security_group_id NetworkInterfaceSgAttachment#security_group_id}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#id NetworkInterfaceSgAttachment#id}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeouts">NetworkInterfaceSgAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#network_interface_id NetworkInterfaceSgAttachment#network_interface_id}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#security_group_id NetworkInterfaceSgAttachment#security_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#id NetworkInterfaceSgAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#region NetworkInterfaceSgAttachment#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentConfig.property.timeouts"></a>

```java
public NetworkInterfaceSgAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeouts">NetworkInterfaceSgAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#timeouts NetworkInterfaceSgAttachment#timeouts}

---

### NetworkInterfaceSgAttachmentTimeouts <a name="NetworkInterfaceSgAttachmentTimeouts" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.network_interface_sg_attachment.NetworkInterfaceSgAttachmentTimeouts;

NetworkInterfaceSgAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#create NetworkInterfaceSgAttachment#create}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#delete NetworkInterfaceSgAttachment#delete}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#read NetworkInterfaceSgAttachment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#create NetworkInterfaceSgAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#delete NetworkInterfaceSgAttachment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/network_interface_sg_attachment#read NetworkInterfaceSgAttachment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkInterfaceSgAttachmentTimeoutsOutputReference <a name="NetworkInterfaceSgAttachmentTimeoutsOutputReference" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.network_interface_sg_attachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference;

new NetworkInterfaceSgAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeouts">NetworkInterfaceSgAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkInterfaceSgAttachmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkInterfaceSgAttachment.NetworkInterfaceSgAttachmentTimeouts">NetworkInterfaceSgAttachmentTimeouts</a>

---



